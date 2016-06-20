(function() {
  
if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.legacy.theme": "qx.legacy.theme.ClassicRoyale", "qx.application": "demobrowser.demo.bom.Location_StandardMode", "qx.allowUrlVariants": "true", "qx.theme": "qx.theme.Classic", "qx.allowUrlSettings": "true"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off", "qx.aspects": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"qx": {"resourceUri": "../../resource", "version": "trunk", "sourceUri": "../../script"}, "demobrowser.demo": {"resourceUri": "../../resource", "version": "trunk", "sourceUri": "../../script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Classic/arrows/down-small-invert.gif": [5, 3, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -82, 0], "qx/decoration/Classic/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Classic/menu-combined.gif", 0, 0], "qx/decoration/Classic/arrows-combined.gif": [124, 7, "gif", "qx"], "qx/decoration/Classic/treevirtual/start_minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/arrows/left.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -20, 0], "qx/decoration/Classic/treevirtual/start_plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/arrows/previous-invert.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -87, 0], "qx/decoration/Classic/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Classic/datechooser/next-year.png": [16, 16, "png", "qx"], "qx/decoration/Classic/menu-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Classic/arrows/right-small-invert.gif": [3, 5, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -71, 0], "qx/decoration/Classic/datechooser/last-month-invert.png": [16, 16, "png", "qx"], "qx/decoration/Classic/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Classic/treevirtual/end_plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/table/descending.png": [10, 10, "png", "qx", "qx/decoration/Classic/table-combined.png", -62, 0], "qx/decoration/Classic/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Classic/menu-combined.gif", -32, 0], "qx/decoration/Classic/shadow/shadow-small-c.png": [40, 136, "png", "qx"], "qx/decoration/Classic/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, -60], "qx/decoration/Classic/splitpane/knob-vertical.png": [15, 4, "png", "qx"], "qx/decoration/Classic/table/descending-invert.png": [10, 10, "png", "qx", "qx/decoration/Classic/table-combined.png", -21, 0], "qx/decoration/Classic/tree/minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/form/radiobutton-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -168, 0], "qx/decoration/Classic/splitpane/knob-horizontal.png": [4, 15, "png", "qx"], "qx/decoration/Classic/table-combined.png": [72, 11, "png", "qx"], "qx/decoration/Classic/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Classic/table/ascending-invert.png": [10, 10, "png", "qx", "qx/decoration/Classic/table-combined.png", -41, 0], "qx/decoration/Classic/form/radiobutton-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -224, 0], "qx/decoration/Classic/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -252, 0], "qx/icon/Oxygen/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Classic/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Classic/arrows/forward.gif": [8, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -47, 0], "qx/decoration/Classic/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Classic/treevirtual/start.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, 0], "qx/decoration/Classic/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Classic/menu-combined.gif", -16, 0], "qx/decoration/Classic/arrows/up-small.gif": [5, 3, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -66, 0], "qx/decoration/Classic/window/maximize.gif": [9, 9, "gif", "qx", "qx/decoration/Classic/window-captionbar-buttons-combined.gif", -27, 0], "qx/decoration/Classic/datechooser/next-year-invert.png": [16, 16, "png", "qx"], "qx/decoration/Classic/arrows/right-invert.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -74, 0], "qx/decoration/Classic/treevirtual/cross_minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/form/checkbox-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -448, 0], "qx/decoration/Classic/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Classic/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Classic/cursors-combined.gif", -39, 0], "qx/decoration/Classic/arrows/rewind-invert.gif": [8, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -103, 0], "qx/decoration/Classic/form/radiobutton-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -490, 0], "qx/decoration/Classic/arrows/right-small.gif": [3, 5, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -121, 0], "qx/icon/Oxygen/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Classic/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Classic/menu-combined.gif", -48, 0], "qx/icon/Oxygen/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/decoration/Classic/datechooser/next-month.png": [16, 16, "png", "qx"], "qx/decoration/Classic/datechooser/last-year.png": [16, 16, "png", "qx"], "qx/decoration/Classic/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Classic/cursors-combined.gif", -58, 0], "qx/icon/Oxygen/16/actions/window-close.png": [16, 16, "png", "qx"], "qx/decoration/Classic/arrows/up-small-invert.gif": [5, 3, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", 0, 0], "qx/decoration/Classic/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Classic/shadow-lr-combined.png", 0, 0], "qx/decoration/Classic/arrows/up-invert.gif": [7, 4, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -5, 0], "qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -476, 0], "qx/decoration/Classic/datechooser/last-month.png": [16, 16, "png", "qx"], "qx/decoration/Classic/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Classic/table-combined.png", -11, 0], "qx/decoration/Classic/arrows/previous.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -16, 0], "qx/decoration/Classic/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -196, 0], "qx/decoration/Classic/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -56, 0], "qx/decoration/Classic/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Classic/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Classic/cursors-combined.gif", -20, 0], "qx/decoration/Classic/treevirtual/end_minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/arrows/down-invert.gif": [7, 4, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -24, 0], "qx/decoration/Classic/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -266, 0], "qx/decoration/Classic/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Classic/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Classic/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Classic/arrows/forward-invert.gif": [8, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -39, 0], "qx/decoration/Classic/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -462, 0], "qx/decoration/Classic/datechooser/last-year-invert.png": [16, 16, "png", "qx"], "qx/decoration/Classic/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, -75], "qx/decoration/Classic/treevirtual/only_minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/window/restore.gif": [8, 9, "gif", "qx", "qx/decoration/Classic/window-captionbar-buttons-combined.gif", 0, 0], "qx/decoration/Classic/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Classic/colorselector-combined.gif", 0, 0], "qx/decoration/Classic/treevirtual/end.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -280, 0], "qx/decoration/Classic/checkbox-radiobutton-combined.png": [504, 14, "png", "qx"], "qx/decoration/Classic/form/checkbox-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -420, 0], "qx/decoration/Classic/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/icon/Oxygen/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Classic/arrows/next-invert.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -78, 0], "qx/decoration/Classic/arrows/down.gif": [7, 4, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -111, 0], "qx/decoration/Classic/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Classic/arrows/left-invert.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -91, 0], "qx/icon/Oxygen/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Classic/window/minimize.gif": [9, 9, "gif", "qx", "qx/decoration/Classic/window-captionbar-buttons-combined.gif", -8, 0], "qx/decoration/Classic/form/checkbox-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -28, 0], "qx/decoration/Classic/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -42, 0], "qx/decoration/Classic/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Classic/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -84, 0], "qx/decoration/Classic/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Classic/form/radiobutton-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -154, 0], "qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -182, 0], "qx/decoration/Classic/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -210, 0], "qx/decoration/Classic/arrows/down-small.gif": [5, 3, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -31, 0], "qx/decoration/Classic/arrows/left-small.gif": [3, 5, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -36, 0], "qx/decoration/Classic/treevirtual/cross_plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -294, 0], "qx/decoration/Classic/form/checkbox-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -322, 0], "qx/decoration/Classic/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", 0, 0], "qx/decoration/Classic/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -336, 0], "qx/decoration/Classic/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Classic/cursors-combined.gif", 0, 0], "qx/decoration/Classic/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -350, 0], "qx/decoration/Classic/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -364, 0], "qx/decoration/Classic/form/radiobutton-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -392, 0], "qx/decoration/Classic/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -406, 0], "qx/decoration/Classic/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -378, 0], "qx/decoration/Classic/shadow/shadow-c.png": [40, 382, "png", "qx"], "qx/decoration/Classic/table/boolean-false.png": [11, 11, "png", "qx", "qx/decoration/Classic/table-combined.png", 0, 0], "qx/decoration/Classic/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -434, 0], "qx/decoration/Classic/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Classic/shadow-lr-combined.png", -15, 0], "qx/decoration/Classic/arrows/rewind.gif": [8, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -95, 0], "qx/decoration/Classic/window-captionbar-buttons-combined.gif": [36, 9, "gif", "qx"], "qx/decoration/Classic/arrows/right.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -55, 0], "qx/decoration/Classic/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -14, 0], "qx/icon/Oxygen/16/mimetypes/text-plain.png": [16, 16, "png", "qx"], "qx/decoration/Classic/arrows/up.gif": [7, 4, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -59, 0], "qx/icon/Oxygen/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Classic/table/boolean-true.png": [11, 11, "png", "qx", "qx/decoration/Classic/table-combined.png", -51, 0], "qx/decoration/Classic/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, -15], "qx/decoration/Classic/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -70, 0], "qx/decoration/Classic/treevirtual/cross.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -126, 0], "qx/decoration/Classic/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -112, 0], "qx/decoration/Classic/arrows/next.gif": [4, 7, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -12, 0], "qx/decoration/Classic/table/ascending.png": [10, 10, "png", "qx", "qx/decoration/Classic/table-combined.png", -31, 0], "qx/decoration/Classic/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, -30], "qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -308, 0], "qx/decoration/Classic/form/checkbox-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -238, 0], "qx/decoration/Classic/treevirtual/line.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/form/checkbox-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -140, 0], "qx/decoration/Classic/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Classic/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Classic/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Classic/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Classic/shadow-small-lr-combined.png", -5, 0], "qx/decoration/Classic/treevirtual/only_plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Classic/colorselector-combined.gif", -35, 0], "qx/decoration/Classic/tree/plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Classic/window/close.gif": [10, 9, "gif", "qx", "qx/decoration/Classic/window-captionbar-buttons-combined.gif", -17, 0], "qx/decoration/Classic/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Classic/checkbox-radiobutton-combined.png", -98, 0], "qx/decoration/Classic/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Classic/shadow-tb-combined.png", 0, -45], "qx/decoration/Classic/arrows/left-small-invert.gif": [3, 5, "gif", "qx", "qx/decoration/Classic/arrows-combined.gif", -118, 0], "qx/decoration/Classic/datechooser/next-month-invert.png": [16, 16, "png", "qx"]};
qx.$$translations = {};
qx.$$locales = {"fr": {"cldr_month_format_wide_11": "novembre", "cldr_date_time_format_MMd": "d/MM", "cldr_day_format_wide_sun": "dimanche", "cldr_date_time_format_yyMMMd": "d MMM yy", "cldr_day_format_wide_wed": "mercredi", "cldr_day_format_narrow_thu": "J", "cldr_day_format_narrow_fri": "V", "cldr_day_format_narrow_sun": "D", "cldr_date_time_format_MEd": "EEE d/M", "cldr_date_time_format_MMM": "LLL", "cldr_day_format_abbreviated_thu": "jeu.", "cldr_day_stand-alone_wide_sun": "dimanche", "cldr_pm": "PM", "alternateQuotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "jeu.", "cldr_day_format_wide_tue": "mardi", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE d MMMM yyyy", "cldr_date_time_format_MMMd": "d MMM", "cldr_day_format_abbreviated_tue": "mar.", "cldr_day_format_abbreviated_mon": "lun.", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "lundi", "cldr_date_time_format_MMMEd": "E d MMM", "cldr_date_time_format_yQ": "QQQ yyyy", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_day_stand-alone_abbreviated_sun": "dim.", "cldr_date_time_format_MMMMd": "d MMMM", "cldr_date_time_format_MMMMEd": "EEE d MMMM", "cldr_date_time_format_MMdd": "dd/MM", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": " ", "alternateQuotationStart": "“", "cldr_day_format_abbreviated_sun": "dim.", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_month_format_abbreviated_1": "janv.", "cldr_month_format_abbreviated_2": "févr.", "cldr_month_format_abbreviated_3": "mars", "cldr_month_format_abbreviated_4": "avr.", "cldr_month_format_abbreviated_5": "mai", "cldr_month_format_abbreviated_6": "juin", "cldr_month_format_abbreviated_7": "juil.", "cldr_date_time_format_yMMMEd": "EEE d MMM yyyy", "cldr_month_format_abbreviated_9": "sept.", "cldr_day_format_wide_mon": "lundi", "cldr_date_time_format_yMEd": "EEE d/M/yyyy", "cldr_day_stand-alone_wide_tue": "mardi", "cldr_day_format_narrow_wed": "M", "cldr_day_format_abbreviated_wed": "mer.", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "L", "cldr_date_time_format_yyMM": "MM/yy", "cldr_day_stand-alone_abbreviated_wed": "mer.", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d MMMM yyyy", "cldr_month_format_wide_10": "octobre", "cldr_month_format_wide_12": "décembre", "cldr_day_stand-alone_wide_sat": "samedi", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_format_abbreviated_sat": "sam.", "cldr_month_format_abbreviated_8": "août", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_stand-alone_abbreviated_tue": "mar.", "cldr_day_stand-alone_narrow_wed": "M", "cldr_date_time_format_HHmm": "HH:mm", "cldr_date_time_format_MMMdd": "dd MMM", "cldr_month_stand-alone_narrow_1": "J", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_2": "F", "cldr_month_stand-alone_narrow_5": "M", "cldr_month_stand-alone_narrow_4": "A", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_month_stand-alone_narrow_8": "A", "cldr_date_time_format_Md": "M-d", "cldr_day_stand-alone_wide_fri": "vendredi", "cldr_day_stand-alone_narrow_tue": "M", "cldr_day_format_abbreviated_fri": "ven.", "cldr_day_stand-alone_abbreviated_fri": "ven.", "cldr_day_format_narrow_tue": "M", "quotationEnd": "»", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_date_time_format_yyMMMEEEd": "EEE d MMM yy", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "jeudi", "cldr_day_stand-alone_narrow_sat": "S", "cldr_date_time_format_yyQ": "QQQ yy", "cldr_day_format_wide_fri": "vendredi", "cldr_date_format_medium": "d MMM yyyy", "cldr_day_stand-alone_wide_thu": "jeudi", "quotationStart": "«", "cldr_day_stand-alone_abbreviated_sat": "sam.", "cldr_date_time_format_hhmmss": "HH:mm:ss", "cldr_month_format_wide_1": "janvier", "cldr_month_format_wide_3": "mars", "cldr_day_stand-alone_narrow_sun": "D", "cldr_month_format_wide_5": "mai", "cldr_month_format_wide_4": "avril", "cldr_month_format_wide_7": "juillet", "cldr_month_format_wide_6": "juin", "cldr_month_format_wide_9": "septembre", "cldr_month_format_wide_8": "août", "cldr_am": "AM", "cldr_day_stand-alone_wide_wed": "mercredi", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "J", "cldr_month_format_wide_2": "février", "cldr_date_format_short": "dd/MM/yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_day_stand-alone_narrow_fri": "V", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_hhmm": "HH:mm", "cldr_date_time_format_y": "yyyy", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_abbreviated_mon": "lun.", "cldr_day_format_narrow_mon": "L", "cldr_month_format_abbreviated_12": "déc.", "cldr_month_format_abbreviated_10": "oct.", "cldr_month_format_abbreviated_11": "nov.", "cldr_day_format_wide_sat": "samedi", "cldr_date_time_format_d": "d"}, "en": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_12": "December", "cldr_month_format_wide_10": "October", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_month_format_wide_7": "July", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_month_stand-alone_narrow_5": "M", "cldr_day_format_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_month_stand-alone_narrow_4": "A", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_month_stand-alone_narrow_2": "F", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_date_time_format_M": "L", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_wide_tue": "Tuesday", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_stand-alone_wide_thu": "Thursday", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_day_stand-alone_narrow_sun": "S", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_day_stand-alone_narrow_tue": "T", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "May", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_month_format_abbreviated_10": "Oct", "cldr_date_time_format_y": "yyyy", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_day_format_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_date_format_short": "M/d/yy"}, "fr_FR": {}, "de": {"cldr_month_stand-alone_abbreviated_7": "Jul", "cldr_month_stand-alone_abbreviated_3": "Mär", "cldr_month_stand-alone_abbreviated_8": "Aug", "cldr_month_stand-alone_abbreviated_9": "Sep", "cldr_date_time_format_MMd": "d.MM.", "cldr_day_format_wide_sun": "Sonntag", "cldr_day_format_wide_wed": "Mittwoch", "cldr_day_format_narrow_thu": "D", "cldr_day_format_narrow_fri": "F", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, d.M.", "cldr_date_time_format_MMM": "LLL", "cldr_day_format_abbreviated_thu": "Do.", "cldr_day_stand-alone_wide_sun": "Sonntag", "cldr_pm": "nachm.", "alternateQuotationEnd": "‘", "cldr_day_stand-alone_abbreviated_thu": "Do.", "cldr_day_format_wide_tue": "Dienstag", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, d. MMMM yyyy", "cldr_date_time_format_MMMd": "d. MMM", "cldr_day_format_abbreviated_tue": "Di.", "cldr_day_format_abbreviated_mon": "Mo.", "cldr_date_time_format_yM": "yyyy-M", "cldr_day_stand-alone_wide_mon": "Montag", "cldr_date_time_format_MMMEd": "E d. MMM", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_yyMMdd": "dd.MM.yy", "cldr_date_format_long": "d. MMMM yyyy", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_day_stand-alone_abbreviated_sun": "So.", "cldr_date_time_format_MMMMd": "d. MMMM", "cldr_date_time_format_MMMMEd": "E d. MMMM", "cldr_date_time_format_MMdd": "dd.MM.", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": ".", "alternateQuotationStart": "‚", "cldr_day_format_abbreviated_sun": "So.", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mrz", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "Mai", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, d. MMM yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Montag", "cldr_date_time_format_yMEd": "EEE, yyyy-M-d", "cldr_day_stand-alone_wide_tue": "Dienstag", "cldr_day_format_narrow_wed": "M", "cldr_day_format_abbreviated_wed": "Mi.", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_date_time_format_yyMM": "MM.yy", "cldr_day_stand-alone_abbreviated_wed": "Mi.", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_10": "Oktober", "cldr_month_format_wide_12": "Dezember", "cldr_day_stand-alone_wide_sat": "Samstag", "cldr_time_format_long": "HH:mm:ss z", "cldr_date_time_format_MMMMdd": "dd. MMMM", "cldr_day_format_abbreviated_sat": "Sa.", "cldr_month_format_abbreviated_8": "Aug", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_stand-alone_abbreviated_tue": "Di.", "cldr_day_stand-alone_narrow_wed": "M", "cldr_date_time_format_HHmm": "HH:mm", "cldr_date_time_format_Ed": "E d", "cldr_month_stand-alone_narrow_1": "J", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_2": "F", "cldr_month_stand-alone_narrow_5": "M", "cldr_month_stand-alone_narrow_4": "A", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_month_stand-alone_narrow_8": "A", "cldr_month_stand-alone_abbreviated_10": "Okt", "cldr_month_stand-alone_abbreviated_11": "Nov", "cldr_month_stand-alone_abbreviated_12": "Dez", "cldr_day_stand-alone_wide_fri": "Freitag", "cldr_day_stand-alone_narrow_tue": "D", "cldr_day_format_abbreviated_fri": "Fr.", "cldr_day_stand-alone_abbreviated_fri": "Fr.", "cldr_day_format_narrow_tue": "D", "quotationEnd": "“", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Donnerstag", "cldr_day_stand-alone_narrow_sat": "S", "cldr_date_time_format_yyQ": "Q yy", "cldr_day_format_wide_fri": "Freitag", "cldr_date_format_medium": "dd.MM.yyyy", "cldr_day_stand-alone_wide_thu": "Donnerstag", "quotationStart": "„", "cldr_day_stand-alone_abbreviated_sat": "Sa.", "cldr_date_time_format_hhmmss": "hh:mm:ss a", "cldr_month_format_wide_1": "Januar", "cldr_month_format_wide_3": "März", "cldr_day_stand-alone_narrow_sun": "S", "cldr_month_format_wide_5": "Mai", "cldr_month_format_wide_4": "April", "cldr_month_format_wide_7": "Juli", "cldr_month_format_wide_6": "Juni", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_am": "vorm.", "cldr_day_stand-alone_wide_wed": "Mittwoch", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "D", "cldr_date_time_format_H": "H", "cldr_month_format_wide_2": "Februar", "cldr_date_format_short": "dd.MM.yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_hhmm": "hh:mm a", "cldr_date_time_format_yyyy": "yyyy", "cldr_date_time_format_y": "yyyy", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_date_time_format_Md": "d.M.", "cldr_day_stand-alone_abbreviated_mon": "Mo.", "cldr_day_format_narrow_mon": "M", "cldr_month_format_abbreviated_12": "Dez", "cldr_month_format_abbreviated_10": "Okt", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Samstag", "cldr_date_time_format_d": "d"}, "C": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_12": "December", "cldr_month_format_wide_10": "October", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_month_format_wide_7": "July", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_month_stand-alone_narrow_5": "M", "cldr_day_format_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_month_stand-alone_narrow_4": "A", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_month_stand-alone_narrow_2": "F", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_date_time_format_M": "L", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_wide_tue": "Tuesday", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_stand-alone_wide_thu": "Thursday", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_day_stand-alone_narrow_sun": "S", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_day_stand-alone_narrow_tue": "T", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "May", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_month_format_abbreviated_10": "Oct", "cldr_date_time_format_y": "yyyy", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_day_format_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_date_format_short": "M/d/yy"}, "en_US": {}, "de_DE": {}};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["qx:demobrowser.demo.bom.Location_StandardMode-qx.theme.Classic-0.js"]],
  boot : "boot",
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var prefix = libs[uri[0]].sourceUri;
      uris.push(prefix + "/" + uri[1]);
    }
    return uris;
  }
};  

(function(){var s=".",r="()",q="[Class ",p=".prototype",o="toString",n="qx.Bootstrap",m="]",l="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return q+this.classname+m;
},createNamespace:function(name,t){var v=name.split(s);
var parent=window;
var u=v[0];

for(var i=0,w=v.length-1;i<w;i++,u=v[i]){if(!parent[u]){parent=parent[u]={};
}else{parent=parent[u];
}}parent[u]=t;
return u;
},setDisplayName:function(x,y,name){x.displayName=y+s+name+r;
},setDisplayNames:function(h,j){for(var name in h){var k=h[name];

if(k instanceof Function){k.displayName=j+s+name+r;
}}},define:function(name,a){if(!a){var a={statics:{}};
}var f;
var d=null;
qx.Bootstrap.setDisplayNames(a.statics,name);

if(a.members){qx.Bootstrap.setDisplayNames(a.members,name+p);
f=a.construct||new Function;
var b=a.statics;

for(var c in b){f[c]=b[c];
}d=f.prototype;
var g=a.members;

for(var c in g){d[c]=g[c];
}}else{f=a.statics||{};
}var e=this.createNamespace(name,f);
f.name=f.classname=name;
f.basename=e;
f.$$type=l;
if(!f.hasOwnProperty(o)){f.toString=this.genericToString;
}if(a.defer){a.defer(f,d);
}qx.Bootstrap.$$registry[name]=a.statics;
}};
qx.Bootstrap.define(n,{statics:{LOADSTART:new Date,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var k="qx.allowUrlSettings",j="&",h="qx.core.Setting",g="qx.allowUrlVariants",f="qxsetting",e=":",d=".";
qx.Bootstrap.define(h,{statics:{__a:{},define:function(a,b){if(b===undefined){throw new Error('Default value of setting "'+a+'" must be defined!');
}
if(!this.__a[a]){this.__a[a]={};
}else if(this.__a[a].defaultValue!==undefined){throw new Error('Setting "'+a+'" is already defined!');
}this.__a[a].defaultValue=b;
},get:function(r){var s=this.__a[r];

if(s===undefined){throw new Error('Setting "'+r+'" is not defined.');
}
if(s.value!==undefined){return s.value;
}return s.defaultValue;
},set:function(n,o){if((n.split(d)).length<2){throw new Error('Malformed settings key "'+n+'". Must be following the schema "namespace.key".');
}
if(!this.__a[n]){this.__a[n]={};
}this.__a[n].value=o;
},__b:function(){if(window.qxsettings){for(var c in qxsettings){this.set(c,qxsettings[c]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(q){}this.__c();
}},__c:function(){if(this.get(k)!=true){return;
}var m=document.location.search.slice(1).split(j);

for(var i=0;i<m.length;i++){var l=m[i].split(e);

if(l.length!=3||l[0]!=f){continue;
}this.set(l[1],decodeURIComponent(l[2]));
}}},defer:function(p){p.define(k,false);
p.define(g,false);
p.__b();
}});
})();
(function(){var t="gecko",s="1.9.0.0",r=".",q="[object Opera]",p="function",o="[^\\.0-9]",n="525.26",m="",l="mshtml",k="AppleWebKit/",e="unknown",j="9.6.0",h="4.0",d="Gecko",c="opera",g="webkit",f="0.0.0",i="8.0",b="qx.bom.client.Engine";
qx.Bootstrap.define(b,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__d:function(){var u=e;
var y=f;
var x=navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==q){u=c;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+r+RegExp.$2;

if(RegExp.$3!=m){y+=r+RegExp.$3;
}}else{w=true;
y=j;
}}else if(navigator.userAgent.indexOf(k)!=-1){u=g;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(o).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=n;
}}else if(window.controllers&&navigator.product===d){u=t;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=s;
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=l;
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
alert("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(a){a.__d();
}});
})();
(function(){var B="on",A="off",z="|",y="default",x="object",w="&",u="qx.aspects",t="$",s="qx.allowUrlVariants",r="qx.debug",k="qx.client",q="qx.dynlocale",o="webkit",j="qxvariant",h="opera",n=":",m="qx.core.Variant",p="mshtml",g="gecko";
qx.Bootstrap.define(m,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(L,M,N){{};

if(!this.__e[L]){this.__e[L]={};
}else{}this.__e[L].allowedValues=M;
this.__e[L].defaultValue=N;
},get:function(C){var D=this.__e[C];
{};

if(D.value!==undefined){return D.value;
}return D.defaultValue;
},__g:function(){if(window.qxvariants){for(var I in qxvariants){{};

if(!this.__e[I]){this.__e[I]={};
}this.__e[I].value=qxvariants[I];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(H){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(s)!=true){return;
}var E=document.location.search.slice(1).split(w);

for(var i=0;i<E.length;i++){var F=E[i].split(n);

if(F.length!=3||F[0]!=j){continue;
}var G=F[1];

if(!this.__e[G]){this.__e[G]={};
}this.__e[G].value=decodeURIComponent(F[2]);
}},select:function(O,P){{};

for(var Q in P){if(this.isSet(O,Q)){return P[Q];
}}
if(P[y]!==undefined){return P[y];
}{};
},isSet:function(a,b){var c=a+t+b;

if(this.__f[c]!==undefined){return this.__f[c];
}var e=false;
if(b.indexOf(z)<0){e=this.get(a)===b;
}else{var d=b.split(z);

for(var i=0,l=d.length;i<l;i++){if(this.get(a)===d[i]){e=true;
break;
}}}this.__f[c]=e;
return e;
},__i:function(v){return typeof v===x&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===x&&v!==null&&!(v instanceof Array);
},__k:function(J,K){for(var i=0,l=J.length;i<l;i++){if(J[i]==K){return true;
}}return false;
}},defer:function(f){f.define(k,[g,p,h,o],qx.bom.client.Engine.NAME);
f.define(r,[B,A],B);
f.define(u,[B,A],A);
f.define(q,[B,A],B);
f.__g();
}});
})();
(function(){var O="qx.client",N='"',M="valueOf",L="toLocaleString",K="isPrototypeOf",J="",I="toString",H="qx.lang.Object",G='\", "',F="hasOwnProperty",E="Use 'clone()' instead!";
qx.Bootstrap.define(H,{statics:{empty:function(ba){{};

for(var bb in ba){if(ba.hasOwnProperty(bb)){delete ba[bb];
}}},isEmpty:qx.core.Variant.select(O,{"gecko":function(bc){{};
return bc.__count__===0;
},"default":function(bh){{};

for(var bi in bh){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(O,{"gecko":function(t,u){{};
return t.__count__>=u;
},"default":function(W,X){{};

if(X<=0){return true;
}var length=0;

for(var Y in W){if((++length)>=X){return true;
}}return false;
}}),getLength:qx.core.Variant.select(O,{"gecko":function(D){{};
return D.__count__;
},"default":function(U){{};
var length=0;

for(var V in U){length++;
}return length;
}}),_shadowedKeys:[K,F,L,I,M],getKeys:qx.core.Variant.select(O,{"mshtml":function(bj){var bk=[];

for(var bm in bj){bk.push(bm);
}var bl=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(bl.call(bj,a[i])){bk.push(a[i]);
}}return bk;
},"default":function(d){var e=[];

for(var f in d){e.push(f);
}return e;
}}),getKeysAsString:function(S){{};
var T=qx.lang.Object.getKeys(S);

if(T.length==0){return J;
}return N+T.join(G)+N;
},getValues:function(g){{};
var j=[];
var h=this.getKeys(g);

for(var i=0,l=h.length;i<l;i++){j.push(g[h[i]]);
}return j;
},mergeWith:function(k,m,n){{};

if(n===undefined){n=true;
}
for(var o in m){if(n||k[o]===undefined){k[o]=m[o];
}}return k;
},carefullyMergeWith:function(b,c){{};
return qx.lang.Object.mergeWith(b,c,false);
},merge:function(P,Q){{};
var R=arguments.length;

for(var i=1;i<R;i++){qx.lang.Object.mergeWith(P,arguments[i]);
}return P;
},copy:function(bd){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E);
return qx.lang.Object.clone(bd);
},clone:function(be){{};
var bf={};

for(var bg in be){bf[bg]=be[bg];
}return bf;
},invert:function(x){{};
var y={};

for(var z in x){y[x[z].toString()]=z;
}return y;
},getKeyFromValue:function(A,B){{};

for(var C in A){if(A.hasOwnProperty(C)&&A[C]===B){return C;
}}return null;
},contains:function(p,q){{};
return this.getKeyFromValue(p,q)!==null;
},select:function(v,w){{};
return w[v];
},fromArray:function(r){{};
var s={};

for(var i=0,l=r.length;i<l;i++){{};
s[r[i].toString()]=true;
}return s;
}}});
})();
(function(){var r="Function",q="Boolean",p="Error",o="Number",n="Array",m="Date",l="RegExp",k="String",j="Object",i="qx.lang.Type",h="string";
qx.Bootstrap.define(i,{statics:{__l:{"[object String]":k,"[object Array]":n,"[object Object]":j,"[object RegExp]":l,"[object Number]":o,"[object Boolean]":q,"[object Date]":m,"[object Function]":r,"[object Error]":p},getClass:function(e){var f=Object.prototype.toString.call(e);
return (this.__l[f]||f.slice(8,-1));
},isString:function(a){return (a!==null&&(typeof a===h||this.getClass(a)==k||a instanceof String||(!!a&&!!a.$$isString)));
},isArray:function(b){return (b!==null&&(b instanceof Array||(b&&qx.Class.hasInterface(b.constructor,qx.data.IListData))||this.getClass(b)==n||(!!b&&!!b.$$isArray)));
},isObject:function(s){return (s!==undefined&&s!==null&&this.getClass(s)==j);
},isRegExp:function(g){return this.getClass(g)==l;
},isNumber:function(v){return (v!==null&&(this.getClass(v)==o||v instanceof Number));
},isBoolean:function(t){return (t!==null&&(this.getClass(t)==q||t instanceof Boolean));
},isDate:function(u){return (u!==null&&(this.getClass(u)==m||u instanceof Date));
},isError:function(d){return (d!==null&&(this.getClass(d)==p||d instanceof Error));
},isFunction:function(c){return this.getClass(c)==r;
}}});
})();
(function(){var bH="[Class ",bG="]",bF="$$init_",bE="toString",bD="constructor",bC=".prototype",bB="extend",bA="Class",bz="destruct",by="qx.Class",bw="static",bx="qx.event.type.Data";
qx.Bootstrap.define(by,{statics:{define:function(name,G){if(!G){var G={};
}if(G.include&&!(G.include instanceof Array)){G.include=[G.include];
}if(G.implement&&!(G.implement instanceof Array)){G.implement=[G.implement];
}if(!G.hasOwnProperty(bB)&&!G.type){G.type=bw;
}{};
var I=this.__q(name,G.type,G.extend,G.statics,G.construct,G.destruct);
if(G.extend){if(G.properties){this.__s(I,G.properties,true);
}if(G.members){this.__u(I,G.members,true,true,false);
}if(G.events){this.__r(I,G.events,true);
}if(G.include){for(var i=0,l=G.include.length;i<l;i++){this.__x(I,G.include[i],false);
}}}if(G.settings){for(var H in G.settings){qx.core.Setting.define(H,G.settings[H]);
}}if(G.variants){for(var H in G.variants){qx.core.Variant.define(H,G.variants[H].allowedValues,G.variants[H].defaultValue);
}}if(G.implement){for(var i=0,l=G.implement.length;i<l;i++){this.__w(I,G.implement[i]);
}}{};
if(G.defer){G.defer.self=I;
G.defer(I,I.prototype,{add:function(name,z){var A={};
A[name]=z;
qx.Class.__s(I,A,true);
}});
}},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bm,bn){{};
qx.Class.__x(bm,bn,false);
},patch:function(B,C){{};
qx.Class.__x(B,C,true);
},isSubClassOf:function(bU,bV){if(!bU){return false;
}
if(bU==bV){return true;
}
if(bU.prototype instanceof bV){return true;
}return false;
},getPropertyDefinition:function(ba,name){while(ba){if(ba.$$properties&&ba.$$properties[name]){return ba.$$properties[name];
}ba=ba.superclass;
}return null;
},getProperties:function(bq){var br=[];

while(bq){if(bq.$$properties){br.push.apply(br,qx.lang.Object.getKeys(bq.$$properties));
}bq=bq.superclass;
}return br;
},getByProperty:function(bJ,name){while(bJ){if(bJ.$$properties&&bJ.$$properties[name]){return bJ;
}bJ=bJ.superclass;
}return null;
},hasProperty:function(bs,name){return !!this.getPropertyDefinition(bs,name);
},getEventType:function(bp,name){var bp=bp.constructor;

while(bp.superclass){if(bp.$$events&&bp.$$events[name]!==undefined){return bp.$$events[name];
}bp=bp.superclass;
}return null;
},supportsEvent:function(bo,name){return !!this.getEventType(bo,name);
},hasOwnMixin:function(bY,ca){return bY.$$includes&&bY.$$includes.indexOf(ca)!==-1;
},getByMixin:function(D,E){var F,i,l;

while(D){if(D.$$includes){F=D.$$flatIncludes;

for(i=0,l=F.length;i<l;i++){if(F[i]===E){return D;
}}}D=D.superclass;
}return null;
},getMixins:function(cb){var cc=[];

while(cb){if(cb.$$includes){cc.push.apply(cc,cb.$$flatIncludes);
}cb=cb.superclass;
}return cc;
},hasMixin:function(U,V){return !!this.getByMixin(U,V);
},hasOwnInterface:function(X,Y){return X.$$implements&&X.$$implements.indexOf(Y)!==-1;
},getByInterface:function(cd,ce){var cf,i,l;

while(cd){if(cd.$$implements){cf=cd.$$flatImplements;

for(i=0,l=cf.length;i<l;i++){if(cf[i]===ce){return cd;
}}}cd=cd.superclass;
}return null;
},getInterfaces:function(bW){var bX=[];

while(bW){if(bW.$$implements){bX.push.apply(bX,bW.$$flatImplements);
}bW=bW.superclass;
}return bX;
},hasInterface:function(S,T){return !!this.getByInterface(S,T);
},implementsInterface:function(w,x){var y=w.constructor;

if(this.hasInterface(y,x)){return true;
}
try{qx.Interface.assertObject(w,x);
return true;
}catch(R){}
try{qx.Interface.assert(y,x,false);
return true;
}catch(bI){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bH+this.classname+bG;
},$$registry:qx.Bootstrap.$$registry,__m:null,__n:null,__o:function(){},__p:function(){},__q:function(name,j,k,m,n,o){var t;

if(!k&&true){t=m||{};
qx.Bootstrap.setDisplayNames(t,name);
}else{t={};

if(k){if(!n){n=this.__y();
}t=this.__A(n,name,j);
qx.Bootstrap.setDisplayName(n,name,bD);
}if(m){qx.Bootstrap.setDisplayNames(m,name);
var u;

for(var i=0,a=qx.lang.Object.getKeys(m),l=a.length;i<l;i++){u=a[i];
var q=m[u];
{t[u]=q;
};
}}}var s=qx.Bootstrap.createNamespace(name,t,false);
t.name=t.classname=name;
t.basename=s;
t.$$type=bA;

if(j){t.$$classtype=j;
}if(!t.hasOwnProperty(bE)){t.toString=this.genericToString;
}
if(k){var v=k.prototype;
var p=this.__z();
p.prototype=v;
var r=new p;
t.prototype=r;
r.name=r.classname=name;
r.basename=s;
n.base=t.superclass=k;
n.self=t.constructor=r.constructor=t;
if(o){{};
t.$$destructor=o;
qx.Bootstrap.setDisplayName(o,name,bz);
}}this.$$registry[name]=t;
return t;
},__r:function(bQ,bR,bS){var bT,bT;
{};

if(bQ.$$events){for(var bT in bR){bQ.$$events[bT]=bR[bT];
}}else{bQ.$$events=bR;
}},__s:function(bh,bi,bj){var bl;

if(bj===undefined){bj=false;
}var bk=!!bh.$$propertiesAttached;

for(var name in bi){bl=bi[name];
{};
bl.name=name;
if(!bl.refine){if(bh.$$properties===undefined){bh.$$properties={};
}bh.$$properties[name]=bl;
}if(bl.init!==undefined){bh.prototype[bF+name]=bl.init;
}if(bl.event!==undefined){var event={};
event[bl.event]=bx;
this.__r(bh,event,bj);
}if(bl.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(bk){qx.core.Property.attachMethods(bh,name,bl);
}}},__t:null,__u:function(J,K,L,M,N){var O=J.prototype;
var Q,P;
qx.Bootstrap.setDisplayNames(K,J.classname+bC);

for(var i=0,a=qx.lang.Object.getKeys(K),l=a.length;i<l;i++){Q=a[i];
P=K[Q];
{};
if(M!==false&&P instanceof Function&&P.$$type==null){if(N==true){P=this.__v(P,O[Q]);
}else{if(O[Q]){P.base=O[Q];
}P.self=J;
}{};
}O[Q]=P;
}},__v:function(bf,bg){if(bg){return function(){var c=bf.base;
bf.base=bg;
var b=bf.apply(this,arguments);
bf.base=c;
return b;
};
}else{return bf;
}},__w:function(bN,bO){{};
var bP=qx.Interface.flatten([bO]);

if(bN.$$implements){bN.$$implements.push(bO);
bN.$$flatImplements.push.apply(bN.$$flatImplements,bP);
}else{bN.$$implements=[bO];
bN.$$flatImplements=bP;
}},__x:function(d,e,f){{};

if(this.hasMixin(d,e)){qx.log.Logger.warn('Mixin "'+e.name+'" is already included into Class "'+d.classname+'" by class: '+this.getByMixin(d,e).classname+'!');
return;
}var h=qx.Mixin.flatten([e]);
var g;

for(var i=0,l=h.length;i<l;i++){g=h[i];
if(g.$$events){this.__r(d,g.$$events,f);
}if(g.$$properties){this.__s(d,g.$$properties,f);
}if(g.$$members){this.__u(d,g.$$members,f,f,f);
}}if(d.$$includes){d.$$includes.push(e);
d.$$flatIncludes.push.apply(d.$$flatIncludes,h);
}else{d.$$includes=[e];
d.$$flatIncludes=h;
}},__y:function(){function W(){arguments.callee.base.apply(this,arguments);
}return W;
},__z:function(){return function(){};
},__A:function(bb,name,bc){var bd;
var be=function(){var bv=arguments.callee.constructor;
{};
if(!bv.$$propertiesAttached){qx.core.Property.attach(bv);
}var bu=bv.$$original.apply(this,arguments);
if(bv.$$includes){var bt=bv.$$flatIncludes;

for(var i=0,l=bt.length;i<l;i++){if(bt[i].$$constructor){bt[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bu;
};
{};
if(bc==="singleton"){be.getInstance=this.getInstance;
}be.$$original=bb;
bb.wrapper=be;
return be;
}},defer:function(bK){var bL,bK,bM;
{};
}});
})();
(function(){var p="]",o="Theme",n="[Theme ",m="qx.Theme";
qx.Class.define(m,{statics:{define:function(name,j){if(!j){var j={};
}j.include=this.__B(j.include);
j.patch=this.__B(j.patch);
{};
var k={$$type:o,name:name,title:j.title,toString:this.genericToString};
if(j.extend){k.supertheme=j.extend;
}k.basename=qx.Bootstrap.createNamespace(name,k);
this.__F(k,j);
this.__C(k,j);
this.__D(k,j);
this.$$registry[name]=k;
for(var i=0,a=j.include,l=a.length;i<l;i++){this.include(k,a[i]);
}
for(var i=0,a=j.patch,l=a.length;i<l;i++){this.patch(k,a[i]);
}},__B:function(b){if(!b){return [];
}
if(qx.lang.Type.isArray(b)){return b;
}else{return [b];
}},__C:function(I,J){var K;
{};

if(J.resource){I.resource=J.resource;
}else if(J.extend&&J.extend.resource){I.resource=J.extend.resource;
}},__D:function(q,r){var s=r.aliases||{};

if(r.extend&&r.extend.aliases){qx.lang.Object.mergeWith(s,r.extend.aliases,false);
}q.aliases=s;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return n+this.name+p;
},__E:function(z){for(var i=0,A=this.__G,l=A.length;i<l;i++){if(z[A[i]]){return A[i];
}}},__F:function(B,C){var F=this.__E(C);
if(C.extend&&!F){F=C.extend.type;
}B.type=F||"other";
if(!F){return;
}var H=function(){};
if(C.extend){H.prototype=new C.extend.$$clazz;
}var G=H.prototype;
var E=C[F];
for(var D in E){G[D]=E[D];
if(G[D].base){{};
G[D].base=C.extend;
}}B.$$clazz=H;
B[F]=new H;
},$$registry:{},__G:["colors","borders","decorations","fonts","icons","widgets","appearances","meta"],__H:null,__I:null,__J:function(){},patch:function(c,d){var f=this.__E(d);

if(f!==this.__E(c)){throw new Error("The mixins '"+c.name+"' are not compatible '"+d.name+"'!");
}var e=d[f];
var g=c.$$clazz.prototype;

for(var h in e){g[h]=e[h];
}},include:function(t,u){var w=u.type;

if(w!==t.type){throw new Error("The mixins '"+t.name+"' are not compatible '"+u.name+"'!");
}var v=u[w];
var x=t.$$clazz.prototype;

for(var y in v){if(x[y]!==undefined){continue;
}x[y]=v[y];
}}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#888888",a="#3E5B97",E="#FFFFE1",D="#F3F8FD",C="#CBC8CD",B="#FFE0E0",A="#F4F4F4",z="#808080",y="#CCCCCC",x="#C82C2C",w="#DBEAF9",v="#BCCEE5",q="#A5BDDE",r="#7CA0CF",o="#F6F5F7",p="#FF9999",m="qx.theme.classic.Color",n="#990000",k="#F9F8E9",l="#DCDFE4",s="#FAFBFE",t="#AAAAAA",u="#85878C";
qx.Theme.define(m,{colors:{"background":g,"background-light":d,"background-focused":D,"background-focused-inner":w,"background-disabled":A,"background-selected":h,"background-field":j,"background-pane":s,"background-invalid":B,"border-lead":b,"border-light":j,"border-light-shadow":l,"border-dark-shadow":f,"border-dark":u,"border-focused-light":v,"border-focused-light-shadow":q,"border-focused-dark-shadow":r,"border-focused-dark":h,"border-separator":z,"invalid":n,"border-focused-invalid":p,"text":i,"text-disabled":f,"text-selected":j,"text-focused":a,"text-placeholder":C,"tooltip":E,"tooltip-text":i,"tooltip-invalid":x,"button":g,"button-hovered":o,"button-abandoned":k,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":t,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":y,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var bW=';',bV='computed=this.',bU='=value;',bT='this.',bS='if(this.',bR='!==undefined)',bQ='delete this.',bP="set",bO="setThemed",bN='}',bC="init",bB="setRuntime",bA='else if(this.',bz='return this.',by="string",bx="boolean",bw="resetThemed",bv='!==undefined){',bu='=true;',bt="resetRuntime",ce="reset",cf="refresh",cc='old=this.',cd='else ',ca='if(old===undefined)old=this.',cb='old=computed=this.',bX=' of an instance of ',bY=";",cg='if(old===computed)return value;',ch='if(old===undefined)old=null;',bG='(value);',bF=' is not (yet) ready!");',bI='===value)return value;',bH='return init;',bK='var init=this.',bJ="Error in property ",bM='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bL='.validate.call(this, value);',bE='else{',bD=" in method ",F='=computed;',G='(backup);',H='if(computed===inherit){',I="inherit",J='if(value===undefined)prop.error(this,2,"',K='var computed, old=this.',L='else if(computed===undefined)',M="': ",N=" of class ",O='===undefined)return;',cl="')){",ck='else this.',cj='value=this.',ci='","',cp='if(init==qx.core.Property.$$inherit)init=null;',co='var inherit=prop.$$inherit;',cn='var computed, old;',cm='computed=undefined;delete this.',cr='",value);',cq='computed=value;',be=';}',bf='){',bc='if(computed===undefined||computed===inherit){',bd='!==inherit){',bi='(computed, old, "',bj='return value;',bg='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bh="if(reg.hasListener(this, '",ba=')a[i].',bb='.$$properties.',W="var reg=qx.event.Registration;",V='return null;',Y='");',X='var pa=this.getLayoutParent();if(pa)computed=pa.',S='!==undefined&&',R="', qx.event.type.Data, [computed, old]",U='var backup=computed;',T='}else{',Q="object",P='if(computed===undefined)computed=null;',bo='if(a[i].',bp='throw new Error("Property ',bq=")}",br='var prop=qx.core.Property;',bk=" with incoming value '",bl='if(computed===undefined||computed==inherit)computed=null;',bm='if((computed===undefined||computed===inherit)&&',bn="reg.fireEvent(this, '",bs="qx.core.Property";
qx.Class.define(bs,{statics:{__K:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__L:{"Object":true,"Array":true,"Map":true,"Function":true,"Date":true,"Node":true,"Element":true,"Document":true,"Window":true,"Event":true,"Class":true,"Mixin":true,"Interface":true,"Theme":true,"Font":true,"Decorator":true},$$inherit:I,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:by,dispose:bx,inheritable:bx,nullable:bx,themeable:bx,refine:bx,init:null,apply:by,event:by,check:null,transform:by,deferredInit:bx,validate:null},$$allowedGroupKeys:{name:by,group:Q,mode:by,themeable:bx},$$inheritable:{},refresh:function(cG){var parent=cG.getLayoutParent();

if(parent){var cJ=cG.constructor;
var cL=this.$$store.inherit;
var cK=this.$$store.init;
var cI=this.$$method.refresh;
var cM;
var cH;
{};

while(cJ){cM=cJ.$$properties;

if(cM){for(var name in this.$$inheritable){if(cM[name]&&cG[cI[name]]){cH=parent[cL[name]];

if(cH===undefined){cH=parent[cK[name]];
}{};
cG[cI[name]](cH);
}}}cJ=cJ.superclass;
}}},attach:function(cs){var ct=cs.$$properties;

if(ct){for(var name in ct){this.attachMethods(cs,name,ct[name]);
}}cs.$$propertiesAttached=true;
},attachMethods:function(C,name,D){D.group?this.__M(C,D,name):this.__N(C,D,name);
},__M:function(j,k,name){var s=qx.lang.String.firstUp(name);
var r=j.prototype;
var t=k.themeable===true;
{};
var u=[];
var o=[];

if(t){var m=[];
var q=[];
}var p="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
u.push(p);

if(t){m.push(p);
}
if(k.mode=="shorthand"){var n="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
u.push(n);

if(t){m.push(n);
}}
for(var i=0,a=k.group,l=a.length;i<l;i++){{};
u.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
o.push("this.",this.$$method.reset[a[i]],"();");

if(t){{};
m.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
q.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+s;
r[this.$$method.set[name]]=new Function(u.join(""));
this.$$method.reset[name]="reset"+s;
r[this.$$method.reset[name]]=new Function(o.join(""));

if(t){this.$$method.setThemed[name]="setThemed"+s;
r[this.$$method.setThemed[name]]=new Function(m.join(""));
this.$$method.resetThemed[name]="resetThemed"+s;
r[this.$$method.resetThemed[name]]=new Function(q.join(""));
}},__N:function(cO,cP,name){var cR=qx.lang.String.firstUp(name);
var cT=cO.prototype;
{};
if(cP.dispose===undefined&&typeof cP.check==="string"){cP.dispose=this.__L[cP.check]||qx.Class.isDefined(cP.check)||qx.Interface.isDefined(cP.check);
}var cS=this.$$method;
var cQ=this.$$store;
cQ.runtime[name]="$$runtime_"+name;
cQ.user[name]="$$user_"+name;
cQ.theme[name]="$$theme_"+name;
cQ.init[name]="$$init_"+name;
cQ.inherit[name]="$$inherit_"+name;
cQ.useinit[name]="$$useinit_"+name;
cS.get[name]="get"+cR;
cT[cS.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cO,name,"get");
};
cS.set[name]="set"+cR;
cT[cS.set[name]]=function(cN){return qx.core.Property.executeOptimizedSetter(this,cO,name,"set",arguments);
};
cS.reset[name]="reset"+cR;
cT[cS.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cO,name,"reset");
};

if(cP.inheritable||cP.apply||cP.event||cP.deferredInit){cS.init[name]="init"+cR;
cT[cS.init[name]]=function(dc){return qx.core.Property.executeOptimizedSetter(this,cO,name,"init",arguments);
};
}
if(cP.inheritable){cS.refresh[name]="refresh"+cR;
cT[cS.refresh[name]]=function(cu){return qx.core.Property.executeOptimizedSetter(this,cO,name,"refresh",arguments);
};
}cS.setRuntime[name]="setRuntime"+cR;
cT[cS.setRuntime[name]]=function(h){return qx.core.Property.executeOptimizedSetter(this,cO,name,"setRuntime",arguments);
};
cS.resetRuntime[name]="resetRuntime"+cR;
cT[cS.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cO,name,"resetRuntime");
};

if(cP.themeable){cS.setThemed[name]="setThemed"+cR;
cT[cS.setThemed[name]]=function(E){return qx.core.Property.executeOptimizedSetter(this,cO,name,"setThemed",arguments);
};
cS.resetThemed[name]="resetThemed"+cR;
cT[cS.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cO,name,"resetThemed");
};
}
if(cP.check==="Boolean"){cT["toggle"+cR]=new Function("return this."+cS.set[name]+"(!this."+cS.get[name]+"())");
cT["is"+cR]=new Function("return this."+cS.get[name]+"()");
}},__O:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(v,w,x,y,z){var A=v.constructor.classname;
var B=bJ+x+N+A+bD+this.$$method[y][x]+bk+z+M;
throw new Error(B+(this.__O[w]||"Unknown reason: "+w));
},__P:function(b,c,name,d,e,f){var g=this.$$method[d][name];
{c[g]=new Function("value",e.join(""));
};
{};
qx.Bootstrap.setDisplayName(c[g],b.classname+".prototype",g);
if(f===undefined){return b[g]();
}else{return b[g](f[0]);
}},executeOptimizedGetter:function(cU,cV,name,cW){var cY=cV.$$properties[name];
var db=cV.prototype;
var cX=[];
var da=this.$$store;
cX.push(bS,da.runtime[name],bR);
cX.push(bz,da.runtime[name],bW);

if(cY.inheritable){cX.push(bA,da.inherit[name],bR);
cX.push(bz,da.inherit[name],bW);
cX.push(cd);
}cX.push(bS,da.user[name],bR);
cX.push(bz,da.user[name],bW);

if(cY.themeable){cX.push(bA,da.theme[name],bR);
cX.push(bz,da.theme[name],bW);
}
if(cY.deferredInit&&cY.init===undefined){cX.push(bA,da.init[name],bR);
cX.push(bz,da.init[name],bW);
}cX.push(cd);

if(cY.init!==undefined){if(cY.inheritable){cX.push(bK,da.init[name],bW);

if(cY.nullable){cX.push(cp);
}else if(cY.init!==undefined){cX.push(bz,da.init[name],bW);
}else{cX.push(bg,name,bX,cV.classname,bF);
}cX.push(bH);
}else{cX.push(bz,da.init[name],bW);
}}else if(cY.inheritable||cY.nullable){cX.push(V);
}else{cX.push(bp,name,bX,cV.classname,bF);
}return this.__P(cU,db,name,cW,cX);
},executeOptimizedSetter:function(cv,cw,name,cx,cy){var cE=cw.$$properties[name];
var cD=cw.prototype;
var cA=[];
var cz=cx===bP||cx===bO||cx===bB||(cx===bC&&cE.init===undefined);
var cB=cx===ce||cx===bw||cx===bt;
var cC=cE.apply||cE.event||cE.inheritable;

if(cx===bB||cx===bt){var cF=this.$$store.runtime[name];
}else if(cx===bO||cx===bw){var cF=this.$$store.theme[name];
}else if(cx===bC){var cF=this.$$store.init[name];
}else{var cF=this.$$store.user[name];
}{if(!cE.nullable||cE.check||cE.inheritable){cA.push(br);
}if(cx===bP){cA.push(J,name,ci,cx,cr);
}};
if(cz){if(cE.transform){cA.push(cj,cE.transform,bG);
}if(cE.validate){if(typeof cE.validate===by){cA.push(bT,cE.validate,bG);
}else if(cE.validate instanceof Function){cA.push(cw.classname,bb,name);
cA.push(bL);
}}}if(cC){if(cz){cA.push(bS,cF,bI);
}else if(cB){cA.push(bS,cF,O);
}}if(cE.inheritable){cA.push(co);
}{};

if(!cC){if(cx===bB){cA.push(bT,this.$$store.runtime[name],bU);
}else if(cx===bt){cA.push(bS,this.$$store.runtime[name],bR);
cA.push(bQ,this.$$store.runtime[name],bW);
}else if(cx===bP){cA.push(bT,this.$$store.user[name],bU);
}else if(cx===ce){cA.push(bS,this.$$store.user[name],bR);
cA.push(bQ,this.$$store.user[name],bW);
}else if(cx===bO){cA.push(bT,this.$$store.theme[name],bU);
}else if(cx===bw){cA.push(bS,this.$$store.theme[name],bR);
cA.push(bQ,this.$$store.theme[name],bW);
}else if(cx===bC&&cz){cA.push(bT,this.$$store.init[name],bU);
}}else{if(cE.inheritable){cA.push(K,this.$$store.inherit[name],bW);
}else{cA.push(cn);
}cA.push(bS,this.$$store.runtime[name],bv);

if(cx===bB){cA.push(bV,this.$$store.runtime[name],bU);
}else if(cx===bt){cA.push(bQ,this.$$store.runtime[name],bW);
cA.push(bS,this.$$store.user[name],bR);
cA.push(bV,this.$$store.user[name],bW);
cA.push(bA,this.$$store.theme[name],bR);
cA.push(bV,this.$$store.theme[name],bW);
cA.push(bA,this.$$store.init[name],bv);
cA.push(bV,this.$$store.init[name],bW);
cA.push(bT,this.$$store.useinit[name],bu);
cA.push(bN);
}else{cA.push(cb,this.$$store.runtime[name],bW);
if(cx===bP){cA.push(bT,this.$$store.user[name],bU);
}else if(cx===ce){cA.push(bQ,this.$$store.user[name],bW);
}else if(cx===bO){cA.push(bT,this.$$store.theme[name],bU);
}else if(cx===bw){cA.push(bQ,this.$$store.theme[name],bW);
}else if(cx===bC&&cz){cA.push(bT,this.$$store.init[name],bU);
}}cA.push(bN);
cA.push(bA,this.$$store.user[name],bv);

if(cx===bP){if(!cE.inheritable){cA.push(cc,this.$$store.user[name],bW);
}cA.push(bV,this.$$store.user[name],bU);
}else if(cx===ce){if(!cE.inheritable){cA.push(cc,this.$$store.user[name],bW);
}cA.push(bQ,this.$$store.user[name],bW);
cA.push(bS,this.$$store.runtime[name],bR);
cA.push(bV,this.$$store.runtime[name],bW);
cA.push(bS,this.$$store.theme[name],bR);
cA.push(bV,this.$$store.theme[name],bW);
cA.push(bA,this.$$store.init[name],bv);
cA.push(bV,this.$$store.init[name],bW);
cA.push(bT,this.$$store.useinit[name],bu);
cA.push(bN);
}else{if(cx===bB){cA.push(bV,this.$$store.runtime[name],bU);
}else if(cE.inheritable){cA.push(bV,this.$$store.user[name],bW);
}else{cA.push(cb,this.$$store.user[name],bW);
}if(cx===bO){cA.push(bT,this.$$store.theme[name],bU);
}else if(cx===bw){cA.push(bQ,this.$$store.theme[name],bW);
}else if(cx===bC&&cz){cA.push(bT,this.$$store.init[name],bU);
}}cA.push(bN);
if(cE.themeable){cA.push(bA,this.$$store.theme[name],bv);

if(!cE.inheritable){cA.push(cc,this.$$store.theme[name],bW);
}
if(cx===bB){cA.push(bV,this.$$store.runtime[name],bU);
}else if(cx===bP){cA.push(bV,this.$$store.user[name],bU);
}else if(cx===bO){cA.push(bV,this.$$store.theme[name],bU);
}else if(cx===bw){cA.push(bQ,this.$$store.theme[name],bW);
cA.push(bS,this.$$store.init[name],bv);
cA.push(bV,this.$$store.init[name],bW);
cA.push(bT,this.$$store.useinit[name],bu);
cA.push(bN);
}else if(cx===bC){if(cz){cA.push(bT,this.$$store.init[name],bU);
}cA.push(bV,this.$$store.theme[name],bW);
}else if(cx===cf){cA.push(bV,this.$$store.theme[name],bW);
}cA.push(bN);
}cA.push(bA,this.$$store.useinit[name],bf);

if(!cE.inheritable){cA.push(cc,this.$$store.init[name],bW);
}
if(cx===bC){if(cz){cA.push(bV,this.$$store.init[name],bU);
}else{cA.push(bV,this.$$store.init[name],bW);
}}else if(cx===bP||cx===bB||cx===bO||cx===cf){cA.push(bQ,this.$$store.useinit[name],bW);

if(cx===bB){cA.push(bV,this.$$store.runtime[name],bU);
}else if(cx===bP){cA.push(bV,this.$$store.user[name],bU);
}else if(cx===bO){cA.push(bV,this.$$store.theme[name],bU);
}else if(cx===cf){cA.push(bV,this.$$store.init[name],bW);
}}cA.push(bN);
if(cx===bP||cx===bB||cx===bO||cx===bC){cA.push(bE);

if(cx===bB){cA.push(bV,this.$$store.runtime[name],bU);
}else if(cx===bP){cA.push(bV,this.$$store.user[name],bU);
}else if(cx===bO){cA.push(bV,this.$$store.theme[name],bU);
}else if(cx===bC){if(cz){cA.push(bV,this.$$store.init[name],bU);
}else{cA.push(bV,this.$$store.init[name],bW);
}cA.push(bT,this.$$store.useinit[name],bu);
}cA.push(bN);
}}
if(cE.inheritable){cA.push(bc);

if(cx===cf){cA.push(cq);
}else{cA.push(X,this.$$store.inherit[name],bW);
}cA.push(bm);
cA.push(bT,this.$$store.init[name],S);
cA.push(bT,this.$$store.init[name],bd);
cA.push(bV,this.$$store.init[name],bW);
cA.push(bT,this.$$store.useinit[name],bu);
cA.push(T);
cA.push(bQ,this.$$store.useinit[name],be);
cA.push(bN);
cA.push(cg);
cA.push(H);
cA.push(cm,this.$$store.inherit[name],bW);
cA.push(bN);
cA.push(L);
cA.push(bQ,this.$$store.inherit[name],bW);
cA.push(ck,this.$$store.inherit[name],F);
cA.push(U);
if(cE.init!==undefined&&cx!==bC){cA.push(ca,this.$$store.init[name],bY);
}else{cA.push(ch);
}cA.push(bl);
}else if(cC){if(cx!==bP&&cx!==bB&&cx!==bO){cA.push(P);
}cA.push(cg);
if(cE.init!==undefined&&cx!==bC){cA.push(ca,this.$$store.init[name],bY);
}else{cA.push(ch);
}}if(cC){if(cE.apply){cA.push(bT,cE.apply,bi,name,Y);
}if(cE.event){cA.push(W,bh,cE.event,cl,bn,cE.event,R,bq);
}if(cE.inheritable&&cD._getChildren){cA.push(bM);
cA.push(bo,this.$$method.refresh[name],ba,this.$$method.refresh[name],G);
cA.push(bN);
}}if(cz){cA.push(bj);
}return this.__P(cv,cD,name,cx,cA,cy);
}},settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var q="$$hash",p="qx.core.ObjectRegistry";
qx.Bootstrap.define(p,{statics:{inShutDown:false,__Q:{},__R:0,__S:[],register:function(w){var z=this.__Q;

if(!z){return;
}var y=w.$$hash;

if(y==null){var x=this.__S;

if(x.length>0){y=x.pop();
}else{y=(this.__R++).toString(36);
}w.$$hash=y;
}{};
z[y]=w;
},unregister:function(h){var j=h.$$hash;

if(j==null){return;
}var k=this.__Q;

if(k&&k[j]){delete k[j];
this.__S.push(j);
}try{delete h.$$hash;
}catch(d){if(h.removeAttribute){h.removeAttribute(q);
}}},toHashCode:function(m){{};
var o=m.$$hash;

if(o!=null){return o;
}var n=this.__S;

if(n.length>0){o=n.pop();
}else{o=(this.__R++).toString(36);
}return m.$$hash=o;
},clearHashCode:function(e){{};
var f=e.$$hash;

if(f!=null){this.__S.push(f);
try{delete e.$$hash;
}catch(g){if(e.removeAttribute){e.removeAttribute(q);
}}}},fromHashCode:function(c){return this.__Q[c]||null;
},shutdown:function(){this.inShutDown=true;
var t=this.__Q;
var v=[];

for(var u in t){v.push(u);
}v.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var s,i=0,l=v.length;

while(true){try{for(;i<l;i++){u=v[i];
s=t[u];

if(s&&s.dispose){s.dispose();
}}}catch(r){qx.log.Logger.error(this,"Could not dispose object "+s.toString()+": "+r);

if(i!==0){continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__Q;
},getRegistry:function(){return this.__Q;
}}});
})();
(function(){var j="qx.Mixin",h=".prototype",g="constructor",f="[Mixin ",e="]",d="destruct",c="Mixin";
qx.Class.define(j,{statics:{define:function(name,k){if(k){if(k.include&&!(k.include instanceof Array)){k.include=[k.include];
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
},isCompatible:function(w,x){var y=qx.Class.getMixins(x);
y.push(w);
return qx.Mixin.checkCompatibility(y);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(a){if(!a){return [];
}var b=a.concat();

for(var i=0,l=a.length;i<l;i++){if(a[i].$$includes){b.push.apply(b,this.flatten(a[i].$$includes));
}}return b;
},genericToString:function(){return f+this.name+e;
},$$registry:{},__T:null,__U:function(){}}});
})();
(function(){var b="qx.data.MBinding";
qx.Mixin.define(b,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(a){qx.data.SingleValueBinding.removeBindingFromObject(this,a);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var q="qx.client",p="on",o="mousedown",n="qx.bom.Event",m="mouseover",l="HTMLEvents";
qx.Bootstrap.define(n,{statics:{addNativeListener:qx.core.Variant.select(q,{"mshtml":function(v,w,x){v.attachEvent(p+w,x);
},"default":function(f,g,h){f.addEventListener(g,h,false);
}}),removeNativeListener:qx.core.Variant.select(q,{"mshtml":function(s,t,u){s.detachEvent(p+t,u);
},"default":function(i,j,k){i.removeEventListener(j,k,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(q,{"mshtml":function(e){if(e.type===m){return e.fromEvent;
}else{return e.toElement;
}},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(q,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==o&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(r){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(d){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(a,b){if(document.createEventObject){var c=document.createEventObject();
return a.fireEvent(p+b,c);
}else{var c=document.createEvent(l);
c.initEvent(b,true,true);
return !a.dispatchEvent(c);
}}}});
})();
(function(){var cj="|bubble",ci="|capture",ch="|",cg="_",cf="unload",ce="UNKNOWN_",cd="DOM_",cc="__Y",cb="__X",ca="c",bW="WIN_",bY="capture",bX="qx.event.Manager",bV="QX_";
qx.Bootstrap.define(bX,{construct:function(U){this.__V=U;
if(U.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(U,cf,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(U,cf,arguments.callee);
self.dispose();
}));
}this.__W={};
this.__X={};
this.__Y={};
this.__ba={};
},statics:{__bb:0,getNextUniqueId:function(){return (this.__bb++).toString(36);
}},members:{__W:null,__Y:null,__bc:null,__X:null,__ba:null,__V:null,getWindow:function(){return this.__V;
},getHandler:function(ck){var cl=this.__X[ck.classname];

if(cl){return cl;
}return this.__X[ck.classname]=new ck(this);
},getDispatcher:function(bs){var bt=this.__Y[bs.classname];

if(bt){return bt;
}return this.__Y[bs.classname]=new bs(this);
},getListeners:function(bh,bi,bj){var bk=bh.$$hash||qx.core.ObjectRegistry.toHashCode(bh);
var bm=this.__W[bk];

if(!bm){return null;
}var bn=bi+(bj?ci:cj);
var bl=bm[bn];
return bl?bl.concat():null;
},serializeListeners:function(x){var E=x.$$hash||qx.core.ObjectRegistry.toHashCode(x);
var G=this.__W[E];
var C=[];

if(G){var A,F,y,B,D;

for(var z in G){A=z.indexOf(ch);
F=z.substring(0,A);
y=z.charAt(A+1)==ca;
B=G[z];

for(var i=0,l=B.length;i<l;i++){D=B[i];
C.push({self:D.context,handler:D.handler,type:F,capture:y});
}}}return C;
},toggleAttachedEvents:function(bM,bN){var bS=bM.$$hash||qx.core.ObjectRegistry.toHashCode(bM);
var bU=this.__W[bS];

if(bU){var bP,bT,bO,bQ;

for(var bR in bU){bP=bR.indexOf(ch);
bT=bR.substring(0,bP);
bO=bR.charCodeAt(bP+1)===99;
bQ=bU[bR];

if(bN){this.__bd(bM,bT,bO);
}else{this.__be(bM,bT,bO);
}}}},hasListener:function(cm,cn,co){{};
var cp=cm.$$hash||qx.core.ObjectRegistry.toHashCode(cm);
var cr=this.__W[cp];

if(!cr){return false;
}var cs=cn+(co?ci:cj);
var cq=cr[cs];
return cq&&cq.length>0;
},importListeners:function(a,b){{};
var h=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var j=this.__W[h]={};
var e=qx.event.Manager;

for(var c in b){var f=b[c];
var g=f.type+(f.capture?ci:cj);
var d=j[g];

if(!d){d=j[g]=[];
this.__bd(a,f.type,f.capture);
}d.push({handler:f.listener,context:f.self,unique:f.unique||(e.__bb++).toString(36)});
}},addListener:function(bu,bv,bw,self,bx){var bB;
{};
var bC=bu.$$hash||qx.core.ObjectRegistry.toHashCode(bu);
var bE=this.__W[bC];

if(!bE){bE=this.__W[bC]={};
}var bA=bv+(bx?ci:cj);
var bz=bE[bA];

if(!bz){bz=bE[bA]=[];
}if(bz.length===0){this.__bd(bu,bv,bx);
}var bD=(qx.event.Manager.__bb++).toString(36);
var by={handler:bw,context:self,unique:bD};
bz.push(by);
return bA+ch+bD;
},findHandler:function(H,I){var S=false,L=false,T=false;
var R;

if(H.nodeType===1){S=true;
R=cd+H.tagName.toLowerCase()+cg+I;
}else if(H==this.__V){L=true;
R=bW+I;
}else if(H.classname){T=true;
R=bV+H.classname+cg+I;
}else{R=ce+H+cg+I;
}var N=this.__ba;

if(N[R]){return N[R];
}var Q=qx.event.Registration.getHandlers();
var M=qx.event.IEventHandler;
var O,P,K,J;

for(var i=0,l=Q.length;i<l;i++){O=Q[i];
K=O.SUPPORTED_TYPES;

if(K&&!K[I]){continue;
}J=O.TARGET_CHECK;

if(J){if(!S&&J===M.TARGET_DOMNODE){continue;
}else if(!L&&J===M.TARGET_WINDOW){continue;
}else if(!T&&J===M.TARGET_OBJECT){continue;
}}P=this.getHandler(Q[i]);

if(O.IGNORE_CAN_HANDLE||P.canHandleEvent(H,I)){N[R]=P;
return P;
}}return null;
},__bd:function(V,W,X){var Y=this.findHandler(V,W);

if(Y){Y.registerEvent(V,W,X);
return;
}{};
},removeListener:function(ct,cu,cv,self,cw){var cA;
{};
var cB=ct.$$hash||qx.core.ObjectRegistry.toHashCode(ct);
var cC=this.__W[cB];

if(!cC){return false;
}var cx=cu+(cw?ci:cj);
var cy=cC[cx];

if(!cy){return false;
}var cz;

for(var i=0,l=cy.length;i<l;i++){cz=cy[i];

if(cz.handler===cv&&cz.context===self){qx.lang.Array.removeAt(cy,i);

if(cy.length==0){this.__be(ct,cu,cw);
}return true;
}}return false;
},removeListenerById:function(k,m){var s;
{};
var q=m.split(ch);
var v=q[0];
var n=q[1].charCodeAt(0)==99;
var u=q[2];
var t=k.$$hash||qx.core.ObjectRegistry.toHashCode(k);
var w=this.__W[t];

if(!w){return false;
}var r=v+(n?ci:cj);
var p=w[r];

if(!p){return false;
}var o;

for(var i=0,l=p.length;i<l;i++){o=p[i];

if(o.unique===u){qx.lang.Array.removeAt(p,i);

if(p.length==0){this.__be(k,v,n);
}return true;
}}return false;
},removeAllListeners:function(ba){var be=ba.$$hash||qx.core.ObjectRegistry.toHashCode(ba);
var bg=this.__W[be];

if(!bg){return false;
}var bc,bf,bb;

for(var bd in bg){if(bg[bd].length>0){bc=bd.split(ch);
bf=bc[0];
bb=bc[1]===bY;
this.__be(ba,bf,bb);
}}delete this.__W[be];
return true;
},__be:function(bo,bp,bq){var br=this.findHandler(bo,bp);

if(br){br.unregisterEvent(bo,bp,bq);
return;
}{};
},dispatchEvent:function(bF,event){var bK;
{};
var bL=event.getType();

if(!event.getBubbles()&&!this.hasListener(bF,bL)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bF);
}var bJ=qx.event.Registration.getDispatchers();
var bI;
var bH=false;

for(var i=0,l=bJ.length;i<l;i++){bI=this.getDispatcher(bJ[i]);
if(bI.canDispatchEvent(bF,event,bL)){bI.dispatchEvent(bF,event,bL);
bH=true;
break;
}}
if(!bH){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bL+" on "+bF);
return true;
}var bG=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bG;
},dispose:function(){qx.event.Registration.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,cb);
qx.util.DisposeUtil.disposeMap(this,cc);
this.__W=this.__V=this.__bc=this.__ba=null;
}}});
})();
(function(){var h="qx.dom.Node",g="qx.client",f="";
qx.Class.define(h,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(n){return n.nodeType===
this.DOCUMENT?n:
n.ownerDocument||n.document;
},getWindow:qx.core.Variant.select(g,{"mshtml":function(k){if(k.nodeType==null){return k;
}if(k.nodeType!==this.DOCUMENT){k=k.ownerDocument;
}return k.parentWindow;
},"default":function(o){if(o.nodeType==null){return o;
}if(o.nodeType!==this.DOCUMENT){o=o.ownerDocument;
}return o.defaultView;
}}),getDocumentElement:function(l){return this.getDocument(l).documentElement;
},getBodyElement:function(b){return this.getDocument(b).body;
},isNode:function(p){return !!(p&&p.nodeType!=null);
},isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);
},isDocument:function(q){return !!(q&&q.nodeType===this.DOCUMENT);
},isText:function(m){return !!(m&&m.nodeType===this.TEXT);
},isWindow:function(e){return !!(e&&e.history&&e.location&&e.document);
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
(function(){var D="mshtml",C="qx.client",B="[object Array]",A="qx.lang.Array",z="Use qx.lang.Type.isArray() instead!",y="qx",x="number",w="Use the native Array access instead: arr[arr.length - 1]",v="Use the native Array access instead: arr[0]",u="string",t="Use 'clone()' instead!";
qx.Bootstrap.define(A,{statics:{isArray:function(bs){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
return qx.lang.Type.isArray(bs);
},toArray:function(a,b){return this.cast(a,Array,b);
},cast:function(H,I,J){if(H.constructor===I){return H;
}
if(qx.Class.hasInterface(H,qx.data.IListData)){var H=H.toArray();
}var K=new I;
if(qx.core.Variant.isSet(C,D)){if(H.item){for(var i=J||0,l=H.length;i<l;i++){K.push(H[i]);
}return K;
}}if(Object.prototype.toString.call(H)===B&&J==null){K.push.apply(K,H);
}else{K.push.apply(K,Array.prototype.slice.call(H,J||0));
}return K;
},fromArguments:function(Y,ba){return Array.prototype.slice.call(Y,ba||0);
},fromCollection:function(e){if(qx.core.Variant.isSet(C,D)){if(e.item){var f=[];

for(var i=0,l=e.length;i<l;i++){f[i]=e[i];
}return f;
}}return Array.prototype.slice.call(e,0);
},fromShortHand:function(bw){var by=bw.length;
var bx=qx.lang.Array.clone(bw);
switch(by){case 1:bx[1]=bx[2]=bx[3]=bx[0];
break;
case 2:bx[2]=bx[0];
case 3:bx[3]=bx[1];
}return bx;
},copy:function(s){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return qx.lang.Array.clone(s);
},clone:function(g){return g.concat();
},getLast:function(L){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return L[L.length-1];
},getFirst:function(h){qx.log.Logger.deprecatedMethodWarning(arguments.callee,v);
return h[0];
},insertAt:function(bt,bu,i){bt.splice(i,0,bu);
return bt;
},insertBefore:function(V,W,X){var i=V.indexOf(X);

if(i==-1){V.push(W);
}else{V.splice(i,0,W);
}return V;
},insertAfter:function(j,k,m){var i=j.indexOf(m);

if(i==-1||i==(j.length-1)){j.push(k);
}else{j.splice(i+1,0,k);
}return j;
},removeAt:function(U,i){return U.splice(i,1)[0];
},removeAll:function(r){r.length=0;
return this;
},append:function(bq,br){{};
Array.prototype.push.apply(bq,br);
return bq;
},exclude:function(Q,R){{};

for(var i=0,T=R.length,S;i<T;i++){S=Q.indexOf(R[i]);

if(S!=-1){Q.splice(S,1);
}}return Q;
},remove:function(c,d){var i=c.indexOf(d);

if(i!=-1){c.splice(i,1);
return d;
}},contains:function(M,N){return M.indexOf(N)!==-1;
},equals:function(bb,bc){var length=bb.length;

if(length!==bc.length){return false;
}
for(var i=0;i<length;i++){if(bb[i]!==bc[i]){return false;
}}return true;
},sum:function(O){var P=0;

for(var i=0,l=O.length;i<l;i++){P+=O[i];
}return P;
},max:function(E){{};
var i,G=E.length,F=E[0];

for(i=1;i<G;i++){if(E[i]>F){F=E[i];
}}return F===undefined?null:F;
},min:function(n){{};
var i,p=n.length,o=n[0];

for(i=1;i<p;i++){if(n[i]<o){o=n[i];
}}return o===undefined?null:o;
},unique:function(bd){var bn=[],bf={},bi={},bk={};
var bj,be=0;
var bo=y+qx.lang.Date.now();
var bg=false,bm=false,bp=false;
for(var i=0,bl=bd.length;i<bl;i++){bj=bd[i];
if(bj===null){if(!bg){bg=true;
bn.push(bj);
}}else if(bj===undefined){}else if(bj===false){if(!bm){bm=true;
bn.push(bj);
}}else if(bj===true){if(!bp){bp=true;
bn.push(bj);
}}else if(typeof bj===u){if(!bf[bj]){bf[bj]=1;
bn.push(bj);
}}else if(typeof bj===x){if(!bi[bj]){bi[bj]=1;
bn.push(bj);
}}else{bh=bj[bo];

if(bh==null){bh=bj[bo]=be++;
}
if(!bk[bh]){bk[bh]=bj;
bn.push(bj);
}}}for(var bh in bk){try{delete bk[bh][bo];
}catch(q){try{bk[bh][bo]=null;
}catch(bv){throw new Error("Cannot clean-up map entry doneObjects["+bh+"]["+bo+"]");
}}}return bn;
}}});
})();
(function(){var B="()",A=".",z=".prototype.",y="Use qx.lang.Type.isFunction() instead!",x='anonymous()',w="qx.lang.Function",v=".constructor()";
qx.Bootstrap.define(w,{statics:{isFunction:function(H){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return qx.lang.Type.isFunction(H);
},getCaller:function(h){return h.caller?h.caller.callee:h.callee.caller;
},getName:function(i){if(i.displayName){return i.displayName;
}
if(i.$$original||i.wrapper||i.classname){return i.classname+v;
}
if(i.$$mixin){for(var k in i.$$mixin.$$members){if(i.$$mixin.$$members[k]==i){return i.$$mixin.name+z+k+B;
}}for(var k in i.$$mixin){if(i.$$mixin[k]==i){return i.$$mixin.name+A+k+B;
}}}
if(i.self){var l=i.self.constructor;

if(l){for(var k in l.prototype){if(l.prototype[k]==i){return l.classname+z+k+B;
}}for(var k in l){if(l[k]==i){return l.classname+A+k+B;
}}}}var j=i.toString().match(/function\s*(\w*)\s*\(.*/);

if(j&&j.length>=1&&j[1]){return j[1]+B;
}return x;
},globalEval:function(u){if(window.execScript){return window.execScript(u);
}else{return eval.call(window,u);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(I,J){{};
if(!J){return I;
}if(!(J.self||J.args||J.delay!=null||J.periodical!=null||J.attempt)){return I;
}return function(event){{};
var o=qx.lang.Array.fromArguments(arguments);
if(J.args){o=J.args.concat(o);
}
if(J.delay||J.periodical){var n=qx.event.GlobalError.observeMethod(function(){return I.apply(J.self||this,o);
});

if(J.delay){return window.setTimeout(n,J.delay);
}
if(J.periodical){return window.setInterval(n,J.periodical);
}}else if(J.attempt){var p=false;

try{p=I.apply(J.self||this,o);
}catch(a){}return p;
}else{return I.apply(J.self||this,o);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(C,D){return this.create(C,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(e,self,f){if(arguments.length<3){return function(event){return e.call(self||this,event||window.event);
};
}else{var g=qx.lang.Array.fromArguments(arguments,2);
return function(event){var m=[event||window.event];
m.push.apply(m,g);
e.apply(self||this,m);
};
}},attempt:function(q,self,r){return this.create(q,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(b,c,self,d){return this.create(b,{delay:c,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(E,F,self,G){return this.create(E,{periodical:F,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var x="qx.event.Registration";
qx.Bootstrap.define(x,{statics:{__bf:{},getManager:function(F){if(F==null){{};
F=window;
}else if(F.nodeType){F=qx.dom.Node.getWindow(F);
}else if(!qx.dom.Node.isWindow(F)){F=window;
}var H=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var G=this.__bf[H];

if(!G){G=new qx.event.Manager(F);
this.__bf[H]=G;
}return G;
},removeManager:function(D){var E=qx.core.ObjectRegistry.toHashCode(D.getWindow());
delete this.__bf[E];
},addListener:function(N,O,P,self,Q){return this.getManager(N).addListener(N,O,P,self,Q);
},removeListener:function(r,s,t,self,u){return this.getManager(r).removeListener(r,s,t,self,u);
},removeListenerById:function(I,J){return this.getManager(I).removeListenerById(I,J);
},removeAllListeners:function(d){return this.getManager(d).removeAllListeners(d);
},hasListener:function(K,L,M){return this.getManager(K).hasListener(K,L,M);
},serializeListeners:function(C){return this.getManager(C).serializeListeners(C);
},createEvent:function(y,z,A){{};
if(z==null){z=qx.event.type.Event;
}var B=qx.event.Pool.getInstance().getObject(z);

if(!B){return;
}A?B.init.apply(B,A):B.init();
if(y){B.setType(y);
}return B;
},dispatchEvent:function(c,event){return this.getManager(c).dispatchEvent(c,event);
},fireEvent:function(l,m,n,o){var p;
{};
var q=this.createEvent(m,n||null,o);
return this.getManager(l).dispatchEvent(l,q);
},fireNonBubblingEvent:function(e,f,g,h){{};
var i=this.getManager(e);

if(!i.hasListener(e,f,false)){return true;
}var j=this.createEvent(f,g||null,h);
return i.dispatchEvent(e,j);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bg:[],addHandler:function(k){{};
this.__bg.push(k);
this.__bg.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bg;
},__bh:[],addDispatcher:function(v,w){{};
this.__bh.push(v);
this.__bh.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bh;
}}});
})();
(function(){var i="qx.log.appender.RingBuffer";
qx.Bootstrap.define(i,{construct:function(e){this.__bi=[];
this.setMaxMessages(e||50);
},members:{__bj:0,__bi:null,__bk:50,setMaxMessages:function(f){this.__bk=f;
this.clearHistory();
},getMaxMessages:function(){return this.__bk;
},process:function(g){var h=this.getMaxMessages();

if(this.__bi.length<h){this.__bi.push(g);
}else{this.__bi[this.__bj++]=g;

if(this.__bj>=h){this.__bj=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(a){if(a>this.__bi.length){a=this.__bi.length;
}
if(this.__bi.length==this.getMaxMessages()){var c=this.__bj-1;
}else{c=this.__bi.length-1;
}var b=c-a+1;

if(b<0){b+=this.__bi.length;
}var d;

if(b<=c){d=this.__bi.slice(b,c+1);
}else{d=this.__bi.slice(b,this.__bi.length).concat(this.__bi.slice(0,c+1));
}return d;
},clearHistory:function(){this.__bi=[];
this.__bj=0;
}}});
})();
(function(){var B="node",A="error",z="...(+",y="array",x=")",w="info",v="instance",u="string",t="null",s="class",W="number",V="stringify",U="]",T="unknown",S="function",R="boolean",Q="debug",P="map",O="undefined",N="qx.log.Logger",I=")}",J="#",G="warn",H="document",E="{...(",F="[",C="text[",D="[...(",K="\n",L=")]",M="object";
qx.Bootstrap.define(N,{statics:{__bl:Q,setLevel:function(be){this.__bl=be;
},getLevel:function(){return this.__bl;
},setTreshold:function(bd){this.__bo.setMaxMessages(bd);
},getTreshold:function(){return this.__bo.getMaxMessages();
},__bm:{},__bn:0,register:function(d){if(d.$$id){return;
}var e=this.__bn++;
this.__bm[e]=d;
d.$$id=e;
var f=this.__bo.getAllLogEvents();

for(var i=0,l=f.length;i<l;i++){d.process(f[i]);
}},unregister:function(j){var k=j.$$id;

if(k==null){return;
}delete this.__bm[k];
delete j.$$id;
},debug:function(bf,bg){this.__bq(Q,arguments);
},info:function(g,h){this.__bq(w,arguments);
},warn:function(bD,bE){this.__bq(G,arguments);
},error:function(m,n){this.__bq(A,arguments);
},trace:function(r){this.__bq(w,[r,qx.dev.StackTrace.getStackTrace().join(K)]);
},deprecatedMethodWarning:function(o,p){var q;
{};
},deprecatedClassWarning:function(a,b){var c;
{};
},deprecatedEventWarning:function(br,event,bs){var bt;
{};
},deprecatedMixinWarning:function(X,Y){var ba;
{};
},clear:function(){this.__bo.clearHistory();
},__bo:new qx.log.appender.RingBuffer(50),__bp:{debug:0,info:1,warn:2,error:3},__bq:function(bh,bi){var bn=this.__bp;

if(bn[bh]<bn[this.__bl]){return;
}var bk=bi.length<2?null:bi[0];
var bm=bk?1:0;
var bj=[];

for(var i=bm,l=bi.length;i<l;i++){bj.push(this.__bs(bi[i],true));
}var bo=new Date;
var bp={time:bo,offset:bo-qx.Bootstrap.LOADSTART,level:bh,items:bj,win:window};
if(bk){if(bk instanceof qx.core.Object){bp.object=bk.$$hash;
}else if(bk.$$type){bp.clazz=bk;
}}this.__bo.process(bp);
var bq=this.__bm;

for(var bl in bq){bq[bl].process(bp);
}},__br:function(bb){if(bb===undefined){return O;
}else if(bb===null){return t;
}
if(bb.$$type){return s;
}var bc=typeof bb;

if(bc===S||bc==u||bc===W||bc===R){return bc;
}else if(bc===M){if(bb.nodeType){return B;
}else if(bb.classname){return v;
}else if(bb instanceof Array){return y;
}else if(bb instanceof Error){return A;
}else{return P;
}}
if(bb.toString){return V;
}return T;
},__bs:function(bu,bv){var bC=this.__br(bu);
var by=T;
var bx=[];

switch(bC){case t:case O:by=bC;
break;
case u:case W:case R:by=bu;
break;
case B:if(bu.nodeType===9){by=H;
}else if(bu.nodeType===3){by=C+bu.nodeValue+U;
}else if(bu.nodeType===1){by=bu.nodeName.toLowerCase();

if(bu.id){by+=J+bu.id;
}}else{by=B;
}break;
case S:by=qx.lang.Function.getName(bu)||bC;
break;
case v:by=bu.basename+F+bu.$$hash+U;
break;
case s:case V:by=bu.toString();
break;
case A:bx=qx.dev.StackTrace.getStackTraceFromError(bu);
by=bu.toString();
break;
case y:if(bv){by=[];

for(var i=0,l=bu.length;i<l;i++){if(by.length>20){by.push(z+(l-i)+x);
break;
}by.push(this.__bs(bu[i],false));
}}else{by=D+bu.length+L;
}break;
case P:if(bv){var bw;
var bB=[];

for(var bA in bu){bB.push(bA);
}bB.sort();
by=[];

for(var i=0,l=bB.length;i<l;i++){if(by.length>20){by.push(z+(l-i)+x);
break;
}bA=bB[i];
bw=this.__bs(bu[bA],false);
bw.key=bA;
by.push(bw);
}}else{var bz=0;

for(var bA in bu){bz++;
}by=E+bz+I;
}break;
}return {type:bC,text:by,trace:bx};
}}});
})();
(function(){var p="set",o="get",n="reset",m="qx.core.Object",k="]",j="__bu",h="[",g="$$user_",f="Object";
qx.Class.define(m,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:f},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+h+this.$$hash+k;
},base:function(Y,ba){if(arguments.length===1){return Y.callee.base.call(this);
}else{return Y.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(J){return J.callee.self;
},clone:function(){var C=this.constructor;
var B=new C;
var E=qx.Class.getProperties(C);
var D=qx.core.Property.$$store.user;
var F=qx.core.Property.$$method.set;
var name;
for(var i=0,l=E.length;i<l;i++){name=E[i];

if(this.hasOwnProperty(D[name])){B[F[name]](this[D[name]]);
}}return B;
},serialize:function(){var bu=this.constructor;
var bw=qx.Class.getProperties(bu);
var bx=qx.core.Property.$$store.user;
var name,bt;
var bv={classname:bu.classname,properties:{}};
for(var i=0,l=bw.length;i<l;i++){name=bw[i];

if(this.hasOwnProperty(bx[name])){bt=this[bx[name]];

if(bt instanceof qx.core.Object){bv.properties[name]={$$hash:bt.$$hash};
}else{bv.properties[name]=bt;
}}}return bv;
},set:function(R,S){var U=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(R)){if(!this[U[R]]){if(this[p+qx.lang.String.firstUp(R)]!=undefined){this[p+qx.lang.String.firstUp(R)](S);
return;
}{};
}return this[U[R]](S);
}else{for(var T in R){if(!this[U[T]]){if(this[p+qx.lang.String.firstUp(T)]!=undefined){this[p+qx.lang.String.firstUp(T)](R[T]);
continue;
}{};
}this[U[T]](R[T]);
}return this;
}},get:function(r){var s=qx.core.Property.$$method.get;

if(!this[s[r]]){if(this[o+qx.lang.String.firstUp(r)]!=undefined){return this[o+qx.lang.String.firstUp(r)]();
}{};
}return this[s[r]]();
},reset:function(bm){var bn=qx.core.Property.$$method.reset;

if(!this[bn[bm]]){if(this[n+qx.lang.String.firstUp(bm)]!=undefined){this[n+qx.lang.String.firstUp(bm)]();
return;
}{};
}this[bn[bm]]();
},__bt:qx.event.Registration,addListener:function(G,H,self,I){if(!this.$$disposed){return this.__bt.addListener(this,G,H,self,I);
}return null;
},addListenerOnce:function(u,v,self,w){var x=function(e){v.call(self||this,e);
this.removeListener(u,x,this,w);
};
return this.addListener(u,x,this,w);
},removeListener:function(y,z,self,A){if(!this.$$disposed){return this.__bt.removeListener(this,y,z,self,A);
}return false;
},removeListenerById:function(bb){if(!this.$$disposed){return this.__bt.removeListenerById(this,bb);
}return false;
},hasListener:function(c,d){return this.__bt.hasListener(this,c,d);
},dispatchEvent:function(X){if(!this.$$disposed){return this.__bt.dispatchEvent(this,X);
}return true;
},fireEvent:function(bq,br,bs){if(!this.$$disposed){return this.__bt.fireEvent(this,bq,br,bs);
}return true;
},fireNonBubblingEvent:function(bc,bd,be){if(!this.$$disposed){return this.__bt.fireNonBubblingEvent(this,bc,bd,be);
}return true;
},fireDataEvent:function(bh,bi,bj,bk){if(!this.$$disposed){if(bj===undefined){bj=null;
}return this.__bt.fireNonBubblingEvent(this,bh,qx.event.type.Data,[bi,bj,!!bk]);
}return true;
},__bu:null,setUserData:function(bo,bp){if(!this.__bu){this.__bu={};
}this.__bu[bo]=bp;
},getUserData:function(P){if(!this.__bu){return null;
}var Q=this.__bu[P];
return Q===undefined?null:Q;
},__bv:qx.log.Logger,debug:function(bg){this.__bv.debug(this,bg);
},info:function(V){this.__bv.info(this,V);
},warn:function(W){this.__bv.warn(this,W);
},error:function(a){this.__bv.error(this,a);
},trace:function(){this.__bv.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var N,L;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var M=this.constructor;
var K;

while(M.superclass){if(M.$$destructor){M.$$destructor.call(this);
}if(M.$$includes){K=M.$$flatIncludes;

for(var i=0,l=K.length;i<l;i++){if(K[i].$$destructor){K[i].$$destructor.call(this);
}}}M=M.superclass;
}var O=qx.Class.getProperties(this.constructor);

for(var i=0,l=O.length;i<l;i++){delete this[g+O[i]];
}{};
},_disposeFields:function(b){qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bf){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(q){qx.util.DisposeUtil.disposeArray(this,q);
},_disposeMap:function(t){qx.util.DisposeUtil.disposeMap(this,t);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bl){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(j);
var bA=this.constructor;
var bE;
var bF=qx.core.Property.$$store;
var bC=bF.user;
var bD=bF.theme;
var by=bF.inherit;
var bB=bF.useinit;
var bz=bF.init;

while(bA){bE=bA.$$properties;

if(bE){for(var name in bE){if(bE[name].dispose){this[bC[name]]=this[bD[name]]=this[by[name]]=this[bB[name]]=this[bz[name]]=undefined;
}}}bA=bA.superclass;
}}});
})();
(function(){var x="",w="g",v="0",u='\\$1',t="%",s='-',r="qx.lang.String",q=' ',p='\n',o="undefined";
qx.Bootstrap.define(r,{statics:{camelCase:function(L){return L.replace(/\-([a-z])/g,function(l,m){return m.toUpperCase();
});
},hyphenate:function(N){return N.replace(/[A-Z]/g,function(K){return (s+K.charAt(0).toLowerCase());
});
},capitalize:function(Q){return Q.replace(/\b[a-z]/g,function(n){return n.toUpperCase();
});
},clean:function(J){return this.trim(J.replace(/\s+/g,q));
},trimLeft:function(y){return y.replace(/^\s+/,x);
},trimRight:function(E){return E.replace(/\s+$/,x);
},trim:function(F){return F.replace(/^\s+|\s+$/g,x);
},startsWith:function(O,P){return O.indexOf(P)===0;
},endsWith:function(z,A){return z.substring(z.length-A.length,z.length)===A;
},pad:function(b,length,c){if(typeof c===o){c=v;
}var d=x;

for(var i=b.length;i<length;i++){d+=c;
}return d+b;
},firstUp:function(f){return f.charAt(0).toUpperCase()+f.substr(1);
},firstLow:function(e){return e.charAt(0).toLowerCase()+e.substr(1);
},contains:function(C,D){return C.indexOf(D)!=-1;
},format:function(G,H){var I=G;

for(var i=0;i<H.length;i++){I=I.replace(new RegExp(t+(i+1),w),H[i]);
}return I;
},escapeRegexpChars:function(B){return B.replace(/([.*+?^${}()|[\]\/\\])/g,u);
},toArray:function(a){return a.split(/\B|\b/g);
},stripTags:function(M){return M.replace(/<\/?[^>]+>/gi,x);
},stripScripts:function(g,h){var k=x;
var j=g.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){k+=arguments[1]+p;
return x;
});

if(h===true){qx.lang.Function.globalEval(k);
}return j;
}}});
})();
(function(){var n="function",m="Boolean",k="qx.Interface",j="]",h="toggle",g="Interface",f="is",e="[Interface ";
qx.Class.define(k,{statics:{define:function(name,P){if(P){if(P.extend&&!(P.extend instanceof Array)){P.extend=[P.extend];
}{};
var Q=P.statics?P.statics:{};
if(P.extend){Q.$$extends=P.extend;
}
if(P.properties){Q.$$properties=P.properties;
}
if(P.members){Q.$$members=P.members;
}
if(P.events){Q.$$events=P.events;
}}else{var Q={};
}Q.$$type=g;
Q.name=name;
Q.toString=this.genericToString;
Q.basename=qx.Bootstrap.createNamespace(name,Q);
qx.Interface.$$registry[name]=Q;
return Q;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(o){if(!o){return [];
}var p=o.concat();

for(var i=0,l=o.length;i<l;i++){if(o[i].$$extends){p.push.apply(p,this.flatten(o[i].$$extends));
}}return p;
},__bw:function(D,E,F,G){var K=F.$$members;

if(K){for(var J in K){if(qx.lang.Type.isFunction(K[J])){var I=this.__bx(E,J);
var H=I||qx.lang.Type.isFunction(D[J]);

if(!H){throw new Error('Implementation of method "'+J+'" is missing in class "'+E.classname+'" required by interface "'+F.name+'"');
}var L=G===true&&!I&&!qx.Class.hasInterface(E,F);

if(L){D[J]=this.__bA(F,D[J],J,K[J]);
}}else{if(typeof D[J]===undefined){if(typeof D[J]!==n){throw new Error('Implementation of member "'+J+'" is missing in class "'+E.classname+'" required by interface "'+F.name+'"');
}}}}}},__bx:function(u,v){var z=v.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!z){return false;
}var w=qx.lang.String.firstLow(z[2]);
var x=qx.Class.hasProperty(u,w);

if(!x){return false;
}var y=z[0]==f||z[0]==h;

if(y){return qx.Class.getPropertyDefinition(u,w).check==m;
}return true;
},__by:function(M,N){if(N.$$properties){for(var O in N.$$properties){if(!qx.Class.hasProperty(M,O)){throw new Error('The property "'+O+'" is not supported by Class "'+M.classname+'"!');
}}}},__bz:function(A,B){if(B.$$events){for(var C in B.$$events){if(!qx.Class.supportsEvent(A,C)){throw new Error('The event "'+C+'" is not supported by Class "'+A.classname+'"!');
}}}},assertObject:function(q,r){var t=q.constructor;
this.__bw(q,t,r,false);
this.__by(t,r);
this.__bz(t,r);
var s=r.$$extends;

if(s){for(var i=0,l=s.length;i<l;i++){this.assertObject(q,s[i]);
}}},assert:function(a,b,c){this.__bw(a.prototype,a,b,c);
this.__by(a,b);
this.__bz(a,b);
var d=b.$$extends;

if(d){for(var i=0,l=d.length;i<l;i++){this.assert(a,d[i],c);
}}},genericToString:function(){return e+this.name+j;
},$$registry:{},__bA:function(){},__bB:null,__bC:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__bD:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__bD=null;
},getInsets:function(){if(this.__bD){return this.__bD;
}var j=this._getDefaultInsets();
return this.__bD={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__bD=null;
}}});
})();
(function(){var j="_applyBackground",i="repeat",h="backgroundPositionX",g="backgroundPositionY",f="no-repeat",e="scale",d="repeat-x",c="repeat-y",b="qx.ui.decoration.MBackgroundImage",a="String";
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:j},backgroundRepeat:{check:[i,d,c,f,e],init:i,apply:j},backgroundPositionX:{nullable:true,apply:j},backgroundPositionY:{nullable:true,apply:j},backgroundPosition:{group:[g,h]}},members:{_generateBackgroundMarkup:function(k){var l=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),this.getBackgroundPositionX(),this.getBackgroundPositionY(),k);
return l;
},_applyBackground:function(){{};
}}});
})();
(function(){var z="_applyStyle",y="Color",x="px",w="solid",v="dotted",u="double",t="border:",s="dashed",r="",q="_applyWidth",k="qx.ui.decoration.Uniform",p="px ",n="__insets",j="position:absolute;top:0;left:0;",i=" ",m=";",l="__bE",o="scale",h="PositiveInteger";
qx.Class.define(k,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{width:{check:h,init:0,apply:q},style:{nullable:true,check:[w,v,s,u],init:w,apply:z},color:{nullable:true,check:y,apply:z},backgroundColor:{check:y,nullable:true,apply:z}},members:{__bE:null,_getDefaultInsets:function(){var A=this.getWidth();
return {top:A,right:A,bottom:A,left:A};
},_isInitialized:function(){return !!this.__bE;
},getMarkup:function(){if(this.__bE){return this.__bE;
}var d=j;
var e=this.getWidth();
{};
var g=qx.theme.manager.Color.getInstance();
d+=t+e+p+this.getStyle()+i+g.resolve(this.getColor())+m;
var f=this._generateBackgroundMarkup(d);
return this.__bE=f;
},resize:function(E,F,G){var I=this.getBackgroundImage()&&this.getBackgroundRepeat()==o;

if(I||qx.bom.client.Feature.CONTENT_BOX){var H=this.getWidth()*2;
F-=H;
G-=H;
if(F<0){F=0;
}
if(G<0){G=0;
}}E.style.width=F+x;
E.style.height=G+x;
},tint:function(B,C){var D=qx.theme.manager.Color.getInstance();

if(C==null){C=this.getBackgroundColor();
}B.style.backgroundColor=D.resolve(C)||r;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(l,n);
}});
})();
(function(){var r="_applyStyle",q="solid",p="Color",o="double",n="px ",m="dotted",l="_applyWidth",k="dashed",j="Number",i=" ",Q=";",P="shorthand",O="px",N="widthTop",M="styleRight",L="styleLeft",K="widthLeft",J="widthBottom",I="",H="styleTop",y="colorBottom",z="styleBottom",w="widthRight",x="colorLeft",u="colorRight",v="colorTop",s="border-left:",t="__bF",A="scale",B="position:absolute;top:0;left:0;",D="border-top:",C="border-bottom:",F="border-right:",E="qx.ui.decoration.Single",G="__insets";
qx.Class.define(E,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(W,X,Y){arguments.callee.base.call(this);
if(W!=null){this.setWidth(W);
}
if(X!=null){this.setStyle(X);
}
if(Y!=null){this.setColor(Y);
}},properties:{widthTop:{check:j,init:0,apply:l},widthRight:{check:j,init:0,apply:l},widthBottom:{check:j,init:0,apply:l},widthLeft:{check:j,init:0,apply:l},styleTop:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleRight:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleBottom:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleLeft:{nullable:true,check:[q,m,k,o],init:q,apply:r},colorTop:{nullable:true,check:p,apply:r},colorRight:{nullable:true,check:p,apply:r},colorBottom:{nullable:true,check:p,apply:r},colorLeft:{nullable:true,check:p,apply:r},backgroundColor:{check:p,nullable:true,apply:r},left:{group:[K,L,x]},right:{group:[w,M,u]},top:{group:[N,H,v]},bottom:{group:[J,z,y]},width:{group:[N,w,J,K],mode:P},style:{group:[H,M,z,L],mode:P},color:{group:[v,u,y,x],mode:P}},members:{__bF:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__bF;
},getMarkup:function(d){if(this.__bF){return this.__bF;
}var e=qx.theme.manager.Color.getInstance();
var f=I;
var h=this.getWidthTop();

if(h>0){f+=D+h+n+this.getStyleTop()+i+e.resolve(this.getColorTop())+Q;
}var h=this.getWidthRight();

if(h>0){f+=F+h+n+this.getStyleRight()+i+e.resolve(this.getColorRight())+Q;
}var h=this.getWidthBottom();

if(h>0){f+=C+h+n+this.getStyleBottom()+i+e.resolve(this.getColorBottom())+Q;
}var h=this.getWidthLeft();

if(h>0){f+=s+h+n+this.getStyleLeft()+i+e.resolve(this.getColorLeft())+Q;
}{};
f+=B;
var g=this._generateBackgroundMarkup(f);
return this.__bF=g;
},resize:function(R,S,T){var V=this.getBackgroundImage()&&this.getBackgroundRepeat()==A;

if(V||qx.bom.client.Feature.CONTENT_BOX){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
if(S<0){S=0;
}
if(T<0){T=0;
}}R.style.width=S+O;
R.style.height=T+O;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||I;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(t,G);
}});
})();
(function(){var o="px ",n=" ",m=";",l="Color",k="Number",j="border-left:",i="px",h="border-bottom:",g="border-top:",f="shorthand",G="border-right:",F="innerWidthRight",E='<div style="position:absolute;top:0;left:0;',D="innerColorBottom",C='</div>',B='',A="scale",z="innerColorRight",y="innerColorTop",x="innerColorLeft",v="qx.ui.decoration.Double",w="",t='">',u="__bG",r="innerWidthBottom",s="innerWidthLeft",p="__insets",q="innerWidthTop";
qx.Class.define(v,{extend:qx.ui.decoration.Single,construct:function(M,N,O,innerWidth,P){arguments.callee.base.call(this,M,N,O,innerWidth,P);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(P!=null){this.setInnerColor(P);
}},properties:{innerWidthTop:{check:k,init:0},innerWidthRight:{check:k,init:0},innerWidthBottom:{check:k,init:0},innerWidthLeft:{check:k,init:0},innerWidth:{group:[q,F,r,s],mode:f},innerColorTop:{nullable:true,check:l},innerColorRight:{nullable:true,check:l},innerColorBottom:{nullable:true,check:l},innerColorLeft:{nullable:true,check:l},innerColor:{group:[y,z,D,x],mode:f}},members:{__bG:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__bG;
},getMarkup:function(){if(this.__bG){return this.__bG;
}var a=qx.theme.manager.Color.getInstance();
var d=w;
var b=this.getInnerWidthTop();

if(b>0){d+=g+b+o+this.getStyleTop()+n+a.resolve(this.getInnerColorTop())+m;
}var b=this.getInnerWidthRight();

if(b>0){d+=G+b+o+this.getStyleRight()+n+a.resolve(this.getInnerColorRight())+m;
}var b=this.getInnerWidthBottom();

if(b>0){d+=h+b+o+this.getStyleBottom()+n+a.resolve(this.getInnerColorBottom())+m;
}var b=this.getInnerWidthLeft();

if(b>0){d+=j+b+o+this.getStyleLeft()+n+a.resolve(this.getInnerColorLeft())+m;
}{};
var e=this._generateBackgroundMarkup(d);
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
return this.__bG=E+c+t+e+C;
},resize:function(H,I,J){var L=this.getBackgroundImage()&&this.getBackgroundRepeat()==A;

if(L||qx.bom.client.Feature.CONTENT_BOX){var K=this.getInsets();
var innerWidth=I-K.left-K.right;
var innerHeight=J-K.top-K.bottom;
}else{var innerWidth=I-this.getWidthLeft()-this.getWidthRight();
var innerHeight=J-this.getWidthTop()-this.getWidthBottom();
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}H.firstChild.style.width=innerWidth+i;
H.firstChild.style.height=innerHeight+i;
}},destruct:function(){this._disposeFields(u,p);
}});
})();
(function(){var n="px",m="0px",l="-1px",k="no-repeat",j="scale-x",i="scale-y",h="-tr",g="-l",f="__insets",e='</div>',F="scale",E="qx.client",D="-br",C="-t",B="-tl",A="-r",z='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',y="_applyBaseImage",x="-b",w="__bJ",u="String",v="",s="-bl",t="-c",q="mshtml",r="__bI",o="__bH",p="qx.ui.decoration.Grid";
qx.Class.define(p,{extend:qx.ui.decoration.Abstract,construct:function(T,U){arguments.callee.base.call(this);
if(T!=null){this.setBaseImage(T);
}
if(U!=null){this.setInsets(U);
}},properties:{baseImage:{check:u,nullable:true,apply:y}},members:{__bH:null,__bI:null,__bJ:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bH;
},getMarkup:function(){if(this.__bH){return this.__bH;
}var P=qx.bom.element.Decoration;
var Q=this.__bI;
var R=this.__bJ;
var S=[];
S.push(z);
S.push(P.create(Q.tl,k,{top:0,left:0}));
S.push(P.create(Q.t,j,{top:0,left:R.left+n}));
S.push(P.create(Q.tr,k,{top:0,right:0}));
S.push(P.create(Q.bl,k,{bottom:0,left:0}));
S.push(P.create(Q.b,j,{bottom:0,left:R.left+n}));
S.push(P.create(Q.br,k,{bottom:0,right:0}));
S.push(P.create(Q.l,i,{top:R.top+n,left:0}));
S.push(P.create(Q.c,F,{top:R.top+n,left:R.left+n}));
S.push(P.create(Q.r,i,{top:R.top+n,right:0}));
S.push(e);
return this.__bH=S.join(v);
},resize:function(a,b,c){var d=this.__bJ;
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

if(qx.core.Variant.isSet(E,q)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(b%2==1){a.childNodes[2].style.marginRight=l;
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
}}}},tint:function(V,W){},_applyBaseImage:function(G,H){{};
var I=qx.util.ResourceManager.getInstance();

if(G){var K=qx.util.AliasManager.getInstance();
var M=K.resolve(G);
var N=/(.*)(\.[a-z]+)$/.exec(M);
var L=N[1];
var J=N[2];
var O=this.__bI={tl:L+B+J,t:L+C+J,tr:L+h+J,bl:L+s+J,b:L+x+J,br:L+D+J,l:L+g+J,c:L+t+J,r:L+A+J};
this.__bJ={top:I.getImageHeight(O.t),bottom:I.getImageHeight(O.b),left:I.getImageWidth(O.l),right:I.getImageWidth(O.r)};
}}},destruct:function(){this._disposeFields(o,r,w,f);
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g='<div style="',f='border:',e="1px solid ",d="",c=";",b="px",a='</div>',w="qx.ui.decoration.Beveled",v="__insets",u='<div style="position:absolute;top:1px;left:1px;',t='border-bottom:',s='border-right:',r="position:absolute;top:1px;left:1px;",q='<div style="overflow:hidden;font-size:0;line-height:0;">',p='border-left:',o='border-top:',n="Number",l='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k="__bK";
qx.Class.define(w,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(I,J,K){arguments.callee.base.call(this);
if(I!=null){this.setOuterColor(I);
}
if(J!=null){this.setInnerColor(J);
}
if(K!=null){this.setInnerOpacity(K);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:n,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__bK:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__bK;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__bK){return this.__bK;
}var L=qx.theme.manager.Color.getInstance();
var M=[];
var O=e+L.resolve(this.getOuterColor())+c;
var N=e+L.resolve(this.getInnerColor())+c;
M.push(q);
M.push(g);
M.push(f,O);
M.push(qx.bom.element.Opacity.compile(0.35));
M.push(i);
M.push(l);
M.push(p,O);
M.push(s,O);
M.push(i);
M.push(g);
M.push(m);
M.push(o,O);
M.push(t,O);
M.push(i);
M.push(this._generateBackgroundMarkup(r));
M.push(u);
M.push(f,N);
M.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
M.push(i);
M.push(a);
return this.__bK=M.join(d);
},resize:function(x,y,z){if(y<4){y=4;
}
if(z<4){z=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=y-2;
var outerHeight=z-2;
var F=outerWidth;
var E=outerHeight;
var innerWidth=y-4;
var innerHeight=z-4;
}else{var outerWidth=y;
var outerHeight=z;
var F=y-2;
var E=z-2;
var innerWidth=F;
var innerHeight=E;
}var H=b;
var D=x.childNodes[0].style;
D.width=outerWidth+H;
D.height=outerHeight+H;
var C=x.childNodes[1].style;
C.width=outerWidth+H;
C.height=E+H;
var B=x.childNodes[2].style;
B.width=F+H;
B.height=outerHeight+H;
var A=x.childNodes[3].style;
A.width=F+H;
A.height=E+H;
var G=x.childNodes[4].style;
G.width=innerWidth+H;
G.height=innerHeight+H;
},tint:function(P,Q){var R=qx.theme.manager.Color.getInstance();

if(Q==null){Q=this.getBackgroundColor();
}P.childNodes[3].style.backgroundColor=R.resolve(Q)||d;
}},destruct:function(){this._disposeFields(k,v);
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",x="table-header-border",w="border-separator",v="tooltip-text",u="invalid",t="white",s="dotted",r="effect",q="table-focus-indicator",p="border-focused-invalid",o="qx/decoration/Classic",m="border-lead",n="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration",l="decoration/shadow/shadow.png";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:l,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:p,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:s,color:m}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:x,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:q,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:x,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:x,styleRight:f,widthBottom:2,colorBottom:r,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var ee="button",ed="widget",ec="background",eb="inset-thin",ea="atom",dY="outset",dX="text-disabled",dW="inset",dV="groupbox",dU="text-selected",cW="cell",cV="focused-inset",cU="tooltip",cT="menu-button",cS="middle",cR="spinner",cQ="image",cP="button-hovered",cO="checkbox",cN="toolbar-button",el="decoration/arrows/down.gif",em="button-frame",ej="popup",ek="textfield",eh="label",ei="background-invalid",ef="background-disabled",eg="list",en="bold",eo="shadow-small",dD="invalid",dC="scrollbar",dF="center",dE="datechooser/button",dH="button-abandoned",dG="background-light",dJ="main",dI="background-selected",dB="date-chooser",dA="date-chooser-title",bt="radiobutton",bu="default",bv="white",bw="combobox",bx="background-field",by="outset-thin",bz="scrollbar/button",bA="combobox/button",bB="table-header-cell",bC="decoration/arrows/right.gif",eC="decoration/arrows/down-small.gif",eB="icon/16/places/folder.png",eA="tree-folder",ez="slidebar/button-forward",eG="icon/16/mimetypes/text-plain.png",eF="right-top",eE="button-checked",eD=".png",eI="background-focused",eH="datechooser",cn="slidebar/button-backward",co="selectbox",cl="treevirtual-folder",cm="decoration/form/",cr="decoration/tree/minus.gif",cs="",cp="decoration/tree/plus.gif",cq="-invalid",cj="decoration/arrows/left.gif",ck="icon/16/places/folder-open.png",bU="table-row-background-even",bT="decoration/treevirtual/cross_minus.gif",bW="radiobutton-hovered",bV="decoration/treevirtual/start_plus.gif",bQ="decoration/cursors/",bP="icon/16/actions/dialog-ok.png",bS="slidebar",bR="table-scroller-focus-indicator",bO="move-frame",bN="nodrop",cx="tabview-page-button-left",cy="decoration/arrows/up-small.gif",cz="move",cA="radiobutton-checked-focused",ct="text-label",cu="qx.theme.classic.Appearance",cv="decoration/menu/checkbox.gif",cw="tooltip-error",cB="right",cC="decoration/arrows/up.gif",cg="decoration/arrows/rewind.gif",cf="table-scroller-header",ce="radiobutton-disabled",cd="table-pane",cc="focused-outset",cb="checkbox-hovered",ca="text",bY="icon/16/actions/dialog-cancel.png",ci="datechooser-date-pane",ch="background-pane",cD="decoration/treevirtual/cross_plus.gif",cE="qx/icon/Oxygen/16/actions/window-close.png",cF="datechooser-week",cG="icon/16/apps/office-calendar.png",cH="datechooser-weekday",cI="table-header-border",cJ="table-header-cell-hover",cK="window-active-caption-text",cL="window-active-caption",cM="icon",de="checkbox-checked-focused",dd="toolbar-separator",dc="groove",db="checkbox-pressed",di="tooltip-invalid",dh="decoration/window/restore.gif",dg="decoration/menu/checkbox-invert.gif",df="scrollarea",dl="window-inactive-caption-text",dk="up.gif",dw="tabview-page-button-right",dx="checkbox-disabled",du="tabview-page-button-top",dv="tabview-page-button-bottom",ds="decoration/menu/radiobutton.gif",dt="decoration/arrows/",dq="decoration/table/descending.png",dr="tooltip-text",dy="checkbox-checked-hovered",dz="left.gif",dN="alias",dM="checkbox-checked-disabled",dP="decoration/arrows/right-invert.gif",dO="radiobutton-checked-disabled",dR="lead-item",dQ="checkbox-focused",dT="border-dark",dS="decoration/treevirtual/end_plus.gif",dL="decoration/treevirtual/start_minus.gif",dK="radiobutton-checked-hovered",ev="decoration/window/minimize.gif",ew="checkbox-checked",ex="table-header-cell-hovered",ey="down.gif",er="decoration/treevirtual/end.gif",es="decoration/treevirtual/end_minus.gif",et="window-inactive-caption",eu="decoration/menu/radiobutton-invert.gif",ep="text-placeholder",eq="slider",bs="decoration/table/select-column-order.png",br="decoration/arrows/next.gif",bq="table-header",bp="decoration/treevirtual/only_minus.gif",bo="datechooser-week-header",bn="decoration/window/maximize.gif",bm="decoration/treevirtual/only_plus.gif",bl="checkbox-checked-pressed",bk="menu-separator",bj="decoration/splitpane/knob-vertical.png",bF=".gif",bG="decoration/arrows/forward.gif",bD="radiobutton-checked-pressed",bE="table-statusbar",bJ="radiobutton-pressed",bK="copy",bH="table-row-background-selected",bI="radiobutton-focused",bL="decoration/splitpane/knob-horizontal.png",bM="right.gif",dm="radiobutton-checked",dj="decoration/treevirtual/cross.gif",dp="decoration/table/ascending.png",dn="decoration/treevirtual/line.gif",cY="date-chooser-selected",cX="toolbar-part-handle",bX="decoration/window/close.gif",da="icon/16/actions/view-refresh.png";
qx.Theme.define(cu,{appearances:{"widget":{},"label":{style:function(fB){return {textColor:fB.disabled?dX:undefined};
}},"image":{style:function(fA){return {opacity:!fA.replacement&&fA.disabled?0.3:undefined};
}},"atom":{},"atom/label":eh,"atom/icon":cQ,"root":{style:function(bb){return {backgroundColor:ec,textColor:ca,font:bu};
}},"popup":{style:function(eP){return {decorator:dJ,backgroundColor:ch,shadow:eo};
}},"tooltip":{include:ej,style:function(K){return {backgroundColor:cU,textColor:dr,decorator:cU,shadow:eo,padding:[1,3,2,3],offset:[5,5,20,5]};
}},"tooltip/atom":ea,"tooltip-error":{include:cU,style:function(eL){return {textColor:dU,showTimeout:100,hideTimeout:10000,decorator:cw,font:en,backgroundColor:di};
}},"tooltip-error/atom":ea,"iframe":{style:function(fG){return {backgroundColor:bv,decorator:dW};
}},"move-frame":{style:function(E){return {decorator:dJ};
}},"resize-frame":bO,"dragdrop-cursor":{style:function(s){var t=bN;

if(s.copy){t=bK;
}else if(s.move){t=cz;
}else if(s.alias){t=dN;
}return {source:bQ+t+bF,position:eF,offset:[2,16,2,6]};
}},"button-frame":{alias:ea,style:function(fv){if(fv.pressed||fv.abandoned||fv.checked){var fx=!fv.inner&&fv.focused?cV:dW;
var fw=[4,3,2,5];
}else{var fx=!fv.inner&&fv.focused?cc:dY;
var fw=[3,4];
}return {backgroundColor:fv.abandoned?dH:fv.hovered?cP:fv.checked?eE:ee,decorator:fx,padding:fw};
}},"button":{alias:em,include:em,style:function(fS){return {center:true};
}},"splitbutton":{},"splitbutton/button":ee,"splitbutton/arrow":{alias:ee,include:ee,style:function(gl){return {icon:el};
}},"scrollarea/corner":{style:function(){return {backgroundColor:ec};
}},"scrollarea":ed,"scrollarea/pane":ed,"scrollarea/scrollbar-x":dC,"scrollarea/scrollbar-y":dC,"list":{alias:df,style:function(fi){var fm;
var fk=!!fi.focused;
var fl=!!fi.invalid;
var fj=!!fi.disabled;

if(fl&&!fj){fm=ei;
}else if(fk&&!fl&&!fj){fm=eI;
}else if(fj){fm=ef;
}else{fm=bv;
}return {decorator:fi.focused?cV:dW,backgroundColor:fm};
}},"listitem":{alias:ea,style:function(fE){return {gap:4,padding:fE.lead?[2,4]:[3,5],backgroundColor:fE.selected?dI:undefined,textColor:fE.selected?dU:undefined,decorator:fE.lead?dR:undefined};
}},"textfield":{style:function(U){var ba;
var X=!!U.focused;
var Y=!!U.invalid;
var V=!!U.disabled;

if(Y&&!V){ba=ei;
}else if(X&&!Y&&!V){ba=eI;
}else if(V){ba=ef;
}else{ba=bx;
}var W;

if(U.disabled){W=dX;
}else if(U.showingPlaceholder){W=ep;
}else{W=undefined;
}return {decorator:U.focused?cV:dW,padding:[2,3],textColor:W,backgroundColor:ba};
}},"textarea":ek,"checkbox":{alias:ea,style:function(d){var f;

if(d.checked&&d.focused){f=de;
}else if(d.checked&&d.disabled){f=dM;
}else if(d.checked&&d.pressed){f=bl;
}else if(d.checked&&d.hovered){f=dy;
}else if(d.checked){f=ew;
}else if(d.disabled){f=dx;
}else if(d.focused){f=dQ;
}else if(d.pressed){f=db;
}else if(d.hovered){f=cb;
}else{f=cO;
}var e=d.invalid&&!d.disabled?cq:cs;
return {icon:cm+f+e+eD,gap:6};
}},"radiobutton":{alias:cO,include:cO,style:function(fH){var fJ;

if(fH.checked&&fH.focused){fJ=cA;
}else if(fH.checked&&fH.disabled){fJ=dO;
}else if(fH.checked&&fH.pressed){fJ=bD;
}else if(fH.checked&&fH.hovered){fJ=dK;
}else if(fH.checked){fJ=dm;
}else if(fH.disabled){fJ=ce;
}else if(fH.focused){fJ=bI;
}else if(fH.pressed){fJ=bJ;
}else if(fH.hovered){fJ=bW;
}else{fJ=bt;
}var fI=fH.invalid&&!fH.disabled?cq:cs;
return {icon:cm+fJ+fI+eD,shadow:undefined};
}},"spinner":{style:function(fh){return {decorator:fh.focused?cV:dW,textColor:fh.disabled?dX:undefined};
}},"spinner/textfield":{include:ek,style:function(gR){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:ee,include:ee,style:function(gv){return {icon:cy,padding:gv.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:gv.hovered?cP:ee};
}},"spinner/downbutton":{alias:ee,include:ee,style:function(gK){return {icon:eC,padding:gK.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:gK.hovered?cP:ee};
}},"datefield":bw,"datefield/button":{alias:bA,include:bA,style:function(u){return {icon:cG,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:eH,include:eH,style:function(fF){return {decorator:fF.focused?cV:dW};
}},"groupbox":{style:function(fQ){return {backgroundColor:ec};
}},"groupbox/legend":{alias:ea,style:function(c){return {backgroundColor:ec,textColor:c.invalid?dD:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(fs){return {padding:[12,9],decorator:dc};
}},"check-groupbox":dV,"check-groupbox/legend":{alias:cO,include:cO,style:function(fe){return {backgroundColor:ec,textColor:fe.invalid?dD:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":dV,"radio-groupbox/legend":{alias:bt,include:bt,style:function(gC){return {backgroundColor:ec,textColor:gC.invalid?dD:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(fY){return {backgroundColor:ec};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(k){return {decorator:cX,backgroundColor:ec,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(gt){return {margin:[3,2],decorator:dd};
}},"toolbar-button":{alias:ea,style:function(x){if(x.pressed||x.checked||x.abandoned){var z=eb;
var y=[3,2,1,4];
}else if(x.hovered){var z=by;
var y=[2,3];
}else{var z=undefined;
var y=[3,4];
}return {cursor:bu,decorator:z,padding:y,backgroundColor:x.abandoned?dH:x.checked?dG:ee};
}},"toolbar-menubutton":{alias:cN,include:cN,style:function(eN){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:cQ,include:cQ,style:function(M){return {source:eC};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":cN,"toolbar-splitbutton/arrow":{alias:cN,include:cN,style:function(gk){return {icon:el};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:ee,include:ee,style:function(fg){return {icon:fg.vertical?el:br};
}},"slidebar/button-backward":{alias:ee,include:ee,style:function(j){return {icon:j.vertical?cC:cj};
}},"tabview":{},"tabview/bar":{alias:bS,style:function(gw){var gx=0,gA=0,gy=0,gz=0;

if(gw.barTop){gy=-2;
}else if(gw.barBottom){gx=-2;
}else if(gw.barRight){gz=-2;
}else{gA=-2;
}return {marginBottom:gy,marginTop:gx,marginLeft:gz,marginRight:gA};
}},"tabview/bar/button-forward":{include:ez,alias:ez,style:function(fN){if(fN.barTop||fN.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:cn,alias:cn,style:function(gJ){if(gJ.barTop||gJ.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(gH){return {backgroundColor:ec,decorator:dY,padding:10};
}},"tabview-page":ed,"tabview-page/button":{style:function(eS){var fc;
var fa=0,eX=0,eU=0,eW=0;

if(eS.barTop||eS.barBottom){var eV=2,eT=2,eY=6,fb=6;
}else{var eV=6,eT=6,eY=6,fb=6;
}
if(eS.barTop){fc=du;
}else if(eS.barRight){fc=dw;
}else if(eS.barBottom){fc=dv;
}else{fc=cx;
}
if(eS.checked){if(eS.barTop||eS.barBottom){eY+=2;
fb+=2;
}else{eV+=2;
eT+=2;
}}else{if(eS.barTop||eS.barBottom){eU+=2;
fa+=2;
}else if(eS.barLeft||eS.barRight){eX+=2;
eW+=2;
}}
if(eS.checked){if(!eS.firstTab){if(eS.barTop||eS.barBottom){eW=-4;
}else{fa=-4;
}}
if(!eS.lastTab){if(eS.barTop||eS.barBottom){eX=-4;
}else{eU=-4;
}}}return {zIndex:eS.checked?10:5,decorator:fc,backgroundColor:ec,padding:[eV,fb,eT,eY],margin:[fa,eX,eU,eW]};
}},"tabview-page/button/label":eh,"tabview-page/button/icon":cQ,"tabview-page/button/close-button":{alias:ea,style:function(bc){return {icon:cE};
}},"scrollbar":{},"scrollbar/slider":{alias:eq,style:function(m){return {backgroundColor:dG};
}},"scrollbar/slider/knob":{include:em,style:function(gI){return {height:14,width:14,minHeight:gI.horizontal?undefined:14,minWidth:gI.horizontal?14:undefined};
}},"scrollbar/button":{alias:ee,include:ee,style:function(N){var O;

if(N.up||N.down){if(N.pressed||N.abandoned||N.checked){O=[5,2,3,4];
}else{O=[4,3];
}}else{if(N.pressed||N.abandoned||N.checked){O=[4,3,2,5];
}else{O=[3,4];
}}var P=dt;

if(N.left){P+=dz;
}else if(N.right){P+=bM;
}else if(N.up){P+=dk;
}else{P+=ey;
}return {padding:O,icon:P};
}},"scrollbar/button-begin":bz,"scrollbar/button-end":bz,"slider":{style:function(gh){var gi;

if(gh.disabled){gi=ef;
}else if(gh.invalid){gi=ei;
}else if(gh.focused){gi=dG;
}else{gi=bx;
}return {backgroundColor:gi,decorator:gh.focused?cV:dW};
}},"slider/knob":{include:em,style:function(fT){return {width:14,height:14,decorator:dY};
}},"tree-folder/open":{style:function(ft){return {source:ft.opened?cr:cp};
}},"tree-folder":{style:function(ge){return {padding:[2,3,2,0],icon:ge.opened?ck:eB};
}},"tree-folder/icon":{style:function(o){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(eK){return {padding:[1,2],backgroundColor:eK.selected?dI:undefined,textColor:eK.selected?dU:undefined};
}},"tree-file":{include:eA,alias:eA,style:function(fK){return {icon:eG};
}},"tree":{include:eg,alias:eg,style:function(q){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(D){return {decorator:dJ};
}},"treevirtual-folder":{style:function(gN){return {icon:(gN.opened?ck:eB)};
}},"treevirtual-file":{include:cl,alias:cl,style:function(fW){return {icon:eG};
}},"treevirtual-line":{style:function(gD){return {icon:dn};
}},"treevirtual-contract":{style:function(gM){return {icon:cr};
}},"treevirtual-expand":{style:function(g){return {icon:cp};
}},"treevirtual-only-contract":{style:function(fo){return {icon:bp};
}},"treevirtual-only-expand":{style:function(fu){return {icon:bm};
}},"treevirtual-start-contract":{style:function(be){return {icon:dL};
}},"treevirtual-start-expand":{style:function(fM){return {icon:bV};
}},"treevirtual-end-contract":{style:function(p){return {icon:es};
}},"treevirtual-end-expand":{style:function(C){return {icon:dS};
}},"treevirtual-cross-contract":{style:function(L){return {icon:bT};
}},"treevirtual-cross-expand":{style:function(bg){return {icon:cD};
}},"treevirtual-end":{style:function(eQ){return {icon:er};
}},"treevirtual-cross":{style:function(gE){return {icon:dj};
}},"window":{style:function(B){return {contentPadding:[10,10,10,10],backgroundColor:ec,decorator:B.maximized?undefined:dY,shadow:B.maximized?undefined:eo};
}},"window/pane":{},"window/captionbar":{style:function(eO){return {padding:1,backgroundColor:eO.active?cL:et,textColor:eO.active?cK:dl};
}},"window/icon":{style:function(gL){return {marginRight:4};
}},"window/title":{style:function(fd){return {cursor:bu,font:en,marginRight:20,alignY:cS};
}},"window/minimize-button":{include:ee,alias:ee,style:function(fX){return {icon:ev,padding:fX.pressed||fX.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:ee,alias:ee,style:function(gO){return {icon:dh,padding:gO.pressed||gO.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:ee,alias:ee,style:function(gP){return {icon:bn,padding:gP.pressed||gP.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:ee,alias:ee,style:function(gg){return {marginLeft:2,icon:bX,padding:gg.pressed||gg.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(gb){return {decorator:eb,padding:[2,6]};
}},"window/statusbar-text":eh,"resizer":{style:function(ff){return {decorator:dY};
}},"splitpane":{},"splitpane/splitter":{style:function(J){return {backgroundColor:ec};
}},"splitpane/splitter/knob":{style:function(gm){return {source:gm.horizontal?bL:bj,padding:2};
}},"splitpane/slider":{style:function(fq){return {backgroundColor:dT,opacity:0.3};
}},"selectbox":{include:em,style:function(a){var b=ee;

if(a.invalid&&!a.disabled){b=ei;
}else if(a.abandoned){b=dH;
}else if(!a.abandoned&&a.hovered){b=cP;
}else if(!a.abandoned&&!a.hovered&&a.checked){b=eE;
}return {backgroundColor:b};
}},"selectbox/atom":ea,"selectbox/popup":ej,"selectbox/list":eg,"selectbox/arrow":{style:function(fL){return {source:el,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(fD){return {decorator:dY};
}},"datechooser/navigation-bar":{style:function(gG){return {backgroundColor:dB,textColor:gG.disabled?dX:gG.invalid?dD:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":cU,"datechooser/last-month-button-tooltip":cU,"datechooser/next-year-button-tooltip":cU,"datechooser/next-month-button-tooltip":cU,"datechooser/last-year-button":dE,"datechooser/last-month-button":dE,"datechooser/next-year-button":dE,"datechooser/next-month-button":dE,"datechooser/button/icon":{},"datechooser/button":{style:function(h){var i={width:17,show:cM};

if(h.lastYear){i.icon=cg;
}else if(h.lastMonth){i.icon=cj;
}else if(h.nextYear){i.icon=bG;
}else if(h.nextMonth){i.icon=bC;
}
if(h.pressed||h.checked||h.abandoned){i.decorator=eb;
}else if(h.hovered){i.decorator=by;
}else{i.decorator=undefined;
}
if(h.pressed||h.checked||h.abandoned){i.padding=[2,0,0,2];
}else if(h.hovered){i.padding=1;
}else{i.padding=2;
}return i;
}},"datechooser/month-year-label":{style:function(w){return {font:en,textAlign:dF};
}},"datechooser/date-pane":{style:function(gu){return {decorator:ci,backgroundColor:dB};
}},"datechooser/weekday":{style:function(A){return {decorator:cH,font:en,textAlign:dF,textColor:A.disabled?dX:A.weekend?dA:dB,backgroundColor:A.weekend?dB:dA};
}},"datechooser/day":{style:function(gc){return {textAlign:dF,decorator:gc.today?dJ:undefined,textColor:gc.disabled?dX:gc.selected?dU:gc.otherMonth?dX:undefined,backgroundColor:gc.disabled?undefined:gc.selected?cY:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(fy){return {textAlign:dF,textColor:dA,padding:[2,4],decorator:fy.header?bo:cF};
}},"combobox":{style:function(fU){var fV;

if(fU.disabled){fV=ef;
}else if(fU.invalid){fV=ei;
}else if(fU.focused){fV=dG;
}else{fV=bx;
}return {decorator:fU.focused?cV:dW,textColor:fU.disabled?dX:undefined,backgroundColor:fV};
}},"combobox/button":{alias:ee,include:ee,style:function(r){return {icon:el,backgroundColor:r.hovered?cP:ee};
}},"combobox/popup":ej,"combobox/list":eg,"combobox/textfield":{include:ek,style:function(fp){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(G){var H={backgroundColor:ec,shadow:eo,decorator:dY,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1};

if(G.submenu){H.position=eF;
H.offset=[-2,-3];
}
if(G.contextmenu){H.offset=4;
}return H;
}},"menu-separator":{style:function(gq){return {height:0,decorator:bk,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:ea,style:function(gs){return {backgroundColor:gs.selected?dI:undefined,textColor:gs.selected?dU:undefined,padding:[2,6]};
}},"menu-button/icon":{include:cQ,style:function(gd){return {alignY:cS};
}},"menu-button/label":{include:eh,style:function(gn){return {alignY:cS,padding:1};
}},"menu-button/shortcut":{include:eh,style:function(fO){return {alignY:cS,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(eM){return {source:eM.selected?dP:bC,alignY:cS};
}},"menu-checkbox":{alias:cT,include:cT,style:function(v){return {icon:!v.checked?undefined:v.selected?dg:cv};
}},"menu-radiobutton":{alias:cT,include:cT,style:function(fn){return {icon:!fn.checked?undefined:fn.selected?eu:ds};
}},"menubar":{style:function(n){return {backgroundColor:ec,decorator:dY};
}},"menubar-button":{alias:ea,style:function(gr){return {padding:[2,6],backgroundColor:gr.pressed||gr.hovered?dI:undefined,textColor:gr.pressed||gr.hovered?dU:undefined};
}},"colorselector":ed,"colorselector/control-bar":ed,"colorselector/visual-pane":dV,"colorselector/control-pane":ed,"colorselector/preset-grid":ed,"colorselector/colorbucket":{style:function(ga){return {decorator:eb,width:16,height:16};
}},"colorselector/preset-field-set":dV,"colorselector/input-field-set":dV,"colorselector/preview-field-set":dV,"colorselector/hex-field-composite":ed,"colorselector/hex-field":ek,"colorselector/rgb-spinner-composite":ed,"colorselector/rgb-spinner-red":cR,"colorselector/rgb-spinner-green":cR,"colorselector/rgb-spinner-blue":cR,"colorselector/hsb-spinner-composite":ed,"colorselector/hsb-spinner-hue":cR,"colorselector/hsb-spinner-saturation":cR,"colorselector/hsb-spinner-brightness":cR,"colorselector/preview-content-old":{style:function(fz){return {decorator:eb,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gQ){return {decorator:eb,backgroundColor:bv,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(gj){return {decorator:eb,margin:5};
}},"colorselector/brightness-field":{style:function(gF){return {decorator:eb,margin:[5,7]};
}},"colorselector/hue-saturation-pane":ed,"colorselector/hue-saturation-handle":ed,"colorselector/brightness-pane":ed,"colorselector/brightness-handle":ed,"table":ed,"table/statusbar":{style:function(I){return {decorator:bE,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:ee,style:function(R){var T,S;

if(R.pressed||R.checked||R.abandoned){T=eb;
S=[3,2,1,4];
}else if(R.hovered){T=by;
S=[2,3];
}else{T=undefined;
S=[3,4];
}return {decorator:T,padding:S,backgroundColor:R.abandoned?dH:ee,icon:bs};
}},"table-column-reset-button":{extend:cT,alias:cT,style:function(){return {icon:da};
}},"table-scroller/scrollbar-x":dC,"table-scroller/scrollbar-y":dC,"table-scroller":ed,"table-scroller/header":{style:function(gB){return {decorator:cf,backgroundColor:bq};
}},"table-scroller/pane":{style:function(eJ){return {backgroundColor:cd};
}},"table-scroller/focus-indicator":{style:function(gf){return {decorator:bR};
}},"table-scroller/resize-line":{style:function(fR){return {backgroundColor:cI,width:3};
}},"table-header-cell":{alias:ea,style:function(F){return {paddingLeft:2,paddingRight:2,paddingBottom:F.hovered?0:2,decorator:F.hovered?ex:bB,backgroundColor:F.hovered?cJ:bB,sortIcon:F.sorted?(F.sortedAscending?dp:dq):undefined};
}},"table-header-cell/sort-icon":{style:function(gp){return {alignY:cS};
}},"table-editor-textfield":{include:ek,style:function(Q){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:co,alias:co,style:function(fC){return {padding:[0,2]};
}},"table-editor-combobox":{include:bw,alias:bw,style:function(eR){return {decorator:undefined};
}},"colorpopup":{alias:ej,include:ej,style:function(bf){return {decorator:dY,padding:5,backgroundColor:ec};
}},"colorpopup/field":{style:function(l){return {decorator:eb,margin:2,width:14,height:14,backgroundColor:ec};
}},"colorpopup/selector-button":ee,"colorpopup/auto-button":ee,"colorpopup/preview-pane":dV,"colorpopup/current-preview":{style:function(fr){return {height:20,padding:4,marginLeft:4,decorator:eb,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(bh){return {height:20,padding:4,marginRight:4,decorator:eb,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:ee,include:ee,style:function(go){return {icon:bP};
}},"colorpopup/colorselector-cancelbutton":{alias:ee,include:ee,style:function(fP){return {icon:bY};
}},"row-layer":ed,"column-layer":ed,"cell":{style:function(bd){return {backgroundColor:bd.selected?bH:bU,textColor:bd.selected?dU:ct,padding:[3,6]};
}},"cell-string":cW,"cell-number":{include:cW,style:function(bi){return {textAlign:cB};
}},"cell-image":cW,"cell-boolean":cW,"cell-atom":cW,"cell-date":cW,"cell-html":cW}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var k="emulated",j="native",h='"',g="qx.lang.Core",f="\\\\",e="\\\"",d="[object Error]";
qx.Bootstrap.define(g,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==d)?k:j,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?j:k,{"native":Array.prototype.indexOf,"emulated":function(p,q){if(q==null){q=0;
}else if(q<0){q=Math.max(0,this.length+q);
}
for(var i=q;i<this.length;i++){if(this[i]===p){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?j:k,{"native":Array.prototype.lastIndexOf,"emulated":function(r,s){if(s==null){s=this.length-1;
}else if(s<0){s=Math.max(0,this.length+s);
}
for(var i=s;i>=0;i--){if(this[i]===r){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?j:k,{"native":Array.prototype.forEach,"emulated":function(t,u){var l=this.length;

for(var i=0;i<l;i++){var v=this[i];

if(v!==undefined){t.call(u||window,v,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?j:k,{"native":Array.prototype.filter,"emulated":function(w,x){var y=[];
var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){if(w.call(x||window,z,i,this)){y.push(this[i]);
}}}return y;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?j:k,{"native":Array.prototype.map,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){C[i]=A.call(B||window,D,i,this);
}}return C;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?j:k,{"native":Array.prototype.some,"emulated":function(m,n){var l=this.length;

for(var i=0;i<l;i++){var o=this[i];

if(o!==undefined){if(m.call(n||window,o,i,this)){return true;
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
(function(){var l=":",k="qx.client",j="anonymous",h="...",g="qx.dev.StackTrace",f="",e="\n",d="/source/class/",c=".";
qx.Class.define(g,{statics:{getStackTrace:qx.core.Variant.select(k,{"gecko":function(){try{throw new Error();
}catch(a){var y=this.getStackTraceFromError(a);
qx.lang.Array.removeAt(y,0);
var w=this.getStackTraceFromCaller(arguments);
var u=w.length>y.length?w:y;

for(var i=0;i<Math.min(w.length,y.length);i++){var v=w[i];

if(v.indexOf(j)>=0){continue;
}var C=v.split(l);

if(C.length!=2){continue;
}var A=C[0];
var t=C[1];
var s=y[i];
var D=s.split(l);
var z=D[0];
var r=D[1];

if(qx.Class.getByName(z)){var x=z;
}else{x=A;
}var B=x+l;

if(t){B+=t+l;
}B+=r;
u[i]=B;
}return u;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var ba;

try{ba.bar();
}catch(m){var bb=this.getStackTraceFromError(m);
qx.lang.Array.removeAt(bb,0);
return bb;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(k,{"opera":function(b){return [];
},"default":function(T){var Y=[];
var X=qx.lang.Function.getCaller(T);
var U={};

while(X){var V=qx.lang.Function.getName(X);
Y.push(V);

try{X=X.caller;
}catch(bc){break;
}
if(!X){break;
}var W=qx.core.ObjectRegistry.toHashCode(X);

if(U[W]){Y.push(h);
break;
}U[W]=X;
}return Y;
}}),getStackTraceFromError:qx.core.Variant.select(k,{"gecko":function(E){if(!E.stack){return [];
}var K=/@(.+):(\d+)$/gm;
var F;
var G=[];

while((F=K.exec(E.stack))!=null){var H=F[1];
var J=F[2];
var I=this.__bL(H);
G.push(I+l+J);
}return G;
},"webkit":function(S){if(S.sourceURL&&S.line){return [this.__bL(S.sourceURL)+l+S.line];
}else{return [];
}},"opera":function(L){if(L.message.indexOf("Backtrace:")<0){return [];
}var N=[];
var O=qx.lang.String.trim(L.message.split("Backtrace:")[1]);
var P=O.split(e);

for(var i=0;i<P.length;i++){var M=P[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(M&&M.length>=2){var R=M[1];
var Q=this.__bL(M[2]);
N.push(Q+l+R);
}}return N;
},"default":function(){return [];
}}),__bL:function(n){var q=d;
var o=n.indexOf(q);
var p=(o==-1)?n:n.substring(o+q.length).replace(/\//g,c).replace(/\.js$/,f);
return p;
}}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(c){},setItem:function(a,b){},splice:function(h,i,j){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var d="qx.globalErrorHandling",c="on",b="qx.event.GlobalError";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(e,f){this.__bM=e||null;
this.__bN=f||window;

if(qx.core.Setting.get(d)===c){if(e&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__bO,this);
}
if(!e&&window.onerror){window.onerror=null;
}}},__bO:function(j,k,l){if(this.__bM){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(a){if(qx.core.Setting.get(d)===c){var self=this;
return function(){if(!self.__bM){return a.apply(this,arguments);
}
try{return a.apply(this,arguments);
}catch(h){self.handleError(h);
}};
}else{return a;
}},handleError:function(i){if(this.__bM){this.__bM.call(this.__bN,i);
}}},defer:function(g){qx.core.Setting.define(d,c);
g.setErrorHandler(null,null);
}});
})();
(function(){var e="",d="qx.core.WindowError";
qx.Class.define(d,{extend:Error,construct:function(a,b,c){Error.call(this,a);
this.__bP=a;
this.__bQ=b||e;
this.__bR=c===undefined?-1:c;
},members:{__bP:null,__bQ:null,__bR:null,toString:function(){return this.__bP;
},getUri:function(){return this.__bQ;
},getLineNumber:function(){return this.__bR;
}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var m="load",l="unload",k="qx.client",j="ready",i="mshtml",h="qx.event.handler.Application",g="complete",f="gecko|opera|webkit",e="left",d="_window",b="DOMContentLoaded",c="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){arguments.callee.base.call(this);
this._window=q.getWindow();
this.__bS=false;
this.__bT=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bU:false,onScriptLoaded:function(){this.__bU=true;
var z=qx.event.handler.Application.$$instance;

if(z){z.__bX();
}}},members:{canHandleEvent:function(u,v){},registerEvent:function(n,o,p){},unregisterEvent:function(w,x,y){},__bV:null,__bS:null,__bT:null,__bW:null,__bX:function(){var t=qx.event.handler.Application;
if(!this.__bV&&this.__bS&&t.__bU){this.__bV=true;
qx.event.Registration.fireEvent(this._window,j);
}},isApplicationReady:function(){return this.__bV;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g){this.__bS=true;
this.__bX();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(k,f)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(k,i)){var r=function(){try{document.documentElement.doScroll(e);
this._onNativeLoadWrapped();
}catch(s){window.setTimeout(r,100);
}};
r();
}qx.bom.Event.addNativeListener(this._window,m,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,l,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,l,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__bS=true;
this.__bX();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__bW){this.__bW=true;

try{qx.event.Registration.fireEvent(this._window,c);
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._disposeFields(d);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(f){arguments.callee.base.call(this);
this.__bY={};

if(f!==undefined){this.setSize(f);
}},properties:{size:{check:d,init:null,nullable:true}},members:{__bY:null,getObject:function(a){if(this.$$disposed){return;
}
if(!a){throw new Error("Class needs to be defined!");
}var b=null;
var c=this.__bY[a.classname];

if(c){b=c.pop();
}
if(b){b.$$pooled=false;
}else{b=new a;
}return b;
},poolObject:function(k){if(!this.__bY){return;
}var m=k.classname;
var n=this.__bY[m];

if(k.$$pooled){throw new Error("Object is already pooled: "+k);
}
if(!n){this.__bY[m]=n=[];
}var o=this.getSize()||Infinity;

if(n.length>o){this.warn("Cannot pool "+k+" because the pool is already full.");
k.dispose();
return;
}k.$$pooled=true;
n.push(k);
}},destruct:function(){var j=this.__bY;
var g,h,i,l;

for(g in j){h=j[g];

for(i=0,l=h.length;i<l;i++){h[i].dispose();
}}delete this.__bY;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var i="_originalTarget",h="_relatedTarget",g="qx.event.type.Event",f="_target",e="_currentTarget";
qx.Class.define(g,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(c,d){{};
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
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(m){this._type=m;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(n){this._eventPhase=n;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(o){this._target=o;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(b){this._currentTarget=b;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(p){this._originalTarget=p;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(a){this._bubbles=a;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(q){this._cancelable=q;
}},destruct:function(){this._disposeFields(f,e,h,i);
}});
})();
(function(){var e="__ca",d="__cb",c="Better use 'getData'",b="Better use 'getOldData'",a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__ca:null,__cb:null,init:function(f,g,h){arguments.callee.base.call(this,false,h);
this.__ca=f;
this.__cb=g;
return this;
},clone:function(i){var j=arguments.callee.base.call(this,i);
j.__ca=this.__ca;
j.__cb=this.__cb;
return j;
},getData:function(){return this.__ca;
},getOldData:function(){return this.__cb;
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.__ca;
},getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.__cb;
}},destruct:function(){this._disposeFields(e,d);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var h="qx.event.dispatch.Direct";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(j){this._manager=j;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(a,event,b){return !event.getBubbles();
},dispatchEvent:function(c,event,d){event.setEventPhase(qx.event.type.Event.AT_TARGET);
var e=this._manager.getListeners(c,d,false);

if(e){for(var i=0,l=e.length;i<l;i++){var f=e[i].context||c;
e[i].handler.call(f,event);
}}}},defer:function(g){qx.event.Registration.addDispatcher(g);
}});
})();
(function(){var bG="get",bF="",bE="[",bD="]",bC="last",bB="change",bA=".",bz="Number",by="String",bx="set",bV="deepBinding",bU="item",bT="reset",bS="' (",bR="Boolean",bQ=").",bP=") to the object '",bO="Integer",bN="qx.data.SingleValueBinding",bM="No event could be found for the property",bK="PositiveNumber",bL="Binding from '",bI="PositiveInteger",bJ="Binding does not exist!",bH="Date";
qx.Class.define(bN,{statics:{DEBUG_ON:false,__cc:{},bind:function(a,b,c,d,f){var m=b.split(bA);
var h=this.__cj(m);
var p=[];
var q=[];
var n=[];
var k=[];
var l=a;
for(var i=0;i<m.length;i++){if(h[i]!==bF){k.push(bB);
}else{k.push(this.__ce(l,m[i]));
}p[i]=l;
if(i==m.length-1){if(h[i]!==bF){var t=h[i]===bC?l.length-1:h[i];
var g=l.getItem(t);
this.__ci(g,c,d,f,a);
n[i]=this.__ck(l,k[i],c,d,f,h[i]);
}else{if(m[i]!=null&&l[bG+qx.lang.String.firstUp(m[i])]!=null){var g=l[bG+qx.lang.String.firstUp(m[i])]();
this.__ci(g,c,d,f,a);
}n[i]=this.__ck(l,k[i],c,d,f);
}}else{var r={index:i,propertyNames:m,sources:p,listenerIds:n,arrayIndexValues:h,targetObject:c,targetProperty:d,options:f,listeners:q};
var o=qx.lang.Function.bind(this.__cd,this,r);
q.push(o);
n[i]=l.addListener(k[i],o);
}if(l[bG+qx.lang.String.firstUp(m[i])]==null){l=null;
}else if(h[i]!==bF){l=l[bG+qx.lang.String.firstUp(m[i])](h[i]);
}else{l=l[bG+qx.lang.String.firstUp(m[i])]();
}
if(!l){break;
}}var s={type:bV,listenerIds:n,sources:p};
this.__cl(s,a,b,c,d);
return s;
},__cd:function(D){if(D.options&&D.options.onUpdate){D.options.onUpdate(D.sources[D.index],D.targetObject);
}for(var j=D.index+1;j<D.propertyNames.length;j++){var H=D.sources[j];
D.sources[j]=null;

if(!H){continue;
}H.removeListenerById(D.listenerIds[j]);
}var H=D.sources[D.index];
for(var j=D.index+1;j<D.propertyNames.length;j++){if(D.arrayIndexValues[j-1]!==bF){H=H[bG+qx.lang.String.firstUp(D.propertyNames[j-1])](D.arrayIndexValues[j-1]);
}else{H=H[bG+qx.lang.String.firstUp(D.propertyNames[j-1])]();
}D.sources[j]=H;
if(!H){this.__cf(D.targetObject,D.targetProperty);
break;
}if(j==D.propertyNames.length-1){if(qx.Class.implementsInterface(H,qx.data.IListData)){var I=D.arrayIndexValues[j]===bC?H.length-1:D.arrayIndexValues[j];
var F=H.getItem(I);
this.__ci(F,D.targetObject,D.targetProperty,D.options,D.sources[D.index]);
D.listenerIds[j]=this.__ck(H,bB,D.targetObject,D.targetProperty,D.options,D.arrayIndexValues[j]);
}else{if(D.propertyNames[j]!=null&&H[bG+qx.lang.String.firstUp(D.propertyNames[j])]!=null){var F=H[bG+qx.lang.String.firstUp(D.propertyNames[j])]();
this.__ci(F,D.targetObject,D.targetProperty,D.options,D.sources[D.index]);
}var G=this.__ce(H,D.propertyNames[j]);
D.listenerIds[j]=this.__ck(H,G,D.targetObject,D.targetProperty,D.options);
}}else{if(D.listeners[j]==null){var E=qx.lang.Function.bind(this.__cd,this,D);
D.listeners.push(E);
}if(qx.Class.implementsInterface(H,qx.data.IListData)){var G=bB;
}else{var G=this.__ce(H,D.propertyNames[j]);
}D.listenerIds[j]=H.addListener(G,D.listeners[j]);
}}},__ce:function(J,K){var L=this.__cn(J,K);
if(L==null){if(qx.Class.supportsEvent(J.constructor,K)){L=K;
}else if(qx.Class.supportsEvent(J.constructor,bB+qx.lang.String.firstUp(K))){L=bB+qx.lang.String.firstUp(K);
}else{throw new qx.core.AssertionError(bM,K);
}}return L;
},__cf:function(bb,bc){var bd=this.__ch(bb,bc);

if(bd!=null){var be=bc.substring(bc.lastIndexOf(bA)+1,bc.length);
if(be.charAt(be.length-1)==bD){this.__cg(bb,bc,null);
return;
}if(bd[bT+qx.lang.String.firstUp(be)]!=undefined){bd[bT+qx.lang.String.firstUp(be)]();
}else{bd[bx+qx.lang.String.firstUp(be)](null);
}}},__cg:function(bp,bq,br){var bv=this.__ch(bp,bq);

if(bv!=null){var bw=bq.substring(bq.lastIndexOf(bA)+1,bq.length);
if(bw.charAt(bw.length-1)==bD){var bs=bw.substring(bw.lastIndexOf(bE)+1,bw.length-1);
var bu=bw.substring(0,bw.lastIndexOf(bE));
var bt=bv[bG+qx.lang.String.firstUp(bu)]();

if(bs==bC){bs=bt.length-1;
}
if(bt!=null){bt.setItem(bs,br);
}}else{bv[bx+qx.lang.String.firstUp(bw)](br);
}}},__ch:function(cu,cv){var cy=cv.split(bA);
var cz=cu;
for(var i=0;i<cy.length-1;i++){try{var cx=cy[i];
if(cx.indexOf(bD)==cx.length-1){var cw=cx.substring(cx.indexOf(bE)+1,cx.length-1);
cx=cx.substring(0,cx.indexOf(bE));
}cz=cz[bG+qx.lang.String.firstUp(cx)]();

if(cw!=null){if(cw==bC){cw=cz.length-1;
}cz=cz.getItem(cw);
cw=null;
}}catch(bf){return null;
}}return cz;
},__ci:function(ci,cj,ck,cl,cm){ci=this.__cm(ci,cj,ck,cl);
if(ci==null){this.__cf(cj,ck);
}if(ci!=undefined){try{this.__cg(cj,ck,ci);
if(cl&&cl.onUpdate){cl.onUpdate(cm,cj,ci);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cl&&cl.onSetFail){cl.onSetFail(e);
}else{this.warn("Failed so set value "+ci+" on "+cj+". Error message: "+e);
}}}},__cj:function(y){var z=[];
for(var i=0;i<y.length;i++){var name=y[i];
if(qx.lang.String.endsWith(name,bD)){var A=name.substring(name.indexOf(bE)+1,name.indexOf(bD));
if(name.indexOf(bD)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(A!==bC){if(A==bF||isNaN(parseInt(A))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bE)!=0){y[i]=name.substring(0,name.indexOf(bE));
z[i]=bF;
z[i+1]=A;
y.splice(i+1,0,bU);
i++;
}else{z[i]=A;
y.splice(i,1,bU);
}}else{z[i]=bF;
}}return z;
},__ck:function(bg,bh,bi,bj,bk,bl){var bm;
{};
var bo=function(cb,e){if(cb!==bF){if(cb===bC){cb=bg.length-1;
}var ce=bg.getItem(cb);
if(ce==undefined){qx.data.SingleValueBinding.__cf(bi,bj);
}var cc=e.getData().start;
var cd=e.getData().end;

if(cb<cc||cb>cd){return;
}}else{var ce=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bg+" by "+bh+" to "+bi+" ("+bj+")");
qx.log.Logger.debug("Data before conversion: "+ce);
}ce=qx.data.SingleValueBinding.__cm(ce,bi,bj,bk);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+ce);
}try{if(ce!=undefined){qx.data.SingleValueBinding.__cg(bi,bj,ce);
}else{qx.data.SingleValueBinding.__cf(bi,bj);
}if(bk&&bk.onUpdate){bk.onUpdate(bg,bi,ce);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bk&&bk.onSetFail){bk.onSetFail(e);
}else{this.warn("Failed so set value "+ce+" on "+bi+". Error message: "+e);
}}};
if(!bl){bl=bF;
}bo=qx.lang.Function.bind(bo,bg,bl);
var bn=bg.addListener(bh,bo);
return bn;
},__cl:function(M,N,O,P,Q){if(this.__cc[N.toHashCode()]===undefined){this.__cc[N.toHashCode()]=[];
}this.__cc[N.toHashCode()].push([M,N,O,P,Q]);
},__cm:function(R,S,T,U){if(U&&U.converter){var W;

if(S.getModel){W=S.getModel();
}return U.converter(R,W);
}else{var Y=this.__ch(S,T);
var ba=T.substring(T.lastIndexOf(bA)+1,T.length);
if(Y==null){return R;
}var X=qx.Class.getPropertyDefinition(Y.constructor,ba);
var V=X==null?bF:X.check;
return this.__co(R,V);
}},__cn:function(cr,cs){var ct=qx.Class.getPropertyDefinition(cr.constructor,cs);

if(ct==null){return null;
}return ct.event;
},__co:function(u,v){var w=qx.lang.Type.getClass(u);
if((w==bz||w==by)&&(v==bO||v==bI)){u=parseInt(u);
}if((w==bR||w==bz||w==bH)&&v==by){u=u+bF;
}if((w==bz||w==by)&&(v==bz||v==bK)){u=parseFloat(u);
}return u;
},removeBindingFromObject:function(cf,cg){if(cg.type==bV){for(var i=0;i<cg.sources.length;i++){if(cg.sources[i]){cg.sources[i].removeListenerById(cg.listenerIds[i]);
}}}else{cf.removeListenerById(cg);
}var ch=this.__cc[cf.toHashCode()];
if(ch!=undefined){for(var i=0;i<ch.length;i++){if(ch[i][0]==cg){qx.lang.Array.remove(ch,ch[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bY){{};
var ca=this.__cc[bY.toHashCode()];
for(var i=ca.length-1;i>=0;i--){this.removeBindingFromObject(bY,ca[i][0]);
}},getAllBindingsForObject:function(x){if(this.__cc[x.toHashCode()]===undefined){this.__cc[x.toHashCode()]=[];
}return this.__cc[x.toHashCode()];
},removeAllBindings:function(){for(var bX in this.__cc){var bW=qx.core.ObjectRegistry.fromHashCode(bX);
if(bW==null){delete this.__cc[bX];
continue;
}this.removeAllBindingsForObject(bW);
}this.__cc={};
},getAllBindings:function(){return this.__cc;
},showBindingInLog:function(cn,co){var cq;
for(var i=0;i<this.__cc[cn.toHashCode()].length;i++){if(this.__cc[cn.toHashCode()][i][0]==co){cq=this.__cc[cn.toHashCode()][i];
break;
}}
if(cq===undefined){var cp=bJ;
}else{var cp=bL+cq[1]+bS+cq[2]+bP+cq[3]+bS+cq[4]+bQ;
}qx.log.Logger.debug(cp);
},showAllBindingsInLog:function(){for(var C in this.__cc){var B=qx.core.ObjectRegistry.fromHashCode(C);

for(var i=0;i<this.__cc[C].length;i++){this.showBindingInLog(B,this.__cc[C][i][0]);
}}}}});
})();
(function(){var e=": ",d="qx.type.BaseError",c="";
qx.Class.define(d,{extend:Error,construct:function(a,b){Error.call(this,b);
this.__cp=a||c;
this.message=b||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cp:null,message:null,getComment:function(){return this.__cp;
},toString:function(){return this.__cp+e+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cq=qx.dev.StackTrace.getStackTrace();
},members:{__cq:null,getStackTrace:function(){return this.__cq;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var d="qx.event.handler.Object";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(h,i){return qx.Class.supportsEvent(h.constructor,i);
},registerEvent:function(a,b,c){},unregisterEvent:function(e,f,g){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var e="qx.util.DisposeUtil";
qx.Class.define(e,{statics:{disposeFields:function(h,j){var name;

for(var i=0,l=j.length;i<l;i++){var name=j[i];

if(h[name]==null||!h.hasOwnProperty(name)){continue;
}h[name]=null;
}},disposeObjects:function(f,g){var name;

for(var i=0,l=g.length;i<l;i++){name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(f[name].dispose){f[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}f[name]=null;
}},disposeArray:function(a,b){var d=a[b];

if(!d){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{var c;

for(var i=d.length-1;i>=0;i--){c=d[i];

if(c){c.dispose();
}}}catch(k){throw new Error("The array field: "+b+" of object: "+a+" has non disposable entries: "+k);
}d.length=0;
a[b]=null;
},disposeMap:function(n,o){var p=n[o];

if(!p){return;
}if(qx.core.ObjectRegistry.inShutDown){n[o]=null;
return;
}try{for(var q in p){if(p.hasOwnProperty(q)){p[q].dispose();
}}}catch(m){throw new Error("The map field: "+o+" of object: "+n+" has non disposable entries: "+m);
}n[o]=null;
}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Bootstrap.define(G,{statics:{__cr:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cs:function(K,L){return function(s){return K.prototype[L].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ct:function(){var M=qx.lang.Generics.__cr;

for(var Q in M){var O=window[Q];
var N=M[Q];

for(var i=0,l=N.length;i<l;i++){var P=N[i];

if(!O[P]){O[P]=qx.lang.Generics.__cs(O,P);
}}}}},defer:function(J){J.__ct();
}});
})();
(function(){var m='<div style="',l='"></div>',k="mshtml",j='"/>',i="",h='" style="vertical-align:top;',g="scale",f="qx.client",e="qx.ui.decoration.Util",d='<img src="',c="overflow:hidden;";
qx.Class.define(e,{statics:{insetsModified:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var n=qx.theme.manager.Decoration.getInstance();
var p=n.resolve(a).getInsets();
var o=n.resolve(b).getInsets();

if(p.top!=o.top||p.right!=o.right||p.bottom!=o.bottom||p.left!=o.left){return true;
}return false;
},generateBackgroundMarkup:function(q,r,s,top,t){if(q){var u=qx.util.AliasManager.getInstance().resolve(q);
if(r==g){var v=qx.util.ResourceManager.getInstance().toUri(u);
return d+v+h+t+j;
}else{var back=qx.bom.element.Background.compile(u,r,s,top);
return m+back+t+l;
}}else{if(t){if(qx.core.Variant.isSet(f,k)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){t+=c;
}}return m+t+l;
}else{return i;
}}}}});
})();
(function(){var l="decoration",k="object",j="_applyTheme",i="qx.theme.manager.Decoration",h="Theme",g="__cu",f="string",e="singleton";
qx.Class.define(i,{type:e,extend:qx.core.Object,properties:{theme:{check:h,nullable:true,apply:j}},members:{__cu:null,resolve:function(o){if(!o){return null;
}
if(typeof o===k){return o;
}var r=this.getTheme();

if(!r){return null;
}var r=this.getTheme();

if(!r){return null;
}var s=this.__cu;

if(!s){s=this.__cu={};
}var p=s[o];

if(p){return p;
}var q=r.decorations[o];

if(!q){return null;
}var t=q.decorator;

if(t==null){throw new Error("Missing definition of which decorator to use in entry: "+o+"!");
}return s[o]=(new t).set(q.style);
},isValidPropertyValue:function(u){if(typeof u===f){return this.isDynamic(u);
}else if(typeof u===k){var v=u.constructor;
return qx.Class.hasInterface(v,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(m){if(!m){return false;
}var n=this.getTheme();

if(!n){return false;
}return !!n.decorations[m];
},_applyTheme:function(a,b){var d=qx.util.AliasManager.getInstance();
if(a){d.add(l,a.resource);
}else{d.remove(l);
}
if(b){for(var c in b.aliases){d.remove(c);
}}
if(a){for(var c in a.aliases){d.add(c,a.aliases[c]);
}}
if(!a){this.__cu={};
}}},destruct:function(){this._disposeMap(g);
}});
})();
(function(){var e="_dynamic",d="qx.util.ValueManager",c="abstract";
qx.Class.define(d,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(f){return this._dynamic[f];
},isDynamic:function(a){return !!this._dynamic[a];
},resolve:function(g){if(g&&this._dynamic[g]){return this._dynamic[g];
}return g;
},_setDynamic:function(b){this._dynamic=b;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._disposeFields(e);
}});
})();
(function(){var o="/",n="0",m="__cv",l="qx/static",k="http://",j="https://",i="file://",h="qx.util.AliasManager",g="singleton",f=".",e="static";
qx.Class.define(h,{type:g,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cv={};
this.add(e,l);
},members:{__cv:null,_preprocess:function(p){var s=this._getDynamic();

if(s[p]===false){return p;
}else if(s[p]===undefined){if(p.charAt(0)===o||p.charAt(0)===f||p.indexOf(k)===0||p.indexOf(j)===n||p.indexOf(i)===0){s[p]=false;
return p;
}
if(this.__cv[p]){return this.__cv[p];
}var r=p.substring(0,p.indexOf(o));
var q=this.__cv[r];

if(q!==undefined){s[p]=q+p.substring(r.length);
}}return p;
},add:function(a,b){this.__cv[a]=b;
var d=this._getDynamic();
for(var c in d){if(c.substring(0,c.indexOf(o))===a){d[c]=b+c.substring(a.length);
}}},remove:function(t){delete this.__cv[t];
},resolve:function(u){var v=this._getDynamic();

if(u!==null){u=this._preprocess(u);
}return v[u]||u;
}},destruct:function(){this._disposeFields(m);
}});
})();
(function(){var a="qx.bom.client.Feature";
qx.Bootstrap.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:false,VML:false,XPATH:false,AIR:false,GEARS:false,SSL:false,__cw:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
this.QUIRKS_MODE=!this.STANDARD_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.CANVAS=!!window.CanvasRenderingContext2D;
this.VML=qx.bom.client.Engine.MSHTML;
this.AIR=navigator.userAgent.indexOf("adobeair")!==-1;
this.GEARS=!!(window.google&&window.google.gears);
this.XPATH=!!document.evaluate;
this.SSL=window.location.protocol==="https:";
}},defer:function(b){b.__cw();
}});
})();
(function(){var C="/",B="mshtml",A="qx.client",z="string",y="",x="?",w="Use 'getInstance().isClippedImage' instead!",v="Use 'getInstance().getImageWidth' instead!",u="Use 'getInstance().has' instead!",t="Use 'getInstance().getImageFormat' instead!",p="Use 'getInstance().getData' instead!",s="Use 'getInstance().getImageHeight' instead!",r="Use 'getInstance().toUri' instead!",o="qx.util.ResourceManager",n="singleton",q="qx.isSource";
qx.Class.define(o,{extend:qx.core.Object,type:n,statics:{__cx:qx.$$resources||{},__cy:{},has:function(P){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this.getInstance().has(P);
},getData:function(D){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return this.getInstance().getData(D);
},getImageWidth:function(f){qx.log.Logger.deprecatedMethodWarning(arguments.callee,v);
return this.getInstance().getImageWidth(f);
},getImageHeight:function(m){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return this.getInstance().getImageHeight(m);
},getImageFormat:function(H){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return this.getInstance().getImageFormat(H);
},isClippedImage:function(Q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getInstance().isClippedImage(Q);
},toUri:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return this.getInstance().toUri(a);
}},members:{has:function(E){return !!arguments.callee.self.__cx[E];
},getData:function(O){return arguments.callee.self.__cx[O]||null;
},getImageWidth:function(F){var G=arguments.callee.self.__cx[F];
return G?G[0]:null;
},getImageHeight:function(M){var N=arguments.callee.self.__cx[M];
return N?N[1]:null;
},getImageFormat:function(d){var e=arguments.callee.self.__cx[d];
return e?e[2]:null;
},isClippedImage:function(b){var c=arguments.callee.self.__cx[b];
return c&&c.length>4;
},toUri:function(I){if(I==null){return I;
}var J=arguments.callee.self.__cx[I];

if(!J){return I;
}
if(typeof J===z){var L=J;
}else{var L=J[3];
if(!L){return I;
}}var K=y;

if(qx.core.Variant.isSet(A,B)&&qx.bom.client.Feature.SSL){K=arguments.callee.self.__cy[L];
}return K+qx.$$libraries[L].resourceUri+C+I;
}},defer:function(g){if(qx.core.Variant.isSet(A,B)){if(qx.bom.client.Feature.SSL){for(var k in qx.$$libraries){var i=qx.$$libraries[k].resourceUri;
if(i.match(/^\/\//)!=null){g.__cy[k]=window.location.protocol;
}else if(i.match(/^\.\//)!=null&&qx.core.Setting.get(q)){var h=document.URL;
g.__cy[k]=h.substring(0,h.lastIndexOf(C));
}else if(i.match(/^http/)!=null){}else{var l=window.location.href.indexOf(x);
var j;

if(l==-1){j=window.location.href;
}else{j=window.location.href.substring(0,l);
}g.__cy[k]=j.substring(0,j.lastIndexOf(C)+1);
}}}}}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cz:[i,null,h,b,null,j,e,null,j],__cA:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cB:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==m){top+=0.01;
}
if(z){var B=(typeof z==m)?z+k:z;
}else{B=l;
}
if(top){var C=(typeof top==m)?top+k:top;
}else{C=l;
}return B+d+C;
},compile:function(t,u,v,top){var w=this.__cB(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y=this.__cz;
y[1]=x;
y[4]=w;
y[7]=u;
return y.join(g);
},getStyles:function(n,o,p,top){if(!n){return this.__cA;
}var q=this.__cB(p,top);
var r=qx.util.ResourceManager.getInstance().toUri(n);
var s={backgroundPosition:q,backgroundImage:c+r+f};

if(o!=null){s.backgroundRepeat=o;
}return s;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
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
(function(){var R=",",Q="rgb(",P=")",O="qx.theme.manager.Color",N="qx.util.ColorUtil";
qx.Class.define(N,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42],grey:[128,128,128]},isNamedColor:function(s){return this.NAMED[s]!==undefined;
},isSystemColor:function(j){return this.SYSTEM[j]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(O);
},isThemedColor:function(T){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(T);
},stringToRgb:function(h){if(this.supportsThemes()&&this.isThemedColor(h)){var h=qx.theme.manager.Color.getInstance().resolveDynamic(h);
}
if(this.isNamedColor(h)){return this.NAMED[h];
}else if(this.isSystemColor(h)){throw new Error("Could not convert system colors to RGB: "+h);
}else if(this.isRgbString(h)){return this.__cC();
}else if(this.isHex3String(h)){return this.__cE();
}else if(this.isHex6String(h)){return this.__cF();
}throw new Error("Could not parse color: "+h);
},cssStringToRgb:function(bg){if(this.isNamedColor(bg)){return this.NAMED[bg];
}else if(this.isSystemColor(bg)){throw new Error("Could not convert system colors to RGB: "+bg);
}else if(this.isRgbString(bg)){return this.__cC();
}else if(this.isRgbaString(bg)){return this.__cD();
}else if(this.isHex3String(bg)){return this.__cE();
}else if(this.isHex6String(bg)){return this.__cF();
}throw new Error("Could not parse color: "+bg);
},stringToRgbString:function(e){return this.rgbToRgbString(this.stringToRgb(e));
},rgbToRgbString:function(H){return Q+H[0]+R+H[1]+R+H[2]+P;
},rgbToHexString:function(bh){return (qx.lang.String.pad(bh[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(bh[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(bh[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(I){return this.isThemedColor(I)||this.isNamedColor(I)||this.isHex3String(I)||this.isHex6String(I)||this.isRgbString(I);
},isCssString:function(G){return this.isSystemColor(G)||this.isNamedColor(G)||this.isHex3String(G)||this.isHex6String(G)||this.isRgbString(G);
},isHex3String:function(bi){return this.REGEXP.hex3.test(bi);
},isHex6String:function(V){return this.REGEXP.hex6.test(V);
},isRgbString:function(S){return this.REGEXP.rgb.test(S);
},isRgbaString:function(J){return this.REGEXP.rgba.test(J);
},__cC:function(){var Y=parseInt(RegExp.$1,10);
var X=parseInt(RegExp.$2,10);
var W=parseInt(RegExp.$3,10);
return [Y,X,W];
},__cD:function(){var m=parseInt(RegExp.$1,10);
var l=parseInt(RegExp.$2,10);
var k=parseInt(RegExp.$3,10);
return [m,l,k];
},__cE:function(){var d=parseInt(RegExp.$1,16)*17;
var c=parseInt(RegExp.$2,16)*17;
var a=parseInt(RegExp.$3,16)*17;
return [d,c,a];
},__cF:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(o){if(this.isHex3String(o)){return this.__cE(o);
}throw new Error("Invalid hex3 value: "+o);
},hex6StringToRgb:function(n){if(this.isHex6String(n)){return this.__cF(n);
}throw new Error("Invalid hex6 value: "+n);
},hexStringToRgb:function(U){if(this.isHex3String(U)){return this.__cE(U);
}
if(this.isHex6String(U)){return this.__cF(U);
}throw new Error("Invalid hex value: "+U);
},rgbToHsb:function(u){var w,x,z;
var F=u[0];
var C=u[1];
var v=u[2];
var E=(F>C)?F:C;

if(v>E){E=v;
}var y=(F<C)?F:C;

if(v<y){y=v;
}z=E/255.0;

if(E!=0){x=(E-y)/E;
}else{x=0;
}
if(x==0){w=0;
}else{var B=(E-F)/(E-y);
var D=(E-C)/(E-y);
var A=(E-v)/(E-y);

if(F==E){w=A-D;
}else if(C==E){w=2.0+B-A;
}else{w=4.0+D-B;
}w=w/6.0;

if(w<0){w=w+1.0;
}}return [Math.round(w*360),Math.round(x*100),Math.round(z*100)];
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
}}return bf;
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="px",i="div",h="img",g="qx.client",f="",e="scale-x",d="mshtml",c="no-repeat",b="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",a="scale-y",A="repeat",z=".png",y="scale",x="webkit",w='<div style="',v="repeat-y",u='<img src="',t="qx.bom.element.Decoration",s="png",r="', sizingMethod='scale')",p="', sizingMethod='crop')",q='"/>',n='" style="',o="none",l="repeat-x",m='"></div>',k="absolute";
qx.Class.define(t,{statics:{DEBUG:false,__cG:qx.core.Variant.isSet(g,d)&&qx.bom.client.Engine.VERSION<9,__cH:qx.core.Variant.select(g,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__cI:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(H,I,J,K){var M=this.getTagName(J,I);

if(M!=H.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var N=this.getAttributes(I,J,K);

if(M===h){H.src=N.src;
}if(H.style.backgroundPosition!=f&&N.style.backgroundPosition===undefined){N.style.backgroundPosition=null;
}if(H.style.clip!=f&&N.style.clip===undefined){N.style.clip=null;
}var L=qx.bom.element.Style;
L.setStyles(H,N.style);
},create:function(B,C,D){var E=this.getTagName(C,B);
var G=this.getAttributes(B,C,D);
var F=qx.bom.element.Style.compile(G.style);

if(E===h){return u+G.src+n+F+q;
}else{return w+F+m;
}},getTagName:function(O,P){if(qx.core.Variant.isSet(g,d)){if(P&&this.__cG&&this.__cH[O]&&qx.lang.String.endsWith(P,z)){return i;
}}return this.__cI[O];
},getAttributes:function(Q,R,S){var W=qx.util.ResourceManager.getInstance();
var bc=qx.io2.ImageLoader;
var bd=qx.bom.element.Background;

if(!S){S={};
}
if(!S.position){S.position=k;
}
if(qx.core.Variant.isSet(g,d)){S.fontSize=0;
S.lineHeight=0;
}else if(qx.core.Variant.isSet(g,x)){S.WebkitUserDrag=o;
}var bb=W.getImageWidth(Q)||bc.getWidth(Q);
var ba=W.getImageHeight(Q)||bc.getHeight(Q);
var X=W.getImageFormat(Q)||bc.getFormat(Q);
{};
if(this.__cG&&this.__cH[R]&&X===s){if(S.width==null&&bb!=null){S.width=bb+j;
}
if(S.height==null&&ba!=null){S.height=ba+j;
}
if(R==c){S.filter=b+W.toUri(Q)+p;
}else{S.filter=b+W.toUri(Q)+r;
}S.backgroundImage=S.backgroundRepeat=f;
return {style:S};
}else{if(R===y){var Y=W.toUri(Q);

if(S.width==null&&bb!=null){S.width=bb+j;
}
if(S.height==null&&ba!=null){S.height=ba+j;
}return {src:Y,style:S};
}var V=W.isClippedImage(Q);

if(R===e||R===a){if(V){if(R===e){var bf=W.getData(Q);
var bh=W.getImageHeight(bf[4]);
var Y=W.toUri(bf[4]);
S.clip={top:-bf[6],height:ba};
S.height=bh+j;
if(S.top!=null){S.top=(parseInt(S.top,10)+bf[6])+j;
}else if(S.bottom!=null){S.bottom=(parseInt(S.bottom,10)+ba-bh-bf[6])+j;
}return {src:Y,style:S};
}else{var bf=W.getData(Q);
var be=W.getImageWidth(bf[4]);
var Y=W.toUri(bf[4]);
S.clip={left:-bf[5],width:bb};
S.width=be+j;
if(S.left!=null){S.left=(parseInt(S.left,10)+bf[5])+j;
}else if(S.right!=null){S.right=(parseInt(S.right,10)+bb-be-bf[5])+j;
}return {src:Y,style:S};
}}else{{};

if(R==e){S.height=ba==null?null:ba+j;
}else if(R==a){S.width=bb==null?null:bb+j;
}var Y=W.toUri(Q);
return {src:Y,style:S};
}}else{if(V&&R!==A){var bf=W.getData(Q);
var U=bd.getStyles(bf[4],R,bf[5],bf[6]);

for(var T in U){S[T]=U[T];
}
if(bb!=null&&S.width==null&&(R==v||R===c)){S.width=bb+j;
}
if(ba!=null&&S.height==null&&(R==l||R===c)){S.height=ba+j;
}return {style:S};
}else{{};
var U=bd.getStyles(Q,R);

for(var T in U){S[T]=U[T];
}
if(bb!=null&&S.width==null){S.width=bb+j;
}
if(ba!=null&&S.height==null){S.height=ba+j;
}if(S.filter){S.filter=f;
}return {style:S};
}}}}}});
})();
(function(){var x="qx.client",w="",v="boxSizing",u="cursor",t="opacity",s="clip",r="overflowY",q="overflowX",p="user-select",o="userSelect",ba="appearance",Y="style",X="MozUserModify",W="px",V="-webkit-appearance",U="styleFloat",T="-webkit-user-select",S="-moz-appearance",R="pixelHeight",Q="MozAppearance",E=":",F="pixelTop",C="pixelLeft",D="text-overflow",A="-moz-user-select",B="MozUserSelect",y="qx.bom.element.Style",z="-moz-user-modify",G="-webkit-user-modify",H="WebkitUserSelect",K="-o-text-overflow",J="pixelRight",M="cssFloat",L="pixelWidth",O="pixelBottom",N=";",I="WebkitUserModify",P="WebkitAppearance";
qx.Class.define(y,{statics:{__cJ:{styleNames:{"float":qx.core.Variant.select(x,{"mshtml":U,"default":M}),"appearance":qx.core.Variant.select(x,{"gecko":Q,"webkit":P,"default":ba}),"userSelect":qx.core.Variant.select(x,{"gecko":B,"webkit":H,"default":o}),"userModify":qx.core.Variant.select(x,{"gecko":X,"webkit":I,"default":o})},cssNames:{"appearance":qx.core.Variant.select(x,{"gecko":S,"webkit":V,"default":ba}),"userSelect":qx.core.Variant.select(x,{"gecko":A,"webkit":T,"default":p}),"userModify":qx.core.Variant.select(x,{"gecko":z,"webkit":G,"default":p}),"textOverflow":qx.core.Variant.select(x,{"opera":K,"default":D})},mshtmlPixel:{width:L,height:R,left:C,right:J,top:F,bottom:O},special:{clip:1,cursor:1,opacity:1,boxSizing:1,overflowX:1,overflowY:1}},__cK:{},compile:function(bi){var bm=[];
var bq=this.__cJ;
var bp=bq.special;
var bn=bq.cssNames;
var bl=this.__cK;
var bo=qx.lang.String;
var name,bk,bj;

for(name in bi){bj=bi[name];

if(bj==null){continue;
}name=bn[name]||name;
if(bp[name]){switch(name){case s:bm.push(qx.bom.element.Clip.compile(bj));
break;
case u:bm.push(qx.bom.element.Cursor.compile(bj));
break;
case t:bm.push(qx.bom.element.Opacity.compile(bj));
break;
case v:bm.push(qx.bom.element.BoxSizing.compile(bj));
break;
case q:bm.push(qx.bom.element.Overflow.compileX(bj));
break;
case r:bm.push(qx.bom.element.Overflow.compileY(bj));
break;
}}else{bk=bl[name];

if(!bk){bk=bl[name]=bo.hyphenate(name);
}bm.push(bk,E,bj,N);
}}return bm.join(w);
},setCss:qx.core.Variant.select(x,{"mshtml":function(by,bz){by.style.cssText=bz;
},"default":function(b,c){b.setAttribute(Y,c);
}}),getCss:qx.core.Variant.select(x,{"mshtml":function(bb){return bb.style.cssText.toLowerCase();
},"default":function(a){return a.getAttribute(Y);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bu,name,bv,bw){{};
var bx=this.__cJ;
name=bx.styleNames[name]||name;
if(bw!==false&&bx.special[name]){switch(name){case s:return qx.bom.element.Clip.set(bu,bv);
case u:return qx.bom.element.Cursor.set(bu,bv);
case t:return qx.bom.element.Opacity.set(bu,bv);
case v:return qx.bom.element.BoxSizing.set(bu,bv);
case q:return qx.bom.element.Overflow.setX(bu,bv);
case r:return qx.bom.element.Overflow.setY(bu,bv);
}}bu.style[name]=bv!==null?bv:w;
},setStyles:function(br,bs,bt){{};

for(var name in bs){this.set(br,name,bs[name],bt);
}},reset:function(d,name,e){var f=this.__cJ;
name=f.styleNames[name]||name;
if(e!==false&&f.special[name]){switch(name){case s:return qx.bom.element.Clip.reset(d);
case u:return qx.bom.element.Cursor.reset(d);
case t:return qx.bom.element.Opacity.reset(d);
case v:return qx.bom.element.BoxSizing.reset(d);
case q:return qx.bom.element.Overflow.resetX(d);
case r:return qx.bom.element.Overflow.resetY(d);
}}d.style[name]=w;
},get:qx.core.Variant.select(x,{"mshtml":function(g,name,h,i){var n=this.__cJ;
name=n.styleNames[name]||name;
if(i!==false&&n.special[name]){switch(name){case s:return qx.bom.element.Clip.get(g,h);
case u:return qx.bom.element.Cursor.get(g,h);
case t:return qx.bom.element.Opacity.get(g,h);
case v:return qx.bom.element.BoxSizing.get(g,h);
case q:return qx.bom.element.Overflow.getX(g,h);
case r:return qx.bom.element.Overflow.getY(g,h);
}}if(!g.currentStyle){return g.style[name]||w;
}switch(h){case this.LOCAL_MODE:return g.style[name]||w;
case this.CASCADED_MODE:return g.currentStyle[name]||w;
default:var m=g.currentStyle[name]||w;
if(/^-?[\.\d]+(px)?$/i.test(m)){return m;
}var l=n.mshtmlPixel[name];

if(l){var j=g.style[name];
g.style[name]=m||0;
var k=g.style[l]+W;
g.style[name]=j;
return k;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(m)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return m;
}},"default":function(bc,name,bd,be){var bh=this.__cJ;
name=bh.styleNames[name]||name;
if(be!==false&&bh.special[name]){switch(name){case s:return qx.bom.element.Clip.get(bc,bd);
case u:return qx.bom.element.Cursor.get(bc,bd);
case t:return qx.bom.element.Opacity.get(bc,bd);
case v:return qx.bom.element.BoxSizing.get(bc,bd);
case q:return qx.bom.element.Overflow.getX(bc,bd);
case r:return qx.bom.element.Overflow.getY(bc,bd);
}}switch(bd){case this.LOCAL_MODE:return bc.style[name]||w;
case this.CASCADED_MODE:if(bc.currentStyle){return bc.currentStyle[name]||w;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bf=qx.dom.Node.getDocument(bc);
var bg=bf.defaultView.getComputedStyle(bc,null);
return bg?bg[name]:w;
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
},set:function(x,y){if(!y){x.style.clip=j;
return;
}var D=y.left;
var top=y.top;
var C=y.width;
var B=y.height;
var z,A;

if(D==null){z=(C==null?w:C+v);
D=w;
}else{z=(C==null?w:D+C+v);
D=D+v;
}
if(top==null){A=(B==null?w:B+v);
top=w;
}else{A=(B==null?w:top+B+v);
top=top+v;
}x.style.clip=s+top+u+z+u+A+u+D+p;
},reset:function(E){E.style.clip=qx.bom.client.Engine.MSHTML?k:w;
}}});
})();
(function(){var o="n-resize",n="e-resize",m="nw-resize",l="ne-resize",k="",j="cursor:",i="qx.client",h=";",g="qx.bom.element.Cursor",f="cursor",e="hand";
qx.Class.define(g,{statics:{__cL:qx.core.Variant.select(i,{"mshtml":{"cursor":e,"ew-resize":n,"ns-resize":o,"nesw-resize":l,"nwse-resize":m},"opera":{"col-resize":n,"row-resize":o,"ew-resize":n,"ns-resize":o,"nesw-resize":l,"nwse-resize":m},"default":{}}),compile:function(a){return j+(this.__cL[a]||a)+h;
},get:function(p,q){return qx.bom.element.Style.get(p,f,q,false);
},set:function(b,c){b.style.cursor=this.__cL[c]||c;
},reset:function(d){d.style.cursor=k;
}}});
})();
(function(){var u="",t="qx.client",s=";",r="filter",q="opacity:",p="opacity",o="MozOpacity",n=");",m=")",l="zoom:1;filter:alpha(opacity=",i="qx.bom.element.Opacity",k="alpha(opacity=",j="-moz-opacity:";
qx.Class.define(i,{statics:{compile:qx.core.Variant.select(t,{"mshtml":function(w){if(w>=1){return u;
}
if(w<0.00001){w=0;
}return l+(w*100)+n;
},"gecko":function(h){if(h==1){h=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return j+h+s;
}else{return q+h+s;
}},"default":function(g){if(g==1){return u;
}return q+g+s;
}}),set:qx.core.Variant.select(t,{"mshtml":function(D,E){var F=qx.bom.element.Style.get(D,r,qx.bom.element.Style.COMPUTED_MODE,false);
if(E>=1){D.style.filter=F.replace(/alpha\([^\)]*\)/gi,u);
return;
}
if(E<0.00001){E=0;
}if(!D.currentStyle||!D.currentStyle.hasLayout){D.style.zoom=1;
}D.style.filter=F.replace(/alpha\([^\)]*\)/gi,u)+k+E*100+m;
},"gecko":function(A,B){if(B==1){B=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){A.style.MozOpacity=B;
}else{A.style.opacity=B;
}},"default":function(J,K){if(K==1){K=u;
}J.style.opacity=K;
}}),reset:qx.core.Variant.select(t,{"mshtml":function(e){var f=qx.bom.element.Style.get(e,r,qx.bom.element.Style.COMPUTED_MODE,false);
e.style.filter=f.replace(/alpha\([^\)]*\)/gi,u);
},"gecko":function(C){if(qx.bom.client.Engine.VERSION<1.7){C.style.MozOpacity=u;
}else{C.style.opacity=u;
}},"default":function(v){v.style.opacity=u;
}}),get:qx.core.Variant.select(t,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,r,b,false);

if(c){var d=c.match(/alpha\(opacity=(.*)\)/);

if(d&&d[1]){return parseFloat(d[1])/100;
}}return 1.0;
},"gecko":function(G,H){var I=qx.bom.element.Style.get(G,qx.bom.client.Engine.VERSION<1.7?o:p,H,false);

if(I==0.999999){I=1.0;
}
if(I!=null){return parseFloat(I);
}return 1.0;
},"default":function(x,y){var z=qx.bom.element.Style.get(x,p,y,false);

if(z!=null){return parseFloat(z);
}return 1.0;
}})}});
})();
(function(){var x="qx.client",w="",v="boxSizing",u="box-sizing",t=":",s="border-box",r="qx.bom.element.BoxSizing",q="KhtmlBoxSizing",p="-moz-box-sizing",o="WebkitBoxSizing",k=";",n="-khtml-box-sizing",m="content-box",j="-webkit-box-sizing",h="MozBoxSizing";
qx.Class.define(r,{statics:{__cM:qx.core.Variant.select(x,{"mshtml":null,"webkit":[v,q,o],"gecko":[h],"opera":[v]}),__cN:qx.core.Variant.select(x,{"mshtml":null,"webkit":[u,n,j],"gecko":[p],"opera":[u]}),__cO:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cP:function(B){var C=this.__cO;
return C.tags[B.tagName.toLowerCase()]||C.types[B.type];
},compile:qx.core.Variant.select(x,{"mshtml":function(G){{};
},"default":function(D){var F=this.__cN;
var E=w;

if(F){for(var i=0,l=F.length;i<l;i++){E+=F[i]+t+D+k;
}}return E;
}}),get:qx.core.Variant.select(x,{"mshtml":function(g){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(g))){if(!this.__cP(g)){return m;
}}return s;
},"default":function(a){var c=this.__cM;
var b;

if(c){for(var i=0,l=c.length;i<l;i++){b=qx.bom.element.Style.get(a,c[i],null,false);

if(b!=null&&b!==w){return b;
}}}return w;
}}),set:qx.core.Variant.select(x,{"mshtml":function(z,A){{};
},"default":function(d,e){var f=this.__cM;

if(f){for(var i=0,l=f.length;i<l;i++){d.style[f[i]]=e;
}}}}),reset:function(y){this.set(y,w);
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.Document";
qx.Class.define(a,{statics:{isQuirksMode:function(l){return (l||window).document.compatMode!==b;
},isStandardMode:function(g){return (g||window).document.compatMode===b;
},getWidth:function(h){var i=(h||window).document;
var k=qx.bom.Viewport.getWidth(h);
var j=(qx.bom.client.Engine.OPERA&&qx.bom.client.Engine.VERSION>9.5&&qx.bom.client.Engine.VERSION<=10);
var scroll=i.compatMode===b?i.documentElement.scrollWidth:i.body.scrollWidth;
return j?k:Math.max(scroll,k);
},getHeight:function(c){var d=(c||window).document;
var f=qx.bom.Viewport.getHeight(c);
var e=(qx.bom.client.Engine.OPERA&&qx.bom.client.Engine.VERSION>9.5&&qx.bom.client.Engine.VERSION<=10);
var scroll=d.compatMode===b?d.documentElement.scrollHeight:d.body.scrollHeight;
return e?f:Math.max(scroll,f);
}}});
})();
(function(){var f="qx.client",e="CSS1Compat",d="qx.bom.Viewport";
qx.Class.define(d,{statics:{getWidth:qx.core.Variant.select(f,{"opera":function(g){return (g||window).document.body.clientWidth;
},"webkit":function(n){return (n||window).innerWidth;
},"default":function(b){var c=(b||window).document;
return c.compatMode===e?c.documentElement.clientWidth:c.body.clientWidth;
}}),getHeight:qx.core.Variant.select(f,{"opera":function(a){return (a||window).document.body.clientHeight;
},"webkit":function(m){return (m||window).innerHeight;
},"default":function(o){var p=(o||window).document;
return p.compatMode===e?p.documentElement.clientHeight:p.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(f,{"mshtml":function(h){var i=(h||window).document;
return i.documentElement.scrollLeft||i.body.scrollLeft;
},"default":function(l){return (l||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(f,{"mshtml":function(j){var k=(j||window).document;
return k.documentElement.scrollTop||k.body.scrollTop;
},"default":function(q){return (q||window).pageYOffset;
}})}});
})();
(function(){var bv="",bu="qx.client",bt="hidden",bs="-moz-scrollbars-none",br="overflow",bq=";",bp="overflowY",bo=":",bn="overflowX",bm="overflow:",bH="none",bG="scroll",bF="borderLeftStyle",bE="borderRightStyle",bD="div",bC="borderRightWidth",bB="overflow-y",bA="borderLeftWidth",bz="-moz-scrollbars-vertical",by="100px",bw="qx.bom.element.Overflow",bx="overflow-x";
qx.Class.define(bw,{statics:{__cQ:null,getScrollbarWidth:function(){if(this.__cQ!==null){return this.__cQ;
}var G=qx.bom.element.Style;
var I=function(ca,cb){return parseInt(G.get(ca,cb))||0;
};
var J=function(V){return (G.get(V,bE)==bH?0:I(V,bC));
};
var H=function(n){return (G.get(n,bF)==bH?0:I(n,bA));
};
var L=qx.core.Variant.select(bu,{"mshtml":function(M){if(G.get(M,bp)==bt||M.clientWidth==0){return J(M);
}return Math.max(0,M.offsetWidth-M.clientLeft-M.clientWidth);
},"default":function(x){if(x.clientWidth==0){var y=G.get(x,br);
var z=(y==bG||y==bz?16:0);
return Math.max(0,J(x)+z);
}return Math.max(0,(x.offsetWidth-x.clientWidth-H(x)));
}});
var K=function(X){return L(X)-J(X);
};
var t=document.createElement(bD);
var s=t.style;
s.height=s.width=by;
s.overflow=bG;
document.body.appendChild(t);
var c=K(t);
this.__cQ=c?c:16;
document.body.removeChild(t);
return this.__cQ;
},_compile:qx.core.Variant.select(bu,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bi,bj){if(bj==bt){bj=bs;
}return bm+bj+bq;
}:
function(B,C){return B+bo+C+bq;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bg,bh){return bm+bh+bq;
}:
function(bQ,bR){return bQ+bo+bR+bq;
},"default":function(N,O){return N+bo+O+bq;
}}),compileX:function(bU){return this._compile(bx,bU);
},compileY:function(q){return this._compile(bB,q);
},getX:qx.core.Variant.select(bu,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(R,S){var T=qx.bom.element.Style.get(R,br,S,false);

if(T===bs){T=bt;
}return T;
}:
function(bK,bL){return qx.bom.element.Style.get(bK,bn,bL,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bV,bW){return qx.bom.element.Style.get(bV,br,bW,false);
}:
function(bS,bT){return qx.bom.element.Style.get(bS,bn,bT,false);
},"default":function(bN,bO){return qx.bom.element.Style.get(bN,bn,bO,false);
}}),setX:qx.core.Variant.select(bu,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(l,m){if(m==bt){m=bs;
}l.style.overflow=m;
}:
function(d,e){d.style.overflowX=e;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(D,E){D.style.overflow=E;
}:
function(v,w){v.style.overflowX=w;
},"default":function(j,k){j.style.overflowX=k;
}}),resetX:qx.core.Variant.select(bu,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(W){W.style.overflow=bv;
}:
function(bP){bP.style.overflowX=bv;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bI,bJ){bI.style.overflow=bv;
}:
function(o,p){o.style.overflowX=bv;
},"default":function(F){F.style.overflowX=bv;
}}),getY:qx.core.Variant.select(bu,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb,bc){var bd=qx.bom.element.Style.get(bb,br,bc,false);

if(bd===bs){bd=bt;
}return bd;
}:
function(cc,cd){return qx.bom.element.Style.get(cc,bp,cd,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){return qx.bom.element.Style.get(ce,br,cf,false);
}:
function(P,Q){return qx.bom.element.Style.get(P,bp,Q,false);
},"default":function(bk,bl){return qx.bom.element.Style.get(bk,bp,bl,false);
}}),setY:qx.core.Variant.select(bu,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(Y,ba){if(ba===bt){ba=bs;
}Y.style.overflow=ba;
}:
function(h,i){h.style.overflowY=i;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(be,bf){be.style.overflow=bf;
}:
function(f,g){f.style.overflowY=g;
},"default":function(bX,bY){bX.style.overflowY=bY;
}}),resetY:qx.core.Variant.select(bu,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(A){A.style.overflow=bv;
}:
function(U){U.style.overflowY=bv;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(r,u){r.style.overflow=bv;
}:
function(a,b){a.style.overflowY=bv;
},"default":function(bM){bM.style.overflowY=bv;
}})}});
})();
(function(){var h="qx.client",g="qx.io2.ImageLoader",f="load";
qx.Bootstrap.define(g,{statics:{__cR:{},__cS:{width:null,height:null},__cT:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(v){var w=this.__cR[v];
return !!(w&&w.loaded);
},isFailed:function(k){var m=this.__cR[k];
return !!(m&&m.failed);
},isLoading:function(C){var D=this.__cR[C];
return !!(D&&D.loading);
},getFormat:function(j){if(j!=null&&this.__cR[j]){return this.__cR[j]||null;
}else{return null;
}},getSize:function(F){return this.__cR[F]||this.__cS;
},getWidth:function(t){var u=this.__cR[t];
return u?u.width:null;
},getHeight:function(d){var e=this.__cR[d];
return e?e.height:null;
},load:function(n,o,p){var q=this.__cR[n];

if(!q){q=this.__cR[n]={};
}if(o&&!p){p=window;
}if(q.loaded||q.loading||q.failed){if(o){if(q.loading){q.callbacks.push(o,p);
}else{o.call(p,n,q);
}}}else{q.loading=true;
q.callbacks=[];

if(o){q.callbacks.push(o,p);
}var s=new Image();
var r=qx.lang.Function.listener(this.__cU,this,s,n);
s.onload=r;
s.onerror=r;
s.src=n;
}},__cU:qx.event.GlobalError.observeMethod(function(event,x,y){var z=this.__cR[y];
if(event.type===f){z.loaded=true;
z.width=this.__cV(x);
z.height=this.__cW(x);
var A=this.__cT.exec(y);

if(A!=null){z.format=A[1];
}}else{z.failed=true;
}x.onload=x.onerror=null;
var B=z.callbacks;
delete z.loading;
delete z.callbacks;
for(var i=0,l=B.length;i<l;i+=2){B[i].call(B[i+1],y,z);
}}),__cV:qx.core.Variant.select(h,{"gecko":function(a){return a.naturalWidth;
},"default":function(E){return E.width;
}}),__cW:qx.core.Variant.select(h,{"gecko":function(b){return b.naturalHeight;
},"default":function(c){return c.height;
}})}});
})();
(function(){var f="_window",d="_manager",c="qx.event.handler.Window";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(j){arguments.callee.base.call(this);
this._manager=j;
this._window=j.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(v,w){},registerEvent:function(k,l,m){},unregisterEvent:function(g,h,i){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var b=qx.event.handler.Window.SUPPORTED_TYPES;

for(var a in b){qx.bom.Event.addNativeListener(this._window,a,this._onNativeWrapper);
}},_stopWindowObserver:function(){var t=qx.event.handler.Window.SUPPORTED_TYPES;

for(var s in t){qx.bom.Event.removeNativeListener(this._window,s,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var o=this._window;
var r=o.document;
var p=r.documentElement;
var n=e.target||e.srcElement;

if(n==null||n===o||n===r||n===p){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,o]);
qx.event.Registration.dispatchEvent(o,event);
var q=event.getReturnValue();

if(q!=null){e.returnValue=q;
return q;
}}})},destruct:function(){this._stopWindowObserver();
this._disposeFields(d,f);
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var h="ready",g="qx.application",f="beforeunload",d="qx.core.Init",c="shutdown";
qx.Class.define(d,{statics:{getApplication:function(){return this.__cY||null;
},__cX:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var k=qx.core.Setting.get(g);
var l=qx.Class.getByName(k);

if(l){this.__cY=new l;
var j=new Date;
this.__cY.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-j)+"ms");
var j=new Date;
this.__cY.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-j)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+k);
}},__da:function(e){var b=this.__cY;

if(b){e.setReturnValue(b.close());
}},__db:function(){var i=this.__cY;

if(i){i.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,h,a.__cX,a);
qx.event.Registration.addListener(window,c,a.__db,a);
qx.event.Registration.addListener(window,f,a.__da,a);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var t="px",s="moveable",r="borderBottomWidth",q="list",p='#',o="mode",n="borderTopWidth",m="borderLeftWidth",k="a",j="div",g="borderRightWidth",h="demobrowser.demo.bom.Location_StandardMode";
qx.Class.define(h,{extend:qx.application.Native,members:{main:function(){arguments.callee.base.call(this);
var u=document.getElementById(q).getElementsByTagName(k);

for(var i=0,l=u.length;i<l;i++){u[i].onclick=demobrowser.demo.bom.Location_StandardMode.jump;
}}},statics:{jump:function(event){if(!event){event=window.event;
}event.returnValue=false;

if(event.preventDefault){event.preventDefault();
}function a(w,x){return parseInt(qx.bom.element.Style.get(w,x,qx.bom.element.Style.COMPUTED_MODE,false),10);
}var d=this.href;
var f=d.substr(d.indexOf(p)+1);
var b=document.getElementById(f);
var location=qx.bom.element.Location.get(b,document.getElementById(o).value);
var e=document.getElementById(s);
e.style.left=location.left+t;
e.style.top=location.top+t;

if(qx.bom.client.Feature.BORDER_BOX){e.style.width=(location.right-location.left)+t;
e.style.height=(location.bottom-location.top)+t;
}else{var c=qx.bom.element.Location;
e.style.width=(location.right-location.left-a(e,m)-a(e,g))+t;
e.style.height=(location.bottom-location.top-a(e,n)-a(e,r))+t;
}return false;
},randomize:function(){var v=document.body.getElementsByTagName(j);

for(var i=0,l=v.length;i<l;i++){if(v[i].id&&v[i].id!=s){v[i].style.margin=Math.round(Math.random()*10)+t;
v[i].style.padding=Math.round(Math.random()*10)+t;
v[i].style.borderWidth=Math.round(Math.random()*10)+t;
}}}}});
})();
(function(){var h="qx.event.type.Native",g="_native",f="_returnValue";
qx.Class.define(h,{extend:qx.event.type.Event,members:{init:function(a,b,c,d,e){arguments.callee.base.call(this,d,e);
this._target=b||qx.bom.Event.getTarget(a);
this._relatedTarget=c||qx.bom.Event.getRelatedTarget(a);

if(a.timeStamp){this._timeStamp=a.timeStamp;
}this._native=a;
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
}},destruct:function(){this._disposeFields(g,f);
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="X11",d="MacIntel",c="MacPPC";
qx.Bootstrap.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__de:function(){var o=navigator.platform;
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
}}},defer:function(a){a.__de();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",G=")",F="winxp",E="freebsd",D="sunos",C="SV1",B="|",A="nintendods",z="winnt4",y="wince",x="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="g",u="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(u,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__df:{"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":F,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":z,"Win 9x 4.90":x,"Windows CE":y,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":E,"NetBSD":m,"OpenBSD":k,"SunOS":D,"Symbian System":t,"Nitro":A,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__dg:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__df){J.push(I);
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
}else{this.NAME=this.__df[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(C)!==-1){this.SP2=true;
}}}}},defer:function(H){H.__dg();
}});
})();
(function(){var bj="borderTopWidth",bi="borderLeftWidth",bh="marginTop",bg="marginLeft",bf="scroll",be="qx.client",bd="border-box",bc="borderBottomWidth",bb="borderRightWidth",ba="auto",by="padding",bx="qx.bom.element.Location",bw="paddingLeft",bv="static",bu="marginBottom",bt="visible",bs="BODY",br="paddingBottom",bq="paddingTop",bp="marginRight",bn="position",bo="margin",bl="overflow",bm="paddingRight",bk="border";
qx.Class.define(bx,{statics:{__ho:function(l,m){return qx.bom.element.Style.get(l,m,qx.bom.element.Style.COMPUTED_MODE,false);
},__hp:function(x,y){return parseInt(qx.bom.element.Style.get(x,y,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hq:function(bz){var bC=0,top=0;
if(bz.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bB=qx.dom.Node.getWindow(bz);
bC-=qx.bom.Viewport.getScrollLeft(bB);
top-=qx.bom.Viewport.getScrollTop(bB);
}else{var bA=qx.dom.Node.getDocument(bz).body;
bz=bz.parentNode;
while(bz&&bz!=bA){bC+=bz.scrollLeft;
top+=bz.scrollTop;
bz=bz.parentNode;
}}return {left:bC,top:top};
},__hr:qx.core.Variant.select(be,{"mshtml":function(S){var U=qx.dom.Node.getDocument(S);
var T=U.body;
var V=0;
var top=0;
V-=T.clientLeft+U.documentElement.clientLeft;
top-=T.clientTop+U.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){V+=this.__hp(T,bi);
top+=this.__hp(T,bj);
}return {left:V,top:top};
},"webkit":function(a){var c=qx.dom.Node.getDocument(a);
var b=c.body;
var d=b.offsetLeft;
var top=b.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){d+=this.__hp(b,bi);
top+=this.__hp(b,bj);
}return {left:d,top:top};
},"gecko":function(K){var L=qx.dom.Node.getDocument(K).body;
var M=L.offsetLeft;
var top=L.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){M+=this.__hp(L,bg);
top+=this.__hp(L,bh);
}if(qx.bom.element.BoxSizing.get(L)!==bd){M+=this.__hp(L,bi);
top+=this.__hp(L,bj);
}return {left:M,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__hs:qx.core.Variant.select(be,{"mshtml|webkit":function(q){var s=qx.dom.Node.getDocument(q);
if(q.getBoundingClientRect){var t=q.getBoundingClientRect();
var u=t.left;
var top=t.top;
}else{var u=q.offsetLeft;
var top=q.offsetTop;
q=q.offsetParent;
var r=s.body;
while(q&&q!=r){u+=q.offsetLeft;
top+=q.offsetTop;
u+=this.__hp(q,bi);
top+=this.__hp(q,bj);
q=q.offsetParent;
}}return {left:u,top:top};
},"gecko":function(bJ){if(bJ.getBoundingClientRect){var bM=bJ.getBoundingClientRect();
var bN=Math.round(bM.left);
var top=Math.round(bM.top);
}else{var bN=0;
var top=0;
var bK=qx.dom.Node.getDocument(bJ).body;
var bL=qx.bom.element.BoxSizing;

if(bL.get(bJ)!==bd){bN-=this.__hp(bJ,bi);
top-=this.__hp(bJ,bj);
}
while(bJ&&bJ!==bK){bN+=bJ.offsetLeft;
top+=bJ.offsetTop;
if(bL.get(bJ)!==bd){bN+=this.__hp(bJ,bi);
top+=this.__hp(bJ,bj);
}if(bJ.parentNode&&this.__ho(bJ.parentNode,bl)!=bt){bN+=this.__hp(bJ.parentNode,bi);
top+=this.__hp(bJ.parentNode,bj);
}bJ=bJ.offsetParent;
}}return {left:bN,top:top};
},"default":function(n){var p=0;
var top=0;
var o=qx.dom.Node.getDocument(n).body;
while(n&&n!==o){p+=n.offsetLeft;
top+=n.offsetTop;
n=n.offsetParent;
}return {left:p,top:top};
}}),get:function(z,A){if(z.tagName==bs){var location=this.__ht(z);
var H=location.left;
var top=location.top;
}else{var B=this.__hr(z);
var G=this.__hs(z);
var scroll=this.__hq(z);
var H=G.left+B.left-scroll.left;
var top=G.top+B.top-scroll.top;
}var C=H+z.offsetWidth;
var D=top+z.offsetHeight;

if(A){if(A==by||A==bf){var E=qx.bom.element.Overflow.getX(z);

if(E==bf||E==ba){C+=z.scrollWidth-z.offsetWidth+this.__hp(z,bi)+this.__hp(z,bb);
}var F=qx.bom.element.Overflow.getY(z);

if(F==bf||F==ba){D+=z.scrollHeight-z.offsetHeight+this.__hp(z,bj)+this.__hp(z,bc);
}}
switch(A){case by:H+=this.__hp(z,bw);
top+=this.__hp(z,bq);
C-=this.__hp(z,bm);
D-=this.__hp(z,br);
case bf:H-=z.scrollLeft;
top-=z.scrollTop;
C-=z.scrollLeft;
D-=z.scrollTop;
case bk:H+=this.__hp(z,bi);
top+=this.__hp(z,bj);
C-=this.__hp(z,bb);
D-=this.__hp(z,bc);
break;
case bo:H-=this.__hp(z,bg);
top-=this.__hp(z,bh);
C+=this.__hp(z,bp);
D+=this.__hp(z,bu);
break;
}}return {left:H,top:top,right:C,bottom:D};
},__ht:qx.core.Variant.select(be,{"default":function(Q){var top=Q.offsetTop+this.__hp(Q,bh);
var R=Q.offsetLeft+this.__hp(Q,bg);
return {left:R,top:top};
},"mshtml":function(I){var top=I.offsetTop;
var J=I.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hp(I,bh);
J+=this.__hp(I,bg);
}return {left:J,top:top};
},"gecko":function(e){var top=e.offsetTop+this.__hp(e,bh)+this.__hp(e,bi);
var f=e.offsetLeft+this.__hp(e,bg)+this.__hp(e,bj);
return {left:f,top:top};
}}),getLeft:function(v,w){return this.get(v,w).left;
},getTop:function(bO,bP){return this.get(bO,bP).top;
},getRight:function(i,j){return this.get(i,j).right;
},getBottom:function(g,h){return this.get(g,h).bottom;
},getRelative:function(bD,bE,bF,bG){var bI=this.get(bD,bF);
var bH=this.get(bE,bG);
return {left:bI.left-bH.left,top:bI.top-bH.top,right:bI.right-bH.right,bottom:bI.bottom-bH.bottom};
},getPosition:function(k){return this.getRelative(k,this.getOffsetParent(k));
},getOffsetParent:function(N){var P=N.offsetParent||document.body;
var O=qx.bom.element.Style;

while(P&&(!/^body|html$/i.test(P.tagName)&&O.get(P,bn)===bv)){P=P.offsetParent;
}return P;
}}});
})();
(function(){var q="'>",p="[",o=", ",n="</span>",m="<span class='type-",l="</span> ",k="}",h="",g="]",f="{",N="map",M="<span class='object'>",L="]:",K="&gt;",J="<span class='object' title='Object instance with hash code: ",I="string",H="level-",G="0",F="&lt;",E="<span class='offset'>",x=":",y="qx.log.appender.Util",v="&amp;",w="&#39;",t="DIV",u="<span>",r="&quot;",s="<span class='type-key'>",z="</span>:<span class='type-",A="</span>: ",C=" ",B="]</span>: ",D="?";
qx.Class.define(y,{statics:{toHtml:function(Q){var bb=[];
var X,ba,S,U;
bb.push(E,this.formatOffset(Q.offset,6),l);

if(Q.object){var R=Q.win.qx.core.ObjectRegistry.fromHashCode(Q.object);

if(R){bb.push(J+R.$$hash+q,R.classname,p,R.$$hash,B);
}}else if(Q.clazz){bb.push(M+Q.clazz.classname,A);
}var T=Q.items;

for(var i=0,Y=T.length;i<Y;i++){X=T[i];
ba=X.text;

if(ba instanceof Array){var U=[];

for(var j=0,W=ba.length;j<W;j++){S=ba[j];

if(typeof S===I){U.push(u+this.escapeHTML(S)+n);
}else if(S.key){U.push(s+S.key+z+S.type+q+this.escapeHTML(S.text)+n);
}else{U.push(m+S.type+q+this.escapeHTML(S.text)+n);
}}bb.push(m+X.type+q);

if(X.type===N){bb.push(f,U.join(o),k);
}else{bb.push(p,U.join(o),g);
}bb.push(n);
}else{bb.push(m+X.type+q+this.escapeHTML(ba)+l);
}}var V=document.createElement(t);
V.innerHTML=bb.join(h);
V.className=H+Q.level;
return V;
},formatOffset:function(a,length){var d=a.toString();
var b=(length||6)-d.length;
var c=h;

for(var i=0;i<b;i++){c+=G;
}return c+d;
},escapeHTML:function(bc){return String(bc).replace(/[<>&"']/g,this.__eT);
},__eT:function(O){var P={"<":F,">":K,"&":v,"'":w,'"':r};
return P[O]||D;
},toText:function(e){return this.toTextArray(e).join(C);
},toTextArray:function(bd){var bl=[];
bl.push(this.formatOffset(bd.offset,6));

if(bd.object){var be=bd.win.qx.core.ObjectRegistry.fromHashCode(bd.object);

if(be){bl.push(be.classname+p+be.$$hash+L);
}}else if(bd.clazz){bl.push(bd.clazz.classname+x);
}var bf=bd.items;
var bi,bk;

for(var i=0,bj=bf.length;i<bj;i++){bi=bf[i];
bk=bi.text;

if(bk instanceof Array){var bg=[];

for(var j=0,bh=bk.length;j<bh;j++){bg.push(bk[j].text);
}
if(bi.type===N){bl.push(f,bg.join(o),k);
}else{bl.push(p,bg.join(o),g);
}}else{bl.push(bk);
}}return bl;
}}});
})();
(function(){var k="debug",j="log",i="qx.log.appender.Native",h="qx.client";
qx.Bootstrap.define(i,{statics:{process:qx.core.Variant.select(h,{"gecko":function(m){if(window.console&&console.firebug){console[m.level].call(console,qx.log.appender.Util.toText(m));
}},"mshtml":function(b){if(window.console){var d=b.level;

if(d==k){d=j;
}var c=qx.log.appender.Util.toText(b);
console[d](c);
}},"webkit":function(e){if(window.console){var g=e.level;

if(g==k){g=j;
}var f=qx.log.appender.Util.toText(e);
console[g](f);
}},"opera":function(a){}})},defer:function(l){if(window.console&&window.console.clear){console.clear();
}qx.log.Logger.register(l);
}});
})();
(function(){var c="qx.event.handler.UserAction",b="__dj",a="__dk";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(l){arguments.callee.base.call(this);
this.__dj=l;
this.__dk=l.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dj:null,__dk:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(d,e,f){}},destruct:function(){this._disposeFields(b,a);
},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var G="keydown",F="keypress",E="qx.client",D="NumLock",C="keyup",B="Enter",A="0",z="9",y="-",x="PageUp",bR="+",bQ="PrintScreen",bP="gecko",bO="A",bN="Z",bM="Left",bL="F5",bK="Down",bJ="Up",bI="F11",N="F6",O="useraction",L="F3",M="keyinput",J="Insert",K="F8",H="End",I="/",V="Delete",W="*",bl="F1",bh="F4",bt="Home",bo="F2",bE="F12",by="PageDown",bc="F7",bH="F9",bG="F10",bF="Right",ba="text",be="Escape",bg="webkit",bj="5",bm="3",bp="Meta",bv="7",bA="__do",P="CapsLock",Q="input",bd="Control",bs="Space",br="Tab",bq="Shift",bx="Pause",bw="__dn",bn="Unidentified",bu="qx.event.handler.Keyboard",u="mshtml",bz="mshtml|webkit",R="6",S="off",bi="Apps",v="4",w="Alt",Y="2",T="Scroll",U="1",X="8",bk="Win",bC="__dm",bB="__dl",bf="autoComplete",bD=",",bb="Backspace";
qx.Class.define(bu,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bS){arguments.callee.base.call(this);
this.__dl=bS;
this.__dm=bS.getWindow();
if(qx.core.Variant.isSet(E,bP)){this.__dn=this.__dm;
}else{this.__dn=this.__dm.document.documentElement;
}this.__do={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bT){if(this._identifierToKeyCodeMap[bT]){return true;
}
if(bT.length!=1){return false;
}
if(bT>=A&&bT<=z){return true;
}
if(bT>=bO&&bT<=bN){return true;
}
switch(bT){case bR:case y:case W:case I:return true;
default:return false;
}}},members:{__dp:null,__dl:null,__dm:null,__dn:null,__do:null,__dq:null,__dr:null,canHandleEvent:function(ce,cf){},registerEvent:function(cw,cx,cy){},unregisterEvent:function(cz,cA,cB){},_fireInputEvent:function(cG,cH){var cI=this.__dl.getHandler(qx.event.handler.Focus);
var cJ=cI.getActive();
if(!cJ||cJ.offsetWidth==0){cJ=cI.getFocus();
}if(cJ&&cJ.offsetWidth!=0){var event=qx.event.Registration.createEvent(M,qx.event.type.KeyInput,[cG,cJ,cH]);
this.__dl.dispatchEvent(cJ,event);
}if(this.__dm){qx.event.Registration.fireEvent(this.__dm,O,qx.event.type.Data,[M]);
}},_fireSequenceEvent:function(cl,cm,cn){var co=this.__dl.getHandler(qx.event.handler.Focus);
var cq=co.getActive();
if(!cq||cq.offsetWidth==0){cq=co.getFocus();
}if(!cq||cq.offsetWidth==0){cq=this.__dl.getWindow().document.body;
}var event=qx.event.Registration.createEvent(cm,qx.event.type.KeySequence,[cl,cq,cn]);
this.__dl.dispatchEvent(cq,event);
if(qx.core.Variant.isSet(E,bz)){if(cm==G&&event.getDefaultPrevented()){var cp=cl.keyCode;

if(!(this._isNonPrintableKeyCode(cp)||cp==8||cp==9)){this._fireSequenceEvent(cl,F,cn);
}}}if(this.__dm){qx.event.Registration.fireEvent(this.__dm,O,qx.event.type.Data,[cm]);
}},_initKeyObserver:function(){this.__dp=qx.lang.Function.listener(this.__ds,this);
this.__dr=qx.lang.Function.listener(this.__du,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dn,C,this.__dp);
Event.addNativeListener(this.__dn,G,this.__dp);
Event.addNativeListener(this.__dn,F,this.__dr);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dn,C,this.__dp);
Event.removeNativeListener(this.__dn,G,this.__dp);
Event.removeNativeListener(this.__dn,F,this.__dr);

for(var s in (this.__dq||{})){var r=this.__dq[s];
Event.removeNativeListener(r.target,F,r.callback);
}delete (this.__dq);
},__ds:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml":function(l){l=window.event||l;
var o=l.keyCode;
var m=0;
var n=l.type;
if(!(this.__do[o]==G&&n==G)){this._idealKeyHandler(o,m,n,l);
}if(n==G){if(this._isNonPrintableKeyCode(o)||o==8||o==9){this._idealKeyHandler(o,m,F,l);
}}this.__do[o]=n;
},"gecko":function(bW){var cb=this._keyCodeFix[bW.keyCode]||bW.keyCode;
var bY=0;
var ca=bW.type;
if(qx.bom.client.Platform.WIN){var bX=cb?this._keyCodeToIdentifier(cb):this._charCodeToIdentifier(bY);

if(!(this.__do[bX]==G&&ca==G)){this._idealKeyHandler(cb,bY,ca,bW);
}this.__do[bX]=ca;
}else{this._idealKeyHandler(cb,bY,ca,bW);
}this.__dt(bW.target,ca,cb);
},"webkit":function(cs){var cv=0;
var ct=0;
var cu=cs.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cu==C||cu==G){cv=this._charCode2KeyCode[cs.charCode]||cs.keyCode;
}else{if(this._charCode2KeyCode[cs.charCode]){cv=this._charCode2KeyCode[cs.charCode];
}else{ct=cs.charCode;
}}this._idealKeyHandler(cv,ct,cu,cs);
}else{cv=cs.keyCode;
if(!(this.__do[cv]==G&&cu==G)){this._idealKeyHandler(cv,ct,cu,cs);
}if(cu==G){if(this._isNonPrintableKeyCode(cv)||cv==8||cv==9){this._idealKeyHandler(cv,ct,F,cs);
}}this.__do[cv]=cu;
}},"opera":function(cg){this._idealKeyHandler(cg.keyCode,0,cg.type,cg);
}})),__dt:qx.core.Variant.select(E,{"gecko":function(a,b,c){if(b===G&&(c==33||c==34||c==38||c==40)&&a.type==ba&&a.tagName.toLowerCase()===Q&&a.getAttribute(bf)!==S){if(!this.__dq){this.__dq={};
}var e=qx.core.ObjectRegistry.toHashCode(a);

if(this.__dq[e]){return;
}var self=this;
this.__dq[e]={target:a,callback:function(f){qx.bom.Event.stopPropagation(f);
self.__du(f);
}};
var d=qx.event.GlobalError.observeMethod(this.__dq[e].callback);
qx.bom.Event.addNativeListener(a,F,d);
}},"default":null}),__du:qx.event.GlobalError.observeMethod(qx.core.Variant.select(E,{"mshtml":function(q){q=window.event||q;

if(this._charCode2KeyCode[q.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[q.keyCode],0,q.type,q);
}else{this._idealKeyHandler(0,q.keyCode,q.type,q);
}},"gecko":function(cC){var cF=this._keyCodeFix[cC.keyCode]||cC.keyCode;
var cD=cC.charCode;
var cE=cC.type;
this._idealKeyHandler(cF,cD,cE,cC);
},"webkit":function(ch){if(qx.bom.client.Engine.VERSION<525.13){var ck=0;
var ci=0;
var cj=ch.type;

if(cj==C||cj==G){ck=this._charCode2KeyCode[ch.charCode]||ch.keyCode;
}else{if(this._charCode2KeyCode[ch.charCode]){ck=this._charCode2KeyCode[ch.charCode];
}else{ci=ch.charCode;
}}this._idealKeyHandler(ck,ci,cj,ch);
}else{if(this._charCode2KeyCode[ch.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[ch.keyCode],0,ch.type,ch);
}else{this._idealKeyHandler(0,ch.keyCode,ch.type,ch);
}}},"opera":function(bU){if(this._keyCodeToIdentifierMap[bU.keyCode]){this._idealKeyHandler(bU.keyCode,0,bU.type,bU);
}else{this._idealKeyHandler(0,bU.keyCode,bU.type,bU);
}}})),_idealKeyHandler:function(g,h,i,j){if(!g&&!h){return;
}var k;
if(g){k=this._keyCodeToIdentifier(g);
this._fireSequenceEvent(j,i,k);
}else{k=this._charCodeToIdentifier(h);
this._fireSequenceEvent(j,F,k);
this._fireInputEvent(j,h);
}},_specialCharCodeMap:{8:bb,9:br,13:B,27:be,32:bs},_keyCodeToIdentifierMap:{16:bq,17:bd,18:w,20:P,224:bp,37:bM,38:bJ,39:bF,40:bK,33:x,34:by,35:H,36:bt,45:J,46:V,112:bl,113:bo,114:L,115:bh,116:bL,117:N,118:bc,119:K,120:bH,121:bG,122:bI,123:bE,144:D,44:bQ,145:T,19:bx,91:bk,93:bi},_numpadToCharCode:{96:A.charCodeAt(0),97:U.charCodeAt(0),98:Y.charCodeAt(0),99:bm.charCodeAt(0),100:v.charCodeAt(0),101:bj.charCodeAt(0),102:R.charCodeAt(0),103:bv.charCodeAt(0),104:X.charCodeAt(0),105:z.charCodeAt(0),106:W.charCodeAt(0),107:bR.charCodeAt(0),109:y.charCodeAt(0),110:bD.charCodeAt(0),111:I.charCodeAt(0)},_charCodeA:bO.charCodeAt(0),_charCodeZ:bN.charCodeAt(0),_charCode0:A.charCodeAt(0),_charCode9:z.charCodeAt(0),_isNonPrintableKeyCode:function(t){return this._keyCodeToIdentifierMap[t]?true:false;
},_isIdentifiableKeyCode:function(cr){if(cr>=this._charCodeA&&cr<=this._charCodeZ){return true;
}if(cr>=this._charCode0&&cr<=this._charCode9){return true;
}if(this._specialCharCodeMap[cr]){return true;
}if(this._numpadToCharCode[cr]){return true;
}if(this._isNonPrintableKeyCode(cr)){return true;
}return false;
},_keyCodeToIdentifier:function(cc){if(this._isIdentifiableKeyCode(cc)){var cd=this._numpadToCharCode[cc];

if(cd){return String.fromCharCode(cd);
}return (this._keyCodeToIdentifierMap[cc]||this._specialCharCodeMap[cc]||String.fromCharCode(cc));
}else{return bn;
}},_charCodeToIdentifier:function(bV){return this._specialCharCodeMap[bV]||String.fromCharCode(bV).toUpperCase();
},_identifierToKeyCode:function(p){return qx.event.handler.Keyboard._identifierToKeyCodeMap[p]||p.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this._disposeFields(bB,bC,bw,bA);
},defer:function(cK,cL,cM){qx.event.Registration.addHandler(cK);
if(!cK._identifierToKeyCodeMap){cK._identifierToKeyCodeMap={};

for(var cN in cL._keyCodeToIdentifierMap){cK._identifierToKeyCodeMap[cL._keyCodeToIdentifierMap[cN]]=parseInt(cN,10);
}
for(var cN in cL._specialCharCodeMap){cK._identifierToKeyCodeMap[cL._specialCharCodeMap[cN]]=parseInt(cN,10);
}}
if(qx.core.Variant.isSet(E,u)){cL._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(E,bP)){cL._keyCodeFix={12:cL._identifierToKeyCode(D)};
}else if(qx.core.Variant.isSet(E,bg)){if(qx.bom.client.Engine.VERSION<525.13){cL._charCode2KeyCode={63289:cL._identifierToKeyCode(D),63276:cL._identifierToKeyCode(x),63277:cL._identifierToKeyCode(by),63275:cL._identifierToKeyCode(H),63273:cL._identifierToKeyCode(bt),63234:cL._identifierToKeyCode(bM),63232:cL._identifierToKeyCode(bJ),63235:cL._identifierToKeyCode(bF),63233:cL._identifierToKeyCode(bK),63272:cL._identifierToKeyCode(V),63302:cL._identifierToKeyCode(J),63236:cL._identifierToKeyCode(bl),63237:cL._identifierToKeyCode(bo),63238:cL._identifierToKeyCode(L),63239:cL._identifierToKeyCode(bh),63240:cL._identifierToKeyCode(bL),63241:cL._identifierToKeyCode(N),63242:cL._identifierToKeyCode(bc),63243:cL._identifierToKeyCode(K),63244:cL._identifierToKeyCode(bH),63245:cL._identifierToKeyCode(bG),63246:cL._identifierToKeyCode(bI),63247:cL._identifierToKeyCode(bE),63248:cL._identifierToKeyCode(bQ),3:cL._identifierToKeyCode(B),12:cL._identifierToKeyCode(D),13:cL._identifierToKeyCode(B)};
}else{cL._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var n="",m='</div>',l="Up",k="none",j="keypress",i='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',h="Enter",g="px",f='.qxconsole .messages .user-result{background:white}',d='.qxconsole .messages .level-error{background:#FFE2D5}',Y="div",X="user-command",W='<div class="command">',V='.qxconsole .command input:focus{outline:none;}',U='.qxconsole .messages .type-key{color:#565656;font-style:italic}',T='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',S='.qxconsole .messages div{padding:0px 4px;}',R='.qxconsole .messages .level-debug{background:white}',Q='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',P="DIV",u='.qxconsole .messages .level-user{background:#E3EFE9}',v='<div class="qxconsole">',s="D",t='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',q='.qxconsole .messages .type-string{color:black;font-weight:normal;}',r='.qxconsole .control a{text-decoration:none;color:black;}',o='<div class="messages">',p='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',w='<input type="text"/>',x="clear",E='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',C='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',I='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',G='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',L='.qxconsole .messages .user-command{color:blue}',K="F7",z="qx.log.appender.Console",O='.qxconsole .messages .level-info{background:#DEEDFA}',N="block",M='.qxconsole .messages .level-warn{background:#FFF7D5}',y='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',A='.qxconsole .messages .user-error{background:#FFE2D5}',B='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',D='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',F=">>> ",H="Down",J='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(z,{statics:{init:function(){var bb=[I,B,r,i,S,L,f,A,R,O,M,d,u,q,J,p,C,t,U,Q,T,y,G,E,V];
qx.bom.Stylesheet.createElement(bb.join(n));
var bd=[v,D,o,m,W,w,m,m];
var be=document.createElement(P);
be.innerHTML=bd.join(n);
var bc=be.firstChild;
document.body.appendChild(be.firstChild);
this.__eU=bc;
this.__eV=bc.childNodes[1];
this.__eW=bc.childNodes[2].firstChild;
this.__fc();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,j,this.__fd,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__eV.innerHTML=n;
},process:function(ba){this.__eV.appendChild(qx.log.appender.Util.toHtml(ba));
this.__eX();
},__eX:function(){this.__eV.scrollTop=this.__eV.scrollHeight;
},__eY:true,toggle:function(){if(!this.__eU){this.init();
}else if(this.__eU.style.display==k){this.show();
}else{this.__eU.style.display=k;
}},show:function(){if(!this.__eU){this.init();
}else{this.__eU.style.display=N;
this.__eV.scrollTop=this.__eV.scrollHeight;
}},__fa:[],execute:function(){var bi=this.__eW.value;

if(bi==n){return;
}
if(bi==x){return this.clear();
}var bg=document.createElement(Y);
bg.innerHTML=qx.log.appender.Util.escapeHTML(F+bi);
bg.className=X;
this.__fa.push(bi);
this.__fb=this.__fa.length;
this.__eV.appendChild(bg);
this.__eX();

try{var bh=window.eval(bi);
}catch(bf){qx.log.Logger.error(bf);
}
if(bh!==undefined){qx.log.Logger.debug(bh);
}},__fc:function(e){this.__eV.style.height=(this.__eU.clientHeight-this.__eU.firstChild.offsetHeight-this.__eU.lastChild.offsetHeight)+g;
},__fd:function(e){var b=e.getKeyIdentifier();
if((b==K)||(b==s&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__eU){return;
}if(!qx.dom.Hierarchy.contains(this.__eU,e.getTarget())){return;
}if(b==h&&this.__eW.value!=n){this.execute();
this.__eW.value=n;
}if(b==l||b==H){this.__fb+=b==l?-1:1;
this.__fb=Math.min(Math.max(0,this.__fb),this.__fa.length);
var a=this.__fa[this.__fb];
this.__eW.value=a||n;
this.__eW.select();
}}},defer:function(c){qx.event.Registration.addListener(document.documentElement,j,c.__fd,c);
}});
})();
(function(){var bo="qx.client",bn="blur",bm="focus",bl="mousedown",bk="on",bj="mouseup",bi="DOMFocusOut",bh="DOMFocusIn",bg="selectstart",bf="onmousedown",bP="onfocusout",bO="onfocusin",bN="onmouseup",bM="onselectstart",bL="draggesture",bK="_document",bJ="gecko",bI="_root",bH="qx.event.handler.Focus",bG="_applyFocus",bv="_window",bw="deactivate",bt="qxIsRootPage",bu="_applyActive",br="input",bs="focusin",bp="qxSelectable",bq="tabIndex",bx="off",by="_body",bB="activate",bA="1",bD="focusout",bC="__mouseActive",bF="_manager",bE="qxKeepFocus",bz="qxKeepActive";
qx.Class.define(bH,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){arguments.callee.base.call(this);
this._manager=q;
this._window=q.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bu,nullable:true},focus:{apply:bG,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__ei:null,__ej:null,__ek:null,__el:null,__em:null,__en:null,__eo:null,__ep:null,__eq:null,__er:null,canHandleEvent:function(bT,bU){},registerEvent:function(h,i,j){},unregisterEvent:function(A,B,C){},focus:function(D){try{D.focus();
}catch(k){}this.setFocus(D);
this.setActive(D);
},activate:function(G){this.setActive(G);
},blur:function(V){try{V.blur();
}catch(f){}
if(this.getActive()===V){this.resetActive();
}
if(this.getFocus()===V){this.resetFocus();
}},deactivate:function(bc){if(this.getActive()===bc){this.resetActive();
}},tryActivate:function(H){var I=this.__eF(H);

if(I){this.setActive(I);
}},__es:function(L,M,N,O){var Q=qx.event.Registration;
var P=Q.createEvent(N,qx.event.type.Focus,[L,M,O]);
Q.dispatchEvent(L,P);
},_windowFocused:true,__et:function(){if(this._windowFocused){this._windowFocused=false;
this.__es(this._window,null,bn,false);
}},__eu:function(){if(!this._windowFocused){this._windowFocused=true;
this.__es(this._window,null,bm,false);
}},_initObserver:qx.core.Variant.select(bo,{"gecko":function(){this.__ei=qx.lang.Function.listener(this.__eA,this);
this.__ej=qx.lang.Function.listener(this.__eB,this);
this.__ek=qx.lang.Function.listener(this.__ez,this);
this.__el=qx.lang.Function.listener(this.__ey,this);
this.__em=qx.lang.Function.listener(this.__ev,this);
this._document.addEventListener(bl,this.__ei,true);
this._document.addEventListener(bj,this.__ej,true);
this._window.addEventListener(bm,this.__ek,true);
this._window.addEventListener(bn,this.__el,true);
this._window.addEventListener(bL,this.__em,true);
},"mshtml":function(){this.__ei=qx.lang.Function.listener(this.__eA,this);
this.__ej=qx.lang.Function.listener(this.__eB,this);
this.__eo=qx.lang.Function.listener(this.__ew,this);
this.__ep=qx.lang.Function.listener(this.__ex,this);
this.__en=qx.lang.Function.listener(this.__eC,this);
this._document.attachEvent(bf,this.__ei);
this._document.attachEvent(bN,this.__ej);
this._document.attachEvent(bO,this.__eo);
this._document.attachEvent(bP,this.__ep);
this._document.attachEvent(bM,this.__en);
},"webkit":function(){this.__ei=qx.lang.Function.listener(this.__eA,this);
this.__ej=qx.lang.Function.listener(this.__eB,this);
this.__ep=qx.lang.Function.listener(this.__ex,this);
this.__ek=qx.lang.Function.listener(this.__ez,this);
this.__el=qx.lang.Function.listener(this.__ey,this);
this.__en=qx.lang.Function.listener(this.__eC,this);
this._document.addEventListener(bl,this.__ei,true);
this._document.addEventListener(bj,this.__ej,true);
this._document.addEventListener(bg,this.__en,false);
this._window.addEventListener(bi,this.__ep,true);
this._window.addEventListener(bm,this.__ek,true);
this._window.addEventListener(bn,this.__el,true);
},"opera":function(){this.__ei=qx.lang.Function.listener(this.__eA,this);
this.__ej=qx.lang.Function.listener(this.__eB,this);
this.__eo=qx.lang.Function.listener(this.__ew,this);
this.__ep=qx.lang.Function.listener(this.__ex,this);
this._document.addEventListener(bl,this.__ei,true);
this._document.addEventListener(bj,this.__ej,true);
this._window.addEventListener(bh,this.__eo,true);
this._window.addEventListener(bi,this.__ep,true);
}}),_stopObserver:qx.core.Variant.select(bo,{"gecko":function(){this._document.removeEventListener(bl,this.__ei,true);
this._document.removeEventListener(bj,this.__ej,true);
this._window.removeEventListener(bm,this.__ek,true);
this._window.removeEventListener(bn,this.__el,true);
this._window.removeEventListener(bL,this.__em,true);
},"mshtml":function(){this._document.detachEvent(bf,this.__ei);
this._document.detachEvent(bN,this.__ej);
this._document.detachEvent(bO,this.__eo);
this._document.detachEvent(bP,this.__ep);
this._document.detachEvent(bM,this.__en);
},"webkit":function(){this._document.removeEventListener(bl,this.__ei,true);
this._document.removeEventListener(bg,this.__en,false);
this._window.removeEventListener(bh,this.__eo,true);
this._window.removeEventListener(bi,this.__ep,true);
this._window.removeEventListener(bm,this.__ek,true);
this._window.removeEventListener(bn,this.__el,true);
},"opera":function(){this._document.removeEventListener(bl,this.__ei,true);
this._window.removeEventListener(bh,this.__eo,true);
this._window.removeEventListener(bi,this.__ep,true);
this._window.removeEventListener(bm,this.__ek,true);
this._window.removeEventListener(bn,this.__el,true);
}}),__ev:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bo,{"gecko":function(e){if(!this.__eG(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ew:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bo,{"mshtml":function(e){this.__eu();
var X=e.srcElement;
var W=this.__eE(X);

if(W){this.setFocus(W);
}this.tryActivate(X);
},"opera":function(e){var bQ=e.target;

if(bQ==this._document||bQ==this._window){this.__eu();

if(this.__eq){this.setFocus(this.__eq);
delete this.__eq;
}
if(this.__er){this.setActive(this.__er);
delete this.__er;
}}else{this.setFocus(bQ);
this.tryActivate(bQ);
if(!this.__eG(bQ)){bQ.selectionStart=0;
bQ.selectionEnd=0;
}}},"default":null})),__ex:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bo,{"mshtml":function(e){if(!e.toElement){this.__et();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var Y=e.target;

if(Y===this.getFocus()){this.resetFocus();
}
if(Y===this.getActive()){this.resetActive();
}},"opera":function(e){var ba=e.target;

if(ba==this._document){this.__et();
this.__eq=this.getFocus();
this.__er=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(ba===this.getFocus()){this.resetFocus();
}
if(ba===this.getActive()){this.resetActive();
}}},"default":null})),__ey:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bo,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__et();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__et();
this.__eq=this.getFocus();
this.__er=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__ez:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bo,{"gecko":function(e){var U=e.target;

if(U===this._window||U===this._document){this.__eu();
U=this._body;
}this.setFocus(U);
this.tryActivate(U);
},"webkit":function(e){var bb=e.target;

if(bb===this._window||bb===this._document){this.__eu();

if(this.__eq){this.setFocus(this.__eq);
delete this.__eq;
}
if(this.__er){this.setActive(this.__er);
delete this.__er;
}}else{this.setFocus(bb);
this.tryActivate(bb);
}},"default":null})),__eA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bo,{"gecko":function(e){var t=e.target;
var r=this.__eE(t);
var s=this.__eG(t);

if(!s){qx.bom.Event.preventDefault(e);
if(r){if(qx.core.Variant.isSet(bo,bJ)){var u=qx.bom.element.Attribute.get(r,bt)===bA;

if(!u){r.focus();
}}else{r.focus();
}}}else if(!r){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var F=e.srcElement;
var E=this.__eE(F);

if(E){if(!this.__eG(F)){F.unselectable=bk;
document.selection.empty();
E.focus();
}}else{qx.bom.Event.preventDefault(e);
if(!this.__eG(F)){F.unselectable=bk;
}}},"webkit":function(e){var m=e.target;
var l=this.__eE(m);

if(l){this.setFocus(l);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var T=e.target;
var R=this.__eE(T);

if(!this.__eG(T)){qx.bom.Event.preventDefault(e);
if(R){var S=this.getFocus();

if(S&&S.selectionEnd){S.selectionStart=0;
S.selectionEnd=0;
S.blur();
}if(R){this.setFocus(R);
}}}else if(R){this.setFocus(R);
}},"default":null})),__eB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bo,{"mshtml":function(e){var bd=e.srcElement;

if(bd.unselectable){bd.unselectable=bx;
}var be=this.getFocus();

if(be&&bd!=be&&be.nodeName.toLowerCase()===br){bd=be;
}this.tryActivate(bd);
},"gecko":function(e){var a=e.target;

while(a&&a.offsetWidth===undefined){a=a.parentNode;
}
if(a){this.tryActivate(a);
}},"webkit|opera":function(e){this.tryActivate(e.target);
},"default":null})),__eC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bo,{"mshtml|webkit":function(e){var n=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__eG(n)){qx.bom.Event.preventDefault(e);
}},"default":null})),__eD:function(v){var w=qx.bom.element.Attribute.get(v,bq);

if(w>=1){return true;
}var x=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(w>=0&&x[v.tagName]){return true;
}return false;
},__eE:function(g){while(g&&g.nodeType===1){if(g.getAttribute(bE)==bk){return null;
}
if(this.__eD(g)){return g;
}g=g.parentNode;
}return this._body;
},__eF:function(y){var z=y;

while(y&&y.nodeType===1){if(y.getAttribute(bz)==bk){return null;
}y=y.parentNode;
}return z;
},__eG:function(o){while(o&&o.nodeType===1){var p=o.getAttribute(bp);

if(p!=null){return p===bk;
}o=o.parentNode;
}return true;
},_applyActive:function(J,K){if(K){this.__es(K,J,bw,true);
}
if(J){this.__es(J,K,bB,true);
}},_applyFocus:function(bR,bS){if(bS){this.__es(bS,bR,bD,true);
}
if(bR){this.__es(bR,bS,bs,true);
}if(bS){this.__es(bS,bR,bn,false);
}
if(bR){this.__es(bR,bS,bm,false);
}}},destruct:function(){this._stopObserver();
this._disposeFields(bF,bv,bK,bI,by,bC);
},defer:function(b){qx.event.Registration.addHandler(b);
var c=b.FOCUSABLE_ELEMENTS;

for(var d in c){c[d.toUpperCase()]=1;
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(x){this._manager=x;
},members:{_getParent:function(e){throw new Error("Missing implementation");
},canDispatchEvent:function(c,event,d){return event.getBubbles();
},dispatchEvent:function(f,event,g){var parent=f;
var r=this._manager;
var o,v;
var m;
var q,t;
var s;
var u=[];
o=r.getListeners(f,g,true);
v=r.getListeners(f,g,false);

if(o){u.push(o);
}
if(v){u.push(v);
}var parent=this._getParent(f);
var k=[];
var h=[];
var l=[];
var p=[];
while(parent!=null){o=r.getListeners(parent,g,true);

if(o){l.push(o);
p.push(parent);
}v=r.getListeners(parent,g,false);

if(v){k.push(v);
h.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=l.length-1;i>=0;i--){s=p[i];
event.setCurrentTarget(s);
m=l[i];

for(var j=0,n=m.length;j<n;j++){q=m[j];
t=q.context||s;
q.handler.call(t,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(f);

for(var i=0,w=u.length;i<w;i++){m=u[i];

for(var j=0,n=m.length;j<n;j++){q=m[j];
t=q.context||f;
q.handler.call(t,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,w=k.length;i<w;i++){s=h[i];
event.setCurrentTarget(s);
m=k[i];

for(var j=0,n=m.length;j<n;j++){q=m[j];
t=q.context||s;
q.handler.call(t,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="qx.client",h="readOnly",g="accessKey",f="qx.bom.element.Attribute",e="rowSpan",d="vAlign",c="className",b="textContent",a="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",o="dateTime",m="maxLength",n="mshtml",k="cellPadding",l="colSpan";
qx.Class.define(f,{statics:{__eH:{names:{"class":c,"for":x,html:q,text:qx.core.Variant.isSet(i,n)?r:b,colspan:l,rowspan:e,valign:d,datetime:o,accesskey:g,tabindex:p,maxlength:m,readonly:h,longdesc:w,cellpadding:k,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,maxLength:10000000,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(I){var J=[];
var L=this.__eH.runtime;

for(var K in I){if(!L[K]){J.push(K,t,I[K],a);
}}return J.join(j);
},get:qx.core.Variant.select(i,{"mshtml":function(B,name){var D=this.__eH;
var C;
name=D.names[name]||name;
if(D.original[name]){C=B.getAttribute(name,2);
}else if(D.property[name]){if(D.propertyDefault[name]&&C==D.propertyDefault[name]){return null;
}C=B[name];
}else{C=B.getAttribute(name);
}if(D.bools[name]){return !!C;
}return C;
},"default":function(E,name){var G=this.__eH;
var F;
name=G.names[name]||name;
if(G.property[name]){if(G.propertyDefault[name]&&F==G.propertyDefault[name]){return null;
}F=E[name];

if(F==null){F=E.getAttribute(name);
}}else{F=E.getAttribute(name);
}if(G.bools[name]){return !!F;
}return F;
}}),set:function(y,name,z){var A=this.__eH;
name=A.names[name]||name;
if(A.bools[name]){z=!!z;
}if(A.property[name]){if(z==null){z=A.propertyDefault[name];

if(z===undefined){z=null;
}}y[name]=z;
}else{if(z===true){y.setAttribute(name,name);
}else if(z===false||z===null){y.removeAttribute(name);
}else{y.setAttribute(name,z);
}}},reset:function(H,name){this.set(H,name,null);
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{getModifiers:function(){var c=0;
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._charCode=this._charCode;
return f;
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
(function(){var J="qx.client",I="head",H="text/css",G="stylesheet",F="}",E='@import "',D="{",C='";',B="qx.bom.Stylesheet",A="link",z="style";
qx.Class.define(B,{statics:{includeFile:function(s,t){if(!t){t=document;
}var u=t.createElement(A);
u.type=H;
u.rel=G;
u.href=qx.util.ResourceManager.getInstance().toUri(s);
var v=t.getElementsByTagName(I)[0];
v.appendChild(u);
},createElement:qx.core.Variant.select(J,{"mshtml":function(W){var X=document.createStyleSheet();

if(W){X.cssText=W;
}return X;
},"default":function(bc){var bd=document.createElement(z);
bd.type=H;

if(bc){bd.appendChild(document.createTextNode(bc));
}document.getElementsByTagName(I)[0].appendChild(bd);
return bd.sheet;
}}),addRule:qx.core.Variant.select(J,{"mshtml":function(T,U,V){T.addRule(U,V);
},"default":function(be,bf,bg){be.insertRule(bf+D+bg+F,be.cssRules.length);
}}),removeRule:qx.core.Variant.select(J,{"mshtml":function(j,k){var l=j.rules;
var m=l.length;

for(var i=m-1;i>=0;--i){if(l[i].selectorText==k){j.removeRule(i);
}}},"default":function(a,b){var c=a.cssRules;
var d=c.length;

for(var i=d-1;i>=0;--i){if(c[i].selectorText==b){a.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(J,{"mshtml":function(Q){var R=Q.rules;
var S=R.length;

for(var i=S-1;i>=0;i--){Q.removeRule(i);
}},"default":function(n){var o=n.cssRules;
var p=o.length;

for(var i=p-1;i>=0;i--){n.deleteRule(i);
}}}),addImport:qx.core.Variant.select(J,{"mshtml":function(q,r){q.addImport(r);
},"default":function(O,P){O.insertRule(E+P+C,O.cssRules.length);
}}),removeImport:qx.core.Variant.select(J,{"mshtml":function(e,f){var g=e.imports;
var h=g.length;

for(var i=h-1;i>=0;i--){if(g[i].href==f){e.removeImport(i);
}}},"default":function(K,L){var M=K.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){if(M[i].href==L){K.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(J,{"mshtml":function(w){var x=w.imports;
var y=x.length;

for(var i=y-1;i>=0;i--){w.removeImport(i);
}},"default":function(Y){var ba=Y.cssRules;
var bb=ba.length;

for(var i=bb-1;i>=0;i--){if(ba[i].type==ba[i].IMPORT_RULE){Y.deleteRule(i);
}}}})}});
})();
(function(){var r="qx.client",q="qx.dom.Hierarchy",p="previousSibling",o="*",n="nextSibling",m="parentNode";
qx.Class.define(q,{statics:{getNodeIndex:function(a){var b=0;

while(a&&(a=a.previousSibling)){b++;
}return b;
},getElementIndex:function(e){var f=0;
var g=qx.dom.Node.ELEMENT;

while(e&&(e=e.previousSibling)){if(e.nodeType==g){f++;
}}return f;
},getNextElementSibling:function(i){while(i&&(i=i.nextSibling)&&!qx.dom.Node.isElement(i)){continue;
}return i||null;
},getPreviousElementSibling:function(A){while(A&&(A=A.previousSibling)&&!qx.dom.Node.isElement(A)){continue;
}return A||null;
},contains:qx.core.Variant.select(r,{"webkit|mshtml|opera":function(B,C){if(qx.dom.Node.isDocument(B)){var D=qx.dom.Node.getDocument(C);
return B&&D==B;
}else if(qx.dom.Node.isDocument(C)){return false;
}else{return B.contains(C);
}},"gecko":function(c,d){return !!(c.compareDocumentPosition(d)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:function(E){if(!E.offsetParent){return false;
}var F=E.ownerDocument||E.document;
if(F.body.contains){return F.body.contains(E);
}if(F.compareDocumentPosition){return !!(F.compareDocumentPosition(E)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(G,H){return this.contains(H,G);
},getCommonParent:qx.core.Variant.select(r,{"mshtml|opera":function(I,J){if(I===J){return I;
}
while(I&&qx.dom.Node.isElement(I)){if(I.contains(J)){return I;
}I=I.parentNode;
}return null;
},"default":function(P,Q){if(P===Q){return P;
}var R={};
var U=qx.core.ObjectRegistry;
var T,S;

while(P||Q){if(P){T=U.toHashCode(P);

if(R[T]){return R[T];
}R[T]=P;
P=P.parentNode;
}
if(Q){S=U.toHashCode(Q);

if(R[S]){return R[S];
}R[S]=Q;
Q=Q.parentNode;
}}return null;
}}),getAncestors:function(O){return this._recursivelyCollect(O,m);
},getChildElements:function(M){M=M.firstChild;

if(!M){return [];
}var N=this.getNextSiblings(M);

if(M.nodeType===1){N.unshift(M);
}return N;
},getDescendants:function(V){return qx.lang.Array.fromCollection(V.getElementsByTagName(o));
},getFirstDescendant:function(L){L=L.firstChild;

while(L&&L.nodeType!=1){L=L.nextSibling;
}return L;
},getLastDescendant:function(K){K=K.lastChild;

while(K&&K.nodeType!=1){K=K.previousSibling;
}return K;
},getPreviousSiblings:function(h){return this._recursivelyCollect(h,p);
},getNextSiblings:function(w){return this._recursivelyCollect(w,n);
},_recursivelyCollect:function(x,y){var z=[];

while(x=x[y]){if(x.nodeType==1){z.push(x);
}}return z;
},getSiblings:function(u){return this.getPreviousSiblings(u).reverse().concat(this.getNextSiblings(u));
},isEmpty:function(v){v=v.firstChild;

while(v){if(v.nodeType===qx.dom.Node.ELEMENT||v.nodeType===qx.dom.Node.TEXT){return false;
}v=v.nextSibling;
}return true;
},cleanWhitespace:function(j){var k=j.firstChild;

while(k){var l=k.nextSibling;

if(k.nodeType==3&&!/\S/.test(k.nodeValue)){j.removeChild(k);
}k=l;
}}}});
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
(function(){var cs="window",cr="",cq="childNodes",cp="nodeName",co="nodeType",cn="document",cm="function",cl="firstChild",ck="qx.client",cj="external",bA="location",bz="[native code]",by="lastChild",bx="scrollY",bw="scrollWidth",bv="defaultView",bu="closed",bt="content",bs="qx",br="</td><td>",cz="filters",cA="locationbar",cx="screenX",cy="previousSibling",cv="scrollX",cw="Global namespace is polluted by the following unknown objects:\n\n",ct="doctype",cu="parent",cB="qx.dev.Pollution",cC="outerText",bY="applets",bX="parentElement",cb="designMode",ca="cookie",cd="fullScreen",cc="links",cf="pageXOffset",ce="frames",bW="documentElement",bV="screenY",h="statusbar",j="history",k="sun",l="pkcs11",m="java",n="style",o="innerWidth",p="plugins",q="implementation",r="clientWidth",cG="compatMode",cF="length",cE="textContent",cD="controllers",cK="netscape",cJ="self",cI="domConfig",cH="attributes",cM="clientHeight",cL="outerHeight",Q="parentNode",R="innerHeight",O="title",P="ownerDocument",U="<table>",V="globalStorage",S="Global namespace is not polluted by any unknown objects.",T="toolbar",M="outerHTML",N="crypto",z="forms",y="scrollbars",B="frameElement",A="Components",v="body",u="clientInformation",x="offscreenBuffering",w="embeds",t="localName",s="scrollTop",bb="isMultiLine",bc="scrollLeft",bd="images",be="event",W="offsetHeight",X="scrollMaxY",Y="sessionStorage",ba="screen",bf="name",bg="offsetLeft",J="console",I="XMLHttpRequest",H="mshtml",G="nextSibling",F="innerText",E="menubar",D="scopeName",C="top",L="outerWidth",K=": ",bh="\n",bi="status",bj="contentEditable",bk="anchors",bl="</table>",bm="<tr style='vertical-align:top'><td>",bn="scrollMaxX",bo="screenTop",bp="defaultStatus",bq="styleSheets",bE="className",bD="personalbar",bC="</td></tr>",bB="currentStyle",bI="directories",bH="navigator",bG="pageYOffset",bF="screenLeft",bK="opener",bJ="scrollHeight",bR="__firebug__",bS="Option",bP="innerHTML",bQ="tabIndex",bN="offsetTop",bO="[function]",bL="clipboardData",bM="Packages",bT="tagName",bU="offsetWidth",ch="mshtml|opera",cg="undefined",ci="Image";
qx.Class.define(cB,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bs,m,k,bM,bR,A,cD,Y,V,J,be,x,bL,u,bS,ci,cj,bo,bF,cF,cs,cn,bA,bH,cK,cu,ce,C,y,bf,cv,bx,cJ,ba,j,bt,E,T,cA,bD,h,bI,bu,N,l,bK,bi,bp,o,R,L,cL,cx,bV,cf,bG,bn,X,cd,B,I],"document":[cI,bA,cG,q,bv,O,v,bq,bW,cp,co,cl,by,ct,bd,bY,cc,z,bk,ca,w,p,cb,cq],"body":[cE,bP,M,F,cC,D,bX,bT,cz,bj,cn,bB,bb,cM,r,by,cl,bN,bg,bU,W,bQ,bE,cH,cy,G,P,t,cq,Q,co,cp,n,s,bc,bw,bJ]},getInfo:function(f){var g=qx.dev.Pollution.getTextList(f||cs);

if(g){return cw+g;
}else{return S;
}},extract:function(cN){var cP=[];
var cO=qx.dev.Pollution.ignore[cN];
if(qx.core.Variant.isSet(ck,H)){if(cN==cs){cO=cO.slice();

for(var cQ=0;cQ<window.length;cQ++){cO.push(cr+cQ);
}}}var cR=qx.dev.Pollution.names[cN];

for(var cS in cR){try{if(qx.core.Variant.isSet(ck,ch)){if(cN==cs&&cS==cj){continue;
}}if(typeof cR[cS]==cg||cR[cS]===null){continue;
}if(typeof cR[cS]==cm&&cR[cS].toString().indexOf(bz)!=-1){continue;
}if(typeof cR[cS].constructor==cm){if((cR[cS].constructor.toString().indexOf(bz)!=-1)||(cR[cS].constructor.toString().indexOf(bO)!=-1)){continue;
}}if(qx.lang.Array.contains(cO,cS)){continue;
}}catch(cT){continue;
}cP.push({"key":cS,"value":cR[cS]});
}return cP;
},getHtmlTable:function(cU){var cW=[];
var cV=bm;
var cY=br;
var da=bC;
cW.push(U);
var cX=this.extract(cU);

for(var i=0;i<cX.length;i++){cW.push(cV+cX[i].key+cY+cX[i].value+da);
}cW.push(bl);
return cW.join(cr);
},getTextList:function(a){var c=[];
var d=K;
var e=bh;
var b=this.extract(a);

for(var i=0;i<b.length;i++){c.push(b[i].key+d+b[i].value+e);
}return c.join(cr);
}}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

})();