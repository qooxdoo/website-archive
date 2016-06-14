if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application": "demobrowser.Application", "qx.theme": "demobrowser.Theme", "qx.version": "0.8.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {};
for (var k in variants) qxvariants[k] = variants[k];

if (!window.qxlibraries) qxlibraries = {};
var libinfo = {"qx": {"resourceUri": "resource", "version": "trunk"}, "demobrowser": {"resourceUri": "resource", "version": "trunk"}};
for (var k in libinfo) qxlibraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -238, 0], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/static/blank.html": "qx", "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -51, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "demobrowser/demo/icons/format-justify-left.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "demobrowser/demo/icons/multimedia-player-disabled.png": [128, 128, "png", "demobrowser"], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "demobrowser/css/style.css": "demobrowser", "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -105, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -38, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/icon/Tango/22/actions/go-previous.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "demobrowser/demo/icons/imicons/fabian_jakobs.png": [70, 70, "png", "demobrowser"], "qx/decoration/Modern/inputcheckradio-combined.png": [404, 14, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "demobrowser/demo/icons/format-justify-fill.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -112, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -44, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -280, 0], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -140, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/icon/Tango/22/actions/media-playback-stop.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -156, 0], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/icon/Tango/22/actions/go-next.png": [22, 22, "png", "qx"], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -142, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -162, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "demobrowser/demo/icons/imicons/status_offline.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -26, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -126, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -41, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -19, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -148, 0], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/icon/Tango/22/apps/office-spreadsheet.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -64, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -79, 0], "qx/static/blank.gif": [1, 1, "gif", "qx"], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "demobrowser/demo/icons/imicons/christian_schmidt.png": [52, 64, "png", "demobrowser"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -120, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "demobrowser/demo/icons/imicons/status_away.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -18, 0], "qx/icon/Tango/22/mimetypes/executable.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -56, 0], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -36, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "demobrowser/demo/icons/format-justify-center.png": [16, 16, "png", "demobrowser"], "demobrowser/demo/icons/imicons/jonathan_weiss.png": [218, 218, "png", "demobrowser"], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/icon/Tango/22/apps/internet-web-browser.png": [22, 22, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "demobrowser/demo/background/gradient.png": [250, 34, "png", "demobrowser"], "demobrowser/demo/icons/format-indent-less.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -132, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -66, 0], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "demobrowser/backend/remote_table.php": "demobrowser", "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "demobrowser/demo/background/gradient-pressed.png": [250, 18, "png", "demobrowser"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "demobrowser/demo/icons/multimedia-player.png": [128, 128, "png", "demobrowser"], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "demobrowser/demo/icons/graphics-viewer-document.png": [48, 48, "png", "demobrowser"], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "demobrowser/demo/icons/format-indent-more.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/icon/Tango/22/actions/edit-redo.png": [22, 22, "png", "qx"], "demobrowser/demo/icons/feed-reader.png": [48, 48, "png", "demobrowser"], "demobrowser/demo/icons/imicons/readme.txt": "demobrowser", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -266, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "demobrowser/demo/icons/imicons/status_online.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -46, 0], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -98, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/icon/Tango/22/actions/media-playback-start.png": [22, 22, "png", "qx"], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "demobrowser/demo/icons/imicons/martin_wittemann.png": [52, 52, "png", "demobrowser"], "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "demobrowser/demo/icons/format-justify-right.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -84, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "demobrowser/demo/icons/format.png": [96, 16, "png", "demobrowser"], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -95, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -13, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "demobrowser/demo/background/gradients.svg": "demobrowser", "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -152, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "demobrowser/demo/icons/imicons/status_busy.png": [16, 16, "png", "demobrowser"], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -252, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/icon/Tango/22/apps/utilities-log-viewer.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -8, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "demobrowser/css/sourceview.css": "demobrowser", "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -76, 0], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0], "qx/icon/Tango/22/apps/utilities-color-chooser.png": [22, 22, "png", "qx"]};
qx.$$translations = {"C": {}};
qx.$$locales = {"C": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "quotationStart": "“", "cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_day_abbreviated_mon": "Mon", "cldr_pm": "PM", "cldr_number_decimal_separator": ".", "alternateQuotationEnd": "’", "cldr_date_time_format_y": "yyyy", "cldr_day_narrow_sun": "S", "cldr_number_percent_format": "#,##0%", "cldr_month_narrow_12": "D", "quotationEnd": "”", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_day_narrow_sat": "S", "cldr_date_time_format_Md": "M/d", "cldr_date_format_medium": "MMM d, yyyy", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_wide_sat": "Saturday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_day_abbreviated_wed": "Wed", "alternateQuotationStart": "‘", "cldr_date_time_format_yQ": "Q yyyy", "cldr_day_narrow_wed": "W", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_wide_3": "March", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_month_wide_4": "April", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_narrow_fri": "F", "cldr_day_narrow_tue": "T", "cldr_date_time_format_ms": "mm:ss", "cldr_day_narrow_thu": "T", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_narrow_5": "M", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_am": "AM", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}}

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["script/demobrowser-0.js"]],
  boot : "boot"
};  

(function(){var f="[Class ",e="toString",d="qx.Bootstrap",c="]",b="Class",a=".";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return f+this.classname+c;
},createNamespace:function(name,o){var q=name.split(a);
var parent=window;
var p=q[0];

for(var i=0,r=q.length-1;i<r;i++,p=q[i]){if(!parent[p]){parent=parent[p]={};
}else{parent=parent[p];
}}parent[p]=o;
return p;
},define:function(name,g){if(!g){var g={statics:{}};
}var m;
var k=null;

if(g.members){m=g.construct||new Function;
var h=g.statics;

for(var j in h){m[j]=h[j];
}k=m.prototype;
var n=g.members;

for(var j in n){k[j]=n[j];
}}else{m=g.statics||{};
}var l=this.createNamespace(name,m);
m.name=m.classname=name;
m.basename=l;
m.$$type=b;
if(!m.hasOwnProperty(e)){m.toString=this.genericToString;
}if(g.defer){g.defer(m,k);
}qx.Bootstrap.$$registry[name]=g.statics;
}};
qx.Bootstrap.define(d,{statics:{LOADSTART:new Date,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var h="/",g="qx.util.ResourceManager",f="string";
qx.Bootstrap.define(g,{statics:{__a:qx.$$resources||{},has:function(p){return !!this.__a[p];
},getData:function(c){return this.__a[c]||null;
},getImageWidth:function(k){var l=this.__a[k];
return l?l[0]:null;
},getImageHeight:function(i){var j=this.__a[i];
return j?j[1]:null;
},getImageFormat:function(a){var b=this.__a[a];
return b?b[2]:null;
},isClippedImage:function(d){var e=this.__a[d];
return e&&e.length>4;
},toUri:function(m){if(m==null){return m;
}var n=this.__a[m];

if(!n){return m;
}
if(typeof n===f){var o=n;
}else{var o=n[3];
if(!o){return m;
}}return window.qxlibraries[o].resourceUri+h+m;
}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qxsetting",c=":",b=".";
qx.Bootstrap.define(f,{statics:{__b:{},define:function(q,r){if(r===undefined){throw new Error('Default value of setting "'+q+'" must be defined!');
}
if(!this.__b[q]){this.__b[q]={};
}else if(this.__b[q].defaultValue!==undefined){throw new Error('Setting "'+q+'" is already defined!');
}this.__b[q].defaultValue=r;
},get:function(o){var p=this.__b[o];

if(p===undefined){throw new Error('Setting "'+o+'" is not defined.');
}
if(p.value!==undefined){return p.value;
}return p.defaultValue;
},__c:function(){if(window.qxsettings){for(var k in qxsettings){if((k.split(b)).length<2){throw new Error('Malformed settings key "'+k+'". Must be following the schema "namespace.key".');
}
if(!this.__b[k]){this.__b[k]={};
}this.__b[k].value=qxsettings[k];
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__d();
}},__d:function(){if(this.get(h)!=true){return;
}var n=document.location.search.slice(1).split(g);

for(var i=0;i<n.length;i++){var l=n[i].split(c);

if(l.length!=3||l[0]!=d){continue;
}var m=l[1];

if(!this.__b[m]){this.__b[m]={};
}this.__b[m].value=decodeURIComponent(l[2]);
}}},defer:function(j){j.define(h,false);
j.define(e,false);
j.__c();
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
(function(){var I="on",H="qx.debug",G="off",F="|",E="default",D="object",C="&",B="qx.aspects",A="$",z="qx.allowUrlVariants",r="qx.client",y="qx.dynlocale",u="webkit",q="qxvariant",p="opera",t=":",s=".",w="qx.core.Variant",o="mshtml",x="gecko";
qx.Bootstrap.define(w,{statics:{__f:{},__g:{},compilerIsSet:function(){return true;
},define:function(M,N,O){if(qx.core.Variant.compilerIsSet(H,I)){if(!this.__j(N)){throw new Error('Allowed values of variant "'+M+'" must be defined!');
}
if(O===undefined){throw new Error('Default value of variant "'+M+'" must be defined!');
}}
if(!this.__f[M]){this.__f[M]={};
}else if(qx.core.Variant.compilerIsSet(H,I)){if(this.__f[M].defaultValue!==undefined){throw new Error('Variant "'+M+'" is already defined!');
}}this.__f[M].allowedValues=N;
this.__f[M].defaultValue=O;
},get:function(J){var K=this.__f[J];

if(qx.core.Variant.compilerIsSet(H,I)){if(K===undefined){throw new Error('Variant "'+J+'" is not defined.');
}}
if(K.value!==undefined){return K.value;
}return K.defaultValue;
},__h:function(){if(window.qxvariants){for(var n in qxvariants){if(qx.core.Variant.compilerIsSet(H,I)){if((n.split(s)).length<2){throw new Error('Malformed settings key "'+n+'". Must be following the schema "namespace.key".');
}}
if(!this.__f[n]){this.__f[n]={};
}this.__f[n].value=qxvariants[n];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(L){}this.__i(this.__f);
}},__i:function(){if(qx.core.Setting.get(z)!=true){return;
}var j=document.location.search.slice(1).split(C);

for(var i=0;i<j.length;i++){var k=j[i].split(t);

if(k.length!=3||k[0]!=q){continue;
}var m=k[1];

if(!this.__f[m]){this.__f[m]={};
}this.__f[m].value=decodeURIComponent(k[2]);
}},select:function(a,b){if(qx.core.Variant.compilerIsSet(H,I)){if(!this.__k(this.__f[a])){throw new Error("Variant \""+a+"\" is not defined");
}
if(!this.__k(b)){throw new Error("the second parameter must be a map!");
}}
for(var c in b){if(this.isSet(a,c)){return b[c];
}}
if(b[E]!==undefined){return b[E];
}
if(qx.core.Variant.compilerIsSet(H,I)){throw new Error('No match for variant "'+a+'" in variants ['+qx.lang.Object.getKeysAsString(b)+'] found, and no default ("default") given');
}},isSet:function(d,e){var f=d+A+e;

if(this.__g[f]!==undefined){return this.__g[f];
}var h=false;
if(e.indexOf(F)<0){h=this.get(d)===e;
}else{var g=e.split(F);

for(var i=0,l=g.length;i<l;i++){if(this.get(d)===g[i]){h=true;
break;
}}}this.__g[f]=h;
return h;
},__j:function(v){return typeof v===D&&v!==null&&v instanceof Array;
},__k:function(v){return typeof v===D&&v!==null&&!(v instanceof Array);
},__l:function(P,Q){for(var i=0,l=P.length;i<l;i++){if(P[i]==Q){return true;
}}return false;
}},defer:function(R){R.define(r,[x,o,p,u],qx.bom.client.Engine.NAME);
R.define(H,[I,G],I);
R.define(B,[I,G],G);
R.define(y,[I,G],I);
R.__h();
}});
})();
(function(){var B='"',A="qx.debug",z="on",y="valueOf",x="toLocaleString",w="isPrototypeOf",v="",u="toString",t='\", "',s="function",o="qx.client",r="qx.lang.Object",q="hasOwnProperty",n="undefined",m="Use 'clone()' instead!",p="object";
qx.Bootstrap.define(r,{statics:{empty:function(Y){for(var ba in Y){if(Y.hasOwnProperty(ba)){delete Y[ba];
}}},isEmpty:function(M){for(var N in M){return false;
}return true;
},hasMinLength:function(G,H){var length=0;

for(var I in G){if((++length)>=H){return true;
}}return false;
},getLength:function(R){var length=0;

for(var S in R){length++;
}return length;
},_shadowedKeys:[w,q,x,u,y],getKeys:qx.core.Variant.select(o,{"mshtml":function(T){if(qx.core.Variant.isSet(A,z)){if(!(T&&T.constructor&&T.constructor===({}).constructor)){qx.log.Logger.trace(this);
throw new Error("Invalid map: "+T);
}}var U=[];

for(var V in T){U.push(V);
}for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(T.hasOwnProperty(a[i])){U.push(a[i]);
}}return U;
},"default":function(bb){var bc=[];

for(var bd in bb){bc.push(bd);
}return bc;
}}),getKeysAsString:function(W){var X=qx.lang.Object.getKeys(W);

if(X.length==0){return v;
}return B+X.join(t)+B;
},getValues:function(O){var P=[];

for(var Q in O){P.push(O[Q]);
}return P;
},mergeWith:function(C,D,E){if(E===undefined){E=true;
}
for(var F in D){if(E||C[F]===undefined){C[F]=D[F];
}}return C;
},carefullyMergeWith:function(j,k){return qx.lang.Object.mergeWith(j,k,false);
},merge:function(be,bf){var bg=arguments.length;

for(var i=1;i<bg;i++){qx.lang.Object.mergeWith(be,arguments[i]);
}return be;
},copy:function(bm){qx.log.Logger.deprecatedMethodWarning(arguments.callee,m);
return qx.lang.Object.clone(bm);
},clone:function(J){var K={};

for(var L in J){K[L]=J[L];
}return K;
},invert:function(f){var g={};

for(var h in f){g[f[h].toString()]=h;
}return g;
},getKeyFromValue:function(bj,bk){for(var bl in bj){if(bj.hasOwnProperty(bl)&&bj[bl]===bk){return bl;
}}return null;
},contains:function(d,e){return this.getKeyFromValue(d,e)!==null;
},select:function(b,c){return c[b];
},fromArray:function(bh){var bi={};

for(var i=0,l=bh.length;i<l;i++){if(qx.core.Variant.isSet(A,z)){switch(typeof bh[i]){case p:case s:case n:throw new Error("Could not convert complex objects like "+bh[i]+" at array index "+i+" to map syntax");
}}bi[bh[i].toString()]=true;
}return bi;
}}});
})();
(function(){var g="qx.core.Aspect",f="before",e="*",d="static";
qx.Bootstrap.define(g,{statics:{__m:[],wrap:function(h,j,k){var p=[];
var l=[];
var o=this.__m;
var n;

for(var i=0;i<o.length;i++){n=o[i];

if((n.type==null||k==n.type||n.type==e)&&(n.name==null||h.match(n.name))){n.pos==-1?p.push(n.fcn):l.push(n.fcn);
}}
if(p.length===0&&l.length===0){return j;
}var m=function(){for(var i=0;i<p.length;i++){p[i].call(this,h,j,k,arguments);
}var q=j.apply(this,arguments);

for(var i=0;i<l.length;i++){l[i].call(this,h,j,k,arguments,q);
}return q;
};

if(k!==d){m.self=j.self;
m.base=j.base;
}j.wrapper=m;
m.original=j;
return m;
},addAdvice:function(a,b,c,name){this.__m.push({fcn:a,pos:b===f?-1:1,type:c,name:name});
}}});
})();
(function(){var bY="qx.debug",bX="on",bW="object",bV=".",bU="static",bT="function",bS="string",bR="qx.aspects",bQ="abstract",bP="_",cv="$$init_",cu="extend",ct="init",cs="singleton",cr="qx.event.type.Data",cq="refine",cp="members",co="variants",cn="off",cm="properties",cg="statics",ch="toString",ce="events",cf="]",cc="Class",cd="Interface",ca="qx.Class",cb="Mixin",ci="settings",cj="[Class ",cl="destructor",ck="member";
qx.Bootstrap.define(ca,{statics:{define:function(name,cI){if(!cI){var cI={};
}if(cI.include&&!(cI.include instanceof Array)){cI.include=[cI.include];
}if(cI.implement&&!(cI.implement instanceof Array)){cI.implement=[cI.implement];
}if(!cI.hasOwnProperty(cu)&&!cI.type){cI.type=bU;
}if(qx.core.Variant.isSet(bY,bX)){this.__p(name,cI);
}var cK=this.__r(name,cI.type,cI.extend,cI.statics,cI.construct,cI.destruct);
if(cI.extend){if(cI.properties){this.__t(cK,cI.properties,true);
}if(cI.members){this.__v(cK,cI.members,true,true,false);
}if(cI.events){this.__s(cK,cI.events,true);
}if(cI.include){for(var i=0,l=cI.include.length;i<l;i++){this.__y(cK,cI.include[i],false);
}}}if(cI.settings){for(var cJ in cI.settings){qx.core.Setting.define(cJ,cI.settings[cJ]);
}}if(cI.variants){for(var cJ in cI.variants){qx.core.Variant.define(cJ,cI.variants[cJ].allowedValues,cI.variants[cJ].defaultValue);
}}if(cI.implement){for(var i=0,l=cI.implement.length;i<l;i++){this.__x(cK,cI.implement[i]);
}}
if(qx.core.Variant.isSet(bY,bX)){this.__q(cK);
}if(cI.defer){cI.defer.self=cK;
cI.defer(cK,cK.prototype,{add:function(name,v){var w={};
w[name]=v;
qx.Class.__t(cK,w,true);
}});
}},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bb,bc){if(qx.core.Variant.isSet(bY,bX)){if(!bc){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+bb.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bc,bb);
}qx.Class.__y(bb,bc,false);
},patch:function(cN,cO){if(qx.core.Variant.isSet(bY,bX)){if(!cO){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+cN.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(cO,cN);
}qx.Class.__y(cN,cO,true);
},isSubClassOf:function(cA,cB){if(!cA){return false;
}
if(cA==cB){return true;
}
if(cA.prototype instanceof cB){return true;
}return false;
},getPropertyDefinition:function(bH,name){while(bH){if(bH.$$properties&&bH.$$properties[name]){return bH.$$properties[name];
}bH=bH.superclass;
}return null;
},getProperties:function(x){var y=[];

while(x){if(x.$$properties){y.push.apply(y,qx.lang.Object.getKeys(x.$$properties));
}x=x.superclass;
}return y;
},getByProperty:function(bJ,name){while(bJ){if(bJ.$$properties&&bJ.$$properties[name]){return bJ;
}bJ=bJ.superclass;
}return null;
},hasProperty:function(bq,name){return !!this.getPropertyDefinition(bq,name);
},getEventType:function(cC,name){var cC=cC.constructor;

while(cC.superclass){if(cC.$$events&&cC.$$events[name]!==undefined){return cC.$$events[name];
}cC=cC.superclass;
}return null;
},supportsEvent:function(bf,name){return !!this.getEventType(bf,name);
},hasOwnMixin:function(b,c){return b.$$includes&&b.$$includes.indexOf(c)!==-1;
},getByMixin:function(bM,bN){var bO,i,l;

while(bM){if(bM.$$includes){bO=bM.$$flatIncludes;

for(i=0,l=bO.length;i<l;i++){if(bO[i]===bN){return bM;
}}}bM=bM.superclass;
}return null;
},getMixins:function(z){var A=[];

while(z){if(z.$$includes){A.push.apply(A,z.$$flatIncludes);
}z=z.superclass;
}return A;
},hasMixin:function(bg,bh){return !!this.getByMixin(bg,bh);
},hasOwnInterface:function(br,bs){return br.$$implements&&br.$$implements.indexOf(bs)!==-1;
},getByInterface:function(X,Y){var ba,i,l;

while(X){if(X.$$implements){ba=X.$$flatImplements;

for(i=0,l=ba.length;i<l;i++){if(ba[i]===Y){return X;
}}}X=X.superclass;
}return null;
},getInterfaces:function(bK){var bL=[];

while(bK){if(bK.$$implements){bL.push.apply(bL,bK.$$flatImplements);
}bK=bK.superclass;
}return bL;
},hasInterface:function(cL,cM){return !!this.getByInterface(cL,cM);
},implementsInterface:function(I,J){var K=I.constructor;

if(this.hasInterface(K,J)){return true;
}
try{qx.Interface.assertObject(I,J);
return true;
}catch(bi){}
try{qx.Interface.assert(K,J,false);
return true;
}catch(bI){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return cj+this.classname+cf;
},$$registry:qx.Bootstrap.$$registry,__n:qx.core.Variant.select(bY,{"on":{"type":bS,"extend":bT,"implement":bW,"include":bW,"construct":bT,"statics":bW,"properties":bW,"members":bW,"settings":bW,"variants":bW,"events":bW,"defer":bT,"destruct":bT},"default":null}),__o:qx.core.Variant.select(bY,{"on":{"type":bS,"statics":bW,"settings":bW,"variants":bW,"defer":bT},"default":null}),__p:qx.core.Variant.select(bY,{"on":function(name,B){if(B.type&&!(B.type===bU||B.type===bQ||B.type===cs)){throw new Error('Invalid type "'+B.type+'" definition for class "'+name+'"!');
}if(B.type&&B.type!==bU&&!B.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var E=B.type===bU?this.__o:this.__n;

for(var D in B){if(!E[D]){throw new Error('The configuration key "'+D+'" in class "'+name+'" is not allowed!');
}
if(B[D]==null){throw new Error('Invalid key "'+D+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof B[D]!==E[D]){throw new Error('Invalid type of key "'+D+'" in class "'+name+'"! The type of the key must be "'+E[D]+'"!');
}}var C=[cg,cm,cp,ci,co,ce];

for(var i=0,l=C.length;i<l;i++){var D=C[i];

if(B[D]!==undefined&&(B[D] instanceof Array||B[D] instanceof RegExp||B[D] instanceof Date||B[D].classname!==undefined)){throw new Error('Invalid key "'+D+'" in class "'+name+'"! The value needs to be a map!');
}}if(B.include){if(B.include instanceof Array){for(var i=0,a=B.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==cb){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(B.implement){if(B.implement instanceof Array){for(var i=0,a=B.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==cd){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(B.include){try{qx.Mixin.checkCompatibility(B.include);
}catch(cD){throw new Error('Error in include definition of class "'+name+'"! '+cD.message);
}}if(B.settings){for(var D in B.settings){if(D.substr(0,D.indexOf(bV))!=name.substr(0,name.indexOf(bV))){throw new Error('Forbidden setting "'+D+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(B.variants){for(var D in B.variants){if(D.substr(0,D.indexOf(bV))!=name.substr(0,name.indexOf(bV))){throw new Error('Forbidden variant "'+D+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__q:qx.core.Variant.select(bY,{"on":function(bt){var bv=bt.superclass;

while(bv){if(bv.$$classtype!==bQ){break;
}var bu=bv.$$implements;

if(bu){for(var i=0;i<bu.length;i++){qx.Interface.assert(bt,bu[i],true);
}}bv=bv.superclass;
}},"default":function(){}}),__r:function(name,h,j,k,m,n){var s;

if(!j&&qx.core.Variant.isSet(bR,cn)){s=k||{};
}else{s={};

if(j){if(!m){m=this.__z();
}s=this.__B(m,name,h);
}if(k){var t;

for(var i=0,a=qx.lang.Object.getKeys(k),l=a.length;i<l;i++){t=a[i];

if(qx.core.Variant.isSet(bR,bX)){var p=k[t];

if(p instanceof Function){p=qx.core.Aspect.wrap(name+bV+t,p,bU);
}s[t]=p;
}else{s[t]=k[t];
}}}}var r=qx.Bootstrap.createNamespace(name,s,false);
s.name=s.classname=name;
s.basename=r;
s.$$type=cc;

if(h){s.$$classtype=h;
}if(!s.hasOwnProperty(ch)){s.toString=this.genericToString;
}
if(j){var u=j.prototype;
var o=this.__A();
o.prototype=u;
var q=new o;
s.prototype=q;
q.name=q.classname=name;
q.basename=r;
m.base=s.superclass=j;
m.self=s.constructor=q.constructor=s;
if(n){if(qx.core.Variant.isSet(bR,bX)){n=qx.core.Aspect.wrap(name,n,cl);
}s.$$destructor=n;
}}this.$$registry[name]=s;
return s;
},__s:function(cw,cx,cy){if(qx.core.Variant.isSet(bY,bX)){if(typeof cx!==bW||cx instanceof Array){throw new Error(cw.classname+": the events must be defined as map!");
}
for(var cz in cx){if(typeof cx[cz]!==bS){throw new Error(cw.classname+"/"+cz+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(cw.$$events&&cy!==true){for(var cz in cx){if(cw.$$events[cz]!==undefined&&cw.$$events[cz]!==cx[cz]){throw new Error(cw.classname+"/"+cz+": the event value/type cannot be changed from "+cw.$$events[cz]+" to "+cx[cz]);
}}}}
if(cw.$$events){for(var cz in cx){cw.$$events[cz]=cx[cz];
}}else{cw.$$events=cx;
}},__t:function(S,T,U){var W;

if(U===undefined){U=false;
}var V=!!S.$$propertiesAttached;

for(var name in T){W=T[name];
if(qx.core.Variant.isSet(bY,bX)){this.__u(S,name,W,U);
}W.name=name;
if(!W.refine){if(S.$$properties===undefined){S.$$properties={};
}S.$$properties[name]=W;
}if(W.init!==undefined){S.prototype[cv+name]=W.init;
}if(W.event!==undefined){var event={};
event[W.event]=cr;
this.__s(S,event,U);
}if(W.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(V){qx.core.Property.attachMethods(S,name,W);
}}},__u:qx.core.Variant.select(bY,{"on":function(L,name,M,N){var P=this.hasProperty(L,name);

if(P){var O=this.getPropertyDefinition(L,name);

if(M.refine&&O.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+L.classname+"'.");
}}
if(!P&&M.refine){throw new Error("Could not refine non-existent property: "+name+"!");
}
if(P&&!N){throw new Error("Class "+L.classname+" already has a property: "+name+"!");
}
if(P&&N){if(!M.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+L.classname+', original class: '+this.getByProperty(L,name).classname+'.');
}
for(var Q in M){if(Q!==ct&&Q!==cq){throw new Error("Class "+L.classname+" could not refine property: "+name+"! Key: "+Q+" could not be refined!");
}}}var R=M.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var Q in M){if(R[Q]===undefined){throw new Error('The configuration key "'+Q+'" of property "'+name+'" in class "'+L.classname+'" is not allowed!');
}
if(M[Q]===undefined){throw new Error('Invalid key "'+Q+'" of property "'+name+'" in class "'+L.classname+'"! The value is undefined: '+M[Q]);
}
if(R[Q]!==null&&typeof M[Q]!==R[Q]){throw new Error('Invalid type of key "'+Q+'" of property "'+name+'" in class "'+L.classname+'"! The type of the key must be "'+R[Q]+'"!');
}}
if(M.transform!=null){if(!(typeof M.transform==bS)){throw new Error('Invalid transform definition of property "'+name+'" in class "'+L.classname+'"! Needs to be a String.');
}}
if(M.check!=null){if(!(typeof M.check==bS||M.check instanceof Array||M.check instanceof Function)){throw new Error('Invalid check definition of property "'+name+'" in class "'+L.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__v:function(bw,bx,by,bz,bA){var bB=bw.prototype;
var bD,bC;

for(var i=0,a=qx.lang.Object.getKeys(bx),l=a.length;i<l;i++){bD=a[i];
bC=bx[bD];

if(qx.core.Variant.isSet(bY,bX)){if(bB[bD]!==undefined&&bD.charAt(0)==bP&&bD.charAt(1)==bP){throw new Error('Overwriting private member "'+bD+'" of Class "'+bw.classname+'" is not allowed!');
}
if(by!==true&&bB.hasOwnProperty(bD)){throw new Error('Overwriting member "'+bD+'" of Class "'+bw.classname+'" is not allowed!');
}}if(bz!==false&&bC instanceof Function&&bC.$$type==null){if(bA==true){bC=this.__w(bC,bB[bD]);
}else{if(bB[bD]){bC.base=bB[bD];
}bC.self=bw;
}
if(qx.core.Variant.isSet(bR,bX)){bC=qx.core.Aspect.wrap(bw.classname+bV+bD,bC,ck);
}}bB[bD]=bC;
}},__w:function(bj,bk){if(bk){return function(){var be=bj.base;
bj.base=bk;
var bd=bj.apply(this,arguments);
bj.base=be;
return bd;
};
}else{return bj;
}},__x:function(bE,bF){if(qx.core.Variant.isSet(bY,bX)){if(!bE||!bF){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(bE,bF)){throw new Error('Interface "'+bF.name+'" is already used by Class "'+bE.classname+'!');
}if(bE.$$classtype!==bQ){qx.Interface.assert(bE,bF,true);
}}var bG=qx.Interface.flatten([bF]);

if(bE.$$implements){bE.$$implements.push(bF);
bE.$$flatImplements.push.apply(bE.$$flatImplements,bG);
}else{bE.$$implements=[bF];
bE.$$flatImplements=bG;
}},__y:function(bl,bm,bn){if(qx.core.Variant.isSet(bY,bX)){if(!bl||!bm){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(bl,bm)){qx.log.Logger.warn('Mixin "'+bm.name+'" is already included into Class "'+bl.classname+'" by class: '+this.getByMixin(bl,bm).classname+'!');
return;
}var bp=qx.Mixin.flatten([bm]);
var bo;

for(var i=0,l=bp.length;i<l;i++){bo=bp[i];
if(bo.$$events){this.__s(bl,bo.$$events,bn);
}if(bo.$$properties){this.__t(bl,bo.$$properties,bn);
}if(bo.$$members){this.__v(bl,bo.$$members,bn,bn,bn);
}}if(bl.$$includes){bl.$$includes.push(bm);
bl.$$flatIncludes.push.apply(bl.$$flatIncludes,bp);
}else{bl.$$includes=[bm];
bl.$$flatIncludes=bp;
}},__z:function(){function d(){arguments.callee.base.apply(this,arguments);
}return d;
},__A:function(){return function(){};
},__B:function(cE,name,cF){var cH=function(){var H=arguments.callee.constructor;

if(qx.core.Variant.isSet("qx.debug","on")){if(!(this instanceof H)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cF==="abstract"){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cF==="singleton"){if(!H.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}if(!H.$$propertiesAttached){qx.core.Property.attach(H);
}var G=H.$$original.apply(this,arguments);
if(H.$$includes){var F=H.$$flatIncludes;

for(var i=0,l=F.length;i<l;i++){if(F[i].$$constructor){F[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return G;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var cG=qx.core.Aspect.wrap(name,cH,"constructor");
cH.$$original=cE;
cH.constructor=cG;
cH=cG;
}if(cF==="singleton"){cH.getInstance=this.getInstance;
}cH.$$original=cE;
cE.wrapper=cH;
return cH;
}},defer:function(e){if(qx.core.Variant.isSet(bR,bX)){for(var f in qx.Bootstrap.$$registry){var e=qx.Bootstrap.$$registry[f];

for(var g in e){if(e[g] instanceof Function){e[g]=qx.core.Aspect.wrap(f+bV+g,e[g],bU);
}}}}}});
})();
(function(){var v="qx.client",u="head",t="text/css",s="stylesheet",r="}",q='@import "',p="{",o='";',n="qx.bom.Stylesheet",m="link",l="style";
qx.Class.define(n,{statics:{includeFile:function(g,h){if(!h){h=document;
}var j=h.createElement(m);
j.type=t;
j.rel=s;
j.href=qx.util.ResourceManager.toUri(g);
var k=h.getElementsByTagName(u)[0];
k.appendChild(j);
},createElement:qx.core.Variant.select(v,{"mshtml":function(z){var A=document.createStyleSheet();

if(z){A.cssText=z;
}return A;
},"default":function(X){var Y=document.createElement(l);
Y.type=t;

if(X){Y.appendChild(document.createTextNode(X));
}document.getElementsByTagName(u)[0].appendChild(Y);
return Y.sheet;
}}),addRule:qx.core.Variant.select(v,{"mshtml":function(L,M,N){L.addRule(M,N);
},"default":function(be,bf,bg){be.insertRule(bf+p+bg+r,be.cssRules.length);
}}),removeRule:qx.core.Variant.select(v,{"mshtml":function(T,U){var V=T.rules;
var W=V.length;

for(var i=W-1;i>=0;--i){if(V[i].selectorText==U){T.removeRule(i);
}}},"default":function(H,I){var J=H.cssRules;
var K=J.length;

for(var i=K-1;i>=0;--i){if(J[i].selectorText==I){H.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(v,{"mshtml":function(O){var P=O.rules;
var Q=P.length;

for(var i=Q-1;i>=0;i--){O.removeRule(i);
}},"default":function(w){var x=w.cssRules;
var y=x.length;

for(var i=y-1;i>=0;i--){w.deleteRule(i);
}}}),addImport:qx.core.Variant.select(v,{"mshtml":function(B,C){B.addImport(C);
},"default":function(R,S){R.insertRule(q+S+o,R.cssRules.length);
}}),removeImport:qx.core.Variant.select(v,{"mshtml":function(D,E){var F=D.imports;
var G=F.length;

for(var i=G-1;i>=0;i--){if(F[i].href==E){D.removeImport(i);
}}},"default":function(ba,bb){var bc=ba.cssRules;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){if(bc[i].href==bb){ba.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(v,{"mshtml":function(d){var e=d.imports;
var f=e.length;

for(var i=f-1;i>=0;i--){d.removeImport(i);
}},"default":function(a){var b=a.cssRules;
var c=b.length;

for(var i=c-1;i>=0;i--){if(b[i].type==b[i].IMPORT_RULE){a.deleteRule(i);
}}}})}});
})();
(function(){var q="qx.client",p="on",o="qx.bom.Event",n="mousedown",m="mouseover";
qx.Bootstrap.define(o,{statics:{addNativeListener:qx.core.Variant.select(q,{"mshtml":function(a,b,c){a.attachEvent(p+b,c);
},"default":function(r,s,t){r.addEventListener(s,t,false);
}}),removeNativeListener:qx.core.Variant.select(q,{"mshtml":function(i,j,k){i.detachEvent(p+j,k);
},"default":function(d,f,g){d.removeEventListener(f,g,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(q,{"mshtml":function(e){if(e.type===m){return e.fromEvent;
}else{return e.toElement;
}},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(q,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==n&&e.button==2){return;
}e.preventDefault();

try{e.keyCode=0;
}catch(l){}},"mshtml":function(e){try{e.keyCode=0;
}catch(h){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
}}});
})();
(function(){var L="|bubble",K="qx.debug",J="|capture",I="on",H="|",G="': ",F="'",E="_",D="Invalid Target.",C="Invalid event type.",bi="Invalid event target.",bh=" from the target '",bg="Invalid callback function",bf="unload",be="Failed to remove event listener for id '",bd="Invalid context for callback.",bc="Invalid capture flag.",bb="Failed to add event listener for type '",ba="UNKNOWN_",Y="capture",S="qx.event.Manager",T="Could not dispatch event '",Q="DOM_",R="QX_",O=" to the target '",P="Failed to remove event listener for type '",M="Invalid capture falg.",N="c",U="Invalid id type.",V="' on target '",X="WIN_",W="Invalid event object.";
qx.Bootstrap.define(S,{construct:function(a){this.__C=a;
this.__D=qx.lang.Function.bind(this.dispose,this);
qx.bom.Event.addNativeListener(a,bf,this.__D);
this.__E={};
this.__F={};
this.__G={};
this.__H={};
},statics:{__I:0,getNextUniqueId:function(){return (this.__I++).toString(36);
}},members:{dispose:function(){qx.bom.Event.removeNativeListener(this.__C,bf,this.__D);
qx.event.Registration.removeManager(this);
this.__E=this.__C=this.__F=this.__G=this.__D=this.__H=null;
},getWindow:function(){return this.__C;
},getHandler:function(m){var n=this.__F[m.classname];

if(n){return n;
}return this.__F[m.classname]=new m(this);
},getDispatcher:function(o){var p=this.__G[o.classname];

if(p){return p;
}return this.__G[o.classname]=new o(this);
},getListeners:function(cb,cc,cd){var ce=cb.$$hash||qx.core.ObjectRegistry.toHashCode(cb);
var cg=this.__E[ce];

if(!cg){return null;
}var ch=cc+(cd?J:L);
var cf=cg[ch];
return cf?cf.concat():null;
},serializeListeners:function(bs){var bz=bs.$$hash||qx.core.ObjectRegistry.toHashCode(bs);
var bB=this.__E[bz];
var bx=[];

if(bB){var bv,bA,bt,bw,by;

for(var bu in bB){bv=bu.indexOf(H);
bA=bu.substring(0,bv);
bt=bu.charAt(bv+1)==N;
bw=bB[bu];

for(var i=0,l=bw.length;i<l;i++){by=bw[i];
bx.push({self:by.context,handler:by.handler,type:bA,capture:bt});
}}}return bx;
},toggleAttachedEvents:function(b,c){var h=b.$$hash||qx.core.ObjectRegistry.toHashCode(b);
var k=this.__E[h];

if(k){var e,j,d,f;

for(var g in k){e=g.indexOf(H);
j=g.substring(0,e);
d=g.charCodeAt(e+1)===99;
f=k[g];

if(c){this.__J(b,j,d);
}else{this.__K(b,j,d);
}}}},hasListener:function(bC,bD,bE){if(qx.core.Variant.isSet(K,I)){if(bC==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+bC);
}}var bF=bC.$$hash||qx.core.ObjectRegistry.toHashCode(bC);
var bH=this.__E[bF];

if(!bH){return false;
}var bI=bD+(bE?J:L);
var bG=bH[bI];
return bG&&bG.length>0;
},importListeners:function(bj,bk){if(qx.core.Variant.isSet(K,I)){if(bj==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+bj);
}}var bq=bj.$$hash||qx.core.ObjectRegistry.toHashCode(bj);
var br=this.__E[bq]={};
var bn=qx.event.Manager;

for(var bl in bk){var bo=bk[bl];
var bp=bo.type+(bo.capture?J:L);
var bm=br[bp];

if(!bm){bm=br[bp]=[];
this.__J(bj,bo.type,bo.capture);
}bm.push({handler:bo.listener,context:bo.self,unique:bo.unique||(bn.__I++).toString(36)});
}},addListener:function(cw,cx,cy,self,cz){if(qx.core.Variant.isSet(K,I)){var cD=bb+cx+F+O+cw+G;
qx.core.Assert.assertObject(cw,cD+D);
qx.core.Assert.assertString(cx,cD+C);
qx.core.Assert.assertFunction(cy,cD+bg);

if(cz!==undefined){qx.core.Assert.assertBoolean(cz,bc);
}}var cE=cw.$$hash||qx.core.ObjectRegistry.toHashCode(cw);
var cG=this.__E[cE];

if(!cG){cG=this.__E[cE]={};
}var cC=cx+(cz?J:L);
var cB=cG[cC];

if(!cB){cB=cG[cC]=[];
}if(cB.length===0){this.__J(cw,cx,cz);
}var cF=(qx.event.Manager.__I++).toString(36);
var cA={handler:cy,context:self,unique:cF};
cB.push(cA);
return cC+H+cF;
},findHandler:function(bJ,bK){var bU=false,bN=false,bV=false;
var bT;

if(bJ.nodeType===1){bU=true;
bT=Q+bJ.tagName.toLowerCase()+E+bK;
}else if(bJ==this.__C){bN=true;
bT=X+bK;
}else if(bJ.classname){bV=true;
bT=R+bJ.classname+E+bK;
}else{bT=ba+bJ+E+bK;
}var bP=this.__H;

if(bP[bT]){return bP[bT];
}var bS=qx.event.Registration.getHandlers();
var bO=qx.event.IEventHandler;
var bQ,bR,bM,bL;

for(var i=0,l=bS.length;i<l;i++){bQ=bS[i];
bM=bQ.SUPPORTED_TYPES;

if(bM&&!bM[bK]){continue;
}bL=bQ.TARGET_CHECK;

if(bL){if(!bU&&bL===bO.TARGET_DOMNODE){continue;
}else if(!bN&&bL===bO.TARGET_WINDOW){continue;
}else if(!bV&&bL===bO.TARGET_OBJECT){continue;
}}bR=this.getHandler(bS[i]);

if(bQ.IGNORE_CAN_HANDLE||bR.canHandleEvent(bJ,bK)){bP[bT]=bR;
return bR;
}}return null;
},__J:function(bW,bX,bY){var ca=this.findHandler(bW,bX);

if(ca){ca.registerEvent(bW,bX,bY);
return;
}
if(qx.core.Variant.isSet("qx.debug","on")){qx.log.Logger.warn(this,"There is no event handler for the event '"+bX+"' on target '"+bW+"'!");
}},removeListener:function(cH,cI,cJ,self,cK){if(qx.core.Variant.isSet(K,I)){var cO=P+cI+F+bh+cH+G;
qx.core.Assert.assertObject(cH,cO+D);
qx.core.Assert.assertString(cI,cO+C);
qx.core.Assert.assertFunction(cJ,cO+bg);

if(self!==undefined){qx.core.Assert.assertObject(self,bd);
}
if(cK!==undefined){qx.core.Assert.assertBoolean(cK,M);
}}var cP=cH.$$hash||qx.core.ObjectRegistry.toHashCode(cH);
var cQ=this.__E[cP];

if(!cQ){return false;
}var cL=cI+(cK?J:L);
var cM=cQ[cL];

if(!cM){return false;
}var cN;

for(var i=0,l=cM.length;i<l;i++){cN=cM[i];

if(cN.handler===cJ&&cN.context===self){qx.lang.Array.removeAt(cM,i);

if(cM.length==0){this.__K(cH,cI,cK);
}return true;
}}return false;
},removeListenerById:function(q,r){if(qx.core.Variant.isSet(K,I)){var x=be+r+F+bh+q+G;
qx.core.Assert.assertObject(q,x+D);
qx.core.Assert.assertString(r,x+U);
}var v=r.split(H);
var A=v[0];
var s=v[1].charCodeAt(0)==99;
var z=v[2];
var y=q.$$hash||qx.core.ObjectRegistry.toHashCode(q);
var B=this.__E[y];

if(!B){return false;
}var w=A+(s?J:L);
var u=B[w];

if(!u){return false;
}var t;

for(var i=0,l=u.length;i<l;i++){t=u[i];

if(t.unique===z){qx.lang.Array.removeAt(u,i);

if(u.length==0){this.__K(q,A,s);
}return true;
}}return false;
},removeAllListeners:function(ci){var cm=ci.$$hash||qx.core.ObjectRegistry.toHashCode(ci);
var co=this.__E[cm];

if(!co){return false;
}var ck,cn,cj;

for(var cl in co){if(co[cl].length>0){ck=cl.split(H);
cn=ck[0];
cj=ck[1]===Y;
this.__K(ci,cn,cj);
}}delete this.__E[cm];
return true;
},__K:function(cR,cS,cT){var cU=this.findHandler(cR,cS);

if(cU){cU.unregisterEvent(cR,cS,cT);
return;
}
if(qx.core.Variant.isSet("qx.debug","on")){qx.log.Logger.warn(this,"There is no event handler for the event '"+cS+"' on target '"+cR+"'!");
}},dispatchEvent:function(cp,event){if(qx.core.Variant.isSet(K,I)){var cu=T+event+V+cp+G;
qx.core.Assert.assertNotUndefined(cp,cu+bi);
qx.core.Assert.assertNotNull(cp,cu+bi);
qx.core.Assert.assertInstance(event,qx.event.type.Event,cu+W);
}var cv=event.getType();

if(!event.getBubbles()&&!this.hasListener(cp,cv)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cp);
}var ct=qx.event.Registration.getDispatchers();
var cs;
var cr=false;

for(var i=0,l=ct.length;i<l;i++){cs=this.getDispatcher(ct[i]);
if(cs.canDispatchEvent(cp,event,cv)){cs.dispatchEvent(cp,event,cv);
cr=true;
break;
}}
if(!cr){qx.log.Logger.error(this,"No dispatcher can handle event of type "+cv+" on "+cp);
return true;
}var cq=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cq;
}}});
})();
(function(){var g="qx.dom.Node",f="qx.client",e="";
qx.Class.define(g,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(k){return k.nodeType===
this.DOCUMENT?k:
k.ownerDocument||k.document;
},getWindow:qx.core.Variant.select(f,{"mshtml":function(j){if(j.nodeType==null){return j;
}if(j.nodeType!==this.DOCUMENT){j=j.ownerDocument;
}return j.parentWindow;
},"default":function(p){if(p.nodeType==null){return p;
}if(p.nodeType!==this.DOCUMENT){p=p.ownerDocument;
}return p.defaultView;
}}),getDocumentElement:function(b){return this.getDocument(b).documentElement;
},getBodyElement:function(n){return this.getDocument(n).body;
},isNode:function(q){return !!(q&&q.nodeType!=null);
},isElement:function(h){return !!(h&&h.nodeType===this.ELEMENT);
},isDocument:function(o){return !!(o&&o.nodeType===this.DOCUMENT);
},isText:function(l){return !!(l&&l.nodeType===this.TEXT);
},isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);
},getText:function(c){if(!c||!c.nodeType){return null;
}
switch(c.nodeType){case 1:var i,a=[],d=c.childNodes,length=d.length;

for(i=0;i<length;i++){a[i]=this.getText(d[i]);
}return a.join(e);
case 2:return c.nodeValue;
break;
case 3:return c.nodeValue;
break;
}return null;
}}});
})();
(function(){var P="qx.debug",O="on",N="The second parameter must be an array.",M="mshtml",L="[object Array]",K="The first parameter must be an array.",J="Parameter must be an array.",I="qx.client",H="qx.lang.Array",G="qx",D="number",F="Use the native Array access instead: arr[arr.length - 1]",E="Use the native Array access instead: arr[0]",C="string",B="Use 'clone()' instead!";
qx.Bootstrap.define(H,{statics:{isArray:function(bh){return Object.prototype.toString.call(bh)===L||bh instanceof Array;
},toArray:function(be,bf){return this.cast(be,Array,bf);
},cast:function(w,x,y){if(w.constructor===x){return w;
}
if(qx.Class.hasInterface(w,qx.data.IListData)){var w=w.toArray();
}var z=new x;
if(qx.core.Variant.isSet(I,M)){if(w.item){for(var i=y||0,l=w.length;i<l;i++){z.push(w[i]);
}return z;
}}if(Object.prototype.toString.call(w)===L&&y==null){z.push.apply(z,w);
}else{z.push.apply(z,Array.prototype.slice.call(w,y||0));
}return z;
},fromArguments:function(g,h){return Array.prototype.slice.call(g,h||0);
},fromCollection:function(bw){if(qx.core.Variant.isSet(I,M)){if(bw.item){var bx=[];

for(var i=0,l=bw.length;i<l;i++){bx[i]=bw[i];
}return bx;
}}return Array.prototype.slice.call(bw,0);
},fromShortHand:function(q){var s=q.length;
var r=qx.lang.Array.clone(q);
switch(s){case 1:r[1]=r[2]=r[3]=r[0];
break;
case 2:r[2]=r[0];
case 3:r[3]=r[1];
}return r;
},copy:function(t){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B);
return qx.lang.Array.clone(t);
},clone:function(n){return n.concat();
},getLast:function(bz){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
return bz[bz.length-1];
},getFirst:function(bp){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E);
return bp[0];
},insertAt:function(bi,bj,i){bi.splice(i,0,bj);
return bi;
},insertBefore:function(j,k,m){var i=j.indexOf(m);

if(i==-1){j.push(k);
}else{j.splice(i,0,k);
}return j;
},insertAfter:function(bm,bn,bo){var i=bm.indexOf(bo);

if(i==-1||i==(bm.length-1)){bm.push(bn);
}else{bm.splice(i+1,0,bn);
}return bm;
},removeAt:function(bt,i){return bt.splice(i,1)[0];
},removeAll:function(bg){bg.length=0;
return this;
},append:function(e,f){if(qx.core.Variant.isSet(P,O)){qx.core.Assert.assertArray(e,K);
qx.core.Assert.assertArray(f,N);
}Array.prototype.push.apply(e,f);
return e;
},exclude:function(a,b){if(qx.core.Variant.isSet(P,O)){qx.core.Assert.assertArray(a,K);
qx.core.Assert.assertArray(b,N);
}
for(var i=0,d=b.length,c;i<d;i++){c=a.indexOf(b[i]);

if(c!=-1){a.splice(c,1);
}}return a;
},remove:function(bk,bl){var i=bk.indexOf(bl);

if(i!=-1){bk.splice(i,1);
return bl;
}},contains:function(bu,bv){return bu.indexOf(bv)!==-1;
},equals:function(o,p){var length=o.length;

if(length!==p.length){return false;
}
for(var i=0;i<length;i++){if(o[i]!==p[i]){return false;
}}return true;
},sum:function(u){var v=0;

for(var i=0,l=u.length;i<l;i++){v+=u[i];
}return v;
},max:function(bq){if(qx.core.Variant.isSet(P,O)){qx.core.Assert.assertArray(bq,J);
}var i,bs=bq.length,br=bq[0];

for(i=1;i<bs;i++){if(bq[i]>br){br=bq[i];
}}return br===undefined?null:br;
},min:function(bA){if(qx.core.Variant.isSet(P,O)){qx.core.Assert.assertArray(bA,J);
}var i,bC=bA.length,bB=bA[0];

for(i=1;i<bC;i++){if(bA[i]<bB){bB=bA[i];
}}return bB===undefined?null:bB;
},unique:function(Q){var bb=[],S={},V={},X={};
var W,R=0;
var bc=G+qx.lang.Date.now();
var T=false,ba=false,bd=false;
for(var i=0,Y=Q.length;i<Y;i++){W=Q[i];
if(W===null){if(!T){T=true;
bb.push(W);
}}else if(W===false){if(!ba){ba=true;
bb.push(W);
}}else if(W===true){if(!bd){bd=true;
bb.push(W);
}}else if(typeof W===C){if(!S[W]){S[W]=1;
bb.push(W);
}}else if(typeof W===D){if(!V[W]){V[W]=1;
bb.push(W);
}}else{U=W[bc];

if(U==null){U=W[bc]=R++;
}
if(!X[U]){X[U]=W;
bb.push(W);
}}}for(var U in X){try{delete X[U][bc];
}catch(A){try{X[U][bc]=null;
}catch(by){throw new Error("Cannot clean-up map entry doneObjects["+U+"]["+bc+"]");
}}}return bb;
}}});
})();
(function(){var t=":",s=":constructor",r="Invalid parameter 'func'.",q="qx.debug",p='anonymous',o="anonymous: ",n="qx.lang.Function",m="on",l="[object Function]",k=":constructor wrapper";
qx.Bootstrap.define(n,{statics:{isFunction:function(C){return Object.prototype.toString.call(C)===l;
},getCaller:function(D){return D.caller?D.caller.callee:D.callee.caller;
},getName:function(y){if(y.$$original){return y.classname+k;
}
if(y.wrapper){return y.wrapper.classname+s;
}
if(y.classname){return y.classname+s;
}
if(y.$$mixin){for(var A in y.$$mixin.$$members){if(y.$$mixin.$$members[A]==y){return y.$$mixin.name+t+A;
}}for(var A in y.$$mixin){if(y.$$mixin[A]==y){return y.$$mixin.name+t+A;
}}}
if(y.self){var B=y.self.constructor;

if(B){for(var A in B.prototype){if(B.prototype[A]==y){return B.classname+t+A;
}}for(var A in B){if(B[A]==y){return B.classname+t+A;
}}}}var z=y.toString().match(/(function\s*\w*\(.*?\))/);

if(z&&z.length>=1&&z[1]){return z[1];
}var z=y.toString().match(/(function\s*\(.*?\))/);

if(z&&z.length>=1&&z[1]){return o+z[1];
}return p;
},globalEval:function(J){if(window.execScript){return window.execScript(J);
}else{return eval.call(window,J);
}},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(E,F){if(qx.core.Variant.isSet(q,m)){qx.core.Assert.assertFunction(E,r);
}if(!F){return E;
}if(!(F.self||F.args||F.delay!=null||F.periodical!=null||F.attempt)){return E;
}return function(event){var i=qx.lang.Array.fromArguments(arguments);
if(F.args){i=F.args.concat(i);
}
if(F.delay||F.periodical){var h=function(){return E.apply(F.self||this,i);
};

if(F.delay){return setTimeout(h,F.delay);
}
if(F.periodical){return setInterval(h,F.periodical);
}}else if(F.attempt){var j=false;

try{j=E.apply(F.self||this,i);
}catch(x){}return j;
}else{return E.apply(F.self||this,i);
}};
},bind:function(v,self,w){return this.create(v,{self:self,args:w!==undefined?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(f,g){return this.create(f,{args:g!==undefined?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(K,self,L){if(L===undefined){return function(event){return K.call(self||this,event||window.event);
};
}else{var M=qx.lang.Array.fromArguments(arguments,2);
return function(event){var u=[event||window.event];
u.push.apply(u,M);
K.apply(self||this,u);
};
}},attempt:function(d,self,e){return this.create(d,{self:self,attempt:true,args:e!==undefined?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(G,H,self,I){return this.create(G,{delay:H,self:self,args:I!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(a,b,self,c){return this.create(a,{periodical:b,self:self,args:c!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var s="qx.debug",r="on",q="Invalid event target.",p="Invalid event dispatcher!",o="': ",n="Invalid event handler.",m="' on target '",l="Could not fire event '",k="qx.event.Registration";
qx.Bootstrap.define(k,{statics:{__L:{},getManager:function(g){if(g==null){if(qx.core.Variant.isSet(s,r)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}g=window;
}else if(g.nodeType){g=qx.dom.Node.getWindow(g);
}else if(!qx.dom.Node.isWindow(g)){g=window;
}var i=g.$$hash||qx.core.ObjectRegistry.toHashCode(g);
var h=this.__L[i];

if(!h){h=new qx.event.Manager(g);
this.__L[i]=h;
}return h;
},removeManager:function(S){var T=qx.core.ObjectRegistry.toHashCode(S.getWindow());
delete this.__L[T];
},addListener:function(O,P,Q,self,R){return this.getManager(O).addListener(O,P,Q,self,R);
},removeListener:function(U,V,W,self,X){return this.getManager(U).removeListener(U,V,W,self,X);
},removeListenerById:function(c,d){return this.getManager(c).removeListenerById(c,d);
},removeAllListeners:function(N){return this.getManager(N).removeAllListeners(N);
},hasListener:function(K,L,M){return this.getManager(K).hasListener(K,L,M);
},serializeListeners:function(j){return this.getManager(j).serializeListeners(j);
},createEvent:function(A,B,C){if(qx.core.Variant.isSet(s,r)){if(arguments.length>1&&B===undefined){throw new Error("Create event of type "+A+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(B==null){B=qx.event.type.Event;
}var D=qx.event.Pool.getInstance().getObject(B);

if(!D){return;
}C?D.init.apply(D,C):D.init();
if(A){D.setType(A);
}return D;
},dispatchEvent:function(t,event){return this.getManager(t).dispatchEvent(t,event);
},fireEvent:function(E,F,G,H){if(qx.core.Variant.isSet(s,r)){if(arguments.length>2&&G===undefined&&H!==undefined){throw new Error("Create event of type "+F+" with undefined class. Please use null to explicit fallback to default event type!");
}var I=l+F+m+E+o;
qx.core.Assert.assertNotUndefined(E,I+q);
qx.core.Assert.assertNotNull(E,I+q);
}var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(u,v,w,x){if(qx.core.Variant.isSet(s,r)){if(arguments.length>2&&w===undefined&&x!==undefined){throw new Error("Create event of type "+v+" with undefined class. Please use null to explicit fallback to default event type!");
}}var y=this.getManager(u);

if(!y.hasListener(u,v,false)){return true;
}var z=this.createEvent(v,w||null,x);
return y.dispatchEvent(u,z);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__M:[],addHandler:function(Y){if(qx.core.Variant.isSet(s,r)){qx.core.Assert.assertInterface(Y,qx.event.IEventHandler,n);
}this.__M.push(Y);
this.__M.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__M;
},__N:[],addDispatcher:function(e,f){if(qx.core.Variant.isSet(s,r)){qx.core.Assert.assertInterface(e,qx.event.IEventDispatcher,p);
}this.__N.push(e);
this.__N.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__N;
}}});
})();
(function(){var cy=';',cx='computed=this.',cw='=value;',cv='this.',cu='if(this.',ct='!==undefined)',cs='delete this.',cr="set",cq="setThemed",cp="setRuntime",cd='}',cc="init",cb='else if(this.',ca="string",bY='return this.',bX='","',bW='",value);',bV="boolean",bU="resetThemed",bT='!==undefined){',cF="refresh",cG='=true;',cD="resetRuntime",cE="reset",cB='old=this.',cC="on",cz="qx.debug",cA='.$$properties.',cH='else ',cI='old=computed=this.',ci="qx.propertyDebugLevel",ch='if(value===undefined)prop.error(this,2,"',ck=' of an instance of ',cj='if(old===computed)return value;',cm='"), msg)',cl='!(',co='(value);',cn='var prop=qx.core.Property;',cg='if(old===undefined)old=null;',cf=' is not (yet) ready!");',K=')',L='var msg = "Invalid incoming value for property \'',M='===value)return value;',N='return init;',O='var init=this.',P=')prop.error(this,5,"',Q="Error in property ",R='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',S='.check.call(this, value)',T='.validate.call(this, value);',cM='else{',cL=" in method ",cK='=computed;',cJ='(backup);',cQ='if(computed===inherit){',cP="inherit",cO='if(arguments.length!==1)prop.error(this,1,"',cN='if(a[i].',cS='else if(computed===undefined)',cR="': ",bt=" of class ",bu='===undefined)return;',br="')){",bs='.check, msg)',bx='else this.',by='value=this.',bv='if(init==qx.core.Property.$$inherit)init=null;',bw='qx.core.Assert.assertInArray(value, ',bp='var inherit=prop.$$inherit;',bq="', qx.event.type.Data, [computed, old]",bc='computed=undefined;delete this.',bb='computed=value;',be='}else{',bd='if(this.$$initialized)prop.error(this,0,"',X='qx.core.Assert.assertInstance(value, qx.Class.getByName("',W='if(value===null)prop.error(this,4,"',ba='){',Y='!',V='if(computed===undefined||computed===inherit){',U='!==inherit){',bD="function",bE=")}",bF='(computed, old, "',bG='return value;',bz='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bA="if(reg.hasListener(this, '",bB='\'";',bC=')a[i].',bH=';}',bI='if(value!==null)',bm="var reg=qx.event.Registration;",bl='return null;',bk='");',bj='!==undefined&&',bi='var pa=this.getLayoutParent();if(pa)computed=pa.',bh='var computed, old;',bg='var backup=computed;',bf="object",bo='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',bn='if(computed===undefined)computed=null;',bJ='\' of class \'',bK='if(value!==inherit)',bL='var computed, old=this.',bM='throw new Error("Property ',bN='if(',bO=" with incoming value '",bP='if(arguments.length!==0)prop.error(this,3,"',bQ="reg.fireEvent(this, '",bR='if(computed===undefined||computed==inherit)computed=null;',bS='if((computed===undefined||computed===inherit)&&',ce="qx.core.Property";
qx.Class.define(ce,{statics:{__O:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'(typeof value === "string" || value instanceof String) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__P:{"Object":true,"Array":true,"Map":true,"Function":true,"Date":true,"Node":true,"Element":true,"Document":true,"Window":true,"Event":true,"Class":true,"Mixin":true,"Interface":true,"Theme":true,"Font":true,"Decorator":true},$$inherit:cP,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:ca,dispose:bV,inheritable:bV,nullable:bV,themeable:bV,refine:bV,init:null,apply:ca,event:ca,check:null,transform:ca,deferredInit:bV,validate:null},$$allowedGroupKeys:{name:ca,group:bf,mode:ca,themeable:bV},$$inheritable:{},refresh:function(du){var parent=du.getLayoutParent();

if(parent){var dx=du.constructor;
var dz=this.$$store.inherit;
var dy=this.$$store.init;
var dw=this.$$method.refresh;
var dA;
var dv;

if(qx.core.Variant.isSet(cz,cC)){if(qx.core.Setting.get(ci)>1){du.debug("Update property inheritance");
}}
while(dx){dA=dx.$$properties;

if(dA){for(var name in this.$$inheritable){if(dA[name]&&du[dw[name]]){dv=parent[dz[name]];

if(dv===undefined){dv=parent[dy[name]];
}
if(qx.core.Variant.isSet(cz,cC)){if(qx.core.Setting.get(ci)>2){du.debug("Updating property: "+name+" to '"+dv+"'");
}}du[dw[name]](dv);
}}}dx=dx.superclass;
}}},attach:function(di){var dj=di.$$properties;

if(dj){for(var name in dj){this.attachMethods(di,name,dj[name]);
}}di.$$propertiesAttached=true;
},attachMethods:function(ds,name,dt){dt.group?this.__Q(ds,dt,name):this.__R(ds,dt,name);
},__Q:function(z,A,name){var H=qx.lang.String.firstUp(name);
var G=z.prototype;
var I=A.themeable===true;

if(qx.core.Variant.isSet("qx.debug","on")){if(qx.core.Setting.get("qx.propertyDebugLevel")>1){qx.log.Logger.debug("Generating property group: "+name);
}}var J=[];
var D=[];

if(I){var B=[];
var F=[];
}var E="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
J.push(E);

if(I){B.push(E);
}
if(A.mode=="shorthand"){var C="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
J.push(C);

if(I){B.push(C);
}}
for(var i=0,a=A.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet("qx.debug","on")){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}J.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
D.push("this.",this.$$method.reset[a[i]],"();");

if(I){if(qx.core.Variant.isSet("qx.debug","on")){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}B.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
F.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+H;
G[this.$$method.set[name]]=new Function(J.join(""));
this.$$method.reset[name]="reset"+H;
G[this.$$method.reset[name]]=new Function(D.join(""));

if(I){this.$$method.setThemed[name]="setThemed"+H;
G[this.$$method.setThemed[name]]=new Function(B.join(""));
this.$$method.resetThemed[name]="resetThemed"+H;
G[this.$$method.resetThemed[name]]=new Function(F.join(""));
}},__R:function(b,c,name){var e=qx.lang.String.firstUp(name);
var g=b.prototype;

if(qx.core.Variant.isSet("qx.debug","on")){if(qx.core.Setting.get("qx.propertyDebugLevel")>1){qx.log.Logger.debug("Generating property wrappers: "+name);
}}if(c.dispose===undefined&&typeof c.check==="string"){c.dispose=this.__P[c.check]||qx.Class.isDefined(c.check)||qx.Interface.isDefined(c.check);
}var f=this.$$method;
var d=this.$$store;
d.runtime[name]="$$runtime_"+name;
d.user[name]="$$user_"+name;
d.theme[name]="$$theme_"+name;
d.init[name]="$$init_"+name;
d.inherit[name]="$$inherit_"+name;
d.useinit[name]="$$useinit_"+name;
f.get[name]="get"+e;
g[f.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,b,name,"get");
};
f.set[name]="set"+e;
g[f.set[name]]=function(cV){return qx.core.Property.executeOptimizedSetter(this,b,name,"set",arguments);
};
f.reset[name]="reset"+e;
g[f.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,"reset");
};

if(c.inheritable||c.apply||c.event||c.deferredInit){f.init[name]="init"+e;
g[f.init[name]]=function(dr){return qx.core.Property.executeOptimizedSetter(this,b,name,"init",arguments);
};
}
if(c.inheritable){f.refresh[name]="refresh"+e;
g[f.refresh[name]]=function(cU){return qx.core.Property.executeOptimizedSetter(this,b,name,"refresh",arguments);
};
}f.setRuntime[name]="setRuntime"+e;
g[f.setRuntime[name]]=function(r){return qx.core.Property.executeOptimizedSetter(this,b,name,"setRuntime",arguments);
};
f.resetRuntime[name]="resetRuntime"+e;
g[f.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,"resetRuntime");
};

if(c.themeable){f.setThemed[name]="setThemed"+e;
g[f.setThemed[name]]=function(h){return qx.core.Property.executeOptimizedSetter(this,b,name,"setThemed",arguments);
};
f.resetThemed[name]="resetThemed"+e;
g[f.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,b,name,"resetThemed");
};
}
if(c.check==="Boolean"){g["toggle"+e]=new Function("return this."+f.set[name]+"(!this."+f.get[name]+"())");
g["is"+e]=new Function("return this."+f.get[name]+"()");
}},__S:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(s,t,u,v,w){var x=s.constructor.classname;
var y=Q+u+bt+x+cL+this.$$method[v][u]+bO+w+cR;
throw new Error(y+(this.__S[t]||"Unknown reason: "+t));
},__T:function(dk,dl,name,dm,dn,dp){var dq=this.$$method[dm][name];
if(qx.core.Variant.isSet("qx.debug","on")){if(qx.core.Setting.get("qx.propertyDebugLevel")>1){qx.log.Logger.debug("Code["+this.$$method[dm][name]+"]: "+dn.join(""));
}try{dl[dq]=new Function("value",dn.join(""));
}catch(cT){alert("Malformed generated code to unwrap method: "+this.$$method[dm][name]+"\n"+dn.join(""));
}}else{dl[dq]=new Function("value",dn.join(""));
}if(qx.core.Variant.isSet("qx.aspects","on")){dl[dq]=qx.core.Aspect.wrap(dk.classname+"."+dq,dl[dq],"property");
}if(dp===undefined){return dk[dq]();
}else if(qx.core.Variant.isSet("qx.debug","on")){return dk[dq].apply(dk,dp);
}else{return dk[dq](dp[0]);
}},executeOptimizedGetter:function(j,k,name,m){var o=k.$$properties[name];
var q=k.prototype;
var n=[];
var p=this.$$store;
n.push(cu,p.runtime[name],ct);
n.push(bY,p.runtime[name],cy);

if(o.inheritable){n.push(cb,p.inherit[name],ct);
n.push(bY,p.inherit[name],cy);
n.push(cH);
}n.push(cu,p.user[name],ct);
n.push(bY,p.user[name],cy);

if(o.themeable){n.push(cb,p.theme[name],ct);
n.push(bY,p.theme[name],cy);
}
if(o.deferredInit&&o.init===undefined){n.push(cb,p.init[name],ct);
n.push(bY,p.init[name],cy);
}n.push(cH);

if(o.init!==undefined){if(o.inheritable){n.push(O,p.init[name],cy);

if(o.nullable){n.push(bv);
}else if(o.init!==undefined){n.push(bY,p.init[name],cy);
}else{n.push(bz,name,ck,k.classname,cf);
}n.push(N);
}else{n.push(bY,p.init[name],cy);
}}else if(o.inheritable||o.nullable){n.push(bl);
}else{n.push(bM,name,ck,k.classname,cf);
}return this.__T(j,q,name,m,n);
},executeOptimizedSetter:function(cW,cX,name,cY,da){var dg=cX.$$properties[name];
var df=cX.prototype;
var dc=[];
var db=cY===cr||cY===cq||cY===cp||(cY===cc&&dg.init===undefined);
var dd=cY===cE||cY===bU||cY===cD;
var de=dg.apply||dg.event||dg.inheritable;

if(cY===cp||cY===cD){var dh=this.$$store.runtime[name];
}else if(cY===cq||cY===bU){var dh=this.$$store.theme[name];
}else if(cY===cc){var dh=this.$$store.init[name];
}else{var dh=this.$$store.user[name];
}if(qx.core.Variant.isSet(cz,cC)){dc.push(cn);

if(cY===cc){dc.push(bd,name,bX,cY,bW);
}
if(cY===cF){}else if(db){dc.push(cO,name,bX,cY,bW);
dc.push(ch,name,bX,cY,bW);
}else{dc.push(bP,name,bX,cY,bW);
}}else{if(!dg.nullable||dg.check||dg.inheritable){dc.push(cn);
}if(cY===cr){dc.push(ch,name,bX,cY,bW);
}}if(db){if(dg.transform){dc.push(by,dg.transform,co);
}if(dg.validate){if(typeof dg.validate===ca){dc.push(cv,dg.validate,co);
}else if(dg.validate instanceof Function){dc.push(cX.classname,cA,name);
dc.push(T);
}}}if(de){if(db){dc.push(cu,dh,M);
}else if(dd){dc.push(cu,dh,bu);
}}if(dg.inheritable){dc.push(bp);
}if(qx.core.Variant.isSet(cz,cC)){if(db){if(!dg.nullable){dc.push(W,name,bX,cY,bW);
}if(dg.check!==undefined){dc.push(L+name+bJ+cX.classname+bB);
if(dg.nullable){dc.push(bI);
}if(dg.inheritable){dc.push(bK);
}dc.push(bN);

if(this.__O[dg.check]!==undefined){dc.push(cl,this.__O[dg.check],K);
}else if(qx.Class.isDefined(dg.check)){dc.push(X,dg.check,cm);
}else if(qx.Interface&&qx.Interface.isDefined(dg.check)){dc.push(bo,dg.check,cm);
}else if(typeof dg.check===bD){dc.push(Y,cX.classname,cA,name);
dc.push(S);
}else if(typeof dg.check===ca){dc.push(cl,dg.check,K);
}else if(dg.check instanceof Array){dc.push(bw,cX.classname,cA,name,bs);
}else{throw new Error("Could not add check to property "+name+" of class "+cX.classname);
}dc.push(P,name,bX,cY,bW);
}}}
if(!de){if(cY===cp){dc.push(cv,this.$$store.runtime[name],cw);
}else if(cY===cD){dc.push(cu,this.$$store.runtime[name],ct);
dc.push(cs,this.$$store.runtime[name],cy);
}else if(cY===cr){dc.push(cv,this.$$store.user[name],cw);
}else if(cY===cE){dc.push(cu,this.$$store.user[name],ct);
dc.push(cs,this.$$store.user[name],cy);
}else if(cY===cq){dc.push(cv,this.$$store.theme[name],cw);
}else if(cY===bU){dc.push(cu,this.$$store.theme[name],ct);
dc.push(cs,this.$$store.theme[name],cy);
}else if(cY===cc&&db){dc.push(cv,this.$$store.init[name],cw);
}}else{if(dg.inheritable){dc.push(bL,this.$$store.inherit[name],cy);
}else{dc.push(bh);
}dc.push(cu,this.$$store.runtime[name],bT);

if(cY===cp){dc.push(cx,this.$$store.runtime[name],cw);
}else if(cY===cD){dc.push(cs,this.$$store.runtime[name],cy);
dc.push(cu,this.$$store.user[name],ct);
dc.push(cx,this.$$store.user[name],cy);
dc.push(cb,this.$$store.theme[name],ct);
dc.push(cx,this.$$store.theme[name],cy);
dc.push(cb,this.$$store.init[name],bT);
dc.push(cx,this.$$store.init[name],cy);
dc.push(cv,this.$$store.useinit[name],cG);
dc.push(cd);
}else{dc.push(cI,this.$$store.runtime[name],cy);
if(cY===cr){dc.push(cv,this.$$store.user[name],cw);
}else if(cY===cE){dc.push(cs,this.$$store.user[name],cy);
}else if(cY===cq){dc.push(cv,this.$$store.theme[name],cw);
}else if(cY===bU){dc.push(cs,this.$$store.theme[name],cy);
}else if(cY===cc&&db){dc.push(cv,this.$$store.init[name],cw);
}}dc.push(cd);
dc.push(cb,this.$$store.user[name],bT);

if(cY===cr){if(!dg.inheritable){dc.push(cB,this.$$store.user[name],cy);
}dc.push(cx,this.$$store.user[name],cw);
}else if(cY===cE){if(!dg.inheritable){dc.push(cB,this.$$store.user[name],cy);
}dc.push(cs,this.$$store.user[name],cy);
dc.push(cu,this.$$store.runtime[name],ct);
dc.push(cx,this.$$store.runtime[name],cy);
dc.push(cu,this.$$store.theme[name],ct);
dc.push(cx,this.$$store.theme[name],cy);
dc.push(cb,this.$$store.init[name],bT);
dc.push(cx,this.$$store.init[name],cy);
dc.push(cv,this.$$store.useinit[name],cG);
dc.push(cd);
}else{if(cY===cp){dc.push(cx,this.$$store.runtime[name],cw);
}else if(dg.inheritable){dc.push(cx,this.$$store.user[name],cy);
}else{dc.push(cI,this.$$store.user[name],cy);
}if(cY===cq){dc.push(cv,this.$$store.theme[name],cw);
}else if(cY===bU){dc.push(cs,this.$$store.theme[name],cy);
}else if(cY===cc&&db){dc.push(cv,this.$$store.init[name],cw);
}}dc.push(cd);
if(dg.themeable){dc.push(cb,this.$$store.theme[name],bT);

if(!dg.inheritable){dc.push(cB,this.$$store.theme[name],cy);
}
if(cY===cp){dc.push(cx,this.$$store.runtime[name],cw);
}else if(cY===cr){dc.push(cx,this.$$store.user[name],cw);
}else if(cY===cq){dc.push(cx,this.$$store.theme[name],cw);
}else if(cY===bU){dc.push(cs,this.$$store.theme[name],cy);
dc.push(cu,this.$$store.init[name],bT);
dc.push(cx,this.$$store.init[name],cy);
dc.push(cv,this.$$store.useinit[name],cG);
dc.push(cd);
}else if(cY===cc){if(db){dc.push(cv,this.$$store.init[name],cw);
}dc.push(cx,this.$$store.theme[name],cy);
}else if(cY===cF){dc.push(cx,this.$$store.theme[name],cy);
}dc.push(cd);
}dc.push(cb,this.$$store.useinit[name],ba);

if(!dg.inheritable){dc.push(cB,this.$$store.init[name],cy);
}
if(cY===cc){if(db){dc.push(cx,this.$$store.init[name],cw);
}else{dc.push(cx,this.$$store.init[name],cy);
}}else if(cY===cr||cY===cp||cY===cq||cY===cF){dc.push(cs,this.$$store.useinit[name],cy);

if(cY===cp){dc.push(cx,this.$$store.runtime[name],cw);
}else if(cY===cr){dc.push(cx,this.$$store.user[name],cw);
}else if(cY===cq){dc.push(cx,this.$$store.theme[name],cw);
}else if(cY===cF){dc.push(cx,this.$$store.init[name],cy);
}}dc.push(cd);
if(cY===cr||cY===cp||cY===cq||cY===cc){dc.push(cM);

if(cY===cp){dc.push(cx,this.$$store.runtime[name],cw);
}else if(cY===cr){dc.push(cx,this.$$store.user[name],cw);
}else if(cY===cq){dc.push(cx,this.$$store.theme[name],cw);
}else if(cY===cc){if(db){dc.push(cx,this.$$store.init[name],cw);
}else{dc.push(cx,this.$$store.init[name],cy);
}dc.push(cv,this.$$store.useinit[name],cG);
}dc.push(cd);
}}
if(dg.inheritable){dc.push(V);

if(cY===cF){dc.push(bb);
}else{dc.push(bi,this.$$store.inherit[name],cy);
}dc.push(bS);
dc.push(cv,this.$$store.init[name],bj);
dc.push(cv,this.$$store.init[name],U);
dc.push(cx,this.$$store.init[name],cy);
dc.push(cv,this.$$store.useinit[name],cG);
dc.push(be);
dc.push(cs,this.$$store.useinit[name],bH);
dc.push(cd);
dc.push(cj);
dc.push(cQ);
dc.push(bc,this.$$store.inherit[name],cy);
dc.push(cd);
dc.push(cS);
dc.push(cs,this.$$store.inherit[name],cy);
dc.push(bx,this.$$store.inherit[name],cK);
dc.push(bg);
dc.push(cg);
dc.push(bR);
}else if(de){if(cY!==cr&&cY!==cp&&cY!==cq){dc.push(bn);
}dc.push(cj);
dc.push(cg);
}if(de){if(dg.apply){dc.push(cv,dg.apply,bF,name,bk);
}if(dg.event){dc.push(bm,bA,dg.event,br,bQ,dg.event,bq,bE);
}if(dg.inheritable&&df._getChildren){dc.push(R);
dc.push(cN,this.$$method.refresh[name],bC,this.$$method.refresh[name],cJ);
dc.push(cd);
}}if(db){dc.push(bG);
}return this.__T(cW,df,name,cY,dc,da);
}},settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var q="on",p="qx.debug",o="$$hash",n="qx.core.ObjectRegistry";
qx.Bootstrap.define(n,{statics:{inShutDown:false,__U:{},__V:0,__W:[],register:function(r){var u=this.__U;

if(!u){return;
}var t=r.$$hash;

if(t==null){var s=this.__W;

if(s.length>0){t=s.pop();
}else{t=(this.__V++).toString(36);
}r.$$hash=t;
}
if(qx.core.Variant.isSet(p,q)){if(!r.dispose){throw new Error("Invalid object: "+r);
}}u[t]=r;
},unregister:function(e){var f=e.$$hash;

if(f==null){return;
}var g=this.__U;

if(g&&g[f]){delete g[f];
this.__W.push(f);
}try{delete e.$$hash;
}catch(B){if(e.removeAttribute){e.removeAttribute(o);
}}},toHashCode:function(v){if(qx.core.Variant.isSet(p,q)){if(v==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+v);
}}var x=v.$$hash;

if(x!=null){return x;
}var w=this.__W;

if(w.length>0){x=w.pop();
}else{x=(this.__V++).toString(36);
}return v.$$hash=x;
},clearHashCode:function(y){if(qx.core.Variant.isSet(p,q)){if(y==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+y);
}}var z=y.$$hash;

if(z!=null){this.__W.push(z);
try{delete y.$$hash;
}catch(A){if(y.removeAttribute){y.removeAttribute(o);
}}}},fromHashCode:function(d){return this.__U[d]||null;
},shutdown:function(){this.inShutDown=true;
var j=this.__U;
var m=[];

for(var k in j){m.push(k);
}m.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var h,i=0,l=m.length;

while(true){try{for(;i<l;i++){k=m[i];
h=j[k];

if(h&&h.dispose){h.dispose();
}}}catch(c){qx.log.Logger.error(this,"Could not dispose object "+h.toString()+": "+c);

if(i!==0){continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__U;
},getRegistry:function(){return this.__U;
}}});
})();
(function(){var W="",V="!",U="'!",T="Expected '",S="number",R=",",Q="'",P="Event (",O="' but found ",N="The value '",bV="function",bU="Expected value to be an array but found ",bT="' to implement the interface '",bS=") was fired.",bR="Expected value to be an integer >= 0 but found ",bQ="' to be not equal with '",bP="' to '",bO="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3', which cannot be converted to a CSS color!",bN="Expected value to be a map but found ",bM="The function did not raise an exception!",be="Expected value to be undefined but found ",bf="Called assertFalse with 'true'",bc="Expected value to be null but found ",bd="Expected object '",ba="string",bb="Called assert with 'false'",X="Expected value to be a string but found ",Y="' but found '",bj="Called assertTrue with 'false'",bk="' must must be a key of the map '",bs="The String '",bq="Expected value not to be undefined but found ",bA="The raised exception does not have the expected type! ",bv=") not fired.",bI="qx.core.Assert",bF="Expected value to be typeof object but found ",bm="' (identical) but found '",bL="' must have any of the values defined in the array '",bK="Expected value to be a number but found ",bJ="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3' (rgb(%4))!",bl="Expected value not to be null but found ",bo="Expected value to be a qooxdoo widget but found ",bp="Expected value to be a qooxdoo object but found ",br="' arguments.",bt="Expected value '%1' to be in the range '%2'..'%3'!",bw="' does not match the regular expression '",bC="' to be not identical with '",bH="' arguments but found '",bg=", ",bh="Expected value to be a boolean but found ",bn="boolean",bz="Expected value to be typeof '",by="Expected value to be typeof function but found ",bx="Expected value to be an integer but found ",bE="Called fail().",bD="Expected value to be a DOM element but found  '%1'!",bu="function Array(",bB="Expected value to be a number >= 0 but found ",M="Expected value to be instanceof '",bG="Wrong number of arguments given. Expected '",bi="object";
qx.Class.define(bI,{statics:{__X:function(j,k,l){if(!j){var m="Assertion error! "+k+": "+l;
qx.log.Logger.error(m);

if(qx.Class.isDefined("qx.core.AssertionError")){var n=new qx.core.AssertionError(k,l);
qx.log.Logger.error("Stack trace: \n"+n.getStackTrace());
throw n;
}else{throw new Error(m);
}}},assert:function(g,h){this.__X(g==true,h||W,bb);
},fail:function(y){this.__X(false,y||W,bE);
},assertTrue:function(G,H){this.__X(G===true,H||W,bj);
},assertFalse:function(dC,dD){this.__X(dC===false,dD||W,bf);
},assertEquals:function(dv,dw,dx){this.__X(dv==dw,dx||W,T+dv+Y+dw+U);
},assertNotEquals:function(o,p,q){this.__X(o!=p,q||W,T+o+bQ+p+U);
},assertIdentical:function(cN,cO,cP){this.__X(cN===cO,cP||W,T+cN+bm+cO+U);
},assertNotIdentical:function(cU,cV,cW){this.__X(cU!==cV,cW||W,T+cU+bC+cV+U);
},assertNotUndefined:function(bY,ca){this.__X(bY!==undefined,ca||W,bq+bY+V);
},assertUndefined:function(cz,cA){this.__X(cz===undefined,cA||W,be+cz+V);
},assertNotNull:function(cb,cc){this.__X(cb!==null,cc||W,bl+cb+V);
},assertNull:function(I,J){this.__X(I===null,J||W,bc+I+V);
},assertJsonEquals:function(c,d,f){this.assertEquals(qx.util.Json.stringify(c),qx.util.Json.stringify(d),f);
},assertMatch:function(dk,dl,dm){this.assertString(dk);
this.__X(dk.search(dl)>=0?true:false,dm||W,bs+dk+bw+dl.toString()+U);
},assertArgumentsCount:function(db,dc,dd,de){var df=db.length;
this.__X((df>=dc&&df<=dd),de||W,bG+dc+bP+dd+bH+arguments.length+br);
},assertEventFired:function(z,event,A,B,C){var E=false;
var D=function(e){if(B){B.call(z,e);
}E=true;
};
var F=z.addListener(event,D,z);
A.call();
this.__X(E===true,C||W,P+event+bv);
z.removeListenerById(F);
},assertEventNotFired:function(r,event,s,t){var v=false;
var u=function(e){v=true;
};
var w=r.addListener(event,u,r);
s.call();
this.__X(v===false,t||W,P+event+bS);
r.removeListenerById(w);
},assertException:function(cf,cg,ch,ci){var cg=cg||Error;
var cj;
qx.log.Logger.warn("This exception is expected: "+cg.classname);

try{cf();
}catch(dn){cj=dn;
}
if(cj==null){this.__X(false,ci||W,bM);
}this.__X(cj instanceof cg,ci||W,bA+cg);

if(ch){this.assertMatch(cj.toString(),ch,ci);
}},assertInArray:function(cw,cx,cy){this.__X(cx.indexOf(cw)!==-1,cy||W,N+cw+bL+cx.join(bg)+Q);
},assertArrayEquals:function(cX,cY,da){this.assertArray(cX,da);
this.assertArray(cY,da);
this.assertEquals(cX.length,cY.length,da);

for(var i=0;i<cX.length;i++){this.assertIdentical(cX[i],cY[i],da);
}},assertKeyInMap:function(cr,cs,ct){this.__X(cs[cr]!==undefined,ct||W,N+cr+bk+qx.util.Json.stringify(cs)+Q);
},assertFunction:function(cQ,cR){this.__X(typeof cQ===bV,cR||W,by+cQ+V);
},assertString:function(cd,ce){this.__X(typeof cd===ba||cd instanceof String,ce||W,X+cd+V);
},assertBoolean:function(cS,cT){this.__X(typeof cS===bn||cS instanceof Boolean,cT||W,bh+cS+V);
},assertNumber:function(bW,bX){this.__X((typeof bW===S||bW instanceof Number)&&isFinite(bW),bX||W,bK+bW+V);
},assertPositiveNumber:function(cL,cM){this.__X((typeof cL===S||cL instanceof Number)&&isFinite(cL)&&cL>=0,cM||W,bB+cL+V);
},assertInteger:function(dy,dz){this.__X(((typeof dy===S||dy instanceof Number)&&isFinite(dy)&&dy%1===0),dz||W,bx+dy+V);
},assertPositiveInteger:function(cu,cv){this.__X(((typeof cu===S||cu instanceof Number)&&isFinite(cu)&&cu%1===0&&cu>=0),cv||W,bR+cu+V);
},assertInRange:function(cB,cC,cD,cE){this.__X(cB>=cC&&cB<=cD,cE||W,qx.lang.String.format(bt,[cB,cC,cD]));
},assertObject:function(K,L){this.__X(typeof K===bi&&K!==null,L||W,bF+K+V);
},assertArray:function(dg,dh){this.__X(dg instanceof Array||dg.constructor.toString().indexOf(bu)===0||dg.$$isArray,dh||W,bU+dg+V);
},assertMap:function(co,cp){var cq=({}).constructor;
this.__X(co&&co.constructor===cq,cp||W,bN+co+V);
},assertType:function(dp,dq,dr){this.__X(typeof (dp)===dq,dr||W,bz+dq+O+dp+V);
},assertInstance:function(ck,cl,cm){var cn=cl.classname||cl+W;
this.__X(ck instanceof cl,cm||W,M+cn+O+ck+V);
},assertInterface:function(ds,dt,du){this.__X(qx.Class.implementsInterface(ds,dt),du||W,bd+ds+bT+dt+U);
},assertCssColor:function(cF,cG,cH){var cI=qx.util.ColorUtil;
var cK=cI.stringToRgb(cF);

try{var cJ=cI.stringToRgb(cG);
}catch(x){this.__X(false,cH||W,qx.lang.String.format(bO,[cF,cK.join(R),cG]));
}this.__X(cK[0]==cJ[0]&&cK[1]==cJ[1]&&cK[2]==cJ[2],cH||W,qx.lang.String.format(bJ,[cF,cK.join(R),cG,cJ.join(R)]));
},assertElement:function(a,b){this.__X(qx.dom.Node.isElement(a),b||W,qx.lang.String.format(bD,[a]));
},assertQxObject:function(dA,dB){this.__X(dA instanceof qx.core.Object,dB||W,bp+dA+V);
},assertQxWidget:function(di,dj){this.__X(di instanceof qx.ui.core.Widget,dj||W,bo+di+V);
}}});
})();
(function(){var y="qx.debug",x="Mixin",w="qx.Mixin",v="events",u="[Mixin ",t="]",s="members",r="on",q="properties",p="statics";
qx.Class.define(w,{statics:{define:function(name,C){if(C){if(C.include&&!(C.include instanceof Array)){C.include=[C.include];
}if(qx.core.Variant.isSet(y,r)){this.__ba(name,C);
}var E=C.statics?C.statics:{};

for(var D in E){if(E[D] instanceof Function){E[D].$$mixin=E;
}}if(C.construct){E.$$constructor=C.construct;
}
if(C.include){E.$$includes=C.include;
}
if(C.properties){E.$$properties=C.properties;
}
if(C.members){E.$$members=C.members;
}
for(var D in E.$$members){if(E.$$members[D] instanceof Function){E.$$members[D].$$mixin=E;
}}
if(C.events){E.$$events=C.events;
}
if(C.destruct){E.$$destructor=C.destruct;
}}else{var E={};
}E.$$type=x;
E.name=name;
E.toString=this.genericToString;
E.basename=qx.Bootstrap.createNamespace(name,E);
this.$$registry[name]=E;
return E;
},checkCompatibility:function(b){var e=this.flatten(b);
var f=e.length;

if(f<2){return true;
}var j={};
var h={};
var g={};
var d;

for(var i=0;i<f;i++){d=e[i];

for(var c in d.events){if(g[c]){throw new Error('Conflict between mixin "'+d.name+'" and "'+g[c]+'" in member "'+c+'"!');
}g[c]=d.name;
}
for(var c in d.properties){if(j[c]){throw new Error('Conflict between mixin "'+d.name+'" and "'+j[c]+'" in property "'+c+'"!');
}j[c]=d.name;
}
for(var c in d.members){if(h[c]){throw new Error('Conflict between mixin "'+d.name+'" and "'+h[c]+'" in member "'+c+'"!');
}h[c]=d.name;
}}return true;
},isCompatible:function(z,A){var B=qx.Class.getMixins(A);
B.push(z);
return qx.Mixin.checkCompatibility(B);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(F){if(!F){return [];
}var G=F.concat();

for(var i=0,l=F.length;i<l;i++){if(F[i].$$includes){G.push.apply(G,this.flatten(F[i].$$includes));
}}return G;
},genericToString:function(){return u+this.name+t;
},$$registry:{},__Y:qx.core.Variant.select("qx.debug",{"on":{"include":"object","statics":"object","members":"object","properties":"object","events":"object","destruct":"function","construct":"function"},"default":null}),__ba:qx.core.Variant.select(y,{"on":function(name,k){var o=this.__Y;

for(var n in k){if(!o[n]){throw new Error('The configuration key "'+n+'" in mixin "'+name+'" is not allowed!');
}
if(k[n]==null){throw new Error('Invalid key "'+n+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(o[n]!==null&&typeof k[n]!==o[n]){throw new Error('Invalid type of key "'+n+'" in mixin "'+name+'"! The type of the key must be "'+o[n]+'"!');
}}var m=[p,s,q,v];

for(var i=0,l=m.length;i<l;i++){var n=m[i];

if(k[n]!==undefined&&(k[n] instanceof Array||k[n] instanceof RegExp||k[n] instanceof Date||k[n].classname!==undefined)){throw new Error('Invalid key "'+n+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(k.include){for(var i=0,a=k.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==x){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(k.include);
}},"default":function(){}})}});
})();
(function(){var a="qx.core.MAssert";
qx.Mixin.define(a,{members:{assert:function(bg,bh){qx.core.Assert.assert(bg,bh);
},fail:function(bb){qx.core.Assert.fail(bb);
},assertTrue:function(z,A){qx.core.Assert.assertTrue(z,A);
},assertFalse:function(bH,bI){qx.core.Assert.assertFalse(bH,bI);
},assertEquals:function(bi,bj,bk){qx.core.Assert.assertEquals(bi,bj,bk);
},assertNotEquals:function(bM,bN,bO){qx.core.Assert.assertNotEquals(bM,bN,bO);
},assertIdentical:function(B,C,D){qx.core.Assert.assertIdentical(B,C,D);
},assertNotIdentical:function(w,x,y){qx.core.Assert.assertNotIdentical(w,x,y);
},assertNotUndefined:function(bV,bW){qx.core.Assert.assertNotUndefined(bV,bW);
},assertUndefined:function(G,H){qx.core.Assert.assertUndefined(G,H);
},assertNotNull:function(bA,bB){qx.core.Assert.assertNotNull(bA,bB);
},assertNull:function(b,c){qx.core.Assert.assertNull(b,c);
},assertJsonEquals:function(bS,bT,bU){qx.core.Assert.assertJsonEquals(bS,bT,bU);
},assertMatch:function(bv,bw,bx){qx.core.Assert.assertMatch(bv,bw,bx);
},assertArgumentsCount:function(bc,bd,be,bf){qx.core.Assert.assertArgumentsCount(bc,bd,be,bf);
},assertEventFired:function(f,event,g,h,i){qx.core.Assert.assertEventFired(f,event,g,h,i);
},assertEventNotFired:function(l,event,m,n){qx.core.Assert.assertEventNotFired(l,event,m,n);
},assertException:function(W,X,Y,ba){qx.core.Assert.assertException(W,X,Y,ba);
},assertInArray:function(bE,bF,bG){qx.core.Assert.assertInArray(bE,bF,bG);
},assertArrayEquals:function(bJ,bK,bL){qx.core.Assert.assertArrayEquals(bJ,bK,bL);
},assertKeyInMap:function(bP,bQ,bR){qx.core.Assert.assertKeyInMap(bP,bQ,bR);
},assertFunction:function(bn,bo){qx.core.Assert.assertFunction(bn,bo);
},assertString:function(bC,bD){qx.core.Assert.assertString(bC,bD);
},assertBoolean:function(L,M){qx.core.Assert.assertBoolean(L,M);
},assertNumber:function(N,O){qx.core.Assert.assertNumber(N,O);
},assertPositiveNumber:function(P,Q){qx.core.Assert.assertPositiveNumber(P,Q);
},assertInteger:function(j,k){qx.core.Assert.assertInteger(j,k);
},assertPositiveInteger:function(bp,bq){qx.core.Assert.assertPositiveInteger(bp,bq);
},assertInRange:function(br,bs,bt,bu){qx.core.Assert.assertInRange(br,bs,bt,bu);
},assertObject:function(d,e){qx.core.Assert.assertObject(d,e);
},assertArray:function(E,F){qx.core.Assert.assertArray(E,F);
},assertMap:function(bl,bm){qx.core.Assert.assertMap(bl,bm);
},assertType:function(R,S,T){qx.core.Assert.assertType(R,S,T);
},assertInstance:function(I,J,K){qx.core.Assert.assertInstance(I,J,K);
},assertInterface:function(o,p,q){qx.core.Assert.assertInterface(o,p,q);
},assertCssColor:function(r,s,t){qx.core.Assert.assertCssColor(r,s,t);
},assertElement:function(U,V){qx.core.Assert.assertElement(U,V);
},assertQxObject:function(u,v){qx.core.Assert.assertQxObject(u,v);
},assertQxWidget:function(by,bz){qx.core.Assert.assertQxWidget(by,bz);
}}});
})();
(function(){var f="qx.data.MBinding";
qx.Mixin.define(f,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(a){qx.data.SingleValueBinding.removeBindingFromObject(this,a);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var G="unknown",F="node",E="error",D="...(+",C="array",B=")",A="info",z="instance",y="string",x="null",be="qx.debug",bd="class",bc="number",bb="stringify",ba="]",Y="function",X="boolean",W="debug",V="map",U="on",N="undefined",O="qx.log.Logger",L=")}",M="#",J="warn",K="document",H="{...(",I="[",P="text[",Q="[...(",S="\n",R=")]",T="object";
qx.Bootstrap.define(O,{statics:{__bb:50,__bc:W,setLevel:function(m){this.__bc=m;
},getLevel:function(){return this.__bc;
},setTreshold:function(bo){this.__bb=bo;
},getTreshold:function(){return this.__bb;
},__bd:{},__be:0,register:function(f){if(f.$$id){return;
}var h=this.__be++;
this.__bd[h]=f;
f.$$id=h;
var g=this.__bf;

for(var i=0,l=g.length;i<l;i++){f.process(g[i]);
}},unregister:function(a){var b=a.$$id;

if(b==null){return;
}delete this.__bd[b];
delete a.$$id;
},debug:function(n,o){this.__bh(W,arguments);
},info:function(c,d){this.__bh(A,arguments);
},warn:function(j,k){this.__bh(J,arguments);
},error:function(bp,bq){this.__bh(E,arguments);
},trace:function(e){this.__bh(A,[e,qx.dev.StackTrace.getStackTrace().join(S)]);
},deprecatedMethodWarning:function(bf,bg){if(qx.core.Variant.isSet(be,U)){var bi=qx.lang.Function.getName(bf);
var bh=bf.self?bf.self.classname:G;
this.warn("The method '"+bi+"' of class '"+bh+"' is deprecated: "+bg||"Please consult the API documentation of this method for alternatives.");
this.trace();
}},deprecatedClassWarning:function(bj,bk){if(qx.core.Variant.isSet(be,U)){var bl=bj.self?bj.self.classname:G;
this.warn("The method class '"+bl+"' is deprecated: "+bk||"Please consult the API documentation of this class for alternatives.");
this.trace();
}},clear:function(){this.__bf=[];
},__bf:[],__bg:{debug:0,info:1,warn:2,error:3},__bh:function(br,bs){var bx=this.__bg;

if(bx[br]<bx[this.__bc]){return;
}var bu=bs.length<2?null:bs[0];
var bw=bu?1:0;
var bt=[];

for(var i=bw,l=bs.length;i<l;i++){bt.push(this.__bj(bs[i],true));
}var bz=new Date;
var bA={time:bz,offset:bz-qx.Bootstrap.LOADSTART,level:br,items:bt,win:window};
if(bu){if(bu instanceof qx.core.Object){bA.object=bu.$$hash;
}else if(bu.$$type){bA.clazz=bu;
}}var by=this.__bf;
by.push(bA);

if(by.length>(this.__bb+10)){by.splice(this.__bb,by.length);
}var bB=this.__bd;

for(var bv in bB){bB[bv].process(bA);
}},__bi:function(bm){if(bm===undefined){return N;
}else if(bm===null){return x;
}
if(bm.$$type){return bd;
}var bn=typeof bm;

if(bn===Y||bn==y||bn===bc||bn===X){return bn;
}else if(bn===T){if(bm.nodeType){return F;
}else if(bm.classname){return z;
}else if(bm instanceof Array){return C;
}else if(bm instanceof Error){return E;
}else{return V;
}}
if(bm.toString){return bb;
}return G;
},__bj:function(p,q){var w=this.__bi(p);
var s=G;

switch(w){case x:case N:s=w;
break;
case y:case bc:case X:s=p;
break;
case F:if(p.nodeType===9){s=K;
}else if(p.nodeType===3){s=P+p.nodeValue+ba;
}else if(p.nodeType===1){s=p.nodeName.toLowerCase();

if(p.id){s+=M+p.id;
}}else{s=F;
}break;
case Y:s=qx.lang.Function.getName(p)||w;
break;
case z:s=p.basename+I+p.$$hash+ba;
break;
case bd:case bb:case E:s=p.toString();
break;
case C:if(q){s=[];

for(var i=0,l=p.length;i<l;i++){if(s.length>20){s.push(D+(l-i)+B);
break;
}s.push(this.__bj(p[i],false));
}}else{s=Q+p.length+R;
}break;
case V:if(q){var r;
var v=[];

for(var u in p){v.push(u);
}v.sort();
s=[];

for(var i=0,l=v.length;i<l;i++){if(s.length>20){s.push(D+(l-i)+B);
break;
}u=v[i];
r=this.__bj(p[u],false);
r.key=u;
s.push(r);
}}else{var t=0;

for(var u in p){t++;
}s=H+t+L;
}break;
}return {type:w,text:s};
}}});
})();
(function(){var bc="qx.debug",bb="on",ba="qx.disposerDebugLevel",Y="qx.core.Object",X="__bl",W="]",V="[",U="object",T="string",S="Object";
qx.Class.define(Y,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:S},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+V+this.$$hash+W;
},base:function(bz,bA){if(arguments.length===1){return bz.callee.base.call(this);
}else{return bz.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bi){return bi.callee.self;
},clone:function(){var bC=this.constructor;
var bB=new bC;
var bE=qx.Class.getProperties(bC);
var bD=qx.core.Property.$$store.user;
var bF=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bE.length;i<l;i++){name=bE[i];

if(this.hasOwnProperty(bD[name])){bB[bF[name]](this[bD[name]]);
}}return bB;
},serialize:function(){var be=this.constructor;
var bg=qx.Class.getProperties(be);
var bh=qx.core.Property.$$store.user;
var name,bd;
var bf={classname:be.classname,properties:{}};
for(var i=0,l=bg.length;i<l;i++){name=bg[i];

if(this.hasOwnProperty(bh[name])){bd=this[bh[name]];

if(bd instanceof qx.core.Object){bf.properties[name]={$$hash:bd.$$hash};
}else{bf.properties[name]=bd;
}}}return bf;
},set:function(r,s){var u=qx.core.Property.$$method.set;

if(typeof r===T){if(qx.core.Variant.isSet(bc,bb)){if(!this[u[r]]){this.error("No such property: "+r);
return this;
}}return this[u[r]](s);
}else{for(var t in r){if(qx.core.Variant.isSet(bc,bb)){if(!this[u[t]]){this.error("No such property: "+t);
continue;
}}this[u[t]](r[t]);
}return this;
}},get:function(G){var H=qx.core.Property.$$method.get;

if(qx.core.Variant.isSet(bc,bb)){if(!this[H[G]]){this.error("No such property: "+G);
return;
}}return this[H[G]]();
},reset:function(D){var E=qx.core.Property.$$method.reset;

if(qx.core.Variant.isSet(bc,bb)){if(!this[E[D]]){this.error("No such property: "+D);
return;
}}this[E[D]]();
},__bk:qx.event.Registration,addListener:function(bj,bk,self,bl){if(!this.$$disposed){return this.__bk.addListener(this,bj,bk,self,bl);
}return null;
},addListenerOnce:function(d,f,self,g){var h=function(e){f.call(self||this,e);
this.removeListener(d,h,this,g);
};
return this.addListener(d,h,this,g);
},removeListener:function(P,Q,self,R){if(!this.$$disposed){return this.__bk.removeListener(this,P,Q,self,R);
}return false;
},removeListenerById:function(I){if(!this.$$disposed){return this.__bk.removeListenerById(this,I);
}return false;
},hasListener:function(b,c){return this.__bk.hasListener(this,b,c);
},dispatchEvent:function(j){if(!this.$$disposed){return this.__bk.dispatchEvent(this,j);
}return true;
},fireEvent:function(L,M,N){if(!this.$$disposed){return this.__bk.fireEvent(this,L,M,N);
}return true;
},fireNonBubblingEvent:function(bm,bn,bo){if(!this.$$disposed){return this.__bk.fireNonBubblingEvent(this,bm,bn,bo);
}return true;
},fireDataEvent:function(k,m,n,o){if(!this.$$disposed){return this.__bk.fireNonBubblingEvent(this,k,qx.event.type.Data,[m,n||null,!!o]);
}return true;
},__bl:null,setUserData:function(bx,by){if(!this.__bl){this.__bl={};
}this.__bl[bx]=by;
},getUserData:function(x){if(!this.__bl){return null;
}var y=this.__bl[x];
return y===undefined?null:y;
},__bm:qx.log.Logger,debug:function(O){this.__bm.debug(this,O);
},info:function(J){this.__bm.info(this,J);
},warn:function(p){this.__bm.warn(this,p);
},error:function(q){this.__bm.error(this,q);
},trace:function(){this.__bm.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
if(qx.core.Variant.isSet(bc,bb)){if(qx.core.Setting.get(ba)>1){qx.log.Logger.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var B=this.constructor;
var z;

while(B.superclass){if(B.$$destructor){B.$$destructor.call(this);
}if(B.$$includes){z=B.$$flatIncludes;

for(var i=0,l=z.length;i<l;i++){if(z[i].$$destructor){z[i].$$destructor.call(this);
}}}B=B.superclass;
}if(qx.core.Variant.isSet(bc,bb)){if(qx.core.Setting.get(ba)>0){var C,A;

for(C in this){A=this[C];
if(A!==null&&typeof A===U&&!(A instanceof String)){if(this.constructor.prototype[C]!=null){continue;
}qx.log.Logger.warn(this,"Missing destruct definition for '"+C+"' in "+this.classname+"["+this.toHashCode()+"]: "+A);
delete this[C];
}}}}},_disposeFields:function(a){qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(w){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(K){qx.util.DisposeUtil.disposeArray(this,K);
},_disposeMap:function(v){qx.util.DisposeUtil.disposeMap(this,v);
}},settings:{"qx.disposerDebugLevel":0},defer:function(F){if(qx.core.Variant.isSet(bc,bb)){qx.Class.include(F,qx.core.MAssert);
}},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(X);
var br=this.constructor;
var bv;
var bw=qx.core.Property.$$store;
var bt=bw.user;
var bu=bw.theme;
var bp=bw.inherit;
var bs=bw.useinit;
var bq=bw.init;

while(br){bv=br.$$properties;

if(bv){for(var name in bv){if(bv[name].dispose){this[bt[name]]=this[bu[name]]=this[bp[name]]=this[bs[name]]=this[bq[name]]=undefined;
}}}br=br.superclass;
}}});
})();
(function(){var l="",k="g",j="0",h='\\$1',g="%",f='-',e="qx.lang.String",d=' ',c='\n',b="undefined";
qx.Bootstrap.define(e,{statics:{camelCase:function(a){return a.replace(/\-([a-z])/g,function(B,C){return C.toUpperCase();
});
},hyphenate:function(Q){return Q.replace(/[A-Z]/g,function(A){return (f+A.charAt(0).toLowerCase());
});
},capitalize:function(x){return x.replace(/\b[a-z]/g,function(P){return P.toUpperCase();
});
},clean:function(H){return H.replace(/\s+/g,d).trim();
},trimLeft:function(I){return I.replace(/^\s+/,l);
},trimRight:function(t){return t.replace(/\s+$/,l);
},trim:function(E){return E.replace(/^\s+|\s+$/g,l);
},startsWith:function(y,z){return y.substring(0,z.length)===z;
},endsWith:function(F,G){return F.substring(F.length-G.length,F.length)===G;
},pad:function(p,length,q){if(typeof q===b){q=j;
}var r=l;

for(var i=p.length;i<length;i++){r+=q;
}return r+p;
},firstUp:function(w){return w.charAt(0).toUpperCase()+w.substr(1);
},firstLow:function(K){return K.charAt(0).toLowerCase()+K.substr(1);
},contains:function(u,v){return u.indexOf(v)!=-1;
},format:function(m,n){var o=m;

for(var i=0;i<n.length;i++){o=o.replace(new RegExp(g+(i+1),k),n[i]);
}return o;
},escapeRegexpChars:function(D){return D.replace(/([.*+?^${}()|[\]\/\\])/g,h);
},toArray:function(J){return J.split(/\B|\b/g);
},stripTags:function(s){return s.replace(/<\/?[^>]+>/gi,l);
},stripScripts:function(L,M){var O=l;
var N=L.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){O+=arguments[1]+c;
return l;
});

if(M===true){qx.lang.Function.globalEval(O);
}return N;
}}});
})();
(function(){var O="qx.debug",N="object",M="function",L="Interface",K="on",J="string",I="boolean",H="qx.Interface",G="events",F="properties",C="]",E="members",D="number",B="[Interface ",A="statics";
qx.Class.define(H,{statics:{define:function(name,W){if(W){if(W.extend&&!(W.extend instanceof Array)){W.extend=[W.extend];
}if(qx.core.Variant.isSet(O,K)){this.__bs(name,W);
}var X=W.statics?W.statics:{};
if(W.extend){X.$$extends=W.extend;
}
if(W.properties){X.$$properties=W.properties;
}
if(W.members){X.$$members=W.members;
}
if(W.events){X.$$events=W.events;
}}else{var X={};
}X.$$type=L;
X.name=name;
X.toString=this.genericToString;
X.basename=qx.Bootstrap.createNamespace(name,X);
qx.Interface.$$registry[name]=X;
return X;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(Y){if(!Y){return [];
}var ba=Y.concat();

for(var i=0,l=Y.length;i<l;i++){if(Y[i].$$extends){ba.push.apply(ba,this.flatten(Y[i].$$extends));
}}return ba;
},__bn:function(m,n,o,p){var s=o.$$members;

if(s){for(var r in s){if(typeof s[r]===M){if(typeof m[r]===M){if(p===true&&!qx.Class.hasInterface(n,o)){m[r]=this.__bq(o,m[r],r,s[r]);
}}else{var q=r.match(/^(get|set|reset)(.*)$/);

if(!q||!qx.Class.hasProperty(n,qx.lang.String.firstLow(q[2]))){throw new Error('Implementation of method "'+r+'" is missing in class "'+n.classname+'" required by interface "'+o.name+'"');
}}}else{if(typeof m[r]===undefined){if(typeof m[r]!==M){throw new Error('Implementation of member "'+r+'" is missing in class "'+n.classname+'" required by interface "'+o.name+'"');
}}}}}},__bo:function(T,U){if(U.$$properties){for(var V in U.$$properties){if(!qx.Class.hasProperty(T,V)){throw new Error('The property "'+V+'" is not supported by Class "'+T.classname+'"!');
}}}},__bp:function(t,u){if(u.$$events){for(var v in u.$$events){if(!qx.Class.supportsEvent(t,v)){throw new Error('The event "'+v+'" is not supported by Class "'+t.classname+'"!');
}}}},assertObject:function(g,h){var k=g.constructor;
this.__bn(g,k,h,false);
this.__bo(k,h);
this.__bp(k,h);
var j=h.$$extends;

if(j){for(var i=0,l=j.length;i<l;i++){this.assertObject(g,j[i]);
}}},assert:function(P,Q,R){this.__bn(P.prototype,P,Q,R);
this.__bo(P,Q);
this.__bp(P,Q);
var S=Q.$$extends;

if(S){for(var i=0,l=S.length;i<l;i++){this.assert(P,S[i],R);
}}},genericToString:function(){return B+this.name+C;
},$$registry:{},__bq:qx.core.Variant.select(O,{"on":function(b,c,d,e){function f(){e.apply(this,arguments);
return c.apply(this,arguments);
}c.wrapper=f;
return f;
},"default":function(){}}),__br:qx.core.Variant.select(O,{"on":{"extend":N,"statics":N,"members":N,"properties":N,"events":N},"default":null}),__bs:qx.core.Variant.select(O,{"on":function(name,w){if(qx.core.Variant.isSet(O,K)){var z=this.__br;

for(var y in w){if(z[y]===undefined){throw new Error('The configuration key "'+y+'" in class "'+name+'" is not allowed!');
}
if(w[y]==null){throw new Error("Invalid key '"+y+"' in interface '"+name+"'! The value is undefined/null!");
}
if(z[y]!==null&&typeof w[y]!==z[y]){throw new Error('Invalid type of key "'+y+'" in interface "'+name+'"! The type of the key must be "'+z[y]+'"!');
}}var x=[A,E,F,G];

for(var i=0,l=x.length;i<l;i++){var y=x[i];

if(w[y]!==undefined&&(w[y] instanceof Array||w[y] instanceof RegExp||w[y] instanceof Date||w[y].classname!==undefined)){throw new Error('Invalid key "'+y+'" in interface "'+name+'"! The value needs to be a map!');
}}if(w.extend){for(var i=0,a=w.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==L){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(w.statics){for(var y in w.statics){if(y.toUpperCase()!==y){throw new Error('Invalid key "'+y+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof w.statics[y]){case I:case J:case D:break;
default:throw new Error('Invalid key "'+y+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var c="qx.event.IEventHandler";
qx.Interface.define(c,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(a,b){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var r="load",q="unload",p="qx.client",o="ready",n="mshtml",m="qx.event.handler.Application",l="complete",k="gecko|opera|webkit",j="left",i="_window",g="DOMContentLoaded",h="shutdown";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){arguments.callee.base.call(this);
this._window=y.getWindow();
this.__bt=false;
this.__bu=false;
this.__bv=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var w=qx.event.handler.Application.$$instance;

if(w){w.__bt=true;
w.__bw();
}}},members:{canHandleEvent:function(a,b){},registerEvent:function(c,d,e){},unregisterEvent:function(t,u,v){},__bw:function(){if(!this.__bx&&this.__bu&&this.__bt){this.__bx=true;
qx.event.Registration.fireEvent(this._window,o);
}},_initObserver:function(){if(qx.$$domReady||document.readyState==l){this.__bu=true;
this.__bw();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(p,k)){qx.bom.Event.addNativeListener(this._window,g,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(p,n)){var x=function(){try{document.documentElement.doScroll(j);
this._onNativeLoadWrapped();
}catch(s){setTimeout(x,100);
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
},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var l="_window",k="_manager",j="qx.event.handler.Window";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){arguments.callee.base.call(this);
this._manager=u;
this._window=u.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(m,n){},registerEvent:function(a,b,c){},unregisterEvent:function(r,s,t){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var w=qx.event.handler.Window.SUPPORTED_TYPES;

for(var v in w){qx.bom.Event.addNativeListener(this._window,v,this._onNativeWrapper);
}},_stopWindowObserver:function(){var p=qx.event.handler.Window.SUPPORTED_TYPES;

for(var o in p){qx.bom.Event.removeNativeListener(this._window,o,this._onNativeWrapper);
}},_onNative:function(e){if(this.isDisposed()){return;
}var f=this._window;
var i=f.document;
var g=i.documentElement;
var d=e.target||e.srcElement;

if(d==null||d===f||d===i||d===g){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,f]);
qx.event.Registration.dispatchEvent(f,event);
var h=event.getReturnValue();

if(h!=null){e.returnValue=h;
return h;
}}}},destruct:function(){this._stopWindowObserver();
this._disposeFields(k,l);
},defer:function(q){qx.event.Registration.addHandler(q);
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
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(b,event,c){return !event.getBubbles();
},dispatchEvent:function(d,event,e){event.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(d,e,false);

if(f){for(var i=0,l=f.length;i<l;i++){var g=f[i].context||d;
f[i].handler.call(g,event);
}}}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__bA||null;
},__bz:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var j=qx.core.Setting.get(d);
var k=qx.Class.getByName(j);

if(k){this.__bA=new k;
var i=new Date;
this.__bA.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-i)+"ms");
var i=new Date;
this.__bA.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-i)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+j);
}},__bB:function(e){var h=this.__bA;

if(h){e.setReturnValue(h.close());
}},__bC:function(){var g=this.__bA;

if(g){g.terminate();
}}},defer:function(l){qx.event.Registration.addListener(window,f,l.__bz,l);
qx.event.Registration.addListener(window,a,l.__bC,l);
qx.event.Registration.addListener(window,c,l.__bB,l);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
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
(function(){var d="abstract",c="__bD",b="qx.application.AbstractGui";
qx.Class.define(b,{type:d,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__bD:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__bD;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
this.__bD=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this._disposeFields(c);
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var g="demobrowser.Application",f="viewer",e="qx.debug",d="demobrowser/css/style.css",c="script/demodata.js",b="demobrowser/css/sourceview.css",a="on";
qx.Class.define(g,{extend:qx.application.Standalone,members:{main:function(){arguments.callee.base.call(this);
if(qx.core.Variant.isSet(e,a)){qx.log.appender.Native;
qx.log.appender.Console;
}this.viewer=new demobrowser.DemoBrowser;
this.getRoot().add(this.viewer,{edge:0});
},finalize:function(){arguments.callee.base.call(this);
this.viewer.dataLoader(c);
}},defer:function(){qx.bom.Stylesheet.includeFile(d);
qx.bom.Stylesheet.includeFile(b);
},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var m='"',k="qx.lang.Core",j="\\\\",h="\\\"",g="[object Error]";
qx.Bootstrap.define(k);
if(!Error.prototype.toString||Error.prototype.toString()==g){Error.prototype.toString=function(){return this.message;
};
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(t,u){if(u==null){u=0;
}else if(u<0){u=Math.max(0,this.length+u);
}
for(var i=u;i<this.length;i++){if(this[i]===t){return i;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(p,q){if(q==null){q=this.length-1;
}else if(q<0){q=Math.max(0,this.length+q);
}
for(var i=q;i>=0;i--){if(this[i]===p){return i;
}}return -1;
};
}
if(!Array.prototype.forEach){Array.prototype.forEach=function(n,o){var l=this.length;

for(var i=0;i<l;i++){n.call(o,this[i],i,this);
}};
}
if(!Array.prototype.filter){Array.prototype.filter=function(d,e){var l=this.length;
var f=[];

for(var i=0;i<l;i++){if(d.call(e,this[i],i,this)){f.push(this[i]);
}}return f;
};
}
if(!Array.prototype.map){Array.prototype.map=function(a,b){var l=this.length;
var c=[];

for(var i=0;i<l;i++){c.push(a.call(b,this[i],i,this));
}return c;
};
}
if(!Array.prototype.some){Array.prototype.some=function(r,s){var l=this.length;

for(var i=0;i<l;i++){if(r.call(s,this[i],i,this)){return true;
}}return false;
};
}
if(!Array.prototype.every){Array.prototype.every=function(v,w){var l=this.length;

for(var i=0;i<l;i++){if(!v.call(w,this[i],i,this)){return false;
}}return true;
};
}if(!String.prototype.quote){String.prototype.quote=function(){return m+this.replace(/\\/g,j).replace(/\"/g,h)+m;
};
}})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Bootstrap.define(G,{statics:{__bE:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__bF:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bG:function(){var J=qx.lang.Generics.__bE;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__bF(L,M);
}}}}},defer:function(O){O.__bG();
}});
})();
(function(){var F=":",E="qx.client",D="anonymous",C="...",B="qx.dev.StackTrace",A="",z="\n",y="/source/class/",x=".";
qx.Class.define(B,{statics:{getStackTrace:qx.core.Variant.select(E,{"gecko":function(){try{throw new Error();
}catch(G){var O=this.getStackTraceFromError(G);
qx.lang.Array.removeAt(O,0);
var M=this.getStackTraceFromCaller(arguments);
var K=M.length>O.length?M:O;

for(var i=0;i<Math.min(M.length,O.length);i++){var L=M[i];

if(L.indexOf(D)>=0){continue;
}var S=L.split(F);

if(S.length!=2){continue;
}var Q=S[0];
var J=S[1];
var I=O[i];
var T=I.split(F);
var P=T[0];
var H=T[1];

if(qx.Class.getByName(P)){var N=P;
}else{N=Q;
}var R=N+F;

if(J){R+=J+F;
}R+=H;
K[i]=R;
}return K;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var W;

try{W.bar();
}catch(V){var X=this.getStackTraceFromError(V);
qx.lang.Array.removeAt(X,0);
return X;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(E,{"opera":function(v){return [];
},"default":function(a){var f=[];
var e=qx.lang.Function.getCaller(a);
var b={};

while(e){var c=qx.lang.Function.getName(e);
f.push(c);

try{e=e.caller;
}catch(w){break;
}
if(!e){break;
}var d=qx.core.ObjectRegistry.toHashCode(e);

if(b[d]){f.push(C);
break;
}b[d]=e;
}return f;
}}),getStackTraceFromError:qx.core.Variant.select(E,{"gecko":function(o){if(!o.stack){return [];
}var u=/@(.+):(\d+)$/gm;
var p;
var q=[];

while((p=u.exec(o.stack))!=null){var r=p[1];
var t=p[2];
var s=this.__bH(r);
q.push(s+F+t);
}return q;
},"webkit":function(U){if(U.sourceURL&&U.line){return [this.__bH(U.sourceURL)+F+U.line];
}else{return [];
}},"opera":function(g){if(g.message.indexOf("Backtrace:")<0){return [];
}var j=[];
var k=qx.lang.String.trim(g.message.split("Backtrace:")[1]);
var l=k.split(z);

for(var i=0;i<l.length;i++){var h=l[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(h&&h.length>=2){var n=h[1];
var m=this.__bH(h[2]);
j.push(m+F+n);
}}return j;
},"default":function(){return [];
}}),__bH:function(Y){var bc=y;
var ba=Y.indexOf(bc);
var bb=(ba==-1)?Y:Y.substring(ba+bc.length).replace(/\//g,x).replace(/\.js$/,A);
return bb;
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.event.type.Event",b="qx.data.IListData";
qx.Interface.define(b,{events:{"change":d,"changeLength":c},members:{getItem:function(h){},setItem:function(i,j){},splice:function(e,f,g){},contains:function(a){},getLength:function(){},toArray:function(){}}});
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
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bK=qx.dev.StackTrace.getStackTrace();
},members:{__bK:null,getStackTrace:function(){return this.__bK;
}}});
})();
(function(){var x=",",w="",v="string",u="null",t='"',s="qx.jsonDebugging",r='\\u00',q="new Date(Date.UTC(",p=")",o='\\\\',X='\\f',W="Object",V='\\"',U="))",T="}",S='(',R=":",Q="{",P='\\r',O="__bN",E="__bM",F="__bX",C='\\t',D="(",A="]",B="qx.jsonEncodeUndefined",y="[",z="__bP",G="__bW",H='\\b',J="qx.util.Json",I=')',L='\\n',K="Date",N="__bO",M="Array";
qx.Class.define(J,{statics:{BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__bL:{"function":E,"boolean":O,"number":N,"string":z,"object":G,"undefined":F},__bM:function(bf){return String(bf);
},__bN:function(bc){return String(bc);
},__bO:function(bb){return isFinite(bb)?String(bb):u;
},__bP:function(Y){var ba;

if(/["\\\x00-\x1f]/.test(Y)){ba=Y.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__bR);
}else{ba=Y;
}return t+ba+t;
},__bQ:{'\b':H,'\t':C,'\n':L,'\f':X,'\r':P,'"':V,'\\':o},__bR:function(a,b){var a=qx.util.Json.__bQ[b];

if(a){return a;
}a=b.charCodeAt();
return r+Math.floor(a/16).toString(16)+(a%16).toString(16);
},__bS:function(bm){var bo=[],br=true,bq,bn;
var bp=qx.util.Json.__bY;
bo.push(y);

if(bp){qx.util.Json.__bT+=qx.util.Json.BEAUTIFYING_INDENT;
bo.push(qx.util.Json.__bT);
}
for(var i=0,l=bm.length;i<l;i++){bn=bm[i];
bq=this.__bL[typeof bn];

if(bq){bn=this[bq](bn);

if(typeof bn==v){if(!br){bo.push(x);

if(bp){bo.push(qx.util.Json.__bT);
}}bo.push(bn);
br=false;
}}}
if(bp){qx.util.Json.__bT=qx.util.Json.__bT.substring(0,qx.util.Json.__bT.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bo.push(qx.util.Json.__bT);
}bo.push(A);
return bo.join(w);
},__bU:function(bk){var bl=bk.getUTCFullYear()+x+bk.getUTCMonth()+x+bk.getUTCDate()+x+bk.getUTCHours()+x+bk.getUTCMinutes()+x+bk.getUTCSeconds()+x+bk.getUTCMilliseconds();
return q+bl+U;
},__bV:function(e){var h=[],m=true,g,f;
var j=qx.util.Json.__bY;
h.push(Q);

if(j){qx.util.Json.__bT+=qx.util.Json.BEAUTIFYING_INDENT;
h.push(qx.util.Json.__bT);
}
for(var k in e){f=e[k];
g=this.__bL[typeof f];

if(g){f=this[g](f);

if(typeof f==v){if(!m){h.push(x);

if(j){h.push(qx.util.Json.__bT);
}}h.push(this.__bP(k),R,f);
m=false;
}}}
if(j){qx.util.Json.__bT=qx.util.Json.__bT.substring(0,qx.util.Json.__bT.length-qx.util.Json.BEAUTIFYING_INDENT.length);
h.push(qx.util.Json.__bT);
}h.push(T);
return h.join(w);
},__bW:function(c){if(c){var d=c.constructor.name;

if(c instanceof Array||d==M){return this.__bS(c);
}else if(c instanceof Date||d==K){return this.__bU(c);
}else if(c instanceof Object||d==W){return this.__bV(c);
}return w;
}return u;
},__bX:function(bg){if(qx.core.Setting.get(B)){return u;
}},stringify:function(bh,bi){this.__bY=bi;
this.__bT=this.BEAUTIFYING_LINE_END;
var bj=this[this.__bL[typeof bh]](bh);

if(typeof bj!=v){bj=null;
}if(qx.core.Setting.get(s)){qx.log.Logger.debug(this,"JSON request: "+bj);
}return bj;
},parse:function(bs){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bs.replace(/"(\\.|[^"\\])*"/g,w))){throw new Error("Could not parse JSON string!");
}
try{return eval(D+bs+p);
}catch(n){throw new Error("Could not evaluate JSON string: "+n.message);
}},parseQx:function(bd){if(qx.core.Setting.get(s)){qx.log.Logger.debug(this,"JSON response: "+bd);
}var be=(bd&&bd.length>0)?eval(S+bd+I):null;
return be;
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false}});
})();
(function(){var W=",",V="rgb(",U=")",T="qx.theme.manager.Color",S="qx.util.ColorUtil";
qx.Class.define(S,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42],grey:[128,128,128]},isNamedColor:function(C){return this.NAMED[C]!==undefined;
},isSystemColor:function(Y){return this.SYSTEM[Y]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(T);
},isThemedColor:function(X){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(X);
},stringToRgb:function(bb){if(this.supportsThemes()&&this.isThemedColor(bb)){var bb=qx.theme.manager.Color.getInstance().resolveDynamic(bb);
}
if(this.isNamedColor(bb)){return this.NAMED[bb];
}else if(this.isSystemColor(bb)){throw new Error("Could not convert system colors to RGB: "+bb);
}else if(this.isRgbString(bb)){return this.__ca();
}else if(this.isHex3String(bb)){return this.__cb();
}else if(this.isHex6String(bb)){return this.__cc();
}throw new Error("Could not parse color: "+bb);
},cssStringToRgb:function(be){if(this.isNamedColor(be)){return this.NAMED[be];
}else if(this.isSystemColor(be)){throw new Error("Could not convert system colors to RGB: "+be);
}else if(this.isRgbString(be)){return this.__ca();
}else if(this.isHex3String(be)){return this.__cb();
}else if(this.isHex6String(be)){return this.__cc();
}throw new Error("Could not parse color: "+be);
},stringToRgbString:function(ba){return this.rgbToRgbString(this.stringToRgb(ba));
},rgbToRgbString:function(A){return V+A[0]+W+A[1]+W+A[2]+U;
},rgbToHexString:function(x){return (qx.lang.String.pad(x[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(x[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(x[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(e){return this.isThemedColor(e)||this.isNamedColor(e)||this.isHex3String(e)||this.isHex6String(e)||this.isRgbString(e);
},isCssString:function(h){return this.isSystemColor(h)||this.isNamedColor(h)||this.isHex3String(h)||this.isHex6String(h)||this.isRgbString(h);
},isHex3String:function(bd){return this.REGEXP.hex3.test(bd);
},isHex6String:function(B){return this.REGEXP.hex6.test(B);
},isRgbString:function(w){return this.REGEXP.rgb.test(w);
},__ca:function(){var v=parseInt(RegExp.$1,10);
var u=parseInt(RegExp.$2,10);
var s=parseInt(RegExp.$3,10);
return [v,u,s];
},__cb:function(){var d=parseInt(RegExp.$1,16)*17;
var c=parseInt(RegExp.$2,16)*17;
var a=parseInt(RegExp.$3,16)*17;
return [d,c,a];
},__cc:function(){var F=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var E=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var D=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [F,E,D];
},hex3StringToRgb:function(bc){if(this.isHex3String(bc)){return this.__cb(bc);
}throw new Error("Invalid hex3 value: "+bc);
},hex6StringToRgb:function(y){if(this.isHex6String(y)){return this.__cc(y);
}throw new Error("Invalid hex6 value: "+y);
},hexStringToRgb:function(z){if(this.isHex3String(z)){return this.__cb(z);
}
if(this.isHex6String(z)){return this.__cc(z);
}throw new Error("Invalid hex value: "+z);
},rgbToHsb:function(G){var I,J,L;
var R=G[0];
var O=G[1];
var H=G[2];
var Q=(R>O)?R:O;

if(H>Q){Q=H;
}var K=(R<O)?R:O;

if(H<K){K=H;
}L=Q/255.0;

if(Q!=0){J=(Q-K)/Q;
}else{J=0;
}
if(J==0){I=0;
}else{var N=(Q-R)/(Q-K);
var P=(Q-O)/(Q-K);
var M=(Q-H)/(Q-K);

if(R==Q){I=M-P;
}else if(O==Q){I=2.0+N-M;
}else{I=4.0+P-N;
}I=I/6.0;

if(I<0){I=I+1.0;
}}return [Math.round(I*360),Math.round(J*100),Math.round(L*100)];
},hsbToRgb:function(j){var i,f,p,q,t;
var k=j[0]/360;
var l=j[1]/100;
var m=j[2]/100;

if(k>=1.0){k%=1.0;
}
if(l>1.0){l=1.0;
}
if(m>1.0){m=1.0;
}var n=Math.floor(255*m);
var o={};

if(l==0.0){o.red=o.green=o.blue=n;
}else{k*=6.0;
i=Math.floor(k);
f=k-i;
p=Math.floor(n*(1.0-l));
q=Math.floor(n*(1.0-(l*f)));
t=Math.floor(n*(1.0-(l*(1.0-f))));

switch(i){case 0:o.red=n;
o.green=t;
o.blue=p;
break;
case 1:o.red=q;
o.green=n;
o.blue=p;
break;
case 2:o.red=p;
o.green=n;
o.blue=t;
break;
case 3:o.red=p;
o.green=q;
o.blue=n;
break;
case 4:o.red=t;
o.green=p;
o.blue=n;
break;
case 5:o.red=n;
o.green=p;
o.blue=q;
break;
}}return o;
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var t="qx.debug",s="on",r="Cannot stop propagation on a non bubbling event: ",q="_relatedTarget",p="_target",o="Invalid argument value 'cancelable'.",n="Cannot prevent default action on a non cancelable event: ",m="Invalid argument value 'canBubble'.",l="qx.event.type.Event",k="_originalTarget",j="_currentTarget";
qx.Class.define(l,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(a,b){if(qx.core.Variant.isSet(t,s)){if(a!==undefined){qx.core.Assert.assertBoolean(a,m);
}
if(b!==undefined){qx.core.Assert.assertBoolean(b,o);
}}this._type=null;
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
},stopPropagation:function(){if(qx.core.Variant.isSet(t,s)){this.assertTrue(this._bubbles,r+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Variant.isSet(t,s)){this.assertTrue(this._cancelable,n+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(v){this._type=v;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(u){this._eventPhase=u;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(e){this._target=e;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(g){this._currentTarget=g;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(c){this._relatedTarget=c;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(f){this._originalTarget=f;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(w){this._bubbles=w;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(d){this._cancelable=d;
}},destruct:function(){this._disposeFields(p,j,q,k);
}});
})();
(function(){var e="__cd",d="Better use 'getData'",c="__ce",b="Better use 'getOldData'",a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(h,i,j){arguments.callee.base.call(this,false,j);
this.__cd=h;
this.__ce=i;
return this;
},clone:function(f){var g=arguments.callee.base.call(this,f);
g.__cd=this.__cd;
g.__ce=this.__ce;
return g;
},getData:function(){return this.__cd;
},getOldData:function(){return this.__ce;
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.__cd;
},getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.__ce;
}},destruct:function(){this._disposeFields(e,c);
}});
})();
(function(){var k="qx.util.ObjectPool",j="Integer";
qx.Class.define(k,{extend:qx.core.Object,construct:function(h){arguments.callee.base.call(this);
this.__cf={};

if(h!==undefined){this.setSize(h);
}},properties:{size:{check:j,init:null,nullable:true}},members:{__cf:null,getObject:function(m){if(this.$$disposed){return;
}
if(!m){throw new Error("Class needs to be defined!");
}var n=null;
var o=this.__cf[m.classname];

if(o){n=o.pop();
}
if(n){n.$$pooled=false;
}else{n=new m;
}return n;
},poolObject:function(d){if(!this.__cf){return;
}var e=d.classname;
var f=this.__cf[e];

if(d.$$pooled){throw new Error("Object is already pooled: "+d);
}
if(!f){this.__cf[e]=f=[];
}var g=this.getSize()||Infinity;

if(f.length>g){this.warn("Cannot pool "+d+" because the pool is already full.");
d.dispose();
return;
}d.$$pooled=true;
f.push(d);
}},destruct:function(){var c=this.__cf;
var a,b,i,l;

for(a in c){b=c[a];

for(i=0,l=b.length;i<l;i++){b[i].dispose();
}}delete this.__cf;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var bE="",bD="get",bC=".",bB="change",bA="last",bz="]",by="[",bx="Number",bw="String",bv="deepBinding",ca="' (",bY="on",bX="qx.debug",bW="Boolean",bV="set",bU=") to the object '",bT="item",bS="Integer",bR="reset",bQ="qx.event.type.Data",bL="qx.data.SingleValueBinding",bM="No event could be found for the property",bJ="Can not remove the bindings for null object!",bK="Binding from '",bH="PositiveNumber",bI="PositiveInteger",bF="Binding does not exist!",bG="model",bN=" is not an data (qx.event.type.Data) event on ",bO=").",bP="Date";
qx.Class.define(bL,{statics:{DEBUG_ON:false,__cg:{},bind:function(A,B,C,D,E){var J=B.split(bC);
var G=this.__cn(J);
var M=[];
var N=[];
var K=[];
var H=[];
var I=A;
for(var i=0;i<J.length;i++){if(G[i]!==bE){H.push(bB);
}else{H.push(this.__ci(I,J[i]));
}M[i]=I;
if(i==J.length-1){if(G[i]!==bE){var Q=G[i]===bA?I.length-1:G[i];
var F=I.getItem(Q);
this.__cm(F,C,D,E);
K[i]=this.__co(I,H[i],C,D,E,G[i]);
}else{if(J[i]!=null&&I[bD+qx.lang.String.firstUp(J[i])]!=null){var F=I[bD+qx.lang.String.firstUp(J[i])]();
this.__cm(F,C,D,E);
}K[i]=this.__co(I,H[i],C,D,E);
}}else{var O={index:i,propertyNames:J,sources:M,listenerIds:K,arrayIndexValues:G,targetObject:C,targetProperty:D,options:E,listeners:N};
var L=qx.lang.Function.bind(this.__ch,this,O);
N.push(L);
K[i]=I.addListener(H[i],L);
}if(I[bD+qx.lang.String.firstUp(J[i])]==null){I=null;
}else if(G[i]!==bE){I=I[bD+qx.lang.String.firstUp(J[i])](G[i]);
}else{I=I[bD+qx.lang.String.firstUp(J[i])]();
}
if(!I){break;
}}var P={type:bv,listenerIds:K,sources:M};
this.__cp(P,A,B,C,D);
return P;
},__ch:function(bn){for(var j=bn.index+1;j<bn.propertyNames.length;j++){var br=bn.sources[j];
bn.sources[j]=null;

if(!br){continue;
}br.removeListenerById(bn.listenerIds[j]);
}var br=bn.sources[bn.index];
for(var j=bn.index+1;j<bn.propertyNames.length;j++){if(bn.arrayIndexValues[j-1]!==bE){br=br[bD+qx.lang.String.firstUp(bn.propertyNames[j-1])](bn.arrayIndexValues[j-1]);
}else{br=br[bD+qx.lang.String.firstUp(bn.propertyNames[j-1])]();
}bn.sources[j]=br;
if(!br){this.__cj(bn.targetObject,bn.targetProperty);
break;
}if(j==bn.propertyNames.length-1){if(br instanceof qx.data.Array){var bs=bn.arrayIndexValues[j]===bA?br.length-1:bn.arrayIndexValues[j];
var bp=br.getItem(bs);
this.__cm(bp,bn.targetObject,bn.targetProperty,bn.options);
bn.listenerIds[j]=this.__co(br,bB,bn.targetObject,bn.targetProperty,bn.options,bn.arrayIndexValues[j]);
}else{if(bn.propertyNames[j]!=null&&br[bD+qx.lang.String.firstUp(bn.propertyNames[j])]!=null){var bp=br[bD+qx.lang.String.firstUp(bn.propertyNames[j])]();
this.__cm(bp,bn.targetObject,bn.targetProperty,bn.options);
}var bq=this.__ci(br,bn.propertyNames[j]);
bn.listenerIds[j]=this.__co(br,bq,bn.targetObject,bn.targetProperty,bn.options);
}}else{if(bn.listeners[j]==null){var bo=qx.lang.Function.bind(this.__ch,this,bn);
bn.listeners.push(bo);
}if(br instanceof qx.data.Array){var bq=bB;
}else{var bq=this.__ci(br,bn.propertyNames[j]);
}bn.listenerIds[j]=br.addListener(bq,bn.listeners[j]);
}}},__ci:function(x,y){var z=this.__cr(x,y);
if(z==null){if(qx.Class.supportsEvent(x.constructor,y)){z=y;
}else if(qx.Class.supportsEvent(x.constructor,bB+qx.lang.String.firstUp(y))){z=bB+qx.lang.String.firstUp(y);
}else{throw new qx.core.AssertionError(bM,y);
}}return z;
},__cj:function(cb,cc){var cd=this.__cl(cb,cc);

if(cd!=null){var ce=cc.substring(cc.lastIndexOf(bC)+1,cc.length);
cd[bR+qx.lang.String.firstUp(ce)]();
}},__ck:function(R,S,T){var U=this.__cl(R,S);

if(U!=null){var V=S.substring(S.lastIndexOf(bC)+1,S.length);
U[bV+qx.lang.String.firstUp(V)](T);
}},__cl:function(d,f){var k=f.split(bC);
var l=d;
for(var i=0;i<k.length-1;i++){try{var h=k[i];
if(h.indexOf(bz)==h.length-1){var g=h.substring(h.indexOf(by)+1,h.length-1);
h=h.substring(0,h.indexOf(by));
}l=l[bD+qx.lang.String.firstUp(h)]();

if(g!=null){if(g==bA){g=l.length-1;
}l=l.getItem(g);
g=null;
}}catch(w){return null;
}}return l;
},__cm:function(ck,cl,cm,cn){if(ck==null){this.__cj(cl,cm);
}ck=this.__cq(ck,cl,cm,cn);
if(ck!=undefined){this.__ck(cl,cm,ck);
}},__cn:function(a){var b=[];
for(var i=0;i<a.length;i++){var name=a[i];
if(qx.lang.String.endsWith(name,bz)){var c=name.substring(name.indexOf(by)+1,name.indexOf(bz));
if(name.indexOf(bz)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(c!==bA){if(c==bE||isNaN(parseInt(c))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}a[i]=name.substring(0,name.indexOf(by));
b[i]=bE;
b[i+1]=c;
a.splice(i+1,0,bT);
i++;
}else{b[i]=bE;
}}return b;
},__co:function(n,o,p,q,r,s){if(qx.core.Variant.isSet(bX,bY)){var t=qx.Class.getEventType(n.constructor,o);
qx.core.Assert.assertEquals(bQ,t,o+bN+n+bC);
}var v=function(W,e){if(W!==bE){if(W===bA){W=n.length-1;
}var ba=n.getItem(W);
if(ba==undefined){qx.data.SingleValueBinding.__cj(p,q);
}var X=e.getData().start;
var Y=e.getData().end;

if(W<X||W>Y){return;
}}else{var ba=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+n+" by "+o+" to "+p+" ("+q+")");
qx.log.Logger.debug("Data before conversion: "+ba);
}ba=qx.data.SingleValueBinding.__cq(ba,p,q,r);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+ba);
}try{if(ba!=undefined){qx.data.SingleValueBinding.__ck(p,q,ba);
}else{qx.data.SingleValueBinding.__cj(p,q);
}if(r&&r.onSetOk){r.onSetOk(n,p,ba);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(r&&r.onSetFail){r.onSetFail(e);
}else{this.warn("Failed so set value "+ba+" on "+p+". Error message: "+e);
}}};
if(!s){s=bE;
}v=qx.lang.Function.bind(v,n,s);
var u=n.addListener(o,v);
return u;
},__cp:function(cf,cg,ch,ci,cj){if(this.__cg[cg.toHashCode()]===undefined){this.__cg[cg.toHashCode()]=[];
}this.__cg[cg.toHashCode()].push([cf,cg,ch,ci,cj]);
},__cq:function(bf,bg,bh,bi){if(bi&&bi.converter){return bi.converter(bf,bg.getUserData(bG));
}else{var bl=this.__cl(bg,bh);
var bm=bh.substring(bh.lastIndexOf(bC)+1,bh.length);
if(bl==null){return bf;
}var bk=qx.Class.getPropertyDefinition(bl.constructor,bm);
var bj=bk==null?bE:bk.check;
return this.__cs(bf,bj);
}},__cr:function(cq,cr){var cs=qx.Class.getPropertyDefinition(cq.constructor,cr);

if(cs==null){return null;
}return cs.event;
},__cs:function(cw,cx){var cy=Object.prototype.toString.call(cw).slice(8,-1);
if((cy==bx||cy==bw)&&(cx==bS||cx==bI)){cw=parseInt(cw);
}if((cy==bW||cy==bx||cy==bP)&&cx==bw){cw=cw+bE;
}if((cy==bx||cy==bw)&&(cx==bx||cx==bH)){cw=parseFloat(cw);
}return cw;
},removeBindingFromObject:function(ct,cu){if(cu.type==bv){for(var i=0;i<cu.sources.length;i++){if(cu.sources[i]){cu.sources[i].removeListenerById(cu.listenerIds[i]);
}}}else{ct.removeListenerById(cu);
}var cv=this.__cg[ct.toHashCode()];
if(cv!=undefined){for(var i=0;i<cv.length;i++){if(cv[i][0]==cu){qx.lang.Array.remove(cv,cv[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bt){if(qx.core.Variant.isSet(bX,bY)){qx.core.Assert.assertNotNull(bt,bJ);
}var bu=this.__cg[bt.toHashCode()];
for(var i=bu.length-1;i>=0;i--){this.removeBindingFromObject(bt,bu[i][0]);
}},getAllBindingsForObject:function(m){if(this.__cg[m.toHashCode()]===undefined){this.__cg[m.toHashCode()]=[];
}return this.__cg[m.toHashCode()];
},removeAllBindings:function(){for(var cA in this.__cg){var cz=qx.core.ObjectRegistry.fromHashCode(cA);
if(cz==null){delete this.__cg[cA];
continue;
}this.removeAllBindingsForObject(cz);
}this.__cg={};
},getAllBindings:function(){return this.__cg;
},showBindingInLog:function(bb,bc){var be;
for(var i=0;i<this.__cg[bb.toHashCode()].length;i++){if(this.__cg[bb.toHashCode()][i][0]==bc){be=this.__cg[bb.toHashCode()][i];
break;
}}
if(be===undefined){var bd=bF;
}else{var bd=bK+be[1]+ca+be[2]+bU+be[3]+ca+be[4]+bO;
}qx.log.Logger.debug(bd);
},showAllBindingsInLog:function(){for(var cp in this.__cg){var co=qx.core.ObjectRegistry.fromHashCode(cp);

for(var i=0;i<this.__cg[cp].length;i++){this.showBindingInLog(co,this.__cg[cp][i][0]);
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
(function(){var p="change",o="add",n="order",m="remove",l="The parameter must be an array.",k="qx.data.Array",j="qx.debug",h="qx.event.type.Event",g="number",f="on",d="changeLength",e="qx.event.type.Data";
qx.Class.define(k,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(w){arguments.callee.base.call(this);
if(w==undefined){this.__cu=[];
}else if(arguments.length>1){this.__cu=[];

for(var i=0;i<arguments.length;i++){this.__cu.push(arguments[i]);
}}else if(typeof w==g){this.__cu=new Array(w);
}else if(w instanceof Array){this.__cu=[];

for(var i=0;i<w.length;i++){this.push(w[i]);
}}else{this.__cu=[];
throw new Error("Type of the parameter not supported!");
}this.__cv();
},events:{"change":e,"changeLength":h},members:{concat:function(F){var G=this.__cu.concat(F);
return new qx.data.Array(G);
},join:function(Y){return this.__cu.join(Y);
},pop:function(){var q=this.__cu.pop();
this.__cv();
this._applyEventPropagation(null,q);
this.fireDataEvent(p,{start:this.length-1,end:this.length-1,type:m},null);
return q;
},push:function(t){for(var i=0;i<arguments.length;i++){this.__cu.push(arguments[i]);
this.__cv();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(p,{start:this.length-1,end:this.length-1,type:o},null);
}return this.length;
},reverse:function(){this.__cu.reverse();
this.fireDataEvent(p,{start:0,end:this.length-1,type:n},null);
},shift:function(){var u=this.__cu.shift();
this.__cv();
this._applyEventPropagation(null,u);
this.fireDataEvent(p,{start:0,end:this.length-1,type:m,item:u},null);
return u;
},slice:function(W,X){return new qx.data.Array(this.__cu.slice(W,X));
},splice:function(L,M,N){var S=this.__cu.length;
var P=this.__cu.splice.apply(this.__cu,arguments);
if(this.__cu.length!=S){this.__cv();
}var Q=M>0;
var O=arguments.length>2;

if(Q||O){if(this.__cu.length>S){var R=o;
}else if(this.__cu.length<S){var R=m;
}else{var R=n;
}this.fireDataEvent(p,{start:L,end:this.length-1,type:R,item:null},null);
}for(var i=2;i<arguments.length;i++){this._applyEventPropagation(arguments[i],null,L+i);
}for(var i=0;i<P.length;i++){this._applyEventPropagation(null,P[i]);
}return (new qx.data.Array(P));
},sort:function(A){this.__cu.sort.apply(this.__cu,arguments);
this.fireDataEvent(p,{start:0,end:this.length-1,type:n,item:null},null);
},unshift:function(r){for(var i=arguments.length-1;i>=0;i--){this.__cu.unshift(arguments[i]);
this.__cv();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(p,{start:0,end:this.length-1,type:o,item:arguments[i]},null);
}return this.length;
},toArray:function(){return this.__cu;
},getItem:function(c){return this.__cu[c];
},setItem:function(B,C){var D=this.__cu[B];
this.__cu[B]=C;
this._applyEventPropagation(C,D,B);
if(this.length!=this.__cu.length){this.__cv();
}this.fireDataEvent(p,{start:B,end:B,type:o,item:C},null);
},getLength:function(){return this.length;
},indexOf:function(V){return this.__cu.indexOf(V);
},toString:function(){return this.__cu.toString();
},contains:function(T){return this.__cu.indexOf(T)!==-1;
},copy:function(){return this.concat();
},insertAt:function(H,I){this.splice(H,0,I);
},insertBefore:function(ba,bb){var bc=this.indexOf(ba);

if(bc==-1){this.push(bb);
}else{this.splice(bc,0,bb);
}},insertAfter:function(x,y){var z=this.indexOf(x);

if(z==-1||z==(this.length-1)){this.push(y);
}else{this.splice(z+1,0,y);
}},removeAt:function(a){return this.splice(a,1)[0];
},removeAll:function(){for(var i=0;i<this.__cu.length;i++){this._applyEventPropagation(null,this.__cu[i]);
}this.__cu.length=0;
this.__cv();
},append:function(b){if(qx.core.Variant.isSet(j,f)){qx.core.Assert.assertArray(b,l);
}for(var i=0;i<b.length;i++){this._applyEventPropagation(b[i],null,this.__cu.length+i);
}Array.prototype.push.apply(this.__cu,b);
this.__cv();
},remove:function(J){var K=this.indexOf(J);

if(K!=-1){this.splice(K,1);
return J;
}},equals:function(v){if(this.length!==v.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==v.getItem(i)){return false;
}}return true;
},sum:function(){var E=0;

for(var i=0;i<this.length;i++){E+=this.getItem(i);
}return E;
},max:function(){var U=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>U){U=this.getItem(i);
}}return U===undefined?null:U;
},min:function(){var s=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<s){s=this.getItem(i);
}}return s===undefined?null:s;
},__cv:function(){this.length=this.__cu.length;
this.fireEvent(d,qx.event.type.Event);
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var b="qx.event.handler.Object";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(c,d,e){},unregisterEvent:function(f,g,h){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var b="qx.util.DisposeUtil";
qx.Class.define(b,{statics:{disposeFields:function(p,q){var name;

for(var i=0,l=q.length;i<l;i++){var name=q[i];

if(p[name]==null||!p.hasOwnProperty(name)){continue;
}p[name]=null;
}},disposeObjects:function(d,e){var name;

for(var i=0,l=e.length;i<l;i++){name=e[i];

if(d[name]==null||!d.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(d[name].dispose){d[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}d[name]=null;
}},disposeArray:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var i=o.length-1;i>=0;i--){n=o[i];

if(n){n.dispose();
}}}catch(a){throw new Error("The array field: "+m+" of object: "+k+" has non disposable entries: "+a);
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
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
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
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__cw:function(){var n=navigator.platform;
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
}}},defer:function(o){o.__cw();
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
(function(){var c="_dynamic",b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(d){return this._dynamic[d];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(f){if(f&&this._dynamic[f]){return this._dynamic[f];
}return f;
},_setDynamic:function(g){this._dynamic=g;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._disposeFields(c);
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
(function(){var j="decoration",i="object",h="_applyTheme",g="__cz",f="qx.theme.manager.Decoration",e="Theme",d="string",c="singleton";
qx.Class.define(f,{type:c,extend:qx.core.Object,properties:{theme:{check:e,nullable:true,apply:h}},members:{__cz:null,resolve:function(o){if(!o){return null;
}
if(typeof o===i){return o;
}var r=this.getTheme();

if(!r){return null;
}var r=this.getTheme();

if(!r){return null;
}var s=this.__cz;

if(!s){s=this.__cz={};
}var p=s[o];

if(p){return p;
}var q=r.decorations[o];

if(!q){return null;
}var t=q.decorator;

if(t==null){throw new Error("Missing definition of which decorator to use in entry: "+o+"!");
}return s[o]=(new t).set(q.style);
},isValidPropertyValue:function(k){if(typeof k===d){return this.isDynamic(k);
}else if(typeof k===i){var l=k.constructor;
return qx.Class.hasInterface(l,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(a){if(!a){return false;
}var b=this.getTheme();

if(!b){return false;
}return !!b.decorations[a];
},_applyTheme:function(m){var n=qx.util.AliasManager.getInstance();
m?n.add(j,m.resource):n.remove(j);
}},destruct:function(){this._disposeMap(g);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var p="/",o="__cA",n="0",m="qx/static",l="http://",k="https://",j="file://",i="qx.util.AliasManager",h="singleton",g=".",f="static";
qx.Class.define(i,{type:h,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cA={};
this.add(f,m);
},members:{__cA:null,_preprocess:function(b){var e=this._getDynamic();

if(e[b]===false){return b;
}else if(e[b]===undefined){if(b.charAt(0)===p||b.charAt(0)===g||b.indexOf(l)===0||b.indexOf(k)===n||b.indexOf(j)===0){e[b]=false;
return b;
}var d=b.substring(0,b.indexOf(p));
var c=this.__cA[d];

if(c!==undefined){e[b]=c+b.substring(d.length);
}}return b;
},add:function(s,t){this.__cA[s]=t;
var v=this._getDynamic();
var u={};
for(var w in v){if(w.substring(0,w.indexOf(p))===s){v[w]=t+w.substring(s.length);
u[w]=true;
}}},remove:function(a){delete this.__cA[a];
},resolve:function(q){var r=this._getDynamic();

if(q!==null){q=this._preprocess(q);
}return r[q]||q;
}},destruct:function(){this._disposeFields(o);
}});
})();
(function(){var j="qx.theme.manager.Font",i="Theme",h="changeTheme",g="_applyTheme",f="singleton";
qx.Class.define(j,{type:f,extend:qx.util.ValueManager,properties:{theme:{check:i,nullable:true,apply:g,event:h}},members:{resolveDynamic:function(a){var b=this._dynamic;
return a instanceof qx.bom.Font?a:b[a];
},resolve:function(k){var n=this._dynamic;
var l=n[k];

if(l){return l;
}var m=this.getTheme();

if(m!==null&&m.fonts[k]){return n[k]=(new qx.bom.Font).set(m.colors[k]);
}return k;
},isDynamic:function(c){var e=this._dynamic;

if(c&&(c instanceof qx.bom.Font||e[c]!==undefined)){return true;
}var d=this.getTheme();

if(d!==null&&c&&d.fonts[c]){e[c]=(new qx.bom.Font).set(d.fonts[c]);
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
qx.Class.define(C,{extend:qx.core.Object,construct:function(e,f){arguments.callee.base.call(this);

if(e!==undefined){this.setSize(e);
}
if(f!==undefined){this.setFamily(f);
}},statics:{fromString:function(L){var P=new qx.bom.Font();
var N=L.split(/\s+/);
var name=[];
var O;

for(var i=0;i<N.length;i++){switch(O=N[i]){case p:P.setBold(true);
break;
case r:P.setItalic(true);
break;
case v:P.setDecoration(v);
break;
default:var M=parseInt(O,10);

if(M==O||qx.lang.String.contains(O,t)){P.setSize(M);
}else{name.push(O);
}break;
}}
if(name.length>0){P.setFamily(name);
}return P;
},fromConfig:function(a){var b=new qx.bom.Font;
b.set(a);
return b;
},__cB:{fontFamily:w,fontSize:w,fontWeight:w,fontStyle:w,textDecoration:w,lineHeight:1.2},getDefaultStyles:function(){return this.__cB;
}},properties:{size:{check:I,nullable:true,apply:x},lineHeight:{check:B,nullable:true,apply:G},family:{check:F,nullable:true,apply:H},bold:{check:u,nullable:true,apply:n},italic:{check:u,nullable:true,apply:o},decoration:{check:[v,D,E],nullable:true,apply:A}},members:{__cC:null,__cD:null,__cE:null,__cF:null,__cG:null,__cH:null,_applySize:function(Q,R){this.__cC=Q===null?null:Q+t;
},_applyLineHeight:function(J,K){this.__cH=J===null?null:J;
},_applyFamily:function(g,h){var j=w;

for(var i=0,l=g.length;i<l;i++){if(g[i].indexOf(z)>0){j+=s+g[i]+s;
}else{j+=g[i];
}
if(i!==l-1){j+=y;
}}this.__cD=j;
},_applyBold:function(k,m){this.__cE=k===null?null:k?p:q;
},_applyItalic:function(c,d){this.__cF=c===null?null:c?r:q;
},_applyDecoration:function(S,T){this.__cG=S===null?null:S;
},getStyles:function(){return {fontFamily:this.__cD,fontSize:this.__cC,fontWeight:this.__cE,fontStyle:this.__cF,textDecoration:this.__cG,lineHeight:this.__cH};
}}});
})();
(function(){var e="icon",d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(f,g){var h=qx.util.AliasManager.getInstance();
f?h.add(e,f.resource):h.remove(e);
}}});
})();
(function(){var t="string",s="Theme",r="__cJ",q="__cI",p="qx.theme.manager.Appearance",o=":",n="changeAppearanceTheme",m="changeTheme",l="/",k="singleton";
qx.Class.define(p,{type:k,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__cI={};
this.__cJ={};
},properties:{appearanceTheme:{check:s,nullable:true,event:n},theme:{check:s,nullable:true,event:m}},members:{__cK:{},__cI:null,__cJ:null,__cL:function(a,b){var f=b.appearances;
var i=f[a];
if(!i){var j=l;
var c=[];
var h=a.split(j);
var g;

while(!i&&h.length>0){c.unshift(h.pop());
var d=h.join(j);
i=f[d];

if(i){g=i.alias||i;

if(typeof g===t){var e=g+j+c.join(j);
return this.__cL(e,b);
}}}return null;
}else if(typeof i===t){return this.__cL(i,b);
}else if(i.include&&!i.style){return this.__cL(i.include,b);
}return a;
},styleFrom:function(u,v,w){if(!w){w=this.getTheme();
}var C=this.__cJ;
var x=C[u];

if(!x){x=C[u]=this.__cL(u,w);
}var H=w.appearances[x];

if(!H){this.warn("Missing appearance: "+u);
return null;
}if(!H.style){return null;
}var I=x;

if(v){var J=H.$$bits;

if(!J){J=H.$$bits={};
H.$$length=0;
}var A=0;

for(var D in v){if(J[D]==null){J[D]=1<<H.$$length++;
}A+=J[D];
}if(A>0){I+=o+A;
}}var B=this.__cI;

if(B[I]!==undefined){return B[I];
}if(!v){v=this.__cK;
}var F;
if(H.include||H.base){var z=H.style(v);
var y;

if(H.include){y=this.styleFrom(H.include,v,w);
}F={};
if(H.base){var E=this.styleFrom(x,v,H.base);

if(H.include){for(var G in E){if(!y.hasOwnProperty(G)&&!z.hasOwnProperty(G)){F[G]=E[G];
}}}else{for(var G in E){if(!z.hasOwnProperty(G)){F[G]=E[G];
}}}}if(H.include){for(var G in y){if(!z.hasOwnProperty(G)){F[G]=y[G];
}}}for(var G in z){F[G]=z[G];
}}else{F=H.style(v);
}return B[I]=F||null;
}},destruct:function(){this._disposeFields(q,r);
}});
})();
(function(){var C="object",B="qx.debug",A="string",z="Theme",y="widgets",x="fonts",w="colors",v="decorations",u="on",t="meta",o="appearances",s="borders",r="icons",n="other",m="qx.Theme",q="]",p="[Theme ";
qx.Class.define(m,{statics:{define:function(name,J){if(!J){var J={};
}
if(J.include&&!(J.include instanceof Array)){J.include=[J.include];
}if(qx.core.Variant.isSet(B,u)){this.__cR(name,J);
}var K={$$type:z,name:name,title:J.title,toString:this.genericToString};
if(J.extend){K.supertheme=J.extend;
}if(J.resource){K.resource=J.resource;
}else if(J.extend&&J.extend.resource){K.resource=J.extend.resource;
}K.basename=qx.Bootstrap.createNamespace(name,K);
this.__cN(K,J);
this.$$registry[name]=K;
if(J.include){for(var i=0,a=J.include,l=a.length;i<l;i++){this.include(K,a[i]);
}}},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return p+this.name+q;
},__cM:function(j){for(var i=0,k=this.__cO,l=k.length;i<l;i++){if(j[k[i]]){return k[i];
}}},__cN:function(b,c){var f=this.__cM(c);
if(c.extend&&!f){f=c.extend.type;
}b.type=f||n;
if(!f){return;
}var h=function(){};
if(c.extend){h.prototype=new c.extend.$$clazz;
}var g=h.prototype;
var e=c[f];
for(var d in e){g[d]=e[d];
if(g[d].base){if(qx.core.Variant.isSet(B,u)){if(!c.extend){throw new Error("Found base flag in entry '"+d+"' of theme '"+c.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}g[d].base=c.extend;
}}b.$$clazz=h;
b[f]=new h;
},$$registry:{},__cO:[w,s,v,x,r,y,o,t],__cP:qx.core.Variant.select(B,{"on":{"title":A,"resource":A,"type":A,"extend":C,"colors":C,"borders":C,"decorations":C,"fonts":C,"icons":C,"widgets":C,"appearances":C,"meta":C,"include":C},"default":null}),__cQ:qx.core.Variant.select(B,{"on":{"color":C,"border":C,"decoration":C,"font":C,"icon":C,"appearance":C,"widget":C},"default":null}),__cR:qx.core.Variant.select(B,{"on":function(name,D){var I=this.__cP;

for(var H in D){if(I[H]===undefined){throw new Error('The configuration key "'+H+'" in theme "'+name+'" is not allowed!');
}
if(D[H]==null){throw new Error('Invalid key "'+H+'" in theme "'+name+'"! The value is undefined/null!');
}
if(I[H]!==null&&typeof D[H]!==I[H]){throw new Error('Invalid type of key "'+H+'" in theme "'+name+'"! The type of the key must be "'+I[H]+'"!');
}}var G=[w,s,v,x,r,y,o,t];

for(var i=0,l=G.length;i<l;i++){var H=G[i];

if(D[H]!==undefined&&(D[H] instanceof Array||D[H] instanceof RegExp||D[H] instanceof Date||D[H].classname!==undefined)){throw new Error('Invalid key "'+H+'" in theme "'+name+'"! The value needs to be a map!');
}}var E=0;

for(var i=0,l=G.length;i<l;i++){var H=G[i];

if(D[H]){E++;
}
if(E>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!D.extend&&E===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(D.meta){var F;

for(var H in D.meta){F=D.meta[H];

if(this.__cQ[H]===undefined){throw new Error('The key "'+H+'" is not allowed inside a meta theme block.');
}
if(typeof F!==this.__cQ[H]){throw new Error('The type of the key "'+H+'" inside the meta block is wrong.');
}
if(!(typeof F===C&&F!==null&&F.$$type===z)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+H+'" in theme "'+name+'" is invalid: '+F);
}}}if(D.extend&&D.extend.$$type!==z){throw new Error('Invalid extend in theme "'+name+'": '+D.extend);
}},"default":function(){}}),patch:function(L,M){var O=this.__cM(M);

if(O!==this.__cM(L)){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L[O];

for(var Q in N){P[Q]=N[Q];
}},include:function(R,S){var U=S.type;

if(U!==R.type){throw new Error("The mixins '"+R.name+"' are not compatible '"+S.name+"'!");
}var T=S[U];
var V=R[U];

for(var W in T){if(V[W]!==undefined){throw new Error("It is not allowed to overwrite the key '"+W+"' of theme '"+R.name+"' by mixin theme '"+S.name+"'.");
}V[W]=T[W];
}}}});
})();
(function(){var f="qx.event.handler.UserAction",e="__cS",d="__cT";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__cS=g;
this.__cT=g.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(k,l,m){},unregisterEvent:function(h,i,j){}},destruct:function(){this._disposeFields(e,d);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var f="__cU",e="qx.util.DeferredCallManager",d="__cV",c="singleton";
qx.Class.define(e,{extend:qx.core.Object,type:c,construct:function(){this.__cU={};
this.__cV=qx.lang.Function.bind(this.__da,this);
this.__cW=false;
},members:{__cX:null,__cY:null,__cU:null,__cW:null,__cV:null,schedule:function(a){if(this.__cX==null){this.__cX=window.setTimeout(this.__cV,0);
}var b=a.toHashCode();
if(this.__cY&&this.__cY[b]){return;
}this.__cU[b]=a;
this.__cW=true;
},cancel:function(i){var j=i.toHashCode();
if(this.__cY&&this.__cY[j]){this.__cY[j]=null;
return;
}delete this.__cU[j];
if(qx.lang.Object.isEmpty(this.__cU)&&this.__cX!=null){window.clearTimeout(this.__cX);
this.__cX=null;
}},__da:function(){this.__cX=null;
while(this.__cW){this.__cY=qx.lang.Object.clone(this.__cU);
this.__cU={};
this.__cW=false;

for(var h in this.__cY){var g=this.__cY[h];

if(g){this.__cY[h]=null;
g.call();
}}}this.__cY=null;
}},destruct:function(){if(this.__cX!=null){window.clearTimeout(this.__cX);
}this._disposeFields(d,f);
}});
})();
(function(){var h="qx.util.DeferredCall",g="__dd",f="__db",e="__dc";
qx.Class.define(h,{extend:qx.core.Object,construct:function(c,d){arguments.callee.base.call(this);
this.__db=c;
this.__dc=d||null;
this.__dd=qx.util.DeferredCallManager.getInstance();
},members:{__db:null,__dc:null,__dd:null,cancel:function(){this.__dd.cancel(this);
},schedule:function(){this.__dd.schedule(this);
},call:function(){this.__dc?this.__db.apply(this.__dc):this.__db();
}},destruct:function(a,b){this.cancel();
this._disposeFields(e,f,g);
}});
})();
(function(){var cP="qx.debug",cO="element",cN="on",cM="qx.client",cL="div",cK="': ",cJ="Invalid context for callback.",cI="'",cH="Invalid event type.",cG="Invalid callback function",dx="",dw="mshtml",dv="qx.html.Element",du="|capture|",dt="Invalid capture flag.",ds="focus",dr="Failed to add event listener for type '",dq="__dz",dp="blur",dn="deactivate",cW="__dq",cX="__do",cU=" from the target '",cV="capture",cS="__du",cT="releaseCapture",cQ="__dn",cR="__ds",cY="__dj",da="tabIndex",df="__df",de="activate",dh=" to the target '",dg="Failed to remove event listener for type '",dj="none",di="__dr",dd="__dp",dm="__dk",dl="__dt",dk="Invalid capture falg.",dc="|bubble|";
qx.Class.define(dv,{extend:qx.core.Object,construct:function(dF){arguments.callee.base.call(this);
this.__de=dF||cL;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],_scheduleFlush:function(cl){qx.html.Element.__dE.schedule();
},_mshtmlVisibilitySort:qx.core.Variant.select(cM,{"mshtml":function(a,b){var dD=a.__df;
var dC=b.__df;

if(dD.contains(dC)){return 1;
}
if(dC.contains(dD)){return -1;
}return 0;
},"default":null}),flush:function(){var w;

if(qx.core.Variant.isSet(cP,cN)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var z=[];
var B=this._modified;

for(var I in B){w=B[I];
if(w.__dx()){if(w.__df&&qx.dom.Hierarchy.isRendered(w.__df)){z.push(w);
}else{if(qx.core.Variant.isSet(cP,cN)){if(this.DEBUG){w.debug("Flush invisible element");
}}w.__dw();
}delete B[I];
}}
for(var i=0,l=z.length;i<l;i++){w=z[i];

if(qx.core.Variant.isSet(cP,cN)){if(this.DEBUG){w.debug("Flush rendered element");
}}w.__dw();
}var C=this._visibility;
if(qx.core.Variant.isSet(cM,dw)){var A=[];

for(var I in C){A.push(C[I]);
}if(A.length>1){A.sort(this._mshtmlVisibilitySort);
C=this._visibility={};

for(var i=0;i<A.length;i++){w=A[i];
C[w.$$hash]=w;
}}}
for(var I in C){w=C[I];

if(qx.core.Variant.isSet(cP,cN)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+w.__di);
}}w.__df.style.display=w.__di?dx:dj;
delete C[I];
}var scroll=this._scroll;

for(var I in scroll){w=scroll[I];
var K=w.__df;

if(K&&K.offsetWidth){var F=true;
if(w.__dl!=null){w.__df.scrollLeft=w.__dl;
delete w.__dl;
}if(w.__dm!=null){w.__df.scrollTop=w.__dm;
delete w.__dm;
}var D=w.__dj;

if(D!=null){var G=D.element.getDomElement();

if(G&&G.offsetWidth){qx.bom.element.Scroll.intoViewX(G,K,D.align);
delete w.__dj;
}else{F=false;
}}var E=w.__dk;

if(E!=null){var G=E.element.getDomElement();

if(G&&G.offsetWidth){qx.bom.element.Scroll.intoViewY(G,K,E.align);
delete w.__dk;
}else{F=false;
}}if(F){delete scroll[I];
}}}for(var i=0;i<this._actions.length;i++){var H=this._actions[i];
var J=H.element.__df;

if(!J){continue;
}qx.bom.Element[H.type](J);
}this._actions=[];
qx.event.handler.Appear.refresh();
}},members:{__de:null,__df:null,__dg:false,__dh:true,__di:true,__dj:null,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__dp:null,__dq:null,__dr:null,__ds:null,__dt:null,__du:null,__dv:null,_scheduleChildrenUpdate:function(){if(this.__dv){return;
}this.__dv=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cO);
},_createDomElement:function(){return qx.bom.Element.create(this.__de);
},__dw:function(){if(qx.core.Variant.isSet(cP,cN)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var ca=this.__du;

if(ca){var length=ca.length;
var cb;

for(var i=0;i<length;i++){cb=ca[i];

if(cb.__di&&cb.__dh&&!cb.__df){cb.__dw();
}}}
if(!this.__df){this.__df=this._createDomElement();
this.__df.$$hash=this.$$hash;
this._copyData(false);

if(ca&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dv){this._syncChildren();
}}delete this.__dv;
},_insertChildren:function(){var ci=this.__du;
var length=ci.length;
var ck;

if(length>2){var cj=document.createDocumentFragment();

for(var i=0;i<length;i++){ck=ci[i];

if(ck.__df&&ck.__dh){cj.appendChild(ck.__df);
}}this.__df.appendChild(cj);
}else{var cj=this.__df;

for(var i=0;i<length;i++){ck=ci[i];

if(ck.__df&&ck.__dh){cj.appendChild(ck.__df);
}}}},_syncChildren:function(){var bI=qx.core.ObjectRegistry;
var bz=this.__du;
var bG=bz.length;
var bA;
var bE;
var bC=this.__df;
var bF=bC.childNodes;
var bB=0;
var bD;

if(qx.core.Variant.isSet(cP,cN)){var bH=0;
}for(var i=bF.length-1;i>=0;i--){bD=bF[i];
bE=bI.fromHashCode(bD.$$hash);

if(!bE||!bE.__dh||bE.__dz!==this){bC.removeChild(bD);

if(qx.core.Variant.isSet(cP,cN)){bH++;
}}}for(var i=0;i<bG;i++){bA=bz[i];
if(bA.__dh){bE=bA.__df;
bD=bF[bB];

if(!bE){continue;
}if(bE!=bD){if(bD){bC.insertBefore(bE,bD);
}else{bC.appendChild(bE);
}
if(qx.core.Variant.isSet(cP,cN)){bH++;
}}bB++;
}}if(qx.core.Variant.isSet(cP,cN)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bH+" operations");
}}},_copyData:function(bn){var br=this.__df;
var bq=this.__dr;

if(bq){var bo=qx.bom.element.Attribute;

for(var bs in bq){bo.set(br,bs,bq[bs]);
}}var bq=this.__dq;

if(bq){var bp=qx.bom.element.Style;

if(bn){for(var bs in bq){bp.set(br,bs,bq[bs]);
}}else{bp.setCss(br,bp.compile(bq));
}}var bq=this.__ds;

if(bq){for(var bs in bq){this._applyProperty(bs,bq[bs]);
}}var bq=this.__dt;

if(bq){qx.event.Registration.getManager(br).importListeners(br,bq);
delete this.__dt;
}},_syncData:function(){var bd=this.__df;
var bc=qx.bom.element.Attribute;
var ba=qx.bom.element.Style;
var bb=this.__do;

if(bb){var bg=this.__dr;

if(bg){var be;

for(var bf in bb){be=bg[bf];

if(be!==undefined){bc.set(bd,bf,be);
}else{bc.reset(bd,bf);
}}}this.__do=null;
}var bb=this.__dn;

if(bb){var bg=this.__dq;

if(bg){var be;

for(var bf in bb){be=bg[bf];

if(be!==undefined){ba.set(bd,bf,be);
}else{ba.reset(bd,bf);
}}}this.__dn=null;
}var bb=this.__dp;

if(bb){var bg=this.__ds;

if(bg){var be;

for(var bf in bb){this._applyProperty(bf,bg[bf]);
}}this.__dp=null;
}},__dx:function(){var dM=this;
while(dM){if(dM.__dg){return true;
}
if(!dM.__dh||!dM.__di){return false;
}dM=dM.__dz;
}return false;
},__dy:function(o){if(o.__dz===this){throw new Error("Child is already in: "+o);
}
if(o.__dg){throw new Error("Root elements could not be inserted into other ones.");
}if(o.__dz){o.__dz.remove(o);
}o.__dz=this;
if(!this.__du){this.__du=[];
}if(this.__df){this._scheduleChildrenUpdate();
}},__dA:function(dR){if(dR.__dz!==this){throw new Error("Has no child: "+dR);
}if(this.__df){this._scheduleChildrenUpdate();
}delete dR.__dz;
},__dB:function(dE){if(dE.__dz!==this){throw new Error("Has no child: "+dE);
}if(this.__df){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__du||null;
},getChild:function(bX){var bY=this.__du;
return bY&&bY[bX]||null;
},hasChildren:function(){var u=this.__du;
return u&&u[0]!==undefined;
},indexOf:function(cd){var ce=this.__du;
return ce?ce.indexOf(cd):-1;
},hasChild:function(X){var Y=this.__du;
return Y&&Y.indexOf(X)!==-1;
},add:function(bJ){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dy(arguments[i]);
}this.__du.push.apply(this.__du,arguments);
}else{this.__dy(bJ);
this.__du.push(bJ);
}return this;
},addAt:function(bw,bx){this.__dy(bw);
qx.lang.Array.insertAt(this.__du,bw,bx);
return this;
},remove:function(bM){var bN=this.__du;

if(!bN){return;
}
if(arguments[1]){var bO;

for(var i=0,l=arguments.length;i<l;i++){bO=arguments[i];
this.__dA(bO);
qx.lang.Array.remove(bN,bO);
}}else{this.__dA(bM);
qx.lang.Array.remove(bN,bM);
}return this;
},removeAt:function(dO){var dP=this.__du;

if(!dP){throw new Error("Has no children!");
}var dQ=dP[dO];

if(!dQ){throw new Error("Has no child at this position!");
}this.__dA(dQ);
qx.lang.Array.removeAt(this.__du,dO);
return this;
},removeAll:function(){var dN=this.__du;

if(dN){for(var i=0,l=dN.length;i<l;i++){this.__dA(dN[i]);
}dN.length=0;
}return this;
},getParent:function(){return this.__dz||null;
},insertInto:function(parent,p){parent.__dy(this);

if(p==null){parent.__du.push(this);
}else{qx.lang.Array.insertAt(this.__du,this,p);
}return this;
},insertBefore:function(dB){var parent=dB.__dz;
parent.__dy(this);
qx.lang.Array.insertBefore(parent.__du,this,dB);
return this;
},insertAfter:function(bK){var parent=bK.__dz;
parent.__dy(this);
qx.lang.Array.insertAfter(parent.__du,this,bK);
return this;
},moveTo:function(h){var parent=this.__dz;
parent.__dB(this);
var j=parent.__du.indexOf(this);

if(j===h){throw new Error("Could not move to same index!");
}else if(j<h){h--;
}qx.lang.Array.removeAt(parent.__du,j);
qx.lang.Array.insertAt(parent.__du,this,h);
return this;
},moveBefore:function(by){var parent=this.__dz;
return this.moveTo(parent.__du.indexOf(by));
},moveAfter:function(cm){var parent=this.__dz;
return this.moveTo(parent.__du.indexOf(cm)+1);
},free:function(){var parent=this.__dz;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__du){return;
}parent.__dA(this);
qx.lang.Array.remove(parent.__du,this);
return this;
},getDomElement:function(){return this.__df||null;
},getNodeName:function(){return this.__de;
},setNodeName:function(name){this.__de=name;
},setRoot:function(W){this.__dg=W;
},useMarkup:function(s){if(this.__df){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(cM,dw)){var t=document.createElement(cL);
}else{var t=qx.html.Element.__dC;

if(!t){t=qx.html.Element.__dC=document.createElement(cL);
}}t.innerHTML=s;
this.__df=t.firstChild;
this.__df.$$hash=this.$$hash;
this._copyData(true);
return this.__df;
},useElement:function(bP){if(this.__df){throw new Error("Could not overwrite existing element!");
}this.__df=bP;
this.__df.$$hash=this.$$hash;
this._copyData(true);
},isFocusable:function(){var bU=this.getAttribute(da);

if(bU>=1){return true;
}var bT=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bU>=0&&bT[this.__de]){return true;
}return false;
},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__de];
},include:function(){if(this.__dh){return;
}delete this.__dh;

if(this.__dz){this.__dz._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dh){return;
}this.__dh=false;

if(this.__dz){this.__dz._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dh===true;
},show:function(){if(this.__di){return;
}
if(this.__df){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cO);
}if(this.__dz){this.__dz._scheduleChildrenUpdate();
}delete this.__di;
},hide:function(){if(!this.__di){return;
}
if(this.__df){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cO);
}this.__di=false;
},isVisible:function(){return this.__di===true;
},scrollChildIntoViewX:function(R,S,T){var U=this.__df;
var V=R.getDomElement();

if(T!==false&&U&&U.offsetWidth&&V&&V.offsetWidth){qx.bom.element.Scroll.intoViewX(V,U,S);
}else{this.__dj={element:R,align:S};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cO);
}delete this.__dl;
},scrollChildIntoViewY:function(cy,cz,cA){var cB=this.__df;
var cC=cy.getDomElement();

if(cA!==false&&cB&&cB.offsetWidth&&cC&&cC.offsetWidth){qx.bom.element.Scroll.intoViewY(cC,cB,cz);
}else{this.__dk={element:cy,align:cz};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cO);
}delete this.__dm;
},scrollToX:function(x,bt){var bu=this.__df;

if(bt!==true&&bu&&bu.offsetWidth){bu.scrollLeft=x;
}else{this.__dl=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cO);
}delete this.__dj;
},getScrollX:function(){var cc=this.__df;

if(cc){return cc.scrollLeft;
}return this.__dl||0;
},scrollToY:function(y,q){var r=this.__df;

if(q!==true&&r&&r.offsetWidth){r.scrollTop=y;
}else{this.__dm=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cO);
}delete this.__dk;
},getScrollY:function(){var N=this.__df;

if(N){return N.scrollTop;
}return this.__dm||0;
},getSelection:function(){var d=this.__df;

if(d){return qx.bom.Selection.get(d);
}return null;
},getSelectionLength:function(){var bv=this.__df;

if(bv){return qx.bom.Selection.getLength(bv);
}return null;
},setSelection:function(k,m){var n=this.__df;

if(n){qx.bom.Selection.set(n,k,m);
}},clearSelection:function(){var bL=this.__df;

if(bL){qx.bom.Selection.clear(bL);
}},__dD:function(cD){var cE=this.__df;
var cF=qx.html.Element._actions;

if(cE&&cF.length==0){return qx.bom.Element[cD](cE);
}cF.push({type:cD,element:this});
qx.html.Element._scheduleFlush(cO);
},focus:function(){this.__dD(ds);
},blur:function(){this.__dD(dp);
},activate:function(){this.__dD(de);
},deactivate:function(){this.__dD(dn);
},capture:function(){this.__dD(cV);
},releaseCapture:function(){this.__dD(cT);
},setStyle:function(e,f,g){if(!this.__dq){this.__dq={};
}
if(this.__dq[e]==f){return;
}
if(f==null){delete this.__dq[e];
}else{this.__dq[e]=f;
}if(this.__df){if(g){qx.bom.element.Style.set(this.__df,e,f);
return this;
}if(!this.__dn){this.__dn={};
}this.__dn[e]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cO);
}return this;
},setStyles:function(cf,cg){for(var ch in cf){this.setStyle(ch,cf[ch],cg);
}return this;
},removeStyle:function(dz,dA){this.setStyle(dz,null,dA);
},getStyle:function(c){return this.__dq?this.__dq[c]:null;
},getAllStyles:function(){return this.__dq||null;
},setAttribute:function(cn,co,cp){if(!this.__dr){this.__dr={};
}
if(this.__dr[cn]==co){return;
}
if(co==null){delete this.__dr[cn];
}else{this.__dr[cn]=co;
}if(this.__df){if(cp){qx.bom.element.Attribute.set(this.__df,cn,co);
return this;
}if(!this.__do){this.__do={};
}this.__do[cn]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cO);
}return this;
},setAttributes:function(O,P){for(var Q in O){this.setAttribute(Q,O[Q],P);
}return this;
},removeAttribute:function(L,M){this.setAttribute(L,null,M);
},getAttribute:function(dV){return this.__dr?this.__dr[dV]:null;
},_applyProperty:function(name,dy){},_setProperty:function(dS,dT,dU){if(!this.__ds){this.__ds={};
}
if(this.__ds[dS]==dT){return;
}
if(dT==null){delete this.__ds[dS];
}else{this.__ds[dS]=dT;
}if(this.__df){if(dU){this._applyProperty(dS,dT);
return this;
}if(!this.__dp){this.__dp={};
}this.__dp[dS]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cO);
}return this;
},_removeProperty:function(bV,bW){this._setProperty(bV,null,bW);
},_getProperty:function(bQ){var bR=this.__ds;

if(!bR){return null;
}var bS=bR[bQ];
return bS==null?null:bS;
},addListener:function(dG,dH,self,dI){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(cP,cN)){var dJ=dr+dG+cI+dh+this+cK;
this.assertString(dG,dJ+cH);
this.assertFunction(dH,dJ+cG);

if(self!==undefined){this.assertObject(self,cJ);
}
if(dI!==undefined){this.assertBoolean(dI,dk);
}}
if(this.__df){return qx.event.Registration.addListener(this.__df,dG,dH,self,dI);
}
if(!this.__dt){this.__dt={};
}
if(dI==null){dI=false;
}var dK=qx.event.Manager.getNextUniqueId();
var dL=dG+(dI?du:dc)+dK;
this.__dt[dL]={type:dG,listener:dH,self:self,capture:dI,unique:dK};
return dL;
},removeListener:function(cq,cr,self,cs){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(cP,cN)){var ct=dg+cq+cI+cU+this+cK;
this.assertString(cq,ct+cH);
this.assertFunction(cr,ct+cG);

if(self!==undefined){this.assertObject(self,cJ);
}
if(cs!==undefined){this.assertBoolean(cs,dt);
}}
if(this.__df){qx.event.Registration.removeListener(this.__df,cq,cr,self,cs);
}else{var cv=this.__dt;
var cu;

if(cs==null){cs=false;
}
for(var cw in cv){cu=cv[cw];
if(cu.listener===cr&&cu.self===self&&cu.capture===cs&&cu.type===cq){delete cv[cw];
break;
}}}return this;
},removeListenerById:function(v){if(this.$$disposed){return null;
}
if(this.__df){qx.event.Registration.removeListenerById(this.__df,v);
}else{delete this.__dt[v];
}return this;
},hasListener:function(bh,bi){if(this.$$disposed){return false;
}
if(this.__df){return qx.event.Registration.hasListener(this.__df,bh,bi);
}var bk=this.__dt;
var bj;

if(bi==null){bi=false;
}
for(var bm in bk){bj=bk[bm];
if(bj.capture===bi&&bj.type===bh){return true;
}}return false;
}},defer:function(dW){dW.__dE=new qx.util.DeferredCall(dW.flush,dW);
},destruct:function(){var cx=this.__df;

if(cx){qx.event.Registration.getManager(cx).removeAllListeners(cx);
cx.$$hash=dx;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dz;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cS);
this._disposeFields(di,cW,dl,cR,cX,cQ,dd,df,dq,cY,dm);
}});
})();
(function(){var c="qx.ui.core.queue.Manager",b="useraction";
qx.Class.define(c,{statics:{__dF:false,__dG:{},scheduleFlush:function(a){var self=qx.ui.core.queue.Manager;
self.__dG[a]=true;

if(!self.__dF){self.__dI.schedule();
self.__dF=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__dH){return;
}self.__dH=true;
self.__dI.cancel();
var d=self.__dG;

while(d.visibility||d.widget||d.appearance||d.layout||d.element){if(d.widget){delete d.widget;
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
}}qx.ui.core.queue.Manager.__dF=false;

if(d.dispose){delete d.dispose;
qx.ui.core.queue.Dispose.flush();
}self.__dH=false;
}},defer:function(e){e.__dI=new qx.util.DeferredCall(e.flush);
qx.html.Element._scheduleFlush=e.scheduleFlush;
qx.event.Registration.addListener(window,b,e.flush);
}});
})();
(function(){var D="qx.client",C="qx.dom.Hierarchy",B="previousSibling",A="*",z="nextSibling",y="parentNode";
qx.Class.define(C,{statics:{getNodeIndex:function(i){var j=0;

while(i&&(i=i.previousSibling)){j++;
}return j;
},getElementIndex:function(b){var c=0;
var d=qx.dom.Node.ELEMENT;

while(b&&(b=b.previousSibling)){if(b.nodeType==d){c++;
}}return c;
},getNextElementSibling:function(S){while(S&&(S=S.nextSibling)&&!qx.dom.Node.isElement(S)){continue;
}return S||null;
},getPreviousElementSibling:function(N){while(N&&(N=N.previousSibling)&&!qx.dom.Node.isElement(N)){continue;
}return N||null;
},contains:qx.core.Variant.select(D,{"webkit|mshtml|opera":function(T,U){if(qx.dom.Node.isDocument(T)){var V=qx.dom.Node.getDocument(U);
return T&&V==T;
}else if(qx.dom.Node.isDocument(U)){return false;
}else{return T.contains(U);
}},"gecko":function(k,l){return !!(k.compareDocumentPosition(l)&16);
},"default":function(O,P){while(P){if(O==P){return true;
}P=P.parentNode;
}return false;
}}),isRendered:function(e){if(!e.offsetParent){return false;
}var f=e.ownerDocument||e.document;
if(f.body.contains){return f.body.contains(e);
}if(f.compareDocumentPosition){return !!(f.compareDocumentPosition(e)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(K,L){return this.contains(L,K);
},getCommonParent:qx.core.Variant.select(D,{"mshtml|opera":function(m,n){if(m===n){return m;
}
while(m&&qx.dom.Node.isElement(m)){if(m.contains(n)){return m;
}m=m.parentNode;
}return null;
},"default":function(E,F){if(E===F){return E;
}var G={};
var J=qx.core.ObjectRegistry;
var I,H;

while(E||F){if(E){I=J.toHashCode(E);

if(G[I]){return G[I];
}G[I]=E;
E=E.parentNode;
}
if(F){H=J.toHashCode(F);

if(G[H]){return G[H];
}G[H]=F;
F=F.parentNode;
}}return null;
}}),getAncestors:function(h){return this._recursivelyCollect(h,y);
},getChildElements:function(Q){Q=Q.firstChild;

if(!Q){return [];
}var R=this.getNextSiblings(Q);

if(Q.nodeType===1){R.unshift(Q);
}return R;
},getDescendants:function(M){return qx.lang.Array.fromCollection(M.getElementsByTagName(A));
},getFirstDescendant:function(a){a=a.firstChild;

while(a&&a.nodeType!=1){a=a.nextSibling;
}return a;
},getLastDescendant:function(t){t=t.lastChild;

while(t&&t.nodeType!=1){t=t.previousSibling;
}return t;
},getPreviousSiblings:function(g){return this._recursivelyCollect(g,B);
},getNextSiblings:function(s){return this._recursivelyCollect(s,z);
},_recursivelyCollect:function(p,q){var r=[];

while(p=p[q]){if(p.nodeType==1){r.push(p);
}}return r;
},getSiblings:function(u){return this.getPreviousSiblings(u).reverse().concat(this.getNextSiblings(u));
},isEmpty:function(o){o=o.firstChild;

while(o){if(o.nodeType===qx.dom.Node.ELEMENT||o.nodeType===qx.dom.Node.TEXT){return false;
}o=o.nextSibling;
}return true;
},cleanWhitespace:function(v){var w=v.firstChild;

while(w){var x=w.nextSibling;

if(w.nodeType==3&&!/\S/.test(w.nodeValue)){v.removeChild(w);
}w=x;
}}}});
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
}},intoViewY:function(H,stop,I){var parent=H.parentNode;
var O=qx.dom.Node.getDocument(H);
var J=O.body;
var W,K,S;
var Y,V,Q;
var M,N,L;
var bb,bc,X,R;
var U,P,bd;
var ba=I===d;
var T=I===e;
stop=stop?stop.parentNode:O;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){K=parent.scrollTop;
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
M=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
N=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
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
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var bL="",bK="qx.client",bJ="hidden",bI="-moz-scrollbars-none",bH="overflow",bG=";",bF="overflowY",bE=":",bD="overflowX",bC="overflow:",bX="none",bW="scroll",bV="borderLeftStyle",bU="borderRightStyle",bT="div",bS="borderRightWidth",bR="overflow-y",bQ="borderLeftWidth",bP="-moz-scrollbars-vertical",bO="100px",bM="qx.bom.element.Overflow",bN="overflow-x";
qx.Class.define(bM,{statics:{__dJ:null,getScrollbarWidth:function(){if(this.__dJ!==null){return this.__dJ;
}var S=qx.bom.element.Style;
var U=function(r,u){return parseInt(S.get(r,u))||0;
};
var V=function(bj){return (S.get(bj,bU)==bX?0:U(bj,bS));
};
var T=function(cb){return (S.get(cb,bV)==bX?0:U(cb,bQ));
};
var X=qx.core.Variant.select(bK,{"mshtml":function(bd){if(S.get(bd,bF)==bJ||bd.clientWidth==0){return V(bd);
}return Math.max(0,bd.offsetWidth-bd.clientLeft-bd.clientWidth);
},"default":function(w){if(w.clientWidth==0){var x=S.get(w,bH);
var y=(x==bW||x==bP?16:0);
return Math.max(0,V(w)+y);
}return Math.max(0,(w.offsetWidth-w.clientWidth-T(w)));
}});
var W=function(i){return X(i)-V(i);
};
var t=document.createElement(bT);
var s=t.style;
s.height=s.width=bO;
s.overflow=bW;
document.body.appendChild(t);
var c=W(t);
this.__dJ=c?c:16;
document.body.removeChild(t);
return this.__dJ;
},_compile:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(B,C){if(C==bJ){C=bI;
}return bC+C+bG;
}:
function(ce,cf){return ce+bE+cf+bG;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(b,d){return bC+d+bG;
}:
function(j,k){return j+bE+k+bG;
},"default":function(be,bf){return be+bE+bf+bG;
}}),compileX:function(M){return this._compile(bN,M);
},compileY:function(A){return this._compile(bR,A);
},getX:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bg,bh){var bi=qx.bom.element.Style.get(bg,bH,bh,false);

if(bi===bI){bi=bJ;
}return bi;
}:
function(Q,R){return qx.bom.element.Style.get(Q,bD,R,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(n,o){return qx.bom.element.Style.get(n,bH,o,false);
}:
function(l,m){return qx.bom.element.Style.get(l,bD,m,false);
},"default":function(bY,ca){return qx.bom.element.Style.get(bY,bD,ca,false);
}}),setX:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(p,q){if(q==bJ){q=bI;
}p.style.overflow=q;
}:
function(bA,bB){bA.style.overflowX=bB;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(e,f){e.style.overflow=f;
}:
function(cc,cd){cc.style.overflowX=cd;
},"default":function(bn,bo){bn.style.overflowX=bo;
}}),resetX:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(v){v.style.overflow=bL;
}:
function(bk){bk.style.overflowX=bL;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(Y,ba){Y.style.overflow=bL;
}:
function(O,P){O.style.overflowX=bL;
},"default":function(bt){bt.style.overflowX=bL;
}}),getY:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(F,G){var H=qx.bom.element.Style.get(F,bH,G,false);

if(H===bI){H=bJ;
}return H;
}:
function(bp,bq){return qx.bom.element.Style.get(bp,bF,bq,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bb,bc){return qx.bom.element.Style.get(bb,bH,bc,false);
}:
function(bu,bv){return qx.bom.element.Style.get(bu,bF,bv,false);
},"default":function(bw,bx){return qx.bom.element.Style.get(bw,bF,bx,false);
}}),setY:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(by,bz){if(bz===bJ){bz=bI;
}by.style.overflow=bz;
}:
function(bl,bm){bl.style.overflowY=bm;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(D,E){D.style.overflow=E;
}:
function(K,L){K.style.overflowY=L;
},"default":function(I,J){I.style.overflowY=J;
}}),resetY:qx.core.Variant.select(bK,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(N){N.style.overflow=bL;
}:
function(z){z.style.overflowY=bL;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(br,bs){br.style.overflow=bL;
}:
function(g,h){g.style.overflowY=bL;
},"default":function(a){a.style.overflowY=bL;
}})}});
})();
(function(){var z="",y="qx.client",x="boxSizing",w="cursor",v="opacity",u="clip",t="overflowY",s="overflowX",r="appearance",q="qx.debug",be="Invalid argument 'smart'",bd="style",bc="on",bb="Invalid argument 'element'",ba="px",Y="-webkit-appearance",X="user-select",W="userSelect",V="styleFloat",U="-webkit-user-select",G="-moz-appearance",H="pixelHeight",E="MozAppearance",F=":",C="pixelTop",D="Invalid argument 'name'",A="pixelLeft",B="text-overflow",I="-moz-user-select",J="Invalid argument 'styles'",M="MozUserSelect",L="qx.bom.element.Style",O="WebkitUserSelect",N="-o-text-overflow",Q="pixelRight",P="pixelWidth",K="pixelBottom",T=";",S="cssFloat",R="WebkitAppearance";
qx.Class.define(L,{statics:{__dK:{styleNames:{"float":qx.core.Variant.select(y,{"mshtml":V,"default":S}),"appearance":qx.core.Variant.select(y,{"gecko":E,"webkit":R,"default":r}),"userSelect":qx.core.Variant.select(y,{"gecko":M,"webkit":O,"default":W})},cssNames:{"appearance":qx.core.Variant.select(y,{"gecko":G,"webkit":Y,"default":r}),"userSelect":qx.core.Variant.select(y,{"gecko":I,"webkit":U,"default":X}),"textOverflow":qx.core.Variant.select(y,{"opera":N,"default":B})},mshtmlPixel:{width:P,height:H,left:A,right:Q,top:C,bottom:K},special:{clip:1,cursor:1,opacity:1,boxSizing:1,overflowX:1,overflowY:1}},__dL:{},compile:function(bf){var bj=[];
var bn=this.__dK;
var bm=bn.special;
var bk=bn.cssNames;
var bi=this.__dL;
var bl=qx.lang.String;
var name,bh,bg;

for(name in bf){bg=bf[name];

if(bg==null){continue;
}name=bk[name]||name;
if(bm[name]){switch(name){case u:bj.push(qx.bom.element.Clip.compile(bg));
break;
case w:bj.push(qx.bom.element.Cursor.compile(bg));
break;
case v:bj.push(qx.bom.element.Opacity.compile(bg));
break;
case x:bj.push(qx.bom.element.BoxSizing.compile(bg));
break;
case s:bj.push(qx.bom.element.Overflow.compileX(bg));
break;
case t:bj.push(qx.bom.element.Overflow.compileY(bg));
break;
}}else{bh=bi[name];

if(!bh){bh=bi[name]=bl.hyphenate(name);
}bj.push(bh,F,bg,T);
}}return bj.join(z);
},setCss:qx.core.Variant.select(y,{"mshtml":function(o,p){o.style.cssText=p;
},"default":function(j,k){j.setAttribute(bd,k);
}}),getCss:qx.core.Variant.select(y,{"mshtml":function(bo){return bo.style.cssText.toLowerCase();
},"default":function(bB){return bB.getAttribute(bd);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bx,name,by,bz){if(qx.core.Variant.isSet(q,bc)){qx.core.Assert.assertElement(bx,bb);
qx.core.Assert.assertString(name,D);

if(bz!==undefined){qx.core.Assert.assertBoolean(bz,be);
}}var bA=this.__dK;
name=bA.styleNames[name]||name;
if(bz!==false&&bA.special[name]){switch(name){case u:return qx.bom.element.Clip.set(bx,by);
case w:return qx.bom.element.Cursor.set(bx,by);
case v:return qx.bom.element.Opacity.set(bx,by);
case x:return qx.bom.element.BoxSizing.set(bx,by);
case s:return qx.bom.element.Overflow.setX(bx,by);
case t:return qx.bom.element.Overflow.setY(bx,by);
}}bx.style[name]=by!==null?by:z;
},setStyles:function(g,h,i){if(qx.core.Variant.isSet(q,bc)){qx.core.Assert.assertElement(g,bb);
qx.core.Assert.assertMap(h,J);

if(i!==undefined){qx.core.Assert.assertBoolean(i,be);
}}
for(var name in h){this.set(g,name,h[name],i);
}},reset:function(l,name,m){var n=this.__dK;
name=n.styleNames[name]||name;
if(m!==false&&n.special[name]){switch(name){case u:return qx.bom.element.Clip.reset(l);
case w:return qx.bom.element.Cursor.reset(l);
case v:return qx.bom.element.Opacity.reset(l);
case x:return qx.bom.element.BoxSizing.reset(l);
case s:return qx.bom.element.Overflow.resetX(l);
case t:return qx.bom.element.Overflow.resetY(l);
}}l.style[name]=z;
},get:qx.core.Variant.select(y,{"mshtml":function(bp,name,bq,br){var bw=this.__dK;
name=bw.styleNames[name]||name;
if(br!==false&&bw.special[name]){switch(name){case u:return qx.bom.element.Clip.get(bp,bq);
case w:return qx.bom.element.Cursor.get(bp,bq);
case v:return qx.bom.element.Opacity.get(bp,bq);
case x:return qx.bom.element.BoxSizing.get(bp,bq);
case s:return qx.bom.element.Overflow.getX(bp,bq);
case t:return qx.bom.element.Overflow.getY(bp,bq);
}}if(!bp.currentStyle){return bp.style[name]||z;
}switch(bq){case this.LOCAL_MODE:return bp.style[name]||z;
case this.CASCADED_MODE:return bp.currentStyle[name]||z;
default:var bv=bp.currentStyle[name]||z;
if(/^-?[\.\d]+(px)?$/i.test(bv)){return bv;
}var bu=bw.mshtmlPixel[name];

if(bu){var bs=bp.style[name];
bp.style[name]=bv||0;
var bt=bp.style[bu]+ba;
bp.style[name]=bs;
return bt;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bv)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bv;
}},"default":function(a,name,b,c){var f=this.__dK;
name=f.styleNames[name]||name;
if(c!==false&&f.special[name]){switch(name){case u:return qx.bom.element.Clip.get(a,b);
case w:return qx.bom.element.Cursor.get(a,b);
case v:return qx.bom.element.Opacity.get(a,b);
case x:return qx.bom.element.BoxSizing.get(a,b);
case s:return qx.bom.element.Overflow.getX(a,b);
case t:return qx.bom.element.Overflow.getY(a,b);
}}switch(b){case this.LOCAL_MODE:return a.style[name]||z;
case this.CASCADED_MODE:if(a.currentStyle){return a.currentStyle[name]||z;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var d=qx.dom.Node.getDocument(a);
var e=d.defaultView.getComputedStyle(a,null);
return e?e[name]:z;
}}})}});
})();
(function(){var x="auto",w="px",v=",",u="clip:auto;",t="rect(",s=");",r="",q=")",p="qx.bom.element.Clip",o="string",l="rect(auto)",n="clip:rect(",m="clip",k="rect(auto,auto,auto,auto)";
qx.Class.define(p,{statics:{compile:function(y){if(!y){return u;
}var D=y.left;
var top=y.top;
var C=y.width;
var B=y.height;
var z,A;

if(D==null){z=(C==null?x:C+w);
D=x;
}else{z=(C==null?x:D+C+w);
D=D+w;
}
if(top==null){A=(B==null?x:B+w);
top=x;
}else{A=(B==null?x:top+B+w);
top=top+w;
}return n+top+v+z+v+A+v+D+s;
},get:function(a,b){var d=qx.bom.element.Style.get(a,m,b,false);
var i,top,g,f;
var c,e;

if(typeof d===o&&d!==x&&d!==r){d=qx.lang.String.trim(d);
if(/\((.*)\)/.test(d)){var h=RegExp.$1.split(v);
top=qx.lang.String.trim(h[0]);
c=qx.lang.String.trim(h[1]);
e=qx.lang.String.trim(h[2]);
i=qx.lang.String.trim(h[3]);
if(i===x){i=null;
}
if(top===x){top=null;
}
if(c===x){c=null;
}
if(e===x){e=null;
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
},set:function(E,F){if(!F){E.style.clip=k;
return;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?x:J+w);
K=x;
}else{G=(J==null?x:K+J+w);
K=K+w;
}
if(top==null){H=(I==null?x:I+w);
top=x;
}else{H=(I==null?x:top+I+w);
top=top+w;
}E.style.clip=t+top+v+G+v+H+v+K+q;
},reset:function(j){j.style.clip=qx.bom.client.Engine.MSHTML?l:x;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__dM:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return f+(this.__dM[l]||l)+d;
},get:function(p,q){return qx.bom.element.Style.get(p,b,q,false);
},set:function(m,n){m.style.cursor=this.__dM[n]||n;
},reset:function(o){o.style.cursor=g;
}}});
})();
(function(){var w="",v="qx.client",u=";",t="filter",s="opacity:",r="opacity",q="MozOpacity",p=");",o=")",n="zoom:1;filter:alpha(opacity=",k="qx.bom.element.Opacity",m="alpha(opacity=",l="-moz-opacity:";
qx.Class.define(k,{statics:{compile:qx.core.Variant.select(v,{"mshtml":function(H){if(H>=1){return w;
}
if(H<0.00001){H=0;
}return n+(H*100)+p;
},"gecko":function(K){if(K==1){K=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return l+K+u;
}else{return s+K+u;
}},"default":function(e){if(e==1){return w;
}return s+e+u;
}}),set:qx.core.Variant.select(v,{"mshtml":function(f,g){var h=qx.bom.element.Style.get(f,t,qx.bom.element.Style.COMPUTED_MODE,false);
if(g>=1){f.style.filter=h.replace(/alpha\([^\)]*\)/gi,w);
return;
}
if(g<0.00001){g=0;
}if(!f.currentStyle.hasLayout){f.style.zoom=1;
}f.style.filter=h.replace(/alpha\([^\)]*\)/gi,w)+m+g*100+o;
},"gecko":function(i,j){if(j==1){j=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){i.style.MozOpacity=j;
}else{i.style.opacity=j;
}},"default":function(x,y){if(y==1){y=w;
}x.style.opacity=y;
}}),reset:qx.core.Variant.select(v,{"mshtml":function(I){var J=qx.bom.element.Style.get(I,t,qx.bom.element.Style.COMPUTED_MODE,false);
I.style.filter=J.replace(/alpha\([^\)]*\)/gi,w);
},"gecko":function(z){if(qx.bom.client.Engine.VERSION<1.7){z.style.MozOpacity=w;
}else{z.style.opacity=w;
}},"default":function(a){a.style.opacity=w;
}}),get:qx.core.Variant.select(v,{"mshtml":function(D,E){var F=qx.bom.element.Style.get(D,t,E,false);

if(F){var G=F.match(/alpha\(opacity=(.*)\)/);

if(G&&G[1]){return parseFloat(G[1])/100;
}}return 1.0;
},"gecko":function(A,B){var C=qx.bom.element.Style.get(A,qx.bom.client.Engine.VERSION<1.7?q:r,B,false);

if(C==0.999999){C=1.0;
}
if(C!=null){return parseFloat(C);
}return 1.0;
},"default":function(b,c){var d=qx.bom.element.Style.get(b,r,c,false);

if(d!=null){return parseFloat(d);
}return 1.0;
}})}});
})();
(function(){var C="qx.client",B="",A="qx.debug",z="boxSizing",y="on",x="box-sizing",w=":",v="border-box",u="qx.bom.element.BoxSizing",t="KhtmlBoxSizing",o="-moz-box-sizing",s="WebkitBoxSizing",r=";",n="-khtml-box-sizing",m="content-box",q="-webkit-box-sizing",p="MozBoxSizing";
qx.Class.define(u,{statics:{__dN:qx.core.Variant.select(C,{"mshtml":null,"webkit":[z,t,s],"gecko":[p],"opera":[z]}),__dO:qx.core.Variant.select(C,{"mshtml":null,"webkit":[x,n,q],"gecko":[o],"opera":[x]}),__dP:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dQ:function(H){var I=this.__dP;
return I.tags[H.tagName.toLowerCase()]||I.types[H.type];
},compile:qx.core.Variant.select(C,{"mshtml":function(b){if(qx.core.Variant.isSet(A,y)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(h){var k=this.__dO;
var j=B;

if(k){for(var i=0,l=k.length;i<l;i++){j+=k[i]+w+h+r;
}}return j;
}}),get:qx.core.Variant.select(C,{"mshtml":function(G){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(G))){if(!this.__dQ(G)){return m;
}}return v;
},"default":function(e){var g=this.__dN;
var f;

if(g){for(var i=0,l=g.length;i<l;i++){f=qx.bom.element.Style.get(e,g[i],null,false);

if(f!=null&&f!==B){return f;
}}}return B;
}}),set:qx.core.Variant.select(C,{"mshtml":function(c,d){if(qx.core.Variant.isSet(A,y)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(D,E){var F=this.__dN;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(a){this.set(a,B);
}}});
})();
(function(){var c="CSS1Compat",b="qx.bom.Document";
qx.Class.define(b,{statics:{isQuirksMode:function(a){return (a||window).document.compatMode!==c;
},isStandardMode:function(d){return (d||window).document.compatMode===c;
},getWidth:function(e){var f=(e||window).document;
var g=qx.bom.Viewport.getWidth(e);
var scroll=f.compatMode===c?f.documentElement.scrollWidth:f.body.scrollWidth;
return Math.max(scroll,g);
},getHeight:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getHeight(h);
var scroll=i.compatMode===c?i.documentElement.scrollHeight:i.body.scrollHeight;
return Math.max(scroll,j);
}}});
})();
(function(){var f="qx.client",e="CSS1Compat",d="qx.bom.Viewport";
qx.Class.define(d,{statics:{getWidth:qx.core.Variant.select(f,{"opera":function(n){return (n||window).document.body.clientWidth;
},"webkit":function(a){return (a||window).innerWidth;
},"default":function(j){var k=(j||window).document;
return k.compatMode===e?k.documentElement.clientWidth:k.body.clientWidth;
}}),getHeight:qx.core.Variant.select(f,{"opera":function(g){return (g||window).document.body.clientHeight;
},"webkit":function(p){return (p||window).innerHeight;
},"default":function(b){var c=(b||window).document;
return c.compatMode===e?c.documentElement.clientHeight:c.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(f,{"mshtml":function(h){var i=(h||window).document;
return i.documentElement.scrollLeft||i.body.scrollLeft;
},"default":function(o){return (o||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(f,{"mshtml":function(l){var m=(l||window).document;
return m.documentElement.scrollTop||m.body.scrollTop;
},"default":function(q){return (q||window).pageYOffset;
}})}});
})();
(function(){var A="borderTopWidth",z="borderLeftWidth",y="scroll",x="border-box",w="position",v="borderBottomWidth",u="qx.client",t="borderRightWidth",s="auto",r="marginTop",S="marginLeft",R="padding",Q="fixed",P="CSS1Compat",O="qx.bom.element.Location",N="paddingLeft",M="static",L="marginBottom",K="visible",J="BODY",H="paddingBottom",I="paddingTop",F="marginRight",G="margin",D="overflow",E="paddingRight",B="border",C="absolute";
qx.Class.define(O,{statics:{__dR:function(i,j){return qx.bom.element.Style.get(i,j,qx.bom.element.Style.COMPUTED_MODE,false);
},__dS:function(bb,bc){return parseInt(qx.bom.element.Style.get(bb,bc,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__dT:function(bs){var bv=0,top=0;
if(bs.getBoundingClientRect){var bu=qx.dom.Node.getWindow(bs);
bv-=qx.bom.Viewport.getScrollLeft(bu);
top-=qx.bom.Viewport.getScrollTop(bu);
}else{var bt=qx.dom.Node.getDocument(bs).body;
bs=bs.parentNode;
while(bs&&bs!=bt){bv+=bs.scrollLeft;
top+=bs.scrollTop;
bs=bs.parentNode;
}}return {left:bv,top:top};
},__dU:qx.core.Variant.select(u,{"mshtml":function(m){var o=qx.dom.Node.getDocument(m);
var n=o.body;
var p=0;
var top=0;
p-=n.clientLeft+o.documentElement.clientLeft;
top-=n.clientTop+o.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){p+=this.__dS(n,z);
top+=this.__dS(n,A);
}return {left:p,top:top};
},"webkit":function(bH){var bJ=qx.dom.Node.getDocument(bH);
var bI=bJ.body;
var bK=bI.offsetLeft;
var top=bI.offsetTop;
bK+=this.__dS(bI,z);
top+=this.__dS(bI,A);
if(bJ.compatMode===P){bK+=this.__dS(bI,S);
top+=this.__dS(bI,r);
}return {left:bK,top:top};
},"gecko":function(e){var f=qx.dom.Node.getDocument(e).body;
var h=f.offsetLeft;
var top=f.offsetTop;
if(qx.bom.element.BoxSizing.get(f)!==x){h+=this.__dS(f,z);
top+=this.__dS(f,A);
if(!e.getBoundingClientRect){var g;

while(e){if(this.__dR(e,w)===C||this.__dR(e,w)===Q){g=true;
break;
}e=e.offsetParent;
}
if(!g){h+=this.__dS(f,z);
top+=this.__dS(f,A);
}}}return {left:h,top:top};
},"default":function(bE){var bF=qx.dom.Node.getDocument(bE).body;
var bG=bF.offsetLeft;
var top=bF.offsetTop;
return {left:bG,top:top};
}}),__dV:qx.core.Variant.select(u,{"mshtml|webkit":function(bw){var by=qx.dom.Node.getDocument(bw);
if(bw.getBoundingClientRect){var bz=bw.getBoundingClientRect();
var bA=bz.left;
var top=bz.top;
}else{var bA=bw.offsetLeft;
var top=bw.offsetTop;
bw=bw.offsetParent;
var bx=by.body;
while(bw&&bw!=bx){bA+=bw.offsetLeft;
top+=bw.offsetTop;
bA+=this.__dS(bw,z);
top+=this.__dS(bw,A);
bw=bw.offsetParent;
}}return {left:bA,top:top};
},"gecko":function(T){if(T.getBoundingClientRect){var W=T.getBoundingClientRect();
var X=Math.round(W.left);
var top=Math.round(W.top);
}else{var X=0;
var top=0;
var U=qx.dom.Node.getDocument(T).body;
var V=qx.bom.element.BoxSizing;

if(V.get(T)!==x){X-=this.__dS(T,z);
top-=this.__dS(T,A);
}
while(T&&T!==U){X+=T.offsetLeft;
top+=T.offsetTop;
if(V.get(T)!==x){X+=this.__dS(T,z);
top+=this.__dS(T,A);
}if(T.parentNode&&this.__dR(T.parentNode,D)!=K){X+=this.__dS(T.parentNode,z);
top+=this.__dS(T.parentNode,A);
}T=T.offsetParent;
}}return {left:X,top:top};
},"default":function(bL){var bN=0;
var top=0;
var bM=qx.dom.Node.getDocument(bL).body;
while(bL&&bL!==bM){bN+=bL.offsetLeft;
top+=bL.offsetTop;
bL=bL.offsetParent;
}return {left:bN,top:top};
}}),get:function(bj,bk){var bl=this.__dU(bj);

if(bj.tagName==J){var br=bl.left;
var top=bl.top;
}else{var bq=this.__dV(bj);
var scroll=this.__dT(bj);
var br=bq.left+bl.left-scroll.left;
var top=bq.top+bl.top-scroll.top;
}var bm=br+bj.offsetWidth;
var bn=top+bj.offsetHeight;

if(bk){if(bk==R||bk==y){var bo=qx.bom.element.Overflow.getX(bj);

if(bo==y||bo==s){bm+=bj.scrollWidth-bj.offsetWidth+this.__dS(bj,z)+this.__dS(bj,t);
}var bp=qx.bom.element.Overflow.getY(bj);

if(bp==y||bp==s){bn+=bj.scrollHeight-bj.offsetHeight+this.__dS(bj,A)+this.__dS(bj,v);
}}
switch(bk){case R:br+=this.__dS(bj,N);
top+=this.__dS(bj,I);
bm-=this.__dS(bj,E);
bn-=this.__dS(bj,H);
case y:br-=bj.scrollLeft;
top-=bj.scrollTop;
bm-=bj.scrollLeft;
bn-=bj.scrollTop;
case B:br+=this.__dS(bj,z);
top+=this.__dS(bj,A);
bm-=this.__dS(bj,t);
bn-=this.__dS(bj,v);
break;
case G:br-=this.__dS(bj,S);
top-=this.__dS(bj,r);
bm+=this.__dS(bj,F);
bn+=this.__dS(bj,L);
break;
}}return {left:br,top:top,right:bm,bottom:bn};
},getLeft:function(Y,ba){return this.get(Y,ba).left;
},getTop:function(a,b){return this.get(a,b).top;
},getRight:function(c,d){return this.get(c,d).right;
},getBottom:function(k,l){return this.get(k,l).bottom;
},getRelative:function(bd,be,bf,bg){var bi=this.get(bd,bf);
var bh=this.get(be,bg);
return {left:bi.left-bh.left,top:bi.top-bh.top,right:bi.right-bh.right,bottom:bi.bottom-bh.bottom};
},getPosition:function(q){return this.getRelative(q,this.getOffsetParent(q));
},getOffsetParent:function(bB){var bD=bB.offsetParent||document.body;
var bC=qx.bom.element.Style;

while(bD&&(!/^body|html$/i.test(bD.tagName)&&bC.get(bD,w)===M)){bD=bD.offsetParent;
}return bD;
}}});
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
(function(){var v="abstract",u="qx.event.dispatch.AbstractBubbling";
qx.Class.define(u,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:v,construct:function(t){this._manager=t;
},members:{_getParent:function(s){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
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
(function(){var b="qx.event.dispatch.DomBubbling";
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(c){return c.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var bu="keydown",bt="keypress",bs="qx.client",br="NumLock",bq="keyup",bp="Enter",bo="0",bn="9",bm="-",bl="PageUp",cF="+",cE="PrintScreen",cD="gecko",cC="A",cB="Z",cA="Left",cz="F5",cy="Down",cx="Up",cw="F11",bB="F6",bC="useraction",bz="F3",bA="keyinput",bx="Insert",by="F8",bv="End",bw="/",bJ="Delete",bK="*",bY="F1",bU="F4",ch="Home",cc="F2",cs="F12",cm="PageDown",bP="F7",cv="F9",cu="F10",ct="Right",bN="text",bR="Escape",bT="webkit",bW="5",ca="3",cd="Meta",cj="7",co="CapsLock",bD="input",bE="Control",bQ="Space",cg="Tab",cf="Shift",ce="Pause",cl="Unidentified",ck="__dX",cb="qx.event.handler.Keyboard",ci="mshtml",bi="__ea",cn="mshtml|webkit",bF="6",bG="off",bV="Apps",bj="4",bk="Alt",bM="2",bH="Scroll",bI="1",bL="8",bX="Win",cq="__dY",cp="__eb",bS="autoComplete",cr=",",bO="Backspace";
qx.Class.define(cb,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this.__dX=m;
this.__dY=m.getWindow();
if(qx.core.Variant.isSet(bs,cD)){this.__ea=this.__dY;
}else{this.__ea=this.__dY.document.documentElement;
}this.__eb={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(G){if(this._identifierToKeyCodeMap[G]){return true;
}
if(G.length!=1){return false;
}
if(G>=bo&&G<=bn){return true;
}
if(G>=cC&&G<=cB){return true;
}
switch(G){case cF:case bm:case bK:case bw:return true;
default:return false;
}}},members:{__ec:null,__dX:null,__dY:null,__ea:null,__eb:null,canHandleEvent:function(r,s){},registerEvent:function(R,S,T){},unregisterEvent:function(n,o,p){},_fireInputEvent:function(be,bf){var bg=this.__dX.getHandler(qx.event.handler.Focus);
var bh=bg.getActive();
if(!bh||bh.offsetWidth==0){bh=bg.getFocus();
}if(bh&&bh.offsetWidth!=0){var event=qx.event.Registration.createEvent(bA,qx.event.type.KeyInput,[be,bh,bf]);
this.__dX.dispatchEvent(bh,event);
}if(this.__dY){qx.event.Registration.fireEvent(this.__dY,bC,qx.event.type.Data,[bA]);
}},_fireSequenceEvent:function(H,I,J){var K=this.__dX.getHandler(qx.event.handler.Focus);
var M=K.getActive();
if(!M||M.offsetWidth==0){M=K.getFocus();
}if(!M||M.offsetWidth==0){M=this.__dX.getWindow().document.body;
}var event=qx.event.Registration.createEvent(I,qx.event.type.KeySequence,[H,M,J]);
this.__dX.dispatchEvent(M,event);
if(qx.core.Variant.isSet(bs,cn)){if(I==bu&&event.getDefaultPrevented()){var L=H.keyCode;

if(!(this._isNonPrintableKeyCode(L)||L==8||L==9)){this._fireSequenceEvent(H,bt,J);
}}}if(this.__dY){qx.event.Registration.fireEvent(this.__dY,bC,qx.event.type.Data,[I]);
}},_initKeyObserver:function(){this.__ec=qx.lang.Function.listener(this.__ee,this);
this.__ed=qx.lang.Function.listener(this.__eh,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ea,bq,this.__ec);
Event.addNativeListener(this.__ea,bu,this.__ec);
Event.addNativeListener(this.__ea,bt,this.__ed);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ea,bq,this.__ec);
Event.removeNativeListener(this.__ea,bu,this.__ec);
Event.removeNativeListener(this.__ea,bt,this.__ed);

for(var h in (this.__eg||{})){var g=this.__eg[h];
Event.removeNativeListener(g.target,bt,g.callback);
}delete (this.__eg);
},__ee:qx.core.Variant.select(bs,{"mshtml":function(cI){cI=window.event||cI;
var cL=cI.keyCode;
var cJ=0;
var cK=cI.type;
if(!(this.__eb[cL]==bu&&cK==bu)){this._idealKeyHandler(cL,cJ,cK,cI);
}if(cK==bu){if(this._isNonPrintableKeyCode(cL)||cL==8||cL==9){this._idealKeyHandler(cL,cJ,bt,cI);
}}this.__eb[cL]=cK;
},"gecko":function(a){var e=this._keyCodeFix[a.keyCode]||a.keyCode;
var c=a.charCode;
var d=a.type;
if(qx.bom.client.Platform.WIN){var b=e?this._keyCodeToIdentifier(e):this._charCodeToIdentifier(c);

if(!(this.__eb[b]==bu&&d==bu)){this._idealKeyHandler(e,c,d,a);
}this.__eb[b]=d;
}else{this._idealKeyHandler(e,c,d,a);
}this.__ef(a.target,d,e);
},"webkit":function(C){var F=0;
var D=0;
var E=C.type;
if(qx.bom.client.Engine.VERSION<525.13){if(E==bq||E==bu){F=this._charCode2KeyCode[C.charCode]||C.keyCode;
}else{if(this._charCode2KeyCode[C.charCode]){F=this._charCode2KeyCode[C.charCode];
}else{D=C.charCode;
}}this._idealKeyHandler(F,D,E,C);
}else{F=C.keyCode;
if(!(this.__eb[F]==bu&&E==bu)){this._idealKeyHandler(F,D,E,C);
}if(E==bu){if(this._isNonPrintableKeyCode(F)||F==8||F==9){this._idealKeyHandler(F,D,bt,C);
}}this.__eb[F]=E;
}},"opera":function(i){this._idealKeyHandler(i.keyCode,0,i.type,i);
}}),__ef:qx.core.Variant.select(bs,{"gecko":function(t,u,v){if(u===bu&&(v==33||v==34||v==38||v==40)&&t.type==bN&&t.tagName.toLowerCase()===bD&&t.getAttribute(bS)!==bG){if(!this.__eg){this.__eg={};
}var w=qx.core.ObjectRegistry.toHashCode(t);

if(this.__eg[w]){return;
}var self=this;
this.__eg[w]={target:t,callback:function(cH){qx.bom.Event.stopPropagation(cH);
self.__eh(cH);
}};
qx.bom.Event.addNativeListener(t,bt,this.__eg[w].callback);
}},"default":null}),__eh:qx.core.Variant.select(bs,{"mshtml":function(q){q=window.event||q;

if(this._charCode2KeyCode[q.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[q.keyCode],0,q.type,q);
}else{this._idealKeyHandler(0,q.keyCode,q.type,q);
}},"gecko":function(N){var Q=this._keyCodeFix[N.keyCode]||N.keyCode;
var O=N.charCode;
var P=N.type;
this._idealKeyHandler(Q,O,P,N);
},"webkit":function(U){if(qx.bom.client.Engine.VERSION<525.13){var X=0;
var V=0;
var W=U.type;

if(W==bq||W==bu){X=this._charCode2KeyCode[U.charCode]||U.keyCode;
}else{if(this._charCode2KeyCode[U.charCode]){X=this._charCode2KeyCode[U.charCode];
}else{V=U.charCode;
}}this._idealKeyHandler(X,V,W,U);
}else{if(this._charCode2KeyCode[U.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[U.keyCode],0,U.type,U);
}else{this._idealKeyHandler(0,U.keyCode,U.type,U);
}}},"opera":function(f){if(this._keyCodeToIdentifierMap[f.keyCode]){this._idealKeyHandler(f.keyCode,0,f.type,f);
}else{this._idealKeyHandler(0,f.keyCode,f.type,f);
}}}),_idealKeyHandler:function(Y,ba,bb,bc){if(!Y&&!ba){return;
}var bd;
if(Y){bd=this._keyCodeToIdentifier(Y);
this._fireSequenceEvent(bc,bb,bd);
}else{bd=this._charCodeToIdentifier(ba);
this._fireSequenceEvent(bc,bt,bd);
this._fireInputEvent(bc,ba);
}},_specialCharCodeMap:{8:bO,9:cg,13:bp,27:bR,32:bQ},_keyCodeToIdentifierMap:{16:cf,17:bE,18:bk,20:co,224:cd,37:cA,38:cx,39:ct,40:cy,33:bl,34:cm,35:bv,36:ch,45:bx,46:bJ,112:bY,113:cc,114:bz,115:bU,116:cz,117:bB,118:bP,119:by,120:cv,121:cu,122:cw,123:cs,144:br,44:cE,145:bH,19:ce,91:bX,93:bV},_numpadToCharCode:{96:bo.charCodeAt(0),97:bI.charCodeAt(0),98:bM.charCodeAt(0),99:ca.charCodeAt(0),100:bj.charCodeAt(0),101:bW.charCodeAt(0),102:bF.charCodeAt(0),103:cj.charCodeAt(0),104:bL.charCodeAt(0),105:bn.charCodeAt(0),106:bK.charCodeAt(0),107:cF.charCodeAt(0),109:bm.charCodeAt(0),110:cr.charCodeAt(0),111:bw.charCodeAt(0)},_charCodeA:cC.charCodeAt(0),_charCodeZ:cB.charCodeAt(0),_charCode0:bo.charCodeAt(0),_charCode9:bn.charCodeAt(0),_isNonPrintableKeyCode:function(x){return this._keyCodeToIdentifierMap[x]?true:false;
},_isIdentifiableKeyCode:function(j){if(j>=this._charCodeA&&j<=this._charCodeZ){return true;
}if(j>=this._charCode0&&j<=this._charCode9){return true;
}if(this._specialCharCodeMap[j]){return true;
}if(this._numpadToCharCode[j]){return true;
}if(this._isNonPrintableKeyCode(j)){return true;
}return false;
},_keyCodeToIdentifier:function(k){if(this._isIdentifiableKeyCode(k)){var l=this._numpadToCharCode[k];

if(l){return String.fromCharCode(l);
}return (this._keyCodeToIdentifierMap[k]||this._specialCharCodeMap[k]||String.fromCharCode(k));
}else{return cl;
}},_charCodeToIdentifier:function(cM){return this._specialCharCodeMap[cM]||String.fromCharCode(cM).toUpperCase();
},_identifierToKeyCode:function(cG){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cG]||cG.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this._disposeFields(ck,cq,bi,cp);
},defer:function(y,z,A){qx.event.Registration.addHandler(y);
if(!y._identifierToKeyCodeMap){y._identifierToKeyCodeMap={};

for(var B in z._keyCodeToIdentifierMap){y._identifierToKeyCodeMap[z._keyCodeToIdentifierMap[B]]=parseInt(B,10);
}
for(var B in z._specialCharCodeMap){y._identifierToKeyCodeMap[z._specialCharCodeMap[B]]=parseInt(B,10);
}}
if(qx.core.Variant.isSet(bs,ci)){z._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bs,cD)){z._keyCodeFix={12:z._identifierToKeyCode(br)};
}else if(qx.core.Variant.isSet(bs,bT)){if(qx.bom.client.Engine.VERSION<525.13){z._charCode2KeyCode={63289:z._identifierToKeyCode(br),63276:z._identifierToKeyCode(bl),63277:z._identifierToKeyCode(cm),63275:z._identifierToKeyCode(bv),63273:z._identifierToKeyCode(ch),63234:z._identifierToKeyCode(cA),63232:z._identifierToKeyCode(cx),63235:z._identifierToKeyCode(ct),63233:z._identifierToKeyCode(cy),63272:z._identifierToKeyCode(bJ),63302:z._identifierToKeyCode(bx),63236:z._identifierToKeyCode(bY),63237:z._identifierToKeyCode(cc),63238:z._identifierToKeyCode(bz),63239:z._identifierToKeyCode(bU),63240:z._identifierToKeyCode(cz),63241:z._identifierToKeyCode(bB),63242:z._identifierToKeyCode(bP),63243:z._identifierToKeyCode(by),63244:z._identifierToKeyCode(cv),63245:z._identifierToKeyCode(cu),63246:z._identifierToKeyCode(cw),63247:z._identifierToKeyCode(cs),63248:z._identifierToKeyCode(cE),3:z._identifierToKeyCode(bp),12:z._identifierToKeyCode(br),13:z._identifierToKeyCode(bp)};
}else{z._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var v="qx.client",u="mouseup",t="mousedown",s="click",r="contextmenu",q="dblclick",p="mousewheel",o="mouseover",n="mouseout",m="DOMMouseScroll",g="mousemove",l="mshtml|webkit|opera",j="__ei",f="useraction",e="__ej",i="__ek",h="qx.event.handler.Mouse",k="gecko|webkit",d="__ep";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(x){arguments.callee.base.call(this);
this.__ei=x;
this.__ej=x.getWindow();
this.__ek=this.__ej.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__el:null,__em:null,__en:null,__eo:null,__ep:null,__ei:null,__ej:null,__ek:null,canHandleEvent:function(L,M){},registerEvent:function(P,Q,R){},unregisterEvent:function(S,T,U){},__eq:function(E,F,G){if(!G){G=E.target||E.srcElement;
}if(G&&G.nodeType){qx.event.Registration.fireEvent(G,F||E.type,qx.event.type.Mouse,[E,G,null,true,true]);
}qx.event.Registration.fireEvent(this.__ej,f,qx.event.type.Data,[F||E.type]);
},_initButtonObserver:function(){this.__el=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ek,t,this.__el);
Event.addNativeListener(this.__ek,u,this.__el);
Event.addNativeListener(this.__ek,s,this.__el);
Event.addNativeListener(this.__ek,q,this.__el);
Event.addNativeListener(this.__ek,r,this.__el);
},_initMoveObserver:function(){this.__em=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ek,g,this.__em);
Event.addNativeListener(this.__ek,o,this.__em);
Event.addNativeListener(this.__ek,n,this.__em);
},_initWheelObserver:function(){this.__en=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var w=qx.core.Variant.isSet(v,l)?p:m;
Event.addNativeListener(this.__ek,w,this.__en);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ek,t,this.__el);
Event.removeNativeListener(this.__ek,u,this.__el);
Event.removeNativeListener(this.__ek,s,this.__el);
Event.removeNativeListener(this.__ek,q,this.__el);
Event.removeNativeListener(this.__ek,r,this.__el);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ek,g,this.__em);
Event.removeNativeListener(this.__ek,o,this.__em);
Event.removeNativeListener(this.__ek,n,this.__em);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var H=qx.core.Variant.isSet(v,l)?p:m;
Event.removeNativeListener(this.__ek,H,this.__en);
},_onMoveEvent:function(O){this.__eq(O);
},_onButtonEvent:function(y){var z=y.type;
var A=y.target||y.srcElement;
if(qx.core.Variant.isSet(v,k)){if(A&&A.nodeType==3){A=A.parentNode;
}}
if(this.__er){this.__er(y,z,A);
}
if(this.__et){this.__et(y,z,A);
}this.__eq(y,z,A);

if(this.__es){this.__es(y,z,A);
}
if(this.__eu){this.__eu(y,z,A);
}this.__eo=z;
},_onWheelEvent:function(ba){this.__eq(ba,p);
},__er:qx.core.Variant.select(v,{"webkit":function(a,b,c){if(b==r){this.__eq(a,t,c);
this.__eq(a,u,c);
}},"default":null}),__es:qx.core.Variant.select(v,{"opera":function(I,J,K){if(J==u&&I.button==2){this.__eq(I,r,K);
}},"default":null}),__et:qx.core.Variant.select(v,{"mshtml":function(B,C,D){if(C==u&&this.__eo==s){this.__eq(B,t,D);
}else if(C==q){this.__eq(B,s,D);
}},"default":null}),__eu:qx.core.Variant.select(v,{"mshtml":null,"default":function(V,W,X){switch(W){case t:this.__ep=X;
break;
case u:if(X!==this.__ep){var Y=qx.dom.Hierarchy.getCommonParent(X,this.__ep);
this.__eq(V,s,Y);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(j,e,i,d);
},defer:function(N){qx.event.Registration.addHandler(N);
}});
})();
(function(){var d="qx.event.handler.Capture";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(e,f){},registerEvent:function(a,b,c){},unregisterEvent:function(h,i,j){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",I="Alt",H="keyup",G="mouseup",F="dragend",E="on",D="mousedown",C="qxDraggable",B="drag",A="__ez",z="__eA",r="__eC",s="drop",p="qxDroppable",q="qx.event.handler.DragDrop",n="__ew",o="droprequest",l="__eN",m="dragstart",t="__eJ",u="dragchange",w="__eB",v="dragleave",y="dragover",x="__ev";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bt){arguments.callee.base.call(this);
this.__ev=bt;
this.__ew=bt.getWindow().document.documentElement;
this.__ev.addListener(this.__ew,D,this._onMouseDown,this);
this.__ey();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(bk,bl){},registerEvent:function(bh,bi,bj){},unregisterEvent:function(bo,bp,bq){},addType:function(V){this.__ez[V]=true;
},addAction:function(bs){this.__eA[bs]=true;
},supportsType:function(U){return !!this.__ez[U];
},supportsAction:function(T){return !!this.__eA[T];
},getData:function(Q){if(!this.__eM||!this.__eN){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__ez[Q]){throw new Error("Unsupported data type: "+Q+"!");
}
if(!this.__eC[Q]){this.__ex=Q;
this.__eF(o,this.__eJ,false);
}
if(!this.__eC[Q]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__eC[Q]||null;
},getCurrentAction:function(){return this.__eE;
},addData:function(bc,bd){this.__eC[bc]=bd;
},getCurrentType:function(){return this.__ex;
},__ey:function(){this.__ez={};
this.__eA={};
this.__eB={};
this.__eC={};
},__eD:function(){var bb=this.__eA;
var Y=this.__eB;
var ba=null;

if(this.__eM){if(Y.Shift&&Y.Ctrl&&bb.alias){ba=k;
}else if(Y.Shift&&Y.Alt&&bb.copy){ba=j;
}else if(Y.Shift&&bb.move){ba=b;
}else if(Y.Alt&&bb.alias){ba=k;
}else if(Y.Ctrl&&bb.copy){ba=j;
}else if(bb.move){ba=b;
}else if(bb.copy){ba=j;
}else if(bb.alias){ba=k;
}}
if(ba!=this.__eE){this.__eE=ba;
this.__eF(u,this.__eJ,false);
}},__eF:function(J,K,L,M){var O=qx.event.Registration;
var N=O.createEvent(J,qx.event.type.Drag,[L,M]);

if(this.__eJ!==this.__eN){if(K==this.__eJ){N.setRelatedTarget(this.__eN);
}else{N.setRelatedTarget(this.__eJ);
}}return O.dispatchEvent(K,N);
},__eG:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(C)==E){return bg;
}bg=bg.parentNode;
}return null;
},__eH:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(p)==E){return bf;
}bf=bf.parentNode;
}return null;
},__eI:function(){this.__eJ=null;
this.__ev.removeListener(this.__ew,c,this._onMouseMove,this,true);
this.__ev.removeListener(this.__ew,G,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__ey();
},__eK:function(){if(this.__eL){this.__ev.removeListener(this.__ew,a,this._onMouseOver,this,true);
this.__ev.removeListener(this.__ew,h,this._onMouseOut,this,true);
this.__ev.removeListener(this.__ew,g,this._onKeyDown,this,true);
this.__ev.removeListener(this.__ew,H,this._onKeyUp,this,true);
this.__eF(F,this.__eJ,false);
this.__eL=false;
}this.__eM=false;
this.__eN=null;
this.__eI();
},__eM:false,_onWindowBlur:function(e){this.__eK();
},_onKeyDown:function(e){var X=e.getKeyIdentifier();

switch(X){case I:case f:case d:if(!this.__eB[X]){this.__eB[X]=true;
this.__eD();
}}},_onKeyUp:function(e){var br=e.getKeyIdentifier();

switch(br){case I:case f:case d:if(this.__eB[br]){this.__eB[br]=false;
this.__eD();
}}},_onMouseDown:function(e){if(this.__eL){return;
}var be=this.__eG(e.getTarget());

if(be){this.__eO=e.getDocumentLeft();
this.__eP=e.getDocumentTop();
this.__eJ=be;
this.__ev.addListener(this.__ew,c,this._onMouseMove,this,true);
this.__ev.addListener(this.__ew,G,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__eM){this.__eF(s,this.__eN,false,e);
}if(this.__eL){e.stopPropagation();
}this.__eK();
},_onMouseMove:function(e){if(this.__eL){if(!this.__eF(B,this.__eJ,true,e)){this.__eK();
}}else{if(Math.abs(e.getDocumentLeft()-this.__eO)>3||Math.abs(e.getDocumentTop()-this.__eP)>3){if(this.__eF(m,this.__eJ,true,e)){this.__eL=true;
this.__ev.addListener(this.__ew,a,this._onMouseOver,this,true);
this.__ev.addListener(this.__ew,h,this._onMouseOut,this,true);
this.__ev.addListener(this.__ew,g,this._onKeyDown,this,true);
this.__ev.addListener(this.__ew,H,this._onKeyUp,this,true);
var P=this.__eB;
P.Ctrl=e.isCtrlPressed();
P.Shift=e.isShiftPressed();
P.Alt=e.isAltPressed();
this.__eD();
}else{this.__eF(F,this.__eJ,false);
this.__eI();
}}}},_onMouseOver:function(e){var bm=e.getTarget();
var bn=this.__eH(bm);

if(bn&&bn!=this.__eN){this.__eM=this.__eF(y,bn,true,e);
this.__eN=bn;
this.__eD();
}},_onMouseOut:function(e){var R=e.getTarget();
var S=this.__eH(R);

if(S&&S==this.__eN){this.__eF(v,this.__eN,false,e);
this.__eN=null;
this.__eM=false;
this.__eD();
}}},destruct:function(){this._disposeFields(t,l,x,n,A,z,w,r);
},defer:function(W){qx.event.Registration.addHandler(W);
}});
})();
(function(){var h="-",g="qx.event.handler.Element",f="_manager",e="_registeredEvents";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){arguments.callee.base.call(this);
this._manager=i;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(t,u){},registerEvent:function(j,k,l){var o=qx.core.ObjectRegistry.toHashCode(j);
var m=o+h+k;
var n=qx.lang.Function.listener(this._onNative,this,m);
qx.bom.Event.addNativeListener(j,k,n);
this._registeredEvents[m]={element:j,type:k,listener:n};
},unregisterEvent:function(v,w,x){var A=this._registeredEvents;

if(!A){return;
}var B=qx.core.ObjectRegistry.toHashCode(v);
var y=B+h+w;
var z=this._registeredEvents[y];
qx.bom.Event.removeNativeListener(v,w,z.listener);
delete this._registeredEvents[y];
},_onNative:function(p,q){var s=this._registeredEvents;

if(!s){return;
}var r=s[q];
qx.event.Registration.fireNonBubblingEvent(r.element,r.type,qx.event.type.Native,[p]);
}},destruct:function(){var a;
var b=this._registeredEvents;

for(var c in b){a=b[c];
qx.bom.Event.removeNativeListener(a.element,a.type,a.listener);
}this._disposeFields(f,e);
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var j="qx.event.handler.Appear",i="__eQ",h="__eR",g="disappear",f="appear";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){arguments.callee.base.call(this);
this.__eQ=z;
this.__eR={};
qx.event.handler.Appear.__eS[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__eS:{},refresh:function(){var r=this.__eS;

for(var s in r){r[s].refresh();
}}},members:{canHandleEvent:function(k,l){},registerEvent:function(m,n,o){var p=qx.core.ObjectRegistry.toHashCode(m);
var q=this.__eR;

if(q&&!q[p]){q[p]=m;
m.$$displayed=m.offsetWidth>0;
}},unregisterEvent:function(a,b,c){var d=qx.core.ObjectRegistry.toHashCode(a);
var e=this.__eR;

if(!e){return;
}
if(e[d]){delete e[d];
a.$$displayed=null;
}},refresh:function(){var x=this.__eR;
var y;

for(var w in x){y=x[w];
var u=y.offsetWidth>0;

if((!!y.$$displayed)!==u){y.$$displayed=u;
var v=qx.event.Registration.createEvent(u?f:g);
this.__eQ.dispatchEvent(y,v);
}}}},destruct:function(){this._disposeFields(i,h);
delete qx.event.handler.Appear.__eS[this.$$hash];
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var v="mshtml",u="",t="qx.client",s=">",r="<",q=" ",p="='",o="http://www.w3.org/1999/xhtml",n="qx.bom.Element",m="div",h="' ",k="></";
qx.Class.define(n,{statics:{__eT:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,K,L){if(!L){L=window;
}
if(!name){throw new Error("The tag name is missing!");
}var N=this.__eT;
var M=u;

for(var P in K){if(N[P]){M+=P+p+K[P]+h;
}}var Q;
if(M!=u){if(qx.bom.client.Engine.MSHTML){Q=L.document.createElement(r+name+q+M+s);
}else{var O=L.document.createElement(m);
O.innerHTML=r+name+q+M+k+name+s;
Q=O.firstChild;
}}else{if(L.document.createElementNS){Q=L.document.createElementNS(o,name);
}else{Q=L.document.createElement(name);
}}
for(var P in K){if(!N[P]){qx.bom.element.Attribute.set(Q,P,K[P]);
}}return Q;
},empty:function(I){return I.innerHTML=u;
},addListener:function(Y,ba,bb,self,bc){return qx.event.Registration.addListener(Y,ba,bb,self,bc);
},removeListener:function(R,S,T,self,U){return qx.event.Registration.removeListener(R,S,T,self,U);
},removeListenerById:function(a,b){return qx.event.Registration.removeListenerById(a,b);
},hasListener:function(c,d,e){return qx.event.Registration.hasListener(c,d,e);
},focus:function(g){qx.event.Registration.getManager(g).getHandler(qx.event.handler.Focus).focus(g);
},blur:function(W){qx.event.Registration.getManager(W).getHandler(qx.event.handler.Focus).blur(W);
},activate:function(f){qx.event.Registration.getManager(f).getHandler(qx.event.handler.Focus).activate(f);
},deactivate:function(X){qx.event.Registration.getManager(X).getHandler(qx.event.handler.Focus).deactivate(X);
},capture:function(V){qx.event.Registration.getManager(V).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(V);
},releaseCapture:function(J){qx.event.Registration.getManager(J).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(J);
},clone:function(w,x){var A;

if(x||(qx.core.Variant.isSet(t,v)&&!qx.xml.Document.isXmlDocument(w))){var E=qx.event.Registration.getManager(w);
var y=qx.dom.Hierarchy.getDescendants(w);
y.push(w);
}if(qx.core.Variant.isSet(t,v)){for(var i=0,l=y.length;i<l;i++){E.toggleAttachedEvents(y[i],false);
}}var A=w.cloneNode(true);
if(qx.core.Variant.isSet(t,v)){for(var i=0,l=y.length;i<l;i++){E.toggleAttachedEvents(y[i],true);
}}if(x===true){var H=qx.dom.Hierarchy.getDescendants(A);
H.push(A);
var z,C,G,B;

for(var i=0,F=y.length;i<F;i++){G=y[i];
z=E.serializeListeners(G);

if(z.length>0){C=H[i];

for(var j=0,D=z.length;j<D;j++){B=z[j];
E.addListener(C,B.type,B.handler,B.self,B.capture);
}}}}return A;
}}});
})();
(function(){var bm="qx.client",bl="blur",bk="focus",bj="mousedown",bi="on",bh="mouseup",bg="DOMFocusOut",bf="DOMFocusIn",be="selectstart",bd="onmousedown",bJ="onfocusout",bI="onfocusin",bH="onmouseup",bG="onselectstart",bF="draggesture",bE="_document",bD="_root",bC="qx.event.handler.Focus",bB="_applyFocus",bA="_window",bt="deactivate",bu="_applyActive",br="focusin",bs="qxSelectable",bp="tabIndex",bq="off",bn="_body",bo="activate",bv="focusout",bw="__mouseActive",by="_manager",bx="qxKeepFocus",bz="qxKeepActive";
qx.Class.define(bC,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(N){arguments.callee.base.call(this);
this._manager=N;
this._window=N.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bu,nullable:true},focus:{apply:bB,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{canHandleEvent:function(v,w){},registerEvent:function(s,t,u){},unregisterEvent:function(c,d,f){},focus:function(L){try{L.focus();
}catch(H){}this.setFocus(L);
this.setActive(L);
},activate:function(x){this.setActive(x);
},blur:function(C){try{C.blur();
}catch(M){}
if(this.getActive()===C){this.resetActive();
}
if(this.getFocus()===C){this.resetFocus();
}},deactivate:function(Q){if(this.getActive()===Q){this.resetActive();
}},tryActivate:function(W){var X=this.__fs(W);

if(X){this.setActive(X);
}},__eU:function(h,i,j,k){var m=qx.event.Registration;
var l=m.createEvent(j,qx.event.type.Focus,[h,i,k]);
m.dispatchEvent(h,l);
},_windowFocused:true,__eV:function(){if(this._windowFocused){this._windowFocused=false;
this.__eU(this._window,null,bl,false);
}},__eW:function(){if(!this._windowFocused){this._windowFocused=true;
this.__eU(this._window,null,bk,false);
}},_initObserver:qx.core.Variant.select(bm,{"gecko":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fa=qx.lang.Function.listener(this.__fm,this);
this.__fb=qx.lang.Function.listener(this.__fl,this);
this.__fc=qx.lang.Function.listener(this.__fg,this);
this._document.addEventListener(bj,this.__eX,true);
this._document.addEventListener(bh,this.__eY,true);
this._window.addEventListener(bk,this.__fa,true);
this._window.addEventListener(bl,this.__fb,true);
this._window.addEventListener(bF,this.__fc,true);
},"mshtml":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fd=qx.lang.Function.listener(this.__fh,this);
this.__fe=qx.lang.Function.listener(this.__fi,this);
this.__ff=qx.lang.Function.listener(this.__fp,this);
this._document.attachEvent(bd,this.__eX);
this._document.attachEvent(bH,this.__eY);
this._document.attachEvent(bI,this.__fd);
this._document.attachEvent(bJ,this.__fe);
this._document.attachEvent(bG,this.__ff);
},"webkit":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fe=qx.lang.Function.listener(this.__fi,this);
this.__fa=qx.lang.Function.listener(this.__fm,this);
this.__fb=qx.lang.Function.listener(this.__fl,this);
this.__ff=qx.lang.Function.listener(this.__fp,this);
this._document.addEventListener(bj,this.__eX,true);
this._document.addEventListener(bh,this.__eY,true);
this._document.addEventListener(be,this.__ff,false);
this._window.addEventListener(bg,this.__fe,true);
this._window.addEventListener(bk,this.__fa,true);
this._window.addEventListener(bl,this.__fb,true);
},"opera":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fd=qx.lang.Function.listener(this.__fh,this);
this.__fe=qx.lang.Function.listener(this.__fi,this);
this._document.addEventListener(bj,this.__eX,true);
this._document.addEventListener(bh,this.__eY,true);
this._window.addEventListener(bf,this.__fd,true);
this._window.addEventListener(bg,this.__fe,true);
}}),_stopObserver:qx.core.Variant.select(bm,{"gecko":function(){this._document.removeEventListener(bj,this.__eX,true);
this._document.removeEventListener(bh,this.__eY,true);
this._window.removeEventListener(bk,this.__fa,true);
this._window.removeEventListener(bl,this.__fb,true);
this._window.removeEventListener(bF,this.__fc,true);
},"mshtml":function(){this._document.detachEvent(bd,this.__eX);
this._document.detachEvent(bH,this.__eY);
this._document.detachEvent(bI,this.__fd);
this._document.detachEvent(bJ,this.__fe);
this._document.detachEvent(bG,this.__ff);
},"webkit":function(){this._document.removeEventListener(bj,this.__eX,true);
this._document.removeEventListener(be,this.__ff,false);
this._window.removeEventListener(bf,this.__fd,true);
this._window.removeEventListener(bg,this.__fe,true);
this._window.removeEventListener(bk,this.__fa,true);
this._window.removeEventListener(bl,this.__fb,true);
},"opera":function(){this._document.removeEventListener(bj,this.__eX,true);
this._window.removeEventListener(bf,this.__fd,true);
this._window.removeEventListener(bg,this.__fe,true);
this._window.removeEventListener(bk,this.__fa,true);
this._window.removeEventListener(bl,this.__fb,true);
}}),__fg:qx.core.Variant.select(bm,{"gecko":function(e){if(!this.__ft(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null}),__fh:qx.core.Variant.select(bm,{"mshtml":function(e){this.__eW();
var P=e.srcElement;
var O=this.__fr(P);

if(O){this.setFocus(O);
}this.tryActivate(P);
},"opera":function(e){var R=e.target;

if(R==this._document||R==this._window){this.__eW();

if(this.__fj){this.setFocus(this.__fj);
delete this.__fj;
}
if(this.__fk){this.setActive(this.__fk);
delete this.__fk;
}}else{this.setFocus(R);
this.tryActivate(R);
if(!this.__ft(R)){R.selectionStart=0;
R.selectionEnd=0;
}}},"default":null}),__fi:qx.core.Variant.select(bm,{"mshtml":function(e){if(!e.toElement){this.__eV();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var g=e.target;

if(g===this.getFocus()){this.resetFocus();
}
if(g===this.getActive()){this.resetActive();
}},"opera":function(e){var B=e.target;

if(B==this._document){this.__eV();
this.__fj=this.getFocus();
this.__fk=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(B===this.getFocus()){this.resetFocus();
}
if(B===this.getActive()){this.resetActive();
}}},"default":null}),__fl:qx.core.Variant.select(bm,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__eV();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__eV();
this.__fj=this.getFocus();
this.__fk=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null}),__fm:qx.core.Variant.select(bm,{"gecko":function(e){var r=e.target;

if(r===this._window||r===this._document){this.__eW();
r=this._body;
}this.setFocus(r);
this.tryActivate(r);
},"webkit":function(e){var bK=e.target;

if(bK===this._window||bK===this._document){this.__eW();

if(this.__fj){this.setFocus(this.__fj);
delete this.__fj;
}
if(this.__fk){this.setActive(this.__fk);
delete this.__fk;
}}else{this.setFocus(bK);
this.tryActivate(bK);
}},"default":null}),__fn:qx.core.Variant.select(bm,{"gecko":function(e){var U=e.target;
var S=this.__fr(U);
var T=this.__ft(U);

if(!T){qx.bom.Event.preventDefault(e);
if(S){S.focus();
}}else if(!S){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var q=e.srcElement;
var p=this.__fr(q);

if(p){if(!this.__ft(q)){q.unselectable=bi;
document.selection.empty();
p.focus();
}}else{qx.bom.Event.preventDefault(e);
if(!this.__ft(q)){q.unselectable=bi;
}}},"webkit":function(e){var o=e.target;
var n=this.__fr(o);

if(n){this.setFocus(n);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var A=e.target;
var y=this.__fr(A);

if(!this.__ft(A)){qx.bom.Event.preventDefault(e);
if(y){var z=this.getFocus();

if(z&&z.selectionEnd){z.selectionStart=0;
z.selectionEnd=0;
z.blur();
}if(y){this.setFocus(y);
}}}else if(y){this.setFocus(y);
}},"default":null}),__fo:qx.core.Variant.select(bm,{"mshtml":function(e){var G=e.srcElement;

if(G.unselectable){G.unselectable=bq;
}this.tryActivate(G);
},"gecko":function(e){var D=e.target;

while(D&&D.offsetWidth===undefined){D=D.parentNode;
}
if(D){this.tryActivate(D);
}},"webkit|opera":function(e){this.tryActivate(e.target);
},"default":null}),__fp:qx.core.Variant.select(bm,{"mshtml|webkit":function(e){if(!this.__ft(e.srcElement)){qx.bom.Event.preventDefault(e);
}},"default":null}),__fq:function(I){var J=qx.bom.element.Attribute.get(I,bp);

if(J>=1){return true;
}var K=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(J>=0&&K[I.tagName]){return true;
}return false;
},__fr:function(V){while(V&&V.nodeType===1){if(V.getAttribute(bx)==bi){return null;
}
if(this.__fq(V)){return V;
}V=V.parentNode;
}return this._body;
},__fs:function(a){var b=a;

while(a&&a.nodeType===1){if(a.getAttribute(bz)==bi){return null;
}a=a.parentNode;
}return b;
},__ft:function(bb){while(bb&&bb.nodeType===1){var bc=bb.getAttribute(bs);

if(bc!=null){return bc===bi;
}bb=bb.parentNode;
}return true;
},_applyActive:function(E,F){if(F){this.__eU(F,E,bt,true);
}
if(E){this.__eU(E,F,bo,true);
}},_applyFocus:function(Y,ba){if(ba){this.__eU(ba,Y,bv,true);
}
if(Y){this.__eU(Y,ba,br,true);
}if(ba){this.__eU(ba,Y,bl,false);
}
if(Y){this.__eU(Y,ba,bk,false);
}}},destruct:function(){this._stopObserver();
this._disposeFields(by,bA,bE,bD,bn,bw);
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
(function(){var m="qx.client",l="mshtml",k="readOnly",j="accessKey",i="qx.bom.element.Attribute",h="rowSpan",g="vAlign",f="className",e="textContent",d="'",C="htmlFor",B="longDesc",A="cellSpacing",z="frameBorder",y="='",x="",w="useMap",v="innerText",u="innerHTML",t="tabIndex",r="cssText",s="dateTime",p="maxLength",q="cellPadding",n="colSpan",o="style";
qx.Class.define(i,{statics:{__fu:{names:{"class":f,"for":C,html:u,text:qx.core.Variant.isSet(m,l)?v:e,colspan:n,rowspan:h,valign:g,datetime:s,accesskey:j,tabindex:t,maxlength:p,readonly:k,longdesc:B,cellpadding:q,cellspacing:A,frameborder:z,usemap:w},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},original:{href:1,src:1,type:1}},compile:function(D){var E=[];
var G=this.__fu.runtime;

for(var F in D){if(!G[F]){E.push(F,y,D[F],d);
}}return E.join(x);
},get:qx.core.Variant.select(m,{"mshtml":function(K,name){var M=this.__fu;
var L;
name=M.names[name]||name;
if(M.original[name]){L=K.getAttribute(name,2);
}else if(M.property[name]){L=K[name];
}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
},"default":function(a,name){var c=this.__fu;
var b;
name=c.names[name]||name;
if(c.property[name]){b=a[name];

if(b==null){b=a.getAttribute(name);
}}else{b=a.getAttribute(name);
}if(c.bools[name]){return !!b;
}return b;
}}),set:function(H,name,I){var J=this.__fu;
name=J.names[name]||name;
if(J.bools[name]){I=!!I;
}if(J.property[name]){H[name]=I;
}else if(I===true){H.setAttribute(name,name);
}else if(I===false||I===null){H.removeAttribute(name);
}else if(qx.core.Variant.isSet(m,l)&&name==o){H.style.setAttribute(r,I);
}else{H.setAttribute(name,I);
}},reset:function(N,name){this.set(N,name,null);
}}});
})();
(function(){var c="qx.event.type.Dom";
qx.Class.define(c,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{getModifiers:function(){if(!this.__modifiers){var b=0;
var a=this._native;

if(a.shiftKey){b|=qx.event.type.Dom.SHIFT_MASK;
}
if(a.ctrlKey){b|=qx.event.type.Dom.CTRL_MASK;
}
if(a.altKey){b|=qx.event.type.Dom.ALT_MASK;
}
if(a.metaKey){b|=qx.event.type.Dom.META_MASK;
}return b;
}return this.__modifiers;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
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
(function(){var o="qx.client",n="left",m="right",l="middle",k="dblclick",j="click",i="none",h="contextmenu",g="qx.event.type.Mouse";
qx.Class.define(g,{extend:qx.event.type.Dom,members:{init:function(b,c,d,e,f){arguments.callee.base.call(this,b,c,d,e,f);

if(!d){this._relatedTarget=qx.bom.Event.getRelatedTarget(b);
}return this;
},__fv:qx.core.Variant.select(o,{"mshtml":{1:n,2:m,4:l},"default":{0:n,2:m,1:l}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case j:case k:return n;
case h:return m;
default:return this.__fv[this._native.button]||i;
}},isLeftPressed:function(){return this.getButton()===n;
},isMiddlePressed:function(){return this.getButton()===l;
},isRightPressed:function(){return this.getButton()===m;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(o,{"mshtml":function(){var p=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(p);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(o,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(a);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
},getWheelDelta:qx.core.Variant.select(o,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
}})}});
})();
(function(){var f="qx.client",e="qx.event.type.Drag";
qx.Class.define(e,{extend:qx.event.type.Event,members:{init:function(c,d){arguments.callee.base.call(this,false,c);

if(d){this._native=d.getNativeEvent()||null;
this._originalTarget=d.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(k){var l=arguments.callee.base.call(this,k);
l._native=this._native;
return l;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var h=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(h);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(a){this.getManager().addType(a);
},addAction:function(b){this.getManager().addAction(b);
},supportsType:function(m){return this.getManager().supportsType(m);
},supportsAction:function(n){return this.getManager().supportsAction(n);
},addData:function(i,j){this.getManager().addData(i,j);
},getData:function(g){return this.getManager().getData(g);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var s="__fy",r="blur",q="__fw",p="__fx",o="losecapture",n="capture",m="click",k="qx.event.dispatch.MouseCapture",j="focus",h="scroll";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(g){arguments.callee.base.call(this);
this.__fw=g;
this.__fx=g.getWindow();
g.addListener(this.__fx,r,this.releaseCapture,this);
g.addListener(this.__fx,j,this.releaseCapture,this);
g.addListener(this.__fx,h,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fy:null,__fw:null,__fx:null,canDispatchEvent:function(e,event,f){return (this.__fy&&this.__fz[f]);
},dispatchEvent:function(a,event,b){if(b==m){event.stopPropagation();
this.releaseCapture();
return;
}var c=this.__fw.getListeners(this.__fy,b,false);

if(c){event.setCurrentTarget(this.__fy);
event.setEventPhase(qx.event.type.Event.AT_TARGET);

for(var i=0,l=c.length;i<l;i++){var d=c[i].context||event.getCurrentTarget();
c[i].handler.call(d,event);
}}},__fz:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(t){if(this.__fy===t){return;
}
if(this.__fy){this.releaseCapture();
}this.__fy=t;
qx.event.Registration.fireEvent(t,n,qx.event.type.Event,[true,false]);
},releaseCapture:function(){var v=this.__fy;

if(!v){return;
}this.__fy=null;
qx.event.Registration.fireEvent(v,o,qx.event.type.Event,[true,false]);
}},destruct:function(){this._disposeFields(s,q,p);
},defer:function(u){qx.event.Registration.addDispatcher(u);
}});
})();
(function(){var w="qx.client",v="",u="mshtml",t="'",s="SelectionLanguage",r="qx.xml.Document",q=" />",p="MSXML2.DOMDocument.3.0",o='<\?xml version="1.0" encoding="utf-8"?>\n<',n="MSXML2.XMLHTTP.3.0",h="MSXML2.XMLHTTP.6.0",m=" xmlns='",k="text/xml",g="XPath",f="MSXML2.DOMDocument.6.0",j="HTML";
qx.Bootstrap.define(r,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(c){if(c.nodeType===9){return c.documentElement.nodeName!==j;
}else if(c.ownerDocument){return this.isXmlDocument(c.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(w,{"mshtml":function(x,y){var z=new ActiveXObject(this.DOMDOC);
z.setProperty(s,g);

if(y){var A=o;
A+=y;

if(x){A+=m+x+t;
}A+=q;
z.loadXML(A);
}return z;
},"default":function(a,b){return document.implementation.createDocument(a||v,b||v,null);
}}),fromString:qx.core.Variant.select(w,{"mshtml":function(d){var e=qx.xml.Document.create();
e.loadXML(d);
return e;
},"default":function(F){var G=new DOMParser();
return G.parseFromString(F,k);
}})},defer:function(C){if(qx.core.Variant.isSet(w,u)){var D=[f,p];
var E=[h,n];

for(var i=0,l=D.length;i<l;i++){try{new ActiveXObject(D[i]);
new ActiveXObject(E[i]);
}catch(B){continue;
}C.DOMDOC=D[i];
C.XMLHTTP=E[i];
break;
}}}});
})();
(function(){var F="textarea",E="input",D="qx.client",C="character",B="qx.bom.Selection",A="#text",z="EndToEnd",y="button",x="body";
qx.Class.define(B,{statics:{getSelectionObject:qx.core.Variant.select(D,{"mshtml":function(K){return K.selection;
},"default":function(J){return qx.dom.Node.getWindow(J).getSelection();
}}),get:qx.core.Variant.select(D,{"mshtml":function(o){var p=qx.bom.Range.get(qx.dom.Node.getDocument(o));
return p.text;
},"default":function(U){if(qx.dom.Node.isElement(U)&&(U.nodeName.toLowerCase()==E||U.nodeName.toLowerCase()==F)){return U.value.substring(U.selectionStart,U.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(U)).toString();
}return null;
}}),getLength:qx.core.Variant.select(D,{"mshtml":function(G){var I=qx.bom.Selection.get(G);
var H=qx.util.StringSplit.split(I,/\r\n/);
return I.length-(H.length-1);
},"opera":function(a){var f,d,b;

if(qx.dom.Node.isElement(a)&&(a.nodeName.toLowerCase()==E||a.nodeName.toLowerCase()==F)){var e=a.selectionStart;
var c=a.selectionEnd;
f=a.value.substring(e,c);
d=c-e;
}else{f=qx.bom.Selection.get(a);
d=f.length;
}b=qx.util.StringSplit.split(f,/\r\n/);
return d-(b.length-1);
},"default":function(h){if(qx.dom.Node.isElement(h)&&(h.nodeName.toLowerCase()==E||h.nodeName.toLowerCase()==F)){return h.selectionEnd-h.selectionStart;
}else{return qx.bom.Selection.get(h).length;
}return null;
}}),set:qx.core.Variant.select(D,{"mshtml":function(P,Q,R){var S;
if(qx.dom.Node.isDocument(P)){P=P.body;
}
if(qx.dom.Node.isElement(P)||qx.dom.Node.isText(P)){switch(P.nodeName.toLowerCase()){case E:case F:case y:if(R===undefined){R=P.value.length;
}
if(Q>=0&&Q<=P.value.length&&R>=0&&R<=P.value.length){S=qx.bom.Range.get(P);
S.collapse(true);
S.moveStart(C,Q);
S.moveEnd(C,R);
S.select();
return true;
}break;
case A:if(R===undefined){R=P.nodeValue.length;
}
if(Q>=0&&Q<=P.nodeValue.length&&R>=0&&R<=P.nodeValue.length){S=qx.bom.Range.get(qx.dom.Node.getBodyElement(P));
S.moveToElementText(P.parentNode);
S.collapse(true);
S.moveStart(C,Q);
S.moveEnd(C,R);
S.select();
return true;
}break;
default:if(R===undefined){R=P.childNodes.length-1;
}if(P.childNodes[Q]&&P.childNodes[R]){S=qx.bom.Range.get(qx.dom.Node.getBodyElement(P));
S.moveToElementText(P.childNodes[Q]);
S.collapse(true);
var T=qx.bom.Range.get(qx.dom.Node.getBodyElement(P));
T.moveToElementText(P.childNodes[R]);
S.setEndPoint(z,T);
S.select();
return true;
}}}return false;
},"default":function(q,r,s){var w=q.nodeName.toLowerCase();

if(qx.dom.Node.isElement(q)&&(w==E||w==F)){if(s===undefined){s=q.value.length;
}if(r>=0&&r<=q.value.length&&s>=0&&s<=q.value.length){q.select();
q.setSelectionRange(r,s);
return true;
}}else{var u=false;
var v=qx.dom.Node.getWindow(q).getSelection();
var t=qx.bom.Range.get(q);
if(qx.dom.Node.isText(q)){if(s===undefined){s=q.length;
}
if(r>=0&&r<q.length&&s>=0&&s<=q.length){u=true;
}}else if(qx.dom.Node.isElement(q)){if(s===undefined){s=q.childNodes.length-1;
}
if(r>=0&&q.childNodes[r]&&s>=0&&q.childNodes[s]){u=true;
}}else if(qx.dom.Node.isDocument(q)){q=q.body;

if(s===undefined){s=q.childNodes.length-1;
}
if(r>=0&&q.childNodes[r]&&s>=0&&q.childNodes[s]){u=true;
}}
if(u){if(!v.isCollapsed){v.collapseToStart();
}t.setStart(q,r);
if(qx.dom.Node.isText(q)){t.setEnd(q,s);
}else{t.setEndAfter(q.childNodes[s]);
}if(v.rangeCount>0){v.removeAllRanges();
}v.addRange(t);
return true;
}}return false;
}}),setAll:function(g){return qx.bom.Selection.set(g,0);
},clear:qx.core.Variant.select(D,{"mshtml":function(L){var M=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(L));
var N=qx.bom.Range.get(L);
var parent=N.parentElement();
var O=qx.bom.Range.get(qx.dom.Node.getDocument(L));
if(parent==O.parentElement()&&parent==L){M.empty();
}},"default":function(i){var k=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(i));
var m=i.nodeName.toLowerCase();
if(qx.dom.Node.isElement(i)&&(m==E||m==F)){i.setSelectionRange(0,0);
qx.bom.Element.blur(i);
}else if(qx.dom.Node.isDocument(i)||m==x){k.collapse(i.body?i.body:i,0);
}else{var l=qx.bom.Range.get(i);

if(!l.collapsed){var n;
var j=l.commonAncestorContainer;
if(qx.dom.Node.isElement(i)&&qx.dom.Node.isText(j)){n=j.parentNode;
}else{n=j;
}
if(n==i){k.collapse(i,0);
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
qx.Class.define(b,{statics:{__fA:{},remove:function(h){delete this.__fA[h.$$hash];
},add:function(c){var d=this.__fA;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var e=this.__fA;
var g;

for(var f in e){g=e[f];
delete e[f];
g.syncWidget();
}for(var f in e){return;
}this.__fA={};
}}});
})();
(function(){var c="qx.ui.core.queue.Visibility",b="visibility";
qx.Class.define(c,{statics:{__fB:{},__fC:{},remove:function(d){var e=d.$$hash;
delete this.__fC[e];
delete this.__fB[e];
},isVisible:function(a){return this.__fC[a.$$hash]||false;
},__fD:function(f){var h=this.__fC;
var g=f.$$hash;
var i;
if(f.isExcluded()){i=false;
}else{var parent=f.$$parent;

if(parent){i=this.__fD(parent);
}else{i=f.isRootWidget();
}}return h[g]=i;
},add:function(j){var k=this.__fB;

if(k[j.$$hash]){return;
}k[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var l=this.__fB;
var o=this.__fC;
for(var m in l){if(o[m]!=null){l[m].addChildrenToQueue(l);
}}var n={};

for(var m in l){n[m]=o[m];
o[m]=null;
}for(var m in l){if(o[m]==null){this.__fD(l[m]);
}if(o[m]&&o[m]!=n[m]){l[m].checkAppearanceNeeds();
}}this.__fB={};
}}});
})();
(function(){var f="appearance",e="qx.ui.core.queue.Appearance";
qx.Class.define(e,{statics:{__fE:{},remove:function(g){delete this.__fE[g.$$hash];
},add:function(i){var j=this.__fE;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(f);
},has:function(h){return !!this.__fE[h.$$hash];
},flush:function(){var d=qx.ui.core.queue.Visibility;
var a=this.__fE;
var c;

for(var b in a){c=a[b];
delete a[b];
if(d.isVisible(c)){c.syncAppearance();
}else{c.$$stateChanges=true;
}}}}});
})();
(function(){var j="qx.ui.core.queue.Layout",h="layout";
qx.Class.define(j,{statics:{__fF:{},remove:function(k){delete this.__fF[k.$$hash];
},add:function(g){this.__fF[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(h);
},flush:function(){var l=this.__fI();
for(var i=l.length-1;i>=0;i--){var m=l[i];
if(m.hasValidLayout()){continue;
}if(m.isRootWidget()&&!m.hasUserBounds()){var o=m.getSizeHint();
m.renderLayout(0,0,o.width,o.height);
}else{var n=m.getBounds();
m.renderLayout(n.left,n.top,n.width,n.height);
}}},getNestingLevel:function(x){var y=this.__fH;
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
},__fG:function(){var f=qx.ui.core.queue.Visibility;
this.__fH={};
var e=[];
var d=this.__fF;
var a,c;

for(var b in d){a=d[b];

if(f.isVisible(a)){c=this.getNestingLevel(a);
if(!e[c]){e[c]={};
}e[c][b]=a;
delete d[b];
}}return e;
},__fI:function(){var s=[];
var u=this.__fG();

for(var r=u.length-1;r>=0;r--){if(!u[r]){continue;
}
for(var q in u[r]){var p=u[r][q];
if(r==0||p.isRootWidget()||p.hasUserBounds()){s.push(p);
p.invalidateLayoutCache();
continue;
}var w=p.getSizeHint(false);

if(w){p.invalidateLayoutCache();
var t=p.getSizeHint();
var v=(!p.getBounds()||w.minWidth!==t.minWidth||w.width!==t.width||w.maxWidth!==t.maxWidth||w.minHeight!==t.minHeight||w.height!==t.height||w.maxHeight!==t.maxHeight);
}else{v=true;
}
if(v){var parent=p.getLayoutParent();

if(!u[r-1]){u[r-1]={};
}u[r-1][parent.$$hash]=parent;
}else{s.push(p);
}}}return s;
}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__fJ:{},add:function(e){var f=this.__fJ;

if(f[e.$$hash]){return;
}f[e.$$hash]=e;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__fJ;

for(var d in c){c[d].dispose();
delete c[d];
}for(var d in c){return;
}this.__fJ={};
}}});
})();
(function(){var e="qx.ui.core.MChildrenHandling";
qx.Mixin.define(e,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(h){return this._indexOf(h);
},add:function(f,g){this._add(f,g);
},addAt:function(i,j,k){this._addAt(i,j,k);
},addBefore:function(b,c,d){this._addBefore(b,c,d);
},addAfter:function(l,m,n){this._addAfter(l,m,n);
},remove:function(p){this._remove(p);
},removeAt:function(o){this._removeAt(o);
},removeAll:function(){return this._removeAll();
}},statics:{remap:function(a){a.getChildren=a._getChildren;
a.hasChildren=a._hasChildren;
a.indexOf=a._indexOf;
a.add=a._add;
a.addAt=a._addAt;
a.addBefore=a._addBefore;
a.addAfter=a._addAfter;
a.remove=a._remove;
a.removeAt=a._removeAt;
a.removeAll=a._removeAll;
}}});
})();
(function(){var F="Integer",E="_applyDimension",D="Boolean",C="_applyStretching",B="_applyMargin",A="shorthand",z="_applyAlign",y="qx.debug",x="on",w="allowShrinkY",bi="Wrong 'width' argument. ",bh="Something went wrong with the layout of ",bg="bottom",bf="Wrong 'left' argument. ",be="__fQ",bd="baseline",bc="marginBottom",bb="qx.ui.core.LayoutItem",ba="center",Y="marginTop",M="$$subparent",N="!",K="__fP",L="allowGrowX",I="middle",J="marginLeft",G="__fL",H="__fN",O="allowShrinkX",P="$$parent",S="top",R="right",U="marginRight",T="abstract",W="Wrong 'top' argument. ",V="Wrong 'height' argument. ",Q="allowGrowY",X="left";
qx.Class.define(bb,{type:T,extend:qx.core.Object,properties:{minWidth:{check:F,nullable:true,apply:E,init:null,themeable:true},width:{check:F,nullable:true,apply:E,init:null,themeable:true},maxWidth:{check:F,nullable:true,apply:E,init:null,themeable:true},minHeight:{check:F,nullable:true,apply:E,init:null,themeable:true},height:{check:F,nullable:true,apply:E,init:null,themeable:true},maxHeight:{check:F,nullable:true,apply:E,init:null,themeable:true},allowGrowX:{check:D,apply:C,init:true,themeable:true},allowShrinkX:{check:D,apply:C,init:true,themeable:true},allowGrowY:{check:D,apply:C,init:true,themeable:true},allowShrinkY:{check:D,apply:C,init:true,themeable:true},allowStretchX:{group:[L,O],mode:A,themeable:true},allowStretchY:{group:[Q,w],mode:A,themeable:true},marginTop:{check:F,init:0,apply:B,themeable:true},marginRight:{check:F,init:0,apply:B,themeable:true},marginBottom:{check:F,init:0,apply:B,themeable:true},marginLeft:{check:F,init:0,apply:B,themeable:true},margin:{group:[Y,U,bc,J],mode:A,themeable:true},alignX:{check:[X,ba,R],nullable:true,apply:z,themeable:true},alignY:{check:[S,I,bg,bd],nullable:true,apply:z,themeable:true}},members:{__fK:null,__fL:null,__fM:null,__fN:null,__fO:null,__fP:null,__fQ:null,getBounds:function(){return this.__fP||this.__fL||null;
},clearSeparators:function(){},renderSeparator:function(bj,bk){},renderLayout:function(c,top,d,e){if(qx.core.Variant.isSet(y,x)){var f=bh+this.toString()+N;
this.assertInteger(c,bf+f);
this.assertInteger(top,W+f);
this.assertInteger(d,bi+f);
this.assertInteger(e,V+f);
}var g=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var g=this._getHeightForWidth(d);
}
if(g!=null&&g!==this.__fK){this.__fK=g;
qx.ui.core.queue.Layout.add(this);
return null;
}var i=this.__fL;

if(!i){i=this.__fL={};
}var h={};

if(c!==i.left||top!==i.top){h.position=true;
i.left=c;
i.top=top;
}
if(d!==i.width||e!==i.height){h.size=true;
i.width=d;
i.height=e;
}if(this.__fM){h.local=true;
delete this.__fM;
}
if(this.__fO){h.margin=true;
delete this.__fO;
}return h;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fM;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fM=true;
this.__fN=null;
},getSizeHint:function(r){var s=this.__fN;

if(s){return s;
}
if(r===false){return null;
}s=this.__fN=this._computeSizeHint();
if(this.__fK&&this.getHeight()==null){s.height=this.__fK;
}if(!this.getAllowShrinkX()){s.minWidth=s.width;
}else if(s.minWidth>s.width){s.width=s.minWidth;
}
if(!this.getAllowShrinkY()){s.minHeight=s.height;
}else if(s.minHeight>s.height){s.height=s.minHeight;
}if(!this.getAllowGrowX()){s.maxWidth=s.width;
}else if(s.width>s.maxWidth){s.width=s.maxWidth;
}
if(!this.getAllowGrowY()){s.maxHeight=s.height;
}else if(s.height>s.maxHeight){s.height=s.maxHeight;
}return s;
},_computeSizeHint:function(){var bs=this.getMinWidth()||0;
var bp=this.getMinHeight()||0;
var bt=this.getWidth()||bs;
var br=this.getHeight()||bp;
var bo=this.getMaxWidth()||Infinity;
var bq=this.getMaxHeight()||Infinity;
return {minWidth:bs,width:bt,maxWidth:bo,minHeight:bp,height:br,maxHeight:bq};
},_hasHeightForWidth:function(){var v=this._getLayout();

if(v){return v.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(a){var b=this._getLayout();

if(b&&b.hasHeightForWidth()){return b.getHeightForWidth(a);
}return null;
},_applyMargin:function(){this.__fO=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__fP;
},setUserBounds:function(j,top,k,l){this.__fP={left:j,top:top,width:k,height:l};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__fP;
qx.ui.core.queue.Layout.add(this);
},__fR:{},setLayoutProperties:function(m){if(m==null){return;
}var n=this.__fQ;

if(!n){n=this.__fQ={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(m);
}for(var o in m){if(m[o]==null){delete n[o];
}else{n[o]=m[o];
}}},getLayoutProperties:function(){return this.__fQ||this.__fR;
},clearLayoutProperties:function(){delete this.__fQ;
},updateLayoutProperties:function(bl){var bm=this._getLayout();

if(bm){if(qx.core.Variant.isSet(y,x)){if(bl){for(var bn in bl){if(bl[bn]!==null){bm.verifyLayoutProperty(this,bn,bl[bn]);
}}}}bm.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var t=arguments.callee.base.call(this);
var u=this.__fQ;

if(u){t.__fQ=qx.lang.Object.clone(u);
}return t;
},serialize:function(){var p=arguments.callee.base.call(this);
var q=this.__fQ;

if(q){p.layoutProperties=qx.lang.Object.clone(q);
}return p;
}},destruct:function(){this._disposeFields(P,M,be,G,K,H);
}});
})();
(function(){var ds="on",dr="px",dq="qx.debug",dp="qx.event.type.Mouse",dn="Boolean",dm="qx.event.type.Drag",dl="visible",dk="object",dj="qx.event.type.Focus",di="Integer",ct="excluded",cs="number",cr="_applyPadding",cq="qx.event.type.Event",cp="zIndex",co="hidden",cn="qxType",cm="tabIndex",cl="contextmenu",ck="absolute",dz="backgroundColor",dA="focused",dx="hovered",dy="qx.event.type.KeySequence",dv="qx.client",dw="height",dt="div",du="qx.event.type.Data",dB="disabled",dC="move",cR="dragstart",cQ="dragchange",cT="position",cS="dragend",cV="resize",cU="Decorator",cX="width",cW="$$widget",cP="mshtml",cO="none",bb="default",bc="Color",bd="top",be="left",bf="String",bg="drag",bh="Use public 'getChildControl' instead!",bi="content",bj="_applyBackgroundColor",bk="_applyFocusable",dG="changeShadow",dF="qx.event.type.KeyInput",dE="normal",dD="__fT",dK="Font",dJ="__ge",dI="_applyShadow",dH="Invalid layout data: ",dM="Could not add widget to itself: ",dL="_applyEnabled",bJ="_applySelectable",bK="_applyKeepActive",bH="__gj",bI="Number",bN="_applyVisibility",bO="The 'after' widget is not a child of this widget!",bL="repeat",bM="qxDraggable",bF="paddingLeft",bG="_applyDroppable",bs="Wrong 'left' argument. ",br="userSelect",bu="decorator",bt="protector",bo="#",bn="__gm",bq="_applyCursor",bp="changeVisibility",bm="_applyDraggable",bl="Remove Error: ",bT="changeTextColor",bU="changeContextMenu",bV="paddingTop",bW="opacity",bP="__fW",bQ="hideFocus",bR="outline",bS="The 'before' widget is not a child of this widget!",bX="_applyAppearance",bY="overflowX",bC="_applyOpacity",bB="__fX",bA="url(",bz=")",by="qx.ui.core.Widget",bx="_applyFont",bw="cursor",bv="qxDroppable",bE="changeZIndex",bD="overflowY",ca="changeEnabled",cb="__fS",cc="changeFont",cd="off",ce="_applyDecorator",cf="_applyZIndex",cg="_applyTextColor",ch="qx.ui.menu.Menu",ci="Invalid widget to add: ",cj="Use public 'hasChildControl' instead!",cx=" returned an invalid size hint!",cw="The layout of the widget",cv="__fV",cu=" is not a child of this widget!",cB="true",cA="widget",cz="Wrong 'top' argument. ",cy="qxClass",cD="changeDecorator",cC="_applyTabIndex",cK="changeAppearance",cL="shorthand",cI="/",cJ="",cG="_applyContextMenu",cH="container",cE="qxSelectable",cF="__gc",cM="paddingBottom",cN="qx.ui.tooltip.ToolTip",db="qxKeepActive",da="_applyKeepFocus",dd="webkit",dc="paddingRight",df="changeBackgroundColor",de="qxKeepFocus",dh="__ga",dg="undefined",cY="qx/static/blank.gif";
qx.Class.define(by,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__fS=this._createContainerElement();
this.__fT=this.__gd();
this.__fS.add(this.__fT);
this.initFocusable();
this.initSelectable();
},events:{appear:cq,disappear:cq,resize:du,move:du,mousemove:dp,mouseover:dp,mouseout:dp,mousedown:dp,mouseup:dp,click:dp,dblclick:dp,contextmenu:dp,mousewheel:dp,keyup:dy,keydown:dy,keypress:dy,keyinput:dF,focus:dj,blur:dj,focusin:dj,focusout:dj,activate:dj,deactivate:dj,capture:cq,losecapture:cq,drop:dm,dragleave:dm,dragover:dm,drag:dm,dragstart:dm,dragend:dm,dragchange:dm,droprequest:dm},properties:{paddingTop:{check:di,init:0,apply:cr,themeable:true},paddingRight:{check:di,init:0,apply:cr,themeable:true},paddingBottom:{check:di,init:0,apply:cr,themeable:true},paddingLeft:{check:di,init:0,apply:cr,themeable:true},padding:{group:[bV,dc,cM,bF],mode:cL,themeable:true},zIndex:{nullable:true,init:null,apply:cf,event:bE,check:di,themeable:true},decorator:{nullable:true,init:null,apply:ce,event:cD,check:cU,themeable:true},shadow:{nullable:true,init:null,apply:dI,event:dG,check:cU,themeable:true},backgroundColor:{nullable:true,check:bc,apply:bj,event:df,themeable:true},textColor:{nullable:true,check:bc,apply:cg,event:bT,themeable:true,inheritable:true},font:{nullable:true,apply:bx,check:dK,event:cc,themeable:true,inheritable:true},opacity:{check:bI,apply:bC,themeable:true,nullable:true,init:null},cursor:{check:bf,apply:bq,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:cN,nullable:true},visibility:{check:[dl,co,ct],init:dl,apply:bN,event:bp},enabled:{init:true,check:dn,inheritable:true,apply:dL,event:ca},anonymous:{init:false,check:dn},tabIndex:{check:di,nullable:true,apply:cC},focusable:{check:dn,init:false,apply:bk},keepFocus:{check:dn,init:false,apply:da},keepActive:{check:dn,init:false,apply:bK},draggable:{check:dn,init:false,apply:bm},droppable:{check:dn,init:false,apply:bG},selectable:{check:dn,init:false,apply:bJ},contextMenu:{check:ch,apply:cG,nullable:true,event:bU},appearance:{check:bf,init:cA,apply:bX,event:cK}},statics:{DEBUG:false,getWidgetByElement:function(d){try{while(d){var f=d.$$widget;
if(f!=null){return qx.core.ObjectRegistry.fromHashCode(f);
}d=d.parentNode;
}}catch(J){}return null;
},contains:function(parent,M){while(M){if(parent==M){return true;
}M=M.getLayoutParent();
}return false;
},__fU:{}},members:{__fS:null,__fT:null,__fV:null,__fW:null,__fX:null,__fY:null,__ga:null,_getLayout:function(){return this.__ga;
},_setLayout:function(V){if(qx.core.Variant.isSet(dq,ds)){if(V){this.assertInstance(V,qx.ui.layout.Abstract);
}}
if(this.__ga){this.__ga.connectToWidget(null);
}
if(V){V.connectToWidget(this);
}this.__ga=V;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}
if(this.$$parent){this.$$parent.getContentElement().remove(this.__fS);
}this.$$parent=parent||null;

if(parent){this.$$parent.getContentElement().add(this.__fS);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},__gb:null,renderLayout:function(dN,top,dO,dP){var eb=arguments.callee.base.call(this,dN,top,dO,dP);
if(!eb){return;
}var dR=this.__fS;
var content=this.__fT;
var dX=eb.size||this.__gb;
var ec=dr;
if(eb.position){dR.setStyle(be,dN+ec);
dR.setStyle(bd,top+ec);
}if(eb.size){dR.setStyle(cX,dO+ec);
dR.setStyle(dw,dP+ec);
}
if(dX||eb.local||eb.margin){var dQ=this.getInsets();
var innerWidth=dO-dQ.left-dQ.right;
var innerHeight=dP-dQ.top-dQ.bottom;
}
if(this.__gb){content.setStyle(be,dQ.left+ec);
content.setStyle(bd,dQ.top+ec);
}
if(dX){content.setStyle(cX,innerWidth+ec);
content.setStyle(dw,innerHeight+ec);
}
if(eb.size){var ea=this.__fX;

if(ea){ea.setStyles({width:dO+dr,height:dP+dr});
}}
if(eb.size||this.__gb){var dU=qx.theme.manager.Decoration.getInstance();
var ed=this.getDecorator();

if(ed){var dV=this.__fV;
var dW=dU.resolve(ed);
dW.resize(dV.getDomElement(),dO,dP);
}}
if(eb.size){var dY=this.getShadow();

if(dY){var dV=this.__fW;
var dW=dU.resolve(dY);
var dQ=dW.getInsets();
var dT=dO+dQ.left+dQ.right;
var dS=dP+dQ.top+dQ.bottom;
dW.resize(dV.getDomElement(),dT,dS);
}}
if(dX||eb.local||eb.margin){if(this.__ga&&this.hasLayoutChildren()){this.__ga.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(eb.position&&this.hasListener(dC)){this.fireDataEvent(dC,this.getBounds());
}
if(eb.size&&this.hasListener(cV)){this.fireDataEvent(cV,this.getBounds());
}delete this.__gb;
},__gc:null,clearSeparators:function(){var go=this.__gc;

if(!go){return;
}var gp=qx.ui.core.Widget.__fU;
var content=this.__fT;
var gn,gm;

for(var i=0,l=go.length;i<l;i++){gm=go[i];
gn=gm.$$separator;
if(!gp[gn]){gp[gn]=[gm];
}else{gp[gn].push(gm);
}content.remove(gm);
}go.length=0;
},renderSeparator:function(fQ,fR){var fY=qx.ui.core.Widget.__fU;
var fW=qx.theme.manager.Decoration.getInstance();

if(typeof fQ==dk){var fX=fQ.toHashCode();
var fT=fQ;
}else{var fX=fQ;
var fT=fW.resolve(fQ);
}var fU=fY[fQ];

if(fU&&fU.length>0){var fV=fU.pop();
}else{var fV=this.__gi(fT);
}this.__fT.add(fV);
fT.resize(fV.getDomElement(),fR.width,fR.height);
var fS=fV.getDomElement().style;
fS.left=fR.left+dr;
fS.top=fR.top+dr;
if(!this.__gc){this.__gc=[fV];
}else{this.__gc.push(fV);
}fV.$$separator=fX;
},_computeSizeHint:function(){var fI=this.getWidth();
var fH=this.getMinWidth();
var fD=this.getMaxWidth();
var fG=this.getHeight();
var fE=this.getMinHeight();
var fF=this.getMaxHeight();
var fJ=this._getContentHint();
var fC=this.getInsets();
var fL=fC.left+fC.right;
var fK=fC.top+fC.bottom;

if(fI==null){fI=fJ.width+fL;
}
if(fG==null){fG=fJ.height+fK;
}
if(fH==null){fH=fL;

if(fJ.minWidth!=null){fH+=fJ.minWidth;
}}
if(fE==null){fE=fK;

if(fJ.minHeight!=null){fE+=fJ.minHeight;
}}
if(fD==null){if(fJ.maxWidth==null){fD=Infinity;
}else{fD=fJ.maxWidth+fL;
}}
if(fF==null){if(fJ.maxHeight==null){fF=Infinity;
}else{fF=fJ.maxHeight+fK;
}}return {width:fI,minWidth:fH,maxWidth:fD,height:fG,minHeight:fE,maxHeight:fF};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__ga){this.__ga.invalidateLayoutCache();
}},_getContentHint:function(){var h=this.__ga;

if(h){if(this.hasLayoutChildren()){var j=h.getSizeHint();

if(qx.core.Variant.isSet(dq,ds)){var g=cw+this.toString()+cx;
this.assertInteger(j.width,bs+g);
this.assertInteger(j.height,cz+g);
}return j;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(hu){var hy=this.getInsets();
var hB=hy.left+hy.right;
var hA=hy.top+hy.bottom;
var hz=hu-hB;
var hw=this._getLayout();

if(hw&&hw.hasHeightForWidth()){var hv=hw.getHeightForWidth(hu);
}else{hv=this._getContentHeightForWidth(hz);
}var hx=hv+hA;
return hx;
},_getContentHeightForWidth:function(v){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var eY=this.getPaddingRight();
var fa=this.getPaddingBottom();
var ff=this.getPaddingLeft();
var fe=this.getDecorator();

if(fe){var fd=qx.theme.manager.Decoration.getInstance();
var fc=fd.resolve(fe);
var fb=fc.getInsets();

if(qx.core.Variant.isSet(dq,ds)){if(typeof fb.top!=cs){throw new Error("Invalid top decorator inset detected: "+fb.top);
}
if(typeof fb.right!=cs){throw new Error("Invalid right decorator inset detected: "+fb.right);
}
if(typeof fb.bottom!=cs){throw new Error("Invalid bottom decorator inset detected: "+fb.bottom);
}
if(typeof fb.left!=cs){throw new Error("Invalid left decorator inset detected: "+fb.left);
}}top+=fb.top;
eY+=fb.right;
fa+=fb.bottom;
ff+=fb.left;
}return {"top":top,"right":eY,"bottom":fa,"left":ff};
},getInnerSize:function(){var D=this.getBounds();

if(!D){return null;
}var C=this.getInsets();
return {width:D.width-C.left-C.right,height:D.height-C.top-C.bottom};
},show:function(){this.setVisibility(dl);
},hide:function(){this.setVisibility(co);
},exclude:function(){this.setVisibility(ct);
},isVisible:function(){return this.getVisibility()===dl;
},isHidden:function(){return this.getVisibility()!==dl;
},isExcluded:function(){return this.getVisibility()===ct;
},_createContainerElement:function(){var eH=new qx.html.Element(dt);

if(qx.core.Variant.isSet(dq,ds)){eH.setAttribute(cn,cH);
}eH.setStyle(cT,ck);
eH.setStyle(cp,0);
eH.setAttribute(cW,this.toHashCode());
if(qx.core.Variant.isSet(dq,ds)){eH.setAttribute(cy,this.classname);
}return eH;
},__gd:function(){var ev=this._createContentElement();

if(qx.core.Variant.isSet(dq,ds)){ev.setAttribute(cn,bi);
}ev.setStyle(cT,ck);
ev.setStyle(cp,10);
return ev;
},_createContentElement:function(){var eI=new qx.html.Element(dt);
eI.setStyle(bY,co);
eI.setStyle(bD,co);
return eI;
},getContainerElement:function(){return this.__fS;
},getContentElement:function(){return this.__fT;
},getDecoratorElement:function(){return this.__fV;
},__ge:null,getLayoutChildren:function(){var b=this.__ge;

if(!b){return this.__gf;
}var c;

for(var i=0,l=b.length;i<l;i++){var a=b[i];

if(a.hasUserBounds()||a.isExcluded()){if(c==null){c=b.concat();
}qx.lang.Array.remove(c,a);
}}return c||b;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var R=this.__ga;

if(R){R.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var ft=this.__ge;

if(!ft){return false;
}var fu;

for(var i=0,l=ft.length;i<l;i++){fu=ft[i];

if(!fu.hasUserBounds()&&!fu.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__gf:[],_getChildren:function(){return this.__ge||this.__gf;
},_indexOf:function(gD){var gE=this.__ge;

if(!gE){return -1;
}return gE.indexOf(gD);
},_hasChildren:function(){var hN=this.__ge;
return hN!=null&&(!!hN[0]);
},addChildrenToQueue:function(gv){var gw=this.__ge;

if(!gw){return;
}var gx;

for(var i=0,l=gw.length;i<l;i++){gx=gw[i];
gv[gx.$$hash]=gx;
gx.addChildrenToQueue(gv);
}},_add:function(hK,hL){if(hK.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,hK);
}
if(this.__ge){this.__ge.push(hK);
}else{this.__ge=[hK];
}this.__gg(hK,hL);
},_addAt:function(N,O,P){if(!this.__ge){this.__ge=[];
}if(N.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,N);
}var Q=this.__ge[O];

if(Q===N){return N.setLayoutProperties(P);
}
if(Q){qx.lang.Array.insertBefore(this.__ge,N,Q);
}else{this.__ge.push(N);
}this.__gg(N,P);
},_addBefore:function(hc,hd,he){if(qx.core.Variant.isSet(dq,ds)){this.assertInArray(hd,this._getChildren(),bS);
}
if(hc==hd){return;
}
if(!this.__ge){this.__ge=[];
}if(hc.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,hc);
}qx.lang.Array.insertBefore(this.__ge,hc,hd);
this.__gg(hc,he);
},_addAfter:function(gs,gt,gu){if(qx.core.Variant.isSet(dq,ds)){this.assertInArray(gt,this._getChildren(),bO);
}
if(gs==gt){return;
}
if(!this.__ge){this.__ge=[];
}if(gs.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,gs);
}qx.lang.Array.insertAfter(this.__ge,gs,gt);
this.__gg(gs,gu);
},_remove:function(S){if(!this.__ge){return;
}qx.lang.Array.remove(this.__ge,S);
this.__gh(S);
},_removeAt:function(W){if(!this.__ge){throw new Error("This widget has no children!");
}var X=this.__ge[W];
qx.lang.Array.removeAt(this.__ge,W);
this.__gh(X);
return X;
},_removeAll:function(){if(!this.__ge){return;
}var r=this.__ge.concat();
this.__ge.length=0;

for(var i=r.length-1;i>=0;i--){this.__gh(r[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__gg:function(T,U){if(qx.core.Variant.isSet(dq,ds)){this.assertInstance(T,qx.ui.core.LayoutItem,ci+T);
this.assertNotIdentical(T,this,dM+T);

if(U!=null){this.assertType(U,dk,dH+U);
}}var parent=T.getLayoutParent();

if(parent&&parent!=this){parent._remove(T);
}T.setLayoutParent(this);
if(U){T.setLayoutProperties(U);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(T);
}},__gh:function(fs){if(qx.core.Variant.isSet(dq,ds)){this.assertNotUndefined(fs);
this.assertNotIdentical(fs.getLayoutParent,this,bl+fs+cu);
}fs.setLayoutParent(null);
if(this.__ga){this.__ga.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(fs);
}},capture:function(){this.__fS.capture();
},releaseCapture:function(){this.__fS.releaseCapture();
},_applyPadding:function(eF,eG,name){this.__gb=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__fX){return;
}var fA=this.__fX=new qx.html.Element;

if(qx.core.Variant.isSet(dq,ds)){fA.setAttribute(cn,bt);
}fA.setStyles({position:ck,top:0,left:0,zIndex:7});
var fB=this.getBounds();

if(fB){this.__fX.setStyles({width:fB.width+dr,height:fB.height+dr});
}if(qx.core.Variant.isSet(dv,cP)){fA.setStyles({backgroundImage:bA+qx.util.ResourceManager.toUri(cY)+bz,backgroundRepeat:bL});
}this.__fS.add(fA);
},__gi:function(eD){var eE=new qx.html.Element;
eE.setStyles({position:ck,top:0,left:0});

if(qx.core.Variant.isSet(dq,ds)){eE.setAttribute(cn,bu);
}eE.useMarkup(eD.getMarkup());
return eE;
},_applyDecorator:function(hh,hi){var hq=qx.ui.core.Widget.__fU;
var hn=qx.theme.manager.Decoration.getInstance();
var hj=this.__fS;
var hl=this.__fV;
if(!this.__fX){this._createProtectorElement();
}var ho;

if(hi){if(typeof hi===dk){ho=hi.toHashCode();
}else{ho=hi;
hi=hn.resolve(hi);
}}var hp;

if(hh){if(typeof hh===dk){hp=hh.toHashCode();

if(qx.core.Variant.isSet(dq,ds)){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+hh);
}}}else{hp=hh;
hh=hn.resolve(hh);
}}if(hi){if(!hq[ho]){hq[ho]=[];
}hj.remove(hl);
hq[ho].push(hl);
}if(hh){if(hq[hp]&&hq[hp].length>0){hl=hq[hp].pop();
}else{hl=this.__gi(hh);
hl.setStyle(cp,5);
}var hk=this.getBackgroundColor();
hh.tint(hl.getDomElement(),hk);
hj.add(hl);
this.__fV=hl;
}else{delete this.__fV;
this._applyBackgroundColor(this.getBackgroundColor());
}if(hh&&!hi&&hk){this.getContainerElement().setStyle(dz,null);
}if(qx.ui.decoration.Util.insetsModified(hi,hh)){this.__gb=true;
qx.ui.core.queue.Layout.add(this);
}else if(hh){var hm=this.getBounds();

if(hm){hn.resolve(hh).resize(hl.getDomElement(),hm.width,hm.height);
this.__fX.setStyles({width:hm.width+dr,height:hm.height+dr});
}}},_applyShadow:function(ee,ef){var eq=qx.ui.core.Widget.__fU;
var en=qx.theme.manager.Decoration.getInstance();
var eh=this.__fS;
var eo;

if(ef){if(typeof ef===dk){eo=ef.toHashCode();
}else{eo=ef;
ef=en.resolve(ef);
}}var ep;

if(ee){if(typeof ee===dk){ep=ee.toHashCode();
}else{ep=ee;
ee=en.resolve(ee);
}}if(ef){if(!eq[eo]){eq[eo]=[];
}eh.remove(this.__fW);
eq[eo].push(this.__fW);
}if(ee){var ej;

if(eq[ep]&&eq[ep].length>0){ej=eq[ep].pop();
}else{ej=this.__gi(ee);
}eh.add(ej);
this.__fW=ej;
var em=ee.getInsets();
ej.setStyles({left:(-em.left)+dr,top:(-em.top)+dr});
var ek=this.getBounds();

if(ek){var ei=ek.width+em.left+em.right;
var eg=ek.height+em.top+em.bottom;
ee.resize(ej.getDomElement(),ei,eg);
}}else{delete this.__fW;
}},_applyTextColor:function(eM,eN){},_applyZIndex:function(et,eu){this.__fS.setStyle(cp,et==null?0:et);
},_applyVisibility:function(fM,fN){if(fM===dl){this.__fS.show();
}else{this.__fS.hide();
}var parent=this.$$parent;

if(parent&&(fN==null||fM==null||fN===ct||fM===ct)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(hC,hD){this.__fS.setStyle(bW,hC==1?null:hC);
},_applyCursor:function(fq,fr){if(fq==null&&!this.isSelectable()){fq=bb;
}this.__fS.setStyle(bw,fq);
},_applyBackgroundColor:function(eO,eP){var eW=this.getDecorator();
var eV=this.getShadow();
var eS=this.getBackgroundColor();
var eR=this.__fS;

if(eW||eV){var eT=this.__fV;

if(eT){var eU=qx.theme.manager.Decoration.getInstance().resolve(eW);
eU.tint(this.__fV.getDomElement(),eS);
}eR.setStyle(dz,null);
}else{var eQ=qx.theme.manager.Color.getInstance().resolve(eS);
eR.setStyle(dz,eQ);
}},_applyFont:function(fO,fP){},__gj:null,$$stateChanges:null,_forwardStates:null,hasState:function(fo){var fp=this.__gj;
return fp&&fp[fo];
},addState:function(gF){var gG=this.__gj;

if(!gG){gG=this.__gj={};
}
if(gG[gF]){return;
}this.__gj[gF]=true;
if(gF===dx){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gJ=this.__gm;

if(forward&&forward[gF]&&gJ){var gH;

for(var gI in gJ){gH=gJ[gI];

if(gH instanceof qx.ui.core.Widget){gJ[gI].addState(gF);
}}}},removeState:function(fv){var fw=this.__gj;

if(!fw||!fw[fv]){return;
}delete this.__gj[fv];
if(fv===dx){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fz=this.__gm;

if(forward&&forward[fv]&&fz){for(var fy in fz){var fx=fz[fy];

if(fx instanceof qx.ui.core.Widget){fx.removeState(fv);
}}}},replaceState:function(w,x){var y=this.__gj;

if(!y){y=this.__gj={};
}
if(!y[x]){y[x]=true;
}
if(y[w]){delete y[w];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var B=this.__gm;

if(forward&&forward[x]&&B){for(var A in B){var z=B[A];

if(z instanceof qx.ui.core.Widget){z.replaceState(w,x);
}}}},__gk:null,__gl:null,syncAppearance:function(){var gS=this.__gj;
var gR=this.__gk;
var gT=qx.theme.manager.Appearance.getInstance();
var gP=qx.core.Property.$$method.setThemed;
var gX=qx.core.Property.$$method.resetThemed;
if(this.__gl){delete this.__gl;
if(gR){var gO=gT.styleFrom(gR,gS);
if(gO){gR=null;
}}}if(!gR){var gQ=this;
var gW=[];

do{gW.push(gQ.$$subcontrol||gQ.getAppearance());
}while(gQ=gQ.$$subparent);
gR=this.__gk=gW.reverse().join(cI).replace(/#[0-9]+/g,cJ);
}var gU=gT.styleFrom(gR,gS);

if(gU){if(gO){for(var gV in gO){if(gU[gV]===undefined){this[gX[gV]]();
}}}if(qx.core.Variant.isSet(dq,ds)){for(var gV in gU){if(!this[gP[gV]]){throw new Error(this.classname+' has no themeable property "'+gV+'" while styling '+gR);
}}}if(qx.core.Variant.isSet(dq,ds)){for(var gV in gU){if(gU[gV]===dg){this.warn("Old undefined value. Please use the identifier undefined instead of the string value.");
gU[gV]=undefined;
}}}
for(var gV in gU){gU[gV]===undefined?this[gX[gV]]():this[gP[gV]](gU[gV]);
}}else if(gO){for(var gV in gO){this[gX[gV]]();
}}},_applyAppearance:function(gi,gj){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__fY){qx.ui.core.queue.Appearance.add(this);
this.__fY=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__gl=true;
qx.ui.core.queue.Appearance.add(this);
var hG=this.__gm;

if(hG){var hE;

for(var hF in hG){hE=hG[hF];

if(hE instanceof qx.ui.core.Widget){hE.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gC=this;

while(gC.getAnonymous()){gC=gC.getLayoutParent();

if(!gC){return null;
}}return gC;
},getFocusTarget:function(){var hM=this;

if(!hM.getEnabled()){return null;
}
while(hM.getAnonymous()||!hM.getFocusable()){hM=hM.getLayoutParent();

if(!hM||!hM.getEnabled()){return null;
}}return hM;
},getFocusElement:function(){return this.__fS;
},isTabable:function(){return this.getContainerElement().getDomElement()&&this.isFocusable();
},_applyFocusable:function(fk,fl){var fm=this.getFocusElement();
if(fk){var fn=this.getTabIndex();

if(fn==null){fn=1;
}fm.setAttribute(cm,fn);
if(qx.core.Variant.isSet(dv,cP)){fm.setAttribute(bQ,cB);
}else{fm.setStyle(bR,cO);
}}else{if(fm.isNativelyFocusable()){fm.setAttribute(cm,-1);
}else if(fl){fm.setAttribute(cm,null);
}}},_applyKeepFocus:function(gg){var gh=this.getFocusElement();
gh.setAttribute(de,gg?ds:null);
},_applyKeepActive:function(eB){var eC=this.getContainerElement();
eC.setAttribute(db,eB?ds:null);
},_applyTabIndex:function(k){if(k==null){k=1;
}else if(k<1||k>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&k!=null){this.getFocusElement().setAttribute(cm,k);
}},_applySelectable:function(q){this._applyCursor(this.getCursor());
this.__fS.setAttribute(cE,q?ds:cd);
if(qx.core.Variant.isSet(dv,dd)){this.__fS.setStyle(br,q?dE:cO);
}},_applyEnabled:function(gq,gr){if(gq===false){this.addState(dB);
this.removeState(dx);
if(this.isFocusable()){this.removeState(dA);
this._applyFocusable(false,true);
}}else{this.removeState(dB);
if(this.isFocusable()){this._applyFocusable(true,false);
}}},_applyContextMenu:function(er,es){if(es){es.removeState(cl);

if(es.getOpener()==this){es.resetOpener();
}
if(!er){this.removeListener(cl,this._onContextMenuOpen);
}}
if(er){er.setOpener(this);
er.addState(cl);

if(!es){this.addListener(cl,this._onContextMenuOpen);
}}},_onContextMenuOpen:function(e){var eX=this.getContextMenu();
eX.placeToMouse(e);
eX.show();
e.preventDefault();
},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(ha,hb){qx.ui.core.DragDropCursor.getInstance();
if(ha){this.addListener(cR,this._onDragStart);
this.addListener(bg,this._onDrag);
this.addListener(cS,this._onDragEnd);
this.addListener(cQ,this._onDragChange);
}else{this.removeListener(cR,this._onDragStart);
this.removeListener(bg,this._onDrag);
this.removeListener(cS,this._onDragEnd);
this.removeListener(cQ,this._onDragChange);
}this.__fS.setAttribute(bM,ha?ds:null);
},_applyDroppable:function(gM,gN){this.__fS.setAttribute(bv,gM?ds:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bb);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var m=qx.ui.core.DragDropCursor.getInstance();
var n=e.getCurrentAction();
n?m.setAction(n):m.resetAction();
},visualizeFocus:function(){this.addState(dA);
},visualizeBlur:function(){this.removeState(dA);
},scrollChildIntoView:function(fg,fh,fi,fj){this.scrollChildIntoViewX(fg,fh,fj);
this.scrollChildIntoViewY(fg,fi,fj);
},scrollChildIntoViewX:function(s,t,u){this.__fT.scrollChildIntoViewX(s.getContainerElement(),t,u);
},scrollChildIntoViewY:function(eJ,eK,eL){this.__fT.scrollChildIntoViewY(eJ.getContainerElement(),eK,eL);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.__fS.activate();
},deactivate:function(){this.__fS.deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},_hasChildControl:function(gY){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cj);
return this.hasChildControl(gY);
},hasChildControl:function(E){if(!this.__gm){return false;
}return !!this.__gm[E];
},__gm:null,_getChildControl:function(F,G){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bh);
return this.getChildControl(F,G);
},getChildControl:function(hH,hI){if(!this.__gm){if(hI){return null;
}this.__gm={};
}var hJ=this.__gm[hH];

if(hJ){return hJ;
}
if(hI===true){return null;
}return this._createChildControl(hH);
},_showChildControl:function(hf){var hg=this.getChildControl(hf);
hg.show();
return hg;
},_excludeChildControl:function(H){var I=this.getChildControl(H,true);

if(I){I.exclude();
}},_isChildControlVisible:function(gA){var gB=this.getChildControl(gA,true);

if(gB){return gB.isVisible();
}return false;
},_createChildControl:function(ga){if(!this.__gm){this.__gm={};
}else if(this.__gm[ga]){throw new Error("Child control '"+ga+"' already created!");
}var ge=ga.indexOf(bo);

if(ge==-1){var gb=this._createChildControlImpl(ga);
}else{var gb=this._createChildControlImpl(ga.substring(0,ge));
}
if(!gb){throw new Error("Unsupported control: "+ga);
}gb.$$subcontrol=ga;
gb.$$subparent=this;
var gc=this.__gj;
var forward=this._forwardStates;

if(gc&&forward&&gb instanceof qx.ui.core.Widget){for(var gd in gc){if(forward[gd]){gb.addState(gd);
}}}return this.__gm[ga]=gb;
},_createChildControlImpl:function(gf){return null;
},_disposeChildControls:function(){var ez=this.__gm;

if(!ez){return;
}var ex=qx.ui.core.Widget;

for(var ey in ez){var ew=ez[ey];

if(!ex.contains(this,ew)){ew.destroy();
}else{ew.dispose();
}}delete this.__gm;
},_findTopControl:function(){var eA=this;

while(eA){if(!eA.$$subparent){return eA;
}eA=eA.$$subparent;
}return null;
},getContainerLocation:function(gK){var gL=this.getContainerElement().getDomElement();
return gL?qx.bom.element.Location.get(gL,gK):null;
},getContentLocation:function(Y){var ba=this.getContentElement().getDomElement();
return ba?qx.bom.element.Location.get(ba,Y):null;
},setDomLeft:function(K){var L=this.getContainerElement().getDomElement();

if(L){L.style.left=K+dr;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gy){var gz=this.getContainerElement().getDomElement();

if(gz){gz.style.top=gy+dr;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(gk,top){var gl=this.getContainerElement().getDomElement();

if(gl){gl.style.left=gk+dr;
gl.style.top=top+dr;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var o=arguments.callee.base.call(this);

if(this.getChildren){var p=this.getChildren();

for(var i=0,l=p.length;i<l;i++){o.add(p[i].clone());
}}return o;
},serialize:function(){var hs=arguments.callee.base.call(this);

if(this.getChildren){var ht=this.getChildren();

if(ht.length>0){hs.children=[];

for(var i=0,l=ht.length;i<l;i++){hs.children.push(ht[i].serialize());
}}}
if(this.getLayout){var hr=this.getLayout();

if(hr){hs.layout=hr.serialize();
}}return hs;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){this.__fS.setAttribute(cW,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}this._disposeArray(dJ);
this._disposeArray(cF);
this._disposeFields(bH,bn);
this._disposeObjects(dh,cb,dD,cv,bP,bB);
}});
})();
(function(){var r="100%",q="mshtml",p="backgroundColor",o="repeat",n="opacity",m="_applyBlockerColor",l="Number",k="zIndex",j=")",h="qx.client",c="url(",g="qx.ui.core.MBlocker",f="__gq",b="_applyBlockerOpacity",a="Color",e="qx/static/blank.gif",d="absolute";
qx.Mixin.define(g,{properties:{blockerColor:{check:a,init:null,nullable:true,apply:m,themeable:true},blockerOpacity:{check:l,init:1,apply:b,themeable:true}},members:{__gn:null,__go:null,__gp:null,__gq:null,__gr:null,_applyBlockerColor:function(v,w){var x=[];
this.__gn&&x.push(this.__gn);
this.__gq&&x.push(this.__gq);

for(var i=0;i<x.length;i++){x[i].setStyle(p,qx.theme.manager.Color.getInstance().resolve(v));
}},_applyBlockerOpacity:function(s,t){var u=[];
this.__gn&&u.push(this.__gn);
this.__gq&&u.push(this.__gq);

for(var i=0;i<u.length;i++){u[i].setStyle(n,s);
}},__gs:function(){var y=new qx.html.Element().setStyles({position:d,width:r,height:r,opacity:this.getBlockerOpacity(),backgroundColor:qx.theme.manager.Color.getInstance().resolve(this.getBlockerColor())});
if(qx.core.Variant.isSet(h,q)){y.setStyles({backgroundImage:c+qx.util.ResourceManager.toUri(e)+j,backgroundRepeat:o});
}return y;
},_getBlocker:function(){if(!this.__gn){this.__gn=this.__gs();
this.getContentElement().add(this.__gn);
this.__gn.exclude();
}return this.__gn;
},block:function(){if(this.__go){return;
}this.__go=true;
this._getBlocker().include();
this.__gp=this.getAnonymous();
this.setAnonymous(true);
},isBlocked:function(){return !!this.__go;
},unblock:function(){if(!this.__go){return;
}this.__go=false;
this.setAnonymous(this.__gp);
this._getBlocker().exclude();
},_getContentBlocker:function(){if(!this.__gq){this.__gq=this.__gs();
this.getContentElement().add(this.__gq);
this.__gq.exclude();
}return this.__gq;
},blockContent:function(z){var A=this._getContentBlocker();
A.setStyle(k,z);

if(this.__gr){return;
}this.__gr=true;
A.include();
},isContentBlocked:function(){return !!this.__gr;
},unblockContent:function(){if(!this.__gr){return;
}this.__gr=false;
this._getContentBlocker().exclude();
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var k="qx.ui.window.Window",j="changeModal",i="changeVisibility",h="changeActive",g="_applyActiveWindow",f="__gu",d="__gt",c="qx.ui.window.MDesktop";
qx.Mixin.define(c,{properties:{activeWindow:{check:k,apply:g}},members:{__gt:null,__gu:null,getWindowManager:function(){if(!this.__gu){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__gu;
},supportsMaximize:function(){return true;
},setWindowManager:function(a){if(this.__gu){this.__gu.setDesktop(null);
}a.setDesktop(this);
this.__gu=a;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}},_applyActiveWindow:function(l,m){this.getWindowManager().changeActiveWindow(l,m);
l.setActive(true);

if(m){m.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(o){if(qx.Class.isDefined(k)&&o instanceof qx.ui.window.Window){this._addWindow(o);
}},_addWindow:function(n){this.getWindows().push(n);
n.addListener(h,this._onChangeActive,this);
n.addListener(j,this._onChangeModal,this);
n.addListener(i,this._onChangeVisibility,this);

if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(b){if(qx.Class.isDefined(k)&&b instanceof qx.ui.window.Window){this._removeWindow(b);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(h,this._onChangeActive,this);
p.removeListener(j,this._onChangeModal,this);
p.removeListener(i,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__gt){this.__gt=[];
}return this.__gt;
}},destruct:function(){this._disposeArray(d);
this._disposeObjects(f);
}});
})();
(function(){var t="contextmenu",s="changeGlobalCursor",r="abstract",q="Boolean",p="root",o="",n="_applyNativeContextMenu",m=" !important",l="__gv",k="_applyGlobalCursor",h="qx.client",j=";",i="qx.ui.root.Abstract",g="String",f="*";
qx.Class.define(i,{type:r,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
},properties:{appearance:{refine:true,init:p},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:g,nullable:true,themeable:true,apply:k,event:s},nativeContextMenu:{check:q,nullable:true,apply:n,init:true}},members:{__gv:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(h,{"mshtml":function(c,d){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__gv;

if(!z){this.__gv=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,f,qx.bom.element.Cursor.compile(w).replace(j,o)+m);
}}}),_applyNativeContextMenu:function(a,b){if(a){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
}},destruct:function(){this._disposeFields(l);
},defer:function(u,v){qx.ui.core.MChildrenHandling.remap(v);
}});
})();
(function(){var r="resize",q="__gw",p="position",o="0px",n="webkit",m="$$widget",l="qx.ui.root.Application",k="hidden",j="qx.client",i="div",f="__gx",h="100%",g="absolute";
qx.Class.define(l,{extend:qx.ui.root.Abstract,construct:function(s){this.__gw=qx.dom.Node.getWindow(s);
this.__gx=s;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__gw,r,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.setNativeContextMenu(false);
},members:{__gw:null,__gx:null,_createContainerElement:function(){var a=this.__gx;

if(qx.core.Variant.isSet(j,n)){if(!a.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var e=a.documentElement.style;
var b=a.body.style;
e.overflow=b.overflow=k;
e.padding=e.margin=b.padding=b.margin=o;
e.width=e.height=b.width=b.height=h;
var d=a.createElement(i);
a.body.appendChild(d);
var c=new qx.html.Root(d);
c.setStyle(p,g);
c.setAttribute(m,this.toHashCode());
return c;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var t=qx.bom.Viewport.getWidth(this.__gw);
var u=qx.bom.Viewport.getHeight(this.__gw);
return {minWidth:t,width:t,maxWidth:t,minHeight:u,height:u,maxHeight:u};
}},destruct:function(){this._disposeFields(q,f);
}});
})();
(function(){var h="blur",g="focus",f="input",e="load",d="qx.ui.core.EventHandler",c="activate",b="__gy";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__gy=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__gy:null,__gz:{focusin:1,focusout:1,focus:1,blur:1},__gA:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(H,I){return H instanceof qx.ui.core.Widget;
},_dispatchEvent:function(o){var t=o.getTarget();
var s=qx.ui.core.Widget.getWidgetByElement(t,true);
var u=false;

while(s&&s.isAnonymous()){var u=true;
s=s.getLayoutParent();
}if(u&&o.getType()==c){s.getContainerElement().activate();
}if(this.__gz[o.getType()]){s=s&&s.getFocusTarget();
if(!s){return;
}}if(o.getRelatedTarget){var B=o.getRelatedTarget();
var A=qx.ui.core.Widget.getWidgetByElement(B);

while(A&&A.isAnonymous()){A=A.getLayoutParent();
}
if(A){if(this.__gz[o.getType()]){A=A.getFocusTarget();
}if(A===s){return;
}}}var w=o.getCurrentTarget();
var y=qx.ui.core.Widget.getWidgetByElement(w);

if(!y||y.isAnonymous()){return;
}if(this.__gz[o.getType()]){y=y.getFocusTarget();
}var z=o.getType();

if(!(y.isEnabled()||this.__gA[z])){return;
}var p=o.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var v=this.__gy.getListeners(y,z,p);

if(!v||v.length===0){return;
}var q=qx.event.Pool.getInstance().getObject(o.constructor);
o.clone(q);
q.setTarget(s);
q.setRelatedTarget(A||null);
q.setCurrentTarget(y);
var C=o.getOriginalTarget();

if(C){var r=qx.ui.core.Widget.getWidgetByElement(C);

while(r&&r.isAnonymous()){r=r.getLayoutParent();
}q.setOriginalTarget(r);
}else{q.setOriginalTarget(t);
}for(var i=0,l=v.length;i<l;i++){var x=v[i].context||y;
v[i].handler.call(x,q);
}if(q.getPropagationStopped()){o.stopPropagation();
}
if(q.getDefaultPrevented()){o.preventDefault();
}qx.event.Pool.getInstance().poolObject(q);
},registerEvent:function(j,k,m){var n;

if(k===g||k===h){n=j.getFocusElement();
}else if(k===e||k===f){n=j.getContentElement();
}else{n=j.getContainerElement();
}
if(n){n.addListener(k,this._dispatchEvent,this,m);
}},unregisterEvent:function(D,E,F){var G;

if(E===g||E===h){G=D.getFocusElement();
}else if(E===e||E===f){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this._disposeFields(b);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var h="abstract",g="qx.debug",f="qx.ui.layout.Abstract",e="__gC",d="__gB";
qx.Class.define(f,{type:h,extend:qx.core.Object,members:{__gB:null,_invalidChildrenCache:null,__gC:null,invalidateLayoutCache:function(){this.__gB=null;
},renderLayout:function(b,c){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gB){return this.__gB;
}return this.__gB=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(n){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(g,{"on":function(i,name,j){},"off":null}),_clearSeparators:function(){var a=this.__gC;

if(a instanceof qx.ui.core.LayoutItem){a.clearSeparators();
}},_renderSeparator:function(l,m){this.__gC.renderSeparator(l,m);
},connectToWidget:function(k){if(k&&this.__gC){throw new Error("It is not possible to manually set the connected widget.");
}this.__gC=k;
this.invalidateChildrenCache();
},_applyLayoutChange:function(){if(this.__gC){this.__gC.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__gC.getLayoutChildren();
}},destruct:function(){this._disposeFields(e,d);
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
if(r==g){var v=qx.util.ResourceManager.toUri(u);
return d+v+h+t+j;
}else{var back=qx.bom.element.Background.compile(u,r,s,top);
return m+back+t+l;
}}else{if(t){if(qx.core.Variant.isSet(f,k)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){t+=c;
}}return m+t+l;
}else{return i;
}}}}});
})();
(function(){var y="number",x="qx.client",w="/",v="mshtml",u="0",t="",s="px",r=";",q="background-image:url(",p=");",k=")",o="background-repeat:",n="https:",j=" ",i="qx.bom.element.Background",m="url(",l="background-position:";
qx.Class.define(i,{statics:{__gD:[q,null,p,l,null,r,o,null,r],__gE:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__gF:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==y){top+=0.01;
}
if(z){var B=(typeof z==y)?z+s:z;
}else{B=u;
}
if(top){var C=(typeof top==y)?top+s:top;
}else{C=u;
}return B+j+C;
},compile:function(J,K,L,top){var M=this.__gF(L,top);
var N=qx.util.ResourceManager.toUri(J);

if(qx.core.Variant.isSet(x,v)){N=this.__gG(N);
}var O=this.__gD;
O[1]=N;
O[4]=M;
O[7]=K;
return O.join(t);
},getStyles:function(D,E,F,top){if(!D){return this.__gE;
}var G=this.__gF(F,top);
var H=qx.util.ResourceManager.toUri(D);

if(qx.core.Variant.isSet(x,v)){H=this.__gG(H);
}var I={backgroundPosition:G,backgroundImage:m+H+k};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(c,d,e,f,top){var g=this.getStyles(d,e,f,top);

for(var h in g){c.style[h]=g[h];
}},__gG:qx.core.Variant.select(x,{"mshtml":function(a){var b=t;
if(window.location.protocol===n){if(a.match(/^\/\//)!=null){b=window.location.protocol;
}else if(a.match(/^\.\//)!=null){a=a.substring(a.indexOf(w));
b=document.URL.substring(0,document.URL.lastIndexOf(w));
}else{b=window.location.href.substring(0,window.location.href.lastIndexOf(w)+1);
}}return b+a;
},"default":function(){}})}});
})();
(function(){var y="replacement",x="Boolean",w="_applyScale",v="qx.debug",u="_applySource",t="-disabled.$1",s="changeSource",r="on",q="String",p="image",o="qx.ui.basic.Image";
qx.Class.define(o,{extend:qx.ui.core.Widget,construct:function(z){arguments.callee.base.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:q,init:null,nullable:true,event:s,apply:u,themeable:true},scale:{check:x,init:false,themeable:true,apply:w},appearance:{refine:true,init:p},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__gH:null,__gI:null,_createContentElement:function(){return new qx.html.Image();
},_getContentHint:function(){return {width:this.__gH||0,height:this.__gI||0};
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);

if(this.getSource()){this._styleSource();
}},_applySource:function(l){this._styleSource();
},_applyScale:function(j){var k=this.getContentElement();
k.setScale(j);
},_styleSource:function(){var h=qx.util.AliasManager.getInstance().resolve(this.getSource());
var c=this.getContentElement();

if(!h){c.resetSource();
return;
}var d=qx.util.ResourceManager;
var i=qx.io2.ImageLoader;
if(d.has(h)){if(!this.getEnabled()){var g=h.replace(/\.([a-z]+)$/,t);

if(d.has(g)){h=g;
this.addState(y);
}else{this.removeState(y);
}}if(c.getSource()===h){return;
}c.setSource(h);
this.__gL(d.getImageWidth(h),d.getImageHeight(h));
}else if(i.isLoaded(h)){c.setSource(h);
var e=i.getWidth(h);
var f=i.getHeight(h);
this.__gL(e,f);
}else{if(qx.core.Variant.isSet(v,r)){var self=arguments.callee.self;

if(!self.__gJ){self.__gJ={};
}
if(!self.__gJ[h]){this.debug("Unknown image: "+h);
self.__gJ[h]=true;
}}if(!qx.io2.ImageLoader.isFailed(h)){qx.io2.ImageLoader.load(h,this.__gK,this);
}}},__gK:function(A,B){if(A!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(!B){this.warn("Image could not be loaded: "+A);
return;
}this._styleSource();
},__gL:function(m,n){if(m!==this.__gH||n!==this.__gI){this.__gH=m;
this.__gI=n;
qx.ui.core.queue.Layout.add(this);
}}}});
})();
(function(){var y="interval",x="Integer",w="resize",v="Boolean",u="disappear",t="bottom-left",s="offsetLeft",r="offsetRight",q="right-top",p="top-right",j="top-left",o="bottom-right",m="right-bottom",i="offsetBottom",h="qx.ui.core.MPlacement",l="left-top",k="left-bottom",n="shorthand",g="offsetTop";
qx.Mixin.define(h,{properties:{position:{check:[j,p,t,o,l,k,q,m],init:t,themeable:true},domMove:{check:v,init:false},smart:{check:v,init:true,themeable:true},offsetLeft:{check:x,init:0,themeable:true},offsetTop:{check:x,init:0,themeable:true},offsetRight:{check:x,init:0,themeable:true},offsetBottom:{check:x,init:0,themeable:true},offset:{group:[g,r,i,s],mode:n,themeable:true}},members:{__gM:null,__gN:null,getLayoutLocation:function(z){var C,B,D,top;
B=z.getBounds();
D=B.left;
top=B.top;
var E=B;
z=z.getLayoutParent();

while(z&&!z.isRootWidget()){B=z.getBounds();
D+=B.left;
top+=B.top;
C=z.getInsets();
D+=C.left;
top+=C.top;
z=z.getLayoutParent();
}if(z.isRootWidget()){var A=z.getContainerLocation();

if(A){D+=A.left;
top+=A.top;
}}return {left:D,top:top,right:D+E.width,bottom:top+E.height};
},moveTo:function(d,top){if(this.getDomMove()){this.setDomPosition(d,top);
}else{this.setLayoutProperties({left:d,top:top});
}},placeToWidget:function(F,G){if(G){this.__gN=qx.lang.Function.bind(this.placeToWidget,this,F,false);
qx.event.Idle.getInstance().addListener(y,this.__gN);
this.addListener(u,function(){if(this.__gN){qx.event.Idle.getInstance().removeListener(y,this.__gN);
this.__gN=null;
}},this);
}var H=F.getContainerLocation()||this.getLayoutLocation(F);
this.__gO(H);
},placeToMouse:function(event){var f=event.getDocumentLeft();
var top=event.getDocumentTop();
var e={left:f,top:top,right:f,bottom:top};
this.__gO(e);
},placeToElement:function(a,b){var location=qx.bom.element.Location.get(a);
var c={left:location.left,top:location.top,right:location.left+a.offsetWidth,bottom:location.top+a.offsetHeight};
if(b){this.__gN=qx.lang.Function.bind(this.placeToElement,this,a,false);
qx.event.Idle.getInstance().addListener(y,this.__gN);
this.addListener(u,function(){if(this.__gN){qx.event.Idle.getInstance().removeListener(y,this.__gN);
this.__gN=null;
}},this);
}this.__gO(c);
},placeToPoint:function(P){var Q={left:P.left,top:P.top,right:P.left,bottom:P.top};
this.__gO(Q);
},__gO:function(I){var O=this.getBounds();

if(O==null){if(!this.__gM){this.addListener(w,this.__gO);
}this.__gM=I;
return;
}else if(this.__gM){I=this.__gM;
delete this.__gM;
this.removeListener(w,this.__gO);
}var J=this.getLayoutParent().getBounds();
var M=this.getPosition();
var N=this.getSmart();
var K={left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
var L=qx.util.PlaceUtil.compute(O,J,I,M,N,K);
this.moveTo(L.left,L.top);
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
(function(){var o="source",n="scale",m="no-repeat",l="mshtml",k="qx.client",j="qx.html.Image";
qx.Class.define(j,{extend:qx.html.Element,members:{_applyProperty:function(name,d){arguments.callee.base.call(this,name,d);

if(name===o){var h=this.getDomElement();
var e=this.getAllStyles();
var f=this._getProperty(o);
var g=this._getProperty(n);
var i=g?n:m;
qx.bom.element.Decoration.update(h,f,i,e);
}},_createDomElement:function(){var b=this._getProperty(n);
var c=b?n:m;

if(qx.core.Variant.isSet(k,l)){var a=this._getProperty(o);
this.setNodeName(qx.bom.element.Decoration.getTagName(c,a));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(c));
}return arguments.callee.base.call(this);
},_copyData:function(p){return arguments.callee.base.call(this,true);
},setSource:function(r){this._setProperty(o,r);
return this;
},getSource:function(){return this._getProperty(o);
},resetSource:function(){this._removeProperty(o);
return this;
},setScale:function(q){this._setProperty(n,q);
return this;
},getScale:function(){return this._getProperty(n);
}}});
})();
(function(){var r="px",q="div",p="img",o="qx.client",n="",m="qx.debug",l="scale-x",k="mshtml",j="no-repeat",i="on",L="qx/icon",K="repeat",J="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",I="scale-y",H=".png",G="scale",F="webkit",E='<div style="',D="repeat-y",C='<img src="',y="qx.bom.element.Decoration",z="png",w="', sizingMethod='scale')",x="', sizingMethod='crop')",u='"/>',v='" style="',s="none",t="repeat-x",A='"></div>',B="absolute";
qx.Class.define(y,{statics:{DEBUG:false,__gP:qx.core.Variant.isSet(o,k)&&qx.bom.client.Engine.VERSION<8,__gQ:qx.core.Variant.select(o,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gR:{"scale-x":p,"scale-y":p,"scale":p,"repeat":q,"no-repeat":q,"repeat-x":q,"repeat-y":q},update:function(M,N,O,P){var R=this.getTagName(O,N);

if(R!=M.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var S=this.getAttributes(N,O,P);

if(R===p){M.src=S.src;
}if(M.style.backgroundPosition!=n&&S.style.backgroundPosition===undefined){S.style.backgroundPosition=null;
}if(M.style.clip!=n&&S.style.clip===undefined){S.style.clip=null;
}var Q=qx.bom.element.Style;
Q.setStyles(M,S.style);
},create:function(c,d,e){var f=this.getTagName(d,c);
var h=this.getAttributes(c,d,e);
var g=qx.bom.element.Style.compile(h.style);

if(f===p){return C+h.src+v+g+u;
}else{return E+g+A;
}},getTagName:function(a,b){if(qx.core.Variant.isSet(o,k)){if(b&&this.__gP&&this.__gQ[a]&&qx.lang.String.endsWith(b,H)){return q;
}}return this.__gR[a];
},getAttributes:function(T,U,V){var ba=qx.util.ResourceManager;
var bf=qx.io2.ImageLoader;
var bh=qx.bom.element.Background;

if(!V){V={};
}
if(!V.position){V.position=B;
}
if(qx.core.Variant.isSet(o,k)){V.fontSize=0;
V.lineHeight=0;
}else if(qx.core.Variant.isSet(o,F)){V.WebkitUserDrag=s;
}var be=ba.getImageWidth(T)||bf.getWidth(T);
var bd=ba.getImageHeight(T)||bf.getHeight(T);
var bb=ba.getImageFormat(T)||bf.getFormat(T);

if(qx.core.Variant.isSet(m,i)){if(T!=null&&bb==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+T+"'!");
}}if(this.__gP&&this.__gQ[U]&&bb===z){if(V.width==null&&be!=null){V.width=be+r;
}
if(V.height==null&&bd!=null){V.height=bd+r;
}
if(U==j){V.filter=J+ba.toUri(T)+x;
}else{V.filter=J+ba.toUri(T)+w;
}V.backgroundImage=V.backgroundRepeat=n;
return {style:V};
}else{if(U===G){var bc=ba.toUri(T);

if(V.width==null&&be!=null){V.width=be+r;
}
if(V.height==null&&bd!=null){V.height=bd+r;
}return {src:bc,style:V};
}var Y=ba.isClippedImage(T);

if(U===l||U===I){if(Y){if(U===l){var bj=ba.getData(T);
var bk=ba.getImageHeight(bj[4]);
var bc=ba.toUri(bj[4]);
V.clip={top:-bj[6],height:bd};
V.height=bk+r;
if(V.top!=null){V.top=(parseInt(V.top,10)+bj[6])+r;
}else if(V.bottom!=null){V.bottom=(parseInt(V.bottom,10)+bd-bk-bj[6])+r;
}return {src:bc,style:V};
}else{var bj=ba.getData(T);
var bi=ba.getImageWidth(bj[4]);
var bc=ba.toUri(bj[4]);
V.clip={left:-bj[5],width:be};
V.width=bi+r;
if(V.left!=null){V.left=(parseInt(V.left,10)+bj[5])+r;
}else if(V.right!=null){V.right=(parseInt(V.right,10)+be-bi-bj[5])+r;
}return {src:bc,style:V};
}}else{if(qx.core.Variant.isSet(m,i)){if(this.DEBUG&&ba.has(T)&&T.indexOf(L)==-1){if(!this.__gS){this.__gS={};
}
if(!this.__gS[T]){qx.log.Logger.debug("Potential clipped image candidate: "+T);
this.__gS[T]=true;
}}}
if(U==l){V.height=bd==null?null:bd+r;
}else if(U==I){V.width=be==null?null:be+r;
}var bc=ba.toUri(T);
return {src:bc,style:V};
}}else{if(Y&&U!==K){var bj=ba.getData(T);
var X=bh.getStyles(bj[4],U,bj[5],bj[6]);

for(var W in X){V[W]=X[W];
}
if(be!=null&&V.width==null&&(U==D||U===j)){V.width=be+r;
}
if(bd!=null&&V.height==null&&(U==t||U===j)){V.height=bd+r;
}return {style:V};
}else{if(qx.core.Variant.isSet(m,i)){if(this.DEBUG&&ba.has(T)&&U!==K&&T.indexOf(L)==-1){if(!this.__gS){this.__gS={};
}
if(!this.__gS[T]){qx.log.Logger.debug("Potential clipped image candidate: "+T);
this.__gS[T]=true;
}}}var X=bh.getStyles(T,U);

for(var W in X){V[W]=X[W];
}
if(be!=null&&V.width==null){V.width=be+r;
}
if(bd!=null&&V.height==null){V.height=bd+r;
}if(V.filter){V.filter=n;
}return {style:V};
}}}}}});
})();
(function(){var g="qx.client",f="qx.io2.ImageLoader",e="load";
qx.Bootstrap.define(f,{statics:{__gT:{},__gU:{width:null,height:null},__gV:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(E){var F=this.__gT[E];
return !!(F&&F.loaded);
},isFailed:function(c){var d=this.__gT[c];
return !!(d&&d.failed);
},isLoading:function(w){var x=this.__gT[w];
return !!(x&&x.loading);
},getFormat:function(h){if(h!=null&&this.__gT[h]){return this.__gT[h]||null;
}else{return null;
}},getSize:function(y){return this.__gT[y]||this.__gU;
},getWidth:function(t){var u=this.__gT[t];
return u?u.width:null;
},getHeight:function(k){var m=this.__gT[k];
return m?m.height:null;
},load:function(n,o,p){var q=this.__gT[n];

if(!q){q=this.__gT[n]={};
}if(o&&!p){p=window;
}if(q.loaded||q.loading||q.failed){if(o){if(q.loading){q.callbacks.push(o,p);
}else{o.call(p,n,q);
}}}else{q.loading=true;
q.callbacks=[];

if(o){q.callbacks.push(o,p);
}var s=new Image();
var r=qx.lang.Function.listener(this.__gW,this,s,n);
s.onload=r;
s.onerror=r;
s.src=n;
}},__gW:function(event,z,A){var B=this.__gT[A];
if(event.type===e){B.loaded=true;
B.width=this.__gX(z);
B.height=this.__gY(z);
var C=this.__gV.exec(A);

if(C!=null){B.format=C[1];
}}else{B.failed=true;
}z.onload=z.onerror=null;
var D=B.callbacks;
delete B.loading;
delete B.callbacks;
for(var i=0,l=D.length;i<l;i+=2){D[i].call(D[i+1],A,B);
}},__gX:qx.core.Variant.select(g,{"gecko":function(v){return v.naturalWidth;
},"default":function(b){return b.width;
}}),__gY:qx.core.Variant.select(g,{"gecko":function(j){return j.naturalHeight;
},"default":function(a){return a.height;
}})}});
})();
(function(){var h="interval",g="Number",f="_applyTimeoutInterval",e="__ha",d="qx.event.type.Event",c="qx.event.Idle",b="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
var a=new qx.event.Timer(this.getTimeoutInterval());
a.addListener(h,this._onInterval,this);
a.start();
this.__ha=a;
},events:{"interval":d},properties:{timeoutInterval:{check:g,init:100,apply:f}},members:{__ha:null,_applyTimeoutInterval:function(i){this.__ha.setInterval(i);
},_onInterval:function(){this.fireEvent(h);
}},destruct:function(){if(this.__ha){this.__ha.stop();
}this._disposeFields(e);
}});
})();
(function(){var j="interval",i="qx.event.Timer",h="_applyInterval",g="_applyEnabled",f="Boolean",d="qx.event.type.Event",c="__hc",b="Integer",a="__hb";
qx.Class.define(i,{extend:qx.core.Object,construct:function(p){arguments.callee.base.call(this);
this.setEnabled(false);

if(p!=null){this.setInterval(p);
}this.__hb=qx.lang.Function.bind(this._oninterval,this);
},events:{"interval":d},statics:{once:function(k,l,m){var n=new qx.event.Timer(m);
n.addListener(j,function(e){n.stop();
k.call(l,e);
n.dispose();
l=null;
},l);
n.start();
return n;
}},properties:{enabled:{init:true,check:f,apply:g},interval:{check:b,init:1000,apply:h}},members:{__hc:null,_applyInterval:function(t,u){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(q,r){if(r){window.clearInterval(this.__hc);
this.__hc=null;
}else if(q){this.__hc=window.setInterval(this.__hb,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(s){this.setInterval(s);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(o){this.stop();
this.startWith(o);
},_oninterval:function(){if(this.getEnabled()){this.fireEvent(j);
}}},destruct:function(){if(this.__hc){window.clearInterval(this.__hc);
}this._disposeFields(c,a);
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
(function(){var D="__hg",C="keypress",B="focusout",A="__hf",z="__hd",y="activate",x="Tab",w="singleton",v="deactivate",u="__he",s="focusin",t="qx.ui.core.FocusHandler";
qx.Class.define(t,{extend:qx.core.Object,type:w,construct:function(){arguments.callee.base.call(this);
this.__hd={};
},members:{__hd:null,__he:null,__hf:null,__hg:null,connectTo:function(bl){bl.addListener(C,this.__hh,this);
bl.addListener(s,this._onFocusIn,this,true);
bl.addListener(B,this._onFocusOut,this,true);
bl.addListener(y,this._onActivate,this,true);
bl.addListener(v,this._onDeactivate,this,true);
},addRoot:function(U){this.__hd[U.$$hash]=U;
},removeRoot:function(p){delete this.__hd[p.$$hash];
},getActiveWidget:function(){return this.__he;
},isActive:function(q){return this.__he==q;
},getFocusedWidget:function(){return this.__hf;
},isFocused:function(o){return this.__hf==o;
},isFocusRoot:function(bb){return !!this.__hd[bb.$$hash];
},_onActivate:function(e){var b=e.getTarget();
this.__he=b;
var a=this.__hi(b);

if(a!=this.__hg){this.__hg=a;
}},_onDeactivate:function(e){var r=e.getTarget();

if(this.__he==r){this.__he=null;
}},_onFocusIn:function(e){var bk=e.getTarget();

if(bk!=this.__hf){this.__hf=bk;
bk.visualizeFocus();
}},_onFocusOut:function(e){var V=e.getTarget();

if(V==this.__hf){this.__hf=null;
V.visualizeBlur();
}},__hh:function(e){if(e.getKeyIdentifier()!=x){return;
}
if(!this.__hg){return;
}e.stopPropagation();
e.preventDefault();
var c=this.__hf;

if(!e.isShiftPressed()){var d=c?this.__hm(c):this.__hk();
}else{var d=c?this.__hn(c):this.__hl();
}if(d){d.tabFocus();
}},__hi:function(S){var T=this.__hd;

while(S){if(T[S.$$hash]){return S;
}S=S.getLayoutParent();
}return null;
},__hj:function(H,I){if(H===I){return 0;
}var K=H.getTabIndex()||0;
var J=I.getTabIndex()||0;

if(K!=J){return K-J;
}var P=H.getContainerElement().getDomElement();
var O=I.getContainerElement().getDomElement();
var N=qx.bom.element.Location;
var M=N.get(P);
var L=N.get(O);
if(M.top!=L.top){return M.top-L.top;
}if(M.left!=L.left){return M.left-L.left;
}var Q=H.getZIndex();
var R=I.getZIndex();

if(Q!=R){return Q-R;
}return 0;
},__hk:function(){return this.__hq(this.__hg,null);
},__hl:function(){return this.__hr(this.__hg,null);
},__hm:function(bg){var bh=this.__hg;

if(bh==bg){return this.__hk();
}
while(bg&&bg.getAnonymous()){bg=bg.getLayoutParent();
}
if(bg==null){return [];
}var bi=[];
this.__ho(bh,bg,bi);
bi.sort(this.__hj);
var bj=bi.length;
return bj>0?bi[0]:this.__hk();
},__hn:function(W){var X=this.__hg;

if(X==W){return this.__hl();
}
while(W&&W.getAnonymous()){W=W.getLayoutParent();
}
if(W==null){return [];
}var Y=[];
this.__hp(X,W,Y);
Y.sort(this.__hj);
var ba=Y.length;
return ba>0?Y[ba-1]:this.__hl();
},__ho:function(parent,f,g){var h=parent.getLayoutChildren();
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];
if(!(j instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(j)&&j.isEnabled()){if(j.isTabable()&&this.__hj(f,j)<0){g.push(j);
}this.__ho(j,f,g);
}}},__hp:function(parent,bc,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bf)&&bf.isEnabled()){if(bf.isTabable()&&this.__hj(bc,bf)>0){bd.push(bf);
}this.__hp(bf,bc,bd);
}}},__hq:function(parent,k){var m=parent.getLayoutChildren();
var n;

for(var i=0,l=m.length;i<l;i++){n=m[i];
if(!(n instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(n)&&n.isEnabled()){if(n.isTabable()){if(k==null||this.__hj(n,k)<0){k=n;
}}k=this.__hq(n,k);
}}return k;
},__hr:function(parent,E){var F=parent.getLayoutChildren();
var G;

for(var i=0,l=F.length;i<l;i++){G=F[i];
if(!(G instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(G)&&G.isEnabled()){if(G.isTabable()){if(E==null||this.__hj(G,E)>0){E=G;
}}E=this.__hr(G,E);
}}return E;
}},destruct:function(){this._disposeMap(z);
this._disposeFields(A,u,D);
}});
})();
(function(){var B="string",A="number",z="': ",y="width",x="qx.ui.layout.Canvas",w="qx.debug",v="height",u="Bad format of layout property '",t="' is not supported by the Canvas layout!",s=". The value must be either an integer or an percent string.",r="The property '";
qx.Class.define(x,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(w,{"on":function(C,name,D){var E={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};
this.assert(E[name]==1,r+name+t);

if(name==y||name==v){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{if(typeof D===A){this.assertInteger(D);
}else if(typeof D==B){this.assertMatch(D,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.fail(u+name+z+D+s);
}}},"off":null}),renderLayout:function(a,b){var o=this._getLayoutChildren();
var e,n,k;
var q,top,c,d,g,f;
var m,j,p,h;

for(var i=0,l=o.length;i<l;i++){e=o[i];
n=e.getSizeHint();
k=e.getLayoutProperties();
m=e.getMarginTop();
j=e.getMarginRight();
p=e.getMarginBottom();
h=e.getMarginLeft();
q=k.left!=null?k.left:k.edge;

if(q&&typeof q===B){q=Math.round(parseFloat(q)*a/100);
}c=k.right!=null?k.right:k.edge;

if(c&&typeof c===B){c=Math.round(parseFloat(c)*a/100);
}top=k.top!=null?k.top:k.edge;

if(top&&typeof top===B){top=Math.round(parseFloat(top)*b/100);
}d=k.bottom!=null?k.bottom:k.edge;

if(d&&typeof d===B){d=Math.round(parseFloat(d)*b/100);
}if(q!=null&&c!=null){g=a-q-c-h-j;
if(g<n.minWidth){g=n.minWidth;
}else if(g>n.maxWidth){g=n.maxWidth;
}q+=h;
}else{g=k.width;

if(g==null){g=n.width;
}else{g=Math.round(parseFloat(g)*a/100);
if(g<n.minWidth){g=n.minWidth;
}else if(g>n.maxWidth){g=n.maxWidth;
}}
if(c!=null){q=a-g-c-j-h;
}else if(q==null){q=h;
}else{q+=h;
}}if(top!=null&&d!=null){f=b-top-d-m-p;
if(f<n.minHeight){f=n.minHeight;
}else if(f>n.maxHeight){f=n.maxHeight;
}top+=m;
}else{f=k.height;

if(f==null){f=n.height;
}else{f=Math.round(parseFloat(f)*b/100);
if(f<n.minHeight){f=n.minHeight;
}else if(f>n.maxHeight){f=n.maxHeight;
}}
if(d!=null){top=b-f-d-p-m;
}else if(top==null){top=m;
}else{top+=m;
}}e.renderLayout(q,top,g,f);
}},_computeSizeHint:function(){var U=0,T=0;
var R=0,P=0;
var N,M;
var L,J;
var F=this._getLayoutChildren();
var I,S,H;
var V,top,G,K;

for(var i=0,l=F.length;i<l;i++){I=F[i];
S=I.getLayoutProperties();
H=I.getSizeHint();
var Q=I.getMarginLeft()+I.getMarginRight();
var O=I.getMarginTop()+I.getMarginBottom();
N=H.width+Q;
M=H.minWidth+Q;
V=S.left!=null?S.left:S.edge;

if(V&&typeof V===A){N+=V;
M+=V;
}G=S.right!=null?S.right:S.edge;

if(G&&typeof G===A){N+=G;
M+=G;
}U=Math.max(U,N);
T=Math.max(T,M);
L=H.height+O;
J=H.minHeight+O;
top=S.top!=null?S.top:S.edge;

if(top&&typeof top===A){L+=top;
J+=top;
}K=S.bottom!=null?S.bottom:S.edge;

if(K&&typeof K===A){L+=K;
J+=K;
}R=Math.max(R,L);
P=Math.max(P,J);
}return {width:U,minWidth:T,height:R,minHeight:P};
}}});
})();
(function(){var q="middle",p="qx.ui.layout.Util",o="left",n="center",m="top",k="bottom",j="right";
qx.Class.define(p,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(be,bf,bg){var bi,bm,bh,bn;
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
},computeHorizontalAlignOffset:function(v,w,x,y,z){if(y==null){y=0;
}
if(z==null){z=0;
}var A=0;

switch(v){case o:A=y;
break;
case j:A=x-w-z;
break;
case n:A=Math.round((x-w)/2);
if(A<y){A=y;
}else if(A<z){A=Math.max(y,x-w-z);
}break;
}return A;
},computeVerticalAlignOffset:function(J,K,L,M,N){if(M==null){M=0;
}
if(N==null){N=0;
}var O=0;

switch(J){case m:O=M;
break;
case k:O=L-K-N;
break;
case q:O=Math.round((L-K)/2);
if(O<M){O=M;
}else if(O<N){O=Math.max(M,L-K-N);
}break;
}return O;
},collapseMargins:function(r){var s=0,u=0;

for(var i=0,l=arguments.length;i<l;i++){var t=arguments[i];

if(t<0){u=Math.min(u,t);
}else if(t>0){s=Math.max(s,t);
}}return s+u;
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
},computeHorizontalSeparatorGaps:function(B,C,D){var G=qx.theme.manager.Decoration.getInstance().resolve(D);
var F=G.getInsets();
var E=F.left+F.right;
var H=0;

for(var i=0,l=B.length;i<l;i++){var I=B[i];
H+=I.getMarginLeft()+I.getMarginRight();
}H+=(C+E+C)*(l-1);
return H;
},computeVerticalSeparatorGaps:function(V,W,X){var bb=qx.theme.manager.Decoration.getInstance().resolve(X);
var ba=bb.getInsets();
var Y=ba.top+ba.bottom;
var bc=0;

for(var i=0,l=V.length;i<l;i++){var bd=V[i];
bc+=bd.getMarginTop()+bd.getMarginBottom();
}bc+=(W+Y+W)*(l-1);
return bc;
},arrangeIdeals:function(P,Q,R,S,T,U){if(Q<P||T<S){if(Q<P&&T<S){Q=P;
T=S;
}else if(Q<P){T-=(P-Q);
Q=P;
if(T<S){T=S;
}}else if(T<S){Q-=(S-T);
T=S;
if(Q<P){Q=P;
}}}
if(Q>R||T>U){if(Q>R&&T>U){Q=R;
T=U;
}else if(Q>R){T+=(Q-R);
Q=R;
if(T>U){T=U;
}}else if(T>U){Q+=(T-U);
T=U;
if(Q>R){Q=R;
}}}return {begin:Q,end:T};
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
(function(){var q="log",p=" ",o="debug",n="qx.client",m="[",l=", ",k="}",h="{",g="]:",f="ms",c="map",e="]",d="qx.log.appender.Native",b=":";
qx.Bootstrap.define(d,{statics:{process:qx.core.Variant.select(n,{"gecko":function(G){if(window.console&&console.firebug){console[G.level].apply(console,this.__hs(G));
}},"mshtml":function(r){if(window.console){var t=r.level;

if(t==o){t=q;
}var s=this.__hs(r).join(p);
console[t](s);
}},"webkit":function(u){if(window.console){var w=u.level;

if(w==o){w=q;
}var v=this.__hs(u).join(p);
console[w](v);
}},"opera":function(a){}}),__hs:qx.core.Variant.select(n,{"gecko|webkit|mshtml":function(x){var F=[];
F.push(x.offset+f);

if(x.object){var y=x.win.qx.core.ObjectRegistry.fromHashCode(x.object);

if(y){F.push(y.classname+m+y.$$hash+g);
}}else if(x.clazz){F.push(x.clazz.classname+b);
}var z=x.items;
var C,E;

for(var i=0,D=z.length;i<D;i++){C=z[i];
E=C.text;

if(E instanceof Array){var A=[];

for(var j=0,B=E.length;j<B;j++){A.push(E[j].text);
}
if(C.type===c){F.push(h,A.join(l),k);
}else{F.push(m,A.join(l),e);
}}else{F.push(E);
}}return F;
},"default":null})},defer:function(H){qx.log.Logger.register(H);
}});
})();
(function(){var r="",q='</div>',p="Up",o="none",n="keypress",m='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',l="Enter",k="px",j='.qxconsole .messages .user-result{background:white}',i='.qxconsole .messages .level-error{background:#FFE2D5}',bd="div",bc="user-command",bb='<div class="command">',ba='.qxconsole .command input:focus{outline:none;}',Y='.qxconsole .messages .type-key{color:#565656;font-style:italic}',X='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',W='.qxconsole .messages div{padding:0px 4px;}',V='.qxconsole .messages .level-debug{background:white}',U='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',T="DIV",y='.qxconsole .messages .level-user{background:#E3EFE9}',z='<div class="qxconsole">',w="D",x='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',u='.qxconsole .messages .type-string{color:black;font-weight:normal;}',v='.qxconsole .control a{text-decoration:none;color:black;}',s='<div class="messages">',t='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',A='<input type="text"/>',B="clear",I='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',G='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',M='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',K='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',P='.qxconsole .messages .user-command{color:blue}',O="F7",D="qx.log.appender.Console",S='.qxconsole .messages .level-info{background:#DEEDFA}',R="block",Q='.qxconsole .messages .level-warn{background:#FFF7D5}',C='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',E='.qxconsole .messages .user-error{background:#FFE2D5}',F='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',H='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',J=">>> ",L="Down",N='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(D,{statics:{init:function(){var be=[M,F,v,m,W,P,j,E,V,S,Q,i,y,u,N,t,G,x,Y,U,X,C,K,I,ba];
qx.bom.Stylesheet.createElement(be.join(r));
var bg=[z,H,s,q,bb,A,q,q];
var bh=document.createElement(T);
bh.innerHTML=bg.join(r);
var bf=bh.firstChild;
document.body.appendChild(bh.firstChild);
this.__ht=bf;
this.__hu=bf.childNodes[1];
this.__hv=bf.childNodes[2].firstChild;
this.__hA();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,n,this.__hB,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__hu.innerHTML=r;
},process:function(f){this.__hu.appendChild(qx.log.appender.Util.toHtml(f));
this.__hw();
},__hw:function(){this.__hu.scrollTop=this.__hu.scrollHeight;
},__hx:true,toggle:function(){if(!this.__ht){this.init();
}else if(this.__ht.style.display==o){this.show();
}else{this.__ht.style.display=o;
}},show:function(){if(!this.__ht){this.init();
}else{this.__ht.style.display=R;
this.__hu.scrollTop=this.__hu.scrollHeight;
}},__hy:[],execute:function(){var d=this.__hv.value;

if(d==r){return;
}
if(d==B){return this.clear();
}var b=document.createElement(bd);
b.innerHTML=qx.log.appender.Util.escapeHTML(J+d);
b.className=bc;
this.__hy.push(d);
this.__hz=this.__hy.length;
this.__hu.appendChild(b);
this.__hw();

try{var c=window.eval(d);
}catch(bi){qx.log.Logger.error(bi);
}
if(c!==undefined){qx.log.Logger.debug(c);
}},__hA:function(e){this.__hu.style.height=(this.__ht.clientHeight-this.__ht.firstChild.offsetHeight-this.__ht.lastChild.offsetHeight)+k;
},__hB:function(e){var h=e.getKeyIdentifier();
if((h==O)||(h==w&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__ht){return;
}if(!qx.dom.Hierarchy.contains(this.__ht,e.getTarget())){return;
}if(h==l&&this.__hv.value!=r){this.execute();
this.__hv.value=r;
}if(h==p||h==L){this.__hz+=h==p?-1:1;
this.__hz=Math.min(Math.max(0,this.__hz),this.__hy.length);
var g=this.__hy[this.__hz];
this.__hv.value=g||r;
this.__hv.select();
}}},defer:function(a){qx.event.Registration.addListener(document.documentElement,n,a.__hB,a);
}});
})();
(function(){var l="'>",k="</span>",h="<span class='type-",g="</span> ",f="",e="[",d=", ",c="<span class='object'>",b="&gt;",a="<span class='object' title='Object instance with hash code: ",F="string",E="level-",D="0",C="&lt;",B="<span class='offset'>",A="}",z="qx.log.appender.Util",y="&amp;",x="&#39;",w="DIV",s="]",t="<span>",q="&quot;",r="<span class='type-key'>",o="{",p="</span>:<span class='type-",m="</span>: ",n="]</span>: ",u="map",v="?";
qx.Class.define(z,{statics:{toHtml:function(N){var X=[];
var U,W,P,R;
X.push(B,this.formatOffset(N.offset),g);

if(N.object){var O=N.win.qx.core.ObjectRegistry.fromHashCode(N.object);

if(O){X.push(a+O.$$hash+l,O.classname,e,O.$$hash,n);
}}else if(N.clazz){X.push(c+N.clazz.classname,m);
}var Q=N.items;

for(var i=0,V=Q.length;i<V;i++){U=Q[i];
W=U.text;

if(W instanceof Array){var R=[];

for(var j=0,T=W.length;j<T;j++){P=W[j];

if(typeof P===F){R.push(t+this.escapeHTML(P)+k);
}else if(P.key){R.push(r+P.key+p+P.type+l+this.escapeHTML(P.text)+k);
}else{R.push(h+P.type+l+this.escapeHTML(P.text)+k);
}}X.push(h+U.type+l);

if(U.type===u){X.push(o,R.join(d),A);
}else{X.push(e,R.join(d),s);
}X.push(k);
}else{X.push(h+U.type+l+this.escapeHTML(W)+g);
}}var S=document.createElement(w);
S.innerHTML=X.join(f);
S.className=E+N.level;
return S;
},formatOffset:function(G,length){var J=G.toString();
var H=(length||6)-J.length;
var I=f;

for(var i=0;i<H;i++){I+=D;
}return I+J;
},escapeHTML:function(M){return String(M).replace(/[<>&"']/g,this.__hC);
},__hC:function(K){var L={"<":C,">":b,"&":y,"'":x,'"':q};
return L[K]||v;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var f="qx.event.type.Data",e="qx.ui.container.Composite",d="addChildWidget",c="removeChildWidget";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(h){arguments.callee.base.call(this);

if(h!=null){this._setLayout(h);
}},events:{addChildWidget:f,removeChildWidget:f},members:{_afterAddChild:function(i){this.fireNonBubblingEvent(d,qx.event.type.Data,[i]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(c,qx.event.type.Data,[g]);
}},defer:function(a,b){qx.ui.core.MChildrenHandling.remap(b);
qx.ui.core.MLayoutHandling.remap(b);
}});
})();
(function(){var dm="execute",dl="/",dk="",dj="auto",di="current",dh=" ",dg="category",df='modelLink',de="modelLink",dd="completed",cm="failed",cl="white",ck="html",cj="~",ci="qooxdoo ",ch="all",cg=".",cf='\n',ce="monospace",cd="changeValue",du="div",dv="id",ds="node",dt=".src.js",dq=" Demo Browser ",dr=".html",dn="<script",dp="qx.theme.Modern",dw="horizontal",dx="javascript",cL="_",cK='</span>',cN="qx_srcview",cM="js",cP="\n",cO="outputviews.sourcepage.html.page",cR="outputviews.sourcepage.js.page",cQ="?",cJ="log",cI="separator-vertical",T="request",U="src",V="Demos",W='</div>',X="filled",Y="dblclick",ba="icon/22/actions/media-playback-start.png",bb="qx.version",bc="demobrowser.DemoBrowser",bd="HTML Code",dH="load",dG='</span>=<span class="string">',dF="Run previous demo",dE="changeSelection",dL="_history",dK='_cmdNamespacePollution',dJ="icon/22/apps/utilities-color-chooser.png",dI="Ctrl+N",dN="Previous",dM='.html',bC="Run",bD='<span class="html-tag-name">',bA="<div class='script'>The sample source will be displayed here.</div>",bB="\\",bG="f1",bH="Debug",bE="Display log file",bF="script/demobrowser.demo",by="icon/22/actions/media-playback-stop.png",bz="icon/22/apps/utilities-log-viewer.png",bl="Ctrl+O",bk="Log File",bn="Stop playback after current demo",bm="_blank",bh="qx.theme.Classic",bg="logelem",bj='<div class="script">',bi="logappender",bf="Choose theme",be="icon/22/apps/internet-web-browser.png",bM="f2",bN="<pre class='script'>",bO="JS Code",bP="icon/22/mimetypes/executable.png",bI="tree",bJ="</div></pre>",bK='_cmdRunSample',bL="Stop",bQ="left",bR="animation",bv="icon/22/actions/edit-redo.png",bu='_cmdDisposeSample',bt="toolbar",bs="icon/22/apps/office-spreadsheet.png",br="/demo/",bq="demo/welcome.html",bp='_cmdSampleInOwnWindow',bo='demo/',bx="</pre>",bw="_sampleToTreeNodeMap",bS="Debugging options",bT="Ctrl+P",bU="app-header",bV="<pre ><div class='script'>",bW="Dispose Demo",bX="Classic Theme",bY="Global Namespace Pollution",ca="treeview.flat",cb="Own Window",cc="Display HTML source",cq="main",cp='_cmdObjectSummary',co='/',cn="file:",cu='&gt;',ct='_cmdNextSample',cs="Run next demo",cr='_cmdPrevSample',cx=" Start",cv="\"",cE="Ctrl+Left",cF="demo-tree",cC="Display JavaScript source",cD="tests",cA="Next",cB="F5",cy="Modern Theme",cz="Open demo in new window",cG="interval",cH="string",cV="widgets",cU="<div class='script'>The sample JS source will be displayed here.</div>",cX="runbutton",cW="icon/22/actions/go-next.png",da="tree1",cY="Ctrl+Right",dc="?qx.theme=",db="Ctrl+D",cT="mainsplit",cS="icon/22/actions/go-previous.png",dA="Object Summary",dB="Demo Browser",dC=' <span class="keyword">',dD="Run the selected demo(s)",dy="8px",dz="Theme";
qx.Class.define(bc,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var dR=new qx.ui.layout.VBox;
dR.setSeparator(cI);
this.setLayout(dR);
this.add(this.__ia());
this.widgets={};
this.tests={};
this.__hD=dp;
this.__hF();
this.add(this.__hK());
var dU=new qx.ui.splitpane.Pane(dw);
this.mainsplit=dU;
var dS=new qx.ui.splitpane.Pane(dw);
dS.setDecorator(null);
this.infosplit=dS;
this.add(dU,{flex:1});
dU.add(this.__hQ(),0);
dU.add(dS,1);
var dW=this.__hL();
dS.add(dW,2);
var dP=this.__hO();
var dQ=this.__hP();
var dT=this.__hN();
var dV=new qx.ui.container.Stack;
dV.setDecorator(cq);
dV.add(dP);
dV.add(dQ);
dV.add(dT);
this.viewGroup.addListener(cd,function(e){switch(e.getData()){case ck:this.setSelected(dP);
dV.show();
break;
case cM:this.setSelected(dQ);
dV.show();
break;
case cJ:this.setSelected(dT);
dV.show();
break;
default:this.resetSelected();
dV.exclude();
}},dV);
dS.add(dV,1);
dV.resetSelected();
dV.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(T,function(e){var er=e.getData().replace(cj,dl);

if(this._currentSample!=er){this.setCurrentSample(er);
}},this);
this.__hE=new qx.event.Timer(250);
this.__hE.addListener(cG,this.__hT,this);
this.__hE.start();
},properties:{playDemos:{check:[ch,dg,di],init:di}},members:{__hF:function(){this._cmdObjectSummary=new qx.event.Command(bl);
this._cmdObjectSummary.addListener(dm,this.__hG,this);
this._cmdRunSample=new qx.event.Command(cB);
this._cmdRunSample.addListener(dm,this.runSample,this);
this._cmdPrevSample=new qx.event.Command(cE);
this._cmdPrevSample.addListener(dm,this.playPrev,this);
this._cmdNextSample=new qx.event.Command(cY);
this._cmdNextSample.addListener(dm,this.playNext,this);
this._cmdSampleInOwnWindow=new qx.event.Command(dI);
this._cmdSampleInOwnWindow.addListener(dm,this.__hH,this);
this._cmdDisposeSample=new qx.event.Command(db);
this._cmdDisposeSample.addListener(dm,this.__hI,this);
this._cmdNamespacePollution=new qx.event.Command(bT);
this._cmdNamespacePollution.addListener(dm,this.__hJ,this);
},__hG:function(){var eu=this.__hM.getWindow();

if(eu&&eu.qx){alert(eu.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__hH:function(){var dO=this.__hM.getWindow().location.href;
window.open(dO,bm);
},__hI:function(e){var fL=this.__hM.getWindow();

if(fL&&fL.qx){fL.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__hJ:function(e){var Q=this.__hM.getWindow();

if(Q&&Q.qx){alert(Q.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__hK:function(){var fD=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
fD.add(this._navPart);
this._runbutton=new qx.ui.toolbar.Button(this.tr(bC),ba);
this._runbutton.addListener(dm,this.runSample,this);
var fF=new qx.ui.tooltip.ToolTip(dD);
this._runbutton.setToolTip(fF);
this._navPart.add(this._runbutton);
this._stopbutton=new qx.ui.toolbar.Button(this.tr(bL),by);
this._stopbutton.addListener(dm,this.stopSample,this);
var fK=new qx.ui.tooltip.ToolTip(bn);
this._stopbutton.setToolTip(fK);
var fm=new qx.ui.toolbar.Button(this.tr(dN),cS);
fm.addListener(dm,this.playPrev,this);
var fC=new qx.ui.tooltip.ToolTip(dF);
fm.setToolTip(fC);
this._navPart.add(fm);
var fA=new qx.ui.toolbar.Button(this.tr(cA),cW);
fA.addListener(dm,this.playNext,this);
var fH=new qx.ui.tooltip.ToolTip(cs);
fA.setToolTip(fH);
this._navPart.add(fA);
var fI=new qx.ui.toolbar.Button(this.tr(cb),bv);
fI.addListener(dm,this.__hH,this);
var fy=new qx.ui.tooltip.ToolTip(cz);
fI.setToolTip(fy);
this._navPart.add(fI);
var fE=new qx.ui.toolbar.Part;
fD.add(fE);
var fz=new qx.ui.menu.Menu;
var fn=new qx.ui.menu.RadioButton(cy);
var fG=new qx.ui.menu.RadioButton(bX);
fn.setValue(dp);
fn.setChecked(true);
fG.setValue(bh);
var fr=new qx.ui.form.RadioGroup(fn,fG);
fr.addListener(cd,this.__hY,this);
fz.add(fn);
fz.add(fG);
var fp=new qx.ui.toolbar.MenuButton(this.tr(dz),dJ,fz);
var fo=new qx.ui.tooltip.ToolTip(bf);
fp.setToolTip(fo);
fE.add(fp);
var fs=new qx.ui.menu.Menu;
var ft=new qx.ui.menu.Button(this.tr(dA));
ft.setCommand(this._cmdObjectSummary);
fs.add(ft);
var fJ=new qx.ui.menu.Button(this.tr(bY));
fJ.setCommand(this._cmdNamespacePollution);
fs.add(fJ);
var fk=new qx.ui.menu.Button(this.tr(bW));
fk.setCommand(this._cmdDisposeSample);
fs.add(fk);
var fl=new qx.ui.toolbar.MenuButton(this.tr(bH),bs,fs);
var fu=new qx.ui.tooltip.ToolTip(bS);
fl.setToolTip(fu);
fE.add(fl);
var fx=new qx.ui.toolbar.Part;
fD.addSpacer();
fD.add(fx);
var fB=new qx.ui.toolbar.RadioButton(bd,be);
var fq=new qx.ui.tooltip.ToolTip(cc);
fB.setToolTip(fq);
var fj=new qx.ui.toolbar.RadioButton(bO,bP);
var fw=new qx.ui.tooltip.ToolTip(cC);
fj.setToolTip(fw);
var fi=new qx.ui.toolbar.RadioButton(bk,bz);
var fv=new qx.ui.tooltip.ToolTip(bE);
fi.setToolTip(fv);
fB.setValue(ck);
fj.setValue(cM);
fi.setValue(cJ);
fx.add(fB);
fx.add(fj);
fx.add(fi);
var fh=this.viewGroup=new qx.ui.form.RadioGroup;
fh.add(fB,fj,fi);
fh.resetSelected();
return fD;
},__hL:function(){var fg=new qx.ui.embed.Iframe();
fg.addListener(dH,this.__hS,this);
this.__hM=fg;
return fg;
},__hN:function(){this.f2=new qx.ui.embed.Html();
this.f2.setOverflow(dj,dj);
this.f2.setFont(ce);
this.f2.setBackgroundColor(cl);
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var P=document.createElement(du);
this.logelem=document.createElement(du);
this.logelem.style.padding=dy;
this.logappender.setElement(this.logelem);
P.appendChild(this.logelem);
this.f2.getContentElement().useElement(P);
return this.f2;
},__hO:function(){var es=new qx.ui.embed.Html(bA);
es.setOverflow(dj,dj);
es.setFont(ce);
es.setBackgroundColor(cl);
this.widgets[cO]=es;
es.getContentElement().setAttribute(dv,cN);
return es;
},__hP:function(){var R=new qx.ui.embed.Html(cU);
R.setOverflow(dj,dj);
R.setFont(ce);
R.setBackgroundColor(cl);
this.widgets[cR]=R;
R.getContentElement().setAttribute(dv,cN);
return R;
},__hQ:function(){var ef=new qx.ui.tree.Tree();
var ee=new qx.ui.tree.TreeFolder(V);
ef.setAppearance(cF);
ef.setRoot(ee);
ef.setSelected(ee);
this.tree=this.widgets[ca]=ef;
ef.addListener(dE,this.treeGetSelection,this);
ef.addListener(Y,function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return ef;
},treeGetSelection:function(e){var eW=this.tree.getSelected();
var eX=eW.getUserData(de);
this.tests.selected=this.tests.handler.getFullName(eX);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var ew=this._sampleToTreeNodeMap;
var eD=null;
var eG=null;
var eF=/\?autorun=true/.test(location.href);
var eC=this._history.getState();
var eA=eC.match(/([^~]+)~/);

if(eA){eD=eA[1];
}else{var ey=eC.match(/([^~][\w]*)/);

if(ey){eD=ey[1];

if(eF){this.setPlayDemos(dg);
}}else{eD=bR;

if(eF){this.setPlayDemos(ch);
}}}function eE(eY,fa){var fe=fa.getChildren();
var t,fb,ff;

for(var i=0;i<fe.length;i++){var fc=fe[i];

if(fc.hasChildren()){t=new qx.ui.tree.TreeFolder(ez.polish(fc.label));
t.setUserData(X,false);
t.setUserData(ds,fc);
eE(t,t.getUserData(ds));

if(fc.label==eD){eG=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(ez.polish(fc.label));
var fd=fc.pwd().slice(1).join(dl)+dl+fc.label;
ew[fd]=t;
}eY.add(t);
t.setUserData(de,fc);
fc.widgetLinkFull=t;
}}var eB=this.tests.handler.ttree;
var ez=this;
this.tree.setUserData(de,eB);
this.tree.getRoot().setOpen(true);
eE(this.tree.getRoot(),eB);

if(eG!=null){this.tree.setSelected(eG);
}},runSample:function(e){if(e&&e.getType()===dm){if(this.tests.selected===dk){this.setPlayDemos(ch);
}else if(this.tests.selected.indexOf(ck)>0){this.setPlayDemos(di);
}else{this.setPlayDemos(dg);
}}this._navPart.remove(this._runbutton);
this._navPart.addAt(this._stopbutton,0);

if(this.tests.selected!=dk){var O=this.tests.selected.replace(cg,dl);
this.setCurrentSample(O);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(di);
this._navPart.remove(this._stopbutton);
this._navPart.addAt(this._runbutton,0);
},setCurrentSample:function(eH){if(!eH){return;
}
if(!this._sampleToTreeNodeMap){return;
}var eI;
var eJ=this._sampleToTreeNodeMap[eH];

if(eJ){eJ.getTree().setSelected(eJ);
eI=bo+eH+dc+this.__hD;
}else{eI=this.defaultUrl;
}
if(this.__hM.getSource()==eI){this.__hM.reload();
}else{this.__hR=false;
this.__hM.setSource(eI);
}this._currentSample=eH;
this._currentSampleUrl=eI;
},__hS:function(){var D=this.__hM.getWindow();
var E=D.location.pathname+dk;
var M=E.indexOf(cQ);

if(M!=-1){E=E.substring(0,M+1);
}if(window.location.protocol==cn&&qx.bom.client.Engine.MSHTML==true&&qx.bom.client.Engine.VERSION<7){var I=E.split(bB);
}else{var I=E.split(dl);
}var L=this.__hM.getSource();

if(L!=null&&L!=this.defaultUrl){var C=D.location.href;
var J=C.indexOf(br)+6;
var F=C.indexOf(cQ);
F=F==-1?C.length:F;
var G=C.substring(J,F).split(dl);
var K=String.fromCharCode(187);

if(G.length==2){var A=G[0];
A=A.charAt(0).toUpperCase()+A.substring(1);
var H=G[1].replace(dr,dk).replace(cL,dh);
H=H.charAt(0).toUpperCase()+H.substring(1);
var B=ci+K+dq+K+dh+A+dh+K+dh+H;
}else{var B=ci+K+dq+K+cx;
}}if(this.getPlayDemos()!=di){if(!H){this.playNext();
}else{var self=this;
qx.event.Timer.once(this.playNext,self,5000);
}}else{this._navPart.remove(this._stopbutton);
this._navPart.addAt(this._runbutton,0);
}},__hT:function(e){var a=this.__hM.getWindow();

if(a&&a.qx&&a.qx.log&&a.qx.log.appender){if(!this.__hR){this.__hR=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();
a.qx.log.Logger.register(this.logappender);
this._history.addToHistory(this._currentSample.replace(dl,cj),this._currentSample);
if(this._currentSampleUrl!=this.defaultUrl){this.__hU(this._currentSampleUrl);
}}}else{this.__hR=false;
}},__hU:function(fM){if(typeof (fM)!=cH){return;
}var fO=new qx.io.remote.Request(fM);
fO.setTimeout(180000);
fO.setProhibitCaching(false);
fO.addListener(dd,function(g){var content=g.getContent();
if(content){var k=content.indexOf(dn,content.indexOf(dn)+7);
var v=content.indexOf(U,k);
var j=content.indexOf(cv,v+5);
var l=content.substring(v+5,j);
var p=l.substring(4,l.length-3)+dt;
var u=bF;
var o=fM.split(co);
var n=o[1];
var q=o[2];
q=q.substr(0,q.indexOf(dM));
u+=cg+n+cg+q+dt;
p=u;
var h=new qx.io.remote.Request(p);
h.setTimeout(180000);
h.setProhibitCaching(false);
h.addListener(dd,function(eS){var eT=eS.getContent();

if(eT){this.widgets[cR].setHtml(this.__hV(eT,dx));
}},this);
h.addListener(cm,function(S){this.error("Couldn't load file: "+fM);
},this);
h.send();
this.widgets[cO].setHtml(this.__hV(content));
}},this);
fO.addListener(cm,function(ed){this.error("Couldn't load file: "+fM);
},this);
var fN=new Date();
fO.send();
},dataLoader:function(eg){var ei=new qx.io.remote.Request(eg);
ei.setTimeout(180000);
ei.setProhibitCaching(false);
ei.addListener(dd,function(eU){var content=eU.getContent();
var eV=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(eV);
this.leftReloadTree();
var ej=this._history.getState();

if(ej){this.setCurrentSample(ej.replace(cj,dl));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
ei.addListener(cm,function(N){this.error("Couldn't load file: "+eg);
},this);
var eh=new Date();
ei.send();
},playPrev:function(e){this.setPlayDemos(di);
var em=this.tree.getSelected();

if(em){if(em.getUserData(df).getPrevSibling()){var el=em.getUserData(df).getPrevSibling().widgetLinkFull;

if(el){this.tree.setSelected(el);
this.runSample();
}}}},playNext:function(e){var ec=this.tree.getSelected();

if(ec){try{var dY=ec.getUserData(df).getChildren()[0].widgetLinkFull;
}catch(dX){try{var dY=ec.getUserData(df).getNextSibling().widgetLinkFull;
}catch(f){if(this.getPlayDemos()!==dg){try{var eb=ec.getTree();
var ea=eb.getNextSiblingOf(ec);
ea.setOpen(true);
var dY=ea.getChildren()[0];
}catch(ek){this.debug(ek);
}}}}
if(dY){this.tree.setSelected(dY);
this.runSample();
}else{this._navPart.remove(this._stopbutton);
this._navPart.addAt(this._runbutton,0);
}}},__hV:function(eK,eL){var eM=new qx.util.StringBuilder(bN);
var eO=[];
var eP=new qx.util.StringBuilder();
var eQ=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var eN=/^\s*<\/script>\s*$/i;
eK=eK.replace(/\r\n/g,cP).replace(/\r/g,cP);
var eO=eK.split(cf);
if(eL==dx){return bV+qx.dev.Tokenizer.javaScriptToHtml(eK)+bJ;
}
for(var i=0;i<eO.length;i++){if(eQ.exec(eO[i])){eM.add(this.__hW(qx.bom.String.escape(eP.get()+eO[i])));
eP.clear();
}else if(eN.exec(eO[i])){var eR=qx.dev.Tokenizer.javaScriptToHtml(eP.get());
eM.add(bj,eR,W);
eP.clear();
eP.add(eO[i],cf);
}else{eP.add(eO[i],cf);
}}eM.add(this.__hW(qx.bom.String.escape(eP.get())),bx);
return eM.get();
},__hW:function(x){var z=x;
function y(b){var s=new qx.util.StringBuilder(arguments[1],bD,arguments[2],cK);
var c;
var d=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){c=arguments[i];

if(c==dl){d=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(c))!=null){s.add(dC,r[1],dG,r[2].replace(/\s*$/,dk),cK);
}}}s.add((d?dl:dk));
}s.add(cu);
return s.get();
}z=z.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,y);
return z;
},polish:function(ev){return ev.replace(dr,dk).replace(cL,dh);
},__hX:function(){var w=this.__hM.getWindow();
var et;

if(w.qx&&w.qx.log&&w.qx.log.Logger){et=w.qx.log.Logger;
et.register(this.logappender);
et.clear();
et.unregister(this.logappender);
}},__hY:function(e){this.__hD=e.getData();
this.runSample();
},__ia:function(){var ep=new qx.ui.layout.HBox();
var en=new qx.ui.container.Composite(ep);
en.setAppearance(bU);
var eq=new qx.ui.basic.Label(dB);
var eo=new qx.ui.basic.Label(ci+qx.core.Setting.get(bb));
en.add(eq);
en.add(new qx.ui.core.Spacer,{flex:1});
en.add(eo);
return en;
},defaultUrl:bq},destruct:function(){this._disposeFields(cV,cD,bw,bI,bg);
this._disposeObjects(cT,da,bQ,cX,bt,bG,bM,dL,bi,cp,bK,cr,ct,bp,bu,dK);
}});
})();
(function(){var F="_applyLayoutChange",E="top",D="left",C="height",B="middle",A="__ie",z="Decorator",y="center",x="baseline",w="qx.debug",p="bottom",v="' is not supported by the VBox layout!",s="__ic",n="qx.ui.layout.VBox",m="__ib",r="flex",q="_applyReversed",t="Integer",k="The property '",u="right",o="Boolean";
qx.Class.define(n,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){arguments.callee.base.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignY(b);
}
if(c){this.setSeparator(c);
}},properties:{alignY:{check:[E,B,p],init:E,apply:F},alignX:{check:[D,y,u,x],init:D,apply:F},spacing:{check:t,init:0,apply:F},separator:{check:z,nullable:true,apply:F},reversed:{check:o,init:false,apply:q}},members:{__ib:null,__ic:null,__id:null,__ie:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__if:function(){var j=this._getLayoutChildren();
var length=j.length;
var e=false;
var d=this.__ib&&this.__ib.length!=length&&this.__ic&&this.__ib;
var g;
var f=d?this.__ib:new Array(length);
var h=d?this.__ic:new Array(length);
if(this.getReversed()){j=j.concat().reverse();
}for(var i=0;i<length;i++){g=j[i].getLayoutProperties();

if(g.height!=null){f[i]=parseFloat(g.height)/100;
}
if(g.flex!=null){h[i]=g.flex;
e=true;
}}if(!d){this.__ib=f;
this.__ic=h;
}this.__id=e;
this.__ie=j;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(w,{"on":function(bf,name,bg){this.assert(name===r||name===C,k+name+v);

if(name==C){this.assertMatch(bg,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(bg);
this.assert(bg>=0);
}},"off":null}),renderLayout:function(G,H){if(this._invalidChildrenCache){this.__if();
}var O=this.__ie;
var length=O.length;
var Y=qx.ui.layout.Util;
var X=this.getSpacing();
var bc=this.getSeparator();

if(bc){var L=Y.computeVerticalSeparatorGaps(O,X,bc);
}else{var L=Y.computeVerticalGaps(O,X,true);
}var i,J,K,S;
var T=[];
var ba=L;

for(i=0;i<length;i+=1){S=this.__ib[i];
K=S!=null?Math.floor((H-L)*S):O[i].getSizeHint().height;
T.push(K);
ba+=K;
}if(this.__id&&ba!=H){var Q={};
var W,bb;

for(i=0;i<length;i+=1){W=this.__ic[i];

if(W>0){P=O[i].getSizeHint();
Q[i]={min:P.minHeight,value:T[i],max:P.maxHeight,flex:W};
}}var M=Y.computeFlexOffsets(Q,H,ba);

for(i in M){bb=M[i].offset;
T[i]+=bb;
ba+=bb;
}}var top=O[0].getMarginTop();
if(ba<H&&this.getAlignY()!=E){top=H-ba;

if(this.getAlignY()===B){top=Math.round(top/2);
}}var P,be,U,K,R,V,N;
var X=this.getSpacing();
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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__if();
}var bm=qx.ui.layout.Util;
var bs=this.__ie;
var bk=0,bl=0;
var bh=0,bn=0;
var bq,bi,br;
for(var i=0,l=bs.length;i<l;i+=1){bq=bs[i];
bi=bq.getSizeHint();
bl+=bi.height;
bk+=this.__ic[i]>0?bi.minHeight:bi.height;
br=bq.getMarginLeft()+bq.getMarginRight();
if((bi.width+br)>bn){bn=bi.width+br;
}if((bi.minWidth+br)>bh){bh=bi.minWidth+br;
}}var bj=this.getSpacing();
var bp=this.getSeparator();

if(bp){var bo=bm.computeVerticalSeparatorGaps(bs,bj,bp);
}else{var bo=bm.computeVerticalGaps(bs,bj,true);
}return {minHeight:bk+bo,height:bl+bo,minWidth:bh,width:bn};
}},destruct:function(){this._disposeFields(m,s,A);
}});
})();
(function(){var w="active",v="splitter",u="slider",t="horizontal",s="vertical",r="mousedown",q="mouseout",p="qx.client",o="height",n="row-resize",K="mousemove",J="move",I="maxHeight",H="width",G="_applyOrientation",F="splitpane",E="qx.ui.splitpane.Pane",D="minHeight",C="knob",B="mouseup",z="minWidth",A="losecapture",x="col-resize",y="maxWidth";
qx.Class.define(E,{extend:qx.ui.core.Widget,construct:function(m){arguments.callee.base.call(this);
if(m){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(r,this._onMouseDown);
this.addListener(B,this._onMouseUp);
this.addListener(K,this._onMouseMove);
this.addListener(q,this._onMouseOut);
this.addListener(A,this._onMouseUp);
},properties:{appearance:{refine:true,init:F},orientation:{init:t,check:[t,s],apply:G}},members:{__ig:null,__ih:null,__ii:null,__ij:null,__ik:null,__il:null,__im:null,_createChildControlImpl:function(k){var l;

switch(k){case u:l=new qx.ui.splitpane.Slider(this);
l.exclude();
this._add(l,{type:k});
break;
case v:l=new qx.ui.splitpane.Splitter(this);
this._add(l,{type:k});
l.addListener(J,this._onSplitterMove,this);
break;
}return l||arguments.callee.base.call(this,k);
},_applyOrientation:function(c,d){var f=this.getChildControl(u);
var i=this.getChildControl(v);
this.__ik=c===t;
var h=this._getLayout();

if(h){h.dispose();
}var g=c===s?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(g);
i.replaceState(d,c);
i.getChildControl(C).replaceState(d,c);
f.replaceState(d,c);
},add:function(a,b){if(b==null){this._add(a);
}else{this._add(a,{flex:b});
}},remove:function(j){this._remove(j);
},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}var br=this.getChildControl(v);

if(!br.hasState(w)){return;
}var bt=br.getContainerLocation();
var bs=this.getContentLocation();
this.__ig=this.__ik?e.getDocumentLeft()-bt.left+bs.left:e.getDocumentTop()-bt.top+bs.top;
var bv=this.getChildControl(u);
var bu=br.getBounds();
bv.setUserBounds(bu.left,bu.top,bu.width,bu.height);
bv.setZIndex(br.getZIndex()+1);
bv.show();
this.__ih=true;
this.capture();
},_onMouseMove:function(e){this.__ii=e.getDocumentLeft();
this.__ij=e.getDocumentTop();
if(this.__ih){this.__iq();
var bh=this.getChildControl(u);
var bi=this.__il;

if(this.__ik){bh.setDomLeft(bi);
}else{bh.setDomTop(bi);
}}else{this.__ip();
}},_onMouseOut:function(e){this.__ii=-1;
this.__ij=-1;
this.__ip();
},_onMouseUp:function(e){if(!this.__ih){return;
}this.__in();
var bd=this.getChildControl(u);
bd.exclude();
delete this.__ih;
this.releaseCapture();
this.__ip();
},_onSplitterMove:function(){this.__ip();
},__in:function(){var bn=this.__il;
var bk=this.__im;

if(bn==null){return;
}var bp=this._getChildren();
var bo=bp[2];
var bl=bp[3];
var bm=bo.getLayoutProperties().flex;
var bq=bl.getLayoutProperties().flex;
if((bm!=0)&&(bq!=0)){bo.setLayoutProperties({flex:bn});
bl.setLayoutProperties({flex:bk});
}else{if(this.__ik){bo.setWidth(bn);
bl.setWidth(bk);
}else{bo.setHeight(bn);
bl.setHeight(bk);
}}},__io:function(){var V=this.getChildControl(v);
var X=V.getBounds();
var ba=V.getContainerLocation();
var W=6;
if(!ba){return;
}var bb=this.__ii;
var bc=X.width;
var Y=ba.left;

if(bc<W){Y-=Math.floor((W-bc)/2);
bc=W;
}
if(bb<Y||bb>(Y+bc)){return false;
}var bb=this.__ij;
var bc=X.height;
var Y=ba.top;

if(bc<W){Y-=Math.floor((W-bc)/2);
bc=W;
}
if(bb<Y||bb>(Y+bc)){return false;
}return true;
},__ip:qx.core.Variant.select(p,{"opera":function(){var bj=this.getChildControl(v);

if(this.__ih||this.__io()){bj.addState(w);
}else if(bj.hasState(w)){bj.removeState(w);
}},"default":function(){var bf=this.getChildControl(v);
var bg=this.getApplicationRoot();
if(this.__ih||this.__io()){var be=this.__ik?x:n;
this.setCursor(be);
bg.setGlobalCursor(be);
bf.addState(w);
}else if(bf.hasState(w)){this.resetCursor();
bg.resetGlobalCursor();
bf.removeState(w);
}}}),__iq:function(){if(this.__ik){var N=z,U=H,O=y,S=this.__ii;
}else{var N=D,U=o,O=I,S=this.__ij;
}var T=this._getChildren();
var L=T[2].getSizeHint();
var Q=T[3].getSizeHint();
var R=T[2].getBounds()[U]+T[3].getBounds()[U];
var P=S-this.__ig;
var M=R-P;
if(P<L[N]){M-=L[N]-P;
P=L[N];
}else if(M<Q[N]){P-=Q[N]-M;
M=Q[N];
}if(P>L[O]){M+=P-L[O];
P=L[O];
}else if(M>Q[O]){P+=M-Q[O];
M=Q[O];
}this.__il=P;
this.__im=M;
}}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
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
(function(){var H="_applyLayoutChange",G="left",F="width",E="center",D="top",C="__is",B="Decorator",A="__ir",z="middle",y="baseline",r="qx.debug",x="bottom",u="' is not supported by the HBox layout!",p="Boolean",o="flex",t="right",s="_applyReversed",v="Integer",n="The property '",w="__iu",q="qx.ui.layout.HBox";
qx.Class.define(q,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){arguments.callee.base.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignX(b);
}
if(c){this.setSeparator(c);
}},properties:{alignX:{check:[G,E,t],init:G,apply:H},alignY:{check:[D,z,x,y],init:D,apply:H},spacing:{check:v,init:0,apply:H},separator:{check:B,nullable:true,apply:H},reversed:{check:p,init:false,apply:s}},members:{__ir:null,__is:null,__it:null,__iu:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__iv:function(){var j=this._getLayoutChildren();
var length=j.length;
var f=false;
var d=this.__ir&&this.__ir.length!=length&&this.__is&&this.__ir;
var g;
var e=d?this.__ir:new Array(length);
var h=d?this.__is:new Array(length);
if(this.getReversed()){j=j.concat().reverse();
}for(var i=0;i<length;i++){g=j[i].getLayoutProperties();

if(g.width!=null){e[i]=parseFloat(g.width)/100;
}
if(g.flex!=null){h[i]=g.flex;
f=true;
}}if(!d){this.__ir=e;
this.__is=h;
}this.__it=f;
this.__iu=j;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(r,{"on":function(k,name,m){this.assert(name===o||name===F,n+name+u);

if(name==F){this.assertMatch(m,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(m);
this.assert(m>=0);
}},"off":null}),renderLayout:function(U,V){if(this._invalidChildrenCache){this.__iv();
}var bc=this.__iu;
var length=bc.length;
var bl=qx.ui.layout.Util;
var bk=this.getSpacing();
var bo=this.getSeparator();

if(bo){var Y=bl.computeHorizontalSeparatorGaps(bc,bk,bo);
}else{var Y=bl.computeHorizontalGaps(bc,bk,true);
}var i,W,bi,bh;
var bn=[];
var bd=Y;

for(i=0;i<length;i+=1){bh=this.__ir[i];
bi=bh!=null?Math.floor((U-Y)*bh):bc[i].getSizeHint().width;
bn.push(bi);
bd+=bi;
}if(this.__it&&bd!=U){var bf={};
var bj,bm;

for(i=0;i<length;i+=1){bj=this.__is[i];

if(bj>0){be=bc[i].getSizeHint();
bf[i]={min:be.minWidth,value:bn[i],max:be.maxWidth,flex:bj};
}}var ba=bl.computeFlexOffsets(bf,U,bd);

for(i in ba){bm=ba[i].offset;
bn[i]+=bm;
bd+=bm;
}}var bs=bc[0].getMarginLeft();
if(bd<U&&this.getAlignX()!=G){bs=U-bd;

if(this.getAlignX()===E){bs=Math.round(bs/2);
}}var be,top,X,bi,bb,bq,bg;
var bk=this.getSpacing();
this._clearSeparators();
if(bo){var bp=qx.theme.manager.Decoration.getInstance().resolve(bo).getInsets();
var br=bp.left+bp.right;
}for(i=0;i<length;i+=1){W=bc[i];
bi=bn[i];
be=W.getSizeHint();
bq=W.getMarginTop();
bg=W.getMarginBottom();
X=Math.max(be.minHeight,Math.min(V-bq-bg,be.maxHeight));
top=bl.computeVerticalAlignOffset(W.getAlignY()||this.getAlignY(),X,V,bq,bg);
if(i>0){if(bo){bs+=bb+bk;
this._renderSeparator(bo,{left:bs,top:0,width:br,height:V});
bs+=br+bk+W.getMarginLeft();
}else{bs+=bl.collapseMargins(bk,bb,W.getMarginLeft());
}}W.renderLayout(bs,top,bi,X);
bs+=bi;
bb=W.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__iv();
}var N=qx.ui.layout.Util;
var T=this.__iu;
var I=0,O=0;
var L=0,M=0;
var R,J,S;
for(var i=0,l=T.length;i<l;i+=1){R=T[i];
J=R.getSizeHint();
O+=J.width;
I+=this.__is[i]>0?J.minWidth:J.width;
S=R.getMarginTop()+R.getMarginBottom();
if((J.height+S)>M){M=J.height+S;
}if((J.minHeight+S)>L){L=J.minHeight+S;
}}var K=this.getSpacing();
var Q=this.getSeparator();

if(Q){var P=N.computeHorizontalSeparatorGaps(T,K,Q);
}else{var P=N.computeHorizontalGaps(T,K,true);
}return {minWidth:I+P,width:O+P,minHeight:L,height:M};
}},destruct:function(){this._disposeFields(A,C,w);
}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.VLayout",c="qx.debug",b="' is not supported by the split layout!",a="The property '";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(N,name,O){this.assert(name===g||name===f,a+name+b);

if(name==f){this.assertNumber(O);
}
if(name==g){this.assertString(O);
}},"off":null}),renderLayout:function(t,u){var K=this._getLayoutChildren();
var length=K.length;
var G,J;
var w,v,E,x;

for(var i=0;i<length;i++){G=K[i];
J=G.getLayoutProperties().type;

if(J===e){v=G;
}else if(J===h){E=G;
}else if(!w){w=G;
}else{x=G;
}}
if(w&&x){var M=w.getLayoutProperties().flex;
var z=x.getLayoutProperties().flex;

if(M==null){M=1;
}
if(z==null){z=1;
}var L=w.getSizeHint();
var C=v.getSizeHint();
var D=x.getSizeHint();
var y=L.height;
var H=C.height;
var I=D.height;

if(M>0&&z>0){var A=M+z;
var B=u-H;
var y=Math.round((B/A)*M);
var I=B-y;
var F=qx.ui.layout.Util.arrangeIdeals(L.minHeight,y,L.maxHeight,D.minHeight,I,D.maxHeight);
y=F.begin;
I=F.end;
}else if(M>0){y=u-H-I;

if(y<L.minHeight){y=L.minHeight;
}
if(y>L.maxHeight){y=L.maxHeight;
}}else if(z>0){I=u-y-H;

if(I<D.minHeight){I=D.minHeight;
}
if(I>D.maxHeight){I=D.maxHeight;
}}w.renderLayout(0,0,t,y);
v.renderLayout(0,y,t,H);
x.renderLayout(0,y+H,t,I);
}else{v.renderLayout(0,0,0,0);
if(w){w.renderLayout(0,0,t,u);
}else if(x){x.renderLayout(0,0,t,u);
}}},_computeSizeHint:function(){var s=this._getLayoutChildren();
var length=s.length;
var l,k,r;
var m=0,o=0,n=0;
var p=0,q=0,j=0;

for(var i=0;i<length;i++){l=s[i];
r=l.getLayoutProperties();
if(r.type===h){continue;
}k=l.getSizeHint();
m+=k.minHeight;
o+=k.height;
n+=k.maxHeight;

if(k.minWidth>p){p=k.minWidth;
}
if(k.width>q){q=k.width;
}
if(k.maxWidth>j){j=k.maxWidth;
}}return {minHeight:m,height:o,maxHeight:n,minWidth:p,width:q,maxWidth:j};
}}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.HLayout",c="' is not supported by the split layout!",b="The property '",a="qx.debug";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(a,{"on":function(t,name,u){this.assert(name===g||name===f,b+name+c);

if(name==f){this.assertNumber(u);
}
if(name==g){this.assertString(u);
}},"off":null}),renderLayout:function(v,w){var M=this._getLayoutChildren();
var length=M.length;
var J,L;
var y,x,G,z;

for(var i=0;i<length;i++){J=M[i];
L=J.getLayoutProperties().type;

if(L===e){x=J;
}else if(L===h){G=J;
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
}}},_computeSizeHint:function(){var s=this._getLayoutChildren();
var length=s.length;
var l,k,r;
var p=0,q=0,j=0;
var m=0,o=0,n=0;

for(var i=0;i<length;i++){l=s[i];
r=l.getLayoutProperties();
if(r.type===h){continue;
}k=l.getSizeHint();
p+=k.minWidth;
q+=k.width;
j+=k.maxWidth;

if(k.minHeight>m){m=k.minHeight;
}
if(k.height>o){o=k.height;
}
if(k.maxHeight>n){n=k.maxHeight;
}}return {minWidth:p,width:q,maxWidth:j,minHeight:m,height:o,maxHeight:n};
}}});
})();
(function(){var j="Boolean",h="qx.ui.container.Stack",g="change",f="_applyDynamic",e="qx.ui.core.Widget",d="_applySelected";
qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
},properties:{dynamic:{check:j,init:false,apply:f},selected:{check:e,apply:d,event:g,nullable:true}},members:{_applyDynamic:function(t){var v=this._getChildren();
var u=this.getSelected();
var w;

for(var i=0,l=v.length;i<l;i++){w=v[i];

if(w!=u){if(t){v[i].exclude();
}else{v[i].hide();
}}}},_applySelected:function(b,c){if(c){if(this.isDynamic()){c.exclude();
}else{c.hide();
}}
if(b){b.show();
}},add:function(k){this._add(k);
var m=this.getSelected();

if(!m){this.setSelected(k);
}else if(m!==k){if(this.isDynamic()){k.exclude();
}else{k.hide();
}}},remove:function(r){this._remove(r);

if(this.getSelected()===r){var s=this._getChildren()[0];

if(s){this.setSelected(s);
}else{this.resetSelected();
}}},indexOf:function(a){return this._indexOf(a);
},getChildren:function(){return this._getChildren();
},previous:function(){var z=this.getSelected();
var x=this._indexOf(z)-1;
var A=this._getChildren();

if(x<0){x=A.length-1;
}var y=A[x];
this.setSelected(y);
},next:function(){var o=this.getSelected();
var n=this._indexOf(o)+1;
var p=this._getChildren();
var q=p[n]||p[0];
this.setSelected(q);
}}});
})();
(function(){var d="' is not supported by the Grow layout!",c="qx.ui.layout.Grow",b="qx.debug",a="The property '";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(e,name,f){this.assert(false,a+name+d);
},"off":null}),renderLayout:function(g,h){var n=this._getLayoutChildren();
var m,o,k,j;
for(var i=0,l=n.length;i<l;i++){m=n[i];
o=m.getSizeHint();
k=g;

if(k<o.minWidth){k=o.minWidth;
}else if(k>o.maxWidth){k=o.maxWidth;
}j=h;

if(j<o.minHeight){j=o.minHeight;
}else if(j>o.maxHeight){j=o.maxHeight;
}m.renderLayout(0,0,k,j);
}},_computeSizeHint:function(){var r=this._getLayoutChildren();
var p,t;
var s=0,q=0;
for(var i=0,l=r.length;i<l;i++){p=r[i];
t=p.getSizeHint();
s=Math.max(s,t.width);
q=Math.max(q,t.height);
}return {width:s,height:q};
}}});
})();
(function(){var y="qx.client",x="#",w="",v="-1000px",u="request",t="__ix",s="qx.event.type.Data",r="Number",q="qx/static/blank.html",p="interval",i="_applyTimeoutInterval",o="state",l='<html><body><div id="state">',g="hidden",f="__iw",k="iframe",j="__iA",m="qx.bom.History",e='</div></body></html>',n="singleton",h="absolute";
qx.Class.define(m,{type:n,extend:qx.core.Object,construct:qx.core.Variant.select(y,{"mshtml":function(){arguments.callee.base.call(this);
this.__iw=document.createElement(k);
this.__iw.style.visibility=g;
this.__iw.style.position=h;
this.__iw.style.left=v;
this.__iw.style.top=v;
this.__iw.src=qx.util.ResourceManager.toUri(q);
document.body.appendChild(this.__iw);
this.__ix={};
this.__iy=decodeURIComponent(this.__iD());
this.__iz=decodeURIComponent(this.__iD());
this.__iG(function(){this.__iF(this.__iy);
this.__iC();
},this);
},"default":function(){arguments.callee.base.call(this);
this.__ix={};
this.__iy=this.__iE();
this.__iC();
}}),events:{"request":s},properties:{timeoutInterval:{check:r,init:100,apply:i}},members:{__iw:null,__ix:null,__iy:null,__iA:null,__iz:null,addToHistory:function(G,H){if(H!=null){document.title=H;
this.__ix[G]=H;
}
if(G!=this.__iy){top.location.hash=x+encodeURIComponent(G);
this.__iF(G);
}},getState:function(){return this.__iy;
},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_applyTimeoutInterval:function(J){this.__iA.setInterval(J);
},__iB:function(d){this.__iy=d;
this.fireDataEvent(u,d);

if(this.__ix[d]!=null){document.title=this.__ix[d];
}},__iC:function(){this.__iA=new qx.event.Timer(this.getTimeoutInterval());
this.__iA.addListener(p,function(e){var I=this.__iE();

if(I!=this.__iy){this.__iB(I);
}},this);
this.__iA.start();
},__iD:function(){var E=top.location.href;
var F=E.indexOf(x);
return F>=0?E.substring(F+1):w;
},__iE:qx.core.Variant.select(y,{"mshtml":function(){var B=decodeURIComponent(this.__iD());

if(B!=this.__iz){this.__iz=B;
this.__iF(B);
return B;
}var z=this.__iw.contentWindow.document;
var C=z.getElementById(o);
var A=C?decodeURIComponent(C.innerText):w;
return A;
},"default":function(){return decodeURIComponent(this.__iD());
}}),__iF:qx.core.Variant.select(y,{"mshtml":function(a){var c=l+encodeURIComponent(a)+e;

try{var b=this.__iw.contentWindow.document;
b.open();
b.write(c);
b.close();
}catch(D){return false;
}return true;
},"default":function(K){qx.event.Timer.once(function(){top.location.hash=x+encodeURIComponent(K);
},this,0);
return true;
}}),__iG:qx.core.Variant.select(y,{"mshtml":function(L,M){if(!this.__iw.contentWindow||!this.__iw.contentWindow.document){qx.event.Timer.once(function(){this.__iG(L,M);
},this,10);
return;
}L.call(M||window);
},"default":null})},destruct:function(){this.__iA.stop();
this._disposeObjects(j);
this._disposeFields(f,t);
}});
})();
(function(){var t="Unidentified",s="+",r="keydown",q="0",p="Control",o="9",n="short",m="-",l="PageUp",k="Escape",be="Boolean",bd="qx.event.type.Data",bc="_applyShortcut",bb="PrintScreen",ba="NumLock",Y="A",X="Z",W="5",V="8",U="execute",A="Meta",B="PageDown",y="__iI",z="qx.debug",w="Shift",x="You can only specify one non modifier key!",u="3",v="/",C="_applyEnabled",D="String",K="changeEnabled",I="*",O="__iH",M="Not a valid key name for a command: ",Q="6",P="4",F="Alt",T="2",S="Whitespaces are not allowed within shortcuts",R="Delete",E="1",G="7",H="qx.event.Command",J="a",L="z",N="on";
qx.Class.define(H,{extend:qx.core.Object,construct:function(bf){arguments.callee.base.call(this);
this.__iH={};
this.__iI=null;

if(bf!=null){this.setShortcut(bf);
}if(qx.core.Variant.isSet(z,N)){if(this.__iH.Alt&&this.__iI&&this.__iI.length==1){if((this.__iI>=Y&&this.__iI<=X)||(this.__iI>=q&&this.__iI<=o)){this.warn("A shortcut containing Alt and a letter or number will not work under OS X!");
}}}this.initEnabled();
},events:{"execute":bd},properties:{enabled:{init:true,check:be,event:K,apply:C},shortcut:{check:D,apply:bc,nullable:true}},members:{execute:function(bg){this.fireDataEvent(U,bg);
},__iJ:function(event){if(this.getEnabled()&&this.matchesKeyEvent(event)){this.execute(event.getTarget());
event.preventDefault();
event.stopPropagation();
}},_applyEnabled:function(bn,bo){if(bn){qx.event.Registration.addListener(document.documentElement,r,this.__iJ,this);
}else{qx.event.Registration.removeListener(document.documentElement,r,this.__iJ,this);
}},_applyShortcut:function(bh,bi){if(bh){if(bh.search(/[\s]+/)!=-1){var bl=S;
this.error(bl);
throw bl;
}this.__iH={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__iI=null;
var bj;
var a=[];

while(bh.length>0&&bj!=-1){bj=bh.search(/[-+]+/);
a.push((bh.length==1||bj==-1)?bh:bh.substring(0,bj));
bh=bh.substring(bj+1);
}var bk=a.length;

for(var i=0;i<bk;i++){var bm=this.__iL(a[i]);

switch(bm){case p:case w:case A:case F:this.__iH[bm]=true;
break;
case t:var bl=M+a[i];
this.error(bl);
throw bl;
default:if(this.__iI){var bl=x;
this.error(bl);
throw bl;
}this.__iI=bm;
}}}return true;
},matchesKeyEvent:function(e){var f=this.__iI;

if(!f){return ;
}if((!this.__iH.Shift&&e.isShiftPressed())||(this.__iH.Shift&&!e.isShiftPressed())||(!this.__iH.Control&&e.isCtrlPressed())||(this.__iH.Control&&!e.isCtrlPressed())||(!this.__iH.Meta&&e.isMetaPressed())||(this.__iH.Meta&&!e.isMetaPressed())||(!this.__iH.Alt&&e.isAltPressed())||(this.__iH.Alt&&!e.isAltPressed())){return false;
}
if(f==e.getKeyIdentifier()){return true;
}return false;
},__iK:{esc:k,ctrl:p,print:bb,del:R,pageup:l,pagedown:B,numlock:ba,numpad_0:q,numpad_1:E,numpad_2:T,numpad_3:u,numpad_4:P,numpad_5:W,numpad_6:Q,numpad_7:G,numpad_8:V,numpad_9:o,numpad_divide:v,numpad_multiply:I,numpad_minus:m,numpad_plus:s},__iL:function(g){var h=qx.event.handler.Keyboard;
var j=t;

if(h.isValidKeyIdentifier(g)){return g;
}
if(g.length==1&&g>=J&&g<=L){return g.toUpperCase();
}g=g.toLowerCase();
var j=this.__iK[g]||qx.lang.String.firstUp(g);

if(h.isValidKeyIdentifier(j)){return j;
}else{return t;
}},toString:function(){var d=this.__iI;
var c=[];

for(var b in this.__iH){if(this.__iH[b]){c.push(qx.locale.Key.getKeyName(n,b));
}}
if(d){c.push(qx.locale.Key.getKeyName(n,d));
}return c.join(s);
}},destruct:function(){this.setEnabled(false);
this._disposeFields(O,y);
}});
})();
(function(){var f="qx.bom.client.Locale",e="-",d="";
qx.Bootstrap.define(f,{statics:{LOCALE:"",VARIANT:"",__iM:function(){var a=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var c=d;
var b=a.indexOf(e);

if(b!=-1){c=a.substr(b+1);
a=a.substr(0,b);
}this.LOCALE=a;
this.VARIANT=c;
}},defer:function(g){g.__iM();
}});
})();
(function(){var g="on",f="qx.debug",e="Invalid argument 'txt'.",d="qx.type.BaseString",c="string";
qx.Class.define(d,{extend:String,construct:function(b){if(qx.core.Variant.isSet(f,g)){this.assertType(b,c,e);
}this.__iN=b;
},members:{__iN:null,toString:function(){return this.__iN;
},setValue:function(a){this.__iN=a;
},valueOf:function(){return this.__iN;
},toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},base:function(i,j){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(h){if(qx.core.Variant.isSet(f,g)){qx.Class.include(h,qx.core.MAssert);
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__iO=c;
this.__iP=d;
},members:{__iO:null,__iP:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__iO,this.__iP);
}}});
})();
(function(){var J="_",I="",H="qx.dynlocale",G="on",F="_applyLocale",E="changeLocale",D="C",C="__iR",B="__iQ",A="qx.locale.Manager",y="String",z="singleton";
qx.Class.define(A,{type:z,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iQ=qx.$$translations||{};
this.__iR=qx.$$locales||{};
var x=qx.bom.client.Locale;
var v=x.LOCALE;
var w=x.VARIANT;

if(w!==I){v+=J+w;
}this.setLocale(v||this.__iS);
},statics:{tr:function(s,t){var u=qx.lang.Array.fromArguments(arguments);
u.splice(0,1);
return qx.locale.Manager.getInstance().translate(s,u);
},trn:function(e,f,g,h){var j=qx.lang.Array.fromArguments(arguments);
j.splice(0,3);
if(g!=1){return qx.locale.Manager.getInstance().translate(f,j);
}else{return qx.locale.Manager.getInstance().translate(e,j);
}},trc:function(R,S,T){var U=qx.lang.Array.fromArguments(arguments);
U.splice(0,2);
return qx.locale.Manager.getInstance().translate(S,U);
},marktr:function(V){return V;
}},properties:{locale:{check:y,nullable:true,apply:F,event:E}},members:{__iS:D,__iT:null,__iU:null,__iQ:null,__iR:null,getLanguage:function(){return this.__iU;
},getTerritory:function(){return this.getLocale().split(J)[1]||I;
},getAvailableLocales:function(){var Q=[];

for(var P in this.__iR){if(P!=this.__iS){Q.push(P);
}}return Q;
},__iV:function(M){var O;
var N=M.indexOf(J);

if(N==-1){O=M;
}else{O=M.substring(0,N);
}return O;
},_applyLocale:function(K,L){this.__iT=K;
this.__iU=this.__iV(K);
},addTranslation:function(a,b){var c=this.__iQ;

if(c[a]){for(var d in b){c[a][d]=b[d];
}}else{c[a]=b;
}},translate:function(k,l,m){var r;
var p=this.__iQ;

if(!p){return k;
}
if(m){var o=this.__iV(m);
}else{m=this.__iT;
o=this.__iU;
}
if(!r&&p[m]){r=p[m][k];
}
if(!r&&p[o]){r=p[o][k];
}
if(!r&&p[this.__iS]){r=p[this.__iS][k];
}
if(!r){r=k;
}
if(l.length>0){var n=[];

for(var i=0;i<l.length;i++){var q=l[i];

if(q.translate){n[i]=q.translate();
}else{n[i]=q;
}}r=qx.lang.String.format(r,n);
}
if(qx.core.Variant.isSet(H,G)){r=new qx.locale.LocalizedString(r,k,l);
}return r;
},localize:function(W,X,Y){var be;
var bc=this.__iR;

if(!bc){return W;
}
if(Y){var bb=this.__iV(Y);
}else{Y=this.__iT;
bb=this.__iU;
}
if(!be&&bc[Y]){be=bc[Y][W];
}
if(!be&&bc[bb]){be=bc[bb][W];
}
if(!be&&bc[this.__iS]){be=bc[this.__iS][W];
}
if(!be){be=W;
}
if(X.length>0){var ba=[];

for(var i=0;i<X.length;i++){var bd=X[i];

if(bd.translate){ba[i]=bd.translate();
}else{ba[i]=bd;
}}be=qx.lang.String.format(be,ba);
}
if(qx.core.Variant.isSet(H,G)){be=new qx.locale.LocalizedString(be,W,X);
}return be;
}},destruct:function(){this._disposeFields(B,C);
}});
})();
(function(){var bx="End",bw="Left",bv="Meta",bu="Pause",bt="Down",bs="Home",br="Apps",bq="Win",bp="Right",bo="Backspace",bd="Space",bc="Up",bb="Shift",ba="Enter",Y="Scroll",X="Alt",W="key_full_Meta",V="PrintScreen",U="NumLock",T="Escape",bE="key_short_Alt",bF="key_short_Insert",bC="Del",bD="Num",bA="key_full_Enter",bB="key_full_Control",by="qx.locale.Key",bz="Tabulator",bG="key_full_Space",bH="key_short_Meta",bh="key_short_PageUp",bg="key_short_Pause",bj="key_full_Down",bi="key_short_Apps",bl="key_short_Win",bk="key_full_Right",bn="key_short_Up",bm="key_full_PageDown",bf="key_full_Alt",be="PgDn",a="key_full_Escape",b="key_full_Insert",c="Ctrl",d="key_short_Space",e="key_short_Backspace",f="key_short_Home",g="full",h="key_short_Down",i="PgUp",j="key_short_CapsLock",bL="PageUp",bK="key_full_Up",bJ="key_full_Home",bI="key_full_Backspace",bP="PageDown",bO="CapsLock",bN="Ins",bM="Control",bR="key_short_PrintScreen",bQ="Tab",D="key_full_Apps",E="key_short_Tab",B="key_short_End",C="_",H="Caps",I="key_short_NumLock",F="key_full_Scroll",G="key_short_Left",z="key_short_Scroll",A="on",r="key_",q="key_full_Pause",t="key_short_Right",s="key_full_PrintScreen",n="key_full_Win",m="short",p="key_short_Shift",o="key_short_PageDown",l="key_short_Enter",k="key_short_Control",N="qx.debug",O="Insert",P="key_short_Escape",Q="key_full_Tab",J="Print",K="Delete",L="key_full_CapsLock",M="Esc",R="key_short_Delete",S="key_full_PageUp",y="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(by,{statics:{getKeyName:function(bX,bY,ca){if(qx.core.Variant.isSet(N,A)){qx.core.Assert.assertInArray(bX,[m,g]);
}var cc=r+bX+C+bY;
var cb=qx.locale.Manager.getInstance().translate(cc,[],ca);

if(cb==cc){return qx.locale.Key._keyNames[cc]||bY;
}else{return cb;
}}},defer:function(bS,bT,bU){var bW={};
var bV=qx.locale.Manager;
bW[bV.marktr(e)]=bo;
bW[bV.marktr(E)]=bQ;
bW[bV.marktr(d)]=bd;
bW[bV.marktr(l)]=ba;
bW[bV.marktr(p)]=bb;
bW[bV.marktr(k)]=c;
bW[bV.marktr(bE)]=X;
bW[bV.marktr(j)]=H;
bW[bV.marktr(bH)]=bv;
bW[bV.marktr(P)]=M;
bW[bV.marktr(G)]=bw;
bW[bV.marktr(bn)]=bc;
bW[bV.marktr(t)]=bp;
bW[bV.marktr(h)]=bt;
bW[bV.marktr(bh)]=i;
bW[bV.marktr(o)]=be;
bW[bV.marktr(B)]=bx;
bW[bV.marktr(f)]=bs;
bW[bV.marktr(bF)]=bN;
bW[bV.marktr(R)]=bC;
bW[bV.marktr(I)]=bD;
bW[bV.marktr(bR)]=J;
bW[bV.marktr(z)]=Y;
bW[bV.marktr(bg)]=bu;
bW[bV.marktr(bl)]=bq;
bW[bV.marktr(bi)]=br;
bW[bV.marktr(bI)]=bo;
bW[bV.marktr(Q)]=bz;
bW[bV.marktr(bG)]=bd;
bW[bV.marktr(bA)]=ba;
bW[bV.marktr(y)]=bb;
bW[bV.marktr(bB)]=bM;
bW[bV.marktr(bf)]=X;
bW[bV.marktr(L)]=bO;
bW[bV.marktr(W)]=bv;
bW[bV.marktr(a)]=T;
bW[bV.marktr(u)]=bw;
bW[bV.marktr(bK)]=bc;
bW[bV.marktr(bk)]=bp;
bW[bV.marktr(bj)]=bt;
bW[bV.marktr(S)]=bL;
bW[bV.marktr(bm)]=bP;
bW[bV.marktr(v)]=bx;
bW[bV.marktr(bJ)]=bs;
bW[bV.marktr(b)]=O;
bW[bV.marktr(w)]=K;
bW[bV.marktr(x)]=U;
bW[bV.marktr(s)]=V;
bW[bV.marktr(F)]=Y;
bW[bV.marktr(q)]=bu;
bW[bV.marktr(n)]=bq;
bW[bV.marktr(D)]=br;
bS._keyNames=bW;
}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{_applySpacing:function(q,r){var s=this._getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSpacer:function(){var m=new qx.ui.core.Spacer;
this._add(m,{flex:1});
return m;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var o=this.getChildren();
var n=[];
var p;

for(var i=0,l=o.length;i<l;i++){p=o[i];

if(p instanceof qx.ui.menubar.Button){n.push(p);
}else if(p instanceof qx.ui.toolbar.Part){n.push.apply(n,p.getMenuButtons());
}}return n;
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
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="_applyCenter",a="qx.ui.basic.Atom",w="bottom",v="Integer",u="_applyIconPosition",t="qx.debug",s="top",r="right",q="_applyRich",p="_applyIcon",o="_applyShow",n="on",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(F,G){if(qx.core.Variant.isSet(t,n)){this.assertArgumentsCount(arguments,0,2);
}arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(F!=null){this.setLabel(F);
}
if(G!=null){this.setIcon(G);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,dispose:true,check:f},rich:{check:h,init:false,apply:q},icon:{check:f,apply:p,nullable:true,themeable:true},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:o,event:c},iconPosition:{init:e,check:[s,r,w,e],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(D){var E;

switch(D){case j:E=new qx.ui.basic.Label(this.getLabel());
E.setAnonymous(true);
E.setRich(this.getRich());
this._add(E);

if(this.getLabel()==null||this.getShow()===i){E.exclude();
}break;
case i:E=new qx.ui.basic.Image(this.getIcon());
E.setAnonymous(true);
this._addAt(E,0);

if(this.getIcon()==null||this.getShow()===j){E.exclude();
}break;
}return E||arguments.callee.base.call(this,D);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(x,y){var z=this.getChildControl(j,true);

if(z){z.setContent(x);
}this._handleLabel();
},_applyRich:function(A,B){var C=this.getChildControl(j,true);

if(C){C.setRich(A);
}},_applyIcon:function(J,K){var L=this.getChildControl(i,true);

if(L){L.setSource(J);
}this._handleIcon();
},_applyGap:function(O,P){this._getLayout().setGap(O);
},_applyShow:function(H,I){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(M,N){this._getLayout().setIconPosition(M);
},_applyCenter:function(Q,R){this._getLayout().setCenter(Q);
}}});
})();
(function(){var j="changeEnabled",i="qx.ui.core.MExecutable",h="qx.event.Command",g="qx.event.type.Event",f="changeCommand",d="_applyCommand",c="execute";
qx.Mixin.define(i,{events:{"execute":g},properties:{command:{check:h,apply:d,event:f,nullable:true}},members:{execute:function(){var k=this.getCommand();

if(k){k.execute(this);
}this.fireEvent(c);
},_applyCommand:function(a,b){if(b){b.removeListener(j,this._onChangeEnabledCommand,this);
}
if(a){a.addListener(j,this._onChangeEnabledCommand,this);

if(this.getEnabled()===false){a.setEnabled(false);
}else if(a.getEnabled()===false){this.setEnabled(false);
}}},_onChangeEnabledCommand:function(e){this.setEnabled(e.getData());
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.form.IFormElement",b="boolean";
qx.Interface.define(c,{events:{"changeValue":d,"changeName":d,"changeEnabled":d},members:{setEnabled:function(f){this.assertType(f,b);
},getEnabled:function(){},setName:function(a){this.assertString(a);
},getName:function(){},setValue:function(e){return arguments.length==1;
},getValue:function(){}}});
})();
(function(){var r="pressed",q="abandoned",p="hovered",o="Enter",n="Space",m="String",l="dblclick",k="qx.ui.form.Button",j="mouseup",i="mousedown",c="changeName",h="mouseover",g="mouseout",b="changeValue",a="keydown",f="button",d="keyup";
qx.Class.define(k,{extend:qx.ui.basic.Atom,include:qx.ui.core.MExecutable,implement:qx.ui.form.IFormElement,construct:function(u,v,w){arguments.callee.base.call(this,u,v);

if(w!=null){this.setCommand(w);
}this.addListener(h,this._onMouseOver);
this.addListener(g,this._onMouseOut);
this.addListener(i,this._onMouseDown);
this.addListener(j,this._onMouseUp);
this.addListener(a,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(l,this._onStopEvent);
},properties:{name:{check:m,nullable:true,event:c},value:{check:m,nullable:true,event:b},appearance:{refine:true,init:f},focusable:{refine:true,init:true}},members:{press:function(){if(this.hasState(q)){return;
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
(function(){var m="pressed",l="hovered",k="changeVisibility",j="qx.ui.menu.Menu",i="Enter",h="changeMenu",g="qx.ui.form.MenuButton",f="abandoned",d="_applyMenu";
qx.Class.define(g,{extend:qx.ui.form.Button,construct:function(a,b,c){arguments.callee.base.call(this,a,b);
if(c!=null){this.setMenu(c);
}},properties:{menu:{check:j,nullable:true,apply:d,event:h}},members:{_applyMenu:function(p,q){if(q){q.removeListener(k,this._onMenuChange,this);
q.resetOpener();
}
if(p){p.addListener(k,this._onMenuChange,this);
p.setOpener(this);
}},open:function(s){var t=this.getMenu();

if(t){qx.ui.menu.Manager.getInstance().hideAll();
t.open();
if(s){var u=t.getChildren()[0];

if(u){t.setSelectedButton(u);
}}}},_onMenuChange:function(e){var o=this.getMenu();

if(o.isVisible()){this.addState(m);
}else{this.removeState(m);
}},_onMouseDown:function(e){var n=this.getMenu();

if(n){if(!n.isVisible()){this.open();
}else{n.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){e.stopPropagation();
},_onMouseOver:function(e){this.addState(l);
},_onMouseOut:function(e){this.removeState(l);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:this.removeState(f);
this.addState(m);
var r=this.getMenu();

if(r){if(!r.isVisible()){this.open();
}else{r.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var j="pressed",i="hovered",h="inherit",g="qx.ui.menubar.Button",f="keydown",e="menubar-button",d="keyup";
qx.Class.define(g,{extend:qx.ui.form.MenuButton,construct:function(a,b,c){arguments.callee.base.call(this,a,b,c);
this.removeListener(f,this._onKeyDown);
this.removeListener(d,this._onKeyUp);
},properties:{appearance:{refine:true,init:e},show:{refine:true,init:h},focusable:{refine:true,init:false}},members:{getToolBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},_onMenuChange:function(e){var k=this.getMenu();
var toolbar=this.getToolBar();

if(k.isVisible()){this.addState(j);
if(toolbar){toolbar.setOpenMenu(k);
}}else{this.removeState(j);
if(toolbar&&toolbar.getOpenMenu()==k){toolbar.resetOpenMenu();
}}},_onMouseOver:function(e){this.addState(i);
if(this.getMenu()){var toolbar=this.getToolBar();
var open=toolbar.getOpenMenu();

if(open&&open!=this.getMenu()){qx.ui.menu.Manager.getInstance().hideAll();
this.open();
}}}}});
})();
(function(){var n="bottom",m="_applyLayoutChange",l="top",k="left",j="right",h="middle",g="' is not supported by the Atom layout!",f="qx.debug",e="center",d="qx.ui.layout.Atom",a="Integer",c="The property '",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:m},iconPosition:{check:[k,l,j,n],init:k,apply:m},center:{check:b,init:false,apply:m}},members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(U,name,V){this.assert(false,c+name+g);
},"off":null}),renderLayout:function(o,p){var z=qx.ui.layout.Util;
var r=this.getIconPosition();
var u=this._getLayoutChildren();
var length=u.length;
var I,top,H,s;
var D,y;
var B=this.getGap();
var G=this.getCenter();
if(r===n||r===j){var A=length-1;
var w=-1;
var t=-1;
}else{var A=0;
var w=length;
var t=1;
}if(r==l||r==n){if(G){var C=0;

for(var i=A;i!=w;i+=t){s=u[i].getSizeHint().height;

if(s>0){C+=s;

if(i!=A){C+=B;
}}}top=Math.round((p-C)/2);
}else{top=0;
}
for(var i=A;i!=w;i+=t){D=u[i];
y=D.getSizeHint();
H=Math.min(y.maxWidth,Math.max(o,y.minWidth));
s=y.height;
I=z.computeHorizontalAlignOffset(e,H,o);
D.renderLayout(I,top,H,s);
if(s>0){top+=s+B;
}}}else{var x=o;
var v=0;
var q=null;
var F=0;

for(var i=A;i!=w;i+=t){D=u[i];
H=D.getSizeHint().width;

if(H>0){if(!q&&D instanceof qx.ui.basic.Label){q=D;
}else{x-=H;
}v+=H;
F++;
}}
if(F>1){var E=(F-1)*B;
x-=E;
v+=E;
}
if(G&&v<o){I=Math.round((o-v)/2);
}else{I=0;
}
for(var i=A;i!=w;i+=t){D=u[i];
y=D.getSizeHint();
s=Math.min(y.maxHeight,Math.max(p,y.minHeight));

if(D===q){H=Math.max(y.minWidth,Math.min(x,y.width));
}else{H=y.width;
}top=z.computeVerticalAlignOffset(h,y.height,p);
D.renderLayout(I,top,H,s);
if(H>0){I+=H+B;
}}}},_computeSizeHint:function(){var T=this._getLayoutChildren();
var length=T.length;
var L,R;
if(length===1){var L=T[0].getSizeHint();
R={width:L.width,height:L.height,minWidth:L.minWidth,minHeight:L.minHeight};
}else{var P=0,Q=0;
var M=0,O=0;
var N=this.getIconPosition();
var S=this.getGap();

if(N===l||N===n){var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
Q=Math.max(Q,L.width);
P=Math.max(P,L.minWidth);
if(L.height>0){O+=L.height;
M+=L.minHeight;
J++;
}}
if(J>1){var K=(J-1)*S;
O+=K;
M+=K;
}}else{var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
O=Math.max(O,L.height);
M=Math.max(M,L.minHeight);
if(L.width>0){Q+=L.width;
P+=L.minWidth;
J++;
}}
if(J>1){var K=(J-1)*S;
Q+=K;
P+=K;
}}R={minWidth:P,width:Q,minHeight:M,height:O};
}return R;
}}});
})();
(function(){var w="qx.dynlocale",v="changeLocale",u="on",t="color",s="qx.ui.basic.Label",r="_applyRich",q="A",p="_applyTextAlign",o="Boolean",n="_applyContent",h="label",m="textAlign",k="changeTextAlign",g="center",f="__iW",j="changeContent",i="left",l="String",e="right";
qx.Class.define(s,{extend:qx.ui.core.Widget,construct:function(content){arguments.callee.base.call(this);

if(content!=null){this.setContent(content);
}
if(qx.core.Variant.isSet(w,u)){qx.locale.Manager.getInstance().addListener(v,this._onChangeLocale,this);
}},properties:{rich:{check:o,init:false,apply:r},content:{check:l,apply:n,event:j,nullable:true},textAlign:{check:[i,g,e],nullable:true,themeable:true,apply:p,event:k},appearance:{refine:true,init:h},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iW:null,__iX:null,_getContentHint:function(){if(this.__iX){this.__ja();
delete this.__iX;
}return {width:this.__iY.width,height:this.__iY.height};
},_hasHeightForWidth:function(){return this.getRich();
},_getContentHeightForWidth:function(B){if(!this.getRich()){return null;
}var C=this.__iW?this.__iW.getStyles():qx.bom.Font.getDefaultStyles();
return qx.bom.Label.getHtmlSize(this.getContent(),C,B).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(b,c){this.getContentElement().setStyle(m,b);
},_applyTextColor:function(G,H){if(G){this.getContentElement().setStyle(t,qx.theme.manager.Color.getInstance().resolve(G));
}else{this.getContentElement().removeStyle(t);
}},__iY:{width:0,height:0},_applyFont:function(D,E){var F;

if(D){this.__iW=qx.theme.manager.Font.getInstance().resolve(D);
F=this.__iW.getStyles();
}else{this.__iW=null;
F=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(F);
this.__iX=true;
qx.ui.core.queue.Layout.add(this);
},__ja:function(){var A=qx.bom.Label;
var y=this.getFont();
var x=y?this.__iW.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getContent()||q;
var z=this.getRich();
this.__iY=z?A.getHtmlSize(content,x):A.getTextSize(content,x);
},_applyRich:function(d){this.getContentElement().setRich(d);
this.__iX=true;
qx.ui.core.queue.Layout.add(this);
},_onChangeLocale:qx.core.Variant.select(w,{"on":function(e){var content=this.getContent();

if(content&&content.translate){this.setContent(content.translate());
}},"off":null}),_applyContent:function(a){this.getContentElement().setContent(a);
this.__iX=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Variant.isSet(w,u)){qx.locale.Manager.getInstance().removeListener(v,this._onChangeLocale,this);
}this._disposeFields(f);
}});
})();
(function(){var w="qx.client",v="gecko",u="div",t="",s="hidden",r="auto",q="value",p="inherit",o="text",n="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",M="nowrap",L="visible",K="ellipsis",J="normal",I="label",H="-1000px",G="absolute",F="px",E="crop",D="end",B="100%",C="qx.bom.Label",z="opera",A="block",x="none",y="mshtml|opera";
qx.Class.define(C,{statics:{__jb:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jc:function(){var N=document.createElement(u);
var O=N.style;
O.width=O.height=r;
O.left=O.top=H;
O.visibility=s;
O.position=G;
O.overflow=L;
O.whiteSpace=M;

if(qx.core.Variant.isSet(w,v)){var P=document.createElementNS(n,I);
for(var Q in this.__jb){P.style[Q]=p;
}N.appendChild(P);
}document.body.insertBefore(N,document.body.firstChild);
return this._textElement=N;
},__jd:function(){var f=qx.bom.Element.create(u);
var g=f.style;
g.width=g.height=r;
g.left=g.top=H;
g.visibility=s;
g.position=G;
g.overflow=L;
g.whiteSpace=J;
document.body.insertBefore(f,document.body.firstChild);
return this._htmlElement=f;
},__je:function(R){var S={};

if(R){S.whiteSpace=J;
}else if(qx.core.Variant.isSet(w,v)){S.display=A;
}else{S.overflow=s;
S.whiteSpace=M;
S.textOverflow=K;
if(qx.core.Variant.isSet(w,z)){S.OTextOverflow=K;
}}S.userSelect=x;
return S;
},create:function(content,a,b){if(!b){b=window;
}
if(a){var c=b.document.createElement(u);
c.useHtml=true;
}else if(qx.core.Variant.isSet(w,v)){var c=b.document.createElement(u);
var d=b.document.createElementNS(n,I);
d.style.cursor=p;
d.style.overflow=s;
d.style.maxWidth=B;
for(var e in this.__jb){d.style[e]=p;
}d.setAttribute(E,D);
c.appendChild(d);
}else{var c=b.document.createElement(u);
qx.bom.element.Style.setStyles(c,this.__je(false));
}
if(content){this.setContent(c,content);
}return c;
},setContent:function(ba,bb){bb=bb||t;

if(ba.useHtml){ba.innerHTML=bb;
}else if(qx.core.Variant.isSet(w,v)){ba.firstChild.setAttribute(q,bb);
}else{qx.bom.element.Attribute.set(ba,o,bb);
}},getContent:function(Y){if(Y.useHtml){return Y.innerHTML;
}else if(qx.core.Variant.isSet(w,v)){return Y.firstChild.getAttribute(q)||t;
}else{return qx.bom.element.Attribute.get(Y,o);
}},getHtmlSize:function(content,T,U){var X=this._htmlElement||this.__jd();
var V=this.__jb;

if(!T){T={};
}
for(var W in V){X.style[W]=T[W]||t;
}X.style.width=U!=null?U+F:r;
X.innerHTML=content;
return qx.bom.element.Dimension.getSize(X);
},getTextSize:function(h,i){var m=this._textElement||this.__jc();
var j=this.__jb;

if(!i){i={};
}
for(var l in j){m.style[l]=i[l]||t;
}if(qx.core.Variant.isSet(w,v)){m.firstChild.setAttribute(q,h);
}else if(qx.core.Variant.isSet(w,y)){m.innerText=h;
}else{m.textContent=h;
}var k=qx.bom.element.Dimension.getSize(m);

if(qx.core.Variant.isSet(w,v)){if(!qx.bom.client.Platform.WIN){k.width++;
}}return k;
}}});
})();
(function(){var w="mshtml",v="qx.client",u="Please use element.clientWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",t="qx.bom.element.Dimension",s="Please use element.scrollWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",r="paddingRight",q="paddingLeft",p="paddingTop",o="Please use element.scrollHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",n="Please use element.clientHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",m="paddingBottom";
qx.Class.define(t,{statics:{getWidth:qx.core.Variant.select(v,{"gecko":function(c){if(c.getBoundingClientRect){var d=c.getBoundingClientRect();
return Math.round(d.right)-Math.round(d.left);
}else{return c.offsetWidth;
}},"default":function(J){return J.offsetWidth;
}}),getHeight:qx.core.Variant.select(v,{"gecko":function(y){if(y.getBoundingClientRect){var z=y.getBoundingClientRect();
return Math.round(z.bottom)-Math.round(z.top);
}else{return y.offsetHeight;
}},"default":function(K){return K.offsetHeight;
}}),getSize:function(H){return {width:this.getWidth(H),height:this.getHeight(H)};
},__jf:{visible:true,hidden:true},getContentWidth:function(e){var g=qx.bom.element.Style;
var h=qx.bom.element.Overflow.getX(e);
var i=parseInt(g.get(e,q),10);
var k=parseInt(g.get(e,r),10);

if(this.__jf[h]){return e.clientWidth-i-k;
}else{if(e.clientWidth>=e.scrollWidth){return Math.max(e.clientWidth,e.scrollWidth)-i-k;
}else{var j=e.scrollWidth-i;
var f=qx.bom.client.Engine;

if(f.NAME===w&&f.VERSION==6){j-=k;
}return j;
}}},getContentHeight:function(A){var C=qx.bom.element.Style;
var E=qx.bom.element.Overflow.getY(A);
var F=parseInt(C.get(A,p),10);
var D=parseInt(C.get(A,m),10);

if(this.__jf[E]){return A.clientHeight-F-D;
}else{if(A.clientHeight>=A.scrollHeight){return Math.max(A.clientHeight,A.scrollHeight)-F-D;
}else{var G=A.scrollHeight-F;
var B=qx.bom.client.Engine;

if(B.NAME===w&&B.VERSION==6){G-=D;
}return G;
}}},getContentSize:function(b){return {width:this.getContentWidth(b),height:this.getContentHeight(b)};
},getClientWidth:function(l){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return l.clientWidth;
},getClientHeight:function(x){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return x.clientHeight;
},getScrollWidth:function(I){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return I.scrollWidth;
},getScrollHeight:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
return a.scrollHeight;
}}});
})();
(function(){var i="content",h="qx.html.Label";
qx.Class.define(h,{extend:qx.html.Element,members:{__jg:null,_applyProperty:function(name,b){arguments.callee.base.call(this,name,b);

if(name==i){var c=this.getDomElement();
qx.bom.Label.setContent(c,b);
}},_createDomElement:function(){var e=this.__jg;
var d=qx.bom.Label.create(this._content,e);
return d;
},_copyData:function(a){return arguments.callee.base.call(this,true);
},setRich:function(f){var g=this.getDomElement();

if(g){throw new Error("The label mode cannot be modified after initial creation");
}f=!!f;

if(this.__jg==f){return;
}this.__jg=f;
return this;
},setContent:function(j){this._setProperty(i,j);
return this;
},getContent:function(){return this._getProperty(i);
}}});
})();
(function(){var E="mouseup",D="keypress",C="mousedown",B="qx.debug",A="interval",z="keydown",y="on",x="keyup",w="__ji",v="Enter",o="__jh",u="Up",r="Escape",m="blur",l="qx.ui.menu.Manager",q="Left",p="Down",s="Right",k="__jj",t="singleton",n="Space";
qx.Class.define(l,{type:t,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jh=[];
var bx=qx.core.Init.getApplication().getRoot();
var bw=document.body;
var by=qx.event.Registration;
bx.addListener(C,this._onMouseDown,this,true);
bx.addListener(E,this._onMouseUp,this);
by.addListener(window.document.documentElement,E,this._onMouseUp,this);
by.addListener(bw,z,this._onKeyUpDown,this,true);
by.addListener(bw,x,this._onKeyUpDown,this,true);
by.addListener(bw,D,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,m,this.hideAll,this);
this.__ji=new qx.event.Timer;
this.__ji.addListener(A,this._onOpenInterval,this);
this.__jj=new qx.event.Timer;
this.__jj.addListener(A,this._onCloseInterval,this);
},members:{__jk:null,__jl:null,__ji:null,__jj:null,__jh:null,_getChild:function(bD,bE,bF,bG){var bH=bD.getChildren();
var length=bH.length;
var bI;

for(var i=bE;i<length&&i>=0;i+=bF){bI=bH[i];

if(bI.isEnabled()&&!bI.isAnonymous()){return bI;
}}
if(bG){i=i==length?0:length-1;

for(;i!=bE;i+=bF){bI=bH[i];

if(bI.isEnabled()&&!bI.isAnonymous()){return bI;
}}}return null;
},_isInMenu:function(bf){while(bf){if(bf instanceof qx.ui.menu.Menu){return true;
}bf=bf.getLayoutParent();
}return false;
},_getMenuButton:function(bg){while(bg){if(bg instanceof qx.ui.menu.AbstractButton){return bg;
}bg=bg.getLayoutParent();
}return null;
},add:function(bp){if(qx.core.Variant.isSet(B,y)){if(!(bp instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bp);
}}var bq=this.__jh;
bq.push(bp);
bp.setZIndex(1e6+bq.length);
},remove:function(U){if(qx.core.Variant.isSet(B,y)){if(!(U instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+U);
}}var V=this.__jh;

if(V){qx.lang.Array.remove(V,U);
}},hideAll:function(){var F=this.__jh;

if(F){for(var i=F.length-1;i>=0;i--){F[i].exclude();
}}},getActiveMenu:function(){var bC=this.__jh;
return bC.length>0?bC[bC.length-1]:null;
},scheduleOpen:function(be){this.cancelClose(be);
if(be.isVisible()){if(this.__jk){this.cancelOpen(this.__jk);
}}else if(this.__jk!=be){this.__jk=be;
this.__ji.restartWith(be.getOpenInterval());
}},scheduleClose:function(bv){this.cancelOpen(bv);
if(!bv.isVisible()){if(this.__jl){this.cancelClose(this.__jl);
}}else if(this.__jl!=bv){this.__jl=bv;
this.__jj.restartWith(bv.getCloseInterval());
}},cancelOpen:function(br){if(this.__jk==br){this.__ji.stop();
this.__jk=null;
}},cancelClose:function(T){if(this.__jl==T){this.__jj.stop();
this.__jl=null;
}},_onOpenInterval:function(e){this.__ji.stop();
this.__jk.open();
this.__jk=null;
},_onCloseInterval:function(e){this.__jj.stop();
this.__jl.exclude();
this.__jl=null;
},_onMouseDown:function(e){var S=e.getTarget();
if(S.getMenu&&S.getMenu()&&S.getMenu().isVisible()){return;
}if(this.__jh.length>0&&!this._isInMenu(S)){this.hideAll();
}},_onMouseUp:function(e){var X=e.getTarget();
var W;

if(X instanceof qx.ui.core.Widget){W=X;
}else{W=qx.ui.core.Widget.getWidgetByElement(X);
}if(!(W instanceof qx.ui.menu.Menu)){W=this._getMenuButton(W);

if(W!=null&&W instanceof qx.ui.menu.AbstractButton&&!W.isEnabled()){return;
}this.hideAll();
}},__jm:{"Enter":1,"Space":1},__jn:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var h=this.getActiveMenu();

if(!h){return;
}var j=e.getKeyIdentifier();

if(this.__jn[j]||(this.__jm[j]&&h.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var K=this.getActiveMenu();

if(!K){return;
}var L=e.getKeyIdentifier();
var N=this.__jn[L];
var M=this.__jm[L];

if(N){switch(L){case u:this._onKeyPressUp(K);
break;
case p:this._onKeyPressDown(K);
break;
case q:this._onKeyPressLeft(K);
break;
case s:this._onKeyPressRight(K);
break;
case r:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(M){var O=K.getSelectedButton();

if(O){switch(L){case v:this._onKeyPressEnter(K,O,e);
break;
case n:this._onKeyPressSpace(K,O,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(Y){var ba=Y.getSelectedButton();
var bb=Y.getChildren();
var bd=ba?Y.indexOf(ba)-1:bb.length-1;
var bc=this._getChild(Y,bd,-1,true);
if(bc){Y.setSelectedButton(bc);
}else{Y.resetSelectedButton();
}},_onKeyPressDown:function(G){var H=G.getSelectedButton();
var J=H?G.indexOf(H)+1:0;
var I=this._getChild(G,J,1,true);
if(I){G.setSelectedButton(I);
}else{G.resetSelectedButton();
}},_onKeyPressLeft:function(a){var d=a.getOpener();

if(!d){return;
}if(d instanceof qx.ui.menu.Button){var g=d.getLayoutParent();
g.resetOpenedButton();
g.setSelectedButton(d);
}else if(d instanceof qx.ui.menubar.Button){var b=d.getToolBar().getMenuButtons();
var c=b.indexOf(d);
if(c===-1){return;
}var f=c==0?b[b.length-1]:b[c-1];

if(f!=d){f.open(true);
}}},_onKeyPressRight:function(bh){var bj=bh.getSelectedButton();
if(bj){var bi=bj.getMenu();

if(bi){bh.setOpenedButton(bj);
var bo=this._getChild(bi,0,1);

if(bo){bi.setSelectedButton(bo);
}return;
}}else if(!bh.getOpenedButton()){var bo=this._getChild(bh,0,1);

if(bo){bh.setSelectedButton(bo);

if(bo.getMenu()){bh.setOpenedButton(bo);
}return;
}}var bm=bh.getOpener();
if(bm instanceof qx.ui.menu.Button&&bj){while(bm){bm=bm.getLayoutParent();

if(bm instanceof qx.ui.menu.Menu){bm=bm.getOpener();

if(bm instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bm){return;
}}if(bm instanceof qx.ui.menubar.Button){var bl=bm.getToolBar().getMenuButtons();
var bk=bl.indexOf(bm);
if(bk===-1){return;
}var bn=bl[bk+1];

if(!bn){bn=bl[0];
}
if(bn!=bm){bn.open(true);
}}},_onKeyPressEnter:function(bs,bt,e){if(bt.hasListener(D)){var bu=e.clone();
bu.setBubbles(false);
bu.setTarget(bt);
bt.dispatchEvent(bu);
}this.hideAll();
},_onKeyPressSpace:function(P,Q,e){if(Q.hasListener(D)){var R=e.clone();
R.setBubbles(false);
R.setTarget(Q);
Q.dispatchEvent(R);
}}},destruct:function(){var bB=qx.event.Registration;
var bz=document.body;
var bA=qx.core.Init.getApplication().getRoot();
bA.removeListener(C,this._onMouseDown,this,true);
bA.removeListener(E,this._onMouseUp,this);
bB.removeListener(window.document.documentElement,E,this._onMouseUp,this);
bB.removeListener(bz,z,this._onKeyUpDown,this,true);
bB.removeListener(bz,x,this._onKeyUpDown,this,true);
bB.removeListener(bz,D,this._onKeyPress,this,true);
this._disposeObjects(w,k);
this._disposeArray(o);
}});
})();
(function(){var t="Integer",s="qx.ui.core.Widget",r="visible",q="selected",p="qx.ui.menu.Menu",o="_applyOpenInterval",n="_applyOpenedButton",m="_applyArrowColumnWidth",l="_applyIconColumnWidth",k="mouseover",f="mouseout",j="excluded",i="_applySpacingX",d="_applyCloseInterval",c="_applySelectedButton",h="menu",g="_applySpacingY";
qx.Class.define(p,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
this.getApplicationRoot().add(this);
this.addListener(k,this._onMouseOver);
this.addListener(f,this._onMouseOut);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:h},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:j},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:t,apply:i,init:0,themeable:true},spacingY:{check:t,apply:g,init:0,themeable:true},iconColumnWidth:{check:t,init:0,themeable:true,apply:l},arrowColumnWidth:{check:t,init:0,themeable:true,apply:m},selectedButton:{check:s,nullable:true,apply:c},openedButton:{check:s,nullable:true,apply:n},opener:{check:s,nullable:true},openInterval:{check:t,themeable:true,init:250,apply:o},closeInterval:{check:t,themeable:true,init:250,apply:d}},members:{__jo:null,open:function(){this.placeToWidget(this.getOpener());
this.show();
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getLayout().getColumnSizes();
},_applyIconColumnWidth:function(M,N){this._getLayout().setIconColumnWidth(M);
},_applyArrowColumnWidth:function(A,B){this._getLayout().setArrowColumnWidth(A);
},_applySpacingX:function(u,v){this._getLayout().setColumnSpacing(u);
},_applySpacingY:function(C,D){this._getLayout().setSpacing(C);
},_applyVisibility:function(w,x){arguments.callee.base.call(this,w,x);
var y=qx.ui.menu.Manager.getInstance();

if(w===r){y.add(this);
var opener=this.getOpener();
var z=opener.getLayoutParent();

if(z&&z instanceof qx.ui.menu.Menu){z.setOpenedButton(opener);
}}else if(x===r){y.remove(this);
var opener=this.getOpener();
var z=opener.getLayoutParent();

if(z&&z instanceof qx.ui.menu.Menu&&z.getOpenedButton()==opener){z.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}},_applySelectedButton:function(a,b){if(b){b.removeState(q);
}
if(a){a.addState(q);
}},_applyOpenedButton:function(K,L){if(L){L.getMenu().exclude();
}
if(K){K.getMenu().open();
}},_onMouseOver:function(e){var F=qx.ui.menu.Manager.getInstance();
F.cancelClose(this);
var G=e.getTarget();

if(G.isEnabled()&&G instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(G);
var E=G.getMenu&&G.getMenu();

if(E){F.scheduleOpen(E);
this.__jo=E;
}else{var H=this.getOpenedButton();

if(H){F.scheduleClose(H.getMenu());
}
if(this.__jo){F.cancelOpen(this.__jo);
this.__jo=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var I=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var J=this.getOpenedButton();
J?this.setSelectedButton(J):this.resetSelectedButton();
if(J){I.cancelClose(J.getMenu());
}if(this.__jo){I.cancelOpen(this.__jo);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__jp:null,_computeSizeHint:function(){var p=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__jp=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=p.length;i<l;i++){o=p[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=p[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}return {height:arguments.callee.base.call(this).height,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__jp||null;
}}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var r="icon",q="label",p="arrow",o="shortcut",n="submenu",m="String",l="qx.ui.menu.Menu",k="qx.ui.menu.AbstractButton",j="keypress",i="_applyIcon",f="mouseup",h="abstract",g="_applyLabel",e="_applyMenu";
qx.Class.define(k,{extend:qx.ui.core.Widget,type:h,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(f,this._onMouseUp);
this.addListener(j,this._onKeyPress);
},properties:{label:{check:m,apply:g,nullable:true},menu:{check:l,apply:e,nullable:true},icon:{check:m,apply:i,themeable:true,nullable:true}},members:{_createChildControlImpl:function(u){var v;

switch(u){case r:v=new qx.ui.basic.Image;
v.setAnonymous(true);
this._add(v,{column:0});
break;
case q:v=new qx.ui.basic.Label;
v.setAnonymous(true);
this._add(v,{column:1});
break;
case o:v=new qx.ui.basic.Label;
v.setAnonymous(true);
this._add(v,{column:2});
break;
case p:v=new qx.ui.basic.Image;
v.setAnonymous(true);
this._add(v,{column:3});
break;
}return v||arguments.callee.base.call(this,u);
},_forwardStates:{selected:1},getChildrenSizes:function(){var w=0,x=0,y=0,C=0;

if(this._isChildControlVisible(r)){var D=this.getChildControl(r);
w=D.getMarginLeft()+D.getSizeHint().width+D.getMarginRight();
}
if(this._isChildControlVisible(q)){var A=this.getChildControl(q);
x=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}
if(this._isChildControlVisible(o)){var z=this.getChildControl(o);
y=z.getMarginLeft()+z.getSizeHint().width+z.getMarginRight();
}
if(this._isChildControlVisible(p)){var B=this.getChildControl(p);
C=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}return [w,x,y,C];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_applyIcon:function(a,b){if(a){this._showChildControl(r).setSource(a);
}else{this._excludeChildControl(r);
}},_applyLabel:function(s,t){if(s){this._showChildControl(q).setContent(s);
}else{this._excludeChildControl(q);
}},_applyMenu:function(c,d){if(d){d.resetOpener();
d.removeState(n);
}
if(c){this._showChildControl(p);
c.setOpener(this);
c.addState(n);
}else{this._excludeChildControl(p);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var g="qx.ui.menu.ButtonLayout",f="qx.debug",e="column",d="left",c="middle",b="' is not supported by the MenuButton layout!",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(k,name,m){this.assert(name==e,a+name+b);
},"off":null}),renderLayout:function(n,o){var x=this._getLayoutChildren();
var w;
var q;
var r=[];

for(var i=0,l=x.length;i<l;i++){w=x[i];
q=w.getLayoutProperties().column;
r[q]=w;
}var v=x[0].getLayoutParent().getLayoutParent();
var y=v.getColumnSizes();
var s=v.getSpacingX();
var z=0,top=0;
var t=qx.ui.layout.Util;

for(var i=0,l=y.length;i<l;i++){w=r[i];

if(w){var p=w.getSizeHint();
var top=t.computeVerticalAlignOffset(w.getAlignY()||c,p.height,o,0,0);
var u=t.computeHorizontalAlignOffset(w.getAlignX()||d,p.width,y[i],w.getMarginLeft(),w.getMarginRight());
w.renderLayout(z+u,top,p.width,p.height);
}z+=y[i]+s;
}},_computeSizeHint:function(){var j=this._getLayoutChildren();
var h=0;

for(var i=0,l=j.length;i<l;i++){h=Math.max(h,j[i].getSizeHint().height);
}return {width:0,height:h};
}}});
})();
(function(){var i="shortcut",h="qx.ui.menu.Button",g="changeCommand",f="menu-button";
qx.Class.define(h,{extend:qx.ui.menu.AbstractButton,include:qx.ui.core.MExecutable,construct:function(a,b,c,d){arguments.callee.base.call(this);
this.addListener(g,this._onChangeCommand,this);
if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}
if(c!=null){this.setCommand(c);
}
if(d!=null){this.setMenu(d);
}},properties:{appearance:{refine:true,init:f}},members:{_onChangeCommand:function(e){this.getChildControl(i).setContent(e.getData().toString());
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){e.stopPropagation();
}}},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var f="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(f,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(g,h){return this.getChildrenContainer().add(g,h);
},remove:function(e){return this.getChildrenContainer().remove(e);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(l){return this.getChildrenContainer().indexOf(l);
},addAt:function(a,b,c){this.getChildrenContainer().addAt(a,b,c);
},addBefore:function(i,j,k){this.getChildrenContainer().addBefore(i,j,k);
},addAfter:function(m,n,o){this.getChildrenContainer().addAfter(m,n,o);
},removeAt:function(d){this.getChildrenContainer().removeAt(d);
}}});
})();
(function(){var p="container",o="handle",n="both",m="Integer",k="middle",j="qx.ui.toolbar.Part",h="icon",g="label",f="changeShow",e="_applySpacing",d="toolbar/part";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(o);
},properties:{appearance:{refine:true,init:d},show:{init:n,check:[n,g,h],inheritable:true,event:f},spacing:{nullable:true,check:m,themeable:true,apply:e}},members:{_createChildControlImpl:function(q){var r;

switch(q){case o:r=new qx.ui.basic.Image();
r.setAlignY(k);
this._add(r);
break;
case p:r=new qx.ui.toolbar.PartContainer;
this._add(r);
break;
}return r||arguments.callee.base.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(p);
},_applySpacing:function(s,t){var u=this.getChildControl(p).getLayout();
s==null?u.resetSpacing():u.setSpacing(s);
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
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
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
(function(){var i="atom",h="Integer",g="String",f="_applyRich",e="qx.ui.tooltip.ToolTip",d="_applyIcon",c="tooltip",b="Boolean",a="_applyLabel";
qx.Class.define(e,{extend:qx.ui.popup.Popup,construct:function(j,k){arguments.callee.base.call(this);
qx.ui.tooltip.Manager.getInstance();
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(i);
if(j!=null){this.setLabel(j);
}
if(k!=null){this.setIcon(k);
}},properties:{appearance:{refine:true,init:c},showTimeout:{check:h,init:1000,themeable:true},hideTimeout:{check:h,init:4000,themeable:true},label:{check:g,nullable:true,apply:a},icon:{check:g,nullable:true,apply:d,themeable:true},rich:{check:b,init:false,apply:f}},members:{_createChildControlImpl:function(r){var s;

switch(r){case i:s=new qx.ui.basic.Atom;
this._add(s);
break;
}return s||arguments.callee.base.call(this,r);
},_applyIcon:function(t,u){var v=this.getChildControl(i);
t==null?v.resetIcon:v.setIcon(t);
},_applyLabel:function(l,m){var n=this.getChildControl(i);
l==null?n.resetLabel():n.setLabel(l);
},_applyRich:function(o,p){var q=this.getChildControl(i);
q.setRich(o);
}}});
})();
(function(){var h="mousedown",g="qx.debug",f="on",d="blur",c="qx.ui.popup.Manager",b="__jq",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jq={};
var i=qx.core.Init.getApplication().getRoot();
i.addListener(h,this.__js,this,true);
qx.bom.Element.addListener(window,d,this.hideAll,this);
},members:{__jq:null,add:function(v){if(qx.core.Variant.isSet(g,f)){if(!(v instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+v);
}}this.__jq[v.$$hash]=v;
this.__jr();
},remove:function(j){if(qx.core.Variant.isSet(g,f)){if(!(j instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+j);
}}var k=this.__jq;

if(k){delete k[j.$$hash];
this.__jr();
}},hideAll:function(){var m=this.__jq;

if(m){for(var l in m){m[l].exclude();
}}},__jr:function(){var u=1e7;
var t=this.__jq;

for(var s in t){t[s].setZIndex(u++);
}},__js:function(e){var q=e.getTarget();
var r=this.__jq;

for(var p in r){var o=r[p];

if(!o.getAutoHide()||q==o||qx.ui.core.Widget.contains(o,q)){continue;
}o.exclude();
}}},destruct:function(){var n=qx.core.Init.getApplication().getRoot();

if(n){n.removeListener(h,this.__js,this,true);
}this._disposeMap(b);
}});
})();
(function(){var m="focusout",l="interval",k="mouseover",j="mousemove",i="mouseout",h="__ju",g="qx.ui.tooltip.ToolTip",f="__jt",d="_applyCurrent",c="qx.ui.tooltip.Manager",a="__jv",b="singleton";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,k,this.__jz,this,true);
this.__jt=new qx.event.Timer();
this.__jt.addListener(l,this.__jw,this);
this.__ju=new qx.event.Timer();
this.__ju.addListener(l,this.__jx,this);
this.__jv={left:0,top:0};
},properties:{current:{check:g,nullable:true,apply:d}},members:{__jv:null,__ju:null,__jt:null,_applyCurrent:function(o,p){if(p&&qx.ui.core.Widget.contains(p,o)){return;
}if(p){p.exclude();
this.__jt.stop();
this.__ju.stop();
}var r=qx.event.Registration;
var q=document.body;
if(o){this.__jt.startWith(o.getShowTimeout());
r.addListener(q,i,this.__jA,this,true);
r.addListener(q,m,this.__jB,this,true);
r.addListener(q,j,this.__jy,this,true);
}else{r.removeListener(q,i,this.__jA,this,true);
r.removeListener(q,m,this.__jB,this,true);
r.removeListener(q,j,this.__jy,this,true);
}},__jw:function(e){var s=this.getCurrent();

if(s){this.__ju.startWith(s.getHideTimeout());
s.placeToPoint(this.__jv);
s.show();
}this.__jt.stop();
},__jx:function(e){var n=this.getCurrent();

if(n){n.exclude();
}this.__ju.stop();
this.resetCurrent();
},__jy:function(e){var A=this.__jv;
A.left=e.getDocumentLeft();
A.top=e.getDocumentTop();
},__jz:function(e){var v=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!v){return;
}var w;
while(v!=null){var w=v.getToolTip();

if(w){break;
}v=v.getLayoutParent();
}if(w){this.setCurrent(w);
}},__jA:function(e){var x=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!x){return;
}var y=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!y){return;
}var z=this.getCurrent();
if(z&&(y==z||qx.ui.core.Widget.contains(z,y))){return;
}if(y&&x&&qx.ui.core.Widget.contains(x,y)){return;
}if(z&&!y){this.setCurrent(null);
}else{this.resetCurrent();
}},__jB:function(e){var t=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!t){return;
}var u=this.getCurrent();
if(u&&u==t.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,k,this.__jz,this,true);
this._disposeObjects(f,h);
this._disposeFields(a);
}});
})();
(function(){var d="qx.ui.form.IRadioItem",c="boolean",b="qx.event.type.Data";
qx.Interface.define(d,{extend:qx.ui.form.IFormElement,events:{"changeChecked":b},members:{setChecked:function(e){this.assertType(e,c);
},getChecked:function(){},setGroup:function(a){this.assertInstance(a,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var l="checked",k="String",j="_applyChecked",i="qx.ui.form.RadioGroup",h="Boolean",g="changeName",f="menu-radiobutton",d="qx.ui.menu.RadioButton",c="changeChecked",b="changeValue",a="_applyGroup";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,implement:qx.ui.form.IRadioItem,construct:function(o,p){arguments.callee.base.call(this);
if(o!=null){this.setLabel(o);
}
if(p!=null){this.setMenu(p);
}},properties:{appearance:{refine:true,init:f},value:{check:k,nullable:true,event:b},name:{check:k,nullable:true,event:g},group:{check:i,nullable:true,apply:a},checked:{check:h,init:false,apply:j,event:c}},members:{_applyChecked:function(q,r){q?this.addState(l):this.removeState(l);
},_applyGroup:function(m,n){if(n){n.remove(this);
}
if(m){m.add(this);
}},_onMouseUp:function(e){if(e.isLeftPressed()){this.setChecked(true);
}},_onKeyPress:function(e){this.setChecked(true);
}}});
})();
(function(){var w="Boolean",v="changeValue",u="changeChecked",t="changeSelected",s="changeEnabled",r="qx.ui.form.RadioGroup",q="changeName",p="qx.ui.form.IRadioItem",o="__jC",n="_applySelected",j="_applyName",m="_applyEnabled",k="String",h="qx.event.type.Data";
qx.Class.define(r,{extend:qx.core.Object,implement:qx.ui.form.IFormElement,construct:function(G){arguments.callee.base.call(this);
this.__jC=[];

if(G!=null){this.add.apply(this,arguments);
}this.addListener(t,this._onChangeSelected);
},properties:{enabled:{check:w,apply:m,event:s},selected:{nullable:true,apply:n,event:t,check:p},name:{check:k,nullable:true,apply:j,event:q},wrap:{check:w,init:true}},events:{"changeValue":h},members:{__jC:null,getItems:function(){return this.__jC;
},select:function(b){this.setSelected(b);
},setValue:function(K){var L=this.__jC;
var M;

for(var i=0,l=L.length;i<l;i++){M=L[i];

if(M.getValue()==K){this.setSelected(M);
break;
}}},getValue:function(){var a=this.getSelected();
return a?a.getValue():null;
},add:function(x){var y=this.__jC;
var z;

for(var i=0,l=arguments.length;i<l;i++){z=arguments[i];

if(z.getGroup()===this){continue;
}z.addListener(u,this._onItemChangeChecked,this);
y.push(z);
z.setGroup(this);
if(z.getChecked()){this.setSelected(z);
}}if(y.length>0&&!this.getSelected()){this.setSelected(y[0]);
}},remove:function(N){if(N.getGroup()===this){qx.lang.Array.remove(this.__jC,N);
N.resetGroup();
N.removeListener(u,this._onItemChangeChecked,this);
if(N.getChecked()){this.resetSelected();
}}},_onItemChangeChecked:function(e){var T=e.getTarget();

if(T.getChecked()){this.setSelected(T);
}else if(this.getSelected()==T){this.resetSelected();
}},_onChangeSelected:function(e){var O=e.getData();
var P=null;

if(O){P=O.getValue();

if(P==null){P=O.getLabel();
}}this.fireDataEvent(v,P);
},_applySelected:function(c,d){if(d){d.setChecked(false);
}
if(c){c.setChecked(true);
}var g=d?d.getValue():null;
var f=c?c.getValue():null;

if(g!=f){this.fireNonBubblingEvent(v,qx.event.type.Data,[f,g]);
}},_applyEnabled:function(A,B){var C=this.__jC;

if(A==null){for(var i=0,l=C.length;i<l;i++){C[i].resetEnabled();
}}else{for(var i=0,l=C.length;i<l;i++){C[i].setEnabled(true);
}}},_applyName:function(Q,R){var S=this.__jC;

if(Q==null){for(var i=0,l=S.length;i<l;i++){S[i].resetName();
}}else{for(var i=0,l=S.length;i<l;i++){S[i].setName(Q);
}}},selectNext:function(){var D=this.getSelected();
var F=this.__jC;
var E=F.indexOf(D);

if(E==-1){return;
}var i=0;
var length=F.length;
if(this.getWrap()){E=(E+1)%length;
}else{E=Math.min(E+1,length-1);
}
while(i<length&&!F[E].getEnabled()){E=(E+1)%length;
i++;
}this.setSelected(F[E]);
},selectPrevious:function(){var H=this.getSelected();
var J=this.__jC;
var I=J.indexOf(H);

if(I==-1){return;
}var i=0;
var length=J.length;
if(this.getWrap()){I=(I-1+length)%length;
}else{I=Math.max(I-1,0);
}
while(i<length&&!J[I].getEnabled()){I=(I-1+length)%length;
i++;
}this.setSelected(J[I]);
}},destruct:function(){this._disposeArray(o);
}});
})();
(function(){var e="arrow",d="qx.ui.toolbar.MenuButton",c="Boolean",b="_applyShowArrow",a="toolbar-menubutton";
qx.Class.define(d,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:a},showArrow:{check:c,init:false,themeable:true,apply:b}},members:{_createChildControlImpl:function(h){var i;

switch(h){case e:i=new qx.ui.basic.Image();
i.setAnonymous(true);
this._addAt(i,10);
break;
}return i||arguments.callee.base.call(this,h);
},_applyShowArrow:function(f,g){if(f){this._showChildControl(e);
}else{this._excludeChildControl(e);
}}}});
})();
(function(){var w="pressed",v="abandoned",u="hovered",t="checked",s="Space",r="String",q="Enter",p="mouseup",o="mousedown",n="Boolean",g="changeName",m="mouseover",j="mouseout",f="changeValue",d="_applyChecked",i="qx.ui.form.ToggleButton",h="changeChecked",k="keydown",c="button",l="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,implement:qx.ui.form.IFormElement,construct:function(x,y){arguments.callee.base.call(this,x,y);
this.addListener(m,this._onMouseOver);
this.addListener(j,this._onMouseOut);
this.addListener(o,this._onMouseDown);
this.addListener(p,this._onMouseUp);
this.addListener(k,this._onKeyDown);
this.addListener(l,this._onKeyUp);
},properties:{appearance:{refine:true,init:c},checked:{check:n,init:false,apply:d,event:h},focusable:{refine:true,init:true},name:{check:r,nullable:true,event:g},value:{check:r,nullable:true,event:f}},members:{_applyChecked:function(a,b){a?this.addState(t):this.removeState(t);
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(u);

if(this.hasState(v)){this.removeState(v);
this.addState(w);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(u);

if(this.hasState(w)){if(!this.getChecked()){this.removeState(w);
}this.addState(v);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(v);
this.addState(w);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(v)){this.removeState(v);
}else if(this.hasState(w)){this.toggleChecked();
}this.removeState(w);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case q:case s:this.removeState(v);
this.addState(w);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(w)){return;
}
switch(e.getKeyIdentifier()){case q:case s:this.removeState(v);
this.toggleChecked();
this.removeState(w);
e.stopPropagation();
}}}});
})();
(function(){var e="inherit",d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){arguments.callee.base.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var e="qx.ui.form.RadioGroup",d="_applyGroup",c="qx.ui.toolbar.RadioButton";
qx.Class.define(c,{extend:qx.ui.toolbar.CheckBox,implement:qx.ui.form.IRadioItem,properties:{group:{check:e,apply:d,nullable:true}},members:{_applyChecked:function(f,g){arguments.callee.base.call(this,f,g);

if(f){var h=this.getGroup();

if(h){h.select(this);
}}},_applyGroup:function(a,b){if(b){b.remove(this);
}
if(a){a.add(this);
}}}});
})();
(function(){var j="auto",i="overflowX",h="visible",g="hidden",f="scroll",e="overflowY",d="_applyOverflowX",c="_applyOverflowY",b="qx.ui.core.MNativeOverflow";
qx.Mixin.define(b,{properties:{overflowX:{check:[g,h,f,j],nullable:true,apply:d},overflowY:{check:[g,h,f,j],nullable:true,apply:c},overflow:{group:[i,e]}},members:{_applyOverflowX:function(k){this.getContentElement().setStyle(i,k);
},_applyOverflowY:function(a){this.getContentElement().setStyle(e,a);
}}});
})();
(function(){var o="display",n="mousedown",m="load",l="String",k="mouseup",j="losecapture",i="none",h="repeat",g="height",f="px",J="url(",I=")",H="__jE",G="qx.client",F="div",E="_applyFrameName",D="qx.event.type.Event",C="name",B="",A="width",v="zIndex",w="_applySource",t="top",u="mshtml",r="block",s="qx.ui.embed.Iframe",p="position",q="iframe",x="left",y="absolute",z="qx/static/blank.gif";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:qx.ui.core.MNativeOverflow,construct:function(c){if(c!=null){this.__jD=c;
}arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,n,this.block,this,true);
qx.event.Registration.addListener(document.body,k,this.release,this,true);
qx.event.Registration.addListener(document.body,j,this.release,this,true);
this.__jE=this._createBlockerElement();
this.getContainerElement().add(this.__jE);
},events:{"load":D},properties:{appearance:{refine:true,init:q},source:{check:l,apply:w,nullable:true},frameName:{check:l,init:B,apply:E}},members:{__jD:null,__jE:null,renderLayout:function(K,top,L,M){arguments.callee.base.call(this,K,top,L,M);
var O=f;
var N=this.getInsets();
this.__jE.setStyle(x,N.left+O);
this.__jE.setStyle(t,N.top+O);
this.__jE.setStyle(A,(L-N.left-N.right)+O);
this.__jE.setStyle(g,(M-N.top-N.bottom)+O);
},_createContentElement:function(){var e=new qx.html.Iframe(this.__jD);
e.addListener(m,this._onIframeLoad,this);
return e;
},_createBlockerElement:function(){var d=new qx.html.Element(F);
d.setStyle(v,20);
d.setStyle(p,y);
d.setStyle(o,i);
if(qx.core.Variant.isSet(G,u)){d.setStyles({backgroundImage:J+qx.util.ResourceManager.toUri(z)+I,backgroundRepeat:h});
}return d;
},_onIframeLoad:function(e){this.fireNonBubblingEvent(m);
},getWindow:function(){return this.getContentElement().getWindow();
},getDocument:function(){return this.getContentElement().getDocument();
},getBody:function(){return this.getContentElement().getBody();
},getName:function(){return this.getContentElement().getName();
},block:function(){this.__jE.setStyle(o,r);
},release:function(){this.__jE.setStyle(o,i);
},reload:function(){this.getContentElement().reload();
},_applySource:function(a,b){this.getContentElement().setSource(a);
},_applyFrameName:function(P,Q){this.getContentElement().setAttribute(C,P);
}},destruct:function(){this._disposeObjects(H);
qx.event.Registration.removeListener(document.body,n,this.block,this,true);
qx.event.Registration.removeListener(document.body,k,this.release,this,true);
qx.event.Registration.removeListener(document.body,j,this.release,this,true);
}});
})();
(function(){var h="source",g="name",f="qx.html.Iframe",e="qx.event.type.Event",d="iframe";
qx.Class.define(f,{extend:qx.html.Element,construct:function(l){arguments.callee.base.call(this,d);
this._setProperty(h,l);
},events:{"load":e},members:{_applyProperty:function(name,m){arguments.callee.base.call(this,name,m);

if(name==h){var n=this.getDomElement();
qx.bom.Iframe.setSource(n,m);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var i=this.getDomElement();

if(i){return qx.bom.Iframe.getWindow(i);
}else{return null;
}},getDocument:function(){var k=this.getDomElement();

if(k){return qx.bom.Iframe.getDocument(k);
}else{return null;
}},getBody:function(){var c=this.getDomElement();

if(c){return qx.bom.Iframe.getBody(c);
}else{return null;
}},setSource:function(j){this._setProperty(h,j);
return this;
},getSource:function(){return this._getProperty(h);
},setName:function(name){this.setAttribute(g,name);
return this;
},getName:function(){return this.getAttribute(g);
},reload:function(){var b=this.getDomElement();

if(b){var a=this.getSource();
this.setSource(null);
this.setSource(a);
}}}});
})();
(function(){var f="qx.event.handler.Iframe",e="load",d="iframe";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:function(m){qx.event.Registration.fireEvent(m,e);
}},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===d;
},registerEvent:function(i,j,k){},unregisterEvent:function(a,b,c){}},defer:function(l){qx.event.Registration.addHandler(l);
}});
})();
(function(){var n="0",m="qx.client",l="qx.bom.Iframe",k="qx.event.handler.Iframe.onevent(this)",j="true",i="iframe",h="body";
qx.Class.define(l,{statics:{create:function(s,t){var s=s?qx.lang.Object.clone(s):{};
s.onload=k;
s.frameBorder=n;
s.frameSpacing=n;
s.marginWidth=n;
s.marginHeight=n;
s.hspace=n;
s.vspace=n;
s.border=n;
s.allowTransparency=j;
return qx.bom.Element.create(i,s,t);
},getWindow:qx.core.Variant.select(m,{"mshtml|gecko":function(o){try{return o.contentWindow;
}catch(z){return null;
}},"default":function(a){try{var b=this.getDocument(a);
return b?b.defaultView:null;
}catch(x){return null;
}}}),getDocument:qx.core.Variant.select(m,{"mshtml":function(f){try{var g=this.getWindow(f);
return g?g.document:null;
}catch(r){return null;
}},"default":function(e){try{return e.contentDocument;
}catch(d){return null;
}}}),getBody:function(p){var q=this.getDocument(p);
return q?q.getElementsByTagName(h)[0]:null;
},setSource:function(A,B){try{if(this.getWindow(A)){try{this.getWindow(A).location.replace(B);
}catch(y){A.src=B;
}}else{A.src=B;
}}catch(u){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(v){var w=this.getDocument(v);

try{if(w&&w.location){return w.location.href;
}}catch(c){}return null;
}}});
})();
(function(){var m="",l="color",k="String",j="none",i="padding",h="0px",g="changeHtml",f="_applyCssClass",e="class",d="qx.ui.embed.Html",a="_applyHtml",c="border",b="html";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(n){arguments.callee.base.call(this);

if(n!=null){this.setHtml(n);
}},properties:{html:{check:k,apply:a,event:g,nullable:true},cssClass:{check:k,init:m,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(t,u){var v=this.getContentElement();
v.setAttribute(b,t||m);
v.setStyle(i,h);
v.setStyle(c,j);
},_applyCssClass:function(o,p){this.getContentElement().setAttribute(e,o);
},_applyFont:function(q,r){var s=q?qx.theme.manager.Font.getInstance().resolve(q).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(s);
},_applyTextColor:function(w,x){if(w){this.getContentElement().setStyle(l,qx.theme.manager.Color.getInstance().resolve(w));
}else{this.getContentElement().removeStyle(l);
}}}});
})();
(function(){var u="",t="__jF",s='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',r='.qxappender .type-instance{color:#565656;font-weight:bold}',q="qx.log.appender.Element",p='.qxappender .level-info{background:#DEEDFA}',o='.qxappender .type-stringify{color:#565656;font-weight:bold}',n='.qxappender .type-number{color:#155791;font-weight:normal;}',m="qxappender",l='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',f='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',k='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',i='.qxappender .level-error{background:#FFE2D5}',e='.qxappender .level-debug{background:white}',d='.qxappender .type-key{color:#565656;font-style:italic}',h='.qxappender .level-user{background:#E3EFE9}',g='.qxappender .level-warn{background:#FFF7D5}',j='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(q,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
var b=[e,p,g,i,h,j,n,k,s,l,d,f,r,o];
qx.bom.Stylesheet.createElement(b.join(u));
qx.log.Logger.register(this);
},members:{__jF:null,setElement:function(x){this.clear();
if(x){qx.bom.element.Class.add(x,m);
}this.__jF=x;
},clear:function(){var c=this.__jF;
if(c){c.innerHTML=u;
}},process:function(v){var w=this.__jF;

if(!w){return;
}w.appendChild(qx.log.appender.Util.toHtml(v));
w.scrollTop=w.scrollHeight;
}},destruct:function(){this._disposeFields(t);
}});
})();
(function(){var j="(\\s|$)",i="(^|\\s)",h="",g="qx.bom.element.Class",f=" ",e="$2";
qx.Class.define(g,{statics:{add:function(k,name){if(!this.has(k,name)){k.className+=(k.className?f:h)+name;
}return name;
},get:function(d){return d.className;
},has:function(l,name){var m=new RegExp(i+name+j);
return m.test(l.className);
},remove:function(n,name){var o=new RegExp(i+name+j);
n.className=n.className.replace(o,e);
return name;
},replace:function(a,b,c){this.remove(a,b);
return this.add(a,c);
},toggle:function(p,name,q){if(q==null){q=!this.has(p,name);
}q?this.add(p,name):this.remove(p,name);
return name;
}}});
})();
(function(){var J="scrollbar-y",I="scrollbar-x",H="pane",G="auto",F="corner",E="on",D="changeVisibility",C="scroll",B="_computeScrollbars",A="off",t="scrollY",z="abstract",w="update",r="scrollX",q="mousewheel",v="scrollbarY",u="scrollbarX",x="horizontal",p="scrollarea",y="qx.ui.core.AbstractScrollArea",s="vertical";
qx.Class.define(y,{extend:qx.ui.core.Widget,type:z,construct:function(){arguments.callee.base.call(this);
var Y=new qx.ui.layout.Grid();
Y.setColumnFlex(0,1);
Y.setRowFlex(0,1);
this._setLayout(Y);
this.addListener(q,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:p},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[G,E,A],init:G,apply:B},scrollbarY:{check:[G,E,A],init:G,apply:B},scrollbar:{group:[u,v]}},members:{_createChildControlImpl:function(M){var N;

switch(M){case H:N=new qx.ui.core.ScrollPane();
N.addListener(w,this._computeScrollbars,this);
N.addListener(r,this._onScrollPaneX,this);
N.addListener(t,this._onScrollPaneY,this);
this._add(N,{row:0,column:0});
break;
case I:N=new qx.ui.core.ScrollBar(x);
N.setMinWidth(0);
N.exclude();
N.addListener(C,this._onScrollBarX,this);
N.addListener(D,this._onChangeScrollbarXVisibility,this);
this._add(N,{row:1,column:0});
break;
case J:N=new qx.ui.core.ScrollBar(s);
N.setMinHeight(0);
N.exclude();
N.addListener(C,this._onScrollBarY,this);
N.addListener(D,this._onChangeScrollbarYVisibility,this);
this._add(N,{row:0,column:1});
break;
case F:N=new qx.ui.core.Widget();
N.setWidth(0);
N.setHeight(0);
N.exclude();
this._add(N,{row:1,column:1});
break;
}return N||arguments.callee.base.call(this,M);
},getPaneSize:function(){return this.getChildControl(H).getInnerSize();
},getItemTop:function(T){return this.getChildControl(H).getItemTop(T);
},getItemBottom:function(l){return this.getChildControl(H).getItemBottom(l);
},getItemLeft:function(O){return this.getChildControl(H).getItemLeft(O);
},getItemRight:function(m){return this.getChildControl(H).getItemRight(m);
},scrollToX:function(X){qx.ui.core.queue.Manager.flush();
this.getChildControl(I).scrollTo(X);
},scrollByX:function(V){qx.ui.core.queue.Manager.flush();
this.getChildControl(I).scrollBy(V);
},getScrollX:function(){var U=this.getChildControl(I,true);
return U?U.getPosition():0;
},scrollToY:function(P){qx.ui.core.queue.Manager.flush();
this.getChildControl(J).scrollTo(P);
},scrollByY:function(W){qx.ui.core.queue.Manager.flush();
this.getChildControl(J).scrollBy(W);
},getScrollY:function(){var ba=this.getChildControl(J,true);
return ba?ba.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(H).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(H).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var R=this._isChildControlVisible(I);
var S=this._isChildControlVisible(J);
var Q=(S)?this.getChildControl(J,true):(R?this.getChildControl(I,true):null);

if(Q){Q.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var K=this._isChildControlVisible(I);
var L=this._isChildControlVisible(J);

if(!K){this.scrollToX(0);
}K&&L?this._showChildControl(F):this._excludeChildControl(F);
},_onChangeScrollbarYVisibility:function(e){var n=this._isChildControlVisible(I);
var o=this._isChildControlVisible(J);

if(!o){this.scrollToY(0);
}n&&o?this._showChildControl(F):this._excludeChildControl(F);
},_computeScrollbars:function(){var h=this.getChildControl(H);
var content=h.getChild();

if(!content){this._excludeChildControl(I);
this._excludeChildControl(J);
return;
}var a=this.getInnerSize();
var g=h.getInnerSize();
var d=h.getScrollSize();
if(!g||!d){return;
}var i=this.getScrollbarX();
var j=this.getScrollbarY();

if(i===G&&j===G){var f=d.width>a.width;
var k=d.height>a.height;
if((f||k)&&!(f&&k)){if(f){k=d.height>g.height;
}else if(k){f=d.width>g.width;
}}}else{var f=i===E;
var k=j===E;
if(d.width>(f?g.width:a.width)&&i===G){f=true;
}
if(d.height>(f?g.height:a.height)&&j===G){k=true;
}}if(f){var c=this.getChildControl(I);
c.show();
c.setMaximum(Math.max(0,d.width-g.width-1));
c.setKnobFactor(g.width/d.width);
}else{this._excludeChildControl(I);
}
if(k){var b=this.getChildControl(J);
b.show();
b.setMaximum(Math.max(0,d.height-g.height-1));
b.setKnobFactor(g.height/d.height);
}else{this._excludeChildControl(J);
}}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelected:function(){return true;
},setSelected:function(d){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(c){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var c="qx.ui.core.IMultiSelection",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeSelection":b},members:{getSelection:function(){return true;
},setSelection:function(a){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},selectAll:function(){return true;
},addToSelection:function(e){return arguments.length==1;
},removeFromSelection:function(f){return arguments.length==1;
},getSelectables:function(){return true;
}}});
})();
(function(){var u="Boolean",t="changeSelection",s="single",r="qx.ui.core.MSelectionHandling",q="mousedown",p="losecapture",o="one",n="multi",m="_applyQuickSelection",l="mouseover",d="_applySelectionMode",k="_applyDragSelection",h="mouseup",c="mousemove",b="removeItem",g="keypress",f="__jG",i="addItem",a="additive",j="qx.event.type.Data";
qx.Mixin.define(r,{construct:function(){var y=this.SELECTION_MANAGER;
var x=this.__jG=new y(this);
this.addListener(q,x.handleMouseDown,x);
this.addListener(h,x.handleMouseUp,x);
this.addListener(l,x.handleMouseOver,x);
this.addListener(c,x.handleMouseMove,x);
this.addListener(p,x.handleLoseCapture,x);
this.addListener(g,x.handleKeyPress,x);
this.addListener(i,x.handleAddItem,x);
this.addListener(b,x.handleRemoveItem,x);
x.addListener(t,this._onSelectionChange,this);
},events:{"changeSelection":j},properties:{selectionMode:{check:[s,n,a,o],init:s,apply:d},dragSelection:{check:u,init:false,apply:k},quickSelection:{check:u,init:false,apply:m}},members:{__jG:null,selectAll:function(){this.__jG.selectAll();
},select:function(w){this.setSelected(w);
},setSelected:function(F){this.__jG.selectItem(F);
},isSelected:function(D){return this.__jG.isItemSelected(D);
},addToSelection:function(C){this.__jG.addItem(C);
},removeFromSelection:function(z){this.__jG.removeItem(z);
},selectRange:function(G,H){this.__jG.selectItemRange(G,H);
},clearSelection:function(){this.resetSelection();
},resetSelection:function(){this.__jG.clearSelection();
},replaceSelection:function(v){this.setSelection(v);
},setSelection:function(E){this.__jG.replaceSelection(E);
},getSelectedItem:function(){return this.getSelected();
},getSelected:function(){return this.__jG.getSelectedItem();
},getSelection:function(){return this.__jG.getSelection();
},getSortedSelection:function(){return this.__jG.getSortedSelection();
},isSelectionEmpty:function(){return this.__jG.isSelectionEmpty();
},getSelectionContext:function(){return this.__jG.getSelectionContext();
},_getManager:function(){return this.__jG;
},getSelectables:function(){return this.__jG.getSelectables();
},_applySelectionMode:function(A,B){this.__jG.setMode(A);
},_applyDragSelection:function(K,L){this.__jG.setDrag(K);
},_applyQuickSelection:function(I,J){this.__jG.setQuick(I);
},_onSelectionChange:function(e){this.fireDataEvent(t,e.getData());
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__jH:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__jI:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__jI[name];
s[t]();
}else{var u=this.__jH[name];
s[u](q);
}}}});
})();
(function(){var P="one",O="single",N="selected",M="additive",L="multi",K="PageUp",J="under",I="Left",H="lead",G="Down",bs="Up",br="Boolean",bq="PageDown",bp="anchor",bo="End",bn="Home",bm="Right",bl="right",bk="click",bj="above",W="left",X="Escape",U="A",V="Space",S="_applyMode",T="__kd",Q="interval",R="__kb",Y="changeSelection",ba="qx.event.type.Data",bd="quick",bc="key",bf="__jJ",be="abstract",bh="__jM",bg="__kc",bb="drag",bi="qx.ui.core.selection.Abstract";
qx.Class.define(bi,{type:be,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jJ={};
},events:{"changeSelection":ba},properties:{mode:{check:[O,L,M,P],init:O,apply:S},drag:{check:br,init:false},quick:{check:br,init:false}},members:{__jK:0,__jL:0,__jM:null,__jN:null,__jO:null,__jP:null,__jQ:null,__jR:null,__jS:null,__jT:null,__jU:null,__jV:null,__jW:null,__jX:null,__jY:null,__ka:null,__kb:null,__jJ:null,__kc:null,__kd:null,getSelectionContext:function(){return this.__ka;
},selectAll:function(){var z=this.getMode();

if(z==O||z==P){throw new Error("Can not select all items in selection mode: "+z);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cL){this._setSelectedItem(cL);
var cM=this.getMode();

if(cM!==O&&cM!==P){this._setLeadItem(cL);
this._setAnchorItem(cL);
}this._scrollItemIntoView(cL);
this._fireChange();
},addItem:function(cv){var cw=this.getMode();

if(cw===O||cw===P){this._setSelectedItem(cv);
}else{if(!this._getAnchorItem()){this._setAnchorItem(cv);
}this._setLeadItem(cv);
this._addToSelection(cv);
}this._scrollItemIntoView(cv);
this._fireChange();
},removeItem:function(ci){this._removeFromSelection(ci);

if(this.getMode()===P&&this.isSelectionEmpty()){var cj=this._getFirstSelectable();

if(cj){this.addItem(cj);
}if(cj==ci){return;
}}
if(this._getLeadItem()==ci){this._setLeadItem(null);
}
if(this._getAnchorItem()==ci){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(bB,bC){var bD=this.getMode();

if(bD==O||bD==P){throw new Error("Can not select multiple items in selection mode: "+bD);
}this._selectItemRange(bB,bC);
this._setAnchorItem(bB);
this._setLeadItem(bC);
this._scrollItemIntoView(bC);
this._fireChange();
},clearSelection:function(){if(this.getMode()==P){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cI){var cJ=this.getMode();

if(cJ==P||cJ===O){if(cI.length>1){throw new Error("Could not select more than one items in mode: "+cJ+"!");
}
if(cI.length==1){this.selectItem(cI[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cI);
}},getSelectedItem:function(){var C=this.getMode();

if(C===O||C===P){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__jJ);
},getSortedSelection:function(){var bF=this.getSelectables();
var bE=qx.lang.Object.getValues(this.__jJ);
bE.sort(function(a,b){return bF.indexOf(a)-bF.indexOf(b);
});
return bE;
},isItemSelected:function(x){var y=this._selectableToHashCode(x);
return this.__jJ[y]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__jJ);
},_setLeadItem:function(cn){var co=this.__kb;

if(co!==null){this._styleSelectable(co,H,false);
}
if(cn!==null){this._styleSelectable(cn,H,true);
}this.__kb=cn;
},_getLeadItem:function(){return this.__kb!==null?this.__kb:null;
},_setAnchorItem:function(ca){var cb=this.__kc;

if(cb){this._styleSelectable(cb,bp,false);
}
if(ca){this._styleSelectable(ca,bp,true);
}this.__kc=ca;
},_getAnchorItem:function(){return this.__kc!==null?this.__kc:null;
},_isSelectable:function(w){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bN=event.getTarget();
return this._isSelectable(bN)?bN:null;
},_selectableToHashCode:function(v){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cX,cY,da){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(cp){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(by){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(A,B){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(ct){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(cG,cH){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(c,d){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(cU,cV){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bv,bw){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bv===P){var bx=this._getFirstSelectable();

if(bx){this._setSelectedItem(bx);
this._scrollItemIntoView(bx);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var u=this.getMode();

if(u!==P&&u!==O){return;
}var t=this._getSelectableFromMouseEvent(event);

if(t===null){return;
}this._setSelectedItem(t);
this._fireChange(bd);
},handleMouseDown:function(event){var cC=this._getSelectableFromMouseEvent(event);

if(cC===null){return;
}var cE=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cB=event.isShiftPressed();
if(this.isItemSelected(cC)&&!cB&&!cE&&!this.getDrag()){this.__kd=cC;
return;
}else{this.__kd=null;
}this._scrollItemIntoView(cC);
switch(this.getMode()){case O:case P:this._setSelectedItem(cC);
break;
case M:this._setLeadItem(cC);
this._setAnchorItem(cC);
this._toggleInSelection(cC);
break;
case L:this._setLeadItem(cC);
if(cB){var cD=this._getAnchorItem();

if(cD===null){cD=this._getFirstSelectable();
this._setAnchorItem(cD);
}this._selectItemRange(cD,cC,cE);
}else if(cE){this._setAnchorItem(cC);
this._toggleInSelection(cC);
}else{this._setAnchorItem(cC);
this._setSelectedItem(cC);
}break;
}var cF=this.getMode();

if(this.getDrag()&&cF!==O&&cF!==P&&!cB&&!cE){this.__jQ=this._getLocation();
this.__jN=this._getScroll();
this.__jR=event.getDocumentLeft()+this.__jN.left;
this.__jS=event.getDocumentTop()+this.__jN.top;
this.__jT=true;
this._capture();
}this._fireChange(bk);
},handleMouseUp:function(event){var cA=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cx=event.isShiftPressed();

if(!cA&&!cx&&this.__kd){var cy=this._getSelectableFromMouseEvent(event);

if(cy===null||!this.isItemSelected(cy)){return;
}var cz=this.getMode();

if(cz===M){this._removeFromSelection(cy);
}else{this._setSelectedItem(cy);

if(this.getMode()===L){this._setLeadItem(cy);
this._setAnchorItem(cy);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__jT){return;
}this.__jU=event.getDocumentLeft();
this.__jV=event.getDocumentTop();
var bu=this.__jU+this.__jN.left;

if(bu>this.__jR){this.__jW=1;
}else if(bu<this.__jR){this.__jW=-1;
}else{this.__jW=0;
}var bt=this.__jV+this.__jN.top;

if(bt>this.__jS){this.__jX=1;
}else if(bt<this.__jS){this.__jX=-1;
}else{this.__jX=0;
}var location=this.__jQ;

if(this.__jU<location.left){this.__jK=this.__jU-location.left;
}else if(this.__jU>location.right){this.__jK=this.__jU-location.right;
}else{this.__jK=0;
}
if(this.__jV<location.top){this.__jL=this.__jV-location.top;
}else if(this.__jV>location.bottom){this.__jL=this.__jV-location.bottom;
}else{this.__jL=0;
}if(!this.__jM){this.__jM=new qx.event.Timer(100);
this.__jM.addListener(Q,this._onInterval,this);
}this.__jM.start();
this._autoSelect();
},handleAddItem:function(e){var cW=e.getData();

if(this.getMode()===P&&this.isSelectionEmpty()){this.addItem(cW);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__jT){return;
}if(this.__jY){this._fireChange(bk);
}delete this.__jT;
delete this.__jO;
delete this.__jP;
this._releaseCapture();
if(this.__jM){this.__jM.stop();
}},_onInterval:function(e){this._scrollBy(this.__jK,this.__jL);
this.__jN=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var p=this._getDimension();
var g=Math.max(0,Math.min(this.__jU-this.__jQ.left,p.width))+this.__jN.left;
var f=Math.max(0,Math.min(this.__jV-this.__jQ.top,p.height))+this.__jN.top;
if(this.__jO===g&&this.__jP===f){return;
}this.__jO=g;
this.__jP=f;
var r=this._getAnchorItem();
var j=r;
var n=this.__jW;
var q,h;

while(n!==0){q=n>0?this._getRelatedSelectable(j,bl):this._getRelatedSelectable(j,W);
if(q!==null){h=this._getSelectableLocationX(q);
if((n>0&&h.left<=g)||(n<0&&h.right>=g)){j=q;
continue;
}}break;
}var o=this.__jX;
var m,k;

while(o!==0){m=o>0?this._getRelatedSelectable(j,J):this._getRelatedSelectable(j,bj);
if(m!==null){k=this._getSelectableLocationY(m);
if((o>0&&k.top<=f)||(o<0&&k.bottom>=f)){j=m;
continue;
}}break;
}var s=this.getMode();

if(s===L){this._selectItemRange(r,j);
}else if(s===M){if(this.isItemSelected(r)){this._selectItemRange(r,j,true);
}else{this._deselectItemRange(r,j);
}this._setAnchorItem(j);
}this._fireChange(bb);
},__ke:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var bU,bT;
var bW=event.getKeyIdentifier();
var bV=this.getMode();
var bQ=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bR=event.isShiftPressed();
var bS=false;

if(bW===U&&bQ){if(bV!==O&&bV!==P){this._selectAllItems();
bS=true;
}}else if(bW===X){if(bV!==O&&bV!==P){this._clearSelection();
bS=true;
}}else if(bW===V){var bP=this._getLeadItem();

if(bP&&!bR){if(bQ||bV===M){this._toggleInSelection(bP);
}else{this._setSelectedItem(bP);
}bS=true;
}}else if(this.__ke[bW]){bS=true;

if(bV===O||bV==P){bU=this._getSelectedItem();
}else{bU=this._getLeadItem();
}var bY=this._getFirstSelectable();
var bO=this._getLastSelectable();

if(bU!==null){switch(bW){case bn:bT=bY;
break;
case bo:bT=bO;
break;
case bs:bT=this._getRelatedSelectable(bU,bj);
break;
case G:bT=this._getRelatedSelectable(bU,J);
break;
case I:bT=this._getRelatedSelectable(bU,W);
break;
case bm:bT=this._getRelatedSelectable(bU,bl);
break;
case K:bT=this._getPage(bU,true);
break;
case bq:bT=this._getPage(bU,false);
break;
}}else{switch(bW){case bn:case G:case bm:case bq:bT=bY;
break;
case bo:case bs:case I:case K:bT=bO;
break;
}}if(bT!==null){switch(bV){case O:case P:this._setSelectedItem(bT);
break;
case M:this._setLeadItem(bT);
break;
case L:if(bR){var bX=this._getAnchorItem();

if(bX===null){this._setAnchorItem(bX=this._getFirstSelectable());
}this._setLeadItem(bT);
this._selectItemRange(bX,bT,bQ);
}else{this._setAnchorItem(bT);
this._setLeadItem(bT);

if(!bQ){this._setSelectedItem(bT);
}}break;
}this._scrollItemIntoView(bT);
}}
if(bS){event.stop();
this._fireChange(bc);
}},_selectAllItems:function(){var cK=this.getSelectables();

for(var i=0,l=cK.length;i<l;i++){this._addToSelection(cK[i]);
}},_clearSelection:function(){var cc=this.__jJ;

for(var cd in cc){this._removeFromSelection(cc[cd]);
}this.__jJ={};
},_selectItemRange:function(cN,cO,cP){var cS=this._getSelectableRange(cN,cO);
if(!cP){var cR=this.__jJ;
var cT=this.__kf(cS);

for(var cQ in cR){if(!cT[cQ]){this._removeFromSelection(cR[cQ]);
}}}for(var i=0,l=cS.length;i<l;i++){this._addToSelection(cS[i]);
}},_deselectItemRange:function(cq,cr){var cs=this._getSelectableRange(cq,cr);

for(var i=0,l=cs.length;i<l;i++){this._removeFromSelection(cs[i]);
}},__kf:function(ck){var cm={};
var cl;

for(var i=0,l=ck.length;i<l;i++){cl=ck[i];
cm[this._selectableToHashCode(cl)]=cl;
}return cm;
},_getSelectedItem:function(){for(var F in this.__jJ){return this.__jJ[F];
}return null;
},_setSelectedItem:function(ce){if(this._isSelectable(ce)){var cf=this.__jJ;

if(!cf[ce.$$hash]||qx.lang.Object.hasMinLength(cf,2)){this._clearSelection();
this._addToSelection(ce);
}}},_addToSelection:function(cg){var ch=this._selectableToHashCode(cg);

if(!this.__jJ[ch]&&this._isSelectable(cg)){this.__jJ[ch]=cg;
this._styleSelectable(cg,N,true);
this.__jY=true;
}},_toggleInSelection:function(D){var E=this._selectableToHashCode(D);

if(!this.__jJ[E]){this.__jJ[E]=D;
this._styleSelectable(D,N,true);
}else{delete this.__jJ[E];
this._styleSelectable(D,N,false);
}this.__jY=true;
},_removeFromSelection:function(bz){var bA=this._selectableToHashCode(bz);

if(this.__jJ[bA]!==null){delete this.__jJ[bA];
this._styleSelectable(bz,N,false);
this.__jY=true;
}},_replaceMultiSelection:function(bG){var bJ=false;
var bM,bL;
var bH={};

for(var i=0,l=bG.length;i<l;i++){bM=bG[i];

if(this._isSelectable(bM)){bL=this._selectableToHashCode(bM);
bH[bL]=bM;
}}var bI=bM;
var bK=this.__jJ;

for(var bL in bK){if(bH[bL]){delete bH[bL];
}else{bM=bK[bL];
delete bK[bL];
this._styleSelectable(bM,N,false);
bJ=true;
}}for(var bL in bH){bM=bK[bL]=bH[bL];
this._styleSelectable(bM,N,true);
bJ=true;
}if(!bJ){return false;
}this._scrollItemIntoView(bI);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__jY=true;
this._fireChange();
},_fireChange:function(cu){if(this.__jY){this.__ka=cu||null;
this.fireDataEvent(Y,this.getSelection());
delete this.__jY;
}}},destruct:function(){this._disposeObjects(bh);
this._disposeFields(bf,T,bg,R);
}});
})();
(function(){var o="__kg",n="vertical",m="under",k="above",j="qx.ui.core.selection.Widget",h="left",g="right";
qx.Class.define(j,{extend:qx.ui.core.selection.Abstract,construct:function(c){arguments.callee.base.call(this);
this.__kg=c;
},members:{__kg:null,_isSelectable:function(H){return H.isEnabled()&&H.getLayoutParent()===this.__kg;
},_selectableToHashCode:function(J){return J.$$hash;
},_styleSelectable:function(y,z,A){A?y.addState(z):y.removeState(z);
},_capture:function(){this.__kg.capture();
},_releaseCapture:function(){this.__kg.releaseCapture();
},_getWidget:function(){return this.__kg;
},_getLocation:function(){var P=this.__kg.getContentElement().getDomElement();
return P?qx.bom.element.Location.get(P):null;
},_getDimension:function(){return this.__kg.getInnerSize();
},_getSelectableLocationX:function(e){var f=e.getBounds();

if(f){return {left:f.left,right:f.left+f.width};
}},_getSelectableLocationY:function(v){var w=v.getBounds();

if(w){return {top:w.top,bottom:w.top+w.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(K,L){},_scrollItemIntoView:function(x){this.__kg.scrollChildIntoView(x);
},getSelectables:function(){var N=this.__kg.getChildren();
var O=[];
var M;

for(var i=0,l=N.length;i<l;i++){M=N[i];

if(M.isEnabled()){O.push(M);
}}return O;
},_getSelectableRange:function(p,q){if(p===q){return [p];
}var u=this.__kg.getChildren();
var r=[];
var t=false;
var s;

for(var i=0,l=u.length;i<l;i++){s=u[i];

if(s===p||s===q){if(t){r.push(s);
break;
}else{t=true;
}}
if(t&&s.isEnabled()){r.push(s);
}}return r;
},_getFirstSelectable:function(){var I=this.__kg.getChildren();

for(var i=0,l=I.length;i<l;i++){if(I[i].isEnabled()){return I[i];
}}return null;
},_getLastSelectable:function(){var d=this.__kg.getChildren();

for(var i=d.length-1;i>0;i--){if(d[i].isEnabled()){return d[i];
}}return null;
},_getRelatedSelectable:function(B,C){var F=this.__kg.getOrientation()===n;
var E=this.__kg.getChildren();
var D=E.indexOf(B);
var G;

if((F&&C===k)||(!F&&C===h)){for(var i=D-1;i>=0;i--){G=E[i];

if(G.isEnabled()){return G;
}}}else if((F&&C===m)||(!F&&C===g)){for(var i=D+1;i<E.length;i++){G=E[i];

if(G.isEnabled()){return G;
}}}return null;
},_getPage:function(a,b){if(b){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this._disposeFields(o);
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(r){return (r.isEnabled()&&r.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var s=this._getWidget();
return {left:s.getScrollX(),top:s.getScrollY()};
},_scrollBy:function(b,c){var d=this._getWidget();
d.scrollByX(b);
d.scrollByY(c);
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
(function(){var m="right",l="above",k="left",j="under",i="qx.ui.tree.SelectionManager";
qx.Class.define(i,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(f){var g=f.getBounds();

if(g){var top=this._getWidget().getItemTop(f);
return {top:top,bottom:top+g.height};
}},_isSelectable:function(r){return r instanceof qx.ui.tree.AbstractTreeItem&&r.isEnabled();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var h=this._getWidget();
return h.getRoot().getItems(true,false,h.getHideRoot());
},_getSelectableRange:function(a,b){if(a===b){return [a];
}var c=this.getSelectables();
var d=c.indexOf(a);
var e=c.indexOf(b);

if(d<0||e<0){return [];
}
if(d<e){return c.slice(d,e+1);
}else{return c.slice(e,d+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var q=this.getSelectables();

if(q.length>0){return q[q.length-1];
}else{return null;
}},_getRelatedSelectable:function(n,o){var p=this._getWidget();

switch(o){case l:return p.getPreviousSiblingOf(n,false);
case j:return p.getNextSiblingOf(n,false);
case k:if(n.isOpenable()&&n.isOpen()){n.setOpen(false);
}break;
case m:if(n.isOpenable()&&!n.isOpen()){n.setOpen(true);
}break;
}return null;
}}});
})();
(function(){var t="dblclick",s="click",r="visible",q="Boolean",p="excluded",o="qx.event.type.Data",n="_applyHideRoot",m="none",l="_applyRootOpenClose",k="_applyOpenMode",d="__kh",j="changeRoot",h="changeOpenMode",c="pane",b="_applyRoot",g="qx.ui.tree.Tree",f="qx.ui.tree.AbstractTreeItem",i="tree";
qx.Class.define(g,{extend:qx.ui.core.AbstractScrollArea,implement:[qx.ui.core.ISingleSelection,qx.ui.core.IMultiSelection],include:[qx.ui.core.MSelectionHandling,qx.ui.core.MContentPadding],construct:function(){arguments.callee.base.call(this);
this.__kh=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(c).add(this.__kh);
this.initOpenMode();
this.initRootOpenClose();
},events:{addItem:o,removeItem:o},properties:{openMode:{check:[s,t,m],init:t,apply:k,event:h,themeable:true},root:{check:f,init:null,nullable:true,event:j,apply:b},hideRoot:{check:q,init:false,apply:n},rootOpenClose:{check:q,init:false,apply:l},appearance:{refine:true,init:i},focusable:{refine:true,init:true}},members:{__kh:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__kh;
},_applyRoot:function(u,v){var w=this.getChildrenContainer();

if(v){w.remove(v);

if(v.hasChildren()){w.remove(v.getChildrenContainer());
}}
if(u){w.add(u);

if(u.hasChildren()){w.add(u.getChildrenContainer());
}u.setVisibility(this.getHideRoot()?p:r);
u.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(x,y){var z=this.getRoot();

if(!z){return;
}z.setVisibility(x?p:r);
z.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(O,P){var Q=this.getRoot();

if(!Q){return;
}Q.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__kh;
},getNextSiblingOf:function(R,S){if((S!==false||R.isOpen())&&R.hasChildren()){return R.getChildren()[0];
}
while(R){var parent=R.getParent();

if(!parent){return null;
}var U=parent.getChildren();
var T=U.indexOf(R);

if(T>-1&&T<U.length-1){return U[T+1];
}R=parent;
}return null;
},getPreviousSiblingOf:function(B,C){var parent=B.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==B){return null;
}}}else{if(B==this.getRoot()){return null;
}}var F=parent.getChildren();
var D=F.indexOf(B);

if(D>0){var E=F[D-1];

while((C!==false||E.isOpen())&&E.hasChildren()){var G=E.getChildren();
E=G[G.length-1];
}return E;
}else{return parent;
}},getItems:function(H,I){return this.getRoot().getItems(H,I,this.getHideRoot());
},scrollChildIntoViewY:function(J,K,L){if(!this.getNextSiblingOf(J,false)){this.scrollToY(1000000);
}else{arguments.callee.base.call(this,J,K,L);
}},getTreeItem:function(a){while(a){if(a==this){return null;
}
if(a instanceof qx.ui.tree.AbstractTreeItem){return a;
}a=a.getLayoutParent();
}return null;
},_applyOpenMode:function(M,N){if(N==s){this.removeListener(s,this._onOpen,this);
}else if(N==t){this.removeListener(t,this._onOpen,this);
}
if(M==s){this.addListener(s,this._onOpen,this);
}else if(M==t){this.addListener(t,this._onOpen,this);
}},_onOpen:function(e){var A=this.getTreeItem(e.getTarget());

if(!A||!A.isOpenable()){return;
}A.setOpen(!A.isOpen());
e.stopPropagation();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var D="top",C="left",B="qx.debug",A="bottom",z="hAlign",w="vAlign",v="Integer",u="_applyLayoutChange",t="center",s="middle",X="right",W="flex",V="on",U="height",T="__kj",S="' is not supported by the Grid layout!",R="The property '",Q="__kp",P="Value must be positive",O="qx.ui.layout.Grid",K="maxHeight",L="__kl",I="__ki",J="width",G="__kk",H="minHeight",E="__kq",F="minWidth",M="__km",N="maxWidth";
qx.Class.define(O,{extend:qx.ui.layout.Abstract,construct:function(dg,dh){arguments.callee.base.call(this);
this.__ki=[];
this.__kj=[];

if(dg){this.setSpacingX(dg);
}
if(dh){this.setSpacingY(dh);
}},properties:{spacingX:{check:v,init:0,apply:u},spacingY:{check:v,init:0,apply:u}},members:{__kk:null,__ki:null,__kj:null,__kl:null,__km:null,__kn:null,__ko:null,__kp:null,__kq:null,verifyLayoutProperty:qx.core.Variant.select(B,{"on":function(bd,name,be){var bf={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(bf[name]==1,R+name+S);
this.assertInteger(be);
this.assert(be>=0,P);
},"off":null}),__kr:function(){var dC=[];
var dB=[];
var dD=[];
var dz=0;
var dy=0;
var dF=this._getLayoutChildren();

for(var i=0,l=dF.length;i<l;i++){var dA=dF[i];
var dE=dA.getLayoutProperties();
var dG=dE.row;
var dx=dE.column;
dE.colSpan=dE.colSpan||1;
dE.rowSpan=dE.rowSpan||1;
if(dG==null||dx==null){throw new Error("The layout properties 'row' and 'column' must be defined!");
}
if(dC[dG]&&dC[dG][dx]){throw new Error("There is already a widget in this cell ("+dG+", "+dx+")");
}
for(var x=dx;x<dx+dE.colSpan;x++){for(var y=dG;y<dG+dE.rowSpan;y++){if(dC[y]==undefined){dC[y]=[];
}dC[y][x]=dA;
dy=Math.max(dy,x);
dz=Math.max(dz,y);
}}
if(dE.rowSpan>1){dD.push(dA);
}
if(dE.colSpan>1){dB.push(dA);
}}for(var y=0;y<=dz;y++){if(dC[y]==undefined){dC[y]=[];
}}this.__kk=dC;
this.__kl=dB;
this.__km=dD;
this.__kn=dz;
this.__ko=dy;
delete this._invalidChildrenCache;
},_setRowData:function(bG,bH,bI){var bJ=this.__ki[bG];

if(!bJ){this.__ki[bG]={};
this.__ki[bG][bH]=bI;
}else{bJ[bH]=bI;
}},_setColumnData:function(Y,ba,bb){var bc=this.__kj[Y];

if(!bc){this.__kj[Y]={};
this.__kj[Y][ba]=bb;
}else{bc[ba]=bb;
}},setSpacing:function(df){this.setSpacingY(df);
this.setSpacingX(df);
},setColumnAlign:function(n,o,p){if(qx.core.Variant.isSet(B,V)){this.assertInArray(o,[C,t,X]);
this.assertInArray(p,[D,s,A]);
}this._setColumnData(n,z,o);
this._setColumnData(n,w,p);
this._applyLayoutChange();
return this;
},getColumnAlign:function(dH){var dI=this.__kj[dH]||{};
return {vAlign:dI.vAlign||D,hAlign:dI.hAlign||C};
},setRowAlign:function(h,k,m){if(qx.core.Variant.isSet(B,V)){this.assertInArray(k,[C,t,X]);
this.assertInArray(m,[D,s,A]);
}this._setRowData(h,z,k);
this._setRowData(h,w,m);
this._applyLayoutChange();
return this;
},getRowAlign:function(dd){var de=this.__ki[dd]||{};
return {vAlign:de.vAlign||D,hAlign:de.hAlign||C};
},getCellWidget:function(eo,ep){if(this._invalidChildrenCache){this.__kr();
}return this.__kk[eo][ep]||null;
},getCellAlign:function(cU,cV){var dc=D;
var da=C;
var db=this.__ki[cU];
var cX=this.__kj[cV];
var cW=this.__kk[cU][cV];

if(cW){var cY={vAlign:cW.getAlignY(),hAlign:cW.getAlignX()};
}else{cY={};
}if(cY.vAlign){dc=cY.vAlign;
}else if(db&&db.vAlign){dc=db.vAlign;
}else if(cX&&cX.vAlign){dc=cX.vAlign;
}if(cY.hAlign){da=cY.hAlign;
}else if(cX&&cX.hAlign){da=cX.hAlign;
}else if(db&&db.hAlign){da=db.hAlign;
}return {vAlign:dc,hAlign:da};
},setColumnFlex:function(bm,bn){this._setColumnData(bm,W,bn);
this._applyLayoutChange();
return this;
},getColumnFlex:function(eq){var er=this.__kj[eq]||{};
return er.flex!==undefined?er.flex:0;
},setRowFlex:function(q,r){this._setRowData(q,W,r);
this._applyLayoutChange();
return this;
},getRowFlex:function(bM){var bN=this.__ki[bM]||{};
var bO=bN.flex!==undefined?bN.flex:0;
return bO;
},setColumnMaxWidth:function(dJ,dK){this._setColumnData(dJ,N,dK);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bR){var bS=this.__kj[bR]||{};
return bS.maxWidth!==undefined?bS.maxWidth:Infinity;
},setColumnWidth:function(em,en){this._setColumnData(em,J,en);
this._applyLayoutChange();
return this;
},getColumnWidth:function(es){var et=this.__kj[es]||{};
return et.width!==undefined?et.width:null;
},setColumnMinWidth:function(bi,bj){this._setColumnData(bi,F,bj);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bK){var bL=this.__kj[bK]||{};
return bL.minWidth||0;
},setRowMaxHeight:function(bk,bl){this._setRowData(bk,K,bl);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(ek){var el=this.__ki[ek]||{};
return el.maxHeight||Infinity;
},setRowHeight:function(bP,bQ){this._setRowData(bP,U,bQ);
this._applyLayoutChange();
return this;
},getRowHeight:function(dL){var dM=this.__ki[dL]||{};
return dM.height!==undefined?dM.height:null;
},setRowMinHeight:function(bT,bU){this._setRowData(bT,H,bU);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bg){var bh=this.__ki[bg]||{};
return bh.minHeight||0;
},__ks:function(cB){var cF=cB.getSizeHint();
var cE=cB.getMarginLeft()+cB.getMarginRight();
var cD=cB.getMarginTop()+cB.getMarginBottom();
var cC={height:cF.height+cD,width:cF.width+cE,minHeight:cF.minHeight+cD,minWidth:cF.minWidth+cE,maxHeight:cF.maxHeight+cD,maxWidth:cF.maxWidth+cE};
return cC;
},_fixHeightsRowSpan:function(di){var du=this.getSpacingY();

for(var i=0,l=this.__km.length;i<l;i++){var dl=this.__km[i];
var dn=this.__ks(dl);
var dp=dl.getLayoutProperties();
var dk=dp.row;
var ds=du*(dp.rowSpan-1);
var dj=ds;
var dr={};

for(var j=0;j<dp.rowSpan;j++){var dw=dp.row+j;
var dm=di[dw];
var dv=this.getRowFlex(dw);

if(dv>0){dr[dw]={min:dm.minHeight,value:dm.height,max:dm.maxHeight,flex:dv};
}ds+=dm.height;
dj+=dm.minHeight;
}if(ds<dn.height){var dt=qx.ui.layout.Util.computeFlexOffsets(dr,dn.height,ds);

for(var j=0;j<dp.rowSpan;j++){var dq=dt[dk+j]?dt[dk+j].offset:0;
di[dk+j].height+=dq;
}}if(dj<dn.minHeight){var dt=qx.ui.layout.Util.computeFlexOffsets(dr,dn.minHeight,dj);

for(var j=0;j<dp.rowSpan;j++){var dq=dt[dk+j]?dt[dk+j].offset:0;
di[dk+j].minHeight+=dq;
}}}},_fixWidthsColSpan:function(cG){var cK=this.getSpacingX();

for(var i=0,l=this.__kl.length;i<l;i++){var cH=this.__kl[i];
var cJ=this.__ks(cH);
var cM=cH.getLayoutProperties();
var cI=cM.column;
var cS=cK*(cM.colSpan-1);
var cL=cS;
var cN={};
var cP;

for(var j=0;j<cM.colSpan;j++){var cT=cM.column+j;
var cR=cG[cT];
var cQ=this.getColumnFlex(cT);
if(cQ>0){cN[cT]={min:cR.minWidth,value:cR.width,max:cR.maxWidth,flex:cQ};
}cS+=cR.width;
cL+=cR.minWidth;
}if(cS<cJ.width){var cO=qx.ui.layout.Util.computeFlexOffsets(cN,cJ.width,cS);

for(var j=0;j<cM.colSpan;j++){cP=cO[cI+j]?cO[cI+j].offset:0;
cG[cI+j].width+=cP;
}}if(cL<cJ.minWidth){var cO=qx.ui.layout.Util.computeFlexOffsets(cN,cJ.minWidth,cL);

for(var j=0;j<cM.colSpan;j++){cP=cO[cI+j]?cO[cI+j].offset:0;
cG[cI+j].minWidth+=cP;
}}}},_getRowHeights:function(){if(this.__kp!=null){return this.__kp;
}var dW=[];
var dP=this.__kn;
var dO=this.__ko;

for(var dX=0;dX<=dP;dX++){var dQ=0;
var dS=0;
var dR=0;

for(var dV=0;dV<=dO;dV++){var dN=this.__kk[dX][dV];

if(!dN){continue;
}var dT=dN.getLayoutProperties().rowSpan||0;

if(dT>1){continue;
}var dU=this.__ks(dN);

if(this.getRowFlex(dX)>0){dQ=Math.max(dQ,dU.minHeight);
}else{dQ=Math.max(dQ,dU.height);
}dS=Math.max(dS,dU.height);
}var dQ=Math.max(dQ,this.getRowMinHeight(dX));
var dR=this.getRowMaxHeight(dX);

if(this.getRowHeight(dX)!==null){var dS=this.getRowHeight(dX);
}else{var dS=Math.max(dQ,Math.min(dS,dR));
}dW[dX]={minHeight:dQ,height:dS,maxHeight:dR};
}
if(this.__km.length>0){this._fixHeightsRowSpan(dW);
}this.__kp=dW;
return dW;
},_getColWidths:function(){if(this.__kq!=null){return this.__kq;
}var ed=[];
var ea=this.__ko;
var ec=this.__kn;

for(var ei=0;ei<=ea;ei++){var eg=0;
var ef=0;
var eb=Infinity;

for(var ej=0;ej<=ec;ej++){var dY=this.__kk[ej][ei];

if(!dY){continue;
}var ee=dY.getLayoutProperties().colSpan||0;

if(ee>1){continue;
}var eh=this.__ks(dY);

if(this.getColumnFlex(ei)>0){ef=Math.max(ef,eh.minWidth);
}else{ef=Math.max(ef,eh.width);
}eg=Math.max(eg,eh.width);
}var ef=Math.max(ef,this.getColumnMinWidth(ei));
var eb=this.getColumnMaxWidth(ei);

if(this.getColumnWidth(ei)!==null){var eg=this.getColumnWidth(ei);
}else{var eg=Math.max(ef,Math.min(eg,eb));
}ed[ei]={minWidth:ef,width:eg,maxWidth:eb};
}
if(this.__kl.length>0){this._fixWidthsColSpan(ed);
}this.__kq=ed;
return ed;
},_getColumnFlexOffsets:function(a){var b=this.getSizeHint();
var f=a-b.width;

if(f==0){return {};
}var d=this._getColWidths();
var c={};

for(var i=0,l=d.length;i<l;i++){var g=d[i];
var e=this.getColumnFlex(i);

if((e<=0)||(g.width==g.maxWidth&&f>0)||(g.width==g.minWidth&&f<0)){continue;
}c[i]={min:g.minWidth,value:g.width,max:g.maxWidth,flex:e};
}return qx.ui.layout.Util.computeFlexOffsets(c,a,b.width);
},_getRowFlexOffsets:function(bo){var bp=this.getSizeHint();
var bs=bo-bp.height;

if(bs==0){return {};
}var bt=this._getRowHeights();
var bq={};

for(var i=0,l=bt.length;i<l;i++){var bu=bt[i];
var br=this.getRowFlex(i);

if((br<=0)||(bu.height==bu.maxHeight&&bs>0)||(bu.height==bu.minHeight&&bs<0)){continue;
}bq[i]={min:bu.minHeight,value:bu.height,max:bu.maxHeight,flex:br};
}return qx.ui.layout.Util.computeFlexOffsets(bq,bo,bp.height);
},renderLayout:function(bV,bW){if(this._invalidChildrenCache){this.__kr();
}var cl=qx.ui.layout.Util;
var bY=this.getSpacingX();
var cf=this.getSpacingY();
var cq=this._getColWidths();
var cp=this._getColumnFlexOffsets(bV);
var ca=[];
var cs=this.__ko;
var bX=this.__kn;
var cr;

for(var ct=0;ct<=cs;ct++){cr=cp[ct]?cp[ct].offset:0;
ca[ct]=cq[ct].width+cr;
}var ci=this._getRowHeights();
var ck=this._getRowFlexOffsets(bW);
var cz=[];

for(var cg=0;cg<=bX;cg++){cr=ck[cg]?ck[cg].offset:0;
cz[cg]=ci[cg].height+cr;
}var cA=0;

for(var ct=0;ct<=cs;ct++){var top=0;

for(var cg=0;cg<=bX;cg++){var cn=this.__kk[cg][ct];
if(!cn){top+=cz[cg]+cf;
continue;
}var cb=cn.getLayoutProperties();
if(cb.row!==cg||cb.column!==ct){top+=cz[cg]+cf;
continue;
}var cy=bY*(cb.colSpan-1);

for(var i=0;i<cb.colSpan;i++){cy+=ca[ct+i];
}var co=cf*(cb.rowSpan-1);

for(var i=0;i<cb.rowSpan;i++){co+=cz[cg+i];
}var cc=cn.getSizeHint();
var cw=cn.getMarginTop();
var cm=cn.getMarginLeft();
var cj=cn.getMarginBottom();
var ce=cn.getMarginRight();
var ch=Math.max(cc.minWidth,Math.min(cy-cm-ce,cc.maxWidth));
var cx=Math.max(cc.minHeight,Math.min(co-cw-cj,cc.maxHeight));
var cu=this.getCellAlign(cg,ct);
var cv=cA+cl.computeHorizontalAlignOffset(cu.hAlign,ch,cy,cm,ce);
var cd=top+cl.computeVerticalAlignOffset(cu.vAlign,cx,co,cw,cj);
cn.renderLayout(cv,cd,ch,cx);
top+=cz[cg]+cf;
}cA+=ca[ct]+bY;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__kq=null;
this.__kp=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kr();
}var bz=this._getColWidths();
var bB=0,bC=0;

for(var i=0,l=bz.length;i<l;i++){var bD=bz[i];

if(this.getColumnFlex(i)>0){bB+=bD.minWidth;
}else{bB+=bD.width;
}bC+=bD.width;
}var bE=this._getRowHeights();
var bx=0,bA=0;

for(var i=0,l=bE.length;i<l;i++){var bF=bE[i];

if(this.getRowFlex(i)>0){bx+=bF.minHeight;
}else{bx+=bF.height;
}bA+=bF.height;
}var bw=this.getSpacingX()*(bz.length-1);
var bv=this.getSpacingY()*(bE.length-1);
var by={minWidth:bB+bw,width:bC+bw,minHeight:bx+bv,height:bA+bv};
return by;
}},destruct:function(){this._disposeFields(G,I,T,L,M,E,Q);
}});
})();
(function(){var s="resize",r="scrollY",q="typeof value=='number'&&value>=0&&value<=this.getScrollMaxX()",p="update",o="scrollX",n="_applyScrollX",m="_applyScrollY",l="appear",k="qx.ui.core.ScrollPane",j="qx.event.type.Event",h="typeof value=='number'&&value>=0&&value<=this.getScrollMaxY()",i="scroll";
qx.Class.define(k,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(s,this._onUpdate);
var C=this.getContentElement();
C.addListener(i,this._onScroll,this);
C.addListener(l,this._onAppear,this);
},events:{update:j},properties:{scrollX:{check:q,apply:n,event:o,init:0},scrollY:{check:h,apply:m,event:r,init:0}},members:{add:function(L){var M=this._getChildren()[0];

if(M){this._remove(M);
M.removeListener(s,this._onUpdate,this);
}
if(L){this._add(L);
L.addListener(s,this._onUpdate,this);
}},remove:function(v){if(v){this._remove(v);
v.removeListener(s,this._onUpdate,this);
}},getChild:function(){return this._getChildren()[0]||null;
},_onUpdate:function(e){this.fireEvent(p);
},_onScroll:function(e){var K=this.getContentElement();
this.setScrollX(K.getScrollX());
this.setScrollY(K.getScrollY());
},_onAppear:function(e){var G=this.getContentElement();
var D=this.getScrollX();
var E=G.getScrollX();

if(D!=E){G.scrollToX(D);
}var H=this.getScrollY();
var F=G.getScrollY();

if(H!=F){G.scrollToY(H);
}},getItemTop:function(J){var top=0;

do{top+=J.getBounds().top;
J=J.getLayoutParent();
}while(J&&J!==this);
return top;
},getItemBottom:function(I){return this.getItemTop(I)+I.getBounds().height;
},getItemLeft:function(c){var d=0;
var parent;

do{d+=c.getBounds().left;
parent=c.getLayoutParent();

if(parent){d+=parent.getInsets().left;
}c=parent;
}while(c&&c!==this);
return d;
},getItemRight:function(A){return this.getItemLeft(A)+A.getBounds().width;
},getScrollSize:function(){return this.getChild().getBounds();
},getScrollMaxX:function(){var b=this.getInnerSize();
var a=this.getScrollSize();

if(b&&a){return Math.max(0,a.width-b.width);
}return 0;
},getScrollMaxY:function(){var u=this.getInnerSize();
var t=this.getScrollSize();

if(u&&t){return Math.max(0,t.height-u.height);
}return 0;
},scrollToX:function(w){var z=this.getScrollMaxX();

if(w<0){w=0;
}else if(w>z){w=z;
}this.setScrollX(w);
},scrollToY:function(f){var g=this.getScrollMaxY();

if(f<0){f=0;
}else if(f>g){f=g;
}this.setScrollY(f);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(e){this.getContentElement().scrollToX(e);
},_applyScrollY:function(B){this.getContentElement().scrollToY(B);
}}});
})();
(function(){var n="slider",m="horizontal",l="button-begin",k="button-end",j="vertical",i="Integer",h="execute",g="right",f="left",d="down",A="up",z="PositiveNumber",y="changeValue",x="typeof value==='number'&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="_applyOrientation",u="qx.ui.core.ScrollBar",t="_applyPageStep",s="PositiveInteger",r="scroll",p="_applyPosition",q="scrollbar",o="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(G){arguments.callee.base.call(this);
this._createChildControl(l);
this._createChildControl(n);
this._createChildControl(k);
if(G!=null){this.setOrientation(G);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:q},orientation:{check:[m,j],init:m,apply:v},maximum:{check:s,apply:o,init:100},position:{check:x,init:0,apply:p,event:r},singleStep:{check:i,init:20},pageStep:{check:i,init:10,apply:t},knobFactor:{check:z,apply:w,nullable:true}},members:{_createChildControlImpl:function(a){var b;

switch(a){case n:b=new qx.ui.core.ScrollSlider;
b.setPageStep(100);
b.setFocusable(false);
b.addListener(y,this._onChangeSliderValue,this);
this._add(b,{flex:1});
break;
case l:b=new qx.ui.form.RepeatButton;
b.setFocusable(false);
b.addListener(h,this._onExecuteBegin,this);
this._add(b);
break;
case k:b=new qx.ui.form.RepeatButton;
b.setFocusable(false);
b.addListener(h,this._onExecuteEnd,this);
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},_applyMaximum:function(B){this.getChildControl(n).setMaximum(B);
},_applyPosition:function(c){this.getChildControl(n).setValue(c);
},_applyKnobFactor:function(E){this.getChildControl(n).setKnobFactor(E);
},_applyPageStep:function(H){this.getChildControl(n).setPageStep(H);
},_applyOrientation:function(J,K){var L=this._getLayout();

if(L){L.dispose();
}if(J===m){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(j,m);
this.getChildControl(l).replaceState(A,f);
this.getChildControl(k).replaceState(d,g);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(m,j);
this.getChildControl(l).replaceState(f,A);
this.getChildControl(k).replaceState(g,d);
}this.getChildControl(n).setOrientation(J);
},scrollTo:function(F){this.getChildControl(n).slideTo(F);
},scrollBy:function(I){this.getChildControl(n).slideBy(I);
},scrollBySteps:function(C){var D=this.getSingleStep();
this.getChildControl(n).slideBy(C*D);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
}}});
})();
(function(){var v="knob",u="horizontal",t="vertical",s="Integer",r="px",q="mousemove",p="resize",o="left",n="top",m="mouseup",bc="slider",bb="PageUp",ba="mousedown",Y="height",X="changeValue",W="Left",V="Down",U="Up",T="dblclick",S="qx.ui.form.Slider",C="PageDown",D="mousewheel",A="interval",B="_applyValue",y="_applyKnobFactor",z="End",w="String",x="width",E="_applyOrientation",F="Home",K="floor",J="_applyMinimum",M="click",L="Right",O="keypress",N="ceil",H="changeName",R="losecapture",Q="contextmenu",P="_applyMaximum",G="Number",I="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(S,{extend:qx.ui.core.Widget,implement:qx.ui.form.IFormElement,construct:function(bR){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(O,this._onKeyPress);
this.addListener(D,this._onMouseWheel);
this.addListener(ba,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(R,this._onMouseUp);
this.addListener(p,this._onUpdate);
this.addListener(Q,this._onStopEvent);
this.addListener(M,this._onStopEvent);
this.addListener(T,this._onStopEvent);
if(bR!=null){this.setOrientation(bR);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bc},focusable:{refine:true,init:true},orientation:{check:[u,t],init:u,apply:E},name:{check:w,nullable:true,event:H},value:{check:I,init:0,apply:B,event:X},minimum:{check:s,init:0,apply:J},maximum:{check:s,init:100,apply:P},singleStep:{check:s,init:1},pageStep:{check:s,init:10},knobFactor:{check:G,apply:y,nullable:true}},members:{__kt:null,__ku:null,__kv:null,__kw:null,__kx:null,__ky:null,__kz:null,__kA:null,__kB:null,_createChildControlImpl:function(bw){var bx;

switch(bw){case v:bx=new qx.ui.core.Widget();
bx.addListener(p,this._onUpdate,this);
this._add(bx);
break;
}return bx||arguments.callee.base.call(this,bw);
},_onMouseWheel:function(e){var f=e.getWheelDelta()>0?1:-1;
this.slideBy(f*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var l=this.getOrientation()===u;
var k=l?W:U;
var forward=l?L:V;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case k:this.slideBack();
break;
case C:this.slidePageForward();
break;
case bb:this.slidePageBack();
break;
case F:this.slideToBegin();
break;
case z:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__kw){return;
}var bq=this.__kD;
var bo=this.getChildControl(v);
var bp=bq?o:n;
var bs=bq?e.getDocumentLeft():e.getDocumentTop();
var bt=this.__kt=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bp];
var br=this.__ku=qx.bom.element.Location.get(bo.getContainerElement().getDomElement())[bp];

if(e.getTarget()===bo){this.__kw=true;
this.__kx=bs+bt-br;
}else{this.__ky=true;
this.__kz=bs<=br?-1:1;
this.__kE(e);
this._onInterval();
if(!this.__kB){this.__kB=new qx.event.Timer(100);
this.__kB.addListener(A,this._onInterval,this);
}this.__kB.start();
}this.addListener(q,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__kw){this.releaseCapture();
delete this.__kw;
delete this.__kx;
}else if(this.__ky){this.__kB.stop();
this.releaseCapture();
delete this.__ky;
delete this.__kz;
delete this.__kA;
}this.removeListener(q,this._onMouseMove);
if(e.getType()===m){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__kw){var bN=this.__kD?e.getDocumentLeft():e.getDocumentTop();
var bM=bN-this.__kx;
this.slideTo(this._positionToValue(bM));
}else if(this.__ky){this.__kE(e);
}e.stopPropagation();
},_onInterval:function(e){var bf=this.getValue()+(this.__kz*this.getPageStep());
if(bf<this.getMinimum()){bf=this.getMinimum();
}else if(bf>this.getMaximum()){bf=this.getMaximum();
}var bg=this.__kz==-1;

if((bg&&bf<=this.__kA)||(!bg&&bf>=this.__kA)){bf=this.__kA;
}this.slideTo(bf);
},_onUpdate:function(e){var bm=this.getInnerSize();
var bn=this.getChildControl(v).getBounds();
var bl=this.__kD?x:Y;
this._updateKnobSize();
this.__kC=bm[bl]-bn[bl];
this.__kv=bn[bl];
this._updateKnobPosition();
},__kD:false,__kC:0,__kE:function(e){var by=this.__kD;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__kt;
var bz=this.__ku;
var bJ=this.__kv;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__kz<0?K:N;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__kA==null||(this.__kz==-1&&bD<=this.__kA)||(this.__kz==1&&bD>=this.__kA)){this.__kA=bD;
}},_positionToValue:function(g){var h=this.__kC;
if(h==null||h==0){return 0;
}var j=g/h;

if(j<0){j=0;
}else if(j>1){j=1;
}var i=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(i*j);
},_valueToPosition:function(bS){var bT=this.__kC;

if(bT==null){return 0;
}var bU=this.getMaximum()-this.getMinimum();
if(bU==0){return 0;
}var bS=bS-this.getMinimum();
var bV=bS/bU;

if(bV<0){bV=0;
}else if(bV>1){bV=1;
}return Math.round(bT*bV);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(a){var b=this.getChildControl(v).getContainerElement();

if(this.__kD){b.setStyle(o,a+r,true);
}else{b.setStyle(n,a+r,true);
}},_updateKnobSize:function(){var bi=this.getKnobFactor();

if(bi==null){return;
}var bh=this.getInnerSize();

if(bh==null){return;
}if(this.__kD){this.getChildControl(v).setWidth(Math.round(bi*bh.width));
}else{this.getChildControl(v).setHeight(Math.round(bi*bh.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bd){this.slideTo(this.getValue()+bd);
},slideTo:function(be){if(be<this.getMinimum()){be=this.getMinimum();
}else if(be>this.getMaximum()){be=this.getMaximum();
}else{be=this.getMinimum()+Math.round((be-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(be);
},_applyOrientation:function(bO,bP){var bQ=this.getChildControl(v);
this.__kD=bO===u;
if(this.__kD){this.removeState(t);
bQ.removeState(t);
this.addState(u);
bQ.addState(u);
bQ.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(u);
bQ.removeState(u);
this.addState(t);
bQ.addState(t);
bQ.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bu,bv){if(bu!=null){this._updateKnobSize();
}else{if(this.__kD){this.getChildControl(v).resetWidth();
}else{this.getChildControl(v).resetHeight();
}}},_applyValue:function(bj,bk){this._updateKnobPosition();
},_applyMinimum:function(c,d){if(this.getValue()<c){this.setValue(c);
}this._updateKnobPosition();
},_applyMaximum:function(bK,bL){if(this.getValue()>bK){this.setValue(bK);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var q="pressed",p="abandoned",o="Integer",n="hovered",m="qx.event.type.Event",l="Enter",k="Space",j="press",i="qx.ui.form.RepeatButton",h="release",d="interval",g="__kF",f="execute";
qx.Class.define(i,{extend:qx.ui.form.Button,construct:function(r,s){arguments.callee.base.call(this,r,s);
this.__kF=new qx.event.Timer(this.getInterval());
this.__kF.addListener(d,this._onInterval,this);
},events:{"execute":m,"press":m,"release":m},properties:{interval:{check:o,init:100},firstInterval:{check:o,init:500},minTimer:{check:o,init:20},timerDecrease:{check:o,init:2}},members:{__kG:null,__kH:null,__kF:null,press:function(){if(this.isEnabled()){if(!this.hasState(q)){this.__kI();
}this.removeState(p);
this.addState(q);
}},release:function(c){if(!this.isEnabled()){return;
}if(this.hasState(q)){if(!this.__kH){this.execute();
}}this.removeState(q);
this.removeState(p);
this.__kJ();
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);

if(!a){this.removeState(q);
this.removeState(p);
this.__kJ();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(p)){this.removeState(p);
this.addState(q);
this.__kF.start();
}this.addState(n);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(n);

if(this.hasState(q)){this.removeState(q);
this.addState(p);
this.__kF.stop();
this.__kG=this.getInterval();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__kI();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(p)){this.addState(n);

if(this.hasState(q)&&!this.__kH){this.execute();
}}this.__kJ();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(q)){if(!this.__kH){this.execute();
}this.removeState(q);
this.removeState(p);
e.stopPropagation();
this.__kJ();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(p);
this.addState(q);
e.stopPropagation();
this.__kI();
}},_onInterval:function(e){this.__kF.stop();
if(this.__kG==null){this.__kG=this.getInterval();
}this.__kG=(Math.max(this.getMinTimer(),this.__kG-this.getTimerDecrease()));
this.__kF.restartWith(this.__kG);
this.__kH=true;
this.fireEvent(f);
},__kI:function(){this.fireEvent(j);
this.__kH=false;
this.__kF.setInterval(this.getFirstInterval());
this.__kF.start();
this.removeState(p);
this.addState(q);
},__kJ:function(){this.fireEvent(h);
this.__kF.stop();
this.__kG=null;
this.removeState(p);
this.removeState(q);
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var bd="open",bc="auto",bb="qx.debug",ba="icon",Y="middle",X="label",W="on",V="changeOpen",U="excluded",T="String",bB="visible",bA="opened",bz="always",by="qx.ui.tree.AbstractTreeItem",bx="addItem",bw="Boolean",bv="Invalid child index: ",bu="__kO",bt="Integer",bs="_applyIndent",bk="changeOpenSymbolMode",bl="_applyOpenSymbolMode",bi="-label",bj="-icon",bg="resize",bh="",be="removeItem",bf="__kL",bm="abstract",bn="never",bp="_applyIcon",bo="__kK",br="_applyOpen",bq="_applyLabel";
qx.Class.define(by,{extend:qx.ui.core.Widget,type:bm,construct:function(){arguments.callee.base.call(this);
this.__kK=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bw,init:false,event:V,apply:br},openSymbolMode:{check:[bz,bn,bc],init:bc,event:bk,apply:bl},indent:{check:bt,init:19,apply:bs,themeable:true},parent:{check:by,nullable:true},icon:{check:T,apply:bp,nullable:true,themeable:true},label:{check:T,apply:bq,init:bh,dispose:true}},members:{__kK:null,__kL:null,__kM:null,__kN:null,__kO:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(z){var A;

switch(z){case X:A=new qx.ui.basic.Label().set({appearance:this.getAppearance()+bi,alignY:Y});
break;
case ba:A=new qx.ui.basic.Image().set({appearance:this.getAppearance()+bj,alignY:Y});
break;
case bd:A=new qx.ui.tree.FolderOpenButton().set({alignY:Y});
A.addListener(V,this._onChangeOpen,this);
A.addListener(bg,this._updateIndent,this);
break;
}return A||arguments.callee.base.call(this,z);
},getTree:function(){var bJ=this;

while(bJ.getParent()){bJ=bJ.getParent();
}var bI=bJ.getLayoutParent()?bJ.getLayoutParent().getLayoutParent():0;

if(bI&&bI instanceof qx.ui.core.ScrollPane){return bI.getLayoutParent();
}return null;
},addWidget:function(p,q){this._add(p,q);
},addSpacer:function(){if(!this.__kO){this.__kO=new qx.ui.core.Spacer();
}else{this._remove(this.__kO);
}this._add(this.__kO);
},addOpenButton:function(){this._add(this.getChildControl(bd));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bC=this.getChildControl(ba);

if(this.__kN){this._remove(bC);
}this._add(bC);
this.__kN=true;
},addLabel:function(D){var E=this.getChildControl(X);

if(this.__kM){this._remove(E);
}
if(D){this.setLabel(D);
}else{E.setContent(this.getLabel());
}this._add(E);
this.__kM=true;
},addState:function(bN){arguments.callee.base.call(this,bN);
var bP=this._getChildren();

for(var i=0,l=bP.length;i<l;i++){var bO=bP[i];

if(bO.addState){bP[i].addState(bN);
}}},removeState:function(bU){arguments.callee.base.call(this,bU);
var bW=this._getChildren();

for(var i=0,l=bW.length;i<l;i++){var bV=bW[i];

if(bV.addState){bW[i].removeState(bU);
}}},_applyIcon:function(B,C){this.getChildControl(ba).setSource(B);
},_applyLabel:function(j,k){this.getChildControl(X).setContent(j);
},_applyOpen:function(bG,bH){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bG?bB:U);
}var open=this.getChildControl(bd,true);

if(open){open.setOpen(bG);
}bG?this.addState(bA):this.removeState(bA);
},isOpenable:function(){var o=this.getOpenSymbolMode();
return (o===bz||o===bc&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bd,true);

if(!open){return false;
}var bD=this.getTree();

if(!bD.getRootOpenClose()){if(bD.getHideRoot()){if(bD.getRoot()==this.getParent()){return false;
}}else{if(bD.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bE,bF){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bL=0;
var open=this.getChildControl(bd,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bK=open.getBounds();

if(bK){bL=bK.width;
}else{return;
}}else{open.exclude();
}}this.__kO.setWidth((this.getLevel()+1)*this.getIndent()-bL);
},_applyIndent:function(R,S){this._updateIndent();
},getLevel:function(){var O=this.getTree();

if(!O){return;
}var P=this;
var Q=-1;

while(P){P=P.getParent();
Q+=1;
}if(O.getHideRoot()){Q-=1;
}
if(!O.getRootOpenClose()){Q-=1;
}return Q;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__kL){this.__kL=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?bB:U});
}return this.__kL;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__kK;
},hasChildren:function(){return this.__kK?this.__kK.length>0:false;
},getItems:function(a,b,c){if(c!==false){var d=[];
}else{var d=[this];
}var h=this.hasChildren()&&(b!==false||this.isOpen());

if(h){var g=this.getChildren();

if(a===false){d=d.concat(g);
}else{for(var i=0,f=g.length;i<f;i++){d=d.concat(g[i].getItems(a,b,false));
}}}return d;
},recursiveAddToWidgetQueue:function(){var bM=this.getItems(true,true,false);

for(var i=0,l=bM.length;i<l;i++){qx.ui.core.queue.Widget.add(bM[i]);
}},__kP:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(r){var s=this.getChildrenContainer();
var v=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var w=arguments[i];
var u=w.getParent();

if(u){u.remove(w);
}w.setParent(this);
var t=this.hasChildren();
s.add(w);

if(w.hasChildren()){s.add(w.getChildrenContainer());
}this.__kK.push(w);

if(!t){this.__kP();
}
if(v){w.recursiveAddToWidgetQueue();
v.fireNonBubblingEvent(bx,qx.event.type.Data,[w]);
}}
if(v){qx.ui.core.queue.Widget.add(this);
}},addAt:function(F,G){if(qx.core.Variant.isSet(bb,W)){this.assert(G<=this.__kK.length&&G>=0,bv+G);
}
if(G==this.__kK.length){this.add(F);
return;
}var K=F.getParent();

if(K){K.remove(F);
}var I=this.getChildrenContainer();
F.setParent(this);
var J=this.hasChildren();
var H=this.__kK[G];
I.addBefore(F,H);

if(F.hasChildren()){I.addAfter(F.getChildrenContainer(),F);
}qx.lang.Array.insertAt(this.__kK,F,G);

if(!J){this.__kP();
}
if(this.getTree()){F.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(L,M){if(qx.core.Variant.isSet(bb,W)){this.assert(this.__kK.indexOf(M)>=0);
}this.addAt(L,this.__kK.indexOf(M));
},addAfter:function(x,y){if(qx.core.Variant.isSet(bb,W)){this.assert(this.__kK.indexOf(y)>=0);
}this.addAt(x,this.__kK.indexOf(y)+1);
},addAtBegin:function(N){this.addAt(N,0);
},remove:function(bQ){for(var i=0,l=arguments.length;i<l;i++){var bT=arguments[i];

if(this.__kK.indexOf(bT)==-1){this.warn("Cannot remove treeitem '"+bT+"'. It is not a child of this tree item.");
return;
}var bS=this.getChildrenContainer();

if(bT.hasChildren()){bS.remove(bT.getChildrenContainer());
}qx.lang.Array.remove(this.__kK,bT);
bT.setParent(null);
bS.remove(bT);
}var bR=this.getTree();

if(bR){bR.fireNonBubblingEvent(be,qx.event.type.Data,[bT]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(m){var n=this.__kK[m];

if(n){this.remove(n);
}},removeAll:function(){for(var i=this.__kK.length-1;i>=0;i--){this.remove(this.__kK[i]);
}}},destruct:function(){this._disposeArray(bo);
this._disposeObjects(bu,bf);
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
(function(){var c="tree-folder",b="qx.ui.tree.TreeFolder";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(a){arguments.callee.base.call(this);

if(a){this.setLabel(a);
}},properties:{appearance:{refine:true,init:c}},members:{_addWidgets:function(){this.addSpacer();
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
(function(){var O="Boolean",N="qx.event.type.Event",M="queued",L="String",K="sending",J="qx.io.remote.Response",I="receiving",H="aborted",G="failed",F="nocache",bA="completed",bz="POST",by="configured",bx="timeout",bw="GET",bv="Pragma",bu="no-url-params-on-post",bt="no-cache",bs="Cache-Control",br="Content-Type",V="text/plain",W="application/xml",T="application/json",U="text/html",R="qx.ioRemoteDebug",S="application/x-www-form-urlencoded",P="qx.io.remote.Exchange",Q="Integer",X="X-Qooxdoo-Response-Type",Y="HEAD",bg="qx.io.remote.Request",be="__kR",bk="qx.debug",bi="__kS",bn="_applyResponseType",bm="_applyState",bb="text/javascript",bq="__kT",bp="changeState",bo="PUT",ba="_applyProhibitCaching",bc="",bd="_applyMethod",bf="DELETE",bh="boolean",bj="__kQ",bl="on";
qx.Class.define(bg,{extend:qx.core.Object,construct:function(C,D,E){arguments.callee.base.call(this);
this.__kQ={};
this.__kR={};
this.__kS={};
this.__kT={};

if(C!==undefined){this.setUrl(C);
}
if(D!==undefined){this.setMethod(D);
}
if(E!==undefined){this.setResponseType(E);
}this.setProhibitCaching(true);
this.__kU=++qx.io.remote.Request.__kU;
},events:{"created":N,"configured":N,"sending":N,"receiving":N,"completed":J,"aborted":J,"failed":J,"timeout":J},statics:{__kU:0},properties:{url:{check:L,init:bc},method:{check:[bw,bz,bo,Y,bf],apply:bd,init:bw},asynchronous:{check:O,init:true},data:{check:L,nullable:true},username:{check:L,nullable:true},password:{check:L,nullable:true},state:{check:[by,M,K,I,bA,H,bx,G],init:by,apply:bm,event:bp},responseType:{check:[V,bb,T,W,U],init:V,apply:bn},timeout:{check:Q,nullable:true},prohibitCaching:{check:function(v){return typeof v==bh||v===bu;
},init:true,apply:ba},crossDomain:{check:O,init:false},fileUpload:{check:O,init:false},transport:{check:P,nullable:true},useBasicHttpAuth:{check:O,init:false}},members:{__kQ:null,__kR:null,__kS:null,__kT:null,__kU:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case K:case I:this.error("Aborting already sent request!");
case M:this.abort();
break;
}},isConfigured:function(){return this.getState()===by;
},isQueued:function(){return this.getState()===M;
},isSending:function(){return this.getState()===K;
},isReceiving:function(){return this.getState()===I;
},isCompleted:function(){return this.getState()===bA;
},isAborted:function(){return this.getState()===H;
},isTimeout:function(){return this.getState()===bx;
},isFailed:function(){return this.getState()===G;
},__kV:function(e){var f=e.clone();
f.setTarget(this);
this.dispatchEvent(f);
},_onqueued:function(e){this.setState(M);
this.__kV(e);
},_onsending:function(e){this.setState(K);
this.__kV(e);
},_onreceiving:function(e){this.setState(I);
this.__kV(e);
},_oncompleted:function(e){this.setState(bA);
this.__kV(e);
this.dispose();
},_onaborted:function(e){this.setState(H);
this.__kV(e);
this.dispose();
},_ontimeout:function(e){this.setState(bx);
this.__kV(e);
this.dispose();
},_onfailed:function(e){this.setState(G);
this.__kV(e);
this.dispose();
},_applyState:function(u,w){if(qx.core.Variant.isSet(bk,bl)){if(qx.core.Setting.get(R)){this.debug("State: "+u);
}}},_applyProhibitCaching:function(m,n){if(!m){this.removeParameter(F);
this.removeRequestHeader(bv);
this.removeRequestHeader(bs);
return;
}if(m!==bu||this.getMethod()!=bz){this.setParameter(F,new Date().valueOf());
}else{this.removeParameter(F);
}this.setRequestHeader(bv,bt);
this.setRequestHeader(bs,bt);
},_applyMethod:function(a,b){if(a===bz){this.setRequestHeader(br,S);
}else{this.removeRequestHeader(br);
}var c=this.getProhibitCaching();
this._applyProhibitCaching(c,c);
},_applyResponseType:function(k,l){this.setRequestHeader(X,k);
},setRequestHeader:function(A,B){this.__kQ[A]=B;
},removeRequestHeader:function(o){delete this.__kQ[o];
},getRequestHeader:function(j){return this.__kQ[j]||null;
},getRequestHeaders:function(){return this.__kQ;
},setParameter:function(p,q,r){if(r){this.__kS[p]=q;
}else{this.__kR[p]=q;
}},removeParameter:function(g,h){if(h){delete this.__kS[g];
}else{delete this.__kR[g];
}},getParameter:function(s,t){if(t){return this.__kS[s]||null;
}else{return this.__kR[s]||null;
}},getParameters:function(d){return (d?this.__kS:this.__kR);
},setFormField:function(y,z){this.__kT[y]=z;
},removeFormField:function(i){delete this.__kT[i];
},getFormField:function(x){return this.__kT[x]||null;
},getFormFields:function(){return this.__kT;
},getSequenceNumber:function(){return this.__kU;
}},destruct:function(){this.setTransport(null);
this._disposeFields(bj,be,bi,bq);
}});
})();
(function(){var x="qx.debug",w="qx.ioRemoteDebug",v="on",u="Integer",t="aborted",s="sending",r="completed",q="failed",p="timeout",o="_applyEnabled",g="Boolean",n="__kW",k="interval",d="qx.io.remote.RequestQueue",c="Request-Queue Progress: ",j="__kX",h="queued",l="__la",b="/",m="receiving",f="singleton";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kW=[];
this.__kX=[];
this.__kY=0;
this.__la=new qx.event.Timer(500);
this.__la.addListener(k,this._oninterval,this);
},properties:{enabled:{init:true,check:g,apply:o},maxTotalRequests:{check:u,nullable:true},maxConcurrentRequests:{check:u,init:3},defaultTimeout:{check:u,init:5000}},members:{__kW:null,__kX:null,__kY:null,__la:null,_debug:function(){if(qx.core.Variant.isSet(x,v)){if(qx.core.Setting.get(w)){var a=this.__kX.length+b+(this.__kW.length+this.__kX.length);
this.debug("Progress: "+a);
window.status=c+a;
}}},_check:function(){this._debug();
if(this.__kX.length==0&&this.__kW.length==0){this.__la.stop();
}if(!this.getEnabled()){return;
}if(this.__kX.length>=this.getMaxConcurrentRequests()||this.__kW.length==0){return;
}if(this.getMaxTotalRequests()!=null&&this.__kY>=this.getMaxTotalRequests()){return;
}var L=this.__kW.shift();
var M=new qx.io.remote.Exchange(L);
this.__kY++;
this.__kX.push(M);
this._debug();
M.addListener(s,L._onsending,L);
M.addListener(m,L._onreceiving,L);
M.addListener(r,L._oncompleted,L);
M.addListener(t,L._onaborted,L);
M.addListener(p,L._ontimeout,L);
M.addListener(q,L._onfailed,L);
M.addListener(s,this._onsending,this);
M.addListener(r,this._oncompleted,this);
M.addListener(t,this._oncompleted,this);
M.addListener(p,this._oncompleted,this);
M.addListener(q,this._oncompleted,this);
M._start=(new Date).valueOf();
M.send();
if(this.__kW.length>0){this._check();
}},_remove:function(z){qx.lang.Array.remove(this.__kX,z);
z.dispose();
this._check();
},__lb:0,_onsending:function(e){if(qx.core.Variant.isSet(x,v)){if(qx.core.Setting.get(w)){this.__lb++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__lb);
}}},_oncompleted:function(e){if(qx.core.Variant.isSet(x,v)){if(qx.core.Setting.get(w)){if(e.getTarget()._counted){this.__lb--;
this.debug("ActiveCount: "+this.__lb);
}}}this._remove(e.getTarget());
},_oninterval:function(e){var G=this.__kX;

if(G.length==0){this.__la.stop();
return;
}var B=(new Date).valueOf();
var E;
var C;
var F=this.getDefaultTimeout();
var D;
var A;

for(var i=G.length-1;i>=0;i--){E=G[i];
C=E.getRequest();

if(C.isAsynchronous()){D=C.getTimeout();
if(D==0){continue;
}
if(D==null){D=F;
}A=B-E._start;

if(A>D){this.warn("Timeout: transport "+E.toHashCode());
this.warn(A+"ms > "+D+"ms");
E.timeout();
}}}},_applyEnabled:function(J,K){if(J){this._check();
}this.__la.setEnabled(J);
},add:function(y){y.setState(h);
this.__kW.push(y);
this._check();

if(this.getEnabled()){this.__la.start();
}},abort:function(H){var I=H.getTransport();

if(I){I.abort();
}else if(qx.lang.Array.contains(this.__kW,H)){qx.lang.Array.remove(this.__kW,H);
}}},destruct:function(){this._disposeArray(j);
this._disposeObjects(l);
this._disposeFields(n);
}});
})();
(function(){var v="qx.ioRemoteDebug",u="qx.debug",t="on",s="sending",r="completed",q="receiving",p="aborted",o="failed",n="timeout",m="qx.io.remote.Response",bt="Connection dropped",bs="configured",br="qx.event.type.Event",bq="Proxy authentication required",bp="qx.io.remote.transport.Abstract",bo="MSHTML-specific HTTP status code",bn="Not available",bm="Precondition failed",bl="Server error",bk="qx.io.remote.Exchange",C="Bad gateway",D="Gone",A="See other",B="Partial content",y="Server timeout",z="qx.io.remote.transport.Script",w="HTTP version not supported",x="Unauthorized",G="Multiple choices",H="Payment required",P="Not implemented",N="Request-URL too large",X="Length required",S="_applyState",bg="changeState",bd="Not modified",J="Not acceptable",bj="qx.io.remote.Request",bi="Connection closed by server",bh="Moved permanently",I="_applyImplementation",L="Method not allowed",M="Moved temporarily",O="Forbidden",Q="Use proxy",T="Ok",ba="Not found",bf="Request time-out",E="Bad request",F="Conflict",K="No content",W="qx.io.remote.transport.XmlHttp",V="qx.io.remote.transport.Iframe",U="Request entity too large",bc="Unknown status code",bb="Unsupported media type",R="Gateway time-out",Y="created",k="Out of resources",be="undefined";
qx.Class.define(bk,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setRequest(a);
a.setTransport(this);
},events:{"sending":br,"receiving":br,"completed":m,"aborted":m,"failed":m,"timeout":m},statics:{typesOrder:[W,V,z],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bu,bv){qx.io.remote.Exchange.typesAvailable[bv]=bu;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bR in qx.io.remote.Exchange.typesAvailable){var bQ=qx.io.remote.Exchange.typesAvailable[bR];

if(bQ.isSupported()){qx.io.remote.Exchange.typesSupported[bR]=bQ;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bw,bx,by){if(!qx.lang.Array.contains(bw.handles.responseTypes,by)){return false;
}
for(var bz in bx){if(!bw.handles[bz]){return false;
}}return true;
},_nativeMap:{0:Y,1:bs,2:s,3:q,4:r},wasSuccessful:function(bM,bN,bO){if(bO){switch(bM){case null:case 0:return true;
case -1:return bN<4;
default:return typeof bM===be;
}}else{switch(bM){case -1:if(qx.core.Variant.isSet(u,t)){if(qx.core.Setting.get(v)&&bN>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+bN);
}}return bN<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(u,t)){if(qx.core.Setting.get(v)&&bN===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return bN!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(u,t)){if(qx.core.Setting.get(v)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+bM);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(u,t)){if(qx.core.Setting.get(v)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+bM);
}}return false;
default:if(bM>206&&bM<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bM+" ("+bN+")");
return false;
}}},statusCodeToString:function(j){switch(j){case -1:return bn;
case 200:return T;
case 304:return bd;
case 206:return B;
case 204:return K;
case 300:return G;
case 301:return bh;
case 302:return M;
case 303:return A;
case 305:return Q;
case 400:return E;
case 401:return x;
case 402:return H;
case 403:return O;
case 404:return ba;
case 405:return L;
case 406:return J;
case 407:return bq;
case 408:return bf;
case 409:return F;
case 410:return D;
case 411:return X;
case 412:return bm;
case 413:return U;
case 414:return N;
case 415:return bb;
case 500:return bl;
case 501:return P;
case 502:return C;
case 503:return k;
case 504:return R;
case 505:return w;
case 12002:return y;
case 12029:return bt;
case 12030:return bt;
case 12031:return bt;
case 12152:return bi;
case 13030:return bo;
default:return bc;
}}},properties:{request:{check:bj,nullable:true},implementation:{check:bp,nullable:true,apply:I},state:{check:[bs,s,q,r,p,n,o],init:bs,event:bg,apply:S}},members:{send:function(){var bD=this.getRequest();

if(!bD){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bB=qx.io.remote.Exchange.typesOrder;
var bA=qx.io.remote.Exchange.typesSupported;
var bF=bD.getResponseType();
var bG={};

if(bD.getAsynchronous()){bG.asynchronous=true;
}else{bG.synchronous=true;
}
if(bD.getCrossDomain()){bG.crossDomain=true;
}
if(bD.getFileUpload()){bG.fileUpload=true;
}for(var bE in bD.getFormFields()){bG.programaticFormFields=true;
break;
}var bH,bC;

for(var i=0,l=bB.length;i<l;i++){bH=bA[bB[i]];

if(bH){if(!qx.io.remote.Exchange.canHandle(bH,bG,bF)){continue;
}
try{if(qx.core.Variant.isSet(u,t)){if(qx.core.Setting.get(v)){this.debug("Using implementation: "+bH.classname);
}}bC=new bH;
this.setImplementation(bC);
bC.setUseBasicHttpAuth(bD.getUseBasicHttpAuth());
bC.send();
return true;
}catch(bL){this.error("Request handler throws error");
this.error(bL);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bD);
},abort:function(){var h=this.getImplementation();

if(h){if(qx.core.Variant.isSet(u,t)){if(qx.core.Setting.get(v)){this.debug("Abort: implementation "+h.toHashCode());
}}h.abort();
}else{if(qx.core.Variant.isSet(u,t)){if(qx.core.Setting.get(v)){this.debug("Abort: forcing state to be aborted");
}}this.setState(p);
}},timeout:function(){var g=this.getImplementation();

if(g){this.warn("Timeout: implementation "+g.toHashCode());
g.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(n);
}if(this.getRequest()){this.getRequest().setTimeout(0);
}},_onsending:function(e){this.setState(s);
},_onreceiving:function(e){this.setState(q);
},_oncompleted:function(e){this.setState(r);
},_onabort:function(e){this.setState(p);
},_onfailed:function(e){this.setState(o);
},_ontimeout:function(e){this.setState(n);
},_applyImplementation:function(bI,bJ){if(bJ){bJ.removeListener(s,this._onsending,this);
bJ.removeListener(q,this._onreceiving,this);
bJ.removeListener(r,this._oncompleted,this);
bJ.removeListener(p,this._onabort,this);
bJ.removeListener(n,this._ontimeout,this);
bJ.removeListener(o,this._onfailed,this);
}
if(bI){var bK=this.getRequest();
bI.setUrl(bK.getUrl());
bI.setMethod(bK.getMethod());
bI.setAsynchronous(bK.getAsynchronous());
bI.setUsername(bK.getUsername());
bI.setPassword(bK.getPassword());
bI.setParameters(bK.getParameters());
bI.setFormFields(bK.getFormFields());
bI.setRequestHeaders(bK.getRequestHeaders());
bI.setData(bK.getData());
bI.setResponseType(bK.getResponseType());
bI.addListener(s,this._onsending,this);
bI.addListener(q,this._onreceiving,this);
bI.addListener(r,this._oncompleted,this);
bI.addListener(p,this._onabort,this);
bI.addListener(n,this._ontimeout,this);
bI.addListener(o,this._onfailed,this);
}},_applyState:function(b,c){if(qx.core.Variant.isSet(u,t)){if(qx.core.Setting.get(v)){this.debug("State: "+c+" => "+b);
}}
switch(b){case s:this.fireEvent(s);
break;
case q:this.fireEvent(q);
break;
case r:case p:case n:case o:var e=this.getImplementation();

if(!e){break;
}
if(this.hasListener(b)){var f=qx.event.Registration.createEvent(b,qx.io.remote.Response);

if(b==r){var d=e.getResponseContent();
f.setContent(d);
if(d===null){if(qx.core.Variant.isSet(u,t)){if(qx.core.Setting.get(v)){this.debug("Altered State: "+b+" => failed");
}}b=o;
}}f.setStatusCode(e.getStatusCode());
f.setResponseHeaders(e.getResponseHeaders());
this.dispatchEvent(f);
}this.setImplementation(null);
e.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var bP=this.getImplementation();

if(bP){this.setImplementation(null);
bP.dispose();
}this.setRequest(null);
}});
})();
(function(){var x="qx.event.type.Event",w="String",v="qx.debug",u="qx.ioRemoteDebug",t="failed",s="timeout",r="on",q="created",p="aborted",o="sending",i="configured",n="receiving",l="completed",h="Object",g="Boolean",k="abstract",j="_applyState",m="changeState",f="qx.io.remote.transport.Abstract";
qx.Class.define(f,{type:k,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},events:{"created":x,"configured":x,"sending":x,"receiving":x,"completed":x,"aborted":x,"failed":x,"timeout":x},properties:{url:{check:w,nullable:true},method:{check:w,nullable:true},asynchronous:{check:g,nullable:true},data:{check:w,nullable:true},username:{check:w,nullable:true},password:{check:w,nullable:true},state:{check:[q,i,o,n,l,p,s,t],init:q,event:m,apply:j},requestHeaders:{check:h,nullable:true},parameters:{check:h,nullable:true},formFields:{check:h,nullable:true},responseType:{check:w,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){if(qx.core.Variant.isSet(v,r)){if(qx.core.Setting.get(u)){this.warn("Aborting...");
}}this.setState(p);
},timeout:function(){if(qx.core.Variant.isSet(v,r)){if(qx.core.Setting.get(u)){this.warn("Timeout...");
}}this.setState(s);
},failed:function(){if(qx.core.Variant.isSet(v,r)){if(qx.core.Setting.get(u)){this.warn("Failed...");
}}this.setState(t);
},setRequestHeader:function(d,e){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(c){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(a,b){if(qx.core.Variant.isSet(v,r)){if(qx.core.Setting.get(u)){this.debug("State: "+a);
}}
switch(a){case q:this.fireEvent(q);
break;
case i:this.fireEvent(i);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
case l:this.fireEvent(l);
break;
case p:this.fireEvent(p);
break;
case t:this.fireEvent(t);
break;
case s:this.fireEvent(s);
break;
}return true;
}}});
})();
(function(){var k="qx.debug",j="on",h="qx.ioRemoteDebugData",g="qx.ioRemoteDebug",f="completed",e="failed",d="=",c="aborted",b="",a="&",M="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="qx.client",G="receiving",F="text/plain",E="text/javascript",D="sending",t="created",u="configured",q="?",r='Referer',o='Basic ',p="\n</pre>",m="string",n='Authorization',v="<pre>Could not execute json: \n",w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",y=':',x="parseerror",A="file:",z="webkit",C="__lc",B="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
this.__lc=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__lc.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[F,E,J,L,I]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(H,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
},__ld:function(){}},members:{__le:false,__lf:0,__lc:null,getRequest:function(){return this.__lc;
},send:function(){this.__lf=0;
var bq=this.getRequest();
var bm=this.getMethod();
var bt=this.getAsynchronous();
var bs=this.getUrl();
var bo=(window.location.protocol===A&&!(/^http(s){0,1}\:/.test(bs)));
this.__le=bo;
var bw=this.getParameters(false);
var bu=[];

for(var bn in bw){var br=bw[bn];

if(br instanceof Array){for(var i=0;i<br.length;i++){bu.push(encodeURIComponent(bn)+d+encodeURIComponent(br[i]));
}}else{bu.push(encodeURIComponent(bn)+d+encodeURIComponent(br));
}}
if(bu.length>0){bs+=(bs.indexOf(q)>=0?a:q)+bu.join(a);
}if(this.getData()===null){var bw=this.getParameters(true);
var bu=[];

for(var bn in bw){var br=bw[bn];

if(br instanceof Array){for(var i=0;i<br.length;i++){bu.push(encodeURIComponent(bn)+d+encodeURIComponent(br[i]));
}}else{bu.push(encodeURIComponent(bn)+d+encodeURIComponent(br));
}}
if(bu.length>0){this.setData(bu.join(a));
}}var bv=function(T){var Y=w;
var bd=b;
var W,V,U;
var ba,bb,bc,X;
var i=0;

do{W=T.charCodeAt(i++);
V=T.charCodeAt(i++);
U=T.charCodeAt(i++);
ba=W>>2;
bb=((W&3)<<4)|(V>>4);
bc=((V&15)<<2)|(U>>6);
X=U&63;

if(isNaN(V)){bc=X=64;
}else if(isNaN(U)){X=64;
}bd+=Y.charAt(ba)+Y.charAt(bb)+Y.charAt(bc)+Y.charAt(X);
}while(i<T.length);
return bd;
};
bq.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){bq.open(bm,bs,bt);
bq.setRequestHeader(n,o+bv(this.getUsername()+y+this.getPassword()));
}else{bq.open(bm,bs,bt,this.getUsername(),this.getPassword());
}}else{bq.open(bm,bs,bt);
}}catch(bH){this.error("Failed with exception: "+bH);
this.failed();
return;
}if(!qx.core.Variant.isSet(H,z)){bq.setRequestHeader(r,window.location.href);
}var bp=this.getRequestHeaders();

for(var bn in bp){bq.setRequestHeader(bn,bp[bn]);
}try{if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(h)){this.debug("Request: "+this.getData());
}}bq.send(this.getData());
}catch(bV){if(bo){this.failedLocally();
}else{this.error("Failed to send data: "+bV,"send");
this.failed();
}return;
}if(!bt){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===e){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:function(e){switch(this.getState()){case f:case c:case e:case M:if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(g)){this.warn("Ignore Ready State Change");
}}return;
}var bF=this.getReadyState();

if(bF==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bF,this.__le)){return this.failed();
}}while(this.__lf<bF){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lf]);
}},getReadyState:function(){var bQ=null;

try{bQ=this.__lc.readyState;
}catch(S){}return bQ;
},setRequestHeader:function(bS,bT){this.__lc.setRequestHeader(bS,bT);
},getResponseHeader:function(O){var P=null;

try{this.getRequest().getResponseHeader(O)||null;
}catch(N){}return P;
},getStringResponseHeaders:function(){var bl=null;

try{var bk=this.__lc.getAllResponseHeaders();

if(bk){bl=bk;
}}catch(R){}return bl;
},getResponseHeaders:function(){var bK=this.getStringResponseHeaders();
var bL={};

if(bK){var bI=bK.split(/[\r\n]+/g);

for(var i=0,l=bI.length;i<l;i++){var bJ=bI[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bJ){bL[bJ[1]]=bJ[2];
}}}return bL;
},getStatusCode:function(){var bg=-1;

try{bg=this.getRequest().status;
}catch(bM){}return bg;
},getStatusText:function(){var bU=b;

try{bU=this.getRequest().statusText;
}catch(bE){}return bU;
},getResponseText:function(){var bD=null;
var bB=this.getStatusCode();
var bC=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bB,bC,this.__le)){try{bD=this.getRequest().responseText;
}catch(bN){}}return bD;
},getResponseXml:function(){var bj=null;
var bh=this.getStatusCode();
var bi=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bh,bi,this.__le)){try{bj=this.getRequest().responseXML;
}catch(bG){}}if(typeof bj==B&&bj!=null){if(!bj.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,b);
bj.loadXML(s);
}if(!bj.documentElement){throw new Error("Missing Document Element!");
}
if(bj.documentElement.tagName==x){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bj;
},getFetchedLength:function(){var by=this.getResponseText();
return typeof by==m?by.length:0;
},getResponseContent:function(){if(this.getState()!==f){if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(g)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(g)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var bA=this.getResponseText();

switch(this.getResponseType()){case F:case I:if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(h)){this.debug("Response: "+bA);
}}return bA;
case J:if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(h)){this.debug("Response: "+bA);
}}
try{if(bA&&bA.length>0){var bz=qx.util.Json.parseQx(bA);
return (bz===0?0:(bz||null));
}else{return null;
}}catch(Q){this.error("Could not execute json: ["+bA+"]",Q);
return v+bA+p;
}case E:if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(h)){this.debug("Response: "+bA);
}}
try{if(bA&&bA.length>0){var bz=window.eval(bA);
return (bz===0?0:(bz||null));
}else{return null;
}}catch(bR){this.error("Could not execute javascript: ["+bA+"]",bR);
return null;
}case L:bA=this.getResponseXml();

if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(h)){this.debug("Response: "+bA);
}}return (bA===0?0:(bA||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bO,bP){if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(g)){this.debug("State: "+bO);
}}
switch(bO){case t:this.fireEvent(t);
break;
case u:this.fireEvent(u);
break;
case D:this.fireEvent(D);
break;
case G:this.fireEvent(G);
break;
case f:this.fireEvent(f);
break;
case e:this.fireEvent(e);
break;
case c:this.getRequest().abort();
this.fireEvent(c);
break;
case M:this.getRequest().abort();
this.fireEvent(M);
break;
}}},defer:function(be,bf){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,K);
},destruct:function(){var bx=this.getRequest();

if(bx){bx.onreadystatechange=qx.io.remote.transport.XmlHttp.__ld;
switch(bx.readyState){case 1:case 2:case 3:bx.abort();
}}this._disposeFields(C);
}});
})();
(function(){var C="qx.debug",B="on",A="qx.ioRemoteDebugData",z="=",y="&",x="application/xml",w="application/json",v="text/html",u="qx.ioRemoteDebug",t="qx.client",bd="textarea",bc="none",bb="text/plain",ba="text/javascript",Y="",X="completed",W="?",V="qx.io.remote.transport.Iframe",U="gecko",T="frame_",J="aborted",K="_data_",H="pre",I="__lg",F="javascript:void(0)",G="sending",D="__lh",E="form",L="failed",M='<iframe name="',O="mshtml",N="form_",Q='"></iframe>',P="iframe",S="timeout",R="qx/static/blank.gif";
qx.Class.define(V,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var p=(new Date).valueOf();
var q=T+p;
var r=N+p;
if(qx.core.Variant.isSet(t,O)){this.__lg=document.createElement(M+q+Q);
}else{this.__lg=document.createElement(P);
}this.__lg.src=F;
this.__lg.id=this.__lg.name=q;
this.__lg.onload=qx.lang.Function.bind(this._onload,this);
this.__lg.style.display=bc;
document.body.appendChild(this.__lg);
this.__lh=document.createElement(E);
this.__lh.target=q;
this.__lh.id=this.__lh.name=r;
this.__lh.style.display=bc;
document.body.appendChild(this.__lh);
this.__li=document.createElement(bd);
this.__li.id=this.__li.name=K;
this.__lh.appendChild(this.__li);
this.__lg.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[bb,ba,w,x,v]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__li:null,__lj:0,__lh:null,__lg:null,send:function(){var h=this.getMethod();
var k=this.getUrl();
var o=this.getParameters(false);
var n=[];

for(var j in o){var l=o[j];

if(l instanceof Array){for(var i=0;i<l.length;i++){n.push(encodeURIComponent(j)+z+encodeURIComponent(l[i]));
}}else{n.push(encodeURIComponent(j)+z+encodeURIComponent(l));
}}
if(n.length>0){k+=(k.indexOf(W)>=0?y:W)+n.join(y);
}if(this.getData()===null){var o=this.getParameters(true);
var n=[];

for(var j in o){var l=o[j];

if(l instanceof Array){for(var i=0;i<l.length;i++){n.push(encodeURIComponent(j)+z+encodeURIComponent(l[i]));
}}else{n.push(encodeURIComponent(j)+z+encodeURIComponent(l));
}}
if(n.length>0){this.setData(n.join(y));
}}var g=this.getFormFields();

for(var j in g){var m=document.createElement(bd);
m.name=j;
m.appendChild(document.createTextNode(g[j]));
this.__lh.appendChild(m);
}this.__lh.action=k;
this.__lh.method=h;
this.__li.appendChild(document.createTextNode(this.getData()));
this.__lh.submit();
this.setState(G);
},_onload:function(e){if(this.__lh.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
},_onreadystatechange:function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__lg.readyState]);
},_switchReadyState:function(a){switch(this.getState()){case X:case J:case L:case S:this.warn("Ignore Ready State Change");
return;
}while(this.__lj<a){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lj]);
}},setRequestHeader:function(c,d){},getResponseHeader:function(e){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return Y;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__lg);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__lg);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__lg);
},getIframeTextContent:function(){var f=this.getIframeBody();

if(!f){return null;
}
if(!f.firstChild){return Y;
}if(f.firstChild.tagName&&f.firstChild.tagName.toLowerCase()==H){return f.firstChild.innerHTML;
}else{return f.innerHTML;
}},getIframeHtmlContent:function(){var be=this.getIframeBody();
return be?be.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==X){if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(u)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(u)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var b=this.getIframeTextContent();

switch(this.getResponseType()){case bb:if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}return b;
break;
case v:b=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}return b;
break;
case w:b=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}
try{return b&&b.length>0?qx.util.Json.parseQx(b):null;
}catch(s){return this.error("Could not execute json: ("+b+")",s);
}case ba:b=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}
try{return b&&b.length>0?window.eval(b):null;
}catch(bf){return this.error("Could not execute javascript: ("+b+")",bf);
}case x:b=this.getIframeDocument();

if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}return b;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(bg,bh,bi){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,V);
},destruct:function(){if(this.__lg){this.__lg.onload=null;
this.__lg.onreadystatechange=null;
if(qx.core.Variant.isSet(t,U)){this.__lg.src=qx.util.ResourceManager.toUri(R);
}document.body.removeChild(this.__lg);
}
if(this.__lh){document.body.removeChild(this.__lh);
}this._disposeFields(I,D);
}});
})();
(function(){var m="qx.debug",l="on",k="&",j="=",h="qx.ioRemoteDebug",g="application/json",f="qx.io.remote.transport.Script",e="qx.ioRemoteDebugData",d="text/plain",c="text/javascript",z="completed",y="?",x="_responseContent",w="__ll",v="aborted",u="script",t="_ScriptTransport_",s="",r="_ScriptTransport_id",q="failed",o="_ScriptTransport_data",p="utf-8",n="timeout";
qx.Class.define(f,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var a=++qx.io.remote.transport.Script.__lk;

if(a>=2000000000){qx.io.remote.transport.Script.__lk=a=1;
}this.__ll=null;
this.__lk=a;
},statics:{__lk:0,_instanceRegistry:{},ScriptTransport_PREFIX:t,ScriptTransport_ID_PARAM:r,ScriptTransport_DATA_PARAM:o,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[d,c,g]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:function(J,content){var K=qx.io.remote.transport.Script._instanceRegistry[J];

if(K==null){if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(h)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{K._responseContent=content;
K._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}}},members:{__lm:0,__ll:null,__lk:null,send:function(){var F=this.getUrl();
F+=(F.indexOf(y)>=0?k:y)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+j+this.__lk;
var I=this.getParameters();
var H=[];

for(var E in I){if(E.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var G=I[E];

if(G instanceof Array){for(var i=0;i<G.length;i++){H.push(encodeURIComponent(E)+j+encodeURIComponent(G[i]));
}}else{H.push(encodeURIComponent(E)+j+encodeURIComponent(G));
}}
if(H.length>0){F+=k+H.join(k);
}var D=this.getData();

if(D!=null){F+=k+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+j+encodeURIComponent(D);
}qx.io.remote.transport.Script._instanceRegistry[this.__lk]=this;
this.__ll=document.createElement(u);
this.__ll.charset=p;
this.__ll.src=F;

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(e)){this.debug("Request: "+F);
}}document.body.appendChild(this.__ll);
},_switchReadyState:function(N){switch(this.getState()){case z:case v:case q:case n:this.warn("Ignore Ready State Change");
return;
}while(this.__lm<N){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lm]);
}},setRequestHeader:function(L,M){},getResponseHeader:function(O){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return s;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==z){if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(h)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(h)){this.debug("Returning content for responseType: "+this.getResponseType());
}}
switch(this.getResponseType()){case d:case g:case c:if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(e)){this.debug("Response: "+this._responseContent);
}}var b=this._responseContent;
return (b===0?0:(b||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(A,B,C){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,f);
qx.io.remote.ScriptTransport=A;
},destruct:function(){if(this.__ll){delete qx.io.remote.transport.Script._instanceRegistry[this.__lk];
document.body.removeChild(this.__ll);
}this._disposeFields(w,x);
}});
})();
(function(){var e="Integer",d="Object",c="qx.io.remote.Response";
qx.Class.define(c,{extend:qx.event.type.Event,properties:{state:{check:e,nullable:true},statusCode:{check:e,nullable:true},content:{nullable:true},responseHeaders:{check:d,nullable:true}},members:{clone:function(a){var b=arguments.callee.base.call(this,a);
b.setType(this.getType());
b.setState(this.getState());
b.setStatusCode(this.getStatusCode());
b.setContent(this.getContent());
b.setResponseHeaders(this.getResponseHeaders());
return b;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var n="test",m="",l="All",k=".",h="tmap",g="^",f="demobrowser.TreeDataHandler",e="ttree",d="\\.[^\\.]+$",c="depth";
qx.Class.define(f,{extend:qx.core.Object,construct:function(bm){arguments.callee.base.call(this);
this.tmap=bm;
this.ttree=this.__ln(bm);
},members:{__ln:function(ba){var bc=ba;
function bb(o,p){var q=p.classname;
var t=q.split(k);
var u=t.slice(0,t.length-1);
var r=t[t.length-1];
function s(parent,bg){if(!bg.length){return parent;
}else{var bh=bg[0];
var bi=bg.slice(1,bg.length);
var bj=null;
var bk=null;
var bl=parent.getChildren();

for(var i=0;i<bl.length;i++){if(bl[i].label==bh){bk=bl[i];
break;
}}if(bk==null){bk=new demobrowser.Tree(bh);
parent.add(bk);
}bj=s(bk,bi);
return bj;
}}var v=s(o,t);

if(!v){throw new Error("No target to insert tests");
}bd.readTree(p,v);
}function be(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var bf=new demobrowser.Tree(l);
var bd=this;
bc.sort(be);

for(var i=0;i<bc.length;i++){bb(bf,bc[i]);
}return bf;
},readTree:function(S,T){var V=arguments[1]||new demobrowser.Tree(S.classname);
var T;
function U(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}S.tests.sort(U);

for(var j=0;j<S.tests.length;j++){T=new demobrowser.Tree(S.tests[j].name);
T.type=n;
T.desc=S.tests[j].desc;
V.add(T);
}if(S.children&&S.children.length){for(var j=0;j<S.children.length;j++){V.add(readTree(S.children[j]));
}}return V;
},getRoot:function(){if(!this.Root){var br={classname:m,tests:[]};
var bq=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(br.classname.length>bq[i].classname.length){br=bq[i];
}}this.Root=br;
}return this.Root.classname;
},getChilds:function(J){var K=[];
var M=this.tmap;
var L=g+J+d;
var N=new RegExp(L);

for(var i=0;i<M.length;i++){if(M[i].classname.match(N)){K.push(M[i]);
}}return K;
},getTests:function(B){var C=this.tmap;

for(var i=0;i<C.length;i++){if(C[i].classname==B){return C[i].tests;
}}return [];
},getPath:function(w){if(!w){return m;
}var x=w.pwd();
x.shift();
if(this.isClass(w)){x=x.concat(w.label);
}return x;
},getChildren:function(y){if(y==l){var z=this.tmap;
var A=[];

for(var i=0;i<z.length;i++){A.push(z[i].classname);
}return A;
}else if(this.isClass(y)){return this.getTests(y);
}else{return [];
}},isClass:function(W){if(W.type&&W.type==n){return false;
}else{return true;
}},hasTests:function(X){if(!this.isClass(X))return false;
else{var Y=X.getChildren();

for(var i=0;i<Y.length;i++){if(Y[i].type&&Y[i].type==n)return true;
}return false;
}},classFromTest:function(bn){var bo=m;
var bp=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==bn){bo=this.tmap[i].classname;
break classloop;
}}}return bo;
},getFullName:function(H){if(!H){return m;
}var I=this.getPath(H);

if(H.type&&H.type==n){I=I.concat(H.label);
}return I.join(k);
},getPreviousNode:function(D){var E=D.getPrevSibling();

if(E){return E;
}},getNextNode:function(F){var G=F.getNextSibling();

if(G){return G;
}},testCount:function(O){if(O.type&&O.type==n){return 1;
}else{var P=0;
var R=O.getIterator(c);
var Q;

while(Q=R()){if(Q.type&&Q.type==n){P++;
}}return P;
}}},destruct:function(){this._disposeFields(h);
this._disposeObjects(e);
}});
})();
(function(){var j="depth",h="",g="widgetLinkFlat",e="widgetLinkFull",d="parent",c="children",b="demobrowser.Tree";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.label=arguments[0]||h;
this.children=[];
this.parent=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(o,p){var q=j;
var r=this;
var s=this.getIterator(q);

while(r=s()){o.apply(r,p);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(x){var z=[this];
var y=x==j?1:0;
function f(){var m;

if(z.length){m=z.shift();
var n=m.getChildren();

if(n.length){if(y){z=n.concat(z);
}else{z=z.concat(n);
}}}else{m=null;
}return m;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(t){var u=this.parent.getChildren();
var v=arguments.callee.self.indexOf(u,this);
var w=v+t;

if(u[w]){return u[w];
}},add:function(a){this.children.push(a);
a.parent=this;
}},statics:{indexOf:function(k,l){for(var i=0;i<k.length;i++){if(k[i]==l){return i;
}}}},destruct:function(){this._disposeObjects(e,g,d);
this._disposeArray(c);
}});
})();
(function(){var L="mshtml",K="pop.push.reverse.shift.sort.splice.unshift.join.slice",J="number",I="qx.type.BaseArray",H="qx.client",G=".";
qx.Class.define(I,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function n(a){if(qx.core.Variant.isSet(H,L)){m.prototype={length:0,$$isArray:true};
var d=K.split(G);

for(var length=d.length;length;){m.prototype[d[--length]]=Array.prototype[d[length]];
}}var e=Array.prototype.slice;
m.prototype.concat=function(){var g=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var f;

if(arguments[i] instanceof m){f=e.call(arguments[i],0);
}else if(arguments[i] instanceof Array){f=arguments[i];
}else{f=[arguments[i]];
}g.push.apply(g,f);
}return g;
};
m.prototype.toString=function(){return e.call(this,0).toString();
};
m.prototype.toLocaleString=function(){return e.call(this,0).toLocaleString();
};
m.prototype.constructor=m;
var b=Array.prototype.filter;
var c=Array.prototype.map;
if(!Array.prototype.indexOf){m.prototype.indexOf=function(B,C){if(C==null){C=0;
}else if(C<0){C=Math.max(0,this.length+C);
}
for(var i=C;i<this.length;i++){if(this[i]===B){return i;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){m.prototype.lastIndexOf=function(D,E){if(E==null){E=this.length-1;
}else if(E<0){E=Math.max(0,this.length+E);
}
for(var i=E;i>=0;i--){if(this[i]===D){return i;
}}return -1;
};
}
if(!Array.prototype.forEach){m.prototype.forEach=function(s,t){var l=this.length;

for(var i=0;i<l;i++){s.call(t,this[i],i,this);
}};
}
if(!b){b=function(y,z){var l=this.length;
var A=[];

for(var i=0;i<l;i++){if(y.call(z,this[i],i,this)){A.push(this[i]);
}}return A;
};
}
if(!c){c=function(u,v){var l=this.length;
var w=[];

for(var i=0;i<l;i++){w.push(u.call(v,this[i],i,this));
}return w;
};
}
if(!Array.prototype.some){m.prototype.some=function(h,j){var l=this.length;

for(var i=0;i<l;i++){if(h.call(j,this[i],i,this)){return true;
}}return false;
};
}
if(!Array.prototype.every){m.prototype.every=function(q,r){var l=this.length;

for(var i=0;i<l;i++){if(!q.call(r,this[i],i,this)){return false;
}}return true;
};
}m.prototype.filter=function(){var F=new this.constructor;
F.push.apply(F,b.apply(this,arguments));
return F;
};
m.prototype.map=function(){var o=new this.constructor;
o.push.apply(o,c.apply(this,arguments));
return o;
};
m.prototype.slice=function(){var p=new this.constructor;
p.push.apply(p,Array.prototype.slice.apply(this,arguments));
return p;
};
m.prototype.splice=function(){var x=new this.constructor;
x.push.apply(x,Array.prototype.splice.apply(this,arguments));
return x;
};
m.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
m.prototype.valueOf=function(){return this.length;
};
return m;
}function m(length){if(arguments.length===1&&typeof length===J){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function k(){}k.prototype=[];
m.prototype=new k;
m.prototype.length=0;
qx.type.BaseArray=n(m);
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
(function(){var l="</span>",k="sym",j="nl",h="qxkey",g="ws",f=">",e="qqstr",d="<",c="qstr",b="linecomment",bg="ident",bf="keyword",be="regexp",bd="&",bc="|",bb="fullcomment",ba="atom",Y="\\r\\n|\\r|\\n",X="\\s*\\)*",W="\\s",s="^",t='["][^"]*["]',q="real",r="\\s*[,\\)]",o="<span class='string'>",p="[a-zA-Z_][a-zA-Z0-9_]*\\b",m="<span class='comment'>",n="[+-]?\\d+",w="\\s*\\(*\\s*",x="&nbsp;",F="qx.dev.Tokenizer",D="\\t",M="\\s*\\)*\\s*\\)",H="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",S="\\)*\\.(?:test|exec)\\s*\\(\\s*",Q="<span class='regexp'>",z="int",V="'>",U="<span class='",T="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",y=".",B="\\s*\\)*\\s*?,?",C="[\\(,]\\s*",E="<span class='ident'>",G="g",I="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",N="\\/\\*(?:.|[\\n\\r])*?\\*\\/",R="\n",u="$",v="['][^']*[']",A="tab",L="\\/\\/.*?[\\n\\r$]",K="<br>",J=" ",P="(?::|=|\\?)\\s*\\(*\\s*",O="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bp){var bT={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bG={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bs={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bC=function(bh){return new RegExp(s+bh+u);
};
var bM=L;
var bD=N;
var bw=p;
var bF=n;
var bA=I;
var bI=t;
var bH=v;
var bu=D;
var bP=Y;
var bR=W;
var bB=T;
var bE=[O+bB+M,H+bB+B,w+bB+S,P+bB+X,C+bB+r].join(bc);
var bN=bC(bM);
var bx=bC(bD);
var bK=bC(bw);
var bt=bC(bF);
var bQ=bC(bA);
var bz=bC(bI);
var br=bC(bH);
var bL=bC(bu);
var by=bC(bP);
var bq=bC(bR);
var bv=bC(bE);
var bJ=new RegExp([bM,bD,bw,bF,bA,bI,bH,bH,bu,bP,bR,bE,y].join(bc),G);
var bO=[];
var a=bp.match(bJ);

for(var i=0;i<a.length;i++){var bS=a[i];

if(bS.match(bN)){bO.push({type:b,value:bS});
}else if(bS.match(bx)){bO.push({type:bb,value:bS});
}else if(bS.match(bv)){bO.push({type:be,value:bS});
}else if(bS.match(br)){bO.push({type:c,value:bS});
}else if(bS.match(bz)){bO.push({type:e,value:bS});
}else if(bT[bS]){bO.push({type:bf,value:bS});
}else if(bG[bS]){bO.push({type:ba,value:bS});
}else if(bs[bS]){bO.push({type:h,value:bS});
}else if(bS.match(bK)){bO.push({type:bg,value:bS});
}else if(bS.match(bQ)){bO.push({type:q,value:bS});
}else if(bS.match(bt)){bO.push({type:z,value:bS});
}else if(bS.match(by)){bO.push({type:j,value:bS});
}else if(bS.match(bC(bq))){bO.push({type:g,value:bS});
}else if(bS.match(bL)){bO.push({type:A,value:bS});
}else if(bS==f){bO.push({type:k,value:f});
}else if(bS==d){bO.push({type:k,value:d});
}else if(bS==bd){bO.push({type:k,value:bd});
}else{bO.push({type:k,value:bS});
}}return bO;
},javaScriptToHtml:function(bi){var bm=qx.dev.Tokenizer.tokenizeJavaScript(bi);
var bl=new qx.util.StringBuilder();

for(var i=0;i<bm.length;i++){var bn=bm[i];
var bk=qx.bom.String.escape(bn.value);

switch(bn.type){case be:bl.add(Q,bk,l);
break;
case bg:bl.add(E,bk,l);
break;
case b:case bb:bl.add(m,bk,l);
break;
case c:case e:bl.add(o,bk,l);
break;
case bf:case ba:case h:bl.add(U,bn.type,V,bk,l);
break;
case j:var bj=qx.bom.client.Engine.MSHTML?K:R;
bl.add(bj);
break;
case g:var bo=qx.bom.client.Engine.MSHTML?x:J;
bl.add(bo);
break;
default:bl.add(bk);
}}return bl.get();
}}});
})();
(function(){var f="\n",e="",d=" &nbsp;",c="<br>",b=" ",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(o){return qx.util.StringEscape.escape(o,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(n){return qx.bom.String.escape(n).replace(/(  |\n)/g,function(g){var h={"  ":d,"\n":c};
return h[g]||g;
});
},toText:function(p){return qx.bom.String.unescape(p.replace(/\s+|<([^>])+>/gi,function(m){if(/\s+/.test(m)){return b;
}else if(/^<BR|^<br/gi.test(m)){return f;
}else{return e;
}}));
}},defer:function(j,k,l){j.FROM_CHARCODE=qx.lang.Object.invert(j.TO_CHARCODE);
}});
})();
(function(){var m=";",k="&",j="",h="&#",g='X',f='#',e="qx.client",d="qx.util.StringEscape";
qx.Bootstrap.define(d,{statics:{escape:qx.core.Variant.select(e,{"mshtml":function(v,w){var y,A=[];

for(var i=0,l=v.length;i<l;i++){var z=v.charAt(i);
var x=z.charCodeAt(0);

if(w[x]){y=k+w[x]+m;
}else{if(x>0x7F){y=h+x+m;
}else{y=z;
}}A[A.length]=y;
}return A.join(j);
},"default":function(n,o){var q,s=j;

for(var i=0,l=n.length;i<l;i++){var r=n.charAt(i);
var p=r.charCodeAt(0);

if(o[p]){q=k+o[p]+m;
}else{if(p>0x7F){q=h+p+m;
}else{q=r;
}}s+=q;
}return s;
}}),unescape:function(t,u){return t.replace(/&[#\w]+;/gi,function(a){var b=a;
var a=a.substring(1,a.length-1);
var c=u[a];

if(c){b=String.fromCharCode(c);
}else{if(a.charAt(0)==f){if(a.charAt(1).toUpperCase()==g){c=a.substring(2);
if(c.match(/^[0-9A-Fa-f]+$/gi)){b=String.fromCharCode(parseInt(c,16));
}}else{c=a.substring(1);
if(c.match(/^\d+$/gi)){b=String.fromCharCode(parseInt(c,10));
}}}}return b;
});
}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",G="#80B4EF",F="#ffffdd",E="#334866",D="#00204D",C="#666666",B="#99C3FE",A="#808080",z="#F4F4F4",y="#B6B6B6",x="#909090",q="#FCFCFC",r="#314a6e",o="#001533",p="#0880EF",m="#4d4d4d",n="#DFDFDF",k="#000000",l="#7B7A7E",s="#26364D",t="#AFAFAF",v="#404955",u="#AAAAAA",w="qx.theme.modern.Color";
qx.Theme.define(w,{colors:{"background-application":n,"background-pane":i,"background-light":q,"background-medium":a,"background-splitpane":t,"background-tip":F,"background-odd":h,"text-light":x,"text-gray":b,"text-label":g,"text-title":r,"text-input":k,"text-hovered":o,"text-disabled":l,"text-selected":d,"text-active":s,"text-inactive":v,"border-main":m,"border-separator":A,"border-input":E,"border-disabled":y,"border-pane":D,"border-button":C,"border-column":j,"border-focused":B,"table-pane":i,"table-focus-indicator":p,"table-row-background-focused-selected":f,"table-row-background-focused":G,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":u,"progressive-table-row-background-even":z,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var p="_applyStyle",o="qx.debug",n="on",m="repeat",l="px",k="scale",j="solid",i="Color",h="double",g="px ",F="position:absolute;top:0;left:0;",E="dotted",D="_applyWidth",C="qx.ui.decoration.Uniform",B="repeat-y",A="String",z="__lp",y="",x="__lo",w="PositiveInteger",u="border:",v="dashed",s="no-repeat",t=" ",q="repeat-x",r=";";
qx.Class.define(C,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(G,H,I){arguments.callee.base.call(this);
if(G!=null){this.setWidth(G);
}
if(H!=null){this.setStyle(H);
}
if(I!=null){this.setColor(I);
}},properties:{width:{check:w,init:0,apply:D},style:{nullable:true,check:[j,E,v,h],init:j,apply:p},color:{nullable:true,check:i,apply:p},backgroundImage:{check:A,nullable:true,apply:p},backgroundRepeat:{check:[m,q,B,s,k],init:m,apply:p},backgroundColor:{check:i,nullable:true,apply:p}},members:{__lo:null,__lp:null,getMarkup:function(){if(this.__lo){return this.__lo;
}var J=F;
var K=this.getWidth();

if(qx.core.Variant.isSet(o,n)){if(K===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var M=qx.theme.manager.Color.getInstance();
J+=u+K+g+this.getStyle()+t+M.resolve(this.getColor())+r;
var L=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,J);
return this.__lo=L;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==k;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getWidth()*2;
b-=d;
c-=d;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+l;
a.style.height=c+l;
},tint:function(N,O){var P=qx.theme.manager.Color.getInstance();

if(O==null){O=this.getBackgroundColor();
}N.style.backgroundColor=P.resolve(O)||y;
},getInsets:function(){if(this.__lp){return this.__lp;
}var f=this.getWidth();
this.__lp={top:f,right:f,bottom:f,left:f};
return this.__lp;
},_applyWidth:function(){if(qx.core.Variant.isSet(o,n)){if(this.__lo){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__lp=null;
},_applyStyle:function(){if(qx.core.Variant.isSet(o,n)){if(this.__lo){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this._disposeFields(x,z);
}});
})();
(function(){var v="_applyStyle",u="repeat",t="px",s="position:absolute;top:0;left:0",r="qx.ui.decoration.Background",q="",p="scale",o="qx.debug",n="backgroundPositionY",m="no-repeat",i="repeat-x",l="repeat-y",k="backgroundPositionX",h="Color",g="String",j="on";
qx.Class.define(r,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(x){arguments.callee.base.call(this);

if(x!=null){this.setBackgroundColor(x);
}},properties:{backgroundImage:{check:g,nullable:true,apply:v},backgroundRepeat:{check:[u,i,l,m,p],init:u,apply:v},backgroundColor:{check:h,nullable:true,apply:v},backgroundPositionX:{nullable:true,apply:v},backgroundPositionY:{nullable:true,apply:v},backgroundPosition:{group:[n,k]}},members:{__lq:null,getMarkup:function(){if(this.__lq){return this.__lq;
}var w=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),this.getBackgroundPositionX(),this.getBackgroundPositionY(),s);
return this.__lq=w;
},resize:function(a,b,c){a.style.width=b+t;
a.style.height=c+t;
},tint:function(d,e){var f=qx.theme.manager.Color.getInstance();

if(e==null){e=this.getBackgroundColor();
}d.style.backgroundColor=f.resolve(e)||q;
},__lr:{top:0,right:0,bottom:0,left:0},getInsets:function(){return this.__lr;
},_applyStyle:function(){if(qx.core.Variant.isSet(o,j)){if(this.__lq){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var C="px",B="0px",A="-1px",z="_applyInsets",y="Number",x="no-repeat",w="qx.debug",v="scale-x",u="on",t="scale-y",be="-tr",bd="-l",bc="insetTop",bb="__lu",ba='</div>',Y="__ls",X="insetBottom",W="scale",V="qx.client",U="-br",J="-t",K="-tl",H="-r",I='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',F="_applyBaseImage",G="-b",D="__lt",E="shorthand",L="String",M="insetRight",P="",O="-bl",R="__lv",Q="-c",T="mshtml",S="insetLeft",N="qx.ui.decoration.Grid";
qx.Class.define(N,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(a,b){arguments.callee.base.call(this);
if(a!=null){this.setBaseImage(a);
}
if(b!=null){this.setInsets(b);
}},properties:{baseImage:{check:L,nullable:true,apply:F},insetLeft:{check:y,init:0,apply:z},insetRight:{check:y,init:0,apply:z},insetBottom:{check:y,init:0,apply:z},insetTop:{check:y,init:0,apply:z},insets:{group:[bc,M,X,S],mode:E}},members:{__ls:null,__lt:null,__lu:null,__lv:null,getMarkup:function(){if(this.__ls){return this.__ls;
}var l=qx.bom.element.Decoration;
var m=this.__lu;
var n=this.__lv;
var o=[];
o.push(I);
o.push(l.create(m.tl,x,{top:0,left:0}));
o.push(l.create(m.t,v,{top:0,left:n.left+C}));
o.push(l.create(m.tr,x,{top:0,right:0}));
o.push(l.create(m.bl,x,{bottom:0,left:0}));
o.push(l.create(m.b,v,{bottom:0,left:n.left+C}));
o.push(l.create(m.br,x,{bottom:0,right:0}));
o.push(l.create(m.l,t,{top:n.top+C,left:0}));
o.push(l.create(m.c,W,{top:n.top+C,left:n.left+C}));
o.push(l.create(m.r,t,{top:n.top+C,right:0}));
o.push(ba);
return this.__ls=o.join(P);
},resize:function(p,q,r){var s=this.__lv;
var innerWidth=q-s.left-s.right;
var innerHeight=r-s.top-s.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}p.style.width=q+C;
p.style.height=r+C;
p.childNodes[1].style.width=innerWidth+C;
p.childNodes[4].style.width=innerWidth+C;
p.childNodes[7].style.width=innerWidth+C;
p.childNodes[6].style.height=innerHeight+C;
p.childNodes[7].style.height=innerHeight+C;
p.childNodes[8].style.height=innerHeight+C;

if(qx.core.Variant.isSet(V,T)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){if(q%2==1){p.childNodes[2].style.marginRight=A;
p.childNodes[5].style.marginRight=A;
p.childNodes[8].style.marginRight=A;
}else{p.childNodes[2].style.marginRight=B;
p.childNodes[5].style.marginRight=B;
p.childNodes[8].style.marginRight=B;
}
if(r%2==1){p.childNodes[3].style.marginBottom=A;
p.childNodes[4].style.marginBottom=A;
p.childNodes[5].style.marginBottom=A;
}else{p.childNodes[3].style.marginBottom=B;
p.childNodes[4].style.marginBottom=B;
p.childNodes[5].style.marginBottom=B;
}}}},tint:function(bf,bg){},getInsets:function(){if(this.__lt){return this.__lt;
}return this.__lt={left:this.getInsetLeft(),right:this.getInsetRight(),bottom:this.getInsetBottom(),top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(w,u)){if(this.__ls){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__lt=null;
},_applyBaseImage:function(c,d){if(qx.core.Variant.isSet(w,u)){if(this.__ls){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}var e=qx.util.ResourceManager;

if(c){var g=qx.util.AliasManager.getInstance();
var i=g.resolve(c);
var j=/(.*)(\.[a-z]+)$/.exec(i);
var h=j[1];
var f=j[2];
var k=this.__lu={tl:h+K+f,t:h+J+f,tr:h+be+f,bl:h+O+f,b:h+G+f,br:h+U+f,l:h+bd+f,c:h+Q+f,r:h+H+f};
this.__lv={top:e.getImageHeight(k.t),bottom:e.getImageHeight(k.b),left:e.getImageWidth(k.l),right:e.getImageWidth(k.r)};
}}},destruct:function(){this._disposeFields(Y,D,bb,R);
}});
})();
(function(){var m="_applyStyle",l="solid",k="Color",j="double",i="px ",h="dotted",g="_applyWidth",f="dashed",e="Number",d=" ",S=";",R="qx.debug",Q="shorthand",P="on",O="repeat",N="px",M="widthTop",L="scale",K="styleRight",J="styleBottom",t="widthLeft",u="widthBottom",r="",s="styleTop",p="colorBottom",q="styleLeft",n="widthRight",o="colorLeft",v="colorRight",w="colorTop",B="border-left:",A="position:absolute;top:0;left:0;",D="repeat-y",C="String",F="border-bottom:",E="border-right:",y="qx.ui.decoration.Single",I="border-top:",H="__lx",G="__lw",x="no-repeat",z="repeat-x";
qx.Class.define(y,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(be,bf,bg){arguments.callee.base.call(this);
if(be!=null){this.setWidth(be);
}
if(bf!=null){this.setStyle(bf);
}
if(bg!=null){this.setColor(bg);
}},properties:{widthTop:{check:e,init:0,apply:g},widthRight:{check:e,init:0,apply:g},widthBottom:{check:e,init:0,apply:g},widthLeft:{check:e,init:0,apply:g},styleTop:{nullable:true,check:[l,h,f,j],init:l,apply:m},styleRight:{nullable:true,check:[l,h,f,j],init:l,apply:m},styleBottom:{nullable:true,check:[l,h,f,j],init:l,apply:m},styleLeft:{nullable:true,check:[l,h,f,j],init:l,apply:m},colorTop:{nullable:true,check:k,apply:m},colorRight:{nullable:true,check:k,apply:m},colorBottom:{nullable:true,check:k,apply:m},colorLeft:{nullable:true,check:k,apply:m},backgroundImage:{check:C,nullable:true,apply:m},backgroundRepeat:{check:[O,z,D,x,L],init:O,apply:m},backgroundColor:{check:k,nullable:true,apply:m},left:{group:[t,q,o]},right:{group:[n,K,v]},top:{group:[M,s,w]},bottom:{group:[u,J,p]},width:{group:[M,n,u,t],mode:Q},style:{group:[s,K,J,q],mode:Q},color:{group:[w,v,p,o],mode:Q}},members:{__lw:null,__lx:null,getMarkup:function(T){if(this.__lw){return this.__lw;
}var U=qx.theme.manager.Color.getInstance();
var V=r;
var X=this.getWidthTop();

if(X>0){V+=I+X+i+this.getStyleTop()+d+U.resolve(this.getColorTop())+S;
}var X=this.getWidthRight();

if(X>0){V+=E+X+i+this.getStyleRight()+d+U.resolve(this.getColorRight())+S;
}var X=this.getWidthBottom();

if(X>0){V+=F+X+i+this.getStyleBottom()+d+U.resolve(this.getColorBottom())+S;
}var X=this.getWidthLeft();

if(X>0){V+=B+X+i+this.getStyleLeft()+d+U.resolve(this.getColorLeft())+S;
}if(qx.core.Variant.isSet(R,P)){if(V.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}V+=A;
var W=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,V);
return this.__lw=W;
},resize:function(Y,ba,bb){var bd=this.getBackgroundImage()&&this.getBackgroundRepeat()==L;

if(bd||qx.bom.client.Feature.CONTENT_BOX){var bc=this.getInsets();
ba-=bc.left+bc.right;
bb-=bc.top+bc.bottom;
if(ba<0){ba=0;
}
if(bb<0){bb=0;
}}Y.style.width=ba+N;
Y.style.height=bb+N;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||r;
},getInsets:function(){if(this.__lx){return this.__lx;
}this.__lx={top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
return this.__lx;
},_applyWidth:function(){if(qx.core.Variant.isSet(R,P)){if(this.__lw){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__lx=null;
},_applyStyle:function(){if(qx.core.Variant.isSet(R,P)){if(this.__lw){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this._disposeFields(G,H);
}});
})();
(function(){var p="_applyStyle",o='"></div>',n="Color",m="repeat",l='<div style="',k='border:',j="1px solid ",i="",h=";",g="px",I="position:absolute;top:1px;left:1px;",H="qx.ui.decoration.Beveled",G="scale",F='<div style="position:absolute;top:1px;left:0px;',E="qx.debug",D='<div style="position:absolute;top:1px;left:1px;',C="repeat-y",B='border-bottom:',A="String",z='border-right:',w='</div>',x='border-top:',u="Number",v="no-repeat",s='position:absolute;top:0px;left:1px;',t="repeat-x",q='<div style="overflow:hidden;font-size:0;line-height:0;">',r="on",y='border-left:';
qx.Class.define(H,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setOuterColor(a);
}
if(b!=null){this.setInnerColor(b);
}
if(c!=null){this.setInnerOpacity(c);
}},properties:{innerColor:{check:n,nullable:true,apply:p},innerOpacity:{check:u,init:1,apply:p},outerColor:{check:n,nullable:true,apply:p},backgroundImage:{check:A,nullable:true,apply:p},backgroundRepeat:{check:[m,t,C,v,G],init:m,apply:p},backgroundColor:{check:n,nullable:true,apply:p}},members:{__ly:null,_applyStyle:function(){if(qx.core.Variant.isSet(E,r)){if(this.__ly){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__ly){return this.__ly;
}var U=qx.theme.manager.Color.getInstance();
var V=[];
var X=j+U.resolve(this.getOuterColor())+h;
var W=j+U.resolve(this.getInnerColor())+h;
V.push(q);
V.push(l);
V.push(k,X);
V.push(qx.bom.element.Opacity.compile(0.35));
V.push(o);
V.push(F);
V.push(y,X);
V.push(z,X);
V.push(o);
V.push(l);
V.push(s);
V.push(x,X);
V.push(B,X);
V.push(o);
V.push(qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,I));
V.push(D);
V.push(k,W);
V.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
V.push(o);
V.push(w);
return this.__ly=V.join(i);
},resize:function(J,K,L){if(K<4){K=4;
}
if(L<4){L=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=K-2;
var outerHeight=L-2;
var R=outerWidth;
var Q=outerHeight;
var innerWidth=K-4;
var innerHeight=L-4;
}else{var outerWidth=K;
var outerHeight=L;
var R=K-2;
var Q=L-2;
var innerWidth=R;
var innerHeight=Q;
}var T=g;
var P=J.childNodes[0].style;
P.width=outerWidth+T;
P.height=outerHeight+T;
var O=J.childNodes[1].style;
O.width=outerWidth+T;
O.height=Q+T;
var N=J.childNodes[2].style;
N.width=R+T;
N.height=outerHeight+T;
var M=J.childNodes[3].style;
M.width=R+T;
M.height=Q+T;
var S=J.childNodes[4].style;
S.width=innerWidth+T;
S.height=innerHeight+T;
},tint:function(d,e){var f=qx.theme.manager.Color.getInstance();

if(e==null){e=this.getBackgroundColor();
}d.childNodes[3].style.backgroundColor=f.resolve(e)||i;
},getInsets:function(){return this.__lz;
},__lz:{top:2,right:2,bottom:2,left:2}}});
})();
(function(){var k="solid",j="scale",i="border-main",h="white",g="border-separator",f="repeat-x",e="background-light",d="border-disabled",c="decoration/table/header-cell.png",b="#f8f8f8",bj="#b6b6b6",bi="background-pane",bh="repeat-y",bg="border-input",bf="decoration/scrollbar/scrollbar-button-bg-horizontal.png",be="decoration/form/input.png",bd="decoration/scrollbar/scrollbar-button-bg-vertical.png",bc="decoration/tabview/tab-button-top-active.png",bb="decoration/form/button-c.png",ba="decoration/scrollbar/scrollbar-bg-vertical.png",r="decoration/shadow/shadow-small.png",s="decoration/form/button-checked.png",p="decoration/tabview/tab-button-left-inactive.png",q="decoration/groupbox/groupbox.png",n="#FAFAFA",o="decoration/pane/pane.png",l="decoration/menu/background.png",m="decoration/toolbar/toolbar-part.gif",w="decoration/tabview/tab-button-top-inactive.png",x="decoration/menu/bar-background.png",F="decoration/tabview/tab-button-bottom-active.png",D="decoration/form/button-hovered.png",N="#b8b8b8",I="decoration/form/input-focused.png",V="decoration/window/captionbar-inactive.png",S="qx/decoration/Modern",z="decoration/window/statusbar.png",Y="border-focused",X="decoration/selection.png",W="table-focus-indicator",y="#F2F2F2",B="decoration/form/button-checked-c.png",C="decoration/scrollbar/scrollbar-bg-horizontal.png",E="qx.theme.modern.Decoration",G="#f4f4f4",J="decoration/form/button.png",P="decoration/app-header.png",U="decoration/tabview/tabview-pane.png",t="decoration/form/button-focused.png",u="decoration/tabview/tab-button-bottom-inactive.png",A="decoration/form/button-disabled.png",M="decoration/tabview/tab-button-right-active.png",L="decoration/form/button-pressed.png",K="decoration/window/captionbar-active.png",R="decoration/tabview/tab-button-left-active.png",Q="background-splitpane",H="decoration/form/button-checked-focused.png",O="#C5C5C5",a="decoration/toolbar/toolbar-gradient.png",T="decoration/tabview/tab-button-right-inactive.png",v="decoration/shadow/shadow.png";
qx.Theme.define(E,{resource:S,decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:i}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:X,backgroundRepeat:j}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:g}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:v,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:r,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:C,backgroundRepeat:f}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:ba,backgroundRepeat:bh}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bf,backgroundRepeat:j,outerColor:i,innerColor:h,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bf,backgroundRepeat:j,outerColor:d,innerColor:h,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bd,backgroundRepeat:j,outerColor:i,innerColor:h,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bd,backgroundRepeat:j,outerColor:d,innerColor:h,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:J,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:D,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:L,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:H,insets:2}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bg,innerColor:h,innerOpacity:0.5,backgroundImage:be,backgroundRepeat:f,backgroundColor:e}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bg,innerColor:Y,backgroundImage:I,backgroundRepeat:f,backgroundColor:e}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:h,innerOpacity:0.5,backgroundImage:be,backgroundRepeat:f,backgroundColor:e}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:a,backgroundRepeat:j}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bj,innerColor:b,backgroundImage:bb,backgroundRepeat:j}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bj,innerColor:b,backgroundImage:B,backgroundRepeat:j}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:N,colorRight:G,styleLeft:k,styleRight:k}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:m,backgroundRepeat:bh}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:U,insets:[0,2,3,0]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:w}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:u}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:R}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:p}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:T}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bi,width:3,color:Q,style:k}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bi,width:1,color:i,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:K}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:V}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:z}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:i,style:k}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:i,style:k}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthBottom:1,colorBottom:i,style:k}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:g,styleRight:k}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:g,styleRight:k,widthBottom:1,colorBottom:h,styleBottom:k}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthBottom:1,colorBottom:i,style:k}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:W,style:k}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:i,style:k}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthRight:1,colorRight:y,style:k}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:l,backgroundRepeat:j,width:1,color:i,style:k}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:O,widthBottom:1,colorBottom:n}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:x,backgroundRepeat:j,width:1,color:g,style:k}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:P,backgroundRepeat:j}}}});
})();
(function(){var k="Lucida Grande",j="Liberation Sans",i="Arial",h="Tahoma",g="Candara",f="Segoe UI",e="Consolas",d="monospace",c="Courier New",b="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i]},"bold":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i],bold:true},"small":{size:qx.bom.client.System.WINVISTA?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[e]:[e,a,c,d]}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,resource:b,icons:{}});
})();
(function(){var fS="button-frame",fR="widget",fQ="atom",fP="main",fO="button",fN="middle",fM="background-light",fL="image",fK="groupbox",fJ="cell",eE="text-selected",eD="bold",eC="menu-button",eB="decoration/arrows/down.png",eA="toolbar-button",ez="spinner",ey="input",ex="input-disabled",ew="selected",ev="popup",ga="textfield",gb="input-focused",fX="list",fY="tree-item",fV="treevirtual-contract",fW="scrollbar",fT="datechooser/nav-button",fU="text-hovered",gc="center",gd="treevirtual-expand",fs="tooltip",fr="label",fu="decoration/arrows/right.png",ft="background-application",fw="radiobutton",fv="text-disabled",fy="combobox",fx="checkbox",fq="text-title",fp="qx/static/blank.gif",cN="scrollbar/button",cO="right",cP="combobox/button",cQ="text-label",cR="decoration/tree/closed.png",cS="scrollbar-slider-horizontal",cT="white",cU="decoration/arrows/left.png",cV="button-focused",cW="text-light",gr="text-input",gq="icon/16/places/folder.png",gp="slidebar/button-forward",go="right-top",gv="background-splitpane",gu=".png",gt="decoration/tree/open.png",gs="default",gx="decoration/arrows/down-small.png",gw="datechooser",dK="slidebar/button-backward",dL="selectbox",dI="treevirtual-folder",dJ="shadow-popup",dO="icon/16/mimetypes/office-document.png",dP="background-medium",dM="table",dN="decoration/form/",dG="icon/16/places/folder-open.png",dH="button-checked",dq="decoration/window/maximize-active-hovered.png",dp="radiobutton-hovered",ds="decoration/cursors/",dr="slidebar",dl="menu",dk="table-scroller-focus-indicator",dn="move-frame",dm="nodrop",dj="table-header-cell",di="app-header",dU="row-layer",dV="text-inactive",dW="move",dX="radiobutton-checked-focused",dQ="decoration/window/restore-active-hovered.png",dR="shadow-window",dS="table-column-button",dT="right.png",dY="tabview-page-button-bottom-inactive",ea="window-statusbar",dB="button-hovered",dA="decoration/scrollbar/scrollbar-",dz="background-tip",dy="scrollbar-slider-horizontal-disabled",dx="table-scroller-header",dw="radiobutton-disabled",dv="button-pressed",du="table-pane",dF="decoration/window/close-active.png",dE="tabview-page-button-left-active",eb="checkbox-hovered",ec="checkbox-checked",ed="decoration/window/minimize-active-hovered.png",ee="menubar",ef="icon/16/actions/dialog-cancel.png",eg="tabview-page-button-top-inactive",eh="tabview-page-button-left-inactive",ei="toolbar-button-checked",ej="decoration/tree/open-selected.png",ek="radiobutton-checked",eM="decoration/window/minimize-inactive.png",eL="icon/16/apps/office-calendar.png",eK="group",eJ="tabview-page-button-right-inactive",eQ="decoration/window/minimize-active.png",eP="decoration/window/restore-inactive.png",eO="text-active",eN="checkbox-checked-focused",eT="splitpane",eS="toolbar-separator",fl="button-preselected-focused",fm="decoration/window/close-active-hovered.png",fj="toolbar",fk="checkbox-pressed",fh="button-disabled",fi="border-separator",ff="decoration/window/maximize-inactive.png",fg="icon/22/places/folder-open.png",fn="scrollarea",fo="scrollbar-vertical",fC="decoration/toolbar/toolbar-handle-knob.gif",fB="icon/22/mimetypes/office-document.png",fE="button-preselected",fD="button-checked-focused",fG="up.png",fF="decoration/tree/closed-selected.png",fI="qx.theme.modern.Appearance",fH="checkbox-disabled",fA="toolbar-button-hovered",fz="progressive-table-header",gk="decoration/menu/radiobutton.gif",gl="decoration/arrows/forward.png",gm="decoration/table/descending.png",gn="window-captionbar-active",gg="checkbox-checked-hovered",gh="scrollbar-slider-vertical",gi="alias",gj="decoration/window/restore-active.png",ge="checkbox-checked-disabled",gf="icon/32/mimetypes/office-document.png",cM="radiobutton-checked-disabled",cL="tabview-pane",cK="decoration/arrows/rewind.png",cJ="checkbox-focused",cI="top",cH="#EEE",cG="icon/16/actions/dialog-ok.png",cF="radiobutton-checked-hovered",cE="table-header-cell-hovered",cD="window",da="text-gray",db="decoration/menu/radiobutton-invert.gif",cX="slider",cY="decoration/table/select-column-order.png",de="down.png",df="tabview-page-button-top-active",dc="icon/32/places/folder-open.png",dd="icon/22/places/folder.png",dg="decoration/window/maximize-active.png",dh="checkbox-checked-pressed",eU="decoration/window/close-inactive.png",eR="toolbar-part",fa="decoration/splitpane/knob-vertical.png",eV="left.png",eH="decoration/menu/checkbox-invert.gif",eF="decoration/arrows/up.png",dt="radiobutton-checked-pressed",eI="table-statusbar",dD="radiobutton-pressed",dC="window-captionbar-inactive",en="copy",eo="radiobutton-focused",ep="decoration/menu/checkbox.gif",eq="decoration/splitpane/knob-horizontal.png",er="icon/32/places/folder.png",es="tabview-page-button-bottom-active",et="decoration/arrows/up-small.png",eu="decoration/table/ascending.png",el="small",em="tabview-page-button-right-active",eG="-disabled",eY="scrollbar-horizontal",eX="progressive-table-header-cell",eW="menu-separator",fe="pane",fd="decoration/arrows/right-invert.png",fc=".gif",fb="icon/16/actions/view-refresh.png";
qx.Theme.define(fI,{appearances:{"widget":{},"root":{style:function(cg){return {backgroundColor:ft,textColor:cQ,font:gs};
}},"label":{style:function(be){return {textColor:be.disabled?fv:undefined};
}},"move-frame":{style:function(cs){return {decorator:fP};
}},"resize-frame":dn,"dragdrop-cursor":{style:function(cb){var cc=dm;

if(cb.copy){cc=en;
}else if(cb.move){cc=dW;
}else if(cb.alias){cc=gi;
}return {source:ds+cc+fc,position:go,offset:[2,16,2,6]};
}},"image":{style:function(cC){return {opacity:!cC.replacement&&cC.disabled?0.3:1};
}},"atom":{},"atom/label":fr,"atom/icon":fL,"popup":{style:function(b){return {decorator:fP,backgroundColor:fM,shadow:dJ};
}},"button-frame":{alias:fQ,style:function(W){var Y,X;

if(W.checked&&W.focused&&!W.inner){Y=fD;
X=undefined;
}else if(W.disabled){Y=fh;
X=undefined;
}else if(W.pressed){Y=dv;
X=fU;
}else if(W.checked){Y=dH;
X=undefined;
}else if(W.hovered){Y=dB;
X=fU;
}else if(W.preselected&&W.focused&&!W.inner){Y=fl;
X=fU;
}else if(W.preselected){Y=fE;
X=fU;
}else if(W.focused&&!W.inner){Y=cV;
X=undefined;
}else{Y=fO;
X=undefined;
}return {decorator:Y,textColor:X};
}},"button-frame/image":{style:function(m){return {opacity:!m.replacement&&m.disabled?0.5:1};
}},"button":{alias:fS,include:fS,style:function(bU){return {padding:[2,8],center:true};
}},"splitbutton":{},"splitbutton/button":fO,"splitbutton/arrow":{alias:fO,include:fO,style:function(gX){return {icon:eB,padding:2,marginLeft:1};
}},"checkbox":{alias:fQ,style:function(L){var M;

if(L.checked&&L.focused){M=eN;
}else if(L.checked&&L.disabled){M=ge;
}else if(L.checked&&L.pressed){M=dh;
}else if(L.checked&&L.hovered){M=gg;
}else if(L.checked){M=ec;
}else if(L.disabled){M=fH;
}else if(L.focused){M=cJ;
}else if(L.pressed){M=fk;
}else if(L.hovered){M=eb;
}else{M=fx;
}return {icon:dN+M+gu,gap:6};
}},"radiobutton":{alias:fQ,style:function(gF){var gG;

if(gF.checked&&gF.focused){gG=dX;
}else if(gF.checked&&gF.disabled){gG=cM;
}else if(gF.checked&&gF.pressed){gG=dt;
}else if(gF.checked&&gF.hovered){gG=cF;
}else if(gF.checked){gG=ek;
}else if(gF.disabled){gG=dw;
}else if(gF.focused){gG=eo;
}else if(gF.pressed){gG=dD;
}else if(gF.hovered){gG=dp;
}else{gG=fw;
}return {icon:dN+gG+gu,gap:6};
}},"textfield":{style:function(bC){return {decorator:bC.focused?gb:bC.disabled?ex:ey,padding:[2,4,1],textColor:bC.disabled?fv:gr};
}},"textarea":{include:ga,style:function(R){return {padding:4};
}},"spinner":{style:function(br){return {decorator:br.focused?gb:br.disabled?ex:ey};
}},"spinner/textfield":{include:ga,style:function(cA){return {decorator:undefined};
}},"spinner/upbutton":{alias:fS,include:fS,style:function(gS){return {icon:et,padding:gS.pressed?[2,2,0,4]:[1,3,1,3]};
}},"spinner/downbutton":{alias:fS,include:fS,style:function(gV){return {icon:gx,padding:gV.pressed?[2,2,0,4]:[1,3,1,3]};
}},"datefield":fy,"datefield/button":{alias:cP,include:cP,style:function(gO){return {icon:eL,padding:[0,3],decorator:undefined};
}},"datefield/textfield":{style:function(gA){return {padding:[2,4,1],textColor:gA.disabled?fv:gr};
}},"datefield/list":{alias:gw,include:gw,style:function(v){return {decorator:undefined};
}},"groupbox":{style:function(c){return {legendPosition:cI};
}},"groupbox/legend":{alias:fQ,style:function(gI){return {padding:[1,0,1,4],textColor:fq,font:eD};
}},"groupbox/frame":{style:function(co){return {padding:12,decorator:eK};
}},"check-groupbox":fK,"check-groupbox/legend":{alias:fx,include:fx,style:function(bv){return {padding:[1,0,1,4],textColor:fq,font:eD};
}},"radio-groupbox":fK,"radio-groupbox/legend":{alias:fw,include:fw,style:function(G){return {padding:[1,0,1,4],textColor:fq};
}},"scrollarea":{style:function(n){return {minWidth:64,minHeight:64};
}},"scrollarea/corner":{style:function(cm){return {backgroundColor:ft};
}},"scrollarea/pane":fR,"scrollarea/scrollbar-x":fW,"scrollarea/scrollbar-y":fW,"scrollbar":{style:function(gR){return {width:gR.horizontal?undefined:16,height:gR.horizontal?16:undefined,decorator:gR.horizontal?eY:fo,padding:1};
}},"scrollbar/slider":{alias:cX,style:function(w){return {padding:w.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:fS,style:function(gM){var gN=gM.horizontal?cS:gh;

if(gM.disabled){gN+=eG;
}return {decorator:gN,minHeight:gM.horizontal?undefined:14,minWidth:gM.horizontal?14:undefined};
}},"scrollbar/button":{alias:fS,include:fS,style:function(gD){var gE=dA;

if(gD.left){gE+=eV;
}else if(gD.right){gE+=dT;
}else if(gD.up){gE+=fG;
}else{gE+=de;
}
if(gD.left||gD.right){return {padding:[0,0,0,gD.left?3:4],icon:gE,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:gE,width:14,height:15};
}}},"scrollbar/button-begin":cN,"scrollbar/button-end":cN,"slider":{style:function(bV){return {decorator:bV.focused?gb:bV.disabled?ex:ey};
}},"slider/knob":{include:fS,style:function(u){return {decorator:u.disabled?dy:cS,height:14,width:14};
}},"list":{alias:fn,style:function(gH){return {backgroundColor:fM,decorator:gH.focused?gb:gH.disabled?ex:ey};
}},"list/pane":fR,"listitem":{alias:fQ,style:function(bs){return {padding:4,textColor:bs.selected?eE:undefined,decorator:bs.selected?ew:undefined};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fS,include:fS,style:function(x){return {padding:5,center:true,icon:x.barLeft||x.barRight?eB:fu};
}},"slidebar/button-backward":{alias:fS,include:fS,style:function(bu){return {padding:5,center:true,icon:bu.barLeft||bu.barRight?eF:cU};
}},"tabview":{style:function(K){return {contentPadding:16};
}},"tabview/bar":{alias:dr,style:function(bA){var bB={marginBottom:bA.barTop?-1:0,marginTop:bA.barBottom?-4:0,marginLeft:bA.barRight?-3:0,marginRight:bA.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(bA.barTop||bA.barBottom){bB.paddingLeft=5;
bB.paddingRight=7;
}else{bB.paddingTop=5;
bB.paddingBottom=7;
}return bB;
}},"tabview/bar/button-forward":{include:gp,alias:gp,style:function(gK){if(gK.barTop||gK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dK,alias:dK,style:function(cw){if(cw.barTop||cw.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(y){return {decorator:cL,minHeight:100,marginBottom:y.barBottom?-1:0,marginTop:y.barTop?-1:0,marginLeft:y.barLeft?-1:0,marginRight:y.barRight?-1:0};
}},"tabview-page":fR,"tabview-page/button":{alias:fQ,style:function(bh){var bn,bj=0;
var bm=0,bi=0,bk=0,bl=0;

if(bh.checked){if(bh.barTop){bn=df;
bj=[6,14];
bk=bh.firstTab?0:-5;
bl=bh.lastTab?0:-5;
}else if(bh.barBottom){bn=es;
bj=[6,14];
bk=bh.firstTab?0:-5;
bl=bh.lastTab?0:-5;
}else if(bh.barRight){bn=em;
bj=[6,13];
bm=bh.firstTab?0:-5;
bi=bh.lastTab?0:-5;
}else{bn=dE;
bj=[6,13];
bm=bh.firstTab?0:-5;
bi=bh.lastTab?0:-5;
}}else{if(bh.barTop){bn=eg;
bj=[4,10];
bm=4;
bk=bh.firstTab?5:1;
bl=1;
}else if(bh.barBottom){bn=dY;
bj=[4,10];
bi=4;
bk=bh.firstTab?5:1;
bl=1;
}else if(bh.barRight){bn=eJ;
bj=[4,10];
bl=5;
bm=bh.firstTab?5:1;
bi=1;
bk=1;
}else{bn=eh;
bj=[4,10];
bk=5;
bm=bh.firstTab?5:1;
bi=1;
bl=1;
}}return {zIndex:bh.checked?10:5,decorator:bn,padding:bj,marginTop:bm,marginBottom:bi,marginLeft:bk,marginRight:bl,textColor:bh.checked?eO:dV};
}},"toolbar":{style:function(E){return {decorator:fj,spacing:2};
}},"toolbar/part":{style:function(cB){return {decorator:eR,spacing:2};
}},"toolbar/part/container":{style:function(J){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(Q){return {source:fC,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:fQ,style:function(cx){return {marginTop:2,marginBottom:2,padding:(cx.pressed||cx.checked||cx.hovered)&&!cx.disabled||(cx.disabled&&cx.checked)?3:5,decorator:cx.pressed||(cx.checked&&!cx.hovered)||(cx.checked&&cx.disabled)?ei:cx.hovered&&!cx.disabled?fA:undefined};
}},"toolbar-menubutton":{alias:eA,include:eA,style:function(gP){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:fL,include:fL,style:function(cv){return {source:gx};
}},"toolbar-splitbutton":{style:function(bE){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eA,include:eA,style:function(H){return {icon:eB,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eA,include:eA,style:function(bx){return {padding:bx.pressed||bx.checked?1:bx.hovered?1:3,icon:eB,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(bI){return {decorator:eS,margin:7};
}},"tree":fX,"tree-item":{style:function(gC){return {padding:[2,6],textColor:gC.selected?eE:undefined,decorator:gC.selected?ew:undefined};
}},"tree-item/icon":{include:fL,style:function(bb){return {paddingRight:5};
}},"tree-item/label":fr,"tree-item/open":{include:fL,style:function(bp){var bq;

if(bp.selected&&bp.opened){bq=ej;
}else if(bp.selected&&!bp.opened){bq=fF;
}else if(bp.opened){bq=gt;
}else{bq=cR;
}return {padding:[0,5,0,2],source:bq};
}},"tree-folder":{include:fY,alias:fY,style:function(h){var i;

if(h.small){i=h.opened?dG:gq;
}else if(h.large){i=h.opened?dc:er;
}else{i=h.opened?fg:dd;
}return {icon:i};
}},"tree-file":{include:fY,alias:fY,style:function(V){return {icon:V.small?dO:V.large?gf:fB};
}},"treevirtual":dM,"treevirtual-folder":{style:function(p){return {icon:p.opened?dG:gq};
}},"treevirtual-file":{include:dI,alias:dI,style:function(k){return {icon:dO};
}},"treevirtual-line":{style:function(a){return {icon:fp};
}},"treevirtual-contract":{style:function(gY){return {icon:gt,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(cn){return {icon:cR,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":fV,"treevirtual-only-expand":gd,"treevirtual-start-contract":fV,"treevirtual-start-expand":gd,"treevirtual-end-contract":fV,"treevirtual-end-expand":gd,"treevirtual-cross-contract":fV,"treevirtual-cross-expand":gd,"treevirtual-end":{style:function(cf){return {icon:fp};
}},"treevirtual-cross":{style:function(ce){return {icon:fp};
}},"tooltip":{include:ev,style:function(S){return {backgroundColor:dz,padding:[1,3,2,3],offset:[1,1,20,1]};
}},"tooltip/atom":fQ,"window":{style:function(o){return {shadow:dR,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(bJ){return {decorator:cD};
}},"window/captionbar":{style:function(ca){return {decorator:ca.active?gn:dC,textColor:ca.active?cT:da,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(z){return {margin:[5,0,3,6]};
}},"window/title":{style:function(cz){return {alignY:fN,font:eD,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:fQ,style:function(bo){return {icon:bo.active?bo.hovered?ed:eQ:eM,margin:[4,8,2,0]};
}},"window/restore-button":{alias:fQ,style:function(T){return {icon:T.active?T.hovered?dQ:gj:eP,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:fQ,style:function(cp){return {icon:cp.active?cp.hovered?dq:dg:ff,margin:[4,8,2,0]};
}},"window/close-button":{alias:fQ,style:function(cy){return {icon:cy.active?cy.hovered?fm:dF:eU,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(cd){return {padding:[2,6],decorator:ea,minHeight:18};
}},"window/statusbar-text":{style:function(bd){return {font:el};
}},"iframe":{style:function(ck){return {decorator:fP};
}},"resizer":{style:function(bS){return {decorator:fe};
}},"splitpane":{style:function(P){return {decorator:eT};
}},"splitpane/splitter":{style:function(ba){return {width:ba.horizontal?3:undefined,height:ba.vertical?3:undefined,backgroundColor:gv};
}},"splitpane/splitter/knob":{style:function(by){return {source:by.horizontal?eq:fa};
}},"splitpane/slider":{style:function(F){return {width:F.horizontal?3:undefined,height:F.vertical?3:undefined,backgroundColor:gv};
}},"selectbox":{alias:fS,include:fS,style:function(q){return {padding:[2,8]};
}},"selectbox/atom":fQ,"selectbox/popup":ev,"selectbox/list":{alias:fX},"selectbox/arrow":{include:fL,style:function(bW){return {source:eB,paddingLeft:5};
}},"datechooser":{style:function(cu){return {padding:2,decorator:fP,backgroundColor:fM};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:fS,alias:fS,style:function(gy){var gz={padding:[2,4]};

if(gy.lastYear){gz.icon=cK;
gz.marginRight=1;
}else if(gy.lastMonth){gz.icon=cU;
}else if(gy.nextYear){gz.icon=gl;
gz.marginLeft=1;
}else if(gy.nextMonth){gz.icon=fu;
}return gz;
}},"datechooser/last-year-button-tooltip":fs,"datechooser/last-month-button-tooltip":fs,"datechooser/next-year-button-tooltip":fs,"datechooser/next-month-button-tooltip":fs,"datechooser/last-year-button":fT,"datechooser/last-month-button":fT,"datechooser/next-month-button":fT,"datechooser/next-year-button":fT,"datechooser/month-year-label":{style:function(bt){return {font:eD,textAlign:gc};
}},"datechooser/date-pane":{style:function(j){return {marginTop:2};
}},"datechooser/weekday":{style:function(A){return {textColor:A.weekend?cW:undefined,textAlign:gc,paddingTop:2,backgroundColor:dP};
}},"datechooser/week":{style:function(bz){return {textAlign:gc,padding:[2,4],backgroundColor:dP};
}},"datechooser/day":{style:function(bM){return {textAlign:gc,decorator:bM.selected?ew:undefined,textColor:bM.selected?eE:bM.otherMonth?cW:undefined,font:bM.today?eD:undefined,padding:[2,4]};
}},"combobox":{style:function(ct){return {decorator:ct.focused?gb:ct.disabled?ex:ey};
}},"combobox/popup":ev,"combobox/list":{alias:fX},"combobox/button":{include:fS,alias:fS,style:function(bN){var bO={icon:eB,padding:2};

if(bN.selected){bO.decorator=cV;
}return bO;
}},"combobox/textfield":{include:ga,style:function(d){return {decorator:undefined};
}},"menu":{style:function(bP){var bQ={decorator:dl,shadow:dJ,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4};

if(bP.submenu){bQ.position=go;
bQ.offset=[-2,-3];
}return bQ;
}},"menu-separator":{style:function(cq){return {height:0,decorator:eW,margin:[4,2]};
}},"menu-button":{alias:fQ,style:function(bc){return {decorator:bc.selected?ew:undefined,textColor:bc.selected?eE:undefined,padding:[4,6]};
}},"menu-button/icon":{include:fL,style:function(gT){return {alignY:fN};
}},"menu-button/label":{include:fr,style:function(bR){return {alignY:fN,padding:1};
}},"menu-button/shortcut":{include:fr,style:function(ci){return {alignY:fN,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(C){return {source:C.selected?fd:fu,alignY:fN};
}},"menu-checkbox":{alias:eC,include:eC,style:function(bf){return {icon:!bf.checked?undefined:bf.selected?eH:ep};
}},"menu-radiobutton":{alias:eC,include:eC,style:function(bw){return {icon:!bw.checked?undefined:bw.selected?db:gk};
}},"menubar":{style:function(gQ){return {decorator:ee};
}},"menubar-button":{alias:fQ,style:function(bF){return {decorator:bF.pressed||bF.hovered?ew:undefined,textColor:bF.pressed||bF.hovered?eE:undefined,padding:[3,8]};
}},"colorselector":fR,"colorselector/control-bar":fR,"colorselector/control-pane":fR,"colorselector/visual-pane":fK,"colorselector/preset-grid":fR,"colorselector/colorbucket":{style:function(bK){return {decorator:fP,width:16,height:16};
}},"colorselector/preset-field-set":fK,"colorselector/input-field-set":fK,"colorselector/preview-field-set":fK,"colorselector/hex-field-composite":fR,"colorselector/hex-field":ga,"colorselector/rgb-spinner-composite":fR,"colorselector/rgb-spinner-red":ez,"colorselector/rgb-spinner-green":ez,"colorselector/rgb-spinner-blue":ez,"colorselector/hsb-spinner-composite":fR,"colorselector/hsb-spinner-hue":ez,"colorselector/hsb-spinner-saturation":ez,"colorselector/hsb-spinner-brightness":ez,"colorselector/preview-content-old":{style:function(bD){return {decorator:fP,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(t){return {decorator:fP,backgroundColor:fM,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(ch){return {decorator:fP,margin:5};
}},"colorselector/brightness-field":{style:function(g){return {decorator:fP,margin:[5,7]};
}},"colorselector/hue-saturation-pane":fR,"colorselector/hue-saturation-handle":fR,"colorselector/brightness-pane":fR,"colorselector/brightness-handle":fR,"colorpopup":{alias:ev,include:ev,style:function(gU){return {padding:5,backgroundColor:ft};
}},"colorpopup/field":{style:function(D){return {decorator:fP,margin:2,width:14,height:14,backgroundColor:fM};
}},"colorpopup/selector-button":fO,"colorpopup/auto-button":fO,"colorpopup/preview-pane":fK,"colorpopup/current-preview":{style:function(bg){return {height:20,padding:4,marginLeft:4,decorator:fP,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(N){return {height:20,padding:4,marginRight:4,decorator:fP,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:fO,include:fO,style:function(bX){return {icon:cG};
}},"colorpopup/colorselector-cancelbutton":{alias:fO,include:fO,style:function(gJ){return {icon:ef};
}},"table":{alias:fR,style:function(U){return {decorator:dM};
}},"table-header":{},"table/statusbar":{style:function(I){return {decorator:eI,padding:[0,2]};
}},"table/column-button":{alias:fS,style:function(cj){return {decorator:dS,padding:3,icon:cY};
}},"table-column-reset-button":{include:eC,alias:eC,style:function(){return {icon:fb};
}},"table-scroller":fR,"table-scroller/scrollbar-x":fW,"table-scroller/scrollbar-y":fW,"table-scroller/header":{style:function(B){return {decorator:dx};
}},"table-scroller/pane":{style:function(bL){return {backgroundColor:du};
}},"table-scroller/focus-indicator":{style:function(bT){return {decorator:dk};
}},"table-scroller/resize-line":{style:function(gB){return {backgroundColor:fi,width:2};
}},"table-header-cell":{alias:fQ,style:function(O){return {minWidth:13,minHeight:20,padding:O.hovered?[3,4,2,4]:[3,4],decorator:O.hovered?cE:dj,sortIcon:O.sorted?(O.sortedAscending?eu:gm):undefined};
}},"table-header-cell/label":{style:function(s){return {minWidth:0,alignY:fN,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(bH){return {alignY:fN,alignX:cO};
}},"table-header-cell/icon":{style:function(e){return {minWidth:0,alignY:fN,paddingRight:5};
}},"table-editor-textfield":{include:ga,style:function(gW){return {decorator:undefined,padding:[2,2],backgroundColor:fM};
}},"table-editor-selectbox":{include:dL,alias:dL,style:function(bG){return {padding:[0,2],backgroundColor:fM};
}},"table-editor-combobox":{include:fy,alias:fy,style:function(r){return {decorator:undefined,backgroundColor:fM};
}},"progressive-table-header":{alias:fR,style:function(bY){return {decorator:fz};
}},"progressive-table-header-cell":{alias:fQ,style:function(gL){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:eX};
}},"app-header":{style:function(f){return {font:eD,textColor:eE,padding:[8,12],decorator:di};
}},"virtual-list":fX,"virtual-list/row-layer":dU,"row-layer":{style:function(cr){return {colorEven:cT,colorOdd:cH};
}},"column-layer":fR,"cell":{style:function(l){return {textColor:l.selected?eE:cQ,padding:[3,6],font:gs};
}},"cell-string":fJ,"cell-number":{include:fJ,style:function(cl){return {textAlign:cO};
}},"cell-image":fJ,"cell-boolean":fJ,"cell-atom":fJ,"cell-date":fJ,"cell-html":fJ}});
})();
(function(){var d="tree",c="main",b="Demo browser",a="demobrowser.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,title:b,appearances:{"demo-tree":{alias:d,include:d,style:function(){return {width:250,decorator:c};
}}}});
})();
(function(){var b="demobrowser.Theme",a="Demo browser";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,icon:qx.theme.icon.Tango,appearance:demobrowser.Appearance}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

