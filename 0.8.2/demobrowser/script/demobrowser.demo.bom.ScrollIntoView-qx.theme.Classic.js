if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.legacy.theme": "qx.legacy.theme.ClassicRoyale", "qx.application": "demobrowser.demo.bom.ScrollIntoView", "qx.allowUrlVariants": "true", "qx.theme": "qx.theme.Classic", "qx.allowUrlSettings": "true"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off", "qx.aspects": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!window.qxlibraries) qxlibraries = {};
var libinfo = {"qx": {"resourceUri": "../../resource", "version": "trunk"}, "demobrowser.demo": {"resourceUri": "../../resource", "version": "trunk"}};
for (var k in libinfo) qxlibraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Classic/arrows/down-small-invert.gif": [5, 3, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -7, 0], "qx/decoration/Classic/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Classic/menu-combined.gif", 0, 0], "qx/decoration/Classic/arrows-combined.gif": [124, 7, "gif", "qx"], "qx/decoration/Classic/treevirtual/start_minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/arrows/left.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -50, 0], "qx/decoration/Classic/arrows/previous-invert.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -62, 0], "qx/decoration/Classic/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Classic/datechooser/next-year.png": [16, 16, "png", "qx"], "qx/decoration/Classic/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Classic/cursors-combined.gif", 0, 0], "qx/decoration/Classic/datechooser/last-month-invert.png": [16, 16, "png", "qx"], "qx/decoration/Classic/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Classic/treevirtual/end_plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/table/descending.png": [10, 10, "png", "qx", "qx/decoration/Classic/table-combined.png", -52, 0], "qx/decoration/Classic/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Classic/menu-combined.gif", -16, 0], "qx/decoration/Classic/shadow/shadow-small-c.png": [40, 136, "png", "qx"], "qx/decoration/Classic/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, -15], "qx/decoration/Classic/splitpane/knob-vertical.png": [15, 4, "png", "qx"], "qx/decoration/Classic/table/descending-invert.png": [10, 10, "png", "qx", "qx/decoration/Classic/table-combined.png", -42, 0], "qx/decoration/Classic/tree/minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/splitpane/knob-horizontal.png": [4, 15, "png", "qx"], "qx/decoration/Classic/table-combined.png": [72, 11, "png", "qx"], "qx/decoration/Classic/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Classic/table/ascending-invert.png": [10, 10, "png", "qx", "qx/decoration/Classic/table-combined.png", 0, 0], "qx/decoration/Classic/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -28, 0], "qx/icon/Oxygen/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Classic/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Classic/arrows/forward.gif": [8, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -32, 0], "qx/decoration/Classic/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Classic/treevirtual/start.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, -30], "qx/decoration/Classic/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Classic/menu-combined.gif", -48, 0], "qx/decoration/Classic/arrows/up-small.gif": [5, 3, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -112, 0], "qx/decoration/Classic/window/maximize.gif": [9, 9, "gif", "qx", "qx/decoration/Classic/window-captionbar-buttons-combined.gif", -10, 0], "qx/decoration/Classic/treevirtual/start_plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/arrows/right-invert.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -86, 0], "qx/decoration/Classic/treevirtual/cross_minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Classic/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Classic/cursors-combined.gif", -19, 0], "qx/decoration/Classic/arrows/rewind-invert.gif": [8, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -70, 0], "qx/decoration/Classic/arrows/right-small.gif": [3, 5, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -93, 0], "qx/icon/Oxygen/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Classic/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Classic/menu-combined.gif", -32, 0], "qx/icon/Oxygen/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/decoration/Classic/datechooser/next-month.png": [16, 16, "png", "qx"], "qx/decoration/Classic/datechooser/last-year.png": [16, 16, "png", "qx"], "qx/decoration/Classic/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Classic/cursors-combined.gif", -38, 0], "qx/decoration/Classic/arrows/up-small-invert.gif": [5, 3, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -107, 0], "qx/decoration/Classic/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Classic/shadow-lr-combined.png", 0, 0], "qx/decoration/Classic/arrows/right-small-invert.gif": [3, 5, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -90, 0], "qx/decoration/Classic/arrows/up-invert.gif": [7, 4, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -100, 0], "qx/decoration/Classic/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, -75], "qx/decoration/Classic/datechooser/last-month.png": [16, 16, "png", "qx"], "qx/decoration/Classic/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Classic/table-combined.png", -62, 0], "qx/decoration/Classic/arrows/previous.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -66, 0], "qx/decoration/Classic/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -98, 0], "qx/decoration/Classic/window/minimize.gif": [9, 9, "gif", "qx", "qx/decoration/Classic/window-captionbar-buttons-combined.gif", -19, 0], "qx/decoration/Classic/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Classic/treevirtual/end_minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/arrows/down-invert.gif": [7, 4, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", 0, 0], "qx/decoration/Classic/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -168, 0], "qx/decoration/Classic/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Classic/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Classic/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Classic/arrows/forward-invert.gif": [8, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -24, 0], "qx/decoration/Classic/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -224, 0], "qx/decoration/Classic/datechooser/last-year-invert.png": [16, 16, "png", "qx"], "qx/decoration/Classic/datechooser/next-year-invert.png": [16, 16, "png", "qx"], "qx/decoration/Classic/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, 0], "qx/decoration/Classic/arrows/right.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -96, 0], "qx/decoration/Classic/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Classic/colorselector-combined.gif", 0, 0], "qx/decoration/Classic/treevirtual/end.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/checkbox-radiobutton-combined.png": [280, 14, "png", "qx"], "qx/decoration/Classic/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/icon/Oxygen/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Classic/arrows/next-invert.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -54, 0], "qx/decoration/Classic/arrows/down.gif": [7, 4, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -17, 0], "qx/decoration/Classic/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Classic/arrows/left-invert.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -40, 0], "qx/icon/Oxygen/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Classic/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -182, 0], "qx/decoration/Classic/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -238, 0], "qx/decoration/Classic/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Classic/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -112, 0], "qx/decoration/Classic/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Classic/menu-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Classic/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -56, 0], "qx/decoration/Classic/arrows/down-small.gif": [5, 3, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -12, 0], "qx/decoration/Classic/arrows/left-small.gif": [3, 5, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -47, 0], "qx/decoration/Classic/treevirtual/cross_plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -154, 0], "qx/decoration/Classic/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -126, 0], "qx/decoration/Classic/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Classic/cursors-combined.gif", -51, 0], "qx/decoration/Classic/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -210, 0], "qx/decoration/Classic/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -196, 0], "qx/decoration/Classic/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -84, 0], "qx/decoration/Classic/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", 0, 0], "qx/decoration/Classic/shadow/shadow-c.png": [40, 382, "png", "qx"], "qx/decoration/Classic/table/boolean-false.png": [11, 11, "png", "qx", "qx/decoration/Classic/table-combined.png", -20, 0], "qx/decoration/Classic/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -14, 0], "qx/decoration/Classic/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Classic/shadow-lr-combined.png", -15, 0], "qx/decoration/Classic/arrows/rewind.gif": [8, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -78, 0], "qx/decoration/Classic/window-captionbar-buttons-combined.gif": [36, 9, "gif", "qx"], "qx/decoration/Classic/window/restore.gif": [8, 9, "gif", "qx", "qx/decoration/Classic/window-captionbar-buttons-combined.gif", -28, 0], "qx/decoration/Classic/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -140, 0], "qx/icon/Oxygen/16/mimetypes/text-plain.png": [16, 16, "png", "qx"], "qx/icon/Oxygen/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Classic/table/boolean-true.png": [11, 11, "png", "qx", "qx/decoration/Classic/table-combined.png", -31, 0], "qx/decoration/Classic/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, -45], "qx/decoration/Classic/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -42, 0], "qx/decoration/Classic/treevirtual/cross.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -252, 0], "qx/decoration/Classic/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -266, 0], "qx/decoration/Classic/arrows/next.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -58, 0], "qx/decoration/Classic/table/ascending.png": [10, 10, "png", "qx", "qx/decoration/Classic/table-combined.png", -10, 0], "qx/decoration/Classic/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, -60], "qx/decoration/Classic/treevirtual/only_minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/treevirtual/line.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Classic/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Classic/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Classic/shadow-small-lr-combined.png", -5, 0], "qx/decoration/Classic/treevirtual/only_plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Classic/colorselector-combined.gif", -35, 0], "qx/decoration/Classic/tree/plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/window/close.gif": [10, 9, "gif", "qx", "qx/decoration/Classic/window-captionbar-buttons-combined.gif", 0, 0], "qx/decoration/Classic/arrows/up.gif": [7, 4, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -117, 0], "qx/decoration/Classic/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -70, 0], "qx/decoration/Classic/arrows/left-small-invert.gif": [3, 5, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -44, 0], "qx/decoration/Classic/datechooser/next-month-invert.png": [16, 16, "png", "qx"]};
qx.$$translations = {};
qx.$$locales = {"fr": {"cldr_day_abbreviated_tue": "mar.", "cldr_date_time_format_MMd": "d/MM", "cldr_date_time_format_yyMMMd": "d MMM yy", "cldr_day_wide_thu": "jeudi", "cldr_date_time_format_MMMdd": "dd MMM", "cldr_date_time_format_MEd": "EEE d/M", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "ven.", "cldr_day_wide_sun": "dimanche", "cldr_day_wide_mon": "lundi", "cldr_pm": "PM", "alternateQuotationEnd": "”", "cldr_day_narrow_sun": "D", "cldr_date_format_full": "EEEE d MMMM yyyy", "cldr_month_abbreviated_9": "sept.", "cldr_month_abbreviated_8": "août", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_month_abbreviated_1": "janv.", "cldr_month_abbreviated_3": "mars", "cldr_month_abbreviated_2": "févr.", "cldr_month_abbreviated_5": "mai", "cldr_month_abbreviated_4": "avr.", "cldr_month_abbreviated_7": "juil.", "cldr_month_abbreviated_6": "juin", "cldr_date_time_format_MMMd": "d MMM", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_narrow_tue": "M", "cldr_date_time_format_MMMEd": "E d MMM", "cldr_date_time_format_yQ": "QQQ yyyy", "cldr_month_wide_2": "février", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "janvier", "cldr_month_wide_6": "juin", "cldr_month_wide_7": "juillet", "cldr_date_time_format_MMMMd": "d MMMM", "cldr_month_wide_5": "mai", "cldr_month_wide_8": "août", "cldr_month_wide_9": "septembre", "cldr_date_time_format_MMMMEd": "EEE d MMMM", "cldr_month_wide_10": "octobre", "cldr_month_wide_11": "novembre", "cldr_month_wide_12": "décembre", "cldr_date_time_format_MMdd": "dd/MM", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": " ", "alternateQuotationStart": "“", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_date_time_format_yMMMEd": "EEE d MMM yyyy", "cldr_date_time_format_yMEd": "EEE d/M/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yyMM": "MM/yy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d MMMM yyyy", "cldr_month_abbreviated_11": "nov.", "cldr_month_abbreviated_10": "oct.", "cldr_month_abbreviated_12": "déc.", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_wide_fri": "vendredi", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "mardi", "cldr_date_time_format_Md": "M-d", "cldr_day_abbreviated_mon": "lun.", "cldr_month_narrow_3": "M", "quotationEnd": "»", "cldr_date_time_format_yyMMMEEEd": "EEE d MMM yy", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_time_format_yyQ": "QQQ yy", "cldr_date_format_medium": "d MMM yyyy", "cldr_day_abbreviated_wed": "mer.", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "«", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "sam.", "cldr_day_narrow_wed": "M", "cldr_date_time_format_hhmmss": "HH:mm:ss", "cldr_am": "AM", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_narrow_fri": "V", "cldr_day_wide_sat": "samedi", "cldr_day_narrow_thu": "J", "cldr_month_wide_3": "mars", "cldr_day_abbreviated_sun": "dim.", "cldr_day_abbreviated_thu": "jeu.", "cldr_date_format_short": "dd/MM/yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_day_wide_wed": "mercredi", "cldr_day_narrow_mon": "L", "cldr_date_time_format_hhmm": "HH:mm", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_date_time_format_y": "yyyy", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "avril", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_d": "d"}, "en": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "fr_FR": {}, "de": {"cldr_day_abbreviated_tue": "Di.", "cldr_date_time_format_MMd": "d.MM.", "cldr_day_wide_thu": "Donnerstag", "cldr_date_time_format_MEd": "E, d.M.", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fr.", "cldr_day_wide_sun": "Sonntag", "cldr_day_wide_mon": "Montag", "cldr_pm": "nachm.", "alternateQuotationEnd": "‘", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, d. MMMM yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mär", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "Mai", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "d. MMM", "cldr_date_time_format_yM": "yyyy-M", "cldr_day_narrow_tue": "D", "cldr_date_time_format_MMMEd": "E d. MMM", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_yyMMdd": "dd.MM.yy", "cldr_month_wide_2": "Februar", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "Januar", "cldr_month_wide_6": "Juni", "cldr_month_wide_7": "Juli", "cldr_date_time_format_MMMMd": "d. MMMM", "cldr_month_wide_5": "Mai", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E d. MMMM", "cldr_month_wide_10": "Oktober", "cldr_month_wide_11": "November", "cldr_month_wide_12": "Dezember", "cldr_date_time_format_MMdd": "dd.MM.", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": ".", "alternateQuotationStart": "‚", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_date_time_format_yMMMEd": "EEE, d. MMM yyyy", "cldr_date_time_format_yMEd": "EEE, yyyy-M-d", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yyMM": "MM.yy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d. MMMM yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Okt", "cldr_month_abbreviated_12": "Dez", "cldr_date_time_format_MMMMdd": "dd. MMMM", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_wide_fri": "Freitag", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "Dienstag", "cldr_date_time_format_Ed": "E d", "cldr_date_time_format_Md": "d.M.", "cldr_month_narrow_1": "J", "cldr_day_abbreviated_mon": "Mo.", "cldr_month_narrow_3": "M", "quotationEnd": "“", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_time_format_yyQ": "Q yy", "cldr_date_format_medium": "dd.MM.yyyy", "cldr_day_abbreviated_wed": "Mi.", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "„", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sa.", "cldr_day_narrow_wed": "M", "cldr_date_time_format_hhmmss": "hh:mm:ss a", "cldr_am": "vorm.", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Samstag", "cldr_day_narrow_thu": "D", "cldr_month_wide_3": "März", "cldr_day_abbreviated_sun": "So.", "cldr_date_time_format_H": "H", "cldr_day_abbreviated_thu": "Do.", "cldr_date_format_short": "dd.MM.yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_day_wide_wed": "Mittwoch", "cldr_day_narrow_mon": "M", "cldr_date_time_format_hhmm": "hh:mm a", "cldr_date_time_format_yyyy": "yyyy", "cldr_month_narrow_2": "F", "cldr_date_time_format_y": "yyyy", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_d": "d"}, "C": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "en_US": {}, "de_DE": {}}

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["../../script/demobrowser.demo.bom.ScrollIntoView-qx.theme.Classic-0.js"]],
  boot : "boot"
};  

(function(){var n="[Class ",m="toString",l="qx.Bootstrap",k="]",j="Class",h=".";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return n+this.classname+k;
},createNamespace:function(name,o){var q=name.split(h);
var parent=window;
var p=q[0];

for(var i=0,r=q.length-1;i<r;i++,p=q[i]){if(!parent[p]){parent=parent[p]={};
}else{parent=parent[p];
}}parent[p]=o;
return p;
},define:function(name,a){if(!a){var a={statics:{}};
}var f;
var d=null;

if(a.members){f=a.construct||new Function;
var b=a.statics;

for(var c in b){f[c]=b[c];
}d=f.prototype;
var g=a.members;

for(var c in g){d[c]=g[c];
}}else{f=a.statics||{};
}var e=this.createNamespace(name,f);
f.name=f.classname=name;
f.basename=e;
f.$$type=j;
if(!f.hasOwnProperty(m)){f.toString=this.genericToString;
}if(a.defer){a.defer(f,d);
}qx.Bootstrap.$$registry[name]=a.statics;
}};
qx.Bootstrap.define(l,{statics:{LOADSTART:new Date,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var n="qx.allowUrlSettings",m="&",l="qx.core.Setting",k="qx.allowUrlVariants",j="qxsetting",h=":",g=".";
qx.Bootstrap.define(l,{statics:{__b:{},define:function(e,f){if(f===undefined){throw new Error('Default value of setting "'+e+'" must be defined!');
}
if(!this.__b[e]){this.__b[e]={};
}else if(this.__b[e].defaultValue!==undefined){throw new Error('Setting "'+e+'" is already defined!');
}this.__b[e].defaultValue=f;
},get:function(p){var q=this.__b[p];

if(q===undefined){throw new Error('Setting "'+p+'" is not defined.');
}
if(q.value!==undefined){return q.value;
}return q.defaultValue;
},__c:function(){if(window.qxsettings){for(var r in qxsettings){if((r.split(g)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__b[r]){this.__b[r]={};
}this.__b[r].value=qxsettings[r];
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(d){}this.__d();
}},__d:function(){if(this.get(n)!=true){return;
}var c=document.location.search.slice(1).split(m);

for(var i=0;i<c.length;i++){var a=c[i].split(h);

if(a.length!=3||a[0]!=j){continue;
}var b=a[1];

if(!this.__b[b]){this.__b[b]={};
}this.__b[b].value=decodeURIComponent(a[2]);
}}},defer:function(o){o.define(n,false);
o.define(k,false);
o.__c();
}});
})();
(function(){var q="gecko",p="1.9.0.0",o=".",n="function",m="[^\\.0-9]",l="525.26",k="",j="mshtml",i="AppleWebKit/",h="unknown",c="9.6.0",g="Gecko",f="7.0",b="opera",a="webkit",e="0.0.0",d="qx.bom.client.Engine";
qx.Bootstrap.define(d,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,__e:function(){var r=h;
var v=e;
var u=navigator.userAgent;
var x=false;
var t=false;

if(window.opera){r=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(u)){v=RegExp.$1+o+RegExp.$2;

if(RegExp.$3!=k){v+=o+RegExp.$3;
}}else{t=true;
v=c;
}}else if(navigator.userAgent.indexOf(i)!=-1){r=a;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(u)){v=RegExp.$1;
var w=RegExp(m).exec(v);

if(w){v=v.slice(0,w.index);
}}else{t=true;
v=l;
}}else if(window.controllers&&navigator.product===g){r=q;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(u)){v=RegExp.$1;
}else{t=true;
v=p;
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(u)){r=j;
v=RegExp.$1;
if(v>=8&&document.documentMode<8){v=f;
}this.MSHTML=true;
}else{var s=window.qxFail;

if(s&&typeof s===n){var r=s();

if(r.NAME&&r.FULLVERSION){r=r.NAME;
this[r.toUpperCase()]=true;
v=r.FULLVERSION;
}}else{x=true;
t=true;
v=p;
r=q;
this.GECKO=true;
alert("Unsupported client: "+u+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=x;
this.UNKNOWN_VERSION=t;
this.NAME=r;
this.FULLVERSION=v;
this.VERSION=parseFloat(v);
}},defer:function(y){y.__e();
}});
})();
(function(){var w="on",u="off",t="|",s="default",r="object",q="&",p="qx.aspects",o="$",n="qx.allowUrlVariants",m="qx.debug",e="qx.client",k="qx.dynlocale",h="webkit",d="qxvariant",c="opera",g=":",f="qx.core.Variant",j="mshtml",b="gecko";
qx.Bootstrap.define(f,{statics:{__f:{},__g:{},compilerIsSet:function(){return true;
},define:function(O,P,Q){{};

if(!this.__f[O]){this.__f[O]={};
}else{}this.__f[O].allowedValues=P;
this.__f[O].defaultValue=Q;
},get:function(y){var z=this.__f[y];
{};

if(z.value!==undefined){return z.value;
}return z.defaultValue;
},__h:function(){if(window.qxvariants){for(var H in qxvariants){{};

if(!this.__f[H]){this.__f[H]={};
}this.__f[H].value=qxvariants[H];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(a){}this.__i(this.__f);
}},__i:function(){if(qx.core.Setting.get(n)!=true){return;
}var L=document.location.search.slice(1).split(q);

for(var i=0;i<L.length;i++){var M=L[i].split(g);

if(M.length!=3||M[0]!=d){continue;
}var N=M[1];

if(!this.__f[N]){this.__f[N]={};
}this.__f[N].value=decodeURIComponent(M[2]);
}},select:function(I,J){{};

for(var K in J){if(this.isSet(I,K)){return J[K];
}}
if(J[s]!==undefined){return J[s];
}{};
},isSet:function(A,B){var C=A+o+B;

if(this.__g[C]!==undefined){return this.__g[C];
}var E=false;
if(B.indexOf(t)<0){E=this.get(A)===B;
}else{var D=B.split(t);

for(var i=0,l=D.length;i<l;i++){if(this.get(A)===D[i]){E=true;
break;
}}}this.__g[C]=E;
return E;
},__j:function(v){return typeof v===r&&v!==null&&v instanceof Array;
},__k:function(v){return typeof v===r&&v!==null&&!(v instanceof Array);
},__l:function(F,G){for(var i=0,l=F.length;i<l;i++){if(F[i]==G){return true;
}}return false;
}},defer:function(x){x.define(e,[b,j,c,h],qx.bom.client.Engine.NAME);
x.define(m,[w,u],w);
x.define(p,[w,u],u);
x.define(k,[w,u],w);
x.__h();
}});
})();
(function(){var B='"',A="valueOf",z="toLocaleString",y="isPrototypeOf",x="",w="toString",v="qx.client",u="qx.lang.Object",t='\", "',s="hasOwnProperty",r="Use 'clone()' instead!";
qx.Bootstrap.define(u,{statics:{empty:function(C){for(var D in C){if(C.hasOwnProperty(D)){delete C[D];
}}},isEmpty:function(X){for(var Y in X){return false;
}return true;
},hasMinLength:function(P,Q){var length=0;

for(var R in P){if((++length)>=Q){return true;
}}return false;
},getLength:function(p){var length=0;

for(var q in p){length++;
}return length;
},_shadowedKeys:[y,s,z,w,A],getKeys:qx.core.Variant.select(v,{"mshtml":function(S){{};
var T=[];

for(var U in S){T.push(U);
}for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(S.hasOwnProperty(a[i])){T.push(a[i]);
}}return T;
},"default":function(E){var F=[];

for(var G in E){F.push(G);
}return F;
}}),getKeysAsString:function(h){var j=qx.lang.Object.getKeys(h);

if(j.length==0){return x;
}return B+j.join(t)+B;
},getValues:function(c){var d=[];

for(var e in c){d.push(c[e]);
}return d;
},mergeWith:function(k,m,n){if(n===undefined){n=true;
}
for(var o in m){if(n||k[o]===undefined){k[o]=m[o];
}}return k;
},carefullyMergeWith:function(V,W){return qx.lang.Object.mergeWith(V,W,false);
},merge:function(M,N){var O=arguments.length;

for(var i=1;i<O;i++){qx.lang.Object.mergeWith(M,arguments[i]);
}return M;
},copy:function(b){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return qx.lang.Object.clone(b);
},clone:function(H){var I={};

for(var J in H){I[J]=H[J];
}return I;
},invert:function(bf){var bg={};

for(var bh in bf){bg[bf[bh].toString()]=bh;
}return bg;
},getKeyFromValue:function(ba,bb){for(var bc in ba){if(ba.hasOwnProperty(bc)&&ba[bc]===bb){return bc;
}}return null;
},contains:function(bd,be){return this.getKeyFromValue(bd,be)!==null;
},select:function(f,g){return g[f];
},fromArray:function(K){var L={};

for(var i=0,l=K.length;i<l;i++){{};
L[K[i].toString()]=true;
}return L;
}}});
})();
(function(){var bd="[Class ",bc="]",bb="$$init_",ba="toString",Y="extend",X="Class",W="qx.Class",V="static",U="qx.event.type.Data";
qx.Bootstrap.define(W,{statics:{define:function(name,bK){if(!bK){var bK={};
}if(bK.include&&!(bK.include instanceof Array)){bK.include=[bK.include];
}if(bK.implement&&!(bK.implement instanceof Array)){bK.implement=[bK.implement];
}if(!bK.hasOwnProperty(Y)&&!bK.type){bK.type=V;
}{};
var bM=this.__r(name,bK.type,bK.extend,bK.statics,bK.construct,bK.destruct);
if(bK.extend){if(bK.properties){this.__t(bM,bK.properties,true);
}if(bK.members){this.__v(bM,bK.members,true,true,false);
}if(bK.events){this.__s(bM,bK.events,true);
}if(bK.include){for(var i=0,l=bK.include.length;i<l;i++){this.__y(bM,bK.include[i],false);
}}}if(bK.settings){for(var bL in bK.settings){qx.core.Setting.define(bL,bK.settings[bL]);
}}if(bK.variants){for(var bL in bK.variants){qx.core.Variant.define(bL,bK.variants[bL].allowedValues,bK.variants[bL].defaultValue);
}}if(bK.implement){for(var i=0,l=bK.implement.length;i<l;i++){this.__x(bM,bK.implement[i]);
}}{};
if(bK.defer){bK.defer.self=bM;
bK.defer(bM,bM.prototype,{add:function(name,j){var k={};
k[name]=j;
qx.Class.__t(bM,k,true);
}});
}},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bN,bO){{};
qx.Class.__y(bN,bO,false);
},patch:function(bf,bg){{};
qx.Class.__y(bf,bg,true);
},isSubClassOf:function(bC,bD){if(!bC){return false;
}
if(bC==bD){return true;
}
if(bC.prototype instanceof bD){return true;
}return false;
},getPropertyDefinition:function(bB,name){while(bB){if(bB.$$properties&&bB.$$properties[name]){return bB.$$properties[name];
}bB=bB.superclass;
}return null;
},getProperties:function(q){var r=[];

while(q){if(q.$$properties){r.push.apply(r,qx.lang.Object.getKeys(q.$$properties));
}q=q.superclass;
}return r;
},getByProperty:function(h,name){while(h){if(h.$$properties&&h.$$properties[name]){return h;
}h=h.superclass;
}return null;
},hasProperty:function(bJ,name){return !!this.getPropertyDefinition(bJ,name);
},getEventType:function(be,name){var be=be.constructor;

while(be.superclass){if(be.$$events&&be.$$events[name]!==undefined){return be.$$events[name];
}be=be.superclass;
}return null;
},supportsEvent:function(bn,name){return !!this.getEventType(bn,name);
},hasOwnMixin:function(bP,bQ){return bP.$$includes&&bP.$$includes.indexOf(bQ)!==-1;
},getByMixin:function(bE,bF){var bG,i,l;

while(bE){if(bE.$$includes){bG=bE.$$flatIncludes;

for(i=0,l=bG.length;i<l;i++){if(bG[i]===bF){return bE;
}}}bE=bE.superclass;
}return null;
},getMixins:function(bl){var bm=[];

while(bl){if(bl.$$includes){bm.push.apply(bm,bl.$$flatIncludes);
}bl=bl.superclass;
}return bm;
},hasMixin:function(bH,bI){return !!this.getByMixin(bH,bI);
},hasOwnInterface:function(K,L){return K.$$implements&&K.$$implements.indexOf(L)!==-1;
},getByInterface:function(y,z){var A,i,l;

while(y){if(y.$$implements){A=y.$$flatImplements;

for(i=0,l=A.length;i<l;i++){if(A[i]===z){return y;
}}}y=y.superclass;
}return null;
},getInterfaces:function(cb){var cc=[];

while(cb){if(cb.$$implements){cc.push.apply(cc,cb.$$flatImplements);
}cb=cb.superclass;
}return cc;
},hasInterface:function(bj,bk){return !!this.getByInterface(bj,bk);
},implementsInterface:function(e,f){var g=e.constructor;

if(this.hasInterface(g,f)){return true;
}
try{qx.Interface.assertObject(e,f);
return true;
}catch(p){}
try{qx.Interface.assert(g,f,false);
return true;
}catch(x){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bd+this.classname+bc;
},$$registry:qx.Bootstrap.$$registry,__n:null,__o:null,__p:function(){},__q:function(){},__r:function(name,bo,bp,bq,br,bs){var bx;

if(!bp&&true){bx=bq||{};
}else{bx={};

if(bp){if(!br){br=this.__z();
}bx=this.__B(br,name,bo);
}if(bq){var by;

for(var i=0,a=qx.lang.Object.getKeys(bq),l=a.length;i<l;i++){by=a[i];
{bx[by]=bq[by];
};
var bu;
}}}var bw=qx.Bootstrap.createNamespace(name,bx,false);
bx.name=bx.classname=name;
bx.basename=bw;
bx.$$type=X;

if(bo){bx.$$classtype=bo;
}if(!bx.hasOwnProperty(ba)){bx.toString=this.genericToString;
}
if(bp){var bz=bp.prototype;
var bt=this.__A();
bt.prototype=bz;
var bv=new bt;
bx.prototype=bv;
bv.name=bv.classname=name;
bv.basename=bw;
br.base=bx.superclass=bp;
br.self=bx.constructor=bv.constructor=bx;
if(bs){{};
bx.$$destructor=bs;
}}this.$$registry[name]=bx;
return bx;
},__s:function(G,H,I){var J,J;

if(G.$$events){for(var J in H){G.$$events[J]=H[J];
}}else{G.$$events=H;
}},__t:function(bV,bW,bX){var ca;

if(bX===undefined){bX=false;
}var bY=!!bV.$$propertiesAttached;

for(var name in bW){ca=bW[name];
{};
ca.name=name;
if(!ca.refine){if(bV.$$properties===undefined){bV.$$properties={};
}bV.$$properties[name]=ca;
}if(ca.init!==undefined){bV.prototype[bb+name]=ca.init;
}if(ca.event!==undefined){var event={};
event[ca.event]=U;
this.__s(bV,event,bX);
}if(ca.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(bY){qx.core.Property.attachMethods(bV,name,ca);
}}},__u:null,__v:function(M,N,O,P,Q){var R=M.prototype;
var T,S;

for(var i=0,a=qx.lang.Object.getKeys(N),l=a.length;i<l;i++){T=a[i];
S=N[T];
{};
if(P!==false&&S instanceof Function&&S.$$type==null){if(Q==true){S=this.__w(S,R[T]);
}else{if(R[T]){S.base=R[T];
}S.self=M;
}{};
}R[T]=S;
}},__w:function(bh,bi){if(bi){return function(){var F=bh.base;
bh.base=bi;
var E=bh.apply(this,arguments);
bh.base=F;
return E;
};
}else{return bh;
}},__x:function(B,C){{};
var D=qx.Interface.flatten([C]);

if(B.$$implements){B.$$implements.push(C);
B.$$flatImplements.push.apply(B.$$flatImplements,D);
}else{B.$$implements=[C];
B.$$flatImplements=D;
}},__y:function(s,t,u){{};

if(this.hasMixin(s,t)){qx.log.Logger.warn('Mixin "'+t.name+'" is already included into Class "'+s.classname+'" by class: '+this.getByMixin(s,t).classname+'!');
return;
}var w=qx.Mixin.flatten([t]);
var v;

for(var i=0,l=w.length;i<l;i++){v=w[i];
if(v.$$events){this.__s(s,v.$$events,u);
}if(v.$$properties){this.__t(s,v.$$properties,u);
}if(v.$$members){this.__v(s,v.$$members,u,u,u);
}}if(s.$$includes){s.$$includes.push(t);
s.$$flatIncludes.push.apply(s.$$flatIncludes,w);
}else{s.$$includes=[t];
s.$$flatIncludes=w;
}},__z:function(){function bA(){arguments.callee.base.apply(this,arguments);
}return bA;
},__A:function(){return function(){};
},__B:function(bR,name,bS){var bU=function(){var o=arguments.callee.constructor;
{};
if(!o.$$propertiesAttached){qx.core.Property.attach(o);
}var n=o.$$original.apply(this,arguments);
if(o.$$includes){var m=o.$$flatIncludes;

for(var i=0,l=m.length;i<l;i++){if(m[i].$$constructor){m[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return n;
};
var bT;
if(bS==="singleton"){bU.getInstance=this.getInstance;
}bU.$$original=bR;
bR.wrapper=bU;
return bU;
}},defer:function(b){var c,b,d;
}});
})();
(function(){var w="other",v="widgets",u="fonts",t="appearances",s="qx.Theme",r="]",q="[Theme ",p="colors",o="decorations",n="Theme",j="meta",m="borders",k="icons";
qx.Class.define(s,{statics:{define:function(name,x){if(!x){var x={};
}
if(x.include&&!(x.include instanceof Array)){x.include=[x.include];
}{};
var y={$$type:n,name:name,title:x.title,toString:this.genericToString};
if(x.extend){y.supertheme=x.extend;
}if(x.resource){y.resource=x.resource;
}else if(x.extend&&x.extend.resource){y.resource=x.extend.resource;
}y.basename=qx.Bootstrap.createNamespace(name,y);
this.__cN(y,x);
this.$$registry[name]=y;
if(x.include){for(var i=0,a=x.include,l=a.length;i<l;i++){this.include(y,a[i]);
}}},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return q+this.name+r;
},__cM:function(z){for(var i=0,A=this.__cO,l=A.length;i<l;i++){if(z[A[i]]){return A[i];
}}},__cN:function(b,c){var f=this.__cM(c);
if(c.extend&&!f){f=c.extend.type;
}b.type=f||w;
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
},$$registry:{},__cO:[p,m,o,u,k,v,t,j],__cP:null,__cQ:null,__cR:function(){},patch:function(B,C){var E=this.__cM(C);

if(E!==this.__cM(B)){throw new Error("The mixins '"+B.name+"' are not compatible '"+C.name+"'!");
}var D=C[E];
var F=B[E];

for(var G in D){F[G]=D[G];
}},include:function(H,I){var K=I.type;

if(K!==H.type){throw new Error("The mixins '"+H.name+"' are not compatible '"+I.name+"'!");
}var J=I[K];
var L=H[K];

for(var M in J){if(L[M]!==undefined){throw new Error("It is not allowed to overwrite the key '"+M+"' of theme '"+H.name+"' by mixin theme '"+I.name+"'.");
}L[M]=J[M];
}}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#888888",a="#3E5B97",z="#FFFFE1",y="#F3F8FD",x="#808080",w="#F4F4F4",v="#CCCCCC",u="#DBEAF9",t="#BCCEE5",s="#A5BDDE",r="#7CA0CF",q="#F6F5F7",o="qx.theme.classic.Color",p="#F9F8E9",m="#DCDFE4",n="#FAFBFE",k="#AAAAAA",l="#85878C";
qx.Theme.define(o,{colors:{"background":g,"background-light":d,"background-focused":y,"background-focused-inner":u,"background-disabled":w,"background-selected":h,"background-field":j,"background-pane":n,"border-lead":b,"border-light":j,"border-light-shadow":m,"border-dark-shadow":f,"border-dark":l,"border-focused-light":t,"border-focused-light-shadow":s,"border-focused-dark-shadow":r,"border-focused-dark":h,"border-separator":x,"text":i,"text-disabled":f,"text-selected":j,"text-focused":a,"tooltip":z,"tooltip-text":i,"button":g,"button-hovered":q,"button-abandoned":p,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":k,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":v,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var bB=';',bA='computed=this.',bz='=value;',by='this.',bx='if(this.',bw='!==undefined)',bv='delete this.',bu="set",bt="setThemed",bs='}',bh="setRuntime",bg='else if(this.',bf="init",be='return this.',bd="string",bc="boolean",bb="resetThemed",ba='!==undefined){',Y='=true;',X="resetRuntime",bI="reset",bJ="refresh",bG='old=this.',bH='else ',bE='old=computed=this.',bF=' of an instance of ',bC='if(old===computed)return value;',bD='if(old===undefined)old=null;',bK='(value);',bL=' is not (yet) ready!");',bl='===value)return value;',bk='return init;',bn='var init=this.',bm="Error in property ",bp='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bo='.validate.call(this, value);',br='else{',bq=" in method ",bj='=computed;',bi='(backup);',m='if(computed===inherit){',n="inherit",o='if(value===undefined)prop.error(this,2,"',p='var computed, old=this.',q='else if(computed===undefined)',r="': ",s=" of class ",t='===undefined)return;',u="')){",v='else this.',bP='value=this.',bO='","',bN='if(init==qx.core.Property.$$inherit)init=null;',bM='var inherit=prop.$$inherit;',bT='var computed, old;',bS='computed=undefined;delete this.',bR='",value);',bQ='computed=value;',bV=';}',bU='){',K='if(computed===undefined||computed===inherit){',L='!==inherit){',I='(computed, old, "',J='return value;',O='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',P="if(reg.hasListener(this, '",M=')a[i].',N='.$$properties.',G="var reg=qx.event.Registration;",H='return null;',D='");',C='var pa=this.getLayoutParent();if(pa)computed=pa.',F='!==undefined&&',E="', qx.event.type.Data, [computed, old]",z='var backup=computed;',y='}else{',B="object",A='if(computed===undefined)computed=null;',x='if(a[i].',w='throw new Error("Property ',T=")}",U='var prop=qx.core.Property;',V=" with incoming value '",W='if(computed===undefined||computed==inherit)computed=null;',Q='if((computed===undefined||computed===inherit)&&',R="reg.fireEvent(this, '",S="qx.core.Property";
qx.Class.define(S,{statics:{__O:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'(typeof value === "string" || value instanceof String) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__P:{"Object":true,"Array":true,"Map":true,"Function":true,"Date":true,"Node":true,"Element":true,"Document":true,"Window":true,"Event":true,"Class":true,"Mixin":true,"Interface":true,"Theme":true,"Font":true,"Decorator":true},$$inherit:n,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bd,dispose:bc,inheritable:bc,nullable:bc,themeable:bc,refine:bc,init:null,apply:bd,event:bd,check:null,transform:bd,deferredInit:bc,validate:null},$$allowedGroupKeys:{name:bd,group:B,mode:bd,themeable:bc},$$inheritable:{},refresh:function(cF){var parent=cF.getLayoutParent();

if(parent){var cI=cF.constructor;
var cK=this.$$store.inherit;
var cJ=this.$$store.init;
var cH=this.$$method.refresh;
var cL;
var cG;
{};

while(cI){cL=cI.$$properties;

if(cL){for(var name in this.$$inheritable){if(cL[name]&&cF[cH[name]]){cG=parent[cK[name]];

if(cG===undefined){cG=parent[cJ[name]];
}{};
cF[cH[name]](cG);
}}}cI=cI.superclass;
}}},attach:function(ci){var cj=ci.$$properties;

if(cj){for(var name in cj){this.attachMethods(ci,name,cj[name]);
}}ci.$$propertiesAttached=true;
},attachMethods:function(cD,name,cE){cE.group?this.__Q(cD,cE,name):this.__R(cD,cE,name);
},__Q:function(bW,bX,name){var cf=qx.lang.String.firstUp(name);
var ce=bW.prototype;
var cg=bX.themeable===true;
{};
var ch=[];
var cb=[];

if(cg){var bY=[];
var cd=[];
}var cc="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
ch.push(cc);

if(cg){bY.push(cc);
}
if(bX.mode=="shorthand"){var ca="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
ch.push(ca);

if(cg){bY.push(ca);
}}
for(var i=0,a=bX.group,l=a.length;i<l;i++){{};
ch.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
cb.push("this.",this.$$method.reset[a[i]],"();");

if(cg){{};
bY.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
cd.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+cf;
ce[this.$$method.set[name]]=new Function(ch.join(""));
this.$$method.reset[name]="reset"+cf;
ce[this.$$method.reset[name]]=new Function(cb.join(""));

if(cg){this.$$method.setThemed[name]="setThemed"+cf;
ce[this.$$method.setThemed[name]]=new Function(bY.join(""));
this.$$method.resetThemed[name]="resetThemed"+cf;
ce[this.$$method.resetThemed[name]]=new Function(cd.join(""));
}},__R:function(cU,cV,name){var cX=qx.lang.String.firstUp(name);
var da=cU.prototype;
{};
if(cV.dispose===undefined&&typeof cV.check==="string"){cV.dispose=this.__P[cV.check]||qx.Class.isDefined(cV.check)||qx.Interface.isDefined(cV.check);
}var cY=this.$$method;
var cW=this.$$store;
cW.runtime[name]="$$runtime_"+name;
cW.user[name]="$$user_"+name;
cW.theme[name]="$$theme_"+name;
cW.init[name]="$$init_"+name;
cW.inherit[name]="$$inherit_"+name;
cW.useinit[name]="$$useinit_"+name;
cY.get[name]="get"+cX;
da[cY.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cU,name,"get");
};
cY.set[name]="set"+cX;
da[cY.set[name]]=function(k){return qx.core.Property.executeOptimizedSetter(this,cU,name,"set",arguments);
};
cY.reset[name]="reset"+cX;
da[cY.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cU,name,"reset");
};

if(cV.inheritable||cV.apply||cV.event||cV.deferredInit){cY.init[name]="init"+cX;
da[cY.init[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,cU,name,"init",arguments);
};
}
if(cV.inheritable){cY.refresh[name]="refresh"+cX;
da[cY.refresh[name]]=function(cr){return qx.core.Property.executeOptimizedSetter(this,cU,name,"refresh",arguments);
};
}cY.setRuntime[name]="setRuntime"+cX;
da[cY.setRuntime[name]]=function(j){return qx.core.Property.executeOptimizedSetter(this,cU,name,"setRuntime",arguments);
};
cY.resetRuntime[name]="resetRuntime"+cX;
da[cY.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cU,name,"resetRuntime");
};

if(cV.themeable){cY.setThemed[name]="setThemed"+cX;
da[cY.setThemed[name]]=function(cM){return qx.core.Property.executeOptimizedSetter(this,cU,name,"setThemed",arguments);
};
cY.resetThemed[name]="resetThemed"+cX;
da[cY.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cU,name,"resetThemed");
};
}
if(cV.check==="Boolean"){da["toggle"+cX]=new Function("return this."+cY.set[name]+"(!this."+cY.get[name]+"())");
da["is"+cX]=new Function("return this."+cY.get[name]+"()");
}},__S:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(cN,cO,cP,cQ,cR){var cS=cN.constructor.classname;
var cT=bm+cP+s+cS+bq+this.$$method[cQ][cP]+V+cR+r;
throw new Error(cT+(this.__S[cO]||"Unknown reason: "+cO));
},__T:function(c,d,name,e,f,g){var h=this.$$method[e][name];
{d[h]=new Function("value",f.join(""));
};
{};
if(g===undefined){return c[h]();
}else{return c[h](g[0]);
}},executeOptimizedGetter:function(ck,cl,name,cm){var co=cl.$$properties[name];
var cq=cl.prototype;
var cn=[];
var cp=this.$$store;
cn.push(bx,cp.runtime[name],bw);
cn.push(be,cp.runtime[name],bB);

if(co.inheritable){cn.push(bg,cp.inherit[name],bw);
cn.push(be,cp.inherit[name],bB);
cn.push(bH);
}cn.push(bx,cp.user[name],bw);
cn.push(be,cp.user[name],bB);

if(co.themeable){cn.push(bg,cp.theme[name],bw);
cn.push(be,cp.theme[name],bB);
}
if(co.deferredInit&&co.init===undefined){cn.push(bg,cp.init[name],bw);
cn.push(be,cp.init[name],bB);
}cn.push(bH);

if(co.init!==undefined){if(co.inheritable){cn.push(bn,cp.init[name],bB);

if(co.nullable){cn.push(bN);
}else if(co.init!==undefined){cn.push(be,cp.init[name],bB);
}else{cn.push(O,name,bF,cl.classname,bL);
}cn.push(bk);
}else{cn.push(be,cp.init[name],bB);
}}else if(co.inheritable||co.nullable){cn.push(H);
}else{cn.push(w,name,bF,cl.classname,bL);
}return this.__T(ck,cq,name,cm,cn);
},executeOptimizedSetter:function(cs,ct,name,cu,cv){var cB=ct.$$properties[name];
var cA=ct.prototype;
var cx=[];
var cw=cu===bu||cu===bt||cu===bh||(cu===bf&&cB.init===undefined);
var cy=cu===bI||cu===bb||cu===X;
var cz=cB.apply||cB.event||cB.inheritable;

if(cu===bh||cu===X){var cC=this.$$store.runtime[name];
}else if(cu===bt||cu===bb){var cC=this.$$store.theme[name];
}else if(cu===bf){var cC=this.$$store.init[name];
}else{var cC=this.$$store.user[name];
}{if(!cB.nullable||cB.check||cB.inheritable){cx.push(U);
}if(cu===bu){cx.push(o,name,bO,cu,bR);
}};
if(cw){if(cB.transform){cx.push(bP,cB.transform,bK);
}if(cB.validate){if(typeof cB.validate===bd){cx.push(by,cB.validate,bK);
}else if(cB.validate instanceof Function){cx.push(ct.classname,N,name);
cx.push(bo);
}}}if(cz){if(cw){cx.push(bx,cC,bl);
}else if(cy){cx.push(bx,cC,t);
}}if(cB.inheritable){cx.push(bM);
}{};

if(!cz){if(cu===bh){cx.push(by,this.$$store.runtime[name],bz);
}else if(cu===X){cx.push(bx,this.$$store.runtime[name],bw);
cx.push(bv,this.$$store.runtime[name],bB);
}else if(cu===bu){cx.push(by,this.$$store.user[name],bz);
}else if(cu===bI){cx.push(bx,this.$$store.user[name],bw);
cx.push(bv,this.$$store.user[name],bB);
}else if(cu===bt){cx.push(by,this.$$store.theme[name],bz);
}else if(cu===bb){cx.push(bx,this.$$store.theme[name],bw);
cx.push(bv,this.$$store.theme[name],bB);
}else if(cu===bf&&cw){cx.push(by,this.$$store.init[name],bz);
}}else{if(cB.inheritable){cx.push(p,this.$$store.inherit[name],bB);
}else{cx.push(bT);
}cx.push(bx,this.$$store.runtime[name],ba);

if(cu===bh){cx.push(bA,this.$$store.runtime[name],bz);
}else if(cu===X){cx.push(bv,this.$$store.runtime[name],bB);
cx.push(bx,this.$$store.user[name],bw);
cx.push(bA,this.$$store.user[name],bB);
cx.push(bg,this.$$store.theme[name],bw);
cx.push(bA,this.$$store.theme[name],bB);
cx.push(bg,this.$$store.init[name],ba);
cx.push(bA,this.$$store.init[name],bB);
cx.push(by,this.$$store.useinit[name],Y);
cx.push(bs);
}else{cx.push(bE,this.$$store.runtime[name],bB);
if(cu===bu){cx.push(by,this.$$store.user[name],bz);
}else if(cu===bI){cx.push(bv,this.$$store.user[name],bB);
}else if(cu===bt){cx.push(by,this.$$store.theme[name],bz);
}else if(cu===bb){cx.push(bv,this.$$store.theme[name],bB);
}else if(cu===bf&&cw){cx.push(by,this.$$store.init[name],bz);
}}cx.push(bs);
cx.push(bg,this.$$store.user[name],ba);

if(cu===bu){if(!cB.inheritable){cx.push(bG,this.$$store.user[name],bB);
}cx.push(bA,this.$$store.user[name],bz);
}else if(cu===bI){if(!cB.inheritable){cx.push(bG,this.$$store.user[name],bB);
}cx.push(bv,this.$$store.user[name],bB);
cx.push(bx,this.$$store.runtime[name],bw);
cx.push(bA,this.$$store.runtime[name],bB);
cx.push(bx,this.$$store.theme[name],bw);
cx.push(bA,this.$$store.theme[name],bB);
cx.push(bg,this.$$store.init[name],ba);
cx.push(bA,this.$$store.init[name],bB);
cx.push(by,this.$$store.useinit[name],Y);
cx.push(bs);
}else{if(cu===bh){cx.push(bA,this.$$store.runtime[name],bz);
}else if(cB.inheritable){cx.push(bA,this.$$store.user[name],bB);
}else{cx.push(bE,this.$$store.user[name],bB);
}if(cu===bt){cx.push(by,this.$$store.theme[name],bz);
}else if(cu===bb){cx.push(bv,this.$$store.theme[name],bB);
}else if(cu===bf&&cw){cx.push(by,this.$$store.init[name],bz);
}}cx.push(bs);
if(cB.themeable){cx.push(bg,this.$$store.theme[name],ba);

if(!cB.inheritable){cx.push(bG,this.$$store.theme[name],bB);
}
if(cu===bh){cx.push(bA,this.$$store.runtime[name],bz);
}else if(cu===bu){cx.push(bA,this.$$store.user[name],bz);
}else if(cu===bt){cx.push(bA,this.$$store.theme[name],bz);
}else if(cu===bb){cx.push(bv,this.$$store.theme[name],bB);
cx.push(bx,this.$$store.init[name],ba);
cx.push(bA,this.$$store.init[name],bB);
cx.push(by,this.$$store.useinit[name],Y);
cx.push(bs);
}else if(cu===bf){if(cw){cx.push(by,this.$$store.init[name],bz);
}cx.push(bA,this.$$store.theme[name],bB);
}else if(cu===bJ){cx.push(bA,this.$$store.theme[name],bB);
}cx.push(bs);
}cx.push(bg,this.$$store.useinit[name],bU);

if(!cB.inheritable){cx.push(bG,this.$$store.init[name],bB);
}
if(cu===bf){if(cw){cx.push(bA,this.$$store.init[name],bz);
}else{cx.push(bA,this.$$store.init[name],bB);
}}else if(cu===bu||cu===bh||cu===bt||cu===bJ){cx.push(bv,this.$$store.useinit[name],bB);

if(cu===bh){cx.push(bA,this.$$store.runtime[name],bz);
}else if(cu===bu){cx.push(bA,this.$$store.user[name],bz);
}else if(cu===bt){cx.push(bA,this.$$store.theme[name],bz);
}else if(cu===bJ){cx.push(bA,this.$$store.init[name],bB);
}}cx.push(bs);
if(cu===bu||cu===bh||cu===bt||cu===bf){cx.push(br);

if(cu===bh){cx.push(bA,this.$$store.runtime[name],bz);
}else if(cu===bu){cx.push(bA,this.$$store.user[name],bz);
}else if(cu===bt){cx.push(bA,this.$$store.theme[name],bz);
}else if(cu===bf){if(cw){cx.push(bA,this.$$store.init[name],bz);
}else{cx.push(bA,this.$$store.init[name],bB);
}cx.push(by,this.$$store.useinit[name],Y);
}cx.push(bs);
}}
if(cB.inheritable){cx.push(K);

if(cu===bJ){cx.push(bQ);
}else{cx.push(C,this.$$store.inherit[name],bB);
}cx.push(Q);
cx.push(by,this.$$store.init[name],F);
cx.push(by,this.$$store.init[name],L);
cx.push(bA,this.$$store.init[name],bB);
cx.push(by,this.$$store.useinit[name],Y);
cx.push(y);
cx.push(bv,this.$$store.useinit[name],bV);
cx.push(bs);
cx.push(bC);
cx.push(m);
cx.push(bS,this.$$store.inherit[name],bB);
cx.push(bs);
cx.push(q);
cx.push(bv,this.$$store.inherit[name],bB);
cx.push(v,this.$$store.inherit[name],bj);
cx.push(z);
cx.push(bD);
cx.push(W);
}else if(cz){if(cu!==bu&&cu!==bh&&cu!==bt){cx.push(A);
}cx.push(bC);
cx.push(bD);
}if(cz){if(cB.apply){cx.push(by,cB.apply,I,name,D);
}if(cB.event){cx.push(G,P,cB.event,u,R,cB.event,E,T);
}if(cB.inheritable&&cA._getChildren){cx.push(bp);
cx.push(x,this.$$method.refresh[name],M,this.$$method.refresh[name],bi);
cx.push(bs);
}}if(cw){cx.push(J);
}return this.__T(cs,cA,name,cu,cx,cv);
}},settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var h="$$hash",g="qx.core.ObjectRegistry";
qx.Bootstrap.define(g,{statics:{inShutDown:false,__U:{},__V:0,__W:[],register:function(p){var s=this.__U;

if(!s){return;
}var r=p.$$hash;

if(r==null){var q=this.__W;

if(q.length>0){r=q.pop();
}else{r=(this.__V++).toString(36);
}p.$$hash=r;
}{};
s[r]=p;
},unregister:function(u){var v=u.$$hash;

if(v==null){return;
}var w=this.__U;

if(w&&w[v]){delete w[v];
this.__W.push(v);
}try{delete u.$$hash;
}catch(t){if(u.removeAttribute){u.removeAttribute(h);
}}},toHashCode:function(j){{};
var m=j.$$hash;

if(m!=null){return m;
}var k=this.__W;

if(k.length>0){m=k.pop();
}else{m=(this.__V++).toString(36);
}return j.$$hash=m;
},clearHashCode:function(x){{};
var y=x.$$hash;

if(y!=null){this.__W.push(y);
try{delete x.$$hash;
}catch(o){if(x.removeAttribute){x.removeAttribute(h);
}}}},fromHashCode:function(z){return this.__U[z]||null;
},shutdown:function(){this.inShutDown=true;
var d=this.__U;
var f=[];

for(var e in d){f.push(e);
}f.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var c,i=0,l=f.length;

while(true){try{for(;i<l;i++){e=f[i];
c=d[e];

if(c&&c.dispose){c.dispose();
}}}catch(n){qx.log.Logger.error(this,"Could not dispose object "+c.toString()+": "+n);

if(i!==0){continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__U;
},getRegistry:function(){return this.__U;
}}});
})();
(function(){var g="qx.Mixin",f="]",e="Mixin",d="[Mixin ";
qx.Class.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}{};
var k=h.statics?h.statics:{};

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
}}else{var k={};
}k.$$type=e;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
},checkCompatibility:function(o){var r=this.flatten(o);
var s=r.length;

if(s<2){return true;
}var v={};
var u={};
var t={};
var q;

for(var i=0;i<s;i++){q=r[i];

for(var p in q.events){if(t[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+t[p]+'" in member "'+p+'"!');
}t[p]=q.name;
}
for(var p in q.properties){if(v[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+v[p]+'" in property "'+p+'"!');
}v[p]=q.name;
}
for(var p in q.members){if(u[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+u[p]+'" in member "'+p+'"!');
}u[p]=q.name;
}}return true;
},isCompatible:function(a,b){var c=qx.Class.getMixins(b);
c.push(a);
return qx.Mixin.checkCompatibility(c);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$includes){n.push.apply(n,this.flatten(m[i].$$includes));
}}return n;
},genericToString:function(){return d+this.name+f;
},$$registry:{},__Y:null,__ba:function(){}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var i="qx.client",h="on",g="qx.bom.Event",f="mousedown",d="mouseover";
qx.Bootstrap.define(g,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(j,k,l){j.attachEvent(h+k,l);
},"default":function(a,b,c){a.addEventListener(b,c,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(q,r,s){q.detachEvent(h+r,s);
},"default":function(m,n,o){m.removeEventListener(n,o,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===d){return e.fromEvent;
}else{return e.toElement;
}},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();

try{e.keyCode=0;
}catch(t){}},"mshtml":function(e){try{e.keyCode=0;
}catch(p){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
}}});
})();
(function(){var U="|bubble",T="|capture",S="|",R="_",Q="unload",P="UNKNOWN_",O="DOM_",N="c",M="WIN_",L="capture",J="qx.event.Manager",K="QX_";
qx.Bootstrap.define(J,{construct:function(bB){this.__C=bB;
this.__D=qx.lang.Function.bind(this.dispose,this);
qx.bom.Event.addNativeListener(bB,Q,this.__D);
this.__E={};
this.__F={};
this.__G={};
this.__H={};
},statics:{__I:0,getNextUniqueId:function(){return (this.__I++).toString(36);
}},members:{dispose:function(){qx.bom.Event.removeNativeListener(this.__C,Q,this.__D);
qx.event.Registration.removeManager(this);
this.__E=this.__C=this.__F=this.__G=this.__D=this.__H=null;
},getWindow:function(){return this.__C;
},getHandler:function(bj){var bk=this.__F[bj.classname];

if(bk){return bk;
}return this.__F[bj.classname]=new bj(this);
},getDispatcher:function(ce){var cf=this.__G[ce.classname];

if(cf){return cf;
}return this.__G[ce.classname]=new ce(this);
},getListeners:function(bL,bM,bN){var bO=bL.$$hash||qx.core.ObjectRegistry.toHashCode(bL);
var bQ=this.__E[bO];

if(!bQ){return null;
}var bR=bM+(bN?T:U);
var bP=bQ[bR];
return bP?bP.concat():null;
},serializeListeners:function(z){var G=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);
var I=this.__E[G];
var E=[];

if(I){var C,H,A,D,F;

for(var B in I){C=B.indexOf(S);
H=B.substring(0,C);
A=B.charAt(C+1)==N;
D=I[B];

for(var i=0,l=D.length;i<l;i++){F=D[i];
E.push({self:F.context,handler:F.handler,type:H,capture:A});
}}}return E;
},toggleAttachedEvents:function(bC,bD){var bI=bC.$$hash||qx.core.ObjectRegistry.toHashCode(bC);
var bK=this.__E[bI];

if(bK){var bF,bJ,bE,bG;

for(var bH in bK){bF=bH.indexOf(S);
bJ=bH.substring(0,bF);
bE=bH.charCodeAt(bF+1)===99;
bG=bK[bH];

if(bD){this.__J(bC,bJ,bE);
}else{this.__K(bC,bJ,bE);
}}}},hasListener:function(ck,cl,cm){{};
var cn=ck.$$hash||qx.core.ObjectRegistry.toHashCode(ck);
var cp=this.__E[cn];

if(!cp){return false;
}var cq=cl+(cm?T:U);
var co=cp[cq];
return co&&co.length>0;
},importListeners:function(bl,bm){{};
var bs=bl.$$hash||qx.core.ObjectRegistry.toHashCode(bl);
var bt=this.__E[bs]={};
var bp=qx.event.Manager;

for(var bn in bm){var bq=bm[bn];
var br=bq.type+(bq.capture?T:U);
var bo=bt[br];

if(!bo){bo=bt[br]=[];
this.__J(bl,bq.type,bq.capture);
}bo.push({handler:bq.listener,context:bq.self,unique:bq.unique||(bp.__I++).toString(36)});
}},addListener:function(o,p,q,self,r){var v;
var w=o.$$hash||qx.core.ObjectRegistry.toHashCode(o);
var y=this.__E[w];

if(!y){y=this.__E[w]={};
}var u=p+(r?T:U);
var t=y[u];

if(!t){t=y[u]=[];
}if(t.length===0){this.__J(o,p,r);
}var x=(qx.event.Manager.__I++).toString(36);
var s={handler:q,context:self,unique:x};
t.push(s);
return u+S+x;
},findHandler:function(V,W){var bh=false,ba=false,bi=false;
var bg;

if(V.nodeType===1){bh=true;
bg=O+V.tagName.toLowerCase()+R+W;
}else if(V==this.__C){ba=true;
bg=M+W;
}else if(V.classname){bi=true;
bg=K+V.classname+R+W;
}else{bg=P+V+R+W;
}var bc=this.__H;

if(bc[bg]){return bc[bg];
}var bf=qx.event.Registration.getHandlers();
var bb=qx.event.IEventHandler;
var bd,be,Y,X;

for(var i=0,l=bf.length;i<l;i++){bd=bf[i];
Y=bd.SUPPORTED_TYPES;

if(Y&&!Y[W]){continue;
}X=bd.TARGET_CHECK;

if(X){if(!bh&&X===bb.TARGET_DOMNODE){continue;
}else if(!ba&&X===bb.TARGET_WINDOW){continue;
}else if(!bi&&X===bb.TARGET_OBJECT){continue;
}}be=this.getHandler(bf[i]);

if(bd.IGNORE_CAN_HANDLE||be.canHandleEvent(V,W)){bc[bg]=be;
return be;
}}return null;
},__J:function(cg,ch,ci){var cj=this.findHandler(cg,ch);

if(cj){cj.registerEvent(cg,ch,ci);
return;
}{};
},removeListener:function(cr,cs,ct,self,cu){var cy;
var cz=cr.$$hash||qx.core.ObjectRegistry.toHashCode(cr);
var cA=this.__E[cz];

if(!cA){return false;
}var cv=cs+(cu?T:U);
var cw=cA[cv];

if(!cw){return false;
}var cx;

for(var i=0,l=cw.length;i<l;i++){cx=cw[i];

if(cx.handler===ct&&cx.context===self){qx.lang.Array.removeAt(cw,i);

if(cw.length==0){this.__K(cr,cs,cu);
}return true;
}}return false;
},removeListenerById:function(a,b){var h;
var f=b.split(S);
var m=f[0];
var c=f[1].charCodeAt(0)==99;
var k=f[2];
var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var n=this.__E[j];

if(!n){return false;
}var g=m+(c?T:U);
var e=n[g];

if(!e){return false;
}var d;

for(var i=0,l=e.length;i<l;i++){d=e[i];

if(d.unique===k){qx.lang.Array.removeAt(e,i);

if(e.length==0){this.__K(a,m,c);
}return true;
}}return false;
},removeAllListeners:function(bW){var cb=bW.$$hash||qx.core.ObjectRegistry.toHashCode(bW);
var cd=this.__E[cb];

if(!cd){return false;
}var bY,cc,bX;

for(var ca in cd){if(cd[ca].length>0){bY=ca.split(S);
cc=bY[0];
bX=bY[1]===L;
this.__K(bW,cc,bX);
}}delete this.__E[cb];
return true;
},__K:function(bS,bT,bU){var bV=this.findHandler(bS,bT);

if(bV){bV.unregisterEvent(bS,bT,bU);
return;
}{};
},dispatchEvent:function(bu,event){var bz;
var bA=event.getType();

if(!event.getBubbles()&&!this.hasListener(bu,bA)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bu);
}var by=qx.event.Registration.getDispatchers();
var bx;
var bw=false;

for(var i=0,l=by.length;i<l;i++){bx=this.getDispatcher(by[i]);
if(bx.canDispatchEvent(bu,event,bA)){bx.dispatchEvent(bu,event,bA);
bw=true;
break;
}}
if(!bw){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bA+" on "+bu);
return true;
}var bv=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bv;
}}});
})();
(function(){var h="qx.dom.Node",g="qx.client",f="";
qx.Class.define(h,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(n){return n.nodeType===
this.DOCUMENT?n:
n.ownerDocument||n.document;
},getWindow:qx.core.Variant.select(g,{"mshtml":function(k){if(k.nodeType==null){return k;
}if(k.nodeType!==this.DOCUMENT){k=k.ownerDocument;
}return k.parentWindow;
},"default":function(e){if(e.nodeType==null){return e;
}if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;
}return e.defaultView;
}}),getDocumentElement:function(p){return this.getDocument(p).documentElement;
},getBodyElement:function(m){return this.getDocument(m).body;
},isNode:function(l){return !!(l&&l.nodeType!=null);
},isElement:function(o){return !!(o&&o.nodeType===this.ELEMENT);
},isDocument:function(q){return !!(q&&q.nodeType===this.DOCUMENT);
},isText:function(j){return !!(j&&j.nodeType===this.TEXT);
},isWindow:function(b){return !!(b&&b.history&&b.location&&b.document);
},getText:function(c){if(!c||!c.nodeType){return null;
}
switch(c.nodeType){case 1:var i,a=[],d=c.childNodes,length=d.length;

for(i=0;i<length;i++){a[i]=this.getText(d[i]);
}return a.join(f);
case 2:return c.nodeValue;
break;
case 3:return c.nodeValue;
break;
}return null;
}}});
})();
(function(){var t="mshtml",s="[object Array]",r="qx.client",q="qx.lang.Array",p="qx",o="number",n="Use the native Array access instead: arr[arr.length - 1]",m="Use the native Array access instead: arr[0]",k="string",j="Use 'clone()' instead!";
qx.Bootstrap.define(q,{statics:{isArray:function(X){return Object.prototype.toString.call(X)===s||X instanceof Array;
},toArray:function(C,D){return this.cast(C,Array,D);
},cast:function(bm,bn,bo){if(bm.constructor===bn){return bm;
}
if(qx.Class.hasInterface(bm,qx.data.IListData)){var bm=bm.toArray();
}var bp=new bn;
if(qx.core.Variant.isSet(r,t)){if(bm.item){for(var i=bo||0,l=bm.length;i<l;i++){bp.push(bm[i]);
}return bp;
}}if(Object.prototype.toString.call(bm)===s&&bo==null){bp.push.apply(bp,bm);
}else{bp.push.apply(bp,Array.prototype.slice.call(bm,bo||0));
}return bp;
},fromArguments:function(bc,bd){return Array.prototype.slice.call(bc,bd||0);
},fromCollection:function(f){if(qx.core.Variant.isSet(r,t)){if(f.item){var g=[];

for(var i=0,l=f.length;i<l;i++){g[i]=f[i];
}return g;
}}return Array.prototype.slice.call(f,0);
},fromShortHand:function(bs){var bu=bs.length;
var bt=qx.lang.Array.clone(bs);
switch(bu){case 1:bt[1]=bt[2]=bt[3]=bt[0];
break;
case 2:bt[2]=bt[0];
case 3:bt[3]=bt[1];
}return bt;
},copy:function(bl){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return qx.lang.Array.clone(bl);
},clone:function(R){return R.concat();
},getLast:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return a[a.length-1];
},getFirst:function(h){qx.log.Logger.deprecatedMethodWarning(arguments.callee,m);
return h[0];
},insertAt:function(b,c,i){b.splice(i,0,c);
return b;
},insertBefore:function(Y,ba,bb){var i=Y.indexOf(bb);

if(i==-1){Y.push(ba);
}else{Y.splice(i,0,ba);
}return Y;
},insertAfter:function(z,A,B){var i=z.indexOf(B);

if(i==-1||i==(z.length-1)){z.push(A);
}else{z.splice(i+1,0,A);
}return z;
},removeAt:function(x,i){return x.splice(i,1)[0];
},removeAll:function(y){y.length=0;
return this;
},append:function(bf,bg){{};
Array.prototype.push.apply(bf,bg);
return bf;
},exclude:function(bh,bi){{};

for(var i=0,bk=bi.length,bj;i<bk;i++){bj=bh.indexOf(bi[i]);

if(bj!=-1){bh.splice(bj,1);
}}return bh;
},remove:function(d,e){var i=d.indexOf(e);

if(i!=-1){d.splice(i,1);
return e;
}},contains:function(bq,br){return bq.indexOf(br)!==-1;
},equals:function(S,T){var length=S.length;

if(length!==T.length){return false;
}
for(var i=0;i<length;i++){if(S[i]!==T[i]){return false;
}}return true;
},sum:function(U){var V=0;

for(var i=0,l=U.length;i<l;i++){V+=U[i];
}return V;
},max:function(bv){{};
var i,bx=bv.length,bw=bv[0];

for(i=1;i<bx;i++){if(bv[i]>bw){bw=bv[i];
}}return bw===undefined?null:bw;
},min:function(u){{};
var i,w=u.length,v=u[0];

for(i=1;i<w;i++){if(u[i]<v){v=u[i];
}}return v===undefined?null:v;
},unique:function(E){var O=[],G={},J={},L={};
var K,F=0;
var P=p+qx.lang.Date.now();
var H=false,N=false,Q=false;
for(var i=0,M=E.length;i<M;i++){K=E[i];
if(K===null){if(!H){H=true;
O.push(K);
}}else if(K===false){if(!N){N=true;
O.push(K);
}}else if(K===true){if(!Q){Q=true;
O.push(K);
}}else if(typeof K===k){if(!G[K]){G[K]=1;
O.push(K);
}}else if(typeof K===o){if(!J[K]){J[K]=1;
O.push(K);
}}else{I=K[P];

if(I==null){I=K[P]=F++;
}
if(!L[I]){L[I]=K;
O.push(K);
}}}for(var I in L){try{delete L[I][P];
}catch(W){try{L[I][P]=null;
}catch(be){throw new Error("Cannot clean-up map entry doneObjects["+I+"]["+P+"]");
}}}return O;
}}});
})();
(function(){var k=":",j=":constructor",i='anonymous',h="anonymous: ",g="qx.lang.Function",f="[object Function]",e=":constructor wrapper";
qx.Bootstrap.define(g,{statics:{isFunction:function(G){return Object.prototype.toString.call(G)===f;
},getCaller:function(E){return E.caller?E.caller.callee:E.callee.caller;
},getName:function(x){if(x.$$original){return x.classname+e;
}
if(x.wrapper){return x.wrapper.classname+j;
}
if(x.classname){return x.classname+j;
}
if(x.$$mixin){for(var z in x.$$mixin.$$members){if(x.$$mixin.$$members[z]==x){return x.$$mixin.name+k+z;
}}for(var z in x.$$mixin){if(x.$$mixin[z]==x){return x.$$mixin.name+k+z;
}}}
if(x.self){var A=x.self.constructor;

if(A){for(var z in A.prototype){if(A.prototype[z]==x){return A.classname+k+z;
}}for(var z in A){if(A[z]==x){return A.classname+k+z;
}}}}var y=x.toString().match(/(function\s*\w*\(.*?\))/);

if(y&&y.length>=1&&y[1]){return y[1];
}var y=x.toString().match(/(function\s*\(.*?\))/);

if(y&&y.length>=1&&y[1]){return h+y[1];
}return i;
},globalEval:function(F){if(window.execScript){return window.execScript(F);
}else{return eval.call(window,F);
}},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(v,w){{};
if(!w){return v;
}if(!(w.self||w.args||w.delay!=null||w.periodical!=null||w.attempt)){return v;
}return function(event){var b=qx.lang.Array.fromArguments(arguments);
if(w.args){b=w.args.concat(b);
}
if(w.delay||w.periodical){var a=function(){return v.apply(w.self||this,b);
};

if(w.delay){return setTimeout(a,w.delay);
}
if(w.periodical){return setInterval(a,w.periodical);
}}else if(w.attempt){var c=false;

try{c=v.apply(w.self||this,b);
}catch(H){}return c;
}else{return v.apply(w.self||this,b);
}};
},bind:function(r,self,s){return this.create(r,{self:self,args:s!==undefined?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(I,J){return this.create(I,{args:J!==undefined?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(o,self,p){if(p===undefined){return function(event){return o.call(self||this,event||window.event);
};
}else{var q=qx.lang.Array.fromArguments(arguments,2);
return function(event){var d=[event||window.event];
d.push.apply(d,q);
o.apply(self||this,d);
};
}},attempt:function(t,self,u){return this.create(t,{self:self,attempt:true,args:u!==undefined?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(l,m,self,n){return this.create(l,{delay:m,self:self,args:n!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(B,C,self,D){return this.create(B,{periodical:C,self:self,args:D!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var x="qx.event.Registration";
qx.Bootstrap.define(x,{statics:{__L:{},getManager:function(y){if(y==null){{};
y=window;
}else if(y.nodeType){y=qx.dom.Node.getWindow(y);
}else if(!qx.dom.Node.isWindow(y)){y=window;
}var A=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var z=this.__L[A];

if(!z){z=new qx.event.Manager(y);
this.__L[A]=z;
}return z;
},removeManager:function(C){var D=qx.core.ObjectRegistry.toHashCode(C.getWindow());
delete this.__L[D];
},addListener:function(n,o,p,self,q){return this.getManager(n).addListener(n,o,p,self,q);
},removeListener:function(r,s,t,self,u){return this.getManager(r).removeListener(r,s,t,self,u);
},removeListenerById:function(i,j){return this.getManager(i).removeListenerById(i,j);
},removeAllListeners:function(v){return this.getManager(v).removeAllListeners(v);
},hasListener:function(k,l,m){return this.getManager(k).hasListener(k,l,m);
},serializeListeners:function(G){return this.getManager(G).serializeListeners(G);
},createEvent:function(H,I,J){{};
if(I==null){I=qx.event.type.Event;
}var K=qx.event.Pool.getInstance().getObject(I);

if(!K){return;
}J?K.init.apply(K,J):K.init();
if(H){K.setType(H);
}return K;
},dispatchEvent:function(w,event){return this.getManager(w).dispatchEvent(w,event);
},fireEvent:function(c,d,e,f){var g;
var h=this.createEvent(d,e||null,f);
return this.getManager(c).dispatchEvent(c,h);
},fireNonBubblingEvent:function(L,M,N,O){{};
var P=this.getManager(L);

if(!P.hasListener(L,M,false)){return true;
}var Q=this.createEvent(M,N||null,O);
return P.dispatchEvent(L,Q);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__M:[],addHandler:function(B){{};
this.__M.push(B);
this.__M.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__M;
},__N:[],addDispatcher:function(E,F){{};
this.__N.push(E);
this.__N.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__N;
}}});
})();
(function(){var A="node",z="error",y="...(+",x="array",w=")",v="info",u="instance",t="string",s="null",r="class",V="number",U="stringify",T="]",S="unknown",R="function",Q="boolean",P="debug",O="map",N="undefined",M="qx.log.Logger",H=")}",I="#",F="warn",G="document",D="{...(",E="[",B="text[",C="[...(",J="\n",K=")]",L="object";
qx.Bootstrap.define(M,{statics:{__bb:50,__bc:P,setLevel:function(bk){this.__bc=bk;
},getLevel:function(){return this.__bc;
},setTreshold:function(bw){this.__bb=bw;
},getTreshold:function(){return this.__bb;
},__bd:{},__be:0,register:function(j){if(j.$$id){return;
}var m=this.__be++;
this.__bd[m]=j;
j.$$id=m;
var k=this.__bf;

for(var i=0,l=k.length;i<l;i++){j.process(k[i]);
}},unregister:function(by){var bz=by.$$id;

if(bz==null){return;
}delete this.__bd[bz];
delete by.$$id;
},debug:function(bq,br){this.__bh(P,arguments);
},info:function(bl,bm){this.__bh(v,arguments);
},warn:function(p,q){this.__bh(F,arguments);
},error:function(W,X){this.__bh(z,arguments);
},trace:function(bx){this.__bh(v,[bx,qx.dev.StackTrace.getStackTrace().join(J)]);
},deprecatedMethodWarning:function(bs,bt){var bv,bu;
},deprecatedClassWarning:function(bn,bo){var bp;
},clear:function(){this.__bf=[];
},__bf:[],__bg:{debug:0,info:1,warn:2,error:3},__bh:function(Y,ba){var bf=this.__bg;

if(bf[Y]<bf[this.__bc]){return;
}var bc=ba.length<2?null:ba[0];
var be=bc?1:0;
var bb=[];

for(var i=be,l=ba.length;i<l;i++){bb.push(this.__bj(ba[i],true));
}var bh=new Date;
var bi={time:bh,offset:bh-qx.Bootstrap.LOADSTART,level:Y,items:bb,win:window};
if(bc){if(bc instanceof qx.core.Object){bi.object=bc.$$hash;
}else if(bc.$$type){bi.clazz=bc;
}}var bg=this.__bf;
bg.push(bi);

if(bg.length>(this.__bb+10)){bg.splice(this.__bb,bg.length);
}var bj=this.__bd;

for(var bd in bj){bj[bd].process(bi);
}},__bi:function(n){if(n===undefined){return N;
}else if(n===null){return s;
}
if(n.$$type){return r;
}var o=typeof n;

if(o===R||o==t||o===V||o===Q){return o;
}else if(o===L){if(n.nodeType){return A;
}else if(n.classname){return u;
}else if(n instanceof Array){return x;
}else if(n instanceof Error){return z;
}else{return O;
}}
if(n.toString){return U;
}return S;
},__bj:function(a,b){var h=this.__bi(a);
var d=S;

switch(h){case s:case N:d=h;
break;
case t:case V:case Q:d=a;
break;
case A:if(a.nodeType===9){d=G;
}else if(a.nodeType===3){d=B+a.nodeValue+T;
}else if(a.nodeType===1){d=a.nodeName.toLowerCase();

if(a.id){d+=I+a.id;
}}else{d=A;
}break;
case R:d=qx.lang.Function.getName(a)||h;
break;
case u:d=a.basename+E+a.$$hash+T;
break;
case r:case U:case z:d=a.toString();
break;
case x:if(b){d=[];

for(var i=0,l=a.length;i<l;i++){if(d.length>20){d.push(y+(l-i)+w);
break;
}d.push(this.__bj(a[i],false));
}}else{d=C+a.length+K;
}break;
case O:if(b){var c;
var g=[];

for(var f in a){g.push(f);
}g.sort();
d=[];

for(var i=0,l=g.length;i<l;i++){if(d.length>20){d.push(y+(l-i)+w);
break;
}f=g[i];
c=this.__bj(a[f],false);
c.key=f;
d.push(c);
}}else{var e=0;

for(var f in a){e++;
}d=D+e+H;
}break;
}return {type:h,text:d};
}}});
})();
(function(){var bq="qx.core.Object",bp="__bl",bo="]",bn="[",bm="string",bl="Object";
qx.Class.define(bq,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bl},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bn+this.$$hash+bo;
},base:function(O,P){if(arguments.length===1){return O.callee.base.call(this);
}else{return O.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bA){return bA.callee.self;
},clone:function(){var k=this.constructor;
var j=new k;
var n=qx.Class.getProperties(k);
var m=qx.core.Property.$$store.user;
var o=qx.core.Property.$$method.set;
var name;
for(var i=0,l=n.length;i<l;i++){name=n[i];

if(this.hasOwnProperty(m[name])){j[o[name]](this[m[name]]);
}}return j;
},serialize:function(){var q=this.constructor;
var s=qx.Class.getProperties(q);
var t=qx.core.Property.$$store.user;
var name,p;
var r={classname:q.classname,properties:{}};
for(var i=0,l=s.length;i<l;i++){name=s[i];

if(this.hasOwnProperty(t[name])){p=this[t[name]];

if(p instanceof qx.core.Object){r.properties[name]={$$hash:p.$$hash};
}else{r.properties[name]=p;
}}}return r;
},set:function(T,U){var W=qx.core.Property.$$method.set;

if(typeof T===bm){{};
return this[W[T]](U);
}else{for(var V in T){{};
this[W[V]](T[V]);
}return this;
}},get:function(bd){var be=qx.core.Property.$$method.get;
{};
return this[be[bd]]();
},reset:function(g){var h=qx.core.Property.$$method.reset;
{};
this[h[g]]();
},__bk:qx.event.Registration,addListener:function(a,b,self,c){if(!this.$$disposed){return this.__bk.addListener(this,a,b,self,c);
}return null;
},addListenerOnce:function(X,Y,self,ba){var bb=function(e){Y.call(self||this,e);
this.removeListener(X,bb,this,ba);
};
return this.addListener(X,bb,this,ba);
},removeListener:function(bh,bi,self,bj){if(!this.$$disposed){return this.__bk.removeListener(this,bh,bi,self,bj);
}return false;
},removeListenerById:function(bc){if(!this.$$disposed){return this.__bk.removeListenerById(this,bc);
}return false;
},hasListener:function(bf,bg){return this.__bk.hasListener(this,bf,bg);
},dispatchEvent:function(z){if(!this.$$disposed){return this.__bk.dispatchEvent(this,z);
}return true;
},fireEvent:function(B,C,D){if(!this.$$disposed){return this.__bk.fireEvent(this,B,C,D);
}return true;
},fireNonBubblingEvent:function(K,L,M){if(!this.$$disposed){return this.__bk.fireNonBubblingEvent(this,K,L,M);
}return true;
},fireDataEvent:function(v,w,x,y){if(!this.$$disposed){return this.__bk.fireNonBubblingEvent(this,v,qx.event.type.Data,[w,x||null,!!y]);
}return true;
},__bl:null,setUserData:function(R,S){if(!this.__bl){this.__bl={};
}this.__bl[R]=S;
},getUserData:function(d){if(!this.__bl){return null;
}var f=this.__bl[d];
return f===undefined?null:f;
},__bm:qx.log.Logger,debug:function(Q){this.__bm.debug(this,Q);
},info:function(bk){this.__bm.info(this,bk);
},warn:function(N){this.__bm.warn(this,N);
},error:function(J){this.__bm.error(this,J);
},trace:function(){this.__bm.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
{};
var H=this.constructor;
var F;

while(H.superclass){if(H.$$destructor){H.$$destructor.call(this);
}if(H.$$includes){F=H.$$flatIncludes;

for(var i=0,l=F.length;i<l;i++){if(F[i].$$destructor){F[i].$$destructor.call(this);
}}}H=H.superclass;
}var I,G;
},_disposeFields:function(bz){qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(A){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(bB){qx.util.DisposeUtil.disposeArray(this,bB);
},_disposeMap:function(E){qx.util.DisposeUtil.disposeMap(this,E);
}},settings:{"qx.disposerDebugLevel":0},defer:function(u){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(bp);
var bt=this.constructor;
var bx;
var by=qx.core.Property.$$store;
var bv=by.user;
var bw=by.theme;
var br=by.inherit;
var bu=by.useinit;
var bs=by.init;

while(bt){bx=bt.$$properties;

if(bx){for(var name in bx){if(bx[name].dispose){this[bv[name]]=this[bw[name]]=this[br[name]]=this[bu[name]]=this[bs[name]]=undefined;
}}}bt=bt.superclass;
}}});
})();
(function(){var q="",p="g",o="0",n='\\$1',m="%",l='-',k="qx.lang.String",j=' ',h='\n',g="undefined";
qx.Bootstrap.define(k,{statics:{camelCase:function(B){return B.replace(/\-([a-z])/g,function(L,M){return M.toUpperCase();
});
},hyphenate:function(u){return u.replace(/[A-Z]/g,function(N){return (l+N.charAt(0).toLowerCase());
});
},capitalize:function(H){return H.replace(/\b[a-z]/g,function(A){return A.toUpperCase();
});
},clean:function(r){return r.replace(/\s+/g,j).trim();
},trimLeft:function(d){return d.replace(/^\s+/,q);
},trimRight:function(t){return t.replace(/\s+$/,q);
},trim:function(e){return e.replace(/^\s+|\s+$/g,q);
},startsWith:function(I,J){return I.substring(0,J.length)===J;
},endsWith:function(x,y){return x.substring(x.length-y.length,x.length)===y;
},pad:function(O,length,P){if(typeof P===g){P=o;
}var Q=q;

for(var i=O.length;i<length;i++){Q+=P;
}return Q+O;
},firstUp:function(f){return f.charAt(0).toUpperCase()+f.substr(1);
},firstLow:function(z){return z.charAt(0).toLowerCase()+z.substr(1);
},contains:function(v,w){return v.indexOf(w)!=-1;
},format:function(a,b){var c=a;

for(var i=0;i<b.length;i++){c=c.replace(new RegExp(m+(i+1),p),b[i]);
}return c;
},escapeRegexpChars:function(C){return C.replace(/([.*+?^${}()|[\]\/\\])/g,n);
},toArray:function(K){return K.split(/\B|\b/g);
},stripTags:function(s){return s.replace(/<\/?[^>]+>/gi,q);
},stripScripts:function(D,E){var G=q;
var F=D.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){G+=arguments[1]+h;
return q;
});

if(E===true){qx.lang.Function.globalEval(G);
}return F;
}}});
})();
(function(){var m="function",k="]",j="Interface",h="[Interface ",g="qx.Interface";
qx.Class.define(g,{statics:{define:function(name,x){if(x){if(x.extend&&!(x.extend instanceof Array)){x.extend=[x.extend];
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
}y.$$type=j;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
qx.Interface.$$registry[name]=y;
return y;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(a){if(!a){return [];
}var b=a.concat();

for(var i=0,l=a.length;i<l;i++){if(a[i].$$extends){b.push.apply(b,this.flatten(a[i].$$extends));
}}return b;
},__bn:function(z,A,B,C){var F=B.$$members;

if(F){for(var E in F){if(typeof F[E]===m){if(typeof z[E]===m){if(C===true&&!qx.Class.hasInterface(A,B)){z[E]=this.__bq(B,z[E],E,F[E]);
}}else{var D=E.match(/^(get|set|reset)(.*)$/);

if(!D||!qx.Class.hasProperty(A,qx.lang.String.firstLow(D[2]))){throw new Error('Implementation of method "'+E+'" is missing in class "'+A.classname+'" required by interface "'+B.name+'"');
}}}else{if(typeof z[E]===undefined){if(typeof z[E]!==m){throw new Error('Implementation of member "'+E+'" is missing in class "'+A.classname+'" required by interface "'+B.name+'"');
}}}}}},__bo:function(u,v){if(v.$$properties){for(var w in v.$$properties){if(!qx.Class.hasProperty(u,w)){throw new Error('The property "'+w+'" is not supported by Class "'+u.classname+'"!');
}}}},__bp:function(r,s){if(s.$$events){for(var t in s.$$events){if(!qx.Class.supportsEvent(r,t)){throw new Error('The event "'+t+'" is not supported by Class "'+r.classname+'"!');
}}}},assertObject:function(n,o){var q=n.constructor;
this.__bn(n,q,o,false);
this.__bo(q,o);
this.__bp(q,o);
var p=o.$$extends;

if(p){for(var i=0,l=p.length;i<l;i++){this.assertObject(n,p[i]);
}}},assert:function(c,d,e){this.__bn(c.prototype,c,d,e);
this.__bo(c,d);
this.__bp(c,d);
var f=d.$$extends;

if(f){for(var i=0,l=f.length;i<l;i++){this.assert(c,f[i],e);
}}},genericToString:function(){return h+this.name+k;
},$$registry:{},__bq:function(){},__br:null,__bs:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var p="_applyStyle",o="repeat",n="px",m="scale",l="solid",k="Color",j="double",i="px ",h="position:absolute;top:0;left:0;",g="dotted",D="_applyWidth",C="qx.ui.decoration.Uniform",B="repeat-y",A="String",z="__lp",y="",x="__lo",w="PositiveInteger",v="border:",u="dashed",s="no-repeat",t=" ",q="repeat-x",r=";";
qx.Class.define(C,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(E,F,G){arguments.callee.base.call(this);
if(E!=null){this.setWidth(E);
}
if(F!=null){this.setStyle(F);
}
if(G!=null){this.setColor(G);
}},properties:{width:{check:w,init:0,apply:D},style:{nullable:true,check:[l,g,u,j],init:l,apply:p},color:{nullable:true,check:k,apply:p},backgroundImage:{check:A,nullable:true,apply:p},backgroundRepeat:{check:[o,q,B,s,m],init:o,apply:p},backgroundColor:{check:k,nullable:true,apply:p}},members:{__lo:null,__lp:null,getMarkup:function(){if(this.__lo){return this.__lo;
}var H=h;
var I=this.getWidth();
{};
var K=qx.theme.manager.Color.getInstance();
H+=v+I+i+this.getStyle()+t+K.resolve(this.getColor())+r;
var J=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,H);
return this.__lo=J;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==m;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getWidth()*2;
b-=d;
c-=d;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+n;
a.style.height=c+n;
},tint:function(L,M){var N=qx.theme.manager.Color.getInstance();

if(M==null){M=this.getBackgroundColor();
}L.style.backgroundColor=N.resolve(M)||y;
},getInsets:function(){if(this.__lp){return this.__lp;
}var f=this.getWidth();
this.__lp={top:f,right:f,bottom:f,left:f};
return this.__lp;
},_applyWidth:function(){{};
this.__lp=null;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(x,z);
}});
})();
(function(){var z="_applyStyle",y="solid",x="Color",w="double",v="px ",u="dotted",t="_applyWidth",s="dashed",r="Number",q=" ",be=";",bd="shorthand",bc="repeat",bb="px",ba="widthTop",Y="scale",X="styleRight",W="styleBottom",V="widthLeft",U="widthBottom",G="",H="styleTop",E="colorBottom",F="styleLeft",C="widthRight",D="colorLeft",A="colorRight",B="colorTop",I="border-left:",J="position:absolute;top:0;left:0;",M="repeat-y",L="String",O="border-bottom:",N="border-right:",Q="qx.ui.decoration.Single",P="border-top:",K="__lx",T="__lw",S="no-repeat",R="repeat-x";
qx.Class.define(Q,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(k,l,m){arguments.callee.base.call(this);
if(k!=null){this.setWidth(k);
}
if(l!=null){this.setStyle(l);
}
if(m!=null){this.setColor(m);
}},properties:{widthTop:{check:r,init:0,apply:t},widthRight:{check:r,init:0,apply:t},widthBottom:{check:r,init:0,apply:t},widthLeft:{check:r,init:0,apply:t},styleTop:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleRight:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleBottom:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleLeft:{nullable:true,check:[y,u,s,w],init:y,apply:z},colorTop:{nullable:true,check:x,apply:z},colorRight:{nullable:true,check:x,apply:z},colorBottom:{nullable:true,check:x,apply:z},colorLeft:{nullable:true,check:x,apply:z},backgroundImage:{check:L,nullable:true,apply:z},backgroundRepeat:{check:[bc,R,M,S,Y],init:bc,apply:z},backgroundColor:{check:x,nullable:true,apply:z},left:{group:[V,F,D]},right:{group:[C,X,A]},top:{group:[ba,H,B]},bottom:{group:[U,W,E]},width:{group:[ba,C,U,V],mode:bd},style:{group:[H,X,W,F],mode:bd},color:{group:[B,A,E,D],mode:bd}},members:{__lw:null,__lx:null,getMarkup:function(a){if(this.__lw){return this.__lw;
}var b=qx.theme.manager.Color.getInstance();
var c=G;
var e=this.getWidthTop();

if(e>0){c+=P+e+v+this.getStyleTop()+q+b.resolve(this.getColorTop())+be;
}var e=this.getWidthRight();

if(e>0){c+=N+e+v+this.getStyleRight()+q+b.resolve(this.getColorRight())+be;
}var e=this.getWidthBottom();

if(e>0){c+=O+e+v+this.getStyleBottom()+q+b.resolve(this.getColorBottom())+be;
}var e=this.getWidthLeft();

if(e>0){c+=I+e+v+this.getStyleLeft()+q+b.resolve(this.getColorLeft())+be;
}{};
c+=J;
var d=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,c);
return this.__lw=d;
},resize:function(f,g,h){var j=this.getBackgroundImage()&&this.getBackgroundRepeat()==Y;

if(j||qx.bom.client.Feature.CONTENT_BOX){var i=this.getInsets();
g-=i.left+i.right;
h-=i.top+i.bottom;
if(g<0){g=0;
}
if(h<0){h=0;
}}f.style.width=g+bb;
f.style.height=h+bb;
},tint:function(n,o){var p=qx.theme.manager.Color.getInstance();

if(o==null){o=this.getBackgroundColor();
}n.style.backgroundColor=p.resolve(o)||G;
},getInsets:function(){if(this.__lx){return this.__lx;
}this.__lx={top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
return this.__lx;
},_applyWidth:function(){{};
this.__lx=null;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(T,K);
}});
})();
(function(){var o="px ",n=" ",m=";",l="Color",k="Number",j="border-left:",i="px",h="border-bottom:",g="border-top:",f="shorthand",G="border-right:",F="innerWidthRight",E='<div style="position:absolute;top:0;left:0;',D="innerColorBottom",C='</div>',B='',A="scale",z="__lB",y="innerColorRight",x="innerColorTop",v="innerColorLeft",w="qx.ui.decoration.Double",t="",u='">',r="__lA",s="innerWidthBottom",p="innerWidthLeft",q="innerWidthTop";
qx.Class.define(w,{extend:qx.ui.decoration.Single,construct:function(H,I,J,innerWidth,K){arguments.callee.base.call(this,H,I,J,innerWidth,K);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(K!=null){this.setInnerColor(K);
}},properties:{innerWidthTop:{check:k,init:0},innerWidthRight:{check:k,init:0},innerWidthBottom:{check:k,init:0},innerWidthLeft:{check:k,init:0},innerWidth:{group:[q,F,s,p],mode:f},innerColorTop:{nullable:true,check:l},innerColorRight:{nullable:true,check:l},innerColorBottom:{nullable:true,check:l},innerColorLeft:{nullable:true,check:l},innerColor:{group:[x,y,D,v],mode:f}},members:{__lA:null,__lB:null,getMarkup:function(){if(this.__lA){return this.__lA;
}var a=qx.theme.manager.Color.getInstance();
var d=t;
var b=this.getInnerWidthTop();

if(b>0){d+=g+b+o+this.getStyleTop()+n+a.resolve(this.getInnerColorTop())+m;
}var b=this.getInnerWidthRight();

if(b>0){d+=G+b+o+this.getStyleRight()+n+a.resolve(this.getInnerColorRight())+m;
}var b=this.getInnerWidthBottom();

if(b>0){d+=h+b+o+this.getStyleBottom()+n+a.resolve(this.getInnerColorBottom())+m;
}var b=this.getInnerWidthLeft();

if(b>0){d+=j+b+o+this.getStyleLeft()+n+a.resolve(this.getInnerColorLeft())+m;
}{};
var e=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,d);
var c=B;
var b=this.getWidthTop();

if(b>0){c+=g+b+o+this.getStyleTop()+n+a.resolve(this.getColorTop())+m;
}var b=this.getWidthRight();

if(b>0){c+=G+b+o+this.getStyleRight()+n+a.resolve(this.getColorRight())+m;
}var b=this.getWidthBottom();

if(b>0){c+=h+b+o+this.getStyleBottom()+n+a.resolve(this.getColorBottom())+m;
}var b=this.getWidthLeft();

if(b>0){c+=j+b+o+this.getStyleLeft()+n+a.resolve(this.getColorLeft())+m;
}{};
return this.__lA=E+c+u+e+C;
},resize:function(L,M,N){var P=this.getBackgroundImage()&&this.getBackgroundRepeat()==A;

if(P||qx.bom.client.Feature.CONTENT_BOX){var O=this.getInsets();
var innerWidth=M-O.left-O.right;
var innerHeight=N-O.top-O.bottom;
}else{var innerWidth=M-this.getWidthLeft()-this.getWidthRight();
var innerHeight=N-this.getWidthTop()-this.getWidthBottom();
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}L.firstChild.style.width=innerWidth+i;
L.firstChild.style.height=innerHeight+i;
},getInsets:function(){if(this.__lB){return this.__lB;
}this.__lB={top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
return this.__lB;
}},destruct:function(){this._disposeFields(r,z);
}});
})();
(function(){var n="px",m="0px",l="-1px",k="_applyInsets",j="Number",i="no-repeat",h="scale-x",g="scale-y",f="-tr",e="-l",M="insetTop",L="__lu",K='</div>',J="__ls",I="insetBottom",H="scale",G="qx.client",F="-br",E="-t",D="-tl",u="-r",v='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",t="-b",q="__lt",r="shorthand",o="String",p="insetRight",w="",x="-bl",z="__lv",y="-c",B="mshtml",A="insetLeft",C="qx.ui.decoration.Grid";
qx.Class.define(C,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(bd,be){arguments.callee.base.call(this);
if(bd!=null){this.setBaseImage(bd);
}
if(be!=null){this.setInsets(be);
}},properties:{baseImage:{check:o,nullable:true,apply:s},insetLeft:{check:j,init:0,apply:k},insetRight:{check:j,init:0,apply:k},insetBottom:{check:j,init:0,apply:k},insetTop:{check:j,init:0,apply:k},insets:{group:[M,p,I,A],mode:r}},members:{__ls:null,__lt:null,__lu:null,__lv:null,getMarkup:function(){if(this.__ls){return this.__ls;
}var W=qx.bom.element.Decoration;
var X=this.__lu;
var Y=this.__lv;
var ba=[];
ba.push(v);
ba.push(W.create(X.tl,i,{top:0,left:0}));
ba.push(W.create(X.t,h,{top:0,left:Y.left+n}));
ba.push(W.create(X.tr,i,{top:0,right:0}));
ba.push(W.create(X.bl,i,{bottom:0,left:0}));
ba.push(W.create(X.b,h,{bottom:0,left:Y.left+n}));
ba.push(W.create(X.br,i,{bottom:0,right:0}));
ba.push(W.create(X.l,g,{top:Y.top+n,left:0}));
ba.push(W.create(X.c,H,{top:Y.top+n,left:Y.left+n}));
ba.push(W.create(X.r,g,{top:Y.top+n,right:0}));
ba.push(K);
return this.__ls=ba.join(w);
},resize:function(a,b,c){var d=this.__lv;
var innerWidth=b-d.left-d.right;
var innerHeight=c-d.top-d.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}a.style.width=b+n;
a.style.height=c+n;
a.childNodes[1].style.width=innerWidth+n;
a.childNodes[4].style.width=innerWidth+n;
a.childNodes[7].style.width=innerWidth+n;
a.childNodes[6].style.height=innerHeight+n;
a.childNodes[7].style.height=innerHeight+n;
a.childNodes[8].style.height=innerHeight+n;

if(qx.core.Variant.isSet(G,B)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){if(b%2==1){a.childNodes[2].style.marginRight=l;
a.childNodes[5].style.marginRight=l;
a.childNodes[8].style.marginRight=l;
}else{a.childNodes[2].style.marginRight=m;
a.childNodes[5].style.marginRight=m;
a.childNodes[8].style.marginRight=m;
}
if(c%2==1){a.childNodes[3].style.marginBottom=l;
a.childNodes[4].style.marginBottom=l;
a.childNodes[5].style.marginBottom=l;
}else{a.childNodes[3].style.marginBottom=m;
a.childNodes[4].style.marginBottom=m;
a.childNodes[5].style.marginBottom=m;
}}}},tint:function(bb,bc){},getInsets:function(){if(this.__lt){return this.__lt;
}return this.__lt={left:this.getInsetLeft(),right:this.getInsetRight(),bottom:this.getInsetBottom(),top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__lt=null;
},_applyBaseImage:function(N,O){{};
var P=qx.util.ResourceManager;

if(N){var R=qx.util.AliasManager.getInstance();
var T=R.resolve(N);
var U=/(.*)(\.[a-z]+)$/.exec(T);
var S=U[1];
var Q=U[2];
var V=this.__lu={tl:S+D+Q,t:S+E+Q,tr:S+f+Q,bl:S+x+Q,b:S+t+Q,br:S+F+Q,l:S+e+Q,c:S+y+Q,r:S+u+Q};
this.__lv={top:P.getImageHeight(V.t),bottom:P.getImageHeight(V.b),left:P.getImageWidth(V.l),right:P.getImageWidth(V.r)};
}}},destruct:function(){this._disposeFields(J,q,L,z);
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",v="table-header-border",u="border-separator",t="white",s="dotted",r="effect",q="tooltip-text",p="table-focus-indicator",o="qx/decoration/Classic",n="border-lead",m="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration",l="decoration/shadow/shadow.png";
qx.Theme.define(k,{resource:o,decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:u}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:u}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:l,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:[0,3,3,0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:s,color:n}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:q}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:v,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:p,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:v,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:v,styleRight:f,widthBottom:2,colorBottom:r,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var fz="button",fy="widget",fx="background",fw="inset-thin",fv="atom",fu="outset",ft="inset",fs="groupbox",fr="cell",fq="focused-inset",ez="middle",ey="menu-button",ex="text-selected",ew="spinner",ev="tooltip",eu="button-frame",et="text-disabled",es="checkbox",er="toolbar-button",eq="popup",fG="textfield",fH="list",fE="button-hovered",fF="shadow-small",fC="scrollbar",fD="center",fA="datechooser/button",fB="decoration/arrows/down.gif",fI="main",fJ="background-selected",eY="image",eX="date-chooser",fb="label",fa="date-chooser-title",fd="radiobutton",fc="default",ff="bold",fe="white",eW="combobox",eV="background-focused",cV="button-abandoned",cW="background-light",cX="background-field",cY="outset-thin",da="background-disabled",db="scrollbar/button",dc="combobox/button",dd="table-header-cell",de="decoration/arrows/right.gif",df="decoration/arrows/down-small.gif",fX="icon/16/places/folder.png",fW="tree-folder",fV="icon/16/mimetypes/text-plain.png",fU="right-top",gc=".png",gb="datechooser",ga="slidebar/button-backward",fY="selectbox",ge="slidebar/button-forward",gd="treevirtual-folder",dP="decoration/form/",dQ="decoration/tree/minus.gif",dN="decoration/tree/plus.gif",dO="decoration/arrows/left.gif",dT="icon/16/places/folder-open.png",dU="table-row-background-even",dR="top",dS="radiobutton-hovered",dL="decoration/treevirtual/start_plus.gif",dM="decoration/cursors/",dy="icon/16/actions/dialog-ok.png",dx="slidebar",dA="table-scroller-focus-indicator",dz="move-frame",du="nodrop",dt="tabview-page-button-left",dw="decoration/arrows/up-small.gif",dv="move",ds="radiobutton-checked-focused",dr="text-label",ea="qx.theme.classic.Appearance",eb="decoration/menu/checkbox.gif",ec="right",ed="decoration/arrows/rewind.gif",dV="table-scroller-header",dW="radiobutton-disabled",dX="table-pane",dY="table-header-cell-hover",ee="focused-outset",ef="checkbox-hovered",dI="text",dH="icon/16/actions/dialog-cancel.png",dG="datechooser-date-pane",dF="background-pane",dE="decoration/treevirtual/cross_plus.gif",dD="datechooser-week",dC="icon/16/apps/office-calendar.png",dB="datechooser-weekday",dK="table-header-border",dJ="decoration/treevirtual/end.gif",eg="decoration/treevirtual/cross_minus.gif",eh="window-active-caption-text",ei="window-active-caption",ej="icon",ek="checkbox-checked-focused",el="toolbar-separator",em="groove",en="checkbox-pressed",eo="decoration/window/restore.gif",ep="decoration/menu/checkbox-invert.gif",eD="scrollarea",eC="window-inactive-caption-text",eB="button-checked",eA="up.gif",eH="tabview-page-button-right",eG="checkbox-disabled",eF="tabview-page-button-top",eE="tabview-page-button-bottom",eJ="decoration/menu/radiobutton.gif",eI="decoration/arrows/",eR="decoration/table/descending.png",eS="tooltip-text",eP="checkbox-checked-hovered",eQ="left.gif",eN="alias",eO="checkbox-checked-disabled",eL="decoration/arrows/right-invert.gif",eM="radiobutton-checked-disabled",eT="lead-item",eU="checkbox-focused",fj="border-dark",fi="decoration/treevirtual/end_plus.gif",fl="decoration/treevirtual/start_minus.gif",fk="radiobutton-checked-hovered",fn="decoration/window/minimize.gif",fm="checkbox-checked",fp="table-header-cell-hovered",fo="down.gif",fh="decoration/treevirtual/end_minus.gif",fg="left",fQ="window-inactive-caption",fR="decoration/menu/radiobutton-invert.gif",fS="slider",fT="decoration/table/select-column-order.png",fM="decoration/arrows/next.gif",fN="decoration/treevirtual/only_minus.gif",fO="datechooser-week-header",fP="decoration/window/maximize.gif",fK="decoration/treevirtual/only_plus.gif",fL="checkbox-checked-pressed",cU="menu-separator",cT="decoration/splitpane/knob-vertical.png",cS=".gif",cR="decoration/arrows/forward.gif",cQ="radiobutton-checked-pressed",cP="table-statusbar",cO="radiobutton-pressed",cN="copy",cM="table-row-background-selected",cL="radiobutton-focused",di="decoration/splitpane/knob-horizontal.png",dj="right.gif",dg="radiobutton-checked",dh="decoration/treevirtual/cross.gif",dm="decoration/table/ascending.png",dn="decoration/treevirtual/line.gif",dk="table-header",dl="date-chooser-selected",dp="toolbar-part-handle",dq="decoration/window/close.gif",eK="icon/16/actions/view-refresh.png";
qx.Theme.define(ea,{appearances:{"widget":{},"label":{style:function(L){return {textColor:L.disabled?et:undefined};
}},"image":{style:function(gs){return {opacity:!gs.replacement&&gs.disabled?0.3:undefined};
}},"atom":{},"atom/label":fb,"atom/icon":eY,"root":{style:function(U){return {backgroundColor:fx,textColor:dI,font:fc};
}},"popup":{style:function(bD){return {decorator:fI,backgroundColor:dF,shadow:fF};
}},"tooltip":{include:eq,style:function(gr){return {backgroundColor:ev,textColor:eS,decorator:ev,shadow:fF,padding:[1,3,2,3],offset:[1,1,20,1]};
}},"tooltip/atom":fv,"iframe":{style:function(co){return {backgroundColor:fe,decorator:ft};
}},"move-frame":{style:function(b){return {decorator:fI};
}},"resize-frame":dz,"dragdrop-cursor":{style:function(cJ){var cK=du;

if(cJ.copy){cK=cN;
}else if(cJ.move){cK=dv;
}else if(cJ.alias){cK=eN;
}return {source:dM+cK+cS,position:fU,offset:[2,16,2,6]};
}},"button-frame":{alias:fv,style:function(gi){if(gi.pressed||gi.abandoned||gi.checked){var gk=!gi.inner&&gi.focused?fq:ft;
var gj=[4,3,2,5];
}else{var gk=!gi.inner&&gi.focused?ee:fu;
var gj=[3,4];
}return {backgroundColor:gi.abandoned?cV:gi.hovered?fE:gi.checked?eB:fz,decorator:gk,padding:gj};
}},"button":{alias:eu,include:eu,style:function(a){return {center:true};
}},"splitbutton":{},"splitbutton/button":fz,"splitbutton/arrow":{alias:fz,include:fz,style:function(bS){return {icon:fB};
}},"scrollarea/corner":{style:function(){return {backgroundColor:fx};
}},"scrollarea":fy,"scrollarea/pane":fy,"scrollarea/scrollbar-x":fC,"scrollarea/scrollbar-y":fC,"list":{alias:eD,style:function(X){return {decorator:X.focused?fq:ft,backgroundColor:X.focused?eV:fe};
}},"listitem":{alias:fv,style:function(by){return {gap:4,padding:by.lead?[2,4]:[3,5],backgroundColor:by.selected?fJ:undefined,textColor:by.selected?ex:undefined,decorator:by.lead?eT:undefined};
}},"textfield":{style:function(bQ){return {decorator:bQ.focused?fq:ft,padding:[2,3],textColor:bQ.disabled?et:undefined,backgroundColor:bQ.disabled?da:bQ.focused?eV:cX};
}},"textarea":fG,"checkbox":{alias:fv,style:function(bI){var bJ;

if(bI.checked&&bI.focused){bJ=ek;
}else if(bI.checked&&bI.disabled){bJ=eO;
}else if(bI.checked&&bI.pressed){bJ=fL;
}else if(bI.checked&&bI.hovered){bJ=eP;
}else if(bI.checked){bJ=fm;
}else if(bI.disabled){bJ=eG;
}else if(bI.focused){bJ=eU;
}else if(bI.pressed){bJ=en;
}else if(bI.hovered){bJ=ef;
}else{bJ=es;
}return {icon:dP+bJ+gc,gap:6};
}},"radiobutton":{alias:es,include:es,style:function(cH){var cI;

if(cH.checked&&cH.focused){cI=ds;
}else if(cH.checked&&cH.disabled){cI=eM;
}else if(cH.checked&&cH.pressed){cI=cQ;
}else if(cH.checked&&cH.hovered){cI=fk;
}else if(cH.checked){cI=dg;
}else if(cH.disabled){cI=dW;
}else if(cH.focused){cI=cL;
}else if(cH.pressed){cI=cO;
}else if(cH.hovered){cI=dS;
}else{cI=fd;
}return {icon:dP+cI+gc};
}},"spinner":{style:function(o){return {decorator:o.focused?fq:ft,textColor:o.disabled?et:undefined};
}},"spinner/textfield":{include:fG,style:function(cA){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:fz,include:fz,style:function(n){return {icon:dw,padding:n.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:n.hovered?fE:fz};
}},"spinner/downbutton":{alias:fz,include:fz,style:function(l){return {icon:df,padding:l.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:l.hovered?fE:fz};
}},"datefield":eW,"datefield/button":{alias:dc,include:dc,style:function(u){return {icon:dC,padding:[0,3],backgroundColor:u.disabled?da:u.focused?eV:cX,decorator:undefined};
}},"datefield/list":{alias:gb,include:gb,style:function(bb){return {decorator:bb.focused?fq:ft};
}},"groupbox":{style:function(W){return {backgroundColor:fx};
}},"groupbox/legend":{alias:fv,style:function(bT){return {backgroundColor:fx,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(V){return {padding:[12,9],decorator:em};
}},"check-groupbox":fs,"check-groupbox/legend":{alias:es,include:es,style:function(bv){return {backgroundColor:fx,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":fs,"radio-groupbox/legend":{alias:fd,include:fd,style:function(N){return {backgroundColor:fx,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(g){return {backgroundColor:fx};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(bk){return {decorator:dp,backgroundColor:fx,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(K){return {margin:[3,2],decorator:el};
}},"toolbar-button":{alias:fv,style:function(go){if(go.pressed||go.checked||go.abandoned){var gq=fw;
var gp=[3,2,1,4];
}else if(go.hovered){var gq=cY;
var gp=[2,3];
}else{var gq=undefined;
var gp=[3,4];
}return {cursor:fc,decorator:gq,padding:gp,backgroundColor:go.abandoned?cV:go.checked?cW:fz};
}},"toolbar-menubutton":{alias:er,include:er,style:function(bw){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:eY,include:eY,style:function(cB){return {source:df};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":er,"toolbar-splitbutton/arrow":{alias:er,include:er,style:function(cz){return {icon:fB};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fz,include:fz,style:function(bo){return {icon:fM};
}},"slidebar/button-backward":{alias:fz,include:fz,style:function(S){return {icon:dO};
}},"tabview":{},"tabview/bar":{alias:dx,style:function(cc){var cd=0,cg=0,ce=0,cf=0;

if(cc.barTop){ce=-2;
}else if(cc.barBottom){cd=-2;
}else if(cc.barRight){cf=-2;
}else{cg=-2;
}return {marginBottom:ce,marginTop:cd,marginLeft:cf,marginRight:cg};
}},"tabview/bar/button-forward":{include:ge,alias:ge,style:function(bC){if(bC.barTop||bC.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:ga,alias:ga,style:function(bU){if(bU.barTop||bU.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(bx){return {backgroundColor:fx,decorator:fu,padding:10};
}},"tabview-page":{},"tabview-page/button":{alias:fz,style:function(w){var F;
var D=0,B=0,y=0,A=0;

if(w.barTop||w.barBottom){var z=2,x=2,C=6,E=6;
}else{var z=6,x=6,C=6,E=6;
}
if(w.barTop){F=eF;
}else if(w.barRight){F=eH;
}else if(w.barBottom){F=eE;
}else{F=dt;
}
if(w.checked){if(w.barTop||w.barBottom){C+=2;
E+=2;
}else{z+=2;
x+=2;
}}else{if(w.barTop||w.barBottom){y+=2;
D+=2;
}else if(w.barLeft||w.barRight){B+=2;
A+=2;
}}
if(w.checked){if(!w.firstTab){if(w.barTop||w.barBottom){A=-4;
}else{D=-4;
}}
if(!w.lastTab){if(w.barTop||w.barBottom){B=-4;
}else{y=-4;
}}}return {zIndex:w.checked?10:5,decorator:F,backgroundColor:fx,iconPosition:w.barLeft||w.barRight?dR:fg,padding:[z,E,x,C],margin:[D,B,y,A]};
}},"scrollbar":{},"scrollbar/slider":{alias:fS,style:function(bc){return {backgroundColor:cW};
}},"scrollbar/slider/knob":{include:eu,style:function(gl){return {height:14,width:14,minHeight:gl.horizontal?undefined:14,minWidth:gl.horizontal?14:undefined};
}},"scrollbar/button":{alias:fz,include:fz,style:function(cw){var cx;

if(cw.up||cw.down){if(cw.pressed||cw.abandoned||cw.checked){cx=[5,2,3,4];
}else{cx=[4,3];
}}else{if(cw.pressed||cw.abandoned||cw.checked){cx=[4,3,2,5];
}else{cx=[3,4];
}}var cy=eI;

if(cw.left){cy+=eQ;
}else if(cw.right){cy+=dj;
}else if(cw.up){cy+=eA;
}else{cy+=fo;
}return {padding:cx,icon:cy};
}},"scrollbar/button-begin":db,"scrollbar/button-end":db,"slider":{style:function(bs){return {backgroundColor:cW,decorator:bs.focused?fq:ft};
}},"slider/knob":{include:eu,style:function(cj){return {width:14,height:14,decorator:fu};
}},"tree-folder/open":{style:function(gt){return {source:gt.opened?dQ:dN};
}},"tree-folder":{style:function(bn){return {padding:[2,3,2,0],icon:bn.opened?dT:fX};
}},"tree-folder/icon":{style:function(bR){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(gn){return {padding:[1,2],backgroundColor:gn.selected?fJ:undefined,textColor:gn.selected?ex:undefined};
}},"tree-file":{include:fW,alias:fW,style:function(Q){return {icon:fV};
}},"tree":{include:fH,alias:fH,style:function(bV){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(bf){return {decorator:fI};
}},"treevirtual-folder":{style:function(bi){return {icon:(bi.opened?dT:fX)};
}},"treevirtual-file":{include:gd,alias:gd,style:function(bu){return {icon:fV};
}},"treevirtual-line":{style:function(bq){return {icon:dn};
}},"treevirtual-contract":{style:function(c){return {icon:dQ};
}},"treevirtual-expand":{style:function(bF){return {icon:dN};
}},"treevirtual-only-contract":{style:function(cm){return {icon:fN};
}},"treevirtual-only-expand":{style:function(ci){return {icon:fK};
}},"treevirtual-start-contract":{style:function(P){return {icon:fl};
}},"treevirtual-start-expand":{style:function(r){return {icon:dL};
}},"treevirtual-end-contract":{style:function(cE){return {icon:fh};
}},"treevirtual-end-expand":{style:function(bP){return {icon:fi};
}},"treevirtual-cross-contract":{style:function(bK){return {icon:eg};
}},"treevirtual-cross-expand":{style:function(H){return {icon:dE};
}},"treevirtual-end":{style:function(R){return {icon:dJ};
}},"treevirtual-cross":{style:function(ch){return {icon:dh};
}},"window":{style:function(gm){return {contentPadding:[10,10,10,10],backgroundColor:fx,decorator:gm.maximized?undefined:fu,shadow:fF};
}},"window/pane":{},"window/captionbar":{style:function(I){return {padding:1,backgroundColor:I.active?ei:fQ,textColor:I.active?eh:eC};
}},"window/icon":{style:function(bL){return {marginRight:4};
}},"window/title":{style:function(bE){return {cursor:fc,font:ff,marginRight:20,alignY:ez};
}},"window/minimize-button":{include:fz,alias:fz,style:function(bl){return {icon:fn,padding:bl.pressed||bl.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:fz,alias:fz,style:function(bz){return {icon:eo,padding:bz.pressed||bz.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:fz,alias:fz,style:function(bW){return {icon:fP,padding:bW.pressed||bW.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:fz,alias:fz,style:function(v){return {marginLeft:2,icon:dq,padding:v.pressed||v.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(ca){return {decorator:fw,padding:[2,6]};
}},"window/statusbar-text":fb,"resizer":{style:function(be){return {decorator:fu};
}},"splitpane":{},"splitpane/splitter":{style:function(m){return {backgroundColor:fx};
}},"splitpane/splitter/knob":{style:function(bO){return {source:bO.horizontal?di:cT,padding:2};
}},"splitpane/slider":{style:function(br){return {backgroundColor:fj,opacity:0.3};
}},"selectbox":eu,"selectbox/atom":fv,"selectbox/popup":eq,"selectbox/list":fH,"selectbox/arrow":{style:function(O){return {source:fB,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(bh){return {decorator:fu};
}},"datechooser/navigation-bar":{style:function(cu){return {backgroundColor:eX,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":ev,"datechooser/last-month-button-tooltip":ev,"datechooser/next-year-button-tooltip":ev,"datechooser/next-month-button-tooltip":ev,"datechooser/last-year-button":fA,"datechooser/last-month-button":fA,"datechooser/next-year-button":fA,"datechooser/next-month-button":fA,"datechooser/button/icon":{},"datechooser/button":{style:function(bG){var bH={width:17,show:ej};

if(bG.lastYear){bH.icon=ed;
}else if(bG.lastMonth){bH.icon=dO;
}else if(bG.nextYear){bH.icon=cR;
}else if(bG.nextMonth){bH.icon=de;
}
if(bG.pressed||bG.checked||bG.abandoned){bH.decorator=fw;
}else if(bG.hovered){bH.decorator=cY;
}else{bH.decorator=undefined;
}
if(bG.pressed||bG.checked||bG.abandoned){bH.padding=[2,0,0,2];
}else if(bG.hovered){bH.padding=1;
}else{bH.padding=2;
}return bH;
}},"datechooser/month-year-label":{style:function(cF){return {font:ff,textAlign:fD};
}},"datechooser/date-pane":{style:function(gh){return {decorator:dG,backgroundColor:eX};
}},"datechooser/weekday":{style:function(bX){return {decorator:dB,font:ff,textAlign:fD,textColor:bX.weekend?fa:eX,backgroundColor:bX.weekend?eX:fa};
}},"datechooser/day":{style:function(f){return {textAlign:fD,decorator:f.today?fI:undefined,textColor:f.selected?ex:f.otherMonth?et:undefined,backgroundColor:f.selected?dl:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(h){return {textAlign:fD,textColor:fa,padding:[2,4],decorator:h.header?fO:dD};
}},"combobox":{style:function(ba){return {decorator:ba.focused?fq:ft,textColor:ba.disabled?et:undefined,backgroundColor:cX};
}},"combobox/button":{alias:fz,include:fz,style:function(gf){return {icon:fB,backgroundColor:gf.hovered?fE:fz};
}},"combobox/popup":eq,"combobox/list":fH,"combobox/textfield":{include:fG,style:function(bA){return {decorator:undefined,padding:[2,3]};
}},"menu":{style:function(ck){var cl={backgroundColor:fx,shadow:fF,decorator:fu,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1};

if(ck.submenu){cl.position=fU;
cl.offset=[-2,-3];
}
if(ck.contextmenu){cl.offset=4;
}return cl;
}},"menu-separator":{style:function(k){return {height:0,decorator:cU,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:fv,style:function(cp){return {backgroundColor:cp.selected?fJ:undefined,textColor:cp.selected?ex:undefined,padding:[2,6]};
}},"menu-button/icon":{include:eY,style:function(t){return {alignY:ez};
}},"menu-button/label":{include:fb,style:function(bm){return {alignY:ez,padding:1};
}},"menu-button/shortcut":{include:fb,style:function(d){return {alignY:ez,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(e){return {source:e.selected?eL:de,alignY:ez};
}},"menu-checkbox":{alias:ey,include:ey,style:function(bY){return {icon:!bY.checked?undefined:bY.selected?ep:eb};
}},"menu-radiobutton":{alias:ey,include:ey,style:function(J){return {icon:!J.checked?undefined:J.selected?fR:eJ};
}},"menubar":{style:function(bM){return {backgroundColor:fx,decorator:fu};
}},"menubar-button":{alias:fv,style:function(cv){return {padding:[2,6],backgroundColor:cv.pressed||cv.hovered?fJ:undefined,textColor:cv.pressed||cv.hovered?ex:undefined};
}},"colorselector":fy,"colorselector/control-bar":fy,"colorselector/visual-pane":fs,"colorselector/control-pane":fy,"colorselector/preset-grid":fy,"colorselector/colorbucket":{style:function(q){return {decorator:fw,width:16,height:16};
}},"colorselector/preset-field-set":fs,"colorselector/input-field-set":fs,"colorselector/preview-field-set":fs,"colorselector/hex-field-composite":fy,"colorselector/hex-field":fG,"colorselector/rgb-spinner-composite":fy,"colorselector/rgb-spinner-red":ew,"colorselector/rgb-spinner-green":ew,"colorselector/rgb-spinner-blue":ew,"colorselector/hsb-spinner-composite":fy,"colorselector/hsb-spinner-hue":ew,"colorselector/hsb-spinner-saturation":ew,"colorselector/hsb-spinner-brightness":ew,"colorselector/preview-content-old":{style:function(cD){return {decorator:fw,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bp){return {decorator:fw,backgroundColor:fe,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(s){return {decorator:fw,margin:5};
}},"colorselector/brightness-field":{style:function(bd){return {decorator:fw,margin:[5,7]};
}},"colorselector/hue-saturation-pane":fy,"colorselector/hue-saturation-handle":fy,"colorselector/brightness-pane":fy,"colorselector/brightness-handle":fy,"table":fy,"table/statusbar":{style:function(j){return {decorator:cP,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:fz,style:function(cq){var cs,cr;

if(cq.pressed||cq.checked||cq.abandoned){cs=fw;
cr=[3,2,1,4];
}else if(cq.hovered){cs=cY;
cr=[2,3];
}else{cs=undefined;
cr=[3,4];
}return {decorator:cs,padding:cr,backgroundColor:cq.abandoned?cV:fz,icon:fT};
}},"table-column-reset-button":{extend:ey,alias:ey,style:function(){return {icon:eK};
}},"table-scroller/scrollbar-x":fC,"table-scroller/scrollbar-y":fC,"table-scroller":fy,"table-scroller/header":{style:function(cn){return {decorator:dV,backgroundColor:dk};
}},"table-scroller/pane":{style:function(bB){return {backgroundColor:dX};
}},"table-scroller/focus-indicator":{style:function(p){return {decorator:dA};
}},"table-scroller/resize-line":{style:function(bt){return {backgroundColor:dK,width:3};
}},"table-header-cell":{alias:fv,style:function(bj){return {paddingLeft:2,paddingRight:2,paddingBottom:bj.hovered?0:2,decorator:bj.hovered?fp:dd,backgroundColor:bj.hovered?dY:dd,sortIcon:bj.sorted?(bj.sortedAscending?dm:eR):undefined};
}},"table-header-cell/sort-icon":{style:function(Y){return {alignY:ez};
}},"table-editor-textfield":{include:fG,style:function(i){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:fY,alias:fY,style:function(cb){return {padding:[0,2]};
}},"table-editor-combobox":{include:eW,alias:eW,style:function(G){return {decorator:undefined};
}},"colorpopup":{alias:eq,include:eq,style:function(bN){return {decorator:fu,padding:5,backgroundColor:fx};
}},"colorpopup/field":{style:function(ct){return {decorator:fw,margin:2,width:14,height:14,backgroundColor:fx};
}},"colorpopup/selector-button":fz,"colorpopup/auto-button":fz,"colorpopup/preview-pane":fs,"colorpopup/current-preview":{style:function(T){return {height:20,padding:4,marginLeft:4,decorator:fw,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(cC){return {height:20,padding:4,marginRight:4,decorator:fw,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:fz,include:fz,style:function(bg){return {icon:dy};
}},"colorpopup/colorselector-cancelbutton":{alias:fz,include:fz,style:function(gg){return {icon:dH};
}},"row-layer":fy,"column-layer":fy,"cell":{style:function(cG){return {backgroundColor:cG.selected?cM:dU,textColor:cG.selected?ex:dr,padding:[3,6]};
}},"cell-string":fr,"cell-number":{include:fr,style:function(M){return {textAlign:ec};
}},"cell-image":fr,"cell-boolean":fr,"cell-atom":fr,"cell-date":fr,"cell-html":fr}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,resource:a,icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var r='"',q="qx.lang.Core",p="\\\\",o="\\\"",n="[object Error]";
qx.Bootstrap.define(q);
if(!Error.prototype.toString||Error.prototype.toString()==n){Error.prototype.toString=function(){return this.message;
};
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(d,e){if(e==null){e=0;
}else if(e<0){e=Math.max(0,this.length+e);
}
for(var i=e;i<this.length;i++){if(this[i]===d){return i;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(h,j){if(j==null){j=this.length-1;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i>=0;i--){if(this[i]===h){return i;
}}return -1;
};
}
if(!Array.prototype.forEach){Array.prototype.forEach=function(k,m){var l=this.length;

for(var i=0;i<l;i++){k.call(m,this[i],i,this);
}};
}
if(!Array.prototype.filter){Array.prototype.filter=function(a,b){var l=this.length;
var c=[];

for(var i=0;i<l;i++){if(a.call(b,this[i],i,this)){c.push(this[i]);
}}return c;
};
}
if(!Array.prototype.map){Array.prototype.map=function(u,v){var l=this.length;
var w=[];

for(var i=0;i<l;i++){w.push(u.call(v,this[i],i,this));
}return w;
};
}
if(!Array.prototype.some){Array.prototype.some=function(s,t){var l=this.length;

for(var i=0;i<l;i++){if(s.call(t,this[i],i,this)){return true;
}}return false;
};
}
if(!Array.prototype.every){Array.prototype.every=function(f,g){var l=this.length;

for(var i=0;i<l;i++){if(!f.call(g,this[i],i,this)){return false;
}}return true;
};
}if(!String.prototype.quote){String.prototype.quote=function(){return r+this.replace(/\\/g,p).replace(/\"/g,o)+r;
};
}})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Bootstrap.define(G,{statics:{__bE:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__bF:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bG:function(){var L=qx.lang.Generics.__bE;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__bF(N,O);
}}}}},defer:function(Q){Q.__bG();
}});
})();
(function(){var o=":",n="qx.client",m="anonymous",l="...",k="qx.dev.StackTrace",j="",h="\n",g="/source/class/",f=".";
qx.Class.define(k,{statics:{getStackTrace:qx.core.Variant.select(n,{"gecko":function(){try{throw new Error();
}catch(V){var E=this.getStackTraceFromError(V);
qx.lang.Array.removeAt(E,0);
var C=this.getStackTraceFromCaller(arguments);
var A=C.length>E.length?C:E;

for(var i=0;i<Math.min(C.length,E.length);i++){var B=C[i];

if(B.indexOf(m)>=0){continue;
}var I=B.split(o);

if(I.length!=2){continue;
}var G=I[0];
var z=I[1];
var y=E[i];
var J=y.split(o);
var F=J[0];
var x=J[1];

if(qx.Class.getByName(F)){var D=F;
}else{D=G;
}var H=D+o;

if(z){H+=z+o;
}H+=x;
A[i]=H;
}return A;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var a;

try{a.bar();
}catch(p){var b=this.getStackTraceFromError(p);
qx.lang.Array.removeAt(b,0);
return b;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(n,{"opera":function(e){return [];
},"default":function(W){var bc=[];
var bb=qx.lang.Function.getCaller(W);
var X={};

while(bb){var Y=qx.lang.Function.getName(bb);
bc.push(Y);

try{bb=bb.caller;
}catch(c){break;
}
if(!bb){break;
}var ba=qx.core.ObjectRegistry.toHashCode(bb);

if(X[ba]){bc.push(l);
break;
}X[ba]=bb;
}return bc;
}}),getStackTraceFromError:qx.core.Variant.select(n,{"gecko":function(q){if(!q.stack){return [];
}var w=/@(.+):(\d+)$/gm;
var r;
var s=[];

while((r=w.exec(q.stack))!=null){var t=r[1];
var v=r[2];
var u=this.__bH(t);
s.push(u+o+v);
}return s;
},"webkit":function(d){if(d.sourceURL&&d.line){return [this.__bH(d.sourceURL)+o+d.line];
}else{return [];
}},"opera":function(K){if(K.message.indexOf("Backtrace:")<0){return [];
}var M=[];
var N=qx.lang.String.trim(K.message.split("Backtrace:")[1]);
var O=N.split(h);

for(var i=0;i<O.length;i++){var L=O[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(L&&L.length>=2){var Q=L[1];
var P=this.__bH(L[2]);
M.push(P+o+Q);
}}return M;
},"default":function(){return [];
}}),__bH:function(R){var U=g;
var S=R.indexOf(U);
var T=(S==-1)?R:R.substring(S+U.length).replace(/\//g,f).replace(/\.js$/,j);
return T;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(e){},setItem:function(f,g){},splice:function(h,i,j){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(e,f){},registerEvent:function(g,h,i){},unregisterEvent:function(b,c,d){}}});
})();
(function(){var r="load",q="unload",p="qx.client",o="ready",n="mshtml",m="qx.event.handler.Application",l="complete",k="gecko|opera|webkit",j="left",i="_window",g="DOMContentLoaded",h="shutdown";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){arguments.callee.base.call(this);
this._window=f.getWindow();
this.__bt=false;
this.__bu=false;
this.__bv=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var w=qx.event.handler.Application.$$instance;

if(w){w.__bt=true;
w.__bw();
}}},members:{canHandleEvent:function(a,b){},registerEvent:function(s,t,u){},unregisterEvent:function(c,d,e){},__bw:function(){if(!this.__bx&&this.__bu&&this.__bt){this.__bx=true;
qx.event.Registration.fireEvent(this._window,o);
}},_initObserver:function(){if(qx.$$domReady||document.readyState==l){this.__bu=true;
this.__bw();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(p,k)){qx.bom.Event.addNativeListener(this._window,g,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(p,n)){var x=function(){try{document.documentElement.doScroll(j);
this._onNativeLoadWrapped();
}catch(y){setTimeout(x,100);
}};
x();
}qx.bom.Event.addNativeListener(this._window,r,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,q,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,r,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,q,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:function(e){this.__bu=true;
this.__bw();
},_onNativeUnload:function(e){if(!this.__by){this.__by=true;

try{qx.event.Registration.fireEvent(this._window,h);
}finally{qx.core.ObjectRegistry.shutdown();
}}}},destruct:function(){this._stopObserver();
this._disposeFields(i);
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var j="qx.util.ObjectPool",h="Integer";
qx.Class.define(j,{extend:qx.core.Object,construct:function(k){arguments.callee.base.call(this);
this.__cf={};

if(k!==undefined){this.setSize(k);
}},properties:{size:{check:h,init:null,nullable:true}},members:{__cf:null,getObject:function(e){if(this.$$disposed){return;
}
if(!e){throw new Error("Class needs to be defined!");
}var f=null;
var g=this.__cf[e.classname];

if(g){f=g.pop();
}
if(f){f.$$pooled=false;
}else{f=new e;
}return f;
},poolObject:function(a){if(!this.__cf){return;
}var b=a.classname;
var c=this.__cf[b];

if(a.$$pooled){throw new Error("Object is already pooled: "+a);
}
if(!c){this.__cf[b]=c=[];
}var d=this.getSize()||Infinity;

if(c.length>d){this.warn("Cannot pool "+a+" because the pool is already full.");
a.dispose();
return;
}a.$$pooled=true;
c.push(a);
}},destruct:function(){var o=this.__cf;
var m,n,i,l;

for(m in o){n=o[m];

for(i=0,l=n.length;i<l;i++){n[i].dispose();
}}delete this.__cf;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var o="_originalTarget",n="_relatedTarget",m="qx.event.type.Event",l="_target",k="_currentTarget";
qx.Class.define(m,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(c,d){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!c;
this._cancelable=!!d;
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
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(a){this._type=a;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(q){this._eventPhase=q;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(j){this._target=j;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(p){this._currentTarget=p;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(b){this._relatedTarget=b;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(e){this._originalTarget=e;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(f){this._bubbles=f;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(g){this._cancelable=g;
}},destruct:function(){this._disposeFields(l,k,n,o);
}});
})();
(function(){var e="__cd",d="Better use 'getData'",c="__ce",b="Better use 'getOldData'",a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(f,g,h){arguments.callee.base.call(this,false,h);
this.__cd=f;
this.__ce=g;
return this;
},clone:function(i){var j=arguments.callee.base.call(this,i);
j.__cd=this.__cd;
j.__ce=this.__ce;
return j;
},getData:function(){return this.__cd;
},getOldData:function(){return this.__ce;
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.__cd;
},getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.__ce;
}},destruct:function(){this._disposeFields(e,c);
}});
})();
(function(){var c="qx.event.IEventDispatcher";
qx.Interface.define(c,{members:{canDispatchEvent:function(a,event,b){this.assertInstance(event,qx.event.type.Event);
this.assertString(b);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var c="qx.event.dispatch.Direct";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(h,event,j){return !event.getBubbles();
},dispatchEvent:function(d,event,e){event.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(d,e,false);

if(f){for(var i=0,l=f.length;i<l;i++){var g=f[i].context||d;
f[i].handler.call(g,event);
}}}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var br="",bq="get",bp="change",bo=".",bn="last",bm="]",bl="[",bk="Number",bj="String",bi="deepBinding",bH="' (",bG="Boolean",bF=").",bE="set",bD=") to the object '",bC="item",bB="Integer",bA="reset",bz="qx.data.SingleValueBinding",by="No event could be found for the property",bw="PositiveNumber",bx="Binding from '",bu="PositiveInteger",bv="Binding does not exist!",bs="model",bt="Date";
qx.Class.define(bz,{statics:{DEBUG_ON:false,__cg:{},bind:function(bT,bU,bV,bW,bX){var cd=bU.split(bo);
var ca=this.__cn(cd);
var cg=[];
var ch=[];
var ce=[];
var cb=[];
var cc=bT;
for(var i=0;i<cd.length;i++){if(ca[i]!==br){cb.push(bp);
}else{cb.push(this.__ci(cc,cd[i]));
}cg[i]=cc;
if(i==cd.length-1){if(ca[i]!==br){var ck=ca[i]===bn?cc.length-1:ca[i];
var bY=cc.getItem(ck);
this.__cm(bY,bV,bW,bX);
ce[i]=this.__co(cc,cb[i],bV,bW,bX,ca[i]);
}else{if(cd[i]!=null&&cc[bq+qx.lang.String.firstUp(cd[i])]!=null){var bY=cc[bq+qx.lang.String.firstUp(cd[i])]();
this.__cm(bY,bV,bW,bX);
}ce[i]=this.__co(cc,cb[i],bV,bW,bX);
}}else{var ci={index:i,propertyNames:cd,sources:cg,listenerIds:ce,arrayIndexValues:ca,targetObject:bV,targetProperty:bW,options:bX,listeners:ch};
var cf=qx.lang.Function.bind(this.__ch,this,ci);
ch.push(cf);
ce[i]=cc.addListener(cb[i],cf);
}if(cc[bq+qx.lang.String.firstUp(cd[i])]==null){cc=null;
}else if(ca[i]!==br){cc=cc[bq+qx.lang.String.firstUp(cd[i])](ca[i]);
}else{cc=cc[bq+qx.lang.String.firstUp(cd[i])]();
}
if(!cc){break;
}}var cj={type:bi,listenerIds:ce,sources:cg};
this.__cp(cj,bT,bU,bV,bW);
return cj;
},__ch:function(bc){for(var j=bc.index+1;j<bc.propertyNames.length;j++){var bg=bc.sources[j];
bc.sources[j]=null;

if(!bg){continue;
}bg.removeListenerById(bc.listenerIds[j]);
}var bg=bc.sources[bc.index];
for(var j=bc.index+1;j<bc.propertyNames.length;j++){if(bc.arrayIndexValues[j-1]!==br){bg=bg[bq+qx.lang.String.firstUp(bc.propertyNames[j-1])](bc.arrayIndexValues[j-1]);
}else{bg=bg[bq+qx.lang.String.firstUp(bc.propertyNames[j-1])]();
}bc.sources[j]=bg;
if(!bg){this.__cj(bc.targetObject,bc.targetProperty);
break;
}if(j==bc.propertyNames.length-1){if(bg instanceof qx.data.Array){var bh=bc.arrayIndexValues[j]===bn?bg.length-1:bc.arrayIndexValues[j];
var be=bg.getItem(bh);
this.__cm(be,bc.targetObject,bc.targetProperty,bc.options);
bc.listenerIds[j]=this.__co(bg,bp,bc.targetObject,bc.targetProperty,bc.options,bc.arrayIndexValues[j]);
}else{if(bc.propertyNames[j]!=null&&bg[bq+qx.lang.String.firstUp(bc.propertyNames[j])]!=null){var be=bg[bq+qx.lang.String.firstUp(bc.propertyNames[j])]();
this.__cm(be,bc.targetObject,bc.targetProperty,bc.options);
}var bf=this.__ci(bg,bc.propertyNames[j]);
bc.listenerIds[j]=this.__co(bg,bf,bc.targetObject,bc.targetProperty,bc.options);
}}else{if(bc.listeners[j]==null){var bd=qx.lang.Function.bind(this.__ch,this,bc);
bc.listeners.push(bd);
}if(bg instanceof qx.data.Array){var bf=bp;
}else{var bf=this.__ci(bg,bc.propertyNames[j]);
}bc.listenerIds[j]=bg.addListener(bf,bc.listeners[j]);
}}},__ci:function(c,d){var f=this.__cr(c,d);
if(f==null){if(qx.Class.supportsEvent(c.constructor,d)){f=d;
}else if(qx.Class.supportsEvent(c.constructor,bp+qx.lang.String.firstUp(d))){f=bp+qx.lang.String.firstUp(d);
}else{throw new qx.core.AssertionError(by,d);
}}return f;
},__cj:function(bP,bQ){var bR=this.__cl(bP,bQ);

if(bR!=null){var bS=bQ.substring(bQ.lastIndexOf(bo)+1,bQ.length);
bR[bA+qx.lang.String.firstUp(bS)]();
}},__ck:function(cn,co,cp){var cq=this.__cl(cn,co);

if(cq!=null){var cr=co.substring(co.lastIndexOf(bo)+1,co.length);
cq[bE+qx.lang.String.firstUp(cr)](cp);
}},__cl:function(q,r){var u=r.split(bo);
var v=q;
for(var i=0;i<u.length-1;i++){try{var t=u[i];
if(t.indexOf(bm)==t.length-1){var s=t.substring(t.indexOf(bl)+1,t.length-1);
t=t.substring(0,t.indexOf(bl));
}v=v[bq+qx.lang.String.firstUp(t)]();

if(s!=null){if(s==bn){s=v.length-1;
}v=v.getItem(s);
s=null;
}}catch(bO){return null;
}}return v;
},__cm:function(M,N,O,P){if(M==null){this.__cj(N,O);
}M=this.__cq(M,N,O,P);
if(M!=undefined){this.__ck(N,O,M);
}},__cn:function(V){var W=[];
for(var i=0;i<V.length;i++){var name=V[i];
if(qx.lang.String.endsWith(name,bm)){var X=name.substring(name.indexOf(bl)+1,name.indexOf(bm));
if(name.indexOf(bm)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(X!==bn){if(X==br||isNaN(parseInt(X))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}V[i]=name.substring(0,name.indexOf(bl));
W[i]=br;
W[i+1]=X;
V.splice(i+1,0,bC);
i++;
}else{W[i]=br;
}}return W;
},__co:function(w,x,y,z,A,B){var C;
var E=function(bK,e){if(bK!==br){if(bK===bn){bK=w.length-1;
}var bN=w.getItem(bK);
if(bN==undefined){qx.data.SingleValueBinding.__cj(y,z);
}var bL=e.getData().start;
var bM=e.getData().end;

if(bK<bL||bK>bM){return;
}}else{var bN=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+w+" by "+x+" to "+y+" ("+z+")");
qx.log.Logger.debug("Data before conversion: "+bN);
}bN=qx.data.SingleValueBinding.__cq(bN,y,z,A);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bN);
}try{if(bN!=undefined){qx.data.SingleValueBinding.__ck(y,z,bN);
}else{qx.data.SingleValueBinding.__cj(y,z);
}if(A&&A.onSetOk){A.onSetOk(w,y,bN);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(A&&A.onSetFail){A.onSetFail(e);
}else{this.warn("Failed so set value "+bN+" on "+y+". Error message: "+e);
}}};
if(!B){B=br;
}E=qx.lang.Function.bind(E,w,B);
var D=w.addListener(x,E);
return D;
},__cp:function(Q,R,S,T,U){if(this.__cg[R.toHashCode()]===undefined){this.__cg[R.toHashCode()]=[];
}this.__cg[R.toHashCode()].push([Q,R,S,T,U]);
},__cq:function(g,h,k,l){if(l&&l.converter){return l.converter(g,h.getUserData(bs));
}else{var o=this.__cl(h,k);
var p=k.substring(k.lastIndexOf(bo)+1,k.length);
if(o==null){return g;
}var n=qx.Class.getPropertyDefinition(o.constructor,p);
var m=n==null?br:n.check;
return this.__cs(g,m);
}},__cr:function(cs,ct){var cu=qx.Class.getPropertyDefinition(cs.constructor,ct);

if(cu==null){return null;
}return cu.event;
},__cs:function(F,G){var H=Object.prototype.toString.call(F).slice(8,-1);
if((H==bk||H==bj)&&(G==bB||G==bu)){F=parseInt(F);
}if((H==bG||H==bk||H==bt)&&G==bj){F=F+br;
}if((H==bk||H==bj)&&(G==bk||G==bw)){F=parseFloat(F);
}return F;
},removeBindingFromObject:function(Y,ba){if(ba.type==bi){for(var i=0;i<ba.sources.length;i++){if(ba.sources[i]){ba.sources[i].removeListenerById(ba.listenerIds[i]);
}}}else{Y.removeListenerById(ba);
}var bb=this.__cg[Y.toHashCode()];
if(bb!=undefined){for(var i=0;i<bb.length;i++){if(bb[i][0]==ba){qx.lang.Array.remove(bb,bb[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bI){{};
var bJ=this.__cg[bI.toHashCode()];
for(var i=bJ.length-1;i>=0;i--){this.removeBindingFromObject(bI,bJ[i][0]);
}},getAllBindingsForObject:function(cv){if(this.__cg[cv.toHashCode()]===undefined){this.__cg[cv.toHashCode()]=[];
}return this.__cg[cv.toHashCode()];
},removeAllBindings:function(){for(var cm in this.__cg){var cl=qx.core.ObjectRegistry.fromHashCode(cm);
if(cl==null){delete this.__cg[cm];
continue;
}this.removeAllBindingsForObject(cl);
}this.__cg={};
},getAllBindings:function(){return this.__cg;
},showBindingInLog:function(I,J){var L;
for(var i=0;i<this.__cg[I.toHashCode()].length;i++){if(this.__cg[I.toHashCode()][i][0]==J){L=this.__cg[I.toHashCode()][i];
break;
}}
if(L===undefined){var K=bv;
}else{var K=bx+L[1]+bH+L[2]+bD+L[3]+bH+L[4]+bF;
}qx.log.Logger.debug(K);
},showAllBindingsInLog:function(){for(var b in this.__cg){var a=qx.core.ObjectRegistry.fromHashCode(b);

for(var i=0;i<this.__cg[b].length;i++){this.showBindingInLog(a,this.__cg[b][i][0]);
}}}}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(q,r,name){this.fireDataEvent(c,{value:q,name:name,old:r});
if((q instanceof qx.core.Object)&&qx.Class.hasMixin(q.constructor,qx.data.marshal.MEventBubbling)){var s=qx.lang.Function.bind(this.__ct,this,name);
var t=q.addListener(c,s,this);
q.setUserData(d,t);
}if(r!=null&&r.getUserData&&r.getUserData(d)!=null){r.removeListenerById(r.getUserData(d));
}},__ct:function(name,e){var p=e.getData();
var l=p.value;
var j=p.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(p.name.indexOf){var o=p.name.indexOf(f)!=-1?p.name.indexOf(f):p.name.length;
var m=p.name.indexOf(h)!=-1?p.name.indexOf(h):p.name.length;

if(o<m){var i=p.name.substring(0,o);
var n=p.name.substring(o+1,p.name.length);

if(n[0]!=h){n=f+n;
}var k=name+h+i+g+n;
}else if(m<o){var i=p.name.substring(0,m);
var n=p.name.substring(m,p.name.length);
var k=name+h+i+g+n;
}else{var k=name+h+p.name+g;
}}else{var k=name+h+p.name+g;
}}else{var k=name+f+p.name;
}this.fireDataEvent(c,{value:l,name:k,old:j});
}}});
})();
(function(){var j="change",h="add",g="order",f="remove",e="qx.data.Array",d="qx.event.type.Event",c="number",b="changeLength",a="qx.event.type.Data";
qx.Class.define(e,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(V){arguments.callee.base.call(this);
if(V==undefined){this.__cu=[];
}else if(arguments.length>1){this.__cu=[];

for(var i=0;i<arguments.length;i++){this.__cu.push(arguments[i]);
}}else if(typeof V==c){this.__cu=new Array(V);
}else if(V instanceof Array){this.__cu=[];

for(var i=0;i<V.length;i++){this.push(V[i]);
}}else{this.__cu=[];
throw new Error("Type of the parameter not supported!");
}this.__cv();
},events:{"change":a,"changeLength":d},members:{concat:function(T){var U=this.__cu.concat(T);
return new qx.data.Array(U);
},join:function(y){return this.__cu.join(y);
},pop:function(){var k=this.__cu.pop();
this.__cv();
this._applyEventPropagation(null,k);
this.fireDataEvent(j,{start:this.length-1,end:this.length-1,type:f},null);
return k;
},push:function(S){for(var i=0;i<arguments.length;i++){this.__cu.push(arguments[i]);
this.__cv();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(j,{start:this.length-1,end:this.length-1,type:h},null);
}return this.length;
},reverse:function(){this.__cu.reverse();
this.fireDataEvent(j,{start:0,end:this.length-1,type:g},null);
},shift:function(){var o=this.__cu.shift();
this.__cv();
this._applyEventPropagation(null,o);
this.fireDataEvent(j,{start:0,end:this.length-1,type:f,item:o},null);
return o;
},slice:function(L,M){return new qx.data.Array(this.__cu.slice(L,M));
},splice:function(q,r,s){var x=this.__cu.length;
var u=this.__cu.splice.apply(this.__cu,arguments);
if(this.__cu.length!=x){this.__cv();
}var v=r>0;
var t=arguments.length>2;

if(v||t){if(this.__cu.length>x){var w=h;
}else if(this.__cu.length<x){var w=f;
}else{var w=g;
}this.fireDataEvent(j,{start:q,end:this.length-1,type:w,item:null},null);
}for(var i=2;i<arguments.length;i++){this._applyEventPropagation(arguments[i],null,q+i);
}for(var i=0;i<u.length;i++){this._applyEventPropagation(null,u[i]);
}return (new qx.data.Array(u));
},sort:function(Q){this.__cu.sort.apply(this.__cu,arguments);
this.fireDataEvent(j,{start:0,end:this.length-1,type:g,item:null},null);
},unshift:function(n){for(var i=arguments.length-1;i>=0;i--){this.__cu.unshift(arguments[i]);
this.__cv();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(j,{start:0,end:this.length-1,type:h,item:arguments[i]},null);
}return this.length;
},toArray:function(){return this.__cu;
},getItem:function(O){return this.__cu[O];
},setItem:function(H,I){var J=this.__cu[H];
this.__cu[H]=I;
this._applyEventPropagation(I,J,H);
if(this.length!=this.__cu.length){this.__cv();
}this.fireDataEvent(j,{start:H,end:H,type:h,item:I},null);
},getLength:function(){return this.length;
},indexOf:function(D){return this.__cu.indexOf(D);
},toString:function(){return this.__cu.toString();
},contains:function(C){return this.__cu.indexOf(C)!==-1;
},copy:function(){return this.concat();
},insertAt:function(F,G){this.splice(F,0,G);
},insertBefore:function(W,X){var Y=this.indexOf(W);

if(Y==-1){this.push(X);
}else{this.splice(Y,0,X);
}},insertAfter:function(z,A){var B=this.indexOf(z);

if(B==-1||B==(this.length-1)){this.push(A);
}else{this.splice(B+1,0,A);
}},removeAt:function(P){return this.splice(P,1)[0];
},removeAll:function(){for(var i=0;i<this.__cu.length;i++){this._applyEventPropagation(null,this.__cu[i]);
}this.__cu.length=0;
this.__cv();
},append:function(R){{};
for(var i=0;i<R.length;i++){this._applyEventPropagation(R[i],null,this.__cu.length+i);
}Array.prototype.push.apply(this.__cu,R);
this.__cv();
},remove:function(l){var m=this.indexOf(l);

if(m!=-1){this.splice(m,1);
return l;
}},equals:function(N){if(this.length!==N.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==N.getItem(i)){return false;
}}return true;
},sum:function(){var K=0;

for(var i=0;i<this.length;i++){K+=this.getItem(i);
}return K;
},max:function(){var p=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>p){p=this.getItem(i);
}}return p===undefined?null:p;
},min:function(){var E=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<E){E=this.getItem(i);
}}return E===undefined?null:E;
},__cv:function(){this.length=this.__cu.length;
this.fireEvent(b,qx.event.type.Event);
}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bI=d||c;
this.__bJ=e||c;
},members:{__bI:null,__bJ:null,getComment:function(){return this.__bI;
},message:function(){return this.__bJ;
},toString:function(){return this.__bI+b+this.__bJ;
}}});
})();
(function(){var c="qx.core.AssertionError";
qx.Class.define(c,{extend:qx.type.BaseError,construct:function(a,b){qx.type.BaseError.call(this,a,b);
this.__bK=qx.dev.StackTrace.getStackTrace();
},members:{__bK:null,getStackTrace:function(){return this.__bK;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.event.handler.Object";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(d,e){return qx.Class.supportsEvent(d.constructor,e);
},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var g="qx.util.DisposeUtil";
qx.Class.define(g,{statics:{disposeFields:function(p,q){var name;

for(var i=0,l=q.length;i<l;i++){var name=q[i];

if(p[name]==null||!p.hasOwnProperty(name)){continue;
}p[name]=null;
}},disposeObjects:function(a,b){var name;

for(var i=0,l=b.length;i<l;i++){name=b[i];

if(a[name]==null||!a.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(a[name].dispose){a[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}a[name]=null;
}},disposeArray:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var i=o.length-1;i>=0;i--){n=o[i];

if(n){n.dispose();
}}}catch(h){throw new Error("The array field: "+m+" of object: "+k+" has non disposable entries: "+h);
}o.length=0;
k[m]=null;
},disposeMap:function(c,d){var e=c[d];

if(!e){return;
}if(qx.core.ObjectRegistry.inShutDown){c[d]=null;
return;
}try{for(var f in e){if(e.hasOwnProperty(f)){e[f].dispose();
}}}catch(j){throw new Error("The map field: "+d+" of object: "+c+" has non disposable entries: "+j);
}c[d]=null;
}}});
})();
(function(){var e="_dynamic",d="qx.util.ValueManager",c="abstract";
qx.Class.define(d,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(f){return this._dynamic[f];
},isDynamic:function(b){return !!this._dynamic[b];
},resolve:function(g){if(g&&this._dynamic[g]){return this._dynamic[g];
}return g;
},_setDynamic:function(a){this._dynamic=a;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._disposeFields(e);
}});
})();
(function(){var i="_applyTheme",h="qx.theme.manager.Color",g="Theme",f="changeTheme",e="string",d="singleton";
qx.Class.define(h,{type:d,extend:qx.util.ValueManager,properties:{theme:{check:g,nullable:true,apply:i,event:f}},members:{_applyTheme:function(n){var o={};

if(n){var p=n.colors;
var q=qx.util.ColorUtil;
var r;

for(var s in p){r=p[s];

if(typeof r===e){if(!q.isCssString(r)){throw new Error("Could not parse color: "+r);
}}else if(r instanceof Array){r=q.rgbToRgbString(r);
}else{throw new Error("Could not parse color: "+r);
}o[s]=r;
}}this._setDynamic(o);
},resolve:function(j){var m=this._dynamic;
var k=m[j];

if(k){return k;
}var l=this.getTheme();

if(l!==null&&l.colors[j]){return m[j]=l.colors[j];
}return j;
},isDynamic:function(a){var c=this._dynamic;

if(a&&(c[a]!==undefined)){return true;
}var b=this.getTheme();

if(b!==null&&a&&(b.colors[a]!==undefined)){c[a]=b.colors[a];
return true;
}return false;
}}});
})();
(function(){var z=",",y="rgb(",x=")",w="qx.theme.manager.Color",v="qx.util.ColorUtil";
qx.Class.define(v,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42],grey:[128,128,128]},isNamedColor:function(l){return this.NAMED[l]!==undefined;
},isSystemColor:function(I){return this.SYSTEM[I]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(w);
},isThemedColor:function(k){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(k);
},stringToRgb:function(bd){if(this.supportsThemes()&&this.isThemedColor(bd)){var bd=qx.theme.manager.Color.getInstance().resolveDynamic(bd);
}
if(this.isNamedColor(bd)){return this.NAMED[bd];
}else if(this.isSystemColor(bd)){throw new Error("Could not convert system colors to RGB: "+bd);
}else if(this.isRgbString(bd)){return this.__ca();
}else if(this.isHex3String(bd)){return this.__cb();
}else if(this.isHex6String(bd)){return this.__cc();
}throw new Error("Could not parse color: "+bd);
},cssStringToRgb:function(j){if(this.isNamedColor(j)){return this.NAMED[j];
}else if(this.isSystemColor(j)){throw new Error("Could not convert system colors to RGB: "+j);
}else if(this.isRgbString(j)){return this.__ca();
}else if(this.isHex3String(j)){return this.__cb();
}else if(this.isHex6String(j)){return this.__cc();
}throw new Error("Could not parse color: "+j);
},stringToRgbString:function(e){return this.rgbToRgbString(this.stringToRgb(e));
},rgbToRgbString:function(bc){return y+bc[0]+z+bc[1]+z+bc[2]+x;
},rgbToHexString:function(a){return (qx.lang.String.pad(a[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(a[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(a[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(D){return this.isThemedColor(D)||this.isNamedColor(D)||this.isHex3String(D)||this.isHex6String(D)||this.isRgbString(D);
},isCssString:function(u){return this.isSystemColor(u)||this.isNamedColor(u)||this.isHex3String(u)||this.isHex6String(u)||this.isRgbString(u);
},isHex3String:function(E){return this.REGEXP.hex3.test(E);
},isHex6String:function(be){return this.REGEXP.hex6.test(be);
},isRgbString:function(c){return this.REGEXP.rgb.test(c);
},__ca:function(){var o=parseInt(RegExp.$1,10);
var n=parseInt(RegExp.$2,10);
var m=parseInt(RegExp.$3,10);
return [o,n,m];
},__cb:function(){var H=parseInt(RegExp.$1,16)*17;
var G=parseInt(RegExp.$2,16)*17;
var F=parseInt(RegExp.$3,16)*17;
return [H,G,F];
},__cc:function(){var C=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var B=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var A=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [C,B,A];
},hex3StringToRgb:function(d){if(this.isHex3String(d)){return this.__cb(d);
}throw new Error("Invalid hex3 value: "+d);
},hex6StringToRgb:function(s){if(this.isHex6String(s)){return this.__cc(s);
}throw new Error("Invalid hex6 value: "+s);
},hexStringToRgb:function(h){if(this.isHex3String(h)){return this.__cb(h);
}
if(this.isHex6String(h)){return this.__cc(h);
}throw new Error("Invalid hex value: "+h);
},rgbToHsb:function(P){var R,S,U;
var bb=P[0];
var X=P[1];
var Q=P[2];
var ba=(bb>X)?bb:X;

if(Q>ba){ba=Q;
}var T=(bb<X)?bb:X;

if(Q<T){T=Q;
}U=ba/255.0;

if(ba!=0){S=(ba-T)/ba;
}else{S=0;
}
if(S==0){R=0;
}else{var W=(ba-bb)/(ba-T);
var Y=(ba-X)/(ba-T);
var V=(ba-Q)/(ba-T);

if(bb==ba){R=V-Y;
}else if(X==ba){R=2.0+W-V;
}else{R=4.0+Y-W;
}R=R/6.0;

if(R<0){R=R+1.0;
}}return [Math.round(R*360),Math.round(S*100),Math.round(U*100)];
},hsbToRgb:function(J){var i,f,p,q,t;
var K=J[0]/360;
var L=J[1]/100;
var M=J[2]/100;

if(K>=1.0){K%=1.0;
}
if(L>1.0){L=1.0;
}
if(M>1.0){M=1.0;
}var N=Math.floor(255*M);
var O={};

if(L==0.0){O.red=O.green=O.blue=N;
}else{K*=6.0;
i=Math.floor(K);
f=K-i;
p=Math.floor(N*(1.0-L));
q=Math.floor(N*(1.0-(L*f)));
t=Math.floor(N*(1.0-(L*(1.0-f))));

switch(i){case 0:O.red=N;
O.green=t;
O.blue=p;
break;
case 1:O.red=q;
O.green=N;
O.blue=p;
break;
case 2:O.red=p;
O.green=N;
O.blue=t;
break;
case 3:O.red=p;
O.green=q;
O.blue=N;
break;
case 4:O.red=t;
O.green=p;
O.blue=N;
break;
case 5:O.red=N;
O.green=p;
O.blue=q;
break;
}}return O;
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var s='<div style="',r='"></div>',q="mshtml",p='"/>',o="",n='" style="vertical-align:top;',m="scale",l="qx.client",k="qx.ui.decoration.Util",j='<img src="',i="overflow:hidden;";
qx.Class.define(k,{statics:{insetsModified:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var t=qx.theme.manager.Decoration.getInstance();
var v=t.resolve(a).getInsets();
var u=t.resolve(b).getInsets();

if(v.top!=u.top||v.right!=u.right||v.bottom!=u.bottom||v.left!=u.left){return true;
}return false;
},generateBackgroundMarkup:function(c,d,e,top,f){if(c){var g=qx.util.AliasManager.getInstance().resolve(c);
if(d==m){var h=qx.util.ResourceManager.toUri(g);
return j+h+n+f+p;
}else{var back=qx.bom.element.Background.compile(g,d,e,top);
return s+back+f+r;
}}else{if(f){if(qx.core.Variant.isSet(l,q)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){f+=i;
}}return s+f+r;
}else{return o;
}}}}});
})();
(function(){var h="decoration",g="object",f="_applyTheme",e="__cz",d="qx.theme.manager.Decoration",c="Theme",b="string",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:f}},members:{__cz:null,resolve:function(m){if(!m){return null;
}
if(typeof m===g){return m;
}var p=this.getTheme();

if(!p){return null;
}var p=this.getTheme();

if(!p){return null;
}var q=this.__cz;

if(!q){q=this.__cz={};
}var n=q[m];

if(n){return n;
}var o=p.decorations[m];

if(!o){return null;
}var r=o.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+m+"!");
}return q[m]=(new r).set(o.style);
},isValidPropertyValue:function(k){if(typeof k===b){return this.isDynamic(k);
}else if(typeof k===g){var l=k.constructor;
return qx.Class.hasInterface(l,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(i){if(!i){return false;
}var j=this.getTheme();

if(!j){return false;
}return !!j.decorations[i];
},_applyTheme:function(s){var t=qx.util.AliasManager.getInstance();
s?t.add(h,s.resource):t.remove(h);
}},destruct:function(){this._disposeMap(e);
}});
})();
(function(){var l="/",k="__cA",j="0",i="qx/static",h="http://",g="https://",f="file://",e="qx.util.AliasManager",d="singleton",c=".",b="static";
qx.Class.define(e,{type:d,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cA={};
this.add(b,i);
},members:{__cA:null,_preprocess:function(t){var w=this._getDynamic();

if(w[t]===false){return t;
}else if(w[t]===undefined){if(t.charAt(0)===l||t.charAt(0)===c||t.indexOf(h)===0||t.indexOf(g)===j||t.indexOf(f)===0){w[t]=false;
return t;
}var v=t.substring(0,t.indexOf(l));
var u=this.__cA[v];

if(u!==undefined){w[t]=u+t.substring(v.length);
}}return t;
},add:function(m,n){this.__cA[m]=n;
var p=this._getDynamic();
var o={};
for(var q in p){if(q.substring(0,q.indexOf(l))===m){p[q]=n+q.substring(m.length);
o[q]=true;
}}},remove:function(a){delete this.__cA[a];
},resolve:function(r){var s=this._getDynamic();

if(r!==null){r=this._preprocess(r);
}return s[r]||r;
}},destruct:function(){this._disposeFields(k);
}});
})();
(function(){var h="/",g="qx.util.ResourceManager",f="string";
qx.Bootstrap.define(g,{statics:{__a:qx.$$resources||{},has:function(j){return !!this.__a[j];
},getData:function(i){return this.__a[i]||null;
},getImageWidth:function(o){var p=this.__a[o];
return p?p[0]:null;
},getImageHeight:function(m){var n=this.__a[m];
return n?n[1]:null;
},getImageFormat:function(k){var l=this.__a[k];
return l?l[2]:null;
},isClippedImage:function(a){var b=this.__a[a];
return b&&b.length>4;
},toUri:function(c){if(c==null){return c;
}var d=this.__a[c];

if(!d){return c;
}
if(typeof d===f){var e=d;
}else{var e=d[3];
if(!e){return c;
}}return window.qxlibraries[e].resourceUri+h+c;
}}});
})();
(function(){var I="number",H="qx.client",G="/",F="mshtml",E="0",D="",C="px",B=";",A="background-image:url(",z=");",u=")",y="background-repeat:",x="https:",t=" ",s="qx.bom.element.Background",w="url(",v="background-position:";
qx.Class.define(s,{statics:{__gD:[A,null,z,v,null,B,y,null,B],__gE:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__gF:function(c,top){var d=qx.bom.client.Engine;

if(d.GECKO&&d.VERSION<1.9&&c==top&&typeof c==I){top+=0.01;
}
if(c){var e=(typeof c==I)?c+C:c;
}else{e=E;
}
if(top){var f=(typeof top==I)?top+C:top;
}else{f=E;
}return e+t+f;
},compile:function(J,K,L,top){var M=this.__gF(L,top);
var N=qx.util.ResourceManager.toUri(J);

if(qx.core.Variant.isSet(H,F)){N=this.__gG(N);
}var O=this.__gD;
O[1]=N;
O[4]=M;
O[7]=K;
return O.join(D);
},getStyles:function(g,h,i,top){if(!g){return this.__gE;
}var j=this.__gF(i,top);
var k=qx.util.ResourceManager.toUri(g);

if(qx.core.Variant.isSet(H,F)){k=this.__gG(k);
}var l={backgroundPosition:j,backgroundImage:w+k+u};

if(h!=null){l.backgroundRepeat=h;
}return l;
},set:function(m,n,o,p,top){var q=this.getStyles(n,o,p,top);

for(var r in q){m.style[r]=q[r];
}},__gG:qx.core.Variant.select(H,{"mshtml":function(a){var b=D;
if(window.location.protocol===x){if(a.match(/^\/\//)!=null){b=window.location.protocol;
}else if(a.match(/^\.\//)!=null){a=a.substring(a.indexOf(G));
b=document.URL.substring(0,document.URL.lastIndexOf(G));
}else{b=window.location.href.substring(0,window.location.href.lastIndexOf(G)+1);
}}return b+a;
},"default":function(){}})}});
})();
(function(){var a="qx.bom.client.Feature";
qx.Bootstrap.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:false,VML:false,XPATH:false,__dW:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
this.QUIRKS_MODE=!this.STANDARD_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("org.w3c.dom.svg","1.0");
this.CANVAS=!!window.CanvasRenderingContext2D;
this.VML=qx.bom.client.Engine.MSHTML;
this.AIR=navigator.userAgent.indexOf("adobeair")!==-1;
this.GEARS=!!(window.google&&window.google.gears);
this.XPATH=!!document.evaluate;
}},defer:function(b){b.__dW();
}});
})();
(function(){var p="px",o="div",n="img",m="qx.client",l="",k="scale-x",j="mshtml",i="no-repeat",h="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",g="scale-y",G="repeat",F=".png",E="scale",D="webkit",C='<div style="',B="repeat-y",A='<img src="',z="qx.bom.element.Decoration",y="png",x="', sizingMethod='scale')",v="', sizingMethod='crop')",w='"/>',t='" style="',u="none",r="repeat-x",s='"></div>',q="absolute";
qx.Class.define(z,{statics:{DEBUG:false,__gP:qx.core.Variant.isSet(m,j)&&qx.bom.client.Engine.VERSION<8,__gQ:qx.core.Variant.select(m,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gR:{"scale-x":n,"scale-y":n,"scale":n,"repeat":o,"no-repeat":o,"repeat-x":o,"repeat-y":o},update:function(ba,bb,bc,bd){var bf=this.getTagName(bc,bb);

if(bf!=ba.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bh=this.getAttributes(bb,bc,bd);

if(bf===n){ba.src=bh.src;
}if(ba.style.backgroundPosition!=l&&bh.style.backgroundPosition===undefined){bh.style.backgroundPosition=null;
}if(ba.style.clip!=l&&bh.style.clip===undefined){bh.style.clip=null;
}var be=qx.bom.element.Style;
be.setStyles(ba,bh.style);
},create:function(a,b,c){var d=this.getTagName(b,a);
var f=this.getAttributes(a,b,c);
var e=qx.bom.element.Style.compile(f.style);

if(d===n){return A+f.src+t+e+w;
}else{return C+e+s;
}},getTagName:function(X,Y){if(qx.core.Variant.isSet(m,j)){if(Y&&this.__gP&&this.__gQ[X]&&qx.lang.String.endsWith(Y,F)){return o;
}}return this.__gR[X];
},getAttributes:function(H,I,J){var N=qx.util.ResourceManager;
var S=qx.io2.ImageLoader;
var T=qx.bom.element.Background;

if(!J){J={};
}
if(!J.position){J.position=q;
}
if(qx.core.Variant.isSet(m,j)){J.fontSize=0;
J.lineHeight=0;
}else if(qx.core.Variant.isSet(m,D)){J.WebkitUserDrag=u;
}var R=N.getImageWidth(H)||S.getWidth(H);
var Q=N.getImageHeight(H)||S.getHeight(H);
var O=N.getImageFormat(H)||S.getFormat(H);
{};
if(this.__gP&&this.__gQ[I]&&O===y){if(J.width==null&&R!=null){J.width=R+p;
}
if(J.height==null&&Q!=null){J.height=Q+p;
}
if(I==i){J.filter=h+N.toUri(H)+v;
}else{J.filter=h+N.toUri(H)+x;
}J.backgroundImage=J.backgroundRepeat=l;
return {style:J};
}else{if(I===E){var P=N.toUri(H);

if(J.width==null&&R!=null){J.width=R+p;
}
if(J.height==null&&Q!=null){J.height=Q+p;
}return {src:P,style:J};
}var M=N.isClippedImage(H);

if(I===k||I===g){if(M){if(I===k){var V=N.getData(H);
var W=N.getImageHeight(V[4]);
var P=N.toUri(V[4]);
J.clip={top:-V[6],height:Q};
J.height=W+p;
if(J.top!=null){J.top=(parseInt(J.top,10)+V[6])+p;
}else if(J.bottom!=null){J.bottom=(parseInt(J.bottom,10)+Q-W-V[6])+p;
}return {src:P,style:J};
}else{var V=N.getData(H);
var U=N.getImageWidth(V[4]);
var P=N.toUri(V[4]);
J.clip={left:-V[5],width:R};
J.width=U+p;
if(J.left!=null){J.left=(parseInt(J.left,10)+V[5])+p;
}else if(J.right!=null){J.right=(parseInt(J.right,10)+R-U-V[5])+p;
}return {src:P,style:J};
}}else{{};

if(I==k){J.height=Q==null?null:Q+p;
}else if(I==g){J.width=R==null?null:R+p;
}var P=N.toUri(H);
return {src:P,style:J};
}}else{if(M&&I!==G){var V=N.getData(H);
var L=T.getStyles(V[4],I,V[5],V[6]);

for(var K in L){J[K]=L[K];
}
if(R!=null&&J.width==null&&(I==B||I===i)){J.width=R+p;
}
if(Q!=null&&J.height==null&&(I==r||I===i)){J.height=Q+p;
}return {style:J};
}else{{};
var L=T.getStyles(H,I);

for(var K in L){J[K]=L[K];
}
if(R!=null&&J.width==null){J.width=R+p;
}
if(Q!=null&&J.height==null){J.height=Q+p;
}if(J.filter){J.filter=l;
}return {style:J};
}}}}}});
})();
(function(){var w="",v="qx.client",u="boxSizing",t="cursor",s="opacity",r="clip",q="overflowY",p="overflowX",o="appearance",n="style",U="px",T="-webkit-appearance",S="user-select",R="userSelect",Q="styleFloat",P="-webkit-user-select",O="-moz-appearance",N="pixelHeight",M="MozAppearance",L=":",D="pixelTop",E="pixelLeft",B="text-overflow",C="-moz-user-select",z="MozUserSelect",A="qx.bom.element.Style",x="WebkitUserSelect",y="-o-text-overflow",F="pixelRight",G="pixelWidth",I="pixelBottom",H=";",K="cssFloat",J="WebkitAppearance";
qx.Class.define(A,{statics:{__dK:{styleNames:{"float":qx.core.Variant.select(v,{"mshtml":Q,"default":K}),"appearance":qx.core.Variant.select(v,{"gecko":M,"webkit":J,"default":o}),"userSelect":qx.core.Variant.select(v,{"gecko":z,"webkit":x,"default":R})},cssNames:{"appearance":qx.core.Variant.select(v,{"gecko":O,"webkit":T,"default":o}),"userSelect":qx.core.Variant.select(v,{"gecko":C,"webkit":P,"default":S}),"textOverflow":qx.core.Variant.select(v,{"opera":y,"default":B})},mshtmlPixel:{width:G,height:N,left:E,right:F,top:D,bottom:I},special:{clip:1,cursor:1,opacity:1,boxSizing:1,overflowX:1,overflowY:1}},__dL:{},compile:function(a){var e=[];
var i=this.__dK;
var h=i.special;
var f=i.cssNames;
var d=this.__dL;
var g=qx.lang.String;
var name,c,b;

for(name in a){b=a[name];

if(b==null){continue;
}name=f[name]||name;
if(h[name]){switch(name){case r:e.push(qx.bom.element.Clip.compile(b));
break;
case t:e.push(qx.bom.element.Cursor.compile(b));
break;
case s:e.push(qx.bom.element.Opacity.compile(b));
break;
case u:e.push(qx.bom.element.BoxSizing.compile(b));
break;
case p:e.push(qx.bom.element.Overflow.compileX(b));
break;
case q:e.push(qx.bom.element.Overflow.compileY(b));
break;
}}else{c=d[name];

if(!c){c=d[name]=g.hyphenate(name);
}e.push(c,L,b,H);
}}return e.join(w);
},setCss:qx.core.Variant.select(v,{"mshtml":function(V,W){V.style.cssText=W;
},"default":function(bm,bn){bm.setAttribute(n,bn);
}}),getCss:qx.core.Variant.select(v,{"mshtml":function(j){return j.style.cssText.toLowerCase();
},"default":function(X){return X.getAttribute(n);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(Y,name,ba,bb){{};
var bc=this.__dK;
name=bc.styleNames[name]||name;
if(bb!==false&&bc.special[name]){switch(name){case r:return qx.bom.element.Clip.set(Y,ba);
case t:return qx.bom.element.Cursor.set(Y,ba);
case s:return qx.bom.element.Opacity.set(Y,ba);
case u:return qx.bom.element.BoxSizing.set(Y,ba);
case p:return qx.bom.element.Overflow.setX(Y,ba);
case q:return qx.bom.element.Overflow.setY(Y,ba);
}}Y.style[name]=ba!==null?ba:w;
},setStyles:function(bj,bk,bl){{};

for(var name in bk){this.set(bj,name,bk[name],bl);
}},reset:function(k,name,l){var m=this.__dK;
name=m.styleNames[name]||name;
if(l!==false&&m.special[name]){switch(name){case r:return qx.bom.element.Clip.reset(k);
case t:return qx.bom.element.Cursor.reset(k);
case s:return qx.bom.element.Opacity.reset(k);
case u:return qx.bom.element.BoxSizing.reset(k);
case p:return qx.bom.element.Overflow.resetX(k);
case q:return qx.bom.element.Overflow.resetY(k);
}}k.style[name]=w;
},get:qx.core.Variant.select(v,{"mshtml":function(bo,name,bp,bq){var bv=this.__dK;
name=bv.styleNames[name]||name;
if(bq!==false&&bv.special[name]){switch(name){case r:return qx.bom.element.Clip.get(bo,bp);
case t:return qx.bom.element.Cursor.get(bo,bp);
case s:return qx.bom.element.Opacity.get(bo,bp);
case u:return qx.bom.element.BoxSizing.get(bo,bp);
case p:return qx.bom.element.Overflow.getX(bo,bp);
case q:return qx.bom.element.Overflow.getY(bo,bp);
}}if(!bo.currentStyle){return bo.style[name]||w;
}switch(bp){case this.LOCAL_MODE:return bo.style[name]||w;
case this.CASCADED_MODE:return bo.currentStyle[name]||w;
default:var bu=bo.currentStyle[name]||w;
if(/^-?[\.\d]+(px)?$/i.test(bu)){return bu;
}var bt=bv.mshtmlPixel[name];

if(bt){var br=bo.style[name];
bo.style[name]=bu||0;
var bs=bo.style[bt]+U;
bo.style[name]=br;
return bs;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bu)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bu;
}},"default":function(bd,name,be,bf){var bi=this.__dK;
name=bi.styleNames[name]||name;
if(bf!==false&&bi.special[name]){switch(name){case r:return qx.bom.element.Clip.get(bd,be);
case t:return qx.bom.element.Cursor.get(bd,be);
case s:return qx.bom.element.Opacity.get(bd,be);
case u:return qx.bom.element.BoxSizing.get(bd,be);
case p:return qx.bom.element.Overflow.getX(bd,be);
case q:return qx.bom.element.Overflow.getY(bd,be);
}}switch(be){case this.LOCAL_MODE:return bd.style[name]||w;
case this.CASCADED_MODE:if(bd.currentStyle){return bd.currentStyle[name]||w;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bg=qx.dom.Node.getDocument(bd);
var bh=bg.defaultView.getComputedStyle(bd,null);
return bh?bh[name]:w;
}}})}});
})();
(function(){var w="auto",v="px",u=",",t="clip:auto;",s="rect(",r=");",q="",p=")",o="qx.bom.element.Clip",n="string",k="rect(auto)",m="clip:rect(",l="clip",j="rect(auto,auto,auto,auto)";
qx.Class.define(o,{statics:{compile:function(F){if(!F){return t;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?w:J+v);
K=w;
}else{G=(J==null?w:K+J+v);
K=K+v;
}
if(top==null){H=(I==null?w:I+v);
top=w;
}else{H=(I==null?w:top+I+v);
top=top+v;
}return m+top+u+G+u+H+u+K+r;
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
},set:function(y,z){if(!z){y.style.clip=j;
return;
}var E=z.left;
var top=z.top;
var D=z.width;
var C=z.height;
var A,B;

if(E==null){A=(D==null?w:D+v);
E=w;
}else{A=(D==null?w:E+D+v);
E=E+v;
}
if(top==null){B=(C==null?w:C+v);
top=w;
}else{B=(C==null?w:top+C+v);
top=top+v;
}y.style.clip=s+top+u+A+u+B+u+E+p;
},reset:function(x){x.style.clip=qx.bom.client.Engine.MSHTML?k:w;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__dM:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(q){return f+(this.__dM[q]||q)+d;
},get:function(n,o){return qx.bom.element.Style.get(n,b,o,false);
},set:function(l,m){l.style.cursor=this.__dM[m]||m;
},reset:function(p){p.style.cursor=g;
}}});
})();
(function(){var t="",s="qx.client",r=";",q="filter",p="opacity:",o="opacity",n="MozOpacity",m=");",l=")",k="zoom:1;filter:alpha(opacity=",h="qx.bom.element.Opacity",j="alpha(opacity=",i="-moz-opacity:";
qx.Class.define(h,{statics:{compile:qx.core.Variant.select(s,{"mshtml":function(u){if(u>=1){return t;
}
if(u<0.00001){u=0;
}return k+(u*100)+m;
},"gecko":function(B){if(B==1){B=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return i+B+r;
}else{return p+B+r;
}},"default":function(g){if(g==1){return t;
}return p+g+r;
}}),set:qx.core.Variant.select(s,{"mshtml":function(I,J){var K=qx.bom.element.Style.get(I,q,qx.bom.element.Style.COMPUTED_MODE,false);
if(J>=1){I.style.filter=K.replace(/alpha\([^\)]*\)/gi,t);
return;
}
if(J<0.00001){J=0;
}if(!I.currentStyle.hasLayout){I.style.zoom=1;
}I.style.filter=K.replace(/alpha\([^\)]*\)/gi,t)+j+J*100+l;
},"gecko":function(z,A){if(A==1){A=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){z.style.MozOpacity=A;
}else{z.style.opacity=A;
}},"default":function(a,b){if(b==1){b=t;
}a.style.opacity=b;
}}),reset:qx.core.Variant.select(s,{"mshtml":function(x){var y=qx.bom.element.Style.get(x,q,qx.bom.element.Style.COMPUTED_MODE,false);
x.style.filter=y.replace(/alpha\([^\)]*\)/gi,t);
},"gecko":function(w){if(qx.bom.client.Engine.VERSION<1.7){w.style.MozOpacity=t;
}else{w.style.opacity=t;
}},"default":function(v){v.style.opacity=t;
}}),get:qx.core.Variant.select(s,{"mshtml":function(c,d){var e=qx.bom.element.Style.get(c,q,d,false);

if(e){var f=e.match(/alpha\(opacity=(.*)\)/);

if(f&&f[1]){return parseFloat(f[1])/100;
}}return 1.0;
},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,qx.bom.client.Engine.VERSION<1.7?n:o,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(C,D){var E=qx.bom.element.Style.get(C,o,D,false);

if(E!=null){return parseFloat(E);
}return 1.0;
}})}});
})();
(function(){var D="qx.client",C="",B="boxSizing",A="box-sizing",z=":",y="border-box",x="qx.bom.element.BoxSizing",w="KhtmlBoxSizing",v="-moz-box-sizing",u="WebkitBoxSizing",r=";",t="-khtml-box-sizing",s="content-box",q="-webkit-box-sizing",p="MozBoxSizing";
qx.Class.define(x,{statics:{__dN:qx.core.Variant.select(D,{"mshtml":null,"webkit":[B,w,u],"gecko":[p],"opera":[B]}),__dO:qx.core.Variant.select(D,{"mshtml":null,"webkit":[A,t,q],"gecko":[v],"opera":[A]}),__dP:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dQ:function(E){var F=this.__dP;
return F.tags[E.tagName.toLowerCase()]||F.types[E.type];
},compile:qx.core.Variant.select(D,{"mshtml":function(o){{};
},"default":function(g){var j=this.__dO;
var h=C;

if(j){for(var i=0,l=j.length;i<l;i++){h+=j[i]+z+g+r;
}}return h;
}}),get:qx.core.Variant.select(D,{"mshtml":function(G){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(G))){if(!this.__dQ(G)){return s;
}}return y;
},"default":function(k){var n=this.__dN;
var m;

if(n){for(var i=0,l=n.length;i<l;i++){m=qx.bom.element.Style.get(k,n[i],null,false);

if(m!=null&&m!==C){return m;
}}}return C;
}}),set:qx.core.Variant.select(D,{"mshtml":function(e,f){{};
},"default":function(b,c){var d=this.__dN;

if(d){for(var i=0,l=d.length;i<l;i++){b.style[d[i]]=c;
}}}}),reset:function(a){this.set(a,C);
}}});
})();
(function(){var c="CSS1Compat",b="qx.bom.Document";
qx.Class.define(b,{statics:{isQuirksMode:function(a){return (a||window).document.compatMode!==c;
},isStandardMode:function(g){return (g||window).document.compatMode===c;
},getWidth:function(d){var e=(d||window).document;
var f=qx.bom.Viewport.getWidth(d);
var scroll=e.compatMode===c?e.documentElement.scrollWidth:e.body.scrollWidth;
return Math.max(scroll,f);
},getHeight:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getHeight(h);
var scroll=i.compatMode===c?i.documentElement.scrollHeight:i.body.scrollHeight;
return Math.max(scroll,j);
}}});
})();
(function(){var i="qx.client",h="CSS1Compat",g="qx.bom.Viewport";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(i,{"opera":function(d){return (d||window).document.body.clientWidth;
},"webkit":function(l){return (l||window).innerWidth;
},"default":function(m){var n=(m||window).document;
return n.compatMode===h?n.documentElement.clientWidth:n.body.clientWidth;
}}),getHeight:qx.core.Variant.select(i,{"opera":function(j){return (j||window).document.body.clientHeight;
},"webkit":function(c){return (c||window).innerHeight;
},"default":function(a){var b=(a||window).document;
return b.compatMode===h?b.documentElement.clientHeight:b.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(i,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(o){return (o||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(i,{"mshtml":function(e){var f=(e||window).document;
return f.documentElement.scrollTop||f.body.scrollTop;
},"default":function(k){return (k||window).pageYOffset;
}})}});
})();
(function(){var J="",I="qx.client",H="hidden",G="-moz-scrollbars-none",F="overflow",E=";",D="overflowY",C=":",B="overflowX",A="overflow:",V="none",U="scroll",T="borderLeftStyle",S="borderRightStyle",R="div",Q="borderRightWidth",P="overflow-y",O="borderLeftWidth",N="-moz-scrollbars-vertical",M="100px",K="qx.bom.element.Overflow",L="overflow-x";
qx.Class.define(K,{statics:{__dJ:null,getScrollbarWidth:function(){if(this.__dJ!==null){return this.__dJ;
}var bU=qx.bom.element.Style;
var bW=function(f,g){return parseInt(bU.get(f,g))||0;
};
var bX=function(bO){return (bU.get(bO,S)==V?0:bW(bO,Q));
};
var bV=function(bx){return (bU.get(bx,T)==V?0:bW(bx,O));
};
var ca=qx.core.Variant.select(I,{"mshtml":function(bT){if(bU.get(bT,D)==H||bT.clientWidth==0){return bX(bT);
}return Math.max(0,bT.offsetWidth-bT.clientLeft-bT.clientWidth);
},"default":function(cd){if(cd.clientWidth==0){var ce=bU.get(cd,F);
var cf=(ce==U||ce==N?16:0);
return Math.max(0,bX(cd)+cf);
}return Math.max(0,(cd.offsetWidth-cd.clientWidth-bV(cd)));
}});
var bY=function(h){return ca(h)-bX(h);
};
var t=document.createElement(R);
var s=t.style;
s.height=s.width=M;
s.overflow=U;
document.body.appendChild(t);
var c=bY(t);
this.__dJ=c?c:16;
document.body.removeChild(t);
return this.__dJ;
},_compile:qx.core.Variant.select(I,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(be,bf){if(bf==H){bf=G;
}return A+bf+E;
}:
function(bC,bD){return bC+C+bD+E;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(d,e){return A+e+E;
}:
function(W,X){return W+C+X+E;
},"default":function(bJ,bK){return bJ+C+bK+E;
}}),compileX:function(bN){return this._compile(L,bN);
},compileY:function(bg){return this._compile(P,bg);
},getX:qx.core.Variant.select(I,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(l,m){var n=qx.bom.element.Style.get(l,F,m,false);

if(n===G){n=H;
}return n;
}:
function(o,p){return qx.bom.element.Style.get(o,B,p,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bH,bI){return qx.bom.element.Style.get(bH,F,bI,false);
}:
function(q,r){return qx.bom.element.Style.get(q,B,r,false);
},"default":function(bp,bq){return qx.bom.element.Style.get(bp,B,bq,false);
}}),setX:qx.core.Variant.select(I,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(w,x){if(x==H){x=G;
}w.style.overflow=x;
}:
function(bn,bo){bn.style.overflowX=bo;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bh,bi){bh.style.overflow=bi;
}:
function(by,bz){by.style.overflowX=bz;
},"default":function(bP,bQ){bP.style.overflowX=bQ;
}}),resetX:qx.core.Variant.select(I,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bG){bG.style.overflow=J;
}:
function(v){v.style.overflowX=J;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(y,z){y.style.overflow=J;
}:
function(bs,bt){bs.style.overflowX=J;
},"default":function(bw){bw.style.overflowX=J;
}}),getY:qx.core.Variant.select(I,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb,bc){var bd=qx.bom.element.Style.get(bb,F,bc,false);

if(bd===G){bd=H;
}return bd;
}:
function(a,b){return qx.bom.element.Style.get(a,D,b,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bj,bk){return qx.bom.element.Style.get(bj,F,bk,false);
}:
function(bR,bS){return qx.bom.element.Style.get(bR,D,bS,false);
},"default":function(cb,cc){return qx.bom.element.Style.get(cb,D,cc,false);
}}),setY:qx.core.Variant.select(I,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bL,bM){if(bM===H){bM=G;
}bL.style.overflow=bM;
}:
function(j,k){j.style.overflowY=k;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bE,bF){bE.style.overflow=bF;
}:
function(bu,bv){bu.style.overflowY=bv;
},"default":function(bl,bm){bl.style.overflowY=bm;
}}),resetY:qx.core.Variant.select(I,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(i){i.style.overflow=J;
}:
function(u){u.style.overflowY=J;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bA,bB){bA.style.overflow=J;
}:
function(Y,ba){Y.style.overflowY=J;
},"default":function(br){br.style.overflowY=J;
}})}});
})();
(function(){var n="qx.client",m="qx.io2.ImageLoader",k="load";
qx.Bootstrap.define(m,{statics:{__gT:{},__gU:{width:null,height:null},__gV:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(u){var v=this.__gT[u];
return !!(v&&v.loaded);
},isFailed:function(w){var x=this.__gT[w];
return !!(x&&x.failed);
},isLoading:function(p){var q=this.__gT[p];
return !!(q&&q.loading);
},getFormat:function(t){if(t!=null&&this.__gT[t]){return this.__gT[t]||null;
}else{return null;
}},getSize:function(o){return this.__gT[o]||this.__gU;
},getWidth:function(a){var b=this.__gT[a];
return b?b.width:null;
},getHeight:function(r){var s=this.__gT[r];
return s?s.height:null;
},load:function(c,d,e){var f=this.__gT[c];

if(!f){f=this.__gT[c]={};
}if(d&&!e){e=window;
}if(f.loaded||f.loading||f.failed){if(d){if(f.loading){f.callbacks.push(d,e);
}else{d.call(e,c,f);
}}}else{f.loading=true;
f.callbacks=[];

if(d){f.callbacks.push(d,e);
}var h=new Image();
var g=qx.lang.Function.listener(this.__gW,this,h,c);
h.onload=g;
h.onerror=g;
h.src=c;
}},__gW:function(event,y,z){var A=this.__gT[z];
if(event.type===k){A.loaded=true;
A.width=this.__gX(y);
A.height=this.__gY(y);
var B=this.__gV.exec(z);

if(B!=null){A.format=B[1];
}}else{A.failed=true;
}y.onload=y.onerror=null;
var C=A.callbacks;
delete A.loading;
delete A.callbacks;
for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}},__gX:qx.core.Variant.select(n,{"gecko":function(E){return E.naturalWidth;
},"default":function(F){return F.width;
}}),__gY:qx.core.Variant.select(n,{"gecko":function(j){return j.naturalHeight;
},"default":function(D){return D.height;
}})}});
})();
(function(){var h="_window",g="_manager",f="qx.event.handler.Window";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(w){arguments.callee.base.call(this);
this._manager=w;
this._window=w.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(s,t){},registerEvent:function(i,j,k){},unregisterEvent:function(a,b,c){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var v=qx.event.handler.Window.SUPPORTED_TYPES;

for(var u in v){qx.bom.Event.addNativeListener(this._window,u,this._onNativeWrapper);
}},_stopWindowObserver:function(){var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.removeNativeListener(this._window,l,this._onNativeWrapper);
}},_onNative:function(e){if(this.isDisposed()){return;
}var o=this._window;
var r=o.document;
var p=r.documentElement;
var n=e.target||e.srcElement;

if(n==null||n===o||n===r||n===p){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,o]);
qx.event.Registration.dispatchEvent(o,event);
var q=event.getReturnValue();

if(q!=null){e.returnValue=q;
return q;
}}}},destruct:function(){this._stopWindowObserver();
this._disposeFields(g,h);
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var g="ready",f="qx.application",d="beforeunload",c="qx.core.Init",b="shutdown";
qx.Class.define(c,{statics:{getApplication:function(){return this.__bA||null;
},__bz:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(f);
var j=qx.Class.getByName(i);

if(j){this.__bA=new j;
var h=new Date;
this.__bA.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__bA.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__bB:function(e){var k=this.__bA;

if(k){e.setReturnValue(k.close());
}},__bC:function(){var l=this.__bA;

if(l){l.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,g,a.__bz,a);
qx.event.Registration.addListener(window,b,a.__bC,a);
qx.event.Registration.addListener(window,d,a.__bB,a);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var j="z6",h="z8",g="z5",f="z4",e="z1",d="z7",c="z3",b="z2",a="demobrowser.demo.bom.ScrollIntoView";
qx.Class.define(a,{extend:qx.application.Native,statics:{test:function(){var m=[e,b,c,f,g,j,d,h];

for(var i=0,l=m.length;i<l;i++){var k=document.getElementById(m[i]);
qx.log.Logger.info("Width: "+m[i]+": offset="+k.offsetWidth+", scroll="+k.scrollWidth+", client="+k.clientWidth);
qx.log.Logger.info("Height: "+m[i]+": offset="+k.offsetHeight+", scroll="+k.scrollHeight+", client="+k.clientHeight);
}}}});
})();
(function(){var c="qx.event.type.Native",b="_native",a="_returnValue";
qx.Class.define(c,{extend:qx.event.type.Event,members:{init:function(d,e,f,g,h){arguments.callee.base.call(this,g,h);
this._target=e||qx.bom.Event.getTarget(d);
this._relatedTarget=f||qx.bom.Event.getRelatedTarget(d);

if(d.timeStamp){this._timeStamp=d.timeStamp;
}this._native=d;
return this;
},clone:function(i){var j=arguments.callee.base.call(this,i);
j._native=this._native;
j._returnValue=this._returnValue;
return j;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},stop:function(){this.stopPropagation();
this.preventDefault();
},getNativeEvent:function(){return this._native;
},setReturnValue:function(k){this._returnValue=k;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._disposeFields(b,a);
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="X11",d="MacIntel",c="MacPPC";
qx.Bootstrap.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__cw:function(){var o=navigator.platform;
if(o==null||o===l){o=navigator.userAgent;
}
if(o.indexOf(f)!=-1||o.indexOf(m)!=-1||o.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(h)!=-1||o.indexOf(c)!=-1||o.indexOf(d)!=-1||o.indexOf(n)!=-1||o.indexOf(g)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(b)!=-1||o.indexOf(j)!=-1||o.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(a){a.__cw();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",G=")",F="winxp",E="freebsd",D="sunos",C="SV1",B="|",A="nintendods",z="winnt4",y="wince",x="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="g",u="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(u,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__cx:{"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":F,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":z,"Win 9x 4.90":x,"Windows CE":y,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":E,"NetBSD":m,"OpenBSD":k,"SunOS":D,"Symbian System":t,"Nitro":A,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cy:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__cx){J.push(I);
}var L=new RegExp(l+J.join(B).replace(/\./g,r)+G,v);

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
}else{this.NAME=this.__cx[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(C)!==-1){this.SP2=true;
}}}}},defer:function(H){H.__cy();
}});
})();
(function(){var x="log",w=" ",v="debug",u="qx.client",t="[",s=", ",r="}",q="{",p="]:",o="ms",l="map",n="]",m="qx.log.appender.Native",k=":";
qx.Bootstrap.define(m,{statics:{process:qx.core.Variant.select(u,{"gecko":function(e){if(window.console&&console.firebug){console[e.level].apply(console,this.__hs(e));
}},"mshtml":function(f){if(window.console){var h=f.level;

if(h==v){h=x;
}var g=this.__hs(f).join(w);
console[h](g);
}},"webkit":function(a){if(window.console){var c=a.level;

if(c==v){c=x;
}var b=this.__hs(a).join(w);
console[c](b);
}},"opera":function(H){}}),__hs:qx.core.Variant.select(u,{"gecko|webkit|mshtml":function(y){var G=[];
G.push(y.offset+o);

if(y.object){var z=y.win.qx.core.ObjectRegistry.fromHashCode(y.object);

if(z){G.push(z.classname+t+z.$$hash+p);
}}else if(y.clazz){G.push(y.clazz.classname+k);
}var A=y.items;
var D,F;

for(var i=0,E=A.length;i<E;i++){D=A[i];
F=D.text;

if(F instanceof Array){var B=[];

for(var j=0,C=F.length;j<C;j++){B.push(F[j].text);
}
if(D.type===l){G.push(q,B.join(s),r);
}else{G.push(t,B.join(s),n);
}}else{G.push(F);
}}return G;
},"default":null})},defer:function(d){qx.log.Logger.register(d);
}});
})();
(function(){var g="qx.event.handler.UserAction",f="__cS",e="__cT";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){arguments.callee.base.call(this);
this.__cS=d;
this.__cT=d.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(h,i,j){},unregisterEvent:function(k,l,m){}},destruct:function(){this._disposeFields(f,e);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var x="keydown",w="keypress",v="qx.client",u="NumLock",t="keyup",s="Enter",r="0",q="9",p="-",o="PageUp",bI="+",bH="PrintScreen",bG="gecko",bF="A",bE="Z",bD="Left",bC="F5",bB="Down",bA="Up",bz="F11",E="F6",F="useraction",C="F3",D="keyinput",A="Insert",B="F8",y="End",z="/",M="Delete",N="*",bc="F1",X="F4",bk="Home",bf="F2",bv="F12",bp="PageDown",S="F7",by="F9",bx="F10",bw="Right",Q="text",U="Escape",W="webkit",ba="5",bd="3",bg="Meta",bm="7",br="CapsLock",G="input",H="Control",T="Space",bj="Tab",bi="Shift",bh="Pause",bo="Unidentified",bn="__dX",be="qx.event.handler.Keyboard",bl="mshtml",l="__ea",bq="mshtml|webkit",I="6",J="off",Y="Apps",m="4",n="Alt",P="2",K="Scroll",L="1",O="8",bb="Win",bt="__dY",bs="__eb",V="autoComplete",bu=",",R="Backspace";
qx.Class.define(be,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cd){arguments.callee.base.call(this);
this.__dX=cd;
this.__dY=cd.getWindow();
if(qx.core.Variant.isSet(v,bG)){this.__ea=this.__dY;
}else{this.__ea=this.__dY.document.documentElement;
}this.__eb={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cE){if(this._identifierToKeyCodeMap[cE]){return true;
}
if(cE.length!=1){return false;
}
if(cE>=r&&cE<=q){return true;
}
if(cE>=bF&&cE<=bE){return true;
}
switch(cE){case bI:case p:case N:case z:return true;
default:return false;
}}},members:{__ec:null,__dX:null,__dY:null,__ea:null,__eb:null,canHandleEvent:function(b,c){},registerEvent:function(i,j,k){},unregisterEvent:function(cB,cC,cD){},_fireInputEvent:function(ce,cf){var cg=this.__dX.getHandler(qx.event.handler.Focus);
var ch=cg.getActive();
if(!ch||ch.offsetWidth==0){ch=cg.getFocus();
}if(ch&&ch.offsetWidth!=0){var event=qx.event.Registration.createEvent(D,qx.event.type.KeyInput,[ce,ch,cf]);
this.__dX.dispatchEvent(ch,event);
}if(this.__dY){qx.event.Registration.fireEvent(this.__dY,F,qx.event.type.Data,[D]);
}},_fireSequenceEvent:function(cj,ck,cl){var cm=this.__dX.getHandler(qx.event.handler.Focus);
var co=cm.getActive();
if(!co||co.offsetWidth==0){co=cm.getFocus();
}if(!co||co.offsetWidth==0){co=this.__dX.getWindow().document.body;
}var event=qx.event.Registration.createEvent(ck,qx.event.type.KeySequence,[cj,co,cl]);
this.__dX.dispatchEvent(co,event);
if(qx.core.Variant.isSet(v,bq)){if(ck==x&&event.getDefaultPrevented()){var cn=cj.keyCode;

if(!(this._isNonPrintableKeyCode(cn)||cn==8||cn==9)){this._fireSequenceEvent(cj,w,cl);
}}}if(this.__dY){qx.event.Registration.fireEvent(this.__dY,F,qx.event.type.Data,[ck]);
}},_initKeyObserver:function(){this.__ec=qx.lang.Function.listener(this.__ee,this);
this.__ed=qx.lang.Function.listener(this.__eh,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ea,t,this.__ec);
Event.addNativeListener(this.__ea,x,this.__ec);
Event.addNativeListener(this.__ea,w,this.__ed);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ea,t,this.__ec);
Event.removeNativeListener(this.__ea,x,this.__ec);
Event.removeNativeListener(this.__ea,w,this.__ed);

for(var cL in (this.__eg||{})){var cK=this.__eg[cL];
Event.removeNativeListener(cK.target,w,cK.callback);
}delete (this.__eg);
},__ee:qx.core.Variant.select(v,{"mshtml":function(bO){bO=window.event||bO;
var bR=bO.keyCode;
var bP=0;
var bQ=bO.type;
if(!(this.__eb[bR]==x&&bQ==x)){this._idealKeyHandler(bR,bP,bQ,bO);
}if(bQ==x){if(this._isNonPrintableKeyCode(bR)||bR==8||bR==9){this._idealKeyHandler(bR,bP,w,bO);
}}this.__eb[bR]=bQ;
},"gecko":function(d){var h=this._keyCodeFix[d.keyCode]||d.keyCode;
var f=d.charCode;
var g=d.type;
if(qx.bom.client.Platform.WIN){var e=h?this._keyCodeToIdentifier(h):this._charCodeToIdentifier(f);

if(!(this.__eb[e]==x&&g==x)){this._idealKeyHandler(h,f,g,d);
}this.__eb[e]=g;
}else{this._idealKeyHandler(h,f,g,d);
}this.__ef(d.target,g,h);
},"webkit":function(bT){var bW=0;
var bU=0;
var bV=bT.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bV==t||bV==x){bW=this._charCode2KeyCode[bT.charCode]||bT.keyCode;
}else{if(this._charCode2KeyCode[bT.charCode]){bW=this._charCode2KeyCode[bT.charCode];
}else{bU=bT.charCode;
}}this._idealKeyHandler(bW,bU,bV,bT);
}else{bW=bT.keyCode;
if(!(this.__eb[bW]==x&&bV==x)){this._idealKeyHandler(bW,bU,bV,bT);
}if(bV==x){if(this._isNonPrintableKeyCode(bW)||bW==8||bW==9){this._idealKeyHandler(bW,bU,w,bT);
}}this.__eb[bW]=bV;
}},"opera":function(cJ){this._idealKeyHandler(cJ.keyCode,0,cJ.type,cJ);
}}),__ef:qx.core.Variant.select(v,{"gecko":function(bJ,bK,bL){if(bK===x&&(bL==33||bL==34||bL==38||bL==40)&&bJ.type==Q&&bJ.tagName.toLowerCase()===G&&bJ.getAttribute(V)!==J){if(!this.__eg){this.__eg={};
}var bM=qx.core.ObjectRegistry.toHashCode(bJ);

if(this.__eg[bM]){return;
}var self=this;
this.__eg[bM]={target:bJ,callback:function(cM){qx.bom.Event.stopPropagation(cM);
self.__eh(cM);
}};
qx.bom.Event.addNativeListener(bJ,w,this.__eg[bM].callback);
}},"default":null}),__eh:qx.core.Variant.select(v,{"mshtml":function(cp){cp=window.event||cp;

if(this._charCode2KeyCode[cp.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cp.keyCode],0,cp.type,cp);
}else{this._idealKeyHandler(0,cp.keyCode,cp.type,cp);
}},"gecko":function(cw){var cz=this._keyCodeFix[cw.keyCode]||cw.keyCode;
var cx=cw.charCode;
var cy=cw.type;
this._idealKeyHandler(cz,cx,cy,cw);
},"webkit":function(cq){if(qx.bom.client.Engine.VERSION<525.13){var ct=0;
var cr=0;
var cs=cq.type;

if(cs==t||cs==x){ct=this._charCode2KeyCode[cq.charCode]||cq.keyCode;
}else{if(this._charCode2KeyCode[cq.charCode]){ct=this._charCode2KeyCode[cq.charCode];
}else{cr=cq.charCode;
}}this._idealKeyHandler(ct,cr,cs,cq);
}else{if(this._charCode2KeyCode[cq.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cq.keyCode],0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}}},"opera":function(bS){if(this._keyCodeToIdentifierMap[bS.keyCode]){this._idealKeyHandler(bS.keyCode,0,bS.type,bS);
}else{this._idealKeyHandler(0,bS.keyCode,bS.type,bS);
}}}),_idealKeyHandler:function(bX,bY,ca,cb){if(!bX&&!bY){return;
}var cc;
if(bX){cc=this._keyCodeToIdentifier(bX);
this._fireSequenceEvent(cb,ca,cc);
}else{cc=this._charCodeToIdentifier(bY);
this._fireSequenceEvent(cb,w,cc);
this._fireInputEvent(cb,bY);
}},_specialCharCodeMap:{8:R,9:bj,13:s,27:U,32:T},_keyCodeToIdentifierMap:{16:bi,17:H,18:n,20:br,224:bg,37:bD,38:bA,39:bw,40:bB,33:o,34:bp,35:y,36:bk,45:A,46:M,112:bc,113:bf,114:C,115:X,116:bC,117:E,118:S,119:B,120:by,121:bx,122:bz,123:bv,144:u,44:bH,145:K,19:bh,91:bb,93:Y},_numpadToCharCode:{96:r.charCodeAt(0),97:L.charCodeAt(0),98:P.charCodeAt(0),99:bd.charCodeAt(0),100:m.charCodeAt(0),101:ba.charCodeAt(0),102:I.charCodeAt(0),103:bm.charCodeAt(0),104:O.charCodeAt(0),105:q.charCodeAt(0),106:N.charCodeAt(0),107:bI.charCodeAt(0),109:p.charCodeAt(0),110:bu.charCodeAt(0),111:z.charCodeAt(0)},_charCodeA:bF.charCodeAt(0),_charCodeZ:bE.charCodeAt(0),_charCode0:r.charCodeAt(0),_charCode9:q.charCodeAt(0),_isNonPrintableKeyCode:function(cA){return this._keyCodeToIdentifierMap[cA]?true:false;
},_isIdentifiableKeyCode:function(bN){if(bN>=this._charCodeA&&bN<=this._charCodeZ){return true;
}if(bN>=this._charCode0&&bN<=this._charCode9){return true;
}if(this._specialCharCodeMap[bN]){return true;
}if(this._numpadToCharCode[bN]){return true;
}if(this._isNonPrintableKeyCode(bN)){return true;
}return false;
},_keyCodeToIdentifier:function(cu){if(this._isIdentifiableKeyCode(cu)){var cv=this._numpadToCharCode[cu];

if(cv){return String.fromCharCode(cv);
}return (this._keyCodeToIdentifierMap[cu]||this._specialCharCodeMap[cu]||String.fromCharCode(cu));
}else{return bo;
}},_charCodeToIdentifier:function(ci){return this._specialCharCodeMap[ci]||String.fromCharCode(ci).toUpperCase();
},_identifierToKeyCode:function(a){return qx.event.handler.Keyboard._identifierToKeyCodeMap[a]||a.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this._disposeFields(bn,bt,l,bs);
},defer:function(cF,cG,cH){qx.event.Registration.addHandler(cF);
if(!cF._identifierToKeyCodeMap){cF._identifierToKeyCodeMap={};

for(var cI in cG._keyCodeToIdentifierMap){cF._identifierToKeyCodeMap[cG._keyCodeToIdentifierMap[cI]]=parseInt(cI,10);
}
for(var cI in cG._specialCharCodeMap){cF._identifierToKeyCodeMap[cG._specialCharCodeMap[cI]]=parseInt(cI,10);
}}
if(qx.core.Variant.isSet(v,bl)){cG._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(v,bG)){cG._keyCodeFix={12:cG._identifierToKeyCode(u)};
}else if(qx.core.Variant.isSet(v,W)){if(qx.bom.client.Engine.VERSION<525.13){cG._charCode2KeyCode={63289:cG._identifierToKeyCode(u),63276:cG._identifierToKeyCode(o),63277:cG._identifierToKeyCode(bp),63275:cG._identifierToKeyCode(y),63273:cG._identifierToKeyCode(bk),63234:cG._identifierToKeyCode(bD),63232:cG._identifierToKeyCode(bA),63235:cG._identifierToKeyCode(bw),63233:cG._identifierToKeyCode(bB),63272:cG._identifierToKeyCode(M),63302:cG._identifierToKeyCode(A),63236:cG._identifierToKeyCode(bc),63237:cG._identifierToKeyCode(bf),63238:cG._identifierToKeyCode(C),63239:cG._identifierToKeyCode(X),63240:cG._identifierToKeyCode(bC),63241:cG._identifierToKeyCode(E),63242:cG._identifierToKeyCode(S),63243:cG._identifierToKeyCode(B),63244:cG._identifierToKeyCode(by),63245:cG._identifierToKeyCode(bx),63246:cG._identifierToKeyCode(bz),63247:cG._identifierToKeyCode(bv),63248:cG._identifierToKeyCode(bH),3:cG._identifierToKeyCode(s),12:cG._identifierToKeyCode(u),13:cG._identifierToKeyCode(s)};
}else{cG._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var s="",r='</div>',q="Up",p="none",o="keypress",n='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',m="Enter",l="px",k='.qxconsole .messages .user-result{background:white}',j='.qxconsole .messages .level-error{background:#FFE2D5}',be="div",bd="user-command",bc='<div class="command">',bb='.qxconsole .command input:focus{outline:none;}',ba='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Y='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',X='.qxconsole .messages div{padding:0px 4px;}',W='.qxconsole .messages .level-debug{background:white}',V='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',U="DIV",z='.qxconsole .messages .level-user{background:#E3EFE9}',A='<div class="qxconsole">',x="D",y='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',v='.qxconsole .messages .type-string{color:black;font-weight:normal;}',w='.qxconsole .control a{text-decoration:none;color:black;}',t='<div class="messages">',u='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',B='<input type="text"/>',C="clear",J='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',N='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',L='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',Q='.qxconsole .messages .user-command{color:blue}',P="F7",E="qx.log.appender.Console",T='.qxconsole .messages .level-info{background:#DEEDFA}',S="block",R='.qxconsole .messages .level-warn{background:#FFF7D5}',D='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',F='.qxconsole .messages .user-error{background:#FFE2D5}',G='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',I='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',K=">>> ",M="Down",O='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(E,{statics:{init:function(){var d=[N,G,w,n,X,Q,k,F,W,T,R,j,z,v,O,u,H,y,ba,V,Y,D,L,J,bb];
qx.bom.Stylesheet.createElement(d.join(s));
var g=[A,I,t,r,bc,B,r,r];
var h=document.createElement(U);
h.innerHTML=g.join(s);
var f=h.firstChild;
document.body.appendChild(h.firstChild);
this.__ht=f;
this.__hu=f.childNodes[1];
this.__hv=f.childNodes[2].firstChild;
this.__hA();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,o,this.__hB,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__hu.innerHTML=s;
},process:function(i){this.__hu.appendChild(qx.log.appender.Util.toHtml(i));
this.__hw();
},__hw:function(){this.__hu.scrollTop=this.__hu.scrollHeight;
},__hx:true,toggle:function(){if(!this.__ht){this.init();
}else if(this.__ht.style.display==p){this.show();
}else{this.__ht.style.display=p;
}},show:function(){if(!this.__ht){this.init();
}else{this.__ht.style.display=S;
this.__hu.scrollTop=this.__hu.scrollHeight;
}},__hy:[],execute:function(){var bi=this.__hv.value;

if(bi==s){return;
}
if(bi==C){return this.clear();
}var bg=document.createElement(be);
bg.innerHTML=qx.log.appender.Util.escapeHTML(K+bi);
bg.className=bd;
this.__hy.push(bi);
this.__hz=this.__hy.length;
this.__hu.appendChild(bg);
this.__hw();

try{var bh=window.eval(bi);
}catch(c){qx.log.Logger.error(c);
}
if(bh!==undefined){qx.log.Logger.debug(bh);
}},__hA:function(e){this.__hu.style.height=(this.__ht.clientHeight-this.__ht.firstChild.offsetHeight-this.__ht.lastChild.offsetHeight)+l;
},__hB:function(e){var b=e.getKeyIdentifier();
if((b==P)||(b==x&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__ht){return;
}if(!qx.dom.Hierarchy.contains(this.__ht,e.getTarget())){return;
}if(b==m&&this.__hv.value!=s){this.execute();
this.__hv.value=s;
}if(b==q||b==M){this.__hz+=b==q?-1:1;
this.__hz=Math.min(Math.max(0,this.__hz),this.__hy.length);
var a=this.__hy[this.__hz];
this.__hv.value=a||s;
this.__hv.select();
}}},defer:function(bf){qx.event.Registration.addListener(document.documentElement,o,bf.__hB,bf);
}});
})();
(function(){var C="qx.client",B="blur",A="focus",z="mousedown",y="on",x="mouseup",w="DOMFocusOut",v="DOMFocusIn",u="selectstart",t="onmousedown",ba="onfocusout",Y="onfocusin",X="onmouseup",W="onselectstart",V="draggesture",U="_document",T="_root",S="qx.event.handler.Focus",R="_applyFocus",Q="_window",J="deactivate",K="_applyActive",H="focusin",I="qxSelectable",F="tabIndex",G="off",D="_body",E="activate",L="focusout",M="__mouseActive",O="_manager",N="qxKeepFocus",P="qxKeepActive";
qx.Class.define(S,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(br){arguments.callee.base.call(this);
this._manager=br;
this._window=br.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:K,nullable:true},focus:{apply:R,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{canHandleEvent:function(o,p){},registerEvent:function(q,r,s){},unregisterEvent:function(bg,bh,bi){},focus:function(bE){try{bE.focus();
}catch(bx){}this.setFocus(bE);
this.setActive(bE);
},activate:function(bD){this.setActive(bD);
},blur:function(c){try{c.blur();
}catch(bI){}
if(this.getActive()===c){this.resetActive();
}
if(this.getFocus()===c){this.resetFocus();
}},deactivate:function(bB){if(this.getActive()===bB){this.resetActive();
}},tryActivate:function(bG){var bH=this.__fs(bG);

if(bH){this.setActive(bH);
}},__eU:function(g,h,i,j){var l=qx.event.Registration;
var k=l.createEvent(i,qx.event.type.Focus,[g,h,j]);
l.dispatchEvent(g,k);
},_windowFocused:true,__eV:function(){if(this._windowFocused){this._windowFocused=false;
this.__eU(this._window,null,B,false);
}},__eW:function(){if(!this._windowFocused){this._windowFocused=true;
this.__eU(this._window,null,A,false);
}},_initObserver:qx.core.Variant.select(C,{"gecko":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fa=qx.lang.Function.listener(this.__fm,this);
this.__fb=qx.lang.Function.listener(this.__fl,this);
this.__fc=qx.lang.Function.listener(this.__fg,this);
this._document.addEventListener(z,this.__eX,true);
this._document.addEventListener(x,this.__eY,true);
this._window.addEventListener(A,this.__fa,true);
this._window.addEventListener(B,this.__fb,true);
this._window.addEventListener(V,this.__fc,true);
},"mshtml":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fd=qx.lang.Function.listener(this.__fh,this);
this.__fe=qx.lang.Function.listener(this.__fi,this);
this.__ff=qx.lang.Function.listener(this.__fp,this);
this._document.attachEvent(t,this.__eX);
this._document.attachEvent(X,this.__eY);
this._document.attachEvent(Y,this.__fd);
this._document.attachEvent(ba,this.__fe);
this._document.attachEvent(W,this.__ff);
},"webkit":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fe=qx.lang.Function.listener(this.__fi,this);
this.__fa=qx.lang.Function.listener(this.__fm,this);
this.__fb=qx.lang.Function.listener(this.__fl,this);
this.__ff=qx.lang.Function.listener(this.__fp,this);
this._document.addEventListener(z,this.__eX,true);
this._document.addEventListener(x,this.__eY,true);
this._document.addEventListener(u,this.__ff,false);
this._window.addEventListener(w,this.__fe,true);
this._window.addEventListener(A,this.__fa,true);
this._window.addEventListener(B,this.__fb,true);
},"opera":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fd=qx.lang.Function.listener(this.__fh,this);
this.__fe=qx.lang.Function.listener(this.__fi,this);
this._document.addEventListener(z,this.__eX,true);
this._document.addEventListener(x,this.__eY,true);
this._window.addEventListener(v,this.__fd,true);
this._window.addEventListener(w,this.__fe,true);
}}),_stopObserver:qx.core.Variant.select(C,{"gecko":function(){this._document.removeEventListener(z,this.__eX,true);
this._document.removeEventListener(x,this.__eY,true);
this._window.removeEventListener(A,this.__fa,true);
this._window.removeEventListener(B,this.__fb,true);
this._window.removeEventListener(V,this.__fc,true);
},"mshtml":function(){this._document.detachEvent(t,this.__eX);
this._document.detachEvent(X,this.__eY);
this._document.detachEvent(Y,this.__fd);
this._document.detachEvent(ba,this.__fe);
this._document.detachEvent(W,this.__ff);
},"webkit":function(){this._document.removeEventListener(z,this.__eX,true);
this._document.removeEventListener(u,this.__ff,false);
this._window.removeEventListener(v,this.__fd,true);
this._window.removeEventListener(w,this.__fe,true);
this._window.removeEventListener(A,this.__fa,true);
this._window.removeEventListener(B,this.__fb,true);
},"opera":function(){this._document.removeEventListener(z,this.__eX,true);
this._window.removeEventListener(v,this.__fd,true);
this._window.removeEventListener(w,this.__fe,true);
this._window.removeEventListener(A,this.__fa,true);
this._window.removeEventListener(B,this.__fb,true);
}}),__fg:qx.core.Variant.select(C,{"gecko":function(e){if(!this.__ft(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null}),__fh:qx.core.Variant.select(C,{"mshtml":function(e){this.__eW();
var bN=e.srcElement;
var bM=this.__fr(bN);

if(bM){this.setFocus(bM);
}this.tryActivate(bN);
},"opera":function(e){var bw=e.target;

if(bw==this._document||bw==this._window){this.__eW();

if(this.__fj){this.setFocus(this.__fj);
delete this.__fj;
}
if(this.__fk){this.setActive(this.__fk);
delete this.__fk;
}}else{this.setFocus(bw);
this.tryActivate(bw);
if(!this.__ft(bw)){bw.selectionStart=0;
bw.selectionEnd=0;
}}},"default":null}),__fi:qx.core.Variant.select(C,{"mshtml":function(e){if(!e.toElement){this.__eV();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var by=e.target;

if(by===this.getFocus()){this.resetFocus();
}
if(by===this.getActive()){this.resetActive();
}},"opera":function(e){var bF=e.target;

if(bF==this._document){this.__eV();
this.__fj=this.getFocus();
this.__fk=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bF===this.getFocus()){this.resetFocus();
}
if(bF===this.getActive()){this.resetActive();
}}},"default":null}),__fl:qx.core.Variant.select(C,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__eV();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__eV();
this.__fj=this.getFocus();
this.__fk=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null}),__fm:qx.core.Variant.select(C,{"gecko":function(e){var bk=e.target;

if(bk===this._window||bk===this._document){this.__eW();
bk=this._body;
}this.setFocus(bk);
this.tryActivate(bk);
},"webkit":function(e){var bs=e.target;

if(bs===this._window||bs===this._document){this.__eW();

if(this.__fj){this.setFocus(this.__fj);
delete this.__fj;
}
if(this.__fk){this.setActive(this.__fk);
delete this.__fk;
}}else{this.setFocus(bs);
this.tryActivate(bs);
}},"default":null}),__fn:qx.core.Variant.select(C,{"gecko":function(e){var bn=e.target;
var bl=this.__fr(bn);
var bm=this.__ft(bn);

if(!bm){qx.bom.Event.preventDefault(e);
if(bl){bl.focus();
}}else if(!bl){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bu=e.srcElement;
var bt=this.__fr(bu);

if(bt){if(!this.__ft(bu)){bu.unselectable=y;
document.selection.empty();
bt.focus();
}}else{qx.bom.Event.preventDefault(e);
if(!this.__ft(bu)){bu.unselectable=y;
}}},"webkit":function(e){var bc=e.target;
var bb=this.__fr(bc);

if(bb){this.setFocus(bb);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bL=e.target;
var bJ=this.__fr(bL);

if(!this.__ft(bL)){qx.bom.Event.preventDefault(e);
if(bJ){var bK=this.getFocus();

if(bK&&bK.selectionEnd){bK.selectionStart=0;
bK.selectionEnd=0;
bK.blur();
}if(bJ){this.setFocus(bJ);
}}}else if(bJ){this.setFocus(bJ);
}},"default":null}),__fo:qx.core.Variant.select(C,{"mshtml":function(e){var bj=e.srcElement;

if(bj.unselectable){bj.unselectable=G;
}this.tryActivate(bj);
},"gecko":function(e){var bC=e.target;

while(bC&&bC.offsetWidth===undefined){bC=bC.parentNode;
}
if(bC){this.tryActivate(bC);
}},"webkit|opera":function(e){this.tryActivate(e.target);
},"default":null}),__fp:qx.core.Variant.select(C,{"mshtml|webkit":function(e){if(!this.__ft(e.srcElement)){qx.bom.Event.preventDefault(e);
}},"default":null}),__fq:function(bd){var be=qx.bom.element.Attribute.get(bd,F);

if(be>=1){return true;
}var bf=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(be>=0&&bf[bd.tagName]){return true;
}return false;
},__fr:function(bv){while(bv&&bv.nodeType===1){if(bv.getAttribute(N)==y){return null;
}
if(this.__fq(bv)){return bv;
}bv=bv.parentNode;
}return this._body;
},__fs:function(d){var f=d;

while(d&&d.nodeType===1){if(d.getAttribute(P)==y){return null;
}d=d.parentNode;
}return f;
},__ft:function(bz){while(bz&&bz.nodeType===1){var bA=bz.getAttribute(I);

if(bA!=null){return bA===y;
}bz=bz.parentNode;
}return true;
},_applyActive:function(a,b){if(b){this.__eU(b,a,J,true);
}
if(a){this.__eU(a,b,E,true);
}},_applyFocus:function(m,n){if(n){this.__eU(n,m,L,true);
}
if(m){this.__eU(m,n,H,true);
}if(n){this.__eU(n,m,B,false);
}
if(m){this.__eU(m,n,A,false);
}}},destruct:function(){this._stopObserver();
this._disposeFields(O,Q,U,T,D,M);
},defer:function(bo){qx.event.Registration.addHandler(bo);
var bp=bo.FOCUSABLE_ELEMENTS;

for(var bq in bp){bp[bq.toUpperCase()]=1;
}}});
})();
(function(){var c="abstract",b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:c,construct:function(a){this._manager=a;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(e,event,f){return event.getBubbles();
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
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var n="qx.client",m="mshtml",l="readOnly",k="accessKey",j="qx.bom.element.Attribute",i="rowSpan",h="vAlign",g="className",f="textContent",e="'",D="htmlFor",C="longDesc",B="cellSpacing",A="frameBorder",z="='",y="",x="useMap",w="innerText",v="innerHTML",u="tabIndex",s="cssText",t="dateTime",q="maxLength",r="cellPadding",o="colSpan",p="style";
qx.Class.define(j,{statics:{__fu:{names:{"class":g,"for":D,html:v,text:qx.core.Variant.isSet(n,m)?w:f,colspan:o,rowspan:i,valign:h,datetime:t,accesskey:k,tabindex:u,maxlength:q,readonly:l,longdesc:C,cellpadding:r,cellspacing:B,frameborder:A,usemap:x},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},original:{href:1,src:1,type:1}},compile:function(E){var F=[];
var H=this.__fu.runtime;

for(var G in E){if(!H[G]){F.push(G,z,E[G],e);
}}return F.join(y);
},get:qx.core.Variant.select(n,{"mshtml":function(L,name){var N=this.__fu;
var M;
name=N.names[name]||name;
if(N.original[name]){M=L.getAttribute(name,2);
}else if(N.property[name]){M=L[name];
}else{M=L.getAttribute(name);
}if(N.bools[name]){return !!M;
}return M;
},"default":function(b,name){var d=this.__fu;
var c;
name=d.names[name]||name;
if(d.property[name]){c=b[name];

if(c==null){c=b.getAttribute(name);
}}else{c=b.getAttribute(name);
}if(d.bools[name]){return !!c;
}return c;
}}),set:function(I,name,J){var K=this.__fu;
name=K.names[name]||name;
if(K.bools[name]){J=!!J;
}if(K.property[name]){I[name]=J;
}else if(J===true){I.setAttribute(name,name);
}else if(J===false||J===null){I.removeAttribute(name);
}else if(qx.core.Variant.isSet(n,m)&&name==p){I.style.setAttribute(s,J);
}else{I.setAttribute(name,J);
}},reset:function(a,name){this.set(a,name,null);
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{getModifiers:function(){if(!this.__modifiers){var c=0;
var b=this._native;

if(b.shiftKey){c|=qx.event.type.Dom.SHIFT_MASK;
}
if(b.ctrlKey){c|=qx.event.type.Dom.CTRL_MASK;
}
if(b.altKey){c|=qx.event.type.Dom.ALT_MASK;
}
if(b.metaKey){c|=qx.event.type.Dom.META_MASK;
}return c;
}return this.__modifiers;
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var J="qx.client",I="head",H="text/css",G="stylesheet",F="}",E='@import "',D="{",C='";',B="qx.bom.Stylesheet",A="link",z="style";
qx.Class.define(B,{statics:{includeFile:function(h,j){if(!j){j=document;
}var k=j.createElement(A);
k.type=H;
k.rel=G;
k.href=qx.util.ResourceManager.toUri(h);
var l=j.getElementsByTagName(I)[0];
l.appendChild(k);
},createElement:qx.core.Variant.select(J,{"mshtml":function(m){var n=document.createStyleSheet();

if(m){n.cssText=m;
}return n;
},"default":function(U){var V=document.createElement(z);
V.type=H;

if(U){V.appendChild(document.createTextNode(U));
}document.getElementsByTagName(I)[0].appendChild(V);
return V.sheet;
}}),addRule:qx.core.Variant.select(J,{"mshtml":function(q,r,s){q.addRule(r,s);
},"default":function(K,L,M){K.insertRule(L+D+M+F,K.cssRules.length);
}}),removeRule:qx.core.Variant.select(J,{"mshtml":function(a,b){var c=a.rules;
var d=c.length;

for(var i=d-1;i>=0;--i){if(c[i].selectorText==b){a.removeRule(i);
}}},"default":function(ba,bb){var bc=ba.cssRules;
var bd=bc.length;

for(var i=bd-1;i>=0;--i){if(bc[i].selectorText==bb){ba.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(J,{"mshtml":function(e){var f=e.rules;
var g=f.length;

for(var i=g-1;i>=0;i--){e.removeRule(i);
}},"default":function(W){var X=W.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;i--){W.deleteRule(i);
}}}),addImport:qx.core.Variant.select(J,{"mshtml":function(o,p){o.addImport(p);
},"default":function(x,y){x.insertRule(E+y+C,x.cssRules.length);
}}),removeImport:qx.core.Variant.select(J,{"mshtml":function(Q,R){var S=Q.imports;
var T=S.length;

for(var i=T-1;i>=0;i--){if(S[i].href==R){Q.removeImport(i);
}}},"default":function(t,u){var v=t.cssRules;
var w=v.length;

for(var i=w-1;i>=0;i--){if(v[i].href==u){t.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(J,{"mshtml":function(be){var bf=be.imports;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){be.removeImport(i);
}},"default":function(N){var O=N.cssRules;
var P=O.length;

for(var i=P-1;i>=0;i--){if(O[i].type==O[i].IMPORT_RULE){N.deleteRule(i);
}}}})}});
})();
(function(){var m="'>",l="</span>",k="<span class='type-",h="</span> ",g="",f="[",e=", ",d="<span class='object'>",c="&gt;",b="<span class='object' title='Object instance with hash code: ",G="string",F="level-",E="0",D="&lt;",C="<span class='offset'>",B="}",A="qx.log.appender.Util",z="&amp;",y="&#39;",x="DIV",t="]",u="<span>",r="&quot;",s="<span class='type-key'>",p="{",q="</span>:<span class='type-",n="</span>: ",o="]</span>: ",v="map",w="?";
qx.Class.define(A,{statics:{toHtml:function(L){var V=[];
var S,U,N,P;
V.push(C,this.formatOffset(L.offset),h);

if(L.object){var M=L.win.qx.core.ObjectRegistry.fromHashCode(L.object);

if(M){V.push(b+M.$$hash+m,M.classname,f,M.$$hash,o);
}}else if(L.clazz){V.push(d+L.clazz.classname,n);
}var O=L.items;

for(var i=0,T=O.length;i<T;i++){S=O[i];
U=S.text;

if(U instanceof Array){var P=[];

for(var j=0,R=U.length;j<R;j++){N=U[j];

if(typeof N===G){P.push(u+this.escapeHTML(N)+l);
}else if(N.key){P.push(s+N.key+q+N.type+m+this.escapeHTML(N.text)+l);
}else{P.push(k+N.type+m+this.escapeHTML(N.text)+l);
}}V.push(k+S.type+m);

if(S.type===v){V.push(p,P.join(e),B);
}else{V.push(f,P.join(e),t);
}V.push(l);
}else{V.push(k+S.type+m+this.escapeHTML(U)+h);
}}var Q=document.createElement(x);
Q.innerHTML=V.join(g);
Q.className=F+L.level;
return Q;
},formatOffset:function(H,length){var K=H.toString();
var I=(length||6)-K.length;
var J=g;

for(var i=0;i<I;i++){J+=E;
}return J+K;
},escapeHTML:function(a){return String(a).replace(/[<>&"']/g,this.__hC);
},__hC:function(W){var X={"<":D,">":c,"&":z,"'":y,'"':r};
return X[W]||w;
}}});
})();
(function(){var R="qx.client",Q="qx.dom.Hierarchy",P="previousSibling",O="*",N="nextSibling",M="parentNode";
qx.Class.define(Q,{statics:{getNodeIndex:function(o){var p=0;

while(o&&(o=o.previousSibling)){p++;
}return p;
},getElementIndex:function(x){var y=0;
var z=qx.dom.Node.ELEMENT;

while(x&&(x=x.previousSibling)){if(x.nodeType==z){y++;
}}return y;
},getNextElementSibling:function(h){while(h&&(h=h.nextSibling)&&!qx.dom.Node.isElement(h)){continue;
}return h||null;
},getPreviousElementSibling:function(F){while(F&&(F=F.previousSibling)&&!qx.dom.Node.isElement(F)){continue;
}return F||null;
},contains:qx.core.Variant.select(R,{"webkit|mshtml|opera":function(e,f){if(qx.dom.Node.isDocument(e)){var g=qx.dom.Node.getDocument(f);
return e&&g==e;
}else if(qx.dom.Node.isDocument(f)){return false;
}else{return e.contains(f);
}},"gecko":function(A,B){return !!(A.compareDocumentPosition(B)&16);
},"default":function(c,d){while(d){if(c==d){return true;
}d=d.parentNode;
}return false;
}}),isRendered:function(J){if(!J.offsetParent){return false;
}var K=J.ownerDocument||J.document;
if(K.body.contains){return K.body.contains(J);
}if(K.compareDocumentPosition){return !!(K.compareDocumentPosition(J)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(T,U){return this.contains(U,T);
},getCommonParent:qx.core.Variant.select(R,{"mshtml|opera":function(a,b){if(a===b){return a;
}
while(a&&qx.dom.Node.isElement(a)){if(a.contains(b)){return a;
}a=a.parentNode;
}return null;
},"default":function(r,s){if(r===s){return r;
}var t={};
var w=qx.core.ObjectRegistry;
var v,u;

while(r||s){if(r){v=w.toHashCode(r);

if(t[v]){return t[v];
}t[v]=r;
r=r.parentNode;
}
if(s){u=w.toHashCode(s);

if(t[u]){return t[u];
}t[u]=s;
s=s.parentNode;
}}return null;
}}),getAncestors:function(V){return this._recursivelyCollect(V,M);
},getChildElements:function(m){m=m.firstChild;

if(!m){return [];
}var n=this.getNextSiblings(m);

if(m.nodeType===1){n.unshift(m);
}return n;
},getDescendants:function(L){return qx.lang.Array.fromCollection(L.getElementsByTagName(O));
},getFirstDescendant:function(k){k=k.firstChild;

while(k&&k.nodeType!=1){k=k.nextSibling;
}return k;
},getLastDescendant:function(i){i=i.lastChild;

while(i&&i.nodeType!=1){i=i.previousSibling;
}return i;
},getPreviousSiblings:function(q){return this._recursivelyCollect(q,P);
},getNextSiblings:function(S){return this._recursivelyCollect(S,N);
},_recursivelyCollect:function(C,D){var E=[];

while(C=C[D]){if(C.nodeType==1){E.push(C);
}}return E;
},getSiblings:function(l){return this.getPreviousSiblings(l).reverse().concat(this.getNextSiblings(l));
},isEmpty:function(j){j=j.firstChild;

while(j){if(j.nodeType===qx.dom.Node.ELEMENT||j.nodeType===qx.dom.Node.TEXT){return false;
}j=j.nextSibling;
}return true;
},cleanWhitespace:function(G){var H=G.firstChild;

while(H){var I=H.nextSibling;

if(H.nodeType==3&&!/\S/.test(H.nodeValue)){G.removeChild(H);
}H=I;
}}}});
})();
(function(){var l=": ",k="Summary: (",j="qx.dev.ObjectSummary",h="\n",g=" Objects)\n\n",f=")\r\n",e=" (",d=" Objects)\r\n\r\n",c=", ";
qx.Class.define(j,{statics:{getInfo:function(){var m={};
var t=0;
var n;
var p=qx.core.ObjectRegistry.getRegistry();

for(var q in p){n=p[q];

if(n&&n.isDisposed()===false){if(m[n.classname]==null){m[n.classname]=1;
}else{m[n.classname]++;
}t++;
}}var s=[];

for(var o in m){s.push({classname:o,number:m[o]});
}s.sort(function(a,b){return b.number-a.number;
});
var r=k+t+g;

for(var i=0;i<s.length;i++){r+=s[i].number+l+s[i].classname+h;
}return r;
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
var C=k+F+d;

for(var i=0;i<D.length;i++){C+=D[i].number+l+D[i].classname+e+D[i].aHashCode.join(c)+f;
}return C;
}}});
})();
(function(){var cC="window",cB="",cA="childNodes",cz="nodeName",cy="nodeType",cx="document",cw="function",cv="firstChild",cu="qx.client",ct="external",bK="location",bJ="[native code]",bI="lastChild",bH="scrollY",bG="scrollWidth",bF="defaultView",bE="closed",bD="content",bC="qx",bB="</td><td>",cJ="filters",cK="locationbar",cH="screenX",cI="previousSibling",cF="scrollX",cG="Global namespace is polluted by the following unknown objects:\n\n",cD="doctype",cE="parent",cL="qx.dev.Pollution",cM="outerText",cj="applets",ci="parentElement",cl="designMode",ck="cookie",cn="fullScreen",cm="links",cp="pageXOffset",co="frames",ch="documentElement",cg="screenY",s="statusbar",t="history",u="sun",v="pkcs11",w="java",x="style",y="innerWidth",z="plugins",A="implementation",B="clientWidth",cQ="compatMode",cP="length",cO="textContent",cN="controllers",cU="netscape",cT="self",cS="domConfig",cR="attributes",cW="clientHeight",cV="outerHeight",bb="parentNode",bc="innerHeight",Y="title",ba="ownerDocument",bf="<table>",bg="globalStorage",bd="Global namespace is not polluted by any unknown objects.",be="toolbar",W="outerHTML",X="crypto",J="forms",I="scrollbars",L="frameElement",K="Components",F="body",E="clientInformation",H="offscreenBuffering",G="embeds",D="localName",C="scrollTop",bl="isMultiLine",bm="scrollLeft",bn="images",bo="event",bh="offsetHeight",bi="scrollMaxY",bj="sessionStorage",bk="screen",bp="name",bq="offsetLeft",T="console",S="XMLHttpRequest",R="mshtml",Q="nextSibling",P="innerText",O="menubar",N="scopeName",M="top",V="outerWidth",U=": ",br="\n",bs="status",bt="contentEditable",bu="anchors",bv="</table>",bw="<tr style='vertical-align:top'><td>",bx="scrollMaxX",by="screenTop",bz="defaultStatus",bA="styleSheets",bO="className",bN="personalbar",bM="</td></tr>",bL="currentStyle",bS="directories",bR="navigator",bQ="pageYOffset",bP="screenLeft",bU="opener",bT="scrollHeight",cc="__firebug__",cd="Option",ca="innerHTML",cb="tabIndex",bX="offsetTop",bY="[function]",bV="clipboardData",bW="Packages",ce="tagName",cf="offsetWidth",cr="mshtml|opera",cq="undefined",cs="Image";
qx.Class.define(cL,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bC,w,u,bW,cc,K,cN,bj,bg,T,bo,H,bV,E,cd,cs,ct,by,bP,cP,cC,cx,bK,bR,cU,cE,co,M,I,bp,cF,bH,cT,bk,t,bD,O,be,cK,bN,s,bS,bE,X,v,bU,bs,bz,y,bc,V,cV,cH,cg,cp,bQ,bx,bi,cn,L,S],"document":[cS,bK,cQ,A,bF,Y,F,bA,ch,cz,cy,cv,bI,cD,bn,cj,cm,J,bu,ck,G,z,cl,cA],"body":[cO,ca,W,P,cM,N,ci,ce,cJ,bt,cx,bL,bl,cW,B,bI,cv,bX,bq,cf,bh,cb,bO,cR,cI,Q,ba,D,cA,bb,cy,cz,x,C,bm,bG,bT]},getInfo:function(cY){var da=qx.dev.Pollution.getTextList(cY||cC);

if(da){return cG+da;
}else{return bd;
}},extract:function(a){var c=[];
var b=qx.dev.Pollution.ignore[a];
if(qx.core.Variant.isSet(cu,R)){if(a==cC){b=b.slice();

for(var d=0;d<window.length;d++){b.push(cB+d);
}}}var e=qx.dev.Pollution.names[a];

for(var f in e){try{if(qx.core.Variant.isSet(cu,cr)){if(a==cC&&f==ct){continue;
}}if(typeof e[f]==cq||e[f]===null){continue;
}if(typeof e[f]==cw&&e[f].toString().indexOf(bJ)!=-1){continue;
}if(typeof e[f].constructor==cw){if((e[f].constructor.toString().indexOf(bJ)!=-1)||(e[f].constructor.toString().indexOf(bY)!=-1)){continue;
}}if(qx.lang.Array.contains(b,f)){continue;
}}catch(cX){continue;
}c.push({"key":f,"value":e[f]});
}return c;
},getHtmlTable:function(m){var o=[];
var n=bw;
var q=bB;
var r=bM;
o.push(bf);
var p=this.extract(m);

for(var i=0;i<p.length;i++){o.push(n+p[i].key+q+p[i].value+r);
}o.push(bv);
return o.join(cB);
},getTextList:function(g){var j=[];
var k=U;
var l=br;
var h=this.extract(g);

for(var i=0;i<h.length;i++){j.push(h[i].key+k+h[i].value+l);
}return j.join(cB);
}}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

