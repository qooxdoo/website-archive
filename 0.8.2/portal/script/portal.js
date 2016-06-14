if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application": "portal.Application", "qx.theme": "qx.theme.Modern", "qx.version": "0.8.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!window.qxlibraries) qxlibraries = {};
var libinfo = {"qx": {"resourceUri": "resource", "version": "trunk"}, "portal": {"resourceUri": "resource", "version": "trunk"}};
for (var k in libinfo) qxlibraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -238, 0], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -51, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -105, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -38, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/inputcheckradio-combined.png": [404, 14, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -112, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -44, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -140, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -156, 0], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -142, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -162, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "portal/css/style.css": "portal", "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -26, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -126, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -280, 0], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -41, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -19, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -148, 0], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -64, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -79, 0], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -120, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -18, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -56, 0], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -36, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -132, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -66, 0], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -266, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -46, 0], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -98, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "portal/data/boxData.js": "portal", "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -84, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -95, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -13, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -152, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -252, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -8, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -76, 0], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0]};
qx.$$translations = {};
qx.$$locales = {"C": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "en": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}}

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["script/portal-0.js"]],
  boot : "boot"
};  

(function(){var f="[Class ",e="toString",d="qx.Bootstrap",c="]",b="Class",a=".";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return f+this.classname+c;
},createNamespace:function(name,g){var j=name.split(a);
var parent=window;
var h=j[0];

for(var i=0,k=j.length-1;i<k;i++,h=j[i]){if(!parent[h]){parent=parent[h]={};
}else{parent=parent[h];
}}parent[h]=g;
return h;
},define:function(name,l){if(!l){var l={statics:{}};
}var q;
var o=null;

if(l.members){q=l.construct||new Function;
var m=l.statics;

for(var n in m){q[n]=m[n];
}o=q.prototype;
var r=l.members;

for(var n in r){o[n]=r[n];
}}else{q=l.statics||{};
}var p=this.createNamespace(name,q);
q.name=q.classname=name;
q.basename=p;
q.$$type=b;
if(!q.hasOwnProperty(e)){q.toString=this.genericToString;
}if(l.defer){l.defer(q,o);
}qx.Bootstrap.$$registry[name]=l.statics;
}};
qx.Bootstrap.define(d,{statics:{LOADSTART:new Date,createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var p="qx.allowUrlSettings",o="&",n="qx.core.Setting",m="qx.allowUrlVariants",l="qxsetting",k=":",j=".";
qx.Bootstrap.define(n,{statics:{__b:{},define:function(d,e){if(e===undefined){throw new Error('Default value of setting "'+d+'" must be defined!');
}
if(!this.__b[d]){this.__b[d]={};
}else if(this.__b[d].defaultValue!==undefined){throw new Error('Setting "'+d+'" is already defined!');
}this.__b[d].defaultValue=e;
},get:function(f){var g=this.__b[f];

if(g===undefined){throw new Error('Setting "'+f+'" is not defined.');
}
if(g.value!==undefined){return g.value;
}return g.defaultValue;
},__c:function(){if(window.qxsettings){for(var h in qxsettings){if((h.split(j)).length<2){throw new Error('Malformed settings key "'+h+'". Must be following the schema "namespace.key".');
}
if(!this.__b[h]){this.__b[h]={};
}this.__b[h].value=qxsettings[h];
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(q){}this.__d();
}},__d:function(){if(this.get(p)!=true){return;
}var c=document.location.search.slice(1).split(o);

for(var i=0;i<c.length;i++){var a=c[i].split(k);

if(a.length!=3||a[0]!=l){continue;
}var b=a[1];

if(!this.__b[b]){this.__b[b]={};
}this.__b[b].value=decodeURIComponent(a[2]);
}}},defer:function(r){r.define(p,false);
r.define(m,false);
r.__c();
}});
})();
(function(){var x="gecko",w="1.9.0.0",v=".",u="function",t="[^\\.0-9]",s="525.26",r="",q="mshtml",p="AppleWebKit/",o="unknown",j="9.6.0",n="Gecko",m="7.0",i="opera",h="webkit",l="0.0.0",k="qx.bom.client.Engine";
qx.Bootstrap.define(k,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,__e:function(){var a=o;
var e=l;
var d=navigator.userAgent;
var g=false;
var c=false;

if(window.opera){a=i;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(d)){e=RegExp.$1+v+RegExp.$2;

if(RegExp.$3!=r){e+=v+RegExp.$3;
}}else{c=true;
e=j;
}}else if(navigator.userAgent.indexOf(p)!=-1){a=h;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(d)){e=RegExp.$1;
var f=RegExp(t).exec(e);

if(f){e=e.slice(0,f.index);
}}else{c=true;
e=s;
}}else if(window.controllers&&navigator.product===n){a=x;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(d)){e=RegExp.$1;
}else{c=true;
e=w;
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(d)){a=q;
e=RegExp.$1;
if(e>=8&&document.documentMode<8){e=m;
}this.MSHTML=true;
}else{var b=window.qxFail;

if(b&&typeof b===u){var a=b();

if(a.NAME&&a.FULLVERSION){a=a.NAME;
this[a.toUpperCase()]=true;
e=a.FULLVERSION;
}}else{g=true;
c=true;
e=w;
a=x;
this.GECKO=true;
alert("Unsupported client: "+d+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=g;
this.UNKNOWN_VERSION=c;
this.NAME=a;
this.FULLVERSION=e;
this.VERSION=parseFloat(e);
}},defer:function(y){y.__e();
}});
})();
(function(){var C="on",B="off",A="|",z="default",y="object",x="&",w="qx.aspects",u="$",t="qx.allowUrlVariants",s="qx.debug",m="qx.client",r="qx.dynlocale",p="webkit",k="qxvariant",j="opera",o=":",n="qx.core.Variant",q="mshtml",h="gecko";
qx.Bootstrap.define(n,{statics:{__f:{},__g:{},compilerIsSet:function(){return true;
},define:function(M,N,O){{};

if(!this.__f[M]){this.__f[M]={};
}else{}this.__f[M].allowedValues=N;
this.__f[M].defaultValue=O;
},get:function(G){var H=this.__f[G];
{};

if(H.value!==undefined){return H.value;
}return H.defaultValue;
},__h:function(){if(window.qxvariants){for(var L in qxvariants){{};

if(!this.__f[L]){this.__f[L]={};
}this.__f[L].value=qxvariants[L];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(P){}this.__i(this.__f);
}},__i:function(){if(qx.core.Setting.get(t)!=true){return;
}var D=document.location.search.slice(1).split(x);

for(var i=0;i<D.length;i++){var E=D[i].split(o);

if(E.length!=3||E[0]!=k){continue;
}var F=E[1];

if(!this.__f[F]){this.__f[F]={};
}this.__f[F].value=decodeURIComponent(E[2]);
}},select:function(I,J){{};

for(var K in J){if(this.isSet(I,K)){return J[K];
}}
if(J[z]!==undefined){return J[z];
}{};
},isSet:function(c,d){var e=c+u+d;

if(this.__g[e]!==undefined){return this.__g[e];
}var g=false;
if(d.indexOf(A)<0){g=this.get(c)===d;
}else{var f=d.split(A);

for(var i=0,l=f.length;i<l;i++){if(this.get(c)===f[i]){g=true;
break;
}}}this.__g[e]=g;
return g;
},__j:function(v){return typeof v===y&&v!==null&&v instanceof Array;
},__k:function(v){return typeof v===y&&v!==null&&!(v instanceof Array);
},__l:function(a,b){for(var i=0,l=a.length;i<l;i++){if(a[i]==b){return true;
}}return false;
}},defer:function(Q){Q.define(m,[h,q,j,p],qx.bom.client.Engine.NAME);
Q.define(s,[C,B],C);
Q.define(w,[C,B],B);
Q.define(r,[C,B],C);
Q.__h();
}});
})();
(function(){var D='"',C="valueOf",B="toLocaleString",A="isPrototypeOf",z="",y="toString",x="qx.client",w="qx.lang.Object",v='\", "',u="hasOwnProperty",t="Use 'clone()' instead!";
qx.Bootstrap.define(w,{statics:{empty:function(m){for(var n in m){if(m.hasOwnProperty(n)){delete m[n];
}}},isEmpty:function(N){for(var O in N){return false;
}return true;
},hasMinLength:function(E,F){var length=0;

for(var G in E){if((++length)>=F){return true;
}}return false;
},getLength:function(be){var length=0;

for(var bf in be){length++;
}return length;
},_shadowedKeys:[A,u,B,y,C],getKeys:qx.core.Variant.select(x,{"mshtml":function(Y){{};
var ba=[];

for(var bb in Y){ba.push(bb);
}for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(Y.hasOwnProperty(a[i])){ba.push(a[i]);
}}return ba;
},"default":function(o){var p=[];

for(var q in o){p.push(q);
}return p;
}}),getKeysAsString:function(r){var s=qx.lang.Object.getKeys(r);

if(s.length==0){return z;
}return D+s.join(v)+D;
},getValues:function(V){var W=[];

for(var X in V){W.push(V[X]);
}return W;
},mergeWith:function(d,e,f){if(f===undefined){f=true;
}
for(var g in e){if(f||d[g]===undefined){d[g]=e[g];
}}return d;
},carefullyMergeWith:function(b,c){return qx.lang.Object.mergeWith(b,c,false);
},merge:function(K,L){var M=arguments.length;

for(var i=1;i<M;i++){qx.lang.Object.mergeWith(K,arguments[i]);
}return K;
},copy:function(S){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return qx.lang.Object.clone(S);
},clone:function(P){var Q={};

for(var R in P){Q[R]=P[R];
}return Q;
},invert:function(H){var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(h,j){for(var k in h){if(h.hasOwnProperty(k)&&h[k]===j){return k;
}}return null;
},contains:function(bc,bd){return this.getKeyFromValue(bc,bd)!==null;
},select:function(bg,bh){return bh[bg];
},fromArray:function(T){var U={};

for(var i=0,l=T.length;i<l;i++){{};
U[T[i].toString()]=true;
}return U;
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__m:[],wrap:function(j,k,l){var q=[];
var m=[];
var p=this.__m;
var o;

for(var i=0;i<p.length;i++){o=p[i];

if((o.type==null||l==o.type||o.type==b)&&(o.name==null||j.match(o.name))){o.pos==-1?q.push(o.fcn):m.push(o.fcn);
}}
if(q.length===0&&m.length===0){return k;
}var n=function(){for(var i=0;i<q.length;i++){q[i].call(this,j,k,l,arguments);
}var e=k.apply(this,arguments);

for(var i=0;i<m.length;i++){m[i].call(this,j,k,l,arguments,e);
}return e;
};

if(l!==a){n.self=k.self;
n.base=k.base;
}k.wrapper=n;
n.original=k;
return n;
},addAdvice:function(f,g,h,name){this.__m.push({fcn:f,pos:g===c?-1:1,type:h,name:name});
}}});
})();
(function(){var bs="qx.aspects",br="on",bq=".",bp="static",bo="[Class ",bn="]",bm="toString",bl="member",bk="$$init_",bj="destructor",bg="extend",bi="Class",bh="off",bf="qx.Class",be="qx.event.type.Data";
qx.Bootstrap.define(bf,{statics:{define:function(name,e){if(!e){var e={};
}if(e.include&&!(e.include instanceof Array)){e.include=[e.include];
}if(e.implement&&!(e.implement instanceof Array)){e.implement=[e.implement];
}if(!e.hasOwnProperty(bg)&&!e.type){e.type=bp;
}{};
var g=this.__r(name,e.type,e.extend,e.statics,e.construct,e.destruct);
if(e.extend){if(e.properties){this.__t(g,e.properties,true);
}if(e.members){this.__v(g,e.members,true,true,false);
}if(e.events){this.__s(g,e.events,true);
}if(e.include){for(var i=0,l=e.include.length;i<l;i++){this.__y(g,e.include[i],false);
}}}if(e.settings){for(var f in e.settings){qx.core.Setting.define(f,e.settings[f]);
}}if(e.variants){for(var f in e.variants){qx.core.Variant.define(f,e.variants[f].allowedValues,e.variants[f].defaultValue);
}}if(e.implement){for(var i=0,l=e.implement.length;i<l;i++){this.__x(g,e.implement[i]);
}}{};
if(e.defer){e.defer.self=g;
e.defer(g,g.prototype,{add:function(name,bt){var bu={};
bu[name]=bt;
qx.Class.__t(g,bu,true);
}});
}},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(t,u){{};
qx.Class.__y(t,u,false);
},patch:function(ba,bb){{};
qx.Class.__y(ba,bb,true);
},isSubClassOf:function(bS,bT){if(!bS){return false;
}
if(bS==bT){return true;
}
if(bS.prototype instanceof bT){return true;
}return false;
},getPropertyDefinition:function(ca,name){while(ca){if(ca.$$properties&&ca.$$properties[name]){return ca.$$properties[name];
}ca=ca.superclass;
}return null;
},getProperties:function(o){var p=[];

while(o){if(o.$$properties){p.push.apply(p,qx.lang.Object.getKeys(o.$$properties));
}o=o.superclass;
}return p;
},getByProperty:function(cg,name){while(cg){if(cg.$$properties&&cg.$$properties[name]){return cg;
}cg=cg.superclass;
}return null;
},hasProperty:function(V,name){return !!this.getPropertyDefinition(V,name);
},getEventType:function(bJ,name){var bJ=bJ.constructor;

while(bJ.superclass){if(bJ.$$events&&bJ.$$events[name]!==undefined){return bJ.$$events[name];
}bJ=bJ.superclass;
}return null;
},supportsEvent:function(bK,name){return !!this.getEventType(bK,name);
},hasOwnMixin:function(v,w){return v.$$includes&&v.$$includes.indexOf(w)!==-1;
},getByMixin:function(W,X){var Y,i,l;

while(W){if(W.$$includes){Y=W.$$flatIncludes;

for(i=0,l=Y.length;i<l;i++){if(Y[i]===X){return W;
}}}W=W.superclass;
}return null;
},getMixins:function(T){var U=[];

while(T){if(T.$$includes){U.push.apply(U,T.$$flatIncludes);
}T=T.superclass;
}return U;
},hasMixin:function(bU,bV){return !!this.getByMixin(bU,bV);
},hasOwnInterface:function(r,s){return r.$$implements&&r.$$implements.indexOf(s)!==-1;
},getByInterface:function(k,m){var n,i,l;

while(k){if(k.$$implements){n=k.$$flatImplements;

for(i=0,l=n.length;i<l;i++){if(n[i]===m){return k;
}}}k=k.superclass;
}return null;
},getInterfaces:function(bH){var bI=[];

while(bH){if(bH.$$implements){bI.push.apply(bI,bH.$$flatImplements);
}bH=bH.superclass;
}return bI;
},hasInterface:function(ch,ci){return !!this.getByInterface(ch,ci);
},implementsInterface:function(bW,bX){var bY=bW.constructor;

if(this.hasInterface(bY,bX)){return true;
}
try{qx.Interface.assertObject(bW,bX);
return true;
}catch(bd){}
try{qx.Interface.assert(bY,bX,false);
return true;
}catch(bc){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bo+this.classname+bn;
},$$registry:qx.Bootstrap.$$registry,__n:null,__o:null,__p:function(){},__q:function(){},__r:function(name,F,G,H,I,J){var O;

if(!G&&qx.core.Variant.isSet(bs,bh)){O=H||{};
}else{O={};

if(G){if(!I){I=this.__z();
}O=this.__B(I,name,F);
}if(H){var P;

for(var i=0,a=qx.lang.Object.getKeys(H),l=a.length;i<l;i++){P=a[i];

if(qx.core.Variant.isSet(bs,br)){var L=H[P];

if(L instanceof Function){L=qx.core.Aspect.wrap(name+bq+P,L,bp);
}O[P]=L;
}else{O[P]=H[P];
}}}}var N=qx.Bootstrap.createNamespace(name,O,false);
O.name=O.classname=name;
O.basename=N;
O.$$type=bi;

if(F){O.$$classtype=F;
}if(!O.hasOwnProperty(bm)){O.toString=this.genericToString;
}
if(G){var Q=G.prototype;
var K=this.__A();
K.prototype=Q;
var M=new K;
O.prototype=M;
M.name=M.classname=name;
M.basename=N;
I.base=O.superclass=G;
I.self=O.constructor=M.constructor=O;
if(J){if(qx.core.Variant.isSet(bs,br)){J=qx.core.Aspect.wrap(name,J,bj);
}O.$$destructor=J;
}}this.$$registry[name]=O;
return O;
},__s:function(bL,bM,bN){var bO,bO;

if(bL.$$events){for(var bO in bM){bL.$$events[bO]=bM[bO];
}}else{bL.$$events=bM;
}},__t:function(bz,bA,bB){var bD;

if(bB===undefined){bB=false;
}var bC=!!bz.$$propertiesAttached;

for(var name in bA){bD=bA[name];
{};
bD.name=name;
if(!bD.refine){if(bz.$$properties===undefined){bz.$$properties={};
}bz.$$properties[name]=bD;
}if(bD.init!==undefined){bz.prototype[bk+name]=bD.init;
}if(bD.event!==undefined){var event={};
event[bD.event]=be;
this.__s(bz,event,bB);
}if(bD.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(bC){qx.core.Property.attachMethods(bz,name,bD);
}}},__u:null,__v:function(x,y,z,A,B){var C=x.prototype;
var E,D;

for(var i=0,a=qx.lang.Object.getKeys(y),l=a.length;i<l;i++){E=a[i];
D=y[E];
{};
if(A!==false&&D instanceof Function&&D.$$type==null){if(B==true){D=this.__w(D,C[E]);
}else{if(C[E]){D.base=C[E];
}D.self=x;
}
if(qx.core.Variant.isSet(bs,br)){D=qx.core.Aspect.wrap(x.classname+bq+E,D,bl);
}}C[E]=D;
}},__w:function(R,S){if(S){return function(){var j=R.base;
R.base=S;
var h=R.apply(this,arguments);
R.base=j;
return h;
};
}else{return R;
}},__x:function(bP,bQ){{};
var bR=qx.Interface.flatten([bQ]);

if(bP.$$implements){bP.$$implements.push(bQ);
bP.$$flatImplements.push.apply(bP.$$flatImplements,bR);
}else{bP.$$implements=[bQ];
bP.$$flatImplements=bR;
}},__y:function(cb,cc,cd){{};

if(this.hasMixin(cb,cc)){qx.log.Logger.warn('Mixin "'+cc.name+'" is already included into Class "'+cb.classname+'" by class: '+this.getByMixin(cb,cc).classname+'!');
return;
}var cf=qx.Mixin.flatten([cc]);
var ce;

for(var i=0,l=cf.length;i<l;i++){ce=cf[i];
if(ce.$$events){this.__s(cb,ce.$$events,cd);
}if(ce.$$properties){this.__t(cb,ce.$$properties,cd);
}if(ce.$$members){this.__v(cb,ce.$$members,cd,cd,cd);
}}if(cb.$$includes){cb.$$includes.push(cc);
cb.$$flatIncludes.push.apply(cb.$$flatIncludes,cf);
}else{cb.$$includes=[cc];
cb.$$flatIncludes=cf;
}},__z:function(){function q(){arguments.callee.base.apply(this,arguments);
}return q;
},__A:function(){return function(){};
},__B:function(bv,name,bw){var by=function(){var bG=arguments.callee.constructor;
{};
if(!bG.$$propertiesAttached){qx.core.Property.attach(bG);
}var bF=bG.$$original.apply(this,arguments);
if(bG.$$includes){var bE=bG.$$flatIncludes;

for(var i=0,l=bE.length;i<l;i++){if(bE[i].$$constructor){bE[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bF;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var bx=qx.core.Aspect.wrap(name,by,"constructor");
by.$$original=bv;
by.constructor=bx;
by=bx;
}if(bw==="singleton"){by.getInstance=this.getInstance;
}by.$$original=bv;
bv.wrapper=by;
return by;
}},defer:function(b){if(qx.core.Variant.isSet(bs,br)){for(var c in qx.Bootstrap.$$registry){var b=qx.Bootstrap.$$registry[c];

for(var d in b){if(b[d] instanceof Function){b[d]=qx.core.Aspect.wrap(c+bq+d,b[d],bp);
}}}}}});
})();
(function(){var v="other",u="widgets",t="fonts",s="appearances",r="qx.Theme",q="]",p="[Theme ",o="colors",n="decorations",m="Theme",h="meta",k="borders",j="icons";
qx.Class.define(r,{statics:{define:function(name,w){if(!w){var w={};
}
if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}{};
var x={$$type:m,name:name,title:w.title,toString:this.genericToString};
if(w.extend){x.supertheme=w.extend;
}if(w.resource){x.resource=w.resource;
}else if(w.extend&&w.extend.resource){x.resource=w.extend.resource;
}x.basename=qx.Bootstrap.createNamespace(name,x);
this.__cN(x,w);
this.$$registry[name]=x;
if(w.include){for(var i=0,a=w.include,l=a.length;i<l;i++){this.include(x,a[i]);
}}},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return p+this.name+q;
},__cM:function(y){for(var i=0,z=this.__cO,l=z.length;i<l;i++){if(y[z[i]]){return z[i];
}}},__cN:function(G,H){var K=this.__cM(H);
if(H.extend&&!K){K=H.extend.type;
}G.type=K||v;
if(!K){return;
}var M=function(){};
if(H.extend){M.prototype=new H.extend.$$clazz;
}var L=M.prototype;
var J=H[K];
for(var I in J){L[I]=J[I];
if(L[I].base){{};
L[I].base=H.extend;
}}G.$$clazz=M;
G[K]=new M;
},$$registry:{},__cO:[o,k,n,t,j,u,s,h],__cP:null,__cQ:null,__cR:function(){},patch:function(b,c){var e=this.__cM(c);

if(e!==this.__cM(b)){throw new Error("The mixins '"+b.name+"' are not compatible '"+c.name+"'!");
}var d=c[e];
var f=b[e];

for(var g in d){f[g]=d[g];
}},include:function(A,B){var D=B.type;

if(D!==A.type){throw new Error("The mixins '"+A.name+"' are not compatible '"+B.name+"'!");
}var C=B[D];
var E=A[D];

for(var F in C){if(E[F]!==undefined){throw new Error("It is not allowed to overwrite the key '"+F+"' of theme '"+A.name+"' by mixin theme '"+B.name+"'.");
}E[F]=C[F];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",G="#80B4EF",F="#ffffdd",E="#334866",D="#00204D",C="#666666",B="#99C3FE",A="#808080",z="#F4F4F4",y="#B6B6B6",x="#909090",q="#FCFCFC",r="#314a6e",o="#001533",p="#0880EF",m="#4d4d4d",n="#DFDFDF",k="#000000",l="#7B7A7E",s="#26364D",t="#AFAFAF",v="#404955",u="#AAAAAA",w="qx.theme.modern.Color";
qx.Theme.define(w,{colors:{"background-application":n,"background-pane":i,"background-light":q,"background-medium":a,"background-splitpane":t,"background-tip":F,"background-odd":h,"text-light":x,"text-gray":b,"text-label":g,"text-title":r,"text-input":k,"text-hovered":o,"text-disabled":l,"text-selected":d,"text-active":s,"text-inactive":v,"border-main":m,"border-separator":A,"border-input":E,"border-disabled":y,"border-pane":D,"border-button":C,"border-column":j,"border-focused":B,"table-pane":i,"table-focus-indicator":p,"table-row-background-focused-selected":f,"table-row-background-focused":G,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":u,"progressive-table-row-background-even":z,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var bv=';',bu='computed=this.',bt='=value;',bs='this.',br='if(this.',bq='!==undefined)',bp='delete this.',bo="set",bn="setThemed",bm='}',bb="setRuntime",ba='else if(this.',Y="init",X='return this.',W="string",V="boolean",U="resetThemed",T='!==undefined){',S='=true;',R="resetRuntime",bC="reset",bD="refresh",bA='old=this.',bB='else ',by='old=computed=this.',bz=' of an instance of ',bw='if(old===computed)return value;',bx='if(old===undefined)old=null;',bE='(value);',bF=' is not (yet) ready!");',bf='===value)return value;',be='return init;',bh='var init=this.',bg="Error in property ",bj='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bi='.validate.call(this, value);',bl='else{',bk=" in method ",bd='=computed;',bc='(backup);',e='if(computed===inherit){',f="inherit",g='if(value===undefined)prop.error(this,2,"',h='var computed, old=this.',j='else if(computed===undefined)',k="': ",m=" of class ",n='===undefined)return;',o="')){",p='else this.',bJ='value=this.',bI='","',bH='if(init==qx.core.Property.$$inherit)init=null;',bG='var inherit=prop.$$inherit;',bN='var computed, old;',bM='computed=undefined;delete this.',bL='",value);',bK='computed=value;',bP=';}',bO='){',E='if(computed===undefined||computed===inherit){',F='!==inherit){',C='(computed, old, "',D='return value;',I='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',J="if(reg.hasListener(this, '",G=')a[i].',H='.$$properties.',A="var reg=qx.event.Registration;",B='return null;',x='");',w='var pa=this.getLayoutParent();if(pa)computed=pa.',z='!==undefined&&',y="', qx.event.type.Data, [computed, old]",t='var backup=computed;',s='}else{',v="object",u='if(computed===undefined)computed=null;',r='if(a[i].',q='throw new Error("Property ',N=")}",O='var prop=qx.core.Property;',P=" with incoming value '",Q='if(computed===undefined||computed==inherit)computed=null;',K='if((computed===undefined||computed===inherit)&&',L="reg.fireEvent(this, '",M="qx.core.Property";
qx.Class.define(M,{statics:{__O:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'(typeof value === "string" || value instanceof String) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__P:{"Object":true,"Array":true,"Map":true,"Function":true,"Date":true,"Node":true,"Element":true,"Document":true,"Window":true,"Event":true,"Class":true,"Mixin":true,"Interface":true,"Theme":true,"Font":true,"Decorator":true},$$inherit:f,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:W,dispose:V,inheritable:V,nullable:V,themeable:V,refine:V,init:null,apply:W,event:W,check:null,transform:W,deferredInit:V,validate:null},$$allowedGroupKeys:{name:W,group:v,mode:W,themeable:V},$$inheritable:{},refresh:function(cs){var parent=cs.getLayoutParent();

if(parent){var cv=cs.constructor;
var cx=this.$$store.inherit;
var cw=this.$$store.init;
var cu=this.$$method.refresh;
var cy;
var ct;
{};

while(cv){cy=cv.$$properties;

if(cy){for(var name in this.$$inheritable){if(cy[name]&&cs[cu[name]]){ct=parent[cx[name]];

if(ct===undefined){ct=parent[cw[name]];
}{};
cs[cu[name]](ct);
}}}cv=cv.superclass;
}}},attach:function(cn){var co=cn.$$properties;

if(co){for(var name in co){this.attachMethods(cn,name,co[name]);
}}cn.$$propertiesAttached=true;
},attachMethods:function(cq,name,cr){cr.group?this.__Q(cq,cr,name):this.__R(cq,cr,name);
},__Q:function(cc,cd,name){var ck=qx.lang.String.firstUp(name);
var cj=cc.prototype;
var cl=cd.themeable===true;
{};
var cm=[];
var cg=[];

if(cl){var ce=[];
var ci=[];
}var ch="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
cm.push(ch);

if(cl){ce.push(ch);
}
if(cd.mode=="shorthand"){var cf="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
cm.push(cf);

if(cl){ce.push(cf);
}}
for(var i=0,a=cd.group,l=a.length;i<l;i++){{};
cm.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
cg.push("this.",this.$$method.reset[a[i]],"();");

if(cl){{};
ce.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
ci.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+ck;
cj[this.$$method.set[name]]=new Function(cm.join(""));
this.$$method.reset[name]="reset"+ck;
cj[this.$$method.reset[name]]=new Function(cg.join(""));

if(cl){this.$$method.setThemed[name]="setThemed"+ck;
cj[this.$$method.setThemed[name]]=new Function(ce.join(""));
this.$$method.resetThemed[name]="resetThemed"+ck;
cj[this.$$method.resetThemed[name]]=new Function(ci.join(""));
}},__R:function(cH,cI,name){var cK=qx.lang.String.firstUp(name);
var cM=cH.prototype;
{};
if(cI.dispose===undefined&&typeof cI.check==="string"){cI.dispose=this.__P[cI.check]||qx.Class.isDefined(cI.check)||qx.Interface.isDefined(cI.check);
}var cL=this.$$method;
var cJ=this.$$store;
cJ.runtime[name]="$$runtime_"+name;
cJ.user[name]="$$user_"+name;
cJ.theme[name]="$$theme_"+name;
cJ.init[name]="$$init_"+name;
cJ.inherit[name]="$$inherit_"+name;
cJ.useinit[name]="$$useinit_"+name;
cL.get[name]="get"+cK;
cM[cL.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cH,name,"get");
};
cL.set[name]="set"+cK;
cM[cL.set[name]]=function(d){return qx.core.Property.executeOptimizedSetter(this,cH,name,"set",arguments);
};
cL.reset[name]="reset"+cK;
cM[cL.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cH,name,"reset");
};

if(cI.inheritable||cI.apply||cI.event||cI.deferredInit){cL.init[name]="init"+cK;
cM[cL.init[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,cH,name,"init",arguments);
};
}
if(cI.inheritable){cL.refresh[name]="refresh"+cK;
cM[cL.refresh[name]]=function(cp){return qx.core.Property.executeOptimizedSetter(this,cH,name,"refresh",arguments);
};
}cL.setRuntime[name]="setRuntime"+cK;
cM[cL.setRuntime[name]]=function(c){return qx.core.Property.executeOptimizedSetter(this,cH,name,"setRuntime",arguments);
};
cL.resetRuntime[name]="resetRuntime"+cK;
cM[cL.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cH,name,"resetRuntime");
};

if(cI.themeable){cL.setThemed[name]="setThemed"+cK;
cM[cL.setThemed[name]]=function(cz){return qx.core.Property.executeOptimizedSetter(this,cH,name,"setThemed",arguments);
};
cL.resetThemed[name]="resetThemed"+cK;
cM[cL.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cH,name,"resetThemed");
};
}
if(cI.check==="Boolean"){cM["toggle"+cK]=new Function("return this."+cL.set[name]+"(!this."+cL.get[name]+"())");
cM["is"+cK]=new Function("return this."+cL.get[name]+"()");
}},__S:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(cA,cB,cC,cD,cE){var cF=cA.constructor.classname;
var cG=bg+cC+m+cF+bk+this.$$method[cD][cC]+P+cE+k;
throw new Error(cG+(this.__S[cB]||"Unknown reason: "+cB));
},__T:function(cU,cV,name,cW,cX,cY){var da=this.$$method[cW][name];
{cV[da]=new Function("value",cX.join(""));
};
if(qx.core.Variant.isSet("qx.aspects","on")){cV[da]=qx.core.Aspect.wrap(cU.classname+"."+da,cV[da],"property");
}if(cY===undefined){return cU[da]();
}else{return cU[da](cY[0]);
}},executeOptimizedGetter:function(cN,cO,name,cP){var cR=cO.$$properties[name];
var cT=cO.prototype;
var cQ=[];
var cS=this.$$store;
cQ.push(br,cS.runtime[name],bq);
cQ.push(X,cS.runtime[name],bv);

if(cR.inheritable){cQ.push(ba,cS.inherit[name],bq);
cQ.push(X,cS.inherit[name],bv);
cQ.push(bB);
}cQ.push(br,cS.user[name],bq);
cQ.push(X,cS.user[name],bv);

if(cR.themeable){cQ.push(ba,cS.theme[name],bq);
cQ.push(X,cS.theme[name],bv);
}
if(cR.deferredInit&&cR.init===undefined){cQ.push(ba,cS.init[name],bq);
cQ.push(X,cS.init[name],bv);
}cQ.push(bB);

if(cR.init!==undefined){if(cR.inheritable){cQ.push(bh,cS.init[name],bv);

if(cR.nullable){cQ.push(bH);
}else if(cR.init!==undefined){cQ.push(X,cS.init[name],bv);
}else{cQ.push(I,name,bz,cO.classname,bF);
}cQ.push(be);
}else{cQ.push(X,cS.init[name],bv);
}}else if(cR.inheritable||cR.nullable){cQ.push(B);
}else{cQ.push(q,name,bz,cO.classname,bF);
}return this.__T(cN,cT,name,cP,cQ);
},executeOptimizedSetter:function(bQ,bR,name,bS,bT){var ca=bR.$$properties[name];
var bY=bR.prototype;
var bV=[];
var bU=bS===bo||bS===bn||bS===bb||(bS===Y&&ca.init===undefined);
var bW=bS===bC||bS===U||bS===R;
var bX=ca.apply||ca.event||ca.inheritable;

if(bS===bb||bS===R){var cb=this.$$store.runtime[name];
}else if(bS===bn||bS===U){var cb=this.$$store.theme[name];
}else if(bS===Y){var cb=this.$$store.init[name];
}else{var cb=this.$$store.user[name];
}{if(!ca.nullable||ca.check||ca.inheritable){bV.push(O);
}if(bS===bo){bV.push(g,name,bI,bS,bL);
}};
if(bU){if(ca.transform){bV.push(bJ,ca.transform,bE);
}if(ca.validate){if(typeof ca.validate===W){bV.push(bs,ca.validate,bE);
}else if(ca.validate instanceof Function){bV.push(bR.classname,H,name);
bV.push(bi);
}}}if(bX){if(bU){bV.push(br,cb,bf);
}else if(bW){bV.push(br,cb,n);
}}if(ca.inheritable){bV.push(bG);
}{};

if(!bX){if(bS===bb){bV.push(bs,this.$$store.runtime[name],bt);
}else if(bS===R){bV.push(br,this.$$store.runtime[name],bq);
bV.push(bp,this.$$store.runtime[name],bv);
}else if(bS===bo){bV.push(bs,this.$$store.user[name],bt);
}else if(bS===bC){bV.push(br,this.$$store.user[name],bq);
bV.push(bp,this.$$store.user[name],bv);
}else if(bS===bn){bV.push(bs,this.$$store.theme[name],bt);
}else if(bS===U){bV.push(br,this.$$store.theme[name],bq);
bV.push(bp,this.$$store.theme[name],bv);
}else if(bS===Y&&bU){bV.push(bs,this.$$store.init[name],bt);
}}else{if(ca.inheritable){bV.push(h,this.$$store.inherit[name],bv);
}else{bV.push(bN);
}bV.push(br,this.$$store.runtime[name],T);

if(bS===bb){bV.push(bu,this.$$store.runtime[name],bt);
}else if(bS===R){bV.push(bp,this.$$store.runtime[name],bv);
bV.push(br,this.$$store.user[name],bq);
bV.push(bu,this.$$store.user[name],bv);
bV.push(ba,this.$$store.theme[name],bq);
bV.push(bu,this.$$store.theme[name],bv);
bV.push(ba,this.$$store.init[name],T);
bV.push(bu,this.$$store.init[name],bv);
bV.push(bs,this.$$store.useinit[name],S);
bV.push(bm);
}else{bV.push(by,this.$$store.runtime[name],bv);
if(bS===bo){bV.push(bs,this.$$store.user[name],bt);
}else if(bS===bC){bV.push(bp,this.$$store.user[name],bv);
}else if(bS===bn){bV.push(bs,this.$$store.theme[name],bt);
}else if(bS===U){bV.push(bp,this.$$store.theme[name],bv);
}else if(bS===Y&&bU){bV.push(bs,this.$$store.init[name],bt);
}}bV.push(bm);
bV.push(ba,this.$$store.user[name],T);

if(bS===bo){if(!ca.inheritable){bV.push(bA,this.$$store.user[name],bv);
}bV.push(bu,this.$$store.user[name],bt);
}else if(bS===bC){if(!ca.inheritable){bV.push(bA,this.$$store.user[name],bv);
}bV.push(bp,this.$$store.user[name],bv);
bV.push(br,this.$$store.runtime[name],bq);
bV.push(bu,this.$$store.runtime[name],bv);
bV.push(br,this.$$store.theme[name],bq);
bV.push(bu,this.$$store.theme[name],bv);
bV.push(ba,this.$$store.init[name],T);
bV.push(bu,this.$$store.init[name],bv);
bV.push(bs,this.$$store.useinit[name],S);
bV.push(bm);
}else{if(bS===bb){bV.push(bu,this.$$store.runtime[name],bt);
}else if(ca.inheritable){bV.push(bu,this.$$store.user[name],bv);
}else{bV.push(by,this.$$store.user[name],bv);
}if(bS===bn){bV.push(bs,this.$$store.theme[name],bt);
}else if(bS===U){bV.push(bp,this.$$store.theme[name],bv);
}else if(bS===Y&&bU){bV.push(bs,this.$$store.init[name],bt);
}}bV.push(bm);
if(ca.themeable){bV.push(ba,this.$$store.theme[name],T);

if(!ca.inheritable){bV.push(bA,this.$$store.theme[name],bv);
}
if(bS===bb){bV.push(bu,this.$$store.runtime[name],bt);
}else if(bS===bo){bV.push(bu,this.$$store.user[name],bt);
}else if(bS===bn){bV.push(bu,this.$$store.theme[name],bt);
}else if(bS===U){bV.push(bp,this.$$store.theme[name],bv);
bV.push(br,this.$$store.init[name],T);
bV.push(bu,this.$$store.init[name],bv);
bV.push(bs,this.$$store.useinit[name],S);
bV.push(bm);
}else if(bS===Y){if(bU){bV.push(bs,this.$$store.init[name],bt);
}bV.push(bu,this.$$store.theme[name],bv);
}else if(bS===bD){bV.push(bu,this.$$store.theme[name],bv);
}bV.push(bm);
}bV.push(ba,this.$$store.useinit[name],bO);

if(!ca.inheritable){bV.push(bA,this.$$store.init[name],bv);
}
if(bS===Y){if(bU){bV.push(bu,this.$$store.init[name],bt);
}else{bV.push(bu,this.$$store.init[name],bv);
}}else if(bS===bo||bS===bb||bS===bn||bS===bD){bV.push(bp,this.$$store.useinit[name],bv);

if(bS===bb){bV.push(bu,this.$$store.runtime[name],bt);
}else if(bS===bo){bV.push(bu,this.$$store.user[name],bt);
}else if(bS===bn){bV.push(bu,this.$$store.theme[name],bt);
}else if(bS===bD){bV.push(bu,this.$$store.init[name],bv);
}}bV.push(bm);
if(bS===bo||bS===bb||bS===bn||bS===Y){bV.push(bl);

if(bS===bb){bV.push(bu,this.$$store.runtime[name],bt);
}else if(bS===bo){bV.push(bu,this.$$store.user[name],bt);
}else if(bS===bn){bV.push(bu,this.$$store.theme[name],bt);
}else if(bS===Y){if(bU){bV.push(bu,this.$$store.init[name],bt);
}else{bV.push(bu,this.$$store.init[name],bv);
}bV.push(bs,this.$$store.useinit[name],S);
}bV.push(bm);
}}
if(ca.inheritable){bV.push(E);

if(bS===bD){bV.push(bK);
}else{bV.push(w,this.$$store.inherit[name],bv);
}bV.push(K);
bV.push(bs,this.$$store.init[name],z);
bV.push(bs,this.$$store.init[name],F);
bV.push(bu,this.$$store.init[name],bv);
bV.push(bs,this.$$store.useinit[name],S);
bV.push(s);
bV.push(bp,this.$$store.useinit[name],bP);
bV.push(bm);
bV.push(bw);
bV.push(e);
bV.push(bM,this.$$store.inherit[name],bv);
bV.push(bm);
bV.push(j);
bV.push(bp,this.$$store.inherit[name],bv);
bV.push(p,this.$$store.inherit[name],bd);
bV.push(t);
bV.push(bx);
bV.push(Q);
}else if(bX){if(bS!==bo&&bS!==bb&&bS!==bn){bV.push(u);
}bV.push(bw);
bV.push(bx);
}if(bX){if(ca.apply){bV.push(bs,ca.apply,C,name,x);
}if(ca.event){bV.push(A,J,ca.event,o,L,ca.event,y,N);
}if(ca.inheritable&&bY._getChildren){bV.push(bj);
bV.push(r,this.$$method.refresh[name],G,this.$$method.refresh[name],bc);
bV.push(bm);
}}if(bU){bV.push(D);
}return this.__T(bQ,bY,name,bS,bV,bT);
}},settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var e="$$hash",d="qx.core.ObjectRegistry";
qx.Bootstrap.define(d,{statics:{inShutDown:false,__U:{},__V:0,__W:[],register:function(j){var n=this.__U;

if(!n){return;
}var m=j.$$hash;

if(m==null){var k=this.__W;

if(k.length>0){m=k.pop();
}else{m=(this.__V++).toString(36);
}j.$$hash=m;
}{};
n[m]=j;
},unregister:function(f){var g=f.$$hash;

if(g==null){return;
}var h=this.__U;

if(h&&h[g]){delete h[g];
this.__W.push(g);
}try{delete f.$$hash;
}catch(t){if(f.removeAttribute){f.removeAttribute(e);
}}},toHashCode:function(u){{};
var w=u.$$hash;

if(w!=null){return w;
}var v=this.__W;

if(v.length>0){w=v.pop();
}else{w=(this.__V++).toString(36);
}return u.$$hash=w;
},clearHashCode:function(y){{};
var z=y.$$hash;

if(z!=null){this.__W.push(z);
try{delete y.$$hash;
}catch(c){if(y.removeAttribute){y.removeAttribute(e);
}}}},fromHashCode:function(x){return this.__U[x]||null;
},shutdown:function(){this.inShutDown=true;
var p=this.__U;
var r=[];

for(var q in p){r.push(q);
}r.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var o,i=0,l=r.length;

while(true){try{for(;i<l;i++){q=r[i];
o=p[q];

if(o&&o.dispose){o.dispose();
}}}catch(s){qx.log.Logger.error(this,"Could not dispose object "+o.toString()+": "+s);

if(i!==0){continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__U;
},getRegistry:function(){return this.__U;
}}});
})();
(function(){var g="qx.Mixin",f="]",e="Mixin",d="[Mixin ";
qx.Class.define(g,{statics:{define:function(name,a){if(a){if(a.include&&!(a.include instanceof Array)){a.include=[a.include];
}{};
var c=a.statics?a.statics:{};

for(var b in c){if(c[b] instanceof Function){c[b].$$mixin=c;
}}if(a.construct){c.$$constructor=a.construct;
}
if(a.include){c.$$includes=a.include;
}
if(a.properties){c.$$properties=a.properties;
}
if(a.members){c.$$members=a.members;
}
for(var b in c.$$members){if(c.$$members[b] instanceof Function){c.$$members[b].$$mixin=c;
}}
if(a.events){c.$$events=a.events;
}
if(a.destruct){c.$$destructor=a.destruct;
}}else{var c={};
}c.$$type=e;
c.name=name;
c.toString=this.genericToString;
c.basename=qx.Bootstrap.createNamespace(name,c);
this.$$registry[name]=c;
return c;
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
},isCompatible:function(h,j){var k=qx.Class.getMixins(j);
k.push(h);
return qx.Mixin.checkCompatibility(k);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(u){if(!u){return [];
}var v=u.concat();

for(var i=0,l=u.length;i<l;i++){if(u[i].$$includes){v.push.apply(v,this.flatten(u[i].$$includes));
}}return v;
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
(function(){var m="qx.client",l="on",k="qx.bom.Event",j="mousedown",i="mouseover";
qx.Bootstrap.define(k,{statics:{addNativeListener:qx.core.Variant.select(m,{"mshtml":function(q,r,s){q.attachEvent(l+r,s);
},"default":function(f,g,h){f.addEventListener(g,h,false);
}}),removeNativeListener:qx.core.Variant.select(m,{"mshtml":function(n,o,p){n.detachEvent(l+o,p);
},"default":function(b,c,d){b.removeEventListener(c,d,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(m,{"mshtml":function(e){if(e.type===i){return e.fromEvent;
}else{return e.toElement;
}},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(m,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==j&&e.button==2){return;
}e.preventDefault();

try{e.keyCode=0;
}catch(a){}},"mshtml":function(e){try{e.keyCode=0;
}catch(t){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
}}});
})();
(function(){var T="|bubble",S="|capture",R="|",Q="_",P="unload",O="UNKNOWN_",N="DOM_",M="c",L="WIN_",K="capture",I="qx.event.Manager",J="QX_";
qx.Bootstrap.define(I,{construct:function(A){this.__C=A;
this.__D=qx.lang.Function.bind(this.dispose,this);
qx.bom.Event.addNativeListener(A,P,this.__D);
this.__E={};
this.__F={};
this.__G={};
this.__H={};
},statics:{__I:0,getNextUniqueId:function(){return (this.__I++).toString(36);
}},members:{dispose:function(){qx.bom.Event.removeNativeListener(this.__C,P,this.__D);
qx.event.Registration.removeManager(this);
this.__E=this.__C=this.__F=this.__G=this.__D=this.__H=null;
},getWindow:function(){return this.__C;
},getHandler:function(n){var o=this.__F[n.classname];

if(o){return o;
}return this.__F[n.classname]=new n(this);
},getDispatcher:function(bx){var by=this.__G[bx.classname];

if(by){return by;
}return this.__G[bx.classname]=new bx(this);
},getListeners:function(B,C,D){var E=B.$$hash||qx.core.ObjectRegistry.toHashCode(B);
var G=this.__E[E];

if(!G){return null;
}var H=C+(D?S:T);
var F=G[H];
return F?F.concat():null;
},serializeListeners:function(bT){var cb=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__E[cb];
var bY=[];

if(cd){var bW,cc,bU,bX,ca;

for(var bV in cd){bW=bV.indexOf(R);
cc=bV.substring(0,bW);
bU=bV.charAt(bW+1)==M;
bX=cd[bV];

for(var i=0,l=bX.length;i<l;i++){ca=bX[i];
bY.push({self:ca.context,handler:ca.handler,type:cc,capture:bU});
}}}return bY;
},toggleAttachedEvents:function(U,V){var bb=U.$$hash||qx.core.ObjectRegistry.toHashCode(U);
var bd=this.__E[bb];

if(bd){var X,bc,W,Y;

for(var ba in bd){X=ba.indexOf(R);
bc=ba.substring(0,X);
W=ba.charCodeAt(X+1)===99;
Y=bd[ba];

if(V){this.__J(U,bc,W);
}else{this.__K(U,bc,W);
}}}},hasListener:function(bq,br,bs){{};
var bt=bq.$$hash||qx.core.ObjectRegistry.toHashCode(bq);
var bv=this.__E[bt];

if(!bv){return false;
}var bw=br+(bs?S:T);
var bu=bv[bw];
return bu&&bu.length>0;
},importListeners:function(bG,bH){{};
var bN=bG.$$hash||qx.core.ObjectRegistry.toHashCode(bG);
var bO=this.__E[bN]={};
var bK=qx.event.Manager;

for(var bI in bH){var bL=bH[bI];
var bM=bL.type+(bL.capture?S:T);
var bJ=bO[bM];

if(!bJ){bJ=bO[bM]=[];
this.__J(bG,bL.type,bL.capture);
}bJ.push({handler:bL.listener,context:bL.self,unique:bL.unique||(bK.__I++).toString(36)});
}},addListener:function(a,b,c,self,d){var h;
var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var m=this.__E[j];

if(!m){m=this.__E[j]={};
}var g=b+(d?S:T);
var f=m[g];

if(!f){f=m[g]=[];
}if(f.length===0){this.__J(a,b,d);
}var k=(qx.event.Manager.__I++).toString(36);
var e={handler:c,context:self,unique:k};
f.push(e);
return g+R+k;
},findHandler:function(ce,cf){var cp=false,ci=false,cq=false;
var co;

if(ce.nodeType===1){cp=true;
co=N+ce.tagName.toLowerCase()+Q+cf;
}else if(ce==this.__C){ci=true;
co=L+cf;
}else if(ce.classname){cq=true;
co=J+ce.classname+Q+cf;
}else{co=O+ce+Q+cf;
}var ck=this.__H;

if(ck[co]){return ck[co];
}var cn=qx.event.Registration.getHandlers();
var cj=qx.event.IEventHandler;
var cl,cm,ch,cg;

for(var i=0,l=cn.length;i<l;i++){cl=cn[i];
ch=cl.SUPPORTED_TYPES;

if(ch&&!ch[cf]){continue;
}cg=cl.TARGET_CHECK;

if(cg){if(!cp&&cg===cj.TARGET_DOMNODE){continue;
}else if(!ci&&cg===cj.TARGET_WINDOW){continue;
}else if(!cq&&cg===cj.TARGET_OBJECT){continue;
}}cm=this.getHandler(cn[i]);

if(cl.IGNORE_CAN_HANDLE||cm.canHandleEvent(ce,cf)){ck[co]=cm;
return cm;
}}return null;
},__J:function(p,q,r){var s=this.findHandler(p,q);

if(s){s.registerEvent(p,q,r);
return;
}{};
},removeListener:function(cr,cs,ct,self,cu){var cy;
var cz=cr.$$hash||qx.core.ObjectRegistry.toHashCode(cr);
var cA=this.__E[cz];

if(!cA){return false;
}var cv=cs+(cu?S:T);
var cw=cA[cv];

if(!cw){return false;
}var cx;

for(var i=0,l=cw.length;i<l;i++){cx=cw[i];

if(cx.handler===ct&&cx.context===self){qx.lang.Array.removeAt(cw,i);

if(cw.length==0){this.__K(cr,cs,cu);
}return true;
}}return false;
},removeListenerById:function(be,bf){var bl;
var bj=bf.split(R);
var bo=bj[0];
var bg=bj[1].charCodeAt(0)==99;
var bn=bj[2];
var bm=be.$$hash||qx.core.ObjectRegistry.toHashCode(be);
var bp=this.__E[bm];

if(!bp){return false;
}var bk=bo+(bg?S:T);
var bi=bp[bk];

if(!bi){return false;
}var bh;

for(var i=0,l=bi.length;i<l;i++){bh=bi[i];

if(bh.unique===bn){qx.lang.Array.removeAt(bi,i);

if(bi.length==0){this.__K(be,bo,bg);
}return true;
}}return false;
},removeAllListeners:function(t){var x=t.$$hash||qx.core.ObjectRegistry.toHashCode(t);
var z=this.__E[x];

if(!z){return false;
}var v,y,u;

for(var w in z){if(z[w].length>0){v=w.split(R);
y=v[0];
u=v[1]===K;
this.__K(t,y,u);
}}delete this.__E[x];
return true;
},__K:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.unregisterEvent(bP,bQ,bR);
return;
}{};
},dispatchEvent:function(bz,event){var bE;
var bF=event.getType();

if(!event.getBubbles()&&!this.hasListener(bz,bF)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bz);
}var bD=qx.event.Registration.getDispatchers();
var bC;
var bB=false;

for(var i=0,l=bD.length;i<l;i++){bC=this.getDispatcher(bD[i]);
if(bC.canDispatchEvent(bz,event,bF)){bC.dispatchEvent(bz,event,bF);
bB=true;
break;
}}
if(!bB){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bF+" on "+bz);
return true;
}var bA=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bA;
}}});
})();
(function(){var g="qx.dom.Node",f="qx.client",e="";
qx.Class.define(g,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===
this.DOCUMENT?d:
d.ownerDocument||d.document;
},getWindow:qx.core.Variant.select(f,{"mshtml":function(o){if(o.nodeType==null){return o;
}if(o.nodeType!==this.DOCUMENT){o=o.ownerDocument;
}return o.parentWindow;
},"default":function(n){if(n.nodeType==null){return n;
}if(n.nodeType!==this.DOCUMENT){n=n.ownerDocument;
}return n.defaultView;
}}),getDocumentElement:function(j){return this.getDocument(j).documentElement;
},getBodyElement:function(p){return this.getDocument(p).body;
},isNode:function(m){return !!(m&&m.nodeType!=null);
},isElement:function(b){return !!(b&&b.nodeType===this.ELEMENT);
},isDocument:function(c){return !!(c&&c.nodeType===this.DOCUMENT);
},isText:function(q){return !!(q&&q.nodeType===this.TEXT);
},isWindow:function(h){return !!(h&&h.history&&h.location&&h.document);
},getText:function(k){if(!k||!k.nodeType){return null;
}
switch(k.nodeType){case 1:var i,a=[],l=k.childNodes,length=l.length;

for(i=0;i<length;i++){a[i]=this.getText(l[i]);
}return a.join(e);
case 2:return k.nodeValue;
break;
case 3:return k.nodeValue;
break;
}return null;
}}});
})();
(function(){var bf="mshtml",be="[object Array]",bd="qx.client",bc="qx.lang.Array",bb="qx",ba="number",Y="Use the native Array access instead: arr[arr.length - 1]",X="Use the native Array access instead: arr[0]",W="string",V="Use 'clone()' instead!";
qx.Bootstrap.define(bc,{statics:{isArray:function(S){return Object.prototype.toString.call(S)===be||S instanceof Array;
},toArray:function(bu,bv){return this.cast(bu,Array,bv);
},cast:function(w,x,y){if(w.constructor===x){return w;
}
if(qx.Class.hasInterface(w,qx.data.IListData)){var w=w.toArray();
}var z=new x;
if(qx.core.Variant.isSet(bd,bf)){if(w.item){for(var i=y||0,l=w.length;i<l;i++){z.push(w[i]);
}return z;
}}if(Object.prototype.toString.call(w)===be&&y==null){z.push.apply(z,w);
}else{z.push.apply(z,Array.prototype.slice.call(w,y||0));
}return z;
},fromArguments:function(k,m){return Array.prototype.slice.call(k,m||0);
},fromCollection:function(T){if(qx.core.Variant.isSet(bd,bf)){if(T.item){var U=[];

for(var i=0,l=T.length;i<l;i++){U[i]=T[i];
}return U;
}}return Array.prototype.slice.call(T,0);
},fromShortHand:function(bm){var bo=bm.length;
var bn=qx.lang.Array.clone(bm);
switch(bo){case 1:bn[1]=bn[2]=bn[3]=bn[0];
break;
case 2:bn[2]=bn[0];
case 3:bn[3]=bn[1];
}return bn;
},copy:function(bx){qx.log.Logger.deprecatedMethodWarning(arguments.callee,V);
return qx.lang.Array.clone(bx);
},clone:function(v){return v.concat();
},getLast:function(bs){qx.log.Logger.deprecatedMethodWarning(arguments.callee,Y);
return bs[bs.length-1];
},getFirst:function(bt){qx.log.Logger.deprecatedMethodWarning(arguments.callee,X);
return bt[0];
},insertAt:function(h,j,i){h.splice(i,0,j);
return h;
},insertBefore:function(bp,bq,br){var i=bp.indexOf(br);

if(i==-1){bp.push(bq);
}else{bp.splice(i,0,bq);
}return bp;
},insertAfter:function(e,f,g){var i=e.indexOf(g);

if(i==-1||i==(e.length-1)){e.push(f);
}else{e.splice(i+1,0,f);
}return e;
},removeAt:function(A,i){return A.splice(i,1)[0];
},removeAll:function(n){n.length=0;
return this;
},append:function(o,p){{};
Array.prototype.push.apply(o,p);
return o;
},exclude:function(bi,bj){{};

for(var i=0,bl=bj.length,bk;i<bl;i++){bk=bi.indexOf(bj[i]);

if(bk!=-1){bi.splice(bk,1);
}}return bi;
},remove:function(B,C){var i=B.indexOf(C);

if(i!=-1){B.splice(i,1);
return C;
}},contains:function(t,u){return t.indexOf(u)!==-1;
},equals:function(bg,bh){var length=bg.length;

if(length!==bh.length){return false;
}
for(var i=0;i<length;i++){if(bg[i]!==bh[i]){return false;
}}return true;
},sum:function(D){var E=0;

for(var i=0,l=D.length;i<l;i++){E+=D[i];
}return E;
},max:function(q){{};
var i,s=q.length,r=q[0];

for(i=1;i<s;i++){if(q[i]>r){r=q[i];
}}return r===undefined?null:r;
},min:function(a){{};
var i,c=a.length,b=a[0];

for(i=1;i<c;i++){if(a[i]<b){b=a[i];
}}return b===undefined?null:b;
},unique:function(F){var P=[],H={},K={},M={};
var L,G=0;
var Q=bb+qx.lang.Date.now();
var I=false,O=false,R=false;
for(var i=0,N=F.length;i<N;i++){L=F[i];
if(L===null){if(!I){I=true;
P.push(L);
}}else if(L===false){if(!O){O=true;
P.push(L);
}}else if(L===true){if(!R){R=true;
P.push(L);
}}else if(typeof L===W){if(!H[L]){H[L]=1;
P.push(L);
}}else if(typeof L===ba){if(!K[L]){K[L]=1;
P.push(L);
}}else{J=L[Q];

if(J==null){J=L[Q]=G++;
}
if(!M[J]){M[J]=L;
P.push(L);
}}}for(var J in M){try{delete M[J][Q];
}catch(bw){try{M[J][Q]=null;
}catch(d){throw new Error("Cannot clean-up map entry doneObjects["+J+"]["+Q+"]");
}}}return P;
}}});
})();
(function(){var g=":",f=":constructor",e='anonymous',d="anonymous: ",c="qx.lang.Function",b="[object Function]",a=":constructor wrapper";
qx.Bootstrap.define(c,{statics:{isFunction:function(E){return Object.prototype.toString.call(E)===b;
},getCaller:function(h){return h.caller?h.caller.callee:h.callee.caller;
},getName:function(k){if(k.$$original){return k.classname+a;
}
if(k.wrapper){return k.wrapper.classname+f;
}
if(k.classname){return k.classname+f;
}
if(k.$$mixin){for(var m in k.$$mixin.$$members){if(k.$$mixin.$$members[m]==k){return k.$$mixin.name+g+m;
}}for(var m in k.$$mixin){if(k.$$mixin[m]==k){return k.$$mixin.name+g+m;
}}}
if(k.self){var n=k.self.constructor;

if(n){for(var m in n.prototype){if(n.prototype[m]==k){return n.classname+g+m;
}}for(var m in n){if(n[m]==k){return n.classname+g+m;
}}}}var l=k.toString().match(/(function\s*\w*\(.*?\))/);

if(l&&l.length>=1&&l[1]){return l[1];
}var l=k.toString().match(/(function\s*\(.*?\))/);

if(l&&l.length>=1&&l[1]){return d+l[1];
}return e;
},globalEval:function(o){if(window.execScript){return window.execScript(o);
}else{return eval.call(window,o);
}},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(C,D){{};
if(!D){return C;
}if(!(D.self||D.args||D.delay!=null||D.periodical!=null||D.attempt)){return C;
}return function(event){var t=qx.lang.Array.fromArguments(arguments);
if(D.args){t=D.args.concat(t);
}
if(D.delay||D.periodical){var s=function(){return C.apply(D.self||this,t);
};

if(D.delay){return setTimeout(s,D.delay);
}
if(D.periodical){return setInterval(s,D.periodical);
}}else if(D.attempt){var u=false;

try{u=C.apply(D.self||this,t);
}catch(J){}return u;
}else{return C.apply(D.self||this,t);
}};
},bind:function(i,self,j){return this.create(i,{self:self,args:j!==undefined?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(A,B){return this.create(A,{args:B!==undefined?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(p,self,q){if(q===undefined){return function(event){return p.call(self||this,event||window.event);
};
}else{var r=qx.lang.Array.fromArguments(arguments,2);
return function(event){var I=[event||window.event];
I.push.apply(I,r);
p.apply(self||this,I);
};
}},attempt:function(y,self,z){return this.create(y,{self:self,attempt:true,args:z!==undefined?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(F,G,self,H){return this.create(F,{delay:G,self:self,args:H!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(v,w,self,x){return this.create(v,{periodical:w,self:self,args:x!==undefined?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var k="qx.event.Registration";
qx.Bootstrap.define(k,{statics:{__L:{},getManager:function(l){if(l==null){{};
l=window;
}else if(l.nodeType){l=qx.dom.Node.getWindow(l);
}else if(!qx.dom.Node.isWindow(l)){l=window;
}var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);
var m=this.__L[n];

if(!m){m=new qx.event.Manager(l);
this.__L[n]=m;
}return m;
},removeManager:function(u){var v=qx.core.ObjectRegistry.toHashCode(u.getWindow());
delete this.__L[v];
},addListener:function(N,O,P,self,Q){return this.getManager(N).addListener(N,O,P,self,Q);
},removeListener:function(c,d,e,self,f){return this.getManager(c).removeListener(c,d,e,self,f);
},removeListenerById:function(i,j){return this.getManager(i).removeListenerById(i,j);
},removeAllListeners:function(x){return this.getManager(x).removeAllListeners(x);
},hasListener:function(y,z,A){return this.getManager(y).hasListener(y,z,A);
},serializeListeners:function(h){return this.getManager(h).serializeListeners(h);
},createEvent:function(H,I,J){{};
if(I==null){I=qx.event.type.Event;
}var K=qx.event.Pool.getInstance().getObject(I);

if(!K){return;
}J?K.init.apply(K,J):K.init();
if(H){K.setType(H);
}return K;
},dispatchEvent:function(g,event){return this.getManager(g).dispatchEvent(g,event);
},fireEvent:function(B,C,D,E){var F;
var G=this.createEvent(C,D||null,E);
return this.getManager(B).dispatchEvent(B,G);
},fireNonBubblingEvent:function(o,p,q,r){{};
var s=this.getManager(o);

if(!s.hasListener(o,p,false)){return true;
}var t=this.createEvent(p,q||null,r);
return s.dispatchEvent(o,t);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__M:[],addHandler:function(w){{};
this.__M.push(w);
this.__M.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__M;
},__N:[],addDispatcher:function(L,M){{};
this.__N.push(L);
this.__N.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__N;
}}});
})();
(function(){var E="node",D="error",C="...(+",B="array",A=")",z="info",y="instance",x="string",w="null",v="class",ba="number",Y="stringify",X="]",W="unknown",V="function",U="boolean",T="debug",S="map",R="undefined",Q="qx.log.Logger",L=")}",M="#",J="warn",K="document",H="{...(",I="[",F="text[",G="[...(",N="\n",O=")]",P="object";
qx.Bootstrap.define(Q,{statics:{__bb:50,__bc:T,setLevel:function(u){this.__bc=u;
},getLevel:function(){return this.__bc;
},setTreshold:function(c){this.__bb=c;
},getTreshold:function(){return this.__bb;
},__bd:{},__be:0,register:function(bj){if(bj.$$id){return;
}var bl=this.__be++;
this.__bd[bl]=bj;
bj.$$id=bl;
var bk=this.__bf;

for(var i=0,l=bk.length;i<l;i++){bj.process(bk[i]);
}},unregister:function(by){var bz=by.$$id;

if(bz==null){return;
}delete this.__bd[bz];
delete by.$$id;
},debug:function(bq,br){this.__bh(T,arguments);
},info:function(bm,bn){this.__bh(z,arguments);
},warn:function(a,b){this.__bh(J,arguments);
},error:function(bo,bp){this.__bh(D,arguments);
},trace:function(bs){this.__bh(z,[bs,qx.dev.StackTrace.getStackTrace().join(N)]);
},deprecatedMethodWarning:function(d,e){var g,f;
},deprecatedClassWarning:function(bt,bu){var bv;
},clear:function(){this.__bf=[];
},__bf:[],__bg:{debug:0,info:1,warn:2,error:3},__bh:function(h,j){var p=this.__bg;

if(p[h]<p[this.__bc]){return;
}var m=j.length<2?null:j[0];
var o=m?1:0;
var k=[];

for(var i=o,l=j.length;i<l;i++){k.push(this.__bj(j[i],true));
}var r=new Date;
var s={time:r,offset:r-qx.Bootstrap.LOADSTART,level:h,items:k,win:window};
if(m){if(m instanceof qx.core.Object){s.object=m.$$hash;
}else if(m.$$type){s.clazz=m;
}}var q=this.__bf;
q.push(s);

if(q.length>(this.__bb+10)){q.splice(this.__bb,q.length);
}var t=this.__bd;

for(var n in t){t[n].process(s);
}},__bi:function(bw){if(bw===undefined){return R;
}else if(bw===null){return w;
}
if(bw.$$type){return v;
}var bx=typeof bw;

if(bx===V||bx==x||bx===ba||bx===U){return bx;
}else if(bx===P){if(bw.nodeType){return E;
}else if(bw.classname){return y;
}else if(bw instanceof Array){return B;
}else if(bw instanceof Error){return D;
}else{return S;
}}
if(bw.toString){return Y;
}return W;
},__bj:function(bb,bc){var bi=this.__bi(bb);
var be=W;

switch(bi){case w:case R:be=bi;
break;
case x:case ba:case U:be=bb;
break;
case E:if(bb.nodeType===9){be=K;
}else if(bb.nodeType===3){be=F+bb.nodeValue+X;
}else if(bb.nodeType===1){be=bb.nodeName.toLowerCase();

if(bb.id){be+=M+bb.id;
}}else{be=E;
}break;
case V:be=qx.lang.Function.getName(bb)||bi;
break;
case y:be=bb.basename+I+bb.$$hash+X;
break;
case v:case Y:case D:be=bb.toString();
break;
case B:if(bc){be=[];

for(var i=0,l=bb.length;i<l;i++){if(be.length>20){be.push(C+(l-i)+A);
break;
}be.push(this.__bj(bb[i],false));
}}else{be=G+bb.length+O;
}break;
case S:if(bc){var bd;
var bh=[];

for(var bg in bb){bh.push(bg);
}bh.sort();
be=[];

for(var i=0,l=bh.length;i<l;i++){if(be.length>20){be.push(C+(l-i)+A);
break;
}bg=bh[i];
bd=this.__bj(bb[bg],false);
bd.key=bg;
be.push(bd);
}}else{var bf=0;

for(var bg in bb){bf++;
}be=H+bf+L;
}break;
}return {type:bi,text:be};
}}});
})();
(function(){var P="qx.core.Object",O="__bl",N="]",M="[",L="string",K="Object";
qx.Class.define(P,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:K},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+M+this.$$hash+N;
},base:function(bm,bn){if(arguments.length===1){return bm.callee.base.call(this);
}else{return bm.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(G){return G.callee.self;
},clone:function(){var W=this.constructor;
var V=new W;
var Y=qx.Class.getProperties(W);
var X=qx.core.Property.$$store.user;
var ba=qx.core.Property.$$method.set;
var name;
for(var i=0,l=Y.length;i<l;i++){name=Y[i];

if(this.hasOwnProperty(X[name])){V[ba[name]](this[X[name]]);
}}return V;
},serialize:function(){var by=this.constructor;
var bA=qx.Class.getProperties(by);
var bB=qx.core.Property.$$store.user;
var name,bx;
var bz={classname:by.classname,properties:{}};
for(var i=0,l=bA.length;i<l;i++){name=bA[i];

if(this.hasOwnProperty(bB[name])){bx=this[bB[name]];

if(bx instanceof qx.core.Object){bz.properties[name]={$$hash:bx.$$hash};
}else{bz.properties[name]=bx;
}}}return bz;
},set:function(bf,bg){var bi=qx.core.Property.$$method.set;

if(typeof bf===L){{};
return this[bi[bf]](bg);
}else{for(var bh in bf){{};
this[bi[bh]](bf[bh]);
}return this;
}},get:function(H){var I=qx.core.Property.$$method.get;
{};
return this[I[H]]();
},reset:function(g){var h=qx.core.Property.$$method.reset;
{};
this[h[g]]();
},__bk:qx.event.Registration,addListener:function(bu,bv,self,bw){if(!this.$$disposed){return this.__bk.addListener(this,bu,bv,self,bw);
}return null;
},addListenerOnce:function(j,k,self,m){var n=function(e){k.call(self||this,e);
this.removeListener(j,n,this,m);
};
return this.addListener(j,n,this,m);
},removeListener:function(t,u,self,v){if(!this.$$disposed){return this.__bk.removeListener(this,t,u,self,v);
}return false;
},removeListenerById:function(E){if(!this.$$disposed){return this.__bk.removeListenerById(this,E);
}return false;
},hasListener:function(r,s){return this.__bk.hasListener(this,r,s);
},dispatchEvent:function(o){if(!this.$$disposed){return this.__bk.dispatchEvent(this,o);
}return true;
},fireEvent:function(bp,bq,br){if(!this.$$disposed){return this.__bk.fireEvent(this,bp,bq,br);
}return true;
},fireNonBubblingEvent:function(b,c,d){if(!this.$$disposed){return this.__bk.fireNonBubblingEvent(this,b,c,d);
}return true;
},fireDataEvent:function(bb,bc,bd,be){if(!this.$$disposed){return this.__bk.fireNonBubblingEvent(this,bb,qx.event.type.Data,[bc,bd||null,!!be]);
}return true;
},__bl:null,setUserData:function(bs,bt){if(!this.__bl){this.__bl={};
}this.__bl[bs]=bt;
},getUserData:function(bj){if(!this.__bl){return null;
}var bk=this.__bl[bj];
return bk===undefined?null:bk;
},__bm:qx.log.Logger,debug:function(p){this.__bm.debug(this,p);
},info:function(F){this.__bm.info(this,F);
},warn:function(a){this.__bm.warn(this,a);
},error:function(f){this.__bm.error(this,f);
},trace:function(){this.__bm.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
{};
var S=this.constructor;
var Q;

while(S.superclass){if(S.$$destructor){S.$$destructor.call(this);
}if(S.$$includes){Q=S.$$flatIncludes;

for(var i=0,l=Q.length;i<l;i++){if(Q[i].$$destructor){Q[i].$$destructor.call(this);
}}}S=S.superclass;
}var T,R;
},_disposeFields:function(J){qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(U){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(bl){qx.util.DisposeUtil.disposeArray(this,bl);
},_disposeMap:function(q){qx.util.DisposeUtil.disposeMap(this,q);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bo){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(O);
var y=this.constructor;
var C;
var D=qx.core.Property.$$store;
var A=D.user;
var B=D.theme;
var w=D.inherit;
var z=D.useinit;
var x=D.init;

while(y){C=y.$$properties;

if(C){for(var name in C){if(C[name].dispose){this[A[name]]=this[B[name]]=this[w[name]]=this[z[name]]=this[x[name]]=undefined;
}}}y=y.superclass;
}}});
})();
(function(){var N="",M="g",L="0",K='\\$1',J="%",I='-',H="qx.lang.String",G=' ',F='\n',E="undefined";
qx.Bootstrap.define(H,{statics:{camelCase:function(B){return B.replace(/\-([a-z])/g,function(c,d){return d.toUpperCase();
});
},hyphenate:function(Q){return Q.replace(/[A-Z]/g,function(g){return (I+g.charAt(0).toLowerCase());
});
},capitalize:function(O){return O.replace(/\b[a-z]/g,function(v){return v.toUpperCase();
});
},clean:function(w){return w.replace(/\s+/g,G).trim();
},trimLeft:function(n){return n.replace(/^\s+/,N);
},trimRight:function(f){return f.replace(/\s+$/,N);
},trim:function(e){return e.replace(/^\s+|\s+$/g,N);
},startsWith:function(C,D){return C.substring(0,D.length)===D;
},endsWith:function(y,z){return y.substring(y.length-z.length,y.length)===z;
},pad:function(j,length,k){if(typeof k===E){k=L;
}var l=N;

for(var i=j.length;i<length;i++){l+=k;
}return l+j;
},firstUp:function(A){return A.charAt(0).toUpperCase()+A.substr(1);
},firstLow:function(h){return h.charAt(0).toLowerCase()+h.substr(1);
},contains:function(a,b){return a.indexOf(b)!=-1;
},format:function(s,t){var u=s;

for(var i=0;i<t.length;i++){u=u.replace(new RegExp(J+(i+1),M),t[i]);
}return u;
},escapeRegexpChars:function(x){return x.replace(/([.*+?^${}()|[\]\/\\])/g,K);
},toArray:function(P){return P.split(/\B|\b/g);
},stripTags:function(m){return m.replace(/<\/?[^>]+>/gi,N);
},stripScripts:function(o,p){var r=N;
var q=o.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){r+=arguments[1]+F;
return N;
});

if(p===true){qx.lang.Function.globalEval(r);
}return q;
}}});
})();
(function(){var u="function",t="]",s="Interface",r="[Interface ",q="qx.Interface";
qx.Class.define(q,{statics:{define:function(name,o){if(o){if(o.extend&&!(o.extend instanceof Array)){o.extend=[o.extend];
}{};
var p=o.statics?o.statics:{};
if(o.extend){p.$$extends=o.extend;
}
if(o.properties){p.$$properties=o.properties;
}
if(o.members){p.$$members=o.members;
}
if(o.events){p.$$events=o.events;
}}else{var p={};
}p.$$type=s;
p.name=name;
p.toString=this.genericToString;
p.basename=qx.Bootstrap.createNamespace(name,p);
qx.Interface.$$registry[name]=p;
return p;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(a){if(!a){return [];
}var b=a.concat();

for(var i=0,l=a.length;i<l;i++){if(a[i].$$extends){b.push.apply(b,this.flatten(a[i].$$extends));
}}return b;
},__bn:function(c,d,e,f){var j=e.$$members;

if(j){for(var h in j){if(typeof j[h]===u){if(typeof c[h]===u){if(f===true&&!qx.Class.hasInterface(d,e)){c[h]=this.__bq(e,c[h],h,j[h]);
}}else{var g=h.match(/^(get|set|reset)(.*)$/);

if(!g||!qx.Class.hasProperty(d,qx.lang.String.firstLow(g[2]))){throw new Error('Implementation of method "'+h+'" is missing in class "'+d.classname+'" required by interface "'+e.name+'"');
}}}else{if(typeof c[h]===undefined){if(typeof c[h]!==u){throw new Error('Implementation of member "'+h+'" is missing in class "'+d.classname+'" required by interface "'+e.name+'"');
}}}}}},__bo:function(v,w){if(w.$$properties){for(var x in w.$$properties){if(!qx.Class.hasProperty(v,x)){throw new Error('The property "'+x+'" is not supported by Class "'+v.classname+'"!');
}}}},__bp:function(k,m){if(m.$$events){for(var n in m.$$events){if(!qx.Class.supportsEvent(k,n)){throw new Error('The event "'+n+'" is not supported by Class "'+k.classname+'"!');
}}}},assertObject:function(C,D){var F=C.constructor;
this.__bn(C,F,D,false);
this.__bo(F,D);
this.__bp(F,D);
var E=D.$$extends;

if(E){for(var i=0,l=E.length;i<l;i++){this.assertObject(C,E[i]);
}}},assert:function(y,z,A){this.__bn(y.prototype,y,z,A);
this.__bo(y,z);
this.__bp(y,z);
var B=z.$$extends;

if(B){for(var i=0,l=B.length;i<l;i++){this.assert(y,B[i],A);
}}},genericToString:function(){return r+this.name+t;
},$$registry:{},__bq:function(){},__br:null,__bs:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var z="_applyStyle",y="repeat",x="px",w="scale",v="solid",u="Color",t="double",s="px ",r="position:absolute;top:0;left:0;",q="dotted",N="_applyWidth",M="qx.ui.decoration.Uniform",L="repeat-y",K="String",J="__lp",I="",H="__lo",G="PositiveInteger",F="border:",E="dashed",C="no-repeat",D=" ",A="repeat-x",B=";";
qx.Class.define(M,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(n,o,p){arguments.callee.base.call(this);
if(n!=null){this.setWidth(n);
}
if(o!=null){this.setStyle(o);
}
if(p!=null){this.setColor(p);
}},properties:{width:{check:G,init:0,apply:N},style:{nullable:true,check:[v,q,E,t],init:v,apply:z},color:{nullable:true,check:u,apply:z},backgroundImage:{check:K,nullable:true,apply:z},backgroundRepeat:{check:[y,A,L,C,w],init:y,apply:z},backgroundColor:{check:u,nullable:true,apply:z}},members:{__lo:null,__lp:null,getMarkup:function(){if(this.__lo){return this.__lo;
}var j=r;
var k=this.getWidth();
{};
var m=qx.theme.manager.Color.getInstance();
j+=F+k+s+this.getStyle()+D+m.resolve(this.getColor())+B;
var l=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,j);
return this.__lo=l;
},resize:function(d,e,f){var h=this.getBackgroundImage()&&this.getBackgroundRepeat()==w;

if(h||qx.bom.client.Feature.CONTENT_BOX){var g=this.getWidth()*2;
e-=g;
f-=g;
if(e<0){e=0;
}
if(f<0){f=0;
}}d.style.width=e+x;
d.style.height=f+x;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||I;
},getInsets:function(){if(this.__lp){return this.__lp;
}var i=this.getWidth();
this.__lp={top:i,right:i,bottom:i,left:i};
return this.__lp;
},_applyWidth:function(){{};
this.__lp=null;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(H,J);
}});
})();
(function(){var q="_applyStyle",p="repeat",o="px",n="position:absolute;top:0;left:0",m="qx.ui.decoration.Background",l="",k="scale",j="backgroundPositionY",i="no-repeat",h="repeat-x",e="repeat-y",g="backgroundPositionX",f="Color",d="String";
qx.Class.define(m,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(r){arguments.callee.base.call(this);

if(r!=null){this.setBackgroundColor(r);
}},properties:{backgroundImage:{check:d,nullable:true,apply:q},backgroundRepeat:{check:[p,h,e,i,k],init:p,apply:q},backgroundColor:{check:f,nullable:true,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[j,g]}},members:{__lq:null,getMarkup:function(){if(this.__lq){return this.__lq;
}var v=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),this.getBackgroundPositionX(),this.getBackgroundPositionY(),n);
return this.__lq=v;
},resize:function(s,t,u){s.style.width=t+o;
s.style.height=u+o;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||l;
},__lr:{top:0,right:0,bottom:0,left:0},getInsets:function(){return this.__lr;
},_applyStyle:function(){{};
}}});
})();
(function(){var l="px",k="0px",j="-1px",i="_applyInsets",h="Number",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",K="insetTop",J="__lu",I='</div>',H="__ls",G="insetBottom",F="scale",E="qx.client",D="-br",C="-t",B="-tl",s="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',q="_applyBaseImage",r="-b",o="__lt",p="shorthand",m="String",n="insetRight",u="",v="-bl",x="__lv",w="-c",z="mshtml",y="insetLeft",A="qx.ui.decoration.Grid";
qx.Class.define(A,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(a,b){arguments.callee.base.call(this);
if(a!=null){this.setBaseImage(a);
}
if(b!=null){this.setInsets(b);
}},properties:{baseImage:{check:m,nullable:true,apply:q},insetLeft:{check:h,init:0,apply:i},insetRight:{check:h,init:0,apply:i},insetBottom:{check:h,init:0,apply:i},insetTop:{check:h,init:0,apply:i},insets:{group:[K,n,G,y],mode:p}},members:{__ls:null,__lt:null,__lu:null,__lv:null,getMarkup:function(){if(this.__ls){return this.__ls;
}var N=qx.bom.element.Decoration;
var O=this.__lu;
var P=this.__lv;
var Q=[];
Q.push(t);
Q.push(N.create(O.tl,g,{top:0,left:0}));
Q.push(N.create(O.t,f,{top:0,left:P.left+l}));
Q.push(N.create(O.tr,g,{top:0,right:0}));
Q.push(N.create(O.bl,g,{bottom:0,left:0}));
Q.push(N.create(O.b,f,{bottom:0,left:P.left+l}));
Q.push(N.create(O.br,g,{bottom:0,right:0}));
Q.push(N.create(O.l,e,{top:P.top+l,left:0}));
Q.push(N.create(O.c,F,{top:P.top+l,left:P.left+l}));
Q.push(N.create(O.r,e,{top:P.top+l,right:0}));
Q.push(I);
return this.__ls=Q.join(u);
},resize:function(bb,bc,bd){var be=this.__lv;
var innerWidth=bc-be.left-be.right;
var innerHeight=bd-be.top-be.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}bb.style.width=bc+l;
bb.style.height=bd+l;
bb.childNodes[1].style.width=innerWidth+l;
bb.childNodes[4].style.width=innerWidth+l;
bb.childNodes[7].style.width=innerWidth+l;
bb.childNodes[6].style.height=innerHeight+l;
bb.childNodes[7].style.height=innerHeight+l;
bb.childNodes[8].style.height=innerHeight+l;

if(qx.core.Variant.isSet(E,z)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){if(bc%2==1){bb.childNodes[2].style.marginRight=j;
bb.childNodes[5].style.marginRight=j;
bb.childNodes[8].style.marginRight=j;
}else{bb.childNodes[2].style.marginRight=k;
bb.childNodes[5].style.marginRight=k;
bb.childNodes[8].style.marginRight=k;
}
if(bd%2==1){bb.childNodes[3].style.marginBottom=j;
bb.childNodes[4].style.marginBottom=j;
bb.childNodes[5].style.marginBottom=j;
}else{bb.childNodes[3].style.marginBottom=k;
bb.childNodes[4].style.marginBottom=k;
bb.childNodes[5].style.marginBottom=k;
}}}},tint:function(L,M){},getInsets:function(){if(this.__lt){return this.__lt;
}return this.__lt={left:this.getInsetLeft(),right:this.getInsetRight(),bottom:this.getInsetBottom(),top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__lt=null;
},_applyBaseImage:function(R,S){{};
var T=qx.util.ResourceManager;

if(R){var V=qx.util.AliasManager.getInstance();
var X=V.resolve(R);
var Y=/(.*)(\.[a-z]+)$/.exec(X);
var W=Y[1];
var U=Y[2];
var ba=this.__lu={tl:W+B+U,t:W+C+U,tr:W+d+U,bl:W+v+U,b:W+r+U,br:W+D+U,l:W+c+U,c:W+w+U,r:W+s+U};
this.__lv={top:T.getImageHeight(ba.t),bottom:T.getImageHeight(ba.b),left:T.getImageWidth(ba.l),right:T.getImageWidth(ba.r)};
}}},destruct:function(){this._disposeFields(H,o,J,x);
}});
})();
(function(){var r="_applyStyle",q="solid",p="Color",o="double",n="px ",m="dotted",l="_applyWidth",k="dashed",j="Number",i=" ",V=";",U="shorthand",T="repeat",S="px",R="widthTop",Q="scale",P="styleRight",O="styleBottom",N="widthLeft",M="widthBottom",y="",z="styleTop",w="colorBottom",x="styleLeft",u="widthRight",v="colorLeft",s="colorRight",t="colorTop",A="border-left:",B="position:absolute;top:0;left:0;",E="repeat-y",D="String",G="border-bottom:",F="border-right:",I="qx.ui.decoration.Single",H="border-top:",C="__lx",L="__lw",K="no-repeat",J="repeat-x";
qx.Class.define(I,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(bc,bd,be){arguments.callee.base.call(this);
if(bc!=null){this.setWidth(bc);
}
if(bd!=null){this.setStyle(bd);
}
if(be!=null){this.setColor(be);
}},properties:{widthTop:{check:j,init:0,apply:l},widthRight:{check:j,init:0,apply:l},widthBottom:{check:j,init:0,apply:l},widthLeft:{check:j,init:0,apply:l},styleTop:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleRight:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleBottom:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleLeft:{nullable:true,check:[q,m,k,o],init:q,apply:r},colorTop:{nullable:true,check:p,apply:r},colorRight:{nullable:true,check:p,apply:r},colorBottom:{nullable:true,check:p,apply:r},colorLeft:{nullable:true,check:p,apply:r},backgroundImage:{check:D,nullable:true,apply:r},backgroundRepeat:{check:[T,J,E,K,Q],init:T,apply:r},backgroundColor:{check:p,nullable:true,apply:r},left:{group:[N,x,v]},right:{group:[u,P,s]},top:{group:[R,z,t]},bottom:{group:[M,O,w]},width:{group:[R,u,M,N],mode:U},style:{group:[z,P,O,x],mode:U},color:{group:[t,s,w,v],mode:U}},members:{__lw:null,__lx:null,getMarkup:function(W){if(this.__lw){return this.__lw;
}var X=qx.theme.manager.Color.getInstance();
var Y=y;
var bb=this.getWidthTop();

if(bb>0){Y+=H+bb+n+this.getStyleTop()+i+X.resolve(this.getColorTop())+V;
}var bb=this.getWidthRight();

if(bb>0){Y+=F+bb+n+this.getStyleRight()+i+X.resolve(this.getColorRight())+V;
}var bb=this.getWidthBottom();

if(bb>0){Y+=G+bb+n+this.getStyleBottom()+i+X.resolve(this.getColorBottom())+V;
}var bb=this.getWidthLeft();

if(bb>0){Y+=A+bb+n+this.getStyleLeft()+i+X.resolve(this.getColorLeft())+V;
}{};
Y+=B;
var ba=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,Y);
return this.__lw=ba;
},resize:function(d,e,f){var h=this.getBackgroundImage()&&this.getBackgroundRepeat()==Q;

if(h||qx.bom.client.Feature.CONTENT_BOX){var g=this.getInsets();
e-=g.left+g.right;
f-=g.top+g.bottom;
if(e<0){e=0;
}
if(f<0){f=0;
}}d.style.width=e+S;
d.style.height=f+S;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||y;
},getInsets:function(){if(this.__lx){return this.__lx;
}this.__lx={top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
return this.__lx;
},_applyWidth:function(){{};
this.__lx=null;
},_applyStyle:function(){{};
}},destruct:function(){this._disposeFields(L,C);
}});
})();
(function(){var m="_applyStyle",l='"></div>',k="Color",j="repeat",i='<div style="',h='border:',g="1px solid ",f="",e=";",d="px",D="position:absolute;top:1px;left:1px;",C="qx.ui.decoration.Beveled",B="scale",A='<div style="position:absolute;top:1px;left:0px;',z='<div style="position:absolute;top:1px;left:1px;',y="repeat-y",x='border-bottom:',w="String",v='border-right:',u='</div>',s='border-top:',t="Number",q="no-repeat",r='position:absolute;top:0px;left:1px;',o="repeat-x",p='<div style="overflow:hidden;font-size:0;line-height:0;">',n='border-left:';
qx.Class.define(C,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(T,U,V){arguments.callee.base.call(this);
if(T!=null){this.setOuterColor(T);
}
if(U!=null){this.setInnerColor(U);
}
if(V!=null){this.setInnerOpacity(V);
}},properties:{innerColor:{check:k,nullable:true,apply:m},innerOpacity:{check:t,init:1,apply:m},outerColor:{check:k,nullable:true,apply:m},backgroundImage:{check:w,nullable:true,apply:m},backgroundRepeat:{check:[j,o,y,q,B],init:j,apply:m},backgroundColor:{check:k,nullable:true,apply:m}},members:{__ly:null,_applyStyle:function(){{};
},getMarkup:function(){if(this.__ly){return this.__ly;
}var P=qx.theme.manager.Color.getInstance();
var Q=[];
var S=g+P.resolve(this.getOuterColor())+e;
var R=g+P.resolve(this.getInnerColor())+e;
Q.push(p);
Q.push(i);
Q.push(h,S);
Q.push(qx.bom.element.Opacity.compile(0.35));
Q.push(l);
Q.push(A);
Q.push(n,S);
Q.push(v,S);
Q.push(l);
Q.push(i);
Q.push(r);
Q.push(s,S);
Q.push(x,S);
Q.push(l);
Q.push(qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,D));
Q.push(z);
Q.push(h,R);
Q.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
Q.push(l);
Q.push(u);
return this.__ly=Q.join(f);
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
}var O=d;
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
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.childNodes[3].style.backgroundColor=c.resolve(b)||f;
},getInsets:function(){return this.__lz;
},__lz:{top:2,right:2,bottom:2,left:2}}});
})();
(function(){var k="solid",j="scale",i="border-main",h="white",g="border-separator",f="repeat-x",e="background-light",d="border-disabled",c="decoration/table/header-cell.png",b="#f8f8f8",bj="#b6b6b6",bi="background-pane",bh="repeat-y",bg="border-input",bf="decoration/scrollbar/scrollbar-button-bg-horizontal.png",be="decoration/form/input.png",bd="decoration/scrollbar/scrollbar-button-bg-vertical.png",bc="decoration/tabview/tab-button-top-active.png",bb="decoration/form/button-c.png",ba="decoration/scrollbar/scrollbar-bg-vertical.png",r="decoration/shadow/shadow-small.png",s="decoration/form/button-checked.png",p="decoration/tabview/tab-button-left-inactive.png",q="decoration/groupbox/groupbox.png",n="#FAFAFA",o="decoration/pane/pane.png",l="decoration/menu/background.png",m="decoration/toolbar/toolbar-part.gif",w="decoration/tabview/tab-button-top-inactive.png",x="decoration/menu/bar-background.png",F="decoration/tabview/tab-button-bottom-active.png",D="decoration/form/button-hovered.png",N="#b8b8b8",I="decoration/form/input-focused.png",V="decoration/window/captionbar-inactive.png",S="qx/decoration/Modern",z="decoration/window/statusbar.png",Y="border-focused",X="decoration/selection.png",W="table-focus-indicator",y="#F2F2F2",B="decoration/form/button-checked-c.png",C="decoration/scrollbar/scrollbar-bg-horizontal.png",E="qx.theme.modern.Decoration",G="#f4f4f4",J="decoration/form/button.png",P="decoration/app-header.png",U="decoration/tabview/tabview-pane.png",t="decoration/form/button-focused.png",u="decoration/tabview/tab-button-bottom-inactive.png",A="decoration/form/button-disabled.png",M="decoration/tabview/tab-button-right-active.png",L="decoration/form/button-pressed.png",K="decoration/window/captionbar-active.png",R="decoration/tabview/tab-button-left-active.png",Q="background-splitpane",H="decoration/form/button-checked-focused.png",O="#C5C5C5",a="decoration/toolbar/toolbar-gradient.png",T="decoration/tabview/tab-button-right-inactive.png",v="decoration/shadow/shadow.png";
qx.Theme.define(E,{resource:S,decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:i}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:X,backgroundRepeat:j}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:g}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:v,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:r,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:C,backgroundRepeat:f}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:ba,backgroundRepeat:bh}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bf,backgroundRepeat:j,outerColor:i,innerColor:h,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bf,backgroundRepeat:j,outerColor:d,innerColor:h,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bd,backgroundRepeat:j,outerColor:i,innerColor:h,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bd,backgroundRepeat:j,outerColor:d,innerColor:h,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:J,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:D,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:L,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:H,insets:2}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bg,innerColor:h,innerOpacity:0.5,backgroundImage:be,backgroundRepeat:f,backgroundColor:e}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bg,innerColor:Y,backgroundImage:I,backgroundRepeat:f,backgroundColor:e}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:h,innerOpacity:0.5,backgroundImage:be,backgroundRepeat:f,backgroundColor:e}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:a,backgroundRepeat:j}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bj,innerColor:b,backgroundImage:bb,backgroundRepeat:j}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bj,innerColor:b,backgroundImage:B,backgroundRepeat:j}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:N,colorRight:G,styleLeft:k,styleRight:k}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:m,backgroundRepeat:bh}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:U,insets:[0,2,3,0]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:w}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:u}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:R}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:p}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:T}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bi,width:3,color:Q,style:k}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bi,width:1,color:i,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:K}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:V}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:z}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:i,style:k}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:i,style:k}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthBottom:1,colorBottom:i,style:k}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:g,styleRight:k}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:g,styleRight:k,widthBottom:1,colorBottom:h,styleBottom:k}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthBottom:1,colorBottom:i,style:k}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:W,style:k}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:i,style:k}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthRight:1,colorRight:y,style:k}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:l,backgroundRepeat:j,width:1,color:i,style:k}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:O,widthBottom:1,colorBottom:n}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:x,backgroundRepeat:j,width:1,color:g,style:k}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:P,backgroundRepeat:j}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__cw:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__cw();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",G=")",F="winxp",E="freebsd",D="sunos",C="SV1",B="|",A="nintendods",z="winnt4",y="wince",x="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="g",u="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(u,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__cx:{"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":F,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":z,"Win 9x 4.90":x,"Windows CE":y,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":E,"NetBSD":m,"OpenBSD":k,"SunOS":D,"Symbian System":t,"Nitro":A,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cy:function(){var J=navigator.userAgent;
var I=[];

for(var H in this.__cx){I.push(H);
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
}else{this.NAME=this.__cx[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(J.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&J.indexOf(C)!==-1){this.SP2=true;
}}}}},defer:function(L){L.__cy();
}});
})();
(function(){var k="Lucida Grande",j="Liberation Sans",i="Arial",h="Tahoma",g="Candara",f="Segoe UI",e="Consolas",d="monospace",c="Courier New",b="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i]},"bold":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i],bold:true},"small":{size:qx.bom.client.System.WINVISTA?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[e]:[e,a,c,d]}}});
})();
(function(){var go="button-frame",gn="widget",gm="atom",gl="main",gk="button",gj="middle",gi="background-light",gh="image",gg="groupbox",gf="cell",fa="text-selected",eY="bold",eX="menu-button",eW="decoration/arrows/down.png",eV="toolbar-button",eU="spinner",eT="input",eS="input-disabled",eR="selected",eQ="popup",gv="textfield",gw="input-focused",gt="list",gu="tree-item",gr="treevirtual-contract",gs="scrollbar",gp="datechooser/nav-button",gq="text-hovered",gx="center",gy="treevirtual-expand",fN="tooltip",fM="label",fP="decoration/arrows/right.png",fO="background-application",fR="radiobutton",fQ="text-disabled",fT="combobox",fS="checkbox",fL="text-title",fK="qx/static/blank.gif",dj="scrollbar/button",dk="right",dl="combobox/button",dm="text-label",dn="decoration/tree/closed.png",dp="scrollbar-slider-horizontal",dq="white",dr="decoration/arrows/left.png",ds="button-focused",dt="text-light",gM="text-input",gL="icon/16/places/folder.png",gK="slidebar/button-forward",gJ="right-top",gQ="background-splitpane",gP=".png",gO="decoration/tree/open.png",gN="default",gS="decoration/arrows/down-small.png",gR="datechooser",eg="slidebar/button-backward",eh="selectbox",ee="treevirtual-folder",ef="shadow-popup",ek="icon/16/mimetypes/office-document.png",el="background-medium",ei="table",ej="decoration/form/",ec="icon/16/places/folder-open.png",ed="button-checked",dL="decoration/window/maximize-active-hovered.png",dK="radiobutton-hovered",dN="decoration/cursors/",dM="slidebar",dH="menu",dG="table-scroller-focus-indicator",dJ="move-frame",dI="nodrop",dF="table-header-cell",dE="app-header",eq="row-layer",er="text-inactive",es="move",et="radiobutton-checked-focused",em="decoration/window/restore-active-hovered.png",en="shadow-window",eo="table-column-button",ep="right.png",eu="tabview-page-button-bottom-inactive",ev="window-statusbar",dW="button-hovered",dV="decoration/scrollbar/scrollbar-",dU="background-tip",dT="scrollbar-slider-horizontal-disabled",dS="table-scroller-header",dR="radiobutton-disabled",dQ="button-pressed",dP="table-pane",eb="decoration/window/close-active.png",ea="tabview-page-button-left-active",ew="checkbox-hovered",ex="checkbox-checked",ey="decoration/window/minimize-active-hovered.png",ez="menubar",eA="icon/16/actions/dialog-cancel.png",eB="tabview-page-button-top-inactive",eC="tabview-page-button-left-inactive",eD="toolbar-button-checked",eE="decoration/tree/open-selected.png",eF="radiobutton-checked",fi="decoration/window/minimize-inactive.png",fh="icon/16/apps/office-calendar.png",fg="group",ff="tabview-page-button-right-inactive",fm="decoration/window/minimize-active.png",fl="decoration/window/restore-inactive.png",fk="text-active",fj="checkbox-checked-focused",fp="splitpane",fo="toolbar-separator",fG="button-preselected-focused",fH="decoration/window/close-active-hovered.png",fE="toolbar",fF="checkbox-pressed",fC="button-disabled",fD="border-separator",fA="decoration/window/maximize-inactive.png",fB="icon/22/places/folder-open.png",fI="scrollarea",fJ="scrollbar-vertical",fX="decoration/toolbar/toolbar-handle-knob.gif",fW="icon/22/mimetypes/office-document.png",ga="button-preselected",fY="button-checked-focused",gc="up.png",gb="decoration/tree/closed-selected.png",ge="qx.theme.modern.Appearance",gd="checkbox-disabled",fV="toolbar-button-hovered",fU="progressive-table-header",gF="decoration/menu/radiobutton.gif",gG="decoration/arrows/forward.png",gH="decoration/table/descending.png",gI="window-captionbar-active",gB="checkbox-checked-hovered",gC="scrollbar-slider-vertical",gD="alias",gE="decoration/window/restore-active.png",gz="checkbox-checked-disabled",gA="icon/32/mimetypes/office-document.png",di="radiobutton-checked-disabled",dh="tabview-pane",dg="decoration/arrows/rewind.png",df="checkbox-focused",de="top",dd="#EEE",dc="icon/16/actions/dialog-ok.png",db="radiobutton-checked-hovered",da="table-header-cell-hovered",cY="window",dw="text-gray",dx="decoration/menu/radiobutton-invert.gif",du="slider",dv="decoration/table/select-column-order.png",dA="down.png",dB="tabview-page-button-top-active",dy="icon/32/places/folder-open.png",dz="icon/22/places/folder.png",dC="decoration/window/maximize-active.png",dD="checkbox-checked-pressed",fq="decoration/window/close-inactive.png",fn="toolbar-part",fv="decoration/splitpane/knob-vertical.png",fr="left.png",fd="decoration/menu/checkbox-invert.gif",fb="decoration/arrows/up.png",dO="radiobutton-checked-pressed",fe="table-statusbar",dY="radiobutton-pressed",dX="window-captionbar-inactive",eI="copy",eJ="radiobutton-focused",eK="decoration/menu/checkbox.gif",eL="decoration/splitpane/knob-horizontal.png",eM="icon/32/places/folder.png",eN="tabview-page-button-bottom-active",eO="decoration/arrows/up-small.png",eP="decoration/table/ascending.png",eG="small",eH="tabview-page-button-right-active",fc="-disabled",fu="scrollbar-horizontal",ft="progressive-table-header-cell",fs="menu-separator",fz="pane",fy="decoration/arrows/right-invert.png",fx=".gif",fw="icon/16/actions/view-refresh.png";
qx.Theme.define(ge,{appearances:{"widget":{},"root":{style:function(bx){return {backgroundColor:fO,textColor:dm,font:gN};
}},"label":{style:function(bJ){return {textColor:bJ.disabled?fQ:undefined};
}},"move-frame":{style:function(cR){return {decorator:gl};
}},"resize-frame":dJ,"dragdrop-cursor":{style:function(bn){var bo=dI;

if(bn.copy){bo=eI;
}else if(bn.move){bo=es;
}else if(bn.alias){bo=gD;
}return {source:dN+bo+fx,position:gJ,offset:[2,16,2,6]};
}},"image":{style:function(O){return {opacity:!O.replacement&&O.disabled?0.3:1};
}},"atom":{},"atom/label":fM,"atom/icon":gh,"popup":{style:function(cS){return {decorator:gl,backgroundColor:gi,shadow:ef};
}},"button-frame":{alias:gm,style:function(cM){var cO,cN;

if(cM.checked&&cM.focused&&!cM.inner){cO=fY;
cN=undefined;
}else if(cM.disabled){cO=fC;
cN=undefined;
}else if(cM.pressed){cO=dQ;
cN=gq;
}else if(cM.checked){cO=ed;
cN=undefined;
}else if(cM.hovered){cO=dW;
cN=gq;
}else if(cM.preselected&&cM.focused&&!cM.inner){cO=fG;
cN=gq;
}else if(cM.preselected){cO=ga;
cN=gq;
}else if(cM.focused&&!cM.inner){cO=ds;
cN=undefined;
}else{cO=gk;
cN=undefined;
}return {decorator:cO,textColor:cN};
}},"button-frame/image":{style:function(N){return {opacity:!N.replacement&&N.disabled?0.5:1};
}},"button":{alias:go,include:go,style:function(bG){return {padding:[2,8],center:true};
}},"splitbutton":{},"splitbutton/button":gk,"splitbutton/arrow":{alias:gk,include:gk,style:function(ci){return {icon:eW,padding:2,marginLeft:1};
}},"checkbox":{alias:gm,style:function(R){var S;

if(R.checked&&R.focused){S=fj;
}else if(R.checked&&R.disabled){S=gz;
}else if(R.checked&&R.pressed){S=dD;
}else if(R.checked&&R.hovered){S=gB;
}else if(R.checked){S=ex;
}else if(R.disabled){S=gd;
}else if(R.focused){S=df;
}else if(R.pressed){S=fF;
}else if(R.hovered){S=ew;
}else{S=fS;
}return {icon:ej+S+gP,gap:6};
}},"radiobutton":{alias:gm,style:function(bR){var bS;

if(bR.checked&&bR.focused){bS=et;
}else if(bR.checked&&bR.disabled){bS=di;
}else if(bR.checked&&bR.pressed){bS=dO;
}else if(bR.checked&&bR.hovered){bS=db;
}else if(bR.checked){bS=eF;
}else if(bR.disabled){bS=dR;
}else if(bR.focused){bS=eJ;
}else if(bR.pressed){bS=dY;
}else if(bR.hovered){bS=dK;
}else{bS=fR;
}return {icon:ej+bS+gP,gap:6};
}},"textfield":{style:function(bF){return {decorator:bF.focused?gw:bF.disabled?eS:eT,padding:[2,4,1],textColor:bF.disabled?fQ:gM};
}},"textarea":{include:gv,style:function(B){return {padding:4};
}},"spinner":{style:function(co){return {decorator:co.focused?gw:co.disabled?eS:eT};
}},"spinner/textfield":{include:gv,style:function(H){return {decorator:undefined};
}},"spinner/upbutton":{alias:go,include:go,style:function(cL){return {icon:eO,padding:cL.pressed?[2,2,0,4]:[1,3,1,3]};
}},"spinner/downbutton":{alias:go,include:go,style:function(bK){return {icon:gS,padding:bK.pressed?[2,2,0,4]:[1,3,1,3]};
}},"datefield":fT,"datefield/button":{alias:dl,include:dl,style:function(bz){return {icon:fh,padding:[0,3],decorator:undefined};
}},"datefield/textfield":{style:function(o){return {padding:[2,4,1],textColor:o.disabled?fQ:gM};
}},"datefield/list":{alias:gR,include:gR,style:function(cn){return {decorator:undefined};
}},"groupbox":{style:function(cy){return {legendPosition:de};
}},"groupbox/legend":{alias:gm,style:function(cH){return {padding:[1,0,1,4],textColor:fL,font:eY};
}},"groupbox/frame":{style:function(cm){return {padding:12,decorator:fg};
}},"check-groupbox":gg,"check-groupbox/legend":{alias:fS,include:fS,style:function(ba){return {padding:[1,0,1,4],textColor:fL,font:eY};
}},"radio-groupbox":gg,"radio-groupbox/legend":{alias:fR,include:fR,style:function(bu){return {padding:[1,0,1,4],textColor:fL};
}},"scrollarea":{style:function(bl){return {minWidth:64,minHeight:64};
}},"scrollarea/corner":{style:function(a){return {backgroundColor:fO};
}},"scrollarea/pane":gn,"scrollarea/scrollbar-x":gs,"scrollarea/scrollbar-y":gs,"scrollbar":{style:function(cU){return {width:cU.horizontal?undefined:16,height:cU.horizontal?16:undefined,decorator:cU.horizontal?fu:fJ,padding:1};
}},"scrollbar/slider":{alias:du,style:function(bI){return {padding:bI.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:go,style:function(gX){var gY=gX.horizontal?dp:gC;

if(gX.disabled){gY+=fc;
}return {decorator:gY,minHeight:gX.horizontal?undefined:14,minWidth:gX.horizontal?14:undefined};
}},"scrollbar/button":{alias:go,include:go,style:function(bP){var bQ=dV;

if(bP.left){bQ+=fr;
}else if(bP.right){bQ+=ep;
}else if(bP.up){bQ+=gc;
}else{bQ+=dA;
}
if(bP.left||bP.right){return {padding:[0,0,0,bP.left?3:4],icon:bQ,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bQ,width:14,height:15};
}}},"scrollbar/button-begin":dj,"scrollbar/button-end":dj,"slider":{style:function(p){return {decorator:p.focused?gw:p.disabled?eS:eT};
}},"slider/knob":{include:go,style:function(t){return {decorator:t.disabled?dT:dp,height:14,width:14};
}},"list":{alias:fI,style:function(r){return {backgroundColor:gi,decorator:r.focused?gw:r.disabled?eS:eT};
}},"list/pane":gn,"listitem":{alias:gm,style:function(bO){return {padding:4,textColor:bO.selected?fa:undefined,decorator:bO.selected?eR:undefined};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:go,include:go,style:function(z){return {padding:5,center:true,icon:z.barLeft||z.barRight?eW:fP};
}},"slidebar/button-backward":{alias:go,include:go,style:function(cj){return {padding:5,center:true,icon:cj.barLeft||cj.barRight?fb:dr};
}},"tabview":{style:function(W){return {contentPadding:16};
}},"tabview/bar":{alias:dM,style:function(h){var i={marginBottom:h.barTop?-1:0,marginTop:h.barBottom?-4:0,marginLeft:h.barRight?-3:0,marginRight:h.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(h.barTop||h.barBottom){i.paddingLeft=5;
i.paddingRight=7;
}else{i.paddingTop=5;
i.paddingBottom=7;
}return i;
}},"tabview/bar/button-forward":{include:gK,alias:gK,style:function(cf){if(cf.barTop||cf.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:eg,alias:eg,style:function(bi){if(bi.barTop||bi.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bq){return {decorator:dh,minHeight:100,marginBottom:bq.barBottom?-1:0,marginTop:bq.barTop?-1:0,marginLeft:bq.barLeft?-1:0,marginRight:bq.barRight?-1:0};
}},"tabview-page":gn,"tabview-page/button":{alias:gm,style:function(bb){var bh,bd=0;
var bg=0,bc=0,be=0,bf=0;

if(bb.checked){if(bb.barTop){bh=dB;
bd=[6,14];
be=bb.firstTab?0:-5;
bf=bb.lastTab?0:-5;
}else if(bb.barBottom){bh=eN;
bd=[6,14];
be=bb.firstTab?0:-5;
bf=bb.lastTab?0:-5;
}else if(bb.barRight){bh=eH;
bd=[6,13];
bg=bb.firstTab?0:-5;
bc=bb.lastTab?0:-5;
}else{bh=ea;
bd=[6,13];
bg=bb.firstTab?0:-5;
bc=bb.lastTab?0:-5;
}}else{if(bb.barTop){bh=eB;
bd=[4,10];
bg=4;
be=bb.firstTab?5:1;
bf=1;
}else if(bb.barBottom){bh=eu;
bd=[4,10];
bc=4;
be=bb.firstTab?5:1;
bf=1;
}else if(bb.barRight){bh=ff;
bd=[4,10];
bf=5;
bg=bb.firstTab?5:1;
bc=1;
be=1;
}else{bh=eC;
bd=[4,10];
be=5;
bg=bb.firstTab?5:1;
bc=1;
bf=1;
}}return {zIndex:bb.checked?10:5,decorator:bh,padding:bd,marginTop:bg,marginBottom:bc,marginLeft:be,marginRight:bf,textColor:bb.checked?fk:er};
}},"toolbar":{style:function(cd){return {decorator:fE,spacing:2};
}},"toolbar/part":{style:function(cX){return {decorator:fn,spacing:2};
}},"toolbar/part/container":{style:function(bk){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bw){return {source:fX,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gm,style:function(I){return {marginTop:2,marginBottom:2,padding:(I.pressed||I.checked||I.hovered)&&!I.disabled||(I.disabled&&I.checked)?3:5,decorator:I.pressed||(I.checked&&!I.hovered)||(I.checked&&I.disabled)?eD:I.hovered&&!I.disabled?fV:undefined};
}},"toolbar-menubutton":{alias:eV,include:eV,style:function(bH){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gh,include:gh,style:function(gV){return {source:gS};
}},"toolbar-splitbutton":{style:function(v){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eV,include:eV,style:function(cq){return {icon:eW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eV,include:eV,style:function(cK){return {padding:cK.pressed||cK.checked?1:cK.hovered?1:3,icon:eW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(cT){return {decorator:fo,margin:7};
}},"tree":gt,"tree-item":{style:function(cl){return {padding:[2,6],textColor:cl.selected?fa:undefined,decorator:cl.selected?eR:undefined};
}},"tree-item/icon":{include:gh,style:function(bp){return {paddingRight:5};
}},"tree-item/label":fM,"tree-item/open":{include:gh,style:function(cg){var ch;

if(cg.selected&&cg.opened){ch=eE;
}else if(cg.selected&&!cg.opened){ch=gb;
}else if(cg.opened){ch=gO;
}else{ch=dn;
}return {padding:[0,5,0,2],source:ch};
}},"tree-folder":{include:gu,alias:gu,style:function(cI){var cJ;

if(cI.small){cJ=cI.opened?ec:gL;
}else if(cI.large){cJ=cI.opened?dy:eM;
}else{cJ=cI.opened?fB:dz;
}return {icon:cJ};
}},"tree-file":{include:gu,alias:gu,style:function(Q){return {icon:Q.small?ek:Q.large?gA:fW};
}},"treevirtual":ei,"treevirtual-folder":{style:function(g){return {icon:g.opened?ec:gL};
}},"treevirtual-file":{include:ee,alias:ee,style:function(cb){return {icon:ek};
}},"treevirtual-line":{style:function(cP){return {icon:fK};
}},"treevirtual-contract":{style:function(cp){return {icon:gO,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(c){return {icon:dn,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gr,"treevirtual-only-expand":gy,"treevirtual-start-contract":gr,"treevirtual-start-expand":gy,"treevirtual-end-contract":gr,"treevirtual-end-expand":gy,"treevirtual-cross-contract":gr,"treevirtual-cross-expand":gy,"treevirtual-end":{style:function(q){return {icon:fK};
}},"treevirtual-cross":{style:function(cs){return {icon:fK};
}},"tooltip":{include:eQ,style:function(gT){return {backgroundColor:dU,padding:[1,3,2,3],offset:[1,1,20,1]};
}},"tooltip/atom":gm,"window":{style:function(w){return {shadow:en,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(bs){return {decorator:cY};
}},"window/captionbar":{style:function(bW){return {decorator:bW.active?gI:dX,textColor:bW.active?dq:dw,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(cG){return {margin:[5,0,3,6]};
}},"window/title":{style:function(b){return {alignY:gj,font:eY,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gm,style:function(bU){return {icon:bU.active?bU.hovered?ey:fm:fi,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gm,style:function(cF){return {icon:cF.active?cF.hovered?em:gE:fl,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gm,style:function(j){return {icon:j.active?j.hovered?dL:dC:fA,margin:[4,8,2,0]};
}},"window/close-button":{alias:gm,style:function(cV){return {icon:cV.active?cV.hovered?fH:eb:fq,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(l){return {padding:[2,6],decorator:ev,minHeight:18};
}},"window/statusbar-text":{style:function(Y){return {font:eG};
}},"iframe":{style:function(cB){return {decorator:gl};
}},"resizer":{style:function(bm){return {decorator:fz};
}},"splitpane":{style:function(bM){return {decorator:fp};
}},"splitpane/splitter":{style:function(cW){return {width:cW.horizontal?3:undefined,height:cW.vertical?3:undefined,backgroundColor:gQ};
}},"splitpane/splitter/knob":{style:function(cu){return {source:cu.horizontal?eL:fv};
}},"splitpane/slider":{style:function(V){return {width:V.horizontal?3:undefined,height:V.vertical?3:undefined,backgroundColor:gQ};
}},"selectbox":{alias:go,include:go,style:function(bY){return {padding:[2,8]};
}},"selectbox/atom":gm,"selectbox/popup":eQ,"selectbox/list":{alias:gt},"selectbox/arrow":{include:gh,style:function(m){return {source:eW,paddingLeft:5};
}},"datechooser":{style:function(f){return {padding:2,decorator:gl,backgroundColor:gi};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:go,alias:go,style:function(E){var F={padding:[2,4]};

if(E.lastYear){F.icon=dg;
F.marginRight=1;
}else if(E.lastMonth){F.icon=dr;
}else if(E.nextYear){F.icon=gG;
F.marginLeft=1;
}else if(E.nextMonth){F.icon=fP;
}return F;
}},"datechooser/last-year-button-tooltip":fN,"datechooser/last-month-button-tooltip":fN,"datechooser/next-year-button-tooltip":fN,"datechooser/next-month-button-tooltip":fN,"datechooser/last-year-button":gp,"datechooser/last-month-button":gp,"datechooser/next-month-button":gp,"datechooser/next-year-button":gp,"datechooser/month-year-label":{style:function(M){return {font:eY,textAlign:gx};
}},"datechooser/date-pane":{style:function(bC){return {marginTop:2};
}},"datechooser/weekday":{style:function(P){return {textColor:P.weekend?dt:undefined,textAlign:gx,paddingTop:2,backgroundColor:el};
}},"datechooser/week":{style:function(k){return {textAlign:gx,padding:[2,4],backgroundColor:el};
}},"datechooser/day":{style:function(ca){return {textAlign:gx,decorator:ca.selected?eR:undefined,textColor:ca.selected?fa:ca.otherMonth?dt:undefined,font:ca.today?eY:undefined,padding:[2,4]};
}},"combobox":{style:function(cC){return {decorator:cC.focused?gw:cC.disabled?eS:eT};
}},"combobox/popup":eQ,"combobox/list":{alias:gt},"combobox/button":{include:go,alias:go,style:function(x){var y={icon:eW,padding:2};

if(x.selected){y.decorator=ds;
}return y;
}},"combobox/textfield":{include:gv,style:function(U){return {decorator:undefined};
}},"menu":{style:function(C){var D={decorator:dH,shadow:ef,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4};

if(C.submenu){D.position=gJ;
D.offset=[-2,-3];
}return D;
}},"menu-separator":{style:function(bN){return {height:0,decorator:fs,margin:[4,2]};
}},"menu-button":{alias:gm,style:function(ce){return {decorator:ce.selected?eR:undefined,textColor:ce.selected?fa:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gh,style:function(cx){return {alignY:gj};
}},"menu-button/label":{include:fM,style:function(bv){return {alignY:gj,padding:1};
}},"menu-button/shortcut":{include:fM,style:function(cz){return {alignY:gj,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(cv){return {source:cv.selected?fy:fP,alignY:gj};
}},"menu-checkbox":{alias:eX,include:eX,style:function(n){return {icon:!n.checked?undefined:n.selected?fd:eK};
}},"menu-radiobutton":{alias:eX,include:eX,style:function(T){return {icon:!T.checked?undefined:T.selected?dx:gF};
}},"menubar":{style:function(bB){return {decorator:ez};
}},"menubar-button":{alias:gm,style:function(cc){return {decorator:cc.pressed||cc.hovered?eR:undefined,textColor:cc.pressed||cc.hovered?fa:undefined,padding:[3,8]};
}},"colorselector":gn,"colorselector/control-bar":gn,"colorselector/control-pane":gn,"colorselector/visual-pane":gg,"colorselector/preset-grid":gn,"colorselector/colorbucket":{style:function(L){return {decorator:gl,width:16,height:16};
}},"colorselector/preset-field-set":gg,"colorselector/input-field-set":gg,"colorselector/preview-field-set":gg,"colorselector/hex-field-composite":gn,"colorselector/hex-field":gv,"colorselector/rgb-spinner-composite":gn,"colorselector/rgb-spinner-red":eU,"colorselector/rgb-spinner-green":eU,"colorselector/rgb-spinner-blue":eU,"colorselector/hsb-spinner-composite":gn,"colorselector/hsb-spinner-hue":eU,"colorselector/hsb-spinner-saturation":eU,"colorselector/hsb-spinner-brightness":eU,"colorselector/preview-content-old":{style:function(G){return {decorator:gl,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(d){return {decorator:gl,backgroundColor:gi,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(K){return {decorator:gl,margin:5};
}},"colorselector/brightness-field":{style:function(e){return {decorator:gl,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gn,"colorselector/hue-saturation-handle":gn,"colorselector/brightness-pane":gn,"colorselector/brightness-handle":gn,"colorpopup":{alias:eQ,include:eQ,style:function(J){return {padding:5,backgroundColor:fO};
}},"colorpopup/field":{style:function(bL){return {decorator:gl,margin:2,width:14,height:14,backgroundColor:gi};
}},"colorpopup/selector-button":gk,"colorpopup/auto-button":gk,"colorpopup/preview-pane":gg,"colorpopup/current-preview":{style:function(gW){return {height:20,padding:4,marginLeft:4,decorator:gl,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(cw){return {height:20,padding:4,marginRight:4,decorator:gl,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gk,include:gk,style:function(bX){return {icon:dc};
}},"colorpopup/colorselector-cancelbutton":{alias:gk,include:gk,style:function(cD){return {icon:eA};
}},"table":{alias:gn,style:function(X){return {decorator:ei};
}},"table-header":{},"table/statusbar":{style:function(gU){return {decorator:fe,padding:[0,2]};
}},"table/column-button":{alias:go,style:function(ct){return {decorator:eo,padding:3,icon:dv};
}},"table-column-reset-button":{include:eX,alias:eX,style:function(){return {icon:fw};
}},"table-scroller":gn,"table-scroller/scrollbar-x":gs,"table-scroller/scrollbar-y":gs,"table-scroller/header":{style:function(cQ){return {decorator:dS};
}},"table-scroller/pane":{style:function(cr){return {backgroundColor:dP};
}},"table-scroller/focus-indicator":{style:function(cE){return {decorator:dG};
}},"table-scroller/resize-line":{style:function(bV){return {backgroundColor:fD,width:2};
}},"table-header-cell":{alias:gm,style:function(bt){return {minWidth:13,minHeight:20,padding:bt.hovered?[3,4,2,4]:[3,4],decorator:bt.hovered?da:dF,sortIcon:bt.sorted?(bt.sortedAscending?eP:gH):undefined};
}},"table-header-cell/label":{style:function(s){return {minWidth:0,alignY:gj,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(by){return {alignY:gj,alignX:dk};
}},"table-header-cell/icon":{style:function(bD){return {minWidth:0,alignY:gj,paddingRight:5};
}},"table-editor-textfield":{include:gv,style:function(ck){return {decorator:undefined,padding:[2,2],backgroundColor:gi};
}},"table-editor-selectbox":{include:eh,alias:eh,style:function(cA){return {padding:[0,2],backgroundColor:gi};
}},"table-editor-combobox":{include:fT,alias:fT,style:function(bE){return {decorator:undefined,backgroundColor:gi};
}},"progressive-table-header":{alias:gn,style:function(bT){return {decorator:fU};
}},"progressive-table-header-cell":{alias:gm,style:function(A){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ft};
}},"app-header":{style:function(br){return {font:eY,textColor:fa,padding:[8,12],decorator:dE};
}},"virtual-list":gt,"virtual-list/row-layer":eq,"row-layer":{style:function(u){return {colorEven:dq,colorOdd:dd};
}},"column-layer":gn,"cell":{style:function(bj){return {textColor:bj.selected?fa:dm,padding:[3,6],font:gN};
}},"cell-string":gf,"cell-number":{include:gf,style:function(bA){return {textAlign:dk};
}},"cell-image":gf,"cell-boolean":gf,"cell-atom":gf,"cell-date":gf,"cell-html":gf}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,resource:b,icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var o='"',n="qx.lang.Core",m="\\\\",k="\\\"",j="[object Error]";
qx.Bootstrap.define(n);
if(!Error.prototype.toString||Error.prototype.toString()==j){Error.prototype.toString=function(){return this.message;
};
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(t,u){if(u==null){u=0;
}else if(u<0){u=Math.max(0,this.length+u);
}
for(var i=u;i<this.length;i++){if(this[i]===t){return i;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(r,s){if(s==null){s=this.length-1;
}else if(s<0){s=Math.max(0,this.length+s);
}
for(var i=s;i>=0;i--){if(this[i]===r){return i;
}}return -1;
};
}
if(!Array.prototype.forEach){Array.prototype.forEach=function(p,q){var l=this.length;

for(var i=0;i<l;i++){p.call(q,this[i],i,this);
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
if(!Array.prototype.some){Array.prototype.some=function(g,h){var l=this.length;

for(var i=0;i<l;i++){if(g.call(h,this[i],i,this)){return true;
}}return false;
};
}
if(!Array.prototype.every){Array.prototype.every=function(v,w){var l=this.length;

for(var i=0;i<l;i++){if(!v.call(w,this[i],i,this)){return false;
}}return true;
};
}if(!String.prototype.quote){String.prototype.quote=function(){return o+this.replace(/\\/g,m).replace(/\"/g,k)+o;
};
}})();
(function(){var o="indexOf",n="lastIndexOf",m="slice",k="concat",j="join",h="toLocaleUpperCase",g="shift",f="substr",e="filter",d="unshift",L="match",K="quote",J="qx.lang.Generics",I="localeCompare",H="sort",G="some",F="charAt",E="split",D="substring",C="pop",w="toUpperCase",x="replace",u="push",v="charCodeAt",r="every",t="reverse",p="search",q="forEach",y="map",z="toLowerCase",B="splice",A="toLocaleLowerCase";
qx.Bootstrap.define(J,{statics:{__bE:{"Array":[j,t,H,u,C,g,d,B,k,m,o,n,q,y,e,G,r],"String":[K,D,z,w,F,v,o,n,A,h,I,L,p,x,E,f,k,m]},__bF:function(b,c){return function(s){return b.prototype[c].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bG:function(){var M=qx.lang.Generics.__bE;

for(var Q in M){var O=window[Q];
var N=M[Q];

for(var i=0,l=N.length;i<l;i++){var P=N[i];

if(!O[P]){O[P]=qx.lang.Generics.__bF(O,P);
}}}}},defer:function(a){a.__bG();
}});
})();
(function(){var y=":",x="qx.client",w="anonymous",v="...",u="qx.dev.StackTrace",t="",s="\n",r="/source/class/",q=".";
qx.Class.define(u,{statics:{getStackTrace:qx.core.Variant.select(x,{"gecko":function(){try{throw new Error();
}catch(K){var V=this.getStackTraceFromError(K);
qx.lang.Array.removeAt(V,0);
var T=this.getStackTraceFromCaller(arguments);
var R=T.length>V.length?T:V;

for(var i=0;i<Math.min(T.length,V.length);i++){var S=T[i];

if(S.indexOf(w)>=0){continue;
}var ba=S.split(y);

if(ba.length!=2){continue;
}var X=ba[0];
var Q=ba[1];
var P=V[i];
var bb=P.split(y);
var W=bb[0];
var O=bb[1];

if(qx.Class.getByName(W)){var U=W;
}else{U=X;
}var Y=U+y;

if(Q){Y+=Q+y;
}Y+=O;
R[i]=Y;
}return R;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var M;

try{M.bar();
}catch(p){var N=this.getStackTraceFromError(p);
qx.lang.Array.removeAt(N,0);
return N;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(x,{"opera":function(bc){return [];
},"default":function(b){var g=[];
var f=qx.lang.Function.getCaller(b);
var c={};

while(f){var d=qx.lang.Function.getName(f);
g.push(d);

try{f=f.caller;
}catch(L){break;
}
if(!f){break;
}var e=qx.core.ObjectRegistry.toHashCode(f);

if(c[e]){g.push(v);
break;
}c[e]=f;
}return g;
}}),getStackTraceFromError:qx.core.Variant.select(x,{"gecko":function(h){if(!h.stack){return [];
}var o=/@(.+):(\d+)$/gm;
var j;
var k=[];

while((j=o.exec(h.stack))!=null){var l=j[1];
var n=j[2];
var m=this.__bH(l);
k.push(m+y+n);
}return k;
},"webkit":function(a){if(a.sourceURL&&a.line){return [this.__bH(a.sourceURL)+y+a.line];
}else{return [];
}},"opera":function(D){if(D.message.indexOf("Backtrace:")<0){return [];
}var F=[];
var G=qx.lang.String.trim(D.message.split("Backtrace:")[1]);
var H=G.split(s);

for(var i=0;i<H.length;i++){var E=H[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(E&&E.length>=2){var J=E[1];
var I=this.__bH(E[2]);
F.push(I+y+J);
}}return F;
},"default":function(){return [];
}}),__bH:function(z){var C=r;
var A=z.indexOf(C);
var B=(A==-1)?z:z.substring(A+C.length).replace(/\//g,q).replace(/\.js$/,t);
return B;
}}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(g){},setItem:function(h,i){},splice:function(a,b,c){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var d="qx.event.IEventHandler";
qx.Interface.define(d,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(e,f){},registerEvent:function(g,h,i){},unregisterEvent:function(a,b,c){}}});
})();
(function(){var p="load",o="unload",n="qx.client",m="ready",l="mshtml",k="qx.event.handler.Application",j="complete",i="gecko|opera|webkit",h="left",g="_window",e="DOMContentLoaded",f="shutdown";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._window=a.getWindow();
this.__bt=false;
this.__bu=false;
this.__bv=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var u=qx.event.handler.Application.$$instance;

if(u){u.__bt=true;
u.__bw();
}}},members:{canHandleEvent:function(v,w){},registerEvent:function(b,c,d){},unregisterEvent:function(q,r,s){},__bw:function(){if(!this.__bx&&this.__bu&&this.__bt){this.__bx=true;
qx.event.Registration.fireEvent(this._window,m);
}},_initObserver:function(){if(qx.$$domReady||document.readyState==j){this.__bu=true;
this.__bw();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(n,i)){qx.bom.Event.addNativeListener(this._window,e,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(n,l)){var x=function(){try{document.documentElement.doScroll(h);
this._onNativeLoadWrapped();
}catch(y){setTimeout(x,100);
}};
x();
}qx.bom.Event.addNativeListener(this._window,p,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,o,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,p,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,o,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:function(e){this.__bu=true;
this.__bw();
},_onNativeUnload:function(e){if(!this.__by){this.__by=true;

try{qx.event.Registration.fireEvent(this._window,f);
}finally{qx.core.ObjectRegistry.shutdown();
}}}},destruct:function(){this._stopObserver();
this._disposeFields(g);
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(j){arguments.callee.base.call(this);
this.__cf={};

if(j!==undefined){this.setSize(j);
}},properties:{size:{check:a,init:null,nullable:true}},members:{__cf:null,getObject:function(f){if(this.$$disposed){return;
}
if(!f){throw new Error("Class needs to be defined!");
}var g=null;
var h=this.__cf[f.classname];

if(h){g=h.pop();
}
if(g){g.$$pooled=false;
}else{g=new f;
}return g;
},poolObject:function(k){if(!this.__cf){return;
}var m=k.classname;
var n=this.__cf[m];

if(k.$$pooled){throw new Error("Object is already pooled: "+k);
}
if(!n){this.__cf[m]=n=[];
}var o=this.getSize()||Infinity;

if(n.length>o){this.warn("Cannot pool "+k+" because the pool is already full.");
k.dispose();
return;
}k.$$pooled=true;
n.push(k);
}},destruct:function(){var e=this.__cf;
var c,d,i,l;

for(c in e){d=e[c];

for(i=0,l=d.length;i<l;i++){d[i].dispose();
}}delete this.__cf;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var m="_originalTarget",l="_relatedTarget",k="qx.event.type.Event",j="_target",i="_currentTarget";
qx.Class.define(k,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(a,b){{};
this._type=null;
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
},setType:function(o){this._type=o;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(n){this._eventPhase=n;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(c){this._target=c;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(p){this._currentTarget=p;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(e){this._relatedTarget=e;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(f){this._originalTarget=f;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(d){this._bubbles=d;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(q){this._cancelable=q;
}},destruct:function(){this._disposeFields(j,i,l,m);
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
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var c="qx.event.dispatch.Direct";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(j){this._manager=j;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(a,event,b){return !event.getBubbles();
},dispatchEvent:function(d,event,e){event.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(d,e,false);

if(f){for(var i=0,l=f.length;i<l;i++){var g=f[i].context||d;
f[i].handler.call(g,event);
}}}},defer:function(h){qx.event.Registration.addDispatcher(h);
}});
})();
(function(){var z="",y="get",x="change",w=".",v="last",u="]",t="[",s="Number",r="String",q="deepBinding",P="' (",O="Boolean",N=").",M="set",L=") to the object '",K="item",J="Integer",I="reset",H="qx.data.SingleValueBinding",G="No event could be found for the property",E="PositiveNumber",F="Binding from '",C="PositiveInteger",D="Binding does not exist!",A="model",B="Date";
qx.Class.define(H,{statics:{DEBUG_ON:false,__cg:{},bind:function(bn,bo,bp,bq,br){var bw=bo.split(w);
var bt=this.__cn(bw);
var bz=[];
var bA=[];
var bx=[];
var bu=[];
var bv=bn;
for(var i=0;i<bw.length;i++){if(bt[i]!==z){bu.push(x);
}else{bu.push(this.__ci(bv,bw[i]));
}bz[i]=bv;
if(i==bw.length-1){if(bt[i]!==z){var bD=bt[i]===v?bv.length-1:bt[i];
var bs=bv.getItem(bD);
this.__cm(bs,bp,bq,br);
bx[i]=this.__co(bv,bu[i],bp,bq,br,bt[i]);
}else{if(bw[i]!=null&&bv[y+qx.lang.String.firstUp(bw[i])]!=null){var bs=bv[y+qx.lang.String.firstUp(bw[i])]();
this.__cm(bs,bp,bq,br);
}bx[i]=this.__co(bv,bu[i],bp,bq,br);
}}else{var bB={index:i,propertyNames:bw,sources:bz,listenerIds:bx,arrayIndexValues:bt,targetObject:bp,targetProperty:bq,options:br,listeners:bA};
var by=qx.lang.Function.bind(this.__ch,this,bB);
bA.push(by);
bx[i]=bv.addListener(bu[i],by);
}if(bv[y+qx.lang.String.firstUp(bw[i])]==null){bv=null;
}else if(bt[i]!==z){bv=bv[y+qx.lang.String.firstUp(bw[i])](bt[i]);
}else{bv=bv[y+qx.lang.String.firstUp(bw[i])]();
}
if(!bv){break;
}}var bC={type:q,listenerIds:bx,sources:bz};
this.__cp(bC,bn,bo,bp,bq);
return bC;
},__ch:function(cc){for(var j=cc.index+1;j<cc.propertyNames.length;j++){var cg=cc.sources[j];
cc.sources[j]=null;

if(!cg){continue;
}cg.removeListenerById(cc.listenerIds[j]);
}var cg=cc.sources[cc.index];
for(var j=cc.index+1;j<cc.propertyNames.length;j++){if(cc.arrayIndexValues[j-1]!==z){cg=cg[y+qx.lang.String.firstUp(cc.propertyNames[j-1])](cc.arrayIndexValues[j-1]);
}else{cg=cg[y+qx.lang.String.firstUp(cc.propertyNames[j-1])]();
}cc.sources[j]=cg;
if(!cg){this.__cj(cc.targetObject,cc.targetProperty);
break;
}if(j==cc.propertyNames.length-1){if(cg instanceof qx.data.Array){var ch=cc.arrayIndexValues[j]===v?cg.length-1:cc.arrayIndexValues[j];
var ce=cg.getItem(ch);
this.__cm(ce,cc.targetObject,cc.targetProperty,cc.options);
cc.listenerIds[j]=this.__co(cg,x,cc.targetObject,cc.targetProperty,cc.options,cc.arrayIndexValues[j]);
}else{if(cc.propertyNames[j]!=null&&cg[y+qx.lang.String.firstUp(cc.propertyNames[j])]!=null){var ce=cg[y+qx.lang.String.firstUp(cc.propertyNames[j])]();
this.__cm(ce,cc.targetObject,cc.targetProperty,cc.options);
}var cf=this.__ci(cg,cc.propertyNames[j]);
cc.listenerIds[j]=this.__co(cg,cf,cc.targetObject,cc.targetProperty,cc.options);
}}else{if(cc.listeners[j]==null){var cd=qx.lang.Function.bind(this.__ch,this,cc);
cc.listeners.push(cd);
}if(cg instanceof qx.data.Array){var cf=x;
}else{var cf=this.__ci(cg,cc.propertyNames[j]);
}cc.listenerIds[j]=cg.addListener(cf,cc.listeners[j]);
}}},__ci:function(ck,cl){var cm=this.__cr(ck,cl);
if(cm==null){if(qx.Class.supportsEvent(ck.constructor,cl)){cm=cl;
}else if(qx.Class.supportsEvent(ck.constructor,x+qx.lang.String.firstUp(cl))){cm=x+qx.lang.String.firstUp(cl);
}else{throw new qx.core.AssertionError(G,cl);
}}return cm;
},__cj:function(bP,bQ){var bR=this.__cl(bP,bQ);

if(bR!=null){var bS=bQ.substring(bQ.lastIndexOf(w)+1,bQ.length);
bR[I+qx.lang.String.firstUp(bS)]();
}},__ck:function(bi,bj,bk){var bl=this.__cl(bi,bj);

if(bl!=null){var bm=bj.substring(bj.lastIndexOf(w)+1,bj.length);
bl[M+qx.lang.String.firstUp(bm)](bk);
}},__cl:function(cn,co){var cr=co.split(w);
var cs=cn;
for(var i=0;i<cr.length-1;i++){try{var cq=cr[i];
if(cq.indexOf(u)==cq.length-1){var cp=cq.substring(cq.indexOf(t)+1,cq.length-1);
cq=cq.substring(0,cq.indexOf(t));
}cs=cs[y+qx.lang.String.firstUp(cq)]();

if(cp!=null){if(cp==v){cp=cs.length-1;
}cs=cs.getItem(cp);
cp=null;
}}catch(bc){return null;
}}return cs;
},__cm:function(a,b,c,d){if(a==null){this.__cj(b,c);
}a=this.__cq(a,b,c,d);
if(a!=undefined){this.__ck(b,c,a);
}},__cn:function(f){var g=[];
for(var i=0;i<f.length;i++){var name=f[i];
if(qx.lang.String.endsWith(name,u)){var h=name.substring(name.indexOf(t)+1,name.indexOf(u));
if(name.indexOf(u)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(h!==v){if(h==z||isNaN(parseInt(h))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}f[i]=name.substring(0,name.indexOf(t));
g[i]=z;
g[i+1]=h;
f.splice(i+1,0,K);
i++;
}else{g[i]=z;
}}return g;
},__co:function(S,T,U,V,W,X){var Y;
var bb=function(be,e){if(be!==z){if(be===v){be=S.length-1;
}var bh=S.getItem(be);
if(bh==undefined){qx.data.SingleValueBinding.__cj(U,V);
}var bf=e.getData().start;
var bg=e.getData().end;

if(be<bf||be>bg){return;
}}else{var bh=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+S+" by "+T+" to "+U+" ("+V+")");
qx.log.Logger.debug("Data before conversion: "+bh);
}bh=qx.data.SingleValueBinding.__cq(bh,U,V,W);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bh);
}try{if(bh!=undefined){qx.data.SingleValueBinding.__ck(U,V,bh);
}else{qx.data.SingleValueBinding.__cj(U,V);
}if(W&&W.onSetOk){W.onSetOk(S,U,bh);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(W&&W.onSetFail){W.onSetFail(e);
}else{this.warn("Failed so set value "+bh+" on "+U+". Error message: "+e);
}}};
if(!X){X=z;
}bb=qx.lang.Function.bind(bb,S,X);
var ba=S.addListener(T,bb);
return ba;
},__cp:function(bK,bL,bM,bN,bO){if(this.__cg[bL.toHashCode()]===undefined){this.__cg[bL.toHashCode()]=[];
}this.__cg[bL.toHashCode()].push([bK,bL,bM,bN,bO]);
},__cq:function(bT,bU,bV,bW){if(bW&&bW.converter){return bW.converter(bT,bU.getUserData(A));
}else{var ca=this.__cl(bU,bV);
var cb=bV.substring(bV.lastIndexOf(w)+1,bV.length);
if(ca==null){return bT;
}var bY=qx.Class.getPropertyDefinition(ca.constructor,cb);
var bX=bY==null?z:bY.check;
return this.__cs(bT,bX);
}},__cr:function(bH,bI){var bJ=qx.Class.getPropertyDefinition(bH.constructor,bI);

if(bJ==null){return null;
}return bJ.event;
},__cs:function(bE,bF){var bG=Object.prototype.toString.call(bE).slice(8,-1);
if((bG==s||bG==r)&&(bF==J||bF==C)){bE=parseInt(bE);
}if((bG==O||bG==s||bG==B)&&bF==r){bE=bE+z;
}if((bG==s||bG==r)&&(bF==s||bF==E)){bE=parseFloat(bE);
}return bE;
},removeBindingFromObject:function(ct,cu){if(cu.type==q){for(var i=0;i<cu.sources.length;i++){if(cu.sources[i]){cu.sources[i].removeListenerById(cu.listenerIds[i]);
}}}else{ct.removeListenerById(cu);
}var cv=this.__cg[ct.toHashCode()];
if(cv!=undefined){for(var i=0;i<cv.length;i++){if(cv[i][0]==cu){qx.lang.Array.remove(cv,cv[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(Q){{};
var R=this.__cg[Q.toHashCode()];
for(var i=R.length-1;i>=0;i--){this.removeBindingFromObject(Q,R[i][0]);
}},getAllBindingsForObject:function(bd){if(this.__cg[bd.toHashCode()]===undefined){this.__cg[bd.toHashCode()]=[];
}return this.__cg[bd.toHashCode()];
},removeAllBindings:function(){for(var l in this.__cg){var k=qx.core.ObjectRegistry.fromHashCode(l);
if(k==null){delete this.__cg[l];
continue;
}this.removeAllBindingsForObject(k);
}this.__cg={};
},getAllBindings:function(){return this.__cg;
},showBindingInLog:function(m,n){var p;
for(var i=0;i<this.__cg[m.toHashCode()].length;i++){if(this.__cg[m.toHashCode()][i][0]==n){p=this.__cg[m.toHashCode()][i];
break;
}}
if(p===undefined){var o=D;
}else{var o=F+p[1]+P+p[2]+L+p[3]+P+p[4]+N;
}qx.log.Logger.debug(o);
},showAllBindingsInLog:function(){for(var cj in this.__cg){var ci=qx.core.ObjectRegistry.fromHashCode(cj);

for(var i=0;i<this.__cg[cj].length;i++){this.showBindingInLog(ci,this.__cg[cj][i][0]);
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
(function(){var K="change",J="add",I="order",H="remove",G="qx.data.Array",F="qx.event.type.Event",E="number",D="changeLength",C="qx.event.type.Data";
qx.Class.define(G,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(S){arguments.callee.base.call(this);
if(S==undefined){this.__cu=[];
}else if(arguments.length>1){this.__cu=[];

for(var i=0;i<arguments.length;i++){this.__cu.push(arguments[i]);
}}else if(typeof S==E){this.__cu=new Array(S);
}else if(S instanceof Array){this.__cu=[];

for(var i=0;i<S.length;i++){this.push(S[i]);
}}else{this.__cu=[];
throw new Error("Type of the parameter not supported!");
}this.__cv();
},events:{"change":C,"changeLength":F},members:{concat:function(X){var Y=this.__cu.concat(X);
return new qx.data.Array(Y);
},join:function(s){return this.__cu.join(s);
},pop:function(){var o=this.__cu.pop();
this.__cv();
this._applyEventPropagation(null,o);
this.fireDataEvent(K,{start:this.length-1,end:this.length-1,type:H},null);
return o;
},push:function(m){for(var i=0;i<arguments.length;i++){this.__cu.push(arguments[i]);
this.__cv();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(K,{start:this.length-1,end:this.length-1,type:J},null);
}return this.length;
},reverse:function(){this.__cu.reverse();
this.fireDataEvent(K,{start:0,end:this.length-1,type:I},null);
},shift:function(){var M=this.__cu.shift();
this.__cv();
this._applyEventPropagation(null,M);
this.fireDataEvent(K,{start:0,end:this.length-1,type:H,item:M},null);
return M;
},slice:function(b,c){return new qx.data.Array(this.__cu.slice(b,c));
},splice:function(d,e,f){var l=this.__cu.length;
var h=this.__cu.splice.apply(this.__cu,arguments);
if(this.__cu.length!=l){this.__cv();
}var j=e>0;
var g=arguments.length>2;

if(j||g){if(this.__cu.length>l){var k=J;
}else if(this.__cu.length<l){var k=H;
}else{var k=I;
}this.fireDataEvent(K,{start:d,end:this.length-1,type:k,item:null},null);
}for(var i=2;i<arguments.length;i++){this._applyEventPropagation(arguments[i],null,d+i);
}for(var i=0;i<h.length;i++){this._applyEventPropagation(null,h[i]);
}return (new qx.data.Array(h));
},sort:function(w){this.__cu.sort.apply(this.__cu,arguments);
this.fireDataEvent(K,{start:0,end:this.length-1,type:I,item:null},null);
},unshift:function(R){for(var i=arguments.length-1;i>=0;i--){this.__cu.unshift(arguments[i]);
this.__cv();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(K,{start:0,end:this.length-1,type:J,item:arguments[i]},null);
}return this.length;
},toArray:function(){return this.__cu;
},getItem:function(W){return this.__cu[W];
},setItem:function(p,q){var r=this.__cu[p];
this.__cu[p]=q;
this._applyEventPropagation(q,r,p);
if(this.length!=this.__cu.length){this.__cv();
}this.fireDataEvent(K,{start:p,end:p,type:J,item:q},null);
},getLength:function(){return this.length;
},indexOf:function(n){return this.__cu.indexOf(n);
},toString:function(){return this.__cu.toString();
},contains:function(t){return this.__cu.indexOf(t)!==-1;
},copy:function(){return this.concat();
},insertAt:function(T,U){this.splice(T,0,U);
},insertBefore:function(O,P){var Q=this.indexOf(O);

if(Q==-1){this.push(P);
}else{this.splice(Q,0,P);
}},insertAfter:function(z,A){var B=this.indexOf(z);

if(B==-1||B==(this.length-1)){this.push(A);
}else{this.splice(B+1,0,A);
}},removeAt:function(a){return this.splice(a,1)[0];
},removeAll:function(){for(var i=0;i<this.__cu.length;i++){this._applyEventPropagation(null,this.__cu[i]);
}this.__cu.length=0;
this.__cv();
},append:function(u){{};
for(var i=0;i<u.length;i++){this._applyEventPropagation(u[i],null,this.__cu.length+i);
}Array.prototype.push.apply(this.__cu,u);
this.__cv();
},remove:function(x){var y=this.indexOf(x);

if(y!=-1){this.splice(y,1);
return x;
}},equals:function(v){if(this.length!==v.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==v.getItem(i)){return false;
}}return true;
},sum:function(){var L=0;

for(var i=0;i<this.length;i++){L+=this.getItem(i);
}return L;
},max:function(){var N=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>N){N=this.getItem(i);
}}return N===undefined?null:N;
},min:function(){var V=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<V){V=this.getItem(i);
}}return V===undefined?null:V;
},__cv:function(){this.length=this.__cu.length;
this.fireEvent(D,qx.event.type.Event);
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
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bK=qx.dev.StackTrace.getStackTrace();
},members:{__bK:null,getStackTrace:function(){return this.__bK;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(f,g,h){},unregisterEvent:function(c,d,e){}},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var m="qx.util.DisposeUtil";
qx.Class.define(m,{statics:{disposeFields:function(p,q){var name;

for(var i=0,l=q.length;i<l;i++){var name=q[i];

if(p[name]==null||!p.hasOwnProperty(name)){continue;
}p[name]=null;
}},disposeObjects:function(n,o){var name;

for(var i=0,l=o.length;i<l;i++){name=o[i];

if(n[name]==null||!n.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(n[name].dispose){n[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}n[name]=null;
}},disposeArray:function(g,h){var k=g[h];

if(!k){return;
}if(qx.core.ObjectRegistry.inShutDown){g[h]=null;
return;
}try{var j;

for(var i=k.length-1;i>=0;i--){j=k[i];

if(j){j.dispose();
}}}catch(a){throw new Error("The array field: "+h+" of object: "+g+" has non disposable entries: "+a);
}k.length=0;
g[h]=null;
},disposeMap:function(c,d){var e=c[d];

if(!e){return;
}if(qx.core.ObjectRegistry.inShutDown){c[d]=null;
return;
}try{for(var f in e){if(e.hasOwnProperty(f)){e[f].dispose();
}}}catch(b){throw new Error("The map field: "+d+" of object: "+c+" has non disposable entries: "+b);
}c[d]=null;
}}});
})();
(function(){var d="_dynamic",c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(f){return this._dynamic[f];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(g){if(g&&this._dynamic[g]){return this._dynamic[g];
}return g;
},_setDynamic:function(a){this._dynamic=a;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._disposeFields(d);
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
(function(){var m=",",l="rgb(",k=")",j="qx.theme.manager.Color",h="qx.util.ColorUtil";
qx.Class.define(h,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42],grey:[128,128,128]},isNamedColor:function(D){return this.NAMED[D]!==undefined;
},isSystemColor:function(c){return this.SYSTEM[c]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(j);
},isThemedColor:function(E){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(E);
},stringToRgb:function(y){if(this.supportsThemes()&&this.isThemedColor(y)){var y=qx.theme.manager.Color.getInstance().resolveDynamic(y);
}
if(this.isNamedColor(y)){return this.NAMED[y];
}else if(this.isSystemColor(y)){throw new Error("Could not convert system colors to RGB: "+y);
}else if(this.isRgbString(y)){return this.__ca();
}else if(this.isHex3String(y)){return this.__cb();
}else if(this.isHex6String(y)){return this.__cc();
}throw new Error("Could not parse color: "+y);
},cssStringToRgb:function(o){if(this.isNamedColor(o)){return this.NAMED[o];
}else if(this.isSystemColor(o)){throw new Error("Could not convert system colors to RGB: "+o);
}else if(this.isRgbString(o)){return this.__ca();
}else if(this.isHex3String(o)){return this.__cb();
}else if(this.isHex6String(o)){return this.__cc();
}throw new Error("Could not parse color: "+o);
},stringToRgbString:function(F){return this.rgbToRgbString(this.stringToRgb(F));
},rgbToRgbString:function(d){return l+d[0]+m+d[1]+m+d[2]+k;
},rgbToHexString:function(n){return (qx.lang.String.pad(n[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(n[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(n[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(Q){return this.isThemedColor(Q)||this.isNamedColor(Q)||this.isHex3String(Q)||this.isHex6String(Q)||this.isRgbString(Q);
},isCssString:function(s){return this.isSystemColor(s)||this.isNamedColor(s)||this.isHex3String(s)||this.isHex6String(s)||this.isRgbString(s);
},isHex3String:function(e){return this.REGEXP.hex3.test(e);
},isHex6String:function(C){return this.REGEXP.hex6.test(C);
},isRgbString:function(a){return this.REGEXP.rgb.test(a);
},__ca:function(){var B=parseInt(RegExp.$1,10);
var A=parseInt(RegExp.$2,10);
var z=parseInt(RegExp.$3,10);
return [B,A,z];
},__cb:function(){var I=parseInt(RegExp.$1,16)*17;
var H=parseInt(RegExp.$2,16)*17;
var G=parseInt(RegExp.$3,16)*17;
return [I,H,G];
},__cc:function(){var x=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var w=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var v=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [x,w,v];
},hex3StringToRgb:function(u){if(this.isHex3String(u)){return this.__cb(u);
}throw new Error("Invalid hex3 value: "+u);
},hex6StringToRgb:function(R){if(this.isHex6String(R)){return this.__cc(R);
}throw new Error("Invalid hex6 value: "+R);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__cb(P);
}
if(this.isHex6String(P)){return this.__cc(P);
}throw new Error("Invalid hex value: "+P);
},rgbToHsb:function(S){var U,V,X;
var be=S[0];
var bb=S[1];
var T=S[2];
var bd=(be>bb)?be:bb;

if(T>bd){bd=T;
}var W=(be<bb)?be:bb;

if(T<W){W=T;
}X=bd/255.0;

if(bd!=0){V=(bd-W)/bd;
}else{V=0;
}
if(V==0){U=0;
}else{var ba=(bd-be)/(bd-W);
var bc=(bd-bb)/(bd-W);
var Y=(bd-T)/(bd-W);

if(be==bd){U=Y-bc;
}else if(bb==bd){U=2.0+ba-Y;
}else{U=4.0+bc-ba;
}U=U/6.0;

if(U<0){U=U+1.0;
}}return [Math.round(U*360),Math.round(V*100),Math.round(X*100)];
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
if(r==j){var v=qx.util.ResourceManager.toUri(u);
return g+v+k+t+m;
}else{var back=qx.bom.element.Background.compile(u,r,s,top);
return p+back+t+o;
}}else{if(t){if(qx.core.Variant.isSet(i,n)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){t+=f;
}}return p+t+o;
}else{return l;
}}}}});
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
},isValidPropertyValue:function(m){if(typeof m===d){return this.isDynamic(m);
}else if(typeof m===i){var n=m.constructor;
return qx.Class.hasInterface(n,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(k){if(!k){return false;
}var l=this.getTheme();

if(!l){return false;
}return !!l.decorations[k];
},_applyTheme:function(a){var b=qx.util.AliasManager.getInstance();
a?b.add(j,a.resource):b.remove(j);
}},destruct:function(){this._disposeMap(g);
}});
})();
(function(){var p="/",o="__cA",n="0",m="qx/static",l="http://",k="https://",j="file://",i="qx.util.AliasManager",h="singleton",g=".",f="static";
qx.Class.define(i,{type:h,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cA={};
this.add(f,m);
},members:{__cA:null,_preprocess:function(a){var d=this._getDynamic();

if(d[a]===false){return a;
}else if(d[a]===undefined){if(a.charAt(0)===p||a.charAt(0)===g||a.indexOf(l)===0||a.indexOf(k)===n||a.indexOf(j)===0){d[a]=false;
return a;
}var c=a.substring(0,a.indexOf(p));
var b=this.__cA[c];

if(b!==undefined){d[a]=b+a.substring(c.length);
}}return a;
},add:function(q,r){this.__cA[q]=r;
var t=this._getDynamic();
var s={};
for(var u in t){if(u.substring(0,u.indexOf(p))===q){t[u]=r+u.substring(q.length);
s[u]=true;
}}},remove:function(e){delete this.__cA[e];
},resolve:function(v){var w=this._getDynamic();

if(v!==null){v=this._preprocess(v);
}return w[v]||v;
}},destruct:function(){this._disposeFields(o);
}});
})();
(function(){var j="/",i="qx.util.ResourceManager",h="string";
qx.Bootstrap.define(i,{statics:{__a:qx.$$resources||{},has:function(a){return !!this.__a[a];
},getData:function(g){return this.__a[g]||null;
},getImageWidth:function(k){var l=this.__a[k];
return l?l[0]:null;
},getImageHeight:function(b){var c=this.__a[b];
return c?c[1]:null;
},getImageFormat:function(o){var p=this.__a[o];
return p?p[2]:null;
},isClippedImage:function(m){var n=this.__a[m];
return n&&n.length>4;
},toUri:function(d){if(d==null){return d;
}var e=this.__a[d];

if(!e){return d;
}
if(typeof e===h){var f=e;
}else{var f=e[3];
if(!f){return d;
}}return window.qxlibraries[f].resourceUri+j+d;
}}});
})();
(function(){var u="number",t="qx.client",s="/",r="mshtml",q="0",p="",o="px",n=";",m="background-image:url(",l=");",g=")",k="background-repeat:",j="https:",f=" ",e="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(e,{statics:{__gD:[m,null,l,h,null,n,k,null,n],__gE:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__gF:function(a,top){var b=qx.bom.client.Engine;

if(b.GECKO&&b.VERSION<1.9&&a==top&&typeof a==u){top+=0.01;
}
if(a){var c=(typeof a==u)?a+o:a;
}else{c=q;
}
if(top){var d=(typeof top==u)?top+o:top;
}else{d=q;
}return c+f+d;
},compile:function(J,K,L,top){var M=this.__gF(L,top);
var N=qx.util.ResourceManager.toUri(J);

if(qx.core.Variant.isSet(t,r)){N=this.__gG(N);
}var O=this.__gD;
O[1]=N;
O[4]=M;
O[7]=K;
return O.join(p);
},getStyles:function(B,C,D,top){if(!B){return this.__gE;
}var E=this.__gF(D,top);
var F=qx.util.ResourceManager.toUri(B);

if(qx.core.Variant.isSet(t,r)){F=this.__gG(F);
}var G={backgroundPosition:E,backgroundImage:i+F+g};

if(C!=null){G.backgroundRepeat=C;
}return G;
},set:function(v,w,x,y,top){var z=this.getStyles(w,x,y,top);

for(var A in z){v.style[A]=z[A];
}},__gG:qx.core.Variant.select(t,{"mshtml":function(H){var I=p;
if(window.location.protocol===j){if(H.match(/^\/\//)!=null){I=window.location.protocol;
}else if(H.match(/^\.\//)!=null){H=H.substring(H.indexOf(s));
I=document.URL.substring(0,document.URL.lastIndexOf(s));
}else{I=window.location.href.substring(0,window.location.href.lastIndexOf(s)+1);
}}return I+H;
},"default":function(){}})}});
})();
(function(){var b="qx.bom.client.Feature";
qx.Bootstrap.define(b,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:false,VML:false,XPATH:false,__dW:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
this.QUIRKS_MODE=!this.STANDARD_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("org.w3c.dom.svg","1.0");
this.CANVAS=!!window.CanvasRenderingContext2D;
this.VML=qx.bom.client.Engine.MSHTML;
this.AIR=navigator.userAgent.indexOf("adobeair")!==-1;
this.GEARS=!!(window.google&&window.google.gears);
this.XPATH=!!document.evaluate;
}},defer:function(a){a.__dW();
}});
})();
(function(){var l="px",k="div",j="img",i="qx.client",h="",g="scale-x",f="mshtml",e="no-repeat",d="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",c="scale-y",C="repeat",B=".png",A="scale",z="webkit",y='<div style="',x="repeat-y",w='<img src="',v="qx.bom.element.Decoration",u="png",t="', sizingMethod='scale')",r="', sizingMethod='crop')",s='"/>',p='" style="',q="none",n="repeat-x",o='"></div>',m="absolute";
qx.Class.define(v,{statics:{DEBUG:false,__gP:qx.core.Variant.isSet(i,f)&&qx.bom.client.Engine.VERSION<8,__gQ:qx.core.Variant.select(i,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gR:{"scale-x":j,"scale-y":j,"scale":j,"repeat":k,"no-repeat":k,"repeat-x":k,"repeat-y":k},update:function(D,E,F,G){var I=this.getTagName(F,E);

if(I!=D.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var J=this.getAttributes(E,F,G);

if(I===j){D.src=J.src;
}if(D.style.backgroundPosition!=h&&J.style.backgroundPosition===undefined){J.style.backgroundPosition=null;
}if(D.style.clip!=h&&J.style.clip===undefined){J.style.clip=null;
}var H=qx.bom.element.Style;
H.setStyles(D,J.style);
},create:function(K,L,M){var N=this.getTagName(L,K);
var P=this.getAttributes(K,L,M);
var O=qx.bom.element.Style.compile(P.style);

if(N===j){return w+P.src+p+O+s;
}else{return y+O+o;
}},getTagName:function(a,b){if(qx.core.Variant.isSet(i,f)){if(b&&this.__gP&&this.__gQ[a]&&qx.lang.String.endsWith(b,B)){return k;
}}return this.__gR[a];
},getAttributes:function(Q,R,S){var W=qx.util.ResourceManager;
var bc=qx.io2.ImageLoader;
var bd=qx.bom.element.Background;

if(!S){S={};
}
if(!S.position){S.position=m;
}
if(qx.core.Variant.isSet(i,f)){S.fontSize=0;
S.lineHeight=0;
}else if(qx.core.Variant.isSet(i,z)){S.WebkitUserDrag=q;
}var bb=W.getImageWidth(Q)||bc.getWidth(Q);
var ba=W.getImageHeight(Q)||bc.getHeight(Q);
var X=W.getImageFormat(Q)||bc.getFormat(Q);
{};
if(this.__gP&&this.__gQ[R]&&X===u){if(S.width==null&&bb!=null){S.width=bb+l;
}
if(S.height==null&&ba!=null){S.height=ba+l;
}
if(R==e){S.filter=d+W.toUri(Q)+r;
}else{S.filter=d+W.toUri(Q)+t;
}S.backgroundImage=S.backgroundRepeat=h;
return {style:S};
}else{if(R===A){var Y=W.toUri(Q);

if(S.width==null&&bb!=null){S.width=bb+l;
}
if(S.height==null&&ba!=null){S.height=ba+l;
}return {src:Y,style:S};
}var V=W.isClippedImage(Q);

if(R===g||R===c){if(V){if(R===g){var bf=W.getData(Q);
var bh=W.getImageHeight(bf[4]);
var Y=W.toUri(bf[4]);
S.clip={top:-bf[6],height:ba};
S.height=bh+l;
if(S.top!=null){S.top=(parseInt(S.top,10)+bf[6])+l;
}else if(S.bottom!=null){S.bottom=(parseInt(S.bottom,10)+ba-bh-bf[6])+l;
}return {src:Y,style:S};
}else{var bf=W.getData(Q);
var be=W.getImageWidth(bf[4]);
var Y=W.toUri(bf[4]);
S.clip={left:-bf[5],width:bb};
S.width=be+l;
if(S.left!=null){S.left=(parseInt(S.left,10)+bf[5])+l;
}else if(S.right!=null){S.right=(parseInt(S.right,10)+bb-be-bf[5])+l;
}return {src:Y,style:S};
}}else{{};

if(R==g){S.height=ba==null?null:ba+l;
}else if(R==c){S.width=bb==null?null:bb+l;
}var Y=W.toUri(Q);
return {src:Y,style:S};
}}else{if(V&&R!==C){var bf=W.getData(Q);
var U=bd.getStyles(bf[4],R,bf[5],bf[6]);

for(var T in U){S[T]=U[T];
}
if(bb!=null&&S.width==null&&(R==x||R===e)){S.width=bb+l;
}
if(ba!=null&&S.height==null&&(R==n||R===e)){S.height=ba+l;
}return {style:S};
}else{{};
var U=bd.getStyles(Q,R);

for(var T in U){S[T]=U[T];
}
if(bb!=null&&S.width==null){S.width=bb+l;
}
if(ba!=null&&S.height==null){S.height=ba+l;
}if(S.filter){S.filter=h;
}return {style:S};
}}}}}});
})();
(function(){var A="",z="qx.client",y="boxSizing",x="cursor",w="opacity",v="clip",u="overflowY",t="overflowX",s="appearance",r="style",Y="px",X="-webkit-appearance",W="user-select",V="userSelect",U="styleFloat",T="-webkit-user-select",S="-moz-appearance",R="pixelHeight",Q="MozAppearance",P=":",H="pixelTop",I="pixelLeft",F="text-overflow",G="-moz-user-select",D="MozUserSelect",E="qx.bom.element.Style",B="WebkitUserSelect",C="-o-text-overflow",J="pixelRight",K="pixelWidth",M="pixelBottom",L=";",O="cssFloat",N="WebkitAppearance";
qx.Class.define(E,{statics:{__dK:{styleNames:{"float":qx.core.Variant.select(z,{"mshtml":U,"default":O}),"appearance":qx.core.Variant.select(z,{"gecko":Q,"webkit":N,"default":s}),"userSelect":qx.core.Variant.select(z,{"gecko":D,"webkit":B,"default":V})},cssNames:{"appearance":qx.core.Variant.select(z,{"gecko":S,"webkit":X,"default":s}),"userSelect":qx.core.Variant.select(z,{"gecko":G,"webkit":T,"default":W}),"textOverflow":qx.core.Variant.select(z,{"opera":C,"default":F})},mshtmlPixel:{width:K,height:R,left:I,right:J,top:H,bottom:M},special:{clip:1,cursor:1,opacity:1,boxSizing:1,overflowX:1,overflowY:1}},__dL:{},compile:function(bl){var bp=[];
var bt=this.__dK;
var bs=bt.special;
var bq=bt.cssNames;
var bo=this.__dL;
var br=qx.lang.String;
var name,bn,bm;

for(name in bl){bm=bl[name];

if(bm==null){continue;
}name=bq[name]||name;
if(bs[name]){switch(name){case v:bp.push(qx.bom.element.Clip.compile(bm));
break;
case x:bp.push(qx.bom.element.Cursor.compile(bm));
break;
case w:bp.push(qx.bom.element.Opacity.compile(bm));
break;
case y:bp.push(qx.bom.element.BoxSizing.compile(bm));
break;
case t:bp.push(qx.bom.element.Overflow.compileX(bm));
break;
case u:bp.push(qx.bom.element.Overflow.compileY(bm));
break;
}}else{bn=bo[name];

if(!bn){bn=bo[name]=br.hyphenate(name);
}bp.push(bn,P,bm,L);
}}return bp.join(A);
},setCss:qx.core.Variant.select(z,{"mshtml":function(bu,bv){bu.style.cssText=bv;
},"default":function(ba,bb){ba.setAttribute(r,bb);
}}),getCss:qx.core.Variant.select(z,{"mshtml":function(e){return e.style.cssText.toLowerCase();
},"default":function(f){return f.getAttribute(r);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(a,name,b,c){{};
var d=this.__dK;
name=d.styleNames[name]||name;
if(c!==false&&d.special[name]){switch(name){case v:return qx.bom.element.Clip.set(a,b);
case x:return qx.bom.element.Cursor.set(a,b);
case w:return qx.bom.element.Opacity.set(a,b);
case y:return qx.bom.element.BoxSizing.set(a,b);
case t:return qx.bom.element.Overflow.setX(a,b);
case u:return qx.bom.element.Overflow.setY(a,b);
}}a.style[name]=b!==null?b:A;
},setStyles:function(bi,bj,bk){{};

for(var name in bj){this.set(bi,name,bj[name],bk);
}},reset:function(o,name,p){var q=this.__dK;
name=q.styleNames[name]||name;
if(p!==false&&q.special[name]){switch(name){case v:return qx.bom.element.Clip.reset(o);
case x:return qx.bom.element.Cursor.reset(o);
case w:return qx.bom.element.Opacity.reset(o);
case y:return qx.bom.element.BoxSizing.reset(o);
case t:return qx.bom.element.Overflow.resetX(o);
case u:return qx.bom.element.Overflow.resetY(o);
}}o.style[name]=A;
},get:qx.core.Variant.select(z,{"mshtml":function(g,name,h,i){var n=this.__dK;
name=n.styleNames[name]||name;
if(i!==false&&n.special[name]){switch(name){case v:return qx.bom.element.Clip.get(g,h);
case x:return qx.bom.element.Cursor.get(g,h);
case w:return qx.bom.element.Opacity.get(g,h);
case y:return qx.bom.element.BoxSizing.get(g,h);
case t:return qx.bom.element.Overflow.getX(g,h);
case u:return qx.bom.element.Overflow.getY(g,h);
}}if(!g.currentStyle){return g.style[name]||A;
}switch(h){case this.LOCAL_MODE:return g.style[name]||A;
case this.CASCADED_MODE:return g.currentStyle[name]||A;
default:var m=g.currentStyle[name]||A;
if(/^-?[\.\d]+(px)?$/i.test(m)){return m;
}var l=n.mshtmlPixel[name];

if(l){var j=g.style[name];
g.style[name]=m||0;
var k=g.style[l]+Y;
g.style[name]=j;
return k;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(m)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return m;
}},"default":function(bc,name,bd,be){var bh=this.__dK;
name=bh.styleNames[name]||name;
if(be!==false&&bh.special[name]){switch(name){case v:return qx.bom.element.Clip.get(bc,bd);
case x:return qx.bom.element.Cursor.get(bc,bd);
case w:return qx.bom.element.Opacity.get(bc,bd);
case y:return qx.bom.element.BoxSizing.get(bc,bd);
case t:return qx.bom.element.Overflow.getX(bc,bd);
case u:return qx.bom.element.Overflow.getY(bc,bd);
}}switch(bd){case this.LOCAL_MODE:return bc.style[name]||A;
case this.CASCADED_MODE:if(bc.currentStyle){return bc.currentStyle[name]||A;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bf=qx.dom.Node.getDocument(bc);
var bg=bf.defaultView.getComputedStyle(bc,null);
return bg?bg[name]:A;
}}})}});
})();
(function(){var J="auto",I="px",H=",",G="clip:auto;",F="rect(",E=");",D="",C=")",B="qx.bom.element.Clip",A="string",x="rect(auto)",z="clip:rect(",y="clip",w="rect(auto,auto,auto,auto)";
qx.Class.define(B,{statics:{compile:function(j){if(!j){return G;
}var o=j.left;
var top=j.top;
var n=j.width;
var m=j.height;
var k,l;

if(o==null){k=(n==null?J:n+I);
o=J;
}else{k=(n==null?J:o+n+I);
o=o+I;
}
if(top==null){l=(m==null?J:m+I);
top=J;
}else{l=(m==null?J:top+m+I);
top=top+I;
}return z+top+H+k+H+l+H+o+E;
},get:function(a,b){var d=qx.bom.element.Style.get(a,y,b,false);
var i,top,g,f;
var c,e;

if(typeof d===A&&d!==J&&d!==D){d=qx.lang.String.trim(d);
if(/\((.*)\)/.test(d)){var h=RegExp.$1.split(H);
top=qx.lang.String.trim(h[0]);
c=qx.lang.String.trim(h[1]);
e=qx.lang.String.trim(h[2]);
i=qx.lang.String.trim(h[3]);
if(i===J){i=null;
}
if(top===J){top=null;
}
if(c===J){c=null;
}
if(e===J){e=null;
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
},set:function(p,q){if(!q){p.style.clip=w;
return;
}var v=q.left;
var top=q.top;
var u=q.width;
var t=q.height;
var r,s;

if(v==null){r=(u==null?J:u+I);
v=J;
}else{r=(u==null?J:v+u+I);
v=v+I;
}
if(top==null){s=(t==null?J:t+I);
top=J;
}else{s=(t==null?J:top+t+I);
top=top+I;
}p.style.clip=F+top+H+r+H+s+H+v+C;
},reset:function(K){K.style.clip=qx.bom.client.Engine.MSHTML?x:J;
}}});
})();
(function(){var m="n-resize",l="e-resize",k="nw-resize",j="ne-resize",i="",h="cursor:",g="qx.client",f=";",e="qx.bom.element.Cursor",d="cursor",c="hand";
qx.Class.define(e,{statics:{__dM:qx.core.Variant.select(g,{"mshtml":{"cursor":c,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"opera":{"col-resize":l,"row-resize":m,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"default":{}}),compile:function(o){return h+(this.__dM[o]||o)+f;
},get:function(a,b){return qx.bom.element.Style.get(a,d,b,false);
},set:function(p,q){p.style.cursor=this.__dM[q]||q;
},reset:function(n){n.style.cursor=i;
}}});
})();
(function(){var q="",p="qx.client",o=";",n="filter",m="opacity:",l="opacity",k="MozOpacity",j=");",i=")",h="zoom:1;filter:alpha(opacity=",e="qx.bom.element.Opacity",g="alpha(opacity=",f="-moz-opacity:";
qx.Class.define(e,{statics:{compile:qx.core.Variant.select(p,{"mshtml":function(w){if(w>=1){return q;
}
if(w<0.00001){w=0;
}return h+(w*100)+j;
},"gecko":function(E){if(E==1){E=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return f+E+o;
}else{return m+E+o;
}},"default":function(v){if(v==1){return q;
}return m+v+o;
}}),set:qx.core.Variant.select(p,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,n,qx.bom.element.Style.COMPUTED_MODE,false);
if(b>=1){a.style.filter=c.replace(/alpha\([^\)]*\)/gi,q);
return;
}
if(b<0.00001){b=0;
}if(!a.currentStyle.hasLayout){a.style.zoom=1;
}a.style.filter=c.replace(/alpha\([^\)]*\)/gi,q)+g+b*100+i;
},"gecko":function(A,B){if(B==1){B=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){A.style.MozOpacity=B;
}else{A.style.opacity=B;
}},"default":function(C,D){if(D==1){D=q;
}C.style.opacity=D;
}}),reset:qx.core.Variant.select(p,{"mshtml":function(J){var K=qx.bom.element.Style.get(J,n,qx.bom.element.Style.COMPUTED_MODE,false);
J.style.filter=K.replace(/alpha\([^\)]*\)/gi,q);
},"gecko":function(I){if(qx.bom.client.Engine.VERSION<1.7){I.style.MozOpacity=q;
}else{I.style.opacity=q;
}},"default":function(d){d.style.opacity=q;
}}),get:qx.core.Variant.select(p,{"mshtml":function(r,s){var t=qx.bom.element.Style.get(r,n,s,false);

if(t){var u=t.match(/alpha\(opacity=(.*)\)/);

if(u&&u[1]){return parseFloat(u[1])/100;
}}return 1.0;
},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,qx.bom.client.Engine.VERSION<1.7?k:l,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(x,y){var z=qx.bom.element.Style.get(x,l,y,false);

if(z!=null){return parseFloat(z);
}return 1.0;
}})}});
})();
(function(){var r="qx.client",q="",p="boxSizing",o="box-sizing",n=":",m="border-box",k="qx.bom.element.BoxSizing",j="KhtmlBoxSizing",h="-moz-box-sizing",g="WebkitBoxSizing",d=";",f="-khtml-box-sizing",e="content-box",c="-webkit-box-sizing",b="MozBoxSizing";
qx.Class.define(k,{statics:{__dN:qx.core.Variant.select(r,{"mshtml":null,"webkit":[p,j,g],"gecko":[b],"opera":[p]}),__dO:qx.core.Variant.select(r,{"mshtml":null,"webkit":[o,f,c],"gecko":[h],"opera":[o]}),__dP:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dQ:function(w){var x=this.__dP;
return x.tags[w.tagName.toLowerCase()]||x.types[w.type];
},compile:qx.core.Variant.select(r,{"mshtml":function(y){{};
},"default":function(s){var u=this.__dO;
var t=q;

if(u){for(var i=0,l=u.length;i<l;i++){t+=u[i]+n+s+d;
}}return t;
}}),get:qx.core.Variant.select(r,{"mshtml":function(v){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(v))){if(!this.__dQ(v)){return e;
}}return m;
},"default":function(C){var E=this.__dN;
var D;

if(E){for(var i=0,l=E.length;i<l;i++){D=qx.bom.element.Style.get(C,E[i],null,false);

if(D!=null&&D!==q){return D;
}}}return q;
}}),set:qx.core.Variant.select(r,{"mshtml":function(F,G){{};
},"default":function(z,A){var B=this.__dN;

if(B){for(var i=0,l=B.length;i<l;i++){z.style[B[i]]=A;
}}}}),reset:function(a){this.set(a,q);
}}});
})();
(function(){var h="CSS1Compat",g="qx.bom.Document";
qx.Class.define(g,{statics:{isQuirksMode:function(j){return (j||window).document.compatMode!==h;
},isStandardMode:function(i){return (i||window).document.compatMode===h;
},getWidth:function(d){var e=(d||window).document;
var f=qx.bom.Viewport.getWidth(d);
var scroll=e.compatMode===h?e.documentElement.scrollWidth:e.body.scrollWidth;
return Math.max(scroll,f);
},getHeight:function(a){var b=(a||window).document;
var c=qx.bom.Viewport.getHeight(a);
var scroll=b.compatMode===h?b.documentElement.scrollHeight:b.body.scrollHeight;
return Math.max(scroll,c);
}}});
})();
(function(){var d="qx.client",c="CSS1Compat",b="qx.bom.Viewport";
qx.Class.define(b,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(g){return (g||window).document.body.clientWidth;
},"webkit":function(q){return (q||window).innerWidth;
},"default":function(o){var p=(o||window).document;
return p.compatMode===c?p.documentElement.clientWidth:p.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(h){return (h||window).document.body.clientHeight;
},"webkit":function(n){return (n||window).innerHeight;
},"default":function(l){var m=(l||window).document;
return m.compatMode===c?m.documentElement.clientHeight:m.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(i){var j=(i||window).document;
return j.documentElement.scrollLeft||j.body.scrollLeft;
},"default":function(k){return (k||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(e){var f=(e||window).document;
return f.documentElement.scrollTop||f.body.scrollTop;
},"default":function(a){return (a||window).pageYOffset;
}})}});
})();
(function(){var bK="",bJ="qx.client",bI="hidden",bH="-moz-scrollbars-none",bG="overflow",bF=";",bE="overflowY",bD=":",bC="overflowX",bB="overflow:",bW="none",bV="scroll",bU="borderLeftStyle",bT="borderRightStyle",bS="div",bR="borderRightWidth",bQ="overflow-y",bP="borderLeftWidth",bO="-moz-scrollbars-vertical",bN="100px",bL="qx.bom.element.Overflow",bM="overflow-x";
qx.Class.define(bL,{statics:{__dJ:null,getScrollbarWidth:function(){if(this.__dJ!==null){return this.__dJ;
}var bk=qx.bom.element.Style;
var bm=function(W,X){return parseInt(bk.get(W,X))||0;
};
var bn=function(p){return (bk.get(p,bT)==bW?0:bm(p,bR));
};
var bl=function(b){return (bk.get(b,bU)==bW?0:bm(b,bP));
};
var bp=qx.core.Variant.select(bJ,{"mshtml":function(bd){if(bk.get(bd,bE)==bI||bd.clientWidth==0){return bn(bd);
}return Math.max(0,bd.offsetWidth-bd.clientLeft-bd.clientWidth);
},"default":function(T){if(T.clientWidth==0){var U=bk.get(T,bG);
var V=(U==bV||U==bO?16:0);
return Math.max(0,bn(T)+V);
}return Math.max(0,(T.offsetWidth-T.clientWidth-bl(T)));
}});
var bo=function(l){return bp(l)-bn(l);
};
var t=document.createElement(bS);
var s=t.style;
s.height=s.width=bN;
s.overflow=bV;
document.body.appendChild(t);
var c=bo(t);
this.__dJ=c?c:16;
document.body.removeChild(t);
return this.__dJ;
},_compile:qx.core.Variant.select(bJ,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(j,k){if(k==bI){k=bH;
}return bB+k+bF;
}:
function(f,g){return f+bD+g+bF;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(h,i){return bB+i+bF;
}:
function(bs,bt){return bs+bD+bt+bF;
},"default":function(ce,cf){return ce+bD+cf+bF;
}}),compileX:function(by){return this._compile(bM,by);
},compileY:function(w){return this._compile(bQ,w);
},getX:qx.core.Variant.select(bJ,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(I,J){var K=qx.bom.element.Style.get(I,bG,J,false);

if(K===bH){K=bI;
}return K;
}:
function(bi,bj){return qx.bom.element.Style.get(bi,bC,bj,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bw,bx){return qx.bom.element.Style.get(bw,bG,bx,false);
}:
function(bb,bc){return qx.bom.element.Style.get(bb,bC,bc,false);
},"default":function(L,M){return qx.bom.element.Style.get(L,bC,M,false);
}}),setX:qx.core.Variant.select(bJ,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(be,bf){if(bf==bI){bf=bH;
}be.style.overflow=bf;
}:
function(bu,bv){bu.style.overflowX=bv;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(q,r){q.style.overflow=r;
}:
function(Y,ba){Y.style.overflowX=ba;
},"default":function(bg,bh){bg.style.overflowX=bh;
}}),resetX:qx.core.Variant.select(bJ,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(P){P.style.overflow=bK;
}:
function(a){a.style.overflowX=bK;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(N,O){N.style.overflow=bK;
}:
function(cc,cd){cc.style.overflowX=bK;
},"default":function(B){B.style.overflowX=bK;
}}),getY:qx.core.Variant.select(bJ,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(m,n){var o=qx.bom.element.Style.get(m,bG,n,false);

if(o===bH){o=bI;
}return o;
}:
function(x,y){return qx.bom.element.Style.get(x,bE,y,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(d,e){return qx.bom.element.Style.get(d,bG,e,false);
}:
function(C,D){return qx.bom.element.Style.get(C,bE,D,false);
},"default":function(bz,bA){return qx.bom.element.Style.get(bz,bE,bA,false);
}}),setY:qx.core.Variant.select(bJ,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bq,br){if(br===bI){br=bH;
}bq.style.overflow=br;
}:
function(G,H){G.style.overflowY=H;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){bX.style.overflow=bY;
}:
function(u,v){u.style.overflowY=v;
},"default":function(R,S){R.style.overflowY=S;
}}),resetY:qx.core.Variant.select(bJ,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cb){cb.style.overflow=bK;
}:
function(Q){Q.style.overflowY=bK;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(E,F){E.style.overflow=bK;
}:
function(z,A){z.style.overflowY=bK;
},"default":function(ca){ca.style.overflowY=bK;
}})}});
})();
(function(){var o="qx.client",n="qx.io2.ImageLoader",m="load";
qx.Bootstrap.define(n,{statics:{__gT:{},__gU:{width:null,height:null},__gV:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(E){var F=this.__gT[E];
return !!(F&&F.loaded);
},isFailed:function(t){var u=this.__gT[t];
return !!(u&&u.failed);
},isLoading:function(p){var q=this.__gT[p];
return !!(q&&q.loading);
},getFormat:function(s){if(s!=null&&this.__gT[s]){return this.__gT[s]||null;
}else{return null;
}},getSize:function(w){return this.__gT[w]||this.__gU;
},getWidth:function(h){var j=this.__gT[h];
return j?j.width:null;
},getHeight:function(x){var y=this.__gT[x];
return y?y.height:null;
},load:function(a,b,c){var d=this.__gT[a];

if(!d){d=this.__gT[a]={};
}if(b&&!c){c=window;
}if(d.loaded||d.loading||d.failed){if(b){if(d.loading){d.callbacks.push(b,c);
}else{b.call(c,a,d);
}}}else{d.loading=true;
d.callbacks=[];

if(b){d.callbacks.push(b,c);
}var f=new Image();
var e=qx.lang.Function.listener(this.__gW,this,f,a);
f.onload=e;
f.onerror=e;
f.src=a;
}},__gW:function(event,z,A){var B=this.__gT[A];
if(event.type===m){B.loaded=true;
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
}},__gX:qx.core.Variant.select(o,{"gecko":function(r){return r.naturalWidth;
},"default":function(v){return v.width;
}}),__gY:qx.core.Variant.select(o,{"gecko":function(k){return k.naturalHeight;
},"default":function(g){return g.height;
}})}});
})();
(function(){var l="_window",k="_manager",j="qx.event.handler.Window";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this._manager=g;
this._window=g.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(h,i){},registerEvent:function(n,o,p){},unregisterEvent:function(c,d,f){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var r=qx.event.handler.Window.SUPPORTED_TYPES;

for(var q in r){qx.bom.Event.addNativeListener(this._window,q,this._onNativeWrapper);
}},_stopWindowObserver:function(){var b=qx.event.handler.Window.SUPPORTED_TYPES;

for(var a in b){qx.bom.Event.removeNativeListener(this._window,a,this._onNativeWrapper);
}},_onNative:function(e){if(this.isDisposed()){return;
}var t=this._window;
var w=t.document;
var u=w.documentElement;
var s=e.target||e.srcElement;

if(s==null||s===t||s===w||s===u){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,t]);
qx.event.Registration.dispatchEvent(t,event);
var v=event.getReturnValue();

if(v!=null){e.returnValue=v;
return v;
}}}},destruct:function(){this._stopWindowObserver();
this._disposeFields(k,l);
},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var h="ready",g="qx.application",f="beforeunload",d="qx.core.Init",c="shutdown";
qx.Class.define(d,{statics:{getApplication:function(){return this.__bA||null;
},__bz:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var j=qx.core.Setting.get(g);
var k=qx.Class.getByName(j);

if(k){this.__bA=new k;
var i=new Date;
this.__bA.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-i)+"ms");
var i=new Date;
this.__bA.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-i)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+j);
}},__bB:function(e){var a=this.__bA;

if(a){e.setReturnValue(a.close());
}},__bC:function(){var l=this.__bA;

if(l){l.terminate();
}}},defer:function(b){qx.event.Registration.addListener(window,h,b.__bz,b);
qx.event.Registration.addListener(window,c,b.__bC,b);
qx.event.Registration.addListener(window,f,b.__bB,b);
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
(function(){var i="qx.event.type.Native",h="_native",g="_returnValue";
qx.Class.define(i,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){arguments.callee.base.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
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
}},destruct:function(){this._disposeFields(h,g);
}});
})();
(function(){var r="groupBoxes",q="boxData",p="portal.box.Box",o="__yB",n="__yD",m="__yC",h="portal.box.Manager",g="qx.event.type.Event",f="boxes",e="_applyActiveBox",c="loaded",d="singleton";
qx.Class.define(h,{type:d,extend:qx.core.Object,statics:{dataKeyRoot:q,dataKeyGroupBoxes:r,dataKeyBoxes:f},events:{"loaded":g},properties:{activeBox:{init:null,check:p,apply:e}},members:{__yB:[],__yC:[],__yD:{},_applyActiveBox:function(w,x){if(x!=null){x.setActive(false);
}w.setActive(true);
},load:function(){this._init(window[portal.box.Manager.dataKeyRoot]);
qx.event.Registration.fireEvent(this,c);
},_init:function(y){var C,F,D,E,G,y;
var z=y[portal.box.Manager.dataKeyGroupBoxes];
var B=y[portal.box.Manager.dataKeyBoxes];
for(var F in z){C=z[F];
D=C.boxes;
F=C.id;
E={id:F,element:document.getElementById(F)};
this.__yC.push(E);
this.__yD[F]=[];
for(var k=0,l=D.length;k<l;k++){y=B[D[k]];
var A=document.getElementById(y.id);
var G=new portal.box.Box(y,A,null,F);
this.__yB.push(G);
this.__yD[F].push(G);
}}},getBoxes:function(){return this.__yB;
},getGroupBoxes:function(){return this.__yC;
},updateGroupBoxMembers:function(s,t,u){var v=qx.dom.Hierarchy.getElementIndex(u.getElement());
qx.lang.Array.remove(this.__yD[t],u);
qx.lang.Array.insertAt(this.__yD[s],u,v);
},getGroupBoxDataOfBox:function(a){for(var i=0,j=this.__yC.length,b;i<j;i++){b=this.__yD[this.__yC[i].id];

for(var k=0,l=b.length;k<l;k++){if(b[k].getId()===a){return this.__yC[i];
}}}return null;
}},destruct:function(){this._disposeFields(o,m,n);
}});
})();
(function(){var l="Boolean",k="border",j="height",i="accumsan sit amet, nibh. Nam ut est. Nullam ultricies congue ",h="erat volutpat. Praesent lorem arcu, cursus vel, congue vitae, ",g="__yH",f="div",e="1px solid orange",d="orci. Morbi nulla. Donec quis ipsum.",c="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",A="_applyActive",z="at, justo. Sed aliquam aliquam orci. Sed in purus. Aliquam ",y="relative",x="String",w="1px solid #444444",v="width",u="zIndex",t="__yE",s="__yG",r="portal.box.Box",p="click",q="position",n="Sed molestie volutpat lorem. Donec consequat magna ut ipsum. ",o="Integer enim ligula, placerat et, posuere sit amet, tempor ",m="box_content";
qx.Class.define(r,{extend:qx.core.Object,construct:function(B,C,D,E){arguments.callee.base.call(this);
this.__yE=B;
this.__yF=B.id;

if(C!=null){qx.bom.element.Style.set(C,v,B.width);
qx.bom.element.Style.set(C,j,B.height);
this.__yI(C,D);
}this.setElement(C);
this.setGroupBoxId(E);
this.__yG=null;
this.__yH=null;
if(B.resizable){this.setResizable(true);
var F={minWidth:parseInt(B.minWidth),minHeight:parseInt(B.minHeight),maxWidth:parseInt(B.maxWidth),maxHeight:parseInt(B.maxHeight),handles:B.resizeHandles};
this.__yG=new portal.box.Resizable(this,F);
}if(B.draggable){this.setDraggable(true);
this.__yH=new portal.box.Draggable(this);
}this.__yJ();
},properties:{element:{init:null},groupBoxId:{init:null,check:x},active:{check:l,init:false,apply:A},resizable:{check:l,init:false},draggable:{check:l,init:false}},members:{_applyActive:function(a,b){if(a){qx.bom.element.Style.set(this.getElement(),k,e);
}else{qx.bom.element.Style.set(this.getElement(),k,w);
}},getId:function(){return this.getElement()?this.getElement().id:null;
},getData:function(){return this.__yE;
},getDraggableComponent:function(){return this.__yH;
},getResizableComponent:function(){return this.__yG;
},__yI:function(G,H){if(H){for(var I in H){qx.bom.element.Style.set(I,H[I]);
}}qx.bom.element.Style.set(G,q,y);
qx.bom.element.Style.set(G,u,0);
qx.bom.Element.addListener(G,p,this.__yK,this,true);
},__yJ:function(){var K=c+n+o+z+h+i+d;
var J=qx.bom.Element.create(f,{"class":m});
J.innerHTML=K;
qx.dom.Element.insertEnd(J,this.getElement());
},__yK:function(e){portal.box.Manager.getInstance().setActiveBox(this);
}},destruct:function(){this.resetElement();
this._disposeFields(t,s,g);
}});
})();
(function(){var w="visibility",v="paddingRight",u="hidden",t="mouseout",s="paddingLeft",r="qx.client",q="orientation",p="borderRightWidth",o="borderLeftWidth",n="visible",bc="mousemove",bb="marginLeft",ba="mouseover",Y="marginRight",X="mshtml",W="text",V="mousedown",U='px',T="height",S="px",D="Handle",E="__yL",B="div",C="__yQ",z="portal.box.Resizable",A='paddingBottom',x='paddingLeft',y="__yN",F='paddingTop',G="__yM",K='paddingRight',J="width",M="_",L="_elementProperties",O="southeast",N="paddingBottom",I="paddingTop",R="__yP",Q="east",P="mouseup",H="south";
qx.Class.define(z,{extend:qx.core.Object,construct:function(bh,bi){arguments.callee.base.call(this);
this.__yL=bh;
this.__yM=this.__yL.getElement();
this.__yN={};
this.__yO=false;
this.__yP=null;
this.__yQ={minWidth:10,minHeight:10,maxWidth:null,maxHeight:null,autoHide:true,handles:3};

for(var name in this.__yQ){if(bi[name]){this.__yQ[name]=bi[name];
}}this.__yS();
},members:{_elementProperties:null,__yR:{orientation:null,lastCoord:{left:null,top:null}},getBox:function(){return this.__yL;
},__yS:function(){this._elementProperties={paddingTop:parseInt(qx.bom.element.Style.get(this.__yM,I)),paddingRight:parseInt(qx.bom.element.Style.get(this.__yM,v)),paddingBottom:parseInt(qx.bom.element.Style.get(this.__yM,N)),paddingLeft:parseInt(qx.bom.element.Style.get(this.__yM,s))};

switch(this.__yQ.handles){case 1:this.__yN.east=null;
break;
case 2:this.__yN.south=null;
break;
case 3:this.__yN.south=null;
this.__yN.southeast=null;
this.__yN.east=null;
break;
}for(var bg in this.__yN){var bf=this.__yN[bg]=qx.bom.Element.create(B);
qx.bom.element.Attribute.set(bf,q,bg);
qx.dom.Element.insertEnd(bf,this.__yM);

if(this.__yM.id){bf.id=this.__yM.id+M+bg;
}this.__yT(bg);
this.__yU(bg);
}},__yT:function(bk){qx.bom.element.Class.add(this.__yN[bk],bk+D);
qx.bom.element.Style.set(this.__yN[bk],w,this.__yQ.autoHide?u:n);
},__yU:function(bd){var be=this.__yN[bd];
qx.event.Registration.addListener(be,V,this.__yX,this);
qx.event.Registration.addListener(document.body,P,this.__yY,this);

if(this.__yQ.autoHide){qx.event.Registration.addListener(this.__yL.getElement(),ba,this.__yV,this);
qx.event.Registration.addListener(this.__yL.getElement(),t,this.__yW,this);
}},__yV:function(e){for(var bj in this.__yN){qx.bom.element.Style.set(this.__yN[bj],w,n);
}},__yW:function(e){if(!this.__yO){for(var bn in this.__yN){qx.bom.element.Style.set(this.__yN[bn],w,u);
}}},__yX:function(e){e.stopPropagation();
if(e.isLeftPressed()){qx.event.Registration.addListener(document.body,bc,this.__za,this,true);
this.__yO=true;
var m=e.getTarget();
this.__yR.orientation=qx.bom.element.Attribute.get(m,q);
this.__yR.lastCoord.left=e.getDocumentLeft();
this.__yR.lastCoord.top=e.getDocumentTop();
portal.box.Util.bringToFront(this.__yM);
}},__yY:function(e){e.stopPropagation();

if(this.__yO){qx.event.Registration.removeListener(document.body,bc,this.__za,this,true);
portal.box.Util.sendToBack(this.__yM);

if(this.__yQ.autoHide){for(var bm in this.__yN){qx.bom.element.Style.set(this.__yN[bm],w,u);
}}this.__yO=false;

if(qx.core.Variant.isSet(r,X)){if(document.selection.type.toLowerCase()==W){document.selection.empty();
}}}},__za:function(e){e.stopPropagation();

if(this.__yO){var bl={left:null,top:null};

switch(this.__yR.orientation){case H:bl.top=e.getDocumentTop();
break;
case O:bl.top=e.getDocumentTop();
bl.left=e.getDocumentLeft();
break;
case Q:bl.left=e.getDocumentLeft();
break;
}this.__zb(bl,this.__yR.lastCoord);
this.__yR.lastCoord.left=e.getDocumentLeft();
this.__yR.lastCoord.top=e.getDocumentTop();
}},__zb:function(a,b){var i;
var h=portal.box.Util;
var j=portal.box.Manager.getInstance().getGroupBoxDataOfBox(this.__yL.getId());
var f=portal.box.Util.getComputedDimension(j.element);

if(a.left){var i=a.left-b.left;

if(i!==0){var c=this.__yM.clientWidth;
var k=(c+i)-(this._elementProperties[x]+this._elementProperties[K]);

if((this.__yQ.minWidth==null||k>this.__yQ.minWidth)&&(this.__yQ.maxWidth==null||k<=this.__yQ.maxWidth)){if(qx.core.Variant.isSet(r,X)){var d=f.width-h.getStyleProperty(j.element,v,true)-h.getStyleProperty(this.__yM,p,true)-h.getStyleProperty(this.__yM,o,true)-h.getStyleProperty(this.__yM,Y,true)-h.getStyleProperty(this.__yM,bb,true);
}else{var d=f.width-h.getStyleProperty(j.element,v,true)-h.getStyleProperty(this.__yM,v,true)-h.getStyleProperty(this.__yM,s,true)-h.getStyleProperty(this.__yM,p,true)-h.getStyleProperty(this.__yM,o,true)-h.getStyleProperty(this.__yM,Y,true)-h.getStyleProperty(this.__yM,bb,true);
}
if(d>=k){qx.bom.element.Style.set(this.__yM,J,k+U);
}}}}
if(a.top){var i=a.top-b.top;
if(i!==0){var g=this.__yM.clientHeight;
var l=(g+i)-(this._elementProperties[F]+this._elementProperties[A]);

if((this.__yQ.minHeight==null||l>this.__yQ.minHeight)&&(this.__yQ.maxHeight==null||l<=this.__yQ.maxHeight)){qx.bom.element.Style.set(this.__yM,T,l+S);
}}}}},destruct:function(){if(this.__yQ.autoHide){qx.event.Registration.removeListener(this.__yL.getElement(),ba,this.__yV,this);
qx.event.Registration.removeListener(this.__yL.getElement(),t,this.__yW,this);
}this._disposeFields(E,C,G,y,R,L);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(x){this._manager=x;
},members:{_getParent:function(c){throw new Error("Missing implementation");
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
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var k="qx.event.handler.UserAction",j="__cS",i="__cT";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this.__cS=m;
this.__cT=m.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(g,h){},registerEvent:function(d,e,f){},unregisterEvent:function(a,b,c){}},destruct:function(){this._disposeFields(j,i);
},defer:function(l){qx.event.Registration.addHandler(l);
}});
})();
(function(){var x="keydown",w="keypress",v="qx.client",u="NumLock",t="keyup",s="Enter",r="0",q="9",p="-",o="PageUp",bI="+",bH="PrintScreen",bG="gecko",bF="A",bE="Z",bD="Left",bC="F5",bB="Down",bA="Up",bz="F11",E="F6",F="useraction",C="F3",D="keyinput",A="Insert",B="F8",y="End",z="/",M="Delete",N="*",bc="F1",X="F4",bk="Home",bf="F2",bv="F12",bp="PageDown",S="F7",by="F9",bx="F10",bw="Right",Q="text",U="Escape",W="webkit",ba="5",bd="3",bg="Meta",bm="7",br="CapsLock",G="input",H="Control",T="Space",bj="Tab",bi="Shift",bh="Pause",bo="Unidentified",bn="__dX",be="qx.event.handler.Keyboard",bl="mshtml",l="__ea",bq="mshtml|webkit",I="6",J="off",Y="Apps",m="4",n="Alt",P="2",K="Scroll",L="1",O="8",bb="Win",bt="__dY",bs="__eb",V="autoComplete",bu=",",R="Backspace";
qx.Class.define(be,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cE){arguments.callee.base.call(this);
this.__dX=cE;
this.__dY=cE.getWindow();
if(qx.core.Variant.isSet(v,bG)){this.__ea=this.__dY;
}else{this.__ea=this.__dY.document.documentElement;
}this.__eb={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cF){if(this._identifierToKeyCodeMap[cF]){return true;
}
if(cF.length!=1){return false;
}
if(cF>=r&&cF<=q){return true;
}
if(cF>=bF&&cF<=bE){return true;
}
switch(cF){case bI:case p:case N:case z:return true;
default:return false;
}}},members:{__ec:null,__dX:null,__dY:null,__ea:null,__eb:null,canHandleEvent:function(cK,cL){},registerEvent:function(ck,cl,cm){},unregisterEvent:function(b,c,d){},_fireInputEvent:function(bV,bW){var bX=this.__dX.getHandler(qx.event.handler.Focus);
var bY=bX.getActive();
if(!bY||bY.offsetWidth==0){bY=bX.getFocus();
}if(bY&&bY.offsetWidth!=0){var event=qx.event.Registration.createEvent(D,qx.event.type.KeyInput,[bV,bY,bW]);
this.__dX.dispatchEvent(bY,event);
}if(this.__dY){qx.event.Registration.fireEvent(this.__dY,F,qx.event.type.Data,[D]);
}},_fireSequenceEvent:function(f,g,h){var i=this.__dX.getHandler(qx.event.handler.Focus);
var k=i.getActive();
if(!k||k.offsetWidth==0){k=i.getFocus();
}if(!k||k.offsetWidth==0){k=this.__dX.getWindow().document.body;
}var event=qx.event.Registration.createEvent(g,qx.event.type.KeySequence,[f,k,h]);
this.__dX.dispatchEvent(k,event);
if(qx.core.Variant.isSet(v,bq)){if(g==x&&event.getDefaultPrevented()){var j=f.keyCode;

if(!(this._isNonPrintableKeyCode(j)||j==8||j==9)){this._fireSequenceEvent(f,w,h);
}}}if(this.__dY){qx.event.Registration.fireEvent(this.__dY,F,qx.event.type.Data,[g]);
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

for(var bU in (this.__eg||{})){var bT=this.__eg[bU];
Event.removeNativeListener(bT.target,w,bT.callback);
}delete (this.__eg);
},__ee:qx.core.Variant.select(v,{"mshtml":function(cn){cn=window.event||cn;
var cq=cn.keyCode;
var co=0;
var cp=cn.type;
if(!(this.__eb[cq]==x&&cp==x)){this._idealKeyHandler(cq,co,cp,cn);
}if(cp==x){if(this._isNonPrintableKeyCode(cq)||cq==8||cq==9){this._idealKeyHandler(cq,co,w,cn);
}}this.__eb[cq]=cp;
},"gecko":function(bN){var bR=this._keyCodeFix[bN.keyCode]||bN.keyCode;
var bP=bN.charCode;
var bQ=bN.type;
if(qx.bom.client.Platform.WIN){var bO=bR?this._keyCodeToIdentifier(bR):this._charCodeToIdentifier(bP);

if(!(this.__eb[bO]==x&&bQ==x)){this._idealKeyHandler(bR,bP,bQ,bN);
}this.__eb[bO]=bQ;
}else{this._idealKeyHandler(bR,bP,bQ,bN);
}this.__ef(bN.target,bQ,bR);
},"webkit":function(cg){var cj=0;
var ch=0;
var ci=cg.type;
if(qx.bom.client.Engine.VERSION<525.13){if(ci==t||ci==x){cj=this._charCode2KeyCode[cg.charCode]||cg.keyCode;
}else{if(this._charCode2KeyCode[cg.charCode]){cj=this._charCode2KeyCode[cg.charCode];
}else{ch=cg.charCode;
}}this._idealKeyHandler(cj,ch,ci,cg);
}else{cj=cg.keyCode;
if(!(this.__eb[cj]==x&&ci==x)){this._idealKeyHandler(cj,ch,ci,cg);
}if(ci==x){if(this._isNonPrintableKeyCode(cj)||cj==8||cj==9){this._idealKeyHandler(cj,ch,w,cg);
}}this.__eb[cj]=ci;
}},"opera":function(cb){this._idealKeyHandler(cb.keyCode,0,cb.type,cb);
}}),__ef:qx.core.Variant.select(v,{"gecko":function(cA,cB,cC){if(cB===x&&(cC==33||cC==34||cC==38||cC==40)&&cA.type==Q&&cA.tagName.toLowerCase()===G&&cA.getAttribute(V)!==J){if(!this.__eg){this.__eg={};
}var cD=qx.core.ObjectRegistry.toHashCode(cA);

if(this.__eg[cD]){return;
}var self=this;
this.__eg[cD]={target:cA,callback:function(bS){qx.bom.Event.stopPropagation(bS);
self.__eh(bS);
}};
qx.bom.Event.addNativeListener(cA,w,this.__eg[cD].callback);
}},"default":null}),__eh:qx.core.Variant.select(v,{"mshtml":function(cr){cr=window.event||cr;

if(this._charCode2KeyCode[cr.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cr.keyCode],0,cr.type,cr);
}else{this._idealKeyHandler(0,cr.keyCode,cr.type,cr);
}},"gecko":function(cG){var cJ=this._keyCodeFix[cG.keyCode]||cG.keyCode;
var cH=cG.charCode;
var cI=cG.type;
this._idealKeyHandler(cJ,cH,cI,cG);
},"webkit":function(bJ){if(qx.bom.client.Engine.VERSION<525.13){var bM=0;
var bK=0;
var bL=bJ.type;

if(bL==t||bL==x){bM=this._charCode2KeyCode[bJ.charCode]||bJ.keyCode;
}else{if(this._charCode2KeyCode[bJ.charCode]){bM=this._charCode2KeyCode[bJ.charCode];
}else{bK=bJ.charCode;
}}this._idealKeyHandler(bM,bK,bL,bJ);
}else{if(this._charCode2KeyCode[bJ.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bJ.keyCode],0,bJ.type,bJ);
}else{this._idealKeyHandler(0,bJ.keyCode,bJ.type,bJ);
}}},"opera":function(e){if(this._keyCodeToIdentifierMap[e.keyCode]){this._idealKeyHandler(e.keyCode,0,e.type,e);
}else{this._idealKeyHandler(0,e.keyCode,e.type,e);
}}}),_idealKeyHandler:function(cs,ct,cu,cv){if(!cs&&!ct){return;
}var cw;
if(cs){cw=this._keyCodeToIdentifier(cs);
this._fireSequenceEvent(cv,cu,cw);
}else{cw=this._charCodeToIdentifier(ct);
this._fireSequenceEvent(cv,w,cw);
this._fireInputEvent(cv,ct);
}},_specialCharCodeMap:{8:R,9:bj,13:s,27:U,32:T},_keyCodeToIdentifierMap:{16:bi,17:H,18:n,20:br,224:bg,37:bD,38:bA,39:bw,40:bB,33:o,34:bp,35:y,36:bk,45:A,46:M,112:bc,113:bf,114:C,115:X,116:bC,117:E,118:S,119:B,120:by,121:bx,122:bz,123:bv,144:u,44:bH,145:K,19:bh,91:bb,93:Y},_numpadToCharCode:{96:r.charCodeAt(0),97:L.charCodeAt(0),98:P.charCodeAt(0),99:bd.charCodeAt(0),100:m.charCodeAt(0),101:ba.charCodeAt(0),102:I.charCodeAt(0),103:bm.charCodeAt(0),104:O.charCodeAt(0),105:q.charCodeAt(0),106:N.charCodeAt(0),107:bI.charCodeAt(0),109:p.charCodeAt(0),110:bu.charCodeAt(0),111:z.charCodeAt(0)},_charCodeA:bF.charCodeAt(0),_charCodeZ:bE.charCodeAt(0),_charCode0:r.charCodeAt(0),_charCode9:q.charCodeAt(0),_isNonPrintableKeyCode:function(ca){return this._keyCodeToIdentifierMap[ca]?true:false;
},_isIdentifiableKeyCode:function(cx){if(cx>=this._charCodeA&&cx<=this._charCodeZ){return true;
}if(cx>=this._charCode0&&cx<=this._charCode9){return true;
}if(this._specialCharCodeMap[cx]){return true;
}if(this._numpadToCharCode[cx]){return true;
}if(this._isNonPrintableKeyCode(cx)){return true;
}return false;
},_keyCodeToIdentifier:function(cy){if(this._isIdentifiableKeyCode(cy)){var cz=this._numpadToCharCode[cy];

if(cz){return String.fromCharCode(cz);
}return (this._keyCodeToIdentifierMap[cy]||this._specialCharCodeMap[cy]||String.fromCharCode(cy));
}else{return bo;
}},_charCodeToIdentifier:function(cM){return this._specialCharCodeMap[cM]||String.fromCharCode(cM).toUpperCase();
},_identifierToKeyCode:function(a){return qx.event.handler.Keyboard._identifierToKeyCodeMap[a]||a.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this._disposeFields(bn,bt,l,bs);
},defer:function(cc,cd,ce){qx.event.Registration.addHandler(cc);
if(!cc._identifierToKeyCodeMap){cc._identifierToKeyCodeMap={};

for(var cf in cd._keyCodeToIdentifierMap){cc._identifierToKeyCodeMap[cd._keyCodeToIdentifierMap[cf]]=parseInt(cf,10);
}
for(var cf in cd._specialCharCodeMap){cc._identifierToKeyCodeMap[cd._specialCharCodeMap[cf]]=parseInt(cf,10);
}}
if(qx.core.Variant.isSet(v,bl)){cd._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(v,bG)){cd._keyCodeFix={12:cd._identifierToKeyCode(u)};
}else if(qx.core.Variant.isSet(v,W)){if(qx.bom.client.Engine.VERSION<525.13){cd._charCode2KeyCode={63289:cd._identifierToKeyCode(u),63276:cd._identifierToKeyCode(o),63277:cd._identifierToKeyCode(bp),63275:cd._identifierToKeyCode(y),63273:cd._identifierToKeyCode(bk),63234:cd._identifierToKeyCode(bD),63232:cd._identifierToKeyCode(bA),63235:cd._identifierToKeyCode(bw),63233:cd._identifierToKeyCode(bB),63272:cd._identifierToKeyCode(M),63302:cd._identifierToKeyCode(A),63236:cd._identifierToKeyCode(bc),63237:cd._identifierToKeyCode(bf),63238:cd._identifierToKeyCode(C),63239:cd._identifierToKeyCode(X),63240:cd._identifierToKeyCode(bC),63241:cd._identifierToKeyCode(E),63242:cd._identifierToKeyCode(S),63243:cd._identifierToKeyCode(B),63244:cd._identifierToKeyCode(by),63245:cd._identifierToKeyCode(bx),63246:cd._identifierToKeyCode(bz),63247:cd._identifierToKeyCode(bv),63248:cd._identifierToKeyCode(bH),3:cd._identifierToKeyCode(s),12:cd._identifierToKeyCode(u),13:cd._identifierToKeyCode(s)};
}else{cd._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var D="qx.client",C="mouseup",B="mousedown",A="click",z="contextmenu",y="dblclick",x="mousewheel",w="mouseover",v="mouseout",u="DOMMouseScroll",o="mousemove",t="mshtml|webkit|opera",r="__ei",n="useraction",m="__ej",q="__ek",p="qx.event.handler.Mouse",s="gecko|webkit",l="__ep";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(U){arguments.callee.base.call(this);
this.__ei=U;
this.__ej=U.getWindow();
this.__ek=this.__ej.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__el:null,__em:null,__en:null,__eo:null,__ep:null,__ei:null,__ej:null,__ek:null,canHandleEvent:function(j,k){},registerEvent:function(W,X,Y){},unregisterEvent:function(O,P,Q){},__eq:function(R,S,T){if(!T){T=R.target||R.srcElement;
}if(T&&T.nodeType){qx.event.Registration.fireEvent(T,S||R.type,qx.event.type.Mouse,[R,T,null,true,true]);
}qx.event.Registration.fireEvent(this.__ej,n,qx.event.type.Data,[S||R.type]);
},_initButtonObserver:function(){this.__el=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ek,B,this.__el);
Event.addNativeListener(this.__ek,C,this.__el);
Event.addNativeListener(this.__ek,A,this.__el);
Event.addNativeListener(this.__ek,y,this.__el);
Event.addNativeListener(this.__ek,z,this.__el);
},_initMoveObserver:function(){this.__em=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ek,o,this.__em);
Event.addNativeListener(this.__ek,w,this.__em);
Event.addNativeListener(this.__ek,v,this.__em);
},_initWheelObserver:function(){this.__en=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var ba=qx.core.Variant.isSet(D,t)?x:u;
Event.addNativeListener(this.__ek,ba,this.__en);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ek,B,this.__el);
Event.removeNativeListener(this.__ek,C,this.__el);
Event.removeNativeListener(this.__ek,A,this.__el);
Event.removeNativeListener(this.__ek,y,this.__el);
Event.removeNativeListener(this.__ek,z,this.__el);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ek,o,this.__em);
Event.removeNativeListener(this.__ek,w,this.__em);
Event.removeNativeListener(this.__ek,v,this.__em);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var e=qx.core.Variant.isSet(D,t)?x:u;
Event.removeNativeListener(this.__ek,e,this.__en);
},_onMoveEvent:function(V){this.__eq(V);
},_onButtonEvent:function(E){var F=E.type;
var G=E.target||E.srcElement;
if(qx.core.Variant.isSet(D,s)){if(G&&G.nodeType==3){G=G.parentNode;
}}
if(this.__er){this.__er(E,F,G);
}
if(this.__et){this.__et(E,F,G);
}this.__eq(E,F,G);

if(this.__es){this.__es(E,F,G);
}
if(this.__eu){this.__eu(E,F,G);
}this.__eo=F;
},_onWheelEvent:function(d){this.__eq(d,x);
},__er:qx.core.Variant.select(D,{"webkit":function(H,I,J){if(I==z){this.__eq(H,B,J);
this.__eq(H,C,J);
}},"default":null}),__es:qx.core.Variant.select(D,{"opera":function(a,b,c){if(b==C&&a.button==2){this.__eq(a,z,c);
}},"default":null}),__et:qx.core.Variant.select(D,{"mshtml":function(L,M,N){if(M==C&&this.__eo==A){this.__eq(L,B,N);
}else if(M==y){this.__eq(L,A,N);
}},"default":null}),__eu:qx.core.Variant.select(D,{"mshtml":null,"default":function(f,g,h){switch(g){case B:this.__ep=h;
break;
case C:if(h!==this.__ep){var i=qx.dom.Hierarchy.getCommonParent(h,this.__ep);
this.__eq(f,A,i);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(r,m,q,l);
},defer:function(K){qx.event.Registration.addHandler(K);
}});
})();
(function(){var b="qx.event.handler.Capture";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(c,d,e){},unregisterEvent:function(f,g,h){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var F="alias",E="copy",D="blur",C="mouseout",B="keydown",A="Ctrl",z="Shift",y="mousemove",x="move",w="mouseover",be="Alt",bd="keyup",bc="mouseup",bb="dragend",ba="on",Y="mousedown",X="qxDraggable",W="drag",V="__ez",U="__eA",M="__eC",N="drop",K="qxDroppable",L="qx.event.handler.DragDrop",I="__ew",J="droprequest",G="__eN",H="dragstart",O="__eJ",P="dragchange",R="__eB",Q="dragleave",T="dragover",S="__ev";
qx.Class.define(L,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bn){arguments.callee.base.call(this);
this.__ev=bn;
this.__ew=bn.getWindow().document.documentElement;
this.__ev.addListener(this.__ew,Y,this._onMouseDown,this);
this.__ey();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(h,i){},registerEvent:function(bp,bq,br){},unregisterEvent:function(bf,bg,bh){},addType:function(b){this.__ez[b]=true;
},addAction:function(a){this.__eA[a]=true;
},supportsType:function(bs){return !!this.__ez[bs];
},supportsAction:function(l){return !!this.__eA[l];
},getData:function(bo){if(!this.__eM||!this.__eN){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__ez[bo]){throw new Error("Unsupported data type: "+bo+"!");
}
if(!this.__eC[bo]){this.__ex=bo;
this.__eF(J,this.__eJ,false);
}
if(!this.__eC[bo]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__eC[bo]||null;
},getCurrentAction:function(){return this.__eE;
},addData:function(j,k){this.__eC[j]=k;
},getCurrentType:function(){return this.__ex;
},__ey:function(){this.__ez={};
this.__eA={};
this.__eB={};
this.__eC={};
},__eD:function(){var f=this.__eA;
var c=this.__eB;
var d=null;

if(this.__eM){if(c.Shift&&c.Ctrl&&f.alias){d=F;
}else if(c.Shift&&c.Alt&&f.copy){d=E;
}else if(c.Shift&&f.move){d=x;
}else if(c.Alt&&f.alias){d=F;
}else if(c.Ctrl&&f.copy){d=E;
}else if(f.move){d=x;
}else if(f.copy){d=E;
}else if(f.alias){d=F;
}}
if(d!=this.__eE){this.__eE=d;
this.__eF(P,this.__eJ,false);
}},__eF:function(m,n,o,p){var r=qx.event.Registration;
var q=r.createEvent(m,qx.event.type.Drag,[o,p]);

if(this.__eJ!==this.__eN){if(n==this.__eJ){q.setRelatedTarget(this.__eN);
}else{q.setRelatedTarget(this.__eJ);
}}return r.dispatchEvent(n,q);
},__eG:function(bi){while(bi&&bi.nodeType==1){if(bi.getAttribute(X)==ba){return bi;
}bi=bi.parentNode;
}return null;
},__eH:function(u){while(u&&u.nodeType==1){if(u.getAttribute(K)==ba){return u;
}u=u.parentNode;
}return null;
},__eI:function(){this.__eJ=null;
this.__ev.removeListener(this.__ew,y,this._onMouseMove,this,true);
this.__ev.removeListener(this.__ew,bc,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,D,this._onWindowBlur,this);
this.__ey();
},__eK:function(){if(this.__eL){this.__ev.removeListener(this.__ew,w,this._onMouseOver,this,true);
this.__ev.removeListener(this.__ew,C,this._onMouseOut,this,true);
this.__ev.removeListener(this.__ew,B,this._onKeyDown,this,true);
this.__ev.removeListener(this.__ew,bd,this._onKeyUp,this,true);
this.__eF(bb,this.__eJ,false);
this.__eL=false;
}this.__eM=false;
this.__eN=null;
this.__eI();
},__eM:false,_onWindowBlur:function(e){this.__eK();
},_onKeyDown:function(e){var v=e.getKeyIdentifier();

switch(v){case be:case A:case z:if(!this.__eB[v]){this.__eB[v]=true;
this.__eD();
}}},_onKeyUp:function(e){var bk=e.getKeyIdentifier();

switch(bk){case be:case A:case z:if(this.__eB[bk]){this.__eB[bk]=false;
this.__eD();
}}},_onMouseDown:function(e){if(this.__eL){return;
}var bj=this.__eG(e.getTarget());

if(bj){this.__eO=e.getDocumentLeft();
this.__eP=e.getDocumentTop();
this.__eJ=bj;
this.__ev.addListener(this.__ew,y,this._onMouseMove,this,true);
this.__ev.addListener(this.__ew,bc,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,D,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__eM){this.__eF(N,this.__eN,false,e);
}if(this.__eL){e.stopPropagation();
}this.__eK();
},_onMouseMove:function(e){if(this.__eL){if(!this.__eF(W,this.__eJ,true,e)){this.__eK();
}}else{if(Math.abs(e.getDocumentLeft()-this.__eO)>3||Math.abs(e.getDocumentTop()-this.__eP)>3){if(this.__eF(H,this.__eJ,true,e)){this.__eL=true;
this.__ev.addListener(this.__ew,w,this._onMouseOver,this,true);
this.__ev.addListener(this.__ew,C,this._onMouseOut,this,true);
this.__ev.addListener(this.__ew,B,this._onKeyDown,this,true);
this.__ev.addListener(this.__ew,bd,this._onKeyUp,this,true);
var g=this.__eB;
g.Ctrl=e.isCtrlPressed();
g.Shift=e.isShiftPressed();
g.Alt=e.isAltPressed();
this.__eD();
}else{this.__eF(bb,this.__eJ,false);
this.__eI();
}}}},_onMouseOver:function(e){var bl=e.getTarget();
var bm=this.__eH(bl);

if(bm&&bm!=this.__eN){this.__eM=this.__eF(T,bm,true,e);
this.__eN=bm;
this.__eD();
}},_onMouseOut:function(e){var s=e.getTarget();
var t=this.__eH(s);

if(t&&t==this.__eN){this.__eF(Q,this.__eN,false,e);
this.__eN=null;
this.__eM=false;
this.__eD();
}}},destruct:function(){this._disposeFields(O,G,S,I,V,U,R,M);
},defer:function(bt){qx.event.Registration.addHandler(bt);
}});
})();
(function(){var o="-",n="qx.event.handler.Element",m="_manager",l="_registeredEvents";
qx.Class.define(n,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(x){arguments.callee.base.call(this);
this._manager=x;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(p,q){},registerEvent:function(r,s,t){var w=qx.core.ObjectRegistry.toHashCode(r);
var u=w+o+s;
var v=qx.lang.Function.listener(this._onNative,this,u);
qx.bom.Event.addNativeListener(r,s,v);
this._registeredEvents[u]={element:r,type:s,listener:v};
},unregisterEvent:function(a,b,c){var f=this._registeredEvents;

if(!f){return;
}var g=qx.core.ObjectRegistry.toHashCode(a);
var d=g+o+b;
var e=this._registeredEvents[d];
qx.bom.Event.removeNativeListener(a,b,e.listener);
delete this._registeredEvents[d];
},_onNative:function(y,z){var B=this._registeredEvents;

if(!B){return;
}var A=B[z];
qx.event.Registration.fireNonBubblingEvent(A.element,A.type,qx.event.type.Native,[y]);
}},destruct:function(){var i;
var j=this._registeredEvents;

for(var k in j){i=j[k];
qx.bom.Event.removeNativeListener(i.element,i.type,i.listener);
}this._disposeFields(m,l);
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var l="qx.event.handler.Appear",k="__eQ",j="__eR",i="disappear",h="appear";
qx.Class.define(l,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){arguments.callee.base.call(this);
this.__eQ=z;
this.__eR={};
qx.event.handler.Appear.__eS[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__eS:{},refresh:function(){var a=this.__eS;

for(var b in a){a[b].refresh();
}}},members:{canHandleEvent:function(m,n){},registerEvent:function(c,d,e){var f=qx.core.ObjectRegistry.toHashCode(c);
var g=this.__eR;

if(g&&!g[f]){g[f]=c;
c.$$displayed=c.offsetWidth>0;
}},unregisterEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t);
var x=this.__eR;

if(!x){return;
}
if(x[w]){delete x[w];
t.$$displayed=null;
}},refresh:function(){var r=this.__eR;
var s;

for(var q in r){s=r[q];
var o=s.offsetWidth>0;

if((!!s.$$displayed)!==o){s.$$displayed=o;
var p=qx.event.Registration.createEvent(o?h:i);
this.__eQ.dispatchEvent(s,p);
}}}},destruct:function(){this._disposeFields(k,j);
delete qx.event.handler.Appear.__eS[this.$$hash];
},defer:function(y){qx.event.Registration.addHandler(y);
}});
})();
(function(){var x="mshtml",w="",v="qx.client",u=">",t="<",s=" ",r="='",q="http://www.w3.org/1999/xhtml",p="qx.bom.Element",o="div",m="' ",n="></";
qx.Class.define(p,{statics:{__eT:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,y,z){if(!z){z=window;
}
if(!name){throw new Error("The tag name is missing!");
}var B=this.__eT;
var A=w;

for(var D in y){if(B[D]){A+=D+r+y[D]+m;
}}var E;
if(A!=w){if(qx.bom.client.Engine.MSHTML){E=z.document.createElement(t+name+s+A+u);
}else{var C=z.document.createElement(o);
C.innerHTML=t+name+s+A+n+name+u;
E=C.firstChild;
}}else{if(z.document.createElementNS){E=z.document.createElementNS(q,name);
}else{E=z.document.createElement(name);
}}
for(var D in y){if(!B[D]){qx.bom.element.Attribute.set(E,D,y[D]);
}}return E;
},empty:function(a){return a.innerHTML=w;
},addListener:function(U,V,W,self,X){return qx.event.Registration.addListener(U,V,W,self,X);
},removeListener:function(f,g,h,self,k){return qx.event.Registration.removeListener(f,g,h,self,k);
},removeListenerById:function(b,c){return qx.event.Registration.removeListenerById(b,c);
},hasListener:function(ba,bb,bc){return qx.event.Registration.hasListener(ba,bb,bc);
},focus:function(H){qx.event.Registration.getManager(H).getHandler(qx.event.handler.Focus).focus(H);
},blur:function(d){qx.event.Registration.getManager(d).getHandler(qx.event.handler.Focus).blur(d);
},activate:function(Y){qx.event.Registration.getManager(Y).getHandler(qx.event.handler.Focus).activate(Y);
},deactivate:function(e){qx.event.Registration.getManager(e).getHandler(qx.event.handler.Focus).deactivate(e);
},capture:function(G){qx.event.Registration.getManager(G).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(G);
},releaseCapture:function(F){qx.event.Registration.getManager(F).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(F);
},clone:function(I,J){var M;

if(J||(qx.core.Variant.isSet(v,x)&&!qx.xml.Document.isXmlDocument(I))){var Q=qx.event.Registration.getManager(I);
var K=qx.dom.Hierarchy.getDescendants(I);
K.push(I);
}if(qx.core.Variant.isSet(v,x)){for(var i=0,l=K.length;i<l;i++){Q.toggleAttachedEvents(K[i],false);
}}var M=I.cloneNode(true);
if(qx.core.Variant.isSet(v,x)){for(var i=0,l=K.length;i<l;i++){Q.toggleAttachedEvents(K[i],true);
}}if(J===true){var T=qx.dom.Hierarchy.getDescendants(M);
T.push(M);
var L,O,S,N;

for(var i=0,R=K.length;i<R;i++){S=K[i];
L=Q.serializeListeners(S);

if(L.length>0){O=T[i];

for(var j=0,P=L.length;j<P;j++){N=L[j];
Q.addListener(O,N.type,N.handler,N.self,N.capture);
}}}}return M;
}}});
})();
(function(){var I="qx.client",H="blur",G="focus",F="mousedown",E="on",D="mouseup",C="DOMFocusOut",B="DOMFocusIn",A="selectstart",z="onmousedown",bg="onfocusout",bf="onfocusin",be="onmouseup",bd="onselectstart",bc="draggesture",bb="_document",ba="_root",Y="qx.event.handler.Focus",X="_applyFocus",W="_window",P="deactivate",Q="_applyActive",N="focusin",O="qxSelectable",L="tabIndex",M="off",J="_body",K="activate",R="focusout",S="__mouseActive",U="_manager",T="qxKeepFocus",V="qxKeepActive";
qx.Class.define(Y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bh){arguments.callee.base.call(this);
this._manager=bh;
this._window=bh.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:Q,nullable:true},focus:{apply:X,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{canHandleEvent:function(x,y){},registerEvent:function(o,p,q){},unregisterEvent:function(f,g,h){},focus:function(bI){try{bI.focus();
}catch(d){}this.setFocus(bI);
this.setActive(bI);
},activate:function(w){this.setActive(w);
},blur:function(bl){try{bl.blur();
}catch(bm){}
if(this.getActive()===bl){this.resetActive();
}
if(this.getFocus()===bl){this.resetFocus();
}},deactivate:function(s){if(this.getActive()===s){this.resetActive();
}},tryActivate:function(u){var v=this.__fs(u);

if(v){this.setActive(v);
}},__eU:function(bw,bx,by,bz){var bB=qx.event.Registration;
var bA=bB.createEvent(by,qx.event.type.Focus,[bw,bx,bz]);
bB.dispatchEvent(bw,bA);
},_windowFocused:true,__eV:function(){if(this._windowFocused){this._windowFocused=false;
this.__eU(this._window,null,H,false);
}},__eW:function(){if(!this._windowFocused){this._windowFocused=true;
this.__eU(this._window,null,G,false);
}},_initObserver:qx.core.Variant.select(I,{"gecko":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fa=qx.lang.Function.listener(this.__fm,this);
this.__fb=qx.lang.Function.listener(this.__fl,this);
this.__fc=qx.lang.Function.listener(this.__fg,this);
this._document.addEventListener(F,this.__eX,true);
this._document.addEventListener(D,this.__eY,true);
this._window.addEventListener(G,this.__fa,true);
this._window.addEventListener(H,this.__fb,true);
this._window.addEventListener(bc,this.__fc,true);
},"mshtml":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fd=qx.lang.Function.listener(this.__fh,this);
this.__fe=qx.lang.Function.listener(this.__fi,this);
this.__ff=qx.lang.Function.listener(this.__fp,this);
this._document.attachEvent(z,this.__eX);
this._document.attachEvent(be,this.__eY);
this._document.attachEvent(bf,this.__fd);
this._document.attachEvent(bg,this.__fe);
this._document.attachEvent(bd,this.__ff);
},"webkit":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fe=qx.lang.Function.listener(this.__fi,this);
this.__fa=qx.lang.Function.listener(this.__fm,this);
this.__fb=qx.lang.Function.listener(this.__fl,this);
this.__ff=qx.lang.Function.listener(this.__fp,this);
this._document.addEventListener(F,this.__eX,true);
this._document.addEventListener(D,this.__eY,true);
this._document.addEventListener(A,this.__ff,false);
this._window.addEventListener(C,this.__fe,true);
this._window.addEventListener(G,this.__fa,true);
this._window.addEventListener(H,this.__fb,true);
},"opera":function(){this.__eX=qx.lang.Function.listener(this.__fn,this);
this.__eY=qx.lang.Function.listener(this.__fo,this);
this.__fd=qx.lang.Function.listener(this.__fh,this);
this.__fe=qx.lang.Function.listener(this.__fi,this);
this._document.addEventListener(F,this.__eX,true);
this._document.addEventListener(D,this.__eY,true);
this._window.addEventListener(B,this.__fd,true);
this._window.addEventListener(C,this.__fe,true);
}}),_stopObserver:qx.core.Variant.select(I,{"gecko":function(){this._document.removeEventListener(F,this.__eX,true);
this._document.removeEventListener(D,this.__eY,true);
this._window.removeEventListener(G,this.__fa,true);
this._window.removeEventListener(H,this.__fb,true);
this._window.removeEventListener(bc,this.__fc,true);
},"mshtml":function(){this._document.detachEvent(z,this.__eX);
this._document.detachEvent(be,this.__eY);
this._document.detachEvent(bf,this.__fd);
this._document.detachEvent(bg,this.__fe);
this._document.detachEvent(bd,this.__ff);
},"webkit":function(){this._document.removeEventListener(F,this.__eX,true);
this._document.removeEventListener(A,this.__ff,false);
this._window.removeEventListener(B,this.__fd,true);
this._window.removeEventListener(C,this.__fe,true);
this._window.removeEventListener(G,this.__fa,true);
this._window.removeEventListener(H,this.__fb,true);
},"opera":function(){this._document.removeEventListener(F,this.__eX,true);
this._window.removeEventListener(B,this.__fd,true);
this._window.removeEventListener(C,this.__fe,true);
this._window.removeEventListener(G,this.__fa,true);
this._window.removeEventListener(H,this.__fb,true);
}}),__fg:qx.core.Variant.select(I,{"gecko":function(e){if(!this.__ft(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null}),__fh:qx.core.Variant.select(I,{"mshtml":function(e){this.__eW();
var b=e.srcElement;
var a=this.__fr(b);

if(a){this.setFocus(a);
}this.tryActivate(b);
},"opera":function(e){var n=e.target;

if(n==this._document||n==this._window){this.__eW();

if(this.__fj){this.setFocus(this.__fj);
delete this.__fj;
}
if(this.__fk){this.setActive(this.__fk);
delete this.__fk;
}}else{this.setFocus(n);
this.tryActivate(n);
if(!this.__ft(n)){n.selectionStart=0;
n.selectionEnd=0;
}}},"default":null}),__fi:qx.core.Variant.select(I,{"mshtml":function(e){if(!e.toElement){this.__eV();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var r=e.target;

if(r===this.getFocus()){this.resetFocus();
}
if(r===this.getActive()){this.resetActive();
}},"opera":function(e){var c=e.target;

if(c==this._document){this.__eV();
this.__fj=this.getFocus();
this.__fk=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(c===this.getFocus()){this.resetFocus();
}
if(c===this.getActive()){this.resetActive();
}}},"default":null}),__fl:qx.core.Variant.select(I,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__eV();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__eV();
this.__fj=this.getFocus();
this.__fk=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null}),__fm:qx.core.Variant.select(I,{"gecko":function(e){var m=e.target;

if(m===this._window||m===this._document){this.__eW();
m=this._body;
}this.setFocus(m);
this.tryActivate(m);
},"webkit":function(e){var l=e.target;

if(l===this._window||l===this._document){this.__eW();

if(this.__fj){this.setFocus(this.__fj);
delete this.__fj;
}
if(this.__fk){this.setActive(this.__fk);
delete this.__fk;
}}else{this.setFocus(l);
this.tryActivate(l);
}},"default":null}),__fn:qx.core.Variant.select(I,{"gecko":function(e){var br=e.target;
var bp=this.__fr(br);
var bq=this.__ft(br);

if(!bq){qx.bom.Event.preventDefault(e);
if(bp){bp.focus();
}}else if(!bp){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bv=e.srcElement;
var bu=this.__fr(bv);

if(bu){if(!this.__ft(bv)){bv.unselectable=E;
document.selection.empty();
bu.focus();
}}else{qx.bom.Event.preventDefault(e);
if(!this.__ft(bv)){bv.unselectable=E;
}}},"webkit":function(e){var bo=e.target;
var bn=this.__fr(bo);

if(bn){this.setFocus(bn);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bH=e.target;
var bF=this.__fr(bH);

if(!this.__ft(bH)){qx.bom.Event.preventDefault(e);
if(bF){var bG=this.getFocus();

if(bG&&bG.selectionEnd){bG.selectionStart=0;
bG.selectionEnd=0;
bG.blur();
}if(bF){this.setFocus(bF);
}}}else if(bF){this.setFocus(bF);
}},"default":null}),__fo:qx.core.Variant.select(I,{"mshtml":function(e){var bk=e.srcElement;

if(bk.unselectable){bk.unselectable=M;
}this.tryActivate(bk);
},"gecko":function(e){var t=e.target;

while(t&&t.offsetWidth===undefined){t=t.parentNode;
}
if(t){this.tryActivate(t);
}},"webkit|opera":function(e){this.tryActivate(e.target);
},"default":null}),__fp:qx.core.Variant.select(I,{"mshtml|webkit":function(e){if(!this.__ft(e.srcElement)){qx.bom.Event.preventDefault(e);
}},"default":null}),__fq:function(i){var j=qx.bom.element.Attribute.get(i,L);

if(j>=1){return true;
}var k=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(j>=0&&k[i.tagName]){return true;
}return false;
},__fr:function(bL){while(bL&&bL.nodeType===1){if(bL.getAttribute(T)==E){return null;
}
if(this.__fq(bL)){return bL;
}bL=bL.parentNode;
}return this._body;
},__fs:function(bi){var bj=bi;

while(bi&&bi.nodeType===1){if(bi.getAttribute(V)==E){return null;
}bi=bi.parentNode;
}return bj;
},__ft:function(bM){while(bM&&bM.nodeType===1){var bN=bM.getAttribute(O);

if(bN!=null){return bN===E;
}bM=bM.parentNode;
}return true;
},_applyActive:function(bs,bt){if(bt){this.__eU(bt,bs,P,true);
}
if(bs){this.__eU(bs,bt,K,true);
}},_applyFocus:function(bJ,bK){if(bK){this.__eU(bK,bJ,R,true);
}
if(bJ){this.__eU(bJ,bK,N,true);
}if(bK){this.__eU(bK,bJ,H,false);
}
if(bJ){this.__eU(bJ,bK,G,false);
}}},destruct:function(){this._stopObserver();
this._disposeFields(U,W,bb,ba,J,S);
},defer:function(bC){qx.event.Registration.addHandler(bC);
var bD=bC.FOCUSABLE_ELEMENTS;

for(var bE in bD){bD[bE.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
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
(function(){var k="qx.client",j="left",i="right",h="middle",g="dblclick",f="click",e="none",d="contextmenu",c="qx.event.type.Mouse";
qx.Class.define(c,{extend:qx.event.type.Dom,members:{init:function(l,m,n,o,p){arguments.callee.base.call(this,l,m,n,o,p);

if(!n){this._relatedTarget=qx.bom.Event.getRelatedTarget(l);
}return this;
},__fv:qx.core.Variant.select(k,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case f:case g:return j;
case d:return i;
default:return this.__fv[this._native.button]||e;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(k,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(k,{"mshtml":function(){var b=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(b);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
},getWheelDelta:qx.core.Variant.select(k,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
}})}});
})();
(function(){var F="qx.client",E="qx.dom.Hierarchy",D="previousSibling",C="*",B="nextSibling",A="parentNode";
qx.Class.define(E,{statics:{getNodeIndex:function(b){var c=0;

while(b&&(b=b.previousSibling)){c++;
}return c;
},getElementIndex:function(P){var Q=0;
var R=qx.dom.Node.ELEMENT;

while(P&&(P=P.previousSibling)){if(P.nodeType==R){Q++;
}}return Q;
},getNextElementSibling:function(e){while(e&&(e=e.nextSibling)&&!qx.dom.Node.isElement(e)){continue;
}return e||null;
},getPreviousElementSibling:function(d){while(d&&(d=d.previousSibling)&&!qx.dom.Node.isElement(d)){continue;
}return d||null;
},contains:qx.core.Variant.select(F,{"webkit|mshtml|opera":function(v,w){if(qx.dom.Node.isDocument(v)){var x=qx.dom.Node.getDocument(w);
return v&&x==v;
}else if(qx.dom.Node.isDocument(w)){return false;
}else{return v.contains(w);
}},"gecko":function(U,V){return !!(U.compareDocumentPosition(V)&16);
},"default":function(J,K){while(K){if(J==K){return true;
}K=K.parentNode;
}return false;
}}),isRendered:function(t){if(!t.offsetParent){return false;
}var u=t.ownerDocument||t.document;
if(u.body.contains){return u.body.contains(t);
}if(u.compareDocumentPosition){return !!(u.compareDocumentPosition(t)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(q,r){return this.contains(r,q);
},getCommonParent:qx.core.Variant.select(F,{"mshtml|opera":function(y,z){if(y===z){return y;
}
while(y&&qx.dom.Node.isElement(y)){if(y.contains(z)){return y;
}y=y.parentNode;
}return null;
},"default":function(k,l){if(k===l){return k;
}var m={};
var p=qx.core.ObjectRegistry;
var o,n;

while(k||l){if(k){o=p.toHashCode(k);

if(m[o]){return m[o];
}m[o]=k;
k=k.parentNode;
}
if(l){n=p.toHashCode(l);

if(m[n]){return m[n];
}m[n]=l;
l=l.parentNode;
}}return null;
}}),getAncestors:function(s){return this._recursivelyCollect(s,A);
},getChildElements:function(L){L=L.firstChild;

if(!L){return [];
}var M=this.getNextSiblings(L);

if(L.nodeType===1){M.unshift(L);
}return M;
},getDescendants:function(O){return qx.lang.Array.fromCollection(O.getElementsByTagName(C));
},getFirstDescendant:function(S){S=S.firstChild;

while(S&&S.nodeType!=1){S=S.nextSibling;
}return S;
},getLastDescendant:function(N){N=N.lastChild;

while(N&&N.nodeType!=1){N=N.previousSibling;
}return N;
},getPreviousSiblings:function(f){return this._recursivelyCollect(f,D);
},getNextSiblings:function(T){return this._recursivelyCollect(T,B);
},_recursivelyCollect:function(g,h){var i=[];

while(g=g[h]){if(g.nodeType==1){i.push(g);
}}return i;
},getSiblings:function(j){return this.getPreviousSiblings(j).reverse().concat(this.getNextSiblings(j));
},isEmpty:function(a){a=a.firstChild;

while(a){if(a.nodeType===qx.dom.Node.ELEMENT||a.nodeType===qx.dom.Node.TEXT){return false;
}a=a.nextSibling;
}return true;
},cleanWhitespace:function(G){var H=G.firstChild;

while(H){var I=H.nextSibling;

if(H.nodeType==3&&!/\S/.test(H.nodeValue)){G.removeChild(H);
}H=I;
}}}});
})();
(function(){var g="qx.client",f="qx.event.type.Drag";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(h,i){arguments.callee.base.call(this,false,h);

if(i){this._native=i.getNativeEvent()||null;
this._originalTarget=i.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=arguments.callee.base.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){if(this._native==null){return 0;
}var d=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(d);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){if(this._native==null){return 0;
}var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(a);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(e){this.getManager().addType(e);
},addAction:function(j){this.getManager().addAction(j);
},supportsType:function(k){return this.getManager().supportsType(k);
},supportsAction:function(o){return this.getManager().supportsAction(o);
},addData:function(b,c){this.getManager().addData(b,c);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var n="__fy",m="blur",k="__fw",j="__fx",h="losecapture",g="capture",f="click",e="qx.event.dispatch.MouseCapture",d="focus",c="scroll";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(p){arguments.callee.base.call(this);
this.__fw=p;
this.__fx=p.getWindow();
p.addListener(this.__fx,m,this.releaseCapture,this);
p.addListener(this.__fx,d,this.releaseCapture,this);
p.addListener(this.__fx,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fy:null,__fw:null,__fx:null,canDispatchEvent:function(a,event,b){return (this.__fy&&this.__fz[b]);
},dispatchEvent:function(r,event,s){if(s==f){event.stopPropagation();
this.releaseCapture();
return;
}var t=this.__fw.getListeners(this.__fy,s,false);

if(t){event.setCurrentTarget(this.__fy);
event.setEventPhase(qx.event.type.Event.AT_TARGET);

for(var i=0,l=t.length;i<l;i++){var u=t[i].context||event.getCurrentTarget();
t[i].handler.call(u,event);
}}},__fz:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(o){if(this.__fy===o){return;
}
if(this.__fy){this.releaseCapture();
}this.__fy=o;
qx.event.Registration.fireEvent(o,g,qx.event.type.Event,[true,false]);
},releaseCapture:function(){var v=this.__fy;

if(!v){return;
}this.__fy=null;
qx.event.Registration.fireEvent(v,h,qx.event.type.Event,[true,false]);
}},destruct:function(){this._disposeFields(n,k,j);
},defer:function(q){qx.event.Registration.addDispatcher(q);
}});
})();
(function(){var u="qx.client",t="",s="mshtml",r="'",q="SelectionLanguage",p="qx.xml.Document",o=" />",n="MSXML2.DOMDocument.3.0",m='<\?xml version="1.0" encoding="utf-8"?>\n<',k="MSXML2.XMLHTTP.3.0",f="MSXML2.XMLHTTP.6.0",j=" xmlns='",h="text/xml",e="XPath",d="MSXML2.DOMDocument.6.0",g="HTML";
qx.Bootstrap.define(p,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(E){if(E.nodeType===9){return E.documentElement.nodeName!==g;
}else if(E.ownerDocument){return this.isXmlDocument(E.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(u,{"mshtml":function(v,w){var x=new ActiveXObject(this.DOMDOC);
x.setProperty(q,e);

if(w){var y=m;
y+=w;

if(v){y+=j+v+r;
}y+=o;
x.loadXML(y);
}return x;
},"default":function(z,A){return document.implementation.createDocument(z||t,A||t,null);
}}),fromString:qx.core.Variant.select(u,{"mshtml":function(C){var D=qx.xml.Document.create();
D.loadXML(C);
return D;
},"default":function(F){var G=new DOMParser();
return G.parseFromString(F,h);
}})},defer:function(a){if(qx.core.Variant.isSet(u,s)){var b=[d,n];
var c=[f,k];

for(var i=0,l=b.length;i<l;i++){try{new ActiveXObject(b[i]);
new ActiveXObject(c[i]);
}catch(B){continue;
}a.DOMDOC=b[i];
a.XMLHTTP=c[i];
break;
}}}});
})();
(function(){var k="qx.dom.Element";
qx.Class.define(k,{statics:{hasChild:function(parent,m){return m.parentNode===parent;
},hasChildren:function(A){return !!A.firstChild;
},hasChildElements:function(B){B=B.firstChild;

while(B){if(B.nodeType===1){return true;
}B=B.nextSibling;
}return false;
},getParentElement:function(t){return t.parentNode;
},isInDom:function(q,r){var s=r.document.getElementsByTagName(q.nodeName);

for(var i=0,l=s.length;i<l;i++){if(s[i]===q){return true;
}}return false;
},insertAt:function(u,parent,v){var w=parent.childNodes[v];

if(w){parent.insertBefore(u,w);
}else{parent.appendChild(u);
}return true;
},insertBegin:function(p,parent){if(parent.firstChild){this.insertBefore(p,parent.firstChild);
}else{parent.appendChild(p);
}},insertEnd:function(j,parent){parent.appendChild(j);
},insertBefore:function(f,g){g.parentNode.insertBefore(f,g);
return true;
},insertAfter:function(y,z){var parent=z.parentNode;

if(z==parent.lastChild){parent.appendChild(y);
}else{return this.insertBefore(y,z.nextSibling);
}return true;
},remove:function(h){if(!h.parentNode){return false;
}h.parentNode.removeChild(h);
return true;
},removeChild:function(x,parent){if(x.parentNode!==parent){return false;
}parent.removeChild(x);
return true;
},removeChildAt:function(a,parent){var b=parent.childNodes[a];

if(!b){return false;
}parent.removeChild(b);
return true;
},replaceChild:function(n,o){if(!o.parentNode){return false;
}o.parentNode.replaceChild(n,o);
return true;
},replaceAt:function(c,d,parent){var e=parent.childNodes[d];

if(!e){return false;
}parent.replaceChild(c,e);
return true;
}}});
})();
(function(){var g="(\\s|$)",f="(^|\\s)",e="",d="qx.bom.element.Class",c=" ",b="$2";
qx.Class.define(d,{statics:{add:function(h,name){if(!this.has(h,name)){h.className+=(h.className?c:e)+name;
}return name;
},get:function(a){return a.className;
},has:function(n,name){var o=new RegExp(f+name+g);
return o.test(n.className);
},remove:function(i,name){var j=new RegExp(f+name+g);
i.className=i.className.replace(j,b);
return name;
},replace:function(k,l,m){this.remove(k,l);
return this.add(k,m);
},toggle:function(p,name,q){if(q==null){q=!this.has(p,name);
}q?this.add(p,name):this.remove(p,name);
return name;
}}});
})();
(function(){var m="zIndex",l="mshtml",k="height",j="portal.box.Util",i="width",h="qx.client",g="auto";
qx.Class.define(j,{statics:{__zc:1000,bringToFront:function(n){var o=this.getStyleProperty(n,m);
o=o==g?0:o;
qx.bom.element.Style.set(n,m,o+portal.box.Util.__zc);
},sendToBack:function(e){var f=this.getStyleProperty(e,m);
qx.bom.element.Style.set(e,m,f-portal.box.Util.__zc);
},getStyleProperty:function(a,b,c){var d=qx.bom.element.Style.get(a,b);
return c?parseInt(d):d;
},getComputedDimension:function(p){var q=portal.box.Util.getStyleProperty(p,i,true);
var r=portal.box.Util.getStyleProperty(p,k,true);

if(qx.core.Variant.isSet(h,l)){q=q==0?p.offsetWidth:q;
r=r==0?p.offsetHeight:r;
}return {width:q,height:r};
}}});
})();
(function(){var w="mouseup",v="dragstart",u="margin",t="mousemove",s="qx.client",r="__zf",q="mshtml",p="mousedown",o="portal.box.Draggable",n="__ze",g="webkit",m="borderTopWidth",j="mouseover",d="__zd",c="paddingTop",i="drag",h="dragend",k="div",b="move",l="dragHandle",f="cursor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(x){arguments.callee.base.call(this);
this.__zd=x;
this.__ze=x.getElement();
this.__zf=null;
this.__zg=null;
this.__zh();
},members:{getBox:function(){return this.__zd;
},getElement:function(){return this.__ze;
},__zh:function(){this.__zi();
this.__zj();
},__zi:function(){this.__zf=qx.bom.Element.create(k);
qx.bom.element.Class.add(this.__zf,l);
qx.dom.Element.insertBegin(this.__zf,this.__ze);
},__zj:function(){qx.bom.Element.addListener(this.__zf,p,this._onMouseDown,this);
qx.bom.Element.addListener(this.__zf,j,function(e){qx.bom.element.Style.set(this,f,b);
},this.__zf);
qx.bom.Element.addListener(this.__zf,v,this._onDragStart,this);
qx.bom.Element.addListener(this.__zf,h,portal.dragdrop.Manager.getInstance().stopSession,portal.dragdrop.Manager.getInstance());
qx.bom.Element.addListener(this.__zf,i,this._onDragMove,this);
},_onMouseDown:function(e){if(e.isLeftPressed()){if(qx.core.Variant.isSet(s,q)){var top=qx.bom.element.Location.getTop(this.__ze,u)-parseInt(qx.bom.element.Style.get(this.__ze,c))-parseInt(qx.bom.element.Style.get(this.__ze,m));
}else if(qx.core.Variant.isSet(s,g)){var top=qx.bom.element.Location.getTop(this.__ze,u);
}else{var top=qx.bom.element.Location.getTop(this.__ze);
}this.__zg={left:e.getDocumentLeft()-qx.bom.element.Location.getLeft(this.__ze),top:e.getDocumentTop()-top};
qx.bom.Element.addListener(document.body,w,this._onMouseUp,this,true);
qx.event.Registration.fireEvent(this.__zf,v,qx.event.type.Event);
}},_onMouseUp:function(e){e.stopPropagation();

if(portal.dragdrop.Manager.getInstance().isSessionActive()){qx.event.Registration.removeListener(document.body,t,this._onDragMove,this,true);
}qx.bom.Element.removeListener(document.body,w,this._onMouseUp,this,true);
portal.dragdrop.Manager.getInstance().stopSession();
},_onDragStart:function(e){portal.box.Manager.getInstance().setActiveBox(this.__zd);
portal.dragdrop.Manager.getInstance().startSession(this.__zd);
qx.event.Registration.addListener(document.body,t,this._onDragMove,this,true);
},_onDragMove:function(e){e.stopPropagation();
var a=e.getDocumentLeft()-this.__zg.left;
var top=e.getDocumentTop()-this.__zg.top;
qx.event.Timer.once(function(){this.checkGroupBox(a);
this.onDragMove(top,a);
},portal.dragdrop.Manager.getInstance(),0);
}},destruct:function(){this._disposeFields(d,r,n);
}});
})();
(function(){var o="margin",n="qx.client",m="px",l="px;",k="paddingTop",h="mshtml",g="webkit",f="border",e="Boolean",d="paddingLeft",L="div",K="absolute",J="singleton",I="top:",H="width:",G="borderTopWidth",F="__zq",E="height:",D="__zn",C="spring",v="__zl",w="paddingBottom",t="top",u="__currentBoxElement",r="finish",s="left:",p="portal.box.Box",q="__zk",x="opacity:0.5;margin:0;position:absolute;",y="__zo",A="left",z="portal.dragdrop.Manager",B="1px dashed red";
qx.Class.define(z,{type:J,extend:qx.core.Object,properties:{activeBox:{check:p,init:null,nullable:true},sessionActive:{check:e,init:false}},members:{__zk:{top:null,height:null},__zl:null,__zm:false,__zn:{top:0,left:0},__zo:null,startSession:function(M){this.setSessionActive(true);
this.setActiveBox(M);
this.__zl=M.getGroupBoxId();
this.__zp();
if(this.__zo==null){this.__zo={};
var N=portal.box.Manager.getInstance().getGroupBoxes();

for(var i=0,j=N.length;i<j;i++){this.__zo[N[i].element.id]={left:qx.bom.element.Location.getLeft(N[i].element),right:qx.bom.element.Location.getLeft(N[i].element)+qx.bom.element.Dimension.getWidth(N[i].element)};
}}},__zp:function(){if(!this.__zq){this.__zq=qx.bom.Element.create(L);
}var c=this.getActiveBox().getElement();
var a=portal.box.Util.getComputedDimension(c);
this.__zr(c,this.__zq);
qx.bom.element.Class.add(this.__zq,qx.bom.element.Class.get(c));

if(qx.core.Variant.isSet(n,h)){var top=qx.bom.element.Location.getTop(c,o)-parseInt(qx.bom.element.Style.get(c,k))-parseInt(qx.bom.element.Style.get(c,G));
}else if(qx.core.Variant.isSet(n,g)){var top=qx.bom.element.Location.getTop(c,o);
}else{var top=qx.bom.element.Location.getTop(c);
}var b=x+I+top+l+s+qx.bom.element.Location.getLeft(c)+l+H+a.width+l+E+a.height+m;
qx.bom.element.Style.setCss(this.__zq,b);
qx.bom.element.Style.set(c,f,B);
qx.dom.Node.getBodyElement(c).appendChild(this.__zq);
portal.box.Util.bringToFront(this.__zq);
},__zr:function(S,T){while(S.firstChild){T.appendChild(S.firstChild);
}},stopSession:function(e){this.setSessionActive(false);
var Q=this.getActiveBox();
var P=Q.getElement();

if(qx.core.Variant.isSet(n,h)){var top=qx.bom.element.Location.getTop(P,o)-parseInt(qx.bom.element.Style.get(P,k))-parseInt(qx.bom.element.Style.get(P,w));
var R=qx.bom.element.Location.getLeft(P,o)-parseInt(qx.bom.element.Style.get(P,d));
}else if(qx.core.Variant.isSet(n,g)){var top=qx.bom.element.Location.getTop(P,o);
var R=qx.bom.element.Location.getLeft(P,o);
}else{var top=qx.bom.element.Location.getTop(P);
var R=qx.bom.element.Location.getLeft(P);
}portal.box.Manager.getInstance().updateGroupBoxMembers(Q.getGroupBoxId(),this.__zl,Q);
Q.setGroupBoxId(this.__zl);
var O=new qx.fx.effect.core.Move(this.__zq);
O.set({x:R,y:top,mode:K,duration:0.5,transition:C});
O.start();
var self=this;
O.addListener(r,function(){self.__zr(self.__zq,P);
qx.bom.element.Style.reset(P,f);
self.__zq.parentNode.removeChild(self.__zq);
if(Q.isActive()){Q._applyActive(true);
}else{portal.box.Manager.getInstance().setActiveBox(Q);
}});
},onDragMove:function(top,bd){if(this.__zn.left!=bd){qx.bom.element.Style.set(this.__zq,A,bd+m);
}if(this.__zn.top!=top){qx.bom.element.Style.set(this.__zq,t,top+m);
}var be=this.getActiveBox().getElement();

if(this.__zk.top==null){this.__zk.top=qx.bom.element.Location.getTop(be);
}
if(this.__zk.height==null){this.__zk.height=qx.bom.element.Dimension.getHeight(be);
}if(this.__zm==false&&top>=this.__zk.top&&top<=(this.__zk.top+this.__zk.height)){return;
}var bf;
if(this.__zm){bf=qx.dom.Hierarchy.getFirstDescendant(document.getElementById(this.__zl));
while(bf!=null){if(this.__zs(true,top,be,bf)){this.__zm=false;
return;
}bf=qx.dom.Hierarchy.getNextElementSibling(bf);
}}else{bf=be;
}if(top-this.__zn.top>0){bf=qx.dom.Hierarchy.getNextElementSibling(bf);

while(bf!=null){if(bf){if(this.__zs(true,top,be,bf)){return;
}}bf=qx.dom.Hierarchy.getNextElementSibling(bf);
}}else{var bf=qx.dom.Hierarchy.getPreviousElementSibling(bf);

while(bf!=null){if(bf){if(this.__zs(false,top,be,bf)){return;
}}bf=qx.dom.Hierarchy.getPreviousElementSibling(bf);
}}this.__zn.left=bd;
this.__zn.top=top;
},__zs:function(W,top,X,Y){var ba=qx.bom.element.Location.getTop(Y);
var bb=qx.bom.element.Dimension.getClientHeight(Y);
var bc;

if(W){if(top>=(ba+(bb/3))){bc=qx.dom.Hierarchy.getNextElementSibling(Y);

if(bc!=X||bc==null){qx.dom.Element.insertAfter(X,Y);
this.__zk.top=qx.bom.element.Location.getTop(X);
}return true;
}}else{if(top<=(ba+bb*2/3)){bc=qx.dom.Hierarchy.getPreviousElementSibling(Y);

if(bc!=X||bc==null){qx.dom.Element.insertBefore(X,Y);
this.__zk.top=qx.bom.element.Location.getTop(X);
}return true;
}}return false;
},checkGroupBox:function(U){if(this.__zo[this.__zl].left<=U&&this.__zo[this.__zl].right>=U){return;
}
for(var V in this.__zo){if(V!=this.__zl){if(this.__zo[V].left<=U&&this.__zo[V].right>=U){this.__zl=V;
this.__zm=true;
return;
}}}}},destruct:function(){this._disposeFields(q,D,v,u,F,y);
}});
})();
(function(){var M="borderTopWidth",L="borderLeftWidth",K="scroll",J="border-box",I="position",H="borderBottomWidth",G="qx.client",F="borderRightWidth",E="auto",D="marginTop",bf="marginLeft",be="padding",bd="fixed",bc="CSS1Compat",bb="qx.bom.element.Location",ba="paddingLeft",Y="static",X="marginBottom",W="visible",V="BODY",T="paddingBottom",U="paddingTop",R="marginRight",S="margin",P="overflow",Q="paddingRight",N="border",O="absolute";
qx.Class.define(bb,{statics:{__dR:function(by,bz){return qx.bom.element.Style.get(by,bz,qx.bom.element.Style.COMPUTED_MODE,false);
},__dS:function(bg,bh){return parseInt(qx.bom.element.Style.get(bg,bh,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__dT:function(u){var x=0,top=0;
if(u.getBoundingClientRect){var w=qx.dom.Node.getWindow(u);
x-=qx.bom.Viewport.getScrollLeft(w);
top-=qx.bom.Viewport.getScrollTop(w);
}else{var v=qx.dom.Node.getDocument(u).body;
u=u.parentNode;
while(u&&u!=v){x+=u.scrollLeft;
top+=u.scrollTop;
u=u.parentNode;
}}return {left:x,top:top};
},__dU:qx.core.Variant.select(G,{"mshtml":function(bs){var bu=qx.dom.Node.getDocument(bs);
var bt=bu.body;
var bv=0;
var top=0;
bv-=bt.clientLeft+bu.documentElement.clientLeft;
top-=bt.clientTop+bu.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bv+=this.__dS(bt,L);
top+=this.__dS(bt,M);
}return {left:bv,top:top};
},"webkit":function(bA){var bC=qx.dom.Node.getDocument(bA);
var bB=bC.body;
var bD=bB.offsetLeft;
var top=bB.offsetTop;
bD+=this.__dS(bB,L);
top+=this.__dS(bB,M);
if(bC.compatMode===bc){bD+=this.__dS(bB,bf);
top+=this.__dS(bB,D);
}return {left:bD,top:top};
},"gecko":function(bi){var bj=qx.dom.Node.getDocument(bi).body;
var bl=bj.offsetLeft;
var top=bj.offsetTop;
if(qx.bom.element.BoxSizing.get(bj)!==J){bl+=this.__dS(bj,L);
top+=this.__dS(bj,M);
if(!bi.getBoundingClientRect){var bk;

while(bi){if(this.__dR(bi,I)===O||this.__dR(bi,I)===bd){bk=true;
break;
}bi=bi.offsetParent;
}
if(!bk){bl+=this.__dS(bj,L);
top+=this.__dS(bj,M);
}}}return {left:bl,top:top};
},"default":function(r){var s=qx.dom.Node.getDocument(r).body;
var t=s.offsetLeft;
var top=s.offsetTop;
return {left:t,top:top};
}}),__dV:qx.core.Variant.select(G,{"mshtml|webkit":function(m){var o=qx.dom.Node.getDocument(m);
if(m.getBoundingClientRect){var p=m.getBoundingClientRect();
var q=p.left;
var top=p.top;
}else{var q=m.offsetLeft;
var top=m.offsetTop;
m=m.offsetParent;
var n=o.body;
while(m&&m!=n){q+=m.offsetLeft;
top+=m.offsetTop;
q+=this.__dS(m,L);
top+=this.__dS(m,M);
m=m.offsetParent;
}}return {left:q,top:top};
},"gecko":function(bF){if(bF.getBoundingClientRect){var bI=bF.getBoundingClientRect();
var bJ=Math.round(bI.left);
var top=Math.round(bI.top);
}else{var bJ=0;
var top=0;
var bG=qx.dom.Node.getDocument(bF).body;
var bH=qx.bom.element.BoxSizing;

if(bH.get(bF)!==J){bJ-=this.__dS(bF,L);
top-=this.__dS(bF,M);
}
while(bF&&bF!==bG){bJ+=bF.offsetLeft;
top+=bF.offsetTop;
if(bH.get(bF)!==J){bJ+=this.__dS(bF,L);
top+=this.__dS(bF,M);
}if(bF.parentNode&&this.__dR(bF.parentNode,P)!=W){bJ+=this.__dS(bF.parentNode,L);
top+=this.__dS(bF.parentNode,M);
}bF=bF.offsetParent;
}}return {left:bJ,top:top};
},"default":function(A){var C=0;
var top=0;
var B=qx.dom.Node.getDocument(A).body;
while(A&&A!==B){C+=A.offsetLeft;
top+=A.offsetTop;
A=A.offsetParent;
}return {left:C,top:top};
}}),get:function(d,e){var f=this.__dU(d);

if(d.tagName==V){var l=f.left;
var top=f.top;
}else{var k=this.__dV(d);
var scroll=this.__dT(d);
var l=k.left+f.left-scroll.left;
var top=k.top+f.top-scroll.top;
}var g=l+d.offsetWidth;
var h=top+d.offsetHeight;

if(e){if(e==be||e==K){var i=qx.bom.element.Overflow.getX(d);

if(i==K||i==E){g+=d.scrollWidth-d.offsetWidth+this.__dS(d,L)+this.__dS(d,F);
}var j=qx.bom.element.Overflow.getY(d);

if(j==K||j==E){h+=d.scrollHeight-d.offsetHeight+this.__dS(d,M)+this.__dS(d,H);
}}
switch(e){case be:l+=this.__dS(d,ba);
top+=this.__dS(d,U);
g-=this.__dS(d,Q);
h-=this.__dS(d,T);
case K:l-=d.scrollLeft;
top-=d.scrollTop;
g-=d.scrollLeft;
h-=d.scrollTop;
case N:l+=this.__dS(d,L);
top+=this.__dS(d,M);
g-=this.__dS(d,F);
h-=this.__dS(d,H);
break;
case S:l-=this.__dS(d,bf);
top-=this.__dS(d,D);
g+=this.__dS(d,R);
h+=this.__dS(d,X);
break;
}}return {left:l,top:top,right:g,bottom:h};
},getLeft:function(bw,bx){return this.get(bw,bx).left;
},getTop:function(bK,bL){return this.get(bK,bL).top;
},getRight:function(y,z){return this.get(y,z).right;
},getBottom:function(bM,bN){return this.get(bM,bN).bottom;
},getRelative:function(bm,bn,bo,bp){var br=this.get(bm,bo);
var bq=this.get(bn,bp);
return {left:br.left-bq.left,top:br.top-bq.top,right:br.right-bq.right,bottom:br.bottom-bq.bottom};
},getPosition:function(bE){return this.getRelative(bE,this.getOffsetParent(bE));
},getOffsetParent:function(a){var c=a.offsetParent||document.body;
var b=qx.bom.element.Style;

while(c&&(!/^body|html$/i.test(c.tagName)&&b.get(c,I)===Y)){c=c.offsetParent;
}return c;
}}});
})();
(function(){var m="mshtml",l="qx.client",k="Please use element.clientWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",j="qx.bom.element.Dimension",i="Please use element.scrollWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",h="paddingRight",g="paddingLeft",f="paddingTop",e="Please use element.scrollHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",d="Please use element.clientHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",c="paddingBottom";
qx.Class.define(j,{statics:{getWidth:qx.core.Variant.select(l,{"gecko":function(J){if(J.getBoundingClientRect){var K=J.getBoundingClientRect();
return Math.round(K.right)-Math.round(K.left);
}else{return J.offsetWidth;
}},"default":function(p){return p.offsetWidth;
}}),getHeight:qx.core.Variant.select(l,{"gecko":function(n){if(n.getBoundingClientRect){var o=n.getBoundingClientRect();
return Math.round(o.bottom)-Math.round(o.top);
}else{return n.offsetHeight;
}},"default":function(r){return r.offsetHeight;
}}),getSize:function(a){return {width:this.getWidth(a),height:this.getHeight(a)};
},__jf:{visible:true,hidden:true},getContentWidth:function(s){var u=qx.bom.element.Style;
var v=qx.bom.element.Overflow.getX(s);
var w=parseInt(u.get(s,g),10);
var y=parseInt(u.get(s,h),10);

if(this.__jf[v]){return s.clientWidth-w-y;
}else{if(s.clientWidth>=s.scrollWidth){return Math.max(s.clientWidth,s.scrollWidth)-w-y;
}else{var x=s.scrollWidth-w;
var t=qx.bom.client.Engine;

if(t.NAME===m&&t.VERSION==6){x-=y;
}return x;
}}},getContentHeight:function(A){var C=qx.bom.element.Style;
var E=qx.bom.element.Overflow.getY(A);
var F=parseInt(C.get(A,f),10);
var D=parseInt(C.get(A,c),10);

if(this.__jf[E]){return A.clientHeight-F-D;
}else{if(A.clientHeight>=A.scrollHeight){return Math.max(A.clientHeight,A.scrollHeight)-F-D;
}else{var G=A.scrollHeight-F;
var B=qx.bom.client.Engine;

if(B.NAME===m&&B.VERSION==6){G-=D;
}return G;
}}},getContentSize:function(z){return {width:this.getContentWidth(z),height:this.getContentHeight(z)};
},getClientWidth:function(I){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return I.clientWidth;
},getClientHeight:function(q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return q.clientHeight;
},getScrollWidth:function(H){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return H.scrollWidth;
},getScrollHeight:function(b){qx.log.Logger.deprecatedMethodWarning(arguments.callee,e);
return b.scrollHeight;
}}});
})();
(function(){var A="Number",z="qx.event.type.Event",y="update",x="linear",w="reverse",v="Boolean",u="setup",t="none",s="qx.fx.Base",r="sinodial",k="flicker",q="__pg",n="pulse",i="_applyDuration",h="easeOutQuad",m="spring",l="easeInQuad",o="full",g="wobble",p="finish",j="Object";
qx.Class.define(s,{extend:qx.core.Object,construct:function(d){arguments.callee.base.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__pf=qx.fx.Base.EffectState.IDLE;
this.__pg=d;
},events:{"setup":z,"update":z,"finish":z},properties:{duration:{init:0.5,check:A,apply:i},fps:{init:100,check:A},sync:{init:false,check:v},from:{init:0,check:A},to:{init:1,check:A},delay:{init:0.0,check:A},queue:{check:j},transition:{init:x,check:[x,l,h,r,w,k,g,n,m,t,o]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__pf:null,__ph:null,__pi:null,__pj:null,__pk:null,__pl:null,__pm:null,__pn:null,__pg:null,_getElement:function(){return this.__pg;
},_setElement:function(D){this.__pg=D;
},_applyDuration:function(B,C){},init:function(){this.__pf=qx.fx.Base.EffectState.PREPARING;
this.__ph=0;
this.__pi=this.getDelay()*1000+(new Date().getTime());
this.__pj=this.__pi+(this.getDuration()*1000);
this.__pk=this.getTo()-this.getFrom();
this.__pl=this.__pj-this.__pi;
this.__pm=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afertSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(u);
},update:function(f){},finish:function(){this.fireEvent(p);
},start:function(){if(this.__pf!=qx.fx.Base.EffectState.IDLE){return false;
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
},render:function(e){if(this.__pf==qx.fx.Base.EffectState.PREPARING){this.__pf=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afertSetup();
}
if(this.__pf==qx.fx.Base.EffectState.RUNNING){this.__pn=qx.fx.Transition.get(this.getTransition())(e)*this.__pk+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__pn);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(y)){this.fireEvent(y);
}}},loop:function(a){if(a>=this.__pi){if(a>=this.__pj){this.end();
}var c=(a-this.__pi)/this.__pl;
var b=Math.round(c*this.__pm);
if(b>this.__ph){this.render(c);
this.__ph=b;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__pf=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this._disposeFields(q);
}});
})();
(function(){var i="position",h="px",g="relative",f="Number",e="absolute",d="top",c="left",b='absolute',a="qx.fx.effect.core.Move";
qx.Class.define(a,{extend:qx.fx.Base,properties:{mode:{init:g,check:[g,e]},x:{init:0,check:f},y:{init:0,check:f}},members:{__pB:null,__pC:null,__pD:null,__pE:null,__pF:null,setup:function(){var j=this._getElement();
arguments.callee.base.call(this);

if(j.parentNode){this.__pD=qx.bom.element.Location.getLeft(j)-qx.bom.element.Location.getLeft(j.parentNode);
this.__pE=qx.bom.element.Location.getTop(j)-qx.bom.element.Location.getTop(j.parentNode);
}else{this.__pD=qx.bom.element.Location.getLeft(j);
this.__pE=qx.bom.element.Location.getTop(j);
}this.__pF=qx.bom.element.Style.get(j,i);
qx.bom.element.Style.set(j,i,e);

if(this.getMode()==b){this.__pB=this.getX()-this.__pD;
this.__pC=this.getY()-this.__pE;
}else{this.__pB=this.getX();
this.__pC=this.getY();
}},update:function(k){var m=this._getElement();
arguments.callee.base.call(this);
var l=Math.round(this.__pB*k+this.__pD);
var top=Math.round(this.__pC*k+this.__pE);
qx.bom.element.Style.set(m,c,l+h);
qx.bom.element.Style.set(m,d,top+h);
},afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),i,this.__pF);
}}});
})();
(function(){var e="__default",d="qx.fx.queue.Manager",c="__po",b="singleton",a="object";
qx.Class.define(d,{extend:qx.core.Object,type:b,members:{__po:{},getQueue:function(f){if(typeof (this.__po[f])==a){return this.__po[f];
}else{return this.__po[f]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(e);
}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var f="qx.fx.queue.Queue",e="Number",d="__pq";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{limit:{init:Infinity,check:e}},members:{__pp:null,__pq:[],add:function(a){var b=new Date().getTime();
a._startOn+=b;
a._finishOn+=b;

if(this.__pq.length<this.getLimit()){this.__pq.push(a);
}
if(!this.__pp){this.__pp=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(c){qx.lang.Array.remove(this.__pq,c);

if(this.__pq.length==0){window.clearInterval(this.__pp);
delete this.__pp;
}},loop:function(){var g=new Date().getTime();

for(var i=0,h=this.__pq.length;i<h;i++){this.__pq[i]&&this.__pq[i].loop(g);
}}},destruct:function(){this._disposeFields(d);
}});
})();
(function(){var j="Number",i="static",h="qx.fx.Transition";
qx.Class.define(h,{type:i,statics:{get:function(g){return qx.fx.Transition[g]||false;
},linear:function(k){return k;
},easeInQuad:function(d){return Math.pow(2,10*(d-1));
},easeOutQuad:function(m){return (-Math.pow(2,-10*m)+1);
},sinodial:function(c){return (-Math.cos(c*Math.PI)/2)+0.5;
},reverse:function(a){return 1-a;
},flicker:function(l){var l=((-Math.cos(l*Math.PI)/4)+0.75)+Math.random()/4;
return l>1?1:l;
},wobble:function(n){return (-Math.cos(n*Math.PI*(9*n))/2)+0.5;
},pulse:function(e,f){f=(typeof (f)==j)?f:5;
return (Math.round((e%(1/f))*f)==0?Math.floor((e*f*2)-(e*f*2)):1-Math.floor((e*f*2)-(e*f*2)));
},spring:function(b){return 1-(Math.cos(b*4.5*Math.PI)*Math.exp(-b*6));
},none:function(p){return 0;
},full:function(o){return 1;
}}});
})();
(function(){var k="interval",j="qx.event.Timer",i="_applyInterval",h="_applyEnabled",g="Boolean",f="qx.event.type.Event",d="__hc",c="Integer",b="__hb";
qx.Class.define(j,{extend:qx.core.Object,construct:function(n){arguments.callee.base.call(this);
this.setEnabled(false);

if(n!=null){this.setInterval(n);
}this.__hb=qx.lang.Function.bind(this._oninterval,this);
},events:{"interval":f},statics:{once:function(r,s,t){var u=new qx.event.Timer(t);
u.addListener(k,function(e){u.stop();
r.call(s,e);
u.dispose();
s=null;
},s);
u.start();
return u;
}},properties:{enabled:{init:true,check:g,apply:h},interval:{check:c,init:1000,apply:i}},members:{__hc:null,_applyInterval:function(l,m){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(o,p){if(p){window.clearInterval(this.__hc);
this.__hc=null;
}else if(o){this.__hc=window.setInterval(this.__hb,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(q){this.setInterval(q);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(a){this.stop();
this.startWith(a);
},_oninterval:function(){if(this.getEnabled()){this.fireEvent(k);
}}},destruct:function(){if(this.__hc){window.clearInterval(this.__hc);
}this._disposeFields(d,b);
}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

