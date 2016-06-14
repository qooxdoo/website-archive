(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"feedreader.Application","qx.theme":"qx.theme.Modern","qx.version":"1.0.1"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"feedreader":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.0.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":{},"de":{"Add":"Hinzufügen","Add a feed":"Feed hinzufügen","Add feed":"Feed hinzufügen","Cancel":"Abbrechen","Feed Information":"Feed Information","FeedReader (qooxdoo powered)":"FeedReader (qooxdoo powered)","Help":"Hilfe","Language":"Sprache","OK":"OK","Open preferences window.":"Einstellungsfenster öffnen","Please enter a title.":"Bitte geben Sie einen Titel an.","Please enter a url.":"Bitte geben Sie eine URL an.","Posts":"Nachrichten","Preferences":"Einstellungen","Reload":"Neu laden","Reload the feeds. (%1)":"Feeds neu laden. (%1)","Remove feed":"Feed löschen","Static Feeds":"Vordefinierte Quellen","Title:":"Titel:","URL:":"URL:","User Feeds":"Eigene Quellen","key_full_Alt":"Alt","key_full_Apps":"Kontextmenü","key_full_Backspace":"Rücktaste","key_full_CapsLock":"Feststelltaste","key_full_Control":"Steuerung","key_full_Delete":"Entfernen","key_full_Down":"Pfeil runter","key_full_End":"Ende","key_full_Enter":"Enter","key_full_Escape":"Escape","key_full_Home":"Position 1","key_full_Insert":"Einfügen","key_full_Left":"Pfeil links","key_full_Meta":"Meta","key_full_NumLock":"NumLock","key_full_PageDown":"Bild runter ","key_full_PageUp":"Bild hoch","key_full_Pause":"Pause","key_full_PrintScreen":"Drucken","key_full_Right":"Pfeil rechts","key_full_Scroll":"Rollen","key_full_Shift":"Umschalttaste","key_full_Space":"Leertaste","key_full_Tab":"Tabulator","key_full_Up":"Pfeil hoch","key_full_Win":"Windowstaste","key_short_Alt":"Alt","key_short_Apps":"Kontext","key_short_Backspace":"Rück","key_short_CapsLock":"Feststell","key_short_Control":"Strg","key_short_Delete":"Entf","key_short_Down":"Runter","key_short_End":"Ende","key_short_Enter":"Enter","key_short_Escape":"Esc","key_short_Home":"Pos1","key_short_Insert":"Einfg","key_short_Left":"Links","key_short_Meta":"Meta","key_short_NumLock":"Num","key_short_PageDown":"Bild runter","key_short_PageUp":"Bild hoch","key_short_Pause":"Pause","key_short_PrintScreen":"Druck","key_short_Right":"Rechts ","key_short_Scroll":"Rollen","key_short_Shift":"Umschalt","key_short_Space":"Leer","key_short_Tab":"Tab","key_short_Up":"Hoch","key_short_Win":"Win"},"en":{},"es":{"Add":"Agregar","Add a feed":"Agregar Feed","Add feed":"Agregar feed","Cancel":"Cancelar","Feed Information":"Información del Feed","FeedReader (qooxdoo powered)":"FeedReader (qooxdoo powered)","Help":"Ayuda","Language":"Lenguaje","OK":"OK","Open preferences window.":"Abre la ventana de preferencias","Please enter a title.":"Por favor ingrese un título","Please enter a url.":"Por favor ingrese una url","Posts":"Posts","Preferences":"Preferencias","Reload":"Actualizar","Reload the feeds. (%1)":"Recargar los feeds (%1)","Remove feed":"Eliminar feed","Static Feeds":"Feeds Estáticos","Title:":"Título:","URL:":"URL:","User Feeds":"Feeds del Usuario","key_full_Alt":"Alt","key_full_Apps":"Aplicaciones","key_full_Backspace":"Retroceso","key_full_CapsLock":"Bloqueo Mayúsculas","key_full_Control":"Control","key_full_Delete":"Suprimir","key_full_Down":"Flecha abajo","key_full_End":"Fin","key_full_Enter":"Intro","key_full_Escape":"Escape","key_full_Home":"Inicio","key_full_Insert":"Insertar","key_full_Left":"Flecha izquierda","key_full_Meta":"Meta","key_full_NumLock":"Bloqueo Numérico","key_full_PageDown":"Avanzar Página","key_full_PageUp":"Retroceder Página","key_full_Pause":"Pausa","key_full_PrintScreen":"Imprimir Pantalla","key_full_Right":"Flecha derecha","key_full_Scroll":"Bloq. Despl.","key_full_Shift":"Mayúscula","key_full_Space":"Espacio","key_full_Tab":"Tabulador","key_full_Up":"Flecha arriba","key_full_Win":"Windows","key_short_Alt":"Alt","key_short_Apps":"Aplic","key_short_Backspace":"Retroceso","key_short_CapsLock":"BloqMayús","key_short_Control":"Ctrl","key_short_Control_Mac":"Ctrl","key_short_Delete":"Supr","key_short_Down":"Abajo","key_short_End":"Fin","key_short_Enter":"Intro","key_short_Escape":"Esc","key_short_Home":"Inicio","key_short_Insert":"Insert","key_short_Left":"Izquierda","key_short_Meta":"Meta","key_short_NumLock":"BloqNum","key_short_PageDown":"AvPág","key_short_PageUp":"RePág","key_short_Pause":"Pausa","key_short_PrintScreen":"ImprPant","key_short_Right":"Derecha","key_short_Scroll":"BloqDespl","key_short_Shift":"Mayús","key_short_Space":"Espacio","key_short_Tab":"Tab","key_short_Up":"Arriba","key_short_Win":"Win"},"fr":{"Add":"Ajouter","Add a feed":"Ajouter un fil","Add feed":"Ajouter un fil","Cancel":"Annuler","Feed Information":"Information sur le fil","FeedReader (qooxdoo powered)":"Agrégateur de fils de syndication (fait à l'aide de qooxdoo)","Help":"Aide","Language":"Langue","OK":"OK","Open preferences window.":"Ouvrir la fenêtre de préférences","Please enter a title.":"S'il-vous-plaît, entrez un titre.","Please enter a url.":"S'il-vous-plaît, entrez une url.","Posts":"Messages","Preferences":"Préférences","Reload":"Rafraichir","Reload the feeds. (%1)":"Rafraichir les fils. (%1)","Remove feed":"Enlever un fil","Static Feeds":"Fils statiques","Title:":"Titre:","URL:":"URL:","User Feeds":"Fils de l'utilisateur","key_full_Alt":"Alternative","key_full_Apps":"Application","key_full_Backspace":"Effacement arrière","key_full_CapsLock":"Verrouillage des Majuscule","key_full_Control":"Contrôle","key_full_Delete":"Suppression","key_full_Down":"Bas","key_full_End":"Fin","key_full_Enter":"Entrée","key_full_Escape":"Échappement","key_full_Home":"Origine","key_full_Insert":"Insertion","key_full_Left":"Gauche","key_full_Meta":"Meta","key_full_NumLock":"Verouillage Numérique","key_full_PageDown":"Page Suivante","key_full_PageUp":"Page Précédente","key_full_Pause":"Pause","key_full_PrintScreen":"Impression de l'écran","key_full_Right":"Droite","key_full_Scroll":"Arrêt défilement","key_full_Shift":"Majuscules","key_full_Space":"Espace","key_full_Tab":"Tabulation","key_full_Up":"Haut","key_full_Win":"Windows","key_short_Alt":"Alt","key_short_Apps":"App.","key_short_Backspace":"Effacement Arrière","key_short_CapsLock":"Verr. Maj.","key_short_Control":"Ctrl","key_short_Delete":"Supp.","key_short_Down":"Bas","key_short_End":"Fin","key_short_Enter":"Entrée","key_short_Escape":"Echap.","key_short_Home":"Orig.","key_short_Insert":"Ins.","key_short_Left":"Gauche","key_short_Meta":"Meta","key_short_NumLock":"Verr. Num.","key_short_PageDown":"Pg Suiv.","key_short_PageUp":"Pg Préc.","key_short_Pause":"Pause","key_short_PrintScreen":"Imp. Écran","key_short_Right":"Droite","key_short_Scroll":"Arrêt Défil","key_short_Shift":"Maj","key_short_Space":"Espace","key_short_Tab":"Tab","key_short_Up":"Haut","key_short_Win":"Win"},"it":{"Add":"Aggiungi","Add a feed":"Aggiungi un feed","Add feed":"Aggiungi un feed","Cancel":"Annulla","Feed Information":"Informazioni sul Feed","FeedReader (qooxdoo powered)":"FeedReader (realizzato con qooxdoo)","Help":"Aiuto","Language":"Lingua","OK":"OK","Open preferences window.":"Apri la finestra delle preferenze.","Please enter a title.":"Inserisci un titolo.","Please enter a url.":"Inserisci un URL.","Posts":"Messaggi","Preferences":"Preferenze","Reload":"Ricarica","Reload the feeds. (%1)":"Ricarica i feed. (%1)","Remove feed":"Rimuovi il feed","Static Feeds":"Feed statici","Title:":"Titolo:","URL:":"URL:","User Feeds":"Feed utente","key_full_Alt":"Alt","key_full_Apps":"Tasto Menu","key_full_Backspace":"Backspace","key_full_CapsLock":"Blocca Maiuscole","key_full_Control":"Control","key_full_Delete":"Cancella","key_full_Down":"Freccia Giù","key_full_End":"Fine","key_full_Enter":"Invio","key_full_Escape":"Escape","key_full_Home":"Inizio","key_full_Insert":"Inserisci","key_full_Left":"Freccia Sinistra","key_full_Meta":"Meta","key_full_NumLock":"Blocca Numeri","key_full_PageDown":"Pagina Giù","key_full_PageUp":"Pagina Su","key_full_Pause":"Pausa","key_full_PrintScreen":"Stampa Schermo","key_full_Right":"Freccia Destra","key_full_Scroll":"Blocca Scorrimento","key_full_Shift":"Maiuscole","key_full_Space":"Spazio","key_full_Tab":"Tabulazione","key_full_Up":"Freccia Su","key_full_Win":"Tasto Windows","key_short_Alt":"Alt","key_short_Apps":"Menu","key_short_Backspace":"Backspace","key_short_CapsLock":"Bloc Maiusc","key_short_Control":"Ctrl","key_short_Delete":"Canc","key_short_Down":"Giù","key_short_End":"Fine","key_short_Enter":"Invio","key_short_Escape":"Esc","key_short_Home":"Inizio","key_short_Insert":"Ins","key_short_Left":"Sinistra","key_short_Meta":"Meta","key_short_NumLock":"Bloc Num","key_short_PageDown":"Pag Giù","key_short_PageUp":"Pag Su","key_short_Pause":"Pausa","key_short_PrintScreen":"Stamp","key_short_Right":"Destra","key_short_Scroll":"Bloc Scorr","key_short_Shift":"Maiusc","key_short_Space":"Spazio","key_short_Tab":"Tab","key_short_Up":"Su","key_short_Win":"Win"},"nl":{"Add":"Toevoegen","Add a feed":"Een feed toevoegen","Add feed":"Feed toevoegen","Cancel":"Annuleren","Feed Information":"Feed Informatie","FeedReader (qooxdoo powered)":"FeedReader (qooxdoo powered)","Help":"Help","Language":"Taal","OK":"OK","Open preferences window.":"Open voorkeuren venster.","Please enter a title.":"Voer a.u.b. een titel in.","Please enter a url.":"Voer a.u.b. een URL in.","Posts":"Berichten","Preferences":"Voorkeuren","Reload":"Herladen","Reload the feeds. (%1)":"Feeds herladen. (%1)","Remove feed":"Feed verwijderen","Static Feeds":"Statische Feeds","Title:":"Titel:","URL:":"URL:","User Feeds":"Gebruiker Feeds","key_full_Alt":"Alt","key_full_Apps":"Contextmenu","key_full_Backspace":"Backspace","key_full_CapsLock":"Caps Lock","key_full_Control":"Control","key_full_Delete":"Verwijderen","key_full_Down":"Pijl omlaag","key_full_End":"End","key_full_Enter":"Enter","key_full_Escape":"Escape","key_full_Home":"Positie 1","key_full_Insert":"Invoegen","key_full_Left":"Pijl links","key_full_Meta":"Meta","key_full_NumLock":"Num Lock","key_full_PageDown":"Volgende pagina","key_full_PageUp":"Vorige pagina","key_full_Pause":"Pauze","key_full_PrintScreen":"Schermafbeelding","key_full_Right":"Pijl rechts","key_full_Scroll":"Scroll Lock","key_full_Shift":"Shift","key_full_Space":"Spatiebalk","key_full_Tab":"Tabulator","key_full_Up":"Pijl omhoog","key_full_Win":"Windowstoets","key_short_Alt":"Alt","key_short_Apps":"Apps","key_short_Backspace":"Backspace","key_short_CapsLock":"Caps Lock","key_short_Control":"Ctrl","key_short_Delete":"Del","key_short_Down":"Omlaag","key_short_End":"End","key_short_Enter":"Enter","key_short_Escape":"Esc","key_short_Home":"Home","key_short_Insert":"Ins","key_short_Left":"Links","key_short_Meta":"Meta","key_short_NumLock":"Num Lock","key_short_PageDown":"PgDn","key_short_PageUp":"PgUp","key_short_Pause":"Pause","key_short_PrintScreen":"PrtSc","key_short_Right":"Rechts","key_short_Scroll":"Scroll Lock","key_short_Shift":"Shift","key_short_Space":"Spatie","key_short_Tab":"Tab","key_short_Up":"Omhoog","key_short_Win":"Win"},"sv":{"Add":"Lägg till","Add a feed":"Lägg till ett flöde","Add feed":"Lägg till flöde","Cancel":"Avbryt","Feed Information":"Flödesinformation","FeedReader (qooxdoo powered)":"FeedReader (qooxdoo driven)","Help":"Hjälp","Language":"Språk","OK":"OK","Open preferences window.":"Öppna inställningsfönstret","Please enter a title.":"Fyll i en titel","Please enter a url.":"Fyll i en url.","Posts":"Poster","Preferences":"Inställningar","Reload":"Uppdatera","Reload the feeds. (%1)":"Ladda om flödena. (%1)","Remove feed":"Ta bort flöde","Static Feeds":"Statiska flöden","Title:":"Titel","URL:":"URL:","User Feeds":"Användarflöden","key_full_Alt":"Alt","key_full_Apps":"Apps","key_full_Backspace":"Backspace","key_full_CapsLock":"CapsLock","key_full_Control":"Control","key_full_Delete":"Delete","key_full_Down":"Ner","key_full_End":"End","key_full_Enter":"Enter","key_full_Escape":"Escape","key_full_Home":"Home","key_full_Insert":"Insert","key_full_Left":"Vänster","key_full_Meta":"Meta","key_full_NumLock":"NumLock","key_full_PageDown":"PageDown","key_full_PageUp":"PageUp","key_full_Pause":"Pause","key_full_PrintScreen":"PrintScreen","key_full_Right":"Höger","key_full_Scroll":"Scroll","key_full_Shift":"Shift","key_full_Space":"Blanksteg","key_full_Tab":"Tabb","key_full_Up":"Upp","key_full_Win":"Win","key_short_Alt":"Alt","key_short_Apps":"Apps","key_short_Backspace":"BS","key_short_CapsLock":"Caps","key_short_Control":"CTRL","key_short_Delete":"DEL","key_short_Down":"Ner","key_short_End":"END","key_short_Enter":"Enter","key_short_Escape":"ESC","key_short_Home":"HOME","key_short_Insert":"INS","key_short_Left":"Vänster","key_short_Meta":"Meta","key_short_NumLock":"NUM","key_short_PageDown":"PGDN","key_short_PageUp":"PGUP","key_short_Pause":"Pause","key_short_PrintScreen":"PRNSCN","key_short_Right":"Höger","key_short_Scroll":"SCL","key_short_Shift":"Shift","key_short_Space":"Space","key_short_Tab":"Tabb","key_short_Up":"Upp","key_short_Win":"Win"}};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"es":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"a.m.","cldr_date_format_full":"EEEE d 'de' MMMM 'de' y","cldr_date_format_long":"d 'de' MMMM 'de' y","cldr_date_format_medium":"dd/MM/yyyy","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d-M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d 'de' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd-MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"MM/dd","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hhmm":"hh:mm a","cldr_date_time_format_hhmmss":"hh:mm:ss a","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM 'de' y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ yyyy","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM-yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ 'de' yy","cldr_date_time_format_yyyyMM":"MM/yyyy","cldr_day_format_abbreviated_fri":"vie","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sáb","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"jue","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mié","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"viernes","cldr_day_format_wide_mon":"lunes","cldr_day_format_wide_sat":"sábado","cldr_day_format_wide_sun":"domingo","cldr_day_format_wide_thu":"jueves","cldr_day_format_wide_tue":"martes","cldr_day_format_wide_wed":"miércoles","cldr_day_stand-alone_abbreviated_fri":"vie","cldr_day_stand-alone_abbreviated_mon":"lun","cldr_day_stand-alone_abbreviated_sat":"sáb","cldr_day_stand-alone_abbreviated_sun":"dom","cldr_day_stand-alone_abbreviated_thu":"jue","cldr_day_stand-alone_abbreviated_tue":"mar","cldr_day_stand-alone_abbreviated_wed":"mié","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"viernes","cldr_day_stand-alone_wide_mon":"lunes","cldr_day_stand-alone_wide_sat":"sábado","cldr_day_stand-alone_wide_sun":"domingo","cldr_day_stand-alone_wide_thu":"jueves","cldr_day_stand-alone_wide_tue":"martes","cldr_day_stand-alone_wide_wed":"miércoles","cldr_month_format_abbreviated_1":"ene","cldr_month_format_abbreviated_10":"oct","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"abr","cldr_month_format_abbreviated_5":"may","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"sep","cldr_month_format_wide_1":"enero","cldr_month_format_wide_10":"octubre","cldr_month_format_wide_11":"noviembre","cldr_month_format_wide_12":"diciembre","cldr_month_format_wide_2":"febrero","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"abril","cldr_month_format_wide_5":"mayo","cldr_month_format_wide_6":"junio","cldr_month_format_wide_7":"julio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"septiembre","cldr_month_stand-alone_narrow_1":"E","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.m.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"’","quotationStart":"‘"},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"it":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"m.","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"dd MMMM y","cldr_date_format_medium":"dd/MMM/y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_HHmm":"HH.mm","cldr_date_time_format_HHmmss":"HH.mm.ss","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"EEE d MMM","cldr_date_time_format_MMMMEd":"EEE d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMMdd":"dd MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hhmm":"hh.mm a","cldr_date_time_format_hhmmss":"hh.mm.ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, d-M-yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q-yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sab","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"gio","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mer","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"G","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Venerdì","cldr_day_format_wide_mon":"Lunedì","cldr_day_format_wide_sat":"Sabato","cldr_day_format_wide_sun":"Domenica","cldr_day_format_wide_thu":"Giovedì","cldr_day_format_wide_tue":"Martedì","cldr_day_format_wide_wed":"Mercoledì","cldr_day_stand-alone_abbreviated_fri":"ven","cldr_day_stand-alone_abbreviated_mon":"lun","cldr_day_stand-alone_abbreviated_sat":"sab","cldr_day_stand-alone_abbreviated_sun":"dom","cldr_day_stand-alone_abbreviated_thu":"gio","cldr_day_stand-alone_abbreviated_tue":"mar","cldr_day_stand-alone_abbreviated_wed":"mer","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"G","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Venerdì","cldr_day_stand-alone_wide_mon":"Lunedì","cldr_day_stand-alone_wide_sat":"Sabato","cldr_day_stand-alone_wide_sun":"Domenica","cldr_day_stand-alone_wide_thu":"Giovedì","cldr_day_stand-alone_wide_tue":"Martedì","cldr_day_stand-alone_wide_wed":"Mercoledì","cldr_month_format_abbreviated_1":"gen","cldr_month_format_abbreviated_10":"ott","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"apr","cldr_month_format_abbreviated_5":"mag","cldr_month_format_abbreviated_6":"giu","cldr_month_format_abbreviated_7":"lug","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"set","cldr_month_format_wide_1":"gennaio","cldr_month_format_wide_10":"ottobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"dicembre","cldr_month_format_wide_2":"febbraio","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"aprile","cldr_month_format_wide_5":"maggio","cldr_month_format_wide_6":"giugno","cldr_month_format_wide_7":"luglio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"settembre","cldr_month_stand-alone_narrow_1":"G","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"G","cldr_month_stand-alone_narrow_7":"L","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"Gennaio","cldr_month_stand-alone_wide_10":"Ottobre","cldr_month_stand-alone_wide_11":"Novembre","cldr_month_stand-alone_wide_12":"Dicembre","cldr_month_stand-alone_wide_2":"Febbraio","cldr_month_stand-alone_wide_3":"Marzo","cldr_month_stand-alone_wide_4":"Aprile","cldr_month_stand-alone_wide_5":"Maggio","cldr_month_stand-alone_wide_6":"Giugno","cldr_month_stand-alone_wide_7":"Luglio","cldr_month_stand-alone_wide_8":"Agosto","cldr_month_stand-alone_wide_9":"Settembre","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.","cldr_time_format_full":"HH.mm.ss zzzz","cldr_time_format_long":"HH.mm.ss z","cldr_time_format_medium":"HH.mm.ss","cldr_time_format_short":"HH.mm","quotationEnd":"’","quotationStart":"‘"},"nl":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd-MM-yy","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d-M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d-MMM","cldr_date_time_format_MMd":"d-MM","cldr_date_time_format_MMdd":"dd-MM","cldr_date_time_format_Md":"d-M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M-yyyy","cldr_date_time_format_yMEd":"EEE d-M-yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM-yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"vr","cldr_day_format_abbreviated_mon":"ma","cldr_day_format_abbreviated_sat":"za","cldr_day_format_abbreviated_sun":"zo","cldr_day_format_abbreviated_thu":"do","cldr_day_format_abbreviated_tue":"di","cldr_day_format_abbreviated_wed":"wo","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"Z","cldr_day_format_narrow_sun":"Z","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"vrijdag","cldr_day_format_wide_mon":"maandag","cldr_day_format_wide_sat":"zaterdag","cldr_day_format_wide_sun":"zondag","cldr_day_format_wide_thu":"donderdag","cldr_day_format_wide_tue":"dinsdag","cldr_day_format_wide_wed":"woensdag","cldr_day_stand-alone_abbreviated_fri":"vr","cldr_day_stand-alone_abbreviated_mon":"ma","cldr_day_stand-alone_abbreviated_sat":"za","cldr_day_stand-alone_abbreviated_sun":"zo","cldr_day_stand-alone_abbreviated_thu":"do","cldr_day_stand-alone_abbreviated_tue":"di","cldr_day_stand-alone_abbreviated_wed":"wo","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"Z","cldr_day_stand-alone_narrow_sun":"Z","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"vrijdag","cldr_day_stand-alone_wide_mon":"maandag","cldr_day_stand-alone_wide_sat":"zaterdag","cldr_day_stand-alone_wide_sun":"zondag","cldr_day_stand-alone_wide_thu":"donderdag","cldr_day_stand-alone_wide_tue":"dinsdag","cldr_day_stand-alone_wide_wed":"woensdag","cldr_month_format_abbreviated_1":"jan.","cldr_month_format_abbreviated_10":"okt.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"dec.","cldr_month_format_abbreviated_2":"feb.","cldr_month_format_abbreviated_3":"mrt.","cldr_month_format_abbreviated_4":"apr.","cldr_month_format_abbreviated_5":"mei","cldr_month_format_abbreviated_6":"jun.","cldr_month_format_abbreviated_7":"jul.","cldr_month_format_abbreviated_8":"aug.","cldr_month_format_abbreviated_9":"sep.","cldr_month_format_wide_1":"januari","cldr_month_format_wide_10":"oktober","cldr_month_format_wide_11":"november","cldr_month_format_wide_12":"december","cldr_month_format_wide_2":"februari","cldr_month_format_wide_3":"maart","cldr_month_format_wide_4":"april","cldr_month_format_wide_5":"mei","cldr_month_format_wide_6":"juni","cldr_month_format_wide_7":"juli","cldr_month_format_wide_8":"augustus","cldr_month_format_wide_9":"september","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"’","quotationStart":"‘"},"sv":{"alternateQuotationEnd":"’","alternateQuotationStart":"’","cldr_am":"fm","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"yyyy-MM-dd","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEEEd":"EEE d:'e' MMMM","cldr_date_time_format_MMMMEd":"E d:'e' MMMM","cldr_date_time_format_MMMMd":"d:'e' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMd":"d/M","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hhmm":"h:mm","cldr_date_time_format_hhmmss":"h:mm:ss","cldr_date_time_format_ms":"mm.ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-MM","cldr_date_time_format_yMEd":"EEE, yyyy-MM-dd","cldr_date_time_format_yMMM":"y MMM","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"y MMMM","cldr_date_time_format_yQ":"yyyy Q","cldr_date_time_format_yQQQ":"y QQQ","cldr_date_time_format_yyMM":"yy-MM","cldr_date_time_format_yyMMM":"MMM -yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyyyMM":"yyyy-MM","cldr_date_time_format_yyyyMMM":"MMM y","cldr_date_time_format_yyyyQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"fre","cldr_day_format_abbreviated_mon":"mån","cldr_day_format_abbreviated_sat":"lör","cldr_day_format_abbreviated_sun":"sön","cldr_day_format_abbreviated_thu":"tors","cldr_day_format_abbreviated_tue":"tis","cldr_day_format_abbreviated_wed":"ons","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"L","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"O","cldr_day_format_wide_fri":"fredag","cldr_day_format_wide_mon":"måndag","cldr_day_format_wide_sat":"lördag","cldr_day_format_wide_sun":"söndag","cldr_day_format_wide_thu":"torsdag","cldr_day_format_wide_tue":"tisdag","cldr_day_format_wide_wed":"onsdag","cldr_day_stand-alone_abbreviated_fri":"fre","cldr_day_stand-alone_abbreviated_mon":"mån","cldr_day_stand-alone_abbreviated_sat":"lör","cldr_day_stand-alone_abbreviated_sun":"sön","cldr_day_stand-alone_abbreviated_thu":"tors","cldr_day_stand-alone_abbreviated_tue":"tis","cldr_day_stand-alone_abbreviated_wed":"ons","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"L","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"O","cldr_day_stand-alone_wide_fri":"fredag","cldr_day_stand-alone_wide_mon":"måndag","cldr_day_stand-alone_wide_sat":"lördag","cldr_day_stand-alone_wide_sun":"söndag","cldr_day_stand-alone_wide_thu":"torsdag","cldr_day_stand-alone_wide_tue":"tisdag","cldr_day_stand-alone_wide_wed":"onsdag","cldr_month_format_abbreviated_1":"jan","cldr_month_format_abbreviated_10":"okt","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dec","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"apr","cldr_month_format_abbreviated_5":"maj","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"aug","cldr_month_format_abbreviated_9":"sep","cldr_month_format_wide_1":"januari","cldr_month_format_wide_10":"oktober","cldr_month_format_wide_11":"november","cldr_month_format_wide_12":"december","cldr_month_format_wide_2":"februari","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"april","cldr_month_format_wide_5":"maj","cldr_month_format_wide_6":"juni","cldr_month_format_wide_7":"juli","cldr_month_format_wide_8":"augusti","cldr_month_format_wide_9":"september","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"em","cldr_time_format_full":"'kl'. HH.mm.ss zzzz","cldr_time_format_long":"HH.mm.ss z","cldr_time_format_medium":"HH.mm.ss","cldr_time_format_short":"HH.mm","quotationEnd":"”","quotationStart":"”"}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"addfeed":[0,1,2],"boot":[0],"settings":[0,1]},
  uris : [["feedreader:feedreader.js"],["feedreader:feedreader-0.js"],["feedreader:feedreader-1.js"]],
  urisBefore : [],
  packageHashes : {"0":"a1d4987d2431","1":"2f61bcb8c85b","2":"fefbf83d8380"},
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

qx.$$packageData['a1d4987d2431']={"resources":{"feedreader/css/reader.css":"feedreader","feedreader/images/combined/icons16.png":[16,96,"png","feedreader"],"feedreader/images/combined/icons22.png":[22,198,"png","feedreader"],"feedreader/images/loading22.gif":[22,22,"gif","feedreader"],"feedreader/images/loading66.gif":[66,66,"gif","feedreader"],"feedreader/proxy/proxy.php":"feedreader","qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","feedreader","feedreader/images/combined/icons16.png",0,-64],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","feedreader","feedreader/images/combined/icons16.png",0,0],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/dialog-cancel.png":[22,22,"png","feedreader","feedreader/images/combined/icons22.png",0,-44],"qx/icon/Tango/22/actions/dialog-ok.png":[22,22,"png","feedreader","feedreader/images/combined/icons22.png",0,-176],"qx/icon/Tango/22/actions/help-about.png":[22,22,"png","feedreader","feedreader/images/combined/icons22.png",0,-88],"qx/icon/Tango/22/actions/process-stop.png":[22,22,"png","feedreader","feedreader/images/combined/icons22.png",0,-22],"qx/icon/Tango/22/actions/view-refresh.png":[22,22,"png","feedreader","feedreader/images/combined/icons22.png",0,-132],"qx/icon/Tango/22/apps/internet-feed-reader.png":[22,22,"png","feedreader","feedreader/images/combined/icons22.png",0,-110],"qx/icon/Tango/22/apps/preferences-theme.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","feedreader","feedreader/images/combined/icons22.png",0,0],"qx/icon/Tango/22/places/folder.png":[22,22,"png","feedreader","feedreader/images/combined/icons22.png",0,-154],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]}};
(function(){var V="toString",U=".",T="default",S="Object",R='"',Q="Array",P="()",O="String",N="Function",M=".prototype",bu="function",bt="Boolean",bs="Error",br="RegExp",bq="warn",bp="hasOwnProperty",bo="string",bn="toLocaleString",bm='\", "',bl="info",bd="BROKEN_IE",be="isPrototypeOf",bb="Date",bc="",Y="qx.Bootstrap",ba="]",W="Class",X="error",bf="[Class ",bg="valueOf",bi="Number",bh="count",bk="debug",bj="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bf+this.classname+ba;
},createNamespace:function(name,bS){var bU=name.split(U);
var parent=window;
var bT=bU[0];

for(var i=0,bV=bU.length-1;i<bV;i++,bT=bU[i]){if(!parent[bT]){parent=parent[bT]={};
}else{parent=parent[bT];
}}parent[bT]=bS;
return bT;
},setDisplayName:function(n,o,name){n.displayName=o+U+name+P;
},setDisplayNames:function(r,s){for(var name in r){var t=r[name];

if(t instanceof Function){t.displayName=s+U+name+P;
}}},define:function(name,bL){if(!bL){var bL={statics:{}};
}var bQ;
var bO=null;
qx.Bootstrap.setDisplayNames(bL.statics,name);

if(bL.members){qx.Bootstrap.setDisplayNames(bL.members,name+M);
bQ=bL.construct||new Function;
var bM=bL.statics;

for(var bN in bM){bQ[bN]=bM[bN];
}bO=bQ.prototype;
var bR=bL.members;

for(var bN in bR){bO[bN]=bR[bN];
}}else{bQ=bL.statics||{};
}var bP=this.createNamespace(name,bQ);
bQ.name=bQ.classname=name;
bQ.basename=bP;
bQ.$$type=W;
if(!bQ.hasOwnProperty(V)){bQ.toString=this.genericToString;
}if(bL.defer){bL.defer(bQ,bO);
}qx.Bootstrap.$$registry[name]=bL.statics;
return bQ;
}};
qx.Bootstrap.define(Y,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(j){return j.__count__;
},"default":function(f){var length=0;

for(var g in f){length++;
}return length;
}})[(({}).__count__==0)?bh:T],objectMergeWith:function(bF,bG,bH){if(bH===undefined){bH=true;
}
for(var bI in bG){if(bH||bF[bI]===undefined){bF[bI]=bG[bI];
}}return bF;
},__gD:[be,bp,bn,V,bg],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(C){var D=[];

for(var G in C){D.push(G);
}var E=qx.Bootstrap.__gD;
var F=Object.prototype.hasOwnProperty;

for(var i=0,a=E,l=a.length;i<l;i++){if(F.call(C,a[i])){D.push(a[i]);
}}return D;
},"default":function(J){var K=[];

for(var L in J){K.push(L);
}return K;
}})[typeof (Object.keys)==
bu?bj:
(function(){for(var bv in {toString:1}){return bv;
}})()!==V?bd:T],getKeysAsString:function(bC){var bD=qx.Bootstrap.getKeys(bC);

if(bD.length==0){return bc;
}return R+bD.join(bm)+R;
},__gE:{"[object String]":O,"[object Array]":Q,"[object Object]":S,"[object RegExp]":br,"[object Number]":bi,"[object Boolean]":bt,"[object Date]":bb,"[object Function]":N,"[object Error]":bs},firstUp:function(b){return b.charAt(0).toUpperCase()+b.substr(1);
},firstLow:function(e){return e.charAt(0).toLowerCase()+e.substr(1);
},getClass:function(H){var I=Object.prototype.toString.call(H);
return (qx.Bootstrap.__gE[I]||I.slice(8,-1));
},isString:function(h){return (h!==null&&(typeof h===bo||qx.Bootstrap.getClass(h)==O||h instanceof String||(!!h&&!!h.$$isString)));
},isArray:function(bE){return (bE!==null&&(bE instanceof Array||(bE&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bE.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bE)==Q||(!!bE&&!!bE.$$isArray)));
},isObject:function(bJ){return (bJ!==undefined&&bJ!==null&&qx.Bootstrap.getClass(bJ)==S);
},isFunction:function(bw){return qx.Bootstrap.getClass(bw)==N;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bK,name){while(bK){if(bK.$$properties&&bK.$$properties[name]){return bK.$$properties[name];
}bK=bK.superclass;
}return null;
},hasProperty:function(bB,name){return !!qx.Bootstrap.getPropertyDefinition(bB,name);
},getEventType:function(y,name){var y=y.constructor;

while(y.superclass){if(y.$$events&&y.$$events[name]!==undefined){return y.$$events[name];
}y=y.superclass;
}return null;
},supportsEvent:function(x,name){return !!qx.Bootstrap.getEventType(x,name);
},getByInterface:function(z,A){var B,i,l;

while(z){if(z.$$implements){B=z.$$flatImplements;

for(i=0,l=B.length;i<l;i++){if(B[i]===A){return z;
}}}z=z.superclass;
}return null;
},hasInterface:function(p,q){return !!qx.Bootstrap.getByInterface(p,q);
},getMixins:function(bx){var by=[];

while(bx){if(bx.$$includes){by.push.apply(by,bx.$$flatIncludes);
}bx=bx.superclass;
}return by;
},$$logs:[],debug:function(c,d){qx.Bootstrap.$$logs.push([bk,arguments]);
},info:function(u,v){qx.Bootstrap.$$logs.push([bl,arguments]);
},warn:function(bz,bA){qx.Bootstrap.$$logs.push([bq,arguments]);
},error:function(k,m){qx.Bootstrap.$$logs.push([X,arguments]);
},trace:function(w){}}});
})();
(function(){var n="qx.allowUrlSettings",m="&",l="qx.core.Setting",k="qx.allowUrlVariants",j="qx.propertyDebugLevel",h="qxsetting",g=":",f=".";
qx.Bootstrap.define(l,{statics:{__dF:{},define:function(o,p){if(p===undefined){throw new Error('Default value of setting "'+o+'" must be defined!');
}
if(!this.__dF[o]){this.__dF[o]={};
}else if(this.__dF[o].defaultValue!==undefined){throw new Error('Setting "'+o+'" is already defined!');
}this.__dF[o].defaultValue=p;
},get:function(b){var c=this.__dF[b];

if(c===undefined){throw new Error('Setting "'+b+'" is not defined.');
}
if(c.value!==undefined){return c.value;
}return c.defaultValue;
},set:function(r,s){if((r.split(f)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__dF[r]){this.__dF[r]={};
}this.__dF[r].value=s;
},__dG:function(){if(window.qxsettings){for(var q in window.qxsettings){this.set(q,window.qxsettings[q]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__dH();
}},__dH:function(){if(this.get(n)!=true){return;
}var e=document.location.search.slice(1).split(m);

for(var i=0;i<e.length;i++){var d=e[i].split(g);

if(d.length!=3||d[0]!=h){continue;
}this.set(d[1],decodeURIComponent(d[2]));
}}},defer:function(t){t.define(n,false);
t.define(k,false);
t.define(j,0);
t.__dG();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__dE:function(){var u=d;
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
}},defer:function(t){t.__dE();
}});
})();
(function(){var I="on",H="off",G="|",F="default",E="object",D="&",C="qx.aspects",B="$",A="qx.allowUrlVariants",z="qx.debug",s="qx.client",y="qx.dynlocale",w="webkit",r="qxvariant",q="opera",u=":",t="qx.core.Variant",x="mshtml",p="gecko";
qx.Bootstrap.define(t,{statics:{__ju:{},__jv:{},compilerIsSet:function(){return true;
},define:function(d,e,f){{};

if(!this.__ju[d]){this.__ju[d]={};
}else{}this.__ju[d].allowedValues=e;
this.__ju[d].defaultValue=f;
},get:function(L){var M=this.__ju[L];
{};

if(M.value!==undefined){return M.value;
}return M.defaultValue;
},__jw:function(){if(window.qxvariants){for(var K in qxvariants){{};

if(!this.__ju[K]){this.__ju[K]={};
}this.__ju[K].value=qxvariants[K];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(J){}this.__jx(this.__ju);
}},__jx:function(){if(qx.core.Setting.get(A)!=true){return;
}var O=document.location.search.slice(1).split(D);

for(var i=0;i<O.length;i++){var P=O[i].split(u);

if(P.length!=3||P[0]!=r){continue;
}var Q=P[1];

if(!this.__ju[Q]){this.__ju[Q]={};
}this.__ju[Q].value=decodeURIComponent(P[2]);
}},select:function(a,b){{};

for(var c in b){if(this.isSet(a,c)){return b[c];
}}
if(b[F]!==undefined){return b[F];
}{};
},isSet:function(j,k){var m=j+B+k;

if(this.__jv[m]!==undefined){return this.__jv[m];
}var o=false;
if(k.indexOf(G)<0){o=this.get(j)===k;
}else{var n=k.split(G);

for(var i=0,l=n.length;i<l;i++){if(this.get(j)===n[i]){o=true;
break;
}}}this.__jv[m]=o;
return o;
},__jy:function(v){return typeof v===E&&v!==null&&v instanceof Array;
},__jz:function(v){return typeof v===E&&v!==null&&!(v instanceof Array);
},__jA:function(g,h){for(var i=0,l=g.length;i<l;i++){if(g[i]==h){return true;
}}return false;
}},defer:function(N){N.define(s,[p,x,q,w],qx.bom.client.Engine.NAME);
N.define(z,[I,H],I);
N.define(C,[I,H],H);
N.define(y,[I,H],I);
N.__jw();
}});
})();
(function(){var x="function",w="Boolean",v="qx.Interface",u="]",t="toggle",s="Interface",r="is",q="[Interface ";
qx.Bootstrap.define(v,{statics:{define:function(name,M){if(M){if(M.extend&&!(M.extend instanceof Array)){M.extend=[M.extend];
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
}N.$$type=s;
N.name=name;
N.toString=this.genericToString;
N.basename=qx.Bootstrap.createNamespace(name,N);
qx.Interface.$$registry[name]=N;
return N;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(K){if(!K){return [];
}var L=K.concat();

for(var i=0,l=K.length;i<l;i++){if(K[i].$$extends){L.push.apply(L,this.flatten(K[i].$$extends));
}}return L;
},__eN:function(y,z,A,B){var F=A.$$members;

if(F){for(var E in F){if(qx.Bootstrap.isFunction(F[E])){var D=this.__eO(z,E);
var C=D||qx.Bootstrap.isFunction(y[E]);

if(!C){throw new Error('Implementation of method "'+E+'" is missing in class "'+z.classname+'" required by interface "'+A.name+'"');
}var G=B===true&&!D&&!qx.Bootstrap.hasInterface(z,A);

if(G){y[E]=this.__eR(A,y[E],E,F[E]);
}}else{if(typeof y[E]===undefined){if(typeof y[E]!==x){throw new Error('Implementation of member "'+E+'" is missing in class "'+z.classname+'" required by interface "'+A.name+'"');
}}}}}},__eO:function(e,f){var k=f.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!k){return false;
}var g=qx.Bootstrap.firstLow(k[2]);
var h=qx.Bootstrap.getPropertyDefinition(e,g);

if(!h){return false;
}var j=k[0]==r||k[0]==t;

if(j){return qx.Bootstrap.getPropertyDefinition(e,g).check==w;
}return true;
},__eP:function(O,P){if(P.$$properties){for(var Q in P.$$properties){if(!qx.Bootstrap.getPropertyDefinition(O,Q)){throw new Error('The property "'+Q+'" is not supported by Class "'+O.classname+'"!');
}}}},__eQ:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.Bootstrap.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(a,b){var d=a.constructor;
this.__eN(a,d,b,false);
this.__eP(d,b);
this.__eQ(d,b);
var c=b.$$extends;

if(c){for(var i=0,l=c.length;i<l;i++){this.assertObject(a,c[i]);
}}},assert:function(m,n,o){this.__eN(m.prototype,m,n,o);
this.__eP(m,n);
this.__eQ(m,n);
var p=n.$$extends;

if(p){for(var i=0,l=p.length;i<l;i++){this.assert(m,p[i],o);
}}},genericToString:function(){return q+this.name+u;
},$$registry:{},__eR:function(){},__eS:null,__eT:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,u){if(u){if(u.include&&!(u.include instanceof Array)){u.include=[u.include];
}{};
var w=u.statics?u.statics:{};
qx.Bootstrap.setDisplayNames(w,name);

for(var v in w){if(w[v] instanceof Function){w[v].$$mixin=w;
}}if(u.construct){w.$$constructor=u.construct;
qx.Bootstrap.setDisplayName(u.construct,name,e);
}
if(u.include){w.$$includes=u.include;
}
if(u.properties){w.$$properties=u.properties;
}
if(u.members){w.$$members=u.members;
qx.Bootstrap.setDisplayNames(u.members,name+f);
}
for(var v in w.$$members){if(w.$$members[v] instanceof Function){w.$$members[v].$$mixin=w;
}}
if(u.events){w.$$events=u.events;
}
if(u.destruct){w.$$destructor=u.destruct;
qx.Bootstrap.setDisplayName(u.destruct,name,b);
}}else{var w={};
}w.$$type=a;
w.name=name;
w.toString=this.genericToString;
w.basename=qx.Bootstrap.createNamespace(name,w);
this.$$registry[name]=w;
return w;
},checkCompatibility:function(m){var p=this.flatten(m);
var q=p.length;

if(q<2){return true;
}var t={};
var s={};
var r={};
var o;

for(var i=0;i<q;i++){o=p[i];

for(var n in o.events){if(r[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+r[n]+'" in member "'+n+'"!');
}r[n]=o.name;
}
for(var n in o.properties){if(t[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+t[n]+'" in property "'+n+'"!');
}t[n]=o.name;
}
for(var n in o.members){if(s[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+s[n]+'" in member "'+n+'"!');
}s[n]=o.name;
}}return true;
},isCompatible:function(h,j){var k=qx.Bootstrap.getMixins(j);
k.push(h);
return qx.Mixin.checkCompatibility(k);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__dC:null,__dD:function(){}}});
})();
(function(){var dR=';',dQ='computed=this.',dP='=value;',dO='this.',dN="set",dM="setThemed",dL="setRuntime",dK="init",dJ='if(this.',dI='delete this.',cR='!==undefined)',cQ='}',cP="resetThemed",cO='else if(this.',cN="string",cM='return this.',cL="reset",cK="boolean",cJ="resetRuntime",cI='!==undefined){',dY="refresh",ea='=true;',dW="",dX="this.",dU='old=this.',dV="();",dS='else ',dT='if(old===undefined)old=this.',eb='old=computed=this.',ec="return this.",dr="get",dq='(value);',dt=";",ds="(a[",dv='if(old===computed)return value;',du='if(old===undefined)old=null;',dx=' of an instance of ',dw=' is not (yet) ready!");',dp="]);",dn='!==inherit){',bz='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bA='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bB='value !== null && value.nodeType === 9 && value.documentElement',bC='===value)return value;',bD='value !== null && value.$$type === "Mixin"',bE='return init;',bF='var init=this.',bG='value !== null && value.nodeType === 1 && value.attributes',bH="Error in property ",bI='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',eo="property",en='.validate.call(this, value);',em='qx.core.Assert.assertInstance(value, Date, msg) || true',el='else{',es=" in method ",er='qx.core.Assert.assertInstance(value, Error, msg) || true',eq='=computed;',ep='Undefined value is not allowed!',eu='(backup);',et='if(computed===inherit){',ci="inherit",cj='Is invalid!',cg='if(value===undefined)prop.error(this,2,"',ch='var computed, old=this.',cm='else if(computed===undefined)',cn="': ",ck=" of class ",cl='value !== null && value.nodeType !== undefined',ce='===undefined)return;',cf='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bQ="')){",bP='qx.core.Assert.assertPositiveInteger(value, msg) || true',bS='else this.',bR='value=this.',bM='","',bL='if(init==qx.core.Property.$$inherit)init=null;',bO='value !== null && value.$$type === "Interface"',bN='var inherit=prop.$$inherit;',bK="', qx.event.type.Data, [computed, old]",bJ="$$useinit_",cs='computed=undefined;delete this.',ct='",value);',cu='computed=value;',cv=".",co="$$runtime_",cp='Requires exactly one argument!',cq=';}',cr="$$user_",cw='){',cx='qx.core.Assert.assertArray(value, msg) || true',cb='if(computed===undefined||computed===inherit){',ca='qx.core.Assert.assertPositiveNumber(value, msg) || true',bY=".prototype",bX="Boolean",bW=")}",bV='(computed, old, "',bU='return value;',bT='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cd='}else{',cc="if(reg.hasListener(this, '",cy='Does not allow any arguments!',cz=')a[i].',cA="()",cB="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cC='.$$properties.',cD='value !== null && value.$$type === "Theme"',cE="var reg=qx.event.Registration;",cF="())",cG='return null;',cH='qx.core.Assert.assertObject(value, msg) || true',cV='");',cU='qx.core.Assert.assertString(value, msg) || true',cT='var pa=this.getLayoutParent();if(pa)computed=pa.',cS='value !== null && value.$$type === "Class"',da='qx.core.Assert.assertFunction(value, msg) || true',cY='!==undefined&&',cX='var computed, old;',cW='var backup=computed;',dc="on",db="object",dj="$$init_",dk="$$theme_",dh='if(computed===undefined)computed=null;',di='qx.core.Assert.assertMap(value, msg) || true',df="qx.aspects",dg='qx.core.Assert.assertNumber(value, msg) || true',dd='if((computed===undefined||computed===inherit)&&',de="reg.fireEvent(this, '",dl='Null value is not allowed!',dm='qx.core.Assert.assertInteger(value, msg) || true',dB="value",dA="shorthand",dD='qx.core.Assert.assertInstance(value, RegExp, msg) || true',dC='value !== null && value.type !== undefined',dF='value !== null && value.document',dE='throw new Error("Property ',dH="(!this.",dG='qx.core.Assert.assertBoolean(value, msg) || true',dz='if(a[i].',dy="toggle",eh="$$inherit_",ei='var prop=qx.core.Property;',ej=" with incoming value '",ek="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",ed='if(computed===undefined||computed==inherit)computed=null;',ee="qx.core.Property",ef="is",eg='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(ee,{statics:{__ka:{"Boolean":dG,"String":cU,"Number":dg,"Integer":dm,"PositiveNumber":ca,"PositiveInteger":bP,"Error":er,"RegExp":dD,"Object":cH,"Array":cx,"Map":di,"Function":da,"Date":em,"Node":cl,"Element":bG,"Document":bB,"Window":dF,"Event":dC,"Class":cS,"Mixin":bD,"Interface":bO,"Theme":cD,"Color":bz,"Decorator":cf,"Font":bA},__kb:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:ci,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cN,dispose:cK,inheritable:cK,nullable:cK,themeable:cK,refine:cK,init:null,apply:cN,event:cN,check:null,transform:cN,deferredInit:cK,validate:null},$$allowedGroupKeys:{name:cN,group:db,mode:cN,themeable:cK},$$inheritable:{},refresh:function(ev){var parent=ev.getLayoutParent();

if(parent){var ey=ev.constructor;
var eA=this.$$store.inherit;
var ez=this.$$store.init;
var ex=this.$$method.refresh;
var eB;
var ew;
{};

while(ey){eB=ey.$$properties;

if(eB){for(var name in this.$$inheritable){if(eB[name]&&ev[ex[name]]){ew=parent[eA[name]];

if(ew===undefined){ew=parent[ez[name]];
}{};
ev[ex[name]](ew);
}}}ey=ey.superclass;
}}},attach:function(eJ){var eK=eJ.$$properties;

if(eK){for(var name in eK){this.attachMethods(eJ,name,eK[name]);
}}eJ.$$propertiesAttached=true;
},attachMethods:function(bf,name,bg){bg.group?this.__kc(bf,bg,name):this.__kd(bf,bg,name);
},__kc:function(r,s,name){var z=qx.Bootstrap.firstUp(name);
var y=r.prototype;
var A=s.themeable===true;
{};
var B=[];
var v=[];

if(A){var t=[];
var x=[];
}var w=cB;
B.push(w);

if(A){t.push(w);
}
if(s.mode==dA){var u=ek;
B.push(u);

if(A){t.push(u);
}}
for(var i=0,a=s.group,l=a.length;i<l;i++){{};
B.push(dX,this.$$method.set[a[i]],ds,i,dp);
v.push(dX,this.$$method.reset[a[i]],dV);

if(A){{};
t.push(dX,this.$$method.setThemed[a[i]],ds,i,dp);
x.push(dX,this.$$method.resetThemed[a[i]],dV);
}}this.$$method.set[name]=dN+z;
y[this.$$method.set[name]]=new Function(B.join(dW));
this.$$method.reset[name]=cL+z;
y[this.$$method.reset[name]]=new Function(v.join(dW));

if(A){this.$$method.setThemed[name]=dM+z;
y[this.$$method.setThemed[name]]=new Function(t.join(dW));
this.$$method.resetThemed[name]=cP+z;
y[this.$$method.resetThemed[name]]=new Function(x.join(dW));
}},__kd:function(Q,R,name){var T=qx.Bootstrap.firstUp(name);
var V=Q.prototype;
{};
if(R.dispose===undefined&&typeof R.check===cN){R.dispose=this.__kb[R.check]||qx.Bootstrap.classIsDefined(R.check)||(qx.Interface&&qx.Interface.isDefined(R.check));
}var U=this.$$method;
var S=this.$$store;
S.runtime[name]=co+name;
S.user[name]=cr+name;
S.theme[name]=dk+name;
S.init[name]=dj+name;
S.inherit[name]=eh+name;
S.useinit[name]=bJ+name;
U.get[name]=dr+T;
V[U.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,Q,name,dr);
};
U.set[name]=dN+T;
V[U.set[name]]=function(bi){return qx.core.Property.executeOptimizedSetter(this,Q,name,dN,arguments);
};
U.reset[name]=cL+T;
V[U.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,Q,name,cL);
};

if(R.inheritable||R.apply||R.event||R.deferredInit){U.init[name]=dK+T;
V[U.init[name]]=function(bj){return qx.core.Property.executeOptimizedSetter(this,Q,name,dK,arguments);
};
}
if(R.inheritable){U.refresh[name]=dY+T;
V[U.refresh[name]]=function(C){return qx.core.Property.executeOptimizedSetter(this,Q,name,dY,arguments);
};
}U.setRuntime[name]=dL+T;
V[U.setRuntime[name]]=function(bv){return qx.core.Property.executeOptimizedSetter(this,Q,name,dL,arguments);
};
U.resetRuntime[name]=cJ+T;
V[U.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,Q,name,cJ);
};

if(R.themeable){U.setThemed[name]=dM+T;
V[U.setThemed[name]]=function(bh){return qx.core.Property.executeOptimizedSetter(this,Q,name,dM,arguments);
};
U.resetThemed[name]=cP+T;
V[U.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,Q,name,cP);
};
}
if(R.check===bX){V[dy+T]=new Function(ec+U.set[name]+dH+U.get[name]+cF);
V[ef+T]=new Function(ec+U.get[name]+cA);
}},__ke:{0:eg,1:cp,2:ep,3:cy,4:dl,5:cj},error:function(W,X,Y,ba,bb){var bc=W.constructor.classname;
var bd=bH+Y+ck+bc+es+this.$$method[ba][Y]+ej+bb+cn;
throw new Error(bd+(this.__ke[X]||"Unknown reason: "+X));
},__kf:function(k,m,name,n,o,p){var q=this.$$method[n][name];
{m[q]=new Function(dB,o.join(dW));
};
if(qx.core.Variant.isSet(df,dc)){m[q]=qx.core.Aspect.wrap(k.classname+cv+q,m[q],eo);
}qx.Bootstrap.setDisplayName(m[q],k.classname+bY,q);
if(p===undefined){return k[q]();
}else{return k[q](p[0]);
}},executeOptimizedGetter:function(bo,bp,name,bq){var bs=bp.$$properties[name];
var bu=bp.prototype;
var br=[];
var bt=this.$$store;
br.push(dJ,bt.runtime[name],cR);
br.push(cM,bt.runtime[name],dR);

if(bs.inheritable){br.push(cO,bt.inherit[name],cR);
br.push(cM,bt.inherit[name],dR);
br.push(dS);
}br.push(dJ,bt.user[name],cR);
br.push(cM,bt.user[name],dR);

if(bs.themeable){br.push(cO,bt.theme[name],cR);
br.push(cM,bt.theme[name],dR);
}
if(bs.deferredInit&&bs.init===undefined){br.push(cO,bt.init[name],cR);
br.push(cM,bt.init[name],dR);
}br.push(dS);

if(bs.init!==undefined){if(bs.inheritable){br.push(bF,bt.init[name],dR);

if(bs.nullable){br.push(bL);
}else if(bs.init!==undefined){br.push(cM,bt.init[name],dR);
}else{br.push(bT,name,dx,bp.classname,dw);
}br.push(bE);
}else{br.push(cM,bt.init[name],dR);
}}else if(bs.inheritable||bs.nullable){br.push(cG);
}else{br.push(dE,name,dx,bp.classname,dw);
}return this.__kf(bo,bu,name,bq,br);
},executeOptimizedSetter:function(G,H,name,I,J){var O=H.$$properties[name];
var N=H.prototype;
var L=[];
var K=I===dN||I===dM||I===dL||(I===dK&&O.init===undefined);
var M=O.apply||O.event||O.inheritable;
var P=this.__kg(I,name);
this.__kh(L,O,name,I,K);

if(K){this.__ki(L,H,O,name);
}
if(M){this.__kj(L,K,P,I);
}
if(O.inheritable){L.push(bN);
}{};

if(!M){this.__kl(L,name,I,K);
}else{this.__km(L,O,name,I,K);
}
if(O.inheritable){this.__kn(L,O,name,I);
}else if(M){this.__ko(L,O,name,I);
}
if(M){this.__kp(L,O,name);
if(O.inheritable&&N._getChildren){this.__kq(L,name);
}}if(K){L.push(bU);
}return this.__kf(G,N,name,I,L,J);
},__kg:function(eN,name){if(eN===dL||eN===cJ){var eO=this.$$store.runtime[name];
}else if(eN===dM||eN===cP){eO=this.$$store.theme[name];
}else if(eN===dK){eO=this.$$store.init[name];
}else{eO=this.$$store.user[name];
}return eO;
},__kh:function(bk,bl,name,bm,bn){{if(!bl.nullable||bl.check||bl.inheritable){bk.push(ei);
}if(bm===dN){bk.push(cg,name,bM,bm,ct);
}};
},__ki:function(bw,bx,by,name){if(by.transform){bw.push(bR,by.transform,dq);
}if(by.validate){if(typeof by.validate===cN){bw.push(dO,by.validate,dq);
}else if(by.validate instanceof Function){bw.push(bx.classname,cC,name);
bw.push(en);
}}},__kj:function(b,c,d,e){var f=(e===cL||e===cP||e===cJ);

if(c){b.push(dJ,d,bC);
}else if(f){b.push(dJ,d,ce);
}},__kk:undefined,__kl:function(g,name,h,j){if(h===dL){g.push(dO,this.$$store.runtime[name],dP);
}else if(h===cJ){g.push(dJ,this.$$store.runtime[name],cR);
g.push(dI,this.$$store.runtime[name],dR);
}else if(h===dN){g.push(dO,this.$$store.user[name],dP);
}else if(h===cL){g.push(dJ,this.$$store.user[name],cR);
g.push(dI,this.$$store.user[name],dR);
}else if(h===dM){g.push(dO,this.$$store.theme[name],dP);
}else if(h===cP){g.push(dJ,this.$$store.theme[name],cR);
g.push(dI,this.$$store.theme[name],dR);
}else if(h===dK&&j){g.push(dO,this.$$store.init[name],dP);
}},__km:function(eF,eG,name,eH,eI){if(eG.inheritable){eF.push(ch,this.$$store.inherit[name],dR);
}else{eF.push(cX);
}eF.push(dJ,this.$$store.runtime[name],cI);

if(eH===dL){eF.push(dQ,this.$$store.runtime[name],dP);
}else if(eH===cJ){eF.push(dI,this.$$store.runtime[name],dR);
eF.push(dJ,this.$$store.user[name],cR);
eF.push(dQ,this.$$store.user[name],dR);
eF.push(cO,this.$$store.theme[name],cR);
eF.push(dQ,this.$$store.theme[name],dR);
eF.push(cO,this.$$store.init[name],cI);
eF.push(dQ,this.$$store.init[name],dR);
eF.push(dO,this.$$store.useinit[name],ea);
eF.push(cQ);
}else{eF.push(eb,this.$$store.runtime[name],dR);
if(eH===dN){eF.push(dO,this.$$store.user[name],dP);
}else if(eH===cL){eF.push(dI,this.$$store.user[name],dR);
}else if(eH===dM){eF.push(dO,this.$$store.theme[name],dP);
}else if(eH===cP){eF.push(dI,this.$$store.theme[name],dR);
}else if(eH===dK&&eI){eF.push(dO,this.$$store.init[name],dP);
}}eF.push(cQ);
eF.push(cO,this.$$store.user[name],cI);

if(eH===dN){if(!eG.inheritable){eF.push(dU,this.$$store.user[name],dR);
}eF.push(dQ,this.$$store.user[name],dP);
}else if(eH===cL){if(!eG.inheritable){eF.push(dU,this.$$store.user[name],dR);
}eF.push(dI,this.$$store.user[name],dR);
eF.push(dJ,this.$$store.runtime[name],cR);
eF.push(dQ,this.$$store.runtime[name],dR);
eF.push(dJ,this.$$store.theme[name],cR);
eF.push(dQ,this.$$store.theme[name],dR);
eF.push(cO,this.$$store.init[name],cI);
eF.push(dQ,this.$$store.init[name],dR);
eF.push(dO,this.$$store.useinit[name],ea);
eF.push(cQ);
}else{if(eH===dL){eF.push(dQ,this.$$store.runtime[name],dP);
}else if(eG.inheritable){eF.push(dQ,this.$$store.user[name],dR);
}else{eF.push(eb,this.$$store.user[name],dR);
}if(eH===dM){eF.push(dO,this.$$store.theme[name],dP);
}else if(eH===cP){eF.push(dI,this.$$store.theme[name],dR);
}else if(eH===dK&&eI){eF.push(dO,this.$$store.init[name],dP);
}}eF.push(cQ);
if(eG.themeable){eF.push(cO,this.$$store.theme[name],cI);

if(!eG.inheritable){eF.push(dU,this.$$store.theme[name],dR);
}
if(eH===dL){eF.push(dQ,this.$$store.runtime[name],dP);
}else if(eH===dN){eF.push(dQ,this.$$store.user[name],dP);
}else if(eH===dM){eF.push(dQ,this.$$store.theme[name],dP);
}else if(eH===cP){eF.push(dI,this.$$store.theme[name],dR);
eF.push(dJ,this.$$store.init[name],cI);
eF.push(dQ,this.$$store.init[name],dR);
eF.push(dO,this.$$store.useinit[name],ea);
eF.push(cQ);
}else if(eH===dK){if(eI){eF.push(dO,this.$$store.init[name],dP);
}eF.push(dQ,this.$$store.theme[name],dR);
}else if(eH===dY){eF.push(dQ,this.$$store.theme[name],dR);
}eF.push(cQ);
}eF.push(cO,this.$$store.useinit[name],cw);

if(!eG.inheritable){eF.push(dU,this.$$store.init[name],dR);
}
if(eH===dK){if(eI){eF.push(dQ,this.$$store.init[name],dP);
}else{eF.push(dQ,this.$$store.init[name],dR);
}}else if(eH===dN||eH===dL||eH===dM||eH===dY){eF.push(dI,this.$$store.useinit[name],dR);

if(eH===dL){eF.push(dQ,this.$$store.runtime[name],dP);
}else if(eH===dN){eF.push(dQ,this.$$store.user[name],dP);
}else if(eH===dM){eF.push(dQ,this.$$store.theme[name],dP);
}else if(eH===dY){eF.push(dQ,this.$$store.init[name],dR);
}}eF.push(cQ);
if(eH===dN||eH===dL||eH===dM||eH===dK){eF.push(el);

if(eH===dL){eF.push(dQ,this.$$store.runtime[name],dP);
}else if(eH===dN){eF.push(dQ,this.$$store.user[name],dP);
}else if(eH===dM){eF.push(dQ,this.$$store.theme[name],dP);
}else if(eH===dK){if(eI){eF.push(dQ,this.$$store.init[name],dP);
}else{eF.push(dQ,this.$$store.init[name],dR);
}eF.push(dO,this.$$store.useinit[name],ea);
}eF.push(cQ);
}},__kn:function(eC,eD,name,eE){eC.push(cb);

if(eE===dY){eC.push(cu);
}else{eC.push(cT,this.$$store.inherit[name],dR);
}eC.push(dd);
eC.push(dO,this.$$store.init[name],cY);
eC.push(dO,this.$$store.init[name],dn);
eC.push(dQ,this.$$store.init[name],dR);
eC.push(dO,this.$$store.useinit[name],ea);
eC.push(cd);
eC.push(dI,this.$$store.useinit[name],cq);
eC.push(cQ);
eC.push(dv);
eC.push(et);
eC.push(cs,this.$$store.inherit[name],dR);
eC.push(cQ);
eC.push(cm);
eC.push(dI,this.$$store.inherit[name],dR);
eC.push(bS,this.$$store.inherit[name],eq);
eC.push(cW);
if(eD.init!==undefined&&eE!==dK){eC.push(dT,this.$$store.init[name],dt);
}else{eC.push(du);
}eC.push(ed);
},__ko:function(D,E,name,F){if(F!==dN&&F!==dL&&F!==dM){D.push(dh);
}D.push(dv);
if(E.init!==undefined&&F!==dK){D.push(dT,this.$$store.init[name],dt);
}else{D.push(du);
}},__kp:function(eL,eM,name){if(eM.apply){eL.push(dO,eM.apply,bV,name,cV);
}if(eM.event){eL.push(cE,cc,eM.event,bQ,de,eM.event,bK,bW);
}},__kq:function(be,name){be.push(bI);
be.push(dz,this.$$method.refresh[name],cz,this.$$method.refresh[name],eu);
be.push(cQ);
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__jf:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__jf;
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
},addAdvice:function(n,o,p,name){this.__jf.push({fcn:n,pos:o===c?-1:1,type:p,name:name});
}}});
})();
(function(){var bu="qx.aspects",bt="on",bs=".",br="static",bq="constructor",bp="[Class ",bo="]",bn="toString",bm="member",bl="$$init_",bf=".prototype",bk="destructor",bi="extend",be="destruct",bd="Class",bh="off",bg="qx.Class",bj="singleton",bc="qx.event.type.Data";
qx.Bootstrap.define(bg,{statics:{define:function(name,bI){if(!bI){var bI={};
}if(bI.include&&!(bI.include instanceof Array)){bI.include=[bI.include];
}if(bI.implement&&!(bI.implement instanceof Array)){bI.implement=[bI.implement];
}if(!bI.hasOwnProperty(bi)&&!bI.type){bI.type=br;
}{};
var bK=this.__by(name,bI.type,bI.extend,bI.statics,bI.construct,bI.destruct);
if(bI.extend){if(bI.properties){this.__bA(bK,bI.properties,true);
}if(bI.members){this.__bC(bK,bI.members,true,true,false);
}if(bI.events){this.__bz(bK,bI.events,true);
}if(bI.include){for(var i=0,l=bI.include.length;i<l;i++){this.__bF(bK,bI.include[i],false);
}}}if(bI.settings){for(var bJ in bI.settings){qx.core.Setting.define(bJ,bI.settings[bJ]);
}}if(bI.variants){for(var bJ in bI.variants){qx.core.Variant.define(bJ,bI.variants[bJ].allowedValues,bI.variants[bJ].defaultValue);
}}if(bI.implement){for(var i=0,l=bI.implement.length;i<l;i++){this.__bE(bK,bI.implement[i]);
}}{};
if(bI.defer){bI.defer.self=bK;
bI.defer(bK,bK.prototype,{add:function(name,s){var t={};
t[name]=s;
qx.Class.__bA(bK,t,true);
}});
}return bK;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bv,bw){{};
qx.Class.__bF(bv,bw,false);
},patch:function(by,bz){{};
qx.Class.__bF(by,bz,true);
},isSubClassOf:function(e,f){if(!e){return false;
}
if(e==f){return true;
}
if(e.prototype instanceof f){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(u){var v=[];

while(u){if(u.$$properties){v.push.apply(v,qx.Bootstrap.getKeys(u.$$properties));
}u=u.superclass;
}return v;
},getByProperty:function(Y,name){while(Y){if(Y.$$properties&&Y.$$properties[name]){return Y;
}Y=Y.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(ba,bb){return ba.$$includes&&ba.$$includes.indexOf(bb)!==-1;
},getByMixin:function(j,k){var m,i,l;

while(j){if(j.$$includes){m=j.$$flatIncludes;

for(i=0,l=m.length;i<l;i++){if(m[i]===k){return j;
}}}j=j.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bL,bM){return !!this.getByMixin(bL,bM);
},hasOwnInterface:function(g,h){return g.$$implements&&g.$$implements.indexOf(h)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bD){var bE=[];

while(bD){if(bD.$$implements){bE.push.apply(bE,bD.$$flatImplements);
}bD=bD.superclass;
}return bE;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bR,bS){var bT=bR.constructor;

if(this.hasInterface(bT,bS)){return true;
}
try{qx.Interface.assertObject(bR,bS);
return true;
}catch(d){}
try{qx.Interface.assert(bT,bS,false);
return true;
}catch(bW){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bp+this.classname+bo;
},$$registry:qx.Bootstrap.$$registry,__bu:null,__bv:null,__bw:function(){},__bx:function(){},__by:function(name,w,x,y,z,A){var F;

if(!x&&qx.core.Variant.isSet(bu,bh)){F=y||{};
qx.Bootstrap.setDisplayNames(F,name);
}else{F={};

if(x){if(!z){z=this.__bG();
}F=this.__bI(z,name,w);
qx.Bootstrap.setDisplayName(z,name,bq);
}if(y){qx.Bootstrap.setDisplayNames(y,name);
var G;

for(var i=0,a=qx.Bootstrap.getKeys(y),l=a.length;i<l;i++){G=a[i];
var C=y[G];

if(qx.core.Variant.isSet(bu,bt)){if(C instanceof Function){C=qx.core.Aspect.wrap(name+bs+G,C,br);
}F[G]=C;
}else{F[G]=C;
}}}}var E=qx.Bootstrap.createNamespace(name,F,false);
F.name=F.classname=name;
F.basename=E;
F.$$type=bd;

if(w){F.$$classtype=w;
}if(!F.hasOwnProperty(bn)){F.toString=this.genericToString;
}
if(x){var H=x.prototype;
var B=this.__bH();
B.prototype=H;
var D=new B;
F.prototype=D;
D.name=D.classname=name;
D.basename=E;
z.base=F.superclass=x;
z.self=F.constructor=D.constructor=F;
if(A){if(qx.core.Variant.isSet(bu,bt)){A=qx.core.Aspect.wrap(name,A,bk);
}F.$$destructor=A;
qx.Bootstrap.setDisplayName(A,name,be);
}}this.$$registry[name]=F;
return F;
},__bz:function(bN,bO,bP){var bQ,bQ;
{};

if(bN.$$events){for(var bQ in bO){bN.$$events[bQ]=bO[bQ];
}}else{bN.$$events=bO;
}},__bA:function(L,M,N){var P;

if(N===undefined){N=false;
}var O=!!L.$$propertiesAttached;

for(var name in M){P=M[name];
{};
P.name=name;
if(!P.refine){if(L.$$properties===undefined){L.$$properties={};
}L.$$properties[name]=P;
}if(P.init!==undefined){L.prototype[bl+name]=P.init;
}if(P.event!==undefined){var event={};
event[P.event]=bc;
this.__bz(L,event,N);
}if(P.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(O){qx.core.Property.attachMethods(L,name,P);
}}},__bB:null,__bC:function(Q,R,S,T,U){var V=Q.prototype;
var X,W;
qx.Bootstrap.setDisplayNames(R,Q.classname+bf);

for(var i=0,a=qx.Bootstrap.getKeys(R),l=a.length;i<l;i++){X=a[i];
W=R[X];
{};
if(T!==false&&W instanceof Function&&W.$$type==null){if(U==true){W=this.__bD(W,V[X]);
}else{if(V[X]){W.base=V[X];
}W.self=Q;
}
if(qx.core.Variant.isSet(bu,bt)){W=qx.core.Aspect.wrap(Q.classname+bs+X,W,bm);
}}V[X]=W;
}},__bD:function(bU,bV){if(bV){return function(){var c=bU.base;
bU.base=bV;
var b=bU.apply(this,arguments);
bU.base=c;
return b;
};
}else{return bU;
}},__bE:function(bF,bG){{};
var bH=qx.Interface.flatten([bG]);

if(bF.$$implements){bF.$$implements.push(bG);
bF.$$flatImplements.push.apply(bF.$$flatImplements,bH);
}else{bF.$$implements=[bG];
bF.$$flatImplements=bH;
}},__bF:function(n,o,p){{};

if(this.hasMixin(n,o)){return;
}var r=qx.Mixin.flatten([o]);
var q;

for(var i=0,l=r.length;i<l;i++){q=r[i];
if(q.$$events){this.__bz(n,q.$$events,p);
}if(q.$$properties){this.__bA(n,q.$$properties,p);
}if(q.$$members){this.__bC(n,q.$$members,p,p,p);
}}if(n.$$includes){n.$$includes.push(o);
n.$$flatIncludes.push.apply(n.$$flatIncludes,r);
}else{n.$$includes=[o];
n.$$flatIncludes=r;
}},__bG:function(){function bx(){arguments.callee.base.apply(this,arguments);
}return bx;
},__bH:function(){return function(){};
},__bI:function(bX,name,bY){var cb=function(){var K=arguments.callee.constructor;
{};
if(!K.$$propertiesAttached){qx.core.Property.attach(K);
}var J=K.$$original.apply(this,arguments);
if(K.$$includes){var I=K.$$flatIncludes;

for(var i=0,l=I.length;i<l;i++){if(I[i].$$constructor){I[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return J;
};

if(qx.core.Variant.isSet(bu,bt)){var ca=qx.core.Aspect.wrap(name,cb,bq);
cb.$$original=bX;
cb.constructor=ca;
cb=ca;
}if(bY===bj){cb.getInstance=this.getInstance;
}cb.$$original=bX;
bX.wrapper=cb;
return cb;
}},defer:function(){if(qx.core.Variant.isSet(bu,bt)){for(var bA in qx.Bootstrap.$$registry){var bB=qx.Bootstrap.$$registry[bA];

for(var bC in bB){if(bB[bC] instanceof Function){bB[bC]=qx.core.Aspect.wrap(bA+bs+bC,bB[bC],br);
}}}}}});
})();
(function(){var k="$$hash",j="qx.core.ObjectRegistry";
qx.Class.define(j,{statics:{inShutDown:false,__gQ:{},__gR:0,__gS:[],register:function(e){var h=this.__gQ;

if(!h){return;
}var g=e.$$hash;

if(g==null){var f=this.__gS;

if(f.length>0){g=f.pop();
}else{g=(this.__gR++).toString(36);
}e.$$hash=g;
}{};
h[g]=e;
},unregister:function(r){var s=r.$$hash;

if(s==null){return;
}var t=this.__gQ;

if(t&&t[s]){delete t[s];
this.__gS.push(s);
}try{delete r.$$hash;
}catch(q){if(r.removeAttribute){r.removeAttribute(k);
}}},toHashCode:function(x){{};
var z=x.$$hash;

if(z!=null){return z;
}var y=this.__gS;

if(y.length>0){z=y.pop();
}else{z=(this.__gR++).toString(36);
}return x.$$hash=z;
},clearHashCode:function(u){{};
var v=u.$$hash;

if(v!=null){this.__gS.push(v);
try{delete u.$$hash;
}catch(c){if(u.removeAttribute){u.removeAttribute(k);
}}}},fromHashCode:function(w){return this.__gQ[w]||null;
},shutdown:function(){this.inShutDown=true;
var n=this.__gQ;
var p=[];

for(var o in n){p.push(o);
}p.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var m,i=0,l=p.length;

while(true){try{for(;i<l;i++){o=p[i];
m=n[o];

if(m&&m.dispose){m.dispose();
}}}catch(d){qx.Bootstrap.error(this,"Could not dispose object "+m.toString()+": "+d);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__gQ;
},getRegistry:function(){return this.__gQ;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var t="qx.client",s="on",r="function",q="mousedown",p="qx.bom.Event",o="return;",n="mouseover",m="HTMLEvents";
qx.Class.define(p,{statics:{addNativeListener:qx.core.Variant.select(t,{"mshtml":function(c,d,f){c.attachEvent(s+d,f);
},"default":function(j,k,l){j.addEventListener(k,l,false);
}}),removeNativeListener:qx.core.Variant.select(t,{"mshtml":function(g,h,i){try{g.detachEvent(s+h,i);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(y,z,A){y.removeEventListener(z,A,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(t,{"mshtml":function(e){if(e.type===n){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(t,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==q&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(B){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(u){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(v,w){if(document.createEventObject){var x=document.createEventObject();
return v.fireEvent(s+w,x);
}else{var x=document.createEvent(m);
x.initEvent(w,true,true);
return !v.dispatchEvent(x);
}},supportsEvent:qx.core.Variant.select(t,{"webkit":function(a,b){return a.hasOwnProperty(s+b);
},"default":function(C,D){var E=s+D;
var F=(E in C);

if(!F){F=typeof C[E]==r;

if(!F&&C.setAttribute){C.setAttribute(E,o);
F=typeof C[E]==r;
C.removeAttribute(E);
}}return F;
}})}});
})();
(function(){var E="|bubble",D="|capture",C="|",B="_",A="unload",z="UNKNOWN_",y="DOM_",x="c",w="__ey",v="WIN_",s="capture",u="qx.event.Manager",t="__ex",r="QX_";
qx.Class.define(u,{extend:Object,construct:function(c,d){this.__et=c;
this.__eu=qx.core.ObjectRegistry.toHashCode(c);
this.__ev=d;
if(c.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(c,A,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(c,A,arguments.callee);
self.dispose();
}));
}this.__ew={};
this.__ex={};
this.__ey={};
this.__ez={};
},statics:{__eA:0,getNextUniqueId:function(){return (this.__eA++).toString(36);
}},members:{__ev:null,__ew:null,__ey:null,__eB:null,__ex:null,__ez:null,__et:null,__eu:null,getWindow:function(){return this.__et;
},getWindowId:function(){return this.__eu;
},getHandler:function(a){var b=this.__ex[a.classname];

if(b){return b;
}return this.__ex[a.classname]=new a(this);
},getDispatcher:function(cs){var ct=this.__ey[cs.classname];

if(ct){return ct;
}return this.__ey[cs.classname]=new cs(this,this.__ev);
},getListeners:function(cl,cm,cn){var co=cl.$$hash||qx.core.ObjectRegistry.toHashCode(cl);
var cq=this.__ew[co];

if(!cq){return null;
}var cr=cm+(cn?D:E);
var cp=cq[cr];
return cp?cp.concat():null;
},serializeListeners:function(bc){var bj=bc.$$hash||qx.core.ObjectRegistry.toHashCode(bc);
var bl=this.__ew[bj];
var bh=[];

if(bl){var bf,bk,bd,bg,bi;

for(var be in bl){bf=be.indexOf(C);
bk=be.substring(0,bf);
bd=be.charAt(bf+1)==x;
bg=bl[be];

for(var i=0,l=bg.length;i<l;i++){bi=bg[i];
bh.push({self:bi.context,handler:bi.handler,type:bk,capture:bd});
}}}return bh;
},toggleAttachedEvents:function(cc,cd){var ci=cc.$$hash||qx.core.ObjectRegistry.toHashCode(cc);
var ck=this.__ew[ci];

if(ck){var cf,cj,ce,cg;

for(var ch in ck){cf=ch.indexOf(C);
cj=ch.substring(0,cf);
ce=ch.charCodeAt(cf+1)===99;
cg=ck[ch];

if(cd){this.__eC(cc,cj,ce);
}else{this.__eD(cc,cj,ce);
}}}},hasListener:function(by,bz,bA){{};
var bB=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bD=this.__ew[bB];

if(!bD){return false;
}var bE=bz+(bA?D:E);
var bC=bD[bE];
return bC&&bC.length>0;
},importListeners:function(bF,bG){{};
var bM=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);
var bN=this.__ew[bM]={};
var bJ=qx.event.Manager;

for(var bH in bG){var bK=bG[bH];
var bL=bK.type+(bK.capture?D:E);
var bI=bN[bL];

if(!bI){bI=bN[bL]=[];
this.__eC(bF,bK.type,bK.capture);
}bI.push({handler:bK.listener,context:bK.self,unique:bK.unique||(bJ.__eA++).toString(36)});
}},addListener:function(e,f,g,self,h){var n;
{};
var o=e.$$hash||qx.core.ObjectRegistry.toHashCode(e);
var q=this.__ew[o];

if(!q){q=this.__ew[o]={};
}var m=f+(h?D:E);
var k=q[m];

if(!k){k=q[m]=[];
}if(k.length===0){this.__eC(e,f,h);
}var p=(qx.event.Manager.__eA++).toString(36);
var j={handler:g,context:self,unique:p};
k.push(j);
return m+C+p;
},findHandler:function(bO,bP){var ca=false,bS=false,cb=false;
var bY;

if(bO.nodeType===1){ca=true;
bY=y+bO.tagName.toLowerCase()+B+bP;
}else if(bO==this.__et){bS=true;
bY=v+bP;
}else if(bO.classname){cb=true;
bY=r+bO.classname+B+bP;
}else{bY=z+bO+B+bP;
}var bU=this.__ez;

if(bU[bY]){return bU[bY];
}var bX=this.__ev.getHandlers();
var bT=qx.event.IEventHandler;
var bV,bW,bR,bQ;

for(var i=0,l=bX.length;i<l;i++){bV=bX[i];
bR=bV.SUPPORTED_TYPES;

if(bR&&!bR[bP]){continue;
}bQ=bV.TARGET_CHECK;

if(bQ){if(!ca&&bQ===bT.TARGET_DOMNODE){continue;
}else if(!bS&&bQ===bT.TARGET_WINDOW){continue;
}else if(!cb&&bQ===bT.TARGET_OBJECT){continue;
}}bW=this.getHandler(bX[i]);

if(bV.IGNORE_CAN_HANDLE||bW.canHandleEvent(bO,bP)){bU[bY]=bW;
return bW;
}}return null;
},__eC:function(F,G,H){var I=this.findHandler(F,G);

if(I){I.registerEvent(F,G,H);
return;
}{};
},removeListener:function(cu,cv,cw,self,cx){var cB;
{};
var cC=cu.$$hash||qx.core.ObjectRegistry.toHashCode(cu);
var cD=this.__ew[cC];

if(!cD){return false;
}var cy=cv+(cx?D:E);
var cz=cD[cy];

if(!cz){return false;
}var cA;

for(var i=0,l=cz.length;i<l;i++){cA=cz[i];

if(cA.handler===cw&&cA.context===self){qx.lang.Array.removeAt(cz,i);

if(cz.length==0){this.__eD(cu,cv,cx);
}return true;
}}return false;
},removeListenerById:function(bm,bn){var bt;
{};
var br=bn.split(C);
var bw=br[0];
var bo=br[1].charCodeAt(0)==99;
var bv=br[2];
var bu=bm.$$hash||qx.core.ObjectRegistry.toHashCode(bm);
var bx=this.__ew[bu];

if(!bx){return false;
}var bs=bw+(bo?D:E);
var bq=bx[bs];

if(!bq){return false;
}var bp;

for(var i=0,l=bq.length;i<l;i++){bp=bq[i];

if(bp.unique===bv){qx.lang.Array.removeAt(bq,i);

if(bq.length==0){this.__eD(bm,bw,bo);
}return true;
}}return false;
},removeAllListeners:function(U){var Y=U.$$hash||qx.core.ObjectRegistry.toHashCode(U);
var bb=this.__ew[Y];

if(!bb){return false;
}var W,ba,V;

for(var X in bb){if(bb[X].length>0){W=X.split(C);
ba=W[0];
V=W[1]===s;
this.__eD(U,ba,V);
}}delete this.__ew[Y];
return true;
},__eD:function(Q,R,S){var T=this.findHandler(Q,R);

if(T){T.unregisterEvent(Q,R,S);
return;
}{};
},dispatchEvent:function(J,event){var O;
{};
var P=event.getType();

if(!event.getBubbles()&&!this.hasListener(J,P)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(J);
}var N=this.__ev.getDispatchers();
var M;
var L=false;

for(var i=0,l=N.length;i<l;i++){M=this.getDispatcher(N[i]);
if(M.canDispatchEvent(J,event,P)){M.dispatchEvent(J,event,P);
L=true;
break;
}}
if(!L){qx.log.Logger.error(this,"No dispatcher can handle event of type "+P+" on "+J);
return true;
}var K=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !K;
},dispose:function(){this.__ev.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,t);
qx.util.DisposeUtil.disposeMap(this,w);
this.__ew=this.__et=this.__eB=null;
this.__ev=this.__ez=null;
}}});
})();
(function(){var k="qx.dom.Node",j="qx.client",h="";
qx.Class.define(k,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===
this.DOCUMENT?e:
e.ownerDocument||e.document;
},getWindow:qx.core.Variant.select(j,{"mshtml":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.parentWindow;
},"default":function(s){if(s.nodeType==null){return s;
}if(s.nodeType!==this.DOCUMENT){s=s.ownerDocument;
}return s.defaultView;
}}),getDocumentElement:function(t){return this.getDocument(t).documentElement;
},getBodyElement:function(o){return this.getDocument(o).body;
},isNode:function(d){return !!(d&&d.nodeType!=null);
},isElement:function(p){return !!(p&&p.nodeType===this.ELEMENT);
},isDocument:function(q){return !!(q&&q.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(r){return !!(r&&r.history&&r.location&&r.document);
},isNodeName:function(b,c){if(!c||!b||!b.nodeName){return false;
}return c.toLowerCase()==qx.dom.Node.getName(b);
},getName:function(g){if(!g||!g.nodeName){return null;
}return g.nodeName.toLowerCase();
},getText:function(l){if(!l||!l.nodeType){return null;
}
switch(l.nodeType){case 1:var i,a=[],m=l.childNodes,length=m.length;

for(i=0;i<length;i++){a[i]=this.getText(m[i]);
}return a.join(h);
case 2:return l.nodeValue;
break;
case 3:return l.nodeValue;
break;
}return null;
}}});
})();
(function(){var G="mshtml",F="qx.client",E="[object Array]",D="qx.lang.Array",C="qx",B="number",A="string";
qx.Class.define(D,{statics:{toArray:function(V,W){return this.cast(V,Array,W);
},cast:function(bb,bc,bd){if(bb.constructor===bc){return bb;
}
if(qx.Class.hasInterface(bb,qx.data.IListData)){var bb=bb.toArray();
}var be=new bc;
if(qx.core.Variant.isSet(F,G)){if(bb.item){for(var i=bd||0,l=bb.length;i<l;i++){be.push(bb[i]);
}return be;
}}if(Object.prototype.toString.call(bb)===E&&bd==null){be.push.apply(be,bb);
}else{be.push.apply(be,Array.prototype.slice.call(bb,bd||0));
}return be;
},fromArguments:function(u,v){return Array.prototype.slice.call(u,v||0);
},fromCollection:function(I){if(qx.core.Variant.isSet(F,G)){if(I.item){var J=[];

for(var i=0,l=I.length;i<l;i++){J[i]=I[i];
}return J;
}}return Array.prototype.slice.call(I,0);
},fromShortHand:function(bj){var bl=bj.length;
var bk=qx.lang.Array.clone(bj);
switch(bl){case 1:bk[1]=bk[2]=bk[3]=bk[0];
break;
case 2:bk[2]=bk[0];
case 3:bk[3]=bk[1];
}return bk;
},clone:function(Q){return Q.concat();
},insertAt:function(y,z,i){y.splice(i,0,z);
return y;
},insertBefore:function(K,L,M){var i=K.indexOf(M);

if(i==-1){K.push(L);
}else{K.splice(i,0,L);
}return K;
},insertAfter:function(X,Y,ba){var i=X.indexOf(ba);

if(i==-1||i==(X.length-1)){X.push(Y);
}else{X.splice(i+1,0,Y);
}return X;
},removeAt:function(H,i){return H.splice(i,1)[0];
},removeAll:function(N){N.length=0;
return this;
},append:function(s,t){{};
Array.prototype.push.apply(s,t);
return s;
},exclude:function(R,S){{};

for(var i=0,U=S.length,T;i<U;i++){T=R.indexOf(S[i]);

if(T!=-1){R.splice(T,1);
}}return R;
},remove:function(b,c){var i=b.indexOf(c);

if(i!=-1){b.splice(i,1);
return c;
}},contains:function(w,x){return w.indexOf(x)!==-1;
},equals:function(bp,bq){var length=bp.length;

if(length!==bq.length){return false;
}
for(var i=0;i<length;i++){if(bp[i]!==bq[i]){return false;
}}return true;
},sum:function(O){var P=0;

for(var i=0,l=O.length;i<l;i++){P+=O[i];
}return P;
},max:function(bf){{};
var i,bh=bf.length,bg=bf[0];

for(i=1;i<bh;i++){if(bf[i]>bg){bg=bf[i];
}}return bg===undefined?null:bg;
},min:function(bm){{};
var i,bo=bm.length,bn=bm[0];

for(i=1;i<bo;i++){if(bm[i]<bn){bn=bm[i];
}}return bn===undefined?null:bn;
},unique:function(d){var p=[],f={},j={},m={};
var k,e=0;
var q=C+qx.lang.Date.now();
var g=false,o=false,r=false;
for(var i=0,n=d.length;i<n;i++){k=d[i];
if(k===null){if(!g){g=true;
p.push(k);
}}else if(k===undefined){}else if(k===false){if(!o){o=true;
p.push(k);
}}else if(k===true){if(!r){r=true;
p.push(k);
}}else if(typeof k===A){if(!f[k]){f[k]=1;
p.push(k);
}}else if(typeof k===B){if(!j[k]){j[k]=1;
p.push(k);
}}else{h=k[q];

if(h==null){h=k[q]=e++;
}
if(!m[h]){m[h]=k;
p.push(k);
}}}for(var h in m){try{delete m[h][q];
}catch(bi){try{m[h][q]=null;
}catch(a){throw new Error("Cannot clean-up map entry doneObjects["+h+"]["+q+"]");
}}}return p;
}}});
})();
(function(){var t="()",s=".",r=".prototype.",q='anonymous()',p="qx.lang.Function",o=".constructor()";
qx.Class.define(p,{statics:{getCaller:function(w){return w.caller?w.caller.callee:w.callee.caller;
},getName:function(f){if(f.displayName){return f.displayName;
}
if(f.$$original||f.wrapper||f.classname){return f.classname+o;
}
if(f.$$mixin){for(var h in f.$$mixin.$$members){if(f.$$mixin.$$members[h]==f){return f.$$mixin.name+r+h+t;
}}for(var h in f.$$mixin){if(f.$$mixin[h]==f){return f.$$mixin.name+s+h+t;
}}}
if(f.self){var i=f.self.constructor;

if(i){for(var h in i.prototype){if(i.prototype[h]==f){return i.classname+r+h+t;
}}for(var h in i){if(i[h]==f){return i.classname+s+h+t;
}}}}var g=f.toString().match(/function\s*(\w*)\s*\(.*/);

if(g&&g.length>=1&&g[1]){return g[1]+t;
}return q;
},globalEval:function(c){if(window.execScript){return window.execScript(c);
}else{return eval.call(window,c);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(d,e){{};
if(!e){return d;
}if(!(e.self||e.args||e.delay!=null||e.periodical!=null||e.attempt)){return d;
}return function(event){{};
var G=qx.lang.Array.fromArguments(arguments);
if(e.args){G=e.args.concat(G);
}
if(e.delay||e.periodical){var F=qx.event.GlobalError.observeMethod(function(){return d.apply(e.self||this,G);
});

if(e.delay){return window.setTimeout(F,e.delay);
}
if(e.periodical){return window.setInterval(F,e.periodical);
}}else if(e.attempt){var H=false;

try{H=d.apply(e.self||this,G);
}catch(v){}return H;
}else{return d.apply(e.self||this,G);
}};
},bind:function(a,self,b){return this.create(a,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(j,k){return this.create(j,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(x,self,y){if(arguments.length<3){return function(event){return x.call(self||this,event||window.event);
};
}else{var z=qx.lang.Array.fromArguments(arguments,2);
return function(event){var u=[event||window.event];
u.push.apply(u,z);
x.apply(self||this,u);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(l,m,self,n){return this.create(l,{periodical:m,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var i="qx.event.Registration";
qx.Class.define(i,{statics:{__ei:{},getManager:function(A){if(A==null){{};
A=window;
}else if(A.nodeType){A=qx.dom.Node.getWindow(A);
}else if(!qx.dom.Node.isWindow(A)){A=window;
}var C=A.$$hash||qx.core.ObjectRegistry.toHashCode(A);
var B=this.__ei[C];

if(!B){B=new qx.event.Manager(A,this);
this.__ei[C]=B;
}return B;
},removeManager:function(r){var s=r.getWindowId();
delete this.__ei[s];
},addListener:function(J,K,L,self,M){return this.getManager(J).addListener(J,K,L,self,M);
},removeListener:function(N,O,P,self,Q){return this.getManager(N).removeListener(N,O,P,self,Q);
},removeListenerById:function(E,F){return this.getManager(E).removeListenerById(E,F);
},removeAllListeners:function(h){return this.getManager(h).removeAllListeners(h);
},hasListener:function(G,H,I){return this.getManager(G).hasListener(G,H,I);
},serializeListeners:function(D){return this.getManager(D).serializeListeners(D);
},createEvent:function(d,e,f){{};
if(e==null){e=qx.event.type.Event;
}var g=qx.event.Pool.getInstance().getObject(e);

if(!g){return;
}f?g.init.apply(g,f):g.init();
if(d){g.setType(d);
}return g;
},dispatchEvent:function(c,event){return this.getManager(c).dispatchEvent(c,event);
},fireEvent:function(t,u,v,w){var x;
{};
var y=this.createEvent(u,v||null,w);
return this.getManager(t).dispatchEvent(t,y);
},fireNonBubblingEvent:function(l,m,n,o){{};
var p=this.getManager(l);

if(!p.hasListener(l,m,false)){return true;
}var q=this.createEvent(m,n||null,o);
return p.dispatchEvent(l,q);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__ej:[],addHandler:function(z){{};
this.__ej.push(z);
this.__ej.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__ej;
},__ek:[],addDispatcher:function(j,k){{};
this.__ek.push(j);
this.__ek.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__ek;
}}});
})();
(function(){var b="qx.log.appender.RingBuffer";
qx.Class.define(b,{extend:Object,construct:function(c){this.__jQ=[];
this.setMaxMessages(c||50);
},members:{__jR:0,__jQ:null,__jS:50,setMaxMessages:function(a){this.__jS=a;
this.clearHistory();
},getMaxMessages:function(){return this.__jS;
},process:function(d){var e=this.getMaxMessages();

if(this.__jQ.length<e){this.__jQ.push(d);
}else{this.__jQ[this.__jR++]=d;

if(this.__jR>=e){this.__jR=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(f){if(f>this.__jQ.length){f=this.__jQ.length;
}
if(this.__jQ.length==this.getMaxMessages()){var h=this.__jR-1;
}else{h=this.__jQ.length-1;
}var g=h-f+1;

if(g<0){g+=this.__jQ.length;
}var i;

if(g<=h){i=this.__jQ.slice(g,h+1);
}else{i=this.__jQ.slice(g,this.__jQ.length).concat(this.__jQ.slice(0,h+1));
}return i;
},clearHistory:function(){this.__jQ=[];
this.__jR=0;
}}});
})();
(function(){var N="node",M="error",L="...(+",K="array",J=")",I="info",H="instance",G="string",F="null",E="class",bj="number",bi="stringify",bh="]",bg="unknown",bf="function",be="boolean",bd="debug",bc="map",bb="undefined",ba="qx.log.Logger",U=")}",V="#",S="warn",T="document",Q="{...(",R="[",O="text[",P="[...(",W="\n",X=")]",Y="object";
qx.Class.define(ba,{statics:{__el:bd,setLevel:function(g){this.__el=g;
},getLevel:function(){return this.__el;
},setTreshold:function(o){this.__eo.setMaxMessages(o);
},getTreshold:function(){return this.__eo.getMaxMessages();
},__em:{},__en:0,register:function(h){if(h.$$id){return;
}var j=this.__en++;
this.__em[j]=h;
h.$$id=j;
var k=this.__eo.getAllLogEvents();

for(var i=0,l=k.length;i<l;i++){h.process(k[i]);
}},unregister:function(m){var n=m.$$id;

if(n==null){return;
}delete this.__em[n];
delete m.$$id;
},debug:function(y,z){qx.log.Logger.__eq(bd,arguments);
},info:function(bx,by){qx.log.Logger.__eq(I,arguments);
},warn:function(bk,bl){qx.log.Logger.__eq(S,arguments);
},error:function(A,B){qx.log.Logger.__eq(M,arguments);
},trace:function(bw){qx.log.Logger.__eq(I,[bw,qx.dev.StackTrace.getStackTrace().join(W)]);
},deprecatedMethodWarning:function(bz,bA){var bB;
{};
},deprecatedClassWarning:function(v,w){var x;
{};
},deprecatedEventWarning:function(d,event,e){var f;
{};
},deprecatedMixinWarning:function(a,b){var c;
{};
},deprecatedConstantWarning:function(r,s,t){var self,u;
{};
},clear:function(){this.__eo.clearHistory();
},__eo:new qx.log.appender.RingBuffer(50),__ep:{debug:0,info:1,warn:2,error:3},__eq:function(bm,bn){var bs=this.__ep;

if(bs[bm]<bs[this.__el]){return;
}var bp=bn.length<2?null:bn[0];
var br=bp?1:0;
var bo=[];

for(var i=br,l=bn.length;i<l;i++){bo.push(this.__es(bn[i],true));
}var bt=new Date;
var bu={time:bt,offset:bt-qx.Bootstrap.LOADSTART,level:bm,items:bo,win:window};
if(bp){if(bp instanceof qx.core.Object){bu.object=bp.$$hash;
}else if(bp.$$type){bu.clazz=bp;
}}this.__eo.process(bu);
var bv=this.__em;

for(var bq in bv){bv[bq].process(bu);
}},__er:function(p){if(p===undefined){return bb;
}else if(p===null){return F;
}
if(p.$$type){return E;
}var q=typeof p;

if(q===bf||q==G||q===bj||q===be){return q;
}else if(q===Y){if(p.nodeType){return N;
}else if(p.classname){return H;
}else if(p instanceof Array){return K;
}else if(p instanceof Error){return M;
}else{return bc;
}}
if(p.toString){return bi;
}return bg;
},__es:function(bC,bD){var bK=this.__er(bC);
var bG=bg;
var bF=[];

switch(bK){case F:case bb:bG=bK;
break;
case G:case bj:case be:bG=bC;
break;
case N:if(bC.nodeType===9){bG=T;
}else if(bC.nodeType===3){bG=O+bC.nodeValue+bh;
}else if(bC.nodeType===1){bG=bC.nodeName.toLowerCase();

if(bC.id){bG+=V+bC.id;
}}else{bG=N;
}break;
case bf:bG=qx.lang.Function.getName(bC)||bK;
break;
case H:bG=bC.basename+R+bC.$$hash+bh;
break;
case E:case bi:bG=bC.toString();
break;
case M:bF=qx.dev.StackTrace.getStackTraceFromError(bC);
bG=bC.toString();
break;
case K:if(bD){bG=[];

for(var i=0,l=bC.length;i<l;i++){if(bG.length>20){bG.push(L+(l-i)+J);
break;
}bG.push(this.__es(bC[i],false));
}}else{bG=P+bC.length+X;
}break;
case bc:if(bD){var bE;
var bJ=[];

for(var bI in bC){bJ.push(bI);
}bJ.sort();
bG=[];

for(var i=0,l=bJ.length;i<l;i++){if(bG.length>20){bG.push(L+(l-i)+J);
break;
}bI=bJ[i];
bE=this.__es(bC[bI],false);
bE.key=bI;
bG.push(bE);
}}else{var bH=0;

for(var bI in bC){bH++;
}bG=Q+bH+U;
}break;
}return {type:bK,text:bG,trace:bF};
}},defer:function(C){var D=qx.Bootstrap.$$logs;

for(var i=0;i<D.length;i++){this.__eq(D[i][0],D[i][1]);
}qx.Bootstrap.debug=C.debug;
qx.Bootstrap.info=C.info;
qx.Bootstrap.warn=C.warn;
qx.Bootstrap.error=C.error;
qx.Bootstrap.trace=C.trace;
}});
})();
(function(){var J="set",I="get",H="reset",G="qx.core.Object",F="]",E="[",D="$$user_",C="Object";
qx.Class.define(G,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:C},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+E+this.$$hash+F;
},base:function(bg,bh){{};

if(arguments.length===1){return bg.callee.base.call(this);
}else{return bg.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bu){return bu.callee.self;
},clone:function(){var V=this.constructor;
var U=new V;
var X=qx.Class.getProperties(V);
var W=qx.core.Property.$$store.user;
var Y=qx.core.Property.$$method.set;
var name;
for(var i=0,l=X.length;i<l;i++){name=X[i];

if(this.hasOwnProperty(W[name])){U[Y[name]](this[W[name]]);
}}return U;
},set:function(bq,br){var bt=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bq)){if(!this[bt[bq]]){if(this[J+qx.Bootstrap.firstUp(bq)]!=undefined){this[J+qx.Bootstrap.firstUp(bq)](br);
return;
}{};
}return this[bt[bq]](br);
}else{for(var bs in bq){if(!this[bt[bs]]){if(this[J+qx.Bootstrap.firstUp(bs)]!=undefined){this[J+qx.Bootstrap.firstUp(bs)](bq[bs]);
continue;
}{};
}this[bt[bs]](bq[bs]);
}return this;
}},get:function(bv){var bw=qx.core.Property.$$method.get;

if(!this[bw[bv]]){if(this[I+qx.Bootstrap.firstUp(bv)]!=undefined){return this[I+qx.Bootstrap.firstUp(bv)]();
}{};
}return this[bw[bv]]();
},reset:function(bi){var bj=qx.core.Property.$$method.reset;

if(!this[bj[bi]]){if(this[H+qx.Bootstrap.firstUp(bi)]!=undefined){this[H+qx.Bootstrap.firstUp(bi)]();
return;
}{};
}this[bj[bi]]();
},__jT:qx.event.Registration,addListener:function(bd,be,self,bf){if(!this.$$disposed){return this.__jT.addListener(this,bd,be,self,bf);
}return null;
},addListenerOnce:function(L,M,self,N){var O=function(e){M.call(self||this,e);
this.removeListener(L,O,this,N);
};
return this.addListener(L,O,this,N);
},removeListener:function(Q,R,self,S){if(!this.$$disposed){return this.__jT.removeListener(this,Q,R,self,S);
}return false;
},removeListenerById:function(P){if(!this.$$disposed){return this.__jT.removeListenerById(this,P);
}return false;
},hasListener:function(r,s){return this.__jT.hasListener(this,r,s);
},dispatchEvent:function(B){if(!this.$$disposed){return this.__jT.dispatchEvent(this,B);
}return true;
},fireEvent:function(t,u,v){if(!this.$$disposed){return this.__jT.fireEvent(this,t,u,v);
}return true;
},fireNonBubblingEvent:function(n,o,p){if(!this.$$disposed){return this.__jT.fireNonBubblingEvent(this,n,o,p);
}return true;
},fireDataEvent:function(bl,bm,bn,bo){if(!this.$$disposed){if(bn===undefined){bn=null;
}return this.__jT.fireNonBubblingEvent(this,bl,qx.event.type.Data,[bm,bn,!!bo]);
}return true;
},__jU:null,setUserData:function(ba,bb){if(!this.__jU){this.__jU={};
}this.__jU[ba]=bb;
},getUserData:function(k){if(!this.__jU){return null;
}var m=this.__jU[k];
return m===undefined?null:m;
},__jV:qx.log.Logger,debug:function(K){this.__jV.debug(this,K);
},info:function(q){this.__jV.info(this,q);
},warn:function(by){this.__jV.warn(this,by);
},error:function(bk){this.__jV.error(this,bk);
},trace:function(){this.__jV.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var z,x;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var y=this.constructor;
var w;

while(y.superclass){if(y.$$destructor){y.$$destructor.call(this);
}if(y.$$includes){w=y.$$flatIncludes;

for(var i=0,l=w.length;i<l;i++){if(w[i].$$destructor){w[i].$$destructor.call(this);
}}}y=y.superclass;
}var A=qx.Class.getProperties(this.constructor);

for(var i=0,l=A.length;i<l;i++){delete this[D+A[i]];
}{};
},_disposeFields:function(bc){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bx){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(bz){qx.util.DisposeUtil.disposeArray(this,bz);
},_disposeMap:function(bp){qx.util.DisposeUtil.disposeMap(this,bp);
}},settings:{"qx.disposerDebugLevel":0},defer:function(T){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__jU=null;
var c=this.constructor;
var h;
var j=qx.core.Property.$$store;
var f=j.user;
var g=j.theme;
var a=j.inherit;
var d=j.useinit;
var b=j.init;

while(c){h=c.$$properties;

if(h){for(var name in h){if(h[name].dispose){this[f[name]]=this[g[name]]=this[a[name]]=this[d[name]]=this[b[name]]=undefined;
}}}c=c.superclass;
}}});
})();
(function(){var F="keypress",E="focusout",D="activate",C="__bf",B="Tab",A="singleton",z="deactivate",y="focusin",x="qx.ui.core.FocusHandler";
qx.Class.define(x,{extend:qx.core.Object,type:A,construct:function(){arguments.callee.base.call(this);
this.__bf={};
},members:{__bf:null,__bg:null,__bh:null,__bi:null,connectTo:function(bh){bh.addListener(F,this.__bj,this);
bh.addListener(y,this._onFocusIn,this,true);
bh.addListener(E,this._onFocusOut,this,true);
bh.addListener(D,this._onActivate,this,true);
bh.addListener(z,this._onDeactivate,this,true);
},addRoot:function(bi){this.__bf[bi.$$hash]=bi;
},removeRoot:function(g){delete this.__bf[g.$$hash];
},getActiveWidget:function(){return this.__bg;
},isActive:function(o){return this.__bg==o;
},getFocusedWidget:function(){return this.__bh;
},isFocused:function(R){return this.__bh==R;
},isFocusRoot:function(h){return !!this.__bf[h.$$hash];
},_onActivate:function(e){var T=e.getTarget();
this.__bg=T;
var S=this.__bk(T);

if(S!=this.__bi){this.__bi=S;
}},_onDeactivate:function(e){var G=e.getTarget();

if(this.__bg==G){this.__bg=null;
}},_onFocusIn:function(e){var U=e.getTarget();

if(U!=this.__bh){this.__bh=U;
U.visualizeFocus();
}},_onFocusOut:function(e){var L=e.getTarget();

if(L==this.__bh){this.__bh=null;
L.visualizeBlur();
}},__bj:function(e){if(e.getKeyIdentifier()!=B){return;
}
if(!this.__bi){return;
}e.stopPropagation();
e.preventDefault();
var M=this.__bh;

if(!e.isShiftPressed()){var N=M?this.__bo(M):this.__bm();
}else{var N=M?this.__bp(M):this.__bn();
}if(N){N.tabFocus();
}},__bk:function(d){var f=this.__bf;

while(d){if(f[d.$$hash]){return d;
}d=d.getLayoutParent();
}return null;
},__bl:function(V,W){if(V===W){return 0;
}var Y=V.getTabIndex()||0;
var X=W.getTabIndex()||0;

if(Y!=X){return Y-X;
}var be=V.getContainerElement().getDomElement();
var bd=W.getContainerElement().getDomElement();
var bc=qx.bom.element.Location;
var bb=bc.get(be);
var ba=bc.get(bd);
if(bb.top!=ba.top){return bb.top-ba.top;
}if(bb.left!=ba.left){return bb.left-ba.left;
}var bf=V.getZIndex();
var bg=W.getZIndex();

if(bf!=bg){return bf-bg;
}return 0;
},__bm:function(){return this.__bs(this.__bi,null);
},__bn:function(){return this.__bt(this.__bi,null);
},__bo:function(H){var I=this.__bi;

if(I==H){return this.__bm();
}
while(H&&H.getAnonymous()){H=H.getLayoutParent();
}
if(H==null){return [];
}var J=[];
this.__bq(I,H,J);
J.sort(this.__bl);
var K=J.length;
return K>0?J[0]:this.__bm();
},__bp:function(t){var u=this.__bi;

if(u==t){return this.__bn();
}
while(t&&t.getAnonymous()){t=t.getLayoutParent();
}
if(t==null){return [];
}var v=[];
this.__br(u,t,v);
v.sort(this.__bl);
var w=v.length;
return w>0?v[w-1]:this.__bn();
},__bq:function(parent,p,q){var r=parent.getLayoutChildren();
var s;

for(var i=0,l=r.length;i<l;i++){s=r[i];
if(!(s instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(s)&&s.isEnabled()&&s.isVisible()){if(s.isTabable()&&this.__bl(p,s)<0){q.push(s);
}this.__bq(s,p,q);
}}},__br:function(parent,j,k){var m=parent.getLayoutChildren();
var n;

for(var i=0,l=m.length;i<l;i++){n=m[i];
if(!(n instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(n)&&n.isEnabled()&&n.isVisible()){if(n.isTabable()&&this.__bl(j,n)>0){k.push(n);
}this.__br(n,j,k);
}}},__bs:function(parent,O){var P=parent.getLayoutChildren();
var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];
if(!(Q instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(Q)&&Q.isEnabled()&&Q.isVisible()){if(Q.isTabable()){if(O==null||this.__bl(Q,O)<0){O=Q;
}}O=this.__bs(Q,O);
}}return O;
},__bt:function(parent,a){var b=parent.getLayoutChildren();
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];
if(!(c instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(c)&&c.isEnabled()&&c.isVisible()){if(c.isTabable()){if(a==null||this.__bl(c,a)>0){a=c;
}}a=this.__bt(c,a);
}}return a;
}},destruct:function(){this._disposeMap(C);
this.__bh=this.__bg=this.__bi=null;
}});
})();
(function(){var d="qx.event.IEventHandler";
qx.Interface.define(d,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(a,b,c){}}});
})();
(function(){var h="qx.event.handler.Appear",g="disappear",f="appear";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){arguments.callee.base.call(this);
this.__bJ=c;
this.__bK={};
qx.event.handler.Appear.__bL[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bL:{},refresh:function(){var a=this.__bL;

for(var b in a){a[b].refresh();
}}},members:{__bJ:null,__bK:null,canHandleEvent:function(d,e){},registerEvent:function(o,p,q){var r=qx.core.ObjectRegistry.toHashCode(o)+p;
var s=this.__bK;

if(s&&!s[r]){s[r]=o;
o.$$displayed=o.offsetWidth>0;
}},unregisterEvent:function(j,k,l){var m=qx.core.ObjectRegistry.toHashCode(j)+k;
var n=this.__bK;

if(!n){return;
}
if(n[m]){delete n[m];
}},refresh:function(){var w=this.__bK;
var x;

for(var v in w){x=w[v];
var t=x.offsetWidth>0;

if((!!x.$$displayed)!==t){x.$$displayed=t;
var u=qx.event.Registration.createEvent(t?f:g);
this.__bJ.dispatchEvent(x,u);
}}}},destruct:function(){this.__bJ=this.__bK=null;
delete qx.event.handler.Appear.__bL[this.$$hash];
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__fH:function(){this.QUIRKS_MODE=this.__fI();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__fI:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__fH();
}});
})();
(function(){var n="/",m="mshtml",l="",k="qx.client",j="?",i="string",h="qx.util.ResourceManager",g="singleton";
qx.Class.define(h,{extend:qx.core.Object,type:g,statics:{__bM:qx.$$resources||{},__bN:{}},members:{has:function(v){return !!arguments.callee.self.__bM[v];
},getData:function(o){return arguments.callee.self.__bM[o]||null;
},getImageWidth:function(e){var f=arguments.callee.self.__bM[e];
return f?f[0]:null;
},getImageHeight:function(A){var B=arguments.callee.self.__bM[A];
return B?B[1]:null;
},getImageFormat:function(y){var z=arguments.callee.self.__bM[y];
return z?z[2]:null;
},isClippedImage:function(w){var x=arguments.callee.self.__bM[w];
return x&&x.length>4;
},toUri:function(a){if(a==null){return a;
}var b=arguments.callee.self.__bM[a];

if(!b){return a;
}
if(typeof b===i){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=l;

if(qx.core.Variant.isSet(k,m)&&qx.bom.client.Feature.SSL){c=arguments.callee.self.__bN[d];
}return c+qx.$$libraries[d].resourceUri+n+a;
}},defer:function(p){if(qx.core.Variant.isSet(k,m)){if(qx.bom.client.Feature.SSL){for(var t in qx.$$libraries){var r;

if(qx.$$libraries[t].resourceUri){r=qx.$$libraries[t].resourceUri;
}else{p.__bN[t]=l;
continue;
}if(r.match(/^\/\//)!=null){p.__bN[t]=window.location.protocol;
}else if(r.match(/^\.\//)!=null){var q=document.URL;
p.__bN[t]=q.substring(0,q.lastIndexOf(n)+1);
}else if(r.match(/^http/)!=null){}else{var u=window.location.href.indexOf(j);
var s;

if(u==-1){s=window.location.href;
}else{s=window.location.href.substring(0,u);
}p.__bN[t]=s.substring(0,s.lastIndexOf(n)+1);
}}}}}});
})();
(function(){var g="abstract",f="qx.ui.layout.Abstract";
qx.Class.define(f,{type:g,extend:qx.core.Object,members:{__fA:null,_invalidChildrenCache:null,__fB:null,invalidateLayoutCache:function(){this.__fA=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__fA){return this.__fA;
}return this.__fA=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var h=this.__fB;

if(h instanceof qx.ui.core.LayoutItem){h.clearSeparators();
}},_renderSeparator:function(a,b){this.__fB.renderSeparator(a,b);
},connectToWidget:function(i){if(i&&this.__fB){throw new Error("It is not possible to manually set the connected widget.");
}this.__fB=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__fB;
},_applyLayoutChange:function(){if(this.__fB){this.__fB.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__fB.getLayoutChildren();
}},destruct:function(){this.__fB=this.__fA=null;
}});
})();
(function(){var v="bottom",u="_applyLayoutChange",t="top",s="left",r="right",q="middle",p="center",o="qx.ui.layout.Atom",n="Integer",m="Boolean";
qx.Class.define(o,{extend:qx.ui.layout.Abstract,properties:{gap:{check:n,init:4,apply:u},iconPosition:{check:[s,t,r,v],init:s,apply:u},center:{check:m,init:false,apply:u}},members:{verifyLayoutProperty:null,renderLayout:function(w,x){var G=qx.ui.layout.Util;
var z=this.getIconPosition();
var C=this._getLayoutChildren();
var length=C.length;
var Q,top,P,A;
var L,F;
var J=this.getGap();
var O=this.getCenter();
if(z===v||z===r){var H=length-1;
var D=-1;
var B=-1;
}else{var H=0;
var D=length;
var B=1;
}if(z==t||z==v){if(O){var K=0;

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
Q=G.computeHorizontalAlignOffset(p,P,w);
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
}top=G.computeVerticalAlignOffset(q,F.height,x);
L.renderLayout(Q,top,P,A);
if(P>0){Q+=P+J;
}}}},_computeSizeHint:function(){var l=this._getLayoutChildren();
var length=l.length;
var c,j;
if(length===1){var c=l[0].getSizeHint();
j={width:c.width,height:c.height,minWidth:c.minWidth,minHeight:c.minHeight};
}else{var g=0,h=0;
var d=0,f=0;
var e=this.getIconPosition();
var k=this.getGap();

if(e===t||e===v){var a=0;

for(var i=0;i<length;i++){c=l[i].getSizeHint();
h=Math.max(h,c.width);
g=Math.max(g,c.minWidth);
if(c.height>0){f+=c.height;
d+=c.minHeight;
a++;
}}
if(a>1){var b=(a-1)*k;
f+=b;
d+=b;
}}else{var a=0;

for(var i=0;i<length;i++){c=l[i].getSizeHint();
f=Math.max(f,c.height);
d=Math.max(d,c.minHeight);
if(c.width>0){h+=c.width;
g+=c.minWidth;
a++;
}}
if(a>1){var b=(a-1)*k;
h+=b;
g+=b;
}}j={minWidth:g,width:h,minHeight:d,height:f};
}return j;
}}});
})();
(function(){var g="object",f="_applyTheme",e="qx.theme.manager.Decoration",d="Theme",c="__bO",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:f}},members:{__bO:null,resolve:function(p){if(!p){return null;
}
if(typeof p===g){return p;
}var s=this.getTheme();

if(!s){return null;
}var s=this.getTheme();

if(!s){return null;
}var t=this.__bO;

if(!t){t=this.__bO={};
}var q=t[p];

if(q){return q;
}var r=s.decorations[p];

if(!r){return null;
}var u=r.decorator;

if(u==null){throw new Error("Missing definition of which decorator to use in entry: "+p+"!");
}return t[p]=(new u).set(r.style);
},isValidPropertyValue:function(l){if(typeof l===b){return this.isDynamic(l);
}else if(typeof l===g){var m=l.constructor;
return qx.Class.hasInterface(m,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(n){if(!n){return false;
}var o=this.getTheme();

if(!o){return false;
}return !!o.decorations[n];
},_applyTheme:function(h,i){var k=qx.util.AliasManager.getInstance();

if(i){for(var j in i.aliases){k.remove(j);
}}
if(h){for(var j in h.aliases){k.add(j,h.aliases[j]);
}}
if(!h){this.__bO={};
}}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var w="auto",v="px",u=",",t="clip:auto;",s="rect(",r=");",q="",p=")",o="qx.bom.element.Clip",n="string",k="rect(auto)",m="clip:rect(",l="clip",j="rect(auto,auto,auto,auto)";
qx.Class.define(o,{statics:{compile:function(x){if(!x){return t;
}var C=x.left;
var top=x.top;
var B=x.width;
var A=x.height;
var y,z;

if(C==null){y=(B==null?w:B+v);
C=w;
}else{y=(B==null?w:C+B+v);
C=C+v;
}
if(top==null){z=(A==null?w:A+v);
top=w;
}else{z=(A==null?w:top+A+v);
top=top+v;
}return m+top+u+y+u+z+u+C+r;
},get:function(a,b){var d=qx.bom.element.Style.get(a,l,b,false);
var i,top,g,f;
var c,e;

if(typeof d===n&&d!==w&&d!==q){d=qx.lang.String.trim(d);
if(/\((.*)\)/.test(d)){var h=RegExp.$1.split(u);
top=qx.lang.String.trim(h[0]);
c=qx.lang.String.trim(h[1]);
e=qx.lang.String.trim(h[2]);
i=qx.lang.String.trim(h[3]);
if(i===w){i=null;
}
if(top===w){top=null;
}
if(c===w){c=null;
}
if(e===w){e=null;
}if(top!=null){top=parseInt(top,10);
}
if(c!=null){c=parseInt(c,10);
}
if(e!=null){e=parseInt(e,10);
}
if(i!=null){i=parseInt(i,10);
}if(c!=null&&i!=null){g=c-i;
}else if(c!=null){g=c;
}
if(e!=null&&top!=null){f=e-top;
}else if(e!=null){f=e;
}}else{throw new Error("Could not parse clip string: "+d);
}}return {left:i||null,top:top||null,width:g||null,height:f||null};
},set:function(D,E){if(!E){D.style.clip=j;
return;
}var J=E.left;
var top=E.top;
var I=E.width;
var H=E.height;
var F,G;

if(J==null){F=(I==null?w:I+v);
J=w;
}else{F=(I==null?w:J+I+v);
J=J+v;
}
if(top==null){G=(H==null?w:H+v);
top=w;
}else{G=(H==null?w:top+H+v);
top=top+v;
}D.style.clip=s+top+u+F+u+G+u+J+p;
},reset:function(K){K.style.clip=qx.bom.client.Engine.MSHTML?k:w;
}}});
})();
(function(){var n="n-resize",m="e-resize",l="nw-resize",k="ne-resize",j="",i="cursor:",h="qx.client",g=";",f="qx.bom.element.Cursor",e="cursor",d="hand";
qx.Class.define(f,{statics:{__dX:qx.core.Variant.select(h,{"mshtml":{"cursor":d,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"opera":{"col-resize":m,"row-resize":n,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"default":{}}),compile:function(a){return i+(this.__dX[a]||a)+g;
},get:function(o,p){return qx.bom.element.Style.get(o,e,p,false);
},set:function(b,c){b.style.cursor=this.__dX[c]||c;
},reset:function(q){q.style.cursor=j;
}}});
})();
(function(){var u="",t="qx.client",s=";",r="filter",q="opacity:",p="opacity",o="MozOpacity",n=");",m=")",l="zoom:1;filter:alpha(opacity=",i="qx.bom.element.Opacity",k="alpha(opacity=",j="-moz-opacity:";
qx.Class.define(i,{statics:{compile:qx.core.Variant.select(t,{"mshtml":function(c){if(c>=1){return u;
}
if(c<0.00001){c=0;
}return l+(c*100)+n;
},"gecko":function(v){if(v==1){v=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return j+v+s;
}else{return q+v+s;
}},"default":function(K){if(K==1){return u;
}return q+K+s;
}}),set:qx.core.Variant.select(t,{"mshtml":function(H,I){var J=qx.bom.element.Style.get(H,r,qx.bom.element.Style.COMPUTED_MODE,false);
if(I>=1){H.style.filter=J.replace(/alpha\([^\)]*\)/gi,u);
return;
}
if(I<0.00001){I=0;
}if(!H.currentStyle||!H.currentStyle.hasLayout){H.style.zoom=1;
}H.style.filter=J.replace(/alpha\([^\)]*\)/gi,u)+k+I*100+m;
},"gecko":function(A,B){if(B==1){B=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){A.style.MozOpacity=B;
}else{A.style.opacity=B;
}},"default":function(C,D){if(D==1){D=u;
}C.style.opacity=D;
}}),reset:qx.core.Variant.select(t,{"mshtml":function(a){var b=qx.bom.element.Style.get(a,r,qx.bom.element.Style.COMPUTED_MODE,false);
a.style.filter=b.replace(/alpha\([^\)]*\)/gi,u);
},"gecko":function(h){if(qx.bom.client.Engine.VERSION<1.7){h.style.MozOpacity=u;
}else{h.style.opacity=u;
}},"default":function(w){w.style.opacity=u;
}}),get:qx.core.Variant.select(t,{"mshtml":function(d,e){var f=qx.bom.element.Style.get(d,r,e,false);

if(f){var g=f.match(/alpha\(opacity=(.*)\)/);

if(g&&g[1]){return parseFloat(g[1])/100;
}}return 1.0;
},"gecko":function(x,y){var z=qx.bom.element.Style.get(x,qx.bom.client.Engine.VERSION<1.7?o:p,y,false);

if(z==0.999999){z=1.0;
}
if(z!=null){return parseFloat(z);
}return 1.0;
},"default":function(E,F){var G=qx.bom.element.Style.get(E,p,F,false);

if(G!=null){return parseFloat(G);
}return 1.0;
}})}});
})();
(function(){var y="qx.client",x="",w="boxSizing",v="box-sizing",u=":",t="border-box",s="qx.bom.element.BoxSizing",r="KhtmlBoxSizing",q="-moz-box-sizing",p="WebkitBoxSizing",m=";",o="-khtml-box-sizing",n="content-box",k="-webkit-box-sizing",j="MozBoxSizing";
qx.Class.define(s,{statics:{__ca:qx.core.Variant.select(y,{"mshtml":null,"webkit":[w,r,p],"gecko":[j],"opera":[w]}),__cb:qx.core.Variant.select(y,{"mshtml":null,"webkit":[v,o,k],"gecko":[q],"opera":[v]}),__cc:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cd:function(f){var g=this.__cc;
return g.tags[f.tagName.toLowerCase()]||g.types[f.type];
},compile:qx.core.Variant.select(y,{"mshtml":function(h){{};
},"default":function(B){var D=this.__cb;
var C=x;

if(D){for(var i=0,l=D.length;i<l;i++){C+=D[i]+u+B+m;
}}return C;
}}),get:qx.core.Variant.select(y,{"mshtml":function(A){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(A))){if(!this.__cd(A)){return n;
}}return t;
},"default":function(E){var G=this.__ca;
var F;

if(G){for(var i=0,l=G.length;i<l;i++){F=qx.bom.element.Style.get(E,G[i],null,false);

if(F!=null&&F!==x){return F;
}}}return x;
}}),set:qx.core.Variant.select(y,{"mshtml":function(a,b){{};
},"default":function(c,d){var e=this.__ca;

if(e){for(var i=0,l=e.length;i<l;i++){c.style[e[i]]=d;
}}}}),reset:function(z){this.set(z,x);
}}});
})();
(function(){var bE="",bD="qx.client",bC="hidden",bB="-moz-scrollbars-none",bA="overflow",bz=";",by="overflowY",bx=":",bw="overflowX",bv="overflow:",bQ="none",bP="scroll",bO="borderLeftStyle",bN="borderRightStyle",bM="div",bL="borderRightWidth",bK="overflow-y",bJ="borderLeftWidth",bI="-moz-scrollbars-vertical",bH="100px",bF="qx.bom.element.Overflow",bG="overflow-x";
qx.Class.define(bF,{statics:{__ji:null,getScrollbarWidth:function(){if(this.__ji!==null){return this.__ji;
}var K=qx.bom.element.Style;
var M=function(I,J){return parseInt(K.get(I,J))||0;
};
var N=function(bm){return (K.get(bm,bN)==bQ?0:M(bm,bL));
};
var L=function(br){return (K.get(br,bO)==bQ?0:M(br,bJ));
};
var P=qx.core.Variant.select(bD,{"mshtml":function(ba){if(K.get(ba,by)==bC||ba.clientWidth==0){return N(ba);
}return Math.max(0,ba.offsetWidth-ba.clientLeft-ba.clientWidth);
},"default":function(y){if(y.clientWidth==0){var z=K.get(y,bA);
var A=(z==bP||z==bI?16:0);
return Math.max(0,N(y)+A);
}return Math.max(0,(y.offsetWidth-y.clientWidth-L(y)));
}});
var O=function(Q){return P(Q)-N(Q);
};
var t=document.createElement(bM);
var s=t.style;
s.height=s.width=bH;
s.overflow=bP;
document.body.appendChild(t);
var c=O(t);
this.__ji=c?c:16;
document.body.removeChild(t);
return this.__ji;
},_compile:qx.core.Variant.select(bD,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(q,r){if(r==bC){r=bB;
}return bv+r+bz;
}:
function(bT,bU){return bT+bx+bU+bz;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(h,i){return bv+i+bz;
}:
function(m,n){return m+bx+n+bz;
},"default":function(d,e){return d+bx+e+bz;
}}),compileX:function(f){return this._compile(bG,f);
},compileY:function(g){return this._compile(bK,g);
},getX:qx.core.Variant.select(bD,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(R,S){var T=qx.bom.element.Style.get(R,bA,S,false);

if(T===bB){T=bC;
}return T;
}:
function(ce,cf){return qx.bom.element.Style.get(ce,bw,cf,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bd,be){return qx.bom.element.Style.get(bd,bA,be,false);
}:
function(E,F){return qx.bom.element.Style.get(E,bw,F,false);
},"default":function(bh,bi){return qx.bom.element.Style.get(bh,bw,bi,false);
}}),setX:qx.core.Variant.select(bD,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb,bc){if(bc==bC){bc=bB;
}bb.style.overflow=bc;
}:
function(bs,bt){bs.style.overflowX=bt;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bp,bq){bp.style.overflow=bq;
}:
function(k,l){k.style.overflowX=l;
},"default":function(bn,bo){bn.style.overflowX=bo;
}}),resetX:qx.core.Variant.select(bD,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bu){bu.style.overflow=bE;
}:
function(bj){bj.style.overflowX=bE;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(G,H){G.style.overflow=bE;
}:
function(C,D){C.style.overflowX=bE;
},"default":function(j){j.style.overflowX=bE;
}}),getY:qx.core.Variant.select(bD,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bV,bW){var bX=qx.bom.element.Style.get(bV,bA,bW,false);

if(bX===bB){bX=bC;
}return bX;
}:
function(V,W){return qx.bom.element.Style.get(V,by,W,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bf,bg){return qx.bom.element.Style.get(bf,bA,bg,false);
}:
function(bY,ca){return qx.bom.element.Style.get(bY,by,ca,false);
},"default":function(w,x){return qx.bom.element.Style.get(w,by,x,false);
}}),setY:qx.core.Variant.select(bD,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(X,Y){if(Y===bC){Y=bB;
}X.style.overflow=Y;
}:
function(bk,bl){bk.style.overflowY=bl;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bR,bS){bR.style.overflow=bS;
}:
function(a,b){a.style.overflowY=b;
},"default":function(u,v){u.style.overflowY=v;
}}),resetY:qx.core.Variant.select(bD,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(U){U.style.overflow=bE;
}:
function(cd){cd.style.overflowY=bE;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(o,p){o.style.overflow=bE;
}:
function(cb,cc){cb.style.overflowY=bE;
},"default":function(B){B.style.overflowY=bE;
}})}});
})();
(function(){var x="",w="qx.client",v="user-select",u="userSelect",t="appearance",s="style",r="MozUserModify",q="px",p="-webkit-appearance",o="styleFloat",T="-webkit-user-select",S="-moz-appearance",R="pixelHeight",Q="MozAppearance",P=":",O="pixelTop",N="pixelLeft",M="text-overflow",L="-moz-user-select",K="MozUserSelect",E="qx.bom.element.Style",F="-moz-user-modify",C="-webkit-user-modify",D="WebkitUserSelect",A="-o-text-overflow",B="pixelRight",y="cssFloat",z="pixelWidth",G="pixelBottom",H=";",J="WebkitUserModify",I="WebkitAppearance";
qx.Class.define(E,{statics:{__bP:{styleNames:{"float":qx.core.Variant.select(w,{"mshtml":o,"default":y}),"appearance":qx.core.Variant.select(w,{"gecko":Q,"webkit":I,"default":t}),"userSelect":qx.core.Variant.select(w,{"gecko":K,"webkit":D,"default":u}),"userModify":qx.core.Variant.select(w,{"gecko":r,"webkit":J,"default":u})},cssNames:{"appearance":qx.core.Variant.select(w,{"gecko":S,"webkit":p,"default":t}),"userSelect":qx.core.Variant.select(w,{"gecko":L,"webkit":T,"default":v}),"userModify":qx.core.Variant.select(w,{"gecko":F,"webkit":C,"default":v}),"textOverflow":qx.core.Variant.select(w,{"opera":A,"default":M})},mshtmlPixel:{width:z,height:R,left:N,right:B,top:O,bottom:G},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__bQ:{},compile:function(br){var bv=[];
var bz=this.__bP;
var by=bz.special;
var bw=bz.cssNames;
var bu=this.__bQ;
var bx=qx.lang.String;
var name,bt,bs;

for(name in br){bs=br[name];

if(bs==null){continue;
}name=bw[name]||name;
if(by[name]){bv.push(by[name].compile(bs));
}else{bt=bu[name];

if(!bt){bt=bu[name]=bx.hyphenate(name);
}bv.push(bt,P,bs,H);
}}return bv.join(x);
},setCss:qx.core.Variant.select(w,{"mshtml":function(c,d){c.style.cssText=d;
},"default":function(a,b){a.setAttribute(s,b);
}}),getCss:qx.core.Variant.select(w,{"mshtml":function(k){return k.style.cssText.toLowerCase();
},"default":function(bm){return bm.getAttribute(s);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bn,name,bo,bp){{};
var bq=this.__bP;
name=bq.styleNames[name]||name;
if(bp!==false&&bq.special[name]){return bq.special[name].set(bn,bo);
}else{bn.style[name]=bo!==null?bo:x;
}},setStyles:function(bd,be,bf){{};
var bl=this.__bP;
var bi=bl.styleNames;
var bk=bl.special;
var bg=bd.style;

for(var bj in be){var bh=be[bj];
var name=bi[bj]||bj;

if(bh===undefined){if(bf!==false&&bk[name]){bk[name].reset(bd);
}else{bg[name]=x;
}}else{if(bf!==false&&bk[name]){bk[name].set(bd,bh);
}else{bg[name]=bh!==null?bh:x;
}}}},reset:function(l,name,m){var n=this.__bP;
name=n.styleNames[name]||name;
if(m!==false&&n.special[name]){return n.special[name].reset(l);
}else{l.style[name]=x;
}},get:qx.core.Variant.select(w,{"mshtml":function(U,name,V,W){var bc=this.__bP;
name=bc.styleNames[name]||name;
if(W!==false&&bc.special[name]){return bc.special[name].get(U,V);
}if(!U.currentStyle){return U.style[name]||x;
}switch(V){case this.LOCAL_MODE:return U.style[name]||x;
case this.CASCADED_MODE:return U.currentStyle[name]||x;
default:var bb=U.currentStyle[name]||x;
if(/^-?[\.\d]+(px)?$/i.test(bb)){return bb;
}var ba=bc.mshtmlPixel[name];

if(ba){var X=U.style[name];
U.style[name]=bb||0;
var Y=U.style[ba]+q;
U.style[name]=X;
return Y;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bb)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bb;
}},"default":function(e,name,f,g){var j=this.__bP;
name=j.styleNames[name]||name;
if(g!==false&&j.special[name]){return j.special[name].get(e,f);
}switch(f){case this.LOCAL_MODE:return e.style[name]||x;
case this.CASCADED_MODE:if(e.currentStyle){return e.currentStyle[name]||x;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var h=qx.dom.Node.getDocument(e);
var i=h.defaultView.getComputedStyle(e,null);
return i?i[name]:x;
}}})}});
})();
(function(){var p="",o="underline",n="Boolean",m="px",k='"',j="italic",h="normal",g="bold",f="_applyItalic",e="_applyBold",B="Integer",A="_applyFamily",z="_applyLineHeight",y="Array",x="overline",w="line-through",v="qx.bom.Font",u="Number",t="_applyDecoration",s=" ",q="_applySize",r=",";
qx.Class.define(v,{extend:qx.core.Object,construct:function(F,G){arguments.callee.base.call(this);

if(F!==undefined){this.setSize(F);
}
if(G!==undefined){this.setFamily(G);
}},statics:{fromString:function(P){var T=new qx.bom.Font();
var R=P.split(/\s+/);
var name=[];
var S;

for(var i=0;i<R.length;i++){switch(S=R[i]){case g:T.setBold(true);
break;
case j:T.setItalic(true);
break;
case o:T.setDecoration(o);
break;
default:var Q=parseInt(S,10);

if(Q==S||qx.lang.String.contains(S,m)){T.setSize(Q);
}else{name.push(S);
}break;
}}
if(name.length>0){T.setFamily(name);
}return T;
},fromConfig:function(N){var O=new qx.bom.Font;
O.set(N);
return O;
},__bR:{fontFamily:p,fontSize:p,fontWeight:p,fontStyle:p,textDecoration:p,lineHeight:1.2},getDefaultStyles:function(){return this.__bR;
}},properties:{size:{check:B,nullable:true,apply:q},lineHeight:{check:u,nullable:true,apply:z},family:{check:y,nullable:true,apply:A},bold:{check:n,nullable:true,apply:e},italic:{check:n,nullable:true,apply:f},decoration:{check:[o,w,x],nullable:true,apply:t}},members:{__bS:null,__bT:null,__bU:null,__bV:null,__bW:null,__bX:null,_applySize:function(c,d){this.__bS=c===null?null:c+m;
},_applyLineHeight:function(a,b){this.__bX=a===null?null:a;
},_applyFamily:function(C,D){var E=p;

for(var i=0,l=C.length;i<l;i++){if(C[i].indexOf(s)>0){E+=k+C[i]+k;
}else{E+=C[i];
}
if(i!==l-1){E+=r;
}}this.__bT=E;
},_applyBold:function(H,I){this.__bU=H===null?null:H?g:h;
},_applyItalic:function(L,M){this.__bV=L===null?null:L?j:h;
},_applyDecoration:function(J,K){this.__bW=J===null?null:J;
},getStyles:function(){return {fontFamily:this.__bT,fontSize:this.__bS,fontWeight:this.__bU,fontStyle:this.__bV,textDecoration:this.__bW,lineHeight:this.__bX};
}}});
})();
(function(){var r="indexOf",q="addAfter",p="add",o="addBefore",n="_",m="addAt",l="hasChildren",k="removeAt",j="removeAll",i="getChildren",g="remove",h="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(h,{members:{__bY:function(b,c,d,e){var f=this.getChildrenContainer();

if(f===this){b=n+b;
}return (f[b])(c,d,e);
},getChildren:function(){return this.__bY(i);
},hasChildren:function(){return this.__bY(l);
},add:function(s,t){return this.__bY(p,s,t);
},remove:function(a){return this.__bY(g,a);
},removeAll:function(){return this.__bY(j);
},indexOf:function(y){return this.__bY(r,y);
},addAt:function(u,v,w){this.__bY(m,u,v,w);
},addBefore:function(z,A,B){this.__bY(o,z,A,B);
},addAfter:function(C,D,E){this.__bY(q,C,D,E);
},removeAt:function(x){this.__bY(k,x);
}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__ce=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__ce:null,message:null,getComment:function(){return this.__ce;
},toString:function(){return this.__ce+c+this.message;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var f="abstract",e="qx.event.dispatch.AbstractBubbling";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:f,construct:function(b){this._manager=b;
},members:{_getParent:function(a){throw new Error("Missing implementation");
},canDispatchEvent:function(c,event,d){return event.getBubbles();
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
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(c){return c.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var d="qx.event.type.Event";
qx.Class.define(d,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(k,l){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!k;
this._cancelable=!!l;
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
},setType:function(i){this._type=i;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(m){this._eventPhase=m;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(c){this._target=c;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(j){this._currentTarget=j;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(f){this._relatedTarget=f;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(e){this._originalTarget=e;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(h){this._bubbles=h;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(g){this._cancelable=g;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var d="qx.event.type.Native";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(f,g,h,i,j){arguments.callee.base.call(this,i,j);
this._target=g||qx.bom.Event.getTarget(f);
this._relatedTarget=h||qx.bom.Event.getRelatedTarget(f);

if(f.timeStamp){this._timeStamp=f.timeStamp;
}this._native=f;
this._returnValue=null;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
var c={};
b._native=this._cloneNativeEvent(this._native,c);
b._returnValue=this._returnValue;
return b;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(e){this._returnValue=e;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var c="qx.event.type.Dom";
qx.Class.define(c,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=arguments.callee.base.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var b=0;
var a=this._native;

if(a.shiftKey){b|=qx.event.type.Dom.SHIFT_MASK;
}
if(a.ctrlKey){b|=qx.event.type.Dom.CTRL_MASK;
}
if(a.altKey){b|=qx.event.type.Dom.ALT_MASK;
}
if(a.metaKey){b|=qx.event.type.Dom.META_MASK;
}return b;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
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
(function(){var c="qx.util.ObjectPool",b="Integer";
qx.Class.define(c,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.__eM={};

if(a!=null){this.setSize(a);
}},properties:{size:{check:b,init:Infinity}},members:{__eM:null,getObject:function(d){if(this.$$disposed){return;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__eM[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(k){if(!this.__eM){return;
}var m=k.classname;
var n=this.__eM[m];

if(k.$$pooled){throw new Error("Object is already pooled: "+k);
}
if(!n){this.__eM[m]=n=[];
}if(n.length>this.getSize()){if(k.destroy){k.destroy();
}else{k.dispose();
}return;
}k.$$pooled=true;
n.push(k);
}},destruct:function(){var j=this.__eM;
var g,h,i,l;

for(g in j){h=j[g];

for(i=0,l=h.length;i<l;i++){h[i].dispose();
}}delete this.__eM;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
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
(function(){var o="qx.ui.core.DecoratorFactory",n="$$nopool$$";
qx.Class.define(o,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__cf={};
},statics:{MAX_SIZE:15,__cg:n},members:{__cf:null,getDecoratorElement:function(e){var j=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(e)){var h=e;
var g=qx.theme.manager.Decoration.getInstance().resolve(e);
}else{var h=j.__cg;
g=e;
}var i=this.__cf;

if(i[h]&&i[h].length>0){var f=i[h].pop();
}else{var f=this._createDecoratorElement(g,h);
}f.$$pooled=false;
return f;
},poolDecorator:function(a){if(!a||a.$$pooled){return;
}var d=qx.ui.core.DecoratorFactory;
var b=a.getId();

if(b==d.__cg){a.dispose();
return;
}var c=this.__cf;

if(!c[b]){c[b]=[];
}
if(c[b].length>d.MAX_SIZE){a.dispose();
}else{a.$$pooled=true;
c[b].push(a);
}},_createDecoratorElement:function(k,l){var m=new qx.html.Decorator(k,l);
{};
return m;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__cf;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__cf=null;
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__ch=c;
this.__ci=d||b;
this.__cj=e===undefined?-1:e;
},members:{__ch:null,__ci:null,__cj:null,toString:function(){return this.__ch;
},getUri:function(){return this.__ci;
},getLineNumber:function(){return this.__cj;
}}});
})();
(function(){var s="number",r="0",q="px",p=";",o="background-image:url(",n=");",m="",l=")",k="background-repeat:",j=" ",g="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(g,{statics:{__ck:[o,null,n,h,null,p,k,null,p],__cl:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cm:function(t,top){var u=qx.bom.client.Engine;

if(u.GECKO&&u.VERSION<1.9&&t==top&&typeof t==s){top+=0.01;
}
if(t){var v=(typeof t==s)?t+q:t;
}else{v=r;
}
if(top){var w=(typeof top==s)?top+q:top;
}else{w=r;
}return v+j+w;
},compile:function(a,b,c,top){var d=this.__cm(c,top);
var e=qx.util.ResourceManager.getInstance().toUri(a);
var f=this.__ck;
f[1]=e;
f[4]=d;
f[7]=b;
return f.join(m);
},getStyles:function(x,y,z,top){if(!x){return this.__cl;
}var A=this.__cm(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C={backgroundPosition:A,backgroundImage:i+B+l};

if(y!=null){C.backgroundRepeat=y;
}return C;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var f="qx.globalErrorHandling",e="on",d="qx.event.GlobalError";
qx.Class.define(d,{statics:{setErrorHandler:function(g,h){this.__iY=g||null;
this.__ja=h||window;

if(qx.core.Setting.get(f)===e){if(g&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__jb,this);
}
if(!g&&window.onerror){window.onerror=null;
}}},__jb:function(j,k,l){if(this.__iY){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(i){if(qx.core.Setting.get(f)===e){var self=this;
return function(){if(!self.__iY){return i.apply(this,arguments);
}
try{return i.apply(this,arguments);
}catch(b){self.handleError(new qx.core.GlobalError(b,arguments));
}};
}else{return i;
}},handleError:function(c){if(this.__iY){this.__iY.call(this.__ja,c);
}}},defer:function(a){qx.core.Setting.define(f,e);
a.setErrorHandler(null,null);
}});
})();
(function(){var d="qx.util.DeferredCallManager",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){this.__fa={};
this.__fb=qx.lang.Function.bind(this.__ff,this);
this.__fc=false;
},members:{__fd:null,__fe:null,__fa:null,__fc:null,__fb:null,schedule:function(g){if(this.__fd==null){this.__fd=window.setTimeout(this.__fb,0);
}var h=g.toHashCode();
if(this.__fe&&this.__fe[h]){return;
}this.__fa[h]=g;
this.__fc=true;
},cancel:function(a){var b=a.toHashCode();
if(this.__fe&&this.__fe[b]){this.__fe[b]=null;
return;
}delete this.__fa[b];
if(qx.lang.Object.isEmpty(this.__fa)&&this.__fd!=null){window.clearTimeout(this.__fd);
this.__fd=null;
}},__ff:qx.event.GlobalError.observeMethod(function(){this.__fd=null;
while(this.__fc){this.__fe=qx.lang.Object.clone(this.__fa);
this.__fa={};
this.__fc=false;

for(var f in this.__fe){var e=this.__fe[f];

if(e){this.__fe[f]=null;
e.call();
}}}this.__fe=null;
})},destruct:function(){if(this.__fd!=null){window.clearTimeout(this.__fd);
}this.__fb=this.__fa=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){arguments.callee.base.call(this);
this.__gA=b;
this.__gB=c||null;
this.__gC=qx.util.DeferredCallManager.getInstance();
},members:{__gA:null,__gB:null,__gC:null,cancel:function(){this.__gC.cancel(this);
},schedule:function(){this.__gC.schedule(this);
},call:function(){this.__gB?this.__gA.apply(this.__gB):this.__gA();
}},destruct:function(d,e){this.cancel();
this.__gB=this.__gA=this.__gC=null;
}});
})();
(function(){var V="element",U="qx.client",T="div",S="",R="mshtml",Q="none",P="scroll",O="text",N="qx.html.Element",M="__cJ",bq="|capture|",bp="focus",bo="gecko",bn="blur",bm="deactivate",bl="capture",bk="userSelect",bj="-moz-none",bi="visible",bh="releaseCapture",bd="|bubble|",be="qxSelectable",bb="tabIndex",bc="off",Y="activate",ba="MozUserSelect",W="normal",X="webkit",bf="hidden",bg="on";
qx.Class.define(N,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.__cn=a||T;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__co:{},_scheduleFlush:function(r){qx.html.Element.__cV.schedule();
},flush:function(){var cN;
{};
var cF=this.__cp();
var cE=cF.getFocus();

if(cE&&this.__ct(cE)){cF.blur(cE);
}var cU=cF.getActive();

if(cU&&this.__ct(cU)){qx.bom.Element.deactivate(cU);
}var cI=this.__cr();

if(cI&&this.__ct(cI)){qx.bom.Element.releaseCapture(cI);
}var cO=[];
var cP=this._modified;

for(var cM in cP){cN=cP[cM];
if(cN.__cN()){if(cN.__cu&&qx.dom.Hierarchy.isRendered(cN.__cu)){cO.push(cN);
}else{{};
cN.__cM();
}delete cP[cM];
}}
for(var i=0,l=cO.length;i<l;i++){cN=cO[i];
{};
cN.__cM();
}var cK=this._visibility;

for(var cM in cK){cN=cK[cM];
{};
cN.__cu.style.display=cN.__cx?S:Q;
if(qx.core.Variant.isSet(U,R)){if(!(document.documentMode>=8)){cN.__cu.style.visibility=cN.__cx?bi:bf;
}}delete cK[cM];
}var scroll=this._scroll;

for(var cM in scroll){cN=scroll[cM];
var cV=cN.__cu;

if(cV&&cV.offsetWidth){var cH=true;
if(cN.__cA!=null){cN.__cu.scrollLeft=cN.__cA;
delete cN.__cA;
}if(cN.__cB!=null){cN.__cu.scrollTop=cN.__cB;
delete cN.__cB;
}var cR=cN.__cy;

if(cR!=null){var cL=cR.element.getDomElement();

if(cL&&cL.offsetWidth){qx.bom.element.Scroll.intoViewX(cL,cV,cR.align);
delete cN.__cy;
}else{cH=false;
}}var cS=cN.__cz;

if(cS!=null){var cL=cS.element.getDomElement();

if(cL&&cL.offsetWidth){qx.bom.element.Scroll.intoViewY(cL,cV,cS.align);
delete cN.__cz;
}else{cH=false;
}}if(cH){delete scroll[cM];
}}}var cG={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var cT=this._actions[i];
var cQ=cT.element.__cu;

if(!cQ||!cG[cT.type]&&!cT.element.__cN()){continue;
}var cJ=cT.args;
cJ.unshift(cQ);
qx.bom.Element[cT.type].apply(qx.bom.Element,cJ);
}this._actions=[];
for(var cM in this.__co){var cD=this.__co[cM];
var cV=cD.element.__cu;

if(cV){qx.bom.Selection.set(cV,cD.start,cD.end);
delete this.__co[cM];
}}qx.event.handler.Appear.refresh();
},__cp:function(){if(!this.__cq){var u=qx.event.Registration.getManager(window);
this.__cq=u.getHandler(qx.event.handler.Focus);
}return this.__cq;
},__cr:function(){if(!this.__cs){var bE=qx.event.Registration.getManager(window);
this.__cs=bE.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cs.getCaptureElement();
},__ct:function(cs){var ct=qx.core.ObjectRegistry.fromHashCode(cs.$$element);
return ct&&!ct.__cN();
}},members:{__cn:null,__cu:null,__cv:false,__cw:true,__cx:true,__cy:null,__cz:null,__cA:null,__cB:null,__cC:null,__cD:null,__cE:null,__cF:null,__cG:null,__cH:null,__cI:null,__cJ:null,__cK:null,__cL:null,_scheduleChildrenUpdate:function(){if(this.__cK){return;
}this.__cK=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
},_createDomElement:function(){return qx.bom.Element.create(this.__cn);
},__cM:function(){{};
var bX=this.__cJ;

if(bX){var length=bX.length;
var bY;

for(var i=0;i<length;i++){bY=bX[i];

if(bY.__cx&&bY.__cw&&!bY.__cu){bY.__cM();
}}}
if(!this.__cu){this.__cu=this._createDomElement();
this.__cu.$$element=this.$$hash;
this._copyData(false);

if(bX&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cK){this._syncChildren();
}}delete this.__cK;
},_insertChildren:function(){var cl=this.__cJ;
var length=cl.length;
var cn;

if(length>2){var cm=document.createDocumentFragment();

for(var i=0;i<length;i++){cn=cl[i];

if(cn.__cu&&cn.__cw){cm.appendChild(cn.__cu);
}}this.__cu.appendChild(cm);
}else{var cm=this.__cu;

for(var i=0;i<length;i++){cn=cl[i];

if(cn.__cu&&cn.__cw){cm.appendChild(cn.__cu);
}}}},_syncChildren:function(){var dc;
var dh=qx.core.ObjectRegistry;
var cW=this.__cJ;
var df=cW.length;
var cX;
var dd;
var da=this.__cu;
var de=da.childNodes;
var cY=0;
var dg;
{};
for(var i=de.length-1;i>=0;i--){dg=de[i];
dd=dh.fromHashCode(dg.$$element);

if(!dd||!dd.__cw||dd.__cL!==this){da.removeChild(dg);
{};
}}for(var i=0;i<df;i++){cX=cW[i];
if(cX.__cw){dd=cX.__cu;
dg=de[cY];

if(!dd){continue;
}if(dd!=dg){if(dg){da.insertBefore(dd,dg);
}else{da.appendChild(dd);
}{};
}cY++;
}}{};
},_copyData:function(bF){var bJ=this.__cu;
var bI=this.__cG;

if(bI){var bG=qx.bom.element.Attribute;

for(var bK in bI){bG.set(bJ,bK,bI[bK]);
}}var bI=this.__cF;

if(bI){var bH=qx.bom.element.Style;

if(bF){bH.setStyles(bJ,bI);
}else{bH.setCss(bJ,bH.compile(bI));
}}var bI=this.__cH;

if(bI){for(var bK in bI){this._applyProperty(bK,bI[bK]);
}}var bI=this.__cI;

if(bI){qx.event.Registration.getManager(bJ).importListeners(bJ,bI);
delete this.__cI;
}},_syncData:function(){var by=this.__cu;
var bx=qx.bom.element.Attribute;
var bv=qx.bom.element.Style;
var bw=this.__cD;

if(bw){var bB=this.__cG;

if(bB){var bz;

for(var bA in bw){bz=bB[bA];

if(bz!==undefined){bx.set(by,bA,bz);
}else{bx.reset(by,bA);
}}}this.__cD=null;
}var bw=this.__cC;

if(bw){var bB=this.__cF;

if(bB){var bu={};

for(var bA in bw){bu[bA]=bB[bA];
}bv.setStyles(by,bu);
}this.__cC=null;
}var bw=this.__cE;

if(bw){var bB=this.__cH;

if(bB){var bz;

for(var bA in bw){this._applyProperty(bA,bB[bA]);
}}this.__cE=null;
}},__cN:function(){var dB=this;
while(dB){if(dB.__cv){return true;
}
if(!dB.__cw||!dB.__cx){return false;
}dB=dB.__cL;
}return false;
},__cO:function(dO){if(dO.__cL===this){throw new Error("Child is already in: "+dO);
}
if(dO.__cv){throw new Error("Root elements could not be inserted into other ones.");
}if(dO.__cL){dO.__cL.remove(dO);
}dO.__cL=this;
if(!this.__cJ){this.__cJ=[];
}if(this.__cu){this._scheduleChildrenUpdate();
}},__cP:function(p){if(p.__cL!==this){throw new Error("Has no child: "+p);
}if(this.__cu){this._scheduleChildrenUpdate();
}delete p.__cL;
},__cQ:function(dG){if(dG.__cL!==this){throw new Error("Has no child: "+dG);
}if(this.__cu){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cJ||null;
},getChild:function(dP){var dQ=this.__cJ;
return dQ&&dQ[dP]||null;
},hasChildren:function(){var dR=this.__cJ;
return dR&&dR[0]!==undefined;
},indexOf:function(cA){var cB=this.__cJ;
return cB?cB.indexOf(cA):-1;
},hasChild:function(dr){var ds=this.__cJ;
return ds&&ds.indexOf(dr)!==-1;
},add:function(bS){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cO(arguments[i]);
}this.__cJ.push.apply(this.__cJ,arguments);
}else{this.__cO(bS);
this.__cJ.push(bS);
}return this;
},addAt:function(J,K){this.__cO(J);
qx.lang.Array.insertAt(this.__cJ,J,K);
return this;
},remove:function(br){var bs=this.__cJ;

if(!bs){return;
}
if(arguments[1]){var bt;

for(var i=0,l=arguments.length;i<l;i++){bt=arguments[i];
this.__cP(bt);
qx.lang.Array.remove(bs,bt);
}}else{this.__cP(br);
qx.lang.Array.remove(bs,br);
}return this;
},removeAt:function(C){var D=this.__cJ;

if(!D){throw new Error("Has no children!");
}var E=D[C];

if(!E){throw new Error("Has no child at this position!");
}this.__cP(E);
qx.lang.Array.removeAt(this.__cJ,C);
return this;
},removeAll:function(){var bW=this.__cJ;

if(bW){for(var i=0,l=bW.length;i<l;i++){this.__cP(bW[i]);
}bW.length=0;
}return this;
},getParent:function(){return this.__cL||null;
},insertInto:function(parent,bT){parent.__cO(this);

if(bT==null){parent.__cJ.push(this);
}else{qx.lang.Array.insertAt(this.__cJ,this,bT);
}return this;
},insertBefore:function(dC){var parent=dC.__cL;
parent.__cO(this);
qx.lang.Array.insertBefore(parent.__cJ,this,dC);
return this;
},insertAfter:function(q){var parent=q.__cL;
parent.__cO(this);
qx.lang.Array.insertAfter(parent.__cJ,this,q);
return this;
},moveTo:function(dH){var parent=this.__cL;
parent.__cQ(this);
var dI=parent.__cJ.indexOf(this);

if(dI===dH){throw new Error("Could not move to same index!");
}else if(dI<dH){dH--;
}qx.lang.Array.removeAt(parent.__cJ,dI);
qx.lang.Array.insertAt(parent.__cJ,this,dH);
return this;
},moveBefore:function(cC){var parent=this.__cL;
return this.moveTo(parent.__cJ.indexOf(cC));
},moveAfter:function(dD){var parent=this.__cL;
return this.moveTo(parent.__cJ.indexOf(dD)+1);
},free:function(){var parent=this.__cL;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__cJ){return;
}parent.__cP(this);
qx.lang.Array.remove(parent.__cJ,this);
return this;
},getDomElement:function(){return this.__cu||null;
},getNodeName:function(){return this.__cn;
},setNodeName:function(name){this.__cn=name;
},setRoot:function(co){this.__cv=co;
},useMarkup:function(ci){if(this.__cu){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(U,R)){var cj=document.createElement(T);
}else{var cj=qx.html.Element.__cR;

if(!cj){cj=qx.html.Element.__cR=document.createElement(T);
}}cj.innerHTML=ci;
this.__cu=cj.firstChild;
this.__cu.$$element=this.$$hash;
this._copyData(true);
return this.__cu;
},useElement:function(dL){if(this.__cu){throw new Error("Could not overwrite existing element!");
}this.__cu=dL;
this.__cu.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var dv=this.getAttribute(bb);

if(dv>=1){return true;
}var du=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(dv>=0&&du[this.__cn]){return true;
}return false;
},setSelectable:function(bC){this.setAttribute(be,bC?bg:bc);
if(qx.core.Variant.isSet(U,X)){this.setStyle(bk,bC?W:Q);
}else if(qx.core.Variant.isSet(U,bo)){this.setStyle(ba,bC?O:bj);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cn];
},include:function(){if(this.__cw){return;
}delete this.__cw;

if(this.__cL){this.__cL._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__cw){return;
}this.__cw=false;

if(this.__cL){this.__cL._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__cw===true;
},show:function(){if(this.__cx){return;
}
if(this.__cu){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
}if(this.__cL){this.__cL._scheduleChildrenUpdate();
}delete this.__cx;
},hide:function(){if(!this.__cx){return;
}
if(this.__cu){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
}this.__cx=false;
},isVisible:function(){return this.__cx===true;
},scrollChildIntoViewX:function(b,c,d){var f=this.__cu;
var g=b.getDomElement();

if(d!==false&&f&&f.offsetWidth&&g&&g.offsetWidth){qx.bom.element.Scroll.intoViewX(g,f,c);
}else{this.__cy={element:b,align:c};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
}delete this.__cA;
},scrollChildIntoViewY:function(ca,cb,cc){var cd=this.__cu;
var ce=ca.getDomElement();

if(cc!==false&&cd&&cd.offsetWidth&&ce&&ce.offsetWidth){qx.bom.element.Scroll.intoViewY(ce,cd,cb);
}else{this.__cz={element:ca,align:cb};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
}delete this.__cB;
},scrollToX:function(x,dx){var dy=this.__cu;

if(dx!==true&&dy&&dy.offsetWidth){dy.scrollLeft=x;
}else{this.__cA=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
}delete this.__cy;
},getScrollX:function(){var dK=this.__cu;

if(dK){return dK.scrollLeft;
}return this.__cA||0;
},scrollToY:function(y,dz){var dA=this.__cu;

if(dz!==true&&dA&&dA.offsetWidth){dA.scrollTop=y;
}else{this.__cB=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
}delete this.__cz;
},getScrollY:function(){var dY=this.__cu;

if(dY){return dY.scrollTop;
}return this.__cB||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(P,this.__cT,this);
},enableScrolling:function(){this.removeListener(P,this.__cT,this);
},__cS:null,__cT:function(e){if(!this.__cS){this.__cS=true;
this.__cu.scrollTop=0;
this.__cu.scrollLeft=0;
delete this.__cS;
}},getTextSelection:function(){var di=this.__cu;

if(di){return qx.bom.Selection.get(di);
}return null;
},getTextSelectionLength:function(){var bD=this.__cu;

if(bD){return qx.bom.Selection.getLength(bD);
}return null;
},getTextSelectionStart:function(){var F=this.__cu;

if(F){return qx.bom.Selection.getStart(F);
}return null;
},getTextSelectionEnd:function(){var dF=this.__cu;

if(dF){return qx.bom.Selection.getEnd(dF);
}return null;
},setTextSelection:function(bP,bQ){var bR=this.__cu;

if(bR){qx.bom.Selection.set(bR,bP,bQ);
return;
}qx.html.Element.__co[this.toHashCode()]={element:this,start:bP,end:bQ};
qx.html.Element._scheduleFlush(V);
},clearTextSelection:function(){var dJ=this.__cu;

if(dJ){qx.bom.Selection.clear(dJ);
}delete qx.html.Element.__co[this.toHashCode()];
},__cU:function(bM,bN){var bO=qx.html.Element._actions;
bO.push({type:bM,element:this,args:bN||[]});
qx.html.Element._scheduleFlush(V);
},focus:function(){this.__cU(bp);
},blur:function(){this.__cU(bn);
},activate:function(){this.__cU(Y);
},deactivate:function(){this.__cU(bm);
},capture:function(dt){this.__cU(bl,[dt!==false]);
},releaseCapture:function(){this.__cU(bh);
},setStyle:function(G,H,I){if(!this.__cF){this.__cF={};
}
if(this.__cF[G]==H){return;
}
if(H==null){delete this.__cF[G];
}else{this.__cF[G]=H;
}if(this.__cu){if(I){qx.bom.element.Style.set(this.__cu,G,H);
return this;
}if(!this.__cC){this.__cC={};
}this.__cC[G]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
}return this;
},setStyles:function(v,w){var z=qx.bom.element.Style;

if(!this.__cF){this.__cF={};
}
if(this.__cu){if(!this.__cC){this.__cC={};
}
for(var B in v){var A=v[B];

if(this.__cF[B]==A){continue;
}
if(A==null){delete this.__cF[B];
}else{this.__cF[B]=A;
}if(w){z.set(this.__cu,B,A);
continue;
}this.__cC[B]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
}else{for(var B in v){var A=v[B];

if(this.__cF[B]==A){continue;
}
if(A==null){delete this.__cF[B];
}else{this.__cF[B]=A;
}}}return this;
},removeStyle:function(dM,dN){this.setStyle(dM,null,dN);
},getStyle:function(dE){return this.__cF?this.__cF[dE]:null;
},getAllStyles:function(){return this.__cF||null;
},setAttribute:function(cp,cq,cr){if(!this.__cG){this.__cG={};
}
if(this.__cG[cp]==cq){return;
}
if(cq==null){delete this.__cG[cp];
}else{this.__cG[cp]=cq;
}if(this.__cu){if(cr){qx.bom.element.Attribute.set(this.__cu,cp,cq);
return this;
}if(!this.__cD){this.__cD={};
}this.__cD[cp]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
}return this;
},setAttributes:function(h,j){for(var k in h){this.setAttribute(k,h[k],j);
}return this;
},removeAttribute:function(s,t){this.setAttribute(s,null,t);
},getAttribute:function(bL){return this.__cG?this.__cG[bL]:null;
},_applyProperty:function(name,dX){},_setProperty:function(m,n,o){if(!this.__cH){this.__cH={};
}
if(this.__cH[m]==n){return;
}
if(n==null){delete this.__cH[m];
}else{this.__cH[m]=n;
}if(this.__cu){if(o){this._applyProperty(m,n);
return this;
}if(!this.__cE){this.__cE={};
}this.__cE[m]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(V);
}return this;
},_removeProperty:function(bU,bV){this._setProperty(bU,null,bV);
},_getProperty:function(cf){var cg=this.__cH;

if(!cg){return null;
}var ch=cg[cf];
return ch==null?null:ch;
},addListener:function(cu,cv,self,cw){var cx;

if(this.$$disposed){return null;
}{};

if(this.__cu){return qx.event.Registration.addListener(this.__cu,cu,cv,self,cw);
}
if(!this.__cI){this.__cI={};
}
if(cw==null){cw=false;
}var cy=qx.event.Manager.getNextUniqueId();
var cz=cu+(cw?bq:bd)+cy;
this.__cI[cz]={type:cu,listener:cv,self:self,capture:cw,unique:cy};
return cz;
},removeListener:function(dj,dk,self,dl){var dm;

if(this.$$disposed){return null;
}{};

if(this.__cu){qx.event.Registration.removeListener(this.__cu,dj,dk,self,dl);
}else{var dp=this.__cI;
var dn;

if(dl==null){dl=false;
}
for(var dq in dp){dn=dp[dq];
if(dn.listener===dk&&dn.self===self&&dn.capture===dl&&dn.type===dj){delete dp[dq];
break;
}}}return this;
},removeListenerById:function(ck){if(this.$$disposed){return null;
}
if(this.__cu){qx.event.Registration.removeListenerById(this.__cu,ck);
}else{delete this.__cI[ck];
}return this;
},hasListener:function(dS,dT){if(this.$$disposed){return false;
}
if(this.__cu){return qx.event.Registration.hasListener(this.__cu,dS,dT);
}var dV=this.__cI;
var dU;

if(dT==null){dT=false;
}
for(var dW in dV){dU=dV[dW];
if(dU.capture===dT&&dU.type===dS){return true;
}}return false;
}},defer:function(dw){dw.__cV=new qx.util.DeferredCall(dw.flush,dw);
},destruct:function(){var L=this.__cu;

if(L){qx.event.Registration.getManager(L).removeAllListeners(L);
L.$$element=S;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cL;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(M);
this.__cG=this.__cF=this.__cI=this.__cH=this.__cD=this.__cC=this.__cE=this.__cu=this.__cL=this.__cy=this.__cz=null;
}});
})();
(function(){var j="string",i="_applyTheme",h="qx.theme.manager.Appearance",g=":",f="Theme",e="changeTheme",d="/",c="singleton";
qx.Class.define(h,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__cW={};
this.__cX={};
},properties:{theme:{check:f,nullable:true,event:e,apply:i}},members:{__cY:{},__cW:null,__cX:null,_applyTheme:function(a,b){this.__cX={};
this.__cW={};
},__da:function(k,l,m){var q=l.appearances;
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
return this.__da(p,l,m);
}}}if(m!=null){return this.__da(m,l);
}return null;
}else if(typeof t===j){return this.__da(t,l,m);
}else if(t.include&&!t.style){return this.__da(t.include,l,m);
}return k;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__cX;
var z=E[v];

if(!z){z=E[v]=this.__da(v,x,y);
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
}}var D=this.__cW;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__cY;
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
}},destruct:function(){this.__cW=this.__cX=null;
}});
})();
(function(){var e="value",d="Please use the getValue() method instead.",c="qx.html.Label",b="Please use the setValue() method instead.";
qx.Class.define(c,{extend:qx.html.Element,members:{__db:null,_applyProperty:function(name,l){arguments.callee.base.call(this,name,l);

if(name==e){var m=this.getDomElement();
qx.bom.Label.setValue(m,l);
}},_createDomElement:function(){var k=this.__db;
var j=qx.bom.Label.create(this._content,k);
return j;
},_copyData:function(i){return arguments.callee.base.call(this,true);
},setRich:function(f){var g=this.getDomElement();

if(g){throw new Error("The label mode cannot be modified after initial creation");
}f=!!f;

if(this.__db==f){return;
}this.__db=f;
return this;
},setValue:function(h){this._setProperty(e,h);
return this;
},getValue:function(){return this._getProperty(e);
},setContent:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.setValue(a);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.getValue();
}}});
})();
(function(){var bf="middle",be="qx.ui.layout.Util",bd="left",bc="center",bb="top",ba="bottom",Y="right";
qx.Class.define(be,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(y,z,A){var C,G,B,H;
var D=z>A;
var I=Math.abs(z-A);
var J,E;
var F={};

for(G in y){C=y[G];
F[G]={potential:D?C.max-C.value:C.value-C.min,flex:D?C.flex:1/C.flex,offset:0};
}while(I!=0){H=Infinity;
B=0;

for(G in F){C=F[G];

if(C.potential>0){B+=C.flex;
H=Math.min(H,C.potential/C.flex);
}}if(B==0){break;
}H=Math.min(I,H*B)/B;
J=0;

for(G in F){C=F[G];

if(C.potential>0){E=Math.min(I,C.potential,Math.ceil(H*C.flex));
J+=E-H*C.flex;

if(J>=1){J-=1;
E-=1;
}C.potential-=E;

if(D){C.offset+=E;
}else{C.offset-=E;
}I-=E;
}}}return F;
},computeHorizontalAlignOffset:function(O,P,Q,R,S){if(R==null){R=0;
}
if(S==null){S=0;
}var T=0;

switch(O){case bd:T=R;
break;
case Y:T=Q-P-S;
break;
case bc:T=Math.round((Q-P)/2);
if(T<R){T=R;
}else if(T<S){T=Math.max(R,Q-P-S);
}break;
}return T;
},computeVerticalAlignOffset:function(bg,bh,bi,bj,bk){if(bj==null){bj=0;
}
if(bk==null){bk=0;
}var bl=0;

switch(bg){case bb:bl=bj;
break;
case ba:bl=bi-bh-bk;
break;
case bf:bl=Math.round((bi-bh)/2);
if(bl<bj){bl=bj;
}else if(bl<bk){bl=Math.max(bj,bi-bh-bk);
}break;
}return bl;
},collapseMargins:function(bm){var bn=0,bp=0;

for(var i=0,l=arguments.length;i<l;i++){var bo=arguments[i];

if(bo<0){bp=Math.min(bp,bo);
}else if(bo>0){bn=Math.max(bn,bo);
}}return bn+bp;
},computeHorizontalGaps:function(K,L,M){if(L==null){L=0;
}var N=0;

if(M){N+=K[0].getMarginLeft();

for(var i=1,l=K.length;i<l;i+=1){N+=this.collapseMargins(L,K[i-1].getMarginRight(),K[i].getMarginLeft());
}N+=K[l-1].getMarginRight();
}else{for(var i=1,l=K.length;i<l;i+=1){N+=K[i].getMarginLeft()+K[i].getMarginRight();
}N+=(L*(l-1));
}return N;
},computeVerticalGaps:function(U,V,W){if(V==null){V=0;
}var X=0;

if(W){X+=U[0].getMarginTop();

for(var i=1,l=U.length;i<l;i+=1){X+=this.collapseMargins(V,U[i-1].getMarginBottom(),U[i].getMarginTop());
}X+=U[l-1].getMarginBottom();
}else{for(var i=1,l=U.length;i<l;i+=1){X+=U[i].getMarginTop()+U[i].getMarginBottom();
}X+=(V*(l-1));
}return X;
},computeHorizontalSeparatorGaps:function(q,r,s){var v=qx.theme.manager.Decoration.getInstance().resolve(s);
var u=v.getInsets();
var t=u.left+u.right;
var w=0;

for(var i=0,l=q.length;i<l;i++){var x=q[i];
w+=x.getMarginLeft()+x.getMarginRight();
}w+=(r+t+r)*(l-1);
return w;
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
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(l,m,n,o,p){arguments.callee.base.call(this,l,m,n,o,p);

if(!n){this._relatedTarget=qx.bom.Event.getRelatedTarget(l);
}return this;
},_cloneNativeEvent:function(j,k){var k=arguments.callee.base.call(this,j,k);
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
},__je:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__je[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(q);
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
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__eE:null,__eF:null,__eG:null,__eH:null,__eI:null,__eJ:null,__eK:null,getBounds:function(){return this.__eJ||this.__eF||null;
},clearSeparators:function(){},renderSeparator:function(T,U){},renderLayout:function(D,top,E,F){var G;
{};
var H=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var H=this._getHeightForWidth(E);
}
if(H!=null&&H!==this.__eE){this.__eE=H;
qx.ui.core.queue.Layout.add(this);
return null;
}var J=this.__eF;

if(!J){J=this.__eF={};
}var I={};

if(D!==J.left||top!==J.top){I.position=true;
J.left=D;
J.top=top;
}
if(E!==J.width||F!==J.height){I.size=true;
J.width=E;
J.height=F;
}if(this.__eG){I.local=true;
delete this.__eG;
}
if(this.__eI){I.margin=true;
delete this.__eI;
}return I;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__eG;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__eG=true;
this.__eH=null;
},getSizeHint:function(V){var W=this.__eH;

if(W){return W;
}
if(V===false){return null;
}W=this.__eH=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__eE&&this.getHeight()==null){W.height=this.__eE;
}if(W.minWidth>W.width){W.width=W.minWidth;
}
if(W.maxWidth<W.width){W.width=W.maxWidth;
}
if(!this.getAllowGrowX()){W.maxWidth=W.width;
}
if(!this.getAllowShrinkX()){W.minWidth=W.width;
}if(W.minHeight>W.height){W.height=W.minHeight;
}
if(W.maxHeight<W.height){W.height=W.maxHeight;
}
if(!this.getAllowGrowY()){W.maxHeight=W.height;
}
if(!this.getAllowShrinkY()){W.minHeight=W.height;
}return W;
},_computeSizeHint:function(){var R=this.getMinWidth()||0;
var O=this.getMinHeight()||0;
var S=this.getWidth()||R;
var Q=this.getHeight()||O;
var N=this.getMaxWidth()||Infinity;
var P=this.getMaxHeight()||Infinity;
return {minWidth:R,width:S,maxWidth:N,minHeight:O,height:Q,maxHeight:P};
},_hasHeightForWidth:function(){var K=this._getLayout();

if(K){return K.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(L){var M=this._getLayout();

if(M&&M.hasHeightForWidth()){return M.getHeightForWidth(L);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__eI=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__eJ;
},setUserBounds:function(y,top,z,A){this.__eJ={left:y,top:top,width:z,height:A};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__eJ;
qx.ui.core.queue.Layout.add(this);
},__eL:{},setLayoutProperties:function(X){if(X==null){return;
}var Y=this.__eK;

if(!Y){Y=this.__eK={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(X);
}for(var ba in X){if(X[ba]==null){delete Y[ba];
}else{Y[ba]=X[ba];
}}},getLayoutProperties:function(){return this.__eK||this.__eL;
},clearLayoutProperties:function(){delete this.__eK;
},updateLayoutProperties:function(bb){var bc=this._getLayout();

if(bc){var bd;
{};
bc.invalidateChildrenCache();
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
},clone:function(){var B=arguments.callee.base.call(this);
var C=this.__eK;

if(C){B.__eK=qx.lang.Object.clone(C);
}return B;
}},destruct:function(){this.$$parent=this.$$subparent=this.__eK=this.__eF=this.__eJ=this.__eH=null;
}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(g,h){var i=qx.locale.Manager;

if(i){return i.tr.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(b,c,d,e){var f=qx.locale.Manager;

if(f){return f.trn.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(l,m,n){var o=qx.locale.Manager;

if(o){return o.trc.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(j){var k=qx.locale.Manager;

if(k){return k.marktr.apply(k,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var es="px",er="Boolean",eq="qx.event.type.Mouse",ep="qx.event.type.Drag",eo="visible",en="qx.event.type.Focus",em="on",ek="Integer",ej="excluded",ei="qx.event.type.Data",dT="_applyPadding",dS="qx.event.type.Event",dR="hidden",dQ="contextmenu",dP="String",dO="tabIndex",dN="backgroundColor",dM="focused",dL="changeVisibility",dK="mshtml",ez="hovered",eA="qx.event.type.KeySequence",ex="qx.client",ey="absolute",ev="drag",ew="div",et="disabled",eu="move",eB="dragstart",eC="qx.dynlocale",eb="dragchange",ea="dragend",ed="resize",ec="Decorator",ef="zIndex",ee="$$widget",eh="opacity",eg="default",dY="Color",dX="changeToolTipText",cA="beforeContextmenuOpen",cB="_applyNativeContextMenu",cC="_applyBackgroundColor",cD="_applyFocusable",cE="changeShadow",cF="qx.event.type.KeyInput",cG="createChildControl",cH="Font",cI="_applyShadow",cJ="_applyEnabled",eG="_applySelectable",eF="Number",eE="_applyKeepActive",eD="_applyVisibility",eK="__dd",eJ="repeat",eI="qxDraggable",eH="syncAppearance",eM="paddingLeft",eL="_applyDroppable",dj="__dl",dk="#",dh="qx.event.type.MouseWheel",di="_applyCursor",dn="_applyDraggable",dp="changeTextColor",dl="changeContextMenu",dm="paddingTop",df="changeSelectable",dg="hideFocus",cR="none",cQ="outline",cT="_applyAppearance",cS="_applyOpacity",cN="url(",cM=")",cP="qx.ui.core.Widget",cO="_applyFont",cL="cursor",cK="qxDroppable",du="__dn",dv="changeZIndex",dw="changeEnabled",dx="__dg",dq="changeFont",dr="_applyDecorator",ds="_applyZIndex",dt="_applyTextColor",dy="qx.ui.menu.Menu",dz="_applyToolTipText",dc="true",db="widget",da="changeDecorator",cY="__dc",cX="_applyTabIndex",cW="__dh",cV="changeAppearance",cU="shorthand",de="/",dd="",dA="_applyContextMenu",dB="paddingBottom",dC="changeNativeContextMenu",dD="qx.ui.tooltip.ToolTip",dE="__di",dF="qxKeepActive",dG="_applyKeepFocus",dH="__dp",dI="paddingRight",dJ="changeBackgroundColor",dW="changeLocale",dV="qxKeepFocus",dU="qx/static/blank.gif";
qx.Class.define(cP,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__dc=this._createContainerElement();
this.__dd=this.__do();
this.__dc.add(this.__dd);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dS,disappear:dS,createChildControl:ei,resize:ei,move:ei,syncAppearance:ei,mousemove:eq,mouseover:eq,mouseout:eq,mousedown:eq,mouseup:eq,click:eq,dblclick:eq,contextmenu:eq,beforeContextmenuOpen:eq,mousewheel:dh,keyup:eA,keydown:eA,keypress:eA,keyinput:cF,focus:en,blur:en,focusin:en,focusout:en,activate:en,deactivate:en,capture:dS,losecapture:dS,drop:ep,dragleave:ep,dragover:ep,drag:ep,dragstart:ep,dragend:ep,dragchange:ep,droprequest:ep},properties:{paddingTop:{check:ek,init:0,apply:dT,themeable:true},paddingRight:{check:ek,init:0,apply:dT,themeable:true},paddingBottom:{check:ek,init:0,apply:dT,themeable:true},paddingLeft:{check:ek,init:0,apply:dT,themeable:true},padding:{group:[dm,dI,dB,eM],mode:cU,themeable:true},zIndex:{nullable:true,init:null,apply:ds,event:dv,check:ek,themeable:true},decorator:{nullable:true,init:null,apply:dr,event:da,check:ec,themeable:true},shadow:{nullable:true,init:null,apply:cI,event:cE,check:ec,themeable:true},backgroundColor:{nullable:true,check:dY,apply:cC,event:dJ,themeable:true},textColor:{nullable:true,check:dY,apply:dt,event:dp,themeable:true,inheritable:true},font:{nullable:true,apply:cO,check:cH,event:dq,themeable:true,inheritable:true,dispose:true},opacity:{check:eF,apply:cS,themeable:true,nullable:true,init:null},cursor:{check:dP,apply:di,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:dD,nullable:true},toolTipText:{check:dP,nullable:true,event:dX,apply:dz},toolTipIcon:{check:dP,nullable:true,event:dX},blockToolTip:{check:er,init:false},visibility:{check:[eo,dR,ej],init:eo,apply:eD,event:dL},enabled:{init:true,check:er,inheritable:true,apply:cJ,event:dw},anonymous:{init:false,check:er},tabIndex:{check:ek,nullable:true,apply:cX},focusable:{check:er,init:false,apply:cD},keepFocus:{check:er,init:false,apply:dG},keepActive:{check:er,init:false,apply:eE},draggable:{check:er,init:false,apply:dn},droppable:{check:er,init:false,apply:eL},selectable:{check:er,init:false,event:df,apply:eG},contextMenu:{check:dy,apply:dA,nullable:true,event:dl},nativeContextMenu:{check:er,init:false,themeable:true,event:dC,apply:cB},appearance:{check:dP,init:db,apply:cT,event:cV}},statics:{DEBUG:false,getWidgetByElement:function(X){while(X){var Y=X.$$widget;
if(Y!=null){return qx.core.ObjectRegistry.fromHashCode(Y);
}X=X.parentNode;
}return null;
},contains:function(parent,gh){while(gh){if(parent==gh){return true;
}gh=gh.getLayoutParent();
}return false;
},__de:new qx.ui.core.DecoratorFactory(),__df:new qx.ui.core.DecoratorFactory()},members:{__dc:null,__dd:null,__dg:null,__dh:null,__di:null,__dj:null,__dk:null,__dl:null,_getLayout:function(){return this.__dl;
},_setLayout:function(W){{};

if(this.__dl){this.__dl.connectToWidget(null);
}
if(W){W.connectToWidget(this);
}this.__dl=W;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var bB=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(bB);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(bB);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dm:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var eX=qx.theme.manager.Decoration.getInstance();
var fa=eX.resolve(a).getInsets();
var eY=eX.resolve(b).getInsets();

if(fa.top!=eY.top||fa.right!=eY.right||fa.bottom!=eY.bottom||fa.left!=eY.left){return true;
}return false;
},renderLayout:function(fH,top,fI,fJ){var fS=arguments.callee.base.call(this,fH,top,fI,fJ);
if(!fS){return;
}var fL=this.getContainerElement();
var content=this.getContentElement();
var fP=fS.size||this._updateInsets;
var fT=es;
var fQ={};
if(fS.position){fQ.left=fH+fT;
fQ.top=top+fT;
}if(fS.size){fQ.width=fI+fT;
fQ.height=fJ+fT;
}
if(fS.position||fS.size){fL.setStyles(fQ);
}
if(fP||fS.local||fS.margin){var fK=this.getInsets();
var innerWidth=fI-fK.left-fK.right;
var innerHeight=fJ-fK.top-fK.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var fN={};

if(this._updateInsets){fN.left=fK.left+fT;
fN.top=fK.top+fT;
}
if(fP){fN.width=innerWidth+fT;
fN.height=innerHeight+fT;
}
if(fP||this._updateInsets){content.setStyles(fN);
}
if(fS.size){var fR=this.__di;

if(fR){fR.setStyles({width:fI+es,height:fJ+es});
}}
if(fS.size||this._updateInsets){if(this.__dg){this.__dg.resize(fI,fJ);
}}
if(fS.size){if(this.__dh){var fK=this.__dh.getInsets();
var fO=fI+fK.left+fK.right;
var fM=fJ+fK.top+fK.bottom;
this.__dh.resize(fO,fM);
}}
if(fP||fS.local||fS.margin){if(this.__dl&&this.hasLayoutChildren()){this.__dl.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(fS.position&&this.hasListener(eu)){this.fireDataEvent(eu,this.getBounds());
}
if(fS.size&&this.hasListener(ed)){this.fireDataEvent(ed,this.getBounds());
}delete this._updateInsets;
return fS;
},__dn:null,clearSeparators:function(){var f=this.__dn;

if(!f){return;
}var g=qx.ui.core.Widget.__de;
var content=this.getContentElement();
var d;

for(var i=0,l=f.length;i<l;i++){d=f[i];
g.poolDecorator(d);
content.remove(d);
}f.length=0;
},renderSeparator:function(bG,bH){var bI=qx.ui.core.Widget.__de.getDecoratorElement(bG);
this.getContentElement().add(bI);
bI.resize(bH.width,bH.height);
bI.setStyles({left:bH.left+es,top:bH.top+es});
if(!this.__dn){this.__dn=[bI];
}else{this.__dn.push(bI);
}},_computeSizeHint:function(){var gU=this.getWidth();
var gT=this.getMinWidth();
var gP=this.getMaxWidth();
var gS=this.getHeight();
var gQ=this.getMinHeight();
var gR=this.getMaxHeight();
{};
var gV=this._getContentHint();
var gO=this.getInsets();
var gX=gO.left+gO.right;
var gW=gO.top+gO.bottom;

if(gU==null){gU=gV.width+gX;
}
if(gS==null){gS=gV.height+gW;
}
if(gT==null){gT=gX;

if(gV.minWidth!=null){gT+=gV.minWidth;
}}
if(gQ==null){gQ=gW;

if(gV.minHeight!=null){gQ+=gV.minHeight;
}}
if(gP==null){if(gV.maxWidth==null){gP=Infinity;
}else{gP=gV.maxWidth+gX;
}}
if(gR==null){if(gV.maxHeight==null){gR=Infinity;
}else{gR=gV.maxHeight+gW;
}}return {width:gU,minWidth:gT,maxWidth:gP,height:gS,minHeight:gQ,maxHeight:gR};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__dl){this.__dl.invalidateLayoutCache();
}},_getContentHint:function(){var j=this.__dl;

if(j){if(this.hasLayoutChildren()){var h;
var k=j.getSizeHint();
{};
return k;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(fh){var fl=this.getInsets();
var fo=fl.left+fl.right;
var fn=fl.top+fl.bottom;
var fm=fh-fo;
var fj=this._getLayout();

if(fj&&fj.hasHeightForWidth()){var fi=fj.getHeightForWidth(fh);
}else{fi=this._getContentHeightForWidth(fm);
}var fk=fi+fn;
return fk;
},_getContentHeightForWidth:function(c){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var fB=this.getPaddingRight();
var fD=this.getPaddingBottom();
var fC=this.getPaddingLeft();

if(this.__dg){var fA=this.__dg.getInsets();
{};
top+=fA.top;
fB+=fA.right;
fD+=fA.bottom;
fC+=fA.left;
}return {"top":top,"right":fB,"bottom":fD,"left":fC};
},getInnerSize:function(){var gj=this.getBounds();

if(!gj){return null;
}var gi=this.getInsets();
return {width:gj.width-gi.left-gi.right,height:gj.height-gi.top-gi.bottom};
},show:function(){this.setVisibility(eo);
},hide:function(){this.setVisibility(dR);
},exclude:function(){this.setVisibility(ej);
},isVisible:function(){return this.getVisibility()===eo;
},isHidden:function(){return this.getVisibility()!==eo;
},isExcluded:function(){return this.getVisibility()===ej;
},isSeeable:function(){var t=this.getContainerElement().getDomElement();

if(t){return t.offsetWidth>0;
}var s=this;

do{if(!s.isVisible()){return false;
}
if(s.isRootWidget()){return true;
}s=s.getLayoutParent();
}while(s);
return false;
},_createContainerElement:function(){var fz=new qx.html.Element(ew);
{};
fz.setStyles({"position":ey,"zIndex":0});
fz.setAttribute(ee,this.toHashCode());
{};
return fz;
},__do:function(){var gk=this._createContentElement();
{};
gk.setStyles({"position":ey,"zIndex":10});
return gk;
},_createContentElement:function(){var S=new qx.html.Element(ew);
S.setStyles({"overflowX":dR,"overflowY":dR});
return S;
},getContainerElement:function(){return this.__dc;
},getContentElement:function(){return this.__dd;
},getDecoratorElement:function(){return this.__dg||null;
},getShadowElement:function(){return this.__dh||null;
},__dp:null,getLayoutChildren:function(){var gD=this.__dp;

if(!gD){return this.__dq;
}var gE;

for(var i=0,l=gD.length;i<l;i++){var gC=gD[i];

if(gC.hasUserBounds()||gC.isExcluded()){if(gE==null){gE=gD.concat();
}qx.lang.Array.remove(gE,gC);
}}return gE||gD;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var gN=this.__dl;

if(gN){gN.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var bL=this.__dp;

if(!bL){return false;
}var bM;

for(var i=0,l=bL.length;i<l;i++){bM=bL[i];

if(!bM.hasUserBounds()&&!bM.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dq:[],_getChildren:function(){return this.__dp||this.__dq;
},_indexOf:function(bP){var bQ=this.__dp;

if(!bQ){return -1;
}return bQ.indexOf(bP);
},_hasChildren:function(){var T=this.__dp;
return T!=null&&(!!T[0]);
},addChildrenToQueue:function(w){var x=this.__dp;

if(!x){return;
}var y;

for(var i=0,l=x.length;i<l;i++){y=x[i];
w[y.$$hash]=y;
y.addChildrenToQueue(w);
}},_add:function(eN,eO){if(eN.getLayoutParent()==this){qx.lang.Array.remove(this.__dp,eN);
}
if(this.__dp){this.__dp.push(eN);
}else{this.__dp=[eN];
}this.__dr(eN,eO);
},_addAt:function(z,A,B){if(!this.__dp){this.__dp=[];
}if(z.getLayoutParent()==this){qx.lang.Array.remove(this.__dp,z);
}var C=this.__dp[A];

if(C===z){return z.setLayoutProperties(B);
}
if(C){qx.lang.Array.insertBefore(this.__dp,z,C);
}else{this.__dp.push(z);
}this.__dr(z,B);
},_addBefore:function(bk,bl,bm){{};

if(bk==bl){return;
}
if(!this.__dp){this.__dp=[];
}if(bk.getLayoutParent()==this){qx.lang.Array.remove(this.__dp,bk);
}qx.lang.Array.insertBefore(this.__dp,bk,bl);
this.__dr(bk,bm);
},_addAfter:function(eR,eS,eT){{};

if(eR==eS){return;
}
if(!this.__dp){this.__dp=[];
}if(eR.getLayoutParent()==this){qx.lang.Array.remove(this.__dp,eR);
}qx.lang.Array.insertAfter(this.__dp,eR,eS);
this.__dr(eR,eT);
},_remove:function(bj){if(!this.__dp){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dp,bj);
this.__ds(bj);
},_removeAt:function(bn){if(!this.__dp){throw new Error("This widget has no children!");
}var bo=this.__dp[bn];
qx.lang.Array.removeAt(this.__dp,bn);
this.__ds(bo);
return bo;
},_removeAll:function(){if(!this.__dp){return;
}var bR=this.__dp.concat();
this.__dp.length=0;

for(var i=bR.length-1;i>=0;i--){this.__ds(bR[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__dr:function(fr,fs){{};
var parent=fr.getLayoutParent();

if(parent&&parent!=this){parent._remove(fr);
}fr.setLayoutParent(this);
if(fs){fr.setLayoutProperties(fs);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(fr);
}},__ds:function(bS){{};

if(bS.getLayoutParent()!==this){throw new Error("Remove Error: "+bS+" is not a child of this widget!");
}bS.setLayoutParent(null);
if(this.__dl){this.__dl.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bS);
}},capture:function(cs){this.getContainerElement().capture(cs);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(Q,R,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__di){return;
}var gL=this.__di=new qx.html.Element;
{};
gL.setStyles({position:ey,top:0,left:0,zIndex:7});
var gM=this.getBounds();

if(gM){this.__di.setStyles({width:gM.width+es,height:gM.height+es});
}if(qx.core.Variant.isSet(ex,dK)){gL.setStyles({backgroundImage:cN+qx.util.ResourceManager.getInstance().toUri(dU)+cM,backgroundRepeat:eJ});
}this.getContainerElement().add(gL);
},_applyDecorator:function(fW,fX){{};
var gc=qx.ui.core.Widget.__de;
var ga=this.getContainerElement();
if(!this.__di&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(fX){ga.remove(this.__dg);
gc.poolDecorator(this.__dg);
}if(fW){var gb=this.__dg=gc.getDecoratorElement(fW);
gb.setStyle(ef,5);
var fY=this.getBackgroundColor();
gb.tint(fY);
ga.add(gb);
}else{delete this.__dg;
this._applyBackgroundColor(this.getBackgroundColor());
}if(fW&&!fX&&fY){this.getContainerElement().setStyle(dN,null);
}if(this.__dm(fX,fW)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(fW){var gd=this.getBounds();

if(gd){gb.resize(gd.width,gd.height);
this.__di&&
this.__di.setStyles({width:gd.width+es,height:gd.height+es});
}}},_applyShadow:function(gt,gu){var gB=qx.ui.core.Widget.__df;
var gw=this.getContainerElement();
if(gu){gw.remove(this.__dh);
gB.poolDecorator(this.__dh);
}if(gt){var gy=this.__dh=gB.getDecoratorElement(gt);
gw.add(gy);
var gA=gy.getInsets();
gy.setStyles({left:(-gA.left)+es,top:(-gA.top)+es});
var gz=this.getBounds();

if(gz){var gx=gz.width+gA.left+gA.right;
var gv=gz.height+gA.top+gA.bottom;
gy.resize(gx,gv);
}gy.tint(null);
}else{delete this.__dh;
}},_applyToolTipText:function(ck,cl){if(qx.core.Variant.isSet(eC,em)){if(this.__dk){return;
}var cm=qx.locale.Manager.getInstance();
this.__dk=cm.addListener(dW,function(){if(ck&&ck.translate){this.setToolTipText(ck.translate());
}},this);
}},_applyTextColor:function(u,v){},_applyZIndex:function(eP,eQ){this.getContainerElement().setStyle(ef,eP==null?0:eP);
},_applyVisibility:function(gq,gr){var gs=this.getContainerElement();

if(gq===eo){gs.show();
}else{gs.hide();
}var parent=this.$$parent;

if(parent&&(gr==null||gq==null||gr===ej||gq===ej)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(bU,bV){this.getContainerElement().setStyle(eh,bU==1?null:bU);
if(qx.core.Variant.isSet(ex,dK)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var bW=(bU==1||bU==null)?null:0.99;
this.getContentElement().setStyle(eh,bW);
}}},_applyCursor:function(ft,fu){if(ft==null&&!this.isSelectable()){ft=eg;
}this.getContainerElement().setStyle(cL,ft,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(ca,cb){var cc=this.getBackgroundColor();
var ce=this.getContainerElement();

if(this.__dg){this.__dg.tint(cc);
ce.setStyle(dN,null);
}else{var cd=qx.theme.manager.Color.getInstance().resolve(cc);
ce.setStyle(dN,cd);
}},_applyFont:function(cy,cz){},__dt:null,$$stateChanges:null,_forwardStates:null,hasState:function(bJ){var bK=this.__dt;
return bK&&bK[bJ];
},addState:function(gl){var gm=this.__dt;

if(!gm){gm=this.__dt={};
}
if(gm[gl]){return;
}this.__dt[gl]=true;
if(gl===ez){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gp=this.__dw;

if(forward&&forward[gl]&&gp){var gn;

for(var go in gp){gn=gp[go];

if(gn instanceof qx.ui.core.Widget){gp[go].addState(gl);
}}}},removeState:function(cf){var cg=this.__dt;

if(!cg||!cg[cf]){return;
}delete this.__dt[cf];
if(cf===ez){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cj=this.__dw;

if(forward&&forward[cf]&&cj){for(var ci in cj){var ch=cj[ci];

if(ch instanceof qx.ui.core.Widget){ch.removeState(cf);
}}}},replaceState:function(bp,bq){var br=this.__dt;

if(!br){br=this.__dt={};
}
if(!br[bq]){br[bq]=true;
}
if(br[bp]){delete br[bp];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bu=this.__dw;

if(forward&&forward[bq]&&bu){for(var bt in bu){var bs=bu[bt];

if(bs instanceof qx.ui.core.Widget){bs.replaceState(bp,bq);
}}}},__du:null,__dv:null,syncAppearance:function(){var K=this.__dt;
var J=this.__du;
var L=qx.theme.manager.Appearance.getInstance();
var H=qx.core.Property.$$method.setThemed;
var P=qx.core.Property.$$method.resetThemed;
if(this.__dv){delete this.__dv;
if(J){var G=L.styleFrom(J,K,null,this.getAppearance());
if(G){J=null;
}}}if(!J){var I=this;
var O=[];

do{O.push(I.$$subcontrol||I.getAppearance());
}while(I=I.$$subparent);
J=this.__du=O.reverse().join(de).replace(/#[0-9]+/g,dd);
}var M=L.styleFrom(J,K,null,this.getAppearance());

if(M){var N;

if(G){for(var N in G){if(M[N]===undefined){this[P[N]]();
}}}{};
for(var N in M){M[N]===undefined?this[P[N]]():this[H[N]](M[N]);
}}else if(G){for(var N in G){this[P[N]]();
}}this.fireDataEvent(eH,this.__dt);
},_applyAppearance:function(fb,fc){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dj){qx.ui.core.queue.Appearance.add(this);
this.__dj=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__dv=true;
qx.ui.core.queue.Appearance.add(this);
var gg=this.__dw;

if(gg){var ge;

for(var gf in gg){ge=gg[gf];

if(ge instanceof qx.ui.core.Widget){ge.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var bT=this;

while(bT.getAnonymous()){bT=bT.getLayoutParent();

if(!bT){return null;
}}return bT;
},getFocusTarget:function(){var eU=this;

if(!eU.getEnabled()){return null;
}
while(eU.getAnonymous()||!eU.getFocusable()){eU=eU.getLayoutParent();

if(!eU||!eU.getEnabled()){return null;
}}return eU;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(gH,gI){var gJ=this.getFocusElement();
if(gH){var gK=this.getTabIndex();

if(gK==null){gK=1;
}gJ.setAttribute(dO,gK);
if(qx.core.Variant.isSet(ex,dK)){gJ.setAttribute(dg,dc);
}else{gJ.setStyle(cQ,cR);
}}else{if(gJ.isNativelyFocusable()){gJ.setAttribute(dO,-1);
}else if(gI){gJ.setAttribute(dO,null);
}}},_applyKeepFocus:function(ct){var cu=this.getFocusElement();
cu.setAttribute(dV,ct?em:null);
},_applyKeepActive:function(fU){var fV=this.getContainerElement();
fV.setAttribute(dF,fU?em:null);
},_applyTabIndex:function(bE){if(bE==null){bE=1;
}else if(bE<1||bE>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&bE!=null){this.getFocusElement().setAttribute(dO,bE);
}},_applySelectable:function(cx){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(cx);
this.getContentElement().setSelectable(cx);
},_applyEnabled:function(gF,gG){if(gF===false){this.addState(et);
this.removeState(ez);
if(this.isFocusable()){this.removeState(dM);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(et);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(D,E,name){},_applyContextMenu:function(bX,bY){if(bY){bY.removeState(dQ);

if(bY.getOpener()==this){bY.resetOpener();
}
if(!bX){this.removeListener(dQ,this._onContextMenuOpen);
bY.removeListener(dL,this._onBeforeContextMenuOpen,this);
}}
if(bX){bX.setOpener(this);
bX.addState(dQ);

if(!bY){this.addListener(dQ,this._onContextMenuOpen);
bX.addListener(dL,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==eo&&this.hasListener(cA)){this.fireDataEvent(cA,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(ff,fg){if(!this.isEnabled()&&ff===true){ff=false;
}qx.ui.core.DragDropCursor.getInstance();
if(ff){this.addListener(eB,this._onDragStart);
this.addListener(ev,this._onDrag);
this.addListener(ea,this._onDragEnd);
this.addListener(eb,this._onDragChange);
}else{this.removeListener(eB,this._onDragStart);
this.removeListener(ev,this._onDrag);
this.removeListener(ea,this._onDragEnd);
this.removeListener(eb,this._onDragChange);
}this.getContainerElement().setAttribute(eI,ff?em:null);
},_applyDroppable:function(fx,fy){if(!this.isEnabled()&&fx===true){fx=false;
}this.getContainerElement().setAttribute(cK,fx?em:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(eg);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var bC=qx.ui.core.DragDropCursor.getInstance();
var bD=e.getCurrentAction();
bD?bC.setAction(bD):bC.resetAction();
},visualizeFocus:function(){this.addState(dM);
},visualizeBlur:function(){this.removeState(dM);
},scrollChildIntoView:function(m,n,o,p){this.scrollChildIntoViewX(m,n,p);
this.scrollChildIntoViewY(m,o,p);
},scrollChildIntoViewX:function(fE,fF,fG){this.getContentElement().scrollChildIntoViewX(fE.getContainerElement(),fF,fG);
},scrollChildIntoViewY:function(cp,cq,cr){this.getContentElement().scrollChildIntoViewY(cp.getContainerElement(),cq,cr);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(F){if(!this.__dw){return false;
}return !!this.__dw[F];
},__dw:null,_getCreatedChildControls:function(){return this.__dw;
},getChildControl:function(bv,bw){if(!this.__dw){if(bw){return null;
}this.__dw={};
}var bx=this.__dw[bv];

if(bx){return bx;
}
if(bw===true){return null;
}return this._createChildControl(bv);
},_showChildControl:function(fd){var fe=this.getChildControl(fd);
fe.show();
return fe;
},_excludeChildControl:function(by){var bz=this.getChildControl(by,true);

if(bz){bz.exclude();
}},_isChildControlVisible:function(cv){var cw=this.getChildControl(cv,true);

if(cw){return cw.isVisible();
}return false;
},_createChildControl:function(ba){if(!this.__dw){this.__dw={};
}else if(this.__dw[ba]){throw new Error("Child control '"+ba+"' already created!");
}var be=ba.indexOf(dk);

if(be==-1){var bb=this._createChildControlImpl(ba);
}else{var bb=this._createChildControlImpl(ba.substring(0,be));
}
if(!bb){throw new Error("Unsupported control: "+ba);
}bb.$$subcontrol=ba;
bb.$$subparent=this;
var bc=this.__dt;
var forward=this._forwardStates;

if(bc&&forward&&bb instanceof qx.ui.core.Widget){for(var bd in bc){if(forward[bd]){bb.addState(bd);
}}}this.fireDataEvent(cG,bb);
return this.__dw[ba]=bb;
},_createChildControlImpl:function(bA){return null;
},_disposeChildControls:function(){var bi=this.__dw;

if(!bi){return;
}var bg=qx.ui.core.Widget;

for(var bh in bi){var bf=bi[bh];

if(!bg.contains(this,bf)){bf.destroy();
}else{bf.dispose();
}}delete this.__dw;
},_findTopControl:function(){var bF=this;

while(bF){if(!bF.$$subparent){return bF;
}bF=bF.$$subparent;
}return null;
},getContainerLocation:function(fp){var fq=this.getContainerElement().getDomElement();
return fq?qx.bom.element.Location.get(fq,fp):null;
},getContentLocation:function(q){var r=this.getContentElement().getDomElement();
return r?qx.bom.element.Location.get(r,q):null;
},setDomLeft:function(eV){var eW=this.getContainerElement().getDomElement();

if(eW){eW.style.left=eV+es;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(U){var V=this.getContainerElement().getDomElement();

if(V){V.style.top=U+es;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(cn,top){var co=this.getContainerElement().getDomElement();

if(co){co.style.left=cn+es;
co.style.top=top+es;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var bN=arguments.callee.base.call(this);

if(this.getChildren){var bO=this.getChildren();

for(var i=0,l=bO.length;i<l;i++){bN.add(bO[i].clone());
}}return bN;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(eC,em)){if(this.__dk){qx.locale.Manager.getInstance().removeListenerById(this.__dk);
}}this.getContainerElement().setAttribute(ee,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var fw=qx.ui.core.Widget;
var fv=this.getContainerElement();

if(this.__dg){fv.remove(this.__dg);
fw.__de.poolDecorator(this.__dg);
}
if(this.__dh){fv.remove(this.__dh);
fw.__df.poolDecorator(this.__dh);
}this.clearSeparators();
this.__dg=this.__dh=this.__dn=null;
}else{this._disposeArray(du);
this._disposeObjects(dx,cW);
}this._disposeArray(dH);
this.__dt=this.__dw=null;
this._disposeObjects(dj,cY,eK,dE);
}});
})();
(function(){var g="qx.event.type.Data",f="qx.event.type.Event",e="qx.data.IListData";
qx.Interface.define(e,{events:{"change":g,"changeLength":f},members:{getItem:function(a){},setItem:function(i,j){},splice:function(b,c,d){},contains:function(h){},getLength:function(){},toArray:function(){}}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(j,k,l,m,n){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(f,g,h,i){switch(i){case e:return g.start-h.end-f;
case b:return g.end+h.start;
case d:return g.start+h.start;
case c:return g.end-h.end-f;
}},_isInRange:function(o,p,q){return o>=0&&o+p<=q;
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
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var w="blur",v="focus",u="input",t="load",s="qx.ui.core.EventHandler",r="activate";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__dx=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__dx:null,__dy:{focusin:1,focusout:1,focus:1,blur:1},__dz:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(F,G){return F instanceof qx.ui.core.Widget;
},_dispatchEvent:function(a){var f=a.getTarget();
var e=qx.ui.core.Widget.getWidgetByElement(f);
var g=false;

while(e&&e.isAnonymous()){var g=true;
e=e.getLayoutParent();
}if(e&&g&&a.getType()==r){e.getContainerElement().activate();
}if(this.__dy[a.getType()]){e=e&&e.getFocusTarget();
if(!e){return;
}}if(a.getRelatedTarget){var p=a.getRelatedTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}
if(o){if(this.__dy[a.getType()]){o=o.getFocusTarget();
}if(o===e){return;
}}}var j=a.getCurrentTarget();
var m=qx.ui.core.Widget.getWidgetByElement(j);

if(!m||m.isAnonymous()){return;
}if(this.__dy[a.getType()]){m=m.getFocusTarget();
}var n=a.getType();

if(!m||!(m.isEnabled()||this.__dz[n])){return;
}var b=a.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var h=this.__dx.getListeners(m,n,b);

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
},registerEvent:function(x,y,z){var A;

if(y===v||y===w){A=x.getFocusElement();
}else if(y===t||y===u){A=x.getContentElement();
}else{A=x.getContainerElement();
}
if(A){A.addListener(y,this._dispatchEvent,this,z);
}},unregisterEvent:function(B,C,D){var E;

if(C===v||C===w){E=B.getFocusElement();
}else if(C===t||C===u){E=B.getContentElement();
}else{E=B.getContainerElement();
}
if(E){E.removeListener(C,this._dispatchEvent,this,D);
}}},destruct:function(){this.__dx=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var k="-",j="qx.event.handler.Element";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(v){arguments.callee.base.call(this);
this._manager=v;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(h,i){},registerEvent:function(l,m,n){var q=qx.core.ObjectRegistry.toHashCode(l);
var o=q+k+m;
var p=qx.lang.Function.listener(this._onNative,this,o);
qx.bom.Event.addNativeListener(l,m,p);
this._registeredEvents[o]={element:l,type:m,listener:p};
},unregisterEvent:function(a,b,c){var f=this._registeredEvents;

if(!f){return;
}var g=qx.core.ObjectRegistry.toHashCode(a);
var d=g+k+b;
var e=this._registeredEvents[d];
qx.bom.Event.removeNativeListener(a,b,e.listener);
delete this._registeredEvents[d];
},_onNative:qx.event.GlobalError.observeMethod(function(w,x){var z=this._registeredEvents;

if(!z){return;
}var y=z[x];
qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[w]);
})},destruct:function(){var r;
var s=this._registeredEvents;

for(var t in s){r=s[t];
qx.bom.Event.removeNativeListener(r.element,r.type,r.listener);
}this._manager=this._registeredEvents=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var w="",v='indexOf',u='slice',t='concat',s='toLocaleLowerCase',r="qx.type.BaseString",q='match',p='toLocaleUpperCase',o='search',n='replace',f='toLowerCase',m='charCodeAt',j='split',e='substring',d='lastIndexOf',h='substr',g='toUpperCase',k='charAt';
qx.Class.define(r,{extend:Object,construct:function(z){var z=z||w;
this.__kr=z;
this.length=z.length;
},members:{$$isString:true,length:0,__kr:null,toString:function(){return this.__kr;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(x,y){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(a,b){{};
var c=[k,m,t,v,d,q,n,o,u,j,h,e,f,g,s,p];
b.valueOf=b.toString;

if(new a(w).valueOf()==null){delete b.valueOf;
}
for(var i=0,l=c.length;i<l;i++){b[c[i]]=String.prototype[c[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__dA=c;
this.__dB=d;
},members:{__dA:null,__dB:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__dA,this.__dB);
}}});
})();
(function(){var d="qx.event.handler.Object";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var k="qx.lang.Object";
qx.Class.define(k,{statics:{empty:function(I){{};

for(var J in I){if(I.hasOwnProperty(J)){delete I[J];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(m){{};
return m.__count__===0;
}:
function(h){{};

for(var j in h){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(n,o){{};
return n.__count__>=o;
}:
function(z,A){{};

if(A<=0){return true;
}var length=0;

for(var B in z){if((++length)>=A){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(F){{};
var H=[];
var G=this.getKeys(F);

for(var i=0,l=G.length;i<l;i++){H.push(F[G[i]]);
}return H;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(f,g){{};
return qx.lang.Object.mergeWith(f,g,false);
},merge:function(u,v){{};
var w=arguments.length;

for(var i=1;i<w;i++){qx.lang.Object.mergeWith(u,arguments[i]);
}return u;
},clone:function(c){{};
var d={};

for(var e in c){d[e]=c[e];
}return d;
},invert:function(C){{};
var D={};

for(var E in C){D[C[E].toString()]=E;
}return D;
},getKeyFromValue:function(r,s){{};

for(var t in r){if(r.hasOwnProperty(t)&&r[t]===s){return t;
}}return null;
},contains:function(x,y){{};
return this.getKeyFromValue(x,y)!==null;
},select:function(a,b){{};
return b[a];
},fromArray:function(p){{};
var q={};

for(var i=0,l=p.length;i<l;i++){{};
q[p[i].toString()]=true;
}return q;
}}});
})();
(function(){var e="qx.ui.core.MChildrenHandling";
qx.Mixin.define(e,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(d){return this._indexOf(d);
},add:function(a,b){this._add(a,b);
},addAt:function(k,l,m){this._addAt(k,l,m);
},addBefore:function(f,g,h){this._addBefore(f,g,h);
},addAfter:function(n,o,p){this._addAfter(n,o,p);
},remove:function(j){this._remove(j);
},removeAt:function(i){return this._removeAt(i);
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
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var k="CSS1Compat",j="position:absolute;width:0;height:0;width:1",i="qx.bom.Document",h="1px",g="qx.client",f="div";
qx.Class.define(i,{statics:{isQuirksMode:qx.core.Variant.select(g,{"mshtml":function(p){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (p||window).document.compatMode!==k;
}},"webkit":function(a){if(document.compatMode===undefined){var b=(a||window).document.createElement(f);
b.style.cssText=j;
return b.style.width===h?true:false;
}else{return (a||window).document.compatMode!==k;
}},"default":function(q){return (q||window).document.compatMode!==k;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(c){var d=(c||window).document;
var e=qx.bom.Viewport.getHeight(c);
var scroll=this.isStandardMode(c)?d.documentElement.scrollHeight:d.body.scrollHeight;
return Math.max(scroll,e);
}}});
})();
(function(){var q="interval",p="qx.event.Timer",o="_applyInterval",n="_applyEnabled",m="Boolean",l="qx.event.type.Event",k="Integer";
qx.Class.define(p,{extend:qx.core.Object,construct:function(r){arguments.callee.base.call(this);
this.setEnabled(false);

if(r!=null){this.setInterval(r);
}var self=this;
this.__dI=function(){self._oninterval.call(self);
};
},events:{"interval":l},statics:{once:function(b,c,d){var f=new qx.event.Timer(d);
f.addListener(q,function(e){f.stop();
b.call(c,e);
f.dispose();
c=null;
},c);
f.start();
return f;
}},properties:{enabled:{init:true,check:m,apply:n},interval:{check:k,init:1000,apply:o}},members:{__dJ:null,__dI:null,_applyInterval:function(g,h){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(i,j){if(j){window.clearInterval(this.__dJ);
this.__dJ=null;
}else if(i){this.__dJ=window.setInterval(this.__dI,this.getInterval());
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
if(this.getEnabled()){this.fireEvent(q);
}})},destruct:function(){if(this.__dJ){window.clearInterval(this.__dJ);
}this.__dJ=this.__dI=null;
}});
})();
(function(){var i="qx.event.handler.UserAction";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(j){arguments.callee.base.call(this);
this.__jc=j;
this.__jd=j.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jc:null,__jd:null,canHandleEvent:function(a,b){},registerEvent:function(f,g,h){},unregisterEvent:function(c,d,e){}},destruct:function(){this.__jc=this.__jd=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__jg:function(){var n=navigator.platform;
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
}}},defer:function(o){o.__jg();
}});
})();
(function(){var k="win98",j="osx2",i="osx0",h="osx4",g="win95",f="win2000",e="osx1",d="osx5",c="osx3",b="Windows NT 5.01",I=")",H="winxp",G="freebsd",F="sunos",E="SV1",D="|",C="nintendods",B="winnt4",A="wince",z="winme",r="os9",s="\.",p="osx",q="linux",n="netbsd",o="winvista",l="openbsd",m="(",t="win2003",u="symbian",w="win7",v="g",y="qx.bom.client.System",x=" Mobile/";
qx.Class.define(y,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__jO:{"Windows NT 6.1":w,"Windows NT 6.0":o,"Windows NT 5.2":t,"Windows NT 5.1":H,"Windows NT 5.0":f,"Windows 2000":f,"Windows NT 4.0":B,"Win 9x 4.90":z,"Windows CE":A,"Windows 98":k,"Win98":k,"Windows 95":g,"Win95":g,"Linux":q,"FreeBSD":G,"NetBSD":n,"OpenBSD":l,"SunOS":F,"Symbian System":u,"Nitro":C,"PSP":"sonypsp","Mac OS X 10_5":d,"Mac OS X 10.5":d,"Mac OS X 10_4":h,"Mac OS X 10.4":h,"Mac OS X 10_3":c,"Mac OS X 10.3":c,"Mac OS X 10_2":j,"Mac OS X 10.2":j,"Mac OS X 10_1":e,"Mac OS X 10.1":e,"Mac OS X 10_0":i,"Mac OS X 10.0":i,"Mac OS X":p,"Mac OS 9":r},__jP:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__jO){K.push(J);
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
}else{this.NAME=this.__jO[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(b)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(E)!==-1){this.SP2=true;
}}}}},defer:function(a){a.__jP();
}});
})();
(function(){var G="qx.client",F="mouseup",E="click",D="mousedown",C="contextmenu",B="mousewheel",A="dblclick",z="mshtml",y="mouseover",x="mouseout",s="DOMMouseScroll",w="mousemove",v="on",r="mshtml|webkit|opera",q="useraction",u="gecko|webkit",t="qx.event.handler.Mouse";
qx.Class.define(t,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(j){arguments.callee.base.call(this);
this.__dK=j;
this.__dL=j.getWindow();
this.__dM=this.__dL.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dN:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dK:null,__dL:null,__dM:null,canHandleEvent:function(a,b){},registerEvent:qx.bom.client.System.IPHONE?
function(k,l,m){k[v+l]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(T,U,V){T[v+U]=undefined;
}:qx.lang.Function.returnNull,__dS:function(c,d,e){if(!e){e=c.target||c.srcElement;
}if(e&&e.nodeType){qx.event.Registration.fireEvent(e,d||c.type,d==B?qx.event.type.MouseWheel:qx.event.type.Mouse,[c,e,null,true,true]);
}qx.event.Registration.fireEvent(this.__dL,q,qx.event.type.Data,[d||c.type]);
},_initButtonObserver:function(){this.__dN=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dM,D,this.__dN);
Event.addNativeListener(this.__dM,F,this.__dN);
Event.addNativeListener(this.__dM,E,this.__dN);
Event.addNativeListener(this.__dM,A,this.__dN);
Event.addNativeListener(this.__dM,C,this.__dN);
},_initMoveObserver:function(){this.__dO=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dM,w,this.__dO);
Event.addNativeListener(this.__dM,y,this.__dO);
Event.addNativeListener(this.__dM,x,this.__dO);
},_initWheelObserver:function(){this.__dP=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var O=qx.core.Variant.isSet(G,r)?B:s;
var P=qx.core.Variant.isSet(G,z)?this.__dM:this.__dL;
Event.addNativeListener(P,O,this.__dP);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dM,D,this.__dN);
Event.removeNativeListener(this.__dM,F,this.__dN);
Event.removeNativeListener(this.__dM,E,this.__dN);
Event.removeNativeListener(this.__dM,A,this.__dN);
Event.removeNativeListener(this.__dM,C,this.__dN);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dM,w,this.__dO);
Event.removeNativeListener(this.__dM,y,this.__dO);
Event.removeNativeListener(this.__dM,x,this.__dO);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var M=qx.core.Variant.isSet(G,r)?B:s;
var N=qx.core.Variant.isSet(G,z)?this.__dM:this.__dL;
Event.removeNativeListener(N,M,this.__dP);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__dS(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(H){var I=H.type;
var J=H.target||H.srcElement;
if(qx.core.Variant.isSet(G,u)){if(J&&J.nodeType==3){J=J.parentNode;
}}
if(this.__dT){this.__dT(H,I,J);
}
if(this.__dV){this.__dV(H,I,J);
}this.__dS(H,I,J);

if(this.__dU){this.__dU(H,I,J);
}
if(this.__dW){this.__dW(H,I,J);
}this.__dQ=I;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(f){this.__dS(f,B);
}),__dT:qx.core.Variant.select(G,{"webkit":function(n,o,p){if(qx.bom.client.Engine.VERSION<530){if(o==C){this.__dS(n,F,p);
}}},"default":null}),__dU:qx.core.Variant.select(G,{"opera":function(g,h,i){if(h==F&&g.button==2){this.__dS(g,C,i);
}},"default":null}),__dV:qx.core.Variant.select(G,{"mshtml":function(Q,R,S){if(R==F&&this.__dQ==E){this.__dS(Q,D,S);
}else if(R==A){this.__dS(Q,E,S);
}},"default":null}),__dW:qx.core.Variant.select(G,{"mshtml":null,"default":function(W,X,Y){switch(X){case D:this.__dR=Y;
break;
case F:if(Y!==this.__dR){var ba=qx.dom.Hierarchy.getCommonParent(Y,this.__dR);
this.__dS(W,E,ba);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dK=this.__dL=this.__dM=this.__dR=null;
},defer:function(K){qx.event.Registration.addHandler(K);
}});
})();
(function(){var d="qx.util.ValueManager",c="abstract";
qx.Class.define(d,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(b){return this._dynamic[b];
},isDynamic:function(f){return !!this._dynamic[f];
},resolve:function(a){if(a&&this._dynamic[a]){return this._dynamic[a];
}return a;
},_setDynamic:function(e){this._dynamic=e;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var t="_applyLayoutChange",s="top",r="left",q="middle",p="Decorator",o="center",n="_applyReversed",m="bottom",k="qx.ui.layout.VBox",j="Integer",g="right",h="Boolean";
qx.Class.define(k,{extend:qx.ui.layout.Abstract,construct:function(u,v,w){arguments.callee.base.call(this);

if(u){this.setSpacing(u);
}
if(v){this.setAlignY(v);
}
if(w){this.setSeparator(w);
}},properties:{alignY:{check:[s,q,m],init:s,apply:t},alignX:{check:[r,o,g],init:r,apply:t},spacing:{check:j,init:0,apply:t},separator:{check:p,nullable:true,apply:t},reversed:{check:h,init:false,apply:n}},members:{__dY:null,__ea:null,__eb:null,__ec:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ed:function(){var f=this._getLayoutChildren();
var length=f.length;
var b=false;
var a=this.__dY&&this.__dY.length!=length&&this.__ea&&this.__dY;
var d;
var c=a?this.__dY:new Array(length);
var e=a?this.__ea:new Array(length);
if(this.getReversed()){f=f.concat().reverse();
}for(var i=0;i<length;i++){d=f[i].getLayoutProperties();

if(d.height!=null){c[i]=parseFloat(d.height)/100;
}
if(d.flex!=null){e[i]=d.flex;
b=true;
}else{e[i]=0;
}}if(!a){this.__dY=c;
this.__ea=e;
}this.__eb=b;
this.__ec=f;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__ed();
}var U=this.__ec;
var length=U.length;
var bf=qx.ui.layout.Util;
var be=this.getSpacing();
var bi=this.getSeparator();

if(bi){var R=bf.computeVerticalSeparatorGaps(U,be,bi);
}else{var R=bf.computeVerticalGaps(U,be,true);
}var i,P,Q,Y;
var ba=[];
var bg=R;

for(i=0;i<length;i+=1){Y=this.__dY[i];
Q=Y!=null?Math.floor((N-R)*Y):U[i].getSizeHint().height;
ba.push(Q);
bg+=Q;
}if(this.__eb&&bg!=N){var W={};
var bd,bh;

for(i=0;i<length;i+=1){bd=this.__ea[i];

if(bd>0){V=U[i].getSizeHint();
W[i]={min:V.minHeight,value:ba[i],max:V.maxHeight,flex:bd};
}}var S=bf.computeFlexOffsets(W,N,bg);

for(i in S){bh=S[i].offset;
ba[i]+=bh;
bg+=bh;
}}var top=U[0].getMarginTop();
if(bg<N&&this.getAlignY()!=s){top=N-bg;

if(this.getAlignY()===q){top=Math.round(top/2);
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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ed();
}var D=qx.ui.layout.Util;
var L=this.__ec;
var z=0,C=0,B=0;
var x=0,E=0;
var I,y,K;
for(var i=0,l=L.length;i<l;i+=1){I=L[i];
y=I.getSizeHint();
C+=y.height;
var H=this.__ea[i];
var A=this.__dY[i];

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
}},destruct:function(){this.__dY=this.__ea=this.__ec=null;
}});
})();
(function(){var d="qx.event.type.KeyInput";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{init:function(a,b,c){arguments.callee.base.call(this,a,b,null,true,true);
this._charCode=c;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__ee:{},add:function(f){var g=this.__ee;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__ee;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__ee={};
}}});
})();
(function(){var B="nonScaled",A="scaled",z="alphaScaled",y=".png",x="replacement",w="hidden",v="div",u="__hy",t="Boolean",s="_applyScale",m="px",r="_applySource",p="-disabled.$1",l="img",k="changeSource",o="qx.client",n="String",q="image",j="qx.ui.basic.Image";
qx.Class.define(j,{extend:qx.ui.core.Widget,construct:function(a){this.__hy={};
arguments.callee.base.call(this);

if(a){this.setSource(a);
}},properties:{source:{check:n,init:null,nullable:true,event:k,apply:r,themeable:true},scale:{check:t,init:false,themeable:true,apply:s},appearance:{refine:true,init:q},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hz:null,__hA:null,__hB:null,__hy:null,getContentElement:function(){return this.__hF();
},_createContentElement:function(){return this.__hF();
},_getContentHint:function(){return {width:this.__hz||0,height:this.__hA||0};
},_applyEnabled:function(b,c){arguments.callee.base.call(this,b,c);

if(this.getSource()){this._styleSource();
}},_applySource:function(S){this._styleSource();
},_applyScale:function(bi){this._styleSource();
},__hC:function(N){this.__hB=N;
},__hD:function(){if(this.__hB==null){var K=this.getSource();
var J=false;

if(K!=null){J=qx.lang.String.endsWith(K,y);
}
if(this.getScale()&&J&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hB=z;
}else if(this.getScale()){this.__hB=A;
}else{this.__hB=B;
}}return this.__hB;
},__hE:function(d){var e;
var f;

if(d==z){e=true;
f=v;
}else if(d==B){e=false;
f=v;
}else{e=true;
f=l;
}var g=new qx.html.Image(f);
g.setScale(e);
g.setStyles({"overflowX":w,"overflowY":w});
return g;
},__hF:function(){var O=this.__hD();

if(this.__hy[O]==null){this.__hy[O]=this.__hE(O);
}return this.__hy[O];
},_styleSource:function(){var M=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!M){this.getContentElement().resetSource();
return;
}this.__hG(M);
if(qx.util.ResourceManager.getInstance().has(M)){this.__hI(this.getContentElement(),M);
}else if(qx.io.ImageLoader.isLoaded(M)){this.__hJ(this.getContentElement(),M);
}else{this.__hK(this.getContentElement(),M);
}},__hG:qx.core.Variant.select(o,{"mshtml":function(T){var V=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var U=qx.lang.String.endsWith(T,y);

if(V&&U){if(this.getScale()&&this.__hD()!=z){this.__hC(z);
}else if(!this.getScale()&&this.__hD()!=B){this.__hC(B);
}}else{if(this.getScale()&&this.__hD()!=A){this.__hC(A);
}else if(!this.getScale()&&this.__hD()!=B){this.__hC(B);
}}this.__hH(this.__hF());
},"default":function(L){if(this.getScale()&&this.__hD()!=A){this.__hC(A);
}else if(!this.getScale()&&this.__hD(B)){this.__hC(B);
}this.__hH(this.__hF());
}}),__hH:function(C){var F=this.getContainerElement();
var G=F.getChild(0);

if(G!=C){if(G!=null){var I=m;
var D={};
var E=this.getInnerSize();

if(E!=null){D.width=E.width+I;
D.height=E.height+I;
}var H=this.getInsets();
D.left=H.left+I;
D.top=H.top+I;
D.zIndex=10;
C.setStyles(D,true);
C.setSelectable(this.getSelectable());
}F.removeAt(0);
F.addAt(C,0);
}},__hI:function(Y,ba){var bc=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bb=ba.replace(/\.([a-z]+)$/,p);

if(bc.has(bb)){ba=bb;
this.addState(x);
}else{this.removeState(x);
}}if(Y.getSource()===ba){return;
}Y.setSource(ba);
this.__hM(bc.getImageWidth(ba),bc.getImageHeight(ba));
},__hJ:function(bd,be){var bg=qx.io.ImageLoader;
bd.setSource(be);
var bf=bg.getWidth(be);
var bh=bg.getHeight(be);
this.__hM(bf,bh);
},__hK:function(P,Q){var self;
var R=qx.io.ImageLoader;
{};
if(!R.isFailed(Q)){R.load(Q,this.__hL,this);
}else{if(P!=null){P.resetSource();
}}},__hL:function(W,X){if(W!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(X.failed){this.warn("Image could not be loaded: "+W);
}this._styleSource();
},__hM:function(h,i){if(h!==this.__hz||i!==this.__hA){this.__hz=h;
this.__hA=i;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(u);
}});
})();
(function(){var s="keep-align",r="interval",q="Integer",p="direct",o="best-fit",n="mouse",m="bottom-left",l="disappear",k="Boolean",j="bottom-right",G="widget",F="qx.ui.core.MPlacement",E="left-top",D="offsetRight",C="shorthand",B="offsetLeft",A="top-left",z="appear",y="offsetBottom",x="top-right",v="offsetTop",w="right-bottom",t="right-top",u="left-bottom";
qx.Mixin.define(F,{properties:{position:{check:[A,x,m,j,E,u,t,w],init:m,themeable:true},placeMethod:{check:[G,n],init:n,themeable:true},domMove:{check:k,init:false},placementModeX:{check:[p,s,o],init:s,themeable:true},placementModeY:{check:[p,s,o],init:s,themeable:true},offsetLeft:{check:q,init:0,themeable:true},offsetTop:{check:q,init:0,themeable:true},offsetRight:{check:q,init:0,themeable:true},offsetBottom:{check:q,init:0,themeable:true},offset:{group:[v,D,y,B],mode:C,themeable:true}},members:{__hj:null,getLayoutLocation:function(a){var d,c,e,top;
c=a.getBounds();
e=c.left;
top=c.top;
var f=c;
a=a.getLayoutParent();

while(a&&!a.isRootWidget()){c=a.getBounds();
e+=c.left;
top+=c.top;
d=a.getInsets();
e+=d.left;
top+=d.top;
a=a.getLayoutParent();
}if(a.isRootWidget()){var b=a.getContainerLocation();

if(b){e+=b.left;
top+=b.top;
}}return {left:e,top:top,right:e+f.width,bottom:top+f.height};
},moveTo:function(U,top){if(this.getDomMove()){this.setDomPosition(U,top);
}else{this.setLayoutProperties({left:U,top:top});
}},placeToWidget:function(g,h){if(h){this.__hj=qx.lang.Function.bind(this.placeToWidget,this,g,false);
qx.event.Idle.getInstance().addListener(r,this.__hj);
this.addListener(l,function(){if(this.__hj){qx.event.Idle.getInstance().removeListener(r,this.__hj);
this.__hj=null;
}},this);
}var i=g.getContainerLocation()||this.getLayoutLocation(g);
this.__hl(i);
},placeToMouse:function(event){var O=event.getDocumentLeft();
var top=event.getDocumentTop();
var N={left:O,top:top,right:O,bottom:top};
this.__hl(N);
},placeToElement:function(P,Q){var location=qx.bom.element.Location.get(P);
var R={left:location.left,top:location.top,right:location.left+P.offsetWidth,bottom:location.top+P.offsetHeight};
if(Q){this.__hj=qx.lang.Function.bind(this.placeToElement,this,P,false);
qx.event.Idle.getInstance().addListener(r,this.__hj);
this.addListener(l,function(){if(this.__hj){qx.event.Idle.getInstance().removeListener(r,this.__hj);
this.__hj=null;
}},this);
}this.__hl(R);
},placeToPoint:function(S){var T={left:S.left,top:S.top,right:S.left,bottom:S.top};
this.__hl(T);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__hk:function(J){var K=null;

if(this._computePlacementSize){var K=this._computePlacementSize();
}else if(this.isVisible()){var K=this.getBounds();
}
if(K==null){this.addListenerOnce(z,function(){this.__hk(J);
},this);
}else{J.call(this,K);
}},__hl:function(V){this.__hk(function(L){var M=qx.util.placement.Placement.compute(L,this.getLayoutParent().getBounds(),V,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(M.left,M.top);
});
},setSmart:function(W){{};
var X=W?s:p;
this.set({placementModeX:X,placementModeY:X});
},getSmart:function(){{};
var H=this.getPlacementModeX()==s?true:false;
var I=this.getPlacementModeY()==s?true:false;
return H&&I;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__hj){qx.event.Idle.getInstance().removeListener(r,this.__hj);
}}});
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
(function(){var z="emulated",y="native",x='"',w="qx.lang.Core",v="\\\\",u="\\\"",t="[object Error]";
qx.Class.define(w,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==t)?z:y,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?y:z,{"native":Array.prototype.indexOf,"emulated":function(A,B){if(B==null){B=0;
}else if(B<0){B=Math.max(0,this.length+B);
}
for(var i=B;i<this.length;i++){if(this[i]===A){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?y:z,{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?y:z,{"native":Array.prototype.forEach,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){a.call(b||window,c,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?y:z,{"native":Array.prototype.filter,"emulated":function(d,e){var f=[];
var l=this.length;

for(var i=0;i<l;i++){var g=this[i];

if(g!==undefined){if(d.call(e||window,g,i,this)){f.push(this[i]);
}}}return f;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?y:z,{"native":Array.prototype.map,"emulated":function(p,q){var r=[];
var l=this.length;

for(var i=0;i<l;i++){var s=this[i];

if(s!==undefined){r[i]=p.call(q||window,s,i,this);
}}return r;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?y:z,{"native":Array.prototype.some,"emulated":function(m,n){var l=this.length;

for(var i=0;i<l;i++){var o=this[i];

if(o!==undefined){if(m.call(n||window,o,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?y:z,{"native":Array.prototype.every,"emulated":function(h,j){var l=this.length;

for(var i=0;i<l;i++){var k=this[i];

if(k!==undefined){if(!h.call(j||window,k,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?y:z,{"native":String.prototype.quote,"emulated":function(){return x+this.replace(/\\/g,v).replace(/\"/g,u)+x;
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
qx.Class.define(L,{statics:{__ef:{"Array":[m,v,J,w,E,j,f,D,n,o,q,p,t,A,g,I,u],"String":[M,F,B,y,H,x,q,p,C,k,K,N,r,z,G,h,n,o]},__eg:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__eh:function(){var a=qx.lang.Generics.__ef;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__eg(c,d);
}}}}},defer:function(Q){Q.__eh();
}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var j="qx.event.handler.Window";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){arguments.callee.base.call(this);
this._manager=u;
this._window=u.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(o,p){},registerEvent:function(g,h,i){},unregisterEvent:function(q,r,s){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var l=qx.event.handler.Window.SUPPORTED_TYPES;

for(var k in l){qx.bom.Event.addNativeListener(this._window,k,this._onNativeWrapper);
}},_stopWindowObserver:function(){var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var b=this._window;

try{var f=b.document;
}catch(e){return ;
}var c=f.documentElement;
var a=e.target||e.srcElement;

if(a==null||a===b||a===f||a===c){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,b]);
qx.event.Registration.dispatchEvent(b,event);
var d=event.getReturnValue();

if(d!=null){e.returnValue=d;
return d;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var p="label",o="icon",n="Boolean",m="both",l="String",k="left",j="changeGap",i="changeShow",h="bottom",g="_applyCenter",C="changeIcon",B="qx.ui.basic.Atom",A="changeLabel",z="Integer",y="_applyIconPosition",x="top",w="right",v="_applyRich",u="_applyIcon",t="_applyShow",r="_applyLabel",s="_applyGap",q="atom";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(a,b){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}},properties:{appearance:{refine:true,init:q},label:{apply:r,nullable:true,check:l,event:A},rich:{check:n,init:false,apply:v},icon:{check:l,apply:u,nullable:true,themeable:true,event:C},gap:{check:z,nullable:false,event:j,apply:s,themeable:true,init:4},show:{init:m,check:[m,p,o],themeable:true,inheritable:true,apply:t,event:i},iconPosition:{init:k,check:[x,w,h,k],themeable:true,apply:y},center:{init:false,check:n,themeable:true,apply:g}},members:{_createChildControlImpl:function(c){var d;

switch(c){case p:d=new qx.ui.basic.Label(this.getLabel());
d.setAnonymous(true);
d.setRich(this.getRich());
this._add(d);

if(this.getLabel()==null||this.getShow()===o){d.exclude();
}break;
case o:d=new qx.ui.basic.Image(this.getIcon());
d.setAnonymous(true);
this._addAt(d,0);

if(this.getIcon()==null||this.getShow()===p){d.exclude();
}break;
}return d||arguments.callee.base.call(this,c);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===o){this._excludeChildControl(p);
}else{this._showChildControl(p);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===p){this._excludeChildControl(o);
}else{this._showChildControl(o);
}},_applyLabel:function(L,M){var N=this.getChildControl(p,true);

if(N){N.setValue(L);
}this._handleLabel();
},_applyRich:function(I,J){var K=this.getChildControl(p,true);

if(K){K.setRich(I);
}},_applyIcon:function(D,E){var F=this.getChildControl(o,true);

if(F){F.setSource(D);
}this._handleIcon();
},_applyGap:function(Q,R){this._getLayout().setGap(Q);
},_applyShow:function(G,H){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(e,f){this._getLayout().setIconPosition(e);
},_applyCenter:function(O,P){this._getLayout().setCenter(O);
}}});
})();
(function(){var t="_applyLayoutChange",s="left",r="center",q="top",p="Decorator",o="middle",n="_applyReversed",m="bottom",k="Boolean",j="right",g="Integer",h="qx.ui.layout.HBox";
qx.Class.define(h,{extend:qx.ui.layout.Abstract,construct:function(u,v,w){arguments.callee.base.call(this);

if(u){this.setSpacing(u);
}
if(v){this.setAlignX(v);
}
if(w){this.setSeparator(w);
}},properties:{alignX:{check:[s,r,j],init:s,apply:t},alignY:{check:[q,o,m],init:q,apply:t},spacing:{check:g,init:0,apply:t},separator:{check:p,nullable:true,apply:t},reversed:{check:k,init:false,apply:n}},members:{__eU:null,__eV:null,__eW:null,__eX:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__eY:function(){var f=this._getLayoutChildren();
var length=f.length;
var c=false;
var a=this.__eU&&this.__eU.length!=length&&this.__eV&&this.__eU;
var d;
var b=a?this.__eU:new Array(length);
var e=a?this.__eV:new Array(length);
if(this.getReversed()){f=f.concat().reverse();
}for(var i=0;i<length;i++){d=f[i].getLayoutProperties();

if(d.width!=null){b[i]=parseFloat(d.width)/100;
}
if(d.flex!=null){e[i]=d.flex;
c=true;
}else{e[i]=0;
}}if(!a){this.__eU=b;
this.__eV=e;
}this.__eW=c;
this.__eX=f;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__eY();
}var E=this.__eX;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__eU[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__eW&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__eV[i];

if(L>0){G=E[i].getSizeHint();
H[i]={min:G.minWidth,value:P[i],max:G.maxWidth,flex:L};
}}var C=N.computeFlexOffsets(H,x,F);

for(i in C){O=C[i].offset;
P[i]+=O;
F+=O;
}}var U=E[0].getMarginLeft();
if(F<x&&this.getAlignX()!=s){U=x-F;

if(this.getAlignX()===r){U=Math.round(U/2);
}}var G,top,A,K,D,S,I;
var M=this.getSpacing();
this._clearSeparators();
if(Q){var R=qx.theme.manager.Decoration.getInstance().resolve(Q).getInsets();
var T=R.left+R.right;
}for(i=0;i<length;i+=1){z=E[i];
K=P[i];
G=z.getSizeHint();
S=z.getMarginTop();
I=z.getMarginBottom();
A=Math.max(G.minHeight,Math.min(y-S-I,G.maxHeight));
top=N.computeVerticalAlignOffset(z.getAlignY()||this.getAlignY(),A,y,S,I);
if(i>0){if(Q){U+=D+M;
this._renderSeparator(Q,{left:U,top:0,width:T,height:y});
U+=T+M+z.getMarginLeft();
}else{U+=N.collapseMargins(M,D,z.getMarginLeft());
}}z.renderLayout(U,top,K,A);
U+=K;
D=z.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__eY();
}var bc=qx.ui.layout.Util;
var bk=this.__eX;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__eV[i];
var X=this.__eU[i];

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
}},destruct:function(){this.__eU=this.__eV=this.__eX=null;
}});
})();
(function(){var bu="get",bt="",bs="[",br="last",bq="change",bp="]",bo=".",bn="Number",bm="String",bl="set",bJ="deepBinding",bI="item",bH="reset",bG="' (",bF="Boolean",bE=").",bD=") to the object '",bC="Integer",bB="qx.data.SingleValueBinding",bA="No event could be found for the property",by="PositiveNumber",bz="Binding from '",bw="PositiveInteger",bx="Binding does not exist!",bv="Date";
qx.Class.define(bB,{statics:{DEBUG_ON:false,__fg:{},bind:function(O,P,Q,R,S){var bd=this.__fi(O,P,Q,R,S);
var X=P.split(bo);
var U=this.__fp(X);
var bc=[];
var Y=[];
var ba=[];
var V=[];
var W=O;
for(var i=0;i<X.length;i++){if(U[i]!==bt){V.push(bq);
}else{V.push(this.__fk(W,X[i]));
}bc[i]=W;
if(i==X.length-1){if(U[i]!==bt){var bg=U[i]===br?W.length-1:U[i];
var T=W.getItem(bg);
this.__fo(T,Q,R,S,O);
ba[i]=this.__fq(W,V[i],Q,R,S,U[i]);
}else{if(X[i]!=null&&W[bu+qx.lang.String.firstUp(X[i])]!=null){var T=W[bu+qx.lang.String.firstUp(X[i])]();
this.__fo(T,Q,R,S,O);
}ba[i]=this.__fq(W,V[i],Q,R,S);
}}else{var be={index:i,propertyNames:X,sources:bc,listenerIds:ba,arrayIndexValues:U,targetObject:Q,targetPropertyChain:R,options:S,listeners:Y};
var bb=qx.lang.Function.bind(this.__fh,this,be);
Y.push(bb);
ba[i]=W.addListener(V[i],bb);
}if(W[bu+qx.lang.String.firstUp(X[i])]==null){W=null;
}else if(U[i]!==bt){W=W[bu+qx.lang.String.firstUp(X[i])](U[i]);
}else{W=W[bu+qx.lang.String.firstUp(X[i])]();
}
if(!W){break;
}}var bf={type:bJ,listenerIds:ba,sources:bc,targetListenerIds:bd.listenerIds,targets:bd.targets};
this.__fr(bf,O,P,Q,R);
return bf;
},__fh:function(r){if(r.options&&r.options.onUpdate){r.options.onUpdate(r.sources[r.index],r.targetObject);
}for(var j=r.index+1;j<r.propertyNames.length;j++){var v=r.sources[j];
r.sources[j]=null;

if(!v){continue;
}v.removeListenerById(r.listenerIds[j]);
}var v=r.sources[r.index];
for(var j=r.index+1;j<r.propertyNames.length;j++){if(r.arrayIndexValues[j-1]!==bt){v=v[bu+qx.lang.String.firstUp(r.propertyNames[j-1])](r.arrayIndexValues[j-1]);
}else{v=v[bu+qx.lang.String.firstUp(r.propertyNames[j-1])]();
}r.sources[j]=v;
if(!v){this.__fl(r.targetObject,r.targetPropertyChain);
break;
}if(j==r.propertyNames.length-1){if(qx.Class.implementsInterface(v,qx.data.IListData)){var w=r.arrayIndexValues[j]===br?v.length-1:r.arrayIndexValues[j];
var t=v.getItem(w);
this.__fo(t,r.targetObject,r.targetPropertyChain,r.options,r.sources[r.index]);
r.listenerIds[j]=this.__fq(v,bq,r.targetObject,r.targetPropertyChain,r.options,r.arrayIndexValues[j]);
}else{if(r.propertyNames[j]!=null&&v[bu+qx.lang.String.firstUp(r.propertyNames[j])]!=null){var t=v[bu+qx.lang.String.firstUp(r.propertyNames[j])]();
this.__fo(t,r.targetObject,r.targetPropertyChain,r.options,r.sources[r.index]);
}var u=this.__fk(v,r.propertyNames[j]);
r.listenerIds[j]=this.__fq(v,u,r.targetObject,r.targetPropertyChain,r.options);
}}else{if(r.listeners[j]==null){var s=qx.lang.Function.bind(this.__fh,this,r);
r.listeners.push(s);
}if(qx.Class.implementsInterface(v,qx.data.IListData)){var u=bq;
}else{var u=this.__fk(v,r.propertyNames[j]);
}r.listenerIds[j]=v.addListener(u,r.listeners[j]);
}}},__fi:function(a,b,c,d,f){var l=d.split(bo);
var h=this.__fp(l);
var q=[];
var p=[];
var n=[];
var m=[];
var k=c;
for(var i=0;i<l.length-1;i++){if(h[i]!==bt){m.push(bq);
}else{try{m.push(this.__fk(k,l[i]));
}catch(e){break;
}}q[i]=k;
var o=function(){for(var j=i+1;j<l.length-1;j++){var cA=q[j];
q[j]=null;

if(!cA){continue;
}cA.removeListenerById(n[j]);
}var cA=q[i];
for(var j=i+1;j<l.length-1;j++){var cy=qx.lang.String.firstUp(l[j-1]);
if(h[j-1]!==bt){var cB=h[j-1]===br?cA.getLength()-1:h[j-1];
cA=cA[bu+cy](cB);
}else{cA=cA[bu+cy]();
}q[j]=cA;
if(p[j]==null){p.push(o);
}if(qx.Class.implementsInterface(cA,qx.data.IListData)){var cz=bq;
}else{try{var cz=qx.data.SingleValueBinding.__fk(cA,l[j]);
}catch(e){break;
}}n[j]=cA.addListener(cz,p[j]);
}qx.data.SingleValueBinding.__fj(a,b,c,d);
};
p.push(o);
n[i]=k.addListener(m[i],o);
var g=qx.lang.String.firstUp(l[i]);
if(k[bu+g]==null){k=null;
}else if(h[i]!==bt){k=k[bu+g](h[i]);
}else{k=k[bu+g]();
}
if(!k){break;
}}return {listenerIds:n,targets:q};
},__fj:function(cC,cD,cE,cF){var cJ=this.__fn(cC,cD);

if(cJ!=null){var cL=cD.substring(cD.lastIndexOf(bo)+1,cD.length);
if(cL.charAt(cL.length-1)==bp){var cG=cL.substring(cL.lastIndexOf(bs)+1,cL.length-1);
var cI=cL.substring(0,cL.lastIndexOf(bs));
var cK=cJ[bu+qx.lang.String.firstUp(cI)]();

if(cG==br){cG=cK.length-1;
}
if(cK!=null){var cH=cK.getItem(cG);
}}else{var cH=cJ[bu+qx.lang.String.firstUp(cL)]();
}}this.__fm(cE,cF,cH);
},__fk:function(cN,cO){var cP=this.__ft(cN,cO);
if(cP==null){if(qx.Class.supportsEvent(cN.constructor,cO)){cP=cO;
}else if(qx.Class.supportsEvent(cN.constructor,bq+qx.lang.String.firstUp(cO))){cP=bq+qx.lang.String.firstUp(cO);
}else{throw new qx.core.AssertionError(bA,cO);
}}return cP;
},__fl:function(cW,cX){var cY=this.__fn(cW,cX);

if(cY!=null){var da=cX.substring(cX.lastIndexOf(bo)+1,cX.length);
if(da.charAt(da.length-1)==bp){this.__fm(cW,cX,null);
return;
}if(cY[bH+qx.lang.String.firstUp(da)]!=undefined){cY[bH+qx.lang.String.firstUp(da)]();
}else{cY[bl+qx.lang.String.firstUp(da)](null);
}}},__fm:function(cj,ck,cl){var cp=this.__fn(cj,ck);

if(cp!=null){var cq=ck.substring(ck.lastIndexOf(bo)+1,ck.length);
if(cq.charAt(cq.length-1)==bp){var cm=cq.substring(cq.lastIndexOf(bs)+1,cq.length-1);
var co=cq.substring(0,cq.lastIndexOf(bs));
var cn=cp[bu+qx.lang.String.firstUp(co)]();

if(cm==br){cm=cn.length-1;
}
if(cn!=null){cn.setItem(cm,cl);
}}else{cp[bl+qx.lang.String.firstUp(cq)](cl);
}}},__fn:function(G,H){var K=H.split(bo);
var L=G;
for(var i=0;i<K.length-1;i++){try{var J=K[i];
if(J.indexOf(bp)==J.length-1){var I=J.substring(J.indexOf(bs)+1,J.length-1);
J=J.substring(0,J.indexOf(bs));
}L=L[bu+qx.lang.String.firstUp(J)]();

if(I!=null){if(I==br){I=L.length-1;
}L=L.getItem(I);
I=null;
}}catch(cM){return null;
}}return L;
},__fo:function(ce,cf,cg,ch,ci){ce=this.__fs(ce,cf,cg,ch);
if(ce==null){this.__fl(cf,cg);
}if(ce!=undefined){try{this.__fm(cf,cg,ce);
if(ch&&ch.onUpdate){ch.onUpdate(ci,cf,ce);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(ch&&ch.onSetFail){ch.onSetFail(e);
}else{this.warn("Failed so set value "+ce+" on "+cf+". Error message: "+e);
}}}},__fp:function(bi){var bj=[];
for(var i=0;i<bi.length;i++){var name=bi[i];
if(qx.lang.String.endsWith(name,bp)){var bk=name.substring(name.indexOf(bs)+1,name.indexOf(bp));
if(name.indexOf(bp)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bk!==br){if(bk==bt||isNaN(parseInt(bk))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bs)!=0){bi[i]=name.substring(0,name.indexOf(bs));
bj[i]=bt;
bj[i+1]=bk;
bi.splice(i+1,0,bI);
i++;
}else{bj[i]=bk;
bi.splice(i,1,bI);
}}else{bj[i]=bt;
}}return bj;
},__fq:function(bM,bN,bO,bP,bQ,bR){var bS;
{};
var bU=function(cr,e){if(cr!==bt){if(cr===br){cr=bM.length-1;
}var cu=bM.getItem(cr);
if(cu==undefined){qx.data.SingleValueBinding.__fl(bO,bP);
}var cs=e.getData().start;
var ct=e.getData().end;

if(cr<cs||cr>ct){return;
}}else{var cu=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bM+" by "+bN+" to "+bO+" ("+bP+")");
qx.log.Logger.debug("Data before conversion: "+cu);
}cu=qx.data.SingleValueBinding.__fs(cu,bO,bP,bQ);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cu);
}try{if(cu!=undefined){qx.data.SingleValueBinding.__fm(bO,bP,cu);
}else{qx.data.SingleValueBinding.__fl(bO,bP);
}if(bQ&&bQ.onUpdate){bQ.onUpdate(bM,bO,cu);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bQ&&bQ.onSetFail){bQ.onSetFail(e);
}else{this.warn("Failed so set value "+cu+" on "+bO+". Error message: "+e);
}}};
if(!bR){bR=bt;
}bU=qx.lang.Function.bind(bU,bM,bR);
var bT=bM.addListener(bN,bU);
return bT;
},__fr:function(bY,ca,cb,cc,cd){if(this.__fg[ca.toHashCode()]===undefined){this.__fg[ca.toHashCode()]=[];
}this.__fg[ca.toHashCode()].push([bY,ca,cb,cc,cd]);
},__fs:function(x,y,z,A){if(A&&A.converter){var C;

if(y.getModel){C=y.getModel();
}return A.converter(x,C);
}else{var E=this.__fn(y,z);
var F=z.substring(z.lastIndexOf(bo)+1,z.length);
if(E==null){return x;
}var D=qx.Class.getPropertyDefinition(E.constructor,F);
var B=D==null?bt:D.check;
return this.__fu(x,B);
}},__ft:function(bV,bW){var bX=qx.Class.getPropertyDefinition(bV.constructor,bW);

if(bX==null){return null;
}return bX.event;
},__fu:function(cv,cw){var cx=qx.lang.Type.getClass(cv);
if((cx==bn||cx==bm)&&(cw==bC||cw==bw)){cv=parseInt(cv);
}if((cx==bF||cx==bn||cx==bv)&&cw==bm){cv=cv+bt;
}if((cx==bn||cx==bm)&&(cw==bn||cw==by)){cv=parseFloat(cv);
}return cv;
},removeBindingFromObject:function(db,dc){if(dc.type==bJ){for(var i=0;i<dc.sources.length;i++){if(dc.sources[i]){dc.sources[i].removeListenerById(dc.listenerIds[i]);
}}for(var i=0;i<dc.targets.length;i++){if(dc.targets[i]){dc.targets[i].removeListenerById(dc.targetListenerIds[i]);
}}}else{db.removeListenerById(dc);
}var dd=this.__fg[db.toHashCode()];
if(dd!=undefined){for(var i=0;i<dd.length;i++){if(dd[i][0]==dc){qx.lang.Array.remove(dd,dd[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(M){{};
var N=this.__fg[M.toHashCode()];

if(N!=undefined){for(var i=N.length-1;i>=0;i--){this.removeBindingFromObject(M,N[i][0]);
}}},getAllBindingsForObject:function(bh){if(this.__fg[bh.toHashCode()]===undefined){this.__fg[bh.toHashCode()]=[];
}return this.__fg[bh.toHashCode()];
},removeAllBindings:function(){for(var bL in this.__fg){var bK=qx.core.ObjectRegistry.fromHashCode(bL);
if(bK==null){delete this.__fg[bL];
continue;
}this.removeAllBindingsForObject(bK);
}this.__fg={};
},getAllBindings:function(){return this.__fg;
},showBindingInLog:function(cQ,cR){var cT;
for(var i=0;i<this.__fg[cQ.toHashCode()].length;i++){if(this.__fg[cQ.toHashCode()][i][0]==cR){cT=this.__fg[cQ.toHashCode()][i];
break;
}}
if(cT===undefined){var cS=bx;
}else{var cS=bz+cT[1]+bG+cT[2]+bD+cT[3]+bG+cT[4]+bE;
}qx.log.Logger.debug(cS);
},showAllBindingsInLog:function(){for(var cV in this.__fg){var cU=qx.core.ObjectRegistry.fromHashCode(cV);

for(var i=0;i<this.__fg[cV].length;i++){this.showBindingInLog(cU,this.__fg[cV][i][0]);
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
(function(){var m="losecapture",l="qx.client",k="blur",j="focus",i="click",h="qx.event.dispatch.MouseCapture",g="capture",f="scroll";
qx.Class.define(h,{extend:qx.event.dispatch.AbstractBubbling,construct:function(s,t){arguments.callee.base.call(this,s);
this.__fv=s.getWindow();
this.__fw=t;
s.addListener(this.__fv,k,this.releaseCapture,this);
s.addListener(this.__fv,j,this.releaseCapture,this);
s.addListener(this.__fv,f,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fw:null,__fx:null,__fy:true,__fv:null,_getParent:function(c){return c.parentNode;
},canDispatchEvent:function(n,event,o){return (this.__fx&&this.__fz[o]);
},dispatchEvent:function(d,event,e){if(e==i){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fy||!qx.dom.Hierarchy.contains(this.__fx,d)){d=this.__fx;
}arguments.callee.base.call(this,d,event,e);
},__fz:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(p,q){var q=q!==false;

if(this.__fx===p&&this.__fy==q){return;
}
if(this.__fx){this.releaseCapture();
}this.nativeSetCapture(p,q);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(p,m,function(){qx.bom.Event.removeNativeListener(p,m,arguments.callee);
self.releaseCapture();
});
}this.__fy=q;
this.__fx=p;
this.__fw.fireEvent(p,g,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fx;
},releaseCapture:function(){var r=this.__fx;

if(!r){return;
}this.__fx=null;
this.__fw.fireEvent(r,m,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(r);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(l,{"mshtml":function(a,b){a.setCapture(b!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(l,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fx=this.__fv=this.__fw=null;
},defer:function(u){qx.event.Registration.addDispatcher(u);
}});
})();
(function(){var k="qx.client",j="qx.bom.Viewport";
qx.Class.define(j,{statics:{getWidth:qx.core.Variant.select(k,{"opera":function(q){if(qx.bom.client.Engine.VERSION<9.5){return (q||window).document.body.clientWidth;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"default":function(e){var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}}),getHeight:qx.core.Variant.select(k,{"opera":function(o){if(qx.bom.client.Engine.VERSION<9.5){return (o||window).document.body.clientHeight;
}else{var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}},"webkit":function(h){if(qx.bom.client.Engine.VERSION<523.15){return (h||window).innerHeight;
}else{var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientHeight:i.body.clientHeight;
}},"default":function(l){var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(k,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollLeft||b.body.scrollLeft;
},"default":function(g){return (g||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(k,{"mshtml":function(c){var d=(c||window).document;
return d.documentElement.scrollTop||d.body.scrollTop;
},"default":function(n){return (n||window).pageYOffset;
}})}});
})();
(function(){var M=",",L="rgb(",K=")",J="qx.theme.manager.Color",I="qx.util.ColorUtil";
qx.Class.define(I,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(l){return this.NAMED[l]!==undefined;
},isSystemColor:function(u){return this.SYSTEM[u]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(J);
},isThemedColor:function(bb){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(bb);
},stringToRgb:function(d){if(this.supportsThemes()&&this.isThemedColor(d)){var d=qx.theme.manager.Color.getInstance().resolveDynamic(d);
}
if(this.isNamedColor(d)){return this.NAMED[d];
}else if(this.isSystemColor(d)){throw new Error("Could not convert system colors to RGB: "+d);
}else if(this.isRgbString(d)){return this.__fC();
}else if(this.isHex3String(d)){return this.__fE();
}else if(this.isHex6String(d)){return this.__fF();
}throw new Error("Could not parse color: "+d);
},cssStringToRgb:function(ba){if(this.isNamedColor(ba)){return this.NAMED[ba];
}else if(this.isSystemColor(ba)){throw new Error("Could not convert system colors to RGB: "+ba);
}else if(this.isRgbString(ba)){return this.__fC();
}else if(this.isRgbaString(ba)){return this.__fD();
}else if(this.isHex3String(ba)){return this.__fE();
}else if(this.isHex6String(ba)){return this.__fF();
}throw new Error("Could not parse color: "+ba);
},stringToRgbString:function(bi){return this.rgbToRgbString(this.stringToRgb(bi));
},rgbToRgbString:function(k){return L+k[0]+M+k[1]+M+k[2]+K;
},rgbToHexString:function(bc){return (qx.lang.String.pad(bc[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(bc[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(bc[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(N){return this.isThemedColor(N)||this.isNamedColor(N)||this.isHex3String(N)||this.isHex6String(N)||this.isRgbString(N);
},isCssString:function(bd){return this.isSystemColor(bd)||this.isNamedColor(bd)||this.isHex3String(bd)||this.isHex6String(bd)||this.isRgbString(bd);
},isHex3String:function(O){return this.REGEXP.hex3.test(O);
},isHex6String:function(a){return this.REGEXP.hex6.test(a);
},isRgbString:function(be){return this.REGEXP.rgb.test(be);
},isRgbaString:function(c){return this.REGEXP.rgba.test(c);
},__fC:function(){var bh=parseInt(RegExp.$1,10);
var bg=parseInt(RegExp.$2,10);
var bf=parseInt(RegExp.$3,10);
return [bh,bg,bf];
},__fD:function(){var o=parseInt(RegExp.$1,10);
var n=parseInt(RegExp.$2,10);
var m=parseInt(RegExp.$3,10);
return [o,n,m];
},__fE:function(){var Y=parseInt(RegExp.$1,16)*17;
var X=parseInt(RegExp.$2,16)*17;
var W=parseInt(RegExp.$3,16)*17;
return [Y,X,W];
},__fF:function(){var j=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var h=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var e=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [j,h,e];
},hex3StringToRgb:function(v){if(this.isHex3String(v)){return this.__fE(v);
}throw new Error("Invalid hex3 value: "+v);
},hex6StringToRgb:function(V){if(this.isHex6String(V)){return this.__fF(V);
}throw new Error("Invalid hex6 value: "+V);
},hexStringToRgb:function(s){if(this.isHex3String(s)){return this.__fE(s);
}
if(this.isHex6String(s)){return this.__fF(s);
}throw new Error("Invalid hex value: "+s);
},rgbToHsb:function(w){var y,z,B;
var H=w[0];
var E=w[1];
var x=w[2];
var G=(H>E)?H:E;

if(x>G){G=x;
}var A=(H<E)?H:E;

if(x<A){A=x;
}B=G/255.0;

if(G!=0){z=(G-A)/G;
}else{z=0;
}
if(z==0){y=0;
}else{var D=(G-H)/(G-A);
var F=(G-E)/(G-A);
var C=(G-x)/(G-A);

if(H==G){y=C-F;
}else if(E==G){y=2.0+D-C;
}else{y=4.0+F-D;
}y=y/6.0;

if(y<0){y=y+1.0;
}}return [Math.round(y*360),Math.round(z*100),Math.round(B*100)];
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
(function(){var n="/",m="0",l="qx/static",k="http://",j="https://",i="file://",h="qx.util.AliasManager",g="singleton",f=".",e="static";
qx.Class.define(h,{type:g,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__fG={};
this.add(e,l);
},members:{__fG:null,_preprocess:function(a){var d=this._getDynamic();

if(d[a]===false){return a;
}else if(d[a]===undefined){if(a.charAt(0)===n||a.charAt(0)===f||a.indexOf(k)===0||a.indexOf(j)===m||a.indexOf(i)===0){d[a]=false;
return a;
}
if(this.__fG[a]){return this.__fG[a];
}var c=a.substring(0,a.indexOf(n));
var b=this.__fG[c];

if(b!==undefined){d[a]=b+a.substring(c.length);
}}return a;
},add:function(r,s){this.__fG[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(n))===r){u[t]=s+t.substring(r.length);
}}},remove:function(o){delete this.__fG[o];
},resolve:function(p){var q=this._getDynamic();

if(p!==null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__fG=null;
}});
})();
(function(){var o="qx.dynlocale",n="text",m="Boolean",l="qx.client",k="color",j="userSelect",i="changeLocale",h="enabled",g="none",f="on",J="_applyTextAlign",I="qx.ui.core.Widget",H="gecko",G="changeTextAlign",F="_applyWrap",E="changeValue",D="changeContent",C="qx.ui.basic.Label",B="A",A="_applyValue",v="center",w="_applyBuddy",t="String",u="textAlign",r="right",s="changeRich",p="_applyRich",q="click",x="label",y="webkit",z="left";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(L){arguments.callee.base.call(this);

if(L!=null){this.setValue(L);
}
if(qx.core.Variant.isSet(o,f)){qx.locale.Manager.getInstance().addListener(i,this._onChangeLocale,this);
}},properties:{rich:{check:m,init:false,event:s,apply:p},wrap:{check:m,init:true,apply:F},value:{check:t,apply:A,event:E,nullable:true},buddy:{check:I,apply:w,nullable:true,init:null},textAlign:{check:[z,v,r],nullable:true,themeable:true,apply:J,event:G},appearance:{refine:true,init:x},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__fJ:null,__fK:null,__fL:null,__fM:null,_getContentHint:function(){if(this.__fK){this.__fN=this.__fO();
delete this.__fK;
}return {width:this.__fN.width,height:this.__fN.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(P){if(qx.core.Variant.isSet(l,H)){if(P&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,P);
if(qx.core.Variant.isSet(l,y)){this.getContainerElement().setStyle(j,P?n:g);
this.getContentElement().setStyle(j,P?n:g);
}},_getContentHeightForWidth:function(K){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__fO(K).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(S,T){this.getContentElement().setStyle(u,S);
},_applyTextColor:function(Q,R){if(Q){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(Q));
}else{this.getContentElement().removeStyle(k);
}},__fN:{width:0,height:0},_applyFont:function(M,N){var O;

if(M){this.__fJ=qx.theme.manager.Font.getInstance().resolve(M);
O=this.__fJ.getStyles();
}else{this.__fJ=null;
O=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(O);
this.__fK=true;
qx.ui.core.queue.Layout.add(this);
},__fO:function(U){var Y=qx.bom.Label;
var W=this.getFont();
var V=W?this.__fJ.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||B;
var X=this.getRich();
return X?Y.getHtmlSize(content,V,U):Y.getTextSize(content,V);
},_applyBuddy:function(ba,bb){if(bb!=null){bb.removeBinding(this.__fL);
this.__fL=null;
this.removeListenerById(this.__fM);
this.__fM=null;
}
if(ba!=null){this.__fL=ba.bind(h,this,h);
this.__fM=this.addListener(q,ba.focus,ba);
}},_applyRich:function(bc){this.getContentElement().setRich(bc);
this.__fK=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(a,b){if(a&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(c,d){this.getContentElement().setValue(c);
this.__fK=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(D,c,d);
}},destruct:function(){if(qx.core.Variant.isSet(o,f)){qx.locale.Manager.getInstance().removeListener(i,this._onChangeLocale,this);
}if(this.__fL!=null){var bd=this.getBuddy();

if(bd!=null&&!bd.isDisposed()){bd.removeBinding(this.__fL);
}}this.__fJ=this.__fL=null;
}});
})();
(function(){var Y="keydown",X="qx.client",W="keypress",V="NumLock",U="keyup",T="Enter",S="0",R="9",Q="-",P="PageUp",cg="+",cf="PrintScreen",ce="gecko",cd="A",cc="Z",cb="Left",ca="F5",bY="Down",bX="Up",bW="F11",bg="F6",bh="useraction",be="F3",bf="keyinput",bc="Insert",bd="F8",ba="End",bb="/",bo="Delete",bp="*",bB="F1",bx="F4",bJ="Home",bE="F2",bS="F12",bO="PageDown",bt="F7",bV="F9",bU="F10",bT="Right",bs="text",bv="Escape",bw="webkit",bz="5",bC="3",bF="Meta",bL="7",bQ="CapsLock",bi="input",bj="Control",bu="Space",bI="Tab",bH="Shift",bG="Pause",bN="Unidentified",bM="qx.event.handler.Keyboard",bD="mshtml",bK="mshtml|webkit",M="6",bP="off",bk="Apps",bl="4",by="Alt",N="2",O="Scroll",br="1",bm="8",bn="Win",bq="autoComplete",bA=",",bR="Backspace";
qx.Class.define(bM,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this.__fP=k;
this.__fQ=k.getWindow();
if(qx.core.Variant.isSet(X,ce)){this.__fR=this.__fQ;
}else{this.__fR=this.__fQ.document.documentElement;
}this.__fS={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(A){if(this._identifierToKeyCodeMap[A]){return true;
}
if(A.length!=1){return false;
}
if(A>=S&&A<=R){return true;
}
if(A>=cd&&A<=cc){return true;
}
switch(A){case cg:case Q:case bp:case bb:return true;
default:return false;
}}},members:{__fT:null,__fP:null,__fQ:null,__fR:null,__fS:null,__fU:null,__fV:null,__fW:null,canHandleEvent:function(cK,cL){},registerEvent:function(cu,cv,cw){},unregisterEvent:function(l,m,n){},_fireInputEvent:function(cm,cn){var co=this.__fX();
if(co&&co.offsetWidth!=0){var event=qx.event.Registration.createEvent(bf,qx.event.type.KeyInput,[cm,co,cn]);
this.__fP.dispatchEvent(co,event);
}if(this.__fQ){qx.event.Registration.fireEvent(this.__fQ,bh,qx.event.type.Data,[bf]);
}},_fireSequenceEvent:function(cx,cy,cz){var cA=this.__fX();
var cB=cx.keyCode;
var event=qx.event.Registration.createEvent(cy,qx.event.type.KeySequence,[cx,cA,cz]);
this.__fP.dispatchEvent(cA,event);
if(qx.core.Variant.isSet(X,bK)){if(cy==Y&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cB)&&!this._emulateKeyPress[cB]){this._fireSequenceEvent(cx,W,cz);
}}}if(this.__fQ){qx.event.Registration.fireEvent(this.__fQ,bh,qx.event.type.Data,[cy]);
}},__fX:function(){var h=this.__fP.getHandler(qx.event.handler.Focus);
var i=h.getActive();
if(!i||i.offsetWidth==0){i=h.getFocus();
}if(!i||i.offsetWidth==0){i=this.__fP.getWindow().document.body;
}return i;
},_initKeyObserver:function(){this.__fT=qx.lang.Function.listener(this.__fY,this);
this.__fW=qx.lang.Function.listener(this.__gb,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fR,U,this.__fT);
Event.addNativeListener(this.__fR,Y,this.__fT);
Event.addNativeListener(this.__fR,W,this.__fW);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fR,U,this.__fT);
Event.removeNativeListener(this.__fR,Y,this.__fT);
Event.removeNativeListener(this.__fR,W,this.__fW);

for(var f in (this.__fV||{})){var e=this.__fV[f];
Event.removeNativeListener(e.target,W,e.callback);
}delete (this.__fV);
},__fY:qx.event.GlobalError.observeMethod(qx.core.Variant.select(X,{"mshtml":function(cC){cC=window.event||cC;
var cF=cC.keyCode;
var cD=0;
var cE=cC.type;
if(!(this.__fS[cF]==Y&&cE==Y)){this._idealKeyHandler(cF,cD,cE,cC);
}if(cE==Y){if(this._isNonPrintableKeyCode(cF)||this._emulateKeyPress[cF]){this._idealKeyHandler(cF,cD,W,cC);
}}this.__fS[cF]=cE;
},"gecko":function(ch){var cl=this._keyCodeFix[ch.keyCode]||ch.keyCode;
var cj=0;
var ck=ch.type;
if(qx.bom.client.Platform.WIN){var ci=cl?this._keyCodeToIdentifier(cl):this._charCodeToIdentifier(cj);

if(!(this.__fS[ci]==Y&&ck==Y)){this._idealKeyHandler(cl,cj,ck,ch);
}this.__fS[ci]=ck;
}else{this._idealKeyHandler(cl,cj,ck,ch);
}this.__ga(ch.target,ck,cl);
},"webkit":function(cG){var cJ=0;
var cH=0;
var cI=cG.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cI==U||cI==Y){cJ=this._charCode2KeyCode[cG.charCode]||cG.keyCode;
}else{if(this._charCode2KeyCode[cG.charCode]){cJ=this._charCode2KeyCode[cG.charCode];
}else{cH=cG.charCode;
}}this._idealKeyHandler(cJ,cH,cI,cG);
}else{cJ=cG.keyCode;
if(!(this.__fS[cJ]==Y&&cI==Y)){this._idealKeyHandler(cJ,cH,cI,cG);
}if(cI==Y){if(this._isNonPrintableKeyCode(cJ)||this._emulateKeyPress[cJ]){this._idealKeyHandler(cJ,cH,W,cG);
}}this.__fS[cJ]=cI;
}},"opera":function(B){this.__fU=B.keyCode;
this._idealKeyHandler(B.keyCode,0,B.type,B);
}})),__ga:qx.core.Variant.select(X,{"gecko":function(v,w,x){if(w===Y&&(x==33||x==34||x==38||x==40)&&v.type==bs&&v.tagName.toLowerCase()===bi&&v.getAttribute(bq)!==bP){if(!this.__fV){this.__fV={};
}var z=qx.core.ObjectRegistry.toHashCode(v);

if(this.__fV[z]){return;
}var self=this;
this.__fV[z]={target:v,callback:function(g){qx.bom.Event.stopPropagation(g);
self.__gb(g);
}};
var y=qx.event.GlobalError.observeMethod(this.__fV[z].callback);
qx.bom.Event.addNativeListener(v,W,y);
}},"default":null}),__gb:qx.event.GlobalError.observeMethod(qx.core.Variant.select(X,{"mshtml":function(p){p=window.event||p;

if(this._charCode2KeyCode[p.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[p.keyCode],0,p.type,p);
}else{this._idealKeyHandler(0,p.keyCode,p.type,p);
}},"gecko":function(I){var L=this._keyCodeFix[I.keyCode]||I.keyCode;
var J=I.charCode;
var K=I.type;
this._idealKeyHandler(L,J,K,I);
},"webkit":function(C){if(qx.bom.client.Engine.VERSION<525.13){var F=0;
var D=0;
var E=C.type;

if(E==U||E==Y){F=this._charCode2KeyCode[C.charCode]||C.keyCode;
}else{if(this._charCode2KeyCode[C.charCode]){F=this._charCode2KeyCode[C.charCode];
}else{D=C.charCode;
}}this._idealKeyHandler(F,D,E,C);
}else{if(this._charCode2KeyCode[C.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[C.keyCode],0,C.type,C);
}else{this._idealKeyHandler(0,C.keyCode,C.type,C);
}}},"opera":function(cp){var cr=cp.keyCode;
var cq=cp.type;
if(cr!=this.__fU){this._idealKeyHandler(0,this.__fU,cq,cp);
}else{if(this._keyCodeToIdentifierMap[cp.keyCode]){this._idealKeyHandler(cp.keyCode,0,cp.type,cp);
}else{this._idealKeyHandler(0,cp.keyCode,cp.type,cp);
}}}})),_idealKeyHandler:function(q,r,s,t){var u;
if(q||(!q&&!r)){u=this._keyCodeToIdentifier(q);
this._fireSequenceEvent(t,s,u);
}else{u=this._charCodeToIdentifier(r);
this._fireSequenceEvent(t,W,u);
this._fireInputEvent(t,r);
}},_specialCharCodeMap:{8:bR,9:bI,13:T,27:bv,32:bu},_emulateKeyPress:qx.core.Variant.select(X,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bH,17:bj,18:by,20:bQ,224:bF,37:cb,38:bX,39:bT,40:bY,33:P,34:bO,35:ba,36:bJ,45:bc,46:bo,112:bB,113:bE,114:be,115:bx,116:ca,117:bg,118:bt,119:bd,120:bV,121:bU,122:bW,123:bS,144:V,44:cf,145:O,19:bG,91:bn,93:bk},_numpadToCharCode:{96:S.charCodeAt(0),97:br.charCodeAt(0),98:N.charCodeAt(0),99:bC.charCodeAt(0),100:bl.charCodeAt(0),101:bz.charCodeAt(0),102:M.charCodeAt(0),103:bL.charCodeAt(0),104:bm.charCodeAt(0),105:R.charCodeAt(0),106:bp.charCodeAt(0),107:cg.charCodeAt(0),109:Q.charCodeAt(0),110:bA.charCodeAt(0),111:bb.charCodeAt(0)},_charCodeA:cd.charCodeAt(0),_charCodeZ:cc.charCodeAt(0),_charCode0:S.charCodeAt(0),_charCode9:R.charCodeAt(0),_isNonPrintableKeyCode:function(cs){return this._keyCodeToIdentifierMap[cs]?true:false;
},_isIdentifiableKeyCode:function(o){if(o>=this._charCodeA&&o<=this._charCodeZ){return true;
}if(o>=this._charCode0&&o<=this._charCode9){return true;
}if(this._specialCharCodeMap[o]){return true;
}if(this._numpadToCharCode[o]){return true;
}if(this._isNonPrintableKeyCode(o)){return true;
}return false;
},_keyCodeToIdentifier:function(G){if(this._isIdentifiableKeyCode(G)){var H=this._numpadToCharCode[G];

if(H){return String.fromCharCode(H);
}return (this._keyCodeToIdentifierMap[G]||this._specialCharCodeMap[G]||String.fromCharCode(G));
}else{return bN;
}},_charCodeToIdentifier:function(ct){return this._specialCharCodeMap[ct]||String.fromCharCode(ct).toUpperCase();
},_identifierToKeyCode:function(j){return qx.event.handler.Keyboard._identifierToKeyCodeMap[j]||j.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fU=this.__fP=this.__fQ=this.__fR=this.__fS=null;
},defer:function(a,b,c){qx.event.Registration.addHandler(a);
if(!a._identifierToKeyCodeMap){a._identifierToKeyCodeMap={};

for(var d in b._keyCodeToIdentifierMap){a._identifierToKeyCodeMap[b._keyCodeToIdentifierMap[d]]=parseInt(d,10);
}
for(var d in b._specialCharCodeMap){a._identifierToKeyCodeMap[b._specialCharCodeMap[d]]=parseInt(d,10);
}}
if(qx.core.Variant.isSet(X,bD)){b._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(X,ce)){b._keyCodeFix={12:b._identifierToKeyCode(V)};
}else if(qx.core.Variant.isSet(X,bw)){if(qx.bom.client.Engine.VERSION<525.13){b._charCode2KeyCode={63289:b._identifierToKeyCode(V),63276:b._identifierToKeyCode(P),63277:b._identifierToKeyCode(bO),63275:b._identifierToKeyCode(ba),63273:b._identifierToKeyCode(bJ),63234:b._identifierToKeyCode(cb),63232:b._identifierToKeyCode(bX),63235:b._identifierToKeyCode(bT),63233:b._identifierToKeyCode(bY),63272:b._identifierToKeyCode(bo),63302:b._identifierToKeyCode(bc),63236:b._identifierToKeyCode(bB),63237:b._identifierToKeyCode(bE),63238:b._identifierToKeyCode(be),63239:b._identifierToKeyCode(bx),63240:b._identifierToKeyCode(ca),63241:b._identifierToKeyCode(bg),63242:b._identifierToKeyCode(bt),63243:b._identifierToKeyCode(bd),63244:b._identifierToKeyCode(bV),63245:b._identifierToKeyCode(bU),63246:b._identifierToKeyCode(bW),63247:b._identifierToKeyCode(bS),63248:b._identifierToKeyCode(cf),3:b._identifierToKeyCode(T),12:b._identifierToKeyCode(V),13:b._identifierToKeyCode(T)};
}else{b._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var j="",i="qx.client",h="readOnly",g="accessKey",f="qx.bom.element.Attribute",e="rowSpan",d="vAlign",c="className",b="textContent",a="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",o="dateTime",m="maxLength",n="mshtml",k="cellPadding",l="colSpan";
qx.Class.define(f,{statics:{__gc:{names:{"class":c,"for":x,html:q,text:qx.core.Variant.isSet(i,n)?r:b,colspan:l,rowspan:e,valign:d,datetime:o,accesskey:g,tabindex:p,maxlength:m,readonly:h,longdesc:w,cellpadding:k,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,maxLength:10000000,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(E){var F=[];
var H=this.__gc.runtime;

for(var G in E){if(!H[G]){F.push(G,t,E[G],a);
}}return F.join(j);
},get:qx.core.Variant.select(i,{"mshtml":function(y,name){var A=this.__gc;
var z;
name=A.names[name]||name;
if(A.original[name]){z=y.getAttribute(name,2);
}else if(A.property[name]){if(A.propertyDefault[name]&&z==A.propertyDefault[name]){return null;
}z=y[name];
}else{z=y.getAttribute(name);
}if(A.bools[name]){return !!z;
}return z;
},"default":function(I,name){var K=this.__gc;
var J;
name=K.names[name]||name;
if(K.property[name]){if(K.propertyDefault[name]&&J==K.propertyDefault[name]){return null;
}J=I[name];

if(J==null){J=I.getAttribute(name);
}}else{J=I.getAttribute(name);
}if(K.bools[name]){return !!J;
}return J;
}}),set:function(B,name,C){var D=this.__gc;
name=D.names[name]||name;
if(D.bools[name]){C=!!C;
}if(D.property[name]){if(C==null){C=D.propertyDefault[name];

if(C===undefined){C=null;
}}B[name]=C;
}else{if(C===true){B.setAttribute(name,name);
}else if(C===false||C===null){B.removeAttribute(name);
}else{B.setAttribute(name,C);
}}},reset:function(L,name){this.set(L,name,null);
}}});
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
(function(){var S="px",R="qx.client",Q="div",P="img",O="",N="no-repeat",M="scale-x",L="mshtml",K="scale",J="scale-y",bp="qx/icon",bo="repeat",bn=".png",bm="crop",bl="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",bk='<div style="',bj="repeat-y",bi='<img src="',bh="qx.bom.element.Decoration",bf="', sizingMethod='",ba="png",bb="')",X='"></div>',Y='"/>',V='" style="',W="none",T="webkit",U=" ",bc="repeat-x",bd="DXImageTransform.Microsoft.AlphaImageLoader",be="absolute";
qx.Class.define(bh,{statics:{DEBUG:false,__gd:{},__ge:qx.core.Variant.isSet(R,L),__gf:qx.core.Variant.select(R,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gg:{"scale-x":P,"scale-y":P,"scale":P,"repeat":Q,"no-repeat":Q,"repeat-x":Q,"repeat-y":Q},update:function(n,o,p,q){var s=this.getTagName(p,o);

if(s!=n.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var t=this.getAttributes(o,p,q);

if(s===P){n.src=t.src;
}if(n.style.backgroundPosition!=O&&t.style.backgroundPosition===undefined){t.style.backgroundPosition=null;
}if(n.style.clip!=O&&t.style.clip===undefined){t.style.clip=null;
}var r=qx.bom.element.Style;
r.setStyles(n,t.style);
if(this.__ge){try{n.filters[bd].apply();
}catch(e){}}},create:function(bq,br,bs){var bt=this.getTagName(br,bq);
var bv=this.getAttributes(bq,br,bs);
var bu=qx.bom.element.Style.compile(bv.style);

if(bt===P){return bi+bv.src+V+bu+Y;
}else{return bk+bu+X;
}},getTagName:function(bO,bP){if(qx.core.Variant.isSet(R,L)){if(bP&&this.__ge&&this.__gf[bO]&&qx.lang.String.endsWith(bP,bn)){return Q;
}}return this.__gg[bO];
},getAttributes:function(bQ,bR,bS){if(!bS){bS={};
}
if(!bS.position){bS.position=be;
}
if(qx.core.Variant.isSet(R,L)){bS.fontSize=0;
bS.lineHeight=0;
}else if(qx.core.Variant.isSet(R,T)){bS.WebkitUserDrag=W;
}var bU=qx.util.ResourceManager.getInstance().getImageFormat(bQ)||qx.io.ImageLoader.getFormat(bQ);
{};
var bT;
if(this.__ge&&this.__gf[bR]&&bU===ba){bT=this.__gj(bS,bR,bQ);
}else{if(bR===K){bT=this.__gk(bS,bR,bQ);
}else if(bR===M||bR===J){bT=this.__gl(bS,bR,bQ);
}else{bT=this.__go(bS,bR,bQ);
}}return bT;
},__gh:function(bL,bM,bN){if(bL.width==null&&bM!=null){bL.width=bM+S;
}
if(bL.height==null&&bN!=null){bL.height=bN+S;
}return bL;
},__gi:function(bI){var bJ=qx.util.ResourceManager.getInstance().getImageWidth(bI)||qx.io.ImageLoader.getWidth(bI);
var bK=qx.util.ResourceManager.getInstance().getImageHeight(bI)||qx.io.ImageLoader.getHeight(bI);
return {width:bJ,height:bK};
},__gj:function(bB,bC,bD){var bG=this.__gi(bD);
bB=this.__gh(bB,bG.width,bG.height);
var bF=bC==N?bm:K;
var bE=bl+qx.util.ResourceManager.getInstance().toUri(bD)+bf+bF+bb;
bB.filter=bE;
bB.backgroundImage=bB.backgroundRepeat=O;
return {style:bB};
},__gk:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance().toUri(by);
var bA=this.__gi(by);
bw=this.__gh(bw,bA.width,bA.height);
return {src:bz,style:bw};
},__gl:function(a,b,c){var h=qx.util.ResourceManager.getInstance();
var g=h.isClippedImage(c);
var i=this.__gi(c);

if(g){var f=h.getData(c);
var d=h.toUri(f[4]);

if(b===M){a=this.__gm(a,f,i.height);
}else{a=this.__gn(a,f,i.width);
}return {src:d,style:a};
}else{{};

if(b==M){a.height=i.height==null?null:i.height+S;
}else if(b==J){a.width=i.width==null?null:i.width+S;
}var d=h.toUri(c);
return {src:d,style:a};
}},__gm:function(j,k,l){var m=qx.util.ResourceManager.getInstance().getImageHeight(k[4]);
j.clip={top:-k[6],height:l};
j.height=m+S;
if(j.top!=null){j.top=(parseInt(j.top,10)+k[6])+S;
}else if(j.bottom!=null){j.bottom=(parseInt(j.bottom,10)+l-m-k[6])+S;
}return j;
},__gn:function(bV,bW,bX){var bY=qx.util.ResourceManager.getInstance().getImageWidth(bW[4]);
bV.clip={left:-bW[5],width:bX};
bV.width=bY+S;
if(bV.left!=null){bV.left=(parseInt(bV.left,10)+bW[5])+S;
}else if(bV.right!=null){bV.right=(parseInt(bV.right,10)+bX-bY-bW[5])+S;
}return bV;
},__go:function(B,C,D){var I=qx.util.ResourceManager.getInstance().isClippedImage(D);
var H=this.__gi(D);
if(I&&C!==bo){var G=qx.util.ResourceManager.getInstance().getData(D);
var F=qx.bom.element.Background.getStyles(G[4],C,G[5],G[6]);

for(var E in F){B[E]=F[E];
}
if(H.width!=null&&B.width==null&&(C==bj||C===N)){B.width=H.width+S;
}
if(H.height!=null&&B.height==null&&(C==bc||C===N)){B.height=H.height+S;
}return {style:B};
}else{{};
B=this.__gh(B,H.width,H.height);
B=this.__gp(B,D,C);
return {style:B};
}},__gp:function(u,v,w){var top=null;
var A=null;

if(u.backgroundPosition){var x=u.backgroundPosition.split(U);
A=parseInt(x[0]);

if(isNaN(A)){A=x[0];
}top=parseInt(x[1]);

if(isNaN(top)){top=x[1];
}}var z=qx.bom.element.Background.getStyles(v,w,A,top);

for(var y in z){u[y]=z[y];
}if(u.filter){u.filter=O;
}return u;
},__gq:function(bH){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bH)&&bH.indexOf(bp)==-1){if(!this.__gd[bH]){qx.log.Logger.debug("Potential clipped image candidate: "+bH);
this.__gd[bH]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(R,{"mshtml":function(){return qx.bom.element.Decoration.__ge;
},"default":function(){return false;
}})}});
})();
(function(){var e="appearance",d="qx.ui.core.queue.Appearance";
qx.Class.define(d,{statics:{__gr:{},remove:function(a){delete this.__gr[a.$$hash];
},add:function(b){var c=this.__gr;

if(c[b.$$hash]){return;
}c[b.$$hash]=b;
qx.ui.core.queue.Manager.scheduleFlush(e);
},has:function(f){return !!this.__gr[f.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__gr;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var q="top",p="right",o="bottom",n="left",m="align-start",l="qx.util.placement.AbstractAxis",k="edge-start",j="align-end",i="edge-end",h="-",e="best-fit",g="qx.util.placement.Placement",f="keep-align",d="direct",c='__gs';
qx.Class.define(g,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__gs=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:l},axisY:{check:l},edge:{check:[q,p,o,n],init:q},align:{check:[q,p,o,n],init:p}},statics:{__gt:null,compute:function(s,t,u,v,w,x,y){this.__gt=this.__gt||new qx.util.placement.Placement();
var B=w.split(h);
var A=B[0];
var z=B[1];
this.__gt.set({axisX:this.__gx(x),axisY:this.__gx(y),edge:A,align:z});
return this.__gt.compute(s,t,u,v);
},__gu:null,__gv:null,__gw:null,__gx:function(r){switch(r){case d:this.__gu=this.__gu||new qx.util.placement.DirectAxis();
return this.__gu;
case f:this.__gv=this.__gv||new qx.util.placement.KeepAlignAxis();
return this.__gv;
case e:this.__gw=this.__gw||new qx.util.placement.BestFitAxis();
return this.__gw;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__gs:null,compute:function(C,D,E,F){{};
var G=this.getAxisX()||this.__gs;
var I=G.computeStart(C.width,{start:E.left,end:E.right},{start:F.left,end:F.right},D.width,this.__gy());
var H=this.getAxisY()||this.__gs;
var top=H.computeStart(C.height,{start:E.top,end:E.bottom},{start:F.top,end:F.bottom},D.height,this.__gz());
return {left:I,top:top};
},__gy:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==n){return k;
}else if(K==p){return i;
}else if(J==n){return m;
}else if(J==p){return j;
}},__gz:function(){var b=this.getEdge();
var a=this.getAlign();

if(b==q){return k;
}else if(b==o){return i;
}else if(a==q){return m;
}else if(a==o){return j;
}}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(f){return arguments.length==1;
},getEnabled:function(){},setRequired:function(e){return arguments.length==1;
},getRequired:function(){},setValid:function(a){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(d){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(H,stop,I){var parent=H.parentNode;
var N=qx.dom.Node.getDocument(H);
var J=N.body;
var V,T,Q;
var X,O,Y;
var R,ba,bd;
var bb,L,U,K;
var P,bc,S;
var M=I===g;
var W=I===c;
stop=stop?stop.parentNode:N;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){T=parent.scrollLeft;
Q=T+qx.bom.Viewport.getWidth();
X=qx.bom.Viewport.getWidth();
O=parent.clientWidth;
Y=parent.scrollWidth;
R=0;
ba=0;
bd=0;
}else{V=qx.bom.element.Location.get(parent);
T=V.left;
Q=V.right;
X=parent.offsetWidth;
O=parent.clientWidth;
Y=parent.scrollWidth;
R=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
ba=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
bd=X-O-R-ba;
}bb=qx.bom.element.Location.get(H);
L=bb.left;
U=bb.right;
K=H.offsetWidth;
P=L-T-R;
bc=U-Q+ba;
S=0;
if(M){S=P;
}else if(W){S=bc+bd;
}else if(P<0||K>O){S=P;
}else if(bc>0){S=bc+bd;
}parent.scrollLeft+=S;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===J){break;
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
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var v="qx.client",u="qx.dom.Hierarchy",t="previousSibling",s="*",r="nextSibling",q="parentNode";
qx.Class.define(u,{statics:{getNodeIndex:function(m){var n=0;

while(m&&(m=m.previousSibling)){n++;
}return n;
},getElementIndex:function(a){var b=0;
var c=qx.dom.Node.ELEMENT;

while(a&&(a=a.previousSibling)){if(a.nodeType==c){b++;
}}return b;
},getNextElementSibling:function(J){while(J&&(J=J.nextSibling)&&!qx.dom.Node.isElement(J)){continue;
}return J||null;
},getPreviousElementSibling:function(x){while(x&&(x=x.previousSibling)&&!qx.dom.Node.isElement(x)){continue;
}return x||null;
},contains:qx.core.Variant.select(v,{"webkit|mshtml|opera":function(L,M){if(qx.dom.Node.isDocument(L)){var N=qx.dom.Node.getDocument(M);
return L&&N==L;
}else if(qx.dom.Node.isDocument(M)){return false;
}else{return L.contains(M);
}},"gecko":function(A,B){return !!(A.compareDocumentPosition(B)&16);
},"default":function(o,p){while(p){if(o==p){return true;
}p=p.parentNode;
}return false;
}}),isRendered:function(y){if(!y.offsetParent){return false;
}var z=y.ownerDocument||y.document;
if(z.body.contains){return z.body.contains(y);
}if(z.compareDocumentPosition){return !!(z.compareDocumentPosition(y)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(O,P){return this.contains(P,O);
},getCommonParent:qx.core.Variant.select(v,{"mshtml|opera":function(G,H){if(G===H){return G;
}
while(G&&qx.dom.Node.isElement(G)){if(G.contains(H)){return G;
}G=G.parentNode;
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
}}),getAncestors:function(e){return this._recursivelyCollect(e,q);
},getChildElements:function(h){h=h.firstChild;

if(!h){return [];
}var i=this.getNextSiblings(h);

if(h.nodeType===1){i.unshift(h);
}return i;
},getDescendants:function(I){return qx.lang.Array.fromCollection(I.getElementsByTagName(s));
},getFirstDescendant:function(g){g=g.firstChild;

while(g&&g.nodeType!=1){g=g.nextSibling;
}return g;
},getLastDescendant:function(d){d=d.lastChild;

while(d&&d.nodeType!=1){d=d.previousSibling;
}return d;
},getPreviousSiblings:function(F){return this._recursivelyCollect(F,t);
},getNextSiblings:function(w){return this._recursivelyCollect(w,r);
},_recursivelyCollect:function(j,k){var l=[];

while(j=j[k]){if(j.nodeType==1){l.push(j);
}}return l;
},getSiblings:function(f){return this.getPreviousSiblings(f).reverse().concat(this.getNextSiblings(f));
},isEmpty:function(K){K=K.firstChild;

while(K){if(K.nodeType===qx.dom.Node.ELEMENT||K.nodeType===qx.dom.Node.TEXT){return false;
}K=K.nextSibling;
}return true;
},cleanWhitespace:function(C){var D=C.firstChild;

while(D){var E=D.nextSibling;

if(D.nodeType==3&&!/\S/.test(D.nodeValue)){C.removeChild(D);
}D=E;
}}}});
})();
(function(){var d="qx.event.handler.Capture";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(e,f){},registerEvent:function(g,h,i){},unregisterEvent:function(a,b,c){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__gF:{},remove:function(c){delete this.__gF[c.$$hash];
},add:function(k){this.__gF[k.$$hash]=k;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var p=this.__gI();
for(var i=p.length-1;i>=0;i--){var q=p[i];
if(q.hasValidLayout()){continue;
}if(q.isRootWidget()&&!q.hasUserBounds()){var s=q.getSizeHint();
q.renderLayout(0,0,s.width,s.height);
}else{var r=q.getBounds();
q.renderLayout(r.left,r.top,r.width,r.height);
}}},getNestingLevel:function(l){var m=this.__gH;
var o=0;
var parent=l;
while(true){if(m[parent.$$hash]!=null){o+=m[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
o+=1;
}var n=o;

while(l&&l!==parent){m[l.$$hash]=n--;
l=l.$$parent;
}return o;
},__gG:function(){var j=qx.ui.core.queue.Visibility;
this.__gH={};
var h=[];
var g=this.__gF;
var d,f;

for(var e in g){d=g[e];

if(j.isVisible(d)){f=this.getNestingLevel(d);
if(!h[f]){h[f]={};
}h[f][e]=d;
delete g[e];
}}return h;
},__gI:function(){var w=[];
var y=this.__gG();

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
(function(){var t="",s="g",r="0",q='\\$1',p="%",o='-',n="qx.lang.String",m=' ',l='\n',k="undefined";
qx.Class.define(n,{statics:{camelCase:function(F){return F.replace(/\-([a-z])/g,function(v,w){return w.toUpperCase();
});
},hyphenate:function(u){return u.replace(/[A-Z]/g,function(b){return (o+b.charAt(0).toLowerCase());
});
},capitalize:function(d){return d.replace(/\b[a-z]/g,function(B){return B.toUpperCase();
});
},clean:function(E){return this.trim(E.replace(/\s+/g,m));
},trimLeft:function(a){return a.replace(/^\s+/,t);
},trimRight:function(e){return e.replace(/\s+$/,t);
},trim:function(J){return J.replace(/^\s+|\s+$/g,t);
},startsWith:function(z,A){return z.indexOf(A)===0;
},endsWith:function(C,D){return C.substring(C.length-D.length,C.length)===D;
},repeat:function(M,N){return M.length>=0?new Array(N+1).join(M):t;
},pad:function(O,length,P){var Q=length-O.length;

if(Q>0){if(typeof P===k){P=r;
}return this.repeat(P,Q)+O;
}else{return O;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(K,L){return K.indexOf(L)!=-1;
},format:function(G,H){var I=G;

for(var i=0;i<H.length;i++){I=I.replace(new RegExp(p+(i+1),s),H[i]);
}return I;
},escapeRegexpChars:function(c){return c.replace(/([.*+?^${}()|[\]\/\\])/g,q);
},toArray:function(y){return y.split(/\B|\b/g);
},stripTags:function(x){return x.replace(/<\/?[^>]+>/gi,t);
},stripScripts:function(f,g){var j=t;
var h=f.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){j+=arguments[1]+l;
return t;
});

if(g===true){qx.lang.Function.globalEval(j);
}return h;
}}});
})();
(function(){var p="ready",o="qx.client",n="mshtml",m="load",l="unload",k="qx.event.handler.Application",j="complete",i="gecko|opera|webkit",h="left",g="DOMContentLoaded",f="shutdown";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){arguments.callee.base.call(this);
this._window=q.getWindow();
this.__gJ=false;
this.__gK=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__gL:false,onScriptLoaded:function(){this.__gL=true;
var v=qx.event.handler.Application.$$instance;

if(v){v.__gO();
}}},members:{canHandleEvent:function(c,d){},registerEvent:function(x,y,z){},unregisterEvent:function(r,s,t){},__gM:null,__gJ:null,__gK:null,__gN:null,__gO:function(){var b=qx.event.handler.Application;
if(!this.__gM&&this.__gJ&&b.__gL){if(qx.core.Variant.isSet(o,n)){if(qx.event.Registration.hasListener(this._window,p)){this.__gM=true;
qx.event.Registration.fireEvent(this._window,p);
}}else{this.__gM=true;
qx.event.Registration.fireEvent(this._window,p);
}}},isApplicationReady:function(){return this.__gM;
},_initObserver:function(){if(qx.$$domReady||document.readyState==j){this.__gJ=true;
this.__gO();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(o,i)){qx.bom.Event.addNativeListener(this._window,g,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(o,n)){var self=this;
var w=function(){try{document.documentElement.doScroll(h);

if(document.body){self._onNativeLoadWrapped();
}}catch(u){window.setTimeout(w,100);
}};
w();
}qx.bom.Event.addNativeListener(this._window,m,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,l,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,l,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gJ=true;
this.__gO();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gN){this.__gN=true;

try{qx.event.Registration.fireEvent(this._window,f);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(i){var j=this._dynamic;
return i instanceof qx.bom.Font?i:j[i];
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.fonts[p]){return s[p]=(new qx.bom.Font).set(r.fonts[p]);
}return p;
},isDynamic:function(f){var h=this._dynamic;

if(f&&(f instanceof qx.bom.Font||h[f]!==undefined)){return true;
}var g=this.getTheme();

if(g!==null&&f&&g.fonts[f]){h[f]=(new qx.bom.Font).set(g.fonts[f]);
return true;
}return false;
},_applyTheme:function(k){var l=this._getDynamic();

for(var o in l){if(l[o].themed){l[o].dispose();
delete l[o];
}}
if(k){var m=k.fonts;
var n=qx.bom.Font;

for(var o in m){l[o]=(new n).set(m[o]);
l[o].themed=true;
}}this._setDynamic(l);
}}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="mshtml",f="backgroundImage",e="qx.client",d="div",c="qx.html.Image";
qx.Class.define(c,{extend:qx.html.Element,members:{_applyProperty:function(name,k){arguments.callee.base.call(this,name,k);

if(name===j){var o=this.getDomElement();
var l=this.getAllStyles();

if(this.getNodeName()==d&&this.getStyle(f)){l.backgroundPosition=null;
l.backgroundRepeat=null;
}var m=this._getProperty(j);
var n=this._getProperty(i);
var p=n?i:h;
qx.bom.element.Decoration.update(o,m,p,l);
}},_createDomElement:function(){var r=this._getProperty(i);
var s=r?i:h;

if(qx.core.Variant.isSet(e,g)){var q=this._getProperty(j);
this.setNodeName(qx.bom.element.Decoration.getTagName(s,q));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s));
}return arguments.callee.base.call(this);
},_copyData:function(t){return arguments.callee.base.call(this,true);
},setSource:function(b){this._setProperty(j,b);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){this._removeProperty(j);
return this;
},setScale:function(a){this._setProperty(i,a);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var e="qx.event.type.Data",d="qx.ui.container.Composite",c="addChildWidget",b="removeChildWidget";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this._setLayout(a);
}},events:{addChildWidget:e,removeChildWidget:e},members:{_afterAddChild:function(h){this.fireNonBubblingEvent(c,qx.event.type.Data,[h]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(b,qx.event.type.Data,[i]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var j="mshtml",i="qx.client",h="qx.bom.element.Dimension",g="paddingRight",f="paddingLeft",e="paddingTop",d="paddingBottom";
qx.Class.define(h,{statics:{getWidth:qx.core.Variant.select(i,{"gecko":function(n){if(n.getBoundingClientRect){var o=n.getBoundingClientRect();
return Math.round(o.right)-Math.round(o.left);
}else{return n.offsetWidth;
}},"default":function(m){return m.offsetWidth;
}}),getHeight:qx.core.Variant.select(i,{"gecko":function(b){if(b.getBoundingClientRect){var c=b.getBoundingClientRect();
return Math.round(c.bottom)-Math.round(c.top);
}else{return b.offsetHeight;
}},"default":function(l){return l.offsetHeight;
}}),getSize:function(k){return {width:this.getWidth(k),height:this.getHeight(k)};
},__gP:{visible:true,hidden:true},getContentWidth:function(w){var y=qx.bom.element.Style;
var z=qx.bom.element.Overflow.getX(w);
var A=parseInt(y.get(w,f),10);
var C=parseInt(y.get(w,g),10);

if(this.__gP[z]){return w.clientWidth-A-C;
}else{if(w.clientWidth>=w.scrollWidth){return Math.max(w.clientWidth,w.scrollWidth)-A-C;
}else{var B=w.scrollWidth-A;
var x=qx.bom.client.Engine;

if(x.NAME===j&&x.VERSION==6){B-=C;
}return B;
}}},getContentHeight:function(p){var r=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getY(p);
var u=parseInt(r.get(p,e),10);
var s=parseInt(r.get(p,d),10);

if(this.__gP[t]){return p.clientHeight-u-s;
}else{if(p.clientHeight>=p.scrollHeight){return Math.max(p.clientHeight,p.scrollHeight)-u-s;
}else{var v=p.scrollHeight-u;
var q=qx.bom.client.Engine;

if(q.NAME===j&&q.VERSION==6){v-=s;
}return v;
}}},getContentSize:function(a){return {width:this.getContentWidth(a),height:this.getContentHeight(a)};
}}});
})();
(function(){var C="qx.client",B="",A="mshtml",z="'",y="SelectionLanguage",x="qx.xml.Document",w=" />",v="MSXML2.DOMDocument.3.0",u='<\?xml version="1.0" encoding="utf-8"?>\n<',t="MSXML2.XMLHTTP.3.0",p="MSXML2.XMLHTTP.6.0",s=" xmlns='",r="text/xml",o="XPath",n="MSXML2.DOMDocument.6.0",q="HTML";
qx.Class.define(x,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(G){if(G.nodeType===9){return G.documentElement.nodeName!==q;
}else if(G.ownerDocument){return this.isXmlDocument(G.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(C,{"mshtml":function(f,g){var h=new ActiveXObject(this.DOMDOC);
h.setProperty(y,o);

if(g){var j=u;
j+=g;

if(f){j+=s+f+z;
}j+=w;
h.loadXML(j);
}return h;
},"default":function(k,m){return document.implementation.createDocument(k||B,m||B,null);
}}),fromString:qx.core.Variant.select(C,{"mshtml":function(d){var e=qx.xml.Document.create();
e.loadXML(d);
return e;
},"default":function(a){var b=new DOMParser();
return b.parseFromString(a,r);
}})},defer:function(D){if(qx.core.Variant.isSet(C,A)){var E=[n,v];
var F=[p,t];

for(var i=0,l=E.length;i<l;i++){try{new ActiveXObject(E[i]);
new ActiveXObject(F[i]);
}catch(c){continue;
}D.DOMDOC=E[i];
D.XMLHTTP=F[i];
break;
}}}});
})();
(function(){var g="qx.ui.core.queue.Visibility",f="visibility";
qx.Class.define(g,{statics:{__gT:{},__gU:{},remove:function(i){var j=i.$$hash;
delete this.__gU[j];
delete this.__gT[j];
},isVisible:function(h){return this.__gU[h.$$hash]||false;
},__gV:function(k){var m=this.__gU;
var l=k.$$hash;
var n;
if(k.isExcluded()){n=false;
}else{var parent=k.$$parent;

if(parent){n=this.__gV(parent);
}else{n=k.isRootWidget();
}}return m[l]=n;
},add:function(o){var p=this.__gT;

if(p[o.$$hash]){return;
}p[o.$$hash]=o;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var a=this.__gT;
var e=this.__gU;
for(var b in a){if(e[b]!=null){a[b].addChildrenToQueue(a);
}}var d={};

for(var b in a){d[b]=e[b];
e[b]=null;
}for(var b in a){var c=a[b];
delete a[b];
if(e[b]==null){this.__gV(c);
}if(e[b]&&e[b]!=d[b]){c.checkAppearanceNeeds();
}}this.__gT={};
}}});
})();
(function(){var cQ="left",cP="top",cO="_applyLayoutChange",cN="hAlign",cM="flex",cL="vAlign",cK="Integer",cJ="minWidth",cI="width",cH="minHeight",cE="qx.ui.layout.Grid",cG="height",cF="maxHeight",cD="maxWidth";
qx.Class.define(cE,{extend:qx.ui.layout.Abstract,construct:function(bk,bl){arguments.callee.base.call(this);
this.__gW=[];
this.__gX=[];

if(bk){this.setSpacingX(bk);
}
if(bl){this.setSpacingY(bl);
}},properties:{spacingX:{check:cK,init:0,apply:cO},spacingY:{check:cK,init:0,apply:cO}},members:{__gY:null,__gW:null,__gX:null,__ha:null,__hb:null,__hc:null,__hd:null,__he:null,__hf:null,verifyLayoutProperty:null,__hg:function(){var bL=[];
var bK=[];
var bM=[];
var bI=-1;
var bH=-1;
var bO=this._getLayoutChildren();

for(var i=0,l=bO.length;i<l;i++){var bJ=bO[i];
var bN=bJ.getLayoutProperties();
var bP=bN.row;
var bG=bN.column;
bN.colSpan=bN.colSpan||1;
bN.rowSpan=bN.rowSpan||1;
if(bP==null||bG==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+bJ+"' must be defined!");
}
if(bL[bP]&&bL[bP][bG]){throw new Error("Cannot add widget '"+bJ+"'!. "+"There is already a widget '"+bL[bP][bG]+"' in this cell ("+bP+", "+bG+")");
}
for(var x=bG;x<bG+bN.colSpan;x++){for(var y=bP;y<bP+bN.rowSpan;y++){if(bL[y]==undefined){bL[y]=[];
}bL[y][x]=bJ;
bH=Math.max(bH,x);
bI=Math.max(bI,y);
}}
if(bN.rowSpan>1){bM.push(bJ);
}
if(bN.colSpan>1){bK.push(bJ);
}}for(var y=0;y<=bI;y++){if(bL[y]==undefined){bL[y]=[];
}}this.__gY=bL;
this.__ha=bK;
this.__hb=bM;
this.__hc=bI;
this.__hd=bH;
this.__he=null;
this.__hf=null;
delete this._invalidChildrenCache;
},_setRowData:function(cU,cV,cW){var cX=this.__gW[cU];

if(!cX){this.__gW[cU]={};
this.__gW[cU][cV]=cW;
}else{cX[cV]=cW;
}},_setColumnData:function(bo,bp,bq){var br=this.__gX[bo];

if(!br){this.__gX[bo]={};
this.__gX[bo][bp]=bq;
}else{br[bp]=bq;
}},setSpacing:function(cT){this.setSpacingY(cT);
this.setSpacingX(cT);
return this;
},setColumnAlign:function(bs,bt,bu){{};
this._setColumnData(bs,cN,bt);
this._setColumnData(bs,cL,bu);
this._applyLayoutChange();
return this;
},getColumnAlign:function(dD){var dE=this.__gX[dD]||{};
return {vAlign:dE.vAlign||cP,hAlign:dE.hAlign||cQ};
},setRowAlign:function(bW,bX,bY){{};
this._setRowData(bW,cN,bX);
this._setRowData(bW,cL,bY);
this._applyLayoutChange();
return this;
},getRowAlign:function(dq){var dr=this.__gW[dq]||{};
return {vAlign:dr.vAlign||cP,hAlign:dr.hAlign||cQ};
},getCellWidget:function(cR,cS){if(this._invalidChildrenCache){this.__hg();
}var cR=this.__gY[cR]||{};
return cR[cS]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__hg();
}return this.__hc+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__hg();
}return this.__hd+1;
},getCellAlign:function(ba,bb){var bh=cP;
var bf=cQ;
var bg=this.__gW[ba];
var bd=this.__gX[bb];
var bc=this.__gY[ba][bb];

if(bc){var be={vAlign:bc.getAlignY(),hAlign:bc.getAlignX()};
}else{be={};
}if(be.vAlign){bh=be.vAlign;
}else if(bg&&bg.vAlign){bh=bg.vAlign;
}else if(bd&&bd.vAlign){bh=bd.vAlign;
}if(be.hAlign){bf=be.hAlign;
}else if(bd&&bd.hAlign){bf=bd.hAlign;
}else if(bg&&bg.hAlign){bf=bg.hAlign;
}return {vAlign:bh,hAlign:bf};
},setColumnFlex:function(cB,cC){this._setColumnData(cB,cM,cC);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bS){var bT=this.__gX[bS]||{};
return bT.flex!==undefined?bT.flex:0;
},setRowFlex:function(bU,bV){this._setRowData(bU,cM,bV);
this._applyLayoutChange();
return this;
},getRowFlex:function(dQ){var dR=this.__gW[dQ]||{};
var dS=dR.flex!==undefined?dR.flex:0;
return dS;
},setColumnMaxWidth:function(bi,bj){this._setColumnData(bi,cD,bj);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bx){var by=this.__gX[bx]||{};
return by.maxWidth!==undefined?by.maxWidth:Infinity;
},setColumnWidth:function(bQ,bR){this._setColumnData(bQ,cI,bR);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bm){var bn=this.__gX[bm]||{};
return bn.width!==undefined?bn.width:null;
},setColumnMinWidth:function(cY,da){this._setColumnData(cY,cJ,da);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(X){var Y=this.__gX[X]||{};
return Y.minWidth||0;
},setRowMaxHeight:function(dT,dU){this._setRowData(dT,cF,dU);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bv){var bw=this.__gW[bv]||{};
return bw.maxHeight||Infinity;
},setRowHeight:function(ce,cf){this._setRowData(ce,cG,cf);
this._applyLayoutChange();
return this;
},getRowHeight:function(K){var L=this.__gW[K]||{};
return L.height!==undefined?L.height:null;
},setRowMinHeight:function(ca,cb){this._setRowData(ca,cH,cb);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cc){var cd=this.__gW[cc]||{};
return cd.minHeight||0;
},__hh:function(dV){var ea=dV.getSizeHint();
var dY=dV.getMarginLeft()+dV.getMarginRight();
var dX=dV.getMarginTop()+dV.getMarginBottom();
var dW={height:ea.height+dX,width:ea.width+dY,minHeight:ea.minHeight+dX,minWidth:ea.minWidth+dY,maxHeight:ea.maxHeight+dX,maxWidth:ea.maxWidth+dY};
return dW;
},_fixHeightsRowSpan:function(db){var dm=this.getSpacingY();

for(var i=0,l=this.__hb.length;i<l;i++){var de=this.__hb[i];
var dg=this.__hh(de);
var dh=de.getLayoutProperties();
var dd=dh.row;
var dk=dm*(dh.rowSpan-1);
var dc=dk;
var dj={};

for(var j=0;j<dh.rowSpan;j++){var dp=dh.row+j;
var df=db[dp];
var dn=this.getRowFlex(dp);

if(dn>0){dj[dp]={min:df.minHeight,value:df.height,max:df.maxHeight,flex:dn};
}dk+=df.height;
dc+=df.minHeight;
}if(dk<dg.height){var dl=qx.ui.layout.Util.computeFlexOffsets(dj,dg.height,dk);

for(var j=0;j<dh.rowSpan;j++){var di=dl[dd+j]?dl[dd+j].offset:0;
db[dd+j].height+=di;
}}if(dc<dg.minHeight){var dl=qx.ui.layout.Util.computeFlexOffsets(dj,dg.minHeight,dc);

for(var j=0;j<dh.rowSpan;j++){var di=dl[dd+j]?dl[dd+j].offset:0;
db[dd+j].minHeight+=di;
}}}},_fixWidthsColSpan:function(cg){var ck=this.getSpacingX();

for(var i=0,l=this.__ha.length;i<l;i++){var ch=this.__ha[i];
var cj=this.__hh(ch);
var cm=ch.getLayoutProperties();
var ci=cm.column;
var cs=ck*(cm.colSpan-1);
var cl=cs;
var cn={};
var cp;

for(var j=0;j<cm.colSpan;j++){var ct=cm.column+j;
var cr=cg[ct];
var cq=this.getColumnFlex(ct);
if(cq>0){cn[ct]={min:cr.minWidth,value:cr.width,max:cr.maxWidth,flex:cq};
}cs+=cr.width;
cl+=cr.minWidth;
}if(cs<cj.width){var co=qx.ui.layout.Util.computeFlexOffsets(cn,cj.width,cs);

for(var j=0;j<cm.colSpan;j++){cp=co[ci+j]?co[ci+j].offset:0;
cg[ci+j].width+=cp;
}}if(cl<cj.minWidth){var co=qx.ui.layout.Util.computeFlexOffsets(cn,cj.minWidth,cl);

for(var j=0;j<cm.colSpan;j++){cp=co[ci+j]?co[ci+j].offset:0;
cg[ci+j].minWidth+=cp;
}}}},_getRowHeights:function(){if(this.__he!=null){return this.__he;
}var V=[];
var O=this.__hc;
var N=this.__hd;

for(var W=0;W<=O;W++){var P=0;
var R=0;
var Q=0;

for(var U=0;U<=N;U++){var M=this.__gY[W][U];

if(!M){continue;
}var S=M.getLayoutProperties().rowSpan||0;

if(S>1){continue;
}var T=this.__hh(M);

if(this.getRowFlex(W)>0){P=Math.max(P,T.minHeight);
}else{P=Math.max(P,T.height);
}R=Math.max(R,T.height);
}var P=Math.max(P,this.getRowMinHeight(W));
var Q=this.getRowMaxHeight(W);

if(this.getRowHeight(W)!==null){var R=this.getRowHeight(W);
}else{var R=Math.max(P,Math.min(R,Q));
}V[W]={minHeight:P,height:R,maxHeight:Q};
}
if(this.__hb.length>0){this._fixHeightsRowSpan(V);
}this.__he=V;
return V;
},_getColWidths:function(){if(this.__hf!=null){return this.__hf;
}var dw=[];
var dt=this.__hd;
var dv=this.__hc;

for(var dB=0;dB<=dt;dB++){var dz=0;
var dy=0;
var du=Infinity;

for(var dC=0;dC<=dv;dC++){var ds=this.__gY[dC][dB];

if(!ds){continue;
}var dx=ds.getLayoutProperties().colSpan||0;

if(dx>1){continue;
}var dA=this.__hh(ds);

if(this.getColumnFlex(dB)>0){dy=Math.max(dy,dA.minWidth);
}else{dy=Math.max(dy,dA.width);
}dz=Math.max(dz,dA.width);
}var dy=Math.max(dy,this.getColumnMinWidth(dB));
var du=this.getColumnMaxWidth(dB);

if(this.getColumnWidth(dB)!==null){var dz=this.getColumnWidth(dB);
}else{var dz=Math.max(dy,Math.min(dz,du));
}dw[dB]={minWidth:dy,width:dz,maxWidth:du};
}
if(this.__ha.length>0){this._fixWidthsColSpan(dw);
}this.__hf=dw;
return dw;
},_getColumnFlexOffsets:function(bz){var bA=this.getSizeHint();
var bE=bz-bA.width;

if(bE==0){return {};
}var bC=this._getColWidths();
var bB={};

for(var i=0,l=bC.length;i<l;i++){var bF=bC[i];
var bD=this.getColumnFlex(i);

if((bD<=0)||(bF.width==bF.maxWidth&&bE>0)||(bF.width==bF.minWidth&&bE<0)){continue;
}bB[i]={min:bF.minWidth,value:bF.width,max:bF.maxWidth,flex:bD};
}return qx.ui.layout.Util.computeFlexOffsets(bB,bz,bA.width);
},_getRowFlexOffsets:function(cu){var cv=this.getSizeHint();
var cy=cu-cv.height;

if(cy==0){return {};
}var cz=this._getRowHeights();
var cw={};

for(var i=0,l=cz.length;i<l;i++){var cA=cz[i];
var cx=this.getRowFlex(i);

if((cx<=0)||(cA.height==cA.maxHeight&&cy>0)||(cA.height==cA.minHeight&&cy<0)){continue;
}cw[i]={min:cA.minHeight,value:cA.height,max:cA.maxHeight,flex:cx};
}return qx.ui.layout.Util.computeFlexOffsets(cw,cu,cv.height);
},renderLayout:function(a,b){if(this._invalidChildrenCache){this.__hg();
}var s=qx.ui.layout.Util;
var d=this.getSpacingX();
var m=this.getSpacingY();
var z=this._getColWidths();
var w=this._getColumnFlexOffsets(a);
var e=[];
var B=this.__hd;
var c=this.__hc;
var A;

for(var C=0;C<=B;C++){A=w[C]?w[C].offset:0;
e[C]=z[C].width+A;
}var p=this._getRowHeights();
var r=this._getRowFlexOffsets(b);
var I=[];

for(var n=0;n<=c;n++){A=r[n]?r[n].offset:0;
I[n]=p[n].height+A;
}var J=0;

for(var C=0;C<=B;C++){var top=0;

for(var n=0;n<=c;n++){var u=this.__gY[n][C];
if(!u){top+=I[n]+m;
continue;
}var f=u.getLayoutProperties();
if(f.row!==n||f.column!==C){top+=I[n]+m;
continue;
}var H=d*(f.colSpan-1);

for(var i=0;i<f.colSpan;i++){H+=e[C+i];
}var v=m*(f.rowSpan-1);

for(var i=0;i<f.rowSpan;i++){v+=I[n+i];
}var g=u.getSizeHint();
var F=u.getMarginTop();
var t=u.getMarginLeft();
var q=u.getMarginBottom();
var k=u.getMarginRight();
var o=Math.max(g.minWidth,Math.min(H-t-k,g.maxWidth));
var G=Math.max(g.minHeight,Math.min(v-F-q,g.maxHeight));
var D=this.getCellAlign(n,C);
var E=J+s.computeHorizontalAlignOffset(D.hAlign,o,H,t,k);
var h=top+s.computeVerticalAlignOffset(D.vAlign,G,v,F,q);
u.renderLayout(E,h,o,G);
top+=I[n]+m;
}J+=e[C]+d;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__hf=null;
this.__he=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hg();
}var dJ=this._getColWidths();
var dL=0,dM=0;

for(var i=0,l=dJ.length;i<l;i++){var dN=dJ[i];

if(this.getColumnFlex(i)>0){dL+=dN.minWidth;
}else{dL+=dN.width;
}dM+=dN.width;
}var dO=this._getRowHeights();
var dH=0,dK=0;

for(var i=0,l=dO.length;i<l;i++){var dP=dO[i];

if(this.getRowFlex(i)>0){dH+=dP.minHeight;
}else{dH+=dP.height;
}dK+=dP.height;
}var dG=this.getSpacingX()*(dJ.length-1);
var dF=this.getSpacingY()*(dO.length-1);
var dI={minWidth:dL+dG,width:dM+dG,minHeight:dH+dF,height:dK+dF};
return dI;
}},destruct:function(){this.__gY=this.__gW=this.__gX=this.__ha=this.__hb=this.__hf=this.__he=null;
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hi:{},remove:function(c){delete this.__hi[c.$$hash];
},add:function(g){var h=this.__hi;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var d=this.__hi;
var f;

for(var e in d){f=d[e];
delete d[e];
f.syncWidget();
}for(var e in d){return;
}this.__hi={};
}}});
})();
(function(){var L="borderTopWidth",K="borderLeftWidth",J="marginTop",I="marginLeft",H="scroll",G="qx.client",F="border-box",E="borderBottomWidth",D="borderRightWidth",C="auto",bb="padding",ba="qx.bom.element.Location",Y="paddingLeft",X="static",W="marginBottom",V="visible",U="BODY",T="paddingBottom",S="paddingTop",R="marginRight",P="position",Q="margin",N="overflow",O="paddingRight",M="border";
qx.Class.define(ba,{statics:{__hm:function(c,d){return qx.bom.element.Style.get(c,d,qx.bom.element.Style.COMPUTED_MODE,false);
},__hn:function(a,b){return parseInt(qx.bom.element.Style.get(a,b,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ho:function(bh){var bk=0,top=0;
if(bh.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bj=qx.dom.Node.getWindow(bh);
bk-=qx.bom.Viewport.getScrollLeft(bj);
top-=qx.bom.Viewport.getScrollTop(bj);
}else{var bi=qx.dom.Node.getDocument(bh).body;
bh=bh.parentNode;
while(bh&&bh!=bi){bk+=bh.scrollLeft;
top+=bh.scrollTop;
bh=bh.parentNode;
}}return {left:bk,top:top};
},__hp:qx.core.Variant.select(G,{"mshtml":function(y){var A=qx.dom.Node.getDocument(y);
var z=A.body;
var B=0;
var top=0;
B-=z.clientLeft+A.documentElement.clientLeft;
top-=z.clientTop+A.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){B+=this.__hn(z,K);
top+=this.__hn(z,L);
}return {left:B,top:top};
},"webkit":function(bK){var bM=qx.dom.Node.getDocument(bK);
var bL=bM.body;
var bN=bL.offsetLeft;
var top=bL.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bN+=this.__hn(bL,K);
top+=this.__hn(bL,L);
}return {left:bN,top:top};
},"gecko":function(q){var r=qx.dom.Node.getDocument(q).body;
var s=r.offsetLeft;
var top=r.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){s+=this.__hn(r,I);
top+=this.__hn(r,J);
}if(qx.bom.element.BoxSizing.get(r)!==F){s+=this.__hn(r,K);
top+=this.__hn(r,L);
}return {left:s,top:top};
},"default":function(bC){var bD=qx.dom.Node.getDocument(bC).body;
var bE=bD.offsetLeft;
var top=bD.offsetTop;
return {left:bE,top:top};
}}),__hq:qx.core.Variant.select(G,{"mshtml|webkit":function(bF){var bH=qx.dom.Node.getDocument(bF);
if(bF.getBoundingClientRect){var bI=bF.getBoundingClientRect();
var bJ=bI.left;
var top=bI.top;
}else{var bJ=bF.offsetLeft;
var top=bF.offsetTop;
bF=bF.offsetParent;
var bG=bH.body;
while(bF&&bF!=bG){bJ+=bF.offsetLeft;
top+=bF.offsetTop;
bJ+=this.__hn(bF,K);
top+=this.__hn(bF,L);
bF=bF.offsetParent;
}}return {left:bJ,top:top};
},"gecko":function(f){if(f.getBoundingClientRect){var i=f.getBoundingClientRect();
var j=Math.round(i.left);
var top=Math.round(i.top);
}else{var j=0;
var top=0;
var g=qx.dom.Node.getDocument(f).body;
var h=qx.bom.element.BoxSizing;

if(h.get(f)!==F){j-=this.__hn(f,K);
top-=this.__hn(f,L);
}
while(f&&f!==g){j+=f.offsetLeft;
top+=f.offsetTop;
if(h.get(f)!==F){j+=this.__hn(f,K);
top+=this.__hn(f,L);
}if(f.parentNode&&this.__hm(f.parentNode,N)!=V){j+=this.__hn(f.parentNode,K);
top+=this.__hn(f.parentNode,L);
}f=f.offsetParent;
}}return {left:j,top:top};
},"default":function(be){var bg=0;
var top=0;
var bf=qx.dom.Node.getDocument(be).body;
while(be&&be!==bf){bg+=be.offsetLeft;
top+=be.offsetTop;
be=be.offsetParent;
}return {left:bg,top:top};
}}),get:function(bt,bu){if(bt.tagName==U){var location=this.__hr(bt);
var bB=location.left;
var top=location.top;
}else{var bv=this.__hp(bt);
var bA=this.__hq(bt);
var scroll=this.__ho(bt);
var bB=bA.left+bv.left-scroll.left;
var top=bA.top+bv.top-scroll.top;
}var bw=bB+bt.offsetWidth;
var bx=top+bt.offsetHeight;

if(bu){if(bu==bb||bu==H){var by=qx.bom.element.Overflow.getX(bt);

if(by==H||by==C){bw+=bt.scrollWidth-bt.offsetWidth+this.__hn(bt,K)+this.__hn(bt,D);
}var bz=qx.bom.element.Overflow.getY(bt);

if(bz==H||bz==C){bx+=bt.scrollHeight-bt.offsetHeight+this.__hn(bt,L)+this.__hn(bt,E);
}}
switch(bu){case bb:bB+=this.__hn(bt,Y);
top+=this.__hn(bt,S);
bw-=this.__hn(bt,O);
bx-=this.__hn(bt,T);
case H:bB-=bt.scrollLeft;
top-=bt.scrollTop;
bw-=bt.scrollLeft;
bx-=bt.scrollTop;
case M:bB+=this.__hn(bt,K);
top+=this.__hn(bt,L);
bw-=this.__hn(bt,D);
bx-=this.__hn(bt,E);
break;
case Q:bB-=this.__hn(bt,I);
top-=this.__hn(bt,J);
bw+=this.__hn(bt,R);
bx+=this.__hn(bt,W);
break;
}}return {left:bB,top:top,right:bw,bottom:bx};
},__hr:qx.core.Variant.select(G,{"default":function(bc){var top=bc.offsetTop+this.__hn(bc,J);
var bd=bc.offsetLeft+this.__hn(bc,I);
return {left:bd,top:top};
},"mshtml":function(bO){var top=bO.offsetTop;
var bP=bO.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hn(bO,J);
bP+=this.__hn(bO,I);
}return {left:bP,top:top};
},"gecko":function(o){var top=o.offsetTop+this.__hn(o,J)+this.__hn(o,K);
var p=o.offsetLeft+this.__hn(o,I)+this.__hn(o,L);
return {left:p,top:top};
}}),getLeft:function(k,l){return this.get(k,l).left;
},getTop:function(m,n){return this.get(m,n).top;
},getRight:function(br,bs){return this.get(br,bs).right;
},getBottom:function(w,x){return this.get(w,x).bottom;
},getRelative:function(bl,bm,bn,bo){var bq=this.get(bl,bn);
var bp=this.get(bm,bo);
return {left:bq.left-bp.left,top:bq.top-bp.top,right:bq.right-bp.right,bottom:bq.bottom-bp.bottom};
},getPosition:function(e){return this.getRelative(e,this.getOffsetParent(e));
},getOffsetParent:function(t){var v=t.offsetParent||document.body;
var u=qx.bom.element.Style;

while(v&&(!/^body|html$/i.test(v.tagName)&&u.get(v,P)===X)){v=v.offsetParent;
}return v;
}}});
})();
(function(){var h="qx.util.DisposeUtil";
qx.Class.define(h,{statics:{disposeFields:function(p,q){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=q.length;i<l;i++){var name=q[i];

if(p[name]==null||!p.hasOwnProperty(name)){continue;
}p[name]=null;
}},disposeObjects:function(b,c){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){b[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(d,e){var g=d[e];

if(!g){return;
}if(qx.core.ObjectRegistry.inShutDown){d[e]=null;
return;
}try{var f;

for(var i=g.length-1;i>=0;i--){f=g[i];

if(f){f.dispose();
}}}catch(a){throw new Error("The array field: "+e+" of object: "+d+" has non disposable entries: "+a);
}g.length=0;
d[e]=null;
},disposeMap:function(j,k){var m=j[k];

if(!m){return;
}if(qx.core.ObjectRegistry.inShutDown){j[k]=null;
return;
}try{for(var n in m){if(m.hasOwnProperty(n)){m[n].dispose();
}}}catch(o){throw new Error("The map field: "+k+" of object: "+j+" has non disposable entries: "+o);
}j[k]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var c="qx.event.dispatch.Direct";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(a,event,b){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__jX:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__jX();
}});
})();
(function(){var p="_",o="",n="qx.dynlocale",m="on",l="_applyLocale",k="changeLocale",j="C",h="qx.locale.Manager",g="String",f="singleton";
qx.Class.define(h,{type:f,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hs=qx.$$translations||{};
this.__ht=qx.$$locales||{};
var H=qx.bom.client.Locale;
var F=H.LOCALE;
var G=H.VARIANT;

if(G!==o){F+=p+G;
}this.setLocale(F||this.__hu);
},statics:{tr:function(a,b){var c=qx.lang.Array.fromArguments(arguments);
c.splice(0,1);
return qx.locale.Manager.getInstance().translate(a,c);
},trn:function(Q,R,S,T){var U=qx.lang.Array.fromArguments(arguments);
U.splice(0,3);
if(S!=1){return qx.locale.Manager.getInstance().translate(R,U);
}else{return qx.locale.Manager.getInstance().translate(Q,U);
}},trc:function(t,u,v){var w=qx.lang.Array.fromArguments(arguments);
w.splice(0,2);
return qx.locale.Manager.getInstance().translate(u,w);
},marktr:function(V){return V;
}},properties:{locale:{check:g,nullable:true,apply:l,event:k}},members:{__hu:j,__hv:null,__hw:null,__hs:null,__ht:null,getLanguage:function(){return this.__hw;
},getTerritory:function(){return this.getLocale().split(p)[1]||o;
},getAvailableLocales:function(){var e=[];

for(var d in this.__ht){if(d!=this.__hu){e.push(d);
}}return e;
},__hx:function(q){var s;
var r=q.indexOf(p);

if(r==-1){s=q;
}else{s=q.substring(0,r);
}return s;
},_applyLocale:function(bf,bg){this.__hv=bf;
this.__hw=this.__hx(bf);
},addTranslation:function(x,y){var z=this.__hs;

if(z[x]){for(var A in y){z[x][A]=y[A];
}}else{z[x]=y;
}},addLocale:function(B,C){var D=this.__ht;

if(D[B]){for(var E in C){D[B][E]=C[E];
}}else{D[B]=C;
}},translate:function(I,J,K){var P;
var N=this.__hs;

if(!N){return I;
}
if(K){var M=this.__hx(K);
}else{K=this.__hv;
M=this.__hw;
}
if(!P&&N[K]){P=N[K][I];
}
if(!P&&N[M]){P=N[M][I];
}
if(!P&&N[this.__hu]){P=N[this.__hu][I];
}
if(!P){P=I;
}
if(J.length>0){var L=[];

for(var i=0;i<J.length;i++){var O=J[i];

if(O&&O.translate){L[i]=O.translate();
}else{L[i]=O;
}}P=qx.lang.String.format(P,L);
}
if(qx.core.Variant.isSet(n,m)){P=new qx.locale.LocalizedString(P,I,J);
}return P;
},localize:function(W,X,Y){var be;
var bc=this.__ht;

if(!bc){return W;
}
if(Y){var bb=this.__hx(Y);
}else{Y=this.__hv;
bb=this.__hw;
}
if(!be&&bc[Y]){be=bc[Y][W];
}
if(!be&&bc[bb]){be=bc[bb][W];
}
if(!be&&bc[this.__hu]){be=bc[this.__hu][W];
}
if(!be){be=W;
}
if(X.length>0){var ba=[];

for(var i=0;i<X.length;i++){var bd=X[i];

if(bd.translate){ba[i]=bd.translate();
}else{ba[i]=bd;
}}be=qx.lang.String.format(be,ba);
}
if(qx.core.Variant.isSet(n,m)){be=new qx.locale.LocalizedString(be,W,X);
}return be;
}},destruct:function(){this.__hs=this.__ht=null;
}});
})();
(function(){var w="qx.client",v="gecko",u="div",t="inherit",s="text",r="value",q="",p="hidden",o="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",n="nowrap",N="auto",M="ellipsis",L="normal",K="label",J="px",I="crop",H="end",G="100%",F="visible",E="qx.bom.Label",C="Please use the setValue() method instead.",D="opera",A="Please use the getValue() method instead.",B="block",y="none",z="-1000px",x="absolute";
qx.Class.define(E,{statics:{__hN:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__hO:function(){var P=this.__hQ(false);
document.body.insertBefore(P,document.body.firstChild);
return this._textElement=P;
},__hP:function(){var a=this.__hQ(true);
document.body.insertBefore(a,document.body.firstChild);
return this._htmlElement=a;
},__hQ:function(i){var j=qx.bom.Element.create(u);
var k=j.style;
k.width=k.height=N;
k.left=k.top=z;
k.visibility=p;
k.position=x;
k.overflow=F;

if(i){k.whiteSpace=L;
}else{k.whiteSpace=n;

if(qx.core.Variant.isSet(w,v)){var l=document.createElementNS(o,K);
for(var m in this.__hN){l.style[m]=t;
}j.appendChild(l);
}}return j;
},__hR:function(b){var c={};

if(b){c.whiteSpace=L;
}else if(qx.core.Variant.isSet(w,v)){c.display=B;
}else{c.overflow=p;
c.whiteSpace=n;
c.textOverflow=M;
c.userSelect=y;
if(qx.core.Variant.isSet(w,D)){c.OTextOverflow=M;
}}return c;
},create:function(content,bc,bd){if(!bd){bd=window;
}
if(bc){var be=bd.document.createElement(u);
be.useHtml=true;
}else if(qx.core.Variant.isSet(w,v)){var be=bd.document.createElement(u);
var bf=bd.document.createElementNS(o,K);
bf.style.cursor=t;
bf.style.color=t;
bf.style.overflow=p;
bf.style.maxWidth=G;
for(var bg in this.__hN){bf.style[bg]=t;
}bf.setAttribute(I,H);
be.appendChild(bf);
}else{var be=bd.document.createElement(u);
qx.bom.element.Style.setStyles(be,this.__hR(bc));
}
if(content){this.setValue(be,content);
}return be;
},setValue:function(g,h){h=h||q;

if(g.useHtml){g.innerHTML=h;
}else if(qx.core.Variant.isSet(w,v)){g.firstChild.setAttribute(r,h);
}else{qx.bom.element.Attribute.set(g,s,h);
}},getValue:function(X){if(X.useHtml){return X.innerHTML;
}else if(qx.core.Variant.isSet(w,v)){return X.firstChild.getAttribute(r)||q;
}else{return qx.bom.element.Attribute.get(X,s);
}},getHtmlSize:function(content,Y,ba){var bb=this._htmlElement||this.__hP();
bb.style.width=ba!==undefined?ba+J:N;
bb.innerHTML=content;
return this.__hS(bb,Y);
},getTextSize:function(d,e){var f=this._textElement||this.__hO();

if(qx.core.Variant.isSet(w,v)){f.firstChild.setAttribute(r,d);
}else{qx.bom.element.Attribute.set(f,s,d);
}return this.__hS(f,e);
},__hS:function(S,T){var U=this.__hN;

if(!T){T={};
}
for(var V in U){S.style[V]=T[V]||q;
}var W=qx.bom.element.Dimension.getSize(S);

if(qx.core.Variant.isSet(w,v)){if(!qx.bom.client.Platform.WIN){W.width++;
}}return W;
},setContent:function(Q,R){qx.log.Logger.deprecatedMethodWarning(arguments.callee,C);
this.setValue(Q,R);
},getContent:function(O){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
return this.getValue(O);
}}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var H="alias",G="copy",F="blur",E="mouseout",D="keydown",C="Ctrl",B="Shift",A="mousemove",z="move",y="mouseover",X="Alt",W="keyup",V="mouseup",U="dragend",T="on",S="mousedown",R="qxDraggable",Q="drag",P="drop",O="qxDroppable",M="qx.event.handler.DragDrop",N="droprequest",K="dragstart",L="dragchange",I="dragleave",J="dragover";
qx.Class.define(M,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__hT=a;
this.__hU=a.getWindow().document.documentElement;
this.__hT.addListener(this.__hU,S,this._onMouseDown,this);
this.__ih();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__hT:null,__hU:null,__hV:null,__hW:null,__hX:null,__hY:null,__ia:null,__ib:null,__ic:null,__id:null,__ie:false,__if:0,__ig:0,canHandleEvent:function(bc,bd){},registerEvent:function(bh,bi,bj){},unregisterEvent:function(c,d,f){},addType:function(bb){this.__hX[bb]=true;
},addAction:function(ba){this.__hY[ba]=true;
},supportsType:function(bg){return !!this.__hX[bg];
},supportsAction:function(x){return !!this.__hY[x];
},getData:function(be){if(!this.__io||!this.__hV){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__hX[be]){throw new Error("Unsupported data type: "+be+"!");
}
if(!this.__ib[be]){this.__ic=be;
this.__ij(N,this.__hW,this.__hV,false);
}
if(!this.__ib[be]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__ib[be]||null;
},getCurrentAction:function(){return this.__id;
},addData:function(g,h){this.__ib[g]=h;
},getCurrentType:function(){return this.__ic;
},__ih:function(){this.__hX={};
this.__hY={};
this.__ia={};
this.__ib={};
},__ii:function(){var o=this.__hY;
var m=this.__ia;
var n=null;

if(this.__io){if(m.Shift&&m.Ctrl&&o.alias){n=H;
}else if(m.Shift&&m.Alt&&o.copy){n=G;
}else if(m.Shift&&o.move){n=z;
}else if(m.Alt&&o.alias){n=H;
}else if(m.Ctrl&&o.copy){n=G;
}else if(o.move){n=z;
}else if(o.copy){n=G;
}else if(o.alias){n=H;
}}
if(n!=this.__id){this.__id=n;
this.__ij(L,this.__hW,this.__hV,false);
}},__ij:function(p,q,r,s,t){var v=qx.event.Registration;
var u=v.createEvent(p,qx.event.type.Drag,[s,t]);

if(q!==r){u.setRelatedTarget(r);
}return v.dispatchEvent(q,u);
},__ik:function(w){while(w&&w.nodeType==1){if(w.getAttribute(R)==T){return w;
}w=w.parentNode;
}return null;
},__il:function(bm){while(bm&&bm.nodeType==1){if(bm.getAttribute(O)==T){return bm;
}bm=bm.parentNode;
}return null;
},__im:function(){this.__hW=null;
this.__hT.removeListener(this.__hU,A,this._onMouseMove,this,true);
this.__hT.removeListener(this.__hU,V,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,F,this._onWindowBlur,this);
this.__ih();
},__in:function(){if(this.__ie){this.__hT.removeListener(this.__hU,y,this._onMouseOver,this,true);
this.__hT.removeListener(this.__hU,E,this._onMouseOut,this,true);
this.__hT.removeListener(this.__hU,D,this._onKeyDown,this,true);
this.__hT.removeListener(this.__hU,W,this._onKeyUp,this,true);
this.__ij(U,this.__hW,this.__hV,false);
this.__ie=false;
}this.__io=false;
this.__hV=null;
this.__im();
},__io:false,_onWindowBlur:function(e){this.__in();
},_onKeyDown:function(e){var Y=e.getKeyIdentifier();

switch(Y){case X:case C:case B:if(!this.__ia[Y]){this.__ia[Y]=true;
this.__ii();
}}},_onKeyUp:function(e){var b=e.getKeyIdentifier();

switch(b){case X:case C:case B:if(this.__ia[b]){this.__ia[b]=false;
this.__ii();
}}},_onMouseDown:function(e){if(this.__ie){return;
}var j=this.__ik(e.getTarget());

if(j){this.__if=e.getDocumentLeft();
this.__ig=e.getDocumentTop();
this.__hW=j;
this.__hT.addListener(this.__hU,A,this._onMouseMove,this,true);
this.__hT.addListener(this.__hU,V,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,F,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__io){this.__ij(P,this.__hV,this.__hW,false,e);
}if(this.__ie){e.stopPropagation();
}this.__in();
},_onMouseMove:function(e){if(this.__ie){if(!this.__ij(Q,this.__hW,this.__hV,true,e)){this.__in();
}}else{if(Math.abs(e.getDocumentLeft()-this.__if)>3||Math.abs(e.getDocumentTop()-this.__ig)>3){if(this.__ij(K,this.__hW,this.__hV,true,e)){this.__ie=true;
this.__hT.addListener(this.__hU,y,this._onMouseOver,this,true);
this.__hT.addListener(this.__hU,E,this._onMouseOut,this,true);
this.__hT.addListener(this.__hU,D,this._onKeyDown,this,true);
this.__hT.addListener(this.__hU,W,this._onKeyUp,this,true);
var i=this.__ia;
i.Ctrl=e.isCtrlPressed();
i.Shift=e.isShiftPressed();
i.Alt=e.isAltPressed();
this.__ii();
}else{this.__ij(U,this.__hW,this.__hV,false);
this.__im();
}}}},_onMouseOver:function(e){var k=e.getTarget();
var l=this.__il(k);

if(l&&l!=this.__hV){this.__io=this.__ij(J,l,this.__hW,true,e);
this.__hV=l;
this.__ii();
}},_onMouseOut:function(e){var bl=this.__il(e.getTarget());
var bk=this.__il(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__hV){this.__ij(I,this.__hV,bk,false,e);
this.__hV=null;
this.__io=false;
qx.event.Timer.once(this.__ii,this,0);
}}},destruct:function(){this.__hW=this.__hV=this.__hT=this.__hU=this.__hX=this.__hY=this.__ia=this.__ib=null;
},defer:function(bf){qx.event.Registration.addHandler(bf);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__ip:null,__iq:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__ip=d;
this.__iq=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__ip=this.__ip;
c.__iq=this.__iq;
return c;
},getData:function(){return this.__ip;
},getOldData:function(){return this.__iq;
}},destruct:function(){this.__ip=this.__iq=null;
}});
})();
(function(){var s="qx.client",r="blur",q="focus",p="mousedown",o="on",n="mouseup",m="DOMFocusOut",l="DOMFocusIn",k="selectstart",j="onmousedown",L="onfocusout",K="onfocusin",J="onmouseup",I="onselectstart",H="draggesture",G="qx.event.handler.Focus",F="_applyFocus",E="deactivate",D="textarea",C="_applyActive",z="input",A="focusin",x="qxSelectable",y="tabIndex",v="off",w="activate",t="focusout",u="qxKeepFocus",B="qxKeepActive";
qx.Class.define(G,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(V){arguments.callee.base.call(this);
this._manager=V;
this._window=V.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:C,nullable:true},focus:{apply:F,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__ir:null,__is:null,__it:null,__iu:null,__iv:null,__iw:null,__ix:null,__iy:null,__iz:null,__iA:null,canHandleEvent:function(bk,bl){},registerEvent:function(Y,ba,bb){},unregisterEvent:function(bf,bg,bh){},focus:function(bH){try{bH.focus();
}catch(bi){}this.setFocus(bH);
this.setActive(bH);
},activate:function(bo){this.setActive(bo);
},blur:function(d){try{d.blur();
}catch(f){}
if(this.getActive()===d){this.resetActive();
}
if(this.getFocus()===d){this.resetFocus();
}},deactivate:function(be){if(this.getActive()===be){this.resetActive();
}},tryActivate:function(br){var bs=this.__iP(br);

if(bs){this.setActive(bs);
}},__iB:function(bv,bw,bx,by){var bA=qx.event.Registration;
var bz=bA.createEvent(bx,qx.event.type.Focus,[bv,bw,by]);
bA.dispatchEvent(bv,bz);
},_windowFocused:true,__iC:function(){if(this._windowFocused){this._windowFocused=false;
this.__iB(this._window,null,r,false);
}},__iD:function(){if(!this._windowFocused){this._windowFocused=true;
this.__iB(this._window,null,q,false);
}},_initObserver:qx.core.Variant.select(s,{"gecko":function(){this.__ir=qx.lang.Function.listener(this.__iJ,this);
this.__is=qx.lang.Function.listener(this.__iK,this);
this.__it=qx.lang.Function.listener(this.__iI,this);
this.__iu=qx.lang.Function.listener(this.__iH,this);
this.__iv=qx.lang.Function.listener(this.__iE,this);
this._document.addEventListener(p,this.__ir,true);
this._document.addEventListener(n,this.__is,true);
this._window.addEventListener(q,this.__it,true);
this._window.addEventListener(r,this.__iu,true);
this._window.addEventListener(H,this.__iv,true);
},"mshtml":function(){this.__ir=qx.lang.Function.listener(this.__iJ,this);
this.__is=qx.lang.Function.listener(this.__iK,this);
this.__ix=qx.lang.Function.listener(this.__iF,this);
this.__iy=qx.lang.Function.listener(this.__iG,this);
this.__iw=qx.lang.Function.listener(this.__iM,this);
this._document.attachEvent(j,this.__ir);
this._document.attachEvent(J,this.__is);
this._document.attachEvent(K,this.__ix);
this._document.attachEvent(L,this.__iy);
this._document.attachEvent(I,this.__iw);
},"webkit":function(){this.__ir=qx.lang.Function.listener(this.__iJ,this);
this.__is=qx.lang.Function.listener(this.__iK,this);
this.__iy=qx.lang.Function.listener(this.__iG,this);
this.__it=qx.lang.Function.listener(this.__iI,this);
this.__iu=qx.lang.Function.listener(this.__iH,this);
this.__iw=qx.lang.Function.listener(this.__iM,this);
this._document.addEventListener(p,this.__ir,true);
this._document.addEventListener(n,this.__is,true);
this._document.addEventListener(k,this.__iw,false);
this._window.addEventListener(m,this.__iy,true);
this._window.addEventListener(q,this.__it,true);
this._window.addEventListener(r,this.__iu,true);
},"opera":function(){this.__ir=qx.lang.Function.listener(this.__iJ,this);
this.__is=qx.lang.Function.listener(this.__iK,this);
this.__ix=qx.lang.Function.listener(this.__iF,this);
this.__iy=qx.lang.Function.listener(this.__iG,this);
this._document.addEventListener(p,this.__ir,true);
this._document.addEventListener(n,this.__is,true);
this._window.addEventListener(l,this.__ix,true);
this._window.addEventListener(m,this.__iy,true);
}}),_stopObserver:qx.core.Variant.select(s,{"gecko":function(){this._document.removeEventListener(p,this.__ir,true);
this._document.removeEventListener(n,this.__is,true);
this._window.removeEventListener(q,this.__it,true);
this._window.removeEventListener(r,this.__iu,true);
this._window.removeEventListener(H,this.__iv,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,j,this.__ir);
qx.bom.Event.removeNativeListener(this._document,J,this.__is);
qx.bom.Event.removeNativeListener(this._document,K,this.__ix);
qx.bom.Event.removeNativeListener(this._document,L,this.__iy);
qx.bom.Event.removeNativeListener(this._document,I,this.__iw);
},"webkit":function(){this._document.removeEventListener(p,this.__ir,true);
this._document.removeEventListener(k,this.__iw,false);
this._window.removeEventListener(l,this.__ix,true);
this._window.removeEventListener(m,this.__iy,true);
this._window.removeEventListener(q,this.__it,true);
this._window.removeEventListener(r,this.__iu,true);
},"opera":function(){this._document.removeEventListener(p,this.__ir,true);
this._window.removeEventListener(l,this.__ix,true);
this._window.removeEventListener(m,this.__iy,true);
this._window.removeEventListener(q,this.__it,true);
this._window.removeEventListener(r,this.__iu,true);
}}),__iE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(s,{"gecko":function(e){if(!this.__iQ(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__iF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(s,{"mshtml":function(e){this.__iD();
var U=e.srcElement;
var T=this.__iO(U);

if(T){this.setFocus(T);
}this.tryActivate(U);
},"opera":function(e){var bG=e.target;

if(bG==this._document||bG==this._window){this.__iD();

if(this.__iz){this.setFocus(this.__iz);
delete this.__iz;
}
if(this.__iA){this.setActive(this.__iA);
delete this.__iA;
}}else{this.setFocus(bG);
this.tryActivate(bG);
if(!this.__iQ(bG)){bG.selectionStart=0;
bG.selectionEnd=0;
}}},"default":null})),__iG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(s,{"mshtml":function(e){if(!e.toElement){this.__iC();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bB=e.target;

if(bB===this.getFocus()){this.resetFocus();
}
if(bB===this.getActive()){this.resetActive();
}},"opera":function(e){var bm=e.target;

if(bm==this._document){this.__iC();
this.__iz=this.getFocus();
this.__iA=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bm===this.getFocus()){this.resetFocus();
}
if(bm===this.getActive()){this.resetActive();
}}},"default":null})),__iH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(s,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__iC();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__iC();
this.__iz=this.getFocus();
this.__iA=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__iI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(s,{"gecko":function(e){var bq=e.target;

if(bq===this._window||bq===this._document){this.__iD();
bq=this._body;
}this.setFocus(bq);
this.tryActivate(bq);
},"webkit":function(e){var bp=e.target;

if(bp===this._window||bp===this._document){this.__iD();

if(this.__iz){this.setFocus(this.__iz);
delete this.__iz;
}
if(this.__iA){this.setActive(this.__iA);
delete this.__iA;
}}else{this.setFocus(bp);
this.tryActivate(bp);
}},"default":null})),__iJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(s,{"gecko":function(e){var bI=this.__iO(e.target);

if(!bI){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var b=e.srcElement;
var a=this.__iO(b);

if(a){if(!this.__iQ(b)){b.unselectable=o;
try{document.selection.empty();
}catch(e){}try{a.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__iQ(b)){b.unselectable=o;
}}},"webkit":function(e){var bK=e.target;
var bJ=this.__iO(bK);

if(bJ){this.setFocus(bJ);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var i=e.target;
var g=this.__iO(i);

if(!this.__iQ(i)){qx.bom.Event.preventDefault(e);
if(g){var h=this.getFocus();

if(h&&h.selectionEnd){h.selectionStart=0;
h.selectionEnd=0;
h.blur();
}if(g){this.setFocus(g);
}}}else if(g){this.setFocus(g);
}},"default":null})),__iK:qx.event.GlobalError.observeMethod(qx.core.Variant.select(s,{"mshtml":function(e){var bj=e.srcElement;

if(bj.unselectable){bj.unselectable=v;
}this.tryActivate(this.__iL(bj));
},"gecko":function(e){var P=e.target;

while(P&&P.offsetWidth===undefined){P=P.parentNode;
}
if(P){this.tryActivate(P);
}},"webkit|opera":function(e){this.tryActivate(this.__iL(e.target));
},"default":null})),__iL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(s,{"mshtml|webkit":function(bt){var bu=this.getFocus();

if(bu&&bt!=bu&&(bu.nodeName.toLowerCase()===z||bu.nodeName.toLowerCase()===D)){bt=bu;
}return bt;
},"default":function(c){return c;
}})),__iM:qx.event.GlobalError.observeMethod(qx.core.Variant.select(s,{"mshtml|webkit":function(e){var bn=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__iQ(bn)){qx.bom.Event.preventDefault(e);
}},"default":null})),__iN:function(M){var N=qx.bom.element.Attribute.get(M,y);

if(N>=1){return true;
}var O=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(N>=0&&O[M.tagName]){return true;
}return false;
},__iO:function(bL){while(bL&&bL.nodeType===1){if(bL.getAttribute(u)==o){return null;
}
if(this.__iN(bL)){return bL;
}bL=bL.parentNode;
}return this._body;
},__iP:function(bc){var bd=bc;

while(bc&&bc.nodeType===1){if(bc.getAttribute(B)==o){return null;
}bc=bc.parentNode;
}return bd;
},__iQ:function(bE){while(bE&&bE.nodeType===1){var bF=bE.getAttribute(x);

if(bF!=null){return bF===o;
}bE=bE.parentNode;
}return true;
},_applyActive:function(bC,bD){if(bD){this.__iB(bD,bC,E,true);
}
if(bC){this.__iB(bC,bD,w,true);
}},_applyFocus:function(W,X){if(X){this.__iB(X,W,t,true);
}
if(W){this.__iB(W,X,A,true);
}if(X){this.__iB(X,W,r,false);
}
if(W){this.__iB(W,X,q,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__iR=null;
},defer:function(Q){qx.event.Registration.addHandler(Q);
var R=Q.FOCUSABLE_ELEMENTS;

for(var S in R){R[S.toUpperCase()]=1;
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(g,h){arguments.callee.base.call(this);
this.__iS=g;
this.__iT=h||g.toHashCode();
this.useMarkup(g.getMarkup());
var i={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=c;
}this.setStyles(i);
},members:{__iT:null,__iS:null,getId:function(){return this.__iT;
},getDecorator:function(){return this.__iS;
},resize:function(d,e){this.__iS.resize(this.getDomElement(),d,e);
},tint:function(f){this.__iS.tint(this.getDomElement(),f);
},getInsets:function(){return this.__iS.getInsets();
}},destruct:function(){this.__iS=null;
}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var g="ready",f="qx.application",d="beforeunload",c="qx.core.Init",b="shutdown";
qx.Class.define(c,{statics:{getApplication:function(){return this.__iV||null;
},__iU:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var k=qx.core.Setting.get(f);
var l=qx.Class.getByName(k);

if(l){this.__iV=new l;
var j=new Date;
this.__iV.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-j)+"ms");
var j=new Date;
this.__iV.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-j)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+k);
}},__iW:function(e){var i=this.__iV;

if(i){e.setReturnValue(i.close());
}},__iX:function(){var h=this.__iV;

if(h){h.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,g,a.__iU,a);
qx.event.Registration.addListener(window,b,a.__iX,a);
qx.event.Registration.addListener(window,d,a.__iW,a);
}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(h){return this.getClass(h)==d;
},isNumber:function(i){return (i!==null&&(this.getClass(i)==b||i instanceof Number));
},isBoolean:function(g){return (g!==null&&(this.getClass(g)==a||g instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==c||k instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==e||j instanceof Error));
}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var e="qx.client",d="qx.event.type.Drag";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(n,o){arguments.callee.base.call(this,true,n);

if(o){this._native=o.getNativeEvent()||null;
this._originalTarget=o.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(f){var g=arguments.callee.base.call(this,f);
g._native=this._native;
return g;
},getDocumentLeft:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var c=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(c);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(a){this.getManager().addType(a);
},addAction:function(b){this.getManager().addAction(b);
},supportsType:function(k){return this.getManager().supportsType(k);
},supportsAction:function(m){return this.getManager().supportsAction(m);
},addData:function(i,j){this.getManager().addData(i,j);
},getData:function(h){return this.getManager().getData(h);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var E="mshtml",D="",C="qx.client",B=">",A="<",z=" ",y="='",x="qx.bom.Element",w="div",v="' ",u="></";
qx.Class.define(x,{statics:{__jh:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,h,k){if(!k){k=window;
}
if(!name){throw new Error("The tag name is missing!");
}var n=this.__jh;
var m=D;

for(var p in h){if(n[p]){m+=p+y+h[p]+v;
}}var q;
if(m!=D){if(qx.bom.client.Engine.MSHTML){q=k.document.createElement(A+name+z+m+B);
}else{var o=k.document.createElement(w);
o.innerHTML=A+name+z+m+u+name+B;
q=o.firstChild;
}}else{q=k.document.createElement(name);
}
for(var p in h){if(!n[p]){qx.bom.element.Attribute.set(q,p,h[p]);
}}return q;
},empty:function(bc){return bc.innerHTML=D;
},addListener:function(V,W,X,self,Y){return qx.event.Registration.addListener(V,W,X,self,Y);
},removeListener:function(c,d,e,self,f){return qx.event.Registration.removeListener(c,d,e,self,f);
},removeListenerById:function(ba,bb){return qx.event.Registration.removeListenerById(ba,bb);
},hasListener:function(r,s,t){return qx.event.Registration.hasListener(r,s,t);
},focus:function(G){qx.event.Registration.getManager(G).getHandler(qx.event.handler.Focus).focus(G);
},blur:function(F){qx.event.Registration.getManager(F).getHandler(qx.event.handler.Focus).blur(F);
},activate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).activate(U);
},deactivate:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).deactivate(T);
},capture:function(a,b){qx.event.Registration.getManager(a).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(a,b);
},releaseCapture:function(g){qx.event.Registration.getManager(g).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(g);
},clone:function(H,I){var L;

if(I||(qx.core.Variant.isSet(C,E)&&!qx.xml.Document.isXmlDocument(H))){var P=qx.event.Registration.getManager(H);
var J=qx.dom.Hierarchy.getDescendants(H);
J.push(H);
}if(qx.core.Variant.isSet(C,E)){for(var i=0,l=J.length;i<l;i++){P.toggleAttachedEvents(J[i],false);
}}var L=H.cloneNode(true);
if(qx.core.Variant.isSet(C,E)){for(var i=0,l=J.length;i<l;i++){P.toggleAttachedEvents(J[i],true);
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
(function(){var g="interval",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(g,this._onInterval,this);
h.start();
this.__jj=h;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__jj:null,_applyTimeoutInterval:function(a){this.__jj.setInterval(a);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__jj){this.__jj.stop();
}this.__jj=null;
}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__jk:null,__jl:false,__jm:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var u=this.getCommand();

if(u){if(this.__jl){this.__jl=false;
}else{this.__jl=true;
u.execute(this);
}}this.fireEvent(n);
},__jn:function(e){if(this.__jl){this.__jl=false;
return;
}this.__jl=true;
this.execute();
},_applyCommand:function(o,p){if(p!=null){p.removeListenerById(this.__jm);
}
if(o!=null){this.__jm=o.addListener(n,this.__jn,this);
}var s=this.__jk;

if(s==null){this.__jk=s={};
}
for(var i=0;i<this._bindableProperties.length;i++){var r=this._bindableProperties[i];
if(p!=null&&s[r]!=null){p.removeBinding(s[r]);
s[r]=null;
}if(o!=null&&qx.Class.hasProperty(this.constructor,r)){var q=o.get(r);

if(q==null){var t=this.get(r);
}s[r]=o.bind(r,this,r);
if(t){this.set(r,t);
}}}}},destruct:function(){this.__jk=null;
}});
})();
(function(){var D=":",C="qx.client",B="anonymous",A="...",z="qx.dev.StackTrace",y="",x="\n",w="/source/class/",v=".";
qx.Class.define(z,{statics:{getStackTrace:qx.core.Variant.select(C,{"gecko":function(){try{throw new Error();
}catch(M){var V=this.getStackTraceFromError(M);
qx.lang.Array.removeAt(V,0);
var T=this.getStackTraceFromCaller(arguments);
var R=T.length>V.length?T:V;

for(var i=0;i<Math.min(T.length,V.length);i++){var S=T[i];

if(S.indexOf(B)>=0){continue;
}var ba=S.split(D);

if(ba.length!=2){continue;
}var X=ba[0];
var Q=ba[1];
var P=V[i];
var bb=P.split(D);
var W=bb[0];
var O=bb[1];

if(qx.Class.getByName(W)){var U=W;
}else{U=X;
}var Y=U+D;

if(Q){Y+=Q+D;
}Y+=O;
R[i]=Y;
}return R;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var t;

try{t.bar();
}catch(bc){var u=this.getStackTraceFromError(bc);
qx.lang.Array.removeAt(u,0);
return u;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(C,{"opera":function(N){return [];
},"default":function(E){var J=[];
var I=qx.lang.Function.getCaller(E);
var F={};

while(I){var G=qx.lang.Function.getName(I);
J.push(G);

try{I=I.caller;
}catch(K){break;
}
if(!I){break;
}var H=qx.core.ObjectRegistry.toHashCode(I);

if(F[H]){J.push(A);
break;
}F[H]=I;
}return J;
}}),getStackTraceFromError:qx.core.Variant.select(C,{"gecko":function(e){if(!e.stack){return [];
}var l=/@(.+):(\d+)$/gm;
var f;
var g=[];

while((f=l.exec(e.stack))!=null){var h=f[1];
var k=f[2];
var j=this.__jo(h);
g.push(j+D+k);
}return g;
},"webkit":function(L){if(L.sourceURL&&L.line){return [this.__jo(L.sourceURL)+D+L.line];
}else{return [];
}},"opera":function(m){if(m.message.indexOf("Backtrace:")<0){return [];
}var o=[];
var p=qx.lang.String.trim(m.message.split("Backtrace:")[1]);
var q=p.split(x);

for(var i=0;i<q.length;i++){var n=q[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(n&&n.length>=2){var s=n[1];
var r=this.__jo(n[2]);
o.push(r+D+s);
}}return o;
},"default":function(){return [];
}}),__jo:function(a){var d=w;
var b=a.indexOf(d);
var c=(b==-1)?a:a.substring(b+d.length).replace(/\//g,v).replace(/\.js$/,y);
return c;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(c,d){{};
this.__jp=b+(c&&c.message?c.message:c);
Error.call(this,this.__jp);
this.__jq=d;
this.__jr=c;
},members:{__jr:null,__jq:null,__jp:null,toString:function(){return this.__jp;
},getArguments:function(){return this.__jq;
},getSourceException:function(){return this.__jr;
}},destruct:function(){this.__jr=null;
this.__jq=null;
this.__jp=null;
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__js:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__jt:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__jt[name];
s[t]();
}else{var u=this.__js[name];
s[u](q);
}}}});
})();
(function(){var I="qx.client",H="character",G="EndToEnd",F="input",E="textarea",D="StartToStart",C='character',B="qx.bom.Selection",A="button",z="#text",y="body";
qx.Class.define(B,{statics:{getSelectionObject:qx.core.Variant.select(I,{"mshtml":function(N){return N.selection;
},"default":function(a){return qx.dom.Node.getWindow(a).getSelection();
}}),get:qx.core.Variant.select(I,{"mshtml":function(bq){var br=qx.bom.Range.get(qx.dom.Node.getDocument(bq));
return br.text;
},"default":function(T){if(this.__jB(T)){return T.value.substring(T.selectionStart,T.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(T)).toString();
}}}),getLength:qx.core.Variant.select(I,{"mshtml":function(Q){var S=this.get(Q);
var R=qx.util.StringSplit.split(S,/\r\n/);
return S.length-(R.length-1);
},"opera":function(bs){var bx,bv,bt;

if(this.__jB(bs)){var bw=bs.selectionStart;
var bu=bs.selectionEnd;
bx=bs.value.substring(bw,bu);
bv=bu-bw;
}else{bx=qx.bom.Selection.get(bs);
bv=bx.length;
}bt=qx.util.StringSplit.split(bx,/\r\n/);
return bv-(bt.length-1);
},"default":function(u){if(this.__jB(u)){return u.selectionEnd-u.selectionStart;
}else{return this.get(u).length;
}}}),getStart:qx.core.Variant.select(I,{"mshtml":function(bg){if(this.__jB(bg)){var bl=qx.bom.Range.get();
if(!bg.contains(bl.parentElement())){return -1;
}var bm=qx.bom.Range.get(bg);
var bk=bg.value.length;
bm.moveToBookmark(bl.getBookmark());
bm.moveEnd(C,bk);
return bk-bm.text.length;
}else{var bm=qx.bom.Range.get(bg);
var bi=bm.parentElement();
var bn=qx.bom.Range.get();
bn.moveToElementText(bi);
var bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(bg));
bh.setEndPoint(D,bm);
bh.setEndPoint(G,bn);
if(bn.compareEndPoints(D,bh)==0){return 0;
}var bj;
var bo=0;

while(true){bj=bh.moveStart(H,-1);
if(bn.compareEndPoints(D,bh)==0){break;
}if(bj==0){break;
}else{bo++;
}}return ++bo;
}},"gecko|webkit":function(k){if(this.__jB(k)){return k.selectionStart;
}else{var m=qx.dom.Node.getDocument(k);
var l=this.getSelectionObject(m);
if(l.anchorOffset<l.focusOffset){return l.anchorOffset;
}else{return l.focusOffset;
}}},"default":function(O){if(this.__jB(O)){return O.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(O)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(I,{"mshtml":function(b){if(this.__jB(b)){var g=qx.bom.Range.get();
if(!b.contains(g.parentElement())){return -1;
}var h=qx.bom.Range.get(b);
var f=b.value.length;
h.moveToBookmark(g.getBookmark());
h.moveStart(C,-f);
return h.text.length;
}else{var h=qx.bom.Range.get(b);
var d=h.parentElement();
var i=qx.bom.Range.get();
i.moveToElementText(d);
var f=i.text.length;
var c=qx.bom.Range.get(qx.dom.Node.getBodyElement(b));
c.setEndPoint(G,h);
c.setEndPoint(D,i);
if(i.compareEndPoints(G,c)==0){return f-1;
}var e;
var j=0;

while(true){e=c.moveEnd(H,1);
if(i.compareEndPoints(G,c)==0){break;
}if(e==0){break;
}else{j++;
}}return f-(++j);
}},"gecko|webkit":function(v){if(this.__jB(v)){return v.selectionEnd;
}else{var x=qx.dom.Node.getDocument(v);
var w=this.getSelectionObject(x);
if(w.focusOffset>w.anchorOffset){return w.focusOffset;
}else{return w.anchorOffset;
}}},"default":function(P){if(this.__jB(P)){return P.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(P)).focusOffset;
}}}),__jB:function(by){return qx.dom.Node.isElement(by)&&(by.nodeName.toLowerCase()==F||by.nodeName.toLowerCase()==E);
},set:qx.core.Variant.select(I,{"mshtml":function(U,V,W){var X;
if(qx.dom.Node.isDocument(U)){U=U.body;
}
if(qx.dom.Node.isElement(U)||qx.dom.Node.isText(U)){switch(U.nodeName.toLowerCase()){case F:case E:case A:if(W===undefined){W=U.value.length;
}
if(V>=0&&V<=U.value.length&&W>=0&&W<=U.value.length){X=qx.bom.Range.get(U);
X.collapse(true);
X.moveStart(H,V);
X.moveEnd(H,W-V);
X.select();
return true;
}break;
case z:if(W===undefined){W=U.nodeValue.length;
}
if(V>=0&&V<=U.nodeValue.length&&W>=0&&W<=U.nodeValue.length){X=qx.bom.Range.get(qx.dom.Node.getBodyElement(U));
X.moveToElementText(U.parentNode);
X.collapse(true);
X.moveStart(H,V);
X.moveEnd(H,W-V);
X.select();
return true;
}break;
default:if(W===undefined){W=U.childNodes.length-1;
}if(U.childNodes[V]&&U.childNodes[W]){X=qx.bom.Range.get(qx.dom.Node.getBodyElement(U));
X.moveToElementText(U.childNodes[V]);
X.collapse(true);
var Y=qx.bom.Range.get(qx.dom.Node.getBodyElement(U));
Y.moveToElementText(U.childNodes[W]);
X.setEndPoint(G,Y);
X.select();
return true;
}}}return false;
},"default":function(n,o,p){var t=n.nodeName.toLowerCase();

if(qx.dom.Node.isElement(n)&&(t==F||t==E)){if(p===undefined){p=n.value.length;
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
}}),setAll:function(bp){return qx.bom.Selection.set(bp,0);
},clear:qx.core.Variant.select(I,{"mshtml":function(J){var K=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(J));
var L=qx.bom.Range.get(J);
var parent=L.parentElement();
var M=qx.bom.Range.get(qx.dom.Node.getDocument(J));
if(parent==M.parentElement()&&parent==J){K.empty();
}},"default":function(ba){var bc=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(ba));
var be=ba.nodeName.toLowerCase();
if(qx.dom.Node.isElement(ba)&&(be==F||be==E)){ba.setSelectionRange(0,0);
qx.bom.Element.blur(ba);
}else if(qx.dom.Node.isDocument(ba)||be==y){bc.collapse(ba.body?ba.body:ba,0);
}else{var bd=qx.bom.Range.get(ba);

if(!bd.collapsed){var bf;
var bb=bd.commonAncestorContainer;
if(qx.dom.Node.isElement(ba)&&qx.dom.Node.isText(bb)){bf=bb.parentNode;
}else{bf=bb;
}
if(bf==ba){bc.collapse(ba,0);
}}}}})}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__jC:false,__jD:{},__jE:0,MAX_RETRIES:10,scheduleFlush:function(d){var self=qx.ui.core.queue.Manager;
self.__jD[d]=true;

if(!self.__jC){self.__jH.schedule();
self.__jC=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__jF){return;
}self.__jF=true;
self.__jH.cancel();
var f=self.__jD;
self.__jG(function(){while(f.visibility||f.widget||f.appearance||f.layout||f.element){if(f.widget){delete f.widget;
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
}}},function(){self.__jC=false;
});
self.__jG(function(){if(f.dispose){delete f.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__jF=false;
});
self.__jE=0;
},__jG:function(g,h){var self=qx.ui.core.queue.Manager;

try{g();
}catch(e){{};
self.__jC=false;
self.__jF=false;
self.__jE+=1;

if(self.__jE<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__jE-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{h();
}}},defer:function(c){c.__jH=new qx.util.DeferredCall(c.flush);
qx.html.Element._scheduleFlush=c.scheduleFlush;
qx.event.Registration.addListener(window,a,c.flush);
}});
})();
(function(){var t="qx.client",s="load",r="qx.io.ImageLoader";
qx.Bootstrap.define(r,{statics:{__jI:{},__jJ:{width:null,height:null},__jK:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(k){var m=this.__jI[k];
return !!(m&&m.loaded);
},isFailed:function(b){var c=this.__jI[b];
return !!(c&&c.failed);
},isLoading:function(o){var p=this.__jI[o];
return !!(p&&p.loading);
},getFormat:function(A){var B=this.__jI[A];
return B?B.format:null;
},getSize:function(w){var x=this.__jI[w];
return x?
{width:x.width,height:x.height}:this.__jJ;
},getWidth:function(y){var z=this.__jI[y];
return z?z.width:null;
},getHeight:function(u){var v=this.__jI[u];
return v?v.height:null;
},load:function(d,e,f){var g=this.__jI[d];

if(!g){g=this.__jI[d]={};
}if(e&&!f){f=window;
}if(g.loaded||g.loading||g.failed){if(e){if(g.loading){g.callbacks.push(e,f);
}else{e.call(f,d,g);
}}}else{g.loading=true;
g.callbacks=[];

if(e){g.callbacks.push(e,f);
}var j=new Image();
var h=qx.lang.Function.listener(this.__jL,this,j,d);
j.onload=h;
j.onerror=h;
j.src=d;
}},__jL:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__jI[E];
if(event.type===s){F.loaded=true;
F.width=this.__jM(D);
F.height=this.__jN(D);
var G=this.__jK.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__jM:qx.core.Variant.select(t,{"gecko":function(n){return n.naturalWidth;
},"default":function(q){return q.width;
}}),__jN:qx.core.Variant.select(t,{"gecko":function(a){return a.naturalHeight;
},"default":function(C){return C.height;
}})}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
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
(function(){var c="qx.core.AssertionError";
qx.Class.define(c,{extend:qx.type.BaseError,construct:function(a,b){qx.type.BaseError.call(this,a,b);
this.__jW=qx.dev.StackTrace.getStackTrace();
},members:{__jW:null,getStackTrace:function(){return this.__jW;
}}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__jY:function(z){var A=navigator.userAgent;
var C=new RegExp(t+z+e);
var D=A.match(C);

if(!D){return;
}var name=D[1].toLowerCase();
var B=D[3];
if(A.match(/Version(\/| )([0-9]+\.[0-9])/)){B=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(A.indexOf(b)!==-1||A.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
B=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=B;
this.VERSION=parseFloat(B,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(F){F.__jY(p);
},"gecko":function(E){E.__jY(l);
},"mshtml":function(G){G.__jY(w);
},"opera":function(a){a.__jY(q);
}})});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__kB,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__kB:function(name,e){var v=e.getData();
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
(function(){var D="change",C="add",B="remove",A="order",z="",y="qx.data.Array",x="?",w="changeBubble",v="qx.event.type.Event",u="number",s="changeLength",t="qx.event.type.Data";
qx.Class.define(y,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(V){arguments.callee.base.call(this);
if(V==undefined){this.__ks=[];
}else if(arguments.length>1){this.__ks=[];

for(var i=0;i<arguments.length;i++){this.__ks.push(arguments[i]);
}}else if(typeof V==u){this.__ks=new Array(V);
}else if(V instanceof Array){this.__ks=qx.lang.Array.clone(V);
}else{this.__ks=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__ks.length;i++){this._applyEventPropagation(this.__ks[i],null,i);
}this.__kt();
},events:{"change":t,"changeLength":v},members:{__ks:null,concat:function(L){if(L){var M=this.__ks.concat(L);
}else{var M=this.__ks.concat();
}return new qx.data.Array(M);
},join:function(bh){return this.__ks.join(bh);
},pop:function(){var g=this.__ks.pop();
this.__kt();
this._applyEventPropagation(null,g,this.length-1);
this.fireDataEvent(D,{start:this.length-1,end:this.length-1,type:B,items:[g]},null);
return g;
},push:function(F){for(var i=0;i<arguments.length;i++){this.__ks.push(arguments[i]);
this.__kt();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(D,{start:this.length-1,end:this.length-1,type:C,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__ks.reverse();
this.fireDataEvent(D,{start:0,end:this.length-1,type:A,items:null},null);
},shift:function(){var o=this.__ks.shift();
this.__kt();
this._applyEventPropagation(null,o);
this.fireDataEvent(D,{start:0,end:this.length-1,type:B,items:[o]},null);
return o;
},slice:function(m,n){return new qx.data.Array(this.__ks.slice(m,n));
},splice:function(X,Y,ba){var bg=this.__ks.length;
var bd=this.__ks.splice.apply(this.__ks,arguments);
if(this.__ks.length!=bg){this.__kt();
}var be=Y>0;
var bb=arguments.length>2;
var bc=null;

if(be||bb){if(this.__ks.length>bg){var bf=C;
}else if(this.__ks.length<bg){var bf=B;
bc=bd;
}else{var bf=A;
}this.fireDataEvent(D,{start:X,end:this.length-1,type:bf,items:bc},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,X+i);
}this.fireDataEvent(w,{value:this,name:x,old:bd});
for(var i=0;i<bd.length;i++){this._applyEventPropagation(null,bd[i],i);
}return (new qx.data.Array(bd));
},sort:function(q){this.__ks.sort.apply(this.__ks,arguments);
this.fireDataEvent(D,{start:0,end:this.length-1,type:A,items:null},null);
},unshift:function(O){for(var i=arguments.length-1;i>=0;i--){this.__ks.unshift(arguments[i]);
this.__kt();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(D,{start:0,end:this.length-1,type:C,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__ks;
},getItem:function(G){return this.__ks[G];
},setItem:function(h,j){var k=this.__ks[h];
this.__ks[h]=j;
this._applyEventPropagation(j,k,h);
if(this.length!=this.__ks.length){this.__kt();
}this.fireDataEvent(D,{start:h,end:h,type:C,items:[j]},null);
},getLength:function(){return this.length;
},indexOf:function(E){return this.__ks.indexOf(E);
},toString:function(){if(this.__ks!=null){return this.__ks.toString();
}return z;
},contains:function(N){return this.__ks.indexOf(N)!==-1;
},copy:function(){return this.concat();
},insertAt:function(H,I){this.splice(H,0,I);
},insertBefore:function(Q,R){var S=this.indexOf(Q);

if(S==-1){this.push(R);
}else{this.splice(S,0,R);
}},insertAfter:function(a,b){var c=this.indexOf(a);

if(c==-1||c==(this.length-1)){this.push(b);
}else{this.splice(c+1,0,b);
}},removeAt:function(p){return this.splice(p,1)[0];
},removeAll:function(){for(var i=0;i<this.__ks.length;i++){this._applyEventPropagation(null,this.__ks[i],i);
}var U=this.getLength();
var T=this.__ks.concat();
this.__ks.length=0;
this.__kt();
this.fireDataEvent(D,{start:0,end:U-1,type:B,items:T},null);
},append:function(P){{};
for(var i=0;i<P.length;i++){this._applyEventPropagation(P[i],null,this.__ks.length+i);
}Array.prototype.push.apply(this.__ks,P);
this.__kt();
},remove:function(J){var K=this.indexOf(J);

if(K!=-1){this.splice(K,1);
return J;
}},equals:function(W){if(this.length!==W.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==W.getItem(i)){return false;
}}return true;
},sum:function(){var f=0;

for(var i=0;i<this.length;i++){f+=this.getItem(i);
}return f;
},max:function(){var l=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>l){l=this.getItem(i);
}}return l===undefined?null:l;
},min:function(){var r=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<r){r=this.getItem(i);
}}return r===undefined?null:r;
},forEach:function(d,e){for(var i=0;i<this.__ks.length;i++){d.call(e,this.__ks[i]);
}},__kt:function(){this.length=this.__ks.length;
this.fireEvent(s,qx.event.type.Event);
}},destruct:function(){this.__ks=null;
}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var n="Boolean",m="qx.ui.core.SingleSelectionManager",l="__kw",k="__ku",j="changeSelected",h="__kv",g="qx.event.type.Data";
qx.Class.define(m,{extend:qx.core.Object,construct:function(s){arguments.callee.base.call(this);
{};
this.__ku=s;
},events:{"changeSelected":g},properties:{allowEmptySelection:{check:n,init:true,apply:l}},members:{__kv:null,__ku:null,getSelected:function(){return this.__kv;
},setSelected:function(e){if(!this.__ky(e)){throw new Error("Could not select "+e+", because it is not a child element!");
}this.__kx(e);
},resetSelected:function(){this.__kx(null);
},isSelected:function(f){if(!this.__ky(f)){throw new Error("Could not check if "+f+" is selected,"+" because it is not a child element!");
}return this.__kv===f;
},isSelectionEmpty:function(){return this.__kv==null;
},getSelectables:function(){var q=this.__ku.getItems();
var r=[];

for(var i=0;i<q.length;i++){if(this.__ku.isItemSelectable(q[i])){r.push(q[i]);
}}return r;
},__kw:function(o,p){if(!o){this.__kx(this.__kv);
}},__kx:function(a){var d=this.__kv;
var c=a;

if(c!=null&&d===c){return;
}
if(!this.isAllowEmptySelection()&&c==null){var b=this.getSelectables()[0];

if(b){c=b;
}}this.__kv=c;
this.fireDataEvent(j,c,d);
},__ky:function(t){var u=this.__ku.getItems();

for(var i=0;i<u.length;i++){if(u[i]===t){return true;
}}return false;
}},destruct:function(){if(this.__ku.toHashCode){this._disposeObjects(k);
}else{this.__ku=null;
}this._disposeObjects(h);
}});
})();
(function(){var h="qx.ui.core.MSingleSelectionHandling",g="changeSelection",f="changeSelected",d="__kz",c="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":c},members:{__kz:null,getSelection:function(){var a=this.__kA().getSelected();

if(a){return [a];
}else{return [];
}},setSelection:function(i){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
switch(i.length){case 0:this.resetSelection();
break;
case 1:this.__kA().setSelected(i[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+i.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__kA().resetSelected();
},isSelected:function(b){return this.__kA().isSelected(b);
},isSelectionEmpty:function(){return this.__kA().isSelectionEmpty();
},getSelectables:function(){return this.__kA().getSelectables();
},_onChangeSelected:function(e){var l=e.getData();
var k=e.getOldData();
l==null?l=[]:l=[l];
k==null?k=[]:k=[k];
this.fireDataEvent(g,l,k);
},__kA:function(){if(this.__kz==null){var m=this;
this.__kz=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(j){if(m._isItemSelectable){return m._isItemSelectable(j);
}else{return j.isEnabled()&&j.isVisible();
}}});
this.__kz.addListener(f,this._onChangeSelected,this);
}this.__kz.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__kz;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var g="change",f="qx.event.type.Data",e="qx.ui.form.MModelSelection",d="__kC",c="changeSelection";
qx.Mixin.define(e,{construct:function(){this.__kC=new qx.data.Array();
this.__kC.addListener(g,this.__kF,this);
this.addListener(c,this.__kE,this);
},events:{changeModelSelection:f},members:{__kC:null,__kD:false,__kE:function(){if(this.__kD){return;
}var s=this.getSelection();
var q=[];

for(var i=0;i<s.length;i++){var t=s[i];
var r=t.getModel?t.getModel():null;

if(r!==null){q.push(r);
}}this.setModelSelection(q);
},__kF:function(){this.__kD=true;
var k=this.getSelectables();
var m=[];
var l=this.__kC.toArray();

for(var i=0;i<l.length;i++){var o=l[i];

for(var j=0;j<k.length;j++){var p=k[j];
var h=p.getModel?p.getModel():null;

if(o===h){m.push(p);
break;
}}}this.setSelection(m);
this.__kD=false;
var n=this.getSelection();

if(!qx.lang.Array.equals(n,m)){this.__kE();
}},getModelSelection:function(){return this.__kC;
},setModelSelection:function(a){if(!a){this.__kC.removeAll();
return;
}{};
a.unshift(this.__kC.getLength());
a.unshift(0);
var b=this.__kC.splice.apply(this.__kC,a);
b.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var c="qx.ui.core.scroll.IScrollBar",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"scroll":b},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(e){this.assertNumber(e);
},scrollBy:function(a){this.assertNumber(a);
},scrollBySteps:function(d){this.assertNumber(d);
}}});
})();
(function(){var j="__pL",i="Use 'getBlocker().getContentBlockerElement()' instead.",h="Use 'getBlocker().getBlockerElement()' instead.",g="_applyBlockerColor",f="Number",e="qx.ui.core.MBlocker",d="_applyBlockerOpacity",c="Color";
qx.Mixin.define(e,{construct:function(){this.__pL=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:c,init:null,nullable:true,apply:g,themeable:true},blockerOpacity:{check:f,init:1,apply:d,themeable:true}},members:{__pL:null,_applyBlockerColor:function(a,b){this.__pL.setColor(a);
},_applyBlockerOpacity:function(k,l){this.__pL.setOpacity(k);
},block:function(){this.__pL.block();
},isBlocked:function(){return this.__pL.isBlocked();
},unblock:function(){this.__pL.unblock();
},forceUnblock:function(){this.__pL.forceUnblock();
},blockContent:function(m){this.__pL.blockContent(m);
},isContentBlocked:function(){return this.__pL.isContentBlocked();
},unblockContent:function(){this.__pL.unblockContent();
},forceUnblockContent:function(){this.__pL.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__pL.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__pL.getBlockerElement();
},getBlocker:function(){return this.__pL;
}},destruct:function(){this._disposeObjects(j);
}});
})();
(function(){var m="qx.ui.window.Window",l="changeModal",k="changeVisibility",j="changeActive",i="_applyActiveWindow",h="qx.ui.window.MDesktop",g="__lz",f="__ly";
qx.Mixin.define(h,{properties:{activeWindow:{check:m,apply:i,init:null,nullable:true}},members:{__ly:null,__lz:null,getWindowManager:function(){if(!this.__lz){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__lz;
},supportsMaximize:function(){return true;
},setWindowManager:function(d){if(this.__lz){this.__lz.setDesktop(null);
}d.setDesktop(this);
this.__lz=d;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(o,p){this.getWindowManager().changeActiveWindow(o,p);

if(o){o.setActive(true);
}
if(p){p.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(b){if(qx.Class.isDefined(m)&&b instanceof qx.ui.window.Window){this._addWindow(b);
}},_addWindow:function(c){if(!qx.lang.Array.contains(this.getWindows(),c)){this.getWindows().push(c);
c.addListener(j,this._onChangeActive,this);
c.addListener(l,this._onChangeModal,this);
c.addListener(k,this._onChangeVisibility,this);
}
if(c.getActive()){this.setActiveWindow(c);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(n){if(qx.Class.isDefined(m)&&n instanceof qx.ui.window.Window){this._removeWindow(n);
}},_removeWindow:function(a){qx.lang.Array.remove(this.getWindows(),a);
a.removeListener(j,this._onChangeActive,this);
a.removeListener(l,this._onChangeModal,this);
a.removeListener(k,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ly){this.__ly=[];
}return this.__ly;
}},destruct:function(){this._disposeArray(f);
this._disposeObjects(g);
}});
})();
(function(){var t="contextmenu",s="help",r="qx.client",q="changeGlobalCursor",p="abstract",o="Boolean",n="root",m="",l=" !important",k="_applyGlobalCursor",h="_applyNativeHelp",j=";",i="qx.ui.root.Abstract",g="String",f="*";
qx.Class.define(i,{type:p,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:g,nullable:true,themeable:true,apply:k,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__kG:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(r,{"mshtml":function(c,d){},"default":function(y,z){var A=qx.bom.Stylesheet;
var B=this.__kG;

if(!B){this.__kG=B=A.createElement();
}A.removeAllRules(B);

if(y){A.addRule(B,f,qx.bom.element.Cursor.compile(y).replace(j,m)+l);
}}}),_applyNativeContextMenu:function(u,v){if(u){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(r,{"mshtml":function(a,b){if(b===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__kG=null;
},defer:function(w,x){qx.ui.core.MChildrenHandling.remap(x);
}});
})();
(function(){var I="splitter",H="slider",G="mousedown",F="mouseout",E="mousemove",D="mouseup",C="losecapture",B="active",A="horizontal",z="vertical",Y="knob",X="Integer",W="height",V="row-resize",U="move",T="maxHeight",S="width",R="_applyOrientation",Q="mouseover",P="splitpane",N="qx.ui.splitpane.Pane",O="_applyOffset",L="minHeight",M="minWidth",J="col-resize",K="maxWidth";
qx.Class.define(N,{extend:qx.ui.core.Widget,construct:function(l){arguments.callee.base.call(this);
this.__kH=[];
if(l){this.setOrientation(l);
}else{this.initOrientation();
}this.addListener(G,this._onMouseDown);
this.addListener(D,this._onMouseUp);
this.addListener(E,this._onMouseMove);
this.addListener(F,this._onMouseOut);
this.addListener(C,this._onMouseUp);
},properties:{appearance:{refine:true,init:P},offset:{check:X,init:6,apply:O},orientation:{init:A,check:[A,z],apply:R}},members:{__kI:null,__kJ:false,__kK:null,__kL:null,__kM:null,__kN:null,__kO:null,__kH:null,_createChildControlImpl:function(n){var o;

switch(n){case H:o=new qx.ui.splitpane.Slider(this);
o.exclude();
this._add(o,{type:n});
break;
case I:o=new qx.ui.splitpane.Splitter(this);
this._add(o,{type:n});
o.addListener(U,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){o.addListener(Q,this._onSplitterMouseOver,o);
}break;
}return o||arguments.callee.base.call(this,n);
},_applyOrientation:function(r,s){var t=this.getChildControl(H);
var w=this.getChildControl(I);
this.__kM=r===A;
var v=this._getLayout();

if(v){v.dispose();
}var u=r===z?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(u);
w.removeState(s);
w.addState(r);
w.getChildControl(Y).removeState(s);
w.getChildControl(Y).addState(r);
t.removeState(s);
t.addState(r);
},_applyOffset:function(ba,bb){var bc=this.getChildControl(I);

if(bb===0){bc.removeListener(G,this._onMouseDown,this);
bc.removeListener(E,this._onMouseMove,this);
bc.removeListener(F,this._onMouseOut,this);
bc.removeListener(D,this._onMouseUp,this);
bc.removeListener(C,this._onMouseUp,this);
this.addListener(G,this._onMouseDown);
this.addListener(D,this._onMouseUp);
this.addListener(E,this._onMouseMove);
this.addListener(F,this._onMouseOut);
this.addListener(C,this._onMouseUp);
}
if(ba===0){this.removeListener(G,this._onMouseDown);
this.removeListener(D,this._onMouseUp);
this.removeListener(E,this._onMouseMove);
this.removeListener(F,this._onMouseOut);
this.removeListener(C,this._onMouseUp);
bc.addListener(G,this._onMouseDown,this);
bc.addListener(E,this._onMouseMove,this);
bc.addListener(F,this._onMouseOut,this);
bc.addListener(D,this._onMouseUp,this);
bc.addListener(C,this._onMouseUp,this);
}},add:function(bd,be){if(be==null){this._add(bd);
}else{this._add(bd,{flex:be});
}this.__kH.push(bd);
},remove:function(br){this._remove(br);
qx.lang.Array.remove(this.__kH,br);
},getChildren:function(){return this.__kH;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var bm=this.getChildControl(I);
var bo=bm.getContainerLocation();
var bn=this.getContentLocation();
this.__kI=this.__kM?e.getDocumentLeft()-bo.left+bn.left:e.getDocumentTop()-bo.top+bn.top;
var bq=this.getChildControl(H);
var bp=bm.getBounds();
bq.setUserBounds(bp.left,bp.top,bp.width,bp.height);
bq.setZIndex(bm.getZIndex()+1);
bq.show();
this.__kJ=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__kJ){this.__kQ();
var p=this.getChildControl(H);
var q=this.__kN;

if(this.__kM){p.setDomLeft(q);
}else{p.setDomTop(q);
}e.stop();
}else{this.__kP();
}},_onMouseOut:function(e){this._setLastMousePosition(-1,-1);
this.__kP();
},_onMouseUp:function(e){if(!this.__kJ){return;
}this._finalizeSizes();
var m=this.getChildControl(H);
m.exclude();
this.__kJ=false;
this.releaseCapture();
this.__kP();
e.stop();
},_onSplitterMove:function(){this.__kP();
},_onSplitterMouseOver:function(){this.addState(B);
},_finalizeSizes:function(){var bv=this.__kN;
var bs=this.__kO;

if(bv==null){return;
}var bx=this._getChildren();
var bw=bx[2];
var bt=bx[3];
var bu=bw.getLayoutProperties().flex;
var by=bt.getLayoutProperties().flex;
if((bu!=0)&&(by!=0)){bw.setLayoutProperties({flex:bv});
bt.setLayoutProperties({flex:bs});
}else{if(this.__kM){bw.setWidth(bv);
bt.setWidth(bs);
}else{bw.setHeight(bv);
bt.setHeight(bs);
}}},_isNear:function(){var bf=this.getChildControl(I);
var bh=bf.getBounds();
var bj=bf.getContainerLocation();
var bg=this.getOffset();
if(!bj){return;
}var bk=this.__kK;
var bl=bh.width;
var bi=bj.left;

if(bl<bg){bi-=Math.floor((bg-bl)/2);
bl=bg;
}
if(bk<bi||bk>(bi+bl)){return false;
}var bk=this.__kL;
var bl=bh.height;
var bi=bj.top;

if(bl<bg){bi-=Math.floor((bg-bl)/2);
bl=bg;
}
if(bk<bi||bk>(bi+bl)){return false;
}return true;
},__kP:function(){var bA=this.getChildControl(I);
var bB=this.getApplicationRoot();
if(this.__kJ||this._isNear()){var bz=this.__kM?J:V;
this.setCursor(bz);
bB.setGlobalCursor(bz);
bA.addState(B);
}else if(bA.hasState(B)){this.resetCursor();
bB.resetGlobalCursor();
bA.removeState(B);
}},__kQ:function(){if(this.__kM){var c=M,k=S,d=K,i=this.__kK;
}else{var c=L,k=W,d=T,i=this.__kL;
}var j=this._getChildren();
var a=j[2].getSizeHint();
var g=j[3].getSizeHint();
var h=j[2].getBounds()[k]+j[3].getBounds()[k];
var f=i-this.__kI;
var b=h-f;
if(f<a[c]){b-=a[c]-f;
f=a[c];
}else if(b<g[c]){f-=g[c]-b;
b=g[c];
}if(f>a[d]){b+=f-a[d];
f=a[d];
}else if(b>g[d]){f+=b-g[d];
b=g[d];
}this.__kN=f;
this.__kO=b;
},_isActiveDragSession:function(){return this.__kJ;
},_setLastMousePosition:function(x,y){this.__kK=x;
this.__kL=y;
}},destruct:function(){this.__kH=null;
}});
})();
(function(){var u="container",t="handle",s="both",r="Integer",q="middle",p="qx.ui.toolbar.Part",o="icon",n="label",m="changeShow",k="_applySpacing",j="toolbar/part";
qx.Class.define(p,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(t);
},properties:{appearance:{refine:true,init:j},show:{init:s,check:[s,n,o],inheritable:true,event:m},spacing:{nullable:true,check:r,themeable:true,apply:k}},members:{_createChildControlImpl:function(d){var e;

switch(d){case t:e=new qx.ui.basic.Image();
e.setAlignY(q);
this._add(e);
break;
case u:e=new qx.ui.toolbar.PartContainer;
this._add(e);
break;
}return e||arguments.callee.base.call(this,d);
},getChildrenContainer:function(){return this.getChildControl(u);
},_applySpacing:function(f,g){var h=this.getChildControl(u).getLayout();
f==null?h.resetSpacing():h.setSpacing(f);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var b=this.getChildren();
var a=[];
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(c instanceof qx.ui.menubar.Button){a.push(c);
}}return a;
}}});
})();
(function(){var k="complete",j="initialized",i="loading",h="webkit",g="load",f="qx.event.type.Event",e="qx.client",d="qx.io.part.Package";
qx.Class.define(d,{extend:qx.core.Object,construct:function(a,b,c){arguments.callee.base.call(this);
this.__kR=c?k:j;
this.__kS=a;
this.__kT=b;
},events:{"load":f},members:{__kT:null,__kS:null,__kR:null,__kU:function(n,o,self){if(n.length==0){o.call(self);
return;
}this.__kR=i;
var q=0;
var p=function(l){if(q>=n.length){this.__kR=k;
o.call(self);
return;
}var m=new qx.io.ScriptLoader();
m.load(l.shift(),function(){q+=1;
m.dispose();

if(qx.core.Variant.isSet(e,h)){qx.event.Timer.once(function(){p.call(this,l,o,self);
},this,0);
}else{p.call(this,l,o,self);
}},this);
};
p(qx.lang.Array.clone(n));
},getReadyState:function(){return this.__kR;
},load:function(){if(this.__kR!==j){return;
}this.__kR=i;
this.__kU(this.__kS,function(){this.__kR=k;
var r=qx.$$loader.packageHashes[this.__kT];
this._importPackageData(qx.$$packageData[r]);
this.fireEvent(g);
},this);
},_importPackageData:qx.$$loader.importPackageData},destruct:function(){this.__kS=null;
}});
})();
(function(){var q="mshtml",p="pop.push.reverse.shift.sort.splice.unshift.join.slice",o="number",n="qx.type.BaseArray",m="qx.client",l=".";
qx.Class.define(n,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function k(c){if(qx.core.Variant.isSet(m,q)){j.prototype={length:0,$$isArray:true};
var f=p.split(l);

for(var length=f.length;length;){j.prototype[f[--length]]=Array.prototype[f[length]];
}}var g=Array.prototype.slice;
j.prototype.concat=function(){var t=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var s;

if(arguments[i] instanceof j){s=g.call(arguments[i],0);
}else if(arguments[i] instanceof Array){s=arguments[i];
}else{s=[arguments[i]];
}t.push.apply(t,s);
}return t;
};
j.prototype.toString=function(){return g.call(this,0).toString();
};
j.prototype.toLocaleString=function(){return g.call(this,0).toLocaleString();
};
j.prototype.constructor=j;
j.prototype.indexOf=qx.lang.Core.arrayIndexOf;
j.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
j.prototype.forEach=qx.lang.Core.arrayForEach;
j.prototype.some=qx.lang.Core.arraySome;
j.prototype.every=qx.lang.Core.arrayEvery;
var d=qx.lang.Core.arrayFilter;
var e=qx.lang.Core.arrayMap;
j.prototype.filter=function(){var a=new this.constructor;
a.push.apply(a,d.apply(this,arguments));
return a;
};
j.prototype.map=function(){var r=new this.constructor;
r.push.apply(r,e.apply(this,arguments));
return r;
};
j.prototype.slice=function(){var b=new this.constructor;
b.push.apply(b,Array.prototype.slice.apply(this,arguments));
return b;
};
j.prototype.splice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.splice.apply(this,arguments));
return u;
};
j.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
j.prototype.valueOf=function(){return this.length;
};
return j;
}function j(length){if(arguments.length===1&&typeof length===o){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function h(){}h.prototype=[];
j.prototype=new h;
j.prototype.length=0;
qx.type.BaseArray=k(j);
})();
})();
(function(){var h="String",g="changeContent",f="feedreader.model.Article",e="changeDate",d="changeAuthor",c="changeLink",b="Date",a="changeTitle";
qx.Class.define(f,{extend:qx.core.Object,properties:{title:{check:h,event:a},author:{check:h,nullable:true,event:d},date:{check:b,event:e},content:{check:h,event:g},link:{check:h,event:c}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){arguments.callee.base.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g){var h;

switch(g){case d:h=new qx.ui.basic.Image;
this._add(h);
break;
}return h||arguments.callee.base.call(this,g);
}}});
})();
(function(){var Q="slidebar",P="Integer",O="resize",N="qx.ui.core.Widget",M="selected",L="visible",K="Boolean",J="mouseout",I="excluded",H="menu",bg="_applySelectedButton",bf="_applySpacingY",be="_blocker",bd="_applyCloseInterval",bc="_applyBlockerColor",bb="_applyIconColumnWidth",ba="mouseover",Y="_applyArrowColumnWidth",X="qx.ui.menu.Menu",W="Color",U="Number",V="_applyOpenInterval",S="_applySpacingX",T="_applyBlockerOpacity",R="_applyOpenedButton";
qx.Class.define(X,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var g=this.getApplicationRoot();
g.add(this);
this.addListener(ba,this._onMouseOver);
this.addListener(J,this._onMouseOut);
this.addListener(O,this._onResize,this);
g.addListener(O,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(g);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:H},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:I},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:P,apply:S,init:0,themeable:true},spacingY:{check:P,apply:bf,init:0,themeable:true},iconColumnWidth:{check:P,init:0,themeable:true,apply:bb},arrowColumnWidth:{check:P,init:0,themeable:true,apply:Y},blockerColor:{check:W,init:null,nullable:true,apply:bc,themeable:true},blockerOpacity:{check:U,init:1,apply:T,themeable:true},selectedButton:{check:N,nullable:true,apply:bg},openedButton:{check:N,nullable:true,apply:R},opener:{check:N,nullable:true},openInterval:{check:P,themeable:true,init:250,apply:V},closeInterval:{check:P,themeable:true,init:250,apply:bd},blockBackground:{check:K,themeable:true,init:false}},members:{__kV:null,__kW:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__kY();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__kY();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(t){this.placeToPoint(t);
this.__kY();
this.show();
this._placementTarget=t;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var bh=[];
var bi=this.getChildren();

for(var i=0;i<bi.length;i++){if(bi[i].isEnabled()){bh.push(bi[i]);
}}return bh;
},_applyIconColumnWidth:function(F,G){this._getMenuLayout().setIconColumnWidth(F);
},_applyArrowColumnWidth:function(bo,bp){this._getMenuLayout().setArrowColumnWidth(bo);
},_applySpacingX:function(bj,bk){this._getMenuLayout().setColumnSpacing(bj);
},_applySpacingY:function(bl,bm){this._getMenuLayout().setSpacing(bl);
},_applyVisibility:function(p,q){arguments.callee.base.call(this,p,q);
var r=qx.ui.menu.Manager.getInstance();

if(p===L){r.add(this);
var s=this.getParentMenu();

if(s){s.setOpenedButton(this.getOpener());
}}else if(q===L){r.remove(this);
var s=this.getParentMenu();

if(s&&s.getOpenedButton()==this.getOpener()){s.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__kX();
},__kX:function(){if(this.isVisible()){if(this.getBlockBackground()){var bn=this.getZIndex();
this._blocker.blockContent(bn-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var br=this.getOpener();

if(!br||!(br instanceof qx.ui.menu.AbstractButton)){return null;
}
while(br&&!(br instanceof qx.ui.menu.Menu)){br=br.getLayoutParent();
}return br;
},_applySelectedButton:function(h,j){if(j){j.removeState(M);
}
if(h){h.addState(M);
}},_applyOpenedButton:function(d,f){if(f){f.getMenu().exclude();
}
if(d){d.getMenu().open();
}},_applyBlockerColor:function(y,z){this._blocker.setColor(y);
},_applyBlockerOpacity:function(C,D){this._blocker.setOpacity(C);
},getChildrenContainer:function(){return this.getChildControl(Q,true)||this;
},_createChildControlImpl:function(k){var l;

switch(k){case Q:var l=new qx.ui.menu.MenuSlideBar();
var n=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var m=l.getLayout();
l.setLayout(n);
m.dispose();
var o=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<o.length;i++){l.add(o[i]);
}this.removeListener(O,this._onResize,this);
l.getChildrenContainer().addListener(O,this._onResize,this);
this._add(l);
break;
}return l||arguments.callee.base.call(this,k);
},_getMenuLayout:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__kY:function(){var b=this._getMenuBounds();

if(!b){this.addListenerOnce(O,this.__kY,this);
return;
}var a=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var c=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(b.height+top);
this.moveTo(c,0);
});
}else if(top+b.height>a){this._assertSlideBar(function(){this.setHeight(a-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(E){if(this.hasChildControl(Q)){return E.call(this);
}this.__kW=E;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(Q);

if(this.__kW){this.__kW.call(this);
delete this.__kW;
}},_onResize:function(){if(this.isVisible()){var bq=this._placementTarget;

if(!bq){return;
}else if(bq instanceof qx.ui.core.Widget){this.placeToWidget(bq);
}else if(bq.top!==undefined){this.placeToPoint(bq);
}else{throw new Error("Unknown target: "+bq);
}this.__kY();
}},_onMouseOver:function(e){var v=qx.ui.menu.Manager.getInstance();
v.cancelClose(this);
var w=e.getTarget();

if(w.isEnabled()&&w instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(w);
var u=w.getMenu&&w.getMenu();

if(u){u.setOpener(w);
v.scheduleOpen(u);
this.__kV=u;
}else{var x=this.getOpenedButton();

if(x){v.scheduleClose(x.getMenu());
}
if(this.__kV){v.cancelOpen(this.__kV);
this.__kV=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var A=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var B=this.getOpenedButton();
B?this.setSelectedButton(B):this.resetSelectedButton();
if(B){A.cancelClose(B.getMenu());
}if(this.__kV){A.cancelOpen(this.__kV);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(O,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(be);
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
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="__la",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){arguments.callee.base.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__la=new qx.event.AcceleratingTimer();
this.__la.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__la:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__la.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__la.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__la.stop();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="qx.html.Root";
qx.Class.define(b,{extend:qx.html.Element,construct:function(c){arguments.callee.base.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(a){arguments.callee.base.call(this,a);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var r="error",q="http://resources.qooxdoo.org/proxy_1.php?mode=jsonp&proxy=",p="feedreader.io.FeedLoader",o="loaded",n="loading",m="completed",l="text/plain",k="GET",j="timeout",h="failed",g="singleton";
qx.Class.define(p,{extend:qx.core.Object,type:g,members:{loadAll:function(x){var z=x.getFeeds().getItem(0).getFeeds();

for(var i=0;i<z.length;i++){this.load(z.getItem(i));
}var y=x.getFeeds().getItem(1).getFeeds();

for(i=0;i<y.length;i++){this.load(y.getItem(i));
}},load:function(s){s.setState(n);
var u,t;
u=q+encodeURIComponent(s.getUrl());
t=new qx.io.remote.Request(u,k,l);
t.setCrossDomain(true);
t.setTimeout(30000);
t.addListener(m,this.__lc(s),this);
var v=qx.lang.Function.bind(this.__lb,this,s);
t.addListener(j,v,this);
t.addListener(h,v,this);
t.send();
},__lb:function(b,e){b.setState(r);
},__lc:function(w){return function(c){var f=c.getContent();
if(f==null){this.warn("Empty feed content: "+w.getUrl());
w.setState(r);
}else{try{w.getArticles().splice(0,w.getArticles().length);
var d=feedreader.io.FeedParser.parseFeed(f);

for(var i=0;i<d.length;i++){w.getArticles().push(d[i]);
}w.setState(o);
}catch(a){w.setState(r);
this.warn("Could not parse feed: "+w.getUrl());
}}};
}}});
})();
(function(){var l="complete",k="load",j="initialized",h="loading",g="qx.io.part.Part",f="__lf",e="qx.event.type.Event";
qx.Class.define(g,{extend:qx.core.Object,construct:function(name,d){arguments.callee.base.call(this);
this.__ld=name;
this.__le=l;
this.__lf=d;

for(var i=0;i<d.length;i++){if(d[i].getReadyState()!==l){this.__le=j;
break;
}}},events:{"load":e},members:{__le:null,getReadyState:function(){return this.__le;
},__ld:null,getName:function(){return this.__ld;
},__lf:null,load:function(a,self){if(this.__le==l){if(a){a.call(self);
}return;
}else if(this.__le==h){if(a){this.addListenerOnce(k,a,self);
}return;
}
if(a){this.addListenerOnce(k,a,self);
}var b=function(){this.load();
};

for(var i=0;i<this.__lf.length;i++){var c=this.__lf[i];

switch(c.getReadyState()){case j:c.addListenerOnce(k,b,this);
c.load();
return;
case h:c.addListenerOnce(k,b,this);
return;
case l:break;
default:throw new Error("Invalid case!");
}}this.__le=l;
this.fireEvent(k);
}},destruct:function(){this._disposeArray(f);
}});
})();
(function(){var b="qx.ui.form.IRange";
qx.Interface.define(b,{members:{setMinimum:function(c){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(a){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(d){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var F="single",E="Boolean",D="one",C="changeSelection",B="__lg",A="mouseup",z="mousedown",y="losecapture",x="multi",w="_applyQuickSelection",p="mouseover",v="_applySelectionMode",s="_applyDragSelection",o="qx.ui.core.MMultiSelectionHandling",n="removeItem",r="keypress",q="qx.event.type.Data",t="addItem",m="additive",u="mousemove";
qx.Mixin.define(o,{construct:function(){var l=this.SELECTION_MANAGER;
var k=this.__lg=new l(this);
this.addListener(z,k.handleMouseDown,k);
this.addListener(A,k.handleMouseUp,k);
this.addListener(p,k.handleMouseOver,k);
this.addListener(u,k.handleMouseMove,k);
this.addListener(y,k.handleLoseCapture,k);
this.addListener(r,k.handleKeyPress,k);
this.addListener(t,k.handleAddItem,k);
this.addListener(n,k.handleRemoveItem,k);
k.addListener(C,this._onSelectionChange,this);
},events:{"changeSelection":q},properties:{selectionMode:{check:[F,x,m,D],init:F,apply:v},dragSelection:{check:E,init:false,apply:s},quickSelection:{check:E,init:false,apply:w}},members:{__lg:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong all items."));
this.trace();
}this.__lg.selectAll();
},isSelected:function(J){if(!qx.ui.core.Widget.contains(this,J)){throw new Error("Could not test if "+J+" is selected, because it is not a child element!");
}return this.__lg.isItemSelected(J);
},addToSelection:function(G){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,G)){throw new Error("Could not add + "+G+" to selection, because it is not a child element!");
}this.__lg.addItem(G);
},removeFromSelection:function(g){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,g)){throw new Error("Could not remove "+g+" from selection, because it is not a child element!");
}this.__lg.removeItem(g);
},selectRange:function(H,I){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}this.__lg.selectItemRange(H,I);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selectiong."));
this.trace();
}this.__lg.clearSelection();
},setSelection:function(a){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
for(var i=0;i<a.length;i++){if(!qx.ui.core.Widget.contains(this,a[i])){throw new Error("Could not select "+a[i]+", because it is not a child element!");
}}
if(a.length===0){this.resetSelection();
}else{var b=this.getSelection();

if(!qx.lang.Array.equals(b,a)){this.__lg.replaceSelection(a);
}}},getSelection:function(){return this.__lg.getSelection();
},getSortedSelection:function(){return this.__lg.getSortedSelection();
},isSelectionEmpty:function(){return this.__lg.isSelectionEmpty();
},getSelectionContext:function(){return this.__lg.getSelectionContext();
},_getManager:function(){return this.__lg;
},getSelectables:function(){return this.__lg.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}this.__lg.invertSelection();
},_getLeadItem:function(){var f=this.__lg.getMode();

if(f===F||f===D){return this.__lg.getSelectedItem();
}else{return this.__lg.getLeadItem();
}},_applySelectionMode:function(c,d){this.__lg.setMode(c);
},_applyDragSelection:function(h,j){this.__lg.setDrag(h);
},_applyQuickSelection:function(K,L){this.__lg.setQuick(K);
},_onSelectionChange:function(e){this.fireDataEvent(C,e.getData());
}},destruct:function(){this._disposeObjects(B);
}});
})();
(function(){var n="_applyDynamic",m="changeSelection",k="Boolean",j="qx.ui.container.Stack";
qx.Class.define(j,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(m,this.__lh,this);
},properties:{dynamic:{check:k,init:false,apply:n}},members:{_applyDynamic:function(o){var q=this._getChildren();
var p=this.getSelection()[0];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r!=p){if(o){q[i].exclude();
}else{q[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(A){return A.isEnabled();
},__lh:function(e){var w=e.getOldData()[0];
var x=e.getData()[0];

if(w){if(this.isDynamic()){w.exclude();
}else{w.hide();
}}
if(x){x.show();
}},add:function(a){this._add(a);
var b=this.getSelection()[0];

if(!b){this.setSelection([a]);
}else if(b!==a){if(this.isDynamic()){a.exclude();
}else{a.hide();
}}},remove:function(y){this._remove(y);

if(this.getSelection()[0]===y){var z=this._getChildren()[0];

if(z){this.setSelection([z]);
}else{this.resetSelection();
}}},indexOf:function(c){return this._indexOf(c);
},getChildren:function(){return this._getChildren();
},previous:function(){var g=this.getSelection()[0];
var d=this._indexOf(g)-1;
var h=this._getChildren();

if(d<0){d=h.length-1;
}var f=h[d];
this.setSelection([f]);
},next:function(){var t=this.getSelection()[0];
var s=this._indexOf(t)+1;
var u=this._getChildren();
var v=u[s]||u[0];
this.setSelection([v]);
}}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__li:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__li;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__li=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__li=null;
}});
})();
(function(){var E="other",D="widgets",C="fonts",B="appearances",A="qx.Theme",z="]",y="[Theme ",x="colors",w="decorations",v="Theme",s="meta",u="borders",t="icons";
qx.Bootstrap.define(A,{statics:{define:function(name,h){if(!h){var h={};
}h.include=this.__oE(h.include);
h.patch=this.__oE(h.patch);
{};
var j={$$type:v,name:name,title:h.title,toString:this.genericToString};
if(h.extend){j.supertheme=h.extend;
}j.basename=qx.Bootstrap.createNamespace(name,j);
this.__oH(j,h);
this.__oF(j,h);
this.$$registry[name]=j;
for(var i=0,a=h.include,l=a.length;i<l;i++){this.include(j,a[i]);
}
for(var i=0,a=h.patch,l=a.length;i<l;i++){this.patch(j,a[i]);
}},__oE:function(H){if(!H){return [];
}
if(qx.Bootstrap.isArray(H)){return H;
}else{return [H];
}},__oF:function(O,P){var Q=P.aliases||{};

if(P.extend&&P.extend.aliases){qx.Bootstrap.objectMergeWith(Q,P.extend.aliases,false);
}O.aliases=Q;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return y+this.name+z;
},__oG:function(F){for(var i=0,G=this.__oI,l=G.length;i<l;i++){if(F[G[i]]){return G[i];
}}},__oH:function(k,m){var p=this.__oG(m);
if(m.extend&&!p){p=m.extend.type;
}k.type=p||E;
if(!p){return;
}var r=function(){};
if(m.extend){r.prototype=new m.extend.$$clazz;
}var q=r.prototype;
var o=m[p];
for(var n in o){q[n]=o[n];
if(q[n].base){{};
q[n].base=m.extend;
}}k.$$clazz=r;
k[p]=new r;
},$$registry:{},__oI:[x,u,w,C,t,D,B,s],__oJ:null,__oK:null,__oL:function(){},patch:function(b,c){var e=this.__oG(c);

if(e!==this.__oG(b)){throw new Error("The mixins '"+b.name+"' are not compatible '"+c.name+"'!");
}var d=c[e];
var f=b.$$clazz.prototype;

for(var g in d){f[g]=d[g];
}},include:function(I,J){var L=J.type;

if(L!==I.type){throw new Error("The mixins '"+I.name+"' are not compatible '"+J.name+"'!");
}var K=J[L];
var M=I.$$clazz.prototype;

for(var N in K){if(M[N]!==undefined){continue;
}M[N]=K[N];
}}}});
})();
(function(){var eQ="button-frame",eP="atom",eO="widget",eN="main",eM="button",eL="text-selected",eK="image",eJ="bold",eI="middle",eH="background-light",du="text-disabled",dt="groupbox",ds="decoration/arrows/down.png",dr="cell",dq="selected",dp="border-invalid",dn="input",dm="input-disabled",dl="menu-button",dk="input-focused-invalid",eX="toolbar-button",eY="spinner",eV="input-focused",eW="popup",eT="tooltip",eU="list",eR="tree-item",eS="treevirtual-contract",fa="scrollbar",fb="datechooser/nav-button",eq="text-hovered",ep="center",es="treevirtual-expand",er="textfield",eu="label",et="decoration/arrows/right.png",ew="background-application",ev="radiobutton",eo="white",en="invalid",bp="combobox",bq="right-top",br="checkbox",bs="text-title",bt="qx/static/blank.gif",bu="scrollbar/button",bv="right",bw="combobox/button",bx="icon/16/places/folder.png",by="text-label",fp="decoration/tree/closed.png",fo="scrollbar-slider-horizontal",fn="decoration/arrows/left.png",fm="button-focused",ft="text-light",fs="menu-slidebar-button",fr="text-input",fq="slidebar/button-forward",fv="background-splitpane",fu=".png",cr="decoration/tree/open.png",cs="default",cp="decoration/arrows/down-small.png",cq="datechooser",cv="slidebar/button-backward",cw="selectbox",ct="treevirtual-folder",cu="shadow-popup",cn="icon/16/mimetypes/office-document.png",co="background-medium",bS="table",bR="decoration/arrows/up.png",bU="decoration/form/",bT="",bO="-invalid",bN="icon/16/places/folder-open.png",bQ="button-checked",bP="decoration/window/maximize-active-hovered.png",bM="radiobutton-hovered",bL="decoration/cursors/",cC="slidebar",cD="tooltip-error-arrow",cE="table-scroller-focus-indicator",cF="move-frame",cy="nodrop",cz="decoration/table/boolean-true.png",cA="table-header-cell",cB="menu",cG="app-header",cH="row-layer",cg="text-inactive",cf="move",ce="radiobutton-checked-focused",cd="decoration/window/restore-active-hovered.png",cc="shadow-window",cb="table-column-button",ca="right.png",bY="tabview-page-button-bottom-inactive",ck="tooltip-error",cj="window-statusbar",cI="button-hovered",cJ="decoration/scrollbar/scrollbar-",cK="background-tip",cL="scrollbar-slider-horizontal-disabled",cM="table-scroller-header",cN="radiobutton-disabled",cO="button-pressed",cP="table-pane",cQ="decoration/window/close-active.png",cR="native",dC="checkbox-hovered",dB="button-invalid-shadow",dA="checkbox-checked",dz="decoration/window/minimize-active-hovered.png",dG="menubar",dF="icon/16/actions/dialog-cancel.png",dE="tabview-page-button-top-inactive",dD="tabview-page-button-left-inactive",dK="menu-slidebar",dJ="toolbar-button-checked",ei="decoration/tree/open-selected.png",ej="radiobutton-checked",eg="decoration/window/minimize-inactive.png",eh="icon/16/apps/office-calendar.png",ee="group",ef="tabview-page-button-right-inactive",ec="decoration/window/minimize-active.png",ed="decoration/window/restore-inactive.png",ek="checkbox-checked-focused",el="splitpane",eA="combobox/textfield",ez="button-preselected-focused",eC="decoration/window/close-active-hovered.png",eB="qx/icon/Tango/16/actions/window-close.png",eE="checkbox-pressed",eD="button-disabled",eG="selected-dragover",eF="border-separator",ey="decoration/window/maximize-inactive.png",ex="dragover",fi="scrollarea",fj="scrollbar-vertical",fk="decoration/menu/checkbox-invert.gif",fl="decoration/toolbar/toolbar-handle-knob.gif",fe="icon/22/mimetypes/office-document.png",ff="button-preselected",fg="button-checked-focused",fh="up.png",fc="best-fit",fd="decoration/tree/closed-selected.png",bo="qx.theme.modern.Appearance",bn="text-active",bm="checkbox-disabled",bl="toolbar-button-hovered",bk="progressive-table-header",bj="decoration/table/select-column-order.png",bi="decoration/menu/radiobutton.gif",bh="decoration/arrows/forward.png",bg="decoration/table/descending.png",bf="window-captionbar-active",bB="checkbox-checked-hovered",bC="scrollbar-slider-vertical",bz="toolbar",bA="alias",bF="decoration/window/restore-active.png",bG="decoration/table/boolean-false.png",bD="checkbox-checked-disabled",bE="icon/32/mimetypes/office-document.png",bI="radiobutton-checked-disabled",bJ="tabview-pane",dO="decoration/arrows/rewind.png",dI="checkbox-focused",dV="top",dR="#EEE",dx="icon/16/actions/dialog-ok.png",dv="radiobutton-checked-hovered",bW="table-header-cell-hovered",dy="window",ci="text-gray",ch="decoration/menu/radiobutton-invert.gif",dc="text-placeholder",dd="slider",de="keep-align",df="down.png",dg="tabview-page-button-top-active",dh="icon/32/places/folder-open.png",di="icon/22/places/folder.png",dj="decoration/window/maximize-active.png",cY="checkbox-checked-pressed",da="decoration/window/close-inactive.png",dw="tabview-page-button-left-active",dU="toolbar-part",dT="decoration/splitpane/knob-vertical.png",dS=".gif",ea="icon/22/places/folder-open.png",dY="radiobutton-checked-pressed",dX="table-statusbar",dW="radiobutton-pressed",dQ="window-captionbar-inactive",dP="copy",bH="radiobutton-focused",cm="decoration/arrows/down-invert.png",cl="decoration/menu/checkbox.gif",dH="decoration/splitpane/knob-horizontal.png",cx="icon/32/places/folder.png",dN="toolbar-separator",dM="tabview-page-button-bottom-active",dL="decoration/arrows/up-small.png",bV="decoration/table/ascending.png",eb="decoration/arrows/up-invert.png",bK="small",bX="tabview-page-button-right-active",cS="-disabled",cT="scrollbar-horizontal",cU="progressive-table-header-cell",cV="menu-separator",cW="pane",cX="decoration/arrows/right-invert.png",em="left.png",db="icon/16/actions/view-refresh.png";
qx.Theme.define(bo,{appearances:{"widget":{},"root":{style:function(fT){return {backgroundColor:ew,textColor:by,font:cs};
}},"label":{style:function(ic){return {textColor:ic.disabled?du:undefined};
}},"move-frame":{style:function(hs){return {decorator:eN};
}},"resize-frame":cF,"dragdrop-cursor":{style:function(fO){var fP=cy;

if(fO.copy){fP=dP;
}else if(fO.move){fP=cf;
}else if(fO.alias){fP=bA;
}return {source:bL+fP+dS,position:bq,offset:[2,16,2,6]};
}},"image":{style:function(I){return {opacity:!I.replacement&&I.disabled?0.3:1};
}},"atom":{},"atom/label":eu,"atom/icon":eK,"popup":{style:function(hV){return {decorator:eN,backgroundColor:eH,shadow:cu};
}},"button-frame":{alias:eP,style:function(P){var R,Q;

if(P.checked&&P.focused&&!P.inner){R=fg;
Q=undefined;
}else if(P.disabled){R=eD;
Q=undefined;
}else if(P.pressed){R=cO;
Q=eq;
}else if(P.checked){R=bQ;
Q=undefined;
}else if(P.hovered){R=cI;
Q=eq;
}else if(P.preselected&&P.focused&&!P.inner){R=ez;
Q=eq;
}else if(P.preselected){R=ff;
Q=eq;
}else if(P.focused&&!P.inner){R=fm;
Q=undefined;
}else{R=eM;
Q=undefined;
}return {decorator:R,textColor:Q,shadow:P.invalid&&!P.disabled?dB:undefined};
}},"button-frame/image":{style:function(hr){return {opacity:!hr.replacement&&hr.disabled?0.5:1};
}},"button":{alias:eQ,include:eQ,style:function(z){return {padding:[2,8],center:true};
}},"hover-button":{alias:eP,include:eP,style:function(hx){return {decorator:hx.hovered?dq:undefined,textColor:hx.hovered?eL:undefined};
}},"splitbutton":{},"splitbutton/button":eM,"splitbutton/arrow":{alias:eM,include:eM,style:function(D){return {icon:ds,padding:2,marginLeft:1};
}},"checkbox":{alias:eP,style:function(gk){var gm;

if(gk.checked&&gk.focused){gm=ek;
}else if(gk.checked&&gk.disabled){gm=bD;
}else if(gk.checked&&gk.pressed){gm=cY;
}else if(gk.checked&&gk.hovered){gm=bB;
}else if(gk.checked){gm=dA;
}else if(gk.disabled){gm=bm;
}else if(gk.focused){gm=dI;
}else if(gk.pressed){gm=eE;
}else if(gk.hovered){gm=dC;
}else{gm=br;
}var gl=gk.invalid&&!gk.disabled?bO:bT;
return {icon:bU+gm+gl+fu,gap:6};
}},"radiobutton":{alias:eP,style:function(b){var d;

if(b.checked&&b.focused){d=ce;
}else if(b.checked&&b.disabled){d=bI;
}else if(b.checked&&b.pressed){d=dY;
}else if(b.checked&&b.hovered){d=dv;
}else if(b.checked){d=ej;
}else if(b.disabled){d=cN;
}else if(b.focused){d=bH;
}else if(b.pressed){d=dW;
}else if(b.hovered){d=bM;
}else{d=ev;
}var c=b.invalid&&!b.disabled?bO:bT;
return {icon:bU+d+c+fu,gap:6};
}},"textfield":{style:function(W){var bc;
var ba=!!W.focused;
var bb=!!W.invalid;
var X=!!W.disabled;

if(ba&&bb&&!X){bc=dk;
}else if(ba&&!bb&&!X){bc=eV;
}else if(X){bc=dm;
}else if(!ba&&bb&&!X){bc=dp;
}else{bc=dn;
}var Y;

if(W.disabled){Y=du;
}else if(W.showingPlaceholder){Y=dc;
}else{Y=fr;
}return {decorator:bc,padding:[2,4,1],textColor:Y};
}},"textarea":{include:er,style:function(gP){return {padding:4};
}},"spinner":{style:function(fw){var fA;
var fy=!!fw.focused;
var fz=!!fw.invalid;
var fx=!!fw.disabled;

if(fy&&fz&&!fx){fA=dk;
}else if(fy&&!fz&&!fx){fA=eV;
}else if(fx){fA=dm;
}else if(!fy&&fz&&!fx){fA=dp;
}else{fA=dn;
}return {decorator:fA};
}},"spinner/textfield":{style:function(fU){return {marginRight:2,padding:[2,4,1],textColor:fU.disabled?du:fr};
}},"spinner/upbutton":{alias:eQ,include:eQ,style:function(fR){return {icon:dL,padding:fR.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:eQ,include:eQ,style:function(fF){return {icon:cp,padding:fF.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":bp,"datefield/button":{alias:bw,include:bw,style:function(fQ){return {icon:eh,padding:[0,3],decorator:undefined};
}},"datefield/textfield":eA,"datefield/list":{alias:cq,include:cq,style:function(y){return {decorator:undefined};
}},"groupbox":{style:function(hv){return {legendPosition:dV};
}},"groupbox/legend":{alias:eP,style:function(gU){return {padding:[1,0,1,4],textColor:gU.invalid?en:bs,font:eJ};
}},"groupbox/frame":{style:function(gQ){return {padding:12,decorator:ee};
}},"check-groupbox":dt,"check-groupbox/legend":{alias:br,include:br,style:function(hH){return {padding:[1,0,1,4],textColor:hH.invalid?en:bs,font:eJ};
}},"radio-groupbox":dt,"radio-groupbox/legend":{alias:ev,include:ev,style:function(hF){return {padding:[1,0,1,4],textColor:hF.invalid?en:bs,font:eJ};
}},"scrollarea":{style:function(hu){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(V){return {backgroundColor:ew};
}},"scrollarea/pane":eO,"scrollarea/scrollbar-x":fa,"scrollarea/scrollbar-y":fa,"scrollbar":{style:function(gx){if(gx[cR]){return {};
}return {width:gx.horizontal?undefined:16,height:gx.horizontal?16:undefined,decorator:gx.horizontal?cT:fj,padding:1};
}},"scrollbar/slider":{alias:dd,style:function(e){return {padding:e.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:eQ,style:function(ga){var gb=ga.horizontal?fo:bC;

if(ga.disabled){gb+=cS;
}return {decorator:gb,minHeight:ga.horizontal?undefined:9,minWidth:ga.horizontal?9:undefined};
}},"scrollbar/button":{alias:eQ,include:eQ,style:function(A){var B=cJ;

if(A.left){B+=em;
}else if(A.right){B+=ca;
}else if(A.up){B+=fh;
}else{B+=df;
}
if(A.left||A.right){return {padding:[0,0,0,A.left?3:4],icon:B,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:B,width:14,height:15};
}}},"scrollbar/button-begin":bu,"scrollbar/button-end":bu,"slider":{style:function(gD){var gH;
var gF=!!gD.focused;
var gG=!!gD.invalid;
var gE=!!gD.disabled;

if(gF&&gG&&!gE){gH=dk;
}else if(gF&&!gG&&!gE){gH=eV;
}else if(gE){gH=dm;
}else if(!gF&&gG&&!gE){gH=dp;
}else{gH=dn;
}return {decorator:gH};
}},"slider/knob":{include:eQ,style:function(F){return {decorator:F.disabled?cL:fo,shadow:undefined,height:14,width:14};
}},"list":{alias:fi,style:function(hP){var hT;
var hR=!!hP.focused;
var hS=!!hP.invalid;
var hQ=!!hP.disabled;

if(hR&&hS&&!hQ){hT=dk;
}else if(hR&&!hS&&!hQ){hT=eV;
}else if(hQ){hT=dm;
}else if(!hR&&hS&&!hQ){hT=dp;
}else{hT=dn;
}return {backgroundColor:eH,decorator:hT};
}},"list/pane":eO,"listitem":{alias:eP,style:function(fK){var fL;

if(fK.dragover){fL=fK.selected?eG:ex;
}else{fL=fK.selected?dq:undefined;
}return {padding:fK.dragover?[4,4,2,4]:4,textColor:fK.selected?eL:undefined,decorator:fL};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:eQ,include:eQ,style:function(gJ){return {padding:5,center:true,icon:gJ.vertical?ds:et};
}},"slidebar/button-backward":{alias:eQ,include:eQ,style:function(S){return {padding:5,center:true,icon:S.vertical?bR:fn};
}},"tabview":{style:function(gO){return {contentPadding:16};
}},"tabview/bar":{alias:cC,style:function(ia){var ib={marginBottom:ia.barTop?-1:0,marginTop:ia.barBottom?-4:0,marginLeft:ia.barRight?-3:0,marginRight:ia.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(ia.barTop||ia.barBottom){ib.paddingLeft=5;
ib.paddingRight=7;
}else{ib.paddingTop=5;
ib.paddingBottom=7;
}return ib;
}},"tabview/bar/button-forward":{include:fq,alias:fq,style:function(hf){if(hf.barTop||hf.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:cv,alias:cv,style:function(hC){if(hC.barTop||hC.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(hy){return {decorator:bJ,minHeight:100,marginBottom:hy.barBottom?-1:0,marginTop:hy.barTop?-1:0,marginLeft:hy.barLeft?-1:0,marginRight:hy.barRight?-1:0};
}},"tabview-page":eO,"tabview-page/button":{alias:eP,style:function(gq){var gw,gs=0;
var gv=0,gr=0,gt=0,gu=0;

if(gq.checked){if(gq.barTop){gw=dg;
gs=[6,14];
gt=gq.firstTab?0:-5;
gu=gq.lastTab?0:-5;
}else if(gq.barBottom){gw=dM;
gs=[6,14];
gt=gq.firstTab?0:-5;
gu=gq.lastTab?0:-5;
}else if(gq.barRight){gw=bX;
gs=[6,13];
gv=gq.firstTab?0:-5;
gr=gq.lastTab?0:-5;
}else{gw=dw;
gs=[6,13];
gv=gq.firstTab?0:-5;
gr=gq.lastTab?0:-5;
}}else{if(gq.barTop){gw=dE;
gs=[4,10];
gv=4;
gt=gq.firstTab?5:1;
gu=1;
}else if(gq.barBottom){gw=bY;
gs=[4,10];
gr=4;
gt=gq.firstTab?5:1;
gu=1;
}else if(gq.barRight){gw=ef;
gs=[4,10];
gu=5;
gv=gq.firstTab?5:1;
gr=1;
gt=1;
}else{gw=dD;
gs=[4,10];
gt=5;
gv=gq.firstTab?5:1;
gr=1;
gu=1;
}}return {zIndex:gq.checked?10:5,decorator:gw,padding:gs,marginTop:gv,marginBottom:gr,marginLeft:gt,marginRight:gu,textColor:gq.checked?bn:cg};
}},"tabview-page/button/close-button":{alias:eP,style:function(id){return {icon:eB};
}},"toolbar":{style:function(hD){return {decorator:bz,spacing:2};
}},"toolbar/part":{style:function(gS){return {decorator:dU,spacing:2};
}},"toolbar/part/container":{style:function(gc){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(r){return {source:fl,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:eP,style:function(fJ){return {marginTop:2,marginBottom:2,padding:(fJ.pressed||fJ.checked||fJ.hovered)&&!fJ.disabled||(fJ.disabled&&fJ.checked)?3:5,decorator:fJ.pressed||(fJ.checked&&!fJ.hovered)||(fJ.checked&&fJ.disabled)?dJ:fJ.hovered&&!fJ.disabled?bl:undefined};
}},"toolbar-menubutton":{alias:eX,include:eX,style:function(fB){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:eK,include:eK,style:function(hA){return {source:cp};
}},"toolbar-splitbutton":{style:function(hE){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eX,include:eX,style:function(t){return {icon:ds,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eX,include:eX,style:function(hM){return {padding:hM.pressed||hM.checked?1:hM.hovered?1:3,icon:ds,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(ig){return {decorator:dN,margin:7};
}},"tree":eU,"tree-item":{style:function(hz){return {padding:[2,6],textColor:hz.selected?eL:undefined,decorator:hz.selected?dq:undefined};
}},"tree-item/icon":{include:eK,style:function(fN){return {paddingRight:5};
}},"tree-item/label":eu,"tree-item/open":{include:eK,style:function(gV){var gW;

if(gV.selected&&gV.opened){gW=ei;
}else if(gV.selected&&!gV.opened){gW=fd;
}else if(gV.opened){gW=cr;
}else{gW=fp;
}return {padding:[0,5,0,2],source:gW};
}},"tree-folder":{include:eR,alias:eR,style:function(go){var gp;

if(go.small){gp=go.opened?bN:bx;
}else if(go.large){gp=go.opened?dh:cx;
}else{gp=go.opened?ea:di;
}return {icon:gp};
}},"tree-file":{include:eR,alias:eR,style:function(hN){return {icon:hN.small?cn:hN.large?bE:fe};
}},"treevirtual":bS,"treevirtual-folder":{style:function(H){return {icon:H.opened?bN:bx};
}},"treevirtual-file":{include:ct,alias:ct,style:function(gT){return {icon:cn};
}},"treevirtual-line":{style:function(hm){return {icon:bt};
}},"treevirtual-contract":{style:function(fV){return {icon:cr,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(gd){return {icon:fp,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":eS,"treevirtual-only-expand":es,"treevirtual-start-contract":eS,"treevirtual-start-expand":es,"treevirtual-end-contract":eS,"treevirtual-end-expand":es,"treevirtual-cross-contract":eS,"treevirtual-cross-expand":es,"treevirtual-end":{style:function(gK){return {icon:bt};
}},"treevirtual-cross":{style:function(gf){return {icon:bt};
}},"tooltip":{include:eW,style:function(gj){return {backgroundColor:cK,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":eP,"tooltip-error":{include:eT,style:function(hX){return {textColor:eL,placeMethod:eO,offset:[0,0,0,14],marginTop:-2,position:bq,showTimeout:100,hideTimeout:10000,decorator:ck,shadow:cD,font:eJ};
}},"tooltip-error/atom":eP,"window":{style:function(fH){return {shadow:cc,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(fX){return {decorator:dy};
}},"window/captionbar":{style:function(ge){return {decorator:ge.active?bf:dQ,textColor:ge.active?eo:ci,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(M){return {margin:[5,0,3,6]};
}},"window/title":{style:function(gI){return {alignY:eI,font:eJ,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:eP,style:function(hg){return {icon:hg.active?hg.hovered?dz:ec:eg,margin:[4,8,2,0]};
}},"window/restore-button":{alias:eP,style:function(fC){return {icon:fC.active?fC.hovered?cd:bF:ed,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:eP,style:function(hJ){return {icon:hJ.active?hJ.hovered?bP:dj:ey,margin:[4,8,2,0]};
}},"window/close-button":{alias:eP,style:function(fG){return {icon:fG.active?fG.hovered?eC:cQ:da,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(hq){return {padding:[2,6],decorator:cj,minHeight:18};
}},"window/statusbar-text":{style:function(hK){return {font:bK};
}},"iframe":{style:function(o){return {decorator:eN};
}},"resizer":{style:function(f){return {decorator:cW};
}},"splitpane":{style:function(hY){return {decorator:el};
}},"splitpane/splitter":{style:function(hi){return {width:hi.horizontal?3:undefined,height:hi.vertical?3:undefined,backgroundColor:fv};
}},"splitpane/splitter/knob":{style:function(K){return {source:K.horizontal?dH:dT};
}},"splitpane/slider":{style:function(hw){return {width:hw.horizontal?3:undefined,height:hw.vertical?3:undefined,backgroundColor:fv};
}},"selectbox":{alias:eQ,include:eQ,style:function(fS){return {padding:[2,8]};
}},"selectbox/atom":eP,"selectbox/popup":eW,"selectbox/list":{alias:eU},"selectbox/arrow":{include:eK,style:function(hI){return {source:ds,paddingLeft:5};
}},"datechooser":{style:function(g){var k;
var i=!!g.focused;
var j=!!g.invalid;
var h=!!g.disabled;

if(i&&j&&!h){k=dk;
}else if(i&&!j&&!h){k=eV;
}else if(h){k=dm;
}else if(!i&&j&&!h){k=dp;
}else{k=dn;
}return {padding:2,decorator:k,backgroundColor:eH};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:eQ,alias:eQ,style:function(hc){var hd={padding:[2,4],shadow:undefined};

if(hc.lastYear){hd.icon=dO;
hd.marginRight=1;
}else if(hc.lastMonth){hd.icon=fn;
}else if(hc.nextYear){hd.icon=bh;
hd.marginLeft=1;
}else if(hc.nextMonth){hd.icon=et;
}return hd;
}},"datechooser/last-year-button-tooltip":eT,"datechooser/last-month-button-tooltip":eT,"datechooser/next-year-button-tooltip":eT,"datechooser/next-month-button-tooltip":eT,"datechooser/last-year-button":fb,"datechooser/last-month-button":fb,"datechooser/next-month-button":fb,"datechooser/next-year-button":fb,"datechooser/month-year-label":{style:function(hn){return {font:eJ,textAlign:ep,textColor:hn.disabled?du:undefined};
}},"datechooser/date-pane":{style:function(hk){return {textColor:hk.disabled?du:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(E){return {textColor:E.disabled?du:E.weekend?ft:undefined,textAlign:ep,paddingTop:2,backgroundColor:co};
}},"datechooser/week":{style:function(fW){return {textAlign:ep,padding:[2,4],backgroundColor:co};
}},"datechooser/day":{style:function(gh){return {textAlign:ep,decorator:gh.disabled?undefined:gh.selected?dq:undefined,textColor:gh.disabled?du:gh.selected?eL:gh.otherMonth?ft:undefined,font:gh.today?eJ:undefined,padding:[2,4]};
}},"combobox":{style:function(gy){var gC;
var gA=!!gy.focused;
var gB=!!gy.invalid;
var gz=!!gy.disabled;

if(gA&&gB&&!gz){gC=dk;
}else if(gA&&!gB&&!gz){gC=eV;
}else if(gz){gC=dm;
}else if(!gA&&gB&&!gz){gC=dp;
}else{gC=dn;
}return {decorator:gC};
}},"combobox/popup":eW,"combobox/list":{alias:eU},"combobox/button":{include:eQ,alias:eQ,style:function(ha){var hb={icon:ds,padding:2};

if(ha.selected){hb.decorator=fm;
}return hb;
}},"combobox/textfield":{include:er,style:function(a){return {decorator:undefined};
}},"menu":{style:function(p){var q={decorator:cB,shadow:cu,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:p.submenu||p.contextmenu?fc:de};

if(p.submenu){q.position=bq;
q.offset=[-2,-3];
}return q;
}},"menu/slidebar":dK,"menu-slidebar":eO,"menu-slidebar-button":{style:function(fM){return {decorator:fM.hovered?dq:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:fs,style:function(u){return {icon:u.hovered?eb:bR};
}},"menu-slidebar/button-forward":{include:fs,style:function(hO){return {icon:hO.hovered?cm:ds};
}},"menu-separator":{style:function(hl){return {height:0,decorator:cV,margin:[4,2]};
}},"menu-button":{alias:eP,style:function(C){return {decorator:C.selected?dq:undefined,textColor:C.selected?eL:undefined,padding:[4,6]};
}},"menu-button/icon":{include:eK,style:function(gX){return {alignY:eI};
}},"menu-button/label":{include:eu,style:function(ht){return {alignY:eI,padding:1};
}},"menu-button/shortcut":{include:eu,style:function(fY){return {alignY:eI,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:eK,style:function(gY){return {source:gY.selected?cX:et,alignY:eI};
}},"menu-checkbox":{alias:dl,include:dl,style:function(gn){return {icon:!gn.checked?undefined:gn.selected?fk:cl};
}},"menu-radiobutton":{alias:dl,include:dl,style:function(he){return {icon:!he.checked?undefined:he.selected?ch:bi};
}},"menubar":{style:function(gR){return {decorator:dG};
}},"menubar-button":{alias:eP,style:function(s){return {decorator:s.pressed||s.hovered?dq:undefined,textColor:s.pressed||s.hovered?eL:undefined,padding:[3,8]};
}},"colorselector":eO,"colorselector/control-bar":eO,"colorselector/control-pane":eO,"colorselector/visual-pane":dt,"colorselector/preset-grid":eO,"colorselector/colorbucket":{style:function(be){return {decorator:eN,width:16,height:16};
}},"colorselector/preset-field-set":dt,"colorselector/input-field-set":dt,"colorselector/preview-field-set":dt,"colorselector/hex-field-composite":eO,"colorselector/hex-field":er,"colorselector/rgb-spinner-composite":eO,"colorselector/rgb-spinner-red":eY,"colorselector/rgb-spinner-green":eY,"colorselector/rgb-spinner-blue":eY,"colorselector/hsb-spinner-composite":eO,"colorselector/hsb-spinner-hue":eY,"colorselector/hsb-spinner-saturation":eY,"colorselector/hsb-spinner-brightness":eY,"colorselector/preview-content-old":{style:function(l){return {decorator:eN,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(J){return {decorator:eN,backgroundColor:eH,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(hp){return {decorator:eN,margin:5};
}},"colorselector/brightness-field":{style:function(fI){return {decorator:eN,margin:[5,7]};
}},"colorselector/hue-saturation-pane":eO,"colorselector/hue-saturation-handle":eO,"colorselector/brightness-pane":eO,"colorselector/brightness-handle":eO,"colorpopup":{alias:eW,include:eW,style:function(T){return {padding:5,backgroundColor:ew};
}},"colorpopup/field":{style:function(ie){return {decorator:eN,margin:2,width:14,height:14,backgroundColor:eH};
}},"colorpopup/selector-button":eM,"colorpopup/auto-button":eM,"colorpopup/preview-pane":dt,"colorpopup/current-preview":{style:function(gg){return {height:20,padding:4,marginLeft:4,decorator:eN,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(m){return {height:20,padding:4,marginRight:4,decorator:eN,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eM,include:eM,style:function(gN){return {icon:dx};
}},"colorpopup/colorselector-cancelbutton":{alias:eM,include:eM,style:function(hU){return {icon:dF};
}},"table":{alias:eO,style:function(O){return {decorator:bS};
}},"table-header":{},"table/statusbar":{style:function(bd){return {decorator:dX,padding:[0,2]};
}},"table/column-button":{alias:eQ,style:function(gL){return {decorator:cb,padding:3,icon:bj};
}},"table-column-reset-button":{include:dl,alias:dl,style:function(){return {icon:db};
}},"table-scroller":eO,"table-scroller/scrollbar-x":fa,"table-scroller/scrollbar-y":fa,"table-scroller/header":{style:function(fE){return {decorator:cM};
}},"table-scroller/pane":{style:function(hL){return {backgroundColor:cP};
}},"table-scroller/focus-indicator":{style:function(w){return {decorator:cE};
}},"table-scroller/resize-line":{style:function(hW){return {backgroundColor:eF,width:2};
}},"table-header-cell":{alias:eP,style:function(x){return {minWidth:13,minHeight:20,padding:x.hovered?[3,4,2,4]:[3,4],decorator:x.hovered?bW:cA,sortIcon:x.sorted?(x.sortedAscending?bV:bg):undefined};
}},"table-header-cell/label":{style:function(N){return {minWidth:0,alignY:eI,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(G){return {alignY:eI,alignX:bv};
}},"table-header-cell/icon":{style:function(gi){return {minWidth:0,alignY:eI,paddingRight:5};
}},"table-editor-textfield":{include:er,style:function(U){return {decorator:undefined,padding:[2,2],backgroundColor:eH};
}},"table-editor-selectbox":{include:cw,alias:cw,style:function(hB){return {padding:[0,2],backgroundColor:eH};
}},"table-editor-combobox":{include:bp,alias:bp,style:function(n){return {decorator:undefined,backgroundColor:eH};
}},"progressive-table-header":{alias:eO,style:function(fD){return {decorator:bk};
}},"progressive-table-header-cell":{alias:eP,style:function(v){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:cU};
}},"app-header":{style:function(hh){return {font:eJ,textColor:eL,padding:[8,12],decorator:cG};
}},"virtual-list":eU,"virtual-list/row-layer":cH,"row-layer":{style:function(gM){return {colorEven:eo,colorOdd:dR};
}},"column-layer":eO,"cell":{style:function(hG){return {textColor:hG.selected?eL:by,padding:[3,6],font:cs};
}},"cell-string":dr,"cell-number":{include:dr,style:function(hj){return {textAlign:bv};
}},"cell-image":dr,"cell-boolean":{include:dr,style:function(ho){return {iconTrue:cz,iconFalse:bG};
}},"cell-atom":dr,"cell-date":dr,"cell-html":dr,"htmlarea":{"include":eO,style:function(L){return {backgroundColor:eo};
}}}});
})();
(function(){var s="qx.event.type.Event",r="String",q="failed",p="timeout",o="created",n="aborted",m="sending",l="configured",k="receiving",j="completed",e="Object",i="Boolean",h="abstract",d="_applyState",c="GET",g="changeState",f="qx.io.remote.transport.Abstract";
qx.Class.define(f,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":s,"configured":s,"sending":s,"receiving":s,"completed":s,"aborted":s,"failed":s,"timeout":s},properties:{url:{check:r,nullable:true},method:{check:r,nullable:true,init:c},asynchronous:{check:i,nullable:true,init:true},data:{check:r,nullable:true},username:{check:r,nullable:true},password:{check:r,nullable:true},state:{check:[o,l,m,k,j,n,p,q],init:o,event:g,apply:d},requestHeaders:{check:e,nullable:true},parameters:{check:e,nullable:true},formFields:{check:e,nullable:true},responseType:{check:r,nullable:true},useBasicHttpAuth:{check:i,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){{};
this.setState(n);
},timeout:function(){{};
this.setState(p);
},failed:function(){{};
this.setState(q);
},setRequestHeader:function(t,u){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(v){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(a,b){{};

switch(a){case o:this.fireEvent(o);
break;
case l:this.fireEvent(l);
break;
case m:this.fireEvent(m);
break;
case k:this.fireEvent(k);
break;
case j:this.fireEvent(j);
break;
case n:this.fireEvent(n);
break;
case q:this.fireEvent(q);
break;
case p:this.fireEvent(p);
break;
}return true;
}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__lu:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__lu=null;
},getInsets:function(){if(this.__lu){return this.__lu;
}var j=this._getDefaultInsets();
return this.__lu={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__lu=null;
}},destruct:function(){this.__lu=null;
}});
})();
(function(){var m="px",l="0px",k="-1px",j="no-repeat",i="scale-x",h="scale-y",g="-tr",f="-l",e='</div>',d="scale",A="qx.client",z="-br",y="-t",x="-tl",w="-r",v='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',u="_applyBaseImage",t="-b",s="String",r="",p="-bl",q="-c",n="mshtml",o="qx.ui.decoration.Grid";
qx.Class.define(o,{extend:qx.ui.decoration.Abstract,construct:function(J,K){arguments.callee.base.call(this);
if(J!=null){this.setBaseImage(J);
}
if(K!=null){this.setInsets(K);
}},properties:{baseImage:{check:s,nullable:true,apply:u}},members:{__lj:null,__lk:null,__ll:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lj;
},getMarkup:function(){if(this.__lj){return this.__lj;
}var F=qx.bom.element.Decoration;
var G=this.__lk;
var H=this.__ll;
var I=[];
I.push(v);
I.push(F.create(G.tl,j,{top:0,left:0}));
I.push(F.create(G.t,i,{top:0,left:H.left+m}));
I.push(F.create(G.tr,j,{top:0,right:0}));
I.push(F.create(G.bl,j,{bottom:0,left:0}));
I.push(F.create(G.b,i,{bottom:0,left:H.left+m}));
I.push(F.create(G.br,j,{bottom:0,right:0}));
I.push(F.create(G.l,h,{top:H.top+m,left:0}));
I.push(F.create(G.c,d,{top:H.top+m,left:H.left+m}));
I.push(F.create(G.r,h,{top:H.top+m,right:0}));
I.push(e);
return this.__lj=I.join(r);
},resize:function(B,C,D){var E=this.__ll;
var innerWidth=C-E.left-E.right;
var innerHeight=D-E.top-E.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}B.style.width=C+m;
B.style.height=D+m;
B.childNodes[1].style.width=innerWidth+m;
B.childNodes[4].style.width=innerWidth+m;
B.childNodes[7].style.width=innerWidth+m;
B.childNodes[6].style.height=innerHeight+m;
B.childNodes[7].style.height=innerHeight+m;
B.childNodes[8].style.height=innerHeight+m;

if(qx.core.Variant.isSet(A,n)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(C%2==1){B.childNodes[2].style.marginRight=k;
B.childNodes[5].style.marginRight=k;
B.childNodes[8].style.marginRight=k;
}else{B.childNodes[2].style.marginRight=l;
B.childNodes[5].style.marginRight=l;
B.childNodes[8].style.marginRight=l;
}
if(D%2==1){B.childNodes[3].style.marginBottom=k;
B.childNodes[4].style.marginBottom=k;
B.childNodes[5].style.marginBottom=k;
}else{B.childNodes[3].style.marginBottom=l;
B.childNodes[4].style.marginBottom=l;
B.childNodes[5].style.marginBottom=l;
}}}},tint:function(b,c){},_applyBaseImage:function(N,O){{};

if(N){var S=this._resolveImageUrl(N);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var R=T[1];
var Q=T[2];
var P=this.__lk={tl:R+x+Q,t:R+y+Q,tr:R+g+Q,bl:R+p+Q,b:R+t+Q,br:R+z+Q,l:R+f+Q,c:R+q+Q,r:R+w+Q};
this.__ll=this._computeEdgeSizes(P);
}},_resolveImageUrl:function(a){return qx.util.AliasManager.getInstance().resolve(a);
},_computeEdgeSizes:function(L){var M=qx.util.ResourceManager.getInstance();
return {top:M.getImageHeight(L.t),bottom:M.getImageHeight(L.b),left:M.getImageWidth(L.l),right:M.getImageWidth(L.r)};
}},destruct:function(){this.__lj=this.__lk=this.__ll=null;
}});
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
(function(){var h="qx.ui.popup.Popup",g="visible",f="excluded",e="popup",d="Boolean";
qx.Class.define(h,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(i){arguments.callee.base.call(this,i);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:e},visibility:{refine:true,init:f},autoHide:{check:d,init:true}},members:{_applyVisibility:function(a,b){arguments.callee.base.call(this,a,b);
var c=qx.ui.popup.Manager.getInstance();
a===g?c.add(this):c.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var ba="scrollbar-y",Y="scrollbar-x",X="pane",W="auto",V="corner",U="on",T="changeVisibility",S="scroll",R="_computeScrollbars",Q="off",J="scrollY",P="qx.ui.core.scroll.AbstractScrollArea",M="abstract",H="update",G="scrollX",L="mousewheel",K="scrollbarY",N="scrollbarX",F="horizontal",O="scrollarea",I="vertical";
qx.Class.define(P,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:M,construct:function(){arguments.callee.base.call(this);
var w=new qx.ui.layout.Grid();
w.setColumnFlex(0,1);
w.setRowFlex(0,1);
this._setLayout(w);
this.addListener(L,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:O},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[W,U,Q],init:W,themeable:true,apply:R},scrollbarY:{check:[W,U,Q],init:W,themeable:true,apply:R},scrollbar:{group:[N,K]}},members:{_createChildControlImpl:function(d){var f;

switch(d){case X:f=new qx.ui.core.scroll.ScrollPane();
f.addListener(H,this._computeScrollbars,this);
f.addListener(G,this._onScrollPaneX,this);
f.addListener(J,this._onScrollPaneY,this);
this._add(f,{row:0,column:0});
break;
case Y:f=this._createScrollBar(F);
f.setMinWidth(0);
f.exclude();
f.addListener(S,this._onScrollBarX,this);
f.addListener(T,this._onChangeScrollbarXVisibility,this);
this._add(f,{row:1,column:0});
break;
case ba:f=this._createScrollBar(I);
f.setMinHeight(0);
f.exclude();
f.addListener(S,this._onScrollBarY,this);
f.addListener(T,this._onChangeScrollbarYVisibility,this);
this._add(f,{row:0,column:1});
break;
case V:f=new qx.ui.core.Widget();
f.setWidth(0);
f.setHeight(0);
f.exclude();
this._add(f,{row:1,column:1});
break;
}return f||arguments.callee.base.call(this,d);
},getPaneSize:function(){return this.getChildControl(X).getInnerSize();
},getItemTop:function(a){return this.getChildControl(X).getItemTop(a);
},getItemBottom:function(h){return this.getChildControl(X).getItemBottom(h);
},getItemLeft:function(x){return this.getChildControl(X).getItemLeft(x);
},getItemRight:function(z){return this.getChildControl(X).getItemRight(z);
},scrollToX:function(g){qx.ui.core.queue.Manager.flush();
this.getChildControl(Y).scrollTo(g);
},scrollByX:function(y){qx.ui.core.queue.Manager.flush();
this.getChildControl(Y).scrollBy(y);
},getScrollX:function(){var D=this.getChildControl(Y,true);
return D?D.getPosition():0;
},scrollToY:function(i){qx.ui.core.queue.Manager.flush();
this.getChildControl(ba).scrollTo(i);
},scrollByY:function(C){qx.ui.core.queue.Manager.flush();
this.getChildControl(ba).scrollBy(C);
},getScrollY:function(){var E=this.getChildControl(ba,true);
return E?E.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(X).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(X).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var u=this._isChildControlVisible(Y);
var v=this._isChildControlVisible(ba);
var t=(v)?this.getChildControl(ba,true):(u?this.getChildControl(Y,true):null);

if(t){t.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var A=this._isChildControlVisible(Y);
var B=this._isChildControlVisible(ba);

if(!A){this.scrollToX(0);
}A&&B?this._showChildControl(V):this._excludeChildControl(V);
},_onChangeScrollbarYVisibility:function(e){var b=this._isChildControlVisible(Y);
var c=this._isChildControlVisible(ba);

if(!c){this.scrollToY(0);
}b&&c?this._showChildControl(V):this._excludeChildControl(V);
},_computeScrollbars:function(){var p=this.getChildControl(X);
var content=p.getChildren()[0];

if(!content){this._excludeChildControl(Y);
this._excludeChildControl(ba);
return;
}var j=this.getInnerSize();
var o=p.getInnerSize();
var m=p.getScrollSize();
if(!o||!m){return;
}var q=this.getScrollbarX();
var r=this.getScrollbarY();

if(q===W&&r===W){var n=m.width>j.width;
var s=m.height>j.height;
if((n||s)&&!(n&&s)){if(n){s=m.height>o.height;
}else if(s){n=m.width>o.width;
}}}else{var n=q===U;
var s=r===U;
if(m.width>(n?o.width:j.width)&&q===W){n=true;
}
if(m.height>(n?o.height:j.height)&&r===W){s=true;
}}if(n){var l=this.getChildControl(Y);
l.show();
l.setMaximum(Math.max(0,m.width-o.width-1));
l.setKnobFactor(o.width/m.width);
}else{this._excludeChildControl(Y);
}
if(s){var k=this.getChildControl(ba);
k.show();
k.setMaximum(Math.max(0,m.height-o.height-1));
k.setKnobFactor(o.height/m.height);
}else{this._excludeChildControl(ba);
}}}});
})();
(function(){var by="one",bx="single",bw="selected",bv="additive",bu="multi",bt="PageUp",bs="under",br="Left",bq="lead",bp="Down",bW="Up",bV="Boolean",bU="PageDown",bT="anchor",bS="End",bR="Home",bQ="Right",bP="right",bO="click",bN="above",bF="left",bG="Escape",bD="A",bE="Space",bB="_applyMode",bC="interval",bz="changeSelection",bA="qx.event.type.Data",bH="quick",bI="key",bK="__mB",bJ="abstract",bM="drag",bL="qx.ui.core.selection.Abstract";
qx.Class.define(bL,{type:bJ,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__my={};
},events:{"changeSelection":bA},properties:{mode:{check:[bx,bu,bv,by],init:bx,apply:bB},drag:{check:bV,init:false},quick:{check:bV,init:false}},members:{__mz:0,__mA:0,__mB:null,__mC:null,__mD:null,__mE:null,__mF:null,__mG:null,__mH:null,__mI:null,__mJ:null,__mK:null,__mL:null,__mM:null,__mN:null,__mO:null,__mP:null,__my:null,__mQ:null,__mR:null,getSelectionContext:function(){return this.__mO;
},selectAll:function(){var j=this.getMode();

if(j==bx||j==by){throw new Error("Can not select all items in selection mode: "+j);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cc){this._setSelectedItem(cc);
var cd=this.getMode();

if(cd!==bx&&cd!==by){this._setLeadItem(cc);
this._setAnchorItem(cc);
}this._scrollItemIntoView(cc);
this._fireChange();
},addItem:function(ci){var cj=this.getMode();

if(cj===bx||cj===by){this._setSelectedItem(ci);
}else{if(!this._getAnchorItem()){this._setAnchorItem(ci);
}this._setLeadItem(ci);
this._addToSelection(ci);
}this._scrollItemIntoView(ci);
this._fireChange();
},removeItem:function(bn){this._removeFromSelection(bn);

if(this.getMode()===by&&this.isSelectionEmpty()){var bo=this._getFirstSelectable();

if(bo){this.addItem(bo);
}if(bo==bn){return;
}}
if(this.getLeadItem()==bn){this._setLeadItem(null);
}
if(this._getAnchorItem()==bn){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(o,p){var q=this.getMode();

if(q==bx||q==by){throw new Error("Can not select multiple items in selection mode: "+q);
}this._selectItemRange(o,p);
this._setAnchorItem(o);
this._setLeadItem(p);
this._scrollItemIntoView(p);
this._fireChange();
},clearSelection:function(){if(this.getMode()==by){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cG){var cH=this.getMode();

if(cH==by||cH===bx){if(cG.length>1){throw new Error("Could not select more than one items in mode: "+cH+"!");
}
if(cG.length==1){this.selectItem(cG[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cG);
}},getSelectedItem:function(){var bY=this.getMode();

if(bY===bx||bY===by){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__my);
},getSortedSelection:function(){var cP=this.getSelectables();
var cO=qx.lang.Object.getValues(this.__my);
cO.sort(function(a,b){return cP.indexOf(a)-cP.indexOf(b);
});
return cO;
},isItemSelected:function(cs){var ct=this._selectableToHashCode(cs);
return this.__my[ct]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__my);
},invertSelection:function(){var cr=this.getMode();

if(cr===bx||cr===by){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cq=this.getSelectables();

for(var i=0;i<cq.length;i++){this._toggleInSelection(cq[i]);
}this._fireChange();
},_setLeadItem:function(cn){var co=this.__mP;

if(co!==null){this._styleSelectable(co,bq,false);
}
if(cn!==null){this._styleSelectable(cn,bq,true);
}this.__mP=cn;
},_getLeadItem:function(){{};
return this.getLeadItem();
},getLeadItem:function(){return this.__mP!==null?this.__mP:null;
},_setAnchorItem:function(ca){var cb=this.__mQ;

if(cb){this._styleSelectable(cb,bT,false);
}
if(ca){this._styleSelectable(ca,bT,true);
}this.__mQ=ca;
},_getAnchorItem:function(){return this.__mQ!==null?this.__mQ:null;
},_isSelectable:function(cz){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var cp=event.getTarget();
return this._isSelectable(cp)?cp:null;
},_selectableToHashCode:function(V){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cu,cv,cw){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bc){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(h){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(cI,cJ){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(c){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(cx,cy){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(ck,cl){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(r,s){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(Y,ba){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(Y===by){var bb=this._getFirstSelectable();

if(bb){this._setSelectedItem(bb);
this._scrollItemIntoView(bb);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var U=this.getMode();

if(U!==by&&U!==bx){return;
}var T=this._getSelectableFromMouseEvent(event);

if(T===null){return;
}this._setSelectedItem(T);
this._fireChange(bH);
},handleMouseDown:function(event){var G=this._getSelectableFromMouseEvent(event);

if(G===null){return;
}var I=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var F=event.isShiftPressed();
if(this.isItemSelected(G)&&!F&&!I&&!this.getDrag()){this.__mR=G;
return;
}else{this.__mR=null;
}this._scrollItemIntoView(G);
switch(this.getMode()){case bx:case by:this._setSelectedItem(G);
break;
case bv:this._setLeadItem(G);
this._setAnchorItem(G);
this._toggleInSelection(G);
break;
case bu:this._setLeadItem(G);
if(F){var H=this._getAnchorItem();

if(H===null){H=this._getFirstSelectable();
this._setAnchorItem(H);
}this._selectItemRange(H,G,I);
}else if(I){this._setAnchorItem(G);
this._toggleInSelection(G);
}else{this._setAnchorItem(G);
this._setSelectedItem(G);
}break;
}var J=this.getMode();

if(this.getDrag()&&J!==bx&&J!==by&&!F&&!I){this.__mF=this._getLocation();
this.__mC=this._getScroll();
this.__mG=event.getDocumentLeft()+this.__mC.left;
this.__mH=event.getDocumentTop()+this.__mC.top;
this.__mI=true;
this._capture();
}this._fireChange(bO);
},handleMouseUp:function(event){var cD=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cA=event.isShiftPressed();

if(!cD&&!cA&&this.__mR){var cB=this._getSelectableFromMouseEvent(event);

if(cB===null||!this.isItemSelected(cB)){return;
}var cC=this.getMode();

if(cC===bv){this._removeFromSelection(cB);
}else{this._setSelectedItem(cB);

if(this.getMode()===bu){this._setLeadItem(cB);
this._setAnchorItem(cB);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__mI){return;
}this.__mJ=event.getDocumentLeft();
this.__mK=event.getDocumentTop();
var bm=this.__mJ+this.__mC.left;

if(bm>this.__mG){this.__mL=1;
}else if(bm<this.__mG){this.__mL=-1;
}else{this.__mL=0;
}var bl=this.__mK+this.__mC.top;

if(bl>this.__mH){this.__mM=1;
}else if(bl<this.__mH){this.__mM=-1;
}else{this.__mM=0;
}var location=this.__mF;

if(this.__mJ<location.left){this.__mz=this.__mJ-location.left;
}else if(this.__mJ>location.right){this.__mz=this.__mJ-location.right;
}else{this.__mz=0;
}
if(this.__mK<location.top){this.__mA=this.__mK-location.top;
}else if(this.__mK>location.bottom){this.__mA=this.__mK-location.bottom;
}else{this.__mA=0;
}if(!this.__mB){this.__mB=new qx.event.Timer(100);
this.__mB.addListener(bC,this._onInterval,this);
}this.__mB.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var bX=e.getData();

if(this.getMode()===by&&this.isSelectionEmpty()){this.addItem(bX);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__mI){return;
}if(this.__mN){this._fireChange(bO);
}delete this.__mI;
delete this.__mD;
delete this.__mE;
this._releaseCapture();
if(this.__mB){this.__mB.stop();
}},_onInterval:function(e){this._scrollBy(this.__mz,this.__mA);
this.__mC=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var B=this._getDimension();
var u=Math.max(0,Math.min(this.__mJ-this.__mF.left,B.width))+this.__mC.left;
var t=Math.max(0,Math.min(this.__mK-this.__mF.top,B.height))+this.__mC.top;
if(this.__mD===u&&this.__mE===t){return;
}this.__mD=u;
this.__mE=t;
var D=this._getAnchorItem();
var w=D;
var z=this.__mL;
var C,v;

while(z!==0){C=z>0?this._getRelatedSelectable(w,bP):this._getRelatedSelectable(w,bF);
if(C!==null){v=this._getSelectableLocationX(C);
if((z>0&&v.left<=u)||(z<0&&v.right>=u)){w=C;
continue;
}}break;
}var A=this.__mM;
var y,x;

while(A!==0){y=A>0?this._getRelatedSelectable(w,bs):this._getRelatedSelectable(w,bN);
if(y!==null){x=this._getSelectableLocationY(y);
if((A>0&&x.top<=t)||(A<0&&x.bottom>=t)){w=y;
continue;
}}break;
}var E=this.getMode();

if(E===bu){this._selectItemRange(D,w);
}else if(E===bv){if(this.isItemSelected(D)){this._selectItemRange(D,w,true);
}else{this._deselectItemRange(D,w);
}this._setAnchorItem(w);
}this._fireChange(bM);
},__mS:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var P,O;
var R=event.getKeyIdentifier();
var Q=this.getMode();
var L=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var M=event.isShiftPressed();
var N=false;

if(R===bD&&L){if(Q!==bx&&Q!==by){this._selectAllItems();
N=true;
}}else if(R===bG){if(Q!==bx&&Q!==by){this._clearSelection();
N=true;
}}else if(R===bE){var K=this.getLeadItem();

if(K&&!M){if(L||Q===bv){this._toggleInSelection(K);
}else{this._setSelectedItem(K);
}N=true;
}}else if(this.__mS[R]){N=true;

if(Q===bx||Q==by){P=this._getSelectedItem();
}else{P=this.getLeadItem();
}
if(P!==null){switch(R){case bR:O=this._getFirstSelectable();
break;
case bS:O=this._getLastSelectable();
break;
case bW:O=this._getRelatedSelectable(P,bN);
break;
case bp:O=this._getRelatedSelectable(P,bs);
break;
case br:O=this._getRelatedSelectable(P,bF);
break;
case bQ:O=this._getRelatedSelectable(P,bP);
break;
case bt:O=this._getPage(P,true);
break;
case bU:O=this._getPage(P,false);
break;
}}else{switch(R){case bR:case bp:case bQ:case bU:O=this._getFirstSelectable();
break;
case bS:case bW:case br:case bt:O=this._getLastSelectable();
break;
}}if(O!==null){switch(Q){case bx:case by:this._setSelectedItem(O);
break;
case bv:this._setLeadItem(O);
break;
case bu:if(M){var S=this._getAnchorItem();

if(S===null){this._setAnchorItem(S=this._getFirstSelectable());
}this._setLeadItem(O);
this._selectItemRange(S,O,L);
}else{this._setAnchorItem(O);
this._setLeadItem(O);

if(!L){this._setSelectedItem(O);
}}break;
}this._scrollItemIntoView(O);
}}
if(N){event.stop();
this._fireChange(bI);
}},_selectAllItems:function(){var bk=this.getSelectables();

for(var i=0,l=bk.length;i<l;i++){this._addToSelection(bk[i]);
}},_clearSelection:function(){var cE=this.__my;

for(var cF in cE){this._removeFromSelection(cE[cF]);
}this.__my={};
},_selectItemRange:function(bd,be,bf){var bi=this._getSelectableRange(bd,be);
if(!bf){var bh=this.__my;
var bj=this.__mT(bi);

for(var bg in bh){if(!bj[bg]){this._removeFromSelection(bh[bg]);
}}}for(var i=0,l=bi.length;i<l;i++){this._addToSelection(bi[i]);
}},_deselectItemRange:function(d,f){var g=this._getSelectableRange(d,f);

for(var i=0,l=g.length;i<l;i++){this._removeFromSelection(g[i]);
}},__mT:function(k){var n={};
var m;

for(var i=0,l=k.length;i<l;i++){m=k[i];
n[this._selectableToHashCode(m)]=m;
}return n;
},_getSelectedItem:function(){for(var ce in this.__my){return this.__my[ce];
}return null;
},_setSelectedItem:function(cf){if(this._isSelectable(cf)){var cg=this.__my;
var ch=this._selectableToHashCode(cf);

if(!cg[ch]||qx.lang.Object.hasMinLength(cg,2)){this._clearSelection();
this._addToSelection(cf);
}}},_addToSelection:function(W){var X=this._selectableToHashCode(W);

if(!this.__my[X]&&this._isSelectable(W)){this.__my[X]=W;
this._styleSelectable(W,bw,true);
this.__mN=true;
}},_toggleInSelection:function(cK){var cL=this._selectableToHashCode(cK);

if(!this.__my[cL]){this.__my[cL]=cK;
this._styleSelectable(cK,bw,true);
}else{delete this.__my[cL];
this._styleSelectable(cK,bw,false);
}this.__mN=true;
},_removeFromSelection:function(cM){var cN=this._selectableToHashCode(cM);

if(this.__my[cN]!=null){delete this.__my[cN];
this._styleSelectable(cM,bw,false);
this.__mN=true;
}},_replaceMultiSelection:function(cQ){var cT=false;
var cW,cV;
var cR={};

for(var i=0,l=cQ.length;i<l;i++){cW=cQ[i];

if(this._isSelectable(cW)){cV=this._selectableToHashCode(cW);
cR[cV]=cW;
}}var cS=cW;
var cU=this.__my;

for(var cV in cU){if(cR[cV]){delete cR[cV];
}else{cW=cU[cV];
delete cU[cV];
this._styleSelectable(cW,bw,false);
cT=true;
}}for(var cV in cR){cW=cU[cV]=cR[cV];
this._styleSelectable(cW,bw,true);
cT=true;
}if(!cT){return false;
}this._scrollItemIntoView(cS);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__mN=true;
this._fireChange();
},_fireChange:function(cm){if(this.__mN){this.__mO=cm||null;
this.fireDataEvent(bz,this.getSelection());
delete this.__mN;
}}},destruct:function(){this._disposeObjects(bK);
this.__my=this.__mR=this.__mQ=null;
this.__mP=null;
}});
})();
(function(){var O="vertical",N="under",M="above",L="qx.ui.core.selection.Widget",K="left",J="right";
qx.Class.define(L,{extend:qx.ui.core.selection.Abstract,construct:function(I){arguments.callee.base.call(this);
this.__lt=I;
},members:{__lt:null,_isSelectable:function(q){return q.isEnabled()&&q.isVisible()&&q.getLayoutParent()===this.__lt;
},_selectableToHashCode:function(v){return v.$$hash;
},_styleSelectable:function(f,g,h){h?f.addState(g):f.removeState(g);
},_capture:function(){this.__lt.capture();
},_releaseCapture:function(){this.__lt.releaseCapture();
},_getWidget:function(){return this.__lt;
},_getLocation:function(){var d=this.__lt.getContentElement().getDomElement();
return d?qx.bom.element.Location.get(d):null;
},_getDimension:function(){return this.__lt.getInnerSize();
},_getSelectableLocationX:function(b){var c=b.getBounds();

if(c){return {left:c.left,right:c.left+c.width};
}},_getSelectableLocationY:function(t){var u=t.getBounds();

if(u){return {top:u.top,bottom:u.top+u.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(A,B){},_scrollItemIntoView:function(e){this.__lt.scrollChildIntoView(e);
},getSelectables:function(){var y=this.__lt.getChildren();
var z=[];
var x;

for(var i=0,l=y.length;i<l;i++){x=y[i];

if(x.isEnabled()&&x.isVisible()){z.push(x);
}}return z;
},_getSelectableRange:function(C,D){if(C===D){return [C];
}var H=this.__lt.getChildren();
var E=[];
var G=false;
var F;

for(var i=0,l=H.length;i<l;i++){F=H[i];

if(F===C||F===D){if(G){E.push(F);
break;
}else{G=true;
}}
if(G&&F.isEnabled()&&F.isVisible()){E.push(F);
}}return E;
},_getFirstSelectable:function(){var a=this.__lt.getChildren();

for(var i=0,l=a.length;i<l;i++){if(a[i].isEnabled()&&a[i].isVisible()){return a[i];
}}return null;
},_getLastSelectable:function(){var w=this.__lt.getChildren();

for(var i=w.length-1;i>0;i--){if(w[i].isEnabled()&&w[i].isVisible()){return w[i];
}}return null;
},_getRelatedSelectable:function(j,k){var o=this.__lt.getOrientation()===O;
var n=this.__lt.getChildren();
var m=n.indexOf(j);
var p;

if((o&&k===M)||(!o&&k===K)){for(var i=m-1;i>=0;i--){p=n[i];

if(p.isEnabled()&&p.isVisible()){return p;
}}}else if((o&&k===N)||(!o&&k===J)){for(var i=m+1;i<n.length;i++){p=n[i];

if(p.isEnabled()&&p.isVisible()){return p;
}}}return null;
},_getPage:function(r,s){if(s){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__lt=null;
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
(function(){var s="horizontal",r="qx.event.type.Data",q="vertical",p="",o="qx.ui.form.List",n="Enter",m="one",k="addChildWidget",j="_applySpacing",h="Boolean",E="Integer",D="action",C="keyinput",B="addItem",A="removeChildWidget",z="_applyOrientation",y="__lm",x="single",w="keypress",v="list",t="pane",u="removeItem";
qx.Class.define(o,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(G){arguments.callee.base.call(this);
this.__lm=new qx.ui.container.Composite();
this.__lm.addListener(k,this._onAddChild,this);
this.__lm.addListener(A,this._onRemoveChild,this);
this.getChildControl(t).add(this.__lm);
if(G){this.setOrientation(s);
}else{this.initOrientation();
}this.addListener(w,this._onKeyPress);
this.addListener(C,this._onKeyInput);
this.__ln=p;
},events:{addItem:r,removeItem:r},properties:{appearance:{refine:true,init:v},focusable:{refine:true,init:true},orientation:{check:[s,q],init:q,apply:z},spacing:{check:E,init:0,apply:j,themeable:true},enableInlineFind:{check:h,init:true}},members:{__ln:null,__lo:null,__lm:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__lm;
},_onAddChild:function(e){this.fireDataEvent(B,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(u,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(a,b){var c=a===s;
var d=c?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__lm;
content.setLayout(d);
content.setAllowGrowX(!c);
content.setAllowGrowY(c);
this._applySpacing(this.getSpacing());
},_applySpacing:function(H,I){this.__lm.getLayout().setSpacing(H);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==n&&!e.isAltPressed()){var F=this.getSelection();

for(var i=0;i<F.length;i++){F[i].fireEvent(D);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var f=this.getSelectionMode();

if(!(f===x||f===m)){return;
}if(((new Date).valueOf()-this.__lo)>1000){this.__ln=p;
}this.__ln+=e.getChar();
var g=this.findItemByLabelFuzzy(this.__ln);
if(g){this.setSelection([g]);
}this.__lo=(new Date).valueOf();
},findItemByLabelFuzzy:function(J){J=J.toLowerCase();
var K=this.getChildren();
for(var i=0,l=K.length;i<l;i++){var L=K[i].getLabel();
if(L&&L.toLowerCase().indexOf(J)==0){return K[i];
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
}},destruct:function(){this._disposeObjects(y);
}});
})();
(function(){var n="String",m="",l="new",k="stateModified",j="changeArticles",i="feedreader.model.Article",h="qx.data.Array",g="loaded",f="loading",e="dataModified",b="changeUrl",d="feedreader.model.Feed",c="changeTitle",a="error";
qx.Class.define(d,{extend:qx.core.Object,construct:function(o,p,q){arguments.callee.base.call(this);
this.set({url:p,title:o,category:q||m});
this.setArticles(new qx.data.Array());
},properties:{articles:{check:h,event:j},selectedArticle:{check:i,nullable:true},url:{check:n,event:b},title:{check:n,event:c},category:{check:n,init:m,event:e},state:{check:[l,f,g,a],init:l,event:k}}});
})();
(function(){var m="open",k="auto",j="middle",h="icon",g="label",f="changeOpen",d="excluded",c="visible",b="String",a="opened",F="always",E="qx.ui.tree.AbstractTreeItem",D="addItem",C="Boolean",B="__nD",A="Integer",z="_applyIndent",y="__nz",x="__nA",w="changeOpenSymbolMode",t="_applyOpenSymbolMode",u="resize",r="",s="removeItem",p="abstract",q="never",n="_applyIcon",o="_applyOpen",v="_applyLabel";
qx.Class.define(E,{extend:qx.ui.core.Widget,type:p,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__nz=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:C,init:false,event:f,apply:o},openSymbolMode:{check:[F,q,k],init:k,event:w,apply:t},indent:{check:A,init:19,apply:z,themeable:true},parent:{check:E,nullable:true},icon:{check:b,apply:n,nullable:true,themeable:true},label:{check:b,apply:v,init:r}},members:{__nz:null,__nA:null,__nB:null,__nC:null,__nD:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(L){var M;

switch(L){case g:M=new qx.ui.basic.Label().set({alignY:j,value:this.getLabel()});
break;
case h:M=new qx.ui.basic.Image().set({alignY:j,source:this.getIcon()});
break;
case m:M=new qx.ui.tree.FolderOpenButton().set({alignY:j});
M.addListener(f,this._onChangeOpen,this);
M.addListener(u,this._updateIndent,this);
break;
}return M||arguments.callee.base.call(this,L);
},getTree:function(){var bH=this;

while(bH.getParent()){bH=bH.getParent();
}var bG=bH.getLayoutParent()?bH.getLayoutParent().getLayoutParent():0;

if(bG&&bG instanceof qx.ui.core.scroll.ScrollPane){return bG.getLayoutParent();
}return null;
},addWidget:function(O,P){this._add(O,P);
},addSpacer:function(){if(!this.__nD){this.__nD=new qx.ui.core.Spacer();
}else{this._remove(this.__nD);
}this._add(this.__nD);
},addOpenButton:function(){this._add(this.getChildControl(m));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bS=this.getChildControl(h);

if(this.__nC){this._remove(bS);
}this._add(bS);
this.__nC=true;
},addLabel:function(X){var Y=this.getChildControl(g);

if(this.__nB){this._remove(Y);
}
if(X){this.setLabel(X);
}else{Y.setValue(this.getLabel());
}this._add(Y);
this.__nB=true;
},addState:function(bo){arguments.callee.base.call(this,bo);
var bq=this._getChildren();

for(var i=0,l=bq.length;i<l;i++){var bp=bq[i];

if(bp.addState){bq[i].addState(bo);
}}},removeState:function(bI){arguments.callee.base.call(this,bI);
var bK=this._getChildren();

for(var i=0,l=bK.length;i<l;i++){var bJ=bK[i];

if(bJ.addState){bK[i].removeState(bI);
}}},_applyIcon:function(H,I){var J=this.getChildControl(h,true);

if(J){J.setSource(H);
}},_applyLabel:function(bf,bg){var bh=this.getChildControl(g,true);

if(bh){bh.setValue(bf);
}},_applyOpen:function(Q,R){if(this.hasChildren()){this.getChildrenContainer().setVisibility(Q?c:d);
}var open=this.getChildControl(m,true);

if(open){open.setOpen(Q);
}Q?this.addState(a):this.removeState(a);
},isOpenable:function(){var G=this.getOpenSymbolMode();
return (G===F||G===k&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(m,true);

if(!open){return false;
}var N=this.getTree();

if(!N.getRootOpenClose()){if(N.getHideRoot()){if(N.getRoot()==this.getParent()){return false;
}}else{if(N.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bE,bF){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bM=0;
var open=this.getChildControl(m,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bL=open.getBounds();

if(bL){bM=bL.width;
}else{return;
}}else{open.exclude();
}}
if(this.__nD){this.__nD.setWidth((this.getLevel()+1)*this.getIndent()-bM);
}},_applyIndent:function(bd,be){this._updateIndent();
},getLevel:function(){var U=this.getTree();

if(!U){return;
}var V=this;
var W=-1;

while(V){V=V.getParent();
W+=1;
}if(U.getHideRoot()){W-=1;
}
if(!U.getRootOpenClose()){W-=1;
}return W;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__nA){this.__nA=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?c:d});
}return this.__nA;
},hasChildrenContainer:function(){return this.__nA;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__nz;
},hasChildren:function(){return this.__nz?this.__nz.length>0:false;
},getItems:function(br,bs,bt){if(bt!==false){var bu=[];
}else{var bu=[this];
}var bx=this.hasChildren()&&(bs!==false||this.isOpen());

if(bx){var bw=this.getChildren();

if(br===false){bu=bu.concat(bw);
}else{for(var i=0,bv=bw.length;i<bv;i++){bu=bu.concat(bw[i].getItems(br,bs,false));
}}}return bu;
},recursiveAddToWidgetQueue:function(){var bc=this.getItems(true,true,false);

for(var i=0,l=bc.length;i<l;i++){qx.ui.core.queue.Widget.add(bc[i]);
}},__nE:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(by){var bz=this.getChildrenContainer();
var bC=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bD=arguments[i];
var bB=bD.getParent();

if(bB){bB.remove(bD);
}bD.setParent(this);
var bA=this.hasChildren();
bz.add(bD);

if(bD.hasChildren()){bz.add(bD.getChildrenContainer());
}this.__nz.push(bD);

if(!bA){this.__nE();
}
if(bC){bD.recursiveAddToWidgetQueue();
bC.fireNonBubblingEvent(D,qx.event.type.Data,[bD]);
}}
if(bC){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bi,bj){{};

if(bj==this.__nz.length){this.add(bi);
return;
}var bn=bi.getParent();

if(bn){bn.remove(bi);
}var bl=this.getChildrenContainer();
bi.setParent(this);
var bm=this.hasChildren();
var bk=this.__nz[bj];
bl.addBefore(bi,bk);

if(bi.hasChildren()){bl.addAfter(bi.getChildrenContainer(),bi);
}qx.lang.Array.insertAt(this.__nz,bi,bj);

if(!bm){this.__nE();
}
if(this.getTree()){bi.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bT,bU){{};
this.addAt(bT,this.__nz.indexOf(bU));
},addAfter:function(ba,bb){{};
this.addAt(ba,this.__nz.indexOf(bb)+1);
},addAtBegin:function(K){this.addAt(K,0);
},remove:function(bN){for(var i=0,l=arguments.length;i<l;i++){var bR=arguments[i];

if(this.__nz.indexOf(bR)==-1){this.warn("Cannot remove treeitem '"+bR+"'. It is not a child of this tree item.");
return;
}var bO=this.getChildrenContainer();

if(bR.hasChildrenContainer()){var bQ=bR.getChildrenContainer();

if(bO.getChildren().indexOf(bQ)>=0){bO.remove(bQ);
}}qx.lang.Array.remove(this.__nz,bR);
bR.setParent(null);
bO.remove(bR);
}var bP=this.getTree();

if(bP){bP.fireNonBubblingEvent(s,qx.event.type.Data,[bR]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(S){var T=this.__nz[S];

if(T){this.remove(T);
}},removeAll:function(){for(var i=this.__nz.length-1;i>=0;i--){this.remove(this.__nz[i]);
}}},destruct:function(){this._disposeArray(y);
this._disposeObjects(B,x);
}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){arguments.callee.base.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b=".",a="qx.bom.client.Transport";
qx.Class.define(a,{statics:{getMaxConcurrentRequestCount:function(){var h;
var c=qx.bom.client.Engine;
var g=c.FULLVERSION.split(b);
var e=0;
var d=0;
var f=0;
if(g[0]){e=g[0];
}if(g[1]){d=g[1];
}if(g[2]){f=g[2];
}if(window.maxConnectionsPerServer){h=window.maxConnectionsPerServer;
}else if(c.OPERA){h=8;
}else if(c.WEBKIT){h=4;
}else if(c.GECKO&&((e>1)||((e==1)&&(d>9))||((e==1)&&(d==9)&&(f>=1)))){h=6;
}else{h=2;
}return h;
}}});
})();
(function(){var p="pressed",o="abandoned",n="Integer",m="hovered",l="qx.event.type.Event",k="Enter",j="Space",i="press",h="qx.ui.form.RepeatButton",g="release",c="interval",f="__lp",d="execute";
qx.Class.define(h,{extend:qx.ui.form.Button,construct:function(q,r){arguments.callee.base.call(this,q,r);
this.__lp=new qx.event.AcceleratingTimer();
this.__lp.addListener(c,this._onInterval,this);
},events:{"execute":l,"press":l,"release":l},properties:{interval:{check:n,init:100},firstInterval:{check:n,init:500},minTimer:{check:n,init:20},timerDecrease:{check:n,init:2}},members:{__lq:null,__lp:null,press:function(){if(this.isEnabled()){if(!this.hasState(p)){this.__lr();
}this.removeState(o);
this.addState(p);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(p)){if(!this.__lq){this.execute();
}}this.removeState(p);
this.removeState(o);
this.__ls();
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);

if(!a){this.removeState(p);
this.removeState(o);
this.__ls();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(o)){this.removeState(o);
this.addState(p);
this.__lp.start();
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(p)){this.removeState(p);
this.addState(o);
this.__lp.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__lr();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(o)){this.addState(m);

if(this.hasState(p)&&!this.__lq){this.execute();
}}this.__ls();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case k:case j:if(this.hasState(p)){if(!this.__lq){this.execute();
}this.removeState(p);
this.removeState(o);
e.stopPropagation();
this.__ls();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case k:case j:this.removeState(o);
this.addState(p);
e.stopPropagation();
this.__lr();
}},_onInterval:function(e){this.__lq=true;
this.fireEvent(d);
},__lr:function(){this.fireEvent(i);
this.__lq=false;
this.__lp.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(o);
this.addState(p);
},__ls:function(){this.fireEvent(g);
this.__lp.stop();
this.removeState(o);
this.removeState(p);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(h,j){var u=this._getLayoutChildren();
var t;
var m;
var n=[];

for(var i=0,l=u.length;i<l;i++){t=u[i];
m=t.getLayoutProperties().column;
n[m]=t;
}var s=this.__lv(u[0]);
var v=s.getColumnSizes();
var p=s.getSpacingX();
var o=qx.lang.Array.sum(v)+p*(v.length-1);

if(o<h){v[1]+=h-o;
}var w=0,top=0;
var q=qx.ui.layout.Util;

for(var i=0,l=v.length;i<l;i++){t=n[i];

if(t){var k=t.getSizeHint();
var top=q.computeVerticalAlignOffset(t.getAlignY()||c,k.height,j,0,0);
var r=q.computeHorizontalAlignOffset(t.getAlignX()||a,k.width,v[i],t.getMarginLeft(),t.getMarginRight());
t.renderLayout(w+r,top,k.width,k.height);
}w+=v[i]+p;
}},__lv:function(x){while(!(x instanceof qx.ui.menu.Menu)){x=x.getLayoutParent();
}return x;
},_computeSizeHint:function(){var f=this._getLayoutChildren();
var e=0;
var g=0;

for(var i=0,l=f.length;i<l;i++){var d=f[i].getSizeHint();
g+=d.width;
e=Math.max(e,d.height);
}return {width:g,height:e};
}}});
})();
(function(){var m="slider",l="horizontal",k="button-begin",j="vertical",i="button-end",h="Integer",g="execute",f="right",d="left",c="down",B="up",A="PositiveNumber",z="changeValue",y="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",x="_applyKnobFactor",w="knob",v="qx.ui.core.scroll.ScrollBar",u="resize",t="_applyOrientation",s="_applyPageStep",q="PositiveInteger",r="scroll",o="_applyPosition",p="scrollbar",n="_applyMaximum";
qx.Class.define(v,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(C){arguments.callee.base.call(this);
this._createChildControl(k);
this._createChildControl(m).addListener(u,this._onResizeSlider,this);
this._createChildControl(i);
if(C!=null){this.setOrientation(C);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:p},orientation:{check:[l,j],init:l,apply:t},maximum:{check:q,apply:n,init:100},position:{check:y,init:0,apply:o,event:r},singleStep:{check:h,init:20},pageStep:{check:h,init:10,apply:s},knobFactor:{check:A,apply:x,nullable:true}},members:{__lw:2,_createChildControlImpl:function(Q){var R;

switch(Q){case m:R=new qx.ui.core.scroll.ScrollSlider();
R.setPageStep(100);
R.setFocusable(false);
R.addListener(z,this._onChangeSliderValue,this);
this._add(R,{flex:1});
break;
case k:R=new qx.ui.form.RepeatButton();
R.setFocusable(false);
R.addListener(g,this._onExecuteBegin,this);
this._add(R);
break;
case i:R=new qx.ui.form.RepeatButton();
R.setFocusable(false);
R.addListener(g,this._onExecuteEnd,this);
this._add(R);
break;
}return R||arguments.callee.base.call(this,Q);
},_applyMaximum:function(N){this.getChildControl(m).setMaximum(N);
},_applyPosition:function(D){this.getChildControl(m).setValue(D);
},_applyKnobFactor:function(a){this.getChildControl(m).setKnobFactor(a);
},_applyPageStep:function(E){this.getChildControl(m).setPageStep(E);
},_applyOrientation:function(K,L){var M=this._getLayout();

if(M){M.dispose();
}if(K===l){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(j,l);
this.getChildControl(k).replaceState(B,d);
this.getChildControl(i).replaceState(c,f);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(l,j);
this.getChildControl(k).replaceState(d,B);
this.getChildControl(i).replaceState(f,c);
}this.getChildControl(m).setOrientation(K);
},scrollTo:function(J){this.getChildControl(m).slideTo(J);
},scrollBy:function(b){this.getChildControl(m).slideBy(b);
},scrollBySteps:function(O){var P=this.getSingleStep();
this.getChildControl(m).slideBy(O*P);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var F=this.getChildControl(m).getChildControl(w);
var I=F.getSizeHint();
var G=false;
var H=this.getChildControl(m).getInnerSize();

if(this.getOrientation()==j){if(H.height<I.minHeight+this.__lw){G=true;
}}else{if(H.width<I.minWidth+this.__lw){G=true;
}}
if(G){F.exclude();
}else{F.show();
}}}});
})();
(function(){var q="pressed",p="hovered",o="changeVisibility",n="qx.ui.menu.Menu",m="submenu",l="Enter",k="contextmenu",j="changeMenu",i="qx.ui.form.MenuButton",h="abandoned",g="_applyMenu";
qx.Class.define(i,{extend:qx.ui.form.Button,construct:function(u,v,w){arguments.callee.base.call(this,u,v);
if(w!=null){this.setMenu(w);
}},properties:{menu:{check:n,nullable:true,apply:g,event:j}},members:{_applyMenu:function(s,t){if(t){t.removeListener(o,this._onMenuChange,this);
t.resetOpener();
}
if(s){s.addListener(o,this._onMenuChange,this);
s.setOpener(this);
s.removeState(m);
s.removeState(k);
}},open:function(b){var c=this.getMenu();

if(c){qx.ui.menu.Manager.getInstance().hideAll();
c.setOpener(this);
c.open();
if(b){var d=c.getSelectables()[0];

if(d){c.setSelectedButton(d);
}}}},_onMenuChange:function(e){var r=this.getMenu();

if(r.isVisible()){this.addState(q);
}else{this.removeState(q);
}},_onMouseDown:function(e){var f=this.getMenu();

if(f){if(!f.isVisible()){this.open();
}else{f.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(p);
},_onMouseOut:function(e){this.removeState(p);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:this.removeState(h);
this.addState(q);
var a=this.getMenu();

if(a){if(!a.isVisible()){this.open();
}else{a.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(j,k,l){arguments.callee.base.call(this,j,k,l);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(n){arguments.callee.base.call(this,n);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var m=this.getMenu();
var menubar=this.getMenuBar();

if(m.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(m);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==m){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var i=this.getMenu();

if(i&&i.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var i="px",h="qx.ui.decoration.Background",g="",f="_applyStyle",e="Color",d="absolute";
qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this.setBackgroundColor(a);
}},properties:{backgroundColor:{check:e,nullable:true,apply:f}},members:{__lx:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lx;
},getMarkup:function(){if(this.__lx){return this.__lx;
}var b={position:d,top:0,left:0};
var c=this._generateBackgroundMarkup(b);
return this.__lx=c;
},resize:function(m,n,o){m.style.width=n+i;
m.style.height=o+i;
},tint:function(j,k){var l=qx.theme.manager.Color.getInstance();

if(k==null){k=this.getBackgroundColor();
}j.style.backgroundColor=l.resolve(k)||g;
},_applyStyle:function(){{};
}},destruct:function(){this.__lx=null;
}});
})();
(function(){var v="icon",u="label",t="arrow",s="shortcut",r="changeLocale",q="qx.dynlocale",p="submenu",o="on",n="String",m="qx.ui.menu.Menu",g="qx.ui.menu.AbstractButton",l="keypress",j="",f="_applyIcon",d="mouseup",i="abstract",h="_applyLabel",k="_applyMenu",c="changeCommand";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:i,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(d,this._onMouseUp);
this.addListener(l,this._onKeyPress);
this.addListener(c,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:n,apply:h,nullable:true},menu:{check:m,apply:k,nullable:true},icon:{check:n,apply:f,themeable:true,nullable:true}},members:{_createChildControlImpl:function(w){var x;

switch(w){case v:x=new qx.ui.basic.Image;
x.setAnonymous(true);
this._add(x,{column:0});
break;
case u:x=new qx.ui.basic.Label;
x.setAnonymous(true);
this._add(x,{column:1});
break;
case s:x=new qx.ui.basic.Label;
x.setAnonymous(true);
this._add(x,{column:2});
break;
case t:x=new qx.ui.basic.Image;
x.setAnonymous(true);
this._add(x,{column:3});
break;
}return x||arguments.callee.base.call(this,w);
},_forwardStates:{selected:1},getChildrenSizes:function(){var B=0,C=0,D=0,H=0;

if(this._isChildControlVisible(v)){var I=this.getChildControl(v);
B=I.getMarginLeft()+I.getSizeHint().width+I.getMarginRight();
}
if(this._isChildControlVisible(u)){var F=this.getChildControl(u);
C=F.getMarginLeft()+F.getSizeHint().width+F.getMarginRight();
}
if(this._isChildControlVisible(s)){var E=this.getChildControl(s);
D=E.getMarginLeft()+E.getSizeHint().width+E.getMarginRight();
}
if(this._isChildControlVisible(t)){var G=this.getChildControl(t);
H=G.getMarginLeft()+G.getSizeHint().width+G.getMarginRight();
}return [B,C,D,H];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var L=e.getData();

if(qx.core.Variant.isSet(q,o)){var J=e.getOldData();

if(!J){qx.locale.Manager.getInstance().addListener(r,this._onChangeLocale,this);
}
if(!L){qx.locale.Manager.getInstance().removeListener(r,this._onChangeLocale,this);
}}var K=L!=null?L.toString():j;
this.getChildControl(s).setValue(K);
},_onChangeLocale:qx.core.Variant.select(q,{"on":function(e){var y=this.getCommand();

if(y!=null){this.getChildControl(s).setValue(y.toString());
}},"off":null}),_applyIcon:function(M,N){if(M){this._showChildControl(v).setSource(M);
}else{this._excludeChildControl(v);
}},_applyLabel:function(a,b){if(a){this._showChildControl(u).setValue(a);
}else{this._excludeChildControl(u);
}},_applyMenu:function(z,A){if(A){A.resetOpener();
A.removeState(p);
}
if(z){this._showChildControl(t);
z.setOpener(this);
z.addState(p);
}else{this._excludeChildControl(t);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(q,o)){qx.locale.Manager.getInstance().removeListener(r,this._onChangeLocale,this);
}}});
})();
(function(){var c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(d,e,f){arguments.callee.base.call(this,d,e);

if(f!=null){this.setModel(f);
}},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var P="failed",O="sending",N="completed",M="receiving",L="aborted",K="timeout",J="qx.event.type.Event",I="Connection dropped",H="qx.io.remote.Response",G="configured",bL="Proxy authentication required",bK="qx.io.remote.transport.Abstract",bJ="MSHTML-specific HTTP status code",bI="Not available",bH="Precondition failed",bG="Server error",bF="Moved temporarily",bE="qx.io.remote.Exchange",bD="Bad gateway",bC="Gone",W="See other",X="Partial content",U="Server timeout",V="qx.io.remote.transport.Script",S="HTTP version not supported",T="Unauthorized",Q="Multiple choices",R="Payment required",bb="Not implemented",bc="Request-URL too large",bk="Length required",bi="_applyState",bs="changeState",bn="Not modified",by="qx.io.remote.Request",bw="Connection closed by server",be="Moved permanently",bB="_applyImplementation",bA="Method not allowed",bz="Forbidden",bd="Use proxy",bg="Ok",bh="Not found",bj="Not acceptable",bl="Request time-out",bo="Bad request",bt="Conflict",bx="No content",Y="qx.io.remote.transport.XmlHttp",ba="qx.io.remote.transport.Iframe",bf="Request entity too large",br="Unknown status code",bq="Unsupported media type",bp="Gateway time-out",bv="created",bu="Out of resources",bm="undefined";
qx.Class.define(bE,{extend:qx.core.Object,construct:function(bN){arguments.callee.base.call(this);
this.setRequest(bN);
bN.setTransport(this);
},events:{"sending":J,"receiving":J,"completed":H,"aborted":J,"failed":H,"timeout":H},statics:{typesOrder:[Y,ba,V],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(z,A){qx.io.remote.Exchange.typesAvailable[A]=z;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bQ in qx.io.remote.Exchange.typesAvailable){var bP=qx.io.remote.Exchange.typesAvailable[bQ];

if(bP.isSupported()){qx.io.remote.Exchange.typesSupported[bQ]=bP;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(B,C,D){if(!qx.lang.Array.contains(B.handles.responseTypes,D)){return false;
}
for(var E in C){if(!B.handles[E]){return false;
}}return true;
},_nativeMap:{0:bv,1:G,2:O,3:M,4:N},wasSuccessful:function(o,p,q){if(q){switch(o){case null:case 0:return true;
case -1:return p<4;
default:return typeof o===bm;
}}else{switch(o){case -1:{};
return p<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return p!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(o>206&&o<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+o+" ("+p+")");
return false;
}}},statusCodeToString:function(a){switch(a){case -1:return bI;
case 200:return bg;
case 304:return bn;
case 206:return X;
case 204:return bx;
case 300:return Q;
case 301:return be;
case 302:return bF;
case 303:return W;
case 305:return bd;
case 400:return bo;
case 401:return T;
case 402:return R;
case 403:return bz;
case 404:return bh;
case 405:return bA;
case 406:return bj;
case 407:return bL;
case 408:return bl;
case 409:return bt;
case 410:return bC;
case 411:return bk;
case 412:return bH;
case 413:return bf;
case 414:return bc;
case 415:return bq;
case 500:return bG;
case 501:return bb;
case 502:return bD;
case 503:return bu;
case 504:return bp;
case 505:return S;
case 12002:return U;
case 12029:return I;
case 12030:return I;
case 12031:return I;
case 12152:return bw;
case 13030:return bJ;
default:return br;
}}},properties:{request:{check:by,nullable:true},implementation:{check:bK,nullable:true,apply:bB},state:{check:[G,O,M,N,L,K,P],init:G,event:bs,apply:bi}},members:{send:function(){var u=this.getRequest();

if(!u){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var s=qx.io.remote.Exchange.typesOrder;
var r=qx.io.remote.Exchange.typesSupported;
var w=u.getResponseType();
var x={};

if(u.getAsynchronous()){x.asynchronous=true;
}else{x.synchronous=true;
}
if(u.getCrossDomain()){x.crossDomain=true;
}
if(u.getFileUpload()){x.fileUpload=true;
}for(var v in u.getFormFields()){x.programaticFormFields=true;
break;
}var y,t;

for(var i=0,l=s.length;i<l;i++){y=r[s[i]];

if(y){if(!qx.io.remote.Exchange.canHandle(y,x,w)){continue;
}
try{{};
t=new y;
this.setImplementation(t);
t.setUseBasicHttpAuth(u.getUseBasicHttpAuth());
t.send();
return true;
}catch(bO){this.error("Request handler throws error");
this.error(bO);
return;
}}}this.error("There is no transport implementation available to handle this request: "+u);
},abort:function(){var bM=this.getImplementation();

if(bM){{};
bM.abort();
}else{{};
this.setState(L);
}},timeout:function(){var F=this.getImplementation();

if(F){this.warn("Timeout: implementation "+F.toHashCode());
F.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(K);
}this.__oX();
},__oX:function(){var g=this.getRequest();

if(g){g.setTimeout(0);
}},_onsending:function(e){this.setState(O);
},_onreceiving:function(e){this.setState(M);
},_oncompleted:function(e){this.setState(N);
},_onabort:function(e){this.setState(L);
},_onfailed:function(e){this.setState(P);
},_ontimeout:function(e){this.setState(K);
},_applyImplementation:function(c,d){if(d){d.removeListener(O,this._onsending,this);
d.removeListener(M,this._onreceiving,this);
d.removeListener(N,this._oncompleted,this);
d.removeListener(L,this._onabort,this);
d.removeListener(K,this._ontimeout,this);
d.removeListener(P,this._onfailed,this);
}
if(c){var f=this.getRequest();
c.setUrl(f.getUrl());
c.setMethod(f.getMethod());
c.setAsynchronous(f.getAsynchronous());
c.setUsername(f.getUsername());
c.setPassword(f.getPassword());
c.setParameters(f.getParameters());
c.setFormFields(f.getFormFields());
c.setRequestHeaders(f.getRequestHeaders());
c.setData(f.getData());
c.setResponseType(f.getResponseType());
c.addListener(O,this._onsending,this);
c.addListener(M,this._onreceiving,this);
c.addListener(N,this._oncompleted,this);
c.addListener(L,this._onabort,this);
c.addListener(K,this._ontimeout,this);
c.addListener(P,this._onfailed,this);
}},_applyState:function(h,j){{};

switch(h){case O:this.fireEvent(O);
break;
case M:this.fireEvent(M);
break;
case N:case L:case K:case P:var m=this.getImplementation();

if(!m){break;
}this.__oX();

if(this.hasListener(h)){var n=qx.event.Registration.createEvent(h,qx.io.remote.Response);

if(h==N){var k=m.getResponseContent();
n.setContent(k);
if(k===null){{};
h=P;
}}else if(h==P){n.setContent(m.getResponseContent());
}n.setStatusCode(m.getStatusCode());
n.setResponseHeaders(m.getResponseHeaders());
this.dispatchEvent(n);
}this.setImplementation(null);
m.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var b=this.getImplementation();

if(b){this.setImplementation(null);
b.dispose();
}this.setRequest(null);
}});
})();
(function(){var m="=",l="&",k="application/xml",j="application/json",h="text/html",g="qx.client",f="textarea",d="none",c="text/plain",b="text/javascript",G="",F="completed",E="?",D="qx.io.remote.transport.Iframe",C="gecko",B="frame_",A="aborted",z="_data_",y="pre",x="javascript:void(0)",t="sending",u="form",r="failed",s='<iframe name="',p="mshtml",q="form_",n='"></iframe>',o="iframe",v="timeout",w="qx/static/blank.gif";
qx.Class.define(D,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var O=(new Date).valueOf();
var P=B+O;
var Q=q+O;
if(qx.core.Variant.isSet(g,p)){this.__lA=document.createElement(s+P+n);
}else{this.__lA=document.createElement(o);
}this.__lA.src=x;
this.__lA.id=this.__lA.name=P;
this.__lA.onload=qx.lang.Function.bind(this._onload,this);
this.__lA.style.display=d;
document.body.appendChild(this.__lA);
this.__lB=document.createElement(u);
this.__lB.target=P;
this.__lB.id=this.__lB.name=Q;
this.__lB.style.display=d;
document.body.appendChild(this.__lB);
this.__lC=document.createElement(f);
this.__lC.id=this.__lC.name=z;
this.__lB.appendChild(this.__lC);
this.__lA.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[c,b,j,k,h]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__lC:null,__lD:0,__lB:null,__lA:null,send:function(){var U=this.getMethod();
var W=this.getUrl();
var bb=this.getParameters(false);
var ba=[];

for(var V in bb){var X=bb[V];

if(X instanceof Array){for(var i=0;i<X.length;i++){ba.push(encodeURIComponent(V)+m+encodeURIComponent(X[i]));
}}else{ba.push(encodeURIComponent(V)+m+encodeURIComponent(X));
}}
if(ba.length>0){W+=(W.indexOf(E)>=0?l:E)+ba.join(l);
}if(this.getData()===null){var bb=this.getParameters(true);
var ba=[];

for(var V in bb){var X=bb[V];

if(X instanceof Array){for(var i=0;i<X.length;i++){ba.push(encodeURIComponent(V)+m+encodeURIComponent(X[i]));
}}else{ba.push(encodeURIComponent(V)+m+encodeURIComponent(X));
}}
if(ba.length>0){this.setData(ba.join(l));
}}var T=this.getFormFields();

for(var V in T){var Y=document.createElement(f);
Y.name=V;
Y.appendChild(document.createTextNode(T[V]));
this.__lB.appendChild(Y);
}this.__lB.action=W;
this.__lB.method=U;
this.__lC.appendChild(document.createTextNode(this.getData()));
this.__lB.submit();
this.setState(t);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__lB.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__lA.readyState]);
}),_switchReadyState:function(bd){switch(this.getState()){case F:case A:case r:case v:this.warn("Ignore Ready State Change");
return;
}while(this.__lD<bd){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lD]);
}},setRequestHeader:function(M,N){},getResponseHeader:function(S){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return G;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__lA);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__lA);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__lA);
},getIframeTextContent:function(){var H=this.getIframeBody();

if(!H){return null;
}
if(!H.firstChild){return G;
}if(H.firstChild.tagName&&H.firstChild.tagName.toLowerCase()==y){return H.firstChild.innerHTML;
}else{return H.innerHTML;
}},getIframeHtmlContent:function(){var a=this.getIframeBody();
return a?a.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==F){{};
return null;
}{};
var I=this.getIframeTextContent();

switch(this.getResponseType()){case c:{};
return I;
break;
case h:I=this.getIframeHtmlContent();
{};
return I;
break;
case j:I=this.getIframeHtmlContent();
{};

try{return I&&I.length>0?qx.util.Json.parse(I,false):null;
}catch(R){return this.error("Could not execute json: ("+I+")",R);
}case b:I=this.getIframeHtmlContent();
{};

try{return I&&I.length>0?window.eval(I):null;
}catch(bc){return this.error("Could not execute javascript: ("+I+")",bc);
}case k:I=this.getIframeDocument();
{};
return I;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(J,K,L){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,D);
},destruct:function(){if(this.__lA){this.__lA.onload=null;
this.__lA.onreadystatechange=null;
if(qx.core.Variant.isSet(g,C)){this.__lA.src=qx.util.ResourceManager.getInstance().toUri(w);
}document.body.removeChild(this.__lA);
}
if(this.__lB){document.body.removeChild(this.__lB);
}this.__lA=this.__lB=null;
}});
})();
(function(){var y="keypress",x="interval",w="keydown",v="mousedown",u="keyup",t="__lG",s="blur",r="Enter",q="__lF",p="__lE",j="Up",o="Escape",m="qx.ui.menu.Manager",h="Left",g="Down",l="Right",k="singleton",n="Space";
qx.Class.define(m,{type:k,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lE=[];
var z=document.body;
var A=qx.event.Registration;
A.addListener(window.document.documentElement,v,this._onMouseDown,this,true);
A.addListener(z,w,this._onKeyUpDown,this,true);
A.addListener(z,u,this._onKeyUpDown,this,true);
A.addListener(z,y,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,s,this.hideAll,this);
this.__lF=new qx.event.Timer;
this.__lF.addListener(x,this._onOpenInterval,this);
this.__lG=new qx.event.Timer;
this.__lG.addListener(x,this._onCloseInterval,this);
},members:{__lH:null,__lI:null,__lF:null,__lG:null,__lE:null,_getChild:function(bw,bx,by,bz){var bA=bw.getChildren();
var length=bA.length;
var bB;

for(var i=bx;i<length&&i>=0;i+=by){bB=bA[i];

if(bB.isEnabled()&&!bB.isAnonymous()){return bB;
}}
if(bz){i=i==length?0:length-1;

for(;i!=bx;i+=by){bB=bA[i];

if(bB.isEnabled()&&!bB.isAnonymous()){return bB;
}}}return null;
},_isInMenu:function(bq){while(bq){if(bq instanceof qx.ui.menu.Menu){return true;
}bq=bq.getLayoutParent();
}return false;
},_getMenuButton:function(V){while(V){if(V instanceof qx.ui.menu.AbstractButton){return V;
}V=V.getLayoutParent();
}return null;
},add:function(bC){{};
var bD=this.__lE;
bD.push(bC);
bC.setZIndex(1e6+bD.length);
},remove:function(T){{};
var U=this.__lE;

if(U){qx.lang.Array.remove(U,T);
}},hideAll:function(){var bl=this.__lE;

if(bl){for(var i=bl.length-1;i>=0;i--){bl[i].exclude();
}}},getActiveMenu:function(){var bp=this.__lE;
return bp.length>0?bp[bp.length-1]:null;
},scheduleOpen:function(bv){this.cancelClose(bv);
if(bv.isVisible()){if(this.__lH){this.cancelOpen(this.__lH);
}}else if(this.__lH!=bv){this.__lH=bv;
this.__lF.restartWith(bv.getOpenInterval());
}},scheduleClose:function(W){this.cancelOpen(W);
if(!W.isVisible()){if(this.__lI){this.cancelClose(this.__lI);
}}else if(this.__lI!=W){this.__lI=W;
this.__lG.restartWith(W.getCloseInterval());
}},cancelOpen:function(D){if(this.__lH==D){this.__lF.stop();
this.__lH=null;
}},cancelClose:function(bk){if(this.__lI==bk){this.__lG.stop();
this.__lI=null;
}},_onOpenInterval:function(e){this.__lF.stop();
this.__lH.open();
this.__lH=null;
},_onCloseInterval:function(e){this.__lG.stop();
this.__lI.exclude();
this.__lI=null;
},_onMouseDown:function(e){var E=e.getTarget();
E=qx.ui.core.Widget.getWidgetByElement(E);
if(E==null){this.hideAll();
return;
}if(E.getMenu&&E.getMenu()&&E.getMenu().isVisible()){return;
}if(this.__lE.length>0&&!this._isInMenu(E)){this.hideAll();
}},__lJ:{"Enter":1,"Space":1},__lK:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var B=this.getActiveMenu();

if(!B){return;
}var C=e.getKeyIdentifier();

if(this.__lK[C]||(this.__lJ[C]&&B.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var a=this.getActiveMenu();

if(!a){return;
}var b=e.getKeyIdentifier();
var d=this.__lK[b];
var c=this.__lJ[b];

if(d){switch(b){case j:this._onKeyPressUp(a);
break;
case g:this._onKeyPressDown(a);
break;
case h:this._onKeyPressLeft(a);
break;
case l:this._onKeyPressRight(a);
break;
case o:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(c){var f=a.getSelectedButton();

if(f){switch(b){case r:this._onKeyPressEnter(a,f,e);
break;
case n:this._onKeyPressSpace(a,f,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(O){var P=O.getSelectedButton();
var Q=O.getChildren();
var S=P?O.indexOf(P)-1:Q.length-1;
var R=this._getChild(O,S,-1,true);
if(R){O.setSelectedButton(R);
}else{O.resetSelectedButton();
}},_onKeyPressDown:function(br){var bs=br.getSelectedButton();
var bu=bs?br.indexOf(bs)+1:0;
var bt=this._getChild(br,bu,1,true);
if(bt){br.setSelectedButton(bt);
}else{br.resetSelectedButton();
}},_onKeyPressLeft:function(F){var K=F.getOpener();

if(!K){return;
}if(K instanceof qx.ui.menu.Button){var H=K.getLayoutParent();
H.resetOpenedButton();
H.setSelectedButton(K);
}else if(K instanceof qx.ui.menubar.Button){var J=K.getMenuBar().getMenuButtons();
var G=J.indexOf(K);
if(G===-1){return;
}var L=null;
var length=J.length;

for(var i=1;i<=length;i++){var I=J[(G-i+length)%length];

if(I.isEnabled()){L=I;
break;
}}
if(L&&L!=K){L.open(true);
}}},_onKeyPressRight:function(bb){var bd=bb.getSelectedButton();
if(bd){var bc=bd.getMenu();

if(bc){bb.setOpenedButton(bd);
var bj=this._getChild(bc,0,1);

if(bj){bc.setSelectedButton(bj);
}return;
}}else if(!bb.getOpenedButton()){var bj=this._getChild(bb,0,1);

if(bj){bb.setSelectedButton(bj);

if(bj.getMenu()){bb.setOpenedButton(bj);
}return;
}}var bh=bb.getOpener();
if(bh instanceof qx.ui.menu.Button&&bd){while(bh){bh=bh.getLayoutParent();

if(bh instanceof qx.ui.menu.Menu){bh=bh.getOpener();

if(bh instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bh){return;
}}if(bh instanceof qx.ui.menubar.Button){var bg=bh.getMenuBar().getMenuButtons();
var be=bg.indexOf(bh);
if(be===-1){return;
}var bi=null;
var length=bg.length;

for(var i=1;i<=length;i++){var bf=bg[(be+i)%length];

if(bf.isEnabled()){bi=bf;
break;
}}
if(bi&&bi!=bh){bi.open(true);
}}},_onKeyPressEnter:function(bm,bn,e){if(bn.hasListener(y)){var bo=e.clone();
bo.setBubbles(false);
bo.setTarget(bn);
bn.dispatchEvent(bo);
}this.hideAll();
},_onKeyPressSpace:function(X,Y,e){if(Y.hasListener(y)){var ba=e.clone();
ba.setBubbles(false);
ba.setTarget(Y);
Y.dispatchEvent(ba);
}}},destruct:function(){var N=qx.event.Registration;
var M=document.body;
N.removeListener(window.document.documentElement,v,this._onMouseDown,this,true);
N.removeListener(M,w,this._onKeyUpDown,this,true);
N.removeListener(M,u,this._onKeyUpDown,this,true);
N.removeListener(M,y,this._onKeyPress,this,true);
this._disposeObjects(q,t);
this._disposeArray(p);
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
(function(){var x="slider",w="splitter",v="qx.ui.splitpane.VLayout";
qx.Class.define(v,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(a,b){var s=this._getLayoutChildren();
var length=s.length;
var o,r;
var d,c,m,e;

for(var i=0;i<length;i++){o=s[i];
r=o.getLayoutProperties().type;

if(r===w){c=o;
}else if(r===x){m=o;
}else if(!d){d=o;
}else{e=o;
}}
if(d&&e){var u=d.getLayoutProperties().flex;
var g=e.getLayoutProperties().flex;

if(u==null){u=1;
}
if(g==null){g=1;
}var t=d.getSizeHint();
var k=c.getSizeHint();
var l=e.getSizeHint();
var f=t.height;
var p=k.height;
var q=l.height;

if(u>0&&g>0){var h=u+g;
var j=b-p;
var f=Math.round((j/h)*u);
var q=j-f;
var n=qx.ui.layout.Util.arrangeIdeals(t.minHeight,f,t.maxHeight,l.minHeight,q,l.maxHeight);
f=n.begin;
q=n.end;
}else if(u>0){f=b-p-q;

if(f<t.minHeight){f=t.minHeight;
}
if(f>t.maxHeight){f=t.maxHeight;
}}else if(g>0){q=b-f-p;

if(q<l.minHeight){q=l.minHeight;
}
if(q>l.maxHeight){q=l.maxHeight;
}}d.renderLayout(0,0,a,f);
c.renderLayout(0,f,a,p);
e.renderLayout(0,f+p,a,q);
}else{c.renderLayout(0,0,0,0);
if(d){d.renderLayout(0,0,a,b);
}else if(e){e.renderLayout(0,0,a,b);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var B=0,D=0,C=0;
var E=0,F=0,y=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===x){continue;
}z=A.getSizeHint();
B+=z.minHeight;
D+=z.height;
C+=z.maxHeight;

if(z.minWidth>E){E=z.minWidth;
}
if(z.width>F){F=z.width;
}
if(z.maxWidth>y){y=z.maxWidth;
}}return {minHeight:B,height:D,maxHeight:C,minWidth:E,width:F,maxWidth:y};
}}});
})();
(function(){var h="changeSelection",g="change",f="qx.data.Array",e="qx.data.controller.MSelection",d="_applySelection",c="target";
qx.Mixin.define(e,{construct:function(){if(!qx.Class.hasProperty(this.constructor,c)){throw new Error("Target property is needed.");
}if(this.getSelection()==null){this.setSelection(new qx.data.Array());
}},properties:{selection:{check:f,event:h,apply:d,init:null}},members:{_modifingSelection:0,__lL:null,__lM:null,_applySelection:function(n,o){if(this.__lM!=undefined&&o!=undefined){o.removeListenerById(this.__lM);
}this.__lM=n.addListener(g,this.__lN,this);
},__lN:function(){this._updateSelection();
},_changeTargetSelection:function(){if(this._inSelectionModification()||this.getTarget()==null){return;
}var t=this.getTarget().getSelection();
var s=this.getSelection();

if(s==null){s=new qx.data.Array();
this.setSelection(s);
}if(t.length>0){s.toArray().splice(0,s.getLength());
}else{s.splice(0,this.getSelection().getLength());
}for(var i=0;i<t.length;i++){var r=t[i].getModel();

if(i+1==t.length){s.push(r);
}else{s.toArray().push(r);
}}this.fireDataEvent(h,this.getSelection());
},_addChangeTargetListener:function(v,w){if(this.__lL!=undefined&&w!=undefined){w.removeListenerById(this.__lL);
}
if(v!=null){if(this.__lO()||this.__lP()){this.__lL=v.addListener(h,this._changeTargetSelection,this);
}}},_updateSelection:function(){this._startSelectionModification();
if(this.__lO()){var k=[];
for(var i=0;i<this.getSelection().length;i++){var j=this.getSelection().getItem(i);
var l=this.__lR(j);

if(l!=null){k.push(l);
}}this.getTarget().setSelection(k);
k=this.getTarget().getSelection();
var m=[];

for(var i=0;i<k.length;i++){m[i]=k[i].getModel();
}for(var i=this.getSelection().length-1;i>=0;i--){if(!qx.lang.Array.contains(m,this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}}else if(this.__lP()){this.__lQ(this.getSelection().getItem(this.getSelection().length-1));
this.getSelection().splice(0,this.getSelection().getLength()-1);
}this._endSelectionModification();
},__lO:function(){var u=this.getTarget().constructor;
return qx.Class.implementsInterface(u,qx.ui.core.IMultiSelection);
},__lP:function(){var x=this.getTarget().constructor;
return qx.Class.implementsInterface(x,qx.ui.core.ISingleSelection);
},__lQ:function(a){var b=this.__lR(a);
if(b==null){return;
}if(this.__lO()){this.getTarget().addToSelection(b);
}else if(this.__lP()){this.getTarget().setSelection([b]);
}},__lR:function(p){var q=this.getTarget().getSelectables();
for(var i=0;i<q.length;i++){if(q[i].getModel()==p){return q[i];
}}return null;
},_startSelectionModification:function(){this._modifingSelection++;
},_endSelectionModification:function(){this._modifingSelection>0?this._modifingSelection--:null;
},_inSelectionModification:function(){return this._modifingSelection>0;
}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var C="&",B="=",A="?",z="application/json",y="completed",x="text/plain",w="text/javascript",v="qx.io.remote.transport.Script",u="",t="_ScriptTransport_data",o="script",s="timeout",r="_ScriptTransport_",n="_ScriptTransport_id",m="aborted",q="utf-8",p="failed";
qx.Class.define(v,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var G=++qx.io.remote.transport.Script.__lS;

if(G>=2000000000){qx.io.remote.transport.Script.__lS=G=1;
}this.__lT=null;
this.__lS=G;
},statics:{__lS:0,_instanceRegistry:{},ScriptTransport_PREFIX:r,ScriptTransport_ID_PARAM:n,ScriptTransport_DATA_PARAM:t,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[x,w,z]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(k,content){var l=qx.io.remote.transport.Script._instanceRegistry[k];

if(l==null){{};
}else{l._responseContent=content;
l._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__lU:0,__lT:null,__lS:null,send:function(){var c=this.getUrl();
c+=(c.indexOf(A)>=0?C:A)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+B+this.__lS;
var f=this.getParameters();
var e=[];

for(var b in f){if(b.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var d=f[b];

if(d instanceof Array){for(var i=0;i<d.length;i++){e.push(encodeURIComponent(b)+B+encodeURIComponent(d[i]));
}}else{e.push(encodeURIComponent(b)+B+encodeURIComponent(d));
}}
if(e.length>0){c+=C+e.join(C);
}var a=this.getData();

if(a!=null){c+=C+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+B+encodeURIComponent(a);
}qx.io.remote.transport.Script._instanceRegistry[this.__lS]=this;
this.__lT=document.createElement(o);
this.__lT.charset=q;
this.__lT.src=c;
{};
document.body.appendChild(this.__lT);
},_switchReadyState:function(j){switch(this.getState()){case y:case m:case p:case s:this.warn("Ignore Ready State Change");
return;
}while(this.__lU<j){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lU]);
}},setRequestHeader:function(H,I){},getResponseHeader:function(h){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return u;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==y){{};
return null;
}{};

switch(this.getResponseType()){case x:case z:case w:{};
var g=this._responseContent;
return (g===0?0:(g||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(D,E,F){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,v);
},destruct:function(){if(this.__lT){delete qx.io.remote.transport.Script._instanceRegistry[this.__lS];
document.body.removeChild(this.__lT);
}this.__lT=this._responseContent=null;
}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var w="knob",v="horizontal",u="vertical",t="Integer",s="px",r="mousemove",q="resize",p="left",o="top",n="mouseup",bb="slider",ba="PageUp",Y="mousedown",X="height",W="changeValue",V="Left",U="Down",T="Up",S="dblclick",R="qx.ui.form.Slider",D="PageDown",E="mousewheel",B="interval",C="_applyValue",z="_applyKnobFactor",A="End",x="width",y="_applyOrientation",F="Home",G="floor",J="_applyMinimum",I="click",L="Right",K="keypress",N="ceil",M="losecapture",H="contextmenu",Q="_applyMaximum",P="Number",O="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(R,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bx){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(K,this._onKeyPress);
this.addListener(E,this._onMouseWheel);
this.addListener(Y,this._onMouseDown);
this.addListener(n,this._onMouseUp);
this.addListener(M,this._onMouseUp);
this.addListener(q,this._onUpdate);
this.addListener(H,this._onStopEvent);
this.addListener(I,this._onStopEvent);
this.addListener(S,this._onStopEvent);
if(bx!=null){this.setOrientation(bx);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bb},focusable:{refine:true,init:true},orientation:{check:[v,u],init:v,apply:y},value:{check:O,init:0,apply:C,event:W,nullable:true},minimum:{check:t,init:0,apply:J},maximum:{check:t,init:100,apply:Q},singleStep:{check:t,init:1},pageStep:{check:t,init:10},knobFactor:{check:P,apply:z,nullable:true}},members:{__lV:null,__lW:null,__lX:null,__lY:null,__ma:null,__mb:null,__mc:null,__md:null,__me:null,_forwardStates:{invalid:true},_createChildControlImpl:function(be){var bf;

switch(be){case w:bf=new qx.ui.core.Widget();
bf.addListener(q,this._onUpdate,this);
this._add(bf);
break;
}return bf||arguments.callee.base.call(this,be);
},_onMouseWheel:function(e){var bm=e.getWheelDelta()>0?1:-1;
this.slideBy(bm*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bL=this.getOrientation()===v;
var bK=bL?V:T;
var forward=bL?L:U;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bK:this.slideBack();
break;
case D:this.slidePageForward();
break;
case ba:this.slidePageBack();
break;
case F:this.slideToBegin();
break;
case A:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__lY){return;
}var bp=this.__mg;
var bn=this.getChildControl(w);
var bo=bp?p:o;
var br=bp?e.getDocumentLeft():e.getDocumentTop();
var bs=this.__lV=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bo];
var bq=this.__lW=qx.bom.element.Location.get(bn.getContainerElement().getDomElement())[bo];

if(e.getTarget()===bn){this.__lY=true;
this.__ma=br+bs-bq;
}else{this.__mb=true;
this.__mc=br<=bq?-1:1;
this.__mh(e);
this._onInterval();
if(!this.__me){this.__me=new qx.event.Timer(100);
this.__me.addListener(B,this._onInterval,this);
}this.__me.start();
}this.addListener(r,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__lY){this.releaseCapture();
delete this.__lY;
delete this.__ma;
}else if(this.__mb){this.__me.stop();
this.releaseCapture();
delete this.__mb;
delete this.__mc;
delete this.__md;
}this.removeListener(r,this._onMouseMove);
if(e.getType()===n){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__lY){var b=this.__mg?e.getDocumentLeft():e.getDocumentTop();
var a=b-this.__ma;
this.slideTo(this._positionToValue(a));
}else if(this.__mb){this.__mh(e);
}e.stopPropagation();
},_onInterval:function(e){var bg=this.getValue()+(this.__mc*this.getPageStep());
if(bg<this.getMinimum()){bg=this.getMinimum();
}else if(bg>this.getMaximum()){bg=this.getMaximum();
}var bh=this.__mc==-1;

if((bh&&bg<=this.__md)||(!bh&&bg>=this.__md)){bg=this.__md;
}this.slideTo(bg);
},_onUpdate:function(e){var bN=this.getInnerSize();
var bO=this.getChildControl(w).getBounds();
var bM=this.__mg?x:X;
this._updateKnobSize();
this.__mf=bN[bM]-bO[bM];
this.__lX=bO[bM];
this._updateKnobPosition();
},__mg:false,__mf:0,__mh:function(e){var by=this.__mg;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__lV;
var bz=this.__lW;
var bJ=this.__lX;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__mc<0?G:N;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__md==null||(this.__mc==-1&&bD<=this.__md)||(this.__mc==1&&bD>=this.__md)){this.__md=bD;
}},_positionToValue:function(bi){var bj=this.__mf;
if(bj==null||bj==0){return 0;
}var bl=bi/bj;

if(bl<0){bl=0;
}else if(bl>1){bl=1;
}var bk=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bk*bl);
},_valueToPosition:function(i){var j=this.__mf;

if(j==null){return 0;
}var k=this.getMaximum()-this.getMinimum();
if(k==0){return 0;
}var i=i-this.getMinimum();
var l=i/k;

if(l<0){l=0;
}else if(l>1){l=1;
}return Math.round(j*l);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bR){var bS=this.getChildControl(w).getContainerElement();

if(this.__mg){bS.setStyle(p,bR+s,true);
}else{bS.setStyle(o,bR+s,true);
}},_updateKnobSize:function(){var bQ=this.getKnobFactor();

if(bQ==null){return;
}var bP=this.getInnerSize();

if(bP==null){return;
}if(this.__mg){this.getChildControl(w).setWidth(Math.round(bQ*bP.width));
}else{this.getChildControl(w).setHeight(Math.round(bQ*bP.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(m){this.slideTo(this.getValue()+m);
},slideTo:function(bT){if(bT<this.getMinimum()){bT=this.getMinimum();
}else if(bT>this.getMaximum()){bT=this.getMaximum();
}else{bT=this.getMinimum()+Math.round((bT-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bT);
},_applyOrientation:function(f,g){var h=this.getChildControl(w);
this.__mg=f===v;
if(this.__mg){this.removeState(u);
h.removeState(u);
this.addState(v);
h.addState(v);
h.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(v);
h.removeState(v);
this.addState(u);
h.addState(u);
h.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bc,bd){if(bc!=null){this._updateKnobSize();
}else{if(this.__mg){this.getChildControl(w).resetWidth();
}else{this.getChildControl(w).resetHeight();
}}},_applyValue:function(bt,bu){if(bt!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(bv,bw){if(this.getValue()<bv){this.setValue(bv);
}this._updateKnobPosition();
},_applyMaximum:function(c,d){if(this.getValue()>c){this.setValue(c);
}this._updateKnobPosition();
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.HLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var s,u;
var g,f,p,h;

for(var i=0;i<length;i++){s=v[i];
u=s.getLayoutProperties().type;

if(u===b){f=s;
}else if(u===c){p=s;
}else if(!g){g=s;
}else{h=s;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var j=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(j==null){j=1;
}var w=g.getSizeHint();
var m=f.getSizeHint();
var o=h.getSizeHint();
var t=w.width;
var r=m.width;
var q=o.width;

if(x>0&&j>0){var k=x+j;
var l=d-r;
var t=Math.round((l/k)*x);
var q=l-t;
var n=qx.ui.layout.Util.arrangeIdeals(w.minWidth,t,w.maxWidth,o.minWidth,q,o.maxWidth);
t=n.begin;
q=n.end;
}else if(x>0){t=d-r-q;

if(t<w.minWidth){t=w.minWidth;
}
if(t>w.maxWidth){t=w.maxWidth;
}}else if(j>0){q=d-t-r;

if(q<o.minWidth){q=o.minWidth;
}
if(q>o.maxWidth){q=o.maxWidth;
}}g.renderLayout(0,0,t,e);
f.renderLayout(t,0,r,e);
h.renderLayout(t+r,0,q,e);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var E=0,F=0,y=0;
var B=0,D=0,C=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
E+=z.minWidth;
F+=z.width;
y+=z.maxWidth;

if(z.minHeight>B){B=z.minHeight;
}
if(z.height>D){D=z.height;
}
if(z.maxHeight>C){C=z.maxHeight;
}}return {minWidth:E,width:F,maxWidth:y,minHeight:B,height:D,maxHeight:C};
}}});
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
(function(){var u=",",t="",s="string",r="null",q='"',p="qx.jsonDebugging",o='\\u00',n="new Date(Date.UTC(",m="__mn",k='\\\\',Q="__mu",P="__ml",O='\\f',N='\\"',M="))",L="}",K='(',J=":",I="{",H='\\r',B='\\t',C="__mv",z="__mk",A="]",x="[",y="Use 'parse' instead!",v="__mm",w="qx.jsonEncodeUndefined",D='\\b',E="qx.util.Json",G=')',F='\\n';
qx.Class.define(E,{statics:{__mi:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__mj:{"function":z,"boolean":P,"number":v,"string":m,"object":Q,"undefined":C},__mk:function(bn,bo){return String(bn);
},__ml:function(bi,bj){return String(bi);
},__mm:function(e,f){return isFinite(e)?String(e):r;
},__mn:function(S,T){var U;

if(/["\\\x00-\x1f]/.test(S)){U=S.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__mp);
}else{U=S;
}return q+U+q;
},__mo:{'\b':D,'\t':B,'\n':F,'\f':O,'\r':H,'"':N,'\\':k},__mp:function(a,b){var g=qx.util.Json.__mo[b];

if(g){return g;
}g=b.charCodeAt();
return o+Math.floor(g/16).toString(16)+(g%16).toString(16);
},__mq:function(bu,bv){var bx=[],bA=true,bz,bw;
var by=qx.util.Json.__mx;
bx.push(x);

if(by){qx.util.Json.__mr+=qx.util.Json.BEAUTIFYING_INDENT;
bx.push(qx.util.Json.__mr);
}
for(var i=0,l=bu.length;i<l;i++){bw=bu[i];
bz=this.__mj[typeof bw];

if(bz){bw=this[bz](bw,i+t);

if(typeof bw==s){if(!bA){bx.push(u);

if(by){bx.push(qx.util.Json.__mr);
}}bx.push(bw);
bA=false;
}}}
if(by){qx.util.Json.__mr=qx.util.Json.__mr.substring(0,qx.util.Json.__mr.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bx.push(qx.util.Json.__mr);
}bx.push(A);
return bx.join(t);
},__ms:function(bk,bl){var bm=bk.getUTCFullYear()+u+bk.getUTCMonth()+u+bk.getUTCDate()+u+bk.getUTCHours()+u+bk.getUTCMinutes()+u+bk.getUTCSeconds()+u+bk.getUTCMilliseconds();
return n+bm+M;
},__mt:function(V,W){var ba=[],bc=true,Y,X;
var bb=qx.util.Json.__mx;
ba.push(I);

if(bb){qx.util.Json.__mr+=qx.util.Json.BEAUTIFYING_INDENT;
ba.push(qx.util.Json.__mr);
}
for(var W in V){X=V[W];
Y=this.__mj[typeof X];

if(Y){X=this[Y](X,W);

if(typeof X==s){if(!bc){ba.push(u);

if(bb){ba.push(qx.util.Json.__mr);
}}ba.push(this.__mn(W),J,X);
bc=false;
}}}
if(bb){qx.util.Json.__mr=qx.util.Json.__mr.substring(0,qx.util.Json.__mr.length-qx.util.Json.BEAUTIFYING_INDENT.length);
ba.push(qx.util.Json.__mr);
}ba.push(L);
return ba.join(t);
},__mu:function(h,j){if(h){if(qx.lang.Type.isFunction(h.toJSON)&&h.toJSON!==this.__mi){return this.__mw(h.toJSON(j),j);
}else if(qx.lang.Type.isDate(h)){return this.__ms(h,j);
}else if(qx.lang.Type.isArray(h)){return this.__mq(h,j);
}else if(qx.lang.Type.isObject(h)){return this.__mt(h,j);
}return t;
}return r;
},__mv:function(bd,be){if(qx.core.Setting.get(w)){return r;
}},__mw:function(bs,bt){return this[this.__mj[typeof bs]](bs,bt);
},stringify:function(bf,bg){this.__mx=bg;
this.__mr=this.BEAUTIFYING_LINE_END;
var bh=this.__mw(bf,t);

if(typeof bh!=s){bh=null;
}if(qx.core.Setting.get(p)){qx.log.Logger.debug(this,"JSON request: "+bh);
}return bh;
},parse:function(bp,bq){if(bq===undefined){bq=true;
}
if(qx.core.Setting.get(p)){qx.log.Logger.debug(this,"JSON response: "+bp);
}
if(bq){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bp.replace(/"(\\.|[^"\\])*"/g,t))){throw new Error("Could not parse JSON string!");
}}
try{var br=(bp&&bp.length>0)?eval(K+bp+G):null;
return br;
}catch(R){throw new Error("Could not evaluate JSON string: "+R.message);
}},parseQx:function(d){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return qx.util.Json.parse(d,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(c){c.__mi=Date.prototype.toJSON;
}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(k){this.getContentElement().setStyle(h,k);
},_applyOverflowY:function(j){this.getContentElement().setStyle(d,j);
}}});
})();
(function(){var r="none",q="text",p="",o="userSelect",n="color",m="String",l="0px",k="webkit",j="changeHtml",i="_applyCssClass",f="class",h="qx.ui.embed.Html",g="_applyHtml",e="qx.client",d="html";
qx.Class.define(h,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(t){arguments.callee.base.call(this);

if(t!=null){this.setHtml(t);
}},properties:{html:{check:m,apply:g,event:j,nullable:true},cssClass:{check:m,init:p,apply:i},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(u,v){var w=this.getContentElement();
w.setAttribute(d,u||p);
w.setStyles({"padding":l,"border":r});
},_applyCssClass:function(z,A){this.getContentElement().setAttribute(f,z);
},_applySelectable:function(s){arguments.callee.base.call(this,s);
if(qx.core.Variant.isSet(e,k)){this.getContainerElement().setStyle(o,s?q:r);
this.getContentElement().setStyle(o,s?q:r);
}},_applyFont:function(a,b){var c=a?qx.theme.manager.Font.getInstance().resolve(a).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(c);
},_applyTextColor:function(x,y){if(x){this.getContentElement().setStyle(n,qx.theme.manager.Color.getInstance().resolve(x));
}else{this.getContentElement().removeStyle(n);
}}}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var h="qx.event.handler.Iframe",g="load",f="iframe";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(a){qx.event.Registration.fireEvent(a,g);
})},members:{canHandleEvent:function(l,m){return l.tagName.toLowerCase()===f;
},registerEvent:function(i,j,k){},unregisterEvent:function(c,d,e){}},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var m="qx.client",l="webkit",k="body",j="iframe",i="qx.bom.Iframe";
qx.Class.define(i,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(o,p){var o=o?qx.lang.Object.clone(o):{};
var q=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var r in q){if(o[r]==null){o[r]=q[r];
}}return qx.bom.Element.create(j,o,p);
},getWindow:qx.core.Variant.select(m,{"mshtml|gecko":function(d){try{return d.contentWindow;
}catch(t){return null;
}},"default":function(e){try{var f=this.getDocument(e);
return f?f.defaultView:null;
}catch(h){return null;
}}}),getDocument:qx.core.Variant.select(m,{"mshtml":function(C){try{var D=this.getWindow(C);
return D?D.document:null;
}catch(s){return null;
}},"default":function(z){try{return z.contentDocument;
}catch(n){return null;
}}}),getBody:function(A){try{var B=this.getDocument(A);
return B?B.getElementsByTagName(k)[0]:null;
}catch(g){return null;
}},setSource:function(v,w){try{if(this.getWindow(v)&&qx.dom.Hierarchy.isRendered(v)){try{if(qx.core.Variant.isSet(m,l)&&qx.bom.client.Platform.MAC){var x=this.getContentWindow();

if(x){x.stop();
}}this.getWindow(v).location.replace(w);
}catch(y){v.src=w;
}}else{v.src=w;
}}catch(c){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(a){var b=this.getDocument(a);

try{if(b&&b.location){return b.location.href;
}}catch(u){}return null;
}}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var v="Integer",u="aborted",t="_onaborted",s="__mX",r="_on",q="_applyEnabled",p="Boolean",o="sending",n="__mV",m="interval",g="failed",l="qx.io.remote.RequestQueue",k="timeout",f="completed",d="queued",j="receiving",h="singleton";
qx.Class.define(l,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mU=[];
this.__mV=[];
this.__mW=0;
this.__mX=new qx.event.Timer(500);
this.__mX.addListener(m,this._oninterval,this);
},properties:{enabled:{init:true,check:p,apply:q},maxTotalRequests:{check:v,nullable:true},maxConcurrentRequests:{check:v,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:v,init:5000}},members:{__mU:null,__mV:null,__mW:null,__mX:null,getRequestQueue:function(){return this.__mU;
},getActiveQueue:function(){return this.__mV;
},_debug:function(){var F;
{};
},_check:function(){this._debug();
if(this.__mV.length==0&&this.__mU.length==0){this.__mX.stop();
}if(!this.getEnabled()){return;
}if(this.__mU.length==0||(this.__mU[0].isAsynchronous()&&this.__mV.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__mW>=this.getMaxTotalRequests()){return;
}var G=this.__mU.shift();
var H=new qx.io.remote.Exchange(G);
this.__mW++;
this.__mV.push(H);
this._debug();
H.addListener(o,this._onsending,this);
H.addListener(j,this._onreceiving,this);
H.addListener(f,this._oncompleted,this);
H.addListener(u,this._oncompleted,this);
H.addListener(k,this._oncompleted,this);
H.addListener(g,this._oncompleted,this);
H._start=(new Date).valueOf();
H.send();
if(this.__mU.length>0){this._check();
}},_remove:function(I){qx.lang.Array.remove(this.__mV,I);
I.dispose();
this._check();
},__mY:0,_onsending:function(e){{};
e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){{};
var M=e.getTarget().getRequest();
var L=r+e.getType();
try{if(M[L]){M[L](e);
}}catch(J){var K=qx.dev.StackTrace.getStackTraceFromError(J);
this.error("Request "+M+" handler "+L+" threw an error: "+J+"\nStack Trace:\n"+K);
try{if(M[t]){var event=qx.event.Registration.createEvent(u,qx.event.type.Event);
M[t](event);
}}catch(a){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var C=this.__mV;

if(C.length==0){this.__mX.stop();
return;
}var x=(new Date).valueOf();
var A;
var y;
var B=this.getDefaultTimeout();
var z;
var w;

for(var i=C.length-1;i>=0;i--){A=C[i];
y=A.getRequest();

if(y.isAsynchronous()){z=y.getTimeout();
if(z==0){continue;
}
if(z==null){z=B;
}w=x-A._start;

if(w>z){this.warn("Timeout: transport "+A.toHashCode());
this.warn(w+"ms > "+z+"ms");
A.timeout();
}}}},_applyEnabled:function(D,E){if(D){this._check();
}this.__mX.setEnabled(D);
},add:function(N){N.setState(d);

if(N.isAsynchronous()){this.__mU.push(N);
}else{this.__mU.unshift(N);
}this._check();

if(this.getEnabled()){this.__mX.start();
}},abort:function(b){var c=b.getTransport();

if(c){c.abort();
}else if(qx.lang.Array.contains(this.__mU,b)){qx.lang.Array.remove(this.__mU,b);
}}},destruct:function(){this._disposeArray(n);
this._disposeObjects(s);
this.__mU=null;
}});
})();
(function(){var z="zIndex",y="px",x="keydown",w="deactivate",v="This method is not needed anymore.",u="resize",t="keyup",s="keypress",r="backgroundColor",q="_applyOpacity",M="Use 'getBlockerElement' instead.",L="opacity",K="interval",J="__nd",I="Tab",H="__nf",G="Color",F="qx.ui.root.Page",E="__ni",D="Use 'getContentBlockerElement' instead.",B="Number",C="qx.ui.core.Blocker",A="_applyColor";
qx.Class.define(C,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this._widget=a;
this._isPageRoot=(qx.Class.isDefined(F)&&a instanceof qx.ui.root.Page);

if(this._isPageRoot){a.addListener(u,this.__nj,this);
}this.__na=[];
this.__nb=[];
this.__nc=[];
},properties:{color:{check:G,init:null,nullable:true,apply:A,themeable:true},opacity:{check:B,init:1,apply:q,themeable:true}},members:{__nd:null,__ne:0,__nf:null,__nc:null,__na:null,__nb:null,__ng:null,__nh:0,__ni:null,_isPageRoot:false,_widget:null,__nj:function(e){var S=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:S.width,height:S.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:S.width,height:S.height});
}},_applyColor:function(T,U){var V=qx.theme.manager.Color.getInstance().resolve(T);
this.__nk(r,V);
},_applyOpacity:function(N,O){this.__nk(L,N);
},__nk:function(P,Q){var R=[];
this.__nd&&R.push(this.__nd);
this.__nf&&R.push(this.__nf);

for(var i=0;i<R.length;i++){R[i].setStyle(P,Q);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,v);
this.__nh+=1;

if(this.__nh==1){this.__ng=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,v);
this.__nh-=1;

if(this.__nh==0){this._widget.setAnonymous(this.__ng);
}},_backupActiveWidget:function(){var p=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__na.push(p.getActive());
this.__nb.push(p.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var d=this.__na.length;

if(d>0){var c=this.__na[d-1];

if(c){qx.bom.Element.activate(c);
}this.__na.pop();
}var b=this.__nb.length;

if(b>0){var c=this.__nb[b-1];

if(c){qx.bom.Element.focus(this.__nb[b-1]);
}this.__nb.pop();
}},__nl:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,M);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__nd){this.__nd=this.__nl();
this.__nd.setStyle(z,15);
this._widget.getContainerElement().add(this.__nd);
this.__nd.exclude();
}return this.__nd;
},block:function(){this.__ne++;

if(this.__ne<2){this._backupActiveWidget();
var m=this.getBlockerElement();
m.include();
m.activate();
m.addListener(w,this.__nq,this);
m.addListener(s,this.__np,this);
m.addListener(x,this.__np,this);
m.addListener(t,this.__np,this);
}},isBlocked:function(){return this.__ne>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__ne--;

if(this.__ne<1){this.__nm();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__ne=0;
this.__nm();
},__nm:function(){this._restoreActiveWidget();
var l=this.getBlockerElement();
l.removeListener(w,this.__nq,this);
l.removeListener(s,this.__np,this);
l.removeListener(x,this.__np,this);
l.removeListener(t,this.__np,this);
l.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__nf){this.__nf=this.__nl();
this._widget.getContentElement().add(this.__nf);
this.__nf.exclude();
}return this.__nf;
},blockContent:function(n){var o=this.getContentBlockerElement();
o.setStyle(z,n);
this.__nc.push(n);

if(this.__nc.length<2){o.include();

if(this._isPageRoot){if(!this.__ni){this.__ni=new qx.event.Timer(300);
this.__ni.addListener(K,this.__no,this);
}this.__ni.start();
this.__no();
}}},isContentBlocked:function(){return this.__nc.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nc.pop();
var h=this.__nc[this.__nc.length-1];
var j=this.getContentBlockerElement();
j.setStyle(z,h);

if(this.__nc.length<1){this.__nn();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nc=[];
var k=this.getContentBlockerElement();
k.setStyle(z,null);
this.__nn();
},__nn:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__ni.stop();
}},__no:function(){var f=this._widget.getContainerElement().getDomElement();
var g=qx.dom.Node.getDocument(f);
this.getContentBlockerElement().setStyles({height:g.documentElement.scrollHeight+y,width:g.documentElement.scrollWidth+y});
},__np:function(e){if(e.getKeyIdentifier()==I){e.stop();
}},__nq:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(u,this.__nj,this);
}this._disposeObjects(H,J,E);
this.__ng=this.__na=this.__nb=this._widget=this.__nc=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="double",f="px ",e="dotted",d="_applyWidth",c="dashed",b="Number",a=" ",F="shorthand",E="px",D="widthTop",C="styleRight",B="styleLeft",A="widthLeft",z="widthBottom",y="styleTop",x="colorBottom",w="styleBottom",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="scale",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.Single",t="",v="border-bottom",u="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(G,H,I){arguments.callee.base.call(this);
if(G!=null){this.setWidth(G);
}
if(H!=null){this.setStyle(H);
}
if(I!=null){this.setColor(I);
}},properties:{widthTop:{check:b,init:0,apply:d},widthRight:{check:b,init:0,apply:d},widthBottom:{check:b,init:0,apply:d},widthLeft:{check:b,init:0,apply:d},styleTop:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleRight:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleBottom:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleLeft:{nullable:true,check:[i,e,c,g],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[A,B,r]},right:{group:[q,C,o]},top:{group:[D,y,p]},bottom:{group:[z,w,x]},width:{group:[D,q,z,A],mode:F},style:{group:[y,C,w,B],mode:F},color:{group:[p,o,x,r],mode:F}},members:{__nr:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__nr;
},getMarkup:function(O){if(this.__nr){return this.__nr;
}var P=qx.theme.manager.Color.getInstance();
var Q={};
var S=this.getWidthTop();

if(S>0){Q[n]=S+f+this.getStyleTop()+a+P.resolve(this.getColorTop());
}var S=this.getWidthRight();

if(S>0){Q[l]=S+f+this.getStyleRight()+a+P.resolve(this.getColorRight());
}var S=this.getWidthBottom();

if(S>0){Q[v]=S+f+this.getStyleBottom()+a+P.resolve(this.getColorBottom());
}var S=this.getWidthLeft();

if(S>0){Q[k]=S+f+this.getStyleLeft()+a+P.resolve(this.getColorLeft());
}{};
Q.position=u;
Q.top=0;
Q.left=0;
var R=this._generateBackgroundMarkup(Q);
return this.__nr=R;
},resize:function(J,K,L){var N=this.getBackgroundImage()&&this.getBackgroundRepeat()==m;

if(N||qx.bom.client.Feature.CONTENT_BOX){var M=this.getInsets();
K-=M.left+M.right;
L-=M.top+M.bottom;
if(K<0){K=0;
}
if(L<0){L=0;
}}J.style.width=K+E;
J.style.height=L+E;
},tint:function(T,U){var V=qx.theme.manager.Color.getInstance();

if(U==null){U=this.getBackgroundColor();
}T.style.backgroundColor=V.resolve(U)||t;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__nr=null;
}});
})();
(function(){var o="Unidentified",n="Boolean",m="+",l="short",k="keydown",j="",h="Control",g="keypress",f="-",d="PageUp",V="Escape",U="qx.event.type.Data",T="_applyShortcut",S="PrintScreen",R="NumLock",Q="5",P="8",O="execute",N="Meta",M="0",v="2",w="This message will be made private.",t="Shift",u="You can only specify one non modifier key!",r="3",s="/",p="_applyEnabled",q="String",x="changeEnabled",y="*",E="qx.bom.Shortcut",D="6",G="4",F="1",I="Alt",H="Not a valid key name for a shortcut: ",A="PageDown",L="Whitespaces are not allowed within shortcuts",K="Delete",J="7",z="a",B="z",C="9";
qx.Class.define(E,{extend:qx.core.Object,construct:function(W){arguments.callee.base.call(this);
this.__ns={};
this.__nt=null;

if(W!=null){this.setShortcut(W);
}this.initEnabled();
},events:{"execute":U},properties:{enabled:{init:true,check:n,event:x,apply:p},shortcut:{check:q,apply:T,nullable:true},autoRepeat:{check:n,init:false}},members:{__ns:j,__nt:j,execute:function(b){this.fireDataEvent(O,b);
},__nu:function(event){if(this.getEnabled()&&this.__nw(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__nv:function(event){if(this.getEnabled()&&this.__nw(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(X,Y){if(X){qx.event.Registration.addListener(document.documentElement,k,this.__nu,this);
qx.event.Registration.addListener(document.documentElement,g,this.__nv,this);
}else{qx.event.Registration.removeListener(document.documentElement,k,this.__nu,this);
qx.event.Registration.removeListener(document.documentElement,g,this.__nv,this);
}},_applyShortcut:function(ba,bb){if(ba){if(ba.search(/[\s]+/)!=-1){var be=L;
this.error(be);
throw new Error(be);
}this.__ns={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__nt=null;
var bc;
var a=[];

while(ba.length>0&&bc!=-1){bc=ba.search(/[-+]+/);
a.push((ba.length==1||bc==-1)?ba:ba.substring(0,bc));
ba=ba.substring(bc+1);
}var bd=a.length;

for(var i=0;i<bd;i++){var bf=this.__ny(a[i]);

switch(bf){case h:case t:case N:case I:this.__ns[bf]=true;
break;
case o:var be=H+a[i];
this.error(be);
throw be;
default:if(this.__nt){var be=u;
this.error(be);
throw be;
}this.__nt=bf;
}}}return true;
},matchesKeyEvent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.__nw(e);
},__nw:function(e){var c=this.__nt;

if(!c){return ;
}if((!this.__ns.Shift&&e.isShiftPressed())||(this.__ns.Shift&&!e.isShiftPressed())||(!this.__ns.Control&&e.isCtrlPressed())||(this.__ns.Control&&!e.isCtrlPressed())||(!this.__ns.Meta&&e.isMetaPressed())||(this.__ns.Meta&&!e.isMetaPressed())||(!this.__ns.Alt&&e.isAltPressed())||(this.__ns.Alt&&!e.isAltPressed())){return false;
}
if(c==e.getKeyIdentifier()){return true;
}return false;
},__nx:{esc:V,ctrl:h,print:S,del:K,pageup:d,pagedown:A,numlock:R,numpad_0:M,numpad_1:F,numpad_2:v,numpad_3:r,numpad_4:G,numpad_5:Q,numpad_6:D,numpad_7:J,numpad_8:P,numpad_9:C,numpad_divide:s,numpad_multiply:y,numpad_minus:f,numpad_plus:m},__ny:function(bj){var bk=qx.event.handler.Keyboard;
var bl=o;

if(bk.isValidKeyIdentifier(bj)){return bj;
}
if(bj.length==1&&bj>=z&&bj<=B){return bj.toUpperCase();
}bj=bj.toLowerCase();
var bl=this.__nx[bj]||qx.lang.String.firstUp(bj);

if(bk.isValidKeyIdentifier(bl)){return bl;
}else{return o;
}},toString:function(){var bi=this.__nt;
var bh=[];

for(var bg in this.__ns){if(this.__ns[bg]){bh.push(qx.locale.Key.getKeyName(l,bg));
}}
if(bi){bh.push(qx.locale.Key.getKeyName(l,bi));
}return bh.join(m);
}},destruct:function(){this.setEnabled(false);
this.__ns=this.__nt=null;
}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var e="feedreader.view.Header",d="Feed Reader",c="app-header",b="qx.version",a="qooxdoo ";
qx.Class.define(e,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.HBox);
this.setAppearance(c);
var g=new qx.ui.basic.Label(d);
var f=new qx.ui.basic.Label(a+qx.core.Setting.get(b));
this.add(g);
this.add(new qx.ui.core.Spacer,{flex:1});
this.add(f);
}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(a,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:g,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var m="right",l="above",k="left",j="under",h="qx.ui.tree.SelectionManager";
qx.Class.define(h,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(o){var p=o.getBounds();

if(p){var top=this._getWidget().getItemTop(o);
return {top:top,bottom:top+p.height};
}},_isSelectable:function(v){return v instanceof qx.ui.tree.AbstractTreeItem&&v.isEnabled()&&v.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var b=this._getWidget();
var c=[];

if(b.getRoot()!=null){var a=b.getRoot().getItems(true,false,b.getHideRoot());

for(var i=0;i<a.length;i++){if(this._isSelectable(a[i])){c.push(a[i]);
}}}return c;
},_getSelectableRange:function(q,r){if(q===r){return [q];
}var s=this.getSelectables();
var t=s.indexOf(q);
var u=s.indexOf(r);

if(t<0||u<0){return [];
}
if(t<u){return s.slice(t,u+1);
}else{return s.slice(u,t+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var n=this.getSelectables();

if(n.length>0){return n[n.length-1];
}else{return null;
}},_getRelatedSelectable:function(d,e){var f=this._getWidget();
var g=null;

switch(e){case l:g=f.getPreviousSiblingOf(d,false);
break;
case j:g=f.getNextSiblingOf(d,false);
break;
case k:case m:break;
}
if(!g){return null;
}
if(this._isSelectable(g)){return g;
}else{return this._getRelatedSelectable(g,e);
}}}});
})();
(function(){var o="static",n="user",m="execute",l="loading",k="title",j="north",h="main",g="new",f="Surfin' Safari",d="changeModel",bw="__nM",bv="__nR",bu="selection[0].state",bt="Heise",bs="__nF",br="F1",bq="article",bp="partLoaded",bo="Control+A",bn="__nO",v="http://blogs.msdn.com/ie/rss.xml",w="__nJ",t="http://my.opera.com/desktopteam/xml/rss/blog/",u="settings",r="feedreader/images/loading22.gif",s="error",p="selection[0]",q="__nQ",D="change",E="http://blogs.msdn.com/jscript/rss.xml",Q="loaded",M="feeds",Y="__nK",T="__nP",bj="The Mozilla Blog",be="enabled",I="__nI",bm="http://webkit.org/blog/feed/",bl="separator-vertical",bk="http://feeds2.feedburner.com/qooxdoo/news/content",H="http://blog.mozilla.com/feed/",K="vertical",L="http://www.heise.de/newsticker/heise-atom.xml",O="__nT",R="state",U="JScript Team Blog",bb="Feeds",bg="http://feeds2.feedburner.com/ajaxian",x="Control+D",y="__nG",J="icon/22/actions/process-stop.png",X="selection[0].articles",W="white",V="IEBlog",bd="Ajaxian",bc="User Feeds",S="icon/22/apps/internet-feed-reader.png",ba="model",a="feedreader.Application",bf="http://daringfireball.net/index.xml",z="Control+P",A="__nL",N="__nN",b="Static Feeds",c="Control+R",G="qooxdoo News",B="selection[0].category",C="__nS",F="Opera Desktop Blog",P="feedreader.model.Feed",bi="Daring Fireball",bh="addfeed";
qx.Class.define(a,{extend:qx.application.Standalone,members:{__nF:null,__nG:null,__nH:null,__nI:null,__nJ:null,__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,__nP:null,__nQ:null,__nR:null,__nS:null,__nT:null,main:function(){arguments.callee.base.call(this);
{};
qx.io.PartLoader.getInstance().addListener(bp,function(e){this.debug("part loaded: "+e.getData().getName());
},this);
this._initializeCommands();
this._createLayout();
this._initializeModel();
this._setUpBinding();
this.__nI.getRoot().setOpen(true);
this.__nI.getRoot().getChildren()[0].setOpen(true);
this.__nI.getRoot().getChildren()[1].setOpen(true);
this.__nI.setHideRoot(true);
this.__nF.getSelection().push(this.__nT.getFeeds().getItem(0));
},finalize:function(){arguments.callee.base.call(this);
this.reload();
},_initializeModel:function(){this.__nR=new feedreader.model.FeedFolder(bb);
this.__nT=new feedreader.model.FeedFolder(this.tr(b));
this.__nR.getFeeds().push(this.__nT);
this.__nT.getFeeds().push(new feedreader.model.Feed(G,bk,o));
this.__nT.getFeeds().push(new feedreader.model.Feed(U,E,o));
this.__nT.getFeeds().push(new feedreader.model.Feed(bi,bf,o));
this.__nT.getFeeds().push(new feedreader.model.Feed(f,bm,o));
this.__nT.getFeeds().push(new feedreader.model.Feed(bd,bg,o));
this.__nS=new feedreader.model.FeedFolder(this.tr(bc));
this.__nR.getFeeds().push(this.__nS);
this.__nS.getFeeds().push(new feedreader.model.Feed(bt,L,n));
this.__nS.getFeeds().push(new feedreader.model.Feed(V,v,n));
this.__nS.getFeeds().push(new feedreader.model.Feed(bj,H,n));
this.__nS.getFeeds().push(new feedreader.model.Feed(F,t,n));
},_setUpBinding:function(){var bK={converter:this._state2iconConverter};
this.__nF=new qx.data.controller.Tree(this.__nR,this.__nI,M,k);
this.__nF.setIconOptions(bK);
this.__nF.setIconPath(R);
this.__nG=new qx.data.controller.List(null,this.__nL.getList(),k);
this.__nF.bind(X,this.__nG,ba);
this.__nG.bind(p,this.__nP,bq);
this.__nG.getSelection().addListener(D,this._listControllerChange,this);
this.__nG.addListener(d,this._treeControllerChange,this);
var bL={converter:this._state2loadingConverter};
this.__nF.bind(bu,this.__nL,l,bL);
bL={converter:this._category2enabledConverter};
this.__nF.bind(B,this.__nK.getRemoveButton(),be,bL);
},_category2enabledConverter:function(bQ){if(bQ==n){return true;
}return false;
},_state2iconConverter:function(bH){if(bH==g||bH==l){return r;
}else if(bH==Q){return S;
}else if(bH==s){return J;
}return null;
},_state2loadingConverter:function(bP){if(bP==g||bP==l){return true;
}return false;
},_listControllerChange:function(bM){var bN=this.__nF.getSelection().getItem(0);
var bO=this.__nG.getSelection().getItem(0);
if(bO!=undefined){bN.setSelectedArticle(bO);
}},_treeControllerChange:function(bR){var bS=this.__nF.getSelection().getItem(0);
if(bS!=null&&bS.classname==P&&bS.getSelectedArticle()!=null&&bS.getArticles().contains(bS.getSelectedArticle())){this.__nG.getSelection().push(bS.getSelectedArticle());
}else{this.__nL.getList().scrollToY(0);
}},_createLayout:function(){var bC=new qx.ui.layout.Dock();
bC.setSeparatorY(bl);
var bD=new qx.ui.container.Composite(bC);
this.getRoot().add(bD,{edge:0});
this.__nJ=new feedreader.view.Header();
bD.add(this.__nJ,{edge:j});
this.__nK=new feedreader.view.ToolBar(this);
bD.add(this.__nK,{edge:j});
this.__nM=new qx.ui.splitpane.Pane();
bD.add(this.__nM);
this.__nI=new qx.ui.tree.Tree();
this.__nI.setWidth(250);
this.__nI.setBackgroundColor(W);
this.__nM.add(this.__nI,0);
this.__nN=new qx.ui.splitpane.Pane(K);
this.__nN.setDecorator(null);
this.__nM.add(this.__nN,1);
this.__nL=new feedreader.view.List(this.__nR);
this.__nL.setHeight(200);
this.__nL.setDecorator(h);
this.__nN.add(this.__nL,0);
this.__nP=new feedreader.view.Article();
this.__nP.setDecorator(h);
this.__nN.add(this.__nP,1);
},_initializeCommands:function(){var bI={};
bI.reload=new qx.ui.core.Command(c);
bI.reload.addListener(m,this.reload,this);
bI.about=new qx.ui.core.Command(br);
bI.about.addListener(m,this.showAbout,this);
bI.preferences=new qx.ui.core.Command(z);
bI.preferences.addListener(m,this.showPreferences,this);
bI.addFeed=new qx.ui.core.Command(bo);
bI.addFeed.addListener(m,this.showAddFeed,this);
bI.removeFeed=new qx.ui.core.Command(x);
bI.removeFeed.addListener(m,this.removeFeed,this);
this.__nH=bI;
},getCommand:function(bG){return this.__nH[bG];
},addFeed:function(bx,by,bz){var bA=new feedreader.model.Feed(bx,by,bz);
this.__nS.getFeeds().push(bA);
var bB=feedreader.io.FeedLoader.getInstance();
bB.load(bA);
},removeFeed:function(){var bE=this.__nF.getSelection().getItem(0);
if(bE&&bE.getCategory&&bE.getCategory()!==o){var bF=this.__nS.getFeeds();
for(var i=0;i<bF.length;i++){if(bE===bF.getItem(i)){bF.splice(i,1);
return;
}}}},reload:function(){var bJ=feedreader.io.FeedLoader.getInstance();
bJ.loadAll(this.__nR);
},showPreferences:function(){qx.io.PartLoader.require([u],function(){if(!this.__nO){this.__nO=new feedreader.view.PreferenceWindow();
this.getRoot().add(this.__nO);
this.showPreferences();
}this.__nO.center();
this.__nO.open();
},this);
},showAbout:function(){alert(this.tr("FeedReader (qooxdoo powered)"));
},showAddFeed:function(){qx.io.PartLoader.require([bh],function(){if(!this.__nQ){this.__nQ=new feedreader.view.AddFeedWindow(this);
this.getRoot().add(this.__nQ);
}this.__nQ.center();
this.__nQ.open();
},this);
}},destruct:function(){this.__nH=null;
this._disposeObjects(Y,A,T,I,bv,bw,N,w,O,C,bs,y,bn,q);
}});
})();
(function(){var t="horizontal",s="px",r="scroll",q="vertical",p="-1px",o="qx.client",n="0",m="hidden",l="mousedown",k="qx.ui.core.scroll.NativeScrollBar",I="PositiveNumber",H="Integer",G="__nV",F="mousemove",E="_applyMaximum",D="_applyOrientation",C="appear",B="opera",A="PositiveInteger",z="mshtml",x="mouseup",y="Number",v="_applyPosition",w="scrollbar",u="native";
qx.Class.define(k,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(K){arguments.callee.base.call(this);
this.addState(u);
this.getContentElement().addListener(r,this._onScroll,this);
this.addListener(l,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);
this.addListener(F,this._stopPropagation,this);

if(qx.core.Variant.isSet(o,B)){this.addListener(C,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(K!=null){this.setOrientation(K);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:w},orientation:{check:[t,q],init:t,apply:D},maximum:{check:A,apply:E,init:100},position:{check:y,init:0,apply:v,event:r},singleStep:{check:H,init:20},knobFactor:{check:I,nullable:true}},members:{__nU:null,__nV:null,_getScrollPaneElement:function(){if(!this.__nV){this.__nV=new qx.html.Element();
}return this.__nV;
},renderLayout:function(g,top,h,i){var j=arguments.callee.base.call(this,g,top,h,i);
this._updateScrollBar();
return j;
},_getContentHint:function(){var M=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__nU?100:M,maxWidth:this.__nU?null:M,minWidth:this.__nU?null:M,height:this.__nU?M:100,maxHeight:this.__nU?M:null,minHeight:this.__nU?M:null};
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);
this._updateScrollBar();
},_applyMaximum:function(J){this._updateScrollBar();
},_applyPosition:function(T){var content=this.getContentElement();

if(this.__nU){content.scrollToX(T);
}else{content.scrollToY(T);
}},_applyOrientation:function(c,d){var f=this.__nU=c===t;
this.set({allowGrowX:f,allowShrinkX:f,allowGrowY:!f,allowShrinkY:!f});

if(f){this.replaceState(q,t);
}else{this.replaceState(t,q);
}this.getContentElement().setStyles({overflowX:f?r:m,overflowY:f?m:r});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var Q=this.__nU;
var R=this.getBounds();

if(!R){return;
}
if(this.isEnabled()){var S=Q?R.width:R.height;
var P=this.getMaximum()+S;
}else{P=0;
}if(qx.core.Variant.isSet(o,z)){var R=this.getBounds();
this.getContentElement().setStyles({left:Q?n:p,top:Q?p:n,width:(Q?R.width:R.width+1)+s,height:(Q?R.height+1:R.height)+s});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(Q?P:1)+s,height:(Q?1:P)+s});
this.scrollTo(this.getPosition());
},scrollTo:function(L){this.setPosition(Math.max(0,Math.min(this.getMaximum(),L)));
},scrollBy:function(U){this.scrollTo(this.getPosition()+U);
},scrollBySteps:function(V){var W=this.getSingleStep();
this.scrollBy(V*W);
},_onScroll:function(e){var O=this.getContentElement();
var N=this.__nU?O.getScrollX():O.getScrollY();
this.setPosition(N);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(G);
}});
})();
(function(){var bv="change",bu="ReverseBindingId",bt="BindingId",bs="",br="]",bq="model[",bp="String",bo=".",bn="changeModel",bm="_applyLabelOptions",bI="_applyLabelPath",bH="changeTarget",bG="changeLength",bF="_applyModel",bE="icon",bD="qx.data.controller.List",bC="_applyIconPath",bB="_applyDelegate",bA="changeDelegate",bz="_applyTarget",bx="qx.data.IListData",by="label",bw="_applyIconOptions";
qx.Class.define(bD,{extend:qx.core.Object,include:qx.data.controller.MSelection,construct:function(bW,bX,bY){arguments.callee.base.call(this);
this.__nW=[];
this.__nX=[];
this.__nY=[];
this.__oa={};

if(bY!=null){this.setLabelPath(bY);
}
if(bW!=null){this.setModel(bW);
}
if(bX!=null){this.setTarget(bX);
}},properties:{model:{check:bx,apply:bF,event:bn,nullable:true},target:{apply:bz,event:bH,nullable:true,init:null},labelPath:{check:bp,apply:bI,nullable:true},iconPath:{check:bp,apply:bC,nullable:true},labelOptions:{apply:bm,nullable:true},iconOptions:{apply:bw,nullable:true},delegate:{apply:bB,event:bA,init:null,nullable:true}},members:{__ob:null,__oc:null,__nW:null,__oa:null,__nX:null,__nY:null,update:function(){this.__oe();
this.__oi();
this._updateSelection();
},_applyDelegate:function(bJ,bK){this._setConfigureItem(bJ,bK);
this._setFilter(bJ,bK);
this._setCreateItem(bJ,bK);
this._setBindItem(bJ,bK);
},_applyIconOptions:function(a,b){this.__oi();
},_applyLabelOptions:function(K,L){this.__oi();
},_applyIconPath:function(f,g){this.__oi();
},_applyLabelPath:function(D,E){this.__oi();
},_applyModel:function(bQ,bR){if(bR!=undefined){if(this.__ob!=undefined){bR.removeListenerById(this.__ob);
}
if(this.__oc!=undefined){bR.removeListenerById(this.__oc);
}}if(this.getSelection()!=undefined&&this.getSelection().length>0){this.getSelection().splice(0,this.getSelection().length);
}if(bQ!=null){this.__ob=bQ.addListener(bG,this.__oe,this);
this.__oc=bQ.addListener(bv,this.__od,this);
this.__ok();
this.__oe();
if(this.getTarget()!=null){var bT=this.getModel();
var bU=this.getTarget().getChildren();

for(var i=0,l=this.__nW.length;i<l;i++){var bV=bT.getItem(this.__ol(i));
var bS=bU[i];
bS.setModel(bV);
}}this._changeTargetSelection();
}},_applyTarget:function(bL,bM){this._addChangeTargetListener(bL,bM);
if(bM!=undefined){bM.removeAll();
this.removeAllBindings();
}
if(bL!=null){if(this.getModel()!=null){for(var i=0;i<this.__nW.length;i++){this.__og(this.__ol(i));
}}}},__od:function(){for(var i=this.getSelection().length-1;i>=0;i--){if(!this.getModel().contains(this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}qx.ui.core.queue.Widget.add(this);
if(this.__nW.length!=this.getModel().getLength()){this.update();
}},syncWidget:function(){this._updateSelection();
},__oe:function(){if(this.getTarget()==null){return;
}this.__ok();
var y=this.__nW.length;
var x=this.getTarget().getChildren().length;
if(y>x){for(var j=x;j<y;j++){this.__og(this.__ol(j));
}}else if(y<x){for(var j=x;j>y;j--){this.__oh();
}}},__of:function(){var U=this.getModel();
if(U!=null){U.removeListenerById(this.__oc);
this.__oc=U.addListener(bv,this.__od,this);
}},_createItem:function(){var N=this.getDelegate();
if(N!=null&&N.createItem!=null){var M=N.createItem();
}else{var M=new qx.ui.form.ListItem();
}if(N!=null&&N.configureItem!=null){N.configureItem(M);
}return M;
},__og:function(t){var u=this._createItem();
u.setModel(this.getModel().getItem(t)||null);
this._bindListItem(u,t);
this.getTarget().add(u);
},__oh:function(){this._startSelectionModification();
var bO=this.getTarget().getChildren();
var bN=bO.length-1;
var bP=bO[bN];
this._removeBindingsFrom(bP);
this.getTarget().removeAt(bN);
bP.destroy();
this._endSelectionModification();
},getVisibleModels:function(){var c=[];
var d=this.getTarget();

if(d!=null){var e=d.getChildren();

for(var i=0;i<e.length;i++){c.push(e[i].getModel());
}}return new qx.data.Array(c);
},_bindListItem:function(H,I){var J=this.getDelegate();
if(J!=null&&J.bindItem!=null){J.bindItem(this,H,I);
}else{this.bindDefaultProperties(H,I);
}},bindDefaultProperties:function(F,G){this.bindProperty(this.getLabelPath(),by,this.getLabelOptions(),F,G);
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),bE,this.getIconOptions(),F,G);
}},bindProperty:function(Y,ba,bb,bc,bd){bc.setModel(this.getModel().getItem(bd));
if(bb!=null){var bb=qx.lang.Object.clone(bb);
this.__oa[ba]=bb.onUpdate;
delete bb.onUpdate;
}else{bb={};
this.__oa[ba]=null;
}bb.onUpdate=qx.lang.Function.bind(this._onBindingSet,this,bd);
var be=bq+bd+br;

if(Y!=null&&Y!=bs){be+=bo+Y;
}var bf=this.bind(be,bc,ba,bb);
bc.setUserData(ba+bt,bf);
if(!qx.lang.Array.contains(this.__nX,ba)){this.__nX.push(ba);
}},bindPropertyReverse:function(k,m,n,o,p){var q=bq+p+br;

if(k!=null&&k!=bs){q+=bo+k;
}var r=o.bind(m,this,q,n);
o.setUserData(k+bu,r);
if(!qx.lang.Array.contains(this.__nY,k)){this.__nY.push(k);
}},_onBindingSet:function(z,A,B){if(this.getModel()==null||this._inSelectionModification()){return;
}for(var i=0;i<this.__nX.length;i++){if(this.__oa[this.__nX[i]]!=null){this.__oa[this.__nX[i]]();
}}var C=this.getModel().getItem(z);
B.setModel(C==undefined?null:C);
},_removeBindingsFrom:function(ca){for(var i=0;i<this.__nX.length;i++){var cb=ca.getUserData(this.__nX[i]+bt);

if(cb!=null){this.removeBinding(cb);
}}for(var i=0;i<this.__nY.length;i++){var cb=ca.getUserData(this.__nY[i]+bu);

if(cb!=null){ca.removeBinding(cb);
}}},__oi:function(){if(this.getTarget()==null||this.getModel()==null){return;
}var s=this.getTarget().getChildren();
for(var i=0;i<s.length;i++){this._removeBindingsFrom(s[i]);
this._bindListItem(s[i],this.__ol(i));
}this.__of();
},_setConfigureItem:function(bg,bh){if(bg!=null&&bg.configureItem!=null&&this.getTarget()!=null){var bi=this.getTarget().getChildren();

for(var i=0;i<bi.length;i++){bg.configureItem(bi[i]);
}}},_setBindItem:function(v,w){if(v!=null&&v.bindItem!=null){if(w!=null&&w.bindItem!=null&&v.bindItem==w.bindItem){return;
}this.__oi();
}},_setCreateItem:function(bj,bk){if(this.getTarget()==null||this.getModel()==null||bj==null||bj.createItem==null){return;
}this._startSelectionModification();
var bl=this.getTarget().getChildren();

for(var i=0,l=bl.length;i<l;i++){this._removeBindingsFrom(bl[i]);
}this.getTarget().removeAll();
this.update();
this._endSelectionModification();
this._updateSelection();
},_setFilter:function(O,P){if((O==null||O.filter==null)&&(P!=null&&P.filter!=null)){this.__oj();
}if(this.getTarget()==null||this.getModel()==null||O==null||O.filter==null){return;
}this._startSelectionModification();
var T=this.getTarget().getChildren();

for(var i=0,l=T.length;i<l;i++){this._removeBindingsFrom(T[i]);
}var R=this.__nW;
this.__ok();
if(R.length>this.__nW.length){for(var j=R.length;j>this.__nW.length;j--){this.getTarget().removeAt(j-1);
}}else if(R.length<this.__nW.length){for(var j=R.length;j<this.__nW.length;j++){var S=this._createItem();
this.getTarget().add(S);
}}var Q=this.getTarget().getChildren();

for(var i=0;i<Q.length;i++){this._bindListItem(Q[i],this.__ol(i));
}this.__of();
this._endSelectionModification();
this._updateSelection();
},__oj:function(){this.__ok();
this.__oe();
this.__oi();
qx.ui.core.queue.Widget.add(this);
},__ok:function(){var W=this.getModel();

if(W==null){return;
}var X=this.getDelegate();

if(X!=null){var V=X.filter;
}this.__nW=[];

for(var i=0;i<W.getLength();i++){if(V==null||V(W.getItem(i))){this.__nW.push(i);
}}},__ol:function(h){return this.__nW[h];
}},destruct:function(){this.__nW=this.__oa=this.__nX=null;
this.__nY=null;
}});
})();
(function(){var C="qx.client",B="head",A="text/css",z="stylesheet",y="}",x='@import "',w="{",v='";',u="qx.bom.Stylesheet",t="link",s="style";
qx.Class.define(u,{statics:{includeFile:function(O,P){if(!P){P=document;
}var Q=P.createElement(t);
Q.type=A;
Q.rel=z;
Q.href=qx.util.ResourceManager.getInstance().toUri(O);
var R=P.getElementsByTagName(B)[0];
R.appendChild(Q);
},createElement:qx.core.Variant.select(C,{"mshtml":function(D){var E=document.createStyleSheet();

if(D){E.cssText=D;
}return E;
},"default":function(q){var r=document.createElement(s);
r.type=A;

if(q){r.appendChild(document.createTextNode(q));
}document.getElementsByTagName(B)[0].appendChild(r);
return r.sheet;
}}),addRule:qx.core.Variant.select(C,{"mshtml":function(F,G,H){F.addRule(G,H);
},"default":function(W,X,Y){W.insertRule(X+w+Y+y,W.cssRules.length);
}}),removeRule:qx.core.Variant.select(C,{"mshtml":function(S,T){var U=S.rules;
var V=U.length;

for(var i=V-1;i>=0;--i){if(U[i].selectorText==T){S.removeRule(i);
}}},"default":function(ba,bb){var bc=ba.cssRules;
var bd=bc.length;

for(var i=bd-1;i>=0;--i){if(bc[i].selectorText==bb){ba.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(C,{"mshtml":function(be){var bf=be.rules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){be.removeRule(i);
}},"default":function(n){var o=n.cssRules;
var p=o.length;

for(var i=p-1;i>=0;i--){n.deleteRule(i);
}}}),addImport:qx.core.Variant.select(C,{"mshtml":function(a,b){a.addImport(b);
},"default":function(g,h){g.insertRule(x+h+v,g.cssRules.length);
}}),removeImport:qx.core.Variant.select(C,{"mshtml":function(c,d){var e=c.imports;
var f=e.length;

for(var i=f-1;i>=0;i--){if(e[i].href==d){c.removeImport(i);
}}},"default":function(j,k){var l=j.cssRules;
var m=l.length;

for(var i=m-1;i>=0;i--){if(l[i].href==k){j.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(C,{"mshtml":function(L){var M=L.imports;
var N=M.length;

for(var i=N-1;i>=0;i--){L.removeImport(i);
}},"default":function(I){var J=I.cssRules;
var K=J.length;

for(var i=K-1;i>=0;i--){if(J[i].type==J[i].IMPORT_RULE){I.deleteRule(i);
}}}})}});
})();
(function(){var e="Integer",d="interval",c="__om",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__om=new qx.event.Timer(this.getInterval());
this.__om.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__om:null,__on:null,start:function(){this.__om.setInterval(this.getFirstInterval());
this.__om.start();
},stop:function(){this.__om.stop();
this.__on=null;
},_onInterval:function(){this.__om.stop();

if(this.__on==null){this.__on=this.getInterval();
}this.__on=Math.max(this.getMinimum(),this.__on-this.getDecrease());
this.__om.setInterval(this.__on);
this.__om.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
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
}this.addListener(o,this.__oo,this);
this.addListener(p,this.__oo,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__oo:function(){var w=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,w,true);
}}});
})();
(function(){var p="both",o="qx.ui.menu.Menu",n="_applySpacing",m="icon",k="label",j="changeShow",h="Integer",g="qx.ui.toolbar.ToolBar",f="toolbar",e="changeOpenMenu";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:f},openMenu:{check:o,event:e,nullable:true},show:{init:p,check:[p,k,m],inheritable:true,event:j},spacing:{nullable:true,check:h,themeable:true,apply:n}},members:{__oM:false,_setAllowMenuOpenHover:function(q){this.__oM=q;
},_isAllowMenuOpenHover:function(){return this.__oM;
},_applySpacing:function(a,b){var c=this._getLayout();
a==null?c.resetSpacing():c.setSpacing(a);
},addSpacer:function(){var d=new qx.ui.core.Spacer;
this._add(d,{flex:1});
return d;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var s=this.getChildren();
var r=[];
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];

if(t instanceof qx.ui.menubar.Button){r.push(t);
}else if(t instanceof qx.ui.toolbar.Part){r.push.apply(r,t.getMenuButtons());
}}return r;
}}});
})();
(function(){var u="reload",t="__op",s="Add feed",r="removeFeed",q="Open preferences window.",p="Reload",o="Reload the feeds. (%1)",n="icon/22/actions/dialog-cancel.png",m="icon/22/actions/view-refresh.png",l=")",e="Remove feed",k="Preferences",h="icon/22/actions/dialog-ok.png",c="preferences",b="icon/22/apps/preferences-theme.png",g="icon/22/actions/help-about.png",f="feedreader.view.ToolBar",i="about",a="Help",j="addFeed",d="(";
qx.Class.define(f,{extend:qx.ui.toolbar.ToolBar,construct:function(v){arguments.callee.base.call(this);
var C=new qx.ui.toolbar.Part;
this.add(C);
var D=new qx.ui.toolbar.Button(this.tr(s),h);
D.setCommand(v.getCommand(j));
C.add(D);
this.__op=new qx.ui.toolbar.Button(this.tr(e),n);
this.__op.setCommand(v.getCommand(r));
this.__op.setEnabled(false);
C.add(this.__op);
C.addSeparator();
var y=new qx.ui.toolbar.Button(this.tr(p),m);
var z=v.getCommand(u);
y.setCommand(z);
y.setToolTipText(this.tr(o,z.toString()));
C.add(y);
C.addSeparator();
var x=new qx.ui.toolbar.Button(this.tr(k),b);
x.setCommand(v.getCommand(c));
x.setToolTipText(this.tr(q));
C.add(x);
this.addSpacer();
var B=new qx.ui.toolbar.Part;
this.add(B);
var A=new qx.ui.toolbar.Button(this.tr(a),g);
var w=v.getCommand(i);
A.setCommand(w);
A.setToolTipText(d+w.toString()+l);
B.add(A);
},members:{__op:null,getRemoveButton:function(){return this.__op;
}},destruct:function(){this._disposeObjects(t);
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
(function(){var r="String",q="execute",p="qx.ui.menu.Menu",o="_shortcut",n="changeEnabled",m="changeToolTipText",l="Boolean",k="qx.ui.core.Command",j="changeLabel",i="changeMenu",f="changeIcon",h="changeValue",g="_applyShortcut",e="_applyEnabled",d="qx.event.type.Data";
qx.Class.define(k,{extend:qx.core.Object,construct:function(s){arguments.callee.base.call(this);
this._shortcut=new qx.bom.Shortcut(s);
this._shortcut.addListener(q,this.execute,this);
},events:{"execute":d},properties:{enabled:{init:true,check:l,event:n,apply:e},shortcut:{check:r,apply:g,nullable:true},label:{check:r,nullable:true,event:j},icon:{check:r,nullable:true,event:f},toolTipText:{check:r,nullable:true,event:m},value:{nullable:true,event:h},menu:{check:p,nullable:true,event:i}},members:{_shortcut:null,_applyEnabled:function(a){this._shortcut.setEnabled(a);
},_applyShortcut:function(b){this._shortcut.setShortcut(b);
},execute:function(c){this.fireDataEvent(q,c);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(o);
}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var t="atom",s="Integer",r="String",q="_applyRich",p="qx.ui.tooltip.ToolTip",o="_applyIcon",n="tooltip",m="qx.ui.core.Widget",l="mouseover",k="Boolean",j="_applyLabel";
qx.Class.define(p,{extend:qx.ui.popup.Popup,construct:function(x,y){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(t);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(l,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:n},showTimeout:{check:s,init:700,themeable:true},hideTimeout:{check:s,init:4000,themeable:true},label:{check:r,nullable:true,apply:j},icon:{check:r,nullable:true,apply:o,themeable:true},rich:{check:k,init:false,apply:q},opener:{check:m,nullable:true}},members:{_createChildControlImpl:function(h){var i;

switch(h){case t:i=new qx.ui.basic.Atom;
this._add(i);
break;
}return i||arguments.callee.base.call(this,h);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(d,f){var g=this.getChildControl(t);
d==null?g.resetIcon:g.setIcon(d);
},_applyLabel:function(u,v){var w=this.getChildControl(t);
u==null?w.resetLabel():w.setLabel(u);
},_applyRich:function(a,b){var c=this.getChildControl(t);
c.setRich(a);
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__oq:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__oq=[0,0,0,0];
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
},getColumnSizes:function(){return this.__oq||null;
}},destruct:function(){this.__oq=null;
}});
})();
(function(){var o="_applyStyle",n="Color",m="px",l="solid",k="dotted",j="double",i="dashed",h="",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(C,D,E){arguments.callee.base.call(this);
if(C!=null){this.setWidth(C);
}
if(D!=null){this.setStyle(D);
}
if(E!=null){this.setColor(E);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[l,k,i,j],init:l,apply:o},color:{nullable:true,check:n,apply:o},backgroundColor:{check:n,nullable:true,apply:o}},members:{__py:null,_getDefaultInsets:function(){var t=this.getWidth();
return {top:t,right:t,bottom:t,left:t};
},_isInitialized:function(){return !!this.__py;
},getMarkup:function(){if(this.__py){return this.__py;
}var p={position:a,top:0,left:0};
var q=this.getWidth();
{};
var s=qx.theme.manager.Color.getInstance();
p.border=q+c+this.getStyle()+e+s.resolve(this.getColor());
var r=this._generateBackgroundMarkup(p);
return this.__py=r;
},resize:function(x,y,z){var B=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(B||qx.bom.client.Feature.CONTENT_BOX){var A=this.getWidth()*2;
y-=A;
z-=A;
if(y<0){y=0;
}
if(z<0){z=0;
}}x.style.width=y+m;
x.style.height=z+m;
},tint:function(u,v){var w=qx.theme.manager.Color.getInstance();

if(v==null){v=this.getBackgroundColor();
}u.style.backgroundColor=w.resolve(v)||h;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__py=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(P,Q,R){arguments.callee.base.call(this);
if(P!=null){this.setOuterColor(P);
}
if(Q!=null){this.setInnerColor(Q);
}
if(R!=null){this.setInnerOpacity(R);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__oY:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__oY;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__oY){return this.__oY;
}var K=qx.theme.manager.Color.getInstance();
var L=[];
var O=d+K.resolve(this.getOuterColor())+b;
var N=d+K.resolve(this.getInnerColor())+b;
L.push(k);
L.push(f);
L.push(e,O);
L.push(qx.bom.element.Opacity.compile(0.35));
L.push(i);
L.push(n);
L.push(q,O);
L.push(r,O);
L.push(i);
L.push(f);
L.push(m);
L.push(p,O);
L.push(s,O);
L.push(i);
var M={position:l,top:g,left:g};
L.push(this._generateBackgroundMarkup(M));
L.push(t);
L.push(e,N);
L.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
L.push(i);
L.push(v);
return this.__oY=L.join(c);
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
}},destruct:function(){this.__oY=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var w="focusout",v="interval",u="mouseover",t="mouseout",s="mousemove",r="__ou",q="widget",p="qx.ui.tooltip.ToolTip",o="Boolean",n="_applyCurrent",k="qx.ui.tooltip.Manager",m="__os",l="tooltip-error",j="singleton",i="__or";
qx.Class.define(k,{type:j,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,u,this.__oB,this,true);
this.__or=new qx.event.Timer();
this.__or.addListener(v,this.__oy,this);
this.__os=new qx.event.Timer();
this.__os.addListener(v,this.__oz,this);
this.__ot={left:0,top:0};
},properties:{current:{check:p,nullable:true,apply:n},showInvalidTooltips:{check:o,init:true}},members:{__ot:null,__os:null,__or:null,__ou:null,__ov:null,__ow:function(){if(!this.__ou){this.__ou=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ou;
},__ox:function(){if(!this.__ov){this.__ov=new qx.ui.tooltip.ToolTip().set({appearance:l});
this.__ov.syncAppearance();
}return this.__ov;
},_applyCurrent:function(a,b){if(b&&qx.ui.core.Widget.contains(b,a)){return;
}if(b){if(!b.isDisposed()){b.exclude();
}this.__or.stop();
this.__os.stop();
}var d=qx.event.Registration;
var c=document.body;
if(a){this.__or.startWith(a.getShowTimeout());
d.addListener(c,t,this.__oC,this,true);
d.addListener(c,w,this.__oD,this,true);
d.addListener(c,s,this.__oA,this,true);
}else{d.removeListener(c,t,this.__oC,this,true);
d.removeListener(c,w,this.__oD,this,true);
d.removeListener(c,s,this.__oA,this,true);
}},__oy:function(e){var z=this.getCurrent();

if(z&&!z.isDisposed()){this.__os.startWith(z.getHideTimeout());

if(z.getPlaceMethod()==q){z.placeToWidget(z.getOpener());
}else{z.placeToPoint(this.__ot);
}z.show();
}this.__or.stop();
},__oz:function(e){var A=this.getCurrent();

if(A&&!A.isDisposed()){A.exclude();
}this.__os.stop();
this.resetCurrent();
},__oA:function(e){var G=this.__ot;
G.left=e.getDocumentLeft();
G.top=e.getDocumentTop();
},__oB:function(e){var D=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!D){return;
}var E;
while(D!=null){var E=D.getToolTip();
var F=D.getToolTipText()||null;
var C=D.getToolTipIcon()||null;

if(qx.Class.hasInterface(D.constructor,qx.ui.form.IForm)&&!D.isValid()){var B=D.getInvalidMessage();
}
if(E||F||C||B){break;
}D=D.getLayoutParent();
}
if(!D){return;
}
if(D.isBlockToolTip()){return;
}if(B&&D.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var E=this.__ox().set({label:B});
}else if(!E){var E=this.__ow().set({label:F,icon:C});
}this.setCurrent(E);
E.setOpener(D);
},__oC:function(e){var f=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!f){return;
}var g=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!g){return;
}var h=this.getCurrent();
if(h&&(g==h||qx.ui.core.Widget.contains(h,g))){return;
}if(g&&f&&qx.ui.core.Widget.contains(f,g)){return;
}if(h&&!g){this.setCurrent(null);
}else{this.resetCurrent();
}},__oD:function(e){var x=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!x){return;
}var y=this.getCurrent();
if(y&&y==x.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,u,this.__oB,this,true);
this._disposeObjects(i,m,r);
this.__ot=null;
}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(c){},parse:function(b){}}});
})();
(function(){var ci="(\\d\\d?)",ch="format",cg="",cf="abbreviated",ce="wide",cd="(",cc=")",cb="|",ca="stand-alone",bY="wildcard",bN="default",bM="literal",bL="'",bK="hour",bJ="(\\d\\d?\\d?)",bI="ms",bH="narrow",bG="-",bF="quoted_literal",bE='a',cp="HH:mm:ss",cq="+",cn="HHmmss",co="long",cl='z',cm="0",cj="sec",ck="day",cr='Z',cs=" ",bR="min",bQ="mm",bT="(\\d+)",bS="h",bV="KK",bU='L',bX="Z",bW="(\\d\\d+)",bP="EEEE",bO="^",F=":",G='y',H="K",I="a",J="([\\+\\-]\\d\\d:?\\d\\d)",K="GMT",L="dd",M="qx.util.format.DateFormat",N="yyy",O="H",cw="YYYY",cv="y",cu="HH",ct="EE",cA='h',cz="S",cy='s',cx='A',cC="yyyyyy",cB="kk",bo="ss",bp='H',bm='S',bn="MMMM",bs='c',bt="d",bq="([a-zA-Z]+)",br='k',bk="m",bl='Y',W='D',V="yyyyy",Y='K',X="hh",S="SSS",R="MM",U="yy",T="(\\d\\d\\d\\d\\d\\d+)",Q="yyyy-MM-dd HH:mm:ss",P="(\\d\\d\\d\\d\\d+)",by="short",bz='d',bA="unkown",bB='m',bu="(\\d\\d\\d\\d)",bv="(\\d\\d\\d+)",bw="k",bx='M',bC="(\\d\\d\\d\\d+)",bD="SS",bh="MMM",bg="s",bf="M",be='w',bd="EEE",bc="$",bb="?",ba='E',bj="z",bi="yyyy";
qx.Class.define(M,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(eb,ec){arguments.callee.base.call(this);

if(!ec){this.__pz=qx.locale.Manager.getInstance().getLocale();
}else{this.__pz=ec;
}
if(eb!=null){this.__pA=eb.toString();
}else{this.__pA=qx.locale.Date.getDateFormat(co,this.__pz)+cs+qx.locale.Date.getDateTimeFormat(cn,cp,this.__pz);
}},statics:{getDateTimeInstance:function(){var d=qx.util.format.DateFormat;
var c=qx.locale.Date.getDateFormat(co)+cs+qx.locale.Date.getDateTimeFormat(cn,cp);

if(d._dateInstance==null||d._dateInstance.__pA!=c){d._dateTimeInstance=new d();
}return d._dateTimeInstance;
},getDateInstance:function(){var E=qx.util.format.DateFormat;
var D=qx.locale.Date.getDateFormat(by)+cg;

if(E._dateInstance==null||E._dateInstance.__pA!=D){E._dateInstance=new E(D);
}return E._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:Q,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__pz:null,__pA:null,__pB:null,__pC:null,__pD:null,__pE:function(cF,cG){var cH=cg+cF;

while(cH.length<cG){cH=cm+cH;
}return cH;
},__pF:function(y){var z=new Date(y.getTime());
var A=z.getDate();

while(z.getMonth()!=0){z.setDate(-1);
A+=z.getDate()+1;
}return A;
},__pG:function(cK){return new Date(cK.getTime()+(3-((cK.getDay()+6)%7))*86400000);
},__pH:function(ds){var du=this.__pG(ds);
var dv=du.getFullYear();
var dt=this.__pG(new Date(dv,0,4));
return Math.floor(1.5+(du.getTime()-dt.getTime())/86400000/7);
},format:function(dw){if(dw==null){return null;
}var dC=qx.util.format.DateFormat;
var dD=this.__pz;
var dN=dw.getFullYear();
var dH=dw.getMonth();
var dP=dw.getDate();
var dx=dw.getDay();
var dI=dw.getHours();
var dE=dw.getMinutes();
var dJ=dw.getSeconds();
var dL=dw.getMilliseconds();
var dO=dw.getTimezoneOffset();
var dA=dO>0?1:-1;
var dy=Math.floor(Math.abs(dO)/60);
var dF=Math.abs(dO)%60;
this.__pI();
var dM=cg;

for(var i=0;i<this.__pD.length;i++){var dK=this.__pD[i];

if(dK.type==bM){dM+=dK.text;
}else{var dB=dK.character;
var dG=dK.size;
var dz=bb;

switch(dB){case G:case bl:if(dG==2){dz=this.__pE(dN%100,2);
}else{dz=dN+cg;

if(dG>dz.length){for(var i=dz.length;i<dG;i++){dz=cm+dz;
}}}break;
case W:dz=this.__pE(this.__pF(dw),dG);
break;
case bz:dz=this.__pE(dP,dG);
break;
case be:dz=this.__pE(this.__pH(dw),dG);
break;
case ba:if(dG==2){dz=qx.locale.Date.getDayName(bH,dx,dD,ch);
}else if(dG==3){dz=qx.locale.Date.getDayName(cf,dx,dD,ch);
}else if(dG==4){dz=qx.locale.Date.getDayName(ce,dx,dD,ch);
}break;
case bs:if(dG==2){dz=qx.locale.Date.getDayName(bH,dx,dD,ca);
}else if(dG==3){dz=qx.locale.Date.getDayName(cf,dx,dD,ca);
}else if(dG==4){dz=qx.locale.Date.getDayName(ce,dx,dD,ca);
}break;
case bx:if(dG==1||dG==2){dz=this.__pE(dH+1,dG);
}else if(dG==3){dz=qx.locale.Date.getMonthName(cf,dH,dD,ch);
}else if(dG==4){dz=qx.locale.Date.getMonthName(ce,dH,dD,ch);
}break;
case bU:if(dG==1||dG==2){dz=this.__pE(dH+1,dG);
}else if(dG==3){dz=qx.locale.Date.getMonthName(cf,dH,dD,ca);
}else if(dG==4){dz=qx.locale.Date.getMonthName(ce,dH,dD,ca);
}break;
case bE:dz=(dI<12)?qx.locale.Date.getAmMarker(dD):qx.locale.Date.getPmMarker(dD);
break;
case bp:dz=this.__pE(dI,dG);
break;
case br:dz=this.__pE((dI==0)?24:dI,dG);
break;
case Y:dz=this.__pE(dI%12,dG);
break;
case cA:dz=this.__pE(((dI%12)==0)?12:(dI%12),dG);
break;
case bB:dz=this.__pE(dE,dG);
break;
case cy:dz=this.__pE(dJ,dG);
break;
case bm:dz=this.__pE(dL,dG);
break;
case cl:if(dG==1){dz=K+((dA>0)?bG:cq)+this.__pE(Math.abs(dy))+F+this.__pE(dF,2);
}else if(dG==2){dz=dC.MEDIUM_TIMEZONE_NAMES[dy];
}else if(dG==3){dz=dC.FULL_TIMEZONE_NAMES[dy];
}break;
case cr:dz=((dA>0)?bG:cq)+this.__pE(Math.abs(dy),2)+this.__pE(dF,2);
break;
}dM+=dz;
}}return dM;
},parse:function(h){this.__pJ();
var o=this.__pB.regex.exec(h);

if(o==null){throw new Error("Date string '"+h+"' does not match the date format: "+this.__pA);
}var j={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var k=1;

for(var i=0;i<this.__pB.usedRules.length;i++){var m=this.__pB.usedRules[i];
var l=o[k];

if(m.field!=null){j[m.field]=parseInt(l,10);
}else{m.manipulator(j,l);
}k+=(m.groups==null)?1:m.groups;
}var n=new Date(j.year,j.month,j.day,(j.ispm)?(j.hour+12):j.hour,j.min,j.sec,j.ms);

if(j.month!=n.getMonth()||j.year!=n.getFullYear()){throw new Error("Error parsing date '"+h+"': the value for day or month is too large");
}return n;
},__pI:function(){if(this.__pD!=null){return;
}this.__pD=[];
var v;
var t=0;
var x=cg;
var r=this.__pA;
var u=bN;
var i=0;

while(i<r.length){var w=r.charAt(i);

switch(u){case bF:if(w==bL){if(i+1>=r.length){i++;
break;
}var s=r.charAt(i+1);

if(s==bL){x+=w;
i++;
}else{i++;
u=bA;
}}else{x+=w;
i++;
}break;
case bY:if(w==v){t++;
i++;
}else{this.__pD.push({type:bY,character:v,size:t});
v=null;
t=0;
u=bN;
}break;
default:if((w>=bE&&w<=cl)||(w>=cx&&w<=cr)){v=w;
u=bY;
}else if(w==bL){if(i+1>=r.length){x+=w;
i++;
break;
}var s=r.charAt(i+1);

if(s==bL){x+=w;
i++;
}i++;
u=bF;
}else{u=bN;
}
if(u!=bN){if(x.length>0){this.__pD.push({type:bM,text:x});
x=cg;
}}else{x+=w;
i++;
}break;
}}if(v!=null){this.__pD.push({type:bY,character:v,size:t});
}else if(x.length>0){this.__pD.push({type:bM,text:x});
}},__pJ:function(){if(this.__pB!=null){return ;
}var di=this.__pA;
this.__pK();
this.__pI();
var dp=[];
var dk=bO;

for(var dg=0;dg<this.__pD.length;dg++){var dq=this.__pD[dg];

if(dq.type==bM){dk+=qx.lang.String.escapeRegexpChars(dq.text);
}else{var dh=dq.character;
var dl=dq.size;
var dj;

for(var dr=0;dr<this.__pC.length;dr++){var dm=this.__pC[dr];

if(dh==dm.pattern.charAt(0)&&dl==dm.pattern.length){dj=dm;
break;
}}if(dj==null){var dn=cg;

for(var i=0;i<dl;i++){dn+=dh;
}throw new Error("Malformed date format: "+di+". Wildcard "+dn+" is not supported");
}else{dp.push(dj);
dk+=dj.regex;
}}}dk+=bc;
var df;

try{df=new RegExp(dk);
}catch(e){throw new Error("Malformed date format: "+di);
}this.__pB={regex:df,"usedRules":dp,pattern:dk};
},__pK:function(){var cQ=qx.util.format.DateFormat;
var cW=qx.lang.String;

if(this.__pC!=null){return ;
}var cR=this.__pC=[];
var de=function(dW,dX){dX=parseInt(dX,10);

if(dX<cQ.ASSUME_YEAR_2000_THRESHOLD){dX+=2000;
}else if(dX<100){dX+=1900;
}dW.year=dX;
};
var cX=function(a,b){a.month=parseInt(b,10)-1;
};
var cU=function(dS,dT){dS.ispm=(dT==cQ.PM_MARKER);
};
var cT=function(dQ,dR){dQ.hour=parseInt(dR,10)%24;
};
var cS=function(f,g){f.hour=parseInt(g,10)%12;
};
var db=function(B,C){return;
};
var cY=qx.locale.Date.getMonthNames(cf,this.__pz,ch);

for(var i=0;i<cY.length;i++){cY[i]=cW.escapeRegexpChars(cY[i].toString());
}var da=function(p,q){q=cW.escapeRegexpChars(q);
p.month=cY.indexOf(q);
};
var cN=qx.locale.Date.getMonthNames(ce,this.__pz,ch);

for(var i=0;i<cN.length;i++){cN[i]=cW.escapeRegexpChars(cN[i].toString());
}var cM=function(cI,cJ){cJ=cW.escapeRegexpChars(cJ);
cI.month=cN.indexOf(cJ);
};
var cP=qx.locale.Date.getDayNames(bH,this.__pz,ch);

for(var i=0;i<cP.length;i++){cP[i]=cW.escapeRegexpChars(cP[i].toString());
}var cL=function(cD,cE){cE=cW.escapeRegexpChars(cE);
cD.month=cP.indexOf(cE);
};
var dc=qx.locale.Date.getDayNames(cf,this.__pz,ch);

for(var i=0;i<dc.length;i++){dc[i]=cW.escapeRegexpChars(dc[i].toString());
}var cV=function(dY,ea){ea=cW.escapeRegexpChars(ea);
dY.month=dc.indexOf(ea);
};
var dd=qx.locale.Date.getDayNames(ce,this.__pz,ch);

for(var i=0;i<dd.length;i++){dd[i]=cW.escapeRegexpChars(dd[i].toString());
}var cO=function(dU,dV){dV=cW.escapeRegexpChars(dV);
dU.month=dd.indexOf(dV);
};
cR.push({pattern:cw,regex:bu,manipulator:de});
cR.push({pattern:cv,regex:bT,manipulator:de});
cR.push({pattern:U,regex:bW,manipulator:de});
cR.push({pattern:N,regex:bv,manipulator:de});
cR.push({pattern:bi,regex:bC,manipulator:de});
cR.push({pattern:V,regex:P,manipulator:de});
cR.push({pattern:cC,regex:T,manipulator:de});
cR.push({pattern:bf,regex:ci,manipulator:cX});
cR.push({pattern:R,regex:ci,manipulator:cX});
cR.push({pattern:bh,regex:cd+cY.join(cb)+cc,manipulator:da});
cR.push({pattern:bn,regex:cd+cN.join(cb)+cc,manipulator:cM});
cR.push({pattern:L,regex:ci,field:ck});
cR.push({pattern:bt,regex:ci,field:ck});
cR.push({pattern:ct,regex:cd+cP.join(cb)+cc,manipulator:cL});
cR.push({pattern:bd,regex:cd+dc.join(cb)+cc,manipulator:cV});
cR.push({pattern:bP,regex:cd+dd.join(cb)+cc,manipulator:cO});
cR.push({pattern:I,regex:cd+cQ.AM_MARKER+cb+cQ.PM_MARKER+cc,manipulator:cU});
cR.push({pattern:cu,regex:ci,field:bK});
cR.push({pattern:O,regex:ci,field:bK});
cR.push({pattern:cB,regex:ci,manipulator:cT});
cR.push({pattern:bw,regex:ci,manipulator:cT});
cR.push({pattern:bV,regex:ci,field:bK});
cR.push({pattern:H,regex:ci,field:bK});
cR.push({pattern:X,regex:ci,manipulator:cS});
cR.push({pattern:bS,regex:ci,manipulator:cS});
cR.push({pattern:bQ,regex:ci,field:bR});
cR.push({pattern:bk,regex:ci,field:bR});
cR.push({pattern:bo,regex:ci,field:cj});
cR.push({pattern:bg,regex:ci,field:cj});
cR.push({pattern:S,regex:bJ,field:bI});
cR.push({pattern:bD,regex:bJ,field:bI});
cR.push({pattern:cz,regex:bJ,field:bI});
cR.push({pattern:bX,regex:J,manipulator:db});
cR.push({pattern:bj,regex:bq,manipulator:db});
}},destruct:function(){this.__pD=this.__pB=this.__pC=null;
}});
})();
(function(){var p="",o="@attributes",n="en_US",m="feedreader.io.FeedParser",k="yyyy-MM-d'T'HH:mm:ss'Z'",j="EEE, d MMM yyyy HH:mm:ss Z",h="EEE, d MMM yyyy HH:mm:ss z",g="yyyy-MM-d'T'HH:mm:ssZ";
qx.Class.define(m,{statics:{_rssDate1:new qx.util.format.DateFormat(j,n),_rssDate2:new qx.util.format.DateFormat(h,n),_atomDate1:new qx.util.format.DateFormat(k,n),_atomDate2:new qx.util.format.DateFormat(g,n),parseFeed:function(s){var t=[];

if(s){if(s.channel){t=this._normalizeRssFeed(s);
}else if(s.entry){t=this._normalizeAtomFeed(s);
}else{throw new Error("Unknown feed format!");
}}else{throw new Error("Invalid json: "+s);
}return t;
},_normalizeRssFeed:function(b){var c=[];

for(var i=0,a=b.channel.item,l=a.length;i<l;i++){var f=a[i];
var e=f.pubDate;

try{e=this._rssDate1.parse(e);
}catch(v){try{e=this._rssDate2.parse(e);
}catch(u){}}if(!(e instanceof Date)){throw new Error("RSS Date Error: "+e);
e=null;
}var d=new feedreader.model.Article();
d.set({title:f.title||p,author:null,date:e,content:f.description||p,link:f.link||p});
c.push(d);
}return c;
},_normalizeAtomFeed:function(w){var x=[];

for(var i=0,a=w.entry,l=a.length;i<l;i++){var A=a[i];
var z=A.updated||A.published||A.created;

try{z=this._atomDate1.parse(z);
}catch(r){try{z=this._atomDate2.parse(z);
}catch(q){}}if(!(z instanceof Date)){throw new Error("Atom Date Error: "+z);
z=null;
}var y=new feedreader.model.Article();
y.set({title:A.title||A.summary||p,author:A.author?A.author.name||null:null,date:z,content:A.content||A.summary||p});

if(qx.lang.Type.isArray(A.link)){y.setLink(A.link[0][o]?A.link[0][o].href||p:p);
}else{y.setLink(A.link[o]?A.link[o].href||p:p);
}x.push(y);
}return x;
}}});
})();
(function(){var o="success",n="head",m="complete",l="error",k="load",j="fail",i="loaded",h="readystatechange",g="qx.io.ScriptLoader",f="script",b="qx.client",d="text/javascript",c="abort";
qx.Class.define(g,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__oN=qx.lang.Function.bind(this.__oT,this);
this.__oO=document.createElement(f);
},members:{__oP:null,__oQ:null,__oR:null,__oN:null,__oO:null,load:function(p,q,r){if(this.__oP){throw new Error("Another request is still running!");
}this.__oP=true;
var s=document.getElementsByTagName(n)[0];
var t=this.__oO;
this.__oQ=q||null;
this.__oR=r||window;
t.type=d;
t.onerror=t.onload=t.onreadystatechange=this.__oN;
t.src=p;
s.appendChild(t);
},abort:function(){if(this.__oP){this.__oS(c);
}},__oS:function(status){var a=this.__oO;
a.onerror=a.onload=a.onreadystatechange=null;
document.getElementsByTagName(n)[0].removeChild(a);
delete this.__oP;
if(this.__oQ){this.__oQ.call(this.__oR,status);
delete this.__oQ;
}},__oT:qx.event.GlobalError.observeMethod(qx.core.Variant.select(b,{"mshtml":function(e){var u=this.__oO.readyState;

if(u==i){this.__oS(o);
}else if(u==m){this.__oS(o);
}else{return;
}},"opera":function(e){if(qx.lang.Type.isString(e)||e.type===l){return this.__oS(j);
}else if(e.type===k){return this.__oS(o);
}else{return;
}},"default":function(e){if(qx.lang.Type.isString(e)||e.type===l){this.__oS(j);
}else if(e.type===k){this.__oS(o);
}else if(e.type===h&&(e.target.readyState===m||e.target.readyState===i)){this.__oS(o);
}else{return;
}}}))},destruct:function(){this.__oO.onerror=this.__oO.onload=this.__oO.onreadystatechange=null;
this.__oO=this.__oN=this.__oQ=this.__oR=null;
}});
})();
(function(){var n="separator-vertical",m="__oU",l="background-medium",k="Posts",j="bold",i="__oV",h="_applyLoading",g="__oW",f="center",e="feedreader.view.List",b="single",d="middle",c="feedreader/images/loading66.gif",a="Boolean";
qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
var p=new qx.ui.layout.VBox();
p.setSeparator(n);
this._setLayout(p);
var q=new qx.ui.basic.Label(this.tr(k));
q.setBackgroundColor(l);
q.setPadding(5);
q.setAllowGrowX(true);
q.setFont(j);
this._add(q);
this.__oU=new qx.ui.container.Stack();
this._add(this.__oU,{flex:1});
this.__oV=new qx.ui.form.List();
this.__oV.setDecorator(null);
this.__oV.setSelectionMode(b);
this.__oU.add(this.__oV);
this.__oW=new qx.ui.container.Composite(new qx.ui.layout.HBox(0,f));
var o=new qx.ui.basic.Image(c);
o.setAlignY(d);
this.__oW.add(o);
this.__oU.add(this.__oW);
},properties:{loading:{check:a,init:false,apply:h}},members:{__oU:null,__oV:null,__oW:null,_applyLoading:function(r,s){if(r){this.__oU.setSelection([this.__oW]);
}else{this.__oU.setSelection([this.__oV]);
}},getList:function(){return this.__oV;
}},destruct:function(){this._disposeObjects(i,m,g);
}});
})();
(function(){var t="horizontal",s="scrollpane",r="vertical",q="button-backward",p="button-forward",o="content",n="execute",m="qx.ui.container.SlideBar",l="scrollY",k="removeChildWidget",g="scrollX",j="_applyOrientation",i="mousewheel",f="Integer",d="slidebar",h="update";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(z){arguments.callee.base.call(this);
var A=this.getChildControl(s);
this._add(A,{flex:1});

if(z!=null){this.setOrientation(z);
}else{this.initOrientation();
}this.addListener(i,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:d},orientation:{check:[t,r],init:t,apply:j},scrollStep:{check:f,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(o);
},_createChildControlImpl:function(B){var C;

switch(B){case p:C=new qx.ui.form.RepeatButton;
C.addListener(n,this._onExecuteForward,this);
C.setFocusable(false);
this._addAt(C,2);
break;
case q:C=new qx.ui.form.RepeatButton;
C.addListener(n,this._onExecuteBackward,this);
C.setFocusable(false);
this._addAt(C,0);
break;
case o:C=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){C.addListener(k,this._onRemoveChild,this);
}this.getChildControl(s).add(C);
break;
case s:C=new qx.ui.core.scroll.ScrollPane();
C.addListener(h,this._onResize,this);
C.addListener(g,this._onScroll,this);
C.addListener(l,this._onScroll,this);
break;
}return C||arguments.callee.base.call(this,B);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(I){var J=this.getChildControl(s);

if(this.getOrientation()===t){J.scrollByX(I);
}else{J.scrollByY(I);
}},scrollTo:function(G){var H=this.getChildControl(s);

if(this.getOrientation()===t){H.scrollToX(G);
}else{H.scrollToY(G);
}},_applyOrientation:function(u,v){var y=[this.getLayout(),this._getLayout()];
var x=this.getChildControl(p);
var w=this.getChildControl(q);
if(v==r){x.removeState(r);
w.removeState(r);
x.addState(t);
w.addState(t);
}else if(v==t){x.removeState(t);
w.removeState(t);
x.addState(r);
w.addState(r);
}
if(u==t){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(y[0]){y[0].dispose();
}
if(y[1]){y[1].dispose();
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
},_updateArrowsEnabled:function(){var E=this.getChildControl(s);

if(this.getOrientation()===t){var D=E.getScrollX();
var F=E.getScrollMaxX();
}else{var D=E.getScrollY();
var F=E.getScrollMaxY();
}this.getChildControl(q).setEnabled(D>0);
this.getChildControl(p).setEnabled(D<F);
},_showArrows:function(){this._showChildControl(p);
this._showChildControl(q);
},_hideArrows:function(){this._excludeChildControl(p);
this._excludeChildControl(q);
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
(function(){var d="qx.ui.core.Spacer";
qx.Class.define(d,{extend:qx.ui.core.LayoutItem,construct:function(a,b){arguments.callee.base.call(this);
this.setWidth(a!=null?a:0);
this.setHeight(b!=null?b:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(c){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var bg="_applyLayoutChange",bf="left",be="top",bd="Decorator",bc="Integer",bb="x",ba="y",Y="auto",X="qx.ui.layout.Dock",W="_applySort",Q="west",V="north",T="south",P="center",O="east",S="Boolean",R="bottom",U="right";
qx.Class.define(X,{extend:qx.ui.layout.Abstract,construct:function(bh,bi,bj,bk){arguments.callee.base.call(this);

if(bh){this.setSpacingX(bh);
}
if(bi){this.setSpacingY(bi);
}
if(bj){this.setSeparatorX(bj);
}
if(bk){this.setSeparatorY(bk);
}},properties:{sort:{check:[Y,ba,bb],init:Y,apply:W},separatorX:{check:bd,nullable:true,apply:bg},separatorY:{check:bd,nullable:true,apply:bg},connectSeparators:{check:S,init:false,apply:bg},spacingX:{check:bc,init:0,apply:bg},spacingY:{check:bc,init:0,apply:bg}},members:{__pa:null,__pb:null,verifyLayoutProperty:null,_applySort:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__pc:{north:1,south:2,west:3,east:4,center:5},__pd:{1:be,2:R,3:bf,4:U},__pe:function(){var bI=this._getLayoutChildren();
var bQ,bK;
var length=bI.length;
var bM=[];
var bP=[];
var bN=[];
var bJ=this.getSort()===ba;
var bO=this.getSort()===bb;

for(var i=0;i<length;i++){bQ=bI[i];
bN=bQ.getLayoutProperties().edge;

if(bN===P){if(bK){throw new Error("It is not allowed to have more than one child aligned to 'center'!");
}bK=bQ;
}else if(bO||bJ){if(bN===V||bN===T){bJ?bM.push(bQ):bP.push(bQ);
}else if(bN===Q||bN===O){bJ?bP.push(bQ):bM.push(bQ);
}}else{bM.push(bQ);
}}var bR=bM.concat(bP);

if(bK){bR.push(bK);
}this.__pa=bR;
var bL=[];

for(var i=0;i<length;i++){bN=bR[i].getLayoutProperties().edge;
bL[i]=this.__pc[bN]||5;
}this.__pb=bL;
delete this._invalidChildrenCache;
},renderLayout:function(a,b){if(this._invalidChildrenCache){this.__pe();
}var v=qx.ui.layout.Util;
var h=this.__pa;
var w=this.__pb;
var length=h.length;
var l,d,k,q,r,B,o,e,y;
var F=[];
var n=[];
var E=this._getSeparatorWidths();
var J=this.getSpacingX();
var I=this.getSpacingY();
var j=-J;
var x=-I;

if(E.x){j-=E.x+J;
}
if(E.y){x-=E.y+I;
}
for(var i=0;i<length;i++){d=h[i];
q=d.getLayoutProperties();
k=d.getSizeHint();
o=k.width;
e=k.height;

if(q.width!=null){o=Math.floor(a*parseFloat(q.width)/100);

if(o<k.minWidth){o=k.minWidth;
}else if(o>k.maxWidth){o=k.maxWidth;
}}
if(q.height!=null){e=Math.floor(b*parseFloat(q.height)/100);

if(e<k.minHeight){e=k.minHeight;
}else if(e>k.maxHeight){e=k.maxHeight;
}}F[i]=o;
n[i]=e;
switch(w[i]){case 1:case 2:x+=e+d.getMarginTop()+d.getMarginBottom()+I;

if(E.y){x+=E.y+I;
}break;
case 3:case 4:j+=o+d.getMarginLeft()+d.getMarginRight()+J;

if(E.x){j+=E.x+J;
}break;
default:j+=o+d.getMarginLeft()+d.getMarginRight()+J;
x+=e+d.getMarginTop()+d.getMarginBottom()+I;

if(E.x){j+=E.x+J;
}
if(E.y){x+=E.y+I;
}}}if(j!=a){l={};
B=j<a;

for(var i=0;i<length;i++){d=h[i];

switch(w[i]){case 3:case 4:case 5:r=d.getLayoutProperties().flex;
if(r==null&&w[i]==5){r=1;
}
if(r>0){k=d.getSizeHint();
l[i]={min:k.minWidth,value:F[i],max:k.maxWidth,flex:r};
}}}var f=v.computeFlexOffsets(l,a,j);

for(var i in f){y=f[i].offset;
F[i]+=y;
j+=y;
}}if(x!=b){l=[];
B=x<b;

for(var i=0;i<length;i++){d=h[i];

switch(w[i]){case 1:case 2:case 5:r=d.getLayoutProperties().flex;
if(r==null&&w[i]==5){r=1;
}
if(r>0){k=d.getSizeHint();
l[i]={min:k.minHeight,value:n[i],max:k.maxHeight,flex:r};
}}}var f=v.computeFlexOffsets(l,b,x);

for(var i in f){y=f[i].offset;
n[i]+=y;
x+=y;
}}this._clearSeparators();
var C=this.getSeparatorX(),D=this.getSeparatorY();
var G=this.getConnectSeparators();
var t=0,A=0;
var N,top,o,e,s,K;
var u,H,M,c;
var L,m,p,g;
var z=this.__pd;

for(var i=0;i<length;i++){d=h[i];
K=w[i];
k=d.getSizeHint();
L=d.getMarginTop();
m=d.getMarginBottom();
p=d.getMarginLeft();
g=d.getMarginRight();
switch(K){case 1:case 2:o=a-p-g;
if(o<k.minWidth){o=k.minWidth;
}else if(o>k.maxWidth){o=k.maxWidth;
}e=n[i];
top=t+v.computeVerticalAlignOffset(z[K],e,b,L,m);
N=A+v.computeHorizontalAlignOffset(d.getAlignX()||bf,o,a,p,g);
if(E.y){if(K==1){H=t+e+L+I+m;
}else{H=t+b-e-L-I-m-E.y;
}u=N;
M=a;

if(G&&u>0){u-=J+p;
M+=(J)*2;
}else{u-=p;
}this._renderSeparator(D,{left:u,top:H,width:M,height:E.y});
}s=e+L+m+I;

if(E.y){s+=E.y+I;
}b-=s;
if(K==1){t+=s;
}break;
case 3:case 4:e=b-L-m;
if(e<k.minHeight){e=k.minHeight;
}else if(e>k.maxHeight){e=k.maxHeight;
}o=F[i];
N=A+v.computeHorizontalAlignOffset(z[K],o,a,p,g);
top=t+v.computeVerticalAlignOffset(d.getAlignY()||be,e,b,L,m);
if(E.x){if(K==3){u=A+o+p+J+g;
}else{u=A+a-o-p-J-g-E.x;
}H=top;
c=b;

if(G&&H>0){H-=I+L;
c+=(I)*2;
}else{H-=L;
}this._renderSeparator(C,{left:u,top:H,width:E.x,height:c});
}s=o+p+g+J;

if(E.x){s+=E.x+J;
}a-=s;
if(K==3){A+=s;
}break;
default:o=a-p-g;
e=b-L-m;
if(o<k.minWidth){o=k.minWidth;
}else if(o>k.maxWidth){o=k.maxWidth;
}if(e<k.minHeight){e=k.minHeight;
}else if(e>k.maxHeight){e=k.maxHeight;
}N=A+v.computeHorizontalAlignOffset(d.getAlignX()||bf,o,a,p,g);
top=t+v.computeVerticalAlignOffset(d.getAlignY()||be,e,b,L,m);
}d.renderLayout(N,top,o,e);
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
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__pe();
}var bo=this.__pa;
var by=this.__pb;
var length=bo.length;
var bs,bz;
var bu,bt;
var bv=0,bG=0;
var bl=0,bB=0;
var bw=0,bF=0;
var bm=0,bA=0;
var bC=this._getSeparatorWidths();
var bE=this.getSpacingX(),bD=this.getSpacingY();
var bq=-bE,bp=-bD;

if(bC.x){bq-=bC.x+bE;
}
if(bC.y){bp-=bC.y+bD;
}for(var i=0;i<length;i++){bz=bo[i];
bs=bz.getSizeHint();
bu=bz.getMarginLeft()+bz.getMarginRight();
bt=bz.getMarginTop()+bz.getMarginBottom();
switch(by[i]){case 1:case 2:bw=Math.max(bw,bs.width+bv+bu);
bF=Math.max(bF,bs.minWidth+bG+bu);
bm+=bs.height+bt;
bA+=bs.minHeight+bt;
bp+=bD;

if(bC.y){bp+=bC.y+bD;
}break;
case 3:case 4:bl=Math.max(bl,bs.height+bm+bt);
bB=Math.max(bB,bs.minHeight+bA+bt);
bv+=bs.width+bu;
bG+=bs.minWidth+bu;
bq+=bE;

if(bC.x){bq+=bC.x+bE;
}break;
default:bv+=bs.width+bu;
bG+=bs.minWidth+bu;
bm+=bs.height+bt;
bA+=bs.minHeight+bt;
bq+=bE;

if(bC.x){bq+=bC.x+bE;
}bp+=bD;

if(bC.y){bp+=bC.y+bD;
}}}var br=Math.max(bG,bF)+bq;
var bH=Math.max(bv,bw)+bq;
var bx=Math.max(bB,bA)+bp;
var bn=Math.max(bl,bm)+bp;
return {minWidth:br,width:bH,minHeight:bx,height:bn};
}},destruct:function(){this.__pb=this.__pa=null;
}});
})();
(function(){var u="__pf",t="__pg",s="qx.io.PartLoader",r="load",q="partLoaded",p="singleton",o="qx.event.type.Data";
qx.Class.define(s,{type:p,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__pf=[];
var h=this._getUris();

for(var i=0;i<h.length;i++){this.__pf.push(new qx.io.part.Package(h[i],i,i==0));
}this.__pg={};
var d=qx.$$loader.parts;

for(var name in d){var c=d[name];
var g=[];

for(var i=0;i<c.length;i++){g.push(this.__pf[c[i]]);
}var f=new qx.io.part.Part(name,g);
f.addListener(r,function(e){this.fireDataEvent(q,e.getTarget());
},this);
this.__pg[name]=f;
}},events:{"partLoaded":o},statics:{require:function(w,x,self){this.getInstance().require(w,x,self);
}},members:{require:function(j,k,self){var k=k||function(){};
var self=self||window;

if(qx.lang.Type.isString(j)){j=[j];
}var n=[];

for(var i=0;i<j.length;i++){n.push(this.getPart(j[i]));
}var m=0;
var l=function(){m+=1;

if(m>=n.length){k.call(self);
}};

for(var i=0;i<n.length;i++){n[i].load(l,this);
}},__pf:null,__pg:null,getPart:function(name){var v=this.__pg[name];

if(!v){throw new Error("No such part: "+name);
}return v;
},_getUris:function(){var a=qx.$$loader.uris;
var b=[];

for(var i=0;i<a.length;i++){b.push(this._decodeUris(a[i]));
}return b;
},_decodeUris:qx.$$loader.decodeUris},destruct:function(){this._disposeObjects(t,u);
}});
})();
(function(){var f="mousedown",d="__ph",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ph={};
qx.event.Registration.addListener(document.documentElement,f,this.__pj,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__ph:null,add:function(g){{};
this.__ph[g.$$hash]=g;
this.__pi();
},remove:function(j){{};
var k=this.__ph;

if(k){delete k[j.$$hash];
this.__pi();
}},hideAll:function(){var i=this.__ph;

if(i){for(var h in i){i[h].exclude();
}}},__pi:function(){var r=1e7;
var q=this.__ph;

for(var p in q){q[p].setZIndex(r++);
}},__pj:function(e){var n=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var o=this.__ph;

for(var m in o){var l=o[m];

if(!l.getAutoHide()||n==l||qx.ui.core.Widget.contains(l,n)){continue;
}l.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__pj,this,true);
this._disposeMap(d);
}});
})();
(function(){var q="_",p="format",o="thu",n="sat",m="cldr_day_",l="cldr_month_",k="wed",j="fri",h="tue",g="mon",H="sun",G="short",F="HH:mm",E="HHmmsszz",D="HHmm",C="HHmmss",B="cldr_date_format_",A="HH:mm:ss zz",z="full",y="cldr_pm",w="long",x="medium",u="cldr_am",v="qx.locale.Date",s="cldr_date_time_format_",t="cldr_time_format_",r="HH:mm:ss";
qx.Class.define(v,{statics:{__pk:qx.locale.Manager.getInstance(),getAmMarker:function(bq){return this.__pk.localize(u,[],bq);
},getPmMarker:function(bh){return this.__pk.localize(y,[],bh);
},getDayNames:function(length,I,J){var J=J?J:p;
{};
var L=[H,g,h,k,o,j,n];
var M=[];

for(var i=0;i<L.length;i++){var K=m+J+q+length+q+L[i];
M.push(this.__pk.localize(K,[],I));
}return M;
},getDayName:function(length,Y,ba,bb){var bb=bb?bb:p;
{};
var bd=[H,g,h,k,o,j,n];
var bc=m+bb+q+length+q+bd[Y];
return this.__pk.localize(bc,[],ba);
},getMonthNames:function(length,bi,bj){var bj=bj?bj:p;
{};
var bl=[];

for(var i=0;i<12;i++){var bk=l+bj+q+length+q+(i+1);
bl.push(this.__pk.localize(bk,[],bi));
}return bl;
},getMonthName:function(length,U,V,W){var W=W?W:p;
{};
var X=l+W+q+length+q+(U+1);
return this.__pk.localize(X,[],V);
},getDateFormat:function(N,O){{};
var P=B+N;
return this.__pk.localize(P,[],O);
},getDateTimeFormat:function(br,bs,bt){var bv=s+br;
var bu=this.__pk.localize(bv,[],bt);

if(bu==bv){bu=bs;
}return bu;
},getTimeFormat:function(Q,R){{};
var T=t+Q;
var S=this.__pk.localize(T,[],R);

if(S!=T){return S;
}
switch(Q){case G:case x:return qx.locale.Date.getDateTimeFormat(D,F);
case w:return qx.locale.Date.getDateTimeFormat(C,r);
case z:return qx.locale.Date.getDateTimeFormat(E,A);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(d){var e={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var f=qx.locale.Date._getTerritory(d);
return e[f]!=null?e[f]:1;
},getWeekendStart:function(a){var c={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var b=qx.locale.Date._getTerritory(a);
return c[b]!=null?c[b]:6;
},getWeekendEnd:function(be){var bf={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var bg=qx.locale.Date._getTerritory(be);
return bf[bg]!=null?bf[bg]:0;
},isWeekend:function(bm,bn){var bp=qx.locale.Date.getWeekendStart(bn);
var bo=qx.locale.Date.getWeekendEnd(bn);

if(bo>bp){return ((bm>=bp)&&(bm<=bo));
}else{return ((bm>=bp)||(bm<=bo));
}},_getTerritory:function(bw){if(bw){var bx=bw.split(q)[1]||bw;
}else{bx=this.__pk.getTerritory()||this.__pk.getLanguage();
}return bx.toUpperCase();
}}});
})();
(function(){var v="get",u="String",t="changeModel",s="_applyDelegate",r="qx.core.Object",q="_applyLabelPath",p="icon",o="change",n="label",m="_applyTarget",f="changeTarget",l="_applyIconPath",k="_applyLabelOptions",d="_applyChildPath",c="_applyIconOptions",h="qx.data.controller.Tree",g="_applyModel";
qx.Class.define(h,{extend:qx.core.Object,include:qx.data.controller.MSelection,construct:function(bN,bO,bP,bQ){arguments.callee.base.call(this);
this.__pl={};
this.__pm=[];
this.__pn={};

if(bP!=null){this.setChildPath(bP);
}
if(bQ!=null){this.setLabelPath(bQ);
}
if(bN!=null){this.setModel(bN);
}
if(bO!=null){this.setTarget(bO);
}},properties:{model:{check:r,apply:g,event:t,nullable:true},target:{apply:m,event:f,init:null},childPath:{check:u,apply:d,nullable:true},labelPath:{check:u,apply:q,nullable:true},iconPath:{check:u,apply:l,nullable:true},labelOptions:{apply:k,nullable:true},iconOptions:{apply:c,nullable:true},delegate:{apply:s,init:null,nullable:true}},members:{__pn:null,__pl:null,__pm:null,_applyDelegate:function(M,N){this._setConfigureItem(M,N);
this._setCreateItem(M,N);
this._setBindItem(M,N);
},_applyIconOptions:function(bu,bv){this.__pv();
},_applyLabelOptions:function(K,L){this.__pv();
},_applyTarget:function(bY,ca){if(ca!=undefined){var cb=ca.getRoot();
ca.setRoot(null);
cb.destroy();
}if(this.getModel()!=null){this.__pq();
}this._addChangeTargetListener(bY,ca);
},_applyModel:function(B,C){this.__pq();
},_applyChildPath:function(bW,bX){this.__pq();
},_applyIconPath:function(a,b){this.__pv();
},_applyLabelPath:function(bp,bq){this.__pv();
},__po:function(bR){var bT=bR.getTarget();
var bS=this.__pn[bT.toHashCode()].treeNode;
var bU=this.__pn[bT.toHashCode()].modelNode;
this.__pr(bS,bU);
this._updateSelection();
},__pp:function(e){var bc=e.getData();
var X=e.getOldData();
var Y=this.__pn[X.toHashCode()];
delete this.__pn[X.toHashCode()];
Y.modelNode.removeListenerById(Y.changeChildernListenerId);
var bd=Y.modelNode;
var bb=qx.Class.getPropertyDefinition(Y.modelNode.constructor,this.getChildPath());
var V=bb.event;
var ba=bd.addListener(V,this.__pp,this);
var W=Y.treeNode;
this.__pn[bc.toHashCode()]={modelNode:bd,treeNode:W,changeListenerId:Y.changeListenerId,changeChildernListenerId:ba};
this.__pr(W,bd);
this._updateSelection();
},_createItem:function(){var bf=this.getDelegate();
if(bf!=null&&bf.createItem!=null){var be=bf.createItem();
}else{var be=new qx.ui.tree.TreeFolder();
}if(bf!=null&&bf.configureItem!=null){bf.configureItem(be);
}return be;
},__pq:function(){if(this.getTarget()==null||this.getChildPath()==null){return;
}if((this.getLabelPath()==null&&this.getDelegate()==null)||(this.getLabelPath()==null&&this.getDelegate()!=null&&this.getDelegate().bindItem==null)){return;
}var bn=this.getTarget().getRoot();

if(bn!=null){this.getTarget().resetRoot();
bn.destroy();
}if(this.getModel()!=null){var bo=this._createItem();
bo.setModel(this.getModel());
this.getTarget().setRoot(bo);
this.__pw(this.getModel(),bo);
this.__pr(bo,this.getModel());
}},__pr:function(by,bz){if(bz[v+qx.lang.String.firstUp(this.getChildPath())]==undefined){return;
}var bI=bz[v+qx.lang.String.firstUp(this.getChildPath())]();
if(this.__pn[bI.toHashCode()]==undefined){var bD=bI.addListener(o,this.__po,this);
var bH=qx.Class.getPropertyDefinition(bz.constructor,this.getChildPath());
var bE=bH.event;
var bF=bz.addListener(bE,this.__pp,this);
this.__pn[bI.toHashCode()]={modelNode:bz,treeNode:by,changeListenerId:bD,changeChildernListenerId:bF};
}for(var i=0;i<bI.length;i++){if(by.getChildren()[i]==null||bI.getItem(i)!=by.getChildren()[i].getModel()){for(var j=i;j<by.getChildren().length;j++){if(by.getChildren()[j].getModel()===bI.getItem(i)){var bA=j;
break;
}}if(bA!=undefined){var bB=by.getChildren()[bA];
if(this.getTarget().isSelected(bB)){var bJ=true;
}by.removeAt(bA);
by.addAt(bB,i);
if(bJ){this.getTarget().addToSelection(bB);
}}else{var bG=this._createItem();
bG.setModel(bI.getItem(i));
by.addAt(bG,i);
this.__pw(bI.getItem(i),bG);
this.__pr(bG,bI.getItem(i));
}}}for(var i=by.getChildren().length-1;i>=bI.length;i--){var bC=by.getChildren()[i];
this.__pu(bC,by);
}},__ps:function(){if(this.getTarget()==null){return;
}var bV=this.getTarget().getRoot();

if(bV!=null){this.getTarget().setRoot(null);
this.__pt(bV);
this.__px(bV.getModel());
bV.destroy();
this.__pn={};
}},__pt:function(bw){var bx=bw.getChildren();
for(var i=bx.length-1;i>=0;i--){if(bx[i].getChildren().length>0){this.__pt(bx[i]);
}this.__pu(bx[i],bw);
}},__pu:function(br,bs){var bt=br.getModel();
if(bt[v+qx.lang.String.firstUp(this.getChildPath())]!=undefined){delete this.__pn[bt[v+qx.lang.String.firstUp(this.getChildPath())]().toHashCode()];
}this.__px(bt);
bs.remove(br);
br.destroy();
},bindProperty:function(D,E,F,G,H){var J=H.bind(D,G,E,F);
if(this.__pl[E]==null){this.__pl[E]={};
}var I=this.__pl[E];

if(I[H.toHashCode()]){I[H.toHashCode()].reverseId=J;
}else{I[H.toHashCode()]={id:J,reverseId:null,treeNode:G};
}if(!qx.lang.Array.contains(this.__pm,E)){this.__pm.push(E);
}},bindPropertyReverse:function(O,P,Q,R,S){var U=R.bind(P,S,O,Q);
if(this.__pl[P]==null){this.__pl[P]={};
}var T=this.__pl[P];

if(T[S.toHashCode()]){T[S.toHashCode()].reverseId=U;
}else{T[S.toHashCode()]={id:null,reverseId:U,treeNode:R};
}if(!qx.lang.Array.contains(this.__pm,P)){this.__pm.push(P);
}},bindDefaultProperties:function(cf,cg){this.bindProperty(this.getLabelPath(),n,this.getLabelOptions(),cf,cg);
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),p,this.getIconOptions(),cf,cg);
}},__pv:function(){var x;

for(var z in this.__pl){x=z;
break;
}for(var w in this.__pl[x]){var A=this.__pl[x][w].treeNode;
var y=qx.core.ObjectRegistry.fromHashCode(w);
this.__px(y);
this.__pw(y,A);
}},__pw:function(bk,bl){var bm=this.getDelegate();
if(bm!=null&&bm.bindItem!=null){bm.bindItem(this,bl,bk);
}else{this.bindDefaultProperties(bl,bk);
}},__px:function(cc){for(var i=0;i<this.__pm.length;i++){var ce=this.__pm[i];
var cd=this.__pl[ce][cc.toHashCode()];

if(cd!=null){if(cd.id){cc.removeBinding(cd.id);
}
if(cd.reverseId){cd.treeNode.removeBinding(cd.reverseId);
}delete this.__pl[ce][cc.toHashCode()];
}}},_setConfigureItem:function(bK,bL){if(bK!=null&&bK.configureItem!=null&&this.getTarget()!=null&&this.getModel()!=null){var bM=this.getTarget().getRoot().getItems(true,true,false);

for(var i=0;i<bM.length;i++){bK.configureItem(bM[i]);
}}},_setCreateItem:function(bi,bj){if(this.getTarget()==null||this.getModel()==null){return;
}if(bi==null||bi.createItem==null){return;
}if(bj&&bj.createItem&&bi&&bi.createItem&&bj.createItem==bi.createTtem){return;
}this._startSelectionModification();
this.__ps();
this.__pq();
this._endSelectionModification();
this._updateSelection();
},_setBindItem:function(bg,bh){if(bg!=null&&bg.bindItem!=null){if(bh!=null&&bh.bindItem!=null&&bg.bindItem==bh.bindItem){return;
}this.__pq();
}}},destruct:function(){this.__pl=this.__pn=this.__pm=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(f){var g=arguments.callee.base.call(this,f);
g.setType(this.getType());
g.setState(this.getState());
g.setStatusCode(this.getStatusCode());
g.setContent(this.getContent());
g.setResponseHeaders(this.getResponseHeaders());
return g;
},getResponseHeader:function(d){var e=this.getResponseHeaders();

if(e){return e[d]||null;
}return null;
}}});
})();
(function(){var p="qx.data.Array",o="String",n="changeArticles",m="loading",l="",k="new",j="feedreader.model.FeedFolder",i="Folder",h="loaded",g="dataModified",c="null",f="changeFeeds",e="stateModified",b="_applyState",a="changeTitle",d="error";
qx.Class.define(j,{extend:qx.core.Object,construct:function(q){arguments.callee.base.call(this);
this.setTitle(q);
this.setFeeds(new qx.data.Array());
},properties:{title:{check:o,event:a,init:i},category:{check:o,init:l,event:g},feeds:{check:p,event:f},articles:{check:p,event:n,init:new qx.data.Array()},state:{check:[k,m,h,d],init:c,event:e,apply:b}}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var h="inherit",g="toolbar-button",f="keydown",e="qx.ui.toolbar.Button",d="keyup";
qx.Class.define(e,{extend:qx.ui.form.Button,construct:function(a,b,c){arguments.callee.base.call(this,a,b,c);
this.removeListener(f,this._onKeyDown);
this.removeListener(d,this._onKeyUp);
},properties:{appearance:{refine:true,init:g},show:{refine:true,init:h},focusable:{refine:true,init:false}}});
})();
(function(){var o="resize",n="scrollY",m="update",l="scrollX",k="_applyScrollX",j="_applyScrollY",i="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",h="appear",g="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",f="qx.event.type.Event",c="qx.ui.core.scroll.ScrollPane",d="scroll";
qx.Class.define(c,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(o,this._onUpdate);
var p=this.getContentElement();
p.addListener(d,this._onScroll,this);
p.addListener(h,this._onAppear,this);
},events:{update:f},properties:{scrollX:{check:i,apply:k,event:l,init:0},scrollY:{check:g,apply:j,event:n,init:0}},members:{add:function(a){var b=this._getChildren()[0];

if(b){this._remove(b);
b.removeListener(o,this._onUpdate,this);
}
if(a){this._add(a);
a.addListener(o,this._onUpdate,this);
}},remove:function(J){if(J){this._remove(J);
J.removeListener(o,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(m);
},_onScroll:function(e){var K=this.getContentElement();
this.setScrollX(K.getScrollX());
this.setScrollY(K.getScrollY());
},_onAppear:function(e){var F=this.getContentElement();
var C=this.getScrollX();
var D=F.getScrollX();

if(C!=D){F.scrollToX(C);
}var G=this.getScrollY();
var E=F.getScrollY();

if(G!=E){F.scrollToY(G);
}},getItemTop:function(B){var top=0;

do{top+=B.getBounds().top;
B=B.getLayoutParent();
}while(B&&B!==this);
return top;
},getItemBottom:function(u){return this.getItemTop(u)+u.getBounds().height;
},getItemLeft:function(M){var N=0;
var parent;

do{N+=M.getBounds().left;
parent=M.getLayoutParent();

if(parent){N+=parent.getInsets().left;
}M=parent;
}while(M&&M!==this);
return N;
},getItemRight:function(v){return this.getItemLeft(v)+v.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var z=this.getInnerSize();
var w=this.getScrollSize();

if(z&&w){return Math.max(0,w.width-z.width);
}return 0;
},getScrollMaxY:function(){var I=this.getInnerSize();
var H=this.getScrollSize();

if(I&&H){return Math.max(0,H.height-I.height);
}return 0;
},scrollToX:function(q){var r=this.getScrollMaxX();

if(q<0){q=0;
}else if(q>r){q=r;
}this.setScrollX(q);
},scrollToY:function(s){var t=this.getScrollMaxY();

if(s<0){s=0;
}else if(s>t){s=t;
}this.setScrollY(s);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(A){this.getContentElement().scrollToX(A);
},_applyScrollY:function(L){this.getContentElement().scrollToY(L);
}}});
})();
(function(){var B="failed",A="completed",z="=",y="aborted",x="",w="sending",v="&",u="configured",t="timeout",r="application/xml",W="qx.io.remote.transport.XmlHttp",V="application/json",U="text/html",T="qx.client",S="receiving",R="text/plain",Q="text/javascript",P="?",O="created",N='Referer',I='Basic ',J="\n</pre>",G="string",H='Authorization',E="<pre>Could not execute json: \n",F="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",C=':',D="parseerror",K="file:",L="webkit",M="object";
qx.Class.define(W,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[R,Q,V,r,U]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(T,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__pM:false,__pN:0,__pO:null,getRequest:function(){if(this.__pO===null){this.__pO=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__pO.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__pO;
},send:function(){this.__pN=0;
var j=this.getRequest();
var d=this.getMethod();
var n=this.getAsynchronous();
var m=this.getUrl();
var g=(window.location.protocol===K&&!(/^http(s){0,1}\:/.test(m)));
this.__pM=g;
var q=this.getParameters(false);
var o=[];

for(var f in q){var k=q[f];

if(k instanceof Array){for(var i=0;i<k.length;i++){o.push(encodeURIComponent(f)+z+encodeURIComponent(k[i]));
}}else{o.push(encodeURIComponent(f)+z+encodeURIComponent(k));
}}
if(o.length>0){m+=(m.indexOf(P)>=0?v:P)+o.join(v);
}if(this.getData()===null){var q=this.getParameters(true);
var o=[];

for(var f in q){var k=q[f];

if(k instanceof Array){for(var i=0;i<k.length;i++){o.push(encodeURIComponent(f)+z+encodeURIComponent(k[i]));
}}else{o.push(encodeURIComponent(f)+z+encodeURIComponent(k));
}}
if(o.length>0){this.setData(o.join(v));
}}var p=function(bH){var bM=F;
var bQ=x;
var bK,bJ,bI;
var bN,bO,bP,bL;
var i=0;

do{bK=bH.charCodeAt(i++);
bJ=bH.charCodeAt(i++);
bI=bH.charCodeAt(i++);
bN=bK>>2;
bO=((bK&3)<<4)|(bJ>>4);
bP=((bJ&15)<<2)|(bI>>6);
bL=bI&63;

if(isNaN(bJ)){bP=bL=64;
}else if(isNaN(bI)){bL=64;
}bQ+=bM.charAt(bN)+bM.charAt(bO)+bM.charAt(bP)+bM.charAt(bL);
}while(i<bH.length);
return bQ;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){j.open(d,m,n);
j.setRequestHeader(H,I+p(this.getUsername()+C+this.getPassword()));
}else{j.open(d,m,n,this.getUsername(),this.getPassword());
}}else{j.open(d,m,n);
}}catch(bz){this.error("Failed with exception: "+bz);
this.failed();
return;
}if(!qx.core.Variant.isSet(T,L)){j.setRequestHeader(N,window.location.href);
}var h=this.getRequestHeaders();

for(var f in h){j.setRequestHeader(f,h[f]);
}try{{};
j.send(this.getData());
}catch(bd){if(g){this.failedLocally();
}else{this.error("Failed to send data: "+bd,"send");
this.failed();
}return;
}if(!n){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===B){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case A:case y:case B:case t:{};
return;
}var bq=this.getReadyState();

if(bq==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bq,this.__pM)){if(this.getState()===u){this.setState(w);
}return this.failed();
}}while(this.__pN<bq){this.setState(qx.io.remote.Exchange._nativeMap[++this.__pN]);
}}),getReadyState:function(){var bk=null;

try{bk=this.getRequest().readyState;
}catch(be){}return bk;
},setRequestHeader:function(bl,bm){this.getRequestHeaders()[bl]=bm;
},getResponseHeader:function(b){var c=null;

try{c=this.getRequest().getResponseHeader(b)||null;
}catch(bB){}return c;
},getStringResponseHeaders:function(){var bj=null;

try{var bi=this.getRequest().getAllResponseHeaders();

if(bi){bj=bi;
}}catch(bh){}return bj;
},getResponseHeaders:function(){var ba=this.getStringResponseHeaders();
var bb={};

if(ba){var X=ba.split(/[\r\n]+/g);

for(var i=0,l=X.length;i<l;i++){var Y=X[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(Y){bb[Y[1]]=Y[2];
}}}return bb;
},getStatusCode:function(){var a=-1;

try{a=this.getRequest().status;
}catch(bE){}return a;
},getStatusText:function(){var by=x;

try{by=this.getRequest().statusText;
}catch(bg){}return by;
},getResponseText:function(){var bG=null;

try{bG=this.getRequest().responseText;
}catch(bp){bG=null;
}return bG;
},getResponseXml:function(){var bw=null;
var bu=this.getStatusCode();
var bv=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bu,bv,this.__pM)){try{bw=this.getRequest().responseXML;
}catch(bF){}}if(typeof bw==M&&bw!=null){if(!bw.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,x);
bw.loadXML(s);
}if(!bw.documentElement){throw new Error("Missing Document Element!");
}
if(bw.documentElement.tagName==D){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bw;
},getFetchedLength:function(){var bc=this.getResponseText();
return typeof bc==G?bc.length:0;
},getResponseContent:function(){var br=this.getState();

if(br!==A&&br!=B){{};
return null;
}{};
var bt=this.getResponseText();

if(br==B){{};
return bt;
}
switch(this.getResponseType()){case R:case U:{};
return bt;
case V:{};

try{if(bt&&bt.length>0){var bs=qx.util.Json.parse(bt,false);
return (bs===0?0:(bs||null));
}else{return null;
}}catch(bx){this.error("Could not execute json: ["+bt+"]",bx);
return E+bt+J;
}case Q:{};

try{if(bt&&bt.length>0){var bs=window.eval(bt);
return (bs===0?0:(bs||null));
}else{return null;
}}catch(bA){this.error("Could not execute javascript: ["+bt+"]",bA);
return null;
}case r:bt=this.getResponseXml();
{};
return (bt===0?0:(bt||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bC,bD){{};

switch(bC){case O:this.fireEvent(O);
break;
case u:this.fireEvent(u);
break;
case w:this.fireEvent(w);
break;
case S:this.fireEvent(S);
break;
case A:this.fireEvent(A);
break;
case B:this.fireEvent(B);
break;
case y:this.getRequest().abort();
this.fireEvent(y);
break;
case t:this.getRequest().abort();
this.fireEvent(t);
break;
}}},defer:function(bn,bo){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,W);
},destruct:function(){var bf=this.getRequest();

if(bf){bf.onreadystatechange=qx.lang.Function.empty;
switch(bf.readyState){case 1:case 2:case 3:bf.abort();
}}this.__pO=null;
}});
})();
(function(){var q="resize",p="position",o="0px",n="webkit",m="paddingLeft",l="$$widget",k="qx.ui.root.Application",j="hidden",i="qx.client",h="div",d="paddingTop",g="100%",f="absolute";
qx.Class.define(k,{extend:qx.ui.root.Abstract,construct:function(c){this.__pP=qx.dom.Node.getWindow(c);
this.__pQ=c;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__pP,q,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__pP:null,__pQ:null,_createContainerElement:function(){var t=this.__pQ;

if(qx.core.Variant.isSet(i,n)){if(!t.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var x=t.documentElement.style;
var u=t.body.style;
x.overflow=u.overflow=j;
x.padding=x.margin=u.padding=u.margin=o;
x.width=x.height=u.width=u.height=g;
var w=t.createElement(h);
t.body.appendChild(w);
var v=new qx.html.Root(w);
v.setStyle(p,f);
v.setAttribute(l,this.toHashCode());
return v;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var a=qx.bom.Viewport.getWidth(this.__pP);
var b=qx.bom.Viewport.getHeight(this.__pP);
return {minWidth:a,width:a,maxWidth:a,minHeight:b,height:b,maxHeight:b};
},_applyPadding:function(r,s,name){if(r&&(name==d||name==m)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,r,s,name);
},_applyDecorator:function(y,z){arguments.callee.base.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__pP=this.__pQ=null;
}});
})();
(function(){var v="</div>",u="_blank",t="Verdana",s="sans-serif",r="<div class='description'>",q="",p="#FFFDED",o="<a target='_blank' href='",n="<div class='date'>",m="feedreader.view.Article",e="_applyArticle",l="feedreader/css/reader.css",h="blogEntry",c="<div class='container'>",b="a",g="Candara",f="<h1 class='blog'>",j="</h1>",a="auto",k="'>read more ...</a>",d="Object";
qx.Class.define(m,{extend:qx.ui.embed.Html,construct:function(){arguments.callee.base.call(this);
if(!feedreader.view.Article.__pR){feedreader.view.Article.__pR=true;
qx.bom.Stylesheet.includeFile(l);
}this.setCssClass(h);
this.setOverflowY(a);
this.setBackgroundColor(p);
var D=new qx.bom.Font(14,[g,t,s]);
D.setLineHeight(1.8);
this.setFont(D);
},properties:{article:{apply:e,nullable:true,check:d}},members:{_applyArticle:function(y,z){var A=this.__pS();
this.setHtml(A);
qx.html.Element.flush();
var C=this.getContentElement().getDomElement();
var B=C.getElementsByTagName(b);
for(var i=0;i<B.length;i++){B[i].target=u;
}},__pS:function(){var w=this.getArticle();
if(!w){return q;
}var x=new qx.util.StringBuilder();
x.add(c);
x.add(f,w.getTitle(),j);
x.add(n,w.getDate(),v);
x.add(r,w.getContent(),v);
x.add(o,w.getLink(),k);
x.add(v);
return x.get();
}}});
})();
(function(){var bw="Control",bv="End",bu="Left",bt="Meta",bs="Pause",br="Down",bq="Ctrl",bp="Home",bo="Apps",bn="Win",bc="Right",bb="Backspace",ba="Space",Y="Up",X="Shift",W="Enter",V="Scroll",U="Alt",T="key_full_Meta",S="PrintScreen",bD="NumLock",bE="Escape",bB="key_short_Alt",bC="key_short_Control_Mac",bz="key_short_Insert",bA="Del",bx="Num",by="key_full_Enter",bF="key_full_Control",bG="qx.locale.Key",bg="Tabulator",bf="key_full_Space",bi="key_short_Meta",bh="key_short_PageUp",bk="key_short_Pause",bj="key_full_Down",bm="key_short_Apps",bl="key_short_Win",be="key_full_Right",bd="key_short_Up",a="key_full_PageDown",b="key_full_Alt",c="PgDn",d="Esc",e="key_full_Insert",f="key_short_Space",g="key_short_Backspace",h="key_short_Home",i="key_short_Down",j="PgUp",bK="_Mac",bJ="key_short_CapsLock",bI="PageUp",bH="key_full_Up",bO="key_full_Home",bN="key_full_Backspace",bM="PageDown",bL="CapsLock",bQ="Ins",bP="key_short_PrintScreen",C="Tab",D="key_full_Apps",A="key_short_Tab",B="key_short_End",G="_",H="Caps",E="key_short_NumLock",F="key_full_Scroll",y="key_short_Left",z="key_short_Scroll",r="key_",q="key_full_Pause",t="key_short_Right",s="key_full_PrintScreen",n="key_full_Win",m="key_full_Control_Mac",p="key_short_Shift",o="key_short_PageDown",l="key_short_Enter",k="key_short_Control",M="Insert",N="key_short_Escape",O="key_full_Tab",P="Print",I="Delete",J="key_full_CapsLock",K="key_full_Escape",L="key_short_Delete",Q="key_full_PageUp",R="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(bG,{statics:{getKeyName:function(bW,bX,bY){{};
var cb=r+bW+G+bX;
if(qx.bom.client.Platform.MAC&&bX==bw){cb+=bK;
}var ca=qx.locale.Manager.getInstance().translate(cb,[],bY);

if(ca==cb){return qx.locale.Key._keyNames[cb]||bX;
}else{return ca;
}}},defer:function(bR,bS,bT){var bV={};
var bU=qx.locale.Manager;
bV[bU.marktr(g)]=bb;
bV[bU.marktr(A)]=C;
bV[bU.marktr(f)]=ba;
bV[bU.marktr(l)]=W;
bV[bU.marktr(p)]=X;
bV[bU.marktr(k)]=bq;
bV[bU.marktr(bC)]=bq;
bV[bU.marktr(bB)]=U;
bV[bU.marktr(bJ)]=H;
bV[bU.marktr(bi)]=bt;
bV[bU.marktr(N)]=d;
bV[bU.marktr(y)]=bu;
bV[bU.marktr(bd)]=Y;
bV[bU.marktr(t)]=bc;
bV[bU.marktr(i)]=br;
bV[bU.marktr(bh)]=j;
bV[bU.marktr(o)]=c;
bV[bU.marktr(B)]=bv;
bV[bU.marktr(h)]=bp;
bV[bU.marktr(bz)]=bQ;
bV[bU.marktr(L)]=bA;
bV[bU.marktr(E)]=bx;
bV[bU.marktr(bP)]=P;
bV[bU.marktr(z)]=V;
bV[bU.marktr(bk)]=bs;
bV[bU.marktr(bl)]=bn;
bV[bU.marktr(bm)]=bo;
bV[bU.marktr(bN)]=bb;
bV[bU.marktr(O)]=bg;
bV[bU.marktr(bf)]=ba;
bV[bU.marktr(by)]=W;
bV[bU.marktr(R)]=X;
bV[bU.marktr(bF)]=bw;
bV[bU.marktr(m)]=bw;
bV[bU.marktr(b)]=U;
bV[bU.marktr(J)]=bL;
bV[bU.marktr(T)]=bt;
bV[bU.marktr(K)]=bE;
bV[bU.marktr(u)]=bu;
bV[bU.marktr(bH)]=Y;
bV[bU.marktr(be)]=bc;
bV[bU.marktr(bj)]=br;
bV[bU.marktr(Q)]=bI;
bV[bU.marktr(a)]=bM;
bV[bU.marktr(v)]=bv;
bV[bU.marktr(bO)]=bp;
bV[bU.marktr(e)]=M;
bV[bU.marktr(w)]=I;
bV[bU.marktr(x)]=bD;
bV[bU.marktr(s)]=S;
bV[bU.marktr(F)]=V;
bV[bU.marktr(q)]=bs;
bV[bU.marktr(n)]=bn;
bV[bU.marktr(D)]=bo;
bR._keyNames=bV;
}});
})();
(function(){var o="qx.event.type.Event",n="Boolean",m="queued",l="String",k="sending",j="receiving",i="aborted",h="failed",g="nocache",f="completed",T="qx.io.remote.Response",S="POST",R="configured",Q="timeout",P="GET",O="Pragma",N="no-url-params-on-post",M="no-cache",L="Cache-Control",K="Content-Type",w="text/plain",x="application/xml",t="application/json",u="text/html",r="application/x-www-form-urlencoded",s="qx.io.remote.Exchange",p="Integer",q="X-Qooxdoo-Response-Type",y="HEAD",z="qx.io.remote.Request",C="_applyResponseType",B="_applyState",E="text/javascript",D="changeState",G="PUT",F="_applyProhibitCaching",A="",J="_applyMethod",I="DELETE",H="boolean";
qx.Class.define(z,{extend:qx.core.Object,construct:function(bp,bq,br){arguments.callee.base.call(this);
this.__pT={};
this.__pU={};
this.__pV={};
this.__pW={};

if(bp!==undefined){this.setUrl(bp);
}
if(bq!==undefined){this.setMethod(bq);
}
if(br!==undefined){this.setResponseType(br);
}this.setProhibitCaching(true);
this.__pX=++qx.io.remote.Request.__pX;
},events:{"created":o,"configured":o,"sending":o,"receiving":o,"completed":T,"aborted":o,"failed":T,"timeout":T},statics:{__pX:0},properties:{url:{check:l,init:A},method:{check:[P,S,G,y,I],apply:J,init:P},asynchronous:{check:n,init:true},data:{check:l,nullable:true},username:{check:l,nullable:true},password:{check:l,nullable:true},state:{check:[R,m,k,j,f,i,Q,h],init:R,apply:B,event:D},responseType:{check:[w,E,t,x,u],init:w,apply:C},timeout:{check:p,nullable:true},prohibitCaching:{check:function(v){return typeof v==H||v===N;
},init:true,apply:F},crossDomain:{check:n,init:false},fileUpload:{check:n,init:false},transport:{check:s,nullable:true},useBasicHttpAuth:{check:n,init:false}},members:{__pT:null,__pU:null,__pV:null,__pW:null,__pX:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case k:case j:this.error("Aborting already sent request!");
case m:this.abort();
break;
}},isConfigured:function(){return this.getState()===R;
},isQueued:function(){return this.getState()===m;
},isSending:function(){return this.getState()===k;
},isReceiving:function(){return this.getState()===j;
},isCompleted:function(){return this.getState()===f;
},isAborted:function(){return this.getState()===i;
},isTimeout:function(){return this.getState()===Q;
},isFailed:function(){return this.getState()===h;
},__pY:function(e){var bk=e.clone();
bk.setTarget(this);
this.dispatchEvent(bk);
},_onqueued:function(e){this.setState(m);
this.__pY(e);
},_onsending:function(e){this.setState(k);
this.__pY(e);
},_onreceiving:function(e){this.setState(j);
this.__pY(e);
},_oncompleted:function(e){this.setState(f);
this.__pY(e);
this.dispose();
},_onaborted:function(e){this.setState(i);
this.__pY(e);
this.dispose();
},_ontimeout:function(e){this.setState(Q);
this.__pY(e);
this.dispose();
},_onfailed:function(e){this.setState(h);
this.__pY(e);
this.dispose();
},_applyState:function(U,V){{};
},_applyProhibitCaching:function(bf,bg){if(!bf){this.removeParameter(g);
this.removeRequestHeader(O);
this.removeRequestHeader(L);
return;
}if(bf!==N||this.getMethod()!=S){this.setParameter(g,new Date().valueOf());
}else{this.removeParameter(g);
}this.setRequestHeader(O,M);
this.setRequestHeader(L,M);
},_applyMethod:function(bm,bn){if(bm===S){this.setRequestHeader(K,r);
}else{this.removeRequestHeader(K);
}var bo=this.getProhibitCaching();
this._applyProhibitCaching(bo,bo);
},_applyResponseType:function(bh,bi){this.setRequestHeader(q,bh);
},setRequestHeader:function(ba,bb){this.__pT[ba]=bb;
},removeRequestHeader:function(d){delete this.__pT[d];
},getRequestHeader:function(bl){return this.__pT[bl]||null;
},getRequestHeaders:function(){return this.__pT;
},setParameter:function(W,X,Y){if(Y){this.__pV[W]=X;
}else{this.__pU[W]=X;
}},removeParameter:function(b,c){if(c){delete this.__pV[b];
}else{delete this.__pU[b];
}},getParameter:function(bs,bt){if(bt){return this.__pV[bs]||null;
}else{return this.__pU[bs]||null;
}},getParameters:function(be){return (be?this.__pV:this.__pU);
},setFormField:function(bc,bd){this.__pW[bc]=bd;
},removeFormField:function(bj){delete this.__pW[bj];
},getFormField:function(a){return this.__pW[a]||null;
},getFormFields:function(){return this.__pW;
},getSequenceNumber:function(){return this.__pX;
}},destruct:function(){this.setTransport(null);
this.__pT=this.__pU=this.__pV=this.__pW=null;
}});
})();
(function(){var w="dblclick",v="click",u="Boolean",t="excluded",s="visible",r="qx.event.type.Data",q="_applyOpenMode",p="Space",o="__qa",n="Left",K="Enter",J="changeOpenMode",I="_applyRootOpenClose",H="changeSelection",G="qx.ui.tree.Tree",F="tree",E="_applyHideRoot",D="changeRoot",C="_applyRoot",B="keypress",z="none",A="pane",x="Right",y="qx.ui.tree.AbstractTreeItem";
qx.Class.define(G,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__qa=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(A).add(this.__qa);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(H,this._onChangeSelection,this);
this.addListener(B,this._onKeyPress,this);
},events:{addItem:r,removeItem:r},properties:{openMode:{check:[v,w,z],init:w,apply:q,event:J,themeable:true},root:{check:y,init:null,nullable:true,event:D,apply:C},hideRoot:{check:u,init:false,apply:E},rootOpenClose:{check:u,init:false,apply:I},appearance:{refine:true,init:F},focusable:{refine:true,init:true}},members:{__qa:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__qa;
},_applyRoot:function(T,U){var V=this.getChildrenContainer();

if(U){V.remove(U);

if(U.hasChildren()){V.remove(U.getChildrenContainer());
}}
if(T){V.add(T);

if(T.hasChildren()){V.add(T.getChildrenContainer());
}T.setVisibility(this.getHideRoot()?t:s);
T.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(L,M){var N=this.getRoot();

if(!N){return;
}N.setVisibility(L?t:s);
N.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(O,P){var Q=this.getRoot();

if(!Q){return;
}Q.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__qa;
},getNextSiblingOf:function(f,g,h){if((g!==false||f.isOpen())&&!(h==true)&&f.hasChildren()){return f.getChildren()[0];
}
while(f){var parent=f.getParent();

if(!parent){return null;
}var k=parent.getChildren();
var j=k.indexOf(f);

if(j>-1&&j<k.length-1){return k[j+1];
}f=parent;
}return null;
},getPreviousSiblingOf:function(X,Y,ba){var parent=X.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==X){return null;
}}}else{if(X==this.getRoot()){return null;
}}var bd=parent.getChildren();
var bb=bd.indexOf(X);

if(bb>0){var bc=bd[bb-1];

while((Y!==false||bc.isOpen())&&!(ba==true)&&bc.hasChildren()){var be=bc.getChildren();
bc=be[be.length-1];
}return bc;
}else{return parent;
}},getItems:function(c,d){if(this.getRoot()!=null){return this.getRoot().getItems(c,d,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(W){while(W){if(W==this){return null;
}
if(W instanceof qx.ui.tree.AbstractTreeItem){return W;
}W=W.getLayoutParent();
}return null;
},_applyOpenMode:function(l,m){if(m==v){this.removeListener(v,this._onOpen,this);
}else if(m==w){this.removeListener(w,this._onOpen,this);
}
if(l==v){this.addListener(v,this._onOpen,this);
}else if(l==w){this.addListener(w,this._onOpen,this);
}},_onOpen:function(e){var S=this.getTreeItem(e.getTarget());

if(!S||!S.isOpenable()){return;
}S.setOpen(!S.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var b=e.getData();
for(var i=0;i<b.length;i++){var a=b[i];
while(a.getParent()!=null){a=a.getParent();
a.setOpen(true);
}}},_onKeyPress:function(e){var R=this._getLeadItem();

if(R!==null){switch(e.getKeyIdentifier()){case n:if(R.isOpenable()&&R.isOpen()){R.setOpen(false);
}break;
case x:if(R.isOpenable()&&!R.isOpen()){R.setOpen(true);
}break;
case K:case p:if(R.isOpenable()){R.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(o);
}});
})();


qx.$$loader.init();

