(function() {
  
if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application": "demobrowser.Application", "qx.theme": "demobrowser.Theme", "qx.version": "0.8.3"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"qx": {"resourceUri": "resource", "version": "trunk", "sourceUri": "script"}, "demobrowser": {"resourceUri": "resource", "version": "trunk", "sourceUri": "script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -474, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -572, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -69, 0], "qx/static/blank.html": "qx", "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/form/checkbox-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -544, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -59, 0], "demobrowser/demo/flash/TestFlash.mxml": "demobrowser", "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "demobrowser/demo/icons/format-justify-left.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -12], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "demobrowser/demo/icons/multimedia-player-disabled.png": [128, 128, "png", "demobrowser"], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "demobrowser/css/style.css": "demobrowser", "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -418, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -12, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -20, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/checkbox-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -516, 0], "demobrowser/demo/theme/tag-vert-t.png": [12, 6, "png", "demobrowser"], "qx/icon/Tango/22/actions/go-previous.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/checkbox-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -558, 0], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/form/radiobutton-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "demobrowser/demo/icons/imicons/fabian_jakobs.png": [70, 70, "png", "demobrowser"], "qx/decoration/Modern/inputcheckradio-combined.png": [628, 14, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/tooltip-error-lr-combined.png": [12, 18, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -348, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "demobrowser/demo/icons/format-justify-fill.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -30], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -54, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "demobrowser/demo/icons/format-indent-more.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -264, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/icon/Tango/22/actions/media-playback-stop.png": [22, 22, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -53, 0], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -404, 0], "qx/icon/Tango/22/actions/go-next.png": [22, 22, "png", "qx"], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -145, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -27, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/form/checkbox-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -460, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "demobrowser/demo/icons/imicons/status_offline.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -43, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -278, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -52, 0], "demobrowser/demo/flash/TestFlash.swf": "demobrowser", "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -170, 0], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/icon/Tango/22/apps/office-spreadsheet.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -35, 0], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-arrow.png": [11, 14, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "demobrowser/demo/icons/imicons/christian_schmidt.png": [52, 64, "png", "demobrowser"], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "demobrowser/demo/icons/imicons/status_away.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/icon/Tango/22/mimetypes/executable.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -15, 0], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -30, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "demobrowser/demo/theme/tag-hor-l.png": [6, 12, "png", "demobrowser"], "demobrowser/demo/flash/fo_tester.swf": "demobrowser", "demobrowser/demo/icons/format-justify-center.png": [16, 16, "png", "demobrowser"], "demobrowser/demo/icons/imicons/jonathan_weiss.png": [218, 218, "png", "demobrowser"], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tooltip-error-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "demobrowser/demo/theme/tag-vert-c.png": [12, 6, "png", "demobrowser"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "demobrowser/demo/background/gradient.png": [250, 34, "png", "demobrowser"], "demobrowser/demo/icons/format-indent-less.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -502, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/form/checkbox-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -586, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -530, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -53, 0], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -46, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -390, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/form/tooltip-error-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "demobrowser/backend/remote_table.php": "demobrowser", "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "demobrowser/demo/background/gradient-pressed.png": [250, 18, "png", "demobrowser"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "demobrowser/demo/icons/imicons/user_add.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -600, 0], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "demobrowser/demo/icons/multimedia-player.png": [128, 128, "png", "demobrowser"], "demobrowser/demo/icons/imicons/user_delete.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -33, 0], "demobrowser/demo/flash/build.xml": "demobrowser", "demobrowser/demo/icons/graphics-viewer-document.png": [48, 48, "png", "demobrowser"], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/radiobutton-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -446, 0], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/icon/Tango/22/actions/edit-clear.png": [22, 22, "png", "qx"], "qx/icon/Tango/16/actions/window-close.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/icon/Tango/22/actions/edit-redo.png": [22, 22, "png", "qx"], "demobrowser/demo/icons/feed-reader.png": [48, 48, "png", "demobrowser"], "demobrowser/demo/icons/imicons/readme.txt": "demobrowser", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/static/blank.gif": [1, 1, "gif", "qx"], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -334, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "demobrowser/demo/icons/imicons/status_online.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -20, 0], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -376, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/icon/Tango/22/actions/media-playback-start.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/icon/Tango/22/apps/internet-web-browser.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -69, 0], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -614, 0], "demobrowser/demo/icons/format-justify-right.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -292, 0], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -6], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -488, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "demobrowser/demo/icons/format.png": [96, 16, "png", "demobrowser"], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -432, 0], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -306, 0], "qx/decoration/Modern/form/tooltip-error-l.png": [6, 18, "png", "qx", "qx/decoration/Modern/tooltip-error-lr-combined.png", 0, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -82, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "demobrowser/demo/background/gradients.svg": "demobrowser", "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -39, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/form/tooltip-error-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -24], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "demobrowser/demo/icons/imicons/status_busy.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "demobrowser/demo/flash/FlashVersion.swf": "demobrowser", "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "demobrowser/demo/theme/tag-hor-r.png": [6, 12, "png", "demobrowser"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "demobrowser/demo/theme/tag-hor-c.png": [6, 12, "png", "demobrowser"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/icon/Tango/22/apps/utilities-log-viewer.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -10, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -43, 0], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/form/tooltip-error-r.png": [6, 18, "png", "qx", "qx/decoration/Modern/tooltip-error-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -362, 0], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "demobrowser/demo/icons/imicons/martin_wittemann.png": [52, 52, "png", "demobrowser"], "demobrowser/demo/flash/fo_tester.fla": "demobrowser", "demobrowser/css/sourceview.css": "demobrowser", "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "demobrowser/demo/theme/tag-vert-b.png": [12, 6, "png", "demobrowser"], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -151, 0], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-c.png": [20, 18, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3], "qx/icon/Tango/22/apps/utilities-color-chooser.png": [22, 22, "png", "qx"]};
qx.$$translations = {"C": {}};
qx.$$locales = {"C": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_12": "December", "cldr_month_format_wide_10": "October", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_month_format_wide_7": "July", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_month_stand-alone_narrow_5": "M", "cldr_day_format_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_month_stand-alone_narrow_4": "A", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_month_stand-alone_narrow_2": "F", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_date_time_format_M": "L", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_wide_tue": "Tuesday", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_stand-alone_wide_thu": "Thursday", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_day_stand-alone_narrow_sun": "S", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_day_stand-alone_narrow_tue": "T", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "May", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_month_format_abbreviated_10": "Oct", "cldr_date_time_format_y": "yyyy", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_day_format_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_date_format_short": "M/d/yy"}};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["qx:demobrowser-0.js"]],
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

(function(){var t=".",s="()",r="[Class ",q=".prototype",p="toString",o="qx.Bootstrap",n="]",m="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return r+this.classname+n;
},createNamespace:function(name,h){var k=name.split(t);
var parent=window;
var j=k[0];

for(var i=0,l=k.length-1;i<l;i++,j=k[i]){if(!parent[j]){parent=parent[j]={};
}else{parent=parent[j];
}}parent[j]=h;
return j;
},setDisplayName:function(u,v,name){u.displayName=v+t+name+s;
},setDisplayNames:function(w,x){for(var name in w){var y=w[name];

if(y instanceof Function){y.displayName=x+t+name+s;
}}},define:function(name,a){if(!a){var a={statics:{}};
}var f;
var d=null;
qx.Bootstrap.setDisplayNames(a.statics,name);

if(a.members){qx.Bootstrap.setDisplayNames(a.members,name+q);
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
f.$$type=m;
if(!f.hasOwnProperty(p)){f.toString=this.genericToString;
}if(a.defer){a.defer(f,d);
}qx.Bootstrap.$$registry[name]=a.statics;
}};
qx.Bootstrap.define(o,{statics:{LOADSTART:new Date,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var l="qx.allowUrlSettings",k="&",j="qx.core.Setting",h="qx.allowUrlVariants",g="qxsetting",f=":",e=".";
qx.Bootstrap.define(j,{statics:{__a:{},define:function(a,b){if(b===undefined){throw new Error('Default value of setting "'+a+'" must be defined!');
}
if(!this.__a[a]){this.__a[a]={};
}else if(this.__a[a].defaultValue!==undefined){throw new Error('Setting "'+a+'" is already defined!');
}this.__a[a].defaultValue=b;
},get:function(c){var d=this.__a[c];

if(d===undefined){throw new Error('Setting "'+c+'" is not defined.');
}
if(d.value!==undefined){return d.value;
}return d.defaultValue;
},set:function(r,s){if((r.split(e)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__a[r]){this.__a[r]={};
}this.__a[r].value=s;
},__b:function(){if(window.qxsettings){for(var q in qxsettings){this.set(q,qxsettings[q]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(o){}this.__c();
}},__c:function(){if(this.get(l)!=true){return;
}var n=document.location.search.slice(1).split(k);

for(var i=0;i<n.length;i++){var m=n[i].split(f);

if(m.length!=3||m[0]!=g){continue;
}this.set(m[1],decodeURIComponent(m[2]));
}}},defer:function(p){p.define(l,false);
p.define(h,false);
p.__b();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__d:function(){var u=d;
var y=e;
var x=navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){u=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){y+=q+RegExp.$3;
}}else{w=true;
y=i;
}}else if(navigator.userAgent.indexOf(j)!=-1){u=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(n).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=m;
}}else if(window.controllers&&navigator.product===c){u=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=r;
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=k;
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
alert("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__d();
}});
})();
(function(){var D="on",C="qx.debug",B="off",A="|",z="default",y="object",x="&",w="qx.aspects",u="$",t="qx.allowUrlVariants",m="qx.client",s="qx.dynlocale",p="webkit",k="qxvariant",j="opera",o=":",n=".",q="qx.core.Variant",h="mshtml",r="gecko";
qx.Bootstrap.define(q,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(K,L,M){if(qx.core.Variant.compilerIsSet(C,D)){if(!this.__i(L)){throw new Error('Allowed values of variant "'+K+'" must be defined!');
}
if(M===undefined){throw new Error('Default value of variant "'+K+'" must be defined!');
}}
if(!this.__e[K]){this.__e[K]={};
}else if(qx.core.Variant.compilerIsSet(C,D)){if(this.__e[K].defaultValue!==undefined){throw new Error('Variant "'+K+'" is already defined!');
}}this.__e[K].allowedValues=L;
this.__e[K].defaultValue=M;
},get:function(G){var H=this.__e[G];

if(qx.core.Variant.compilerIsSet(C,D)){if(H===undefined){throw new Error('Variant "'+G+'" is not defined.');
}}
if(H.value!==undefined){return H.value;
}return H.defaultValue;
},__g:function(){if(window.qxvariants){for(var d in qxvariants){if(qx.core.Variant.compilerIsSet(C,D)){if((d.split(n)).length<2){throw new Error('Malformed settings key "'+d+'". Must be following the schema "namespace.key".');
}}
if(!this.__e[d]){this.__e[d]={};
}this.__e[d].value=qxvariants[d];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(I){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(t)!=true){return;
}var e=document.location.search.slice(1).split(x);

for(var i=0;i<e.length;i++){var f=e[i].split(o);

if(f.length!=3||f[0]!=k){continue;
}var g=f[1];

if(!this.__e[g]){this.__e[g]={};
}this.__e[g].value=decodeURIComponent(f[2]);
}},select:function(a,b){if(qx.core.Variant.compilerIsSet(C,D)){if(!this.__j(this.__e[a])){throw new Error("Variant \""+a+"\" is not defined");
}
if(!this.__j(b)){throw new Error("the second parameter must be a map!");
}}
for(var c in b){if(this.isSet(a,c)){return b[c];
}}
if(b[z]!==undefined){return b[z];
}
if(qx.core.Variant.compilerIsSet(C,D)){throw new Error('No match for variant "'+a+'" in variants ['+qx.lang.Object.getKeysAsString(b)+'] found, and no default ("default") given');
}},isSet:function(N,O){var P=N+u+O;

if(this.__f[P]!==undefined){return this.__f[P];
}var R=false;
if(O.indexOf(A)<0){R=this.get(N)===O;
}else{var Q=O.split(A);

for(var i=0,l=Q.length;i<l;i++){if(this.get(N)===Q[i]){R=true;
break;
}}}this.__f[P]=R;
return R;
},__i:function(v){return typeof v===y&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===y&&v!==null&&!(v instanceof Array);
},__k:function(E,F){for(var i=0,l=E.length;i<l;i++){if(E[i]==F){return true;
}}return false;
}},defer:function(J){J.define(m,[r,h,j,p],qx.bom.client.Engine.NAME);
J.define(C,[D,B],D);
J.define(w,[D,B],B);
J.define(s,[D,B],D);
J.__g();
}});
})();
(function(){var I="qx.debug",H="on",G="Invalid argument 'map'",F="qx.client",E="Invalid argument 'source'",D="Invalid argument 'target'",C='"',B="Invalid argument 'minLength'",A="valueOf",z="toLocaleString",s="isPrototypeOf",y="",v="toString",q='\", "',p="Invalid argument 'array'",u="qx.lang.Object",t="hasOwnProperty",w="function",o="undefined",x="Use 'clone()' instead!",r="object";
qx.Bootstrap.define(u,{statics:{empty:function(Y){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(Y,G);
}
for(var ba in Y){if(Y.hasOwnProperty(ba)){delete Y[ba];
}}},isEmpty:qx.core.Variant.select(F,{"gecko":function(bg){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(bg,G);
}return bg.__count__===0;
},"default":function(br){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(br,G);
}
for(var bs in br){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(F,{"gecko":function(bb,bc){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(bb,G);
qx.core.Assert&&qx.core.Assert.assertInteger(bc,B);
}return bb.__count__>=bc;
},"default":function(b,c){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(b,G);
qx.core.Assert&&qx.core.Assert.assertInteger(c,B);
}
if(c<=0){return true;
}var length=0;

for(var d in b){if((++length)>=c){return true;
}}return false;
}}),getLength:qx.core.Variant.select(F,{"gecko":function(M){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(M,G);
}return M.__count__;
},"default":function(m){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(m,G);
}var length=0;

for(var n in m){length++;
}return length;
}}),_shadowedKeys:[s,t,z,v,A],getKeys:qx.core.Variant.select(F,{"mshtml":function(bt){var bu=[];

for(var bw in bt){bu.push(bw);
}var bv=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(bv.call(bt,a[i])){bu.push(a[i]);
}}return bu;
},"default":function(f){var g=[];

for(var h in f){g.push(h);
}return g;
}}),getKeysAsString:function(W){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(W,G);
}var X=qx.lang.Object.getKeys(W);

if(X.length==0){return y;
}return C+X.join(q)+C;
},getValues:function(bd){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(bd,G);
}var bf=[];
var be=this.getKeys(bd);

for(var i=0,l=be.length;i<l;i++){bf.push(bd[be[i]]);
}return bf;
},mergeWith:function(N,O,P){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(N,D);
qx.core.Assert&&qx.core.Assert.assertMap(O,E);
}
if(P===undefined){P=true;
}
for(var Q in O){if(P||N[Q]===undefined){N[Q]=O[Q];
}}return N;
},carefullyMergeWith:function(U,V){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(U,D);
qx.core.Assert&&qx.core.Assert.assertMap(V,E);
}return qx.lang.Object.mergeWith(U,V,false);
},merge:function(J,K){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(J,D);
}var L=arguments.length;

for(var i=1;i<L;i++){qx.lang.Object.mergeWith(J,arguments[i]);
}return J;
},copy:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,x);
return qx.lang.Object.clone(e);
},clone:function(R){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(R,E);
}var S={};

for(var T in R){S[T]=R[T];
}return S;
},invert:function(bh){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(bh,G);
}var bi={};

for(var bj in bh){bi[bh[bj].toString()]=bj;
}return bi;
},getKeyFromValue:function(bo,bp){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(bo,G);
}
for(var bq in bo){if(bo.hasOwnProperty(bq)&&bo[bq]===bp){return bq;
}}return null;
},contains:function(j,k){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(j,G);
}return this.getKeyFromValue(j,k)!==null;
},select:function(bm,bn){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertMap(bn,G);
}return bn[bm];
},fromArray:function(bk){if(qx.core.Variant.isSet(I,H)){qx.core.Assert&&qx.core.Assert.assertArray(bk,p);
}var bl={};

for(var i=0,l=bk.length;i<l;i++){if(qx.core.Variant.isSet(I,H)){switch(typeof bk[i]){case r:case w:case o:throw new Error("Could not convert complex objects like "+bk[i]+" at array index "+i+" to map syntax");
}}bl[bk[i].toString()]=true;
}return bl;
}}});
})();
(function(){var p="Function",o="Boolean",n="Error",m="Number",l="Array",k="Date",j="RegExp",i="String",h="Object",g="qx.lang.Type",f="string";
qx.Bootstrap.define(g,{statics:{__l:{"[object String]":i,"[object Array]":l,"[object Object]":h,"[object RegExp]":j,"[object Number]":m,"[object Boolean]":o,"[object Date]":k,"[object Function]":p,"[object Error]":n},getClass:function(c){var d=Object.prototype.toString.call(c);
return (this.__l[d]||d.slice(8,-1));
},isString:function(e){return (e!==null&&(typeof e===f||this.getClass(e)==i||e instanceof String||(!!e&&!!e.$$isString)));
},isArray:function(t){return (t!==null&&(t instanceof Array||(t&&qx.Class.hasInterface(t.constructor,qx.data.IListData))||this.getClass(t)==l||(!!t&&!!t.$$isArray)));
},isObject:function(q){return (q!==undefined&&q!==null&&this.getClass(q)==h);
},isRegExp:function(r){return this.getClass(r)==j;
},isNumber:function(v){return (v!==null&&(this.getClass(v)==m||v instanceof Number));
},isBoolean:function(u){return (u!==null&&(this.getClass(u)==o||u instanceof Boolean));
},isDate:function(s){return (s!==null&&(this.getClass(s)==k||s instanceof Date));
},isError:function(b){return (b!==null&&(this.getClass(b)==n||b instanceof Error));
},isFunction:function(a){return this.getClass(a)==p;
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__m:[],wrap:function(h,j,k){var p=[];
var l=[];
var o=this.__m;
var n;

for(var i=0;i<o.length;i++){n=o[i];

if((n.type==null||k==n.type||n.type==b)&&(n.name==null||h.match(n.name))){n.pos==-1?p.push(n.fcn):l.push(n.fcn);
}}
if(p.length===0&&l.length===0){return j;
}var m=function(){for(var i=0;i<p.length;i++){p[i].call(this,h,j,k,arguments);
}var q=j.apply(this,arguments);

for(var i=0;i<l.length;i++){l[i].call(this,h,j,k,arguments,q);
}return q;
};

if(k!==a){m.self=j.self;
m.base=j.base;
}j.wrapper=m;
m.original=j;
return m;
},addAdvice:function(e,f,g,name){this.__m.push({fcn:e,pos:f===c?-1:1,type:g,name:name});
}}});
})();
(function(){var bl="qx.debug",bk="on",bj="object",bi=".",bh="static",bg="function",bf="string",be="qx.aspects",bd="abstract",bc="_",bK=".prototype",bJ="constructor",bI="$$init_",bH="extend",bG="init",bF="singleton",bE="qx.event.type.Data",bD="refine",bC="members",bB="variants",bs="off",bt="properties",bq="statics",br="toString",bo="events",bp="]",bm="Class",bn="Interface",bu="qx.Class",bv="Mixin",bx="settings",bw="[Class ",bz="destructor",by="destruct",bA="member";
qx.Bootstrap.define(bu,{statics:{define:function(name,bO){if(!bO){var bO={};
}if(bO.include&&!(bO.include instanceof Array)){bO.include=[bO.include];
}if(bO.implement&&!(bO.implement instanceof Array)){bO.implement=[bO.implement];
}if(!bO.hasOwnProperty(bH)&&!bO.type){bO.type=bh;
}if(qx.core.Variant.isSet(bl,bk)){this.__p(name,bO);
}var bQ=this.__r(name,bO.type,bO.extend,bO.statics,bO.construct,bO.destruct);
if(bO.extend){if(bO.properties){this.__t(bQ,bO.properties,true);
}if(bO.members){this.__v(bQ,bO.members,true,true,false);
}if(bO.events){this.__s(bQ,bO.events,true);
}if(bO.include){for(var i=0,l=bO.include.length;i<l;i++){this.__y(bQ,bO.include[i],false);
}}}if(bO.settings){for(var bP in bO.settings){qx.core.Setting.define(bP,bO.settings[bP]);
}}if(bO.variants){for(var bP in bO.variants){qx.core.Variant.define(bP,bO.variants[bP].allowedValues,bO.variants[bP].defaultValue);
}}if(bO.implement){for(var i=0,l=bO.implement.length;i<l;i++){this.__x(bQ,bO.implement[i]);
}}
if(qx.core.Variant.isSet(bl,bk)){this.__q(bQ);
}if(bO.defer){bO.defer.self=bQ;
bO.defer(bQ,bQ.prototype,{add:function(name,cN){var cO={};
cO[name]=cN;
qx.Class.__t(bQ,cO,true);
}});
}},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(O,P){if(qx.core.Variant.isSet(bl,bk)){if(!P){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+O.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(P,O);
}qx.Class.__y(O,P,false);
},patch:function(cl,cm){if(qx.core.Variant.isSet(bl,bk)){if(!cm){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+cl.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(cm,cl);
}qx.Class.__y(cl,cm,true);
},isSubClassOf:function(G,H){if(!G){return false;
}
if(G==H){return true;
}
if(G.prototype instanceof H){return true;
}return false;
},getPropertyDefinition:function(F,name){while(F){if(F.$$properties&&F.$$properties[name]){return F.$$properties[name];
}F=F.superclass;
}return null;
},getProperties:function(cA){var cB=[];

while(cA){if(cA.$$properties){cB.push.apply(cB,qx.lang.Object.getKeys(cA.$$properties));
}cA=cA.superclass;
}return cB;
},getByProperty:function(cq,name){while(cq){if(cq.$$properties&&cq.$$properties[name]){return cq;
}cq=cq.superclass;
}return null;
},hasProperty:function(s,name){return !!this.getPropertyDefinition(s,name);
},getEventType:function(I,name){var I=I.constructor;

while(I.superclass){if(I.$$events&&I.$$events[name]!==undefined){return I.$$events[name];
}I=I.superclass;
}return null;
},supportsEvent:function(cR,name){return !!this.getEventType(cR,name);
},hasOwnMixin:function(D,E){return D.$$includes&&D.$$includes.indexOf(E)!==-1;
},getByMixin:function(bW,bX){var bY,i,l;

while(bW){if(bW.$$includes){bY=bW.$$flatIncludes;

for(i=0,l=bY.length;i<l;i++){if(bY[i]===bX){return bW;
}}}bW=bW.superclass;
}return null;
},getMixins:function(v){var w=[];

while(v){if(v.$$includes){w.push.apply(w,v.$$flatIncludes);
}v=v.superclass;
}return w;
},hasMixin:function(t,u){return !!this.getByMixin(t,u);
},hasOwnInterface:function(bU,bV){return bU.$$implements&&bU.$$implements.indexOf(bV)!==-1;
},getByInterface:function(J,K){var L,i,l;

while(J){if(J.$$implements){L=J.$$flatImplements;

for(i=0,l=L.length;i<l;i++){if(L[i]===K){return J;
}}}J=J.superclass;
}return null;
},getInterfaces:function(cP){var cQ=[];

while(cP){if(cP.$$implements){cQ.push.apply(cQ,cP.$$flatImplements);
}cP=cP.superclass;
}return cQ;
},hasInterface:function(cH,cI){return !!this.getByInterface(cH,cI);
},implementsInterface:function(A,B){var C=A.constructor;

if(this.hasInterface(C,B)){return true;
}
try{qx.Interface.assertObject(A,B);
return true;
}catch(bb){}
try{qx.Interface.assert(C,B,false);
return true;
}catch(M){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bw+this.classname+bp;
},$$registry:qx.Bootstrap.$$registry,__n:qx.core.Variant.select(bl,{"on":{"type":bf,"extend":bg,"implement":bj,"include":bj,"construct":bg,"statics":bj,"properties":bj,"members":bj,"settings":bj,"variants":bj,"events":bj,"defer":bg,"destruct":bg},"default":null}),__o:qx.core.Variant.select(bl,{"on":{"type":bf,"statics":bj,"settings":bj,"variants":bj,"defer":bg},"default":null}),__p:qx.core.Variant.select(bl,{"on":function(name,cJ){if(cJ.type&&!(cJ.type===bh||cJ.type===bd||cJ.type===bF)){throw new Error('Invalid type "'+cJ.type+'" definition for class "'+name+'"!');
}if(cJ.type&&cJ.type!==bh&&!cJ.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var cM=cJ.type===bh?this.__o:this.__n;

for(var cL in cJ){if(!cM[cL]){throw new Error('The configuration key "'+cL+'" in class "'+name+'" is not allowed!');
}
if(cJ[cL]==null){throw new Error('Invalid key "'+cL+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof cJ[cL]!==cM[cL]){throw new Error('Invalid type of key "'+cL+'" in class "'+name+'"! The type of the key must be "'+cM[cL]+'"!');
}}var cK=[bq,bt,bC,bx,bB,bo];

for(var i=0,l=cK.length;i<l;i++){var cL=cK[i];

if(cJ[cL]!==undefined&&(cJ[cL] instanceof Array||cJ[cL] instanceof RegExp||cJ[cL] instanceof Date||cJ[cL].classname!==undefined)){throw new Error('Invalid key "'+cL+'" in class "'+name+'"! The value needs to be a map!');
}}if(cJ.include){if(cJ.include instanceof Array){for(var i=0,a=cJ.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==bv){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(cJ.implement){if(cJ.implement instanceof Array){for(var i=0,a=cJ.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==bn){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(cJ.include){try{qx.Mixin.checkCompatibility(cJ.include);
}catch(N){throw new Error('Error in include definition of class "'+name+'"! '+N.message);
}}if(cJ.settings){for(var cL in cJ.settings){if(cL.substr(0,cL.indexOf(bi))!=name.substr(0,name.indexOf(bi))){throw new Error('Forbidden setting "'+cL+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(cJ.variants){for(var cL in cJ.variants){if(cL.substr(0,cL.indexOf(bi))!=name.substr(0,name.indexOf(bi))){throw new Error('Forbidden variant "'+cL+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__q:qx.core.Variant.select(bl,{"on":function(bL){var bN=bL.superclass;

while(bN){if(bN.$$classtype!==bd){break;
}var bM=bN.$$implements;

if(bM){for(var i=0;i<bM.length;i++){qx.Interface.assert(bL,bM[i],true);
}}bN=bN.superclass;
}},"default":function(){}}),__r:function(name,e,f,g,h,j){var p;

if(!f&&qx.core.Variant.isSet(be,bs)){p=g||{};
qx.Bootstrap.setDisplayNames(p,name);
}else{p={};

if(f){if(!h){h=this.__z();
}p=this.__B(h,name,e);
qx.Bootstrap.setDisplayName(h,name,bJ);
}if(g){qx.Bootstrap.setDisplayNames(g,name);
var q;

for(var i=0,a=qx.lang.Object.getKeys(g),l=a.length;i<l;i++){q=a[i];
var m=g[q];

if(qx.core.Variant.isSet(be,bk)){if(m instanceof Function){m=qx.core.Aspect.wrap(name+bi+q,m,bh);
}p[q]=m;
}else{p[q]=m;
}}}}var o=qx.Bootstrap.createNamespace(name,p,false);
p.name=p.classname=name;
p.basename=o;
p.$$type=bm;

if(e){p.$$classtype=e;
}if(!p.hasOwnProperty(br)){p.toString=this.genericToString;
}
if(f){var r=f.prototype;
var k=this.__A();
k.prototype=r;
var n=new k;
p.prototype=n;
n.name=n.classname=name;
n.basename=o;
h.base=p.superclass=f;
h.self=p.constructor=n.constructor=p;
if(j){if(qx.core.Variant.isSet(be,bk)){j=qx.core.Aspect.wrap(name,j,bz);
}p.$$destructor=j;
qx.Bootstrap.setDisplayName(j,name,by);
}}this.$$registry[name]=p;
return p;
},__s:function(ca,cb,cc){if(qx.core.Variant.isSet(bl,bk)){if(typeof cb!==bj||cb instanceof Array){throw new Error(ca.classname+": the events must be defined as map!");
}
for(var cd in cb){if(typeof cb[cd]!==bf){throw new Error(ca.classname+"/"+cd+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(ca.$$events&&cc!==true){for(var cd in cb){if(ca.$$events[cd]!==undefined&&ca.$$events[cd]!==cb[cd]){throw new Error(ca.classname+"/"+cd+": the event value/type cannot be changed from "+ca.$$events[cd]+" to "+cb[cd]);
}}}}
if(ca.$$events){for(var cd in cb){ca.$$events[cd]=cb[cd];
}}else{ca.$$events=cb;
}},__t:function(cC,cD,cE){var cG;

if(cE===undefined){cE=false;
}var cF=!!cC.$$propertiesAttached;

for(var name in cD){cG=cD[name];
if(qx.core.Variant.isSet(bl,bk)){this.__u(cC,name,cG,cE);
}cG.name=name;
if(!cG.refine){if(cC.$$properties===undefined){cC.$$properties={};
}cC.$$properties[name]=cG;
}if(cG.init!==undefined){cC.prototype[bI+name]=cG.init;
}if(cG.event!==undefined){var event={};
event[cG.event]=bE;
this.__s(cC,event,cE);
}if(cG.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(cF){qx.core.Property.attachMethods(cC,name,cG);
}}},__u:qx.core.Variant.select(bl,{"on":function(ce,name,cf,cg){var ci=this.hasProperty(ce,name);

if(ci){var ch=this.getPropertyDefinition(ce,name);

if(cf.refine&&ch.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+ce.classname+"'.");
}}
if(!ci&&cf.refine){throw new Error("Could not refine non-existent property: "+name+"!");
}
if(ci&&!cg){throw new Error("Class "+ce.classname+" already has a property: "+name+"!");
}
if(ci&&cg){if(!cf.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+ce.classname+', original class: '+this.getByProperty(ce,name).classname+'.');
}
for(var cj in cf){if(cj!==bG&&cj!==bD){throw new Error("Class "+ce.classname+" could not refine property: "+name+"! Key: "+cj+" could not be refined!");
}}}var ck=cf.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var cj in cf){if(ck[cj]===undefined){throw new Error('The configuration key "'+cj+'" of property "'+name+'" in class "'+ce.classname+'" is not allowed!');
}
if(cf[cj]===undefined){throw new Error('Invalid key "'+cj+'" of property "'+name+'" in class "'+ce.classname+'"! The value is undefined: '+cf[cj]);
}
if(ck[cj]!==null&&typeof cf[cj]!==ck[cj]){throw new Error('Invalid type of key "'+cj+'" of property "'+name+'" in class "'+ce.classname+'"! The type of the key must be "'+ck[cj]+'"!');
}}
if(cf.transform!=null){if(!(typeof cf.transform==bf)){throw new Error('Invalid transform definition of property "'+name+'" in class "'+ce.classname+'"! Needs to be a String.');
}}
if(cf.check!=null){if(!(typeof cf.check==bf||cf.check instanceof Array||cf.check instanceof Function)){throw new Error('Invalid check definition of property "'+name+'" in class "'+ce.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__v:function(Q,R,S,T,U){var V=Q.prototype;
var X,W;
qx.Bootstrap.setDisplayNames(R,Q.classname+bK);

for(var i=0,a=qx.lang.Object.getKeys(R),l=a.length;i<l;i++){X=a[i];
W=R[X];

if(qx.core.Variant.isSet(bl,bk)){if(V[X]!==undefined&&X.charAt(0)==bc&&X.charAt(1)==bc){throw new Error('Overwriting private member "'+X+'" of Class "'+Q.classname+'" is not allowed!');
}
if(S!==true&&V.hasOwnProperty(X)){throw new Error('Overwriting member "'+X+'" of Class "'+Q.classname+'" is not allowed!');
}}if(T!==false&&W instanceof Function&&W.$$type==null){if(U==true){W=this.__w(W,V[X]);
}else{if(V[X]){W.base=V[X];
}W.self=Q;
}
if(qx.core.Variant.isSet(be,bk)){W=qx.core.Aspect.wrap(Q.classname+bi+X,W,bA);
}}V[X]=W;
}},__w:function(Y,ba){if(ba){return function(){var c=Y.base;
Y.base=ba;
var b=Y.apply(this,arguments);
Y.base=c;
return b;
};
}else{return Y;
}},__x:function(x,y){if(qx.core.Variant.isSet(bl,bk)){if(!x||!y){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(x,y)){throw new Error('Interface "'+y.name+'" is already used by Class "'+x.classname+'!');
}if(x.$$classtype!==bd){qx.Interface.assert(x,y,true);
}}var z=qx.Interface.flatten([y]);

if(x.$$implements){x.$$implements.push(y);
x.$$flatImplements.push.apply(x.$$flatImplements,z);
}else{x.$$implements=[y];
x.$$flatImplements=z;
}},__y:function(cv,cw,cx){if(qx.core.Variant.isSet(bl,bk)){if(!cv||!cw){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cv,cw)){qx.log.Logger.warn('Mixin "'+cw.name+'" is already included into Class "'+cv.classname+'" by class: '+this.getByMixin(cv,cw).classname+'!');
return;
}var cz=qx.Mixin.flatten([cw]);
var cy;

for(var i=0,l=cz.length;i<l;i++){cy=cz[i];
if(cy.$$events){this.__s(cv,cy.$$events,cx);
}if(cy.$$properties){this.__t(cv,cy.$$properties,cx);
}if(cy.$$members){this.__v(cv,cy.$$members,cx,cx,cx);
}}if(cv.$$includes){cv.$$includes.push(cw);
cv.$$flatIncludes.push.apply(cv.$$flatIncludes,cz);
}else{cv.$$includes=[cw];
cv.$$flatIncludes=cz;
}},__z:function(){function d(){arguments.callee.base.apply(this,arguments);
}return d;
},__A:function(){return function(){};
},__B:function(cr,name,cs){var cu=function(){var bT=arguments.callee.constructor;

if(qx.core.Variant.isSet("qx.debug","on")){if(!(this instanceof bT)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cs==="abstract"){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cs==="singleton"){if(!bT.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}if(!bT.$$propertiesAttached){qx.core.Property.attach(bT);
}var bS=bT.$$original.apply(this,arguments);
if(bT.$$includes){var bR=bT.$$flatIncludes;

for(var i=0,l=bR.length;i<l;i++){if(bR[i].$$constructor){bR[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bS;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var ct=qx.core.Aspect.wrap(name,cu,"constructor");
cu.$$original=cr;
cu.constructor=ct;
cu=ct;
}if(cs==="singleton"){cu.getInstance=this.getInstance;
}cu.$$original=cr;
cr.wrapper=cu;
return cu;
}},defer:function(cn){if(qx.core.Variant.isSet(be,bk)){for(var co in qx.Bootstrap.$$registry){var cn=qx.Bootstrap.$$registry[co];

for(var cp in cn){if(cn[cp] instanceof Function){cn[cp]=qx.core.Aspect.wrap(co+bi+cp,cn[cp],bh);
}}}}}});
})();
(function(){var j="qx.client",i="on",h="mousedown",g="qx.bom.Event",f="mouseover",d="HTMLEvents";
qx.Bootstrap.define(g,{statics:{addNativeListener:qx.core.Variant.select(j,{"mshtml":function(r,s,t){r.attachEvent(i+s,t);
},"default":function(n,o,p){n.addEventListener(o,p,false);
}}),removeNativeListener:qx.core.Variant.select(j,{"mshtml":function(a,b,c){a.detachEvent(i+b,c);
},"default":function(k,l,m){k.removeEventListener(l,m,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(j,{"mshtml":function(e){if(e.type===f){return e.fromEvent;
}else{return e.toElement;
}},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(j,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==h&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(u){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(q){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(v,w){if(document.createEventObject){var x=document.createEventObject();
return v.fireEvent(i+w,x);
}else{var x=document.createEvent(d);
x.initEvent(w,true,true);
return !v.dispatchEvent(x);
}}}});
})();
(function(){var cl="|bubble",ck="qx.debug",cj="|capture",ci="on",ch="|",cg="': ",cf="'",ce="_",cd="Invalid Target.",cc="Invalid event type.",cJ="Invalid event target.",cI=" from the target '",cH="Invalid callback function",cG="unload",cF="Failed to remove event listener for id '",cE="Invalid context for callback.",cD="Invalid capture flag.",cC="Failed to add event listener for type '",cB="UNKNOWN_",cA="capture",cs="qx.event.Manager",ct="Could not dispatch event '",cq="DOM_",cr="QX_",co=" to the target '",cp="Failed to remove event listener for type '",cm="Invalid capture falg.",cn="__E",cu="c",cv="Invalid id type.",cx="' on target '",cw="WIN_",cz="Invalid event object.",cy="__F";
qx.Bootstrap.define(cs,{construct:function(cM){this.__C=cM;
if(cM.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cM,cG,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cM,cG,arguments.callee);
self.dispose();
}));
}this.__D={};
this.__E={};
this.__F={};
this.__G={};
},statics:{__H:0,getNextUniqueId:function(){return (this.__H++).toString(36);
}},members:{__D:null,__F:null,__I:null,__E:null,__G:null,__C:null,getWindow:function(){return this.__C;
},getHandler:function(cK){var cL=this.__E[cK.classname];

if(cL){return cL;
}return this.__E[cK.classname]=new cK(this);
},getDispatcher:function(Y){var ba=this.__F[Y.classname];

if(ba){return ba;
}return this.__F[Y.classname]=new Y(this);
},getListeners:function(n,o,p){var q=n.$$hash||qx.core.ObjectRegistry.toHashCode(n);
var s=this.__D[q];

if(!s){return null;
}var t=o+(p?cj:cl);
var r=s[t];
return r?r.concat():null;
},serializeListeners:function(cN){var cU=cN.$$hash||qx.core.ObjectRegistry.toHashCode(cN);
var cW=this.__D[cU];
var cS=[];

if(cW){var cQ,cV,cO,cR,cT;

for(var cP in cW){cQ=cP.indexOf(ch);
cV=cP.substring(0,cQ);
cO=cP.charAt(cQ+1)==cu;
cR=cW[cP];

for(var i=0,l=cR.length;i<l;i++){cT=cR[i];
cS.push({self:cT.context,handler:cT.handler,type:cV,capture:cO});
}}}return cS;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__D[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(ch);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__J(P,W,R);
}else{this.__K(P,W,R);
}}}},hasListener:function(bU,bV,bW){if(qx.core.Variant.isSet(ck,ci)){if(bU==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+bU);
}}var bX=bU.$$hash||qx.core.ObjectRegistry.toHashCode(bU);
var ca=this.__D[bX];

if(!ca){return false;
}var cb=bV+(bW?cj:cl);
var bY=ca[cb];
return bY&&bY.length>0;
},importListeners:function(bb,bc){if(qx.core.Variant.isSet(ck,ci)){if(bb==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+bb);
}}var bi=bb.$$hash||qx.core.ObjectRegistry.toHashCode(bb);
var bj=this.__D[bi]={};
var bf=qx.event.Manager;

for(var bd in bc){var bg=bc[bd];
var bh=bg.type+(bg.capture?cj:cl);
var be=bj[bh];

if(!be){be=bj[bh]=[];
this.__J(bb,bg.type,bg.capture);
}be.push({handler:bg.listener,context:bg.self,unique:bg.unique||(bf.__H++).toString(36)});
}},addListener:function(u,v,w,self,x){if(qx.core.Variant.isSet(ck,ci)){var B=cC+v+cf+co+u.classname+cg;
qx.core.Assert.assertObject(u,B+cd);
qx.core.Assert.assertString(v,B+cc);
qx.core.Assert.assertFunction(w,B+cH);

if(x!==undefined){qx.core.Assert.assertBoolean(x,cD);
}}var C=u.$$hash||qx.core.ObjectRegistry.toHashCode(u);
var E=this.__D[C];

if(!E){E=this.__D[C]={};
}var A=v+(x?cj:cl);
var z=E[A];

if(!z){z=E[A]=[];
}if(z.length===0){this.__J(u,v,x);
}var D=(qx.event.Manager.__H++).toString(36);
var y={handler:w,context:self,unique:D};
z.push(y);
return A+ch+D;
},findHandler:function(bk,bl){var bv=false,bo=false,bw=false;
var bu;

if(bk.nodeType===1){bv=true;
bu=cq+bk.tagName.toLowerCase()+ce+bl;
}else if(bk==this.__C){bo=true;
bu=cw+bl;
}else if(bk.classname){bw=true;
bu=cr+bk.classname+ce+bl;
}else{bu=cB+bk+ce+bl;
}var bq=this.__G;

if(bq[bu]){return bq[bu];
}var bt=qx.event.Registration.getHandlers();
var bp=qx.event.IEventHandler;
var br,bs,bn,bm;

for(var i=0,l=bt.length;i<l;i++){br=bt[i];
bn=br.SUPPORTED_TYPES;

if(bn&&!bn[bl]){continue;
}bm=br.TARGET_CHECK;

if(bm){if(!bv&&bm===bp.TARGET_DOMNODE){continue;
}else if(!bo&&bm===bp.TARGET_WINDOW){continue;
}else if(!bw&&bm===bp.TARGET_OBJECT){continue;
}}bs=this.getHandler(bt[i]);

if(br.IGNORE_CAN_HANDLE||bs.canHandleEvent(bk,bl)){bq[bu]=bs;
return bs;
}}return null;
},__J:function(a,b,c){var d=this.findHandler(a,b);

if(d){d.registerEvent(a,b,c);
return;
}
if(qx.core.Variant.isSet("qx.debug","on")){qx.log.Logger.warn(this,"There is no event handler for the event '"+b+"' on target '"+a.classname+"'!");
}},removeListener:function(F,G,H,self,I){if(qx.core.Variant.isSet(ck,ci)){var M=cp+G+cf+cI+F.classname+cg;
qx.core.Assert.assertObject(F,M+cd);
qx.core.Assert.assertString(G,M+cc);
qx.core.Assert.assertFunction(H,M+cH);

if(self!==undefined){qx.core.Assert.assertObject(self,cE);
}
if(I!==undefined){qx.core.Assert.assertBoolean(I,cm);
}}var N=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__D[N];

if(!O){return false;
}var J=G+(I?cj:cl);
var K=O[J];

if(!K){return false;
}var L;

for(var i=0,l=K.length;i<l;i++){L=K[i];

if(L.handler===H&&L.context===self){qx.lang.Array.removeAt(K,i);

if(K.length==0){this.__K(F,G,I);
}return true;
}}return false;
},removeListenerById:function(bI,bJ){if(qx.core.Variant.isSet(ck,ci)){var bP=cF+bJ+cf+cI+bI.classname+cg;
qx.core.Assert.assertObject(bI,bP+cd);
qx.core.Assert.assertString(bJ,bP+cv);
}var bN=bJ.split(ch);
var bS=bN[0];
var bK=bN[1].charCodeAt(0)==99;
var bR=bN[2];
var bQ=bI.$$hash||qx.core.ObjectRegistry.toHashCode(bI);
var bT=this.__D[bQ];

if(!bT){return false;
}var bO=bS+(bK?cj:cl);
var bM=bT[bO];

if(!bM){return false;
}var bL;

for(var i=0,l=bM.length;i<l;i++){bL=bM[i];

if(bL.unique===bR){qx.lang.Array.removeAt(bM,i);

if(bM.length==0){this.__K(bI,bS,bK);
}return true;
}}return false;
},removeAllListeners:function(e){var j=e.$$hash||qx.core.ObjectRegistry.toHashCode(e);
var m=this.__D[j];

if(!m){return false;
}var g,k,f;

for(var h in m){if(m[h].length>0){g=h.split(ch);
k=g[0];
f=g[1]===cA;
this.__K(e,k,f);
}}delete this.__D[j];
return true;
},__K:function(bE,bF,bG){var bH=this.findHandler(bE,bF);

if(bH){bH.unregisterEvent(bE,bF,bG);
return;
}
if(qx.core.Variant.isSet("qx.debug","on")){qx.log.Logger.warn(this,"There is no event handler for the event '"+bF+"' on target '"+bE.classname+"'!");
}},dispatchEvent:function(bx,event){if(qx.core.Variant.isSet(ck,ci)){var bC=ct+event+cx+bx.classname+cg;
qx.core.Assert.assertNotUndefined(bx,bC+cJ);
qx.core.Assert.assertNotNull(bx,bC+cJ);
qx.core.Assert.assertInstance(event,qx.event.type.Event,bC+cz);
}var bD=event.getType();

if(!event.getBubbles()&&!this.hasListener(bx,bD)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bx);
}var bB=qx.event.Registration.getDispatchers();
var bA;
var bz=false;

for(var i=0,l=bB.length;i<l;i++){bA=this.getDispatcher(bB[i]);
if(bA.canDispatchEvent(bx,event,bD)){bA.dispatchEvent(bx,event,bD);
bz=true;
break;
}}
if(!bz){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bD+" on "+bx);
return true;
}var by=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !by;
},dispose:function(){qx.event.Registration.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,cn);
qx.util.DisposeUtil.disposeMap(this,cy);
this.__D=this.__C=this.__I=this.__G=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(k){return k.nodeType===
this.DOCUMENT?k:
k.ownerDocument||k.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(n){if(n.nodeType==null){return n;
}if(n.nodeType!==this.DOCUMENT){n=n.ownerDocument;
}return n.parentWindow;
},"default":function(b){if(b.nodeType==null){return b;
}if(b.nodeType!==this.DOCUMENT){b=b.ownerDocument;
}return b.defaultView;
}}),getDocumentElement:function(h){return this.getDocument(h).documentElement;
},getBodyElement:function(q){return this.getDocument(q).body;
},isNode:function(j){return !!(j&&j.nodeType!=null);
},isElement:function(o){return !!(o&&o.nodeType===this.ELEMENT);
},isDocument:function(f){return !!(f&&f.nodeType===this.DOCUMENT);
},isText:function(p){return !!(p&&p.nodeType===this.TEXT);
},isWindow:function(g){return !!(g&&g.history&&g.location&&g.document);
},getText:function(l){if(!l||!l.nodeType){return null;
}
switch(l.nodeType){case 1:var i,a=[],m=l.childNodes,length=m.length;

for(i=0;i<length;i++){a[i]=this.getText(m[i]);
}return a.join(c);
case 2:return l.nodeValue;
break;
case 3:return l.nodeValue;
break;
}return null;
}}});
})();
(function(){var bq="qx.debug",bp="on",bo="The second parameter must be an array.",bn="mshtml",bm="The first parameter must be an array.",bl="Parameter must be an array.",bk="qx.client",bj="[object Array]",bi="qx.lang.Array",bh="Use qx.lang.Type.isArray() instead!",bd="qx",bg="number",bf="Use the native Array access instead: arr[arr.length - 1]",bc="Use the native Array access instead: arr[0]",bb="string",be="Use 'clone()' instead!";
qx.Bootstrap.define(bi,{statics:{isArray:function(N){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bh);
return qx.lang.Type.isArray(N);
},toArray:function(bA,bB){return this.cast(bA,Array,bB);
},cast:function(Q,R,S){if(Q.constructor===R){return Q;
}
if(qx.Class.hasInterface(Q,qx.data.IListData)){var Q=Q.toArray();
}var T=new R;
if(qx.core.Variant.isSet(bk,bn)){if(Q.item){for(var i=S||0,l=Q.length;i<l;i++){T.push(Q[i]);
}return T;
}}if(Object.prototype.toString.call(Q)===bj&&S==null){T.push.apply(T,Q);
}else{T.push.apply(T,Array.prototype.slice.call(Q,S||0));
}return T;
},fromArguments:function(E,F){return Array.prototype.slice.call(E,F||0);
},fromCollection:function(C){if(qx.core.Variant.isSet(bk,bn)){if(C.item){var D=[];

for(var i=0,l=C.length;i<l;i++){D[i]=C[i];
}return D;
}}return Array.prototype.slice.call(C,0);
},fromShortHand:function(c){var e=c.length;
var d=qx.lang.Array.clone(c);
switch(e){case 1:d[1]=d[2]=d[3]=d[0];
break;
case 2:d[2]=d[0];
case 3:d[3]=d[1];
}return d;
},copy:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,be);
return qx.lang.Array.clone(a);
},clone:function(h){return h.concat();
},getLast:function(br){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bf);
return br[br.length-1];
},getFirst:function(bs){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bc);
return bs[0];
},insertAt:function(O,P,i){O.splice(i,0,P);
return O;
},insertBefore:function(j,k,m){var i=j.indexOf(m);

if(i==-1){j.push(k);
}else{j.splice(i,0,k);
}return j;
},insertAfter:function(bw,bx,by){var i=bw.indexOf(by);

if(i==-1||i==(bw.length-1)){bw.push(bx);
}else{bw.splice(i+1,0,bx);
}return bw;
},removeAt:function(ba,i){return ba.splice(i,1)[0];
},removeAll:function(b){b.length=0;
return this;
},append:function(bC,bD){if(qx.core.Variant.isSet(bq,bp)){qx.core.Assert.assertArray(bC,bm);
qx.core.Assert.assertArray(bD,bo);
}Array.prototype.push.apply(bC,bD);
return bC;
},exclude:function(V,W){if(qx.core.Variant.isSet(bq,bp)){qx.core.Assert.assertArray(V,bm);
qx.core.Assert.assertArray(W,bo);
}
for(var i=0,Y=W.length,X;i<Y;i++){X=V.indexOf(W[i]);

if(X!=-1){V.splice(X,1);
}}return V;
},remove:function(I,J){var i=I.indexOf(J);

if(i!=-1){I.splice(i,1);
return J;
}},contains:function(G,H){return G.indexOf(H)!==-1;
},equals:function(A,B){var length=A.length;

if(length!==B.length){return false;
}
for(var i=0;i<length;i++){if(A[i]!==B[i]){return false;
}}return true;
},sum:function(f){var g=0;

for(var i=0,l=f.length;i<l;i++){g+=f[i];
}return g;
},max:function(K){if(qx.core.Variant.isSet(bq,bp)){qx.core.Assert.assertArray(K,bl);
}var i,M=K.length,L=K[0];

for(i=1;i<M;i++){if(K[i]>L){L=K[i];
}}return L===undefined?null:L;
},min:function(bt){if(qx.core.Variant.isSet(bq,bp)){qx.core.Assert.assertArray(bt,bl);
}var i,bv=bt.length,bu=bt[0];

for(i=1;i<bv;i++){if(bt[i]<bu){bu=bt[i];
}}return bu===undefined?null:bu;
},unique:function(n){var x=[],p={},s={},u={};
var t,o=0;
var y=bd+qx.lang.Date.now();
var q=false,w=false,z=false;
for(var i=0,v=n.length;i<v;i++){t=n[i];
if(t===null){if(!q){q=true;
x.push(t);
}}else if(t===undefined){}else if(t===false){if(!w){w=true;
x.push(t);
}}else if(t===true){if(!z){z=true;
x.push(t);
}}else if(typeof t===bb){if(!p[t]){p[t]=1;
x.push(t);
}}else if(typeof t===bg){if(!s[t]){s[t]=1;
x.push(t);
}}else{r=t[y];

if(r==null){r=t[y]=o++;
}
if(!u[r]){u[r]=t;
x.push(t);
}}}for(var r in u){try{delete u[r][y];
}catch(bz){try{u[r][y]=null;
}catch(U){throw new Error("Cannot clean-up map entry doneObjects["+r+"]["+y+"]");
}}}return x;
}}});
})();
(function(){var o="()",n="qx.debug",m=".",l=".prototype.",k="on",j="Invalid parameter 'func'.",i="Use qx.lang.Type.isFunction() instead!",h='anonymous()',g="qx.lang.Function",f="Trying to call a bound function with a disposed object as context.",e=".constructor()";
qx.Bootstrap.define(g,{statics:{isFunction:function(d){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return qx.lang.Type.isFunction(d);
},getCaller:function(v){return v.caller?v.caller.callee:v.callee.caller;
},getName:function(H){if(H.displayName){return H.displayName;
}
if(H.$$original||H.wrapper||H.classname){return H.classname+e;
}
if(H.$$mixin){for(var J in H.$$mixin.$$members){if(H.$$mixin.$$members[J]==H){return H.$$mixin.name+l+J+o;
}}for(var J in H.$$mixin){if(H.$$mixin[J]==H){return H.$$mixin.name+m+J+o;
}}}
if(H.self){var K=H.self.constructor;

if(K){for(var J in K.prototype){if(K.prototype[J]==H){return K.classname+l+J+o;
}}for(var J in K){if(K[J]==H){return K.classname+m+J+o;
}}}}var I=H.toString().match(/function\s*(\w*)\s*\(.*/);

if(I&&I.length>=1&&I[1]){return I[1]+o;
}return h;
},globalEval:function(w){if(window.execScript){return window.execScript(w);
}else{return eval.call(window,w);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(C,D){if(qx.core.Variant.isSet(n,k)){qx.core.Assert.assertFunction(C,j);
}if(!D){return C;
}if(!(D.self||D.args||D.delay!=null||D.periodical!=null||D.attempt)){return C;
}return function(event){if(qx.core.Variant.isSet(n,k)){if(D.self instanceof qx.core.Object){qx.core.Assert.assertFalse(D.self.isDisposed(),f);
}}var M=qx.lang.Array.fromArguments(arguments);
if(D.args){M=D.args.concat(M);
}
if(D.delay||D.periodical){var L=qx.event.GlobalError.observeMethod(function(){return C.apply(D.self||this,M);
});

if(D.delay){return window.setTimeout(L,D.delay);
}
if(D.periodical){return window.setInterval(L,D.periodical);
}}else if(D.attempt){var N=false;

try{N=C.apply(D.self||this,M);
}catch(u){}return N;
}else{return C.apply(D.self||this,M);
}};
},bind:function(A,self,B){return this.create(A,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(E,F){return this.create(E,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(a,self,b){if(arguments.length<3){return function(event){return a.call(self||this,event||window.event);
};
}else{var c=qx.lang.Array.fromArguments(arguments,2);
return function(event){var G=[event||window.event];
G.push.apply(G,c);
a.apply(self||this,G);
};
}},attempt:function(p,self,q){return this.create(p,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(r,s,self,t){return this.create(r,{delay:s,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(x,y,self,z){return this.create(x,{periodical:y,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var z="qx.debug",y="on",x="Invalid event target.",w="Invalid event dispatcher!",v="': ",u="Invalid event handler.",t="' on target '",s="Could not fire event '",r="qx.event.Registration";
qx.Bootstrap.define(r,{statics:{__L:{},getManager:function(S){if(S==null){if(qx.core.Variant.isSet(z,y)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}S=window;
}else if(S.nodeType){S=qx.dom.Node.getWindow(S);
}else if(!qx.dom.Node.isWindow(S)){S=window;
}var U=S.$$hash||qx.core.ObjectRegistry.toHashCode(S);
var T=this.__L[U];

if(!T){T=new qx.event.Manager(S);
this.__L[U]=T;
}return T;
},removeManager:function(D){var E=qx.core.ObjectRegistry.toHashCode(D.getWindow());
delete this.__L[E];
},addListener:function(O,P,Q,self,R){return this.getManager(O).addListener(O,P,Q,self,R);
},removeListener:function(V,W,X,self,Y){return this.getManager(V).removeListener(V,W,X,self,Y);
},removeListenerById:function(G,H){return this.getManager(G).removeListenerById(G,H);
},removeAllListeners:function(N){return this.getManager(N).removeAllListeners(N);
},hasListener:function(A,B,C){return this.getManager(A).hasListener(A,B,C);
},serializeListeners:function(c){return this.getManager(c).serializeListeners(c);
},createEvent:function(J,K,L){if(qx.core.Variant.isSet(z,y)){if(arguments.length>1&&K===undefined){throw new Error("Create event of type "+J+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(K==null){K=qx.event.type.Event;
}var M=qx.event.Pool.getInstance().getObject(K);

if(!M){return;
}L?M.init.apply(M,L):M.init();
if(J){M.setType(J);
}return M;
},dispatchEvent:function(F,event){return this.getManager(F).dispatchEvent(F,event);
},fireEvent:function(l,m,n,o){if(qx.core.Variant.isSet(z,y)){if(arguments.length>2&&n===undefined&&o!==undefined){throw new Error("Create event of type "+m+" with undefined class. Please use null to explicit fallback to default event type!");
}var p=s+m+t+l.classname+v;
qx.core.Assert.assertNotUndefined(l,p+x);
qx.core.Assert.assertNotNull(l,p+x);
}var q=this.createEvent(m,n||null,o);
return this.getManager(l).dispatchEvent(l,q);
},fireNonBubblingEvent:function(d,e,f,g){if(qx.core.Variant.isSet(z,y)){if(arguments.length>2&&f===undefined&&g!==undefined){throw new Error("Create event of type "+e+" with undefined class. Please use null to explicit fallback to default event type!");
}}var h=this.getManager(d);

if(!h.hasListener(d,e,false)){return true;
}var i=this.createEvent(e,f||null,g);
return h.dispatchEvent(d,i);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__M:[],addHandler:function(I){if(qx.core.Variant.isSet(z,y)){qx.core.Assert.assertInterface(I,qx.event.IEventHandler,u);
}this.__M.push(I);
this.__M.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__M;
},__N:[],addDispatcher:function(j,k){if(qx.core.Variant.isSet(z,y)){qx.core.Assert.assertInterface(j,qx.event.IEventDispatcher,w);
}this.__N.push(j);
this.__N.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__N;
}}});
})();
(function(){var co=';',cn='computed=this.',cm='=value;',cl='this.',ck='if(this.',cj='!==undefined)',ci="init",ch='delete this.',cg="set",cf="setThemed",bQ="setRuntime",bP='}',bO='else if(this.',bN="string",bM='return this.',bL='","',bK='",value);',bJ="boolean",bI="resetThemed",bH='!==undefined){',cv="refresh",cw='=true;',ct="resetRuntime",cu="reset",cr='old=this.',cs="on",cp="qx.debug",cq='.$$properties.',cx='else ',cy='if(old===undefined)old=this.',bX='old=computed=this.',bW="qx.propertyDebugLevel",ca='if(value===undefined)prop.error(this,2,"',bY=' of an instance of ',cc=";",cb='if(old===computed)return value;',ce='"), msg)',cd='!(',bV='(value);',bU='var prop=qx.core.Property;',y='if(old===undefined)old=null;',z=' is not (yet) ready!");',A=')',B='var msg = "Invalid incoming value for property \'',C='===value)return value;',D='return init;',E='var init=this.',F=')prop.error(this,5,"',G="Error in property ",H='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',cC='.check.call(this, value)',cB='.validate.call(this, value);',cA='else{',cz=" in method ",cG='=computed;',cF='(backup);',cE='if(computed===inherit){',cD="inherit",cI='if(arguments.length!==1)prop.error(this,1,"',cH='if(a[i].',bh='else if(computed===undefined)',bi="': ",bf=" of class ",bg='===undefined)return;',bl="')){",bm='.check, msg)',bj='else this.',bk='value=this.',bd='if(init==qx.core.Property.$$inherit)init=null;',be='qx.core.Assert.assertInArray(value, ',P='var inherit=prop.$$inherit;',O="', qx.event.type.Data, [computed, old]",R='computed=undefined;delete this.',Q='computed=value;',L='}else{',K='if(this.$$initialized)prop.error(this,0,"',N='qx.core.Assert.assertInstance(value, qx.Class.getByName("',M='if(value===null)prop.error(this,4,"',J='){',I='!',br='if(computed===undefined||computed===inherit){',bs='!==inherit){',bt="function",bu=")}",bn='(computed, old, "',bo='return value;',bp='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bq="if(reg.hasListener(this, '",bv='\'";',bw=')a[i].',ba=';}',Y='if(value!==null)',X="var reg=qx.event.Registration;",W='return null;',V='");',U='!==undefined&&',T='var pa=this.getLayoutParent();if(pa)computed=pa.',S='var computed, old;',bc='var backup=computed;',bb="object",bx='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',by='if(computed===undefined)computed=null;',bz='\' of class \'',bA='if(value!==inherit)',bB='var computed, old=this.',bC='throw new Error("Property ',bD='if(',bE=" with incoming value '",bF='if(arguments.length!==0)prop.error(this,3,"',bG="reg.fireEvent(this, '",bT='if(computed===undefined||computed==inherit)computed=null;',bS='if((computed===undefined||computed===inherit)&&',bR="qx.core.Property";
qx.Class.define(bR,{statics:{__O:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__P:{"Object":true,"Array":true,"Map":true,"Function":true,"Date":true,"Node":true,"Element":true,"Document":true,"Window":true,"Event":true,"Class":true,"Mixin":true,"Interface":true,"Theme":true,"Font":true,"Decorator":true},$$inherit:cD,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bN,dispose:bJ,inheritable:bJ,nullable:bJ,themeable:bJ,refine:bJ,init:null,apply:bN,event:bN,check:null,transform:bN,deferredInit:bJ,validate:null},$$allowedGroupKeys:{name:bN,group:bb,mode:bN,themeable:bJ},$$inheritable:{},refresh:function(q){var parent=q.getLayoutParent();

if(parent){var t=q.constructor;
var v=this.$$store.inherit;
var u=this.$$store.init;
var s=this.$$method.refresh;
var w;
var r;

if(qx.core.Variant.isSet(cp,cs)){if(qx.core.Setting.get(bW)>1){q.debug("Update property inheritance");
}}
while(t){w=t.$$properties;

if(w){for(var name in this.$$inheritable){if(w[name]&&q[s[name]]){r=parent[v[name]];

if(r===undefined){r=parent[u[name]];
}
if(qx.core.Variant.isSet(cp,cs)){if(qx.core.Setting.get(bW)>2){q.debug("Updating property: "+name+" to '"+r+"'");
}}q[s[name]](r);
}}}t=t.superclass;
}}},attach:function(cL){var cM=cL.$$properties;

if(cM){for(var name in cM){this.attachMethods(cL,name,cM[name]);
}}cL.$$propertiesAttached=true;
},attachMethods:function(cJ,name,cK){cK.group?this.__Q(cJ,cK,name):this.__R(cJ,cK,name);
},__Q:function(di,dj,name){var dr=qx.lang.String.firstUp(name);
var dq=di.prototype;
var ds=dj.themeable===true;

if(qx.core.Variant.isSet("qx.debug","on")){if(qx.core.Setting.get("qx.propertyDebugLevel")>1){qx.log.Logger.debug("Generating property group: "+name);
}}var dt=[];
var dm=[];

if(ds){var dk=[];
var dp=[];
}var dn="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
dt.push(dn);

if(ds){dk.push(dn);
}
if(dj.mode=="shorthand"){var dl="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
dt.push(dl);

if(ds){dk.push(dl);
}}
for(var i=0,a=dj.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet("qx.debug","on")){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}dt.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
dm.push("this.",this.$$method.reset[a[i]],"();");

if(ds){if(qx.core.Variant.isSet("qx.debug","on")){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}dk.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
dp.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+dr;
dq[this.$$method.set[name]]=new Function(dt.join(""));
this.$$method.reset[name]="reset"+dr;
dq[this.$$method.reset[name]]=new Function(dm.join(""));

if(ds){this.$$method.setThemed[name]="setThemed"+dr;
dq[this.$$method.setThemed[name]]=new Function(dk.join(""));
this.$$method.resetThemed[name]="resetThemed"+dr;
dq[this.$$method.resetThemed[name]]=new Function(dp.join(""));
}},__R:function(cN,cO,name){var cQ=qx.lang.String.firstUp(name);
var cS=cN.prototype;

if(qx.core.Variant.isSet("qx.debug","on")){if(qx.core.Setting.get("qx.propertyDebugLevel")>1){qx.log.Logger.debug("Generating property wrappers: "+name);
}}if(cO.dispose===undefined&&typeof cO.check==="string"){cO.dispose=this.__P[cO.check]||qx.Class.isDefined(cO.check)||qx.Interface.isDefined(cO.check);
}var cR=this.$$method;
var cP=this.$$store;
cP.runtime[name]="$$runtime_"+name;
cP.user[name]="$$user_"+name;
cP.theme[name]="$$theme_"+name;
cP.init[name]="$$init_"+name;
cP.inherit[name]="$$inherit_"+name;
cP.useinit[name]="$$useinit_"+name;
cR.get[name]="get"+cQ;
cS[cR.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cN,name,"get");
};
cR.set[name]="set"+cQ;
cS[cR.set[name]]=function(dB){return qx.core.Property.executeOptimizedSetter(this,cN,name,"set",arguments);
};
cR.reset[name]="reset"+cQ;
cS[cR.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cN,name,"reset");
};

if(cO.inheritable||cO.apply||cO.event||cO.deferredInit){cR.init[name]="init"+cQ;
cS[cR.init[name]]=function(dC){return qx.core.Property.executeOptimizedSetter(this,cN,name,"init",arguments);
};
}
if(cO.inheritable){cR.refresh[name]="refresh"+cQ;
cS[cR.refresh[name]]=function(x){return qx.core.Property.executeOptimizedSetter(this,cN,name,"refresh",arguments);
};
}cR.setRuntime[name]="setRuntime"+cQ;
cS[cR.setRuntime[name]]=function(dA){return qx.core.Property.executeOptimizedSetter(this,cN,name,"setRuntime",arguments);
};
cR.resetRuntime[name]="resetRuntime"+cQ;
cS[cR.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cN,name,"resetRuntime");
};

if(cO.themeable){cR.setThemed[name]="setThemed"+cQ;
cS[cR.setThemed[name]]=function(o){return qx.core.Property.executeOptimizedSetter(this,cN,name,"setThemed",arguments);
};
cR.resetThemed[name]="resetThemed"+cQ;
cS[cR.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cN,name,"resetThemed");
};
}
if(cO.check==="Boolean"){cS["toggle"+cQ]=new Function("return this."+cR.set[name]+"(!this."+cR.get[name]+"())");
cS["is"+cQ]=new Function("return this."+cR.get[name]+"()");
}},__S:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(cT,cU,cV,cW,cX){var cY=cT.constructor.classname;
var da=G+cV+bf+cY+cz+this.$$method[cW][cV]+bE+cX+bi;
throw new Error(da+(this.__S[cU]||"Unknown reason: "+cU));
},__T:function(du,dv,name,dw,dx,dy){var dz=this.$$method[dw][name];
if(qx.core.Variant.isSet("qx.debug","on")){if(qx.core.Setting.get("qx.propertyDebugLevel")>1){qx.log.Logger.debug("Code["+this.$$method[dw][name]+"]: "+dx.join(""));
}try{dv[dz]=new Function("value",dx.join(""));
}catch(p){throw new Error("Malformed generated code to unwrap method: "+this.$$method[dw][name]+"\n"+dx.join(""));
}}else{dv[dz]=new Function("value",dx.join(""));
}if(qx.core.Variant.isSet("qx.aspects","on")){dv[dz]=qx.core.Aspect.wrap(du.classname+"."+dz,dv[dz],"property");
}qx.Bootstrap.setDisplayName(dv[dz],du.classname+".prototype",dz);
if(dy===undefined){return du[dz]();
}else if(qx.core.Variant.isSet("qx.debug","on")){return du[dz].apply(du,dy);
}else{return du[dz](dy[0]);
}},executeOptimizedGetter:function(db,dc,name,dd){var df=dc.$$properties[name];
var dh=dc.prototype;
var de=[];
var dg=this.$$store;
de.push(ck,dg.runtime[name],cj);
de.push(bM,dg.runtime[name],co);

if(df.inheritable){de.push(bO,dg.inherit[name],cj);
de.push(bM,dg.inherit[name],co);
de.push(cx);
}de.push(ck,dg.user[name],cj);
de.push(bM,dg.user[name],co);

if(df.themeable){de.push(bO,dg.theme[name],cj);
de.push(bM,dg.theme[name],co);
}
if(df.deferredInit&&df.init===undefined){de.push(bO,dg.init[name],cj);
de.push(bM,dg.init[name],co);
}de.push(cx);

if(df.init!==undefined){if(df.inheritable){de.push(E,dg.init[name],co);

if(df.nullable){de.push(bd);
}else if(df.init!==undefined){de.push(bM,dg.init[name],co);
}else{de.push(bp,name,bY,dc.classname,z);
}de.push(D);
}else{de.push(bM,dg.init[name],co);
}}else if(df.inheritable||df.nullable){de.push(W);
}else{de.push(bC,name,bY,dc.classname,z);
}return this.__T(db,dh,name,dd,de);
},executeOptimizedSetter:function(b,c,name,d,e){var m=c.$$properties[name];
var k=c.prototype;
var g=[];
var f=d===cg||d===cf||d===bQ||(d===ci&&m.init===undefined);
var h=d===cu||d===bI||d===ct;
var j=m.apply||m.event||m.inheritable;

if(d===bQ||d===ct){var n=this.$$store.runtime[name];
}else if(d===cf||d===bI){var n=this.$$store.theme[name];
}else if(d===ci){var n=this.$$store.init[name];
}else{var n=this.$$store.user[name];
}if(qx.core.Variant.isSet(cp,cs)){g.push(bU);

if(d===ci){g.push(K,name,bL,d,bK);
}
if(d===cv){}else if(f){g.push(cI,name,bL,d,bK);
g.push(ca,name,bL,d,bK);
}else{g.push(bF,name,bL,d,bK);
}}else{if(!m.nullable||m.check||m.inheritable){g.push(bU);
}if(d===cg){g.push(ca,name,bL,d,bK);
}}if(f){if(m.transform){g.push(bk,m.transform,bV);
}if(m.validate){if(typeof m.validate===bN){g.push(cl,m.validate,bV);
}else if(m.validate instanceof Function){g.push(c.classname,cq,name);
g.push(cB);
}}}if(j){if(f){g.push(ck,n,C);
}else if(h){g.push(ck,n,bg);
}}if(m.inheritable){g.push(P);
}if(qx.core.Variant.isSet(cp,cs)){if(f){if(!m.nullable){g.push(M,name,bL,d,bK);
}if(m.check!==undefined){g.push(B+name+bz+c.classname+bv);
if(m.nullable){g.push(Y);
}if(m.inheritable){g.push(bA);
}g.push(bD);

if(this.__O[m.check]!==undefined){g.push(cd,this.__O[m.check],A);
}else if(qx.Class.isDefined(m.check)){g.push(N,m.check,ce);
}else if(qx.Interface&&qx.Interface.isDefined(m.check)){g.push(bx,m.check,ce);
}else if(typeof m.check===bt){g.push(I,c.classname,cq,name);
g.push(cC);
}else if(typeof m.check===bN){g.push(cd,m.check,A);
}else if(m.check instanceof Array){g.push(be,c.classname,cq,name,bm);
}else{throw new Error("Could not add check to property "+name+" of class "+c.classname);
}g.push(F,name,bL,d,bK);
}}}
if(!j){if(d===bQ){g.push(cl,this.$$store.runtime[name],cm);
}else if(d===ct){g.push(ck,this.$$store.runtime[name],cj);
g.push(ch,this.$$store.runtime[name],co);
}else if(d===cg){g.push(cl,this.$$store.user[name],cm);
}else if(d===cu){g.push(ck,this.$$store.user[name],cj);
g.push(ch,this.$$store.user[name],co);
}else if(d===cf){g.push(cl,this.$$store.theme[name],cm);
}else if(d===bI){g.push(ck,this.$$store.theme[name],cj);
g.push(ch,this.$$store.theme[name],co);
}else if(d===ci&&f){g.push(cl,this.$$store.init[name],cm);
}}else{if(m.inheritable){g.push(bB,this.$$store.inherit[name],co);
}else{g.push(S);
}g.push(ck,this.$$store.runtime[name],bH);

if(d===bQ){g.push(cn,this.$$store.runtime[name],cm);
}else if(d===ct){g.push(ch,this.$$store.runtime[name],co);
g.push(ck,this.$$store.user[name],cj);
g.push(cn,this.$$store.user[name],co);
g.push(bO,this.$$store.theme[name],cj);
g.push(cn,this.$$store.theme[name],co);
g.push(bO,this.$$store.init[name],bH);
g.push(cn,this.$$store.init[name],co);
g.push(cl,this.$$store.useinit[name],cw);
g.push(bP);
}else{g.push(bX,this.$$store.runtime[name],co);
if(d===cg){g.push(cl,this.$$store.user[name],cm);
}else if(d===cu){g.push(ch,this.$$store.user[name],co);
}else if(d===cf){g.push(cl,this.$$store.theme[name],cm);
}else if(d===bI){g.push(ch,this.$$store.theme[name],co);
}else if(d===ci&&f){g.push(cl,this.$$store.init[name],cm);
}}g.push(bP);
g.push(bO,this.$$store.user[name],bH);

if(d===cg){if(!m.inheritable){g.push(cr,this.$$store.user[name],co);
}g.push(cn,this.$$store.user[name],cm);
}else if(d===cu){if(!m.inheritable){g.push(cr,this.$$store.user[name],co);
}g.push(ch,this.$$store.user[name],co);
g.push(ck,this.$$store.runtime[name],cj);
g.push(cn,this.$$store.runtime[name],co);
g.push(ck,this.$$store.theme[name],cj);
g.push(cn,this.$$store.theme[name],co);
g.push(bO,this.$$store.init[name],bH);
g.push(cn,this.$$store.init[name],co);
g.push(cl,this.$$store.useinit[name],cw);
g.push(bP);
}else{if(d===bQ){g.push(cn,this.$$store.runtime[name],cm);
}else if(m.inheritable){g.push(cn,this.$$store.user[name],co);
}else{g.push(bX,this.$$store.user[name],co);
}if(d===cf){g.push(cl,this.$$store.theme[name],cm);
}else if(d===bI){g.push(ch,this.$$store.theme[name],co);
}else if(d===ci&&f){g.push(cl,this.$$store.init[name],cm);
}}g.push(bP);
if(m.themeable){g.push(bO,this.$$store.theme[name],bH);

if(!m.inheritable){g.push(cr,this.$$store.theme[name],co);
}
if(d===bQ){g.push(cn,this.$$store.runtime[name],cm);
}else if(d===cg){g.push(cn,this.$$store.user[name],cm);
}else if(d===cf){g.push(cn,this.$$store.theme[name],cm);
}else if(d===bI){g.push(ch,this.$$store.theme[name],co);
g.push(ck,this.$$store.init[name],bH);
g.push(cn,this.$$store.init[name],co);
g.push(cl,this.$$store.useinit[name],cw);
g.push(bP);
}else if(d===ci){if(f){g.push(cl,this.$$store.init[name],cm);
}g.push(cn,this.$$store.theme[name],co);
}else if(d===cv){g.push(cn,this.$$store.theme[name],co);
}g.push(bP);
}g.push(bO,this.$$store.useinit[name],J);

if(!m.inheritable){g.push(cr,this.$$store.init[name],co);
}
if(d===ci){if(f){g.push(cn,this.$$store.init[name],cm);
}else{g.push(cn,this.$$store.init[name],co);
}}else if(d===cg||d===bQ||d===cf||d===cv){g.push(ch,this.$$store.useinit[name],co);

if(d===bQ){g.push(cn,this.$$store.runtime[name],cm);
}else if(d===cg){g.push(cn,this.$$store.user[name],cm);
}else if(d===cf){g.push(cn,this.$$store.theme[name],cm);
}else if(d===cv){g.push(cn,this.$$store.init[name],co);
}}g.push(bP);
if(d===cg||d===bQ||d===cf||d===ci){g.push(cA);

if(d===bQ){g.push(cn,this.$$store.runtime[name],cm);
}else if(d===cg){g.push(cn,this.$$store.user[name],cm);
}else if(d===cf){g.push(cn,this.$$store.theme[name],cm);
}else if(d===ci){if(f){g.push(cn,this.$$store.init[name],cm);
}else{g.push(cn,this.$$store.init[name],co);
}g.push(cl,this.$$store.useinit[name],cw);
}g.push(bP);
}}
if(m.inheritable){g.push(br);

if(d===cv){g.push(Q);
}else{g.push(T,this.$$store.inherit[name],co);
}g.push(bS);
g.push(cl,this.$$store.init[name],U);
g.push(cl,this.$$store.init[name],bs);
g.push(cn,this.$$store.init[name],co);
g.push(cl,this.$$store.useinit[name],cw);
g.push(L);
g.push(ch,this.$$store.useinit[name],ba);
g.push(bP);
g.push(cb);
g.push(cE);
g.push(R,this.$$store.inherit[name],co);
g.push(bP);
g.push(bh);
g.push(ch,this.$$store.inherit[name],co);
g.push(bj,this.$$store.inherit[name],cG);
g.push(bc);
if(m.init!==undefined&&d!==ci){g.push(cy,this.$$store.init[name],cc);
}else{g.push(y);
}g.push(bT);
}else if(j){if(d!==cg&&d!==bQ&&d!==cf){g.push(by);
}g.push(cb);
if(m.init!==undefined&&d!==ci){g.push(cy,this.$$store.init[name],cc);
}else{g.push(y);
}}if(j){if(m.apply){g.push(cl,m.apply,bn,name,V);
}if(m.event){g.push(X,bq,m.event,bl,bG,m.event,O,bu);
}if(m.inheritable&&k._getChildren){g.push(H);
g.push(cH,this.$$method.refresh[name],bw,this.$$method.refresh[name],cF);
g.push(bP);
}}if(f){g.push(bo);
}return this.__T(b,k,name,d,g,e);
}},settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var v="on",u="qx.debug",t="$$hash",s="qx.core.ObjectRegistry";
qx.Bootstrap.define(s,{statics:{inShutDown:false,__U:{},__V:0,__W:[],register:function(n){var q=this.__U;

if(!q){return;
}var p=n.$$hash;

if(p==null){var o=this.__W;

if(o.length>0){p=o.pop();
}else{p=(this.__V++).toString(36);
}n.$$hash=p;
}
if(qx.core.Variant.isSet(u,v)){if(!n.dispose){throw new Error("Invalid object: "+n);
}}q[p]=n;
},unregister:function(c){var d=c.$$hash;

if(d==null){return;
}var e=this.__U;

if(e&&e[d]){delete e[d];
this.__W.push(d);
}try{delete c.$$hash;
}catch(r){if(c.removeAttribute){c.removeAttribute(t);
}}},toHashCode:function(x){if(qx.core.Variant.isSet(u,v)){if(x==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+x);
}}var z=x.$$hash;

if(z!=null){return z;
}var y=this.__W;

if(y.length>0){z=y.pop();
}else{z=(this.__V++).toString(36);
}return x.$$hash=z;
},clearHashCode:function(A){if(qx.core.Variant.isSet(u,v)){if(A==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+A);
}}var B=A.$$hash;

if(B!=null){this.__W.push(B);
try{delete A.$$hash;
}catch(w){if(A.removeAttribute){A.removeAttribute(t);
}}}},fromHashCode:function(m){return this.__U[m]||null;
},shutdown:function(){this.inShutDown=true;
var g=this.__U;
var j=[];

for(var h in g){j.push(h);
}j.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var f,i=0,l=j.length;

while(true){try{for(;i<l;i++){h=j[i];
f=g[h];

if(f&&f.dispose){f.dispose();
}}}catch(k){qx.log.Logger.error(this,"Could not dispose object "+f.toString()+": "+k);

if(i!==0){continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__U;
},getRegistry:function(){return this.__U;
}}});
})();
(function(){var m="",l="!",k="'!",j="'",h="Expected '",g=",",f="Event (",d="' but found ",c="The value '",b="Expected value to be an array but found ",bm=") was fired.",bl="Expected value to be an integer >= 0 but found ",bk="' to be not equal with '",bj="' to '",bi="Expected object '",bh="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3', which cannot be converted to a CSS color!",bg="Called assertTrue with '",bf="Expected value to be a map but found ",be="The function did not raise an exception!",bd="Expected value to be undefined but found ",t="Expected value to be a regular expression but found ",u="' to implement the interface '",r="Expected value to be null but found ",s="Invalid argument 'type'",p="Called assert with 'false'",q="Expected value to be a string but found ",n="null",o="' but found '",z="' must must be a key of the map '",A="The String '",I="Expected value not to be undefined but found ",G="The raised exception does not have the expected type! ",Q=") not fired.",L="qx.core.Assert",Y="Expected value to be typeof object but found ",V="' (identical) but found '",C="' must have any of the values defined in the array '",bc="Expected value to be a number but found ",bb="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3' (rgb(%4))!",ba="Called assertFalse with '",B="]",E="Expected value to be a qooxdoo object but found ",F="' arguments.",H="Expected value to be a DOM element but found  '%1'!",J="Expected value not to be null but found ",M="Array[",S="' does not match the regular expression '",X="' to be not identical with '",v="' arguments but found '",w=", ",D="Expected value to be a boolean but found ",P="Expected value to be a qooxdoo widget but found ",O="Expected value '%1' to be in the range '%2'..'%3'!",N="Expected value to be typeof '",U="Expected value to be typeof function but found ",T="Expected value to be an integer but found ",K="Called fail().",R="The parameter 're' must be a string or a regular expression.",a="Expected value to be a number >= 0 but found ",W="Expected value to be instanceof '",x="Wrong number of arguments given. Expected '",y="object";
qx.Bootstrap.define(L,{statics:{__X:true,__Y:function(bQ,bR,bS){if(!bQ){var bT="Assertion error! "+bR+": "+bS;

if(this.__X){qx.log.Logger.error(bT);
}
if(qx.Class.isDefined("qx.core.AssertionError")){var bU=new qx.core.AssertionError(bR,bS);

if(this.__X){qx.log.Logger.error("Stack trace: \n"+bU.getStackTrace());
}throw bU;
}else{throw new Error(bT);
}}},__ba:function(co){var cp;

if(co===null){cp=n;
}else if(qx.lang.Type.isArray(co)&&co.length>10){cp=M+co.length+B;
}else{try{cp=co.toString();
}catch(e){cp=m;
}}return cp;
},assert:function(by,bz){this.__Y(by==true,bz||m,p);
},fail:function(cx){this.__Y(false,cx||m,K);
},assertTrue:function(dt,du){this.__Y(dt===true,du||m,bg+this.__ba(dt)+j);
},assertFalse:function(bV,bW){this.__Y(bV===false,bW||m,ba+this.__ba(bV)+j);
},assertEquals:function(cy,cz,cA){this.__Y(cy==cz,cA||m,h+this.__ba(cy)+o+this.__ba(cz)+k);
},assertNotEquals:function(cV,cW,cX){this.__Y(cV!=cW,cX||m,h+this.__ba(cV)+bk+this.__ba(cW)+k);
},assertIdentical:function(cQ,cR,cS){this.__Y(cQ===cR,cS||m,h+this.__ba(cQ)+V+this.__ba(cR)+k);
},assertNotIdentical:function(bn,bo,bp){this.__Y(bn!==bo,bp||m,h+this.__ba(bn)+X+this.__ba(bo)+k);
},assertNotUndefined:function(bX,bY){this.__Y(bX!==undefined,bY||m,I+this.__ba(bX)+l);
},assertUndefined:function(ce,cf){this.__Y(ce===undefined,cf||m,bd+this.__ba(ce)+l);
},assertNotNull:function(bq,br){this.__Y(bq!==null,br||m,J+this.__ba(bq)+l);
},assertNull:function(cI,cJ){this.__Y(cI===null,cJ||m,r+this.__ba(cI)+l);
},assertJsonEquals:function(dq,dr,ds){this.assertEquals(qx.util.Json.stringify(dq),qx.util.Json.stringify(dr),ds);
},assertMatch:function(bv,bw,bx){this.assertString(bv);
this.assert(qx.lang.Type.isRegExp(bw)||qx.lang.Type.isString(bw),R);
this.__Y(bv.search(bw)>=0?true:false,bx||m,A+bv+S+bw.toString()+k);
},assertArgumentsCount:function(cg,ch,ci,cj){var ck=cg.length;
this.__Y((ck>=ch&&ck<=ci),cj||m,x+ch+bj+ci+v+arguments.length+F);
},assertEventFired:function(cB,event,cC,cD,cE){var cG=false;
var cF=function(e){if(cD){cD.call(cB,e);
}cG=true;
};
var cH=cB.addListener(event,cF,cB);
cC.call();
this.__Y(cG===true,cE||m,f+event+Q);
cB.removeListenerById(cH);
},assertEventNotFired:function(dC,event,dD,dE){var dG=false;
var dF=function(e){dG=true;
};
var dH=dC.addListener(event,dF,dC);
dD.call();
this.__Y(dG===false,dE||m,f+event+bm);
dC.removeListenerById(dH);
},assertException:function(di,dj,dk,dl){var dj=dj||Error;
var dm;

try{this.__X=false;
di();
}catch(cn){dm=cn;
}finally{this.__X=true;
}
if(dm==null){this.__Y(false,dl||m,be);
}this.__Y(dm instanceof dj,dl||m,G+dj);

if(dk){this.assertMatch(dm.toString(),dk,dl);
}},assertInArray:function(bs,bt,bu){this.__Y(bt.indexOf(bs)!==-1,bu||m,c+this.__ba(bs)+C+bt.join(w)+j);
},assertArrayEquals:function(dv,dw,dx){this.assertArray(dv,dx);
this.assertArray(dw,dx);
this.assertEquals(dv.length,dw.length,dx);

for(var i=0;i<dv.length;i++){this.assertIdentical(dv[i],dw[i],dx);
}},assertKeyInMap:function(bH,bI,bJ){this.__Y(bI[bH]!==undefined,bJ||m,c+this.__ba(bH)+z+qx.util.Json.stringify(bI)+j);
},assertFunction:function(cu,cv){this.__Y(qx.lang.Type.isFunction(cu),cv||m,U+this.__ba(cu)+l);
},assertString:function(cT,cU){this.__Y(qx.lang.Type.isString(cT),cU||m,q+this.__ba(cT)+l);
},assertBoolean:function(cY,da){this.__Y(qx.lang.Type.isBoolean(cY),da||m,D+this.__ba(cY)+l);
},assertNumber:function(cM,cN){this.__Y(qx.lang.Type.isNumber(cM)&&isFinite(cM),cN||m,bc+this.__ba(cM)+l);
},assertPositiveNumber:function(dn,dp){this.__Y(qx.lang.Type.isNumber(dn)&&isFinite(dn)&&dn>=0,dp||m,a+this.__ba(dn)+l);
},assertInteger:function(cq,cr){this.__Y((qx.lang.Type.isNumber(cq)&&isFinite(cq)&&cq%1===0),cr||m,T+this.__ba(cq)+l);
},assertPositiveInteger:function(dg,dh){this.__Y((qx.lang.Type.isNumber(dg)&&isFinite(dg)&&dg%1===0&&dg>=0),dh||m,bl+this.__ba(dg)+l);
},assertInRange:function(dy,dz,dA,dB){this.__Y(dy>=dz&&dy<=dA,dB||m,qx.lang.String.format(O,[dy,dz,dA]));
},assertObject:function(cl,cm){this.__Y(cl!==null&&(qx.lang.Type.isObject(cl)||typeof cl===y),cm||m,Y+this.__ba(cl)+l);
},assertArray:function(bF,bG){this.__Y(qx.lang.Type.isArray(bF),bG||m,b+this.__ba(bF)+l);
},assertMap:function(de,df){this.__Y(qx.lang.Type.isObject(de),df||m,bf+this.__ba(de)+l);
},assertRegExp:function(cs,ct){this.__Y(qx.lang.Type.isRegExp(cs),ct||m,t+this.__ba(cs)+l);
},assertType:function(bC,bD,bE){this.assertString(bD,s);
this.__Y(typeof (bC)===bD,bE||m,N+bD+d+this.__ba(bC)+l);
},assertInstance:function(ca,cb,cc){var cd=cb.classname||cb+m;
this.__Y(ca instanceof cb,cc||m,W+cd+d+this.__ba(ca)+l);
},assertInterface:function(db,dc,dd){this.__Y(qx.Class.implementsInterface(db,dc),dd||m,bi+this.__ba(db)+u+dc+k);
},assertCssColor:function(bK,bL,bM){var bN=qx.util.ColorUtil;
var bP=bN.stringToRgb(bK);

try{var bO=bN.stringToRgb(bL);
}catch(cw){this.__Y(false,bM||m,qx.lang.String.format(bh,[bK,bP.join(g),this.__ba(bL)]));
}this.__Y(bP[0]==bO[0]&&bP[1]==bO[1]&&bP[2]==bO[2],bM||m,qx.lang.String.format(bb,[this.__ba(bK),bP.join(g),this.__ba(bL),bO.join(g)]));
},assertElement:function(cO,cP){this.__Y(qx.dom.Node.isElement(cO),cP||m,qx.lang.String.format(H,[this.__ba(cO)]));
},assertQxObject:function(cK,cL){this.__Y(cK instanceof qx.core.Object,cL||m,E+this.__ba(cK)+l);
},assertQxWidget:function(bA,bB){this.__Y(bA instanceof qx.ui.core.Widget,bB||m,P+this.__ba(bA)+l);
}}});
})();
(function(){var x="object",w="qx.debug",v="function",u="Mixin",t="qx.Mixin",s=".prototype",r="constructor",q="[Mixin ",p="]",o="members",k="destruct",n="events",m="on",j="properties",h="statics";
qx.Class.define(t,{statics:{define:function(name,e){if(e){if(e.include&&!(e.include instanceof Array)){e.include=[e.include];
}if(qx.core.Variant.isSet(w,m)){this.__bc(name,e);
}var g=e.statics?e.statics:{};
qx.Bootstrap.setDisplayNames(g,name);

for(var f in g){if(g[f] instanceof Function){g[f].$$mixin=g;
}}if(e.construct){g.$$constructor=e.construct;
qx.Bootstrap.setDisplayName(e.construct,name,r);
}
if(e.include){g.$$includes=e.include;
}
if(e.properties){g.$$properties=e.properties;
}
if(e.members){g.$$members=e.members;
qx.Bootstrap.setDisplayNames(e.members,name+s);
}
for(var f in g.$$members){if(g.$$members[f] instanceof Function){g.$$members[f].$$mixin=g;
}}
if(e.events){g.$$events=e.events;
}
if(e.destruct){g.$$destructor=e.destruct;
qx.Bootstrap.setDisplayName(e.destruct,name,k);
}}else{var g={};
}g.$$type=u;
g.name=name;
g.toString=this.genericToString;
g.basename=qx.Bootstrap.createNamespace(name,g);
this.$$registry[name]=g;
return g;
},checkCompatibility:function(y){var B=this.flatten(y);
var C=B.length;

if(C<2){return true;
}var F={};
var E={};
var D={};
var A;

for(var i=0;i<C;i++){A=B[i];

for(var z in A.events){if(D[z]){throw new Error('Conflict between mixin "'+A.name+'" and "'+D[z]+'" in member "'+z+'"!');
}D[z]=A.name;
}
for(var z in A.properties){if(F[z]){throw new Error('Conflict between mixin "'+A.name+'" and "'+F[z]+'" in property "'+z+'"!');
}F[z]=A.name;
}
for(var z in A.members){if(E[z]){throw new Error('Conflict between mixin "'+A.name+'" and "'+E[z]+'" in member "'+z+'"!');
}E[z]=A.name;
}}return true;
},isCompatible:function(b,c){var d=qx.Class.getMixins(c);
d.push(b);
return qx.Mixin.checkCompatibility(d);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(G){if(!G){return [];
}var H=G.concat();

for(var i=0,l=G.length;i<l;i++){if(G[i].$$includes){H.push.apply(H,this.flatten(G[i].$$includes));
}}return H;
},genericToString:function(){return q+this.name+p;
},$$registry:{},__bb:qx.core.Variant.select(w,{"on":{"include":x,"statics":x,"members":x,"properties":x,"events":x,"destruct":v,"construct":v},"default":null}),__bc:qx.core.Variant.select(w,{"on":function(name,I){var L=this.__bb;

for(var K in I){if(!L[K]){throw new Error('The configuration key "'+K+'" in mixin "'+name+'" is not allowed!');
}
if(I[K]==null){throw new Error('Invalid key "'+K+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(L[K]!==null&&typeof I[K]!==L[K]){throw new Error('Invalid type of key "'+K+'" in mixin "'+name+'"! The type of the key must be "'+L[K]+'"!');
}}var J=[h,o,j,n];

for(var i=0,l=J.length;i<l;i++){var K=J[i];

if(I[K]!==undefined&&(I[K] instanceof Array||I[K] instanceof RegExp||I[K] instanceof Date||I[K].classname!==undefined)){throw new Error('Invalid key "'+K+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(I.include){for(var i=0,a=I.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==u){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(I.include);
}},"default":function(){}})}});
})();
(function(){var bd="qx.core.MAssert";
qx.Mixin.define(bd,{members:{assert:function(bz,bA){qx.core.Assert.assert(bz,bA);
},fail:function(M){qx.core.Assert.fail(M);
},assertTrue:function(Q,R){qx.core.Assert.assertTrue(Q,R);
},assertFalse:function(y,z){qx.core.Assert.assertFalse(y,z);
},assertEquals:function(A,B,C){qx.core.Assert.assertEquals(A,B,C);
},assertNotEquals:function(be,bf,bg){qx.core.Assert.assertNotEquals(be,bf,bg);
},assertIdentical:function(i,j,k){qx.core.Assert.assertIdentical(i,j,k);
},assertNotIdentical:function(bJ,bK,bL){qx.core.Assert.assertNotIdentical(bJ,bK,bL);
},assertNotUndefined:function(Y,ba){qx.core.Assert.assertNotUndefined(Y,ba);
},assertUndefined:function(W,X){qx.core.Assert.assertUndefined(W,X);
},assertNotNull:function(F,G){qx.core.Assert.assertNotNull(F,G);
},assertNull:function(bB,bC){qx.core.Assert.assertNull(bB,bC);
},assertJsonEquals:function(n,o,p){qx.core.Assert.assertJsonEquals(n,o,p);
},assertMatch:function(bo,bp,bq){qx.core.Assert.assertMatch(bo,bp,bq);
},assertArgumentsCount:function(bk,bl,bm,bn){qx.core.Assert.assertArgumentsCount(bk,bl,bm,bn);
},assertEventFired:function(bD,event,bE,bF,bG){qx.core.Assert.assertEventFired(bD,event,bE,bF,bG);
},assertEventNotFired:function(bW,event,bX,bY){qx.core.Assert.assertEventNotFired(bW,event,bX,bY);
},assertException:function(bO,bP,bQ,bR){qx.core.Assert.assertException(bO,bP,bQ,bR);
},assertInArray:function(f,g,h){qx.core.Assert.assertInArray(f,g,h);
},assertArrayEquals:function(q,r,s){qx.core.Assert.assertArrayEquals(q,r,s);
},assertKeyInMap:function(N,O,P){qx.core.Assert.assertKeyInMap(N,O,P);
},assertFunction:function(K,L){qx.core.Assert.assertFunction(K,L);
},assertString:function(br,bs){qx.core.Assert.assertString(br,bs);
},assertBoolean:function(d,e){qx.core.Assert.assertBoolean(d,e);
},assertNumber:function(bH,bI){qx.core.Assert.assertNumber(bH,bI);
},assertPositiveNumber:function(bb,bc){qx.core.Assert.assertPositiveNumber(bb,bc);
},assertInteger:function(bU,bV){qx.core.Assert.assertInteger(bU,bV);
},assertPositiveInteger:function(bv,bw){qx.core.Assert.assertPositiveInteger(bv,bw);
},assertInRange:function(S,T,U,V){qx.core.Assert.assertInRange(S,T,U,V);
},assertObject:function(bS,bT){qx.core.Assert.assertObject(bS,bT);
},assertArray:function(bx,by){qx.core.Assert.assertArray(bx,by);
},assertMap:function(w,x){qx.core.Assert.assertMap(w,x);
},assertRegExp:function(bM,bN){qx.core.Assert.assertRegExp(bM,bN);
},assertType:function(bh,bi,bj){qx.core.Assert.assertType(bh,bi,bj);
},assertInstance:function(a,b,c){qx.core.Assert.assertInstance(a,b,c);
},assertInterface:function(H,I,J){qx.core.Assert.assertInterface(H,I,J);
},assertCssColor:function(t,u,v){qx.core.Assert.assertCssColor(t,u,v);
},assertElement:function(l,m){qx.core.Assert.assertElement(l,m);
},assertQxObject:function(D,E){qx.core.Assert.assertQxObject(D,E);
},assertQxWidget:function(bt,bu){qx.core.Assert.assertQxWidget(bt,bu);
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var b="qx.log.appender.RingBuffer";
qx.Bootstrap.define(b,{construct:function(g){this.__bd=[];
this.setMaxMessages(g||50);
},members:{__be:0,__bd:null,__bf:50,setMaxMessages:function(a){this.__bf=a;
this.clearHistory();
},getMaxMessages:function(){return this.__bf;
},process:function(h){var i=this.getMaxMessages();

if(this.__bd.length<i){this.__bd.push(h);
}else{this.__bd[this.__be++]=h;

if(this.__be>=i){this.__be=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__bd.length){c=this.__bd.length;
}
if(this.__bd.length==this.getMaxMessages()){var e=this.__be-1;
}else{e=this.__bd.length-1;
}var d=e-c+1;

if(d<0){d+=this.__bd.length;
}var f;

if(d<=e){f=this.__bd.slice(d,e+1);
}else{f=this.__bd.slice(d,this.__bd.length).concat(this.__bd.slice(0,e+1));
}return f;
},clearHistory:function(){this.__bd=[];
this.__be=0;
}}});
})();
(function(){var B="unknown",A="qx.debug",z="on",y="node",x="error",w="...(+",v="array",u=")",t="info",s="instance",Y="string",X="null",W="class",V="number",U="stringify",T="]",S="function",R="boolean",Q="debug",P="map",I="undefined",J="qx.log.Logger",G=")}",H="#",E="warn",F="document",C="{...(",D="[",K="text[",L="[...(",N="\n",M=")]",O="object";
qx.Bootstrap.define(J,{statics:{__bg:Q,setLevel:function(bf){this.__bg=bf;
},getLevel:function(){return this.__bg;
},setTreshold:function(bc){this.__bj.setMaxMessages(bc);
},getTreshold:function(){return this.__bj.getMaxMessages();
},__bh:{},__bi:0,register:function(bt){if(bt.$$id){return;
}var bu=this.__bi++;
this.__bh[bu]=bt;
bt.$$id=bu;
var bv=this.__bj.getAllLogEvents();

for(var i=0,l=bv.length;i<l;i++){bt.process(bv[i]);
}},unregister:function(n){var o=n.$$id;

if(o==null){return;
}delete this.__bh[o];
delete n.$$id;
},debug:function(bF,bG){this.__bl(Q,arguments);
},info:function(ba,bb){this.__bl(t,arguments);
},warn:function(d,e){this.__bl(E,arguments);
},error:function(k,m){this.__bl(x,arguments);
},trace:function(f){this.__bl(t,[f,qx.dev.StackTrace.getStackTrace().join(N)]);
},deprecatedMethodWarning:function(g,h){if(qx.core.Variant.isSet(A,z)){var j=qx.lang.Function.getName(g);
this.warn("The method '"+j+"' is deprecated: "+(h||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(p,q){if(qx.core.Variant.isSet(A,z)){var r=p.self?p.self.classname:B;
this.warn("The method class '"+r+"' is deprecated: "+(q||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(a,event,b){if(qx.core.Variant.isSet(A,z)){var c=a.self?a.self.classname:B;
this.warn("The event '"+(event||"unknown")+"' from class '"+c+"' is deprecated: "+(b||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(bq,br){if(qx.core.Variant.isSet(A,z)){var bs=bq?bq.name:B;
this.warn("The mixin '"+bs+"' is deprecated: "+(br||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},clear:function(){this.__bj.clearHistory();
},__bj:new qx.log.appender.RingBuffer(50),__bk:{debug:0,info:1,warn:2,error:3},__bl:function(bg,bh){var bm=this.__bk;

if(bm[bg]<bm[this.__bg]){return;
}var bj=bh.length<2?null:bh[0];
var bl=bj?1:0;
var bi=[];

for(var i=bl,l=bh.length;i<l;i++){bi.push(this.__bn(bh[i],true));
}var bn=new Date;
var bo={time:bn,offset:bn-qx.Bootstrap.LOADSTART,level:bg,items:bi,win:window};
if(bj){if(bj instanceof qx.core.Object){bo.object=bj.$$hash;
}else if(bj.$$type){bo.clazz=bj;
}}this.__bj.process(bo);
var bp=this.__bh;

for(var bk in bp){bp[bk].process(bo);
}},__bm:function(bd){if(bd===undefined){return I;
}else if(bd===null){return X;
}
if(bd.$$type){return W;
}var be=typeof bd;

if(be===S||be==Y||be===V||be===R){return be;
}else if(be===O){if(bd.nodeType){return y;
}else if(bd.classname){return s;
}else if(bd instanceof Array){return v;
}else if(bd instanceof Error){return x;
}else{return P;
}}
if(bd.toString){return U;
}return B;
},__bn:function(bw,bx){var bE=this.__bm(bw);
var bA=B;
var bz=[];

switch(bE){case X:case I:bA=bE;
break;
case Y:case V:case R:bA=bw;
break;
case y:if(bw.nodeType===9){bA=F;
}else if(bw.nodeType===3){bA=K+bw.nodeValue+T;
}else if(bw.nodeType===1){bA=bw.nodeName.toLowerCase();

if(bw.id){bA+=H+bw.id;
}}else{bA=y;
}break;
case S:bA=qx.lang.Function.getName(bw)||bE;
break;
case s:bA=bw.basename+D+bw.$$hash+T;
break;
case W:case U:bA=bw.toString();
break;
case x:bz=qx.dev.StackTrace.getStackTraceFromError(bw);
bA=bw.toString();
break;
case v:if(bx){bA=[];

for(var i=0,l=bw.length;i<l;i++){if(bA.length>20){bA.push(w+(l-i)+u);
break;
}bA.push(this.__bn(bw[i],false));
}}else{bA=L+bw.length+M;
}break;
case P:if(bx){var by;
var bD=[];

for(var bC in bw){bD.push(bC);
}bD.sort();
bA=[];

for(var i=0,l=bD.length;i<l;i++){if(bA.length>20){bA.push(w+(l-i)+u);
break;
}bC=bD[i];
by=this.__bn(bw[bC],false);
by.key=bC;
bA.push(by);
}}else{var bB=0;

for(var bC in bw){bB++;
}bA=C+bB+G;
}break;
}return {type:bE,text:bA,trace:bz};
}}});
})();
(function(){var bc="qx.debug",bb="on",ba="set",Y="qx.disposerDebugLevel",X="get",W="reset",V="qx.core.Object",U="]",T="[",S="$$user_",P="__bp",R="object",Q="Object";
qx.Class.define(V,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:Q},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+T+this.$$hash+U;
},base:function(bk,bl){if(arguments.length===1){return bk.callee.base.call(this);
}else{return bk.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(I){return I.callee.self;
},clone:function(){var bw=this.constructor;
var bv=new bw;
var by=qx.Class.getProperties(bw);
var bx=qx.core.Property.$$store.user;
var bz=qx.core.Property.$$method.set;
var name;
for(var i=0,l=by.length;i<l;i++){name=by[i];

if(this.hasOwnProperty(bx[name])){bv[bz[name]](this[bx[name]]);
}}return bv;
},serialize:function(){var c=this.constructor;
var f=qx.Class.getProperties(c);
var g=qx.core.Property.$$store.user;
var name,b;
var d={classname:c.classname,properties:{}};
for(var i=0,l=f.length;i<l;i++){name=f[i];

if(this.hasOwnProperty(g[name])){b=this[g[name]];

if(b instanceof qx.core.Object){d.properties[name]={$$hash:b.$$hash};
}else{d.properties[name]=b;
}}}return d;
},set:function(w,x){var z=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(w)){if(!this[z[w]]){if(this[ba+qx.lang.String.firstUp(w)]!=undefined){this[ba+qx.lang.String.firstUp(w)](x);
return;
}
if(qx.core.Variant.isSet(bc,bb)){this.error("No such property: "+w);
return this;
}}return this[z[w]](x);
}else{for(var y in w){if(!this[z[y]]){if(this[ba+qx.lang.String.firstUp(y)]!=undefined){this[ba+qx.lang.String.firstUp(y)](w[y]);
continue;
}
if(qx.core.Variant.isSet(bc,bb)){this.error("No such property: "+y);
return this;
}}this[z[y]](w[y]);
}return this;
}},get:function(h){var j=qx.core.Property.$$method.get;

if(!this[j[h]]){if(this[X+qx.lang.String.firstUp(h)]!=undefined){return this[X+qx.lang.String.firstUp(h)]();
}
if(qx.core.Variant.isSet(bc,bb)){this.error("No such property: "+h);
return this;
}}return this[j[h]]();
},reset:function(bB){var bC=qx.core.Property.$$method.reset;

if(!this[bC[bB]]){if(this[W+qx.lang.String.firstUp(bB)]!=undefined){this[W+qx.lang.String.firstUp(bB)]();
return;
}
if(qx.core.Variant.isSet(bc,bb)){this.error("No such property: "+bB);
return this;
}}this[bC[bB]]();
},__bo:qx.event.Registration,addListener:function(J,K,self,L){if(!this.$$disposed){return this.__bo.addListener(this,J,K,self,L);
}return null;
},addListenerOnce:function(bq,br,self,bs){var bt=function(e){br.call(self||this,e);
this.removeListener(bq,bt,this,bs);
};
return this.addListener(bq,bt,this,bs);
},removeListener:function(bH,bI,self,bJ){if(!this.$$disposed){return this.__bo.removeListener(this,bH,bI,self,bJ);
}return false;
},removeListenerById:function(bm){if(!this.$$disposed){return this.__bo.removeListenerById(this,bm);
}return false;
},hasListener:function(E,F){return this.__bo.hasListener(this,E,F);
},dispatchEvent:function(H){if(!this.$$disposed){return this.__bo.dispatchEvent(this,H);
}return true;
},fireEvent:function(t,u,v){if(!this.$$disposed){return this.__bo.fireEvent(this,t,u,v);
}return true;
},fireNonBubblingEvent:function(bn,bo,bp){if(!this.$$disposed){return this.__bo.fireNonBubblingEvent(this,bn,bo,bp);
}return true;
},fireDataEvent:function(A,B,C,D){if(!this.$$disposed){if(C===undefined){C=null;
}return this.__bo.fireNonBubblingEvent(this,A,qx.event.type.Data,[B,C,!!D]);
}return true;
},__bp:null,setUserData:function(bd,be){if(!this.__bp){this.__bp={};
}this.__bp[bd]=be;
},getUserData:function(bD){if(!this.__bp){return null;
}var bE=this.__bp[bD];
return bE===undefined?null:bE;
},__bq:qx.log.Logger,debug:function(N){this.__bq.debug(this,N);
},info:function(bA){this.__bq.info(this,bA);
},warn:function(G){this.__bq.warn(this,G);
},error:function(O){this.__bq.error(this,O);
},trace:function(){this.__bq.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(bc,bb)){if(qx.core.Setting.get(Y)>1){qx.log.Logger.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var bh=this.constructor;
var bf;

while(bh.superclass){if(bh.$$destructor){bh.$$destructor.call(this);
}if(bh.$$includes){bf=bh.$$flatIncludes;

for(var i=0,l=bf.length;i<l;i++){if(bf[i].$$destructor){bf[i].$$destructor.call(this);
}}}bh=bh.superclass;
}var bj=qx.Class.getProperties(this.constructor);

for(var i=0,l=bj.length;i<l;i++){delete this[S+bj[i]];
}if(qx.core.Variant.isSet(bc,bb)){if(qx.core.Setting.get(Y)>0){var bi,bg;

for(bi in this){bg=this[bi];
if(bg!==null&&typeof bg===R&&!(qx.lang.Type.isString(bg))){if(this.constructor.prototype[bi]!=null){continue;
}qx.log.Logger.warn(this,"Missing destruct definition for '"+bi+"' in "+this.classname+"["+this.toHashCode()+"]: "+bg);
delete this[bi];
}}}}},_disposeFields:function(bu){qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(M){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(bG){qx.util.DisposeUtil.disposeArray(this,bG);
},_disposeMap:function(bF){qx.util.DisposeUtil.disposeMap(this,bF);
}},settings:{"qx.disposerDebugLevel":0},defer:function(a){if(qx.core.Variant.isSet(bc,bb)){qx.Class.include(a,qx.core.MAssert);
}},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(P);
var n=this.constructor;
var r;
var s=qx.core.Property.$$store;
var p=s.user;
var q=s.theme;
var k=s.inherit;
var o=s.useinit;
var m=s.init;

while(n){r=n.$$properties;

if(r){for(var name in r){if(r[name].dispose){this[p[name]]=this[q[name]]=this[k[name]]=this[o[name]]=this[m[name]]=undefined;
}}}n=n.superclass;
}}});
})();
(function(){var C="",B="g",A="0",z='\\$1',y="%",x='-',w="qx.lang.String",v=' ',u='\n',t="undefined";
qx.Bootstrap.define(w,{statics:{camelCase:function(E){return E.replace(/\-([a-z])/g,function(J,K){return K.toUpperCase();
});
},hyphenate:function(m){return m.replace(/[A-Z]/g,function(n){return (x+n.charAt(0).toLowerCase());
});
},capitalize:function(e){return e.replace(/\b[a-z]/g,function(o){return o.toUpperCase();
});
},clean:function(F){return this.trim(F.replace(/\s+/g,v));
},trimLeft:function(D){return D.replace(/^\s+/,C);
},trimRight:function(Q){return Q.replace(/\s+$/,C);
},trim:function(s){return s.replace(/^\s+|\s+$/g,C);
},startsWith:function(L,M){return L.indexOf(M)===0;
},endsWith:function(G,H){return G.substring(G.length-H.length,G.length)===H;
},pad:function(N,length,O){if(typeof O===t){O=A;
}var P=C;

for(var i=N.length;i<length;i++){P+=O;
}return P+N;
},firstUp:function(a){return a.charAt(0).toUpperCase()+a.substr(1);
},firstLow:function(I){return I.charAt(0).toLowerCase()+I.substr(1);
},contains:function(p,q){return p.indexOf(q)!=-1;
},format:function(b,c){var d=b;

for(var i=0;i<c.length;i++){d=d.replace(new RegExp(y+(i+1),B),c[i]);
}return d;
},escapeRegexpChars:function(k){return k.replace(/([.*+?^${}()|[\]\/\\])/g,z);
},toArray:function(r){return r.split(/\B|\b/g);
},stripTags:function(l){return l.replace(/<\/?[^>]+>/gi,C);
},stripScripts:function(f,g){var j=C;
var h=f.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){j+=arguments[1]+u;
return C;
});

if(g===true){qx.lang.Function.globalEval(j);
}return h;
}}});
})();
(function(){var P="qx.debug",O="object",N="Interface",M="on",L="string",K="function",J="Boolean",I="qx.Interface",H="events",G="toggle",A="properties",F="]",D="members",z="number",y="boolean",C="is",B="[Interface ",E="statics";
qx.Class.define(I,{statics:{define:function(name,q){if(q){if(q.extend&&!(q.extend instanceof Array)){q.extend=[q.extend];
}if(qx.core.Variant.isSet(P,M)){this.__bx(name,q);
}var r=q.statics?q.statics:{};
if(q.extend){r.$$extends=q.extend;
}
if(q.properties){r.$$properties=q.properties;
}
if(q.members){r.$$members=q.members;
}
if(q.events){r.$$events=q.events;
}}else{var r={};
}r.$$type=N;
r.name=name;
r.toString=this.genericToString;
r.basename=qx.Bootstrap.createNamespace(name,r);
qx.Interface.$$registry[name]=r;
return r;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(V){if(!V){return [];
}var W=V.concat();

for(var i=0,l=V.length;i<l;i++){if(V[i].$$extends){W.push.apply(W,this.flatten(V[i].$$extends));
}}return W;
},__br:function(f,g,h,j){var o=h.$$members;

if(o){for(var n in o){if(qx.lang.Type.isFunction(o[n])){var m=this.__bs(g,n);
var k=m||qx.lang.Type.isFunction(f[n]);

if(!k){throw new Error('Implementation of method "'+n+'" is missing in class "'+g.classname+'" required by interface "'+h.name+'"');
}var p=j===true&&!m&&!qx.Class.hasInterface(g,h);

if(p){f[n]=this.__bv(h,f[n],n,o[n]);
}}else{if(typeof f[n]===undefined){if(typeof f[n]!==K){throw new Error('Implementation of member "'+n+'" is missing in class "'+g.classname+'" required by interface "'+h.name+'"');
}}}}}},__bs:function(s,t){var x=t.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!x){return false;
}var u=qx.lang.String.firstLow(x[2]);
var v=qx.Class.hasProperty(s,u);

if(!v){return false;
}var w=x[0]==C||x[0]==G;

if(w){return qx.Class.getPropertyDefinition(s,u).check==J;
}return true;
},__bt:function(bb,bc){if(bc.$$properties){for(var bd in bc.$$properties){if(!qx.Class.hasProperty(bb,bd)){throw new Error('The property "'+bd+'" is not supported by Class "'+bb.classname+'"!');
}}}},__bu:function(X,Y){if(Y.$$events){for(var ba in Y.$$events){if(!qx.Class.supportsEvent(X,ba)){throw new Error('The event "'+ba+'" is not supported by Class "'+X.classname+'"!');
}}}},assertObject:function(bi,bj){var bl=bi.constructor;
this.__br(bi,bl,bj,false);
this.__bt(bl,bj);
this.__bu(bl,bj);
var bk=bj.$$extends;

if(bk){for(var i=0,l=bk.length;i<l;i++){this.assertObject(bi,bk[i]);
}}},assert:function(b,c,d){this.__br(b.prototype,b,c,d);
this.__bt(b,c);
this.__bu(b,c);
var e=c.$$extends;

if(e){for(var i=0,l=e.length;i<l;i++){this.assert(b,e[i],d);
}}},genericToString:function(){return B+this.name+F;
},$$registry:{},__bv:qx.core.Variant.select(P,{"on":function(Q,R,S,T){function U(){T.apply(this,arguments);
return R.apply(this,arguments);
}R.wrapper=U;
return U;
},"default":function(){}}),__bw:qx.core.Variant.select(P,{"on":{"extend":O,"statics":O,"members":O,"properties":O,"events":O},"default":null}),__bx:qx.core.Variant.select(P,{"on":function(name,be){if(qx.core.Variant.isSet(P,M)){var bh=this.__bw;

for(var bg in be){if(bh[bg]===undefined){throw new Error('The configuration key "'+bg+'" in class "'+name+'" is not allowed!');
}
if(be[bg]==null){throw new Error("Invalid key '"+bg+"' in interface '"+name+"'! The value is undefined/null!");
}
if(bh[bg]!==null&&typeof be[bg]!==bh[bg]){throw new Error('Invalid type of key "'+bg+'" in interface "'+name+'"! The type of the key must be "'+bh[bg]+'"!');
}}var bf=[E,D,A,H];

for(var i=0,l=bf.length;i<l;i++){var bg=bf[i];

if(be[bg]!==undefined&&(be[bg] instanceof Array||be[bg] instanceof RegExp||be[bg] instanceof Date||be[bg].classname!==undefined)){throw new Error('Invalid key "'+bg+'" in interface "'+name+'"! The value needs to be a map!');
}}if(be.extend){for(var i=0,a=be.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==N){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(be.statics){for(var bg in be.statics){if(bg.toUpperCase()!==bg){throw new Error('Invalid key "'+bg+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof be.statics[bg]){case y:case L:case z:break;
default:throw new Error('Invalid key "'+bg+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var h="qx.globalErrorHandling",g="on",f="qx.event.GlobalError";
qx.Bootstrap.define(f,{statics:{setErrorHandler:function(k,l){this.__by=k||null;
this.__bz=l||window;

if(qx.core.Setting.get(h)===g){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__bA,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__bA:function(b,c,d){if(this.__by){this.handleError(new qx.core.WindowError(b,c,d));
return true;
}},observeMethod:function(a){if(qx.core.Setting.get(h)===g){var self=this;
return function(){if(!self.__by){return a.apply(this,arguments);
}
try{return a.apply(this,arguments);
}catch(i){self.handleError(i);
}};
}else{return a;
}},handleError:function(j){if(this.__by){this.__by.call(this.__bz,j);
}}},defer:function(e){qx.core.Setting.define(h,g);
e.setErrorHandler(null,null);
}});
})();
(function(){var u="load",t="unload",s="qx.client",r="ready",q="mshtml",p="qx.event.handler.Application",o="complete",n="gecko|opera|webkit",m="left",l="_window",j="DOMContentLoaded",k="shutdown";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){arguments.callee.base.call(this);
this._window=y.getWindow();
this.__bB=false;
this.__bC=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bD:false,onScriptLoaded:function(){this.__bD=true;
var z=qx.event.handler.Application.$$instance;

if(z){z.__bG();
}}},members:{canHandleEvent:function(w,x){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){},__bE:null,__bB:null,__bC:null,__bF:null,__bG:function(){var v=qx.event.handler.Application;
if(!this.__bE&&this.__bB&&v.__bD){this.__bE=true;
qx.event.Registration.fireEvent(this._window,r);
}},isApplicationReady:function(){return this.__bE;
},_initObserver:function(){if(qx.$$domReady||document.readyState==o){this.__bB=true;
this.__bG();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(s,n)){qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(s,q)){var c=function(){try{document.documentElement.doScroll(m);
this._onNativeLoadWrapped();
}catch(a){window.setTimeout(c,100);
}};
c();
}qx.bom.Event.addNativeListener(this._window,u,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,t,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,u,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,t,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__bB=true;
this.__bG();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__bF){this.__bF=true;

try{qx.event.Registration.fireEvent(this._window,k);
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._disposeFields(l);
},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var g="_window",f="_manager",d="qx.event.handler.Window";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){arguments.callee.base.call(this);
this._manager=u;
this._window=u.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(m,n){},registerEvent:function(j,k,l){},unregisterEvent:function(a,b,c){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var w=qx.event.handler.Window.SUPPORTED_TYPES;

for(var v in w){qx.bom.Event.addNativeListener(this._window,v,this._onNativeWrapper);
}},_stopWindowObserver:function(){var i=qx.event.handler.Window.SUPPORTED_TYPES;

for(var h in i){qx.bom.Event.removeNativeListener(this._window,h,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;
var t=q.document;
var r=t.documentElement;
var p=e.target||e.srcElement;

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._disposeFields(f,g);
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(f){this._manager=f;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(g,event,h){return !event.getBubbles();
},dispatchEvent:function(b,event,c){event.setEventPhase(qx.event.type.Event.AT_TARGET);
var d=this._manager.getListeners(b,c,false);

if(d){for(var i=0,l=d.length;i<l;i++){var e=d[i].context||b;
d[i].handler.call(e,event);
}}}},defer:function(j){qx.event.Registration.addDispatcher(j);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__bI||null;
},__bH:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var h=qx.core.Setting.get(d);
var i=qx.Class.getByName(h);

if(i){this.__bI=new i;
var g=new Date;
this.__bI.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__bI.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+h);
}},__bJ:function(e){var j=this.__bI;

if(j){e.setReturnValue(j.close());
}},__bK:function(){var l=this.__bI;

if(l){l.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.__bH,k);
qx.event.Registration.addListener(window,a,k.__bK,k);
qx.event.Registration.addListener(window,c,k.__bJ,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var c="qx.locale.MTranslation";
qx.Mixin.define(c,{members:{tr:function(d,e){var f=qx.locale.Manager;

if(f){return f.tr.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(g,h,i){var j=qx.locale.Manager;

if(j){return j.trc.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(a){var b=qx.locale.Manager;

if(b){return b.marktr.apply(b,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var d="abstract",c="__bL",b="qx.application.AbstractGui";
qx.Class.define(b,{type:d,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__bL:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__bL;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__bL=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this._disposeFields(c);
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var g="demobrowser.Application",f="viewer",e="qx.debug",d="demobrowser/css/sourceview.css",c="script/demodata.js",b="on",a="demobrowser/css/style.css";
qx.Class.define(g,{extend:qx.application.Standalone,construct:function(){arguments.callee.base.call(this);
qx.bom.Stylesheet.includeFile(a);
qx.bom.Stylesheet.includeFile(d);
},members:{main:function(){arguments.callee.base.call(this);
if(qx.core.Variant.isSet(e,b)){qx.log.appender.Native;
qx.log.appender.Console;
}this.viewer=new demobrowser.DemoBrowser;
this.getRoot().add(this.viewer,{edge:0});
},finalize:function(){arguments.callee.base.call(this);
this.viewer.dataLoader(c);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var v="emulated",u="native",t='"',s="qx.lang.Core",r="\\\\",q="\\\"",p="[object Error]";
qx.Bootstrap.define(s,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==p)?v:u,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?u:v,{"native":Array.prototype.indexOf,"emulated":function(w,x){if(x==null){x=0;
}else if(x<0){x=Math.max(0,this.length+x);
}
for(var i=x;i<this.length;i++){if(this[i]===w){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?u:v,{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?u:v,{"native":Array.prototype.forEach,"emulated":function(g,h){var l=this.length;

for(var i=0;i<l;i++){var j=this[i];

if(j!==undefined){g.call(h||window,j,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?u:v,{"native":Array.prototype.filter,"emulated":function(y,z){var A=[];
var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){if(y.call(z||window,B,i,this)){A.push(this[i]);
}}}return A;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?u:v,{"native":Array.prototype.map,"emulated":function(k,m){var n=[];
var l=this.length;

for(var i=0;i<l;i++){var o=this[i];

if(o!==undefined){n[i]=k.call(m||window,o,i,this);
}}return n;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?u:v,{"native":Array.prototype.some,"emulated":function(d,e){var l=this.length;

for(var i=0;i<l;i++){var f=this[i];

if(f!==undefined){if(d.call(e||window,f,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?u:v,{"native":Array.prototype.every,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(!a.call(b||window,c,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?u:v,{"native":String.prototype.quote,"emulated":function(){return t+this.replace(/\\/g,r).replace(/\"/g,q)+t;
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
(function(){var q=":",p="qx.client",o="anonymous",n="...",m="qx.dev.StackTrace",l="",k="\n",j="/source/class/",h=".";
qx.Class.define(m,{statics:{getStackTrace:qx.core.Variant.select(p,{"gecko":function(){try{throw new Error();
}catch(E){var y=this.getStackTraceFromError(E);
qx.lang.Array.removeAt(y,0);
var w=this.getStackTraceFromCaller(arguments);
var u=w.length>y.length?w:y;

for(var i=0;i<Math.min(w.length,y.length);i++){var v=w[i];

if(v.indexOf(o)>=0){continue;
}var C=v.split(q);

if(C.length!=2){continue;
}var A=C[0];
var t=C[1];
var s=y[i];
var D=s.split(q);
var z=D[0];
var r=D[1];

if(qx.Class.getByName(z)){var x=z;
}else{x=A;
}var B=x+q;

if(t){B+=t+q;
}B+=r;
u[i]=B;
}return u;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var O;

try{O.bar();
}catch(a){var P=this.getStackTraceFromError(a);
qx.lang.Array.removeAt(P,0);
return P;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(p,{"opera":function(bc){return [];
},"default":function(b){var g=[];
var f=qx.lang.Function.getCaller(b);
var c={};

while(f){var d=qx.lang.Function.getName(f);
g.push(d);

try{f=f.caller;
}catch(M){break;
}
if(!f){break;
}var e=qx.core.ObjectRegistry.toHashCode(f);

if(c[e]){g.push(n);
break;
}c[e]=f;
}return g;
}}),getStackTraceFromError:qx.core.Variant.select(p,{"gecko":function(Q){if(!Q.stack){return [];
}var W=/@(.+):(\d+)$/gm;
var R;
var S=[];

while((R=W.exec(Q.stack))!=null){var T=R[1];
var V=R[2];
var U=this.__bM(T);
S.push(U+q+V);
}return S;
},"webkit":function(N){if(N.sourceURL&&N.line){return [this.__bM(N.sourceURL)+q+N.line];
}else{return [];
}},"opera":function(F){if(F.message.indexOf("Backtrace:")<0){return [];
}var H=[];
var I=qx.lang.String.trim(F.message.split("Backtrace:")[1]);
var J=I.split(k);

for(var i=0;i<J.length;i++){var G=J[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(G&&G.length>=2){var L=G[1];
var K=this.__bM(G[2]);
H.push(K+q+L);
}}return H;
},"default":function(){return [];
}}),__bM:function(X){var bb=j;
var Y=X.indexOf(bb);
var ba=(Y==-1)?X:X.substring(Y+bb.length).replace(/\//g,h).replace(/\.js$/,l);
return ba;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(f,g){},splice:function(h,i,j){},contains:function(e){},getLength:function(){},toArray:function(){}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bN=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bN:null,message:null,getComment:function(){return this.__bN;
},toString:function(){return this.__bN+c+this.message;
}}});
})();
(function(){var c="qx.core.AssertionError";
qx.Class.define(c,{extend:qx.type.BaseError,construct:function(a,b){qx.type.BaseError.call(this,a,b);
this.__bO=qx.dev.StackTrace.getStackTrace();
},members:{__bO:null,getStackTrace:function(){return this.__bO;
}}});
})();
(function(){var M=",",L="",K="string",J="null",I='"',H="qx.jsonDebugging",G='\\u00',F="new Date(Date.UTC(",E=")",D='\\\\',bk='\\f',bj="__bS",bi='\\"',bh="))",bg="__bT",bf="}",be='(',bd=":",bc="{",bb='\\r',T="__cc",U='\\t',R="(",S="]",P="[",Q="__bR",N="qx.jsonEncodeUndefined",O='\\b',V="__bU",W="qx.util.Json",Y="__cd",X=')',ba='\\n';
qx.Class.define(W,{statics:{__bP:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__bQ:{"function":Q,"boolean":bj,"number":bg,"string":V,"object":T,"undefined":Y},__bR:function(bu,bv){return String(bu);
},__bS:function(q,r){return String(q);
},__bT:function(bz,bA){return isFinite(bz)?String(bz):J;
},__bU:function(z,A){var B;

if(/["\\\x00-\x1f]/.test(z)){B=z.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__bW);
}else{B=z;
}return I+B+I;
},__bV:{'\b':O,'\t':U,'\n':ba,'\f':bk,'\r':bb,'"':bi,'\\':D},__bW:function(a,b){var C=qx.util.Json.__bV[b];

if(C){return C;
}C=b.charCodeAt();
return G+Math.floor(C/16).toString(16)+(C%16).toString(16);
},__bX:function(s,t){var v=[],y=true,x,u;
var w=qx.util.Json.__cf;
v.push(P);

if(w){qx.util.Json.__bY+=qx.util.Json.BEAUTIFYING_INDENT;
v.push(qx.util.Json.__bY);
}
for(var i=0,l=s.length;i<l;i++){u=s[i];
x=this.__bQ[typeof u];

if(x){u=this[x](u,i+L);

if(typeof u==K){if(!y){v.push(M);

if(w){v.push(qx.util.Json.__bY);
}}v.push(u);
y=false;
}}}
if(w){qx.util.Json.__bY=qx.util.Json.__bY.substring(0,qx.util.Json.__bY.length-qx.util.Json.BEAUTIFYING_INDENT.length);
v.push(qx.util.Json.__bY);
}v.push(S);
return v.join(L);
},__ca:function(c,d){var e=c.getUTCFullYear()+M+c.getUTCMonth()+M+c.getUTCDate()+M+c.getUTCHours()+M+c.getUTCMinutes()+M+c.getUTCSeconds()+M+c.getUTCMilliseconds();
return F+e+bh;
},__cb:function(h,j){var n=[],p=true,m,k;
var o=qx.util.Json.__cf;
n.push(bc);

if(o){qx.util.Json.__bY+=qx.util.Json.BEAUTIFYING_INDENT;
n.push(qx.util.Json.__bY);
}
for(var j in h){k=h[j];
m=this.__bQ[typeof k];

if(m){k=this[m](k,j);

if(typeof k==K){if(!p){n.push(M);

if(o){n.push(qx.util.Json.__bY);
}}n.push(this.__bU(j),bd,k);
p=false;
}}}
if(o){qx.util.Json.__bY=qx.util.Json.__bY.substring(0,qx.util.Json.__bY.length-qx.util.Json.BEAUTIFYING_INDENT.length);
n.push(qx.util.Json.__bY);
}n.push(bf);
return n.join(L);
},__cc:function(bl,bm){if(bl){if(qx.lang.Type.isFunction(bl.toJSON)&&bl.toJSON!==this.__bP){return this.__ce(bl.toJSON(bm),bm);
}else if(qx.lang.Type.isDate(bl)){return this.__ca(bl,bm);
}else if(qx.lang.Type.isArray(bl)){return this.__bX(bl,bm);
}else if(qx.lang.Type.isObject(bl)){return this.__cb(bl,bm);
}return L;
}return J;
},__cd:function(f,g){if(qx.core.Setting.get(N)){return J;
}},__ce:function(bn,bo){return this[this.__bQ[typeof bn]](bn,bo);
},stringify:function(bq,br){this.__cf=br;
this.__bY=this.BEAUTIFYING_LINE_END;
var bs=this.__ce(bq,L);

if(typeof bs!=K){bs=null;
}if(qx.core.Setting.get(H)){qx.log.Logger.debug(this,"JSON request: "+bs);
}return bs;
},parse:function(bw){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bw.replace(/"(\\.|[^"\\])*"/g,L))){throw new Error("Could not parse JSON string!");
}
try{return eval(R+bw+E);
}catch(bp){throw new Error("Could not evaluate JSON string: "+bp.message);
}},parseQx:function(bx){if(qx.core.Setting.get(H)){qx.log.Logger.debug(this,"JSON response: "+bx);
}var by=(bx&&bx.length>0)?eval(be+bx+X):null;
return by;
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bt){bt.__bP=Date.prototype.toJSON;
}});
})();
(function(){var O=",",N="rgb(",M=")",L="qx.theme.manager.Color",K="qx.util.ColorUtil";
qx.Class.define(K,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42],grey:[128,128,128]},isNamedColor:function(R){return this.NAMED[R]!==undefined;
},isSystemColor:function(C){return this.SYSTEM[C]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(L);
},isThemedColor:function(T){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(T);
},stringToRgb:function(bd){if(this.supportsThemes()&&this.isThemedColor(bd)){var bd=qx.theme.manager.Color.getInstance().resolveDynamic(bd);
}
if(this.isNamedColor(bd)){return this.NAMED[bd];
}else if(this.isSystemColor(bd)){throw new Error("Could not convert system colors to RGB: "+bd);
}else if(this.isRgbString(bd)){return this.__cg();
}else if(this.isHex3String(bd)){return this.__ci();
}else if(this.isHex6String(bd)){return this.__cj();
}throw new Error("Could not parse color: "+bd);
},cssStringToRgb:function(S){if(this.isNamedColor(S)){return this.NAMED[S];
}else if(this.isSystemColor(S)){throw new Error("Could not convert system colors to RGB: "+S);
}else if(this.isRgbString(S)){return this.__cg();
}else if(this.isRgbaString(S)){return this.__ch();
}else if(this.isHex3String(S)){return this.__ci();
}else if(this.isHex6String(S)){return this.__cj();
}throw new Error("Could not parse color: "+S);
},stringToRgbString:function(A){return this.rgbToRgbString(this.stringToRgb(A));
},rgbToRgbString:function(bc){return N+bc[0]+O+bc[1]+O+bc[2]+M;
},rgbToHexString:function(bh){return (qx.lang.String.pad(bh[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(bh[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(bh[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(J){return this.isThemedColor(J)||this.isNamedColor(J)||this.isHex3String(J)||this.isHex6String(J)||this.isRgbString(J);
},isCssString:function(bf){return this.isSystemColor(bf)||this.isNamedColor(bf)||this.isHex3String(bf)||this.isHex6String(bf)||this.isRgbString(bf);
},isHex3String:function(B){return this.REGEXP.hex3.test(B);
},isHex6String:function(bi){return this.REGEXP.hex6.test(bi);
},isRgbString:function(P){return this.REGEXP.rgb.test(P);
},isRgbaString:function(be){return this.REGEXP.rgba.test(be);
},__cg:function(){var z=parseInt(RegExp.$1,10);
var y=parseInt(RegExp.$2,10);
var x=parseInt(RegExp.$3,10);
return [z,y,x];
},__ch:function(){var F=parseInt(RegExp.$1,10);
var E=parseInt(RegExp.$2,10);
var D=parseInt(RegExp.$3,10);
return [F,E,D];
},__ci:function(){var w=parseInt(RegExp.$1,16)*17;
var v=parseInt(RegExp.$2,16)*17;
var u=parseInt(RegExp.$3,16)*17;
return [w,v,u];
},__cj:function(){var I=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var H=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var G=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [I,H,G];
},hex3StringToRgb:function(bg){if(this.isHex3String(bg)){return this.__ci(bg);
}throw new Error("Invalid hex3 value: "+bg);
},hex6StringToRgb:function(bb){if(this.isHex6String(bb)){return this.__cj(bb);
}throw new Error("Invalid hex6 value: "+bb);
},hexStringToRgb:function(Q){if(this.isHex3String(Q)){return this.__ci(Q);
}
if(this.isHex6String(Q)){return this.__cj(Q);
}throw new Error("Invalid hex value: "+Q);
},rgbToHsb:function(a){var d,e,j;
var s=a[0];
var m=a[1];
var c=a[2];
var o=(s>m)?s:m;

if(c>o){o=c;
}var h=(s<m)?s:m;

if(c<h){h=c;
}j=o/255.0;

if(o!=0){e=(o-h)/o;
}else{e=0;
}
if(e==0){d=0;
}else{var l=(o-s)/(o-h);
var n=(o-m)/(o-h);
var k=(o-c)/(o-h);

if(s==o){d=k-n;
}else if(m==o){d=2.0+l-k;
}else{d=4.0+n-l;
}d=d/6.0;

if(d<0){d=d+1.0;
}}return [Math.round(d*360),Math.round(e*100),Math.round(j*100)];
},hsbToRgb:function(U){var i,f,p,q,t;
var V=U[0]/360;
var W=U[1]/100;
var X=U[2]/100;

if(V>=1.0){V%=1.0;
}
if(W>1.0){W=1.0;
}
if(X>1.0){X=1.0;
}var Y=Math.floor(255*X);
var ba={};

if(W==0.0){ba.red=ba.green=ba.blue=Y;
}else{V*=6.0;
i=Math.floor(V);
f=V-i;
p=Math.floor(Y*(1.0-W));
q=Math.floor(Y*(1.0-(W*f)));
t=Math.floor(Y*(1.0-(W*(1.0-f))));

switch(i){case 0:ba.red=Y;
ba.green=t;
ba.blue=p;
break;
case 1:ba.red=q;
ba.green=Y;
ba.blue=p;
break;
case 2:ba.red=p;
ba.green=Y;
ba.blue=t;
break;
case 3:ba.red=p;
ba.green=q;
ba.blue=Y;
break;
case 4:ba.red=t;
ba.green=p;
ba.blue=Y;
break;
case 5:ba.red=Y;
ba.green=p;
ba.blue=q;
break;
}}return ba;
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var k="qx.debug",j="on",i="Cannot stop propagation on a non bubbling event: ",h="_relatedTarget",g="_target",f="Invalid argument value 'cancelable'.",e="Cannot prevent default action on a non cancelable event: ",d="Invalid argument value 'canBubble'.",c="qx.event.type.Event",b="_originalTarget",a="_currentTarget";
qx.Class.define(c,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(n,o){if(qx.core.Variant.isSet(k,j)){if(n!==undefined){qx.core.Assert.assertBoolean(n,d);
}
if(o!==undefined){qx.core.Assert.assertBoolean(o,f);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!n;
this._cancelable=!!o;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(r){if(r){var s=r;
}else{var s=qx.event.Pool.getInstance().getObject(this.constructor);
}s._type=this._type;
s._target=this._target;
s._currentTarget=this._currentTarget;
s._relatedTarget=this._relatedTarget;
s._originalTarget=this._originalTarget;
s._stopPropagation=this._stopPropagation;
s._bubbles=this._bubbles;
s._preventDefault=this._preventDefault;
s._cancelable=this._cancelable;
return s;
},stopPropagation:function(){if(qx.core.Variant.isSet(k,j)){this.assertTrue(this._bubbles,i+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Variant.isSet(k,j)){this.assertTrue(this._cancelable,e+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(m){this._type=m;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(u){this._eventPhase=u;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(w){this._target=w;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(p){this._currentTarget=p;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(l){this._relatedTarget=l;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(q){this._originalTarget=q;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(v){this._bubbles=v;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(t){this._cancelable=t;
}},destruct:function(){this._disposeFields(g,a,h,b);
}});
})();
(function(){var e="Better use 'getData'",d="__cl",c="Better use 'getOldData'",b="__ck",a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__ck:null,__cl:null,init:function(h,i,j){arguments.callee.base.call(this,false,j);
this.__ck=h;
this.__cl=i;
return this;
},clone:function(f){var g=arguments.callee.base.call(this,f);
g.__ck=this.__ck;
g.__cl=this.__cl;
return g;
},getData:function(){return this.__ck;
},getOldData:function(){return this.__cl;
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,e);
return this.__ck;
},getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.__cl;
}},destruct:function(){this._disposeFields(b,d);
}});
})();
(function(){var e="",d="qx.core.WindowError";
qx.Class.define(d,{extend:Error,construct:function(a,b,c){Error.call(this,a);
this.__cm=a;
this.__cn=b||e;
this.__co=c===undefined?-1:c;
},members:{__cm:null,__cn:null,__co:null,toString:function(){return this.__cm;
},getUri:function(){return this.__cn;
},getLineNumber:function(){return this.__co;
}}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(o){arguments.callee.base.call(this);
this.__cp={};

if(o!==undefined){this.setSize(o);
}},properties:{size:{check:d,init:null,nullable:true}},members:{__cp:null,getObject:function(a){if(this.$$disposed){return;
}
if(!a){throw new Error("Class needs to be defined!");
}var b=null;
var c=this.__cp[a.classname];

if(c){b=c.pop();
}
if(b){b.$$pooled=false;
}else{b=new a;
}return b;
},poolObject:function(j){if(!this.__cp){return;
}var k=j.classname;
var m=this.__cp[k];

if(j.$$pooled){throw new Error("Object is already pooled: "+j);
}
if(!m){this.__cp[k]=m=[];
}var n=this.getSize()||Infinity;

if(m.length>n){this.warn("Cannot pool "+j+" because the pool is already full.");
j.dispose();
return;
}j.$$pooled=true;
m.push(j);
}},destruct:function(){var h=this.__cp;
var f,g,i,l;

for(f in h){g=h[f];

for(i=0,l=g.length;i<l;i++){g[i].dispose();
}}delete this.__cp;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var b="qx.util.DisposeUtil";
qx.Class.define(b,{statics:{disposeFields:function(e,f){var name;

for(var i=0,l=f.length;i<l;i++){var name=f[i];

if(e[name]==null||!e.hasOwnProperty(name)){continue;
}e[name]=null;
}},disposeObjects:function(c,d){var name;

for(var i=0,l=d.length;i<l;i++){name=d[i];

if(c[name]==null||!c.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(c[name].dispose){c[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}c[name]=null;
}},disposeArray:function(m,n){var p=m[n];

if(!p){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{var o;

for(var i=p.length-1;i>=0;i--){o=p[i];

if(o){o.dispose();
}}}catch(a){throw new Error("The array field: "+n+" of object: "+m+" has non disposable entries: "+a);
}p.length=0;
m[n]=null;
},disposeMap:function(g,h){var j=g[h];

if(!j){return;
}if(qx.core.ObjectRegistry.inShutDown){g[h]=null;
return;
}try{for(var k in j){if(j.hasOwnProperty(k)){j[k].dispose();
}}}catch(q){throw new Error("The map field: "+h+" of object: "+g+" has non disposable entries: "+q);
}g[h]=null;
}}});
})();
(function(){var bB="get",bA="",bz="[",by="]",bx=".",bw="last",bv="change",bu="Number",bt="String",bs="set",bV="deepBinding",bU="item",bT="reset",bS="' (",bR="on",bQ="qx.debug",bP="Boolean",bO=") to the object '",bN="Integer",bM="qx.event.type.Data",bI="qx.data.SingleValueBinding",bJ="No event could be found for the property",bG="Can not remove the bindings for null object!",bH="Binding from '",bE="PositiveNumber",bF="PositiveInteger",bC="Binding does not exist!",bD=" is not an data (qx.event.type.Data) event on ",bK=").",bL="Date";
qx.Class.define(bI,{statics:{DEBUG_ON:false,__cq:{},bind:function(Q,R,S,T,U){var ba=R.split(bx);
var W=this.__cx(ba);
var bd=[];
var be=[];
var bb=[];
var X=[];
var Y=Q;
for(var i=0;i<ba.length;i++){if(W[i]!==bA){X.push(bv);
}else{X.push(this.__cs(Y,ba[i]));
}bd[i]=Y;
if(i==ba.length-1){if(W[i]!==bA){var bh=W[i]===bw?Y.length-1:W[i];
var V=Y.getItem(bh);
this.__cw(V,S,T,U,Q);
bb[i]=this.__cy(Y,X[i],S,T,U,W[i]);
}else{if(ba[i]!=null&&Y[bB+qx.lang.String.firstUp(ba[i])]!=null){var V=Y[bB+qx.lang.String.firstUp(ba[i])]();
this.__cw(V,S,T,U,Q);
}bb[i]=this.__cy(Y,X[i],S,T,U);
}}else{var bf={index:i,propertyNames:ba,sources:bd,listenerIds:bb,arrayIndexValues:W,targetObject:S,targetProperty:T,options:U,listeners:be};
var bc=qx.lang.Function.bind(this.__cr,this,bf);
be.push(bc);
bb[i]=Y.addListener(X[i],bc);
}if(Y[bB+qx.lang.String.firstUp(ba[i])]==null){Y=null;
}else if(W[i]!==bA){Y=Y[bB+qx.lang.String.firstUp(ba[i])](W[i]);
}else{Y=Y[bB+qx.lang.String.firstUp(ba[i])]();
}
if(!Y){break;
}}var bg={type:bV,listenerIds:bb,sources:bd};
this.__cz(bg,Q,R,S,T);
return bg;
},__cr:function(d){if(d.options&&d.options.onUpdate){d.options.onUpdate(d.sources[d.index],d.targetObject);
}for(var j=d.index+1;j<d.propertyNames.length;j++){var k=d.sources[j];
d.sources[j]=null;

if(!k){continue;
}k.removeListenerById(d.listenerIds[j]);
}var k=d.sources[d.index];
for(var j=d.index+1;j<d.propertyNames.length;j++){if(d.arrayIndexValues[j-1]!==bA){k=k[bB+qx.lang.String.firstUp(d.propertyNames[j-1])](d.arrayIndexValues[j-1]);
}else{k=k[bB+qx.lang.String.firstUp(d.propertyNames[j-1])]();
}d.sources[j]=k;
if(!k){this.__ct(d.targetObject,d.targetProperty);
break;
}if(j==d.propertyNames.length-1){if(qx.Class.implementsInterface(k,qx.data.IListData)){var l=d.arrayIndexValues[j]===bw?k.length-1:d.arrayIndexValues[j];
var g=k.getItem(l);
this.__cw(g,d.targetObject,d.targetProperty,d.options,d.sources[d.index]);
d.listenerIds[j]=this.__cy(k,bv,d.targetObject,d.targetProperty,d.options,d.arrayIndexValues[j]);
}else{if(d.propertyNames[j]!=null&&k[bB+qx.lang.String.firstUp(d.propertyNames[j])]!=null){var g=k[bB+qx.lang.String.firstUp(d.propertyNames[j])]();
this.__cw(g,d.targetObject,d.targetProperty,d.options,d.sources[d.index]);
}var h=this.__cs(k,d.propertyNames[j]);
d.listenerIds[j]=this.__cy(k,h,d.targetObject,d.targetProperty,d.options);
}}else{if(d.listeners[j]==null){var f=qx.lang.Function.bind(this.__cr,this,d);
d.listeners.push(f);
}if(qx.Class.implementsInterface(k,qx.data.IListData)){var h=bv;
}else{var h=this.__cs(k,d.propertyNames[j]);
}d.listenerIds[j]=k.addListener(h,d.listeners[j]);
}}},__cs:function(a,b){var c=this.__cB(a,b);
if(c==null){if(qx.Class.supportsEvent(a.constructor,b)){c=b;
}else if(qx.Class.supportsEvent(a.constructor,bv+qx.lang.String.firstUp(b))){c=bv+qx.lang.String.firstUp(b);
}else{throw new qx.core.AssertionError(bJ,b);
}}return c;
},__ct:function(H,I){var J=this.__cv(H,I);

if(J!=null){var K=I.substring(I.lastIndexOf(bx)+1,I.length);
if(K.charAt(K.length-1)==by){this.__cu(H,I,null);
return;
}if(J[bT+qx.lang.String.firstUp(K)]!=undefined){J[bT+qx.lang.String.firstUp(K)]();
}else{J[bs+qx.lang.String.firstUp(K)](null);
}}},__cu:function(q,r,s){var w=this.__cv(q,r);

if(w!=null){var x=r.substring(r.lastIndexOf(bx)+1,r.length);
if(x.charAt(x.length-1)==by){var t=x.substring(x.lastIndexOf(bz)+1,x.length-1);
var v=x.substring(0,x.lastIndexOf(bz));
var u=w[bB+qx.lang.String.firstUp(v)]();

if(t==bw){t=u.length-1;
}
if(u!=null){u.setItem(t,s);
}}else{w[bs+qx.lang.String.firstUp(x)](s);
}}},__cv:function(ca,cb){var ce=cb.split(bx);
var cf=ca;
for(var i=0;i<ce.length-1;i++){try{var cd=ce[i];
if(cd.indexOf(by)==cd.length-1){var cc=cd.substring(cd.indexOf(bz)+1,cd.length-1);
cd=cd.substring(0,cd.indexOf(bz));
}cf=cf[bB+qx.lang.String.firstUp(cd)]();

if(cc!=null){if(cc==bw){cc=cf.length-1;
}cf=cf.getItem(cc);
cc=null;
}}catch(bi){return null;
}}return cf;
},__cw:function(L,M,N,O,P){L=this.__cA(L,M,N,O);
if(L==null){this.__ct(M,N);
}if(L!=undefined){try{this.__cu(M,N,L);
if(O&&O.onUpdate){O.onUpdate(P,M,L);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(O&&O.onSetFail){O.onSetFail(e);
}else{this.warn("Failed so set value "+L+" on "+M+". Error message: "+e);
}}}},__cx:function(bl){var bm=[];
for(var i=0;i<bl.length;i++){var name=bl[i];
if(qx.lang.String.endsWith(name,by)){var bn=name.substring(name.indexOf(bz)+1,name.indexOf(by));
if(name.indexOf(by)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bn!==bw){if(bn==bA||isNaN(parseInt(bn))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bz)!=0){bl[i]=name.substring(0,name.indexOf(bz));
bm[i]=bA;
bm[i+1]=bn;
bl.splice(i+1,0,bU);
i++;
}else{bm[i]=bn;
bl.splice(i,1,bU);
}}else{bm[i]=bA;
}}return bm;
},__cy:function(cw,cx,cy,cz,cA,cB){if(qx.core.Variant.isSet(bQ,bR)){var cC=qx.Class.getEventType(cw.constructor,cx);
qx.core.Assert.assertEquals(bM,cC,cx+bD+cw+bx);
}var cE=function(m,e){if(m!==bA){if(m===bw){m=cw.length-1;
}var p=cw.getItem(m);
if(p==undefined){qx.data.SingleValueBinding.__ct(cy,cz);
}var n=e.getData().start;
var o=e.getData().end;

if(m<n||m>o){return;
}}else{var p=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cw+" by "+cx+" to "+cy+" ("+cz+")");
qx.log.Logger.debug("Data before conversion: "+p);
}p=qx.data.SingleValueBinding.__cA(p,cy,cz,cA);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+p);
}try{if(p!=undefined){qx.data.SingleValueBinding.__cu(cy,cz,p);
}else{qx.data.SingleValueBinding.__ct(cy,cz);
}if(cA&&cA.onUpdate){cA.onUpdate(cw,cy,p);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cA&&cA.onSetFail){cA.onSetFail(e);
}else{this.warn("Failed so set value "+p+" on "+cy+". Error message: "+e);
}}};
if(!cB){cB=bA;
}cE=qx.lang.Function.bind(cE,cw,cB);
var cD=cw.addListener(cx,cE);
return cD;
},__cz:function(cg,ch,ci,cj,ck){if(this.__cq[ch.toHashCode()]===undefined){this.__cq[ch.toHashCode()]=[];
}this.__cq[ch.toHashCode()].push([cg,ch,ci,cj,ck]);
},__cA:function(cl,cm,cn,co){if(co&&co.converter){var cq;

if(cm.getModel){cq=cm.getModel();
}return co.converter(cl,cq);
}else{var cs=this.__cv(cm,cn);
var ct=cn.substring(cn.lastIndexOf(bx)+1,cn.length);
if(cs==null){return cl;
}var cr=qx.Class.getPropertyDefinition(cs.constructor,ct);
var cp=cr==null?bA:cr.check;
return this.__cC(cl,cp);
}},__cB:function(A,B){var C=qx.Class.getPropertyDefinition(A.constructor,B);

if(C==null){return null;
}return C.event;
},__cC:function(bW,bX){var bY=qx.lang.Type.getClass(bW);
if((bY==bu||bY==bt)&&(bX==bN||bX==bF)){bW=parseInt(bW);
}if((bY==bP||bY==bu||bY==bL)&&bX==bt){bW=bW+bA;
}if((bY==bu||bY==bt)&&(bX==bu||bX==bE)){bW=parseFloat(bW);
}return bW;
},removeBindingFromObject:function(bp,bq){if(bq.type==bV){for(var i=0;i<bq.sources.length;i++){if(bq.sources[i]){bq.sources[i].removeListenerById(bq.listenerIds[i]);
}}}else{bp.removeListenerById(bq);
}var br=this.__cq[bp.toHashCode()];
if(br!=undefined){for(var i=0;i<br.length;i++){if(br[i][0]==bq){qx.lang.Array.remove(br,br[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cu){if(qx.core.Variant.isSet(bQ,bR)){qx.core.Assert.assertNotNull(cu,bG);
}var cv=this.__cq[cu.toHashCode()];
for(var i=cv.length-1;i>=0;i--){this.removeBindingFromObject(cu,cv[i][0]);
}},getAllBindingsForObject:function(bo){if(this.__cq[bo.toHashCode()]===undefined){this.__cq[bo.toHashCode()]=[];
}return this.__cq[bo.toHashCode()];
},removeAllBindings:function(){for(var bk in this.__cq){var bj=qx.core.ObjectRegistry.fromHashCode(bk);
if(bj==null){delete this.__cq[bk];
continue;
}this.removeAllBindingsForObject(bj);
}this.__cq={};
},getAllBindings:function(){return this.__cq;
},showBindingInLog:function(D,E){var G;
for(var i=0;i<this.__cq[D.toHashCode()].length;i++){if(this.__cq[D.toHashCode()][i][0]==E){G=this.__cq[D.toHashCode()][i];
break;
}}
if(G===undefined){var F=bC;
}else{var F=bH+G[1]+bS+G[2]+bO+G[3]+bS+G[4]+bK;
}qx.log.Logger.debug(F);
},showAllBindingsInLog:function(){for(var z in this.__cq){var y=qx.core.ObjectRegistry.fromHashCode(z);

for(var i=0;i<this.__cq[z].length;i++){this.showBindingInLog(y,this.__cq[z][i][0]);
}}}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var d="qx.event.handler.Object";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(e,f){return qx.Class.supportsEvent(e.constructor,f);
},registerEvent:function(a,b,c){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var q="indexOf",p="lastIndexOf",o="slice",n="concat",m="join",k="toLocaleUpperCase",j="shift",h="substr",g="filter",f="unshift",N="match",M="quote",L="qx.lang.Generics",K="localeCompare",J="sort",I="some",H="charAt",G="split",F="substring",E="pop",y="toUpperCase",z="replace",w="push",x="charCodeAt",u="every",v="reverse",r="search",t="forEach",A="map",B="toLowerCase",D="splice",C="toLocaleLowerCase";
qx.Bootstrap.define(L,{statics:{__cD:{"Array":[m,v,J,w,E,j,f,D,n,o,q,p,t,A,g,I,u],"String":[M,F,B,y,H,x,q,p,C,k,K,N,r,z,G,h,n,o]},__cE:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cF:function(){var a=qx.lang.Generics.__cD;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__cE(c,d);
}}}}},defer:function(O){O.__cF();
}});
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
qx.Bootstrap.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__cG:function(){var o=navigator.platform;
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
}}},defer:function(a){a.__cG();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",G=")",F="winxp",E="freebsd",D="sunos",C="SV1",B="|",A="nintendods",z="winnt4",y="wince",x="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="g",u="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(u,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__cH:{"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":F,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":z,"Win 9x 4.90":x,"Windows CE":y,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":E,"NetBSD":m,"OpenBSD":k,"SunOS":D,"Symbian System":t,"Nitro":A,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cI:function(){var J=navigator.userAgent;
var I=[];

for(var H in this.__cH){I.push(H);
}var K=new RegExp(l+I.join(B).replace(/\./g,r)+G,v);

if(!K.test(J)){this.UNKNOWN_SYSTEM=true;

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
}else{this.NAME=this.__cH[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(J.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&J.indexOf(C)!==-1){this.SP2=true;
}}}}},defer:function(L){L.__cI();
}});
})();
(function(){var r="_applyTheme",q="qx.theme",p="qx.theme.manager.Meta",o="qx.theme.Classic",n="Theme",m="singleton";
qx.Class.define(p,{type:m,extend:qx.core.Object,properties:{theme:{check:n,nullable:true,apply:r}},members:{_applyTheme:function(a,b){var e=null;
var h=null;
var k=null;
var l=null;
var g=null;

if(a){e=a.meta.color||null;
h=a.meta.decoration||null;
k=a.meta.font||null;
l=a.meta.icon||null;
g=a.meta.appearance||null;
}var i=qx.theme.manager.Color.getInstance();
var j=qx.theme.manager.Decoration.getInstance();
var c=qx.theme.manager.Font.getInstance();
var f=qx.theme.manager.Icon.getInstance();
var d=qx.theme.manager.Appearance.getInstance();
i.setTheme(e);
j.setTheme(h);
c.setTheme(k);
f.setTheme(l);
d.setTheme(g);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(q);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":o}});
})();
(function(){var d="_dynamic",c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(a){return this._dynamic[a];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(f){if(f&&this._dynamic[f]){return this._dynamic[f];
}return f;
},_setDynamic:function(g){this._dynamic=g;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._disposeFields(d);
}});
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
(function(){var j="decoration",i="object",h="__cJ",g="_applyTheme",f="qx.theme.manager.Decoration",e="Theme",d="string",c="singleton";
qx.Class.define(f,{type:c,extend:qx.core.Object,properties:{theme:{check:e,nullable:true,apply:g}},members:{__cJ:null,resolve:function(k){if(!k){return null;
}
if(typeof k===i){return k;
}var n=this.getTheme();

if(!n){return null;
}var n=this.getTheme();

if(!n){return null;
}var o=this.__cJ;

if(!o){o=this.__cJ={};
}var l=o[k];

if(l){return l;
}var m=n.decorations[k];

if(!m){return null;
}var p=m.decorator;

if(p==null){throw new Error("Missing definition of which decorator to use in entry: "+k+"!");
}return o[k]=(new p).set(m.style);
},isValidPropertyValue:function(q){if(typeof q===d){return this.isDynamic(q);
}else if(typeof q===i){var r=q.constructor;
return qx.Class.hasInterface(r,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(a){if(!a){return false;
}var b=this.getTheme();

if(!b){return false;
}return !!b.decorations[a];
},_applyTheme:function(s,t){var v=qx.util.AliasManager.getInstance();
if(s){v.add(j,s.resource);
}else{v.remove(j);
}
if(t){for(var u in t.aliases){v.remove(u);
}}
if(s){for(var u in s.aliases){v.add(u,s.aliases[u]);
}}
if(!s){this.__cJ={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var k="/",j="0",i="__cK",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cK={};
this.add(a,h);
},members:{__cK:null,_preprocess:function(l){var o=this._getDynamic();

if(o[l]===false){return l;
}else if(o[l]===undefined){if(l.charAt(0)===k||l.charAt(0)===b||l.indexOf(g)===0||l.indexOf(f)===j||l.indexOf(e)===0){o[l]=false;
return l;
}
if(this.__cK[l]){return this.__cK[l];
}var n=l.substring(0,l.indexOf(k));
var m=this.__cK[n];

if(m!==undefined){o[l]=m+l.substring(n.length);
}}return l;
},add:function(q,r){this.__cK[q]=r;
var t=this._getDynamic();
for(var s in t){if(s.substring(0,s.indexOf(k))===q){t[s]=r+s.substring(q.length);
}}},remove:function(p){delete this.__cK[p];
},resolve:function(u){var v=this._getDynamic();

if(u!==null){u=this._preprocess(u);
}return v[u]||u;
}},destruct:function(){this._disposeFields(i);
}});
})();
(function(){var h="qx.theme.manager.Font",g="Theme",f="changeTheme",e="_applyTheme",d="singleton";
qx.Class.define(h,{type:d,extend:qx.util.ValueManager,properties:{theme:{check:g,nullable:true,apply:e,event:f}},members:{resolveDynamic:function(r){var s=this._dynamic;
return r instanceof qx.bom.Font?r:s[r];
},resolve:function(n){var q=this._dynamic;
var o=q[n];

if(o){return o;
}var p=this.getTheme();

if(p!==null&&p.fonts[n]){return q[n]=(new qx.bom.Font).set(p.fonts[n]);
}return n;
},isDynamic:function(a){var c=this._dynamic;

if(a&&(a instanceof qx.bom.Font||c[a]!==undefined)){return true;
}var b=this.getTheme();

if(b!==null&&a&&b.fonts[a]){c[a]=(new qx.bom.Font).set(b.fonts[a]);
return true;
}return false;
},_applyTheme:function(i){var j=this._getDynamic();

for(var m in j){if(j[m].themed){j[m].dispose();
delete j[m];
}}
if(i){var k=i.fonts;
var l=qx.bom.Font;

for(var m in k){j[m]=(new l).set(k[m]);
j[m].themed=true;
}}this._setDynamic(j);
}}});
})();
(function(){var s="",r="underline",q="Boolean",p="px",o='"',n="italic",m="normal",k="bold",j="_applyItalic",h="_applyBold",E="Integer",D="_applyFamily",C="_applyLineHeight",B="Array",A="overline",z="line-through",y="qx.bom.Font",x="Number",w="_applyDecoration",v=" ",t="_applySize",u=",";
qx.Class.define(y,{extend:qx.core.Object,construct:function(a,b){arguments.callee.base.call(this);

if(a!==undefined){this.setSize(a);
}
if(b!==undefined){this.setFamily(b);
}},statics:{fromString:function(N){var R=new qx.bom.Font();
var P=N.split(/\s+/);
var name=[];
var Q;

for(var i=0;i<P.length;i++){switch(Q=P[i]){case k:R.setBold(true);
break;
case n:R.setItalic(true);
break;
case r:R.setDecoration(r);
break;
default:var O=parseInt(Q,10);

if(O==Q||qx.lang.String.contains(Q,p)){R.setSize(O);
}else{name.push(Q);
}break;
}}
if(name.length>0){R.setFamily(name);
}return R;
},fromConfig:function(J){var K=new qx.bom.Font;
K.set(J);
return K;
},__cL:{fontFamily:s,fontSize:s,fontWeight:s,fontStyle:s,textDecoration:s,lineHeight:1.2},getDefaultStyles:function(){return this.__cL;
}},properties:{size:{check:E,nullable:true,apply:t},lineHeight:{check:x,nullable:true,apply:C},family:{check:B,nullable:true,apply:D},bold:{check:q,nullable:true,apply:h},italic:{check:q,nullable:true,apply:j},decoration:{check:[r,z,A],nullable:true,apply:w}},members:{__cM:null,__cN:null,__cO:null,__cP:null,__cQ:null,__cR:null,_applySize:function(F,G){this.__cM=F===null?null:F+p;
},_applyLineHeight:function(H,I){this.__cR=H===null?null:H;
},_applyFamily:function(c,d){var e=s;

for(var i=0,l=c.length;i<l;i++){if(c[i].indexOf(v)>0){e+=o+c[i]+o;
}else{e+=c[i];
}
if(i!==l-1){e+=u;
}}this.__cN=e;
},_applyBold:function(f,g){this.__cO=f===null?null:f?k:m;
},_applyItalic:function(S,T){this.__cP=S===null?null:S?n:m;
},_applyDecoration:function(L,M){this.__cQ=L===null?null:L;
},getStyles:function(){return {fontFamily:this.__cN,fontSize:this.__cM,fontWeight:this.__cO,fontStyle:this.__cP,textDecoration:this.__cQ,lineHeight:this.__cR};
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
(function(){var v="string",u="Theme",t="_applyTheme",s="__cS",r="qx.theme.manager.Appearance",q=":",p="changeAppearanceTheme",o="changeTheme",n="/",m="singleton",l="__cT";
qx.Class.define(r,{type:m,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__cS={};
this.__cT={};
},properties:{appearanceTheme:{check:u,nullable:true,event:p},theme:{check:u,nullable:true,event:o,apply:t}},members:{__cU:{},__cS:null,__cT:null,_applyTheme:function(N,O){this.__cT={};
this.__cS={};
},__cV:function(a,b,c){var g=b.appearances;
var j=g[a];

if(!j){var k=n;
var d=[];
var i=a.split(k);
var h;

while(!j&&i.length>0){d.unshift(i.pop());
var e=i.join(k);
j=g[e];

if(j){h=j.alias||j;

if(typeof h===v){var f=h+k+d.join(k);
return this.__cV(f,b,c);
}}}if(c!=null){return this.__cV(c,b);
}return null;
}else if(typeof j===v){return this.__cV(j,b,c);
}else if(j.include&&!j.style){return this.__cV(j.include,b,c);
}return a;
},styleFrom:function(w,x,y,z){if(!y){y=this.getTheme();
}var F=this.__cT;
var A=F[w];

if(!A){A=F[w]=this.__cV(w,y,z);
}var K=y.appearances[A];

if(!K){this.warn("Missing appearance: "+w);
return null;
}if(!K.style){return null;
}var L=A;

if(x){var M=K.$$bits;

if(!M){M=K.$$bits={};
K.$$length=0;
}var D=0;

for(var G in x){if(!x[G]){continue;
}
if(M[G]==null){M[G]=1<<K.$$length++;
}D+=M[G];
}if(D>0){L+=q+D;
}}var E=this.__cS;

if(E[L]!==undefined){return E[L];
}if(!x){x=this.__cU;
}var I;
if(K.include||K.base){var C=K.style(x);
var B;

if(K.include){B=this.styleFrom(K.include,x,y,z);
}I={};
if(K.base){var H=this.styleFrom(A,x,K.base,z);

if(K.include){for(var J in H){if(!B.hasOwnProperty(J)&&!C.hasOwnProperty(J)){I[J]=H[J];
}}}else{for(var J in H){if(!C.hasOwnProperty(J)){I[J]=H[J];
}}}}if(K.include){for(var J in B){if(!C.hasOwnProperty(J)){I[J]=B[J];
}}}for(var J in C){I[J]=C[J];
}}else{I=K.style(x);
}return E[L]=I||null;
}},destruct:function(){this._disposeFields(s,l);
}});
})();
(function(){var I="object",H="qx.debug",G="string",F="icons",E="on",D="Theme",C="widgets",B="decorations",A="colors",z="fonts",t="appearances",y="borders",w="meta",s="other",r="decoration",v="icon",u="qx.Theme",x="]",q="[Theme ";
qx.Class.define(u,{statics:{define:function(name,T){if(!T){var T={};
}T.include=this.__cW(T.include);
T.patch=this.__cW(T.patch);
if(qx.core.Variant.isSet(H,E)){this.__df(name,T);
}var U={$$type:D,name:name,title:T.title,toString:this.genericToString};
if(T.extend){U.supertheme=T.extend;
}U.basename=qx.Bootstrap.createNamespace(name,U);
this.__db(U,T);
this.__cX(U,T);
this.__cY(U,T);
this.$$registry[name]=U;
for(var i=0,a=T.include,l=a.length;i<l;i++){this.include(U,a[i]);
}
for(var i=0,a=T.patch,l=a.length;i<l;i++){this.patch(U,a[i]);
}},__cW:function(h){if(!h){return [];
}
if(qx.lang.Type.isArray(h)){return h;
}else{return [h];
}},__cX:function(Q,R){if(qx.core.Variant.isSet(H,E)){if(R.resource){var S=Q.type==F?v:r;
qx.log.Logger.warn("The configuration key 'resource' in the "+S+" theme"+" '"+Q.name+"' is deprecated. Please replace "+"'resource: \""+R.resource+"\"' with "+"'aliases : { "+S+": \""+R.resource+"\"}'");
qx.log.Logger.trace();
}}
if(R.resource){Q.resource=R.resource;
}else if(R.extend&&R.extend.resource){Q.resource=R.extend.resource;
}},__cY:function(be,bf){var bg=bf.aliases||{};

if(bf.extend&&bf.extend.aliases){qx.lang.Object.mergeWith(bg,bf.extend.aliases,false);
}be.aliases=bg;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return q+this.name+x;
},__da:function(bc){for(var i=0,bd=this.__dc,l=bd.length;i<l;i++){if(bc[bd[i]]){return bd[i];
}}},__db:function(J,K){var N=this.__da(K);
if(K.extend&&!N){N=K.extend.type;
}J.type=N||s;
if(!N){return;
}var P=function(){};
if(K.extend){P.prototype=new K.extend.$$clazz;
}var O=P.prototype;
var M=K[N];
for(var L in M){O[L]=M[L];
if(O[L].base){if(qx.core.Variant.isSet(H,E)){if(!K.extend){throw new Error("Found base flag in entry '"+L+"' of theme '"+K.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}O[L].base=K.extend;
}}J.$$clazz=P;
J[N]=new P;
},$$registry:{},__dc:[A,y,B,z,F,C,t,w],__dd:qx.core.Variant.select(H,{"on":{"title":G,"resource":G,"aliases":I,"type":G,"extend":I,"colors":I,"borders":I,"decorations":I,"fonts":I,"icons":I,"widgets":I,"appearances":I,"meta":I,"include":I,"patch":I},"default":null}),__de:qx.core.Variant.select(H,{"on":{"color":I,"border":I,"decoration":I,"font":I,"icon":I,"appearance":I,"widget":I},"default":null}),__df:qx.core.Variant.select(H,{"on":function(name,b){var g=this.__dd;

for(var f in b){if(g[f]===undefined){throw new Error('The configuration key "'+f+'" in theme "'+name+'" is not allowed!');
}
if(b[f]==null){throw new Error('Invalid key "'+f+'" in theme "'+name+'"! The value is undefined/null!');
}
if(g[f]!==null&&typeof b[f]!==g[f]){throw new Error('Invalid type of key "'+f+'" in theme "'+name+'"! The type of the key must be "'+g[f]+'"!');
}}var e=[A,y,B,z,F,C,t,w];

for(var i=0,l=e.length;i<l;i++){var f=e[i];

if(b[f]!==undefined&&(b[f] instanceof Array||b[f] instanceof RegExp||b[f] instanceof Date||b[f].classname!==undefined)){throw new Error('Invalid key "'+f+'" in theme "'+name+'"! The value needs to be a map!');
}}var c=0;

for(var i=0,l=e.length;i<l;i++){var f=e[i];

if(b[f]){c++;
}
if(c>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!b.extend&&c===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(b.meta){var d;

for(var f in b.meta){d=b.meta[f];

if(this.__de[f]===undefined){throw new Error('The key "'+f+'" is not allowed inside a meta theme block.');
}
if(typeof d!==this.__de[f]){throw new Error('The type of the key "'+f+'" inside the meta block is wrong.');
}
if(!(typeof d===I&&d!==null&&d.$$type===D)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+f+'" in theme "'+name+'" is invalid: '+d);
}}}if(b.extend&&b.extend.$$type!==D){throw new Error('Invalid extend in theme "'+name+'": '+b.extend);
}},"default":function(){}}),patch:function(j,k){var n=this.__da(k);

if(n!==this.__da(j)){throw new Error("The mixins '"+j.name+"' are not compatible '"+k.name+"'!");
}var m=k[n];
var o=j.$$clazz.prototype;

for(var p in m){o[p]=m[p];
}},include:function(V,W){var Y=W.type;

if(Y!==V.type){throw new Error("The mixins '"+V.name+"' are not compatible '"+W.name+"'!");
}var X=W[Y];
var ba=V.$$clazz.prototype;

for(var bb in X){if(ba[bb]!==undefined){continue;
}ba[bb]=X[bb];
}}}});
})();
(function(){var B="focusout",A="interval",z="mouseover",y="mouseout",x="mousemove",w="widget",v="qx.ui.tooltip.ToolTip",u="Boolean",t="__di",s="__dg",p="_applyCurrent",r="qx.ui.tooltip.Manager",q="__dh",o="tooltip-error",n="singleton";
qx.Class.define(r,{type:n,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,z,this.__dq,this,true);
this.__dg=new qx.event.Timer();
this.__dg.addListener(A,this.__dn,this);
this.__dh=new qx.event.Timer();
this.__dh.addListener(A,this.__do,this);
this.__di={left:0,top:0};
},properties:{current:{check:v,nullable:true,apply:p},showInvalidTooltips:{check:u,init:true}},members:{__di:null,__dh:null,__dg:null,__dj:null,__dk:null,__dl:function(){if(!this.__dj){this.__dj=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__dj;
},__dm:function(){if(!this.__dk){this.__dk=new qx.ui.tooltip.ToolTip().set({appearance:o});
this.__dk.syncAppearance();
}return this.__dk;
},_applyCurrent:function(g,h){if(h&&qx.ui.core.Widget.contains(h,g)){return;
}if(h){h.exclude();
this.__dg.stop();
this.__dh.stop();
}var j=qx.event.Registration;
var i=document.body;
if(g){this.__dg.startWith(g.getShowTimeout());
j.addListener(i,y,this.__dr,this,true);
j.addListener(i,B,this.__ds,this,true);
j.addListener(i,x,this.__dp,this,true);
}else{j.removeListener(i,y,this.__dr,this,true);
j.removeListener(i,B,this.__ds,this,true);
j.removeListener(i,x,this.__dp,this,true);
}},__dn:function(e){var E=this.getCurrent();

if(E){this.__dh.startWith(E.getHideTimeout());

if(E.getPlaceMethod()==w){E.placeToWidget(E.getOpener());
}else{E.placeToPoint(this.__di);
}E.show();
}this.__dg.stop();
},__do:function(e){var C=this.getCurrent();

if(C){C.exclude();
}this.__dh.stop();
this.resetCurrent();
},__dp:function(e){var D=this.__di;
D.left=e.getDocumentLeft();
D.top=e.getDocumentTop();
},__dq:function(e){var c=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!c){return;
}var d;
while(c!=null){var d=c.getToolTip();
var f=c.getToolTipText()||null;
var b=c.getToolTipIcon()||null;

if(qx.Class.hasInterface(c.constructor,qx.ui.form.IForm)&&!c.isValid()){var a=c.getInvalidMessage();
}
if(d||f||b||a){break;
}c=c.getLayoutParent();
}
if(!c){return;
}if(a&&c.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var d=this.__dm().set({label:a});
}else if(!d){var d=this.__dl().set({label:f,icon:b});
}this.setCurrent(d);
d.setOpener(c);
},__dr:function(e){var k=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!k){return;
}var l=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!l){return;
}var m=this.getCurrent();
if(m&&(l==m||qx.ui.core.Widget.contains(m,l))){return;
}if(l&&k&&qx.ui.core.Widget.contains(k,l)){return;
}if(m&&!l){this.setCurrent(null);
}else{this.resetCurrent();
}},__ds:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,z,this.__dq,this,true);
this._disposeObjects(s,q);
this._disposeFields(t);
}});
})();
(function(){var q="interval",p="qx.event.Timer",o="_applyInterval",n="_applyEnabled",m="Boolean",l="__dt",k="__du",j="qx.event.type.Event",i="Integer";
qx.Class.define(p,{extend:qx.core.Object,construct:function(t){arguments.callee.base.call(this);
this.setEnabled(false);

if(t!=null){this.setInterval(t);
}this.__dt=qx.lang.Function.bind(this._oninterval,this);
},events:{"interval":j},statics:{once:function(d,f,g){var h=new qx.event.Timer(g);
h.addListener(q,function(e){h.stop();
d.call(f,e);
h.dispose();
f=null;
},f);
h.start();
return h;
}},properties:{enabled:{init:true,check:m,apply:n},interval:{check:i,init:1000,apply:o}},members:{__du:null,__dt:null,_applyInterval:function(b,c){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(r,s){if(s){window.clearInterval(this.__du);
this.__du=null;
}else if(r){this.__du=window.setInterval(this.__dt,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(a){this.setInterval(a);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(u){this.stop();
this.startWith(u);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.getEnabled()){this.fireEvent(q);
}})},destruct:function(){if(this.__du){window.clearInterval(this.__du);
}this._disposeFields(k,l);
}});
})();
(function(){var d="qx.ui.core.MChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(j){return this._indexOf(j);
},add:function(a,b){this._add(a,b);
},addAt:function(k,l,m){this._addAt(k,l,m);
},addBefore:function(n,o,p){this._addBefore(n,o,p);
},addAfter:function(f,g,h){this._addAfter(f,g,h);
},remove:function(i){this._remove(i);
},removeAt:function(c){return this._removeAt(c);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(e){e.getChildren=e._getChildren;
e.hasChildren=e._hasChildren;
e.indexOf=e._indexOf;
e.add=e._add;
e.addAt=e._addAt;
e.addBefore=e._addBefore;
e.addAfter=e._addAfter;
e.remove=e._remove;
e.removeAt=e._removeAt;
e.removeAll=e._removeAll;
}}});
})();
(function(){var b="qx.ui.core.MLayoutHandling";
qx.Mixin.define(b,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(a){a.getLayout=a._getLayout;
a.setLayout=a._setLayout;
}}});
})();
(function(){var l="Integer",k="_applyDimension",j="Boolean",i="_applyStretching",h="_applyMargin",g="shorthand",f="_applyAlign",e="qx.debug",d="on",c="allowShrinkY",N="Wrong 'width' argument. ",M="__dy",L="Something went wrong with the layout of ",K="bottom",J="Wrong 'left' argument. ",I="__dA",H="baseline",G="marginBottom",F="qx.ui.core.LayoutItem",E="center",s="marginTop",t="$$subparent",q="!",r="allowGrowX",o="middle",p="marginLeft",m="allowShrinkX",n="$$parent",u="top",v="__dw",y="right",x="__dB",A="marginRight",z="abstract",C="Wrong 'top' argument. ",B="Wrong 'height' argument. ",w="allowGrowY",D="left";
qx.Class.define(F,{type:z,extend:qx.core.Object,properties:{minWidth:{check:l,nullable:true,apply:k,init:null,themeable:true},width:{check:l,nullable:true,apply:k,init:null,themeable:true},maxWidth:{check:l,nullable:true,apply:k,init:null,themeable:true},minHeight:{check:l,nullable:true,apply:k,init:null,themeable:true},height:{check:l,nullable:true,apply:k,init:null,themeable:true},maxHeight:{check:l,nullable:true,apply:k,init:null,themeable:true},allowGrowX:{check:j,apply:i,init:true,themeable:true},allowShrinkX:{check:j,apply:i,init:true,themeable:true},allowGrowY:{check:j,apply:i,init:true,themeable:true},allowShrinkY:{check:j,apply:i,init:true,themeable:true},allowStretchX:{group:[r,m],mode:g,themeable:true},allowStretchY:{group:[w,c],mode:g,themeable:true},marginTop:{check:l,init:0,apply:h,themeable:true},marginRight:{check:l,init:0,apply:h,themeable:true},marginBottom:{check:l,init:0,apply:h,themeable:true},marginLeft:{check:l,init:0,apply:h,themeable:true},margin:{group:[s,A,G,p],mode:g,themeable:true},alignX:{check:[D,E,y],nullable:true,apply:f,themeable:true},alignY:{check:[u,o,K,H],nullable:true,apply:f,themeable:true}},members:{__dv:null,__dw:null,__dx:null,__dy:null,__dz:null,__dA:null,__dB:null,getBounds:function(){return this.__dA||this.__dw||null;
},clearSeparators:function(){},renderSeparator:function(bi,bj){},renderLayout:function(bn,top,bo,bp){if(qx.core.Variant.isSet(e,d)){var bq=L+this.toString()+q;
this.assertInteger(bn,J+bq);
this.assertInteger(top,C+bq);
this.assertInteger(bo,N+bq);
this.assertInteger(bp,B+bq);
}var br=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var br=this._getHeightForWidth(bo);
}
if(br!=null&&br!==this.__dv){this.__dv=br;
qx.ui.core.queue.Layout.add(this);
return null;
}var bt=this.__dw;

if(!bt){bt=this.__dw={};
}var bs={};

if(bn!==bt.left||top!==bt.top){bs.position=true;
bt.left=bn;
bt.top=top;
}
if(bo!==bt.width||bp!==bt.height){bs.size=true;
bt.width=bo;
bt.height=bp;
}if(this.__dx){bs.local=true;
delete this.__dx;
}
if(this.__dz){bs.margin=true;
delete this.__dz;
}return bs;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__dx;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__dx=true;
this.__dy=null;
},getSizeHint:function(R){var S=this.__dy;

if(S){return S;
}
if(R===false){return null;
}S=this.__dy=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__dv&&this.getHeight()==null){S.height=this.__dv;
}if(!this.getAllowShrinkX()){S.minWidth=Math.max(S.minWidth,S.width);
}else if(S.minWidth>S.width&&this.getAllowGrowX()){S.width=S.minWidth;
}
if(!this.getAllowShrinkY()){S.minHeight=Math.max(S.minHeight,S.height);
}
if(S.minHeight>S.height&&this.getAllowGrowY()){S.height=S.minHeight;
}if(!this.getAllowGrowX()){S.maxWidth=Math.min(S.maxWidth,S.width);
}
if(S.width>S.maxWidth){S.width=S.maxWidth;
}
if(!this.getAllowGrowY()){S.maxHeight=Math.min(S.maxHeight,S.height);
}
if(S.height>S.maxHeight){S.height=S.maxHeight;
}return S;
},_computeSizeHint:function(){var be=this.getMinWidth()||0;
var bb=this.getMinHeight()||0;
var bf=this.getWidth()||be;
var bd=this.getHeight()||bb;
var ba=this.getMaxWidth()||Infinity;
var bc=this.getMaxHeight()||Infinity;
return {minWidth:be,width:bf,maxWidth:ba,minHeight:bb,height:bd,maxHeight:bc};
},_hasHeightForWidth:function(){var Y=this._getLayout();

if(Y){return Y.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(a){var b=this._getLayout();

if(b&&b.hasHeightForWidth()){return b.getHeightForWidth(a);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__dz=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__dA;
},setUserBounds:function(O,top,P,Q){this.__dA={left:O,top:top,width:P,height:Q};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__dA;
qx.ui.core.queue.Layout.add(this);
},__dC:{},setLayoutProperties:function(bk){if(bk==null){return;
}var bl=this.__dB;

if(!bl){bl=this.__dB={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bk);
}for(var bm in bk){if(bk[bm]==null){delete bl[bm];
}else{bl[bm]=bk[bm];
}}},getLayoutProperties:function(){return this.__dB||this.__dC;
},clearLayoutProperties:function(){delete this.__dB;
},updateLayoutProperties:function(V){var W=this._getLayout();

if(W){if(qx.core.Variant.isSet(e,d)){if(V){for(var X in V){if(V[X]!==null){W.verifyLayoutProperty(this,X,V[X]);
}}}}W.invalidateChildrenCache();
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
},clone:function(){var T=arguments.callee.base.call(this);
var U=this.__dB;

if(U){T.__dB=qx.lang.Object.clone(U);
}return T;
},serialize:function(){var bg=arguments.callee.base.call(this);
var bh=this.__dB;

if(bh){bg.layoutProperties=qx.lang.Object.clone(bh);
}return bg;
}},destruct:function(){this._disposeFields(n,t,x,v,I,M);
}});
})();
(function(){var gj="on",gi="px",gh="qx.debug",gg="qx.event.type.Mouse",gf="Boolean",ge="qx.event.type.Drag",gd="visible",gc="object",gb="qx.event.type.Focus",ga="Integer",fk="excluded",fj="qx.event.type.Data",fi="_applyPadding",fh="qx.event.type.Event",fg="zIndex",ff="hidden",fe="qxType",fd="String",fc="tabIndex",fb="contextmenu",gq="absolute",gr="backgroundColor",go="focused",gp="changeVisibility",gm="mshtml",gn="hovered",gk="qx.event.type.KeySequence",gl="qx.client",gs="drag",gt="height",fI="div",fH="disabled",fK="move",fJ="dragstart",fM="qx.dynlocale",fL="dragchange",fO="position",fN="dragend",fG="resize",fF="Decorator",dP="width",dQ="$$widget",dR="opacity",dS="default",dT="Color",dU="top",dV="left",dW="changeToolTipText",dX="beforeContextmenuOpen",dY="Use public 'getChildControl' instead!",gE="_applyNativeContextMenu",gD="content",gC="_applyBackgroundColor",gB="_applyFocusable",gI="changeShadow",gH="__dI",gG="qx.event.type.KeyInput",gF="createChildControl",gK="__dJ",gJ="Invalid left decorator inset detected: ",eA="Font",eB="_applyShadow",ey="Invalid layout data: ",ez="Could not add widget to itself: ",eE="_applyEnabled",eF="_applySelectable",eC="_applyKeepActive",eD="Number",ev="_applyVisibility",ew="The 'before' widget is not a child of this widget!",eh="repeat",eg="qxDraggable",ej="syncAppearance",ei="__dO",ed="paddingLeft",ec="_applyDroppable",ef="Wrong 'left' argument. ",ee="decorator",eb="protector",ea="#",eK="_applyCursor",eL="_applyDraggable",eM="Remove Error: ",eN="__dY",eG="changeTextColor",eH="changeContextMenu",eI="paddingTop",eJ="changeSelectable",eO="hideFocus",eP="Invalid top decorator inset detected: ",es="none",er="outline",eq="The 'after' widget is not a child of this widget!",ep="_applyAppearance",eo="overflowX",en="_applyOpacity",em="url(",ek="__dM",eu=")",et="qx.ui.core.Widget",eQ="_applyFont",eR="cursor",eS="__dD",eT="qxDroppable",eU="changeZIndex",eV="overflowY",eW="changeEnabled",eX="changeFont",eY="_applyDecorator",fa="_applyZIndex",fo="_applyTextColor",fn="qx.ui.menu.Menu",fm="__dE",fl="Invalid right decorator inset detected: ",fs="Invalid widget to add: ",fr="Use public 'hasChildControl' instead!",fq=" returned an invalid size hint!",fp="_applyToolTipText",fu="The layout of the widget",ft=" is not a child of this widget!",fB="true",fC="widget",fz="Wrong 'top' argument. ",fA="qxClass",fx="changeDecorator",fy="__dV",fv="_applyTabIndex",fw="Invalid bottom decorator inset detected: ",fD="changeAppearance",fE="shorthand",fS="/",fR="__dH",fU="",fT="_applyContextMenu",fW="container",fV="paddingBottom",fY="__dQ",fX="changeNativeContextMenu",fQ="qx.ui.tooltip.ToolTip",fP="qxKeepActive",gx="_applyKeepFocus",gy="paddingRight",gz="changeBackgroundColor",gA="changeLocale",gu="qxKeepFocus",gv="undefined",gw="qx/static/blank.gif";
qx.Class.define(et,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__dD=this._createContainerElement();
this.__dE=this.__dP();
this.__dD.add(this.__dE);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:fh,disappear:fh,createChildControl:fj,resize:fj,move:fj,syncAppearance:fj,mousemove:gg,mouseover:gg,mouseout:gg,mousedown:gg,mouseup:gg,click:gg,dblclick:gg,contextmenu:gg,beforeContextmenuOpen:gg,mousewheel:gg,keyup:gk,keydown:gk,keypress:gk,keyinput:gG,focus:gb,blur:gb,focusin:gb,focusout:gb,activate:gb,deactivate:gb,capture:fh,losecapture:fh,drop:ge,dragleave:ge,dragover:ge,drag:ge,dragstart:ge,dragend:ge,dragchange:ge,droprequest:ge},properties:{paddingTop:{check:ga,init:0,apply:fi,themeable:true},paddingRight:{check:ga,init:0,apply:fi,themeable:true},paddingBottom:{check:ga,init:0,apply:fi,themeable:true},paddingLeft:{check:ga,init:0,apply:fi,themeable:true},padding:{group:[eI,gy,fV,ed],mode:fE,themeable:true},zIndex:{nullable:true,init:null,apply:fa,event:eU,check:ga,themeable:true},decorator:{nullable:true,init:null,apply:eY,event:fx,check:fF,themeable:true},shadow:{nullable:true,init:null,apply:eB,event:gI,check:fF,themeable:true},backgroundColor:{nullable:true,check:dT,apply:gC,event:gz,themeable:true},textColor:{nullable:true,check:dT,apply:fo,event:eG,themeable:true,inheritable:true},font:{nullable:true,apply:eQ,check:eA,event:eX,themeable:true,inheritable:true},opacity:{check:eD,apply:en,themeable:true,nullable:true,init:null},cursor:{check:fd,apply:eK,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:fQ,nullable:true},toolTipText:{check:fd,nullable:true,event:dW,apply:fp},toolTipIcon:{check:fd,nullable:true,event:dW},visibility:{check:[gd,ff,fk],init:gd,apply:ev,event:gp},enabled:{init:true,check:gf,inheritable:true,apply:eE,event:eW},anonymous:{init:false,check:gf},tabIndex:{check:ga,nullable:true,apply:fv},focusable:{check:gf,init:false,apply:gB},keepFocus:{check:gf,init:false,apply:gx},keepActive:{check:gf,init:false,apply:eC},draggable:{check:gf,init:false,apply:eL},droppable:{check:gf,init:false,apply:ec},selectable:{check:gf,init:false,event:eJ,apply:eF},contextMenu:{check:fn,apply:fT,nullable:true,event:eH},nativeContextMenu:{check:gf,init:false,themeable:true,event:fX,apply:gE},appearance:{check:fd,init:fC,apply:ep,event:fD}},statics:{DEBUG:false,getWidgetByElement:function(be){try{while(be){var bf=be.$$widget;
if(bf!=null){return qx.core.ObjectRegistry.fromHashCode(bf);
}be=be.parentNode;
}}catch(C){}return null;
},contains:function(parent,G){while(G){if(parent==G){return true;
}G=G.getLayoutParent();
}return false;
},__dF:{},__dG:{}},members:{__dD:null,__dE:null,__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dM:null,_getLayout:function(){return this.__dM;
},_setLayout:function(bS){if(qx.core.Variant.isSet(gh,gj)){if(bS){this.assertInstance(bS,qx.ui.layout.Abstract);
}}
if(this.__dM){this.__dM.connectToWidget(null);
}
if(bS){bS.connectToWidget(this);
}this.__dM=bS;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}
if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(this.__dD);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(this.__dD);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},__dN:null,renderLayout:function(gS,top,gT,gU){var hg=arguments.callee.base.call(this,gS,top,gT,gU);
if(!hg){return;
}var gW=this.__dD;
var content=this.__dE;
var hd=hg.size||this.__dN;
var hh=gi;
if(hg.position){gW.setStyle(dV,gS+hh);
gW.setStyle(dU,top+hh);
}if(hg.size){gW.setStyle(dP,gT+hh);
gW.setStyle(gt,gU+hh);
}
if(hd||hg.local||hg.margin){var gV=this.getInsets();
var innerWidth=gT-gV.left-gV.right;
var innerHeight=gU-gV.top-gV.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}
if(this.__dN){content.setStyle(dV,gV.left+hh);
content.setStyle(dU,gV.top+hh);
}
if(hd){content.setStyle(dP,innerWidth+hh);
content.setStyle(gt,innerHeight+hh);
}
if(hg.size){var hf=this.__dJ;

if(hf){hf.setStyles({width:gT+gi,height:gU+gi});
}}
if(hg.size||this.__dN){var ha=qx.theme.manager.Decoration.getInstance();
var hi=this.getDecorator();

if(hi){var hb=this.__dH;
var hc=ha.resolve(hi);
hc.resize(hb.getDomElement(),gT,gU);
}}
if(hg.size){var he=this.getShadow();

if(he){var hb=this.__dI;
var hc=ha.resolve(he);
var gV=hc.getInsets();
var gY=gT+gV.left+gV.right;
var gX=gU+gV.top+gV.bottom;
hc.resize(hb.getDomElement(),gY,gX);
}}
if(hd||hg.local||hg.margin){if(this.__dM&&this.hasLayoutChildren()){this.__dM.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(hg.position&&this.hasListener(fK)){this.fireDataEvent(fK,this.getBounds());
}
if(hg.size&&this.hasListener(fG)){this.fireDataEvent(fG,this.getBounds());
}delete this.__dN;
},__dO:null,clearSeparators:function(){var hW=this.__dO;

if(!hW){return;
}var hX=qx.ui.core.Widget.__dF;
var content=this.__dE;
var hV,hU;

for(var i=0,l=hW.length;i<l;i++){hU=hW[i];
hV=hU.$$separator;
if(!hX[hV]){hX[hV]=[hU];
}else{hX[hV].push(hU);
}content.remove(hU);
}hW.length=0;
},renderSeparator:function(dG,dH){var dO=qx.ui.core.Widget.__dF;
var dM=qx.theme.manager.Decoration.getInstance();

if(typeof dG==gc){var dN=dG.toHashCode();
var dJ=dG;
}else{var dN=dG;
var dJ=dM.resolve(dG);
}var dK=dO[dG];

if(dK&&dK.length>0){var dL=dK.pop();
}else{var dL=this.__dU(dJ);
}this.__dE.add(dL);
dJ.resize(dL.getDomElement(),dH.width,dH.height);
var dI=dL.getDomElement().style;
dI.left=dH.left+gi;
dI.top=dH.top+gi;
if(!this.__dO){this.__dO=[dL];
}else{this.__dO.push(dL);
}dL.$$separator=dN;
},_computeSizeHint:function(){var N=this.getWidth();
var M=this.getMinWidth();
var I=this.getMaxWidth();
var L=this.getHeight();
var J=this.getMinHeight();
var K=this.getMaxHeight();
var O=this._getContentHint();
var H=this.getInsets();
var Q=H.left+H.right;
var P=H.top+H.bottom;

if(N==null){N=O.width+Q;
}
if(L==null){L=O.height+P;
}
if(M==null){M=Q;

if(O.minWidth!=null){M+=O.minWidth;
}}
if(J==null){J=P;

if(O.minHeight!=null){J+=O.minHeight;
}}
if(I==null){if(O.maxWidth==null){I=Infinity;
}else{I=O.maxWidth+Q;
}}
if(K==null){if(O.maxHeight==null){K=Infinity;
}else{K=O.maxHeight+P;
}}return {width:N,minWidth:M,maxWidth:I,height:L,minHeight:J,maxHeight:K};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__dM){this.__dM.invalidateLayoutCache();
}},_getContentHint:function(){var ie=this.__dM;

if(ie){if(this.hasLayoutChildren()){var ig=ie.getSizeHint();

if(qx.core.Variant.isSet(gh,gj)){var ic=fu+this.toString()+fq;
this.assertInteger(ig.width,ef+ic);
this.assertInteger(ig.height,fz+ic);
}return ig;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(bY){var cd=this.getInsets();
var cg=cd.left+cd.right;
var cf=cd.top+cd.bottom;
var ce=bY-cg;
var cb=this._getLayout();

if(cb&&cb.hasHeightForWidth()){var ca=cb.getHeightForWidth(bY);
}else{ca=this._getContentHeightForWidth(ce);
}var cc=ca+cf;
return cc;
},_getContentHeightForWidth:function(bv){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dw=this.getPaddingRight();
var dx=this.getPaddingBottom();
var dC=this.getPaddingLeft();
var dB=this.getDecorator();

if(dB){var dA=qx.theme.manager.Decoration.getInstance();
var dz=dA.resolve(dB);
var dy=dz.getInsets();

if(qx.core.Variant.isSet(gh,gj)){this.assertNumber(dy.top,eP+dy.top);
this.assertNumber(dy.right,fl+dy.right);
this.assertNumber(dy.bottom,fw+dy.bottom);
this.assertNumber(dy.left,gJ+dy.left);
}top+=dy.top;
dw+=dy.right;
dx+=dy.bottom;
dC+=dy.left;
}return {"top":top,"right":dw,"bottom":dx,"left":dC};
},getInnerSize:function(){var bh=this.getBounds();

if(!bh){return null;
}var bg=this.getInsets();
return {width:bh.width-bg.left-bg.right,height:bh.height-bg.top-bg.bottom};
},show:function(){this.setVisibility(gd);
},hide:function(){this.setVisibility(ff);
},exclude:function(){this.setVisibility(fk);
},isVisible:function(){return this.getVisibility()===gd;
},isHidden:function(){return this.getVisibility()!==gd;
},isExcluded:function(){return this.getVisibility()===fk;
},isSeeable:function(){var hG=this.getContainerElement().getDomElement();

if(hG){return hG.offsetWidth>0;
}var hF=this;

do{if(!hF.isVisible()){return false;
}
if(hF.isRootWidget()){return true;
}hF=hF.getLayoutParent();
}while(hF);
return false;
},_createContainerElement:function(){var dj=new qx.html.Element(fI);

if(qx.core.Variant.isSet(gh,gj)){dj.setAttribute(fe,fW);
}dj.setStyle(fO,gq);
dj.setStyle(fg,0);
dj.setAttribute(dQ,this.toHashCode());
if(qx.core.Variant.isSet(gh,gj)){dj.setAttribute(fA,this.classname);
}return dj;
},__dP:function(){var cr=this._createContentElement();

if(qx.core.Variant.isSet(gh,gj)){cr.setAttribute(fe,gD);
}cr.setStyle(fO,gq);
cr.setStyle(fg,10);
return cr;
},_createContentElement:function(){var dF=new qx.html.Element(fI);
dF.setStyle(eo,ff);
dF.setStyle(eV,ff);
return dF;
},getContainerElement:function(){return this.__dD;
},getContentElement:function(){return this.__dE;
},getDecoratorElement:function(){return this.__dH;
},__dQ:null,getLayoutChildren:function(){var hn=this.__dQ;

if(!hn){return this.__dR;
}var ho;

for(var i=0,l=hn.length;i<l;i++){var hm=hn[i];

if(hm.hasUserBounds()||hm.isExcluded()){if(ho==null){ho=hn.concat();
}qx.lang.Array.remove(ho,hm);
}}return ho||hn;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var co=this.__dM;

if(co){co.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var bW=this.__dQ;

if(!bW){return false;
}var bX;

for(var i=0,l=bW.length;i<l;i++){bX=bW[i];

if(!bX.hasUserBounds()&&!bX.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dR:[],_getChildren:function(){return this.__dQ||this.__dR;
},_indexOf:function(cY){var da=this.__dQ;

if(!da){return -1;
}return da.indexOf(cY);
},_hasChildren:function(){var hE=this.__dQ;
return hE!=null&&(!!hE[0]);
},addChildrenToQueue:function(cP){var cQ=this.__dQ;

if(!cQ){return;
}var cR;

for(var i=0,l=cQ.length;i<l;i++){cR=cQ[i];
cP[cR.$$hash]=cR;
cR.addChildrenToQueue(cP);
}},_add:function(cv,cw){if(cv.getLayoutParent()==this){qx.lang.Array.remove(this.__dQ,cv);
}
if(this.__dQ){this.__dQ.push(cv);
}else{this.__dQ=[cv];
}this.__dS(cv,cw);
},_addAt:function(X,Y,ba){if(!this.__dQ){this.__dQ=[];
}if(X.getLayoutParent()==this){qx.lang.Array.remove(this.__dQ,X);
}var bb=this.__dQ[Y];

if(bb===X){return X.setLayoutProperties(ba);
}
if(bb){qx.lang.Array.insertBefore(this.__dQ,X,bb);
}else{this.__dQ.push(X);
}this.__dS(X,ba);
},_addBefore:function(dg,dh,di){if(qx.core.Variant.isSet(gh,gj)){this.assertInArray(dh,this._getChildren(),ew);
}
if(dg==dh){return;
}
if(!this.__dQ){this.__dQ=[];
}if(dg.getLayoutParent()==this){qx.lang.Array.remove(this.__dQ,dg);
}qx.lang.Array.insertBefore(this.__dQ,dg,dh);
this.__dS(dg,di);
},_addAfter:function(z,A,B){if(qx.core.Variant.isSet(gh,gj)){this.assertInArray(A,this._getChildren(),eq);
}
if(z==A){return;
}
if(!this.__dQ){this.__dQ=[];
}if(z.getLayoutParent()==this){qx.lang.Array.remove(this.__dQ,z);
}qx.lang.Array.insertAfter(this.__dQ,z,A);
this.__dS(z,B);
},_remove:function(a){if(!this.__dQ){return;
}qx.lang.Array.remove(this.__dQ,a);
this.__dT(a);
},_removeAt:function(bw){if(!this.__dQ){throw new Error("This widget has no children!");
}var bx=this.__dQ[bw];
qx.lang.Array.removeAt(this.__dQ,bw);
this.__dT(bx);
return bx;
},_removeAll:function(){if(!this.__dQ){return;
}var F=this.__dQ.concat();
this.__dQ.length=0;

for(var i=F.length-1;i>=0;i--){this.__dT(F[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__dS:function(x,y){if(qx.core.Variant.isSet(gh,gj)){this.assertInstance(x,qx.ui.core.LayoutItem,fs+x);
this.assertNotIdentical(x,this,ez+x);

if(y!=null){this.assertType(y,gc,ey+y);
}}var parent=x.getLayoutParent();

if(parent&&parent!=this){parent._remove(x);
}x.setLayoutParent(this);
if(y){x.setLayoutProperties(y);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(x);
}},__dT:function(hp){if(qx.core.Variant.isSet(gh,gj)){this.assertNotUndefined(hp);
this.assertIdentical(hp.getLayoutParent(),this,eM+hp+ft);
}hp.setLayoutParent(null);
if(this.__dM){this.__dM.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(hp);
}},capture:function(){this.__dD.capture();
},releaseCapture:function(){this.__dD.releaseCapture();
},_applyPadding:function(ch,ci,name){this.__dN=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dJ){return;
}var r=this.__dJ=new qx.html.Element;

if(qx.core.Variant.isSet(gh,gj)){r.setAttribute(fe,eb);
}r.setStyles({position:gq,top:0,left:0,zIndex:7});
var s=this.getBounds();

if(s){this.__dJ.setStyles({width:s.width+gi,height:s.height+gi});
}if(qx.core.Variant.isSet(gl,gm)){r.setStyles({backgroundImage:em+qx.util.ResourceManager.getInstance().toUri(gw)+eu,backgroundRepeat:eh});
}this.__dD.add(r);
},__dU:function(cp){var cq=new qx.html.Element;
cq.setStyles({position:gq,top:0,left:0});

if(qx.core.Variant.isSet(gh,gj)){cq.setAttribute(fe,ee);
}cq.useMarkup(cp.getMarkup());
return cq;
},_applyDecorator:function(bH,bI){var bQ=qx.ui.core.Widget.__dF;
var bN=qx.theme.manager.Decoration.getInstance();
var bJ=this.__dD;
var bL=this.__dH;
if(!this.__dJ){this._createProtectorElement();
}var bO;

if(bI){if(typeof bI===gc){bO=bI.toHashCode();
}else{bO=bI;
bI=bN.resolve(bI);
}}var bP;

if(bH){if(typeof bH===gc){bP=bH.toHashCode();

if(qx.core.Variant.isSet(gh,gj)){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+bH);
}}}else{bP=bH;
bH=bN.resolve(bH);
}}if(bI){if(!bQ[bO]){bQ[bO]=[];
}bJ.remove(bL);
bQ[bO].push(bL);
}if(bH){if(bQ[bP]&&bQ[bP].length>0){bL=bQ[bP].pop();
}else{bL=this.__dU(bH);
bL.setStyle(fg,5);
}var bK=this.getBackgroundColor();
bH.tint(bL.getDomElement(),bK);
bJ.add(bL);
this.__dH=bL;
}else{delete this.__dH;
this._applyBackgroundColor(this.getBackgroundColor());
}if(bH&&!bI&&bK){this.getContainerElement().setStyle(gr,null);
}if(qx.ui.decoration.Util.insetsModified(bI,bH)){this.__dN=true;
qx.ui.core.queue.Layout.add(this);
}else if(bH){var bM=this.getBounds();

if(bM){bN.resolve(bH).resize(bL.getDomElement(),bM.width,bM.height);
this.__dJ.setStyles({width:bM.width+gi,height:bM.height+gi});
}}},_applyShadow:function(hs,ht){var hD=qx.ui.core.Widget.__dG;
var hA=qx.theme.manager.Decoration.getInstance();
var hv=this.__dD;
var hB;

if(ht){if(typeof ht===gc){hB=ht.toHashCode();
}else{hB=ht;
ht=hA.resolve(ht);
}}var hC;

if(hs){if(typeof hs===gc){hC=hs.toHashCode();
}else{hC=hs;
hs=hA.resolve(hs);
}}if(ht){if(!hD[hB]){hD[hB]=[];
}hv.remove(this.__dI);
hD[hB].push(this.__dI);
}if(hs){var hx;

if(hD[hC]&&hD[hC].length>0){hx=hD[hC].pop();
}else{hx=this.__dU(hs);
}hv.add(hx);
this.__dI=hx;
var hz=hs.getInsets();
hx.setStyles({left:(-hz.left)+gi,top:(-hz.top)+gi});
var hy=this.getBounds();

if(hy){var hw=hy.width+hz.left+hz.right;
var hu=hy.height+hz.top+hz.bottom;
hs.resize(hx.getDomElement(),hw,hu);
}hs.tint(hx.getDomElement(),null);
}else{delete this.__dI;
}},_applyToolTipText:function(dt,du){if(qx.core.Variant.isSet(fM,gj)){if(this.__dL){return;
}var dv=qx.locale.Manager.getInstance();
this.__dL=dv.addListener(gA,function(){if(dt&&dt.translate){this.setToolTipText(dt.translate());
}},this);
}},_applyTextColor:function(bt,bu){},_applyZIndex:function(bC,bD){this.__dD.setStyle(fg,bC==null?0:bC);
},_applyVisibility:function(cU,cV){if(cU===gd){this.__dD.show();
}else{this.__dD.hide();
}var parent=this.$$parent;

if(parent&&(cV==null||cU==null||cV===fk||cU===fk)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(hY,ia){this.__dD.setStyle(dR,hY==1?null:hY);
if(qx.core.Variant.isSet(gl,gm)){if(!qx.Class.isSubClassOf(this.__dE.constructor,qx.html.Image)){var ib=(hY==1||hY==null)?null:0.99;
this.__dE.setStyle(dR,ib);
}}},_applyCursor:function(dk,dl){if(dk==null&&!this.isSelectable()){dk=dS;
}this.__dD.setStyle(eR,dk,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(bl,bm){var bs=this.getDecorator();
var bp=this.getBackgroundColor();
var bo=this.__dD;

if(bs){var bq=this.__dH;

if(bq){var br=qx.theme.manager.Decoration.getInstance().resolve(bs);
br.tint(this.__dH.getDomElement(),bp);
}bo.setStyle(gr,null);
}else{var bn=qx.theme.manager.Color.getInstance().resolve(bp);
bo.setStyle(gr,bn);
}},_applyFont:function(hj,hk){},__dV:null,$$stateChanges:null,_forwardStates:null,hasState:function(bc){var bd=this.__dV;
return bd&&bd[bc];
},addState:function(db){var dc=this.__dV;

if(!dc){dc=this.__dV={};
}
if(dc[db]){return;
}this.__dV[db]=true;
if(db===gn){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var df=this.__dY;

if(forward&&forward[db]&&df){var dd;

for(var de in df){dd=df[de];

if(dd instanceof qx.ui.core.Widget){df[de].addState(db);
}}}},removeState:function(m){var n=this.__dV;

if(!n||!n[m]){return;
}delete this.__dV[m];
if(m===gn){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var q=this.__dY;

if(forward&&forward[m]&&q){for(var p in q){var o=q[p];

if(o instanceof qx.ui.core.Widget){o.removeState(m);
}}}},replaceState:function(cx,cy){var cz=this.__dV;

if(!cz){cz=this.__dV={};
}
if(!cz[cy]){cz[cy]=true;
}
if(cz[cx]){delete cz[cx];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cC=this.__dY;

if(forward&&forward[cy]&&cC){for(var cB in cC){var cA=cC[cB];

if(cA instanceof qx.ui.core.Widget){cA.replaceState(cx,cy);
}}}},__dW:null,__dX:null,syncAppearance:function(){var cJ=this.__dV;
var cI=this.__dW;
var cK=qx.theme.manager.Appearance.getInstance();
var cG=qx.core.Property.$$method.setThemed;
var cO=qx.core.Property.$$method.resetThemed;
if(this.__dX){delete this.__dX;
if(cI){var cF=cK.styleFrom(cI,cJ,null,this.getAppearance());
if(cF){cI=null;
}}}if(!cI){var cH=this;
var cN=[];

do{cN.push(cH.$$subcontrol||cH.getAppearance());
}while(cH=cH.$$subparent);
cI=this.__dW=cN.reverse().join(fS).replace(/#[0-9]+/g,fU);
}var cL=cK.styleFrom(cI,cJ,null,this.getAppearance());

if(cL){if(cF){for(var cM in cF){if(cL[cM]===undefined){this[cO[cM]]();
}}}if(qx.core.Variant.isSet(gh,gj)){for(var cM in cL){if(!this[cG[cM]]){throw new Error(this.classname+' has no themeable property "'+cM+'" while styling '+cI);
}}}if(qx.core.Variant.isSet(gh,gj)){for(var cM in cL){if(cL[cM]===gv){this.warn("Old undefined value. Please use the identifier undefined instead of the string value.");
cL[cM]=undefined;
}}}
for(var cM in cL){cL[cM]===undefined?this[cO[cM]]():this[cG[cM]](cL[cM]);
}}else if(cF){for(var cM in cF){this[cO[cM]]();
}}this.fireDataEvent(ej,this.__dV);
},_applyAppearance:function(by,bz){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dK){qx.ui.core.queue.Appearance.add(this);
this.__dK=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__dX=true;
qx.ui.core.queue.Appearance.add(this);
var hJ=this.__dY;

if(hJ){var hH;

for(var hI in hJ){hH=hJ[hI];

if(hH instanceof qx.ui.core.Widget){hH.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var bR=this;

while(bR.getAnonymous()){bR=bR.getLayoutParent();

if(!bR){return null;
}}return bR;
},getFocusTarget:function(){var w=this;

if(!w.getEnabled()){return null;
}
while(w.getAnonymous()||!w.getFocusable()){w=w.getLayoutParent();

if(!w||!w.getEnabled()){return null;
}}return w;
},getFocusElement:function(){return this.__dD;
},isTabable:function(){return this.getContainerElement().getDomElement()&&this.isFocusable();
},_applyFocusable:function(R,S){var T=this.getFocusElement();
if(R){var U=this.getTabIndex();

if(U==null){U=1;
}T.setAttribute(fc,U);
if(qx.core.Variant.isSet(gl,gm)){T.setAttribute(eO,fB);
}else{T.setStyle(er,es);
}}else{if(T.isNativelyFocusable()){T.setAttribute(fc,-1);
}else if(S){T.setAttribute(fc,null);
}}},_applyKeepFocus:function(V){var W=this.getFocusElement();
W.setAttribute(gu,V?gj:null);
},_applyKeepActive:function(dD){var dE=this.getContainerElement();
dE.setAttribute(fP,dD?gj:null);
},_applyTabIndex:function(b){if(b==null){b=1;
}else if(b<1||b>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&b!=null){this.getFocusElement().setAttribute(fc,b);
}},_applySelectable:function(hT){this._applyCursor(this.getCursor());
this.__dD.setSelectable(hT);
this.__dE.setSelectable(hT);
},_applyEnabled:function(cS,cT){if(cS===false){this.addState(fH);
this.removeState(gn);
if(this.isFocusable()){this.removeState(go);
this._applyFocusable(false,true);
}}else{this.removeState(fH);
if(this.isFocusable()){this._applyFocusable(true,false);
}}},_applyNativeContextMenu:function(cj,ck,name){},_applyContextMenu:function(cW,cX){if(cX){cX.removeState(fb);

if(cX.getOpener()==this){cX.resetOpener();
}
if(!cW){this.removeListener(fb,this._onContextMenuOpen);
cX.removeListener(gp,this._onBeforeContextMenuOpen,this);
}}
if(cW){cW.setOpener(this);
cW.addState(fb);

if(!cX){this.addListener(fb,this._onContextMenuOpen);
cW.addListener(gp,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){var t=this.getContextMenu();
t.placeToMouse(e);
t.show();
e.preventDefault();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==gd&&this.hasListener(dX)){this.fireDataEvent(dX,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(bA,bB){qx.ui.core.DragDropCursor.getInstance();
if(bA){this.addListener(fJ,this._onDragStart);
this.addListener(gs,this._onDrag);
this.addListener(fN,this._onDragEnd);
this.addListener(fL,this._onDragChange);
}else{this.removeListener(fJ,this._onDragStart);
this.removeListener(gs,this._onDrag);
this.removeListener(fN,this._onDragEnd);
this.removeListener(fL,this._onDragChange);
}this.__dD.setAttribute(eg,bA?gj:null);
},_applyDroppable:function(hK,hL){this.__dD.setAttribute(eT,hK?gj:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(dS);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var D=qx.ui.core.DragDropCursor.getInstance();
var E=e.getCurrentAction();
E?D.setAction(E):D.resetAction();
},visualizeFocus:function(){this.addState(go);
},visualizeBlur:function(){this.removeState(go);
},scrollChildIntoView:function(g,h,j,k){this.scrollChildIntoViewX(g,h,k);
this.scrollChildIntoViewY(g,j,k);
},scrollChildIntoViewX:function(cs,ct,cu){this.__dE.scrollChildIntoViewX(cs.getContainerElement(),ct,cu);
},scrollChildIntoViewY:function(bE,bF,bG){this.__dE.scrollChildIntoViewY(bE.getContainerElement(),bF,bG);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.__dD.activate();
},deactivate:function(){this.__dD.deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},_hasChildControl:function(bT){qx.log.Logger.deprecatedMethodWarning(arguments.callee,fr);
return this.hasChildControl(bT);
},hasChildControl:function(hO){if(!this.__dY){return false;
}return !!this.__dY[hO];
},__dY:null,_getCreatedChildControls:function(){return this.__dY;
},_getChildControl:function(cD,cE){qx.log.Logger.deprecatedMethodWarning(arguments.callee,dY);
return this.getChildControl(cD,cE);
},getChildControl:function(bi,bj){if(!this.__dY){if(bj){return null;
}this.__dY={};
}var bk=this.__dY[bi];

if(bk){return bk;
}
if(bj===true){return null;
}return this._createChildControl(bi);
},_showChildControl:function(gQ){var gR=this.getChildControl(gQ);
gR.show();
return gR;
},_excludeChildControl:function(d){var f=this.getChildControl(d,true);

if(f){f.exclude();
}},_isChildControlVisible:function(bU){var bV=this.getChildControl(bU,true);

if(bV){return bV.isVisible();
}return false;
},_createChildControl:function(gL){if(!this.__dY){this.__dY={};
}else if(this.__dY[gL]){throw new Error("Child control '"+gL+"' already created!");
}var gP=gL.indexOf(ea);

if(gP==-1){var gM=this._createChildControlImpl(gL);
}else{var gM=this._createChildControlImpl(gL.substring(0,gP));
}
if(!gM){throw new Error("Unsupported control: "+gL);
}gM.$$subcontrol=gL;
gM.$$subparent=this;
var gN=this.__dV;
var forward=this._forwardStates;

if(gN&&forward&&gM instanceof qx.ui.core.Widget){for(var gO in gN){if(forward[gO]){gM.addState(gO);
}}}this.fireDataEvent(gF,gM);
return this.__dY[gL]=gM;
},_createChildControlImpl:function(c){return null;
},_disposeChildControls:function(){var dq=this.__dY;

if(!dq){return;
}var dn=qx.ui.core.Widget;

for(var dp in dq){var dm=dq[dp];

if(!dn.contains(this,dm)){dm.destroy();
}else{dm.dispose();
}}delete this.__dY;
},_findTopControl:function(){var hl=this;

while(hl){if(!hl.$$subparent){return hl;
}hl=hl.$$subparent;
}return null;
},getContainerLocation:function(dr){var ds=this.getContainerElement().getDomElement();
return ds?qx.bom.element.Location.get(ds,dr):null;
},getContentLocation:function(hq){var hr=this.getContentElement().getDomElement();
return hr?qx.bom.element.Location.get(hr,hq):null;
},setDomLeft:function(hP){var hQ=this.getContainerElement().getDomElement();

if(hQ){hQ.style.left=hP+gi;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(u){var v=this.getContainerElement().getDomElement();

if(v){v.style.top=u+gi;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hR,top){var hS=this.getContainerElement().getDomElement();

if(hS){hS.style.left=hR+gi;
hS.style.top=top+gi;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hM=arguments.callee.base.call(this);

if(this.getChildren){var hN=this.getChildren();

for(var i=0,l=hN.length;i<l;i++){hM.add(hN[i].clone());
}}return hM;
},serialize:function(){var cm=arguments.callee.base.call(this);

if(this.getChildren){var cn=this.getChildren();

if(cn.length>0){cm.children=[];

for(var i=0,l=cn.length;i<l;i++){cm.children.push(cn[i].serialize());
}}}
if(this.getLayout){var cl=this.getLayout();

if(cl){cm.layout=cl.serialize();
}}return cm;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(fM,gj)){if(this.__dL){qx.locale.Manager.getInstance().removeListenerById(this.__dL);
}}this.__dD.setAttribute(dQ,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}this._disposeArray(fY);
this._disposeArray(ei);
this._disposeFields(fy,eN);
this._disposeObjects(ek,eS,fm,fR,gH,gK);
}});
})();
(function(){var e="qx.event.type.Data",d="qx.ui.container.Composite",c="addChildWidget",b="removeChildWidget";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(f){arguments.callee.base.call(this);

if(f!=null){this._setLayout(f);
}},events:{addChildWidget:e,removeChildWidget:e},members:{_afterAddChild:function(g){this.fireNonBubblingEvent(c,qx.event.type.Data,[g]);
},_afterRemoveChild:function(a){this.fireNonBubblingEvent(b,qx.event.type.Data,[a]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var A="interval",z="Integer",y="resize",x="Boolean",w="mouse",v="disappear",u="bottom-left",t="widget",s="offsetLeft",r="offsetRight",k="right-top",q="top-right",n="top-left",i="bottom-right",h="right-bottom",m="offsetBottom",l="qx.ui.core.MPlacement",o="left-top",g="left-bottom",p="shorthand",j="offsetTop";
qx.Mixin.define(l,{properties:{position:{check:[n,q,u,i,o,g,k,h],init:u,themeable:true},placeMethod:{check:[t,w],init:w,themeable:true},domMove:{check:x,init:false},smart:{check:x,init:true,themeable:true},offsetLeft:{check:z,init:0,themeable:true},offsetTop:{check:z,init:0,themeable:true},offsetRight:{check:z,init:0,themeable:true},offsetBottom:{check:z,init:0,themeable:true},offset:{group:[j,r,m,s],mode:p,themeable:true}},members:{__ea:null,__eb:null,getLayoutLocation:function(a){var d,c,e,top;
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
},moveTo:function(B,top){if(this.getDomMove()){this.setDomPosition(B,top);
}else{this.setLayoutProperties({left:B,top:top});
}},placeToWidget:function(Q,R){if(R){this.__eb=qx.lang.Function.bind(this.placeToWidget,this,Q,false);
qx.event.Idle.getInstance().addListener(A,this.__eb);
this.addListener(v,function(){if(this.__eb){qx.event.Idle.getInstance().removeListener(A,this.__eb);
this.__eb=null;
}},this);
}var S=Q.getContainerLocation()||this.getLayoutLocation(Q);
this.__ec(S);
},placeToMouse:function(event){var P=event.getDocumentLeft();
var top=event.getDocumentTop();
var O={left:P,top:top,right:P,bottom:top};
this.__ec(O);
},placeToElement:function(C,D){var location=qx.bom.element.Location.get(C);
var E={left:location.left,top:location.top,right:location.left+C.offsetWidth,bottom:location.top+C.offsetHeight};
if(D){this.__eb=qx.lang.Function.bind(this.placeToElement,this,C,false);
qx.event.Idle.getInstance().addListener(A,this.__eb);
this.addListener(v,function(){if(this.__eb){qx.event.Idle.getInstance().removeListener(A,this.__eb);
this.__eb=null;
}},this);
}this.__ec(E);
},placeToPoint:function(M){var N={left:M.left,top:M.top,right:M.left,bottom:M.top};
this.__ec(N);
},__ec:function(F){var L=this.getBounds();

if(L==null){if(!this.__ea){this.addListener(y,this.__ec);
}this.__ea=F;
return;
}else if(this.__ea){F=this.__ea;
delete this.__ea;
this.removeListener(y,this.__ec);
}var G=this.getLayoutParent().getBounds();
var J=this.getPosition();
var K=this.getSmart();
var H={left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
var I=qx.util.PlaceUtil.compute(L,G,F,J,K,H);
this.moveTo(I.left,I.top);
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
(function(){var r="atom",q="Integer",p="String",o="_applyRich",n="qx.ui.tooltip.ToolTip",m="_applyIcon",l="tooltip",k="qx.ui.core.Widget",j="Boolean",i="_applyLabel";
qx.Class.define(n,{extend:qx.ui.popup.Popup,construct:function(s,t){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(r);
if(s!=null){this.setLabel(s);
}
if(t!=null){this.setIcon(t);
}},properties:{appearance:{refine:true,init:l},showTimeout:{check:q,init:700,themeable:true},hideTimeout:{check:q,init:4000,themeable:true},label:{check:p,nullable:true,apply:i},icon:{check:p,nullable:true,apply:m,themeable:true},rich:{check:j,init:false,apply:o},opener:{check:k,nullable:true}},members:{_createChildControlImpl:function(d){var e;

switch(d){case r:e=new qx.ui.basic.Atom;
this._add(e);
break;
}return e||arguments.callee.base.call(this,d);
},_applyIcon:function(f,g){var h=this.getChildControl(r);
f==null?h.resetIcon:h.setIcon(f);
},_applyLabel:function(u,v){var w=this.getChildControl(r);
u==null?w.resetLabel():w.setLabel(u);
},_applyRich:function(a,b){var c=this.getChildControl(r);
c.setRich(a);
}}});
})();
(function(){var r="qx.ui.core.queue.Layout",q="layout";
qx.Class.define(r,{statics:{__ed:{},remove:function(s){delete this.__ed[s.$$hash];
},add:function(e){this.__ed[e.$$hash]=e;
qx.ui.core.queue.Manager.scheduleFlush(q);
},flush:function(){var f=this.__eg();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(a){var b=this.__ef;
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
},__ee:function(){var p=qx.ui.core.queue.Visibility;
this.__ef={};
var o=[];
var n=this.__ed;
var k,m;

for(var l in n){k=n[l];

if(p.isVisible(k)){m=this.getNestingLevel(k);
if(!o[m]){o[m]={};
}o[m][l]=k;
delete n[l];
}}return o;
},__eg:function(){var w=[];
var y=this.__ee();

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
(function(){var d="qx.event.handler.UserAction",c="__ei",b="__eh";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){arguments.callee.base.call(this);
this.__eh=h;
this.__ei=h.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eh:null,__ei:null,canHandleEvent:function(i,j){},registerEvent:function(e,f,g){},unregisterEvent:function(k,l,m){}},destruct:function(){this._disposeFields(b,c);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var d="__ek",c="qx.util.DeferredCallManager",b="singleton",a="__ej";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){this.__ej={};
this.__ek=qx.lang.Function.bind(this.__eo,this);
this.__el=false;
},members:{__em:null,__en:null,__ej:null,__el:null,__ek:null,schedule:function(e){if(this.__em==null){this.__em=window.setTimeout(this.__ek,0);
}var f=e.toHashCode();
if(this.__en&&this.__en[f]){return;
}this.__ej[f]=e;
this.__el=true;
},cancel:function(i){var j=i.toHashCode();
if(this.__en&&this.__en[j]){this.__en[j]=null;
return;
}delete this.__ej[j];
if(qx.lang.Object.isEmpty(this.__ej)&&this.__em!=null){window.clearTimeout(this.__em);
this.__em=null;
}},__eo:qx.event.GlobalError.observeMethod(function(){this.__em=null;
while(this.__el){this.__en=qx.lang.Object.clone(this.__ej);
this.__ej={};
this.__el=false;

for(var h in this.__en){var g=this.__en[h];

if(g){this.__en[h]=null;
g.call();
}}}this.__en=null;
})},destruct:function(){if(this.__em!=null){window.clearTimeout(this.__em);
}this._disposeFields(d,a);
}});
})();
(function(){var f="qx.util.DeferredCall",e="__eq",d="__ep",c="__er";
qx.Class.define(f,{extend:qx.core.Object,construct:function(g,h){arguments.callee.base.call(this);
this.__ep=g;
this.__eq=h||null;
this.__er=qx.util.DeferredCallManager.getInstance();
},members:{__ep:null,__eq:null,__er:null,cancel:function(){this.__er.cancel(this);
},schedule:function(){this.__er.schedule(this);
},call:function(){this.__eq?this.__ep.apply(this.__eq):this.__ep();
}},destruct:function(a,b){this.cancel();
this._disposeFields(e,d,c);
}});
})();
(function(){var bK="element",bJ="on",bI="qx.debug",bH="qx.client",bG="div",bF="': ",bE="Invalid context for callback.",bD="'",bC="Invalid event type.",bB="Invalid callback function",cz="",cy="mshtml",cx="none",cw="__eM",cv="qx.html.Element",cu="__eK",ct="Use public 'clearTextSelection' instead!",cs="__eO",cr="|capture|",cq="__eI",bR="Invalid capture flag.",bS="focus",bP="Failed to add event listener for type '",bQ="blur",bN="__ez",bO="deactivate",bL="userSelect",bM="Use public 'setTextSelection' instead!",bV=" from the target '",bW="capture",ce="releaseCapture",cc="__eJ",ci="__eQ",cg="__eN",cm="__eH",ck="qxSelectable",bY="__eL",cp="tabIndex",co="off",cn="Use public 'getTextSelectionLength' instead!",bX="activate",ca="__eE",cb="normal",cd=" to the target '",cf="Failed to remove event listener for type '",ch="webkit",cj="Invalid capture falg.",cl="|bubble|",bT="__eD",bU="Use public 'getTextSelection' instead!";
qx.Class.define(cv,{extend:qx.core.Object,construct:function(U){arguments.callee.base.call(this);
this.__es=U||bG;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__et:{},_scheduleFlush:function(dA){qx.html.Element.__eY.schedule();
},_mshtmlVisibilitySort:qx.core.Variant.select(bH,{"mshtml":function(a,b){var dy=a.__ez;
var dx=b.__ez;

if(dy.contains(dx)){return 1;
}
if(dx.contains(dy)){return -1;
}return 0;
},"default":null}),flush:function(){var dP;

if(qx.core.Variant.isSet(bI,bJ)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var dI=this.__eu();
var dH=dI.getFocus();

if(dH&&this.__ey(dH)){dI.blur(dH);
}var dX=dI.getActive();

if(dX&&this.__ey(dX)){qx.bom.Element.deactivate(dX);
}var dV=this.__ew();

if(dV&&this.__ey(dV)){qx.bom.Element.releaseCapture(dV);
}var dQ=[];
var dS=this._modified;

for(var dO in dS){dP=dS[dO];
if(dP.__eS()){if(dP.__ez&&qx.dom.Hierarchy.isRendered(dP.__ez)){dQ.push(dP);
}else{if(qx.core.Variant.isSet(bI,bJ)){if(this.DEBUG){dP.debug("Flush invisible element");
}}dP.__eR();
}delete dS[dO];
}}
for(var i=0,l=dQ.length;i<l;i++){dP=dQ[i];

if(qx.core.Variant.isSet(bI,bJ)){if(this.DEBUG){dP.debug("Flush rendered element");
}}dP.__eR();
}var dM=this._visibility;
if(qx.core.Variant.isSet(bH,cy)){var dR=[];

for(var dO in dM){dR.push(dM[dO]);
}if(dR.length>1){dR.sort(this._mshtmlVisibilitySort);
dM=this._visibility={};

for(var i=0;i<dR.length;i++){dP=dR[i];
dM[dP.$$hash]=dP;
}}}
for(var dO in dM){dP=dM[dO];

if(qx.core.Variant.isSet(bI,bJ)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+dP.__eC);
}}dP.__ez.style.display=dP.__eC?cz:cx;
delete dM[dO];
}var scroll=this._scroll;

for(var dO in scroll){dP=scroll[dO];
var dY=dP.__ez;

if(dY&&dY.offsetWidth){var dK=true;
if(dP.__eF!=null){dP.__ez.scrollLeft=dP.__eF;
delete dP.__eF;
}if(dP.__eG!=null){dP.__ez.scrollTop=dP.__eG;
delete dP.__eG;
}var dU=dP.__eD;

if(dU!=null){var dN=dU.element.getDomElement();

if(dN&&dN.offsetWidth){qx.bom.element.Scroll.intoViewX(dN,dY,dU.align);
delete dP.__eD;
}else{dK=false;
}}var dL=dP.__eE;

if(dL!=null){var dN=dL.element.getDomElement();

if(dN&&dN.offsetWidth){qx.bom.element.Scroll.intoViewY(dN,dY,dL.align);
delete dP.__eE;
}else{dK=false;
}}if(dK){delete scroll[dO];
}}}var dJ={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var dW=this._actions[i];
var dT=dW.element.__ez;

if(!dT||!dJ[dW.type]&&!dW.element.__eS()){continue;
}qx.bom.Element[dW.type](dT);
}this._actions=[];
for(var dO in this.__et){var dG=this.__et[dO];
var dY=dG.element.__ez;

if(dY){qx.bom.Selection.set(dY,dG.start,dG.end);
delete this.__et[dO];
}}qx.event.handler.Appear.refresh();
},__eu:function(){if(!this.__ev){var dd=qx.event.Registration.getManager(window);
this.__ev=dd.getHandler(qx.event.handler.Focus);
}return this.__ev;
},__ew:function(){if(!this.__ex){var f=qx.event.Registration.getManager(window);
this.__ex=f.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__ex.getCaptureElement();
},__ey:function(cS){var cT=qx.core.ObjectRegistry.fromHashCode(cS.$$element);
return cT&&!cT.__eS();
}},members:{__es:null,__ez:null,__eA:false,__eB:true,__eC:true,__eD:null,__eE:null,__eF:null,__eG:null,__eH:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,_scheduleChildrenUpdate:function(){if(this.__eP){return;
}this.__eP=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bK);
},_createDomElement:function(){return qx.bom.Element.create(this.__es);
},__eR:function(){if(qx.core.Variant.isSet(bI,bJ)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var ba=this.__eO;

if(ba){var length=ba.length;
var bb;

for(var i=0;i<length;i++){bb=ba[i];

if(bb.__eC&&bb.__eB&&!bb.__ez){bb.__eR();
}}}
if(!this.__ez){this.__ez=this._createDomElement();
this.__ez.$$element=this.$$hash;
this._copyData(false);

if(ba&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__eP){this._syncChildren();
}}delete this.__eP;
},_insertChildren:function(){var cP=this.__eO;
var length=cP.length;
var cR;

if(length>2){var cQ=document.createDocumentFragment();

for(var i=0;i<length;i++){cR=cP[i];

if(cR.__ez&&cR.__eB){cQ.appendChild(cR.__ez);
}}this.__ez.appendChild(cQ);
}else{var cQ=this.__ez;

for(var i=0;i<length;i++){cR=cP[i];

if(cR.__ez&&cR.__eB){cQ.appendChild(cR.__ez);
}}}},_syncChildren:function(){var dw=qx.core.ObjectRegistry;
var dm=this.__eO;
var du=dm.length;
var dn;
var ds;
var dq=this.__ez;
var dt=dq.childNodes;
var dp=0;
var dr;

if(qx.core.Variant.isSet(bI,bJ)){var dv=0;
}for(var i=dt.length-1;i>=0;i--){dr=dt[i];
ds=dw.fromHashCode(dr.$$element);

if(!ds||!ds.__eB||ds.__eQ!==this){dq.removeChild(dr);

if(qx.core.Variant.isSet(bI,bJ)){dv++;
}}}for(var i=0;i<du;i++){dn=dm[i];
if(dn.__eB){ds=dn.__ez;
dr=dt[dp];

if(!ds){continue;
}if(ds!=dr){if(dr){dq.insertBefore(ds,dr);
}else{dq.appendChild(ds);
}
if(qx.core.Variant.isSet(bI,bJ)){dv++;
}}dp++;
}}if(qx.core.Variant.isSet(bI,bJ)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+dv+" operations");
}}},_copyData:function(cI){var cM=this.__ez;
var cL=this.__eL;

if(cL){var cJ=qx.bom.element.Attribute;

for(var cN in cL){cJ.set(cM,cN,cL[cN]);
}}var cL=this.__eK;

if(cL){var cK=qx.bom.element.Style;

if(cI){for(var cN in cL){cK.set(cM,cN,cL[cN]);
}}else{cK.setCss(cM,cK.compile(cL));
}}var cL=this.__eM;

if(cL){for(var cN in cL){this._applyProperty(cN,cL[cN]);
}}var cL=this.__eN;

if(cL){qx.event.Registration.getManager(cM).importListeners(cM,cL);
delete this.__eN;
}},_syncData:function(){var w=this.__ez;
var v=qx.bom.element.Attribute;
var t=qx.bom.element.Style;
var u=this.__eI;

if(u){var B=this.__eL;

if(B){var z;

for(var A in u){z=B[A];

if(z!==undefined){v.set(w,A,z);
}else{v.reset(w,A);
}}}this.__eI=null;
}var u=this.__eH;

if(u){var B=this.__eK;

if(B){var z;

for(var A in u){z=B[A];

if(z!==undefined){t.set(w,A,z);
}else{t.reset(w,A);
}}}this.__eH=null;
}var u=this.__eJ;

if(u){var B=this.__eM;

if(B){var z;

for(var A in u){this._applyProperty(A,B[A]);
}}this.__eJ=null;
}},__eS:function(){var cV=this;
while(cV){if(cV.__eA){return true;
}
if(!cV.__eB||!cV.__eC){return false;
}cV=cV.__eQ;
}return false;
},__eT:function(er){if(er.__eQ===this){throw new Error("Child is already in: "+er);
}
if(er.__eA){throw new Error("Root elements could not be inserted into other ones.");
}if(er.__eQ){er.__eQ.remove(er);
}er.__eQ=this;
if(!this.__eO){this.__eO=[];
}if(this.__ez){this._scheduleChildrenUpdate();
}},__eU:function(dF){if(dF.__eQ!==this){throw new Error("Has no child: "+dF);
}if(this.__ez){this._scheduleChildrenUpdate();
}delete dF.__eQ;
},__eV:function(c){if(c.__eQ!==this){throw new Error("Has no child: "+c);
}if(this.__ez){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__eO||null;
},getChild:function(cW){var cX=this.__eO;
return cX&&cX[cW]||null;
},hasChildren:function(){var bs=this.__eO;
return bs&&bs[0]!==undefined;
},indexOf:function(j){var k=this.__eO;
return k?k.indexOf(j):-1;
},hasChild:function(d){var e=this.__eO;
return e&&e.indexOf(d)!==-1;
},add:function(q){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__eT(arguments[i]);
}this.__eO.push.apply(this.__eO,arguments);
}else{this.__eT(q);
this.__eO.push(q);
}return this;
},addAt:function(ec,ed){this.__eT(ec);
qx.lang.Array.insertAt(this.__eO,ec,ed);
return this;
},remove:function(R){var S=this.__eO;

if(!S){return;
}
if(arguments[1]){var T;

for(var i=0,l=arguments.length;i<l;i++){T=arguments[i];
this.__eU(T);
qx.lang.Array.remove(S,T);
}}else{this.__eU(R);
qx.lang.Array.remove(S,R);
}return this;
},removeAt:function(dB){var dC=this.__eO;

if(!dC){throw new Error("Has no children!");
}var dD=dC[dB];

if(!dD){throw new Error("Has no child at this position!");
}this.__eU(dD);
qx.lang.Array.removeAt(this.__eO,dB);
return this;
},removeAll:function(){var bA=this.__eO;

if(bA){for(var i=0,l=bA.length;i<l;i++){this.__eU(bA[i]);
}bA.length=0;
}return this;
},getParent:function(){return this.__eQ||null;
},insertInto:function(parent,bg){parent.__eT(this);

if(bg==null){parent.__eO.push(this);
}else{qx.lang.Array.insertAt(this.__eO,this,bg);
}return this;
},insertBefore:function(cU){var parent=cU.__eQ;
parent.__eT(this);
qx.lang.Array.insertBefore(parent.__eO,this,cU);
return this;
},insertAfter:function(cC){var parent=cC.__eQ;
parent.__eT(this);
qx.lang.Array.insertAfter(parent.__eO,this,cC);
return this;
},moveTo:function(L){var parent=this.__eQ;
parent.__eV(this);
var M=parent.__eO.indexOf(this);

if(M===L){throw new Error("Could not move to same index!");
}else if(M<L){L--;
}qx.lang.Array.removeAt(parent.__eO,M);
qx.lang.Array.insertAt(parent.__eO,this,L);
return this;
},moveBefore:function(cO){var parent=this.__eQ;
return this.moveTo(parent.__eO.indexOf(cO));
},moveAfter:function(dz){var parent=this.__eQ;
return this.moveTo(parent.__eO.indexOf(dz)+1);
},free:function(){var parent=this.__eQ;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__eO){return;
}parent.__eU(this);
qx.lang.Array.remove(parent.__eO,this);
return this;
},getDomElement:function(){return this.__ez||null;
},getNodeName:function(){return this.__es;
},setNodeName:function(name){this.__es=name;
},setRoot:function(dE){this.__eA=dE;
},useMarkup:function(X){if(this.__ez){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bH,cy)){var Y=document.createElement(bG);
}else{var Y=qx.html.Element.__eW;

if(!Y){Y=qx.html.Element.__eW=document.createElement(bG);
}}Y.innerHTML=X;
this.__ez=Y.firstChild;
this.__ez.$$element=this.$$hash;
this._copyData(true);
return this.__ez;
},useElement:function(cA){if(this.__ez){throw new Error("Could not overwrite existing element!");
}this.__ez=cA;
this.__ez.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ep=this.getAttribute(cp);

if(ep>=1){return true;
}var eo=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ep>=0&&eo[this.__es]){return true;
}return false;
},setSelectable:function(bh){this.setAttribute(ck,bh?bJ:co);
if(qx.core.Variant.isSet(bH,ch)){this.setStyle(bL,bh?cb:cx);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__es];
},include:function(){if(this.__eB){return;
}delete this.__eB;

if(this.__eQ){this.__eQ._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__eB){return;
}this.__eB=false;

if(this.__eQ){this.__eQ._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__eB===true;
},show:function(){if(this.__eC){return;
}
if(this.__ez){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bK);
}if(this.__eQ){this.__eQ._scheduleChildrenUpdate();
}delete this.__eC;
},hide:function(){if(!this.__eC){return;
}
if(this.__ez){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bK);
}this.__eC=false;
},isVisible:function(){return this.__eC===true;
},scrollChildIntoViewX:function(bt,bu,bv){var bw=this.__ez;
var bx=bt.getDomElement();

if(bv!==false&&bw&&bw.offsetWidth&&bx&&bx.offsetWidth){qx.bom.element.Scroll.intoViewX(bx,bw,bu);
}else{this.__eD={element:bt,align:bu};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bK);
}delete this.__eF;
},scrollChildIntoViewY:function(de,df,dg){var dh=this.__ez;
var di=de.getDomElement();

if(dg!==false&&dh&&dh.offsetWidth&&di&&di.offsetWidth){qx.bom.element.Scroll.intoViewY(di,dh,df);
}else{this.__eE={element:de,align:df};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bK);
}delete this.__eG;
},scrollToX:function(x,cY){var da=this.__ez;

if(cY!==true&&da&&da.offsetWidth){da.scrollLeft=x;
}else{this.__eF=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bK);
}delete this.__eD;
},getScrollX:function(){var bz=this.__ez;

if(bz){return bz.scrollLeft;
}return this.__eF||0;
},scrollToY:function(y,C){var D=this.__ez;

if(C!==true&&D&&D.offsetWidth){D.scrollTop=y;
}else{this.__eG=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bK);
}delete this.__eE;
},getScrollY:function(){var h=this.__ez;

if(h){return h.scrollTop;
}return this.__eG||0;
},getSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bU);
return this.getTextSelection();
},getSelectionLength:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cn);
return this.getTextSelectionLength();
},setSelection:function(es,et){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bM);
this.setTextSelection(es,et);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,ct);
this.clearTextSelection();
},getTextSelection:function(){var br=this.__ez;

if(br){return qx.bom.Selection.get(br);
}return null;
},getTextSelectionLength:function(){var cB=this.__ez;

if(cB){return qx.bom.Selection.getLength(cB);
}return null;
},setTextSelection:function(m,n){var o=this.__ez;

if(o){qx.bom.Selection.set(o,m,n);
return;
}qx.html.Element.__et[this.toHashCode()]={element:this,start:m,end:n};
qx.html.Element._scheduleFlush(bK);
},clearTextSelection:function(){var by=this.__ez;

if(by){qx.bom.Selection.clear(by);
}delete qx.html.Element.__et[this.toHashCode()];
},__eX:function(r){var s=qx.html.Element._actions;
s.push({type:r,element:this});
qx.html.Element._scheduleFlush(bK);
},focus:function(){this.__eX(bS);
},blur:function(){this.__eX(bQ);
},activate:function(){this.__eX(bX);
},deactivate:function(){this.__eX(bO);
},capture:function(){this.__eX(bW);
},releaseCapture:function(){this.__eX(ce);
},setStyle:function(dj,dk,dl){if(!this.__eK){this.__eK={};
}
if(this.__eK[dj]==dk){return;
}
if(dk==null){delete this.__eK[dj];
}else{this.__eK[dj]=dk;
}if(this.__ez){if(dl){qx.bom.element.Style.set(this.__ez,dj,dk);
return this;
}if(!this.__eH){this.__eH={};
}this.__eH[dj]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bK);
}return this;
},setStyles:function(bc,bd){for(var be in bc){this.setStyle(be,bc[be],bd);
}return this;
},removeStyle:function(V,W){this.setStyle(V,null,W);
},getStyle:function(p){return this.__eK?this.__eK[p]:null;
},getAllStyles:function(){return this.__eK||null;
},setAttribute:function(N,O,P){if(!this.__eL){this.__eL={};
}
if(this.__eL[N]==O){return;
}
if(O==null){delete this.__eL[N];
}else{this.__eL[N]=O;
}if(this.__ez){if(P){qx.bom.element.Attribute.set(this.__ez,N,O);
return this;
}if(!this.__eI){this.__eI={};
}this.__eI[N]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bK);
}return this;
},setAttributes:function(cD,cE){for(var cF in cD){this.setAttribute(cF,cD[cF],cE);
}return this;
},removeAttribute:function(cG,cH){this.setAttribute(cG,null,cH);
},getAttribute:function(eq){return this.__eL?this.__eL[eq]:null;
},_applyProperty:function(name,Q){},_setProperty:function(ee,ef,eg){if(!this.__eM){this.__eM={};
}
if(this.__eM[ee]==ef){return;
}
if(ef==null){delete this.__eM[ee];
}else{this.__eM[ee]=ef;
}if(this.__ez){if(eg){this._applyProperty(ee,ef);
return this;
}if(!this.__eJ){this.__eJ={};
}this.__eJ[ee]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bK);
}return this;
},_removeProperty:function(ea,eb){this._setProperty(ea,null,eb);
},_getProperty:function(bi){var bj=this.__eM;

if(!bj){return null;
}var bk=bj[bi];
return bk==null?null:bk;
},addListener:function(eh,ei,self,ej){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(bI,bJ)){var ek=bP+eh+bD+cd+this+bF;
this.assertString(eh,ek+bC);
this.assertFunction(ei,ek+bB);

if(self!==undefined){this.assertObject(self,bE);
}
if(ej!==undefined){this.assertBoolean(ej,cj);
}}
if(this.__ez){return qx.event.Registration.addListener(this.__ez,eh,ei,self,ej);
}
if(!this.__eN){this.__eN={};
}
if(ej==null){ej=false;
}var em=qx.event.Manager.getNextUniqueId();
var en=eh+(ej?cr:cl)+em;
this.__eN[en]={type:eh,listener:ei,self:self,capture:ej,unique:em};
return en;
},removeListener:function(E,F,self,G){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(bI,bJ)){var H=cf+E+bD+bV+this+bF;
this.assertString(E,H+bC);
this.assertFunction(F,H+bB);

if(self!==undefined){this.assertObject(self,bE);
}
if(G!==undefined){this.assertBoolean(G,bR);
}}
if(this.__ez){qx.event.Registration.removeListener(this.__ez,E,F,self,G);
}else{var J=this.__eN;
var I;

if(G==null){G=false;
}
for(var K in J){I=J[K];
if(I.listener===F&&I.self===self&&I.capture===G&&I.type===E){delete J[K];
break;
}}}return this;
},removeListenerById:function(bf){if(this.$$disposed){return null;
}
if(this.__ez){qx.event.Registration.removeListenerById(this.__ez,bf);
}else{delete this.__eN[bf];
}return this;
},hasListener:function(bm,bn){if(this.$$disposed){return false;
}
if(this.__ez){return qx.event.Registration.hasListener(this.__ez,bm,bn);
}var bp=this.__eN;
var bo;

if(bn==null){bn=false;
}
for(var bq in bp){bo=bp[bq];
if(bo.capture===bn&&bo.type===bm){return true;
}}return false;
}},defer:function(g){g.__eY=new qx.util.DeferredCall(g.flush,g);
},destruct:function(){var dc=this.__ez;

if(dc){qx.event.Registration.getManager(dc).removeAllListeners(dc);
dc.$$element=cz;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__eQ;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cs);
this._disposeFields(bY,cu,cg,cw,cq,cm,cc,bN,ci,bT,ca);
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__fa:false,__fb:{},scheduleFlush:function(c){var self=qx.ui.core.queue.Manager;
self.__fb[c]=true;

if(!self.__fa){self.__fd.schedule();
self.__fa=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__fc){return;
}self.__fc=true;
self.__fd.cancel();
var e=self.__fb;

while(e.visibility||e.widget||e.appearance||e.layout||e.element){if(e.widget){delete e.widget;
qx.ui.core.queue.Widget.flush();
}
if(e.visibility){delete e.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(e.appearance){delete e.appearance;
qx.ui.core.queue.Appearance.flush();
}if(e.widget||e.visibility||e.appearance){continue;
}
if(e.layout){delete e.layout;
qx.ui.core.queue.Layout.flush();
}if(e.widget||e.visibility||e.appearance||e.layout){continue;
}
if(e.element){delete e.element;
qx.html.Element.flush();
}}qx.ui.core.queue.Manager.__fa=false;

if(e.dispose){delete e.dispose;
qx.ui.core.queue.Dispose.flush();
}self.__fc=false;
}},defer:function(d){d.__fd=new qx.util.DeferredCall(d.flush);
qx.html.Element._scheduleFlush=d.scheduleFlush;
qx.event.Registration.addListener(window,a,d.flush);
}});
})();
(function(){var c="abstract",b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:c,construct:function(a){this._manager=a;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(d,event,e){return event.getBubbles();
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
(function(){var c="qx.event.dispatch.DomBubbling";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(a,event,b){return a.nodeType!==undefined&&event.getBubbles();
}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var m="keydown",l="keypress",k="qx.client",j="NumLock",i="keyup",h="Enter",g="0",f="9",e="-",d="PageUp",bx="+",bw="PrintScreen",bv="gecko",bu="A",bt="Z",bs="Left",br="F5",bq="Down",bp="Up",bo="F11",t="F6",u="useraction",r="F3",s="keyinput",p="Insert",q="F8",n="End",o="/",B="Delete",C="*",Q="F1",M="F4",Y="Home",T="F2",bk="F12",be="PageDown",H="F7",bn="F9",bm="F10",bl="Right",F="text",J="Escape",L="webkit",O="5",R="3",U="Meta",bb="7",bg="CapsLock",v="input",w="Control",I="Space",X="Tab",W="Shift",V="Pause",bd="__fh",bc="Unidentified",S="__ff",ba="qx.event.handler.Keyboard",a="__fg",bf="mshtml",x="mshtml|webkit",y="6",N="off",b="Apps",c="4",E="Alt",z="2",A="Scroll",D="1",P="8",bi="Win",bh="__fe",K="autoComplete",bj=",",G="Backspace";
qx.Class.define(ba,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bQ){arguments.callee.base.call(this);
this.__fe=bQ;
this.__ff=bQ.getWindow();
if(qx.core.Variant.isSet(k,bv)){this.__fg=this.__ff;
}else{this.__fg=this.__ff.document.documentElement;
}this.__fh={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bI){if(this._identifierToKeyCodeMap[bI]){return true;
}
if(bI.length!=1){return false;
}
if(bI>=g&&bI<=f){return true;
}
if(bI>=bu&&bI<=bt){return true;
}
switch(bI){case bx:case e:case C:case o:return true;
default:return false;
}}},members:{__fi:null,__fe:null,__ff:null,__fg:null,__fh:null,__fj:null,__fk:null,canHandleEvent:function(cA,cB){},registerEvent:function(bz,bA,bB){},unregisterEvent:function(cL,cM,cN){},_fireInputEvent:function(cn,co){var cp=this.__fe.getHandler(qx.event.handler.Focus);
var cq=cp.getActive();
if(!cq||cq.offsetWidth==0){cq=cp.getFocus();
}if(cq&&cq.offsetWidth!=0){var event=qx.event.Registration.createEvent(s,qx.event.type.KeyInput,[cn,cq,co]);
this.__fe.dispatchEvent(cq,event);
}if(this.__ff){qx.event.Registration.fireEvent(this.__ff,u,qx.event.type.Data,[s]);
}},_fireSequenceEvent:function(cb,cc,cd){var ce=this.__fe.getHandler(qx.event.handler.Focus);
var cg=ce.getActive();
if(!cg||cg.offsetWidth==0){cg=ce.getFocus();
}if(!cg||cg.offsetWidth==0){cg=this.__fe.getWindow().document.body;
}var event=qx.event.Registration.createEvent(cc,qx.event.type.KeySequence,[cb,cg,cd]);
this.__fe.dispatchEvent(cg,event);
if(qx.core.Variant.isSet(k,x)){if(cc==m&&event.getDefaultPrevented()){var cf=cb.keyCode;

if(!(this._isNonPrintableKeyCode(cf)||cf==8||cf==9)){this._fireSequenceEvent(cb,l,cd);
}}}if(this.__ff){qx.event.Registration.fireEvent(this.__ff,u,qx.event.type.Data,[cc]);
}},_initKeyObserver:function(){this.__fi=qx.lang.Function.listener(this.__fl,this);
this.__fk=qx.lang.Function.listener(this.__fn,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fg,i,this.__fi);
Event.addNativeListener(this.__fg,m,this.__fi);
Event.addNativeListener(this.__fg,l,this.__fk);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fg,i,this.__fi);
Event.removeNativeListener(this.__fg,m,this.__fi);
Event.removeNativeListener(this.__fg,l,this.__fk);

for(var bL in (this.__fj||{})){var bK=this.__fj[bL];
Event.removeNativeListener(bK.target,l,bK.callback);
}delete (this.__fj);
},__fl:qx.event.GlobalError.observeMethod(qx.core.Variant.select(k,{"mshtml":function(bM){bM=window.event||bM;
var bP=bM.keyCode;
var bN=0;
var bO=bM.type;
if(!(this.__fh[bP]==m&&bO==m)){this._idealKeyHandler(bP,bN,bO,bM);
}if(bO==m){if(this._isNonPrintableKeyCode(bP)||bP==8||bP==9){this._idealKeyHandler(bP,bN,l,bM);
}}this.__fh[bP]=bO;
},"gecko":function(bD){var bH=this._keyCodeFix[bD.keyCode]||bD.keyCode;
var bF=0;
var bG=bD.type;
if(qx.bom.client.Platform.WIN){var bE=bH?this._keyCodeToIdentifier(bH):this._charCodeToIdentifier(bF);

if(!(this.__fh[bE]==m&&bG==m)){this._idealKeyHandler(bH,bF,bG,bD);
}this.__fh[bE]=bG;
}else{this._idealKeyHandler(bH,bF,bG,bD);
}this.__fm(bD.target,bG,bH);
},"webkit":function(cj){var cm=0;
var ck=0;
var cl=cj.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cl==i||cl==m){cm=this._charCode2KeyCode[cj.charCode]||cj.keyCode;
}else{if(this._charCode2KeyCode[cj.charCode]){cm=this._charCode2KeyCode[cj.charCode];
}else{ck=cj.charCode;
}}this._idealKeyHandler(cm,ck,cl,cj);
}else{cm=cj.keyCode;
if(!(this.__fh[cm]==m&&cl==m)){this._idealKeyHandler(cm,ck,cl,cj);
}if(cl==m){if(this._isNonPrintableKeyCode(cm)||cm==8||cm==9){this._idealKeyHandler(cm,ck,l,cj);
}}this.__fh[cm]=cl;
}},"opera":function(bY){this._idealKeyHandler(bY.keyCode,0,bY.type,bY);
}})),__fm:qx.core.Variant.select(k,{"gecko":function(cC,cD,cE){if(cD===m&&(cE==33||cE==34||cE==38||cE==40)&&cC.type==F&&cC.tagName.toLowerCase()===v&&cC.getAttribute(K)!==N){if(!this.__fj){this.__fj={};
}var cG=qx.core.ObjectRegistry.toHashCode(cC);

if(this.__fj[cG]){return;
}var self=this;
this.__fj[cG]={target:cC,callback:function(by){qx.bom.Event.stopPropagation(by);
self.__fn(by);
}};
var cF=qx.event.GlobalError.observeMethod(this.__fj[cG].callback);
qx.bom.Event.addNativeListener(cC,l,cF);
}},"default":null}),__fn:qx.event.GlobalError.observeMethod(qx.core.Variant.select(k,{"mshtml":function(ca){ca=window.event||ca;

if(this._charCode2KeyCode[ca.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[ca.keyCode],0,ca.type,ca);
}else{this._idealKeyHandler(0,ca.keyCode,ca.type,ca);
}},"gecko":function(cH){var cK=this._keyCodeFix[cH.keyCode]||cH.keyCode;
var cI=cH.charCode;
var cJ=cH.type;
this._idealKeyHandler(cK,cI,cJ,cH);
},"webkit":function(cw){if(qx.bom.client.Engine.VERSION<525.13){var cz=0;
var cx=0;
var cy=cw.type;

if(cy==i||cy==m){cz=this._charCode2KeyCode[cw.charCode]||cw.keyCode;
}else{if(this._charCode2KeyCode[cw.charCode]){cz=this._charCode2KeyCode[cw.charCode];
}else{cx=cw.charCode;
}}this._idealKeyHandler(cz,cx,cy,cw);
}else{if(this._charCode2KeyCode[cw.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cw.keyCode],0,cw.type,cw);
}else{this._idealKeyHandler(0,cw.keyCode,cw.type,cw);
}}},"opera":function(bC){if(this._keyCodeToIdentifierMap[bC.keyCode]){this._idealKeyHandler(bC.keyCode,0,bC.type,bC);
}else{this._idealKeyHandler(0,bC.keyCode,bC.type,bC);
}}})),_idealKeyHandler:function(bR,bS,bT,bU){if(!bR&&!bS){return;
}var bV;
if(bR){bV=this._keyCodeToIdentifier(bR);
this._fireSequenceEvent(bU,bT,bV);
}else{bV=this._charCodeToIdentifier(bS);
this._fireSequenceEvent(bU,l,bV);
this._fireInputEvent(bU,bS);
}},_specialCharCodeMap:{8:G,9:X,13:h,27:J,32:I},_keyCodeToIdentifierMap:{16:W,17:w,18:E,20:bg,224:U,37:bs,38:bp,39:bl,40:bq,33:d,34:be,35:n,36:Y,45:p,46:B,112:Q,113:T,114:r,115:M,116:br,117:t,118:H,119:q,120:bn,121:bm,122:bo,123:bk,144:j,44:bw,145:A,19:V,91:bi,93:b},_numpadToCharCode:{96:g.charCodeAt(0),97:D.charCodeAt(0),98:z.charCodeAt(0),99:R.charCodeAt(0),100:c.charCodeAt(0),101:O.charCodeAt(0),102:y.charCodeAt(0),103:bb.charCodeAt(0),104:P.charCodeAt(0),105:f.charCodeAt(0),106:C.charCodeAt(0),107:bx.charCodeAt(0),109:e.charCodeAt(0),110:bj.charCodeAt(0),111:o.charCodeAt(0)},_charCodeA:bu.charCodeAt(0),_charCodeZ:bt.charCodeAt(0),_charCode0:g.charCodeAt(0),_charCode9:f.charCodeAt(0),_isNonPrintableKeyCode:function(cv){return this._keyCodeToIdentifierMap[cv]?true:false;
},_isIdentifiableKeyCode:function(bJ){if(bJ>=this._charCodeA&&bJ<=this._charCodeZ){return true;
}if(bJ>=this._charCode0&&bJ<=this._charCode9){return true;
}if(this._specialCharCodeMap[bJ]){return true;
}if(this._numpadToCharCode[bJ]){return true;
}if(this._isNonPrintableKeyCode(bJ)){return true;
}return false;
},_keyCodeToIdentifier:function(bW){if(this._isIdentifiableKeyCode(bW)){var bX=this._numpadToCharCode[bW];

if(bX){return String.fromCharCode(bX);
}return (this._keyCodeToIdentifierMap[bW]||this._specialCharCodeMap[bW]||String.fromCharCode(bW));
}else{return bc;
}},_charCodeToIdentifier:function(ci){return this._specialCharCodeMap[ci]||String.fromCharCode(ci).toUpperCase();
},_identifierToKeyCode:function(ch){return qx.event.handler.Keyboard._identifierToKeyCodeMap[ch]||ch.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this._disposeFields(bh,S,a,bd);
},defer:function(cr,cs,ct){qx.event.Registration.addHandler(cr);
if(!cr._identifierToKeyCodeMap){cr._identifierToKeyCodeMap={};

for(var cu in cs._keyCodeToIdentifierMap){cr._identifierToKeyCodeMap[cs._keyCodeToIdentifierMap[cu]]=parseInt(cu,10);
}
for(var cu in cs._specialCharCodeMap){cr._identifierToKeyCodeMap[cs._specialCharCodeMap[cu]]=parseInt(cu,10);
}}
if(qx.core.Variant.isSet(k,bf)){cs._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(k,bv)){cs._keyCodeFix={12:cs._identifierToKeyCode(j)};
}else if(qx.core.Variant.isSet(k,L)){if(qx.bom.client.Engine.VERSION<525.13){cs._charCode2KeyCode={63289:cs._identifierToKeyCode(j),63276:cs._identifierToKeyCode(d),63277:cs._identifierToKeyCode(be),63275:cs._identifierToKeyCode(n),63273:cs._identifierToKeyCode(Y),63234:cs._identifierToKeyCode(bs),63232:cs._identifierToKeyCode(bp),63235:cs._identifierToKeyCode(bl),63233:cs._identifierToKeyCode(bq),63272:cs._identifierToKeyCode(B),63302:cs._identifierToKeyCode(p),63236:cs._identifierToKeyCode(Q),63237:cs._identifierToKeyCode(T),63238:cs._identifierToKeyCode(r),63239:cs._identifierToKeyCode(M),63240:cs._identifierToKeyCode(br),63241:cs._identifierToKeyCode(t),63242:cs._identifierToKeyCode(H),63243:cs._identifierToKeyCode(q),63244:cs._identifierToKeyCode(bn),63245:cs._identifierToKeyCode(bm),63246:cs._identifierToKeyCode(bo),63247:cs._identifierToKeyCode(bk),63248:cs._identifierToKeyCode(bw),3:cs._identifierToKeyCode(h),12:cs._identifierToKeyCode(j),13:cs._identifierToKeyCode(h)};
}else{cs._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var v="qx.client",u="mouseup",t="click",s="mousedown",r="contextmenu",q="dblclick",p="mousewheel",o="mouseover",n="mouseout",m="DOMMouseScroll",f="on",l="mshtml|webkit|opera",i="mousemove",e="useraction",d="__fo",h="__fv",g="gecko|webkit",j="qx.event.handler.Mouse",c="__fq",k="__fp";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__fo=a;
this.__fp=a.getWindow();
this.__fq=this.__fp.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__fr:null,__fs:null,__ft:null,__fu:null,__fv:null,__fo:null,__fp:null,__fq:null,canHandleEvent:function(U,V){},registerEvent:qx.core.Variant.select(v,{"webkit":function(G,H,I){if(qx.bom.client.System.IPHONE){var J=qx.lang.Function.returnNull;
G[f+H]=J;
G[f+H]=undefined;
}},"default":qx.lang.Function.returnNull}),unregisterEvent:function(z,A,B){},__fw:function(ba,bb,bc){if(!bc){bc=ba.target||ba.srcElement;
}if(bc&&bc.nodeType){qx.event.Registration.fireEvent(bc,bb||ba.type,qx.event.type.Mouse,[ba,bc,null,true,true]);
}qx.event.Registration.fireEvent(this.__fp,e,qx.event.type.Data,[bb||ba.type]);
},_initButtonObserver:function(){this.__fr=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fq,s,this.__fr);
Event.addNativeListener(this.__fq,u,this.__fr);
Event.addNativeListener(this.__fq,t,this.__fr);
Event.addNativeListener(this.__fq,q,this.__fr);
Event.addNativeListener(this.__fq,r,this.__fr);
},_initMoveObserver:function(){this.__fs=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fq,i,this.__fs);
Event.addNativeListener(this.__fq,o,this.__fs);
Event.addNativeListener(this.__fq,n,this.__fs);
},_initWheelObserver:function(){this.__ft=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var D=qx.core.Variant.isSet(v,l)?p:m;
Event.addNativeListener(this.__fq,D,this.__ft);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fq,s,this.__fr);
Event.removeNativeListener(this.__fq,u,this.__fr);
Event.removeNativeListener(this.__fq,t,this.__fr);
Event.removeNativeListener(this.__fq,q,this.__fr);
Event.removeNativeListener(this.__fq,r,this.__fr);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fq,i,this.__fs);
Event.removeNativeListener(this.__fq,o,this.__fs);
Event.removeNativeListener(this.__fq,n,this.__fs);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var E=qx.core.Variant.isSet(v,l)?p:m;
Event.removeNativeListener(this.__fq,E,this.__ft);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(b){this.__fw(b);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(R){var S=R.type;
var T=R.target||R.srcElement;
if(qx.core.Variant.isSet(v,g)){if(T&&T.nodeType==3){T=T.parentNode;
}}
if(this.__fx){this.__fx(R,S,T);
}
if(this.__fz){this.__fz(R,S,T);
}this.__fw(R,S,T);

if(this.__fy){this.__fy(R,S,T);
}
if(this.__fA){this.__fA(R,S,T);
}this.__fu=S;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(F){this.__fw(F,p);
}),__fx:qx.core.Variant.select(v,{"webkit":function(w,x,y){if(qx.bom.client.Engine.VERSION<530){if(x==r){this.__fw(w,u,y);
}}},"default":null}),__fy:qx.core.Variant.select(v,{"opera":function(W,X,Y){if(X==u&&W.button==2){this.__fw(W,r,Y);
}},"default":null}),__fz:qx.core.Variant.select(v,{"mshtml":function(K,L,M){if(L==u&&this.__fu==t){this.__fw(K,s,M);
}else if(L==q){this.__fw(K,t,M);
}},"default":null}),__fA:qx.core.Variant.select(v,{"mshtml":null,"default":function(N,O,P){switch(O){case s:this.__fv=P;
break;
case u:if(P!==this.__fv){var Q=qx.dom.Hierarchy.getCommonParent(P,this.__fv);
this.__fw(N,t,Q);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(d,k,c,h);
},defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var P="alias",O="copy",N="blur",M="mouseout",L="keydown",K="Ctrl",J="Shift",I="mousemove",H="move",G="mouseover",bo="Alt",bn="keyup",bm="mouseup",bl="dragend",bk="on",bj="__fH",bi="mousedown",bh="qxDraggable",bg="__fI",bf="drag",W="__fD",X="drop",U="__fB",V="qxDroppable",S="qx.event.handler.DragDrop",T="droprequest",Q="__fG",R="dragstart",Y="__fC",ba="dragchange",bc="__fF",bb="__fE",be="dragleave",bd="dragover";
qx.Class.define(S,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){arguments.callee.base.call(this);
this.__fB=i;
this.__fC=i.getWindow().document.documentElement;
this.__fB.addListener(this.__fC,bi,this._onMouseDown,this);
this.__fO();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__fB:null,__fC:null,__fD:null,__fE:null,__fF:null,__fG:null,__fH:null,__fI:null,__fJ:null,__fK:null,__fL:false,__fM:0,__fN:0,canHandleEvent:function(B,C){},registerEvent:function(k,l,m){},unregisterEvent:function(q,r,s){},addType:function(E){this.__fF[E]=true;
},addAction:function(F){this.__fG[F]=true;
},supportsType:function(A){return !!this.__fF[A];
},supportsAction:function(o){return !!this.__fG[o];
},getData:function(p){if(!this.__fV||!this.__fD){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fF[p]){throw new Error("Unsupported data type: "+p+"!");
}
if(!this.__fI[p]){this.__fJ=p;
this.__fQ(T,this.__fE,false);
}
if(!this.__fI[p]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__fI[p]||null;
},getCurrentAction:function(){return this.__fK;
},addData:function(bp,bq){this.__fI[bp]=bq;
},getCurrentType:function(){return this.__fJ;
},__fO:function(){this.__fF={};
this.__fG={};
this.__fH={};
this.__fI={};
},__fP:function(){var d=this.__fG;
var b=this.__fH;
var c=null;

if(this.__fV){if(b.Shift&&b.Ctrl&&d.alias){c=P;
}else if(b.Shift&&b.Alt&&d.copy){c=O;
}else if(b.Shift&&d.move){c=H;
}else if(b.Alt&&d.alias){c=P;
}else if(b.Ctrl&&d.copy){c=O;
}else if(d.move){c=H;
}else if(d.copy){c=O;
}else if(d.alias){c=P;
}}
if(c!=this.__fK){this.__fK=c;
this.__fQ(ba,this.__fE,false);
}},__fQ:function(u,v,w,x){var z=qx.event.Registration;
var y=z.createEvent(u,qx.event.type.Drag,[w,x]);

if(this.__fE!==this.__fD){if(v==this.__fE){y.setRelatedTarget(this.__fD);
}else{y.setRelatedTarget(this.__fE);
}}return z.dispatchEvent(v,y);
},__fR:function(a){while(a&&a.nodeType==1){if(a.getAttribute(bh)==bk){return a;
}a=a.parentNode;
}return null;
},__fS:function(n){while(n&&n.nodeType==1){if(n.getAttribute(V)==bk){return n;
}n=n.parentNode;
}return null;
},__fT:function(){this.__fE=null;
this.__fB.removeListener(this.__fC,I,this._onMouseMove,this,true);
this.__fB.removeListener(this.__fC,bm,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,N,this._onWindowBlur,this);
this.__fO();
},__fU:function(){if(this.__fL){this.__fB.removeListener(this.__fC,G,this._onMouseOver,this,true);
this.__fB.removeListener(this.__fC,M,this._onMouseOut,this,true);
this.__fB.removeListener(this.__fC,L,this._onKeyDown,this,true);
this.__fB.removeListener(this.__fC,bn,this._onKeyUp,this,true);
this.__fQ(bl,this.__fE,false);
this.__fL=false;
}this.__fV=false;
this.__fD=null;
this.__fT();
},__fV:false,_onWindowBlur:function(e){this.__fU();
},_onKeyDown:function(e){var t=e.getKeyIdentifier();

switch(t){case bo:case K:case J:if(!this.__fH[t]){this.__fH[t]=true;
this.__fP();
}}},_onKeyUp:function(e){var j=e.getKeyIdentifier();

switch(j){case bo:case K:case J:if(this.__fH[j]){this.__fH[j]=false;
this.__fP();
}}},_onMouseDown:function(e){if(this.__fL){return;
}var f=this.__fR(e.getTarget());

if(f){this.__fM=e.getDocumentLeft();
this.__fN=e.getDocumentTop();
this.__fE=f;
this.__fB.addListener(this.__fC,I,this._onMouseMove,this,true);
this.__fB.addListener(this.__fC,bm,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,N,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fV){this.__fQ(X,this.__fD,false,e);
}if(this.__fL){e.stopPropagation();
}this.__fU();
},_onMouseMove:function(e){if(this.__fL){if(!this.__fQ(bf,this.__fE,true,e)){this.__fU();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fM)>3||Math.abs(e.getDocumentTop()-this.__fN)>3){if(this.__fQ(R,this.__fE,true,e)){this.__fL=true;
this.__fB.addListener(this.__fC,G,this._onMouseOver,this,true);
this.__fB.addListener(this.__fC,M,this._onMouseOut,this,true);
this.__fB.addListener(this.__fC,L,this._onKeyDown,this,true);
this.__fB.addListener(this.__fC,bn,this._onKeyUp,this,true);
var bt=this.__fH;
bt.Ctrl=e.isCtrlPressed();
bt.Shift=e.isShiftPressed();
bt.Alt=e.isAltPressed();
this.__fP();
}else{this.__fQ(bl,this.__fE,false);
this.__fT();
}}}},_onMouseOver:function(e){var br=e.getTarget();
var bs=this.__fS(br);

if(bs&&bs!=this.__fD){this.__fV=this.__fQ(bd,bs,true,e);
this.__fD=bs;
this.__fP();
}},_onMouseOut:function(e){var g=e.getTarget();
var h=this.__fS(g);

if(h&&h==this.__fD){this.__fQ(be,this.__fD,false,e);
this.__fD=null;
this.__fV=false;
qx.event.Timer.once(this.__fP,this,0);
}}},destruct:function(){this._disposeFields(bb,W,U,Y,bc,Q,bj,bg);
},defer:function(D){qx.event.Registration.addHandler(D);
}});
})();
(function(){var o="-",n="qx.event.handler.Element",m="_manager",l="_registeredEvents";
qx.Class.define(n,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){arguments.callee.base.call(this);
this._manager=d;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(p,q){},registerEvent:function(w,x,y){var B=qx.core.ObjectRegistry.toHashCode(w);
var z=B+o+x;
var A=qx.lang.Function.listener(this._onNative,this,z);
qx.bom.Event.addNativeListener(w,x,A);
this._registeredEvents[z]={element:w,type:x,listener:A};
},unregisterEvent:function(e,f,g){var j=this._registeredEvents;

if(!j){return;
}var k=qx.core.ObjectRegistry.toHashCode(e);
var h=k+o+f;
var i=this._registeredEvents[h];
qx.bom.Event.removeNativeListener(e,f,i.listener);
delete this._registeredEvents[h];
},_onNative:qx.event.GlobalError.observeMethod(function(r,s){var u=this._registeredEvents;

if(!u){return;
}var t=u[s];
qx.event.Registration.fireNonBubblingEvent(t.element,t.type,qx.event.type.Native,[r]);
})},destruct:function(){var a;
var b=this._registeredEvents;

for(var c in b){a=b[c];
qx.bom.Event.removeNativeListener(a.element,a.type,a.listener);
}this._disposeFields(m,l);
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var m="qx.event.handler.Appear",l="__fW",k="__fX",j="disappear",i="appear";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){arguments.callee.base.call(this);
this.__fW=n;
this.__fX={};
qx.event.handler.Appear.__fY[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fY:{},refresh:function(){var t=this.__fY;

for(var u in t){t[u].refresh();
}}},members:{__fW:null,__fX:null,canHandleEvent:function(a,b){},registerEvent:function(c,d,e){var f=qx.core.ObjectRegistry.toHashCode(c);
var g=this.__fX;

if(g&&!g[f]){g[f]=c;
c.$$displayed=c.offsetWidth>0;
}},unregisterEvent:function(v,w,x){var y=qx.core.ObjectRegistry.toHashCode(v);
var z=this.__fX;

if(!z){return;
}
if(z[y]){delete z[y];
v.$$displayed=null;
}},refresh:function(){var r=this.__fX;
var s;

for(var q in r){s=r[q];
var o=s.offsetWidth>0;

if((!!s.$$displayed)!==o){s.$$displayed=o;
var p=qx.event.Registration.createEvent(o?i:j);
this.__fW.dispatchEvent(s,p);
}}}},destruct:function(){this._disposeFields(l,k);
delete qx.event.handler.Appear.__fY[this.$$hash];
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var C="mshtml",B="",A="qx.client",z=">",y="<",x=" ",w="='",v="qx.bom.Element",u="div",t="' ",s="></";
qx.Class.define(v,{statics:{__ga:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,K,L){if(!L){L=window;
}
if(!name){throw new Error("The tag name is missing!");
}var N=this.__ga;
var M=B;

for(var P in K){if(N[P]){M+=P+w+K[P]+t;
}}var Q;
if(M!=B){if(qx.bom.client.Engine.MSHTML){Q=L.document.createElement(y+name+x+M+z);
}else{var O=L.document.createElement(u);
O.innerHTML=y+name+x+M+s+name+z;
Q=O.firstChild;
}}else{Q=L.document.createElement(name);
}
for(var P in K){if(!N[P]){qx.bom.element.Attribute.set(Q,P,K[P]);
}}return Q;
},empty:function(c){return c.innerHTML=B;
},addListener:function(X,Y,ba,self,bb){return qx.event.Registration.addListener(X,Y,ba,self,bb);
},removeListener:function(S,T,U,self,V){return qx.event.Registration.removeListener(S,T,U,self,V);
},removeListenerById:function(H,I){return qx.event.Registration.removeListenerById(H,I);
},hasListener:function(E,F,G){return qx.event.Registration.hasListener(E,F,G);
},focus:function(b){qx.event.Registration.getManager(b).getHandler(qx.event.handler.Focus).focus(b);
},blur:function(J){qx.event.Registration.getManager(J).getHandler(qx.event.handler.Focus).blur(J);
},activate:function(W){qx.event.Registration.getManager(W).getHandler(qx.event.handler.Focus).activate(W);
},deactivate:function(R){qx.event.Registration.getManager(R).getHandler(qx.event.handler.Focus).deactivate(R);
},capture:function(D){qx.event.Registration.getManager(D).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(D);
},releaseCapture:function(a){qx.event.Registration.getManager(a).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(a);
},clone:function(d,e){var h;

if(e||(qx.core.Variant.isSet(A,C)&&!qx.xml.Document.isXmlDocument(d))){var o=qx.event.Registration.getManager(d);
var f=qx.dom.Hierarchy.getDescendants(d);
f.push(d);
}if(qx.core.Variant.isSet(A,C)){for(var i=0,l=f.length;i<l;i++){o.toggleAttachedEvents(f[i],false);
}}var h=d.cloneNode(true);
if(qx.core.Variant.isSet(A,C)){for(var i=0,l=f.length;i<l;i++){o.toggleAttachedEvents(f[i],true);
}}if(e===true){var r=qx.dom.Hierarchy.getDescendants(h);
r.push(h);
var g,m,q,k;

for(var i=0,p=f.length;i<p;i++){q=f[i];
g=o.serializeListeners(q);

if(g.length>0){m=r[i];

for(var j=0,n=g.length;j<n;j++){k=g[j];
o.addListener(m,k.type,k.handler,k.self,k.capture);
}}}}return h;
}}});
})();
(function(){var x="qx.client",w="blur",v="focus",u="mousedown",t="on",s="mouseup",r="DOMFocusOut",q="DOMFocusIn",p="selectstart",o="onmousedown",Y="onfocusout",X="onfocusin",W="onmouseup",V="onselectstart",U="draggesture",T="_document",S="gecko",R="_root",Q="qx.event.handler.Focus",P="_applyFocus",E="_window",F="deactivate",C="qxIsRootPage",D="_applyActive",A="input",B="focusin",y="qxSelectable",z="tabIndex",G="off",H="_body",K="activate",J="1",M="focusout",L="__mouseActive",O="_manager",N="qxKeepFocus",I="qxKeepActive";
qx.Class.define(Q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bi){arguments.callee.base.call(this);
this._manager=bi;
this._window=bi.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:D,nullable:true},focus:{apply:P,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gb:null,__gc:null,__gd:null,__ge:null,__gf:null,__gg:null,__gh:null,__gi:null,__gj:null,__gk:null,canHandleEvent:function(bJ,bK){},registerEvent:function(f,g,h){},unregisterEvent:function(bB,bC,bD){},focus:function(bG){try{bG.focus();
}catch(bA){}this.setFocus(bG);
this.setActive(bG);
},activate:function(k){this.setActive(k);
},blur:function(bI){try{bI.blur();
}catch(ba){}
if(this.getActive()===bI){this.resetActive();
}
if(this.getFocus()===bI){this.resetFocus();
}},deactivate:function(bT){if(this.getActive()===bT){this.resetActive();
}},tryActivate:function(bR){var bS=this.__gy(bR);

if(bS){this.setActive(bS);
}},__gl:function(bL,bM,bN,bO){var bQ=qx.event.Registration;
var bP=bQ.createEvent(bN,qx.event.type.Focus,[bL,bM,bO]);
bQ.dispatchEvent(bL,bP);
},_windowFocused:true,__gm:function(){if(this._windowFocused){this._windowFocused=false;
this.__gl(this._window,null,w,false);
}},__gn:function(){if(!this._windowFocused){this._windowFocused=true;
this.__gl(this._window,null,v,false);
}},_initObserver:qx.core.Variant.select(x,{"gecko":function(){this.__gb=qx.lang.Function.listener(this.__gt,this);
this.__gc=qx.lang.Function.listener(this.__gu,this);
this.__gd=qx.lang.Function.listener(this.__gs,this);
this.__ge=qx.lang.Function.listener(this.__gr,this);
this.__gf=qx.lang.Function.listener(this.__go,this);
this._document.addEventListener(u,this.__gb,true);
this._document.addEventListener(s,this.__gc,true);
this._window.addEventListener(v,this.__gd,true);
this._window.addEventListener(w,this.__ge,true);
this._window.addEventListener(U,this.__gf,true);
},"mshtml":function(){this.__gb=qx.lang.Function.listener(this.__gt,this);
this.__gc=qx.lang.Function.listener(this.__gu,this);
this.__gh=qx.lang.Function.listener(this.__gp,this);
this.__gi=qx.lang.Function.listener(this.__gq,this);
this.__gg=qx.lang.Function.listener(this.__gv,this);
this._document.attachEvent(o,this.__gb);
this._document.attachEvent(W,this.__gc);
this._document.attachEvent(X,this.__gh);
this._document.attachEvent(Y,this.__gi);
this._document.attachEvent(V,this.__gg);
},"webkit":function(){this.__gb=qx.lang.Function.listener(this.__gt,this);
this.__gc=qx.lang.Function.listener(this.__gu,this);
this.__gi=qx.lang.Function.listener(this.__gq,this);
this.__gd=qx.lang.Function.listener(this.__gs,this);
this.__ge=qx.lang.Function.listener(this.__gr,this);
this.__gg=qx.lang.Function.listener(this.__gv,this);
this._document.addEventListener(u,this.__gb,true);
this._document.addEventListener(s,this.__gc,true);
this._document.addEventListener(p,this.__gg,false);
this._window.addEventListener(r,this.__gi,true);
this._window.addEventListener(v,this.__gd,true);
this._window.addEventListener(w,this.__ge,true);
},"opera":function(){this.__gb=qx.lang.Function.listener(this.__gt,this);
this.__gc=qx.lang.Function.listener(this.__gu,this);
this.__gh=qx.lang.Function.listener(this.__gp,this);
this.__gi=qx.lang.Function.listener(this.__gq,this);
this._document.addEventListener(u,this.__gb,true);
this._document.addEventListener(s,this.__gc,true);
this._window.addEventListener(q,this.__gh,true);
this._window.addEventListener(r,this.__gi,true);
}}),_stopObserver:qx.core.Variant.select(x,{"gecko":function(){this._document.removeEventListener(u,this.__gb,true);
this._document.removeEventListener(s,this.__gc,true);
this._window.removeEventListener(v,this.__gd,true);
this._window.removeEventListener(w,this.__ge,true);
this._window.removeEventListener(U,this.__gf,true);
},"mshtml":function(){this._document.detachEvent(o,this.__gb);
this._document.detachEvent(W,this.__gc);
this._document.detachEvent(X,this.__gh);
this._document.detachEvent(Y,this.__gi);
this._document.detachEvent(V,this.__gg);
},"webkit":function(){this._document.removeEventListener(u,this.__gb,true);
this._document.removeEventListener(p,this.__gg,false);
this._window.removeEventListener(q,this.__gh,true);
this._window.removeEventListener(r,this.__gi,true);
this._window.removeEventListener(v,this.__gd,true);
this._window.removeEventListener(w,this.__ge,true);
},"opera":function(){this._document.removeEventListener(u,this.__gb,true);
this._window.removeEventListener(q,this.__gh,true);
this._window.removeEventListener(r,this.__gi,true);
this._window.removeEventListener(v,this.__gd,true);
this._window.removeEventListener(w,this.__ge,true);
}}),__go:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"gecko":function(e){if(!this.__gz(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gp:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml":function(e){this.__gn();
var n=e.srcElement;
var m=this.__gx(n);

if(m){this.setFocus(m);
}this.tryActivate(n);
},"opera":function(e){var bv=e.target;

if(bv==this._document||bv==this._window){this.__gn();

if(this.__gj){this.setFocus(this.__gj);
delete this.__gj;
}
if(this.__gk){this.setActive(this.__gk);
delete this.__gk;
}}else{this.setFocus(bv);
this.tryActivate(bv);
if(!this.__gz(bv)){bv.selectionStart=0;
bv.selectionEnd=0;
}}},"default":null})),__gq:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml":function(e){if(!e.toElement){this.__gm();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bh=e.target;

if(bh===this.getFocus()){this.resetFocus();
}
if(bh===this.getActive()){this.resetActive();
}},"opera":function(e){var bE=e.target;

if(bE==this._document){this.__gm();
this.__gj=this.getFocus();
this.__gk=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bE===this.getFocus()){this.resetFocus();
}
if(bE===this.getActive()){this.resetActive();
}}},"default":null})),__gr:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__gm();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__gm();
this.__gj=this.getFocus();
this.__gk=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__gs:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"gecko":function(e){var bH=e.target;

if(bH===this._window||bH===this._document){this.__gn();
bH=this._body;
}this.setFocus(bH);
this.tryActivate(bH);
},"webkit":function(e){var l=e.target;

if(l===this._window||l===this._document){this.__gn();

if(this.__gj){this.setFocus(this.__gj);
delete this.__gj;
}
if(this.__gk){this.setActive(this.__gk);
delete this.__gk;
}}else{this.setFocus(l);
this.tryActivate(l);
}},"default":null})),__gt:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"gecko":function(e){var bn=e.target;
var bl=this.__gx(bn);
var bm=this.__gz(bn);

if(!bm){qx.bom.Event.preventDefault(e);
if(bl){if(qx.core.Variant.isSet(x,S)){var bo=qx.bom.element.Attribute.get(bl,C)===J;

if(!bo){bl.focus();
}}else{bl.focus();
}}}else if(!bl){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var j=e.srcElement;
var i=this.__gx(j);

if(i){if(!this.__gz(j)){j.unselectable=t;
document.selection.empty();
i.focus();
}}else{qx.bom.Event.preventDefault(e);
if(!this.__gz(j)){j.unselectable=t;
}}},"webkit":function(e){var bz=e.target;
var by=this.__gx(bz);

if(by){this.setFocus(by);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bu=e.target;
var bs=this.__gx(bu);

if(!this.__gz(bu)){qx.bom.Event.preventDefault(e);
if(bs){var bt=this.getFocus();

if(bt&&bt.selectionEnd){bt.selectionStart=0;
bt.selectionEnd=0;
bt.blur();
}if(bs){this.setFocus(bs);
}}}else if(bs){this.setFocus(bs);
}},"default":null})),__gu:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml":function(e){var bq=e.srcElement;

if(bq.unselectable){bq.unselectable=G;
}var br=this.getFocus();

if(br&&bq!=br&&br.nodeName.toLowerCase()===A){bq=br;
}this.tryActivate(bq);
},"gecko":function(e){var bU=e.target;

while(bU&&bU.offsetWidth===undefined){bU=bU.parentNode;
}
if(bU){this.tryActivate(bU);
}},"webkit|opera":function(e){this.tryActivate(e.target);
},"default":null})),__gv:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml|webkit":function(e){var bp=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__gz(bp)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gw:function(bb){var bc=qx.bom.element.Attribute.get(bb,z);

if(bc>=1){return true;
}var bd=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bc>=0&&bd[bb.tagName]){return true;
}return false;
},__gx:function(bF){while(bF&&bF.nodeType===1){if(bF.getAttribute(N)==t){return null;
}
if(this.__gw(bF)){return bF;
}bF=bF.parentNode;
}return this._body;
},__gy:function(a){var b=a;

while(a&&a.nodeType===1){if(a.getAttribute(I)==t){return null;
}a=a.parentNode;
}return b;
},__gz:function(bw){while(bw&&bw.nodeType===1){var bx=bw.getAttribute(y);

if(bx!=null){return bx===t;
}bw=bw.parentNode;
}return true;
},_applyActive:function(bj,bk){if(bk){this.__gl(bk,bj,F,true);
}
if(bj){this.__gl(bj,bk,K,true);
}},_applyFocus:function(c,d){if(d){this.__gl(d,c,M,true);
}
if(c){this.__gl(c,d,B,true);
}if(d){this.__gl(d,c,w,false);
}
if(c){this.__gl(c,d,v,false);
}}},destruct:function(){this._stopObserver();
this._disposeFields(O,E,T,R,H,L);
},defer:function(be){qx.event.Registration.addHandler(be);
var bf=be.FOCUSABLE_ELEMENTS;

for(var bg in bf){bf[bg.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var t="",s="qx.client",r="readOnly",q="accessKey",p="qx.bom.element.Attribute",o="rowSpan",n="vAlign",m="className",l="textContent",k="'",H="htmlFor",G="longDesc",F="cellSpacing",E="frameBorder",D="='",C="useMap",B="innerText",A="innerHTML",z="tabIndex",y="dateTime",w="maxLength",x="mshtml",u="cellPadding",v="colSpan";
qx.Class.define(p,{statics:{__gA:{names:{"class":m,"for":H,html:A,text:qx.core.Variant.isSet(s,x)?B:l,colspan:v,rowspan:o,valign:n,datetime:y,accesskey:q,tabindex:z,maxlength:w,readonly:r,longdesc:G,cellpadding:u,cellspacing:F,frameborder:E,usemap:C},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:t,maxLength:10000000,className:t,innerHTML:t,innerText:t,textContent:t,htmlFor:t,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(g){var h=[];
var j=this.__gA.runtime;

for(var i in g){if(!j[i]){h.push(i,D,g[i],k);
}}return h.join(t);
},get:qx.core.Variant.select(s,{"mshtml":function(d,name){var f=this.__gA;
var e;
name=f.names[name]||name;
if(f.original[name]){e=d.getAttribute(name,2);
}else if(f.property[name]){if(f.propertyDefault[name]&&e==f.propertyDefault[name]){return null;
}e=d[name];
}else{e=d.getAttribute(name);
}if(f.bools[name]){return !!e;
}return e;
},"default":function(J,name){var L=this.__gA;
var K;
name=L.names[name]||name;
if(L.property[name]){if(L.propertyDefault[name]&&K==L.propertyDefault[name]){return null;
}K=J[name];

if(K==null){K=J.getAttribute(name);
}}else{K=J.getAttribute(name);
}if(L.bools[name]){return !!K;
}return K;
}}),set:function(a,name,b){var c=this.__gA;
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
(function(){var c="qx.event.type.Dom";
qx.Class.define(c,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{getModifiers:function(){var b=0;
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
(function(){var q="qx.client",p="left",o="right",n="middle",m="dblclick",l="click",k="none",j="contextmenu",i="qx.event.type.Mouse",h="Chrome";
qx.Class.define(i,{extend:qx.event.type.Dom,members:{init:function(c,d,e,f,g){arguments.callee.base.call(this,c,d,e,f,g);

if(!e){this._relatedTarget=qx.bom.Event.getRelatedTarget(c);
}return this;
},__gB:qx.core.Variant.select(q,{"mshtml":{1:p,2:o,4:n},"default":{0:p,2:o,1:n}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case l:case m:return p;
case j:return o;
default:return this.__gB[this._native.button]||k;
}},isLeftPressed:function(){return this.getButton()===p;
},isMiddlePressed:function(){return this.getButton()===n;
},isRightPressed:function(){return this.getButton()===o;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(q,{"mshtml":function(){var b=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(b);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(q,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(a);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
},getWheelDelta:qx.core.Variant.select(q,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(window.navigator.userAgent.indexOf(h)!==-1){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var j="qx.client",i="CSS1Compat",h="qx.bom.Viewport";
qx.Class.define(h,{statics:{getWidth:qx.core.Variant.select(j,{"opera":function(g){return (g||window).document.body.clientWidth;
},"webkit":function(f){return (f||window).innerWidth;
},"default":function(p){var q=(p||window).document;
return q.compatMode===i?q.documentElement.clientWidth:q.body.clientWidth;
}}),getHeight:qx.core.Variant.select(j,{"opera":function(e){return (e||window).document.body.clientHeight;
},"webkit":function(n){return (n||window).innerHeight;
},"default":function(a){var b=(a||window).document;
return b.compatMode===i?b.documentElement.clientHeight:b.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(j,{"mshtml":function(k){var l=(k||window).document;
return l.documentElement.scrollLeft||l.body.scrollLeft;
},"default":function(o){return (o||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(j,{"mshtml":function(c){var d=(c||window).document;
return d.documentElement.scrollTop||d.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var P="qx.client",O="qx.dom.Hierarchy",N="previousSibling",M="*",L="nextSibling",K="parentNode";
qx.Class.define(O,{statics:{getNodeIndex:function(r){var s=0;

while(r&&(r=r.previousSibling)){s++;
}return s;
},getElementIndex:function(D){var E=0;
var F=qx.dom.Node.ELEMENT;

while(D&&(D=D.previousSibling)){if(D.nodeType==F){E++;
}}return E;
},getNextElementSibling:function(I){while(I&&(I=I.nextSibling)&&!qx.dom.Node.isElement(I)){continue;
}return I||null;
},getPreviousElementSibling:function(V){while(V&&(V=V.previousSibling)&&!qx.dom.Node.isElement(V)){continue;
}return V||null;
},contains:qx.core.Variant.select(P,{"webkit|mshtml|opera":function(f,g){if(qx.dom.Node.isDocument(f)){var h=qx.dom.Node.getDocument(g);
return f&&h==f;
}else if(qx.dom.Node.isDocument(g)){return false;
}else{return f.contains(g);
}},"gecko":function(G,H){return !!(G.compareDocumentPosition(H)&16);
},"default":function(b,c){while(c){if(b==c){return true;
}c=c.parentNode;
}return false;
}}),isRendered:function(d){if(!d.offsetParent){return false;
}var e=d.ownerDocument||d.document;
if(e.body.contains){return e.body.contains(d);
}if(e.compareDocumentPosition){return !!(e.compareDocumentPosition(d)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(p,q){return this.contains(q,p);
},getCommonParent:qx.core.Variant.select(P,{"mshtml|opera":function(n,o){if(n===o){return n;
}
while(n&&qx.dom.Node.isElement(n)){if(n.contains(o)){return n;
}n=n.parentNode;
}return null;
},"default":function(w,x){if(w===x){return w;
}var y={};
var B=qx.core.ObjectRegistry;
var A,z;

while(w||x){if(w){A=B.toHashCode(w);

if(y[A]){return y[A];
}y[A]=w;
w=w.parentNode;
}
if(x){z=B.toHashCode(x);

if(y[z]){return y[z];
}y[z]=x;
x=x.parentNode;
}}return null;
}}),getAncestors:function(a){return this._recursivelyCollect(a,K);
},getChildElements:function(t){t=t.firstChild;

if(!t){return [];
}var u=this.getNextSiblings(t);

if(t.nodeType===1){u.unshift(t);
}return u;
},getDescendants:function(Q){return qx.lang.Array.fromCollection(Q.getElementsByTagName(M));
},getFirstDescendant:function(v){v=v.firstChild;

while(v&&v.nodeType!=1){v=v.nextSibling;
}return v;
},getLastDescendant:function(m){m=m.lastChild;

while(m&&m.nodeType!=1){m=m.previousSibling;
}return m;
},getPreviousSiblings:function(i){return this._recursivelyCollect(i,N);
},getNextSiblings:function(J){return this._recursivelyCollect(J,L);
},_recursivelyCollect:function(j,k){var l=[];

while(j=j[k]){if(j.nodeType==1){l.push(j);
}}return l;
},getSiblings:function(R){return this.getPreviousSiblings(R).reverse().concat(this.getNextSiblings(R));
},isEmpty:function(C){C=C.firstChild;

while(C){if(C.nodeType===qx.dom.Node.ELEMENT||C.nodeType===qx.dom.Node.TEXT){return false;
}C=C.nextSibling;
}return true;
},cleanWhitespace:function(S){var T=S.firstChild;

while(T){var U=T.nextSibling;

if(T.nodeType==3&&!/\S/.test(T.nodeValue)){S.removeChild(T);
}T=U;
}}}});
})();
(function(){var f="qx.client",e="qx.event.type.Drag";
qx.Class.define(e,{extend:qx.event.type.Event,members:{init:function(a,b){arguments.callee.base.call(this,false,a);

if(b){this._native=b.getNativeEvent()||null;
this._originalTarget=b.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(j){var k=arguments.callee.base.call(this,j);
k._native=this._native;
return k;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var h=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(h);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(n){this.getManager().addType(n);
},addAction:function(m){this.getManager().addAction(m);
},supportsType:function(l){return this.getManager().supportsType(l);
},supportsAction:function(i){return this.getManager().supportsAction(i);
},addData:function(c,d){this.getManager().addData(c,d);
},getData:function(o){return this.getManager().getData(o);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var o="blur",n="losecapture",m="__gD",k="capture",j="__gC",h="click",g="__gE",f="qx.event.dispatch.MouseCapture",e="focus",d="scroll";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(v){arguments.callee.base.call(this);
this.__gC=v;
this.__gD=v.getWindow();
v.addListener(this.__gD,o,this.releaseCapture,this);
v.addListener(this.__gD,e,this.releaseCapture,this);
v.addListener(this.__gD,d,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__gE:null,__gC:null,__gD:null,canDispatchEvent:function(b,event,c){return (this.__gE&&this.__gF[c]);
},dispatchEvent:function(p,event,q){if(q==h){event.stopPropagation();
this.releaseCapture();
return;
}var r=this.__gC.getListeners(this.__gE,q,false);

if(r){event.setCurrentTarget(this.__gE);
event.setEventPhase(qx.event.type.Event.AT_TARGET);

for(var i=0,l=r.length;i<l;i++){var s=r[i].context||event.getCurrentTarget();
r[i].handler.call(s,event);
}}},__gF:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(t){if(this.__gE===t){return;
}
if(this.__gE){this.releaseCapture();
}this.__gE=t;
qx.event.Registration.fireEvent(t,k,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gE;
},releaseCapture:function(){var u=this.__gE;

if(!u){return;
}this.__gE=null;
qx.event.Registration.fireEvent(u,n,qx.event.type.Event,[true,false]);
}},destruct:function(){this._disposeFields(g,j,m);
},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var y="qx.client",x="",w="mshtml",v="'",u="SelectionLanguage",t="qx.xml.Document",s=" />",r="MSXML2.DOMDocument.3.0",q='<\?xml version="1.0" encoding="utf-8"?>\n<',p="MSXML2.XMLHTTP.3.0",k="MSXML2.XMLHTTP.6.0",o=" xmlns='",n="text/xml",j="XPath",h="MSXML2.DOMDocument.6.0",m="HTML";
qx.Bootstrap.define(t,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(g){if(g.nodeType===9){return g.documentElement.nodeName!==m;
}else if(g.ownerDocument){return this.isXmlDocument(g.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(y,{"mshtml":function(c,d){var e=new ActiveXObject(this.DOMDOC);
e.setProperty(u,j);

if(d){var f=q;
f+=d;

if(c){f+=o+c+v;
}f+=s;
e.loadXML(f);
}return e;
},"default":function(a,b){return document.implementation.createDocument(a||x,b||x,null);
}}),fromString:qx.core.Variant.select(y,{"mshtml":function(z){var A=qx.xml.Document.create();
A.loadXML(z);
return A;
},"default":function(E){var F=new DOMParser();
return F.parseFromString(E,n);
}})},defer:function(B){if(qx.core.Variant.isSet(y,w)){var C=[h,r];
var D=[k,p];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(G){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
break;
}}}});
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
(function(){var z="",y="qx.client",x="hidden",w="-moz-scrollbars-none",v="overflow",u=";",r="overflowY",q=":",p="overflowX",o="overflow:",L="none",K="scroll",J="borderLeftStyle",I="borderRightStyle",H="div",G="borderRightWidth",F="overflow-y",E="borderLeftWidth",D="-moz-scrollbars-vertical",C="100px",A="qx.bom.element.Overflow",B="overflow-x";
qx.Class.define(A,{statics:{__gG:null,getScrollbarWidth:function(){if(this.__gG!==null){return this.__gG;
}var bV=qx.bom.element.Style;
var bX=function(bh,bi){return parseInt(bV.get(bh,bi))||0;
};
var bY=function(bJ){return (bV.get(bJ,I)==L?0:bX(bJ,G));
};
var bW=function(Y){return (bV.get(Y,J)==L?0:bX(Y,E));
};
var cb=qx.core.Variant.select(y,{"mshtml":function(M){if(bV.get(M,r)==x||M.clientWidth==0){return bY(M);
}return Math.max(0,M.offsetWidth-M.clientLeft-M.clientWidth);
},"default":function(j){if(j.clientWidth==0){var k=bV.get(j,v);
var l=(k==K||k==D?16:0);
return Math.max(0,bY(j)+l);
}return Math.max(0,(j.offsetWidth-j.clientWidth-bW(j)));
}});
var ca=function(m){return cb(m)-bY(m);
};
var t=document.createElement(H);
var s=t.style;
s.height=s.width=C;
s.overflow=K;
document.body.appendChild(t);
var c=ca(t);
this.__gG=c?c:16;
document.body.removeChild(t);
return this.__gG;
},_compile:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bt,bu){if(bu==x){bu=w;
}return o+bu+u;
}:
function(bD,bE){return bD+q+bE+u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bx,by){return o+by+u;
}:
function(N,O){return N+q+O+u;
},"default":function(bf,bg){return bf+q+bg+u;
}}),compileX:function(bF){return this._compile(B,bF);
},compileY:function(bS){return this._compile(F,bS);
},getX:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(V,W){var X=qx.bom.element.Style.get(V,v,W,false);

if(X===w){X=x;
}return X;
}:
function(cc,cd){return qx.bom.element.Style.get(cc,p,cd,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bL,bM){return qx.bom.element.Style.get(bL,v,bM,false);
}:
function(P,Q){return qx.bom.element.Style.get(P,p,Q,false);
},"default":function(bj,bk){return qx.bom.element.Style.get(bj,p,bk,false);
}}),setX:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(R,S){if(S==x){S=w;
}R.style.overflow=S;
}:
function(f,g){f.style.overflowX=g;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(h,i){h.style.overflow=i;
}:
function(bz,bA){bz.style.overflowX=bA;
},"default":function(bd,be){bd.style.overflowX=be;
}}),resetX:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bK){bK.style.overflow=z;
}:
function(n){n.style.overflowX=z;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(br,bs){br.style.overflow=z;
}:
function(bB,bC){bB.style.overflowX=z;
},"default":function(bP){bP.style.overflowX=z;
}}),getY:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(b,d){var e=qx.bom.element.Style.get(b,v,d,false);

if(e===w){e=x;
}return e;
}:
function(bG,bH){return qx.bom.element.Style.get(bG,r,bH,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bl,bm){return qx.bom.element.Style.get(bl,v,bm,false);
}:
function(T,U){return qx.bom.element.Style.get(T,r,U,false);
},"default":function(ce,cf){return qx.bom.element.Style.get(ce,r,cf,false);
}}),setY:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bQ,bR){if(bR===x){bR=w;
}bQ.style.overflow=bR;
}:
function(bv,bw){bv.style.overflowY=bw;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bT,bU){bT.style.overflow=bU;
}:
function(bb,bc){bb.style.overflowY=bc;
},"default":function(bp,bq){bp.style.overflowY=bq;
}}),resetY:qx.core.Variant.select(y,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(ba){ba.style.overflow=z;
}:
function(bI){bI.style.overflowY=z;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bN,bO){bN.style.overflow=z;
}:
function(bn,bo){bn.style.overflowY=z;
},"default":function(a){a.style.overflowY=z;
}})}});
})();
(function(){var E="qx.client",D="",C="boxSizing",B="cursor",A="opacity",z="clip",y="overflowY",x="overflowX",w="user-select",v="userSelect",bn="appearance",bm="qx.debug",bl="Invalid argument 'smart'",bk="style",bj="on",bi="Invalid argument 'element'",bh="MozUserModify",bg="px",bf="-webkit-appearance",be="styleFloat",L="-webkit-user-select",M="-moz-appearance",J="pixelHeight",K="MozAppearance",H=":",I="pixelTop",F="Invalid argument 'name'",G="pixelLeft",N="text-overflow",O="-moz-user-select",V="Invalid argument 'styles'",T="MozUserSelect",X="qx.bom.element.Style",W="-moz-user-modify",ba="-webkit-user-modify",Y="WebkitUserSelect",Q="-o-text-overflow",bd="pixelRight",bc="cssFloat",bb="pixelWidth",P="pixelBottom",R=";",S="WebkitUserModify",U="WebkitAppearance";
qx.Class.define(X,{statics:{__gH:{styleNames:{"float":qx.core.Variant.select(E,{"mshtml":be,"default":bc}),"appearance":qx.core.Variant.select(E,{"gecko":K,"webkit":U,"default":bn}),"userSelect":qx.core.Variant.select(E,{"gecko":T,"webkit":Y,"default":v}),"userModify":qx.core.Variant.select(E,{"gecko":bh,"webkit":S,"default":v})},cssNames:{"appearance":qx.core.Variant.select(E,{"gecko":M,"webkit":bf,"default":bn}),"userSelect":qx.core.Variant.select(E,{"gecko":O,"webkit":L,"default":w}),"userModify":qx.core.Variant.select(E,{"gecko":W,"webkit":ba,"default":w}),"textOverflow":qx.core.Variant.select(E,{"opera":Q,"default":N})},mshtmlPixel:{width:bb,height:J,left:G,right:bd,top:I,bottom:P},special:{clip:1,cursor:1,opacity:1,boxSizing:1,overflowX:1,overflowY:1}},__gI:{},compile:function(a){var e=[];
var i=this.__gH;
var h=i.special;
var f=i.cssNames;
var d=this.__gI;
var g=qx.lang.String;
var name,c,b;

for(name in a){b=a[name];

if(b==null){continue;
}name=f[name]||name;
if(h[name]){switch(name){case z:e.push(qx.bom.element.Clip.compile(b));
break;
case B:e.push(qx.bom.element.Cursor.compile(b));
break;
case A:e.push(qx.bom.element.Opacity.compile(b));
break;
case C:e.push(qx.bom.element.BoxSizing.compile(b));
break;
case x:e.push(qx.bom.element.Overflow.compileX(b));
break;
case y:e.push(qx.bom.element.Overflow.compileY(b));
break;
}}else{c=d[name];

if(!c){c=d[name]=g.hyphenate(name);
}e.push(c,H,b,R);
}}return e.join(D);
},setCss:qx.core.Variant.select(E,{"mshtml":function(p,q){p.style.cssText=q;
},"default":function(n,o){n.setAttribute(bk,o);
}}),getCss:qx.core.Variant.select(E,{"mshtml":function(r){return r.style.cssText.toLowerCase();
},"default":function(bo){return bo.getAttribute(bk);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(j,name,k,l){if(qx.core.Variant.isSet(bm,bj)){qx.core.Assert.assertElement(j,bi);
qx.core.Assert.assertString(name,F);

if(l!==undefined){qx.core.Assert.assertBoolean(l,bl);
}}var m=this.__gH;
name=m.styleNames[name]||name;
if(l!==false&&m.special[name]){switch(name){case z:return qx.bom.element.Clip.set(j,k);
case B:return qx.bom.element.Cursor.set(j,k);
case A:return qx.bom.element.Opacity.set(j,k);
case C:return qx.bom.element.BoxSizing.set(j,k);
case x:return qx.bom.element.Overflow.setX(j,k);
case y:return qx.bom.element.Overflow.setY(j,k);
}}j.style[name]=k!==null?k:D;
},setStyles:function(bD,bE,bF){if(qx.core.Variant.isSet(bm,bj)){qx.core.Assert.assertElement(bD,bi);
qx.core.Assert.assertMap(bE,V);

if(bF!==undefined){qx.core.Assert.assertBoolean(bF,bl);
}}
for(var name in bE){this.set(bD,name,bE[name],bF);
}},reset:function(s,name,t){var u=this.__gH;
name=u.styleNames[name]||name;
if(t!==false&&u.special[name]){switch(name){case z:return qx.bom.element.Clip.reset(s);
case B:return qx.bom.element.Cursor.reset(s);
case A:return qx.bom.element.Opacity.reset(s);
case C:return qx.bom.element.BoxSizing.reset(s);
case x:return qx.bom.element.Overflow.resetX(s);
case y:return qx.bom.element.Overflow.resetY(s);
}}s.style[name]=D;
},get:qx.core.Variant.select(E,{"mshtml":function(bv,name,bw,bx){var bC=this.__gH;
name=bC.styleNames[name]||name;
if(bx!==false&&bC.special[name]){switch(name){case z:return qx.bom.element.Clip.get(bv,bw);
case B:return qx.bom.element.Cursor.get(bv,bw);
case A:return qx.bom.element.Opacity.get(bv,bw);
case C:return qx.bom.element.BoxSizing.get(bv,bw);
case x:return qx.bom.element.Overflow.getX(bv,bw);
case y:return qx.bom.element.Overflow.getY(bv,bw);
}}if(!bv.currentStyle){return bv.style[name]||D;
}switch(bw){case this.LOCAL_MODE:return bv.style[name]||D;
case this.CASCADED_MODE:return bv.currentStyle[name]||D;
default:var bB=bv.currentStyle[name]||D;
if(/^-?[\.\d]+(px)?$/i.test(bB)){return bB;
}var bA=bC.mshtmlPixel[name];

if(bA){var by=bv.style[name];
bv.style[name]=bB||0;
var bz=bv.style[bA]+bg;
bv.style[name]=by;
return bz;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bB)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bB;
}},"default":function(bp,name,bq,br){var bu=this.__gH;
name=bu.styleNames[name]||name;
if(br!==false&&bu.special[name]){switch(name){case z:return qx.bom.element.Clip.get(bp,bq);
case B:return qx.bom.element.Cursor.get(bp,bq);
case A:return qx.bom.element.Opacity.get(bp,bq);
case C:return qx.bom.element.BoxSizing.get(bp,bq);
case x:return qx.bom.element.Overflow.getX(bp,bq);
case y:return qx.bom.element.Overflow.getY(bp,bq);
}}switch(bq){case this.LOCAL_MODE:return bp.style[name]||D;
case this.CASCADED_MODE:if(bp.currentStyle){return bp.currentStyle[name]||D;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bs=qx.dom.Node.getDocument(bp);
var bt=bs.defaultView.getComputedStyle(bp,null);
return bt?bt[name]:D;
}}})}});
})();
(function(){var A="auto",z="px",y=",",x="clip:auto;",w="rect(",v=");",u="",t=")",s="qx.bom.element.Clip",r="string",o="rect(auto)",q="clip:rect(",p="clip",n="rect(auto,auto,auto,auto)";
qx.Class.define(s,{statics:{compile:function(h){if(!h){return x;
}var m=h.left;
var top=h.top;
var l=h.width;
var k=h.height;
var i,j;

if(m==null){i=(l==null?A:l+z);
m=A;
}else{i=(l==null?A:m+l+z);
m=m+z;
}
if(top==null){j=(k==null?A:k+z);
top=A;
}else{j=(k==null?A:top+k+z);
top=top+z;
}return q+top+y+i+y+j+y+m+v;
},get:function(B,C){var E=qx.bom.element.Style.get(B,p,C,false);
var J,top,H,G;
var D,F;

if(typeof E===r&&E!==A&&E!==u){E=qx.lang.String.trim(E);
if(/\((.*)\)/.test(E)){var I=RegExp.$1.split(y);
top=qx.lang.String.trim(I[0]);
D=qx.lang.String.trim(I[1]);
F=qx.lang.String.trim(I[2]);
J=qx.lang.String.trim(I[3]);
if(J===A){J=null;
}
if(top===A){top=null;
}
if(D===A){D=null;
}
if(F===A){F=null;
}if(top!=null){top=parseInt(top,10);
}
if(D!=null){D=parseInt(D,10);
}
if(F!=null){F=parseInt(F,10);
}
if(J!=null){J=parseInt(J,10);
}if(D!=null&&J!=null){H=D-J;
}else if(D!=null){H=D;
}
if(F!=null&&top!=null){G=F-top;
}else if(F!=null){G=F;
}}else{throw new Error("Could not parse clip string: "+E);
}}return {left:J||null,top:top||null,width:H||null,height:G||null};
},set:function(a,b){if(!b){a.style.clip=n;
return;
}var g=b.left;
var top=b.top;
var f=b.width;
var e=b.height;
var c,d;

if(g==null){c=(f==null?A:f+z);
g=A;
}else{c=(f==null?A:g+f+z);
g=g+z;
}
if(top==null){d=(e==null?A:e+z);
top=A;
}else{d=(e==null?A:top+e+z);
top=top+z;
}a.style.clip=w+top+y+c+y+d+y+g+t;
},reset:function(K){K.style.clip=qx.bom.client.Engine.MSHTML?o:A;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__gJ:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return f+(this.__gJ[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__gJ[p]||p;
},reset:function(q){q.style.cursor=g;
}}});
})();
(function(){var u="",t="qx.client",s=";",r="filter",q="opacity:",p="opacity",o="MozOpacity",n=");",m=")",l="zoom:1;filter:alpha(opacity=",i="qx.bom.element.Opacity",k="alpha(opacity=",j="-moz-opacity:";
qx.Class.define(i,{statics:{compile:qx.core.Variant.select(t,{"mshtml":function(A){if(A>=1){return u;
}
if(A<0.00001){A=0;
}return l+(A*100)+n;
},"gecko":function(D){if(D==1){D=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return j+D+s;
}else{return q+D+s;
}},"default":function(K){if(K==1){return u;
}return q+K+s;
}}),set:qx.core.Variant.select(t,{"mshtml":function(x,y){var z=qx.bom.element.Style.get(x,r,qx.bom.element.Style.COMPUTED_MODE,false);
if(y>=1){x.style.filter=z.replace(/alpha\([^\)]*\)/gi,u);
return;
}
if(y<0.00001){y=0;
}if(!x.currentStyle||!x.currentStyle.hasLayout){x.style.zoom=1;
}x.style.filter=z.replace(/alpha\([^\)]*\)/gi,u)+k+y*100+m;
},"gecko":function(v,w){if(w==1){w=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){v.style.MozOpacity=w;
}else{v.style.opacity=w;
}},"default":function(I,J){if(J==1){J=u;
}I.style.opacity=J;
}}),reset:qx.core.Variant.select(t,{"mshtml":function(B){var C=qx.bom.element.Style.get(B,r,qx.bom.element.Style.COMPUTED_MODE,false);
B.style.filter=C.replace(/alpha\([^\)]*\)/gi,u);
},"gecko":function(H){if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=u;
}else{H.style.opacity=u;
}},"default":function(a){a.style.opacity=u;
}}),get:qx.core.Variant.select(t,{"mshtml":function(e,f){var g=qx.bom.element.Style.get(e,r,f,false);

if(g){var h=g.match(/alpha\(opacity=(.*)\)/);

if(h&&h[1]){return parseFloat(h[1])/100;
}}return 1.0;
},"gecko":function(b,c){var d=qx.bom.element.Style.get(b,qx.bom.client.Engine.VERSION<1.7?o:p,c,false);

if(d==0.999999){d=1.0;
}
if(d!=null){return parseFloat(d);
}return 1.0;
},"default":function(E,F){var G=qx.bom.element.Style.get(E,p,F,false);

if(G!=null){return parseFloat(G);
}return 1.0;
}})}});
})();
(function(){var w="qx.client",v="",u="qx.debug",t="boxSizing",s="on",r="box-sizing",q=":",p="border-box",o="qx.bom.element.BoxSizing",n="KhtmlBoxSizing",g="-moz-box-sizing",m="WebkitBoxSizing",k=";",f="-khtml-box-sizing",e="content-box",j="-webkit-box-sizing",h="MozBoxSizing";
qx.Class.define(o,{statics:{__gK:qx.core.Variant.select(w,{"mshtml":null,"webkit":[t,n,m],"gecko":[h],"opera":[t]}),__gL:qx.core.Variant.select(w,{"mshtml":null,"webkit":[r,f,j],"gecko":[g],"opera":[r]}),__gM:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__gN:function(x){var y=this.__gM;
return y.tags[x.tagName.toLowerCase()]||y.types[x.type];
},compile:qx.core.Variant.select(w,{"mshtml":function(C){if(qx.core.Variant.isSet(u,s)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(G){var I=this.__gL;
var H=v;

if(I){for(var i=0,l=I.length;i<l;i++){H+=I[i]+q+G+k;
}}return H;
}}),get:qx.core.Variant.select(w,{"mshtml":function(F){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(F))){if(!this.__gN(F)){return e;
}}return p;
},"default":function(b){var d=this.__gK;
var c;

if(d){for(var i=0,l=d.length;i<l;i++){c=qx.bom.element.Style.get(b,d[i],null,false);

if(c!=null&&c!==v){return c;
}}}return v;
}}),set:qx.core.Variant.select(w,{"mshtml":function(D,E){if(qx.core.Variant.isSet(u,s)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(z,A){var B=this.__gK;

if(B){for(var i=0,l=B.length;i<l;i++){z.style[B[i]]=A;
}}}}),reset:function(a){this.set(a,v);
}}});
})();
(function(){var f="CSS1Compat",e="qx.bom.Document";
qx.Class.define(e,{statics:{isQuirksMode:function(g){return (g||window).document.compatMode!==f;
},isStandardMode:function(l){return (l||window).document.compatMode===f;
},getWidth:function(h){var i=(h||window).document;
var k=qx.bom.Viewport.getWidth(h);
var j=(qx.bom.client.Engine.OPERA&&qx.bom.client.Engine.VERSION>9.5&&qx.bom.client.Engine.VERSION<=10);
var scroll=i.compatMode===f?i.documentElement.scrollWidth:i.body.scrollWidth;
return j?k:Math.max(scroll,k);
},getHeight:function(a){var b=(a||window).document;
var d=qx.bom.Viewport.getHeight(a);
var c=(qx.bom.client.Engine.OPERA&&qx.bom.client.Engine.VERSION>9.5&&qx.bom.client.Engine.VERSION<=10);
var scroll=b.compatMode===f?b.documentElement.scrollHeight:b.body.scrollHeight;
return c?d:Math.max(scroll,d);
}}});
})();
(function(){var F="borderTopWidth",E="borderLeftWidth",D="marginTop",C="marginLeft",B="scroll",A="qx.client",z="border-box",y="borderBottomWidth",x="borderRightWidth",w="auto",U="padding",T="qx.bom.element.Location",S="paddingLeft",R="static",Q="marginBottom",P="visible",O="BODY",N="paddingBottom",M="paddingTop",L="marginRight",J="position",K="margin",H="overflow",I="paddingRight",G="border";
qx.Class.define(T,{statics:{__gO:function(i,j){return qx.bom.element.Style.get(i,j,qx.bom.element.Style.COMPUTED_MODE,false);
},__gP:function(bA,bB){return parseInt(qx.bom.element.Style.get(bA,bB,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gQ:function(V){var Y=0,top=0;
if(V.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var X=qx.dom.Node.getWindow(V);
Y-=qx.bom.Viewport.getScrollLeft(X);
top-=qx.bom.Viewport.getScrollTop(X);
}else{var W=qx.dom.Node.getDocument(V).body;
V=V.parentNode;
while(V&&V!=W){Y+=V.scrollLeft;
top+=V.scrollTop;
V=V.parentNode;
}}return {left:Y,top:top};
},__gR:qx.core.Variant.select(A,{"mshtml":function(bG){var bI=qx.dom.Node.getDocument(bG);
var bH=bI.body;
var bJ=0;
var top=0;
bJ-=bH.clientLeft+bI.documentElement.clientLeft;
top-=bH.clientTop+bI.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bJ+=this.__gP(bH,E);
top+=this.__gP(bH,F);
}return {left:bJ,top:top};
},"webkit":function(e){var g=qx.dom.Node.getDocument(e);
var f=g.body;
var h=f.offsetLeft;
var top=f.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){h+=this.__gP(f,E);
top+=this.__gP(f,F);
}return {left:h,top:top};
},"gecko":function(bl){var bm=qx.dom.Node.getDocument(bl).body;
var bn=bm.offsetLeft;
var top=bm.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bn+=this.__gP(bm,C);
top+=this.__gP(bm,D);
}if(qx.bom.element.BoxSizing.get(bm)!==z){bn+=this.__gP(bm,E);
top+=this.__gP(bm,F);
}return {left:bn,top:top};
},"default":function(bN){var bO=qx.dom.Node.getDocument(bN).body;
var bP=bO.offsetLeft;
var top=bO.offsetTop;
return {left:bP,top:top};
}}),__gS:qx.core.Variant.select(A,{"mshtml|webkit":function(bv){var bx=qx.dom.Node.getDocument(bv);
if(bv.getBoundingClientRect){var by=bv.getBoundingClientRect();
var bz=by.left;
var top=by.top;
}else{var bz=bv.offsetLeft;
var top=bv.offsetTop;
bv=bv.offsetParent;
var bw=bx.body;
while(bv&&bv!=bw){bz+=bv.offsetLeft;
top+=bv.offsetTop;
bz+=this.__gP(bv,E);
top+=this.__gP(bv,F);
bv=bv.offsetParent;
}}return {left:bz,top:top};
},"gecko":function(bq){if(bq.getBoundingClientRect){var bt=bq.getBoundingClientRect();
var bu=Math.round(bt.left);
var top=Math.round(bt.top);
}else{var bu=0;
var top=0;
var br=qx.dom.Node.getDocument(bq).body;
var bs=qx.bom.element.BoxSizing;

if(bs.get(bq)!==z){bu-=this.__gP(bq,E);
top-=this.__gP(bq,F);
}
while(bq&&bq!==br){bu+=bq.offsetLeft;
top+=bq.offsetTop;
if(bs.get(bq)!==z){bu+=this.__gP(bq,E);
top+=this.__gP(bq,F);
}if(bq.parentNode&&this.__gO(bq.parentNode,H)!=P){bu+=this.__gP(bq.parentNode,E);
top+=this.__gP(bq.parentNode,F);
}bq=bq.offsetParent;
}}return {left:bu,top:top};
},"default":function(k){var m=0;
var top=0;
var l=qx.dom.Node.getDocument(k).body;
while(k&&k!==l){m+=k.offsetLeft;
top+=k.offsetTop;
k=k.offsetParent;
}return {left:m,top:top};
}}),get:function(ba,bb){if(ba.tagName==O){var location=this.__gT(ba);
var bi=location.left;
var top=location.top;
}else{var bc=this.__gR(ba);
var bh=this.__gS(ba);
var scroll=this.__gQ(ba);
var bi=bh.left+bc.left-scroll.left;
var top=bh.top+bc.top-scroll.top;
}var bd=bi+ba.offsetWidth;
var be=top+ba.offsetHeight;

if(bb){if(bb==U||bb==B){var bf=qx.bom.element.Overflow.getX(ba);

if(bf==B||bf==w){bd+=ba.scrollWidth-ba.offsetWidth+this.__gP(ba,E)+this.__gP(ba,x);
}var bg=qx.bom.element.Overflow.getY(ba);

if(bg==B||bg==w){be+=ba.scrollHeight-ba.offsetHeight+this.__gP(ba,F)+this.__gP(ba,y);
}}
switch(bb){case U:bi+=this.__gP(ba,S);
top+=this.__gP(ba,M);
bd-=this.__gP(ba,I);
be-=this.__gP(ba,N);
case B:bi-=ba.scrollLeft;
top-=ba.scrollTop;
bd-=ba.scrollLeft;
be-=ba.scrollTop;
case G:bi+=this.__gP(ba,E);
top+=this.__gP(ba,F);
bd-=this.__gP(ba,x);
be-=this.__gP(ba,y);
break;
case K:bi-=this.__gP(ba,C);
top-=this.__gP(ba,D);
bd+=this.__gP(ba,L);
be+=this.__gP(ba,Q);
break;
}}return {left:bi,top:top,right:bd,bottom:be};
},__gT:qx.core.Variant.select(A,{"default":function(bK){var top=bK.offsetTop+this.__gP(bK,D);
var bL=bK.offsetLeft+this.__gP(bK,C);
return {left:bL,top:top};
},"mshtml":function(bE){var top=bE.offsetTop;
var bF=bE.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gP(bE,D);
bF+=this.__gP(bE,C);
}return {left:bF,top:top};
},"gecko":function(bj){var top=bj.offsetTop+this.__gP(bj,D)+this.__gP(bj,E);
var bk=bj.offsetLeft+this.__gP(bj,C)+this.__gP(bj,F);
return {left:bk,top:top};
}}),getLeft:function(a,b){return this.get(a,b).left;
},getTop:function(c,d){return this.get(c,d).top;
},getRight:function(bo,bp){return this.get(bo,bp).right;
},getBottom:function(bC,bD){return this.get(bC,bD).bottom;
},getRelative:function(q,r,s,t){var v=this.get(q,s);
var u=this.get(r,t);
return {left:v.left-u.left,top:v.top-u.top,right:v.right-u.right,bottom:v.bottom-u.bottom};
},getPosition:function(bM){return this.getRelative(bM,this.getOffsetParent(bM));
},getOffsetParent:function(n){var p=n.offsetParent||document.body;
var o=qx.bom.element.Style;

while(p&&(!/^body|html$/i.test(p.tagName)&&o.get(p,J)===R)){p=p.offsetParent;
}return p;
}}});
})();
(function(){var b="qx.bom.client.Feature";
qx.Bootstrap.define(b,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:false,VML:false,XPATH:false,AIR:false,GEARS:false,SSL:false,__gU:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
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
}},defer:function(a){a.__gU();
}});
})();
(function(){var q="textarea",p="input",o="qx.client",n="character",m="qx.bom.Selection",l="#text",k="EndToEnd",j="button",i="body";
qx.Class.define(m,{statics:{getSelectionObject:qx.core.Variant.select(o,{"mshtml":function(y){return y.selection;
},"default":function(B){return qx.dom.Node.getWindow(B).getSelection();
}}),get:qx.core.Variant.select(o,{"mshtml":function(z){var A=qx.bom.Range.get(qx.dom.Node.getDocument(z));
return A.text;
},"default":function(L){if(qx.dom.Node.isElement(L)&&(L.nodeName.toLowerCase()==p||L.nodeName.toLowerCase()==q)){return L.value.substring(L.selectionStart,L.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(L)).toString();
}return null;
}}),getLength:qx.core.Variant.select(o,{"mshtml":function(M){var O=qx.bom.Selection.get(M);
var N=qx.util.StringSplit.split(O,/\r\n/);
return O.length-(N.length-1);
},"opera":function(P){var U,S,Q;

if(qx.dom.Node.isElement(P)&&(P.nodeName.toLowerCase()==p||P.nodeName.toLowerCase()==q)){var T=P.selectionStart;
var R=P.selectionEnd;
U=P.value.substring(T,R);
S=R-T;
}else{U=qx.bom.Selection.get(P);
S=U.length;
}Q=qx.util.StringSplit.split(U,/\r\n/);
return S-(Q.length-1);
},"default":function(a){if(qx.dom.Node.isElement(a)&&(a.nodeName.toLowerCase()==p||a.nodeName.toLowerCase()==q)){return a.selectionEnd-a.selectionStart;
}else{return qx.bom.Selection.get(a).length;
}return null;
}}),set:qx.core.Variant.select(o,{"mshtml":function(C,D,E){var F;
if(qx.dom.Node.isDocument(C)){C=C.body;
}
if(qx.dom.Node.isElement(C)||qx.dom.Node.isText(C)){switch(C.nodeName.toLowerCase()){case p:case q:case j:if(E===undefined){E=C.value.length;
}
if(D>=0&&D<=C.value.length&&E>=0&&E<=C.value.length){F=qx.bom.Range.get(C);
F.collapse(true);
F.moveStart(n,D);
F.moveEnd(n,E-D);
F.select();
return true;
}break;
case l:if(E===undefined){E=C.nodeValue.length;
}
if(D>=0&&D<=C.nodeValue.length&&E>=0&&E<=C.nodeValue.length){F=qx.bom.Range.get(qx.dom.Node.getBodyElement(C));
F.moveToElementText(C.parentNode);
F.collapse(true);
F.moveStart(n,D);
F.moveEnd(n,E-D);
F.select();
return true;
}break;
default:if(E===undefined){E=C.childNodes.length-1;
}if(C.childNodes[D]&&C.childNodes[E]){F=qx.bom.Range.get(qx.dom.Node.getBodyElement(C));
F.moveToElementText(C.childNodes[D]);
F.collapse(true);
var G=qx.bom.Range.get(qx.dom.Node.getBodyElement(C));
G.moveToElementText(C.childNodes[E]);
F.setEndPoint(k,G);
F.select();
return true;
}}}return false;
},"default":function(b,c,d){var h=b.nodeName.toLowerCase();

if(qx.dom.Node.isElement(b)&&(h==p||h==q)){if(d===undefined){d=b.value.length;
}if(c>=0&&c<=b.value.length&&d>=0&&d<=b.value.length){b.select();
b.setSelectionRange(c,d);
return true;
}}else{var f=false;
var g=qx.dom.Node.getWindow(b).getSelection();
var e=qx.bom.Range.get(b);
if(qx.dom.Node.isText(b)){if(d===undefined){d=b.length;
}
if(c>=0&&c<b.length&&d>=0&&d<=b.length){f=true;
}}else if(qx.dom.Node.isElement(b)){if(d===undefined){d=b.childNodes.length-1;
}
if(c>=0&&b.childNodes[c]&&d>=0&&b.childNodes[d]){f=true;
}}else if(qx.dom.Node.isDocument(b)){b=b.body;

if(d===undefined){d=b.childNodes.length-1;
}
if(c>=0&&b.childNodes[c]&&d>=0&&b.childNodes[d]){f=true;
}}
if(f){if(!g.isCollapsed){g.collapseToStart();
}e.setStart(b,c);
if(qx.dom.Node.isText(b)){e.setEnd(b,d);
}else{e.setEndAfter(b.childNodes[d]);
}if(g.rangeCount>0){g.removeAllRanges();
}g.addRange(e);
return true;
}}return false;
}}),setAll:function(x){return qx.bom.Selection.set(x,0);
},clear:qx.core.Variant.select(o,{"mshtml":function(H){var I=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(H));
var J=qx.bom.Range.get(H);
var parent=J.parentElement();
var K=qx.bom.Range.get(qx.dom.Node.getDocument(H));
if(parent==K.parentElement()&&parent==H){I.empty();
}},"default":function(r){var t=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(r));
var v=r.nodeName.toLowerCase();
if(qx.dom.Node.isElement(r)&&(v==p||v==q)){r.setSelectionRange(0,0);
qx.bom.Element.blur(r);
}else if(qx.dom.Node.isDocument(r)||v==i){t.collapse(r.body?r.body:r,0);
}else{var u=qx.bom.Range.get(r);

if(!u.collapsed){var w;
var s=u.commonAncestorContainer;
if(qx.dom.Node.isElement(r)&&qx.dom.Node.isText(s)){w=s.parentNode;
}else{w=s;
}
if(w==r){t.collapse(r,0);
}}}}})}});
})();
(function(){var o="button",n="qx.bom.Range",m="text",l="password",k="file",j="submit",i="reset",h="textarea",g="input",f="hidden",d="qx.client",e="body";
qx.Class.define(n,{statics:{get:qx.core.Variant.select(d,{"mshtml":function(p){if(qx.dom.Node.isElement(p)){switch(p.nodeName.toLowerCase()){case g:switch(p.type){case m:case l:case f:case o:case i:case k:case j:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}break;
case h:case e:case o:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}},"default":function(a){var b=qx.dom.Node.getDocument(a);
var c=qx.bom.Selection.getSelectionObject(b);

if(c.rangeCount>0){return c.getRangeAt(0);
}else{return b.createRange();
}}})}});
})();
(function(){var p="",o="g",n="$",m="qx.util.StringSplit",l="\\$&",k="^";
qx.Bootstrap.define(m,{statics:{split:function(a,b,c){var f=p;
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
(function(){var d="qx.ui.core.queue.Widget",c="widget";
qx.Class.define(d,{statics:{__gV:{},remove:function(e){delete this.__gV[e.$$hash];
},add:function(a){var b=this.__gV;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(c);
},flush:function(){var f=this.__gV;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__gV={};
}}});
})();
(function(){var d="qx.ui.core.queue.Visibility",c="visibility";
qx.Class.define(d,{statics:{__gW:{},__gX:{},remove:function(n){var o=n.$$hash;
delete this.__gX[o];
delete this.__gW[o];
},isVisible:function(i){return this.__gX[i.$$hash]||false;
},__gY:function(e){var g=this.__gX;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__gY(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(a){var b=this.__gW;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(c);
},flush:function(){var j=this.__gW;
var m=this.__gX;
for(var k in j){if(m[k]!=null){j[k].addChildrenToQueue(j);
}}var l={};

for(var k in j){l[k]=m[k];
m[k]=null;
}for(var k in j){if(m[k]==null){this.__gY(j[k]);
}if(m[k]&&m[k]!=l[k]){j[k].checkAppearanceNeeds();
}}this.__gW={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__ha:{},remove:function(j){delete this.__ha[j.$$hash];
},add:function(c){var d=this.__ha;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(i){return !!this.__ha[i.$$hash];
},flush:function(){var h=qx.ui.core.queue.Visibility;
var e=this.__ha;
var g;

for(var f in e){g=e[f];
delete e[f];
if(h.isVisible(g)){g.syncAppearance();
}else{g.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__hb:{},add:function(c){var d=this.__hb;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__hb;

for(var f in e){e[f].dispose();
delete e[f];
}for(var f in e){return;
}this.__hb={};
}}});
})();
(function(){var j="blur",h="focus",g="input",f="load",e="qx.ui.core.EventHandler",d="__hc",c="activate";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__hc=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__hc:null,__hd:{focusin:1,focusout:1,focus:1,blur:1},__he:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(a,b){return a instanceof qx.ui.core.Widget;
},_dispatchEvent:function(p){var u=p.getTarget();
var t=qx.ui.core.Widget.getWidgetByElement(u);
var v=false;

while(t&&t.isAnonymous()){var v=true;
t=t.getLayoutParent();
}if(t&&v&&p.getType()==c){t.getContainerElement().activate();
}if(this.__hd[p.getType()]){t=t&&t.getFocusTarget();
if(!t){return;
}}if(p.getRelatedTarget){var C=p.getRelatedTarget();
var B=qx.ui.core.Widget.getWidgetByElement(C);

while(B&&B.isAnonymous()){B=B.getLayoutParent();
}
if(B){if(this.__hd[p.getType()]){B=B.getFocusTarget();
}if(B===t){return;
}}}var x=p.getCurrentTarget();
var z=qx.ui.core.Widget.getWidgetByElement(x);

if(!z||z.isAnonymous()){return;
}if(this.__hd[p.getType()]){z=z.getFocusTarget();
}var A=p.getType();

if(!(z.isEnabled()||this.__he[A])){return;
}var q=p.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var w=this.__hc.getListeners(z,A,q);

if(!w||w.length===0){return;
}var r=qx.event.Pool.getInstance().getObject(p.constructor);
p.clone(r);
r.setTarget(t);
r.setRelatedTarget(B||null);
r.setCurrentTarget(z);
var D=p.getOriginalTarget();

if(D){var s=qx.ui.core.Widget.getWidgetByElement(D);

while(s&&s.isAnonymous()){s=s.getLayoutParent();
}r.setOriginalTarget(s);
}else{r.setOriginalTarget(u);
}for(var i=0,l=w.length;i<l;i++){var y=w[i].context||z;
w[i].handler.call(y,r);
}if(r.getPropagationStopped()){p.stopPropagation();
}
if(r.getDefaultPrevented()){p.preventDefault();
}qx.event.Pool.getInstance().poolObject(r);
},registerEvent:function(k,m,n){var o;

if(m===h||m===j){o=k.getFocusElement();
}else if(m===f||m===g){o=k.getContentElement();
}else{o=k.getContainerElement();
}
if(o){o.addListener(m,this._dispatchEvent,this,n);
}},unregisterEvent:function(F,G,H){var I;

if(G===h||G===j){I=F.getFocusElement();
}else if(G===f||G===g){I=F.getContentElement();
}else{I=F.getContainerElement();
}
if(I){I.removeListener(G,this._dispatchEvent,this,H);
}}},destruct:function(){this._disposeFields(d);
},defer:function(E){qx.event.Registration.addHandler(E);
}});
})();
(function(){var j="abstract",i="qx.debug",h="qx.ui.layout.Abstract",g="__hg",f="__hf";
qx.Class.define(h,{type:j,extend:qx.core.Object,members:{__hf:null,_invalidChildrenCache:null,__hg:null,invalidateLayoutCache:function(){this.__hf=null;
},renderLayout:function(k,l){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hf){return this.__hf;
}return this.__hf=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(m){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(i,{"on":function(d,name,e){},"off":null}),_clearSeparators:function(){var c=this.__hg;

if(c instanceof qx.ui.core.LayoutItem){c.clearSeparators();
}},_renderSeparator:function(a,b){this.__hg.renderSeparator(a,b);
},connectToWidget:function(n){if(n&&this.__hg){throw new Error("It is not possible to manually set the connected widget.");
}this.__hg=n;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__hg;
},_applyLayoutChange:function(){if(this.__hg){this.__hg.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__hg.getLayoutChildren();
}},destruct:function(){this._disposeFields(g,f);
}});
})();
(function(){var E="/",D="mshtml",C="qx.client",B="string",A="",z="?",y="Use 'getInstance().isClippedImage' instead!",x="Use 'getInstance().getImageWidth' instead!",w="Use 'getInstance().has' instead!",v="Use 'getInstance().getImageFormat' instead!",r="Use 'getInstance().getData' instead!",u="Use 'getInstance().getImageHeight' instead!",t="Use 'getInstance().toUri' instead!",q="qx.util.ResourceManager",p="singleton",s="qx.isSource";
qx.Class.define(q,{extend:qx.core.Object,type:p,statics:{__hh:qx.$$resources||{},__hi:{},has:function(Q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getInstance().has(Q);
},getData:function(K){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return this.getInstance().getData(K);
},getImageWidth:function(N){qx.log.Logger.deprecatedMethodWarning(arguments.callee,x);
return this.getInstance().getImageWidth(N);
},getImageHeight:function(o){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this.getInstance().getImageHeight(o);
},getImageFormat:function(I){qx.log.Logger.deprecatedMethodWarning(arguments.callee,v);
return this.getInstance().getImageFormat(I);
},isClippedImage:function(l){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return this.getInstance().isClippedImage(l);
},toUri:function(J){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return this.getInstance().toUri(J);
}},members:{has:function(k){return !!arguments.callee.self.__hh[k];
},getData:function(F){return arguments.callee.self.__hh[F]||null;
},getImageWidth:function(G){var H=arguments.callee.self.__hh[G];
return H?H[0]:null;
},getImageHeight:function(m){var n=arguments.callee.self.__hh[m];
return n?n[1]:null;
},getImageFormat:function(L){var M=arguments.callee.self.__hh[L];
return M?M[2]:null;
},isClippedImage:function(O){var P=arguments.callee.self.__hh[O];
return P&&P.length>4;
},toUri:function(a){if(a==null){return a;
}var b=arguments.callee.self.__hh[a];

if(!b){return a;
}
if(typeof b===B){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=A;

if(qx.core.Variant.isSet(C,D)&&qx.bom.client.Feature.SSL){c=arguments.callee.self.__hi[d];
}return c+qx.$$libraries[d].resourceUri+E+a;
}},defer:function(e){if(qx.core.Variant.isSet(C,D)){if(qx.bom.client.Feature.SSL){for(var i in qx.$$libraries){var g=qx.$$libraries[i].resourceUri;
if(g.match(/^\/\//)!=null){e.__hi[i]=window.location.protocol;
}else if(g.match(/^\.\//)!=null&&qx.core.Setting.get(s)){var f=document.URL;
e.__hi[i]=f.substring(0,f.lastIndexOf(E));
}else if(g.match(/^http/)!=null){}else{var j=window.location.href.indexOf(z);
var h;

if(j==-1){h=window.location.href;
}else{h=window.location.href.substring(0,j);
}e.__hi[i]=h.substring(0,h.lastIndexOf(E)+1);
}}}}}});
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
if(d==m){var h=qx.util.ResourceManager.getInstance().toUri(g);
return j+h+n+f+p;
}else{var back=qx.bom.element.Background.compile(g,d,e,top);
return s+back+f+r;
}}else{if(f){if(qx.core.Variant.isSet(l,q)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){f+=i;
}}return s+f+r;
}else{return o;
}}}}});
})();
(function(){var q="number",p="0",o="px",n=";",m="background-image:url(",l=");",k="",j=")",i="background-repeat:",h=" ",e="qx.bom.element.Background",g="url(",f="background-position:";
qx.Class.define(e,{statics:{__hj:[m,null,l,f,null,n,i,null,n],__hk:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__hl:function(a,top){var b=qx.bom.client.Engine;

if(b.GECKO&&b.VERSION<1.9&&a==top&&typeof a==q){top+=0.01;
}
if(a){var c=(typeof a==q)?a+o:a;
}else{c=p;
}
if(top){var d=(typeof top==q)?top+o:top;
}else{d=p;
}return c+h+d;
},compile:function(x,y,z,top){var A=this.__hl(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C=this.__hj;
C[1]=B;
C[4]=A;
C[7]=y;
return C.join(k);
},getStyles:function(r,s,t,top){if(!r){return this.__hk;
}var u=this.__hl(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w={backgroundPosition:u,backgroundImage:g+v+j};

if(s!=null){w.backgroundRepeat=s;
}return w;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var d="qx.bom.client.Locale",c="-",b="";
qx.Bootstrap.define(d,{statics:{LOCALE:"",VARIANT:"",__hm:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=b;
var f=e.indexOf(c);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(a){a.__hm();
}});
})();
(function(){var A='indexOf',z='slice',y='concat',x='toLocaleLowerCase',w="qx.type.BaseString",v="",u='match',t="qx.debug",s='search',r='replace',j='toLowerCase',q='charCodeAt',n='split',h='substring',g='lastIndexOf',m="on",k='substr',o='toLocaleUpperCase',f='toUpperCase',p='charAt';
qx.Class.define(w,{extend:Object,construct:function(B){var B=B||v;
this.__hn=B;
this.length=B.length;
},members:{$$isString:true,length:0,__hn:null,toString:function(){return this.__hn;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(a,b){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(c,d){if(qx.core.Variant.isSet(t,m)){qx.Class.include(c,qx.core.MAssert);
}var e=[p,q,y,A,g,u,r,s,z,n,k,h,j,f,x,o];
d.valueOf=d.toString;

for(var i=0,l=e.length;i<l;i++){d[e[i]]=String.prototype[e[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__ho=c;
this.__hp=d;
},members:{__ho:null,__hp:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__ho,this.__hp);
}}});
})();
(function(){var n="_",m="",l="qx.dynlocale",k="on",j="_applyLocale",h="changeLocale",g="C",f="__hq",e="__hr",d="qx.locale.Manager",b="String",c="singleton";
qx.Class.define(d,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hq=qx.$$translations||{};
this.__hr=qx.$$locales||{};
var u=qx.bom.client.Locale;
var s=u.LOCALE;
var t=u.VARIANT;

if(t!==m){s+=n+t;
}this.setLocale(s||this.__hs);
},statics:{tr:function(E,F){var G=qx.lang.Array.fromArguments(arguments);
G.splice(0,1);
return qx.locale.Manager.getInstance().translate(E,G);
},trn:function(v,w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,3);
if(x!=1){return qx.locale.Manager.getInstance().translate(w,z);
}else{return qx.locale.Manager.getInstance().translate(v,z);
}},trc:function(o,p,q){var r=qx.lang.Array.fromArguments(arguments);
r.splice(0,2);
return qx.locale.Manager.getInstance().translate(p,r);
},marktr:function(a){return a;
}},properties:{locale:{check:b,nullable:true,apply:j,event:h}},members:{__hs:g,__ht:null,__hu:null,__hq:null,__hr:null,getLanguage:function(){return this.__hu;
},getTerritory:function(){return this.getLocale().split(n)[1]||m;
},getAvailableLocales:function(){var V=[];

for(var U in this.__hr){if(U!=this.__hs){V.push(U);
}}return V;
},__hv:function(P){var R;
var Q=P.indexOf(n);

if(Q==-1){R=P;
}else{R=P.substring(0,Q);
}return R;
},_applyLocale:function(S,T){this.__ht=S;
this.__hu=this.__hv(S);
},addTranslation:function(A,B){var C=this.__hq;

if(C[A]){for(var D in B){C[A][D]=B[D];
}}else{C[A]=B;
}},translate:function(H,I,J){var O;
var M=this.__hq;

if(!M){return H;
}
if(J){var L=this.__hv(J);
}else{J=this.__ht;
L=this.__hu;
}
if(!O&&M[J]){O=M[J][H];
}
if(!O&&M[L]){O=M[L][H];
}
if(!O&&M[this.__hs]){O=M[this.__hs][H];
}
if(!O){O=H;
}
if(I.length>0){var K=[];

for(var i=0;i<I.length;i++){var N=I[i];

if(N&&N.translate){K[i]=N.translate();
}else{K[i]=N;
}}O=qx.lang.String.format(O,K);
}
if(qx.core.Variant.isSet(l,k)){O=new qx.locale.LocalizedString(O,H,I);
}return O;
},localize:function(W,X,Y){var be;
var bc=this.__hr;

if(!bc){return W;
}
if(Y){var bb=this.__hv(Y);
}else{Y=this.__ht;
bb=this.__hu;
}
if(!be&&bc[Y]){be=bc[Y][W];
}
if(!be&&bc[bb]){be=bc[bb][W];
}
if(!be&&bc[this.__hs]){be=bc[this.__hs][W];
}
if(!be){be=W;
}
if(X.length>0){var ba=[];

for(var i=0;i<X.length;i++){var bd=X[i];

if(bd.translate){ba[i]=bd.translate();
}else{ba[i]=bd;
}}be=qx.lang.String.format(be,ba);
}
if(qx.core.Variant.isSet(l,k)){be=new qx.locale.LocalizedString(be,W,X);
}return be;
}},destruct:function(){this._disposeFields(f,e);
}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="mshtml",f="qx.client",e="qx.html.Image";
qx.Class.define(e,{extend:qx.html.Element,members:{_applyProperty:function(name,k){arguments.callee.base.call(this,name,k);

if(name===j){var o=this.getDomElement();
var l=this.getAllStyles();
var m=this._getProperty(j);
var n=this._getProperty(i);
var p=n?i:h;
qx.bom.element.Decoration.update(o,m,p,l);
}},_createDomElement:function(){var c=this._getProperty(i);
var d=c?i:h;

if(qx.core.Variant.isSet(f,g)){var b=this._getProperty(j);
this.setNodeName(qx.bom.element.Decoration.getTagName(d,b));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(d));
}return arguments.callee.base.call(this);
},_copyData:function(q){return arguments.callee.base.call(this,true);
},setSource:function(a){this._setProperty(j,a);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){this._removeProperty(j);
return this;
},setScale:function(r){this._setProperty(i,r);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var z="px",y="div",x="img",w="qx.client",v="",u="qx.debug",t="scale-x",s="mshtml",r="no-repeat",q="on",T="qx/icon",S="repeat",R="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",Q="scale-y",P=".png",O="scale",N="webkit",M='<div style="',L="repeat-y",K='<img src="',G="qx.bom.element.Decoration",H="png",E="', sizingMethod='scale')",F="', sizingMethod='crop')",C='"/>',D='" style="',A="none",B="repeat-x",I='"></div>',J="absolute";
qx.Class.define(G,{statics:{DEBUG:false,__hw:qx.core.Variant.isSet(w,s)&&qx.bom.client.Engine.VERSION<9,__hx:qx.core.Variant.select(w,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hy:{"scale-x":x,"scale-y":x,"scale":x,"repeat":y,"no-repeat":y,"repeat-x":y,"repeat-y":y},update:function(bd,be,bf,bh){var bj=this.getTagName(bf,be);

if(bj!=bd.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bk=this.getAttributes(be,bf,bh);

if(bj===x){bd.src=bk.src;
}if(bd.style.backgroundPosition!=v&&bk.style.backgroundPosition===undefined){bk.style.backgroundPosition=null;
}if(bd.style.clip!=v&&bk.style.clip===undefined){bk.style.clip=null;
}var bi=qx.bom.element.Style;
bi.setStyles(bd,bk.style);
},create:function(U,V,W){var X=this.getTagName(V,U);
var ba=this.getAttributes(U,V,W);
var Y=qx.bom.element.Style.compile(ba.style);

if(X===x){return K+ba.src+D+Y+C;
}else{return M+Y+I;
}},getTagName:function(bb,bc){if(qx.core.Variant.isSet(w,s)){if(bc&&this.__hw&&this.__hx[bb]&&qx.lang.String.endsWith(bc,P)){return y;
}}return this.__hy[bb];
},getAttributes:function(a,b,c){var g=qx.util.ResourceManager.getInstance();
var l=qx.io2.ImageLoader;
var m=qx.bom.element.Background;

if(!c){c={};
}
if(!c.position){c.position=J;
}
if(qx.core.Variant.isSet(w,s)){c.fontSize=0;
c.lineHeight=0;
}else if(qx.core.Variant.isSet(w,N)){c.WebkitUserDrag=A;
}var k=g.getImageWidth(a)||l.getWidth(a);
var j=g.getImageHeight(a)||l.getHeight(a);
var h=g.getImageFormat(a)||l.getFormat(a);

if(qx.core.Variant.isSet(u,q)){if(a!=null&&h==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+a+"'!");
}}if(this.__hw&&this.__hx[b]&&h===H){if(c.width==null&&k!=null){c.width=k+z;
}
if(c.height==null&&j!=null){c.height=j+z;
}
if(b==r){c.filter=R+g.toUri(a)+F;
}else{c.filter=R+g.toUri(a)+E;
}c.backgroundImage=c.backgroundRepeat=v;
return {style:c};
}else{if(b===O){var i=g.toUri(a);

if(c.width==null&&k!=null){c.width=k+z;
}
if(c.height==null&&j!=null){c.height=j+z;
}return {src:i,style:c};
}var f=g.isClippedImage(a);

if(b===t||b===Q){if(f){if(b===t){var o=g.getData(a);
var p=g.getImageHeight(o[4]);
var i=g.toUri(o[4]);
c.clip={top:-o[6],height:j};
c.height=p+z;
if(c.top!=null){c.top=(parseInt(c.top,10)+o[6])+z;
}else if(c.bottom!=null){c.bottom=(parseInt(c.bottom,10)+j-p-o[6])+z;
}return {src:i,style:c};
}else{var o=g.getData(a);
var n=g.getImageWidth(o[4]);
var i=g.toUri(o[4]);
c.clip={left:-o[5],width:k};
c.width=n+z;
if(c.left!=null){c.left=(parseInt(c.left,10)+o[5])+z;
}else if(c.right!=null){c.right=(parseInt(c.right,10)+k-n-o[5])+z;
}return {src:i,style:c};
}}else{if(qx.core.Variant.isSet(u,q)){if(this.DEBUG&&g.has(a)&&a.indexOf(T)==-1){if(!this.__hz){this.__hz={};
}
if(!this.__hz[a]){qx.log.Logger.debug("Potential clipped image candidate: "+a);
this.__hz[a]=true;
}}}
if(b==t){c.height=j==null?null:j+z;
}else if(b==Q){c.width=k==null?null:k+z;
}var i=g.toUri(a);
return {src:i,style:c};
}}else{if(f&&b!==S){var o=g.getData(a);
var e=m.getStyles(o[4],b,o[5],o[6]);

for(var d in e){c[d]=e[d];
}
if(k!=null&&c.width==null&&(b==L||b===r)){c.width=k+z;
}
if(j!=null&&c.height==null&&(b==B||b===r)){c.height=j+z;
}return {style:c};
}else{if(qx.core.Variant.isSet(u,q)){if(this.DEBUG&&g.has(a)&&b!==S&&a.indexOf(T)==-1){if(!this.__hz){this.__hz={};
}
if(!this.__hz[a]){qx.log.Logger.debug("Potential clipped image candidate: "+a);
this.__hz[a]=true;
}}}var e=m.getStyles(a,b);

for(var d in e){c[d]=e[d];
}
if(k!=null&&c.width==null){c.width=k+z;
}
if(j!=null&&c.height==null){c.height=j+z;
}if(c.filter){c.filter=v;
}return {style:c};
}}}}}});
})();
(function(){var p="qx.client",o="qx.io2.ImageLoader",n="load";
qx.Bootstrap.define(o,{statics:{__hA:{},__hB:{width:null,height:null},__hC:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(E){var F=this.__hA[E];
return !!(F&&F.loaded);
},isFailed:function(q){var r=this.__hA[q];
return !!(r&&r.failed);
},isLoading:function(j){var k=this.__hA[j];
return !!(k&&k.loading);
},getFormat:function(s){if(s!=null&&this.__hA[s]){return this.__hA[s]||null;
}else{return null;
}},getSize:function(m){return this.__hA[m]||this.__hB;
},getWidth:function(C){var D=this.__hA[C];
return D?D.width:null;
},getHeight:function(v){var w=this.__hA[v];
return w?w.height:null;
},load:function(a,b,c){var d=this.__hA[a];

if(!d){d=this.__hA[a]={};
}if(b&&!c){c=window;
}if(d.loaded||d.loading||d.failed){if(b){if(d.loading){d.callbacks.push(b,c);
}else{b.call(c,a,d);
}}}else{d.loading=true;
d.callbacks=[];

if(b){d.callbacks.push(b,c);
}var f=new Image();
var e=qx.lang.Function.listener(this.__hD,this,f,a);
f.onload=e;
f.onerror=e;
f.src=a;
}},__hD:qx.event.GlobalError.observeMethod(function(event,x,y){var z=this.__hA[y];
if(event.type===n){z.loaded=true;
z.width=this.__hE(x);
z.height=this.__hF(x);
var A=this.__hC.exec(y);

if(A!=null){z.format=A[1];
}}else{z.failed=true;
}x.onload=x.onerror=null;
var B=z.callbacks;
delete z.loading;
delete z.callbacks;
for(var i=0,l=B.length;i<l;i+=2){B[i].call(B[i+1],y,z);
}}),__hE:qx.core.Variant.select(p,{"gecko":function(g){return g.naturalWidth;
},"default":function(t){return t.width;
}}),__hF:qx.core.Variant.select(p,{"gecko":function(u){return u.naturalHeight;
},"default":function(h){return h.height;
}})}});
})();
(function(){var q="replacement",p="Boolean",o="_applyScale",n="qx.debug",m="_applySource",l="-disabled.$1",k="changeSource",j="on",i="http",h="String",f="image",g="qx.ui.basic.Image";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(B){arguments.callee.base.call(this);

if(B){this.setSource(B);
}},properties:{source:{check:h,init:null,nullable:true,event:k,apply:m,themeable:true},scale:{check:p,init:false,themeable:true,apply:o},appearance:{refine:true,init:f},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hG:null,__hH:null,_createContentElement:function(){return new qx.html.Image();
},_getContentHint:function(){return {width:this.__hG||0,height:this.__hH||0};
},_applyEnabled:function(t,u){arguments.callee.base.call(this,t,u);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(d){var e=this.getContentElement();
e.setScale(d);
},_styleSource:function(){var v=qx.util.AliasManager.getInstance().resolve(this.getSource());
var w=this.getContentElement();

if(!v){w.resetSource();
return;
}if(qx.util.ResourceManager.getInstance().has(v)){this.__hI(w,v);
}else if(qx.io2.ImageLoader.isLoaded(v)){this.__hJ(w,v);
}else{this.__hK(w,v);
}},__hI:function(x,y){var A=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var z=y.replace(/\.([a-z]+)$/,l);

if(A.has(z)){y=z;
this.addState(q);
}else{this.removeState(q);
}}if(x.getSource()===y){return;
}x.setSource(y);
this.__hN(A.getImageWidth(y),A.getImageHeight(y));
},__hJ:function(D,E){var G=qx.io2.ImageLoader;
D.setSource(E);
var F=G.getWidth(E);
var H=G.getHeight(E);
this.__hN(F,H);
},__hK:function(a,b){var c=qx.io2.ImageLoader;

if(qx.core.Variant.isSet(n,j)){if(!qx.lang.String.startsWith(b.toLowerCase(),i)){var self=arguments.callee.self;

if(!self.__hL){self.__hL={};
}
if(!self.__hL[b]){this.debug("try to load a unmanaged relative image: "+b);
self.__hL[b]=true;
}}}if(!c.isFailed(b)){c.load(b,this.__hM,this);
}else{if(a!=null){a.resetSource();
}}},__hM:function(I,J){if(I!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(J.failed){this.warn("Image could not be loaded: "+I);
}this._styleSource();
},__hN:function(r,s){if(r!==this.__hG||s!==this.__hH){this.__hG=r;
this.__hH=s;
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
(function(){var i="interval",h="Number",g="_applyTimeoutInterval",f="qx.event.type.Event",e="qx.event.Idle",d="__hO",c="singleton";
qx.Class.define(e,{extend:qx.core.Object,type:c,construct:function(){arguments.callee.base.call(this);
var b=new qx.event.Timer(this.getTimeoutInterval());
b.addListener(i,this._onInterval,this);
b.start();
this.__hO=b;
},events:{"interval":f},properties:{timeoutInterval:{check:h,init:100,apply:g}},members:{__hO:null,_applyTimeoutInterval:function(a){this.__hO.setInterval(a);
},_onInterval:function(){this.fireEvent(i);
}},destruct:function(){if(this.__hO){this.__hO.stop();
}this._disposeFields(d);
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
(function(){var l="mousedown",k="qx.debug",j="on",i="__hP",h="blur",g="qx.ui.popup.Manager",f="singleton";
qx.Class.define(g,{type:f,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hP={};
qx.event.Registration.addListener(document.documentElement,l,this.__hR,this,true);
qx.bom.Element.addListener(window,h,this.hideAll,this);
},members:{__hP:null,add:function(m){if(qx.core.Variant.isSet(k,j)){if(!(m instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+m);
}}this.__hP[m.$$hash]=m;
this.__hQ();
},remove:function(c){if(qx.core.Variant.isSet(k,j)){if(!(c instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+c);
}}var d=this.__hP;

if(d){delete d[c.$$hash];
this.__hQ();
}},hideAll:function(){var b=this.__hP;

if(b){for(var a in b){b[a].exclude();
}}},__hQ:function(){var t=1e7;
var s=this.__hP;

for(var r in s){s[r].setZIndex(t++);
}},__hR:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var q=this.__hP;

for(var o in q){var n=q[o];

if(!n.getAutoHide()||p==n||qx.ui.core.Widget.contains(n,p)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,l,this.__hR,this,true);
this._disposeMap(i);
}});
})();
(function(){var d="' is not supported by the Grow layout!",c="qx.ui.layout.Grow",b="qx.debug",a="The property '";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(s,name,t){this.assert(false,a+name+d);
},"off":null}),renderLayout:function(e,f){var k=this._getLayoutChildren();
var j,m,h,g;
for(var i=0,l=k.length;i<l;i++){j=k[i];
m=j.getSizeHint();
h=e;

if(h<m.minWidth){h=m.minWidth;
}else if(h>m.maxWidth){h=m.maxWidth;
}g=f;

if(g<m.minHeight){g=m.minHeight;
}else if(g>m.maxHeight){g=m.maxHeight;
}j.renderLayout(0,0,h,g);
}},_computeSizeHint:function(){var p=this._getLayoutChildren();
var n,r;
var q=0,o=0;
for(var i=0,l=p.length;i<l;i++){n=p[i];
r=n.getSizeHint();
q=Math.max(q,r.width);
o=Math.max(o,r.height);
}return {width:q,height:o};
}}});
})();
(function(){var q="label",p="icon",o="Boolean",n="both",m="String",l="left",k="changeGap",j="changeShow",i="_applyCenter",h="qx.ui.basic.Atom",D="bottom",C="Integer",B="_applyIconPosition",A="qx.debug",z="top",y="right",x="_applyRich",w="_applyIcon",v="_applyShow",u="on",s="_applyLabel",t="_applyGap",r="atom";
qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(E,F){if(qx.core.Variant.isSet(A,u)){this.assertArgumentsCount(arguments,0,2);
}arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(E!=null){this.setLabel(E);
}
if(F!=null){this.setIcon(F);
}},properties:{appearance:{refine:true,init:r},label:{apply:s,nullable:true,dispose:true,check:m},rich:{check:o,init:false,apply:x},icon:{check:m,apply:w,nullable:true,themeable:true},gap:{check:C,nullable:false,event:k,apply:t,themeable:true,init:4},show:{init:n,check:[n,q,p],themeable:true,inheritable:true,apply:v,event:j},iconPosition:{init:l,check:[z,y,D,l],themeable:true,apply:B},center:{init:false,check:o,themeable:true,apply:i}},members:{_createChildControlImpl:function(J){var K;

switch(J){case q:K=new qx.ui.basic.Label(this.getLabel());
K.setAnonymous(true);
K.setRich(this.getRich());
this._add(K);

if(this.getLabel()==null||this.getShow()===p){K.exclude();
}break;
case p:K=new qx.ui.basic.Image(this.getIcon());
K.setAnonymous(true);
this._addAt(K,0);

if(this.getIcon()==null||this.getShow()===q){K.exclude();
}break;
}return K||arguments.callee.base.call(this,J);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===p){this._excludeChildControl(q);
}else{this._showChildControl(q);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===q){this._excludeChildControl(p);
}else{this._showChildControl(p);
}},_applyLabel:function(c,d){var e=this.getChildControl(q,true);

if(e){e.setValue(c);
}this._handleLabel();
},_applyRich:function(G,H){var I=this.getChildControl(q,true);

if(I){I.setRich(G);
}},_applyIcon:function(P,Q){var R=this.getChildControl(p,true);

if(R){R.setSource(P);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(L,M){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(f,g){this._getLayout().setIconPosition(f);
},_applyCenter:function(a,b){this._getLayout().setCenter(a);
}}});
})();
(function(){var p="bottom",o="_applyLayoutChange",n="top",m="left",l="right",k="middle",j="' is not supported by the Atom layout!",h="qx.debug",g="center",f="qx.ui.layout.Atom",c="Integer",e="The property '",d="Boolean";
qx.Class.define(f,{extend:qx.ui.layout.Abstract,properties:{gap:{check:c,init:4,apply:o},iconPosition:{check:[m,n,l,p],init:m,apply:o},center:{check:d,init:false,apply:o}},members:{verifyLayoutProperty:qx.core.Variant.select(h,{"on":function(a,name,b){this.assert(false,e+name+j);
},"off":null}),renderLayout:function(B,C){var L=qx.ui.layout.Util;
var E=this.getIconPosition();
var H=this._getLayoutChildren();
var length=H.length;
var V,top,U,F;
var Q,K;
var O=this.getGap();
var T=this.getCenter();
if(E===p||E===l){var M=length-1;
var I=-1;
var G=-1;
}else{var M=0;
var I=length;
var G=1;
}if(E==n||E==p){if(T){var P=0;

for(var i=M;i!=I;i+=G){F=H[i].getSizeHint().height;

if(F>0){P+=F;

if(i!=M){P+=O;
}}}top=Math.round((C-P)/2);
}else{top=0;
}
for(var i=M;i!=I;i+=G){Q=H[i];
K=Q.getSizeHint();
U=Math.min(K.maxWidth,Math.max(B,K.minWidth));
F=K.height;
V=L.computeHorizontalAlignOffset(g,U,B);
Q.renderLayout(V,top,U,F);
if(F>0){top+=F+O;
}}}else{var J=B;
var D=null;
var S=0;

for(var i=M;i!=I;i+=G){Q=H[i];
U=Q.getSizeHint().width;

if(U>0){if(!D&&Q instanceof qx.ui.basic.Label){D=Q;
}else{J-=U;
}S++;
}}
if(S>1){var R=(S-1)*O;
J-=R;
}
if(D){var K=D.getSizeHint();
var N=Math.max(K.minWidth,Math.min(J,K.maxWidth));
J-=N;
}
if(T&&J>0){V=Math.round(J/2);
}else{V=0;
}
for(var i=M;i!=I;i+=G){Q=H[i];
K=Q.getSizeHint();
F=Math.min(K.maxHeight,Math.max(C,K.minHeight));

if(Q===D){U=N;
}else{U=K.width;
}top=L.computeVerticalAlignOffset(k,K.height,C);
Q.renderLayout(V,top,U,F);
if(U>0){V+=U+O;
}}}},_computeSizeHint:function(){var A=this._getLayoutChildren();
var length=A.length;
var s,y;
if(length===1){var s=A[0].getSizeHint();
y={width:s.width,height:s.height,minWidth:s.minWidth,minHeight:s.minHeight};
}else{var w=0,x=0;
var t=0,v=0;
var u=this.getIconPosition();
var z=this.getGap();

if(u===n||u===p){var q=0;

for(var i=0;i<length;i++){s=A[i].getSizeHint();
x=Math.max(x,s.width);
w=Math.max(w,s.minWidth);
if(s.height>0){v+=s.height;
t+=s.minHeight;
q++;
}}
if(q>1){var r=(q-1)*z;
v+=r;
t+=r;
}}else{var q=0;

for(var i=0;i<length;i++){s=A[i].getSizeHint();
v=Math.max(v,s.height);
t=Math.max(t,s.minHeight);
if(s.width>0){x+=s.width;
w+=s.minWidth;
q++;
}}
if(q>1){var r=(q-1)*z;
x+=r;
w+=r;
}}y={minWidth:w,width:x,minHeight:t,height:v};
}return y;
}}});
})();
(function(){var m="middle",k="qx.ui.layout.Util",j="left",h="center",g="top",f="bottom",e="right";
qx.Class.define(k,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(t,u,v){var x,B,w,C;
var y=u>v;
var D=Math.abs(u-v);
var E,z;
var A={};

for(B in t){x=t[B];
A[B]={potential:y?x.max-x.value:x.value-x.min,flex:y?x.flex:1/x.flex,offset:0};
}while(D!=0){C=Infinity;
w=0;

for(B in A){x=A[B];

if(x.potential>0){w+=x.flex;
C=Math.min(C,x.potential/x.flex);
}}if(w==0){break;
}C=Math.min(D,C*w)/w;
E=0;

for(B in A){x=A[B];

if(x.potential>0){z=Math.min(D,x.potential,Math.ceil(C*x.flex));
E+=z-C*x.flex;

if(E>=1){E-=1;
z-=1;
}x.potential-=z;

if(y){x.offset+=z;
}else{x.offset-=z;
}D-=z;
}}}return A;
},computeHorizontalAlignOffset:function(n,o,p,q,r){if(q==null){q=0;
}
if(r==null){r=0;
}var s=0;

switch(n){case j:s=q;
break;
case e:s=p-o-r;
break;
case h:s=Math.round((p-o)/2);
if(s<q){s=q;
}else if(s<r){s=Math.max(q,p-o-r);
}break;
}return s;
},computeVerticalAlignOffset:function(bk,bl,bm,bn,bo){if(bn==null){bn=0;
}
if(bo==null){bo=0;
}var bp=0;

switch(bk){case g:bp=bn;
break;
case f:bp=bm-bl-bo;
break;
case m:bp=Math.round((bm-bl)/2);
if(bp<bn){bp=bn;
}else if(bp<bo){bp=Math.max(bn,bm-bl-bo);
}break;
}return bp;
},collapseMargins:function(a){var b=0,d=0;

for(var i=0,l=arguments.length;i<l;i++){var c=arguments[i];

if(c<0){d=Math.min(d,c);
}else if(c>0){b=Math.max(b,c);
}}return b+d;
},computeHorizontalGaps:function(L,M,N){if(M==null){M=0;
}var O=0;

if(N){O+=L[0].getMarginLeft();

for(var i=1,l=L.length;i<l;i+=1){O+=this.collapseMargins(M,L[i-1].getMarginRight(),L[i].getMarginLeft());
}O+=L[l-1].getMarginRight();
}else{for(var i=1,l=L.length;i<l;i+=1){O+=L[i].getMarginLeft()+L[i].getMarginRight();
}O+=(M*(l-1));
}return O;
},computeVerticalGaps:function(X,Y,ba){if(Y==null){Y=0;
}var bb=0;

if(ba){bb+=X[0].getMarginTop();

for(var i=1,l=X.length;i<l;i+=1){bb+=this.collapseMargins(Y,X[i-1].getMarginBottom(),X[i].getMarginTop());
}bb+=X[l-1].getMarginBottom();
}else{for(var i=1,l=X.length;i<l;i+=1){bb+=X[i].getMarginTop()+X[i].getMarginBottom();
}bb+=(Y*(l-1));
}return bb;
},computeHorizontalSeparatorGaps:function(bc,bd,be){var bh=qx.theme.manager.Decoration.getInstance().resolve(be);
var bg=bh.getInsets();
var bf=bg.left+bg.right;
var bi=0;

for(var i=0,l=bc.length;i<l;i++){var bj=bc[i];
bi+=bj.getMarginLeft()+bj.getMarginRight();
}bi+=(bd+bf+bd)*(l-1);
return bi;
},computeVerticalSeparatorGaps:function(P,Q,R){var U=qx.theme.manager.Decoration.getInstance().resolve(R);
var T=U.getInsets();
var S=T.top+T.bottom;
var V=0;

for(var i=0,l=P.length;i<l;i++){var W=P[i];
V+=W.getMarginTop()+W.getMarginBottom();
}V+=(Q+S+Q)*(l-1);
return V;
},arrangeIdeals:function(F,G,H,I,J,K){if(G<F||J<I){if(G<F&&J<I){G=F;
J=I;
}else if(G<F){J-=(F-G);
G=F;
if(J<I){J=I;
}}else if(J<I){G-=(I-J);
J=I;
if(G<F){G=F;
}}}
if(G>H||J>K){if(G>H&&J>K){G=H;
J=K;
}else if(G>H){J+=(G-H);
G=H;
if(J>K){J=K;
}}else if(J>K){G+=(J-K);
J=K;
if(G>H){G=H;
}}}return {begin:G,end:J};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var w="Please use the value property instead.",v="changeContent",u="qx.dynlocale",t="text",s="color",r="userSelect",q="changeLocale",p="enabled",o="none",n="on",U="_applyTextAlign",T="Boolean",S="qx.ui.core.Widget",R="Please use the changeValue event instead.",Q="changeTextAlign",P="changeValue",O="qx.client",N="qx.ui.basic.Label",M="A",L="_applyValue",D="center",E="_applyBuddy",B="qx.event.type.Data",C="String",z="textAlign",A="__hS",x="right",y="changeRich",F="_applyRich",G="click",I="label",H="webkit",K="left",J="__hU";
qx.Class.define(N,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(bd){arguments.callee.base.call(this);

if(bd!=null){this.setValue(bd);
}
if(qx.core.Variant.isSet(u,n)){qx.locale.Manager.getInstance().addListener(q,this._onChangeLocale,this);
}},events:{"changeContent":B},properties:{rich:{check:T,init:false,event:y,apply:F},value:{check:C,apply:L,event:P,nullable:true},buddy:{check:S,apply:E,nullable:true,init:null},textAlign:{check:[K,D,x],nullable:true,themeable:true,apply:U,event:Q},appearance:{refine:true,init:I},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__hS:null,__hT:null,__hU:null,__hV:null,_getContentHint:function(){if(this.__hT){this.__hW=this.__hX();
delete this.__hT;
}return {width:this.__hW.width,height:this.__hW.height};
},_hasHeightForWidth:function(){return this.getRich();
},_applySelectable:function(j){arguments.callee.base.call(this,j);
if(qx.core.Variant.isSet(O,H)){this.getContainerElement().setStyle(r,j?t:o);
this.getContentElement().setStyle(r,j?t:o);
}},_getContentHeightForWidth:function(bb){if(!this.getRich()){return null;
}return this.__hX(bb).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(h,i){this.getContentElement().setStyle(z,h);
},_applyTextColor:function(f,g){if(f){this.getContentElement().setStyle(s,qx.theme.manager.Color.getInstance().resolve(f));
}else{this.getContentElement().removeStyle(s);
}},__hW:{width:0,height:0},_applyFont:function(k,l){var m;

if(k){this.__hS=qx.theme.manager.Font.getInstance().resolve(k);
m=this.__hS.getStyles();
}else{this.__hS=null;
m=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(m);
this.__hT=true;
qx.ui.core.queue.Layout.add(this);
},__hX:function(V){var ba=qx.bom.Label;
var X=this.getFont();
var W=X?this.__hS.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||M;
var Y=this.getRich();
return Y?ba.getHtmlSize(content,W,V):ba.getTextSize(content,W);
},_applyBuddy:function(b,c){if(c!=null){c.removeBinding(this.__hU);
this.__hU=null;
this.removeListenerById(this.__hV);
this.__hV=null;
}
if(b!=null){this.__hU=b.bind(p,this,p);
this.__hV=this.addListener(G,b.focus,b);
}},_applyRich:function(bc){this.getContentElement().setRich(bc);
this.__hT=true;
qx.ui.core.queue.Layout.add(this);
},_onChangeLocale:qx.core.Variant.select(u,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(be,bf){this.getContentElement().setContent(be);
this.__hT=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(v,be,bf);
},setContent:function(d){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
this.setValue(d);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getValue();
},resetContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
this.resetValue();
},addListener:function(bg,bh,self,bi){if(bg==v){qx.log.Logger.deprecatedEventWarning(arguments.callee,v,R);
}return arguments.callee.base.call(this,bg,bh,self,bi);
}},destruct:function(){if(qx.core.Variant.isSet(u,n)){qx.locale.Manager.getInstance().removeListener(q,this._onChangeLocale,this);
}if(this.__hU!=null){var a=this.getBuddy();

if(a!=null&&!a.isDisposed()){a.removeBinding(this.__hU);
}}this._disposeFields(A,J);
}});
})();
(function(){var b="content",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__hY:null,_applyProperty:function(name,f){arguments.callee.base.call(this,name,f);

if(name==b){var g=this.getDomElement();
qx.bom.Label.setContent(g,f);
}},_createDomElement:function(){var j=this.__hY;
var i=qx.bom.Label.create(this._content,j);
return i;
},_copyData:function(e){return arguments.callee.base.call(this,true);
},setRich:function(c){var d=this.getDomElement();

if(d){throw new Error("The label mode cannot be modified after initial creation");
}c=!!c;

if(this.__hY==c){return;
}this.__hY=c;
return this;
},setContent:function(h){this._setProperty(b,h);
return this;
},getContent:function(){return this._getProperty(b);
}}});
})();
(function(){var u="qx.client",t="gecko",s="div",r="inherit",q="text",p="value",o="",n="hidden",m="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",l="nowrap",J="auto",I="ellipsis",H="normal",G="label",F="px",E="crop",D="end",C="100%",B="visible",A="qx.bom.Label",y="opera",z="block",w="none",x="-1000px",v="absolute";
qx.Class.define(A,{statics:{__ia:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__ib:function(){var R=this.__id(false);
document.body.insertBefore(R,document.body.firstChild);
return this._textElement=R;
},__ic:function(){var X=this.__id(true);
document.body.insertBefore(X,document.body.firstChild);
return this._htmlElement=X;
},__id:function(M){var N=qx.bom.Element.create(s);
var O=N.style;
O.width=O.height=J;
O.left=O.top=x;
O.visibility=n;
O.position=v;
O.overflow=B;

if(M){O.whiteSpace=H;
}else{O.whiteSpace=l;

if(qx.core.Variant.isSet(u,t)){var P=document.createElementNS(m,G);
for(var Q in this.__ia){P.style[Q]=r;
}N.appendChild(P);
}}return N;
},__ie:function(K){var L={};

if(K){L.whiteSpace=H;
}else if(qx.core.Variant.isSet(u,t)){L.display=z;
}else{L.overflow=n;
L.whiteSpace=l;
L.textOverflow=I;
L.userSelect=w;
if(qx.core.Variant.isSet(u,y)){L.OTextOverflow=I;
}}return L;
},create:function(content,S,T){if(!T){T=window;
}
if(S){var U=T.document.createElement(s);
U.useHtml=true;
}else if(qx.core.Variant.isSet(u,t)){var U=T.document.createElement(s);
var V=T.document.createElementNS(m,G);
V.style.cursor=r;
V.style.color=r;
V.style.overflow=n;
V.style.maxWidth=C;
for(var W in this.__ia){V.style[W]=r;
}V.setAttribute(E,D);
U.appendChild(V);
}else{var U=T.document.createElement(s);
qx.bom.element.Style.setStyles(U,this.__ie(S));
}
if(content){this.setContent(U,content);
}return U;
},setContent:function(e,f){f=f||o;

if(e.useHtml){e.innerHTML=f;
}else if(qx.core.Variant.isSet(u,t)){e.firstChild.setAttribute(p,f);
}else{qx.bom.element.Attribute.set(e,q,f);
}},getContent:function(d){if(d.useHtml){return d.innerHTML;
}else if(qx.core.Variant.isSet(u,t)){return d.firstChild.getAttribute(p)||o;
}else{return qx.bom.element.Attribute.get(d,q);
}},getHtmlSize:function(content,Y,ba){var bb=this._htmlElement||this.__ic();
bb.style.width=ba!==undefined?ba+F:J;
bb.innerHTML=content;
return this.__if(bb,Y);
},getTextSize:function(a,b){var c=this._textElement||this.__ib();

if(qx.core.Variant.isSet(u,t)){c.firstChild.setAttribute(p,a);
}else{qx.bom.element.Attribute.set(c,q,a);
}return this.__if(c,b);
},__if:function(g,h){var i=this.__ia;

if(!h){h={};
}
for(var j in i){g.style[j]=h[j]||o;
}var k=qx.bom.element.Dimension.getSize(g);

if(qx.core.Variant.isSet(u,t)){if(!qx.bom.client.Platform.WIN){k.width++;
}}return k;
}}});
})();
(function(){var q="mshtml",p="qx.client",o="Please use element.clientWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",n="qx.bom.element.Dimension",m="Please use element.scrollWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",l="paddingRight",k="paddingLeft",j="paddingTop",i="Please use element.scrollHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",h="Please use element.clientHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",g="paddingBottom";
qx.Class.define(n,{statics:{getWidth:qx.core.Variant.select(p,{"gecko":function(c){if(c.getBoundingClientRect){var d=c.getBoundingClientRect();
return Math.round(d.right)-Math.round(d.left);
}else{return c.offsetWidth;
}},"default":function(z){return z.offsetWidth;
}}),getHeight:qx.core.Variant.select(p,{"gecko":function(J){if(J.getBoundingClientRect){var K=J.getBoundingClientRect();
return Math.round(K.bottom)-Math.round(K.top);
}else{return J.offsetHeight;
}},"default":function(f){return f.offsetHeight;
}}),getSize:function(B){return {width:this.getWidth(B),height:this.getHeight(B)};
},__ig:{visible:true,hidden:true},getContentWidth:function(C){var E=qx.bom.element.Style;
var F=qx.bom.element.Overflow.getX(C);
var G=parseInt(E.get(C,k),10);
var I=parseInt(E.get(C,l),10);

if(this.__ig[F]){return C.clientWidth-G-I;
}else{if(C.clientWidth>=C.scrollWidth){return Math.max(C.clientWidth,C.scrollWidth)-G-I;
}else{var H=C.scrollWidth-G;
var D=qx.bom.client.Engine;

if(D.NAME===q&&D.VERSION==6){H-=I;
}return H;
}}},getContentHeight:function(s){var u=qx.bom.element.Style;
var w=qx.bom.element.Overflow.getY(s);
var x=parseInt(u.get(s,j),10);
var v=parseInt(u.get(s,g),10);

if(this.__ig[w]){return s.clientHeight-x-v;
}else{if(s.clientHeight>=s.scrollHeight){return Math.max(s.clientHeight,s.scrollHeight)-x-v;
}else{var y=s.scrollHeight-x;
var t=qx.bom.client.Engine;

if(t.NAME===q&&t.VERSION==6){y-=v;
}return y;
}}},getContentSize:function(b){return {width:this.getContentWidth(b),height:this.getContentHeight(b)};
},getClientWidth:function(r){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
return r.clientWidth;
},getClientHeight:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return a.clientHeight;
},getScrollWidth:function(A){qx.log.Logger.deprecatedMethodWarning(arguments.callee,m);
return A.scrollWidth;
},getScrollHeight:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return e.scrollHeight;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var f="__ih",e="_applyBlockerColor",d="Number",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__ih=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:e,themeable:true},blockerOpacity:{check:d,init:1,apply:b,themeable:true}},members:{__ih:null,_applyBlockerColor:function(i,j){this.__ih.setColor(i);
},_applyBlockerOpacity:function(g,h){this.__ih.setOpacity(g);
},block:function(){this.__ih.block();
},isBlocked:function(){return this.__ih.isBlocked();
},unblock:function(){this.__ih.unblock();
},blockContent:function(k){this.__ih.blockContent(k);
},isContentBlocked:function(){return this.__ih.isContentBlocked();
},unblockContent:function(){this.__ih.unblockContent();
},_getContentBlocker:function(){return this.__ih._getContentBlocker();
},_getBlocker:function(){return this.__ih._getBlocker();
},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__ih._restoreAnonymousState();
},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__ih._saveAndSetAnonymousState();
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var l="qx.ui.window.Window",k="changeModal",j="changeVisibility",i="changeActive",h="_applyActiveWindow",g="__ii",f="qx.ui.window.MDesktop",d="__ij";
qx.Mixin.define(f,{properties:{activeWindow:{check:l,apply:h,init:null,nullable:true}},members:{__ii:null,__ij:null,getWindowManager:function(){if(!this.__ij){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ij;
},supportsMaximize:function(){return true;
},setWindowManager:function(p){if(this.__ij){this.__ij.setDesktop(null);
}p.setDesktop(this);
this.__ij=p;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(a,b){this.getWindowManager().changeActiveWindow(a,b);

if(a){a.setActive(true);
}
if(b){b.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(c){if(qx.Class.isDefined(l)&&c instanceof qx.ui.window.Window){this._addWindow(c);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(i,this._onChangeActive,this);
n.addListener(k,this._onChangeModal,this);
n.addListener(j,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(m){if(qx.Class.isDefined(l)&&m instanceof qx.ui.window.Window){this._removeWindow(m);
}},_removeWindow:function(o){qx.lang.Array.remove(this.getWindows(),o);
o.removeListener(i,this._onChangeActive,this);
o.removeListener(k,this._onChangeModal,this);
o.removeListener(j,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ii){this.__ii=[];
}return this.__ii;
}},destruct:function(){this._disposeArray(g);
this._disposeObjects(d);
}});
})();
(function(){var s="contextmenu",r="help",q="qx.client",p="changeGlobalCursor",o="abstract",n="Boolean",m="root",l="",k=" !important",j="__ik",f="_applyGlobalCursor",i="_applyNativeHelp",h=";",d="qx.ui.root.Abstract",c="String",g="*";
qx.Class.define(d,{type:o,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:m},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:c,nullable:true,themeable:true,apply:f,event:p},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:n,init:false,apply:i}},members:{__ik:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(q,{"mshtml":function(t,u){},"default":function(v,w){var x=qx.bom.Stylesheet;
var y=this.__ik;

if(!y){this.__ik=y=x.createElement();
}x.removeAllRules(y);

if(v){x.addRule(y,g,qx.bom.element.Cursor.compile(v).replace(h,l)+k);
}}}),_applyNativeContextMenu:function(B,C){if(B){this.removeListener(s,this._onNativeContextMenu,this,true);
}else{this.addListener(s,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(q,{"mshtml":function(a,b){if(b===false){qx.bom.Event.removeNativeListener(document,r,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,r,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this._disposeFields(j);
},defer:function(z,A){qx.ui.core.MChildrenHandling.remap(A);
}});
})();
(function(){var u="resize",t="__im",s="position",r="0px",q="webkit",p="$$widget",o="qx.ui.root.Application",n="hidden",m="qx.client",l="div",i="100%",k="__il",j="absolute";
qx.Class.define(o,{extend:qx.ui.root.Abstract,construct:function(v){this.__il=qx.dom.Node.getWindow(v);
this.__im=v;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__il,u,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},members:{__il:null,__im:null,_createContainerElement:function(){var a=this.__im;

if(qx.core.Variant.isSet(m,q)){if(!a.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var f=a.documentElement.style;
var b=a.body.style;
f.overflow=b.overflow=n;
f.padding=f.margin=b.padding=b.margin=r;
f.width=f.height=b.width=b.height=i;
var d=a.createElement(l);
a.body.appendChild(d);
var c=new qx.html.Root(d);
c.setStyle(s,j);
c.setAttribute(p,this.toHashCode());
return c;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var g=qx.bom.Viewport.getWidth(this.__il);
var h=qx.bom.Viewport.getHeight(this.__il);
return {minWidth:g,width:g,maxWidth:g,minHeight:h,height:h,maxHeight:h};
}},destruct:function(){this._disposeFields(k,t);
}});
})();
(function(){var w="resize",v="px",u="zIndex",t="qx.ui.root.Page",s="backgroundColor",r="_applyOpacity",q="opacity",p="__in",o="Number",n="interval",j="qx.ui.core.Blocker",m="__ir",l="__ip",h="Color",g="__it",k="_applyColor";
qx.Class.define(j,{extend:qx.core.Object,construct:function(x){arguments.callee.base.call(this);
this._widget=x;
this._isPageRoot=(qx.Class.isDefined(t)&&x instanceof qx.ui.root.Page);

if(this._isPageRoot){x.addListener(w,this.__iu,this);
}},properties:{color:{check:h,init:null,nullable:true,apply:k,themeable:true},opacity:{check:o,init:1,apply:r,themeable:true}},members:{__in:null,__io:null,__ip:null,__iq:null,__ir:null,__is:0,__it:null,__iu:function(e){var F=e.getData();

if(this.isContentBlocked()){this._getContentBlocker().setStyles({width:F.width,height:F.height});
}
if(this.isBlocked()){this._getBlocker().setStyles({width:F.width,height:F.height});
}},_applyColor:function(c,d){var f=qx.theme.manager.Color.getInstance().resolve(c);
this.__iv(s,f);
},_applyOpacity:function(a,b){this.__iv(q,a);
},__iv:function(y,z){var A=[];
this.__in&&A.push(this.__in);
this.__ip&&A.push(this.__ip);

for(var i=0;i<A.length;i++){A[i].setStyle(y,z);
}},_saveAndSetAnonymousState:function(){this.__is+=1;

if(this.__is==1){this.__ir=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){this.__is-=1;

if(this.__is==0){this._widget.setAnonymous(this.__ir);
}},__iw:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){if(!this.__in){this.__in=this.__iw();
this.__in.setStyle(u,15);
this._widget.getContainerElement().add(this.__in);
this.__in.exclude();
}return this.__in;
},block:function(){if(this.__io){return;
}this.__io=true;
this._getBlocker().include();
this._saveAndSetAnonymousState();
},isBlocked:function(){return !!this.__io;
},unblock:function(){if(!this.__io){return;
}this.__io=false;
this._restoreAnonymousState();
this._getBlocker().exclude();
},_getContentBlocker:function(){if(!this.__ip){this.__ip=this.__iw();
this._widget.getContentElement().add(this.__ip);
this.__ip.exclude();
}return this.__ip;
},blockContent:function(B){var C=this._getContentBlocker();
C.setStyle(u,B);

if(this.__iq){return;
}this.__iq=true;
C.include();

if(this._isPageRoot){if(!this.__it){this.__it=new qx.event.Timer(300);
this.__it.addListener(n,this.__ix,this);
}this.__it.start();
this.__ix();
}},isContentBlocked:function(){return !!this.__iq;
},unblockContent:function(){if(!this.__iq){return;
}this.__iq=false;
this._getContentBlocker().exclude();

if(this._isPageRoot){this.__it.stop();
}},__ix:function(){var D=this._widget.getContainerElement().getDomElement();
var E=qx.dom.Node.getDocument(D);
this._getContentBlocker().setStyles({height:E.documentElement.scrollHeight+v,width:E.documentElement.scrollWidth+v});
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(w,this.__iu,this);
}this._disposeObjects(l,p,g);
this._disposeFields(m);
}});
})();
(function(){var k="100%",j="mshtml",i="repeat",h="url(",g=")",f="qx.html.Blocker",e="qx.client",d="qx/static/blank.gif",c="absolute";
qx.Class.define(f,{extend:qx.html.Element,construct:function(a,b){arguments.callee.base.call(this);
var a=a?qx.theme.manager.Color.getInstance().resolve(a):null;
this.setStyles({position:c,width:k,height:k,opacity:b||0,backgroundColor:a});
if(qx.core.Variant.isSet(e,j)){this.setStyles({backgroundImage:h+qx.util.ResourceManager.getInstance().toUri(d)+g,backgroundRepeat:i});
}}});
})();
(function(){var v="keypress",u="focusout",t="__iz",s="activate",r="__iA",q="Tab",p="__iB",o="singleton",n="__iy",m="deactivate",j="focusin",k="qx.ui.core.FocusHandler";
qx.Class.define(k,{extend:qx.core.Object,type:o,construct:function(){arguments.callee.base.call(this);
this.__iy={};
},members:{__iy:null,__iz:null,__iA:null,__iB:null,connectTo:function(bf){bf.addListener(v,this.__iC,this);
bf.addListener(j,this._onFocusIn,this,true);
bf.addListener(u,this._onFocusOut,this,true);
bf.addListener(s,this._onActivate,this,true);
bf.addListener(m,this._onDeactivate,this,true);
},addRoot:function(bl){this.__iy[bl.$$hash]=bl;
},removeRoot:function(x){delete this.__iy[x.$$hash];
},getActiveWidget:function(){return this.__iz;
},isActive:function(h){return this.__iz==h;
},getFocusedWidget:function(){return this.__iA;
},isFocused:function(g){return this.__iA==g;
},isFocusRoot:function(a){return !!this.__iy[a.$$hash];
},_onActivate:function(e){var z=e.getTarget();
this.__iz=z;
var y=this.__iD(z);

if(y!=this.__iB){this.__iB=y;
}},_onDeactivate:function(e){var bk=e.getTarget();

if(this.__iz==bk){this.__iz=null;
}},_onFocusIn:function(e){var w=e.getTarget();

if(w!=this.__iA){this.__iA=w;
w.visualizeFocus();
}},_onFocusOut:function(e){var f=e.getTarget();

if(f==this.__iA){this.__iA=null;
f.visualizeBlur();
}},__iC:function(e){if(e.getKeyIdentifier()!=q){return;
}
if(!this.__iB){return;
}e.stopPropagation();
e.preventDefault();
var bd=this.__iA;

if(!e.isShiftPressed()){var be=bd?this.__iH(bd):this.__iF();
}else{var be=bd?this.__iI(bd):this.__iG();
}if(be){be.tabFocus();
}},__iD:function(bb){var bc=this.__iy;

while(bb){if(bc[bb.$$hash]){return bb;
}bb=bb.getLayoutParent();
}return null;
},__iE:function(E,F){if(E===F){return 0;
}var H=E.getTabIndex()||0;
var G=F.getTabIndex()||0;

if(H!=G){return H-G;
}var M=E.getContainerElement().getDomElement();
var L=F.getContainerElement().getDomElement();
var K=qx.bom.element.Location;
var J=K.get(M);
var I=K.get(L);
if(J.top!=I.top){return J.top-I.top;
}if(J.left!=I.left){return J.left-I.left;
}var N=E.getZIndex();
var O=F.getZIndex();

if(N!=O){return N-O;
}return 0;
},__iF:function(){return this.__iL(this.__iB,null);
},__iG:function(){return this.__iM(this.__iB,null);
},__iH:function(A){var B=this.__iB;

if(B==A){return this.__iF();
}
while(A&&A.getAnonymous()){A=A.getLayoutParent();
}
if(A==null){return [];
}var C=[];
this.__iJ(B,A,C);
C.sort(this.__iE);
var D=C.length;
return D>0?C[0]:this.__iF();
},__iI:function(W){var X=this.__iB;

if(X==W){return this.__iG();
}
while(W&&W.getAnonymous()){W=W.getLayoutParent();
}
if(W==null){return [];
}var Y=[];
this.__iK(X,W,Y);
Y.sort(this.__iE);
var ba=Y.length;
return ba>0?Y[ba-1]:this.__iG();
},__iJ:function(parent,S,T){var U=parent.getLayoutChildren();
var V;

for(var i=0,l=U.length;i<l;i++){V=U[i];
if(!(V instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(V)&&V.isEnabled()&&V.isVisible()){if(V.isTabable()&&this.__iE(S,V)<0){T.push(V);
}this.__iJ(V,S,T);
}}},__iK:function(parent,bg,bh){var bi=parent.getLayoutChildren();
var bj;

for(var i=0,l=bi.length;i<l;i++){bj=bi[i];
if(!(bj instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bj)&&bj.isEnabled()&&bj.isVisible()){if(bj.isTabable()&&this.__iE(bg,bj)>0){bh.push(bj);
}this.__iK(bj,bg,bh);
}}},__iL:function(parent,P){var Q=parent.getLayoutChildren();
var R;

for(var i=0,l=Q.length;i<l;i++){R=Q[i];
if(!(R instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(R)&&R.isEnabled()&&R.isVisible()){if(R.isTabable()){if(P==null||this.__iE(R,P)<0){P=R;
}}P=this.__iL(R,P);
}}return P;
},__iM:function(parent,b){var c=parent.getLayoutChildren();
var d;

for(var i=0,l=c.length;i<l;i++){d=c[i];
if(!(d instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(d)&&d.isEnabled()&&d.isVisible()){if(d.isTabable()){if(b==null||this.__iE(d,b)>0){b=d;
}}b=this.__iM(d,b);
}}return b;
}},destruct:function(){this._disposeMap(n);
this._disposeFields(r,t,p);
}});
})();
(function(){var y="qx.client",x="head",w="text/css",v="stylesheet",u="}",t='@import "',s="{",r='";',q="qx.bom.Stylesheet",p="link",o="style";
qx.Class.define(q,{statics:{includeFile:function(S,T){if(!T){T=document;
}var U=T.createElement(p);
U.type=w;
U.rel=v;
U.href=qx.util.ResourceManager.getInstance().toUri(S);
var V=T.getElementsByTagName(x)[0];
V.appendChild(U);
},createElement:qx.core.Variant.select(y,{"mshtml":function(Q){var R=document.createStyleSheet();

if(Q){R.cssText=Q;
}return R;
},"default":function(z){var A=document.createElement(o);
A.type=w;

if(z){A.appendChild(document.createTextNode(z));
}document.getElementsByTagName(x)[0].appendChild(A);
return A.sheet;
}}),addRule:qx.core.Variant.select(y,{"mshtml":function(F,G,H){F.addRule(G,H);
},"default":function(K,L,M){K.insertRule(L+s+M+u,K.cssRules.length);
}}),removeRule:qx.core.Variant.select(y,{"mshtml":function(f,g){var h=f.rules;
var j=h.length;

for(var i=j-1;i>=0;--i){if(h[i].selectorText==g){f.removeRule(i);
}}},"default":function(ba,bb){var bc=ba.cssRules;
var bd=bc.length;

for(var i=bd-1;i>=0;--i){if(bc[i].selectorText==bb){ba.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(y,{"mshtml":function(be){var bf=be.rules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){be.removeRule(i);
}},"default":function(N){var O=N.cssRules;
var P=O.length;

for(var i=P-1;i>=0;i--){N.deleteRule(i);
}}}),addImport:qx.core.Variant.select(y,{"mshtml":function(a,b){a.addImport(b);
},"default":function(I,J){I.insertRule(t+J+r,I.cssRules.length);
}}),removeImport:qx.core.Variant.select(y,{"mshtml":function(B,C){var D=B.imports;
var E=D.length;

for(var i=E-1;i>=0;i--){if(D[i].href==C){B.removeImport(i);
}}},"default":function(k,l){var m=k.cssRules;
var n=m.length;

for(var i=n-1;i>=0;i--){if(m[i].href==l){k.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(y,{"mshtml":function(c){var d=c.imports;
var e=d.length;

for(var i=e-1;i>=0;i--){c.removeImport(i);
}},"default":function(W){var X=W.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;i--){if(X[i].type==X[i].IMPORT_RULE){W.deleteRule(i);
}}}})}});
})();
(function(){var o="number",n="': ",m="width",k="qx.ui.layout.Canvas",j="qx.debug",h="height",g="Bad format of layout property '",f="' is not supported by the Canvas layout!",e=". The value must be either an integer or an percent string.",d="The property '";
qx.Class.define(k,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(j,{"on":function(a,name,b){var c={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};
this.assert(c[name]==1,d+name+f);

if(name==m||name==h){this.assertMatch(b,qx.ui.layout.Util.PERCENT_VALUE);
}else{if(typeof b===o){this.assertInteger(b);
}else if(qx.lang.Type.isString(b)){this.assertMatch(b,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.fail(g+name+n+b+e);
}}},"off":null}),renderLayout:function(p,q){var B=this._getLayoutChildren();
var t,A,y;
var D,top,r,s,v,u;
var z,x,C,w;

for(var i=0,l=B.length;i<l;i++){t=B[i];
A=t.getSizeHint();
y=t.getLayoutProperties();
z=t.getMarginTop();
x=t.getMarginRight();
C=t.getMarginBottom();
w=t.getMarginLeft();
D=y.left!=null?y.left:y.edge;

if(qx.lang.Type.isString(D)){D=Math.round(parseFloat(D)*p/100);
}r=y.right!=null?y.right:y.edge;

if(qx.lang.Type.isString(r)){r=Math.round(parseFloat(r)*p/100);
}top=y.top!=null?y.top:y.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*q/100);
}s=y.bottom!=null?y.bottom:y.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*q/100);
}if(D!=null&&r!=null){v=p-D-r-w-x;
if(v<A.minWidth){v=A.minWidth;
}else if(v>A.maxWidth){v=A.maxWidth;
}D+=w;
}else{v=y.width;

if(v==null){v=A.width;
}else{v=Math.round(parseFloat(v)*p/100);
if(v<A.minWidth){v=A.minWidth;
}else if(v>A.maxWidth){v=A.maxWidth;
}}
if(r!=null){D=p-v-r-x-w;
}else if(D==null){D=w;
}else{D+=w;
}}if(top!=null&&s!=null){u=q-top-s-z-C;
if(u<A.minHeight){u=A.minHeight;
}else if(u>A.maxHeight){u=A.maxHeight;
}top+=z;
}else{u=y.height;

if(u==null){u=A.height;
}else{u=Math.round(parseFloat(u)*q/100);
if(u<A.minHeight){u=A.minHeight;
}else if(u>A.maxHeight){u=A.maxHeight;
}}
if(s!=null){top=q-u-s-C-z;
}else if(top==null){top=z;
}else{top+=z;
}}t.renderLayout(D,top,v,u);
}},_computeSizeHint:function(){var T=0,S=0;
var Q=0,O=0;
var M,L;
var K,I;
var E=this._getLayoutChildren();
var H,R,G;
var U,top,F,J;

for(var i=0,l=E.length;i<l;i++){H=E[i];
R=H.getLayoutProperties();
G=H.getSizeHint();
var P=H.getMarginLeft()+H.getMarginRight();
var N=H.getMarginTop()+H.getMarginBottom();
M=G.width+P;
L=G.minWidth+P;
U=R.left!=null?R.left:R.edge;

if(U&&typeof U===o){M+=U;
L+=U;
}F=R.right!=null?R.right:R.edge;

if(F&&typeof F===o){M+=F;
L+=F;
}T=Math.max(T,M);
S=Math.max(S,L);
K=G.height+N;
I=G.minHeight+N;
top=R.top!=null?R.top:R.edge;

if(top&&typeof top===o){K+=top;
I+=top;
}J=R.bottom!=null?R.bottom:R.edge;

if(J&&typeof J===o){K+=J;
I+=J;
}Q=Math.max(Q,K);
O=Math.max(O,I);
}return {width:T,minWidth:S,height:Q,minHeight:O};
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
(function(){var s="'>",r="[",q=", ",p="</span>",o="<span class='type-",n="</span> ",m="}",l="",k="]",h="{",P="map",O="<span class='object'>",N="]:",M="&gt;",L="<span class='object' title='Object instance with hash code: ",K="string",J="level-",I="0",H="&lt;",G="<span class='offset'>",z=":",A="qx.log.appender.Util",x="&amp;",y="&#39;",v="DIV",w="<span>",t="&quot;",u="<span class='type-key'>",B="</span>:<span class='type-",C="</span>: ",E=" ",D="]</span>: ",F="?";
qx.Class.define(A,{statics:{toHtml:function(Q){var bb=[];
var X,ba,S,U;
bb.push(G,this.formatOffset(Q.offset,6),n);

if(Q.object){var R=Q.win.qx.core.ObjectRegistry.fromHashCode(Q.object);

if(R){bb.push(L+R.$$hash+s,R.classname,r,R.$$hash,D);
}}else if(Q.clazz){bb.push(O+Q.clazz.classname,C);
}var T=Q.items;

for(var i=0,Y=T.length;i<Y;i++){X=T[i];
ba=X.text;

if(ba instanceof Array){var U=[];

for(var j=0,W=ba.length;j<W;j++){S=ba[j];

if(typeof S===K){U.push(w+this.escapeHTML(S)+p);
}else if(S.key){U.push(u+S.key+B+S.type+s+this.escapeHTML(S.text)+p);
}else{U.push(o+S.type+s+this.escapeHTML(S.text)+p);
}}bb.push(o+X.type+s);

if(X.type===P){bb.push(h,U.join(q),m);
}else{bb.push(r,U.join(q),k);
}bb.push(p);
}else{bb.push(o+X.type+s+this.escapeHTML(ba)+n);
}}var V=document.createElement(v);
V.innerHTML=bb.join(l);
V.className=J+Q.level;
return V;
},formatOffset:function(a,length){var d=a.toString();
var b=(length||6)-d.length;
var c=l;

for(var i=0;i<b;i++){c+=I;
}return c+d;
},escapeHTML:function(g){return String(g).replace(/[<>&"']/g,this.__iN);
},__iN:function(e){var f={"<":H,">":M,"&":x,"'":y,'"':t};
return f[e]||F;
},toText:function(bl){return this.toTextArray(bl).join(E);
},toTextArray:function(bc){var bk=[];
bk.push(this.formatOffset(bc.offset,6));

if(bc.object){var bd=bc.win.qx.core.ObjectRegistry.fromHashCode(bc.object);

if(bd){bk.push(bd.classname+r+bd.$$hash+N);
}}else if(bc.clazz){bk.push(bc.clazz.classname+z);
}var be=bc.items;
var bh,bj;

for(var i=0,bi=be.length;i<bi;i++){bh=be[i];
bj=bh.text;

if(bj instanceof Array){var bf=[];

for(var j=0,bg=bj.length;j<bg;j++){bf.push(bj[j].text);
}
if(bh.type===P){bk.push(h,bf.join(q),m);
}else{bk.push(r,bf.join(q),k);
}}else{bk.push(bj);
}}return bk;
}}});
})();
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Bootstrap.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(h){if(window.console&&console.firebug){console[h.level].call(console,qx.log.appender.Util.toText(h));
}},"mshtml":function(e){if(window.console){var g=e.level;

if(g==d){g=c;
}var f=qx.log.appender.Util.toText(e);
console[g](f);
}},"webkit":function(k){if(window.console){var m=k.level;

if(m==d){m=c;
}var l=qx.log.appender.Util.toText(k);
console[m](l);
}},"opera":function(i){}})},defer:function(j){if(window.console&&window.console.clear){console.clear();
}qx.log.Logger.register(j);
}});
})();
(function(){var s="",r='</div>',q="Up",p="none",o="keypress",n='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',m="Enter",l="px",k='.qxconsole .messages .user-result{background:white}',j='.qxconsole .messages .level-error{background:#FFE2D5}',be="div",bd="user-command",bc='<div class="command">',bb='.qxconsole .command input:focus{outline:none;}',ba='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Y='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',X='.qxconsole .messages div{padding:0px 4px;}',W='.qxconsole .messages .level-debug{background:white}',V='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',U="DIV",z='.qxconsole .messages .level-user{background:#E3EFE9}',A='<div class="qxconsole">',x="D",y='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',v='.qxconsole .messages .type-string{color:black;font-weight:normal;}',w='.qxconsole .control a{text-decoration:none;color:black;}',t='<div class="messages">',u='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',B='<input type="text"/>',C="clear",J='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',N='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',L='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',Q='.qxconsole .messages .user-command{color:blue}',P="F7",E="qx.log.appender.Console",T='.qxconsole .messages .level-info{background:#DEEDFA}',S="block",R='.qxconsole .messages .level-warn{background:#FFF7D5}',D='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',F='.qxconsole .messages .user-error{background:#FFE2D5}',G='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',I='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',K=">>> ",M="Down",O='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(E,{statics:{init:function(){var d=[N,G,w,n,X,Q,k,F,W,T,R,j,z,v,O,u,H,y,ba,V,Y,D,L,J,bb];
qx.bom.Stylesheet.createElement(d.join(s));
var g=[A,I,t,r,bc,B,r,r];
var h=document.createElement(U);
h.innerHTML=g.join(s);
var f=h.firstChild;
document.body.appendChild(h.firstChild);
this.__iO=f;
this.__iP=f.childNodes[1];
this.__iQ=f.childNodes[2].firstChild;
this.__iV();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,o,this.__iW,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__iP.innerHTML=s;
},process:function(i){this.__iP.appendChild(qx.log.appender.Util.toHtml(i));
this.__iR();
},__iR:function(){this.__iP.scrollTop=this.__iP.scrollHeight;
},__iS:true,toggle:function(){if(!this.__iO){this.init();
}else if(this.__iO.style.display==p){this.show();
}else{this.__iO.style.display=p;
}},show:function(){if(!this.__iO){this.init();
}else{this.__iO.style.display=S;
this.__iP.scrollTop=this.__iP.scrollHeight;
}},__iT:[],execute:function(){var c=this.__iQ.value;

if(c==s){return;
}
if(c==C){return this.clear();
}var a=document.createElement(be);
a.innerHTML=qx.log.appender.Util.escapeHTML(K+c);
a.className=bd;
this.__iT.push(c);
this.__iU=this.__iT.length;
this.__iP.appendChild(a);
this.__iR();

try{var b=window.eval(c);
}catch(bf){qx.log.Logger.error(bf);
}
if(b!==undefined){qx.log.Logger.debug(b);
}},__iV:function(e){this.__iP.style.height=(this.__iO.clientHeight-this.__iO.firstChild.offsetHeight-this.__iO.lastChild.offsetHeight)+l;
},__iW:function(e){var bi=e.getKeyIdentifier();
if((bi==P)||(bi==x&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__iO){return;
}if(!qx.dom.Hierarchy.contains(this.__iO,e.getTarget())){return;
}if(bi==m&&this.__iQ.value!=s){this.execute();
this.__iQ.value=s;
}if(bi==q||bi==M){this.__iU+=bi==q?-1:1;
this.__iU=Math.min(Math.max(0,this.__iU),this.__iT.length);
var bh=this.__iT[this.__iU];
this.__iQ.value=bh||s;
this.__iQ.select();
}}},defer:function(bg){qx.event.Registration.addListener(document.documentElement,o,bg.__iW,bg);
}});
})();
(function(){var dq="execute",dp="/",dn="",dm="value",dl="auto",dk="current",dj=" ",di="excluded",dh="visible",dg="category",cp='modelLink',co="modelLink",cn="changeSelection",cm="completed",cl="failed",ck="white",cj="html",ci="~",ch="qooxdoo ",cg="all",dx=".",dy='\n',dv="monospace",dw="div",dt="id",du="node",dr=".src.js",ds=" Demo Browser ",dz=".html",dA="<script",cO="qx.theme.Modern",cN="horizontal",cQ="javascript",cP="_",cS='</span>',cR="main",cU="qx_srcview",cT="js",cM="\n",cL="outputviews.sourcepage.html.page",W="outputviews.sourcepage.js.page",X="?",Y="log",ba="separator-vertical",bb="request",bc="src",bd="icon/22/actions/edit-clear.png",be="Demos",bf='</div>',bg="filled",dO="Clear log",dN="Debug",dM="right",dL="dblclick",dS="icon/22/actions/media-playback-start.png",dR="qx.version",dQ="<div class='script'>The sample JS source will be displayed here.</div>",dP="demobrowser.DemoBrowser",dU="HTML Code",dT="load",bF='</span>=<span class="string">',bG="Run previous demo",bD="_history",bE='_cmdNamespacePollution',bJ="icon/22/apps/utilities-color-chooser.png",bK="Ctrl+N",bH="Previous",bI='.html',bB="Run",bC='<span class="html-tag-name">',bo="<div class='script'>The sample source will be displayed here.</div>",bn="tree1",bq="f1",bp="Display log file",bk="script/demobrowser.demo",bj="icon/22/actions/media-playback-stop.png",bm="icon/22/apps/utilities-log-viewer.png",bl="Ctrl+O",bi="Log File",bh="Stop playback after current demo",bP="_blank",bQ="qx.theme.Classic",bR="logelem",bS='<div class="script">',bL="logappender",bM="Choose theme",bN="icon/22/apps/internet-web-browser.png",bO="f2",bT="<pre class='script'>",bU="JS Code",by="icon/22/mimetypes/executable.png",bx="middle",bw="tree",bv="</div></pre>",bu='_cmdRunSample',bt="Stop",bs="left",br="animation",bA="icon/22/actions/edit-redo.png",bz='_cmdDisposeSample',bV="toolbar",bW="icon/22/apps/office-spreadsheet.png",bX="/demo/",bY="demo/welcome.html",ca='_cmdSampleInOwnWindow',cb='demo/',cc="</pre>",cd="_sampleToTreeNodeMap",ce="Debugging options",cf="Ctrl+P",ct="app-header",cs="<pre ><div class='script'>",cr="Dispose Demo",cq="Classic Theme",cy="Global Namespace Pollution",cx="treeview.flat",cv="Own Window",cu="Display HTML source",cA='_cmdObjectSummary',cz='/',cH='&gt;',cI='_cmdNextSample',cF="Run next demo",cG='_cmdPrevSample',cD=" Start",cE="\"",cB="background-medium",cC="Ctrl+Left",cJ="demo-tree",cK="Display JavaScript source",cY="tests",cX="Next",db="F5",da="Modern Theme",dd="Open demo in new window",dc="interval",df="string",de="widgets",cW="runbutton",cV="icon/22/actions/go-next.png",dH="Ctrl+Right",dI="?qx.theme=",dJ="Ctrl+D",dK="mainsplit",dD="icon/22/actions/go-previous.png",dE="Object Summary",dF="Demo Browser",dG=' <span class="keyword">',dB="Run the selected demo(s)",dC="8px",V="Theme";
qx.Class.define(dP,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var ef=new qx.ui.layout.VBox;
ef.setSeparator(ba);
this.setLayout(ef);
this.add(this.__ju());
this.widgets={};
this.tests={};
this.__iX=cO;
this.__jc();
this.add(this.__jh());
var ei=new qx.ui.splitpane.Pane(cN);
this.mainsplit=ei;
var eg=new qx.ui.splitpane.Pane(cN);
eg.setDecorator(null);
this.infosplit=eg;
this.add(ei,{flex:1});
ei.add(this.__jm(),0);
ei.add(eg,1);
var ek=this.__ji();
eg.add(ek,2);
var ed=this.__jk();
var ee=this.__jl();
var eh=this.__jj();
var ej=new qx.ui.container.Stack;
ej.setDecorator(cR);
ej.add(ed);
ej.add(ee);
ej.add(eh);
this.viewGroup.addListener(cn,function(e){var el=e.getData()[0];
var em=el!=null?el.getUserData(dm):dn;

switch(em){case cj:this.setSelection([ed]);
ej.show();
break;
case cT:this.setSelection([ee]);
ej.show();
break;
case Y:this.setSelection([eh]);
ej.show();
break;
default:this.resetSelection();
ej.exclude();
}},ej);
eg.add(ej,1);
ej.resetSelection();
ej.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(bb,function(e){var eL=e.getData().replace(ci,dp);

if(this._currentSample!=eL){this.setCurrentSample(eL);
}},this);
this.__iY=new qx.event.Timer(250);
this.__iY.addListener(dc,this.__jo,this);
this.__iY.start();
},properties:{playDemos:{check:[cg,dg,dk],init:dk}},members:{__ja:null,__iX:null,__iY:null,__jb:null,__jc:function(){this._cmdObjectSummary=new qx.event.Command(bl);
this._cmdObjectSummary.addListener(dq,this.__jd,this);
this._cmdRunSample=new qx.event.Command(db);
this._cmdRunSample.addListener(dq,this.runSample,this);
this._cmdPrevSample=new qx.event.Command(cC);
this._cmdPrevSample.addListener(dq,this.playPrev,this);
this._cmdNextSample=new qx.event.Command(dH);
this._cmdNextSample.addListener(dq,this.playNext,this);
this._cmdSampleInOwnWindow=new qx.event.Command(bK);
this._cmdSampleInOwnWindow.addListener(dq,this.__je,this);
this._cmdDisposeSample=new qx.event.Command(dJ);
this._cmdDisposeSample.addListener(dq,this.__jf,this);
this._cmdNamespacePollution=new qx.event.Command(cf);
this._cmdNamespacePollution.addListener(dq,this.__jg,this);
},__jd:function(){var b=this.__ja.getWindow();

if(b&&b.qx){alert(b.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__je:function(){var fe=this.__ja.getWindow().location.href;
window.open(fe,bP);
},__jf:function(e){var k=this.__ja.getWindow();

if(k&&k.qx){k.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__jg:function(e){var J=this.__ja.getWindow();

if(J&&J.qx){alert(J.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__jh:function(){var ft=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
ft.add(this._navPart);
this._runbutton=new qx.ui.toolbar.Button(this.tr(bB),dS);
this._runbutton.addListener(dq,this.runSample,this);
this._runbutton.setToolTipText(dB);
this._navPart.add(this._runbutton);
this._stopbutton=new qx.ui.toolbar.Button(this.tr(bt),bj);
this._stopbutton.addListener(dq,this.stopSample,this);
this._stopbutton.setToolTipText(bh);
this._navPart.add(this._stopbutton);
this._stopbutton.setVisibility(di);
var fG=new qx.ui.toolbar.Button(this.tr(bH),dD);
fG.addListener(dq,this.playPrev,this);
fG.setToolTipText(bG);
this._navPart.add(fG);
var fJ=new qx.ui.toolbar.Button(this.tr(cX),cV);
fJ.addListener(dq,this.playNext,this);
fJ.setToolTipText(cF);
this._navPart.add(fJ);
var fC=new qx.ui.toolbar.Button(this.tr(cv),bA);
fC.addListener(dq,this.__je,this);
fC.setToolTipText(dd);
this._navPart.add(fC);
var fu=new qx.ui.toolbar.Part;
ft.add(fu);
var fF=new qx.ui.menu.Menu;
var fA=new qx.ui.menu.RadioButton(da);
var fy=new qx.ui.menu.RadioButton(cq);
fA.setUserData(dm,cO);
fA.setValue(true);
fy.setUserData(dm,bQ);
var fH=new qx.ui.form.RadioGroup(fA,fy);
fH.addListener(cn,this.__jt,this);
fF.add(fA);
fF.add(fy);
var fr=new qx.ui.toolbar.MenuButton(this.tr(V),bJ,fF);
fr.setToolTipText(bM);
fu.add(fr);
var fw=new qx.ui.menu.Menu;
var fx=new qx.ui.menu.Button(this.tr(dE));
fx.setCommand(this._cmdObjectSummary);
fw.add(fx);
var fI=new qx.ui.menu.Button(this.tr(cy));
fI.setCommand(this._cmdNamespacePollution);
fw.add(fI);
var fD=new qx.ui.menu.Button(this.tr(cr));
fD.setCommand(this._cmdDisposeSample);
fw.add(fD);
var fE=new qx.ui.toolbar.MenuButton(this.tr(dN),bW,fw);
fE.setToolTipText(ce);
fu.add(fE);
var fs=new qx.ui.toolbar.Part;
ft.addSpacer();
ft.add(fs);
var fK=new qx.ui.toolbar.RadioButton(dU,bN);
fK.setToolTipText(cu);
var fB=new qx.ui.toolbar.RadioButton(bU,by);
fB.setToolTipText(cK);
var fz=new qx.ui.toolbar.RadioButton(bi,bm);
fz.setToolTipText(bp);
fK.setUserData(dm,cj);
fB.setUserData(dm,cT);
fz.setUserData(dm,Y);
fs.add(fK);
fs.add(fB);
fs.add(fz);
var fv=this.viewGroup=new qx.ui.form.RadioGroup;
fv.setAllowEmptySelection(true);
fv.add(fK,fB,fz);
return ft;
},__ji:function(){var ec=new qx.ui.embed.Iframe();
ec.addListener(dT,this.__jn,this);
this.__ja=ec;
return ec;
},__jj:function(){var dY=new qx.ui.layout.VBox(0,bx,cR);
dY.setAlignX(dM);
var eb=new qx.ui.container.Composite(dY);
var dW=new qx.ui.decoration.Background().set({backgroundColor:cB});
eb.setDecorator(dW);
var ea=new qx.ui.form.Button(this.tr(dO),bd);
ea.setAllowGrowX(false);
ea.setMargin(5);
ea.addListener(dq,function(){this.logappender.clear();
},this);
eb.add(ea,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow(dl,dl);
this.f2.setFont(dv);
this.f2.setBackgroundColor(ck);
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var dX=document.createElement(dw);
this.logelem=document.createElement(dw);
this.logelem.style.padding=dC;
this.logappender.setElement(this.logelem);
dX.appendChild(this.logelem);
this.f2.getContentElement().useElement(dX);
eb.add(this.f2,{flex:1});
return eb;
},__jk:function(){var eM=new qx.ui.embed.Html(bo);
eM.setOverflow(dl,dl);
eM.setFont(dv);
eM.setBackgroundColor(ck);
this.widgets[cL]=eM;
eM.getContentElement().setAttribute(dt,cU);
return eM;
},__jl:function(){var eE=new qx.ui.embed.Html(dQ);
eE.setOverflow(dl,dl);
eE.setFont(dv);
eE.setBackgroundColor(ck);
this.widgets[W]=eE;
eE.getContentElement().setAttribute(dt,cU);
return eE;
},__jm:function(){var fg=new qx.ui.tree.Tree();
var ff=new qx.ui.tree.TreeFolder(be);
fg.setAppearance(cJ);
fg.setRoot(ff);
fg.setSelection([ff]);
this.tree=this.widgets[cx]=fg;
fg.addListener(cn,this.treeGetSelection,this);
fg.addListener(dL,function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return fg;
},treeGetSelection:function(e){var eA=this.tree.getSelection()[0];
var eB=eA.getUserData(co);
this.tests.selected=this.tests.handler.getFullName(eB);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var ep=this._sampleToTreeNodeMap;
var ev=null;
var ez=null;
var ey=/\?autorun=true/.test(location.href);
var eu=this._history.getState();
var es=eu.match(/([^~]+)~/);

if(es){ev=es[1];
}else{var eq=eu.match(/([^~][\w]*)/);

if(eq){ev=eq[1];

if(ey){this.setPlayDemos(dg);
}}else{ev=br;

if(ey){this.setPlayDemos(cg);
}}}function ew(fh,fi){var fl=fi.getChildren();
var t;

for(var i=0;i<fl.length;i++){var fk=fl[i];

if(fk.hasChildren()){t=new qx.ui.tree.TreeFolder(er.polish(fk.label));
t.setUserData(bg,false);
t.setUserData(du,fk);
ew(t,t.getUserData(du));

if(fk.label==ev){ez=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(er.polish(fk.label));
var fj=fk.pwd().slice(1).join(dp)+dp+fk.label;
ep[fj]=t;
}fh.add(t);
t.setUserData(co,fk);
fk.widgetLinkFull=t;
}}var et=this.tests.handler.ttree;
var er=this;
this.tree.setUserData(co,et);
this.tree.getRoot().setOpen(true);
ew(this.tree.getRoot(),et);

if(ez!=null){this.tree.setSelection([ez]);
}},runSample:function(e){if(e&&e.getType()===dq){if(this.tests.selected===dn){this.setPlayDemos(cg);
}else if(this.tests.selected.indexOf(cj)>0){this.setPlayDemos(dk);
}else{this.setPlayDemos(dg);
}}this._runbutton.setVisibility(di);
this._stopbutton.setVisibility(dh);

if(this.tests.selected!=dn){var fc=this.tests.selected.replace(dx,dp);
this.setCurrentSample(fc);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(dk);
this._stopbutton.setVisibility(di);
this._runbutton.setVisibility(dh);
},setCurrentSample:function(l){if(!l){return;
}
if(!this._sampleToTreeNodeMap){return;
}var n;
var o=this._sampleToTreeNodeMap[l];

if(o){o.getTree().setSelection([o]);
n=cb+l+dI+this.__iX;
}else{n=this.defaultUrl;
}
if(this.__ja.getSource()==n){this.__ja.reload();
}else{this.__jb=false;
this.__ja.setSource(n);
}this._currentSample=l;
this._currentSampleUrl=n;
},__jn:function(){var z=this.__ja.getWindow();
var A=z.location.pathname+dn;
var H=A.indexOf(X);

if(H!=-1){A=A.substring(0,H+1);
}var G=this.__ja.getSource();

if(G!=null&&G!=this.defaultUrl){var y=z.location.href;
var E=y.indexOf(bX)+6;
var B=y.indexOf(X);
B=B==-1?y.length:B;
var C=y.substring(E,B).split(dp);
var F=String.fromCharCode(187);

if(C.length==2){var v=C[0];
v=v.charAt(0).toUpperCase()+v.substring(1);
var D=C[1].replace(dz,dn).replace(cP,dj);
D=D.charAt(0).toUpperCase()+D.substring(1);
var x=ch+F+ds+F+dj+v+dj+F+dj+D;
}else{var x=ch+F+ds+F+cD;
}document.title=x;
}if(this.getPlayDemos()!=dk){if(!D){this.playNext();
}else{var self=this;
qx.event.Timer.once(this.playNext,self,5000);
}}else{this._stopbutton.setVisibility(di);
this._runbutton.setVisibility(dh);
}},__jo:function(e){var dV=this.__ja.getWindow();

if(dV&&dV.qx&&dV.qx.log&&dV.qx.log.appender){if(!this.__jb){this.__jb=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();
dV.qx.log.Logger.register(this.logappender);
this._history.addToHistory(this._currentSample.replace(dp,ci),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__jp(this._currentSampleUrl);
}}}else{this.__jb=false;
}},__jp:function(eC){if(typeof (eC)!=df){return;
}var eD=new qx.io.remote.Request(eC);
eD.setTimeout(180000);
eD.setProhibitCaching(false);
eD.addListener(cm,function(eO){var content=eO.getContent();
if(content){var eR=content.indexOf(dA,content.indexOf(dA)+7);
var eX=content.indexOf(bc,eR);
var eQ=content.indexOf(cE,eX+5);
var eS=content.substring(eX+5,eQ);
var eV=eS.substring(4,eS.length-3)+dr;
var u=bk;
var eU=eC.split(cz);
var eT=eU[1];
var eW=eU[2];
eW=eW.substr(0,eW.indexOf(bI));
u+=dx+eT+dx+eW+dr;
eV=u;
var eP=new qx.io.remote.Request(eV);
eP.setTimeout(180000);
eP.setProhibitCaching(false);
eP.addListener(cm,function(p){var q=p.getContent();

if(q){this.widgets[W].setHtml(this.__jq(q,cQ));
}},this);
eP.addListener(cl,function(eJ){this.error("Couldn't load file: "+eC);
},this);
eP.send();
this.widgets[cL].setHtml(this.__jq(content));
}},this);
eD.addListener(cl,function(eF){this.error("Couldn't load file: "+eC);
},this);
eD.send();
},dataLoader:function(K){var L=new qx.io.remote.Request(K);
L.setTimeout(180000);
L.setProhibitCaching(false);
L.addListener(cm,function(en){var content=en.getContent();
var eo=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(eo);
this.leftReloadTree();
var eN=this._history.getState();

if(eN){this.setCurrentSample(eN.replace(ci,dp));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
L.addListener(cl,function(fd){this.error("Couldn't load file: "+K);
},this);
L.send();
},playPrev:function(e){this.setPlayDemos(dk);
var d=this.tree.getSelection()[0];

if(d){if(d.getUserData(cp).getPrevSibling()){var c=d.getUserData(cp).getPrevSibling().widgetLinkFull;

if(c){this.tree.setSelection([c]);
this.runSample();
}}}},playNext:function(e){var fp=this.tree.getSelection()[0];

if(fp){try{var fm=fp.getUserData(cp).getChildren()[0].widgetLinkFull;
}catch(a){try{var fm=fp.getUserData(cp).getNextSibling().widgetLinkFull;
}catch(fq){if(this.getPlayDemos()!==dg){try{var fo=fp.getTree();
var fn=fo.getNextSiblingOf(fp);
fn.setOpen(true);
var fm=fn.getChildren()[0];
}catch(I){this.debug(I);
}}}}
if(fm){this.tree.setSelection([fm]);
this.runSample();
}else{this._stopbutton.setVisibility(di);
this._runbutton.setVisibility(dh);
}}},__jq:function(M,N){var O=new qx.util.StringBuilder(bT);
var Q=[];
var R=new qx.util.StringBuilder();
var S=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var P=/^\s*<\/script>\s*$/i;
M=M.replace(/\r\n/g,cM).replace(/\r/g,cM);
var Q=M.split(dy);
if(N==cQ){return cs+qx.dev.Tokenizer.javaScriptToHtml(M)+bv;
}
for(var i=0;i<Q.length;i++){if(S.exec(Q[i])){O.add(this.__jr(qx.bom.String.escape(R.get()+Q[i])));
R.clear();
}else if(P.exec(Q[i])){var T=qx.dev.Tokenizer.javaScriptToHtml(R.get());
O.add(bS,T,bf);
R.clear();
R.add(Q[i],dy);
}else{R.add(Q[i],dy);
}}O.add(this.__jr(qx.bom.String.escape(R.get())),cc);
return O.get();
},__jr:function(eY){var fb=eY;
function fa(eG){var s=new qx.util.StringBuilder(arguments[1],bC,arguments[2],cS);
var eH;
var eI=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){eH=arguments[i];

if(eH==dp){eI=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(eH))!=null){s.add(dG,r[1],bF,r[2].replace(/\s*$/,dn),cS);
}}}s.add((eI?dp:dn));
}s.add(cH);
return s.get();
}fb=fb.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,fa);
return fb;
},polish:function(eK){return eK.replace(dz,dn).replace(cP,dj);
},__js:function(){var w=this.__ja.getWindow();
var U;

if(w.qx&&w.qx.log&&w.qx.log.Logger){U=w.qx.log.Logger;
U.register(this.logappender);
U.clear();
U.unregister(this.logappender);
}},__jt:function(e){this.__iX=e.getData()[0].getUserData(dm);
this.runSample();
},__ju:function(){var h=new qx.ui.layout.HBox();
var f=new qx.ui.container.Composite(h);
f.setAppearance(ct);
var j=new qx.ui.basic.Label(dF);
var g=new qx.ui.basic.Label(ch+qx.core.Setting.get(dR));
f.add(j);
f.add(new qx.ui.core.Spacer,{flex:1});
f.add(g);
return f;
},defaultUrl:bY},destruct:function(){this._disposeFields(de,cY,cd,bw,bR);
this._disposeObjects(dK,bn,bs,cW,bV,bq,bO,bD,bL,cA,bu,cG,cI,ca,bz,bE);
}});
})();
(function(){var v="_applyLayoutChange",u="top",t="left",s="height",r="middle",q="Decorator",p="__jw",o="center",n="_applyReversed",m="qx.debug",d="bottom",k="' is not supported by the VBox layout!",g="qx.ui.layout.VBox",c="__jv",b="__jy",f="flex",e="Integer",h="The property '",a="right",j="Boolean";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(bs,bt,bu){arguments.callee.base.call(this);

if(bs){this.setSpacing(bs);
}
if(bt){this.setAlignY(bt);
}
if(bu){this.setSeparator(bu);
}},properties:{alignY:{check:[u,r,d],init:u,apply:v},alignX:{check:[t,o,a],init:t,apply:v},spacing:{check:e,init:0,apply:v},separator:{check:q,nullable:true,apply:v},reversed:{check:j,init:false,apply:n}},members:{__jv:null,__jw:null,__jx:null,__jy:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jz:function(){var S=this._getLayoutChildren();
var length=S.length;
var O=false;
var N=this.__jv&&this.__jv.length!=length&&this.__jw&&this.__jv;
var Q;
var P=N?this.__jv:new Array(length);
var R=N?this.__jw:new Array(length);
if(this.getReversed()){S=S.concat().reverse();
}for(var i=0;i<length;i++){Q=S[i].getLayoutProperties();

if(Q.height!=null){P[i]=parseFloat(Q.height)/100;
}
if(Q.flex!=null){R[i]=Q.flex;
O=true;
}}if(!N){this.__jv=P;
this.__jw=R;
}this.__jx=O;
this.__jy=S;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(m,{"on":function(L,name,M){this.assert(name===f||name===s,h+name+k);

if(name==s){this.assertMatch(M,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(M);
this.assert(M>=0);
}},"off":null}),renderLayout:function(T,U){if(this._invalidChildrenCache){this.__jz();
}var bc=this.__jy;
var length=bc.length;
var bm=qx.ui.layout.Util;
var bl=this.getSpacing();
var bp=this.getSeparator();

if(bp){var Y=bm.computeVerticalSeparatorGaps(bc,bl,bp);
}else{var Y=bm.computeVerticalGaps(bc,bl,true);
}var i,W,X,bg;
var bh=[];
var bn=Y;

for(i=0;i<length;i+=1){bg=this.__jv[i];
X=bg!=null?Math.floor((U-Y)*bg):bc[i].getSizeHint().height;
bh.push(X);
bn+=X;
}if(this.__jx&&bn!=U){var be={};
var bk,bo;

for(i=0;i<length;i+=1){bk=this.__jw[i];

if(bk>0){bd=bc[i].getSizeHint();
be[i]={min:bd.minHeight,value:bh[i],max:bd.maxHeight,flex:bk};
}}var ba=bm.computeFlexOffsets(be,U,bn);

for(i in ba){bo=ba[i].offset;
bh[i]+=bo;
bn+=bo;
}}var top=bc[0].getMarginTop();
if(bn<U&&this.getAlignY()!=u){top=U-bn;

if(this.getAlignY()===r){top=Math.round(top/2);
}}var bd,br,bi,X,bf,bj,bb;
this._clearSeparators();
if(bp){var bq=qx.theme.manager.Decoration.getInstance().resolve(bp).getInsets();
var V=bq.top+bq.bottom;
}for(i=0;i<length;i+=1){W=bc[i];
X=bh[i];
bd=W.getSizeHint();
bj=W.getMarginLeft();
bb=W.getMarginRight();
bi=Math.max(bd.minWidth,Math.min(T-bj-bb,bd.maxWidth));
br=bm.computeHorizontalAlignOffset(W.getAlignX()||this.getAlignX(),bi,T,bj,bb);
if(i>0){if(bp){top+=bf+bl;
this._renderSeparator(bp,{top:top,left:0,height:V,width:T});
top+=V+bl+W.getMarginTop();
}else{top+=bm.collapseMargins(bl,bf,W.getMarginTop());
}}W.renderLayout(br,top,bi,X);
top+=X;
bf=W.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jz();
}var C=qx.ui.layout.Util;
var K=this.__jy;
var y=0,B=0,A=0;
var w=0,D=0;
var H,x,J;
for(var i=0,l=K.length;i<l;i+=1){H=K[i];
x=H.getSizeHint();
B+=x.height;
var G=this.__jw[i];
var z=this.__jv[i];

if(G){y+=x.minHeight;
}else if(z){A=Math.max(A,Math.round(x.minHeight/z));
}else{y+=x.height;
}J=H.getMarginLeft()+H.getMarginRight();
if((x.width+J)>D){D=x.width+J;
}if((x.minWidth+J)>w){w=x.minWidth+J;
}}y+=A;
var F=this.getSpacing();
var I=this.getSeparator();

if(I){var E=C.computeVerticalSeparatorGaps(K,F,I);
}else{var E=C.computeVerticalGaps(K,F,true);
}return {minHeight:y+E,height:B+E,minWidth:w,width:D};
}},destruct:function(){this._disposeFields(c,p,b);
}});
})();
(function(){var C="splitter",B="slider",A="mousedown",z="mouseout",y="mousemove",x="mouseup",w="losecapture",v="active",u="horizontal",t="vertical",T="knob",S="__jA",R="Integer",Q="height",P="row-resize",O="move",N="maxHeight",M="width",L="_applyOrientation",K="mouseover",I="splitpane",J="qx.ui.splitpane.Pane",G="_applyOffset",H="minHeight",E="minWidth",F="col-resize",D="maxWidth";
qx.Class.define(J,{extend:qx.ui.core.Widget,construct:function(be){arguments.callee.base.call(this);
this.__jA=[];
if(be){this.setOrientation(be);
}else{this.initOrientation();
}this.addListener(A,this._onMouseDown);
this.addListener(x,this._onMouseUp);
this.addListener(y,this._onMouseMove);
this.addListener(z,this._onMouseOut);
this.addListener(w,this._onMouseUp);
},properties:{appearance:{refine:true,init:I},offset:{check:R,init:6,apply:G},orientation:{init:u,check:[u,t],apply:L}},members:{__jB:null,__jC:false,__jD:null,__jE:null,__jF:null,__jG:null,__jH:null,__jA:null,_createChildControlImpl:function(bm){var bn;

switch(bm){case B:bn=new qx.ui.splitpane.Slider(this);
bn.exclude();
this._add(bn,{type:bm});
break;
case C:bn=new qx.ui.splitpane.Splitter(this);
this._add(bn,{type:bm});
bn.addListener(O,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){bn.addListener(K,this._onSplitterMouseOver,bn);
}break;
}return bn||arguments.callee.base.call(this,bm);
},_applyOrientation:function(a,b){var c=this.getChildControl(B);
var g=this.getChildControl(C);
this.__jF=a===u;
var f=this._getLayout();

if(f){f.dispose();
}var d=a===t?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(d);
g.removeState(b);
g.addState(a);
g.getChildControl(T).removeState(b);
g.getChildControl(T).addState(a);
c.removeState(b);
c.addState(a);
},_applyOffset:function(by,bz){var bA=this.getChildControl(C);

if(bz===0){bA.removeListener(A,this._onMouseDown,this);
bA.removeListener(y,this._onMouseMove,this);
bA.removeListener(z,this._onMouseOut,this);
bA.removeListener(x,this._onMouseUp,this);
bA.removeListener(w,this._onMouseUp,this);
this.addListener(A,this._onMouseDown);
this.addListener(x,this._onMouseUp);
this.addListener(y,this._onMouseMove);
this.addListener(z,this._onMouseOut);
this.addListener(w,this._onMouseUp);
}
if(by===0){this.removeListener(A,this._onMouseDown);
this.removeListener(x,this._onMouseUp);
this.removeListener(y,this._onMouseMove);
this.removeListener(z,this._onMouseOut);
this.removeListener(w,this._onMouseUp);
bA.addListener(A,this._onMouseDown,this);
bA.addListener(y,this._onMouseMove,this);
bA.addListener(z,this._onMouseOut,this);
bA.addListener(x,this._onMouseUp,this);
bA.addListener(w,this._onMouseUp,this);
}},add:function(bf,bg){if(bg==null){this._add(bf);
}else{this._add(bf,{flex:bg});
}this.__jA.push(bf);
},remove:function(bh){this._remove(bh);
qx.lang.Array.remove(this.__jA,bh);
},getChildren:function(){return this.__jA;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var h=this.getChildControl(C);
var j=h.getContainerLocation();
var i=this.getContentLocation();
this.__jB=this.__jF?e.getDocumentLeft()-j.left+i.left:e.getDocumentTop()-j.top+i.top;
var l=this.getChildControl(B);
var k=h.getBounds();
l.setUserBounds(k.left,k.top,k.width,k.height);
l.setZIndex(h.getZIndex()+1);
l.show();
this.__jC=true;
e.getCurrentTarget().capture();
},_onMouseMove:function(e){this.__jD=e.getDocumentLeft();
this.__jE=e.getDocumentTop();
if(this.__jC){this.__jJ();
var U=this.getChildControl(B);
var V=this.__jG;

if(this.__jF){U.setDomLeft(V);
}else{U.setDomTop(V);
}}else{this.__jI();
}},_onMouseOut:function(e){this.__jD=-1;
this.__jE=-1;
this.__jI();
},_onMouseUp:function(e){if(!this.__jC){return;
}this._finalizeSizes();
var bl=this.getChildControl(B);
bl.exclude();
this.__jC=false;
this.releaseCapture();
this.__jI();
},_onSplitterMove:function(){this.__jI();
},_onSplitterMouseOver:function(){this.addState(v);
},_finalizeSizes:function(){var ba=this.__jG;
var W=this.__jH;

if(ba==null){return;
}var bc=this._getChildren();
var bb=bc[2];
var X=bc[3];
var Y=bb.getLayoutProperties().flex;
var bd=X.getLayoutProperties().flex;
if((Y!=0)&&(bd!=0)){bb.setLayoutProperties({flex:ba});
X.setLayoutProperties({flex:W});
}else{if(this.__jF){bb.setWidth(ba);
X.setWidth(W);
}else{bb.setHeight(ba);
X.setHeight(W);
}}},_isNear:function(){var m=this.getChildControl(C);
var o=m.getBounds();
var q=m.getContainerLocation();
var n=this.getOffset();
if(!q){return;
}var r=this.__jD;
var s=o.width;
var p=q.left;

if(s<n){p-=Math.floor((n-s)/2);
s=n;
}
if(r<p||r>(p+s)){return false;
}var r=this.__jE;
var s=o.height;
var p=q.top;

if(s<n){p-=Math.floor((n-s)/2);
s=n;
}
if(r<p||r>(p+s)){return false;
}return true;
},__jI:function(){var bj=this.getChildControl(C);
var bk=this.getApplicationRoot();
if(this.__jC||this._isNear()){var bi=this.__jF?F:P;
this.setCursor(bi);
bk.setGlobalCursor(bi);
bj.addState(v);
}else if(bj.hasState(v)){this.resetCursor();
bk.resetGlobalCursor();
bj.removeState(v);
}},__jJ:function(){if(this.__jF){var bq=E,bx=M,br=D,bv=this.__jD;
}else{var bq=H,bx=Q,br=N,bv=this.__jE;
}var bw=this._getChildren();
var bo=bw[2].getSizeHint();
var bt=bw[3].getSizeHint();
var bu=bw[2].getBounds()[bx]+bw[3].getBounds()[bx];
var bs=bv-this.__jB;
var bp=bu-bs;
if(bs<bo[bq]){bp-=bo[bq]-bs;
bs=bo[bq];
}else if(bp<bt[bq]){bs-=bt[bq]-bp;
bp=bt[bq];
}if(bs>bo[br]){bp+=bs-bo[br];
bs=bo[br];
}else if(bp>bt[br]){bs+=bp-bt[br];
bp=bt[br];
}this.__jG=bs;
this.__jH=bp;
},_isActiveDragSession:function(){return this.__jC;
}},destruct:function(){this._disposeFields(S);
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var f="center",e="knob",d="middle",c="qx.ui.splitpane.Splitter",b="vertical";
qx.Class.define(c,{extend:qx.ui.core.Widget,construct:function(a){arguments.callee.base.call(this);
if(a.getOrientation()==b){this._setLayout(new qx.ui.layout.HBox(0,f));
this._getLayout().setAlignY(d);
}else{this._setLayout(new qx.ui.layout.VBox(0,d));
this._getLayout().setAlignX(f);
}this._createChildControl(e);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g){var h;

switch(g){case e:h=new qx.ui.basic.Image;
this._add(h);
break;
}return h||arguments.callee.base.call(this,g);
}}});
})();
(function(){var B="_applyLayoutChange",A="left",z="width",y="center",x="top",w="__jN",v="Decorator",u="middle",t="_applyReversed",s="qx.debug",k="bottom",r="__jK",o="__jL",j="' is not supported by the HBox layout!",h="Boolean",n="flex",m="right",p="Integer",g="The property '",q="qx.ui.layout.HBox";
qx.Class.define(q,{extend:qx.ui.layout.Abstract,construct:function(C,D,E){arguments.callee.base.call(this);

if(C){this.setSpacing(C);
}
if(D){this.setAlignX(D);
}
if(E){this.setSeparator(E);
}},properties:{alignX:{check:[A,y,m],init:A,apply:B},alignY:{check:[x,u,k],init:x,apply:B},spacing:{check:p,init:0,apply:B},separator:{check:v,nullable:true,apply:B},reversed:{check:h,init:false,apply:t}},members:{__jK:null,__jL:null,__jM:null,__jN:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jO:function(){var f=this._getLayoutChildren();
var length=f.length;
var c=false;
var a=this.__jK&&this.__jK.length!=length&&this.__jL&&this.__jK;
var d;
var b=a?this.__jK:new Array(length);
var e=a?this.__jL:new Array(length);
if(this.getReversed()){f=f.concat().reverse();
}for(var i=0;i<length;i++){d=f[i].getLayoutProperties();

if(d.width!=null){b[i]=parseFloat(d.width)/100;
}
if(d.flex!=null){e[i]=d.flex;
c=true;
}}if(!a){this.__jK=b;
this.__jL=e;
}this.__jM=c;
this.__jN=f;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(s,{"on":function(be,name,bf){this.assert(name===n||name===z,g+name+j);

if(name==z){this.assertMatch(bf,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(bf);
this.assert(bf>=0);
}},"off":null}),renderLayout:function(F,G){if(this._invalidChildrenCache){this.__jO();
}var M=this.__jN;
var length=M.length;
var V=qx.ui.layout.Util;
var U=this.getSpacing();
var Y=this.getSeparator();

if(Y){var J=V.computeHorizontalSeparatorGaps(M,U,Y);
}else{var J=V.computeHorizontalGaps(M,U,true);
}var i,H,S,R;
var X=[];
var N=J;

for(i=0;i<length;i+=1){R=this.__jK[i];
S=R!=null?Math.floor((F-J)*R):M[i].getSizeHint().width;
X.push(S);
N+=S;
}if(this.__jM&&N!=F){var P={};
var T,W;

for(i=0;i<length;i+=1){T=this.__jL[i];

if(T>0){O=M[i].getSizeHint();
P[i]={min:O.minWidth,value:X[i],max:O.maxWidth,flex:T};
}}var K=V.computeFlexOffsets(P,F,N);

for(i in K){W=K[i].offset;
X[i]+=W;
N+=W;
}}var bd=M[0].getMarginLeft();
if(N<F&&this.getAlignX()!=A){bd=F-N;

if(this.getAlignX()===y){bd=Math.round(bd/2);
}}var O,top,I,S,L,bb,Q;
var U=this.getSpacing();
this._clearSeparators();
if(Y){var ba=qx.theme.manager.Decoration.getInstance().resolve(Y).getInsets();
var bc=ba.left+ba.right;
}for(i=0;i<length;i+=1){H=M[i];
S=X[i];
O=H.getSizeHint();
bb=H.getMarginTop();
Q=H.getMarginBottom();
I=Math.max(O.minHeight,Math.min(G-bb-Q,O.maxHeight));
top=V.computeVerticalAlignOffset(H.getAlignY()||this.getAlignY(),I,G,bb,Q);
if(i>0){if(Y){bd+=L+U;
this._renderSeparator(Y,{left:bd,top:0,width:bc,height:G});
bd+=bc+U+H.getMarginLeft();
}else{bd+=V.collapseMargins(U,L,H.getMarginLeft());
}}H.renderLayout(bd,top,S,I);
bd+=S;
L=H.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jO();
}var bm=qx.ui.layout.Util;
var bu=this.__jN;
var bg=0,bn=0,bk=0;
var bj=0,bl=0;
var br,bh,bt;
for(var i=0,l=bu.length;i<l;i+=1){br=bu[i];
bh=br.getSizeHint();
bn+=bh.width;
var bq=this.__jL[i];
var bi=this.__jK[i];

if(bq){bg+=bh.minWidth;
}else if(bi){bk=Math.max(bk,Math.round(bh.minWidth/bi));
}else{bg+=bh.width;
}bt=br.getMarginTop()+br.getMarginBottom();
if((bh.height+bt)>bl){bl=bh.height+bt;
}if((bh.minHeight+bt)>bj){bj=bh.minHeight+bt;
}}bg+=bk;
var bp=this.getSpacing();
var bs=this.getSeparator();

if(bs){var bo=bm.computeHorizontalSeparatorGaps(bu,bp,bs);
}else{var bo=bm.computeHorizontalGaps(bu,bp,true);
}return {minWidth:bg+bo,width:bn+bo,minHeight:bj,height:bl};
}},destruct:function(){this._disposeFields(r,o,w);
}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.VLayout",c="qx.debug",b="' is not supported by the split layout!",a="The property '";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(j,name,k){this.assert(name===g||name===f,a+name+b);

if(name==f){this.assertNumber(k);
}
if(name==g){this.assertString(k);
}},"off":null}),renderLayout:function(l,m){var C=this._getLayoutChildren();
var length=C.length;
var y,B;
var o,n,w,p;

for(var i=0;i<length;i++){y=C[i];
B=y.getLayoutProperties().type;

if(B===e){n=y;
}else if(B===h){w=y;
}else if(!o){o=y;
}else{p=y;
}}
if(o&&p){var E=o.getLayoutProperties().flex;
var r=p.getLayoutProperties().flex;

if(E==null){E=1;
}
if(r==null){r=1;
}var D=o.getSizeHint();
var u=n.getSizeHint();
var v=p.getSizeHint();
var q=D.height;
var z=u.height;
var A=v.height;

if(E>0&&r>0){var s=E+r;
var t=m-z;
var q=Math.round((t/s)*E);
var A=t-q;
var x=qx.ui.layout.Util.arrangeIdeals(D.minHeight,q,D.maxHeight,v.minHeight,A,v.maxHeight);
q=x.begin;
A=x.end;
}else if(E>0){q=m-z-A;

if(q<D.minHeight){q=D.minHeight;
}
if(q>D.maxHeight){q=D.maxHeight;
}}else if(r>0){A=m-q-z;

if(A<v.minHeight){A=v.minHeight;
}
if(A>v.maxHeight){A=v.maxHeight;
}}o.renderLayout(0,0,l,q);
n.renderLayout(0,q,l,z);
p.renderLayout(0,q+z,l,A);
}else{n.renderLayout(0,0,0,0);
if(o){o.renderLayout(0,0,l,m);
}else if(p){p.renderLayout(0,0,l,m);
}}},_computeSizeHint:function(){var O=this._getLayoutChildren();
var length=O.length;
var H,G,N;
var I=0,K=0,J=0;
var L=0,M=0,F=0;

for(var i=0;i<length;i++){H=O[i];
N=H.getLayoutProperties();
if(N.type===h){continue;
}G=H.getSizeHint();
I+=G.minHeight;
K+=G.height;
J+=G.maxHeight;

if(G.minWidth>L){L=G.minWidth;
}
if(G.width>M){M=G.width;
}
if(G.maxWidth>F){F=G.maxWidth;
}}return {minHeight:I,height:K,maxHeight:J,minWidth:L,width:M,maxWidth:F};
}}});
})();
(function(){var s="slider",r="type",q="flex",p="splitter",o="qx.ui.splitpane.HLayout",n="' is not supported by the split layout!",m="The property '",l="qx.debug";
qx.Class.define(o,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(l,{"on":function(t,name,u){this.assert(name===r||name===q,m+name+n);

if(name==q){this.assertNumber(u);
}
if(name==r){this.assertString(u);
}},"off":null}),renderLayout:function(v,w){var M=this._getLayoutChildren();
var length=M.length;
var J,L;
var y,x,G,z;

for(var i=0;i<length;i++){J=M[i];
L=J.getLayoutProperties().type;

if(L===p){x=J;
}else if(L===s){G=J;
}else if(!y){y=J;
}else{z=J;
}}
if(y&&z){var O=y.getLayoutProperties().flex;
var A=z.getLayoutProperties().flex;

if(O==null){O=1;
}
if(A==null){A=1;
}var N=y.getSizeHint();
var D=x.getSizeHint();
var F=z.getSizeHint();
var K=N.width;
var I=D.width;
var H=F.width;

if(O>0&&A>0){var B=O+A;
var C=v-I;
var K=Math.round((C/B)*O);
var H=C-K;
var E=qx.ui.layout.Util.arrangeIdeals(N.minWidth,K,N.maxWidth,F.minWidth,H,F.maxWidth);
K=E.begin;
H=E.end;
}else if(O>0){K=v-I-H;

if(K<N.minWidth){K=N.minWidth;
}
if(K>N.maxWidth){K=N.maxWidth;
}}else if(A>0){H=v-K-I;

if(H<F.minWidth){H=F.minWidth;
}
if(H>F.maxWidth){H=F.maxWidth;
}}y.renderLayout(0,0,K,w);
x.renderLayout(K,0,I,w);
z.renderLayout(K+I,0,H,w);
}else{x.renderLayout(0,0,0,0);
if(y){y.renderLayout(0,0,v,w);
}else if(z){z.renderLayout(0,0,v,w);
}}},_computeSizeHint:function(){var k=this._getLayoutChildren();
var length=k.length;
var c,b,j;
var g=0,h=0,a=0;
var d=0,f=0,e=0;

for(var i=0;i<length;i++){c=k[i];
j=c.getLayoutProperties();
if(j.type===s){continue;
}b=c.getSizeHint();
g+=b.minWidth;
h+=b.width;
a+=b.maxWidth;

if(b.minHeight>d){d=b.minHeight;
}
if(b.height>f){f=b.height;
}
if(b.maxHeight>e){e=b.maxHeight;
}}return {minWidth:g,width:h,maxWidth:a,minHeight:d,height:f,maxHeight:e};
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
(function(){var j="qx.ui.core.MSingleSelectionHandling",i="__jP",h="changeSelection",g="changeSelected",f="qx.event.type.Data";
qx.Mixin.define(j,{events:{"changeSelection":f},members:{__jP:null,getSelection:function(){var k=this.__jQ().getSelected();

if(k){return [k];
}else{return [];
}},setSelection:function(d){switch(d.length){case 0:this.resetSelection();
break;
case 1:this.__jQ().setSelected(d[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+d.length+" items!");
}},resetSelection:function(){this.__jQ().resetSelected();
},isSelected:function(l){return this.__jQ().isSelected(l);
},isSelectionEmpty:function(){return this.__jQ().isSelectionEmpty();
},getSelectables:function(){return this.__jQ().getSelectables();
},_onChangeSelected:function(e){var c=e.getData();
var b=e.getOldData();
c==null?c=[]:c=[c];
b==null?b=[]:b=[b];
this.fireDataEvent(h,c,b);
},__jQ:function(){if(this.__jP==null){var a=this;
this.__jP=new qx.ui.core.SingleSelectionManager({getItems:function(){return a._getItems();
},isItemSelectable:function(m){if(a._isItemSelectable){return a._isItemSelectable(m);
}else{return m.isEnabled()&&m.isVisible();
}}});
this.__jP.addListener(g,this._onChangeSelected,this);
}this.__jP.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__jP;
}},destruct:function(){this._disposeObjects(i);
}});
})();
(function(){var v="change",u="Use 'getSelection' instead!",t="Use 'resetSelection' instead!",s="Boolean",r="qx.ui.container.Stack",q="_applyDynamic",p="Use 'setSelection' instead!",o="changeSelection",n="Use 'changeSelection' instead!",m="qx.event.type.Data";
qx.Class.define(r,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(o,this.__jR,this);
},events:{"change":m},properties:{dynamic:{check:s,init:false,apply:q}},members:{_applyDynamic:function(f){var h=this._getChildren();
var g=this.getSelection()[0];
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];

if(j!=g){if(f){h[i].exclude();
}else{h[i].hide();
}}}},setSelected:function(w){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
this.setSelection([w]);
},getSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
var x=this.getSelection()[0];

if(x){return x;
}else{return null;
}},resetSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
this.resetSelection();
},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(H){return H.isEnabled();
},__jR:function(e){var F=e.getOldData()[0];
var G=e.getData()[0];

if(F){if(this.isDynamic()){F.exclude();
}else{F.hide();
}}
if(G){G.show();
}if(this.hasListener(v)){this.fireDataEvent(v,G,F);
}},addListener:function(C,D,self,E){if(C===v){qx.log.Logger.deprecatedEventWarning(arguments.callee,v,n);
}return arguments.callee.base.call(this,C,D,self,E);
},add:function(y){this._add(y);
var z=this.getSelection()[0];

if(!z){this.setSelection([y]);
}else if(z!==y){if(this.isDynamic()){y.exclude();
}else{y.hide();
}}},remove:function(A){this._remove(A);

if(this.getSelection()[0]===A){var B=this._getChildren()[0];

if(B){this.setSelection([B]);
}else{this.resetSelection();
}}},indexOf:function(k){return this._indexOf(k);
},getChildren:function(){return this._getChildren();
},previous:function(){var K=this.getSelection()[0];
var I=this._indexOf(K)-1;
var L=this._getChildren();

if(I<0){I=L.length-1;
}var J=L[I];
this.setSelection([J]);
},next:function(){var b=this.getSelection()[0];
var a=this._indexOf(b)+1;
var c=this._getChildren();
var d=c[a]||c[0];
this.setSelection([d]);
}}});
})();
(function(){var k="__jS",j="__jU",h="Boolean",g="__jT",f="qx.ui.core.SingleSelectionManager",e="qx.debug",d="Invalid selectionProvider!",c="changeSelected",b="on",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.core.Object,construct:function(l){arguments.callee.base.call(this);

if(qx.core.Variant.isSet(e,b)){qx.core.Assert.assertInterface(l,qx.ui.core.ISingleSelectionProvider,d);
}this.__jS=l;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:h,init:true,apply:j}},members:{__jT:null,__jS:null,getSelected:function(){return this.__jT;
},setSelected:function(m){if(!this.__jW(m)){throw new Error("Could not select "+m+", because it is not a child element!");
}this.__jV(m);
},resetSelected:function(){this.__jV(null);
},isSelected:function(t){if(!this.__jW(t)){throw new Error("Could not check if "+t+" is selected,"+" because it is not a child element!");
}return this.__jT===t;
},isSelectionEmpty:function(){return this.__jT==null;
},getSelectables:function(){var w=this.__jS.getItems();
var x=[];

for(var i=0;i<w.length;i++){if(this.__jS.isItemSelectable(w[i])){x.push(w[i]);
}}return x;
},__jU:function(u,v){if(!u){this.__jV(this.__jT);
}},__jV:function(p){var s=this.__jT;
var r=p;

if(r!=null&&s===r){return;
}
if(!this.isAllowEmptySelection()&&r==null){var q=this.getSelectables()[0];

if(q){r=q;
}}this.__jT=r;
this.fireDataEvent(c,r,s);
},__jW:function(n){var o=this.__jS.getItems();

for(var i=0;i<o.length;i++){if(o[i]===n){return true;
}}return false;
}},destruct:function(){if(this.__jS.toHashCode){this._disposeObjects(k);
}else{this._disposeFields(k);
}this._disposeObjects(g);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var F="qx.client",E="#",D="",C="-1000px",B="request",A="__jY",z="qx.event.type.Data",y="Number",x="qx/static/blank.html",w="interval",p="_applyTimeoutInterval",v="state",s='<html><body><div id="state">',n="hidden",m="__kc",r="iframe",q="qx.bom.History",t='</div></body></html>',l="__jX",u="singleton",o="absolute";
qx.Class.define(q,{type:u,extend:qx.core.Object,construct:qx.core.Variant.select(F,{"mshtml":function(){arguments.callee.base.call(this);
this.__jX=document.createElement(r);
this.__jX.style.visibility=n;
this.__jX.style.position=o;
this.__jX.style.left=C;
this.__jX.style.top=C;
this.__jX.src=qx.util.ResourceManager.getInstance().toUri(x);
document.body.appendChild(this.__jX);
this.__jY={};
this.__ka=decodeURIComponent(this.__kf());
this.__kb=decodeURIComponent(this.__kf());
this.__ki(function(){this.__kh(this.__ka);
this.__ke();
},this);
},"default":function(){arguments.callee.base.call(this);
this.__jY={};
this.__ka=this.__kg();
this.__ke();
}}),events:{"request":z},properties:{timeoutInterval:{check:y,init:100,apply:p}},members:{__jX:null,__jY:null,__ka:null,__kc:null,__kb:null,addToHistory:function(a,b){if(b!=null){document.title=b;
this.__jY[a]=b;
}
if(a!=this.__ka){top.location.hash=E+encodeURIComponent(a);
this.__kh(a);
}},getState:function(){return this.__ka;
},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_applyTimeoutInterval:function(N){this.__kc.setInterval(N);
},__kd:function(f){this.__ka=f;
this.fireDataEvent(B,f);

if(this.__jY[f]!=null){document.title=this.__jY[f];
}},__ke:function(){this.__kc=new qx.event.Timer(this.getTimeoutInterval());
this.__kc.addListener(w,function(e){var k=this.__kg();

if(k!=this.__ka){this.__kd(k);
}},this);
this.__kc.start();
},__kf:function(){var K=top.location.href;
var L=K.indexOf(E);
return L>=0?K.substring(L+1):D;
},__kg:qx.core.Variant.select(F,{"mshtml":function(){var i=decodeURIComponent(this.__kf());

if(i!=this.__kb){this.__kb=i;
this.__kh(i);
return i;
}var g=this.__jX.contentWindow.document;
var j=g.getElementById(v);
var h=j?decodeURIComponent(j.innerText):D;
return h;
},"default":function(){return decodeURIComponent(this.__kf());
}}),__kh:qx.core.Variant.select(F,{"mshtml":function(H){var J=s+encodeURIComponent(H)+t;

try{var I=this.__jX.contentWindow.document;
I.open();
I.write(J);
I.close();
}catch(G){return false;
}return true;
},"default":function(M){qx.event.Timer.once(function(){top.location.hash=E+encodeURIComponent(M);
},this,0);
return true;
}}),__ki:qx.core.Variant.select(F,{"mshtml":function(c,d){if(!this.__jX.contentWindow||!this.__jX.contentWindow.document){qx.event.Timer.once(function(){this.__ki(c,d);
},this,10);
return;
}c.call(d||window);
},"default":null})},destruct:function(){this.__kc.stop();
this._disposeObjects(m);
this._disposeFields(l,A);
}});
})();
(function(){var x="Unidentified",w="+",v="keydown",u="0",t="Control",s="",r="9",q="short",p="-",o="PageUp",bj="Escape",bi="Boolean",bh="qx.event.type.Data",bg="_applyShortcut",bf="PrintScreen",be="NumLock",bd="A",bc="Z",bb="5",ba="8",E="execute",F="Meta",C="PageDown",D="qx.debug",A="Shift",B="You can only specify one non modifier key!",y="3",z="__kj",G="/",H="_applyEnabled",O="String",M="changeEnabled",S="*",Q="__kk",V="Not a valid key name for a command: ",U="6",J="4",Y="Alt",X="2",W="Whitespaces are not allowed within shortcuts",I="Delete",K="1",L="7",N="qx.event.Command",P="a",R="z",T="on";
qx.Class.define(N,{extend:qx.core.Object,construct:function(m){arguments.callee.base.call(this);
this.__kj={};
this.__kk=null;

if(m!=null){this.setShortcut(m);
}if(qx.core.Variant.isSet(D,T)){if(this.__kj.Alt&&this.__kk&&this.__kk.length==1){if((this.__kk>=bd&&this.__kk<=bc)||(this.__kk>=u&&this.__kk<=r)){this.warn("A shortcut containing Alt and a letter or number will not work under OS X!");
}}}this.initEnabled();
},events:{"execute":bh},properties:{enabled:{init:true,check:bi,event:M,apply:H},shortcut:{check:O,apply:bg,nullable:true}},members:{__kj:s,__kk:s,execute:function(d){this.fireDataEvent(E,d);
},__kl:function(event){if(this.getEnabled()&&this.matchesKeyEvent(event)){this.execute(event.getTarget());
event.preventDefault();
event.stopPropagation();
}},_applyEnabled:function(b,c){if(b){qx.event.Registration.addListener(document.documentElement,v,this.__kl,this);
}else{qx.event.Registration.removeListener(document.documentElement,v,this.__kl,this);
}},_applyShortcut:function(f,g){if(f){if(f.search(/[\s]+/)!=-1){var k=W;
this.error(k);
throw k;
}this.__kj={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__kk=null;
var h;
var a=[];

while(f.length>0&&h!=-1){h=f.search(/[-+]+/);
a.push((f.length==1||h==-1)?f:f.substring(0,h));
f=f.substring(h+1);
}var j=a.length;

for(var i=0;i<j;i++){var l=this.__kn(a[i]);

switch(l){case t:case A:case F:case Y:this.__kj[l]=true;
break;
case x:var k=V+a[i];
this.error(k);
throw k;
default:if(this.__kk){var k=B;
this.error(k);
throw k;
}this.__kk=l;
}}}return true;
},matchesKeyEvent:function(e){var n=this.__kk;

if(!n){return ;
}if((!this.__kj.Shift&&e.isShiftPressed())||(this.__kj.Shift&&!e.isShiftPressed())||(!this.__kj.Control&&e.isCtrlPressed())||(this.__kj.Control&&!e.isCtrlPressed())||(!this.__kj.Meta&&e.isMetaPressed())||(this.__kj.Meta&&!e.isMetaPressed())||(!this.__kj.Alt&&e.isAltPressed())||(this.__kj.Alt&&!e.isAltPressed())){return false;
}
if(n==e.getKeyIdentifier()){return true;
}return false;
},__km:{esc:bj,ctrl:t,print:bf,del:I,pageup:o,pagedown:C,numlock:be,numpad_0:u,numpad_1:K,numpad_2:X,numpad_3:y,numpad_4:J,numpad_5:bb,numpad_6:U,numpad_7:L,numpad_8:ba,numpad_9:r,numpad_divide:G,numpad_multiply:S,numpad_minus:p,numpad_plus:w},__kn:function(bn){var bo=qx.event.handler.Keyboard;
var bp=x;

if(bo.isValidKeyIdentifier(bn)){return bn;
}
if(bn.length==1&&bn>=P&&bn<=R){return bn.toUpperCase();
}bn=bn.toLowerCase();
var bp=this.__km[bn]||qx.lang.String.firstUp(bn);

if(bo.isValidKeyIdentifier(bp)){return bp;
}else{return x;
}},toString:function(){var bm=this.__kk;
var bl=[];

for(var bk in this.__kj){if(this.__kj[bk]){bl.push(qx.locale.Key.getKeyName(q,bk));
}}
if(bm){bl.push(qx.locale.Key.getKeyName(q,bm));
}return bl.join(w);
}},destruct:function(){this.setEnabled(false);
this._disposeFields(z,Q);
}});
})();
(function(){var bC="End",bB="Left",bA="Meta",bz="Pause",by="Down",bx="Home",bw="Apps",bv="Win",bu="Right",bt="Backspace",bi="Space",bh="Up",bg="Shift",bf="Enter",be="Scroll",bd="Alt",bc="key_full_Meta",bb="PrintScreen",ba="NumLock",Y="Escape",bJ="key_short_Alt",bK="key_short_Insert",bH="Del",bI="Num",bF="key_full_Enter",bG="key_full_Control",bD="qx.locale.Key",bE="Tabulator",bL="key_full_Space",bM="key_short_Meta",bm="key_short_PageUp",bl="key_short_Pause",bo="key_full_Down",bn="key_short_Apps",bq="key_short_Win",bp="key_full_Right",bs="key_short_Up",br="key_full_PageDown",bk="key_full_Alt",bj="PgDn",f="key_full_Escape",g="key_full_Insert",h="Ctrl",i="key_short_Space",j="key_short_Backspace",k="key_short_Home",l="full",m="key_short_Down",n="PgUp",o="key_short_CapsLock",bQ="PageUp",bP="key_full_Up",bO="key_full_Home",bN="key_full_Backspace",bU="PageDown",bT="CapsLock",bS="Ins",bR="Control",bW="key_short_PrintScreen",bV="Tab",I="key_full_Apps",J="key_short_Tab",G="key_short_End",H="_",M="Caps",N="key_short_NumLock",K="key_full_Scroll",L="key_short_Left",E="key_short_Scroll",F="on",w="key_",v="key_full_Pause",y="key_short_Right",x="key_full_PrintScreen",s="key_full_Win",r="short",u="key_short_Shift",t="key_short_PageDown",q="key_short_Enter",p="key_short_Control",S="qx.debug",T="Insert",U="key_short_Escape",V="key_full_Tab",O="Print",P="Delete",Q="key_full_CapsLock",R="Esc",W="key_short_Delete",X="key_full_PageUp",D="key_full_Shift",C="key_full_NumLock",B="key_full_Delete",A="key_full_End",z="key_full_Left";
qx.Class.define(bD,{statics:{getKeyName:function(bX,bY,ca){if(qx.core.Variant.isSet(S,F)){qx.core.Assert.assertInArray(bX,[r,l]);
}var cc=w+bX+H+bY;
var cb=qx.locale.Manager.getInstance().translate(cc,[],ca);

if(cb==cc){return qx.locale.Key._keyNames[cc]||bY;
}else{return cb;
}}},defer:function(a,b,c){var e={};
var d=qx.locale.Manager;
e[d.marktr(j)]=bt;
e[d.marktr(J)]=bV;
e[d.marktr(i)]=bi;
e[d.marktr(q)]=bf;
e[d.marktr(u)]=bg;
e[d.marktr(p)]=h;
e[d.marktr(bJ)]=bd;
e[d.marktr(o)]=M;
e[d.marktr(bM)]=bA;
e[d.marktr(U)]=R;
e[d.marktr(L)]=bB;
e[d.marktr(bs)]=bh;
e[d.marktr(y)]=bu;
e[d.marktr(m)]=by;
e[d.marktr(bm)]=n;
e[d.marktr(t)]=bj;
e[d.marktr(G)]=bC;
e[d.marktr(k)]=bx;
e[d.marktr(bK)]=bS;
e[d.marktr(W)]=bH;
e[d.marktr(N)]=bI;
e[d.marktr(bW)]=O;
e[d.marktr(E)]=be;
e[d.marktr(bl)]=bz;
e[d.marktr(bq)]=bv;
e[d.marktr(bn)]=bw;
e[d.marktr(bN)]=bt;
e[d.marktr(V)]=bE;
e[d.marktr(bL)]=bi;
e[d.marktr(bF)]=bf;
e[d.marktr(D)]=bg;
e[d.marktr(bG)]=bR;
e[d.marktr(bk)]=bd;
e[d.marktr(Q)]=bT;
e[d.marktr(bc)]=bA;
e[d.marktr(f)]=Y;
e[d.marktr(z)]=bB;
e[d.marktr(bP)]=bh;
e[d.marktr(bp)]=bu;
e[d.marktr(bo)]=by;
e[d.marktr(X)]=bQ;
e[d.marktr(br)]=bU;
e[d.marktr(A)]=bC;
e[d.marktr(bO)]=bx;
e[d.marktr(g)]=T;
e[d.marktr(B)]=P;
e[d.marktr(C)]=ba;
e[d.marktr(x)]=bb;
e[d.marktr(K)]=be;
e[d.marktr(v)]=bz;
e[d.marktr(s)]=bv;
e[d.marktr(I)]=bw;
a._keyNames=e;
}});
})();
(function(){var o="both",n="qx.ui.menu.Menu",m="_applySpacing",k="icon",j="label",h="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",e="toolbar",d="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:e},openMenu:{check:n,event:d,nullable:true},show:{init:o,check:[o,j,k],inheritable:true,event:h},spacing:{nullable:true,check:g,themeable:true,apply:m}},members:{_applySpacing:function(a,b){var c=this._getLayout();
a==null?c.resetSpacing():c.setSpacing(a);
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
(function(){var h="changeEnabled",g="qx.ui.core.MExecutable",f="qx.event.Command",d="qx.event.type.Event",c="changeCommand",b="_applyCommand",a="execute";
qx.Mixin.define(g,{events:{"execute":d},properties:{command:{check:f,apply:b,event:c,nullable:true}},members:{execute:function(){var i=this.getCommand();

if(i){i.execute(this);
}this.fireEvent(a);
},_applyCommand:function(j,k){if(k){k.removeListener(h,this._onChangeEnabledCommand,this);
}
if(j){j.addListener(h,this._onChangeEnabledCommand,this);

if(this.getEnabled()===false){j.setEnabled(false);
}else if(j.getEnabled()===false){this.setEnabled(false);
}}},_onChangeEnabledCommand:function(e){this.setEnabled(e.getData());
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.MFormElement";
qx.Mixin.define(b,{events:{"changeName":c},members:{__ko:null,setName:function(name){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
if(name!=null&&!qx.lang.Type.isString(name)){throw new Error("Please use strings for the name property.");
return;
}var d=this.__ko;
this.__ko=name;
this.fireDataEvent(qx.event.type.Data,name,d);
},getName:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return this.__ko;
},resetName:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var a=this.__ko;
this.__ko=null;
this.fireDataEvent(qx.event.type.Data,null,a);
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.form.IFormElement",b="boolean";
qx.Interface.define(c,{events:{"changeValue":d,"changeName":d,"changeEnabled":d},members:{setEnabled:function(a){this.assertType(a,b);
},getEnabled:function(){},setName:function(f){this.assertString(f);
},getName:function(){},setValue:function(e){return arguments.length==1;
},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var u="pressed",t="abandoned",s="hovered",r="changeValue",q="qx.ui.form.Button",p="Enter",o="Space",n="dblclick",m="mouseup",l="mousedown",g="The value property will be removed.",k="mouseover",j="mouseout",f="keydown",d="button",i="keyup",h="qx.event.type.Data";
qx.Class.define(q,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable,qx.ui.form.MFormElement],implement:[qx.ui.form.IFormElement,qx.ui.form.IExecutable],construct:function(a,b,c){arguments.callee.base.call(this,a,b);

if(c!=null){this.setCommand(c);
}this.addListener(k,this._onMouseOver);
this.addListener(j,this._onMouseOut);
this.addListener(l,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(f,this._onKeyDown);
this.addListener(i,this._onKeyUp);
this.addListener(n,this._onStopEvent);
},events:{"changeValue":h},properties:{appearance:{refine:true,init:d},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(t)){return;
}this.addState(u);
},release:function(){if(this.hasState(u)){this.removeState(u);
}},reset:function(){this.removeState(u);
this.removeState(t);
this.removeState(s);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(t)){this.removeState(t);
this.addState(u);
}this.addState(s);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(s);

if(this.hasState(u)){this.removeState(u);
this.addState(t);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(t);
this.addState(u);
},_onMouseUp:function(e){this.releaseCapture();
var y=this.hasState(u);
var z=this.hasState(t);

if(y){this.removeState(u);
}
if(z){this.removeState(t);
}else{this.addState(s);

if(y){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case p:case o:this.removeState(t);
this.addState(u);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case p:case o:if(this.hasState(u)){this.removeState(t);
this.removeState(u);
this.execute();
e.stopPropagation();
}}},__kp:null,setValue:function(A){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var B=this.__kp;
this.__kp=A;
this.fireDataEvent(r,A,B);
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return this.__kp;
},resetValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__kp=null;
},addListener:function(v,w,self,x){if(v==r&&this.classname==q){qx.log.Logger.deprecatedEventWarning(arguments.callee,r,g);
}return arguments.callee.base.call(this,v,w,self,x);
}}});
})();
(function(){var o="pressed",n="hovered",m="changeVisibility",l="qx.ui.menu.Menu",k="Enter",j="changeMenu",i="qx.ui.form.MenuButton",h="abandoned",g="_applyMenu";
qx.Class.define(i,{extend:qx.ui.form.Button,construct:function(p,q,r){arguments.callee.base.call(this,p,q);
if(r!=null){this.setMenu(r);
}},properties:{menu:{check:l,nullable:true,apply:g,event:j}},members:{_applyMenu:function(d,f){if(f){f.removeListener(m,this._onMenuChange,this);
f.resetOpener();
}
if(d){d.addListener(m,this._onMenuChange,this);
d.setOpener(this);
}},open:function(a){var b=this.getMenu();

if(b){qx.ui.menu.Manager.getInstance().hideAll();
b.open();
if(a){var c=b.getChildren()[0];

if(c){b.setSelectedButton(c);
}}}},_onMenuChange:function(e){var t=this.getMenu();

if(t.isVisible()){this.addState(o);
}else{this.removeState(o);
}},_onMouseDown:function(e){var u=this.getMenu();

if(u){if(!u.isVisible()){this.open();
}else{u.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(n);
},_onMouseOut:function(e){this.removeState(n);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case k:this.removeState(h);
this.addState(o);
var s=this.getMenu();

if(s){if(!s.isVisible()){this.open();
}else{s.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var j="pressed",i="hovered",h="inherit",g="qx.ui.menubar.Button",f="Please use 'getMenuBar' to access the connected menubar widget",d="keydown",c="menubar-button",b="keyup";
qx.Class.define(g,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){arguments.callee.base.call(this,k,l,m);
this.removeListener(d,this._onKeyDown);
this.removeListener(b,this._onKeyUp);
},properties:{appearance:{refine:true,init:c},show:{refine:true,init:h},focusable:{refine:true,init:false}},members:{getToolBar:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},_onMenuChange:function(e){var a=this.getMenu();
var menubar=this.getMenuBar();

if(a.isVisible()){this.addState(j);
if(menubar){menubar.setOpenMenu(a);
}}else{this.removeState(j);
if(menubar&&menubar.getOpenMenu()==a){menubar.resetOpenMenu();
}}},_onMouseOver:function(e){this.addState(i);
if(this.getMenu()){var menubar=this.getMenuBar();
var open=menubar.getOpenMenu();

if(open&&open!=this.getMenu()){qx.ui.menu.Manager.getInstance().hideAll();
this.open();
}}}}});
})();
(function(){var Q="mouseup",P="keypress",O="mousedown",N="qx.debug",M="interval",L="keydown",K="on",J="keyup",I="__kr",H="Enter",A="__ks",G="Up",D="Escape",y="__kq",x="blur",C="qx.ui.menu.Manager",B="Left",E="Down",w="Right",F="singleton",z="Space";
qx.Class.define(C,{type:F,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kq=[];
var bH=qx.core.Init.getApplication().getRoot();
var bG=document.body;
var bI=qx.event.Registration;
bH.addListener(O,this._onMouseDown,this,true);
bH.addListener(Q,this._onMouseUp,this);
bI.addListener(window.document.documentElement,Q,this._onMouseUp,this);
bI.addListener(bG,L,this._onKeyUpDown,this,true);
bI.addListener(bG,J,this._onKeyUpDown,this,true);
bI.addListener(bG,P,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,x,this.hideAll,this);
this.__kr=new qx.event.Timer;
this.__kr.addListener(M,this._onOpenInterval,this);
this.__ks=new qx.event.Timer;
this.__ks.addListener(M,this._onCloseInterval,this);
},members:{__kt:null,__ku:null,__kr:null,__ks:null,__kq:null,_getChild:function(T,U,V,W){var X=T.getChildren();
var length=X.length;
var Y;

for(var i=U;i<length&&i>=0;i+=V){Y=X[i];

if(Y.isEnabled()&&!Y.isAnonymous()){return Y;
}}
if(W){i=i==length?0:length-1;

for(;i!=U;i+=V){Y=X[i];

if(Y.isEnabled()&&!Y.isAnonymous()){return Y;
}}}return null;
},_isInMenu:function(bw){while(bw){if(bw instanceof qx.ui.menu.Menu){return true;
}bw=bw.getLayoutParent();
}return false;
},_getMenuButton:function(m){while(m){if(m instanceof qx.ui.menu.AbstractButton){return m;
}m=m.getLayoutParent();
}return null;
},add:function(bg){if(qx.core.Variant.isSet(N,K)){if(!(bg instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bg);
}}var bh=this.__kq;
bh.push(bg);
bg.setZIndex(1e6+bh.length);
},remove:function(R){if(qx.core.Variant.isSet(N,K)){if(!(R instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+R);
}}var S=this.__kq;

if(S){qx.lang.Array.remove(S,R);
}},hideAll:function(){var bi=this.__kq;

if(bi){for(var i=bi.length-1;i>=0;i--){bi[i].exclude();
}}},getActiveMenu:function(){var bn=this.__kq;
return bn.length>0?bn[bn.length-1]:null;
},scheduleOpen:function(ba){this.cancelClose(ba);
if(ba.isVisible()){if(this.__kt){this.cancelOpen(this.__kt);
}}else if(this.__kt!=ba){this.__kt=ba;
this.__kr.restartWith(ba.getOpenInterval());
}},scheduleClose:function(c){this.cancelOpen(c);
if(!c.isVisible()){if(this.__ku){this.cancelClose(this.__ku);
}}else if(this.__ku!=c){this.__ku=c;
this.__ks.restartWith(c.getCloseInterval());
}},cancelOpen:function(l){if(this.__kt==l){this.__kr.stop();
this.__kt=null;
}},cancelClose:function(bz){if(this.__ku==bz){this.__ks.stop();
this.__ku=null;
}},_onOpenInterval:function(e){this.__kr.stop();
this.__kt.open();
this.__kt=null;
},_onCloseInterval:function(e){this.__ks.stop();
this.__ku.exclude();
this.__ku=null;
},_onMouseDown:function(e){var v=e.getTarget();
if(v.getMenu&&v.getMenu()&&v.getMenu().isVisible()){return;
}if(this.__kq.length>0&&!this._isInMenu(v)){this.hideAll();
}},_onMouseUp:function(e){var b=e.getTarget();
var a;

if(b instanceof qx.ui.core.Widget){a=b;
}else{a=qx.ui.core.Widget.getWidgetByElement(b);
}if(!(a instanceof qx.ui.menu.Menu)){a=this._getMenuButton(a);

if(a!=null&&a instanceof qx.ui.menu.AbstractButton&&!a.isEnabled()){return;
}this.hideAll();
}},__kv:{"Enter":1,"Space":1},__kw:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var bx=this.getActiveMenu();

if(!bx){return;
}var by=e.getKeyIdentifier();

if(this.__kw[by]||(this.__kv[by]&&bx.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bo=this.getActiveMenu();

if(!bo){return;
}var bp=e.getKeyIdentifier();
var br=this.__kw[bp];
var bq=this.__kv[bp];

if(br){switch(bp){case G:this._onKeyPressUp(bo);
break;
case E:this._onKeyPressDown(bo);
break;
case B:this._onKeyPressLeft(bo);
break;
case w:this._onKeyPressRight(bo);
break;
case D:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bq){var bs=bo.getSelectedButton();

if(bs){switch(bp){case H:this._onKeyPressEnter(bo,bs,e);
break;
case z:this._onKeyPressSpace(bo,bs,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(bb){var bc=bb.getSelectedButton();
var bd=bb.getChildren();
var bf=bc?bb.indexOf(bc)-1:bd.length-1;
var be=this._getChild(bb,bf,-1,true);
if(be){bb.setSelectedButton(be);
}else{bb.resetSelectedButton();
}},_onKeyPressDown:function(bj){var bk=bj.getSelectedButton();
var bm=bk?bj.indexOf(bk)+1:0;
var bl=this._getChild(bj,bm,1,true);
if(bl){bj.setSelectedButton(bl);
}else{bj.resetSelectedButton();
}},_onKeyPressLeft:function(bA){var bD=bA.getOpener();

if(!bD){return;
}if(bD instanceof qx.ui.menu.Button){var bF=bD.getLayoutParent();
bF.resetOpenedButton();
bF.setSelectedButton(bD);
}else if(bD instanceof qx.ui.menubar.Button){var bB=bD.getMenuBar().getMenuButtons();
var bC=bB.indexOf(bD);
if(bC===-1){return;
}var bE=bC==0?bB[bB.length-1]:bB[bC-1];

if(bE!=bD){bE.open(true);
}}},_onKeyPressRight:function(n){var p=n.getSelectedButton();
if(p){var o=p.getMenu();

if(o){n.setOpenedButton(p);
var u=this._getChild(o,0,1);

if(u){o.setSelectedButton(u);
}return;
}}else if(!n.getOpenedButton()){var u=this._getChild(n,0,1);

if(u){n.setSelectedButton(u);

if(u.getMenu()){n.setOpenedButton(u);
}return;
}}var s=n.getOpener();
if(s instanceof qx.ui.menu.Button&&p){while(s){s=s.getLayoutParent();

if(s instanceof qx.ui.menu.Menu){s=s.getOpener();

if(s instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!s){return;
}}if(s instanceof qx.ui.menubar.Button){var r=s.getMenuBar().getMenuButtons();
var q=r.indexOf(s);
if(q===-1){return;
}var t=r[q+1];

if(!t){t=r[0];
}
if(t!=s){t.open(true);
}}},_onKeyPressEnter:function(d,f,e){if(f.hasListener(P)){var g=e.clone();
g.setBubbles(false);
g.setTarget(f);
f.dispatchEvent(g);
}this.hideAll();
},_onKeyPressSpace:function(h,j,e){if(j.hasListener(P)){var k=e.clone();
k.setBubbles(false);
k.setTarget(j);
j.dispatchEvent(k);
}}},destruct:function(){var bv=qx.event.Registration;
var bt=document.body;
var bu=qx.core.Init.getApplication().getRoot();
bu.removeListener(O,this._onMouseDown,this,true);
bu.removeListener(Q,this._onMouseUp,this);
bv.removeListener(window.document.documentElement,Q,this._onMouseUp,this);
bv.removeListener(bt,L,this._onKeyUpDown,this,true);
bv.removeListener(bt,J,this._onKeyUpDown,this,true);
bv.removeListener(bt,P,this._onKeyPress,this,true);
this._disposeObjects(I,A);
this._disposeArray(y);
}});
})();
(function(){var m="Integer",l="qx.ui.core.Widget",k="selected",j="visible",i="Boolean",h="mouseout",g="excluded",f="menu",d="_applySelectedButton",c="_applySpacingY",z="_blocker",y="_applyCloseInterval",x="_applyBlockerColor",w="_applyIconColumnWidth",v="mouseover",u="_applyArrowColumnWidth",t="qx.ui.menu.Menu",s="Color",r="Number",q="_applyOpenInterval",o="_applySpacingX",p="_applyBlockerOpacity",n="_applyOpenedButton";
qx.Class.define(t,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
this.getApplicationRoot().add(this);
this.addListener(v,this._onMouseOver);
this.addListener(h,this._onMouseOut);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
var ba=qx.core.Init.getApplication().getRoot();
this._blocker=new qx.ui.core.Blocker(ba);
},properties:{appearance:{refine:true,init:f},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:g},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:m,apply:o,init:0,themeable:true},spacingY:{check:m,apply:c,init:0,themeable:true},iconColumnWidth:{check:m,init:0,themeable:true,apply:w},arrowColumnWidth:{check:m,init:0,themeable:true,apply:u},blockerColor:{check:s,init:null,nullable:true,apply:x,themeable:true},blockerOpacity:{check:r,init:1,apply:p,themeable:true},selectedButton:{check:l,nullable:true,apply:d},openedButton:{check:l,nullable:true,apply:n},opener:{check:l,nullable:true},openInterval:{check:m,themeable:true,init:250,apply:q},closeInterval:{check:m,themeable:true,init:250,apply:y},blockBackground:{check:i,themeable:true,init:false}},members:{__kx:null,_blocker:null,show:function(){arguments.callee.base.call(this);

if(this.getBlockBackground()){var K=this.getZIndex();
this._blocker.blockContent(K-1);
}},hide:function(){arguments.callee.base.call(this);

if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}},exclude:function(){arguments.callee.base.call(this);

if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}},open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.show();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getLayout().getColumnSizes();
},_applyIconColumnWidth:function(R,S){this._getLayout().setIconColumnWidth(R);
},_applyArrowColumnWidth:function(V,W){this._getLayout().setArrowColumnWidth(V);
},_applySpacingX:function(L,M){this._getLayout().setColumnSpacing(L);
},_applySpacingY:function(A,B){this._getLayout().setSpacing(A);
},_applyVisibility:function(G,H){arguments.callee.base.call(this,G,H);
var I=qx.ui.menu.Manager.getInstance();

if(G===j){I.add(this);
var opener=this.getOpener();

if(opener){var J=opener.getLayoutParent();

if(J&&J instanceof qx.ui.menu.Menu){J.setOpenedButton(opener);
}}}else if(H===j){I.remove(this);
var opener=this.getOpener();

if(opener){var J=opener.getLayoutParent();

if(J&&J instanceof qx.ui.menu.Menu&&J.getOpenedButton()==opener){J.resetOpenedButton();
}}this.resetOpenedButton();
this.resetSelectedButton();
}},_applySelectedButton:function(C,D){if(D){D.removeState(k);
}
if(C){C.addState(k);
}},_applyOpenedButton:function(E,F){if(F){F.getMenu().exclude();
}
if(E){E.getMenu().open();
}},_applyBlockerColor:function(X,Y){this._blocker.setColor(X);
},_applyBlockerOpacity:function(T,U){this._blocker.setOpacity(T);
},_onMouseOver:function(e){var O=qx.ui.menu.Manager.getInstance();
O.cancelClose(this);
var P=e.getTarget();

if(P.isEnabled()&&P instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(P);
var N=P.getMenu&&P.getMenu();

if(N){O.scheduleOpen(N);
this.__kx=N;
}else{var Q=this.getOpenedButton();

if(Q){O.scheduleClose(Q.getMenu());
}
if(this.__kx){O.cancelOpen(this.__kx);
this.__kx=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var a=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var b=this.getOpenedButton();
b?this.setSelectedButton(b):this.resetSelectedButton();
if(b){a.cancelClose(b.getMenu());
}if(this.__kx){a.cancelOpen(this.__kx);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this._disposeObjects(z);
}});
})();
(function(){var d="Integer",c="_applyLayoutChange",b="__ky",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:d,init:0,apply:c},spanColumn:{check:d,init:1,nullable:true,apply:c},iconColumnWidth:{check:d,init:0,themeable:true,apply:c},arrowColumnWidth:{check:d,init:0,themeable:true,apply:c}},members:{__ky:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var p,h,k;
var f=this.getSpanColumn();
var j=this.__ky=[0,0,0,0];
var n=this.getColumnSpacing();
var m=0;
var g=0;
for(var i=0,l=q.length;i<l;i++){p=q[i];

if(p.isAnonymous()){continue;
}h=p.getChildrenSizes();

for(var o=0;o<h.length;o++){if(f!=null&&o==f&&h[f+1]==0){m=Math.max(m,h[o]);
}else{j[o]=Math.max(j[o],h[o]);
}}var e=q[i].getInsets();
g=Math.max(g,e.left+e.right);
}if(f!=null&&j[f]+n+j[f+1]<m){j[f]=m-j[f+1]-n;
}if(m==0){k=n*2;
}else{k=n*3;
}if(j[0]==0){j[0]=this.getIconColumnWidth();
}if(j[3]==0){j[3]=this.getArrowColumnWidth();
}return {height:arguments.callee.base.call(this).height,width:qx.lang.Array.sum(j)+g+k};
},getColumnSizes:function(){return this.__ky||null;
}},destruct:function(){this._disposeFields(b);
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var q="icon",p="label",o="arrow",n="shortcut",m="submenu",l="String",k="qx.ui.menu.Menu",j="qx.ui.menu.AbstractButton",i="keypress",h="_applyIcon",d="mouseup",g="abstract",f="_applyLabel",c="_applyMenu";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(d,this._onMouseUp);
this.addListener(i,this._onKeyPress);
},properties:{label:{check:l,apply:f,nullable:true},menu:{check:k,apply:c,nullable:true},icon:{check:l,apply:h,themeable:true,nullable:true}},members:{_createChildControlImpl:function(z){var A;

switch(z){case q:A=new qx.ui.basic.Image;
A.setAnonymous(true);
this._add(A,{column:0});
break;
case p:A=new qx.ui.basic.Label;
A.setAnonymous(true);
this._add(A,{column:1});
break;
case n:A=new qx.ui.basic.Label;
A.setAnonymous(true);
this._add(A,{column:2});
break;
case o:A=new qx.ui.basic.Image;
A.setAnonymous(true);
this._add(A,{column:3});
break;
}return A||arguments.callee.base.call(this,z);
},_forwardStates:{selected:1},getChildrenSizes:function(){var r=0,s=0,t=0,x=0;

if(this._isChildControlVisible(q)){var y=this.getChildControl(q);
r=y.getMarginLeft()+y.getSizeHint().width+y.getMarginRight();
}
if(this._isChildControlVisible(p)){var v=this.getChildControl(p);
s=v.getMarginLeft()+v.getSizeHint().width+v.getMarginRight();
}
if(this._isChildControlVisible(n)){var u=this.getChildControl(n);
t=u.getMarginLeft()+u.getSizeHint().width+u.getMarginRight();
}
if(this._isChildControlVisible(o)){var w=this.getChildControl(o);
x=w.getMarginLeft()+w.getSizeHint().width+w.getMarginRight();
}return [r,s,t,x];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_applyIcon:function(a,b){if(a){this._showChildControl(q).setSource(a);
}else{this._excludeChildControl(q);
}},_applyLabel:function(D,E){if(D){this._showChildControl(p).setValue(D);
}else{this._excludeChildControl(p);
}},_applyMenu:function(B,C){if(C){C.resetOpener();
C.removeState(m);
}
if(B){this._showChildControl(o);
B.setOpener(this);
B.addState(m);
}else{this._excludeChildControl(o);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var w="qx.ui.menu.ButtonLayout",v="qx.debug",u="column",t="left",s="middle",r="' is not supported by the MenuButton layout!",q="The property '";
qx.Class.define(w,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(v,{"on":function(B,name,C){this.assert(name==u,q+name+r);
},"off":null}),renderLayout:function(a,b){var n=this._getLayoutChildren();
var m;
var d;
var e=[];

for(var i=0,l=n.length;i<l;i++){m=n[i];
d=m.getLayoutProperties().column;
e[d]=m;
}var k=n[0].getLayoutParent().getLayoutParent();
var o=k.getColumnSizes();
var g=k.getSpacingX();
var f=qx.lang.Array.sum(o)+g*(o.length-1);

if(f<a){o[1]+=a-f;
}var p=0,top=0;
var h=qx.ui.layout.Util;

for(var i=0,l=o.length;i<l;i++){m=e[i];

if(m){var c=m.getSizeHint();
var top=h.computeVerticalAlignOffset(m.getAlignY()||s,c.height,b,0,0);
var j=h.computeHorizontalAlignOffset(m.getAlignX()||t,c.width,o[i],m.getMarginLeft(),m.getMarginRight());
m.renderLayout(p+j,top,c.width,c.height);
}p+=o[i]+g;
}},_computeSizeHint:function(){var z=this._getLayoutChildren();
var y=0;
var A=0;

for(var i=0,l=z.length;i<l;i++){var x=z[i].getSizeHint();
A+=x.width;
y=Math.max(y,x.height);
}return {width:A,height:y};
}}});
})();
(function(){var j="changeLocale",i="qx.dynlocale",h="on",g="shortcut",f="menu-button",d="qx.ui.menu.Button",c="changeCommand";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,construct:function(l,m,n,o){arguments.callee.base.call(this);
this.addListener(c,this._onChangeCommand,this);
if(l!=null){this.setLabel(l);
}
if(m!=null){this.setIcon(m);
}
if(n!=null){this.setCommand(n);
}
if(o!=null){this.setMenu(o);
}},properties:{appearance:{refine:true,init:f}},members:{_onChangeCommand:function(e){var b=e.getData();

if(qx.core.Variant.isSet(i,h)){var a=e.getOldData();

if(!a){qx.locale.Manager.getInstance().addListener(j,this._onChangeLocale,this);
}
if(!b){qx.locale.Manager.getInstance().removeListener(j,this._onChangeLocale,this);
}}this.getChildControl(g).setValue(b.toString());
},_onChangeLocale:qx.core.Variant.select(i,{"on":function(e){var k=this.getCommand();

if(k!=null){this.getChildControl(g).setValue(k.toString());
}},"off":null}),_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){e.stopPropagation();
}}},_onKeyPress:function(e){this.execute();
}},destruct:function(){if(qx.core.Variant.isSet(i,h)){qx.locale.Manager.getInstance().removeListener(j,this._onChangeLocale,this);
}}});
})();
(function(){var i="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(i,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(m,n){return this.getChildrenContainer().add(m,n);
},remove:function(d){return this.getChildrenContainer().remove(d);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(o){return this.getChildrenContainer().indexOf(o);
},addAt:function(f,g,h){this.getChildrenContainer().addAt(f,g,h);
},addBefore:function(j,k,l){this.getChildrenContainer().addBefore(j,k,l);
},addAfter:function(a,b,c){this.getChildrenContainer().addAfter(a,b,c);
},removeAt:function(e){this.getChildrenContainer().removeAt(e);
}}});
})();
(function(){var r="container",q="handle",p="both",o="Integer",n="middle",m="qx.ui.toolbar.Part",k="icon",j="label",h="changeShow",g="_applySpacing",f="toolbar/part";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(q);
},properties:{appearance:{refine:true,init:f},show:{init:p,check:[p,j,k],inheritable:true,event:h},spacing:{nullable:true,check:o,themeable:true,apply:g}},members:{_createChildControlImpl:function(a){var b;

switch(a){case q:b=new qx.ui.basic.Image();
b.setAlignY(n);
this._add(b);
break;
case r:b=new qx.ui.toolbar.PartContainer;
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},getChildrenContainer:function(){return this.getChildControl(r);
},_applySpacing:function(s,t){var u=this.getChildControl(r).getLayout();
s==null?u.resetSpacing():u.setSpacing(s);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var d=this.getChildren();
var c=[];
var e;

for(var i=0,l=d.length;i<l;i++){e=d[i];

if(e instanceof qx.ui.menubar.Button){c.push(e);
}}return c;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var c="qx.ui.form.IRadioItem",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeValue":b},members:{setValue:function(d){},getValue:function(){},setGroup:function(a){this.assertInstance(a,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var s="Please use the value property instead.",r="changeChecked",q="checked",p="qx.ui.form.RadioGroup",o="menu-radiobutton",n="_applyValue",m="qx.ui.menu.RadioButton",l="Please use boolean values instead.",k="changeValue",j="Please use the changeValue event instead.",g="_applyGroup",i="function(value) {return qx.lang.Type.isString(value) || qx.lang.Type.isBoolean(value)}",h="qx.event.type.Data";
qx.Class.define(m,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MFormElement],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm],construct:function(d,f){arguments.callee.base.call(this);
if(d!=null){this.setLabel(d);
}
if(f!=null){this.setMenu(f);
}},events:{"changeChecked":h},properties:{appearance:{refine:true,init:o},value:{check:i,nullable:true,event:k,apply:n,init:false},group:{check:p,nullable:true,apply:g}},members:{_applyValue:function(t,u){if(qx.lang.Type.isString(t)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return;
}t?this.addState(q):this.removeState(q);
this.fireDataEvent(r,t,u);
},_applyGroup:function(a,b){if(b){b.remove(this);
}
if(a){a.add(this);
}},_onMouseUp:function(e){if(e.isLeftPressed()){this.setValue(true);
}},_onKeyPress:function(e){this.setValue(true);
},setChecked:function(c){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
this.setValue(c);
},isChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return this.getValue();
},toggleChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
this.setValue(!this.getValue());
},getChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return this.getValue();
},resetChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
this.resetValue();
},addListener:function(v,w,self,x){if(v==r){qx.log.Logger.deprecatedEventWarning(arguments.callee,r,j);
}return arguments.callee.base.call(this,v,w,self,x);
},toggleValue:function(){this.setValue(!this.getValue());
},isValue:function(){return this.getValue();
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var g="on",f="qx.debug",e="qx.ui.form.MModelSelection",d="Please use an array as parameter.";
qx.Mixin.define(e,{members:{getModelSelection:function(){var c=this.getSelection();
var a=[];

for(var i=0;i<c.length;i++){var b=c[i].getModel();

if(b!=null){a.push(b);
}}return a;
},setModelSelection:function(h){if(!h){this.resetSelection();
return;
}
if(qx.core.Variant.isSet(f,g)){this.assertArray(h,d);
}var k=this.getSelectables();
var l=[];

for(var i=0;i<h.length;i++){var m=h[i];

for(var j=0;j<k.length;j++){var n=k[j];

if(m===n.getModel()){l.push(n);
break;
}}}this.setSelection(l);
}}});
})();
(function(){var J="Boolean",I="changeValue",H="changeSelected",G="qx.event.type.Data",F="Use 'setSelection' instead!",E="Use 'changeSelection' instead!",D="changeValid",C="changeRequired",B="changeEnabled",A="Please use getModelSelection instead.",W="Please use setModelSelection instead.",V="qx.ui.form.RadioGroup",U="_applyValid",T="changeInvalidMessage",S="changeSelection",R="_applyEnabled",Q="String",P="_applyAllowEmptySelection",O="",N="Use 'resetSelection' instead!",L="Use 'getSelection' instead!",M="__kz",K="_applyInvalidMessage";
qx.Class.define(V,{extend:qx.core.Object,implement:[qx.ui.form.IFormElement,qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MFormElement,qx.ui.form.MModelSelection],construct:function(X){arguments.callee.base.call(this);
this.__kz=[];
this.addListener(S,this.__kB,this);

if(X!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:J,apply:R,event:B},wrap:{check:J,init:true},allowEmptySelection:{check:J,init:false,apply:P},valid:{check:J,init:true,apply:U,event:D},required:{check:J,init:false,event:C},invalidMessage:{check:Q,init:O,event:T,apply:K}},events:{"changeValue":G,"changeSelected":G},members:{__kz:null,getItems:function(){return this.__kz;
},select:function(d){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
this.setSelection([d]);
},setValue:function(bg){qx.log.Logger.deprecatedMethodWarning(arguments.callee,W);
var bh=this.__kz;
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];

if(bi.getValue()==bg){this.setSelection([bi]);
break;
}}},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
var h=this.getSelection()[0];
return h?h.getValue():null;
},add:function(bk){var bl=this.__kz;
var bm;

for(var i=0,l=arguments.length;i<l;i++){bm=arguments[i];

if(qx.lang.Array.contains(bl,bm)){continue;
}bm.addListener(I,this._onItemChangeChecked,this);
bl.push(bm);
bm.setGroup(this);
if(bm.getValue()){this.setSelection([bm]);
}}if(!this.isAllowEmptySelection()&&bl.length>0&&!this.getSelection()[0]){this.setSelection([bl[0]]);
}},remove:function(bb){var bc=this.__kz;

if(qx.lang.Array.contains(bc,bb)){qx.lang.Array.remove(bc,bb);
if(bb.getGroup()===this){bb.resetGroup();
}bb.removeListener(I,this._onItemChangeChecked,this);
if(bb.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__kz;
},_onItemChangeChecked:function(e){var o=e.getTarget();

if(o.getValue()){this.setSelection([o]);
}else if(this.getSelection()[0]==o){this.resetSelection();
}},setSelected:function(bj){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
this.setSelection([bj]);
},getSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,L);
var a=this.getSelection()[0];

if(a){return a;
}else{return null;
}},resetSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,N);
this.resetSelection();
},_applyInvalidMessage:function(Y,ba){for(var i=0;i<this.__kz.length;i++){this.__kz[i].setInvalidMessage(Y);
}},_applyValid:function(f,g){for(var i=0;i<this.__kz.length;i++){this.__kz[i].setValid(f);
}},_applyEnabled:function(bd,be){var bf=this.__kz;

if(bd==null){for(var i=0,l=bf.length;i<l;i++){bf[i].resetEnabled();
}}else{for(var i=0,l=bf.length;i<l;i++){bf[i].setEnabled(bd);
}}},_applyAllowEmptySelection:function(b,c){if(!b&&this.isSelectionEmpty()){this.resetSelection();
}},__kA:function(v){var w=null;

if(v){w=v.getValue();

if(w==null){w=v.getLabel();
}}return w;
},selectNext:function(){var x=this.getSelection()[0];
var z=this.__kz;
var y=z.indexOf(x);

if(y==-1){return;
}var i=0;
var length=z.length;
if(this.getWrap()){y=(y+1)%length;
}else{y=Math.min(y+1,length-1);
}
while(i<length&&!z[y].getEnabled()){y=(y+1)%length;
i++;
}this.setSelection([z[y]]);
},selectPrevious:function(){var s=this.getSelection()[0];
var u=this.__kz;
var t=u.indexOf(s);

if(t==-1){return;
}var i=0;
var length=u.length;
if(this.getWrap()){t=(t-1+length)%length;
}else{t=Math.max(t-1,0);
}
while(i<length&&!u[t].getEnabled()){t=(t-1+length)%length;
i++;
}this.setSelection([u[t]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__kB:function(e){var m=e.getData()[0];
var j=e.getOldData()[0];

if(j){j.setValue(false);
}
if(m){m.setValue(true);
}var k=this.__kA(j);
var n=this.__kA(m);
this.fireDataEvent(I,n,k);
if(this.hasListener(H)){this.fireDataEvent(H,m,j);
}},addListener:function(p,q,self,r){if(p===H){qx.log.Logger.deprecatedEventWarning(arguments.callee,H,E);
}
if(p===I){qx.log.Logger.deprecatedEventWarning(arguments.callee,I,E);
}return arguments.callee.base.call(this,p,q,self,r);
}},destruct:function(){this._disposeArray(M);
}});
})();
(function(){var g="arrow",f="qx.ui.toolbar.MenuButton",e="Boolean",d="_applyShowArrow",c="toolbar-menubutton";
qx.Class.define(f,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:c},showArrow:{check:e,init:false,themeable:true,apply:d}},members:{_createChildControlImpl:function(h){var i;

switch(h){case g:i=new qx.ui.basic.Image();
i.setAnonymous(true);
this._addAt(i,10);
break;
}return i||arguments.callee.base.call(this,h);
},_applyShowArrow:function(a,b){if(a){this._showChildControl(g);
}else{this._excludeChildControl(g);
}}}});
})();
(function(){var n="pressed",m="abandoned",l="Please use the value property instead.",k="changeChecked",j="hovered",i="Enter",h="Space",g="checked",f="mousedown",d="Please use the changeValue event instead.",z="mouseout",y="changeValue",x="keydown",w="button",v="qx.event.type.Data",u="_applyValue",t="qx.ui.form.ToggleButton",s="function(value) {return qx.lang.Type.isString(value) || qx.lang.Type.isBoolean(value)}",r="mouseover",q="keyup",o="mouseup",p="Please use boolean values instead.";
qx.Class.define(t,{extend:qx.ui.basic.Atom,include:[qx.ui.form.MFormElement,qx.ui.core.MExecutable],implement:[qx.ui.form.IFormElement,qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(A,B){arguments.callee.base.call(this,A,B);
this.addListener(r,this._onMouseOver);
this.addListener(z,this._onMouseOut);
this.addListener(f,this._onMouseDown);
this.addListener(o,this._onMouseUp);
this.addListener(x,this._onKeyDown);
this.addListener(q,this._onKeyUp);
},events:{"changeChecked":v},properties:{appearance:{refine:true,init:w},focusable:{refine:true,init:true},value:{check:s,nullable:true,event:y,apply:u,init:false}},members:{_applyValue:function(D,E){if(qx.lang.Type.isString(D)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return;
}D?this.addState(g):this.removeState(g);
this.fireDataEvent(k,D,E);
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(j);

if(this.hasState(m)){this.removeState(m);
this.addState(n);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(j);

if(this.hasState(n)){if(!this.getValue()){this.removeState(n);
}this.addState(m);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(m);
this.addState(n);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(m)){this.removeState(m);
}else if(this.hasState(n)){this.setValue(!this.getValue());
}this.removeState(n);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(n)){return;
}
switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.setValue(!this.getValue());
this.removeState(n);
e.stopPropagation();
}},setChecked:function(C){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setValue(C);
},isChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return this.getValue();
},toggleChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setValue(!this.getValue());
},getChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return this.getValue();
},resetChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.resetValue();
},addListener:function(a,b,self,c){if(a==k){qx.log.Logger.deprecatedEventWarning(arguments.callee,k,d);
}return arguments.callee.base.call(this,a,b,self,c);
},toggleValue:function(){this.setValue(!this.getValue());
},isValue:function(){return this.getValue();
}}});
})();
(function(){var e="inherit",d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){arguments.callee.base.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var c="qx.ui.form.RadioGroup",b="_applyGroup",a="qx.ui.toolbar.RadioButton";
qx.Class.define(a,{extend:qx.ui.toolbar.CheckBox,implement:qx.ui.form.IRadioItem,properties:{group:{check:c,apply:b,nullable:true}},members:{_applyValue:function(f,g){arguments.callee.base.call(this,f,g);

if(f){var h=this.getGroup();

if(h){h.setSelection([this]);
}}},_applyGroup:function(d,e){if(e){e.remove(this);
}
if(d){d.add(this);
}}}});
})();
(function(){var g="String",f="qx.ui.embed.AbstractIframe",e="name",d="",c="_applySource",b="qx.event.type.Event",a="_applyFrameName";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(l){arguments.callee.base.call(this);

if(l){this.setSource(l);
}},events:{"load":b},properties:{source:{check:g,apply:c,nullable:true},frameName:{check:g,init:d,apply:a}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(j,k){this._getIframeElement().setSource(j);
},_applyFrameName:function(h,i){this._getIframeElement().setAttribute(e,h);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
}}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(h,j);
},_applyOverflowY:function(k){this.getContentElement().setStyle(d,k);
}}});
})();
(function(){var s="display",r="mousedown",q="qx.client",p="contextmenu",o="load",n="help",m="mouseup",l="losecapture",k="none",j="repeat",L="Boolean",K="height",J="px",I="url(",H=")",G="div",F="__kD",E="_applyNativeHelp",D="width",C="zIndex",z="top",A="mshtml",x="block",y="qx.ui.embed.Iframe",v="position",w="iframe",t="left",u="absolute",B="qx/static/blank.gif";
qx.Class.define(y,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(R){if(R!=null){this.__kC=R;
}arguments.callee.base.call(this,R);
qx.event.Registration.addListener(document.body,r,this.block,this,true);
qx.event.Registration.addListener(document.body,m,this.release,this,true);
qx.event.Registration.addListener(document.body,l,this.release,this,true);
this.__kD=this._createBlockerElement();
this.getContainerElement().add(this.__kD);
},properties:{appearance:{refine:true,init:w},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:L,init:false,apply:E}},members:{__kC:null,__kD:null,renderLayout:function(d,top,f,g){arguments.callee.base.call(this,d,top,f,g);
var i=J;
var h=this.getInsets();
this.__kD.setStyle(t,h.left+i);
this.__kD.setStyle(z,h.top+i);
this.__kD.setStyle(D,(f-h.left-h.right)+i);
this.__kD.setStyle(K,(g-h.top-h.bottom)+i);
},_createContentElement:function(){var M=new qx.html.Iframe(this.__kC);
M.addListener(o,this._onIframeLoad,this);
return M;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var a=new qx.html.Element(G);
a.setStyle(C,20);
a.setStyle(v,u);
a.setStyle(s,k);
if(qx.core.Variant.isSet(q,A)){a.setStyles({backgroundImage:I+qx.util.ResourceManager.getInstance().toUri(B)+H,backgroundRepeat:j});
}return a;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(o);
},block:function(){this.__kD.setStyle(s,x);
},release:function(){this.__kD.setStyle(s,k);
},_applyNativeContextMenu:function(N,O){if(N!==false&&O!==false){return;
}var P=this.getDocument();

if(!P){return;
}
try{var Q=P.documentElement;
}catch(e){return ;
}
if(O===false){qx.event.Registration.removeListener(Q,p,this._onNativeContextMenu,this,true);
}
if(N===false){qx.event.Registration.addListener(Q,p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(q,{"mshtml":function(b,c){var document=this.getDocument();

if(!document){return;
}
try{if(c===false){qx.bom.Event.removeNativeListener(document,n,qx.lang.Function.returnFalse);
}
if(b===false){qx.bom.Event.addNativeListener(document,n,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}})},destruct:function(){this._disposeObjects(F);
qx.event.Registration.removeListener(document.body,r,this.block,this,true);
qx.event.Registration.removeListener(document.body,m,this.release,this,true);
qx.event.Registration.removeListener(document.body,l,this.release,this,true);
}});
})();
(function(){var i="source",h="name",g="qx.html.Iframe",f="qx.event.type.Event",e="iframe";
qx.Class.define(g,{extend:qx.html.Element,construct:function(k){arguments.callee.base.call(this,e);
this._setProperty(i,k);
},events:{"load":f},members:{_applyProperty:function(name,a){arguments.callee.base.call(this,name,a);

if(name==i){var b=this.getDomElement();
qx.bom.Iframe.setSource(b,a);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var m=this.getDomElement();

if(m){return qx.bom.Iframe.getWindow(m);
}else{return null;
}},getDocument:function(){var j=this.getDomElement();

if(j){return qx.bom.Iframe.getDocument(j);
}else{return null;
}},getBody:function(){var l=this.getDomElement();

if(l){return qx.bom.Iframe.getBody(l);
}else{return null;
}},setSource:function(n){this._setProperty(i,n);
return this;
},getSource:function(){return this._getProperty(i);
},setName:function(name){this.setAttribute(h,name);
return this;
},getName:function(){return this.getAttribute(h);
},reload:function(){var d=this.getDomElement();

if(d){var c=this.getSource();
this.setSource(null);
this.setSource(c);
}}}});
})();
(function(){var g="qx.event.handler.Iframe",f="load",e="iframe";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(a){qx.event.Registration.fireEvent(a,f);
})},members:{canHandleEvent:function(k,l){return k.tagName.toLowerCase()===e;
},registerEvent:function(h,i,j){},unregisterEvent:function(b,c,d){}},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var l="0",k="qx.client",j="qx.bom.Iframe",i="webkit",h="qx.event.handler.Iframe.onevent(this)",g="true",f="iframe",e="body";
qx.Class.define(j,{statics:{create:function(A,B){var A=A?qx.lang.Object.clone(A):{};
A.onload=h;
A.frameBorder=l;
A.frameSpacing=l;
A.marginWidth=l;
A.marginHeight=l;
A.hspace=l;
A.vspace=l;
A.border=l;
A.allowTransparency=g;
return qx.bom.Element.create(f,A,B);
},getWindow:qx.core.Variant.select(k,{"mshtml|gecko":function(s){try{return s.contentWindow;
}catch(b){return null;
}},"default":function(o){try{var p=this.getDocument(o);
return p?p.defaultView:null;
}catch(d){return null;
}}}),getDocument:qx.core.Variant.select(k,{"mshtml":function(C){try{var D=this.getWindow(C);
return D?D.document:null;
}catch(u){return null;
}},"default":function(E){try{return E.contentDocument;
}catch(c){return null;
}}}),getBody:function(y){try{var z=this.getDocument(y);
return z?z.getElementsByTagName(e)[0]:null;
}catch(n){return null;
}},setSource:function(v,w){try{if(this.getWindow(v)&&qx.dom.Hierarchy.isRendered(v)){try{if(qx.core.Variant.isSet(k,i)&&qx.bom.client.Platform.MAC){var x=this.getContentWindow();

if(x){x.stop();
}}this.getWindow(v).location.replace(w);
}catch(t){v.src=w;
}}else{v.src=w;
}}catch(a){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(q){var r=this.getDocument(q);

try{if(r&&r.location){return r.location.href;
}}catch(m){}return null;
}}});
})();
(function(){var k="Number",j="_applyInsets",i="abstract",h="insetRight",g="insetTop",f="qx.debug",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="on",a="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:i,properties:{insetLeft:{check:k,nullable:true,apply:j},insetRight:{check:k,nullable:true,apply:j},insetBottom:{check:k,nullable:true,apply:j},insetTop:{check:k,nullable:true,apply:j},insets:{group:[g,h,e,a],mode:c}},members:{__kE:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__kE=null;
},getInsets:function(){if(this.__kE){return this.__kE;
}var l=this._getDefaultInsets();
return this.__kE={left:this.getInsetLeft()==null?l.left:this.getInsetLeft(),right:this.getInsetRight()==null?l.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?l.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?l.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(f,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__kE=null;
}}});
})();
(function(){var l="_applyBackground",k="repeat",j="backgroundPositionX",i="backgroundPositionY",h="qx.debug",g="no-repeat",f="scale",e="repeat-x",d="repeat-y",c="on",a="qx.ui.decoration.MBackgroundImage",b="String";
qx.Mixin.define(a,{properties:{backgroundImage:{check:b,nullable:true,apply:l},backgroundRepeat:{check:[k,e,d,g,f],init:k,apply:l},backgroundPositionX:{nullable:true,apply:l},backgroundPositionY:{nullable:true,apply:l},backgroundPosition:{group:[i,j]}},members:{_generateBackgroundMarkup:function(m){var n=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),this.getBackgroundPositionX(),this.getBackgroundPositionY(),m);
return n;
},_applyBackground:function(){if(qx.core.Variant.isSet(h,c)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var n="px",m="position:absolute;top:0;left:0",l="qx.ui.decoration.Background",k="",j="qx.debug",i="__kF",h="__insets",g="_applyStyle",f="on",e="Color";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this.setBackgroundColor(a);
}},properties:{backgroundColor:{check:e,nullable:true,apply:g}},members:{__kF:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__kF;
},getMarkup:function(){if(this.__kF){return this.__kF;
}var r=this._generateBackgroundMarkup(m);
return this.__kF=r;
},resize:function(b,c,d){b.style.width=c+n;
b.style.height=d+n;
},tint:function(o,p){var q=qx.theme.manager.Color.getInstance();

if(p==null){p=this.getBackgroundColor();
}o.style.backgroundColor=q.resolve(p)||k;
},_applyStyle:function(){if(qx.core.Variant.isSet(j,f)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this._disposeFields(i,h);
}});
})();
(function(){var t="none",s="text",r="",q="userSelect",p="color",o="String",n="padding",m="0px",l="webkit",k="changeHtml",f="_applyCssClass",j="class",i="qx.ui.embed.Html",e="_applyHtml",d="qx.client",h="border",g="html";
qx.Class.define(i,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(B){arguments.callee.base.call(this);

if(B!=null){this.setHtml(B);
}},properties:{html:{check:o,apply:e,event:k,nullable:true},cssClass:{check:o,init:r,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(a,b){var c=this.getContentElement();
c.setAttribute(g,a||r);
c.setStyle(n,m);
c.setStyle(h,t);
},_applyCssClass:function(x,y){this.getContentElement().setAttribute(j,x);
},_applySelectable:function(C){arguments.callee.base.call(this,C);
if(qx.core.Variant.isSet(d,l)){this.getContainerElement().setStyle(q,C?s:t);
this.getContentElement().setStyle(q,C?s:t);
}},_applyFont:function(u,v){var w=u?qx.theme.manager.Font.getInstance().resolve(u).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(w);
},_applyTextColor:function(z,A){if(z){this.getContentElement().setStyle(p,qx.theme.manager.Color.getInstance().resolve(z));
}else{this.getContentElement().removeStyle(p);
}}}});
})();
(function(){var t="",s='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',r='.qxappender .type-instance{color:#565656;font-weight:bold}',q="qx.log.appender.Element",p='.qxappender .level-info{background:#DEEDFA}',o='.qxappender .type-stringify{color:#565656;font-weight:bold}',n='.qxappender .type-number{color:#155791;font-weight:normal;}',m="qxappender",l='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',k="__kG",e='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',j='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',h='.qxappender .level-error{background:#FFE2D5}',d='.qxappender .level-debug{background:white}',c='.qxappender .type-key{color:#565656;font-style:italic}',g='.qxappender .level-user{background:#E3EFE9}',f='.qxappender .level-warn{background:#FFF7D5}',i='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(q,{extend:qx.core.Object,construct:function(u){arguments.callee.base.call(this);
var v=[d,p,f,h,g,i,n,j,s,l,c,e,r,o];
qx.bom.Stylesheet.createElement(v.join(t));
qx.log.Logger.register(this);
},members:{__kG:null,setElement:function(w){this.clear();
if(w){qx.bom.element.Class.add(w,m);
}this.__kG=w;
},clear:function(){var x=this.__kG;
if(x){x.innerHTML=t;
}},process:function(a){var b=this.__kG;

if(!b){return;
}b.appendChild(qx.log.appender.Util.toHtml(a));
b.scrollTop=b.scrollHeight;
}},destruct:function(){this._disposeFields(k);
}});
})();
(function(){var m="(\\s|$)",l="(^|\\s)",k="",j="qx.bom.element.Class",i=" ",h="$2";
qx.Class.define(j,{statics:{add:function(c,name){if(!this.has(c,name)){c.className+=(c.className?i:k)+name;
}return name;
},get:function(d){return d.className;
},has:function(p,name){var q=new RegExp(l+name+m);
return q.test(p.className);
},remove:function(n,name){var o=new RegExp(l+name+m);
n.className=n.className.replace(o,h);
return name;
},replace:function(e,f,g){this.remove(e,f);
return this.add(e,g);
},toggle:function(a,name,b){if(b==null){b=!this.has(a,name);
}b?this.add(a,name):this.remove(a,name);
return name;
}}});
})();
(function(){var L="scrollbar-y",K="scrollbar-x",J="pane",I="auto",H="corner",G="on",F="changeVisibility",E="scroll",D="_computeScrollbars",C="off",v="scrollY",B="abstract",y="update",t="scrollX",s="mousewheel",x="scrollbarY",w="scrollbarX",z="horizontal",r="scrollarea",A="qx.ui.core.AbstractScrollArea",u="vertical";
qx.Class.define(A,{extend:qx.ui.core.Widget,type:B,construct:function(){arguments.callee.base.call(this);
var M=new qx.ui.layout.Grid();
M.setColumnFlex(0,1);
M.setRowFlex(0,1);
this._setLayout(M);
this.addListener(s,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:r},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[I,G,C],init:I,themeable:true,apply:D},scrollbarY:{check:[I,G,C],init:I,themeable:true,apply:D},scrollbar:{group:[w,x]}},members:{_createChildControlImpl:function(N){var O;

switch(N){case J:O=new qx.ui.core.ScrollPane();
O.addListener(y,this._computeScrollbars,this);
O.addListener(t,this._onScrollPaneX,this);
O.addListener(v,this._onScrollPaneY,this);
this._add(O,{row:0,column:0});
break;
case K:O=new qx.ui.core.ScrollBar(z);
O.setMinWidth(0);
O.exclude();
O.addListener(E,this._onScrollBarX,this);
O.addListener(F,this._onChangeScrollbarXVisibility,this);
this._add(O,{row:1,column:0});
break;
case L:O=new qx.ui.core.ScrollBar(u);
O.setMinHeight(0);
O.exclude();
O.addListener(E,this._onScrollBarY,this);
O.addListener(F,this._onChangeScrollbarYVisibility,this);
this._add(O,{row:0,column:1});
break;
case H:O=new qx.ui.core.Widget();
O.setWidth(0);
O.setHeight(0);
O.exclude();
this._add(O,{row:1,column:1});
break;
}return O||arguments.callee.base.call(this,N);
},getPaneSize:function(){return this.getChildControl(J).getInnerSize();
},getItemTop:function(U){return this.getChildControl(J).getItemTop(U);
},getItemBottom:function(o){return this.getChildControl(J).getItemBottom(o);
},getItemLeft:function(Q){return this.getChildControl(J).getItemLeft(Q);
},getItemRight:function(V){return this.getChildControl(J).getItemRight(V);
},scrollToX:function(W){qx.ui.core.queue.Manager.flush();
this.getChildControl(K).scrollTo(W);
},scrollByX:function(ba){qx.ui.core.queue.Manager.flush();
this.getChildControl(K).scrollBy(ba);
},getScrollX:function(){var p=this.getChildControl(K,true);
return p?p.getPosition():0;
},scrollToY:function(P){qx.ui.core.queue.Manager.flush();
this.getChildControl(L).scrollTo(P);
},scrollByY:function(q){qx.ui.core.queue.Manager.flush();
this.getChildControl(L).scrollBy(q);
},getScrollY:function(){var bb=this.getChildControl(L,true);
return bb?bb.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(J).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(J).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var S=this._isChildControlVisible(K);
var T=this._isChildControlVisible(L);
var R=(T)?this.getChildControl(L,true):(S?this.getChildControl(K,true):null);

if(R){R.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var X=this._isChildControlVisible(K);
var Y=this._isChildControlVisible(L);

if(!X){this.scrollToX(0);
}X&&Y?this._showChildControl(H):this._excludeChildControl(H);
},_onChangeScrollbarYVisibility:function(e){var a=this._isChildControlVisible(K);
var b=this._isChildControlVisible(L);

if(!b){this.scrollToY(0);
}a&&b?this._showChildControl(H):this._excludeChildControl(H);
},_computeScrollbars:function(){var j=this.getChildControl(J);
var content=j.getChildren()[0];

if(!content){this._excludeChildControl(K);
this._excludeChildControl(L);
return;
}var c=this.getInnerSize();
var i=j.getInnerSize();
var g=j.getScrollSize();
if(!i||!g){return;
}var l=this.getScrollbarX();
var m=this.getScrollbarY();

if(l===I&&m===I){var h=g.width>c.width;
var n=g.height>c.height;
if((h||n)&&!(h&&n)){if(h){n=g.height>i.height;
}else if(n){h=g.width>i.width;
}}}else{var h=l===G;
var n=m===G;
if(g.width>(h?i.width:c.width)&&l===I){h=true;
}
if(g.height>(h?i.height:c.height)&&m===I){n=true;
}}if(h){var f=this.getChildControl(K);
f.show();
var k=Math.max(0,g.width-i.width-1);
f.setMaximum(k);
f.setKnobFactor(k>0?i.width/g.width:0);
}else{this._excludeChildControl(K);
}
if(n){var d=this.getChildControl(L);
d.show();
var k=Math.max(0,g.height-i.height-1);
d.setMaximum(k);
d.setKnobFactor(k>0?i.height/g.height:0);
}else{this._excludeChildControl(L);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var l="Use 'setSelection' instead!",k="Boolean",j="changeSelection",h="single",g="Use 'getSelection' instead!",f="mousedown",d="one",c="qx.event.type.Data",b="__kH",a="_applyDragSelection",y="mousemove",x="addItem",w="multi",v="_applyQuickSelection",u="mouseover",t="keypress",s="_applySelectionMode",r="additive",q="mouseup",p="Use 'resetSelection' instead!",n="losecapture",o="removeItem",m="qx.ui.core.MMultiSelectionHandling";
qx.Mixin.define(m,{construct:function(){var A=this.SELECTION_MANAGER;
var z=this.__kH=new A(this);
this.addListener(f,z.handleMouseDown,z);
this.addListener(q,z.handleMouseUp,z);
this.addListener(u,z.handleMouseOver,z);
this.addListener(y,z.handleMouseMove,z);
this.addListener(n,z.handleLoseCapture,z);
this.addListener(t,z.handleKeyPress,z);
this.addListener(x,z.handleAddItem,z);
this.addListener(o,z.handleRemoveItem,z);
z.addListener(j,this._onSelectionChange,this);
},events:{"changeSelection":c},properties:{selectionMode:{check:[h,w,r,d],init:h,apply:s},dragSelection:{check:k,init:false,apply:a},quickSelection:{check:k,init:false,apply:v}},members:{__kH:null,selectAll:function(){this.__kH.selectAll();
},select:function(L){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setSelection([L]);
},setSelected:function(F){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setSelection([F]);
},isSelected:function(E){if(!qx.ui.core.Widget.contains(this,E)){throw new Error("Could not test if "+E+" is selected, because it is not a child element!");
}return this.__kH.isItemSelected(E);
},addToSelection:function(J){if(!qx.ui.core.Widget.contains(this,J)){throw new Error("Could not add + "+J+" to selection, because it is not a child element!");
}this.__kH.addItem(J);
},removeFromSelection:function(K){if(!qx.ui.core.Widget.contains(this,K)){throw new Error("Could not remove "+K+" from selection, because it is not a child element!");
}this.__kH.removeItem(K);
},selectRange:function(P,Q){this.__kH.selectItemRange(P,Q);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
this.resetSelection();
},resetSelection:function(){this.__kH.clearSelection();
},replaceSelection:function(O){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setSelection(O);
},setSelection:function(D){for(var i=0;i<D.length;i++){if(!qx.ui.core.Widget.contains(this,D[i])){throw new Error("Could not select "+D[i]+", because it is not a child element!");
}}
if(D.length===0){this.resetSelection();
}else{this.__kH.replaceSelection(D);
}},getSelectedItem:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
var I=this.getSelection();

if(I.length>0){return I[0];
}else{return null;
}},getSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
var R=this.getSelection();

if(R.length>0){return R[0];
}else{return null;
}},getSelection:function(){return this.__kH.getSelection();
},getSortedSelection:function(){return this.__kH.getSortedSelection();
},isSelectionEmpty:function(){return this.__kH.isSelectionEmpty();
},getSelectionContext:function(){return this.__kH.getSelectionContext();
},_getManager:function(){return this.__kH;
},getSelectables:function(){return this.__kH.getSelectables();
},invertSelection:function(){this.__kH.invertSelection();
},_applySelectionMode:function(G,H){this.__kH.setMode(G);
},_applyDragSelection:function(B,C){this.__kH.setDrag(B);
},_applyQuickSelection:function(M,N){this.__kH.setQuick(M);
},_onSelectionChange:function(e){this.fireDataEvent(j,e.getData());
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__kI:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__kJ:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__kJ[name];
s[t]();
}else{var u=this.__kI[name];
s[u](q);
}}}});
})();
(function(){var by="one",bx="single",bw="selected",bv="additive",bu="multi",bt="PageUp",bs="under",br="Left",bq="lead",bp="Down",cb="Up",ca="Boolean",bY="PageDown",bX="anchor",bW="End",bV="Home",bU="Right",bT="right",bS="click",bR="above",bF="left",bG="Escape",bD="A",bE="Space",bB="_applyMode",bC="interval",bz="changeSelection",bA="__ld",bH="qx.event.type.Data",bI="quick",bL="key",bK="__le",bN="__kN",bM="abstract",bP="__kK",bO="drag",bJ="qx.ui.core.selection.Abstract",bQ="__lc";
qx.Class.define(bJ,{type:bM,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kK={};
},events:{"changeSelection":bH},properties:{mode:{check:[bx,bu,bv,by],init:bx,apply:bB},drag:{check:ca,init:false},quick:{check:ca,init:false}},members:{__kL:0,__kM:0,__kN:null,__kO:null,__kP:null,__kQ:null,__kR:null,__kS:null,__kT:null,__kU:null,__kV:null,__kW:null,__kX:null,__kY:null,__la:null,__lb:null,__lc:null,__kK:null,__ld:null,__le:null,getSelectionContext:function(){return this.__lb;
},selectAll:function(){var cx=this.getMode();

if(cx==bx||cx==by){throw new Error("Can not select all items in selection mode: "+cx);
}this._selectAllItems();
this._fireChange();
},selectItem:function(T){this._setSelectedItem(T);
var U=this.getMode();

if(U!==bx&&U!==by){this._setLeadItem(T);
this._setAnchorItem(T);
}this._scrollItemIntoView(T);
this._fireChange();
},addItem:function(r){var s=this.getMode();

if(s===bx||s===by){this._setSelectedItem(r);
}else{if(!this._getAnchorItem()){this._setAnchorItem(r);
}this._setLeadItem(r);
this._addToSelection(r);
}this._scrollItemIntoView(r);
this._fireChange();
},removeItem:function(N){this._removeFromSelection(N);

if(this.getMode()===by&&this.isSelectionEmpty()){var O=this._getFirstSelectable();

if(O){this.addItem(O);
}if(O==N){return;
}}
if(this._getLeadItem()==N){this._setLeadItem(null);
}
if(this._getAnchorItem()==N){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(B,C){var D=this.getMode();

if(D==bx||D==by){throw new Error("Can not select multiple items in selection mode: "+D);
}this._selectItemRange(B,C);
this._setAnchorItem(B);
this._setLeadItem(C);
this._scrollItemIntoView(C);
this._fireChange();
},clearSelection:function(){if(this.getMode()==by){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cX){var cY=this.getMode();

if(cY==by||cY===bx){if(cX.length>1){throw new Error("Could not select more than one items in mode: "+cY+"!");
}
if(cX.length==1){this.selectItem(cX[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cX);
}},getSelectedItem:function(){var t=this.getMode();

if(t===bx||t===by){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__kK);
},getSortedSelection:function(){var m=this.getSelectables();
var k=qx.lang.Object.getValues(this.__kK);
k.sort(function(a,b){return m.indexOf(a)-m.indexOf(b);
});
return k;
},isItemSelected:function(p){var q=this._selectableToHashCode(p);
return this.__kK[q]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__kK);
},invertSelection:function(){var J=this.getMode();

if(J===bx||J===by){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var I=this.getSelectables();

for(var i=0;i<I.length;i++){this._toggleInSelection(I[i]);
}this._fireChange();
},_setLeadItem:function(V){var W=this.__lc;

if(W!==null){this._styleSelectable(W,bq,false);
}
if(V!==null){this._styleSelectable(V,bq,true);
}this.__lc=V;
},_getLeadItem:function(){return this.__lc!==null?this.__lc:null;
},_setAnchorItem:function(cU){var cV=this.__ld;

if(cV){this._styleSelectable(cV,bX,false);
}
if(cU){this._styleSelectable(cU,bX,true);
}this.__ld=cU;
},_getAnchorItem:function(){return this.__ld!==null?this.__ld:null;
},_isSelectable:function(g){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bh=event.getTarget();
return this._isSelectable(bh)?bh:null;
},_selectableToHashCode:function(ba){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(K,L,M){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(cy){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bm){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(cn,co){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bb){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(n,o){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(h,j){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(da,db){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(c,d){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(c===by){var f=this._getFirstSelectable();

if(f){this._setSelectedItem(f);
this._scrollItemIntoView(f);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var cA=this.getMode();

if(cA!==by&&cA!==bx){return;
}var cz=this._getSelectableFromMouseEvent(event);

if(cz===null){return;
}this._setSelectedItem(cz);
this._fireChange(bI);
},handleMouseDown:function(event){var cQ=this._getSelectableFromMouseEvent(event);

if(cQ===null){return;
}var cS=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cP=event.isShiftPressed();
if(this.isItemSelected(cQ)&&!cP&&!cS&&!this.getDrag()){this.__le=cQ;
return;
}else{this.__le=null;
}this._scrollItemIntoView(cQ);
switch(this.getMode()){case bx:case by:this._setSelectedItem(cQ);
break;
case bv:this._setLeadItem(cQ);
this._setAnchorItem(cQ);
this._toggleInSelection(cQ);
break;
case bu:this._setLeadItem(cQ);
if(cP){var cR=this._getAnchorItem();

if(cR===null){cR=this._getFirstSelectable();
this._setAnchorItem(cR);
}this._selectItemRange(cR,cQ,cS);
}else if(cS){this._setAnchorItem(cQ);
this._toggleInSelection(cQ);
}else{this._setAnchorItem(cQ);
this._setSelectedItem(cQ);
}break;
}var cT=this.getMode();

if(this.getDrag()&&cT!==bx&&cT!==by&&!cP&&!cS){this.__kR=this._getLocation();
this.__kO=this._getScroll();
this.__kS=event.getDocumentLeft()+this.__kO.left;
this.__kT=event.getDocumentTop()+this.__kO.top;
this.__kU=true;
this._capture();
}this._fireChange(bS);
},handleMouseUp:function(event){var H=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var E=event.isShiftPressed();

if(!H&&!E&&this.__le){var F=this._getSelectableFromMouseEvent(event);

if(F===null||!this.isItemSelected(F)){return;
}var G=this.getMode();

if(G===bv){this._removeFromSelection(F);
}else{this._setSelectedItem(F);

if(this.getMode()===bu){this._setLeadItem(F);
this._setAnchorItem(F);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__kU){return;
}this.__kV=event.getDocumentLeft();
this.__kW=event.getDocumentTop();
var Y=this.__kV+this.__kO.left;

if(Y>this.__kS){this.__kX=1;
}else if(Y<this.__kS){this.__kX=-1;
}else{this.__kX=0;
}var X=this.__kW+this.__kO.top;

if(X>this.__kT){this.__kY=1;
}else if(X<this.__kT){this.__kY=-1;
}else{this.__kY=0;
}var location=this.__kR;

if(this.__kV<location.left){this.__kL=this.__kV-location.left;
}else if(this.__kV>location.right){this.__kL=this.__kV-location.right;
}else{this.__kL=0;
}
if(this.__kW<location.top){this.__kM=this.__kW-location.top;
}else if(this.__kW>location.bottom){this.__kM=this.__kW-location.bottom;
}else{this.__kM=0;
}if(!this.__kN){this.__kN=new qx.event.Timer(100);
this.__kN.addListener(bC,this._onInterval,this);
}this.__kN.start();
this._autoSelect();
},handleAddItem:function(e){var cW=e.getData();

if(this.getMode()===by&&this.isSelectionEmpty()){this.addItem(cW);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__kU){return;
}if(this.__la){this._fireChange(bS);
}delete this.__kU;
delete this.__kP;
delete this.__kQ;
this._releaseCapture();
if(this.__kN){this.__kN.stop();
}},_onInterval:function(e){this._scrollBy(this.__kL,this.__kM);
this.__kO=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cL=this._getDimension();
var cE=Math.max(0,Math.min(this.__kV-this.__kR.left,cL.width))+this.__kO.left;
var cD=Math.max(0,Math.min(this.__kW-this.__kR.top,cL.height))+this.__kO.top;
if(this.__kP===cE&&this.__kQ===cD){return;
}this.__kP=cE;
this.__kQ=cD;
var cN=this._getAnchorItem();
var cG=cN;
var cJ=this.__kX;
var cM,cF;

while(cJ!==0){cM=cJ>0?this._getRelatedSelectable(cG,bT):this._getRelatedSelectable(cG,bF);
if(cM!==null){cF=this._getSelectableLocationX(cM);
if((cJ>0&&cF.left<=cE)||(cJ<0&&cF.right>=cE)){cG=cM;
continue;
}}break;
}var cK=this.__kY;
var cI,cH;

while(cK!==0){cI=cK>0?this._getRelatedSelectable(cG,bs):this._getRelatedSelectable(cG,bR);
if(cI!==null){cH=this._getSelectableLocationY(cI);
if((cK>0&&cH.top<=cD)||(cK<0&&cH.bottom>=cD)){cG=cI;
continue;
}}break;
}var cO=this.getMode();

if(cO===bu){this._selectItemRange(cN,cG);
}else if(cO===bv){if(this.isItemSelected(cN)){this._selectItemRange(cN,cG,true);
}else{this._deselectItemRange(cN,cG);
}this._setAnchorItem(cG);
}this._fireChange(bO);
},__lf:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var cj,ci;
var cl=event.getKeyIdentifier();
var ck=this.getMode();
var cf=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cg=event.isShiftPressed();
var ch=false;

if(cl===bD&&cf){if(ck!==bx&&ck!==by){this._selectAllItems();
ch=true;
}}else if(cl===bG){if(ck!==bx&&ck!==by){this._clearSelection();
ch=true;
}}else if(cl===bE){var ce=this._getLeadItem();

if(ce&&!cg){if(cf||ck===bv){this._toggleInSelection(ce);
}else{this._setSelectedItem(ce);
}ch=true;
}}else if(this.__lf[cl]){ch=true;

if(ck===bx||ck==by){cj=this._getSelectedItem();
}else{cj=this._getLeadItem();
}
if(cj!==null){switch(cl){case bV:ci=this._getFirstSelectable();
break;
case bW:ci=this._getLastSelectable();
break;
case cb:ci=this._getRelatedSelectable(cj,bR);
break;
case bp:ci=this._getRelatedSelectable(cj,bs);
break;
case br:ci=this._getRelatedSelectable(cj,bF);
break;
case bU:ci=this._getRelatedSelectable(cj,bT);
break;
case bt:ci=this._getPage(cj,true);
break;
case bY:ci=this._getPage(cj,false);
break;
}}else{switch(cl){case bV:case bp:case bU:case bY:ci=this._getFirstSelectable();
break;
case bW:case cb:case br:case bt:ci=this._getLastSelectable();
break;
}}if(ci!==null){switch(ck){case bx:case by:this._setSelectedItem(ci);
break;
case bv:this._setLeadItem(ci);
break;
case bu:if(cg){var cm=this._getAnchorItem();

if(cm===null){this._setAnchorItem(cm=this._getFirstSelectable());
}this._setLeadItem(ci);
this._selectItemRange(cm,ci,cf);
}else{this._setAnchorItem(ci);
this._setLeadItem(ci);

if(!cf){this._setSelectedItem(ci);
}}break;
}this._scrollItemIntoView(ci);
}}
if(ch){event.stop();
this._fireChange(bL);
}},_selectAllItems:function(){var cp=this.getSelectables();

for(var i=0,l=cp.length;i<l;i++){this._addToSelection(cp[i]);
}},_clearSelection:function(){var bn=this.__kK;

for(var bo in bn){this._removeFromSelection(bn[bo]);
}this.__kK={};
},_selectItemRange:function(u,v,w){var z=this._getSelectableRange(u,v);
if(!w){var y=this.__kK;
var A=this.__lg(z);

for(var x in y){if(!A[x]){this._removeFromSelection(y[x]);
}}}for(var i=0,l=z.length;i<l;i++){this._addToSelection(z[i]);
}},_deselectItemRange:function(bj,bk){var bl=this._getSelectableRange(bj,bk);

for(var i=0,l=bl.length;i<l;i++){this._removeFromSelection(bl[i]);
}},__lg:function(Q){var S={};
var R;

for(var i=0,l=Q.length;i<l;i++){R=Q[i];
S[this._selectableToHashCode(R)]=R;
}return S;
},_getSelectedItem:function(){for(var P in this.__kK){return this.__kK[P];
}return null;
},_setSelectedItem:function(be){if(this._isSelectable(be)){var bf=this.__kK;
var bg=this._selectableToHashCode(be);

if(!bf[bg]||qx.lang.Object.hasMinLength(bf,2)){this._clearSelection();
this._addToSelection(be);
}}},_addToSelection:function(bc){var bd=this._selectableToHashCode(bc);

if(!this.__kK[bd]&&this._isSelectable(bc)){this.__kK[bd]=bc;
this._styleSelectable(bc,bw,true);
this.__la=true;
}},_toggleInSelection:function(cc){var cd=this._selectableToHashCode(cc);

if(!this.__kK[cd]){this.__kK[cd]=cc;
this._styleSelectable(cc,bw,true);
}else{delete this.__kK[cd];
this._styleSelectable(cc,bw,false);
}this.__la=true;
},_removeFromSelection:function(cB){var cC=this._selectableToHashCode(cB);

if(this.__kK[cC]!=null){delete this.__kK[cC];
this._styleSelectable(cB,bw,false);
this.__la=true;
}},_replaceMultiSelection:function(cq){var ct=false;
var cw,cv;
var cr={};

for(var i=0,l=cq.length;i<l;i++){cw=cq[i];

if(this._isSelectable(cw)){cv=this._selectableToHashCode(cw);
cr[cv]=cw;
}}var cs=cw;
var cu=this.__kK;

for(var cv in cu){if(cr[cv]){delete cr[cv];
}else{cw=cu[cv];
delete cu[cv];
this._styleSelectable(cw,bw,false);
ct=true;
}}for(var cv in cr){cw=cu[cv]=cr[cv];
this._styleSelectable(cw,bw,true);
ct=true;
}if(!ct){return false;
}this._scrollItemIntoView(cs);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__la=true;
this._fireChange();
},_fireChange:function(bi){if(this.__la){this.__lb=bi||null;
this.fireDataEvent(bz,this.getSelection());
delete this.__la;
}}},destruct:function(){this._disposeObjects(bN);
this._disposeFields(bP,bK,bA,bQ);
}});
})();
(function(){var g="vertical",f="under",e="__lh",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(B){arguments.callee.base.call(this);
this.__lh=B;
},members:{__lh:null,_isSelectable:function(C){return C.isEnabled()&&C.isVisible()&&C.getLayoutParent()===this.__lh;
},_selectableToHashCode:function(D){return D.$$hash;
},_styleSelectable:function(o,p,q){q?o.addState(p):o.removeState(p);
},_capture:function(){this.__lh.capture();
},_releaseCapture:function(){this.__lh.releaseCapture();
},_getWidget:function(){return this.__lh;
},_getLocation:function(){var P=this.__lh.getContentElement().getDomElement();
return P?qx.bom.element.Location.get(P):null;
},_getDimension:function(){return this.__lh.getInnerSize();
},_getSelectableLocationX:function(m){var n=m.getBounds();

if(n){return {left:n.left,right:n.left+n.width};
}},_getSelectableLocationY:function(E){var F=E.getBounds();

if(F){return {top:F.top,bottom:F.top+F.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(M,N){},_scrollItemIntoView:function(A){this.__lh.scrollChildIntoView(A);
},getSelectables:function(){var y=this.__lh.getChildren();
var z=[];
var x;

for(var i=0,l=y.length;i<l;i++){x=y[i];

if(x.isEnabled()&&x.isVisible()){z.push(x);
}}return z;
},_getSelectableRange:function(G,H){if(G===H){return [G];
}var L=this.__lh.getChildren();
var I=[];
var K=false;
var J;

for(var i=0,l=L.length;i<l;i++){J=L[i];

if(J===G||J===H){if(K){I.push(J);
break;
}else{K=true;
}}
if(K&&J.isEnabled()&&J.isVisible()){I.push(J);
}}return I;
},_getFirstSelectable:function(){var k=this.__lh.getChildren();

for(var i=0,l=k.length;i<l;i++){if(k[i].isEnabled()&&k[i].isVisible()){return k[i];
}}return null;
},_getLastSelectable:function(){var O=this.__lh.getChildren();

for(var i=O.length-1;i>0;i--){if(O[i].isEnabled()&&O[i].isVisible()){return O[i];
}}return null;
},_getRelatedSelectable:function(r,s){var v=this.__lh.getOrientation()===g;
var u=this.__lh.getChildren();
var t=u.indexOf(r);
var w;

if((v&&s===d)||(!v&&s===b)){for(var i=t-1;i>=0;i--){w=u[i];

if(w.isEnabled()&&w.isVisible()){return w;
}}}else if((v&&s===f)||(!v&&s===a)){for(var i=t+1;i<u.length;i++){w=u[i];

if(w.isEnabled()&&w.isVisible()){return w;
}}}return null;
},_getPage:function(h,j){if(j){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this._disposeFields(e);
}});
})();
(function(){var d="qx.ui.core.selection.ScrollArea";
qx.Class.define(d,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return (s.isEnabled()&&s.isVisible()&&s.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var r=this._getWidget();
return {left:r.getScrollX(),top:r.getScrollY()};
},_scrollBy:function(a,b){var c=this._getWidget();
c.scrollByX(a);
c.scrollByY(b);
},_getPage:function(e,f){var k=this.getSelectables();
var length=k.length;
var n=k.indexOf(e);
if(n===-1){throw new Error("Invalid lead item: "+e);
}var g=this._getWidget();
var p=g.getScrollY();
var innerHeight=g.getInnerSize().height;
var top,j,o;

if(f){var m=p;
var i=n;
while(1){for(;i>=0;i--){top=g.getItemTop(k[i]);
if(top<m){o=i+1;
break;
}}if(o==null){var q=this._getFirstSelectable();
return q==e?null:q;
}if(o>=n){m-=innerHeight+p-g.getItemBottom(e);
o=null;
continue;
}return k[o];
}}else{var l=innerHeight+p;
var i=n;
while(1){for(;i<length;i++){j=g.getItemBottom(k[i]);
if(j>l){o=i-1;
break;
}}if(o==null){var h=this._getLastSelectable();
return h==e?null:h;
}if(o<=n){l+=g.getItemTop(e)-p;
o=null;
continue;
}return k[o];
}}}}});
})();
(function(){var k="right",j="above",h="left",g="under",f="qx.ui.tree.SelectionManager";
qx.Class.define(f,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(p){var q=p.getBounds();

if(q){var top=this._getWidget().getItemTop(p);
return {top:top,bottom:top+q.height};
}},_isSelectable:function(o){return o instanceof qx.ui.tree.AbstractTreeItem&&o.isEnabled()&&o.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var m=this._getWidget();
var n=[];

if(m.getRoot()!=null){var l=m.getRoot().getItems(true,false,m.getHideRoot());

for(var i=0;i<l.length;i++){if(this._isSelectable(l[i])){n.push(l[i]);
}}}return n;
},_getSelectableRange:function(a,b){if(a===b){return [a];
}var c=this.getSelectables();
var d=c.indexOf(a);
var e=c.indexOf(b);

if(d<0||e<0){return [];
}
if(d<e){return c.slice(d,e+1);
}else{return c.slice(e,d+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var r=this.getSelectables();

if(r.length>0){return r[r.length-1];
}else{return null;
}},_getRelatedSelectable:function(s,t){var u=this._getWidget();
var v=null;

switch(t){case j:v=u.getPreviousSiblingOf(s,false);
break;
case g:v=u.getNextSiblingOf(s,false);
break;
case h:if(s.isOpenable()&&s.isOpen()){s.setOpen(false);
}break;
case k:if(s.isOpenable()&&!s.isOpen()){s.setOpen(true);
}break;
}
if(!v){return null;
}
if(this._isSelectable(v)){return v;
}else{return this._getRelatedSelectable(v,t);
}}}});
})();
(function(){var A="dblclick",z="click",y="visible",x="Boolean",w="excluded",v="qx.event.type.Data",u="_applyHideRoot",t="none",s="_applyRootOpenClose",r="_applyOpenMode",l="__li",q="changeRoot",o="changeOpenMode",k="pane",j="_applyRoot",n="qx.ui.tree.Tree",m="qx.ui.tree.AbstractTreeItem",p="tree";
qx.Class.define(n,{extend:qx.ui.core.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__li=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(k).add(this.__li);
this.initOpenMode();
this.initRootOpenClose();
},events:{addItem:v,removeItem:v},properties:{openMode:{check:[z,A,t],init:A,apply:r,event:o,themeable:true},root:{check:m,init:null,nullable:true,event:q,apply:j},hideRoot:{check:x,init:false,apply:u},rootOpenClose:{check:x,init:false,apply:s},appearance:{refine:true,init:p},focusable:{refine:true,init:true}},members:{__li:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__li;
},_applyRoot:function(F,G){var H=this.getChildrenContainer();

if(G){H.remove(G);

if(G.hasChildren()){H.remove(G.getChildrenContainer());
}}
if(F){H.add(F);

if(F.hasChildren()){H.add(F.getChildrenContainer());
}F.setVisibility(this.getHideRoot()?w:y);
F.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(I,J){var K=this.getRoot();

if(!K){return;
}K.setVisibility(I?w:y);
K.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(c,d){var f=this.getRoot();

if(!f){return;
}f.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__li;
},getNextSiblingOf:function(B,C){if((C!==false||B.isOpen())&&B.hasChildren()){return B.getChildren()[0];
}
while(B){var parent=B.getParent();

if(!parent){return null;
}var E=parent.getChildren();
var D=E.indexOf(B);

if(D>-1&&D<E.length-1){return E[D+1];
}B=parent;
}return null;
},getPreviousSiblingOf:function(N,O){var parent=N.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==N){return null;
}}}else{if(N==this.getRoot()){return null;
}}var R=parent.getChildren();
var P=R.indexOf(N);

if(P>0){var Q=R[P-1];

while((O!==false||Q.isOpen())&&Q.hasChildren()){var S=Q.getChildren();
Q=S[S.length-1];
}return Q;
}else{return parent;
}},getItems:function(L,M){if(this.getRoot()!=null){return this.getRoot().getItems(L,M,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},scrollChildIntoViewY:function(g,h,i){if(!this.getNextSiblingOf(g,false)){this.scrollToY(1000000);
}else{arguments.callee.base.call(this,g,h,i);
}},getTreeItem:function(a){while(a){if(a==this){return null;
}
if(a instanceof qx.ui.tree.AbstractTreeItem){return a;
}a=a.getLayoutParent();
}return null;
},_applyOpenMode:function(T,U){if(U==z){this.removeListener(z,this._onOpen,this);
}else if(U==A){this.removeListener(A,this._onOpen,this);
}
if(T==z){this.addListener(z,this._onOpen,this);
}else if(T==A){this.addListener(A,this._onOpen,this);
}},_onOpen:function(e){var b=this.getTreeItem(e.getTarget());

if(!b||!b.isOpenable()){return;
}b.setOpen(!b.isOpen());
e.stopPropagation();
}},destruct:function(){this._disposeObjects(l);
}});
})();
(function(){var df="top",de="left",dd="qx.debug",dc="bottom",db="hAlign",da="vAlign",cY="Integer",cX="_applyLayoutChange",cW="center",cV="middle",dC="right",dB="flex",dA="on",dz="height",dy="__lj",dx="__ll",dw="' is not supported by the Grid layout!",dv="Invalid parameter 'column'",du="The property '",dt="__ln",dm="__lq",dn="Value must be positive",dk="qx.ui.layout.Grid",dl="maxHeight",di="__lr",dj="width",dg="__lm",dh="__lk",dp="minHeight",dq="minWidth",ds="maxWidth",dr="Invalid parameter 'row'";
qx.Class.define(dk,{extend:qx.ui.layout.Abstract,construct:function(bL,bM){arguments.callee.base.call(this);
this.__lj=[];
this.__lk=[];

if(bL){this.setSpacingX(bL);
}
if(bM){this.setSpacingY(bM);
}},properties:{spacingX:{check:cY,init:0,apply:cX},spacingY:{check:cY,init:0,apply:cX}},members:{__ll:null,__lj:null,__lk:null,__lm:null,__ln:null,__lo:null,__lp:null,__lq:null,__lr:null,verifyLayoutProperty:qx.core.Variant.select(dd,{"on":function(dH,name,dI){var dJ={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(dJ[name]==1,du+name+dw);
this.assertInteger(dI);
this.assert(dI>=0,dn);
},"off":null}),__ls:function(){var cC=[];
var cB=[];
var cD=[];
var cz=0;
var cy=0;
var cF=this._getLayoutChildren();

for(var i=0,l=cF.length;i<l;i++){var cA=cF[i];
var cE=cA.getLayoutProperties();
var cG=cE.row;
var cx=cE.column;
cE.colSpan=cE.colSpan||1;
cE.rowSpan=cE.rowSpan||1;
if(cG==null||cx==null){throw new Error("The layout properties 'row' and 'column' must be defined!");
}
if(cC[cG]&&cC[cG][cx]){throw new Error("There is already a widget in this cell ("+cG+", "+cx+")");
}
for(var x=cx;x<cx+cE.colSpan;x++){for(var y=cG;y<cG+cE.rowSpan;y++){if(cC[y]==undefined){cC[y]=[];
}cC[y][x]=cA;
cy=Math.max(cy,x);
cz=Math.max(cz,y);
}}
if(cE.rowSpan>1){cD.push(cA);
}
if(cE.colSpan>1){cB.push(cA);
}}for(var y=0;y<=cz;y++){if(cC[y]==undefined){cC[y]=[];
}}this.__ll=cC;
this.__lm=cB;
this.__ln=cD;
this.__lo=cz;
this.__lp=cy;
this.__lq=null;
this.__lr=null;
delete this._invalidChildrenCache;
},_setRowData:function(cH,cI,cJ){var cK=this.__lj[cH];

if(!cK){this.__lj[cH]={};
this.__lj[cH][cI]=cJ;
}else{cK[cI]=cJ;
}},_setColumnData:function(bh,bi,bj){var bk=this.__lk[bh];

if(!bk){this.__lk[bh]={};
this.__lk[bh][bi]=bj;
}else{bk[bi]=bj;
}},setSpacing:function(eg){this.setSpacingY(eg);
this.setSpacingX(eg);
},setColumnAlign:function(a,b,c){if(qx.core.Variant.isSet(dd,dA)){this.assertInteger(a,dv);
this.assertInArray(b,[de,cW,dC]);
this.assertInArray(c,[df,cV,dc]);
}this._setColumnData(a,db,b);
this._setColumnData(a,da,c);
this._applyLayoutChange();
return this;
},getColumnAlign:function(A){var B=this.__lk[A]||{};
return {vAlign:B.vAlign||df,hAlign:B.hAlign||de};
},setRowAlign:function(cS,cT,cU){if(qx.core.Variant.isSet(dd,dA)){this.assertInteger(cS,dr);
this.assertInArray(cT,[de,cW,dC]);
this.assertInArray(cU,[df,cV,dc]);
}this._setRowData(cS,db,cT);
this._setRowData(cS,da,cU);
this._applyLayoutChange();
return this;
},getRowAlign:function(cN){var cO=this.__lj[cN]||{};
return {vAlign:cO.vAlign||df,hAlign:cO.hAlign||de};
},getCellWidget:function(w,z){if(this._invalidChildrenCache){this.__ls();
}var w=this.__ll[w]||{};
return w[z]||null;
},getCellAlign:function(bz,bA){var bG=df;
var bE=de;
var bF=this.__lj[bz];
var bC=this.__lk[bA];
var bB=this.__ll[bz][bA];

if(bB){var bD={vAlign:bB.getAlignY(),hAlign:bB.getAlignX()};
}else{bD={};
}if(bD.vAlign){bG=bD.vAlign;
}else if(bF&&bF.vAlign){bG=bF.vAlign;
}else if(bC&&bC.vAlign){bG=bC.vAlign;
}if(bD.hAlign){bE=bD.hAlign;
}else if(bC&&bC.hAlign){bE=bC.hAlign;
}else if(bF&&bF.hAlign){bE=bF.hAlign;
}return {vAlign:bG,hAlign:bE};
},setColumnFlex:function(eu,ev){this._setColumnData(eu,dB,ev);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bf){var bg=this.__lk[bf]||{};
return bg.flex!==undefined?bg.flex:0;
},setRowFlex:function(bJ,bK){this._setRowData(bJ,dB,bK);
this._applyLayoutChange();
return this;
},getRowFlex:function(cP){var cQ=this.__lj[cP]||{};
var cR=cQ.flex!==undefined?cQ.flex:0;
return cR;
},setColumnMaxWidth:function(bd,be){this._setColumnData(bd,ds,be);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bH){var bI=this.__lk[bH]||{};
return bI.maxWidth!==undefined?bI.maxWidth:Infinity;
},setColumnWidth:function(dD,dE){this._setColumnData(dD,dj,dE);
this._applyLayoutChange();
return this;
},getColumnWidth:function(dF){var dG=this.__lk[dF]||{};
return dG.width!==undefined?dG.width:null;
},setColumnMinWidth:function(bN,bO){this._setColumnData(bN,dq,bO);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(f){var g=this.__lk[f]||{};
return g.minWidth||0;
},setRowMaxHeight:function(P,Q){this._setRowData(P,dl,Q);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(eh){var ei=this.__lj[eh]||{};
return ei.maxHeight||Infinity;
},setRowHeight:function(cL,cM){this._setRowData(cL,dz,cM);
this._applyLayoutChange();
return this;
},getRowHeight:function(d){var e=this.__lj[d]||{};
return e.height!==undefined?e.height:null;
},setRowMinHeight:function(cv,cw){this._setRowData(cv,dp,cw);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(C){var D=this.__lj[C]||{};
return D.minHeight||0;
},__lt:function(r){var v=r.getSizeHint();
var u=r.getMarginLeft()+r.getMarginRight();
var t=r.getMarginTop()+r.getMarginBottom();
var s={height:v.height+t,width:v.width+u,minHeight:v.minHeight+t,minWidth:v.minWidth+u,maxHeight:v.maxHeight+t,maxWidth:v.maxWidth+u};
return s;
},_fixHeightsRowSpan:function(bl){var bw=this.getSpacingY();

for(var i=0,l=this.__ln.length;i<l;i++){var bo=this.__ln[i];
var bq=this.__lt(bo);
var br=bo.getLayoutProperties();
var bn=br.row;
var bu=bw*(br.rowSpan-1);
var bm=bu;
var bt={};

for(var j=0;j<br.rowSpan;j++){var by=br.row+j;
var bp=bl[by];
var bx=this.getRowFlex(by);

if(bx>0){bt[by]={min:bp.minHeight,value:bp.height,max:bp.maxHeight,flex:bx};
}bu+=bp.height;
bm+=bp.minHeight;
}if(bu<bq.height){var bv=qx.ui.layout.Util.computeFlexOffsets(bt,bq.height,bu);

for(var j=0;j<br.rowSpan;j++){var bs=bv[bn+j]?bv[bn+j].offset:0;
bl[bn+j].height+=bs;
}}if(bm<bq.minHeight){var bv=qx.ui.layout.Util.computeFlexOffsets(bt,bq.minHeight,bm);

for(var j=0;j<br.rowSpan;j++){var bs=bv[bn+j]?bv[bn+j].offset:0;
bl[bn+j].minHeight+=bs;
}}}},_fixWidthsColSpan:function(dR){var dV=this.getSpacingX();

for(var i=0,l=this.__lm.length;i<l;i++){var dS=this.__lm[i];
var dU=this.__lt(dS);
var dX=dS.getLayoutProperties();
var dT=dX.column;
var ee=dV*(dX.colSpan-1);
var dW=ee;
var dY={};
var eb;

for(var j=0;j<dX.colSpan;j++){var ef=dX.column+j;
var ed=dR[ef];
var ec=this.getColumnFlex(ef);
if(ec>0){dY[ef]={min:ed.minWidth,value:ed.width,max:ed.maxWidth,flex:ec};
}ee+=ed.width;
dW+=ed.minWidth;
}if(ee<dU.width){var ea=qx.ui.layout.Util.computeFlexOffsets(dY,dU.width,ee);

for(var j=0;j<dX.colSpan;j++){eb=ea[dT+j]?ea[dT+j].offset:0;
dR[dT+j].width+=eb;
}}if(dW<dU.minWidth){var ea=qx.ui.layout.Util.computeFlexOffsets(dY,dU.minWidth,dW);

for(var j=0;j<dX.colSpan;j++){eb=ea[dT+j]?ea[dT+j].offset:0;
dR[dT+j].minWidth+=eb;
}}}},_getRowHeights:function(){if(this.__lq!=null){return this.__lq;
}var bb=[];
var T=this.__lo;
var S=this.__lp;

for(var bc=0;bc<=T;bc++){var U=0;
var W=0;
var V=0;

for(var ba=0;ba<=S;ba++){var R=this.__ll[bc][ba];

if(!R){continue;
}var X=R.getLayoutProperties().rowSpan||0;

if(X>1){continue;
}var Y=this.__lt(R);

if(this.getRowFlex(bc)>0){U=Math.max(U,Y.minHeight);
}else{U=Math.max(U,Y.height);
}W=Math.max(W,Y.height);
}var U=Math.max(U,this.getRowMinHeight(bc));
var V=this.getRowMaxHeight(bc);

if(this.getRowHeight(bc)!==null){var W=this.getRowHeight(bc);
}else{var W=Math.max(U,Math.min(W,V));
}bb[bc]={minHeight:U,height:W,maxHeight:V};
}
if(this.__ln.length>0){this._fixHeightsRowSpan(bb);
}this.__lq=bb;
return bb;
},_getColWidths:function(){if(this.__lr!=null){return this.__lr;
}var en=[];
var ek=this.__lp;
var em=this.__lo;

for(var es=0;es<=ek;es++){var eq=0;
var ep=0;
var el=Infinity;

for(var et=0;et<=em;et++){var ej=this.__ll[et][es];

if(!ej){continue;
}var eo=ej.getLayoutProperties().colSpan||0;

if(eo>1){continue;
}var er=this.__lt(ej);

if(this.getColumnFlex(es)>0){ep=Math.max(ep,er.minWidth);
}else{ep=Math.max(ep,er.width);
}eq=Math.max(eq,er.width);
}var ep=Math.max(ep,this.getColumnMinWidth(es));
var el=this.getColumnMaxWidth(es);

if(this.getColumnWidth(es)!==null){var eq=this.getColumnWidth(es);
}else{var eq=Math.max(ep,Math.min(eq,el));
}en[es]={minWidth:ep,width:eq,maxWidth:el};
}
if(this.__lm.length>0){this._fixWidthsColSpan(en);
}this.__lr=en;
return en;
},_getColumnFlexOffsets:function(dK){var dL=this.getSizeHint();
var dP=dK-dL.width;

if(dP==0){return {};
}var dN=this._getColWidths();
var dM={};

for(var i=0,l=dN.length;i<l;i++){var dQ=dN[i];
var dO=this.getColumnFlex(i);

if((dO<=0)||(dQ.width==dQ.maxWidth&&dP>0)||(dQ.width==dQ.minWidth&&dP<0)){continue;
}dM[i]={min:dQ.minWidth,value:dQ.width,max:dQ.maxWidth,flex:dO};
}return qx.ui.layout.Util.computeFlexOffsets(dM,dK,dL.width);
},_getRowFlexOffsets:function(h){var k=this.getSizeHint();
var o=h-k.height;

if(o==0){return {};
}var p=this._getRowHeights();
var m={};

for(var i=0,l=p.length;i<l;i++){var q=p[i];
var n=this.getRowFlex(i);

if((n<=0)||(q.height==q.maxHeight&&o>0)||(q.height==q.minHeight&&o<0)){continue;
}m[i]={min:q.minHeight,value:q.height,max:q.maxHeight,flex:n};
}return qx.ui.layout.Util.computeFlexOffsets(m,h,k.height);
},renderLayout:function(bP,bQ){if(this._invalidChildrenCache){this.__ls();
}var cf=qx.ui.layout.Util;
var bS=this.getSpacingX();
var bY=this.getSpacingY();
var ck=this._getColWidths();
var cj=this._getColumnFlexOffsets(bP);
var bT=[];
var cm=this.__lp;
var bR=this.__lo;
var cl;

for(var cn=0;cn<=cm;cn++){cl=cj[cn]?cj[cn].offset:0;
bT[cn]=ck[cn].width+cl;
}var cc=this._getRowHeights();
var ce=this._getRowFlexOffsets(bQ);
var ct=[];

for(var ca=0;ca<=bR;ca++){cl=ce[ca]?ce[ca].offset:0;
ct[ca]=cc[ca].height+cl;
}var cu=0;

for(var cn=0;cn<=cm;cn++){var top=0;

for(var ca=0;ca<=bR;ca++){var ch=this.__ll[ca][cn];
if(!ch){top+=ct[ca]+bY;
continue;
}var bU=ch.getLayoutProperties();
if(bU.row!==ca||bU.column!==cn){top+=ct[ca]+bY;
continue;
}var cs=bS*(bU.colSpan-1);

for(var i=0;i<bU.colSpan;i++){cs+=bT[cn+i];
}var ci=bY*(bU.rowSpan-1);

for(var i=0;i<bU.rowSpan;i++){ci+=ct[ca+i];
}var bV=ch.getSizeHint();
var cq=ch.getMarginTop();
var cg=ch.getMarginLeft();
var cd=ch.getMarginBottom();
var bX=ch.getMarginRight();
var cb=Math.max(bV.minWidth,Math.min(cs-cg-bX,bV.maxWidth));
var cr=Math.max(bV.minHeight,Math.min(ci-cq-cd,bV.maxHeight));
var co=this.getCellAlign(ca,cn);
var cp=cu+cf.computeHorizontalAlignOffset(co.hAlign,cb,cs,cg,bX);
var bW=top+cf.computeVerticalAlignOffset(co.vAlign,cr,ci,cq,cd);
ch.renderLayout(cp,bW,cb,cr);
top+=ct[ca]+bY;
}cu+=bT[cn]+bS;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__lr=null;
this.__lq=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ls();
}var I=this._getColWidths();
var K=0,L=0;

for(var i=0,l=I.length;i<l;i++){var M=I[i];

if(this.getColumnFlex(i)>0){K+=M.minWidth;
}else{K+=M.width;
}L+=M.width;
}var N=this._getRowHeights();
var G=0,J=0;

for(var i=0,l=N.length;i<l;i++){var O=N[i];

if(this.getRowFlex(i)>0){G+=O.minHeight;
}else{G+=O.height;
}J+=O.height;
}var F=this.getSpacingX()*(I.length-1);
var E=this.getSpacingY()*(N.length-1);
var H={minWidth:K+F,width:L+F,minHeight:G+E,height:J+E};
return H;
}},destruct:function(){this._disposeFields(dx,dy,dh,dg,dt,di,dm);
}});
})();
(function(){var L="resize",K="scrollY",J="Please use getChildren instead.",I="update",H="scrollX",G="_applyScrollX",F="_applyScrollY",E="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",D="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",C="appear",z="qx.ui.core.ScrollPane",B="qx.event.type.Event",A="scroll";
qx.Class.define(z,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(L,this._onUpdate);
var d=this.getContentElement();
d.addListener(A,this._onScroll,this);
d.addListener(C,this._onAppear,this);
},events:{update:B},properties:{scrollX:{check:D,apply:G,event:H,init:0},scrollY:{check:E,apply:F,event:K,init:0}},members:{add:function(t){var u=this._getChildren()[0];

if(u){this._remove(u);
u.removeListener(L,this._onUpdate,this);
}
if(t){this._add(t);
t.addListener(L,this._onUpdate,this);
}},remove:function(s){if(s){this._remove(s);
s.removeListener(L,this._onUpdate,this);
}},getChild:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
return this._getChildren()[0]||null;
},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(I);
},_onScroll:function(e){var r=this.getContentElement();
this.setScrollX(r.getScrollX());
this.setScrollY(r.getScrollY());
},_onAppear:function(e){var n=this.getContentElement();
var k=this.getScrollX();
var l=n.getScrollX();

if(k!=l){n.scrollToX(k);
}var o=this.getScrollY();
var m=n.getScrollY();

if(o!=m){n.scrollToY(o);
}},getItemTop:function(O){var top=0;

do{top+=O.getBounds().top;
O=O.getLayoutParent();
}while(O&&O!==this);
return top;
},getItemBottom:function(v){return this.getItemTop(v)+v.getBounds().height;
},getItemLeft:function(h){var i=0;
var parent;

do{i+=h.getBounds().left;
parent=h.getLayoutParent();

if(parent){i+=parent.getInsets().left;
}h=parent;
}while(h&&h!==this);
return i;
},getItemRight:function(w){return this.getItemLeft(w)+w.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var N=this.getInnerSize();
var M=this.getScrollSize();

if(N&&M){return Math.max(0,M.width-N.width);
}return 0;
},getScrollMaxY:function(){var c=this.getInnerSize();
var b=this.getScrollSize();

if(c&&b){return Math.max(0,b.height-c.height);
}return 0;
},scrollToX:function(p){var q=this.getScrollMaxX();

if(p<0){p=0;
}else if(p>q){p=q;
}this.setScrollX(p);
},scrollToY:function(f){var g=this.getScrollMaxY();

if(f<0){f=0;
}else if(f>g){f=g;
}this.setScrollY(f);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(a){this.getContentElement().scrollToX(a);
},_applyScrollY:function(j){this.getContentElement().scrollToY(j);
}}});
})();
(function(){var o="slider",n="horizontal",m="button-begin",l="button-end",k="vertical",j="Integer",i="execute",h="right",g="left",f="down",B="up",A="PositiveNumber",z="changeValue",y="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",x="_applyKnobFactor",w="_applyOrientation",v="qx.ui.core.ScrollBar",u="_applyPageStep",t="PositiveInteger",s="scroll",q="_applyPosition",r="scrollbar",p="_applyMaximum";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(C){arguments.callee.base.call(this);
this._createChildControl(m);
this._createChildControl(o);
this._createChildControl(l);
if(C!=null){this.setOrientation(C);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:r},orientation:{check:[n,k],init:n,apply:w},maximum:{check:t,apply:p,init:100},position:{check:y,init:0,apply:q,event:s},singleStep:{check:j,init:20},pageStep:{check:j,init:10,apply:u},knobFactor:{check:A,apply:x,nullable:true}},members:{_createChildControlImpl:function(F){var G;

switch(F){case o:G=new qx.ui.core.ScrollSlider;
G.setPageStep(100);
G.setFocusable(false);
G.addListener(z,this._onChangeSliderValue,this);
this._add(G,{flex:1});
break;
case m:G=new qx.ui.form.RepeatButton;
G.setFocusable(false);
G.addListener(i,this._onExecuteBegin,this);
this._add(G);
break;
case l:G=new qx.ui.form.RepeatButton;
G.setFocusable(false);
G.addListener(i,this._onExecuteEnd,this);
this._add(G);
break;
}return G||arguments.callee.base.call(this,F);
},_applyMaximum:function(d){this.getChildControl(o).setMaximum(d);
},_applyPosition:function(D){this.getChildControl(o).setValue(D);
},_applyKnobFactor:function(a){this.getChildControl(o).setKnobFactor(a);
},_applyPageStep:function(E){this.getChildControl(o).setPageStep(E);
},_applyOrientation:function(J,K){var L=this._getLayout();

if(L){L.dispose();
}if(J===n){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(k,n);
this.getChildControl(m).replaceState(B,g);
this.getChildControl(l).replaceState(f,h);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(n,k);
this.getChildControl(m).replaceState(g,B);
this.getChildControl(l).replaceState(h,f);
}this.getChildControl(o).setOrientation(J);
},scrollTo:function(c){this.getChildControl(o).slideTo(c);
},scrollBy:function(b){this.getChildControl(o).slideBy(b);
},scrollBySteps:function(H){var I=this.getSingleStep();
this.getChildControl(o).slideBy(H*I);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(d){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(b){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(c){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var Y="knob",X="horizontal",W="vertical",V="Integer",U="px",T="mousemove",S="resize",R="left",Q="top",P="mouseup",bD="slider",bC="PageUp",bB="mousedown",bA="height",bz="changeValue",by="Left",bx="Down",bw="Up",bv="dblclick",bu="qx.ui.form.Slider",bg="PageDown",bh="mousewheel",be="interval",bf="_applyValue",bc="_applyKnobFactor",bd="End",ba="width",bb="_applyOrientation",bi="Home",bj="floor",bm="_applyMinimum",bl="click",bo="Right",bn="keypress",bq="ceil",bp="losecapture",bk="contextmenu",bt="_applyMaximum",bs="Number",br="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bu,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IFormElement,qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MFormElement,qx.ui.form.MForm],construct:function(j){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bn,this._onKeyPress);
this.addListener(bh,this._onMouseWheel);
this.addListener(bB,this._onMouseDown);
this.addListener(P,this._onMouseUp);
this.addListener(bp,this._onMouseUp);
this.addListener(S,this._onUpdate);
this.addListener(bk,this._onStopEvent);
this.addListener(bl,this._onStopEvent);
this.addListener(bv,this._onStopEvent);
if(j!=null){this.setOrientation(j);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bD},focusable:{refine:true,init:true},orientation:{check:[X,W],init:X,apply:bb},value:{check:br,init:0,apply:bf,event:bz,nullable:true},minimum:{check:V,init:0,apply:bm},maximum:{check:V,init:100,apply:bt},singleStep:{check:V,init:1},pageStep:{check:V,init:10},knobFactor:{check:bs,apply:bc,nullable:true}},members:{__lu:null,__lv:null,__lw:null,__lx:null,__ly:null,__lz:null,__lA:null,__lB:null,__lC:null,_forwardStates:{invalid:true},_createChildControlImpl:function(f){var g;

switch(f){case Y:g=new qx.ui.core.Widget();
g.addListener(S,this._onUpdate,this);
this._add(g);
break;
}return g||arguments.callee.base.call(this,f);
},_onMouseWheel:function(e){var bQ=e.getWheelDelta()>0?1:-1;
this.slideBy(bQ*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var i=this.getOrientation()===X;
var h=i?by:bw;
var forward=i?bo:bx;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case h:this.slideBack();
break;
case bg:this.slidePageForward();
break;
case bC:this.slidePageBack();
break;
case bi:this.slideToBegin();
break;
case bd:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__lx){return;
}var bM=this.__lE;
var bK=this.getChildControl(Y);
var bL=bM?R:Q;
var bO=bM?e.getDocumentLeft():e.getDocumentTop();
var bP=this.__lu=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bL];
var bN=this.__lv=qx.bom.element.Location.get(bK.getContainerElement().getDomElement())[bL];

if(e.getTarget()===bK){this.__lx=true;
this.__ly=bO+bP-bN;
}else{this.__lz=true;
this.__lA=bO<=bN?-1:1;
this.__lF(e);
this._onInterval();
if(!this.__lC){this.__lC=new qx.event.Timer(100);
this.__lC.addListener(be,this._onInterval,this);
}this.__lC.start();
}this.addListener(T,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__lx){this.releaseCapture();
delete this.__lx;
delete this.__ly;
}else if(this.__lz){this.__lC.stop();
this.releaseCapture();
delete this.__lz;
delete this.__lA;
delete this.__lB;
}this.removeListener(T,this._onMouseMove);
if(e.getType()===P){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__lx){var bJ=this.__lE?e.getDocumentLeft():e.getDocumentTop();
var bI=bJ-this.__ly;
this.slideTo(this._positionToValue(bI));
}else if(this.__lz){this.__lF(e);
}e.stopPropagation();
},_onInterval:function(e){var G=this.getValue()+(this.__lA*this.getPageStep());
if(G<this.getMinimum()){G=this.getMinimum();
}else if(G>this.getMaximum()){G=this.getMaximum();
}var H=this.__lA==-1;

if((H&&G<=this.__lB)||(!H&&G>=this.__lB)){G=this.__lB;
}this.slideTo(G);
},_onUpdate:function(e){var bS=this.getInnerSize();
var bT=this.getChildControl(Y).getBounds();
var bR=this.__lE?ba:bA;
this._updateKnobSize();
this.__lD=bS[bR]-bT[bR];
this.__lw=bT[bR];
this._updateKnobPosition();
},__lE:false,__lD:0,__lF:function(e){var n=this.__lE;
var u=n?e.getDocumentLeft():e.getDocumentTop();
var w=this.__lu;
var o=this.__lv;
var y=this.__lw;
var v=u-w;

if(u>=o){v-=y;
}var s=this._positionToValue(v);
var p=this.getMinimum();
var q=this.getMaximum();

if(s<p){s=p;
}else if(s>q){s=q;
}else{var t=this.getValue();
var r=this.getPageStep();
var x=this.__lA<0?bj:bq;
s=t+(Math[x]((s-t)/r)*r);
}if(this.__lB==null||(this.__lA==-1&&s<=this.__lB)||(this.__lA==1&&s>=this.__lB)){this.__lB=s;
}},_positionToValue:function(K){var L=this.__lD;
if(L==null||L==0){return 0;
}var N=K/L;

if(N<0){N=0;
}else if(N>1){N=1;
}var M=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(M*N);
},_valueToPosition:function(a){var b=this.__lD;

if(b==null){return 0;
}var c=this.getMaximum()-this.getMinimum();
if(c==0){return 0;
}var a=a-this.getMinimum();
var d=a/c;

if(d<0){d=0;
}else if(d>1){d=1;
}return Math.round(b*d);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(E){var F=this.getChildControl(Y).getContainerElement();

if(this.__lE){F.setStyle(R,E+U,true);
}else{F.setStyle(Q,E+U,true);
}},_updateKnobSize:function(){var bF=this.getKnobFactor();

if(bF==null){return;
}var bE=this.getInnerSize();

if(bE==null){return;
}if(this.__lE){this.getChildControl(Y).setWidth(Math.round(bF*bE.width));
}else{this.getChildControl(Y).setHeight(Math.round(bF*bE.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(z){this.slideTo(this.getValue()+z);
},slideTo:function(O){if(O<this.getMinimum()){O=this.getMinimum();
}else if(O>this.getMaximum()){O=this.getMaximum();
}else{O=this.getMinimum()+Math.round((O-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(O);
},_applyOrientation:function(k,l){var m=this.getChildControl(Y);
this.__lE=k===X;
if(this.__lE){this.removeState(W);
m.removeState(W);
this.addState(X);
m.addState(X);
m.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(X);
m.removeState(X);
this.addState(W);
m.addState(W);
m.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(I,J){if(I!=null){this._updateKnobSize();
}else{if(this.__lE){this.getChildControl(Y).resetWidth();
}else{this.getChildControl(Y).resetHeight();
}}},_applyValue:function(A,B){if(A!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(C,D){if(this.getValue()<C){this.setValue(C);
}this._updateKnobPosition();
},_applyMaximum:function(bG,bH){if(this.getValue()>bG){this.setValue(bG);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var p="pressed",o="abandoned",n="Integer",m="hovered",l="qx.event.type.Event",k="Enter",j="Space",i="press",h="__lG",g="qx.ui.form.RepeatButton",c="release",f="interval",d="execute";
qx.Class.define(g,{extend:qx.ui.form.Button,construct:function(r,s){arguments.callee.base.call(this,r,s);
this.__lG=new qx.event.Timer(this.getInterval());
this.__lG.addListener(f,this._onInterval,this);
},events:{"execute":l,"press":l,"release":l},properties:{interval:{check:n,init:100},firstInterval:{check:n,init:500},minTimer:{check:n,init:20},timerDecrease:{check:n,init:2}},members:{__lH:null,__lI:null,__lG:null,press:function(){if(this.isEnabled()){if(!this.hasState(p)){this.__lJ();
}this.removeState(o);
this.addState(p);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(p)){if(!this.__lI){this.execute();
}}this.removeState(p);
this.removeState(o);
this.__lK();
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);

if(!a){this.removeState(p);
this.removeState(o);
this.__lK();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(o)){this.removeState(o);
this.addState(p);
this.__lG.start();
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(p)){this.removeState(p);
this.addState(o);
this.__lG.stop();
this.__lH=this.getInterval();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__lJ();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(o)){this.addState(m);

if(this.hasState(p)&&!this.__lI){this.execute();
}}this.__lK();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case k:case j:if(this.hasState(p)){if(!this.__lI){this.execute();
}this.removeState(p);
this.removeState(o);
e.stopPropagation();
this.__lK();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case k:case j:this.removeState(o);
this.addState(p);
e.stopPropagation();
this.__lJ();
}},_onInterval:function(e){this.__lG.stop();
if(this.__lH==null){this.__lH=this.getInterval();
}this.__lH=(Math.max(this.getMinTimer(),this.__lH-this.getTimerDecrease()));
this.__lG.restartWith(this.__lH);
this.__lI=true;
this.fireEvent(d);
},__lJ:function(){this.fireEvent(i);
this.__lI=false;
this.__lG.setInterval(this.getFirstInterval());
this.__lG.start();
this.removeState(o);
this.addState(p);
},__lK:function(){this.fireEvent(c);
this.__lG.stop();
this.__lH=null;
this.removeState(o);
this.removeState(p);
}},destruct:function(){this._disposeObjects(h);
}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var bh="open",bg="auto",bf="qx.debug",be="middle",bd="icon",bc="label",bb="on",ba="changeOpen",Y="excluded",X="visible",bD="String",bC="opened",bB="always",bA="qx.ui.tree.AbstractTreeItem",bz="addItem",by="Boolean",bx="Invalid child index: ",bw="Integer",bv="_applyIndent",bu="__lP",bo="changeOpenSymbolMode",bp="_applyOpenSymbolMode",bm="__lM",bn="resize",bk="",bl="removeItem",bi="abstract",bj="never",bq="_applyIcon",br="_applyOpen",bt="__lL",bs="_applyLabel";
qx.Class.define(bA,{extend:qx.ui.core.Widget,type:bi,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__lL=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:by,init:false,event:ba,apply:br},openSymbolMode:{check:[bB,bj,bg],init:bg,event:bo,apply:bp},indent:{check:bw,init:19,apply:bv,themeable:true},parent:{check:bA,nullable:true},icon:{check:bD,apply:bq,nullable:true,themeable:true},label:{check:bD,apply:bs,init:bk,dispose:true}},members:{__lL:null,__lM:null,__lN:null,__lO:null,__lP:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(M){var N;

switch(M){case bc:N=new qx.ui.basic.Label().set({alignY:be,value:this.getLabel()});
break;
case bd:N=new qx.ui.basic.Image().set({alignY:be,source:this.getIcon()});
break;
case bh:N=new qx.ui.tree.FolderOpenButton().set({alignY:be});
N.addListener(ba,this._onChangeOpen,this);
N.addListener(bn,this._updateIndent,this);
break;
}return N||arguments.callee.base.call(this,M);
},getTree:function(){var J=this;

while(J.getParent()){J=J.getParent();
}var I=J.getLayoutParent()?J.getLayoutParent().getLayoutParent():0;

if(I&&I instanceof qx.ui.core.ScrollPane){return I.getLayoutParent();
}return null;
},addWidget:function(G,H){this._add(G,H);
},addSpacer:function(){if(!this.__lP){this.__lP=new qx.ui.core.Spacer();
}else{this._remove(this.__lP);
}this._add(this.__lP);
},addOpenButton:function(){this._add(this.getChildControl(bh));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bW=this.getChildControl(bd);

if(this.__lO){this._remove(bW);
}this._add(bW);
this.__lO=true;
},addLabel:function(o){var p=this.getChildControl(bc);

if(this.__lN){this._remove(p);
}
if(o){this.setLabel(o);
}else{p.setValue(this.getLabel());
}this._add(p);
this.__lN=true;
},addState:function(q){arguments.callee.base.call(this,q);
var s=this._getChildren();

for(var i=0,l=s.length;i<l;i++){var r=s[i];

if(r.addState){s[i].addState(q);
}}},removeState:function(B){arguments.callee.base.call(this,B);
var D=this._getChildren();

for(var i=0,l=D.length;i<l;i++){var C=D[i];

if(C.addState){D[i].removeState(B);
}}},_applyIcon:function(bG,bH){var bI=this.getChildControl(bd,true);

if(bI){bI.setSource(bG);
}},_applyLabel:function(U,V){var W=this.getChildControl(bc,true);

if(W){W.setValue(U);
}},_applyOpen:function(E,F){if(this.hasChildren()){this.getChildrenContainer().setVisibility(E?X:Y);
}var open=this.getChildControl(bh,true);

if(open){open.setOpen(E);
}E?this.addState(bC):this.removeState(bC);
},isOpenable:function(){var n=this.getOpenSymbolMode();
return (n===bB||n===bg&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bh,true);

if(!open){return false;
}var bL=this.getTree();

if(!bL.getRootOpenClose()){if(bL.getHideRoot()){if(bL.getRoot()==this.getParent()){return false;
}}else{if(bL.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(O,P){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var j=0;
var open=this.getChildControl(bh,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var h=open.getBounds();

if(h){j=h.width;
}else{return;
}}else{open.exclude();
}}
if(this.__lP){this.__lP.setWidth((this.getLevel()+1)*this.getIndent()-j);
}},_applyIndent:function(bJ,bK){this._updateIndent();
},getLevel:function(){var bT=this.getTree();

if(!bT){return;
}var bU=this;
var bV=-1;

while(bU){bU=bU.getParent();
bV+=1;
}if(bT.getHideRoot()){bV-=1;
}
if(!bT.getRootOpenClose()){bV-=1;
}return bV;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__lM){this.__lM=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?X:Y});
}return this.__lM;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__lL;
},hasChildren:function(){return this.__lL?this.__lL.length>0:false;
},getItems:function(bM,bN,bO){if(bO!==false){var bP=[];
}else{var bP=[this];
}var bS=this.hasChildren()&&(bN!==false||this.isOpen());

if(bS){var bR=this.getChildren();

if(bM===false){bP=bP.concat(bR);
}else{for(var i=0,bQ=bR.length;i<bQ;i++){bP=bP.concat(bR[i].getItems(bM,bN,false));
}}}return bP;
},recursiveAddToWidgetQueue:function(){var k=this.getItems(true,true,false);

for(var i=0,l=k.length;i<l;i++){qx.ui.core.queue.Widget.add(k[i]);
}},__lQ:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(v){var w=this.getChildrenContainer();
var z=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var A=arguments[i];
var y=A.getParent();

if(y){y.remove(A);
}A.setParent(this);
var x=this.hasChildren();
w.add(A);

if(A.hasChildren()){w.add(A.getChildrenContainer());
}this.__lL.push(A);

if(!x){this.__lQ();
}
if(z){A.recursiveAddToWidgetQueue();
z.fireNonBubblingEvent(bz,qx.event.type.Data,[A]);
}}
if(z){qx.ui.core.queue.Widget.add(this);
}},addAt:function(a,b){if(qx.core.Variant.isSet(bf,bb)){this.assert(b<=this.__lL.length&&b>=0,bx+b);
}
if(b==this.__lL.length){this.add(a);
return;
}var g=a.getParent();

if(g){g.remove(a);
}var d=this.getChildrenContainer();
a.setParent(this);
var f=this.hasChildren();
var c=this.__lL[b];
d.addBefore(a,c);

if(a.hasChildren()){d.addAfter(a.getChildrenContainer(),a);
}qx.lang.Array.insertAt(this.__lL,a,b);

if(!f){this.__lQ();
}
if(this.getTree()){a.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(K,L){if(qx.core.Variant.isSet(bf,bb)){this.assert(this.__lL.indexOf(L)>=0);
}this.addAt(K,this.__lL.indexOf(L));
},addAfter:function(bE,bF){if(qx.core.Variant.isSet(bf,bb)){this.assert(this.__lL.indexOf(bF)>=0);
}this.addAt(bE,this.__lL.indexOf(bF)+1);
},addAtBegin:function(m){this.addAt(m,0);
},remove:function(Q){for(var i=0,l=arguments.length;i<l;i++){var T=arguments[i];

if(this.__lL.indexOf(T)==-1){this.warn("Cannot remove treeitem '"+T+"'. It is not a child of this tree item.");
return;
}var S=this.getChildrenContainer();

if(T.hasChildren()){S.remove(T.getChildrenContainer());
}qx.lang.Array.remove(this.__lL,T);
T.setParent(null);
S.remove(T);
}var R=this.getTree();

if(R){R.fireNonBubblingEvent(bl,qx.event.type.Data,[T]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(t){var u=this.__lL[t];

if(u){this.remove(u);
}},removeAll:function(){for(var i=this.__lL.length-1;i>=0;i--){this.remove(this.__lL[i]);
}}},destruct:function(){this._disposeArray(bt);
this._disposeObjects(bu,bm);
}});
})();
(function(){var l="opened",k="click",j="mousedown",i="Boolean",h="qx.ui.tree.FolderOpenButton",g="_applyOpen",f="mouseup",d="Space",c="keypress",b="changeOpen",a="Enter";
qx.Class.define(h,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
this.initOpen();
this.addListener(c,this._onKeyPress);
this.addListener(k,this._onClick);
this.addListener(j,this._stopPropagation,this);
this.addListener(f,this._stopPropagation,this);
},properties:{open:{check:i,init:false,event:b,apply:g}},members:{_applyOpen:function(m,n){m?this.addState(l):this.removeState(l);
this.execute();
},_onKeyPress:function(e){switch(e.getKeyIdentifier()){case a:case d:this.toggleOpen();
e.stopPropagation();
}},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
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
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){arguments.callee.base.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var o="Boolean",n="qx.event.type.Event",m="queued",l="String",k="sending",j="qx.io.remote.Response",i="receiving",h="aborted",g="failed",f="nocache",bb="completed",ba="POST",Y="configured",X="timeout",W="GET",V="Pragma",U="no-url-params-on-post",T="no-cache",S="Cache-Control",R="Content-Type",w="text/plain",x="application/xml",t="application/json",u="text/html",r="qx.ioRemoteDebug",s="application/x-www-form-urlencoded",p="qx.io.remote.Exchange",q="Integer",y="X-Qooxdoo-Response-Type",z="__lR",G="HEAD",E="qx.io.remote.Request",K="__lT",I="qx.debug",N="_applyResponseType",M="_applyState",B="text/javascript",Q="changeState",P="PUT",O="_applyProhibitCaching",A="",C="_applyMethod",D="DELETE",F="boolean",H="__lU",J="__lS",L="on";
qx.Class.define(E,{extend:qx.core.Object,construct:function(bf,bg,bh){arguments.callee.base.call(this);
this.__lR={};
this.__lS={};
this.__lT={};
this.__lU={};

if(bf!==undefined){this.setUrl(bf);
}
if(bg!==undefined){this.setMethod(bg);
}
if(bh!==undefined){this.setResponseType(bh);
}this.setProhibitCaching(true);
this.__lV=++qx.io.remote.Request.__lV;
},events:{"created":n,"configured":n,"sending":n,"receiving":n,"completed":j,"aborted":j,"failed":j,"timeout":j},statics:{__lV:0},properties:{url:{check:l,init:A},method:{check:[W,ba,P,G,D],apply:C,init:W},asynchronous:{check:o,init:true},data:{check:l,nullable:true},username:{check:l,nullable:true},password:{check:l,nullable:true},state:{check:[Y,m,k,i,bb,h,X,g],init:Y,apply:M,event:Q},responseType:{check:[w,B,t,x,u],init:w,apply:N},timeout:{check:q,nullable:true},prohibitCaching:{check:function(v){return typeof v==F||v===U;
},init:true,apply:O},crossDomain:{check:o,init:false},fileUpload:{check:o,init:false},transport:{check:p,nullable:true},useBasicHttpAuth:{check:o,init:false}},members:{__lR:null,__lS:null,__lT:null,__lU:null,__lV:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case k:case i:this.error("Aborting already sent request!");
case m:this.abort();
break;
}},isConfigured:function(){return this.getState()===Y;
},isQueued:function(){return this.getState()===m;
},isSending:function(){return this.getState()===k;
},isReceiving:function(){return this.getState()===i;
},isCompleted:function(){return this.getState()===bb;
},isAborted:function(){return this.getState()===h;
},isTimeout:function(){return this.getState()===X;
},isFailed:function(){return this.getState()===g;
},__lW:function(e){var bA=e.clone();
bA.setTarget(this);
this.dispatchEvent(bA);
},_onqueued:function(e){this.setState(m);
this.__lW(e);
},_onsending:function(e){this.setState(k);
this.__lW(e);
},_onreceiving:function(e){this.setState(i);
this.__lW(e);
},_oncompleted:function(e){this.setState(bb);
this.__lW(e);
this.dispose();
},_onaborted:function(e){this.setState(h);
this.__lW(e);
this.dispose();
},_ontimeout:function(e){this.setState(X);
this.__lW(e);
this.dispose();
},_onfailed:function(e){this.setState(g);
this.__lW(e);
this.dispose();
},_applyState:function(bw,bx){if(qx.core.Variant.isSet(I,L)){if(qx.core.Setting.get(r)){this.debug("State: "+bw);
}}},_applyProhibitCaching:function(bi,bj){if(!bi){this.removeParameter(f);
this.removeRequestHeader(V);
this.removeRequestHeader(S);
return;
}if(bi!==U||this.getMethod()!=ba){this.setParameter(f,new Date().valueOf());
}else{this.removeParameter(f);
}this.setRequestHeader(V,T);
this.setRequestHeader(S,T);
},_applyMethod:function(bt,bu){if(bt===ba){this.setRequestHeader(R,s);
}else{this.removeRequestHeader(R);
}var bv=this.getProhibitCaching();
this._applyProhibitCaching(bv,bv);
},_applyResponseType:function(bk,bl){this.setRequestHeader(y,bk);
},setRequestHeader:function(bm,bn){this.__lR[bm]=bn;
},removeRequestHeader:function(bo){delete this.__lR[bo];
},getRequestHeader:function(bp){return this.__lR[bp]||null;
},getRequestHeaders:function(){return this.__lR;
},setParameter:function(bq,br,bs){if(bs){this.__lT[bq]=br;
}else{this.__lS[bq]=br;
}},removeParameter:function(by,bz){if(bz){delete this.__lT[by];
}else{delete this.__lS[by];
}},getParameter:function(b,c){if(c){return this.__lT[b]||null;
}else{return this.__lS[b]||null;
}},getParameters:function(bc){return (bc?this.__lT:this.__lS);
},setFormField:function(bd,be){this.__lU[bd]=be;
},removeFormField:function(d){delete this.__lU[d];
},getFormField:function(a){return this.__lU[a]||null;
},getFormFields:function(){return this.__lU;
},getSequenceNumber:function(){return this.__lV;
}},destruct:function(){this.setTransport(null);
this._disposeFields(z,J,K,H);
}});
})();
(function(){var a="qx.bom.client.Transport";
qx.Class.define(a,{statics:{getMaxConcurrentRequestCount:function(){var g;
var b=qx.bom.client.Engine;
var f=/([^.]*)\.([^.]*)\.([^.]*).*/.exec(b.FULLVERSION);
var e;

if(f){e=f[3];
}else{f=/([^.]*)\.([^.]*).*/.exec(b.FULLVERSION);
e=0;
}var d=f[1];
var c=f[2];
if(window.maxConnectionsPerServer){g=window.maxConnectionsPerServer;
}else if(b.OPERA){g=8;
}else if(b.WEBKIT){g=4;
}else if(b.GECKO&&((d>1)||((d==1)&&(c>9))||((d==1)&&(c==9)&&(e>=1)))){g=6;
}else{g=2;
}return g;
}}});
})();
(function(){var s="qx.ioRemoteDebug",r="Integer",q="qx.debug",p="on",o="_on",n="Boolean",m="aborted",l="singleton",k="interval",j="receiving",E="Request-Queue Progress: ",D="queued",C="__mb",B="/",A="_applyEnabled",z="__lX",y="sending",x="completed",w="failed",v="qx.io.remote.RequestQueue",t="timeout",u="__lY";
qx.Class.define(v,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lX=[];
this.__lY=[];
this.__ma=0;
this.__mb=new qx.event.Timer(500);
this.__mb.addListener(k,this._oninterval,this);
},properties:{enabled:{init:true,check:n,apply:A},maxTotalRequests:{check:r,nullable:true},maxConcurrentRequests:{check:r,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:r,init:5000}},members:{__lX:null,__lY:null,__ma:null,__mb:null,getRequestQueue:function(){return this.__lX;
},getActiveQueue:function(){return this.__lY;
},_debug:function(){if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(s)){var P=this.__lY.length+B+(this.__lX.length+this.__lY.length);
this.debug("Progress: "+P);
window.status=E+P;
}}},_check:function(){this._debug();
if(this.__lY.length==0&&this.__lX.length==0){this.__mb.stop();
}if(!this.getEnabled()){return;
}if(this.__lX.length==0||(this.__lX[0].isAsynchronous()&&this.__lY.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__ma>=this.getMaxTotalRequests()){return;
}var g=this.__lX.shift();
var h=new qx.io.remote.Exchange(g);
this.__ma++;
this.__lY.push(h);
this._debug();
h.addListener(y,this._onsending,this);
h.addListener(j,this._onreceiving,this);
h.addListener(x,this._oncompleted,this);
h.addListener(m,this._oncompleted,this);
h.addListener(t,this._oncompleted,this);
h.addListener(w,this._oncompleted,this);
h._start=(new Date).valueOf();
h.send();
if(this.__lX.length>0){this._check();
}},_remove:function(f){qx.lang.Array.remove(this.__lY,f);
f.dispose();
this._check();
},__mc:0,_onsending:function(e){if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(s)){this.__mc++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__mc);
}}e.getTarget().getRequest()._onsending(e.clone());
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e.clone());
},_oncompleted:function(e){if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(s)){if(e.getTarget()._counted){this.__mc--;
this.debug("ActiveCount: "+this.__mc);
}}}var H=e.getTarget().getRequest();
var G=o+e.getType();

if(H[G]){H[G](e.clone());
}this._remove(e.getTarget());
},_oninterval:function(e){var O=this.__lY;

if(O.length==0){this.__mb.stop();
return;
}var J=(new Date).valueOf();
var M;
var K;
var N=this.getDefaultTimeout();
var L;
var I;

for(var i=O.length-1;i>=0;i--){M=O[i];
K=M.getRequest();

if(K.isAsynchronous()){L=K.getTimeout();
if(L==0){continue;
}
if(L==null){L=N;
}I=J-M._start;

if(I>L){this.warn("Timeout: transport "+M.toHashCode());
this.warn(I+"ms > "+L+"ms");
M.timeout();
}}}},_applyEnabled:function(c,d){if(c){this._check();
}this.__mb.setEnabled(c);
},add:function(F){F.setState(D);

if(F.isAsynchronous()){this.__lX.push(F);
}else{this.__lX.unshift(F);
}this._check();

if(this.getEnabled()){this.__mb.start();
}},abort:function(a){var b=a.getTransport();

if(b){b.abort();
}else if(qx.lang.Array.contains(this.__lX,a)){qx.lang.Array.remove(this.__lX,a);
}}},destruct:function(){this._disposeArray(u);
this._disposeObjects(C);
this._disposeFields(z);
}});
})();
(function(){var O="qx.ioRemoteDebug",N="qx.debug",M="on",L="failed",K="sending",J="completed",I="receiving",H="aborted",G="timeout",F="qx.io.remote.Response",bM="Connection dropped",bL="configured",bK="qx.event.type.Event",bJ="Proxy authentication required",bI="qx.io.remote.transport.Abstract",bH="MSHTML-specific HTTP status code",bG="Not available",bF="Precondition failed",bE="Server error",bD="qx.io.remote.Exchange",V="Bad gateway",W="Gone",T="See other",U="Partial content",R="Server timeout",S="qx.io.remote.transport.Script",P="HTTP version not supported",Q="Unauthorized",ba="Multiple choices",bb="Payment required",bj="Not implemented",bh="Request-URL too large",br="Length required",bm="_applyState",bz="changeState",bw="Not modified",bd="Not acceptable",bC="qx.io.remote.Request",bB="Connection closed by server",bA="Moved permanently",bc="_applyImplementation",bf="Method not allowed",bg="Moved temporarily",bi="Forbidden",bk="Use proxy",bn="Ok",bt="Not found",by="Request time-out",X="Bad request",Y="Conflict",be="No content",bq="qx.io.remote.transport.XmlHttp",bp="qx.io.remote.transport.Iframe",bo="Request entity too large",bv="Unknown status code",bu="Unsupported media type",bl="Gateway time-out",bs="created",E="Out of resources",bx="undefined";
qx.Class.define(bD,{extend:qx.core.Object,construct:function(bO){arguments.callee.base.call(this);
this.setRequest(bO);
bO.setTransport(this);
},events:{"sending":bK,"receiving":bK,"completed":F,"aborted":F,"failed":F,"timeout":F},statics:{typesOrder:[bq,bp,S],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(v,w){qx.io.remote.Exchange.typesAvailable[w]=v;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var s in qx.io.remote.Exchange.typesAvailable){var r=qx.io.remote.Exchange.typesAvailable[s];

if(r.isSupported()){qx.io.remote.Exchange.typesSupported[s]=r;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bQ,bR,bS){if(!qx.lang.Array.contains(bQ.handles.responseTypes,bS)){return false;
}
for(var bT in bR){if(!bQ.handles[bT]){return false;
}}return true;
},_nativeMap:{0:bs,1:bL,2:K,3:I,4:J},wasSuccessful:function(B,C,D){if(D){switch(B){case null:case 0:return true;
case -1:return C<4;
default:return typeof B===bx;
}}else{switch(B){case -1:if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)&&C>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+C);
}}return C<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)&&C===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return C!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+B);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+B);
}}return false;
default:if(B>206&&B<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+B+" ("+C+")");
return false;
}}},statusCodeToString:function(u){switch(u){case -1:return bG;
case 200:return bn;
case 304:return bw;
case 206:return U;
case 204:return be;
case 300:return ba;
case 301:return bA;
case 302:return bg;
case 303:return T;
case 305:return bk;
case 400:return X;
case 401:return Q;
case 402:return bb;
case 403:return bi;
case 404:return bt;
case 405:return bf;
case 406:return bd;
case 407:return bJ;
case 408:return by;
case 409:return Y;
case 410:return W;
case 411:return br;
case 412:return bF;
case 413:return bo;
case 414:return bh;
case 415:return bu;
case 500:return bE;
case 501:return bj;
case 502:return V;
case 503:return E;
case 504:return bl;
case 505:return P;
case 12002:return R;
case 12029:return bM;
case 12030:return bM;
case 12031:return bM;
case 12152:return bB;
case 13030:return bH;
default:return bv;
}}},properties:{request:{check:bC,nullable:true},implementation:{check:bI,nullable:true,apply:bc},state:{check:[bL,K,I,J,H,G,L],init:bL,event:bz,apply:bm}},members:{send:function(){var m=this.getRequest();

if(!m){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var j=qx.io.remote.Exchange.typesOrder;
var h=qx.io.remote.Exchange.typesSupported;
var o=m.getResponseType();
var p={};

if(m.getAsynchronous()){p.asynchronous=true;
}else{p.synchronous=true;
}
if(m.getCrossDomain()){p.crossDomain=true;
}
if(m.getFileUpload()){p.fileUpload=true;
}for(var n in m.getFormFields()){p.programaticFormFields=true;
break;
}var q,k;

for(var i=0,l=j.length;i<l;i++){q=h[j[i]];

if(q){if(!qx.io.remote.Exchange.canHandle(q,p,o)){continue;
}
try{if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){this.debug("Using implementation: "+q.classname);
}}k=new q;
this.setImplementation(k);
k.setUseBasicHttpAuth(m.getUseBasicHttpAuth());
k.send();
return true;
}catch(t){this.error("Request handler throws error");
this.error(t);
return;
}}}this.error("There is no transport implementation available to handle this request: "+m);
},abort:function(){var bN=this.getImplementation();

if(bN){if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){this.debug("Abort: implementation "+bN.toHashCode());
}}bN.abort();
}else{if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){this.debug("Abort: forcing state to be aborted");
}}this.setState(H);
}},timeout:function(){var x=this.getImplementation();

if(x){this.warn("Timeout: implementation "+x.toHashCode());
x.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(G);
}this.__md();
},__md:function(){var bP=this.getRequest();

if(bP){bP.setTimeout(0);
}},_onsending:function(e){this.setState(K);
},_onreceiving:function(e){this.setState(I);
},_oncompleted:function(e){this.setState(J);
},_onabort:function(e){this.setState(H);
},_onfailed:function(e){this.setState(L);
},_ontimeout:function(e){this.setState(G);
},_applyImplementation:function(y,z){if(z){z.removeListener(K,this._onsending,this);
z.removeListener(I,this._onreceiving,this);
z.removeListener(J,this._oncompleted,this);
z.removeListener(H,this._onabort,this);
z.removeListener(G,this._ontimeout,this);
z.removeListener(L,this._onfailed,this);
}
if(y){var A=this.getRequest();
y.setUrl(A.getUrl());
y.setMethod(A.getMethod());
y.setAsynchronous(A.getAsynchronous());
y.setUsername(A.getUsername());
y.setPassword(A.getPassword());
y.setParameters(A.getParameters());
y.setFormFields(A.getFormFields());
y.setRequestHeaders(A.getRequestHeaders());
y.setData(A.getData());
y.setResponseType(A.getResponseType());
y.addListener(K,this._onsending,this);
y.addListener(I,this._onreceiving,this);
y.addListener(J,this._oncompleted,this);
y.addListener(H,this._onabort,this);
y.addListener(G,this._ontimeout,this);
y.addListener(L,this._onfailed,this);
}},_applyState:function(b,c){if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){this.debug("State: "+c+" => "+b);
}}
switch(b){case K:this.fireEvent(K);
break;
case I:this.fireEvent(I);
break;
case J:case H:case G:case L:var f=this.getImplementation();

if(!f){break;
}this.__md();

if(this.hasListener(b)){var g=qx.event.Registration.createEvent(b,qx.io.remote.Response);

if(b==J){var d=f.getResponseContent();
g.setContent(d);
if(d===null){if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){this.debug("Altered State: "+b+" => failed");
}}b=L;
}}else if(b==L){g.setContent(f.getResponseContent());
}g.setStatusCode(f.getStatusCode());
g.setResponseHeaders(f.getResponseHeaders());
this.dispatchEvent(g);
}this.setImplementation(null);
f.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var a=this.getImplementation();

if(a){this.setImplementation(null);
a.dispose();
}this.setRequest(null);
}});
})();
(function(){var w="qx.event.type.Event",v="String",u="qx.debug",t="qx.ioRemoteDebug",s="failed",r="timeout",q="on",p="created",o="aborted",n="sending",g="configured",m="receiving",j="completed",f="Object",e="Boolean",i="abstract",h="_applyState",k="GET",d="changeState",l="qx.io.remote.transport.Abstract";
qx.Class.define(l,{type:i,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":w,"configured":w,"sending":w,"receiving":w,"completed":w,"aborted":w,"failed":w,"timeout":w},properties:{url:{check:v,nullable:true},method:{check:v,nullable:true,init:k},asynchronous:{check:e,nullable:true,init:true},data:{check:v,nullable:true},username:{check:v,nullable:true},password:{check:v,nullable:true},state:{check:[p,g,n,m,j,o,r,s],init:p,event:d,apply:h},requestHeaders:{check:f,nullable:true},parameters:{check:f,nullable:true},formFields:{check:f,nullable:true},responseType:{check:v,nullable:true},useBasicHttpAuth:{check:e,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){if(qx.core.Variant.isSet(u,q)){if(qx.core.Setting.get(t)){this.warn("Aborting...");
}}this.setState(o);
},timeout:function(){if(qx.core.Variant.isSet(u,q)){if(qx.core.Setting.get(t)){this.warn("Timeout...");
}}this.setState(r);
},failed:function(){if(qx.core.Variant.isSet(u,q)){if(qx.core.Setting.get(t)){this.warn("Failed...");
}}this.setState(s);
},setRequestHeader:function(b,c){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(a){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(x,y){if(qx.core.Variant.isSet(u,q)){if(qx.core.Setting.get(t)){this.debug("State: "+x);
}}
switch(x){case p:this.fireEvent(p);
break;
case g:this.fireEvent(g);
break;
case n:this.fireEvent(n);
break;
case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case o:this.fireEvent(o);
break;
case s:this.fireEvent(s);
break;
case r:this.fireEvent(r);
break;
}return true;
}}});
})();
(function(){var r="qx.debug",q="on",p="qx.ioRemoteDebugData",o="failed",n="qx.ioRemoteDebug",m="completed",k="=",j="aborted",h="",g="sending",S="&",R="configured",Q="timeout",P="application/xml",O="qx.io.remote.transport.XmlHttp",N="application/json",M="text/html",L="qx.client",K="receiving",J="text/plain",z="text/javascript",A="created",x="?",y='Referer',v='Basic ',w="\n</pre>",t="string",u='Authorization',B="<pre>Could not execute json: \n",C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",E=':',D="parseerror",G="file:",F="webkit",I="__mg",H="object";
qx.Class.define(O,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[J,z,N,P,M]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(L,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__me:false,__mf:0,__mg:null,getRequest:function(){if(this.__mg===null){this.__mg=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__mg.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__mg;
},send:function(){this.__mf=0;
var bP=this.getRequest();
var bL=this.getMethod();
var bS=this.getAsynchronous();
var bR=this.getUrl();
var bN=(window.location.protocol===G&&!(/^http(s){0,1}\:/.test(bR)));
this.__me=bN;
var bV=this.getParameters(false);
var bT=[];

for(var bM in bV){var bQ=bV[bM];

if(bQ instanceof Array){for(var i=0;i<bQ.length;i++){bT.push(encodeURIComponent(bM)+k+encodeURIComponent(bQ[i]));
}}else{bT.push(encodeURIComponent(bM)+k+encodeURIComponent(bQ));
}}
if(bT.length>0){bR+=(bR.indexOf(x)>=0?S:x)+bT.join(S);
}if(this.getData()===null){var bV=this.getParameters(true);
var bT=[];

for(var bM in bV){var bQ=bV[bM];

if(bQ instanceof Array){for(var i=0;i<bQ.length;i++){bT.push(encodeURIComponent(bM)+k+encodeURIComponent(bQ[i]));
}}else{bT.push(encodeURIComponent(bM)+k+encodeURIComponent(bQ));
}}
if(bT.length>0){this.setData(bT.join(S));
}}var bU=function(bg){var bl=C;
var bp=h;
var bj,bi,bh;
var bm,bn,bo,bk;
var i=0;

do{bj=bg.charCodeAt(i++);
bi=bg.charCodeAt(i++);
bh=bg.charCodeAt(i++);
bm=bj>>2;
bn=((bj&3)<<4)|(bi>>4);
bo=((bi&15)<<2)|(bh>>6);
bk=bh&63;

if(isNaN(bi)){bo=bk=64;
}else if(isNaN(bh)){bk=64;
}bp+=bl.charAt(bm)+bl.charAt(bn)+bl.charAt(bo)+bl.charAt(bk);
}while(i<bg.length);
return bp;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){bP.open(bL,bR,bS);
bP.setRequestHeader(u,v+bU(this.getUsername()+E+this.getPassword()));
}else{bP.open(bL,bR,bS,this.getUsername(),this.getPassword());
}}else{bP.open(bL,bR,bS);
}}catch(bz){this.error("Failed with exception: "+bz);
this.failed();
return;
}if(!qx.core.Variant.isSet(L,F)){bP.setRequestHeader(y,window.location.href);
}var bO=this.getRequestHeaders();

for(var bM in bO){bP.setRequestHeader(bM,bO[bM]);
}try{if(qx.core.Variant.isSet(r,q)){if(qx.core.Setting.get(p)){this.debug("Request: "+this.getData());
}}bP.send(this.getData());
}catch(W){if(bN){this.failedLocally();
}else{this.error("Failed to send data: "+W,"send");
this.failed();
}return;
}if(!bS){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===o){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case m:case j:case o:case Q:if(qx.core.Variant.isSet(r,q)){if(qx.core.Setting.get(n)){this.warn("Ignore Ready State Change");
}}return;
}var d=this.getReadyState();

if(d==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),d,this.__me)){if(this.getState()===R){this.setState(g);
}return this.failed();
}}while(this.__mf<d){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mf]);
}}),getReadyState:function(){var f=null;

try{f=this.getRequest().readyState;
}catch(br){}return f;
},setRequestHeader:function(bu,bv){this.getRequestHeaders()[bu]=bv;
},getResponseHeader:function(bJ){var bK=null;

try{bK=this.getRequest().getResponseHeader(bJ)||null;
}catch(bq){}return bK;
},getStringResponseHeaders:function(){var bf=null;

try{var be=this.getRequest().getAllResponseHeaders();

if(be){bf=be;
}}catch(bA){}return bf;
},getResponseHeaders:function(){var bb=this.getStringResponseHeaders();
var bc={};

if(bb){var Y=bb.split(/[\r\n]+/g);

for(var i=0,l=Y.length;i<l;i++){var ba=Y[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(ba){bc[ba[1]]=ba[2];
}}}return bc;
},getStatusCode:function(){var bB=-1;

try{bB=this.getRequest().status;
}catch(bs){}return bB;
},getStatusText:function(){var by=h;

try{by=this.getRequest().statusText;
}catch(U){}return by;
},getResponseText:function(){var bF=null;

try{bF=this.getRequest().responseText;
}catch(bI){bF=null;
}return bF;
},getResponseXml:function(){var bE=null;
var bC=this.getStatusCode();
var bD=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bC,bD,this.__me)){try{bE=this.getRequest().responseXML;
}catch(V){}}if(typeof bE==H&&bE!=null){if(!bE.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,h);
bE.loadXML(s);
}if(!bE.documentElement){throw new Error("Missing Document Element!");
}
if(bE.documentElement.tagName==D){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bE;
},getFetchedLength:function(){var bd=this.getResponseText();
return typeof bd==t?bd.length:0;
},getResponseContent:function(){var a=this.getState();

if(a!==m&&a!=o){if(qx.core.Variant.isSet(r,q)){if(qx.core.Setting.get(n)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(r,q)){if(qx.core.Setting.get(n)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var c=this.getResponseText();

if(a==o){if(qx.core.Variant.isSet(r,q)){if(qx.core.Setting.get(p)){this.debug("Failed: "+c);
}}return c;
}
switch(this.getResponseType()){case J:case M:if(qx.core.Variant.isSet(r,q)){if(qx.core.Setting.get(p)){this.debug("Response: "+c);
}}return c;
case N:if(qx.core.Variant.isSet(r,q)){if(qx.core.Setting.get(p)){this.debug("Response: "+c);
}}
try{if(c&&c.length>0){var b=qx.util.Json.parseQx(c);
return (b===0?0:(b||null));
}else{return null;
}}catch(bt){this.error("Could not execute json: ["+c+"]",bt);
return B+c+w;
}case z:if(qx.core.Variant.isSet(r,q)){if(qx.core.Setting.get(p)){this.debug("Response: "+c);
}}
try{if(c&&c.length>0){var b=window.eval(c);
return (b===0?0:(b||null));
}else{return null;
}}catch(X){this.error("Could not execute javascript: ["+c+"]",X);
return null;
}case P:c=this.getResponseXml();

if(qx.core.Variant.isSet(r,q)){if(qx.core.Setting.get(p)){this.debug("Response: "+c);
}}return (c===0?0:(c||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bw,bx){if(qx.core.Variant.isSet(r,q)){if(qx.core.Setting.get(n)){this.debug("State: "+bw);
}}
switch(bw){case A:this.fireEvent(A);
break;
case R:this.fireEvent(R);
break;
case g:this.fireEvent(g);
break;
case K:this.fireEvent(K);
break;
case m:this.fireEvent(m);
break;
case o:this.fireEvent(o);
break;
case j:this.getRequest().abort();
this.fireEvent(j);
break;
case Q:this.getRequest().abort();
this.fireEvent(Q);
break;
}}},defer:function(bG,bH){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,O);
},destruct:function(){var T=this.getRequest();

if(T){T.onreadystatechange=qx.lang.Function.empty;
switch(T.readyState){case 1:case 2:case 3:T.abort();
}}this._disposeFields(I);
}});
})();
(function(){var G="qx.debug",F="on",E="qx.ioRemoteDebugData",D="=",C="&",B="application/xml",A="application/json",z="text/html",y="qx.ioRemoteDebug",x="qx.client",bh="textarea",bg="none",bf="text/plain",be="text/javascript",bd="",bc="completed",bb="?",ba="qx.io.remote.transport.Iframe",Y="gecko",X="frame_",N="aborted",O="_data_",L="pre",M="javascript:void(0)",J="sending",K="__mi",H="form",I="failed",P='<iframe name="',Q="mshtml",S="form_",R='"></iframe>',U="iframe",T="timeout",W="qx/static/blank.gif",V="__mh";
qx.Class.define(ba,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var f=(new Date).valueOf();
var g=X+f;
var h=S+f;
if(qx.core.Variant.isSet(x,Q)){this.__mh=document.createElement(P+g+R);
}else{this.__mh=document.createElement(U);
}this.__mh.src=M;
this.__mh.id=this.__mh.name=g;
this.__mh.onload=qx.lang.Function.bind(this._onload,this);
this.__mh.style.display=bg;
document.body.appendChild(this.__mh);
this.__mi=document.createElement(H);
this.__mi.target=g;
this.__mi.id=this.__mi.name=h;
this.__mi.style.display=bg;
document.body.appendChild(this.__mi);
this.__mj=document.createElement(bh);
this.__mj.id=this.__mj.name=O;
this.__mi.appendChild(this.__mj);
this.__mh.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[bf,be,A,B,z]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__mj:null,__mk:0,__mi:null,__mh:null,send:function(){var n=this.getMethod();
var p=this.getUrl();
var t=this.getParameters(false);
var s=[];

for(var o in t){var q=t[o];

if(q instanceof Array){for(var i=0;i<q.length;i++){s.push(encodeURIComponent(o)+D+encodeURIComponent(q[i]));
}}else{s.push(encodeURIComponent(o)+D+encodeURIComponent(q));
}}
if(s.length>0){p+=(p.indexOf(bb)>=0?C:bb)+s.join(C);
}if(this.getData()===null){var t=this.getParameters(true);
var s=[];

for(var o in t){var q=t[o];

if(q instanceof Array){for(var i=0;i<q.length;i++){s.push(encodeURIComponent(o)+D+encodeURIComponent(q[i]));
}}else{s.push(encodeURIComponent(o)+D+encodeURIComponent(q));
}}
if(s.length>0){this.setData(s.join(C));
}}var m=this.getFormFields();

for(var o in m){var r=document.createElement(bh);
r.name=o;
r.appendChild(document.createTextNode(m[o]));
this.__mi.appendChild(r);
}this.__mi.action=p;
this.__mi.method=n;
this.__mj.appendChild(document.createTextNode(this.getData()));
this.__mi.submit();
this.setState(J);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__mi.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__mh.readyState]);
}),_switchReadyState:function(u){switch(this.getState()){case bc:case N:case I:case T:this.warn("Ignore Ready State Change");
return;
}while(this.__mk<u){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mk]);
}},setRequestHeader:function(bi,bj){},getResponseHeader:function(l){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return bd;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__mh);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__mh);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__mh);
},getIframeTextContent:function(){var v=this.getIframeBody();

if(!v){return null;
}
if(!v.firstChild){return bd;
}if(v.firstChild.tagName&&v.firstChild.tagName.toLowerCase()==L){return v.firstChild.innerHTML;
}else{return v.innerHTML;
}},getIframeHtmlContent:function(){var j=this.getIframeBody();
return j?j.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==bc){if(qx.core.Variant.isSet(G,F)){if(qx.core.Setting.get(y)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(G,F)){if(qx.core.Setting.get(y)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var k=this.getIframeTextContent();

switch(this.getResponseType()){case bf:if(qx.core.Variant.isSet(G,F)){if(qx.core.Setting.get(E)){this.debug("Response: "+this._responseContent);
}}return k;
break;
case z:k=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(G,F)){if(qx.core.Setting.get(E)){this.debug("Response: "+this._responseContent);
}}return k;
break;
case A:k=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(G,F)){if(qx.core.Setting.get(E)){this.debug("Response: "+this._responseContent);
}}
try{return k&&k.length>0?qx.util.Json.parseQx(k):null;
}catch(d){return this.error("Could not execute json: ("+k+")",d);
}case be:k=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(G,F)){if(qx.core.Setting.get(E)){this.debug("Response: "+this._responseContent);
}}
try{return k&&k.length>0?window.eval(k):null;
}catch(w){return this.error("Could not execute javascript: ("+k+")",w);
}case B:k=this.getIframeDocument();

if(qx.core.Variant.isSet(G,F)){if(qx.core.Setting.get(E)){this.debug("Response: "+this._responseContent);
}}return k;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(a,b,c){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,ba);
},destruct:function(){if(this.__mh){this.__mh.onload=null;
this.__mh.onreadystatechange=null;
if(qx.core.Variant.isSet(x,Y)){this.__mh.src=qx.util.ResourceManager.getInstance().toUri(W);
}document.body.removeChild(this.__mh);
}
if(this.__mi){document.body.removeChild(this.__mi);
}this._disposeFields(V,K);
}});
})();
(function(){var o="qx.debug",n="on",m="&",l="=",k="qx.ioRemoteDebug",j="application/json",h="qx.io.remote.transport.Script",g="qx.ioRemoteDebugData",f="text/plain",e="text/javascript",B="completed",A="?",z="_responseContent",y="aborted",x="script",w="_ScriptTransport_",v="",u="_ScriptTransport_id",t="failed",s="__mm",q="_ScriptTransport_data",r="utf-8",p="timeout";
qx.Class.define(h,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var E=++qx.io.remote.transport.Script.__ml;

if(E>=2000000000){qx.io.remote.transport.Script.__ml=E=1;
}this.__mm=null;
this.__ml=E;
},statics:{__ml:0,_instanceRegistry:{},ScriptTransport_PREFIX:w,ScriptTransport_ID_PARAM:u,ScriptTransport_DATA_PARAM:q,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[f,e,j]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(C,content){var D=qx.io.remote.transport.Script._instanceRegistry[C];

if(D==null){if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(k)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{D._responseContent=content;
D._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__mn:0,__mm:null,__ml:null,send:function(){var L=this.getUrl();
L+=(L.indexOf(A)>=0?m:A)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+l+this.__ml;
var O=this.getParameters();
var N=[];

for(var K in O){if(K.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var M=O[K];

if(M instanceof Array){for(var i=0;i<M.length;i++){N.push(encodeURIComponent(K)+l+encodeURIComponent(M[i]));
}}else{N.push(encodeURIComponent(K)+l+encodeURIComponent(M));
}}
if(N.length>0){L+=m+N.join(m);
}var J=this.getData();

if(J!=null){L+=m+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+l+encodeURIComponent(J);
}qx.io.remote.transport.Script._instanceRegistry[this.__ml]=this;
this.__mm=document.createElement(x);
this.__mm.charset=r;
this.__mm.src=L;

if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(g)){this.debug("Request: "+L);
}}document.body.appendChild(this.__mm);
},_switchReadyState:function(d){switch(this.getState()){case B:case y:case t:case p:this.warn("Ignore Ready State Change");
return;
}while(this.__mn<d){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mn]);
}},setRequestHeader:function(F,G){},getResponseHeader:function(H){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return v;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==B){if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(k)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(k)){this.debug("Returning content for responseType: "+this.getResponseType());
}}
switch(this.getResponseType()){case f:case j:case e:if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(g)){this.debug("Response: "+this._responseContent);
}}var I=this._responseContent;
return (I===0?0:(I||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(a,b,c){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,h);
qx.io.remote.ScriptTransport=a;
},destruct:function(){if(this.__mm){delete qx.io.remote.transport.Script._instanceRegistry[this.__ml];
document.body.removeChild(this.__mm);
}this._disposeFields(s,z);
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
(function(){var bj="test",bi="",bh="All",bg=".",bf="tmap",be="^",bd="demobrowser.TreeDataHandler",bc="ttree",bb="\\.[^\\.]+$",ba="depth";
qx.Class.define(bd,{extend:qx.core.Object,construct:function(D){arguments.callee.base.call(this);
this.tmap=D;
this.ttree=this.__mo(D);
},members:{__mo:function(g){var k=g;
function h(E,F){var I=F.classname;
var G=I.split(bg);
function H(parent,O){if(!O.length){return parent;
}else{var P=O[0];
var Q=O.slice(1,O.length);
var R=null;
var S=null;
var T=parent.getChildren();

for(var i=0;i<T.length;i++){if(T[i].label==P){S=T[i];
break;
}}if(S==null){S=new demobrowser.Tree(P);
parent.add(S);
}R=H(S,Q);
return R;
}}var J=H(E,G);

if(!J){throw new Error("No target to insert tests");
}l.readTree(F,J);
}function m(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var n=new demobrowser.Tree(bh);
var l=this;
k.sort(m);

for(var i=0;i<k.length;i++){h(n,k[i]);
}return n;
},readTree:function(V,W){var Y=arguments[1]||new demobrowser.Tree(V.classname);
var W;
function X(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}V.tests.sort(X);

for(var j=0;j<V.tests.length;j++){W=new demobrowser.Tree(V.tests[j].name);
W.type=bj;
W.desc=V.tests[j].desc;
Y.add(W);
}if(V.children&&V.children.length){for(var j=0;j<V.children.length;j++){Y.add(this.readTree(V.children[j]));
}}return Y;
},getRoot:function(){if(!this.Root){var s={classname:bi,tests:[]};
var r=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(s.classname.length>r[i].classname.length){s=r[i];
}}this.Root=s;
}return this.Root.classname;
},getChilds:function(y){var z=[];
var B=this.tmap;
var A=be+y+bb;
var C=new RegExp(A);

for(var i=0;i<B.length;i++){if(B[i].classname.match(C)){z.push(B[i]);
}}return z;
},getTests:function(t){var u=this.tmap;

for(var i=0;i<u.length;i++){if(u[i].classname==t){return u[i].tests;
}}return [];
},getPath:function(bo){if(!bo){return bi;
}var bp=bo.pwd();
bp.shift();
if(this.isClass(bo)){bp=bp.concat(bo.label);
}return bp;
},getChildren:function(o){if(o==bh){var p=this.tmap;
var q=[];

for(var i=0;i<p.length;i++){q.push(p[i].classname);
}return q;
}else if(this.isClass(o)){return this.getTests(o);
}else{return [];
}},isClass:function(U){if(U.type&&U.type==bj){return false;
}else{return true;
}},hasTests:function(e){if(!this.isClass(e)){return false;
}else{var f=e.getChildren();

for(var i=0;i<f.length;i++){if(f[i].type&&f[i].type==bj){return true;
}}return false;
}},classFromTest:function(v){var w=bi;
var x=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==v){w=this.tmap[i].classname;
break classloop;
}}}return w;
},getFullName:function(c){if(!c){return bi;
}var d=this.getPath(c);

if(c.type&&c.type==bj){d=d.concat(c.label);
}return d.join(bg);
},getPreviousNode:function(K){var L=K.getPrevSibling();

if(L){return L;
}},getNextNode:function(M){var N=M.getNextSibling();

if(N){return N;
}},testCount:function(bk){if(bk.type&&bk.type==bj){return 1;
}else{var bl=0;
var bn=bk.getIterator(ba);
var bm;

while(bm=bn()){if(bm.type&&bm.type==bj){bl++;
}}return bl;
}}},destruct:function(){this._disposeFields(bf);
this._disposeObjects(bc);
}});
})();
(function(){var r="depth",q="",p="widgetLinkFlat",o="widgetLinkFull",n="parent",m="children",l="demobrowser.Tree";
qx.Class.define(l,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.label=arguments[0]||q;
this.children=[];
this.parent=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(a,b){var c=r;
var d=this;
var e=this.getIterator(c);

while(d=e()){a.apply(d,b);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(g){var j=[this];
var h=g==r?1:0;
function f(){var s;

if(j.length){s=j.shift();
var t=s.getChildren();

if(t.length){if(h){j=t.concat(j);
}else{j=j.concat(t);
}}}else{s=null;
}return s;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(w){var x=this.parent.getChildren();
var y=arguments.callee.self.indexOf(x,this);
var z=y+w;

if(x[z]){return x[z];
}},add:function(k){this.children.push(k);
k.parent=this;
}},statics:{indexOf:function(u,v){for(var i=0;i<u.length;i++){if(u[i]==v){return i;
}}}},destruct:function(){this._disposeObjects(o,p,n);
this._disposeArray(m);
}});
})();
(function(){var k="mshtml",j="pop.push.reverse.shift.sort.splice.unshift.join.slice",h="number",g="qx.type.BaseArray",f="qx.client",e=".";
qx.Class.define(g,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function d(p){if(qx.core.Variant.isSet(f,k)){c.prototype={length:0,$$isArray:true};
var s=j.split(e);

for(var length=s.length;length;){c.prototype[s[--length]]=Array.prototype[s[length]];
}}var t=Array.prototype.slice;
c.prototype.concat=function(){var o=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var n;

if(arguments[i] instanceof c){n=t.call(arguments[i],0);
}else if(arguments[i] instanceof Array){n=arguments[i];
}else{n=[arguments[i]];
}o.push.apply(o,n);
}return o;
};
c.prototype.toString=function(){return t.call(this,0).toString();
};
c.prototype.toLocaleString=function(){return t.call(this,0).toLocaleString();
};
c.prototype.constructor=c;
c.prototype.indexOf=qx.lang.Core.arrayIndexOf;
c.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
c.prototype.forEach=qx.lang.Core.arrayForEach;
c.prototype.some=qx.lang.Core.arraySome;
c.prototype.every=qx.lang.Core.arrayEvery;
var q=qx.lang.Core.arrayFilter;
var r=qx.lang.Core.arrayMap;
c.prototype.filter=function(){var m=new this.constructor;
m.push.apply(m,q.apply(this,arguments));
return m;
};
c.prototype.map=function(){var u=new this.constructor;
u.push.apply(u,r.apply(this,arguments));
return u;
};
c.prototype.slice=function(){var l=new this.constructor;
l.push.apply(l,Array.prototype.slice.apply(this,arguments));
return l;
};
c.prototype.splice=function(){var a=new this.constructor;
a.push.apply(a,Array.prototype.splice.apply(this,arguments));
return a;
};
c.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
c.prototype.valueOf=function(){return this.length;
};
return c;
}function c(length){if(arguments.length===1&&typeof length===h){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function b(){}b.prototype=[];
c.prototype=new b;
c.prototype.length=0;
qx.type.BaseArray=d(c);
})();
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
(function(){var Q="</span>",P="sym",O="nl",N="qxkey",M="ws",L=">",K="qqstr",J="<",I="qstr",H="linecomment",bL="ident",bK="keyword",bJ="regexp",bI="&",bH="|",bG="fullcomment",bF="atom",bE="\\r\\n|\\r|\\n",bD="\\s*\\)*",bC="\\s",X="^",Y='["][^"]*["]',V="real",W="\\s*[,\\)]",T="<span class='string'>",U="[a-zA-Z_][a-zA-Z0-9_]*\\b",R="<span class='comment'>",S="[+-]?\\d+",bc="\\s*\\(*\\s*",bd="&nbsp;",bl="qx.dev.Tokenizer",bj="\\t",bs="\\s*\\)*\\s*\\)",bn="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",by="\\)*\\.(?:test|exec)\\s*\\(\\s*",bw="<span class='regexp'>",bf="int",bB="'>",bA="<span class='",bz="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",be=".",bh="\\s*\\)*\\s*?,?",bi="[\\(,]\\s*",bk="<span class='ident'>",bm="g",bo="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",bt="\\/\\*(?:.|[\\n\\r])*?\\*\\/",bx="\n",ba="$",bb="['][^']*[']",bg="tab",br="\\/\\/.*?[\\n\\r$]",bq="<br>",bp=" ",bv="(?::|=|\\?)\\s*\\(*\\s*",bu="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(bl,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(b){var G={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var t={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var e={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var p=function(bT){return new RegExp(X+bT+ba);
};
var z=br;
var q=bt;
var j=U;
var s=S;
var n=bo;
var v=Y;
var u=bb;
var g=bj;
var C=bE;
var E=bC;
var o=bz;
var r=[bu+o+bs,bn+o+bh,bc+o+by,bv+o+bD,bi+o+W].join(bH);
var A=p(z);
var k=p(q);
var x=p(j);
var f=p(s);
var D=p(n);
var m=p(v);
var d=p(u);
var y=p(g);
var l=p(C);
var c=p(E);
var h=p(r);
var w=new RegExp([z,q,j,s,n,v,u,u,g,C,E,r,be].join(bH),bm);
var B=[];
var a=b.match(w);

for(var i=0;i<a.length;i++){var F=a[i];

if(F.match(A)){B.push({type:H,value:F});
}else if(F.match(k)){B.push({type:bG,value:F});
}else if(F.match(h)){B.push({type:bJ,value:F});
}else if(F.match(d)){B.push({type:I,value:F});
}else if(F.match(m)){B.push({type:K,value:F});
}else if(G[F]){B.push({type:bK,value:F});
}else if(t[F]){B.push({type:bF,value:F});
}else if(e[F]){B.push({type:N,value:F});
}else if(F.match(x)){B.push({type:bL,value:F});
}else if(F.match(D)){B.push({type:V,value:F});
}else if(F.match(f)){B.push({type:bf,value:F});
}else if(F.match(l)){B.push({type:O,value:F});
}else if(F.match(p(c))){B.push({type:M,value:F});
}else if(F.match(y)){B.push({type:bg,value:F});
}else if(F==L){B.push({type:P,value:L});
}else if(F==J){B.push({type:P,value:J});
}else if(F==bI){B.push({type:P,value:bI});
}else{B.push({type:P,value:F});
}}return B;
},javaScriptToHtml:function(bM){var bQ=qx.dev.Tokenizer.tokenizeJavaScript(bM);
var bP=new qx.util.StringBuilder();

for(var i=0;i<bQ.length;i++){var bR=bQ[i];
var bO=qx.bom.String.escape(bR.value);

switch(bR.type){case bJ:bP.add(bw,bO,Q);
break;
case bL:bP.add(bk,bO,Q);
break;
case H:case bG:bP.add(R,bO,Q);
break;
case I:case K:bP.add(T,bO,Q);
break;
case bK:case bF:case N:bP.add(bA,bR.type,bB,bO,Q);
break;
case O:var bN=qx.bom.client.Engine.MSHTML?bq:bx;
bP.add(bN);
break;
case M:var bS=qx.bom.client.Engine.MSHTML?bd:bp;
bP.add(bS);
break;
default:bP.add(bO);
}}return bP.get();
}}});
})();
(function(){var i="\n",h="",g=" &nbsp;",f="<br>",e=" ",d="qx.bom.String";
qx.Class.define(d,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(c){return qx.util.StringEscape.escape(c,qx.bom.String.FROM_CHARCODE);
},unescape:function(p){return qx.util.StringEscape.unescape(p,qx.bom.String.TO_CHARCODE);
},fromText:function(b){return qx.bom.String.escape(b).replace(/(  |\n)/g,function(m){var n={"  ":g,"\n":f};
return n[m]||m;
});
},toText:function(a){return qx.bom.String.unescape(a.replace(/\s+|<([^>])+>/gi,function(o){if(/\s+/.test(o)){return e;
}else if(/^<BR|^<br/gi.test(o)){return i;
}else{return h;
}}));
}},defer:function(j,k,l){j.FROM_CHARCODE=qx.lang.Object.invert(j.TO_CHARCODE);
}});
})();
(function(){var o=";",n="&",m='X',k="",j='#',h="&#",g="qx.util.StringEscape";
qx.Bootstrap.define(g,{statics:{escape:function(a,b){var d,f=k;

for(var i=0,l=a.length;i<l;i++){var e=a.charAt(i);
var c=e.charCodeAt(0);

if(b[c]){d=n+b[c]+o;
}else{if(c>0x7F){d=h+c+o;
}else{d=e;
}}f+=d;
}return f;
},unescape:function(p,q){return p.replace(/&[#\w]+;/gi,function(r){var s=r;
var r=r.substring(1,r.length-1);
var t=q[r];

if(t){s=String.fromCharCode(t);
}else{if(r.charAt(0)==j){if(r.charAt(1).toUpperCase()==m){t=r.substring(2);
if(t.match(/^[0-9A-Fa-f]+$/gi)){s=String.fromCharCode(parseInt(t,16));
}}else{t=r.substring(1);
if(t.match(/^\d+$/gi)){s=String.fromCharCode(parseInt(t,10));
}}}}return s;
});
}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var y="qx.debug",x="_applyStyle",w="on",v="Color",u="px",t="solid",s="dotted",r="double",q="border:",p="dashed",i="",o="_applyWidth",l="qx.ui.decoration.Uniform",g="px ",f="__insets",k="__mp",j="position:absolute;top:0;left:0;",m=" ",e=";",n="scale",h="PositiveInteger";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(I,J,K){arguments.callee.base.call(this);
if(I!=null){this.setWidth(I);
}
if(J!=null){this.setStyle(J);
}
if(K!=null){this.setColor(K);
}},properties:{width:{check:h,init:0,apply:o},style:{nullable:true,check:[t,s,p,r],init:t,apply:x},color:{nullable:true,check:v,apply:x},backgroundColor:{check:v,nullable:true,apply:x}},members:{__mp:null,_getDefaultInsets:function(){var a=this.getWidth();
return {top:a,right:a,bottom:a,left:a};
},_isInitialized:function(){return !!this.__mp;
},getMarkup:function(){if(this.__mp){return this.__mp;
}var z=j;
var A=this.getWidth();

if(qx.core.Variant.isSet(y,w)){if(A===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var C=qx.theme.manager.Color.getInstance();
z+=q+A+g+this.getStyle()+m+C.resolve(this.getColor())+e;
var B=this._generateBackgroundMarkup(z);
return this.__mp=B;
},resize:function(D,E,F){var H=this.getBackgroundImage()&&this.getBackgroundRepeat()==n;

if(H||qx.bom.client.Feature.CONTENT_BOX){var G=this.getWidth()*2;
E-=G;
F-=G;
if(E<0){E=0;
}
if(F<0){F=0;
}}D.style.width=E+u;
D.style.height=F+u;
},tint:function(b,c){var d=qx.theme.manager.Color.getInstance();

if(c==null){c=this.getBackgroundColor();
}b.style.backgroundColor=d.resolve(c)||i;
},_applyWidth:function(){if(qx.core.Variant.isSet(y,w)){if(this.__mp){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(y,w)){if(this.__mp){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this._disposeFields(k,f);
}});
})();
(function(){var r="px",q="0px",p="-1px",o="no-repeat",n="scale-x",m="scale-y",l="-tr",k="-l",j="__mq",i="__ms",L="__insets",K='</div>',J="scale",I="qx.client",H="-br",G="-t",F="-tl",E="-r",D='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',C="qx.debug",y="_applyBaseImage",z="-b",w="String",x="",u="__mr",v="-bl",s="-c",t="mshtml",A="on",B="qx.ui.decoration.Grid";
qx.Class.define(B,{extend:qx.ui.decoration.Abstract,construct:function(O,P){arguments.callee.base.call(this);
if(O!=null){this.setBaseImage(O);
}
if(P!=null){this.setInsets(P);
}},properties:{baseImage:{check:w,nullable:true,apply:y}},members:{__mq:null,__mr:null,__ms:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mq;
},getMarkup:function(){if(this.__mq){return this.__mq;
}var a=qx.bom.element.Decoration;
var b=this.__mr;
var c=this.__ms;
var d=[];
d.push(D);
d.push(a.create(b.tl,o,{top:0,left:0}));
d.push(a.create(b.t,n,{top:0,left:c.left+r}));
d.push(a.create(b.tr,o,{top:0,right:0}));
d.push(a.create(b.bl,o,{bottom:0,left:0}));
d.push(a.create(b.b,n,{bottom:0,left:c.left+r}));
d.push(a.create(b.br,o,{bottom:0,right:0}));
d.push(a.create(b.l,m,{top:c.top+r,left:0}));
d.push(a.create(b.c,J,{top:c.top+r,left:c.left+r}));
d.push(a.create(b.r,m,{top:c.top+r,right:0}));
d.push(K);
return this.__mq=d.join(x);
},resize:function(e,f,g){var h=this.__ms;
var innerWidth=f-h.left-h.right;
var innerHeight=g-h.top-h.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}e.style.width=f+r;
e.style.height=g+r;
e.childNodes[1].style.width=innerWidth+r;
e.childNodes[4].style.width=innerWidth+r;
e.childNodes[7].style.width=innerWidth+r;
e.childNodes[6].style.height=innerHeight+r;
e.childNodes[7].style.height=innerHeight+r;
e.childNodes[8].style.height=innerHeight+r;

if(qx.core.Variant.isSet(I,t)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(f%2==1){e.childNodes[2].style.marginRight=p;
e.childNodes[5].style.marginRight=p;
e.childNodes[8].style.marginRight=p;
}else{e.childNodes[2].style.marginRight=q;
e.childNodes[5].style.marginRight=q;
e.childNodes[8].style.marginRight=q;
}
if(g%2==1){e.childNodes[3].style.marginBottom=p;
e.childNodes[4].style.marginBottom=p;
e.childNodes[5].style.marginBottom=p;
}else{e.childNodes[3].style.marginBottom=q;
e.childNodes[4].style.marginBottom=q;
e.childNodes[5].style.marginBottom=q;
}}}},tint:function(M,N){},_applyBaseImage:function(Q,R){if(qx.core.Variant.isSet(C,A)){if(this.__mq){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}var S=qx.util.ResourceManager.getInstance();

if(Q){var U=qx.util.AliasManager.getInstance();
var W=U.resolve(Q);
var X=/(.*)(\.[a-z]+)$/.exec(W);
var V=X[1];
var T=X[2];
var Y=this.__mr={tl:V+F+T,t:V+G+T,tr:V+l+T,bl:V+v+T,b:V+z+T,br:V+H+T,l:V+k+T,c:V+s+T,r:V+E+T};
this.__ms={top:S.getImageHeight(Y.t),bottom:S.getImageHeight(Y.b),left:S.getImageWidth(Y.l),right:S.getImageWidth(Y.r)};
}}},destruct:function(){this._disposeFields(j,u,i,L);
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g='<div style="',f='border:',e="1px solid ",d="",c=";",b="px",a='</div>',y="qx.ui.decoration.Beveled",x="__insets",w="qx.debug",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="position:absolute;top:1px;left:1px;",r="__mt",q='border-left:',p='border-top:',n="Number",o='<div style="position:absolute;top:1px;left:0px;',l='position:absolute;top:0px;left:1px;',m='<div style="overflow:hidden;font-size:0;line-height:0;">',k="on";
qx.Class.define(y,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(R,S,T){arguments.callee.base.call(this);
if(R!=null){this.setOuterColor(R);
}
if(S!=null){this.setInnerColor(S);
}
if(T!=null){this.setInnerOpacity(T);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:n,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__mt:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__mt;
},_applyStyle:function(){if(qx.core.Variant.isSet(w,k)){if(this.__mt){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__mt){return this.__mt;
}var K=qx.theme.manager.Color.getInstance();
var L=[];
var N=e+K.resolve(this.getOuterColor())+c;
var M=e+K.resolve(this.getInnerColor())+c;
L.push(m);
L.push(g);
L.push(f,N);
L.push(qx.bom.element.Opacity.compile(0.35));
L.push(i);
L.push(o);
L.push(q,N);
L.push(t,N);
L.push(i);
L.push(g);
L.push(l);
L.push(p,N);
L.push(u,N);
L.push(i);
L.push(this._generateBackgroundMarkup(s));
L.push(v);
L.push(f,M);
L.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
L.push(i);
L.push(a);
return this.__mt=L.join(d);
},resize:function(z,A,B){if(A<4){A=4;
}
if(B<4){B=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=A-2;
var outerHeight=B-2;
var H=outerWidth;
var G=outerHeight;
var innerWidth=A-4;
var innerHeight=B-4;
}else{var outerWidth=A;
var outerHeight=B;
var H=A-2;
var G=B-2;
var innerWidth=H;
var innerHeight=G;
}var J=b;
var F=z.childNodes[0].style;
F.width=outerWidth+J;
F.height=outerHeight+J;
var E=z.childNodes[1].style;
E.width=outerWidth+J;
E.height=G+J;
var D=z.childNodes[2].style;
D.width=H+J;
D.height=outerHeight+J;
var C=z.childNodes[3].style;
C.width=H+J;
C.height=G+J;
var I=z.childNodes[4].style;
I.width=innerWidth+J;
I.height=innerHeight+J;
},tint:function(O,P){var Q=qx.theme.manager.Color.getInstance();

if(P==null){P=this.getBackgroundColor();
}O.childNodes[3].style.backgroundColor=Q.resolve(P)||d;
}},destruct:function(){this._disposeFields(r,x);
}});
})();
(function(){var z="_applyStyle",y="solid",x="Color",w="double",v="px ",u="dotted",t="_applyWidth",s="dashed",r="Number",q=" ",bb=";",ba="qx.debug",Y="shorthand",X="on",W="px",V="widthTop",U="styleRight",T="styleLeft",S="widthLeft",R="widthBottom",G="",H="styleTop",E="colorBottom",F="styleBottom",C="widthRight",D="colorLeft",A="colorRight",B="colorTop",I="border-left:",J="scale",M="position:absolute;top:0;left:0;",L="__mu",O="border-top:",N="border-bottom:",Q="border-right:",P="qx.ui.decoration.Single",K="__insets";
qx.Class.define(P,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(f,g,h){arguments.callee.base.call(this);
if(f!=null){this.setWidth(f);
}
if(g!=null){this.setStyle(g);
}
if(h!=null){this.setColor(h);
}},properties:{widthTop:{check:r,init:0,apply:t},widthRight:{check:r,init:0,apply:t},widthBottom:{check:r,init:0,apply:t},widthLeft:{check:r,init:0,apply:t},styleTop:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleRight:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleBottom:{nullable:true,check:[y,u,s,w],init:y,apply:z},styleLeft:{nullable:true,check:[y,u,s,w],init:y,apply:z},colorTop:{nullable:true,check:x,apply:z},colorRight:{nullable:true,check:x,apply:z},colorBottom:{nullable:true,check:x,apply:z},colorLeft:{nullable:true,check:x,apply:z},backgroundColor:{check:x,nullable:true,apply:z},left:{group:[S,T,D]},right:{group:[C,U,A]},top:{group:[V,H,B]},bottom:{group:[R,F,E]},width:{group:[V,C,R,S],mode:Y},style:{group:[H,U,F,T],mode:Y},color:{group:[B,A,E,D],mode:Y}},members:{__mu:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__mu;
},getMarkup:function(i){if(this.__mu){return this.__mu;
}var j=qx.theme.manager.Color.getInstance();
var k=G;
var m=this.getWidthTop();

if(m>0){k+=O+m+v+this.getStyleTop()+q+j.resolve(this.getColorTop())+bb;
}var m=this.getWidthRight();

if(m>0){k+=Q+m+v+this.getStyleRight()+q+j.resolve(this.getColorRight())+bb;
}var m=this.getWidthBottom();

if(m>0){k+=N+m+v+this.getStyleBottom()+q+j.resolve(this.getColorBottom())+bb;
}var m=this.getWidthLeft();

if(m>0){k+=I+m+v+this.getStyleLeft()+q+j.resolve(this.getColorLeft())+bb;
}if(qx.core.Variant.isSet(ba,X)){if(k.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}k+=M;
var l=this._generateBackgroundMarkup(k);
return this.__mu=l;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==J;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getInsets();
b-=d.left+d.right;
c-=d.top+d.bottom;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+W;
a.style.height=c+W;
},tint:function(n,o){var p=qx.theme.manager.Color.getInstance();

if(o==null){o=this.getBackgroundColor();
}n.style.backgroundColor=p.resolve(o)||G;
},_applyWidth:function(){if(qx.core.Variant.isSet(ba,X)){if(this.__mu){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(ba,X)){if(this.__mu){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this._disposeFields(L,K);
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bp="decoration/table/header-cell.png",bo="decoration/form/input.png",bn="#f8f8f8",bm="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bl="#b6b6b6",bk="background-pane",bj="repeat-y",bi="decoration/form/input-focused.png",bh="border-input",bg="decoration/scrollbar/scrollbar-button-bg-vertical.png",t="decoration/tabview/tab-button-top-active.png",u="decoration/form/button-c.png",r="decoration/scrollbar/scrollbar-bg-vertical.png",s="decoration/form/button.png",p="decoration/form/button-checked.png",q="decoration/tabview/tab-button-left-inactive.png",n="decoration/groupbox/groupbox.png",o="#FAFAFA",A="decoration/pane/pane.png",B="decoration/menu/background.png",L="decoration/toolbar/toolbar-part.gif",I="decoration/tabview/tab-button-top-inactive.png",T="decoration/menu/bar-background.png",O="center",bc="decoration/tabview/tab-button-bottom-active.png",Y="decoration/form/button-hovered.png",E="decoration/form/tooltip-error-arrow.png",bf="decoration/window/captionbar-inactive.png",be="qx/decoration/Modern",bd="decoration/window/statusbar.png",D="border-focused",G="decoration/selection.png",H="table-focus-indicator",K="#F2F2F2",M="decoration/form/button-checked-c.png",P="decoration/scrollbar/scrollbar-bg-horizontal.png",V="qx.theme.modern.Decoration",bb="#f4f4f4",v="decoration/shadow/shadow-small.png",w="decoration/app-header.png",F="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",W="decoration/tabview/tab-button-right-active.png",N="decoration/form/button-pressed.png",U="no-repeat",a="decoration/window/captionbar-active.png",ba="decoration/tabview/tab-button-left-active.png",x="background-splitpane",y="decoration/form/button-checked-focused.png",J="#C5C5C5",b="decoration/toolbar/toolbar-gradient.png",c="decoration/tabview/tab-button-right-inactive.png",C="#b8b8b8",z="decoration/shadow/shadow.png";
qx.Theme.define(V,{aliases:{decoration:be},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:n}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:E,backgroundPositionY:O,backgroundRepeat:U,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:z,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:v,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:P,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:r,backgroundRepeat:bj}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bm,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bm,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bg,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bg,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:p,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:y,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bh,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bh,innerColor:D,backgroundImage:bi,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bi,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bo,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:b,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bl,innerColor:bn,backgroundImage:u,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bl,innerColor:bn,backgroundImage:M,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:C,colorRight:bb,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:L,backgroundRepeat:bj}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:F,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:t}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:I}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:W}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:c}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bk,width:3,color:x,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bk,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:H,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bp,backgroundRepeat:l,widthRight:1,colorRight:K,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:B,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:J,widthBottom:1,colorBottom:o}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:T,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:w,backgroundRepeat:l}}}});
})();
(function(){var m="Liberation Sans",l="Arial",k="Lucida Grande",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",d="monospace",a="Lucida Console",c="qx.theme.modern.Font",b="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l]},"bold":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l],bold:true},"small":{size:qx.bom.client.System.WINVISTA?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[h,i]:[j,m,l]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[a,e]:qx.bom.client.System.WINVISTA?[g]:[g,b,f,d]}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var fD="button-frame",fC="atom",fB="widget",fA="main",fz="button",fy="bold",fx="middle",fw="text-selected",fv="background-light",fu="image",ei="text-disabled",eh="groupbox",eg="cell",ef="border-invalid",ee="input",ed="input-disabled",ec="menu-button",eb="decoration/arrows/down.png",ea="input-focused-invalid",dY="toolbar-button",fK="spinner",fL="input-focused",fI="selected",fJ="popup",fG="tooltip",fH="list",fE="tree-item",fF="treevirtual-contract",fM="scrollbar",fN="datechooser/nav-button",fd="text-hovered",fc="center",ff="treevirtual-expand",fe="textfield",fh="label",fg="decoration/arrows/right.png",fj="background-application",fi="radiobutton",fb="invalid",fa="combobox",cl="right-top",cm="checkbox",cn="text-title",co="qx/static/blank.gif",cp="scrollbar/button",cq="right",cr="combobox/button",cs="icon/16/places/folder.png",ct="text-label",cu="decoration/tree/closed.png",gc="scrollbar-slider-horizontal",gb="white",ga="decoration/arrows/left.png",fY="button-focused",gg="text-light",gf="text-input",ge="slidebar/button-forward",gd="background-splitpane",gi=".png",gh="decoration/tree/open.png",dm="default",dn="decoration/arrows/down-small.png",dk="datechooser",dl="slidebar/button-backward",dr="selectbox",ds="treevirtual-folder",dp="shadow-popup",dq="icon/16/mimetypes/office-document.png",di="background-medium",dj="table",cO="decoration/form/",cN="",cQ="-invalid",cP="icon/16/places/folder-open.png",cK="button-checked",cJ="decoration/window/maximize-active-hovered.png",cM="radiobutton-hovered",cL="decoration/cursors/",cI="slidebar",cH="tooltip-error-arrow",dy="table-scroller-focus-indicator",dz="move-frame",dA="nodrop",dB="decoration/table/boolean-true.png",du="table-header-cell",dv="menu",dw="app-header",dx="row-layer",dC="text-inactive",dD="move",db="radiobutton-checked-focused",da="decoration/window/restore-active-hovered.png",cY="shadow-window",cX="table-column-button",cW="right.png",cV="tabview-page-button-bottom-inactive",cU="tooltip-error",cT="window-statusbar",df="button-hovered",de="decoration/scrollbar/scrollbar-",dE="background-tip",dF="scrollbar-slider-horizontal-disabled",dG="table-scroller-header",dH="radiobutton-disabled",dI="button-pressed",dJ="table-pane",dK="decoration/window/close-active.png",dL="tabview-page-button-left-active",dM="checkbox-hovered",dN="button-invalid-shadow",eq="checkbox-checked",ep="decoration/window/minimize-active-hovered.png",eo="menubar",en="icon/16/actions/dialog-cancel.png",eu="tabview-page-button-top-inactive",et="tabview-page-button-left-inactive",es="toolbar-button-checked",er="decoration/tree/open-selected.png",ey="radiobutton-checked",ex="decoration/window/minimize-inactive.png",eV="icon/16/apps/office-calendar.png",eW="group",eT="tabview-page-button-right-inactive",eU="decoration/window/minimize-active.png",eR="decoration/window/restore-inactive.png",eS="checkbox-checked-focused",eP="splitpane",eQ="combobox/textfield",eX="button-preselected-focused",eY="decoration/window/close-active-hovered.png",fn="qx/icon/Tango/16/actions/window-close.png",fm="checkbox-pressed",fp="button-disabled",fo="border-separator",fr="decoration/window/maximize-inactive.png",fq="icon/22/places/folder-open.png",ft="scrollarea",fs="scrollbar-vertical",fl="decoration/toolbar/toolbar-handle-knob.gif",fk="icon/22/mimetypes/office-document.png",fU="button-preselected",fV="button-checked-focused",fW="up.png",fX="decoration/tree/closed-selected.png",fQ="qx.theme.modern.Appearance",fR="text-active",fS="checkbox-disabled",fT="toolbar-button-hovered",fO="progressive-table-header",fP="decoration/menu/radiobutton.gif",ck="decoration/arrows/forward.png",cj="decoration/table/descending.png",ci="window-captionbar-active",ch="checkbox-checked-hovered",cg="scrollbar-slider-vertical",cf="toolbar",ce="alias",cd="decoration/window/restore-active.png",cc="decoration/table/boolean-false.png",cb="checkbox-checked-disabled",cx="icon/32/mimetypes/office-document.png",cy="radiobutton-checked-disabled",cv="tabview-pane",cw="decoration/arrows/rewind.png",cB="checkbox-focused",cC="top",cz="#EEE",cA="icon/16/actions/dialog-ok.png",cE="radiobutton-checked-hovered",cF="table-header-cell-hovered",eC="window",ew="text-gray",eJ="decoration/menu/radiobutton-invert.gif",eF="text-placeholder",el="slider",ej="decoration/table/select-column-order.png",cS="down.png",em="tabview-page-button-top-active",dd="icon/32/places/folder-open.png",dc="icon/22/places/folder.png",dQ="decoration/window/maximize-active.png",dR="checkbox-checked-pressed",dS="decoration/window/close-inactive.png",dT="toolbar-part",dU="decoration/splitpane/knob-vertical.png",dV=".gif",dW="decoration/menu/checkbox-invert.gif",dX="decoration/arrows/up.png",dO="radiobutton-checked-pressed",dP="table-statusbar",ek="radiobutton-pressed",eI="window-captionbar-inactive",eH="copy",eG="radiobutton-focused",eN="decoration/menu/checkbox.gif",eM="decoration/splitpane/knob-horizontal.png",eL="icon/32/places/folder.png",eK="toolbar-separator",eE="tabview-page-button-bottom-active",eD="decoration/arrows/up-small.png",cD="decoration/table/ascending.png",dh="small",dg="tabview-page-button-right-active",ev="-disabled",dt="scrollbar-horizontal",eB="progressive-table-header-cell",eA="menu-separator",ez="pane",cR="decoration/arrows/right-invert.png",eO="left.png",cG="icon/16/actions/view-refresh.png";
qx.Theme.define(fQ,{appearances:{"widget":{},"root":{style:function(s){return {backgroundColor:fj,textColor:ct,font:dm};
}},"label":{style:function(hf){return {textColor:hf.disabled?ei:undefined};
}},"move-frame":{style:function(bV){return {decorator:fA};
}},"resize-frame":dz,"dragdrop-cursor":{style:function(gX){var gY=dA;

if(gX.copy){gY=eH;
}else if(gX.move){gY=dD;
}else if(gX.alias){gY=ce;
}return {source:cL+gY+dV,position:cl,offset:[2,16,2,6]};
}},"image":{style:function(hn){return {opacity:!hn.replacement&&hn.disabled?0.3:1};
}},"atom":{},"atom/label":fh,"atom/icon":fu,"popup":{style:function(i){return {decorator:fA,backgroundColor:fv,shadow:dp};
}},"button-frame":{alias:fC,style:function(O){var Q,P;

if(O.checked&&O.focused&&!O.inner){Q=fV;
P=undefined;
}else if(O.disabled){Q=fp;
P=undefined;
}else if(O.pressed){Q=dI;
P=fd;
}else if(O.checked){Q=cK;
P=undefined;
}else if(O.hovered){Q=df;
P=fd;
}else if(O.preselected&&O.focused&&!O.inner){Q=eX;
P=fd;
}else if(O.preselected){Q=fU;
P=fd;
}else if(O.focused&&!O.inner){Q=fY;
P=undefined;
}else{Q=fz;
P=undefined;
}return {decorator:Q,textColor:P,shadow:O.invalid&&!O.disabled?dN:undefined};
}},"button-frame/image":{style:function(U){return {opacity:!U.replacement&&U.disabled?0.5:1};
}},"button":{alias:fD,include:fD,style:function(bo){return {padding:[2,8],center:true};
}},"splitbutton":{},"splitbutton/button":fz,"splitbutton/arrow":{alias:fz,include:fz,style:function(hj){return {icon:eb,padding:2,marginLeft:1};
}},"checkbox":{alias:fC,style:function(hN){var hP;

if(hN.checked&&hN.focused){hP=eS;
}else if(hN.checked&&hN.disabled){hP=cb;
}else if(hN.checked&&hN.pressed){hP=dR;
}else if(hN.checked&&hN.hovered){hP=ch;
}else if(hN.checked){hP=eq;
}else if(hN.disabled){hP=fS;
}else if(hN.focused){hP=cB;
}else if(hN.pressed){hP=fm;
}else if(hN.hovered){hP=dM;
}else{hP=cm;
}var hO=hN.invalid&&!hN.disabled?cQ:cN;
return {icon:cO+hP+hO+gi,gap:6};
}},"radiobutton":{alias:fC,style:function(m){var o;

if(m.checked&&m.focused){o=db;
}else if(m.checked&&m.disabled){o=cy;
}else if(m.checked&&m.pressed){o=dO;
}else if(m.checked&&m.hovered){o=cE;
}else if(m.checked){o=ey;
}else if(m.disabled){o=dH;
}else if(m.focused){o=eG;
}else if(m.pressed){o=ek;
}else if(m.hovered){o=cM;
}else{o=fi;
}var n=m.invalid&&!m.disabled?cQ:cN;
return {icon:cO+o+n+gi,gap:6};
}},"textfield":{style:function(bf){var bk;
var bi=!!bf.focused;
var bj=!!bf.invalid;
var bg=!!bf.disabled;

if(bi&&bj&&!bg){bk=ea;
}else if(bi&&!bj&&!bg){bk=fL;
}else if(bg){bk=ed;
}else if(!bi&&bj&&!bg){bk=ef;
}else{bk=ee;
}var bh;

if(bf.disabled){bh=ei;
}else if(bf.showingPlaceholder){bh=eF;
}else{bh=gf;
}return {decorator:bk,padding:[2,4,1],textColor:bh};
}},"textarea":{include:fe,style:function(gu){return {padding:4};
}},"spinner":{style:function(I){var M;
var K=!!I.focused;
var L=!!I.invalid;
var J=!!I.disabled;

if(K&&L&&!J){M=ea;
}else if(K&&!L&&!J){M=fL;
}else if(J){M=ed;
}else if(!K&&L&&!J){M=ef;
}else{M=ee;
}return {decorator:M};
}},"spinner/textfield":{style:function(gp){return {marginRight:2,padding:[2,4,1],textColor:gp.disabled?ei:gf};
}},"spinner/upbutton":{alias:fD,include:fD,style:function(br){return {icon:eD,padding:br.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:fD,include:fD,style:function(bC){return {icon:dn,padding:bC.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":fa,"datefield/button":{alias:cr,include:cr,style:function(bH){return {icon:eV,padding:[0,3],decorator:undefined};
}},"datefield/textfield":eQ,"datefield/list":{alias:dk,include:dk,style:function(he){return {decorator:undefined};
}},"groupbox":{style:function(Y){return {legendPosition:cC};
}},"groupbox/legend":{alias:fC,style:function(G){return {padding:[1,0,1,4],textColor:G.invalid?fb:cn,font:fy};
}},"groupbox/frame":{style:function(gt){return {padding:12,decorator:eW};
}},"check-groupbox":eh,"check-groupbox/legend":{alias:cm,include:cm,style:function(gl){return {padding:[1,0,1,4],textColor:gl.invalid?fb:cn,font:fy};
}},"radio-groupbox":eh,"radio-groupbox/legend":{alias:fi,include:fi,style:function(hp){return {padding:[1,0,1,4],textColor:hp.invalid?fb:cn,font:fy};
}},"scrollarea":{style:function(hG){return {minWidth:64,minHeight:64};
}},"scrollarea/corner":{style:function(hM){return {backgroundColor:fj};
}},"scrollarea/pane":fB,"scrollarea/scrollbar-x":fM,"scrollarea/scrollbar-y":fM,"scrollbar":{style:function(ba){return {width:ba.horizontal?undefined:16,height:ba.horizontal?16:undefined,decorator:ba.horizontal?dt:fs,padding:1};
}},"scrollbar/slider":{alias:el,style:function(gE){return {padding:gE.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:fD,style:function(gv){var gw=gv.horizontal?gc:cg;

if(gv.disabled){gw+=ev;
}return {decorator:gw,minHeight:gv.horizontal?undefined:14,minWidth:gv.horizontal?14:undefined};
}},"scrollbar/button":{alias:fD,include:fD,style:function(bP){var bQ=de;

if(bP.left){bQ+=eO;
}else if(bP.right){bQ+=cW;
}else if(bP.up){bQ+=fW;
}else{bQ+=cS;
}
if(bP.left||bP.right){return {padding:[0,0,0,bP.left?3:4],icon:bQ,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bQ,width:14,height:15};
}}},"scrollbar/button-begin":cp,"scrollbar/button-end":cp,"slider":{style:function(gG){var gK;
var gI=!!gG.focused;
var gJ=!!gG.invalid;
var gH=!!gG.disabled;

if(gI&&gJ&&!gH){gK=ea;
}else if(gI&&!gJ&&!gH){gK=fL;
}else if(gH){gK=ed;
}else if(!gI&&gJ&&!gH){gK=ef;
}else{gK=ee;
}return {decorator:gK};
}},"slider/knob":{include:fD,style:function(bv){return {decorator:bv.disabled?dF:gc,shadow:undefined,height:14,width:14};
}},"list":{alias:ft,style:function(bK){var bO;
var bM=!!bK.focused;
var bN=!!bK.invalid;
var bL=!!bK.disabled;

if(bM&&bN&&!bL){bO=ea;
}else if(bM&&!bN&&!bL){bO=fL;
}else if(bL){bO=ed;
}else if(!bM&&bN&&!bL){bO=ef;
}else{bO=ee;
}return {backgroundColor:fv,decorator:bO};
}},"list/pane":fB,"listitem":{alias:fC,style:function(hb){return {padding:4,textColor:hb.selected?fw:undefined,decorator:hb.selected?fI:undefined};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fD,include:fD,style:function(bl){return {padding:5,center:true,icon:bl.vertical?eb:fg};
}},"slidebar/button-backward":{alias:fD,include:fD,style:function(gT){return {padding:5,center:true,icon:gT.vertical?dX:ga};
}},"tabview":{style:function(hJ){return {contentPadding:16};
}},"tabview/bar":{alias:cI,style:function(hq){var hr={marginBottom:hq.barTop?-1:0,marginTop:hq.barBottom?-4:0,marginLeft:hq.barRight?-3:0,marginRight:hq.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(hq.barTop||hq.barBottom){hr.paddingLeft=5;
hr.paddingRight=7;
}else{hr.paddingTop=5;
hr.paddingBottom=7;
}return hr;
}},"tabview/bar/button-forward":{include:ge,alias:ge,style:function(hC){if(hC.barTop||hC.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dl,alias:dl,style:function(gj){if(gj.barTop||gj.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gB){return {decorator:cv,minHeight:100,marginBottom:gB.barBottom?-1:0,marginTop:gB.barTop?-1:0,marginLeft:gB.barLeft?-1:0,marginRight:gB.barRight?-1:0};
}},"tabview-page":fB,"tabview-page/button":{alias:fC,style:function(hu){var hA,hw=0;
var hz=0,hv=0,hx=0,hy=0;

if(hu.checked){if(hu.barTop){hA=em;
hw=[6,14];
hx=hu.firstTab?0:-5;
hy=hu.lastTab?0:-5;
}else if(hu.barBottom){hA=eE;
hw=[6,14];
hx=hu.firstTab?0:-5;
hy=hu.lastTab?0:-5;
}else if(hu.barRight){hA=dg;
hw=[6,13];
hz=hu.firstTab?0:-5;
hv=hu.lastTab?0:-5;
}else{hA=dL;
hw=[6,13];
hz=hu.firstTab?0:-5;
hv=hu.lastTab?0:-5;
}}else{if(hu.barTop){hA=eu;
hw=[4,10];
hz=4;
hx=hu.firstTab?5:1;
hy=1;
}else if(hu.barBottom){hA=cV;
hw=[4,10];
hv=4;
hx=hu.firstTab?5:1;
hy=1;
}else if(hu.barRight){hA=eT;
hw=[4,10];
hy=5;
hz=hu.firstTab?5:1;
hv=1;
hx=1;
}else{hA=et;
hw=[4,10];
hx=5;
hz=hu.firstTab?5:1;
hv=1;
hy=1;
}}return {zIndex:hu.checked?10:5,decorator:hA,padding:hw,marginTop:hz,marginBottom:hv,marginLeft:hx,marginRight:hy,textColor:hu.checked?fR:dC};
}},"tabview-page/button/close-button":{alias:fC,style:function(hh){return {icon:fn};
}},"toolbar":{style:function(R){return {decorator:cf,spacing:2};
}},"toolbar/part":{style:function(ht){return {decorator:dT,spacing:2};
}},"toolbar/part/container":{style:function(N){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(d){return {source:fl,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:fC,style:function(hc){return {marginTop:2,marginBottom:2,padding:(hc.pressed||hc.checked||hc.hovered)&&!hc.disabled||(hc.disabled&&hc.checked)?3:5,decorator:hc.pressed||(hc.checked&&!hc.hovered)||(hc.checked&&hc.disabled)?es:hc.hovered&&!hc.disabled?fT:undefined};
}},"toolbar-menubutton":{alias:dY,include:dY,style:function(c){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:fu,include:fu,style:function(bR){return {source:dn};
}},"toolbar-splitbutton":{style:function(S){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:dY,include:dY,style:function(e){return {icon:eb,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:dY,include:dY,style:function(hi){return {padding:hi.pressed||hi.checked?1:hi.hovered?1:3,icon:eb,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(W){return {decorator:eK,margin:7};
}},"tree":fH,"tree-item":{style:function(bU){return {padding:[2,6],textColor:bU.selected?fw:undefined,decorator:bU.selected?fI:undefined};
}},"tree-item/icon":{include:fu,style:function(r){return {paddingRight:5};
}},"tree-item/label":fh,"tree-item/open":{include:fu,style:function(gQ){var gR;

if(gQ.selected&&gQ.opened){gR=er;
}else if(gQ.selected&&!gQ.opened){gR=fX;
}else if(gQ.opened){gR=gh;
}else{gR=cu;
}return {padding:[0,5,0,2],source:gR};
}},"tree-folder":{include:fE,alias:fE,style:function(C){var D;

if(C.small){D=C.opened?cP:cs;
}else if(C.large){D=C.opened?dd:eL;
}else{D=C.opened?fq:dc;
}return {icon:D};
}},"tree-file":{include:fE,alias:fE,style:function(gs){return {icon:gs.small?dq:gs.large?cx:fk};
}},"treevirtual":dj,"treevirtual-folder":{style:function(gA){return {icon:gA.opened?cP:cs};
}},"treevirtual-file":{include:ds,alias:ds,style:function(gV){return {icon:dq};
}},"treevirtual-line":{style:function(bI){return {icon:co};
}},"treevirtual-contract":{style:function(hm){return {icon:gh,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hB){return {icon:cu,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":fF,"treevirtual-only-expand":ff,"treevirtual-start-contract":fF,"treevirtual-start-expand":ff,"treevirtual-end-contract":fF,"treevirtual-end-expand":ff,"treevirtual-cross-contract":fF,"treevirtual-cross-expand":ff,"treevirtual-end":{style:function(bt){return {icon:co};
}},"treevirtual-cross":{style:function(hs){return {icon:co};
}},"tooltip":{include:fJ,style:function(gF){return {backgroundColor:dE,padding:[1,3,2,3],offset:[5,5,20,5]};
}},"tooltip/atom":fC,"tooltip-error":{include:fG,style:function(q){return {textColor:fw,placeMethod:fB,offsetRight:15,position:cl,showTimeout:100,hideTimeout:10000,decorator:cU,shadow:cH,font:fy};
}},"tooltip-error/atom":fC,"window":{style:function(gC){return {shadow:cY,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(hl){return {decorator:eC};
}},"window/captionbar":{style:function(gD){return {decorator:gD.active?ci:eI,textColor:gD.active?gb:ew,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(gS){return {margin:[5,0,3,6]};
}},"window/title":{style:function(A){return {alignY:fx,font:fy,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:fC,style:function(bu){return {icon:bu.active?bu.hovered?ep:eU:ex,margin:[4,8,2,0]};
}},"window/restore-button":{alias:fC,style:function(gx){return {icon:gx.active?gx.hovered?da:cd:eR,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:fC,style:function(bs){return {icon:bs.active?bs.hovered?cJ:dQ:fr,margin:[4,8,2,0]};
}},"window/close-button":{alias:fC,style:function(u){return {icon:u.active?u.hovered?eY:dK:dS,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(gP){return {padding:[2,6],decorator:cT,minHeight:18};
}},"window/statusbar-text":{style:function(ho){return {font:dh};
}},"iframe":{style:function(gz){return {decorator:fA};
}},"resizer":{style:function(bB){return {decorator:ez};
}},"splitpane":{style:function(bp){return {decorator:eP};
}},"splitpane/splitter":{style:function(gU){return {width:gU.horizontal?3:undefined,height:gU.vertical?3:undefined,backgroundColor:gd};
}},"splitpane/splitter/knob":{style:function(l){return {source:l.horizontal?eM:dU};
}},"splitpane/slider":{style:function(H){return {width:H.horizontal?3:undefined,height:H.vertical?3:undefined,backgroundColor:gd};
}},"selectbox":{alias:fD,include:fD,style:function(hF){return {padding:[2,8]};
}},"selectbox/atom":fC,"selectbox/popup":fJ,"selectbox/list":{alias:fH},"selectbox/arrow":{include:fu,style:function(bF){return {source:eb,paddingLeft:5};
}},"datechooser":{style:function(v){var z;
var x=!!v.focused;
var y=!!v.invalid;
var w=!!v.disabled;

if(x&&y&&!w){z=ea;
}else if(x&&!y&&!w){z=fL;
}else if(w){z=ed;
}else if(!x&&y&&!w){z=ef;
}else{z=ee;
}return {padding:2,decorator:z,backgroundColor:fv};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:fD,alias:fD,style:function(gM){var gN={padding:[2,4],shadow:undefined};

if(gM.lastYear){gN.icon=cw;
gN.marginRight=1;
}else if(gM.lastMonth){gN.icon=ga;
}else if(gM.nextYear){gN.icon=ck;
gN.marginLeft=1;
}else if(gM.nextMonth){gN.icon=fg;
}return gN;
}},"datechooser/last-year-button-tooltip":fG,"datechooser/last-month-button-tooltip":fG,"datechooser/next-year-button-tooltip":fG,"datechooser/next-month-button-tooltip":fG,"datechooser/last-year-button":fN,"datechooser/last-month-button":fN,"datechooser/next-month-button":fN,"datechooser/next-year-button":fN,"datechooser/month-year-label":{style:function(hL){return {font:fy,textAlign:fc,textColor:hL.disabled?ei:undefined};
}},"datechooser/date-pane":{style:function(gk){return {textColor:gk.disabled?ei:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(bY){return {textColor:bY.disabled?ei:bY.weekend?gg:undefined,textAlign:fc,paddingTop:2,backgroundColor:di};
}},"datechooser/week":{style:function(bW){return {textAlign:fc,padding:[2,4],backgroundColor:di};
}},"datechooser/day":{style:function(be){return {textAlign:fc,decorator:be.disabled?undefined:be.selected?fI:undefined,textColor:be.disabled?ei:be.selected?fw:be.otherMonth?gg:undefined,font:be.today?fy:undefined,padding:[2,4]};
}},"combobox":{style:function(bw){var bA;
var by=!!bw.focused;
var bz=!!bw.invalid;
var bx=!!bw.disabled;

if(by&&bz&&!bx){bA=ea;
}else if(by&&!bz&&!bx){bA=fL;
}else if(bx){bA=ed;
}else if(!by&&bz&&!bx){bA=ef;
}else{bA=ee;
}return {decorator:bA};
}},"combobox/popup":fJ,"combobox/list":{alias:fH},"combobox/button":{include:fD,alias:fD,style:function(hH){var hI={icon:eb,padding:2};

if(hH.selected){hI.decorator=fY;
}return hI;
}},"combobox/textfield":{include:fe,style:function(hK){return {decorator:undefined};
}},"menu":{style:function(g){var h={decorator:dv,shadow:dp,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4};

if(g.submenu){h.position=cl;
h.offset=[-2,-3];
}return h;
}},"menu-separator":{style:function(bq){return {height:0,decorator:eA,margin:[4,2]};
}},"menu-button":{alias:fC,style:function(gO){return {decorator:gO.selected?fI:undefined,textColor:gO.selected?fw:undefined,padding:[4,6]};
}},"menu-button/icon":{include:fu,style:function(bd){return {alignY:fx};
}},"menu-button/label":{include:fh,style:function(gm){return {alignY:fx,padding:1};
}},"menu-button/shortcut":{include:fh,style:function(bD){return {alignY:fx,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(bT){return {source:bT.selected?cR:fg,alignY:fx};
}},"menu-checkbox":{alias:ec,include:ec,style:function(a){return {icon:!a.checked?undefined:a.selected?dW:eN};
}},"menu-radiobutton":{alias:ec,include:ec,style:function(gn){return {icon:!gn.checked?undefined:gn.selected?eJ:fP};
}},"menubar":{style:function(T){return {decorator:eo};
}},"menubar-button":{alias:fC,style:function(go){return {decorator:go.pressed||go.hovered?fI:undefined,textColor:go.pressed||go.hovered?fw:undefined,padding:[3,8]};
}},"colorselector":fB,"colorselector/control-bar":fB,"colorselector/control-pane":fB,"colorselector/visual-pane":eh,"colorselector/preset-grid":fB,"colorselector/colorbucket":{style:function(gL){return {decorator:fA,width:16,height:16};
}},"colorselector/preset-field-set":eh,"colorselector/input-field-set":eh,"colorselector/preview-field-set":eh,"colorselector/hex-field-composite":fB,"colorselector/hex-field":fe,"colorselector/rgb-spinner-composite":fB,"colorselector/rgb-spinner-red":fK,"colorselector/rgb-spinner-green":fK,"colorselector/rgb-spinner-blue":fK,"colorselector/hsb-spinner-composite":fB,"colorselector/hsb-spinner-hue":fK,"colorselector/hsb-spinner-saturation":fK,"colorselector/hsb-spinner-brightness":fK,"colorselector/preview-content-old":{style:function(ca){return {decorator:fA,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(V){return {decorator:fA,backgroundColor:fv,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(k){return {decorator:fA,margin:5};
}},"colorselector/brightness-field":{style:function(bc){return {decorator:fA,margin:[5,7]};
}},"colorselector/hue-saturation-pane":fB,"colorselector/hue-saturation-handle":fB,"colorselector/brightness-pane":fB,"colorselector/brightness-handle":fB,"colorpopup":{alias:fJ,include:fJ,style:function(hd){return {padding:5,backgroundColor:fj};
}},"colorpopup/field":{style:function(gr){return {decorator:fA,margin:2,width:14,height:14,backgroundColor:fv};
}},"colorpopup/selector-button":fz,"colorpopup/auto-button":fz,"colorpopup/preview-pane":eh,"colorpopup/current-preview":{style:function(E){return {height:20,padding:4,marginLeft:4,decorator:fA,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hk){return {height:20,padding:4,marginRight:4,decorator:fA,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:fz,include:fz,style:function(X){return {icon:cA};
}},"colorpopup/colorselector-cancelbutton":{alias:fz,include:fz,style:function(p){return {icon:en};
}},"table":{alias:fB,style:function(F){return {decorator:dj};
}},"table-header":{},"table/statusbar":{style:function(gq){return {decorator:dP,padding:[0,2]};
}},"table/column-button":{alias:fD,style:function(bG){return {decorator:cX,padding:3,icon:ej};
}},"table-column-reset-button":{include:ec,alias:ec,style:function(){return {icon:cG};
}},"table-scroller":fB,"table-scroller/scrollbar-x":fM,"table-scroller/scrollbar-y":fM,"table-scroller/header":{style:function(B){return {decorator:dG};
}},"table-scroller/pane":{style:function(hD){return {backgroundColor:dJ};
}},"table-scroller/focus-indicator":{style:function(b){return {decorator:dy};
}},"table-scroller/resize-line":{style:function(j){return {backgroundColor:fo,width:2};
}},"table-header-cell":{alias:fC,style:function(gy){return {minWidth:13,minHeight:20,padding:gy.hovered?[3,4,2,4]:[3,4],decorator:gy.hovered?cF:du,sortIcon:gy.sorted?(gy.sortedAscending?cD:cj):undefined};
}},"table-header-cell/label":{style:function(bm){return {minWidth:0,alignY:fx,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(bE){return {alignY:fx,alignX:cq};
}},"table-header-cell/icon":{style:function(bb){return {minWidth:0,alignY:fx,paddingRight:5};
}},"table-editor-textfield":{include:fe,style:function(bn){return {decorator:undefined,padding:[2,2],backgroundColor:fv};
}},"table-editor-selectbox":{include:dr,alias:dr,style:function(bS){return {padding:[0,2],backgroundColor:fv};
}},"table-editor-combobox":{include:fa,alias:fa,style:function(bJ){return {decorator:undefined,backgroundColor:fv};
}},"progressive-table-header":{alias:fB,style:function(hE){return {decorator:fO};
}},"progressive-table-header-cell":{alias:fC,style:function(gW){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:eB};
}},"app-header":{style:function(t){return {font:fy,textColor:fw,padding:[8,12],decorator:dw};
}},"virtual-list":fH,"virtual-list/row-layer":dx,"row-layer":{style:function(hg){return {colorEven:gb,colorOdd:cz};
}},"column-layer":fB,"cell":{style:function(ha){return {textColor:ha.selected?fw:ct,padding:[3,6],font:dm};
}},"cell-string":eg,"cell-number":{include:eg,style:function(bX){return {textAlign:cq};
}},"cell-image":eg,"cell-boolean":{include:eg,style:function(f){return {iconTrue:dB,iconFalse:cc};
}},"cell-atom":eg,"cell-date":eg,"cell-html":eg}});
})();
(function(){var d="tree",c="main",b="Demo browser",a="demobrowser.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,title:b,appearances:{"demo-tree":{alias:d,include:d,style:function(){return {width:250,decorator:c};
}}}});
})();
(function(){var b="demobrowser.Theme",a="Demo browser";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,icon:qx.theme.icon.Tango,appearance:demobrowser.Appearance}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

})();