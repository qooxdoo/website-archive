if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application": "feedreader.Application", "qx.theme": "qx.theme.Modern", "qx.version": "0.8.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!window.qxlibraries) qxlibraries = {};
var libinfo = {"qx": {"resourceUri": "resource", "version": "trunk"}, "feedreader": {"resourceUri": "resource", "version": "trunk"}};
for (var k in libinfo) qxlibraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/icon/Tango/22/apps/internet-feed-reader.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -238, 0], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -51, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/icon/Tango/22/actions/dialog-cancel.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/icon/Tango/22/actions/view-refresh.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -105, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -38, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/icon/Tango/22/actions/process-stop.png": [22, 22, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/inputcheckradio-combined.png": [404, 14, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -112, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -44, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/icon/Tango/16/actions/document-new.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -280, 0], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -140, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -156, 0], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -142, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -162, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/icon/Tango/22/apps/preferences-theme.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -26, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -126, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -41, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -19, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -148, 0], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -64, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -79, 0], "qx/static/blank.gif": [1, 1, "gif", "qx"], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/icon/Tango/16/apps/preferences-locale.png": [16, 16, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -120, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -18, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -56, 0], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -36, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/icon/Tango/16/apps/preferences-theme.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -132, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -66, 0], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "qx/icon/Tango/16/actions/dialog-apply.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "feedreader/css/reader.css": "feedreader", "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -266, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -46, 0], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -98, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "feedreader/proxy/proxy.php": "feedreader", "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "feedreader/images/loading66.gif": [66, 66, "gif", "feedreader"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -84, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -95, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -13, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -152, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "feedreader/images/loading22.gif": [22, 22, "gif", "feedreader"], "qx/icon/Tango/22/actions/dialog-ok.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/icon/Tango/22/actions/help-about.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -252, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -8, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -76, 0], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0]};
qx.$$translations = {"fr": {"key_short_Meta": "Meta", "key_short_Scroll": "Arrêt Défil", "key_full_Left": "Gauche", "Preferences": "Préférences", "key_short_Control": "Ctrl", "key_short_Home": "Orig.", "Open preferences window.": "Ouvrir la fenêtre de préférences", "key_short_Space": "Espace", "key_full_PageUp": "Page Précédente", "key_short_Shift": "Maj", "key_full_Control": "Contrôle", "key_short_Up": "Haut", "key_full_Insert": "Insertion", "Help": "Aide", "key_short_Apps": "App.", "key_short_Backspace": "Effacement Arrière", "key_short_Alt": "Alt", "key_full_Shift": "Majuscules", "key_full_Space": "Espace", "key_full_NumLock": "Verouillage Numérique", "key_full_Up": "Haut", "key_full_Tab": "Tabulation", "key_full_End": "Fin", "Remove feed": "Enlever un fil", "key_short_Escape": "Echap.", "key_full_Apps": "Application", "key_full_Delete": "Suppression", "key_full_Backspace": "Effacement arrière", "Add feed": "Ajouter un fil", "Reload the feeds. (%1)": "Rafraichir les fils. (%1)", "key_short_PageUp": "Pg Préc.", "key_short_Tab": "Tab", "key_short_Win": "Win", "key_full_Enter": "Entrée", "key_full_Alt": "Alternative", "Posts": "Messages", "key_short_Pause": "Pause", "key_short_Down": "Bas", "Reload": "Rafraichir", "key_short_PrintScreen": "Imp. Écran", "key_full_Win": "Windows", "key_short_Right": "Droite", "key_short_NumLock": "Verr. Num.", "key_full_Escape": "Échappement", "key_short_CapsLock": "Verr. Maj.", "key_short_Enter": "Entrée", "Static Feeds": "Fils statiques", "key_full_Right": "Droite", "key_short_Left": "Gauche", "key_full_PageDown": "Page Suivante", "key_full_Pause": "Pause", "key_full_CapsLock": "Verrouillage des Majuscule", "key_short_Insert": "Ins.", "key_full_PrintScreen": "Impression de l'écran", "key_full_Meta": "Meta", "User Feeds": "Fils de l'utilisateur", "key_short_End": "Fin", "FeedReader (qooxdoo powered)": "Agrégateur de fils de syndication (fait à l'aide de qooxdoo)", "key_full_Home": "Origine", "key_full_Scroll": "Arrêt défilement", "key_short_Delete": "Supp.", "key_short_PageDown": "Pg Suiv.", "key_full_Down": "Bas"}, "en": {}, "C": {}, "de": {"key_short_Meta": "Meta", "key_short_Scroll": "Rollen", "key_full_Left": "Pfeil links", "Preferences": "Einstellungen", "key_short_Control": "Strg", "key_short_Home": "Pos1", "Open preferences window.": "Einstellungsfenster öffnen", "key_short_Space": "Leer", "key_full_PageUp": "Bild hoch", "key_short_Shift": "Umschalt", "key_full_Control": "Steuerung", "key_short_Up": "Hoch", "key_full_Insert": "Einfügen", "Help": "Hilfe", "key_short_Apps": "Kontext", "key_short_Backspace": "Rück", "key_short_Alt": "Alt", "key_full_Shift": "Umschalttaste", "key_full_Space": "Leertaste", "key_full_NumLock": "NumLock", "key_full_Up": "Pfeil hoch", "key_full_Tab": "Tabulator", "key_full_End": "Ende", "Remove feed": "Feed löschen", "key_short_Escape": "Esc", "key_full_Apps": "Kontextmenü", "key_full_Delete": "Entfernen", "key_full_Backspace": "Rücktaste", "Add feed": "Feed hinzufügen", "Reload the feeds. (%1)": "Feeds neu laden. (%1)", "key_short_PageUp": "Bild hoch", "key_short_Tab": "Tab", "key_short_Win": "Win", "key_full_Enter": "Enter", "key_full_Alt": "Alt", "Posts": "Nachrichten", "key_short_Pause": "Pause", "key_short_Down": "Runter", "Reload": "Neu laden", "key_short_PrintScreen": "Druck", "key_full_Win": "Windowstaste", "key_short_Right": "Rechts ", "key_short_NumLock": "Num", "key_full_Escape": "Escape", "key_short_CapsLock": "Feststell", "key_short_Enter": "Enter", "Static Feeds": "Vordefinierte Quellen", "key_full_Right": "Pfeil rechts", "key_short_Left": "Links", "key_full_PageDown": "Bild runter ", "key_full_Pause": "Pause", "key_full_CapsLock": "Feststelltaste", "key_short_Insert": "Einfg", "key_full_PrintScreen": "Drucken", "key_full_Meta": "Meta", "User Feeds": "Eigene Quellen", "key_short_End": "Ende", "FeedReader (qooxdoo powered)": "FeedReader (qooxdoo powered)", "key_full_Home": "Position 1", "key_full_Scroll": "Rollen", "key_short_Delete": "Entf", "key_short_PageDown": "Bild runter", "key_full_Down": "Pfeil runter"}, "it": {"key_short_Meta": "Meta", "key_short_Scroll": "Bloc Scorr", "key_full_Left": "Freccia Sinistra", "Preferences": "Preferenze", "key_short_Control": "Ctrl", "key_short_Home": "Inizio", "Open preferences window.": "Apri la finestra delle preferenze.", "key_short_Space": "Spazio", "key_full_PageUp": "Pagina Su", "key_short_Shift": "Maiusc", "key_full_Control": "Control", "key_short_Up": "Su", "key_full_Insert": "Inserisci", "Help": "Aiuto", "key_short_Apps": "Menu", "key_short_Backspace": "Backspace", "key_short_Alt": "Alt", "key_full_Shift": "Maiuscole", "key_full_Space": "Spazio", "key_full_NumLock": "Blocca Numeri", "key_full_Up": "Freccia Su", "key_full_Tab": "Tabulazione", "key_full_End": "Fine", "Remove feed": "Rimuovi il feed", "key_short_Escape": "Esc", "key_full_Apps": "Tasto Menu", "key_full_Delete": "Cancella", "key_full_Backspace": "Backspace", "Add feed": "Aggiungi un feed", "Reload the feeds. (%1)": "Ricarica i feed. (%1)", "key_short_PageUp": "Pag Su", "key_short_Tab": "Tab", "key_short_Win": "Win", "key_full_Enter": "Invio", "key_full_Alt": "Alt", "Posts": "Messaggi", "key_short_Pause": "Pausa", "key_short_Down": "Giù", "Reload": "Ricarica", "key_short_PrintScreen": "Stamp", "key_full_Win": "Tasto Windows", "key_short_Right": "Destra", "key_short_NumLock": "Bloc Num", "key_full_Escape": "Escape", "key_short_CapsLock": "Bloc Maiusc", "key_short_Enter": "Invio", "Static Feeds": "Feed statici", "key_full_Right": "Freccia Destra", "key_short_Left": "Sinistra", "key_full_PageDown": "Pagina Giù", "key_full_Pause": "Pausa", "key_full_CapsLock": "Blocca Maiuscole", "key_short_Insert": "Ins", "key_full_PrintScreen": "Stampa Schermo", "key_full_Meta": "Meta", "User Feeds": "Feed utente", "key_short_End": "Fine", "FeedReader (qooxdoo powered)": "FeedReader (realizzato con qooxdoo)", "key_full_Home": "Inizio", "key_full_Scroll": "Blocca Scorrimento", "key_short_Delete": "Canc", "key_short_PageDown": "Pag Giù", "key_full_Down": "Freccia Giù"}, "sv": {"key_short_Meta": "Meta", "key_short_Scroll": "SCL", "key_full_Left": "Vänster", "Preferences": "Inställningar", "key_short_Control": "CTRL", "key_short_Home": "HOME", "Open preferences window.": "Öppna inställningsfönstret", "key_short_Space": "Space", "key_full_PageUp": "PageUp", "key_short_Shift": "Shift", "key_full_Control": "Control", "key_short_Up": "Upp", "key_full_Insert": "Insert", "Help": "Hjälp", "key_short_Apps": "Apps", "key_short_Backspace": "BS", "key_short_Alt": "Alt", "key_full_Shift": "Shift", "key_full_Space": "Blanksteg", "key_full_NumLock": "NumLock", "key_full_Up": "Upp", "key_full_Tab": "Tabb", "key_full_End": "End", "Remove feed": "Ta bort flöde", "key_short_Escape": "ESC", "key_full_Apps": "Apps", "key_full_Delete": "Delete", "key_full_Backspace": "Backspace", "Add feed": "Lägg till flöde", "Reload the feeds. (%1)": "Ladda om flödena. (%1)", "key_short_PageUp": "PGUP", "key_short_Tab": "Tabb", "key_short_Win": "Win", "key_full_Enter": "Enter", "key_full_Alt": "Alt", "Posts": "Poster", "key_short_Pause": "Pause", "key_short_Down": "Ner", "Reload": "Uppdatera", "key_short_PrintScreen": "PRNSCN", "key_full_Win": "Win", "key_short_Right": "Höger", "key_short_NumLock": "NUM", "key_full_Escape": "Escape", "key_short_CapsLock": "Caps", "key_short_Enter": "Enter", "Static Feeds": "Statiska flöden", "key_full_Right": "Höger", "key_short_Left": "Vänster", "key_full_PageDown": "PageDown", "key_full_Pause": "Pause", "key_full_CapsLock": "CapsLock", "key_short_Insert": "INS", "key_full_PrintScreen": "PrintScreen", "key_full_Meta": "Meta", "User Feeds": "Användarflöden", "key_short_End": "END", "FeedReader (qooxdoo powered)": "FeedReader (qooxdoo driven)", "key_full_Home": "Home", "key_full_Scroll": "Scroll", "key_short_Delete": "DEL", "key_short_PageDown": "PGDN", "key_full_Down": "Ner"}, "es": {"key_short_Meta": "Meta", "key_short_Scroll": "BloqDespl", "key_full_Left": "Flecha izquierda", "Preferences": "Preferencias", "key_short_Control": "Ctrl", "key_short_Home": "Inicio", "Open preferences window.": "Abre la ventana de preferencias", "key_short_Space": "Espacio", "key_full_PageUp": "Retroceder Página", "key_short_Shift": "Mayús", "key_full_Control": "Control", "key_short_Up": "Arriba", "key_full_Insert": "Insertar", "Help": "Ayuda", "key_short_Apps": "Aplic", "key_short_Backspace": "Retroceso", "key_short_Alt": "Alt", "key_full_Shift": "Mayúscula", "key_full_Space": "Espacio", "key_full_NumLock": "Bloqueo Numérico", "key_full_Up": "Flecha arriba", "key_full_Tab": "Tabulador", "key_full_End": "Fin", "Remove feed": "Eliminar feed", "key_short_Escape": "Esc", "key_full_Apps": "Aplicaciones", "key_full_Delete": "Suprimir", "key_full_Backspace": "Retroceso", "Add feed": "Agregar feed", "Reload the feeds. (%1)": "Recargar los feeds (%1)", "key_short_PageUp": "RePág", "key_short_Tab": "Tab", "key_short_Win": "Win", "key_full_Enter": "Intro", "key_full_Alt": "Alt", "Posts": "Posts", "key_short_Pause": "Pausa", "key_short_Down": "Abajo", "Reload": "Actualizar", "key_short_PrintScreen": "ImprPant", "key_full_Win": "Windows", "key_short_Right": "Derecha", "key_short_NumLock": "BloqNum", "key_full_Escape": "Escape", "key_short_CapsLock": "BloqMayús", "key_short_Enter": "Intro", "Static Feeds": "Feeds Estáticos", "key_full_Right": "Flecha derecha", "key_short_Left": "Izquierda", "key_full_PageDown": "Avanzar Página", "key_full_Pause": "Pausa", "key_full_CapsLock": "Bloqueo Mayúsculas", "key_short_Insert": "Insert", "key_full_PrintScreen": "Imprimir Pantalla", "key_full_Meta": "Meta", "User Feeds": "Feeds del Usuario", "key_short_End": "Fin", "FeedReader (qooxdoo powered)": "FeedReader (qooxdoo powered)", "key_full_Home": "Inicio", "key_full_Scroll": "Bloq. Despl.", "key_short_Delete": "Supr", "key_short_PageDown": "AvPág", "key_full_Down": "Flecha abajo"}};
qx.$$locales = {"fr": {"cldr_day_abbreviated_tue": "mar.", "cldr_date_time_format_MMd": "d/MM", "cldr_date_time_format_yyMMMd": "d MMM yy", "cldr_day_wide_thu": "jeudi", "cldr_date_time_format_MMMdd": "dd MMM", "cldr_date_time_format_MEd": "EEE d/M", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "ven.", "cldr_day_wide_sun": "dimanche", "cldr_day_wide_mon": "lundi", "cldr_pm": "PM", "alternateQuotationEnd": "”", "cldr_day_narrow_sun": "D", "cldr_date_format_full": "EEEE d MMMM yyyy", "cldr_month_abbreviated_9": "sept.", "cldr_month_abbreviated_8": "août", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_month_abbreviated_1": "janv.", "cldr_month_abbreviated_3": "mars", "cldr_month_abbreviated_2": "févr.", "cldr_month_abbreviated_5": "mai", "cldr_month_abbreviated_4": "avr.", "cldr_month_abbreviated_7": "juil.", "cldr_month_abbreviated_6": "juin", "cldr_date_time_format_MMMd": "d MMM", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_narrow_tue": "M", "cldr_date_time_format_MMMEd": "E d MMM", "cldr_date_time_format_yQ": "QQQ yyyy", "cldr_month_wide_2": "février", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "janvier", "cldr_month_wide_6": "juin", "cldr_month_wide_7": "juillet", "cldr_date_time_format_MMMMd": "d MMMM", "cldr_month_wide_5": "mai", "cldr_month_wide_8": "août", "cldr_month_wide_9": "septembre", "cldr_date_time_format_MMMMEd": "EEE d MMMM", "cldr_month_wide_10": "octobre", "cldr_month_wide_11": "novembre", "cldr_month_wide_12": "décembre", "cldr_date_time_format_MMdd": "dd/MM", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": " ", "alternateQuotationStart": "“", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_date_time_format_yMMMEd": "EEE d MMM yyyy", "cldr_date_time_format_yMEd": "EEE d/M/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yyMM": "MM/yy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d MMMM yyyy", "cldr_month_abbreviated_11": "nov.", "cldr_month_abbreviated_10": "oct.", "cldr_month_abbreviated_12": "déc.", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_wide_fri": "vendredi", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "mardi", "cldr_date_time_format_Md": "M-d", "cldr_day_abbreviated_mon": "lun.", "cldr_month_narrow_3": "M", "quotationEnd": "»", "cldr_date_time_format_yyMMMEEEd": "EEE d MMM yy", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_time_format_yyQ": "QQQ yy", "cldr_date_format_medium": "d MMM yyyy", "cldr_day_abbreviated_wed": "mer.", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "«", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "sam.", "cldr_day_narrow_wed": "M", "cldr_date_time_format_hhmmss": "HH:mm:ss", "cldr_am": "AM", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_narrow_fri": "V", "cldr_day_wide_sat": "samedi", "cldr_day_narrow_thu": "J", "cldr_month_wide_3": "mars", "cldr_day_abbreviated_sun": "dim.", "cldr_day_abbreviated_thu": "jeu.", "cldr_date_format_short": "dd/MM/yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_day_wide_wed": "mercredi", "cldr_day_narrow_mon": "L", "cldr_date_time_format_hhmm": "HH:mm", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_date_time_format_y": "yyyy", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "avril", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_d": "d"}, "en": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "C": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "de": {"cldr_day_abbreviated_tue": "Di.", "cldr_date_time_format_MMd": "d.MM.", "cldr_day_wide_thu": "Donnerstag", "cldr_date_time_format_MEd": "E, d.M.", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fr.", "cldr_day_wide_sun": "Sonntag", "cldr_day_wide_mon": "Montag", "cldr_pm": "nachm.", "alternateQuotationEnd": "‘", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, d. MMMM yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mär", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "Mai", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "d. MMM", "cldr_date_time_format_yM": "yyyy-M", "cldr_day_narrow_tue": "D", "cldr_date_time_format_MMMEd": "E d. MMM", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_yyMMdd": "dd.MM.yy", "cldr_month_wide_2": "Februar", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "Januar", "cldr_month_wide_6": "Juni", "cldr_month_wide_7": "Juli", "cldr_date_time_format_MMMMd": "d. MMMM", "cldr_month_wide_5": "Mai", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E d. MMMM", "cldr_month_wide_10": "Oktober", "cldr_month_wide_11": "November", "cldr_month_wide_12": "Dezember", "cldr_date_time_format_MMdd": "dd.MM.", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": ".", "alternateQuotationStart": "‚", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_date_time_format_yMMMEd": "EEE, d. MMM yyyy", "cldr_date_time_format_yMEd": "EEE, yyyy-M-d", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yyMM": "MM.yy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d. MMMM yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Okt", "cldr_month_abbreviated_12": "Dez", "cldr_date_time_format_MMMMdd": "dd. MMMM", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_wide_fri": "Freitag", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "Dienstag", "cldr_date_time_format_Ed": "E d", "cldr_date_time_format_Md": "d.M.", "cldr_month_narrow_1": "J", "cldr_day_abbreviated_mon": "Mo.", "cldr_month_narrow_3": "M", "quotationEnd": "“", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_time_format_yyQ": "Q yy", "cldr_date_format_medium": "dd.MM.yyyy", "cldr_day_abbreviated_wed": "Mi.", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "„", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sa.", "cldr_day_narrow_wed": "M", "cldr_date_time_format_hhmmss": "hh:mm:ss a", "cldr_am": "vorm.", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Samstag", "cldr_day_narrow_thu": "D", "cldr_month_wide_3": "März", "cldr_day_abbreviated_sun": "So.", "cldr_date_time_format_H": "H", "cldr_day_abbreviated_thu": "Do.", "cldr_date_format_short": "dd.MM.yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_day_wide_wed": "Mittwoch", "cldr_day_narrow_mon": "M", "cldr_date_time_format_hhmm": "hh:mm a", "cldr_date_time_format_yyyy": "yyyy", "cldr_month_narrow_2": "F", "cldr_date_time_format_y": "yyyy", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_d": "d"}, "sv": {"cldr_date_format_long": "d MMMM yyyy", "cldr_month_abbreviated_11": "nov", "cldr_month_abbreviated_10": "okt", "cldr_month_abbreviated_12": "dec", "cldr_date_time_format_MMMMEEEd": "EEEE d MMMM", "cldr_date_time_format_mmss": "mm.ss", "cldr_day_abbreviated_tue": "tis", "cldr_date_time_format_MMd": "d/M", "cldr_day_wide_fri": "fredag", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "tisdag", "cldr_date_time_format_Hm": "H.mm", "cldr_date_time_format_hhmm": "hh.mm", "cldr_day_wide_thu": "torsdag", "cldr_date_time_format_MEd": "E d/M", "cldr_date_time_format_MMM": "LLL", "cldr_date_time_format_yyyyQQQQ": "QQQQ yyyy", "cldr_day_abbreviated_fri": "fre", "cldr_day_wide_sun": "söndag", "cldr_date_time_format_yyyyMMM": "MMM yyyy", "cldr_day_wide_mon": "måndag", "cldr_day_abbreviated_mon": "mån", "cldr_pm": "em", "cldr_number_decimal_separator": ",", "alternateQuotationEnd": "’", "cldr_date_time_format_y": "yyyy", "cldr_day_narrow_sun": "S", "cldr_number_percent_format": "#,##0 %", "cldr_month_narrow_12": "D", "quotationEnd": "”", "cldr_date_time_format_MMMMd": "d MMMM", "cldr_day_narrow_sat": "L", "cldr_date_time_format_Md": "d/M", "cldr_date_format_medium": "d MMM yyyy", "cldr_date_time_format_yyQ": "Q yy", "cldr_date_format_full": "EEEE 'den' d MMMM yyyy", "cldr_month_abbreviated_9": "sep", "cldr_month_abbreviated_8": "aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_date_time_format_yyMMM": "MMM -yy", "cldr_date_time_format_yQQQ": "yyyy QQQ", "cldr_month_abbreviated_1": "jan", "cldr_month_abbreviated_3": "mar", "cldr_month_abbreviated_2": "feb", "cldr_month_abbreviated_5": "maj", "cldr_month_abbreviated_4": "apr", "cldr_month_abbreviated_7": "jul", "cldr_month_abbreviated_6": "jun", "cldr_date_time_format_MMMd": "d MMM", "cldr_date_time_format_yM": "yyyy-MM", "cldr_day_wide_sat": "lördag", "cldr_date_time_format_MMMEd": "E d MMM", "cldr_day_abbreviated_wed": "ons", "alternateQuotationStart": "’", "cldr_date_time_format_yQ": "yyyy Q", "cldr_day_narrow_wed": "O", "cldr_number_group_separator": " ", "cldr_date_time_format_hhmmss": "HH:mm:ss", "cldr_month_wide_2": "februari", "cldr_month_wide_3": "mars", "cldr_month_wide_1": "januari", "cldr_month_wide_6": "juni", "cldr_month_wide_7": "juli", "cldr_month_wide_4": "april", "cldr_month_wide_5": "maj", "cldr_month_wide_8": "augusti", "cldr_month_wide_9": "september", "cldr_date_time_format_MMMMEd": "E d MMMM", "cldr_date_time_format_yMMMM": "yyyy MMMM", "cldr_month_wide_10": "oktober", "cldr_month_wide_11": "november", "cldr_month_wide_12": "december", "cldr_date_time_format_MMdd": "d/M", "cldr_date_time_format_yMMM": "yyyy MMM", "cldr_day_narrow_fri": "F", "cldr_day_narrow_tue": "T", "cldr_date_time_format_ms": "mm.ss", "cldr_day_narrow_thu": "T", "cldr_time_format_short": "HH.mm", "cldr_time_format_medium": "HH.mm.ss", "cldr_day_abbreviated_sun": "sön", "cldr_day_abbreviated_thu": "tors", "cldr_date_format_short": "yyyy-MM-dd", "cldr_date_time_format_M": "L", "cldr_time_format_long": "HH.mm.ss z", "cldr_date_time_format_yMMMEd": "EEE d MMM yyyy", "cldr_date_time_format_HHmmss": "HH.mm.ss", "cldr_date_time_format_yMEd": "EEE, yyyy-MM-dd", "cldr_day_wide_wed": "onsdag", "cldr_day_narrow_mon": "M", "cldr_date_time_format_yyyyMM": "yyyy-MM", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_narrow_5": "M", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "lör", "cldr_date_time_format_yyMM": "yy-MM", "cldr_am": "fm", "cldr_time_format_full": "'kl'. HH.mm.ss v", "quotationStart": "”", "cldr_date_time_format_d": "d"}, "it": {"cldr_date_format_long": "dd MMMM yyyy", "cldr_month_abbreviated_11": "nov", "cldr_month_abbreviated_10": "ott", "cldr_month_abbreviated_12": "dic", "cldr_date_time_format_MMMMdd": "dd MMMM", "quotationStart": "‘", "cldr_day_abbreviated_tue": "mar", "cldr_day_wide_fri": "Venerdì", "cldr_date_time_format_HHmm": "HH.mm", "cldr_day_wide_tue": "Martedì", "cldr_date_time_format_Hm": "HH.mm", "cldr_day_wide_thu": "Giovedì", "cldr_date_time_format_MEd": "EEE d/M", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "ven", "cldr_day_wide_sun": "Domenica", "cldr_day_wide_mon": "Lunedì", "cldr_day_abbreviated_mon": "lun", "cldr_pm": "p.", "cldr_number_decimal_separator": ",", "alternateQuotationEnd": "”", "cldr_date_time_format_y": "yyyy", "cldr_day_narrow_sun": "D", "cldr_number_percent_format": "#,##0%", "cldr_month_narrow_12": "D", "quotationEnd": "’", "cldr_date_time_format_MMMMd": "d MMMM", "cldr_day_narrow_sat": "S", "cldr_date_time_format_Md": "d/M", "cldr_date_format_medium": "dd/MMM/yyyy", "cldr_date_time_format_yyQ": "Q yy", "cldr_date_format_full": "EEEE d MMMM yyyy", "cldr_month_abbreviated_9": "set", "cldr_month_abbreviated_8": "ago", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_month_abbreviated_1": "gen", "cldr_month_abbreviated_3": "mar", "cldr_month_abbreviated_2": "feb", "cldr_month_abbreviated_5": "mag", "cldr_month_abbreviated_4": "apr", "cldr_month_abbreviated_7": "lug", "cldr_month_abbreviated_6": "giu", "cldr_date_time_format_MMMd": "d MMM", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_wide_sat": "Sabato", "cldr_date_time_format_MMMEd": "EEE d MMM", "cldr_day_abbreviated_wed": "mer", "alternateQuotationStart": "“", "cldr_date_time_format_yQ": "Q-yyyy", "cldr_day_narrow_wed": "M", "cldr_number_group_separator": ".", "cldr_date_time_format_hhmmss": "hh.mm.ss a", "cldr_month_wide_2": "Febbraio", "cldr_month_wide_3": "Marzo", "cldr_month_wide_1": "Gennaio", "cldr_month_wide_6": "Giugno", "cldr_month_wide_7": "Luglio", "cldr_month_wide_4": "Aprile", "cldr_month_wide_5": "Maggio", "cldr_month_wide_8": "agosto", "cldr_month_wide_9": "settembre", "cldr_date_time_format_MMMMEd": "EEE d MMMM", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_wide_10": "ottobre", "cldr_month_wide_11": "novembre", "cldr_month_wide_12": "dicembre", "cldr_date_time_format_MMdd": "dd/MM", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_narrow_fri": "V", "cldr_day_narrow_tue": "M", "cldr_date_time_format_ms": "mm:ss", "cldr_day_narrow_thu": "G", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_time_format_short": "HH.mm", "cldr_time_format_medium": "HH.mm.ss", "cldr_day_abbreviated_sun": "dom", "cldr_day_abbreviated_thu": "gio", "cldr_date_format_short": "dd/MM/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "HH.mm.ss z", "cldr_date_time_format_yMMMEd": "EEE d MMM yyyy", "cldr_date_time_format_HHmmss": "HH.mm.ss", "cldr_date_time_format_yMEd": "EEE, d-M-yyyy", "cldr_day_wide_wed": "Mercoledì", "cldr_day_narrow_mon": "L", "cldr_date_time_format_hhmm": "hh.mm a", "cldr_month_narrow_1": "G", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_narrow_5": "M", "cldr_month_narrow_6": "G", "cldr_month_narrow_7": "L", "cldr_month_narrow_8": "A", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "sab", "cldr_date_time_format_yyMM": "MM/yy", "cldr_am": "m.", "cldr_time_format_full": "HH.mm.ss v", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_time_format_d": "d"}, "es": {"cldr_date_format_long": "d 'de' MMMM 'de' yyyy", "cldr_month_abbreviated_11": "nov", "cldr_month_abbreviated_10": "oct", "cldr_month_abbreviated_12": "dic", "quotationStart": "‘", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_abbreviated_tue": "mar", "cldr_date_time_format_MMd": "d/MM", "cldr_day_wide_fri": "viernes", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "martes", "cldr_date_time_format_Hm": "H:mm", "cldr_day_wide_thu": "jueves", "cldr_date_time_format_MMMdd": "dd-MMM", "cldr_date_time_format_MEd": "E d-M", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "vie", "cldr_day_wide_sun": "domingo", "cldr_date_time_format_hhmm": "hh:mm a", "cldr_day_wide_mon": "lunes", "cldr_day_abbreviated_mon": "lun", "cldr_pm": "p.m.", "cldr_number_decimal_separator": ",", "alternateQuotationEnd": "”", "cldr_date_time_format_y": "yyyy", "cldr_day_narrow_sun": "D", "cldr_number_percent_format": "#,##0%", "cldr_month_narrow_12": "D", "quotationEnd": "’", "cldr_date_time_format_MMMMd": "d 'de' MMMM", "cldr_day_narrow_sat": "S", "cldr_date_time_format_Md": "d/M", "cldr_date_format_medium": "dd/MM/yyyy", "cldr_date_time_format_yyQ": "Q yy", "cldr_date_format_full": "EEEE d 'de' MMMM 'de' yyyy", "cldr_month_abbreviated_9": "sep", "cldr_month_abbreviated_8": "ago", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_date_time_format_yyMMM": "MMM-yy", "cldr_date_time_format_yQQQ": "yyyy 'trimestre' Q", "cldr_month_abbreviated_1": "ene", "cldr_month_abbreviated_3": "mar", "cldr_month_abbreviated_2": "feb", "cldr_month_abbreviated_5": "may", "cldr_month_abbreviated_4": "abr", "cldr_month_abbreviated_7": "jul", "cldr_month_abbreviated_6": "jun", "cldr_date_time_format_MMMd": "d MMM", "cldr_date_time_format_yM": "M-yyyy", "cldr_day_wide_sat": "sábado", "cldr_date_time_format_MMMEd": "E d MMM", "cldr_day_abbreviated_wed": "mié", "alternateQuotationStart": "“", "cldr_date_time_format_yQ": "yyyy 'trimestre' Q", "cldr_day_narrow_wed": "M", "cldr_number_group_separator": ".", "cldr_date_time_format_hhmmss": "hh:mm:ss a", "cldr_month_wide_2": "febrero", "cldr_month_wide_3": "marzo", "cldr_month_wide_1": "enero", "cldr_month_wide_6": "junio", "cldr_month_wide_7": "julio", "cldr_month_wide_4": "abril", "cldr_month_wide_5": "mayo", "cldr_month_wide_8": "agosto", "cldr_month_wide_9": "septiembre", "cldr_date_time_format_MMMMEd": "E d MMMM", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_wide_10": "octubre", "cldr_month_wide_11": "noviembre", "cldr_month_wide_12": "diciembre", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_narrow_fri": "V", "cldr_day_narrow_tue": "M", "cldr_date_time_format_ms": "mm:ss", "cldr_day_narrow_thu": "J", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_day_abbreviated_sun": "dom", "cldr_day_abbreviated_thu": "jue", "cldr_date_format_short": "dd/MM/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "HH:mm:ss z", "cldr_date_time_format_yMMMEd": "EEE, yyyy MMM d", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_date_time_format_yMEd": "EEE, d-M-yyyy", "cldr_day_wide_wed": "miércoles", "cldr_day_narrow_mon": "L", "cldr_date_time_format_yyyyMM": "MM/yyyy", "cldr_month_narrow_1": "E", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_narrow_5": "M", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "sáb", "cldr_date_time_format_yyMM": "MM/yy", "cldr_am": "a.m.", "cldr_time_format_full": "hh:mm:ss a v", "cldr_date_time_format_yyQQQQ": "QQQQ 'de' yyyy", "cldr_date_time_format_d": "d"}}

qx.$$loader = {
  parts : {"add-feed-window":[0,1,3],"boot":[0],"settings":[0,1,2]},
  uris : [["script/feedreader-0.js"],
["script/feedreader-1.js"],
["script/feedreader-2.js"],
["script/feedreader-3.js"]],
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
(function(){var bi="__hg",bh="keypress",bg="focusout",bf="__hf",be="__hd",bd="activate",bc="Tab",bb="singleton",ba="deactivate",Y="__he",W="focusin",X="qx.ui.core.FocusHandler";
qx.Class.define(X,{extend:qx.core.Object,type:bb,construct:function(){arguments.callee.base.call(this);
this.__hd={};
},members:{__hd:null,__he:null,__hf:null,__hg:null,connectTo:function(b){b.addListener(bh,this.__hh,this);
b.addListener(W,this._onFocusIn,this,true);
b.addListener(bg,this._onFocusOut,this,true);
b.addListener(bd,this._onActivate,this,true);
b.addListener(ba,this._onDeactivate,this,true);
},addRoot:function(c){this.__hd[c.$$hash]=c;
},removeRoot:function(t){delete this.__hd[t.$$hash];
},getActiveWidget:function(){return this.__he;
},isActive:function(F){return this.__he==F;
},getFocusedWidget:function(){return this.__hf;
},isFocused:function(s){return this.__hf==s;
},isFocusRoot:function(p){return !!this.__hd[p.$$hash];
},_onActivate:function(e){var j=e.getTarget();
this.__he=j;
var h=this.__hi(j);

if(h!=this.__hg){this.__hg=h;
}},_onDeactivate:function(e){var N=e.getTarget();

if(this.__he==N){this.__he=null;
}},_onFocusIn:function(e){var bl=e.getTarget();

if(bl!=this.__hf){this.__hf=bl;
bl.visualizeFocus();
}},_onFocusOut:function(e){var a=e.getTarget();

if(a==this.__hf){this.__hf=null;
a.visualizeBlur();
}},__hh:function(e){if(e.getKeyIdentifier()!=bc){return;
}
if(!this.__hg){return;
}e.stopPropagation();
e.preventDefault();
var q=this.__hf;

if(!e.isShiftPressed()){var r=q?this.__hm(q):this.__hk();
}else{var r=q?this.__hn(q):this.__hl();
}if(r){r.tabFocus();
}},__hi:function(bj){var bk=this.__hd;

while(bj){if(bk[bj.$$hash]){return bj;
}bj=bj.getLayoutParent();
}return null;
},__hj:function(u,v){if(u===v){return 0;
}var x=u.getTabIndex()||0;
var w=v.getTabIndex()||0;

if(x!=w){return x-w;
}var C=u.getContainerElement().getDomElement();
var B=v.getContainerElement().getDomElement();
var A=qx.bom.element.Location;
var z=A.get(C);
var y=A.get(B);
if(z.top!=y.top){return z.top-y.top;
}if(z.left!=y.left){return z.left-y.left;
}var D=u.getZIndex();
var E=v.getZIndex();

if(D!=E){return D-E;
}return 0;
},__hk:function(){return this.__hq(this.__hg,null);
},__hl:function(){return this.__hr(this.__hg,null);
},__hm:function(G){var H=this.__hg;

if(H==G){return this.__hk();
}
while(G&&G.getAnonymous()){G=G.getLayoutParent();
}
if(G==null){return [];
}var I=[];
this.__ho(H,G,I);
I.sort(this.__hj);
var J=I.length;
return J>0?I[0]:this.__hk();
},__hn:function(k){var m=this.__hg;

if(m==k){return this.__hl();
}
while(k&&k.getAnonymous()){k=k.getLayoutParent();
}
if(k==null){return [];
}var n=[];
this.__hp(m,k,n);
n.sort(this.__hj);
var o=n.length;
return o>0?n[o-1]:this.__hl();
},__ho:function(parent,S,T){var U=parent.getLayoutChildren();
var V;

for(var i=0,l=U.length;i<l;i++){V=U[i];
if(!(V instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(V)&&V.isEnabled()){if(V.isTabable()&&this.__hj(S,V)<0){T.push(V);
}this.__ho(V,S,T);
}}},__hp:function(parent,O,P){var Q=parent.getLayoutChildren();
var R;

for(var i=0,l=Q.length;i<l;i++){R=Q[i];
if(!(R instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(R)&&R.isEnabled()){if(R.isTabable()&&this.__hj(O,R)>0){P.push(R);
}this.__hp(R,O,P);
}}},__hq:function(parent,K){var L=parent.getLayoutChildren();
var M;

for(var i=0,l=L.length;i<l;i++){M=L[i];
if(!(M instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(M)&&M.isEnabled()){if(M.isTabable()){if(K==null||this.__hj(M,K)<0){K=M;
}}K=this.__hq(M,K);
}}return K;
},__hr:function(parent,d){var f=parent.getLayoutChildren();
var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];
if(!(g instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(g)&&g.isEnabled()){if(g.isTabable()){if(d==null||this.__hj(g,d)>0){d=g;
}}d=this.__hr(g,d);
}}return d;
}},destruct:function(){this._disposeMap(be);
this._disposeFields(bf,Y,bi);
}});
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
(function(){var d="qx.event.IEventHandler";
qx.Interface.define(d,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(e,f){},registerEvent:function(g,h,i){},unregisterEvent:function(a,b,c){}}});
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
(function(){var e="abstract",d="__gC",c="qx.ui.layout.Abstract",b="__gB";
qx.Class.define(c,{type:e,extend:qx.core.Object,members:{__gB:null,_invalidChildrenCache:null,__gC:null,invalidateLayoutCache:function(){this.__gB=null;
},renderLayout:function(f,g){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gB){return this.__gB;
}return this.__gB=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(a){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var h=this.__gC;

if(h instanceof qx.ui.core.LayoutItem){h.clearSeparators();
}},_renderSeparator:function(j,k){this.__gC.renderSeparator(j,k);
},connectToWidget:function(i){if(i&&this.__gC){throw new Error("It is not possible to manually set the connected widget.");
}this.__gC=i;
this.invalidateChildrenCache();
},_applyLayoutChange:function(){if(this.__gC){this.__gC.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__gC.getLayoutChildren();
}},destruct:function(){this._disposeFields(d,b);
}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var w=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,E,p;
var A,v;
var y=this.getGap();
var D=this.getCenter();
if(o===k||o===f){var x=length-1;
var t=-1;
var q=-1;
}else{var x=0;
var t=length;
var q=1;
}if(o==h||o==k){if(D){var z=0;

for(var i=x;i!=t;i+=q){p=r[i].getSizeHint().height;

if(p>0){z+=p;

if(i!=x){z+=y;
}}}top=Math.round((m-z)/2);
}else{top=0;
}
for(var i=x;i!=t;i+=q){A=r[i];
v=A.getSizeHint();
E=Math.min(v.maxWidth,Math.max(l,v.minWidth));
p=v.height;
F=w.computeHorizontalAlignOffset(d,E,l);
A.renderLayout(F,top,E,p);
if(p>0){top+=p+y;
}}}else{var u=l;
var s=0;
var n=null;
var C=0;

for(var i=x;i!=t;i+=q){A=r[i];
E=A.getSizeHint().width;

if(E>0){if(!n&&A instanceof qx.ui.basic.Label){n=A;
}else{u-=E;
}s+=E;
C++;
}}
if(C>1){var B=(C-1)*y;
u-=B;
s+=B;
}
if(D&&s<l){F=Math.round((l-s)/2);
}else{F=0;
}
for(var i=x;i!=t;i+=q){A=r[i];
v=A.getSizeHint();
p=Math.min(v.maxHeight,Math.max(m,v.minHeight));

if(A===n){E=Math.max(v.minWidth,Math.min(u,v.width));
}else{E=v.width;
}top=w.computeVerticalAlignOffset(e,v.height,m);
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
(function(){var p="",o="underline",n="Boolean",m="px",k='"',j="italic",h="normal",g="bold",f="_applyItalic",e="_applyBold",B="Integer",A="_applyFamily",z="_applyLineHeight",y="Array",x="overline",w="line-through",v="qx.bom.Font",u="Number",t="_applyDecoration",s=" ",q="_applySize",r=",";
qx.Class.define(v,{extend:qx.core.Object,construct:function(a,b){arguments.callee.base.call(this);

if(a!==undefined){this.setSize(a);
}
if(b!==undefined){this.setFamily(b);
}},statics:{fromString:function(L){var P=new qx.bom.Font();
var N=L.split(/\s+/);
var name=[];
var O;

for(var i=0;i<N.length;i++){switch(O=N[i]){case g:P.setBold(true);
break;
case j:P.setItalic(true);
break;
case o:P.setDecoration(o);
break;
default:var M=parseInt(O,10);

if(M==O||qx.lang.String.contains(O,m)){P.setSize(M);
}else{name.push(O);
}break;
}}
if(name.length>0){P.setFamily(name);
}return P;
},fromConfig:function(H){var I=new qx.bom.Font;
I.set(H);
return I;
},__cB:{fontFamily:p,fontSize:p,fontWeight:p,fontStyle:p,textDecoration:p,lineHeight:1.2},getDefaultStyles:function(){return this.__cB;
}},properties:{size:{check:B,nullable:true,apply:q},lineHeight:{check:u,nullable:true,apply:z},family:{check:y,nullable:true,apply:A},bold:{check:n,nullable:true,apply:e},italic:{check:n,nullable:true,apply:f},decoration:{check:[o,w,x],nullable:true,apply:t}},members:{__cC:null,__cD:null,__cE:null,__cF:null,__cG:null,__cH:null,_applySize:function(Q,R){this.__cC=Q===null?null:Q+m;
},_applyLineHeight:function(J,K){this.__cH=J===null?null:J;
},_applyFamily:function(E,F){var G=p;

for(var i=0,l=E.length;i<l;i++){if(E[i].indexOf(s)>0){G+=k+E[i]+k;
}else{G+=E[i];
}
if(i!==l-1){G+=r;
}}this.__cD=G;
},_applyBold:function(S,T){this.__cE=S===null?null:S?g:h;
},_applyItalic:function(c,d){this.__cF=c===null?null:c?j:h;
},_applyDecoration:function(C,D){this.__cG=C===null?null:C;
},getStyles:function(){return {fontFamily:this.__cD,fontSize:this.__cC,fontWeight:this.__cE,fontStyle:this.__cF,textDecoration:this.__cG,lineHeight:this.__cH};
}}});
})();
(function(){var e="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(e,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(j,k){return this.getChildrenContainer().add(j,k);
},remove:function(f){return this.getChildrenContainer().remove(f);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(a){return this.getChildrenContainer().indexOf(a);
},addAt:function(g,h,i){this.getChildrenContainer().addAt(g,h,i);
},addBefore:function(b,c,d){this.getChildrenContainer().addBefore(b,c,d);
},addAfter:function(l,m,n){this.getChildrenContainer().addAfter(l,m,n);
},removeAt:function(o){this.getChildrenContainer().removeAt(o);
}}});
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
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bI=d||c;
this.__bJ=e||c;
},members:{__bI:null,__bJ:null,getComment:function(){return this.__bI;
},message:function(){return this.__bJ;
},toString:function(){return this.__bI+b+this.__bJ;
}}});
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
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
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
(function(){var c="qx.event.type.Data",b="qx.ui.form.IFormElement",a="boolean";
qx.Interface.define(b,{events:{"changeValue":c,"changeName":c,"changeEnabled":c},members:{setEnabled:function(d){this.assertType(d,a);
},getEnabled:function(){},setName:function(e){this.assertString(e);
},getName:function(){},setValue:function(f){return arguments.length==1;
},getValue:function(){}}});
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
(function(){var t="number",s="string",r="qx.ui.layout.Canvas";
qx.Class.define(r,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(a,b){var o=this._getLayoutChildren();
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

if(q&&typeof q===s){q=Math.round(parseFloat(q)*a/100);
}c=k.right!=null?k.right:k.edge;

if(c&&typeof c===s){c=Math.round(parseFloat(c)*a/100);
}top=k.top!=null?k.top:k.edge;

if(top&&typeof top===s){top=Math.round(parseFloat(top)*b/100);
}d=k.bottom!=null?k.bottom:k.edge;

if(d&&typeof d===s){d=Math.round(parseFloat(d)*b/100);
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
}},_computeSizeHint:function(){var J=0,I=0;
var G=0,E=0;
var C,B;
var A,y;
var u=this._getLayoutChildren();
var x,H,w;
var K,top,v,z;

for(var i=0,l=u.length;i<l;i++){x=u[i];
H=x.getLayoutProperties();
w=x.getSizeHint();
var F=x.getMarginLeft()+x.getMarginRight();
var D=x.getMarginTop()+x.getMarginBottom();
C=w.width+F;
B=w.minWidth+F;
K=H.left!=null?H.left:H.edge;

if(K&&typeof K===t){C+=K;
B+=K;
}v=H.right!=null?H.right:H.edge;

if(v&&typeof v===t){C+=v;
B+=v;
}J=Math.max(J,C);
I=Math.max(I,B);
A=w.height+D;
y=w.minHeight+D;
top=H.top!=null?H.top:H.edge;

if(top&&typeof top===t){A+=top;
y+=top;
}z=H.bottom!=null?H.bottom:H.edge;

if(z&&typeof z===t){A+=z;
y+=z;
}G=Math.max(G,A);
E=Math.max(E,y);
}return {width:J,minWidth:I,height:G,minHeight:E};
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
(function(){var d="__cU",c="qx.util.DeferredCallManager",b="__cV",a="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:a,construct:function(){this.__cU={};
this.__cV=qx.lang.Function.bind(this.__da,this);
this.__cW=false;
},members:{__cX:null,__cY:null,__cU:null,__cW:null,__cV:null,schedule:function(g){if(this.__cX==null){this.__cX=window.setTimeout(this.__cV,0);
}var h=g.toHashCode();
if(this.__cY&&this.__cY[h]){return;
}this.__cU[h]=g;
this.__cW=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__cY&&this.__cY[f]){this.__cY[f]=null;
return;
}delete this.__cU[f];
if(qx.lang.Object.isEmpty(this.__cU)&&this.__cX!=null){window.clearTimeout(this.__cX);
this.__cX=null;
}},__da:function(){this.__cX=null;
while(this.__cW){this.__cY=qx.lang.Object.clone(this.__cU);
this.__cU={};
this.__cW=false;

for(var j in this.__cY){var i=this.__cY[j];

if(i){this.__cY[j]=null;
i.call();
}}}this.__cY=null;
}},destruct:function(){if(this.__cX!=null){window.clearTimeout(this.__cX);
}this._disposeFields(b,d);
}});
})();
(function(){var f="qx.util.DeferredCall",e="__dd",d="__db",c="__dc";
qx.Class.define(f,{extend:qx.core.Object,construct:function(a,b){arguments.callee.base.call(this);
this.__db=a;
this.__dc=b||null;
this.__dd=qx.util.DeferredCallManager.getInstance();
},members:{__db:null,__dc:null,__dd:null,cancel:function(){this.__dd.cancel(this);
},schedule:function(){this.__dd.schedule(this);
},call:function(){this.__dc?this.__db.apply(this.__dc):this.__db();
}},destruct:function(g,h){this.cancel();
this._disposeFields(c,d,e);
}});
})();
(function(){var cC="element",cB="qx.client",cA="div",cz="",cy="mshtml",cx="qx.html.Element",cw="|capture|",cv="__df",cu="focus",ct="__dz",cU="blur",cT="deactivate",cS="capture",cR="__dj",cQ="__dq",cP="__du",cO="__ds",cN="__dn",cM="releaseCapture",cL="tabIndex",cJ="activate",cK="none",cH="__dr",cI="__dp",cF="__dk",cG="__dt",cD="__do",cE="|bubble|";
qx.Class.define(cx,{extend:qx.core.Object,construct:function(bz){arguments.callee.base.call(this);
this.__de=bz||cA;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],_scheduleFlush:function(cq){qx.html.Element.__dE.schedule();
},_mshtmlVisibilitySort:qx.core.Variant.select(cB,{"mshtml":function(a,b){var dJ=a.__df;
var dI=b.__df;

if(dJ.contains(dI)){return 1;
}
if(dI.contains(dJ)){return -1;
}return 0;
},"default":null}),flush:function(){var w;
{};
var z=[];
var B=this._modified;

for(var I in B){w=B[I];
if(w.__dx()){if(w.__df&&qx.dom.Hierarchy.isRendered(w.__df)){z.push(w);
}else{{};
w.__dw();
}delete B[I];
}}
for(var i=0,l=z.length;i<l;i++){w=z[i];
{};
w.__dw();
}var C=this._visibility;
if(qx.core.Variant.isSet(cB,cy)){var A=[];

for(var I in C){A.push(C[I]);
}if(A.length>1){A.sort(this._mshtmlVisibilitySort);
C=this._visibility={};

for(var i=0;i<A.length;i++){w=A[i];
C[w.$$hash]=w;
}}}
for(var I in C){w=C[I];
{};
w.__df.style.display=w.__di?cz:cK;
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
qx.html.Element._scheduleFlush(cC);
},_createDomElement:function(){return qx.bom.Element.create(this.__de);
},__dw:function(){{};
var ds=this.__du;

if(ds){var length=ds.length;
var dt;

for(var i=0;i<length;i++){dt=ds[i];

if(dt.__di&&dt.__dh&&!dt.__df){dt.__dw();
}}}
if(!this.__df){this.__df=this._createDomElement();
this.__df.$$hash=this.$$hash;
this._copyData(false);

if(ds&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dv){this._syncChildren();
}}delete this.__dv;
},_insertChildren:function(){var bL=this.__du;
var length=bL.length;
var bN;

if(length>2){var bM=document.createDocumentFragment();

for(var i=0;i<length;i++){bN=bL[i];

if(bN.__df&&bN.__dh){bM.appendChild(bN.__df);
}}this.__df.appendChild(bM);
}else{var bM=this.__df;

for(var i=0;i<length;i++){bN=bL[i];

if(bN.__df&&bN.__dh){bM.appendChild(bN.__df);
}}}},_syncChildren:function(){var be=qx.core.ObjectRegistry;
var U=this.__du;
var bc=U.length;
var V;
var ba;
var X=this.__df;
var bb=X.childNodes;
var W=0;
var Y;
var bd;
for(var i=bb.length-1;i>=0;i--){Y=bb[i];
ba=be.fromHashCode(Y.$$hash);

if(!ba||!ba.__dh||ba.__dz!==this){X.removeChild(Y);
{};
}}for(var i=0;i<bc;i++){V=U[i];
if(V.__dh){ba=V.__df;
Y=bb[W];

if(!ba){continue;
}if(ba!=Y){if(Y){X.insertBefore(ba,Y);
}else{X.appendChild(ba);
}{};
}W++;
}}{};
},_copyData:function(bT){var bX=this.__df;
var bW=this.__dr;

if(bW){var bU=qx.bom.element.Attribute;

for(var bY in bW){bU.set(bX,bY,bW[bY]);
}}var bW=this.__dq;

if(bW){var bV=qx.bom.element.Style;

if(bT){for(var bY in bW){bV.set(bX,bY,bW[bY]);
}}else{bV.setCss(bX,bV.compile(bW));
}}var bW=this.__ds;

if(bW){for(var bY in bW){this._applyProperty(bY,bW[bY]);
}}var bW=this.__dt;

if(bW){qx.event.Registration.getManager(bX).importListeners(bX,bW);
delete this.__dt;
}},_syncData:function(){var Q=this.__df;
var P=qx.bom.element.Attribute;
var N=qx.bom.element.Style;
var O=this.__do;

if(O){var T=this.__dr;

if(T){var R;

for(var S in O){R=T[S];

if(R!==undefined){P.set(Q,S,R);
}else{P.reset(Q,S);
}}}this.__do=null;
}var O=this.__dn;

if(O){var T=this.__dq;

if(T){var R;

for(var S in O){R=T[S];

if(R!==undefined){N.set(Q,S,R);
}else{N.reset(Q,S);
}}}this.__dn=null;
}var O=this.__dp;

if(O){var T=this.__ds;

if(T){var R;

for(var S in O){this._applyProperty(S,T[S]);
}}this.__dp=null;
}},__dx:function(){var dD=this;
while(dD){if(dD.__dg){return true;
}
if(!dD.__dh||!dD.__di){return false;
}dD=dD.__dz;
}return false;
},__dy:function(dh){if(dh.__dz===this){throw new Error("Child is already in: "+dh);
}
if(dh.__dg){throw new Error("Root elements could not be inserted into other ones.");
}if(dh.__dz){dh.__dz.remove(dh);
}dh.__dz=this;
if(!this.__du){this.__du=[];
}if(this.__df){this._scheduleChildrenUpdate();
}},__dA:function(m){if(m.__dz!==this){throw new Error("Has no child: "+m);
}if(this.__df){this._scheduleChildrenUpdate();
}delete m.__dz;
},__dB:function(f){if(f.__dz!==this){throw new Error("Has no child: "+f);
}if(this.__df){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__du||null;
},getChild:function(cr){var cs=this.__du;
return cs&&cs[cr]||null;
},hasChildren:function(){var dw=this.__du;
return dw&&dw[0]!==undefined;
},indexOf:function(h){var j=this.__du;
return j?j.indexOf(h):-1;
},hasChild:function(dj){var dk=this.__du;
return dk&&dk.indexOf(dj)!==-1;
},add:function(by){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dy(arguments[i]);
}this.__du.push.apply(this.__du,arguments);
}else{this.__dy(by);
this.__du.push(by);
}return this;
},addAt:function(dm,dn){this.__dy(dm);
qx.lang.Array.insertAt(this.__du,dm,dn);
return this;
},remove:function(dE){var dF=this.__du;

if(!dF){return;
}
if(arguments[1]){var dG;

for(var i=0,l=arguments.length;i<l;i++){dG=arguments[i];
this.__dA(dG);
qx.lang.Array.remove(dF,dG);
}}else{this.__dA(dE);
qx.lang.Array.remove(dF,dE);
}return this;
},removeAt:function(dp){var dq=this.__du;

if(!dq){throw new Error("Has no children!");
}var dr=dq[dp];

if(!dr){throw new Error("Has no child at this position!");
}this.__dA(dr);
qx.lang.Array.removeAt(this.__du,dp);
return this;
},removeAll:function(){var bI=this.__du;

if(bI){for(var i=0,l=bI.length;i<l;i++){this.__dA(bI[i]);
}bI.length=0;
}return this;
},getParent:function(){return this.__dz||null;
},insertInto:function(parent,bK){parent.__dy(this);

if(bK==null){parent.__du.push(this);
}else{qx.lang.Array.insertAt(this.__du,this,bK);
}return this;
},insertBefore:function(dl){var parent=dl.__dz;
parent.__dy(this);
qx.lang.Array.insertBefore(parent.__du,this,dl);
return this;
},insertAfter:function(k){var parent=k.__dz;
parent.__dy(this);
qx.lang.Array.insertAfter(parent.__du,this,k);
return this;
},moveTo:function(bw){var parent=this.__dz;
parent.__dB(this);
var bx=parent.__du.indexOf(this);

if(bx===bw){throw new Error("Could not move to same index!");
}else if(bx<bw){bw--;
}qx.lang.Array.removeAt(parent.__du,bx);
qx.lang.Array.insertAt(parent.__du,this,bw);
return this;
},moveBefore:function(bJ){var parent=this.__dz;
return this.moveTo(parent.__du.indexOf(bJ));
},moveAfter:function(bA){var parent=this.__dz;
return this.moveTo(parent.__du.indexOf(bA)+1);
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
},setRoot:function(dH){this.__dg=dH;
},useMarkup:function(bk){if(this.__df){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(cB,cy)){var bm=document.createElement(cA);
}else{var bm=qx.html.Element.__dC;

if(!bm){bm=qx.html.Element.__dC=document.createElement(cA);
}}bm.innerHTML=bk;
this.__df=bm.firstChild;
this.__df.$$hash=this.$$hash;
this._copyData(true);
return this.__df;
},useElement:function(ch){if(this.__df){throw new Error("Could not overwrite existing element!");
}this.__df=ch;
this.__df.$$hash=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cg=this.getAttribute(cL);

if(cg>=1){return true;
}var cf=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cg>=0&&cf[this.__de]){return true;
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
qx.html.Element._scheduleFlush(cC);
}if(this.__dz){this.__dz._scheduleChildrenUpdate();
}delete this.__di;
},hide:function(){if(!this.__di){return;
}
if(this.__df){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cC);
}this.__di=false;
},isVisible:function(){return this.__di===true;
},scrollChildIntoViewX:function(bf,bg,bh){var bi=this.__df;
var bj=bf.getDomElement();

if(bh!==false&&bi&&bi.offsetWidth&&bj&&bj.offsetWidth){qx.bom.element.Scroll.intoViewX(bj,bi,bg);
}else{this.__dj={element:bf,align:bg};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cC);
}delete this.__dl;
},scrollChildIntoViewY:function(bO,bP,bQ){var bR=this.__df;
var bS=bO.getDomElement();

if(bQ!==false&&bR&&bR.offsetWidth&&bS&&bS.offsetWidth){qx.bom.element.Scroll.intoViewY(bS,bR,bP);
}else{this.__dk={element:bO,align:bP};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cC);
}delete this.__dm;
},scrollToX:function(x,L){var M=this.__df;

if(L!==true&&M&&M.offsetWidth){M.scrollLeft=x;
}else{this.__dl=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cC);
}delete this.__dj;
},getScrollX:function(){var dA=this.__df;

if(dA){return dA.scrollLeft;
}return this.__dl||0;
},scrollToY:function(y,cd){var ce=this.__df;

if(cd!==true&&ce&&ce.offsetWidth){ce.scrollTop=y;
}else{this.__dm=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cC);
}delete this.__dk;
},getScrollY:function(){var c=this.__df;

if(c){return c.scrollTop;
}return this.__dm||0;
},getSelection:function(){var q=this.__df;

if(q){return qx.bom.Selection.get(q);
}return null;
},getSelectionLength:function(){var dC=this.__df;

if(dC){return qx.bom.Selection.getLength(dC);
}return null;
},setSelection:function(ca,cb){var cc=this.__df;

if(cc){qx.bom.Selection.set(cc,ca,cb);
}},clearSelection:function(){var cY=this.__df;

if(cY){qx.bom.Selection.clear(cY);
}},__dD:function(cV){var cW=this.__df;
var cX=qx.html.Element._actions;

if(cW&&cX.length==0){return qx.bom.Element[cV](cW);
}cX.push({type:cV,element:this});
qx.html.Element._scheduleFlush(cC);
},focus:function(){this.__dD(cu);
},blur:function(){this.__dD(cU);
},activate:function(){this.__dD(cJ);
},deactivate:function(){this.__dD(cT);
},capture:function(){this.__dD(cS);
},releaseCapture:function(){this.__dD(cM);
},setStyle:function(bt,bu,bv){if(!this.__dq){this.__dq={};
}
if(this.__dq[bt]==bu){return;
}
if(bu==null){delete this.__dq[bt];
}else{this.__dq[bt]=bu;
}if(this.__df){if(bv){qx.bom.element.Style.set(this.__df,bt,bu);
return this;
}if(!this.__dn){this.__dn={};
}this.__dn[bt]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cC);
}return this;
},setStyles:function(dx,dy){for(var dz in dx){this.setStyle(dz,dx[dz],dy);
}return this;
},removeStyle:function(co,cp){this.setStyle(co,null,cp);
},getStyle:function(dB){return this.__dq?this.__dq[dB]:null;
},getAllStyles:function(){return this.__dq||null;
},setAttribute:function(da,dc,dd){if(!this.__dr){this.__dr={};
}
if(this.__dr[da]==dc){return;
}
if(dc==null){delete this.__dr[da];
}else{this.__dr[da]=dc;
}if(this.__df){if(dd){qx.bom.element.Attribute.set(this.__df,da,dc);
return this;
}if(!this.__do){this.__do={};
}this.__do[da]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cC);
}return this;
},setAttributes:function(n,o){for(var p in n){this.setAttribute(p,n[p],o);
}return this;
},removeAttribute:function(de,df){this.setAttribute(de,null,df);
},getAttribute:function(di){return this.__dr?this.__dr[di]:null;
},_applyProperty:function(name,e){},_setProperty:function(bq,br,bs){if(!this.__ds){this.__ds={};
}
if(this.__ds[bq]==br){return;
}
if(br==null){delete this.__ds[bq];
}else{this.__ds[bq]=br;
}if(this.__df){if(bs){this._applyProperty(bq,br);
return this;
}if(!this.__dp){this.__dp={};
}this.__dp[bq]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cC);
}return this;
},_removeProperty:function(du,dv){this._setProperty(du,null,dv);
},_getProperty:function(bn){var bo=this.__ds;

if(!bo){return null;
}var bp=bo[bn];
return bp==null?null:bp;
},addListener:function(ci,cj,self,ck){if(this.$$disposed){return null;
}var cl;

if(this.__df){return qx.event.Registration.addListener(this.__df,ci,cj,self,ck);
}
if(!this.__dt){this.__dt={};
}
if(ck==null){ck=false;
}var cm=qx.event.Manager.getNextUniqueId();
var cn=ci+(ck?cw:cE)+cm;
this.__dt[cn]={type:ci,listener:cj,self:self,capture:ck,unique:cm};
return cn;
},removeListener:function(bB,bC,self,bD){if(this.$$disposed){return null;
}var bE;

if(this.__df){qx.event.Registration.removeListener(this.__df,bB,bC,self,bD);
}else{var bG=this.__dt;
var bF;

if(bD==null){bD=false;
}
for(var bH in bG){bF=bG[bH];
if(bF.listener===bC&&bF.self===self&&bF.capture===bD&&bF.type===bB){delete bG[bH];
break;
}}}return this;
},removeListenerById:function(d){if(this.$$disposed){return null;
}
if(this.__df){qx.event.Registration.removeListenerById(this.__df,d);
}else{delete this.__dt[d];
}return this;
},hasListener:function(r,s){if(this.$$disposed){return false;
}
if(this.__df){return qx.event.Registration.hasListener(this.__df,r,s);
}var u=this.__dt;
var t;

if(s==null){s=false;
}
for(var v in u){t=u[v];
if(t.capture===s&&t.type===r){return true;
}}return false;
}},defer:function(g){g.__dE=new qx.util.DeferredCall(g.flush,g);
},destruct:function(){var dg=this.__df;

if(dg){qx.event.Registration.getManager(dg).removeAllListeners(dg);
dg.$$hash=cz;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dz;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cP);
this._disposeFields(cH,cQ,cG,cO,cD,cN,cI,cv,ct,cR,cF);
}});
})();
(function(){var j="string",i="Theme",h="__cJ",g="__cI",f="qx.theme.manager.Appearance",e=":",d="changeAppearanceTheme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__cI={};
this.__cJ={};
},properties:{appearanceTheme:{check:i,nullable:true,event:d},theme:{check:i,nullable:true,event:c}},members:{__cK:{},__cI:null,__cJ:null,__cL:function(k,l){var p=l.appearances;
var s=p[k];
if(!s){var t=b;
var m=[];
var r=k.split(t);
var q;

while(!s&&r.length>0){m.unshift(r.pop());
var n=r.join(t);
s=p[n];

if(s){q=s.alias||s;

if(typeof q===j){var o=q+t+m.join(t);
return this.__cL(o,l);
}}}return null;
}else if(typeof s===j){return this.__cL(s,l);
}else if(s.include&&!s.style){return this.__cL(s.include,l);
}return k;
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
}if(A>0){I+=e+A;
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
}},destruct:function(){this._disposeFields(g,h);
}});
})();
(function(){var d="content",c="qx.html.Label";
qx.Class.define(c,{extend:qx.html.Element,members:{__jg:null,_applyProperty:function(name,e){arguments.callee.base.call(this,name,e);

if(name==d){var f=this.getDomElement();
qx.bom.Label.setContent(f,e);
}},_createDomElement:function(){var j=this.__jg;
var i=qx.bom.Label.create(this._content,j);
return i;
},_copyData:function(g){return arguments.callee.base.call(this,true);
},setRich:function(a){var b=this.getDomElement();

if(b){throw new Error("The label mode cannot be modified after initial creation");
}a=!!a;

if(this.__jg==a){return;
}this.__jg=a;
return this;
},setContent:function(h){this._setProperty(d,h);
return this;
},getContent:function(){return this._getProperty(d);
}}});
})();
(function(){var s="middle",r="qx.ui.layout.Util",q="left",p="center",o="top",n="bottom",m="right";
qx.Class.define(r,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(L,M,N){var P,T,O,U;
var Q=M>N;
var V=Math.abs(M-N);
var W,R;
var S={};

for(T in L){P=L[T];
S[T]={potential:Q?P.max-P.value:P.value-P.min,flex:Q?P.flex:1/P.flex,offset:0};
}while(V!=0){U=Infinity;
O=0;

for(T in S){P=S[T];

if(P.potential>0){O+=P.flex;
U=Math.min(U,P.potential/P.flex);
}}if(O==0){break;
}U=Math.min(V,U*O)/O;
W=0;

for(T in S){P=S[T];

if(P.potential>0){R=Math.min(V,P.potential,Math.ceil(U*P.flex));
W+=R-U*P.flex;

if(W>=1){W-=1;
R-=1;
}P.potential-=R;

if(Q){P.offset+=R;
}else{P.offset-=R;
}V-=R;
}}}return S;
},computeHorizontalAlignOffset:function(a,b,c,d,e){if(d==null){d=0;
}
if(e==null){e=0;
}var f=0;

switch(a){case q:f=d;
break;
case m:f=c-b-e;
break;
case p:f=Math.round((c-b)/2);
if(f<d){f=d;
}else if(f<e){f=Math.max(d,c-b-e);
}break;
}return f;
},computeVerticalAlignOffset:function(F,G,H,I,J){if(I==null){I=0;
}
if(J==null){J=0;
}var K=0;

switch(F){case o:K=I;
break;
case n:K=H-G-J;
break;
case s:K=Math.round((H-G)/2);
if(K<I){K=I;
}else if(K<J){K=Math.max(I,H-G-J);
}break;
}return K;
},collapseMargins:function(g){var h=0,k=0;

for(var i=0,l=arguments.length;i<l;i++){var j=arguments[i];

if(j<0){k=Math.min(k,j);
}else if(j>0){h=Math.max(h,j);
}}return h+k;
},computeHorizontalGaps:function(t,u,v){if(u==null){u=0;
}var w=0;

if(v){w+=t[0].getMarginLeft();

for(var i=1,l=t.length;i<l;i+=1){w+=this.collapseMargins(u,t[i-1].getMarginRight(),t[i].getMarginLeft());
}w+=t[l-1].getMarginRight();
}else{for(var i=1,l=t.length;i<l;i+=1){w+=t[i].getMarginLeft()+t[i].getMarginRight();
}w+=(u*(l-1));
}return w;
},computeVerticalGaps:function(X,Y,ba){if(Y==null){Y=0;
}var bb=0;

if(ba){bb+=X[0].getMarginTop();

for(var i=1,l=X.length;i<l;i+=1){bb+=this.collapseMargins(Y,X[i-1].getMarginBottom(),X[i].getMarginTop());
}bb+=X[l-1].getMarginBottom();
}else{for(var i=1,l=X.length;i<l;i+=1){bb+=X[i].getMarginTop()+X[i].getMarginBottom();
}bb+=(Y*(l-1));
}return bb;
},computeHorizontalSeparatorGaps:function(bi,bj,bk){var bn=qx.theme.manager.Decoration.getInstance().resolve(bk);
var bm=bn.getInsets();
var bl=bm.left+bm.right;
var bo=0;

for(var i=0,l=bi.length;i<l;i++){var bp=bi[i];
bo+=bp.getMarginLeft()+bp.getMarginRight();
}bo+=(bj+bl+bj)*(l-1);
return bo;
},computeVerticalSeparatorGaps:function(x,y,z){var C=qx.theme.manager.Decoration.getInstance().resolve(z);
var B=C.getInsets();
var A=B.top+B.bottom;
var D=0;

for(var i=0,l=x.length;i<l;i++){var E=x[i];
D+=E.getMarginTop()+E.getMarginBottom();
}D+=(y+A+y)*(l-1);
return D;
},arrangeIdeals:function(bc,bd,be,bf,bg,bh){if(bd<bc||bg<bf){if(bd<bc&&bg<bf){bd=bc;
bg=bf;
}else if(bd<bc){bg-=(bc-bd);
bd=bc;
if(bg<bf){bg=bf;
}}else if(bg<bf){bd-=(bf-bg);
bg=bf;
if(bd<bc){bd=bc;
}}}
if(bd>be||bg>bh){if(bd>be&&bg>bh){bd=be;
bg=bh;
}else if(bd>be){bg+=(bd-be);
bd=be;
if(bg>bh){bg=bh;
}}else if(bg>bh){bd+=(bg-bh);
bg=bh;
if(bd>be){bd=be;
}}}return {begin:bd,end:bg};
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
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
(function(){var B="Integer",A="_applyDimension",z="Boolean",y="_applyStretching",x="_applyMargin",w="shorthand",v="_applyAlign",u="allowShrinkY",t="bottom",s="__fQ",V="baseline",U="marginBottom",T="qx.ui.core.LayoutItem",S="center",R="marginTop",Q="$$subparent",P="__fP",O="allowGrowX",N="middle",M="marginLeft",I="__fL",J="__fN",G="allowShrinkX",H="$$parent",E="top",F="right",C="marginRight",D="abstract",K="allowGrowY",L="left";
qx.Class.define(T,{type:D,extend:qx.core.Object,properties:{minWidth:{check:B,nullable:true,apply:A,init:null,themeable:true},width:{check:B,nullable:true,apply:A,init:null,themeable:true},maxWidth:{check:B,nullable:true,apply:A,init:null,themeable:true},minHeight:{check:B,nullable:true,apply:A,init:null,themeable:true},height:{check:B,nullable:true,apply:A,init:null,themeable:true},maxHeight:{check:B,nullable:true,apply:A,init:null,themeable:true},allowGrowX:{check:z,apply:y,init:true,themeable:true},allowShrinkX:{check:z,apply:y,init:true,themeable:true},allowGrowY:{check:z,apply:y,init:true,themeable:true},allowShrinkY:{check:z,apply:y,init:true,themeable:true},allowStretchX:{group:[O,G],mode:w,themeable:true},allowStretchY:{group:[K,u],mode:w,themeable:true},marginTop:{check:B,init:0,apply:x,themeable:true},marginRight:{check:B,init:0,apply:x,themeable:true},marginBottom:{check:B,init:0,apply:x,themeable:true},marginLeft:{check:B,init:0,apply:x,themeable:true},margin:{group:[R,C,U,M],mode:w,themeable:true},alignX:{check:[L,S,F],nullable:true,apply:v,themeable:true},alignY:{check:[E,N,t,V],nullable:true,apply:v,themeable:true}},members:{__fK:null,__fL:null,__fM:null,__fN:null,__fO:null,__fP:null,__fQ:null,getBounds:function(){return this.__fP||this.__fL||null;
},clearSeparators:function(){},renderSeparator:function(be,bf){},renderLayout:function(i,top,j,k){var l;
var m=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var m=this._getHeightForWidth(j);
}
if(m!=null&&m!==this.__fK){this.__fK=m;
qx.ui.core.queue.Layout.add(this);
return null;
}var o=this.__fL;

if(!o){o=this.__fL={};
}var n={};

if(i!==o.left||top!==o.top){n.position=true;
o.left=i;
o.top=top;
}
if(j!==o.width||k!==o.height){n.size=true;
o.width=j;
o.height=k;
}if(this.__fM){n.local=true;
delete this.__fM;
}
if(this.__fO){n.margin=true;
delete this.__fO;
}return n;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fM;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fM=true;
this.__fN=null;
},getSizeHint:function(W){var X=this.__fN;

if(X){return X;
}
if(W===false){return null;
}X=this.__fN=this._computeSizeHint();
if(this.__fK&&this.getHeight()==null){X.height=this.__fK;
}if(!this.getAllowShrinkX()){X.minWidth=X.width;
}else if(X.minWidth>X.width){X.width=X.minWidth;
}
if(!this.getAllowShrinkY()){X.minHeight=X.height;
}else if(X.minHeight>X.height){X.height=X.minHeight;
}if(!this.getAllowGrowX()){X.maxWidth=X.width;
}else if(X.width>X.maxWidth){X.width=X.maxWidth;
}
if(!this.getAllowGrowY()){X.maxHeight=X.height;
}else if(X.height>X.maxHeight){X.height=X.maxHeight;
}return X;
},_computeSizeHint:function(){var bk=this.getMinWidth()||0;
var bh=this.getMinHeight()||0;
var bl=this.getWidth()||bk;
var bj=this.getHeight()||bh;
var bg=this.getMaxWidth()||Infinity;
var bi=this.getMaxHeight()||Infinity;
return {minWidth:bk,width:bl,maxWidth:bg,minHeight:bh,height:bj,maxHeight:bi};
},_hasHeightForWidth:function(){var r=this._getLayout();

if(r){return r.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(p){var q=this._getLayout();

if(q&&q.hasHeightForWidth()){return q.getHeightForWidth(p);
}return null;
},_applyMargin:function(){this.__fO=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__fP;
},setUserBounds:function(c,top,d,e){this.__fP={left:c,top:top,width:d,height:e};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__fP;
qx.ui.core.queue.Layout.add(this);
},__fR:{},setLayoutProperties:function(f){if(f==null){return;
}var g=this.__fQ;

if(!g){g=this.__fQ={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(f);
}for(var h in f){if(f[h]==null){delete g[h];
}else{g[h]=f[h];
}}},getLayoutProperties:function(){return this.__fQ||this.__fR;
},clearLayoutProperties:function(){delete this.__fQ;
},updateLayoutProperties:function(Y){var ba=this._getLayout();

if(ba){var bb;
ba.invalidateChildrenCache();
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
},clone:function(){var bc=arguments.callee.base.call(this);
var bd=this.__fQ;

if(bd){bc.__fQ=qx.lang.Object.clone(bd);
}return bc;
},serialize:function(){var a=arguments.callee.base.call(this);
var b=this.__fQ;

if(b){a.layoutProperties=qx.lang.Object.clone(b);
}return a;
}},destruct:function(){this._disposeFields(H,Q,s,I,P,J);
}});
})();
(function(){var j="qx.locale.MTranslation";
qx.Mixin.define(j,{members:{tr:function(a,b){var c=qx.locale.Manager;

if(c){return c.tr.apply(c,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(d,e,f){var g=qx.locale.Manager;

if(g){return g.trc.apply(g,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(h){var i=qx.locale.Manager;

if(i){return i.marktr.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var gL="px",gK="qx.event.type.Mouse",gJ="Boolean",gI="qx.event.type.Drag",gH="visible",gG="qx.event.type.Focus",gF="Integer",gE="on",gD="excluded",gC="object",gi="_applyPadding",gh="qx.event.type.Event",gg="zIndex",gf="hidden",ge="tabIndex",gd="contextmenu",gc="absolute",gb="backgroundColor",ga="focused",fY="hovered",gS="qx.event.type.KeySequence",gT="qx.client",gQ="height",gR="div",gO="qx.event.type.Data",gP="disabled",gM="move",gN="dragstart",gU="dragchange",gV="position",gv="dragend",gu="resize",gx="Decorator",gw="width",gz="$$widget",gy="mshtml",gB="none",gA="default",gt="Color",gs="top",eP="left",eQ="String",eR="drag",eS="Use public 'getChildControl' instead!",eT="__fT",eU="_applyBackgroundColor",eV="_applyFocusable",eW="changeShadow",eX="qx.event.type.KeyInput",eY="normal",ha="Font",gY="__ge",gX="_applyShadow",gW="_applyEnabled",he="_applySelectable",hd="_applyKeepActive",hc="__gj",hb="Number",hg="_applyVisibility",hf="repeat",fy="qxDraggable",fz="paddingLeft",fw="_applyDroppable",fx="userSelect",fC="#",fD="__gm",fA="_applyCursor",fB="changeVisibility",fu="_applyDraggable",fv="changeTextColor",fh="changeContextMenu",fg="paddingTop",fj="opacity",fi="__fW",fd="hideFocus",fc="outline",ff="_applyAppearance",fe="overflowX",fb="_applyOpacity",fa="__fX",fI="url(",fJ=")",fK="qx.ui.core.Widget",fL="_applyFont",fE="cursor",fF="qxDroppable",fG="changeZIndex",fH="overflowY",fM="changeEnabled",fN="__fS",fr="changeFont",fq="off",fp="_applyDecorator",fo="_applyZIndex",fn="_applyTextColor",fm="qx.ui.menu.Menu",fl="Use public 'hasChildControl' instead!",fk="__fV",ft="true",fs="widget",fO="changeDecorator",fP="_applyTabIndex",fQ="changeAppearance",fR="shorthand",fS="/",fT="",fU="_applyContextMenu",fV="qxSelectable",fW="__gc",fX="paddingBottom",gm="qx.ui.tooltip.ToolTip",gl="qxKeepActive",gk="_applyKeepFocus",gj="webkit",gq="paddingRight",gp="changeBackgroundColor",go="qxKeepFocus",gn="__ga",gr="qx/static/blank.gif";
qx.Class.define(fK,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__fS=this._createContainerElement();
this.__fT=this.__gd();
this.__fS.add(this.__fT);
this.initFocusable();
this.initSelectable();
},events:{appear:gh,disappear:gh,resize:gO,move:gO,mousemove:gK,mouseover:gK,mouseout:gK,mousedown:gK,mouseup:gK,click:gK,dblclick:gK,contextmenu:gK,mousewheel:gK,keyup:gS,keydown:gS,keypress:gS,keyinput:eX,focus:gG,blur:gG,focusin:gG,focusout:gG,activate:gG,deactivate:gG,capture:gh,losecapture:gh,drop:gI,dragleave:gI,dragover:gI,drag:gI,dragstart:gI,dragend:gI,dragchange:gI,droprequest:gI},properties:{paddingTop:{check:gF,init:0,apply:gi,themeable:true},paddingRight:{check:gF,init:0,apply:gi,themeable:true},paddingBottom:{check:gF,init:0,apply:gi,themeable:true},paddingLeft:{check:gF,init:0,apply:gi,themeable:true},padding:{group:[fg,gq,fX,fz],mode:fR,themeable:true},zIndex:{nullable:true,init:null,apply:fo,event:fG,check:gF,themeable:true},decorator:{nullable:true,init:null,apply:fp,event:fO,check:gx,themeable:true},shadow:{nullable:true,init:null,apply:gX,event:eW,check:gx,themeable:true},backgroundColor:{nullable:true,check:gt,apply:eU,event:gp,themeable:true},textColor:{nullable:true,check:gt,apply:fn,event:fv,themeable:true,inheritable:true},font:{nullable:true,apply:fL,check:ha,event:fr,themeable:true,inheritable:true},opacity:{check:hb,apply:fb,themeable:true,nullable:true,init:null},cursor:{check:eQ,apply:fA,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:gm,nullable:true},visibility:{check:[gH,gf,gD],init:gH,apply:hg,event:fB},enabled:{init:true,check:gJ,inheritable:true,apply:gW,event:fM},anonymous:{init:false,check:gJ},tabIndex:{check:gF,nullable:true,apply:fP},focusable:{check:gJ,init:false,apply:eV},keepFocus:{check:gJ,init:false,apply:gk},keepActive:{check:gJ,init:false,apply:hd},draggable:{check:gJ,init:false,apply:fu},droppable:{check:gJ,init:false,apply:fw},selectable:{check:gJ,init:false,apply:he},contextMenu:{check:fm,apply:fU,nullable:true,event:fh},appearance:{check:eQ,init:fs,apply:ff,event:fQ}},statics:{DEBUG:false,getWidgetByElement:function(cP){try{while(cP){var cQ=cP.$$widget;
if(cQ!=null){return qx.core.ObjectRegistry.fromHashCode(cQ);
}cP=cP.parentNode;
}}catch(cI){}return null;
},contains:function(parent,E){while(E){if(parent==E){return true;
}E=E.getLayoutParent();
}return false;
},__fU:{}},members:{__fS:null,__fT:null,__fV:null,__fW:null,__fX:null,__fY:null,__ga:null,_getLayout:function(){return this.__ga;
},_setLayout:function(hh){{};

if(this.__ga){this.__ga.connectToWidget(null);
}
if(hh){hh.connectToWidget(this);
}this.__ga=hh;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}
if(this.$$parent){this.$$parent.getContentElement().remove(this.__fS);
}this.$$parent=parent||null;

if(parent){this.$$parent.getContentElement().add(this.__fS);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},__gb:null,renderLayout:function(ex,top,ey,ez){var eK=arguments.callee.base.call(this,ex,top,ey,ez);
if(!eK){return;
}var eB=this.__fS;
var content=this.__fT;
var eH=eK.size||this.__gb;
var eL=gL;
if(eK.position){eB.setStyle(eP,ex+eL);
eB.setStyle(gs,top+eL);
}if(eK.size){eB.setStyle(gw,ey+eL);
eB.setStyle(gQ,ez+eL);
}
if(eH||eK.local||eK.margin){var eA=this.getInsets();
var innerWidth=ey-eA.left-eA.right;
var innerHeight=ez-eA.top-eA.bottom;
}
if(this.__gb){content.setStyle(eP,eA.left+eL);
content.setStyle(gs,eA.top+eL);
}
if(eH){content.setStyle(gw,innerWidth+eL);
content.setStyle(gQ,innerHeight+eL);
}
if(eK.size){var eJ=this.__fX;

if(eJ){eJ.setStyles({width:ey+gL,height:ez+gL});
}}
if(eK.size||this.__gb){var eE=qx.theme.manager.Decoration.getInstance();
var eM=this.getDecorator();

if(eM){var eF=this.__fV;
var eG=eE.resolve(eM);
eG.resize(eF.getDomElement(),ey,ez);
}}
if(eK.size){var eI=this.getShadow();

if(eI){var eF=this.__fW;
var eG=eE.resolve(eI);
var eA=eG.getInsets();
var eD=ey+eA.left+eA.right;
var eC=ez+eA.top+eA.bottom;
eG.resize(eF.getDomElement(),eD,eC);
}}
if(eH||eK.local||eK.margin){if(this.__ga&&this.hasLayoutChildren()){this.__ga.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(eK.position&&this.hasListener(gM)){this.fireDataEvent(gM,this.getBounds());
}
if(eK.size&&this.hasListener(gu)){this.fireDataEvent(gu,this.getBounds());
}delete this.__gb;
},__gc:null,clearSeparators:function(){var cp=this.__gc;

if(!cp){return;
}var cq=qx.ui.core.Widget.__fU;
var content=this.__fT;
var co,cn;

for(var i=0,l=cp.length;i<l;i++){cn=cp[i];
co=cn.$$separator;
if(!cq[co]){cq[co]=[cn];
}else{cq[co].push(cn);
}content.remove(cn);
}cp.length=0;
},renderSeparator:function(hk,hl){var hs=qx.ui.core.Widget.__fU;
var hq=qx.theme.manager.Decoration.getInstance();

if(typeof hk==gC){var hr=hk.toHashCode();
var hn=hk;
}else{var hr=hk;
var hn=hq.resolve(hk);
}var ho=hs[hk];

if(ho&&ho.length>0){var hp=ho.pop();
}else{var hp=this.__gi(hn);
}this.__fT.add(hp);
hn.resize(hp.getDomElement(),hl.width,hl.height);
var hm=hp.getDomElement().style;
hm.left=hl.left+gL;
hm.top=hl.top+gL;
if(!this.__gc){this.__gc=[hp];
}else{this.__gc.push(hp);
}hp.$$separator=hr;
},_computeSizeHint:function(){var dQ=this.getWidth();
var dP=this.getMinWidth();
var dL=this.getMaxWidth();
var dO=this.getHeight();
var dM=this.getMinHeight();
var dN=this.getMaxHeight();
var dR=this._getContentHint();
var dK=this.getInsets();
var dT=dK.left+dK.right;
var dS=dK.top+dK.bottom;

if(dQ==null){dQ=dR.width+dT;
}
if(dO==null){dO=dR.height+dS;
}
if(dP==null){dP=dT;

if(dR.minWidth!=null){dP+=dR.minWidth;
}}
if(dM==null){dM=dS;

if(dR.minHeight!=null){dM+=dR.minHeight;
}}
if(dL==null){if(dR.maxWidth==null){dL=Infinity;
}else{dL=dR.maxWidth+dT;
}}
if(dN==null){if(dR.maxHeight==null){dN=Infinity;
}else{dN=dR.maxHeight+dS;
}}return {width:dQ,minWidth:dP,maxWidth:dL,height:dO,minHeight:dM,maxHeight:dN};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__ga){this.__ga.invalidateLayoutCache();
}},_getContentHint:function(){var bj=this.__ga;

if(bj){if(this.hasLayoutChildren()){var bk=bj.getSizeHint();
var bi;
return bk;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(cA){var cE=this.getInsets();
var cH=cE.left+cE.right;
var cG=cE.top+cE.bottom;
var cF=cA-cH;
var cC=this._getLayout();

if(cC&&cC.hasHeightForWidth()){var cB=cC.getHeightForWidth(cA);
}else{cB=this._getContentHeightForWidth(cF);
}var cD=cB+cG;
return cD;
},_getContentHeightForWidth:function(bq){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var x=this.getPaddingRight();
var y=this.getPaddingBottom();
var D=this.getPaddingLeft();
var C=this.getDecorator();

if(C){var B=qx.theme.manager.Decoration.getInstance();
var A=B.resolve(C);
var z=A.getInsets();
{};
top+=z.top;
x+=z.right;
y+=z.bottom;
D+=z.left;
}return {"top":top,"right":x,"bottom":y,"left":D};
},getInnerSize:function(){var cK=this.getBounds();

if(!cK){return null;
}var cJ=this.getInsets();
return {width:cK.width-cJ.left-cJ.right,height:cK.height-cJ.top-cJ.bottom};
},show:function(){this.setVisibility(gH);
},hide:function(){this.setVisibility(gf);
},exclude:function(){this.setVisibility(gD);
},isVisible:function(){return this.getVisibility()===gH;
},isHidden:function(){return this.getVisibility()!==gH;
},isExcluded:function(){return this.getVisibility()===gD;
},_createContainerElement:function(){var eq=new qx.html.Element(gR);
{};
eq.setStyle(gV,gc);
eq.setStyle(gg,0);
eq.setAttribute(gz,this.toHashCode());
{};
return eq;
},__gd:function(){var dE=this._createContentElement();
{};
dE.setStyle(gV,gc);
dE.setStyle(gg,10);
return dE;
},_createContentElement:function(){var dl=new qx.html.Element(gR);
dl.setStyle(fe,gf);
dl.setStyle(fH,gf);
return dl;
},getContainerElement:function(){return this.__fS;
},getContentElement:function(){return this.__fT;
},getDecoratorElement:function(){return this.__fV;
},__ge:null,getLayoutChildren:function(){var eo=this.__ge;

if(!eo){return this.__gf;
}var ep;

for(var i=0,l=eo.length;i<l;i++){var en=eo[i];

if(en.hasUserBounds()||en.isExcluded()){if(ep==null){ep=eo.concat();
}qx.lang.Array.remove(ep,en);
}}return ep||eo;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var bh=this.__ga;

if(bh){bh.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var ci=this.__ge;

if(!ci){return false;
}var cj;

for(var i=0,l=ci.length;i<l;i++){cj=ci[i];

if(!cj.hasUserBounds()&&!cj.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__gf:[],_getChildren:function(){return this.__ge||this.__gf;
},_indexOf:function(P){var Q=this.__ge;

if(!Q){return -1;
}return Q.indexOf(P);
},_hasChildren:function(){var be=this.__ge;
return be!=null&&(!!be[0]);
},addChildrenToQueue:function(a){var b=this.__ge;

if(!b){return;
}var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];
a[c.$$hash]=c;
c.addChildrenToQueue(a);
}},_add:function(bQ,bR){if(bQ.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,bQ);
}
if(this.__ge){this.__ge.push(bQ);
}else{this.__ge=[bQ];
}this.__gg(bQ,bR);
},_addAt:function(ba,bb,bc){if(!this.__ge){this.__ge=[];
}if(ba.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,ba);
}var bd=this.__ge[bb];

if(bd===ba){return ba.setLayoutProperties(bc);
}
if(bd){qx.lang.Array.insertBefore(this.__ge,ba,bd);
}else{this.__ge.push(ba);
}this.__gg(ba,bc);
},_addBefore:function(dB,dC,dD){{};

if(dB==dC){return;
}
if(!this.__ge){this.__ge=[];
}if(dB.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,dB);
}qx.lang.Array.insertBefore(this.__ge,dB,dC);
this.__gg(dB,dD);
},_addAfter:function(dm,dn,dp){{};

if(dm==dn){return;
}
if(!this.__ge){this.__ge=[];
}if(dm.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,dm);
}qx.lang.Array.insertAfter(this.__ge,dm,dn);
this.__gg(dm,dp);
},_remove:function(cc){if(!this.__ge){return;
}qx.lang.Array.remove(this.__ge,cc);
this.__gh(cc);
},_removeAt:function(bf){if(!this.__ge){throw new Error("This widget has no children!");
}var bg=this.__ge[bf];
qx.lang.Array.removeAt(this.__ge,bf);
this.__gh(bg);
return bg;
},_removeAll:function(){if(!this.__ge){return;
}var F=this.__ge.concat();
this.__ge.length=0;

for(var i=F.length-1;i>=0;i--){this.__gh(F[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__gg:function(hi,hj){{};
var parent=hi.getLayoutParent();

if(parent&&parent!=this){parent._remove(hi);
}hi.setLayoutParent(this);
if(hj){hi.setLayoutProperties(hj);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(hi);
}},__gh:function(ht){{};
ht.setLayoutParent(null);
if(this.__ga){this.__ga.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(ht);
}},capture:function(){this.__fS.capture();
},releaseCapture:function(){this.__fS.releaseCapture();
},_applyPadding:function(cX,cY,name){this.__gb=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__fX){return;
}var dc=this.__fX=new qx.html.Element;
{};
dc.setStyles({position:gc,top:0,left:0,zIndex:7});
var dd=this.getBounds();

if(dd){this.__fX.setStyles({width:dd.width+gL,height:dd.height+gL});
}if(qx.core.Variant.isSet(gT,gy)){dc.setStyles({backgroundImage:fI+qx.util.ResourceManager.toUri(gr)+fJ,backgroundRepeat:hf});
}this.__fS.add(dc);
},__gi:function(dg){var dh=new qx.html.Element;
dh.setStyles({position:gc,top:0,left:0});
{};
dh.useMarkup(dg.getMarkup());
return dh;
},_applyDecorator:function(bw,bx){var bF=qx.ui.core.Widget.__fU;
var bC=qx.theme.manager.Decoration.getInstance();
var by=this.__fS;
var bA=this.__fV;
if(!this.__fX){this._createProtectorElement();
}var bD;

if(bx){if(typeof bx===gC){bD=bx.toHashCode();
}else{bD=bx;
bx=bC.resolve(bx);
}}var bE;

if(bw){if(typeof bw===gC){bE=bw.toHashCode();
{};
}else{bE=bw;
bw=bC.resolve(bw);
}}if(bx){if(!bF[bD]){bF[bD]=[];
}by.remove(bA);
bF[bD].push(bA);
}if(bw){if(bF[bE]&&bF[bE].length>0){bA=bF[bE].pop();
}else{bA=this.__gi(bw);
bA.setStyle(gg,5);
}var bz=this.getBackgroundColor();
bw.tint(bA.getDomElement(),bz);
by.add(bA);
this.__fV=bA;
}else{delete this.__fV;
this._applyBackgroundColor(this.getBackgroundColor());
}if(bw&&!bx&&bz){this.getContainerElement().setStyle(gb,null);
}if(qx.ui.decoration.Util.insetsModified(bx,bw)){this.__gb=true;
qx.ui.core.queue.Layout.add(this);
}else if(bw){var bB=this.getBounds();

if(bB){bC.resolve(bw).resize(bA.getDomElement(),bB.width,bB.height);
this.__fX.setStyles({width:bB.width+gL,height:bB.height+gL});
}}},_applyShadow:function(k,m){var w=qx.ui.core.Widget.__fU;
var t=qx.theme.manager.Decoration.getInstance();
var o=this.__fS;
var u;

if(m){if(typeof m===gC){u=m.toHashCode();
}else{u=m;
m=t.resolve(m);
}}var v;

if(k){if(typeof k===gC){v=k.toHashCode();
}else{v=k;
k=t.resolve(k);
}}if(m){if(!w[u]){w[u]=[];
}o.remove(this.__fW);
w[u].push(this.__fW);
}if(k){var q;

if(w[v]&&w[v].length>0){q=w[v].pop();
}else{q=this.__gi(k);
}o.add(q);
this.__fW=q;
var s=k.getInsets();
q.setStyles({left:(-s.left)+gL,top:(-s.top)+gL});
var r=this.getBounds();

if(r){var p=r.width+s.left+s.right;
var n=r.height+s.top+s.bottom;
k.resize(q.getDomElement(),p,n);
}}else{delete this.__fW;
}},_applyTextColor:function(br,bs){},_applyZIndex:function(ek,em){this.__fS.setStyle(gg,ek==null?0:ek);
},_applyVisibility:function(dI,dJ){if(dI===gH){this.__fS.show();
}else{this.__fS.hide();
}var parent=this.$$parent;

if(parent&&(dJ==null||dI==null||dJ===gD||dI===gD)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(d,f){this.__fS.setStyle(fj,d==1?null:d);
},_applyCursor:function(dr,ds){if(dr==null&&!this.isSelectable()){dr=gA;
}this.__fS.setStyle(fE,dr);
},_applyBackgroundColor:function(bS,bT){var cb=this.getDecorator();
var ca=this.getShadow();
var bW=this.getBackgroundColor();
var bV=this.__fS;

if(cb||ca){var bX=this.__fV;

if(bX){var bY=qx.theme.manager.Decoration.getInstance().resolve(cb);
bY.tint(this.__fV.getDomElement(),bW);
}bV.setStyle(gb,null);
}else{var bU=qx.theme.manager.Color.getInstance().resolve(bW);
bV.setStyle(gb,bU);
}},_applyFont:function(dt,du){},__gj:null,$$stateChanges:null,_forwardStates:null,hasState:function(er){var es=this.__gj;
return es&&es[er];
},addState:function(U){var V=this.__gj;

if(!V){V=this.__gj={};
}
if(V[U]){return;
}this.__gj[U]=true;
if(U===fY){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var Y=this.__gm;

if(forward&&forward[U]&&Y){var W;

for(var X in Y){W=Y[X];

if(W instanceof qx.ui.core.Widget){Y[X].addState(U);
}}}},removeState:function(cd){var ce=this.__gj;

if(!ce||!ce[cd]){return;
}delete this.__gj[cd];
if(cd===fY){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var ch=this.__gm;

if(forward&&forward[cd]&&ch){for(var cg in ch){var cf=ch[cg];

if(cf instanceof qx.ui.core.Widget){cf.removeState(cd);
}}}},replaceState:function(cR,cS){var cT=this.__gj;

if(!cT){cT=this.__gj={};
}
if(!cT[cS]){cT[cS]=true;
}
if(cT[cR]){delete cT[cR];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cW=this.__gm;

if(forward&&forward[cS]&&cW){for(var cV in cW){var cU=cW[cV];

if(cU instanceof qx.ui.core.Widget){cU.replaceState(cR,cS);
}}}},__gk:null,__gl:null,syncAppearance:function(){var bK=this.__gj;
var bJ=this.__gk;
var bL=qx.theme.manager.Appearance.getInstance();
var bH=qx.core.Property.$$method.setThemed;
var bP=qx.core.Property.$$method.resetThemed;
if(this.__gl){delete this.__gl;
if(bJ){var bG=bL.styleFrom(bJ,bK);
if(bG){bJ=null;
}}}if(!bJ){var bI=this;
var bO=[];

do{bO.push(bI.$$subcontrol||bI.getAppearance());
}while(bI=bI.$$subparent);
bJ=this.__gk=bO.reverse().join(fS).replace(/#[0-9]+/g,fT);
}var bM=bL.styleFrom(bJ,bK);

if(bM){if(bG){for(var bN in bG){if(bM[bN]===undefined){this[bP[bN]]();
}}}var bN;
var bN;

for(var bN in bM){bM[bN]===undefined?this[bP[bN]]():this[bH[bN]](bM[bN]);
}}else if(bG){for(var bN in bG){this[bP[bN]]();
}}},_applyAppearance:function(eN,eO){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__fY){qx.ui.core.queue.Appearance.add(this);
this.__fY=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__gl=true;
qx.ui.core.queue.Appearance.add(this);
var j=this.__gm;

if(j){var g;

for(var h in j){g=j[h];

if(g instanceof qx.ui.core.Widget){g.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var R=this;

while(R.getAnonymous()){R=R.getLayoutParent();

if(!R){return null;
}}return R;
},getFocusTarget:function(){var dq=this;

if(!dq.getEnabled()){return null;
}
while(dq.getAnonymous()||!dq.getFocusable()){dq=dq.getLayoutParent();

if(!dq||!dq.getEnabled()){return null;
}}return dq;
},getFocusElement:function(){return this.__fS;
},isTabable:function(){return this.getContainerElement().getDomElement()&&this.isFocusable();
},_applyFocusable:function(cs,ct){var cu=this.getFocusElement();
if(cs){var cv=this.getTabIndex();

if(cv==null){cv=1;
}cu.setAttribute(ge,cv);
if(qx.core.Variant.isSet(gT,gy)){cu.setAttribute(fd,ft);
}else{cu.setStyle(fc,gB);
}}else{if(cu.isNativelyFocusable()){cu.setAttribute(ge,-1);
}else if(ct){cu.setAttribute(ge,null);
}}},_applyKeepFocus:function(N){var O=this.getFocusElement();
O.setAttribute(go,N?gE:null);
},_applyKeepActive:function(J){var K=this.getContainerElement();
K.setAttribute(gl,J?gE:null);
},_applyTabIndex:function(cr){if(cr==null){cr=1;
}else if(cr<1||cr>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&cr!=null){this.getFocusElement().setAttribute(ge,cr);
}},_applySelectable:function(ew){this._applyCursor(this.getCursor());
this.__fS.setAttribute(fV,ew?gE:fq);
if(qx.core.Variant.isSet(gT,gj)){this.__fS.setStyle(fx,ew?eY:gB);
}},_applyEnabled:function(ck,cl){if(ck===false){this.addState(gP);
this.removeState(fY);
if(this.isFocusable()){this.removeState(ga);
this._applyFocusable(false,true);
}}else{this.removeState(gP);
if(this.isFocusable()){this._applyFocusable(true,false);
}}},_applyContextMenu:function(bo,bp){if(bp){bp.removeState(gd);

if(bp.getOpener()==this){bp.resetOpener();
}
if(!bo){this.removeListener(gd,this._onContextMenuOpen);
}}
if(bo){bo.setOpener(this);
bo.addState(gd);

if(!bp){this.addListener(gd,this._onContextMenuOpen);
}}},_onContextMenuOpen:function(e){var cm=this.getContextMenu();
cm.placeToMouse(e);
cm.show();
e.preventDefault();
},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(dY,ea){qx.ui.core.DragDropCursor.getInstance();
if(dY){this.addListener(gN,this._onDragStart);
this.addListener(eR,this._onDrag);
this.addListener(gv,this._onDragEnd);
this.addListener(gU,this._onDragChange);
}else{this.removeListener(gN,this._onDragStart);
this.removeListener(eR,this._onDrag);
this.removeListener(gv,this._onDragEnd);
this.removeListener(gU,this._onDragChange);
}this.__fS.setAttribute(fy,dY?gE:null);
},_applyDroppable:function(da,db){this.__fS.setAttribute(fF,da?gE:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(gA);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var bu=qx.ui.core.DragDropCursor.getInstance();
var bv=e.getCurrentAction();
bv?bu.setAction(bv):bu.resetAction();
},visualizeFocus:function(){this.addState(ga);
},visualizeBlur:function(){this.removeState(ga);
},scrollChildIntoView:function(dx,dy,dz,dA){this.scrollChildIntoViewX(dx,dy,dA);
this.scrollChildIntoViewY(dx,dz,dA);
},scrollChildIntoViewX:function(G,H,I){this.__fT.scrollChildIntoViewX(G.getContainerElement(),H,I);
},scrollChildIntoViewY:function(et,eu,ev){this.__fT.scrollChildIntoViewY(et.getContainerElement(),eu,ev);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.__fS.activate();
},deactivate:function(){this.__fS.deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},_hasChildControl:function(cw){qx.log.Logger.deprecatedMethodWarning(arguments.callee,fl);
return this.hasChildControl(cw);
},hasChildControl:function(bt){if(!this.__gm){return false;
}return !!this.__gm[bt];
},__gm:null,_getChildControl:function(S,T){qx.log.Logger.deprecatedMethodWarning(arguments.callee,eS);
return this.getChildControl(S,T);
},getChildControl:function(dF,dG){if(!this.__gm){if(dG){return null;
}this.__gm={};
}var dH=this.__gm[dF];

if(dH){return dH;
}
if(dG===true){return null;
}return this._createChildControl(dF);
},_showChildControl:function(dv){var dw=this.getChildControl(dv);
dw.show();
return dw;
},_excludeChildControl:function(ei){var ej=this.getChildControl(ei,true);

if(ej){ej.exclude();
}},_isChildControlVisible:function(de){var df=this.getChildControl(de,true);

if(df){return df.isVisible();
}return false;
},_createChildControl:function(eb){if(!this.__gm){this.__gm={};
}else if(this.__gm[eb]){throw new Error("Child control '"+eb+"' already created!");
}var ef=eb.indexOf(fC);

if(ef==-1){var ec=this._createChildControlImpl(eb);
}else{var ec=this._createChildControlImpl(eb.substring(0,ef));
}
if(!ec){throw new Error("Unsupported control: "+eb);
}ec.$$subcontrol=eb;
ec.$$subparent=this;
var ed=this.__gj;
var forward=this._forwardStates;

if(ed&&forward&&ec instanceof qx.ui.core.Widget){for(var ee in ed){if(forward[ee]){ec.addState(ee);
}}}return this.__gm[eb]=ec;
},_createChildControlImpl:function(bn){return null;
},_disposeChildControls:function(){var dX=this.__gm;

if(!dX){return;
}var dV=qx.ui.core.Widget;

for(var dW in dX){var dU=dX[dW];

if(!dV.contains(this,dU)){dU.destroy();
}else{dU.dispose();
}}delete this.__gm;
},_findTopControl:function(){var dk=this;

while(dk){if(!dk.$$subparent){return dk;
}dk=dk.$$subparent;
}return null;
},getContainerLocation:function(bl){var bm=this.getContainerElement().getDomElement();
return bm?qx.bom.element.Location.get(bm,bl):null;
},getContentLocation:function(di){var dj=this.getContentElement().getDomElement();
return dj?qx.bom.element.Location.get(dj,di):null;
},setDomLeft:function(eg){var eh=this.getContainerElement().getDomElement();

if(eh){eh.style.left=eg+gL;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(cN){var cO=this.getContainerElement().getDomElement();

if(cO){cO.style.top=cN+gL;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(cL,top){var cM=this.getContainerElement().getDomElement();

if(cM){cM.style.left=cL+gL;
cM.style.top=top+gL;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var L=arguments.callee.base.call(this);

if(this.getChildren){var M=this.getChildren();

for(var i=0,l=M.length;i<l;i++){L.add(M[i].clone());
}}return L;
},serialize:function(){var cy=arguments.callee.base.call(this);

if(this.getChildren){var cz=this.getChildren();

if(cz.length>0){cy.children=[];

for(var i=0,l=cz.length;i<l;i++){cy.children.push(cz[i].serialize());
}}}
if(this.getLayout){var cx=this.getLayout();

if(cx){cy.layout=cx.serialize();
}}return cy;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){this.__fS.setAttribute(gz,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}this._disposeArray(gY);
this._disposeArray(fW);
this._disposeFields(hc,fD);
this._disposeObjects(gn,fN,eT,fk,fi,fa);
}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(g){},setItem:function(h,i){},splice:function(a,b,c){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var x="label",w="icon",v="Boolean",u="left",t="both",s="String",r="_applyRich",q="_applyIcon",p="changeGap",o="_applyShow",h="right",n="_applyCenter",k="_applyIconPosition",f="qx.ui.basic.Atom",e="top",j="changeShow",i="bottom",l="_applyLabel",d="Integer",m="_applyGap",g="atom";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(G,H){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(G!=null){this.setLabel(G);
}
if(H!=null){this.setIcon(H);
}},properties:{appearance:{refine:true,init:g},label:{apply:l,nullable:true,dispose:true,check:s},rich:{check:v,init:false,apply:r},icon:{check:s,apply:q,nullable:true,themeable:true},gap:{check:d,nullable:false,event:p,apply:m,themeable:true,init:4},show:{init:t,check:[t,x,w],themeable:true,inheritable:true,apply:o,event:j},iconPosition:{init:u,check:[e,h,i,u],themeable:true,apply:k},center:{init:false,check:v,themeable:true,apply:n}},members:{_createChildControlImpl:function(C){var D;

switch(C){case x:D=new qx.ui.basic.Label(this.getLabel());
D.setAnonymous(true);
D.setRich(this.getRich());
this._add(D);

if(this.getLabel()==null||this.getShow()===w){D.exclude();
}break;
case w:D=new qx.ui.basic.Image(this.getIcon());
D.setAnonymous(true);
this._addAt(D,0);

if(this.getIcon()==null||this.getShow()===x){D.exclude();
}break;
}return D||arguments.callee.base.call(this,C);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===w){this._excludeChildControl(x);
}else{this._showChildControl(x);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===x){this._excludeChildControl(w);
}else{this._showChildControl(w);
}},_applyLabel:function(a,b){var c=this.getChildControl(x,true);

if(c){c.setContent(a);
}this._handleLabel();
},_applyRich:function(N,O){var P=this.getChildControl(x,true);

if(P){P.setRich(N);
}},_applyIcon:function(K,L){var M=this.getChildControl(w,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(y,z){this._getLayout().setGap(y);
},_applyShow:function(E,F){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(A,B){this._getLayout().setIconPosition(A);
},_applyCenter:function(I,J){this._getLayout().setCenter(I);
}}});
})();
(function(){var h="blur",g="focus",f="input",e="load",d="qx.ui.core.EventHandler",c="activate",b="__gy";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__gy=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__gy:null,__gz:{focusin:1,focusout:1,focus:1,blur:1},__gA:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(j,k){return j instanceof qx.ui.core.Widget;
},_dispatchEvent:function(m){var r=m.getTarget();
var q=qx.ui.core.Widget.getWidgetByElement(r,true);
var s=false;

while(q&&q.isAnonymous()){var s=true;
q=q.getLayoutParent();
}if(s&&m.getType()==c){q.getContainerElement().activate();
}if(this.__gz[m.getType()]){q=q&&q.getFocusTarget();
if(!q){return;
}}if(m.getRelatedTarget){var z=m.getRelatedTarget();
var y=qx.ui.core.Widget.getWidgetByElement(z);

while(y&&y.isAnonymous()){y=y.getLayoutParent();
}
if(y){if(this.__gz[m.getType()]){y=y.getFocusTarget();
}if(y===q){return;
}}}var u=m.getCurrentTarget();
var w=qx.ui.core.Widget.getWidgetByElement(u);

if(!w||w.isAnonymous()){return;
}if(this.__gz[m.getType()]){w=w.getFocusTarget();
}var x=m.getType();

if(!(w.isEnabled()||this.__gA[x])){return;
}var n=m.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var t=this.__gy.getListeners(w,x,n);

if(!t||t.length===0){return;
}var o=qx.event.Pool.getInstance().getObject(m.constructor);
m.clone(o);
o.setTarget(q);
o.setRelatedTarget(y||null);
o.setCurrentTarget(w);
var A=m.getOriginalTarget();

if(A){var p=qx.ui.core.Widget.getWidgetByElement(A);

while(p&&p.isAnonymous()){p=p.getLayoutParent();
}o.setOriginalTarget(p);
}else{o.setOriginalTarget(r);
}for(var i=0,l=t.length;i<l;i++){var v=t[i].context||w;
t[i].handler.call(v,o);
}if(o.getPropagationStopped()){m.stopPropagation();
}
if(o.getDefaultPrevented()){m.preventDefault();
}qx.event.Pool.getInstance().poolObject(o);
},registerEvent:function(F,G,H){var I;

if(G===g||G===h){I=F.getFocusElement();
}else if(G===e||G===f){I=F.getContentElement();
}else{I=F.getContainerElement();
}
if(I){I.addListener(G,this._dispatchEvent,this,H);
}},unregisterEvent:function(B,C,D){var E;

if(C===g||C===h){E=B.getFocusElement();
}else if(C===e||C===f){E=B.getContentElement();
}else{E=B.getContainerElement();
}
if(E){E.removeListener(C,this._dispatchEvent,this,D);
}}},destruct:function(){this._disposeFields(b);
},defer:function(a){qx.event.Registration.addHandler(a);
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
(function(){var b="qx.type.BaseString";
qx.Class.define(b,{extend:String,construct:function(e){{};
this.__iN=e;
},members:{__iN:null,toString:function(){return this.__iN;
},setValue:function(a){this.__iN=a;
},valueOf:function(){return this.__iN;
},toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},base:function(c,d){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(f){{};
}});
})();
(function(){var d="qx.locale.LocalizedString";
qx.Class.define(d,{extend:qx.type.BaseString,construct:function(a,b,c){arguments.callee.base.call(this,a);
this.__iO=b;
this.__iP=c;
},members:{__iO:null,__iP:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__iO,this.__iP);
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(f,g,h){},unregisterEvent:function(c,d,e){}},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var h="qx.ui.core.MChildrenHandling";
qx.Mixin.define(h,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(p){return this._indexOf(p);
},add:function(l,m){this._add(l,m);
},addAt:function(i,j,k){this._addAt(i,j,k);
},addBefore:function(a,b,c){this._addBefore(a,b,c);
},addAfter:function(d,e,f){this._addAfter(d,e,f);
},remove:function(n){this._remove(n);
},removeAt:function(g){this._removeAt(g);
},removeAll:function(){return this._removeAll();
}},statics:{remap:function(o){o.getChildren=o._getChildren;
o.hasChildren=o._hasChildren;
o.indexOf=o._indexOf;
o.add=o._add;
o.addAt=o._addAt;
o.addBefore=o._addBefore;
o.addAfter=o._addAfter;
o.remove=o._remove;
o.removeAt=o._removeAt;
o.removeAll=o._removeAll;
}}});
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
(function(){var k="qx.event.handler.UserAction",j="__cS",i="__cT";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this.__cS=m;
this.__cT=m.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(g,h){},registerEvent:function(d,e,f){},unregisterEvent:function(a,b,c){}},destruct:function(){this._disposeFields(j,i);
},defer:function(l){qx.event.Registration.addHandler(l);
}});
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
(function(){var m="n-resize",l="e-resize",k="nw-resize",j="ne-resize",i="",h="cursor:",g="qx.client",f=";",e="qx.bom.element.Cursor",d="cursor",c="hand";
qx.Class.define(e,{statics:{__dM:qx.core.Variant.select(g,{"mshtml":{"cursor":c,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"opera":{"col-resize":l,"row-resize":m,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"default":{}}),compile:function(o){return h+(this.__dM[o]||o)+f;
},get:function(a,b){return qx.bom.element.Style.get(a,d,b,false);
},set:function(p,q){p.style.cursor=this.__dM[q]||q;
},reset:function(n){n.style.cursor=i;
}}});
})();
(function(){var D="_applyLayoutChange",C="top",B="left",A="middle",z="Decorator",y="center",x="baseline",w="__ie",v="bottom",u="__ic",q="qx.ui.layout.VBox",t="__ib",s="_applyReversed",p="Integer",o="right",r="Boolean";
qx.Class.define(q,{extend:qx.ui.layout.Abstract,construct:function(E,F,G){arguments.callee.base.call(this);

if(E){this.setSpacing(E);
}
if(F){this.setAlignY(F);
}
if(G){this.setSeparator(G);
}},properties:{alignY:{check:[C,A,v],init:C,apply:D},alignX:{check:[B,y,o,x],init:B,apply:D},spacing:{check:p,init:0,apply:D},separator:{check:z,nullable:true,apply:D},reversed:{check:r,init:false,apply:s}},members:{__ib:null,__ic:null,__id:null,__ie:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__if:function(){var bl=this._getLayoutChildren();
var length=bl.length;
var bh=false;
var bg=this.__ib&&this.__ib.length!=length&&this.__ic&&this.__ib;
var bj;
var bi=bg?this.__ib:new Array(length);
var bk=bg?this.__ic:new Array(length);
if(this.getReversed()){bl=bl.concat().reverse();
}for(var i=0;i<length;i++){bj=bl[i].getLayoutProperties();

if(bj.height!=null){bi[i]=parseFloat(bj.height)/100;
}
if(bj.flex!=null){bk[i]=bj.flex;
bh=true;
}}if(!bg){this.__ib=bi;
this.__ic=bk;
}this.__id=bh;
this.__ie=bl;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(H,I){if(this._invalidChildrenCache){this.__if();
}var P=this.__ie;
var length=P.length;
var ba=qx.ui.layout.Util;
var Y=this.getSpacing();
var bd=this.getSeparator();

if(bd){var M=ba.computeVerticalSeparatorGaps(P,Y,bd);
}else{var M=ba.computeVerticalGaps(P,Y,true);
}var i,K,L,T;
var U=[];
var bb=M;

for(i=0;i<length;i+=1){T=this.__ib[i];
L=T!=null?Math.floor((I-M)*T):P[i].getSizeHint().height;
U.push(L);
bb+=L;
}if(this.__id&&bb!=I){var R={};
var X,bc;

for(i=0;i<length;i+=1){X=this.__ic[i];

if(X>0){Q=P[i].getSizeHint();
R[i]={min:Q.minHeight,value:U[i],max:Q.maxHeight,flex:X};
}}var N=ba.computeFlexOffsets(R,I,bb);

for(i in N){bc=N[i].offset;
U[i]+=bc;
bb+=bc;
}}var top=P[0].getMarginTop();
if(bb<I&&this.getAlignY()!=C){top=I-bb;

if(this.getAlignY()===A){top=Math.round(top/2);
}}var Q,bf,V,L,S,W,O;
var Y=this.getSpacing();
this._clearSeparators();
if(bd){var be=qx.theme.manager.Decoration.getInstance().resolve(bd).getInsets();
var J=be.top+be.bottom;
}for(i=0;i<length;i+=1){K=P[i];
L=U[i];
Q=K.getSizeHint();
W=K.getMarginLeft();
O=K.getMarginRight();
V=Math.max(Q.minWidth,Math.min(H-W-O,Q.maxWidth));
bf=ba.computeHorizontalAlignOffset(K.getAlignX()||this.getAlignX(),V,H,W,O);
if(i>0){if(bd){top+=S+Y;
this._renderSeparator(bd,{top:top,left:0,height:J,width:H});
top+=J+Y+K.getMarginTop();
}else{top+=ba.collapseMargins(Y,S,K.getMarginTop());
}}K.renderLayout(bf,top,V,L);
top+=L;
S=K.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__if();
}var f=qx.ui.layout.Util;
var n=this.__ie;
var d=0,e=0;
var a=0,g=0;
var k,b,m;
for(var i=0,l=n.length;i<l;i+=1){k=n[i];
b=k.getSizeHint();
e+=b.height;
d+=this.__ic[i]>0?b.minHeight:b.height;
m=k.getMarginLeft()+k.getMarginRight();
if((b.width+m)>g){g=b.width+m;
}if((b.minWidth+m)>a){a=b.minWidth+m;
}}var c=this.getSpacing();
var j=this.getSeparator();

if(j){var h=f.computeVerticalSeparatorGaps(n,c,j);
}else{var h=f.computeVerticalGaps(n,c,true);
}return {minHeight:d+h,height:e+h,minWidth:a,width:g};
}},destruct:function(){this._disposeFields(t,u,w);
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
(function(){var m="replacement",l="Boolean",k="_applyScale",j="_applySource",i="-disabled.$1",h="changeSource",g="String",f="image",e="qx.ui.basic.Image";
qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(n){arguments.callee.base.call(this);

if(n){this.setSource(n);
}},properties:{source:{check:g,init:null,nullable:true,event:h,apply:j,themeable:true},scale:{check:l,init:false,themeable:true,apply:k},appearance:{refine:true,init:f},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__gH:null,__gI:null,_createContentElement:function(){return new qx.html.Image();
},_getContentHint:function(){return {width:this.__gH||0,height:this.__gI||0};
},_applyEnabled:function(y,z){arguments.callee.base.call(this,y,z);

if(this.getSource()){this._styleSource();
}},_applySource:function(o){this._styleSource();
},_applyScale:function(w){var x=this.getContentElement();
x.setScale(w);
},_styleSource:function(){var u=qx.util.AliasManager.getInstance().resolve(this.getSource());
var p=this.getContentElement();

if(!u){p.resetSource();
return;
}var q=qx.util.ResourceManager;
var v=qx.io2.ImageLoader;
if(q.has(u)){if(!this.getEnabled()){var t=u.replace(/\.([a-z]+)$/,i);

if(q.has(t)){u=t;
this.addState(m);
}else{this.removeState(m);
}}if(p.getSource()===u){return;
}p.setSource(u);
this.__gL(q.getImageWidth(u),q.getImageHeight(u));
}else if(v.isLoaded(u)){p.setSource(u);
var r=v.getWidth(u);
var s=v.getHeight(u);
this.__gL(r,s);
}else{var self;
if(!qx.io2.ImageLoader.isFailed(u)){qx.io2.ImageLoader.load(u,this.__gK,this);
}}},__gK:function(c,d){if(c!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(!d){this.warn("Image could not be loaded: "+c);
return;
}this._styleSource();
},__gL:function(a,b){if(a!==this.__gH||b!==this.__gI){this.__gH=a;
this.__gI=b;
qx.ui.core.queue.Layout.add(this);
}}}});
})();
(function(){var t="interval",s="Integer",r="resize",q="Boolean",p="disappear",o="bottom-left",n="offsetLeft",m="offsetRight",l="right-top",k="top-right",e="top-left",j="bottom-right",h="right-bottom",d="offsetBottom",c="qx.ui.core.MPlacement",g="left-top",f="left-bottom",i="shorthand",b="offsetTop";
qx.Mixin.define(c,{properties:{position:{check:[e,k,o,j,g,f,l,h],init:o,themeable:true},domMove:{check:q,init:false},smart:{check:q,init:true,themeable:true},offsetLeft:{check:s,init:0,themeable:true},offsetTop:{check:s,init:0,themeable:true},offsetRight:{check:s,init:0,themeable:true},offsetBottom:{check:s,init:0,themeable:true},offset:{group:[b,m,d,n],mode:i,themeable:true}},members:{__gM:null,__gN:null,getLayoutLocation:function(u){var x,w,y,top;
w=u.getBounds();
y=w.left;
top=w.top;
var z=w;
u=u.getLayoutParent();

while(u&&!u.isRootWidget()){w=u.getBounds();
y+=w.left;
top+=w.top;
x=u.getInsets();
y+=x.left;
top+=x.top;
u=u.getLayoutParent();
}if(u.isRootWidget()){var v=u.getContainerLocation();

if(v){y+=v.left;
top+=v.top;
}}return {left:y,top:top,right:y+z.width,bottom:top+z.height};
},moveTo:function(a,top){if(this.getDomMove()){this.setDomPosition(a,top);
}else{this.setLayoutProperties({left:a,top:top});
}},placeToWidget:function(A,B){if(B){this.__gN=qx.lang.Function.bind(this.placeToWidget,this,A,false);
qx.event.Idle.getInstance().addListener(t,this.__gN);
this.addListener(p,function(){if(this.__gN){qx.event.Idle.getInstance().removeListener(t,this.__gN);
this.__gN=null;
}},this);
}var C=A.getContainerLocation()||this.getLayoutLocation(A);
this.__gO(C);
},placeToMouse:function(event){var E=event.getDocumentLeft();
var top=event.getDocumentTop();
var D={left:E,top:top,right:E,bottom:top};
this.__gO(D);
},placeToElement:function(H,I){var location=qx.bom.element.Location.get(H);
var J={left:location.left,top:location.top,right:location.left+H.offsetWidth,bottom:location.top+H.offsetHeight};
if(I){this.__gN=qx.lang.Function.bind(this.placeToElement,this,H,false);
qx.event.Idle.getInstance().addListener(t,this.__gN);
this.addListener(p,function(){if(this.__gN){qx.event.Idle.getInstance().removeListener(t,this.__gN);
this.__gN=null;
}},this);
}this.__gO(J);
},placeToPoint:function(F){var G={left:F.left,top:F.top,right:F.left,bottom:F.top};
this.__gO(G);
},__gO:function(K){var Q=this.getBounds();

if(Q==null){if(!this.__gM){this.addListener(r,this.__gO);
}this.__gM=K;
return;
}else if(this.__gM){K=this.__gM;
delete this.__gM;
this.removeListener(r,this.__gO);
}var L=this.getLayoutParent().getBounds();
var O=this.getPosition();
var P=this.getSmart();
var M={left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
var N=qx.util.PlaceUtil.compute(Q,L,K,O,P,M);
this.moveTo(N.left,N.top);
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
(function(){var z="qx.dynlocale",y="changeLocale",x="on",w="color",v="qx.ui.basic.Label",u="_applyRich",t="A",s="_applyTextAlign",r="Boolean",q="_applyContent",k="label",p="textAlign",n="changeTextAlign",j="center",i="__iW",m="changeContent",l="left",o="String",h="right";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(content){arguments.callee.base.call(this);

if(content!=null){this.setContent(content);
}
if(qx.core.Variant.isSet(z,x)){qx.locale.Manager.getInstance().addListener(y,this._onChangeLocale,this);
}},properties:{rich:{check:r,init:false,apply:u},content:{check:o,apply:q,event:m,nullable:true},textAlign:{check:[l,j,h],nullable:true,themeable:true,apply:s,event:n},appearance:{refine:true,init:k},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iW:null,__iX:null,_getContentHint:function(){if(this.__iX){this.__ja();
delete this.__iX;
}return {width:this.__iY.width,height:this.__iY.height};
},_hasHeightForWidth:function(){return this.getRich();
},_getContentHeightForWidth:function(A){if(!this.getRich()){return null;
}var B=this.__iW?this.__iW.getStyles():qx.bom.Font.getDefaultStyles();
return qx.bom.Label.getHtmlSize(this.getContent(),B,A).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(F,G){this.getContentElement().setStyle(p,F);
},_applyTextColor:function(a,b){if(a){this.getContentElement().setStyle(w,qx.theme.manager.Color.getInstance().resolve(a));
}else{this.getContentElement().removeStyle(w);
}},__iY:{width:0,height:0},_applyFont:function(C,D){var E;

if(C){this.__iW=qx.theme.manager.Font.getInstance().resolve(C);
E=this.__iW.getStyles();
}else{this.__iW=null;
E=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(E);
this.__iX=true;
qx.ui.core.queue.Layout.add(this);
},__ja:function(){var g=qx.bom.Label;
var e=this.getFont();
var d=e?this.__iW.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getContent()||t;
var f=this.getRich();
this.__iY=f?g.getHtmlSize(content,d):g.getTextSize(content,d);
},_applyRich:function(c){this.getContentElement().setRich(c);
this.__iX=true;
qx.ui.core.queue.Layout.add(this);
},_onChangeLocale:qx.core.Variant.select(z,{"on":function(e){var content=this.getContent();

if(content&&content.translate){this.setContent(content.translate());
}},"off":null}),_applyContent:function(H){this.getContentElement().setContent(H);
this.__iX=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Variant.isSet(z,x)){qx.locale.Manager.getInstance().removeListener(y,this._onChangeLocale,this);
}this._disposeFields(i);
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
(function(){var i="appearance",h="qx.ui.core.queue.Appearance";
qx.Class.define(h,{statics:{__fE:{},remove:function(e){delete this.__fE[e.$$hash];
},add:function(f){var g=this.__fE;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(i);
},has:function(j){return !!this.__fE[j.$$hash];
},flush:function(){var d=qx.ui.core.queue.Visibility;
var a=this.__fE;
var c;

for(var b in a){c=a[b];
delete a[b];
if(d.isVisible(c)){c.syncAppearance();
}else{c.$$stateChanges=true;
}}}}});
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
(function(){var b="qx.event.handler.Capture";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(c,d,e){},unregisterEvent:function(f,g,h){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
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
(function(){var s="qx.ui.core.queue.Layout",r="layout";
qx.Class.define(s,{statics:{__fF:{},remove:function(u){delete this.__fF[u.$$hash];
},add:function(t){this.__fF[t.$$hash]=t;
qx.ui.core.queue.Manager.scheduleFlush(r);
},flush:function(){var j=this.__fI();
for(var i=j.length-1;i>=0;i--){var k=j[i];
if(k.hasValidLayout()){continue;
}if(k.isRootWidget()&&!k.hasUserBounds()){var m=k.getSizeHint();
k.renderLayout(0,0,m.width,m.height);
}else{var l=k.getBounds();
k.renderLayout(l.left,l.top,l.width,l.height);
}}},getNestingLevel:function(n){var o=this.__fH;
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
},__fG:function(){var A=qx.ui.core.queue.Visibility;
this.__fH={};
var z=[];
var y=this.__fF;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__fI:function(){var d=[];
var f=this.__fG();

for(var c=f.length-1;c>=0;c--){if(!f[c]){continue;
}
for(var b in f[c]){var a=f[c][b];
if(c==0||a.isRootWidget()||a.hasUserBounds()){d.push(a);
a.invalidateLayoutCache();
continue;
}var h=a.getSizeHint(false);

if(h){a.invalidateLayoutCache();
var e=a.getSizeHint();
var g=(!a.getBounds()||h.minWidth!==e.minWidth||h.width!==e.width||h.maxWidth!==e.maxWidth||h.minHeight!==e.minHeight||h.height!==e.height||h.maxHeight!==e.maxHeight);
}else{g=true;
}
if(g){var parent=a.getLayoutParent();

if(!f[c-1]){f[c-1]={};
}f[c-1][parent.$$hash]=parent;
}else{d.push(a);
}}}return d;
}}});
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
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},resolve:function(k){var n=this._dynamic;
var l=n[k];

if(l){return l;
}var m=this.getTheme();

if(m!==null&&m.fonts[k]){return n[k]=(new qx.bom.Font).set(m.colors[k]);
}return k;
},isDynamic:function(h){var j=this._dynamic;

if(h&&(h instanceof qx.bom.Font||j[h]!==undefined)){return true;
}var i=this.getTheme();

if(i!==null&&h&&i.fonts[h]){j[h]=(new qx.bom.Font).set(i.fonts[h]);
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
(function(){var f="source",e="scale",d="no-repeat",c="mshtml",b="qx.client",a="qx.html.Image";
qx.Class.define(a,{extend:qx.html.Element,members:{_applyProperty:function(name,k){arguments.callee.base.call(this,name,k);

if(name===f){var o=this.getDomElement();
var l=this.getAllStyles();
var m=this._getProperty(f);
var n=this._getProperty(e);
var p=n?e:d;
qx.bom.element.Decoration.update(o,m,p,l);
}},_createDomElement:function(){var i=this._getProperty(e);
var j=i?e:d;

if(qx.core.Variant.isSet(b,c)){var h=this._getProperty(f);
this.setNodeName(qx.bom.element.Decoration.getTagName(j,h));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(j));
}return arguments.callee.base.call(this);
},_copyData:function(g){return arguments.callee.base.call(this,true);
},setSource:function(r){this._setProperty(f,r);
return this;
},getSource:function(){return this._getProperty(f);
},resetSource:function(){this._removeProperty(f);
return this;
},setScale:function(q){this._setProperty(e,q);
return this;
},getScale:function(){return this._getProperty(e);
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
(function(){var c="qx.ui.core.queue.Visibility",b="visibility";
qx.Class.define(c,{statics:{__fB:{},__fC:{},remove:function(d){var e=d.$$hash;
delete this.__fC[e];
delete this.__fB[e];
},isVisible:function(a){return this.__fC[a.$$hash]||false;
},__fD:function(l){var n=this.__fC;
var m=l.$$hash;
var o;
if(l.isExcluded()){o=false;
}else{var parent=l.$$parent;

if(parent){o=this.__fD(parent);
}else{o=l.isRootWidget();
}}return n[m]=o;
},add:function(f){var g=this.__fB;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var h=this.__fB;
var k=this.__fC;
for(var i in h){if(k[i]!=null){h[i].addChildrenToQueue(h);
}}var j={};

for(var i in h){j[i]=k[i];
k[i]=null;
}for(var i in h){if(k[i]==null){this.__fD(h[i]);
}if(k[i]&&k[i]!=j[i]){h[i].checkAppearanceNeeds();
}}this.__fB={};
}}});
})();
(function(){var dL="left",dK="top",dJ="_applyLayoutChange",dI="hAlign",dH="flex",dG="vAlign",dF="Integer",dE="__ki",dD="__km",dC="__kq",dv="minWidth",dB="width",dy="__kj",dt="minHeight",ds="__kk",dx="qx.ui.layout.Grid",dw="height",dz="maxHeight",dr="maxWidth",dA="__kp",du="__kl";
qx.Class.define(dx,{extend:qx.ui.layout.Abstract,construct:function(W,X){arguments.callee.base.call(this);
this.__ki=[];
this.__kj=[];

if(W){this.setSpacingX(W);
}
if(X){this.setSpacingY(X);
}},properties:{spacingX:{check:dF,init:0,apply:dJ},spacingY:{check:dF,init:0,apply:dJ}},members:{__kk:null,__ki:null,__kj:null,__kl:null,__km:null,__kn:null,__ko:null,__kp:null,__kq:null,verifyLayoutProperty:null,__kr:function(){var ec=[];
var eb=[];
var ed=[];
var dY=0;
var dX=0;
var ef=this._getLayoutChildren();

for(var i=0,l=ef.length;i<l;i++){var ea=ef[i];
var ee=ea.getLayoutProperties();
var eg=ee.row;
var dW=ee.column;
ee.colSpan=ee.colSpan||1;
ee.rowSpan=ee.rowSpan||1;
if(eg==null||dW==null){throw new Error("The layout properties 'row' and 'column' must be defined!");
}
if(ec[eg]&&ec[eg][dW]){throw new Error("There is already a widget in this cell ("+eg+", "+dW+")");
}
for(var x=dW;x<dW+ee.colSpan;x++){for(var y=eg;y<eg+ee.rowSpan;y++){if(ec[y]==undefined){ec[y]=[];
}ec[y][x]=ea;
dX=Math.max(dX,x);
dY=Math.max(dY,y);
}}
if(ee.rowSpan>1){ed.push(ea);
}
if(ee.colSpan>1){eb.push(ea);
}}for(var y=0;y<=dY;y++){if(ec[y]==undefined){ec[y]=[];
}}this.__kk=ec;
this.__kl=eb;
this.__km=ed;
this.__kn=dY;
this.__ko=dX;
delete this._invalidChildrenCache;
},_setRowData:function(ct,cu,cv){var cw=this.__ki[ct];

if(!cw){this.__ki[ct]={};
this.__ki[ct][cu]=cv;
}else{cw[cu]=cv;
}},_setColumnData:function(bX,bY,ca){var cb=this.__kj[bX];

if(!cb){this.__kj[bX]={};
this.__kj[bX][bY]=ca;
}else{cb[bY]=ca;
}},setSpacing:function(eh){this.setSpacingY(eh);
this.setSpacingX(eh);
},setColumnAlign:function(c,d,e){{};
this._setColumnData(c,dI,d);
this._setColumnData(c,dG,e);
this._applyLayoutChange();
return this;
},getColumnAlign:function(P){var Q=this.__kj[P]||{};
return {vAlign:Q.vAlign||dK,hAlign:Q.hAlign||dL};
},setRowAlign:function(R,S,T){{};
this._setRowData(R,dI,S);
this._setRowData(R,dG,T);
this._applyLayoutChange();
return this;
},getRowAlign:function(cl){var cm=this.__ki[cl]||{};
return {vAlign:cm.vAlign||dK,hAlign:cm.hAlign||dL};
},getCellWidget:function(cp,cq){if(this._invalidChildrenCache){this.__kr();
}return this.__kk[cp][cq]||null;
},getCellAlign:function(bN,bO){var bU=dK;
var bS=dL;
var bT=this.__ki[bN];
var bQ=this.__kj[bO];
var bP=this.__kk[bN][bO];

if(bP){var bR={vAlign:bP.getAlignY(),hAlign:bP.getAlignX()};
}else{bR={};
}if(bR.vAlign){bU=bR.vAlign;
}else if(bT&&bT.vAlign){bU=bT.vAlign;
}else if(bQ&&bQ.vAlign){bU=bQ.vAlign;
}if(bR.hAlign){bS=bR.hAlign;
}else if(bQ&&bQ.hAlign){bS=bQ.hAlign;
}else if(bT&&bT.hAlign){bS=bT.hAlign;
}return {vAlign:bU,hAlign:bS};
},setColumnFlex:function(dm,dn){this._setColumnData(dm,dH,dn);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bf){var bg=this.__kj[bf]||{};
return bg.flex!==undefined?bg.flex:0;
},setRowFlex:function(cY,da){this._setRowData(cY,dH,da);
this._applyLayoutChange();
return this;
},getRowFlex:function(dM){var dN=this.__ki[dM]||{};
var dO=dN.flex!==undefined?dN.flex:0;
return dO;
},setColumnMaxWidth:function(Y,ba){this._setColumnData(Y,dr,ba);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bb){var bc=this.__kj[bb]||{};
return bc.maxWidth!==undefined?bc.maxWidth:Infinity;
},setColumnWidth:function(bd,be){this._setColumnData(bd,dB,be);
this._applyLayoutChange();
return this;
},getColumnWidth:function(cc){var cd=this.__kj[cc]||{};
return cd.width!==undefined?cd.width:null;
},setColumnMinWidth:function(U,V){this._setColumnData(U,dv,V);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(a){var b=this.__kj[a]||{};
return b.minWidth||0;
},setRowMaxHeight:function(cL,cM){this._setRowData(cL,dz,cM);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(cn){var co=this.__ki[cn]||{};
return co.maxHeight||Infinity;
},setRowHeight:function(cr,cs){this._setRowData(cr,dw,cs);
this._applyLayoutChange();
return this;
},getRowHeight:function(bV){var bW=this.__ki[bV]||{};
return bW.height!==undefined?bW.height:null;
},setRowMinHeight:function(ce,cf){this._setRowData(ce,dt,cf);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(dp){var dq=this.__ki[dp]||{};
return dq.minHeight||0;
},__ks:function(cg){var ck=cg.getSizeHint();
var cj=cg.getMarginLeft()+cg.getMarginRight();
var ci=cg.getMarginTop()+cg.getMarginBottom();
var ch={height:ck.height+ci,width:ck.width+cj,minHeight:ck.minHeight+ci,minWidth:ck.minWidth+cj,maxHeight:ck.maxHeight+ci,maxWidth:ck.maxWidth+cj};
return ch;
},_fixHeightsRowSpan:function(cx){var cI=this.getSpacingY();

for(var i=0,l=this.__km.length;i<l;i++){var cA=this.__km[i];
var cC=this.__ks(cA);
var cD=cA.getLayoutProperties();
var cz=cD.row;
var cG=cI*(cD.rowSpan-1);
var cy=cG;
var cF={};

for(var j=0;j<cD.rowSpan;j++){var cK=cD.row+j;
var cB=cx[cK];
var cJ=this.getRowFlex(cK);

if(cJ>0){cF[cK]={min:cB.minHeight,value:cB.height,max:cB.maxHeight,flex:cJ};
}cG+=cB.height;
cy+=cB.minHeight;
}if(cG<cC.height){var cH=qx.ui.layout.Util.computeFlexOffsets(cF,cC.height,cG);

for(var j=0;j<cD.rowSpan;j++){var cE=cH[cz+j]?cH[cz+j].offset:0;
cx[cz+j].height+=cE;
}}if(cy<cC.minHeight){var cH=qx.ui.layout.Util.computeFlexOffsets(cF,cC.minHeight,cy);

for(var j=0;j<cD.rowSpan;j++){var cE=cH[cz+j]?cH[cz+j].offset:0;
cx[cz+j].minHeight+=cE;
}}}},_fixWidthsColSpan:function(bo){var bs=this.getSpacingX();

for(var i=0,l=this.__kl.length;i<l;i++){var bp=this.__kl[i];
var br=this.__ks(bp);
var bu=bp.getLayoutProperties();
var bq=bu.column;
var bA=bs*(bu.colSpan-1);
var bt=bA;
var bv={};
var bx;

for(var j=0;j<bu.colSpan;j++){var bB=bu.column+j;
var bz=bo[bB];
var by=this.getColumnFlex(bB);
if(by>0){bv[bB]={min:bz.minWidth,value:bz.width,max:bz.maxWidth,flex:by};
}bA+=bz.width;
bt+=bz.minWidth;
}if(bA<br.width){var bw=qx.ui.layout.Util.computeFlexOffsets(bv,br.width,bA);

for(var j=0;j<bu.colSpan;j++){bx=bw[bq+j]?bw[bq+j].offset:0;
bo[bq+j].width+=bx;
}}if(bt<br.minWidth){var bw=qx.ui.layout.Util.computeFlexOffsets(bv,br.minWidth,bt);

for(var j=0;j<bu.colSpan;j++){bx=bw[bq+j]?bw[bq+j].offset:0;
bo[bq+j].minWidth+=bx;
}}}},_getRowHeights:function(){if(this.__kp!=null){return this.__kp;
}var cW=[];
var cP=this.__kn;
var cO=this.__ko;

for(var cX=0;cX<=cP;cX++){var cQ=0;
var cS=0;
var cR=0;

for(var cV=0;cV<=cO;cV++){var cN=this.__kk[cX][cV];

if(!cN){continue;
}var cT=cN.getLayoutProperties().rowSpan||0;

if(cT>1){continue;
}var cU=this.__ks(cN);

if(this.getRowFlex(cX)>0){cQ=Math.max(cQ,cU.minHeight);
}else{cQ=Math.max(cQ,cU.height);
}cS=Math.max(cS,cU.height);
}var cQ=Math.max(cQ,this.getRowMinHeight(cX));
var cR=this.getRowMaxHeight(cX);

if(this.getRowHeight(cX)!==null){var cS=this.getRowHeight(cX);
}else{var cS=Math.max(cQ,Math.min(cS,cR));
}cW[cX]={minHeight:cQ,height:cS,maxHeight:cR};
}
if(this.__km.length>0){this._fixHeightsRowSpan(cW);
}this.__kp=cW;
return cW;
},_getColWidths:function(){if(this.__kq!=null){return this.__kq;
}var bG=[];
var bD=this.__ko;
var bF=this.__kn;

for(var bL=0;bL<=bD;bL++){var bJ=0;
var bI=0;
var bE=Infinity;

for(var bM=0;bM<=bF;bM++){var bC=this.__kk[bM][bL];

if(!bC){continue;
}var bH=bC.getLayoutProperties().colSpan||0;

if(bH>1){continue;
}var bK=this.__ks(bC);

if(this.getColumnFlex(bL)>0){bI=Math.max(bI,bK.minWidth);
}else{bI=Math.max(bI,bK.width);
}bJ=Math.max(bJ,bK.width);
}var bI=Math.max(bI,this.getColumnMinWidth(bL));
var bE=this.getColumnMaxWidth(bL);

if(this.getColumnWidth(bL)!==null){var bJ=this.getColumnWidth(bL);
}else{var bJ=Math.max(bI,Math.min(bJ,bE));
}bG[bL]={minWidth:bI,width:bJ,maxWidth:bE};
}
if(this.__kl.length>0){this._fixWidthsColSpan(bG);
}this.__kq=bG;
return bG;
},_getColumnFlexOffsets:function(bh){var bi=this.getSizeHint();
var bm=bh-bi.width;

if(bm==0){return {};
}var bk=this._getColWidths();
var bj={};

for(var i=0,l=bk.length;i<l;i++){var bn=bk[i];
var bl=this.getColumnFlex(i);

if((bl<=0)||(bn.width==bn.maxWidth&&bm>0)||(bn.width==bn.minWidth&&bm<0)){continue;
}bj[i]={min:bn.minWidth,value:bn.width,max:bn.maxWidth,flex:bl};
}return qx.ui.layout.Util.computeFlexOffsets(bj,bh,bi.width);
},_getRowFlexOffsets:function(dP){var dQ=this.getSizeHint();
var dT=dP-dQ.height;

if(dT==0){return {};
}var dU=this._getRowHeights();
var dR={};

for(var i=0,l=dU.length;i<l;i++){var dV=dU[i];
var dS=this.getRowFlex(i);

if((dS<=0)||(dV.height==dV.maxHeight&&dT>0)||(dV.height==dV.minHeight&&dT<0)){continue;
}dR[i]={min:dV.minHeight,value:dV.height,max:dV.maxHeight,flex:dS};
}return qx.ui.layout.Util.computeFlexOffsets(dR,dP,dQ.height);
},renderLayout:function(f,g){if(this._invalidChildrenCache){this.__kr();
}var z=qx.ui.layout.Util;
var k=this.getSpacingX();
var r=this.getSpacingY();
var E=this._getColWidths();
var D=this._getColumnFlexOffsets(f);
var m=[];
var G=this.__ko;
var h=this.__kn;
var F;

for(var H=0;H<=G;H++){F=D[H]?D[H].offset:0;
m[H]=E[H].width+F;
}var u=this._getRowHeights();
var w=this._getRowFlexOffsets(g);
var N=[];

for(var s=0;s<=h;s++){F=w[s]?w[s].offset:0;
N[s]=u[s].height+F;
}var O=0;

for(var H=0;H<=G;H++){var top=0;

for(var s=0;s<=h;s++){var B=this.__kk[s][H];
if(!B){top+=N[s]+r;
continue;
}var n=B.getLayoutProperties();
if(n.row!==s||n.column!==H){top+=N[s]+r;
continue;
}var M=k*(n.colSpan-1);

for(var i=0;i<n.colSpan;i++){M+=m[H+i];
}var C=r*(n.rowSpan-1);

for(var i=0;i<n.rowSpan;i++){C+=N[s+i];
}var o=B.getSizeHint();
var K=B.getMarginTop();
var A=B.getMarginLeft();
var v=B.getMarginBottom();
var q=B.getMarginRight();
var t=Math.max(o.minWidth,Math.min(M-A-q,o.maxWidth));
var L=Math.max(o.minHeight,Math.min(C-K-v,o.maxHeight));
var I=this.getCellAlign(s,H);
var J=O+z.computeHorizontalAlignOffset(I.hAlign,t,M,A,q);
var p=top+z.computeVerticalAlignOffset(I.vAlign,L,C,K,v);
B.renderLayout(J,p,t,L);
top+=N[s]+r;
}O+=m[H]+k;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__kq=null;
this.__kp=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kr();
}var df=this._getColWidths();
var dh=0,di=0;

for(var i=0,l=df.length;i<l;i++){var dj=df[i];

if(this.getColumnFlex(i)>0){dh+=dj.minWidth;
}else{dh+=dj.width;
}di+=dj.width;
}var dk=this._getRowHeights();
var dd=0,dg=0;

for(var i=0,l=dk.length;i<l;i++){var dl=dk[i];

if(this.getRowFlex(i)>0){dd+=dl.minHeight;
}else{dd+=dl.height;
}dg+=dl.height;
}var dc=this.getSpacingX()*(df.length-1);
var db=this.getSpacingY()*(dk.length-1);
var de={minWidth:dh+dc,width:di+dc,minHeight:dd+db,height:dg+db};
return de;
}},destruct:function(){this._disposeFields(ds,dE,dy,du,dD,dC,dA);
}});
})();
(function(){var c="qx.ui.core.queue.Widget",b="widget";
qx.Class.define(c,{statics:{__fA:{},remove:function(a){delete this.__fA[a.$$hash];
},add:function(d){var e=this.__fA;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var f=this.__fA;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__fA={};
}}});
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
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Bootstrap.define(c,{statics:{LOCALE:"",VARIANT:"",__iM:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__iM();
}});
})();
(function(){var p="_",o="",n="qx.dynlocale",m="on",l="_applyLocale",k="changeLocale",j="C",h="__iR",g="__iQ",f="qx.locale.Manager",d="String",e="singleton";
qx.Class.define(f,{type:e,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iQ=qx.$$translations||{};
this.__iR=qx.$$locales||{};
var c=qx.bom.client.Locale;
var a=c.LOCALE;
var b=c.VARIANT;

if(b!==o){a+=p+b;
}this.setLocale(a||this.__iS);
},statics:{tr:function(u,v){var w=qx.lang.Array.fromArguments(arguments);
w.splice(0,1);
return qx.locale.Manager.getInstance().translate(u,w);
},trn:function(X,Y,ba,bb){var bc=qx.lang.Array.fromArguments(arguments);
bc.splice(0,3);
if(ba!=1){return qx.locale.Manager.getInstance().translate(Y,bc);
}else{return qx.locale.Manager.getInstance().translate(X,bc);
}},trc:function(L,M,N){var O=qx.lang.Array.fromArguments(arguments);
O.splice(0,2);
return qx.locale.Manager.getInstance().translate(M,O);
},marktr:function(K){return K;
}},properties:{locale:{check:d,nullable:true,apply:l,event:k}},members:{__iS:j,__iT:null,__iU:null,__iQ:null,__iR:null,getLanguage:function(){return this.__iU;
},getTerritory:function(){return this.getLocale().split(p)[1]||o;
},getAvailableLocales:function(){var J=[];

for(var I in this.__iR){if(I!=this.__iS){J.push(I);
}}return J;
},__iV:function(x){var z;
var y=x.indexOf(p);

if(y==-1){z=x;
}else{z=x.substring(0,y);
}return z;
},_applyLocale:function(bd,be){this.__iT=bd;
this.__iU=this.__iV(bd);
},addTranslation:function(q,r){var s=this.__iQ;

if(s[q]){for(var t in r){s[q][t]=r[t];
}}else{s[q]=r;
}},translate:function(P,Q,R){var W;
var U=this.__iQ;

if(!U){return P;
}
if(R){var T=this.__iV(R);
}else{R=this.__iT;
T=this.__iU;
}
if(!W&&U[R]){W=U[R][P];
}
if(!W&&U[T]){W=U[T][P];
}
if(!W&&U[this.__iS]){W=U[this.__iS][P];
}
if(!W){W=P;
}
if(Q.length>0){var S=[];

for(var i=0;i<Q.length;i++){var V=Q[i];

if(V.translate){S[i]=V.translate();
}else{S[i]=V;
}}W=qx.lang.String.format(W,S);
}
if(qx.core.Variant.isSet(n,m)){W=new qx.locale.LocalizedString(W,P,Q);
}return W;
},localize:function(A,B,C){var H;
var F=this.__iR;

if(!F){return A;
}
if(C){var E=this.__iV(C);
}else{C=this.__iT;
E=this.__iU;
}
if(!H&&F[C]){H=F[C][A];
}
if(!H&&F[E]){H=F[E][A];
}
if(!H&&F[this.__iS]){H=F[this.__iS][A];
}
if(!H){H=A;
}
if(B.length>0){var D=[];

for(var i=0;i<B.length;i++){var G=B[i];

if(G.translate){D[i]=G.translate();
}else{D[i]=G;
}}H=qx.lang.String.format(H,D);
}
if(qx.core.Variant.isSet(n,m)){H=new qx.locale.LocalizedString(H,A,B);
}return H;
}},destruct:function(){this._disposeFields(g,h);
}});
})();
(function(){var s="qx.client",r="gecko",q="div",p="",o="hidden",n="auto",m="value",l="inherit",k="text",j="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",I="nowrap",H="visible",G="ellipsis",F="normal",E="label",D="-1000px",C="absolute",B="px",A="crop",z="end",x="100%",y="qx.bom.Label",v="opera",w="block",t="none",u="mshtml|opera";
qx.Class.define(y,{statics:{__jb:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jc:function(){var X=document.createElement(q);
var Y=X.style;
Y.width=Y.height=n;
Y.left=Y.top=D;
Y.visibility=o;
Y.position=C;
Y.overflow=H;
Y.whiteSpace=I;

if(qx.core.Variant.isSet(s,r)){var ba=document.createElementNS(j,E);
for(var bb in this.__jb){ba.style[bb]=l;
}X.appendChild(ba);
}document.body.insertBefore(X,document.body.firstChild);
return this._textElement=X;
},__jd:function(){var O=qx.bom.Element.create(q);
var P=O.style;
P.width=P.height=n;
P.left=P.top=D;
P.visibility=o;
P.position=C;
P.overflow=H;
P.whiteSpace=F;
document.body.insertBefore(O,document.body.firstChild);
return this._htmlElement=O;
},__je:function(h){var i={};

if(h){i.whiteSpace=F;
}else if(qx.core.Variant.isSet(s,r)){i.display=w;
}else{i.overflow=o;
i.whiteSpace=I;
i.textOverflow=G;
if(qx.core.Variant.isSet(s,v)){i.OTextOverflow=G;
}}i.userSelect=t;
return i;
},create:function(content,Q,R){if(!R){R=window;
}
if(Q){var S=R.document.createElement(q);
S.useHtml=true;
}else if(qx.core.Variant.isSet(s,r)){var S=R.document.createElement(q);
var T=R.document.createElementNS(j,E);
T.style.cursor=l;
T.style.overflow=o;
T.style.maxWidth=x;
for(var U in this.__jb){T.style[U]=l;
}T.setAttribute(A,z);
S.appendChild(T);
}else{var S=R.document.createElement(q);
qx.bom.element.Style.setStyles(S,this.__je(false));
}
if(content){this.setContent(S,content);
}return S;
},setContent:function(V,W){W=W||p;

if(V.useHtml){V.innerHTML=W;
}else if(qx.core.Variant.isSet(s,r)){V.firstChild.setAttribute(m,W);
}else{qx.bom.element.Attribute.set(V,k,W);
}},getContent:function(g){if(g.useHtml){return g.innerHTML;
}else if(qx.core.Variant.isSet(s,r)){return g.firstChild.getAttribute(m)||p;
}else{return qx.bom.element.Attribute.get(g,k);
}},getHtmlSize:function(content,J,K){var N=this._htmlElement||this.__jd();
var L=this.__jb;

if(!J){J={};
}
for(var M in L){N.style[M]=J[M]||p;
}N.style.width=K!=null?K+B:n;
N.innerHTML=content;
return qx.bom.element.Dimension.getSize(N);
},getTextSize:function(a,b){var f=this._textElement||this.__jc();
var c=this.__jb;

if(!b){b={};
}
for(var e in c){f.style[e]=b[e]||p;
}if(qx.core.Variant.isSet(s,r)){f.firstChild.setAttribute(m,a);
}else if(qx.core.Variant.isSet(s,u)){f.innerText=a;
}else{f.textContent=a;
}var d=qx.bom.element.Dimension.getSize(f);

if(qx.core.Variant.isSet(s,r)){if(!qx.bom.client.Platform.WIN){d.width++;
}}return d;
}}});
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
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(b){b.getLayout=b._getLayout;
b.setLayout=b._setLayout;
}}});
})();
(function(){var f="qx.event.type.Data",e="qx.ui.container.Composite",d="addChildWidget",c="removeChildWidget";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(b){arguments.callee.base.call(this);

if(b!=null){this._setLayout(b);
}},events:{addChildWidget:f,removeChildWidget:f},members:{_afterAddChild:function(a){this.fireNonBubblingEvent(d,qx.event.type.Data,[a]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(c,qx.event.type.Data,[i]);
}},defer:function(g,h){qx.ui.core.MChildrenHandling.remap(h);
qx.ui.core.MLayoutHandling.remap(h);
}});
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
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
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
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__jH:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__jI:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__jI[name];
s[t]();
}else{var u=this.__jH[name];
s[u](q);
}}}});
})();
(function(){var s="textarea",r="input",q="qx.client",p="character",o="qx.bom.Selection",n="#text",m="EndToEnd",l="button",k="body";
qx.Class.define(o,{statics:{getSelectionObject:qx.core.Variant.select(q,{"mshtml":function(H){return H.selection;
},"default":function(P){return qx.dom.Node.getWindow(P).getSelection();
}}),get:qx.core.Variant.select(q,{"mshtml":function(u){var v=qx.bom.Range.get(qx.dom.Node.getDocument(u));
return v.text;
},"default":function(w){if(qx.dom.Node.isElement(w)&&(w.nodeName.toLowerCase()==r||w.nodeName.toLowerCase()==s)){return w.value.substring(w.selectionStart,w.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(w)).toString();
}return null;
}}),getLength:qx.core.Variant.select(q,{"mshtml":function(x){var z=qx.bom.Selection.get(x);
var y=qx.util.StringSplit.split(z,/\r\n/);
return z.length-(y.length-1);
},"opera":function(e){var j,h,f;

if(qx.dom.Node.isElement(e)&&(e.nodeName.toLowerCase()==r||e.nodeName.toLowerCase()==s)){var i=e.selectionStart;
var g=e.selectionEnd;
j=e.value.substring(i,g);
h=g-i;
}else{j=qx.bom.Selection.get(e);
h=j.length;
}f=qx.util.StringSplit.split(j,/\r\n/);
return h-(f.length-1);
},"default":function(O){if(qx.dom.Node.isElement(O)&&(O.nodeName.toLowerCase()==r||O.nodeName.toLowerCase()==s)){return O.selectionEnd-O.selectionStart;
}else{return qx.bom.Selection.get(O).length;
}return null;
}}),set:qx.core.Variant.select(q,{"mshtml":function(Q,R,S){var T;
if(qx.dom.Node.isDocument(Q)){Q=Q.body;
}
if(qx.dom.Node.isElement(Q)||qx.dom.Node.isText(Q)){switch(Q.nodeName.toLowerCase()){case r:case s:case l:if(S===undefined){S=Q.value.length;
}
if(R>=0&&R<=Q.value.length&&S>=0&&S<=Q.value.length){T=qx.bom.Range.get(Q);
T.collapse(true);
T.moveStart(p,R);
T.moveEnd(p,S);
T.select();
return true;
}break;
case n:if(S===undefined){S=Q.nodeValue.length;
}
if(R>=0&&R<=Q.nodeValue.length&&S>=0&&S<=Q.nodeValue.length){T=qx.bom.Range.get(qx.dom.Node.getBodyElement(Q));
T.moveToElementText(Q.parentNode);
T.collapse(true);
T.moveStart(p,R);
T.moveEnd(p,S);
T.select();
return true;
}break;
default:if(S===undefined){S=Q.childNodes.length-1;
}if(Q.childNodes[R]&&Q.childNodes[S]){T=qx.bom.Range.get(qx.dom.Node.getBodyElement(Q));
T.moveToElementText(Q.childNodes[R]);
T.collapse(true);
var U=qx.bom.Range.get(qx.dom.Node.getBodyElement(Q));
U.moveToElementText(Q.childNodes[S]);
T.setEndPoint(m,U);
T.select();
return true;
}}}return false;
},"default":function(A,B,C){var G=A.nodeName.toLowerCase();

if(qx.dom.Node.isElement(A)&&(G==r||G==s)){if(C===undefined){C=A.value.length;
}if(B>=0&&B<=A.value.length&&C>=0&&C<=A.value.length){A.select();
A.setSelectionRange(B,C);
return true;
}}else{var E=false;
var F=qx.dom.Node.getWindow(A).getSelection();
var D=qx.bom.Range.get(A);
if(qx.dom.Node.isText(A)){if(C===undefined){C=A.length;
}
if(B>=0&&B<A.length&&C>=0&&C<=A.length){E=true;
}}else if(qx.dom.Node.isElement(A)){if(C===undefined){C=A.childNodes.length-1;
}
if(B>=0&&A.childNodes[B]&&C>=0&&A.childNodes[C]){E=true;
}}else if(qx.dom.Node.isDocument(A)){A=A.body;

if(C===undefined){C=A.childNodes.length-1;
}
if(B>=0&&A.childNodes[B]&&C>=0&&A.childNodes[C]){E=true;
}}
if(E){if(!F.isCollapsed){F.collapseToStart();
}D.setStart(A,B);
if(qx.dom.Node.isText(A)){D.setEnd(A,C);
}else{D.setEndAfter(A.childNodes[C]);
}if(F.rangeCount>0){F.removeAllRanges();
}F.addRange(D);
return true;
}}return false;
}}),setAll:function(t){return qx.bom.Selection.set(t,0);
},clear:qx.core.Variant.select(q,{"mshtml":function(a){var b=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a));
var c=qx.bom.Range.get(a);
var parent=c.parentElement();
var d=qx.bom.Range.get(qx.dom.Node.getDocument(a));
if(parent==d.parentElement()&&parent==a){b.empty();
}},"default":function(I){var K=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(I));
var M=I.nodeName.toLowerCase();
if(qx.dom.Node.isElement(I)&&(M==r||M==s)){I.setSelectionRange(0,0);
qx.bom.Element.blur(I);
}else if(qx.dom.Node.isDocument(I)||M==k){K.collapse(I.body?I.body:I,0);
}else{var L=qx.bom.Range.get(I);

if(!L.collapsed){var N;
var J=L.commonAncestorContainer;
if(qx.dom.Node.isElement(I)&&qx.dom.Node.isText(J)){N=J.parentNode;
}else{N=J;
}
if(N==I){K.collapse(I,0);
}}}}})}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__dF:false,__dG:{},scheduleFlush:function(d){var self=qx.ui.core.queue.Manager;
self.__dG[d]=true;

if(!self.__dF){self.__dI.schedule();
self.__dF=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__dH){return;
}self.__dH=true;
self.__dI.cancel();
var e=self.__dG;

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
}}qx.ui.core.queue.Manager.__dF=false;

if(e.dispose){delete e.dispose;
qx.ui.core.queue.Dispose.flush();
}self.__dH=false;
}},defer:function(c){c.__dI=new qx.util.DeferredCall(c.flush);
qx.html.Element._scheduleFlush=c.scheduleFlush;
qx.event.Registration.addListener(window,a,c.flush);
}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
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
(function(){var t="pressed",s="abandoned",r="hovered",q="Enter",p="Space",o="String",n="dblclick",m="qx.ui.form.Button",l="mouseup",k="mousedown",f="changeName",j="mouseover",i="mouseout",d="changeValue",c="keydown",h="button",g="keyup";
qx.Class.define(m,{extend:qx.ui.basic.Atom,include:qx.ui.core.MExecutable,implement:qx.ui.form.IFormElement,construct:function(u,v,w){arguments.callee.base.call(this,u,v);

if(w!=null){this.setCommand(w);
}this.addListener(j,this._onMouseOver);
this.addListener(i,this._onMouseOut);
this.addListener(k,this._onMouseDown);
this.addListener(l,this._onMouseUp);
this.addListener(c,this._onKeyDown);
this.addListener(g,this._onKeyUp);
this.addListener(n,this._onStopEvent);
},properties:{name:{check:o,nullable:true,event:f},value:{check:o,nullable:true,event:d},appearance:{refine:true,init:h},focusable:{refine:true,init:true}},members:{press:function(){if(this.hasState(s)){return;
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
var a=this.hasState(t);
var b=this.hasState(s);

if(a){this.removeState(t);
}
if(b){this.removeState(s);
}else{this.addState(r);

if(a){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case q:case p:this.removeState(s);
this.addState(t);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case q:case p:if(this.hasState(t)){this.removeState(s);
this.removeState(t);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bK=qx.dev.StackTrace.getStackTrace();
},members:{__bK:null,getStackTrace:function(){return this.__bK;
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
(function(){var D="_applyLayoutChange",C="left",B="center",A="top",z="__is",y="Decorator",x="__ir",w="middle",v="baseline",u="bottom",q="Boolean",t="right",s="_applyReversed",p="Integer",o="__iu",r="qx.ui.layout.HBox";
qx.Class.define(r,{extend:qx.ui.layout.Abstract,construct:function(bj,bk,bl){arguments.callee.base.call(this);

if(bj){this.setSpacing(bj);
}
if(bk){this.setAlignX(bk);
}
if(bl){this.setSeparator(bl);
}},properties:{alignX:{check:[C,B,t],init:C,apply:D},alignY:{check:[A,w,u,v],init:A,apply:D},spacing:{check:p,init:0,apply:D},separator:{check:y,nullable:true,apply:D},reversed:{check:q,init:false,apply:s}},members:{__ir:null,__is:null,__it:null,__iu:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__iv:function(){var bi=this._getLayoutChildren();
var length=bi.length;
var bf=false;
var bd=this.__ir&&this.__ir.length!=length&&this.__is&&this.__ir;
var bg;
var be=bd?this.__ir:new Array(length);
var bh=bd?this.__is:new Array(length);
if(this.getReversed()){bi=bi.concat().reverse();
}for(var i=0;i<length;i++){bg=bi[i].getLayoutProperties();

if(bg.width!=null){be[i]=parseFloat(bg.width)/100;
}
if(bg.flex!=null){bh[i]=bg.flex;
bf=true;
}}if(!bd){this.__ir=be;
this.__is=bh;
}this.__it=bf;
this.__iu=bi;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(E,F){if(this._invalidChildrenCache){this.__iv();
}var L=this.__iu;
var length=L.length;
var U=qx.ui.layout.Util;
var T=this.getSpacing();
var X=this.getSeparator();

if(X){var I=U.computeHorizontalSeparatorGaps(L,T,X);
}else{var I=U.computeHorizontalGaps(L,T,true);
}var i,G,R,Q;
var W=[];
var M=I;

for(i=0;i<length;i+=1){Q=this.__ir[i];
R=Q!=null?Math.floor((E-I)*Q):L[i].getSizeHint().width;
W.push(R);
M+=R;
}if(this.__it&&M!=E){var O={};
var S,V;

for(i=0;i<length;i+=1){S=this.__is[i];

if(S>0){N=L[i].getSizeHint();
O[i]={min:N.minWidth,value:W[i],max:N.maxWidth,flex:S};
}}var J=U.computeFlexOffsets(O,E,M);

for(i in J){V=J[i].offset;
W[i]+=V;
M+=V;
}}var bc=L[0].getMarginLeft();
if(M<E&&this.getAlignX()!=C){bc=E-M;

if(this.getAlignX()===B){bc=Math.round(bc/2);
}}var N,top,H,R,K,ba,P;
var T=this.getSpacing();
this._clearSeparators();
if(X){var Y=qx.theme.manager.Decoration.getInstance().resolve(X).getInsets();
var bb=Y.left+Y.right;
}for(i=0;i<length;i+=1){G=L[i];
R=W[i];
N=G.getSizeHint();
ba=G.getMarginTop();
P=G.getMarginBottom();
H=Math.max(N.minHeight,Math.min(F-ba-P,N.maxHeight));
top=U.computeVerticalAlignOffset(G.getAlignY()||this.getAlignY(),H,F,ba,P);
if(i>0){if(X){bc+=K+T;
this._renderSeparator(X,{left:bc,top:0,width:bb,height:F});
bc+=bb+T+G.getMarginLeft();
}else{bc+=U.collapseMargins(T,K,G.getMarginLeft());
}}G.renderLayout(bc,top,R,H);
bc+=R;
K=G.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__iv();
}var f=qx.ui.layout.Util;
var n=this.__iu;
var a=0,g=0;
var d=0,e=0;
var k,b,m;
for(var i=0,l=n.length;i<l;i+=1){k=n[i];
b=k.getSizeHint();
g+=b.width;
a+=this.__is[i]>0?b.minWidth:b.width;
m=k.getMarginTop()+k.getMarginBottom();
if((b.height+m)>e){e=b.height+m;
}if((b.minHeight+m)>d){d=b.minHeight+m;
}}var c=this.getSpacing();
var j=this.getSeparator();

if(j){var h=f.computeHorizontalSeparatorGaps(n,c,j);
}else{var h=f.computeHorizontalGaps(n,c,true);
}return {minWidth:a+h,width:g+h,minHeight:d,height:e};
}},destruct:function(){this._disposeFields(x,z,o);
}});
})();
(function(){var r="sending",q="completed",p="receiving",o="aborted",n="failed",m="timeout",k="qx.io.remote.Response",j="Connection dropped",h="configured",g="qx.event.type.Event",bn="Proxy authentication required",bm="qx.io.remote.transport.Abstract",bl="MSHTML-specific HTTP status code",bk="Not available",bj="Precondition failed",bi="Server error",bh="Moved temporarily",bg="qx.io.remote.Exchange",bf="Bad gateway",be="Gone",y="See other",z="Partial content",w="Server timeout",x="qx.io.remote.transport.Script",u="HTTP version not supported",v="Unauthorized",s="Multiple choices",t="Payment required",C="Not implemented",D="Request-URL too large",L="Length required",J="_applyState",T="changeState",O="Not modified",ba="qx.io.remote.Request",X="Connection closed by server",F="Moved permanently",bd="_applyImplementation",bc="Method not allowed",bb="Forbidden",E="Use proxy",H="Ok",I="Not found",K="Not acceptable",M="Request time-out",P="Bad request",U="Conflict",Y="No content",A="qx.io.remote.transport.XmlHttp",B="qx.io.remote.transport.Iframe",G="Request entity too large",S="Unknown status code",R="Unsupported media type",Q="Gateway time-out",W="created",V="Out of resources",N="undefined";
qx.Class.define(bg,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setRequest(a);
a.setTransport(this);
},events:{"sending":g,"receiving":g,"completed":k,"aborted":k,"failed":k,"timeout":k},statics:{typesOrder:[A,B,x],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bz,bA){qx.io.remote.Exchange.typesAvailable[bA]=bz;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bu in qx.io.remote.Exchange.typesAvailable){var bt=qx.io.remote.Exchange.typesAvailable[bu];

if(bt.isSupported()){qx.io.remote.Exchange.typesSupported[bu]=bt;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bo,bp,bq){if(!qx.lang.Array.contains(bo.handles.responseTypes,bq)){return false;
}
for(var br in bp){if(!bo.handles[br]){return false;
}}return true;
},_nativeMap:{0:W,1:h,2:r,3:p,4:q},wasSuccessful:function(bM,bN,bO){if(bO){switch(bM){case null:case 0:return true;
case -1:return bN<4;
default:return typeof bM===N;
}}else{switch(bM){case -1:{};
return bN<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bN!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bM>206&&bM<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bM+" ("+bN+")");
return false;
}}},statusCodeToString:function(by){switch(by){case -1:return bk;
case 200:return H;
case 304:return O;
case 206:return z;
case 204:return Y;
case 300:return s;
case 301:return F;
case 302:return bh;
case 303:return y;
case 305:return E;
case 400:return P;
case 401:return v;
case 402:return t;
case 403:return bb;
case 404:return I;
case 405:return bc;
case 406:return K;
case 407:return bn;
case 408:return M;
case 409:return U;
case 410:return be;
case 411:return L;
case 412:return bj;
case 413:return G;
case 414:return D;
case 415:return R;
case 500:return bi;
case 501:return C;
case 502:return bf;
case 503:return V;
case 504:return Q;
case 505:return u;
case 12002:return w;
case 12029:return j;
case 12030:return j;
case 12031:return j;
case 12152:return X;
case 13030:return bl;
default:return S;
}}},properties:{request:{check:ba,nullable:true},implementation:{check:bm,nullable:true,apply:bd},state:{check:[h,r,p,q,o,m,n],init:h,event:T,apply:J}},members:{send:function(){var bG=this.getRequest();

if(!bG){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bE=qx.io.remote.Exchange.typesOrder;
var bD=qx.io.remote.Exchange.typesSupported;
var bI=bG.getResponseType();
var bJ={};

if(bG.getAsynchronous()){bJ.asynchronous=true;
}else{bJ.synchronous=true;
}
if(bG.getCrossDomain()){bJ.crossDomain=true;
}
if(bG.getFileUpload()){bJ.fileUpload=true;
}for(var bH in bG.getFormFields()){bJ.programaticFormFields=true;
break;
}var bK,bF;

for(var i=0,l=bE.length;i<l;i++){bK=bD[bE[i]];

if(bK){if(!qx.io.remote.Exchange.canHandle(bK,bJ,bI)){continue;
}
try{{};
bF=new bK;
this.setImplementation(bF);
bF.setUseBasicHttpAuth(bG.getUseBasicHttpAuth());
bF.send();
return true;
}catch(bB){this.error("Request handler throws error");
this.error(bB);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bG);
},abort:function(){var bs=this.getImplementation();

if(bs){{};
bs.abort();
}else{{};
this.setState(o);
}},timeout:function(){var bC=this.getImplementation();

if(bC){this.warn("Timeout: implementation "+bC.toHashCode());
bC.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(m);
}if(this.getRequest()){this.getRequest().setTimeout(0);
}},_onsending:function(e){this.setState(r);
},_onreceiving:function(e){this.setState(p);
},_oncompleted:function(e){this.setState(q);
},_onabort:function(e){this.setState(o);
},_onfailed:function(e){this.setState(n);
},_ontimeout:function(e){this.setState(m);
},_applyImplementation:function(bv,bw){if(bw){bw.removeListener(r,this._onsending,this);
bw.removeListener(p,this._onreceiving,this);
bw.removeListener(q,this._oncompleted,this);
bw.removeListener(o,this._onabort,this);
bw.removeListener(m,this._ontimeout,this);
bw.removeListener(n,this._onfailed,this);
}
if(bv){var bx=this.getRequest();
bv.setUrl(bx.getUrl());
bv.setMethod(bx.getMethod());
bv.setAsynchronous(bx.getAsynchronous());
bv.setUsername(bx.getUsername());
bv.setPassword(bx.getPassword());
bv.setParameters(bx.getParameters());
bv.setFormFields(bx.getFormFields());
bv.setRequestHeaders(bx.getRequestHeaders());
bv.setData(bx.getData());
bv.setResponseType(bx.getResponseType());
bv.addListener(r,this._onsending,this);
bv.addListener(p,this._onreceiving,this);
bv.addListener(q,this._oncompleted,this);
bv.addListener(o,this._onabort,this);
bv.addListener(m,this._ontimeout,this);
bv.addListener(n,this._onfailed,this);
}},_applyState:function(b,c){{};

switch(b){case r:this.fireEvent(r);
break;
case p:this.fireEvent(p);
break;
case q:case o:case m:case n:var e=this.getImplementation();

if(!e){break;
}
if(this.hasListener(b)){var f=qx.event.Registration.createEvent(b,qx.io.remote.Response);

if(b==q){var d=e.getResponseContent();
f.setContent(d);
if(d===null){{};
b=n;
}}f.setStatusCode(e.getStatusCode());
f.setResponseHeaders(e.getResponseHeaders());
this.dispatchEvent(f);
}this.setImplementation(null);
e.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var bL=this.getImplementation();

if(bL){this.setImplementation(null);
bL.dispose();
}this.setRequest(null);
}});
})();
(function(){var r="qx.event.type.Event",q="String",p="failed",o="timeout",n="created",m="aborted",l="sending",k="configured",j="receiving",i="completed",e="Object",h="Boolean",g="abstract",d="_applyState",c="changeState",f="qx.io.remote.transport.Abstract";
qx.Class.define(f,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},events:{"created":r,"configured":r,"sending":r,"receiving":r,"completed":r,"aborted":r,"failed":r,"timeout":r},properties:{url:{check:q,nullable:true},method:{check:q,nullable:true},asynchronous:{check:h,nullable:true},data:{check:q,nullable:true},username:{check:q,nullable:true},password:{check:q,nullable:true},state:{check:[n,k,l,j,i,m,o,p],init:n,event:c,apply:d},requestHeaders:{check:e,nullable:true},parameters:{check:e,nullable:true},formFields:{check:e,nullable:true},responseType:{check:q,nullable:true},useBasicHttpAuth:{check:h,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){{};
this.setState(m);
},timeout:function(){{};
this.setState(o);
},failed:function(){{};
this.setState(p);
},setRequestHeader:function(a,b){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(u){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(s,t){{};

switch(s){case n:this.fireEvent(n);
break;
case k:this.fireEvent(k);
break;
case l:this.fireEvent(l);
break;
case j:this.fireEvent(j);
break;
case i:this.fireEvent(i);
break;
case m:this.fireEvent(m);
break;
case p:this.fireEvent(p);
break;
case o:this.fireEvent(o);
break;
}return true;
}}});
})();
(function(){var D="&",C="=",B="?",A="application/json",z="completed",y="text/plain",x="text/javascript",w="qx.io.remote.transport.Script",v="",u="_ScriptTransport_data",o="_responseContent",t="script",r="timeout",n="_ScriptTransport_",m="_ScriptTransport_id",q="__ll",p="aborted",s="utf-8",l="failed";
qx.Class.define(w,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var I=++qx.io.remote.transport.Script.__lk;

if(I>=2000000000){qx.io.remote.transport.Script.__lk=I=1;
}this.__ll=null;
this.__lk=I;
},statics:{__lk:0,_instanceRegistry:{},ScriptTransport_PREFIX:n,ScriptTransport_ID_PARAM:m,ScriptTransport_DATA_PARAM:u,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[y,x,A]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:function(J,content){var K=qx.io.remote.transport.Script._instanceRegistry[J];

if(K==null){{};
}else{K._responseContent=content;
K._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}}},members:{__lm:0,__ll:null,__lk:null,send:function(){var g=this.getUrl();
g+=(g.indexOf(B)>=0?D:B)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+C+this.__lk;
var k=this.getParameters();
var j=[];

for(var f in k){if(f.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var h=k[f];

if(h instanceof Array){for(var i=0;i<h.length;i++){j.push(encodeURIComponent(f)+C+encodeURIComponent(h[i]));
}}else{j.push(encodeURIComponent(f)+C+encodeURIComponent(h));
}}
if(j.length>0){g+=D+j.join(D);
}var e=this.getData();

if(e!=null){g+=D+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+C+encodeURIComponent(e);
}qx.io.remote.transport.Script._instanceRegistry[this.__lk]=this;
this.__ll=document.createElement(t);
this.__ll.charset=s;
this.__ll.src=g;
{};
document.body.appendChild(this.__ll);
},_switchReadyState:function(a){switch(this.getState()){case z:case p:case l:case r:this.warn("Ignore Ready State Change");
return;
}while(this.__lm<a){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lm]);
}},setRequestHeader:function(b,c){},getResponseHeader:function(d){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return v;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==z){{};
return null;
}{};

switch(this.getResponseType()){case y:case A:case x:{};
var H=this._responseContent;
return (H===0?0:(H||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(E,F,G){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,w);
qx.io.remote.ScriptTransport=E;
},destruct:function(){if(this.__ll){delete qx.io.remote.transport.Script._instanceRegistry[this.__lk];
document.body.removeChild(this.__ll);
}this._disposeFields(q,o);
}});
})();
(function(){var r="icon",q="label",p="arrow",o="shortcut",n="submenu",m="String",l="qx.ui.menu.Menu",k="qx.ui.menu.AbstractButton",j="keypress",i="_applyIcon",f="mouseup",h="abstract",g="_applyLabel",e="_applyMenu";
qx.Class.define(k,{extend:qx.ui.core.Widget,type:h,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(f,this._onMouseUp);
this.addListener(j,this._onKeyPress);
},properties:{label:{check:m,apply:g,nullable:true},menu:{check:l,apply:e,nullable:true},icon:{check:m,apply:i,themeable:true,nullable:true}},members:{_createChildControlImpl:function(c){var d;

switch(c){case r:d=new qx.ui.basic.Image;
d.setAnonymous(true);
this._add(d,{column:0});
break;
case q:d=new qx.ui.basic.Label;
d.setAnonymous(true);
this._add(d,{column:1});
break;
case o:d=new qx.ui.basic.Label;
d.setAnonymous(true);
this._add(d,{column:2});
break;
case p:d=new qx.ui.basic.Image;
d.setAnonymous(true);
this._add(d,{column:3});
break;
}return d||arguments.callee.base.call(this,c);
},_forwardStates:{selected:1},getChildrenSizes:function(){var s=0,t=0,u=0,y=0;

if(this._isChildControlVisible(r)){var z=this.getChildControl(r);
s=z.getMarginLeft()+z.getSizeHint().width+z.getMarginRight();
}
if(this._isChildControlVisible(q)){var w=this.getChildControl(q);
t=w.getMarginLeft()+w.getSizeHint().width+w.getMarginRight();
}
if(this._isChildControlVisible(o)){var v=this.getChildControl(o);
u=v.getMarginLeft()+v.getSizeHint().width+v.getMarginRight();
}
if(this._isChildControlVisible(p)){var x=this.getChildControl(p);
y=x.getMarginLeft()+x.getSizeHint().width+x.getMarginRight();
}return [s,t,u,y];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_applyIcon:function(C,D){if(C){this._showChildControl(r).setSource(C);
}else{this._excludeChildControl(r);
}},_applyLabel:function(a,b){if(a){this._showChildControl(q).setContent(a);
}else{this._excludeChildControl(q);
}},_applyMenu:function(A,B){if(B){B.resetOpener();
B.removeState(n);
}
if(A){this._showChildControl(p);
A.setOpener(this);
A.addState(n);
}else{this._excludeChildControl(p);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var p="container",o="handle",n="both",m="Integer",k="middle",j="qx.ui.toolbar.Part",h="icon",g="label",f="changeShow",e="_applySpacing",d="toolbar/part";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(o);
},properties:{appearance:{refine:true,init:d},show:{init:n,check:[n,g,h],inheritable:true,event:f},spacing:{nullable:true,check:m,themeable:true,apply:e}},members:{_createChildControlImpl:function(t){var u;

switch(t){case o:u=new qx.ui.basic.Image();
u.setAlignY(k);
this._add(u);
break;
case p:u=new qx.ui.toolbar.PartContainer;
this._add(u);
break;
}return u||arguments.callee.base.call(this,t);
},getChildrenContainer:function(){return this.getChildControl(p);
},_applySpacing:function(q,r){var s=this.getChildControl(p).getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var b=this.getChildren();
var a=[];
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(c instanceof qx.ui.menubar.Button){a.push(c);
}}return a;
}}});
})();
(function(){var r="mshtml",q="pop.push.reverse.shift.sort.splice.unshift.join.slice",p="number",o="qx.type.BaseArray",n="qx.client",m=".";
qx.Class.define(o,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function H(a){if(qx.core.Variant.isSet(n,r)){G.prototype={length:0,$$isArray:true};
var d=q.split(m);

for(var length=d.length;length;){G.prototype[d[--length]]=Array.prototype[d[length]];
}}var e=Array.prototype.slice;
G.prototype.concat=function(){var k=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var j;

if(arguments[i] instanceof G){j=e.call(arguments[i],0);
}else if(arguments[i] instanceof Array){j=arguments[i];
}else{j=[arguments[i]];
}k.push.apply(k,j);
}return k;
};
G.prototype.toString=function(){return e.call(this,0).toString();
};
G.prototype.toLocaleString=function(){return e.call(this,0).toLocaleString();
};
G.prototype.constructor=G;
var b=Array.prototype.filter;
var c=Array.prototype.map;
if(!Array.prototype.indexOf){G.prototype.indexOf=function(w,x){if(x==null){x=0;
}else if(x<0){x=Math.max(0,this.length+x);
}
for(var i=x;i<this.length;i++){if(this[i]===w){return i;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){G.prototype.lastIndexOf=function(g,h){if(h==null){h=this.length-1;
}else if(h<0){h=Math.max(0,this.length+h);
}
for(var i=h;i>=0;i--){if(this[i]===g){return i;
}}return -1;
};
}
if(!Array.prototype.forEach){G.prototype.forEach=function(I,J){var l=this.length;

for(var i=0;i<l;i++){I.call(J,this[i],i,this);
}};
}
if(!b){b=function(t,u){var l=this.length;
var v=[];

for(var i=0;i<l;i++){if(t.call(u,this[i],i,this)){v.push(this[i]);
}}return v;
};
}
if(!c){c=function(C,D){var l=this.length;
var E=[];

for(var i=0;i<l;i++){E.push(C.call(D,this[i],i,this));
}return E;
};
}
if(!Array.prototype.some){G.prototype.some=function(K,L){var l=this.length;

for(var i=0;i<l;i++){if(K.call(L,this[i],i,this)){return true;
}}return false;
};
}
if(!Array.prototype.every){G.prototype.every=function(z,A){var l=this.length;

for(var i=0;i<l;i++){if(!z.call(A,this[i],i,this)){return false;
}}return true;
};
}G.prototype.filter=function(){var y=new this.constructor;
y.push.apply(y,b.apply(this,arguments));
return y;
};
G.prototype.map=function(){var B=new this.constructor;
B.push.apply(B,c.apply(this,arguments));
return B;
};
G.prototype.slice=function(){var f=new this.constructor;
f.push.apply(f,Array.prototype.slice.apply(this,arguments));
return f;
};
G.prototype.splice=function(){var s=new this.constructor;
s.push.apply(s,Array.prototype.splice.apply(this,arguments));
return s;
};
G.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
G.prototype.valueOf=function(){return this.length;
};
return G;
}function G(length){if(arguments.length===1&&typeof length===p){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function F(){}F.prototype=[];
G.prototype=new F;
G.prototype.length=0;
qx.type.BaseArray=H(G);
})();
})();
(function(){var h="String",g="changeContent",f="feedreader.model.Article",e="changeDate",d="changeAuthor",c="changeLink",b="Date",a="changeTitle";
qx.Class.define(f,{extend:qx.core.Object,properties:{title:{check:h,event:a},author:{check:h,nullable:true,event:d},date:{check:b,event:e},content:{check:h,event:g},link:{check:h,event:c}}});
})();
(function(){var bG="one",bF="single",bE="selected",bD="additive",bC="multi",bB="PageUp",bA="under",bz="Left",by="lead",bx="Down",cj="Up",ci="Boolean",ch="PageDown",cg="anchor",cf="End",ce="Home",cd="Right",cc="right",cb="click",ca="above",bN="left",bO="Escape",bL="A",bM="Space",bJ="_applyMode",bK="__kd",bH="interval",bI="__kb",bP="changeSelection",bQ="qx.event.type.Data",bT="quick",bS="key",bV="__jJ",bU="abstract",bX="__jM",bW="__kc",bR="drag",bY="qx.ui.core.selection.Abstract";
qx.Class.define(bY,{type:bU,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jJ={};
},events:{"changeSelection":bQ},properties:{mode:{check:[bF,bC,bD,bG],init:bF,apply:bJ},drag:{check:ci,init:false},quick:{check:ci,init:false}},members:{__jK:0,__jL:0,__jM:null,__jN:null,__jO:null,__jP:null,__jQ:null,__jR:null,__jS:null,__jT:null,__jU:null,__jV:null,__jW:null,__jX:null,__jY:null,__ka:null,__kb:null,__jJ:null,__kc:null,__kd:null,getSelectionContext:function(){return this.__ka;
},selectAll:function(){var B=this.getMode();

if(B==bF||B==bG){throw new Error("Can not select all items in selection mode: "+B);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cW){this._setSelectedItem(cW);
var cX=this.getMode();

if(cX!==bF&&cX!==bG){this._setLeadItem(cW);
this._setAnchorItem(cW);
}this._scrollItemIntoView(cW);
this._fireChange();
},addItem:function(cm){var cn=this.getMode();

if(cn===bF||cn===bG){this._setSelectedItem(cm);
}else{if(!this._getAnchorItem()){this._setAnchorItem(cm);
}this._setLeadItem(cm);
this._addToSelection(cm);
}this._scrollItemIntoView(cm);
this._fireChange();
},removeItem:function(cF){this._removeFromSelection(cF);

if(this.getMode()===bG&&this.isSelectionEmpty()){var cG=this._getFirstSelectable();

if(cG){this.addItem(cG);
}if(cG==cF){return;
}}
if(this._getLeadItem()==cF){this._setLeadItem(null);
}
if(this._getAnchorItem()==cF){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(p,q){var r=this.getMode();

if(r==bF||r==bG){throw new Error("Can not select multiple items in selection mode: "+r);
}this._selectItemRange(p,q);
this._setAnchorItem(p);
this._setLeadItem(q);
this._scrollItemIntoView(q);
this._fireChange();
},clearSelection:function(){if(this.getMode()==bG){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(W){var X=this.getMode();

if(X==bG||X===bF){if(W.length>1){throw new Error("Could not select more than one items in mode: "+X+"!");
}
if(W.length==1){this.selectItem(W[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(W);
}},getSelectedItem:function(){var T=this.getMode();

if(T===bF||T===bG){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__jJ);
},getSortedSelection:function(){var D=this.getSelectables();
var C=qx.lang.Object.getValues(this.__jJ);
C.sort(function(a,b){return D.indexOf(a)-D.indexOf(b);
});
return C;
},isItemSelected:function(bs){var bt=this._selectableToHashCode(bs);
return this.__jJ[bt]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__jJ);
},_setLeadItem:function(ck){var cl=this.__kb;

if(cl!==null){this._styleSelectable(cl,by,false);
}
if(ck!==null){this._styleSelectable(ck,by,true);
}this.__kb=ck;
},_getLeadItem:function(){return this.__kb!==null?this.__kb:null;
},_setAnchorItem:function(U){var V=this.__kc;

if(V){this._styleSelectable(V,cg,false);
}
if(U){this._styleSelectable(U,cg,true);
}this.__kc=U;
},_getAnchorItem:function(){return this.__kc!==null?this.__kc:null;
},_isSelectable:function(br){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var cE=event.getTarget();
return this._isSelectable(cE)?cE:null;
},_selectableToHashCode:function(g){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cO,cP,cQ){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(m){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cR){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(d,f){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(be){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bv,bw){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(cU,cV){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(cY,da){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bo,bp){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bo===bG){var bq=this._getFirstSelectable();

if(bq){this._setSelectedItem(bq);
this._scrollItemIntoView(bq);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var x=this.getMode();

if(x!==bG&&x!==bF){return;
}var w=this._getSelectableFromMouseEvent(event);

if(w===null){return;
}this._setSelectedItem(w);
this._fireChange(bT);
},handleMouseDown:function(event){var ba=this._getSelectableFromMouseEvent(event);

if(ba===null){return;
}var bc=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var Y=event.isShiftPressed();
if(this.isItemSelected(ba)&&!Y&&!bc&&!this.getDrag()){this.__kd=ba;
return;
}else{this.__kd=null;
}this._scrollItemIntoView(ba);
switch(this.getMode()){case bF:case bG:this._setSelectedItem(ba);
break;
case bD:this._setLeadItem(ba);
this._setAnchorItem(ba);
this._toggleInSelection(ba);
break;
case bC:this._setLeadItem(ba);
if(Y){var bb=this._getAnchorItem();

if(bb===null){bb=this._getFirstSelectable();
this._setAnchorItem(bb);
}this._selectItemRange(bb,ba,bc);
}else if(bc){this._setAnchorItem(ba);
this._toggleInSelection(ba);
}else{this._setAnchorItem(ba);
this._setSelectedItem(ba);
}break;
}var bd=this.getMode();

if(this.getDrag()&&bd!==bF&&bd!==bG&&!Y&&!bc){this.__jQ=this._getLocation();
this.__jN=this._getScroll();
this.__jR=event.getDocumentLeft()+this.__jN.left;
this.__jS=event.getDocumentTop()+this.__jN.top;
this.__jT=true;
this._capture();
}this._fireChange(cb);
},handleMouseUp:function(event){var v=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var s=event.isShiftPressed();

if(!v&&!s&&this.__kd){var t=this._getSelectableFromMouseEvent(event);

if(t===null||!this.isItemSelected(t)){return;
}var u=this.getMode();

if(u===bD){this._removeFromSelection(t);
}else{this._setSelectedItem(t);

if(this.getMode()===bC){this._setLeadItem(t);
this._setAnchorItem(t);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__jT){return;
}this.__jU=event.getDocumentLeft();
this.__jV=event.getDocumentTop();
var bg=this.__jU+this.__jN.left;

if(bg>this.__jR){this.__jW=1;
}else if(bg<this.__jR){this.__jW=-1;
}else{this.__jW=0;
}var bf=this.__jV+this.__jN.top;

if(bf>this.__jS){this.__jX=1;
}else if(bf<this.__jS){this.__jX=-1;
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
this.__jM.addListener(bH,this._onInterval,this);
}this.__jM.start();
this._autoSelect();
},handleAddItem:function(e){var c=e.getData();

if(this.getMode()===bG&&this.isSelectionEmpty()){this.addItem(c);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__jT){return;
}if(this.__jY){this._fireChange(cb);
}delete this.__jT;
delete this.__jO;
delete this.__jP;
this._releaseCapture();
if(this.__jM){this.__jM.stop();
}},_onInterval:function(e){this._scrollBy(this.__jK,this.__jL);
this.__jN=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cw=this._getDimension();
var cp=Math.max(0,Math.min(this.__jU-this.__jQ.left,cw.width))+this.__jN.left;
var co=Math.max(0,Math.min(this.__jV-this.__jQ.top,cw.height))+this.__jN.top;
if(this.__jO===cp&&this.__jP===co){return;
}this.__jO=cp;
this.__jP=co;
var cy=this._getAnchorItem();
var cr=cy;
var cu=this.__jW;
var cx,cq;

while(cu!==0){cx=cu>0?this._getRelatedSelectable(cr,cc):this._getRelatedSelectable(cr,bN);
if(cx!==null){cq=this._getSelectableLocationX(cx);
if((cu>0&&cq.left<=cp)||(cu<0&&cq.right>=cp)){cr=cx;
continue;
}}break;
}var cv=this.__jX;
var ct,cs;

while(cv!==0){ct=cv>0?this._getRelatedSelectable(cr,bA):this._getRelatedSelectable(cr,ca);
if(ct!==null){cs=this._getSelectableLocationY(ct);
if((cv>0&&cs.top<=co)||(cv<0&&cs.bottom>=co)){cr=ct;
continue;
}}break;
}var cz=this.getMode();

if(cz===bC){this._selectItemRange(cy,cr);
}else if(cz===bD){if(this.isItemSelected(cy)){this._selectItemRange(cy,cr,true);
}else{this._deselectItemRange(cy,cr);
}this._setAnchorItem(cr);
}this._fireChange(bR);
},__ke:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var M,L;
var O=event.getKeyIdentifier();
var N=this.getMode();
var I=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var J=event.isShiftPressed();
var K=false;

if(O===bL&&I){if(N!==bF&&N!==bG){this._selectAllItems();
K=true;
}}else if(O===bO){if(N!==bF&&N!==bG){this._clearSelection();
K=true;
}}else if(O===bM){var H=this._getLeadItem();

if(H&&!J){if(I||N===bD){this._toggleInSelection(H);
}else{this._setSelectedItem(H);
}K=true;
}}else if(this.__ke[O]){K=true;

if(N===bF||N==bG){M=this._getSelectedItem();
}else{M=this._getLeadItem();
}var Q=this._getFirstSelectable();
var G=this._getLastSelectable();

if(M!==null){switch(O){case ce:L=Q;
break;
case cf:L=G;
break;
case cj:L=this._getRelatedSelectable(M,ca);
break;
case bx:L=this._getRelatedSelectable(M,bA);
break;
case bz:L=this._getRelatedSelectable(M,bN);
break;
case cd:L=this._getRelatedSelectable(M,cc);
break;
case bB:L=this._getPage(M,true);
break;
case ch:L=this._getPage(M,false);
break;
}}else{switch(O){case ce:case bx:case cd:case ch:L=Q;
break;
case cf:case cj:case bz:case bB:L=G;
break;
}}if(L!==null){switch(N){case bF:case bG:this._setSelectedItem(L);
break;
case bD:this._setLeadItem(L);
break;
case bC:if(J){var P=this._getAnchorItem();

if(P===null){this._setAnchorItem(P=this._getFirstSelectable());
}this._setLeadItem(L);
this._selectItemRange(P,L,I);
}else{this._setAnchorItem(L);
this._setLeadItem(L);

if(!I){this._setSelectedItem(L);
}}break;
}this._scrollItemIntoView(L);
}}
if(K){event.stop();
this._fireChange(bS);
}},_selectAllItems:function(){var cB=this.getSelectables();

for(var i=0,l=cB.length;i<l;i++){this._addToSelection(cB[i]);
}},_clearSelection:function(){var cS=this.__jJ;

for(var cT in cS){this._removeFromSelection(cS[cT]);
}this.__jJ={};
},_selectItemRange:function(bh,bi,bj){var bm=this._getSelectableRange(bh,bi);
if(!bj){var bl=this.__jJ;
var bn=this.__kf(bm);

for(var bk in bl){if(!bn[bk]){this._removeFromSelection(bl[bk]);
}}}for(var i=0,l=bm.length;i<l;i++){this._addToSelection(bm[i]);
}},_deselectItemRange:function(h,j){var k=this._getSelectableRange(h,j);

for(var i=0,l=k.length;i<l;i++){this._removeFromSelection(k[i]);
}},__kf:function(y){var A={};
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];
A[this._selectableToHashCode(z)]=z;
}return A;
},_getSelectedItem:function(){for(var bu in this.__jJ){return this.__jJ[bu];
}return null;
},_setSelectedItem:function(R){if(this._isSelectable(R)){var S=this.__jJ;

if(!S[R.$$hash]||qx.lang.Object.hasMinLength(S,2)){this._clearSelection();
this._addToSelection(R);
}}},_addToSelection:function(E){var F=this._selectableToHashCode(E);

if(!this.__jJ[F]&&this._isSelectable(E)){this.__jJ[F]=E;
this._styleSelectable(E,bE,true);
this.__jY=true;
}},_toggleInSelection:function(cC){var cD=this._selectableToHashCode(cC);

if(!this.__jJ[cD]){this.__jJ[cD]=cC;
this._styleSelectable(cC,bE,true);
}else{delete this.__jJ[cD];
this._styleSelectable(cC,bE,false);
}this.__jY=true;
},_removeFromSelection:function(n){var o=this._selectableToHashCode(n);

if(this.__jJ[o]!==null){delete this.__jJ[o];
this._styleSelectable(n,bE,false);
this.__jY=true;
}},_replaceMultiSelection:function(cH){var cK=false;
var cN,cM;
var cI={};

for(var i=0,l=cH.length;i<l;i++){cN=cH[i];

if(this._isSelectable(cN)){cM=this._selectableToHashCode(cN);
cI[cM]=cN;
}}var cJ=cN;
var cL=this.__jJ;

for(var cM in cL){if(cI[cM]){delete cI[cM];
}else{cN=cL[cM];
delete cL[cM];
this._styleSelectable(cN,bE,false);
cK=true;
}}for(var cM in cI){cN=cL[cM]=cI[cM];
this._styleSelectable(cN,bE,true);
cK=true;
}if(!cK){return false;
}this._scrollItemIntoView(cJ);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__jY=true;
this._fireChange();
},_fireChange:function(cA){if(this.__jY){this.__ka=cA||null;
this.fireDataEvent(bP,this.getSelection());
delete this.__jY;
}}},destruct:function(){this._disposeObjects(bX);
this._disposeFields(bV,bK,bW,bI);
}});
})();
(function(){var F="__kg",E="vertical",D="under",C="above",B="qx.ui.core.selection.Widget",A="left",z="right";
qx.Class.define(B,{extend:qx.ui.core.selection.Abstract,construct:function(M){arguments.callee.base.call(this);
this.__kg=M;
},members:{__kg:null,_isSelectable:function(e){return e.isEnabled()&&e.getLayoutParent()===this.__kg;
},_selectableToHashCode:function(H){return H.$$hash;
},_styleSelectable:function(a,b,c){c?a.addState(b):a.removeState(b);
},_capture:function(){this.__kg.capture();
},_releaseCapture:function(){this.__kg.releaseCapture();
},_getWidget:function(){return this.__kg;
},_getLocation:function(){var G=this.__kg.getContentElement().getDomElement();
return G?qx.bom.element.Location.get(G):null;
},_getDimension:function(){return this.__kg.getInnerSize();
},_getSelectableLocationX:function(x){var y=x.getBounds();

if(y){return {left:y.left,right:y.left+y.width};
}},_getSelectableLocationY:function(K){var L=K.getBounds();

if(L){return {top:L.top,bottom:L.top+L.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(v,w){},_scrollItemIntoView:function(o){this.__kg.scrollChildIntoView(o);
},getSelectables:function(){var O=this.__kg.getChildren();
var P=[];
var N;

for(var i=0,l=O.length;i<l;i++){N=O[i];

if(N.isEnabled()){P.push(N);
}}return P;
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
},_getFirstSelectable:function(){var f=this.__kg.getChildren();

for(var i=0,l=f.length;i<l;i++){if(f[i].isEnabled()){return f[i];
}}return null;
},_getLastSelectable:function(){var d=this.__kg.getChildren();

for(var i=d.length-1;i>0;i--){if(d[i].isEnabled()){return d[i];
}}return null;
},_getRelatedSelectable:function(g,h){var m=this.__kg.getOrientation()===E;
var k=this.__kg.getChildren();
var j=k.indexOf(g);
var n;

if((m&&h===C)||(!m&&h===A)){for(var i=j-1;i>=0;i--){n=k[i];

if(n.isEnabled()){return n;
}}}else if((m&&h===D)||(!m&&h===z)){for(var i=j+1;i<k.length;i++){n=k[i];

if(n.isEnabled()){return n;
}}}return null;
},_getPage:function(I,J){if(J){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this._disposeFields(F);
}});
})();
(function(){var q="qx.ui.core.selection.ScrollArea";
qx.Class.define(q,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return (s.isEnabled()&&s.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var r=this._getWidget();
return {left:r.getScrollX(),top:r.getScrollY()};
},_scrollBy:function(a,b){var c=this._getWidget();
c.scrollByX(a);
c.scrollByY(b);
},_getPage:function(d,e){var j=this.getSelectables();
var length=j.length;
var m=j.indexOf(d);
if(m===-1){throw new Error("Invalid lead item: "+d);
}var f=this._getWidget();
var o=f.getScrollY();
var innerHeight=f.getInnerSize().height;
var top,h,n;

if(e){var l=o;
var i=m;
while(1){for(;i>=0;i--){top=f.getItemTop(j[i]);
if(top<l){n=i+1;
break;
}}if(n==null){var p=this._getFirstSelectable();
return p==d?null:p;
}if(n>=m){l-=innerHeight+o-f.getItemBottom(d);
n=null;
continue;
}return j[n];
}}else{var k=innerHeight+o;
var i=m;
while(1){for(;i<length;i++){h=f.getItemBottom(j[i]);
if(h>k){n=i-1;
break;
}}if(n==null){var g=this._getLastSelectable();
return g==d?null:g;
}if(n<=m){k+=f.getItemTop(d)-o;
n=null;
continue;
}return j[n];
}}}}});
})();
(function(){var h="complete",g="initialized",f="loading",e="webkit",d="load",c="qx.event.type.Event",b="qx.client",a="qx.io2.part.Package";
qx.Class.define(a,{extend:qx.core.Object,construct:function(m,n){arguments.callee.base.call(this);
this.__yo=n?h:g;
this.__yp=m;
},events:{"load":c},members:{__yq:function(i,j,self){if(i.length==0){j.call(self);
return;
}this.__yo=f;
var l=0;
var k=function(o){if(l>=i.length){this.__yo=h;
j.call(self);
return;
}var q=new qx.io2.ScriptLoader();
var p=o[0];
q.load(o.shift(),function(){l+=1;
q.dispose();

if(qx.core.Variant.isSet(b,e)){qx.event.Timer.once(function(){k.call(this,o,j,self);
},this,0);
}else{k.call(this,o,j,self);
}},this);
};
k(qx.lang.Array.clone(i));
},getReadyState:function(){return this.__yo;
},load:function(){if(this.__yo!==g){return;
}this.__yo==f;
this.__yq(this.__yp,function(){this.__yo=h;
this.fireEvent(d);
},this);
}}});
})();
(function(){var g="center",f="knob",e="middle",d="qx.ui.splitpane.Splitter",c="vertical";
qx.Class.define(d,{extend:qx.ui.core.Widget,construct:function(h){arguments.callee.base.call(this);
if(h.getOrientation()==c){this._setLayout(new qx.ui.layout.HBox(0,g));
this._getLayout().setAlignY(e);
}else{this._setLayout(new qx.ui.layout.VBox(0,e));
this._getLayout().setAlignX(g);
}this._createChildControl(f);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(a){var b;

switch(a){case f:b=new qx.ui.basic.Image;
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
}}});
})();
(function(){var v="Integer",u="qx.ui.core.Widget",t="visible",s="selected",r="qx.ui.menu.Menu",q="_applyOpenInterval",p="_applyOpenedButton",o="_applyArrowColumnWidth",n="_applyIconColumnWidth",m="mouseover",h="mouseout",l="excluded",k="_applySpacingX",g="_applyCloseInterval",f="_applySelectedButton",j="menu",i="_applySpacingY";
qx.Class.define(r,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
this.getApplicationRoot().add(this);
this.addListener(m,this._onMouseOver);
this.addListener(h,this._onMouseOut);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:j},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:l},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:v,apply:k,init:0,themeable:true},spacingY:{check:v,apply:i,init:0,themeable:true},iconColumnWidth:{check:v,init:0,themeable:true,apply:n},arrowColumnWidth:{check:v,init:0,themeable:true,apply:o},selectedButton:{check:u,nullable:true,apply:f},openedButton:{check:u,nullable:true,apply:p},opener:{check:u,nullable:true},openInterval:{check:v,themeable:true,init:250,apply:q},closeInterval:{check:v,themeable:true,init:250,apply:g}},members:{__jo:null,open:function(){this.placeToWidget(this.getOpener());
this.show();
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getLayout().getColumnSizes();
},_applyIconColumnWidth:function(E,F){this._getLayout().setIconColumnWidth(E);
},_applyArrowColumnWidth:function(c,d){this._getLayout().setArrowColumnWidth(c);
},_applySpacingX:function(C,D){this._getLayout().setColumnSpacing(C);
},_applySpacingY:function(a,b){this._getLayout().setSpacing(a);
},_applyVisibility:function(K,L){arguments.callee.base.call(this,K,L);
var M=qx.ui.menu.Manager.getInstance();

if(K===t){M.add(this);
var opener=this.getOpener();
var N=opener.getLayoutParent();

if(N&&N instanceof qx.ui.menu.Menu){N.setOpenedButton(opener);
}}else if(L===t){M.remove(this);
var opener=this.getOpener();
var N=opener.getLayoutParent();

if(N&&N instanceof qx.ui.menu.Menu&&N.getOpenedButton()==opener){N.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}},_applySelectedButton:function(I,J){if(J){J.removeState(s);
}
if(I){I.addState(s);
}},_applyOpenedButton:function(G,H){if(H){H.getMenu().exclude();
}
if(G){G.getMenu().open();
}},_onMouseOver:function(e){var x=qx.ui.menu.Manager.getInstance();
x.cancelClose(this);
var y=e.getTarget();

if(y.isEnabled()&&y instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(y);
var w=y.getMenu&&y.getMenu();

if(w){x.scheduleOpen(w);
this.__jo=w;
}else{var z=this.getOpenedButton();

if(z){x.scheduleClose(z.getMenu());
}
if(this.__jo){x.cancelOpen(this.__jo);
this.__jo=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var A=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var B=this.getOpenedButton();
B?this.setSelectedButton(B):this.resetSelectedButton();
if(B){A.cancelClose(B.getMenu());
}if(this.__jo){A.cancelOpen(this.__jo);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}}});
})();
(function(){var k="qx.event.handler.Iframe",j="load",i="iframe";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:function(m){qx.event.Registration.fireEvent(m,j);
}},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===i;
},registerEvent:function(a,b,c){},unregisterEvent:function(d,e,f){}},defer:function(l){qx.event.Registration.addHandler(l);
}});
})();
(function(){var l="0",k="qx.client",j="qx.bom.Iframe",i="qx.event.handler.Iframe.onevent(this)",h="true",g="iframe",f="body";
qx.Class.define(j,{statics:{create:function(q,r){var q=q?qx.lang.Object.clone(q):{};
q.onload=i;
q.frameBorder=l;
q.frameSpacing=l;
q.marginWidth=l;
q.marginHeight=l;
q.hspace=l;
q.vspace=l;
q.border=l;
q.allowTransparency=h;
return qx.bom.Element.create(g,q,r);
},getWindow:qx.core.Variant.select(k,{"mshtml|gecko":function(p){try{return p.contentWindow;
}catch(e){return null;
}},"default":function(m){try{var n=this.getDocument(m);
return n?n.defaultView:null;
}catch(B){return null;
}}}),getDocument:qx.core.Variant.select(k,{"mshtml":function(t){try{var u=this.getWindow(t);
return u?u.document:null;
}catch(c){return null;
}},"default":function(x){try{return x.contentDocument;
}catch(y){return null;
}}}),getBody:function(v){var w=this.getDocument(v);
return w?w.getElementsByTagName(f)[0]:null;
},setSource:function(z,A){try{if(this.getWindow(z)){try{this.getWindow(z).location.replace(A);
}catch(o){z.src=A;
}}else{z.src=A;
}}catch(d){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(a){var b=this.getDocument(a);

try{if(b&&b.location){return b.location.href;
}}catch(s){}return null;
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
(function(){var n="error",m="http://resources.qooxdoo.org/proxy.php?mode=jsonp&proxy=",l="feedreader.io.FeedLoader",k="loading",j="completed",h="text/plain",g="GET",f="loaded",e="singleton";
qx.Class.define(l,{extend:qx.core.Object,type:e,members:{loadAll:function(b){var d=b.getFeeds().getItem(0).getFeeds();

for(var i=0;i<d.length;i++){this.load(d.getItem(i));
}var c=b.getFeeds().getItem(1).getFeeds();

for(i=0;i<c.length;i++){this.load(c.getItem(i));
}},load:function(o){o.setState(k);
var q,p;
q=m+encodeURIComponent(o.getUrl());
p=new qx.io.remote.Request(q,g,h);
p.setCrossDomain(true);
p.setTimeout(30000);
p.addListener(j,this.__yr(o),this);
p.send();
},__yr:function(u){return function(r){var t=r.getContent();
if(t==null){this.warn("Empty feed content: "+u.getUrl());
u.setState(n);
}else{try{u.getArticles().splice(0,u.getArticles().length);
var s=feedreader.io.FeedParser.parseFeed(t);

for(var i=0;i<s.length;i++){u.getArticles().push(s[i]);
}u.setState(f);
}catch(a){u.setState(n);
this.warn("Could not parse feed: "+u.getUrl());
}}};
}}});
})();
(function(){var E="active",D="splitter",C="slider",B="horizontal",A="vertical",z="mousedown",y="mouseout",x="qx.client",w="height",v="row-resize",S="mousemove",R="move",Q="maxHeight",P="width",O="_applyOrientation",N="splitpane",M="qx.ui.splitpane.Pane",L="minHeight",K="knob",J="mouseup",H="minWidth",I="losecapture",F="col-resize",G="maxWidth";
qx.Class.define(M,{extend:qx.ui.core.Widget,construct:function(u){arguments.callee.base.call(this);
if(u){this.setOrientation(u);
}else{this.initOrientation();
}this.addListener(z,this._onMouseDown);
this.addListener(J,this._onMouseUp);
this.addListener(S,this._onMouseMove);
this.addListener(y,this._onMouseOut);
this.addListener(I,this._onMouseUp);
},properties:{appearance:{refine:true,init:N},orientation:{init:B,check:[B,A],apply:O}},members:{__ig:null,__ih:null,__ii:null,__ij:null,__ik:null,__il:null,__im:null,_createChildControlImpl:function(bc){var bd;

switch(bc){case C:bd=new qx.ui.splitpane.Slider(this);
bd.exclude();
this._add(bd,{type:bc});
break;
case D:bd=new qx.ui.splitpane.Splitter(this);
this._add(bd,{type:bc});
bd.addListener(R,this._onSplitterMove,this);
break;
}return bd||arguments.callee.base.call(this,bc);
},_applyOrientation:function(bf,bg){var bh=this.getChildControl(C);
var bk=this.getChildControl(D);
this.__ik=bf===B;
var bj=this._getLayout();

if(bj){bj.dispose();
}var bi=bf===A?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(bi);
bk.replaceState(bg,bf);
bk.getChildControl(K).replaceState(bg,bf);
bh.replaceState(bg,bf);
},add:function(l,m){if(m==null){this._add(l);
}else{this._add(l,{flex:m});
}},remove:function(be){this._remove(be);
},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}var W=this.getChildControl(D);

if(!W.hasState(E)){return;
}var Y=W.getContainerLocation();
var X=this.getContentLocation();
this.__ig=this.__ik?e.getDocumentLeft()-Y.left+X.left:e.getDocumentTop()-Y.top+X.top;
var bb=this.getChildControl(C);
var ba=W.getBounds();
bb.setUserBounds(ba.left,ba.top,ba.width,ba.height);
bb.setZIndex(W.getZIndex()+1);
bb.show();
this.__ih=true;
this.capture();
},_onMouseMove:function(e){this.__ii=e.getDocumentLeft();
this.__ij=e.getDocumentTop();
if(this.__ih){this.__iq();
var U=this.getChildControl(C);
var V=this.__il;

if(this.__ik){U.setDomLeft(V);
}else{U.setDomTop(V);
}}else{this.__ip();
}},_onMouseOut:function(e){this.__ii=-1;
this.__ij=-1;
this.__ip();
},_onMouseUp:function(e){if(!this.__ih){return;
}this.__in();
var T=this.getChildControl(C);
T.exclude();
delete this.__ih;
this.releaseCapture();
this.__ip();
},_onSplitterMove:function(){this.__ip();
},__in:function(){var q=this.__il;
var n=this.__im;

if(q==null){return;
}var s=this._getChildren();
var r=s[2];
var o=s[3];
var p=r.getLayoutProperties().flex;
var t=o.getLayoutProperties().flex;
if((p!=0)&&(t!=0)){r.setLayoutProperties({flex:q});
o.setLayoutProperties({flex:n});
}else{if(this.__ik){r.setWidth(q);
o.setWidth(n);
}else{r.setHeight(q);
o.setHeight(n);
}}},__io:function(){var a=this.getChildControl(D);
var c=a.getBounds();
var f=a.getContainerLocation();
var b=6;
if(!f){return;
}var g=this.__ii;
var h=c.width;
var d=f.left;

if(h<b){d-=Math.floor((b-h)/2);
h=b;
}
if(g<d||g>(d+h)){return false;
}var g=this.__ij;
var h=c.height;
var d=f.top;

if(h<b){d-=Math.floor((b-h)/2);
h=b;
}
if(g<d||g>(d+h)){return false;
}return true;
},__ip:qx.core.Variant.select(x,{"opera":function(){var bl=this.getChildControl(D);

if(this.__ih||this.__io()){bl.addState(E);
}else if(bl.hasState(E)){bl.removeState(E);
}},"default":function(){var j=this.getChildControl(D);
var k=this.getApplicationRoot();
if(this.__ih||this.__io()){var i=this.__ik?F:v;
this.setCursor(i);
k.setGlobalCursor(i);
j.addState(E);
}else if(j.hasState(E)){this.resetCursor();
k.resetGlobalCursor();
j.removeState(E);
}}}),__iq:function(){if(this.__ik){var bo=H,bv=P,bp=G,bt=this.__ii;
}else{var bo=L,bv=w,bp=Q,bt=this.__ij;
}var bu=this._getChildren();
var bm=bu[2].getSizeHint();
var br=bu[3].getSizeHint();
var bs=bu[2].getBounds()[bv]+bu[3].getBounds()[bv];
var bq=bt-this.__ig;
var bn=bs-bq;
if(bq<bm[bo]){bn-=bm[bo]-bq;
bq=bm[bo];
}else if(bn<br[bo]){bq-=br[bo]-bn;
bn=br[bo];
}if(bq>bm[bp]){bn+=bq-bm[bp];
bq=bm[bp];
}else if(bn>br[bp]){bq+=bn-br[bp];
bn=br[bp];
}this.__il=bq;
this.__im=bn;
}}});
})();
(function(){var f="complete",e="load",d="loading",c="initialized",b="qx.io2.part.Part",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.core.Object,construct:function(name,m){arguments.callee.base.call(this);
this.__ys=name;
this.__yt=f;
this.__yu=m;

for(var i=0;i<m.length;i++){if(m[i].getReadyState()!==f){this.__yt=c;
break;
}}},events:{"load":a},members:{getReadyState:function(){return this.__yt;
},getName:function(){return this.__ys;
},load:function(g,self){if(this.__yt==f){if(g){g.call(self);
}return;
}else if(this.__yt==d){if(g){this.addListenerOnce(e,g,self);
}return;
}
if(g){this.addListenerOnce(e,g,self);
}this.__yt==d;
var j=0;
var l=0;
var h=function(){this.load();
};

for(var i=0;i<this.__yu.length;i++){var k=this.__yu[i];

switch(k.getReadyState()){case c:k.addListenerOnce(e,h,this);
k.load();
return;
case d:k.addListenerOnce(e,h,this);
return;
case f:break;
default:throw new Error("Invalid case!");
}}this.__yt=f;
this.fireEvent(e);
}}});
})();
(function(){var f="qx.ui.popup.Popup",e="visible",d="excluded",c="popup",b="Boolean";
qx.Class.define(f,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(a){arguments.callee.base.call(this,a);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:c},visibility:{refine:true,init:d},autoHide:{check:b,init:true}},members:{_applyVisibility:function(g,h){arguments.callee.base.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===e?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",e="Boolean",d="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(r,s){arguments.callee.base.call(this);
qx.ui.tooltip.Manager.getInstance();
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(r!=null){this.setLabel(r);
}
if(s!=null){this.setIcon(s);
}},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:1000,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:d},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:e,init:false,apply:i}},members:{_createChildControlImpl:function(m){var n;

switch(m){case l:n=new qx.ui.basic.Atom;
this._add(n);
break;
}return n||arguments.callee.base.call(this,m);
},_applyIcon:function(o,p){var q=this.getChildControl(l);
o==null?q.resetIcon:q.setIcon(o);
},_applyLabel:function(t,u){var v=this.getChildControl(l);
t==null?v.resetLabel():v.setLabel(t);
},_applyRich:function(a,b){var c=this.getChildControl(l);
c.setRich(a);
}}});
})();
(function(){var n="Boolean",m="qx.ui.container.Stack",k="change",j="_applyDynamic",h="qx.ui.core.Widget",g="_applySelected";
qx.Class.define(m,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
},properties:{dynamic:{check:n,init:false,apply:j},selected:{check:h,apply:g,event:k,nullable:true}},members:{_applyDynamic:function(o){var q=this._getChildren();
var p=this.getSelected();
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r!=p){if(o){q[i].exclude();
}else{q[i].hide();
}}}},_applySelected:function(e,f){if(f){if(this.isDynamic()){f.exclude();
}else{f.hide();
}}
if(e){e.show();
}},add:function(w){this._add(w);
var x=this.getSelected();

if(!x){this.setSelected(w);
}else if(x!==w){if(this.isDynamic()){w.exclude();
}else{w.hide();
}}},remove:function(z){this._remove(z);

if(this.getSelected()===z){var A=this._getChildren()[0];

if(A){this.setSelected(A);
}else{this.resetSelected();
}}},indexOf:function(y){return this._indexOf(y);
},getChildren:function(){return this._getChildren();
},previous:function(){var u=this.getSelected();
var s=this._indexOf(u)-1;
var v=this._getChildren();

if(s<0){s=v.length-1;
}var t=v[s];
this.setSelected(t);
},next:function(){var b=this.getSelected();
var a=this._indexOf(b)+1;
var c=this._getChildren();
var d=c[a]||c[0];
this.setSelected(d);
}}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var c="abstract",b="__bD",a="qx.application.AbstractGui";
qx.Class.define(a,{type:c,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__bD:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__bD;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
this.__bD=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(d){},terminate:function(){}},destruct:function(){this._disposeFields(b);
}});
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
(function(){var b="qx.ui.core.IMultiSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(e){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},selectAll:function(){return true;
},addToSelection:function(f){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
},getSelectables:function(){return true;
}}});
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
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__gu",b="__gt",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d}},members:{__gt:null,__gu:null,getWindowManager:function(){if(!this.__gu){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__gu;
},supportsMaximize:function(){return true;
},setWindowManager:function(p){if(this.__gu){this.__gu.setDesktop(null);
}p.setDesktop(this);
this.__gu=p;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);
k.setActive(true);

if(l){l.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._addWindow(o);
}},_addWindow:function(j){this.getWindows().push(j);
j.addListener(f,this._onChangeActive,this);
j.addListener(h,this._onChangeModal,this);
j.addListener(g,this._onChangeVisibility,this);

if(j.getActive()){this.setActiveWindow(j);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._removeWindow(m);
}},_removeWindow:function(n){qx.lang.Array.remove(this.getWindows(),n);
n.removeListener(f,this._onChangeActive,this);
n.removeListener(h,this._onChangeModal,this);
n.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__gt){this.__gt=[];
}return this.__gt;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var cv="(\\d\\d?)",cu="",ct="(",cs=")",cr="|",cq="abbreviated",cp="wide",co="wildcard",cn="default",cm="literal",cb="'",ca="hour",bY="(\\d\\d?\\d?)",bX="ms",bW="-",bV="quoted_literal",bU='a',bT="+",bS="HHmmss",bR="long",cC="sec",cD="HH:mm:ss",cA='z',cB="day",cy="narrow",cz='Z',cw="min",cx=" ",cE="SSS",cF="h",cf="SS",ce="Z",ch="__mB",cg="00",cj='K',ci="EEEE",cl="^",ck='y',cd="(\\d\\d(\\d\\d)?)",cc="__mA",Y="__mz",ba="(\\d\\d)",bb="K",bc="((\\+|\\-)\\d\\d:?\\d\\d)",bd="a",be="GMT",bf="S",bg="dd",bh="qx.util.format.DateFormat",bi="__my",cJ="H",cI="YYYY",cH="EE",cG="mm",cN='h',cM='s',cL='A',cK="KK",cP="ss",cO='H',bB='S',bC="0",bz="MMMM",bA="d",bF="([a-zA-Z]+)",bG="HH",bD='k',bE="m",bx='Y',by='D',bq="kk",bp="hh",bs="MM",br="yy",bm="yyyy-MM-dd HH:mm:ss",bl="short",bo='d',bn="unkown",bk='m',bj=":00",bL="(\\d\\d\\d\\d)",bM="k",bN='M',bO="__mC",bH="MMM",bI="s",bJ="M",bK='w',bP="EEE",bQ="$",bw="?",bv='E',bu="z",bt="yyyy";
qx.Class.define(bh,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(cQ,cR){arguments.callee.base.call(this);

if(!cR){this.__my=qx.locale.Manager.getInstance().getLocale();
}else{this.__my=cR;
}
if(cQ!=null){this.__mz=cQ.toString();
}else{this.__mz=qx.locale.Date.getDateFormat(bR,this.__my)+cx+qx.locale.Date.getDateTimeFormat(bS,cD,this.__my);
}},statics:{getDateTimeInstance:function(){var dj=qx.util.format.DateFormat;
var di=qx.locale.Date.getDateFormat(bR)+cx+qx.locale.Date.getDateTimeFormat(bS,cD);

if(dj._dateInstance==null||dj.__mz!=di){dj._dateTimeInstance=new dj();
}return dj._dateTimeInstance;
},getDateInstance:function(){var dM=qx.util.format.DateFormat;
var dL=qx.locale.Date.getDateFormat(bl)+cu;

if(dM._dateInstance==null||dM.__mz!=dL){dM._dateInstance=new dM(dL);
}return dM._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:bm,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__my:null,__mz:null,__mA:null,__mB:null,__mC:null,__mD:function(df,dg){var dh=cu+df;

while(dh.length<dg){dh=bC+dh;
}return dh;
},__mE:function(cX){var cY=new Date(cX.getTime());
var da=cY.getDate();

while(cY.getMonth()!=0){cY.setDate(-1);
da+=cY.getDate()+1;
}return da;
},__mF:function(cS){return new Date(cS.getTime()+(3-((cS.getDay()+6)%7))*86400000);
},__mG:function(Q){var S=this.__mF(Q);
var T=S.getFullYear();
var R=this.__mF(new Date(T,0,4));
return Math.floor(1.5+(S.getTime()-R.getTime())/86400000/7);
},format:function(b){var e=qx.util.format.DateFormat;
var f=this.__my;
var q=b.getFullYear();
var j=b.getMonth();
var s=b.getDate();
var c=b.getDay();
var k=b.getHours();
var g=b.getMinutes();
var l=b.getSeconds();
var m=b.getMilliseconds();
var o=b.getTimezoneOffset()/60;
this.__mH();
var n=cu;

for(var i=0;i<this.__mC.length;i++){var p=this.__mC[i];

if(p.type==cm){n+=p.text;
}else{var d=p.character;
var h=p.size;
var r=bw;

switch(d){case ck:case bx:if(h==2){r=this.__mD(q%100,2);
}else if(h==4){r=q;
}break;
case by:r=this.__mD(this.__mE(b),h);
break;
case bo:r=this.__mD(s,h);
break;
case bK:r=this.__mD(this.__mG(b),h);
break;
case bv:if(h==2){r=qx.locale.Date.getDayName(cy,c,f);
}else if(h==3){r=qx.locale.Date.getDayName(cq,c,f);
}else if(h==4){r=qx.locale.Date.getDayName(cp,c,f);
}break;
case bN:if(h==1||h==2){r=this.__mD(j+1,h);
}else if(h==3){r=qx.locale.Date.getMonthName(cq,j,f);
}else if(h==4){r=qx.locale.Date.getMonthName(cp,j,f);
}break;
case bU:r=(k<12)?qx.locale.Date.getAmMarker(f):qx.locale.Date.getPmMarker(f);
break;
case cO:r=this.__mD(k,h);
break;
case bD:r=this.__mD((k==0)?24:k,h);
break;
case cj:r=this.__mD(k%12,h);
break;
case cN:r=this.__mD(((k%12)==0)?12:(k%12),h);
break;
case bk:r=this.__mD(g,h);
break;
case cM:r=this.__mD(l,h);
break;
case bB:r=this.__mD(m,h);
break;
case cA:if(h==1){r=be+((o<0)?bW:bT)+this.__mD(o)+bj;
}else if(h==2){r=e.MEDIUM_TIMEZONE_NAMES[o];
}else if(h==3){r=e.FULL_TIMEZONE_NAMES[o];
}break;
case cz:r=((o<0)?bW:bT)+this.__mD(o,2)+cg;
}n+=r;
}}return n;
},parse:function(dk){this.__mI();
var dr=this.__mA.regex.exec(dk);

if(dr==null){throw new Error("Date string '"+dk+"' does not match the date format: "+this.__mz);
}var dl={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var dm=1;

for(var i=0;i<this.__mA.usedRules.length;i++){var dp=this.__mA.usedRules[i];
var dn=dr[dm];

if(dp.field!=null){dl[dp.field]=parseInt(dn,10);
}else{dp.manipulator(dl,dn);
}dm+=(dp.groups==null)?1:dp.groups;
}var dq=new Date(dl.year,dl.month,dl.day,(dl.ispm)?(dl.hour+12):dl.hour,dl.min,dl.sec,dl.ms);

if(dl.month!=dq.getMonth()||dl.year!=dq.getFullYear()){throw new Error("Error parsing date '"+dk+"': the value for day or month is too large");
}return dq;
},__mH:function(){if(this.__mC!=null){return;
}this.__mC=[];
var L;
var J=0;
var N=cu;
var H=this.__mz;
var K=cn;
var i=0;

while(i<H.length){var M=H.charAt(i);

switch(K){case bV:if(M==cb){if(i+1>=H.length){i++;
break;
}var I=H.charAt(i+1);

if(I==cb){N+=M;
i++;
}else{i++;
K=bn;
}}else{N+=M;
i++;
}break;
case co:if(M==L){J++;
i++;
}else{this.__mC.push({type:co,character:L,size:J});
L=null;
J=0;
K=cn;
}break;
default:if((M>=bU&&M<=cA)||(M>=cL&&M<=cz)){L=M;
K=co;
}else if(M==cb){if(i+1>=H.length){N+=M;
i++;
break;
}var I=H.charAt(i+1);

if(I==cb){N+=M;
i++;
}i++;
K=bV;
}else{K=cn;
}
if(K!=cn){if(N.length>0){this.__mC.push({type:cm,text:N});
N=cu;
}}else{N+=M;
i++;
}break;
}}if(L!=null){this.__mC.push({type:co,character:L,size:J});
}else if(N.length>0){this.__mC.push({type:cm,text:N});
}},__mI:function(){if(this.__mA!=null){return ;
}var y=this.__mz;
this.__mJ();
this.__mH();
var E=[];
var A=cl;

for(var w=0;w<this.__mC.length;w++){var F=this.__mC[w];

if(F.type==cm){A+=qx.lang.String.escapeRegexpChars(F.text);
}else{var x=F.character;
var B=F.size;
var z;

for(var G=0;G<this.__mB.length;G++){var C=this.__mB[G];

if(x==C.pattern.charAt(0)&&B==C.pattern.length){z=C;
break;
}}if(z==null){var D=cu;

for(var i=0;i<B;i++){D+=x;
}throw new Error("Malformed date format: "+y+". Wildcard "+D+" is not supported");
}else{E.push(z);
A+=z.regex;
}}}A+=bQ;
var v;

try{v=new RegExp(A);
}catch(a){throw new Error("Malformed date format: "+y);
}this.__mA={regex:v,"usedRules":E,pattern:A};
},__mJ:function(){var dw=qx.util.format.DateFormat;

if(this.__mB!=null){return ;
}this.__mB=[];
var dI=function(dN,dO){dO=parseInt(dO,10);

if(dO<dw.ASSUME_YEAR_2000_THRESHOLD){dO+=2000;
}else if(dO<100){dO+=1900;
}dN.year=dO;
};
var dy=function(dP,dQ){dP.month=parseInt(dQ,10)-1;
};
var dz=function(W,X){W.ispm=(X==dw.PM_MARKER);
};
var dD=function(O,P){O.hour=parseInt(P,10)%24;
};
var dx=function(cV,cW){cV.hour=parseInt(cW,10)%12;
};
var dG=function(db,dc){return;
};
var dE=qx.locale.Date.getMonthNames(cq,this.__my);

for(var i=0;i<dE.length;i++){dE[i]=qx.lang.String.escapeRegexpChars(dE[i].toString());
}var dF=function(U,V){V=qx.lang.String.escapeRegexpChars(V);
U.month=dE.indexOf(V);
};
var dt=qx.locale.Date.getMonthNames(cp,this.__my);

for(var i=0;i<dt.length;i++){dt[i]=qx.lang.String.escapeRegexpChars(dt[i].toString());
}var ds=function(dJ,dK){dK=qx.lang.String.escapeRegexpChars(dK);
dJ.month=dt.indexOf(dK);
};
var dv=qx.locale.Date.getDayNames(cy,this.__my);

for(var i=0;i<dv.length;i++){dv[i]=qx.lang.String.escapeRegexpChars(dv[i].toString());
}var dB=function(t,u){u=qx.lang.String.escapeRegexpChars(u);
t.month=dv.indexOf(u);
};
var dH=qx.locale.Date.getDayNames(cq,this.__my);

for(var i=0;i<dH.length;i++){dH[i]=qx.lang.String.escapeRegexpChars(dH[i].toString());
}var dA=function(cT,cU){cU=qx.lang.String.escapeRegexpChars(cU);
cT.month=dH.indexOf(cU);
};
var dC=qx.locale.Date.getDayNames(cp,this.__my);

for(var i=0;i<dC.length;i++){dC[i]=qx.lang.String.escapeRegexpChars(dC[i].toString());
}var du=function(dd,de){de=qx.lang.String.escapeRegexpChars(de);
dd.month=dC.indexOf(de);
};
this.__mB.push({pattern:cI,regex:bL,manipulator:dI});
this.__mB.push({pattern:bt,regex:cd,groups:2,manipulator:dI});
this.__mB.push({pattern:br,regex:ba,manipulator:dI});
this.__mB.push({pattern:bJ,regex:cv,manipulator:dy});
this.__mB.push({pattern:bs,regex:cv,manipulator:dy});
this.__mB.push({pattern:bH,regex:ct+dE.join(cr)+cs,manipulator:dF});
this.__mB.push({pattern:bz,regex:ct+dt.join(cr)+cs,manipulator:ds});
this.__mB.push({pattern:bg,regex:cv,field:cB});
this.__mB.push({pattern:bA,regex:cv,field:cB});
this.__mB.push({pattern:cH,regex:ct+dv.join(cr)+cs,manipulator:dB});
this.__mB.push({pattern:bP,regex:ct+dH.join(cr)+cs,manipulator:dA});
this.__mB.push({pattern:ci,regex:ct+dC.join(cr)+cs,manipulator:du});
this.__mB.push({pattern:bd,regex:ct+dw.AM_MARKER+cr+dw.PM_MARKER+cs,manipulator:dz});
this.__mB.push({pattern:bG,regex:cv,field:ca});
this.__mB.push({pattern:cJ,regex:cv,field:ca});
this.__mB.push({pattern:bq,regex:cv,manipulator:dD});
this.__mB.push({pattern:bM,regex:cv,manipulator:dD});
this.__mB.push({pattern:cK,regex:cv,field:ca});
this.__mB.push({pattern:bb,regex:cv,field:ca});
this.__mB.push({pattern:bp,regex:cv,manipulator:dx});
this.__mB.push({pattern:cF,regex:cv,manipulator:dx});
this.__mB.push({pattern:cG,regex:cv,field:cw});
this.__mB.push({pattern:bE,regex:cv,field:cw});
this.__mB.push({pattern:cP,regex:cv,field:cC});
this.__mB.push({pattern:bI,regex:cv,field:cC});
this.__mB.push({pattern:cE,regex:bY,field:bX});
this.__mB.push({pattern:cf,regex:bY,field:bX});
this.__mB.push({pattern:bf,regex:bY,field:bX});
this.__mB.push({pattern:ce,regex:bc,manipulator:dG});
this.__mB.push({pattern:bu,regex:bF,manipulator:dG});
}},destruct:function(){this._disposeFields(Y,bi,bO,cc,ch);
}});
})();
(function(){var r="en_US",q="@attributes",p="feedreader.io.FeedParser",o="",n="yyyy-MM-d'T'HH:mm:ss'Z'",m="EEE, d MMM yyyy HH:mm:ss Z",k="EEE, d MMM yyyy HH:mm:ss z",j="yyyy-MM-d'T'HH:mm:ssZ";
qx.Class.define(p,{statics:{_rssDate1:new qx.util.format.DateFormat(m,r),_rssDate2:new qx.util.format.DateFormat(k,r),_atomDate1:new qx.util.format.DateFormat(n,r),_atomDate2:new qx.util.format.DateFormat(j,r),parseFeed:function(x){var y=[];

if(x){if(x.channel){y=this._normalizeRssFeed(x);
}else if(x.entry){y=this._normalizeAtomFeed(x);
}else{throw new Error("Unknown feed format!");
}}else{throw new Error("Invalid json: "+x);
}return y;
},_normalizeRssFeed:function(s){var t=[];

for(var i=0,a=s.channel.item,l=a.length;i<l;i++){var w=a[i];
var v=w.pubDate;

try{v=this._rssDate1.parse(v);
}catch(h){try{v=this._rssDate2.parse(v);
}catch(g){}}if(!(v instanceof Date)){throw new Error("RSS Date Error: "+v);
v=null;
}var u=new feedreader.model.Article();
u.set({title:w.title||null,author:o,date:v,content:w.description||null,link:w.link||null});
t.push(u);
}return t;
},_normalizeAtomFeed:function(b){var c=[];

for(var i=0,a=b.entry,l=a.length;i<l;i++){var f=a[i];
var e=f.updated||f.published||f.created;

try{e=this._atomDate1.parse(e);
}catch(z){try{e=this._atomDate2.parse(e);
}catch(A){}}if(!(e instanceof Date)){throw new Error("Atom Date Error: "+e);
e=null;
}var d=new feedreader.model.Article();
d.set({title:f.title||f.summary||null,author:f.author?f.author.name||null:null,date:e,content:f.content||f.summary||null,link:f.link[q]?f.link[q].href||null:null});
c.push(d);
}return c;
}}});
})();
(function(){var F="scrollbar-y",E="scrollbar-x",D="pane",C="auto",B="corner",A="on",z="changeVisibility",y="scroll",x="_computeScrollbars",w="off",p="scrollY",v="abstract",s="update",n="scrollX",m="mousewheel",r="scrollbarY",q="scrollbarX",t="horizontal",l="scrollarea",u="qx.ui.core.AbstractScrollArea",o="vertical";
qx.Class.define(u,{extend:qx.ui.core.Widget,type:v,construct:function(){arguments.callee.base.call(this);
var d=new qx.ui.layout.Grid();
d.setColumnFlex(0,1);
d.setRowFlex(0,1);
this._setLayout(d);
this.addListener(m,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:l},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[C,A,w],init:C,apply:x},scrollbarY:{check:[C,A,w],init:C,apply:x},scrollbar:{group:[q,r]}},members:{_createChildControlImpl:function(f){var g;

switch(f){case D:g=new qx.ui.core.ScrollPane();
g.addListener(s,this._computeScrollbars,this);
g.addListener(n,this._onScrollPaneX,this);
g.addListener(p,this._onScrollPaneY,this);
this._add(g,{row:0,column:0});
break;
case E:g=new qx.ui.core.ScrollBar(t);
g.setMinWidth(0);
g.exclude();
g.addListener(y,this._onScrollBarX,this);
g.addListener(z,this._onChangeScrollbarXVisibility,this);
this._add(g,{row:1,column:0});
break;
case F:g=new qx.ui.core.ScrollBar(o);
g.setMinHeight(0);
g.exclude();
g.addListener(y,this._onScrollBarY,this);
g.addListener(z,this._onChangeScrollbarYVisibility,this);
this._add(g,{row:0,column:1});
break;
case B:g=new qx.ui.core.Widget();
g.setWidth(0);
g.setHeight(0);
g.exclude();
this._add(g,{row:1,column:1});
break;
}return g||arguments.callee.base.call(this,f);
},getPaneSize:function(){return this.getChildControl(D).getInnerSize();
},getItemTop:function(Y){return this.getChildControl(D).getItemTop(Y);
},getItemBottom:function(k){return this.getChildControl(D).getItemBottom(k);
},getItemLeft:function(a){return this.getChildControl(D).getItemLeft(a);
},getItemRight:function(ba){return this.getChildControl(D).getItemRight(ba);
},scrollToX:function(U){qx.ui.core.queue.Manager.flush();
this.getChildControl(E).scrollTo(U);
},scrollByX:function(W){qx.ui.core.queue.Manager.flush();
this.getChildControl(E).scrollBy(W);
},getScrollX:function(){var V=this.getChildControl(E,true);
return V?V.getPosition():0;
},scrollToY:function(T){qx.ui.core.queue.Manager.flush();
this.getChildControl(F).scrollTo(T);
},scrollByY:function(X){qx.ui.core.queue.Manager.flush();
this.getChildControl(F).scrollBy(X);
},getScrollY:function(){var S=this.getChildControl(F,true);
return S?S.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(D).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(D).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var i=this._isChildControlVisible(E);
var j=this._isChildControlVisible(F);
var h=(j)?this.getChildControl(F,true):(i?this.getChildControl(E,true):null);

if(h){h.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var b=this._isChildControlVisible(E);
var c=this._isChildControlVisible(F);

if(!b){this.scrollToX(0);
}b&&c?this._showChildControl(B):this._excludeChildControl(B);
},_onChangeScrollbarYVisibility:function(e){var G=this._isChildControlVisible(E);
var H=this._isChildControlVisible(F);

if(!H){this.scrollToY(0);
}G&&H?this._showChildControl(B):this._excludeChildControl(B);
},_computeScrollbars:function(){var O=this.getChildControl(D);
var content=O.getChild();

if(!content){this._excludeChildControl(E);
this._excludeChildControl(F);
return;
}var I=this.getInnerSize();
var N=O.getInnerSize();
var L=O.getScrollSize();
if(!N||!L){return;
}var P=this.getScrollbarX();
var Q=this.getScrollbarY();

if(P===C&&Q===C){var M=L.width>I.width;
var R=L.height>I.height;
if((M||R)&&!(M&&R)){if(M){R=L.height>N.height;
}else if(R){M=L.width>N.width;
}}}else{var M=P===A;
var R=Q===A;
if(L.width>(M?N.width:I.width)&&P===C){M=true;
}
if(L.height>(M?N.height:I.height)&&Q===C){R=true;
}}if(M){var K=this.getChildControl(E);
K.show();
K.setMaximum(Math.max(0,L.width-N.width-1));
K.setKnobFactor(N.width/L.width);
}else{this._excludeChildControl(E);
}
if(R){var J=this.getChildControl(F);
J.show();
J.setMaximum(Math.max(0,L.height-N.height-1));
J.setKnobFactor(N.height/L.height);
}else{this._excludeChildControl(F);
}}}});
})();
(function(){var F="Boolean",E="changeSelection",D="single",C="qx.ui.core.MSelectionHandling",B="mousedown",A="losecapture",z="one",y="multi",x="_applyQuickSelection",w="mouseover",p="_applySelectionMode",v="_applyDragSelection",s="mouseup",o="mousemove",n="removeItem",r="keypress",q="__jG",t="addItem",m="additive",u="qx.event.type.Data";
qx.Mixin.define(C,{construct:function(){var k=this.SELECTION_MANAGER;
var j=this.__jG=new k(this);
this.addListener(B,j.handleMouseDown,j);
this.addListener(s,j.handleMouseUp,j);
this.addListener(w,j.handleMouseOver,j);
this.addListener(o,j.handleMouseMove,j);
this.addListener(A,j.handleLoseCapture,j);
this.addListener(r,j.handleKeyPress,j);
this.addListener(t,j.handleAddItem,j);
this.addListener(n,j.handleRemoveItem,j);
j.addListener(E,this._onSelectionChange,this);
},events:{"changeSelection":u},properties:{selectionMode:{check:[D,y,m,z],init:D,apply:p},dragSelection:{check:F,init:false,apply:v},quickSelection:{check:F,init:false,apply:x}},members:{__jG:null,selectAll:function(){this.__jG.selectAll();
},select:function(h){this.setSelected(h);
},setSelected:function(l){this.__jG.selectItem(l);
},isSelected:function(G){return this.__jG.isItemSelected(G);
},addToSelection:function(J){this.__jG.addItem(J);
},removeFromSelection:function(d){this.__jG.removeItem(d);
},selectRange:function(K,L){this.__jG.selectItemRange(K,L);
},clearSelection:function(){this.resetSelection();
},resetSelection:function(){this.__jG.clearSelection();
},replaceSelection:function(c){this.setSelection(c);
},setSelection:function(i){this.__jG.replaceSelection(i);
},getSelectedItem:function(){return this.getSelected();
},getSelected:function(){return this.__jG.getSelectedItem();
},getSelection:function(){return this.__jG.getSelection();
},getSortedSelection:function(){return this.__jG.getSortedSelection();
},isSelectionEmpty:function(){return this.__jG.isSelectionEmpty();
},getSelectionContext:function(){return this.__jG.getSelectionContext();
},_getManager:function(){return this.__jG;
},getSelectables:function(){return this.__jG.getSelectables();
},_applySelectionMode:function(f,g){this.__jG.setMode(f);
},_applyDragSelection:function(a,b){this.__jG.setDrag(a);
},_applyQuickSelection:function(H,I){this.__jG.setQuick(H);
},_onSelectionChange:function(e){this.fireDataEvent(E,e.getData());
}},destruct:function(){this._disposeObjects(q);
}});
})();
(function(){var s="qx.event.type.Data",r="horizontal",q="changeValue",p="vertical",o="",n=",",m="qx.ui.form.List",k="Boolean",j="one",h="action",J="addChildWidget",I="__mu",H="_applySpacing",G="Enter",F="Integer",E="list",D="keyinput",C="changeSelection",B="addItem",A="removeChildWidget",y="_applyOrientation",z="single",w="keypress",x="changeName",u="String",v="pane",t="removeItem";
qx.Class.define(m,{extend:qx.ui.core.AbstractScrollArea,implement:[qx.ui.form.IFormElement],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MSelectionHandling],construct:function(K){arguments.callee.base.call(this);
this.__mu=new qx.ui.container.Composite();
this.__mu.addListener(J,this._onAddChild,this);
this.__mu.addListener(A,this._onRemoveChild,this);
this.getChildControl(v).add(this.__mu);
if(K){this.setOrientation(r);
}else{this.initOrientation();
}this.addListener(w,this._onKeyPress);
this.addListener(D,this._onKeyInput);
this.addListener(C,this._onChangeSelection);
this.__mv=o;
},events:{addItem:s,removeItem:s,changeValue:s},properties:{appearance:{refine:true,init:E},focusable:{refine:true,init:true},orientation:{check:[r,p],init:p,apply:y},spacing:{check:F,init:0,apply:H,themeable:true},enableInlineFind:{check:k,init:true},name:{check:u,nullable:true,event:x}},members:{__mv:null,__mw:null,__mu:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__mu;
},_onAddChild:function(e){this.fireDataEvent(B,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(t,e.getData());
},getValue:function(){var a=this.getSelection();
var b=[];
var c;

for(var i=0,l=a.length;i<l;i++){c=a[i].getValue();
if(c==null){c=a[i].getLabel();
}b.push(c);
}return b.join(n);
},setValue:function(X){var bb=X.split(n);
var ba=[];
var Y;

for(var i=0,l=bb.length;i<l;i++){Y=this.findItem(bb[i]);

if(Y){ba.push(Y);
}}this.setSelection(ba);
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(R,S){var T=R===r;
var U=T?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__mu;
content.setLayout(U);
content.setAllowGrowX(!T);
content.setAllowGrowY(T);
this._applySpacing(this.getSpacing());
},_applySpacing:function(M,N){this.__mu.getLayout().setSpacing(M);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==G&&!e.isAltPressed()){var L=this.getSelection();

for(var i=0;i<L.length;i++){L[i].fireEvent(h);
}return true;
}return false;
},_onChangeSelection:function(){if(this.hasListener(q)){this.fireDataEvent(q,this.getValue());
}},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var V=this.getSelectionMode();

if(!(V===z||V===j)){return;
}if(((new Date).valueOf()-this.__mw)>1000){this.__mv=o;
}this.__mv+=e.getChar();
var W=this.findItemByLabelFuzzy(this.__mv);
if(W){this.setSelected(W);
}this.__mw=(new Date).valueOf();
e.preventDefault();
},findItemByLabelFuzzy:function(d){d=d.toLowerCase();
var f=this.getChildren();
for(var i=0,l=f.length;i<l;i++){var g=f[i].getLabel();
if(g&&g.toLowerCase().indexOf(d)==0){return f[i];
}}return null;
},findItem:function(O){O=O.toLowerCase();
var P=this.getChildren();
var Q;
for(var i=0,l=P.length;i<l;i++){Q=P[i];

if(Q.getFormValue().toLowerCase()==O){return Q;
}}return null;
}},destruct:function(){this._disposeObjects(I);
}});
})();
(function(){var n="String",m="",l="new",k="stateModified",j="changeArticles",i="feedreader.model.Article",h="qx.data.Array",g="loaded",f="loading",e="dataModified",b="changeUrl",d="feedreader.model.Feed",c="changeTitle",a="error";
qx.Class.define(d,{extend:qx.core.Object,construct:function(o,p,q){arguments.callee.base.call(this);
this.set({url:p,title:o,category:q||m});
this.setArticles(new qx.data.Array());
},properties:{articles:{check:h,event:j},selectedArticle:{check:i,nullable:true},url:{check:n,event:b},title:{check:n,event:c},category:{check:n,init:m,event:e},state:{check:[l,f,g,a],init:l,event:k}}});
})();
(function(){var bi="mouseup",bh="keypress",bg="mousedown",bf="interval",be="keydown",bd="keyup",bc="__ji",bb="Enter",ba="__jh",Y="Up",S="Escape",X="blur",V="qx.ui.menu.Manager",R="Left",Q="Down",U="Right",T="__jj",W="singleton",P="Space";
qx.Class.define(V,{type:W,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jh=[];
var z=qx.core.Init.getApplication().getRoot();
var y=document.body;
var A=qx.event.Registration;
z.addListener(bg,this._onMouseDown,this,true);
z.addListener(bi,this._onMouseUp,this);
A.addListener(window.document.documentElement,bi,this._onMouseUp,this);
A.addListener(y,be,this._onKeyUpDown,this,true);
A.addListener(y,bd,this._onKeyUpDown,this,true);
A.addListener(y,bh,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,X,this.hideAll,this);
this.__ji=new qx.event.Timer;
this.__ji.addListener(bf,this._onOpenInterval,this);
this.__jj=new qx.event.Timer;
this.__jj.addListener(bf,this._onCloseInterval,this);
},members:{__jk:null,__jl:null,__ji:null,__jj:null,__jh:null,_getChild:function(E,F,G,H){var I=E.getChildren();
var length=I.length;
var J;

for(var i=F;i<length&&i>=0;i+=G){J=I[i];

if(J.isEnabled()&&!J.isAnonymous()){return J;
}}
if(H){i=i==length?0:length-1;

for(;i!=F;i+=G){J=I[i];

if(J.isEnabled()&&!J.isAnonymous()){return J;
}}}return null;
},_isInMenu:function(m){while(m){if(m instanceof qx.ui.menu.Menu){return true;
}m=m.getLayoutParent();
}return false;
},_getMenuButton:function(D){while(D){if(D instanceof qx.ui.menu.AbstractButton){return D;
}D=D.getLayoutParent();
}return null;
},add:function(K){{};
var L=this.__jh;
L.push(K);
K.setZIndex(1e6+L.length);
},remove:function(k){{};
var l=this.__jh;

if(l){qx.lang.Array.remove(l,k);
}},hideAll:function(){var M=this.__jh;

if(M){for(var i=M.length-1;i>=0;i--){M[i].exclude();
}}},getActiveMenu:function(){var bj=this.__jh;
return bj.length>0?bj[bj.length-1]:null;
},scheduleOpen:function(b){this.cancelClose(b);
if(b.isVisible()){if(this.__jk){this.cancelOpen(this.__jk);
}}else if(this.__jk!=b){this.__jk=b;
this.__ji.restartWith(b.getOpenInterval());
}},scheduleClose:function(bG){this.cancelOpen(bG);
if(!bG.isVisible()){if(this.__jl){this.cancelClose(this.__jl);
}}else if(this.__jl!=bG){this.__jl=bG;
this.__jj.restartWith(bG.getCloseInterval());
}},cancelOpen:function(a){if(this.__jk==a){this.__ji.stop();
this.__jk=null;
}},cancelClose:function(bB){if(this.__jl==bB){this.__jj.stop();
this.__jl=null;
}},_onOpenInterval:function(e){this.__ji.stop();
this.__jk.open();
this.__jk=null;
},_onCloseInterval:function(e){this.__jj.stop();
this.__jl.exclude();
this.__jl=null;
},_onMouseDown:function(e){var bv=e.getTarget();
if(bv.getMenu&&bv.getMenu()&&bv.getMenu().isVisible()){return;
}if(this.__jh.length>0&&!this._isInMenu(bv)){this.hideAll();
}},_onMouseUp:function(e){var O=e.getTarget();
var N;

if(O instanceof qx.ui.core.Widget){N=O;
}else{N=qx.ui.core.Widget.getWidgetByElement(O);
}if(!(N instanceof qx.ui.menu.Menu)){N=this._getMenuButton(N);

if(N!=null&&N instanceof qx.ui.menu.AbstractButton&&!N.isEnabled()){return;
}this.hideAll();
}},__jm:{"Enter":1,"Space":1},__jn:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var B=this.getActiveMenu();

if(!B){return;
}var C=e.getKeyIdentifier();

if(this.__jn[C]||(this.__jm[C]&&B.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bw=this.getActiveMenu();

if(!bw){return;
}var bx=e.getKeyIdentifier();
var bz=this.__jn[bx];
var by=this.__jm[bx];

if(bz){switch(bx){case Y:this._onKeyPressUp(bw);
break;
case Q:this._onKeyPressDown(bw);
break;
case R:this._onKeyPressLeft(bw);
break;
case U:this._onKeyPressRight(bw);
break;
case S:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(by){var bA=bw.getSelectedButton();

if(bA){switch(bx){case bb:this._onKeyPressEnter(bw,bA,e);
break;
case P:this._onKeyPressSpace(bw,bA,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(t){var u=t.getSelectedButton();
var v=t.getChildren();
var x=u?t.indexOf(u)-1:v.length-1;
var w=this._getChild(t,x,-1,true);
if(w){t.setSelectedButton(w);
}else{t.resetSelectedButton();
}},_onKeyPressDown:function(bC){var bD=bC.getSelectedButton();
var bF=bD?bC.indexOf(bD)+1:0;
var bE=this._getChild(bC,bF,1,true);
if(bE){bC.setSelectedButton(bE);
}else{bC.resetSelectedButton();
}},_onKeyPressLeft:function(c){var g=c.getOpener();

if(!g){return;
}if(g instanceof qx.ui.menu.Button){var j=g.getLayoutParent();
j.resetOpenedButton();
j.setSelectedButton(g);
}else if(g instanceof qx.ui.menubar.Button){var d=g.getToolBar().getMenuButtons();
var f=d.indexOf(g);
if(f===-1){return;
}var h=f==0?d[d.length-1]:d[f-1];

if(h!=g){h.open(true);
}}},_onKeyPressRight:function(bn){var bp=bn.getSelectedButton();
if(bp){var bo=bp.getMenu();

if(bo){bn.setOpenedButton(bp);
var bu=this._getChild(bo,0,1);

if(bu){bo.setSelectedButton(bu);
}return;
}}else if(!bn.getOpenedButton()){var bu=this._getChild(bn,0,1);

if(bu){bn.setSelectedButton(bu);

if(bu.getMenu()){bn.setOpenedButton(bu);
}return;
}}var bs=bn.getOpener();
if(bs instanceof qx.ui.menu.Button&&bp){while(bs){bs=bs.getLayoutParent();

if(bs instanceof qx.ui.menu.Menu){bs=bs.getOpener();

if(bs instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bs){return;
}}if(bs instanceof qx.ui.menubar.Button){var br=bs.getToolBar().getMenuButtons();
var bq=br.indexOf(bs);
if(bq===-1){return;
}var bt=br[bq+1];

if(!bt){bt=br[0];
}
if(bt!=bs){bt.open(true);
}}},_onKeyPressEnter:function(q,r,e){if(r.hasListener(bh)){var s=e.clone();
s.setBubbles(false);
s.setTarget(r);
r.dispatchEvent(s);
}this.hideAll();
},_onKeyPressSpace:function(n,o,e){if(o.hasListener(bh)){var p=e.clone();
p.setBubbles(false);
p.setTarget(o);
o.dispatchEvent(p);
}}},destruct:function(){var bm=qx.event.Registration;
var bk=document.body;
var bl=qx.core.Init.getApplication().getRoot();
bl.removeListener(bg,this._onMouseDown,this,true);
bl.removeListener(bi,this._onMouseUp,this);
bm.removeListener(window.document.documentElement,bi,this._onMouseUp,this);
bm.removeListener(bk,be,this._onKeyUpDown,this,true);
bm.removeListener(bk,bd,this._onKeyUpDown,this,true);
bm.removeListener(bk,bh,this._onKeyPress,this,true);
this._disposeObjects(bc,T);
this._disposeArray(ba);
}});
})();
(function(){var q="pressed",p="abandoned",o="Integer",n="hovered",m="qx.event.type.Event",l="Enter",k="Space",j="press",i="qx.ui.form.RepeatButton",h="release",d="interval",g="__kF",f="execute";
qx.Class.define(i,{extend:qx.ui.form.Button,construct:function(r,s){arguments.callee.base.call(this,r,s);
this.__kF=new qx.event.Timer(this.getInterval());
this.__kF.addListener(d,this._onInterval,this);
},events:{"execute":m,"press":m,"release":m},properties:{interval:{check:o,init:100},firstInterval:{check:o,init:500},minTimer:{check:o,init:20},timerDecrease:{check:o,init:2}},members:{__kG:null,__kH:null,__kF:null,press:function(){if(this.isEnabled()){if(!this.hasState(q)){this.__kI();
}this.removeState(p);
this.addState(q);
}},release:function(a){if(!this.isEnabled()){return;
}if(this.hasState(q)){if(!this.__kH){this.execute();
}}this.removeState(q);
this.removeState(p);
this.__kJ();
},_applyEnabled:function(b,c){arguments.callee.base.call(this,b,c);

if(!b){this.removeState(q);
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
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(f,g){var r=this._getLayoutChildren();
var q;
var j;
var k=[];

for(var i=0,l=r.length;i<l;i++){q=r[i];
j=q.getLayoutProperties().column;
k[j]=q;
}var p=r[0].getLayoutParent().getLayoutParent();
var s=p.getColumnSizes();
var m=p.getSpacingX();
var t=0,top=0;
var n=qx.ui.layout.Util;

for(var i=0,l=s.length;i<l;i++){q=k[i];

if(q){var h=q.getSizeHint();
var top=n.computeVerticalAlignOffset(q.getAlignY()||c,h.height,g,0,0);
var o=n.computeHorizontalAlignOffset(q.getAlignX()||a,h.width,s[i],q.getMarginLeft(),q.getMarginRight());
q.renderLayout(t+o,top,h.width,h.height);
}t+=s[i]+m;
}},_computeSizeHint:function(){var e=this._getLayoutChildren();
var d=0;

for(var i=0,l=e.length;i<l;i++){d=Math.max(d,e[i].getSizeHint().height);
}return {width:0,height:d};
}}});
})();
(function(){var n="pressed",m="hovered",l="changeVisibility",k="qx.ui.menu.Menu",j="Enter",i="changeMenu",h="qx.ui.form.MenuButton",g="abandoned",f="_applyMenu";
qx.Class.define(h,{extend:qx.ui.form.Button,construct:function(p,q,r){arguments.callee.base.call(this,p,q);
if(r!=null){this.setMenu(r);
}},properties:{menu:{check:k,nullable:true,apply:f,event:i}},members:{_applyMenu:function(t,u){if(u){u.removeListener(l,this._onMenuChange,this);
u.resetOpener();
}
if(t){t.addListener(l,this._onMenuChange,this);
t.setOpener(this);
}},open:function(a){var b=this.getMenu();

if(b){qx.ui.menu.Manager.getInstance().hideAll();
b.open();
if(a){var c=b.getChildren()[0];

if(c){b.setSelectedButton(c);
}}}},_onMenuChange:function(e){var o=this.getMenu();

if(o.isVisible()){this.addState(n);
}else{this.removeState(n);
}},_onMouseDown:function(e){var s=this.getMenu();

if(s){if(!s.isVisible()){this.open();
}else{s.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){e.stopPropagation();
},_onMouseOver:function(e){this.addState(m);
},_onMouseOut:function(e){this.removeState(m);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case j:this.removeState(g);
this.addState(n);
var d=this.getMenu();

if(d){if(!d.isVisible()){this.open();
}else{d.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",e="qx.ui.menubar.Button",d="keydown",c="menubar-button",b="keyup";
qx.Class.define(e,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){arguments.callee.base.call(this,i,j,k);
this.removeListener(d,this._onKeyDown);
this.removeListener(b,this._onKeyUp);
},properties:{appearance:{refine:true,init:c},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getToolBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},_onMenuChange:function(e){var a=this.getMenu();
var toolbar=this.getToolBar();

if(a.isVisible()){this.addState(h);
if(toolbar){toolbar.setOpenMenu(a);
}}else{this.removeState(h);
if(toolbar&&toolbar.getOpenMenu()==a){toolbar.resetOpenMenu();
}}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var toolbar=this.getToolBar();
var open=toolbar.getOpenMenu();

if(open&&open!=this.getMenu()){qx.ui.menu.Manager.getInstance().hideAll();
this.open();
}}}}});
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
(function(){var g="listitem",f="qx.ui.form.RadioGroup",e="_applyManager",d="qx.ui.form.ListItem",c="qx.event.type.Event",b="changeValue",a="String";
qx.Class.define(d,{extend:qx.ui.basic.Atom,construct:function(h,i,j){arguments.callee.base.call(this,h,i);

if(j!=null){this.setValue(j);
}},events:{"action":c},properties:{appearance:{refine:true,init:g},manager:{check:f,nullable:true,apply:e},value:{check:a,nullable:true,event:b}},members:{_applyManager:function(l,m){if(m){m.remove(this);
}
if(l){l.add(this);
}},getFormValue:function(){var k=this.getValue();

if(k==null){k=this.getLabel();
}return k;
}}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var s="success",r="head",q="complete",p="loaded",o="string",n="__oe",m="readystatechange",l="__oc",k="error",j="load",c="script",i="__ob",g="fail",b="qx.io2.ScriptLoader",a="qx.client",f="text/javascript",d="__of",h="abort";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ob=qx.lang.Function.bind(this.__oh,this);
this.__oc=document.createElement(c);
},members:{__od:null,__oe:null,__of:null,__ob:null,__oc:null,load:function(t,u,v){if(this.__od){throw new Error("Another request is still running!");
}this.__od=true;
var w=document.getElementsByTagName(r)[0];
var x=this.__oc;
this.__oe=u||null;
this.__of=v||window;
x.type=f;
x.onerror=x.onload=x.onreadystatechange=this.__ob;
x.src=t;
w.appendChild(x);
},abort:function(){if(this.__od){this.__og(h);
}},__og:function(status){var z=this.__oc;
z.onerror=z.onload=z.onreadystatechange=null;
document.getElementsByTagName(r)[0].removeChild(z);
delete this.__od;
this.__oe.call(this.__of,status);
},__oh:qx.core.Variant.select(a,{"mshtml":function(){var y=this.__oc.readyState;

if(y==p){this.__og(s);
}else if(y==q){this.__og(s);
}else{return;
}},"default":function(e){if(typeof e===o||e.type===k){this.__og(g);
}else if(e.type===j){this.__og(s);
}else if(e.type===m&&(e.target.readyState===q||e.target.readyState===p)){this.__og(s);
}else{return;
}}})},destruct:function(){this._disposeFields(l,i,n,d);
}});
})();
(function(){var k="=",j="&",h="application/xml",g="application/json",f="text/html",e="qx.client",d="textarea",c="none",b="text/plain",a="text/javascript",G="",F="completed",E="?",D="qx.io.remote.transport.Iframe",C="__lh",B="gecko",A="frame_",z="aborted",y="_data_",x="pre",r="__lg",s="javascript:void(0)",p="sending",q="form",n="failed",o='<iframe name="',l="mshtml",m="form_",t='"></iframe>',u="iframe",w="timeout",v="qx/static/blank.gif";
qx.Class.define(D,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var K=(new Date).valueOf();
var L=A+K;
var M=m+K;
if(qx.core.Variant.isSet(e,l)){this.__lg=document.createElement(o+L+t);
}else{this.__lg=document.createElement(u);
}this.__lg.src=s;
this.__lg.id=this.__lg.name=L;
this.__lg.onload=qx.lang.Function.bind(this._onload,this);
this.__lg.style.display=c;
document.body.appendChild(this.__lg);
this.__lh=document.createElement(q);
this.__lh.target=L;
this.__lh.id=this.__lh.name=M;
this.__lh.style.display=c;
document.body.appendChild(this.__lh);
this.__li=document.createElement(d);
this.__li.id=this.__li.name=y;
this.__lh.appendChild(this.__li);
this.__lg.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[b,a,g,h,f]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__li:null,__lj:0,__lh:null,__lg:null,send:function(){var T=this.getMethod();
var V=this.getUrl();
var ba=this.getParameters(false);
var Y=[];

for(var U in ba){var W=ba[U];

if(W instanceof Array){for(var i=0;i<W.length;i++){Y.push(encodeURIComponent(U)+k+encodeURIComponent(W[i]));
}}else{Y.push(encodeURIComponent(U)+k+encodeURIComponent(W));
}}
if(Y.length>0){V+=(V.indexOf(E)>=0?j:E)+Y.join(j);
}if(this.getData()===null){var ba=this.getParameters(true);
var Y=[];

for(var U in ba){var W=ba[U];

if(W instanceof Array){for(var i=0;i<W.length;i++){Y.push(encodeURIComponent(U)+k+encodeURIComponent(W[i]));
}}else{Y.push(encodeURIComponent(U)+k+encodeURIComponent(W));
}}
if(Y.length>0){this.setData(Y.join(j));
}}var S=this.getFormFields();

for(var U in S){var X=document.createElement(d);
X.name=U;
X.appendChild(document.createTextNode(S[U]));
this.__lh.appendChild(X);
}this.__lh.action=V;
this.__lh.method=T;
this.__li.appendChild(document.createTextNode(this.getData()));
this.__lh.submit();
this.setState(p);
},_onload:function(e){if(this.__lh.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
},_onreadystatechange:function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__lg.readyState]);
},_switchReadyState:function(N){switch(this.getState()){case F:case z:case n:case w:this.warn("Ignore Ready State Change");
return;
}while(this.__lj<N){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lj]);
}},setRequestHeader:function(I,J){},getResponseHeader:function(be){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return G;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__lg);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__lg);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__lg);
},getIframeTextContent:function(){var H=this.getIframeBody();

if(!H){return null;
}
if(!H.firstChild){return G;
}if(H.firstChild.tagName&&H.firstChild.tagName.toLowerCase()==x){return H.firstChild.innerHTML;
}else{return H.innerHTML;
}},getIframeHtmlContent:function(){var bb=this.getIframeBody();
return bb?bb.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==F){{};
return null;
}{};
var R=this.getIframeTextContent();

switch(this.getResponseType()){case b:{};
return R;
break;
case f:R=this.getIframeHtmlContent();
{};
return R;
break;
case g:R=this.getIframeHtmlContent();
{};

try{return R&&R.length>0?qx.util.Json.parseQx(R):null;
}catch(bd){return this.error("Could not execute json: ("+R+")",bd);
}case a:R=this.getIframeHtmlContent();
{};

try{return R&&R.length>0?window.eval(R):null;
}catch(bc){return this.error("Could not execute javascript: ("+R+")",bc);
}case h:R=this.getIframeDocument();
{};
return R;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(O,P,Q){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,D);
},destruct:function(){if(this.__lg){this.__lg.onload=null;
this.__lg.onreadystatechange=null;
if(qx.core.Variant.isSet(e,B)){this.__lg.src=qx.util.ResourceManager.toUri(v);
}document.body.removeChild(this.__lg);
}
if(this.__lh){document.body.removeChild(this.__lh);
}this._disposeFields(r,C);
}});
})();
(function(){var m="resize",l="scrollY",k="typeof value=='number'&&value>=0&&value<=this.getScrollMaxX()",j="update",i="scrollX",h="_applyScrollX",g="_applyScrollY",f="appear",e="qx.ui.core.ScrollPane",d="qx.event.type.Event",b="typeof value=='number'&&value>=0&&value<=this.getScrollMaxY()",c="scroll";
qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(m,this._onUpdate);
var s=this.getContentElement();
s.addListener(c,this._onScroll,this);
s.addListener(f,this._onAppear,this);
},events:{update:d},properties:{scrollX:{check:k,apply:h,event:i,init:0},scrollY:{check:b,apply:g,event:l,init:0}},members:{add:function(J){var K=this._getChildren()[0];

if(K){this._remove(K);
K.removeListener(m,this._onUpdate,this);
}
if(J){this._add(J);
J.addListener(m,this._onUpdate,this);
}},remove:function(M){if(M){this._remove(M);
M.removeListener(m,this._onUpdate,this);
}},getChild:function(){return this._getChildren()[0]||null;
},_onUpdate:function(e){this.fireEvent(j);
},_onScroll:function(e){var L=this.getContentElement();
this.setScrollX(L.getScrollX());
this.setScrollY(L.getScrollY());
},_onAppear:function(e){var w=this.getContentElement();
var t=this.getScrollX();
var u=w.getScrollX();

if(t!=u){w.scrollToX(t);
}var z=this.getScrollY();
var v=w.getScrollY();

if(z!=v){w.scrollToY(z);
}},getItemTop:function(a){var top=0;

do{top+=a.getBounds().top;
a=a.getLayoutParent();
}while(a&&a!==this);
return top;
},getItemBottom:function(D){return this.getItemTop(D)+D.getBounds().height;
},getItemLeft:function(G){var H=0;
var parent;

do{H+=G.getBounds().left;
parent=G.getLayoutParent();

if(parent){H+=parent.getInsets().left;
}G=parent;
}while(G&&G!==this);
return H;
},getItemRight:function(A){return this.getItemLeft(A)+A.getBounds().width;
},getScrollSize:function(){return this.getChild().getBounds();
},getScrollMaxX:function(){var C=this.getInnerSize();
var B=this.getScrollSize();

if(C&&B){return Math.max(0,B.width-C.width);
}return 0;
},getScrollMaxY:function(){var o=this.getInnerSize();
var n=this.getScrollSize();

if(o&&n){return Math.max(0,n.height-o.height);
}return 0;
},scrollToX:function(E){var F=this.getScrollMaxX();

if(E<0){E=0;
}else if(E>F){E=F;
}this.setScrollX(E);
},scrollToY:function(p){var q=this.getScrollMaxY();

if(p<0){p=0;
}else if(p>q){p=q;
}this.setScrollY(p);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(I){this.getContentElement().scrollToX(I);
},_applyScrollY:function(r){this.getContentElement().scrollToY(r);
}}});
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
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.VLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var r,u;
var g,f,p,h;

for(var i=0;i<length;i++){r=v[i];
u=r.getLayoutProperties().type;

if(u===b){f=r;
}else if(u===c){p=r;
}else if(!g){g=r;
}else{h=r;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var k=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(k==null){k=1;
}var w=g.getSizeHint();
var n=f.getSizeHint();
var o=h.getSizeHint();
var j=w.height;
var s=n.height;
var t=o.height;

if(x>0&&k>0){var l=x+k;
var m=e-s;
var j=Math.round((m/l)*x);
var t=m-j;
var q=qx.ui.layout.Util.arrangeIdeals(w.minHeight,j,w.maxHeight,o.minHeight,t,o.maxHeight);
j=q.begin;
t=q.end;
}else if(x>0){j=e-s-t;

if(j<w.minHeight){j=w.minHeight;
}
if(j>w.maxHeight){j=w.maxHeight;
}}else if(k>0){t=e-j-s;

if(t<o.minHeight){t=o.minHeight;
}
if(t>o.maxHeight){t=o.maxHeight;
}}g.renderLayout(0,0,d,j);
f.renderLayout(0,j,d,s);
h.renderLayout(0,j+s,d,t);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var B=0,D=0,C=0;
var E=0,F=0,y=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
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
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",G="#80B4EF",F="#ffffdd",E="#334866",D="#00204D",C="#666666",B="#99C3FE",A="#808080",z="#F4F4F4",y="#B6B6B6",x="#909090",q="#FCFCFC",r="#314a6e",o="#001533",p="#0880EF",m="#4d4d4d",n="#DFDFDF",k="#000000",l="#7B7A7E",s="#26364D",t="#AFAFAF",v="#404955",u="#AAAAAA",w="qx.theme.modern.Color";
qx.Theme.define(w,{colors:{"background-application":n,"background-pane":i,"background-light":q,"background-medium":a,"background-splitpane":t,"background-tip":F,"background-odd":h,"text-light":x,"text-gray":b,"text-label":g,"text-title":r,"text-input":k,"text-hovered":o,"text-disabled":l,"text-selected":d,"text-active":s,"text-inactive":v,"border-main":m,"border-separator":A,"border-input":E,"border-disabled":y,"border-pane":D,"border-button":C,"border-column":j,"border-focused":B,"table-pane":i,"table-focus-indicator":p,"table-row-background-focused-selected":f,"table-row-background-focused":G,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":u,"progressive-table-row-background-even":z,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var bc="knob",bb="horizontal",ba="vertical",Y="Integer",X="px",W="mousemove",V="resize",U="left",T="top",S="mouseup",bI="slider",bH="PageUp",bG="mousedown",bF="height",bE="changeValue",bD="Left",bC="Down",bB="Up",bA="dblclick",bz="qx.ui.form.Slider",bj="PageDown",bk="mousewheel",bh="interval",bi="_applyValue",bf="_applyKnobFactor",bg="End",bd="String",be="width",bl="_applyOrientation",bm="Home",br="floor",bq="_applyMinimum",bt="click",bs="Right",bv="keypress",bu="ceil",bo="changeName",by="losecapture",bx="contextmenu",bw="_applyMaximum",bn="Number",bp="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bz,{extend:qx.ui.core.Widget,implement:qx.ui.form.IFormElement,construct:function(bO){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bv,this._onKeyPress);
this.addListener(bk,this._onMouseWheel);
this.addListener(bG,this._onMouseDown);
this.addListener(S,this._onMouseUp);
this.addListener(by,this._onMouseUp);
this.addListener(V,this._onUpdate);
this.addListener(bx,this._onStopEvent);
this.addListener(bt,this._onStopEvent);
this.addListener(bA,this._onStopEvent);
if(bO!=null){this.setOrientation(bO);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bI},focusable:{refine:true,init:true},orientation:{check:[bb,ba],init:bb,apply:bl},name:{check:bd,nullable:true,event:bo},value:{check:bp,init:0,apply:bi,event:bE},minimum:{check:Y,init:0,apply:bq},maximum:{check:Y,init:100,apply:bw},singleStep:{check:Y,init:1},pageStep:{check:Y,init:10},knobFactor:{check:bn,apply:bf,nullable:true}},members:{__kt:null,__ku:null,__kv:null,__kw:null,__kx:null,__ky:null,__kz:null,__kA:null,__kB:null,_createChildControlImpl:function(c){var d;

switch(c){case bc:d=new qx.ui.core.Widget();
d.addListener(V,this._onUpdate,this);
this._add(d);
break;
}return d||arguments.callee.base.call(this,c);
},_onMouseWheel:function(e){var H=e.getWheelDelta()>0?1:-1;
this.slideBy(H*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var g=this.getOrientation()===bb;
var f=g?bD:bB;
var forward=g?bs:bC;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case f:this.slideBack();
break;
case bj:this.slidePageForward();
break;
case bH:this.slidePageBack();
break;
case bm:this.slideToBegin();
break;
case bg:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__kw){return;
}var p=this.__kD;
var n=this.getChildControl(bc);
var o=p?U:T;
var r=p?e.getDocumentLeft():e.getDocumentTop();
var s=this.__kt=qx.bom.element.Location.get(this.getContentElement().getDomElement())[o];
var q=this.__ku=qx.bom.element.Location.get(n.getContainerElement().getDomElement())[o];

if(e.getTarget()===n){this.__kw=true;
this.__kx=r+s-q;
}else{this.__ky=true;
this.__kz=r<=q?-1:1;
this.__kE(e);
this._onInterval();
if(!this.__kB){this.__kB=new qx.event.Timer(100);
this.__kB.addListener(bh,this._onInterval,this);
}this.__kB.start();
}this.addListener(W,this._onMouseMove);
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
}this.removeListener(W,this._onMouseMove);
if(e.getType()===S){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__kw){var i=this.__kD?e.getDocumentLeft():e.getDocumentTop();
var h=i-this.__kx;
this.slideTo(this._positionToValue(h));
}else if(this.__ky){this.__kE(e);
}e.stopPropagation();
},_onInterval:function(e){var bU=this.getValue()+(this.__kz*this.getPageStep());
if(bU<this.getMinimum()){bU=this.getMinimum();
}else if(bU>this.getMaximum()){bU=this.getMaximum();
}var bV=this.__kz==-1;

if((bV&&bU<=this.__kA)||(!bV&&bU>=this.__kA)){bU=this.__kA;
}this.slideTo(bU);
},_onUpdate:function(e){var bQ=this.getInnerSize();
var bR=this.getChildControl(bc).getBounds();
var bP=this.__kD?be:bF;
this._updateKnobSize();
this.__kC=bQ[bP]-bR[bP];
this.__kv=bR[bP];
this._updateKnobPosition();
},__kD:false,__kC:0,__kE:function(e){var t=this.__kD;
var A=t?e.getDocumentLeft():e.getDocumentTop();
var C=this.__kt;
var u=this.__ku;
var E=this.__kv;
var B=A-C;

if(A>=u){B-=E;
}var y=this._positionToValue(B);
var v=this.getMinimum();
var w=this.getMaximum();

if(y<v){y=v;
}else if(y>w){y=w;
}else{var z=this.getValue();
var x=this.getPageStep();
var D=this.__kz<0?br:bu;
y=z+(Math[D]((y-z)/x)*x);
}if(this.__kA==null||(this.__kz==-1&&y<=this.__kA)||(this.__kz==1&&y>=this.__kA)){this.__kA=y;
}},_positionToValue:function(I){var J=this.__kC;
if(J==null||J==0){return 0;
}var L=I/J;

if(L<0){L=0;
}else if(L>1){L=1;
}var K=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(K*L);
},_valueToPosition:function(j){var k=this.__kC;

if(k==null){return 0;
}var l=this.getMaximum()-this.getMinimum();
if(l==0){return 0;
}var j=j-this.getMinimum();
var m=j/l;

if(m<0){m=0;
}else if(m>1){m=1;
}return Math.round(k*m);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(a){var b=this.getChildControl(bc).getContainerElement();

if(this.__kD){b.setStyle(U,a+X,true);
}else{b.setStyle(T,a+X,true);
}},_updateKnobSize:function(){var Q=this.getKnobFactor();

if(Q==null){return;
}var P=this.getInnerSize();

if(P==null){return;
}if(this.__kD){this.getChildControl(bc).setWidth(Math.round(Q*P.width));
}else{this.getChildControl(bc).setHeight(Math.round(Q*P.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bJ){this.slideTo(this.getValue()+bJ);
},slideTo:function(R){if(R<this.getMinimum()){R=this.getMinimum();
}else if(R>this.getMaximum()){R=this.getMaximum();
}else{R=this.getMinimum()+Math.round((R-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(R);
},_applyOrientation:function(M,N){var O=this.getChildControl(bc);
this.__kD=M===bb;
if(this.__kD){this.removeState(ba);
O.removeState(ba);
this.addState(bb);
O.addState(bb);
O.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(bb);
O.removeState(bb);
this.addState(ba);
O.addState(ba);
O.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(F,G){if(F!=null){this._updateKnobSize();
}else{if(this.__kD){this.getChildControl(bc).resetWidth();
}else{this.getChildControl(bc).resetHeight();
}}},_applyValue:function(bS,bT){this._updateKnobPosition();
},_applyMinimum:function(bK,bL){if(this.getValue()<bK){this.setValue(bK);
}this._updateKnobPosition();
},_applyMaximum:function(bM,bN){if(this.getValue()>bM){this.setValue(bM);
}this._updateKnobPosition();
}}});
})();
(function(){var x="slider",w="splitter",v="qx.ui.splitpane.HLayout";
qx.Class.define(v,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(a,b){var s=this._getLayoutChildren();
var length=s.length;
var p,r;
var d,c,m,e;

for(var i=0;i<length;i++){p=s[i];
r=p.getLayoutProperties().type;

if(r===w){c=p;
}else if(r===x){m=p;
}else if(!d){d=p;
}else{e=p;
}}
if(d&&e){var u=d.getLayoutProperties().flex;
var f=e.getLayoutProperties().flex;

if(u==null){u=1;
}
if(f==null){f=1;
}var t=d.getSizeHint();
var j=c.getSizeHint();
var l=e.getSizeHint();
var q=t.width;
var o=j.width;
var n=l.width;

if(u>0&&f>0){var g=u+f;
var h=a-o;
var q=Math.round((h/g)*u);
var n=h-q;
var k=qx.ui.layout.Util.arrangeIdeals(t.minWidth,q,t.maxWidth,l.minWidth,n,l.maxWidth);
q=k.begin;
n=k.end;
}else if(u>0){q=a-o-n;

if(q<t.minWidth){q=t.minWidth;
}
if(q>t.maxWidth){q=t.maxWidth;
}}else if(f>0){n=a-q-o;

if(n<l.minWidth){n=l.minWidth;
}
if(n>l.maxWidth){n=l.maxWidth;
}}d.renderLayout(0,0,q,b);
c.renderLayout(q,0,o,b);
e.renderLayout(q+o,0,n,b);
}else{c.renderLayout(0,0,0,0);
if(d){d.renderLayout(0,0,a,b);
}else if(e){e.renderLayout(0,0,a,b);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var E=0,F=0,y=0;
var B=0,D=0,C=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===x){continue;
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
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Classic",b="Theme",a="singleton";
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
(function(){var y=",",x="",w="string",v="null",u='"',t="qx.jsonDebugging",s='\\u00',r="new Date(Date.UTC(",q=")",p='\\\\',Y='\\f',X="Object",W='\\"',V="))",U="}",T='(',S=":",R="{",Q='\\r',P="__bN",F="__bM",G="__bX",D='\\t',E="(",B="]",C="qx.jsonEncodeUndefined",z="[",A="__bP",H="__bW",I='\\b',K="qx.util.Json",J=')',M='\\n',L="Date",O="__bO",N="Array";
qx.Class.define(K,{statics:{BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__bL:{"function":F,"boolean":P,"number":O,"string":A,"object":H,"undefined":G},__bM:function(bh){return String(bh);
},__bN:function(h){return String(h);
},__bO:function(k){return isFinite(k)?String(k):v;
},__bP:function(n){var o;

if(/["\\\x00-\x1f]/.test(n)){o=n.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__bR);
}else{o=n;
}return u+o+u;
},__bQ:{'\b':I,'\t':D,'\n':M,'\f':Y,'\r':Q,'"':W,'\\':p},__bR:function(a,b){var j=qx.util.Json.__bQ[b];

if(j){return j;
}j=b.charCodeAt();
return s+Math.floor(j/16).toString(16)+(j%16).toString(16);
},__bS:function(a){var d=[],g=true,f,c;
var e=qx.util.Json.__bY;
d.push(z);

if(e){qx.util.Json.__bT+=qx.util.Json.BEAUTIFYING_INDENT;
d.push(qx.util.Json.__bT);
}
for(var i=0,l=a.length;i<l;i++){c=a[i];
f=this.__bL[typeof c];

if(f){c=this[f](c);

if(typeof c==w){if(!g){d.push(y);

if(e){d.push(qx.util.Json.__bT);
}}d.push(c);
g=false;
}}}
if(e){qx.util.Json.__bT=qx.util.Json.__bT.substring(0,qx.util.Json.__bT.length-qx.util.Json.BEAUTIFYING_INDENT.length);
d.push(qx.util.Json.__bT);
}d.push(B);
return d.join(x);
},__bU:function(br){var bs=br.getUTCFullYear()+y+br.getUTCMonth()+y+br.getUTCDate()+y+br.getUTCHours()+y+br.getUTCMinutes()+y+br.getUTCSeconds()+y+br.getUTCMilliseconds();
return r+bs+V;
},__bV:function(ba){var bd=[],bg=true,bc,bb;
var be=qx.util.Json.__bY;
bd.push(R);

if(be){qx.util.Json.__bT+=qx.util.Json.BEAUTIFYING_INDENT;
bd.push(qx.util.Json.__bT);
}
for(var bf in ba){bb=ba[bf];
bc=this.__bL[typeof bb];

if(bc){bb=this[bc](bb);

if(typeof bb==w){if(!bg){bd.push(y);

if(be){bd.push(qx.util.Json.__bT);
}}bd.push(this.__bP(bf),S,bb);
bg=false;
}}}
if(be){qx.util.Json.__bT=qx.util.Json.__bT.substring(0,qx.util.Json.__bT.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bd.push(qx.util.Json.__bT);
}bd.push(U);
return bd.join(x);
},__bW:function(bl){if(bl){var bm=bl.constructor.name;

if(bl instanceof Array||bm==N){return this.__bS(bl);
}else if(bl instanceof Date||bm==L){return this.__bU(bl);
}else if(bl instanceof Object||bm==X){return this.__bV(bl);
}return x;
}return v;
},__bX:function(m){if(qx.core.Setting.get(C)){return v;
}},stringify:function(bo,bp){this.__bY=bp;
this.__bT=this.BEAUTIFYING_LINE_END;
var bq=this[this.__bL[typeof bo]](bo);

if(typeof bq!=w){bq=null;
}if(qx.core.Setting.get(t)){qx.log.Logger.debug(this,"JSON request: "+bq);
}return bq;
},parse:function(bn){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bn.replace(/"(\\.|[^"\\])*"/g,x))){throw new Error("Could not parse JSON string!");
}
try{return eval(E+bn+q);
}catch(bk){throw new Error("Could not evaluate JSON string: "+bk.message);
}},parseQx:function(bi){if(qx.core.Setting.get(t)){qx.log.Logger.debug(this,"JSON response: "+bi);
}var bj=(bi&&bi.length>0)?eval(T+bi+J):null;
return bj;
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(h,j);
},_applyOverflowY:function(k){this.getContentElement().setStyle(d,k);
}}});
})();
(function(){var m="",l="color",k="String",j="none",i="padding",h="0px",g="changeHtml",f="_applyCssClass",e="class",d="qx.ui.embed.Html",a="_applyHtml",c="border",b="html";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(x){arguments.callee.base.call(this);

if(x!=null){this.setHtml(x);
}},properties:{html:{check:k,apply:a,event:g,nullable:true},cssClass:{check:k,init:m,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(u,v){var w=this.getContentElement();
w.setAttribute(b,u||m);
w.setStyle(i,h);
w.setStyle(c,j);
},_applyCssClass:function(n,o){this.getContentElement().setAttribute(e,n);
},_applyFont:function(r,s){var t=r?qx.theme.manager.Font.getInstance().resolve(r).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(t);
},_applyTextColor:function(p,q){if(p){this.getContentElement().setStyle(l,qx.theme.manager.Color.getInstance().resolve(p));
}else{this.getContentElement().removeStyle(l);
}}}});
})();
(function(){var e="icon",d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(f,g){var h=qx.util.AliasManager.getInstance();
f?h.add(e,f.resource):h.remove(e);
}}});
})();
(function(){var c="qx.ui.core.ISingleSelection",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeSelection":b},members:{getSelected:function(){return true;
},setSelected:function(d){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(a){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var v="Integer",u="sending",t="failed",s="timeout",r="completed",q="aborted",p="_applyEnabled",o="Boolean",n="interval",m="__kW",h="qx.io.remote.RequestQueue",l="__kX",k="queued",g="__la",f="receiving",j="singleton";
qx.Class.define(h,{type:j,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kW=[];
this.__kX=[];
this.__kY=0;
this.__la=new qx.event.Timer(500);
this.__la.addListener(n,this._oninterval,this);
},properties:{enabled:{init:true,check:o,apply:p},maxTotalRequests:{check:v,nullable:true},maxConcurrentRequests:{check:v,init:3},defaultTimeout:{check:v,init:5000}},members:{__kW:null,__kX:null,__kY:null,__la:null,_debug:function(){var x;
},_check:function(){this._debug();
if(this.__kX.length==0&&this.__kW.length==0){this.__la.stop();
}if(!this.getEnabled()){return;
}if(this.__kX.length>=this.getMaxConcurrentRequests()||this.__kW.length==0){return;
}if(this.getMaxTotalRequests()!=null&&this.__kY>=this.getMaxTotalRequests()){return;
}var a=this.__kW.shift();
var b=new qx.io.remote.Exchange(a);
this.__kY++;
this.__kX.push(b);
this._debug();
b.addListener(u,a._onsending,a);
b.addListener(f,a._onreceiving,a);
b.addListener(r,a._oncompleted,a);
b.addListener(q,a._onaborted,a);
b.addListener(s,a._ontimeout,a);
b.addListener(t,a._onfailed,a);
b.addListener(u,this._onsending,this);
b.addListener(r,this._oncompleted,this);
b.addListener(q,this._oncompleted,this);
b.addListener(s,this._oncompleted,this);
b.addListener(t,this._oncompleted,this);
b._start=(new Date).valueOf();
b.send();
if(this.__kW.length>0){this._check();
}},_remove:function(y){qx.lang.Array.remove(this.__kX,y);
y.dispose();
this._check();
},__lb:0,_onsending:function(e){{};
},_oncompleted:function(e){{};
this._remove(e.getTarget());
},_oninterval:function(e){var H=this.__kX;

if(H.length==0){this.__la.stop();
return;
}var C=(new Date).valueOf();
var F;
var D;
var G=this.getDefaultTimeout();
var E;
var B;

for(var i=H.length-1;i>=0;i--){F=H[i];
D=F.getRequest();

if(D.isAsynchronous()){E=D.getTimeout();
if(E==0){continue;
}
if(E==null){E=G;
}B=C-F._start;

if(B>E){this.warn("Timeout: transport "+F.toHashCode());
this.warn(B+"ms > "+E+"ms");
F.timeout();
}}}},_applyEnabled:function(c,d){if(c){this._check();
}this.__la.setEnabled(c);
},add:function(w){w.setState(k);
this.__kW.push(w);
this._check();

if(this.getEnabled()){this.__la.start();
}},abort:function(z){var A=z.getTransport();

if(A){A.abort();
}else if(qx.lang.Array.contains(this.__kW,z)){qx.lang.Array.remove(this.__kW,z);
}}},destruct:function(){this._disposeArray(l);
this._disposeObjects(g);
this._disposeFields(m);
}});
})();
(function(){var m="right",l="above",k="left",j="under",i="qx.ui.tree.SelectionManager";
qx.Class.define(i,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(q){var r=q.getBounds();

if(r){var top=this._getWidget().getItemTop(q);
return {top:top,bottom:top+r.height};
}},_isSelectable:function(n){return n instanceof qx.ui.tree.AbstractTreeItem&&n.isEnabled();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var o=this._getWidget();
return o.getRoot().getItems(true,false,o.getHideRoot());
},_getSelectableRange:function(d,e){if(d===e){return [d];
}var f=this.getSelectables();
var g=f.indexOf(d);
var h=f.indexOf(e);

if(g<0||h<0){return [];
}
if(g<h){return f.slice(g,h+1);
}else{return f.slice(h,g+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var p=this.getSelectables();

if(p.length>0){return p[p.length-1];
}else{return null;
}},_getRelatedSelectable:function(a,b){var c=this._getWidget();

switch(b){case l:return c.getPreviousSiblingOf(a,false);
case j:return c.getNextSiblingOf(a,false);
case k:if(a.isOpenable()&&a.isOpen()){a.setOpen(false);
}break;
case m:if(a.isOpenable()&&!a.isOpen()){a.setOpen(true);
}break;
}return null;
}}});
})();
(function(){var x="100%",w="mshtml",v="backgroundColor",u="repeat",t="opacity",s="_applyBlockerColor",r="Number",q="zIndex",p=")",o="qx.client",j="url(",n="qx.ui.core.MBlocker",m="__gq",h="_applyBlockerOpacity",g="Color",l="qx/static/blank.gif",k="absolute";
qx.Mixin.define(n,{properties:{blockerColor:{check:g,init:null,nullable:true,apply:s,themeable:true},blockerOpacity:{check:r,init:1,apply:h,themeable:true}},members:{__gn:null,__go:null,__gp:null,__gq:null,__gr:null,_applyBlockerColor:function(a,b){var c=[];
this.__gn&&c.push(this.__gn);
this.__gq&&c.push(this.__gq);

for(var i=0;i<c.length;i++){c[i].setStyle(v,qx.theme.manager.Color.getInstance().resolve(a));
}},_applyBlockerOpacity:function(d,e){var f=[];
this.__gn&&f.push(this.__gn);
this.__gq&&f.push(this.__gq);

for(var i=0;i<f.length;i++){f[i].setStyle(t,d);
}},__gs:function(){var y=new qx.html.Element().setStyles({position:k,width:x,height:x,opacity:this.getBlockerOpacity(),backgroundColor:qx.theme.manager.Color.getInstance().resolve(this.getBlockerColor())});
if(qx.core.Variant.isSet(o,w)){y.setStyles({backgroundImage:j+qx.util.ResourceManager.toUri(l)+p,backgroundRepeat:u});
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
A.setStyle(q,z);

if(this.__gr){return;
}this.__gr=true;
A.include();
},isContentBlocked:function(){return !!this.__gr;
},unblockContent:function(){if(!this.__gr){return;
}this.__gr=false;
this._getContentBlocker().exclude();
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var p="contextmenu",o="changeGlobalCursor",n="abstract",m="Boolean",l="root",k="",j="_applyNativeContextMenu",i=" !important",h="__gv",g="_applyGlobalCursor",c="qx.client",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:n,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
},properties:{appearance:{refine:true,init:l},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:o},nativeContextMenu:{check:m,nullable:true,apply:j,init:true}},members:{__gv:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(c,{"mshtml":function(s,t){},"default":function(u,v){var w=qx.bom.Stylesheet;
var x=this.__gv;

if(!x){this.__gv=x=w.createElement();
}w.removeAllRules(x);

if(u){w.addRule(x,a,qx.bom.element.Cursor.compile(u).replace(f,k)+i);
}}}),_applyNativeContextMenu:function(q,r){if(q){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
}},destruct:function(){this._disposeFields(h);
},defer:function(y,z){qx.ui.core.MChildrenHandling.remap(z);
}});
})();
(function(){var o="resize",n="__gw",m="position",l="0px",k="webkit",j="$$widget",i="qx.ui.root.Application",h="hidden",g="qx.client",f="div",c="__gx",e="100%",d="absolute";
qx.Class.define(i,{extend:qx.ui.root.Abstract,construct:function(p){this.__gw=qx.dom.Node.getWindow(p);
this.__gx=p;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__gw,o,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.setNativeContextMenu(false);
},members:{__gw:null,__gx:null,_createContainerElement:function(){var q=this.__gx;

if(qx.core.Variant.isSet(g,k)){if(!q.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var u=q.documentElement.style;
var r=q.body.style;
u.overflow=r.overflow=h;
u.padding=u.margin=r.padding=r.margin=l;
u.width=u.height=r.width=r.height=e;
var t=q.createElement(f);
q.body.appendChild(t);
var s=new qx.html.Root(t);
s.setStyle(m,d);
s.setAttribute(j,this.toHashCode());
return s;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var a=qx.bom.Viewport.getWidth(this.__gw);
var b=qx.bom.Viewport.getHeight(this.__gw);
return {minWidth:a,width:a,maxWidth:a,minHeight:b,height:b,maxHeight:b};
}},destruct:function(){this._disposeFields(n,c);
}});
})();
(function(){var t="slider",s="horizontal",r="button-begin",q="button-end",p="vertical",o="Integer",n="execute",m="right",l="left",k="down",G="up",F="PositiveNumber",E="changeValue",D="typeof value==='number'&&value>=0&&value<=this.getMaximum()",C="_applyKnobFactor",B="_applyOrientation",A="qx.ui.core.ScrollBar",z="_applyPageStep",y="PositiveInteger",x="scroll",v="_applyPosition",w="scrollbar",u="_applyMaximum";
qx.Class.define(A,{extend:qx.ui.core.Widget,construct:function(I){arguments.callee.base.call(this);
this._createChildControl(r);
this._createChildControl(t);
this._createChildControl(q);
if(I!=null){this.setOrientation(I);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:w},orientation:{check:[s,p],init:s,apply:B},maximum:{check:y,apply:u,init:100},position:{check:D,init:0,apply:v,event:x},singleStep:{check:o,init:20},pageStep:{check:o,init:10,apply:z},knobFactor:{check:F,apply:C,nullable:true}},members:{_createChildControlImpl:function(d){var f;

switch(d){case t:f=new qx.ui.core.ScrollSlider;
f.setPageStep(100);
f.setFocusable(false);
f.addListener(E,this._onChangeSliderValue,this);
this._add(f,{flex:1});
break;
case r:f=new qx.ui.form.RepeatButton;
f.setFocusable(false);
f.addListener(n,this._onExecuteBegin,this);
this._add(f);
break;
case q:f=new qx.ui.form.RepeatButton;
f.setFocusable(false);
f.addListener(n,this._onExecuteEnd,this);
this._add(f);
break;
}return f||arguments.callee.base.call(this,d);
},_applyMaximum:function(g){this.getChildControl(t).setMaximum(g);
},_applyPosition:function(K){this.getChildControl(t).setValue(K);
},_applyKnobFactor:function(H){this.getChildControl(t).setKnobFactor(H);
},_applyPageStep:function(j){this.getChildControl(t).setPageStep(j);
},_applyOrientation:function(a,b){var c=this._getLayout();

if(c){c.dispose();
}if(a===s){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(p,s);
this.getChildControl(r).replaceState(G,l);
this.getChildControl(q).replaceState(k,m);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(s,p);
this.getChildControl(r).replaceState(l,G);
this.getChildControl(q).replaceState(m,k);
}this.getChildControl(t).setOrientation(a);
},scrollTo:function(L){this.getChildControl(t).slideTo(L);
},scrollBy:function(J){this.getChildControl(t).slideBy(J);
},scrollBySteps:function(h){var i=this.getSingleStep();
this.getChildControl(t).slideBy(h*i);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
}}});
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
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
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
(function(){var bg="open",bf="auto",be="icon",bd="middle",bc="label",bb="changeOpen",ba="excluded",Y="String",X="visible",W="opened",bB="always",bA="qx.ui.tree.AbstractTreeItem",bz="addItem",by="Boolean",bx="__kO",bw="Integer",bv="_applyIndent",bu="changeOpenSymbolMode",bt="_applyOpenSymbolMode",bs="-label",bn="-icon",bo="resize",bl="",bm="removeItem",bj="__kL",bk="abstract",bh="never",bi="_applyIcon",bp="__kK",bq="_applyOpen",br="_applyLabel";
qx.Class.define(bA,{extend:qx.ui.core.Widget,type:bk,construct:function(){arguments.callee.base.call(this);
this.__kK=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:by,init:false,event:bb,apply:bq},openSymbolMode:{check:[bB,bh,bf],init:bf,event:bu,apply:bt},indent:{check:bw,init:19,apply:bv,themeable:true},parent:{check:bA,nullable:true},icon:{check:Y,apply:bi,nullable:true,themeable:true},label:{check:Y,apply:br,init:bl,dispose:true}},members:{__kK:null,__kL:null,__kM:null,__kN:null,__kO:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(k){var m;

switch(k){case bc:m=new qx.ui.basic.Label().set({appearance:this.getAppearance()+bs,alignY:bd});
break;
case be:m=new qx.ui.basic.Image().set({appearance:this.getAppearance()+bn,alignY:bd});
break;
case bg:m=new qx.ui.tree.FolderOpenButton().set({alignY:bd});
m.addListener(bb,this._onChangeOpen,this);
m.addListener(bo,this._updateIndent,this);
break;
}return m||arguments.callee.base.call(this,k);
},getTree:function(){var bJ=this;

while(bJ.getParent()){bJ=bJ.getParent();
}var bI=bJ.getLayoutParent()?bJ.getLayoutParent().getLayoutParent():0;

if(bI&&bI instanceof qx.ui.core.ScrollPane){return bI.getLayoutParent();
}return null;
},addWidget:function(A,B){this._add(A,B);
},addSpacer:function(){if(!this.__kO){this.__kO=new qx.ui.core.Spacer();
}else{this._remove(this.__kO);
}this._add(this.__kO);
},addOpenButton:function(){this._add(this.getChildControl(bg));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var s=this.getChildControl(be);

if(this.__kN){this._remove(s);
}this._add(s);
this.__kN=true;
},addLabel:function(f){var g=this.getChildControl(bc);

if(this.__kM){this._remove(g);
}
if(f){this.setLabel(f);
}else{g.setContent(this.getLabel());
}this._add(g);
this.__kM=true;
},addState:function(bF){arguments.callee.base.call(this,bF);
var bH=this._getChildren();

for(var i=0,l=bH.length;i<l;i++){var bG=bH[i];

if(bG.addState){bH[i].addState(bF);
}}},removeState:function(bR){arguments.callee.base.call(this,bR);
var bT=this._getChildren();

for(var i=0,l=bT.length;i<l;i++){var bS=bT[i];

if(bS.addState){bT[i].removeState(bR);
}}},_applyIcon:function(h,j){this.getChildControl(be).setSource(h);
},_applyLabel:function(P,Q){this.getChildControl(bc).setContent(P);
},_applyOpen:function(p,q){if(this.hasChildren()){this.getChildrenContainer().setVisibility(p?X:ba);
}var open=this.getChildControl(bg,true);

if(open){open.setOpen(p);
}p?this.addState(W):this.removeState(W);
},isOpenable:function(){var t=this.getOpenSymbolMode();
return (t===bB||t===bf&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bg,true);

if(!open){return false;
}var bC=this.getTree();

if(!bC.getRootOpenClose()){if(bC.getHideRoot()){if(bC.getRoot()==this.getParent()){return false;
}}else{if(bC.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bD,bE){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var K=0;
var open=this.getChildControl(bg,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var J=open.getBounds();

if(J){K=J.width;
}else{return;
}}else{open.exclude();
}}this.__kO.setWidth((this.getLevel()+1)*this.getIndent()-K);
},_applyIndent:function(a,b){this._updateIndent();
},getLevel:function(){var R=this.getTree();

if(!R){return;
}var S=this;
var T=-1;

while(S){S=S.getParent();
T+=1;
}if(R.getHideRoot()){T-=1;
}
if(!R.getRootOpenClose()){T-=1;
}return T;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__kL){this.__kL=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?X:ba});
}return this.__kL;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__kK;
},hasChildren:function(){return this.__kK?this.__kK.length>0:false;
},getItems:function(C,D,E){if(E!==false){var F=[];
}else{var F=[this];
}var I=this.hasChildren()&&(D!==false||this.isOpen());

if(I){var H=this.getChildren();

if(C===false){F=F.concat(H);
}else{for(var i=0,G=H.length;i<G;i++){F=F.concat(H[i].getItems(C,D,false));
}}}return F;
},recursiveAddToWidgetQueue:function(){var bK=this.getItems(true,true,false);

for(var i=0,l=bK.length;i<l;i++){qx.ui.core.queue.Widget.add(bK[i]);
}},__kP:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bL){var bM=this.getChildrenContainer();
var bP=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bQ=arguments[i];
var bO=bQ.getParent();

if(bO){bO.remove(bQ);
}bQ.setParent(this);
var bN=this.hasChildren();
bM.add(bQ);

if(bQ.hasChildren()){bM.add(bQ.getChildrenContainer());
}this.__kK.push(bQ);

if(!bN){this.__kP();
}
if(bP){bQ.recursiveAddToWidgetQueue();
bP.fireNonBubblingEvent(bz,qx.event.type.Data,[bQ]);
}}
if(bP){qx.ui.core.queue.Widget.add(this);
}},addAt:function(u,v){{};

if(v==this.__kK.length){this.add(u);
return;
}var z=u.getParent();

if(z){z.remove(u);
}var x=this.getChildrenContainer();
u.setParent(this);
var y=this.hasChildren();
var w=this.__kK[v];
x.addBefore(u,w);

if(u.hasChildren()){x.addAfter(u.getChildrenContainer(),u);
}qx.lang.Array.insertAt(this.__kK,u,v);

if(!y){this.__kP();
}
if(this.getTree()){u.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(n,o){{};
this.addAt(n,this.__kK.indexOf(o));
},addAfter:function(c,d){{};
this.addAt(c,this.__kK.indexOf(d)+1);
},addAtBegin:function(r){this.addAt(r,0);
},remove:function(L){for(var i=0,l=arguments.length;i<l;i++){var O=arguments[i];

if(this.__kK.indexOf(O)==-1){this.warn("Cannot remove treeitem '"+O+"'. It is not a child of this tree item.");
return;
}var N=this.getChildrenContainer();

if(O.hasChildren()){N.remove(O.getChildrenContainer());
}qx.lang.Array.remove(this.__kK,O);
O.setParent(null);
N.remove(O);
}var M=this.getTree();

if(M){M.fireNonBubblingEvent(bm,qx.event.type.Data,[O]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(U){var V=this.__kK[U];

if(V){this.remove(V);
}},removeAll:function(){for(var i=this.__kK.length-1;i>=0;i--){this.remove(this.__kK[i]);
}}},destruct:function(){this._disposeArray(bp);
this._disposeObjects(bx,bj);
}});
})();
(function(){var I="static",H="user",G="execute",F="loading",E="title",D="change",C="north",B="main",A="new",z="Surfin' Safari",bL="separator-vertical",bK="_header",bJ="selection[0].state",bI="Heise",bH="_listView",bG="F1",bF="article",bE="partLoaded",bD="Control+A",bC="_treeView",P="loaded",Q="__yx",N="http://my.opera.com/desktopteam/xml/rss/blog/",O="settings",L="feedreader/images/loading22.gif",M="error",J="selection[0]",K="_verticalSplitPane",W="http://blogs.msdn.com/jscript/rss.xml",X="http://feedproxy.feedburner.com/qooxdoo/news/content",bi="feeds",bf="enabled",bq="http://www.appleinsider.com/appleinsider.rss",bl="Apple Insider",by="Opera Desktop Blog",bv="add",bb="_horizontalSplitPane",bB="vertical",bA="http://webkit.org/blog/?feed=rss2",bz="http://www.heise.de/newsticker/heise-atom.xml",ba="http://www.alistapart.com/rss.xml",bd="state",be="add-feed-window",bh="JScript Team Blog",bj="Feeds",bm="feedreader.model.Feed",bs="Control+D",bx="icon/22/actions/process-stop.png",R="selection[0].articles",S="Ajaxian",bc="User Feeds",bp="http://feedproxy.feedburner.com/ajaxian",bo="icon/22/apps/internet-feed-reader.png",bn="model",bu="feedreader.Application",bt="http://daringfireball.net/index.xml",bk="Control+P",br="_feedFolder",w="Static Feeds",bw="Control+R",T="qooxdoo News",U="selection[0].category",bg="_articleView",x="A List Apart",y="white",Y="Daring Fireball",V="_toolBarView";
qx.Class.define(bu,{extend:qx.application.Standalone,members:{main:function(){arguments.callee.base.call(this);
{};
qx.io2.PartLoader.getInstance().addListener(bE,function(e){this.debug("part loaded: "+e.getData().getName());
},this);
this._initializeCommands();
this._createLayout();
this._initializeModel();
this._setUpBinding();
this._treeView.getRoot().setOpen(true);
this._treeView.getRoot().getChildren()[0].setOpen(true);
this._treeView.getRoot().getChildren()[1].setOpen(true);
this._treeView.setHideRoot(true);
},finalize:function(){arguments.callee.base.call(this);
this.reload();
},_initializeModel:function(){this._feedFolder=new feedreader.model.FeedFolder(bj);
this._staticFeedFolder=new feedreader.model.FeedFolder(this.tr(w));
this._feedFolder.getFeeds().push(this._staticFeedFolder);
this._staticFeedFolder.getFeeds().push(new feedreader.model.Feed(T,X,I));
this._staticFeedFolder.getFeeds().push(new feedreader.model.Feed(bh,W,I));
this._staticFeedFolder.getFeeds().push(new feedreader.model.Feed(Y,bt,I));
this._staticFeedFolder.getFeeds().push(new feedreader.model.Feed(z,bA,I));
this._staticFeedFolder.getFeeds().push(new feedreader.model.Feed(S,bp,I));
this._userFeedFolder=new feedreader.model.FeedFolder(this.tr(bc));
this._feedFolder.getFeeds().push(this._userFeedFolder);
this._userFeedFolder.getFeeds().push(new feedreader.model.Feed(bI,bz,H));
this._userFeedFolder.getFeeds().push(new feedreader.model.Feed(x,ba,H));
this._userFeedFolder.getFeeds().push(new feedreader.model.Feed(bl,bq,H));
this._userFeedFolder.getFeeds().push(new feedreader.model.Feed(by,N,H));
},_setUpBinding:function(){var b={converter:this._state2iconConverter};
this.__yv=new qx.data.controller.Tree(this._feedFolder,this._treeView,bi,E);
this.__yv.setIconOptions(b);
this.__yv.setIconPath(bd);
this.__yw=new qx.data.controller.List(null,this._listView.getList(),E);
this.__yv.bind(R,this.__yw,bn);
this.__yw.bind(J,this._articleView,bF);
this.__yw.getSelection().addListener(D,this._listControllerChange,this);
this.__yv.getSelection().addListener(D,this._treeControllerChange,this);
var c={converter:this._state2loadingConverter};
this.__yv.bind(bJ,this._listView,F,c);
c={converter:this._category2enabledConverter};
this.__yv.bind(U,this._toolBarView.getRemoveButton(),bf,c);
},_category2enabledConverter:function(a){if(a==H){return true;
}return false;
},_state2iconConverter:function(k){if(k==A||k==F){return L;
}else if(k==P){return bo;
}else if(k==M){return bx;
}return null;
},_state2loadingConverter:function(v){if(v==A||v==F){return true;
}return false;
},_listControllerChange:function(f){var g=this.__yv.getSelection().getItem(0);
var h=this.__yw.getSelection().getItem(0);
if(h!=undefined){g.setSelectedArticle(h);
}},_treeControllerChange:function(t){if(t.getData().type!=bv){return;
}var u=this.__yv.getSelection().getItem(0);
if(u!=null&&u.classname==bm&&u.getSelectedArticle()!=null&&u.getArticles().contains(u.getSelectedArticle())){this.__yw.getSelection().push(u.getSelectedArticle());
}},_createLayout:function(){var bM=new qx.ui.layout.Dock();
bM.setSeparatorY(bL);
var bN=new qx.ui.container.Composite(bM);
this.getRoot().add(bN,{edge:0});
this._header=new feedreader.view.Header();
bN.add(this._header,{edge:C});
this._toolBarView=new feedreader.view.ToolBar(this);
bN.add(this._toolBarView,{edge:C});
this._horizontalSplitPane=new qx.ui.splitpane.Pane();
bN.add(this._horizontalSplitPane);
this._treeView=new qx.ui.tree.Tree();
this._treeView.setWidth(250);
this._treeView.setBackgroundColor(y);
this._horizontalSplitPane.add(this._treeView,0);
this._verticalSplitPane=new qx.ui.splitpane.Pane(bB);
this._verticalSplitPane.setDecorator(null);
this._horizontalSplitPane.add(this._verticalSplitPane,1);
this._listView=new feedreader.view.List(this._feedFolder);
this._listView.setHeight(200);
this._listView.setDecorator(B);
this._verticalSplitPane.add(this._listView,0);
this._articleView=new feedreader.view.Article();
this._articleView.setDecorator(B);
this._verticalSplitPane.add(this._articleView,1);
},_initializeCommands:function(){var q={};
q.reload=new qx.event.Command(bw);
q.reload.addListener(G,this.reload,this);
q.about=new qx.event.Command(bG);
q.about.addListener(G,this.showAbout,this);
q.preferences=new qx.event.Command(bk);
q.preferences.addListener(G,this.showPreferences,this);
q.addFeed=new qx.event.Command(bD);
q.addFeed.addListener(G,this.showAddFeed,this);
q.removeFeed=new qx.event.Command(bs);
q.removeFeed.addListener(G,this.removeFeed,this);
this.__yx=q;
},getCommand:function(d){return this.__yx[d];
},addFeed:function(l,m,n){var o=new feedreader.model.Feed(l,m,n);
this._userFeedFolder.getFeeds().push(o);
var p=feedreader.io.FeedLoader.getInstance();
p.load(o);
},removeFeed:function(){var r=this.__yv.getSelection().getItem(0);
if(r&&r.getCategory&&r.getCategory()!==I){var s=this._userFeedFolder.getFeeds();
for(var i=0;i<s.length;i++){if(r===s.getItem(i)){s.splice(i,1);
return;
}}}},reload:function(){var j=feedreader.io.FeedLoader.getInstance();
j.loadAll(this._feedFolder);
},showPreferences:function(){qx.io2.PartLoader.require([O],function(){if(!this._prefWindow){this._prefWindow=new feedreader.view.PreferenceWindow();
this.getRoot().add(this._prefWindow);
this.showPreferences();
}this._prefWindow.center();
this._prefWindow.open();
},this);
},showAbout:function(){alert(this.tr("FeedReader (qooxdoo powered)"));
},showAddFeed:function(){qx.io2.PartLoader.require([be],function(){if(!this._addFeedWindow){this._addFeedWindow=new feedreader.view.AddFeedWindow(this);
this.getRoot().add(this._addFeedWindow);
}this._addFeedWindow.center();
this._addFeedWindow.open();
},this);
}},destruct:function(){this._disposeFields(Q);
this._disposeObjects(V,bH,bg,bC,br,bb,K,bK);
}});
})();
(function(){var j="model",h="changeSelection",g="change",f="qx.data.Array",e="qx.data.controller.MSelection",d="_applySelection",c="qx.ui.form.SelectBox",b="changeSelected",a="target";
qx.Mixin.define(e,{construct:function(){if(!qx.Class.hasProperty(this.constructor,a)){throw new Error("Target property is needed.");
}this.__nz=0;
this.setSelection(new qx.data.Array());
},properties:{selection:{check:f,event:h,apply:d,init:null}},members:{_applySelection:function(k,l){if(this._selectionArrayListenerId!=undefined&&l!=undefined){l.removeListenerById(this._selectionArrayListenerId);
}this._selectionArrayListenerId=k.addListener(g,this.__nA,this);
},__nA:function(){this._updateSelection();
},__nB:function(){if(this.__nz>0||this.getTarget()==null){return;
}
if(this.__nD()){var q=this.getTarget().getSelection();
}else if(this.__nE()){var q=[this.getTarget().getSelected()];
}for(var i=0;i<q.length;i++){var p=q[i].getUserData(j);

if(!this.getSelection().contains(p)){this.getSelection().splice(this.getSelection().length,0,p);
}}var r=[];

for(var i=0;i<q.length;i++){r[i]=q[i].getUserData(j);
}for(var i=this.getSelection().length-1;i>=0;i--){if(!qx.lang.Array.contains(r,this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}this.fireDataEvent(h,this.getSelection());
},_addChangeTargetListener:function(m,n){if(this.__nC!=undefined&&n!=undefined){n.removeListenerById(this.__nC);
}if(this.__nD()){this.__nC=m.addListener(h,this.__nB,this);
}else if(this.__nE()){this.__nC=m.addListener(b,this.__nB,this);
}},_updateSelection:function(){this._startSelectionModification();
if(this.__nD()){this.getTarget().resetSelection();
for(var i=0;i<this.getSelection().length;i++){this.__nF(this.getSelection().getItem(i));
}var v=this.getTarget().getSelection();
var w=[];

for(var i=0;i<v.length;i++){w[i]=v[i].getUserData(j);
}for(var i=this.getSelection().length-1;i>=0;i--){if(!qx.lang.Array.contains(w,this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}}else if(this.__nE()){this.__nF(this.getSelection().getItem(this.getSelection().length-1));
}this._endSelectionModification();
},__nD:function(){var o=this.getTarget().constructor;
return qx.Class.implementsInterface(o,qx.ui.core.IMultiSelection);
},__nE:function(){var u=this.getTarget().constructor;
return u.classname==c;
},__nF:function(s){var t=this.getTarget().getSelectables();
for(var i=0;i<t.length;i++){if(t[i].getUserData(j)==s){if(this.__nD()){this.getTarget().addToSelection(t[i]);
}else if(this.__nE()){this.getTarget().setSelected(t[i]);
}return;
}}},_startSelectionModification:function(){this.__nz++;
},_endSelectionModification:function(){this.__nz>0?this.__nz--:null;
}}});
})();
(function(){var bb="model",ba="labelBindingId",Y="BindingId",X="String",W="iconBindingId",V="changeModel",U="_applyLabelOptions",T="_applyLabelPath",S="changeTarget",R="changeLength",bp="_applyModel",bo="change",bn="icon",bm="qx.data.controller.List",bl="_applyIconPath",bk="_applyDelegate",bj="changeDelegate",bi="_applyTarget",bh="]",bg="qx.data.IListData",be="model[",bf="label",bc="_applyIconOptions",bd=".";
qx.Class.define(bm,{extend:qx.core.Object,include:qx.data.controller.MSelection,construct:function(u,v,w){arguments.callee.base.call(this);
this.__nG=[];
this.__nH=[];
this.__nI={};

if(w!=null){this.setLabelPath(w);
}
if(u!=null){this.setModel(u);
}
if(v!=null){this.setTarget(v);
}},properties:{model:{check:bg,apply:bp,event:V,nullable:true},target:{apply:bi,event:S,nullable:true,init:null},labelPath:{check:X,apply:T,nullable:true},iconPath:{check:X,apply:bl,nullable:true},labelOptions:{apply:U,nullable:true},iconOptions:{apply:bc,nullable:true},delegate:{apply:bk,event:bj,init:null,nullable:true}},members:{update:function(){this.__nR();
this.__nM();
this.__nQ();
this._updateSelection();
},_applyDelegate:function(M,N){this._setConfigureItem(M,N);
this._setFilter(M,N);
this._setCreateItem(M,N);
this._setBindItem(M,N);
},_applyIconOptions:function(a,b){this.__nQ();
},_applyLabelOptions:function(by,bz){this.__nQ();
},_applyIconPath:function(bD,bE){this.__nQ();
},_applyLabelPath:function(bG,bH){this.__nQ();
},_applyModel:function(bq,br){if(br!=undefined){if(this.__nJ!=undefined){br.removeListenerById(this.__nJ);
}
if(this.__changeModelListenerId!=undefined){br.removeListenerById(this.__changeModelListenerId);
}}if(bq!=null){this.__nJ=bq.addListener(R,this.__nM,this);
this.__nK=bq.addListener(bo,this.__nL,this);
this.__nR();
this.__nM();
if(this.getTarget()!=null){var bt=this.getModel();
var bu=this.getTarget().getChildren();

for(var i=0,l=this.__nG.length;i<l;i++){var bv=bt.getItem(this.__nS(i));
var bs=bu[i];
bs.setUserData(bb,bv);
}}}if(this.getSelection()!=undefined&&this.getSelection().length>0){this.getSelection().splice(0,this.getSelection().length);
}},_applyTarget:function(bI,bJ){if(bJ!=undefined){bJ.removeAll();
this.removeAllBindings();
}
if(bI!=null){if(this.getModel()!=null){for(var i=0;i<this.__nG.length;i++){this.__nN(this.__nS(i));
}}this._addChangeTargetListener(bI,bJ);
}},__nL:function(){for(var i=this.getSelection().length-1;i>=0;i--){if(!this.getModel().contains(this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}this._updateSelection();
},__nM:function(){if(this.getTarget()==null){return;
}this.__nR();
var L=this.__nG.length;
var K=this.getTarget().getChildren().length;
if(L>K){for(var j=K;j<L;j++){this.__nN(this.__nS(j));
}}else if(L<K){for(var j=K;j>L;j--){this.__nO();
}}},_createItem:function(){var J=this.getDelegate();
if(J!=null&&J.createItem!=null){var I=J.createItem();
}else{var I=new qx.ui.form.ListItem();
}if(J!=null&&J.configureItem!=null){J.configureItem(I);
}return I;
},__nN:function(x){var y=this._createItem();
y.setUserData(bb,this.getModel().getItem(this.__nS(x)));
this._bindListItem(y,x);
this.getTarget().add(y);
},__nO:function(){this._startSelectionModification();
var P=this.getTarget().getChildren();
var O=P.length-1;
var Q=P[O];
this._removeBindingsFrom(Q);
this.getTarget().removeAt(O);
Q.destroy();
this.__nP=false;
this._endSelectionModification();
},_bindListItem:function(bA,bB){var bC=this.getDelegate();
if(bC!=null&&bC.bindItem!=null){bC.bindItem(this,bA,bB);
}else{this.bindProperty(this.getLabelPath(),bf,this.getLabelOptions(),bA,bB);
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),bn,this.getIconOptions(),bA,bB);
}}},bindProperty:function(f,g,h,k,m){k.setUserData(bb,this.getModel().getItem(m));
var h=qx.lang.Object.clone(h);

if(h!=null){this.__nI[g]=h.onSetOk;
delete h.onSetOk;
}else{h={};
this.__nI[g]=null;
}h.onSetOk=qx.lang.Function.bind(this._onBindingSet,this,m);
var n=be+m+bh;

if(f!=null){n+=bd+f;
}var o=this.bind(n,k,g,h);
k.setUserData(g+Y,o);
if(!qx.lang.Array.contains(this.__nH,g)){this.__nH.push(g);
}},_onBindingSet:function(E,F,G){for(var i=0;i<this.__nH.length;i++){if(this.__nI[this.__nH[i]]!=null){this.__nI[this.__nH[i]]();
}}var H=this.getModel().getItem(this.__nS(E));
G.setUserData(bb,H);
this._updateSelection();
},_removeBindingsFrom:function(p){for(var i=0;i<this.__nH.length;i++){var q=p.getUserData(this.__nH[i]+Y);

if(q!=null){this.removeBinding(q);
}}},__nQ:function(){if(this.getTarget()==null){return;
}var bF=this.getTarget().getChildren();
for(var i=0;i<bF.length;i++){this._removeBindingsFrom(bF[i]);
this._bindListItem(bF[i],this.__nS(i));
}},_setConfigureItem:function(r,s){if(r!=null&&r.configureItem!=null&&this.getTarget()!=null){var t=this.getTarget().getChildren();

for(var i=0;i<t.length;i++){r.configureItem(t[i]);
}}},_setBindItem:function(bw,bx){if(bw!=null&&bw.bindItem!=null){if(bx!=null&&bx.bindItem!=null&&bw.bindItem==bx.bindItem){return;
}this.__nQ();
}},_setCreateItem:function(z,A){if(this.getTarget()==null||this.getModel()==null){return;
}this._startSelectionModification();
var C=this.getTarget().getChildren();

for(var i=0,l=this.getTarget().length;i<l;i++){var B=C[i].getUserData(ba);
this.removeBinding(B);
B=C[i].getUserData(W);

if(B!=null){this.removeBinding(B);
}}this.getTarget().removeAll();
this.update();
this._endSelectionModification();
this._updateSelection();
},_setFilter:function(bK,bL){if(this.getTarget()==null||this.getModel()==null){return;
}this._startSelectionModification();
var bO=this.getTarget().getChildren();

for(var i=0,l=this.getTarget().length;i<l;i++){var bQ=bO[i].getUserData(ba);
this.removeBinding(bQ);
bQ=bO[i].getUserData(W);

if(bQ!=null){this.removeBinding(bQ);
}}var bN=this.__nG;
this.__nR();
if(bN.length>this.__nG.length){for(var j=bN.length;j>this.__nG.length;j--){this.getTarget().removeAt(j-1);
}}else if(bN.length<this.__nG.length){for(var j=bN.length;j<this.__nG.length;j++){var bP=this._createItem();
this.getTarget().add(bP);
}}var bM=this.getTarget().getChildren();

for(var i=0;i<bM.length;i++){this._bindListItem(bM[i],this.__nS(i));
}this._endSelectionModification();
this._updateSelection();
},__nR:function(){var d=this.getModel();

if(d==null){return;
}var e=this.getDelegate();

if(e!=null){var c=e.filter;
}this.__nG=[];

for(var i=0;i<d.length;i++){if(c==null||c(d.getItem(i))){this.__nG.push(i);
}}},__nS:function(D){return this.__nG[D];
}}});
})();
(function(){var I="qx.client",H="head",G="text/css",F="stylesheet",E="}",D='@import "',C="{",B='";',A="qx.bom.Stylesheet",z="link",y="style";
qx.Class.define(A,{statics:{includeFile:function(U,V){if(!V){V=document;
}var W=V.createElement(z);
W.type=G;
W.rel=F;
W.href=qx.util.ResourceManager.toUri(U);
var X=V.getElementsByTagName(H)[0];
X.appendChild(W);
},createElement:qx.core.Variant.select(I,{"mshtml":function(h){var j=document.createStyleSheet();

if(h){j.cssText=h;
}return j;
},"default":function(bf){var bg=document.createElement(y);
bg.type=G;

if(bf){bg.appendChild(document.createTextNode(bf));
}document.getElementsByTagName(H)[0].appendChild(bg);
return bg.sheet;
}}),addRule:qx.core.Variant.select(I,{"mshtml":function(s,t,u){s.addRule(t,u);
},"default":function(v,w,x){v.insertRule(w+C+x+E,v.cssRules.length);
}}),removeRule:qx.core.Variant.select(I,{"mshtml":function(d,e){var f=d.rules;
var g=f.length;

for(var i=g-1;i>=0;--i){if(f[i].selectorText==e){d.removeRule(i);
}}},"default":function(o,p){var q=o.cssRules;
var r=q.length;

for(var i=r-1;i>=0;--i){if(q[i].selectorText==p){o.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(I,{"mshtml":function(Y){var ba=Y.rules;
var bb=ba.length;

for(var i=bb-1;i>=0;i--){Y.removeRule(i);
}},"default":function(bc){var bd=bc.cssRules;
var be=bd.length;

for(var i=be-1;i>=0;i--){bc.deleteRule(i);
}}}),addImport:qx.core.Variant.select(I,{"mshtml":function(Q,R){Q.addImport(R);
},"default":function(S,T){S.insertRule(D+T+B,S.cssRules.length);
}}),removeImport:qx.core.Variant.select(I,{"mshtml":function(M,N){var O=M.imports;
var P=O.length;

for(var i=P-1;i>=0;i--){if(O[i].href==N){M.removeImport(i);
}}},"default":function(k,l){var m=k.cssRules;
var n=m.length;

for(var i=n-1;i>=0;i--){if(m[i].href==l){k.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(I,{"mshtml":function(a){var b=a.imports;
var c=b.length;

for(var i=c-1;i>=0;i--){a.removeImport(i);
}},"default":function(J){var K=J.cssRules;
var L=K.length;

for(var i=L-1;i>=0;i--){if(K[i].type==K[i].IMPORT_RULE){J.deleteRule(i);
}}}})}});
})();
(function(){var r="Unidentified",q="+",p="short",o="keydown",n="Control",m="-",l="PageUp",k="Escape",j="Boolean",h="qx.event.type.Data",X="_applyShortcut",W="PrintScreen",V="NumLock",U="5",T="8",S="execute",R="Meta",Q="0",P="PageDown",O="__iI",y="Shift",z="You can only specify one non modifier key!",w="3",x="/",u="Delete",v="String",s="changeEnabled",t="*",A="__iH",B="Not a valid key name for a command: ",G="6",F="4",I="Alt",H="2",K="Whitespaces are not allowed within shortcuts",J="_applyEnabled",D="1",N="7",M="qx.event.Command",L="a",C="z",E="9";
qx.Class.define(M,{extend:qx.core.Object,construct:function(bk){arguments.callee.base.call(this);
this.__iH={};
this.__iI=null;

if(bk!=null){this.setShortcut(bk);
}{};
this.initEnabled();
},events:{"execute":h},properties:{enabled:{init:true,check:j,event:s,apply:J},shortcut:{check:v,apply:X,nullable:true}},members:{execute:function(Y){this.fireDataEvent(S,Y);
},__iJ:function(event){if(this.getEnabled()&&this.matchesKeyEvent(event)){this.execute(event.getTarget());
event.preventDefault();
event.stopPropagation();
}},_applyEnabled:function(f,g){if(f){qx.event.Registration.addListener(document.documentElement,o,this.__iJ,this);
}else{qx.event.Registration.removeListener(document.documentElement,o,this.__iJ,this);
}},_applyShortcut:function(ba,bb){if(ba){if(ba.search(/[\s]+/)!=-1){var be=K;
this.error(be);
throw be;
}this.__iH={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__iI=null;
var bc;
var a=[];

while(ba.length>0&&bc!=-1){bc=ba.search(/[-+]+/);
a.push((ba.length==1||bc==-1)?ba:ba.substring(0,bc));
ba=ba.substring(bc+1);
}var bd=a.length;

for(var i=0;i<bd;i++){var bf=this.__iL(a[i]);

switch(bf){case n:case y:case R:case I:this.__iH[bf]=true;
break;
case r:var be=B+a[i];
this.error(be);
throw be;
default:if(this.__iI){var be=z;
this.error(be);
throw be;
}this.__iI=bf;
}}}return true;
},matchesKeyEvent:function(e){var bg=this.__iI;

if(!bg){return ;
}if((!this.__iH.Shift&&e.isShiftPressed())||(this.__iH.Shift&&!e.isShiftPressed())||(!this.__iH.Control&&e.isCtrlPressed())||(this.__iH.Control&&!e.isCtrlPressed())||(!this.__iH.Meta&&e.isMetaPressed())||(this.__iH.Meta&&!e.isMetaPressed())||(!this.__iH.Alt&&e.isAltPressed())||(this.__iH.Alt&&!e.isAltPressed())){return false;
}
if(bg==e.getKeyIdentifier()){return true;
}return false;
},__iK:{esc:k,ctrl:n,print:W,del:u,pageup:l,pagedown:P,numlock:V,numpad_0:Q,numpad_1:D,numpad_2:H,numpad_3:w,numpad_4:F,numpad_5:U,numpad_6:G,numpad_7:N,numpad_8:T,numpad_9:E,numpad_divide:x,numpad_multiply:t,numpad_minus:m,numpad_plus:q},__iL:function(b){var c=qx.event.handler.Keyboard;
var d=r;

if(c.isValidKeyIdentifier(b)){return b;
}
if(b.length==1&&b>=L&&b<=C){return b.toUpperCase();
}b=b.toLowerCase();
var d=this.__iK[b]||qx.lang.String.firstUp(b);

if(c.isValidKeyIdentifier(d)){return d;
}else{return r;
}},toString:function(){var bj=this.__iI;
var bi=[];

for(var bh in this.__iH){if(this.__iH[bh]){bi.push(qx.locale.Key.getKeyName(p,bh));
}}
if(bj){bi.push(qx.locale.Key.getKeyName(p,bj));
}return bi.join(q);
}},destruct:function(){this.setEnabled(false);
this._disposeFields(A,O);
}});
})();
(function(){var o="both",n="qx.ui.menu.Menu",m="_applySpacing",k="icon",j="label",h="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",e="toolbar",d="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:e},openMenu:{check:n,event:d,nullable:true},show:{init:o,check:[o,j,k],inheritable:true,event:h},spacing:{nullable:true,check:g,themeable:true,apply:m}},members:{_applySpacing:function(q,r){var s=this._getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSpacer:function(){var p=new qx.ui.core.Spacer;
this._add(p,{flex:1});
return p;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var b=this.getChildren();
var a=[];
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(c instanceof qx.ui.menubar.Button){a.push(c);
}else if(c instanceof qx.ui.toolbar.Part){a.push.apply(a,c.getMenuButtons());
}}return a;
}}});
})();
(function(){var t="reload",s="Add feed",r="removeFeed",q="Open preferences window.",p="Reload",o="Reload the feeds. (%1)",n="icon/22/actions/dialog-cancel.png",m="icon/22/actions/view-refresh.png",l=")",k="Remove feed",d="Preferences",j="icon/22/actions/dialog-ok.png",g="preferences",c="icon/22/apps/preferences-theme.png",b="icon/22/actions/help-about.png",f="feedreader.view.ToolBar",e="about",h="Help",a="addFeed",i="(";
qx.Class.define(f,{extend:qx.ui.toolbar.ToolBar,construct:function(u){arguments.callee.base.call(this);
var B=new qx.ui.toolbar.Part;
this.add(B);
var C=new qx.ui.toolbar.Button(this.tr(s),j);
C.setCommand(u.getCommand(a));
B.add(C);
this._removeBtn=new qx.ui.toolbar.Button(this.tr(k),n);
this._removeBtn.setCommand(u.getCommand(r));
this._removeBtn.setEnabled(false);
B.add(this._removeBtn);
B.addSeparator();
var x=new qx.ui.toolbar.Button(this.tr(p),m);
var y=u.getCommand(t);
x.setCommand(y);
x.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(o,y.toString())));
B.add(x);
B.addSeparator();
var w=new qx.ui.toolbar.Button(this.tr(d),c);
w.setCommand(u.getCommand(g));
w.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(q)));
B.add(w);
this.addSpacer();
var A=new qx.ui.toolbar.Part;
this.add(A);
var z=new qx.ui.toolbar.Button(this.tr(h),b);
var v=u.getCommand(e);
z.setCommand(v);
z.setToolTip(new qx.ui.tooltip.ToolTip(i+v.toString()+l));
A.add(z);
},members:{getRemoveButton:function(){return this._removeBtn;
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
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var k="Lucida Grande",j="Liberation Sans",i="Arial",h="Tahoma",g="Candara",f="Segoe UI",e="Consolas",d="monospace",c="Courier New",b="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i]},"bold":{size:qx.bom.client.System.WINVISTA?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i],bold:true},"small":{size:qx.bom.client.System.WINVISTA?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[f,g]:[h,j,i]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[k]:qx.bom.client.System.WINVISTA?[e]:[e,a,c,d]}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,resource:b,icons:{}});
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
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var r="focusout",q="interval",p="mouseover",o="mousemove",n="mouseout",m="__ju",l="qx.ui.tooltip.ToolTip",k="__jt",j="_applyCurrent",i="qx.ui.tooltip.Manager",g="__jv",h="singleton";
qx.Class.define(i,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,p,this.__jz,this,true);
this.__jt=new qx.event.Timer();
this.__jt.addListener(q,this.__jw,this);
this.__ju=new qx.event.Timer();
this.__ju.addListener(q,this.__jx,this);
this.__jv={left:0,top:0};
},properties:{current:{check:l,nullable:true,apply:j}},members:{__jv:null,__ju:null,__jt:null,_applyCurrent:function(x,y){if(y&&qx.ui.core.Widget.contains(y,x)){return;
}if(y){y.exclude();
this.__jt.stop();
this.__ju.stop();
}var A=qx.event.Registration;
var z=document.body;
if(x){this.__jt.startWith(x.getShowTimeout());
A.addListener(z,n,this.__jA,this,true);
A.addListener(z,r,this.__jB,this,true);
A.addListener(z,o,this.__jy,this,true);
}else{A.removeListener(z,n,this.__jA,this,true);
A.removeListener(z,r,this.__jB,this,true);
A.removeListener(z,o,this.__jy,this,true);
}},__jw:function(e){var v=this.getCurrent();

if(v){this.__ju.startWith(v.getHideTimeout());
v.placeToPoint(this.__jv);
v.show();
}this.__jt.stop();
},__jx:function(e){var u=this.getCurrent();

if(u){u.exclude();
}this.__ju.stop();
this.resetCurrent();
},__jy:function(e){var w=this.__jv;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__jz:function(e){var d=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!d){return;
}var f;
while(d!=null){var f=d.getToolTip();

if(f){break;
}d=d.getLayoutParent();
}if(f){this.setCurrent(f);
}},__jA:function(e){var a=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!a){return;
}var b=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!b){return;
}var c=this.getCurrent();
if(c&&(b==c||qx.ui.core.Widget.contains(c,b))){return;
}if(b&&a&&qx.ui.core.Widget.contains(a,b)){return;
}if(c&&!b){this.setCurrent(null);
}else{this.resetCurrent();
}},__jB:function(e){var s=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!s){return;
}var t=this.getCurrent();
if(t&&t==s.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,p,this.__jz,this,true);
this._disposeObjects(k,m);
this._disposeFields(g);
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
(function(){var H="Boolean",G="qx.event.type.Event",F="queued",E="String",D="sending",C="qx.io.remote.Response",B="receiving",A="aborted",z="failed",y="nocache",bq="completed",bp="POST",bo="configured",bn="timeout",bm="GET",bl="Pragma",bk="no-url-params-on-post",bj="no-cache",bi="Cache-Control",bh="Content-Type",O="text/plain",P="application/xml",M="application/json",N="text/html",K="application/x-www-form-urlencoded",L="qx.io.remote.Exchange",I="Integer",J="X-Qooxdoo-Response-Type",Q="HEAD",R="qx.io.remote.Request",Y="__kR",W="__kS",bb="_applyResponseType",ba="_applyState",bd="text/javascript",bc="__kT",T="changeState",bg="PUT",bf="_applyProhibitCaching",be="",S="_applyMethod",U="DELETE",V="boolean",X="__kQ";
qx.Class.define(R,{extend:qx.core.Object,construct:function(g,h,i){arguments.callee.base.call(this);
this.__kQ={};
this.__kR={};
this.__kS={};
this.__kT={};

if(g!==undefined){this.setUrl(g);
}
if(h!==undefined){this.setMethod(h);
}
if(i!==undefined){this.setResponseType(i);
}this.setProhibitCaching(true);
this.__kU=++qx.io.remote.Request.__kU;
},events:{"created":G,"configured":G,"sending":G,"receiving":G,"completed":C,"aborted":C,"failed":C,"timeout":C},statics:{__kU:0},properties:{url:{check:E,init:be},method:{check:[bm,bp,bg,Q,U],apply:S,init:bm},asynchronous:{check:H,init:true},data:{check:E,nullable:true},username:{check:E,nullable:true},password:{check:E,nullable:true},state:{check:[bo,F,D,B,bq,A,bn,z],init:bo,apply:ba,event:T},responseType:{check:[O,bd,M,P,N],init:O,apply:bb},timeout:{check:I,nullable:true},prohibitCaching:{check:function(v){return typeof v==V||v===bk;
},init:true,apply:bf},crossDomain:{check:H,init:false},fileUpload:{check:H,init:false},transport:{check:L,nullable:true},useBasicHttpAuth:{check:H,init:false}},members:{__kQ:null,__kR:null,__kS:null,__kT:null,__kU:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case D:case B:this.error("Aborting already sent request!");
case F:this.abort();
break;
}},isConfigured:function(){return this.getState()===bo;
},isQueued:function(){return this.getState()===F;
},isSending:function(){return this.getState()===D;
},isReceiving:function(){return this.getState()===B;
},isCompleted:function(){return this.getState()===bq;
},isAborted:function(){return this.getState()===A;
},isTimeout:function(){return this.getState()===bn;
},isFailed:function(){return this.getState()===z;
},__kV:function(e){var t=e.clone();
t.setTarget(this);
this.dispatchEvent(t);
},_onqueued:function(e){this.setState(F);
this.__kV(e);
},_onsending:function(e){this.setState(D);
this.__kV(e);
},_onreceiving:function(e){this.setState(B);
this.__kV(e);
},_oncompleted:function(e){this.setState(bq);
this.__kV(e);
this.dispose();
},_onaborted:function(e){this.setState(A);
this.__kV(e);
this.dispose();
},_ontimeout:function(e){this.setState(bn);
this.__kV(e);
this.dispose();
},_onfailed:function(e){this.setState(z);
this.__kV(e);
this.dispose();
},_applyState:function(bv,bw){{};
},_applyProhibitCaching:function(q,r){if(!q){this.removeParameter(y);
this.removeRequestHeader(bl);
this.removeRequestHeader(bi);
return;
}if(q!==bk||this.getMethod()!=bp){this.setParameter(y,new Date().valueOf());
}else{this.removeParameter(y);
}this.setRequestHeader(bl,bj);
this.setRequestHeader(bi,bj);
},_applyMethod:function(u,w){if(u===bp){this.setRequestHeader(bh,K);
}else{this.removeRequestHeader(bh);
}var x=this.getProhibitCaching();
this._applyProhibitCaching(x,x);
},_applyResponseType:function(bt,bu){this.setRequestHeader(J,bt);
},setRequestHeader:function(d,f){this.__kQ[d]=f;
},removeRequestHeader:function(c){delete this.__kQ[c];
},getRequestHeader:function(s){return this.__kQ[s]||null;
},getRequestHeaders:function(){return this.__kQ;
},setParameter:function(n,o,p){if(p){this.__kS[n]=o;
}else{this.__kR[n]=o;
}},removeParameter:function(l,m){if(m){delete this.__kS[l];
}else{delete this.__kR[l];
}},getParameter:function(br,bs){if(bs){return this.__kS[br]||null;
}else{return this.__kR[br]||null;
}},getParameters:function(j){return (j?this.__kS:this.__kR);
},setFormField:function(a,b){this.__kT[a]=b;
},removeFormField:function(bx){delete this.__kT[bx];
},getFormField:function(k){return this.__kT[k]||null;
},getFormFields:function(){return this.__kT;
},getSequenceNumber:function(){return this.__kU;
}},destruct:function(){this.setTransport(null);
this._disposeFields(X,Y,W,bc);
}});
})();
(function(){var b="qx.ui.core.Spacer";
qx.Class.define(b,{extend:qx.ui.core.LayoutItem,construct:function(c,d){arguments.callee.base.call(this);
this.setWidth(c!=null?c:0);
this.setHeight(d!=null?d:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(a){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var y="_applyLayoutChange",x="left",w="top",v="Decorator",u="Integer",t="x",s="y",r="auto",q="qx.ui.layout.Dock",p="_applySort",h="west",o="__pb",l="north",g="south",f="__pa",k="center",j="east",m="Boolean",e="bottom",n="right";
qx.Class.define(q,{extend:qx.ui.layout.Abstract,construct:function(a,b,c,d){arguments.callee.base.call(this);

if(a){this.setSpacingX(a);
}
if(b){this.setSpacingY(b);
}
if(c){this.setSeparatorX(c);
}
if(d){this.setSeparatorY(d);
}},properties:{sort:{check:[r,s,t],init:r,apply:p},separatorX:{check:v,nullable:true,apply:y},separatorY:{check:v,nullable:true,apply:y},connectSeparators:{check:m,init:false,apply:y},spacingX:{check:u,init:0,apply:y},spacingY:{check:u,init:0,apply:y}},members:{__pa:null,__pb:null,verifyLayoutProperty:null,_applySort:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__pc:{north:1,south:2,west:3,east:4,center:5},__pd:{1:w,2:e,3:x,4:n},__pe:function(){var z=this._getLayoutChildren();
var H,B;
var length=z.length;
var D=[];
var G=[];
var E=[];
var A=this.getSort()===s;
var F=this.getSort()===t;

for(var i=0;i<length;i++){H=z[i];
E=H.getLayoutProperties().edge;

if(E===k){if(B){throw new Error("It is not allowed to have more than one child aligned to 'center'!");
}B=H;
}else if(F||A){if(E===l||E===g){A?D.push(H):G.push(H);
}else if(E===h||E===j){A?G.push(H):D.push(H);
}}else{D.push(H);
}}var I=D.concat(G);

if(B){I.push(B);
}this.__pa=I;
var C=[];

for(var i=0;i<length;i++){E=I[i].getLayoutProperties().edge;
C[i]=this.__pc[E]||5;
}this.__pb=C;
delete this._invalidChildrenCache;
},renderLayout:function(bh,bi){if(this._invalidChildrenCache){this.__pe();
}var bB=qx.ui.layout.Util;
var bo=this.__pa;
var bC=this.__pb;
var length=bo.length;
var br,bk,bq,bw,bx,bH,bu,bl,bE;
var bL=[];
var bt=[];
var bK=this._getSeparatorWidths();
var bP=this.getSpacingX();
var bO=this.getSpacingY();
var bp=-bP;
var bD=-bO;

if(bK.x){bp-=bK.x+bP;
}
if(bK.y){bD-=bK.y+bO;
}
for(var i=0;i<length;i++){bk=bo[i];
bw=bk.getLayoutProperties();
bq=bk.getSizeHint();
bu=bq.width;
bl=bq.height;

if(bw.width!=null){bu=Math.floor(bh*parseFloat(bw.width)/100);

if(bu<bq.minWidth){bu=bq.minWidth;
}else if(bu>bq.maxWidth){bu=bq.maxWidth;
}}
if(bw.height!=null){bl=Math.floor(bi*parseFloat(bw.height)/100);

if(bl<bq.minHeight){bl=bq.minHeight;
}else if(bl>bq.maxHeight){bl=bq.maxHeight;
}}bL[i]=bu;
bt[i]=bl;
switch(bC[i]){case 1:case 2:bD+=bl+bk.getMarginTop()+bk.getMarginBottom()+bO;

if(bK.y){bD+=bK.y+bO;
}break;
case 3:case 4:bp+=bu+bk.getMarginLeft()+bk.getMarginRight()+bP;

if(bK.x){bp+=bK.x+bP;
}break;
default:bp+=bu+bk.getMarginLeft()+bk.getMarginRight()+bP;
bD+=bl+bk.getMarginTop()+bk.getMarginBottom()+bO;

if(bK.x){bp+=bK.x+bP;
}
if(bK.y){bD+=bK.y+bO;
}}}if(bp!=bh){br={};
bH=bp<bh;

for(var i=0;i<length;i++){bk=bo[i];

switch(bC[i]){case 3:case 4:case 5:bx=bk.getLayoutProperties().flex;
if(bx==null&&bC[i]==5){bx=1;
}
if(bx>0){bq=bk.getSizeHint();
br[i]={min:bq.minWidth,value:bL[i],max:bq.maxWidth,flex:bx};
}}}var bm=bB.computeFlexOffsets(br,bh,bp);

for(var i in bm){bE=bm[i].offset;
bL[i]+=bE;
bp+=bE;
}}if(bD!=bi){br=[];
bH=bD<bi;

for(var i=0;i<length;i++){bk=bo[i];

switch(bC[i]){case 1:case 2:case 5:bx=bk.getLayoutProperties().flex;
if(bx==null&&bC[i]==5){bx=1;
}
if(bx>0){bq=bk.getSizeHint();
br[i]={min:bq.minHeight,value:bt[i],max:bq.maxHeight,flex:bx};
}}}var bm=bB.computeFlexOffsets(br,bi,bD);

for(var i in bm){bE=bm[i].offset;
bt[i]+=bE;
bD+=bE;
}}this._clearSeparators();
var bI=this.getSeparatorX(),bJ=this.getSeparatorY();
var bM=this.getConnectSeparators();
var bz=0,bG=0;
var bT,top,bu,bl,by,bQ;
var bA,bN,bS,bj;
var bR,bs,bv,bn;
var bF=this.__pd;

for(var i=0;i<length;i++){bk=bo[i];
bQ=bC[i];
bq=bk.getSizeHint();
bR=bk.getMarginTop();
bs=bk.getMarginBottom();
bv=bk.getMarginLeft();
bn=bk.getMarginRight();
switch(bQ){case 1:case 2:bu=bh-bv-bn;
if(bu<bq.minWidth){bu=bq.minWidth;
}else if(bu>bq.maxWidth){bu=bq.maxWidth;
}bl=bt[i];
top=bz+bB.computeVerticalAlignOffset(bF[bQ],bl,bi,bR,bs);
bT=bG+bB.computeHorizontalAlignOffset(bk.getAlignX()||x,bu,bh,bv,bn);
if(bK.y){if(bQ==1){bN=bz+bl+bR+bO+bs;
}else{bN=bz+bi-bl-bR-bO-bs-bK.y;
}bA=bT;
bS=bh;

if(bM&&bA>0){bA-=bP+bv;
bS+=(bP)*2;
}else{bA-=bv;
}this._renderSeparator(bJ,{left:bA,top:bN,width:bS,height:bK.y});
}by=bl+bR+bs+bO;

if(bK.y){by+=bK.y+bO;
}bi-=by;
if(bQ==1){bz+=by;
}break;
case 3:case 4:bl=bi-bR-bs;
if(bl<bq.minHeight){bl=bq.minHeight;
}else if(bl>bq.maxHeight){bl=bq.maxHeight;
}bu=bL[i];
bT=bG+bB.computeHorizontalAlignOffset(bF[bQ],bu,bh,bv,bn);
top=bz+bB.computeVerticalAlignOffset(bk.getAlignY()||w,bl,bi,bR,bs);
if(bK.x){if(bQ==3){bA=bG+bu+bv+bP+bn;
}else{bA=bG+bh-bu-bv-bP-bn-bK.x;
}bN=top;
bj=bi;

if(bM&&bN>0){bN-=bO+bR;
bj+=(bO)*2;
}else{bN-=bR;
}this._renderSeparator(bI,{left:bA,top:bN,width:bK.x,height:bj});
}by=bu+bv+bn+bP;

if(bK.x){by+=bK.x+bP;
}bh-=by;
if(bQ==3){bG+=by;
}break;
default:bu=bh-bv-bn;
bl=bi-bR-bs;
if(bu<bq.minWidth){bu=bq.minWidth;
}else if(bu>bq.maxWidth){bu=bq.maxWidth;
}if(bl<bq.minHeight){bl=bq.minHeight;
}else if(bl>bq.maxHeight){bl=bq.maxHeight;
}bT=bG+bB.computeHorizontalAlignOffset(bk.getAlignX()||x,bu,bh,bv,bn);
top=bz+bB.computeVerticalAlignOffset(bk.getAlignY()||w,bl,bi,bR,bs);
}bk.renderLayout(bT,top,bu,bl);
}},_getSeparatorWidths:function(){var bV=this.getSeparatorX(),bU=this.getSeparatorY();

if(bV||bU){var cb=qx.theme.manager.Decoration.getInstance();
}
if(bV){var cc=cb.resolve(bV);
var bX=cc.getInsets();
var bY=bX.left+bX.right;
}
if(bU){var cd=cb.resolve(bU);
var bW=cd.getInsets();
var ca=bW.top+bW.bottom;
}return {x:bY||0,y:ca||0};
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__pe();
}var M=this.__pa;
var W=this.__pb;
var length=M.length;
var Q,X;
var S,R;
var T=0,bf=0;
var J=0,ba=0;
var U=0,be=0;
var K=0,Y=0;
var bb=this._getSeparatorWidths();
var bd=this.getSpacingX(),bc=this.getSpacingY();
var O=-bd,N=-bc;

if(bb.x){O-=bb.x+bd;
}
if(bb.y){N-=bb.y+bc;
}for(var i=0;i<length;i++){X=M[i];
Q=X.getSizeHint();
S=X.getMarginLeft()+X.getMarginRight();
R=X.getMarginTop()+X.getMarginBottom();
switch(W[i]){case 1:case 2:U=Math.max(U,Q.width+T+S);
be=Math.max(be,Q.minWidth+bf+S);
K+=Q.height+R;
Y+=Q.minHeight+R;
N+=bc;

if(bb.y){N+=bb.y+bc;
}break;
case 3:case 4:J=Math.max(J,Q.height+K+R);
ba=Math.max(ba,Q.minHeight+Y+R);
T+=Q.width+S;
bf+=Q.minWidth+S;
O+=bd;

if(bb.x){O+=bb.x+bd;
}break;
default:T+=Q.width+S;
bf+=Q.minWidth+S;
K+=Q.height+R;
Y+=Q.minHeight+R;
O+=bd;

if(bb.x){O+=bb.x+bd;
}N+=bc;

if(bb.y){N+=bb.y+bc;
}}}var P=Math.max(bf,be)+O;
var bg=Math.max(T,U)+O;
var V=Math.max(ba,Y)+N;
var L=Math.max(J,K)+N;
return {minWidth:P,width:bg,minHeight:V,height:L};
}},destruct:function(){this._disposeFields(o,f);
}});
})();
(function(){var C="model",B="get",A="String",z="changeModel",y="_applyDelegate",x="qx.core.Object",w="_applyLabelPath",v="icon",u="change",t="label",n="_applyTarget",s="changeTarget",q="_applyIconPath",m="_applyLabelOptions",l="_applyChildPath",p="_applyIconOptions",o="qx.data.controller.Tree",r="_applyModel";
qx.Class.define(o,{extend:qx.core.Object,include:qx.data.controller.MSelection,construct:function(D,E,F,G){arguments.callee.base.call(this);
this.__oj={};
this.__ok=[];
this.__ol={};

if(F!=null){this.setChildPath(F);
}
if(G!=null){this.setLabelPath(G);
}
if(D!=null){this.setModel(D);
}
if(E!=null){this.setTarget(E);
}},properties:{model:{check:x,apply:r,event:z,nullable:true},target:{apply:n,event:s,init:null},childPath:{check:A,apply:l,nullable:true},labelPath:{check:A,apply:w,nullable:true},iconPath:{check:A,apply:q,nullable:true},labelOptions:{apply:m,nullable:true},iconOptions:{apply:p,nullable:true},delegate:{apply:y,init:null,nullable:true}},members:{_applyDelegate:function(bJ,bK){this._setConfigureItem(bJ,bK);
this._setCreateItem(bJ,bK);
this._setBindItem(bJ,bK);
},_applyIconOptions:function(bH,bI){this.__os();
},_applyLabelOptions:function(bv,bw){this.__os();
},_applyTarget:function(bE,bF){if(bF!=undefined){var bG=bF.getRoot();
bF.setRoot(null);
bG.destroy();
}if(this.getModel()!=null){this.__on();
}this._addChangeTargetListener(bE,bF);
},_applyModel:function(bC,bD){this.__on();
},_applyChildPath:function(I,J){this.__on();
},_applyIconPath:function(bg,bh){this.__os();
},_applyLabelPath:function(bx,by){this.__os();
},__om:function(c){var e=c.getTarget();
var d=this.__ol[e.toHashCode()].treeNode;
var f=this.__ol[e.toHashCode()].modelNode;
this.__oo(d,f);
this._updateSelection();
},_createItem:function(){var bf=this.getDelegate();
if(bf!=null&&bf.createItem!=null){var be=bf.createItem();
}else{var be=new qx.ui.tree.TreeFolder();
}if(bf!=null&&bf.configureItem!=null){bf.configureItem(be);
}return be;
},__on:function(){if(this.getTarget()==null||this.getChildPath()==null){return;
}if((this.getLabelPath()==null&&this.getDelegate()==null)||(this.getLabelPath()==null&&this.getDelegate()!=null&&this.getDelegate().bindItem==null)){return;
}var bt=this.getTarget().getRoot();

if(bt!=null){bt.destroy();
}var bu=this._createItem();
bu.setUserData(C,this.getModel());
this.getTarget().setRoot(bu);
this.__ot(this.getModel(),bu);
this.__oo(bu,this.getModel());
},__oo:function(M,N){if(N[B+qx.lang.String.firstUp(this.getChildPath())]==undefined){return;
}var T=N[B+qx.lang.String.firstUp(this.getChildPath())]();
if(this.__ol[T.toHashCode()]==undefined){var R=T.addListener(u,this.__om,this);
this.__ol[T.toHashCode()]={modelNode:N,treeNode:M,changeListenerId:R};
}for(var i=0;i<T.length;i++){if(M.getChildren()[i]==null||T.getItem(i)!=M.getChildren()[i].getUserData(C)){for(var j=i;j<M.getChildren().length;j++){if(M.getChildren()[j].getUserData(C)===T.getItem(i)){var O=j;
break;
}}if(O!=undefined){var P=M.getChildren()[O];
if(this.getTarget().isSelected(P)){var U=true;
}M.removeAt(O);
M.addAt(P,i);
if(U){this.getTarget().addToSelection(P);
}}else{var S=this._createItem();
S.setUserData(C,T.getItem(i));
M.addAt(S,i);
this.__ot(T.getItem(i),S);
this.__oo(S,T.getItem(i));
}}}for(var i=M.getChildren().length-1;i>=T.length;i--){var Q=M.getChildren()[i];
this.__or(Q,M);
}},__op:function(){if(this.getTarget()==null){return;
}var H=this.getTarget().getRoot();

if(H!=null){this.getTarget().setRoot(null);
this.__oq(H);
this.__ou(H.getUserData(C));
H.destroy();
}},__oq:function(bi){var bj=bi.getChildren();
for(var i=bj.length-1;i>=0;i--){if(bj[i].getChildren().length>0){this.__oq(bj[i]);
}this.__or(bj[i],bi);
}},__or:function(g,h){var k=g.getUserData(C);
if(k[B+qx.lang.String.firstUp(this.getChildPath())]!=undefined){delete this.__ol[k[B+qx.lang.String.firstUp(this.getChildPath())]().toHashCode()];
}this.__ou(k);
h.remove(g);
g.destroy();
},bindProperty:function(bk,bl,bm,bn,bo){var bp=bo.bind(bk,bn,bl,bm);
if(this.__oj[bl]==null){this.__oj[bl]={};
}this.__oj[bl][bo.toHashCode()]={id:bp,treeNode:bn};
if(!qx.lang.Array.contains(this.__ok,bl)){this.__ok.push(bl);
}},__os:function(){var ba;

for(var bc in this.__oj){ba=bc;
break;
}for(var Y in this.__oj[ba]){var bd=this.__oj[ba][Y].treeNode;
var bb=qx.core.ObjectRegistry.fromHashCode(Y);
this.__ou(bb);
this.__ot(bb,bd);
}},__ot:function(V,W){var X=this.getDelegate();
if(X!=null&&X.bindItem!=null){X.bindItem(this,W,V);
}else{this.bindProperty(this.getLabelPath(),t,this.getLabelOptions(),W,V);
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),v,this.getIconOptions(),W,V);
}}},__ou:function(bz){for(var i=0;i<this.__ok.length;i++){var bB=this.__ok[i];
var bA=this.__oj[bB][bz.toHashCode()];

if(bA!=null){bz.removeBinding(bA.id);
delete this.__oj[bB][bz.toHashCode()];
}}},_setConfigureItem:function(bq,br){if(bq!=null&&bq.configureItem!=null&&this.getTarget()!=null){var bs=this.getTarget().getRoot().getItems(true,true,false);

for(var i=0;i<bs.length;i++){bq.configureItem(bs[i]);
}}},_setCreateItem:function(K,L){if(this.getTarget()==null||this.getModel()==null){return;
}
if(L&&L.createItem&&K&&K.createItem&&L.createItem==K.createTtem){return;
}this._startSelectionModification();
this.__op();
this.__on();
this._endSelectionModification();
this._updateSelection();
},_setBindItem:function(a,b){if(a!=null&&a.bindItem!=null){if(b!=null&&b.bindItem!=null&&a.bindItem==b.bindItem){return;
}this.__os();
}}}});
})();
(function(){var o="mousedown",n="blur",m="__jq",l="singleton",k="qx.ui.popup.Manager";
qx.Class.define(k,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jq={};
var p=qx.core.Init.getApplication().getRoot();
p.addListener(o,this.__js,this,true);
qx.bom.Element.addListener(window,n,this.hideAll,this);
},members:{__jq:null,add:function(c){{};
this.__jq[c.$$hash]=c;
this.__jr();
},remove:function(a){{};
var b=this.__jq;

if(b){delete b[a.$$hash];
this.__jr();
}},hideAll:function(){var f=this.__jq;

if(f){for(var d in f){f[d].exclude();
}}},__jr:function(){var s=1e7;
var r=this.__jq;

for(var q in r){r[q].setZIndex(s++);
}},__js:function(e){var i=e.getTarget();
var j=this.__jq;

for(var h in j){var g=j[h];

if(!g.getAutoHide()||i==g||qx.ui.core.Widget.contains(g,i)){continue;
}g.exclude();
}}},destruct:function(){var t=qx.core.Init.getApplication().getRoot();

if(t){t.removeListener(o,this.__js,this,true);
}this._disposeMap(m);
}});
})();
(function(){var o="_",n="thu",m="sat",l="cldr_day_",k="cldr_month_",j="wed",h="fri",g="tue",f="mon",e="sun",E="short",D="HH:mm",C="HHmmsszz",B="HHmm",A="HHmmss",z="cldr_date_format_",y="HH:mm:ss zz",x="full",w="cldr_pm",v="long",t="medium",u="cldr_am",r="qx.locale.Date",s="cldr_date_time_format_",p="cldr_time_format_",q="HH:mm:ss";
qx.Class.define(r,{statics:{__mx:qx.locale.Manager.getInstance(),getAmMarker:function(Q){return this.__mx.localize(u,[],Q);
},getPmMarker:function(L){return this.__mx.localize(w,[],L);
},getDayNames:function(length,M){{};
var N=[e,f,g,j,n,h,m];
var P=[];

for(var i=0;i<N.length;i++){var O=l+length+o+N[i];
P.push(this.__mx.localize(O,[],M));
}return P;
},getDayName:function(length,W,X){{};
var Y=[e,f,g,j,n,h,m];
var ba=l+length+o+Y[W];
return this.__mx.localize(ba,[],X);
},getMonthNames:function(length,I){{};
var J=[];

for(var i=0;i<12;i++){var K=k+length+o+(i+1);
J.push(this.__mx.localize(K,[],I));
}return J;
},getMonthName:function(length,bk,bl){{};
var bm=k+length+o+(bk+1);
return this.__mx.localize(bm,[],bl);
},getDateFormat:function(bn,bo){{};
var bp=z+bn;
return this.__mx.localize(bp,[],bo);
},getDateTimeFormat:function(bb,bc,bd){var bf=s+bb;
var be=this.__mx.localize(bf,[],bd);

if(be==bf){be=bc;
}return be;
},getTimeFormat:function(bg,bh){{};
var bj=p+bg;
var bi=this.__mx.localize(bj,[],bh);

if(bi!=bj){return bi;
}
switch(bg){case E:case t:return qx.locale.Date.getDateTimeFormat(B,D);
case v:return qx.locale.Date.getDateTimeFormat(A,q);
case x:return qx.locale.Date.getDateTimeFormat(C,y);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(F){var G={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var H=qx.locale.Date._getTerritory(F);
return G[H]!=null?G[H]:1;
},getWeekendStart:function(bq){var bs={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var br=qx.locale.Date._getTerritory(bq);
return bs[br]!=null?bs[br]:6;
},getWeekendEnd:function(T){var U={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var V=qx.locale.Date._getTerritory(T);
return U[V]!=null?U[V]:0;
},isWeekend:function(a,b){var d=qx.locale.Date.getWeekendStart(b);
var c=qx.locale.Date.getWeekendEnd(b);

if(c>d){return ((a>=d)&&(a<=c));
}else{return ((a>=d)||(a<=c));
}},_getTerritory:function(R){if(R){var S=R.split(o)[1]||R;
}else{S=this.__mx.getTerritory()||this.__mx.getLanguage();
}return S.toUpperCase();
}}});
})();
(function(){var n="separator-vertical",m="background-medium",l="Posts",k="bold",j="_list",i="_applyLoading",h="center",g="feedreader.view.List",f="single",e="_stack",b="middle",d="_listLoadImage",c="feedreader/images/loading66.gif",a="Boolean";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
var r=new qx.ui.layout.VBox();
r.setSeparator(n);
this._setLayout(r);
var s=new qx.ui.basic.Label(this.tr(l));
s.setBackgroundColor(m);
s.setPadding(5);
s.setAllowGrowX(true);
s.setFont(k);
this._add(s);
this._stack=new qx.ui.container.Stack();
this._add(this._stack,{flex:1});
this._list=new qx.ui.form.List();
this._list.setDecorator(null);
this._list.setSelectionMode(f);
this._stack.add(this._list);
this._listLoadImage=new qx.ui.container.Composite(new qx.ui.layout.HBox(0,h));
var q=new qx.ui.basic.Image(c);
q.setAlignY(b);
this._listLoadImage.add(q);
this._stack.add(this._listLoadImage);
},properties:{loading:{check:a,init:false,apply:i}},members:{_applyLoading:function(o,p){if(o){this._stack.setSelected(this._listLoadImage);
}else{this._stack.setSelected(this._list);
}},getList:function(){return this._list;
}},destruct:function(){this._disposeObjects(j,e,d);
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
(function(){var n="completed",m="failed",k="=",j="aborted",h="",g="&",f="timeout",e="application/xml",d="qx.io.remote.transport.XmlHttp",c="application/json",K="text/html",J="qx.client",I="receiving",H="text/plain",G="text/javascript",F="sending",E="configured",D="?",C="created",B='Referer',v='Basic ',w="\n</pre>",t="string",u='Authorization',q="<pre>Could not execute json: \n",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=':',p="parseerror",x="file:",y="webkit",A="__lc",z="object";
qx.Class.define(d,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
this.__lc=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__lc.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[H,G,c,e,K]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(J,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
},__ld:function(){}},members:{__le:false,__lf:0,__lc:null,getRequest:function(){return this.__lc;
},send:function(){this.__lf=0;
var R=this.getRequest();
var N=this.getMethod();
var U=this.getAsynchronous();
var T=this.getUrl();
var P=(window.location.protocol===x&&!(/^http(s){0,1}\:/.test(T)));
this.__le=P;
var X=this.getParameters(false);
var V=[];

for(var O in X){var S=X[O];

if(S instanceof Array){for(var i=0;i<S.length;i++){V.push(encodeURIComponent(O)+k+encodeURIComponent(S[i]));
}}else{V.push(encodeURIComponent(O)+k+encodeURIComponent(S));
}}
if(V.length>0){T+=(T.indexOf(D)>=0?g:D)+V.join(g);
}if(this.getData()===null){var X=this.getParameters(true);
var V=[];

for(var O in X){var S=X[O];

if(S instanceof Array){for(var i=0;i<S.length;i++){V.push(encodeURIComponent(O)+k+encodeURIComponent(S[i]));
}}else{V.push(encodeURIComponent(O)+k+encodeURIComponent(S));
}}
if(V.length>0){this.setData(V.join(g));
}}var W=function(br){var bw=r;
var bA=h;
var bu,bt,bs;
var bx,by,bz,bv;
var i=0;

do{bu=br.charCodeAt(i++);
bt=br.charCodeAt(i++);
bs=br.charCodeAt(i++);
bx=bu>>2;
by=((bu&3)<<4)|(bt>>4);
bz=((bt&15)<<2)|(bs>>6);
bv=bs&63;

if(isNaN(bt)){bz=bv=64;
}else if(isNaN(bs)){bv=64;
}bA+=bw.charAt(bx)+bw.charAt(by)+bw.charAt(bz)+bw.charAt(bv);
}while(i<br.length);
return bA;
};
R.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){R.open(N,T,U);
R.setRequestHeader(u,v+W(this.getUsername()+o+this.getPassword()));
}else{R.open(N,T,U,this.getUsername(),this.getPassword());
}}else{R.open(N,T,U);
}}catch(bl){this.error("Failed with exception: "+bl);
this.failed();
return;
}if(!qx.core.Variant.isSet(J,y)){R.setRequestHeader(B,window.location.href);
}var Q=this.getRequestHeaders();

for(var O in Q){R.setRequestHeader(O,Q[O]);
}try{{};
R.send(this.getData());
}catch(bh){if(P){this.failedLocally();
}else{this.error("Failed to send data: "+bh,"send");
this.failed();
}return;
}if(!U){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:function(e){switch(this.getState()){case n:case j:case m:case f:{};
return;
}var bk=this.getReadyState();

if(bk==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bk,this.__le)){return this.failed();
}}while(this.__lf<bk){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lf]);
}},getReadyState:function(){var bM=null;

try{bM=this.__lc.readyState;
}catch(a){}return bM;
},setRequestHeader:function(bo,bp){this.__lc.setRequestHeader(bo,bp);
},getResponseHeader:function(bK){var bL=null;

try{this.getRequest().getResponseHeader(bK)||null;
}catch(bm){}return bL;
},getStringResponseHeaders:function(){var bH=null;

try{var bG=this.__lc.getAllResponseHeaders();

if(bG){bH=bG;
}}catch(bn){}return bH;
},getResponseHeaders:function(){var bd=this.getStringResponseHeaders();
var be={};

if(bd){var bb=bd.split(/[\r\n]+/g);

for(var i=0,l=bb.length;i<l;i++){var bc=bb[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bc){be[bc[1]]=bc[2];
}}}return be;
},getStatusCode:function(){var Y=-1;

try{Y=this.getRequest().status;
}catch(bQ){}return Y;
},getStatusText:function(){var bR=h;

try{bR=this.getRequest().statusText;
}catch(bq){}return bR;
},getResponseText:function(){var bD=null;
var bB=this.getStatusCode();
var bC=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bB,bC,this.__le)){try{bD=this.getRequest().responseText;
}catch(bj){}}return bD;
},getResponseXml:function(){var bP=null;
var bN=this.getStatusCode();
var bO=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bN,bO,this.__le)){try{bP=this.getRequest().responseXML;
}catch(ba){}}if(typeof bP==z&&bP!=null){if(!bP.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,h);
bP.loadXML(s);
}if(!bP.documentElement){throw new Error("Missing Document Element!");
}
if(bP.documentElement.tagName==p){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bP;
},getFetchedLength:function(){var bJ=this.getResponseText();
return typeof bJ==t?bJ.length:0;
},getResponseContent:function(){if(this.getState()!==n){{};
return null;
}{};
var bF=this.getResponseText();

switch(this.getResponseType()){case H:case K:{};
return bF;
case c:{};

try{if(bF&&bF.length>0){var bE=qx.util.Json.parseQx(bF);
return (bE===0?0:(bE||null));
}else{return null;
}}catch(bI){this.error("Could not execute json: ["+bF+"]",bI);
return q+bF+w;
}case G:{};

try{if(bF&&bF.length>0){var bE=window.eval(bF);
return (bE===0?0:(bE||null));
}else{return null;
}}catch(b){this.error("Could not execute javascript: ["+bF+"]",b);
return null;
}case e:bF=this.getResponseXml();
{};
return (bF===0?0:(bF||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bf,bg){{};

switch(bf){case C:this.fireEvent(C);
break;
case E:this.fireEvent(E);
break;
case F:this.fireEvent(F);
break;
case I:this.fireEvent(I);
break;
case n:this.fireEvent(n);
break;
case m:this.fireEvent(m);
break;
case j:this.getRequest().abort();
this.fireEvent(j);
break;
case f:this.getRequest().abort();
this.fireEvent(f);
break;
}}},defer:function(L,M){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,d);
},destruct:function(){var bi=this.getRequest();

if(bi){bi.onreadystatechange=qx.io.remote.transport.XmlHttp.__ld;
switch(bi.readyState){case 1:case 2:case 3:bi.abort();
}}this._disposeFields(A);
}});
})();
(function(){var C="</div>",B="Verdana",A="sans-serif",z="<div class='description'>",y="",x="#FFFDED",w="<a target='_blank' href='",v="feedreader/css/reader.css",u="<div class='date'>",t="feedreader.view.Article",m="_applyArticle",s="_blank",p="blogEntry",k="<div class='container'>",j="a",o="Candara",n="<h1 class='blog'>",q="</h1>",h="auto",r="'>read more ...</a>",l="Object";
qx.Class.define(t,{extend:qx.ui.embed.Html,construct:function(){arguments.callee.base.call(this);
this.setCssClass(p);
this.setOverflowY(h);
this.setBackgroundColor(x);
var D=new qx.bom.Font(14,[o,B,A]);
D.setLineHeight(1.8);
this.setFont(D);
},properties:{article:{apply:m,nullable:true,check:l}},members:{_applyArticle:function(c,d){var e=this.__yy();
this.setHtml(e);
qx.html.Element.flush();
var g=this.getContentElement().getDomElement();
var f=g.getElementsByTagName(j);
for(var i=0;i<f.length;i++){f[i].target=s;
}},__yy:function(){var a=this.getArticle();
if(!a){return y;
}var b=new qx.util.StringBuilder();
b.add(k);
b.add(n,a.getTitle(),q);
b.add(u,a.getDate(),C);
b.add(z,a.getContent(),C);
b.add(w,a.getLink(),r);
b.add(C);
return b.get();
}},defer:function(){qx.bom.Stylesheet.includeFile(v);
}});
})();
(function(){var by="Left",bx="Meta",bw="Pause",bv="End",bu="Down",bt="Home",bs="Apps",br="Win",bq="Right",bp="Backspace",be="Space",bd="Up",bc="Shift",bb="Enter",ba="Scroll",Y="Alt",X="Escape",W="key_full_Meta",V="PrintScreen",U="NumLock",bF="key_short_Alt",bG="key_short_Insert",bD="Del",bE="key_full_Enter",bB="key_full_Control",bC="qx.locale.Key",bz="Tabulator",bA="key_full_Space",bH="key_short_Meta",bI="key_short_PageUp",bi="key_short_Pause",bh="key_full_Down",bk="key_short_Apps",bj="key_short_Win",bm="key_full_Right",bl="key_short_Up",bo="key_full_PageDown",bn="key_full_Alt",bg="PgDn",bf="Esc",f="key_full_Insert",g="Ctrl",h="key_short_Space",i="key_short_Backspace",j="key_short_Home",k="key_short_Down",l="PgUp",m="key_short_CapsLock",n="PageUp",o="key_full_Up",bM="key_full_Home",bL="key_full_Backspace",bK="PageDown",bJ="CapsLock",bQ="Ins",bP="Control",bO="key_short_PrintScreen",bN="Tab",bS="key_full_Apps",bR="key_short_Tab",E="key_short_End",F="_",C="Caps",D="key_short_NumLock",I="Num",J="key_full_Scroll",G="key_short_Left",H="key_short_Scroll",A="key_",B="key_full_Pause",w="key_short_Right",v="key_full_PrintScreen",y="key_full_Win",x="key_short_Shift",s="key_short_PageDown",r="key_short_Enter",u="key_short_Control",t="Insert",q="key_short_Escape",p="key_full_Tab",O="Print",P="Delete",Q="key_full_CapsLock",R="key_full_Escape",K="key_short_Delete",L="key_full_PageUp",M="key_full_Shift",N="key_full_NumLock",S="key_full_Delete",T="key_full_End",z="key_full_Left";
qx.Class.define(bC,{statics:{getKeyName:function(bT,bU,bV){{};
var bX=A+bT+F+bU;
var bW=qx.locale.Manager.getInstance().translate(bX,[],bV);

if(bW==bX){return qx.locale.Key._keyNames[bX]||bU;
}else{return bW;
}}},defer:function(a,b,c){var e={};
var d=qx.locale.Manager;
e[d.marktr(i)]=bp;
e[d.marktr(bR)]=bN;
e[d.marktr(h)]=be;
e[d.marktr(r)]=bb;
e[d.marktr(x)]=bc;
e[d.marktr(u)]=g;
e[d.marktr(bF)]=Y;
e[d.marktr(m)]=C;
e[d.marktr(bH)]=bx;
e[d.marktr(q)]=bf;
e[d.marktr(G)]=by;
e[d.marktr(bl)]=bd;
e[d.marktr(w)]=bq;
e[d.marktr(k)]=bu;
e[d.marktr(bI)]=l;
e[d.marktr(s)]=bg;
e[d.marktr(E)]=bv;
e[d.marktr(j)]=bt;
e[d.marktr(bG)]=bQ;
e[d.marktr(K)]=bD;
e[d.marktr(D)]=I;
e[d.marktr(bO)]=O;
e[d.marktr(H)]=ba;
e[d.marktr(bi)]=bw;
e[d.marktr(bj)]=br;
e[d.marktr(bk)]=bs;
e[d.marktr(bL)]=bp;
e[d.marktr(p)]=bz;
e[d.marktr(bA)]=be;
e[d.marktr(bE)]=bb;
e[d.marktr(M)]=bc;
e[d.marktr(bB)]=bP;
e[d.marktr(bn)]=Y;
e[d.marktr(Q)]=bJ;
e[d.marktr(W)]=bx;
e[d.marktr(R)]=X;
e[d.marktr(z)]=by;
e[d.marktr(o)]=bd;
e[d.marktr(bm)]=bq;
e[d.marktr(bh)]=bu;
e[d.marktr(L)]=n;
e[d.marktr(bo)]=bK;
e[d.marktr(T)]=bv;
e[d.marktr(bM)]=bt;
e[d.marktr(f)]=t;
e[d.marktr(S)]=P;
e[d.marktr(N)]=U;
e[d.marktr(v)]=V;
e[d.marktr(J)]=ba;
e[d.marktr(B)]=bw;
e[d.marktr(y)]=br;
e[d.marktr(bS)]=bs;
a._keyNames=e;
}});
})();
(function(){var n="opened",m="click",l="mousedown",k="Boolean",j="qx.ui.tree.FolderOpenButton",i="_applyOpen",h="mouseup",g="Space",f="keypress",d="changeOpen",c="Enter";
qx.Class.define(j,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
this.initOpen();
this.addListener(f,this._onKeyPress);
this.addListener(m,this._onClick);
this.addListener(l,this._stopPropagation,this);
this.addListener(h,this._stopPropagation,this);
},properties:{open:{check:k,init:false,event:d,apply:i}},members:{_applyOpen:function(a,b){a?this.addState(n):this.removeState(n);
this.execute();
},_onKeyPress:function(e){switch(e.getKeyIdentifier()){case c:case g:this.toggleOpen();
e.stopPropagation();
}},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var m="qx.io2.PartLoader",l="load",k="partLoaded",j="string",h="singleton",g="qx.event.type.Data";
qx.Class.define(m,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__yz=[];
var f=qx.$$loader.uris;

for(var i=0;i<f.length;i++){this.__yz.push(new qx.io2.part.Package(f[i],i==0));
}this.__yA={};
var b=qx.$$loader.parts;

for(var name in b){var a=b[name];
var d=[];

for(var i=0;i<a.length;i++){d.push(this.__yz[a[i]]);
}var c=new qx.io2.part.Part(name,d);
c.addListener(l,function(e){this.fireDataEvent(k,e.getTarget());
},this);
this.__yA[name]=c;
}},events:{"partLoaded":g},statics:{require:function(n,o,self){this.getInstance().require(n,o,self);
}},members:{require:function(p,q,self){var q=q||function(){};
var self=self||window;

if(typeof (p)==j){p=[p];
}var t=[];

for(var i=0;i<p.length;i++){t.push(this.getPart(p[i]));
}var s=0;
var r=function(){s+=1;

if(s>=t.length){q.call(self);
}};

for(var i=0;i<t.length;i++){t[i].load(r,this);
}},getPart:function(name){var u=this.__yA[name];

if(!u){throw new Error("No such part: "+name);
}return u;
}}});
})();
(function(){var B="dblclick",A="click",z="visible",y="Boolean",x="excluded",w="qx.event.type.Data",v="_applyHideRoot",u="none",t="_applyRootOpenClose",s="_applyOpenMode",m="__kh",r="changeRoot",p="changeOpenMode",l="pane",k="_applyRoot",o="qx.ui.tree.Tree",n="qx.ui.tree.AbstractTreeItem",q="tree";
qx.Class.define(o,{extend:qx.ui.core.AbstractScrollArea,implement:[qx.ui.core.ISingleSelection,qx.ui.core.IMultiSelection],include:[qx.ui.core.MSelectionHandling,qx.ui.core.MContentPadding],construct:function(){arguments.callee.base.call(this);
this.__kh=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(l).add(this.__kh);
this.initOpenMode();
this.initRootOpenClose();
},events:{addItem:w,removeItem:w},properties:{openMode:{check:[A,B,u],init:B,apply:s,event:p,themeable:true},root:{check:n,init:null,nullable:true,event:r,apply:k},hideRoot:{check:y,init:false,apply:v},rootOpenClose:{check:y,init:false,apply:t},appearance:{refine:true,init:q},focusable:{refine:true,init:true}},members:{__kh:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__kh;
},_applyRoot:function(F,G){var H=this.getChildrenContainer();

if(G){H.remove(G);

if(G.hasChildren()){H.remove(G.getChildrenContainer());
}}
if(F){H.add(F);

if(F.hasChildren()){H.add(F.getChildrenContainer());
}F.setVisibility(this.getHideRoot()?x:z);
F.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(g,h){var i=this.getRoot();

if(!i){return;
}i.setVisibility(g?x:z);
i.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(C,D){var E=this.getRoot();

if(!E){return;
}E.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__kh;
},getNextSiblingOf:function(a,b){if((b!==false||a.isOpen())&&a.hasChildren()){return a.getChildren()[0];
}
while(a){var parent=a.getParent();

if(!parent){return null;
}var d=parent.getChildren();
var c=d.indexOf(a);

if(c>-1&&c<d.length-1){return d[c+1];
}a=parent;
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
}},getItems:function(I,J){return this.getRoot().getItems(I,J,this.getHideRoot());
},scrollChildIntoViewY:function(K,L,M){if(!this.getNextSiblingOf(K,false)){this.scrollToY(1000000);
}else{arguments.callee.base.call(this,K,L,M);
}},getTreeItem:function(j){while(j){if(j==this){return null;
}
if(j instanceof qx.ui.tree.AbstractTreeItem){return j;
}j=j.getLayoutParent();
}return null;
},_applyOpenMode:function(T,U){if(U==A){this.removeListener(A,this._onOpen,this);
}else if(U==B){this.removeListener(B,this._onOpen,this);
}
if(T==A){this.addListener(A,this._onOpen,this);
}else if(T==B){this.addListener(B,this._onOpen,this);
}},_onOpen:function(e){var f=this.getTreeItem(e.getTarget());

if(!f||!f.isOpenable()){return;
}f.setOpen(!f.isOpen());
e.stopPropagation();
}},destruct:function(){this._disposeObjects(m);
}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

