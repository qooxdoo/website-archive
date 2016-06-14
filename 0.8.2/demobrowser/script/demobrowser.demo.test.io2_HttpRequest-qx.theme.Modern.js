if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.legacy.theme": "qx.legacy.theme.ClassicRoyale", "qx.application": "demobrowser.demo.test.io2_HttpRequest", "qx.allowUrlVariants": "true", "qx.theme": "qx.theme.Modern", "qx.allowUrlSettings": "true"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off", "qx.aspects": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!window.qxlibraries) qxlibraries = {};
var libinfo = {"qx": {"resourceUri": "../../resource", "version": "trunk"}, "demobrowser.demo": {"resourceUri": "../../resource", "version": "trunk"}};
for (var k in libinfo) qxlibraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -238, 0], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -51, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -105, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -38, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/inputcheckradio-combined.png": [404, 14, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -112, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -44, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -140, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -156, 0], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -142, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -162, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -26, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -126, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -280, 0], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -41, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -19, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -148, 0], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -64, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -79, 0], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -120, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -18, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -56, 0], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -36, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -132, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -66, 0], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -266, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -46, 0], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -98, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -84, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -95, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -13, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -152, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -252, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -8, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -76, 0], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0]};
qx.$$translations = {};
qx.$$locales = {"fr": {"cldr_day_abbreviated_tue": "mar.", "cldr_date_time_format_MMd": "d/MM", "cldr_date_time_format_yyMMMd": "d MMM yy", "cldr_day_wide_thu": "jeudi", "cldr_date_time_format_MMMdd": "dd MMM", "cldr_date_time_format_MEd": "EEE d/M", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "ven.", "cldr_day_wide_sun": "dimanche", "cldr_day_wide_mon": "lundi", "cldr_pm": "PM", "alternateQuotationEnd": "”", "cldr_day_narrow_sun": "D", "cldr_date_format_full": "EEEE d MMMM yyyy", "cldr_month_abbreviated_9": "sept.", "cldr_month_abbreviated_8": "août", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_month_abbreviated_1": "janv.", "cldr_month_abbreviated_3": "mars", "cldr_month_abbreviated_2": "févr.", "cldr_month_abbreviated_5": "mai", "cldr_month_abbreviated_4": "avr.", "cldr_month_abbreviated_7": "juil.", "cldr_month_abbreviated_6": "juin", "cldr_date_time_format_MMMd": "d MMM", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_narrow_tue": "M", "cldr_date_time_format_MMMEd": "E d MMM", "cldr_date_time_format_yQ": "QQQ yyyy", "cldr_month_wide_2": "février", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "janvier", "cldr_month_wide_6": "juin", "cldr_month_wide_7": "juillet", "cldr_date_time_format_MMMMd": "d MMMM", "cldr_month_wide_5": "mai", "cldr_month_wide_8": "août", "cldr_month_wide_9": "septembre", "cldr_date_time_format_MMMMEd": "EEE d MMMM", "cldr_month_wide_10": "octobre", "cldr_month_wide_11": "novembre", "cldr_month_wide_12": "décembre", "cldr_date_time_format_MMdd": "dd/MM", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": " ", "alternateQuotationStart": "“", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_date_time_format_yMMMEd": "EEE d MMM yyyy", "cldr_date_time_format_yMEd": "EEE d/M/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yyMM": "MM/yy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d MMMM yyyy", "cldr_month_abbreviated_11": "nov.", "cldr_month_abbreviated_10": "oct.", "cldr_month_abbreviated_12": "déc.", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_wide_fri": "vendredi", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "mardi", "cldr_date_time_format_Md": "M-d", "cldr_day_abbreviated_mon": "lun.", "cldr_month_narrow_3": "M", "quotationEnd": "»", "cldr_date_time_format_yyMMMEEEd": "EEE d MMM yy", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_time_format_yyQ": "QQQ yy", "cldr_date_format_medium": "d MMM yyyy", "cldr_day_abbreviated_wed": "mer.", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "«", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "sam.", "cldr_day_narrow_wed": "M", "cldr_date_time_format_hhmmss": "HH:mm:ss", "cldr_am": "AM", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_narrow_fri": "V", "cldr_day_wide_sat": "samedi", "cldr_day_narrow_thu": "J", "cldr_month_wide_3": "mars", "cldr_day_abbreviated_sun": "dim.", "cldr_day_abbreviated_thu": "jeu.", "cldr_date_format_short": "dd/MM/yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_day_wide_wed": "mercredi", "cldr_day_narrow_mon": "L", "cldr_date_time_format_hhmm": "HH:mm", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_date_time_format_y": "yyyy", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "avril", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_d": "d"}, "en": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "fr_FR": {}, "de": {"cldr_day_abbreviated_tue": "Di.", "cldr_date_time_format_MMd": "d.MM.", "cldr_day_wide_thu": "Donnerstag", "cldr_date_time_format_MEd": "E, d.M.", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fr.", "cldr_day_wide_sun": "Sonntag", "cldr_day_wide_mon": "Montag", "cldr_pm": "nachm.", "alternateQuotationEnd": "‘", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, d. MMMM yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mär", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "Mai", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "d. MMM", "cldr_date_time_format_yM": "yyyy-M", "cldr_day_narrow_tue": "D", "cldr_date_time_format_MMMEd": "E d. MMM", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_yyMMdd": "dd.MM.yy", "cldr_month_wide_2": "Februar", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "Januar", "cldr_month_wide_6": "Juni", "cldr_month_wide_7": "Juli", "cldr_date_time_format_MMMMd": "d. MMMM", "cldr_month_wide_5": "Mai", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E d. MMMM", "cldr_month_wide_10": "Oktober", "cldr_month_wide_11": "November", "cldr_month_wide_12": "Dezember", "cldr_date_time_format_MMdd": "dd.MM.", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": ".", "alternateQuotationStart": "‚", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_date_time_format_yMMMEd": "EEE, d. MMM yyyy", "cldr_date_time_format_yMEd": "EEE, yyyy-M-d", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yyMM": "MM.yy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d. MMMM yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Okt", "cldr_month_abbreviated_12": "Dez", "cldr_date_time_format_MMMMdd": "dd. MMMM", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_wide_fri": "Freitag", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "Dienstag", "cldr_date_time_format_Ed": "E d", "cldr_date_time_format_Md": "d.M.", "cldr_month_narrow_1": "J", "cldr_day_abbreviated_mon": "Mo.", "cldr_month_narrow_3": "M", "quotationEnd": "“", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_time_format_yyQ": "Q yy", "cldr_date_format_medium": "dd.MM.yyyy", "cldr_day_abbreviated_wed": "Mi.", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "„", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sa.", "cldr_day_narrow_wed": "M", "cldr_date_time_format_hhmmss": "hh:mm:ss a", "cldr_am": "vorm.", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Samstag", "cldr_day_narrow_thu": "D", "cldr_month_wide_3": "März", "cldr_day_abbreviated_sun": "So.", "cldr_date_time_format_H": "H", "cldr_day_abbreviated_thu": "Do.", "cldr_date_format_short": "dd.MM.yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_day_wide_wed": "Mittwoch", "cldr_day_narrow_mon": "M", "cldr_date_time_format_hhmm": "hh:mm a", "cldr_date_time_format_yyyy": "yyyy", "cldr_month_narrow_2": "F", "cldr_date_time_format_y": "yyyy", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_d": "d"}, "C": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "en_US": {}, "de_DE": {}}

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["../../script/demobrowser.demo.test.io2_HttpRequest-qx.theme.Modern-0.js"]],
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
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",G="#80B4EF",F="#ffffdd",E="#334866",D="#00204D",C="#666666",B="#99C3FE",A="#808080",z="#F4F4F4",y="#B6B6B6",x="#909090",q="#FCFCFC",r="#314a6e",o="#001533",p="#0880EF",m="#4d4d4d",n="#DFDFDF",k="#000000",l="#7B7A7E",s="#26364D",t="#AFAFAF",v="#404955",u="#AAAAAA",w="qx.theme.modern.Color";
qx.Theme.define(w,{colors:{"background-application":n,"background-pane":i,"background-light":q,"background-medium":a,"background-splitpane":t,"background-tip":F,"background-odd":h,"text-light":x,"text-gray":b,"text-label":g,"text-title":r,"text-input":k,"text-hovered":o,"text-disabled":l,"text-selected":d,"text-active":s,"text-inactive":v,"border-main":m,"border-separator":A,"border-input":E,"border-disabled":y,"border-pane":D,"border-button":C,"border-column":j,"border-focused":B,"table-pane":i,"table-focus-indicator":p,"table-row-background-focused-selected":f,"table-row-background-focused":G,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":u,"progressive-table-row-background-even":z,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
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
(function(){var q="_applyStyle",p="repeat",o="px",n="position:absolute;top:0;left:0",m="qx.ui.decoration.Background",l="",k="scale",j="backgroundPositionY",i="no-repeat",h="repeat-x",e="repeat-y",g="backgroundPositionX",f="Color",d="String";
qx.Class.define(m,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(v){arguments.callee.base.call(this);

if(v!=null){this.setBackgroundColor(v);
}},properties:{backgroundImage:{check:d,nullable:true,apply:q},backgroundRepeat:{check:[p,h,e,i,k],init:p,apply:q},backgroundColor:{check:f,nullable:true,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[j,g]}},members:{__lq:null,getMarkup:function(){if(this.__lq){return this.__lq;
}var r=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),this.getBackgroundPositionX(),this.getBackgroundPositionY(),n);
return this.__lq=r;
},resize:function(a,b,c){a.style.width=b+o;
a.style.height=c+o;
},tint:function(s,t){var u=qx.theme.manager.Color.getInstance();

if(t==null){t=this.getBackgroundColor();
}s.style.backgroundColor=u.resolve(t)||l;
},__lr:{top:0,right:0,bottom:0,left:0},getInsets:function(){return this.__lr;
},_applyStyle:function(){{};
}}});
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
(function(){var y="_applyStyle",x='"></div>',w="Color",v="repeat",u='<div style="',t='border:',s="1px solid ",r="",q=";",p="px",P="position:absolute;top:1px;left:1px;",O="qx.ui.decoration.Beveled",N="scale",M='<div style="position:absolute;top:1px;left:0px;',L='<div style="position:absolute;top:1px;left:1px;',K="repeat-y",J='border-bottom:',I="String",H='border-right:',G='</div>',E='border-top:',F="Number",C="no-repeat",D='position:absolute;top:0px;left:1px;',A="repeat-x",B='<div style="overflow:hidden;font-size:0;line-height:0;">',z='border-left:';
qx.Class.define(O,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(Q,R,S){arguments.callee.base.call(this);
if(Q!=null){this.setOuterColor(Q);
}
if(R!=null){this.setInnerColor(R);
}
if(S!=null){this.setInnerOpacity(S);
}},properties:{innerColor:{check:w,nullable:true,apply:y},innerOpacity:{check:F,init:1,apply:y},outerColor:{check:w,nullable:true,apply:y},backgroundImage:{check:I,nullable:true,apply:y},backgroundRepeat:{check:[v,A,K,C,N],init:v,apply:y},backgroundColor:{check:w,nullable:true,apply:y}},members:{__ly:null,_applyStyle:function(){{};
},getMarkup:function(){if(this.__ly){return this.__ly;
}var a=qx.theme.manager.Color.getInstance();
var b=[];
var d=s+a.resolve(this.getOuterColor())+q;
var c=s+a.resolve(this.getInnerColor())+q;
b.push(B);
b.push(u);
b.push(t,d);
b.push(qx.bom.element.Opacity.compile(0.35));
b.push(x);
b.push(M);
b.push(z,d);
b.push(H,d);
b.push(x);
b.push(u);
b.push(D);
b.push(E,d);
b.push(J,d);
b.push(x);
b.push(qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),this.getBackgroundRepeat(),0,0,P));
b.push(L);
b.push(t,c);
b.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
b.push(x);
b.push(G);
return this.__ly=b.join(r);
},resize:function(e,f,g){if(f<4){f=4;
}
if(g<4){g=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=f-2;
var outerHeight=g-2;
var m=outerWidth;
var l=outerHeight;
var innerWidth=f-4;
var innerHeight=g-4;
}else{var outerWidth=f;
var outerHeight=g;
var m=f-2;
var l=g-2;
var innerWidth=m;
var innerHeight=l;
}var o=p;
var k=e.childNodes[0].style;
k.width=outerWidth+o;
k.height=outerHeight+o;
var j=e.childNodes[1].style;
j.width=outerWidth+o;
j.height=l+o;
var i=e.childNodes[2].style;
i.width=m+o;
i.height=outerHeight+o;
var h=e.childNodes[3].style;
h.width=m+o;
h.height=l+o;
var n=e.childNodes[4].style;
n.width=innerWidth+o;
n.height=innerHeight+o;
},tint:function(T,U){var V=qx.theme.manager.Color.getInstance();

if(U==null){U=this.getBackgroundColor();
}T.childNodes[3].style.backgroundColor=V.resolve(U)||r;
},getInsets:function(){return this.__lz;
},__lz:{top:2,right:2,bottom:2,left:2}}});
})();
(function(){var k="solid",j="scale",i="border-main",h="white",g="border-separator",f="repeat-x",e="background-light",d="border-disabled",c="decoration/table/header-cell.png",b="#f8f8f8",bj="#b6b6b6",bi="background-pane",bh="repeat-y",bg="border-input",bf="decoration/scrollbar/scrollbar-button-bg-horizontal.png",be="decoration/form/input.png",bd="decoration/scrollbar/scrollbar-button-bg-vertical.png",bc="decoration/tabview/tab-button-top-active.png",bb="decoration/form/button-c.png",ba="decoration/scrollbar/scrollbar-bg-vertical.png",r="decoration/shadow/shadow-small.png",s="decoration/form/button-checked.png",p="decoration/tabview/tab-button-left-inactive.png",q="decoration/groupbox/groupbox.png",n="#FAFAFA",o="decoration/pane/pane.png",l="decoration/menu/background.png",m="decoration/toolbar/toolbar-part.gif",w="decoration/tabview/tab-button-top-inactive.png",x="decoration/menu/bar-background.png",F="decoration/tabview/tab-button-bottom-active.png",D="decoration/form/button-hovered.png",N="#b8b8b8",I="decoration/form/input-focused.png",V="decoration/window/captionbar-inactive.png",S="qx/decoration/Modern",z="decoration/window/statusbar.png",Y="border-focused",X="decoration/selection.png",W="table-focus-indicator",y="#F2F2F2",B="decoration/form/button-checked-c.png",C="decoration/scrollbar/scrollbar-bg-horizontal.png",E="qx.theme.modern.Decoration",G="#f4f4f4",J="decoration/form/button.png",P="decoration/app-header.png",U="decoration/tabview/tabview-pane.png",t="decoration/form/button-focused.png",u="decoration/tabview/tab-button-bottom-inactive.png",A="decoration/form/button-disabled.png",M="decoration/tabview/tab-button-right-active.png",L="decoration/form/button-pressed.png",K="decoration/window/captionbar-active.png",R="decoration/tabview/tab-button-left-active.png",Q="background-splitpane",H="decoration/form/button-checked-focused.png",O="#C5C5C5",a="decoration/toolbar/toolbar-gradient.png",T="decoration/tabview/tab-button-right-inactive.png",v="decoration/shadow/shadow.png";
qx.Theme.define(E,{resource:S,decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:i}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:X,backgroundRepeat:j}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:q}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:g}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:v,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:r,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:C,backgroundRepeat:f}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:ba,backgroundRepeat:bh}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bf,backgroundRepeat:j,outerColor:i,innerColor:h,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bf,backgroundRepeat:j,outerColor:d,innerColor:h,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bd,backgroundRepeat:j,outerColor:i,innerColor:h,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bd,backgroundRepeat:j,outerColor:d,innerColor:h,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:J,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:D,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:L,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:H,insets:2}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bg,innerColor:h,innerOpacity:0.5,backgroundImage:be,backgroundRepeat:f,backgroundColor:e}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bg,innerColor:Y,backgroundImage:I,backgroundRepeat:f,backgroundColor:e}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:h,innerOpacity:0.5,backgroundImage:be,backgroundRepeat:f,backgroundColor:e}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:a,backgroundRepeat:j}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bj,innerColor:b,backgroundImage:bb,backgroundRepeat:j}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bj,innerColor:b,backgroundImage:B,backgroundRepeat:j}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:N,colorRight:G,styleLeft:k,styleRight:k}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:m,backgroundRepeat:bh}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:U,insets:[0,2,3,0]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:w}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:u}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:R}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:p}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:T}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bi,width:3,color:Q,style:k}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bi,width:1,color:i,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:K}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:V}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:z}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:i,style:k}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:i,style:k}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthBottom:1,colorBottom:i,style:k}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:g,styleRight:k}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:g,styleRight:k,widthBottom:1,colorBottom:h,styleBottom:k}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthBottom:1,colorBottom:i,style:k}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:W,style:k}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:i,style:k}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:c,backgroundRepeat:j,widthRight:1,colorRight:y,style:k}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:l,backgroundRepeat:j,width:1,color:i,style:k}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:O,widthBottom:1,colorBottom:n}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:x,backgroundRepeat:j,width:1,color:g,style:k}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:P,backgroundRepeat:j}}}});
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
(function(){var k="Lucida Grande",j="Liberation Sans",i="Arial",h="Tahoma",g="Candara",f="Segoe UI",e="Consolas",d="monospace",c="Courier New",b="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i]},"bold":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i],bold:true},"small":{size:qx.bom.client.System.WINVISTA?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[e]:[e,a,c,d]}}});
})();
(function(){var gf="button-frame",ge="widget",gd="atom",gc="main",gb="button",ga="middle",fY="background-light",fX="image",fW="groupbox",fV="cell",eQ="text-selected",eP="bold",eO="menu-button",eN="decoration/arrows/down.png",eM="toolbar-button",eL="spinner",eK="input",eJ="input-disabled",eI="selected",eH="popup",gm="textfield",gn="input-focused",gk="list",gl="tree-item",gi="treevirtual-contract",gj="scrollbar",gg="datechooser/nav-button",gh="text-hovered",go="center",gp="treevirtual-expand",fE="tooltip",fD="label",fG="decoration/arrows/right.png",fF="background-application",fI="radiobutton",fH="text-disabled",fK="combobox",fJ="checkbox",fC="text-title",fB="qx/static/blank.gif",da="scrollbar/button",db="right",dc="combobox/button",dd="text-label",de="decoration/tree/closed.png",df="scrollbar-slider-horizontal",dg="white",dh="decoration/arrows/left.png",di="button-focused",dj="text-light",gD="text-input",gC="icon/16/places/folder.png",gB="slidebar/button-forward",gA="right-top",gH="background-splitpane",gG=".png",gF="decoration/tree/open.png",gE="default",gJ="decoration/arrows/down-small.png",gI="datechooser",dW="slidebar/button-backward",dX="selectbox",dU="treevirtual-folder",dV="shadow-popup",eb="icon/16/mimetypes/office-document.png",ec="background-medium",dY="table",ea="decoration/form/",dS="icon/16/places/folder-open.png",dT="button-checked",dC="decoration/window/maximize-active-hovered.png",dB="radiobutton-hovered",dE="decoration/cursors/",dD="slidebar",dy="menu",dx="table-scroller-focus-indicator",dA="move-frame",dz="nodrop",dw="table-header-cell",dv="app-header",eh="row-layer",ei="text-inactive",ej="move",ek="radiobutton-checked-focused",ed="decoration/window/restore-active-hovered.png",ee="shadow-window",ef="table-column-button",eg="right.png",el="tabview-page-button-bottom-inactive",em="window-statusbar",dN="button-hovered",dM="decoration/scrollbar/scrollbar-",dL="background-tip",dK="scrollbar-slider-horizontal-disabled",dJ="table-scroller-header",dI="radiobutton-disabled",dH="button-pressed",dG="table-pane",dR="decoration/window/close-active.png",dQ="tabview-page-button-left-active",en="checkbox-hovered",eo="checkbox-checked",ep="decoration/window/minimize-active-hovered.png",eq="menubar",er="icon/16/actions/dialog-cancel.png",es="tabview-page-button-top-inactive",et="tabview-page-button-left-inactive",eu="toolbar-button-checked",ev="decoration/tree/open-selected.png",ew="radiobutton-checked",eY="decoration/window/minimize-inactive.png",eX="icon/16/apps/office-calendar.png",eW="group",eV="tabview-page-button-right-inactive",fd="decoration/window/minimize-active.png",fc="decoration/window/restore-inactive.png",fb="text-active",fa="checkbox-checked-focused",fg="splitpane",ff="toolbar-separator",fx="button-preselected-focused",fy="decoration/window/close-active-hovered.png",fv="toolbar",fw="checkbox-pressed",ft="button-disabled",fu="border-separator",fr="decoration/window/maximize-inactive.png",fs="icon/22/places/folder-open.png",fz="scrollarea",fA="scrollbar-vertical",fO="decoration/toolbar/toolbar-handle-knob.gif",fN="icon/22/mimetypes/office-document.png",fQ="button-preselected",fP="button-checked-focused",fS="up.png",fR="decoration/tree/closed-selected.png",fU="qx.theme.modern.Appearance",fT="checkbox-disabled",fM="toolbar-button-hovered",fL="progressive-table-header",gw="decoration/menu/radiobutton.gif",gx="decoration/arrows/forward.png",gy="decoration/table/descending.png",gz="window-captionbar-active",gs="checkbox-checked-hovered",gt="scrollbar-slider-vertical",gu="alias",gv="decoration/window/restore-active.png",gq="checkbox-checked-disabled",gr="icon/32/mimetypes/office-document.png",cY="radiobutton-checked-disabled",cX="tabview-pane",cW="decoration/arrows/rewind.png",cV="checkbox-focused",cU="top",cT="#EEE",cS="icon/16/actions/dialog-ok.png",cR="radiobutton-checked-hovered",cQ="table-header-cell-hovered",cP="window",dm="text-gray",dn="decoration/menu/radiobutton-invert.gif",dk="slider",dl="decoration/table/select-column-order.png",dr="down.png",ds="tabview-page-button-top-active",dp="icon/32/places/folder-open.png",dq="icon/22/places/folder.png",dt="decoration/window/maximize-active.png",du="checkbox-checked-pressed",fh="decoration/window/close-inactive.png",fe="toolbar-part",fm="decoration/splitpane/knob-vertical.png",fi="left.png",eT="decoration/menu/checkbox-invert.gif",eR="decoration/arrows/up.png",dF="radiobutton-checked-pressed",eU="table-statusbar",dP="radiobutton-pressed",dO="window-captionbar-inactive",ez="copy",eA="radiobutton-focused",eB="decoration/menu/checkbox.gif",eC="decoration/splitpane/knob-horizontal.png",eD="icon/32/places/folder.png",eE="tabview-page-button-bottom-active",eF="decoration/arrows/up-small.png",eG="decoration/table/ascending.png",ex="small",ey="tabview-page-button-right-active",eS="-disabled",fl="scrollbar-horizontal",fk="progressive-table-header-cell",fj="menu-separator",fq="pane",fp="decoration/arrows/right-invert.png",fo=".gif",fn="icon/16/actions/view-refresh.png";
qx.Theme.define(fU,{appearances:{"widget":{},"root":{style:function(cM){return {backgroundColor:fF,textColor:dd,font:gE};
}},"label":{style:function(gY){return {textColor:gY.disabled?fH:undefined};
}},"move-frame":{style:function(cO){return {decorator:gc};
}},"resize-frame":dA,"dragdrop-cursor":{style:function(v){var w=dz;

if(v.copy){w=ez;
}else if(v.move){w=ej;
}else if(v.alias){w=gu;
}return {source:dE+w+fo,position:gA,offset:[2,16,2,6]};
}},"image":{style:function(cs){return {opacity:!cs.replacement&&cs.disabled?0.3:1};
}},"atom":{},"atom/label":fD,"atom/icon":fX,"popup":{style:function(h){return {decorator:gc,backgroundColor:fY,shadow:dV};
}},"button-frame":{alias:gd,style:function(bC){var bE,bD;

if(bC.checked&&bC.focused&&!bC.inner){bE=fP;
bD=undefined;
}else if(bC.disabled){bE=ft;
bD=undefined;
}else if(bC.pressed){bE=dH;
bD=gh;
}else if(bC.checked){bE=dT;
bD=undefined;
}else if(bC.hovered){bE=dN;
bD=gh;
}else if(bC.preselected&&bC.focused&&!bC.inner){bE=fx;
bD=gh;
}else if(bC.preselected){bE=fQ;
bD=gh;
}else if(bC.focused&&!bC.inner){bE=di;
bD=undefined;
}else{bE=gb;
bD=undefined;
}return {decorator:bE,textColor:bD};
}},"button-frame/image":{style:function(gQ){return {opacity:!gQ.replacement&&gQ.disabled?0.5:1};
}},"button":{alias:gf,include:gf,style:function(cq){return {padding:[2,8],center:true};
}},"splitbutton":{},"splitbutton/button":gb,"splitbutton/arrow":{alias:gb,include:gb,style:function(L){return {icon:eN,padding:2,marginLeft:1};
}},"checkbox":{alias:gd,style:function(gV){var gW;

if(gV.checked&&gV.focused){gW=fa;
}else if(gV.checked&&gV.disabled){gW=gq;
}else if(gV.checked&&gV.pressed){gW=du;
}else if(gV.checked&&gV.hovered){gW=gs;
}else if(gV.checked){gW=eo;
}else if(gV.disabled){gW=fT;
}else if(gV.focused){gW=cV;
}else if(gV.pressed){gW=fw;
}else if(gV.hovered){gW=en;
}else{gW=fJ;
}return {icon:ea+gW+gG,gap:6};
}},"radiobutton":{alias:gd,style:function(ck){var cl;

if(ck.checked&&ck.focused){cl=ek;
}else if(ck.checked&&ck.disabled){cl=cY;
}else if(ck.checked&&ck.pressed){cl=dF;
}else if(ck.checked&&ck.hovered){cl=cR;
}else if(ck.checked){cl=ew;
}else if(ck.disabled){cl=dI;
}else if(ck.focused){cl=eA;
}else if(ck.pressed){cl=dP;
}else if(ck.hovered){cl=dB;
}else{cl=fI;
}return {icon:ea+cl+gG,gap:6};
}},"textfield":{style:function(bB){return {decorator:bB.focused?gn:bB.disabled?eJ:eK,padding:[2,4,1],textColor:bB.disabled?fH:gD};
}},"textarea":{include:gm,style:function(y){return {padding:4};
}},"spinner":{style:function(bV){return {decorator:bV.focused?gn:bV.disabled?eJ:eK};
}},"spinner/textfield":{include:gm,style:function(q){return {decorator:undefined};
}},"spinner/upbutton":{alias:gf,include:gf,style:function(p){return {icon:eF,padding:p.pressed?[2,2,0,4]:[1,3,1,3]};
}},"spinner/downbutton":{alias:gf,include:gf,style:function(gS){return {icon:gJ,padding:gS.pressed?[2,2,0,4]:[1,3,1,3]};
}},"datefield":fK,"datefield/button":{alias:dc,include:dc,style:function(cr){return {icon:eX,padding:[0,3],decorator:undefined};
}},"datefield/textfield":{style:function(bP){return {padding:[2,4,1],textColor:bP.disabled?fH:gD};
}},"datefield/list":{alias:gI,include:gI,style:function(be){return {decorator:undefined};
}},"groupbox":{style:function(cF){return {legendPosition:cU};
}},"groupbox/legend":{alias:gd,style:function(c){return {padding:[1,0,1,4],textColor:fC,font:eP};
}},"groupbox/frame":{style:function(gX){return {padding:12,decorator:eW};
}},"check-groupbox":fW,"check-groupbox/legend":{alias:fJ,include:fJ,style:function(bc){return {padding:[1,0,1,4],textColor:fC,font:eP};
}},"radio-groupbox":fW,"radio-groupbox/legend":{alias:fI,include:fI,style:function(K){return {padding:[1,0,1,4],textColor:fC};
}},"scrollarea":{style:function(i){return {minWidth:64,minHeight:64};
}},"scrollarea/corner":{style:function(bI){return {backgroundColor:fF};
}},"scrollarea/pane":ge,"scrollarea/scrollbar-x":gj,"scrollarea/scrollbar-y":gj,"scrollbar":{style:function(bL){return {width:bL.horizontal?undefined:16,height:bL.horizontal?16:undefined,decorator:bL.horizontal?fl:fA,padding:1};
}},"scrollbar/slider":{alias:dk,style:function(I){return {padding:I.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gf,style:function(P){var Q=P.horizontal?df:gt;

if(P.disabled){Q+=eS;
}return {decorator:Q,minHeight:P.horizontal?undefined:14,minWidth:P.horizontal?14:undefined};
}},"scrollbar/button":{alias:gf,include:gf,style:function(cy){var cz=dM;

if(cy.left){cz+=fi;
}else if(cy.right){cz+=eg;
}else if(cy.up){cz+=fS;
}else{cz+=dr;
}
if(cy.left||cy.right){return {padding:[0,0,0,cy.left?3:4],icon:cz,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:cz,width:14,height:15};
}}},"scrollbar/button-begin":da,"scrollbar/button-end":da,"slider":{style:function(cG){return {decorator:cG.focused?gn:cG.disabled?eJ:eK};
}},"slider/knob":{include:gf,style:function(bk){return {decorator:bk.disabled?dK:df,height:14,width:14};
}},"list":{alias:fz,style:function(gN){return {backgroundColor:fY,decorator:gN.focused?gn:gN.disabled?eJ:eK};
}},"list/pane":ge,"listitem":{alias:gd,style:function(n){return {padding:4,textColor:n.selected?eQ:undefined,decorator:n.selected?eI:undefined};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gf,include:gf,style:function(cj){return {padding:5,center:true,icon:cj.barLeft||cj.barRight?eN:fG};
}},"slidebar/button-backward":{alias:gf,include:gf,style:function(cN){return {padding:5,center:true,icon:cN.barLeft||cN.barRight?eR:dh};
}},"tabview":{style:function(bl){return {contentPadding:16};
}},"tabview/bar":{alias:dD,style:function(A){var B={marginBottom:A.barTop?-1:0,marginTop:A.barBottom?-4:0,marginLeft:A.barRight?-3:0,marginRight:A.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(A.barTop||A.barBottom){B.paddingLeft=5;
B.paddingRight=7;
}else{B.paddingTop=5;
B.paddingBottom=7;
}return B;
}},"tabview/bar/button-forward":{include:gB,alias:gB,style:function(a){if(a.barTop||a.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dW,alias:dW,style:function(W){if(W.barTop||W.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bF){return {decorator:cX,minHeight:100,marginBottom:bF.barBottom?-1:0,marginTop:bF.barTop?-1:0,marginLeft:bF.barLeft?-1:0,marginRight:bF.barRight?-1:0};
}},"tabview-page":ge,"tabview-page/button":{alias:gd,style:function(br){var bx,bt=0;
var bw=0,bs=0,bu=0,bv=0;

if(br.checked){if(br.barTop){bx=ds;
bt=[6,14];
bu=br.firstTab?0:-5;
bv=br.lastTab?0:-5;
}else if(br.barBottom){bx=eE;
bt=[6,14];
bu=br.firstTab?0:-5;
bv=br.lastTab?0:-5;
}else if(br.barRight){bx=ey;
bt=[6,13];
bw=br.firstTab?0:-5;
bs=br.lastTab?0:-5;
}else{bx=dQ;
bt=[6,13];
bw=br.firstTab?0:-5;
bs=br.lastTab?0:-5;
}}else{if(br.barTop){bx=es;
bt=[4,10];
bw=4;
bu=br.firstTab?5:1;
bv=1;
}else if(br.barBottom){bx=el;
bt=[4,10];
bs=4;
bu=br.firstTab?5:1;
bv=1;
}else if(br.barRight){bx=eV;
bt=[4,10];
bv=5;
bw=br.firstTab?5:1;
bs=1;
bu=1;
}else{bx=et;
bt=[4,10];
bu=5;
bw=br.firstTab?5:1;
bs=1;
bv=1;
}}return {zIndex:br.checked?10:5,decorator:bx,padding:bt,marginTop:bw,marginBottom:bs,marginLeft:bu,marginRight:bv,textColor:br.checked?fb:ei};
}},"toolbar":{style:function(bd){return {decorator:fv,spacing:2};
}},"toolbar/part":{style:function(cd){return {decorator:fe,spacing:2};
}},"toolbar/part/container":{style:function(bi){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bn){return {source:fO,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gd,style:function(f){return {marginTop:2,marginBottom:2,padding:(f.pressed||f.checked||f.hovered)&&!f.disabled||(f.disabled&&f.checked)?3:5,decorator:f.pressed||(f.checked&&!f.hovered)||(f.checked&&f.disabled)?eu:f.hovered&&!f.disabled?fM:undefined};
}},"toolbar-menubutton":{alias:eM,include:eM,style:function(l){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:fX,include:fX,style:function(d){return {source:gJ};
}},"toolbar-splitbutton":{style:function(bg){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eM,include:eM,style:function(gM){return {icon:eN,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eM,include:eM,style:function(b){return {padding:b.pressed||b.checked?1:b.hovered?1:3,icon:eN,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(t){return {decorator:ff,margin:7};
}},"tree":gk,"tree-item":{style:function(o){return {padding:[2,6],textColor:o.selected?eQ:undefined,decorator:o.selected?eI:undefined};
}},"tree-item/icon":{include:fX,style:function(cc){return {paddingRight:5};
}},"tree-item/label":fD,"tree-item/open":{include:fX,style:function(cI){var cJ;

if(cI.selected&&cI.opened){cJ=ev;
}else if(cI.selected&&!cI.opened){cJ=fR;
}else if(cI.opened){cJ=gF;
}else{cJ=de;
}return {padding:[0,5,0,2],source:cJ};
}},"tree-folder":{include:gl,alias:gl,style:function(gT){var gU;

if(gT.small){gU=gT.opened?dS:gC;
}else if(gT.large){gU=gT.opened?dp:eD;
}else{gU=gT.opened?fs:dq;
}return {icon:gU};
}},"tree-file":{include:gl,alias:gl,style:function(bM){return {icon:bM.small?eb:bM.large?gr:fN};
}},"treevirtual":dY,"treevirtual-folder":{style:function(bQ){return {icon:bQ.opened?dS:gC};
}},"treevirtual-file":{include:dU,alias:dU,style:function(bq){return {icon:eb};
}},"treevirtual-line":{style:function(cb){return {icon:fB};
}},"treevirtual-contract":{style:function(bS){return {icon:gF,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(co){return {icon:de,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gi,"treevirtual-only-expand":gp,"treevirtual-start-contract":gi,"treevirtual-start-expand":gp,"treevirtual-end-contract":gi,"treevirtual-end-expand":gp,"treevirtual-cross-contract":gi,"treevirtual-cross-expand":gp,"treevirtual-end":{style:function(gK){return {icon:fB};
}},"treevirtual-cross":{style:function(bh){return {icon:fB};
}},"tooltip":{include:eH,style:function(cK){return {backgroundColor:dL,padding:[1,3,2,3],offset:[1,1,20,1]};
}},"tooltip/atom":gd,"window":{style:function(bX){return {shadow:ee,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(cE){return {decorator:cP};
}},"window/captionbar":{style:function(bY){return {decorator:bY.active?gz:dO,textColor:bY.active?dg:dm,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(ce){return {margin:[5,0,3,6]};
}},"window/title":{style:function(bj){return {alignY:ga,font:eP,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gd,style:function(cm){return {icon:cm.active?cm.hovered?ep:fd:eY,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gd,style:function(U){return {icon:U.active?U.hovered?ed:gv:fc,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gd,style:function(gP){return {icon:gP.active?gP.hovered?dC:dt:fr,margin:[4,8,2,0]};
}},"window/close-button":{alias:gd,style:function(bb){return {icon:bb.active?bb.hovered?fy:dR:fh,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(S){return {padding:[2,6],decorator:em,minHeight:18};
}},"window/statusbar-text":{style:function(bN){return {font:ex};
}},"iframe":{style:function(Y){return {decorator:gc};
}},"resizer":{style:function(ci){return {decorator:fq};
}},"splitpane":{style:function(bf){return {decorator:fg};
}},"splitpane/splitter":{style:function(bo){return {width:bo.horizontal?3:undefined,height:bo.vertical?3:undefined,backgroundColor:gH};
}},"splitpane/splitter/knob":{style:function(gO){return {source:gO.horizontal?eC:fm};
}},"splitpane/slider":{style:function(bA){return {width:bA.horizontal?3:undefined,height:bA.vertical?3:undefined,backgroundColor:gH};
}},"selectbox":{alias:gf,include:gf,style:function(M){return {padding:[2,8]};
}},"selectbox/atom":gd,"selectbox/popup":eH,"selectbox/list":{alias:gk},"selectbox/arrow":{include:fX,style:function(cf){return {source:eN,paddingLeft:5};
}},"datechooser":{style:function(ct){return {padding:2,decorator:gc,backgroundColor:fY};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gf,alias:gf,style:function(j){var k={padding:[2,4]};

if(j.lastYear){k.icon=cW;
k.marginRight=1;
}else if(j.lastMonth){k.icon=dh;
}else if(j.nextYear){k.icon=gx;
k.marginLeft=1;
}else if(j.nextMonth){k.icon=fG;
}return k;
}},"datechooser/last-year-button-tooltip":fE,"datechooser/last-month-button-tooltip":fE,"datechooser/next-year-button-tooltip":fE,"datechooser/next-month-button-tooltip":fE,"datechooser/last-year-button":gg,"datechooser/last-month-button":gg,"datechooser/next-month-button":gg,"datechooser/next-year-button":gg,"datechooser/month-year-label":{style:function(O){return {font:eP,textAlign:go};
}},"datechooser/date-pane":{style:function(e){return {marginTop:2};
}},"datechooser/weekday":{style:function(x){return {textColor:x.weekend?dj:undefined,textAlign:go,paddingTop:2,backgroundColor:ec};
}},"datechooser/week":{style:function(cp){return {textAlign:go,padding:[2,4],backgroundColor:ec};
}},"datechooser/day":{style:function(bJ){return {textAlign:go,decorator:bJ.selected?eI:undefined,textColor:bJ.selected?eQ:bJ.otherMonth?dj:undefined,font:bJ.today?eP:undefined,padding:[2,4]};
}},"combobox":{style:function(V){return {decorator:V.focused?gn:V.disabled?eJ:eK};
}},"combobox/popup":eH,"combobox/list":{alias:gk},"combobox/button":{include:gf,alias:gf,style:function(bT){var bU={icon:eN,padding:2};

if(bT.selected){bU.decorator=di;
}return bU;
}},"combobox/textfield":{include:gm,style:function(gR){return {decorator:undefined};
}},"menu":{style:function(by){var bz={decorator:dy,shadow:dV,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4};

if(by.submenu){bz.position=gA;
bz.offset=[-2,-3];
}return bz;
}},"menu-separator":{style:function(T){return {height:0,decorator:fj,margin:[4,2]};
}},"menu-button":{alias:gd,style:function(cA){return {decorator:cA.selected?eI:undefined,textColor:cA.selected?eQ:undefined,padding:[4,6]};
}},"menu-button/icon":{include:fX,style:function(z){return {alignY:ga};
}},"menu-button/label":{include:fD,style:function(cg){return {alignY:ga,padding:1};
}},"menu-button/shortcut":{include:fD,style:function(r){return {alignY:ga,marginLeft:14,padding:1};
}},"menu-button/arrow":{style:function(bp){return {source:bp.selected?fp:fG,alignY:ga};
}},"menu-checkbox":{alias:eO,include:eO,style:function(cv){return {icon:!cv.checked?undefined:cv.selected?eT:eB};
}},"menu-radiobutton":{alias:eO,include:eO,style:function(ca){return {icon:!ca.checked?undefined:ca.selected?dn:gw};
}},"menubar":{style:function(cn){return {decorator:eq};
}},"menubar-button":{alias:gd,style:function(J){return {decorator:J.pressed||J.hovered?eI:undefined,textColor:J.pressed||J.hovered?eQ:undefined,padding:[3,8]};
}},"colorselector":ge,"colorselector/control-bar":ge,"colorselector/control-pane":ge,"colorselector/visual-pane":fW,"colorselector/preset-grid":ge,"colorselector/colorbucket":{style:function(cD){return {decorator:gc,width:16,height:16};
}},"colorselector/preset-field-set":fW,"colorselector/input-field-set":fW,"colorselector/preview-field-set":fW,"colorselector/hex-field-composite":ge,"colorselector/hex-field":gm,"colorselector/rgb-spinner-composite":ge,"colorselector/rgb-spinner-red":eL,"colorselector/rgb-spinner-green":eL,"colorselector/rgb-spinner-blue":eL,"colorselector/hsb-spinner-composite":ge,"colorselector/hsb-spinner-hue":eL,"colorselector/hsb-spinner-saturation":eL,"colorselector/hsb-spinner-brightness":eL,"colorselector/preview-content-old":{style:function(G){return {decorator:gc,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bH){return {decorator:gc,backgroundColor:fY,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(bO){return {decorator:gc,margin:5};
}},"colorselector/brightness-field":{style:function(cu){return {decorator:gc,margin:[5,7]};
}},"colorselector/hue-saturation-pane":ge,"colorselector/hue-saturation-handle":ge,"colorselector/brightness-pane":ge,"colorselector/brightness-handle":ge,"colorpopup":{alias:eH,include:eH,style:function(cH){return {padding:5,backgroundColor:fF};
}},"colorpopup/field":{style:function(F){return {decorator:gc,margin:2,width:14,height:14,backgroundColor:fY};
}},"colorpopup/selector-button":gb,"colorpopup/auto-button":gb,"colorpopup/preview-pane":fW,"colorpopup/current-preview":{style:function(s){return {height:20,padding:4,marginLeft:4,decorator:gc,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(u){return {height:20,padding:4,marginRight:4,decorator:gc,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gb,include:gb,style:function(N){return {icon:cS};
}},"colorpopup/colorselector-cancelbutton":{alias:gb,include:gb,style:function(R){return {icon:er};
}},"table":{alias:ge,style:function(bm){return {decorator:dY};
}},"table-header":{},"table/statusbar":{style:function(X){return {decorator:eU,padding:[0,2]};
}},"table/column-button":{alias:gf,style:function(D){return {decorator:ef,padding:3,icon:dl};
}},"table-column-reset-button":{include:eO,alias:eO,style:function(){return {icon:fn};
}},"table-scroller":ge,"table-scroller/scrollbar-x":gj,"table-scroller/scrollbar-y":gj,"table-scroller/header":{style:function(cx){return {decorator:dJ};
}},"table-scroller/pane":{style:function(bR){return {backgroundColor:dG};
}},"table-scroller/focus-indicator":{style:function(bG){return {decorator:dx};
}},"table-scroller/resize-line":{style:function(ba){return {backgroundColor:fu,width:2};
}},"table-header-cell":{alias:gd,style:function(cB){return {minWidth:13,minHeight:20,padding:cB.hovered?[3,4,2,4]:[3,4],decorator:cB.hovered?cQ:dw,sortIcon:cB.sorted?(cB.sortedAscending?eG:gy):undefined};
}},"table-header-cell/label":{style:function(bK){return {minWidth:0,alignY:ga,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(m){return {alignY:ga,alignX:db};
}},"table-header-cell/icon":{style:function(g){return {minWidth:0,alignY:ga,paddingRight:5};
}},"table-editor-textfield":{include:gm,style:function(cw){return {decorator:undefined,padding:[2,2],backgroundColor:fY};
}},"table-editor-selectbox":{include:dX,alias:dX,style:function(ch){return {padding:[0,2],backgroundColor:fY};
}},"table-editor-combobox":{include:fK,alias:fK,style:function(H){return {decorator:undefined,backgroundColor:fY};
}},"progressive-table-header":{alias:ge,style:function(cL){return {decorator:fL};
}},"progressive-table-header-cell":{alias:gd,style:function(bW){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fk};
}},"app-header":{style:function(gL){return {font:eP,textColor:eQ,padding:[8,12],decorator:dv};
}},"virtual-list":gk,"virtual-list/row-layer":eh,"row-layer":{style:function(C){return {colorEven:dg,colorOdd:cT};
}},"column-layer":ge,"cell":{style:function(cC){return {textColor:cC.selected?eQ:dd,padding:[3,6],font:gE};
}},"cell-string":fV,"cell-number":{include:fV,style:function(E){return {textAlign:db};
}},"cell-image":fV,"cell-boolean":fV,"cell-atom":fV,"cell-date":fV,"cell-html":fV}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,resource:b,icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
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
(function(){var k="io2_HttpRequest.html",j="error",i="Loading...",h="change",g="content",f="load",d="demobrowser.demo.test.io2_HttpRequest",c="timeout",b="abort";
qx.Class.define(d,{extend:qx.application.Native,members:{main:function(){arguments.callee.base.call(this);
var l=document.getElementById(g);
l.value=i;
var m=new qx.io2.HttpRequest;
m.setUrl(k);
m.addListener(h,function(e){var a=e.getData();
qx.log.Logger.debug("Event: readystatechange: "+a);

if(a==4){l.value=this.getResponseText();
}});
m.addListener(f,function(){qx.log.Logger.debug("Event: load");
});
m.addListener(j,function(){qx.log.Logger.debug("Event: error");
});
m.addListener(c,function(){qx.log.Logger.debug("Event: timeout");
});
m.addListener(b,function(){qx.log.Logger.debug("Event: abort");
});
m.send();
}}});
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
(function(){var o="qx.event.type.Event",n="Boolean",m="String",l="Last-Modified",k="basic",j="GET",i="load",h="text/plain",g="abort",f="http",S="POST",R="error",Q="timeout",P="application/xml",O="X-Requested-With",N="application/json",M="text/html",L="If-Modified-Since",K="__wP",J='Basic ',v="Integer",w="__wR",t="qx.event.type.Data",u="HEAD",r="XMLHttpRequest",s='Authorization',p="change",q="Accept",x="OPTIONS",y="text/javascript",B="",A="PUT",D=':',C="application/x-www-form-urlencoded",F="DELETE",E="no-cache",z="Cache-Control",I="Content-Type",H="qx.io2.HttpRequest",G="Thu, 01 Jan 1970 00:00:00 GMT";
qx.Class.define(H,{extend:qx.core.Object,construct:function(bj){arguments.callee.base.call(this);
this.__wP={};
if(bj!=null){this.setUrl(bj);
}},statics:{__wQ:{}},events:{"change":t,"timeout":o,"load":o,"error":o,"abort":o},properties:{refresh:{check:n,init:false},data:{nullable:true},method:{check:[j,S,A,u,F,x],init:j},async:{check:n,init:true},mime:{check:[h,y,N,P,M],init:h},url:{check:m,init:B},username:{check:m,nullable:true},password:{check:m,nullable:true},auth:{check:[f,k],init:f},timeout:{check:v,nullable:true},cache:{check:n,init:false}},members:{__wR:null,__wP:null,setRequestHeader:function(bh,bi){this.__wP[bh]=bi;
},removeRequestHeader:function(Y){delete this.__wP[Y];
},getRequestHeader:function(W){var X=this.__wP[W];

if(X===undefined){X=null;
}return X;
},getResponseText:function(){var V=this.__wR;

if(V){return V.responseText;
}},getResponseXml:function(){var a=this.__wR;

if(a){return a.responseXML;
}},getResponseHeader:function(c){var d=this.__wR;

if(d){return d.getResponseHeader(c);
}},getAllResponseHeaders:function(){var bg=this.__wR;

if(bg){return bg.getAllResponseHeaders();
}},isNotModified:function(){var bk=this.__wR;

if(!bk){return false;
}var bl=bk.getResponseHeader(l);
return bk.status===304||qx.io2.HttpRequest.__wQ[this.getUrl()]===bl;
},isSuccessful:function(){var T=this.__wR;
return !T||T.isSuccessful();
},getStatusCode:function(){var ba=this.__wR;

if(ba){return ba.status;
}},getStatusText:function(){var e=this.__wR;

if(e){return e.statusText;
}},getReadyState:function(){var b=this.__wR;

if(b){return b.readyState;
}},send:function(){if(this.__wR){if(this.getReadyState()!==4){throw new Error("Request is still pending at ready state: "+this.getReadyState());
}this.__wR.dispose();
}var bd=this.__wR=new qx.bom.Request;
bd.onreadystatechange=qx.lang.Function.bind(this.__wS,this);
bd.ontimeout=qx.lang.Function.bind(this.__wT,this);
bd.onload=qx.lang.Function.bind(this.__wU,this);
bd.onerror=qx.lang.Function.bind(this.__wV,this);
bd.onabort=qx.lang.Function.bind(this.__wW,this);
var bb=this.getUsername();
var bf=this.getPassword();

if(this.getAuth()==k){bd.setRequestHeader(s,J+qx.util.Base64.encode(bb+D+bf));
bb=bf=null;
}var bc=this.getUrl();
bd.open(this.getMethod(),bc,this.getAsync(),bb,bf);
bd.timeout=this.getTimeout();
if(!this.getCache()){bd.setRequestHeader(z,E);
}if(this.getRefresh()){bd.setRequestHeader(L,qx.io2.HttpRequest.__wQ[bc]||G);
}bd.setRequestHeader(O,r);
if(this.getMethod()===S){bd.setRequestHeader(I,C);
}bd.setRequestHeader(q,this.getMime());
var be=this.__wP;

for(var name in be){bd.setRequestHeader(name,be[name]);
}bd.send(this.getData());
},abort:function(){if(this.__wR){this.__wR.abort();
}},__wS:function(){this.fireDataEvent(p,this.getReadyState());
if(this.getRefresh()&&this.getReadyState()===4&&this.isSuccessful()){var U=this.getResponseHeader(l);

if(U){qx.io2.HttpRequest.__wQ[this.getUrl()]=U;
}}},__wT:function(){if(this.hasListener(Q)){this.fireEvent(Q);
}},__wU:function(){if(this.hasListener(i)){this.fireEvent(i);
}},__wV:function(){if(this.hasListener(R)){this.fireEvent(R);
}},__wW:function(){if(this.hasListener(g)){this.fireEvent(g);
}}},destruct:function(){this._disposeObjects(w);
this._disposeFields(K);
}});
})();
(function(){var E="qx.client",D="mshtml",C="gecko",B="Content-Type",A="",z="application/xml",y="qx.bom.Request",x="file:",w="parsererror";
qx.Bootstrap.define(y,{construct:function(){this.__wm={};
this.__wn=this.__wx();
},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{__wo:null,__wp:null,__wn:null,__wq:null,__wr:null,__ws:null,__wt:null,__wm:null,readyState:0,responseText:A,responseXML:null,status:0,statusText:A,timeout:0,onreadystatechange:function(){},ontimeout:function(){},onload:function(){},onerror:function(){},onabort:function(){},open:function(i,j,k,l,m){this.__wo=k;
this.__wp=qx.lang.Function.bind(this.__wu,this);
this.__wn.onreadystatechange=this.__wp;
this.__wq=qx.lang.Function.bind(this.__wv,this);
if(!qx.core.Variant.isSet(E,D)){this.__wn.ontimeout=this.__wq;
}if(this.timeout!=null&&this.timeout>0){this.__wn.timeout=this.timeout;
}this.__wn.open(i,j,k,l,m);
if(qx.core.Variant.isSet(E,C)){if(!k){this.readyState=qx.bom.Request.OPENED;
this.__wy();
}}},send:function(o){var p=this.__wm;
if(o&&o.nodeType){o=window.XMLSerializer?new XMLSerializer().serializeToString(o):o.xml;

if(!p[B]){p[B]=z;
}}for(var q in p){this.__wn.setRequestHeader(q,p[q]);
}if(this.timeout!=null&&this.timeout>0){this.__wr=window.setTimeout(this.__wq,this.timeout);
}this.__wn.send(o);
if(qx.core.Variant.isSet(E,C)){if(!this.__wo){this.readyState=qx.bom.Request.OPENED;
this.__wA(this);
while(this.readyState<qx.bom.Request.DONE){this.readyState++;
this.__wy();
if(this.__ws){return;
}}}}},isSuccessful:function(){var status=this.status;
return status===304||(status>=200&&status<300);
},abort:function(){this.__ww();
this.onabort();
},__wu:function(){if(qx.core.Variant.isSet(E,C)){if(!this.__wo){return;
}}this.readyState=this.__wn.readyState;
this.__wA();
if(this.__ws){this.readyState=qx.bom.Request.UNSENT;
return ;
}this.__wy();
if(this.readyState==qx.bom.Request.DONE){this.__wB();
}},__wv:function(){this.__ww();
this.ontimeout();
},getAllResponseHeaders:function(){try{return this.__wn.getAllResponseHeaders();
}catch(t){return null;
}},getResponseHeader:function(c){try{return this.__wn.getResponseHeader(c);
}catch(u){return null;
}},setRequestHeader:function(a,b){if(b==null){delete this.__wm[a];
}else{this.__wm[a]=b;
}},removeRequestHeader:function(f,g){delete this.__wm[f];
},getRequestHeader:function(h){return this.__wm[h]||null;
},__ww:function(){this.__wA();
if(this.readyState>qx.bom.Request.UNSENT){this.__ws=true;
}this.__wn.abort();
this.__wB();
},__wx:qx.core.Variant.select(E,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),__wy:function(){if(this.__wt===this.readyState){return;
}this.onreadystatechange();
this.__wt=this.readyState;
if(this.readyState===4){if(this.isSuccessful()){this.onload();
}else{this.onerror();
}}},__wz:function(){var n=this.__wn.responseXML;

if(qx.core.Variant.isSet(E,D)){if(n&&!n.documentElement&&this.__wn.getResponseHeader(B).match(/[^\/]+\/[^\+]+\+xml/)){n=new ActiveXObject(qx.xml.Document.DOMDOC);
n.loadXML(this.__wn.responseText);
}if(n&&n.parseError!=0){return null;
}}else if(n&&n.documentElement&&n.documentElement.tagName==w){return null;
}return n;
},__wA:function(){var r=this.__wn;

try{this.responseText=r.responseText;
}catch(d){}
try{this.responseXML=this.__wz();
}catch(v){}
try{this.status=r.status;
}catch(s){}
try{this.statusText=r.statusText;
}catch(e){}if(qx.core.Variant.isSet(E,D)){if(this.status===1223){this.status=204;
}}if(!this.status&&location.protocol===x){this.status=204;
}},__wB:function(){if(this.__wr){window.clearTimeout(this.__wr);
}if(this.__wn){this.__wn.onreadystatechange=this.__wC;
}delete this.onreadystatechange;
delete this.ontimeout;
delete this.onload;
delete this.onerror;
delete this.onabort;
delete this.__wr;
delete this.__wp;
delete this.__wq;
delete this.__wn;
delete this.__wm;
},__wC:function(){}}});
})();
(function(){var t="qx.client",s="",r="mshtml",q="'",p="SelectionLanguage",o="qx.xml.Document",n=" />",m="MSXML2.DOMDocument.3.0",k='<\?xml version="1.0" encoding="utf-8"?>\n<',j="MSXML2.XMLHTTP.3.0",e="MSXML2.XMLHTTP.6.0",h=" xmlns='",g="text/xml",d="XPath",c="MSXML2.DOMDocument.6.0",f="HTML";
qx.Bootstrap.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(u){if(u.nodeType===9){return u.documentElement.nodeName!==f;
}else if(u.ownerDocument){return this.isXmlDocument(u.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(t,{"mshtml":function(x,y){var z=new ActiveXObject(this.DOMDOC);
z.setProperty(p,d);

if(y){var A=k;
A+=y;

if(x){A+=h+x+q;
}A+=n;
z.loadXML(A);
}return z;
},"default":function(E,F){return document.implementation.createDocument(E||s,F||s,null);
}}),fromString:qx.core.Variant.select(t,{"mshtml":function(a){var b=qx.xml.Document.create();
b.loadXML(a);
return b;
},"default":function(v){var w=new DOMParser();
return w.parseFromString(v,g);
}})},defer:function(B){if(qx.core.Variant.isSet(t,r)){var C=[c,m];
var D=[e,j];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(G){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
break;
}}}});
})();
(function(){var c="",b="qx.util.Base64",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
qx.Class.define(b,{statics:{__wX:a,encode:function(d){var j=this.__wX;
var n=c;
var g,f,e;
var k,l,m,h;
var i=0;

do{g=d.charCodeAt(i++);
f=d.charCodeAt(i++);
e=d.charCodeAt(i++);
k=g>>2;
l=((g&3)<<4)|(f>>4);
m=((f&15)<<2)|(e>>6);
h=e&63;

if(isNaN(f)){m=h=64;
}else if(isNaN(e)){h=64;
}n+=j.charAt(k)+j.charAt(l)+j.charAt(m)+j.charAt(h);
}while(i<d.length);
return n;
}}});
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

