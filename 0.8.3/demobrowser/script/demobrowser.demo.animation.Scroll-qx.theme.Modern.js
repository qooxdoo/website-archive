(function() {
  
if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.legacy.theme": "qx.legacy.theme.ClassicRoyale", "qx.application": "demobrowser.demo.animation.Scroll", "qx.allowUrlVariants": "true", "qx.theme": "qx.theme.Modern", "qx.allowUrlSettings": "true"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off", "qx.aspects": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"qx": {"resourceUri": "../../resource", "version": "trunk", "sourceUri": "../../script"}, "demobrowser.demo": {"resourceUri": "../../resource", "version": "trunk", "sourceUri": "../../script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -474, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -572, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -69, 0], "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/form/checkbox-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -544, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -59, 0], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -12], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -418, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -12, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -20, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/checkbox-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -516, 0], "qx/decoration/Modern/form/checkbox-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -558, 0], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/form/radiobutton-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -530, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/inputcheckradio-combined.png": [628, 14, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/tooltip-error-lr-combined.png": [12, 18, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -348, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -30], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -54, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -264, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -53, 0], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -404, 0], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -145, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -27, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/form/checkbox-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -460, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -43, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -278, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -52, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -170, 0], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -35, 0], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-arrow.png": [11, 14, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -15, 0], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -30, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tooltip-error-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -502, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/form/checkbox-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -586, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -53, 0], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -46, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -390, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/form/tooltip-error-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -600, 0], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -33, 0], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/radiobutton-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -446, 0], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/icon/Tango/16/actions/window-close.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -334, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -20, 0], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -376, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -69, 0], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -614, 0], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -292, 0], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -6], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -488, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -432, 0], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -306, 0], "qx/decoration/Modern/form/tooltip-error-l.png": [6, 18, "png", "qx", "qx/decoration/Modern/tooltip-error-lr-combined.png", 0, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -82, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -39, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/form/tooltip-error-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -24], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/static/blank.gif": [1, 1, "gif", "qx"], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -10, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -43, 0], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/form/tooltip-error-r.png": [6, 18, "png", "qx", "qx/decoration/Modern/tooltip-error-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -362, 0], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -151, 0], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/tooltip-error-c.png": [20, 18, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3]};
qx.$$translations = {};
qx.$$locales = {"fr": {"cldr_month_format_wide_11": "novembre", "cldr_date_time_format_MMd": "d/MM", "cldr_day_format_wide_sun": "dimanche", "cldr_date_time_format_yyMMMd": "d MMM yy", "cldr_day_format_wide_wed": "mercredi", "cldr_day_format_narrow_thu": "J", "cldr_day_format_narrow_fri": "V", "cldr_day_format_narrow_sun": "D", "cldr_date_time_format_MEd": "EEE d/M", "cldr_date_time_format_MMM": "LLL", "cldr_day_format_abbreviated_thu": "jeu.", "cldr_day_stand-alone_wide_sun": "dimanche", "cldr_pm": "PM", "alternateQuotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "jeu.", "cldr_day_format_wide_tue": "mardi", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE d MMMM yyyy", "cldr_date_time_format_MMMd": "d MMM", "cldr_day_format_abbreviated_tue": "mar.", "cldr_day_format_abbreviated_mon": "lun.", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "lundi", "cldr_date_time_format_MMMEd": "E d MMM", "cldr_date_time_format_yQ": "QQQ yyyy", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_day_stand-alone_abbreviated_sun": "dim.", "cldr_date_time_format_MMMMd": "d MMMM", "cldr_date_time_format_MMMMEd": "EEE d MMMM", "cldr_date_time_format_MMdd": "dd/MM", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": " ", "alternateQuotationStart": "“", "cldr_day_format_abbreviated_sun": "dim.", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_month_format_abbreviated_1": "janv.", "cldr_month_format_abbreviated_2": "févr.", "cldr_month_format_abbreviated_3": "mars", "cldr_month_format_abbreviated_4": "avr.", "cldr_month_format_abbreviated_5": "mai", "cldr_month_format_abbreviated_6": "juin", "cldr_month_format_abbreviated_7": "juil.", "cldr_date_time_format_yMMMEd": "EEE d MMM yyyy", "cldr_month_format_abbreviated_9": "sept.", "cldr_day_format_wide_mon": "lundi", "cldr_date_time_format_yMEd": "EEE d/M/yyyy", "cldr_day_stand-alone_wide_tue": "mardi", "cldr_day_format_narrow_wed": "M", "cldr_day_format_abbreviated_wed": "mer.", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "L", "cldr_date_time_format_yyMM": "MM/yy", "cldr_day_stand-alone_abbreviated_wed": "mer.", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d MMMM yyyy", "cldr_month_format_wide_10": "octobre", "cldr_month_format_wide_12": "décembre", "cldr_day_stand-alone_wide_sat": "samedi", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_format_abbreviated_sat": "sam.", "cldr_month_format_abbreviated_8": "août", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_stand-alone_abbreviated_tue": "mar.", "cldr_day_stand-alone_narrow_wed": "M", "cldr_date_time_format_HHmm": "HH:mm", "cldr_date_time_format_MMMdd": "dd MMM", "cldr_month_stand-alone_narrow_1": "J", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_2": "F", "cldr_month_stand-alone_narrow_5": "M", "cldr_month_stand-alone_narrow_4": "A", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_month_stand-alone_narrow_8": "A", "cldr_date_time_format_Md": "M-d", "cldr_day_stand-alone_wide_fri": "vendredi", "cldr_day_stand-alone_narrow_tue": "M", "cldr_day_format_abbreviated_fri": "ven.", "cldr_day_stand-alone_abbreviated_fri": "ven.", "cldr_day_format_narrow_tue": "M", "quotationEnd": "»", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_date_time_format_yyMMMEEEd": "EEE d MMM yy", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "jeudi", "cldr_day_stand-alone_narrow_sat": "S", "cldr_date_time_format_yyQ": "QQQ yy", "cldr_day_format_wide_fri": "vendredi", "cldr_date_format_medium": "d MMM yyyy", "cldr_day_stand-alone_wide_thu": "jeudi", "quotationStart": "«", "cldr_day_stand-alone_abbreviated_sat": "sam.", "cldr_date_time_format_hhmmss": "HH:mm:ss", "cldr_month_format_wide_1": "janvier", "cldr_month_format_wide_3": "mars", "cldr_day_stand-alone_narrow_sun": "D", "cldr_month_format_wide_5": "mai", "cldr_month_format_wide_4": "avril", "cldr_month_format_wide_7": "juillet", "cldr_month_format_wide_6": "juin", "cldr_month_format_wide_9": "septembre", "cldr_month_format_wide_8": "août", "cldr_am": "AM", "cldr_day_stand-alone_wide_wed": "mercredi", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "J", "cldr_month_format_wide_2": "février", "cldr_date_format_short": "dd/MM/yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_day_stand-alone_narrow_fri": "V", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_hhmm": "HH:mm", "cldr_date_time_format_y": "yyyy", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_abbreviated_mon": "lun.", "cldr_day_format_narrow_mon": "L", "cldr_month_format_abbreviated_12": "déc.", "cldr_month_format_abbreviated_10": "oct.", "cldr_month_format_abbreviated_11": "nov.", "cldr_day_format_wide_sat": "samedi", "cldr_date_time_format_d": "d"}, "en": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_12": "December", "cldr_month_format_wide_10": "October", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_month_format_wide_7": "July", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_month_stand-alone_narrow_5": "M", "cldr_day_format_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_month_stand-alone_narrow_4": "A", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_month_stand-alone_narrow_2": "F", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_date_time_format_M": "L", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_wide_tue": "Tuesday", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_stand-alone_wide_thu": "Thursday", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_day_stand-alone_narrow_sun": "S", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_day_stand-alone_narrow_tue": "T", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "May", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_month_format_abbreviated_10": "Oct", "cldr_date_time_format_y": "yyyy", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_day_format_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_date_format_short": "M/d/yy"}, "fr_FR": {}, "de": {"cldr_month_stand-alone_abbreviated_7": "Jul", "cldr_month_stand-alone_abbreviated_3": "Mär", "cldr_month_stand-alone_abbreviated_8": "Aug", "cldr_month_stand-alone_abbreviated_9": "Sep", "cldr_date_time_format_MMd": "d.MM.", "cldr_day_format_wide_sun": "Sonntag", "cldr_day_format_wide_wed": "Mittwoch", "cldr_day_format_narrow_thu": "D", "cldr_day_format_narrow_fri": "F", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, d.M.", "cldr_date_time_format_MMM": "LLL", "cldr_day_format_abbreviated_thu": "Do.", "cldr_day_stand-alone_wide_sun": "Sonntag", "cldr_pm": "nachm.", "alternateQuotationEnd": "‘", "cldr_day_stand-alone_abbreviated_thu": "Do.", "cldr_day_format_wide_tue": "Dienstag", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, d. MMMM yyyy", "cldr_date_time_format_MMMd": "d. MMM", "cldr_day_format_abbreviated_tue": "Di.", "cldr_day_format_abbreviated_mon": "Mo.", "cldr_date_time_format_yM": "yyyy-M", "cldr_day_stand-alone_wide_mon": "Montag", "cldr_date_time_format_MMMEd": "E d. MMM", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_yyMMdd": "dd.MM.yy", "cldr_date_format_long": "d. MMMM yyyy", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_day_stand-alone_abbreviated_sun": "So.", "cldr_date_time_format_MMMMd": "d. MMMM", "cldr_date_time_format_MMMMEd": "E d. MMMM", "cldr_date_time_format_MMdd": "dd.MM.", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": ".", "alternateQuotationStart": "‚", "cldr_day_format_abbreviated_sun": "So.", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mrz", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "Mai", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, d. MMM yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Montag", "cldr_date_time_format_yMEd": "EEE, yyyy-M-d", "cldr_day_stand-alone_wide_tue": "Dienstag", "cldr_day_format_narrow_wed": "M", "cldr_day_format_abbreviated_wed": "Mi.", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_date_time_format_yyMM": "MM.yy", "cldr_day_stand-alone_abbreviated_wed": "Mi.", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_10": "Oktober", "cldr_month_format_wide_12": "Dezember", "cldr_day_stand-alone_wide_sat": "Samstag", "cldr_time_format_long": "HH:mm:ss z", "cldr_date_time_format_MMMMdd": "dd. MMMM", "cldr_day_format_abbreviated_sat": "Sa.", "cldr_month_format_abbreviated_8": "Aug", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_stand-alone_abbreviated_tue": "Di.", "cldr_day_stand-alone_narrow_wed": "M", "cldr_date_time_format_HHmm": "HH:mm", "cldr_date_time_format_Ed": "E d", "cldr_month_stand-alone_narrow_1": "J", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_2": "F", "cldr_month_stand-alone_narrow_5": "M", "cldr_month_stand-alone_narrow_4": "A", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_month_stand-alone_narrow_8": "A", "cldr_month_stand-alone_abbreviated_10": "Okt", "cldr_month_stand-alone_abbreviated_11": "Nov", "cldr_month_stand-alone_abbreviated_12": "Dez", "cldr_day_stand-alone_wide_fri": "Freitag", "cldr_day_stand-alone_narrow_tue": "D", "cldr_day_format_abbreviated_fri": "Fr.", "cldr_day_stand-alone_abbreviated_fri": "Fr.", "cldr_day_format_narrow_tue": "D", "quotationEnd": "“", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Donnerstag", "cldr_day_stand-alone_narrow_sat": "S", "cldr_date_time_format_yyQ": "Q yy", "cldr_day_format_wide_fri": "Freitag", "cldr_date_format_medium": "dd.MM.yyyy", "cldr_day_stand-alone_wide_thu": "Donnerstag", "quotationStart": "„", "cldr_day_stand-alone_abbreviated_sat": "Sa.", "cldr_date_time_format_hhmmss": "hh:mm:ss a", "cldr_month_format_wide_1": "Januar", "cldr_month_format_wide_3": "März", "cldr_day_stand-alone_narrow_sun": "S", "cldr_month_format_wide_5": "Mai", "cldr_month_format_wide_4": "April", "cldr_month_format_wide_7": "Juli", "cldr_month_format_wide_6": "Juni", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_am": "vorm.", "cldr_day_stand-alone_wide_wed": "Mittwoch", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "D", "cldr_date_time_format_H": "H", "cldr_month_format_wide_2": "Februar", "cldr_date_format_short": "dd.MM.yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_hhmm": "hh:mm a", "cldr_date_time_format_yyyy": "yyyy", "cldr_date_time_format_y": "yyyy", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_date_time_format_Md": "d.M.", "cldr_day_stand-alone_abbreviated_mon": "Mo.", "cldr_day_format_narrow_mon": "M", "cldr_month_format_abbreviated_12": "Dez", "cldr_month_format_abbreviated_10": "Okt", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Samstag", "cldr_date_time_format_d": "d"}, "C": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_12": "December", "cldr_month_format_wide_10": "October", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_month_format_wide_7": "July", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_month_stand-alone_narrow_5": "M", "cldr_day_format_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_month_stand-alone_narrow_4": "A", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_month_stand-alone_narrow_2": "F", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_date_time_format_M": "L", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_wide_tue": "Tuesday", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_stand-alone_wide_thu": "Thursday", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_day_stand-alone_narrow_sun": "S", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_day_stand-alone_narrow_tue": "T", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "May", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_month_format_abbreviated_10": "Oct", "cldr_date_time_format_y": "yyyy", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_day_format_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_date_format_short": "M/d/yy"}, "en_US": {}, "de_DE": {}};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["qx:demobrowser.demo.animation.Scroll-qx.theme.Modern-0.js"]],
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
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
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
(function(){var i="px",h="position:absolute;top:0;left:0",g="qx.ui.decoration.Background",f="__fe",e="",d="__insets",c="_applyStyle",b="Color";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this.setBackgroundColor(a);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__fe:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__fe;
},getMarkup:function(){if(this.__fe){return this.__fe;
}var j=this._generateBackgroundMarkup(h);
return this.__fe=j;
},resize:function(n,o,p){n.style.width=o+i;
n.style.height=p+i;
},tint:function(k,l){var m=qx.theme.manager.Color.getInstance();

if(l==null){l=this.getBackgroundColor();
}k.style.backgroundColor=m.resolve(l)||e;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(f,d);
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
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bp="decoration/table/header-cell.png",bo="decoration/form/input.png",bn="#f8f8f8",bm="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bl="#b6b6b6",bk="background-pane",bj="repeat-y",bi="decoration/form/input-focused.png",bh="border-input",bg="decoration/scrollbar/scrollbar-button-bg-vertical.png",t="decoration/tabview/tab-button-top-active.png",u="decoration/form/button-c.png",r="decoration/scrollbar/scrollbar-bg-vertical.png",s="decoration/form/button.png",p="decoration/form/button-checked.png",q="decoration/tabview/tab-button-left-inactive.png",n="decoration/groupbox/groupbox.png",o="#FAFAFA",A="decoration/pane/pane.png",B="decoration/menu/background.png",L="decoration/toolbar/toolbar-part.gif",I="decoration/tabview/tab-button-top-inactive.png",T="decoration/menu/bar-background.png",O="center",bc="decoration/tabview/tab-button-bottom-active.png",Y="decoration/form/button-hovered.png",E="decoration/form/tooltip-error-arrow.png",bf="decoration/window/captionbar-inactive.png",be="qx/decoration/Modern",bd="decoration/window/statusbar.png",D="border-focused",G="decoration/selection.png",H="table-focus-indicator",K="#F2F2F2",M="decoration/form/button-checked-c.png",P="decoration/scrollbar/scrollbar-bg-horizontal.png",V="qx.theme.modern.Decoration",bb="#f4f4f4",v="decoration/shadow/shadow-small.png",w="decoration/app-header.png",F="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",W="decoration/tabview/tab-button-right-active.png",N="decoration/form/button-pressed.png",U="no-repeat",a="decoration/window/captionbar-active.png",ba="decoration/tabview/tab-button-left-active.png",x="background-splitpane",y="decoration/form/button-checked-focused.png",J="#C5C5C5",b="decoration/toolbar/toolbar-gradient.png",c="decoration/tabview/tab-button-right-inactive.png",C="#b8b8b8",z="decoration/shadow/shadow.png";
qx.Theme.define(V,{aliases:{decoration:be},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:n}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:E,backgroundPositionY:O,backgroundRepeat:U,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:z,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:v,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:P,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:r,backgroundRepeat:bj}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bm,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bm,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bg,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bg,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:p,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:y,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bh,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bh,innerColor:D,backgroundImage:bi,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bi,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:b,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bl,innerColor:bn,backgroundImage:u,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bl,innerColor:bn,backgroundImage:M,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:C,colorRight:bb,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:L,backgroundRepeat:bj}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:F,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:t}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:I}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:W}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:c}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bk,width:3,color:x,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bk,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:H,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthRight:1,colorRight:K,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:B,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:J,widthBottom:1,colorBottom:o}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:T,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:w,backgroundRepeat:l}}}});
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
(function(){var m="Liberation Sans",l="Arial",k="Lucida Grande",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",d="monospace",a="Lucida Console",c="qx.theme.modern.Font",b="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l]},"bold":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l],bold:true},"small":{size:qx.bom.client.System.WINVISTA?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[a,e]:qx.bom.client.System.WINVISTA?[g]:[g,b,f,d]}}});
})();
(function(){var dH="button-frame",dG="atom",dF="widget",dE="main",dD="button",dC="bold",dB="middle",dA="text-selected",dz="background-light",dy="image",cl="text-disabled",ck="groupbox",cj="cell",ci="border-invalid",ch="input",cg="input-disabled",cf="menu-button",ce="decoration/arrows/down.png",cd="input-focused-invalid",cc="toolbar-button",dO="spinner",dP="input-focused",dM="selected",dN="popup",dK="tooltip",dL="list",dI="tree-item",dJ="treevirtual-contract",dQ="scrollbar",dR="datechooser/nav-button",dg="text-hovered",df="center",di="treevirtual-expand",dh="textfield",dk="label",dj="decoration/arrows/right.png",dm="background-application",dl="radiobutton",de="invalid",dd="combobox",p="right-top",q="checkbox",r="text-title",s="qx/static/blank.gif",t="scrollbar/button",u="right",v="combobox/button",w="icon/16/places/folder.png",x="text-label",y="decoration/tree/closed.png",eg="scrollbar-slider-horizontal",ef="white",ee="decoration/arrows/left.png",ed="button-focused",ek="text-light",ej="text-input",ei="slidebar/button-forward",eh="background-splitpane",em=".png",el="decoration/tree/open.png",bq="default",br="decoration/arrows/down-small.png",bo="datechooser",bp="slidebar/button-backward",bu="selectbox",bv="treevirtual-folder",bs="shadow-popup",bt="icon/16/mimetypes/office-document.png",bm="background-medium",bn="table",S="decoration/form/",R="",U="-invalid",T="icon/16/places/folder-open.png",O="button-checked",N="decoration/window/maximize-active-hovered.png",Q="radiobutton-hovered",P="decoration/cursors/",M="slidebar",L="tooltip-error-arrow",bB="table-scroller-focus-indicator",bC="move-frame",bD="nodrop",bE="decoration/table/boolean-true.png",bx="table-header-cell",by="menu",bz="app-header",bA="row-layer",bF="text-inactive",bG="move",bf="radiobutton-checked-focused",be="decoration/window/restore-active-hovered.png",bd="shadow-window",bc="table-column-button",bb="right.png",ba="tabview-page-button-bottom-inactive",Y="tooltip-error",X="window-statusbar",bj="button-hovered",bi="decoration/scrollbar/scrollbar-",bH="background-tip",bI="scrollbar-slider-horizontal-disabled",bJ="table-scroller-header",bK="radiobutton-disabled",bL="button-pressed",bM="table-pane",bN="decoration/window/close-active.png",bO="tabview-page-button-left-active",bP="checkbox-hovered",bQ="button-invalid-shadow",ct="checkbox-checked",cs="decoration/window/minimize-active-hovered.png",cr="menubar",cq="icon/16/actions/dialog-cancel.png",cx="tabview-page-button-top-inactive",cw="tabview-page-button-left-inactive",cv="toolbar-button-checked",cu="decoration/tree/open-selected.png",cB="radiobutton-checked",cA="decoration/window/minimize-inactive.png",cY="icon/16/apps/office-calendar.png",da="group",cW="tabview-page-button-right-inactive",cX="decoration/window/minimize-active.png",cU="decoration/window/restore-inactive.png",cV="checkbox-checked-focused",cS="splitpane",cT="combobox/textfield",db="button-preselected-focused",dc="decoration/window/close-active-hovered.png",dr="qx/icon/Tango/16/actions/window-close.png",dq="checkbox-pressed",dt="button-disabled",ds="border-separator",dv="decoration/window/maximize-inactive.png",du="icon/22/places/folder-open.png",dx="scrollarea",dw="scrollbar-vertical",dp="decoration/toolbar/toolbar-handle-knob.gif",dn="icon/22/mimetypes/office-document.png",dY="button-preselected",ea="button-checked-focused",eb="up.png",ec="decoration/tree/closed-selected.png",dU="qx.theme.modern.Appearance",dV="text-active",dW="checkbox-disabled",dX="toolbar-button-hovered",dS="progressive-table-header",dT="decoration/menu/radiobutton.gif",o="decoration/arrows/forward.png",n="decoration/table/descending.png",m="window-captionbar-active",l="checkbox-checked-hovered",k="scrollbar-slider-vertical",j="toolbar",i="alias",h="decoration/window/restore-active.png",g="decoration/table/boolean-false.png",f="checkbox-checked-disabled",B="icon/32/mimetypes/office-document.png",C="radiobutton-checked-disabled",z="tabview-pane",A="decoration/arrows/rewind.png",F="checkbox-focused",G="top",D="#EEE",E="icon/16/actions/dialog-ok.png",I="radiobutton-checked-hovered",J="table-header-cell-hovered",cF="window",cz="text-gray",cM="decoration/menu/radiobutton-invert.gif",cI="text-placeholder",co="slider",cm="decoration/table/select-column-order.png",W="down.png",cp="tabview-page-button-top-active",bh="icon/32/places/folder-open.png",bg="icon/22/places/folder.png",bT="decoration/window/maximize-active.png",bU="checkbox-checked-pressed",bV="decoration/window/close-inactive.png",bW="toolbar-part",bX="decoration/splitpane/knob-vertical.png",bY=".gif",ca="decoration/menu/checkbox-invert.gif",cb="decoration/arrows/up.png",bR="radiobutton-checked-pressed",bS="table-statusbar",cn="radiobutton-pressed",cL="window-captionbar-inactive",cK="copy",cJ="radiobutton-focused",cQ="decoration/menu/checkbox.gif",cP="decoration/splitpane/knob-horizontal.png",cO="icon/32/places/folder.png",cN="toolbar-separator",cH="tabview-page-button-bottom-active",cG="decoration/arrows/up-small.png",H="decoration/table/ascending.png",bl="small",bk="tabview-page-button-right-active",cy="-disabled",bw="scrollbar-horizontal",cE="progressive-table-header-cell",cD="menu-separator",cC="pane",V="decoration/arrows/right-invert.png",cR="left.png",K="icon/16/actions/view-refresh.png";
qx.Theme.define(dU,{appearances:{"widget":{},"root":{style:function(hr){return {backgroundColor:dm,textColor:x,font:bq};
}},"label":{style:function(fG){return {textColor:fG.disabled?cl:undefined};
}},"move-frame":{style:function(gX){return {decorator:dE};
}},"resize-frame":bC,"dragdrop-cursor":{style:function(fV){var fW=bD;

if(fV.copy){fW=cK;
}else if(fV.move){fW=bG;
}else if(fV.alias){fW=i;
}return {source:P+fW+bY,position:p,offset:[2,16,2,6]};
}},"image":{style:function(ez){return {opacity:!ez.replacement&&ez.disabled?0.3:1};
}},"atom":{},"atom/label":dk,"atom/icon":dy,"popup":{style:function(ew){return {decorator:dE,backgroundColor:dz,shadow:bs};
}},"button-frame":{alias:dG,style:function(hs){var hu,ht;

if(hs.checked&&hs.focused&&!hs.inner){hu=ea;
ht=undefined;
}else if(hs.disabled){hu=dt;
ht=undefined;
}else if(hs.pressed){hu=bL;
ht=dg;
}else if(hs.checked){hu=O;
ht=undefined;
}else if(hs.hovered){hu=bj;
ht=dg;
}else if(hs.preselected&&hs.focused&&!hs.inner){hu=db;
ht=dg;
}else if(hs.preselected){hu=dY;
ht=dg;
}else if(hs.focused&&!hs.inner){hu=ed;
ht=undefined;
}else{hu=dD;
ht=undefined;
}return {decorator:hu,textColor:ht,shadow:hs.invalid&&!hs.disabled?bQ:undefined};
}},"button-frame/image":{style:function(eC){return {opacity:!eC.replacement&&eC.disabled?0.5:1};
}},"button":{alias:dH,include:dH,style:function(fC){return {padding:[2,8],center:true};
}},"splitbutton":{},"splitbutton/button":dD,"splitbutton/arrow":{alias:dD,include:dD,style:function(fD){return {icon:ce,padding:2,marginLeft:1};
}},"checkbox":{alias:dG,style:function(gR){var gT;

if(gR.checked&&gR.focused){gT=cV;
}else if(gR.checked&&gR.disabled){gT=f;
}else if(gR.checked&&gR.pressed){gT=bU;
}else if(gR.checked&&gR.hovered){gT=l;
}else if(gR.checked){gT=ct;
}else if(gR.disabled){gT=dW;
}else if(gR.focused){gT=F;
}else if(gR.pressed){gT=dq;
}else if(gR.hovered){gT=bP;
}else{gT=q;
}var gS=gR.invalid&&!gR.disabled?U:R;
return {icon:S+gT+gS+em,gap:6};
}},"radiobutton":{alias:dG,style:function(fO){var fQ;

if(fO.checked&&fO.focused){fQ=bf;
}else if(fO.checked&&fO.disabled){fQ=C;
}else if(fO.checked&&fO.pressed){fQ=bR;
}else if(fO.checked&&fO.hovered){fQ=I;
}else if(fO.checked){fQ=cB;
}else if(fO.disabled){fQ=bK;
}else if(fO.focused){fQ=cJ;
}else if(fO.pressed){fQ=cn;
}else if(fO.hovered){fQ=Q;
}else{fQ=dl;
}var fP=fO.invalid&&!fO.disabled?U:R;
return {icon:S+fQ+fP+em,gap:6};
}},"textfield":{style:function(gK){var gP;
var gN=!!gK.focused;
var gO=!!gK.invalid;
var gL=!!gK.disabled;

if(gN&&gO&&!gL){gP=cd;
}else if(gN&&!gO&&!gL){gP=dP;
}else if(gL){gP=cg;
}else if(!gN&&gO&&!gL){gP=ci;
}else{gP=ch;
}var gM;

if(gK.disabled){gM=cl;
}else if(gK.showingPlaceholder){gM=cI;
}else{gM=ej;
}return {decorator:gP,padding:[2,4,1],textColor:gM};
}},"textarea":{include:dh,style:function(hi){return {padding:4};
}},"spinner":{style:function(eo){var es;
var eq=!!eo.focused;
var er=!!eo.invalid;
var ep=!!eo.disabled;

if(eq&&er&&!ep){es=cd;
}else if(eq&&!er&&!ep){es=dP;
}else if(ep){es=cg;
}else if(!eq&&er&&!ep){es=ci;
}else{es=ch;
}return {decorator:es};
}},"spinner/textfield":{style:function(fu){return {marginRight:2,padding:[2,4,1],textColor:fu.disabled?cl:ej};
}},"spinner/upbutton":{alias:dH,include:dH,style:function(eI){return {icon:cG,padding:eI.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:dH,include:dH,style:function(fp){return {icon:br,padding:fp.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":dd,"datefield/button":{alias:v,include:v,style:function(fl){return {icon:cY,padding:[0,3],decorator:undefined};
}},"datefield/textfield":cT,"datefield/list":{alias:bo,include:bo,style:function(eD){return {decorator:undefined};
}},"groupbox":{style:function(gt){return {legendPosition:G};
}},"groupbox/legend":{alias:dG,style:function(fN){return {padding:[1,0,1,4],textColor:fN.invalid?de:r,font:dC};
}},"groupbox/frame":{style:function(hv){return {padding:12,decorator:da};
}},"check-groupbox":ck,"check-groupbox/legend":{alias:q,include:q,style:function(fd){return {padding:[1,0,1,4],textColor:fd.invalid?de:r,font:dC};
}},"radio-groupbox":ck,"radio-groupbox/legend":{alias:dl,include:dl,style:function(ha){return {padding:[1,0,1,4],textColor:ha.invalid?de:r,font:dC};
}},"scrollarea":{style:function(fr){return {minWidth:64,minHeight:64};
}},"scrollarea/corner":{style:function(fR){return {backgroundColor:dm};
}},"scrollarea/pane":dF,"scrollarea/scrollbar-x":dQ,"scrollarea/scrollbar-y":dQ,"scrollbar":{style:function(hj){return {width:hj.horizontal?undefined:16,height:hj.horizontal?16:undefined,decorator:hj.horizontal?bw:dw,padding:1};
}},"scrollbar/slider":{alias:co,style:function(gB){return {padding:gB.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:dH,style:function(eE){var eF=eE.horizontal?eg:k;

if(eE.disabled){eF+=cy;
}return {decorator:eF,minHeight:eE.horizontal?undefined:14,minWidth:eE.horizontal?14:undefined};
}},"scrollbar/button":{alias:dH,include:dH,style:function(fT){var fU=bi;

if(fT.left){fU+=cR;
}else if(fT.right){fU+=bb;
}else if(fT.up){fU+=eb;
}else{fU+=W;
}
if(fT.left||fT.right){return {padding:[0,0,0,fT.left?3:4],icon:fU,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:fU,width:14,height:15};
}}},"scrollbar/button-begin":t,"scrollbar/button-end":t,"slider":{style:function(eP){var eT;
var eR=!!eP.focused;
var eS=!!eP.invalid;
var eQ=!!eP.disabled;

if(eR&&eS&&!eQ){eT=cd;
}else if(eR&&!eS&&!eQ){eT=dP;
}else if(eQ){eT=cg;
}else if(!eR&&eS&&!eQ){eT=ci;
}else{eT=ch;
}return {decorator:eT};
}},"slider/knob":{include:dH,style:function(hD){return {decorator:hD.disabled?bI:eg,shadow:undefined,height:14,width:14};
}},"list":{alias:dx,style:function(hl){var hp;
var hn=!!hl.focused;
var ho=!!hl.invalid;
var hm=!!hl.disabled;

if(hn&&ho&&!hm){hp=cd;
}else if(hn&&!ho&&!hm){hp=dP;
}else if(hm){hp=cg;
}else if(!hn&&ho&&!hm){hp=ci;
}else{hp=ch;
}return {backgroundColor:dz,decorator:hp};
}},"list/pane":dF,"listitem":{alias:dG,style:function(gq){return {padding:4,textColor:gq.selected?dA:undefined,decorator:gq.selected?dM:undefined};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dH,include:dH,style:function(gI){return {padding:5,center:true,icon:gI.vertical?ce:dj};
}},"slidebar/button-backward":{alias:dH,include:dH,style:function(hM){return {padding:5,center:true,icon:hM.vertical?cb:ee};
}},"tabview":{style:function(gn){return {contentPadding:16};
}},"tabview/bar":{alias:M,style:function(gF){var gG={marginBottom:gF.barTop?-1:0,marginTop:gF.barBottom?-4:0,marginLeft:gF.barRight?-3:0,marginRight:gF.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gF.barTop||gF.barBottom){gG.paddingLeft=5;
gG.paddingRight=7;
}else{gG.paddingTop=5;
gG.paddingBottom=7;
}return gG;
}},"tabview/bar/button-forward":{include:ei,alias:ei,style:function(fF){if(fF.barTop||fF.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bp,alias:bp,style:function(e){if(e.barTop||e.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(hH){return {decorator:z,minHeight:100,marginBottom:hH.barBottom?-1:0,marginTop:hH.barTop?-1:0,marginLeft:hH.barLeft?-1:0,marginRight:hH.barRight?-1:0};
}},"tabview-page":dF,"tabview-page/button":{alias:dG,style:function(hw){var hC,hy=0;
var hB=0,hx=0,hz=0,hA=0;

if(hw.checked){if(hw.barTop){hC=cp;
hy=[6,14];
hz=hw.firstTab?0:-5;
hA=hw.lastTab?0:-5;
}else if(hw.barBottom){hC=cH;
hy=[6,14];
hz=hw.firstTab?0:-5;
hA=hw.lastTab?0:-5;
}else if(hw.barRight){hC=bk;
hy=[6,13];
hB=hw.firstTab?0:-5;
hx=hw.lastTab?0:-5;
}else{hC=bO;
hy=[6,13];
hB=hw.firstTab?0:-5;
hx=hw.lastTab?0:-5;
}}else{if(hw.barTop){hC=cx;
hy=[4,10];
hB=4;
hz=hw.firstTab?5:1;
hA=1;
}else if(hw.barBottom){hC=ba;
hy=[4,10];
hx=4;
hz=hw.firstTab?5:1;
hA=1;
}else if(hw.barRight){hC=cW;
hy=[4,10];
hA=5;
hB=hw.firstTab?5:1;
hx=1;
hz=1;
}else{hC=cw;
hy=[4,10];
hz=5;
hB=hw.firstTab?5:1;
hx=1;
hA=1;
}}return {zIndex:hw.checked?10:5,decorator:hC,padding:hy,marginTop:hB,marginBottom:hx,marginLeft:hz,marginRight:hA,textColor:hw.checked?dV:bF};
}},"tabview-page/button/close-button":{alias:dG,style:function(gE){return {icon:dr};
}},"toolbar":{style:function(eV){return {decorator:j,spacing:2};
}},"toolbar/part":{style:function(eO){return {decorator:bW,spacing:2};
}},"toolbar/part/container":{style:function(fb){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(eW){return {source:dp,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:dG,style:function(a){return {marginTop:2,marginBottom:2,padding:(a.pressed||a.checked||a.hovered)&&!a.disabled||(a.disabled&&a.checked)?3:5,decorator:a.pressed||(a.checked&&!a.hovered)||(a.checked&&a.disabled)?cv:a.hovered&&!a.disabled?dX:undefined};
}},"toolbar-menubutton":{alias:cc,include:cc,style:function(gr){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dy,include:dy,style:function(fS){return {source:br};
}},"toolbar-splitbutton":{style:function(fn){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:cc,include:cc,style:function(fz){return {icon:ce,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:cc,include:cc,style:function(fX){return {padding:fX.pressed||fX.checked?1:fX.hovered?1:3,icon:ce,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(gh){return {decorator:cN,margin:7};
}},"tree":dL,"tree-item":{style:function(fx){return {padding:[2,6],textColor:fx.selected?dA:undefined,decorator:fx.selected?dM:undefined};
}},"tree-item/icon":{include:dy,style:function(ge){return {paddingRight:5};
}},"tree-item/label":dk,"tree-item/open":{include:dy,style:function(hN){var hO;

if(hN.selected&&hN.opened){hO=cu;
}else if(hN.selected&&!hN.opened){hO=ec;
}else if(hN.opened){hO=el;
}else{hO=y;
}return {padding:[0,5,0,2],source:hO};
}},"tree-folder":{include:dI,alias:dI,style:function(hg){var hh;

if(hg.small){hh=hg.opened?T:w;
}else if(hg.large){hh=hg.opened?bh:cO;
}else{hh=hg.opened?du:bg;
}return {icon:hh};
}},"tree-file":{include:dI,alias:dI,style:function(eA){return {icon:eA.small?bt:eA.large?B:dn};
}},"treevirtual":bn,"treevirtual-folder":{style:function(eX){return {icon:eX.opened?T:w};
}},"treevirtual-file":{include:bv,alias:bv,style:function(gA){return {icon:bt};
}},"treevirtual-line":{style:function(eL){return {icon:s};
}},"treevirtual-contract":{style:function(fa){return {icon:el,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(fw){return {icon:y,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":dJ,"treevirtual-only-expand":di,"treevirtual-start-contract":dJ,"treevirtual-start-expand":di,"treevirtual-end-contract":dJ,"treevirtual-end-expand":di,"treevirtual-cross-contract":dJ,"treevirtual-cross-expand":di,"treevirtual-end":{style:function(eN){return {icon:s};
}},"treevirtual-cross":{style:function(gx){return {icon:s};
}},"tooltip":{include:dN,style:function(ey){return {backgroundColor:bH,padding:[1,3,2,3],offset:[5,5,20,5]};
}},"tooltip/atom":dG,"tooltip-error":{include:dK,style:function(fe){return {textColor:dA,placeMethod:dF,offsetRight:15,position:p,showTimeout:100,hideTimeout:10000,decorator:Y,shadow:L,font:dC};
}},"tooltip-error/atom":dG,"window":{style:function(gf){return {shadow:bd,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(fs){return {decorator:cF};
}},"window/captionbar":{style:function(eK){return {decorator:eK.active?m:cL,textColor:eK.active?ef:cz,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(gv){return {margin:[5,0,3,6]};
}},"window/title":{style:function(gY){return {alignY:dB,font:dC,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:dG,style:function(gz){return {icon:gz.active?gz.hovered?cs:cX:cA,margin:[4,8,2,0]};
}},"window/restore-button":{alias:dG,style:function(eu){return {icon:eu.active?eu.hovered?be:h:cU,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:dG,style:function(ex){return {icon:ex.active?ex.hovered?N:bT:dv,margin:[4,8,2,0]};
}},"window/close-button":{alias:dG,style:function(gJ){return {icon:gJ.active?gJ.hovered?dc:bN:bV,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(eY){return {padding:[2,6],decorator:X,minHeight:18};
}},"window/statusbar-text":{style:function(hE){return {font:bl};
}},"iframe":{style:function(fo){return {decorator:dE};
}},"resizer":{style:function(fm){return {decorator:cC};
}},"splitpane":{style:function(hI){return {decorator:cS};
}},"splitpane/splitter":{style:function(b){return {width:b.horizontal?3:undefined,height:b.vertical?3:undefined,backgroundColor:eh};
}},"splitpane/splitter/knob":{style:function(fK){return {source:fK.horizontal?cP:bX};
}},"splitpane/slider":{style:function(fc){return {width:fc.horizontal?3:undefined,height:fc.vertical?3:undefined,backgroundColor:eh};
}},"selectbox":{alias:dH,include:dH,style:function(hb){return {padding:[2,8]};
}},"selectbox/atom":dG,"selectbox/popup":dN,"selectbox/list":{alias:dL},"selectbox/arrow":{include:dy,style:function(fq){return {source:ce,paddingLeft:5};
}},"datechooser":{style:function(fg){var fk;
var fi=!!fg.focused;
var fj=!!fg.invalid;
var fh=!!fg.disabled;

if(fi&&fj&&!fh){fk=cd;
}else if(fi&&!fj&&!fh){fk=dP;
}else if(fh){fk=cg;
}else if(!fi&&fj&&!fh){fk=ci;
}else{fk=ch;
}return {padding:2,decorator:fk,backgroundColor:dz};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:dH,alias:dH,style:function(gk){var gl={padding:[2,4],shadow:undefined};

if(gk.lastYear){gl.icon=A;
gl.marginRight=1;
}else if(gk.lastMonth){gl.icon=ee;
}else if(gk.nextYear){gl.icon=o;
gl.marginLeft=1;
}else if(gk.nextMonth){gl.icon=dj;
}return gl;
}},"datechooser/last-year-button-tooltip":dK,"datechooser/last-month-button-tooltip":dK,"datechooser/next-year-button-tooltip":dK,"datechooser/next-month-button-tooltip":dK,"datechooser/last-year-button":dR,"datechooser/last-month-button":dR,"datechooser/next-month-button":dR,"datechooser/next-year-button":dR,"datechooser/month-year-label":{style:function(gs){return {font:dC,textAlign:df,textColor:gs.disabled?cl:undefined};
}},"datechooser/date-pane":{style:function(fH){return {textColor:fH.disabled?cl:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(eG){return {textColor:eG.disabled?cl:eG.weekend?ek:undefined,textAlign:df,paddingTop:2,backgroundColor:bm};
}},"datechooser/week":{style:function(eH){return {textAlign:df,padding:[2,4],backgroundColor:bm};
}},"datechooser/day":{style:function(hq){return {textAlign:df,decorator:hq.disabled?undefined:hq.selected?dM:undefined,textColor:hq.disabled?cl:hq.selected?dA:hq.otherMonth?ek:undefined,font:hq.today?dC:undefined,padding:[2,4]};
}},"combobox":{style:function(fY){var gd;
var gb=!!fY.focused;
var gc=!!fY.invalid;
var ga=!!fY.disabled;

if(gb&&gc&&!ga){gd=cd;
}else if(gb&&!gc&&!ga){gd=dP;
}else if(ga){gd=cg;
}else if(!gb&&gc&&!ga){gd=ci;
}else{gd=ch;
}return {decorator:gd};
}},"combobox/popup":dN,"combobox/list":{alias:dL},"combobox/button":{include:dH,alias:dH,style:function(hc){var hd={icon:ce,padding:2};

if(hc.selected){hd.decorator=ed;
}return hd;
}},"combobox/textfield":{include:dh,style:function(gC){return {decorator:undefined};
}},"menu":{style:function(fA){var fB={decorator:by,shadow:bs,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4};

if(fA.submenu){fB.position=p;
fB.offset=[-2,-3];
}return fB;
}},"menu-separator":{style:function(ev){return {height:0,decorator:cD,margin:[4,2]};
}},"menu-button":{alias:dG,style:function(gm){return {decorator:gm.selected?dM:undefined,textColor:gm.selected?dA:undefined,padding:[4,6]};
}},"menu-button/icon":{include:dy,style:function(ff){return {alignY:dB};
}},"menu-button/label":{include:dk,style:function(hF){return {alignY:dB,padding:1};
}},"menu-button/shortcut":{include:dk,style:function(gV){return {alignY:dB,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(fL){return {source:fL.selected?V:dj,alignY:dB};
}},"menu-checkbox":{alias:cf,include:cf,style:function(hP){return {icon:!hP.checked?undefined:hP.selected?ca:cQ};
}},"menu-radiobutton":{alias:cf,include:cf,style:function(gj){return {icon:!gj.checked?undefined:gj.selected?cM:dT};
}},"menubar":{style:function(he){return {decorator:cr};
}},"menubar-button":{alias:dG,style:function(et){return {decorator:et.pressed||et.hovered?dM:undefined,textColor:et.pressed||et.hovered?dA:undefined,padding:[3,8]};
}},"colorselector":dF,"colorselector/control-bar":dF,"colorselector/control-pane":dF,"colorselector/visual-pane":ck,"colorselector/preset-grid":dF,"colorselector/colorbucket":{style:function(hG){return {decorator:dE,width:16,height:16};
}},"colorselector/preset-field-set":ck,"colorselector/input-field-set":ck,"colorselector/preview-field-set":ck,"colorselector/hex-field-composite":dF,"colorselector/hex-field":dh,"colorselector/rgb-spinner-composite":dF,"colorselector/rgb-spinner-red":dO,"colorselector/rgb-spinner-green":dO,"colorselector/rgb-spinner-blue":dO,"colorselector/hsb-spinner-composite":dF,"colorselector/hsb-spinner-hue":dO,"colorselector/hsb-spinner-saturation":dO,"colorselector/hsb-spinner-brightness":dO,"colorselector/preview-content-old":{style:function(eM){return {decorator:dE,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hJ){return {decorator:dE,backgroundColor:dz,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(en){return {decorator:dE,margin:5};
}},"colorselector/brightness-field":{style:function(gw){return {decorator:dE,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dF,"colorselector/hue-saturation-handle":dF,"colorselector/brightness-pane":dF,"colorselector/brightness-handle":dF,"colorpopup":{alias:dN,include:dN,style:function(eU){return {padding:5,backgroundColor:dm};
}},"colorpopup/field":{style:function(hL){return {decorator:dE,margin:2,width:14,height:14,backgroundColor:dz};
}},"colorpopup/selector-button":dD,"colorpopup/auto-button":dD,"colorpopup/preview-pane":ck,"colorpopup/current-preview":{style:function(gQ){return {height:20,padding:4,marginLeft:4,decorator:dE,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(gi){return {height:20,padding:4,marginRight:4,decorator:dE,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dD,include:dD,style:function(gW){return {icon:E};
}},"colorpopup/colorselector-cancelbutton":{alias:dD,include:dD,style:function(fI){return {icon:cq};
}},"table":{alias:dF,style:function(gg){return {decorator:bn};
}},"table-header":{},"table/statusbar":{style:function(gD){return {decorator:bS,padding:[0,2]};
}},"table/column-button":{alias:dH,style:function(c){return {decorator:bc,padding:3,icon:cm};
}},"table-column-reset-button":{include:cf,alias:cf,style:function(){return {icon:K};
}},"table-scroller":dF,"table-scroller/scrollbar-x":dQ,"table-scroller/scrollbar-y":dQ,"table-scroller/header":{style:function(ft){return {decorator:bJ};
}},"table-scroller/pane":{style:function(fv){return {backgroundColor:bM};
}},"table-scroller/focus-indicator":{style:function(gy){return {decorator:bB};
}},"table-scroller/resize-line":{style:function(hK){return {backgroundColor:ds,width:2};
}},"table-header-cell":{alias:dG,style:function(gU){return {minWidth:13,minHeight:20,padding:gU.hovered?[3,4,2,4]:[3,4],decorator:gU.hovered?J:bx,sortIcon:gU.sorted?(gU.sortedAscending?H:n):undefined};
}},"table-header-cell/label":{style:function(eJ){return {minWidth:0,alignY:dB,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(fy){return {alignY:dB,alignX:u};
}},"table-header-cell/icon":{style:function(gu){return {minWidth:0,alignY:dB,paddingRight:5};
}},"table-editor-textfield":{include:dh,style:function(gH){return {decorator:undefined,padding:[2,2],backgroundColor:dz};
}},"table-editor-selectbox":{include:bu,alias:bu,style:function(go){return {padding:[0,2],backgroundColor:dz};
}},"table-editor-combobox":{include:dd,alias:dd,style:function(fJ){return {decorator:undefined,backgroundColor:dz};
}},"progressive-table-header":{alias:dF,style:function(fM){return {decorator:dS};
}},"progressive-table-header-cell":{alias:dG,style:function(eB){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:cE};
}},"app-header":{style:function(fE){return {font:dC,textColor:dA,padding:[8,12],decorator:bz};
}},"virtual-list":dL,"virtual-list/row-layer":bA,"row-layer":{style:function(hf){return {colorEven:ef,colorOdd:D};
}},"column-layer":dF,"cell":{style:function(gp){return {textColor:gp.selected?dA:x,padding:[3,6],font:bq};
}},"cell-string":cj,"cell-number":{include:cj,style:function(d){return {textAlign:u};
}},"cell-image":cj,"cell-boolean":{include:cj,style:function(hk){return {iconTrue:bE,iconFalse:g};
}},"cell-atom":cj,"cell-date":cj,"cell-html":cj}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
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
(function(){var g="qx.locale.MTranslation";
qx.Mixin.define(g,{members:{tr:function(h,i){var j=qx.locale.Manager;

if(j){return j.tr.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(c,d,e){var f=qx.locale.Manager;

if(f){return f.trc.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(a){var b=qx.locale.Manager;

if(b){return b.marktr.apply(b,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var d="__ff",c="abstract",b="qx.application.AbstractGui";
qx.Class.define(b,{type:c,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__ff:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__ff;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__ff=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this._disposeFields(d);
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var k="execute",j="sinodial",i="spring",h="testDiv",g="Scroll Right",f="Scroll Up",e="Scroll Down",d="Scroll Left",c="Scroll to 40, 100",b="demobrowser.demo.animation.Scroll",a="absolute";
qx.Class.define(b,{extend:qx.application.Standalone,members:{main:function(){arguments.callee.base.call(this);
var q=this.getRoot();
var x=document.getElementById(h);
qx.fx.queue.Manager.getInstance().getDefaultQueue().setLimit(1);
var o=new qx.fx.effect.core.Scroll(x).set({y:100,transition:j});
var p=new qx.fx.effect.core.Scroll(x).set({y:-100,transition:i});
var s=new qx.fx.effect.core.Scroll(x).set({x:-100,transition:i});
var v=new qx.fx.effect.core.Scroll(x).set({x:100,transition:j});
var u=new qx.fx.effect.core.Scroll(x).set({x:40,y:100,mode:a});
var l=new qx.ui.form.Button(f);
var r=new qx.ui.form.Button(e);
var m=new qx.ui.form.Button(d);
var n=new qx.ui.form.Button(g);
var w=new qx.ui.form.Button(c);
l.addListener(k,function(){p.start();
});
r.addListener(k,function(){o.start();
});
m.addListener(k,function(){s.start();
});
n.addListener(k,function(){v.start();
});
w.addListener(k,function(){u.start();
});
var t=new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
q.add(t,{left:10,top:10});
t.add(l);
t.add(r);
t.add(new qx.ui.core.Spacer(10));
t.add(m);
t.add(n);
t.add(new qx.ui.core.Spacer(10));
t.add(w);
}}});
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
(function(){var i="_applyTheme",h="qx.theme",g="qx.theme.manager.Meta",f="qx.theme.Classic",e="Theme",d="singleton";
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
(function(){var j="qx.theme.manager.Font",i="Theme",h="changeTheme",g="_applyTheme",f="singleton";
qx.Class.define(j,{type:f,extend:qx.util.ValueManager,properties:{theme:{check:i,nullable:true,apply:g,event:h}},members:{resolveDynamic:function(d){var e=this._dynamic;
return d instanceof qx.bom.Font?d:e[d];
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.fonts[p]){return s[p]=(new qx.bom.Font).set(r.fonts[p]);
}return p;
},isDynamic:function(a){var c=this._dynamic;

if(a&&(a instanceof qx.bom.Font||c[a]!==undefined)){return true;
}var b=this.getTheme();

if(b!==null&&a&&b.fonts[a]){c[a]=(new qx.bom.Font).set(b.fonts[a]);
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
(function(){var z="",y="underline",x="Boolean",w="px",v='"',u="italic",t="normal",s="bold",r="_applyItalic",q="_applyBold",L="Integer",K="_applyFamily",J="_applyLineHeight",I="Array",H="overline",G="line-through",F="qx.bom.Font",E="Number",D="_applyDecoration",C=" ",A="_applySize",B=",";
qx.Class.define(F,{extend:qx.core.Object,construct:function(S,T){arguments.callee.base.call(this);

if(S!==undefined){this.setSize(S);
}
if(T!==undefined){this.setFamily(T);
}},statics:{fromString:function(h){var n=new qx.bom.Font();
var k=h.split(/\s+/);
var name=[];
var m;

for(var i=0;i<k.length;i++){switch(m=k[i]){case s:n.setBold(true);
break;
case u:n.setItalic(true);
break;
case y:n.setDecoration(y);
break;
default:var j=parseInt(m,10);

if(j==m||qx.lang.String.contains(m,w)){n.setSize(j);
}else{name.push(m);
}break;
}}
if(name.length>0){n.setFamily(name);
}return n;
},fromConfig:function(o){var p=new qx.bom.Font;
p.set(o);
return p;
},__fj:{fontFamily:z,fontSize:z,fontWeight:z,fontStyle:z,textDecoration:z,lineHeight:1.2},getDefaultStyles:function(){return this.__fj;
}},properties:{size:{check:L,nullable:true,apply:A},lineHeight:{check:E,nullable:true,apply:J},family:{check:I,nullable:true,apply:K},bold:{check:x,nullable:true,apply:q},italic:{check:x,nullable:true,apply:r},decoration:{check:[y,G,H],nullable:true,apply:D}},members:{__fk:null,__fl:null,__fm:null,__fn:null,__fo:null,__fp:null,_applySize:function(f,g){this.__fk=f===null?null:f+w;
},_applyLineHeight:function(a,b){this.__fp=a===null?null:a;
},_applyFamily:function(c,d){var e=z;

for(var i=0,l=c.length;i<l;i++){if(c[i].indexOf(C)>0){e+=v+c[i]+v;
}else{e+=c[i];
}
if(i!==l-1){e+=B;
}}this.__fl=e;
},_applyBold:function(Q,R){this.__fm=Q===null?null:Q?s:t;
},_applyItalic:function(M,N){this.__fn=M===null?null:M?u:t;
},_applyDecoration:function(O,P){this.__fo=O===null?null:O;
},getStyles:function(){return {fontFamily:this.__fl,fontSize:this.__fk,fontWeight:this.__fm,fontStyle:this.__fn,textDecoration:this.__fo,lineHeight:this.__fp};
}}});
})();
(function(){var e="icon",d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();
if(f){i.add(e,f.resource);
}else{i.remove(e);
}
if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var v="string",u="Theme",t="_applyTheme",s="__fr",r="qx.theme.manager.Appearance",q=":",p="changeAppearanceTheme",o="__fq",n="changeTheme",m="/",l="singleton";
qx.Class.define(r,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__fq={};
this.__fr={};
},properties:{appearanceTheme:{check:u,nullable:true,event:p},theme:{check:u,nullable:true,event:n,apply:t}},members:{__fs:{},__fq:null,__fr:null,_applyTheme:function(w,x){this.__fr={};
this.__fq={};
},__ft:function(a,b,c){var g=b.appearances;
var j=g[a];

if(!j){var k=m;
var d=[];
var i=a.split(k);
var h;

while(!j&&i.length>0){d.unshift(i.pop());
var e=i.join(k);
j=g[e];

if(j){h=j.alias||j;

if(typeof h===v){var f=h+k+d.join(k);
return this.__ft(f,b,c);
}}}if(c!=null){return this.__ft(c,b);
}return null;
}else if(typeof j===v){return this.__ft(j,b,c);
}else if(j.include&&!j.style){return this.__ft(j.include,b,c);
}return a;
},styleFrom:function(y,z,A,B){if(!A){A=this.getTheme();
}var H=this.__fr;
var C=H[y];

if(!C){C=H[y]=this.__ft(y,A,B);
}var M=A.appearances[C];

if(!M){this.warn("Missing appearance: "+y);
return null;
}if(!M.style){return null;
}var N=C;

if(z){var O=M.$$bits;

if(!O){O=M.$$bits={};
M.$$length=0;
}var F=0;

for(var I in z){if(!z[I]){continue;
}
if(O[I]==null){O[I]=1<<M.$$length++;
}F+=O[I];
}if(F>0){N+=q+F;
}}var G=this.__fq;

if(G[N]!==undefined){return G[N];
}if(!z){z=this.__fs;
}var K;
if(M.include||M.base){var E=M.style(z);
var D;

if(M.include){D=this.styleFrom(M.include,z,A,B);
}K={};
if(M.base){var J=this.styleFrom(C,z,M.base,B);

if(M.include){for(var L in J){if(!D.hasOwnProperty(L)&&!E.hasOwnProperty(L)){K[L]=J[L];
}}}else{for(var L in J){if(!E.hasOwnProperty(L)){K[L]=J[L];
}}}}if(M.include){for(var L in D){if(!E.hasOwnProperty(L)){K[L]=D[L];
}}}for(var L in E){K[L]=E[L];
}}else{K=M.style(z);
}return G[N]=K||null;
}},destruct:function(){this._disposeFields(o,s);
}});
})();
(function(){var z="focusout",y="interval",x="mouseover",w="mouseout",v="mousemove",u="widget",t="qx.ui.tooltip.ToolTip",s="Boolean",r="__fw",q="__fv",n="_applyCurrent",p="qx.ui.tooltip.Manager",o="tooltip-error",m="singleton",l="__fu";
qx.Class.define(p,{type:m,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,x,this.__fE,this,true);
this.__fu=new qx.event.Timer();
this.__fu.addListener(y,this.__fB,this);
this.__fv=new qx.event.Timer();
this.__fv.addListener(y,this.__fC,this);
this.__fw={left:0,top:0};
},properties:{current:{check:t,nullable:true,apply:n},showInvalidTooltips:{check:s,init:true}},members:{__fw:null,__fv:null,__fu:null,__fx:null,__fy:null,__fz:function(){if(!this.__fx){this.__fx=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__fx;
},__fA:function(){if(!this.__fy){this.__fy=new qx.ui.tooltip.ToolTip().set({appearance:o});
this.__fy.syncAppearance();
}return this.__fy;
},_applyCurrent:function(a,b){if(b&&qx.ui.core.Widget.contains(b,a)){return;
}if(b){b.exclude();
this.__fu.stop();
this.__fv.stop();
}var d=qx.event.Registration;
var c=document.body;
if(a){this.__fu.startWith(a.getShowTimeout());
d.addListener(c,w,this.__fF,this,true);
d.addListener(c,z,this.__fG,this,true);
d.addListener(c,v,this.__fD,this,true);
}else{d.removeListener(c,w,this.__fF,this,true);
d.removeListener(c,z,this.__fG,this,true);
d.removeListener(c,v,this.__fD,this,true);
}},__fB:function(e){var F=this.getCurrent();

if(F){this.__fv.startWith(F.getHideTimeout());

if(F.getPlaceMethod()==u){F.placeToWidget(F.getOpener());
}else{F.placeToPoint(this.__fw);
}F.show();
}this.__fu.stop();
},__fC:function(e){var G=this.getCurrent();

if(G){G.exclude();
}this.__fv.stop();
this.resetCurrent();
},__fD:function(e){var k=this.__fw;
k.left=e.getDocumentLeft();
k.top=e.getDocumentTop();
},__fE:function(e){var h=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!h){return;
}var i;
while(h!=null){var i=h.getToolTip();
var j=h.getToolTipText()||null;
var g=h.getToolTipIcon()||null;

if(qx.Class.hasInterface(h.constructor,qx.ui.form.IForm)&&!h.isValid()){var f=h.getInvalidMessage();
}
if(i||j||g||f){break;
}h=h.getLayoutParent();
}
if(!h){return;
}if(f&&h.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var i=this.__fA().set({label:f});
}else if(!i){var i=this.__fz().set({label:j,icon:g});
}this.setCurrent(i);
i.setOpener(h);
},__fF:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__fG:function(e){var A=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!A){return;
}var B=this.getCurrent();
if(B&&B==A.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,x,this.__fE,this,true);
this._disposeObjects(l,q);
this._disposeFields(r);
}});
})();
(function(){var n="interval",m="qx.event.Timer",l="_applyInterval",k="_applyEnabled",j="__dh",i="Boolean",h="__di",g="qx.event.type.Event",f="Integer";
qx.Class.define(m,{extend:qx.core.Object,construct:function(o){arguments.callee.base.call(this);
this.setEnabled(false);

if(o!=null){this.setInterval(o);
}this.__dh=qx.lang.Function.bind(this._oninterval,this);
},events:{"interval":g},statics:{once:function(a,b,c){var d=new qx.event.Timer(c);
d.addListener(n,function(e){d.stop();
a.call(b,e);
d.dispose();
b=null;
},b);
d.start();
return d;
}},properties:{enabled:{init:true,check:i,apply:k},interval:{check:f,init:1000,apply:l}},members:{__di:null,__dh:null,_applyInterval:function(p,q){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(t,u){if(u){window.clearInterval(this.__di);
this.__di=null;
}else if(t){this.__di=window.setInterval(this.__dh,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(s){this.setInterval(s);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(r){this.stop();
this.startWith(r);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.getEnabled()){this.fireEvent(n);
}})},destruct:function(){if(this.__di){window.clearInterval(this.__di);
}this._disposeFields(h,j);
}});
})();
(function(){var e="qx.ui.core.MChildrenHandling";
qx.Mixin.define(e,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(f){return this._indexOf(f);
},add:function(o,p){this._add(o,p);
},addAt:function(l,m,n){this._addAt(l,m,n);
},addBefore:function(h,i,j){this._addBefore(h,i,j);
},addAfter:function(a,b,c){this._addAfter(a,b,c);
},remove:function(k){this._remove(k);
},removeAt:function(g){return this._removeAt(g);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(d){d.getChildren=d._getChildren;
d.hasChildren=d._hasChildren;
d.indexOf=d._indexOf;
d.add=d._add;
d.addAt=d._addAt;
d.addBefore=d._addBefore;
d.addAfter=d._addAfter;
d.remove=d._remove;
d.removeAt=d._removeAt;
d.removeAll=d._removeAll;
}}});
})();
(function(){var b="qx.ui.core.MLayoutHandling";
qx.Mixin.define(b,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(a){a.getLayout=a._getLayout;
a.setLayout=a._setLayout;
}}});
})();
(function(){var I="Integer",H="_applyDimension",G="Boolean",F="_applyStretching",E="_applyMargin",D="shorthand",C="_applyAlign",B="allowShrinkY",A="__fK",z="__fM",bd="__fI",bc="bottom",bb="baseline",ba="marginBottom",Y="qx.ui.core.LayoutItem",X="center",W="marginTop",V="$$subparent",U="allowGrowX",T="middle",P="marginLeft",Q="__fN",N="allowShrinkX",O="$$parent",L="top",M="right",J="marginRight",K="abstract",R="allowGrowY",S="left";
qx.Class.define(Y,{type:K,extend:qx.core.Object,properties:{minWidth:{check:I,nullable:true,apply:H,init:null,themeable:true},width:{check:I,nullable:true,apply:H,init:null,themeable:true},maxWidth:{check:I,nullable:true,apply:H,init:null,themeable:true},minHeight:{check:I,nullable:true,apply:H,init:null,themeable:true},height:{check:I,nullable:true,apply:H,init:null,themeable:true},maxHeight:{check:I,nullable:true,apply:H,init:null,themeable:true},allowGrowX:{check:G,apply:F,init:true,themeable:true},allowShrinkX:{check:G,apply:F,init:true,themeable:true},allowGrowY:{check:G,apply:F,init:true,themeable:true},allowShrinkY:{check:G,apply:F,init:true,themeable:true},allowStretchX:{group:[U,N],mode:D,themeable:true},allowStretchY:{group:[R,B],mode:D,themeable:true},marginTop:{check:I,init:0,apply:E,themeable:true},marginRight:{check:I,init:0,apply:E,themeable:true},marginBottom:{check:I,init:0,apply:E,themeable:true},marginLeft:{check:I,init:0,apply:E,themeable:true},margin:{group:[W,J,ba,P],mode:D,themeable:true},alignX:{check:[S,X,M],nullable:true,apply:C,themeable:true},alignY:{check:[L,T,bc,bb],nullable:true,apply:C,themeable:true}},members:{__fH:null,__fI:null,__fJ:null,__fK:null,__fL:null,__fM:null,__fN:null,getBounds:function(){return this.__fM||this.__fI||null;
},clearSeparators:function(){},renderSeparator:function(e,f){},renderLayout:function(q,top,r,s){var t;
{};
var u=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var u=this._getHeightForWidth(r);
}
if(u!=null&&u!==this.__fH){this.__fH=u;
qx.ui.core.queue.Layout.add(this);
return null;
}var w=this.__fI;

if(!w){w=this.__fI={};
}var v={};

if(q!==w.left||top!==w.top){v.position=true;
w.left=q;
w.top=top;
}
if(r!==w.width||s!==w.height){v.size=true;
w.width=r;
w.height=s;
}if(this.__fJ){v.local=true;
delete this.__fJ;
}
if(this.__fL){v.margin=true;
delete this.__fL;
}return v;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fJ;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fJ=true;
this.__fK=null;
},getSizeHint:function(a){var b=this.__fK;

if(b){return b;
}
if(a===false){return null;
}b=this.__fK=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__fH&&this.getHeight()==null){b.height=this.__fH;
}if(!this.getAllowShrinkX()){b.minWidth=Math.max(b.minWidth,b.width);
}else if(b.minWidth>b.width&&this.getAllowGrowX()){b.width=b.minWidth;
}
if(!this.getAllowShrinkY()){b.minHeight=Math.max(b.minHeight,b.height);
}
if(b.minHeight>b.height&&this.getAllowGrowY()){b.height=b.minHeight;
}if(!this.getAllowGrowX()){b.maxWidth=Math.min(b.maxWidth,b.width);
}
if(b.width>b.maxWidth){b.width=b.maxWidth;
}
if(!this.getAllowGrowY()){b.maxHeight=Math.min(b.maxHeight,b.height);
}
if(b.height>b.maxHeight){b.height=b.maxHeight;
}return b;
},_computeSizeHint:function(){var bi=this.getMinWidth()||0;
var bf=this.getMinHeight()||0;
var bj=this.getWidth()||bi;
var bh=this.getHeight()||bf;
var be=this.getMaxWidth()||Infinity;
var bg=this.getMaxHeight()||Infinity;
return {minWidth:bi,width:bj,maxWidth:be,minHeight:bf,height:bh,maxHeight:bg};
},_hasHeightForWidth:function(){var j=this._getLayout();

if(j){return j.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(c){var d=this._getLayout();

if(d&&d.hasHeightForWidth()){return d.getHeightForWidth(c);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__fL=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__fM;
},setUserBounds:function(n,top,o,p){this.__fM={left:n,top:top,width:o,height:p};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__fM;
qx.ui.core.queue.Layout.add(this);
},__fO:{},setLayoutProperties:function(k){if(k==null){return;
}var l=this.__fN;

if(!l){l=this.__fN={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(k);
}for(var m in k){if(k[m]==null){delete l[m];
}else{l[m]=k[m];
}}},getLayoutProperties:function(){return this.__fN||this.__fO;
},clearLayoutProperties:function(){delete this.__fN;
},updateLayoutProperties:function(g){var h=this._getLayout();

if(h){var i;
{};
h.invalidateChildrenCache();
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
},clone:function(){var bk=arguments.callee.base.call(this);
var bl=this.__fN;

if(bl){bk.__fN=qx.lang.Object.clone(bl);
}return bk;
},serialize:function(){var x=arguments.callee.base.call(this);
var y=this.__fN;

if(y){x.layoutProperties=qx.lang.Object.clone(y);
}return x;
}},destruct:function(){this._disposeFields(O,V,Q,bd,z,A);
}});
})();
(function(){var dC="px",dB="qx.event.type.Mouse",dA="Boolean",dz="qx.event.type.Drag",dy="visible",dx="qx.event.type.Focus",dw="on",dv="Integer",du="excluded",dt="object",cS="qx.event.type.Data",cR="_applyPadding",cQ="qx.event.type.Event",cP="zIndex",cO="hidden",cN="String",cM="tabIndex",cL="contextmenu",cK="absolute",cJ="backgroundColor",dJ="focused",dK="changeVisibility",dH="mshtml",dI="hovered",dF="qx.event.type.KeySequence",dG="qx.client",dD="drag",dE="height",dL="div",dM="disabled",dl="move",dk="dragstart",dn="qx.dynlocale",dm="dragchange",dq="position",dp="dragend",ds="resize",dr="Decorator",dj="width",di="$$widget",bA="opacity",bB="default",bC="Color",bD="top",bE="left",bF="changeToolTipText",bG="beforeContextmenuOpen",bH="Use public 'getChildControl' instead!",bI="_applyNativeContextMenu",bJ="_applyBackgroundColor",dQ="_applyFocusable",dP="changeShadow",dO="qx.event.type.KeyInput",dN="createChildControl",dU="__fT",dT="Font",dS="__fU",dR="_applyShadow",dW="_applyEnabled",dV="_applySelectable",cj="_applyKeepActive",ck="Number",ch="_applyVisibility",ci="repeat",cn="qxDraggable",co="syncAppearance",cl="paddingLeft",cm="_applyDroppable",cf="__gd",cg="#",bR="__gb",bQ="__fP",bT="_applyCursor",bS="_applyDraggable",bN="changeTextColor",bM="changeContextMenu",bP="paddingTop",bO="changeSelectable",bL="hideFocus",bK="none",ct="outline",cu="_applyAppearance",cv="overflowX",cw="_applyOpacity",cp="url(",cq=")",cr="qx.ui.core.Widget",cs="_applyFont",cx="cursor",cy="qxDroppable",cc="changeZIndex",cb="overflowY",ca="__fY",bY="changeEnabled",bX="changeFont",bW="_applyDecorator",bV="_applyZIndex",bU="__fQ",ce="_applyTextColor",cd="qx.ui.menu.Menu",cz="Use public 'hasChildControl' instead!",cA="_applyToolTipText",cB="__fV",cC="true",cD="widget",cE="changeDecorator",cF="_applyTabIndex",cG="changeAppearance",cH="__gi",cI="__gl",cW="shorthand",cV="/",cU="",cT="_applyContextMenu",db="paddingBottom",da="changeNativeContextMenu",cY="qx.ui.tooltip.ToolTip",cX="qxKeepActive",dd="_applyKeepFocus",dc="paddingRight",dg="changeBackgroundColor",dh="changeLocale",de="qxKeepFocus",df="qx/static/blank.gif";
qx.Class.define(cr,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__fP=this._createContainerElement();
this.__fQ=this.__gc();
this.__fP.add(this.__fQ);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:cQ,disappear:cQ,createChildControl:cS,resize:cS,move:cS,syncAppearance:cS,mousemove:dB,mouseover:dB,mouseout:dB,mousedown:dB,mouseup:dB,click:dB,dblclick:dB,contextmenu:dB,beforeContextmenuOpen:dB,mousewheel:dB,keyup:dF,keydown:dF,keypress:dF,keyinput:dO,focus:dx,blur:dx,focusin:dx,focusout:dx,activate:dx,deactivate:dx,capture:cQ,losecapture:cQ,drop:dz,dragleave:dz,dragover:dz,drag:dz,dragstart:dz,dragend:dz,dragchange:dz,droprequest:dz},properties:{paddingTop:{check:dv,init:0,apply:cR,themeable:true},paddingRight:{check:dv,init:0,apply:cR,themeable:true},paddingBottom:{check:dv,init:0,apply:cR,themeable:true},paddingLeft:{check:dv,init:0,apply:cR,themeable:true},padding:{group:[bP,dc,db,cl],mode:cW,themeable:true},zIndex:{nullable:true,init:null,apply:bV,event:cc,check:dv,themeable:true},decorator:{nullable:true,init:null,apply:bW,event:cE,check:dr,themeable:true},shadow:{nullable:true,init:null,apply:dR,event:dP,check:dr,themeable:true},backgroundColor:{nullable:true,check:bC,apply:bJ,event:dg,themeable:true},textColor:{nullable:true,check:bC,apply:ce,event:bN,themeable:true,inheritable:true},font:{nullable:true,apply:cs,check:dT,event:bX,themeable:true,inheritable:true},opacity:{check:ck,apply:cw,themeable:true,nullable:true,init:null},cursor:{check:cN,apply:bT,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:cY,nullable:true},toolTipText:{check:cN,nullable:true,event:bF,apply:cA},toolTipIcon:{check:cN,nullable:true,event:bF},visibility:{check:[dy,cO,du],init:dy,apply:ch,event:dK},enabled:{init:true,check:dA,inheritable:true,apply:dW,event:bY},anonymous:{init:false,check:dA},tabIndex:{check:dv,nullable:true,apply:cF},focusable:{check:dA,init:false,apply:dQ},keepFocus:{check:dA,init:false,apply:dd},keepActive:{check:dA,init:false,apply:cj},draggable:{check:dA,init:false,apply:bS},droppable:{check:dA,init:false,apply:cm},selectable:{check:dA,init:false,event:bO,apply:dV},contextMenu:{check:cd,apply:cT,nullable:true,event:bM},nativeContextMenu:{check:dA,init:false,themeable:true,event:da,apply:bI},appearance:{check:cN,init:cD,apply:cu,event:cG}},statics:{DEBUG:false,getWidgetByElement:function(gt){try{while(gt){var gu=gt.$$widget;
if(gu!=null){return qx.core.ObjectRegistry.fromHashCode(gu);
}gt=gt.parentNode;
}}catch(gK){}return null;
},contains:function(parent,gi){while(gi){if(parent==gi){return true;
}gi=gi.getLayoutParent();
}return false;
},__fR:{},__fS:{}},members:{__fP:null,__fQ:null,__fT:null,__fU:null,__fV:null,__fW:null,__fX:null,__fY:null,_getLayout:function(){return this.__fY;
},_setLayout:function(fO){{};

if(this.__fY){this.__fY.connectToWidget(null);
}
if(fO){fO.connectToWidget(this);
}this.__fY=fO;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}
if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(this.__fP);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(this.__fP);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},__ga:null,renderLayout:function(j,top,k,m){var x=arguments.callee.base.call(this,j,top,k,m);
if(!x){return;
}var o=this.__fP;
var content=this.__fQ;
var u=x.size||this.__ga;
var y=dC;
if(x.position){o.setStyle(bE,j+y);
o.setStyle(bD,top+y);
}if(x.size){o.setStyle(dj,k+y);
o.setStyle(dE,m+y);
}
if(u||x.local||x.margin){var n=this.getInsets();
var innerWidth=k-n.left-n.right;
var innerHeight=m-n.top-n.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}
if(this.__ga){content.setStyle(bE,n.left+y);
content.setStyle(bD,n.top+y);
}
if(u){content.setStyle(dj,innerWidth+y);
content.setStyle(dE,innerHeight+y);
}
if(x.size){var w=this.__fV;

if(w){w.setStyles({width:k+dC,height:m+dC});
}}
if(x.size||this.__ga){var r=qx.theme.manager.Decoration.getInstance();
var z=this.getDecorator();

if(z){var s=this.__fT;
var t=r.resolve(z);
t.resize(s.getDomElement(),k,m);
}}
if(x.size){var v=this.getShadow();

if(v){var s=this.__fU;
var t=r.resolve(v);
var n=t.getInsets();
var q=k+n.left+n.right;
var p=m+n.top+n.bottom;
t.resize(s.getDomElement(),q,p);
}}
if(u||x.local||x.margin){if(this.__fY&&this.hasLayoutChildren()){this.__fY.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(x.position&&this.hasListener(dl)){this.fireDataEvent(dl,this.getBounds());
}
if(x.size&&this.hasListener(ds)){this.fireDataEvent(ds,this.getBounds());
}delete this.__ga;
},__gb:null,clearSeparators:function(){var fa=this.__gb;

if(!fa){return;
}var fb=qx.ui.core.Widget.__fR;
var content=this.__fQ;
var eY,eX;

for(var i=0,l=fa.length;i<l;i++){eX=fa[i];
eY=eX.$$separator;
if(!fb[eY]){fb[eY]=[eX];
}else{fb[eY].push(eX);
}content.remove(eX);
}fa.length=0;
},renderSeparator:function(gL,gM){var gT=qx.ui.core.Widget.__fR;
var gR=qx.theme.manager.Decoration.getInstance();

if(typeof gL==dt){var gS=gL.toHashCode();
var gO=gL;
}else{var gS=gL;
var gO=gR.resolve(gL);
}var gP=gT[gL];

if(gP&&gP.length>0){var gQ=gP.pop();
}else{var gQ=this.__gh(gO);
}this.__fQ.add(gQ);
gO.resize(gQ.getDomElement(),gM.width,gM.height);
var gN=gQ.getDomElement().style;
gN.left=gM.left+dC;
gN.top=gM.top+dC;
if(!this.__gb){this.__gb=[gQ];
}else{this.__gb.push(gQ);
}gQ.$$separator=gS;
},_computeSizeHint:function(){var fn=this.getWidth();
var fm=this.getMinWidth();
var fi=this.getMaxWidth();
var fl=this.getHeight();
var fj=this.getMinHeight();
var fk=this.getMaxHeight();
var fo=this._getContentHint();
var fh=this.getInsets();
var fq=fh.left+fh.right;
var fp=fh.top+fh.bottom;

if(fn==null){fn=fo.width+fq;
}
if(fl==null){fl=fo.height+fp;
}
if(fm==null){fm=fq;

if(fo.minWidth!=null){fm+=fo.minWidth;
}}
if(fj==null){fj=fp;

if(fo.minHeight!=null){fj+=fo.minHeight;
}}
if(fi==null){if(fo.maxWidth==null){fi=Infinity;
}else{fi=fo.maxWidth+fq;
}}
if(fk==null){if(fo.maxHeight==null){fk=Infinity;
}else{fk=fo.maxHeight+fp;
}}return {width:fn,minWidth:fm,maxWidth:fi,height:fl,minHeight:fj,maxHeight:fk};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__fY){this.__fY.invalidateLayoutCache();
}},_getContentHint:function(){var bs=this.__fY;

if(bs){if(this.hasLayoutChildren()){var br;
var bt=bs.getSizeHint();
{};
return bt;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(fS){var fW=this.getInsets();
var ga=fW.left+fW.right;
var fY=fW.top+fW.bottom;
var fX=fS-ga;
var fU=this._getLayout();

if(fU&&fU.hasHeightForWidth()){var fT=fU.getHeightForWidth(fS);
}else{fT=this._getContentHeightForWidth(fX);
}var fV=fT+fY;
return fV;
},_getContentHeightForWidth:function(ba){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var er=this.getPaddingRight();
var es=this.getPaddingBottom();
var ey=this.getPaddingLeft();
var ew=this.getDecorator();

if(ew){var ev=qx.theme.manager.Decoration.getInstance();
var eu=ev.resolve(ew);
var et=eu.getInsets();
{};
top+=et.top;
er+=et.right;
es+=et.bottom;
ey+=et.left;
}return {"top":top,"right":er,"bottom":es,"left":ey};
},getInnerSize:function(){var gc=this.getBounds();

if(!gc){return null;
}var gb=this.getInsets();
return {width:gc.width-gb.left-gb.right,height:gc.height-gb.top-gb.bottom};
},show:function(){this.setVisibility(dy);
},hide:function(){this.setVisibility(cO);
},exclude:function(){this.setVisibility(du);
},isVisible:function(){return this.getVisibility()===dy;
},isHidden:function(){return this.getVisibility()!==dy;
},isExcluded:function(){return this.getVisibility()===du;
},isSeeable:function(){var gf=this.getContainerElement().getDomElement();

if(gf){return gf.offsetWidth>0;
}var ge=this;

do{if(!ge.isVisible()){return false;
}
if(ge.isRootWidget()){return true;
}ge=ge.getLayoutParent();
}while(ge);
return false;
},_createContainerElement:function(){var fP=new qx.html.Element(dL);
{};
fP.setStyle(dq,cK);
fP.setStyle(cP,0);
fP.setAttribute(di,this.toHashCode());
{};
return fP;
},__gc:function(){var eC=this._createContentElement();
{};
eC.setStyle(dq,cK);
eC.setStyle(cP,10);
return eC;
},_createContentElement:function(){var hg=new qx.html.Element(dL);
hg.setStyle(cv,cO);
hg.setStyle(cb,cO);
return hg;
},getContainerElement:function(){return this.__fP;
},getContentElement:function(){return this.__fQ;
},getDecoratorElement:function(){return this.__fT;
},__gd:null,getLayoutChildren:function(){var d=this.__gd;

if(!d){return this.__ge;
}var f;

for(var i=0,l=d.length;i<l;i++){var c=d[i];

if(c.hasUserBounds()||c.isExcluded()){if(f==null){f=d.concat();
}qx.lang.Array.remove(f,c);
}}return f||d;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var gq=this.__fY;

if(gq){gq.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var fB=this.__gd;

if(!fB){return false;
}var fC;

for(var i=0,l=fB.length;i<l;i++){fC=fB[i];

if(!fC.hasUserBounds()&&!fC.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__ge:[],_getChildren:function(){return this.__gd||this.__ge;
},_indexOf:function(eR){var eS=this.__gd;

if(!eS){return -1;
}return eS.indexOf(eR);
},_hasChildren:function(){var eQ=this.__gd;
return eQ!=null&&(!!eQ[0]);
},addChildrenToQueue:function(gj){var gk=this.__gd;

if(!gk){return;
}var gl;

for(var i=0,l=gk.length;i<l;i++){gl=gk[i];
gj[gl.$$hash]=gl;
gl.addChildrenToQueue(gj);
}},_add:function(go,gp){if(go.getLayoutParent()==this){qx.lang.Array.remove(this.__gd,go);
}
if(this.__gd){this.__gd.push(go);
}else{this.__gd=[go];
}this.__gf(go,gp);
},_addAt:function(R,S,T){if(!this.__gd){this.__gd=[];
}if(R.getLayoutParent()==this){qx.lang.Array.remove(this.__gd,R);
}var U=this.__gd[S];

if(U===R){return R.setLayoutProperties(T);
}
if(U){qx.lang.Array.insertBefore(this.__gd,R,U);
}else{this.__gd.push(R);
}this.__gf(R,T);
},_addBefore:function(I,J,K){{};

if(I==J){return;
}
if(!this.__gd){this.__gd=[];
}if(I.getLayoutParent()==this){qx.lang.Array.remove(this.__gd,I);
}qx.lang.Array.insertBefore(this.__gd,I,J);
this.__gf(I,K);
},_addAfter:function(eE,eF,eG){{};

if(eE==eF){return;
}
if(!this.__gd){this.__gd=[];
}if(eE.getLayoutParent()==this){qx.lang.Array.remove(this.__gd,eE);
}qx.lang.Array.insertAfter(this.__gd,eE,eF);
this.__gf(eE,eG);
},_remove:function(C){if(!this.__gd){return;
}qx.lang.Array.remove(this.__gd,C);
this.__gg(C);
},_removeAt:function(fw){if(!this.__gd){throw new Error("This widget has no children!");
}var fx=this.__gd[fw];
qx.lang.Array.removeAt(this.__gd,fw);
this.__gg(fx);
return fx;
},_removeAll:function(){if(!this.__gd){return;
}var gd=this.__gd.concat();
this.__gd.length=0;

for(var i=gd.length-1;i>=0;i--){this.__gg(gd[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__gf:function(fQ,fR){{};
var parent=fQ.getLayoutParent();

if(parent&&parent!=this){parent._remove(fQ);
}fQ.setLayoutParent(this);
if(fR){fQ.setLayoutProperties(fR);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(fQ);
}},__gg:function(bx){{};
bx.setLayoutParent(null);
if(this.__fY){this.__fY.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bx);
}},capture:function(){this.__fP.capture();
},releaseCapture:function(){this.__fP.releaseCapture();
},_applyPadding:function(P,Q,name){this.__ga=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__fV){return;
}var G=this.__fV=new qx.html.Element;
{};
G.setStyles({position:cK,top:0,left:0,zIndex:7});
var H=this.getBounds();

if(H){this.__fV.setStyles({width:H.width+dC,height:H.height+dC});
}if(qx.core.Variant.isSet(dG,dH)){G.setStyles({backgroundImage:cp+qx.util.ResourceManager.getInstance().toUri(df)+cq,backgroundRepeat:ci});
}this.__fP.add(G);
},__gh:function(eV){var eW=new qx.html.Element;
eW.setStyles({position:cK,top:0,left:0});
{};
eW.useMarkup(eV.getMarkup());
return eW;
},_applyDecorator:function(hx,hy){var hG=qx.ui.core.Widget.__fR;
var hD=qx.theme.manager.Decoration.getInstance();
var hz=this.__fP;
var hB=this.__fT;
if(!this.__fV){this._createProtectorElement();
}var hE;

if(hy){if(typeof hy===dt){hE=hy.toHashCode();
}else{hE=hy;
hy=hD.resolve(hy);
}}var hF;

if(hx){if(typeof hx===dt){hF=hx.toHashCode();
{};
}else{hF=hx;
hx=hD.resolve(hx);
}}if(hy){if(!hG[hE]){hG[hE]=[];
}hz.remove(hB);
hG[hE].push(hB);
}if(hx){if(hG[hF]&&hG[hF].length>0){hB=hG[hF].pop();
}else{hB=this.__gh(hx);
hB.setStyle(cP,5);
}var hA=this.getBackgroundColor();
hx.tint(hB.getDomElement(),hA);
hz.add(hB);
this.__fT=hB;
}else{delete this.__fT;
this._applyBackgroundColor(this.getBackgroundColor());
}if(hx&&!hy&&hA){this.getContainerElement().setStyle(cJ,null);
}if(qx.ui.decoration.Util.insetsModified(hy,hx)){this.__ga=true;
qx.ui.core.queue.Layout.add(this);
}else if(hx){var hC=this.getBounds();

if(hC){hD.resolve(hx).resize(hB.getDomElement(),hC.width,hC.height);
this.__fV.setStyles({width:hC.width+dC,height:hC.height+dC});
}}},_applyShadow:function(bf,bg){var bq=qx.ui.core.Widget.__fS;
var bn=qx.theme.manager.Decoration.getInstance();
var bi=this.__fP;
var bo;

if(bg){if(typeof bg===dt){bo=bg.toHashCode();
}else{bo=bg;
bg=bn.resolve(bg);
}}var bp;

if(bf){if(typeof bf===dt){bp=bf.toHashCode();
}else{bp=bf;
bf=bn.resolve(bf);
}}if(bg){if(!bq[bo]){bq[bo]=[];
}bi.remove(this.__fU);
bq[bo].push(this.__fU);
}if(bf){var bk;

if(bq[bp]&&bq[bp].length>0){bk=bq[bp].pop();
}else{bk=this.__gh(bf);
}bi.add(bk);
this.__fU=bk;
var bm=bf.getInsets();
bk.setStyles({left:(-bm.left)+dC,top:(-bm.top)+dC});
var bl=this.getBounds();

if(bl){var bj=bl.width+bm.left+bm.right;
var bh=bl.height+bm.top+bm.bottom;
bf.resize(bk.getDomElement(),bj,bh);
}bf.tint(bk.getDomElement(),null);
}else{delete this.__fU;
}},_applyToolTipText:function(hd,he){if(qx.core.Variant.isSet(dn,dw)){if(this.__fX){return;
}var hf=qx.locale.Manager.getInstance();
this.__fX=hf.addListener(dh,function(){if(hd&&hd.translate){this.setToolTipText(hd.translate());
}},this);
}},_applyTextColor:function(by,bz){},_applyZIndex:function(hb,hc){this.__fP.setStyle(cP,hb==null?0:hb);
},_applyVisibility:function(ez,eA){if(ez===dy){this.__fP.show();
}else{this.__fP.hide();
}var parent=this.$$parent;

if(parent&&(eA==null||ez==null||eA===du||ez===du)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(bu,bv){this.__fP.setStyle(bA,bu==1?null:bu);
if(qx.core.Variant.isSet(dG,dH)){if(!qx.Class.isSubClassOf(this.__fQ.constructor,qx.html.Image)){var bw=(bu==1||bu==null)?null:0.99;
this.__fQ.setStyle(bA,bw);
}}},_applyCursor:function(ec,ed){if(ec==null&&!this.isSelectable()){ec=bB;
}this.__fP.setStyle(cx,ec,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(gv,gw){var gC=this.getDecorator();
var gz=this.getBackgroundColor();
var gy=this.__fP;

if(gC){var gA=this.__fT;

if(gA){var gB=qx.theme.manager.Decoration.getInstance().resolve(gC);
gB.tint(this.__fT.getDomElement(),gz);
}gy.setStyle(cJ,null);
}else{var gx=qx.theme.manager.Color.getInstance().resolve(gz);
gy.setStyle(cJ,gx);
}},_applyFont:function(hl,hm){},__gi:null,$$stateChanges:null,_forwardStates:null,hasState:function(gm){var gn=this.__gi;
return gn&&gn[gm];
},addState:function(fr){var fs=this.__gi;

if(!fs){fs=this.__gi={};
}
if(fs[fr]){return;
}this.__gi[fr]=true;
if(fr===dI){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fv=this.__gl;

if(forward&&forward[fr]&&fv){var ft;

for(var fu in fv){ft=fv[fu];

if(ft instanceof qx.ui.core.Widget){fv[fu].addState(fr);
}}}},removeState:function(em){var en=this.__gi;

if(!en||!en[em]){return;
}delete this.__gi[em];
if(em===dI){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var eq=this.__gl;

if(forward&&forward[em]&&eq){for(var ep in eq){var eo=eq[ep];

if(eo instanceof qx.ui.core.Widget){eo.removeState(em);
}}}},replaceState:function(ee,ef){var eg=this.__gi;

if(!eg){eg=this.__gi={};
}
if(!eg[ef]){eg[ef]=true;
}
if(eg[ee]){delete eg[ee];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var ej=this.__gl;

if(forward&&forward[ef]&&ej){for(var ei in ej){var eh=ej[ei];

if(eh instanceof qx.ui.core.Widget){eh.replaceState(ee,ef);
}}}},__gj:null,__gk:null,syncAppearance:function(){var hr=this.__gi;
var hq=this.__gj;
var hs=qx.theme.manager.Appearance.getInstance();
var ho=qx.core.Property.$$method.setThemed;
var hw=qx.core.Property.$$method.resetThemed;
if(this.__gk){delete this.__gk;
if(hq){var hn=hs.styleFrom(hq,hr,null,this.getAppearance());
if(hn){hq=null;
}}}if(!hq){var hp=this;
var hv=[];

do{hv.push(hp.$$subcontrol||hp.getAppearance());
}while(hp=hp.$$subparent);
hq=this.__gj=hv.reverse().join(cV).replace(/#[0-9]+/g,cU);
}var ht=hs.styleFrom(hq,hr,null,this.getAppearance());

if(ht){var hu;
var hu;

if(hn){for(var hu in hn){if(ht[hu]===undefined){this[hw[hu]]();
}}}{};
{};

for(var hu in ht){ht[hu]===undefined?this[hw[hu]]():this[ho[hu]](ht[hu]);
}}else if(hn){for(var hu in hn){this[hw[hu]]();
}}this.fireDataEvent(co,this.__gi);
},_applyAppearance:function(L,M){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__fW){qx.ui.core.queue.Appearance.add(this);
this.__fW=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__gk=true;
qx.ui.core.queue.Appearance.add(this);
var gW=this.__gl;

if(gW){var gU;

for(var gV in gW){gU=gW[gV];

if(gU instanceof qx.ui.core.Widget){gU.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var D=this;

while(D.getAnonymous()){D=D.getLayoutParent();

if(!D){return null;
}}return D;
},getFocusTarget:function(){var eB=this;

if(!eB.getEnabled()){return null;
}
while(eB.getAnonymous()||!eB.getFocusable()){eB=eB.getLayoutParent();

if(!eB||!eB.getEnabled()){return null;
}}return eB;
},getFocusElement:function(){return this.__fP;
},isTabable:function(){return this.getContainerElement().getDomElement()&&this.isFocusable();
},_applyFocusable:function(V,W){var X=this.getFocusElement();
if(V){var Y=this.getTabIndex();

if(Y==null){Y=1;
}X.setAttribute(cM,Y);
if(qx.core.Variant.isSet(dG,dH)){X.setAttribute(bL,cC);
}else{X.setStyle(ct,bK);
}}else{if(X.isNativelyFocusable()){X.setAttribute(cM,-1);
}else if(W){X.setAttribute(cM,null);
}}},_applyKeepFocus:function(N){var O=this.getFocusElement();
O.setAttribute(de,N?dw:null);
},_applyKeepActive:function(gr){var gs=this.getContainerElement();
gs.setAttribute(cX,gr?dw:null);
},_applyTabIndex:function(eD){if(eD==null){eD=1;
}else if(eD<1||eD>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&eD!=null){this.getFocusElement().setAttribute(cM,eD);
}},_applySelectable:function(fc){this._applyCursor(this.getCursor());
this.__fP.setSelectable(fc);
this.__fQ.setSelectable(fc);
},_applyEnabled:function(g,h){if(g===false){this.addState(dM);
this.removeState(dI);
if(this.isFocusable()){this.removeState(dJ);
this._applyFocusable(false,true);
}}else{this.removeState(dM);
if(this.isFocusable()){this._applyFocusable(true,false);
}}},_applyNativeContextMenu:function(eT,eU,name){},_applyContextMenu:function(gI,gJ){if(gJ){gJ.removeState(cL);

if(gJ.getOpener()==this){gJ.resetOpener();
}
if(!gI){this.removeListener(cL,this._onContextMenuOpen);
gJ.removeListener(dK,this._onBeforeContextMenuOpen,this);
}}
if(gI){gI.setOpener(this);
gI.addState(cL);

if(!gJ){this.addListener(cL,this._onContextMenuOpen);
gI.addListener(dK,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){var ek=this.getContextMenu();
ek.placeToMouse(e);
ek.show();
e.preventDefault();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==dy&&this.hasListener(bG)){this.fireDataEvent(bG,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(fD,fE){qx.ui.core.DragDropCursor.getInstance();
if(fD){this.addListener(dk,this._onDragStart);
this.addListener(dD,this._onDrag);
this.addListener(dp,this._onDragEnd);
this.addListener(dm,this._onDragChange);
}else{this.removeListener(dk,this._onDragStart);
this.removeListener(dD,this._onDrag);
this.removeListener(dp,this._onDragEnd);
this.removeListener(dm,this._onDragChange);
}this.__fP.setAttribute(cn,fD?dw:null);
},_applyDroppable:function(hj,hk){this.__fP.setAttribute(cy,hj?dw:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bB);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var eL=qx.ui.core.DragDropCursor.getInstance();
var eM=e.getCurrentAction();
eM?eL.setAction(eM):eL.resetAction();
},visualizeFocus:function(){this.addState(dJ);
},visualizeBlur:function(){this.removeState(dJ);
},scrollChildIntoView:function(gE,gF,gG,gH){this.scrollChildIntoViewX(gE,gF,gH);
this.scrollChildIntoViewY(gE,gG,gH);
},scrollChildIntoViewX:function(fd,fe,ff){this.__fQ.scrollChildIntoViewX(fd.getContainerElement(),fe,ff);
},scrollChildIntoViewY:function(gX,gY,ha){this.__fQ.scrollChildIntoViewY(gX.getContainerElement(),gY,ha);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.__fP.activate();
},deactivate:function(){this.__fP.deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},_hasChildControl:function(fg){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cz);
return this.hasChildControl(fg);
},hasChildControl:function(gD){if(!this.__gl){return false;
}return !!this.__gl[gD];
},__gl:null,_getCreatedChildControls:function(){return this.__gl;
},_getChildControl:function(bb,bc){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bH);
return this.getChildControl(bb,bc);
},getChildControl:function(fy,fz){if(!this.__gl){if(fz){return null;
}this.__gl={};
}var fA=this.__gl[fy];

if(fA){return fA;
}
if(fz===true){return null;
}return this._createChildControl(fy);
},_showChildControl:function(ea){var eb=this.getChildControl(ea);
eb.show();
return eb;
},_excludeChildControl:function(A){var B=this.getChildControl(A,true);

if(B){B.exclude();
}},_isChildControlVisible:function(bd){var be=this.getChildControl(bd,true);

if(be){return be.isVisible();
}return false;
},_createChildControl:function(fI){if(!this.__gl){this.__gl={};
}else if(this.__gl[fI]){throw new Error("Child control '"+fI+"' already created!");
}var fM=fI.indexOf(cg);

if(fM==-1){var fJ=this._createChildControlImpl(fI);
}else{var fJ=this._createChildControlImpl(fI.substring(0,fM));
}
if(!fJ){throw new Error("Unsupported control: "+fI);
}fJ.$$subcontrol=fI;
fJ.$$subparent=this;
var fK=this.__gi;
var forward=this._forwardStates;

if(fK&&forward&&fJ instanceof qx.ui.core.Widget){for(var fL in fK){if(forward[fL]){fJ.addState(fL);
}}}this.fireDataEvent(dN,fJ);
return this.__gl[fI]=fJ;
},_createChildControlImpl:function(fN){return null;
},_disposeChildControls:function(){var eK=this.__gl;

if(!eK){return;
}var eI=qx.ui.core.Widget;

for(var eJ in eK){var eH=eK[eJ];

if(!eI.contains(this,eH)){eH.destroy();
}else{eH.dispose();
}}delete this.__gl;
},_findTopControl:function(){var fF=this;

while(fF){if(!fF.$$subparent){return fF;
}fF=fF.$$subparent;
}return null;
},getContainerLocation:function(hh){var hi=this.getContainerElement().getDomElement();
return hi?qx.bom.element.Location.get(hi,hh):null;
},getContentLocation:function(dX){var dY=this.getContentElement().getDomElement();
return dY?qx.bom.element.Location.get(dY,dX):null;
},setDomLeft:function(a){var b=this.getContainerElement().getDomElement();

if(b){b.style.left=a+dC;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(E){var F=this.getContainerElement().getDomElement();

if(F){F.style.top=E+dC;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(gg,top){var gh=this.getContainerElement().getDomElement();

if(gh){gh.style.left=gg+dC;
gh.style.top=top+dC;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fG=arguments.callee.base.call(this);

if(this.getChildren){var fH=this.getChildren();

for(var i=0,l=fH.length;i<l;i++){fG.add(fH[i].clone());
}}return fG;
},serialize:function(){var eO=arguments.callee.base.call(this);

if(this.getChildren){var eP=this.getChildren();

if(eP.length>0){eO.children=[];

for(var i=0,l=eP.length;i<l;i++){eO.children.push(eP[i].serialize());
}}}
if(this.getLayout){var eN=this.getLayout();

if(eN){eO.layout=eN.serialize();
}}return eO;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(dn,dw)){if(this.__fX){qx.locale.Manager.getInstance().removeListenerById(this.__fX);
}}this.__fP.setAttribute(di,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}this._disposeArray(cf);
this._disposeArray(bR);
this._disposeFields(cH,cI);
this._disposeObjects(ca,bQ,bU,dU,dS,cB);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(g){arguments.callee.base.call(this);

if(g!=null){this._setLayout(g);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(h){this.fireNonBubblingEvent(b,qx.event.type.Data,[h]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(a,qx.event.type.Data,[i]);
}},defer:function(e,f){qx.ui.core.MChildrenHandling.remap(f);
qx.ui.core.MLayoutHandling.remap(f);
}});
})();
(function(){var x="interval",w="Integer",v="resize",u="Boolean",t="mouse",s="disappear",r="bottom-left",q="widget",p="offsetLeft",o="offsetRight",h="right-top",n="top-right",k="top-left",f="bottom-right",e="right-bottom",j="offsetBottom",i="qx.ui.core.MPlacement",l="left-top",d="left-bottom",m="shorthand",g="offsetTop";
qx.Mixin.define(i,{properties:{position:{check:[k,n,r,f,l,d,h,e],init:r,themeable:true},placeMethod:{check:[q,t],init:t,themeable:true},domMove:{check:u,init:false},smart:{check:u,init:true,themeable:true},offsetLeft:{check:w,init:0,themeable:true},offsetTop:{check:w,init:0,themeable:true},offsetRight:{check:w,init:0,themeable:true},offsetBottom:{check:w,init:0,themeable:true},offset:{group:[g,o,j,p],mode:m,themeable:true}},members:{__gm:null,__gn:null,getLayoutLocation:function(D){var G,F,H,top;
F=D.getBounds();
H=F.left;
top=F.top;
var I=F;
D=D.getLayoutParent();

while(D&&!D.isRootWidget()){F=D.getBounds();
H+=F.left;
top+=F.top;
G=D.getInsets();
H+=G.left;
top+=G.top;
D=D.getLayoutParent();
}if(D.isRootWidget()){var E=D.getContainerLocation();

if(E){H+=E.left;
top+=E.top;
}}return {left:H,top:top,right:H+I.width,bottom:top+I.height};
},moveTo:function(y,top){if(this.getDomMove()){this.setDomPosition(y,top);
}else{this.setLayoutProperties({left:y,top:top});
}},placeToWidget:function(J,K){if(K){this.__gn=qx.lang.Function.bind(this.placeToWidget,this,J,false);
qx.event.Idle.getInstance().addListener(x,this.__gn);
this.addListener(s,function(){if(this.__gn){qx.event.Idle.getInstance().removeListener(x,this.__gn);
this.__gn=null;
}},this);
}var L=J.getContainerLocation()||this.getLayoutLocation(J);
this.__go(L);
},placeToMouse:function(event){var C=event.getDocumentLeft();
var top=event.getDocumentTop();
var B={left:C,top:top,right:C,bottom:top};
this.__go(B);
},placeToElement:function(a,b){var location=qx.bom.element.Location.get(a);
var c={left:location.left,top:location.top,right:location.left+a.offsetWidth,bottom:location.top+a.offsetHeight};
if(b){this.__gn=qx.lang.Function.bind(this.placeToElement,this,a,false);
qx.event.Idle.getInstance().addListener(x,this.__gn);
this.addListener(s,function(){if(this.__gn){qx.event.Idle.getInstance().removeListener(x,this.__gn);
this.__gn=null;
}},this);
}this.__go(c);
},placeToPoint:function(z){var A={left:z.left,top:z.top,right:z.left,bottom:z.top};
this.__go(A);
},__go:function(M){var S=this.getBounds();

if(S==null){if(!this.__gm){this.addListener(v,this.__go);
}this.__gm=M;
return;
}else if(this.__gm){M=this.__gm;
delete this.__gm;
this.removeListener(v,this.__go);
}var N=this.getLayoutParent().getBounds();
var Q=this.getPosition();
var R=this.getSmart();
var O={left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
var P=qx.util.PlaceUtil.compute(S,N,M,Q,R,O);
this.moveTo(P.left,P.top);
}}});
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
(function(){var j="atom",i="Integer",h="String",g="_applyRich",f="qx.ui.tooltip.ToolTip",e="_applyIcon",d="tooltip",c="qx.ui.core.Widget",b="Boolean",a="_applyLabel";
qx.Class.define(f,{extend:qx.ui.popup.Popup,construct:function(s,t){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(j);
if(s!=null){this.setLabel(s);
}
if(t!=null){this.setIcon(t);
}},properties:{appearance:{refine:true,init:d},showTimeout:{check:i,init:700,themeable:true},hideTimeout:{check:i,init:4000,themeable:true},label:{check:h,nullable:true,apply:a},icon:{check:h,nullable:true,apply:e,themeable:true},rich:{check:b,init:false,apply:g},opener:{check:c,nullable:true}},members:{_createChildControlImpl:function(q){var r;

switch(q){case j:r=new qx.ui.basic.Atom;
this._add(r);
break;
}return r||arguments.callee.base.call(this,q);
},_applyIcon:function(n,o){var p=this.getChildControl(j);
n==null?p.resetIcon:p.setIcon(n);
},_applyLabel:function(k,l){var m=this.getChildControl(j);
k==null?m.resetLabel():m.setLabel(k);
},_applyRich:function(u,v){var w=this.getChildControl(j);
w.setRich(u);
}}});
})();
(function(){var k="qx.ui.core.queue.Layout",j="layout";
qx.Class.define(k,{statics:{__gp:{},remove:function(m){delete this.__gp[m.$$hash];
},add:function(l){this.__gp[l.$$hash]=l;
qx.ui.core.queue.Manager.scheduleFlush(j);
},flush:function(){var e=this.__gs();
for(var i=e.length-1;i>=0;i--){var f=e[i];
if(f.hasValidLayout()){continue;
}if(f.isRootWidget()&&!f.hasUserBounds()){var h=f.getSizeHint();
f.renderLayout(0,0,h.width,h.height);
}else{var g=f.getBounds();
f.renderLayout(g.left,g.top,g.width,g.height);
}}},getNestingLevel:function(a){var b=this.__gr;
var d=0;
var parent=a;
while(true){if(b[parent.$$hash]!=null){d+=b[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
d+=1;
}var c=d;

while(a&&a!==parent){b[a.$$hash]=c--;
a=a.$$parent;
}return d;
},__gq:function(){var A=qx.ui.core.queue.Visibility;
this.__gr={};
var z=[];
var y=this.__gp;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__gs:function(){var q=[];
var s=this.__gq();

for(var p=s.length-1;p>=0;p--){if(!s[p]){continue;
}
for(var o in s[p]){var n=s[p][o];
if(p==0||n.isRootWidget()||n.hasUserBounds()){q.push(n);
n.invalidateLayoutCache();
continue;
}var u=n.getSizeHint(false);

if(u){n.invalidateLayoutCache();
var r=n.getSizeHint();
var t=(!n.getBounds()||u.minWidth!==r.minWidth||u.width!==r.width||u.maxWidth!==r.maxWidth||u.minHeight!==r.minHeight||u.height!==r.height||u.maxHeight!==r.maxHeight);
}else{t=true;
}
if(t){var parent=n.getLayoutParent();

if(!s[p-1]){s[p-1]={};
}s[p-1][parent.$$hash]=parent;
}else{q.push(n);
}}}return q;
}}});
})();
(function(){var c="qx.event.handler.UserAction",b="__dj",a="__dk";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(l){arguments.callee.base.call(this);
this.__dj=l;
this.__dk=l.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dj:null,__dk:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(d,e,f){}},destruct:function(){this._disposeFields(b,a);
},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var f="__gu",e="__gt",d="qx.util.DeferredCallManager",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){this.__gt={};
this.__gu=qx.lang.Function.bind(this.__gy,this);
this.__gv=false;
},members:{__gw:null,__gx:null,__gt:null,__gv:null,__gu:null,schedule:function(a){if(this.__gw==null){this.__gw=window.setTimeout(this.__gu,0);
}var b=a.toHashCode();
if(this.__gx&&this.__gx[b]){return;
}this.__gt[b]=a;
this.__gv=true;
},cancel:function(g){var h=g.toHashCode();
if(this.__gx&&this.__gx[h]){this.__gx[h]=null;
return;
}delete this.__gt[h];
if(qx.lang.Object.isEmpty(this.__gt)&&this.__gw!=null){window.clearTimeout(this.__gw);
this.__gw=null;
}},__gy:qx.event.GlobalError.observeMethod(function(){this.__gw=null;
while(this.__gv){this.__gx=qx.lang.Object.clone(this.__gt);
this.__gt={};
this.__gv=false;

for(var j in this.__gx){var i=this.__gx[j];

if(i){this.__gx[j]=null;
i.call();
}}}this.__gx=null;
})},destruct:function(){if(this.__gw!=null){window.clearTimeout(this.__gw);
}this._disposeFields(f,e);
}});
})();
(function(){var f="qx.util.DeferredCall",e="__gA",d="__gz",c="__gB";
qx.Class.define(f,{extend:qx.core.Object,construct:function(a,b){arguments.callee.base.call(this);
this.__gz=a;
this.__gA=b||null;
this.__gB=qx.util.DeferredCallManager.getInstance();
},members:{__gz:null,__gA:null,__gB:null,cancel:function(){this.__gB.cancel(this);
},schedule:function(){this.__gB.schedule(this);
},call:function(){this.__gA?this.__gz.apply(this.__gA):this.__gz();
}},destruct:function(g,h){this.cancel();
this._disposeFields(e,d,c);
}});
})();
(function(){var ct="element",cs="qx.client",cr="div",cq="",cp="mshtml",co="none",cn="__gS",cm="qx.html.Element",cl="Use public 'clearTextSelection' instead!",ck="__gU",cV="|capture|",cU="focus",cT="blur",cS="__gN",cR="deactivate",cQ="__gY",cP="__hb",cO="userSelect",cN="Use public 'setTextSelection' instead!",cM="capture",cA="releaseCapture",cB="__gX",cy="__gW",cz="__gT",cw="__gR",cx="qxSelectable",cu="__gV",cv="tabIndex",cC="off",cD="Use public 'getTextSelectionLength' instead!",cG="on",cF="activate",cI="__gO",cH="normal",cK="webkit",cJ="|bubble|",cE="Use public 'getTextSelection' instead!",cL="__gJ";
qx.Class.define(cm,{extend:qx.core.Object,construct:function(bk){arguments.callee.base.call(this);
this.__gC=bk||cr;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__gD:{},_scheduleFlush:function(by){qx.html.Element.__hj.schedule();
},_mshtmlVisibilitySort:qx.core.Variant.select(cs,{"mshtml":function(a,b){var bX=a.__gJ;
var bW=b.__gJ;

if(bX.contains(bW)){return 1;
}
if(bW.contains(bX)){return -1;
}return 0;
},"default":null}),flush:function(){var v;
{};
var o=this.__gE();
var n=o.getFocus();

if(n&&this.__gI(n)){o.blur(n);
}var F=o.getActive();

if(F&&this.__gI(F)){qx.bom.Element.deactivate(F);
}var D=this.__gG();

if(D&&this.__gI(D)){qx.bom.Element.releaseCapture(D);
}var w=[];
var A=this._modified;

for(var u in A){v=A[u];
if(v.__hd()){if(v.__gJ&&qx.dom.Hierarchy.isRendered(v.__gJ)){w.push(v);
}else{{};
v.__hc();
}delete A[u];
}}
for(var i=0,l=w.length;i<l;i++){v=w[i];
{};
v.__hc();
}var s=this._visibility;
if(qx.core.Variant.isSet(cs,cp)){var z=[];

for(var u in s){z.push(s[u]);
}if(z.length>1){z.sort(this._mshtmlVisibilitySort);
s=this._visibility={};

for(var i=0;i<z.length;i++){v=z[i];
s[v.$$hash]=v;
}}}
for(var u in s){v=s[u];
{};
v.__gJ.style.display=v.__gM?cq:co;
delete s[u];
}var scroll=this._scroll;

for(var u in scroll){v=scroll[u];
var G=v.__gJ;

if(G&&G.offsetWidth){var q=true;
if(v.__gP!=null){v.__gJ.scrollLeft=v.__gP;
delete v.__gP;
}if(v.__gQ!=null){v.__gJ.scrollTop=v.__gQ;
delete v.__gQ;
}var C=v.__gN;

if(C!=null){var t=C.element.getDomElement();

if(t&&t.offsetWidth){qx.bom.element.Scroll.intoViewX(t,G,C.align);
delete v.__gN;
}else{q=false;
}}var r=v.__gO;

if(r!=null){var t=r.element.getDomElement();

if(t&&t.offsetWidth){qx.bom.element.Scroll.intoViewY(t,G,r.align);
delete v.__gO;
}else{q=false;
}}if(q){delete scroll[u];
}}}var p={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var E=this._actions[i];
var B=E.element.__gJ;

if(!B||!p[E.type]&&!E.element.__hd()){continue;
}qx.bom.Element[E.type](B);
}this._actions=[];
for(var u in this.__gD){var m=this.__gD[u];
var G=m.element.__gJ;

if(G){qx.bom.Selection.set(G,m.start,m.end);
delete this.__gD[u];
}}qx.event.handler.Appear.refresh();
},__gE:function(){if(!this.__gF){var dU=qx.event.Registration.getManager(window);
this.__gF=dU.getHandler(qx.event.handler.Focus);
}return this.__gF;
},__gG:function(){if(!this.__gH){var ch=qx.event.Registration.getManager(window);
this.__gH=ch.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__gH.getCaptureElement();
},__gI:function(U){var V=qx.core.ObjectRegistry.fromHashCode(U.$$element);
return V&&!V.__hd();
}},members:{__gC:null,__gJ:null,__gK:false,__gL:true,__gM:true,__gN:null,__gO:null,__gP:null,__gQ:null,__gR:null,__gS:null,__gT:null,__gU:null,__gV:null,__gW:null,__gX:null,__gY:null,__ha:null,__hb:null,_scheduleChildrenUpdate:function(){if(this.__ha){return;
}this.__ha=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ct);
},_createDomElement:function(){return qx.bom.Element.create(this.__gC);
},__hc:function(){{};
var dN=this.__gY;

if(dN){var length=dN.length;
var dO;

for(var i=0;i<length;i++){dO=dN[i];

if(dO.__gM&&dO.__gL&&!dO.__gJ){dO.__hc();
}}}
if(!this.__gJ){this.__gJ=this._createDomElement();
this.__gJ.$$element=this.$$hash;
this._copyData(false);

if(dN&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__ha){this._syncChildren();
}}delete this.__ha;
},_insertChildren:function(){var dv=this.__gY;
var length=dv.length;
var dx;

if(length>2){var dw=document.createDocumentFragment();

for(var i=0;i<length;i++){dx=dv[i];

if(dx.__gJ&&dx.__gL){dw.appendChild(dx.__gJ);
}}this.__gJ.appendChild(dw);
}else{var dw=this.__gJ;

for(var i=0;i<length;i++){dx=dv[i];

if(dx.__gJ&&dx.__gL){dw.appendChild(dx.__gJ);
}}}},_syncChildren:function(){var dH;
var dM=qx.core.ObjectRegistry;
var dD=this.__gY;
var dK=dD.length;
var dE;
var dI;
var dG=this.__gJ;
var dJ=dG.childNodes;
var dF=0;
var dL;
{};
for(var i=dJ.length-1;i>=0;i--){dL=dJ[i];
dI=dM.fromHashCode(dL.$$element);

if(!dI||!dI.__gL||dI.__hb!==this){dG.removeChild(dL);
{};
}}for(var i=0;i<dK;i++){dE=dD[i];
if(dE.__gL){dI=dE.__gJ;
dL=dJ[dF];

if(!dI){continue;
}if(dI!=dL){if(dL){dG.insertBefore(dI,dL);
}else{dG.appendChild(dI);
}{};
}dF++;
}}{};
},_copyData:function(bF){var bJ=this.__gJ;
var bI=this.__gV;

if(bI){var bG=qx.bom.element.Attribute;

for(var bK in bI){bG.set(bJ,bK,bI[bK]);
}}var bI=this.__gU;

if(bI){var bH=qx.bom.element.Style;

if(bF){for(var bK in bI){bH.set(bJ,bK,bI[bK]);
}}else{bH.setCss(bJ,bH.compile(bI));
}}var bI=this.__gW;

if(bI){for(var bK in bI){this._applyProperty(bK,bI[bK]);
}}var bI=this.__gX;

if(bI){qx.event.Registration.getManager(bJ).importListeners(bJ,bI);
delete this.__gX;
}},_syncData:function(){var dc=this.__gJ;
var da=qx.bom.element.Attribute;
var cX=qx.bom.element.Style;
var cY=this.__gS;

if(cY){var df=this.__gV;

if(df){var dd;

for(var de in cY){dd=df[de];

if(dd!==undefined){da.set(dc,de,dd);
}else{da.reset(dc,de);
}}}this.__gS=null;
}var cY=this.__gR;

if(cY){var df=this.__gU;

if(df){var dd;

for(var de in cY){dd=df[de];

if(dd!==undefined){cX.set(dc,de,dd);
}else{cX.reset(dc,de);
}}}this.__gR=null;
}var cY=this.__gT;

if(cY){var df=this.__gW;

if(df){var dd;

for(var de in cY){this._applyProperty(de,df[de]);
}}this.__gT=null;
}},__hd:function(){var cd=this;
while(cd){if(cd.__gK){return true;
}
if(!cd.__gL||!cd.__gM){return false;
}cd=cd.__hb;
}return false;
},__he:function(bx){if(bx.__hb===this){throw new Error("Child is already in: "+bx);
}
if(bx.__gK){throw new Error("Root elements could not be inserted into other ones.");
}if(bx.__hb){bx.__hb.remove(bx);
}bx.__hb=this;
if(!this.__gY){this.__gY=[];
}if(this.__gJ){this._scheduleChildrenUpdate();
}},__hf:function(bc){if(bc.__hb!==this){throw new Error("Has no child: "+bc);
}if(this.__gJ){this._scheduleChildrenUpdate();
}delete bc.__hb;
},__hg:function(bg){if(bg.__hb!==this){throw new Error("Has no child: "+bg);
}if(this.__gJ){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__gY||null;
},getChild:function(S){var T=this.__gY;
return T&&T[S]||null;
},hasChildren:function(){var du=this.__gY;
return du&&du[0]!==undefined;
},indexOf:function(bv){var bw=this.__gY;
return bw?bw.indexOf(bv):-1;
},hasChild:function(dP){var dQ=this.__gY;
return dQ&&dQ.indexOf(dP)!==-1;
},add:function(R){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__he(arguments[i]);
}this.__gY.push.apply(this.__gY,arguments);
}else{this.__he(R);
this.__gY.push(R);
}return this;
},addAt:function(P,Q){this.__he(P);
qx.lang.Array.insertAt(this.__gY,P,Q);
return this;
},remove:function(dn){var dp=this.__gY;

if(!dp){return;
}
if(arguments[1]){var dq;

for(var i=0,l=arguments.length;i<l;i++){dq=arguments[i];
this.__hf(dq);
qx.lang.Array.remove(dp,dq);
}}else{this.__hf(dn);
qx.lang.Array.remove(dp,dn);
}return this;
},removeAt:function(e){var f=this.__gY;

if(!f){throw new Error("Has no children!");
}var g=f[e];

if(!g){throw new Error("Has no child at this position!");
}this.__hf(g);
qx.lang.Array.removeAt(this.__gY,e);
return this;
},removeAll:function(){var k=this.__gY;

if(k){for(var i=0,l=k.length;i<l;i++){this.__hf(k[i]);
}k.length=0;
}return this;
},getParent:function(){return this.__hb||null;
},insertInto:function(parent,I){parent.__he(this);

if(I==null){parent.__gY.push(this);
}else{qx.lang.Array.insertAt(this.__gY,this,I);
}return this;
},insertBefore:function(cW){var parent=cW.__hb;
parent.__he(this);
qx.lang.Array.insertBefore(parent.__gY,this,cW);
return this;
},insertAfter:function(dW){var parent=dW.__hb;
parent.__he(this);
qx.lang.Array.insertAfter(parent.__gY,this,dW);
return this;
},moveTo:function(h){var parent=this.__hb;
parent.__hg(this);
var j=parent.__gY.indexOf(this);

if(j===h){throw new Error("Could not move to same index!");
}else if(j<h){h--;
}qx.lang.Array.removeAt(parent.__gY,j);
qx.lang.Array.insertAt(parent.__gY,this,h);
return this;
},moveBefore:function(bV){var parent=this.__hb;
return this.moveTo(parent.__gY.indexOf(bV));
},moveAfter:function(bR){var parent=this.__hb;
return this.moveTo(parent.__gY.indexOf(bR)+1);
},free:function(){var parent=this.__hb;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__gY){return;
}parent.__hf(this);
qx.lang.Array.remove(parent.__gY,this);
return this;
},getDomElement:function(){return this.__gJ||null;
},getNodeName:function(){return this.__gC;
},setNodeName:function(name){this.__gC=name;
},setRoot:function(bQ){this.__gK=bQ;
},useMarkup:function(ba){if(this.__gJ){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(cs,cp)){var bb=document.createElement(cr);
}else{var bb=qx.html.Element.__hh;

if(!bb){bb=qx.html.Element.__hh=document.createElement(cr);
}}bb.innerHTML=ba;
this.__gJ=bb.firstChild;
this.__gJ.$$element=this.$$hash;
this._copyData(true);
return this.__gJ;
},useElement:function(dm){if(this.__gJ){throw new Error("Could not overwrite existing element!");
}this.__gJ=dm;
this.__gJ.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var bU=this.getAttribute(cv);

if(bU>=1){return true;
}var bT=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bU>=0&&bT[this.__gC]){return true;
}return false;
},setSelectable:function(dV){this.setAttribute(cx,dV?cG:cC);
if(qx.core.Variant.isSet(cs,cK)){this.setStyle(cO,dV?cH:co);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__gC];
},include:function(){if(this.__gL){return;
}delete this.__gL;

if(this.__hb){this.__hb._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__gL){return;
}this.__gL=false;

if(this.__hb){this.__hb._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__gL===true;
},show:function(){if(this.__gM){return;
}
if(this.__gJ){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(ct);
}if(this.__hb){this.__hb._scheduleChildrenUpdate();
}delete this.__gM;
},hide:function(){if(!this.__gM){return;
}
if(this.__gJ){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(ct);
}this.__gM=false;
},isVisible:function(){return this.__gM===true;
},scrollChildIntoViewX:function(dy,dz,dA){var dB=this.__gJ;
var dC=dy.getDomElement();

if(dA!==false&&dB&&dB.offsetWidth&&dC&&dC.offsetWidth){qx.bom.element.Scroll.intoViewX(dC,dB,dz);
}else{this.__gN={element:dy,align:dz};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ct);
}delete this.__gP;
},scrollChildIntoViewY:function(bA,bB,bC){var bD=this.__gJ;
var bE=bA.getDomElement();

if(bC!==false&&bD&&bD.offsetWidth&&bE&&bE.offsetWidth){qx.bom.element.Scroll.intoViewY(bE,bD,bB);
}else{this.__gO={element:bA,align:bB};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ct);
}delete this.__gQ;
},scrollToX:function(x,dX){var dY=this.__gJ;

if(dX!==true&&dY&&dY.offsetWidth){dY.scrollLeft=x;
}else{this.__gP=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ct);
}delete this.__gN;
},getScrollX:function(){var bn=this.__gJ;

if(bn){return bn.scrollLeft;
}return this.__gP||0;
},scrollToY:function(y,bs){var bt=this.__gJ;

if(bs!==true&&bt&&bt.offsetWidth){bt.scrollTop=y;
}else{this.__gQ=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ct);
}delete this.__gO;
},getScrollY:function(){var H=this.__gJ;

if(H){return H.scrollTop;
}return this.__gQ||0;
},getSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cE);
return this.getTextSelection();
},getSelectionLength:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cD);
return this.getTextSelectionLength();
},setSelection:function(J,K){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cN);
this.setTextSelection(J,K);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cl);
this.clearTextSelection();
},getTextSelection:function(){var bS=this.__gJ;

if(bS){return qx.bom.Selection.get(bS);
}return null;
},getTextSelectionLength:function(){var W=this.__gJ;

if(W){return qx.bom.Selection.getLength(W);
}return null;
},setTextSelection:function(bY,ca){var cb=this.__gJ;

if(cb){qx.bom.Selection.set(cb,bY,ca);
return;
}qx.html.Element.__gD[this.toHashCode()]={element:this,start:bY,end:ca};
qx.html.Element._scheduleFlush(ct);
},clearTextSelection:function(){var bo=this.__gJ;

if(bo){qx.bom.Selection.clear(bo);
}delete qx.html.Element.__gD[this.toHashCode()];
},__hi:function(ci){var cj=qx.html.Element._actions;
cj.push({type:ci,element:this});
qx.html.Element._scheduleFlush(ct);
},focus:function(){this.__hi(cU);
},blur:function(){this.__hi(cT);
},activate:function(){this.__hi(cF);
},deactivate:function(){this.__hi(cR);
},capture:function(){this.__hi(cM);
},releaseCapture:function(){this.__hi(cA);
},setStyle:function(ce,cf,cg){if(!this.__gU){this.__gU={};
}
if(this.__gU[ce]==cf){return;
}
if(cf==null){delete this.__gU[ce];
}else{this.__gU[ce]=cf;
}if(this.__gJ){if(cg){qx.bom.element.Style.set(this.__gJ,ce,cf);
return this;
}if(!this.__gR){this.__gR={};
}this.__gR[ce]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ct);
}return this;
},setStyles:function(bp,bq){for(var br in bp){this.setStyle(br,bp[br],bq);
}return this;
},removeStyle:function(c,d){this.setStyle(c,null,d);
},getStyle:function(cc){return this.__gU?this.__gU[cc]:null;
},getAllStyles:function(){return this.__gU||null;
},setAttribute:function(L,M,N){if(!this.__gV){this.__gV={};
}
if(this.__gV[L]==M){return;
}
if(M==null){delete this.__gV[L];
}else{this.__gV[L]=M;
}if(this.__gJ){if(N){qx.bom.element.Attribute.set(this.__gJ,L,M);
return this;
}if(!this.__gS){this.__gS={};
}this.__gS[L]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ct);
}return this;
},setAttributes:function(dr,ds){for(var dt in dr){this.setAttribute(dt,dr[dt],ds);
}return this;
},removeAttribute:function(bi,bj){this.setAttribute(bi,null,bj);
},getAttribute:function(bu){return this.__gV?this.__gV[bu]:null;
},_applyProperty:function(name,bm){},_setProperty:function(dR,dS,dT){if(!this.__gW){this.__gW={};
}
if(this.__gW[dR]==dS){return;
}
if(dS==null){delete this.__gW[dR];
}else{this.__gW[dR]=dS;
}if(this.__gJ){if(dT){this._applyProperty(dR,dS);
return this;
}if(!this.__gT){this.__gT={};
}this.__gT[dR]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ct);
}return this;
},_removeProperty:function(X,Y){this._setProperty(X,null,Y);
},_getProperty:function(bd){var be=this.__gW;

if(!be){return null;
}var bf=be[bd];
return bf==null?null:bf;
},addListener:function(dg,dh,self,di){var dj;

if(this.$$disposed){return null;
}{};

if(this.__gJ){return qx.event.Registration.addListener(this.__gJ,dg,dh,self,di);
}
if(!this.__gX){this.__gX={};
}
if(di==null){di=false;
}var dk=qx.event.Manager.getNextUniqueId();
var dl=dg+(di?cV:cJ)+dk;
this.__gX[dl]={type:dg,listener:dh,self:self,capture:di,unique:dk};
return dl;
},removeListener:function(ea,eb,self,ec){var ed;

if(this.$$disposed){return null;
}{};

if(this.__gJ){qx.event.Registration.removeListener(this.__gJ,ea,eb,self,ec);
}else{var ef=this.__gX;
var ee;

if(ec==null){ec=false;
}
for(var eg in ef){ee=ef[eg];
if(ee.listener===eb&&ee.self===self&&ee.capture===ec&&ee.type===ea){delete ef[eg];
break;
}}}return this;
},removeListenerById:function(bh){if(this.$$disposed){return null;
}
if(this.__gJ){qx.event.Registration.removeListenerById(this.__gJ,bh);
}else{delete this.__gX[bh];
}return this;
},hasListener:function(bL,bM){if(this.$$disposed){return false;
}
if(this.__gJ){return qx.event.Registration.hasListener(this.__gJ,bL,bM);
}var bO=this.__gX;
var bN;

if(bM==null){bM=false;
}
for(var bP in bO){bN=bO[bP];
if(bN.capture===bM&&bN.type===bL){return true;
}}return false;
}},defer:function(O){O.__hj=new qx.util.DeferredCall(O.flush,O);
},destruct:function(){var bz=this.__gJ;

if(bz){qx.event.Registration.getManager(bz).removeAllListeners(bz);
bz.$$element=cq;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__hb;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cQ);
this._disposeFields(cu,ck,cB,cy,cn,cw,cz,cL,cP,cS,cI);
}});
})();
(function(){var c="qx.ui.core.queue.Manager",b="useraction";
qx.Class.define(c,{statics:{__hk:false,__hl:{},scheduleFlush:function(d){var self=qx.ui.core.queue.Manager;
self.__hl[d]=true;

if(!self.__hk){self.__hn.schedule();
self.__hk=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__hm){return;
}self.__hm=true;
self.__hn.cancel();
var a=self.__hl;

while(a.visibility||a.widget||a.appearance||a.layout||a.element){if(a.widget){delete a.widget;
qx.ui.core.queue.Widget.flush();
}
if(a.visibility){delete a.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(a.appearance){delete a.appearance;
qx.ui.core.queue.Appearance.flush();
}if(a.widget||a.visibility||a.appearance){continue;
}
if(a.layout){delete a.layout;
qx.ui.core.queue.Layout.flush();
}if(a.widget||a.visibility||a.appearance||a.layout){continue;
}
if(a.element){delete a.element;
qx.html.Element.flush();
}}qx.ui.core.queue.Manager.__hk=false;

if(a.dispose){delete a.dispose;
qx.ui.core.queue.Dispose.flush();
}self.__hm=false;
}},defer:function(e){e.__hn=new qx.util.DeferredCall(e.flush);
qx.html.Element._scheduleFlush=e.scheduleFlush;
qx.event.Registration.addListener(window,b,e.flush);
}});
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
(function(){var bb="qx.client",ba="mouseup",Y="click",X="mousedown",W="contextmenu",V="dblclick",U="mousewheel",T="mouseover",S="mouseout",R="DOMMouseScroll",K="on",Q="mshtml|webkit|opera",N="mousemove",J="useraction",I="__dw",M="__dx",L="gecko|webkit",O="qx.event.handler.Mouse",H="__dC",P="__dv";
qx.Class.define(O,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(v){arguments.callee.base.call(this);
this.__dv=v;
this.__dw=v.getWindow();
this.__dx=this.__dw.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dy:null,__dz:null,__dA:null,__dB:null,__dC:null,__dv:null,__dw:null,__dx:null,canHandleEvent:function(i,j){},registerEvent:qx.core.Variant.select(bb,{"webkit":function(k,l,m){if(qx.bom.client.System.IPHONE){var n=qx.lang.Function.returnNull;
k[K+l]=n;
k[K+l]=undefined;
}},"default":qx.lang.Function.returnNull}),unregisterEvent:function(w,x,y){},__dD:function(D,E,F){if(!F){F=D.target||D.srcElement;
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__dw,J,qx.event.type.Data,[E||D.type]);
},_initButtonObserver:function(){this.__dy=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dx,X,this.__dy);
Event.addNativeListener(this.__dx,ba,this.__dy);
Event.addNativeListener(this.__dx,Y,this.__dy);
Event.addNativeListener(this.__dx,V,this.__dy);
Event.addNativeListener(this.__dx,W,this.__dy);
},_initMoveObserver:function(){this.__dz=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dx,N,this.__dz);
Event.addNativeListener(this.__dx,T,this.__dz);
Event.addNativeListener(this.__dx,S,this.__dz);
},_initWheelObserver:function(){this.__dA=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var e=qx.core.Variant.isSet(bb,Q)?U:R;
Event.addNativeListener(this.__dx,e,this.__dA);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dx,X,this.__dy);
Event.removeNativeListener(this.__dx,ba,this.__dy);
Event.removeNativeListener(this.__dx,Y,this.__dy);
Event.removeNativeListener(this.__dx,V,this.__dy);
Event.removeNativeListener(this.__dx,W,this.__dy);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dx,N,this.__dz);
Event.removeNativeListener(this.__dx,T,this.__dz);
Event.removeNativeListener(this.__dx,S,this.__dz);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var G=qx.core.Variant.isSet(bb,Q)?U:R;
Event.removeNativeListener(this.__dx,G,this.__dA);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(C){this.__dD(C);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(f){var g=f.type;
var h=f.target||f.srcElement;
if(qx.core.Variant.isSet(bb,L)){if(h&&h.nodeType==3){h=h.parentNode;
}}
if(this.__dE){this.__dE(f,g,h);
}
if(this.__dG){this.__dG(f,g,h);
}this.__dD(f,g,h);

if(this.__dF){this.__dF(f,g,h);
}
if(this.__dH){this.__dH(f,g,h);
}this.__dB=g;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(bc){this.__dD(bc,U);
}),__dE:qx.core.Variant.select(bb,{"webkit":function(s,t,u){if(qx.bom.client.Engine.VERSION<530){if(t==W){this.__dD(s,ba,u);
}}},"default":null}),__dF:qx.core.Variant.select(bb,{"opera":function(b,c,d){if(c==ba&&b.button==2){this.__dD(b,W,d);
}},"default":null}),__dG:qx.core.Variant.select(bb,{"mshtml":function(z,A,B){if(A==ba&&this.__dB==Y){this.__dD(z,X,B);
}else if(A==V){this.__dD(z,Y,B);
}},"default":null}),__dH:qx.core.Variant.select(bb,{"mshtml":null,"default":function(o,p,q){switch(p){case X:this.__dC=q;
break;
case ba:if(q!==this.__dC){var r=qx.dom.Hierarchy.getCommonParent(q,this.__dC);
this.__dD(o,Y,r);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(P,I,M,H);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var d="qx.event.handler.Capture";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var I="alias",H="copy",G="blur",F="mouseout",E="keydown",D="Ctrl",C="Shift",B="mousemove",A="move",z="mouseover",bh="Alt",bg="keyup",bf="mouseup",be="dragend",bd="on",bc="mousedown",bb="qxDraggable",ba="__dI",Y="__dM",X="__dP",P="__dK",Q="__dO",N="drag",O="drop",L="__dN",M="qxDroppable",J="qx.event.handler.DragDrop",K="droprequest",R="__dJ",S="dragstart",U="__dL",T="dragchange",W="dragleave",V="dragover";
qx.Class.define(J,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bo){arguments.callee.base.call(this);
this.__dI=bo;
this.__dJ=bo.getWindow().document.documentElement;
this.__dI.addListener(this.__dJ,bc,this._onMouseDown,this);
this.__dV();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__dI:null,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dS:false,__dT:0,__dU:0,canHandleEvent:function(m,n){},registerEvent:function(br,bs,bt){},unregisterEvent:function(r,s,t){},addType:function(k){this.__dM[k]=true;
},addAction:function(y){this.__dN[y]=true;
},supportsType:function(bl){return !!this.__dM[bl];
},supportsAction:function(l){return !!this.__dN[l];
},getData:function(v){if(!this.__ed||!this.__dK){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__dM[v]){throw new Error("Unsupported data type: "+v+"!");
}
if(!this.__dP[v]){this.__dQ=v;
this.__dX(K,this.__dL,false);
}
if(!this.__dP[v]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__dP[v]||null;
},getCurrentAction:function(){return this.__dR;
},addData:function(p,q){this.__dP[p]=q;
},getCurrentType:function(){return this.__dQ;
},__dV:function(){this.__dM={};
this.__dN={};
this.__dO={};
this.__dP={};
},__dW:function(){var bk=this.__dN;
var bi=this.__dO;
var bj=null;

if(this.__ed){if(bi.Shift&&bi.Ctrl&&bk.alias){bj=I;
}else if(bi.Shift&&bi.Alt&&bk.copy){bj=H;
}else if(bi.Shift&&bk.move){bj=A;
}else if(bi.Alt&&bk.alias){bj=I;
}else if(bi.Ctrl&&bk.copy){bj=H;
}else if(bk.move){bj=A;
}else if(bk.copy){bj=H;
}else if(bk.alias){bj=I;
}}
if(bj!=this.__dR){this.__dR=bj;
this.__dX(T,this.__dL,false);
}},__dX:function(b,c,d,f){var h=qx.event.Registration;
var g=h.createEvent(b,qx.event.type.Drag,[d,f]);

if(this.__dL!==this.__dK){if(c==this.__dL){g.setRelatedTarget(this.__dK);
}else{g.setRelatedTarget(this.__dL);
}}return h.dispatchEvent(c,g);
},__dY:function(w){while(w&&w.nodeType==1){if(w.getAttribute(bb)==bd){return w;
}w=w.parentNode;
}return null;
},__ea:function(i){while(i&&i.nodeType==1){if(i.getAttribute(M)==bd){return i;
}i=i.parentNode;
}return null;
},__eb:function(){this.__dL=null;
this.__dI.removeListener(this.__dJ,B,this._onMouseMove,this,true);
this.__dI.removeListener(this.__dJ,bf,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,G,this._onWindowBlur,this);
this.__dV();
},__ec:function(){if(this.__dS){this.__dI.removeListener(this.__dJ,z,this._onMouseOver,this,true);
this.__dI.removeListener(this.__dJ,F,this._onMouseOut,this,true);
this.__dI.removeListener(this.__dJ,E,this._onKeyDown,this,true);
this.__dI.removeListener(this.__dJ,bg,this._onKeyUp,this,true);
this.__dX(be,this.__dL,false);
this.__dS=false;
}this.__ed=false;
this.__dK=null;
this.__eb();
},__ed:false,_onWindowBlur:function(e){this.__ec();
},_onKeyDown:function(e){var u=e.getKeyIdentifier();

switch(u){case bh:case D:case C:if(!this.__dO[u]){this.__dO[u]=true;
this.__dW();
}}},_onKeyUp:function(e){var j=e.getKeyIdentifier();

switch(j){case bh:case D:case C:if(this.__dO[j]){this.__dO[j]=false;
this.__dW();
}}},_onMouseDown:function(e){if(this.__dS){return;
}var o=this.__dY(e.getTarget());

if(o){this.__dT=e.getDocumentLeft();
this.__dU=e.getDocumentTop();
this.__dL=o;
this.__dI.addListener(this.__dJ,B,this._onMouseMove,this,true);
this.__dI.addListener(this.__dJ,bf,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,G,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__ed){this.__dX(O,this.__dK,false,e);
}if(this.__dS){e.stopPropagation();
}this.__ec();
},_onMouseMove:function(e){if(this.__dS){if(!this.__dX(N,this.__dL,true,e)){this.__ec();
}}else{if(Math.abs(e.getDocumentLeft()-this.__dT)>3||Math.abs(e.getDocumentTop()-this.__dU)>3){if(this.__dX(S,this.__dL,true,e)){this.__dS=true;
this.__dI.addListener(this.__dJ,z,this._onMouseOver,this,true);
this.__dI.addListener(this.__dJ,F,this._onMouseOut,this,true);
this.__dI.addListener(this.__dJ,E,this._onKeyDown,this,true);
this.__dI.addListener(this.__dJ,bg,this._onKeyUp,this,true);
var x=this.__dO;
x.Ctrl=e.isCtrlPressed();
x.Shift=e.isShiftPressed();
x.Alt=e.isAltPressed();
this.__dW();
}else{this.__dX(be,this.__dL,false);
this.__eb();
}}}},_onMouseOver:function(e){var bp=e.getTarget();
var bq=this.__ea(bp);

if(bq&&bq!=this.__dK){this.__ed=this.__dX(V,bq,true,e);
this.__dK=bq;
this.__dW();
}},_onMouseOut:function(e){var bm=e.getTarget();
var bn=this.__ea(bm);

if(bn&&bn==this.__dK){this.__dX(W,this.__dK,false,e);
this.__dK=null;
this.__ed=false;
qx.event.Timer.once(this.__dW,this,0);
}}},destruct:function(){this._disposeFields(U,P,ba,R,Y,L,Q,X);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var i="-",h="qx.event.handler.Element",g="_manager",f="_registeredEvents";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){arguments.callee.base.call(this);
this._manager=B;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(j,k){},registerEvent:function(s,t,u){var x=qx.core.ObjectRegistry.toHashCode(s);
var v=x+i+t;
var w=qx.lang.Function.listener(this._onNative,this,v);
qx.bom.Event.addNativeListener(s,t,w);
this._registeredEvents[v]={element:s,type:t,listener:w};
},unregisterEvent:function(l,m,n){var q=this._registeredEvents;

if(!q){return;
}var r=qx.core.ObjectRegistry.toHashCode(l);
var o=r+i+m;
var p=this._registeredEvents[o];
qx.bom.Event.removeNativeListener(l,m,p.listener);
delete this._registeredEvents[o];
},_onNative:qx.event.GlobalError.observeMethod(function(a,b){var d=this._registeredEvents;

if(!d){return;
}var c=d[b];
qx.event.Registration.fireNonBubblingEvent(c.element,c.type,qx.event.type.Native,[a]);
})},destruct:function(){var y;
var z=this._registeredEvents;

for(var A in z){y=z[A];
qx.bom.Event.removeNativeListener(y.element,y.type,y.listener);
}this._disposeFields(g,f);
},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var f="qx.event.handler.Appear",e="__ef",d="__ee",c="disappear",b="appear";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__ee=g;
this.__ef={};
qx.event.handler.Appear.__eg[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__eg:{},refresh:function(){var t=this.__eg;

for(var u in t){t[u].refresh();
}}},members:{__ee:null,__ef:null,canHandleEvent:function(m,n){},registerEvent:function(v,w,x){var y=qx.core.ObjectRegistry.toHashCode(v);
var z=this.__ef;

if(z&&!z[y]){z[y]=v;
v.$$displayed=v.offsetWidth>0;
}},unregisterEvent:function(o,p,q){var r=qx.core.ObjectRegistry.toHashCode(o);
var s=this.__ef;

if(!s){return;
}
if(s[r]){delete s[r];
o.$$displayed=null;
}},refresh:function(){var k=this.__ef;
var l;

for(var j in k){l=k[j];
var h=l.offsetWidth>0;

if((!!l.$$displayed)!==h){l.$$displayed=h;
var i=qx.event.Registration.createEvent(h?b:c);
this.__ee.dispatchEvent(l,i);
}}}},destruct:function(){this._disposeFields(d,e);
delete qx.event.handler.Appear.__eg[this.$$hash];
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var p="mshtml",o="",n="qx.client",m=">",k="<",h=" ",g="='",f="qx.bom.Element",e="div",d="' ",c="></";
qx.Class.define(f,{statics:{__eh:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,q,r){if(!r){r=window;
}
if(!name){throw new Error("The tag name is missing!");
}var t=this.__eh;
var s=o;

for(var v in q){if(t[v]){s+=v+g+q[v]+d;
}}var w;
if(s!=o){if(qx.bom.client.Engine.MSHTML){w=r.document.createElement(k+name+h+s+m);
}else{var u=r.document.createElement(e);
u.innerHTML=k+name+h+s+c+name+m;
w=u.firstChild;
}}else{w=r.document.createElement(name);
}
for(var v in q){if(!t[v]){qx.bom.element.Attribute.set(w,v,q[v]);
}}return w;
},empty:function(x){return x.innerHTML=o;
},addListener:function(X,Y,ba,self,bb){return qx.event.Registration.addListener(X,Y,ba,self,bb);
},removeListener:function(P,Q,R,self,S){return qx.event.Registration.removeListener(P,Q,R,self,S);
},removeListenerById:function(U,V){return qx.event.Registration.removeListenerById(U,V);
},hasListener:function(L,M,N){return qx.event.Registration.hasListener(L,M,N);
},focus:function(y){qx.event.Registration.getManager(y).getHandler(qx.event.handler.Focus).focus(y);
},blur:function(b){qx.event.Registration.getManager(b).getHandler(qx.event.handler.Focus).blur(b);
},activate:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).activate(T);
},deactivate:function(W){qx.event.Registration.getManager(W).getHandler(qx.event.handler.Focus).deactivate(W);
},capture:function(a){qx.event.Registration.getManager(a).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(a);
},releaseCapture:function(O){qx.event.Registration.getManager(O).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(O);
},clone:function(z,A){var D;

if(A||(qx.core.Variant.isSet(n,p)&&!qx.xml.Document.isXmlDocument(z))){var H=qx.event.Registration.getManager(z);
var B=qx.dom.Hierarchy.getDescendants(z);
B.push(z);
}if(qx.core.Variant.isSet(n,p)){for(var i=0,l=B.length;i<l;i++){H.toggleAttachedEvents(B[i],false);
}}var D=z.cloneNode(true);
if(qx.core.Variant.isSet(n,p)){for(var i=0,l=B.length;i<l;i++){H.toggleAttachedEvents(B[i],true);
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
(function(){var k="qx.client",j="left",i="right",h="middle",g="dblclick",f="click",e="none",d="contextmenu",c="qx.event.type.Mouse",b="Chrome";
qx.Class.define(c,{extend:qx.event.type.Dom,members:{init:function(l,m,n,o,p){arguments.callee.base.call(this,l,m,n,o,p);

if(!n){this._relatedTarget=qx.bom.Event.getRelatedTarget(l);
}return this;
},__eI:qx.core.Variant.select(k,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case f:case g:return j;
case d:return i;
default:return this.__eI[this._native.button]||e;
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
(function(){var f="qx.client",e="qx.event.type.Drag";
qx.Class.define(e,{extend:qx.event.type.Event,members:{init:function(n,o){arguments.callee.base.call(this,false,n);

if(o){this._native=o.getNativeEvent()||null;
this._originalTarget=o.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._native=this._native;
return c;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(l){this.getManager().addType(l);
},addAction:function(g){this.getManager().addAction(g);
},supportsType:function(m){return this.getManager().supportsType(m);
},supportsAction:function(d){return this.getManager().supportsAction(d);
},addData:function(h,i){this.getManager().addData(h,i);
},getData:function(a){return this.getManager().getData(a);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var m="blur",k="__eK",j="__eJ",h="losecapture",g="capture",f="__eL",e="click",d="qx.event.dispatch.MouseCapture",c="focus",b="scroll";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(r){arguments.callee.base.call(this);
this.__eJ=r;
this.__eK=r.getWindow();
r.addListener(this.__eK,m,this.releaseCapture,this);
r.addListener(this.__eK,c,this.releaseCapture,this);
r.addListener(this.__eK,b,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__eL:null,__eJ:null,__eK:null,canDispatchEvent:function(n,event,o){return (this.__eL&&this.__eM[o]);
},dispatchEvent:function(s,event,t){if(t==e){event.stopPropagation();
this.releaseCapture();
return;
}var u=this.__eJ.getListeners(this.__eL,t,false);

if(u){event.setCurrentTarget(this.__eL);
event.setEventPhase(qx.event.type.Event.AT_TARGET);

for(var i=0,l=u.length;i<l;i++){var v=u[i].context||event.getCurrentTarget();
u[i].handler.call(v,event);
}}},__eM:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q){if(this.__eL===q){return;
}
if(this.__eL){this.releaseCapture();
}this.__eL=q;
qx.event.Registration.fireEvent(q,g,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__eL;
},releaseCapture:function(){var p=this.__eL;

if(!p){return;
}this.__eL=null;
qx.event.Registration.fireEvent(p,h,qx.event.type.Event,[true,false]);
}},destruct:function(){this._disposeFields(f,j,k);
},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var A="qx.client",z="",y="mshtml",x="'",w="SelectionLanguage",v="qx.xml.Document",u=" />",t="MSXML2.DOMDocument.3.0",s='<\?xml version="1.0" encoding="utf-8"?>\n<',r="MSXML2.XMLHTTP.3.0",n="MSXML2.XMLHTTP.6.0",q=" xmlns='",p="text/xml",m="XPath",k="MSXML2.DOMDocument.6.0",o="HTML";
qx.Bootstrap.define(v,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(B){if(B.nodeType===9){return B.documentElement.nodeName!==o;
}else if(B.ownerDocument){return this.isXmlDocument(B.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(A,{"mshtml":function(f,g){var h=new ActiveXObject(this.DOMDOC);
h.setProperty(w,m);

if(g){var j=s;
j+=g;

if(f){j+=q+f+x;
}j+=u;
h.loadXML(j);
}return h;
},"default":function(D,E){return document.implementation.createDocument(D||z,E||z,null);
}}),fromString:qx.core.Variant.select(A,{"mshtml":function(F){var G=qx.xml.Document.create();
G.loadXML(F);
return G;
},"default":function(d){var e=new DOMParser();
return e.parseFromString(d,p);
}})},defer:function(a){if(qx.core.Variant.isSet(A,y)){var b=[k,t];
var c=[n,r];

for(var i=0,l=b.length;i<l;i++){try{new ActiveXObject(b[i]);
new ActiveXObject(c[i]);
}catch(C){continue;
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
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===z;
var W=L===A;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=G)){if(parent===M){N=parent.scrollTop;
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
P=parseInt(qx.bom.element.Style.get(parent,D),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,E),10)||0;
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
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,F);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
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
(function(){var o="textarea",n="input",m="qx.client",l="character",k="qx.bom.Selection",j="#text",i="EndToEnd",h="button",g="body";
qx.Class.define(k,{statics:{getSelectionObject:qx.core.Variant.select(m,{"mshtml":function(p){return p.selection;
},"default":function(q){return qx.dom.Node.getWindow(q).getSelection();
}}),get:qx.core.Variant.select(m,{"mshtml":function(w){var x=qx.bom.Range.get(qx.dom.Node.getDocument(w));
return x.text;
},"default":function(r){if(qx.dom.Node.isElement(r)&&(r.nodeName.toLowerCase()==n||r.nodeName.toLowerCase()==o)){return r.value.substring(r.selectionStart,r.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(r)).toString();
}return null;
}}),getLength:qx.core.Variant.select(m,{"mshtml":function(G){var I=qx.bom.Selection.get(G);
var H=qx.util.StringSplit.split(I,/\r\n/);
return I.length-(H.length-1);
},"opera":function(P){var U,S,Q;

if(qx.dom.Node.isElement(P)&&(P.nodeName.toLowerCase()==n||P.nodeName.toLowerCase()==o)){var T=P.selectionStart;
var R=P.selectionEnd;
U=P.value.substring(T,R);
S=R-T;
}else{U=qx.bom.Selection.get(P);
S=U.length;
}Q=qx.util.StringSplit.split(U,/\r\n/);
return S-(Q.length-1);
},"default":function(y){if(qx.dom.Node.isElement(y)&&(y.nodeName.toLowerCase()==n||y.nodeName.toLowerCase()==o)){return y.selectionEnd-y.selectionStart;
}else{return qx.bom.Selection.get(y).length;
}return null;
}}),set:qx.core.Variant.select(m,{"mshtml":function(b,c,d){var e;
if(qx.dom.Node.isDocument(b)){b=b.body;
}
if(qx.dom.Node.isElement(b)||qx.dom.Node.isText(b)){switch(b.nodeName.toLowerCase()){case n:case o:case h:if(d===undefined){d=b.value.length;
}
if(c>=0&&c<=b.value.length&&d>=0&&d<=b.value.length){e=qx.bom.Range.get(b);
e.collapse(true);
e.moveStart(l,c);
e.moveEnd(l,d-c);
e.select();
return true;
}break;
case j:if(d===undefined){d=b.nodeValue.length;
}
if(c>=0&&c<=b.nodeValue.length&&d>=0&&d<=b.nodeValue.length){e=qx.bom.Range.get(qx.dom.Node.getBodyElement(b));
e.moveToElementText(b.parentNode);
e.collapse(true);
e.moveStart(l,c);
e.moveEnd(l,d-c);
e.select();
return true;
}break;
default:if(d===undefined){d=b.childNodes.length-1;
}if(b.childNodes[c]&&b.childNodes[d]){e=qx.bom.Range.get(qx.dom.Node.getBodyElement(b));
e.moveToElementText(b.childNodes[c]);
e.collapse(true);
var f=qx.bom.Range.get(qx.dom.Node.getBodyElement(b));
f.moveToElementText(b.childNodes[d]);
e.setEndPoint(i,f);
e.select();
return true;
}}}return false;
},"default":function(z,A,B){var F=z.nodeName.toLowerCase();

if(qx.dom.Node.isElement(z)&&(F==n||F==o)){if(B===undefined){B=z.value.length;
}if(A>=0&&A<=z.value.length&&B>=0&&B<=z.value.length){z.select();
z.setSelectionRange(A,B);
return true;
}}else{var D=false;
var E=qx.dom.Node.getWindow(z).getSelection();
var C=qx.bom.Range.get(z);
if(qx.dom.Node.isText(z)){if(B===undefined){B=z.length;
}
if(A>=0&&A<z.length&&B>=0&&B<=z.length){D=true;
}}else if(qx.dom.Node.isElement(z)){if(B===undefined){B=z.childNodes.length-1;
}
if(A>=0&&z.childNodes[A]&&B>=0&&z.childNodes[B]){D=true;
}}else if(qx.dom.Node.isDocument(z)){z=z.body;

if(B===undefined){B=z.childNodes.length-1;
}
if(A>=0&&z.childNodes[A]&&B>=0&&z.childNodes[B]){D=true;
}}
if(D){if(!E.isCollapsed){E.collapseToStart();
}C.setStart(z,A);
if(qx.dom.Node.isText(z)){C.setEnd(z,B);
}else{C.setEndAfter(z.childNodes[B]);
}if(E.rangeCount>0){E.removeAllRanges();
}E.addRange(C);
return true;
}}return false;
}}),setAll:function(a){return qx.bom.Selection.set(a,0);
},clear:qx.core.Variant.select(m,{"mshtml":function(s){var t=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(s));
var u=qx.bom.Range.get(s);
var parent=u.parentElement();
var v=qx.bom.Range.get(qx.dom.Node.getDocument(s));
if(parent==v.parentElement()&&parent==s){t.empty();
}},"default":function(J){var L=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(J));
var N=J.nodeName.toLowerCase();
if(qx.dom.Node.isElement(J)&&(N==n||N==o)){J.setSelectionRange(0,0);
qx.bom.Element.blur(J);
}else if(qx.dom.Node.isDocument(J)||N==g){L.collapse(J.body?J.body:J,0);
}else{var M=qx.bom.Range.get(J);

if(!M.collapsed){var O;
var K=M.commonAncestorContainer;
if(qx.dom.Node.isElement(J)&&qx.dom.Node.isText(K)){O=K.parentNode;
}else{O=K;
}
if(O==J){L.collapse(J,0);
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
}}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}},"default":function(m){var n=qx.dom.Node.getDocument(m);
var o=qx.bom.Selection.getSelectionObject(n);

if(o.rangeCount>0){return o.getRangeAt(0);
}else{return n.createRange();
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
(function(){var e="qx.ui.core.queue.Widget",d="widget";
qx.Class.define(e,{statics:{__hu:{},remove:function(f){delete this.__hu[f.$$hash];
},add:function(g){var h=this.__hu;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(d);
},flush:function(){var a=this.__hu;
var c;

for(var b in a){c=a[b];
delete a[b];
c.syncWidget();
}for(var b in a){return;
}this.__hu={};
}}});
})();
(function(){var f="qx.ui.core.queue.Visibility",e="visibility";
qx.Class.define(f,{statics:{__hv:{},__hw:{},remove:function(g){var h=g.$$hash;
delete this.__hw[h];
delete this.__hv[h];
},isVisible:function(o){return this.__hw[o.$$hash]||false;
},__hx:function(k){var m=this.__hw;
var l=k.$$hash;
var n;
if(k.isExcluded()){n=false;
}else{var parent=k.$$parent;

if(parent){n=this.__hx(parent);
}else{n=k.isRootWidget();
}}return m[l]=n;
},add:function(i){var j=this.__hv;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(e);
},flush:function(){var a=this.__hv;
var d=this.__hw;
for(var b in a){if(d[b]!=null){a[b].addChildrenToQueue(a);
}}var c={};

for(var b in a){c[b]=d[b];
d[b]=null;
}for(var b in a){if(d[b]==null){this.__hx(a[b]);
}if(d[b]&&d[b]!=c[b]){a[b].checkAppearanceNeeds();
}}this.__hv={};
}}});
})();
(function(){var h="appearance",g="qx.ui.core.queue.Appearance";
qx.Class.define(g,{statics:{__hy:{},remove:function(i){delete this.__hy[i.$$hash];
},add:function(a){var b=this.__hy;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(h);
},has:function(j){return !!this.__hy[j.$$hash];
},flush:function(){var f=qx.ui.core.queue.Visibility;
var c=this.__hy;
var e;

for(var d in c){e=c[d];
delete c[d];
if(f.isVisible(e)){e.syncAppearance();
}else{e.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__hz:{},add:function(e){var f=this.__hz;

if(f[e.$$hash]){return;
}f[e.$$hash]=e;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__hz;

for(var d in c){c[d].dispose();
delete c[d];
}for(var d in c){return;
}this.__hz={};
}}});
})();
(function(){var g="blur",f="focus",e="input",d="load",c="qx.ui.core.EventHandler",b="__hA",a="activate";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__hA=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__hA:null,__hB:{focusin:1,focusout:1,focus:1,blur:1},__hC:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(h){var o=h.getTarget();
var n=qx.ui.core.Widget.getWidgetByElement(o);
var p=false;

while(n&&n.isAnonymous()){var p=true;
n=n.getLayoutParent();
}if(n&&p&&h.getType()==a){n.getContainerElement().activate();
}if(this.__hB[h.getType()]){n=n&&n.getFocusTarget();
if(!n){return;
}}if(h.getRelatedTarget){var w=h.getRelatedTarget();
var v=qx.ui.core.Widget.getWidgetByElement(w);

while(v&&v.isAnonymous()){v=v.getLayoutParent();
}
if(v){if(this.__hB[h.getType()]){v=v.getFocusTarget();
}if(v===n){return;
}}}var r=h.getCurrentTarget();
var t=qx.ui.core.Widget.getWidgetByElement(r);

if(!t||t.isAnonymous()){return;
}if(this.__hB[h.getType()]){t=t.getFocusTarget();
}var u=h.getType();

if(!(t.isEnabled()||this.__hC[u])){return;
}var j=h.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var q=this.__hA.getListeners(t,u,j);

if(!q||q.length===0){return;
}var k=qx.event.Pool.getInstance().getObject(h.constructor);
h.clone(k);
k.setTarget(n);
k.setRelatedTarget(v||null);
k.setCurrentTarget(t);
var x=h.getOriginalTarget();

if(x){var m=qx.ui.core.Widget.getWidgetByElement(x);

while(m&&m.isAnonymous()){m=m.getLayoutParent();
}k.setOriginalTarget(m);
}else{k.setOriginalTarget(o);
}for(var i=0,l=q.length;i<l;i++){var s=q[i].context||t;
q[i].handler.call(s,k);
}if(k.getPropagationStopped()){h.stopPropagation();
}
if(k.getDefaultPrevented()){h.preventDefault();
}qx.event.Pool.getInstance().poolObject(k);
},registerEvent:function(y,z,A){var B;

if(z===f||z===g){B=y.getFocusElement();
}else if(z===d||z===e){B=y.getContentElement();
}else{B=y.getContainerElement();
}
if(B){B.addListener(z,this._dispatchEvent,this,A);
}},unregisterEvent:function(C,D,E){var F;

if(D===f||D===g){F=C.getFocusElement();
}else if(D===d||D===e){F=C.getContentElement();
}else{F=C.getContainerElement();
}
if(F){F.removeListener(D,this._dispatchEvent,this,E);
}}},destruct:function(){this._disposeFields(b);
},defer:function(I){qx.event.Registration.addHandler(I);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Bootstrap.define(c,{statics:{LOCALE:"",VARIANT:"",__hD:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__hD();
}});
})();
(function(){var z='indexOf',y='slice',x='concat',w='toLocaleLowerCase',v="qx.type.BaseString",u="",t='match',s='toLocaleUpperCase',r='search',q='replace',j='toLowerCase',p='charCodeAt',n='split',h='substring',g='lastIndexOf',m='substr',k='toUpperCase',o='charAt';
qx.Class.define(v,{extend:Object,construct:function(c){var c=c||u;
this.__hE=c;
this.length=c.length;
},members:{$$isString:true,length:0,__hE:null,toString:function(){return this.__hE;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(a,b){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(d,e){{};
var f=[o,p,x,z,g,t,q,r,y,n,m,h,j,k,w,s];
e.valueOf=e.toString;

for(var i=0,l=f.length;i<l;i++){e[f[i]]=String.prototype[f[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__hF=c;
this.__hG=d;
},members:{__hF:null,__hG:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hF,this.__hG);
}}});
})();
(function(){var H="_",G="",F="qx.dynlocale",E="on",D="_applyLocale",C="changeLocale",B="C",A="__hH",z="qx.locale.Manager",y="__hI",w="String",x="singleton";
qx.Class.define(z,{type:x,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hH=qx.$$translations||{};
this.__hI=qx.$$locales||{};
var M=qx.bom.client.Locale;
var K=M.LOCALE;
var L=M.VARIANT;

if(L!==G){K+=H+L;
}this.setLocale(K||this.__hJ);
},statics:{tr:function(S,T){var U=qx.lang.Array.fromArguments(arguments);
U.splice(0,1);
return qx.locale.Manager.getInstance().translate(S,U);
},trn:function(N,O,P,Q){var R=qx.lang.Array.fromArguments(arguments);
R.splice(0,3);
if(P!=1){return qx.locale.Manager.getInstance().translate(O,R);
}else{return qx.locale.Manager.getInstance().translate(N,R);
}},trc:function(b,c,d){var e=qx.lang.Array.fromArguments(arguments);
e.splice(0,2);
return qx.locale.Manager.getInstance().translate(c,e);
},marktr:function(a){return a;
}},properties:{locale:{check:w,nullable:true,apply:D,event:C}},members:{__hJ:B,__hK:null,__hL:null,__hH:null,__hI:null,getLanguage:function(){return this.__hL;
},getTerritory:function(){return this.getLocale().split(H)[1]||G;
},getAvailableLocales:function(){var bb=[];

for(var ba in this.__hI){if(ba!=this.__hJ){bb.push(ba);
}}return bb;
},__hM:function(bc){var be;
var bd=bc.indexOf(H);

if(bd==-1){be=bc;
}else{be=bc.substring(0,bd);
}return be;
},_applyLocale:function(I,J){this.__hK=I;
this.__hL=this.__hM(I);
},addTranslation:function(V,W){var X=this.__hH;

if(X[V]){for(var Y in W){X[V][Y]=W[Y];
}}else{X[V]=W;
}},translate:function(f,g,h){var n;
var l=this.__hH;

if(!l){return f;
}
if(h){var k=this.__hM(h);
}else{h=this.__hK;
k=this.__hL;
}
if(!n&&l[h]){n=l[h][f];
}
if(!n&&l[k]){n=l[k][f];
}
if(!n&&l[this.__hJ]){n=l[this.__hJ][f];
}
if(!n){n=f;
}
if(g.length>0){var j=[];

for(var i=0;i<g.length;i++){var m=g[i];

if(m&&m.translate){j[i]=m.translate();
}else{j[i]=m;
}}n=qx.lang.String.format(n,j);
}
if(qx.core.Variant.isSet(F,E)){n=new qx.locale.LocalizedString(n,f,g);
}return n;
},localize:function(o,p,q){var v;
var t=this.__hI;

if(!t){return o;
}
if(q){var s=this.__hM(q);
}else{q=this.__hK;
s=this.__hL;
}
if(!v&&t[q]){v=t[q][o];
}
if(!v&&t[s]){v=t[s][o];
}
if(!v&&t[this.__hJ]){v=t[this.__hJ][o];
}
if(!v){v=o;
}
if(p.length>0){var r=[];

for(var i=0;i<p.length;i++){var u=p[i];

if(u.translate){r[i]=u.translate();
}else{r[i]=u;
}}v=qx.lang.String.format(v,r);
}
if(qx.core.Variant.isSet(F,E)){v=new qx.locale.LocalizedString(v,o,p);
}return v;
}},destruct:function(){this._disposeFields(A,y);
}});
})();
(function(){var f="source",e="scale",d="no-repeat",c="mshtml",b="qx.client",a="qx.html.Image";
qx.Class.define(a,{extend:qx.html.Element,members:{_applyProperty:function(name,j){arguments.callee.base.call(this,name,j);

if(name===f){var n=this.getDomElement();
var k=this.getAllStyles();
var l=this._getProperty(f);
var m=this._getProperty(e);
var o=m?e:d;
qx.bom.element.Decoration.update(n,l,o,k);
}},_createDomElement:function(){var q=this._getProperty(e);
var r=q?e:d;

if(qx.core.Variant.isSet(b,c)){var p=this._getProperty(f);
this.setNodeName(qx.bom.element.Decoration.getTagName(r,p));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(r));
}return arguments.callee.base.call(this);
},_copyData:function(g){return arguments.callee.base.call(this,true);
},setSource:function(h){this._setProperty(f,h);
return this;
},getSource:function(){return this._getProperty(f);
},resetSource:function(){this._removeProperty(f);
return this;
},setScale:function(i){this._setProperty(e,i);
return this;
},getScale:function(){return this._getProperty(e);
}}});
})();
(function(){var m="replacement",l="Boolean",k="_applyScale",j="_applySource",i="-disabled.$1",h="changeSource",g="String",f="image",e="qx.ui.basic.Image";
qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(d){arguments.callee.base.call(this);

if(d){this.setSource(d);
}},properties:{source:{check:g,init:null,nullable:true,event:h,apply:j,themeable:true},scale:{check:l,init:false,themeable:true,apply:k},appearance:{refine:true,init:f},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hN:null,__hO:null,_createContentElement:function(){return new qx.html.Image();
},_getContentHint:function(){return {width:this.__hN||0,height:this.__hO||0};
},_applyEnabled:function(B,C){arguments.callee.base.call(this,B,C);

if(this.getSource()){this._styleSource();
}},_applySource:function(a){this._styleSource();
},_applyScale:function(D){var E=this.getContentElement();
E.setScale(D);
},_styleSource:function(){var r=qx.util.AliasManager.getInstance().resolve(this.getSource());
var s=this.getContentElement();

if(!r){s.resetSource();
return;
}if(qx.util.ResourceManager.getInstance().has(r)){this.__hP(s,r);
}else if(qx.io2.ImageLoader.isLoaded(r)){this.__hQ(s,r);
}else{this.__hR(s,r);
}},__hP:function(n,o){var q=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var p=o.replace(/\.([a-z]+)$/,i);

if(q.has(p)){o=p;
this.addState(m);
}else{this.removeState(m);
}}if(n.getSource()===o){return;
}n.setSource(o);
this.__hT(q.getImageWidth(o),q.getImageHeight(o));
},__hQ:function(t,u){var w=qx.io2.ImageLoader;
t.setSource(u);
var v=w.getWidth(u);
var x=w.getHeight(u);
this.__hT(v,x);
},__hR:function(y,z){var self;
var A=qx.io2.ImageLoader;
{};
if(!A.isFailed(z)){A.load(z,this.__hS,this);
}else{if(y!=null){y.resetSource();
}}},__hS:function(F,G){if(F!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(G.failed){this.warn("Image could not be loaded: "+F);
}this._styleSource();
},__hT:function(b,c){if(b!==this.__hN||c!==this.__hO){this.__hN=b;
this.__hO=c;
qx.ui.core.queue.Layout.add(this);
}}}});
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
(function(){var g="interval",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton",a="__hU";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(g,this._onInterval,this);
h.start();
this.__hU=h;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__hU:null,_applyTimeoutInterval:function(i){this.__hU.setInterval(i);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__hU){this.__hU.stop();
}this._disposeFields(a);
}});
})();
(function(){var f="bottom",e="top",d="left",c="right",b="-",a="qx.util.PlaceUtil";
qx.Class.define(a,{statics:{compute:function(g,h,i,j,k,l){var z=0;
var top=0;
var p,o;
var v=j.split(b);
var s=v[0];
var y=v[1];
var t=0,q=0,u=0,w=0;

if(l){t+=l.left||0;
q+=l.top||0;
u+=l.right||0;
w+=l.bottom||0;
}switch(s){case d:z=i.left-g.width-t;
break;
case e:top=i.top-g.height-q;
break;
case c:z=i.right+u;
break;
case f:top=i.bottom+w;
break;
}switch(y){case d:z=i.left;
break;
case e:top=i.top;
break;
case c:z=i.right-g.width;
break;
case f:top=i.bottom-g.height;
break;
}
if(k===false){return {left:z,top:top};
}else{var r=Math.min(z,h.width-z-g.width);

if(r<0){var n=z;

if(z<0){if(s==d){n=i.right+u;
}else if(y==c){n=i.left;
}}else{if(s==c){n=i.left-g.width-t;
}else if(y==d){n=i.right-g.width;
}}p=Math.min(n,h.width-n-g.width);

if(p>r){z=n;
r=p;
}}var m=Math.min(top,h.height-top-g.height);

if(m<0){var x=top;

if(top<0){if(s==e){x=i.bottom+w;
}else if(y==f){x=i.top;
}}else{if(s==f){x=i.top-g.height-q;
}else if(y==e){x=i.bottom-g.height;
}}o=Math.min(x,h.height-x-g.height);

if(o>m){top=x;
m=o;
}}return {left:z,top:top,ratingX:r,ratingY:m};
}}}});
})();
(function(){var g="mousedown",f="__hV",d="blur",c="singleton",b="qx.ui.popup.Manager";
qx.Class.define(b,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hV={};
qx.event.Registration.addListener(document.documentElement,g,this.__hX,this,true);
qx.bom.Element.addListener(window,d,this.hideAll,this);
},members:{__hV:null,add:function(a){{};
this.__hV[a.$$hash]=a;
this.__hW();
},remove:function(m){{};
var n=this.__hV;

if(n){delete n[m.$$hash];
this.__hW();
}},hideAll:function(){var i=this.__hV;

if(i){for(var h in i){i[h].exclude();
}}},__hW:function(){var l=1e7;
var k=this.__hV;

for(var j in k){k[j].setZIndex(l++);
}},__hX:function(e){var q=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var r=this.__hV;

for(var p in r){var o=r[p];

if(!o.getAutoHide()||q==o||qx.ui.core.Widget.contains(o,q)){continue;
}o.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__hX,this,true);
this._disposeMap(f);
}});
})();
(function(){var d="abstract",c="__hY",b="qx.ui.layout.Abstract",a="__ia";
qx.Class.define(b,{type:d,extend:qx.core.Object,members:{__hY:null,_invalidChildrenCache:null,__ia:null,invalidateLayoutCache:function(){this.__hY=null;
},renderLayout:function(e,f){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hY){return this.__hY;
}return this.__hY=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(k){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var h=this.__ia;

if(h instanceof qx.ui.core.LayoutItem){h.clearSeparators();
}},_renderSeparator:function(i,j){this.__ia.renderSeparator(i,j);
},connectToWidget:function(g){if(g&&this.__ia){throw new Error("It is not possible to manually set the connected widget.");
}this.__ia=g;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__ia;
},_applyLayoutChange:function(){if(this.__ia){this.__ia.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__ia.getLayoutChildren();
}},destruct:function(){this._disposeFields(a,c);
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
}},_computeSizeHint:function(){var m=this._getLayoutChildren();
var j,o;
var n=0,k=0;
for(var i=0,l=m.length;i<l;i++){j=m[i];
o=j.getSizeHint();
n=Math.max(n,o.width);
k=Math.max(k,o.height);
}return {width:n,height:k};
}}});
})();
(function(){var G="label",F="icon",E="Boolean",D="left",C="both",B="String",A="_applyRich",z="_applyIcon",y="changeGap",x="_applyShow",q="right",w="_applyCenter",t="_applyIconPosition",o="qx.ui.basic.Atom",n="top",s="changeShow",r="bottom",u="_applyLabel",m="Integer",v="_applyGap",p="atom";
qx.Class.define(o,{extend:qx.ui.core.Widget,construct:function(H,I){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(H!=null){this.setLabel(H);
}
if(I!=null){this.setIcon(I);
}},properties:{appearance:{refine:true,init:p},label:{apply:u,nullable:true,dispose:true,check:B},rich:{check:E,init:false,apply:A},icon:{check:B,apply:z,nullable:true,themeable:true},gap:{check:m,nullable:false,event:y,apply:v,themeable:true,init:4},show:{init:C,check:[C,G,F],themeable:true,inheritable:true,apply:x,event:s},iconPosition:{init:D,check:[n,q,r,D],themeable:true,apply:t},center:{init:false,check:E,themeable:true,apply:w}},members:{_createChildControlImpl:function(a){var b;

switch(a){case G:b=new qx.ui.basic.Label(this.getLabel());
b.setAnonymous(true);
b.setRich(this.getRich());
this._add(b);

if(this.getLabel()==null||this.getShow()===F){b.exclude();
}break;
case F:b=new qx.ui.basic.Image(this.getIcon());
b.setAnonymous(true);
this._addAt(b,0);

if(this.getIcon()==null||this.getShow()===G){b.exclude();
}break;
}return b||arguments.callee.base.call(this,a);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===F){this._excludeChildControl(G);
}else{this._showChildControl(G);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===G){this._excludeChildControl(F);
}else{this._showChildControl(F);
}},_applyLabel:function(N,O){var P=this.getChildControl(G,true);

if(P){P.setValue(N);
}this._handleLabel();
},_applyRich:function(h,i){var j=this.getChildControl(G,true);

if(j){j.setRich(h);
}},_applyIcon:function(c,d){var e=this.getChildControl(F,true);

if(e){e.setSource(c);
}this._handleIcon();
},_applyGap:function(k,l){this._getLayout().setGap(k);
},_applyShow:function(f,g){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(J,K){this._getLayout().setIconPosition(J);
},_applyCenter:function(L,M){this._getLayout().setCenter(L);
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
(function(){var w="middle",v="qx.ui.layout.Util",u="left",t="center",s="top",r="bottom",q="right";
qx.Class.define(v,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(R,S,T){var V,ba,U,bb;
var W=S>T;
var bc=Math.abs(S-T);
var bd,X;
var Y={};

for(ba in R){V=R[ba];
Y[ba]={potential:W?V.max-V.value:V.value-V.min,flex:W?V.flex:1/V.flex,offset:0};
}while(bc!=0){bb=Infinity;
U=0;

for(ba in Y){V=Y[ba];

if(V.potential>0){U+=V.flex;
bb=Math.min(bb,V.potential/V.flex);
}}if(U==0){break;
}bb=Math.min(bc,bb*U)/U;
bd=0;

for(ba in Y){V=Y[ba];

if(V.potential>0){X=Math.min(bc,V.potential,Math.ceil(bb*V.flex));
bd+=X-bb*V.flex;

if(bd>=1){bd-=1;
X-=1;
}V.potential-=X;

if(W){V.offset+=X;
}else{V.offset-=X;
}bc-=X;
}}}return Y;
},computeHorizontalAlignOffset:function(x,y,z,A,B){if(A==null){A=0;
}
if(B==null){B=0;
}var C=0;

switch(x){case u:C=A;
break;
case q:C=z-y-B;
break;
case t:C=Math.round((z-y)/2);
if(C<A){C=A;
}else if(C<B){C=Math.max(A,z-y-B);
}break;
}return C;
},computeVerticalAlignOffset:function(D,E,F,G,H){if(G==null){G=0;
}
if(H==null){H=0;
}var I=0;

switch(D){case s:I=G;
break;
case r:I=F-E-H;
break;
case w:I=Math.round((F-E)/2);
if(I<G){I=G;
}else if(I<H){I=Math.max(G,F-E-H);
}break;
}return I;
},collapseMargins:function(a){var b=0,d=0;

for(var i=0,l=arguments.length;i<l;i++){var c=arguments[i];

if(c<0){d=Math.min(d,c);
}else if(c>0){b=Math.max(b,c);
}}return b+d;
},computeHorizontalGaps:function(e,f,g){if(f==null){f=0;
}var h=0;

if(g){h+=e[0].getMarginLeft();

for(var i=1,l=e.length;i<l;i+=1){h+=this.collapseMargins(f,e[i-1].getMarginRight(),e[i].getMarginLeft());
}h+=e[l-1].getMarginRight();
}else{for(var i=1,l=e.length;i<l;i+=1){h+=e[i].getMarginLeft()+e[i].getMarginRight();
}h+=(f*(l-1));
}return h;
},computeVerticalGaps:function(be,bf,bg){if(bf==null){bf=0;
}var bh=0;

if(bg){bh+=be[0].getMarginTop();

for(var i=1,l=be.length;i<l;i+=1){bh+=this.collapseMargins(bf,be[i-1].getMarginBottom(),be[i].getMarginTop());
}bh+=be[l-1].getMarginBottom();
}else{for(var i=1,l=be.length;i<l;i+=1){bh+=be[i].getMarginTop()+be[i].getMarginBottom();
}bh+=(bf*(l-1));
}return bh;
},computeHorizontalSeparatorGaps:function(bi,bj,bk){var bn=qx.theme.manager.Decoration.getInstance().resolve(bk);
var bm=bn.getInsets();
var bl=bm.left+bm.right;
var bo=0;

for(var i=0,l=bi.length;i<l;i++){var bp=bi[i];
bo+=bp.getMarginLeft()+bp.getMarginRight();
}bo+=(bj+bl+bj)*(l-1);
return bo;
},computeVerticalSeparatorGaps:function(J,K,L){var O=qx.theme.manager.Decoration.getInstance().resolve(L);
var N=O.getInsets();
var M=N.top+N.bottom;
var P=0;

for(var i=0,l=J.length;i<l;i++){var Q=J[i];
P+=Q.getMarginTop()+Q.getMarginBottom();
}P+=(K+M+K)*(l-1);
return P;
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
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var r="Please use the value property instead.",q="changeContent",p="qx.dynlocale",o="text",n="color",m="userSelect",l="changeLocale",k="enabled",j="none",i="on",P="_applyTextAlign",O="Boolean",N="qx.ui.core.Widget",M="Please use the changeValue event instead.",L="changeTextAlign",K="__ib",J="changeValue",I="qx.client",H="qx.ui.basic.Label",G="A",y="_applyValue",z="center",w="_applyBuddy",x="qx.event.type.Data",u="String",v="textAlign",s="right",t="changeRich",A="_applyRich",B="click",D="label",C="webkit",F="left",E="__id";
qx.Class.define(H,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(bc){arguments.callee.base.call(this);

if(bc!=null){this.setValue(bc);
}
if(qx.core.Variant.isSet(p,i)){qx.locale.Manager.getInstance().addListener(l,this._onChangeLocale,this);
}},events:{"changeContent":x},properties:{rich:{check:O,init:false,event:t,apply:A},value:{check:u,apply:y,event:J,nullable:true},buddy:{check:N,apply:w,nullable:true,init:null},textAlign:{check:[F,z,s],nullable:true,themeable:true,apply:P,event:L},appearance:{refine:true,init:D},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__ib:null,__ic:null,__id:null,__ie:null,_getContentHint:function(){if(this.__ic){this.__if=this.__ig();
delete this.__ic;
}return {width:this.__if.width,height:this.__if.height};
},_hasHeightForWidth:function(){return this.getRich();
},_applySelectable:function(bi){arguments.callee.base.call(this,bi);
if(qx.core.Variant.isSet(I,C)){this.getContainerElement().setStyle(m,bi?o:j);
this.getContentElement().setStyle(m,bi?o:j);
}},_getContentHeightForWidth:function(a){if(!this.getRich()){return null;
}return this.__ig(a).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(bg,bh){this.getContentElement().setStyle(v,bg);
},_applyTextColor:function(R,S){if(R){this.getContentElement().setStyle(n,qx.theme.manager.Color.getInstance().resolve(R));
}else{this.getContentElement().removeStyle(n);
}},__if:{width:0,height:0},_applyFont:function(Y,ba){var bb;

if(Y){this.__ib=qx.theme.manager.Font.getInstance().resolve(Y);
bb=this.__ib.getStyles();
}else{this.__ib=null;
bb=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bb);
this.__ic=true;
qx.ui.core.queue.Layout.add(this);
},__ig:function(b){var g=qx.bom.Label;
var d=this.getFont();
var c=d?this.__ib.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||G;
var f=this.getRich();
return f?g.getHtmlSize(content,c,b):g.getTextSize(content,c);
},_applyBuddy:function(T,U){if(U!=null){U.removeBinding(this.__id);
this.__id=null;
this.removeListenerById(this.__ie);
this.__ie=null;
}
if(T!=null){this.__id=T.bind(k,this,k);
this.__ie=this.addListener(B,T.focus,T);
}},_applyRich:function(V){this.getContentElement().setRich(V);
this.__ic=true;
qx.ui.core.queue.Layout.add(this);
},_onChangeLocale:qx.core.Variant.select(p,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(W,X){this.getContentElement().setContent(W);
this.__ic=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(q,W,X);
},setContent:function(Q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.setValue(Q);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return this.getValue();
},resetContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.resetValue();
},addListener:function(bd,be,self,bf){if(bd==q){qx.log.Logger.deprecatedEventWarning(arguments.callee,q,M);
}return arguments.callee.base.call(this,bd,be,self,bf);
}},destruct:function(){if(qx.core.Variant.isSet(p,i)){qx.locale.Manager.getInstance().removeListener(l,this._onChangeLocale,this);
}if(this.__id!=null){var h=this.getBuddy();

if(h!=null&&!h.isDisposed()){h.removeBinding(this.__id);
}}this._disposeFields(K,E);
}});
})();
(function(){var c="content",b="qx.html.Label";
qx.Class.define(b,{extend:qx.html.Element,members:{__ih:null,_applyProperty:function(name,d){arguments.callee.base.call(this,name,d);

if(name==c){var e=this.getDomElement();
qx.bom.Label.setContent(e,d);
}},_createDomElement:function(){var g=this.__ih;
var f=qx.bom.Label.create(this._content,g);
return f;
},_copyData:function(j){return arguments.callee.base.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__ih==h){return;
}this.__ih=h;
return this;
},setContent:function(a){this._setProperty(c,a);
return this;
},getContent:function(){return this._getProperty(c);
}}});
})();
(function(){var u="qx.client",t="gecko",s="div",r="inherit",q="text",p="value",o="",n="hidden",m="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",l="nowrap",J="auto",I="ellipsis",H="normal",G="label",F="px",E="crop",D="end",C="100%",B="visible",A="qx.bom.Label",y="opera",z="block",w="none",x="-1000px",v="absolute";
qx.Class.define(A,{statics:{__ii:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__ij:function(){var k=this.__il(false);
document.body.insertBefore(k,document.body.firstChild);
return this._textElement=k;
},__ik:function(){var bb=this.__il(true);
document.body.insertBefore(bb,document.body.firstChild);
return this._htmlElement=bb;
},__il:function(O){var P=qx.bom.Element.create(s);
var Q=P.style;
Q.width=Q.height=J;
Q.left=Q.top=x;
Q.visibility=n;
Q.position=v;
Q.overflow=B;

if(O){Q.whiteSpace=H;
}else{Q.whiteSpace=l;

if(qx.core.Variant.isSet(u,t)){var R=document.createElementNS(m,G);
for(var S in this.__ii){R.style[S]=r;
}P.appendChild(R);
}}return P;
},__im:function(Y){var ba={};

if(Y){ba.whiteSpace=H;
}else if(qx.core.Variant.isSet(u,t)){ba.display=z;
}else{ba.overflow=n;
ba.whiteSpace=l;
ba.textOverflow=I;
ba.userSelect=w;
if(qx.core.Variant.isSet(u,y)){ba.OTextOverflow=I;
}}return ba;
},create:function(content,a,b){if(!b){b=window;
}
if(a){var c=b.document.createElement(s);
c.useHtml=true;
}else if(qx.core.Variant.isSet(u,t)){var c=b.document.createElement(s);
var d=b.document.createElementNS(m,G);
d.style.cursor=r;
d.style.color=r;
d.style.overflow=n;
d.style.maxWidth=C;
for(var e in this.__ii){d.style[e]=r;
}d.setAttribute(E,D);
c.appendChild(d);
}else{var c=b.document.createElement(s);
qx.bom.element.Style.setStyles(c,this.__im(a));
}
if(content){this.setContent(c,content);
}return c;
},setContent:function(i,j){j=j||o;

if(i.useHtml){i.innerHTML=j;
}else if(qx.core.Variant.isSet(u,t)){i.firstChild.setAttribute(p,j);
}else{qx.bom.element.Attribute.set(i,q,j);
}},getContent:function(K){if(K.useHtml){return K.innerHTML;
}else if(qx.core.Variant.isSet(u,t)){return K.firstChild.getAttribute(p)||o;
}else{return qx.bom.element.Attribute.get(K,q);
}},getHtmlSize:function(content,L,M){var N=this._htmlElement||this.__ik();
N.style.width=M!==undefined?M+F:J;
N.innerHTML=content;
return this.__in(N,L);
},getTextSize:function(f,g){var h=this._textElement||this.__ij();

if(qx.core.Variant.isSet(u,t)){h.firstChild.setAttribute(p,f);
}else{qx.bom.element.Attribute.set(h,q,f);
}return this.__in(h,g);
},__in:function(T,U){var V=this.__ii;

if(!U){U={};
}
for(var W in V){T.style[W]=U[W]||o;
}var X=qx.bom.element.Dimension.getSize(T);

if(qx.core.Variant.isSet(u,t)){if(!qx.bom.client.Platform.WIN){X.width++;
}}return X;
}}});
})();
(function(){var v="mshtml",u="qx.client",t="Please use element.clientWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",s="qx.bom.element.Dimension",r="Please use element.scrollWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",q="paddingRight",p="paddingLeft",o="paddingTop",n="Please use element.scrollHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",m="Please use element.clientHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",l="paddingBottom";
qx.Class.define(s,{statics:{getWidth:qx.core.Variant.select(u,{"gecko":function(y){if(y.getBoundingClientRect){var z=y.getBoundingClientRect();
return Math.round(z.right)-Math.round(z.left);
}else{return y.offsetWidth;
}},"default":function(w){return w.offsetWidth;
}}),getHeight:qx.core.Variant.select(u,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.bottom)-Math.round(b.top);
}else{return a.offsetHeight;
}},"default":function(x){return x.offsetHeight;
}}),getSize:function(k){return {width:this.getWidth(k),height:this.getHeight(k)};
},__io:{visible:true,hidden:true},getContentWidth:function(A){var C=qx.bom.element.Style;
var D=qx.bom.element.Overflow.getX(A);
var E=parseInt(C.get(A,p),10);
var G=parseInt(C.get(A,q),10);

if(this.__io[D]){return A.clientWidth-E-G;
}else{if(A.clientWidth>=A.scrollWidth){return Math.max(A.clientWidth,A.scrollWidth)-E-G;
}else{var F=A.scrollWidth-E;
var B=qx.bom.client.Engine;

if(B.NAME===v&&B.VERSION==6){F-=G;
}return F;
}}},getContentHeight:function(c){var e=qx.bom.element.Style;
var g=qx.bom.element.Overflow.getY(c);
var h=parseInt(e.get(c,o),10);
var f=parseInt(e.get(c,l),10);

if(this.__io[g]){return c.clientHeight-h-f;
}else{if(c.clientHeight>=c.scrollHeight){return Math.max(c.clientHeight,c.scrollHeight)-h-f;
}else{var i=c.scrollHeight-h;
var d=qx.bom.client.Engine;

if(d.NAME===v&&d.VERSION==6){i-=f;
}return i;
}}},getContentSize:function(J){return {width:this.getContentWidth(J),height:this.getContentHeight(J)};
},getClientWidth:function(I){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return I.clientWidth;
},getClientHeight:function(H){qx.log.Logger.deprecatedMethodWarning(arguments.callee,m);
return H.clientHeight;
},getScrollWidth:function(K){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return K.scrollWidth;
},getScrollHeight:function(j){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return j.scrollHeight;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(f){return arguments.length==1;
},getEnabled:function(){},setRequired:function(a){return arguments.length==1;
},getRequired:function(){},setValid:function(d){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(e){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="_applyBlockerColor",g="Number",f="__ip",e="qx.ui.core.MBlocker",d="_applyBlockerOpacity",c="Color";
qx.Mixin.define(e,{construct:function(){this.__ip=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:c,init:null,nullable:true,apply:h,themeable:true},blockerOpacity:{check:g,init:1,apply:d,themeable:true}},members:{__ip:null,_applyBlockerColor:function(a,b){this.__ip.setColor(a);
},_applyBlockerOpacity:function(j,k){this.__ip.setOpacity(j);
},block:function(){this.__ip.block();
},isBlocked:function(){return this.__ip.isBlocked();
},unblock:function(){this.__ip.unblock();
},blockContent:function(i){this.__ip.blockContent(i);
},isContentBlocked:function(){return this.__ip.isContentBlocked();
},unblockContent:function(){this.__ip.unblockContent();
},_getContentBlocker:function(){return this.__ip._getContentBlocker();
},_getBlocker:function(){return this.__ip._getBlocker();
},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__ip._restoreAnonymousState();
},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__ip._saveAndSetAnonymousState();
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var j="qx.ui.window.Window",i="changeModal",h="changeVisibility",g="changeActive",f="_applyActiveWindow",d="__ir",c="__iq",b="qx.ui.window.MDesktop";
qx.Mixin.define(b,{properties:{activeWindow:{check:j,apply:f,init:null,nullable:true}},members:{__iq:null,__ir:null,getWindowManager:function(){if(!this.__ir){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ir;
},supportsMaximize:function(){return true;
},setWindowManager:function(k){if(this.__ir){this.__ir.setDesktop(null);
}k.setDesktop(this);
this.__ir=k;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(m,n){this.getWindowManager().changeActiveWindow(m,n);

if(m){m.setActive(true);
}
if(n){n.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(a){if(qx.Class.isDefined(j)&&a instanceof qx.ui.window.Window){this._addWindow(a);
}},_addWindow:function(p){if(!qx.lang.Array.contains(this.getWindows(),p)){this.getWindows().push(p);
p.addListener(g,this._onChangeActive,this);
p.addListener(i,this._onChangeModal,this);
p.addListener(h,this._onChangeVisibility,this);
}
if(p.getActive()){this.setActiveWindow(p);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(j)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(l){qx.lang.Array.remove(this.getWindows(),l);
l.removeListener(g,this._onChangeActive,this);
l.removeListener(i,this._onChangeModal,this);
l.removeListener(h,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__iq){this.__iq=[];
}return this.__iq;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(d);
}});
})();
(function(){var u="contextmenu",t="help",s="qx.client",r="__is",q="changeGlobalCursor",p="abstract",o="Boolean",n="root",m="",l=" !important",h="_applyGlobalCursor",k="_applyNativeHelp",j=";",g="qx.ui.root.Abstract",f="String",i="*";
qx.Class.define(g,{type:p,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:f,nullable:true,themeable:true,apply:h,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:k}},members:{__is:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(s,{"mshtml":function(v,w){},"default":function(a,b){var c=qx.bom.Stylesheet;
var d=this.__is;

if(!d){this.__is=d=c.createElement();
}c.removeAllRules(d);

if(a){c.addRule(d,i,qx.bom.element.Cursor.compile(a).replace(j,m)+l);
}}}),_applyNativeContextMenu:function(z,A){if(z){this.removeListener(u,this._onNativeContextMenu,this,true);
}else{this.addListener(u,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(s,{"mshtml":function(x,y){if(y===false){qx.bom.Event.removeNativeListener(document,t,qx.lang.Function.returnFalse);
}
if(x===false){qx.bom.Event.addNativeListener(document,t,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this._disposeFields(r);
},defer:function(B,C){qx.ui.core.MChildrenHandling.remap(C);
}});
})();
(function(){var n="resize",m="__it",l="position",k="0px",j="webkit",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="__iu",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(q){this.__it=qx.dom.Node.getWindow(q);
this.__iu=q;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__it,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},members:{__it:null,__iu:null,_createContainerElement:function(){var r=this.__iu;

if(qx.core.Variant.isSet(f,j)){if(!r.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var v=r.documentElement.style;
var s=r.body.style;
v.overflow=s.overflow=g;
v.padding=v.margin=s.padding=s.margin=k;
v.width=v.height=s.width=s.height=c;
var u=r.createElement(d);
r.body.appendChild(u);
var t=new qx.html.Root(u);
t.setStyle(l,b);
t.setAttribute(i,this.toHashCode());
return t;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var o=qx.bom.Viewport.getWidth(this.__it);
var p=qx.bom.Viewport.getHeight(this.__it);
return {minWidth:o,width:o,maxWidth:o,minHeight:p,height:p,maxHeight:p};
}},destruct:function(){this._disposeFields(m,a);
}});
})();
(function(){var u="resize",t="px",s="zIndex",r="qx.ui.root.Page",q="backgroundColor",p="_applyOpacity",o="opacity",n="Number",m="interval",l="qx.ui.core.Blocker",g="__ix",k="__iB",j="__iv",f="Color",d="__iz",h="_applyColor";
qx.Class.define(l,{extend:qx.core.Object,construct:function(v){arguments.callee.base.call(this);
this._widget=v;
this._isPageRoot=(qx.Class.isDefined(r)&&v instanceof qx.ui.root.Page);

if(this._isPageRoot){v.addListener(u,this.__iC,this);
}},properties:{color:{check:f,init:null,nullable:true,apply:h,themeable:true},opacity:{check:n,init:1,apply:p,themeable:true}},members:{__iv:null,__iw:null,__ix:null,__iy:null,__iz:null,__iA:0,__iB:null,__iC:function(e){var D=e.getData();

if(this.isContentBlocked()){this._getContentBlocker().setStyles({width:D.width,height:D.height});
}
if(this.isBlocked()){this._getBlocker().setStyles({width:D.width,height:D.height});
}},_applyColor:function(y,z){var A=qx.theme.manager.Color.getInstance().resolve(y);
this.__iD(q,A);
},_applyOpacity:function(B,C){this.__iD(o,B);
},__iD:function(a,b){var c=[];
this.__iv&&c.push(this.__iv);
this.__ix&&c.push(this.__ix);

for(var i=0;i<c.length;i++){c[i].setStyle(a,b);
}},_saveAndSetAnonymousState:function(){this.__iA+=1;

if(this.__iA==1){this.__iz=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){this.__iA-=1;

if(this.__iA==0){this._widget.setAnonymous(this.__iz);
}},__iE:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){if(!this.__iv){this.__iv=this.__iE();
this.__iv.setStyle(s,15);
this._widget.getContainerElement().add(this.__iv);
this.__iv.exclude();
}return this.__iv;
},block:function(){if(this.__iw){return;
}this.__iw=true;
this._getBlocker().include();
this._saveAndSetAnonymousState();
},isBlocked:function(){return !!this.__iw;
},unblock:function(){if(!this.__iw){return;
}this.__iw=false;
this._restoreAnonymousState();
this._getBlocker().exclude();
},_getContentBlocker:function(){if(!this.__ix){this.__ix=this.__iE();
this._widget.getContentElement().add(this.__ix);
this.__ix.exclude();
}return this.__ix;
},blockContent:function(E){var F=this._getContentBlocker();
F.setStyle(s,E);

if(this.__iy){return;
}this.__iy=true;
F.include();

if(this._isPageRoot){if(!this.__iB){this.__iB=new qx.event.Timer(300);
this.__iB.addListener(m,this.__iF,this);
}this.__iB.start();
this.__iF();
}},isContentBlocked:function(){return !!this.__iy;
},unblockContent:function(){if(!this.__iy){return;
}this.__iy=false;
this._getContentBlocker().exclude();

if(this._isPageRoot){this.__iB.stop();
}},__iF:function(){var w=this._widget.getContainerElement().getDomElement();
var x=qx.dom.Node.getDocument(w);
this._getContentBlocker().setStyles({height:x.documentElement.scrollHeight+t,width:x.documentElement.scrollWidth+t});
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(u,this.__iC,this);
}this._disposeObjects(g,j,k);
this._disposeFields(d);
}});
})();
(function(){var i="100%",h="mshtml",g="repeat",f="url(",e=")",d="qx.html.Blocker",c="qx.client",b="qx/static/blank.gif",a="absolute";
qx.Class.define(d,{extend:qx.html.Element,construct:function(j,k){arguments.callee.base.call(this);
var j=j?qx.theme.manager.Color.getInstance().resolve(j):null;
this.setStyles({position:a,width:i,height:i,opacity:k||0,backgroundColor:j});
if(qx.core.Variant.isSet(c,h)){this.setStyles({backgroundImage:f+qx.util.ResourceManager.getInstance().toUri(b)+e,backgroundRepeat:g});
}}});
})();
(function(){var bj="__iH",bi="keypress",bh="__iI",bg="focusout",bf="__iG",be="activate",bd="Tab",bc="singleton",bb="deactivate",ba="__iJ",X="focusin",Y="qx.ui.core.FocusHandler";
qx.Class.define(Y,{extend:qx.core.Object,type:bc,construct:function(){arguments.callee.base.call(this);
this.__iG={};
},members:{__iG:null,__iH:null,__iI:null,__iJ:null,connectTo:function(bl){bl.addListener(bi,this.__iK,this);
bl.addListener(X,this._onFocusIn,this,true);
bl.addListener(bg,this._onFocusOut,this,true);
bl.addListener(be,this._onActivate,this,true);
bl.addListener(bb,this._onDeactivate,this,true);
},addRoot:function(W){this.__iG[W.$$hash]=W;
},removeRoot:function(j){delete this.__iG[j.$$hash];
},getActiveWidget:function(){return this.__iH;
},isActive:function(f){return this.__iH==f;
},getFocusedWidget:function(){return this.__iI;
},isFocused:function(g){return this.__iI==g;
},isFocusRoot:function(G){return !!this.__iG[G.$$hash];
},_onActivate:function(e){var m=e.getTarget();
this.__iH=m;
var k=this.__iL(m);

if(k!=this.__iJ){this.__iJ=k;
}},_onDeactivate:function(e){var h=e.getTarget();

if(this.__iH==h){this.__iH=null;
}},_onFocusIn:function(e){var u=e.getTarget();

if(u!=this.__iI){this.__iI=u;
u.visualizeFocus();
}},_onFocusOut:function(e){var bk=e.getTarget();

if(bk==this.__iI){this.__iI=null;
bk.visualizeBlur();
}},__iK:function(e){if(e.getKeyIdentifier()!=bd){return;
}
if(!this.__iJ){return;
}e.stopPropagation();
e.preventDefault();
var H=this.__iI;

if(!e.isShiftPressed()){var I=H?this.__iP(H):this.__iN();
}else{var I=H?this.__iQ(H):this.__iO();
}if(I){I.tabFocus();
}},__iL:function(U){var V=this.__iG;

while(U){if(V[U.$$hash]){return U;
}U=U.getLayoutParent();
}return null;
},__iM:function(v,w){if(v===w){return 0;
}var y=v.getTabIndex()||0;
var x=w.getTabIndex()||0;

if(y!=x){return y-x;
}var D=v.getContainerElement().getDomElement();
var C=w.getContainerElement().getDomElement();
var B=qx.bom.element.Location;
var A=B.get(D);
var z=B.get(C);
if(A.top!=z.top){return A.top-z.top;
}if(A.left!=z.left){return A.left-z.left;
}var E=v.getZIndex();
var F=w.getZIndex();

if(E!=F){return E-F;
}return 0;
},__iN:function(){return this.__iT(this.__iJ,null);
},__iO:function(){return this.__iU(this.__iJ,null);
},__iP:function(J){var K=this.__iJ;

if(K==J){return this.__iN();
}
while(J&&J.getAnonymous()){J=J.getLayoutParent();
}
if(J==null){return [];
}var L=[];
this.__iR(K,J,L);
L.sort(this.__iM);
var M=L.length;
return M>0?L[0]:this.__iN();
},__iQ:function(n){var o=this.__iJ;

if(o==n){return this.__iO();
}
while(n&&n.getAnonymous()){n=n.getLayoutParent();
}
if(n==null){return [];
}var p=[];
this.__iS(o,n,p);
p.sort(this.__iM);
var q=p.length;
return q>0?p[q-1]:this.__iO();
},__iR:function(parent,a,b){var c=parent.getLayoutChildren();
var d;

for(var i=0,l=c.length;i<l;i++){d=c[i];
if(!(d instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(d)&&d.isEnabled()&&d.isVisible()){if(d.isTabable()&&this.__iM(a,d)<0){b.push(d);
}this.__iR(d,a,b);
}}},__iS:function(parent,N,O){var P=parent.getLayoutChildren();
var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];
if(!(Q instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(Q)&&Q.isEnabled()&&Q.isVisible()){if(Q.isTabable()&&this.__iM(N,Q)>0){O.push(Q);
}this.__iS(Q,N,O);
}}},__iT:function(parent,r){var s=parent.getLayoutChildren();
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];
if(!(t instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(t)&&t.isEnabled()&&t.isVisible()){if(t.isTabable()){if(r==null||this.__iM(t,r)<0){r=t;
}}r=this.__iT(t,r);
}}return r;
},__iU:function(parent,R){var S=parent.getLayoutChildren();
var T;

for(var i=0,l=S.length;i<l;i++){T=S[i];
if(!(T instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(T)&&T.isEnabled()&&T.isVisible()){if(T.isTabable()){if(R==null||this.__iM(T,R)>0){R=T;
}}R=this.__iU(T,R);
}}return R;
}},destruct:function(){this._disposeMap(bf);
this._disposeFields(bh,bj,ba);
}});
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
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var t=0,s=0;
var q=0,o=0;
var m,k;
var j,g;
var c=this._getLayoutChildren();
var f,r,e;
var u,top,d,h;

for(var i=0,l=c.length;i<l;i++){f=c[i];
r=f.getLayoutProperties();
e=f.getSizeHint();
var p=f.getMarginLeft()+f.getMarginRight();
var n=f.getMarginTop()+f.getMarginBottom();
m=e.width+p;
k=e.minWidth+p;
u=r.left!=null?r.left:r.edge;

if(u&&typeof u===b){m+=u;
k+=u;
}d=r.right!=null?r.right:r.edge;

if(d&&typeof d===b){m+=d;
k+=d;
}t=Math.max(t,m);
s=Math.max(s,k);
j=e.height+n;
g=e.minHeight+n;
top=r.top!=null?r.top:r.edge;

if(top&&typeof top===b){j+=top;
g+=top;
}h=r.bottom!=null?r.bottom:r.edge;

if(h&&typeof h===b){j+=h;
g+=h;
}q=Math.max(q,j);
o=Math.max(o,g);
}return {width:t,minWidth:s,height:q,minHeight:o};
}}});
})();
(function(){var b="qx.html.Root";
qx.Class.define(b,{extend:qx.html.Element,construct:function(c){arguments.callee.base.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(a){arguments.callee.base.call(this,a);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var e="__default",d="qx.fx.queue.Manager",c="__uB",b="singleton",a="object";
qx.Class.define(d,{extend:qx.core.Object,type:b,members:{__uB:{},getQueue:function(f){if(typeof (this.__uB[f])==a){return this.__uB[f];
}else{return this.__uB[f]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(e);
}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var f="qx.fx.queue.Queue",e="Number",d="__uC";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__uC=[];
},properties:{limit:{init:Infinity,check:e}},members:{__uD:null,__uC:null,add:function(g){var h=new Date().getTime();
g._startOn+=h;
g._finishOn+=h;

if(this.__uC.length<this.getLimit()){this.__uC.push(g);
}else{g.resetState();
}
if(!this.__uD){this.__uD=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(a){qx.lang.Array.remove(this.__uC,a);

if(this.__uC.length==0){window.clearInterval(this.__uD);
delete this.__uD;
}},loop:function(){var b=new Date().getTime();

for(var i=0,c=this.__uC.length;i<c;i++){this.__uC[i]&&this.__uC[i].loop(b);
}}},destruct:function(){this._disposeFields(d);
}});
})();
(function(){var q="Number",p="qx.event.type.Event",o="update",n="linear",m="Boolean",l="setup",k="flicker",j="__uo",i="Object",h="finish",C="pulse",B="sinodial",A="spring",z="full",y="wobble",x="_applyDuration",w="easeOutQuad",v="easeInQuad",u="__un",t="reverse",r="none",s="qx.fx.Base";
qx.Class.define(s,{extend:qx.core.Object,construct:function(D){arguments.callee.base.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__un=qx.fx.Base.EffectState.IDLE;
this.__uo=D;
},events:{"setup":p,"update":p,"finish":p},properties:{duration:{init:0.5,check:q,apply:x},fps:{init:100,check:q},sync:{init:false,check:m},from:{init:0,check:q},to:{init:1,check:q},delay:{init:0.0,check:q},queue:{check:i},transition:{init:n,check:[n,v,w,B,t,k,y,C,A,r,z]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__un:null,__up:null,__uq:null,__ur:null,__us:null,__ut:null,__uu:null,__uv:null,__uo:null,_getElement:function(){return this.__uo;
},_setElement:function(E){this.__uo=E;
},_applyDuration:function(f,g){},init:function(){this.__un=qx.fx.Base.EffectState.PREPARING;
this.__up=0;
this.__uq=this.getDelay()*1000+(new Date().getTime());
this.__ur=this.__uq+(this.getDuration()*1000);
this.__us=this.getTo()-this.getFrom();
this.__ut=this.__ur-this.__uq;
this.__uu=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(l);
},update:function(d){},finish:function(){this.fireEvent(h);
},start:function(){if(this.__un!=qx.fx.Base.EffectState.IDLE){return false;
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
},render:function(e){if(this.__un==qx.fx.Base.EffectState.PREPARING){this.__un=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__un==qx.fx.Base.EffectState.RUNNING){this.__uv=qx.fx.Transition.get(this.getTransition())(e)*this.__us+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__uv);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(o)){this.fireEvent(o);
}}},loop:function(a){if(a>=this.__uq){if(a>=this.__ur){this.end();
}var c=(a-this.__uq)/this.__ut;
var b=Math.round(c*this.__uu);
if(b>this.__up){this.render(c);
this.__up=b;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__un=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__un=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this._disposeFields(j,u);
}});
})();
(function(){var f="relative",e="Number",d="absolute",c="qx.fx.effect.core.Scroll";
qx.Class.define(c,{extend:qx.fx.Base,properties:{mode:{init:f,check:[f,d]},x:{init:0,check:e},y:{init:0,check:e}},members:{__uE:null,__uF:null,start:function(){if(!arguments.callee.base.call(this)){return;
}var i=this._getElement();
this.__uE={x:i.scrollLeft,y:i.scrollTop};
if(this._atEndPosition(this.__uE.x,this.__uE.y)){return;
}
if(this.getMode()==d){this.__uF={left:this.getX()-this.__uE.x,top:this.getY()-this.__uE.y};
}},update:function(a){arguments.callee.base.call(this);
var b=this._getElement();

if(this.getMode()==f){if(this.getX()!=0){b.scrollLeft=this.__uE.x+(this.getX()*a);
}
if(this.getY()!=0){b.scrollTop=this.__uE.y+(this.getY()*a);
}}else{b.scrollLeft=this.__uE.x+(this.__uF.left*a);
b.scrollTop=this.__uE.y+(this.__uF.top*a);
}},_atEndPosition:function(g,top){var h=this._getElement();
var x=this.getX();
var y=this.getY();
return (((x<0)&&(g==0))||((x>0)&&(g==(h.scrollWidth-h.clientWidth))))&&
(((y<0)&&(top==0))||((y>0)&&(top==(h.scrollHeight-h.clientHeight))));
}}});
})();
(function(){var j="Number",i="static",h="qx.fx.Transition";
qx.Class.define(h,{type:i,statics:{get:function(e){return qx.fx.Transition[e]||false;
},linear:function(l){return l;
},easeInQuad:function(n){return Math.pow(2,10*(n-1));
},easeOutQuad:function(g){return (-Math.pow(2,-10*g)+1);
},sinodial:function(d){return (-Math.cos(d*Math.PI)/2)+0.5;
},reverse:function(c){return 1-c;
},flicker:function(m){var m=((-Math.cos(m*Math.PI)/4)+0.75)+Math.random()/4;
return m>1?1:m;
},wobble:function(f){return (-Math.cos(f*Math.PI*(9*f))/2)+0.5;
},pulse:function(o,p){p=(typeof (p)==j)?p:5;
return (Math.round((o%(1/p))*p)==0?Math.floor((o*p*2)-(o*p*2)):1-Math.floor((o*p*2)-(o*p*2)));
},spring:function(k){return 1-(Math.cos(k*4.5*Math.PI)*Math.exp(-k*6));
},none:function(b){return 0;
},full:function(a){return 1;
}}});
})();
(function(){var h="changeEnabled",g="qx.ui.core.MExecutable",f="qx.event.Command",d="qx.event.type.Event",c="changeCommand",b="_applyCommand",a="execute";
qx.Mixin.define(g,{events:{"execute":d},properties:{command:{check:f,apply:b,event:c,nullable:true}},members:{execute:function(){var k=this.getCommand();

if(k){k.execute(this);
}this.fireEvent(a);
},_applyCommand:function(i,j){if(j){j.removeListener(h,this._onChangeEnabledCommand,this);
}
if(i){i.addListener(h,this._onChangeEnabledCommand,this);

if(this.getEnabled()===false){i.setEnabled(false);
}else if(i.getEnabled()===false){this.setEnabled(false);
}}},_onChangeEnabledCommand:function(e){this.setEnabled(e.getData());
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.MFormElement";
qx.Mixin.define(a,{events:{"changeName":b},members:{__ka:null,setName:function(name){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
if(name!=null&&!qx.lang.Type.isString(name)){throw new Error("Please use strings for the name property.");
return;
}var c=this.__ka;
this.__ka=name;
this.fireDataEvent(qx.event.type.Data,name,c);
},getName:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return this.__ka;
},resetName:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var d=this.__ka;
this.__ka=null;
this.fireDataEvent(qx.event.type.Data,null,d);
}}});
})();
(function(){var f="qx.event.type.Data",e="qx.ui.form.IFormElement",d="boolean";
qx.Interface.define(e,{events:{"changeValue":f,"changeName":f,"changeEnabled":f},members:{setEnabled:function(c){this.assertType(c,d);
},getEnabled:function(){},setName:function(b){this.assertString(b);
},getName:function(){},setValue:function(a){return arguments.length==1;
},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var t="pressed",s="abandoned",r="hovered",q="changeValue",p="qx.ui.form.Button",o="Enter",n="Space",m="dblclick",l="mouseup",k="mousedown",f="The value property will be removed.",j="mouseover",i="mouseout",d="keydown",c="button",h="keyup",g="qx.event.type.Data";
qx.Class.define(p,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable,qx.ui.form.MFormElement],implement:[qx.ui.form.IFormElement,qx.ui.form.IExecutable],construct:function(x,y,z){arguments.callee.base.call(this,x,y);

if(z!=null){this.setCommand(z);
}this.addListener(j,this._onMouseOver);
this.addListener(i,this._onMouseOut);
this.addListener(k,this._onMouseDown);
this.addListener(l,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(h,this._onKeyUp);
this.addListener(m,this._onStopEvent);
},events:{"changeValue":g},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(s)){return;
}this.addState(t);
},release:function(){if(this.hasState(t)){this.removeState(t);
}},reset:function(){this.removeState(t);
this.removeState(s);
this.removeState(r);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(s)){this.removeState(s);
this.addState(t);
}this.addState(r);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(r);

if(this.hasState(t)){this.removeState(t);
this.addState(s);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(s);
this.addState(t);
},_onMouseUp:function(e){this.releaseCapture();
var A=this.hasState(t);
var B=this.hasState(s);

if(A){this.removeState(t);
}
if(B){this.removeState(s);
}else{this.addState(r);

if(A){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case o:case n:this.removeState(s);
this.addState(t);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case o:case n:if(this.hasState(t)){this.removeState(s);
this.removeState(t);
this.execute();
e.stopPropagation();
}}},__kb:null,setValue:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var b=this.__kb;
this.__kb=a;
this.fireDataEvent(q,a,b);
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return this.__kb;
},resetValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__kb=null;
},addListener:function(u,v,self,w){if(u==q&&this.classname==p){qx.log.Logger.deprecatedEventWarning(arguments.callee,q,f);
}return arguments.callee.base.call(this,u,v,self,w);
}}});
})();
(function(){var I="_applyLayoutChange",H="left",G="center",F="top",E="Decorator",D="middle",C="__jM",B="_applyReversed",A="bottom",z="__jK",w="Boolean",y="right",x="Integer",v="__jJ",u="qx.ui.layout.HBox";
qx.Class.define(u,{extend:qx.ui.layout.Abstract,construct:function(r,s,t){arguments.callee.base.call(this);

if(r){this.setSpacing(r);
}
if(s){this.setAlignX(s);
}
if(t){this.setSeparator(t);
}},properties:{alignX:{check:[H,G,y],init:H,apply:I},alignY:{check:[F,D,A],init:F,apply:I},spacing:{check:x,init:0,apply:I},separator:{check:E,nullable:true,apply:I},reversed:{check:w,init:false,apply:B}},members:{__jJ:null,__jK:null,__jL:null,__jM:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jN:function(){var bn=this._getLayoutChildren();
var length=bn.length;
var bk=false;
var bi=this.__jJ&&this.__jJ.length!=length&&this.__jK&&this.__jJ;
var bl;
var bj=bi?this.__jJ:new Array(length);
var bm=bi?this.__jK:new Array(length);
if(this.getReversed()){bn=bn.concat().reverse();
}for(var i=0;i<length;i++){bl=bn[i].getLayoutProperties();

if(bl.width!=null){bj[i]=parseFloat(bl.width)/100;
}
if(bl.flex!=null){bm[i]=bl.flex;
bk=true;
}}if(!bi){this.__jJ=bj;
this.__jK=bm;
}this.__jL=bk;
this.__jM=bn;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(J,K){if(this._invalidChildrenCache){this.__jN();
}var Q=this.__jM;
var length=Q.length;
var ba=qx.ui.layout.Util;
var Y=this.getSpacing();
var bd=this.getSeparator();

if(bd){var N=ba.computeHorizontalSeparatorGaps(Q,Y,bd);
}else{var N=ba.computeHorizontalGaps(Q,Y,true);
}var i,L,W,V;
var bc=[];
var R=N;

for(i=0;i<length;i+=1){V=this.__jJ[i];
W=V!=null?Math.floor((J-N)*V):Q[i].getSizeHint().width;
bc.push(W);
R+=W;
}if(this.__jL&&R!=J){var T={};
var X,bb;

for(i=0;i<length;i+=1){X=this.__jK[i];

if(X>0){S=Q[i].getSizeHint();
T[i]={min:S.minWidth,value:bc[i],max:S.maxWidth,flex:X};
}}var O=ba.computeFlexOffsets(T,J,R);

for(i in O){bb=O[i].offset;
bc[i]+=bb;
R+=bb;
}}var bh=Q[0].getMarginLeft();
if(R<J&&this.getAlignX()!=H){bh=J-R;

if(this.getAlignX()===G){bh=Math.round(bh/2);
}}var S,top,M,W,P,bf,U;
var Y=this.getSpacing();
this._clearSeparators();
if(bd){var be=qx.theme.manager.Decoration.getInstance().resolve(bd).getInsets();
var bg=be.left+be.right;
}for(i=0;i<length;i+=1){L=Q[i];
W=bc[i];
S=L.getSizeHint();
bf=L.getMarginTop();
U=L.getMarginBottom();
M=Math.max(S.minHeight,Math.min(K-bf-U,S.maxHeight));
top=ba.computeVerticalAlignOffset(L.getAlignY()||this.getAlignY(),M,K,bf,U);
if(i>0){if(bd){bh+=P+Y;
this._renderSeparator(bd,{left:bh,top:0,width:bg,height:K});
bh+=bg+Y+L.getMarginLeft();
}else{bh+=ba.collapseMargins(Y,P,L.getMarginLeft());
}}L.renderLayout(bh,top,W,M);
bh+=W;
P=L.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jN();
}var g=qx.ui.layout.Util;
var q=this.__jM;
var a=0,h=0,e=0;
var d=0,f=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
h+=b.width;
var m=this.__jK[i];
var c=this.__jJ[i];

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
}},destruct:function(){this._disposeFields(v,z,C);
}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){arguments.callee.base.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
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