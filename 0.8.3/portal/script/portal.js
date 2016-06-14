(function() {
  
if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application": "portal.Application", "qx.theme": "qx.theme.Modern", "qx.version": "0.8.3"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"qx": {"resourceUri": "resource", "version": "trunk", "sourceUri": "script"}, "portal": {"resourceUri": "resource", "version": "trunk", "sourceUri": "script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -474, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -572, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -69, 0], "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/form/checkbox-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -544, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -59, 0], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -12], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -418, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -12, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -20, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/checkbox-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -516, 0], "qx/decoration/Modern/form/checkbox-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -558, 0], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/form/radiobutton-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -530, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/inputcheckradio-combined.png": [628, 14, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/tooltip-error-lr-combined.png": [12, 18, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -348, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -30], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -54, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -264, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -53, 0], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -404, 0], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -145, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -27, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "portal/css/style.css": "portal", "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/form/checkbox-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -460, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -43, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -278, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -52, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -170, 0], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -35, 0], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-arrow.png": [11, 14, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -15, 0], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -30, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tooltip-error-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -502, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/form/checkbox-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -586, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -53, 0], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -46, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -390, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/form/tooltip-error-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -600, 0], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -33, 0], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/radiobutton-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -446, 0], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/icon/Tango/16/actions/window-close.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -334, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -20, 0], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -376, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "portal/data/boxData.js": "portal", "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -69, 0], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -614, 0], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -292, 0], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -6], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -488, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -432, 0], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -306, 0], "qx/decoration/Modern/form/tooltip-error-l.png": [6, 18, "png", "qx", "qx/decoration/Modern/tooltip-error-lr-combined.png", 0, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -82, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -39, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/form/tooltip-error-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -24], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -10, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -43, 0], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/form/tooltip-error-r.png": [6, 18, "png", "qx", "qx/decoration/Modern/tooltip-error-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -362, 0], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -151, 0], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/tooltip-error-c.png": [20, 18, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3]};
qx.$$translations = {};
qx.$$locales = {"C": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_12": "December", "cldr_month_format_wide_10": "October", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_month_format_wide_7": "July", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_month_stand-alone_narrow_5": "M", "cldr_day_format_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_month_stand-alone_narrow_4": "A", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_month_stand-alone_narrow_2": "F", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_date_time_format_M": "L", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_wide_tue": "Tuesday", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_stand-alone_wide_thu": "Thursday", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_day_stand-alone_narrow_sun": "S", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_day_stand-alone_narrow_tue": "T", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "May", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_month_format_abbreviated_10": "Oct", "cldr_date_time_format_y": "yyyy", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_day_format_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_date_format_short": "M/d/yy"}, "en": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_12": "December", "cldr_month_format_wide_10": "October", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_month_format_wide_7": "July", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_month_stand-alone_narrow_5": "M", "cldr_day_format_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_month_stand-alone_narrow_4": "A", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_month_stand-alone_narrow_2": "F", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_date_time_format_M": "L", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_wide_tue": "Tuesday", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_stand-alone_wide_thu": "Thursday", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_day_stand-alone_narrow_sun": "S", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_day_stand-alone_narrow_tue": "T", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "May", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_month_format_abbreviated_10": "Oct", "cldr_date_time_format_y": "yyyy", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_day_format_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_date_format_short": "M/d/yy"}};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["qx:portal-0.js"]],
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

(function(){var r=".",q="()",p="[Class ",o=".prototype",n="toString",m="qx.Bootstrap",l="]",k="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return p+this.classname+l;
},createNamespace:function(name,v){var x=name.split(r);
var parent=window;
var w=x[0];

for(var i=0,y=x.length-1;i<y;i++,w=x[i]){if(!parent[w]){parent=parent[w]={};
}else{parent=parent[w];
}}parent[w]=v;
return w;
},setDisplayName:function(h,j,name){h.displayName=j+r+name+q;
},setDisplayNames:function(s,t){for(var name in s){var u=s[name];

if(u instanceof Function){u.displayName=t+r+name+q;
}}},define:function(name,a){if(!a){var a={statics:{}};
}var f;
var d=null;
qx.Bootstrap.setDisplayNames(a.statics,name);

if(a.members){qx.Bootstrap.setDisplayNames(a.members,name+o);
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
f.$$type=k;
if(!f.hasOwnProperty(n)){f.toString=this.genericToString;
}if(a.defer){a.defer(f,d);
}qx.Bootstrap.$$registry[name]=a.statics;
}};
qx.Bootstrap.define(m,{statics:{LOADSTART:new Date,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var l="qx.allowUrlSettings",k="&",j="qx.core.Setting",h="qx.allowUrlVariants",g="qxsetting",f=":",e=".";
qx.Bootstrap.define(j,{statics:{__du:{},define:function(q,r){if(r===undefined){throw new Error('Default value of setting "'+q+'" must be defined!');
}
if(!this.__du[q]){this.__du[q]={};
}else if(this.__du[q].defaultValue!==undefined){throw new Error('Setting "'+q+'" is already defined!');
}this.__du[q].defaultValue=r;
},get:function(b){var c=this.__du[b];

if(c===undefined){throw new Error('Setting "'+b+'" is not defined.');
}
if(c.value!==undefined){return c.value;
}return c.defaultValue;
},set:function(m,n){if((m.split(e)).length<2){throw new Error('Malformed settings key "'+m+'". Must be following the schema "namespace.key".');
}
if(!this.__du[m]){this.__du[m]={};
}this.__du[m].value=n;
},__dv:function(){if(window.qxsettings){for(var d in qxsettings){this.set(d,qxsettings[d]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__dw();
}},__dw:function(){if(this.get(l)!=true){return;
}var p=document.location.search.slice(1).split(k);

for(var i=0;i<p.length;i++){var o=p[i].split(f);

if(o.length!=3||o[0]!=g){continue;
}this.set(o[1],decodeURIComponent(o[2]));
}}},defer:function(s){s.define(l,false);
s.define(h,false);
s.__dv();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__dt:function(){var t=d;
var x=e;
var w=navigator.userAgent;
var z=false;
var v=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){t=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(w)){x=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){x+=q+RegExp.$3;
}}else{v=true;
x=i;
}}else if(navigator.userAgent.indexOf(j)!=-1){t=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(w)){x=RegExp.$1;
var y=RegExp(n).exec(x);

if(y){x=x.slice(0,y.index);
}}else{v=true;
x=m;
}}else if(window.controllers&&navigator.product===c){t=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(w)){x=RegExp.$1;
}else{v=true;
x=r;
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(w)){t=k;
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
alert("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__dt();
}});
})();
(function(){var C="on",B="off",A="|",z="default",y="object",x="&",w="qx.aspects",u="$",t="qx.allowUrlVariants",s="qx.debug",m="qx.client",r="qx.dynlocale",p="webkit",k="qxvariant",j="opera",o=":",n="qx.core.Variant",q="mshtml",h="gecko";
qx.Bootstrap.define(n,{statics:{__iu:{},__iv:{},compilerIsSet:function(){return true;
},define:function(c,d,e){{};

if(!this.__iu[c]){this.__iu[c]={};
}else{}this.__iu[c].allowedValues=d;
this.__iu[c].defaultValue=e;
},get:function(f){var g=this.__iu[f];
{};

if(g.value!==undefined){return g.value;
}return g.defaultValue;
},__iw:function(){if(window.qxvariants){for(var a in qxvariants){{};

if(!this.__iu[a]){this.__iu[a]={};
}this.__iu[a].value=qxvariants[a];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(L){}this.__ix(this.__iu);
}},__ix:function(){if(qx.core.Setting.get(t)!=true){return;
}var I=document.location.search.slice(1).split(x);

for(var i=0;i<I.length;i++){var J=I[i].split(o);

if(J.length!=3||J[0]!=k){continue;
}var K=J[1];

if(!this.__iu[K]){this.__iu[K]={};
}this.__iu[K].value=decodeURIComponent(J[2]);
}},select:function(F,G){{};

for(var H in G){if(this.isSet(F,H)){return G[H];
}}
if(G[z]!==undefined){return G[z];
}{};
},isSet:function(M,N){var O=M+u+N;

if(this.__iv[O]!==undefined){return this.__iv[O];
}var Q=false;
if(N.indexOf(A)<0){Q=this.get(M)===N;
}else{var P=N.split(A);

for(var i=0,l=P.length;i<l;i++){if(this.get(M)===P[i]){Q=true;
break;
}}}this.__iv[O]=Q;
return Q;
},__iy:function(v){return typeof v===y&&v!==null&&v instanceof Array;
},__iz:function(v){return typeof v===y&&v!==null&&!(v instanceof Array);
},__iA:function(D,E){for(var i=0,l=D.length;i<l;i++){if(D[i]==E){return true;
}}return false;
}},defer:function(b){b.define(m,[h,q,j,p],qx.bom.client.Engine.NAME);
b.define(s,[C,B],C);
b.define(w,[C,B],B);
b.define(r,[C,B],C);
b.__iw();
}});
})();
(function(){var bh="qx.client",bg='"',bf="valueOf",be="toLocaleString",bd="isPrototypeOf",bc="",bb="toString",ba="qx.lang.Object",Y='\", "',X="hasOwnProperty",W="Use 'clone()' instead!";
qx.Bootstrap.define(ba,{statics:{empty:function(h){{};

for(var j in h){if(h.hasOwnProperty(j)){delete h[j];
}}},isEmpty:qx.core.Variant.select(bh,{"gecko":function(bm){{};
return bm.__count__===0;
},"default":function(d){{};

for(var e in d){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(bh,{"gecko":function(k,m){{};
return k.__count__>=m;
},"default":function(q,r){{};

if(r<=0){return true;
}var length=0;

for(var s in q){if((++length)>=r){return true;
}}return false;
}}),getLength:qx.core.Variant.select(bh,{"gecko":function(H){{};
return H.__count__;
},"default":function(f){{};
var length=0;

for(var g in f){length++;
}return length;
}}),_shadowedKeys:[bd,X,be,bb,bf],getKeys:qx.core.Variant.select(bh,{"mshtml":function(w){var x=[];

for(var z in w){x.push(z);
}var y=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(y.call(w,a[i])){x.push(a[i]);
}}return x;
},"default":function(K){var L=[];

for(var M in K){L.push(M);
}return L;
}}),getKeysAsString:function(A){{};
var B=qx.lang.Object.getKeys(A);

if(B.length==0){return bc;
}return bg+B.join(Y)+bg;
},getValues:function(E){{};
var G=[];
var F=this.getKeys(E);

for(var i=0,l=F.length;i<l;i++){G.push(E[F[i]]);
}return G;
},mergeWith:function(bi,bj,bk){{};

if(bk===undefined){bk=true;
}
for(var bl in bj){if(bk||bi[bl]===undefined){bi[bl]=bj[bl];
}}return bi;
},carefullyMergeWith:function(U,V){{};
return qx.lang.Object.mergeWith(U,V,false);
},merge:function(R,S){{};
var T=arguments.length;

for(var i=1;i<T;i++){qx.lang.Object.mergeWith(R,arguments[i]);
}return R;
},copy:function(N){qx.log.Logger.deprecatedMethodWarning(arguments.callee,W);
return qx.lang.Object.clone(N);
},clone:function(O){{};
var P={};

for(var Q in O){P[Q]=O[Q];
}return P;
},invert:function(n){{};
var o={};

for(var p in n){o[n[p].toString()]=p;
}return o;
},getKeyFromValue:function(t,u){{};

for(var v in t){if(t.hasOwnProperty(v)&&t[v]===u){return v;
}}return null;
},contains:function(C,D){{};
return this.getKeyFromValue(C,D)!==null;
},select:function(b,c){{};
return c[b];
},fromArray:function(I){{};
var J={};

for(var i=0,l=I.length;i<l;i++){{};
J[I[i].toString()]=true;
}return J;
}}});
})();
(function(){var l="Function",k="Boolean",j="Error",i="Number",h="Array",g="Date",f="RegExp",e="String",d="Object",c="qx.lang.Type",b="string";
qx.Bootstrap.define(c,{statics:{__ie:{"[object String]":e,"[object Array]":h,"[object Object]":d,"[object RegExp]":f,"[object Number]":i,"[object Boolean]":k,"[object Date]":g,"[object Function]":l,"[object Error]":j},getClass:function(m){var n=Object.prototype.toString.call(m);
return (this.__ie[n]||n.slice(8,-1));
},isString:function(u){return (u!==null&&(typeof u===b||this.getClass(u)==e||u instanceof String||(!!u&&!!u.$$isString)));
},isArray:function(a){return (a!==null&&(a instanceof Array||(a&&qx.Class.hasInterface(a.constructor,qx.data.IListData))||this.getClass(a)==h||(!!a&&!!a.$$isArray)));
},isObject:function(o){return (o!==undefined&&o!==null&&this.getClass(o)==d);
},isRegExp:function(s){return this.getClass(s)==f;
},isNumber:function(q){return (q!==null&&(this.getClass(q)==i||q instanceof Number));
},isBoolean:function(v){return (v!==null&&(this.getClass(v)==k||v instanceof Boolean));
},isDate:function(p){return (p!==null&&(this.getClass(p)==g||p instanceof Date));
},isError:function(r){return (r!==null&&(this.getClass(r)==j||r instanceof Error));
},isFunction:function(t){return this.getClass(t)==l;
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__ii:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__ii;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var n=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,n);
}return n;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(o,p,q,name){this.__ii.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var bw="qx.aspects",bv="on",bu=".",bt="static",bs="constructor",br="[Class ",bq="]",bp="toString",bo="member",bn="$$init_",bh=".prototype",bm="destructor",bk="extend",bg="destruct",bf="Class",bj="off",bi="qx.Class",bl="singleton",be="qx.event.type.Data";
qx.Bootstrap.define(bi,{statics:{define:function(name,n){if(!n){var n={};
}if(n.include&&!(n.include instanceof Array)){n.include=[n.include];
}if(n.implement&&!(n.implement instanceof Array)){n.implement=[n.implement];
}if(!n.hasOwnProperty(bk)&&!n.type){n.type=bt;
}{};
var p=this.__br(name,n.type,n.extend,n.statics,n.construct,n.destruct);
if(n.extend){if(n.properties){this.__bt(p,n.properties,true);
}if(n.members){this.__bv(p,n.members,true,true,false);
}if(n.events){this.__bs(p,n.events,true);
}if(n.include){for(var i=0,l=n.include.length;i<l;i++){this.__by(p,n.include[i],false);
}}}if(n.settings){for(var o in n.settings){qx.core.Setting.define(o,n.settings[o]);
}}if(n.variants){for(var o in n.variants){qx.core.Variant.define(o,n.variants[o].allowedValues,n.variants[o].defaultValue);
}}if(n.implement){for(var i=0,l=n.implement.length;i<l;i++){this.__bx(p,n.implement[i]);
}}{};
if(n.defer){n.defer.self=p;
n.defer(p,p.prototype,{add:function(name,z){var A={};
A[name]=z;
qx.Class.__bt(p,A,true);
}});
}},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(T,U){{};
qx.Class.__by(T,U,false);
},patch:function(bX,bY){{};
qx.Class.__by(bX,bY,true);
},isSubClassOf:function(f,g){if(!f){return false;
}
if(f==g){return true;
}
if(f.prototype instanceof g){return true;
}return false;
},getPropertyDefinition:function(ca,name){while(ca){if(ca.$$properties&&ca.$$properties[name]){return ca.$$properties[name];
}ca=ca.superclass;
}return null;
},getProperties:function(bO){var bP=[];

while(bO){if(bO.$$properties){bP.push.apply(bP,qx.lang.Object.getKeys(bO.$$properties));
}bO=bO.superclass;
}return bP;
},getByProperty:function(O,name){while(O){if(O.$$properties&&O.$$properties[name]){return O;
}O=O.superclass;
}return null;
},hasProperty:function(bA,name){return !!this.getPropertyDefinition(bA,name);
},getEventType:function(q,name){var q=q.constructor;

while(q.superclass){if(q.$$events&&q.$$events[name]!==undefined){return q.$$events[name];
}q=q.superclass;
}return null;
},supportsEvent:function(y,name){return !!this.getEventType(y,name);
},hasOwnMixin:function(cl,cm){return cl.$$includes&&cl.$$includes.indexOf(cm)!==-1;
},getByMixin:function(B,C){var D,i,l;

while(B){if(B.$$includes){D=B.$$flatIncludes;

for(i=0,l=D.length;i<l;i++){if(D[i]===C){return B;
}}}B=B.superclass;
}return null;
},getMixins:function(d){var e=[];

while(d){if(d.$$includes){e.push.apply(e,d.$$flatIncludes);
}d=d.superclass;
}return e;
},hasMixin:function(Y,ba){return !!this.getByMixin(Y,ba);
},hasOwnInterface:function(b,c){return b.$$implements&&b.$$implements.indexOf(c)!==-1;
},getByInterface:function(V,W){var X,i,l;

while(V){if(V.$$implements){X=V.$$flatImplements;

for(i=0,l=X.length;i<l;i++){if(X[i]===W){return V;
}}}V=V.superclass;
}return null;
},getInterfaces:function(k){var m=[];

while(k){if(k.$$implements){m.push.apply(m,k.$$flatImplements);
}k=k.superclass;
}return m;
},hasInterface:function(h,j){return !!this.getByInterface(h,j);
},implementsInterface:function(bb,bc){var bd=bb.constructor;

if(this.hasInterface(bd,bc)){return true;
}
try{qx.Interface.assertObject(bb,bc);
return true;
}catch(bN){}
try{qx.Interface.assert(bd,bc,false);
return true;
}catch(cb){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return br+this.classname+bq;
},$$registry:qx.Bootstrap.$$registry,__bn:null,__bo:null,__bp:function(){},__bq:function(){},__br:function(name,bB,bC,bD,bE,bF){var bK;

if(!bC&&qx.core.Variant.isSet(bw,bj)){bK=bD||{};
qx.Bootstrap.setDisplayNames(bK,name);
}else{bK={};

if(bC){if(!bE){bE=this.__bz();
}bK=this.__bB(bE,name,bB);
qx.Bootstrap.setDisplayName(bE,name,bs);
}if(bD){qx.Bootstrap.setDisplayNames(bD,name);
var bL;

for(var i=0,a=qx.lang.Object.getKeys(bD),l=a.length;i<l;i++){bL=a[i];
var bH=bD[bL];

if(qx.core.Variant.isSet(bw,bv)){if(bH instanceof Function){bH=qx.core.Aspect.wrap(name+bu+bL,bH,bt);
}bK[bL]=bH;
}else{bK[bL]=bH;
}}}}var bJ=qx.Bootstrap.createNamespace(name,bK,false);
bK.name=bK.classname=name;
bK.basename=bJ;
bK.$$type=bf;

if(bB){bK.$$classtype=bB;
}if(!bK.hasOwnProperty(bp)){bK.toString=this.genericToString;
}
if(bC){var bM=bC.prototype;
var bG=this.__bA();
bG.prototype=bM;
var bI=new bG;
bK.prototype=bI;
bI.name=bI.classname=name;
bI.basename=bJ;
bE.base=bK.superclass=bC;
bE.self=bK.constructor=bI.constructor=bK;
if(bF){if(qx.core.Variant.isSet(bw,bv)){bF=qx.core.Aspect.wrap(name,bF,bm);
}bK.$$destructor=bF;
qx.Bootstrap.setDisplayName(bF,name,bg);
}}this.$$registry[name]=bK;
return bK;
},__bs:function(P,Q,R){var S,S;
{};

if(P.$$events){for(var S in Q){P.$$events[S]=Q[S];
}}else{P.$$events=Q;
}},__bt:function(cd,ce,cf){var ch;

if(cf===undefined){cf=false;
}var cg=!!cd.$$propertiesAttached;

for(var name in ce){ch=ce[name];
{};
ch.name=name;
if(!ch.refine){if(cd.$$properties===undefined){cd.$$properties={};
}cd.$$properties[name]=ch;
}if(ch.init!==undefined){cd.prototype[bn+name]=ch.init;
}if(ch.event!==undefined){var event={};
event[ch.event]=be;
this.__bs(cd,event,cf);
}if(ch.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(cg){qx.core.Property.attachMethods(cd,name,ch);
}}},__bu:null,__bv:function(G,H,I,J,K){var L=G.prototype;
var N,M;
qx.Bootstrap.setDisplayNames(H,G.classname+bh);

for(var i=0,a=qx.lang.Object.getKeys(H),l=a.length;i<l;i++){N=a[i];
M=H[N];
{};
if(J!==false&&M instanceof Function&&M.$$type==null){if(K==true){M=this.__bw(M,L[N]);
}else{if(L[N]){M.base=L[N];
}M.self=G;
}
if(qx.core.Variant.isSet(bw,bv)){M=qx.core.Aspect.wrap(G.classname+bu+N,M,bo);
}}L[N]=M;
}},__bw:function(bQ,bR){if(bR){return function(){var F=bQ.base;
bQ.base=bR;
var E=bQ.apply(this,arguments);
bQ.base=F;
return E;
};
}else{return bQ;
}},__bx:function(ci,cj){{};
var ck=qx.Interface.flatten([cj]);

if(ci.$$implements){ci.$$implements.push(cj);
ci.$$flatImplements.push.apply(ci.$$flatImplements,ck);
}else{ci.$$implements=[cj];
ci.$$flatImplements=ck;
}},__by:function(bS,bT,bU){{};

if(this.hasMixin(bS,bT)){qx.log.Logger.warn('Mixin "'+bT.name+'" is already included into Class "'+bS.classname+'" by class: '+this.getByMixin(bS,bT).classname+'!');
return;
}var bW=qx.Mixin.flatten([bT]);
var bV;

for(var i=0,l=bW.length;i<l;i++){bV=bW[i];
if(bV.$$events){this.__bs(bS,bV.$$events,bU);
}if(bV.$$properties){this.__bt(bS,bV.$$properties,bU);
}if(bV.$$members){this.__bv(bS,bV.$$members,bU,bU,bU);
}}if(bS.$$includes){bS.$$includes.push(bT);
bS.$$flatIncludes.push.apply(bS.$$flatIncludes,bW);
}else{bS.$$includes=[bT];
bS.$$flatIncludes=bW;
}},__bz:function(){function cc(){arguments.callee.base.apply(this,arguments);
}return cc;
},__bA:function(){return function(){};
},__bB:function(u,name,v){var x=function(){var bz=arguments.callee.constructor;
{};
if(!bz.$$propertiesAttached){qx.core.Property.attach(bz);
}var by=bz.$$original.apply(this,arguments);
if(bz.$$includes){var bx=bz.$$flatIncludes;

for(var i=0,l=bx.length;i<l;i++){if(bx[i].$$constructor){bx[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return by;
};

if(qx.core.Variant.isSet(bw,bv)){var w=qx.core.Aspect.wrap(name,x,bs);
x.$$original=u;
x.constructor=w;
x=w;
}if(v===bl){x.getInstance=this.getInstance;
}x.$$original=u;
u.wrapper=x;
return x;
}},defer:function(r){if(qx.core.Variant.isSet(bw,bv)){for(var s in qx.Bootstrap.$$registry){var r=qx.Bootstrap.$$registry[s];

for(var t in r){if(r[t] instanceof Function){r[t]=qx.core.Aspect.wrap(s+bu+t,r[t],bt);
}}}}}});
})();
(function(){var v="other",u="widgets",t="fonts",s="appearances",r="qx.Theme",q="]",p="[Theme ",o="colors",n="decorations",m="Theme",h="meta",k="borders",j="icons";
qx.Class.define(r,{statics:{define:function(name,c){if(!c){var c={};
}c.include=this.__mM(c.include);
c.patch=this.__mM(c.patch);
{};
var d={$$type:m,name:name,title:c.title,toString:this.genericToString};
if(c.extend){d.supertheme=c.extend;
}d.basename=qx.Bootstrap.createNamespace(name,d);
this.__mQ(d,c);
this.__mN(d,c);
this.__mO(d,c);
this.$$registry[name]=d;
for(var i=0,a=c.include,l=a.length;i<l;i++){this.include(d,a[i]);
}
for(var i=0,a=c.patch,l=a.length;i<l;i++){this.patch(d,a[i]);
}},__mM:function(b){if(!b){return [];
}
if(qx.lang.Type.isArray(b)){return b;
}else{return [b];
}},__mN:function(e,f){var g;
{};

if(f.resource){e.resource=f.resource;
}else if(f.extend&&f.extend.resource){e.resource=f.extend.resource;
}},__mO:function(L,M){var N=M.aliases||{};

if(M.extend&&M.extend.aliases){qx.lang.Object.mergeWith(N,M.extend.aliases,false);
}L.aliases=N;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return p+this.name+q;
},__mP:function(J){for(var i=0,K=this.__mR,l=K.length;i<l;i++){if(J[K[i]]){return K[i];
}}},__mQ:function(C,D){var G=this.__mP(D);
if(D.extend&&!G){G=D.extend.type;
}C.type=G||v;
if(!G){return;
}var I=function(){};
if(D.extend){I.prototype=new D.extend.$$clazz;
}var H=I.prototype;
var F=D[G];
for(var E in F){H[E]=F[E];
if(H[E].base){{};
H[E].base=D.extend;
}}C.$$clazz=I;
C[G]=new I;
},$$registry:{},__mR:[o,k,n,t,j,u,s,h],__mS:null,__mT:null,__mU:function(){},patch:function(w,x){var z=this.__mP(x);

if(z!==this.__mP(w)){throw new Error("The mixins '"+w.name+"' are not compatible '"+x.name+"'!");
}var y=x[z];
var A=w.$$clazz.prototype;

for(var B in y){A[B]=y[B];
}},include:function(O,P){var R=P.type;

if(R!==O.type){throw new Error("The mixins '"+O.name+"' are not compatible '"+P.name+"'!");
}var Q=P[R];
var S=O.$$clazz.prototype;

for(var T in Q){if(S[T]!==undefined){continue;
}S[T]=Q[T];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var cK=';',cJ='computed=this.',cI='=value;',cH='this.',cG="set",cF="setThemed",cE="setRuntime",cD="init",cC='if(this.',cB='delete this.',bL='!==undefined)',bK='}',bJ="resetThemed",bI='else if(this.',bH="string",bG='return this.',bF="reset",bE="boolean",bD="resetRuntime",bC='!==undefined){',cR="refresh",cS='=true;',cP="",cQ="this.",cN='old=this.',cO="();",cL='else ',cM='if(old===undefined)old=this.',cT='old=computed=this.',cU="return this.",ck="get",cj='(value);',cm=";",cl="(a[",co='if(old===computed)return value;',cn='if(old===undefined)old=null;',cq=' of an instance of ',cp=' is not (yet) ready!");',ci="]);",ch='!==inherit){',t='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',u='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',v='value !== null && value.nodeType === 9 && value.documentElement',w='===value)return value;',x='value !== null && value.$$type === "Mixin"',y='return init;',z='var init=this.',A='value !== null && value.nodeType === 1 && value.attributes',B="Error in property ",C='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',dh="property",dg='.validate.call(this, value);',df='qx.core.Assert.assertInstance(value, Date, msg) || true',de='else{',dl=" in method ",dk='qx.core.Assert.assertInstance(value, Error, msg) || true',dj='=computed;',di='Undefined value is not allowed!',dn='(backup);',dm='if(computed===inherit){',bc="inherit",bd='Is invalid!',ba='if(value===undefined)prop.error(this,2,"',bb='var computed, old=this.',bg='else if(computed===undefined)',bh="': ",be=" of class ",bf='value !== null && value.nodeType !== undefined',X='===undefined)return;',Y='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',K="')){",J='qx.core.Assert.assertPositiveInteger(value, msg) || true',M='else this.',L='value=this.',G='","',F='if(init==qx.core.Property.$$inherit)init=null;',I='value !== null && value.$$type === "Interface"',H='var inherit=prop.$$inherit;',E="', qx.event.type.Data, [computed, old]",D="$$useinit_",bm='computed=undefined;delete this.',bn='",value);',bo='computed=value;',bp=".",bi="$$runtime_",bj='Requires exactly one argument!',bk=';}',bl="$$user_",bq='){',br='qx.core.Assert.assertArray(value, msg) || true',U='if(computed===undefined||computed===inherit){',T='qx.core.Assert.assertPositiveNumber(value, msg) || true',S=".prototype",R="Boolean",Q=")}",P='(computed, old, "',O='return value;',N='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',W='}else{',V="if(reg.hasListener(this, '",bs='Does not allow any arguments!',bt=')a[i].',bu="()",bv="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bw='.$$properties.',bx='value !== null && value.$$type === "Theme"',by="var reg=qx.event.Registration;",bz="())",bA='return null;',bB='qx.core.Assert.assertObject(value, msg) || true',bP='");',bO='qx.core.Assert.assertString(value, msg) || true',bN='var pa=this.getLayoutParent();if(pa)computed=pa.',bM='value !== null && value.$$type === "Class"',bT='qx.core.Assert.assertFunction(value, msg) || true',bS='!==undefined&&',bR='var computed, old;',bQ='var backup=computed;',bV="on",bU="object",cd="$$init_",ce="$$theme_",cb='if(computed===undefined)computed=null;',cc='qx.core.Assert.assertMap(value, msg) || true',bY="qx.aspects",ca='qx.core.Assert.assertNumber(value, msg) || true',bW='if((computed===undefined||computed===inherit)&&',bX="reg.fireEvent(this, '",cf='Null value is not allowed!',cg='qx.core.Assert.assertInteger(value, msg) || true',cu="value",ct="shorthand",cw='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cv='value !== null && value.type !== undefined',cy='value !== null && value.document',cx='throw new Error("Property ',cA="(!this.",cz='qx.core.Assert.assertBoolean(value, msg) || true',cs='if(a[i].',cr="toggle",da="$$inherit_",db='var prop=qx.core.Property;',dc=" with incoming value '",dd="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cV='if(computed===undefined||computed==inherit)computed=null;',cW="qx.core.Property",cX="is",cY='Could not change or apply init value after constructing phase!';
qx.Class.define(cW,{statics:{__iQ:{"Boolean":cz,"String":bO,"Number":ca,"Integer":cg,"PositiveNumber":T,"PositiveInteger":J,"Error":dk,"RegExp":cw,"Object":bB,"Array":br,"Map":cc,"Function":bT,"Date":df,"Node":bf,"Element":A,"Document":v,"Window":cy,"Event":cv,"Class":bM,"Mixin":x,"Interface":I,"Theme":bx,"Color":t,"Decorator":Y,"Font":u},__iR:{"Object":true,"Array":true,"Map":true,"Function":true,"Date":true,"Node":true,"Element":true,"Document":true,"Window":true,"Event":true,"Class":true,"Mixin":true,"Interface":true,"Theme":true,"Font":true,"Decorator":true},$$inherit:bc,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bH,dispose:bE,inheritable:bE,nullable:bE,themeable:bE,refine:bE,init:null,apply:bH,event:bH,check:null,transform:bH,deferredInit:bE,validate:null},$$allowedGroupKeys:{name:bH,group:bU,mode:bH,themeable:bE},$$inheritable:{},refresh:function(dp){var parent=dp.getLayoutParent();

if(parent){var ds=dp.constructor;
var du=this.$$store.inherit;
var dt=this.$$store.init;
var dr=this.$$method.refresh;
var dv;
var dq;
{};

while(ds){dv=ds.$$properties;

if(dv){for(var name in this.$$inheritable){if(dv[name]&&dp[dr[name]]){dq=parent[du[name]];

if(dq===undefined){dq=parent[dt[name]];
}{};
dp[dr[name]](dq);
}}}ds=ds.superclass;
}}},attach:function(dK){var dL=dK.$$properties;

if(dL){for(var name in dL){this.attachMethods(dK,name,dL[name]);
}}dK.$$propertiesAttached=true;
},attachMethods:function(dH,name,dI){dI.group?this.__iS(dH,dI,name):this.__iT(dH,dI,name);
},__iS:function(dw,dx,name){var dE=qx.lang.String.firstUp(name);
var dD=dw.prototype;
var dF=dx.themeable===true;
{};
var dG=[];
var dA=[];

if(dF){var dy=[];
var dC=[];
}var dB=bv;
dG.push(dB);

if(dF){dy.push(dB);
}
if(dx.mode==ct){var dz=dd;
dG.push(dz);

if(dF){dy.push(dz);
}}
for(var i=0,a=dx.group,l=a.length;i<l;i++){{};
dG.push(cQ,this.$$method.set[a[i]],cl,i,ci);
dA.push(cQ,this.$$method.reset[a[i]],cO);

if(dF){{};
dy.push(cQ,this.$$method.setThemed[a[i]],cl,i,ci);
dC.push(cQ,this.$$method.resetThemed[a[i]],cO);
}}this.$$method.set[name]=cG+dE;
dD[this.$$method.set[name]]=new Function(dG.join(cP));
this.$$method.reset[name]=bF+dE;
dD[this.$$method.reset[name]]=new Function(dA.join(cP));

if(dF){this.$$method.setThemed[name]=cF+dE;
dD[this.$$method.setThemed[name]]=new Function(dy.join(cP));
this.$$method.resetThemed[name]=bJ+dE;
dD[this.$$method.resetThemed[name]]=new Function(dC.join(cP));
}},__iT:function(b,c,name){var e=qx.lang.String.firstUp(name);
var g=b.prototype;
{};
if(c.dispose===undefined&&typeof c.check===bH){c.dispose=this.__iR[c.check]||qx.Class.isDefined(c.check)||qx.Interface.isDefined(c.check);
}var f=this.$$method;
var d=this.$$store;
d.runtime[name]=bi+name;
d.user[name]=bl+name;
d.theme[name]=ce+name;
d.init[name]=cd+name;
d.inherit[name]=da+name;
d.useinit[name]=D+name;
f.get[name]=ck+e;
g[f.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,b,name,ck);
};
f.set[name]=cG+e;
g[f.set[name]]=function(dJ){return qx.core.Property.executeOptimizedSetter(this,b,name,cG,arguments);
};
f.reset[name]=bF+e;
g[f.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,bF);
};

if(c.inheritable||c.apply||c.event||c.deferredInit){f.init[name]=cD+e;
g[f.init[name]]=function(h){return qx.core.Property.executeOptimizedSetter(this,b,name,cD,arguments);
};
}
if(c.inheritable){f.refresh[name]=cR+e;
g[f.refresh[name]]=function(s){return qx.core.Property.executeOptimizedSetter(this,b,name,cR,arguments);
};
}f.setRuntime[name]=cE+e;
g[f.setRuntime[name]]=function(ee){return qx.core.Property.executeOptimizedSetter(this,b,name,cE,arguments);
};
f.resetRuntime[name]=bD+e;
g[f.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,bD);
};

if(c.themeable){f.setThemed[name]=cF+e;
g[f.setThemed[name]]=function(j){return qx.core.Property.executeOptimizedSetter(this,b,name,cF,arguments);
};
f.resetThemed[name]=bJ+e;
g[f.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,bJ);
};
}
if(c.check===R){g[cr+e]=new Function(cU+f.set[name]+cA+f.get[name]+bz);
g[cX+e]=new Function(cU+f.get[name]+bu);
}},__iU:{0:cY,1:bj,2:di,3:bs,4:cf,5:bd},error:function(k,m,n,o,p){var q=k.constructor.classname;
var r=B+n+be+q+dl+this.$$method[o][n]+dc+p+bh;
throw new Error(r+(this.__iU[m]||"Unknown reason: "+m));
},__iV:function(dM,dN,name,dO,dP,dQ){var dR=this.$$method[dO][name];
{dN[dR]=new Function(cu,dP.join(cP));
};
if(qx.core.Variant.isSet(bY,bV)){dN[dR]=qx.core.Aspect.wrap(dM.classname+bp+dR,dN[dR],dh);
}qx.Bootstrap.setDisplayName(dN[dR],dM.classname+S,dR);
if(dQ===undefined){return dM[dR]();
}else{return dM[dR](dQ[0]);
}},executeOptimizedGetter:function(ef,eg,name,eh){var ej=eg.$$properties[name];
var el=eg.prototype;
var ei=[];
var ek=this.$$store;
ei.push(cC,ek.runtime[name],bL);
ei.push(bG,ek.runtime[name],cK);

if(ej.inheritable){ei.push(bI,ek.inherit[name],bL);
ei.push(bG,ek.inherit[name],cK);
ei.push(cL);
}ei.push(cC,ek.user[name],bL);
ei.push(bG,ek.user[name],cK);

if(ej.themeable){ei.push(bI,ek.theme[name],bL);
ei.push(bG,ek.theme[name],cK);
}
if(ej.deferredInit&&ej.init===undefined){ei.push(bI,ek.init[name],bL);
ei.push(bG,ek.init[name],cK);
}ei.push(cL);

if(ej.init!==undefined){if(ej.inheritable){ei.push(z,ek.init[name],cK);

if(ej.nullable){ei.push(F);
}else if(ej.init!==undefined){ei.push(bG,ek.init[name],cK);
}else{ei.push(N,name,cq,eg.classname,cp);
}ei.push(y);
}else{ei.push(bG,ek.init[name],cK);
}}else if(ej.inheritable||ej.nullable){ei.push(bA);
}else{ei.push(cx,name,cq,eg.classname,cp);
}return this.__iV(ef,el,name,eh,ei);
},executeOptimizedSetter:function(dS,dT,name,dU,dV){var ec=dT.$$properties[name];
var eb=dT.prototype;
var dX=[];
var dW=dU===cG||dU===cF||dU===cE||(dU===cD&&ec.init===undefined);
var dY=dU===bF||dU===bJ||dU===bD;
var ea=ec.apply||ec.event||ec.inheritable;

if(dU===cE||dU===bD){var ed=this.$$store.runtime[name];
}else if(dU===cF||dU===bJ){var ed=this.$$store.theme[name];
}else if(dU===cD){var ed=this.$$store.init[name];
}else{var ed=this.$$store.user[name];
}{if(!ec.nullable||ec.check||ec.inheritable){dX.push(db);
}if(dU===cG){dX.push(ba,name,G,dU,bn);
}};
if(dW){if(ec.transform){dX.push(L,ec.transform,cj);
}if(ec.validate){if(typeof ec.validate===bH){dX.push(cH,ec.validate,cj);
}else if(ec.validate instanceof Function){dX.push(dT.classname,bw,name);
dX.push(dg);
}}}if(ea){if(dW){dX.push(cC,ed,w);
}else if(dY){dX.push(cC,ed,X);
}}if(ec.inheritable){dX.push(H);
}{};

if(!ea){if(dU===cE){dX.push(cH,this.$$store.runtime[name],cI);
}else if(dU===bD){dX.push(cC,this.$$store.runtime[name],bL);
dX.push(cB,this.$$store.runtime[name],cK);
}else if(dU===cG){dX.push(cH,this.$$store.user[name],cI);
}else if(dU===bF){dX.push(cC,this.$$store.user[name],bL);
dX.push(cB,this.$$store.user[name],cK);
}else if(dU===cF){dX.push(cH,this.$$store.theme[name],cI);
}else if(dU===bJ){dX.push(cC,this.$$store.theme[name],bL);
dX.push(cB,this.$$store.theme[name],cK);
}else if(dU===cD&&dW){dX.push(cH,this.$$store.init[name],cI);
}}else{if(ec.inheritable){dX.push(bb,this.$$store.inherit[name],cK);
}else{dX.push(bR);
}dX.push(cC,this.$$store.runtime[name],bC);

if(dU===cE){dX.push(cJ,this.$$store.runtime[name],cI);
}else if(dU===bD){dX.push(cB,this.$$store.runtime[name],cK);
dX.push(cC,this.$$store.user[name],bL);
dX.push(cJ,this.$$store.user[name],cK);
dX.push(bI,this.$$store.theme[name],bL);
dX.push(cJ,this.$$store.theme[name],cK);
dX.push(bI,this.$$store.init[name],bC);
dX.push(cJ,this.$$store.init[name],cK);
dX.push(cH,this.$$store.useinit[name],cS);
dX.push(bK);
}else{dX.push(cT,this.$$store.runtime[name],cK);
if(dU===cG){dX.push(cH,this.$$store.user[name],cI);
}else if(dU===bF){dX.push(cB,this.$$store.user[name],cK);
}else if(dU===cF){dX.push(cH,this.$$store.theme[name],cI);
}else if(dU===bJ){dX.push(cB,this.$$store.theme[name],cK);
}else if(dU===cD&&dW){dX.push(cH,this.$$store.init[name],cI);
}}dX.push(bK);
dX.push(bI,this.$$store.user[name],bC);

if(dU===cG){if(!ec.inheritable){dX.push(cN,this.$$store.user[name],cK);
}dX.push(cJ,this.$$store.user[name],cI);
}else if(dU===bF){if(!ec.inheritable){dX.push(cN,this.$$store.user[name],cK);
}dX.push(cB,this.$$store.user[name],cK);
dX.push(cC,this.$$store.runtime[name],bL);
dX.push(cJ,this.$$store.runtime[name],cK);
dX.push(cC,this.$$store.theme[name],bL);
dX.push(cJ,this.$$store.theme[name],cK);
dX.push(bI,this.$$store.init[name],bC);
dX.push(cJ,this.$$store.init[name],cK);
dX.push(cH,this.$$store.useinit[name],cS);
dX.push(bK);
}else{if(dU===cE){dX.push(cJ,this.$$store.runtime[name],cI);
}else if(ec.inheritable){dX.push(cJ,this.$$store.user[name],cK);
}else{dX.push(cT,this.$$store.user[name],cK);
}if(dU===cF){dX.push(cH,this.$$store.theme[name],cI);
}else if(dU===bJ){dX.push(cB,this.$$store.theme[name],cK);
}else if(dU===cD&&dW){dX.push(cH,this.$$store.init[name],cI);
}}dX.push(bK);
if(ec.themeable){dX.push(bI,this.$$store.theme[name],bC);

if(!ec.inheritable){dX.push(cN,this.$$store.theme[name],cK);
}
if(dU===cE){dX.push(cJ,this.$$store.runtime[name],cI);
}else if(dU===cG){dX.push(cJ,this.$$store.user[name],cI);
}else if(dU===cF){dX.push(cJ,this.$$store.theme[name],cI);
}else if(dU===bJ){dX.push(cB,this.$$store.theme[name],cK);
dX.push(cC,this.$$store.init[name],bC);
dX.push(cJ,this.$$store.init[name],cK);
dX.push(cH,this.$$store.useinit[name],cS);
dX.push(bK);
}else if(dU===cD){if(dW){dX.push(cH,this.$$store.init[name],cI);
}dX.push(cJ,this.$$store.theme[name],cK);
}else if(dU===cR){dX.push(cJ,this.$$store.theme[name],cK);
}dX.push(bK);
}dX.push(bI,this.$$store.useinit[name],bq);

if(!ec.inheritable){dX.push(cN,this.$$store.init[name],cK);
}
if(dU===cD){if(dW){dX.push(cJ,this.$$store.init[name],cI);
}else{dX.push(cJ,this.$$store.init[name],cK);
}}else if(dU===cG||dU===cE||dU===cF||dU===cR){dX.push(cB,this.$$store.useinit[name],cK);

if(dU===cE){dX.push(cJ,this.$$store.runtime[name],cI);
}else if(dU===cG){dX.push(cJ,this.$$store.user[name],cI);
}else if(dU===cF){dX.push(cJ,this.$$store.theme[name],cI);
}else if(dU===cR){dX.push(cJ,this.$$store.init[name],cK);
}}dX.push(bK);
if(dU===cG||dU===cE||dU===cF||dU===cD){dX.push(de);

if(dU===cE){dX.push(cJ,this.$$store.runtime[name],cI);
}else if(dU===cG){dX.push(cJ,this.$$store.user[name],cI);
}else if(dU===cF){dX.push(cJ,this.$$store.theme[name],cI);
}else if(dU===cD){if(dW){dX.push(cJ,this.$$store.init[name],cI);
}else{dX.push(cJ,this.$$store.init[name],cK);
}dX.push(cH,this.$$store.useinit[name],cS);
}dX.push(bK);
}}
if(ec.inheritable){dX.push(U);

if(dU===cR){dX.push(bo);
}else{dX.push(bN,this.$$store.inherit[name],cK);
}dX.push(bW);
dX.push(cH,this.$$store.init[name],bS);
dX.push(cH,this.$$store.init[name],ch);
dX.push(cJ,this.$$store.init[name],cK);
dX.push(cH,this.$$store.useinit[name],cS);
dX.push(W);
dX.push(cB,this.$$store.useinit[name],bk);
dX.push(bK);
dX.push(co);
dX.push(dm);
dX.push(bm,this.$$store.inherit[name],cK);
dX.push(bK);
dX.push(bg);
dX.push(cB,this.$$store.inherit[name],cK);
dX.push(M,this.$$store.inherit[name],dj);
dX.push(bQ);
if(ec.init!==undefined&&dU!==cD){dX.push(cM,this.$$store.init[name],cm);
}else{dX.push(cn);
}dX.push(cV);
}else if(ea){if(dU!==cG&&dU!==cE&&dU!==cF){dX.push(cb);
}dX.push(co);
if(ec.init!==undefined&&dU!==cD){dX.push(cM,this.$$store.init[name],cm);
}else{dX.push(cn);
}}if(ea){if(ec.apply){dX.push(cH,ec.apply,P,name,bP);
}if(ec.event){dX.push(by,V,ec.event,K,bX,ec.event,E,Q);
}if(ec.inheritable&&eb._getChildren){dX.push(C);
dX.push(cs,this.$$method.refresh[name],bt,this.$$method.refresh[name],dn);
dX.push(bK);
}}if(dW){dX.push(O);
}return this.__iV(dS,eb,name,dU,dX,dV);
}},settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var g="$$hash",f="qx.core.ObjectRegistry";
qx.Bootstrap.define(f,{statics:{inShutDown:false,__gf:{},__gg:0,__gh:[],register:function(w){var z=this.__gf;

if(!z){return;
}var y=w.$$hash;

if(y==null){var x=this.__gh;

if(x.length>0){y=x.pop();
}else{y=(this.__gg++).toString(36);
}w.$$hash=y;
}{};
z[y]=w;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__gf;

if(n&&n[m]){delete n[m];
this.__gh.push(m);
}try{delete k.$$hash;
}catch(t){if(k.removeAttribute){k.removeAttribute(g);
}}},toHashCode:function(c){{};
var e=c.$$hash;

if(e!=null){return e;
}var d=this.__gh;

if(d.length>0){e=d.pop();
}else{e=(this.__gg++).toString(36);
}return c.$$hash=e;
},clearHashCode:function(h){{};
var j=h.$$hash;

if(j!=null){this.__gh.push(j);
try{delete h.$$hash;
}catch(o){if(h.removeAttribute){h.removeAttribute(g);
}}}},fromHashCode:function(u){return this.__gf[u]||null;
},shutdown:function(){this.inShutDown=true;
var q=this.__gf;
var s=[];

for(var r in q){s.push(r);
}s.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var p,i=0,l=s.length;

while(true){try{for(;i<l;i++){r=s[i];
p=q[r];

if(p&&p.dispose){p.dispose();
}}}catch(v){qx.log.Logger.error(this,"Could not dispose object "+p.toString()+": "+v);

if(i!==0){continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__gf;
},getRegistry:function(){return this.__gf;
}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Class.define(g,{statics:{define:function(name,u){if(u){if(u.include&&!(u.include instanceof Array)){u.include=[u.include];
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
},checkCompatibility:function(h){var m=this.flatten(h);
var n=m.length;

if(n<2){return true;
}var q={};
var p={};
var o={};
var k;

for(var i=0;i<n;i++){k=m[i];

for(var j in k.events){if(o[j]){throw new Error('Conflict between mixin "'+k.name+'" and "'+o[j]+'" in member "'+j+'"!');
}o[j]=k.name;
}
for(var j in k.properties){if(q[j]){throw new Error('Conflict between mixin "'+k.name+'" and "'+q[j]+'" in property "'+j+'"!');
}q[j]=k.name;
}
for(var j in k.members){if(p[j]){throw new Error('Conflict between mixin "'+k.name+'" and "'+p[j]+'" in member "'+j+'"!');
}p[j]=k.name;
}}return true;
},isCompatible:function(r,s){var t=qx.Class.getMixins(s);
t.push(r);
return qx.Mixin.checkCompatibility(t);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__dr:null,__ds:function(){}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var k="qx.client",j="on",i="mousedown",h="qx.bom.Event",g="mouseover",f="HTMLEvents";
qx.Bootstrap.define(h,{statics:{addNativeListener:qx.core.Variant.select(k,{"mshtml":function(l,m,n){l.attachEvent(j+m,n);
},"default":function(a,b,c){a.addEventListener(b,c,false);
}}),removeNativeListener:qx.core.Variant.select(k,{"mshtml":function(r,s,t){r.detachEvent(j+s,t);
},"default":function(v,w,x){v.removeEventListener(w,x,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(k,{"mshtml":function(e){if(e.type===g){return e.fromEvent;
}else{return e.toElement;
}},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(k,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==i&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(d){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(u){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(o,p){if(document.createEventObject){var q=document.createEventObject();
return o.fireEvent(j+p,q);
}else{var q=document.createEvent(f);
q.initEvent(p,true,true);
return !o.dispatchEvent(q);
}}}});
})();
(function(){var cn="|bubble",cm="|capture",cl="|",ck="_",cj="unload",ci="__er",ch="UNKNOWN_",cg="DOM_",cf="c",ce="WIN_",cb="capture",cd="qx.event.Manager",cc="__eq",ca="QX_";
qx.Bootstrap.define(cd,{construct:function(n){this.__eo=n;
if(n.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(n,cj,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(n,cj,arguments.callee);
self.dispose();
}));
}this.__ep={};
this.__eq={};
this.__er={};
this.__es={};
},statics:{__et:0,getNextUniqueId:function(){return (this.__et++).toString(36);
}},members:{__ep:null,__er:null,__eu:null,__eq:null,__es:null,__eo:null,getWindow:function(){return this.__eo;
},getHandler:function(be){var bf=this.__eq[be.classname];

if(bf){return bf;
}return this.__eq[be.classname]=new be(this);
},getDispatcher:function(co){var cp=this.__er[co.classname];

if(cp){return cp;
}return this.__er[co.classname]=new co(this);
},getListeners:function(bg,bh,bi){var bj=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bl=this.__ep[bj];

if(!bl){return null;
}var bm=bh+(bi?cm:cn);
var bk=bl[bm];
return bk?bk.concat():null;
},serializeListeners:function(bD){var bK=bD.$$hash||qx.core.ObjectRegistry.toHashCode(bD);
var bM=this.__ep[bK];
var bI=[];

if(bM){var bG,bL,bE,bH,bJ;

for(var bF in bM){bG=bF.indexOf(cl);
bL=bF.substring(0,bG);
bE=bF.charAt(bG+1)==cf;
bH=bM[bF];

for(var i=0,l=bH.length;i<l;i++){bJ=bH[i];
bI.push({self:bJ.context,handler:bJ.handler,type:bL,capture:bE});
}}}return bI;
},toggleAttachedEvents:function(J,K){var P=J.$$hash||qx.core.ObjectRegistry.toHashCode(J);
var R=this.__ep[P];

if(R){var M,Q,L,N;

for(var O in R){M=O.indexOf(cl);
Q=O.substring(0,M);
L=O.charCodeAt(M+1)===99;
N=R[O];

if(K){this.__ev(J,Q,L);
}else{this.__ew(J,Q,L);
}}}},hasListener:function(C,D,E){{};
var F=C.$$hash||qx.core.ObjectRegistry.toHashCode(C);
var H=this.__ep[F];

if(!H){return false;
}var I=D+(E?cm:cn);
var G=H[I];
return G&&G.length>0;
},importListeners:function(bu,bv){{};
var bB=bu.$$hash||qx.core.ObjectRegistry.toHashCode(bu);
var bC=this.__ep[bB]={};
var by=qx.event.Manager;

for(var bw in bv){var bz=bv[bw];
var bA=bz.type+(bz.capture?cm:cn);
var bx=bC[bA];

if(!bx){bx=bC[bA]=[];
this.__ev(bu,bz.type,bz.capture);
}bx.push({handler:bz.listener,context:bz.self,unique:bz.unique||(by.__et++).toString(36)});
}},addListener:function(S,T,U,self,V){var ba;
{};
var bb=S.$$hash||qx.core.ObjectRegistry.toHashCode(S);
var bd=this.__ep[bb];

if(!bd){bd=this.__ep[bb]={};
}var Y=T+(V?cm:cn);
var X=bd[Y];

if(!X){X=bd[Y]=[];
}if(X.length===0){this.__ev(S,T,V);
}var bc=(qx.event.Manager.__et++).toString(36);
var W={handler:U,context:self,unique:bc};
X.push(W);
return Y+cl+bc;
},findHandler:function(cq,cr){var cB=false,cu=false,cC=false;
var cA;

if(cq.nodeType===1){cB=true;
cA=cg+cq.tagName.toLowerCase()+ck+cr;
}else if(cq==this.__eo){cu=true;
cA=ce+cr;
}else if(cq.classname){cC=true;
cA=ca+cq.classname+ck+cr;
}else{cA=ch+cq+ck+cr;
}var cw=this.__es;

if(cw[cA]){return cw[cA];
}var cz=qx.event.Registration.getHandlers();
var cv=qx.event.IEventHandler;
var cx,cy,ct,cs;

for(var i=0,l=cz.length;i<l;i++){cx=cz[i];
ct=cx.SUPPORTED_TYPES;

if(ct&&!ct[cr]){continue;
}cs=cx.TARGET_CHECK;

if(cs){if(!cB&&cs===cv.TARGET_DOMNODE){continue;
}else if(!cu&&cs===cv.TARGET_WINDOW){continue;
}else if(!cC&&cs===cv.TARGET_OBJECT){continue;
}}cy=this.getHandler(cz[i]);

if(cx.IGNORE_CAN_HANDLE||cy.canHandleEvent(cq,cr)){cw[cA]=cy;
return cy;
}}return null;
},__ev:function(o,p,q){var r=this.findHandler(o,p);

if(r){r.registerEvent(o,p,q);
return;
}{};
},removeListener:function(s,t,u,self,v){var z;
{};
var A=s.$$hash||qx.core.ObjectRegistry.toHashCode(s);
var B=this.__ep[A];

if(!B){return false;
}var w=t+(v?cm:cn);
var x=B[w];

if(!x){return false;
}var y;

for(var i=0,l=x.length;i<l;i++){y=x[i];

if(y.handler===u&&y.context===self){qx.lang.Array.removeAt(x,i);

if(x.length==0){this.__ew(s,t,v);
}return true;
}}return false;
},removeListenerById:function(bN,bO){var bU;
{};
var bS=bO.split(cl);
var bX=bS[0];
var bP=bS[1].charCodeAt(0)==99;
var bW=bS[2];
var bV=bN.$$hash||qx.core.ObjectRegistry.toHashCode(bN);
var bY=this.__ep[bV];

if(!bY){return false;
}var bT=bX+(bP?cm:cn);
var bR=bY[bT];

if(!bR){return false;
}var bQ;

for(var i=0,l=bR.length;i<l;i++){bQ=bR[i];

if(bQ.unique===bW){qx.lang.Array.removeAt(bR,i);

if(bR.length==0){this.__ew(bN,bX,bP);
}return true;
}}return false;
},removeAllListeners:function(bn){var br=bn.$$hash||qx.core.ObjectRegistry.toHashCode(bn);
var bt=this.__ep[br];

if(!bt){return false;
}var bp,bs,bo;

for(var bq in bt){if(bt[bq].length>0){bp=bq.split(cl);
bs=bp[0];
bo=bp[1]===cb;
this.__ew(bn,bs,bo);
}}delete this.__ep[br];
return true;
},__ew:function(a,b,c){var d=this.findHandler(a,b);

if(d){d.unregisterEvent(a,b,c);
return;
}{};
},dispatchEvent:function(e,event){var k;
{};
var m=event.getType();

if(!event.getBubbles()&&!this.hasListener(e,m)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(e);
}var j=qx.event.Registration.getDispatchers();
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
},dispose:function(){qx.event.Registration.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,cc);
qx.util.DisposeUtil.disposeMap(this,ci);
this.__ep=this.__eo=this.__eu=this.__es=null;
}}});
})();
(function(){var g="qx.dom.Node",f="qx.client",e="";
qx.Class.define(g,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(b){return b.nodeType===
this.DOCUMENT?b:
b.ownerDocument||b.document;
},getWindow:qx.core.Variant.select(f,{"mshtml":function(h){if(h.nodeType==null){return h;
}if(h.nodeType!==this.DOCUMENT){h=h.ownerDocument;
}return h.parentWindow;
},"default":function(j){if(j.nodeType==null){return j;
}if(j.nodeType!==this.DOCUMENT){j=j.ownerDocument;
}return j.defaultView;
}}),getDocumentElement:function(k){return this.getDocument(k).documentElement;
},getBodyElement:function(m){return this.getDocument(m).body;
},isNode:function(l){return !!(l&&l.nodeType!=null);
},isElement:function(d){return !!(d&&d.nodeType===this.ELEMENT);
},isDocument:function(q){return !!(q&&q.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(c){return !!(c&&c.history&&c.location&&c.document);
},getText:function(o){if(!o||!o.nodeType){return null;
}
switch(o.nodeType){case 1:var i,a=[],p=o.childNodes,length=p.length;

for(i=0;i<length;i++){a[i]=this.getText(p[i]);
}return a.join(e);
case 2:return o.nodeValue;
break;
case 3:return o.nodeValue;
break;
}return null;
}}});
})();
(function(){var N="mshtml",M="qx.client",L="[object Array]",K="qx.lang.Array",J="Use qx.lang.Type.isArray() instead!",I="qx",H="number",G="Use the native Array access instead: arr[arr.length - 1]",F="Use the native Array access instead: arr[0]",E="string",D="Use 'clone()' instead!";
qx.Bootstrap.define(K,{statics:{isArray:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
return qx.lang.Type.isArray(e);
},toArray:function(m,n){return this.cast(m,Array,n);
},cast:function(P,Q,R){if(P.constructor===Q){return P;
}
if(qx.Class.hasInterface(P,qx.data.IListData)){var P=P.toArray();
}var S=new Q;
if(qx.core.Variant.isSet(M,N)){if(P.item){for(var i=R||0,l=P.length;i<l;i++){S.push(P[i]);
}return S;
}}if(Object.prototype.toString.call(P)===L&&R==null){S.push.apply(S,P);
}else{S.push.apply(S,Array.prototype.slice.call(P,R||0));
}return S;
},fromArguments:function(o,p){return Array.prototype.slice.call(o,p||0);
},fromCollection:function(a){if(qx.core.Variant.isSet(M,N)){if(a.item){var b=[];

for(var i=0,l=a.length;i<l;i++){b[i]=a[i];
}return b;
}}return Array.prototype.slice.call(a,0);
},fromShortHand:function(T){var V=T.length;
var U=qx.lang.Array.clone(T);
switch(V){case 1:U[1]=U[2]=U[3]=U[0];
break;
case 2:U[2]=U[0];
case 3:U[3]=U[1];
}return U;
},copy:function(bf){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
return qx.lang.Array.clone(bf);
},clone:function(q){return q.concat();
},getLast:function(c){qx.log.Logger.deprecatedMethodWarning(arguments.callee,G);
return c[c.length-1];
},getFirst:function(W){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
return W[0];
},insertAt:function(j,k,i){j.splice(i,0,k);
return j;
},insertBefore:function(A,B,C){var i=A.indexOf(C);

if(i==-1){A.push(B);
}else{A.splice(i,0,B);
}return A;
},insertAfter:function(bc,bd,be){var i=bc.indexOf(be);

if(i==-1||i==(bc.length-1)){bc.push(bd);
}else{bc.splice(i+1,0,bd);
}return bc;
},removeAt:function(r,i){return r.splice(i,1)[0];
},removeAll:function(O){O.length=0;
return this;
},append:function(ba,bb){{};
Array.prototype.push.apply(ba,bb);
return ba;
},exclude:function(bg,bh){{};

for(var i=0,bj=bh.length,bi;i<bj;i++){bi=bg.indexOf(bh[i]);

if(bi!=-1){bg.splice(bi,1);
}}return bg;
},remove:function(s,t){var i=s.indexOf(t);

if(i!=-1){s.splice(i,1);
return t;
}},contains:function(X,Y){return X.indexOf(Y)!==-1;
},equals:function(g,h){var length=g.length;

if(length!==h.length){return false;
}
for(var i=0;i<length;i++){if(g[i]!==h[i]){return false;
}}return true;
},sum:function(bx){var by=0;

for(var i=0,l=bx.length;i<l;i++){by+=bx[i];
}return by;
},max:function(u){{};
var i,w=u.length,v=u[0];

for(i=1;i<w;i++){if(u[i]>v){v=u[i];
}}return v===undefined?null:v;
},min:function(x){{};
var i,z=x.length,y=x[0];

for(i=1;i<z;i++){if(x[i]<y){y=x[i];
}}return y===undefined?null:y;
},unique:function(bk){var bu=[],bm={},bp={},br={};
var bq,bl=0;
var bv=I+qx.lang.Date.now();
var bn=false,bt=false,bw=false;
for(var i=0,bs=bk.length;i<bs;i++){bq=bk[i];
if(bq===null){if(!bn){bn=true;
bu.push(bq);
}}else if(bq===undefined){}else if(bq===false){if(!bt){bt=true;
bu.push(bq);
}}else if(bq===true){if(!bw){bw=true;
bu.push(bq);
}}else if(typeof bq===E){if(!bm[bq]){bm[bq]=1;
bu.push(bq);
}}else if(typeof bq===H){if(!bp[bq]){bp[bq]=1;
bu.push(bq);
}}else{bo=bq[bv];

if(bo==null){bo=bq[bv]=bl++;
}
if(!br[bo]){br[bo]=bq;
bu.push(bq);
}}}for(var bo in br){try{delete br[bo][bv];
}catch(f){try{br[bo][bv]=null;
}catch(d){throw new Error("Cannot clean-up map entry doneObjects["+bo+"]["+bv+"]");
}}}return bu;
}}});
})();
(function(){var H="()",G=".",F=".prototype.",E="Use qx.lang.Type.isFunction() instead!",D='anonymous()',C="qx.lang.Function",B=".constructor()";
qx.Bootstrap.define(C,{statics:{isFunction:function(I){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E);
return qx.lang.Type.isFunction(I);
},getCaller:function(J){return J.caller?J.caller.callee:J.callee.caller;
},getName:function(e){if(e.displayName){return e.displayName;
}
if(e.$$original||e.wrapper||e.classname){return e.classname+B;
}
if(e.$$mixin){for(var g in e.$$mixin.$$members){if(e.$$mixin.$$members[g]==e){return e.$$mixin.name+F+g+H;
}}for(var g in e.$$mixin){if(e.$$mixin[g]==e){return e.$$mixin.name+G+g+H;
}}}
if(e.self){var h=e.self.constructor;

if(h){for(var g in h.prototype){if(h.prototype[g]==e){return h.classname+F+g+H;
}}for(var g in h){if(h[g]==e){return h.classname+G+g+H;
}}}}var f=e.toString().match(/function\s*(\w*)\s*\(.*/);

if(f&&f.length>=1&&f[1]){return f[1]+H;
}return D;
},globalEval:function(p){if(window.execScript){return window.execScript(p);
}else{return eval.call(window,p);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(i,j){{};
if(!j){return i;
}if(!(j.self||j.args||j.delay!=null||j.periodical!=null||j.attempt)){return i;
}return function(event){{};
var b=qx.lang.Array.fromArguments(arguments);
if(j.args){b=j.args.concat(b);
}
if(j.delay||j.periodical){var a=qx.event.GlobalError.observeMethod(function(){return i.apply(j.self||this,b);
});

if(j.delay){return window.setTimeout(a,j.delay);
}
if(j.periodical){return window.setInterval(a,j.periodical);
}}else if(j.attempt){var c=false;

try{c=i.apply(j.self||this,b);
}catch(v){}return c;
}else{return i.apply(j.self||this,b);
}};
},bind:function(q,self,r){return this.create(q,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(z,A){return this.create(z,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(k,self,l){if(arguments.length<3){return function(event){return k.call(self||this,event||window.event);
};
}else{var m=qx.lang.Array.fromArguments(arguments,2);
return function(event){var d=[event||window.event];
d.push.apply(d,m);
k.apply(self||this,d);
};
}},attempt:function(n,self,o){return this.create(n,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(s,t,self,u){return this.create(s,{delay:t,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(w,x,self,y){return this.create(w,{periodical:x,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var s="qx.event.Registration";
qx.Bootstrap.define(s,{statics:{__ed:{},getManager:function(l){if(l==null){{};
l=window;
}else if(l.nodeType){l=qx.dom.Node.getWindow(l);
}else if(!qx.dom.Node.isWindow(l)){l=window;
}var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);
var m=this.__ed[n];

if(!m){m=new qx.event.Manager(l);
this.__ed[n]=m;
}return m;
},removeManager:function(h){var i=qx.core.ObjectRegistry.toHashCode(h.getWindow());
delete this.__ed[i];
},addListener:function(o,p,q,self,r){return this.getManager(o).addListener(o,p,q,self,r);
},removeListener:function(D,E,F,self,G){return this.getManager(D).removeListener(D,E,F,self,G);
},removeListenerById:function(j,k){return this.getManager(j).removeListenerById(j,k);
},removeAllListeners:function(c){return this.getManager(c).removeAllListeners(c);
},hasListener:function(d,e,f){return this.getManager(d).hasListener(d,e,f);
},serializeListeners:function(A){return this.getManager(A).serializeListeners(A);
},createEvent:function(N,O,P){{};
if(O==null){O=qx.event.type.Event;
}var Q=qx.event.Pool.getInstance().getObject(O);

if(!Q){return;
}P?Q.init.apply(Q,P):Q.init();
if(N){Q.setType(N);
}return Q;
},dispatchEvent:function(z,event){return this.getManager(z).dispatchEvent(z,event);
},fireEvent:function(H,I,J,K){var L;
{};
var M=this.createEvent(I,J||null,K);
return this.getManager(H).dispatchEvent(H,M);
},fireNonBubblingEvent:function(t,u,v,w){{};
var x=this.getManager(t);

if(!x.hasListener(t,u,false)){return true;
}var y=this.createEvent(u,v||null,w);
return x.dispatchEvent(t,y);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__ee:[],addHandler:function(g){{};
this.__ee.push(g);
this.__ee.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__ee;
},__ef:[],addDispatcher:function(B,C){{};
this.__ef.push(B);
this.__ef.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__ef;
}}});
})();
(function(){var g="qx.log.appender.RingBuffer";
qx.Bootstrap.define(g,{construct:function(h){this.__iH=[];
this.setMaxMessages(h||50);
},members:{__iI:0,__iH:null,__iJ:50,setMaxMessages:function(i){this.__iJ=i;
this.clearHistory();
},getMaxMessages:function(){return this.__iJ;
},process:function(a){var b=this.getMaxMessages();

if(this.__iH.length<b){this.__iH.push(a);
}else{this.__iH[this.__iI++]=a;

if(this.__iI>=b){this.__iI=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__iH.length){c=this.__iH.length;
}
if(this.__iH.length==this.getMaxMessages()){var e=this.__iI-1;
}else{e=this.__iH.length-1;
}var d=e-c+1;

if(d<0){d+=this.__iH.length;
}var f;

if(d<=e){f=this.__iH.slice(d,e+1);
}else{f=this.__iH.slice(d,this.__iH.length).concat(this.__iH.slice(0,e+1));
}return f;
},clearHistory:function(){this.__iH=[];
this.__iI=0;
}}});
})();
(function(){var w="node",v="error",u="...(+",t="array",s=")",r="info",q="instance",p="string",o="null",n="class",R="number",Q="stringify",P="]",O="unknown",N="function",M="boolean",L="debug",K="map",J="undefined",I="qx.log.Logger",D=")}",E="#",B="warn",C="document",z="{...(",A="[",x="text[",y="[...(",F="\n",G=")]",H="object";
qx.Bootstrap.define(I,{statics:{__eg:L,setLevel:function(f){this.__eg=f;
},getLevel:function(){return this.__eg;
},setTreshold:function(V){this.__ej.setMaxMessages(V);
},getTreshold:function(){return this.__ej.getMaxMessages();
},__eh:{},__ei:0,register:function(c){if(c.$$id){return;
}var d=this.__ei++;
this.__eh[d]=c;
c.$$id=d;
var e=this.__ej.getAllLogEvents();

for(var i=0,l=e.length;i<l;i++){c.process(e[i]);
}},unregister:function(bq){var br=bq.$$id;

if(br==null){return;
}delete this.__eh[br];
delete bq.$$id;
},debug:function(a,b){this.__el(L,arguments);
},info:function(bs,bt){this.__el(r,arguments);
},warn:function(bo,bp){this.__el(B,arguments);
},error:function(bu,bv){this.__el(v,arguments);
},trace:function(bk){this.__el(r,[bk,qx.dev.StackTrace.getStackTrace().join(F)]);
},deprecatedMethodWarning:function(bl,bm){var bn;
{};
},deprecatedClassWarning:function(bh,bi){var bj;
{};
},deprecatedEventWarning:function(S,event,T){var U;
{};
},deprecatedMixinWarning:function(g,h){var j;
{};
},clear:function(){this.__ej.clearHistory();
},__ej:new qx.log.appender.RingBuffer(50),__ek:{debug:0,info:1,warn:2,error:3},__el:function(W,X){var bd=this.__ek;

if(bd[W]<bd[this.__eg]){return;
}var ba=X.length<2?null:X[0];
var bc=ba?1:0;
var Y=[];

for(var i=bc,l=X.length;i<l;i++){Y.push(this.__en(X[i],true));
}var be=new Date;
var bf={time:be,offset:be-qx.Bootstrap.LOADSTART,level:W,items:Y,win:window};
if(ba){if(ba instanceof qx.core.Object){bf.object=ba.$$hash;
}else if(ba.$$type){bf.clazz=ba;
}}this.__ej.process(bf);
var bg=this.__eh;

for(var bb in bg){bg[bb].process(bf);
}},__em:function(k){if(k===undefined){return J;
}else if(k===null){return o;
}
if(k.$$type){return n;
}var m=typeof k;

if(m===N||m==p||m===R||m===M){return m;
}else if(m===H){if(k.nodeType){return w;
}else if(k.classname){return q;
}else if(k instanceof Array){return t;
}else if(k instanceof Error){return v;
}else{return K;
}}
if(k.toString){return Q;
}return O;
},__en:function(bw,bx){var bE=this.__em(bw);
var bA=O;
var bz=[];

switch(bE){case o:case J:bA=bE;
break;
case p:case R:case M:bA=bw;
break;
case w:if(bw.nodeType===9){bA=C;
}else if(bw.nodeType===3){bA=x+bw.nodeValue+P;
}else if(bw.nodeType===1){bA=bw.nodeName.toLowerCase();

if(bw.id){bA+=E+bw.id;
}}else{bA=w;
}break;
case N:bA=qx.lang.Function.getName(bw)||bE;
break;
case q:bA=bw.basename+A+bw.$$hash+P;
break;
case n:case Q:bA=bw.toString();
break;
case v:bz=qx.dev.StackTrace.getStackTraceFromError(bw);
bA=bw.toString();
break;
case t:if(bx){bA=[];

for(var i=0,l=bw.length;i<l;i++){if(bA.length>20){bA.push(u+(l-i)+s);
break;
}bA.push(this.__en(bw[i],false));
}}else{bA=y+bw.length+G;
}break;
case K:if(bx){var by;
var bD=[];

for(var bC in bw){bD.push(bC);
}bD.sort();
bA=[];

for(var i=0,l=bD.length;i<l;i++){if(bA.length>20){bA.push(u+(l-i)+s);
break;
}bC=bD[i];
by=this.__en(bw[bC],false);
by.key=bC;
bA.push(by);
}}else{var bB=0;

for(var bC in bw){bB++;
}bA=z+bB+D;
}break;
}return {type:bE,text:bA,trace:bz};
}}});
})();
(function(){var B="set",A="get",z="reset",y="qx.core.Object",x="]",w="[",v="$$user_",u="__iL",t="Object";
qx.Class.define(y,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:t},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+w+this.$$hash+x;
},base:function(bn,bo){if(arguments.length===1){return bn.callee.base.call(this);
}else{return bn.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bE){return bE.callee.self;
},clone:function(){var bg=this.constructor;
var bf=new bg;
var bi=qx.Class.getProperties(bg);
var bh=qx.core.Property.$$store.user;
var bj=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bi.length;i<l;i++){name=bi[i];

if(this.hasOwnProperty(bh[name])){bf[bj[name]](this[bh[name]]);
}}return bf;
},serialize:function(){var bq=this.constructor;
var bs=qx.Class.getProperties(bq);
var bt=qx.core.Property.$$store.user;
var name,bp;
var br={classname:bq.classname,properties:{}};
for(var i=0,l=bs.length;i<l;i++){name=bs[i];

if(this.hasOwnProperty(bt[name])){bp=this[bt[name]];

if(bp instanceof qx.core.Object){br.properties[name]={$$hash:bp.$$hash};
}else{br.properties[name]=bp;
}}}return br;
},set:function(Q,R){var T=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(Q)){if(!this[T[Q]]){if(this[B+qx.lang.String.firstUp(Q)]!=undefined){this[B+qx.lang.String.firstUp(Q)](R);
return;
}{};
}return this[T[Q]](R);
}else{for(var S in Q){if(!this[T[S]]){if(this[B+qx.lang.String.firstUp(S)]!=undefined){this[B+qx.lang.String.firstUp(S)](Q[S]);
continue;
}{};
}this[T[S]](Q[S]);
}return this;
}},get:function(bx){var by=qx.core.Property.$$method.get;

if(!this[by[bx]]){if(this[A+qx.lang.String.firstUp(bx)]!=undefined){return this[A+qx.lang.String.firstUp(bx)]();
}{};
}return this[by[bx]]();
},reset:function(a){var b=qx.core.Property.$$method.reset;

if(!this[b[a]]){if(this[z+qx.lang.String.firstUp(a)]!=undefined){this[z+qx.lang.String.firstUp(a)]();
return;
}{};
}this[b[a]]();
},__iK:qx.event.Registration,addListener:function(bk,bl,self,bm){if(!this.$$disposed){return this.__iK.addListener(this,bk,bl,self,bm);
}return null;
},addListenerOnce:function(p,q,self,r){var s=function(e){q.call(self||this,e);
this.removeListener(p,s,this,r);
};
return this.addListener(p,s,this,r);
},removeListener:function(bc,bd,self,be){if(!this.$$disposed){return this.__iK.removeListener(this,bc,bd,self,be);
}return false;
},removeListenerById:function(d){if(!this.$$disposed){return this.__iK.removeListenerById(this,d);
}return false;
},hasListener:function(ba,bb){return this.__iK.hasListener(this,ba,bb);
},dispatchEvent:function(bz){if(!this.$$disposed){return this.__iK.dispatchEvent(this,bz);
}return true;
},fireEvent:function(m,n,o){if(!this.$$disposed){return this.__iK.fireEvent(this,m,n,o);
}return true;
},fireNonBubblingEvent:function(f,g,h){if(!this.$$disposed){return this.__iK.fireNonBubblingEvent(this,f,g,h);
}return true;
},fireDataEvent:function(U,V,W,X){if(!this.$$disposed){if(W===undefined){W=null;
}return this.__iK.fireNonBubblingEvent(this,U,qx.event.type.Data,[V,W,!!X]);
}return true;
},__iL:null,setUserData:function(bu,bv){if(!this.__iL){this.__iL={};
}this.__iL[bu]=bv;
},getUserData:function(bC){if(!this.__iL){return null;
}var bD=this.__iL[bC];
return bD===undefined?null:bD;
},__iM:qx.log.Logger,debug:function(C){this.__iM.debug(this,C);
},info:function(k){this.__iM.info(this,k);
},warn:function(c){this.__iM.warn(this,c);
},error:function(bB){this.__iM.error(this,bB);
},trace:function(){this.__iM.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var O,M;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var N=this.constructor;
var L;

while(N.superclass){if(N.$$destructor){N.$$destructor.call(this);
}if(N.$$includes){L=N.$$flatIncludes;

for(var i=0,l=L.length;i<l;i++){if(L[i].$$destructor){L[i].$$destructor.call(this);
}}}N=N.superclass;
}var P=qx.Class.getProperties(this.constructor);

for(var i=0,l=P.length;i<l;i++){delete this[v+P[i]];
}{};
},_disposeFields:function(Y){qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bw){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(j){qx.util.DisposeUtil.disposeMap(this,j);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bF){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(u);
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
(function(){var u="",t="g",s="0",r='\\$1',q="%",p='-',o="qx.lang.String",n=' ',m='\n',l="undefined";
qx.Bootstrap.define(o,{statics:{camelCase:function(h){return h.replace(/\-([a-z])/g,function(M,N){return N.toUpperCase();
});
},hyphenate:function(I){return I.replace(/[A-Z]/g,function(f){return (p+f.charAt(0).toLowerCase());
});
},capitalize:function(z){return z.replace(/\b[a-z]/g,function(v){return v.toUpperCase();
});
},clean:function(g){return this.trim(g.replace(/\s+/g,n));
},trimLeft:function(G){return G.replace(/^\s+/,u);
},trimRight:function(H){return H.replace(/\s+$/,u);
},trim:function(a){return a.replace(/^\s+|\s+$/g,u);
},startsWith:function(E,F){return E.indexOf(F)===0;
},endsWith:function(j,k){return j.substring(j.length-k.length,j.length)===k;
},pad:function(w,length,x){if(typeof x===l){x=s;
}var y=u;

for(var i=w.length;i<length;i++){y+=x;
}return y+w;
},firstUp:function(K){return K.charAt(0).toUpperCase()+K.substr(1);
},firstLow:function(e){return e.charAt(0).toLowerCase()+e.substr(1);
},contains:function(O,P){return O.indexOf(P)!=-1;
},format:function(b,c){var d=b;

for(var i=0;i<c.length;i++){d=d.replace(new RegExp(q+(i+1),t),c[i]);
}return d;
},escapeRegexpChars:function(Q){return Q.replace(/([.*+?^${}()|[\]\/\\])/g,r);
},toArray:function(J){return J.split(/\B|\b/g);
},stripTags:function(L){return L.replace(/<\/?[^>]+>/gi,u);
},stripScripts:function(A,B){var D=u;
var C=A.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){D+=arguments[1]+m;
return u;
});

if(B===true){qx.lang.Function.globalEval(D);
}return C;
}}});
})();
(function(){var x="function",w="Boolean",v="qx.Interface",u="]",t="toggle",s="Interface",r="is",q="[Interface ";
qx.Class.define(v,{statics:{define:function(name,P){if(P){if(P.extend&&!(P.extend instanceof Array)){P.extend=[P.extend];
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
}Q.$$type=s;
Q.name=name;
Q.toString=this.genericToString;
Q.basename=qx.Bootstrap.createNamespace(name,Q);
qx.Interface.$$registry[name]=Q;
return Q;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(y){if(!y){return [];
}var z=y.concat();

for(var i=0,l=y.length;i<l;i++){if(y[i].$$extends){z.push.apply(z,this.flatten(y[i].$$extends));
}}return z;
},__eG:function(G,H,I,J){var N=I.$$members;

if(N){for(var M in N){if(qx.lang.Type.isFunction(N[M])){var L=this.__eH(H,M);
var K=L||qx.lang.Type.isFunction(G[M]);

if(!K){throw new Error('Implementation of method "'+M+'" is missing in class "'+H.classname+'" required by interface "'+I.name+'"');
}var O=J===true&&!L&&!qx.Class.hasInterface(H,I);

if(O){G[M]=this.__eK(I,G[M],M,N[M]);
}}else{if(typeof G[M]===undefined){if(typeof G[M]!==x){throw new Error('Implementation of member "'+M+'" is missing in class "'+H.classname+'" required by interface "'+I.name+'"');
}}}}}},__eH:function(A,B){var F=B.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!F){return false;
}var C=qx.lang.String.firstLow(F[2]);
var D=qx.Class.hasProperty(A,C);

if(!D){return false;
}var E=F[0]==r||F[0]==t;

if(E){return qx.Class.getPropertyDefinition(A,C).check==w;
}return true;
},__eI:function(n,o){if(o.$$properties){for(var p in o.$$properties){if(!qx.Class.hasProperty(n,p)){throw new Error('The property "'+p+'" is not supported by Class "'+n.classname+'"!');
}}}},__eJ:function(e,f){if(f.$$events){for(var g in f.$$events){if(!qx.Class.supportsEvent(e,g)){throw new Error('The event "'+g+'" is not supported by Class "'+e.classname+'"!');
}}}},assertObject:function(a,b){var d=a.constructor;
this.__eG(a,d,b,false);
this.__eI(d,b);
this.__eJ(d,b);
var c=b.$$extends;

if(c){for(var i=0,l=c.length;i<l;i++){this.assertObject(a,c[i]);
}}},assert:function(h,j,k){this.__eG(h.prototype,h,j,k);
this.__eI(h,j);
this.__eJ(h,j);
var m=j.$$extends;

if(m){for(var i=0,l=m.length;i<l;i++){this.assert(h,m[i],k);
}}},genericToString:function(){return q+this.name+u;
},$$registry:{},__eK:function(){},__eL:null,__eM:function(){}}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__jY:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__jY=null;
},getInsets:function(){if(this.__jY){return this.__jY;
}var j=this._getDefaultInsets();
return this.__jY={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__jY=null;
}}});
})();
(function(){var j="_applyBackground",i="repeat",h="backgroundPositionX",g="backgroundPositionY",f="no-repeat",e="scale",d="repeat-x",c="repeat-y",b="qx.ui.decoration.MBackgroundImage",a="String";
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:j},backgroundRepeat:{check:[i,d,c,f,e],init:i,apply:j},backgroundPositionX:{nullable:true,apply:j},backgroundPositionY:{nullable:true,apply:j},backgroundPosition:{group:[g,h]}},members:{_generateBackgroundMarkup:function(k){var l=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),this.getBackgroundPositionX(),this.getBackgroundPositionY(),k);
return l;
},_applyBackground:function(){{};
}}});
})();
(function(){var w="_applyStyle",v="Color",u="px",t="solid",s="dotted",r="double",q="border:",p="__kb",o="dashed",n="",h="_applyWidth",m="qx.ui.decoration.Uniform",k="px ",g="__insets",f="position:absolute;top:0;left:0;",j=" ",i=";",l="scale",e="PositiveInteger";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(x,y,z){arguments.callee.base.call(this);
if(x!=null){this.setWidth(x);
}
if(y!=null){this.setStyle(y);
}
if(z!=null){this.setColor(z);
}},properties:{width:{check:e,init:0,apply:h},style:{nullable:true,check:[t,s,o,r],init:t,apply:w},color:{nullable:true,check:v,apply:w},backgroundColor:{check:v,nullable:true,apply:w}},members:{__kb:null,_getDefaultInsets:function(){var d=this.getWidth();
return {top:d,right:d,bottom:d,left:d};
},_isInitialized:function(){return !!this.__kb;
},getMarkup:function(){if(this.__kb){return this.__kb;
}var A=f;
var B=this.getWidth();
{};
var D=qx.theme.manager.Color.getInstance();
A+=q+B+k+this.getStyle()+j+D.resolve(this.getColor())+i;
var C=this._generateBackgroundMarkup(A);
return this.__kb=C;
},resize:function(E,F,G){var I=this.getBackgroundImage()&&this.getBackgroundRepeat()==l;

if(I||qx.bom.client.Feature.CONTENT_BOX){var H=this.getWidth()*2;
F-=H;
G-=H;
if(F<0){F=0;
}
if(G<0){G=0;
}}E.style.width=F+u;
E.style.height=G+u;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(p,g);
}});
})();
(function(){var h="px",g="__ka",f="position:absolute;top:0;left:0",e="qx.ui.decoration.Background",d="",c="__insets",b="_applyStyle",a="Color";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(m){arguments.callee.base.call(this);

if(m!=null){this.setBackgroundColor(m);
}},properties:{backgroundColor:{check:a,nullable:true,apply:b}},members:{__ka:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ka;
},getMarkup:function(){if(this.__ka){return this.__ka;
}var i=this._generateBackgroundMarkup(f);
return this.__ka=i;
},resize:function(n,o,p){n.style.width=o+h;
n.style.height=p+h;
},tint:function(j,k){var l=qx.theme.manager.Color.getInstance();

if(k==null){k=this.getBackgroundColor();
}j.style.backgroundColor=l.resolve(k)||d;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(g,c);
}});
})();
(function(){var w="px",v="0px",u="-1px",t="no-repeat",s="scale-x",r="scale-y",q="-tr",p="-l",o="__insets",n='</div>',O="scale",N="qx.client",M="-br",L="-t",K="__kp",J="-tl",I="-r",H='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',G="_applyBaseImage",F="-b",D="String",E="",B="-bl",C="__kq",z="-c",A="mshtml",x="__ko",y="qx.ui.decoration.Grid";
qx.Class.define(y,{extend:qx.ui.decoration.Abstract,construct:function(P,Q){arguments.callee.base.call(this);
if(P!=null){this.setBaseImage(P);
}
if(Q!=null){this.setInsets(Q);
}},properties:{baseImage:{check:D,nullable:true,apply:G}},members:{__ko:null,__kp:null,__kq:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ko;
},getMarkup:function(){if(this.__ko){return this.__ko;
}var R=qx.bom.element.Decoration;
var S=this.__kp;
var T=this.__kq;
var U=[];
U.push(H);
U.push(R.create(S.tl,t,{top:0,left:0}));
U.push(R.create(S.t,s,{top:0,left:T.left+w}));
U.push(R.create(S.tr,t,{top:0,right:0}));
U.push(R.create(S.bl,t,{bottom:0,left:0}));
U.push(R.create(S.b,s,{bottom:0,left:T.left+w}));
U.push(R.create(S.br,t,{bottom:0,right:0}));
U.push(R.create(S.l,r,{top:T.top+w,left:0}));
U.push(R.create(S.c,O,{top:T.top+w,left:T.left+w}));
U.push(R.create(S.r,r,{top:T.top+w,right:0}));
U.push(n);
return this.__ko=U.join(E);
},resize:function(a,b,c){var d=this.__kq;
var innerWidth=b-d.left-d.right;
var innerHeight=c-d.top-d.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}a.style.width=b+w;
a.style.height=c+w;
a.childNodes[1].style.width=innerWidth+w;
a.childNodes[4].style.width=innerWidth+w;
a.childNodes[7].style.width=innerWidth+w;
a.childNodes[6].style.height=innerHeight+w;
a.childNodes[7].style.height=innerHeight+w;
a.childNodes[8].style.height=innerHeight+w;

if(qx.core.Variant.isSet(N,A)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(b%2==1){a.childNodes[2].style.marginRight=u;
a.childNodes[5].style.marginRight=u;
a.childNodes[8].style.marginRight=u;
}else{a.childNodes[2].style.marginRight=v;
a.childNodes[5].style.marginRight=v;
a.childNodes[8].style.marginRight=v;
}
if(c%2==1){a.childNodes[3].style.marginBottom=u;
a.childNodes[4].style.marginBottom=u;
a.childNodes[5].style.marginBottom=u;
}else{a.childNodes[3].style.marginBottom=v;
a.childNodes[4].style.marginBottom=v;
a.childNodes[5].style.marginBottom=v;
}}}},tint:function(V,W){},_applyBaseImage:function(e,f){{};
var g=qx.util.ResourceManager.getInstance();

if(e){var i=qx.util.AliasManager.getInstance();
var k=i.resolve(e);
var l=/(.*)(\.[a-z]+)$/.exec(k);
var j=l[1];
var h=l[2];
var m=this.__kp={tl:j+J+h,t:j+L+h,tr:j+q+h,bl:j+B+h,b:j+F+h,br:j+M+h,l:j+p+h,c:j+z+h,r:j+I+h};
this.__kq={top:g.getImageHeight(m.t),bottom:g.getImageHeight(m.b),left:g.getImageWidth(m.l),right:g.getImageWidth(m.r)};
}}},destruct:function(){this._disposeFields(x,K,C,o);
}});
})();
(function(){var m="_applyStyle",l='"></div>',k="Color",j='<div style="',i='border:',h="1px solid ",g="",f=";",e="px",d='</div>',z="qx.ui.decoration.Beveled",y="__insets",x='<div style="position:absolute;top:1px;left:1px;',w='border-bottom:',v='border-right:',u="position:absolute;top:1px;left:1px;",t='border-left:',s='border-top:',r="Number",q='<div style="position:absolute;top:1px;left:0px;',o='position:absolute;top:0px;left:1px;',p='<div style="overflow:hidden;font-size:0;line-height:0;">',n="__nc";
qx.Class.define(z,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setOuterColor(a);
}
if(b!=null){this.setInnerColor(b);
}
if(c!=null){this.setInnerOpacity(c);
}},properties:{innerColor:{check:k,nullable:true,apply:m},innerOpacity:{check:r,init:1,apply:m},outerColor:{check:k,nullable:true,apply:m},backgroundColor:{check:k,nullable:true,apply:m}},members:{__nc:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__nc;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__nc){return this.__nc;
}var L=qx.theme.manager.Color.getInstance();
var M=[];
var O=h+L.resolve(this.getOuterColor())+f;
var N=h+L.resolve(this.getInnerColor())+f;
M.push(p);
M.push(j);
M.push(i,O);
M.push(qx.bom.element.Opacity.compile(0.35));
M.push(l);
M.push(q);
M.push(t,O);
M.push(v,O);
M.push(l);
M.push(j);
M.push(o);
M.push(s,O);
M.push(w,O);
M.push(l);
M.push(this._generateBackgroundMarkup(u));
M.push(x);
M.push(i,N);
M.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
M.push(l);
M.push(d);
return this.__nc=M.join(g);
},resize:function(A,B,C){if(B<4){B=4;
}
if(C<4){C=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=B-2;
var outerHeight=C-2;
var I=outerWidth;
var H=outerHeight;
var innerWidth=B-4;
var innerHeight=C-4;
}else{var outerWidth=B;
var outerHeight=C;
var I=B-2;
var H=C-2;
var innerWidth=I;
var innerHeight=H;
}var K=e;
var G=A.childNodes[0].style;
G.width=outerWidth+K;
G.height=outerHeight+K;
var F=A.childNodes[1].style;
F.width=outerWidth+K;
F.height=H+K;
var E=A.childNodes[2].style;
E.width=I+K;
E.height=outerHeight+K;
var D=A.childNodes[3].style;
D.width=I+K;
D.height=H+K;
var J=A.childNodes[4].style;
J.width=innerWidth+K;
J.height=innerHeight+K;
},tint:function(P,Q){var R=qx.theme.manager.Color.getInstance();

if(Q==null){Q=this.getBackgroundColor();
}P.childNodes[3].style.backgroundColor=R.resolve(Q)||g;
}},destruct:function(){this._disposeFields(n,y);
}});
})();
(function(){var o="_applyStyle",n="solid",m="Color",l="double",k="px ",j="dotted",i="_applyWidth",h="dashed",g="Number",f=" ",N=";",M="shorthand",L="px",K="widthTop",J="styleRight",I="styleLeft",H="widthLeft",G="widthBottom",F="",E="styleTop",v="colorBottom",w="styleBottom",t="widthRight",u="colorLeft",r="colorRight",s="colorTop",p="border-left:",q="scale",x="position:absolute;top:0;left:0;",y="__lI",A="border-top:",z="border-bottom:",C="border-right:",B="qx.ui.decoration.Single",D="__insets";
qx.Class.define(B,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(W,X,Y){arguments.callee.base.call(this);
if(W!=null){this.setWidth(W);
}
if(X!=null){this.setStyle(X);
}
if(Y!=null){this.setColor(Y);
}},properties:{widthTop:{check:g,init:0,apply:i},widthRight:{check:g,init:0,apply:i},widthBottom:{check:g,init:0,apply:i},widthLeft:{check:g,init:0,apply:i},styleTop:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleRight:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleBottom:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleLeft:{nullable:true,check:[n,j,h,l],init:n,apply:o},colorTop:{nullable:true,check:m,apply:o},colorRight:{nullable:true,check:m,apply:o},colorBottom:{nullable:true,check:m,apply:o},colorLeft:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o},left:{group:[H,I,u]},right:{group:[t,J,r]},top:{group:[K,E,s]},bottom:{group:[G,w,v]},width:{group:[K,t,G,H],mode:M},style:{group:[E,J,w,I],mode:M},color:{group:[s,r,v,u],mode:M}},members:{__lI:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__lI;
},getMarkup:function(R){if(this.__lI){return this.__lI;
}var S=qx.theme.manager.Color.getInstance();
var T=F;
var V=this.getWidthTop();

if(V>0){T+=A+V+k+this.getStyleTop()+f+S.resolve(this.getColorTop())+N;
}var V=this.getWidthRight();

if(V>0){T+=C+V+k+this.getStyleRight()+f+S.resolve(this.getColorRight())+N;
}var V=this.getWidthBottom();

if(V>0){T+=z+V+k+this.getStyleBottom()+f+S.resolve(this.getColorBottom())+N;
}var V=this.getWidthLeft();

if(V>0){T+=p+V+k+this.getStyleLeft()+f+S.resolve(this.getColorLeft())+N;
}{};
T+=x;
var U=this._generateBackgroundMarkup(T);
return this.__lI=U;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==q;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getInsets();
b-=d.left+d.right;
c-=d.top+d.bottom;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+L;
a.style.height=c+L;
},tint:function(O,P){var Q=qx.theme.manager.Color.getInstance();

if(P==null){P=this.getBackgroundColor();
}O.style.backgroundColor=Q.resolve(P)||F;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(y,D);
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bp="decoration/table/header-cell.png",bo="decoration/form/input.png",bn="#f8f8f8",bm="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bl="#b6b6b6",bk="background-pane",bj="repeat-y",bi="decoration/form/input-focused.png",bh="border-input",bg="decoration/scrollbar/scrollbar-button-bg-vertical.png",t="decoration/tabview/tab-button-top-active.png",u="decoration/form/button-c.png",r="decoration/scrollbar/scrollbar-bg-vertical.png",s="decoration/form/button.png",p="decoration/form/button-checked.png",q="decoration/tabview/tab-button-left-inactive.png",n="decoration/groupbox/groupbox.png",o="#FAFAFA",A="decoration/pane/pane.png",B="decoration/menu/background.png",L="decoration/toolbar/toolbar-part.gif",I="decoration/tabview/tab-button-top-inactive.png",T="decoration/menu/bar-background.png",O="center",bc="decoration/tabview/tab-button-bottom-active.png",Y="decoration/form/button-hovered.png",E="decoration/form/tooltip-error-arrow.png",bf="decoration/window/captionbar-inactive.png",be="qx/decoration/Modern",bd="decoration/window/statusbar.png",D="border-focused",G="decoration/selection.png",H="table-focus-indicator",K="#F2F2F2",M="decoration/form/button-checked-c.png",P="decoration/scrollbar/scrollbar-bg-horizontal.png",V="qx.theme.modern.Decoration",bb="#f4f4f4",v="decoration/shadow/shadow-small.png",w="decoration/app-header.png",F="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",W="decoration/tabview/tab-button-right-active.png",N="decoration/form/button-pressed.png",U="no-repeat",a="decoration/window/captionbar-active.png",ba="decoration/tabview/tab-button-left-active.png",x="background-splitpane",y="decoration/form/button-checked-focused.png",J="#C5C5C5",b="decoration/toolbar/toolbar-gradient.png",c="decoration/tabview/tab-button-right-inactive.png",C="#b8b8b8",z="decoration/shadow/shadow.png";
qx.Theme.define(V,{aliases:{decoration:be},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:n}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:E,backgroundPositionY:O,backgroundRepeat:U,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:z,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:v,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:P,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:r,backgroundRepeat:bj}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bm,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bm,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bg,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bg,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:p,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:y,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bh,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bh,innerColor:D,backgroundImage:bi,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bi,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:b,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bl,innerColor:bn,backgroundImage:u,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bl,innerColor:bn,backgroundImage:M,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:C,colorRight:bb,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:L,backgroundRepeat:bj}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:F,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:t}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:I}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:W}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:c}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bk,width:3,color:x,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bk,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:H,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthRight:1,colorRight:K,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:B,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:J,widthBottom:1,colorBottom:o}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:T,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:w,backgroundRepeat:l}}}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="X11",d="MacIntel",c="MacPPC";
qx.Bootstrap.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__ij:function(){var a=navigator.platform;
if(a==null||a===l){a=navigator.userAgent;
}
if(a.indexOf(f)!=-1||a.indexOf(m)!=-1||a.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(a.indexOf(h)!=-1||a.indexOf(c)!=-1||a.indexOf(d)!=-1||a.indexOf(n)!=-1||a.indexOf(g)!=-1){this.MAC=true;
this.NAME="mac";
}else if(a.indexOf(b)!=-1||a.indexOf(j)!=-1||a.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__ij();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",G=")",F="winxp",E="freebsd",D="sunos",C="SV1",B="|",A="nintendods",z="winnt4",y="wince",x="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="g",u="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(u,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__iF:{"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":F,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":z,"Win 9x 4.90":x,"Windows CE":y,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":E,"NetBSD":m,"OpenBSD":k,"SunOS":D,"Symbian System":t,"Nitro":A,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__iG:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__iF){J.push(I);
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
}else{this.NAME=this.__iF[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(C)!==-1){this.SP2=true;
}}}}},defer:function(H){H.__iG();
}});
})();
(function(){var m="Liberation Sans",l="Arial",k="Lucida Grande",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",d="monospace",a="Lucida Console",c="qx.theme.modern.Font",b="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l]},"bold":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l],bold:true},"small":{size:qx.bom.client.System.WINVISTA?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[a,e]:qx.bom.client.System.WINVISTA?[g]:[g,b,f,d]}}});
})();
(function(){var fm="button-frame",fl="atom",fk="widget",fj="main",fi="button",fh="bold",fg="middle",ff="text-selected",fe="background-light",fd="image",dQ="text-disabled",dP="groupbox",dO="cell",dN="border-invalid",dM="input",dL="input-disabled",dK="menu-button",dJ="decoration/arrows/down.png",dI="input-focused-invalid",dH="toolbar-button",ft="spinner",fu="input-focused",fr="selected",fs="popup",fp="tooltip",fq="list",fn="tree-item",fo="treevirtual-contract",fv="scrollbar",fw="datechooser/nav-button",eL="text-hovered",eK="center",eN="treevirtual-expand",eM="textfield",eP="label",eO="decoration/arrows/right.png",eR="background-application",eQ="radiobutton",eJ="invalid",eI="combobox",bT="right-top",bU="checkbox",bV="text-title",bW="qx/static/blank.gif",bX="scrollbar/button",bY="right",ca="combobox/button",cb="icon/16/places/folder.png",cc="text-label",cd="decoration/tree/closed.png",fK="scrollbar-slider-horizontal",fJ="white",fI="decoration/arrows/left.png",fH="button-focused",fO="text-light",fN="text-input",fM="slidebar/button-forward",fL="background-splitpane",fQ=".png",fP="decoration/tree/open.png",cU="default",cV="decoration/arrows/down-small.png",cS="datechooser",cT="slidebar/button-backward",cY="selectbox",da="treevirtual-folder",cW="shadow-popup",cX="icon/16/mimetypes/office-document.png",cQ="background-medium",cR="table",cx="decoration/form/",cw="",cz="-invalid",cy="icon/16/places/folder-open.png",ct="button-checked",cs="decoration/window/maximize-active-hovered.png",cv="radiobutton-hovered",cu="decoration/cursors/",cr="slidebar",cq="tooltip-error-arrow",dg="table-scroller-focus-indicator",dh="move-frame",di="nodrop",dj="decoration/table/boolean-true.png",dc="table-header-cell",dd="menu",de="app-header",df="row-layer",dk="text-inactive",dl="move",cJ="radiobutton-checked-focused",cI="decoration/window/restore-active-hovered.png",cH="shadow-window",cG="table-column-button",cF="right.png",cE="tabview-page-button-bottom-inactive",cD="tooltip-error",cC="window-statusbar",cN="button-hovered",cM="decoration/scrollbar/scrollbar-",dm="background-tip",dn="scrollbar-slider-horizontal-disabled",dp="table-scroller-header",dq="radiobutton-disabled",dr="button-pressed",ds="table-pane",dt="decoration/window/close-active.png",du="tabview-page-button-left-active",dv="checkbox-hovered",dw="button-invalid-shadow",dY="checkbox-checked",dX="decoration/window/minimize-active-hovered.png",dW="menubar",dV="icon/16/actions/dialog-cancel.png",ed="tabview-page-button-top-inactive",ec="tabview-page-button-left-inactive",eb="toolbar-button-checked",ea="decoration/tree/open-selected.png",eh="radiobutton-checked",eg="decoration/window/minimize-inactive.png",eE="icon/16/apps/office-calendar.png",eF="group",eC="tabview-page-button-right-inactive",eD="decoration/window/minimize-active.png",eA="decoration/window/restore-inactive.png",eB="checkbox-checked-focused",ey="splitpane",ez="combobox/textfield",eG="button-preselected-focused",eH="decoration/window/close-active-hovered.png",eV="qx/icon/Tango/16/actions/window-close.png",eU="checkbox-pressed",eX="button-disabled",eW="border-separator",fa="decoration/window/maximize-inactive.png",eY="icon/22/places/folder-open.png",fc="scrollarea",fb="scrollbar-vertical",eT="decoration/toolbar/toolbar-handle-knob.gif",eS="icon/22/mimetypes/office-document.png",fD="button-preselected",fE="button-checked-focused",fF="up.png",fG="decoration/tree/closed-selected.png",fz="qx.theme.modern.Appearance",fA="text-active",fB="checkbox-disabled",fC="toolbar-button-hovered",fx="progressive-table-header",fy="decoration/menu/radiobutton.gif",bS="decoration/arrows/forward.png",bR="decoration/table/descending.png",bQ="window-captionbar-active",bP="checkbox-checked-hovered",bO="scrollbar-slider-vertical",bN="toolbar",bM="alias",bL="decoration/window/restore-active.png",bK="decoration/table/boolean-false.png",bJ="checkbox-checked-disabled",cg="icon/32/mimetypes/office-document.png",ch="radiobutton-checked-disabled",ce="tabview-pane",cf="decoration/arrows/rewind.png",ck="checkbox-focused",cl="top",ci="#EEE",cj="icon/16/actions/dialog-ok.png",cn="radiobutton-checked-hovered",co="table-header-cell-hovered",el="window",ef="text-gray",es="decoration/menu/radiobutton-invert.gif",eo="text-placeholder",dT="slider",dR="decoration/table/select-column-order.png",cB="down.png",dU="tabview-page-button-top-active",cL="icon/32/places/folder-open.png",cK="icon/22/places/folder.png",dz="decoration/window/maximize-active.png",dA="checkbox-checked-pressed",dB="decoration/window/close-inactive.png",dC="toolbar-part",dD="decoration/splitpane/knob-vertical.png",dE=".gif",dF="decoration/menu/checkbox-invert.gif",dG="decoration/arrows/up.png",dx="radiobutton-checked-pressed",dy="table-statusbar",dS="radiobutton-pressed",er="window-captionbar-inactive",eq="copy",ep="radiobutton-focused",ew="decoration/menu/checkbox.gif",ev="decoration/splitpane/knob-horizontal.png",eu="icon/32/places/folder.png",et="toolbar-separator",en="tabview-page-button-bottom-active",em="decoration/arrows/up-small.png",cm="decoration/table/ascending.png",cP="small",cO="tabview-page-button-right-active",ee="-disabled",db="scrollbar-horizontal",ek="progressive-table-header-cell",ej="menu-separator",ei="pane",cA="decoration/arrows/right-invert.png",ex="left.png",cp="icon/16/actions/view-refresh.png";
qx.Theme.define(fz,{appearances:{"widget":{},"root":{style:function(t){return {backgroundColor:eR,textColor:cc,font:cU};
}},"label":{style:function(gL){return {textColor:gL.disabled?dQ:undefined};
}},"move-frame":{style:function(S){return {decorator:fj};
}},"resize-frame":dh,"dragdrop-cursor":{style:function(bk){var bl=di;

if(bk.copy){bl=eq;
}else if(bk.move){bl=dl;
}else if(bk.alias){bl=bM;
}return {source:cu+bl+dE,position:bT,offset:[2,16,2,6]};
}},"image":{style:function(gg){return {opacity:!gg.replacement&&gg.disabled?0.3:1};
}},"atom":{},"atom/label":eP,"atom/icon":fd,"popup":{style:function(gY){return {decorator:fj,backgroundColor:fe,shadow:cW};
}},"button-frame":{alias:fl,style:function(a){var c,b;

if(a.checked&&a.focused&&!a.inner){c=fE;
b=undefined;
}else if(a.disabled){c=eX;
b=undefined;
}else if(a.pressed){c=dr;
b=eL;
}else if(a.checked){c=ct;
b=undefined;
}else if(a.hovered){c=cN;
b=eL;
}else if(a.preselected&&a.focused&&!a.inner){c=eG;
b=eL;
}else if(a.preselected){c=fD;
b=eL;
}else if(a.focused&&!a.inner){c=fH;
b=undefined;
}else{c=fi;
b=undefined;
}return {decorator:c,textColor:b,shadow:a.invalid&&!a.disabled?dw:undefined};
}},"button-frame/image":{style:function(F){return {opacity:!F.replacement&&F.disabled?0.5:1};
}},"button":{alias:fm,include:fm,style:function(N){return {padding:[2,8],center:true};
}},"splitbutton":{},"splitbutton/button":fi,"splitbutton/arrow":{alias:fi,include:fi,style:function(hH){return {icon:dJ,padding:2,marginLeft:1};
}},"checkbox":{alias:fl,style:function(A){var C;

if(A.checked&&A.focused){C=eB;
}else if(A.checked&&A.disabled){C=bJ;
}else if(A.checked&&A.pressed){C=dA;
}else if(A.checked&&A.hovered){C=bP;
}else if(A.checked){C=dY;
}else if(A.disabled){C=fB;
}else if(A.focused){C=ck;
}else if(A.pressed){C=eU;
}else if(A.hovered){C=dv;
}else{C=bU;
}var B=A.invalid&&!A.disabled?cz:cw;
return {icon:cx+C+B+fQ,gap:6};
}},"radiobutton":{alias:fl,style:function(Y){var bb;

if(Y.checked&&Y.focused){bb=cJ;
}else if(Y.checked&&Y.disabled){bb=ch;
}else if(Y.checked&&Y.pressed){bb=dx;
}else if(Y.checked&&Y.hovered){bb=cn;
}else if(Y.checked){bb=eh;
}else if(Y.disabled){bb=dq;
}else if(Y.focused){bb=ep;
}else if(Y.pressed){bb=dS;
}else if(Y.hovered){bb=cv;
}else{bb=eQ;
}var ba=Y.invalid&&!Y.disabled?cz:cw;
return {icon:cx+bb+ba+fQ,gap:6};
}},"textfield":{style:function(bp){var bu;
var bs=!!bp.focused;
var bt=!!bp.invalid;
var bq=!!bp.disabled;

if(bs&&bt&&!bq){bu=dI;
}else if(bs&&!bt&&!bq){bu=fu;
}else if(bq){bu=dL;
}else if(!bs&&bt&&!bq){bu=dN;
}else{bu=dM;
}var br;

if(bp.disabled){br=dQ;
}else if(bp.showingPlaceholder){br=eo;
}else{br=fN;
}return {decorator:bu,padding:[2,4,1],textColor:br};
}},"textarea":{include:eM,style:function(hx){return {padding:4};
}},"spinner":{style:function(h){var l;
var j=!!h.focused;
var k=!!h.invalid;
var i=!!h.disabled;

if(j&&k&&!i){l=dI;
}else if(j&&!k&&!i){l=fu;
}else if(i){l=dL;
}else if(!j&&k&&!i){l=dN;
}else{l=dM;
}return {decorator:l};
}},"spinner/textfield":{style:function(gd){return {marginRight:2,padding:[2,4,1],textColor:gd.disabled?dQ:fN};
}},"spinner/upbutton":{alias:fm,include:fm,style:function(bh){return {icon:em,padding:bh.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:fm,include:fm,style:function(bf){return {icon:cV,padding:bf.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":eI,"datefield/button":{alias:ca,include:ca,style:function(M){return {icon:eE,padding:[0,3],decorator:undefined};
}},"datefield/textfield":ez,"datefield/list":{alias:cS,include:cS,style:function(gm){return {decorator:undefined};
}},"groupbox":{style:function(bi){return {legendPosition:cl};
}},"groupbox/legend":{alias:fl,style:function(fR){return {padding:[1,0,1,4],textColor:fR.invalid?eJ:bV,font:fh};
}},"groupbox/frame":{style:function(ho){return {padding:12,decorator:eF};
}},"check-groupbox":dP,"check-groupbox/legend":{alias:bU,include:bU,style:function(gP){return {padding:[1,0,1,4],textColor:gP.invalid?eJ:bV,font:fh};
}},"radio-groupbox":dP,"radio-groupbox/legend":{alias:eQ,include:eQ,style:function(P){return {padding:[1,0,1,4],textColor:P.invalid?eJ:bV,font:fh};
}},"scrollarea":{style:function(T){return {minWidth:64,minHeight:64};
}},"scrollarea/corner":{style:function(hp){return {backgroundColor:eR};
}},"scrollarea/pane":fk,"scrollarea/scrollbar-x":fv,"scrollarea/scrollbar-y":fv,"scrollbar":{style:function(hA){return {width:hA.horizontal?undefined:16,height:hA.horizontal?16:undefined,decorator:hA.horizontal?db:fb,padding:1};
}},"scrollbar/slider":{alias:dT,style:function(hz){return {padding:hz.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:fm,style:function(gF){var gG=gF.horizontal?fK:bO;

if(gF.disabled){gG+=ee;
}return {decorator:gG,minHeight:gF.horizontal?undefined:14,minWidth:gF.horizontal?14:undefined};
}},"scrollbar/button":{alias:fm,include:fm,style:function(hk){var hl=cM;

if(hk.left){hl+=ex;
}else if(hk.right){hl+=cF;
}else if(hk.up){hl+=fF;
}else{hl+=cB;
}
if(hk.left||hk.right){return {padding:[0,0,0,hk.left?3:4],icon:hl,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:hl,width:14,height:15};
}}},"scrollbar/button-begin":bX,"scrollbar/button-end":bX,"slider":{style:function(gn){var gr;
var gp=!!gn.focused;
var gq=!!gn.invalid;
var go=!!gn.disabled;

if(gp&&gq&&!go){gr=dI;
}else if(gp&&!gq&&!go){gr=fu;
}else if(go){gr=dL;
}else if(!gp&&gq&&!go){gr=dN;
}else{gr=dM;
}return {decorator:gr};
}},"slider/knob":{include:fm,style:function(ha){return {decorator:ha.disabled?dn:fK,shadow:undefined,height:14,width:14};
}},"list":{alias:fc,style:function(hd){var hh;
var hf=!!hd.focused;
var hg=!!hd.invalid;
var he=!!hd.disabled;

if(hf&&hg&&!he){hh=dI;
}else if(hf&&!hg&&!he){hh=fu;
}else if(he){hh=dL;
}else if(!hf&&hg&&!he){hh=dN;
}else{hh=dM;
}return {backgroundColor:fe,decorator:hh};
}},"list/pane":fk,"listitem":{alias:fl,style:function(hb){return {padding:4,textColor:hb.selected?ff:undefined,decorator:hb.selected?fr:undefined};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fm,include:fm,style:function(gs){return {padding:5,center:true,icon:gs.vertical?dJ:eO};
}},"slidebar/button-backward":{alias:fm,include:fm,style:function(hy){return {padding:5,center:true,icon:hy.vertical?dG:fI};
}},"tabview":{style:function(G){return {contentPadding:16};
}},"tabview/bar":{alias:cr,style:function(bH){var bI={marginBottom:bH.barTop?-1:0,marginTop:bH.barBottom?-4:0,marginLeft:bH.barRight?-3:0,marginRight:bH.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(bH.barTop||bH.barBottom){bI.paddingLeft=5;
bI.paddingRight=7;
}else{bI.paddingTop=5;
bI.paddingBottom=7;
}return bI;
}},"tabview/bar/button-forward":{include:fM,alias:fM,style:function(hG){if(hG.barTop||hG.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:cT,alias:cT,style:function(hv){if(hv.barTop||hv.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(O){return {decorator:ce,minHeight:100,marginBottom:O.barBottom?-1:0,marginTop:O.barTop?-1:0,marginLeft:O.barLeft?-1:0,marginRight:O.barRight?-1:0};
}},"tabview-page":fk,"tabview-page/button":{alias:fl,style:function(gw){var gC,gy=0;
var gB=0,gx=0,gz=0,gA=0;

if(gw.checked){if(gw.barTop){gC=dU;
gy=[6,14];
gz=gw.firstTab?0:-5;
gA=gw.lastTab?0:-5;
}else if(gw.barBottom){gC=en;
gy=[6,14];
gz=gw.firstTab?0:-5;
gA=gw.lastTab?0:-5;
}else if(gw.barRight){gC=cO;
gy=[6,13];
gB=gw.firstTab?0:-5;
gx=gw.lastTab?0:-5;
}else{gC=du;
gy=[6,13];
gB=gw.firstTab?0:-5;
gx=gw.lastTab?0:-5;
}}else{if(gw.barTop){gC=ed;
gy=[4,10];
gB=4;
gz=gw.firstTab?5:1;
gA=1;
}else if(gw.barBottom){gC=cE;
gy=[4,10];
gx=4;
gz=gw.firstTab?5:1;
gA=1;
}else if(gw.barRight){gC=eC;
gy=[4,10];
gA=5;
gB=gw.firstTab?5:1;
gx=1;
gz=1;
}else{gC=ec;
gy=[4,10];
gz=5;
gB=gw.firstTab?5:1;
gx=1;
gA=1;
}}return {zIndex:gw.checked?10:5,decorator:gC,padding:gy,marginTop:gB,marginBottom:gx,marginLeft:gz,marginRight:gA,textColor:gw.checked?fA:dk};
}},"tabview-page/button/close-button":{alias:fl,style:function(X){return {icon:eV};
}},"toolbar":{style:function(gX){return {decorator:bN,spacing:2};
}},"toolbar/part":{style:function(hD){return {decorator:dC,spacing:2};
}},"toolbar/part/container":{style:function(v){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bv){return {source:eT,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:fl,style:function(fS){return {marginTop:2,marginBottom:2,padding:(fS.pressed||fS.checked||fS.hovered)&&!fS.disabled||(fS.disabled&&fS.checked)?3:5,decorator:fS.pressed||(fS.checked&&!fS.hovered)||(fS.checked&&fS.disabled)?eb:fS.hovered&&!fS.disabled?fC:undefined};
}},"toolbar-menubutton":{alias:dH,include:dH,style:function(n){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:fd,include:fd,style:function(hF){return {source:cV};
}},"toolbar-splitbutton":{style:function(Q){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:dH,include:dH,style:function(gO){return {icon:dJ,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:dH,include:dH,style:function(gl){return {padding:gl.pressed||gl.checked?1:gl.hovered?1:3,icon:dJ,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(gh){return {decorator:et,margin:7};
}},"tree":fq,"tree-item":{style:function(gi){return {padding:[2,6],textColor:gi.selected?ff:undefined,decorator:gi.selected?fr:undefined};
}},"tree-item/icon":{include:fd,style:function(E){return {paddingRight:5};
}},"tree-item/label":eP,"tree-item/open":{include:fd,style:function(I){var J;

if(I.selected&&I.opened){J=ea;
}else if(I.selected&&!I.opened){J=fG;
}else if(I.opened){J=fP;
}else{J=cd;
}return {padding:[0,5,0,2],source:J};
}},"tree-folder":{include:fn,alias:fn,style:function(fU){var fV;

if(fU.small){fV=fU.opened?cy:cb;
}else if(fU.large){fV=fU.opened?cL:eu;
}else{fV=fU.opened?eY:cK;
}return {icon:fV};
}},"tree-file":{include:fn,alias:fn,style:function(bn){return {icon:bn.small?cX:bn.large?cg:eS};
}},"treevirtual":cR,"treevirtual-folder":{style:function(gv){return {icon:gv.opened?cy:cb};
}},"treevirtual-file":{include:da,alias:da,style:function(H){return {icon:cX};
}},"treevirtual-line":{style:function(hq){return {icon:bW};
}},"treevirtual-contract":{style:function(hw){return {icon:fP,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(gW){return {icon:cd,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":fo,"treevirtual-only-expand":eN,"treevirtual-start-contract":fo,"treevirtual-start-expand":eN,"treevirtual-end-contract":fo,"treevirtual-end-expand":eN,"treevirtual-cross-contract":fo,"treevirtual-cross-expand":eN,"treevirtual-end":{style:function(gS){return {icon:bW};
}},"treevirtual-cross":{style:function(ga){return {icon:bW};
}},"tooltip":{include:fs,style:function(gT){return {backgroundColor:dm,padding:[1,3,2,3],offset:[5,5,20,5]};
}},"tooltip/atom":fl,"tooltip-error":{include:fp,style:function(gV){return {textColor:ff,placeMethod:fk,offsetRight:15,position:bT,showTimeout:100,hideTimeout:10000,decorator:cD,shadow:cq,font:fh};
}},"tooltip-error/atom":fl,"window":{style:function(hN){return {shadow:cH,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(y){return {decorator:el};
}},"window/captionbar":{style:function(bw){return {decorator:bw.active?bQ:er,textColor:bw.active?fJ:ef,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(gD){return {margin:[5,0,3,6]};
}},"window/title":{style:function(q){return {alignY:fg,font:fh,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:fl,style:function(e){return {icon:e.active?e.hovered?dX:eD:eg,margin:[4,8,2,0]};
}},"window/restore-button":{alias:fl,style:function(D){return {icon:D.active?D.hovered?cI:bL:eA,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:fl,style:function(hc){return {icon:hc.active?hc.hovered?cs:dz:fa,margin:[4,8,2,0]};
}},"window/close-button":{alias:fl,style:function(hi){return {icon:hi.active?hi.hovered?eH:dt:dB,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(fY){return {padding:[2,6],decorator:cC,minHeight:18};
}},"window/statusbar-text":{style:function(hr){return {font:cP};
}},"iframe":{style:function(w){return {decorator:fj};
}},"resizer":{style:function(ht){return {decorator:ei};
}},"splitpane":{style:function(z){return {decorator:ey};
}},"splitpane/splitter":{style:function(gI){return {width:gI.horizontal?3:undefined,height:gI.vertical?3:undefined,backgroundColor:fL};
}},"splitpane/splitter/knob":{style:function(U){return {source:U.horizontal?ev:dD};
}},"splitpane/slider":{style:function(gH){return {width:gH.horizontal?3:undefined,height:gH.vertical?3:undefined,backgroundColor:fL};
}},"selectbox":{alias:fm,include:fm,style:function(gR){return {padding:[2,8]};
}},"selectbox/atom":fl,"selectbox/popup":fs,"selectbox/list":{alias:fq},"selectbox/arrow":{include:fd,style:function(ge){return {source:dJ,paddingLeft:5};
}},"datechooser":{style:function(bA){var bE;
var bC=!!bA.focused;
var bD=!!bA.invalid;
var bB=!!bA.disabled;

if(bC&&bD&&!bB){bE=dI;
}else if(bC&&!bD&&!bB){bE=fu;
}else if(bB){bE=dL;
}else if(!bC&&bD&&!bB){bE=dN;
}else{bE=dM;
}return {padding:2,decorator:bE,backgroundColor:fe};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:fm,alias:fm,style:function(gM){var gN={padding:[2,4],shadow:undefined};

if(gM.lastYear){gN.icon=cf;
gN.marginRight=1;
}else if(gM.lastMonth){gN.icon=fI;
}else if(gM.nextYear){gN.icon=bS;
gN.marginLeft=1;
}else if(gM.nextMonth){gN.icon=eO;
}return gN;
}},"datechooser/last-year-button-tooltip":fp,"datechooser/last-month-button-tooltip":fp,"datechooser/next-year-button-tooltip":fp,"datechooser/next-month-button-tooltip":fp,"datechooser/last-year-button":fw,"datechooser/last-month-button":fw,"datechooser/next-month-button":fw,"datechooser/next-year-button":fw,"datechooser/month-year-label":{style:function(gt){return {font:fh,textAlign:eK,textColor:gt.disabled?dQ:undefined};
}},"datechooser/date-pane":{style:function(L){return {textColor:L.disabled?dQ:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(p){return {textColor:p.disabled?dQ:p.weekend?fO:undefined,textAlign:eK,paddingTop:2,backgroundColor:cQ};
}},"datechooser/week":{style:function(hB){return {textAlign:eK,padding:[2,4],backgroundColor:cQ};
}},"datechooser/day":{style:function(o){return {textAlign:eK,decorator:o.disabled?undefined:o.selected?fr:undefined,textColor:o.disabled?dQ:o.selected?ff:o.otherMonth?fO:undefined,font:o.today?fh:undefined,padding:[2,4]};
}},"combobox":{style:function(hI){var hM;
var hK=!!hI.focused;
var hL=!!hI.invalid;
var hJ=!!hI.disabled;

if(hK&&hL&&!hJ){hM=dI;
}else if(hK&&!hL&&!hJ){hM=fu;
}else if(hJ){hM=dL;
}else if(!hK&&hL&&!hJ){hM=dN;
}else{hM=dM;
}return {decorator:hM};
}},"combobox/popup":fs,"combobox/list":{alias:fq},"combobox/button":{include:fm,alias:fm,style:function(f){var g={icon:dJ,padding:2};

if(f.selected){g.decorator=fH;
}return g;
}},"combobox/textfield":{include:eM,style:function(fW){return {decorator:undefined};
}},"menu":{style:function(bd){var be={decorator:dd,shadow:cW,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4};

if(bd.submenu){be.position=bT;
be.offset=[-2,-3];
}return be;
}},"menu-separator":{style:function(gE){return {height:0,decorator:ej,margin:[4,2]};
}},"menu-button":{alias:fl,style:function(gK){return {decorator:gK.selected?fr:undefined,textColor:gK.selected?ff:undefined,padding:[4,6]};
}},"menu-button/icon":{include:fd,style:function(hn){return {alignY:fg};
}},"menu-button/label":{include:eP,style:function(m){return {alignY:fg,padding:1};
}},"menu-button/shortcut":{include:eP,style:function(r){return {alignY:fg,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(bm){return {source:bm.selected?cA:eO,alignY:fg};
}},"menu-checkbox":{alias:dK,include:dK,style:function(W){return {icon:!W.checked?undefined:W.selected?dF:ew};
}},"menu-radiobutton":{alias:dK,include:dK,style:function(hC){return {icon:!hC.checked?undefined:hC.selected?es:fy};
}},"menubar":{style:function(hE){return {decorator:dW};
}},"menubar-button":{alias:fl,style:function(gu){return {decorator:gu.pressed||gu.hovered?fr:undefined,textColor:gu.pressed||gu.hovered?ff:undefined,padding:[3,8]};
}},"colorselector":fk,"colorselector/control-bar":fk,"colorselector/control-pane":fk,"colorselector/visual-pane":dP,"colorselector/preset-grid":fk,"colorselector/colorbucket":{style:function(R){return {decorator:fj,width:16,height:16};
}},"colorselector/preset-field-set":dP,"colorselector/input-field-set":dP,"colorselector/preview-field-set":dP,"colorselector/hex-field-composite":fk,"colorselector/hex-field":eM,"colorselector/rgb-spinner-composite":fk,"colorselector/rgb-spinner-red":ft,"colorselector/rgb-spinner-green":ft,"colorselector/rgb-spinner-blue":ft,"colorselector/hsb-spinner-composite":fk,"colorselector/hsb-spinner-hue":ft,"colorselector/hsb-spinner-saturation":ft,"colorselector/hsb-spinner-brightness":ft,"colorselector/preview-content-old":{style:function(hs){return {decorator:fj,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(by){return {decorator:fj,backgroundColor:fe,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(x){return {decorator:fj,margin:5};
}},"colorselector/brightness-field":{style:function(bx){return {decorator:fj,margin:[5,7]};
}},"colorselector/hue-saturation-pane":fk,"colorselector/hue-saturation-handle":fk,"colorselector/brightness-pane":fk,"colorselector/brightness-handle":fk,"colorpopup":{alias:fs,include:fs,style:function(gb){return {padding:5,backgroundColor:eR};
}},"colorpopup/field":{style:function(gf){return {decorator:fj,margin:2,width:14,height:14,backgroundColor:fe};
}},"colorpopup/selector-button":fi,"colorpopup/auto-button":fi,"colorpopup/preview-pane":dP,"colorpopup/current-preview":{style:function(bG){return {height:20,padding:4,marginLeft:4,decorator:fj,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(bg){return {height:20,padding:4,marginRight:4,decorator:fj,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:fi,include:fi,style:function(hO){return {icon:cj};
}},"colorpopup/colorselector-cancelbutton":{alias:fi,include:fi,style:function(V){return {icon:dV};
}},"table":{alias:fk,style:function(gU){return {decorator:cR};
}},"table-header":{},"table/statusbar":{style:function(bc){return {decorator:dy,padding:[0,2]};
}},"table/column-button":{alias:fm,style:function(bF){return {decorator:cG,padding:3,icon:dR};
}},"table-column-reset-button":{include:dK,alias:dK,style:function(){return {icon:cp};
}},"table-scroller":fk,"table-scroller/scrollbar-x":fv,"table-scroller/scrollbar-y":fv,"table-scroller/header":{style:function(gj){return {decorator:dp};
}},"table-scroller/pane":{style:function(s){return {backgroundColor:ds};
}},"table-scroller/focus-indicator":{style:function(hj){return {decorator:dg};
}},"table-scroller/resize-line":{style:function(bz){return {backgroundColor:eW,width:2};
}},"table-header-cell":{alias:fl,style:function(hm){return {minWidth:13,minHeight:20,padding:hm.hovered?[3,4,2,4]:[3,4],decorator:hm.hovered?co:dc,sortIcon:hm.sorted?(hm.sortedAscending?cm:bR):undefined};
}},"table-header-cell/label":{style:function(gk){return {minWidth:0,alignY:fg,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(fT){return {alignY:fg,alignX:bY};
}},"table-header-cell/icon":{style:function(fX){return {minWidth:0,alignY:fg,paddingRight:5};
}},"table-editor-textfield":{include:eM,style:function(hP){return {decorator:undefined,padding:[2,2],backgroundColor:fe};
}},"table-editor-selectbox":{include:cY,alias:cY,style:function(bo){return {padding:[0,2],backgroundColor:fe};
}},"table-editor-combobox":{include:eI,alias:eI,style:function(d){return {decorator:undefined,backgroundColor:fe};
}},"progressive-table-header":{alias:fk,style:function(gJ){return {decorator:fx};
}},"progressive-table-header-cell":{alias:fl,style:function(gc){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ek};
}},"app-header":{style:function(K){return {font:fh,textColor:ff,padding:[8,12],decorator:de};
}},"virtual-list":fq,"virtual-list/row-layer":df,"row-layer":{style:function(bj){return {colorEven:fJ,colorOdd:ci};
}},"column-layer":fk,"cell":{style:function(gQ){return {textColor:gQ.selected?ff:cc,padding:[3,6],font:cU};
}},"cell-string":dO,"cell-number":{include:dO,style:function(hu){return {textAlign:bY};
}},"cell-image":dO,"cell-boolean":{include:dO,style:function(u){return {iconTrue:dj,iconFalse:bK};
}},"cell-atom":dO,"cell-date":dO,"cell-html":dO}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==a)?g:f,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?f:g,{"native":Array.prototype.indexOf,"emulated":function(s,t){if(t==null){t=0;
}else if(t<0){t=Math.max(0,this.length+t);
}
for(var i=t;i<this.length;i++){if(this[i]===s){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?f:g,{"native":Array.prototype.lastIndexOf,"emulated":function(h,j){if(j==null){j=this.length-1;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i>=0;i--){if(this[i]===h){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?f:g,{"native":Array.prototype.forEach,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){y.call(z||window,A,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?f:g,{"native":Array.prototype.filter,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){if(u.call(v||window,x,i,this)){w.push(this[i]);
}}}return w;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?f:g,{"native":Array.prototype.map,"emulated":function(k,m){var n=[];
var l=this.length;

for(var i=0;i<l;i++){var o=this[i];

if(o!==undefined){n[i]=k.call(m||window,o,i,this);
}}return n;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?f:g,{"native":Array.prototype.some,"emulated":function(p,q){var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){if(p.call(q||window,r,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?f:g,{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?f:g,{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
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
(function(){var v=":",u="qx.client",t="anonymous",s="...",r="qx.dev.StackTrace",q="",p="\n",o="/source/class/",n=".";
qx.Class.define(r,{statics:{getStackTrace:qx.core.Variant.select(u,{"gecko":function(){try{throw new Error();
}catch(bb){var E=this.getStackTraceFromError(bb);
qx.lang.Array.removeAt(E,0);
var C=this.getStackTraceFromCaller(arguments);
var A=C.length>E.length?C:E;

for(var i=0;i<Math.min(C.length,E.length);i++){var B=C[i];

if(B.indexOf(t)>=0){continue;
}var I=B.split(v);

if(I.length!=2){continue;
}var G=I[0];
var z=I[1];
var y=E[i];
var J=y.split(v);
var F=J[0];
var x=J[1];

if(qx.Class.getByName(F)){var D=F;
}else{D=G;
}var H=D+v;

if(z){H+=z+v;
}H+=x;
A[i]=H;
}return A;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var K;

try{K.bar();
}catch(w){var L=this.getStackTraceFromError(w);
qx.lang.Array.removeAt(L,0);
return L;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(u,{"opera":function(T){return [];
},"default":function(U){var ba=[];
var Y=qx.lang.Function.getCaller(U);
var V={};

while(Y){var W=qx.lang.Function.getName(Y);
ba.push(W);

try{Y=Y.caller;
}catch(a){break;
}
if(!Y){break;
}var X=qx.core.ObjectRegistry.toHashCode(Y);

if(V[X]){ba.push(s);
break;
}V[X]=Y;
}return ba;
}}),getStackTraceFromError:qx.core.Variant.select(u,{"gecko":function(b){if(!b.stack){return [];
}var h=/@(.+):(\d+)$/gm;
var c;
var d=[];

while((c=h.exec(b.stack))!=null){var e=c[1];
var g=c[2];
var f=this.__io(e);
d.push(f+v+g);
}return d;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__io(bc.sourceURL)+v+bc.line];
}else{return [];
}},"opera":function(M){if(M.message.indexOf("Backtrace:")<0){return [];
}var O=[];
var P=qx.lang.String.trim(M.message.split("Backtrace:")[1]);
var Q=P.split(p);

for(var i=0;i<Q.length;i++){var N=Q[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(N&&N.length>=2){var S=N[1];
var R=this.__io(N[2]);
O.push(R+v+S);
}}return O;
},"default":function(){return [];
}}),__io:function(j){var m=o;
var k=j.indexOf(m);
var l=(k==-1)?j:j.substring(k+m.length).replace(/\//g,n).replace(/\.js$/,q);
return l;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(h){},setItem:function(i,j){},splice:function(e,f,g){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var e="qx.globalErrorHandling",d="on",c="qx.event.GlobalError";
qx.Bootstrap.define(c,{statics:{setErrorHandler:function(k,l){this.__ib=k||null;
this.__ic=l||window;

if(qx.core.Setting.get(e)===d){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__id,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__id:function(f,g,h){if(this.__ib){this.handleError(new qx.core.WindowError(f,g,h));
return true;
}},observeMethod:function(i){if(qx.core.Setting.get(e)===d){var self=this;
return function(){if(!self.__ib){return i.apply(this,arguments);
}
try{return i.apply(this,arguments);
}catch(j){self.handleError(j);
}};
}else{return i;
}},handleError:function(b){if(this.__ib){this.__ib.call(this.__ic,b);
}}},defer:function(a){qx.core.Setting.define(e,d);
a.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__bW=c;
this.__bX=d||b;
this.__bY=e===undefined?-1:e;
},members:{__bW:null,__bX:null,__bY:null,toString:function(){return this.__bW;
},getUri:function(){return this.__bX;
},getLineNumber:function(){return this.__bY;
}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var n="load",m="unload",l="qx.client",k="ready",j="mshtml",i="qx.event.handler.Application",h="complete",g="gecko|opera|webkit",f="left",e="_window",c="DOMContentLoaded",d="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){arguments.callee.base.call(this);
this._window=p.getWindow();
this.__fX=false;
this.__fY=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__ga:false,onScriptLoaded:function(){this.__ga=true;
var z=qx.event.handler.Application.$$instance;

if(z){z.__gd();
}}},members:{canHandleEvent:function(t,u){},registerEvent:function(q,r,s){},unregisterEvent:function(v,w,x){},__gb:null,__fX:null,__fY:null,__gc:null,__gd:function(){var o=qx.event.handler.Application;
if(!this.__gb&&this.__fX&&o.__ga){this.__gb=true;
qx.event.Registration.fireEvent(this._window,k);
}},isApplicationReady:function(){return this.__gb;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h){this.__fX=true;
this.__gd();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,g)){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,j)){var y=function(){try{document.documentElement.doScroll(f);
this._onNativeLoadWrapped();
}catch(b){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,n,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,m,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,m,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__fX=true;
this.__gd();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gc){this.__gc=true;

try{qx.event.Registration.fireEvent(this._window,d);
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._disposeFields(e);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var o="qx.util.ObjectPool",n="Integer";
qx.Class.define(o,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.__eF={};

if(a!==undefined){this.setSize(a);
}},properties:{size:{check:n,init:null,nullable:true}},members:{__eF:null,getObject:function(f){if(this.$$disposed){return;
}
if(!f){throw new Error("Class needs to be defined!");
}var g=null;
var h=this.__eF[f.classname];

if(h){g=h.pop();
}
if(g){g.$$pooled=false;
}else{g=new f;
}return g;
},poolObject:function(b){if(!this.__eF){return;
}var c=b.classname;
var d=this.__eF[c];

if(b.$$pooled){throw new Error("Object is already pooled: "+b);
}
if(!d){this.__eF[c]=d=[];
}var e=this.getSize()||Infinity;

if(d.length>e){this.warn("Cannot pool "+b+" because the pool is already full.");
b.dispose();
return;
}b.$$pooled=true;
d.push(b);
}},destruct:function(){var m=this.__eF;
var j,k,i,l;

for(j in m){k=m[j];

for(i=0,l=k.length;i<l;i++){k[i].dispose();
}}delete this.__eF;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var e="_originalTarget",d="_relatedTarget",c="qx.event.type.Event",b="_target",a="_currentTarget";
qx.Class.define(c,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(k,l){{};
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
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(n){this._type=n;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(m){this._eventPhase=m;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(p){this._target=p;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(i){this._originalTarget=i;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(o){this._bubbles=o;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(q){this._cancelable=q;
}},destruct:function(){this._disposeFields(b,a,d,e);
}});
})();
(function(){var g="__hw",f="__hv",e="Better use 'getData'",d="Better use 'getOldData'",c="qx.event.type.Data";
qx.Class.define(c,{extend:qx.event.type.Event,members:{__hv:null,__hw:null,init:function(h,i,j){arguments.callee.base.call(this,false,j);
this.__hv=h;
this.__hw=i;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
b.__hv=this.__hv;
b.__hw=this.__hw;
return b;
},getData:function(){return this.__hv;
},getOldData:function(){return this.__hw;
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,e);
return this.__hv;
},getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.__hw;
}},destruct:function(){this._disposeFields(f,g);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var b="qx.event.dispatch.Direct";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(g){this._manager=g;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(h,event,j){return !event.getBubbles();
},dispatchEvent:function(c,event,d){event.setEventPhase(qx.event.type.Event.AT_TARGET);
var e=this._manager.getListeners(c,d,false);

if(e){for(var i=0,l=e.length;i<l;i++){var f=e[i].context||c;
e[i].handler.call(f,event);
}}}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var ca="get",bY="",bX="[",bW="]",bV="last",bU="change",bT=".",bS="Number",bR="String",bQ="set",cp="deepBinding",co="item",cn="reset",cm="' (",cl="Boolean",ck=").",cj=") to the object '",ci="Integer",ch="qx.data.SingleValueBinding",cg="No event could be found for the property",ce="PositiveNumber",cf="Binding from '",cc="PositiveInteger",cd="Binding does not exist!",cb="Date";
qx.Class.define(ch,{statics:{DEBUG_ON:false,__eY:{},bind:function(a,b,c,d,f){var m=b.split(bT);
var h=this.__fg(m);
var p=[];
var q=[];
var n=[];
var k=[];
var l=a;
for(var i=0;i<m.length;i++){if(h[i]!==bY){k.push(bU);
}else{k.push(this.__fb(l,m[i]));
}p[i]=l;
if(i==m.length-1){if(h[i]!==bY){var t=h[i]===bV?l.length-1:h[i];
var g=l.getItem(t);
this.__ff(g,c,d,f,a);
n[i]=this.__fh(l,k[i],c,d,f,h[i]);
}else{if(m[i]!=null&&l[ca+qx.lang.String.firstUp(m[i])]!=null){var g=l[ca+qx.lang.String.firstUp(m[i])]();
this.__ff(g,c,d,f,a);
}n[i]=this.__fh(l,k[i],c,d,f);
}}else{var r={index:i,propertyNames:m,sources:p,listenerIds:n,arrayIndexValues:h,targetObject:c,targetProperty:d,options:f,listeners:q};
var o=qx.lang.Function.bind(this.__fa,this,r);
q.push(o);
n[i]=l.addListener(k[i],o);
}if(l[ca+qx.lang.String.firstUp(m[i])]==null){l=null;
}else if(h[i]!==bY){l=l[ca+qx.lang.String.firstUp(m[i])](h[i]);
}else{l=l[ca+qx.lang.String.firstUp(m[i])]();
}
if(!l){break;
}}var s={type:cp,listenerIds:n,sources:p};
this.__fi(s,a,b,c,d);
return s;
},__fa:function(u){if(u.options&&u.options.onUpdate){u.options.onUpdate(u.sources[u.index],u.targetObject);
}for(var j=u.index+1;j<u.propertyNames.length;j++){var y=u.sources[j];
u.sources[j]=null;

if(!y){continue;
}y.removeListenerById(u.listenerIds[j]);
}var y=u.sources[u.index];
for(var j=u.index+1;j<u.propertyNames.length;j++){if(u.arrayIndexValues[j-1]!==bY){y=y[ca+qx.lang.String.firstUp(u.propertyNames[j-1])](u.arrayIndexValues[j-1]);
}else{y=y[ca+qx.lang.String.firstUp(u.propertyNames[j-1])]();
}u.sources[j]=y;
if(!y){this.__fc(u.targetObject,u.targetProperty);
break;
}if(j==u.propertyNames.length-1){if(qx.Class.implementsInterface(y,qx.data.IListData)){var z=u.arrayIndexValues[j]===bV?y.length-1:u.arrayIndexValues[j];
var w=y.getItem(z);
this.__ff(w,u.targetObject,u.targetProperty,u.options,u.sources[u.index]);
u.listenerIds[j]=this.__fh(y,bU,u.targetObject,u.targetProperty,u.options,u.arrayIndexValues[j]);
}else{if(u.propertyNames[j]!=null&&y[ca+qx.lang.String.firstUp(u.propertyNames[j])]!=null){var w=y[ca+qx.lang.String.firstUp(u.propertyNames[j])]();
this.__ff(w,u.targetObject,u.targetProperty,u.options,u.sources[u.index]);
}var x=this.__fb(y,u.propertyNames[j]);
u.listenerIds[j]=this.__fh(y,x,u.targetObject,u.targetProperty,u.options);
}}else{if(u.listeners[j]==null){var v=qx.lang.Function.bind(this.__fa,this,u);
u.listeners.push(v);
}if(qx.Class.implementsInterface(y,qx.data.IListData)){var x=bU;
}else{var x=this.__fb(y,u.propertyNames[j]);
}u.listenerIds[j]=y.addListener(x,u.listeners[j]);
}}},__fb:function(bj,bk){var bl=this.__fk(bj,bk);
if(bl==null){if(qx.Class.supportsEvent(bj.constructor,bk)){bl=bk;
}else if(qx.Class.supportsEvent(bj.constructor,bU+qx.lang.String.firstUp(bk))){bl=bU+qx.lang.String.firstUp(bk);
}else{throw new qx.core.AssertionError(cg,bk);
}}return bl;
},__fc:function(cs,ct){var cu=this.__fe(cs,ct);

if(cu!=null){var cv=ct.substring(ct.lastIndexOf(bT)+1,ct.length);
if(cv.charAt(cv.length-1)==bW){this.__fd(cs,ct,null);
return;
}if(cu[cn+qx.lang.String.firstUp(cv)]!=undefined){cu[cn+qx.lang.String.firstUp(cv)]();
}else{cu[bQ+qx.lang.String.firstUp(cv)](null);
}}},__fd:function(bv,bw,bx){var bB=this.__fe(bv,bw);

if(bB!=null){var bC=bw.substring(bw.lastIndexOf(bT)+1,bw.length);
if(bC.charAt(bC.length-1)==bW){var by=bC.substring(bC.lastIndexOf(bX)+1,bC.length-1);
var bA=bC.substring(0,bC.lastIndexOf(bX));
var bz=bB[ca+qx.lang.String.firstUp(bA)]();

if(by==bV){by=bz.length-1;
}
if(bz!=null){bz.setItem(by,bx);
}}else{bB[bQ+qx.lang.String.firstUp(bC)](bx);
}}},__fe:function(bm,bn){var bq=bn.split(bT);
var br=bm;
for(var i=0;i<bq.length-1;i++){try{var bp=bq[i];
if(bp.indexOf(bW)==bp.length-1){var bo=bp.substring(bp.indexOf(bX)+1,bp.length-1);
bp=bp.substring(0,bp.indexOf(bX));
}br=br[ca+qx.lang.String.firstUp(bp)]();

if(bo!=null){if(bo==bV){bo=br.length-1;
}br=br.getItem(bo);
bo=null;
}}catch(bD){return null;
}}return br;
},__ff:function(I,J,K,L,M){I=this.__fj(I,J,K,L);
if(I==null){this.__fc(J,K);
}if(I!=undefined){try{this.__fd(J,K,I);
if(L&&L.onUpdate){L.onUpdate(M,J,I);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(L&&L.onSetFail){L.onSetFail(e);
}else{this.warn("Failed so set value "+I+" on "+J+". Error message: "+e);
}}}},__fg:function(bN){var bO=[];
for(var i=0;i<bN.length;i++){var name=bN[i];
if(qx.lang.String.endsWith(name,bW)){var bP=name.substring(name.indexOf(bX)+1,name.indexOf(bW));
if(name.indexOf(bW)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bP!==bV){if(bP==bY||isNaN(parseInt(bP))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bX)!=0){bN[i]=name.substring(0,name.indexOf(bX));
bO[i]=bY;
bO[i+1]=bP;
bN.splice(i+1,0,co);
i++;
}else{bO[i]=bP;
bN.splice(i,1,co);
}}else{bO[i]=bY;
}}return bO;
},__fh:function(bE,bF,bG,bH,bI,bJ){var bK;
{};
var bM=function(cw,e){if(cw!==bY){if(cw===bV){cw=bE.length-1;
}var cz=bE.getItem(cw);
if(cz==undefined){qx.data.SingleValueBinding.__fc(bG,bH);
}var cx=e.getData().start;
var cy=e.getData().end;

if(cw<cx||cw>cy){return;
}}else{var cz=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bE+" by "+bF+" to "+bG+" ("+bH+")");
qx.log.Logger.debug("Data before conversion: "+cz);
}cz=qx.data.SingleValueBinding.__fj(cz,bG,bH,bI);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cz);
}try{if(cz!=undefined){qx.data.SingleValueBinding.__fd(bG,bH,cz);
}else{qx.data.SingleValueBinding.__fc(bG,bH);
}if(bI&&bI.onUpdate){bI.onUpdate(bE,bG,cz);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bI&&bI.onSetFail){bI.onSetFail(e);
}else{this.warn("Failed so set value "+cz+" on "+bG+". Error message: "+e);
}}};
if(!bJ){bJ=bY;
}bM=qx.lang.Function.bind(bM,bE,bJ);
var bL=bE.addListener(bF,bM);
return bL;
},__fi:function(A,B,C,D,E){if(this.__eY[B.toHashCode()]===undefined){this.__eY[B.toHashCode()]=[];
}this.__eY[B.toHashCode()].push([A,B,C,D,E]);
},__fj:function(Q,R,S,T){if(T&&T.converter){var V;

if(R.getModel){V=R.getModel();
}return T.converter(Q,V);
}else{var X=this.__fe(R,S);
var Y=S.substring(S.lastIndexOf(bT)+1,S.length);
if(X==null){return Q;
}var W=qx.Class.getPropertyDefinition(X.constructor,Y);
var U=W==null?bY:W.check;
return this.__fl(Q,U);
}},__fk:function(ba,bb){var bc=qx.Class.getPropertyDefinition(ba.constructor,bb);

if(bc==null){return null;
}return bc.event;
},__fl:function(N,O){var P=qx.lang.Type.getClass(N);
if((P==bS||P==bR)&&(O==ci||O==cc)){N=parseInt(N);
}if((P==cl||P==bS||P==cb)&&O==bR){N=N+bY;
}if((P==bS||P==bR)&&(O==bS||O==ce)){N=parseFloat(N);
}return N;
},removeBindingFromObject:function(bs,bt){if(bt.type==cp){for(var i=0;i<bt.sources.length;i++){if(bt.sources[i]){bt.sources[i].removeListenerById(bt.listenerIds[i]);
}}}else{bs.removeListenerById(bt);
}var bu=this.__eY[bs.toHashCode()];
if(bu!=undefined){for(var i=0;i<bu.length;i++){if(bu[i][0]==bt){qx.lang.Array.remove(bu,bu[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bh){{};
var bi=this.__eY[bh.toHashCode()];
for(var i=bi.length-1;i>=0;i--){this.removeBindingFromObject(bh,bi[i][0]);
}},getAllBindingsForObject:function(F){if(this.__eY[F.toHashCode()]===undefined){this.__eY[F.toHashCode()]=[];
}return this.__eY[F.toHashCode()];
},removeAllBindings:function(){for(var H in this.__eY){var G=qx.core.ObjectRegistry.fromHashCode(H);
if(G==null){delete this.__eY[H];
continue;
}this.removeAllBindingsForObject(G);
}this.__eY={};
},getAllBindings:function(){return this.__eY;
},showBindingInLog:function(bd,be){var bg;
for(var i=0;i<this.__eY[bd.toHashCode()].length;i++){if(this.__eY[bd.toHashCode()][i][0]==be){bg=this.__eY[bd.toHashCode()][i];
break;
}}
if(bg===undefined){var bf=cd;
}else{var bf=cf+bg[1]+cm+bg[2]+cj+bg[3]+cm+bg[4]+ck;
}qx.log.Logger.debug(bf);
},showAllBindingsInLog:function(){for(var cr in this.__eY){var cq=qx.core.ObjectRegistry.fromHashCode(cr);

for(var i=0;i<this.__eY[cr].length;i++){this.showBindingInLog(cq,this.__eY[cr][i][0]);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bV=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bV:null,message:null,getComment:function(){return this.__bV;
},toString:function(){return this.__bV+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__iO=qx.dev.StackTrace.getStackTrace();
},members:{__iO:null,getStackTrace:function(){return this.__iO;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var d="qx.util.DisposeUtil";
qx.Class.define(d,{statics:{disposeFields:function(p,q){var name;

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
}}}catch(e){throw new Error("The array field: "+m+" of object: "+k+" has non disposable entries: "+e);
}o.length=0;
k[m]=null;
},disposeMap:function(f,g){var h=f[g];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){f[g]=null;
return;
}try{for(var j in h){if(h.hasOwnProperty(j)){h[j].dispose();
}}}catch(c){throw new Error("The map field: "+g+" of object: "+f+" has non disposable entries: "+c);
}f[g]=null;
}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Bootstrap.define(G,{statics:{__ea:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__eb:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ec:function(){var L=qx.lang.Generics.__ea;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__eb(N,O);
}}}}},defer:function(Q){Q.__ec();
}});
})();
(function(){var p='<div style="',o='"></div>',n="mshtml",m='"/>',l="",k='" style="vertical-align:top;',j="scale",i="qx.client",h="qx.ui.decoration.Util",g='<img src="',f="overflow:hidden;";
qx.Class.define(h,{statics:{insetsModified:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var c=qx.theme.manager.Decoration.getInstance();
var e=c.resolve(a).getInsets();
var d=c.resolve(b).getInsets();

if(e.top!=d.top||e.right!=d.right||e.bottom!=d.bottom||e.left!=d.left){return true;
}return false;
},generateBackgroundMarkup:function(q,r,s,top,t){if(q){var u=qx.util.AliasManager.getInstance().resolve(q);
if(r==j){var v=qx.util.ResourceManager.getInstance().toUri(u);
return g+v+k+t+m;
}else{var back=qx.bom.element.Background.compile(u,r,s,top);
return p+back+t+o;
}}else{if(t){if(qx.core.Variant.isSet(i,n)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){t+=f;
}}return p+t+o;
}else{return l;
}}}}});
})();
(function(){var t="decoration",s="object",r="_applyTheme",q="__bH",p="qx.theme.manager.Decoration",o="Theme",n="string",m="singleton";
qx.Class.define(p,{type:m,extend:qx.core.Object,properties:{theme:{check:o,nullable:true,apply:r}},members:{__bH:null,resolve:function(g){if(!g){return null;
}
if(typeof g===s){return g;
}var j=this.getTheme();

if(!j){return null;
}var j=this.getTheme();

if(!j){return null;
}var k=this.__bH;

if(!k){k=this.__bH={};
}var h=k[g];

if(h){return h;
}var i=j.decorations[g];

if(!i){return null;
}var l=i.decorator;

if(l==null){throw new Error("Missing definition of which decorator to use in entry: "+g+"!");
}return k[g]=(new l).set(i.style);
},isValidPropertyValue:function(a){if(typeof a===n){return this.isDynamic(a);
}else if(typeof a===s){var b=a.constructor;
return qx.Class.hasInterface(b,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(u){if(!u){return false;
}var v=this.getTheme();

if(!v){return false;
}return !!v.decorations[u];
},_applyTheme:function(c,d){var f=qx.util.AliasManager.getInstance();
if(c){f.add(t,c.resource);
}else{f.remove(t);
}
if(d){for(var e in d.aliases){f.remove(e);
}}
if(c){for(var e in c.aliases){f.add(e,c.aliases[e]);
}}
if(!c){this.__bH={};
}}},destruct:function(){this._disposeMap(q);
}});
})();
(function(){var f="_dynamic",e="qx.util.ValueManager",d="abstract";
qx.Class.define(e,{type:d,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(a){return this._dynamic[a];
},isDynamic:function(b){return !!this._dynamic[b];
},resolve:function(c){if(c&&this._dynamic[c]){return this._dynamic[c];
}return c;
},_setDynamic:function(g){this._dynamic=g;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._disposeFields(f);
}});
})();
(function(){var r="/",q="0",p="qx/static",o="http://",n="https://",m="file://",l="qx.util.AliasManager",k="singleton",j=".",i="__fw",h="static";
qx.Class.define(l,{type:k,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__fw={};
this.add(h,p);
},members:{__fw:null,_preprocess:function(a){var d=this._getDynamic();

if(d[a]===false){return a;
}else if(d[a]===undefined){if(a.charAt(0)===r||a.charAt(0)===j||a.indexOf(o)===0||a.indexOf(n)===q||a.indexOf(m)===0){d[a]=false;
return a;
}
if(this.__fw[a]){return this.__fw[a];
}var c=a.substring(0,a.indexOf(r));
var b=this.__fw[c];

if(b!==undefined){d[a]=b+a.substring(c.length);
}}return a;
},add:function(s,t){this.__fw[s]=t;
var v=this._getDynamic();
for(var u in v){if(u.substring(0,u.indexOf(r))===s){v[u]=t+u.substring(s.length);
}}},remove:function(g){delete this.__fw[g];
},resolve:function(e){var f=this._getDynamic();

if(e!==null){e=this._preprocess(e);
}return f[e]||e;
}},destruct:function(){this._disposeFields(i);
}});
})();
(function(){var b="qx.bom.client.Feature";
qx.Bootstrap.define(b,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:false,VML:false,XPATH:false,AIR:false,GEARS:false,SSL:false,__fx:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
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
}},defer:function(a){a.__fx();
}});
})();
(function(){var x="/",w="mshtml",v="qx.client",u="string",t="",s="?",r="Use 'getInstance().isClippedImage' instead!",q="Use 'getInstance().getImageWidth' instead!",p="Use 'getInstance().has' instead!",o="Use 'getInstance().getImageFormat' instead!",k="Use 'getInstance().getData' instead!",n="Use 'getInstance().getImageHeight' instead!",m="Use 'getInstance().toUri' instead!",j="qx.util.ResourceManager",i="singleton",l="qx.isSource";
qx.Class.define(j,{extend:qx.core.Object,type:i,statics:{__bF:qx.$$resources||{},__bG:{},has:function(N){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return this.getInstance().has(N);
},getData:function(B){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return this.getInstance().getData(B);
},getImageWidth:function(c){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
return this.getInstance().getImageWidth(c);
},getImageHeight:function(Q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return this.getInstance().getImageHeight(Q);
},getImageFormat:function(h){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
return this.getInstance().getImageFormat(h);
},isClippedImage:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return this.getInstance().isClippedImage(a);
},toUri:function(E){qx.log.Logger.deprecatedMethodWarning(arguments.callee,m);
return this.getInstance().toUri(E);
}},members:{has:function(y){return !!arguments.callee.self.__bF[y];
},getData:function(b){return arguments.callee.self.__bF[b]||null;
},getImageWidth:function(O){var P=arguments.callee.self.__bF[O];
return P?P[0]:null;
},getImageHeight:function(C){var D=arguments.callee.self.__bF[C];
return D?D[1]:null;
},getImageFormat:function(L){var M=arguments.callee.self.__bF[L];
return M?M[2]:null;
},isClippedImage:function(z){var A=arguments.callee.self.__bF[z];
return A&&A.length>4;
},toUri:function(d){if(d==null){return d;
}var e=arguments.callee.self.__bF[d];

if(!e){return d;
}
if(typeof e===u){var g=e;
}else{var g=e[3];
if(!g){return d;
}}var f=t;

if(qx.core.Variant.isSet(v,w)&&qx.bom.client.Feature.SSL){f=arguments.callee.self.__bG[g];
}return f+qx.$$libraries[g].resourceUri+x+d;
}},defer:function(F){if(qx.core.Variant.isSet(v,w)){if(qx.bom.client.Feature.SSL){for(var J in qx.$$libraries){var H=qx.$$libraries[J].resourceUri;
if(H.match(/^\/\//)!=null){F.__bG[J]=window.location.protocol;
}else if(H.match(/^\.\//)!=null&&qx.core.Setting.get(l)){var G=document.URL;
F.__bG[J]=G.substring(0,G.lastIndexOf(x));
}else if(H.match(/^http/)!=null){}else{var K=window.location.href.indexOf(s);
var I;

if(K==-1){I=window.location.href;
}else{I=window.location.href.substring(0,K);
}F.__bG[J]=I.substring(0,I.lastIndexOf(x)+1);
}}}}}});
})();
(function(){var C="number",B="0",A="px",z=";",y="background-image:url(",x=");",w="",v=")",u="background-repeat:",t=" ",q="qx.bom.element.Background",s="url(",r="background-position:";
qx.Class.define(q,{statics:{__ca:[y,null,x,r,null,z,u,null,z],__cb:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cc:function(m,top){var n=qx.bom.client.Engine;

if(n.GECKO&&n.VERSION<1.9&&m==top&&typeof m==C){top+=0.01;
}
if(m){var o=(typeof m==C)?m+A:m;
}else{o=B;
}
if(top){var p=(typeof top==C)?top+A:top;
}else{p=B;
}return o+t+p;
},compile:function(g,h,i,top){var j=this.__cc(i,top);
var k=qx.util.ResourceManager.getInstance().toUri(g);
var l=this.__ca;
l[1]=k;
l[4]=j;
l[7]=h;
return l.join(w);
},getStyles:function(D,E,F,top){if(!D){return this.__cb;
}var G=this.__cc(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:s+H+v};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(a,b,c,d,top){var e=this.getStyles(b,c,d,top);

for(var f in e){a.style[f]=e[f];
}}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(n){var o={};

if(n){var p=n.colors;
var q=qx.util.ColorUtil;
var r;

for(var s in p){r=p[s];

if(typeof r===b){if(!q.isCssString(r)){throw new Error("Could not parse color: "+r);
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
},isDynamic:function(g){var i=this._dynamic;

if(g&&(i[g]!==undefined)){return true;
}var h=this.getTheme();

if(h!==null&&g&&(h.colors[g]!==undefined)){i[g]=h.colors[g];
return true;
}return false;
}}});
})();
(function(){var P=",",O="rgb(",N=")",M="qx.theme.manager.Color",L="qx.util.ColorUtil";
qx.Class.define(L,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42],grey:[128,128,128]},isNamedColor:function(J){return this.NAMED[J]!==undefined;
},isSystemColor:function(y){return this.SYSTEM[y]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(M);
},isThemedColor:function(F){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(F);
},stringToRgb:function(C){if(this.supportsThemes()&&this.isThemedColor(C)){var C=qx.theme.manager.Color.getInstance().resolveDynamic(C);
}
if(this.isNamedColor(C)){return this.NAMED[C];
}else if(this.isSystemColor(C)){throw new Error("Could not convert system colors to RGB: "+C);
}else if(this.isRgbString(C)){return this.__fs();
}else if(this.isHex3String(C)){return this.__fu();
}else if(this.isHex6String(C)){return this.__fv();
}throw new Error("Could not parse color: "+C);
},cssStringToRgb:function(K){if(this.isNamedColor(K)){return this.NAMED[K];
}else if(this.isSystemColor(K)){throw new Error("Could not convert system colors to RGB: "+K);
}else if(this.isRgbString(K)){return this.__fs();
}else if(this.isRgbaString(K)){return this.__ft();
}else if(this.isHex3String(K)){return this.__fu();
}else if(this.isHex6String(K)){return this.__fv();
}throw new Error("Could not parse color: "+K);
},stringToRgbString:function(D){return this.rgbToRgbString(this.stringToRgb(D));
},rgbToRgbString:function(E){return O+E[0]+P+E[1]+P+E[2]+N;
},rgbToHexString:function(j){return (qx.lang.String.pad(j[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(j[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(j[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(k){return this.isThemedColor(k)||this.isNamedColor(k)||this.isHex3String(k)||this.isHex6String(k)||this.isRgbString(k);
},isCssString:function(A){return this.isSystemColor(A)||this.isNamedColor(A)||this.isHex3String(A)||this.isHex6String(A)||this.isRgbString(A);
},isHex3String:function(B){return this.REGEXP.hex3.test(B);
},isHex6String:function(z){return this.REGEXP.hex6.test(z);
},isRgbString:function(H){return this.REGEXP.rgb.test(H);
},isRgbaString:function(G){return this.REGEXP.rgba.test(G);
},__fs:function(){var S=parseInt(RegExp.$1,10);
var R=parseInt(RegExp.$2,10);
var Q=parseInt(RegExp.$3,10);
return [S,R,Q];
},__ft:function(){var e=parseInt(RegExp.$1,10);
var d=parseInt(RegExp.$2,10);
var c=parseInt(RegExp.$3,10);
return [e,d,c];
},__fu:function(){var V=parseInt(RegExp.$1,16)*17;
var U=parseInt(RegExp.$2,16)*17;
var T=parseInt(RegExp.$3,16)*17;
return [V,U,T];
},__fv:function(){var x=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var w=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var v=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [x,w,v];
},hex3StringToRgb:function(h){if(this.isHex3String(h)){return this.__fu(h);
}throw new Error("Invalid hex3 value: "+h);
},hex6StringToRgb:function(I){if(this.isHex6String(I)){return this.__fv(I);
}throw new Error("Invalid hex6 value: "+I);
},hexStringToRgb:function(a){if(this.isHex3String(a)){return this.__fu(a);
}
if(this.isHex6String(a)){return this.__fv(a);
}throw new Error("Invalid hex value: "+a);
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
},hsbToRgb:function(l){var i,f,p,q,t;
var m=l[0]/360;
var n=l[1]/100;
var o=l[2]/100;

if(m>=1.0){m%=1.0;
}
if(n>1.0){n=1.0;
}
if(o>1.0){o=1.0;
}var s=Math.floor(255*o);
var u={};

if(n==0.0){u.red=u.green=u.blue=s;
}else{m*=6.0;
i=Math.floor(m);
f=m-i;
p=Math.floor(s*(1.0-n));
q=Math.floor(s*(1.0-(n*f)));
t=Math.floor(s*(1.0-(n*(1.0-f))));

switch(i){case 0:u.red=s;
u.green=t;
u.blue=p;
break;
case 1:u.red=q;
u.green=s;
u.blue=p;
break;
case 2:u.red=p;
u.green=s;
u.blue=t;
break;
case 3:u.red=p;
u.green=q;
u.blue=s;
break;
case 4:u.red=t;
u.green=p;
u.blue=s;
break;
case 5:u.red=s;
u.green=p;
u.blue=q;
break;
}}return u;
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var r="px",q="div",p="img",o="qx.client",n="",m="scale-x",l="mshtml",k="no-repeat",j="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",i="scale-y",I="repeat",H=".png",G="scale",F="webkit",E='<div style="',D="repeat-y",C='<img src="',B="qx.bom.element.Decoration",A="png",z="', sizingMethod='scale')",x="', sizingMethod='crop')",y='"/>',v='" style="',w="none",t="repeat-x",u='"></div>',s="absolute";
qx.Class.define(B,{statics:{DEBUG:false,__ip:qx.core.Variant.isSet(o,l)&&qx.bom.client.Engine.VERSION<9,__iq:qx.core.Variant.select(o,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__ir:{"scale-x":p,"scale-y":p,"scale":p,"repeat":q,"no-repeat":q,"repeat-x":q,"repeat-y":q},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===p){J.src=P.src;
}if(J.style.backgroundPosition!=n&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=n&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
},create:function(c,d,e){var f=this.getTagName(d,c);
var h=this.getAttributes(c,d,e);
var g=qx.bom.element.Style.compile(h.style);

if(f===p){return C+h.src+v+g+y;
}else{return E+g+u;
}},getTagName:function(a,b){if(qx.core.Variant.isSet(o,l)){if(b&&this.__ip&&this.__iq[a]&&qx.lang.String.endsWith(b,H)){return q;
}}return this.__ir[a];
},getAttributes:function(Q,R,S){var W=qx.util.ResourceManager.getInstance();
var bc=qx.io2.ImageLoader;
var bd=qx.bom.element.Background;

if(!S){S={};
}
if(!S.position){S.position=s;
}
if(qx.core.Variant.isSet(o,l)){S.fontSize=0;
S.lineHeight=0;
}else if(qx.core.Variant.isSet(o,F)){S.WebkitUserDrag=w;
}var bb=W.getImageWidth(Q)||bc.getWidth(Q);
var ba=W.getImageHeight(Q)||bc.getHeight(Q);
var X=W.getImageFormat(Q)||bc.getFormat(Q);
{};
if(this.__ip&&this.__iq[R]&&X===A){if(S.width==null&&bb!=null){S.width=bb+r;
}
if(S.height==null&&ba!=null){S.height=ba+r;
}
if(R==k){S.filter=j+W.toUri(Q)+x;
}else{S.filter=j+W.toUri(Q)+z;
}S.backgroundImage=S.backgroundRepeat=n;
return {style:S};
}else{if(R===G){var Y=W.toUri(Q);

if(S.width==null&&bb!=null){S.width=bb+r;
}
if(S.height==null&&ba!=null){S.height=ba+r;
}return {src:Y,style:S};
}var V=W.isClippedImage(Q);

if(R===m||R===i){if(V){if(R===m){var bf=W.getData(Q);
var bh=W.getImageHeight(bf[4]);
var Y=W.toUri(bf[4]);
S.clip={top:-bf[6],height:ba};
S.height=bh+r;
if(S.top!=null){S.top=(parseInt(S.top,10)+bf[6])+r;
}else if(S.bottom!=null){S.bottom=(parseInt(S.bottom,10)+ba-bh-bf[6])+r;
}return {src:Y,style:S};
}else{var bf=W.getData(Q);
var be=W.getImageWidth(bf[4]);
var Y=W.toUri(bf[4]);
S.clip={left:-bf[5],width:bb};
S.width=be+r;
if(S.left!=null){S.left=(parseInt(S.left,10)+bf[5])+r;
}else if(S.right!=null){S.right=(parseInt(S.right,10)+bb-be-bf[5])+r;
}return {src:Y,style:S};
}}else{{};

if(R==m){S.height=ba==null?null:ba+r;
}else if(R==i){S.width=bb==null?null:bb+r;
}var Y=W.toUri(Q);
return {src:Y,style:S};
}}else{if(V&&R!==I){var bf=W.getData(Q);
var U=bd.getStyles(bf[4],R,bf[5],bf[6]);

for(var T in U){S[T]=U[T];
}
if(bb!=null&&S.width==null&&(R==D||R===k)){S.width=bb+r;
}
if(ba!=null&&S.height==null&&(R==t||R===k)){S.height=ba+r;
}return {style:S};
}else{{};
var U=bd.getStyles(Q,R);

for(var T in U){S[T]=U[T];
}
if(bb!=null&&S.width==null){S.width=bb+r;
}
if(ba!=null&&S.height==null){S.height=ba+r;
}if(S.filter){S.filter=n;
}return {style:S};
}}}}}});
})();
(function(){var u="qx.client",t="",s="boxSizing",r="cursor",q="opacity",p="clip",o="overflowY",n="overflowX",m="user-select",l="userSelect",W="appearance",V="style",U="MozUserModify",T="px",S="-webkit-appearance",R="styleFloat",Q="-webkit-user-select",P="-moz-appearance",O="pixelHeight",N="MozAppearance",B=":",C="pixelTop",z="pixelLeft",A="text-overflow",x="-moz-user-select",y="MozUserSelect",v="qx.bom.element.Style",w="-moz-user-modify",D="-webkit-user-modify",E="WebkitUserSelect",H="-o-text-overflow",G="pixelRight",J="cssFloat",I="pixelWidth",L="pixelBottom",K=";",F="WebkitUserModify",M="WebkitAppearance";
qx.Class.define(v,{statics:{__bI:{styleNames:{"float":qx.core.Variant.select(u,{"mshtml":R,"default":J}),"appearance":qx.core.Variant.select(u,{"gecko":N,"webkit":M,"default":W}),"userSelect":qx.core.Variant.select(u,{"gecko":y,"webkit":E,"default":l}),"userModify":qx.core.Variant.select(u,{"gecko":U,"webkit":F,"default":l})},cssNames:{"appearance":qx.core.Variant.select(u,{"gecko":P,"webkit":S,"default":W}),"userSelect":qx.core.Variant.select(u,{"gecko":x,"webkit":Q,"default":m}),"userModify":qx.core.Variant.select(u,{"gecko":w,"webkit":D,"default":m}),"textOverflow":qx.core.Variant.select(u,{"opera":H,"default":A})},mshtmlPixel:{width:I,height:O,left:z,right:G,top:C,bottom:L},special:{clip:1,cursor:1,opacity:1,boxSizing:1,overflowX:1,overflowY:1}},__bJ:{},compile:function(bc){var bg=[];
var bk=this.__bI;
var bj=bk.special;
var bh=bk.cssNames;
var bf=this.__bJ;
var bi=qx.lang.String;
var name,be,bd;

for(name in bc){bd=bc[name];

if(bd==null){continue;
}name=bh[name]||name;
if(bj[name]){switch(name){case p:bg.push(qx.bom.element.Clip.compile(bd));
break;
case r:bg.push(qx.bom.element.Cursor.compile(bd));
break;
case q:bg.push(qx.bom.element.Opacity.compile(bd));
break;
case s:bg.push(qx.bom.element.BoxSizing.compile(bd));
break;
case n:bg.push(qx.bom.element.Overflow.compileX(bd));
break;
case o:bg.push(qx.bom.element.Overflow.compileY(bd));
break;
}}else{be=bf[name];

if(!be){be=bf[name]=bi.hyphenate(name);
}bg.push(be,B,bd,K);
}}return bg.join(t);
},setCss:qx.core.Variant.select(u,{"mshtml":function(X,Y){X.style.cssText=Y;
},"default":function(ba,bb){ba.setAttribute(V,bb);
}}),getCss:qx.core.Variant.select(u,{"mshtml":function(e){return e.style.cssText.toLowerCase();
},"default":function(bz){return bz.getAttribute(V);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(a,name,b,c){{};
var d=this.__bI;
name=d.styleNames[name]||name;
if(c!==false&&d.special[name]){switch(name){case p:return qx.bom.element.Clip.set(a,b);
case r:return qx.bom.element.Cursor.set(a,b);
case q:return qx.bom.element.Opacity.set(a,b);
case s:return qx.bom.element.BoxSizing.set(a,b);
case n:return qx.bom.element.Overflow.setX(a,b);
case o:return qx.bom.element.Overflow.setY(a,b);
}}a.style[name]=b!==null?b:t;
},setStyles:function(bw,bx,by){{};

for(var name in bx){this.set(bw,name,bx[name],by);
}},reset:function(bt,name,bu){var bv=this.__bI;
name=bv.styleNames[name]||name;
if(bu!==false&&bv.special[name]){switch(name){case p:return qx.bom.element.Clip.reset(bt);
case r:return qx.bom.element.Cursor.reset(bt);
case q:return qx.bom.element.Opacity.reset(bt);
case s:return qx.bom.element.BoxSizing.reset(bt);
case n:return qx.bom.element.Overflow.resetX(bt);
case o:return qx.bom.element.Overflow.resetY(bt);
}}bt.style[name]=t;
},get:qx.core.Variant.select(u,{"mshtml":function(bl,name,bm,bn){var bs=this.__bI;
name=bs.styleNames[name]||name;
if(bn!==false&&bs.special[name]){switch(name){case p:return qx.bom.element.Clip.get(bl,bm);
case r:return qx.bom.element.Cursor.get(bl,bm);
case q:return qx.bom.element.Opacity.get(bl,bm);
case s:return qx.bom.element.BoxSizing.get(bl,bm);
case n:return qx.bom.element.Overflow.getX(bl,bm);
case o:return qx.bom.element.Overflow.getY(bl,bm);
}}if(!bl.currentStyle){return bl.style[name]||t;
}switch(bm){case this.LOCAL_MODE:return bl.style[name]||t;
case this.CASCADED_MODE:return bl.currentStyle[name]||t;
default:var br=bl.currentStyle[name]||t;
if(/^-?[\.\d]+(px)?$/i.test(br)){return br;
}var bq=bs.mshtmlPixel[name];

if(bq){var bo=bl.style[name];
bl.style[name]=br||0;
var bp=bl.style[bq]+T;
bl.style[name]=bo;
return bp;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(br)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return br;
}},"default":function(f,name,g,h){var k=this.__bI;
name=k.styleNames[name]||name;
if(h!==false&&k.special[name]){switch(name){case p:return qx.bom.element.Clip.get(f,g);
case r:return qx.bom.element.Cursor.get(f,g);
case q:return qx.bom.element.Opacity.get(f,g);
case s:return qx.bom.element.BoxSizing.get(f,g);
case n:return qx.bom.element.Overflow.getX(f,g);
case o:return qx.bom.element.Overflow.getY(f,g);
}}switch(g){case this.LOCAL_MODE:return f.style[name]||t;
case this.CASCADED_MODE:if(f.currentStyle){return f.currentStyle[name]||t;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var i=qx.dom.Node.getDocument(f);
var j=i.defaultView.getComputedStyle(f,null);
return j?j[name]:t;
}}})}});
})();
(function(){var C="auto",B="px",A=",",z="clip:auto;",y="rect(",x=");",w="",v=")",u="qx.bom.element.Clip",t="string",q="rect(auto)",s="clip:rect(",r="clip",p="rect(auto,auto,auto,auto)";
qx.Class.define(u,{statics:{compile:function(a){if(!a){return z;
}var f=a.left;
var top=a.top;
var e=a.width;
var d=a.height;
var b,c;

if(f==null){b=(e==null?C:e+B);
f=C;
}else{b=(e==null?C:f+e+B);
f=f+B;
}
if(top==null){c=(d==null?C:d+B);
top=C;
}else{c=(d==null?C:top+d+B);
top=top+B;
}return s+top+A+b+A+c+A+f+x;
},get:function(g,h){var j=qx.bom.element.Style.get(g,r,h,false);
var o,top,m,l;
var i,k;

if(typeof j===t&&j!==C&&j!==w){j=qx.lang.String.trim(j);
if(/\((.*)\)/.test(j)){var n=RegExp.$1.split(A);
top=qx.lang.String.trim(n[0]);
i=qx.lang.String.trim(n[1]);
k=qx.lang.String.trim(n[2]);
o=qx.lang.String.trim(n[3]);
if(o===C){o=null;
}
if(top===C){top=null;
}
if(i===C){i=null;
}
if(k===C){k=null;
}if(top!=null){top=parseInt(top,10);
}
if(i!=null){i=parseInt(i,10);
}
if(k!=null){k=parseInt(k,10);
}
if(o!=null){o=parseInt(o,10);
}if(i!=null&&o!=null){m=i-o;
}else if(i!=null){m=i;
}
if(k!=null&&top!=null){l=k-top;
}else if(k!=null){l=k;
}}else{throw new Error("Could not parse clip string: "+j);
}}return {left:o||null,top:top||null,width:m||null,height:l||null};
},set:function(D,E){if(!E){D.style.clip=p;
return;
}var J=E.left;
var top=E.top;
var I=E.width;
var H=E.height;
var F,G;

if(J==null){F=(I==null?C:I+B);
J=C;
}else{F=(I==null?C:J+I+B);
J=J+B;
}
if(top==null){G=(H==null?C:H+B);
top=C;
}else{G=(H==null?C:top+H+B);
top=top+B;
}D.style.clip=y+top+A+F+A+G+A+J+v;
},reset:function(K){K.style.clip=qx.bom.client.Engine.MSHTML?q:C;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__dS:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(o){return g+(this.__dS[o]||o)+e;
},get:function(p,q){return qx.bom.element.Style.get(p,c,q,false);
},set:function(m,n){m.style.cursor=this.__dS[n]||n;
},reset:function(a){a.style.cursor=h;
}}});
})();
(function(){var w="",v="qx.client",u=";",t="filter",s="opacity:",r="opacity",q="MozOpacity",p=");",o=")",n="zoom:1;filter:alpha(opacity=",k="qx.bom.element.Opacity",m="alpha(opacity=",l="-moz-opacity:";
qx.Class.define(k,{statics:{compile:qx.core.Variant.select(v,{"mshtml":function(c){if(c>=1){return w;
}
if(c<0.00001){c=0;
}return n+(c*100)+p;
},"gecko":function(B){if(B==1){B=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return l+B+u;
}else{return s+B+u;
}},"default":function(K){if(K==1){return w;
}return s+K+u;
}}),set:qx.core.Variant.select(v,{"mshtml":function(d,e){var f=qx.bom.element.Style.get(d,t,qx.bom.element.Style.COMPUTED_MODE,false);
if(e>=1){d.style.filter=f.replace(/alpha\([^\)]*\)/gi,w);
return;
}
if(e<0.00001){e=0;
}if(!d.currentStyle||!d.currentStyle.hasLayout){d.style.zoom=1;
}d.style.filter=f.replace(/alpha\([^\)]*\)/gi,w)+m+e*100+o;
},"gecko":function(I,J){if(J==1){J=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){I.style.MozOpacity=J;
}else{I.style.opacity=J;
}},"default":function(a,b){if(b==1){b=w;
}a.style.opacity=b;
}}),reset:qx.core.Variant.select(v,{"mshtml":function(C){var D=qx.bom.element.Style.get(C,t,qx.bom.element.Style.COMPUTED_MODE,false);
C.style.filter=D.replace(/alpha\([^\)]*\)/gi,w);
},"gecko":function(E){if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=w;
}else{E.style.opacity=w;
}},"default":function(A){A.style.opacity=w;
}}),get:qx.core.Variant.select(v,{"mshtml":function(g,h){var i=qx.bom.element.Style.get(g,t,h,false);

if(i){var j=i.match(/alpha\(opacity=(.*)\)/);

if(j&&j[1]){return parseFloat(j[1])/100;
}}return 1.0;
},"gecko":function(x,y){var z=qx.bom.element.Style.get(x,qx.bom.client.Engine.VERSION<1.7?q:r,y,false);

if(z==0.999999){z=1.0;
}
if(z!=null){return parseFloat(z);
}return 1.0;
},"default":function(F,G){var H=qx.bom.element.Style.get(F,r,G,false);

if(H!=null){return parseFloat(H);
}return 1.0;
}})}});
})();
(function(){var w="qx.client",v="",u="boxSizing",t="box-sizing",s=":",r="border-box",q="qx.bom.element.BoxSizing",p="KhtmlBoxSizing",o="-moz-box-sizing",n="WebkitBoxSizing",j=";",m="-khtml-box-sizing",k="content-box",h="-webkit-box-sizing",g="MozBoxSizing";
qx.Class.define(q,{statics:{__bR:qx.core.Variant.select(w,{"mshtml":null,"webkit":[u,p,n],"gecko":[g],"opera":[u]}),__bS:qx.core.Variant.select(w,{"mshtml":null,"webkit":[t,m,h],"gecko":[o],"opera":[t]}),__bT:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__bU:function(C){var D=this.__bT;
return D.tags[C.tagName.toLowerCase()]||D.types[C.type];
},compile:qx.core.Variant.select(w,{"mshtml":function(x){{};
},"default":function(d){var f=this.__bS;
var e=v;

if(f){for(var i=0,l=f.length;i<l;i++){e+=f[i]+s+d+j;
}}return e;
}}),get:qx.core.Variant.select(w,{"mshtml":function(c){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(c))){if(!this.__bU(c)){return k;
}}return r;
},"default":function(y){var A=this.__bR;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==v){return z;
}}}return v;
}}),set:qx.core.Variant.select(w,{"mshtml":function(a,b){{};
},"default":function(E,F){var G=this.__bR;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(B){this.set(B,v);
}}});
})();
(function(){var j="CSS1Compat",i="qx.bom.Document";
qx.Class.define(i,{statics:{isQuirksMode:function(k){return (k||window).document.compatMode!==j;
},isStandardMode:function(l){return (l||window).document.compatMode===j;
},getWidth:function(e){var f=(e||window).document;
var h=qx.bom.Viewport.getWidth(e);
var g=(qx.bom.client.Engine.OPERA&&qx.bom.client.Engine.VERSION>9.5&&qx.bom.client.Engine.VERSION<=10);
var scroll=f.compatMode===j?f.documentElement.scrollWidth:f.body.scrollWidth;
return g?h:Math.max(scroll,h);
},getHeight:function(a){var b=(a||window).document;
var d=qx.bom.Viewport.getHeight(a);
var c=(qx.bom.client.Engine.OPERA&&qx.bom.client.Engine.VERSION>9.5&&qx.bom.client.Engine.VERSION<=10);
var scroll=b.compatMode===j?b.documentElement.scrollHeight:b.body.scrollHeight;
return c?d:Math.max(scroll,d);
}}});
})();
(function(){var h="qx.client",g="CSS1Compat",f="qx.bom.Viewport";
qx.Class.define(f,{statics:{getWidth:qx.core.Variant.select(h,{"opera":function(e){return (e||window).document.body.clientWidth;
},"webkit":function(m){return (m||window).innerWidth;
},"default":function(n){var o=(n||window).document;
return o.compatMode===g?o.documentElement.clientWidth:o.body.clientWidth;
}}),getHeight:qx.core.Variant.select(h,{"opera":function(i){return (i||window).document.body.clientHeight;
},"webkit":function(k){return (k||window).innerHeight;
},"default":function(a){var b=(a||window).document;
return b.compatMode===g?b.documentElement.clientHeight:b.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(h,{"mshtml":function(c){var d=(c||window).document;
return d.documentElement.scrollLeft||d.body.scrollLeft;
},"default":function(j){return (j||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(h,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollTop||q.body.scrollTop;
},"default":function(l){return (l||window).pageYOffset;
}})}});
})();
(function(){var bJ="",bI="qx.client",bH="hidden",bG="-moz-scrollbars-none",bF="overflow",bE=";",bD="overflowY",bC=":",bB="overflowX",bA="overflow:",bV="none",bU="scroll",bT="borderLeftStyle",bS="borderRightStyle",bR="div",bQ="borderRightWidth",bP="overflow-y",bO="borderLeftWidth",bN="-moz-scrollbars-vertical",bM="100px",bK="qx.bom.element.Overflow",bL="overflow-x";
qx.Class.define(bK,{statics:{__im:null,getScrollbarWidth:function(){if(this.__im!==null){return this.__im;
}var M=qx.bom.element.Style;
var O=function(k,l){return parseInt(M.get(k,l))||0;
};
var P=function(x){return (M.get(x,bS)==bV?0:O(x,bQ));
};
var N=function(o){return (M.get(o,bT)==bV?0:O(o,bO));
};
var R=qx.core.Variant.select(bI,{"mshtml":function(q){if(M.get(q,bD)==bH||q.clientWidth==0){return P(q);
}return Math.max(0,q.offsetWidth-q.clientLeft-q.clientWidth);
},"default":function(bf){if(bf.clientWidth==0){var bg=M.get(bf,bF);
var bh=(bg==bU||bg==bN?16:0);
return Math.max(0,P(bf)+bh);
}return Math.max(0,(bf.offsetWidth-bf.clientWidth-N(bf)));
}});
var Q=function(bp){return R(bp)-P(bp);
};
var t=document.createElement(bR);
var s=t.style;
s.height=s.width=bM;
s.overflow=bU;
document.body.appendChild(t);
var c=Q(t);
this.__im=c?c:16;
document.body.removeChild(t);
return this.__im;
},_compile:qx.core.Variant.select(bI,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cb,cc){if(cc==bH){cc=bG;
}return bA+cc+bE;
}:
function(bs,bt){return bs+bC+bt+bE;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(K,L){return bA+L+bE;
}:
function(bY,ca){return bY+bC+ca+bE;
},"default":function(bd,be){return bd+bC+be+bE;
}}),compileX:function(ba){return this._compile(bL,ba);
},compileY:function(m){return this._compile(bP,m);
},getX:qx.core.Variant.select(bI,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(H,I){var J=qx.bom.element.Style.get(H,bF,I,false);

if(J===bG){J=bH;
}return J;
}:
function(r,u){return qx.bom.element.Style.get(r,bB,u,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(U,V){return qx.bom.element.Style.get(U,bF,V,false);
}:
function(D,E){return qx.bom.element.Style.get(D,bB,E,false);
},"default":function(S,T){return qx.bom.element.Style.get(S,bB,T,false);
}}),setX:qx.core.Variant.select(bI,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(y,z){if(z==bH){z=bG;
}y.style.overflow=z;
}:
function(bq,br){bq.style.overflowX=br;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(g,h){g.style.overflow=h;
}:
function(A,B){A.style.overflowX=B;
},"default":function(bk,bl){bk.style.overflowX=bl;
}}),resetX:qx.core.Variant.select(bI,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(C){C.style.overflow=bJ;
}:
function(n){n.style.overflowX=bJ;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(by,bz){by.style.overflow=bJ;
}:
function(ce,cf){ce.style.overflowX=bJ;
},"default":function(Y){Y.style.overflowX=bJ;
}}),getY:qx.core.Variant.select(bI,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(d,e){var f=qx.bom.element.Style.get(d,bF,e,false);

if(f===bG){f=bH;
}return f;
}:
function(bn,bo){return qx.bom.element.Style.get(bn,bD,bo,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(W,X){return qx.bom.element.Style.get(W,bF,X,false);
}:
function(bW,bX){return qx.bom.element.Style.get(bW,bD,bX,false);
},"default":function(bi,bj){return qx.bom.element.Style.get(bi,bD,bj,false);
}}),setY:qx.core.Variant.select(bI,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(v,w){if(w===bH){w=bG;
}v.style.overflow=w;
}:
function(bw,bx){bw.style.overflowY=bx;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bu,bv){bu.style.overflow=bv;
}:
function(a,b){a.style.overflowY=b;
},"default":function(i,j){i.style.overflowY=j;
}}),resetY:qx.core.Variant.select(bI,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(p){p.style.overflow=bJ;
}:
function(bm){bm.style.overflowY=bJ;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(F,G){F.style.overflow=bJ;
}:
function(bb,bc){bb.style.overflowY=bJ;
},"default":function(cd){cd.style.overflowY=bJ;
}})}});
})();
(function(){var j="qx.client",h="qx.io2.ImageLoader",g="load";
qx.Bootstrap.define(h,{statics:{__dM:{},__dN:{width:null,height:null},__dO:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(c){var d=this.__dM[c];
return !!(d&&d.loaded);
},isFailed:function(a){var b=this.__dM[a];
return !!(b&&b.failed);
},isLoading:function(m){var n=this.__dM[m];
return !!(n&&n.loading);
},getFormat:function(F){if(F!=null&&this.__dM[F]){return this.__dM[F]||null;
}else{return null;
}},getSize:function(q){return this.__dM[q]||this.__dN;
},getWidth:function(o){var p=this.__dM[o];
return p?p.width:null;
},getHeight:function(e){var f=this.__dM[e];
return f?f.height:null;
},load:function(y,z,A){var B=this.__dM[y];

if(!B){B=this.__dM[y]={};
}if(z&&!A){A=window;
}if(B.loaded||B.loading||B.failed){if(z){if(B.loading){B.callbacks.push(z,A);
}else{z.call(A,y,B);
}}}else{B.loading=true;
B.callbacks=[];

if(z){B.callbacks.push(z,A);
}var D=new Image();
var C=qx.lang.Function.listener(this.__dP,this,D,y);
D.onload=C;
D.onerror=C;
D.src=y;
}},__dP:qx.event.GlobalError.observeMethod(function(event,t,u){var v=this.__dM[u];
if(event.type===g){v.loaded=true;
v.width=this.__dQ(t);
v.height=this.__dR(t);
var w=this.__dO.exec(u);

if(w!=null){v.format=w[1];
}}else{v.failed=true;
}t.onload=t.onerror=null;
var x=v.callbacks;
delete v.loading;
delete v.callbacks;
for(var i=0,l=x.length;i<l;i+=2){x[i].call(x[i+1],u,v);
}}),__dQ:qx.core.Variant.select(j,{"gecko":function(k){return k.naturalWidth;
},"default":function(s){return s.width;
}}),__dR:qx.core.Variant.select(j,{"gecko":function(r){return r.naturalHeight;
},"default":function(E){return E.height;
}})}});
})();
(function(){var l="_window",k="_manager",j="qx.event.handler.Window";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){arguments.callee.base.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,g){},registerEvent:function(m,n,o){},unregisterEvent:function(p,q,r){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var d=qx.event.handler.Window.SUPPORTED_TYPES;

for(var c in d){qx.bom.Event.addNativeListener(this._window,c,this._onNativeWrapper);
}},_stopWindowObserver:function(){var i=qx.event.handler.Window.SUPPORTED_TYPES;

for(var h in i){qx.bom.Event.removeNativeListener(this._window,h,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var t=this._window;
var w=t.document;
var u=w.documentElement;
var s=e.target||e.srcElement;

if(s==null||s===t||s===w||s===u){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,t]);
qx.event.Registration.dispatchEvent(t,event);
var v=event.getReturnValue();

if(v!=null){e.returnValue=v;
return v;
}}})},destruct:function(){this._stopWindowObserver();
this._disposeFields(k,l);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var g="ready",f="qx.application",d="beforeunload",c="qx.core.Init",b="shutdown";
qx.Class.define(c,{statics:{getApplication:function(){return this.__hX||null;
},__hW:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(f);
var j=qx.Class.getByName(i);

if(j){this.__hX=new j;
var h=new Date;
this.__hX.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__hX.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__hY:function(e){var k=this.__hX;

if(k){e.setReturnValue(k.close());
}},__ia:function(){var l=this.__hX;

if(l){l.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,g,a.__hW,a);
qx.event.Registration.addListener(window,b,a.__ia,a);
qx.event.Registration.addListener(window,d,a.__hY,a);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="portal.Application";
qx.Class.define(a,{extend:qx.application.Native,members:{main:function(){arguments.callee.base.call(this);
{};
portal.box.Manager.getInstance().load();
portal.dragdrop.Manager.getInstance();
}}});
})();
(function(){var d="qx.event.type.Native",c="_native",b="_returnValue";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(e,f,g,h,i){arguments.callee.base.call(this,h,i);
this._target=f||qx.bom.Event.getTarget(e);
this._relatedTarget=g||qx.bom.Event.getRelatedTarget(e);

if(e.timeStamp){this._timeStamp=e.timeStamp;
}this._native=e;
return this;
},clone:function(j){var k=arguments.callee.base.call(this,j);
k._native=this._native;
k._returnValue=this._returnValue;
return k;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},stop:function(){this.stopPropagation();
this.preventDefault();
},getNativeEvent:function(){return this._native;
},setReturnValue:function(a){this._returnValue=a;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._disposeFields(c,b);
}});
})();
(function(){var p="groupBoxes",o="boxData",n="portal.box.Box",m="__a",h="__b",g="portal.box.Manager",f="qx.event.type.Event",e="boxes",d="__c",c="_applyActiveBox",a="loaded",b="singleton";
qx.Class.define(g,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__a=[];
this.__b=[];
this.__c={};
},statics:{dataKeyRoot:o,dataKeyGroupBoxes:p,dataKeyBoxes:e},events:{"loaded":f},properties:{activeBox:{init:null,check:n,apply:c}},members:{__a:null,__b:null,__c:null,_applyActiveBox:function(q,r){if(r!=null){r.setActive(false);
}q.setActive(true);
},load:function(){this.__d(window[portal.box.Manager.dataKeyRoot]);
qx.event.Registration.fireEvent(this,a);
},__d:function(s){var w,z,x,y,A,s;
var t=s[portal.box.Manager.dataKeyGroupBoxes];
var v=s[portal.box.Manager.dataKeyBoxes];
for(var z in t){w=t[z];
x=w.boxes;
z=w.id;
y={id:z,element:document.getElementById(z)};
this.__b.push(y);
this.__c[z]=[];
for(var k=0,l=x.length;k<l;k++){s=v[x[k]];
var u=document.getElementById(s.id);
var A=new portal.box.Box(s,u,null,z);
this.__a.push(A);
this.__c[z].push(A);
}}},getBoxes:function(){return this.__a;
},getGroupBoxes:function(){return this.__b;
},updateGroupBoxMembers:function(D,E,F){var G=qx.dom.Hierarchy.getElementIndex(F.getElement());
qx.lang.Array.remove(this.__c[E],F);
qx.lang.Array.insertAt(this.__c[D],F,G);
},getGroupBoxDataOfBox:function(B){for(var i=0,j=this.__b.length,C;i<j;i++){C=this.__c[this.__b[i].id];

for(var k=0,l=C.length;k<l;k++){if(C[k].getId()===B){return this.__b[i];
}}}return null;
}},destruct:function(){this._disposeFields(m,h,d);
}});
})();
(function(){var r="Boolean",q="border",p="height",o="__g",n="accumsan sit amet, nibh. Nam ut est. Nullam ultricies congue ",m="__e",l="erat volutpat. Praesent lorem arcu, cursus vel, congue vitae, ",k="div",j="1px solid orange",i="orci. Morbi nulla. Donec quis ipsum.",G="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",F="_applyActive",E="at, justo. Sed aliquam aliquam orci. Sed in purus. Aliquam ",D="relative",C="String",B="1px solid #444444",A="width",z="zIndex",y="portal.box.Box",x="click",v="position",w="Sed molestie volutpat lorem. Donec consequat magna ut ipsum. ",t="__h",u="Integer enim ligula, placerat et, posuere sit amet, tempor ",s="box_content";
qx.Class.define(y,{extend:qx.core.Object,construct:function(a,b,c,d){arguments.callee.base.call(this);
this.__e=a;
this.__f=a.id;

if(b!=null){qx.bom.element.Style.set(b,A,a.width);
qx.bom.element.Style.set(b,p,a.height);
this.__i(b,c);
}this.setElement(b);
this.setGroupBoxId(d);
this.__g=null;
this.__h=null;
if(a.resizable){this.setResizable(true);
var f={minWidth:parseInt(a.minWidth),minHeight:parseInt(a.minHeight),maxWidth:parseInt(a.maxWidth),maxHeight:parseInt(a.maxHeight),handles:a.resizeHandles};
this.__g=new portal.box.Resizable(this,f);
}if(a.draggable){this.setDraggable(true);
this.__h=new portal.box.Draggable(this);
}this.__j();
},properties:{element:{init:null},groupBoxId:{init:null,check:C},active:{check:r,init:false,apply:F},resizable:{check:r,init:false},draggable:{check:r,init:false}},members:{__f:null,__e:null,__h:null,__g:null,_applyActive:function(H,I){if(H){qx.bom.element.Style.set(this.getElement(),q,j);
}else{qx.bom.element.Style.set(this.getElement(),q,B);
}},getId:function(){return this.getElement()?this.getElement().id:null;
},getData:function(){return this.__e;
},getDraggableComponent:function(){return this.__h;
},getResizableComponent:function(){return this.__g;
},__i:function(J,K){if(K){for(var L in K){qx.bom.element.Style.set(L,K[L]);
}}qx.bom.element.Style.set(J,v,D);
qx.bom.element.Style.set(J,z,0);
qx.bom.Element.addListener(J,x,this.__k,this,true);
},__j:function(){var h=G+w+u+E+l+n+i;
var g=qx.bom.Element.create(k,{"class":s});
g.innerHTML=h;
qx.dom.Element.insertEnd(g,this.getElement());
},__k:function(e){portal.box.Manager.getInstance().setActiveBox(this);
}},destruct:function(){this.resetElement();
this._disposeFields(m,o,t);
}});
})();
(function(){var n="visibility",m="hidden",l="mouseout",k="orientation",j="visible",i="mousemove",h="mouseover",g="text",f="mousedown",d="Handle",D="paddingLeft",C="qx.client",B="div",A="portal.box.Resizable",z="__m",y="_",x="__p",w="paddingBottom",v="___elementProperties",u="paddingTop",s="mshtml",t="mouseup",q="__r",r="paddingRight",o="__n",p="__l";
qx.Class.define(A,{extend:qx.core.Object,construct:function(b,c){arguments.callee.base.call(this);
this.__l=b;
this.__m=this.__l.getElement();
this.__n={};
this.__o=false;
this.__p=null;
this.__q={orientation:null,lastCoord:{left:null,top:null}};
this.__r={minWidth:10,minHeight:10,maxWidth:null,maxHeight:null,autoHide:true,handles:3};

for(var name in this.__r){if(c[name]){this.__r[name]=c[name];
}}this.__t();
},members:{__s:null,__q:null,__l:null,__m:null,__n:null,__r:null,__o:false,__p:null,getBox:function(){return this.__l;
},__t:function(){this.__s={paddingTop:parseInt(qx.bom.element.Style.get(this.__m,u)),paddingRight:parseInt(qx.bom.element.Style.get(this.__m,r)),paddingBottom:parseInt(qx.bom.element.Style.get(this.__m,w)),paddingLeft:parseInt(qx.bom.element.Style.get(this.__m,D))};

switch(this.__r.handles){case 1:this.__n.east=null;
break;
case 2:this.__n.south=null;
break;
case 3:this.__n.south=null;
this.__n.southeast=null;
this.__n.east=null;
break;
}for(var I in this.__n){var H=this.__n[I]=qx.bom.Element.create(B);
qx.bom.element.Attribute.set(H,k,I);
qx.dom.Element.insertEnd(H,this.__m);

if(this.__m.id){H.id=this.__m.id+y+I;
}this.__u(I);
this.__v(I);
}},__u:function(V){qx.bom.element.Class.add(this.__n[V],V+d);
qx.bom.element.Style.set(this.__n[V],n,this.__r.autoHide?m:j);
},__v:function(F){var G=this.__n[F];
qx.event.Registration.addListener(G,f,this.__y,this);
qx.event.Registration.addListener(document.body,t,this.__z,this);

if(this.__r.autoHide){qx.event.Registration.addListener(this.__l.getElement(),h,this.__w,this);
qx.event.Registration.addListener(this.__l.getElement(),l,this.__x,this);
}},__w:function(e){for(var X in this.__n){qx.bom.element.Style.set(this.__n[X],n,j);
}},__x:function(e){if(!this.__o){for(var W in this.__n){qx.bom.element.Style.set(this.__n[W],n,m);
}}},__y:function(e){e.stopPropagation();
if(e.isLeftPressed()){qx.event.Registration.addListener(document.body,i,this.__A,this,true);
this.__o=true;
var a=e.getTarget();
this.__q.orientation=qx.bom.element.Attribute.get(a,k);
this.__q.lastCoord.left=e.getDocumentLeft();
this.__q.lastCoord.top=e.getDocumentTop();
portal.box.Util.bringToFront(this.__m);
}},__z:function(e){e.stopPropagation();

if(this.__o){qx.event.Registration.removeListener(document.body,i,this.__A,this,true);
portal.box.Util.sendToBack(this.__m);

if(this.__r.autoHide){for(var U in this.__n){qx.bom.element.Style.set(this.__n[U],n,m);
}}this.__o=false;

if(qx.core.Variant.isSet(C,s)){if(document.selection.type.toLowerCase()==g){document.selection.empty();
}}}},__A:function(e){e.stopPropagation();

if(this.__o){var E={left:null,top:null};

switch(this.__q.orientation){case "south":E.top=e.getDocumentTop();
break;
case "southeast":E.top=e.getDocumentTop();
E.left=e.getDocumentLeft();
break;
case "east":E.left=e.getDocumentLeft();
break;
}this.__B(E,this.__q.lastCoord);
this.__q.lastCoord.left=e.getDocumentLeft();
this.__q.lastCoord.top=e.getDocumentTop();
}},__B:function(J,K){var Q;
var P=portal.box.Util;
var R=portal.box.Manager.getInstance().getGroupBoxDataOfBox(this.__l.getId());
var N=portal.box.Util.getComputedDimension(R.element);

if(J.left){var Q=J.left-K.left;

if(Q!==0){var L=this.__m.clientWidth;
var S=(L+Q)-(this.__s['paddingLeft']+this.__s['paddingRight']);

if((this.__r.minWidth==null||S>this.__r.minWidth)&&(this.__r.maxWidth==null||S<=this.__r.maxWidth)){if(qx.core.Variant.isSet("qx.client","mshtml")){var M=N.width-P.getStyleProperty(R.element,"paddingRight",true)-P.getStyleProperty(this.__m,"borderRightWidth",true)-P.getStyleProperty(this.__m,"borderLeftWidth",true)-P.getStyleProperty(this.__m,"marginRight",true)-P.getStyleProperty(this.__m,"marginLeft",true);
}else{var M=N.width-P.getStyleProperty(R.element,"paddingRight",true)-P.getStyleProperty(this.__m,"paddingRight",true)-P.getStyleProperty(this.__m,"paddingLeft",true)-P.getStyleProperty(this.__m,"borderRightWidth",true)-P.getStyleProperty(this.__m,"borderLeftWidth",true)-P.getStyleProperty(this.__m,"marginRight",true)-P.getStyleProperty(this.__m,"marginLeft",true);
}
if(M>=S){qx.bom.element.Style.set(this.__m,"width",S+'px');
}}}}
if(J.top){var Q=J.top-K.top;
if(Q!==0){var O=this.__m.clientHeight;
var T=(O+Q)-(this.__s['paddingTop']+this.__s['paddingBottom']);

if((this.__r.minHeight==null||T>this.__r.minHeight)&&(this.__r.maxHeight==null||T<=this.__r.maxHeight)){qx.bom.element.Style.set(this.__m,"height",T+"px");
}}}}},destruct:function(){if(this.__r.autoHide){qx.event.Registration.removeListener(this.__l.getElement(),h,this.__w,this);
qx.event.Registration.removeListener(this.__l.getElement(),l,this.__x,this);
}this._disposeFields(p,q,z,o,x,v);
}});
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
(function(){var c="qx.event.dispatch.DomBubbling";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(a,event,b){return a.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var g="qx.event.handler.UserAction",f="__ig",e="__if";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(j){arguments.callee.base.call(this);
this.__if=j;
this.__ig=j.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__if:null,__ig:null,canHandleEvent:function(h,i){},registerEvent:function(a,b,c){},unregisterEvent:function(k,l,m){}},destruct:function(){this._disposeFields(e,f);
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var bl="keydown",bk="keypress",bj="qx.client",bi="NumLock",bh="keyup",bg="Enter",bf="0",be="9",bd="-",bc="PageUp",cw="+",cv="PrintScreen",cu="gecko",ct="A",cs="Z",cr="Left",cq="F5",cp="Down",co="Up",cn="F11",bs="F6",bt="useraction",bq="F3",br="keyinput",bo="Insert",bp="F8",bm="End",bn="/",bA="Delete",bB="*",bP="F1",bL="F4",bX="Home",bS="F2",cj="F12",cd="PageDown",bG="F7",cm="F9",cl="F10",ck="Right",bE="text",bI="Escape",bK="webkit",bN="5",bQ="3",bT="Meta",ca="7",cf="CapsLock",bu="input",bv="Control",bH="Space",bW="Tab",bV="Shift",bU="Pause",cc="Unidentified",cb="qx.event.handler.Keyboard",bR="__fG",bY="mshtml",Y="mshtml|webkit",ce="6",bw="off",bx="Apps",bM="__fH",ba="4",bb="Alt",bD="__fF",by="2",bz="Scroll",bC="1",bO="__fE",ch="8",cg="Win",bJ="autoComplete",ci=",",bF="Backspace";
qx.Class.define(cb,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cI){arguments.callee.base.call(this);
this.__fE=cI;
this.__fF=cI.getWindow();
if(qx.core.Variant.isSet(bj,cu)){this.__fG=this.__fF;
}else{this.__fG=this.__fF.document.documentElement;
}this.__fH={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(g){if(this._identifierToKeyCodeMap[g]){return true;
}
if(g.length!=1){return false;
}
if(g>=bf&&g<=be){return true;
}
if(g>=ct&&g<=cs){return true;
}
switch(g){case cw:case bd:case bB:case bn:return true;
default:return false;
}}},members:{__fI:null,__fE:null,__fF:null,__fG:null,__fH:null,__fJ:null,__fK:null,canHandleEvent:function(t,u){},registerEvent:function(cA,cB,cC){},unregisterEvent:function(cx,cy,cz){},_fireInputEvent:function(F,G){var H=this.__fE.getHandler(qx.event.handler.Focus);
var I=H.getActive();
if(!I||I.offsetWidth==0){I=H.getFocus();
}if(I&&I.offsetWidth!=0){var event=qx.event.Registration.createEvent(br,qx.event.type.KeyInput,[F,I,G]);
this.__fE.dispatchEvent(I,event);
}if(this.__fF){qx.event.Registration.fireEvent(this.__fF,bt,qx.event.type.Data,[br]);
}},_fireSequenceEvent:function(z,A,B){var C=this.__fE.getHandler(qx.event.handler.Focus);
var E=C.getActive();
if(!E||E.offsetWidth==0){E=C.getFocus();
}if(!E||E.offsetWidth==0){E=this.__fE.getWindow().document.body;
}var event=qx.event.Registration.createEvent(A,qx.event.type.KeySequence,[z,E,B]);
this.__fE.dispatchEvent(E,event);
if(qx.core.Variant.isSet(bj,Y)){if(A==bl&&event.getDefaultPrevented()){var D=z.keyCode;

if(!(this._isNonPrintableKeyCode(D)||D==8||D==9)){this._fireSequenceEvent(z,bk,B);
}}}if(this.__fF){qx.event.Registration.fireEvent(this.__fF,bt,qx.event.type.Data,[A]);
}},_initKeyObserver:function(){this.__fI=qx.lang.Function.listener(this.__fL,this);
this.__fK=qx.lang.Function.listener(this.__fN,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fG,bh,this.__fI);
Event.addNativeListener(this.__fG,bl,this.__fI);
Event.addNativeListener(this.__fG,bk,this.__fK);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fG,bh,this.__fI);
Event.removeNativeListener(this.__fG,bl,this.__fI);
Event.removeNativeListener(this.__fG,bk,this.__fK);

for(var m in (this.__fJ||{})){var l=this.__fJ[m];
Event.removeNativeListener(l.target,bk,l.callback);
}delete (this.__fJ);
},__fL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bj,{"mshtml":function(v){v=window.event||v;
var y=v.keyCode;
var w=0;
var x=v.type;
if(!(this.__fH[y]==bl&&x==bl)){this._idealKeyHandler(y,w,x,v);
}if(x==bl){if(this._isNonPrintableKeyCode(y)||y==8||y==9){this._idealKeyHandler(y,w,bk,v);
}}this.__fH[y]=x;
},"gecko":function(o){var s=this._keyCodeFix[o.keyCode]||o.keyCode;
var q=0;
var r=o.type;
if(qx.bom.client.Platform.WIN){var p=s?this._keyCodeToIdentifier(s):this._charCodeToIdentifier(q);

if(!(this.__fH[p]==bl&&r==bl)){this._idealKeyHandler(s,q,r,o);
}this.__fH[p]=r;
}else{this._idealKeyHandler(s,q,r,o);
}this.__fM(o.target,r,s);
},"webkit":function(b){var e=0;
var c=0;
var d=b.type;
if(qx.bom.client.Engine.VERSION<525.13){if(d==bh||d==bl){e=this._charCode2KeyCode[b.charCode]||b.keyCode;
}else{if(this._charCode2KeyCode[b.charCode]){e=this._charCode2KeyCode[b.charCode];
}else{c=b.charCode;
}}this._idealKeyHandler(e,c,d,b);
}else{e=b.keyCode;
if(!(this.__fH[e]==bl&&d==bl)){this._idealKeyHandler(e,c,d,b);
}if(d==bl){if(this._isNonPrintableKeyCode(e)||e==8||e==9){this._idealKeyHandler(e,c,bk,b);
}}this.__fH[e]=d;
}},"opera":function(O){this._idealKeyHandler(O.keyCode,0,O.type,O);
}})),__fM:qx.core.Variant.select(bj,{"gecko":function(cD,cE,cF){if(cE===bl&&(cF==33||cF==34||cF==38||cF==40)&&cD.type==bE&&cD.tagName.toLowerCase()===bu&&cD.getAttribute(bJ)!==bw){if(!this.__fJ){this.__fJ={};
}var cH=qx.core.ObjectRegistry.toHashCode(cD);

if(this.__fJ[cH]){return;
}var self=this;
this.__fJ[cH]={target:cD,callback:function(R){qx.bom.Event.stopPropagation(R);
self.__fN(R);
}};
var cG=qx.event.GlobalError.observeMethod(this.__fJ[cH].callback);
qx.bom.Event.addNativeListener(cD,bk,cG);
}},"default":null}),__fN:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bj,{"mshtml":function(J){J=window.event||J;

if(this._charCode2KeyCode[J.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[J.keyCode],0,J.type,J);
}else{this._idealKeyHandler(0,J.keyCode,J.type,J);
}},"gecko":function(K){var N=this._keyCodeFix[K.keyCode]||K.keyCode;
var L=K.charCode;
var M=K.type;
this._idealKeyHandler(N,L,M,K);
},"webkit":function(U){if(qx.bom.client.Engine.VERSION<525.13){var X=0;
var V=0;
var W=U.type;

if(W==bh||W==bl){X=this._charCode2KeyCode[U.charCode]||U.keyCode;
}else{if(this._charCode2KeyCode[U.charCode]){X=this._charCode2KeyCode[U.charCode];
}else{V=U.charCode;
}}this._idealKeyHandler(X,V,W,U);
}else{if(this._charCode2KeyCode[U.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[U.keyCode],0,U.type,U);
}else{this._idealKeyHandler(0,U.keyCode,U.type,U);
}}},"opera":function(n){if(this._keyCodeToIdentifierMap[n.keyCode]){this._idealKeyHandler(n.keyCode,0,n.type,n);
}else{this._idealKeyHandler(0,n.keyCode,n.type,n);
}}})),_idealKeyHandler:function(cJ,cK,cL,cM){if(!cJ&&!cK){return;
}var cN;
if(cJ){cN=this._keyCodeToIdentifier(cJ);
this._fireSequenceEvent(cM,cL,cN);
}else{cN=this._charCodeToIdentifier(cK);
this._fireSequenceEvent(cM,bk,cN);
this._fireInputEvent(cM,cK);
}},_specialCharCodeMap:{8:bF,9:bW,13:bg,27:bI,32:bH},_keyCodeToIdentifierMap:{16:bV,17:bv,18:bb,20:cf,224:bT,37:cr,38:co,39:ck,40:cp,33:bc,34:cd,35:bm,36:bX,45:bo,46:bA,112:bP,113:bS,114:bq,115:bL,116:cq,117:bs,118:bG,119:bp,120:cm,121:cl,122:cn,123:cj,144:bi,44:cv,145:bz,19:bU,91:cg,93:bx},_numpadToCharCode:{96:bf.charCodeAt(0),97:bC.charCodeAt(0),98:by.charCodeAt(0),99:bQ.charCodeAt(0),100:ba.charCodeAt(0),101:bN.charCodeAt(0),102:ce.charCodeAt(0),103:ca.charCodeAt(0),104:ch.charCodeAt(0),105:be.charCodeAt(0),106:bB.charCodeAt(0),107:cw.charCodeAt(0),109:bd.charCodeAt(0),110:ci.charCodeAt(0),111:bn.charCodeAt(0)},_charCodeA:ct.charCodeAt(0),_charCodeZ:cs.charCodeAt(0),_charCode0:bf.charCodeAt(0),_charCode9:be.charCodeAt(0),_isNonPrintableKeyCode:function(a){return this._keyCodeToIdentifierMap[a]?true:false;
},_isIdentifiableKeyCode:function(Q){if(Q>=this._charCodeA&&Q<=this._charCodeZ){return true;
}if(Q>=this._charCode0&&Q<=this._charCode9){return true;
}if(this._specialCharCodeMap[Q]){return true;
}if(this._numpadToCharCode[Q]){return true;
}if(this._isNonPrintableKeyCode(Q)){return true;
}return false;
},_keyCodeToIdentifier:function(S){if(this._isIdentifiableKeyCode(S)){var T=this._numpadToCharCode[S];

if(T){return String.fromCharCode(T);
}return (this._keyCodeToIdentifierMap[S]||this._specialCharCodeMap[S]||String.fromCharCode(S));
}else{return cc;
}},_charCodeToIdentifier:function(f){return this._specialCharCodeMap[f]||String.fromCharCode(f).toUpperCase();
},_identifierToKeyCode:function(P){return qx.event.handler.Keyboard._identifierToKeyCodeMap[P]||P.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this._disposeFields(bO,bD,bR,bM);
},defer:function(h,i,j){qx.event.Registration.addHandler(h);
if(!h._identifierToKeyCodeMap){h._identifierToKeyCodeMap={};

for(var k in i._keyCodeToIdentifierMap){h._identifierToKeyCodeMap[i._keyCodeToIdentifierMap[k]]=parseInt(k,10);
}
for(var k in i._specialCharCodeMap){h._identifierToKeyCodeMap[i._specialCharCodeMap[k]]=parseInt(k,10);
}}
if(qx.core.Variant.isSet(bj,bY)){i._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bj,cu)){i._keyCodeFix={12:i._identifierToKeyCode(bi)};
}else if(qx.core.Variant.isSet(bj,bK)){if(qx.bom.client.Engine.VERSION<525.13){i._charCode2KeyCode={63289:i._identifierToKeyCode(bi),63276:i._identifierToKeyCode(bc),63277:i._identifierToKeyCode(cd),63275:i._identifierToKeyCode(bm),63273:i._identifierToKeyCode(bX),63234:i._identifierToKeyCode(cr),63232:i._identifierToKeyCode(co),63235:i._identifierToKeyCode(ck),63233:i._identifierToKeyCode(cp),63272:i._identifierToKeyCode(bA),63302:i._identifierToKeyCode(bo),63236:i._identifierToKeyCode(bP),63237:i._identifierToKeyCode(bS),63238:i._identifierToKeyCode(bq),63239:i._identifierToKeyCode(bL),63240:i._identifierToKeyCode(cq),63241:i._identifierToKeyCode(bs),63242:i._identifierToKeyCode(bG),63243:i._identifierToKeyCode(bp),63244:i._identifierToKeyCode(cm),63245:i._identifierToKeyCode(cl),63246:i._identifierToKeyCode(cn),63247:i._identifierToKeyCode(cj),63248:i._identifierToKeyCode(cv),3:i._identifierToKeyCode(bg),12:i._identifierToKeyCode(bi),13:i._identifierToKeyCode(bg)};
}else{i._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var z="qx.client",y="mouseup",x="click",w="mousedown",v="contextmenu",u="dblclick",t="mousewheel",s="mouseover",r="mouseout",q="DOMMouseScroll",j="on",p="mshtml|webkit|opera",m="mousemove",i="useraction",h="__dA",l="__dz",k="__dG",n="gecko|webkit",g="qx.event.handler.Mouse",o="__dB";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(P){arguments.callee.base.call(this);
this.__dz=P;
this.__dA=P.getWindow();
this.__dB=this.__dA.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dC:null,__dD:null,__dE:null,__dF:null,__dG:null,__dz:null,__dA:null,__dB:null,canHandleEvent:function(A,B){},registerEvent:qx.core.Variant.select(z,{"webkit":function(I,J,K){if(qx.bom.client.System.IPHONE){var L=qx.lang.Function.returnNull;
I[j+J]=L;
I[j+J]=undefined;
}},"default":qx.lang.Function.returnNull}),unregisterEvent:function(d,e,f){},__dH:function(Q,R,S){if(!S){S=Q.target||Q.srcElement;
}if(S&&S.nodeType){qx.event.Registration.fireEvent(S,R||Q.type,qx.event.type.Mouse,[Q,S,null,true,true]);
}qx.event.Registration.fireEvent(this.__dA,i,qx.event.type.Data,[R||Q.type]);
},_initButtonObserver:function(){this.__dC=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dB,w,this.__dC);
Event.addNativeListener(this.__dB,y,this.__dC);
Event.addNativeListener(this.__dB,x,this.__dC);
Event.addNativeListener(this.__dB,u,this.__dC);
Event.addNativeListener(this.__dB,v,this.__dC);
},_initMoveObserver:function(){this.__dD=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dB,m,this.__dD);
Event.addNativeListener(this.__dB,s,this.__dD);
Event.addNativeListener(this.__dB,r,this.__dD);
},_initWheelObserver:function(){this.__dE=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var bc=qx.core.Variant.isSet(z,p)?t:q;
Event.addNativeListener(this.__dB,bc,this.__dE);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dB,w,this.__dC);
Event.removeNativeListener(this.__dB,y,this.__dC);
Event.removeNativeListener(this.__dB,x,this.__dC);
Event.removeNativeListener(this.__dB,u,this.__dC);
Event.removeNativeListener(this.__dB,v,this.__dC);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dB,m,this.__dD);
Event.removeNativeListener(this.__dB,s,this.__dD);
Event.removeNativeListener(this.__dB,r,this.__dD);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var H=qx.core.Variant.isSet(z,p)?t:q;
Event.removeNativeListener(this.__dB,H,this.__dE);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(T){this.__dH(T);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(Y){var ba=Y.type;
var bb=Y.target||Y.srcElement;
if(qx.core.Variant.isSet(z,n)){if(bb&&bb.nodeType==3){bb=bb.parentNode;
}}
if(this.__dI){this.__dI(Y,ba,bb);
}
if(this.__dK){this.__dK(Y,ba,bb);
}this.__dH(Y,ba,bb);

if(this.__dJ){this.__dJ(Y,ba,bb);
}
if(this.__dL){this.__dL(Y,ba,bb);
}this.__dF=ba;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(F){this.__dH(F,t);
}),__dI:qx.core.Variant.select(z,{"webkit":function(M,N,O){if(qx.bom.client.Engine.VERSION<530){if(N==v){this.__dH(M,y,O);
}}},"default":null}),__dJ:qx.core.Variant.select(z,{"opera":function(C,D,E){if(D==y&&C.button==2){this.__dH(C,v,E);
}},"default":null}),__dK:qx.core.Variant.select(z,{"mshtml":function(a,b,c){if(b==y&&this.__dF==x){this.__dH(a,w,c);
}else if(b==u){this.__dH(a,x,c);
}},"default":null}),__dL:qx.core.Variant.select(z,{"mshtml":null,"default":function(U,V,W){switch(V){case w:this.__dG=W;
break;
case y:if(W!==this.__dG){var X=qx.dom.Hierarchy.getCommonParent(W,this.__dG);
this.__dH(U,x,X);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(l,h,o,k);
},defer:function(G){qx.event.Registration.addHandler(G);
}});
})();
(function(){var e="qx.event.handler.Capture";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(b,c,d){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var O="alias",N="copy",M="blur",L="mouseout",K="keydown",J="Ctrl",I="Shift",H="mousemove",G="move",F="mouseover",bn="Alt",bm="keyup",bl="mouseup",bk="dragend",bj="on",bi="mousedown",bh="qxDraggable",bg="__hf",bf="__hd",be="drag",V="__hb",W="drop",T="qxDroppable",U="qx.event.handler.DragDrop",R="__hh",S="droprequest",P="dragstart",Q="__he",X="__ha",Y="__hg",bb="dragchange",ba="__hc",bd="dragleave",bc="dragover";
qx.Class.define(U,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){arguments.callee.base.call(this);
this.__ha=b;
this.__hb=b.getWindow().document.documentElement;
this.__ha.addListener(this.__hb,bi,this._onMouseDown,this);
this.__hn();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__ha:null,__hb:null,__hc:null,__hd:null,__he:null,__hf:null,__hg:null,__hh:null,__hi:null,__hj:null,__hk:false,__hl:0,__hm:0,canHandleEvent:function(o,p){},registerEvent:function(bo,bp,bq){},unregisterEvent:function(z,A,B){},addType:function(l){this.__he[l]=true;
},addAction:function(m){this.__hf[m]=true;
},supportsType:function(u){return !!this.__he[u];
},supportsAction:function(q){return !!this.__hf[q];
},getData:function(v){if(!this.__hu||!this.__hc){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__he[v]){throw new Error("Unsupported data type: "+v+"!");
}
if(!this.__hh[v]){this.__hi=v;
this.__hp(S,this.__hd,false);
}
if(!this.__hh[v]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__hh[v]||null;
},getCurrentAction:function(){return this.__hj;
},addData:function(bs,bt){this.__hh[bs]=bt;
},getCurrentType:function(){return this.__hi;
},__hn:function(){this.__he={};
this.__hf={};
this.__hg={};
this.__hh={};
},__ho:function(){var y=this.__hf;
var w=this.__hg;
var x=null;

if(this.__hu){if(w.Shift&&w.Ctrl&&y.alias){x=O;
}else if(w.Shift&&w.Alt&&y.copy){x=N;
}else if(w.Shift&&y.move){x=G;
}else if(w.Alt&&y.alias){x=O;
}else if(w.Ctrl&&y.copy){x=N;
}else if(y.move){x=G;
}else if(y.copy){x=N;
}else if(y.alias){x=O;
}}
if(x!=this.__hj){this.__hj=x;
this.__hp(bb,this.__hd,false);
}},__hp:function(f,g,h,i){var k=qx.event.Registration;
var j=k.createEvent(f,qx.event.type.Drag,[h,i]);

if(this.__hd!==this.__hc){if(g==this.__hd){j.setRelatedTarget(this.__hc);
}else{j.setRelatedTarget(this.__hd);
}}return k.dispatchEvent(g,j);
},__hq:function(C){while(C&&C.nodeType==1){if(C.getAttribute(bh)==bj){return C;
}C=C.parentNode;
}return null;
},__hr:function(t){while(t&&t.nodeType==1){if(t.getAttribute(T)==bj){return t;
}t=t.parentNode;
}return null;
},__hs:function(){this.__hd=null;
this.__ha.removeListener(this.__hb,H,this._onMouseMove,this,true);
this.__ha.removeListener(this.__hb,bl,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,M,this._onWindowBlur,this);
this.__hn();
},__ht:function(){if(this.__hk){this.__ha.removeListener(this.__hb,F,this._onMouseOver,this,true);
this.__ha.removeListener(this.__hb,L,this._onMouseOut,this,true);
this.__ha.removeListener(this.__hb,K,this._onKeyDown,this,true);
this.__ha.removeListener(this.__hb,bm,this._onKeyUp,this,true);
this.__hp(bk,this.__hd,false);
this.__hk=false;
}this.__hu=false;
this.__hc=null;
this.__hs();
},__hu:false,_onWindowBlur:function(e){this.__ht();
},_onKeyDown:function(e){var br=e.getKeyIdentifier();

switch(br){case bn:case J:case I:if(!this.__hg[br]){this.__hg[br]=true;
this.__ho();
}}},_onKeyUp:function(e){var E=e.getKeyIdentifier();

switch(E){case bn:case J:case I:if(this.__hg[E]){this.__hg[E]=false;
this.__ho();
}}},_onMouseDown:function(e){if(this.__hk){return;
}var a=this.__hq(e.getTarget());

if(a){this.__hl=e.getDocumentLeft();
this.__hm=e.getDocumentTop();
this.__hd=a;
this.__ha.addListener(this.__hb,H,this._onMouseMove,this,true);
this.__ha.addListener(this.__hb,bl,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,M,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hu){this.__hp(W,this.__hc,false,e);
}if(this.__hk){e.stopPropagation();
}this.__ht();
},_onMouseMove:function(e){if(this.__hk){if(!this.__hp(be,this.__hd,true,e)){this.__ht();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hl)>3||Math.abs(e.getDocumentTop()-this.__hm)>3){if(this.__hp(P,this.__hd,true,e)){this.__hk=true;
this.__ha.addListener(this.__hb,F,this._onMouseOver,this,true);
this.__ha.addListener(this.__hb,L,this._onMouseOut,this,true);
this.__ha.addListener(this.__hb,K,this._onKeyDown,this,true);
this.__ha.addListener(this.__hb,bm,this._onKeyUp,this,true);
var D=this.__hg;
D.Ctrl=e.isCtrlPressed();
D.Shift=e.isShiftPressed();
D.Alt=e.isAltPressed();
this.__ho();
}else{this.__hp(bk,this.__hd,false);
this.__hs();
}}}},_onMouseOver:function(e){var c=e.getTarget();
var d=this.__hr(c);

if(d&&d!=this.__hc){this.__hu=this.__hp(bc,d,true,e);
this.__hc=d;
this.__ho();
}},_onMouseOut:function(e){var r=e.getTarget();
var s=this.__hr(r);

if(s&&s==this.__hc){this.__hp(bd,this.__hc,false,e);
this.__hc=null;
this.__hu=false;
qx.event.Timer.once(this.__ho,this,0);
}}},destruct:function(){this._disposeFields(bf,ba,X,V,Q,bg,Y,R);
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var p="-",o="qx.event.handler.Element",n="_manager",m="_registeredEvents";
qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(t){arguments.callee.base.call(this);
this._manager=t;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(g,h,i){var l=qx.core.ObjectRegistry.toHashCode(g);
var j=l+p+h;
var k=qx.lang.Function.listener(this._onNative,this,j);
qx.bom.Event.addNativeListener(g,h,k);
this._registeredEvents[j]={element:g,type:h,listener:k};
},unregisterEvent:function(u,v,w){var z=this._registeredEvents;

if(!z){return;
}var A=qx.core.ObjectRegistry.toHashCode(u);
var x=A+p+v;
var y=this._registeredEvents[x];
qx.bom.Event.removeNativeListener(u,v,y.listener);
delete this._registeredEvents[x];
},_onNative:qx.event.GlobalError.observeMethod(function(c,d){var f=this._registeredEvents;

if(!f){return;
}var e=f[d];
qx.event.Registration.fireNonBubblingEvent(e.element,e.type,qx.event.type.Native,[c]);
})},destruct:function(){var q;
var r=this._registeredEvents;

for(var s in r){q=r[s];
qx.bom.Event.removeNativeListener(q.element,q.type,q.listener);
}this._disposeFields(n,m);
},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var h="qx.event.handler.Appear",g="__bC",f="__bD",e="disappear",d="appear";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){arguments.callee.base.call(this);
this.__bC=i;
this.__bD={};
qx.event.handler.Appear.__bE[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bE:{},refresh:function(){var b=this.__bE;

for(var c in b){b[c].refresh();
}}},members:{__bC:null,__bD:null,canHandleEvent:function(t,u){},registerEvent:function(j,k,l){var m=qx.core.ObjectRegistry.toHashCode(j);
var n=this.__bD;

if(n&&!n[m]){n[m]=j;
j.$$displayed=j.offsetWidth>0;
}},unregisterEvent:function(o,p,q){var r=qx.core.ObjectRegistry.toHashCode(o);
var s=this.__bD;

if(!s){return;
}
if(s[r]){delete s[r];
o.$$displayed=null;
}},refresh:function(){var y=this.__bD;
var z;

for(var x in y){z=y[x];
var v=z.offsetWidth>0;

if((!!z.$$displayed)!==v){z.$$displayed=v;
var w=qx.event.Registration.createEvent(v?d:e);
this.__bC.dispatchEvent(z,w);
}}}},destruct:function(){this._disposeFields(g,f);
delete qx.event.handler.Appear.__bE[this.$$hash];
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var u="mshtml",t="",s="qx.client",r=">",q="<",p=" ",o="='",n="qx.bom.Element",m="div",k="' ",h="></";
qx.Class.define(n,{statics:{__il:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,I,J){if(!J){J=window;
}
if(!name){throw new Error("The tag name is missing!");
}var L=this.__il;
var K=t;

for(var N in I){if(L[N]){K+=N+o+I[N]+k;
}}var O;
if(K!=t){if(qx.bom.client.Engine.MSHTML){O=J.document.createElement(q+name+p+K+r);
}else{var M=J.document.createElement(m);
M.innerHTML=q+name+p+K+h+name+r;
O=M.firstChild;
}}else{O=J.document.createElement(name);
}
for(var N in I){if(!L[N]){qx.bom.element.Attribute.set(O,N,I[N]);
}}return O;
},empty:function(v){return v.innerHTML=t;
},addListener:function(D,E,F,self,G){return qx.event.Registration.addListener(D,E,F,self,G);
},removeListener:function(z,A,B,self,C){return qx.event.Registration.removeListener(z,A,B,self,C);
},removeListenerById:function(a,b){return qx.event.Registration.removeListenerById(a,b);
},hasListener:function(w,x,y){return qx.event.Registration.hasListener(w,x,y);
},focus:function(e){qx.event.Registration.getManager(e).getHandler(qx.event.handler.Focus).focus(e);
},blur:function(d){qx.event.Registration.getManager(d).getHandler(qx.event.handler.Focus).blur(d);
},activate:function(H){qx.event.Registration.getManager(H).getHandler(qx.event.handler.Focus).activate(H);
},deactivate:function(c){qx.event.Registration.getManager(c).getHandler(qx.event.handler.Focus).deactivate(c);
},capture:function(g){qx.event.Registration.getManager(g).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(g);
},releaseCapture:function(f){qx.event.Registration.getManager(f).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(f);
},clone:function(P,Q){var T;

if(Q||(qx.core.Variant.isSet(s,u)&&!qx.xml.Document.isXmlDocument(P))){var X=qx.event.Registration.getManager(P);
var R=qx.dom.Hierarchy.getDescendants(P);
R.push(P);
}if(qx.core.Variant.isSet(s,u)){for(var i=0,l=R.length;i<l;i++){X.toggleAttachedEvents(R[i],false);
}}var T=P.cloneNode(true);
if(qx.core.Variant.isSet(s,u)){for(var i=0,l=R.length;i<l;i++){X.toggleAttachedEvents(R[i],true);
}}if(Q===true){var bb=qx.dom.Hierarchy.getDescendants(T);
bb.push(T);
var S,V,ba,U;

for(var i=0,Y=R.length;i<Y;i++){ba=R[i];
S=X.serializeListeners(ba);

if(S.length>0){V=bb[i];

for(var j=0,W=S.length;j<W;j++){U=S[j];
X.addListener(V,U.type,U.handler,U.self,U.capture);
}}}}return T;
}}});
})();
(function(){var l="qx.client",k="blur",j="focus",i="mousedown",h="on",g="mouseup",f="DOMFocusOut",d="DOMFocusIn",c="selectstart",b="onmousedown",M="onfocusout",L="onfocusin",K="onmouseup",J="onselectstart",I="draggesture",H="_document",G="gecko",F="_root",E="qx.event.handler.Focus",D="_applyFocus",s="_window",t="deactivate",q="qxIsRootPage",r="_applyActive",o="input",p="focusin",m="qxSelectable",n="tabIndex",u="off",v="_body",y="activate",x="1",A="focusout",z="__mouseActive",C="_manager",B="qxKeepFocus",w="qxKeepActive";
qx.Class.define(E,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(X){arguments.callee.base.call(this);
this._manager=X;
this._window=X.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:r,nullable:true},focus:{apply:D,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__hx:null,__hy:null,__hz:null,__hA:null,__hB:null,__hC:null,__hD:null,__hE:null,__hF:null,__hG:null,canHandleEvent:function(bw,bx){},registerEvent:function(bS,bT,bU){},unregisterEvent:function(bI,bJ,bK){},focus:function(bG){try{bG.focus();
}catch(bz){}this.setFocus(bG);
this.setActive(bG);
},activate:function(N){this.setActive(N);
},blur:function(bD){try{bD.blur();
}catch(bL){}
if(this.getActive()===bD){this.resetActive();
}
if(this.getFocus()===bD){this.resetFocus();
}},deactivate:function(ba){if(this.getActive()===ba){this.resetActive();
}},tryActivate:function(V){var W=this.__hU(V);

if(W){this.setActive(W);
}},__hH:function(bh,bi,bj,bk){var bm=qx.event.Registration;
var bl=bm.createEvent(bj,qx.event.type.Focus,[bh,bi,bk]);
bm.dispatchEvent(bh,bl);
},_windowFocused:true,__hI:function(){if(this._windowFocused){this._windowFocused=false;
this.__hH(this._window,null,k,false);
}},__hJ:function(){if(!this._windowFocused){this._windowFocused=true;
this.__hH(this._window,null,j,false);
}},_initObserver:qx.core.Variant.select(l,{"gecko":function(){this.__hx=qx.lang.Function.listener(this.__hP,this);
this.__hy=qx.lang.Function.listener(this.__hQ,this);
this.__hz=qx.lang.Function.listener(this.__hO,this);
this.__hA=qx.lang.Function.listener(this.__hN,this);
this.__hB=qx.lang.Function.listener(this.__hK,this);
this._document.addEventListener(i,this.__hx,true);
this._document.addEventListener(g,this.__hy,true);
this._window.addEventListener(j,this.__hz,true);
this._window.addEventListener(k,this.__hA,true);
this._window.addEventListener(I,this.__hB,true);
},"mshtml":function(){this.__hx=qx.lang.Function.listener(this.__hP,this);
this.__hy=qx.lang.Function.listener(this.__hQ,this);
this.__hD=qx.lang.Function.listener(this.__hL,this);
this.__hE=qx.lang.Function.listener(this.__hM,this);
this.__hC=qx.lang.Function.listener(this.__hR,this);
this._document.attachEvent(b,this.__hx);
this._document.attachEvent(K,this.__hy);
this._document.attachEvent(L,this.__hD);
this._document.attachEvent(M,this.__hE);
this._document.attachEvent(J,this.__hC);
},"webkit":function(){this.__hx=qx.lang.Function.listener(this.__hP,this);
this.__hy=qx.lang.Function.listener(this.__hQ,this);
this.__hE=qx.lang.Function.listener(this.__hM,this);
this.__hz=qx.lang.Function.listener(this.__hO,this);
this.__hA=qx.lang.Function.listener(this.__hN,this);
this.__hC=qx.lang.Function.listener(this.__hR,this);
this._document.addEventListener(i,this.__hx,true);
this._document.addEventListener(g,this.__hy,true);
this._document.addEventListener(c,this.__hC,false);
this._window.addEventListener(f,this.__hE,true);
this._window.addEventListener(j,this.__hz,true);
this._window.addEventListener(k,this.__hA,true);
},"opera":function(){this.__hx=qx.lang.Function.listener(this.__hP,this);
this.__hy=qx.lang.Function.listener(this.__hQ,this);
this.__hD=qx.lang.Function.listener(this.__hL,this);
this.__hE=qx.lang.Function.listener(this.__hM,this);
this._document.addEventListener(i,this.__hx,true);
this._document.addEventListener(g,this.__hy,true);
this._window.addEventListener(d,this.__hD,true);
this._window.addEventListener(f,this.__hE,true);
}}),_stopObserver:qx.core.Variant.select(l,{"gecko":function(){this._document.removeEventListener(i,this.__hx,true);
this._document.removeEventListener(g,this.__hy,true);
this._window.removeEventListener(j,this.__hz,true);
this._window.removeEventListener(k,this.__hA,true);
this._window.removeEventListener(I,this.__hB,true);
},"mshtml":function(){this._document.detachEvent(b,this.__hx);
this._document.detachEvent(K,this.__hy);
this._document.detachEvent(L,this.__hD);
this._document.detachEvent(M,this.__hE);
this._document.detachEvent(J,this.__hC);
},"webkit":function(){this._document.removeEventListener(i,this.__hx,true);
this._document.removeEventListener(c,this.__hC,false);
this._window.removeEventListener(d,this.__hD,true);
this._window.removeEventListener(f,this.__hE,true);
this._window.removeEventListener(j,this.__hz,true);
this._window.removeEventListener(k,this.__hA,true);
},"opera":function(){this._document.removeEventListener(i,this.__hx,true);
this._window.removeEventListener(d,this.__hD,true);
this._window.removeEventListener(f,this.__hE,true);
this._window.removeEventListener(j,this.__hz,true);
this._window.removeEventListener(k,this.__hA,true);
}}),__hK:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){if(!this.__hV(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__hL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(e){this.__hJ();
var S=e.srcElement;
var R=this.__hT(S);

if(R){this.setFocus(R);
}this.tryActivate(S);
},"opera":function(e){var Y=e.target;

if(Y==this._document||Y==this._window){this.__hJ();

if(this.__hF){this.setFocus(this.__hF);
delete this.__hF;
}
if(this.__hG){this.setActive(this.__hG);
delete this.__hG;
}}else{this.setFocus(Y);
this.tryActivate(Y);
if(!this.__hV(Y)){Y.selectionStart=0;
Y.selectionEnd=0;
}}},"default":null})),__hM:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(e){if(!e.toElement){this.__hI();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var by=e.target;

if(by===this.getFocus()){this.resetFocus();
}
if(by===this.getActive()){this.resetActive();
}},"opera":function(e){var a=e.target;

if(a==this._document){this.__hI();
this.__hF=this.getFocus();
this.__hG=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(a===this.getFocus()){this.resetFocus();
}
if(a===this.getActive()){this.resetActive();
}}},"default":null})),__hN:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__hI();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__hI();
this.__hF=this.getFocus();
this.__hG=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__hO:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){var bR=e.target;

if(bR===this._window||bR===this._document){this.__hJ();
bR=this._body;
}this.setFocus(bR);
this.tryActivate(bR);
},"webkit":function(e){var bH=e.target;

if(bH===this._window||bH===this._document){this.__hJ();

if(this.__hF){this.setFocus(this.__hF);
delete this.__hF;
}
if(this.__hG){this.setActive(this.__hG);
delete this.__hG;
}}else{this.setFocus(bH);
this.tryActivate(bH);
}},"default":null})),__hP:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){var bd=e.target;
var bb=this.__hT(bd);
var bc=this.__hV(bd);

if(!bc){qx.bom.Event.preventDefault(e);
if(bb){if(qx.core.Variant.isSet(l,G)){var be=qx.bom.element.Attribute.get(bb,q)===x;

if(!be){bb.focus();
}}else{bb.focus();
}}}else if(!bb){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var Q=e.srcElement;
var P=this.__hT(Q);

if(P){if(!this.__hV(Q)){Q.unselectable=h;
document.selection.empty();
P.focus();
}}else{qx.bom.Event.preventDefault(e);
if(!this.__hV(Q)){Q.unselectable=h;
}}},"webkit":function(e){var bF=e.target;
var bE=this.__hT(bF);

if(bE){this.setFocus(bE);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bq=e.target;
var bo=this.__hT(bq);

if(!this.__hV(bq)){qx.bom.Event.preventDefault(e);
if(bo){var bp=this.getFocus();

if(bp&&bp.selectionEnd){bp.selectionStart=0;
bp.selectionEnd=0;
bp.blur();
}if(bo){this.setFocus(bo);
}}}else if(bo){this.setFocus(bo);
}},"default":null})),__hQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(e){var T=e.srcElement;

if(T.unselectable){T.unselectable=u;
}var U=this.getFocus();

if(U&&T!=U&&U.nodeName.toLowerCase()===o){T=U;
}this.tryActivate(T);
},"gecko":function(e){var bC=e.target;

while(bC&&bC.offsetWidth===undefined){bC=bC.parentNode;
}
if(bC){this.tryActivate(bC);
}},"webkit|opera":function(e){this.tryActivate(e.target);
},"default":null})),__hR:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml|webkit":function(e){var O=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__hV(O)){qx.bom.Event.preventDefault(e);
}},"default":null})),__hS:function(br){var bs=qx.bom.element.Attribute.get(br,n);

if(bs>=1){return true;
}var bt=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bs>=0&&bt[br.tagName]){return true;
}return false;
},__hT:function(bn){while(bn&&bn.nodeType===1){if(bn.getAttribute(B)==h){return null;
}
if(this.__hS(bn)){return bn;
}bn=bn.parentNode;
}return this._body;
},__hU:function(bA){var bB=bA;

while(bA&&bA.nodeType===1){if(bA.getAttribute(w)==h){return null;
}bA=bA.parentNode;
}return bB;
},__hV:function(bf){while(bf&&bf.nodeType===1){var bg=bf.getAttribute(m);

if(bg!=null){return bg===h;
}bf=bf.parentNode;
}return true;
},_applyActive:function(bu,bv){if(bv){this.__hH(bv,bu,t,true);
}
if(bu){this.__hH(bu,bv,y,true);
}},_applyFocus:function(bP,bQ){if(bQ){this.__hH(bQ,bP,A,true);
}
if(bP){this.__hH(bP,bQ,p,true);
}if(bQ){this.__hH(bQ,bP,k,false);
}
if(bP){this.__hH(bP,bQ,j,false);
}}},destruct:function(){this._stopObserver();
this._disposeFields(C,s,H,F,v,z);
},defer:function(bM){qx.event.Registration.addHandler(bM);
var bN=bM.FOCUSABLE_ELEMENTS;

for(var bO in bN){bN[bO.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var k="",j="qx.client",i="readOnly",h="accessKey",g="qx.bom.element.Attribute",f="rowSpan",e="vAlign",d="className",c="textContent",b="'",y="htmlFor",x="longDesc",w="cellSpacing",v="frameBorder",u="='",t="useMap",s="innerText",r="innerHTML",q="tabIndex",p="dateTime",n="maxLength",o="mshtml",l="cellPadding",m="colSpan";
qx.Class.define(g,{statics:{__fO:{names:{"class":d,"for":y,html:r,text:qx.core.Variant.isSet(j,o)?s:c,colspan:m,rowspan:f,valign:e,datetime:p,accesskey:h,tabindex:q,maxlength:n,readonly:i,longdesc:x,cellpadding:l,cellspacing:w,frameborder:v,usemap:t},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:k,maxLength:10000000,className:k,innerHTML:k,innerText:k,textContent:k,htmlFor:k,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(I){var J=[];
var L=this.__fO.runtime;

for(var K in I){if(!L[K]){J.push(K,u,I[K],b);
}}return J.join(k);
},get:qx.core.Variant.select(j,{"mshtml":function(z,name){var B=this.__fO;
var A;
name=B.names[name]||name;
if(B.original[name]){A=z.getAttribute(name,2);
}else if(B.property[name]){if(B.propertyDefault[name]&&A==B.propertyDefault[name]){return null;
}A=z[name];
}else{A=z.getAttribute(name);
}if(B.bools[name]){return !!A;
}return A;
},"default":function(F,name){var H=this.__fO;
var G;
name=H.names[name]||name;
if(H.property[name]){if(H.propertyDefault[name]&&G==H.propertyDefault[name]){return null;
}G=F[name];

if(G==null){G=F.getAttribute(name);
}}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
}}),set:function(C,name,D){var E=this.__fO;
name=E.names[name]||name;
if(E.bools[name]){D=!!D;
}if(E.property[name]){if(D==null){D=E.propertyDefault[name];

if(D===undefined){D=null;
}}C[name]=D;
}else{if(D===true){C.setAttribute(name,name);
}else if(D===false||D===null){C.removeAttribute(name);
}else{C.setAttribute(name,D);
}}},reset:function(a,name){this.set(a,name,null);
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
(function(){var f="qx.event.type.KeyInput";
qx.Class.define(f,{extend:qx.event.type.Dom,members:{init:function(a,b,c){arguments.callee.base.call(this,a,b,null,true,true);
this._charCode=c;
return this;
},clone:function(d){var e=arguments.callee.base.call(this,d);
e._charCode=this._charCode;
return e;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var c="qx.event.type.KeySequence";
qx.Class.define(c,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
b._identifier=this._identifier;
return b;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var k="qx.client",j="left",i="right",h="middle",g="dblclick",f="click",e="none",d="contextmenu",c="qx.event.type.Mouse",b="Chrome";
qx.Class.define(c,{extend:qx.event.type.Dom,members:{init:function(l,m,n,o,p){arguments.callee.base.call(this,l,m,n,o,p);

if(!n){this._relatedTarget=qx.bom.Event.getRelatedTarget(l);
}return this;
},__ih:qx.core.Variant.select(k,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case f:case g:return j;
case d:return i;
default:return this.__ih[this._native.button]||e;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(k,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(k,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(q);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
},getWheelDelta:qx.core.Variant.select(k,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(window.navigator.userAgent.indexOf(b)!==-1){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var k="qx.client",j="qx.dom.Hierarchy",i="previousSibling",h="*",g="nextSibling",f="parentNode";
qx.Class.define(j,{statics:{getNodeIndex:function(B){var C=0;

while(B&&(B=B.previousSibling)){C++;
}return C;
},getElementIndex:function(y){var z=0;
var A=qx.dom.Node.ELEMENT;

while(y&&(y=y.previousSibling)){if(y.nodeType==A){z++;
}}return z;
},getNextElementSibling:function(J){while(J&&(J=J.nextSibling)&&!qx.dom.Node.isElement(J)){continue;
}return J||null;
},getPreviousElementSibling:function(u){while(u&&(u=u.previousSibling)&&!qx.dom.Node.isElement(u)){continue;
}return u||null;
},contains:qx.core.Variant.select(k,{"webkit|mshtml|opera":function(Q,R){if(qx.dom.Node.isDocument(Q)){var S=qx.dom.Node.getDocument(R);
return Q&&S==Q;
}else if(qx.dom.Node.isDocument(R)){return false;
}else{return Q.contains(R);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(n,o){while(o){if(n==o){return true;
}o=o.parentNode;
}return false;
}}),isRendered:function(U){if(!U.offsetParent){return false;
}var V=U.ownerDocument||U.document;
if(V.body.contains){return V.body.contains(U);
}if(V.compareDocumentPosition){return !!(V.compareDocumentPosition(U)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(l,m){return this.contains(m,l);
},getCommonParent:qx.core.Variant.select(k,{"mshtml|opera":function(d,e){if(d===e){return d;
}
while(d&&qx.dom.Node.isElement(d)){if(d.contains(e)){return d;
}d=d.parentNode;
}return null;
},"default":function(K,L){if(K===L){return K;
}var M={};
var P=qx.core.ObjectRegistry;
var O,N;

while(K||L){if(K){O=P.toHashCode(K);

if(M[O]){return M[O];
}M[O]=K;
K=K.parentNode;
}
if(L){N=P.toHashCode(L);

if(M[N]){return M[N];
}M[N]=L;
L=L.parentNode;
}}return null;
}}),getAncestors:function(p){return this._recursivelyCollect(p,f);
},getChildElements:function(G){G=G.firstChild;

if(!G){return [];
}var H=this.getNextSiblings(G);

if(G.nodeType===1){H.unshift(G);
}return H;
},getDescendants:function(D){return qx.lang.Array.fromCollection(D.getElementsByTagName(h));
},getFirstDescendant:function(I){I=I.firstChild;

while(I&&I.nodeType!=1){I=I.nextSibling;
}return I;
},getLastDescendant:function(t){t=t.lastChild;

while(t&&t.nodeType!=1){t=t.previousSibling;
}return t;
},getPreviousSiblings:function(F){return this._recursivelyCollect(F,i);
},getNextSiblings:function(E){return this._recursivelyCollect(E,g);
},_recursivelyCollect:function(v,w){var x=[];

while(v=v[w]){if(v.nodeType==1){x.push(v);
}}return x;
},getSiblings:function(s){return this.getPreviousSiblings(s).reverse().concat(this.getNextSiblings(s));
},isEmpty:function(T){T=T.firstChild;

while(T){if(T.nodeType===qx.dom.Node.ELEMENT||T.nodeType===qx.dom.Node.TEXT){return false;
}T=T.nextSibling;
}return true;
},cleanWhitespace:function(a){var b=a.firstChild;

while(b){var c=b.nextSibling;

if(b.nodeType==3&&!/\S/.test(b.nodeValue)){a.removeChild(b);
}b=c;
}}}});
})();
(function(){var e="qx.client",d="qx.event.type.Drag";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(k,l){arguments.callee.base.call(this,false,k);

if(l){this._native=l.getNativeEvent()||null;
this._originalTarget=l.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(g){var h=arguments.callee.base.call(this,g);
h._native=this._native;
return h;
},getDocumentLeft:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(j);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(m);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(c){this.getManager().addType(c);
},addAction:function(i){this.getManager().addAction(i);
},supportsType:function(n){return this.getManager().supportsType(n);
},supportsAction:function(o){return this.getManager().supportsAction(o);
},addData:function(a,b){this.getManager().addData(a,b);
},getData:function(f){return this.getManager().getData(f);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var o="interval",n="qx.event.Timer",m="_applyInterval",l="_applyEnabled",k="Boolean",j="qx.event.type.Event",i="__dy",h="__dx",g="Integer";
qx.Class.define(n,{extend:qx.core.Object,construct:function(f){arguments.callee.base.call(this);
this.setEnabled(false);

if(f!=null){this.setInterval(f);
}this.__dx=qx.lang.Function.bind(this._oninterval,this);
},events:{"interval":j},statics:{once:function(a,b,c){var d=new qx.event.Timer(c);
d.addListener(o,function(e){d.stop();
a.call(b,e);
d.dispose();
b=null;
},b);
d.start();
return d;
}},properties:{enabled:{init:true,check:k,apply:l},interval:{check:g,init:1000,apply:m}},members:{__dy:null,__dx:null,_applyInterval:function(t,u){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(q,r){if(r){window.clearInterval(this.__dy);
this.__dy=null;
}else if(q){this.__dy=window.setInterval(this.__dx,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(s){this.setInterval(s);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(p){this.stop();
this.startWith(p);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.getEnabled()){this.fireEvent(o);
}})},destruct:function(){if(this.__dy){window.clearInterval(this.__dy);
}this._disposeFields(i,h);
}});
})();
(function(){var r="blur",q="__fn",p="__fo",o="losecapture",n="__fm",m="capture",k="click",j="qx.event.dispatch.MouseCapture",h="focus",g="scroll";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(u){arguments.callee.base.call(this);
this.__fm=u;
this.__fn=u.getWindow();
u.addListener(this.__fn,r,this.releaseCapture,this);
u.addListener(this.__fn,h,this.releaseCapture,this);
u.addListener(this.__fn,g,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fo:null,__fm:null,__fn:null,canDispatchEvent:function(s,event,t){return (this.__fo&&this.__fp[t]);
},dispatchEvent:function(c,event,d){if(d==k){event.stopPropagation();
this.releaseCapture();
return;
}var e=this.__fm.getListeners(this.__fo,d,false);

if(e){event.setCurrentTarget(this.__fo);
event.setEventPhase(qx.event.type.Event.AT_TARGET);

for(var i=0,l=e.length;i<l;i++){var f=e[i].context||event.getCurrentTarget();
e[i].handler.call(f,event);
}}},__fp:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(a){if(this.__fo===a){return;
}
if(this.__fo){this.releaseCapture();
}this.__fo=a;
qx.event.Registration.fireEvent(a,m,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fo;
},releaseCapture:function(){var v=this.__fo;

if(!v){return;
}this.__fo=null;
qx.event.Registration.fireEvent(v,o,qx.event.type.Event,[true,false]);
}},destruct:function(){this._disposeFields(p,n,q);
},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var t="qx.client",s="",r="mshtml",q="'",p="SelectionLanguage",o="qx.xml.Document",n=" />",m="MSXML2.DOMDocument.3.0",k='<\?xml version="1.0" encoding="utf-8"?>\n<',j="MSXML2.XMLHTTP.3.0",e="MSXML2.XMLHTTP.6.0",h=" xmlns='",g="text/xml",d="XPath",c="MSXML2.DOMDocument.6.0",f="HTML";
qx.Bootstrap.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(u){if(u.nodeType===9){return u.documentElement.nodeName!==f;
}else if(u.ownerDocument){return this.isXmlDocument(u.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(t,{"mshtml":function(y,z){var A=new ActiveXObject(this.DOMDOC);
A.setProperty(p,d);

if(z){var B=k;
B+=z;

if(y){B+=h+y+q;
}B+=n;
A.loadXML(B);
}return A;
},"default":function(a,b){return document.implementation.createDocument(a||s,b||s,null);
}}),fromString:qx.core.Variant.select(t,{"mshtml":function(F){var G=qx.xml.Document.create();
G.loadXML(F);
return G;
},"default":function(D){var E=new DOMParser();
return E.parseFromString(D,g);
}})},defer:function(v){if(qx.core.Variant.isSet(t,r)){var w=[c,m];
var x=[e,j];

for(var i=0,l=w.length;i<l;i++){try{new ActiveXObject(w[i]);
new ActiveXObject(x[i]);
}catch(C){continue;
}v.DOMDOC=w[i];
v.XMLHTTP=x[i];
break;
}}}});
})();
(function(){var g="qx.dom.Element";
qx.Class.define(g,{statics:{hasChild:function(parent,e){return e.parentNode===parent;
},hasChildren:function(r){return !!r.firstChild;
},hasChildElements:function(a){a=a.firstChild;

while(a){if(a.nodeType===1){return true;
}a=a.nextSibling;
}return false;
},getParentElement:function(B){return B.parentNode;
},isInDom:function(o,p){if(!p){p=window;
}var q=p.document.getElementsByTagName(o.nodeName);

for(var i=0,l=q.length;i<l;i++){if(q[i]===o){return true;
}}return false;
},insertAt:function(b,parent,c){var d=parent.childNodes[c];

if(d){parent.insertBefore(b,d);
}else{parent.appendChild(b);
}return true;
},insertBegin:function(x,parent){if(parent.firstChild){this.insertBefore(x,parent.firstChild);
}else{parent.appendChild(x);
}},insertEnd:function(y,parent){parent.appendChild(y);
},insertBefore:function(u,v){v.parentNode.insertBefore(u,v);
return true;
},insertAfter:function(s,t){var parent=t.parentNode;

if(t==parent.lastChild){parent.appendChild(s);
}else{return this.insertBefore(s,t.nextSibling);
}return true;
},remove:function(w){if(!w.parentNode){return false;
}w.parentNode.removeChild(w);
return true;
},removeChild:function(f,parent){if(f.parentNode!==parent){return false;
}parent.removeChild(f);
return true;
},removeChildAt:function(m,parent){var n=parent.childNodes[m];

if(!n){return false;
}parent.removeChild(n);
return true;
},replaceChild:function(z,A){if(!A.parentNode){return false;
}A.parentNode.replaceChild(z,A);
return true;
},replaceAt:function(h,j,parent){var k=parent.childNodes[j];

if(!k){return false;
}parent.replaceChild(h,k);
return true;
}}});
})();
(function(){var m="(\\s|$)",l="(^|\\s)",k="",j="qx.bom.element.Class",i=" ",h="$2";
qx.Class.define(j,{statics:{add:function(q,name){if(!this.has(q,name)){q.className+=(q.className?i:k)+name;
}return name;
},get:function(n){return n.className;
},has:function(f,name){var g=new RegExp(l+name+m);
return g.test(f.className);
},remove:function(o,name){var p=new RegExp(l+name+m);
o.className=o.className.replace(p,h);
return name;
},replace:function(a,b,c){this.remove(a,b);
return this.add(a,c);
},toggle:function(d,name,e){if(e==null){e=!this.has(d,name);
}e?this.add(d,name):this.remove(d,name);
return name;
}}});
})();
(function(){var m="zIndex",l="mshtml",k="height",j="portal.box.Util",i="width",h="qx.client",g="auto";
qx.Class.define(j,{statics:{__C:1000,bringToFront:function(a){var b=this.getStyleProperty(a,m);
b=b==g?0:b;
qx.bom.element.Style.set(a,m,b+portal.box.Util.__C);
},sendToBack:function(n){var o=this.getStyleProperty(n,m);
qx.bom.element.Style.set(n,m,o-portal.box.Util.__C);
},getStyleProperty:function(c,d,e){var f=qx.bom.element.Style.get(c,d);
return e?parseInt(f):f;
},getComputedDimension:function(p){var q=portal.box.Util.getStyleProperty(p,i,true);
var r=portal.box.Util.getStyleProperty(p,k,true);

if(qx.core.Variant.isSet(h,l)){q=q==0?p.offsetWidth:q;
r=r==0?p.offsetHeight:r;
}return {width:q,height:r};
}}});
})();
(function(){var h="__F",g="__E",f="portal.box.Draggable",d="__D";
qx.Class.define(f,{extend:qx.core.Object,construct:function(j){arguments.callee.base.call(this);
this.__D=j;
this.__E=j.getElement();
this.__F=null;
this.__G=null;
this.__H();
},members:{__D:null,__E:null,__F:null,__G:null,getBox:function(){return this.__D;
},getElement:function(){return this.__E;
},__H:function(){this.__I();
this.__J();
},__I:function(){this.__F=qx.bom.Element.create("div");
qx.bom.element.Class.add(this.__F,"dragHandle");
qx.dom.Element.insertBegin(this.__F,this.__E);
},__J:function(){qx.bom.Element.addListener(this.__F,"mousedown",this.__K,this);
qx.bom.Element.addListener(this.__F,"mouseover",function(e){qx.bom.element.Style.set(this,"cursor","move");
},this.__F);
qx.bom.Element.addListener(this.__F,"dragstart",this.__N,this);
qx.bom.Element.addListener(this.__F,"dragend",portal.dragdrop.Manager.getInstance().stopSession,portal.dragdrop.Manager.getInstance());
qx.bom.Element.addListener(this.__F,"drag",this.__O,this);
},__K:function(e){if(e.isLeftPressed()){if(qx.core.Variant.isSet("qx.client","mshtml")){var top=qx.bom.element.Location.getTop(this.__E,"margin")-parseInt(qx.bom.element.Style.get(this.__E,"paddingTop"))-parseInt(qx.bom.element.Style.get(this.__E,"borderTopWidth"));
}else if(qx.core.Variant.isSet("qx.client","webkit")){var top=qx.bom.element.Location.getTop(this.__E,"margin");
}else{var top=qx.bom.element.Location.getTop(this.__E);
}this.__G={left:e.getDocumentLeft()-qx.bom.element.Location.getLeft(this.__E),top:e.getDocumentTop()-top};
qx.bom.Element.addListener(document.body,"mouseup",this.__M,this,true);
this.__L();
qx.event.Registration.fireEvent(this.__F,"dragstart",qx.event.type.Event);
}},__L:qx.core.Variant.select("qx.client",{"mshtml":function(){var c=this;
var b=qx.lang.Function.bind(this.__M,c);
document.getElementsByTagName("html")[0].onmouseleave=b;
},"default":function(){}}),__M:function(e){try{e.stopPropagation();
}catch(a){}
if(portal.dragdrop.Manager.getInstance().isSessionActive()){qx.event.Registration.removeListener(document.body,"mousemove",this.__O,this,true);
portal.dragdrop.Manager.getInstance().stopSession();
}qx.bom.Element.removeListener(document.body,"mouseup",this.__M,this,true);
},__N:function(e){portal.box.Manager.getInstance().setActiveBox(this.__D);
portal.dragdrop.Manager.getInstance().startSession(this.__D);
qx.event.Registration.addListener(document.body,"mousemove",this.__O,this,true);
},__O:function(e){e.stopPropagation();
var i=e.getDocumentLeft()-this.__G.left;
var top=e.getDocumentTop()-this.__G.top;
qx.event.Timer.once(function(){this.checkGroupBox(i);
this.onDragMove(top,i);
},portal.dragdrop.Manager.getInstance(),0);
}},destruct:function(){this._disposeFields(d,h,g);
}});
})();
(function(){var q="margin",p="px",o="qx.client",n="__Q",m="Boolean",l="paddingLeft",k="singleton",h="spring",g="__U",f="__P",E="__T",D="__R",C="paddingBottom",B="top",A="paddingTop",z="__currentBoxElement",y="finish",x="mshtml",w="portal.box.Box",v="webkit",t="left",u="portal.dragdrop.Manager",r="border",s="absolute";
qx.Class.define(u,{type:k,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__P={top:null,height:null};
this.__Q={top:0,left:0};
},properties:{activeBox:{check:w,init:null,nullable:true},sessionActive:{check:m,init:false}},members:{__P:null,__R:null,__S:false,__Q:null,__T:null,__U:null,startSession:function(a){this.setSessionActive(true);
this.setActiveBox(a);
this.__R=a.getGroupBoxId();
this.__V();
if(this.__T==null){this.__T={};
var b=portal.box.Manager.getInstance().getGroupBoxes();

for(var i=0,j=b.length;i<j;i++){this.__T[b[i].element.id]={left:qx.bom.element.Location.getLeft(b[i].element),right:qx.bom.element.Location.getLeft(b[i].element)+qx.bom.element.Dimension.getWidth(b[i].element)};
}}},__V:function(){if(!this.__U){this.__U=qx.bom.Element.create("div");
}var X=this.getActiveBox().getElement();
var V=portal.box.Util.getComputedDimension(X);
this.__W(X,this.__U);
qx.bom.element.Class.add(this.__U,qx.bom.element.Class.get(X));

if(qx.core.Variant.isSet("qx.client","mshtml")){var top=qx.bom.element.Location.getTop(X,"margin")-parseInt(qx.bom.element.Style.get(X,"paddingTop"))-parseInt(qx.bom.element.Style.get(X,"borderTopWidth"));
}else if(qx.core.Variant.isSet("qx.client","webkit")){var top=qx.bom.element.Location.getTop(X,"margin");
}else{var top=qx.bom.element.Location.getTop(X);
}var W="opacity:0.5;margin:0;position:absolute;"+"top:"+top+"px;"+"left:"+qx.bom.element.Location.getLeft(X)+"px;"+"width:"+V.width+"px;"+"height:"+V.height+"px";
qx.bom.element.Style.setCss(this.__U,W);
qx.bom.element.Style.set(X,"border","1px dashed red");
qx.dom.Node.getBodyElement(X).appendChild(this.__U);
portal.box.Util.bringToFront(this.__U);
},__W:function(F,G){while(F.firstChild){G.appendChild(F.firstChild);
}},stopSession:function(e){this.setSessionActive(false);
var N=this.getActiveBox();
var M=N.getElement();

if(qx.core.Variant.isSet(o,x)){var top=qx.bom.element.Location.getTop(M,q)-parseInt(qx.bom.element.Style.get(M,A))-parseInt(qx.bom.element.Style.get(M,C));
var O=qx.bom.element.Location.getLeft(M,q)-parseInt(qx.bom.element.Style.get(M,l));
}else if(qx.core.Variant.isSet(o,v)){var top=qx.bom.element.Location.getTop(M,q);
var O=qx.bom.element.Location.getLeft(M,q);
}else{var top=qx.bom.element.Location.getTop(M);
var O=qx.bom.element.Location.getLeft(M);
}portal.box.Manager.getInstance().updateGroupBoxMembers(N.getGroupBoxId(),this.__R,N);
N.setGroupBoxId(this.__R);
var K=new qx.fx.effect.core.Move(this.__U);
K.set({x:O,y:top,mode:s,duration:0.5,transition:h});
K.start();
var L=this;
K.addListener(y,function(){L.__W(L.__U,M);
qx.bom.element.Style.reset(M,r);
L.__U.parentNode.removeChild(L.__U);
if(N.isActive()){N._applyActive(true);
}else{portal.box.Manager.getInstance().setActiveBox(N);
}});
},onDragMove:function(top,H){if(this.__Q.left!=H){qx.bom.element.Style.set(this.__U,t,H+p);
}if(this.__Q.top!=top){qx.bom.element.Style.set(this.__U,B,top+p);
}var I=this.getActiveBox().getElement();

if(this.__P.top==null){this.__P.top=qx.bom.element.Location.getTop(I);
}
if(this.__P.height==null){this.__P.height=qx.bom.element.Dimension.getHeight(I);
}if(this.__S==false&&top>=this.__P.top&&top<=(this.__P.top+this.__P.height)){return;
}var J;
if(this.__S){J=qx.dom.Hierarchy.getFirstDescendant(document.getElementById(this.__R));
while(J!=null){if(this.__X(true,top,I,J)){this.__S=false;
return;
}J=qx.dom.Hierarchy.getNextElementSibling(J);
}}else{J=I;
}if(top-this.__Q.top>0){J=qx.dom.Hierarchy.getNextElementSibling(J);

while(J!=null){if(J){if(this.__X(true,top,I,J)){return;
}}J=qx.dom.Hierarchy.getNextElementSibling(J);
}}else{var J=qx.dom.Hierarchy.getPreviousElementSibling(J);

while(J!=null){if(J){if(this.__X(false,top,I,J)){return;
}}J=qx.dom.Hierarchy.getPreviousElementSibling(J);
}}this.__Q.left=H;
this.__Q.top=top;
},__X:function(P,top,Q,R){var S=qx.bom.element.Location.getTop(R);
var T=qx.bom.element.Dimension.getClientHeight(R);
var U;

if(P){if(top>=(S+(T/3))){U=qx.dom.Hierarchy.getNextElementSibling(R);

if(U!=Q||U==null){qx.dom.Element.insertAfter(Q,R);
this.__P.top=qx.bom.element.Location.getTop(Q);
}return true;
}}else{if(top<=(S+T*2/3)){U=qx.dom.Hierarchy.getPreviousElementSibling(R);

if(U!=Q||U==null){qx.dom.Element.insertBefore(Q,R);
this.__P.top=qx.bom.element.Location.getTop(Q);
}return true;
}}return false;
},checkGroupBox:function(c){if(this.__T[this.__R].left<=c&&this.__T[this.__R].right>=c){return;
}
for(var d in this.__T){if(d!=this.__R){if(this.__T[d].left<=c&&this.__T[d].right>=c){this.__R=d;
this.__S=true;
return;
}}}}},destruct:function(){this._disposeFields(f,n,D,z,g,E);
}});
})();
(function(){var bp="borderTopWidth",bo="borderLeftWidth",bn="marginTop",bm="marginLeft",bl="scroll",bk="qx.client",bj="border-box",bi="borderBottomWidth",bh="borderRightWidth",bg="auto",bE="padding",bD="qx.bom.element.Location",bC="paddingLeft",bB="static",bA="marginBottom",bz="visible",by="BODY",bx="paddingBottom",bw="paddingTop",bv="marginRight",bt="position",bu="margin",br="overflow",bs="paddingRight",bq="border";
qx.Class.define(bD,{statics:{__gA:function(O,P){return qx.bom.element.Style.get(O,P,qx.bom.element.Style.COMPUTED_MODE,false);
},__gB:function(c,d){return parseInt(qx.bom.element.Style.get(c,d,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gC:function(bH){var bK=0,top=0;
if(bH.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bJ=qx.dom.Node.getWindow(bH);
bK-=qx.bom.Viewport.getScrollLeft(bJ);
top-=qx.bom.Viewport.getScrollTop(bJ);
}else{var bI=qx.dom.Node.getDocument(bH).body;
bH=bH.parentNode;
while(bH&&bH!=bI){bK+=bH.scrollLeft;
top+=bH.scrollTop;
bH=bH.parentNode;
}}return {left:bK,top:top};
},__gD:qx.core.Variant.select(bk,{"mshtml":function(F){var H=qx.dom.Node.getDocument(F);
var G=H.body;
var I=0;
var top=0;
I-=G.clientLeft+H.documentElement.clientLeft;
top-=G.clientTop+H.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){I+=this.__gB(G,bo);
top+=this.__gB(G,bp);
}return {left:I,top:top};
},"webkit":function(B){var D=qx.dom.Node.getDocument(B);
var C=D.body;
var E=C.offsetLeft;
var top=C.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){E+=this.__gB(C,bo);
top+=this.__gB(C,bp);
}return {left:E,top:top};
},"gecko":function(L){var M=qx.dom.Node.getDocument(L).body;
var N=M.offsetLeft;
var top=M.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){N+=this.__gB(M,bm);
top+=this.__gB(M,bn);
}if(qx.bom.element.BoxSizing.get(M)!==bj){N+=this.__gB(M,bo);
top+=this.__gB(M,bp);
}return {left:N,top:top};
},"default":function(e){var f=qx.dom.Node.getDocument(e).body;
var g=f.offsetLeft;
var top=f.offsetTop;
return {left:g,top:top};
}}),__gE:qx.core.Variant.select(bk,{"mshtml|webkit":function(w){var y=qx.dom.Node.getDocument(w);
if(w.getBoundingClientRect){var z=w.getBoundingClientRect();
var A=z.left;
var top=z.top;
}else{var A=w.offsetLeft;
var top=w.offsetTop;
w=w.offsetParent;
var x=y.body;
while(w&&w!=x){A+=w.offsetLeft;
top+=w.offsetTop;
A+=this.__gB(w,bo);
top+=this.__gB(w,bp);
w=w.offsetParent;
}}return {left:A,top:top};
},"gecko":function(bb){if(bb.getBoundingClientRect){var be=bb.getBoundingClientRect();
var bf=Math.round(be.left);
var top=Math.round(be.top);
}else{var bf=0;
var top=0;
var bc=qx.dom.Node.getDocument(bb).body;
var bd=qx.bom.element.BoxSizing;

if(bd.get(bb)!==bj){bf-=this.__gB(bb,bo);
top-=this.__gB(bb,bp);
}
while(bb&&bb!==bc){bf+=bb.offsetLeft;
top+=bb.offsetTop;
if(bd.get(bb)!==bj){bf+=this.__gB(bb,bo);
top+=this.__gB(bb,bp);
}if(bb.parentNode&&this.__gA(bb.parentNode,br)!=bz){bf+=this.__gB(bb.parentNode,bo);
top+=this.__gB(bb.parentNode,bp);
}bb=bb.offsetParent;
}}return {left:bf,top:top};
},"default":function(bN){var bP=0;
var top=0;
var bO=qx.dom.Node.getDocument(bN).body;
while(bN&&bN!==bO){bP+=bN.offsetLeft;
top+=bN.offsetTop;
bN=bN.offsetParent;
}return {left:bP,top:top};
}}),get:function(Q,R){if(Q.tagName==by){var location=this.__gF(Q);
var Y=location.left;
var top=location.top;
}else{var S=this.__gD(Q);
var X=this.__gE(Q);
var scroll=this.__gC(Q);
var Y=X.left+S.left-scroll.left;
var top=X.top+S.top-scroll.top;
}var T=Y+Q.offsetWidth;
var U=top+Q.offsetHeight;

if(R){if(R==bE||R==bl){var V=qx.bom.element.Overflow.getX(Q);

if(V==bl||V==bg){T+=Q.scrollWidth-Q.offsetWidth+this.__gB(Q,bo)+this.__gB(Q,bh);
}var W=qx.bom.element.Overflow.getY(Q);

if(W==bl||W==bg){U+=Q.scrollHeight-Q.offsetHeight+this.__gB(Q,bp)+this.__gB(Q,bi);
}}
switch(R){case bE:Y+=this.__gB(Q,bC);
top+=this.__gB(Q,bw);
T-=this.__gB(Q,bs);
U-=this.__gB(Q,bx);
case bl:Y-=Q.scrollLeft;
top-=Q.scrollTop;
T-=Q.scrollLeft;
U-=Q.scrollTop;
case bq:Y+=this.__gB(Q,bo);
top+=this.__gB(Q,bp);
T-=this.__gB(Q,bh);
U-=this.__gB(Q,bi);
break;
case bu:Y-=this.__gB(Q,bm);
top-=this.__gB(Q,bn);
T+=this.__gB(Q,bv);
U+=this.__gB(Q,bA);
break;
}}return {left:Y,top:top,right:T,bottom:U};
},__gF:qx.core.Variant.select(bk,{"default":function(a){var top=a.offsetTop+this.__gB(a,bn);
var b=a.offsetLeft+this.__gB(a,bm);
return {left:b,top:top};
},"mshtml":function(J){var top=J.offsetTop;
var K=J.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gB(J,bn);
K+=this.__gB(J,bm);
}return {left:K,top:top};
},"gecko":function(k){var top=k.offsetTop+this.__gB(k,bn)+this.__gB(k,bo);
var l=k.offsetLeft+this.__gB(k,bm)+this.__gB(k,bp);
return {left:l,top:top};
}}),getLeft:function(bL,bM){return this.get(bL,bM).left;
},getTop:function(bF,bG){return this.get(bF,bG).top;
},getRight:function(u,v){return this.get(u,v).right;
},getBottom:function(m,n){return this.get(m,n).bottom;
},getRelative:function(o,p,q,r){var t=this.get(o,q);
var s=this.get(p,r);
return {left:t.left-s.left,top:t.top-s.top,right:t.right-s.right,bottom:t.bottom-s.bottom};
},getPosition:function(ba){return this.getRelative(ba,this.getOffsetParent(ba));
},getOffsetParent:function(h){var j=h.offsetParent||document.body;
var i=qx.bom.element.Style;

while(j&&(!/^body|html$/i.test(j.tagName)&&i.get(j,bt)===bB)){j=j.offsetParent;
}return j;
}}});
})();
(function(){var v="mshtml",u="qx.client",t="Please use element.clientWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",s="qx.bom.element.Dimension",r="Please use element.scrollWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",q="paddingRight",p="paddingLeft",o="paddingTop",n="Please use element.scrollHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",m="Please use element.clientHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",l="paddingBottom";
qx.Class.define(s,{statics:{getWidth:qx.core.Variant.select(u,{"gecko":function(I){if(I.getBoundingClientRect){var J=I.getBoundingClientRect();
return Math.round(J.right)-Math.round(J.left);
}else{return I.offsetWidth;
}},"default":function(H){return H.offsetWidth;
}}),getHeight:qx.core.Variant.select(u,{"gecko":function(i){if(i.getBoundingClientRect){var j=i.getBoundingClientRect();
return Math.round(j.bottom)-Math.round(j.top);
}else{return i.offsetHeight;
}},"default":function(a){return a.offsetHeight;
}}),getSize:function(y){return {width:this.getWidth(y),height:this.getHeight(y)};
},__ge:{visible:true,hidden:true},getContentWidth:function(z){var B=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getX(z);
var D=parseInt(B.get(z,p),10);
var F=parseInt(B.get(z,q),10);

if(this.__ge[C]){return z.clientWidth-D-F;
}else{if(z.clientWidth>=z.scrollWidth){return Math.max(z.clientWidth,z.scrollWidth)-D-F;
}else{var E=z.scrollWidth-D;
var A=qx.bom.client.Engine;

if(A.NAME===v&&A.VERSION==6){E-=F;
}return E;
}}},getContentHeight:function(b){var d=qx.bom.element.Style;
var f=qx.bom.element.Overflow.getY(b);
var g=parseInt(d.get(b,o),10);
var e=parseInt(d.get(b,l),10);

if(this.__ge[f]){return b.clientHeight-g-e;
}else{if(b.clientHeight>=b.scrollHeight){return Math.max(b.clientHeight,b.scrollHeight)-g-e;
}else{var h=b.scrollHeight-g;
var c=qx.bom.client.Engine;

if(c.NAME===v&&c.VERSION==6){h-=e;
}return h;
}}},getContentSize:function(K){return {width:this.getContentWidth(K),height:this.getContentHeight(K)};
},getClientWidth:function(x){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return x.clientWidth;
},getClientHeight:function(w){qx.log.Logger.deprecatedMethodWarning(arguments.callee,m);
return w.clientHeight;
},getScrollWidth:function(G){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return G.scrollWidth;
},getScrollHeight:function(k){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return k.scrollHeight;
}}});
})();
(function(){var j="Number",i="qx.event.type.Event",h="update",g="linear",f="Boolean",e="setup",d="flicker",c="Object",b="__Y",a="pulse",v="__ba",u="sinodial",t="spring",s="full",r="wobble",q="_applyDuration",p="easeOutQuad",o="easeInQuad",n="finish",m="reverse",k="none",l="qx.fx.Base";
qx.Class.define(l,{extend:qx.core.Object,construct:function(B){arguments.callee.base.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__Y=qx.fx.Base.EffectState.IDLE;
this.__ba=B;
},events:{"setup":i,"update":i,"finish":i},properties:{duration:{init:0.5,check:j,apply:q},fps:{init:100,check:j},sync:{init:false,check:f},from:{init:0,check:j},to:{init:1,check:j},delay:{init:0.0,check:j},queue:{check:c},transition:{init:g,check:[g,o,p,u,m,d,r,a,t,k,s]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__Y:null,__bb:null,__bc:null,__bd:null,__be:null,__bf:null,__bg:null,__bh:null,__ba:null,_getElement:function(){return this.__ba;
},_setElement:function(A){this.__ba=A;
},_applyDuration:function(C,D){},init:function(){this.__Y=qx.fx.Base.EffectState.PREPARING;
this.__bb=0;
this.__bc=this.getDelay()*1000+(new Date().getTime());
this.__bd=this.__bc+(this.getDuration()*1000);
this.__be=this.getTo()-this.getFrom();
this.__bf=this.__bd-this.__bc;
this.__bg=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(e);
},update:function(z){},finish:function(){this.fireEvent(n);
},start:function(){if(this.__Y!=qx.fx.Base.EffectState.IDLE){return false;
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
},render:function(E){if(this.__Y==qx.fx.Base.EffectState.PREPARING){this.__Y=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__Y==qx.fx.Base.EffectState.RUNNING){this.__bh=qx.fx.Transition.get(this.getTransition())(E)*this.__be+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__bh);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(h)){this.fireEvent(h);
}}},loop:function(w){if(w>=this.__bc){if(w>=this.__bd){this.end();
}var y=(w-this.__bc)/this.__bf;
var x=Math.round(y*this.__bg);
if(x>this.__bb){this.render(y);
this.__bb=x;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__Y=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__Y=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this._disposeFields(v,b);
}});
})();
(function(){var i="position",h="px",g="relative",f="Number",e="absolute",d="top",c="left",b='absolute',a="qx.fx.effect.core.Move";
qx.Class.define(a,{extend:qx.fx.Base,properties:{mode:{init:g,check:[g,e]},x:{init:0,check:f},y:{init:0,check:f}},members:{__bi:null,__bj:null,__bk:null,__bl:null,__bm:null,setup:function(){var j=this._getElement();
arguments.callee.base.call(this);

if(j.parentNode){this.__bk=qx.bom.element.Location.getLeft(j)-qx.bom.element.Location.getLeft(j.parentNode);
this.__bl=qx.bom.element.Location.getTop(j)-qx.bom.element.Location.getTop(j.parentNode);
}else{this.__bk=qx.bom.element.Location.getLeft(j);
this.__bl=qx.bom.element.Location.getTop(j);
}this.__bm=qx.bom.element.Style.get(j,i);
qx.bom.element.Style.set(j,i,e);

if(this.getMode()==b){this.__bi=this.getX()-this.__bk;
this.__bj=this.getY()-this.__bl;
}else{this.__bi=this.getX();
this.__bj=this.getY();
}},update:function(k){var m=this._getElement();
arguments.callee.base.call(this);
var l=Math.round(this.__bi*k+this.__bk);
var top=Math.round(this.__bj*k+this.__bl);
qx.bom.element.Style.set(m,c,l+h);
qx.bom.element.Style.set(m,d,top+h);
},afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),i,this.__bm);
}}});
})();
(function(){var f="__default",e="__bn",d="qx.fx.queue.Manager",c="singleton",b="object";
qx.Class.define(d,{extend:qx.core.Object,type:c,members:{__bn:{},getQueue:function(a){if(typeof (this.__bn[a])==b){return this.__bn[a];
}else{return this.__bn[a]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(f);
}},destruct:function(){this._disposeMap(e);
}});
})();
(function(){var c="qx.fx.queue.Queue",b="Number",a="__bo";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__bo=[];
},properties:{limit:{init:Infinity,check:b}},members:{__bp:null,__bo:null,add:function(f){var g=new Date().getTime();
f._startOn+=g;
f._finishOn+=g;

if(this.__bo.length<this.getLimit()){this.__bo.push(f);
}else{f.resetState();
}
if(!this.__bp){this.__bp=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(h){qx.lang.Array.remove(this.__bo,h);

if(this.__bo.length==0){window.clearInterval(this.__bp);
delete this.__bp;
}},loop:function(){var d=new Date().getTime();

for(var i=0,e=this.__bo.length;i<e;i++){this.__bo[i]&&this.__bo[i].loop(d);
}}},destruct:function(){this._disposeFields(a);
}});
})();
(function(){var g="Number",f="static",e="qx.fx.Transition";
qx.Class.define(e,{type:f,statics:{get:function(p){return qx.fx.Transition[p]||false;
},linear:function(k){return k;
},easeInQuad:function(m){return Math.pow(2,10*(m-1));
},easeOutQuad:function(j){return (-Math.pow(2,-10*j)+1);
},sinodial:function(l){return (-Math.cos(l*Math.PI)/2)+0.5;
},reverse:function(d){return 1-d;
},flicker:function(b){var b=((-Math.cos(b*Math.PI)/4)+0.75)+Math.random()/4;
return b>1?1:b;
},wobble:function(n){return (-Math.cos(n*Math.PI*(9*n))/2)+0.5;
},pulse:function(h,i){i=(typeof (i)==g)?i:5;
return (Math.round((h%(1/i))*i)==0?Math.floor((h*i*2)-(h*i*2)):1-Math.floor((h*i*2)-(h*i*2)));
},spring:function(c){return 1-(Math.cos(c*4.5*Math.PI)*Math.exp(-c*6));
},none:function(o){return 0;
},full:function(a){return 1;
}}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

})();