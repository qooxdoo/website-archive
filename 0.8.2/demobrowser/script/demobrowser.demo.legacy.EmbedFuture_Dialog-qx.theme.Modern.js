if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.legacy.theme": "qx.legacy.theme.ClassicRoyale", "qx.application": "demobrowser.demo.legacy.EmbedFuture_Dialog", "qx.allowUrlVariants": "true", "qx.theme": "qx.theme.Modern", "qx.allowUrlSettings": "true"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off", "qx.aspects": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!window.qxlibraries) qxlibraries = {};
var libinfo = {"qx": {"resourceUri": "../../resource", "version": "trunk"}, "demobrowser.demo": {"resourceUri": "../../resource", "version": "trunk"}};
for (var k in libinfo) qxlibraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/compat/widget/Windows/arrows/left.png": [16, 16, "png", "qx"], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -238, 0], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/compat/widget/Windows/datechooser/nextMonth.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -51, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/compat/widget/Windows/arrows/forward.gif": [8, 7, "gif", "qx"], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/compat/widget/Windows/tree/start-minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -105, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -38, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/compat/widget/Windows/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/inputcheckradio-combined.png": [404, 14, "png", "qx"], "qx/compat/widget/Windows/arrows/first.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/compat/widget/Windows/cursors/nodrop.gif": [20, 20, "gif", "qx"], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "qx/compat/widget/Windows/table/descending.png": [10, 10, "png", "qx"], "qx/compat/widget/Windows/tree/cross-minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -112, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -44, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -280, 0], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -140, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/compat/widget/Windows/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -156, 0], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/compat/widget/Windows/menu/checkbox.gif": [16, 7, "gif", "qx"], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/compat/widget/Windows/tree/end.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "qx/compat/widget/Windows/splitpane/knob-horizontal.png": [4, 15, "png", "qx"], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -142, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -162, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/compat/widget/Windows/table/selectColumnOrder.png": [10, 9, "png", "qx"], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -26, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -126, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -41, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -19, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -148, 0], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -64, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -79, 0], "qx/static/blank.gif": [1, 1, "gif", "qx"], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/compat/widget/Windows/window/restore.gif": [8, 9, "gif", "qx"], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/compat/widget/Windows/tree/cross.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -120, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -18, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -56, 0], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -36, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "qx/compat/widget/Windows/table/boolean-false.png": [11, 11, "png", "qx"], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/compat/widget/Windows/table/boolean-true.png": [11, 11, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "qx/compat/widget/Windows/tree/plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/compat/widget/Windows/arrows/up.gif": [7, 4, "gif", "qx"], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -132, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/compat/widget/Windows/arrows/up-tiny.gif": [3, 2, "gif", "qx"], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -66, 0], "qx/compat/widget/Windows/tree/end-plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "qx/compat/widget/Windows/tree/minus.gif": [19, 16, "gif", "qx"], "qx/compat/widget/Windows/splitpane/knob-vertical.png": [15, 4, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "qx/compat/widget/Windows/tree/line.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "qx/compat/widget/Windows/cursors/copy.gif": [19, 15, "gif", "qx"], "qx/compat/widget/Windows/cursors/move.gif": [13, 9, "gif", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/compat/widget/Windows/tree/start.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/compat/widget/Windows/tree/end-minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/compat/widget/Windows/tree/only-plus.gif": [19, 16, "gif", "qx"], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "qx/compat/widget/Windows/window/close.gif": [10, 9, "gif", "qx"], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "qx/compat/widget/Windows/window/minimize.gif": [9, 9, "gif", "qx"], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/compat/widget/Windows/arrows/down-small.gif": [5, 3, "gif", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/compat/widget/Windows/datechooser/lastMonth.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "qx/compat/widget/Windows/arrows/right.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "qx/compat/widget/Windows/arrows/rewind.gif": [8, 7, "gif", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/compat/widget/Windows/arrows/next.gif": [4, 7, "gif", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -266, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -46, 0], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -98, 0], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/compat/widget/Windows/arrows/down-tiny.gif": [3, 2, "gif", "qx"], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/compat/widget/Windows/datechooser/nextYear.png": [16, 16, "png", "qx"], "qx/compat/widget/Windows/cursors/alias.gif": [19, 15, "gif", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/compat/icon/CrystalClear/32/status/dialog-information.png": [32, 32, "png", "qx"], "qx/compat/widget/Windows/colorselector/brightness-field.jpg": [19, 256, "jpeg", "qx"], "qx/compat/widget/Windows/tree/start-plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/compat/widget/Windows/menu/radiobutton.gif": [16, 5, "gif", "qx"], "qx/compat/widget/Windows/datechooser/lastYear.png": [16, 16, "png", "qx"], "qx/compat/widget/Windows/arrows/up-small.gif": [5, 3, "gif", "qx"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -84, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -95, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/compat/widget/Windows/arrows/minimize.gif": [9, 9, "gif", "qx"], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/compat/widget/Windows/arrows/previous.gif": [4, 7, "gif", "qx"], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -13, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -152, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "qx/compat/widget/Windows/colorselector/brightness-handle.gif": [35, 11, "gif", "qx"], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/compat/widget/Windows/arrows/down.gif": [7, 4, "gif", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/compat/widget/Windows/tree/only-minus.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -252, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/compat/widget/Windows/tree/cross-plus.gif": [19, 16, "gif", "qx"], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -8, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/compat/widget/Windows/arrows/last.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/compat/widget/Windows/core/dotted-white.gif": [2, 2, "gif", "qx"], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/compat/widget/Windows/menu/menu-blank.gif": [16, 7, "gif", "qx"], "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -76, 0], "qx/compat/widget/Windows/table/ascending.png": [10, 10, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0], "qx/compat/widget/Windows/window/maximize.gif": [9, 9, "gif", "qx"]};
qx.$$translations = {};
qx.$$locales = {"fr": {"cldr_day_abbreviated_tue": "mar.", "cldr_date_time_format_MMd": "d/MM", "cldr_date_time_format_yyMMMd": "d MMM yy", "cldr_day_wide_thu": "jeudi", "cldr_date_time_format_MMMdd": "dd MMM", "cldr_date_time_format_MEd": "EEE d/M", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "ven.", "cldr_day_wide_sun": "dimanche", "cldr_day_wide_mon": "lundi", "cldr_pm": "PM", "alternateQuotationEnd": "”", "cldr_day_narrow_sun": "D", "cldr_date_format_full": "EEEE d MMMM yyyy", "cldr_month_abbreviated_9": "sept.", "cldr_month_abbreviated_8": "août", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_month_abbreviated_1": "janv.", "cldr_month_abbreviated_3": "mars", "cldr_month_abbreviated_2": "févr.", "cldr_month_abbreviated_5": "mai", "cldr_month_abbreviated_4": "avr.", "cldr_month_abbreviated_7": "juil.", "cldr_month_abbreviated_6": "juin", "cldr_date_time_format_MMMd": "d MMM", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_narrow_tue": "M", "cldr_date_time_format_MMMEd": "E d MMM", "cldr_date_time_format_yQ": "QQQ yyyy", "cldr_month_wide_2": "février", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "janvier", "cldr_month_wide_6": "juin", "cldr_month_wide_7": "juillet", "cldr_date_time_format_MMMMd": "d MMMM", "cldr_month_wide_5": "mai", "cldr_month_wide_8": "août", "cldr_month_wide_9": "septembre", "cldr_date_time_format_MMMMEd": "EEE d MMMM", "cldr_month_wide_10": "octobre", "cldr_month_wide_11": "novembre", "cldr_month_wide_12": "décembre", "cldr_date_time_format_MMdd": "dd/MM", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": " ", "alternateQuotationStart": "“", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_date_time_format_yMMMEd": "EEE d MMM yyyy", "cldr_date_time_format_yMEd": "EEE d/M/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yyMM": "MM/yy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d MMMM yyyy", "cldr_month_abbreviated_11": "nov.", "cldr_month_abbreviated_10": "oct.", "cldr_month_abbreviated_12": "déc.", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_wide_fri": "vendredi", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "mardi", "cldr_date_time_format_Md": "M-d", "cldr_day_abbreviated_mon": "lun.", "cldr_month_narrow_3": "M", "quotationEnd": "»", "cldr_date_time_format_yyMMMEEEd": "EEE d MMM yy", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_time_format_yyQ": "QQQ yy", "cldr_date_format_medium": "d MMM yyyy", "cldr_day_abbreviated_wed": "mer.", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "«", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "sam.", "cldr_day_narrow_wed": "M", "cldr_date_time_format_hhmmss": "HH:mm:ss", "cldr_am": "AM", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_narrow_fri": "V", "cldr_day_wide_sat": "samedi", "cldr_day_narrow_thu": "J", "cldr_month_wide_3": "mars", "cldr_day_abbreviated_sun": "dim.", "cldr_day_abbreviated_thu": "jeu.", "cldr_date_format_short": "dd/MM/yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_day_wide_wed": "mercredi", "cldr_day_narrow_mon": "L", "cldr_date_time_format_hhmm": "HH:mm", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_date_time_format_y": "yyyy", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "avril", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_d": "d"}, "en": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "fr_FR": {}, "de": {"cldr_day_abbreviated_tue": "Di.", "cldr_date_time_format_MMd": "d.MM.", "cldr_day_wide_thu": "Donnerstag", "cldr_date_time_format_MEd": "E, d.M.", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fr.", "cldr_day_wide_sun": "Sonntag", "cldr_day_wide_mon": "Montag", "cldr_pm": "nachm.", "alternateQuotationEnd": "‘", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, d. MMMM yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mär", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "Mai", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "d. MMM", "cldr_date_time_format_yM": "yyyy-M", "cldr_day_narrow_tue": "D", "cldr_date_time_format_MMMEd": "E d. MMM", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_yyMMdd": "dd.MM.yy", "cldr_month_wide_2": "Februar", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "Januar", "cldr_month_wide_6": "Juni", "cldr_month_wide_7": "Juli", "cldr_date_time_format_MMMMd": "d. MMMM", "cldr_month_wide_5": "Mai", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E d. MMMM", "cldr_month_wide_10": "Oktober", "cldr_month_wide_11": "November", "cldr_month_wide_12": "Dezember", "cldr_date_time_format_MMdd": "dd.MM.", "cldr_number_decimal_separator": ",", "cldr_number_percent_format": "#,##0 %", "cldr_number_group_separator": ".", "alternateQuotationStart": "‚", "cldr_time_format_short": "HH:mm", "cldr_time_format_medium": "HH:mm:ss", "cldr_date_time_format_yMMMEd": "EEE, d. MMM yyyy", "cldr_date_time_format_yMEd": "EEE, yyyy-M-d", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yyMM": "MM.yy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_date_time_format_Hm": "H:mm", "cldr_date_time_format_yyQQQQ": "QQQQ yy", "cldr_date_format_long": "d. MMMM yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Okt", "cldr_month_abbreviated_12": "Dez", "cldr_date_time_format_MMMMdd": "dd. MMMM", "cldr_date_time_format_mmss": "mm:ss", "cldr_day_wide_fri": "Freitag", "cldr_date_time_format_HHmm": "HH:mm", "cldr_day_wide_tue": "Dienstag", "cldr_date_time_format_Ed": "E d", "cldr_date_time_format_Md": "d.M.", "cldr_month_narrow_1": "J", "cldr_day_abbreviated_mon": "Mo.", "cldr_month_narrow_3": "M", "quotationEnd": "“", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_time_format_yyQ": "Q yy", "cldr_date_format_medium": "dd.MM.yyyy", "cldr_day_abbreviated_wed": "Mi.", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "„", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sa.", "cldr_day_narrow_wed": "M", "cldr_date_time_format_hhmmss": "hh:mm:ss a", "cldr_am": "vorm.", "cldr_date_time_format_yyyyMMMM": "MMMM yyyy", "cldr_time_format_long": "HH:mm:ss z", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Samstag", "cldr_day_narrow_thu": "D", "cldr_month_wide_3": "März", "cldr_day_abbreviated_sun": "So.", "cldr_date_time_format_H": "H", "cldr_day_abbreviated_thu": "Do.", "cldr_date_format_short": "dd.MM.yy", "cldr_date_time_format_M": "L", "cldr_date_time_format_yyMMM": "MMM yy", "cldr_date_time_format_HHmmss": "HH:mm:ss", "cldr_day_wide_wed": "Mittwoch", "cldr_day_narrow_mon": "M", "cldr_date_time_format_hhmm": "hh:mm a", "cldr_date_time_format_yyyy": "yyyy", "cldr_month_narrow_2": "F", "cldr_date_time_format_y": "yyyy", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "HH:mm:ss v", "cldr_date_time_format_d": "d"}, "C": {"cldr_day_abbreviated_tue": "Tue", "cldr_day_wide_thu": "Thursday", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_day_abbreviated_fri": "Fri", "cldr_day_wide_sun": "Sunday", "cldr_day_wide_mon": "Monday", "cldr_pm": "PM", "alternateQuotationEnd": "’", "cldr_day_narrow_sun": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_month_abbreviated_9": "Sep", "cldr_month_abbreviated_8": "Aug", "cldr_month_narrow_10": "O", "cldr_month_narrow_11": "N", "cldr_month_abbreviated_1": "Jan", "cldr_month_abbreviated_3": "Mar", "cldr_month_abbreviated_2": "Feb", "cldr_month_abbreviated_5": "May", "cldr_month_abbreviated_4": "Apr", "cldr_month_abbreviated_7": "Jul", "cldr_month_abbreviated_6": "Jun", "cldr_date_time_format_MMMd": "MMM d", "cldr_date_time_format_yM": "M/yyyy", "cldr_number_group_separator": ",", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_month_wide_2": "February", "cldr_month_narrow_12": "D", "cldr_month_wide_1": "January", "cldr_month_wide_6": "June", "cldr_month_wide_7": "July", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_wide_5": "May", "cldr_month_wide_8": "August", "cldr_month_wide_9": "September", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_month_wide_10": "October", "cldr_month_wide_11": "November", "cldr_month_wide_12": "December", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_narrow_tue": "T", "alternateQuotationStart": "‘", "cldr_time_format_short": "h:mm a", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_day_wide_wed": "Wednesday", "cldr_date_format_long": "MMMM d, yyyy", "cldr_month_abbreviated_11": "Nov", "cldr_month_abbreviated_10": "Oct", "cldr_month_abbreviated_12": "Dec", "cldr_day_wide_fri": "Friday", "cldr_day_wide_tue": "Tuesday", "cldr_date_time_format_Md": "M/d", "cldr_day_abbreviated_mon": "Mon", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_date_time_format_y": "yyyy", "quotationEnd": "”", "cldr_month_narrow_5": "M", "cldr_day_narrow_sat": "S", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_abbreviated_wed": "Wed", "cldr_date_time_format_ms": "mm:ss", "quotationStart": "“", "cldr_month_narrow_9": "S", "cldr_day_abbreviated_sat": "Sat", "cldr_day_narrow_wed": "W", "cldr_am": "AM", "cldr_day_narrow_fri": "F", "cldr_day_wide_sat": "Saturday", "cldr_day_narrow_thu": "T", "cldr_month_wide_3": "March", "cldr_day_abbreviated_sun": "Sun", "cldr_day_abbreviated_thu": "Thu", "cldr_date_format_short": "M/d/yy", "cldr_date_time_format_M": "L", "cldr_time_format_long": "h:mm:ss a z", "cldr_date_time_format_Hm": "HH:mm", "cldr_day_narrow_mon": "M", "cldr_month_narrow_1": "J", "cldr_month_narrow_2": "F", "cldr_month_narrow_3": "M", "cldr_month_narrow_4": "A", "cldr_month_wide_4": "April", "cldr_month_narrow_6": "J", "cldr_month_narrow_7": "J", "cldr_month_narrow_8": "A", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_time_format_full": "h:mm:ss a v", "cldr_date_time_format_d": "d"}, "en_US": {}, "de_DE": {}}

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["../../script/demobrowser.demo.legacy.EmbedFuture_Dialog-qx.theme.Modern-0.js"]],
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
(function(){var b="qx.legacy.application.MGuiCompat";
qx.Mixin.define(b,{members:{compat:function(){if(this.__ui){return;
}this.__ui=true;
this.debug("Enabling 0.7x application compat");
this._initializedMain=true;
qx.legacy.ui.core.Widget.initScrollbarWidth();
qx.legacy.theme.manager.Meta.getInstance().initialize();
qx.legacy.event.handler.EventHandler.getInstance();
qx.legacy.ui.core.ClientDocument.getInstance();
qx.Class.include(qx.core.Object,qx.locale.MTranslation);
qx.Class.patch(qx.event.dispatch.MouseCapture,qx.legacy.application.MMouseCapturePatch);
qx.Class.patch(qx.event.Pool,qx.legacy.application.MEventPoolPatch);
qx.event.Timer.once(this._preload,this,0);
},_preload:function(){this.debug("preloading visible images...");
this.__uj=new qx.legacy.io.image.PreloaderSystem(qx.legacy.io.image.Manager.getInstance().getVisibleImages(),this._preloaderDone,this);
this.__uj.start();
},_preloaderDone:function(){qx.legacy.ui.core.Widget.$$uiReady=true;
this.__uj.dispose();
this.__uj=null;
var a=(new Date).valueOf();
qx.legacy.ui.core.Widget.flushGlobalQueues();
this.info("render runtime: "+(new Date-a)+"ms");
qx.legacy.event.handler.EventHandler.getInstance().attachEvents();
qx.event.Timer.once(this._postload,this,100);
},_postload:function(){this.debug("preloading hidden images...");
this.__uk=new qx.legacy.io.image.PreloaderSystem(qx.legacy.io.image.Manager.getInstance().getHiddenImages(),this._postloaderDone,this);
this.__uk.start();
},_postloaderDone:function(){this.__uk.dispose();
this.__uk=null;
}}});
})();
(function(){var a="qx.legacy.application.Gui";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],include:[qx.legacy.application.MGuiCompat],members:{main:function(){this.compat();
},finalize:function(){},terminate:function(){},close:function(b){},getRoot:function(){if(!this.__ul){this.__ul=new qx.ui.root.Page(document);
}return this.__ul;
}}});
})();
(function(){var e="Brave new world!",d="execute",c="demobrowser.demo.legacy.EmbedFuture_Dialog",b="icon/32/status/dialog-information.png",a="Open 0.8 widget dialog";
qx.Class.define(c,{extend:qx.legacy.application.Gui,members:{main:function(){arguments.callee.base.call(this);
qx.theme.manager.Meta.getInstance().initialize();
var f=new qx.legacy.ui.form.Button(a,b).set({top:10,left:10});
f.addToDocument();
var g=this.getDialog();
f.addListener(d,function(e){g.open();
},this);
},getDialog:function(){var h=new qx.ui.window.Window(e);
h.moveTo(100,100);
h.setLayout(new qx.ui.layout.Grow());
h.add(new qx.ui.basic.Label(e).set({font:qx.bom.Font.fromConfig({size:100,bold:true})}));
return h;
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
(function(){var k="get",j="_invalidate",i="_recompute",h="undefined",g="_compute",f="_value",e="set",d="qx.legacy.core.Property",c="_change",b="_cached";
qx.Class.define(d,{statics:{addFastProperty:function(l,m){var n=l.name;
var p=qx.lang.String.firstUp(n);
var s=f+p;
var r=k+p;
var q=e+p;
var o=g+p;
m[s]=typeof l.defaultValue!==h?l.defaultValue:null;

if(!m.hasOwnProperty(r)){if(l.noCompute){m[r]=function(){return this[s];
};
}else{m[r]=function(){return this[s]==null?this[s]=this[o]():this[s];
};
}m[r].self=m.constructor;
}
if(!m.hasOwnProperty(q)){if(l.setOnlyOnce){m[q]=function(a){this[s]=a;
this[q]=null;
return a;
};
}else{m[q]=function(t){return this[s]=t;
};
}m[q].self=m.constructor;
}
if(!m.hasOwnProperty(o)){if(!l.noCompute){m[o]=function(){return null;
};
m[o].self=m.constructor;
}}},addCachedProperty:function(u,v){var A=u.name;
var x=qx.lang.String.firstUp(A);
var z=b+x;
var w=g+x;
var y=c+x;

if(typeof u.defaultValue!==h){v[z]=u.defaultValue;
}
if(!v.hasOwnProperty(k+x)){v[k+x]=function(){if(this[z]==null){this[z]=this[w]();
}return this[z];
};
}
if(!v.hasOwnProperty(j+x)){v[j+x]=function(){if(this[z]!=null){this[z]=null;

if(u.addToQueueRuntime){this.addToQueueRuntime(u.name);
}}};
}
if(!v.hasOwnProperty(i+x)){v[i+x]=function(){var E=this[z];
var D=this[w]();

if(D!=E){this[z]=D;
this[y](D,E);
return true;
}return false;
};
}
if(!v.hasOwnProperty(y)){v[y]=function(B,C){};
}
if(!v.hasOwnProperty(w)){v[w]=function(){return null;
};
}v[k+x].self=v.constructor;
v[j+x].self=v.constructor;
v[i+x].self=v.constructor;
}}});
})();
(function(){var d="__cU",c="qx.util.DeferredCallManager",b="__cV",a="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:a,construct:function(){this.__cU={};
this.__cV=qx.lang.Function.bind(this.__da,this);
this.__cW=false;
},members:{__cX:null,__cY:null,__cU:null,__cW:null,__cV:null,schedule:function(e){if(this.__cX==null){this.__cX=window.setTimeout(this.__cV,0);
}var f=e.toHashCode();
if(this.__cY&&this.__cY[f]){return;
}this.__cU[f]=e;
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
(function(){var gg="qx.client",gf="height",ge="width",gd="",gc="auto",gb="left",ga="top",fY="maxHeight",fX="minHeight",fW="Boolean",el="right",ek="minWidth",ej="maxWidth",ei="Number",eh="qx.event.type.Event",eg="bottom",ef="qx.legacy.event.type.MouseEvent",ee="scrollY",ed="overflow",ec="hidden",gn="scrollX",go="scroll",gl="qx.legacy.event.type.DragEvent",gm="none",gj="px",gk="Integer",gh="display",gi="qx.legacy.event.type.FocusEvent",gp="number",gq="_applyClip",fy="String",fx="qx.legacy.event.type.KeyEvent",fA="n-resize",fz="div",fC="%",fB="shorthand",fE="e-resize",fD="zIndex",fu="overflowX",ft=")",bT="gecko",bU="overflowY",bV="filter",bW=",",bX="=''",bY="string",ca="backgroundColor",cb="marginBottom",cc="focused",cd="ignore",gQ="disabled",gP="normal",gO="qx.legacy.ui.form.Button",gN="MozUserSelect",gU="clipTop",gT="WebkitUserSelect",gS="khtml",gR="Margin",gW="abandoned",gV="KhtmlOpacity",dh="pressed",di="clipLeft",df="MozOpacity",dg="backgroundRepeat",dl="cursor",dm="marginLeft",dj="nw-resize",dk="clipWidth",dd="outline",de="removeChild",cE="mshtml",cD="paddingTop",cG="absolute",cF="backgroundImage",cA="marginTop",cz="opacity",cC="marginRight",cB="clipHeight",cy="paddingLeft",cx="Padding",dt="KhtmlUserSelect",du="over",dv="ne-resize",dw="userSelect",dp="parent",dq="tabIndex",dr="paddingBottom",ds="paddingRight",dx="changeTabIndex",dy="_applyFocused",cR="changeTop",cQ="_applyDisplay",cP="Left",cO="changeBorder",cN="_applyBackgroundColor",cM="Function",cL="_renderRuntime",cK="_applyCapture",da="Height",cY="changeElement",dz="preferredBoxHeight",dA="verticalAlign",dB="hand",dC="_applyBackgroundRepeat",dD="qx.legacy.ui.core.Parent",dE="this.setStyleProperty('padding",dF="*",dG="MinWidth",dH="_applyCommand",dI="this._style.",ev="_applyTop",eu="Type",et="hasPercentX",er="_element",eA="changeParent",ez="middle",ey="_applyMarginBottom",ew="hasPercentY",eE="1px dotted",eD="_applyCursor",fg="_applySelectable",fi="id",fe="Width",ff="_oldParent",fc="changeCapture",fd="qx.widgetDebugId",fa="hasAutoY",fb="initial",fp="_applyVisibility",fq="_applyBottom",fJ="MozUserFocus",fI="first",fL="innerWidth",fK="innerHeight",fN="v",fM="_applyMinWidth",fP="_applyMarginRight",fO="Pixel",fG="__uo",fF="MaxHeight",gz="borderTop",gA="_applyBackgroundImage",gB="horizontalAlign",gC="-moz-scrollbars-none",gv="Bottom",gw="_computed",gx="_applyEnabled",gy="Auto",gt="changeOverflow",gu="_applyBorder",bI="beforeAppear",bH="100px",bG="_applyPaddingTop",bF="_applyPaddingBottom",bE="changeTextColor",bD="outerHeight",bC="_applyMarginTop",bB="outerWidth",bA="_applyRight",bz="hideFocus",ck="preferredInnerWidth",cm="Element",ci="boxHeight",cj="borderLeft",cp="preferredBoxWidth",cq="changeHeight",cn="_applyHideFocus",co="borderRight",ct="borderBottom",cu="_applyAppearance",eI="frameWidth",eC="Right",eQ="changeRight",eM="hasFlexY",ep="_styleProperties",em="_applyPaddingRight",cI="_applyOpacity",eq="Percent",cX="rect(",cW="url(",dS="beforeDisappear",dT="Parsed",dU="_applyMaxHeight",dV="_applyFont",dW="Alpha(Opacity=",dX="_applyMaxWidth",dY="changeFocused",ea="userFocus",dP="qx.legacy.ui.popup.ToolTip",dQ="changeDisplay",eo="_htmlProperties",eP="_borderElement",eO="_applyWidth",eN="unselectable",eU="parentPaddingBottom",eT="center",eS="changeMaxHeight",eR="changeZIndex",eL="changeMinHeight",eK="changeEnabled",cr="Null",dc="preferredInnerHeight",db="-moz-scrollbars-vertical",eB="_applyParent",dn="changeAnonymous",eH="changeFont",eG="parentPaddingLeft",eF="_applyOverflow",cH="parentPaddingRight",eW="_applyZIndex",cw="')",cJ="_applyTextColor",dJ="MaxWidth",dK="addChild",dL="-moz-scrollbars-horizontal",dM="=((v==null)?0:v)+'px'",dN="disappear",dO="changeMinWidth",fs="qx.event.Command",dR=".",fR="_applyPaddingLeft",fQ="', ((v==null)?0:v)+'px')",fT="Flex",fS="beforeRemoveDom",fV="_applyMinHeight",fU="hasAutoX",eb="_applyLeft",fH="_isCreated",eV="create",fv="_inlineEvents",cf="removeDom",cg="qx.legacy.ui.basic.Inline",fn="this.removeStyleProperty('padding",fo="widget",fl="hasFlexX",fm="insertDom",fj="_applyMarginLeft",fk="_applyTabIndex",by="qx.legacy.ui.menu.Menu",fr="parentPaddingTop",bQ="100%",bP="_jobQueue",bO="changeMaxWidth",bN="clip",bM="execute",bL="MinHeight",bK="__us",bJ="_applyElement",bS="changeWidth",bR="_applyHeight",gH="visibility",gI="changeVisibility",gJ="beforeInsertDom",gK="padding",gD="boxWidth",gE="_htmlAttributes",gF="appear",gG="Value",gL="qx.legacy.ui.core.Widget",gM="changeBottom",eY="undefined",eX="abstract",cv="_style",ce="changeLeft",cT="_innerStyle",cS="margin",cV="frameHeight",cU="changeBackgroundColor",eJ="changeAppearance",en="Top",gr="_layoutChanges",gs="_resetRuntime";
qx.Class.define(gL,{extend:qx.core.Object,type:eX,construct:function(){arguments.callee.base.call(this);
this._layoutChanges={};
if(qx.core.Setting.get(fd)){this._generateHtmlId();
}},events:{"beforeAppear":eh,"appear":eh,"beforeDisappear":eh,"disappear":eh,"beforeInsertDom":eh,"insertDom":eh,"beforeRemoveDom":eh,"removeDom":eh,"create":eh,"execute":eh,"mouseover":ef,"mousemove":ef,"mouseout":ef,"mousedown":ef,"mouseup":ef,"mousewheel":ef,"click":ef,"dblclick":ef,"contextmenu":ef,"keydown":fx,"keypress":fx,"keyinput":fx,"keyup":fx,"focusout":gi,"focusin":gi,"blur":gi,"focus":gi,"dragdrop":gl,"dragout":gl,"dragover":gl,"dragmove":gl,"dragstart":gl,"dragend":gl},statics:{create:function(mg,mh){mg._appearance=mh;
return new mg;
},SCROLLBAR_SIZE:null,$$uiReady:false,flushGlobalQueues:function(){if(qx.legacy.ui.core.Widget._inFlushGlobalQueues||!qx.legacy.ui.core.Widget.$$uiReady){return;
}qx.legacy.ui.core.Widget._inFlushGlobalQueues=true;
qx.legacy.ui.core.Widget.flushGlobalWidgetQueue();
qx.legacy.ui.core.Widget.flushGlobalStateQueue();
qx.legacy.ui.core.Widget.flushGlobalElementQueue();
qx.legacy.ui.core.Widget.flushGlobalJobQueue();
qx.legacy.ui.core.Widget.flushGlobalLayoutQueue();
qx.legacy.ui.core.Widget.flushGlobalDisplayQueue();
delete qx.legacy.ui.core.Widget._inFlushGlobalQueues;
},_globalWidgetQueue:[],addToGlobalWidgetQueue:function(mD){if(!mD._isInGlobalWidgetQueue&&mD._isDisplayable){this.__uv.schedule();
qx.legacy.ui.core.Widget._globalWidgetQueue.push(mD);
mD._isInGlobalWidgetQueue=true;
}},removeFromGlobalWidgetQueue:function(k){if(k._isInGlobalWidgetQueue){qx.lang.Array.remove(qx.legacy.ui.core.Widget._globalWidgetQueue,k);
delete k._isInGlobalWidgetQueue;
}},flushGlobalWidgetQueue:function(){var mm=qx.legacy.ui.core.Widget._globalWidgetQueue,mn,mo;

while((mn=mm.length)>0){for(var i=0;i<mn;i++){mo=mm[i];
mo.flushWidgetQueue();
delete mo._isInGlobalWidgetQueue;
}mm.splice(0,mn);
}},_globalElementQueue:[],addToGlobalElementQueue:function(hb){if(!hb._isInGlobalElementQueue&&hb._isDisplayable){this.__uv.schedule();
qx.legacy.ui.core.Widget._globalElementQueue.push(hb);
hb._isInGlobalElementQueue=true;
}},removeFromGlobalElementQueue:function(hR){if(hR._isInGlobalElementQueue){qx.lang.Array.remove(qx.legacy.ui.core.Widget._globalElementQueue,hR);
delete hR._isInGlobalElementQueue;
}},flushGlobalElementQueue:function(){var hu=qx.legacy.ui.core.Widget._globalElementQueue,hv,hw;

while((hv=hu.length)>0){for(var i=0;i<hv;i++){hw=hu[i];
hw._createElementImpl();
delete hw._isInGlobalElementQueue;
}hu.splice(0,hv);
}},_globalStateQueue:[],addToGlobalStateQueue:function(lX){if(!lX._isInGlobalStateQueue&&lX._isDisplayable){this.__uv.schedule();
qx.legacy.ui.core.Widget._globalStateQueue.push(lX);
lX._isInGlobalStateQueue=true;
}},removeFromGlobalStateQueue:function(mv){if(mv._isInGlobalStateQueue){qx.lang.Array.remove(qx.legacy.ui.core.Widget._globalStateQueue,mv);
delete mv._isInGlobalStateQueue;
}},flushGlobalStateQueue:function(){var iw=qx.legacy.ui.core.Widget;
while(iw._globalStateQueue.length>0){var iv=qx.lang.Array.clone(iw._globalStateQueue);
iw._globalStateQueue=[];

for(var i=0,l=iv.length;i<l;i++){var ix=iv[i];

if(ix._isInGlobalStateQueue){ix._renderAppearance();
delete ix._isInGlobalStateQueue;
}}}},_globalJobQueue:[],addToGlobalJobQueue:function(lP){if(!lP._isInGlobalJobQueue&&lP._isDisplayable){this.__uv.schedule();
qx.legacy.ui.core.Widget._globalJobQueue.push(lP);
lP._isInGlobalJobQueue=true;
}},removeFromGlobalJobQueue:function(it){if(it._isInGlobalJobQueue){qx.lang.Array.remove(qx.legacy.ui.core.Widget._globalJobQueue,it);
delete it._isInGlobalJobQueue;
}},flushGlobalJobQueue:function(){var mA=qx.legacy.ui.core.Widget._globalJobQueue,mB,mC;

while((mB=mA.length)>0){for(var i=0;i<mB;i++){mC=mA[i];
mC._flushJobQueue(mC._jobQueue);
delete mC._isInGlobalJobQueue;
}mA.splice(0,mB);
}},_globalLayoutQueue:[],addToGlobalLayoutQueue:function(C){if(!C._isInGlobalLayoutQueue&&C._isDisplayable){this.__uv.schedule();
qx.legacy.ui.core.Widget._globalLayoutQueue.push(C);
C._isInGlobalLayoutQueue=true;
}},removeFromGlobalLayoutQueue:function(hc){if(hc._isInGlobalLayoutQueue){qx.lang.Array.remove(qx.legacy.ui.core.Widget._globalLayoutQueue,hc);
delete hc._isInGlobalLayoutQueue;
}},flushGlobalLayoutQueue:function(){var kv=qx.legacy.ui.core.Widget._globalLayoutQueue,kw,kx;

while((kw=kv.length)>0){for(var i=0;i<kw;i++){kx=kv[i];
kx._flushChildrenQueue();
delete kx._isInGlobalLayoutQueue;
}kv.splice(0,kw);
}},_fastGlobalDisplayQueue:[],_lazyGlobalDisplayQueues:{},addToGlobalDisplayQueue:function(je){if(!je._isInGlobalDisplayQueue&&je._isDisplayable){this.__uv.schedule();
var jf=je.getParent();

if(jf.isSeeable()){var jg=jf.toHashCode();

if(qx.legacy.ui.core.Widget._lazyGlobalDisplayQueues[jg]){qx.legacy.ui.core.Widget._lazyGlobalDisplayQueues[jg].push(je);
}else{qx.legacy.ui.core.Widget._lazyGlobalDisplayQueues[jg]=[je];
}}else{qx.legacy.ui.core.Widget._fastGlobalDisplayQueue.push(je);
}je._isInGlobalDisplayQueue=true;
}},removeFromGlobalDisplayQueue:function(P){},flushGlobalDisplayQueue:function(){var jG,jF,jI,jJ;
var jE=qx.legacy.ui.core.Widget._fastGlobalDisplayQueue;
var jH=qx.legacy.ui.core.Widget._lazyGlobalDisplayQueues;
for(var i=0,l=jE.length;i<l;i++){jI=jE[i];
jI.getParent()._getTargetNode().appendChild(jI.getElement());
}if(qx.Class.isDefined(cg)){for(jG in jH){jF=jH[jG];

for(var i=0;i<jF.length;i++){jI=jF[i];

if(jI instanceof qx.legacy.ui.basic.Inline){jI._beforeInsertDom();

try{document.getElementById(jI.getInlineNodeId()).appendChild(jI.getElement());
}catch(R){jI.debug("Could not append to inline id: "+jI.getInlineNodeId(),R);
}jI._afterInsertDom();
jI._afterAppear();
qx.lang.Array.remove(jF,jI);
i--;
delete jI._isInGlobalDisplayQueue;
}}}}for(jG in jH){jF=jH[jG];
if(document.createDocumentFragment&&jF.length>=3){jJ=document.createDocumentFragment();
for(var i=0,l=jF.length;i<l;i++){jI=jF[i];
jI._beforeInsertDom();
jJ.appendChild(jI.getElement());
}jF[0].getParent()._getTargetNode().appendChild(jJ);

for(var i=0,l=jF.length;i<l;i++){jI=jF[i];
jI._afterInsertDom();
}}else{for(var i=0,l=jF.length;i<l;i++){jI=jF[i];
jI._beforeInsertDom();
jI.getParent()._getTargetNode().appendChild(jI.getElement());
jI._afterInsertDom();
}}}for(jG in jH){jF=jH[jG];

for(var i=0,l=jF.length;i<l;i++){jI=jF[i];

if(jI.getVisibility()){jI._afterAppear();
}delete jI._isInGlobalDisplayQueue;
}delete jH[jG];
}for(var i=0,l=jE.length;i<l;i++){delete jE[i]._isInGlobalDisplayQueue;
}qx.lang.Array.removeAll(jE);
},getActiveSiblingHelperIgnore:function(iP,iQ){for(var j=0;j<iP.length;j++){if(iQ instanceof iP[j]){return true;
}}return false;
},getActiveSiblingHelper:function(iC,iD,iE,iF,iG){if(!iF){iF=[];
}var iH=iD.getChildren();
var iJ=iG==null?iH.indexOf(iC)+iE:iG===fI?0:iH.length-1;
var iI=iH[iJ];

while(iI&&(!iI.getEnabled()||qx.legacy.ui.core.Widget.getActiveSiblingHelperIgnore(iF,iI))){iJ+=iE;
iI=iH[iJ];

if(!iI){return null;
}}return iI;
},__um:function(lp){var lx=cL;
var ly=gs;
var lq=dI;
var lt=dM;
var lA=fN;
var lB=[gb,el,ga,eg,ge,gf,ek,ej,fX,fY];
var lu=[cP,eC,en,gv,fe,da,dG,dJ,bL,fF];
var lr=lx+gR;
var lz=ly+gR;
var lw=lq+cS;

for(var i=0;i<4;i++){lp[lr+lu[i]]=new Function(lA,lw+lu[i]+lt);
lp[lz+lu[i]]=new Function(lw+lu[i]+bX);
}var ls=lx+cx;
var lv=ly+cx;
var lC=lq+gK;

if(qx.core.Variant.isSet(gg,bT)){for(var i=0;i<4;i++){lp[ls+lu[i]]=new Function(lA,lC+lu[i]+lt);
lp[lv+lu[i]]=new Function(lC+lu[i]+bX);
}}else{for(var i=0;i<4;i++){lp[ls+lu[i]]=new Function(lA,dE+lu[i]+fQ);
lp[lv+lu[i]]=new Function(fn+lu[i]+cw);
}}for(var i=0;i<lB.length;i++){lp[lx+lu[i]]=new Function(lA,lq+lB[i]+lt);
lp[ly+lu[i]]=new Function(lq+lB[i]+bX);
}},TYPE_NULL:0,TYPE_PIXEL:1,TYPE_PERCENT:2,TYPE_AUTO:3,TYPE_FLEX:4,layoutPropertyTypes:{},__un:function(kj){var a=[ge,gf,ek,ej,fX,fY,gb,el,ga,eg];

for(var i=0,l=a.length,p,b,t;i<l;i++){p=a[i];
b=gw+qx.lang.String.firstUp(p);
t=b+eu;
kj.layoutPropertyTypes[p]={dataType:t,dataParsed:b+dT,dataValue:b+gG,typePixel:t+fO,typePercent:t+eq,typeAuto:t+gy,typeFlex:t+fT,typeNull:t+cr};
}},initScrollbarWidth:function(){var t=document.createElement(fz);
var s=t.style;
s.height=s.width=bH;
s.overflow=go;
document.body.appendChild(t);
var c=qx.legacy.html.Dimension.getScrollBarSizeRight(t);
qx.legacy.ui.core.Widget.SCROLLBAR_SIZE=c?c:16;
document.body.removeChild(t);
},_idCounter:0},properties:{enabled:{init:true,check:fW,inheritable:true,apply:gx,event:eK},parent:{check:dD,nullable:true,event:eA,apply:eB},element:{check:cm,nullable:true,apply:bJ,event:cY},visibility:{check:fW,init:true,apply:fp,event:gI},display:{check:fW,init:true,apply:cQ,event:dQ},anonymous:{check:fW,init:false,event:dn},horizontalAlign:{check:[gb,eT,el],themeable:true,nullable:true},verticalAlign:{check:[ga,ez,eg],themeable:true,nullable:true},allowStretchX:{check:fW,init:true},allowStretchY:{check:fW,init:true},zIndex:{check:ei,apply:eW,event:eR,themeable:true,nullable:true,init:null},backgroundColor:{nullable:true,init:null,apply:cN,event:cU,themeable:true},textColor:{nullable:true,apply:cJ,event:bE,themeable:true,inheritable:true},border:{nullable:true,init:null,apply:gu,event:cO,themeable:true},font:{nullable:true,apply:dV,event:eH,themeable:true,inheritable:true},opacity:{check:ei,apply:cI,themeable:true,nullable:true,init:null},cursor:{check:fy,apply:eD,themeable:true,nullable:true,init:null},backgroundImage:{check:fy,nullable:true,apply:gA,themeable:true},backgroundRepeat:{check:fy,nullable:true,apply:dC,themeable:true},overflow:{check:[ec,gc,go,gn,ee],nullable:true,apply:eF,event:gt,themeable:true,init:null},clipLeft:{check:gk,apply:gq,themeable:true,nullable:true},clipTop:{check:gk,apply:gq,themeable:true,nullable:true},clipWidth:{check:gk,apply:gq,themeable:true,nullable:true},clipHeight:{check:gk,apply:gq,themeable:true,nullable:true},tabIndex:{check:gk,nullable:true,init:null,apply:fk,event:dx},hideFocus:{check:fW,init:false,apply:cn,themeable:true},enableElementFocus:{check:fW,init:true},focused:{check:fW,init:false,apply:dy,event:dY},selectable:{check:fW,init:null,nullable:true,apply:fg},toolTip:{check:dP,nullable:true},contextMenu:{check:by,nullable:true},capture:{check:fW,init:false,apply:cK,event:fc},dropDataTypes:{nullable:true,dispose:true},command:{check:fs,nullable:true,apply:dH},appearance:{check:fy,init:fo,apply:cu,event:eJ},supportsDropMethod:{check:cM,nullable:true,init:null},marginTop:{check:ei,apply:bC,nullable:true,themeable:true},marginRight:{check:ei,apply:fP,nullable:true,themeable:true},marginBottom:{check:ei,apply:ey,nullable:true,themeable:true},marginLeft:{check:ei,apply:fj,nullable:true,themeable:true},paddingTop:{check:ei,apply:bG,nullable:true,themeable:true},paddingRight:{check:ei,apply:em,nullable:true,themeable:true},paddingBottom:{check:ei,apply:bF,nullable:true,themeable:true},paddingLeft:{check:ei,apply:fR,nullable:true,themeable:true},left:{apply:eb,event:ce,nullable:true,themeable:true,init:null},right:{apply:bA,event:eQ,nullable:true,themeable:true,init:null},width:{apply:eO,event:bS,nullable:true,themeable:true,init:null},minWidth:{apply:fM,event:dO,nullable:true,themeable:true,init:null},maxWidth:{apply:dX,event:bO,nullable:true,themeable:true,init:null},top:{apply:ev,event:cR,nullable:true,themeable:true,init:null},bottom:{apply:fq,event:gM,nullable:true,themeable:true,init:null},height:{apply:bR,event:cq,nullable:true,themeable:true,init:null},minHeight:{apply:fV,event:eL,nullable:true,themeable:true,init:null},maxHeight:{apply:dU,event:eS,nullable:true,themeable:true,init:null},location:{group:[gb,ga],themeable:true},dimension:{group:[ge,gf],themeable:true},space:{group:[gb,ge,ga,gf],themeable:true},edge:{group:[ga,el,eg,gb],themeable:true,mode:fB},padding:{group:[cD,ds,dr,cy],mode:fB,themeable:true},margin:{group:[cA,cC,cb,dm],mode:fB,themeable:true},heights:{group:[fX,gf,fY],themeable:true},widths:{group:[ek,ge,ej],themeable:true},align:{group:[gB,dA],themeable:true},clipLocation:{group:[di,gU]},clipDimension:{group:[dk,cB]},clip:{group:[di,gU,dk,cB]}},members:{_computedLeftValue:null,_computedLeftParsed:null,_computedLeftType:null,_computedLeftTypeNull:true,_computedLeftTypePixel:false,_computedLeftTypePercent:false,_computedLeftTypeAuto:false,_computedLeftTypeFlex:false,_computedRightValue:null,_computedRightParsed:null,_computedRightType:null,_computedRightTypeNull:true,_computedRightTypePixel:false,_computedRightTypePercent:false,_computedRightTypeAuto:false,_computedRightTypeFlex:false,_computedTopValue:null,_computedTopParsed:null,_computedTopType:null,_computedTopTypeNull:true,_computedTopTypePixel:false,_computedTopTypePercent:false,_computedTopTypeAuto:false,_computedTopTypeFlex:false,_computedBottomValue:null,_computedBottomParsed:null,_computedBottomType:null,_computedBottomTypeNull:true,_computedBottomTypePixel:false,_computedBottomTypePercent:false,_computedBottomTypeAuto:false,_computedBottomTypeFlex:false,_computedWidthValue:null,_computedWidthParsed:null,_computedWidthType:null,_computedWidthTypeNull:true,_computedWidthTypePixel:false,_computedWidthTypePercent:false,_computedWidthTypeAuto:false,_computedWidthTypeFlex:false,_computedMinWidthValue:null,_computedMinWidthParsed:null,_computedMinWidthType:null,_computedMinWidthTypeNull:true,_computedMinWidthTypePixel:false,_computedMinWidthTypePercent:false,_computedMinWidthTypeAuto:false,_computedMinWidthTypeFlex:false,_computedMaxWidthValue:null,_computedMaxWidthParsed:null,_computedMaxWidthType:null,_computedMaxWidthTypeNull:true,_computedMaxWidthTypePixel:false,_computedMaxWidthTypePercent:false,_computedMaxWidthTypeAuto:false,_computedMaxWidthTypeFlex:false,_computedHeightValue:null,_computedHeightParsed:null,_computedHeightType:null,_computedHeightTypeNull:true,_computedHeightTypePixel:false,_computedHeightTypePercent:false,_computedHeightTypeAuto:false,_computedHeightTypeFlex:false,_computedMinHeightValue:null,_computedMinHeightParsed:null,_computedMinHeightType:null,_computedMinHeightTypeNull:true,_computedMinHeightTypePixel:false,_computedMinHeightTypePercent:false,_computedMinHeightTypeAuto:false,_computedMinHeightTypeFlex:false,_computedMaxHeightValue:null,_computedMaxHeightParsed:null,_computedMaxHeightType:null,_computedMaxHeightTypeNull:true,_computedMaxHeightTypePixel:false,_computedMaxHeightTypePercent:false,_computedMaxHeightTypeAuto:false,_computedMaxHeightTypeFlex:false,_applyLeft:function(jr,js){this._unitDetectionPixelPercent(gb,jr);
this.addToQueue(gb);
},_applyRight:function(lY,ma){this._unitDetectionPixelPercent(el,lY);
this.addToQueue(el);
},_applyTop:function(hY,ia){this._unitDetectionPixelPercent(ga,hY);
this.addToQueue(ga);
},_applyBottom:function(ic,ie){this._unitDetectionPixelPercent(eg,ic);
this.addToQueue(eg);
},_applyWidth:function(ik,il){this._unitDetectionPixelPercentAutoFlex(ge,ik);
this.addToQueue(ge);
},_applyMinWidth:function(my,mz){this._unitDetectionPixelPercentAuto(ek,my);
this.addToQueue(ek);
},_applyMaxWidth:function(mk,ml){this._unitDetectionPixelPercentAuto(ej,mk);
this.addToQueue(ej);
},_applyHeight:function(hd,he){this._unitDetectionPixelPercentAutoFlex(gf,hd);
this.addToQueue(gf);
},_applyMinHeight:function(lg,lh){this._unitDetectionPixelPercentAuto(fX,lg);
this.addToQueue(fX);
},_applyMaxHeight:function(la,lb){this._unitDetectionPixelPercentAuto(fY,la);
this.addToQueue(fY);
},isMaterialized:function(){var hz=this._element;
return (this._initialLayoutDone&&this._isDisplayable&&qx.legacy.html.Style.getStyleProperty(hz,gh)!=gm&&qx.legacy.html.Style.getStyleProperty(hz,gH)!=ec&&hz.offsetWidth>0&&hz.offsetHeight>0);
},pack:function(){this.setWidth(this.getPreferredBoxWidth());
this.setHeight(this.getPreferredBoxHeight());
},auto:function(){this.setWidth(gc);
this.setHeight(gc);
},getChildren:qx.lang.Function.returnNull,_getChildren:function(){return this.getChildren();
},getLayoutParent:function(){return this.getParent();
},getChildrenLength:qx.lang.Function.returnZero,hasChildren:qx.lang.Function.returnFalse,isEmpty:qx.lang.Function.returnTrue,indexOf:function(){return -1;
},contains:qx.lang.Function.returnFalse,getVisibleChildren:qx.lang.Function.returnNull,getVisibleChildrenLength:qx.lang.Function.returnZero,hasVisibleChildren:qx.lang.Function.returnFalse,isVisibleEmpty:qx.lang.Function.returnTrue,_hasParent:false,_isDisplayable:false,isDisplayable:function(){return this._isDisplayable;
},_checkParent:function(ln,lo){if(this.contains(ln)){throw new Error("Could not insert myself into a child "+ln+"!");
}return ln;
},_applyParent:function(kW,kX){if(kX){var kY=kX.getChildren().indexOf(this);
this._computedWidthValue=this._computedMinWidthValue=this._computedMaxWidthValue=this._computedLeftValue=this._computedRightValue=null;
this._computedHeightValue=this._computedMinHeightValue=this._computedMaxHeightValue=this._computedTopValue=this._computedBottomValue=null;
this._cachedBoxWidth=this._cachedInnerWidth=this._cachedOuterWidth=null;
this._cachedBoxHeight=this._cachedInnerHeight=this._cachedOuterHeight=null;
qx.lang.Array.removeAt(kX.getChildren(),kY);
kX._invalidateVisibleChildren();
kX._removeChildFromChildrenQueue(this);
kX.getLayoutImpl().updateChildrenOnRemoveChild(this,kY);
kX.addToJobQueue(de);
kX._invalidatePreferredInnerDimensions();
this._oldParent=kX;
}
if(kW){this._hasParent=true;

if(typeof this._insertIndex==gp){qx.lang.Array.insertAt(kW.getChildren(),this,this._insertIndex);
delete this._insertIndex;
}else{kW.getChildren().push(this);
}}else{this._hasParent=false;
}qx.core.Property.refresh(this);
return this._handleDisplayable(dp);
},_applyDisplay:function(jo,jp){return this._handleDisplayable(gh);
},_handleDisplayable:function(mb){var md=this._computeDisplayable();

if(this._isDisplayable==md&&!(md&&mb==dp)){return true;
}this._isDisplayable=md;
var mc=this.getParent();
if(mc){mc._invalidateVisibleChildren();
mc._invalidatePreferredInnerDimensions();
}if(mb&&this._oldParent&&this._oldParent._initialLayoutDone){var me=this.getElement();

if(me){if(this.getVisibility()){this._beforeDisappear();
}this._beforeRemoveDom();

try{this._oldParent._getTargetNode().removeChild(me);
}catch(jC){}this._afterRemoveDom();

if(this.getVisibility()){this._afterDisappear();
}}delete this._oldParent;
}if(md){if(mc._initialLayoutDone){mc.getLayoutImpl().updateChildrenOnAddChild(this,mc.getChildren().indexOf(this));
mc.addToJobQueue(dK);
}this.addToLayoutChanges(fb);
this.addToCustomQueues(mb);
if(this.getVisibility()){this._beforeAppear();
}if(!this._isCreated){qx.legacy.ui.core.Widget.addToGlobalElementQueue(this);
}qx.legacy.ui.core.Widget.addToGlobalStateQueue(this);

if(!qx.lang.Object.isEmpty(this._jobQueue)){qx.legacy.ui.core.Widget.addToGlobalJobQueue(this);
}
if(!qx.lang.Object.isEmpty(this._childrenQueue)){qx.legacy.ui.core.Widget.addToGlobalLayoutQueue(this);
}}else{qx.legacy.ui.core.Widget.removeFromGlobalElementQueue(this);
qx.legacy.ui.core.Widget.removeFromGlobalStateQueue(this);
qx.legacy.ui.core.Widget.removeFromGlobalJobQueue(this);
qx.legacy.ui.core.Widget.removeFromGlobalLayoutQueue(this);
this.removeFromCustomQueues(mb);
if(mc&&mb){if(this.getVisibility()){this._beforeDisappear();
}if(mc._initialLayoutDone&&this._initialLayoutDone){mc.getLayoutImpl().updateChildrenOnRemoveChild(this,mc.getChildren().indexOf(this));
mc.addToJobQueue(de);
this._beforeRemoveDom();
var mf=this.getElement().parentNode;

if(mf){mf.removeChild(this.getElement());
if(mf&&mf!==mc._getTargetNode()){this.warn("Unexpected parent node: "+mf);
}}this._afterRemoveDom();
}mc._removeChildFromChildrenQueue(this);

if(this.getVisibility()){this._afterDisappear();
}}}this._handleDisplayableCustom(md,mc,mb);
return true;
},addToCustomQueues:qx.lang.Function.returnTrue,removeFromCustomQueues:qx.lang.Function.returnTrue,_handleDisplayableCustom:qx.lang.Function.returnTrue,_computeDisplayable:function(){return this.getDisplay()&&this.getParent()&&this.getParent()._isDisplayable?true:false;
},_beforeAppear:function(){this.fireEvent(bI);
},_afterAppear:function(){this._isSeeable=true;
this.fireEvent(gF);
},_beforeDisappear:function(){this.removeState(du);

if(qx.Class.isDefined(gO)){this.removeState(dh);
this.removeState(gW);
}this.fireEvent(dS);
},_afterDisappear:function(){this._isSeeable=false;
this.fireEvent(dN);
},_isSeeable:false,isSeeable:function(){return this._isSeeable;
},isAppearRelevant:function(){return this.getVisibility()&&this._isDisplayable;
},_beforeInsertDom:function(){this.fireEvent(gJ);
},_afterInsertDom:function(){this.fireEvent(fm);
},_beforeRemoveDom:function(){this.fireEvent(fS);
},_afterRemoveDom:function(){this.fireEvent(cf);
},_applyVisibility:function(iL,iM){if(iL){if(this._isDisplayable){this._beforeAppear();
}this.removeStyleProperty(gh);

if(this._isDisplayable){this._afterAppear();
}}else{if(this._isDisplayable){this._beforeDisappear();
}this.setStyleProperty(gh,gm);

if(this._isDisplayable){this._afterDisappear();
}}},show:function(){this.setVisibility(true);
this.setDisplay(true);
},hide:function(){this.setVisibility(false);
},connect:function(){this.setDisplay(true);
},disconnect:function(){this.setDisplay(false);
},_isCreated:false,_getTargetNode:qx.core.Variant.select(gg,{"gecko":function(){return this._element;
},"default":function(){return this._borderElement||this._element;
}}),addToDocument:function(){qx.legacy.ui.core.ClientDocument.getInstance().add(this);
},isCreated:function(){return this._isCreated;
},_createElementImpl:function(){this.setElement(this.getTopLevelWidget().getDocumentElement().createElement(fz));
},_applyElement:function(N,O){this._isCreated=N!=null;

if(O){O.qx_Widget=null;
}
if(N){N.qx_Widget=this;
N.style.position=cG;
this._element=N;
this._style=N.style;
this._applyStyleProperties(N);
this._applyHtmlProperties(N);
this._applyHtmlAttributes(N);
this._applyElementData(N);
this.fireEvent(eV);
this.addToStateQueue();
}else{this._element=this._style=null;
}},addToJobQueue:function(p){if(this._hasParent){qx.legacy.ui.core.Widget.addToGlobalJobQueue(this);
}
if(!this._jobQueue){this._jobQueue={};
}this._jobQueue[p]=true;
return true;
},_flushJobQueue:function(q){try{var bk=this._jobQueue;
var bs=this.getParent();

if(!bs||qx.lang.Object.isEmpty(bk)){return;
}var br=this instanceof qx.legacy.ui.core.Parent?this.getLayoutImpl():null;

if(br){br.updateSelfOnJobQueueFlush(bk);
}}catch(hh){this.error("Flushing job queue (prechecks#1) failed",hh);
}try{var bn=false;
var bv=bk.marginLeft||bk.marginRight;
var bu=bk.marginTop||bk.marginBottom;
var bt=bk.frameWidth;
var bq=bk.frameHeight;
var bp=(bk.frameWidth||bk.preferredInnerWidth)&&this._recomputePreferredBoxWidth();
var bm=(bk.frameHeight||bk.preferredInnerHeight)&&this._recomputePreferredBoxHeight();

if(bp){var bw=this.getPreferredBoxWidth();

if(this._computedWidthTypeAuto){this._computedWidthValue=bw;
bk.width=true;
}
if(this._computedMinWidthTypeAuto){this._computedMinWidthValue=bw;
bk.minWidth=true;
}
if(this._computedMaxWidthTypeAuto){this._computedMaxWidthValue=bw;
bk.maxWidth=true;
}}
if(bm){var bw=this.getPreferredBoxHeight();

if(this._computedHeightTypeAuto){this._computedHeightValue=bw;
bk.height=true;
}
if(this._computedMinHeightTypeAuto){this._computedMinHeightValue=bw;
bk.minHeight=true;
}
if(this._computedMaxHeightTypeAuto){this._computedMaxHeightValue=bw;
bk.maxHeight=true;
}}
if((bk.width||bk.minWidth||bk.maxWidth||bk.left||bk.right)&&this._recomputeBoxWidth()){bv=bt=true;
}
if((bk.height||bk.minHeight||bk.maxHeight||bk.top||bk.bottom)&&this._recomputeBoxHeight()){bu=bq=true;
}}catch(iK){this.error("Flushing job queue (recompute#2) failed",iK);
}try{if((bv&&this._recomputeOuterWidth())||bp){bs._invalidatePreferredInnerWidth();
bs.getLayoutImpl().updateSelfOnChildOuterWidthChange(this);
bn=true;
}
if((bu&&this._recomputeOuterHeight())||bm){bs._invalidatePreferredInnerHeight();
bs.getLayoutImpl().updateSelfOnChildOuterHeightChange(this);
bn=true;
}
if(bn){bs._flushJobQueue();
}}catch(kc){this.error("Flushing job queue (parentsignals#3) failed",kc);
}try{bs._addChildToChildrenQueue(this);
for(var i in bk){this._layoutChanges[i]=true;
}}catch(jh){this.error("Flushing job queue (addjobs#4) failed",jh);
}try{if(this instanceof qx.legacy.ui.core.Parent&&(bk.paddingLeft||bk.paddingRight||bk.paddingTop||bk.paddingBottom)){var bl=this.getChildren(),bo=bl.length;

if(bk.paddingLeft){for(var i=0;i<bo;i++){bl[i].addToLayoutChanges(eG);
}}
if(bk.paddingRight){for(var i=0;i<bo;i++){bl[i].addToLayoutChanges(cH);
}}
if(bk.paddingTop){for(var i=0;i<bo;i++){bl[i].addToLayoutChanges(fr);
}}
if(bk.paddingBottom){for(var i=0;i<bo;i++){bl[i].addToLayoutChanges(eU);
}}}
if(bt){this._recomputeInnerWidth();
}
if(bq){this._recomputeInnerHeight();
}
if(this._initialLayoutDone){if(br){br.updateChildrenOnJobQueueFlush(bk);
}}}catch(bx){this.error("Flushing job queue (childrensignals#5) failed",bx);
}delete this._jobQueue;
},_isWidthEssential:qx.lang.Function.returnTrue,_isHeightEssential:qx.lang.Function.returnTrue,_computeBoxWidthFallback:function(){return 0;
},_computeBoxHeightFallback:function(){return 0;
},_computeBoxWidth:function(){var m=this.getParent().getLayoutImpl();
return Math.max(0,qx.lang.Number.limit(m.computeChildBoxWidth(this),this.getMinWidthValue(),this.getMaxWidthValue()));
},_computeBoxHeight:function(){var jj=this.getParent().getLayoutImpl();
return Math.max(0,qx.lang.Number.limit(jj.computeChildBoxHeight(this),this.getMinHeightValue(),this.getMaxHeightValue()));
},_computeOuterWidth:function(){return Math.max(0,(this.getMarginLeft()+this.getBoxWidth()+this.getMarginRight()));
},_computeOuterHeight:function(){return Math.max(0,(this.getMarginTop()+this.getBoxHeight()+this.getMarginBottom()));
},_computeInnerWidth:function(){return Math.max(0,this.getBoxWidth()-this.getFrameWidth());
},_computeInnerHeight:function(){return Math.max(0,this.getBoxHeight()-this.getFrameHeight());
},getNeededWidth:function(){var jD=this.getParent().getLayoutImpl();
return Math.max(0,jD.computeChildNeededWidth(this));
},getNeededHeight:function(){var kR=this.getParent().getLayoutImpl();
return Math.max(0,kR.computeChildNeededHeight(this));
},_recomputeFlexX:function(){if(!this.getHasFlexX()){return false;
}
if(this._computedWidthTypeFlex){this._computedWidthValue=null;
this.addToLayoutChanges(ge);
}return true;
},_recomputeFlexY:function(){if(!this.getHasFlexY()){return false;
}
if(this._computedHeightTypeFlex){this._computedHeightValue=null;
this.addToLayoutChanges(gf);
}return true;
},_recomputePercentX:function(){if(!this.getHasPercentX()){return false;
}
if(this._computedWidthTypePercent){this._computedWidthValue=null;
this.addToLayoutChanges(ge);
}
if(this._computedMinWidthTypePercent){this._computedMinWidthValue=null;
this.addToLayoutChanges(ek);
}
if(this._computedMaxWidthTypePercent){this._computedMaxWidthValue=null;
this.addToLayoutChanges(ej);
}
if(this._computedLeftTypePercent){this._computedLeftValue=null;
this.addToLayoutChanges(gb);
}
if(this._computedRightTypePercent){this._computedRightValue=null;
this.addToLayoutChanges(el);
}return true;
},_recomputePercentY:function(){if(!this.getHasPercentY()){return false;
}
if(this._computedHeightTypePercent){this._computedHeightValue=null;
this.addToLayoutChanges(gf);
}
if(this._computedMinHeightTypePercent){this._computedMinHeightValue=null;
this.addToLayoutChanges(fX);
}
if(this._computedMaxHeightTypePercent){this._computedMaxHeightValue=null;
this.addToLayoutChanges(fY);
}
if(this._computedTopTypePercent){this._computedTopValue=null;
this.addToLayoutChanges(ga);
}
if(this._computedBottomTypePercent){this._computedBottomValue=null;
this.addToLayoutChanges(eg);
}return true;
},_recomputeRangeX:qx.core.Variant.select(gg,{"mshtml|opera|webkit":function(){if(this._computedLeftTypeNull||this._computedRightTypeNull){return false;
}this.addToLayoutChanges(ge);
return true;
},"default":function(){return !(this._computedLeftTypeNull||this._computedRightTypeNull);
}}),_recomputeRangeY:qx.core.Variant.select(gg,{"mshtml|opera|webkit":function(){if(this._computedTopTypeNull||this._computedBottomTypeNull){return false;
}this.addToLayoutChanges(gf);
return true;
},"default":function(){return !(this._computedTopTypeNull||this._computedBottomTypeNull);
}}),_recomputeStretchingX:qx.core.Variant.select(gg,{"mshtml|opera|webkit":function(){if(this.getAllowStretchX()&&this._computedWidthTypeNull){this._computedWidthValue=null;
this.addToLayoutChanges(ge);
return true;
}return false;
},"default":function(){if(this.getAllowStretchX()&&this._computedWidthTypeNull){return true;
}return false;
}}),_recomputeStretchingY:qx.core.Variant.select(gg,{"mshtml|opera|webkit":function(){if(this.getAllowStretchY()&&this._computedHeightTypeNull){this._computedHeightValue=null;
this.addToLayoutChanges(gf);
return true;
}return false;
},"default":function(){if(this.getAllowStretchY()&&this._computedHeightTypeNull){return true;
}return false;
}}),_computeValuePixel:function(v){return Math.round(v);
},_computeValuePixelLimit:function(v){return Math.max(0,this._computeValuePixel(v));
},_computeValuePercentX:function(v){return Math.round(this.getParent().getInnerWidthForChild(this)*v*0.01);
},_computeValuePercentXLimit:function(v){return Math.max(0,this._computeValuePercentX(v));
},_computeValuePercentY:function(v){return Math.round(this.getParent().getInnerHeightForChild(this)*v*0.01);
},_computeValuePercentYLimit:function(v){return Math.max(0,this._computeValuePercentY(v));
},getWidthValue:function(){if(this._computedWidthValue!=null){return this._computedWidthValue;
}
switch(this._computedWidthType){case qx.legacy.ui.core.Widget.TYPE_PIXEL:return this._computedWidthValue=this._computeValuePixelLimit(this._computedWidthParsed);
case qx.legacy.ui.core.Widget.TYPE_PERCENT:return this._computedWidthValue=this._computeValuePercentXLimit(this._computedWidthParsed);
case qx.legacy.ui.core.Widget.TYPE_AUTO:return this._computedWidthValue=this.getPreferredBoxWidth();
case qx.legacy.ui.core.Widget.TYPE_FLEX:if(this.getParent().getLayoutImpl().computeChildrenFlexWidth===undefined){throw new Error("Widget "+this+": having horizontal flex size (width="+this.getWidth()+") but parent layout "+this.getParent()+" does not support it");
}this.getParent().getLayoutImpl().computeChildrenFlexWidth();
return this._computedWidthValue=this._computedWidthFlexValue;
}return null;
},getMinWidthValue:function(){if(this._computedMinWidthValue!=null){return this._computedMinWidthValue;
}
switch(this._computedMinWidthType){case qx.legacy.ui.core.Widget.TYPE_PIXEL:return this._computedWidthValue=this._computeValuePixelLimit(this._computedMinWidthParsed);
case qx.legacy.ui.core.Widget.TYPE_PERCENT:return this._computedWidthValue=this._computeValuePercentXLimit(this._computedMinWidthParsed);
case qx.legacy.ui.core.Widget.TYPE_AUTO:return this._computedMinWidthValue=this.getPreferredBoxWidth();
}return null;
},getMaxWidthValue:function(){if(this._computedMaxWidthValue!=null){return this._computedMaxWidthValue;
}
switch(this._computedMaxWidthType){case qx.legacy.ui.core.Widget.TYPE_PIXEL:return this._computedWidthValue=this._computeValuePixelLimit(this._computedMaxWidthParsed);
case qx.legacy.ui.core.Widget.TYPE_PERCENT:return this._computedWidthValue=this._computeValuePercentXLimit(this._computedMaxWidthParsed);
case qx.legacy.ui.core.Widget.TYPE_AUTO:return this._computedMaxWidthValue=this.getPreferredBoxWidth();
}return null;
},getLeftValue:function(){if(this._computedLeftValue!=null){return this._computedLeftValue;
}
switch(this._computedLeftType){case qx.legacy.ui.core.Widget.TYPE_PIXEL:return this._computedLeftValue=this._computeValuePixel(this._computedLeftParsed);
case qx.legacy.ui.core.Widget.TYPE_PERCENT:return this._computedLeftValue=this._computeValuePercentX(this._computedLeftParsed);
}return null;
},getRightValue:function(){if(this._computedRightValue!=null){return this._computedRightValue;
}
switch(this._computedRightType){case qx.legacy.ui.core.Widget.TYPE_PIXEL:return this._computedRightValue=this._computeValuePixel(this._computedRightParsed);
case qx.legacy.ui.core.Widget.TYPE_PERCENT:return this._computedRightValue=this._computeValuePercentX(this._computedRightParsed);
}return null;
},getHeightValue:function(){if(this._computedHeightValue!=null){return this._computedHeightValue;
}
switch(this._computedHeightType){case qx.legacy.ui.core.Widget.TYPE_PIXEL:return this._computedHeightValue=this._computeValuePixelLimit(this._computedHeightParsed);
case qx.legacy.ui.core.Widget.TYPE_PERCENT:return this._computedHeightValue=this._computeValuePercentYLimit(this._computedHeightParsed);
case qx.legacy.ui.core.Widget.TYPE_AUTO:return this._computedHeightValue=this.getPreferredBoxHeight();
case qx.legacy.ui.core.Widget.TYPE_FLEX:if(this.getParent().getLayoutImpl().computeChildrenFlexHeight===undefined){throw new Error("Widget "+this+": having vertical flex size (height="+this.getHeight()+") but parent layout "+this.getParent()+" does not support it");
}this.getParent().getLayoutImpl().computeChildrenFlexHeight();
return this._computedHeightValue=this._computedHeightFlexValue;
}return null;
},getMinHeightValue:function(){if(this._computedMinHeightValue!=null){return this._computedMinHeightValue;
}
switch(this._computedMinHeightType){case qx.legacy.ui.core.Widget.TYPE_PIXEL:return this._computedMinHeightValue=this._computeValuePixelLimit(this._computedMinHeightParsed);
case qx.legacy.ui.core.Widget.TYPE_PERCENT:return this._computedMinHeightValue=this._computeValuePercentYLimit(this._computedMinHeightParsed);
case qx.legacy.ui.core.Widget.TYPE_AUTO:return this._computedMinHeightValue=this.getPreferredBoxHeight();
}return null;
},getMaxHeightValue:function(){if(this._computedMaxHeightValue!=null){return this._computedMaxHeightValue;
}
switch(this._computedMaxHeightType){case qx.legacy.ui.core.Widget.TYPE_PIXEL:return this._computedMaxHeightValue=this._computeValuePixelLimit(this._computedMaxHeightParsed);
case qx.legacy.ui.core.Widget.TYPE_PERCENT:return this._computedMaxHeightValue=this._computeValuePercentYLimit(this._computedMaxHeightParsed);
case qx.legacy.ui.core.Widget.TYPE_AUTO:return this._computedMaxHeightValue=this.getPreferredBoxHeight();
}return null;
},getTopValue:function(){if(this._computedTopValue!=null){return this._computedTopValue;
}
switch(this._computedTopType){case qx.legacy.ui.core.Widget.TYPE_PIXEL:return this._computedTopValue=this._computeValuePixel(this._computedTopParsed);
case qx.legacy.ui.core.Widget.TYPE_PERCENT:return this._computedTopValue=this._computeValuePercentY(this._computedTopParsed);
}return null;
},getBottomValue:function(){if(this._computedBottomValue!=null){return this._computedBottomValue;
}
switch(this._computedBottomType){case qx.legacy.ui.core.Widget.TYPE_PIXEL:return this._computedBottomValue=this._computeValuePixel(this._computedBottomParsed);
case qx.legacy.ui.core.Widget.TYPE_PERCENT:return this._computedBottomValue=this._computeValuePercentY(this._computedBottomParsed);
}return null;
},_computeFrameWidth:function(){var jn=this._cachedBorderLeft+this.getPaddingLeft()+this.getPaddingRight()+this._cachedBorderRight;

switch(this.getOverflow()){case go:case ee:jn+=qx.legacy.ui.core.Widget.SCROLLBAR_SIZE;
break;
case gc:break;
}return jn;
},_computeFrameHeight:function(){var V=this._cachedBorderTop+this.getPaddingTop()+this.getPaddingBottom()+this._cachedBorderBottom;

switch(this.getOverflow()){case go:case gn:V+=qx.legacy.ui.core.Widget.SCROLLBAR_SIZE;
break;
case gc:break;
}return V;
},_invalidateFrameDimensions:function(){this._invalidateFrameWidth();
this._invalidateFrameHeight();
},_invalidatePreferredInnerDimensions:function(){this._invalidatePreferredInnerWidth();
this._invalidatePreferredInnerHeight();
},_computePreferredBoxWidth:function(){try{return Math.max(0,this.getPreferredInnerWidth()+this.getFrameWidth());
}catch(mi){this.error("_computePreferredBoxWidth failed",mi);
}},_computePreferredBoxHeight:function(){try{return Math.max(0,this.getPreferredInnerHeight()+this.getFrameHeight());
}catch(hB){this.error("_computePreferredBoxHeight failed",hB);
}},_initialLayoutDone:false,addToLayoutChanges:function(p){if(this._isDisplayable){this.getParent()._addChildToChildrenQueue(this);
}return this._layoutChanges[p]=true;
},addToQueue:function(p){this._initialLayoutDone?this.addToJobQueue(p):this.addToLayoutChanges(p);
},addToQueueRuntime:function(p){return !this._initialLayoutDone||this.addToJobQueue(p);
},_computeHasPercentX:function(){return (this._computedLeftTypePercent||this._computedWidthTypePercent||this._computedMinWidthTypePercent||this._computedMaxWidthTypePercent||this._computedRightTypePercent);
},_computeHasPercentY:function(){return (this._computedTopTypePercent||this._computedHeightTypePercent||this._computedMinHeightTypePercent||this._computedMaxHeightTypePercent||this._computedBottomTypePercent);
},_computeHasAutoX:function(){return (this._computedWidthTypeAuto||this._computedMinWidthTypeAuto||this._computedMaxWidthTypeAuto);
},_computeHasAutoY:function(){return (this._computedHeightTypeAuto||this._computedMinHeightTypeAuto||this._computedMaxHeightTypeAuto);
},_computeHasFlexX:function(){return this._computedWidthTypeFlex;
},_computeHasFlexY:function(){return this._computedHeightTypeFlex;
},_evalUnitsPixelPercentAutoFlex:function(lO){switch(lO){case gc:return qx.legacy.ui.core.Widget.TYPE_AUTO;
case Infinity:case -Infinity:return qx.legacy.ui.core.Widget.TYPE_NULL;
}
switch(typeof lO){case gp:return isNaN(lO)?qx.legacy.ui.core.Widget.TYPE_NULL:qx.legacy.ui.core.Widget.TYPE_PIXEL;
case bY:return lO.indexOf(fC)!=-1?qx.legacy.ui.core.Widget.TYPE_PERCENT:lO.indexOf(dF)!=-1?qx.legacy.ui.core.Widget.TYPE_FLEX:qx.legacy.ui.core.Widget.TYPE_NULL;
}return qx.legacy.ui.core.Widget.TYPE_NULL;
},_evalUnitsPixelPercentAuto:function(lD){switch(lD){case gc:return qx.legacy.ui.core.Widget.TYPE_AUTO;
case Infinity:case -Infinity:return qx.legacy.ui.core.Widget.TYPE_NULL;
}
switch(typeof lD){case gp:return isNaN(lD)?qx.legacy.ui.core.Widget.TYPE_NULL:qx.legacy.ui.core.Widget.TYPE_PIXEL;
case bY:return lD.indexOf(fC)!=-1?qx.legacy.ui.core.Widget.TYPE_PERCENT:qx.legacy.ui.core.Widget.TYPE_NULL;
}return qx.legacy.ui.core.Widget.TYPE_NULL;
},_evalUnitsPixelPercent:function(lS){switch(lS){case Infinity:case -Infinity:return qx.legacy.ui.core.Widget.TYPE_NULL;
}
switch(typeof lS){case gp:return isNaN(lS)?qx.legacy.ui.core.Widget.TYPE_NULL:qx.legacy.ui.core.Widget.TYPE_PIXEL;
case bY:return lS.indexOf(fC)!=-1?qx.legacy.ui.core.Widget.TYPE_PERCENT:qx.legacy.ui.core.Widget.TYPE_NULL;
}return qx.legacy.ui.core.Widget.TYPE_NULL;
},_unitDetectionPixelPercentAutoFlex:function(name,hk){var r=qx.legacy.ui.core.Widget.layoutPropertyTypes[name];
var s=r.dataType;
var p=r.dataParsed;
var v=r.dataValue;
var hn=r.typePixel;
var hm=r.typePercent;
var hl=r.typeAuto;
var hr=r.typeFlex;
var hq=r.typeNull;
var ho=this[hm];
var hp=this[hl];
var hs=this[hr];

switch(this[s]=this._evalUnitsPixelPercentAutoFlex(hk)){case qx.legacy.ui.core.Widget.TYPE_PIXEL:this[hn]=true;
this[hm]=this[hl]=this[hr]=this[hq]=false;
this[p]=this[v]=Math.round(hk);
break;
case qx.legacy.ui.core.Widget.TYPE_PERCENT:this[hm]=true;
this[hn]=this[hl]=this[hr]=this[hq]=false;
this[p]=parseFloat(hk);
this[v]=null;
break;
case qx.legacy.ui.core.Widget.TYPE_AUTO:this[hl]=true;
this[hn]=this[hm]=this[hr]=this[hq]=false;
this[p]=this[v]=null;
break;
case qx.legacy.ui.core.Widget.TYPE_FLEX:this[hr]=true;
this[hn]=this[hm]=this[hl]=this[hq]=false;
this[p]=parseFloat(hk);
this[v]=null;
break;
default:this[hq]=true;
this[hn]=this[hm]=this[hl]=this[hr]=false;
this[p]=this[v]=null;
break;
}
if(ho!=this[hm]){switch(name){case ek:case ej:case ge:case gb:case el:this._invalidateHasPercentX();
break;
case fY:case fX:case gf:case ga:case eg:this._invalidateHasPercentY();
break;
}}if(hp!=this[hl]){switch(name){case ek:case ej:case ge:this._invalidateHasAutoX();
break;
case fX:case fY:case gf:this._invalidateHasAutoY();
break;
}}if(hs!=this[hr]){switch(name){case ge:this._invalidateHasFlexX();
break;
case gf:this._invalidateHasFlexY();
break;
}}},_unitDetectionPixelPercentAuto:function(name,jK){var r=qx.legacy.ui.core.Widget.layoutPropertyTypes[name];
var s=r.dataType;
var p=r.dataParsed;
var v=r.dataValue;
var jN=r.typePixel;
var jM=r.typePercent;
var jL=r.typeAuto;
var jQ=r.typeNull;
var jO=this[jM];
var jP=this[jL];

switch(this[s]=this._evalUnitsPixelPercentAuto(jK)){case qx.legacy.ui.core.Widget.TYPE_PIXEL:this[jN]=true;
this[jM]=this[jL]=this[jQ]=false;
this[p]=this[v]=Math.round(jK);
break;
case qx.legacy.ui.core.Widget.TYPE_PERCENT:this[jM]=true;
this[jN]=this[jL]=this[jQ]=false;
this[p]=parseFloat(jK);
this[v]=null;
break;
case qx.legacy.ui.core.Widget.TYPE_AUTO:this[jL]=true;
this[jN]=this[jM]=this[jQ]=false;
this[p]=this[v]=null;
break;
default:this[jQ]=true;
this[jN]=this[jM]=this[jL]=false;
this[p]=this[v]=null;
break;
}
if(jO!=this[jM]){switch(name){case ek:case ej:case ge:case gb:case el:this._invalidateHasPercentX();
break;
case fX:case fY:case gf:case ga:case eg:this._invalidateHasPercentY();
break;
}}if(jP!=this[jL]){switch(name){case ek:case ej:case ge:this._invalidateHasAutoX();
break;
case fX:case fY:case gf:this._invalidateHasAutoY();
break;
}}},_unitDetectionPixelPercent:function(name,kd){var r=qx.legacy.ui.core.Widget.layoutPropertyTypes[name];
var s=r.dataType;
var p=r.dataParsed;
var v=r.dataValue;
var kg=r.typePixel;
var kf=r.typePercent;
var ke=r.typeNull;
var kh=this[kf];

switch(this[s]=this._evalUnitsPixelPercent(kd)){case qx.legacy.ui.core.Widget.TYPE_PIXEL:this[kg]=true;
this[kf]=this[ke]=false;
this[p]=this[v]=Math.round(kd);
break;
case qx.legacy.ui.core.Widget.TYPE_PERCENT:this[kf]=true;
this[kg]=this[ke]=false;
this[p]=parseFloat(kd);
this[v]=null;
break;
default:this[ke]=true;
this[kg]=this[kf]=false;
this[p]=this[v]=null;
break;
}
if(kh!=this[kf]){switch(name){case ek:case ej:case ge:case gb:case el:this._invalidateHasPercentX();
break;
case fX:case fY:case gf:case ga:case eg:this._invalidateHasPercentY();
break;
}}},getTopLevelWidget:function(){return this._hasParent?this.getParent().getTopLevelWidget():null;
},moveSelfBefore:function(kV){this.getParent().addBefore(this,kV);
},moveSelfAfter:function(hA){this.getParent().addAfter(this,hA);
},moveSelfToBegin:function(){this.getParent().addAtBegin(this);
},moveSelfToEnd:function(){this.getParent().addAtEnd(this);
},getPreviousSibling:function(){var p=this.getParent();

if(p==null){return null;
}var kJ=p.getChildren();
return kJ[kJ.indexOf(this)-1];
},getNextSibling:function(){var p=this.getParent();

if(p==null){return null;
}var jw=p.getChildren();
return jw[jw.indexOf(this)+1];
},getPreviousVisibleSibling:function(){if(!this._hasParent){return null;
}var ji=this.getParent().getVisibleChildren();
return ji[ji.indexOf(this)-1];
},getNextVisibleSibling:function(){if(!this._hasParent){return null;
}var U=this.getParent().getVisibleChildren();
return U[U.indexOf(this)+1];
},getPreviousActiveSibling:function(L){var M=qx.legacy.ui.core.Widget.getActiveSiblingHelper(this,this.getParent(),-1,L,null);
return M?M:this.getParent().getLastActiveChild();
},getNextActiveSibling:function(kl){var km=qx.legacy.ui.core.Widget.getActiveSiblingHelper(this,this.getParent(),1,kl,null);
return km?km:this.getParent().getFirstActiveChild();
},isFirstChild:function(){return this._hasParent&&this.getParent().getFirstChild()==this;
},isLastChild:function(){return this._hasParent&&this.getParent().getLastChild()==this;
},isFirstVisibleChild:function(){return this._hasParent&&this.getParent().getFirstVisibleChild()==this;
},isLastVisibleChild:function(){return this._hasParent&&this.getParent().getLastVisibleChild()==this;
},hasState:function(mj){return this.__uo&&this.__uo[mj]?true:false;
},addState:function(gY){if(!this.__uo){this.__uo={};
}
if(!this.__uo[gY]){this.__uo[gY]=true;

if(this._hasParent){qx.legacy.ui.core.Widget.addToGlobalStateQueue(this);
}}},removeState:function(Q){if(this.__uo&&this.__uo[Q]){delete this.__uo[Q];

if(this._hasParent){qx.legacy.ui.core.Widget.addToGlobalStateQueue(this);
}}},_styleFromMap:function(W){var X=qx.core.Property.$$method.setThemed;
var ba=qx.core.Property.$$method.resetThemed;
var Y;
var bb;

for(var bb in W){Y=W[bb];
Y===eY?this[ba[bb]]():this[X[bb]](Y);
}},_unstyleFromArray:function(hx){var hy=qx.core.Property.$$method.resetThemed;
var i,l;

for(var i=0,l=hx.length;i<l;i++){this[hy[hx[i]]]();
}},_renderAppearance:function(){if(!this.__uo){this.__uo={};
}this._applyStateStyleFocus(this.__uo);
var ib=this.getAppearance();

if(ib){try{var r=qx.legacy.theme.manager.Appearance.getInstance().styleFrom(ib,this.__uo);

if(r){this._styleFromMap(r);
}}catch(ks){this.error("Could not apply state appearance",ks);
}}},_resetAppearanceThemeWrapper:function(hJ,hK){var hL=this.getAppearance();

if(hL){var hQ=qx.legacy.theme.manager.Appearance.getInstance();
var hM=hQ.styleFromTheme(hK,hL,this.__uo);
var hP=hQ.styleFromTheme(hJ,hL,this.__uo);
var hO=[];

for(var hN in hM){if(hP[hN]===undefined){hO.push(hN);
}}this._unstyleFromArray(hO);
this._styleFromMap(hP);
}},_applyStateStyleFocus:qx.core.Variant.select(gg,{"mshtml":function(lL){},"default":function(kk){if(kk.focused){if(!qx.legacy.event.handler.FocusHandler.mouseFocus&&!this.getHideFocus()){this.setStyleProperty(dd,eE);
}}else{this.removeStyleProperty(dd);
}}}),addToStateQueue:function(){qx.legacy.ui.core.Widget.addToGlobalStateQueue(this);
},recursiveAddToStateQueue:function(){this.addToStateQueue();
},_applyAppearance:function(E,F){if(!this.__uo){this.__uo={};
}var K=qx.legacy.theme.manager.Appearance.getInstance();

if(E){var G=K.styleFrom(E,this.__uo)||{};
}
if(F){var I=K.styleFrom(F,this.__uo)||{};
var J=[];

for(var H in I){if(!G||!(H in G)){J.push(H);
}}}
if(J){this._unstyleFromArray(J);
}
if(G){this._styleFromMap(G);
}},_recursiveAppearanceThemeUpdate:function(ir,is){try{this._resetAppearanceThemeWrapper(ir,is);
}catch(jV){this.error("Failed to update appearance theme",jV);
}},_applyElementData:function(iu){},setHtmlProperty:function(kO,kP){if(!this._htmlProperties){this._htmlProperties={};
}this._htmlProperties[kO]=kP;

if(this._isCreated&&this.getElement()[kO]!=kP){this.getElement()[kO]=kP;
}return true;
},removeHtmlProperty:qx.core.Variant.select(gg,{"mshtml":function(gX){if(!this._htmlProperties){return;
}delete this._htmlProperties[gX];

if(this._isCreated){this.getElement().removeAttribute(gX);
}return true;
},"default":function(iO){if(!this._htmlProperties){return;
}delete this._htmlProperties[iO];

if(this._isCreated){this.getElement().removeAttribute(iO);
delete this.getElement()[iO];
}return true;
}}),getHtmlProperty:function(ig){if(!this._htmlProperties){return gd;
}return this._htmlProperties[ig]||gd;
},_applyHtmlProperties:function(kS){var kU=this._htmlProperties;

if(kU){var kT;

for(kT in kU){kS[kT]=kU[kT];
}}},_generateHtmlId:function(){var kQ=this.classname+dR+qx.legacy.ui.core.Widget._idCounter++;
this.debug("setting autogenerated HTML id to "+kQ);
this.setHtmlProperty(fi,kQ);
},setHtmlAttribute:function(lJ,lK){if(!this._htmlAttributes){this._htmlAttributes={};
}this._htmlAttributes[lJ]=lK;

if(this._isCreated){this.getElement().setAttribute(lJ,lK);
}return true;
},removeHtmlAttribute:function(D){if(!this._htmlAttributes){return;
}delete this._htmlAttributes[D];

if(this._isCreated){this.getElement().removeAttribute(D);
}return true;
},getHtmlAttribute:function(jq){if(!this._htmlAttributes){return gd;
}return this._htmlAttributes[jq]||gd;
},_applyHtmlAttributes:function(li){var lk=this._htmlAttributes;

if(lk){var lj;

for(lj in lk){li.setAttribute(lj,lk[lj]);
}}},getStyleProperty:function(kn){if(!this._styleProperties){return gd;
}return this._styleProperties[kn]||gd;
},__up:{cursor:true,zIndex:true,filter:true,display:true,visibility:true},setStyleProperty:function(ih,ii){if(!this._styleProperties){this._styleProperties={};
}this._styleProperties[ih]=ii;

if(this._isCreated){var ij=this.__up[ih]?this.getElement():this._getTargetNode();

if(ij){ij.style[ih]=(ii==null)?gd:ii;
}}},removeStyleProperty:function(jx){if(!this._styleProperties){return;
}delete this._styleProperties[jx];

if(this._isCreated){var jy=this.__up[jx]?this.getElement():this._getTargetNode();

if(jy){jy.style[jx]=gd;
}}},_applyStyleProperties:function(mp){var mt=this._styleProperties;

if(!mt){return;
}var mu;
var mq=mp;
var mr=this._getTargetNode();
var mp;
var ms;

for(mu in mt){mp=this.__up[mu]?mq:mr;
ms=mt[mu];
mp.style[mu]=(ms==null)?gd:ms;
}},_applyEnabled:function(hi,hj){if(hi===false){this.addState(gQ);
this.removeState(du);

if(qx.Class.isDefined(gO)){this.removeState(gW);
this.removeState(dh);
}}else{this.removeState(gQ);
}},isFocusable:function(){return this.getEnabled()&&this.isSeeable()&&this.getTabIndex()>=0&&this.getTabIndex()!=null;
},isFocusRoot:function(){return false;
},getFocusRoot:function(){if(this._hasParent){return this.getParent().getFocusRoot();
}return null;
},getActiveChild:function(){var hX=this.getFocusRoot();

if(hX){return hX.getActiveChild();
}return null;
},_ontabfocus:qx.lang.Function.returnTrue,_applyFocused:function(ky,kz){if(!this.isCreated()){return;
}var kA=this.getFocusRoot();
if(kA){if(ky){kA.setFocusedChild(this);
this._visualizeFocus();
}else{if(kA.getFocusedChild()==this){kA.setFocusedChild(null);
}this._visualizeBlur();
}}},_applyHideFocus:qx.core.Variant.select(gg,{"mshtml":function(ju,jv){this.setHtmlProperty(bz,ju);
},"default":qx.lang.Function.returnTrue}),_visualizeBlur:function(){if(this.getEnableElementFocus()&&(!this.getFocusRoot().getFocusedChild()||(this.getFocusRoot().getFocusedChild()&&this.getFocusRoot().getFocusedChild().getEnableElementFocus()))){try{this.getElement().blur();
}catch(ld){}}this.removeState(cc);
},_visualizeFocus:function(){if(!qx.legacy.event.handler.FocusHandler.mouseFocus&&this.getEnableElementFocus()){try{this.getElement().focus();
}catch(ha){}}this.addState(cc);
},focus:function(){delete qx.legacy.event.handler.FocusHandler.mouseFocus;
this.setFocused(true);
},blur:function(){delete qx.legacy.event.handler.FocusHandler.mouseFocus;
this.setFocused(false);
},_applyCapture:function(hS,hT){var hU=qx.legacy.event.handler.EventHandler.getInstance();

if(hT){hU.setCaptureWidget(null);
}
if(hS){hU.setCaptureWidget(this);
}},_applyZIndex:function(lM,lN){if(lM==null){this.removeStyleProperty(fD);
}else{this.setStyleProperty(fD,lM);
}},_applyTabIndex:qx.core.Variant.select(gg,{"mshtml":function(kq,kr){this.setHtmlProperty(dq,kq<0?-1:1);
},"gecko":function(ip,iq){this.setStyleProperty(fJ,(ip<0?cd:gP));
},"default":function(hf,hg){this.setStyleProperty(ea,(hf<0?cd:gP));
this.setHtmlProperty(dq,hf<0?-1:1);
}}),_applySelectable:qx.core.Variant.select(gg,{"mshtml":function(S,T){},"gecko":function(ka,kb){if(ka){this.removeStyleProperty(gN);
}else{this.setStyleProperty(gN,gm);
}},"webkit":function(lH,lI){if(lH){this.removeStyleProperty(gT);
}else{this.setStyleProperty(gT,gm);
}},"khtml":function(im,io){if(im){this.removeStyleProperty(dt);
}else{this.setStyleProperty(dt,gm);
}},"default":function(kM,kN){if(kM){return this.removeStyleProperty(dw);
}else{this.setStyleProperty(dw,gm);
}}}),_applyOpacity:qx.core.Variant.select(gg,{"mshtml":function(kH,kI){if(kH==null||kH>=1||kH<0){this.removeStyleProperty(bV);
}else{this.setStyleProperty(bV,(dW+Math.round(kH*100)+ft));
}},"default":function(jW,jX){if(jW==null||jW>1){if(qx.core.Variant.isSet(gg,bT)){this.removeStyleProperty(df);
}else if(qx.core.Variant.isSet(gg,gS)){this.removeStyleProperty(gV);
}this.removeStyleProperty(cz);
}else{jW=qx.lang.Number.limit(jW,0,1);
if(qx.core.Variant.isSet(gg,bT)){this.setStyleProperty(df,jW);
}else if(qx.core.Variant.isSet(gg,gS)){this.setStyleProperty(gV,jW);
}this.setStyleProperty(cz,jW);
}}}),__uq:qx.core.Variant.select(gg,{"mshtml":{"cursor":dB,"ew-resize":fE,"ns-resize":fA,"nesw-resize":dv,"nwse-resize":dj},"opera":{"col-resize":fE,"row-resize":fA,"ew-resize":fE,"ns-resize":fA,"nesw-resize":dv,"nwse-resize":dj},"default":{}}),_applyCursor:function(ja,jb){if(ja){this.setStyleProperty(dl,this.__uq[ja]||ja);
}else{this.removeStyleProperty(dl);
}},_applyCommand:function(ll,lm){},_applyBackgroundImage:function(kB,kC){var kE=qx.legacy.io.image.Manager.getInstance();
var kD=qx.legacy.util.AliasManager.getInstance();

if(kC){kE.hide(kC);
}
if(kB){kE.show(kB);
}kD.connect(this._styleBackgroundImage,this,kB);
},_styleBackgroundImage:function(jt){jt?this.setStyleProperty(cF,cW+qx.util.ResourceManager.toUri(jt)+ft):this.removeStyleProperty(cF);
},_applyBackgroundRepeat:function(kK,kL){kK?this.setStyleProperty(dg,kK):this.removeStyleProperty(dg);
},_applyClip:function(mw,mx){return this._compileClipString();
},_compileClipString:function(){var bd=this.getClipLeft();
var be=this.getClipTop();
var bg=this.getClipWidth();
var bh=this.getClipHeight();
var bf,bc;

if(bd==null){bf=(bg==null?gc:bg+gj);
bd=gc;
}else{bf=(bg==null?gc:bd+bg+gj);
bd=bd+gj;
}
if(be==null){bc=(bh==null?gc:bh+gj);
be=gc;
}else{bc=(bh==null?gc:be+bh+gj);
be=be+gj;
}return this.setStyleProperty(bN,(cX+be+bW+bf+bW+bc+bW+bd+ft));
},_applyOverflow:qx.core.Variant.select(gg,{"default":function(n,o){var u=n;
var q=ed;

switch(n){case gn:q=fu;
u=go;
break;
case ee:q=bU;
u=go;
break;
}var a=[ed,fu,bU];

for(var i=0;i<a.length;i++){if(a[i]!=q){this.removeStyleProperty(a[i]);
}}
switch(n){case gn:this.setStyleProperty(bU,ec);
break;
case ee:this.setStyleProperty(fu,ec);
break;
}this._renderOverflow(q,u,n,o);
this.addToQueue(ed);
},"gecko":function(y,z){var B=y;
var A=ed;

switch(B){case ec:B=gC;
break;
case gn:B=dL;
break;
case ee:B=db;
break;
}this._renderOverflow(A,B,y,z);
this.addToQueue(ed);
},"opera":function(hC,hD){var hF=hC;
var hE=ed;

switch(hF){case gn:case ee:hF=go;
break;
}this._renderOverflow(hE,hF,hC,hD);
this.addToQueue(ed);
}}),_renderOverflow:function(iV,iW,iX,iY){this.setStyleProperty(iV,iW||gd);
this._invalidateFrameWidth();
this._invalidateFrameHeight();
},getOverflowX:function(){var bj=this.getOverflow();
return bj==ee?ec:bj;
},getOverflowY:function(){var hI=this.getOverflow();
return hI==gn?ec:hI;
},_applyBackgroundColor:function(lF,lG){qx.legacy.theme.manager.Color.getInstance().connect(this._styleBackgroundColor,this,lF);
},_styleBackgroundColor:function(bi){bi?this.setStyleProperty(ca,bi):this.removeStyleProperty(ca);
},_applyTextColor:function(jc,jd){},_applyFont:function(kt,ku){},_cachedBorderTop:0,_cachedBorderRight:0,_cachedBorderBottom:0,_cachedBorderLeft:0,_applyBorder:function(iA,iB){qx.legacy.theme.manager.Border.getInstance().connect(this._queueBorder,this,iA);
},__ur:{top:gz,right:co,bottom:ct,left:cj},_queueBorder:function(lT,lU){if(!lU){var lW=this.__ur;

for(var lV in lW){this.addToQueue(lW[lV]);
}this.__ut(lT);
this.__uu(lT);
}else{if(lU===gb||lU===el){this.__ut(lT);
}else{this.__uu(lT);
}this.addToQueue(this.__ur[lU]);
}this.__us=lT;
},__ut:function(jk){var jl=this._cachedBorderLeft;
var jm=this._cachedBorderRight;
this._cachedBorderLeft=jk?jk.getWidthLeft():0;
this._cachedBorderRight=jk?jk.getWidthRight():0;

if((jl+jm)!=(this._cachedBorderLeft+this._cachedBorderRight)){this._invalidateFrameWidth();
}},__uu:function(f){var g=this._cachedBorderTop;
var h=this._cachedBorderBottom;
this._cachedBorderTop=f?f.getWidthTop():0;
this._cachedBorderBottom=f?f.getWidthBottom():0;

if((g+h)!=(this._cachedBorderTop+this._cachedBorderBottom)){this._invalidateFrameHeight();
}},renderBorder:function(jz){var jB=this.__us;

if(jB){if(jz.borderTop){jB.renderTop(this);
}
if(jz.borderRight){jB.renderRight(this);
}
if(jz.borderBottom){jB.renderBottom(this);
}
if(jz.borderLeft){jB.renderLeft(this);
}}else{var jA=qx.legacy.ui.core.Border;

if(jz.borderTop){jA.resetTop(this);
}
if(jz.borderRight){jA.resetRight(this);
}
if(jz.borderBottom){jA.resetBottom(this);
}
if(jz.borderLeft){jA.resetLeft(this);
}}},prepareEnhancedBorder:qx.core.Variant.select(gg,{"gecko":qx.lang.Function.returnTrue,"default":function(){var iS=this.getElement();
var iU=this._borderElement=document.createElement(fz);
var iT=iS.style;
var iR=this._innerStyle=iU.style;
if(qx.core.Variant.isSet(gg,cE)){}else{iR.width=iR.height=bQ;
}iR.position=cG;

for(var i in this._styleProperties){switch(i){case fD:case bV:case gh:break;
default:iR[i]=iT[i];
iT[i]=gd;
}}
for(var i in this._htmlProperties){switch(i){case eN:iU.unselectable=this._htmlProperties[i];
}}while(iS.firstChild){iU.appendChild(iS.firstChild);
}iS.appendChild(iU);
}}),_applyPaddingTop:function(ko,kp){this.addToQueue(cD);
this._invalidateFrameHeight();
},_applyPaddingRight:function(le,lf){this.addToQueue(ds);
this._invalidateFrameWidth();
},_applyPaddingBottom:function(jT,jU){this.addToQueue(dr);
this._invalidateFrameHeight();
},_applyPaddingLeft:function(w,x){this.addToQueue(cy);
this._invalidateFrameWidth();
},renderPadding:function(lc){},_applyMarginLeft:function(lQ,lR){this.addToQueue(dm);
},_applyMarginRight:function(hG,hH){this.addToQueue(cC);
},_applyMarginTop:function(kF,kG){this.addToQueue(cA);
},_applyMarginBottom:function(iy,iz){this.addToQueue(cb);
},execute:function(){var jS=this.getCommand();

if(jS){jS.execute(this);
}this.fireEvent(bM);
},_visualPropertyCheck:function(){if(!this.isCreated()){throw new Error(this.classname+": Element must be created previously!");
}},setScrollLeft:function(iN){this._visualPropertyCheck();
this._getTargetNode().scrollLeft=iN;
},setScrollTop:function(ht){this._visualPropertyCheck();
this._getTargetNode().scrollTop=ht;
},getOffsetLeft:function(){this._visualPropertyCheck();
return qx.legacy.html.Offset.getLeft(this.getElement());
},getOffsetTop:function(){this._visualPropertyCheck();
return qx.legacy.html.Offset.getTop(this.getElement());
},getScrollLeft:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollLeft;
},getScrollTop:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollTop;
},getClientWidth:function(){this._visualPropertyCheck();
return this._getTargetNode().clientWidth;
},getClientHeight:function(){this._visualPropertyCheck();
return this._getTargetNode().clientHeight;
},getOffsetWidth:function(){this._visualPropertyCheck();
return this.getElement().offsetWidth;
},getOffsetHeight:function(){this._visualPropertyCheck();
return this.getElement().offsetHeight;
},getScrollWidth:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollWidth;
},getScrollHeight:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollHeight;
},scrollIntoView:function(jY){this.scrollIntoViewX(jY);
this.scrollIntoViewY(jY);
},scrollIntoViewX:function(lE){if(!this._isCreated||!this._isDisplayable){return false;
}return qx.legacy.html.ScrollIntoView.scrollX(this.getElement(),lE);
},scrollIntoViewY:function(jR){if(!this._isCreated||!this._isDisplayable){return false;
}return qx.legacy.html.ScrollIntoView.scrollY(this.getElement(),jR);
},supportsDrop:function(d){var e=this.getSupportsDropMethod();

if(e!==null){return e.call(this,d);
}return (this!=d.sourceWidget);
}},settings:{"qx.widgetQueueDebugging":false,"qx.widgetDebugId":false},defer:function(hV,hW){qx.legacy.core.Property.addCachedProperty({name:fL,defaultValue:null},hW);
qx.legacy.core.Property.addCachedProperty({name:fK,defaultValue:null},hW);
qx.legacy.core.Property.addCachedProperty({name:gD,defaultValue:null},hW);
qx.legacy.core.Property.addCachedProperty({name:ci,defaultValue:null},hW);
qx.legacy.core.Property.addCachedProperty({name:bB,defaultValue:null},hW);
qx.legacy.core.Property.addCachedProperty({name:bD,defaultValue:null},hW);
qx.legacy.core.Property.addCachedProperty({name:cp,defaultValue:null},hW);
qx.legacy.core.Property.addCachedProperty({name:dz,defaultValue:null},hW);
qx.legacy.core.Property.addCachedProperty({name:eI,defaultValue:null,addToQueueRuntime:true},hW);
qx.legacy.core.Property.addCachedProperty({name:cV,defaultValue:null,addToQueueRuntime:true},hW);
qx.legacy.core.Property.addCachedProperty({name:ck,defaultValue:null,addToQueueRuntime:true},hW);
qx.legacy.core.Property.addCachedProperty({name:dc,defaultValue:null,addToQueueRuntime:true},hW);
qx.legacy.core.Property.addCachedProperty({name:et,defaultValue:false},hW);
qx.legacy.core.Property.addCachedProperty({name:ew,defaultValue:false},hW);
qx.legacy.core.Property.addCachedProperty({name:fl,defaultValue:false},hW);
qx.legacy.core.Property.addCachedProperty({name:eM,defaultValue:false},hW);
qx.legacy.core.Property.addCachedProperty({name:fU,defaultValue:false},hW);
qx.legacy.core.Property.addCachedProperty({name:fa,defaultValue:false},hW);
hV.__um(hW);
if(qx.core.Variant.isSet(gg,cE)){hW._renderRuntimeWidth=function(v){this._style.pixelWidth=(v==null)?0:v;

if(this._innerStyle){this._innerStyle.pixelWidth=(v==null)?0:v-2;
}};
hW._renderRuntimeHeight=function(v){this._style.pixelHeight=(v==null)?0:v;

if(this._innerStyle){this._innerStyle.pixelHeight=(v==null)?0:v-2;
}};
hW._resetRuntimeWidth=function(){this._style.width=gd;

if(this._innerStyle){this._innerStyle.width=gd;
}};
hW._resetRuntimeHeight=function(){this._style.height=gd;

if(this._innerStyle){this._innerStyle.height=gd;
}};
}hV.__un(hV);
hV.__uv=new qx.util.DeferredCall(qx.legacy.ui.core.Widget.flushGlobalQueues,qx.legacy.ui.core.Widget);
},destruct:function(){var ki=this.getElement();

if(ki){ki.qx_Widget=null;
}this._disposeFields(fH,fv,er,cv,eP,cT,ff,ep,eo,gE,fG,bP,gr,bK);
}});
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
(function(){var b="qx.legacy.event.WidgetBubbling";
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(a){return a.getParent();
},canDispatchEvent:function(d,event,e){return d instanceof qx.legacy.ui.core.Widget&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var y="qx.client",x="overflow",u="1px",t="hidden",s="scroll",r="qx.legacy.html.Dimension",q="-moz-scrollbars-vertical",p="overflowX",n="-moz-scrollbars-horizontal",m="overflowY";
qx.Class.define(r,{statics:{getOuterWidth:function(g){return qx.legacy.html.Dimension.getBoxWidth(g)+qx.legacy.html.Style.getMarginLeft(g)+qx.legacy.html.Style.getMarginRight(g);
},getOuterHeight:function(P){return qx.legacy.html.Dimension.getBoxHeight(P)+qx.legacy.html.Style.getMarginTop(P)+qx.legacy.html.Style.getMarginBottom(P);
},getBoxWidthForZeroHeight:function(F){var h=F.offsetHeight;

if(h==0){var o=F.style.height;
F.style.height=u;
}var v=F.offsetWidth;

if(h==0){F.style.height=o;
}return v;
},getBoxHeightForZeroWidth:function(L){var w=L.offsetWidth;

if(w==0){var o=L.style.width;
L.style.width=u;
}var v=L.offsetHeight;

if(w==0){L.style.width=o;
}return v;
},getBoxWidth:function(f){return f.offsetWidth;
},getBoxHeight:function(b){return b.offsetHeight;
},getAreaWidth:qx.core.Variant.select(y,{"gecko":function(c){if(c.clientWidth!=0&&c.clientWidth!=(qx.legacy.html.Style.getBorderLeft(c)+qx.legacy.html.Style.getBorderRight(c))){return c.clientWidth;
}else{return qx.legacy.html.Dimension.getBoxWidth(c)-qx.legacy.html.Dimension.getInsetLeft(c)-qx.legacy.html.Dimension.getInsetRight(c);
}},"default":function(G){return G.clientWidth!=0?G.clientWidth:(qx.legacy.html.Dimension.getBoxWidth(G)-qx.legacy.html.Dimension.getInsetLeft(G)-qx.legacy.html.Dimension.getInsetRight(G));
}}),getAreaHeight:qx.core.Variant.select(y,{"gecko":function(H){if(H.clientHeight!=0&&H.clientHeight!=(qx.legacy.html.Style.getBorderTop(H)+qx.legacy.html.Style.getBorderBottom(H))){return H.clientHeight;
}else{return qx.legacy.html.Dimension.getBoxHeight(H)-qx.legacy.html.Dimension.getInsetTop(H)-qx.legacy.html.Dimension.getInsetBottom(H);
}},"default":function(a){return a.clientHeight!=0?a.clientHeight:(qx.legacy.html.Dimension.getBoxHeight(a)-qx.legacy.html.Dimension.getInsetTop(a)-qx.legacy.html.Dimension.getInsetBottom(a));
}}),getInnerWidth:function(e){return qx.legacy.html.Dimension.getAreaWidth(e)-qx.legacy.html.Style.getPaddingLeft(e)-qx.legacy.html.Style.getPaddingRight(e);
},getInnerHeight:function(j){return qx.legacy.html.Dimension.getAreaHeight(j)-qx.legacy.html.Style.getPaddingTop(j)-qx.legacy.html.Style.getPaddingBottom(j);
},getInsetLeft:qx.core.Variant.select(y,{"mshtml":function(M){return M.clientLeft;
},"default":function(N){return qx.legacy.html.Style.getBorderLeft(N);
}}),getInsetTop:qx.core.Variant.select(y,{"mshtml":function(i){return i.clientTop;
},"default":function(k){return qx.legacy.html.Style.getBorderTop(k);
}}),getInsetRight:qx.core.Variant.select(y,{"mshtml":function(l){if(qx.legacy.html.Style.getStyleProperty(l,m)==t||l.clientWidth==0){return qx.legacy.html.Style.getBorderRight(l);
}return Math.max(0,l.offsetWidth-l.clientLeft-l.clientWidth);
},"default":function(A){if(A.clientWidth==0){var B=qx.legacy.html.Style.getStyleProperty(A,x);
var C=B==s||B==q?16:0;
return Math.max(0,qx.legacy.html.Style.getBorderRight(A)+C);
}return Math.max(0,A.offsetWidth-A.clientWidth-qx.legacy.html.Style.getBorderLeft(A));
}}),getInsetBottom:qx.core.Variant.select(y,{"mshtml":function(E){if(qx.legacy.html.Style.getStyleProperty(E,p)==t||E.clientHeight==0){return qx.legacy.html.Style.getBorderBottom(E);
}return Math.max(0,E.offsetHeight-E.clientTop-E.clientHeight);
},"default":function(I){if(I.clientHeight==0){var J=qx.legacy.html.Style.getStyleProperty(I,x);
var K=J==s||J==n?16:0;
return Math.max(0,qx.legacy.html.Style.getBorderBottom(I)+K);
}return Math.max(0,I.offsetHeight-I.clientHeight-qx.legacy.html.Style.getBorderTop(I));
}}),getScrollBarSizeLeft:function(d){return 0;
},getScrollBarSizeTop:function(z){return 0;
},getScrollBarSizeRight:function(O){return qx.legacy.html.Dimension.getInsetRight(O)-qx.legacy.html.Style.getBorderRight(O);
},getScrollBarSizeBottom:function(D){return qx.legacy.html.Dimension.getInsetBottom(D)-qx.legacy.html.Style.getBorderBottom(D);
},getScrollBarVisibleX:function(Q){return qx.legacy.html.Dimension.getScrollBarSizeRight(Q)>0;
},getScrollBarVisibleY:function(R){return qx.legacy.html.Dimension.getScrollBarSizeBottom(R)>0;
}}});
})();
(function(){var q="none",p="",o="noComputed",n="qx.client",m="hasComputed",l="borderBottomWidth",k="borderLeftStyle",j="paddingLeft",i="borderRightStyle",h="borderRightWidth",D="qx.legacy.html.Style",C="borderTopWidth",B="borderLeftWidth",A="marginBottom",z="marginTop",y="borderTopStyle",x="marginLeft",w="borderBottomStyle",v="paddingBottom",u="paddingTop",s="marginRight",t="paddingRight",r="undefined";
qx.Class.define(D,{statics:{getStylePropertySure:qx.lang.Object.select((document.defaultView&&document.defaultView.getComputedStyle)?m:o,{"hasComputed":function(U,V){return !U?null:U.ownerDocument?U.ownerDocument.defaultView.getComputedStyle(U,p)[V]:U.style[V];
},"noComputed":qx.core.Variant.select(n,{"mshtml":function(O,P){try{if(!O){return null;
}
if(O.parentNode&&O.currentStyle){return O.currentStyle[P];
}else{var Q=O.runtimeStyle[P];

if(Q!=null&&typeof Q!=r&&Q!=p){return Q;
}return O.style[P];
}}catch(E){throw new Error("Could not evaluate computed style: "+O+"["+P+"]: "+E);
}},"default":function(F,G){return !F?null:F.style[G];
}})}),getStyleProperty:qx.lang.Object.select((document.defaultView&&document.defaultView.getComputedStyle)?m:o,{"hasComputed":function(f,g){try{return f.ownerDocument.defaultView.getComputedStyle(f,p)[g];
}catch(b){throw new Error("Could not evaluate computed style: "+f+"["+g+"]: "+b);
}},"noComputed":qx.core.Variant.select(n,{"mshtml":function(d,e){try{return d.currentStyle[e];
}catch(c){throw new Error("Could not evaluate computed style: "+d+"["+e+"]: "+c);
}},"default":function(L,M){try{return L.style[M];
}catch(W){throw new Error("Could not evaluate computed style: "+L+"["+M+"]");
}}})}),getStyleSize:function(S,T){return parseInt(qx.legacy.html.Style.getStyleProperty(S,T))||0;
},getMarginLeft:function(R){return qx.legacy.html.Style.getStyleSize(R,x);
},getMarginTop:function(X){return qx.legacy.html.Style.getStyleSize(X,z);
},getMarginRight:function(I){return qx.legacy.html.Style.getStyleSize(I,s);
},getMarginBottom:function(ba){return qx.legacy.html.Style.getStyleSize(ba,A);
},getPaddingLeft:function(Y){return qx.legacy.html.Style.getStyleSize(Y,j);
},getPaddingTop:function(K){return qx.legacy.html.Style.getStyleSize(K,u);
},getPaddingRight:function(J){return qx.legacy.html.Style.getStyleSize(J,t);
},getPaddingBottom:function(bc){return qx.legacy.html.Style.getStyleSize(bc,v);
},getBorderLeft:function(H){return qx.legacy.html.Style.getStyleProperty(H,k)==q?0:qx.legacy.html.Style.getStyleSize(H,B);
},getBorderTop:function(bb){return qx.legacy.html.Style.getStyleProperty(bb,y)==q?0:qx.legacy.html.Style.getStyleSize(bb,C);
},getBorderRight:function(N){return qx.legacy.html.Style.getStyleProperty(N,i)==q?0:qx.legacy.html.Style.getStyleSize(N,h);
},getBorderBottom:function(a){return qx.legacy.html.Style.getStyleProperty(a,w)==q?0:qx.legacy.html.Style.getStyleSize(a,l);
}}});
})();
(function(){var bz="_childrenQueue",by="qx.legacy.ui.popup.ToolTipManager",bx="keypress",bw="qx.legacy.ui.core.Widget",bv="_cachedVisibleChildren",bu="changeFocusedChild",bt="blur",bs="keydown",br="first",bq="_layoutImpl",cf="focus",ce="removeAll",cd="return this._remappingChildTarget.",cc="qx.client",cb="_applyActiveChild",ca="_focusHandler",bY="_children",bX="addAtBegin",bW="visibleChildren",bV="addBefore",bG="qx.legacy.ui.popup.PopupManager",bH=".apply(this._remappingChildTarget, arguments)",bE="addAfter",bF="_remappingChildTarget",bC="remove",bD="_remappingChildTable",bA="qx.legacy.ui.core.Parent",bB="add",bI="qx.legacy.event.handler.FocusHandler",bJ="opera",bN="addAtEnd",bM="removeAt",bP="focusin",bO="abstract",bR="focusout",bQ="none",bL="_applyFocusHandler",bU="addAt",bT="changeActiveChild",bS="_applyFocusedChild",bK="last";
qx.Class.define(bA,{extend:qx.legacy.ui.core.Widget,type:bO,construct:function(){arguments.callee.base.call(this);
this._children=[];
this._layoutImpl=this._createLayoutImpl();
},properties:{focusHandler:{check:bI,apply:bL,nullable:true},activeChild:{check:bw,apply:cb,event:bT,nullable:true},focusedChild:{check:bw,apply:bS,event:bu,nullable:true}},members:{isFocusRoot:function(){return this.getFocusHandler()!=null;
},getFocusRoot:function(){if(this.isFocusRoot()){return this;
}
if(this._hasParent){return this.getParent().getFocusRoot();
}return null;
},activateFocusRoot:function(){if(this._focusHandler){return;
}this._focusHandler=new qx.legacy.event.handler.FocusHandler(this);
this.setFocusHandler(this._focusHandler);
},_onfocuskeyevent:function(e){this.getFocusHandler()._onkeyevent(this,e);
},_applyFocusHandler:function(a,b){if(a){this.addListener(bx,this._onfocuskeyevent);
if(this.getTabIndex()<1){this.setTabIndex(1);
}this.setHideFocus(true);
this.setActiveChild(this);
}else{this.removeListener(bs,this._onfocuskeyevent);
this.removeListener(bx,this._onfocuskeyevent);
this.setTabIndex(-1);
this.setHideFocus(false);
}},_applyActiveChild:function(bk,bl){},_applyFocusedChild:function(bd,be){var bh=bd!=null;
var bj=be!=null;

if(qx.Class.isDefined(bG)&&bh){var bf=qx.legacy.ui.popup.PopupManager.getInstance();

if(bf){bf.update(bd);
}}
if(bj){var bg=qx.event.Registration.createEvent(bR,qx.legacy.event.type.FocusEvent);
bg.setBubbles(true);

if(bh){bg.setRelatedTarget(bd);
}be.dispatchEvent(bg);
}
if(bh){var bg=qx.event.Registration.createEvent(bP,qx.legacy.event.type.FocusEvent);
bg.setBubbles(true);

if(bj){bg.setRelatedTarget(be);
}bd.dispatchEvent(bg);
}
if(bj){if(this.getActiveChild()==be&&!bh){this.setActiveChild(null);
}be.setFocused(false);
var bg=qx.event.Registration.createEvent(bt,qx.legacy.event.type.FocusEvent);

if(bh){bg.setRelatedTarget(bd);
}be.dispatchEvent(bg);

if(qx.Class.isDefined(by)){var bf=qx.legacy.ui.popup.ToolTipManager.getInstance();

if(bf){bf.handleBlur(bg);
}}}
if(bh){this.setActiveChild(bd);
bd.setFocused(true);
qx.legacy.event.handler.EventHandler.getInstance().setFocusRoot(this);
var bg=qx.event.Registration.createEvent(cf,qx.legacy.event.type.FocusEvent);

if(bj){bg.setRelatedTarget(be);
}var bi=bg.clone();
bd.dispatchEvent(bg);

if(qx.Class.isDefined(by)){var bf=qx.legacy.ui.popup.ToolTipManager.getInstance();

if(bf){bi.setTarget(bd);
bf.handleFocus(bi);
}}bi.dispose();
}},_layoutImpl:null,_createLayoutImpl:function(){return null;
},getLayoutImpl:function(){return this._layoutImpl;
},getChildren:function(){return this._children;
},getChildrenLength:function(){return this.getChildren().length;
},hasChildren:function(){return this.getChildrenLength()>0;
},isEmpty:function(){return this.getChildrenLength()==0;
},indexOf:function(bm){return this.getChildren().indexOf(bm);
},contains:function(cB){switch(cB){case null:return false;
case this:return true;
default:return this.contains(cB.getParent());
}},_computeVisibleChildren:function(){var M=[];
var O=this.getChildren();

if(!O){return 0;
}var N=O.length;

for(var i=0;i<N;i++){var L=O[i];

if(L._isDisplayable){M.push(L);
}}return M;
},getVisibleChildrenLength:function(){return this.getVisibleChildren().length;
},hasVisibleChildren:function(){return this.getVisibleChildrenLength()>0;
},isVisibleEmpty:function(){return this.getVisibleChildrenLength()==0;
},add:function(cC){var cD;

for(var i=0,l=arguments.length;i<l;i++){cD=arguments[i];

if(!(cD instanceof qx.legacy.ui.core.Parent)&&!(cD instanceof qx.legacy.ui.basic.Terminator)){throw new Error("Invalid Widget: "+cD);
}else{cD.setParent(this);
}}return this;
},addAt:function(n,o){if(o==null||o<0){throw new Error("Not a valid index for addAt(): "+o);
}
if(n.getParent()==this){var r=this.getChildren();
var q=r.indexOf(n);

if(q!=o){if(q!=-1){qx.lang.Array.removeAt(r,q);
}qx.lang.Array.insertAt(r,n,o);

if(this._initialLayoutDone){this._invalidateVisibleChildren();
this.getLayoutImpl().updateChildrenOnMoveChild(n,o,q);
}}}else{n._insertIndex=o;
n.setParent(this);
}},addAtBegin:function(cu){return this.addAt(cu,0);
},addAtEnd:function(X){var Y=this.getChildrenLength();
return this.addAt(X,X.getParent()==this?Y-1:Y);
},addBefore:function(cg,ci){var ck=this.getChildren();
var cl=ck.indexOf(ci);

if(cl==-1){throw new Error("Child to add before: "+ci+" is not inside this parent.");
}var cj=ck.indexOf(cg);

if(cj==-1||cj>cl){cl++;
}return this.addAt(cg,Math.max(0,cl-1));
},addAfter:function(P,Q){var S=this.getChildren();
var T=S.indexOf(Q);

if(T==-1){throw new Error("Child to add after: "+Q+" is not inside this parent.");
}var R=S.indexOf(P);

if(R!=-1&&R<T){T--;
}return this.addAt(P,Math.min(S.length,T+1));
},remove:function(cz){var cA;

for(var i=0,l=arguments.length;i<l;i++){cA=arguments[i];

if(!(cA instanceof qx.legacy.ui.core.Parent)&&!(cA instanceof qx.legacy.ui.basic.Terminator)){throw new Error("Invalid Widget: "+cA);
}else if(cA.getParent()==this){cA.setParent(null);
}}},removeAt:function(J){var K=this.getChildren()[J];

if(K){delete K._insertIndex;
K.setParent(null);
}},removeAll:function(){var w=this.getChildren();
var x=w[0];

while(x){this.remove(x);
x=w[0];
}},getFirstChild:function(){return this.getChildren()[0]||null;
},getFirstVisibleChild:function(){return this.getVisibleChildren()[0]||null;
},getFirstActiveChild:function(c){return qx.legacy.ui.core.Widget.getActiveSiblingHelper(null,this,1,c,br)||null;
},getLastChild:function(){var bp=this.getChildren();
return bp[bp.length-1]||null;
},getLastVisibleChild:function(){var v=this.getVisibleChildren();
return v[v.length-1]||null;
},getLastActiveChild:function(I){return qx.legacy.ui.core.Widget.getActiveSiblingHelper(null,this,-1,I,bK)||null;
},forEachChild:function(E){var G=this.getChildren(),F,i=-1;

if(!G){return;
}
while(F=G[++i]){E.call(F,i);
}},forEachVisibleChild:function(U){var W=this.getVisibleChildren(),V,i=-1;

if(!W){return;
}
while(V=W[++i]){U.call(V,i);
}},_beforeAppear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeAppear();
}});
},_afterAppear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterAppear();
}});
},_beforeDisappear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeDisappear();
}});
},_afterDisappear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterDisappear();
}});
},_beforeInsertDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeInsertDom();
}});
},_afterInsertDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterInsertDom();
}});
},_beforeRemoveDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeRemoveDom();
}});
},_afterRemoveDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterRemoveDom();
}});
},_handleDisplayableCustom:function(j,k,m){this.forEachChild(function(){this._handleDisplayable();
});
},_addChildrenToStateQueue:function(){this.forEachVisibleChild(function(){this.addToStateQueue();
});
},recursiveAddToStateQueue:function(){this.addToStateQueue();
this.forEachVisibleChild(function(){this.recursiveAddToStateQueue();
});
},_recursiveAppearanceThemeUpdate:function(cr,ct){arguments.callee.base.call(this,cr,ct);
this.forEachVisibleChild(function(){this._recursiveAppearanceThemeUpdate(cr,ct);
});
},_addChildToChildrenQueue:function(cq){if(!cq._isInParentChildrenQueue&&!cq._isDisplayable){this.warn("Ignoring invisible child: "+cq);
return;
}
if(!cq._isInParentChildrenQueue&&cq._isDisplayable){qx.legacy.ui.core.Widget.addToGlobalLayoutQueue(this);

if(!this._childrenQueue){this._childrenQueue={};
}this._childrenQueue[cq.toHashCode()]=cq;
}},_removeChildFromChildrenQueue:function(y){if(this._childrenQueue&&y._isInParentChildrenQueue){delete this._childrenQueue[y.toHashCode()];

if(qx.lang.Object.isEmpty(this._childrenQueue)){qx.legacy.ui.core.Widget.removeFromGlobalLayoutQueue(this);
}}},_flushChildrenQueue:function(){if(!qx.lang.Object.isEmpty(this._childrenQueue)){this.getLayoutImpl().flushChildrenQueue(this._childrenQueue);
delete this._childrenQueue;
}},_addChildrenToLayoutQueue:function(p){this.forEachChild(function(){this.addToLayoutChanges(p);
});
},_layoutChild:function(ba){if(!ba._isDisplayable){return ;
}var bb=ba._layoutChanges;
try{if(ba.renderBorder){if(bb.borderTop||bb.borderRight||bb.borderBottom||bb.borderLeft){ba.renderBorder(bb);
}}}catch(cy){this.error("Could not apply border to child "+ba,cy);
}
try{if(ba.renderPadding){if(bb.paddingLeft||bb.paddingRight||bb.paddingTop||bb.paddingBottom){ba.renderPadding(bb);
}}}catch(bo){this.error("Could not apply padding to child "+ba,bo);
}try{this.getLayoutImpl().layoutChild(ba,bb);
}catch(bn){this.error("Could not layout child "+ba+" through layout handler",bn);
}try{ba._layoutPost(bb);
}catch(bc){this.error("Could not post layout child "+ba,bc);
}try{if(bb.initial){ba._initialLayoutDone=true;
qx.legacy.ui.core.Widget.addToGlobalDisplayQueue(ba);
}}catch(u){this.error("Could not handle display updates from layout flush for child "+ba,u);
}ba._layoutChanges={};
delete ba._isInParentLayoutQueue;
delete this._childrenQueue[ba.toHashCode()];
},_layoutPost:qx.lang.Function.returnTrue,_computePreferredInnerWidth:function(){return this.getLayoutImpl().computeChildrenNeededWidth();
},_computePreferredInnerHeight:function(){return this.getLayoutImpl().computeChildrenNeededHeight();
},_changeInnerWidth:function(cm,cn){var cp=this.getLayoutImpl();

if(cp.invalidateChildrenFlexWidth){cp.invalidateChildrenFlexWidth();
}this.forEachVisibleChild(function(){if(cp.updateChildOnInnerWidthChange(this)&&this._recomputeBoxWidth()){this._recomputeOuterWidth();
this._recomputeInnerWidth();
}});
},_changeInnerHeight:function(B,C){var D=this.getLayoutImpl();

if(D.invalidateChildrenFlexHeight){D.invalidateChildrenFlexHeight();
}this.forEachVisibleChild(function(){if(D.updateChildOnInnerHeightChange(this)&&this._recomputeBoxHeight()){this._recomputeOuterHeight();
this._recomputeInnerHeight();
}});
},getInnerWidthForChild:function(A){return this.getInnerWidth();
},getInnerHeightForChild:function(H){return this.getInnerHeight();
},_remappingChildTable:[bB,bC,bU,bX,bN,bM,bV,bE,ce],_remapStart:cd,_remapStop:bH,remapChildrenHandlingTo:function(z){var t=this._remappingChildTable;
this._remappingChildTarget=z;

for(var i=0,l=t.length,s;i<l;i++){s=t[i];
this[s]=new Function(qx.legacy.ui.core.Parent.prototype._remapStart+s+qx.legacy.ui.core.Parent.prototype._remapStop);
}}},defer:function(cv,cw,cx){qx.legacy.core.Property.addCachedProperty({name:bW,defaultValue:null},cw);
if(qx.core.Variant.isSet(cc,bJ)){cw._layoutChildOrig=cw._layoutChild;
cw._layoutChild=function(d){if(!d._initialLayoutDone||!d._layoutChanges.border){return this._layoutChildOrig(d);
}var f=d.getElement().style;
var g=f.display;
f.display=bQ;
var h=this._layoutChildOrig(d);
f.display=g;
return h;
};
}},destruct:function(){this._disposeArray(bY);
this._disposeObjects(bq,ca);
this._disposeFields(bz,bz,bD,bF,bv);
}});
})();
(function(){var a="qx.legacy.ui.layout.CanvasLayout";
qx.Class.define(a,{extend:qx.legacy.ui.core.Parent,construct:function(){arguments.callee.base.call(this);
},members:{_createLayoutImpl:function(){return new qx.legacy.ui.layout.impl.CanvasLayoutImpl(this);
}}});
})();
(function(){var v="qx.event.type.Event",u="",t="qx.legacy.util.NativeWindow",s=":border-box;",r="auto",q="pointer",p="hand",n="*",m=":content-box;",k="cursor:",Y="mousedown",X="_document",W="img{",V="client-document",U="html,body { margin:0;border:0;padding:0; } ",T="qx.client",S="_window",R="singleton",Q="changeGlobalCursor",P="_modalWidgets",C="qx.enableApplicationLayout",D="qx.legacy.ui.popup.PopupManager",A="}",B=" !important",y="qx.legacy.ui.window.Window",z="*{",w="String",x="windowresize",E="BackgroundImageCache",F="_globalCursorStyleSheet",I="_blocker",H="_modalNativeWindow",K="_applyGlobalCursor",J="qx.boxModelCorrection",M="mouseup",L="html,body{width:100%;height:100%;overflow:hidden;}",G="html { border:0 none; } ",O="} ",N="qx.legacy.ui.core.ClientDocument";
qx.Class.define(N,{type:R,extend:qx.legacy.ui.layout.CanvasLayout,construct:function(){arguments.callee.base.call(this);
if(qx.core.Setting.get(J)){var b=qx.legacy.core.Client.getInstance().getEngineBoxSizingAttributes();
var d=b.join(s)+s;
var c=b.join(m)+m;
qx.bom.Stylesheet.createElement(U+G+z+d+O+W+c+A);
}
if(qx.core.Setting.get(C)){qx.bom.Stylesheet.createElement(L);
}this._window=window;
this._document=window.document;
this.setElement(this._document.body);
this._document.body.style.position=u;
try{document.execCommand(E,false,true);
}catch(bh){}this._cachedInnerWidth=this._document.body.offsetWidth;
this._cachedInnerHeight=this._document.body.offsetHeight;
this.addListener(x,this._onwindowresize);
this._modalWidgets=[];
this._modalNativeWindow=null;
this.activateFocusRoot();
this.initHideFocus();
this.initSelectable();
qx.legacy.event.handler.EventHandler.getInstance().setFocusRoot(this);
},events:{"focus":v,"windowblur":v,"windowfocus":v,"windowresize":v},properties:{appearance:{refine:true,init:V},enableElementFocus:{refine:true,init:false},enabled:{refine:true,init:true},selectable:{refine:true,init:false},hideFocus:{refine:true,init:true},globalCursor:{check:w,nullable:true,themeable:true,apply:K,event:Q}},members:{_applyParent:qx.lang.Function.returnTrue,getTopLevelWidget:qx.lang.Function.returnThis,getWindowElement:function(){return this._window;
},getDocumentElement:function(){return this._document;
},getParent:qx.lang.Function.returnNull,getToolTip:qx.lang.Function.returnNull,isMaterialized:qx.lang.Function.returnTrue,isSeeable:qx.lang.Function.returnTrue,_isDisplayable:true,_hasParent:false,_initialLayoutDone:true,_getBlocker:function(){if(!this._blocker){this._blocker=new qx.legacy.ui.core.ClientDocumentBlocker;
this._blocker.addListener(Y,this.blockHelper,this);
this._blocker.addListener(M,this.blockHelper,this);
this.add(this._blocker);
}return this._blocker;
},blockHelper:function(e){if(this._modalNativeWindow){if(!this._modalNativeWindow.isClosed()){this._modalNativeWindow.focus();
}else{this.debug("Window seems to be closed already! => Releasing Blocker");
this.release(this._modalNativeWindow);
}}},block:function(bf){this._getBlocker().show();

if(qx.Class.isDefined(y)&&bf instanceof qx.legacy.ui.window.Window){this._modalWidgets.push(bf);
var bg=bf.getZIndex();
this._getBlocker().setZIndex(bg);
bf.setZIndex(bg+1);
}else if(qx.Class.isDefined(t)&&bf instanceof qx.legacy.util.NativeWindow){this._modalNativeWindow=bf;
this._getBlocker().setZIndex(1e7);
}},release:function(f){if(f){if(qx.Class.isDefined(t)&&f instanceof qx.legacy.util.NativeWindow){this._modalNativeWindow=null;
}else{qx.lang.Array.remove(this._modalWidgets,f);
}}var l=this._modalWidgets.length;

if(l==0){this._getBlocker().hide();
}else{var g=this._modalWidgets[l-1];
var o=g.getZIndex();
this._getBlocker().setZIndex(o);
g.setZIndex(o+1);
}},createStyleElement:function(e){return qx.bom.Stylesheet.createElement(e);
},addCssRule:function(bc,bd,be){return qx.bom.Stylesheet.addRule(bc,bd,be);
},removeCssRule:function(ba,bb){return qx.bom.Stylesheet.removeRule(ba,bb);
},removeAllCssRules:function(a){return qx.bom.Stylesheet.removeAllRules(a);
},_applyGlobalCursor:qx.core.Variant.select(T,{"mshtml":function(bi,bj){if(bi==q){bi=p;
}
if(bj==q){bj=p;
}var bm,bn;
var bl=this._cursorElements;

if(bl){for(var i=0,l=bl.length;i<l;i++){bm=bl[i];

if(bm.style.cursor==bj){bm.style.cursor=bm._oldCursor;
bm._oldCursor=null;
}}}var bk=document.all;
var bl=this._cursorElements=[];

if(bi!=null&&bi!=u&&bi!=r){for(var i=0,l=bk.length;i<l;i++){bm=bk[i];
bn=bm.style.cursor;

if(bn!=null&&bn!=u&&bn!=r){bm._oldCursor=bn;
bm.style.cursor=bi;
bl.push(bm);
}}document.body.style.cursor=bi;
}else{document.body.style.cursor=u;
}},"default":function(h,j){if(!this._globalCursorStyleSheet){this._globalCursorStyleSheet=this.createStyleElement();
}this.removeCssRule(this._globalCursorStyleSheet,n);

if(h){this.addCssRule(this._globalCursorStyleSheet,n,k+h+B);
}}}),_onwindowresize:function(e){if(qx.Class.isDefined(D)){qx.legacy.ui.popup.PopupManager.getInstance().update();
}this._recomputeInnerWidth();
this._recomputeInnerHeight();
qx.legacy.ui.core.Widget.flushGlobalQueues();
},_computeInnerWidth:function(){return this._document.body.offsetWidth;
},_computeInnerHeight:function(){return this._document.body.offsetHeight;
}},settings:{"qx.enableApplicationLayout":true,"qx.boxModelCorrection":true},destruct:function(){this._disposeObjects(I);
this._disposeFields(S,X,P,H,F);
}});
})();
(function(){var a="qx.legacy.event.type.FocusEvent";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{relatedTarget:{}},members:{}});
})();
(function(){var Q="mousedown",P="mouseup",O="qx.client",N="mouseover",M="click",L="qx.legacy.ui.menu.Manager",K="gecko",J="dblclick",I="mouseout",H="dragover",bQ="qx.legacy.event.handler.DragAndDropHandler",bP="dragenter",bO="qx.legacy.ui.popup.ToolTipManager",bN="contextmenu",bM="blur",bL="Boolean",bK="draggesture",bJ="dragdrop",bI="keydown",bH="dragexit",X="mousewheel",Y="qx.legacy.ui.popup.PopupManager",V="mousemove",W="resize",T="dragstart",U="focus",R="dragleave",S="DOMMouseScroll",be="drag",bf="qx.legacy.ui.embed.IframeManager",bn="__uw",bl="__uA",bv="_lastMouseDownDomTarget",bq="Escape",bD="textarea",bA="singleton",bh="qx.event.type.Data",bG="A",bF="error",bE="input",bg="Tab",bj="windowblur",bk="_lastMouseDown",bm="qx.legacy.event.handler.EventHandler",bo="_lastMouseDownDispatchTarget",br="qx.legacy.ui.core.Parent",bx="windowresize",bC="_lastMouseEventDate",ba="_lastMouseEventType",bb="__uy",bi="_applyCaptureWidget",bu="qx.legacy.ui.core.Widget",bt="_commands",bs="keyup",bz="windowfocus",by="_applyFocusRoot",bp="keypress",bw="__uz",G="__uB",bB="__ux",bc="dragend",bd="iframe";
qx.Class.define(bm,{type:bA,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__uw=qx.lang.Function.bind(this._onmouseevent,this);
this.__ux=qx.lang.Function.bind(this._ondragevent,this);
this.__uy=qx.lang.Function.bind(this._onselectevent,this);
this.__uz=qx.lang.Function.bind(this._onwindowblur,this);
this.__uA=qx.lang.Function.bind(this._onwindowfocus,this);
this.__uB=qx.lang.Function.bind(this._onwindowresize,this);
this._commands={};
},events:{"error":bh},statics:{mouseEventTypes:[N,V,I,Q,P,M,J,bN,qx.core.Variant.isSet(O,K)?S:X],keyEventTypes:[bI,bp,bs],dragEventTypes:qx.core.Variant.select(O,{"gecko":[bJ,H,bP,bH,bK],"mshtml":[bc,H,T,be,bP,R],"default":[T,bJ,H,be,R,bP,bH,bK]}),getDomTarget:qx.core.Variant.select(O,{"mshtml":function(c){return c.target||c.srcElement;
},"webkit":function(cn){var co=cn.target||cn.srcElement;
if(co&&(co.nodeType==qx.dom.Node.TEXT)){co=co.parentNode;
}return co;
},"default":function(q){return q.target;
}}),stopDomEvent:function(bY){if(bY.preventDefault){bY.preventDefault();
}bY.returnValue=false;
},getOriginalTargetObject:function(bS){if(bS==document.documentElement){bS=document.body;
}while(bS!=null&&bS.qx_Widget==null){try{bS=bS.parentNode;
}catch(b){bS=null;
}}return bS?bS.qx_Widget:null;
},getOriginalTargetObjectFromEvent:function(cd,ce){var cg=qx.legacy.event.handler.EventHandler.getDomTarget(cd);
if(ce){var cf=ce.document;

if(cg==ce||cg==cf||cg==cf.documentElement||cg==cf.body){return cf.body.qx_Widget;
}}return qx.legacy.event.handler.EventHandler.getOriginalTargetObject(cg);
},getRelatedOriginalTargetObjectFromEvent:function(cN){return qx.legacy.event.handler.EventHandler.getOriginalTargetObject(cN.relatedTarget||(cN.type==N?cN.fromElement:cN.toElement));
},getTargetObject:function(cB,cC,cD){if(!cC){var cC=qx.legacy.event.handler.EventHandler.getOriginalTargetObject(cB);

if(!cC){return null;
}}while(cC){if(!cD&&!cC.getEnabled()){return null;
}if(!cC.getAnonymous()){break;
}cC=cC.getParent();
}return cC;
},getTargetObjectFromEvent:function(a){return qx.legacy.event.handler.EventHandler.getTargetObject(qx.legacy.event.handler.EventHandler.getDomTarget(a));
},getRelatedTargetObjectFromEvent:function(bW){var bX=bW.relatedTarget;

if(!bX){if(bW.type==N){bX=bW.fromElement;
}else{bX=bW.toElement;
}}return qx.legacy.event.handler.EventHandler.getTargetObject(bX);
}},properties:{allowClientContextMenu:{check:bL,init:false},allowClientSelectAll:{check:bL,init:false},captureWidget:{check:bu,nullable:true,apply:bi},focusRoot:{check:br,nullable:true,apply:by}},members:{_lastMouseEventType:null,_lastMouseDown:false,_lastMouseEventDate:0,_applyCaptureWidget:function(ch,ci){if(ci){ci.setCapture(false);
}
if(ch){ch.setCapture(true);
}},_applyFocusRoot:function(ck,cl){if(cl){cl.setFocusedChild(null);
}
if(ck&&ck.getFocusedChild()==null){ck.setFocusedChild(ck);
}},addCommand:function(F){this._commands[F.toHashCode()]=F;
},removeCommand:function(cq){delete this._commands[cq.toHashCode()];
},_checkKeyEventMatch:function(e){var n;

for(var o in this._commands){n=this._commands[o];

if(n.getEnabled()&&n.matchesKeyEvent(e)){if(!n.execute(e.getTarget())){e.preventDefault();
}break;
}}},attachEvents:function(){this.attachEventTypes(qx.legacy.event.handler.EventHandler.mouseEventTypes,this.__uw);
this.attachEventTypes(qx.legacy.event.handler.EventHandler.dragEventTypes,this.__ux);
qx.legacy.event.handler.KeyEventHandler.getInstance()._attachEvents();
qx.legacy.html.EventRegistration.addListener(window,bM,this.__uz);
qx.legacy.html.EventRegistration.addListener(window,U,this.__uA);
qx.legacy.html.EventRegistration.addListener(window,W,this.__uB);
document.body.onselect=document.onselectstart=document.onselectionchange=this.__uy;
},detachEvents:function(){this.detachEventTypes(qx.legacy.event.handler.EventHandler.mouseEventTypes,this.__uw);
this.detachEventTypes(qx.legacy.event.handler.EventHandler.dragEventTypes,this.__ux);
qx.legacy.event.handler.KeyEventHandler.getInstance()._detachEvents();
qx.legacy.html.EventRegistration.removeListener(window,bM,this.__uz);
qx.legacy.html.EventRegistration.removeListener(window,U,this.__uA);
qx.legacy.html.EventRegistration.removeListener(window,W,this.__uB);
document.body.onselect=document.onselectstart=document.onselectionchange=null;
},attachEventTypes:function(cr,cs){try{var ct=qx.core.Variant.isSet(O,K)?window:document.body;

for(var i=0,l=cr.length;i<l;i++){qx.legacy.html.EventRegistration.addListener(ct,cr[i],cs);
}}catch(cp){throw new Error("qx.legacy.event.handler.EventHandler: Failed to attach window event types: "+cr+": "+cp);
}},detachEventTypes:function(bT,bU){try{var bV=qx.core.Variant.isSet(O,K)?window:document.body;

for(var i=0,l=bT.length;i<l;i++){qx.legacy.html.EventRegistration.removeListener(bV,bT[i],bU);
}}catch(cm){throw new Error("qx.legacy.event.handler.EventHandler: Failed to detach window event types: "+bT+": "+cm);
}},_onkeyevent_post:function(cE,cF,cG,cH,cI){var cM=qx.legacy.event.handler.EventHandler.getDomTarget(cE);
var cK=this.getFocusRoot();
var cL=this.getCaptureWidget()||(cK==null?null:cK.getActiveChild());
var cJ=new qx.legacy.event.type.KeyEvent(cF,cE,cM,cL,null,cG,cH,cI);
if(cF==bI){this._checkKeyEventMatch(cJ);
}
if(cL!=null&&cL.getEnabled()){switch(cI){case bq:case bg:if(qx.Class.isDefined(L)){qx.legacy.ui.menu.Manager.getInstance().update(cL,cF);
}break;
}if(!this.getAllowClientSelectAll()){if(cE.ctrlKey&&cI==bG){switch(cM.tagName.toLowerCase()){case bE:case bD:case bd:break;
default:qx.legacy.event.handler.EventHandler.stopDomEvent(cE);
}}}
try{cL.dispatchEvent(cJ);
if(qx.Class.isDefined(bQ)){qx.legacy.event.handler.DragAndDropHandler.getInstance().handleKeyEvent(cJ);
}}catch(cj){this.error("Failed to dispatch key event",cj);
this.fireDataEvent(bF,cj);
}}cJ.dispose();
},_onmouseevent:qx.core.Variant.select(O,{"mshtml":function(ca){if(!ca){ca=window.event;
}var cc=qx.legacy.event.handler.EventHandler.getDomTarget(ca);
var cb=ca.type;

if(cb==V){if(this._mouseIsDown&&ca.button==0){this._onmouseevent_post(ca,P);
this._mouseIsDown=false;
}}else{if(cb==Q){this._mouseIsDown=true;
}else if(cb==P){this._mouseIsDown=false;
}if(cb==P&&!this._lastMouseDown&&((new Date).valueOf()-this._lastMouseEventDate)<250){this._onmouseevent_post(ca,Q);
}else if(cb==J&&this._lastMouseEventType==P&&((new Date).valueOf()-this._lastMouseEventDate)<250){this._onmouseevent_post(ca,M);
}
switch(cb){case Q:case P:case M:case J:case bN:this._lastMouseEventType=cb;
this._lastMouseEventDate=(new Date).valueOf();
this._lastMouseDown=cb==Q;
}}this._onmouseevent_post(ca,cb,cc);
},"default":function(cy){var cA=qx.legacy.event.handler.EventHandler.getDomTarget(cy);
var cz=cy.type;

switch(cz){case S:cz=X;
break;
case M:case J:if(cy.which!==1){return;
}}this._onmouseevent_post(cy,cz,cA);
}}),_onmouseevent_click_fix:qx.core.Variant.select(O,{"gecko":function(cu,cv,cw){var cx=false;

switch(cv){case Q:this._lastMouseDownDomTarget=cu;
this._lastMouseDownDispatchTarget=cw;
break;
case P:if(this._lastMouseDownDispatchTarget===cw&&cu!==this._lastMouseDownDomTarget){cx=true;
}else{this._lastMouseDownDomTarget=null;
this._lastMouseDownDispatchTarget=null;
}}return cx;
},"default":null}),_onmouseevent_post:function(r,s,t){var v,A,E,w,y,D,z,B;
A=this.getCaptureWidget();
y=qx.legacy.event.handler.EventHandler.getOriginalTargetObject(t);
if(!A){E=w=qx.legacy.event.handler.EventHandler.getTargetObject(null,y,true);
}else{E=A;
w=qx.legacy.event.handler.EventHandler.getTargetObject(null,y,true);
}if(!w){return;
}B=w.getEnabled();
if(qx.core.Variant.isSet(O,K)){z=this._onmouseevent_click_fix(t,s,E);
}if(s==bN&&!this.getAllowClientContextMenu()){qx.legacy.event.handler.EventHandler.stopDomEvent(r);
}if(B&&s==Q){qx.legacy.event.handler.FocusHandler.mouseFocus=true;
var x=w.getFocusRoot();

if(x){this.setFocusRoot(x);
var u=w;

while(!u.isFocusable()&&u!=x){u=u.getParent();
}x.setFocusedChild(u);
x.setActiveChild(w);
}}switch(s){case N:case I:D=qx.legacy.event.handler.EventHandler.getRelatedTargetObjectFromEvent(r);
if(D==w){return;
}}v=new qx.legacy.event.type.MouseEvent(s,r,t,w,y,D);
qx.legacy.event.type.MouseEvent.storeEventState(v);

if(B){var C=false;
C=E?E.dispatchEvent(v):true;
this._onmouseevent_special_post(s,w,y,E,C,v,r);
}else{if(s==N){if(qx.Class.isDefined(bO)){qx.legacy.ui.popup.ToolTipManager.getInstance().handleMouseOver(v);
}}}v.dispose();
v=null;
if(z){this._onmouseevent_post(r,M,this._lastMouseDownDomTarget);
this._lastMouseDownDomTarget=null;
this._lastMouseDownDispatchTarget=null;
}},_onmouseevent_special_post:function(d,f,g,h,j,k,m){switch(d){case Q:if(qx.Class.isDefined(Y)){qx.legacy.ui.popup.PopupManager.getInstance().update(f);
}
if(qx.Class.isDefined(L)){qx.legacy.ui.menu.Manager.getInstance().update(f,d);
}
if(qx.Class.isDefined(bf)){qx.legacy.ui.embed.IframeManager.getInstance().handleMouseDown(k);
}break;
case P:if(qx.Class.isDefined(L)){qx.legacy.ui.menu.Manager.getInstance().update(f,d);
}
if(qx.Class.isDefined(bf)){qx.legacy.ui.embed.IframeManager.getInstance().handleMouseUp(k);
}break;
case N:if(qx.Class.isDefined(bO)){qx.legacy.ui.popup.ToolTipManager.getInstance().handleMouseOver(k);
}break;
case I:if(qx.Class.isDefined(bO)){qx.legacy.ui.popup.ToolTipManager.getInstance().handleMouseOut(k);
}break;
}this._ignoreWindowBlur=d===Q;
if(qx.Class.isDefined(bQ)&&f){qx.legacy.event.handler.DragAndDropHandler.getInstance().handleMouseEvent(k);
}},_ondragevent:function(bR){if(!bR){bR=window.event;
}qx.legacy.event.handler.EventHandler.stopDomEvent(bR);
},_onselectevent:function(e){if(!e){e=window.event;
}var p=qx.legacy.event.handler.EventHandler.getOriginalTargetObjectFromEvent(e);
while(p){if(p.getSelectable()!=null){if(!p.getSelectable()){qx.legacy.event.handler.EventHandler.stopDomEvent(e);
}break;
}p=p.getParent();
}},_focused:false,_onwindowblur:function(e){if(!this._focused||this._ignoreWindowBlur){return;
}this._focused=false;
this.setCaptureWidget(null);
if(qx.Class.isDefined(Y)){qx.legacy.ui.popup.PopupManager.getInstance().update();
}if(qx.Class.isDefined(L)){qx.legacy.ui.menu.Manager.getInstance().update();
}if(qx.Class.isDefined(bQ)){qx.legacy.event.handler.DragAndDropHandler.getInstance().globalCancelDrag();
}qx.legacy.ui.core.ClientDocument.getInstance().fireEvent(bj);
},_onwindowfocus:function(e){if(this._focused){return;
}this._focused=true;
qx.legacy.ui.core.ClientDocument.getInstance().fireEvent(bz);
},_onwindowresize:function(e){qx.legacy.ui.core.ClientDocument.getInstance().fireEvent(bx);
}},destruct:function(){this.detachEvents();
this._disposeMap(bt);
this._disposeFields(bn,bB,bb,bw,bl,G);
this._disposeFields(ba,bk,bC,bv,bo);
}});
})();
(function(){var K="keydown",J="qx.client",I="keypress",H="NumLock",G="keyup",F="Enter",E="gecko",D="0",C="9",B="F1",bN="-",bM="PageUp",bL="+",bK="PrintScreen",bJ="A",bI="Left",bH="F5",bG="Down",bF="Up",bE="F11",R="F6",S="PageDown",P="Insert",Q="F8",N="End",O="/",L="Delete",M="Z",Y="*",ba="F4",bk="Home",bh="F2",bs="F12",bn="F7",bA="F9",bx="F10",bd="Right",bD="F3",bC="Escape",bB="webkit",bc="3",bf="5",bg="singleton",bj="Meta",bl="7",bo="CapsLock",bu="keyinput",bz="Scroll",T="Control",U="Tab",be="Shift",br="Pause",bq="Unidentified",bp="_lastUpDownType",bw="Apps",bv="6",bm="4",bt="Alt",y="2",by="mshtml",V="8",W="Win",bi="1",z="qx.legacy.event.handler.KeyEventHandler",A=",",bb="Backspace",X="Space";
qx.Class.define(z,{type:bg,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._lastUpDownType={};
this.__uC=qx.lang.Function.bind(this._onKeyPress,this);
this.__uD=qx.lang.Function.bind(this._onkeyupdown,this);
},members:{_attachEvents:function(){var f=qx.core.Variant.isSet(J,E)?window:document.body;
qx.legacy.html.EventRegistration.addListener(f,I,this.__uC);
qx.legacy.html.EventRegistration.addListener(f,G,this.__uD);
qx.legacy.html.EventRegistration.addListener(f,K,this.__uD);
},_detachEvents:function(){var bQ=qx.core.Variant.isSet(J,E)?window:document.body;
qx.legacy.html.EventRegistration.removeListener(bQ,I,this.__uC);
qx.legacy.html.EventRegistration.removeListener(bQ,G,this.__uD);
qx.legacy.html.EventRegistration.removeListener(bQ,K,this.__uD);
},_onkeyupdown:qx.core.Variant.select(J,{"mshtml":function(bW){bW=window.event||bW;
var ca=bW.keyCode;
var bX=0;
var bY=bW.type;
if(!(this._lastUpDownType[ca]==K&&bY==K)){this._idealKeyHandler(ca,bX,bY,bW);
}if(bY==K){if(this._isNonPrintableKeyCode(ca)||
ca==
8||ca==9){this._idealKeyHandler(ca,bX,I,bW);
}}this._lastUpDownType[ca]=bY;
},"gecko":function(bR){var bV=this._keyCodeFix[bR.keyCode]||bR.keyCode;
var bT=bR.charCode;
var bU=bR.type;
if(qx.legacy.core.Client.getInstance().runsOnWindows()){var bS=bV?this._keyCodeToIdentifier(bV):this._charCodeToIdentifier(bT);

if(!(this._lastUpDownType[bS]==I&&bU==K)){this._idealKeyHandler(bV,bT,bU,bR);
}this._lastUpDownType[bS]=bU;
}else{this._idealKeyHandler(bV,bT,bU,bR);
}},"webkit":function(ce){var cg=0;
var ch=ce.type;
if(qx.bom.client.Engine.VERSION<525.13){var ci=0;
if(qx.legacy.core.Client.getInstance().getVersion()<420){if(!this._lastCharCodeForType){this._lastCharCodeForType={};
}var cf=this._lastCharCodeForType[ch]>63000;

if(cf){this._lastCharCodeForType[ch]=null;
return;
}this._lastCharCodeForType[ch]=ce.charCode;
}
if(ch==G||ch==K){ci=this._charCode2KeyCode[ce.charCode]||ce.keyCode;
}else{if(this._charCode2KeyCode[ce.charCode]){ci=this._charCode2KeyCode[ce.charCode];
}else{cg=ce.charCode;
}}this._idealKeyHandler(ci,cg,ch,ce);
}else{var ci=ce.keyCode;
if(!(this._lastUpDownType[ci]==K&&ch==K)){this._idealKeyHandler(ci,cg,ch,ce);
}if(ch==K){if(this._isNonPrintableKeyCode(ci)||ci==8||ci==9){this._idealKeyHandler(ci,cg,I,ce);
}}this._lastUpDownType[ci]=ch;
}},"opera":function(cd){this._idealKeyHandler(cd.keyCode,0,cd.type,cd);
},"default":function(){throw new Error("Unsupported browser for key event handler!");
}}),_onKeyPress:qx.core.Variant.select(J,{"mshtml":function(g){var g=window.event||g;

if(this._charCode2KeyCode[g.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[g.keyCode],0,g.type,g);
}else{this._idealKeyHandler(0,g.keyCode,g.type,g);
}},"gecko":function(h){var l=this._keyCodeFix[h.keyCode]||h.keyCode;
var j=h.charCode;
var k=h.type;
if(qx.legacy.core.Client.getInstance().runsOnWindows()){var i=l?this._keyCodeToIdentifier(l):this._charCodeToIdentifier(j);

if(!(this._lastUpDownType[i]==I&&k==K)){this._idealKeyHandler(l,j,k,h);
}this._lastUpDownType[i]=k;
}else{this._idealKeyHandler(l,j,k,h);
}},"webkit":function(m){if(qx.bom.client.Engine.VERSION<525.13){var q=0;
var o=0;
var p=m.type;
if(qx.legacy.core.Client.getInstance().getVersion()<420){if(!this._lastCharCodeForType){this._lastCharCodeForType={};
}var n=this._lastCharCodeForType[p]>63000;

if(n){this._lastCharCodeForType[p]=null;
return;
}this._lastCharCodeForType[p]=m.charCode;
}
if(p==G||p==K){q=this._charCode2KeyCode[m.charCode]||m.keyCode;
}else{if(this._charCode2KeyCode[m.charCode]){q=this._charCode2KeyCode[m.charCode];
}else{o=m.charCode;
}}this._idealKeyHandler(q,o,p,m);
}else{if(this._charCode2KeyCode[m.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[m.keyCode],0,m.type,m);
}else{this._idealKeyHandler(0,m.keyCode,m.type,m);
}}},"opera":function(x){if(this._keyCodeToIdentifierMap[x.keyCode]){this._idealKeyHandler(x.keyCode,0,x.type,x);
}else{this._idealKeyHandler(0,x.keyCode,x.type,x);
}},"default":function(){throw new Error("Unsupported browser for key event handler!");
}}),_specialCharCodeMap:{8:bb,9:U,13:F,27:bC,32:X},_keyCodeToIdentifierMap:{16:be,17:T,18:bt,20:bo,224:bj,37:bI,38:bF,39:bd,40:bG,33:bM,34:S,35:N,36:bk,45:P,46:L,112:B,113:bh,114:bD,115:ba,116:bH,117:R,118:bn,119:Q,120:bA,121:bx,122:bE,123:bs,144:H,44:bK,145:bz,19:br,91:W,93:bw},_numpadToCharCode:{96:D.charCodeAt(0),97:bi.charCodeAt(0),98:y.charCodeAt(0),99:bc.charCodeAt(0),100:bm.charCodeAt(0),101:bf.charCodeAt(0),102:bv.charCodeAt(0),103:bl.charCodeAt(0),104:V.charCodeAt(0),105:C.charCodeAt(0),106:Y.charCodeAt(0),107:bL.charCodeAt(0),109:bN.charCodeAt(0),110:A.charCodeAt(0),111:O.charCodeAt(0)},_charCodeA:bJ.charCodeAt(0),_charCodeZ:M.charCodeAt(0),_charCode0:D.charCodeAt(0),_charCode9:C.charCodeAt(0),_isNonPrintableKeyCode:function(cj){return this._keyCodeToIdentifierMap[cj]?true:false;
},_isIdentifiableKeyCode:function(w){if(w>=this._charCodeA&&w<=this._charCodeZ){return true;
}if(w>=this._charCode0&&w<=this._charCode9){return true;
}if(this._specialCharCodeMap[w]){return true;
}if(this._numpadToCharCode[w]){return true;
}if(this._isNonPrintableKeyCode(w)){return true;
}return false;
},isValidKeyIdentifier:function(bO){if(this._identifierToKeyCodeMap[bO]){return true;
}
if(bO.length!=1){return false;
}
if(bO>=D&&bO<=C){return true;
}
if(bO>=bJ&&bO<=M){return true;
}
switch(bO){case bL:case bN:case Y:case O:return true;
default:return false;
}},_keyCodeToIdentifier:function(cb){if(this._isIdentifiableKeyCode(cb)){var cc=this._numpadToCharCode[cb];

if(cc){return String.fromCharCode(cc);
}return (this._keyCodeToIdentifierMap[cb]||this._specialCharCodeMap[cb]||String.fromCharCode(cb));
}else{return bq;
}},_charCodeToIdentifier:function(v){return this._specialCharCodeMap[v]||String.fromCharCode(v).toUpperCase();
},_identifierToKeyCode:function(bP){return this._identifierToKeyCodeMap[bP]||bP.charCodeAt(0);
},_idealKeyHandler:function(a,b,c,d){if(!a&&!b){return;
}var e;
if(a){e=this._keyCodeToIdentifier(a);
qx.legacy.event.handler.EventHandler.getInstance()._onkeyevent_post(d,c,a,b,e);
}else{e=this._charCodeToIdentifier(b);
qx.legacy.event.handler.EventHandler.getInstance()._onkeyevent_post(d,I,a,b,e);
qx.legacy.event.handler.EventHandler.getInstance()._onkeyevent_post(d,bu,a,b,e);
}}},defer:function(r,s,t){if(!s._identifierToKeyCodeMap){s._identifierToKeyCodeMap={};

for(var u in s._keyCodeToIdentifierMap){s._identifierToKeyCodeMap[s._keyCodeToIdentifierMap[u]]=parseInt(u);
}
for(var u in s._specialCharCodeMap){s._identifierToKeyCodeMap[s._specialCharCodeMap[u]]=parseInt(u);
}}
if(qx.core.Variant.isSet(J,by)){s._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(J,E)){s._keyCodeFix={12:s._identifierToKeyCode(H)};
}else if(qx.core.Variant.isSet(J,bB)){if(qx.bom.client.Engine.VERSION<525.13){s._charCode2KeyCode={63289:s._identifierToKeyCode(H),63276:s._identifierToKeyCode(bM),63277:s._identifierToKeyCode(S),63275:s._identifierToKeyCode(N),63273:s._identifierToKeyCode(bk),63234:s._identifierToKeyCode(bI),63232:s._identifierToKeyCode(bF),63235:s._identifierToKeyCode(bd),63233:s._identifierToKeyCode(bG),63272:s._identifierToKeyCode(L),63302:s._identifierToKeyCode(P),63236:s._identifierToKeyCode(B),63237:s._identifierToKeyCode(bh),63238:s._identifierToKeyCode(bD),63239:s._identifierToKeyCode(ba),63240:s._identifierToKeyCode(bH),63241:s._identifierToKeyCode(R),63242:s._identifierToKeyCode(bn),63243:s._identifierToKeyCode(Q),63244:s._identifierToKeyCode(bA),63245:s._identifierToKeyCode(bx),63246:s._identifierToKeyCode(bE),63247:s._identifierToKeyCode(bs),63248:s._identifierToKeyCode(bK),3:s._identifierToKeyCode(F),12:s._identifierToKeyCode(H),13:s._identifierToKeyCode(F)};
}else{s._charCode2KeyCode={13:13,27:27};
}}},destruct:function(){this._detachEvents();
this._disposeFields(bp);
}});
})();
(function(){var S="mshtml",R="gecko",Q="khtml",P="opera",O="webkit",N="string",M="-khtml-box-sizing",L=".",K="netnewswire",J="-",bQ="KDE",bP="+",bO="RealPlayer",bN="CSS1Compat",bM="[^\\.0-9]",bL="Linux",bK="en",bJ="Galeon",bI="-webkit-box-sizing",bH="MacPPC",ba="Gecko",bb="other",X="Win64",Y="org.w3c.dom.svg",V="camino",W="win",T="Macintosh",U="X11",be="Shiira",bf="Mozilla",bn="explorer",bl="box-sizing",bv="1.0",bq="shiira",bD="konqueror",bA="safari",bh="NetNewsWire",bG="other webkit",bF="qx.legacy.core.Client",bE="AppleWebKit",bg="Camino",bj="MSIE",bk="mac",bm="Firefox",bo="other gecko",br="Windows",bx="Safari",bC="Win32",bc="-moz-box-sizing",bd="none",bi="omniweb",bu="unix",bt="file:",bs=" (nightly)",bz="BSD",by="galeon",bp="firefox",bw="realplayer",I="MacIntel",bB="OmniWeb";
qx.Class.define(bF,{statics:{__uE:function(){var C=window.location.protocol===bt;
var E=navigator.userAgent;
var g=navigator.vendor;
var t=navigator.product;
var z=navigator.platform;
var j;
var s=null;
var D=null;
var o=0;
var i=0;
var m=0;
var w=0;
var u=null;
var l=null;
var x;

if(window.opera&&/Opera[\s\/]([0-9\.]*)/.test(E)){s=P;
D=RegExp.$1;
j=P;
D=D.substring(0,3)+L+D.substring(3);
u=E.indexOf(bj)!==-1?S:E.indexOf(bf)!==-1?R:null;
}else if(typeof g===N&&g===bQ&&/KHTML\/([0-9-\.]*)/.test(E)){s=Q;
j=bD;
D=RegExp.$1;
}else if(E.indexOf(bE)!=-1&&/AppleWebKit\/([^ ]+)/.test(E)){s=O;
D=RegExp.$1;
l=D.indexOf(bP)!=-1;
var k=RegExp(bM).exec(D);

if(k){D=D.slice(0,k.index);
}
if(E.indexOf(bx)!=-1){j=bA;
}else if(E.indexOf(bB)!=-1){j=bi;
}else if(E.indexOf(be)!=-1){j=bq;
}else if(E.indexOf(bh)!=-1){j=K;
}else if(E.indexOf(bO)!=-1){j=bw;
}else{j=bG;
}
if(l){j+=bs;
}}else if(window.controllers&&typeof t===N&&t===ba&&/rv\:([^\);]+)(\)|;)/.test(E)){s=R;
D=RegExp.$1;

if(E.indexOf(bm)!=-1){j=bp;
}else if(E.indexOf(bg)!=-1){j=V;
}else if(E.indexOf(bJ)!=-1){j=by;
}else{j=bo;
}}else if(/MSIE\s+([^\);]+)(\)|;)/.test(E)){s=S;
D=RegExp.$1;
j=bn;
}
if(D){x=D.split(L);
o=x[0]||0;
i=x[1]||0;
m=x[2]||0;
w=x[3]||0;
}var d=[];

switch(s){case R:d.push(bc);
break;
case Q:d.push(M);
break;
case O:d.push(M);
d.push(bI);
break;
case S:break;
default:break;
}d.push(bl);
var f=document.compatMode!==bN;
var v=bK;
var n=(s==S?navigator.userLanguage:navigator.language).toLowerCase();
var a=null;
var e=n.indexOf(J);

if(e!=-1){a=n.substr(e+1);
n=n.substr(0,e);
}var p=bd;
var r=false;
var b=false;
var c=false;
var B=false;

if(z.indexOf(br)!=-1||z.indexOf(bC)!=-1||z.indexOf(X)!=-1){r=true;
p=W;
}else if(z.indexOf(T)!=-1||z.indexOf(bH)!=-1||z.indexOf(I)!=-1){b=true;
p=bk;
}else if(z.indexOf(U)!=-1||z.indexOf(bL)!=-1||z.indexOf(bz)!=-1){c=true;
p=bu;
}else{B=true;
p=bb;
}var h=false;
var A=false;
var q=false;
var y=false;

if(s==S){h=true;
}if(document.implementation&&document.implementation.hasFeature){if(document.implementation.hasFeature(Y,bv)){A=q=true;
}}this._runsLocally=C;
this._engineName=s;
this._engineNameMshtml=s===S;
this._engineNameGecko=s===R;
this._engineNameOpera=s===P;
this._engineNameKhtml=s===Q;
this._engineNameWebkit=s===O;
this._engineVersion=parseFloat(D);
this._engineVersionMajor=parseInt(o);
this._engineVersionMinor=parseInt(i);
this._engineVersionRevision=parseInt(m);
this._engineVersionBuild=parseInt(w);
this._engineQuirksMode=f;
this._engineBoxSizingAttributes=d;
this._engineEmulation=u;
this._browserName=j;
this._defaultLocale=v;
this._browserPlatform=p;
this._browserPlatformWindows=r;
this._browserPlatformMacintosh=b;
this._browserPlatformUnix=c;
this._browserPlatformOther=B;
this._browserLocale=n;
this._browserLocaleVariant=a;
this._gfxVml=h;
this._gfxSvg=A;
this._gfxSvgBuiltin=q;
this._gfxSvgPlugin=y;
this._fireBugActive=(window.console&&console.log&&console.debug&&console.assert);
this._supportsTextContent=(document.documentElement.textContent!==undefined);
this._supportsInnerText=(document.documentElement.innerText!==undefined);
this._supportsXPath=!!document.evaluate;
this._supportsElementExtensions=!!window.HTMLElement;
},getRunsLocally:function(){return this._runsLocally;
},getEngine:function(){return this._engineName;
},getBrowser:function(){return this._browserName;
},getVersion:function(){return this._engineVersion;
},getMajor:function(){return this._engineVersionMajor;
},getMinor:function(){return this._engineVersionMinor;
},getRevision:function(){return this._engineVersionRevision;
},getBuild:function(){return this._engineVersionBuild;
},getEmulation:function(){return this._engineEmulation;
},isMshtml:function(){return this._engineNameMshtml;
},isGecko:function(){return this._engineNameGecko;
},isOpera:function(){return this._engineNameOpera;
},isKhtml:function(){return this._engineNameKhtml;
},isWebkit:function(){return this._engineNameWebkit;
},isSafari2:function(){return this._engineNameWebkit&&(this._engineVersion<420);
},isInQuirksMode:function(){return this._engineQuirksMode;
},getLocale:function(){return this._browserLocale;
},getLocaleVariant:function(){return this._browserLocaleVariant;
},getDefaultLocale:function(){return this._defaultLocale;
},usesDefaultLocale:function(){return this._browserLocale===this._defaultLocale;
},getEngineBoxSizingAttributes:function(){return this._engineBoxSizingAttributes;
},getPlatform:function(){return this._browserPlatform;
},runsOnWindows:function(){return this._browserPlatformWindows;
},runsOnMacintosh:function(){return this._browserPlatformMacintosh;
},runsOnUnix:function(){return this._browserPlatformUnix;
},supportsVml:function(){return this._gfxVml;
},supportsSvg:function(){return this._gfxSvg;
},usesSvgBuiltin:function(){return this._gfxSvgBuiltin;
},usesSvgPlugin:function(){return this._gfxSvgPlugin;
},isFireBugActive:function(){return this._fireBugActive;
},supportsTextContent:function(){return this._supportsTextContent;
},supportsInnerText:function(){return this._supportsInnerText;
},getInstance:function(){return this;
}},defer:function(F,G,H){F.__uE();
}});
})();
(function(){var f="on",e="qx.client",d="qx.legacy.html.EventRegistration";
qx.Class.define(d,{statics:{addListener:qx.core.Variant.select(e,{"mshtml":function(j,k,l){j.attachEvent(f+k,l);
},"default":function(g,h,i){g.addEventListener(h,i,false);
}}),removeListener:qx.core.Variant.select(e,{"mshtml":function(m,n,o){m.detachEvent(f+n,o);
},"default":function(a,b,c){a.removeEventListener(b,c,false);
}})}});
})();
(function(){var p="relatedTarget",o="bubbles",n="qx.legacy.event.type.DomEvent",m="_valueRelatedTarget",l="domTarget",k="_valueOriginalTarget",j="originalTarget",i="_valueDomEvent",h="modifiers",g="qx.client",e="domEvent",f="_valueDomTarget";
qx.Class.define(n,{extend:qx.event.type.Event,construct:function(r,s,t,u,v){arguments.callee.base.call(this);
this.init(true,true);
this.setType(r);
this.setDomEvent(s);
this.setDomTarget(t);
this.setTarget(u);
this.setOriginalTarget(v);
},statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_computeModifiers:function(){var b=0;
var a=this.getDomEvent();

if(a.shiftKey)b|=qx.legacy.event.type.DomEvent.SHIFT_MASK;

if(a.ctrlKey)b|=qx.legacy.event.type.DomEvent.CTRL_MASK;

if(a.altKey)b|=qx.legacy.event.type.DomEvent.ALT_MASK;

if(a.metaKey)b|=qx.legacy.event.type.DomEvent.META_MASK;
return b;
},isCtrlPressed:function(){return this.getDomEvent().ctrlKey;
},isShiftPressed:function(){return this.getDomEvent().shiftKey;
},isAltPressed:function(){return this.getDomEvent().altKey;
},isMetaPressed:function(){return this.getDomEvent().metaKey;
},isCtrlOrCommandPressed:function(){if(qx.legacy.core.Client.getInstance().runsOnMacintosh()){return this.getDomEvent().metaKey;
}else{return this.getDomEvent().ctrlKey;
}},setDefaultPrevented:qx.core.Variant.select(g,{"mshtml":function(w){if(!w){return this.error("It is not possible to set preventDefault to false if it was true before!","setDefaultPrevented");
}this.getDomEvent().returnValue=false;
},"default":function(q){if(!q){return this.error("It is not possible to set preventDefault to false if it was true before!","setDefaultPrevented");
}this.getDomEvent().preventDefault();
this.getDomEvent().returnValue=false;
}}),preventDefault:function(){this.setDefaultPrevented(true);
}},defer:function(c,d){qx.legacy.core.Property.addCachedProperty({name:h,defaultValue:null},d);
qx.legacy.core.Property.addFastProperty({name:o,defaultValue:true,noCompute:true},d);
qx.legacy.core.Property.addFastProperty({name:e,defaultValue:null,noCompute:true,setOnlyOnce:true},d);
qx.legacy.core.Property.addFastProperty({name:l,defaultValue:null,noCompute:true,setOnlyOnce:true},d);
qx.legacy.core.Property.addFastProperty({name:j,defaultValue:null,setOnlyOnce:true},d);
qx.legacy.core.Property.addFastProperty({name:p,defaultValue:null,setOnlyOnce:true},d);
},destruct:function(){this._disposeFields(i,f,k,m);
}});
})();
(function(){var c="qx.legacy.event.type.KeyEvent",b="keyIdentifier",a="charCode";
qx.Class.define(c,{extend:qx.legacy.event.type.DomEvent,construct:function(d,e,f,g,h,j,k,l){arguments.callee.base.call(this,d,e,f,g,h);
this._keyCode=j;
this.setCharCode(k);
this.setKeyIdentifier(l);
},statics:{keys:{esc:27,enter:13,tab:9,space:32,up:38,down:40,left:37,right:39,shift:16,ctrl:17,alt:18,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,print:124,del:46,backspace:8,insert:45,home:36,end:35,pageup:33,pagedown:34,numlock:144,numpad_0:96,numpad_1:97,numpad_2:98,numpad_3:99,numpad_4:100,numpad_5:101,numpad_6:102,numpad_7:103,numpad_8:104,numpad_9:105,numpad_divide:111,numpad_multiply:106,numpad_minus:109,numpad_plus:107},codes:{}},members:{getKeyCode:function(){this.warn("Deprecated: please use getKeyIdentifier() instead.");
this.trace();
return this._keyCode;
}},defer:function(m,n){for(var i in m.keys){m.codes[m.keys[i]]=i;
}qx.legacy.core.Property.addFastProperty({name:a,defaultValue:null,setOnlyOnce:true,noCompute:true},n);
qx.legacy.core.Property.addFastProperty({name:b,defaultValue:null,setOnlyOnce:true,noCompute:true},n);
}});
})();
(function(){var r="qx.client",q="left",p="right",o="click",n="middle",m="dblclick",l="none",k="contextmenu",j="qx.legacy.event.type.MouseEvent",i="button",h="wheelDelta";
qx.Class.define(j,{extend:qx.legacy.event.type.DomEvent,construct:function(a,b,c,d,f,g){arguments.callee.base.call(this,a,b,c,d,f);

if(g){this.setRelatedTarget(g);
}},statics:{C_BUTTON_LEFT:"left",C_BUTTON_MIDDLE:"middle",C_BUTTON_RIGHT:"right",C_BUTTON_NONE:"none",_screenX:0,_screenY:0,_clientX:0,_clientY:0,_pageX:0,_pageY:0,_button:null,buttons:qx.core.Variant.select(r,{"mshtml":{left:1,right:2,middle:4},"default":{left:0,right:2,middle:1}}),storeEventState:function(e){this._screenX=e.getScreenX();
this._screenY=e.getScreenY();
this._clientX=e.getClientX();
this._clientY=e.getClientY();
this._pageX=e.getPageX();
this._pageY=e.getPageY();
this._button=e.getButton();
},getScreenX:function(){return this._screenX;
},getScreenY:function(){return this._screenY;
},getClientX:function(){return this._clientX;
},getClientY:function(){return this._clientY;
},getPageX:function(){return this._pageX;
},getPageY:function(){return this._pageY;
},getButton:function(){return this._button;
}},defer:function(s,t){qx.legacy.core.Property.addFastProperty({name:i,readOnly:true},t);
qx.legacy.core.Property.addFastProperty({name:h,readOnly:true},t);
},members:{getPageX:qx.core.Variant.select(r,{"mshtml":function(){return this.getDomEvent().clientX+qx.bom.Viewport.getScrollLeft(window);
},"default":function(){return this.getDomEvent().pageX;
}}),getPageY:qx.core.Variant.select(r,{"mshtml":function(){return this.getDomEvent().clientY+qx.bom.Viewport.getScrollTop(window);
},"default":function(){return this.getDomEvent().pageY;
}}),getClientX:function(){return this.getDomEvent().clientX;
},getClientY:function(){return this.getDomEvent().clientY;
},getScreenX:function(){return this.getDomEvent().screenX;
},getScreenY:function(){return this.getDomEvent().screenY;
},isLeftButtonPressed:qx.core.Variant.select(r,{"mshtml":function(){if(this.getType()==o){return true;
}else{return this.getButton()===qx.legacy.event.type.MouseEvent.C_BUTTON_LEFT;
}},"default":function(){return this.getButton()===qx.legacy.event.type.MouseEvent.C_BUTTON_LEFT;
}}),isMiddleButtonPressed:function(){return this.getButton()===qx.legacy.event.type.MouseEvent.C_BUTTON_MIDDLE;
},isRightButtonPressed:function(){return this.getButton()===qx.legacy.event.type.MouseEvent.C_BUTTON_RIGHT;
},__uF:qx.core.Variant.select(r,{"mshtml":{1:q,2:p,4:n},"default":{0:q,2:p,1:n}}),getButton:function(){switch(this.getDomEvent().type){case o:case m:return q;
case k:return p;
default:return this.__uF[this.getDomEvent().button]||l;
}},_computeWheelDelta:qx.core.Variant.select(r,{"default":function(){return this.getDomEvent().wheelDelta/120;
},"gecko":function(){return -(this.getDomEvent().detail/3);
}})}});
})();
(function(){var f="_objects",e="qx.legacy.util.ObjectManager";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._objects={};
},members:{add:function(i){if(this.isDisposed()){return;
}var j=qx.core.ObjectRegistry.toHashCode(i);
this._objects[j]=i;
return j;
},remove:function(g){if(this.isDisposed()){return false;
}var h=qx.core.ObjectRegistry.toHashCode(g);
delete this._objects[h];
},has:function(c){var d=qx.core.ObjectRegistry.toHashCode(c);
return this._objects[d]!==undefined;
},get:function(a){var b=qx.core.ObjectRegistry.toHashCode(a);
return this._objects[b];
},getByHash:function(l){return this._objects[l];
},getAll:function(){return this._objects;
},enableAll:function(){for(var m in this._objects){this._objects[m].setEnabled(true);
}},disableAll:function(){for(var k in this._objects){this._objects[k].setEnabled(false);
}}},destruct:function(){this._disposeMap(f);
}});
})();
(function(){var e="singleton",d="qx.legacy.ui.embed.IframeManager";
qx.Class.define(d,{type:e,extend:qx.legacy.util.ObjectManager,construct:function(){arguments.callee.base.call(this);
this._blocked={};
},members:{handleMouseDown:function(f){var g=this._blockData=qx.lang.Object.clone(this.getAll());
for(var h in g){g[h].block();
}},handleMouseUp:function(a){var b=this._blockData;
for(var c in b){b[c].release();
}}}});
})();
(function(){var b="qx.legacy.ui.basic.Terminator",a="load";
qx.Class.define(b,{extend:qx.legacy.ui.core.Widget,members:{renderPadding:function(c){if(c.paddingLeft){this._renderRuntimePaddingLeft(this.getPaddingLeft());
}
if(c.paddingRight){this._renderRuntimePaddingRight(this.getPaddingRight());
}
if(c.paddingTop){this._renderRuntimePaddingTop(this.getPaddingTop());
}
if(c.paddingBottom){this._renderRuntimePaddingBottom(this.getPaddingBottom());
}},_renderContent:function(){if(this._computedWidthTypePixel){this._cachedPreferredInnerWidth=null;
}else{this._invalidatePreferredInnerWidth();
}if(this._computedHeightTypePixel){this._cachedPreferredInnerHeight=null;
}else{this._invalidatePreferredInnerHeight();
}if(this._initialLayoutDone){this.addToJobQueue(a);
}},_layoutPost:function(d){if(d.initial||d.load||d.width||d.height){this._postApply();
}},_postApply:qx.lang.Function.returnTrue,_computeBoxWidthFallback:function(){return this.getPreferredBoxWidth();
},_computeBoxHeightFallback:function(){return this.getPreferredBoxHeight();
},_computePreferredInnerWidth:qx.lang.Function.returnZero,_computePreferredInnerHeight:qx.lang.Function.returnZero,_isWidthEssential:function(){if(!this._computedLeftTypeNull&&!this._computedRightTypeNull){return true;
}
if(!this._computedWidthTypeNull&&!this._computedWidthTypeAuto){return true;
}
if(!this._computedMinWidthTypeNull&&!this._computedMinWidthTypeAuto){return true;
}
if(!this._computedMaxWidthTypeNull&&!this._computedMaxWidthTypeAuto){return true;
}
if(this._borderElement){return true;
}return false;
},_isHeightEssential:function(){if(!this._computedTopTypeNull&&!this._computedBottomTypeNull){return true;
}
if(!this._computedHeightTypeNull&&!this._computedHeightTypeAuto){return true;
}
if(!this._computedMinHeightTypeNull&&!this._computedMinHeightTypeAuto){return true;
}
if(!this._computedMaxHeightTypeNull&&!this._computedMaxHeightTypeAuto){return true;
}
if(this._borderElement){return true;
}return false;
}}});
})();
(function(){var W="qx.client",V="_widget",U="qx.legacy.ui.layout.impl.LayoutImpl";
qx.Class.define(U,{extend:qx.core.Object,construct:function(b){arguments.callee.base.call(this);
this._widget=b;
},members:{getWidget:function(){return this._widget;
},computeChildBoxWidth:function(a){return a.getWidthValue()||a._computeBoxWidthFallback();
},computeChildBoxHeight:function(d){return d.getHeightValue()||d._computeBoxHeightFallback();
},computeChildNeededWidth:function(bb){var be=bb._computedMinWidthTypePercent?null:bb.getMinWidthValue();
var bc=bb._computedMaxWidthTypePercent?null:bb.getMaxWidthValue();
var bd=(bb._computedWidthTypePercent||bb._computedWidthTypeFlex?null:bb.getWidthValue())||bb.getPreferredBoxWidth()||0;
return qx.lang.Number.limit(bd,be,bc)+bb.getMarginLeft()+bb.getMarginRight();
},computeChildNeededHeight:function(v){var y=v._computedMinHeightTypePercent?null:v.getMinHeightValue();
var w=v._computedMaxHeightTypePercent?null:v.getMaxHeightValue();
var x=(v._computedHeightTypePercent||v._computedHeightTypeFlex?null:v.getHeightValue())||v.getPreferredBoxHeight()||0;
return qx.lang.Number.limit(x,y,w)+v.getMarginTop()+v.getMarginBottom();
},computeChildrenNeededWidth_max:function(){for(var i=0,G=this.getWidget().getVisibleChildren(),H=G.length,F=0;i<H;i++){F=Math.max(F,G[i].getNeededWidth());
}return F;
},computeChildrenNeededHeight_max:function(){for(var i=0,Y=this.getWidget().getVisibleChildren(),ba=Y.length,X=0;i<ba;i++){X=Math.max(X,Y[i].getNeededHeight());
}return X;
},computeChildrenNeededWidth_sum:function(){for(var i=0,n=this.getWidget().getVisibleChildren(),o=n.length,m=0;i<o;i++){m+=n[i].getNeededWidth();
}return m;
},computeChildrenNeededHeight_sum:function(){for(var i=0,k=this.getWidget().getVisibleChildren(),l=k.length,j=0;i<l;i++){j+=k[i].getNeededHeight();
}return j;
},computeChildrenNeededWidth:null,computeChildrenNeededHeight:null,updateSelfOnChildOuterWidthChange:function(P){},updateSelfOnChildOuterHeightChange:function(z){},updateChildOnInnerWidthChange:function(bl){},updateChildOnInnerHeightChange:function(c){},updateSelfOnJobQueueFlush:function(I){},updateChildrenOnJobQueueFlush:function(J){},updateChildrenOnAddChild:function(bj,bk){},updateChildrenOnRemoveChild:function(p,q){},updateChildrenOnMoveChild:function(C,D,E){},flushChildrenQueue:function(M){var O=this.getWidget();

for(var N in M){O._layoutChild(M[N]);
}},layoutChild:function(e,f){},layoutChild_sizeLimitX:qx.core.Variant.select(W,{"mshtml":qx.lang.Function.returnTrue,"default":function(K,L){if(L.minWidth){K._computedMinWidthTypeNull?K._resetRuntimeMinWidth():K._renderRuntimeMinWidth(K.getMinWidthValue());
}else if(L.initial&&!K._computedMinWidthTypeNull){K._renderRuntimeMinWidth(K.getMinWidthValue());
}
if(L.maxWidth){K._computedMaxWidthTypeNull?K._resetRuntimeMaxWidth():K._renderRuntimeMaxWidth(K.getMaxWidthValue());
}else if(L.initial&&!K._computedMaxWidthTypeNull){K._renderRuntimeMaxWidth(K.getMaxWidthValue());
}}}),layoutChild_sizeLimitY:qx.core.Variant.select(W,{"mshtml":qx.lang.Function.returnTrue,"default":function(g,h){if(h.minHeight){g._computedMinHeightTypeNull?g._resetRuntimeMinHeight():g._renderRuntimeMinHeight(g.getMinHeightValue());
}else if(h.initial&&!g._computedMinHeightTypeNull){g._renderRuntimeMinHeight(g.getMinHeightValue());
}
if(h.maxHeight){g._computedMaxHeightTypeNull?g._resetRuntimeMaxHeight():g._renderRuntimeMaxHeight(g.getMaxHeightValue());
}else if(h.initial&&!g._computedMaxHeightTypeNull){g._renderRuntimeMaxHeight(g.getMaxHeightValue());
}}}),layoutChild_marginX:function(bf,bg){if(bg.marginLeft||bg.initial){var bh=bf.getMarginLeft();
bh!=null?bf._renderRuntimeMarginLeft(bh):bf._resetRuntimeMarginLeft();
}
if(bg.marginRight||bg.initial){var bi=bf.getMarginRight();
bi!=null?bf._renderRuntimeMarginRight(bi):bf._resetRuntimeMarginRight();
}},layoutChild_marginY:function(Q,R){if(R.marginTop||R.initial){var T=Q.getMarginTop();
T!=null?Q._renderRuntimeMarginTop(T):Q._resetRuntimeMarginTop();
}
if(R.marginBottom||R.initial){var S=Q.getMarginBottom();
S!=null?Q._renderRuntimeMarginBottom(S):Q._resetRuntimeMarginBottom();
}},layoutChild_sizeX_essentialWrapper:function(r,s){return r._isWidthEssential()?this.layoutChild_sizeX(r,s):r._resetRuntimeWidth();
},layoutChild_sizeY_essentialWrapper:function(t,u){return t._isHeightEssential()?this.layoutChild_sizeY(t,u):t._resetRuntimeHeight();
}},defer:function(A,B){B.computeChildrenNeededWidth=B.computeChildrenNeededWidth_max;
B.computeChildrenNeededHeight=B.computeChildrenNeededHeight_max;
},destruct:function(){this._disposeFields(V);
}});
})();
(function(){var f="qx.client",e="qx.legacy.ui.layout.impl.CanvasLayoutImpl";
qx.Class.define(e,{extend:qx.legacy.ui.layout.impl.LayoutImpl,construct:function(E){arguments.callee.base.call(this,E);
},members:{computeChildBoxWidth:function(u){var v=null;

if(u._computedLeftTypeNull||u._computedRightTypeNull){v=u.getWidthValue();
}else if(u._hasParent){v=this.getWidget().getInnerWidth()-u.getLeftValue()-u.getRightValue();
}return v||u._computeBoxWidthFallback();
},computeChildBoxHeight:function(z){var A=null;

if(z._computedTopTypeNull||z._computedBottomTypeNull){A=z.getHeightValue();
}else if(z._hasParent){A=this.getWidget().getInnerHeight()-z.getTopValue()-z.getBottomValue();
}return A||z._computeBoxHeightFallback();
},computeChildNeededWidth:function(m){var n=m._computedLeftTypePercent?null:m.getLeftValue();
var q=m._computedRightTypePercent?null:m.getRightValue();
var p=m._computedMinWidthTypePercent?null:m.getMinWidthValue();
var o=m._computedMaxWidthTypePercent?null:m.getMaxWidthValue();

if(n!=null&&q!=null){var r=m.getPreferredBoxWidth()||0;
}else{var r=(m._computedWidthTypePercent?null:m.getWidthValue())||m.getPreferredBoxWidth()||0;
}return qx.lang.Number.limit(r,p,o)+n+q+m.getMarginLeft()+m.getMarginRight();
},computeChildNeededHeight:function(g){var j=g._computedTopTypePercent?null:g.getTopValue();
var k=g._computedBottomTypePercent?null:g.getBottomValue();
var l=g._computedMinHeightTypePercent?null:g.getMinHeightValue();
var h=g._computedMaxHeightTypePercent?null:g.getMaxHeightValue();

if(j!=null&&k!=null){var i=g.getPreferredBoxHeight()||0;
}else{var i=(g._computedHeightTypePercent?null:g.getHeightValue())||g.getPreferredBoxHeight()||0;
}return qx.lang.Number.limit(i,l,h)+j+k+g.getMarginTop()+g.getMarginBottom();
},updateChildOnInnerWidthChange:function(w){var y=w._recomputePercentX();
var x=w._recomputeRangeX();
return y||x;
},updateChildOnInnerHeightChange:function(B){var D=B._recomputePercentY();
var C=B._recomputeRangeY();
return D||C;
},layoutChild:function(N,O){this.layoutChild_sizeX_essentialWrapper(N,O);
this.layoutChild_sizeY_essentialWrapper(N,O);
this.layoutChild_sizeLimitX(N,O);
this.layoutChild_sizeLimitY(N,O);
this.layoutChild_locationX(N,O);
this.layoutChild_locationY(N,O);
this.layoutChild_marginX(N,O);
this.layoutChild_marginY(N,O);
},layoutChild_sizeX:qx.core.Variant.select(f,{"mshtml|opera|webkit":function(s,t){if(t.initial||t.width||t.minWidth||t.maxWidth||t.left||t.right){if(s._computedMinWidthTypeNull&&s._computedWidthTypeNull&&s._computedMaxWidthTypeNull&&!(!s._computedLeftTypeNull&&!s._computedRightTypeNull)){s._resetRuntimeWidth();
}else{s._renderRuntimeWidth(s.getBoxWidth());
}}},"default":function(c,d){if(d.initial||d.width){c._computedWidthTypeNull?c._resetRuntimeWidth():c._renderRuntimeWidth(c.getWidthValue());
}}}),layoutChild_sizeY:qx.core.Variant.select(f,{"mshtml|opera|webkit":function(a,b){if(b.initial||b.height||b.minHeight||b.maxHeight||b.top||b.bottom){if(a._computedMinHeightTypeNull&&a._computedHeightTypeNull&&a._computedMaxHeightTypeNull&&!(!a._computedTopTypeNull&&!a._computedBottomTypeNull)){a._resetRuntimeHeight();
}else{a._renderRuntimeHeight(a.getBoxHeight());
}}},"default":function(I,J){if(J.initial||J.height){I._computedHeightTypeNull?I._resetRuntimeHeight():I._renderRuntimeHeight(I.getHeightValue());
}}}),layoutChild_locationX:function(K,L){var M=this.getWidget();

if(L.initial||L.left||L.parentPaddingLeft){K._computedLeftTypeNull?K._computedRightTypeNull&&M.getPaddingLeft()>0?K._renderRuntimeLeft(M.getPaddingLeft()):K._resetRuntimeLeft():K._renderRuntimeLeft(K.getLeftValue()+M.getPaddingLeft());
}
if(L.initial||L.right||L.parentPaddingRight){K._computedRightTypeNull?K._computedLeftTypeNull&&M.getPaddingRight()>0?K._renderRuntimeRight(M.getPaddingRight()):K._resetRuntimeRight():K._renderRuntimeRight(K.getRightValue()+M.getPaddingRight());
}},layoutChild_locationY:function(F,G){var H=this.getWidget();

if(G.initial||G.top||G.parentPaddingTop){F._computedTopTypeNull?F._computedBottomTypeNull&&H.getPaddingTop()>0?F._renderRuntimeTop(H.getPaddingTop()):F._resetRuntimeTop():F._renderRuntimeTop(F.getTopValue()+H.getPaddingTop());
}
if(G.initial||G.bottom||G.parentPaddingBottom){F._computedBottomTypeNull?F._computedTopTypeNull&&H.getPaddingBottom()>0?F._renderRuntimeBottom(H.getPaddingBottom()):F._resetRuntimeBottom():F._renderRuntimeBottom(F.getBottomValue()+H.getPaddingBottom());
}}}});
})();
(function(){var a="qx.lang.Number";
qx.Bootstrap.define(a,{statics:{isInRange:function(h,i,j){return h>=i&&h<=j;
},isBetweenRange:function(b,c,d){return b>c&&b<d;
},limit:function(e,f,g){if(g!=null&&e>g){return g;
}else if(f!=null&&e<f){return f;
}else{return e;
}}}});
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
(function(){var c="100%",b="qx.legacy.ui.core.ClientDocumentBlocker",a="client-document-blocker";
qx.Class.define(b,{extend:qx.legacy.ui.basic.Terminator,construct:function(){arguments.callee.base.call(this);
this.initTop();
this.initLeft();
this.initWidth();
this.initHeight();
this.initZIndex();
},properties:{appearance:{refine:true,init:a},zIndex:{refine:true,init:1e8},top:{refine:true,init:0},left:{refine:true,init:0},width:{refine:true,init:c},height:{refine:true,init:c},display:{refine:true,init:false}},members:{getFocusRoot:function(){return null;
}}});
})();
(function(){var g="qx.legacy.theme.manager.Appearance",f="_applyAppearanceTheme",e="__uG",d="changeAppearanceTheme",c="Theme",b="__uH",a="singleton";
qx.Class.define(g,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__uG={};
this.__uH={};
this.__uI=1;
},properties:{appearanceTheme:{check:c,nullable:true,apply:f,event:d}},members:{_applyAppearanceTheme:function(y,z){this._currentTheme=y;
this._oldTheme=z;

if(qx.legacy.theme.manager.Meta.getInstance().getAutoSync()){this.syncAppearanceTheme();
}},syncAppearanceTheme:function(){if(!this._currentTheme&&!this._oldTheme){return;
}
if(this._currentTheme){this.__uG[this._currentTheme.name]={};
}
if(qx.legacy.ui.core.Widget.$$uiReady){qx.legacy.ui.core.ClientDocument.getInstance()._recursiveAppearanceThemeUpdate(this._currentTheme,this._oldTheme);
}
if(this._oldTheme){delete this.__uG[this._oldTheme.name];
}delete this._currentTheme;
delete this._oldTheme;
},styleFrom:function(h,i){var j=this.getAppearanceTheme();

if(!j){return;
}return this.styleFromTheme(j,h,i);
},styleFromTheme:function(k,l,m){var v=k.appearances[l];

if(!v){{};
return null;
}if(!v.style){if(v.include){return this.styleFromTheme(k,v.include,m);
}else{return null;
}}var n=this.__uH;
var o=[l];

for(var r in m){if(!n[r]){n[r]=this.__uI++;
}o[n[r]]=true;
}var w=o.join();
var q=this.__uG[k.name];

if(q&&q[w]!==undefined){return q[w];
}var t;
if(v.include||v.base){var x=v.style(m);
var p;

if(v.include){p=this.styleFromTheme(k,v.include,m);
}t={};
if(v.base){var s=this.styleFromTheme(v.base,l,m);

if(v.include){for(var u in s){if(p[u]===undefined&&x[u]===undefined){t[u]=s[u];
}}}else{for(var u in s){if(x[u]===undefined){t[u]=s[u];
}}}}if(v.include){for(var u in p){if(x[u]===undefined){t[u]=p[u];
}}}for(var u in x){t[u]=x[u];
}}else{t=v.style(m);
}if(q){q[w]=t||null;
}return t||null;
}},destruct:function(){this._disposeFields(e,b);
}});
})();
(function(){var B="Boolean",A="fonts",z="appearances",y="qx.legacy.iconTheme",x="_applyAutoSync",w="icons",v="changeTheme",u="borders",t="qx.legacy.colorTheme",s="widgets",N="qx.legacy.widgetTheme",M="qx.legacy.appearanceTheme",L="qx.legacy.theme",K="qx.legacy.theme.manager.Meta",J="qx.legacy.borderTheme",I="_applyTheme",H="qx.legacy.fontTheme",G="qx.legacy.theme.ClassicRoyale",F="colors",E="Theme",C="singleton",D="meta";
qx.Class.define(K,{type:C,extend:qx.core.Object,properties:{theme:{check:E,nullable:true,apply:I,event:v},autoSync:{check:B,init:true,apply:x}},members:{_applyTheme:function(a,b){var e=null;
var m=null;
var l=null;
var c=null;
var n=null;
var g=null;

if(a){e=a.meta.color||null;
m=a.meta.border||null;
l=a.meta.font||null;
c=a.meta.widget||null;
n=a.meta.icon||null;
g=a.meta.appearance||null;
}
if(b){this.setAutoSync(false);
}var i=qx.legacy.theme.manager.Color.getInstance();
var d=qx.legacy.theme.manager.Border.getInstance();
var h=qx.legacy.theme.manager.Font.getInstance();
var f=qx.legacy.theme.manager.Icon.getInstance();
var j=qx.legacy.theme.manager.Widget.getInstance();
var k=qx.legacy.theme.manager.Appearance.getInstance();
i.setColorTheme(e);
d.setBorderTheme(m);
h.setFontTheme(l);
j.setWidgetTheme(c);
f.setIconTheme(n);
k.setAppearanceTheme(g);

if(b){this.setAutoSync(true);
}},_applyAutoSync:function(R,S){if(R){qx.legacy.theme.manager.Appearance.getInstance().syncAppearanceTheme();
qx.legacy.theme.manager.Icon.getInstance().syncIconTheme();
qx.legacy.theme.manager.Widget.getInstance().syncWidgetTheme();
qx.legacy.theme.manager.Font.getInstance().syncFontTheme();
qx.legacy.theme.manager.Border.getInstance().syncBorderTheme();
qx.legacy.theme.manager.Color.getInstance().syncColorTheme();
}},initialize:function(){var P=qx.core.Setting;
var O,Q;
O=P.get(L);

if(O){Q=qx.Theme.getByName(O);

if(!Q){throw new Error("The meta theme to use is not available: "+O);
}this.setTheme(Q);
}O=P.get(t);

if(O){Q=qx.Theme.getByName(O);

if(!Q){throw new Error("The color theme to use is not available: "+O);
}qx.legacy.theme.manager.Color.getInstance().setColorTheme(Q);
}O=P.get(J);

if(O){Q=qx.Theme.getByName(O);

if(!Q){throw new Error("The border theme to use is not available: "+O);
}qx.legacy.theme.manager.Border.getInstance().setBorderTheme(Q);
}O=P.get(H);

if(O){Q=qx.Theme.getByName(O);

if(!Q){throw new Error("The font theme to use is not available: "+O);
}qx.legacy.theme.manager.Font.getInstance().setFontTheme(Q);
}O=P.get(N);

if(O){Q=qx.Theme.getByName(O);

if(!Q){throw new Error("The widget theme to use is not available: "+O);
}qx.legacy.theme.manager.Widget.getInstance().setWidgetTheme(Q);
}O=P.get(y);

if(O){Q=qx.Theme.getByName(O);

if(!Q){throw new Error("The icon theme to use is not available: "+O);
}qx.legacy.theme.manager.Icon.getInstance().setIconTheme(Q);
}O=P.get(M);

if(O){Q=qx.Theme.getByName(O);

if(!Q){throw new Error("The appearance theme to use is not available: "+O);
}qx.legacy.theme.manager.Appearance.getInstance().setAppearanceTheme(Q);
}},__uJ:function(o){var r=qx.Theme.getAll();
var p;
var q=[];

for(var name in r){p=r[name];

if(p[o]){q.push(p);
}}return q;
},getMetaThemes:function(){return this.__uJ(D);
},getColorThemes:function(){return this.__uJ(F);
},getBorderThemes:function(){return this.__uJ(u);
},getFontThemes:function(){return this.__uJ(A);
},getWidgetThemes:function(){return this.__uJ(s);
},getIconThemes:function(){return this.__uJ(w);
},getAppearanceThemes:function(){return this.__uJ(z);
}},settings:{"qx.legacy.theme":G,"qx.legacy.colorTheme":null,"qx.legacy.borderTheme":null,"qx.legacy.fontTheme":null,"qx.legacy.widgetTheme":null,"qx.legacy.appearanceTheme":null,"qx.legacy.iconTheme":null}});
})();
(function(){var s="_dynamic",r="qx.legacy.util.ValueManager",q="abstract",p="_registry";
qx.Class.define(r,{type:q,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.legacy.util.ValueManager.register(this);
this._registry={};
this._dynamic={};
},statics:{__uK:{},disconnect:function(v){var x=this.__uK;

for(var w in x){x[w].disconnectObject(v);
}},register:function(u){this.__uK[u.$$hash]=u;
},unregister:function(o){delete this.__uK[o.$$hash];
}},members:{connect:function(i,j,k){{};
if(k!==null&&this._preprocess){k=this._preprocess(k);
}var l=j.toHashCode();
var n=qx.core.ObjectRegistry.toHashCode(i);
var m=this._registry;
if(this.isDynamic(k)){if(!m[l]){m[l]={};
}m[l][n]={callback:i,object:j,value:k};
k=this.resolveDynamic(k);
}else if(m[l]&&m[l][n]){delete m[l][n];
}i.call(j,k);
},disconnectObject:function(a){var b=this._registry;

if(b&&b[a.$$hash]){delete b[a.$$hash];
}},resolveDynamic:function(h){return this._dynamic[h];
},isDynamic:function(t){return !!this._dynamic[t];
},updateUsersOf:function(y){var C=this._registry;
var z,D;

for(var A in C){z=C[A];

for(var B in z){D=z[B];

if(D.value==y){D.callback.call(D.object,this.resolveDynamic(D.value));
}}}},updateAll:function(){var f=this._registry;
var c,g;

for(var d in f){c=f[d];

for(var e in c){g=c[e];
g.callback.call(g.object,this.resolveDynamic(g.value));
}}}},destruct:function(){this._disposeFields(p,s);
qx.legacy.util.ValueManager.unregister(this);
}});
})();
(function(){var l="_applyColorTheme",k="qx.legacy.theme.manager.Color",j="changeColorTheme",i="Theme",h="string",g="singleton";
qx.Class.define(k,{type:g,extend:qx.legacy.util.ValueManager,properties:{colorTheme:{check:i,nullable:true,apply:l,event:j}},members:{_applyColorTheme:function(a){var b=this._dynamic={};

if(a){var c=a.colors;
var d=qx.util.ColorUtil;
var e;

for(var f in c){e=c[f];

if(typeof e===h){if(!d.isCssString(e)){throw new Error("Could not parse color: "+e);
}}else if(e instanceof Array){e=d.rgbToRgbString(e);
}else{throw new Error("Could not parse color: "+e);
}b[f]=e;
}}
if(qx.legacy.theme.manager.Meta.getInstance().getAutoSync()){this.syncColorTheme();
}},syncColorTheme:function(){this.updateAll();
}}});
})();
(function(){var e="qx.legacy.theme.manager.Border",d="_applyBorderTheme",c="Theme",b="changeBorderTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.legacy.util.ValueManager,properties:{borderTheme:{check:c,nullable:true,apply:d,event:b}},members:{resolveDynamic:function(f){return f instanceof qx.legacy.ui.core.Border?f:this._dynamic[f];
},isDynamic:function(g){return g&&(g instanceof qx.legacy.ui.core.Border||this._dynamic[g]!==undefined);
},syncBorderTheme:function(){this.updateAll();
},_applyBorderTheme:function(h){var i=this._dynamic;

for(var l in i){if(i[l].themed){i[l].dispose();
delete i[l];
}}
if(h){var j=h.borders;
var k=qx.legacy.ui.core.Border;

for(var l in j){i[l]=(new k).set(j[l]);
i[l].themed=true;
}}
if(qx.legacy.theme.manager.Meta.getInstance().getAutoSync()){this.syncBorderTheme();
}}}});
})();
(function(){var bi="",bh="solid",bg="0px",bf="none",be="qx.client",bd="double",bc="px",bb="inset",ba="dotted",Y="ridge",cb="outset",ca="groove",bY="dashed",bX="bottom",bW="1px",bV="right",bU=" ",bT="shorthand",bS="top",bR="Number",bp="left",bq="widthTop",bn="styleRight",bo="styleLeft",bl="widthLeft",bm="widthBottom",bj="styleTop",bk="styleBottom",bt="colorBottom",bu="widthRight",bC="colorLeft",bA="colorRight",bJ="colorTop",bE="_applyColorInnerRight",bN="colorInnerRight",bL="_applyWidthRight",bw="_applyStyleRight",bQ="_applyColorBottom",bP="_applyWidthLeft",bO="_applyStyleLeft",bv="_applyColorTop",by="colorInnerTop",bz="colorInnerLeft",bB="_applyColorRight",bD="_applyStyleBottom",bF="_applyStyleTop",bK="_applyColorInnerLeft",bM="_applyWidthTop",br="qx.legacy.ui.core.Border",bs="_applyColorInnerTop",bx="_applyColorLeft",bI="colorInnerBottom",bH="_applyWidthBottom",bG="_applyColorInnerBottom";
qx.Class.define(br,{extend:qx.core.Object,construct:function(f,g,h){arguments.callee.base.call(this);

if(f!==undefined){this.setWidth(f);
}
if(g!==undefined){this.setStyle(g);
}
if(h!==undefined){this.setColor(h);
}},statics:{fromString:function(cm){var cq=new qx.legacy.ui.core.Border;
var co=cm.split(/\s+/);
var cp,cn;

for(var i=0,l=co.length;i<l;i++){cp=co[i];

switch(cp){case ca:case Y:case bb:case cb:case bh:case ba:case bY:case bd:case bf:cq.setStyle(cp);
break;
default:cn=parseInt(cp);

if(cn===cp||qx.lang.String.contains(cp,bc)){cq.setWidth(cn);
}else{cq.setColor(cp);
}break;
}}return cq;
},fromConfig:function(cF){var cG=new qx.legacy.ui.core.Border;
cG.set(cF);
return cG;
},resetTop:qx.core.Variant.select(be,{"gecko":function(C){var D=C._style;

if(D){D.borderTopWidth=D.borderTopStyle=D.borderTopColor=D.MozBorderTopColors=bi;
}},"default":function(j){var k=j._style;

if(k){k.borderTopWidth=k.borderTopStyle=k.borderTopColor=bi;
}k=j._innerStyle;

if(k){k.borderTopWidth=k.borderTopStyle=k.borderTopColor=bi;
}}}),resetRight:qx.core.Variant.select(be,{"gecko":function(cf){var cg=cf._style;

if(cg){cg.borderRightWidth=cg.borderRightStyle=cg.borderRightColor=cg.MozBorderRightColors=bi;
}},"default":function(cy){var cz=cy._style;

if(cz){cz.borderRightWidth=cz.borderRightStyle=cz.borderRightColor=bi;
}cz=cy._innerStyle;

if(cz){cz.borderRightWidth=cz.borderRightStyle=cz.borderRightColor=bi;
}}}),resetBottom:qx.core.Variant.select(be,{"gecko":function(ch){var ci=ch._style;

if(ci){ci.borderBottomWidth=ci.borderBottomStyle=ci.borderBottomColor=ci.MozBorderBottomColors=bi;
}},"default":function(H){var I=H._style;

if(I){I.borderBottomWidth=I.borderBottomStyle=I.borderBottomColor=bi;
}I=H._innerStyle;

if(I){I.borderBottomWidth=I.borderBottomStyle=I.borderBottomColor=bi;
}}}),resetLeft:qx.core.Variant.select(be,{"gecko":function(m){var n=m._style;

if(n){n.borderLeftWidth=n.borderLeftStyle=n.borderLeftColor=n.MozBorderLeftColors=bi;
}},"default":function(cs){var ct=cs._style;

if(ct){ct.borderLeftWidth=ct.borderLeftStyle=ct.borderLeftColor=bi;
}ct=cs._innerStyle;

if(ct){ct.borderLeftWidth=ct.borderLeftStyle=ct.borderLeftColor=bi;
}}})},properties:{widthTop:{check:bR,init:0,apply:bM},widthRight:{check:bR,init:0,apply:bL},widthBottom:{check:bR,init:0,apply:bH},widthLeft:{check:bR,init:0,apply:bP},styleTop:{nullable:true,check:[bh,ba,bY,bd,cb,bb,Y,ca],init:bh,apply:bF},styleRight:{nullable:true,check:[bh,ba,bY,bd,cb,bb,Y,ca],init:bh,apply:bw},styleBottom:{nullable:true,check:[bh,ba,bY,bd,cb,bb,Y,ca],init:bh,apply:bD},styleLeft:{nullable:true,check:[bh,ba,bY,bd,cb,bb,Y,ca],init:bh,apply:bO},colorTop:{nullable:true,apply:bv},colorRight:{nullable:true,apply:bB},colorBottom:{nullable:true,apply:bQ},colorLeft:{nullable:true,apply:bx},colorInnerTop:{nullable:true,apply:bs},colorInnerRight:{nullable:true,apply:bE},colorInnerBottom:{nullable:true,apply:bG},colorInnerLeft:{nullable:true,apply:bK},left:{group:[bl,bo,bC]},right:{group:[bu,bn,bA]},top:{group:[bq,bj,bJ]},bottom:{group:[bm,bk,bt]},width:{group:[bq,bu,bm,bl],mode:bT},style:{group:[bj,bn,bk,bo],mode:bT},color:{group:[bJ,bA,bt,bC],mode:bT},innerColor:{group:[by,bN,bI,bz],mode:bT}},members:{_applyWidthTop:function(w,x){this.__uL=w==null?bg:w+bc;
this.__uX();
this.__vg(bS);
},_applyWidthRight:function(W,X){this.__uM=W==null?bg:W+bc;
this.__va();
this.__vg(bV);
},_applyWidthBottom:function(A,B){this.__uN=A==null?bg:A+bc;
this.__vc();
this.__vg(bX);
},_applyWidthLeft:function(cd,ce){this.__uO=cd==null?bg:cd+bc;
this.__ve();
this.__vg(bp);
},_applyColorTop:function(p,q){qx.legacy.theme.manager.Color.getInstance().connect(this._changeColorTop,this,p);
},_applyColorRight:function(cw,cx){qx.legacy.theme.manager.Color.getInstance().connect(this._changeColorRight,this,cw);
},_applyColorBottom:function(cu,cv){qx.legacy.theme.manager.Color.getInstance().connect(this._changeColorBottom,this,cu);
},_applyColorLeft:function(S,T){qx.legacy.theme.manager.Color.getInstance().connect(this._changeColorLeft,this,S);
},_applyColorInnerTop:function(P,Q){qx.legacy.theme.manager.Color.getInstance().connect(this._changeColorInnerTop,this,P);
},_applyColorInnerRight:function(r,s){qx.legacy.theme.manager.Color.getInstance().connect(this._changeColorInnerRight,this,r);
},_applyColorInnerBottom:function(y,z){qx.legacy.theme.manager.Color.getInstance().connect(this._changeColorInnerBottom,this,y);
},_applyColorInnerLeft:function(a,b){qx.legacy.theme.manager.Color.getInstance().connect(this._changeColorInnerLeft,this,a);
},_applyStyleTop:function(){this.__vg(bS);
},_applyStyleRight:function(){this.__vg(bV);
},_applyStyleBottom:function(){this.__vg(bX);
},_applyStyleLeft:function(){this.__vg(bp);
},_changeColorTop:function(cE){this.__uP=cE;
this.__uX();
this.__vg(bS);
},_changeColorInnerTop:function(o){this.__uQ=o;
this.__uX();
this.__vg(bS);
},_changeColorRight:function(cr){this.__uR=cr;
this.__va();
this.__vg(bV);
},_changeColorInnerRight:function(cA){this.__uS=cA;
this.__va();
this.__vg(bV);
},_changeColorBottom:function(M){this.__uT=M;
this.__vc();
this.__vg(bX);
},_changeColorInnerBottom:function(R){this.__uU=R;
this.__vc();
this.__vg(bX);
},_changeColorLeft:function(t){this.__uV=t;
this.__ve();
this.__vg(bp);
},_changeColorInnerLeft:function(cc){this.__uW=cc;
this.__ve();
this.__vg(bp);
},__uX:function(){this.__uY=this.getWidthTop()===2&&this.__uQ!=null&&this.__uP!=this.__uQ;
},__va:function(){this.__vb=this.getWidthRight()===2&&this.__uS!=null&&this.__uR!=this.__uS;
},__vc:function(){this.__vd=this.getWidthBottom()===2&&this.__uU!=null&&this.__uT!=this.__uU;
},__ve:function(){this.__vf=this.getWidthLeft()===2&&this.__uW!=null&&this.__uV!=this.__uW;
},__vg:function(cB){qx.legacy.theme.manager.Border.getInstance().updateUsersOf(this);
},renderTop:qx.core.Variant.select(be,{"gecko":function(cC){var cD=cC._style;
cD.borderTopWidth=this.__uL||bg;
cD.borderTopColor=this.__uP||bi;
if(this.__uY){cD.borderTopStyle=bh;
cD.MozBorderTopColors=this.__uP+bU+this.__uQ;
}else{cD.borderTopStyle=this.getStyleTop()||bf;
cD.MozBorderTopColors=bi;
}},"default":function(cj){var ck=cj._style;
var cl=cj._innerStyle;

if(this.__uY){if(!cl){cj.prepareEnhancedBorder();
cl=cj._innerStyle;
}ck.borderTopWidth=cl.borderTopWidth=bW;
ck.borderTopStyle=cl.borderTopStyle=bh;
ck.borderTopColor=this.__uP;
cl.borderTopColor=this.__uQ;
}else{ck.borderTopWidth=this.__uL||bg;
ck.borderTopStyle=this.getStyleTop()||bf;
ck.borderTopColor=this.__uP||bi;
if(cl){cl.borderTopWidth=cl.borderTopStyle=cl.borderTopColor=bi;
}}}}),renderRight:qx.core.Variant.select(be,{"gecko":function(U){var V=U._style;
V.borderRightWidth=this.__uM||bg;
V.borderRightColor=this.__uR||bi;
if(this.__vb){V.borderRightStyle=bh;
V.MozBorderRightColors=this.__uR+bU+this.__uS;
}else{V.borderRightStyle=this.getStyleRight()||bf;
V.MozBorderRightColors=bi;
}},"default":function(c){var d=c._style;
var e=c._innerStyle;

if(this.__vb){if(!e){c.prepareEnhancedBorder();
e=c._innerStyle;
}d.borderRightWidth=e.borderRightWidth=bW;
d.borderRightStyle=e.borderRightStyle=bh;
d.borderRightColor=this.__uR;
e.borderRightColor=this.__uS;
}else{d.borderRightWidth=this.__uM||bg;
d.borderRightStyle=this.getStyleRight()||bf;
d.borderRightColor=this.__uR||bi;
if(e){e.borderRightWidth=e.borderRightStyle=e.borderRightColor=bi;
}}}}),renderBottom:qx.core.Variant.select(be,{"gecko":function(N){var O=N._style;
O.borderBottomWidth=this.__uN||bg;
O.borderBottomColor=this.__uT||bi;
if(this.__vd){O.borderBottomStyle=bh;
O.MozBorderBottomColors=this.__uT+bU+this.__uU;
}else{O.borderBottomStyle=this.getStyleBottom()||bf;
O.MozBorderBottomColors=bi;
}},"default":function(J){var K=J._style;
var L=J._innerStyle;

if(this.__vd){if(!L){J.prepareEnhancedBorder();
L=J._innerStyle;
}K.borderBottomWidth=L.borderBottomWidth=bW;
K.borderBottomStyle=L.borderBottomStyle=bh;
K.borderBottomColor=this.__uT;
L.borderBottomColor=this.__uU;
}else{K.borderBottomWidth=this.__uN||bg;
K.borderBottomStyle=this.getStyleBottom()||bf;
K.borderBottomColor=this.__uT||bi;
if(L){L.borderBottomWidth=L.borderBottomStyle=L.borderBottomColor=bi;
}}}}),renderLeft:qx.core.Variant.select(be,{"gecko":function(u){var v=u._style;
v.borderLeftWidth=this.__uO||bg;
v.borderLeftColor=this.__uV||bi;
if(this.__vf){v.borderLeftStyle=bh;
v.MozBorderLeftColors=this.__uV+bU+this.__uW;
}else{v.borderLeftStyle=this.getStyleLeft()||bf;
v.MozBorderLeftColors=bi;
}},"default":function(E){var F=E._style;
var G=E._innerStyle;

if(this.__vf){if(!G){E.prepareEnhancedBorder();
G=E._innerStyle;
}F.borderLeftWidth=G.borderLeftWidth=bW;
F.borderLeftStyle=G.borderLeftStyle=bh;
F.borderLeftColor=this.__uV;
G.borderLeftColor=this.__uW;
}else{F.borderLeftWidth=this.__uO||bg;
F.borderLeftStyle=this.getStyleLeft()||bf;
F.borderLeftColor=this.__uV||bi;
if(G){G.borderLeftWidth=G.borderLeftStyle=G.borderLeftColor=bi;
}}}})}});
})();
(function(){var f="_applyFontTheme",e="Theme",d="qx.legacy.theme.manager.Font",c="singleton",b="changeFontTheme";
qx.Class.define(d,{type:c,extend:qx.legacy.util.ValueManager,properties:{fontTheme:{check:e,nullable:true,apply:f,event:b}},members:{resolveDynamic:function(l){return l instanceof qx.legacy.ui.core.Font?l:this._dynamic[l];
},isDynamic:function(a){return a&&(a instanceof qx.legacy.ui.core.Font||this._dynamic[a]!==undefined);
},syncFontTheme:function(){this.updateAll();
},_applyFontTheme:function(g){var h=this._dynamic;

for(var k in h){if(h[k].themed){h[k].dispose();
delete h[k];
}}
if(g){var i=g.fonts;
var j=qx.legacy.ui.core.Font;

for(var k in i){h[k]=(new j).set(i[k]);
h[k].themed=true;
}}
if(qx.legacy.theme.manager.Meta.getInstance().getAutoSync()){this.syncFontTheme();
}}}});
})();
(function(){var q="",p=";",o="underline",n="fontStyle",m="Boolean",k="px",j='"',h="fontSize",g="fontFamily",f="textDecoration",M="italic",L="fontWeight",K="normal",J="bold",I="_applyItalic",H="_applyBold",G="Integer",F="_applyFamily",E="'",D="font-weight:",x="Array",y="overline",v="line-through",w="qx.legacy.ui.core.Font",t="font-size:",u="font-style:",r="text-decoration:",s="font-family:",z="_applyDecoration",A=" ",C="_applySize",B=",";
qx.Class.define(w,{extend:qx.core.Object,construct:function(S,T){arguments.callee.base.call(this);

if(S!==undefined){this.setSize(S);
}
if(T!==undefined){this.setFamily(T);
}},statics:{fromString:function(N){var R=new qx.legacy.ui.core.Font;
var P=N.split(/\s+/);
var name=[];
var Q;

for(var i=0;i<P.length;i++){switch(Q=P[i]){case J:R.setBold(true);
break;
case M:R.setItalic(true);
break;
case o:R.setDecoration(o);
break;
default:var O=parseInt(Q);

if(O==Q||qx.lang.String.contains(Q,k)){R.setSize(O);
}else{name.push(Q);
}break;
}}
if(name.length>0){R.setFamily(name);
}return R;
},fromConfig:function(d){var e=new qx.legacy.ui.core.Font;
e.set(d);
return e;
},reset:function(a){a.removeStyleProperty(g);
a.removeStyleProperty(h);
a.removeStyleProperty(L);
a.removeStyleProperty(n);
a.removeStyleProperty(f);
},resetElement:function(ba){var bb=ba.style;
bb.fontFamily=q;
bb.fontSize=q;
bb.fontWeight=q;
bb.fontStyle=q;
bb.textDecoration=q;
},resetStyle:function(bg){bg.fontFamily=q;
bg.fontSize=q;
bg.fontWeight=q;
bg.fontStyle=q;
bg.textDecoration=q;
}},properties:{size:{check:G,nullable:true,apply:C},family:{check:x,nullable:true,apply:F},bold:{check:m,nullable:true,apply:H},italic:{check:m,nullable:true,apply:I},decoration:{check:[o,v,y],nullable:true,apply:z}},members:{__vh:null,__vi:null,__vj:null,__vk:null,__vl:null,_applySize:function(bj,bk){this.__vh=bj===null?null:bj+k;
},_applyFamily:function(U,V){var W=q;

for(var i=0,l=U.length;i<l;i++){if(U[i].indexOf(A)>0){W+=j+U[i]+j;
}else{W+=U[i];
}
if(i!=l-1){W+=B;
}}this.__vi=W;
},_applyBold:function(bc,bd){this.__vj=bc===null?null:bc?J:K;
},_applyItalic:function(bh,bi){this.__vk=bh===null?null:bh?M:K;
},_applyDecoration:function(be,bf){this.__vl=be===null?null:be;
},render:function(c){c.setStyleProperty(g,this.__vi);
c.setStyleProperty(h,this.__vh);
c.setStyleProperty(L,this.__vj);
c.setStyleProperty(n,this.__vk);
c.setStyleProperty(f,this.__vl);
},renderStyle:function(b){b.fontFamily=this.__vi||q;
b.fontSize=this.__vh||q;
b.fontWeight=this.__vj||q;
b.fontStyle=this.__vk||q;
b.textDecoration=this.__vl||q;
},renderElement:function(X){var Y=X.style;
Y.fontFamily=this.__vi||q;
Y.fontSize=this.__vh||q;
Y.fontWeight=this.__vj||q;
Y.fontStyle=this.__vk||q;
Y.textDecoration=this.__vl||q;
},generateStyle:function(){return (this.__vi?s+this.__vi.replace(/\"/g,E)+p:q)+(this.__vh?t+this.__vh+p:q)+(this.__weight?D+this.__weight+p:q)+(this.__style?u+this.__style+p:q)+(this.__vl?r+this.__vl+p:q);
}}});
})();
(function(){var f="icon",e="qx.legacy.theme.manager.Icon",d="_applyIconTheme",c="changeIconTheme",b="Theme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{iconTheme:{check:b,nullable:true,apply:d,event:c}},members:{_applyIconTheme:function(g,h){if(qx.legacy.theme.manager.Meta.getInstance().getAutoSync()){this.syncIconTheme();
}},syncIconTheme:function(){var j=this.getIconTheme();
var i=qx.legacy.util.AliasManager.getInstance();
j?i.add(f,j.resource):i.remove(f);
}}});
})();
(function(){var l="/",k="_aliases",j="0",i="qx/static",h="http://",g="https://",f="file://",e="qx.legacy.util.AliasManager",d="singleton",c=".",b="static";
qx.Class.define(e,{type:d,extend:qx.legacy.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this._aliases={};
this.add(b,i);
},members:{_preprocess:function(n){var q=this._dynamic;

if(q[n]===false){return n;
}else if(q[n]===undefined){if(n.charAt(0)===l||n.charAt(0)===c||n.indexOf(h)===0||n.indexOf(g)===j||n.indexOf(f)===0){q[n]=false;
return n;
}var p=n.substring(0,n.indexOf(l));
var o=this._aliases[p];

if(o!==undefined){q[n]=o+n.substring(p.length);
}}return n;
},add:function(r,s){this._aliases[r]=s;
var u=this._dynamic;
var t={};
for(var v in u){if(v.substring(0,v.indexOf(l))===r){u[v]=s+v.substring(r.length);
t[v]=true;
}}},remove:function(m){delete this._aliases[m];
},resolve:function(a){if(a!==null){a=this._preprocess(a);
}return this._dynamic[a]||a;
}},destruct:function(){this._disposeFields(k);
}});
})();
(function(){var f="widget",e="changeWidgetTheme",d="_applyWidgetTheme",c="qx.legacy.theme.manager.Widget",b="Theme",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,properties:{widgetTheme:{check:b,nullable:true,apply:d,event:e}},members:{_applyWidgetTheme:function(i,j){if(qx.legacy.theme.manager.Meta.getInstance().getAutoSync()){this.syncWidgetTheme();
}},syncWidgetTheme:function(){var h=this.getWidgetTheme();
var g=qx.legacy.util.AliasManager.getInstance();
h?g.add(f,h.resource):g.remove(f);
}}});
})();
(function(){var D="qx.legacy.event.handler.FocusHandler",C="_attachedWidget",B="Tab";
qx.Class.define(D,{extend:qx.core.Object,construct:function(l){arguments.callee.base.call(this);

if(l!=null){this._attachedWidget=l;
}},statics:{mouseFocus:false},members:{getAttachedWidget:function(){return this._attachedWidget;
},_onkeyevent:function(Q,R){if(R.getKeyIdentifier()!=B){return;
}R.stopPropagation();
R.preventDefault();
qx.legacy.event.handler.FocusHandler.mouseFocus=false;
var T=this.getAttachedWidget().getFocusedChild();
if(!R.isShiftPressed()){var S=T?this.getWidgetAfter(Q,T):this.getFirstWidget(Q);
}else{var S=T?this.getWidgetBefore(Q,T):this.getLastWidget(Q);
}if(S){S.setFocused(true);
S._ontabfocus();
}},compareTabOrder:function(m,n){if(m==n){return 0;
}var q=m.getTabIndex();
var p=n.getTabIndex();
if(q!=p){return q-p;
}var s=qx.bom.element.Location.getTop(m.getElement());
var o=qx.bom.element.Location.getTop(n.getElement());

if(s!=o){return s-o;
}var t=qx.bom.element.Location.getLeft(m.getElement());
var r=qx.bom.element.Location.getLeft(n.getElement());

if(t!=r){return t-r;
}var u=m.getZIndex();
var v=n.getZIndex();

if(u!=v){return u-v;
}return 0;
},getFirstWidget:function(w){return this._getFirst(w,null);
},getLastWidget:function(P){return this._getLast(P,null);
},getWidgetAfter:function(M,N){if(M==N){return this.getFirstWidget(M);
}
if(N.getAnonymous()){N=N.getParent();
}
if(N==null){return [];
}var O=[];
this._getAllAfter(M,N,O);
O.sort(this.compareTabOrder);
return O.length>0?O[0]:this.getFirstWidget(M);
},getWidgetBefore:function(E,F){if(E==F){return this.getLastWidget(E);
}
if(F.getAnonymous()){F=F.getParent();
}
if(F==null){return [];
}var H=[];
this._getAllBefore(E,F,H);
H.sort(this.compareTabOrder);
var G=H.length;
return G>0?H[G-1]:this.getLastWidget(E);
},_getAllAfter:function(parent,a,b){var c=parent.getChildren();
var e;
var d=c.length;

for(var i=0;i<d;i++){e=c[i];

if(!(e instanceof qx.legacy.ui.core.Parent)&&!(e instanceof qx.legacy.ui.basic.Terminator)){continue;
}
if(e.isFocusable()&&e.getTabIndex()>0&&this.compareTabOrder(a,e)<0){b.push(c[i]);
}
if(!e.isFocusRoot()&&e instanceof qx.legacy.ui.core.Parent){this._getAllAfter(e,a,b);
}}},_getAllBefore:function(parent,f,g){var h=parent.getChildren();
var k;
var j=h.length;

for(var i=0;i<j;i++){k=h[i];

if(!(k instanceof qx.legacy.ui.core.Parent)&&!(k instanceof qx.legacy.ui.basic.Terminator)){continue;
}
if(k.isFocusable()&&k.getTabIndex()>0&&this.compareTabOrder(f,k)>0){g.push(k);
}
if(!k.isFocusRoot()&&k instanceof qx.legacy.ui.core.Parent){this._getAllBefore(k,f,g);
}}},_getFirst:function(parent,x){var y=parent.getChildren();
var A;
var z=y.length;

for(var i=0;i<z;i++){A=y[i];

if(!(A instanceof qx.legacy.ui.core.Parent)&&!(A instanceof qx.legacy.ui.basic.Terminator)){continue;
}
if(A.isFocusable()&&A.getTabIndex()>0){if(x==null||this.compareTabOrder(A,x)<0){x=A;
}}
if(!A.isFocusRoot()&&A instanceof qx.legacy.ui.core.Parent){x=this._getFirst(A,x);
}}return x;
},_getLast:function(parent,I){var J=parent.getChildren();
var L;
var K=J.length;

for(var i=0;i<K;i++){L=J[i];

if(!(L instanceof qx.legacy.ui.core.Parent)&&!(L instanceof qx.legacy.ui.basic.Terminator)){continue;
}
if(L.isFocusable()&&L.getTabIndex()>0){if(I==null||this.compareTabOrder(L,I)>0){I=L;
}}
if(!L.isFocusRoot()&&L instanceof qx.legacy.ui.core.Parent){I=this._getLast(L,I);
}}return I;
}},destruct:function(){this._disposeFields(C);
}});
})();
(function(){var z="borderTopWidth",y="borderLeftWidth",x="scroll",w="border-box",v="position",u="borderBottomWidth",t="qx.client",s="borderRightWidth",r="auto",q="marginTop",R="marginLeft",Q="padding",P="fixed",O="CSS1Compat",N="qx.bom.element.Location",M="paddingLeft",L="static",K="marginBottom",J="visible",I="BODY",G="paddingBottom",H="paddingTop",E="marginRight",F="margin",C="overflow",D="paddingRight",A="border",B="absolute";
qx.Class.define(N,{statics:{__dR:function(o,p){return qx.bom.element.Style.get(o,p,qx.bom.element.Style.COMPUTED_MODE,false);
},__dS:function(h,i){return parseInt(qx.bom.element.Style.get(h,i,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__dT:function(Y){var bc=0,top=0;
if(Y.getBoundingClientRect){var bb=qx.dom.Node.getWindow(Y);
bc-=qx.bom.Viewport.getScrollLeft(bb);
top-=qx.bom.Viewport.getScrollTop(bb);
}else{var ba=qx.dom.Node.getDocument(Y).body;
Y=Y.parentNode;
while(Y&&Y!=ba){bc+=Y.scrollLeft;
top+=Y.scrollTop;
Y=Y.parentNode;
}}return {left:bc,top:top};
},__dU:qx.core.Variant.select(t,{"mshtml":function(bd){var bf=qx.dom.Node.getDocument(bd);
var be=bf.body;
var bg=0;
var top=0;
bg-=be.clientLeft+bf.documentElement.clientLeft;
top-=be.clientTop+bf.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bg+=this.__dS(be,y);
top+=this.__dS(be,z);
}return {left:bg,top:top};
},"webkit":function(bh){var bj=qx.dom.Node.getDocument(bh);
var bi=bj.body;
var bk=bi.offsetLeft;
var top=bi.offsetTop;
bk+=this.__dS(bi,y);
top+=this.__dS(bi,z);
if(bj.compatMode===O){bk+=this.__dS(bi,R);
top+=this.__dS(bi,q);
}return {left:bk,top:top};
},"gecko":function(d){var e=qx.dom.Node.getDocument(d).body;
var g=e.offsetLeft;
var top=e.offsetTop;
if(qx.bom.element.BoxSizing.get(e)!==w){g+=this.__dS(e,y);
top+=this.__dS(e,z);
if(!d.getBoundingClientRect){var f;

while(d){if(this.__dR(d,v)===B||this.__dR(d,v)===P){f=true;
break;
}d=d.offsetParent;
}
if(!f){g+=this.__dS(e,y);
top+=this.__dS(e,z);
}}}return {left:g,top:top};
},"default":function(a){var b=qx.dom.Node.getDocument(a).body;
var c=b.offsetLeft;
var top=b.offsetTop;
return {left:c,top:top};
}}),__dV:qx.core.Variant.select(t,{"mshtml|webkit":function(bJ){var bL=qx.dom.Node.getDocument(bJ);
if(bJ.getBoundingClientRect){var bM=bJ.getBoundingClientRect();
var bN=bM.left;
var top=bM.top;
}else{var bN=bJ.offsetLeft;
var top=bJ.offsetTop;
bJ=bJ.offsetParent;
var bK=bL.body;
while(bJ&&bJ!=bK){bN+=bJ.offsetLeft;
top+=bJ.offsetTop;
bN+=this.__dS(bJ,y);
top+=this.__dS(bJ,z);
bJ=bJ.offsetParent;
}}return {left:bN,top:top};
},"gecko":function(bE){if(bE.getBoundingClientRect){var bH=bE.getBoundingClientRect();
var bI=Math.round(bH.left);
var top=Math.round(bH.top);
}else{var bI=0;
var top=0;
var bF=qx.dom.Node.getDocument(bE).body;
var bG=qx.bom.element.BoxSizing;

if(bG.get(bE)!==w){bI-=this.__dS(bE,y);
top-=this.__dS(bE,z);
}
while(bE&&bE!==bF){bI+=bE.offsetLeft;
top+=bE.offsetTop;
if(bG.get(bE)!==w){bI+=this.__dS(bE,y);
top+=this.__dS(bE,z);
}if(bE.parentNode&&this.__dR(bE.parentNode,C)!=J){bI+=this.__dS(bE.parentNode,y);
top+=this.__dS(bE.parentNode,z);
}bE=bE.offsetParent;
}}return {left:bI,top:top};
},"default":function(l){var n=0;
var top=0;
var m=qx.dom.Node.getDocument(l).body;
while(l&&l!==m){n+=l.offsetLeft;
top+=l.offsetTop;
l=l.offsetParent;
}return {left:n,top:top};
}}),get:function(bp,bq){var br=this.__dU(bp);

if(bp.tagName==I){var bx=br.left;
var top=br.top;
}else{var bw=this.__dV(bp);
var scroll=this.__dT(bp);
var bx=bw.left+br.left-scroll.left;
var top=bw.top+br.top-scroll.top;
}var bs=bx+bp.offsetWidth;
var bt=top+bp.offsetHeight;

if(bq){if(bq==Q||bq==x){var bu=qx.bom.element.Overflow.getX(bp);

if(bu==x||bu==r){bs+=bp.scrollWidth-bp.offsetWidth+this.__dS(bp,y)+this.__dS(bp,s);
}var bv=qx.bom.element.Overflow.getY(bp);

if(bv==x||bv==r){bt+=bp.scrollHeight-bp.offsetHeight+this.__dS(bp,z)+this.__dS(bp,u);
}}
switch(bq){case Q:bx+=this.__dS(bp,M);
top+=this.__dS(bp,H);
bs-=this.__dS(bp,D);
bt-=this.__dS(bp,G);
case x:bx-=bp.scrollLeft;
top-=bp.scrollTop;
bs-=bp.scrollLeft;
bt-=bp.scrollTop;
case A:bx+=this.__dS(bp,y);
top+=this.__dS(bp,z);
bs-=this.__dS(bp,s);
bt-=this.__dS(bp,u);
break;
case F:bx-=this.__dS(bp,R);
top-=this.__dS(bp,q);
bs+=this.__dS(bp,E);
bt+=this.__dS(bp,K);
break;
}}return {left:bx,top:top,right:bs,bottom:bt};
},getLeft:function(bC,bD){return this.get(bC,bD).left;
},getTop:function(j,k){return this.get(j,k).top;
},getRight:function(by,bz){return this.get(by,bz).right;
},getBottom:function(bA,bB){return this.get(bA,bB).bottom;
},getRelative:function(S,T,U,V){var X=this.get(S,U);
var W=this.get(T,V);
return {left:X.left-W.left,top:X.top-W.top,right:X.right-W.right,bottom:X.bottom-W.bottom};
},getPosition:function(bo){return this.getRelative(bo,this.getOffsetParent(bo));
},getOffsetParent:function(bl){var bn=bl.offsetParent||document.body;
var bm=qx.bom.element.Style;

while(bn&&(!/^body|html$/i.test(bn.tagName)&&bm.get(bn,v)===L)){bn=bn.offsetParent;
}return bn;
}}});
})();
(function(){var h="__vn",g="singleton",f="qx.legacy.io.image.Manager",e="__vm";
qx.Class.define(f,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__vm={};
this.__vn={};
},members:{add:function(c){var d=this.__vn;

if(d[c]===undefined){d[c]=1;
}else{d[c]++;
}},remove:function(p){var q=this.__vn;

if(q[p]!==undefined){q[p]--;
}
if(q[p]<=0){delete q[p];
}},show:function(a){var b=this.__vm;

if(b[a]===undefined){b[a]=1;
}else{b[a]++;
}},hide:function(r){var s=this.__vm;

if(s[r]!==undefined){s[r]--;
}
if(s[r]<=0){delete s[r];
}},getVisibleImages:function(){var i=this.__vm;
var j={};

for(var k in i){if(i[k]>0){j[k]=true;
}}return j;
},getHiddenImages:function(){var l=this.__vm;
var m=this.__vn;
var n={};

for(var o in m){if(l[o]===undefined){n[o]=true;
}}return n;
}},destruct:function(){this._disposeFields(h,e);
}});
})();
(function(){var g="fixed",f="position",e="absolute",d="qx.client",c="string",b="qx.legacy.html.Offset";
qx.Class.define(b,{statics:{getLeft:qx.core.Variant.select(d,{"gecko":function(h){var l=h.offsetLeft;
var j=h.parentNode;
var i=qx.legacy.html.Style.getStyleProperty(h,f);
var k=qx.legacy.html.Style.getStyleProperty(j,f);
if(i!=e&&i!=g){l-=qx.legacy.html.Style.getBorderLeft(j);
}if(k!=e&&k!=g){while(j){j=j.parentNode;

if(!j||typeof j.tagName!==c){break;
}var m=qx.legacy.html.Style.getStyleProperty(j,f);

if(m==e||m==g){l-=qx.legacy.html.Style.getBorderLeft(j)+qx.legacy.html.Style.getPaddingLeft(j);
break;
}}}return l;
},"default":function(n){return n.offsetLeft;
}}),getTop:qx.core.Variant.select(d,{"gecko":function(o){var s=o.offsetTop;
var q=o.parentNode;
var p=qx.legacy.html.Style.getStyleProperty(o,f);
var r=qx.legacy.html.Style.getStyleProperty(q,f);
if(p!=e&&p!=g){s-=qx.legacy.html.Style.getBorderTop(q);
}if(r!=e&&r!=g){while(q){q=q.parentNode;

if(!q||typeof q.tagName!==c){break;
}var t=qx.legacy.html.Style.getStyleProperty(q,f);

if(t==e||t==g){s-=qx.legacy.html.Style.getBorderTop(q)+qx.legacy.html.Style.getPaddingTop(q);
break;
}}}return s;
},"default":function(a){return a.offsetTop;
}})}});
})();
(function(){var q="auto",p="scroll",o="overflow",n="body",m="-moz-scrollbars-horizontal",l="qx.legacy.html.ScrollIntoView",k="-moz-scrollbars-vertical",j="overflowY",i="overflowX";
qx.Class.define(l,{statics:{scrollX:function(r,s){var x,y,w,v;
var u=r.parentNode;
var t=r.offsetLeft;
var w=r.offsetWidth;

while(u){switch(qx.legacy.html.Style.getStyleProperty(u,o)){case p:case q:case m:v=true;
break;
default:switch(qx.legacy.html.Style.getStyleProperty(u,i)){case p:case q:v=true;
break;
default:v=false;
}}
if(v){x=u.clientWidth;
y=u.scrollLeft;

if(s){u.scrollLeft=t;
}else if(s==false){u.scrollLeft=t+w-x;
}else if(w>x||t<y){u.scrollLeft=t;
}else if((t+w)>(y+x)){u.scrollLeft=t+w-x;
}t=u.offsetLeft;
w=u.offsetWidth;
}else{t+=u.offsetLeft;
}
if(u.tagName.toLowerCase()==n){break;
}u=u.offsetParent;
}return true;
},scrollY:function(a,b){var d,h,g,f;
var e=a.parentNode;
var c=a.offsetTop;
var g=a.offsetHeight;

while(e){switch(qx.legacy.html.Style.getStyleProperty(e,o)){case p:case q:case k:f=true;
break;
default:switch(qx.legacy.html.Style.getStyleProperty(e,j)){case p:case q:f=true;
break;
default:f=false;
}}
if(f){d=e.clientHeight;
h=e.scrollTop;

if(b){e.scrollTop=c;
}else if(b==false){e.scrollTop=c+g-d;
}else if(g>d||c<h){e.scrollTop=c;
}else if((c+g)>(h+d)){e.scrollTop=c+g-d;
}c=e.offsetTop;
g=e.offsetHeight;
}else{c+=e.offsetTop;
}
if(e.tagName.toLowerCase()==n){break;
}e=e.offsetParent;
}return true;
}}});
})();
(function(){var f="qx.locale.MTranslation";
qx.Mixin.define(f,{members:{tr:function(c,d){var e=qx.locale.Manager;

if(e){return e.tr.apply(e,arguments);
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
(function(){var n="__fy",m="blur",k="__fw",j="__fx",h="losecapture",g="capture",f="click",e="qx.event.dispatch.MouseCapture",d="focus",c="scroll";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(v){arguments.callee.base.call(this);
this.__fw=v;
this.__fx=v.getWindow();
v.addListener(this.__fx,m,this.releaseCapture,this);
v.addListener(this.__fx,d,this.releaseCapture,this);
v.addListener(this.__fx,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fy:null,__fw:null,__fx:null,canDispatchEvent:function(o,event,p){return (this.__fy&&this.__fz[p]);
},dispatchEvent:function(r,event,s){if(s==f){event.stopPropagation();
this.releaseCapture();
return;
}var t=this.__fw.getListeners(this.__fy,s,false);

if(t){event.setCurrentTarget(this.__fy);
event.setEventPhase(qx.event.type.Event.AT_TARGET);

for(var i=0,l=t.length;i<l;i++){var u=t[i].context||event.getCurrentTarget();
t[i].handler.call(u,event);
}}},__fz:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(b){if(this.__fy===b){return;
}
if(this.__fy){this.releaseCapture();
}this.__fy=b;
qx.event.Registration.fireEvent(b,g,qx.event.type.Event,[true,false]);
},releaseCapture:function(){var a=this.__fy;

if(!a){return;
}this.__fy=null;
qx.event.Registration.fireEvent(a,h,qx.event.type.Event,[true,false]);
}},destruct:function(){this._disposeFields(n,k,j);
},defer:function(q){qx.event.Registration.addDispatcher(q);
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
(function(){var g="qx.event.handler.Capture";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,e){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var d="qx.legacy.application.MMouseCapturePatch",c="qx.legacy";
qx.Mixin.define(d,{members:{canDispatchEvent:function(a,event,b){return (this.__captureElement&&this.__captureEvents[b]&&event.classname&&event.classname.indexOf(c)==-1);
}}});
})();
(function(){var a="qx.legacy.application.MEventPoolPatch";
qx.Mixin.define(a,{members:{__vo:{"qx.legacy.event.type.DragEvent":1,"qx.legacy.event.type.MouseEvent":1,"qx.legacy.event.type.KeyEvent":1},poolObject:function(b){if(this.__vo[b.classname]){return;
}arguments.callee.base.call(this,b);
}}});
})();
(function(){var m="interval",l="qx.event.Timer",k="_applyInterval",j="_applyEnabled",i="Boolean",h="qx.event.type.Event",g="__hc",f="Integer",d="__hb";
qx.Class.define(l,{extend:qx.core.Object,construct:function(u){arguments.callee.base.call(this);
this.setEnabled(false);

if(u!=null){this.setInterval(u);
}this.__hb=qx.lang.Function.bind(this._oninterval,this);
},events:{"interval":h},statics:{once:function(q,r,s){var t=new qx.event.Timer(s);
t.addListener(m,function(e){t.stop();
q.call(r,e);
t.dispose();
r=null;
},r);
t.start();
return t;
}},properties:{enabled:{init:true,check:i,apply:j},interval:{check:f,init:1000,apply:k}},members:{__hc:null,_applyInterval:function(b,c){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(o,p){if(p){window.clearInterval(this.__hc);
this.__hc=null;
}else if(o){this.__hc=window.setInterval(this.__hb,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(a){this.setInterval(a);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(n){this.stop();
this.startWith(n);
},_oninterval:function(){if(this.getEnabled()){this.fireEvent(m);
}}},destruct:function(){if(this.__hc){window.clearInterval(this.__hc);
}this._disposeFields(g,d);
}});
})();
(function(){var o="completed",n="interval",m="qx.legacy.io.image.PreloaderSystem",l="qx.preloaderTimeout",k="_list",j="load",i="qx.event.type.Event",h="_timer",g="error";
qx.Class.define(m,{extend:qx.core.Object,construct:function(a,b,c){arguments.callee.base.call(this);
if(a instanceof Array){this._list=qx.lang.Object.fromArray(a);
}else{this._list=a;
}this._timer=new qx.event.Timer(qx.core.Setting.get(l));
this._timer.addListener(n,this.__vr,this);
if(b){this.addListener(o,b,c||null);
}},events:{"completed":i},members:{_stopped:false,start:function(){if(qx.lang.Object.isEmpty(this._list)){this.fireEvent(o);
return;
}
for(var d in this._list){var f=qx.legacy.io.image.PreloaderManager.getInstance().create(qx.legacy.util.AliasManager.getInstance().resolve(d));

if(f.isErroneous()||f.isLoaded()){delete this._list[d];
}else{f._origSource=d;
f.addListener(j,this.__vp,this);
f.addListener(g,this.__vq,this);
}}this._check();
},__vp:function(e){if(this.isDisposed()){return;
}delete this._list[e.getTarget()._origSource];
this._check();
},__vq:function(e){if(this.isDisposed()){return;
}delete this._list[e.getTarget()._origSource];
this._check();
},__vr:function(e){this.warn("Cannot preload: "+qx.lang.Object.getKeysAsString(this._list));
this._stopped=true;
this._timer.stop();
this.fireEvent(o);
},_check:function(){if(this._stopped){return;
}if(qx.lang.Object.isEmpty(this._list)){this._timer.stop();
this.fireEvent(o);
}else{this._timer.restart();
}}},settings:{"qx.preloaderTimeout":3000},destruct:function(){if(this._timer){this._timer.removeListener(n,this.__vr,this);
this._disposeObjects(h);
}this._disposeFields(k);
}});
})();
(function(){var e="_objects",d="qx.legacy.io.image.PreloaderManager",c="singleton";
qx.Class.define(d,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._objects={};
},members:{add:function(f){this._objects[f.getUri()]=f;
},remove:function(h){delete this._objects[h.getUri()];
},has:function(b){return this._objects[b]!=null;
},get:function(g){return this._objects[g];
},create:function(a){if(this._objects[a]){return this._objects[a];
}return new qx.legacy.io.image.Preloader(a);
}},destruct:function(){this._disposeFields(e);
}});
})();
(function(){var j="qx.client",i="qx.event.type.Event",h="_isPng",g="mshtml",f="error",e="_isLoaded",d="qx.legacy.io.image.Preloader",c="load",b="_isErroneous",a="_element";
qx.Class.define(d,{extend:qx.core.Object,events:{"load":i,"error":i},construct:function(k){if(qx.legacy.io.image.PreloaderManager.getInstance().has(k)){this.debug("Reuse qx.legacy.io.image.Preloader in old-style!");
this.debug("Please use qx.legacy.io.image.PreloaderManager.getInstance().create(source) instead!");
return qx.legacy.io.image.PreloaderManager.getInstance().get(k);
}arguments.callee.base.call(this);
this._element=new Image;
this._element.onload=qx.lang.Function.bind(this.__vs,this);
this._element.onerror=qx.lang.Function.bind(this.__vt,this);
this._source=k;
this._element.src=qx.util.ResourceManager.toUri(k);
if(qx.core.Variant.isSet(j,g)){this._isPng=/\.png$/i.test(this._element.nameProp);
}qx.legacy.io.image.PreloaderManager.getInstance().add(this);
},members:{_source:null,_isLoaded:false,_isErroneous:false,getUri:function(){return this._source;
},getSource:function(){return this._source;
},isLoaded:function(){return this._isLoaded;
},isErroneous:function(){return this._isErroneous;
},_isPng:false,getIsPng:function(){return this._isPng;
},getWidth:qx.core.Variant.select(j,{"gecko":function(){return this._element.naturalWidth;
},"default":function(){return this._element.width;
}}),getHeight:qx.core.Variant.select(j,{"gecko":function(){return this._element.naturalHeight;
},"default":function(){return this._element.height;
}}),__vs:function(){if(this._isLoaded||this._isErroneous){return;
}this._isLoaded=true;
this._isErroneous=false;
this.fireEvent(c);
},__vt:function(){if(this._isLoaded||this._isErroneous){return;
}this.debug("Could not load: "+this._source);
this._isLoaded=false;
this._isErroneous=true;
this.fireEvent(f);
}},destruct:function(){if(this._element){this._element.onload=this._element.onerror=null;
}this._disposeFields(a,e,b,h);
}});
})();
(function(){var c="qx.ui.core.MChildrenHandling";
qx.Mixin.define(c,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(d){return this._indexOf(d);
},add:function(a,b){this._add(a,b);
},addAt:function(m,n,o){this._addAt(m,n,o);
},addBefore:function(e,f,g){this._addBefore(e,f,g);
},addAfter:function(h,i,j){this._addAfter(h,i,j);
},remove:function(k){this._remove(k);
},removeAt:function(p){this._removeAt(p);
},removeAll:function(){return this._removeAll();
}},statics:{remap:function(l){l.getChildren=l._getChildren;
l.hasChildren=l._hasChildren;
l.indexOf=l._indexOf;
l.add=l._add;
l.addAt=l._addAt;
l.addBefore=l._addBefore;
l.addAfter=l._addAfter;
l.remove=l._remove;
l.removeAt=l._removeAt;
l.removeAll=l._removeAll;
}}});
})();
(function(){var n="Integer",m="_applyDimension",l="Boolean",k="_applyStretching",j="_applyMargin",i="shorthand",h="_applyAlign",g="allowShrinkY",f="bottom",e="__fQ",H="baseline",G="marginBottom",F="qx.ui.core.LayoutItem",E="center",D="marginTop",C="$$subparent",B="__fP",A="allowGrowX",z="middle",y="marginLeft",u="__fL",v="__fN",s="allowShrinkX",t="$$parent",q="top",r="right",o="marginRight",p="abstract",w="allowGrowY",x="left";
qx.Class.define(F,{type:p,extend:qx.core.Object,properties:{minWidth:{check:n,nullable:true,apply:m,init:null,themeable:true},width:{check:n,nullable:true,apply:m,init:null,themeable:true},maxWidth:{check:n,nullable:true,apply:m,init:null,themeable:true},minHeight:{check:n,nullable:true,apply:m,init:null,themeable:true},height:{check:n,nullable:true,apply:m,init:null,themeable:true},maxHeight:{check:n,nullable:true,apply:m,init:null,themeable:true},allowGrowX:{check:l,apply:k,init:true,themeable:true},allowShrinkX:{check:l,apply:k,init:true,themeable:true},allowGrowY:{check:l,apply:k,init:true,themeable:true},allowShrinkY:{check:l,apply:k,init:true,themeable:true},allowStretchX:{group:[A,s],mode:i,themeable:true},allowStretchY:{group:[w,g],mode:i,themeable:true},marginTop:{check:n,init:0,apply:j,themeable:true},marginRight:{check:n,init:0,apply:j,themeable:true},marginBottom:{check:n,init:0,apply:j,themeable:true},marginLeft:{check:n,init:0,apply:j,themeable:true},margin:{group:[D,o,G,y],mode:i,themeable:true},alignX:{check:[x,E,r],nullable:true,apply:h,themeable:true},alignY:{check:[q,z,f,H],nullable:true,apply:h,themeable:true}},members:{__fK:null,__fL:null,__fM:null,__fN:null,__fO:null,__fP:null,__fQ:null,getBounds:function(){return this.__fP||this.__fL||null;
},clearSeparators:function(){},renderSeparator:function(I,J){},renderLayout:function(W,top,X,Y){var ba;
var bb=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bb=this._getHeightForWidth(X);
}
if(bb!=null&&bb!==this.__fK){this.__fK=bb;
qx.ui.core.queue.Layout.add(this);
return null;
}var bd=this.__fL;

if(!bd){bd=this.__fL={};
}var bc={};

if(W!==bd.left||top!==bd.top){bc.position=true;
bd.left=W;
bd.top=top;
}
if(X!==bd.width||Y!==bd.height){bc.size=true;
bd.width=X;
bd.height=Y;
}if(this.__fM){bc.local=true;
delete this.__fM;
}
if(this.__fO){bc.margin=true;
delete this.__fO;
}return bc;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fM;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fM=true;
this.__fN=null;
},getSizeHint:function(K){var L=this.__fN;

if(L){return L;
}
if(K===false){return null;
}L=this.__fN=this._computeSizeHint();
if(this.__fK&&this.getHeight()==null){L.height=this.__fK;
}if(!this.getAllowShrinkX()){L.minWidth=L.width;
}else if(L.minWidth>L.width){L.width=L.minWidth;
}
if(!this.getAllowShrinkY()){L.minHeight=L.height;
}else if(L.minHeight>L.height){L.height=L.minHeight;
}if(!this.getAllowGrowX()){L.maxWidth=L.width;
}else if(L.width>L.maxWidth){L.width=L.maxWidth;
}
if(!this.getAllowGrowY()){L.maxHeight=L.height;
}else if(L.height>L.maxHeight){L.height=L.maxHeight;
}return L;
},_computeSizeHint:function(){var bk=this.getMinWidth()||0;
var bh=this.getMinHeight()||0;
var bl=this.getWidth()||bk;
var bj=this.getHeight()||bh;
var bg=this.getMaxWidth()||Infinity;
var bi=this.getMaxHeight()||Infinity;
return {minWidth:bk,width:bl,maxWidth:bg,minHeight:bh,height:bj,maxHeight:bi};
},_hasHeightForWidth:function(){var a=this._getLayout();

if(a){return a.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(P){var Q=this._getLayout();

if(Q&&Q.hasHeightForWidth()){return Q.getHeightForWidth(P);
}return null;
},_applyMargin:function(){this.__fO=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__fP;
},setUserBounds:function(R,top,S,T){this.__fP={left:R,top:top,width:S,height:T};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__fP;
qx.ui.core.queue.Layout.add(this);
},__fR:{},setLayoutProperties:function(b){if(b==null){return;
}var c=this.__fQ;

if(!c){c=this.__fQ={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(b);
}for(var d in b){if(b[d]==null){delete c[d];
}else{c[d]=b[d];
}}},getLayoutProperties:function(){return this.__fQ||this.__fR;
},clearLayoutProperties:function(){delete this.__fQ;
},updateLayoutProperties:function(M){var N=this._getLayout();

if(N){var O;
N.invalidateChildrenCache();
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
},clone:function(){var U=arguments.callee.base.call(this);
var V=this.__fQ;

if(V){U.__fQ=qx.lang.Object.clone(V);
}return U;
},serialize:function(){var be=arguments.callee.base.call(this);
var bf=this.__fQ;

if(bf){be.layoutProperties=qx.lang.Object.clone(bf);
}return be;
}},destruct:function(){this._disposeFields(t,C,e,u,B,v);
}});
})();
(function(){var fw="px",fv="qx.event.type.Mouse",fu="Boolean",ft="qx.event.type.Drag",fs="visible",fr="qx.event.type.Focus",fq="Integer",fp="on",fo="excluded",fn="object",eS="_applyPadding",eR="qx.event.type.Event",eQ="zIndex",eP="hidden",eO="tabIndex",eN="contextmenu",eM="absolute",eL="backgroundColor",eK="focused",eJ="hovered",fD="qx.event.type.KeySequence",fE="qx.client",fB="height",fC="div",fz="qx.event.type.Data",fA="disabled",fx="move",fy="dragstart",fF="dragchange",fG="position",fg="dragend",ff="resize",fi="Decorator",fh="width",fk="$$widget",fj="mshtml",fm="none",fl="default",fe="Color",fd="top",dz="left",dA="String",dB="drag",dC="Use public 'getChildControl' instead!",dD="__fT",dE="_applyBackgroundColor",dF="_applyFocusable",dG="changeShadow",dH="qx.event.type.KeyInput",dI="normal",fK="Font",fJ="__ge",fI="_applyShadow",fH="_applyEnabled",fO="_applySelectable",fN="_applyKeepActive",fM="__gj",fL="Number",fQ="_applyVisibility",fP="repeat",ei="qxDraggable",ej="paddingLeft",eg="_applyDroppable",eh="userSelect",en="#",eo="__gm",ek="_applyCursor",em="changeVisibility",ee="_applyDraggable",ef="changeTextColor",dQ="changeContextMenu",dP="paddingTop",dS="opacity",dR="__fW",dM="hideFocus",dL="outline",dO="_applyAppearance",dN="overflowX",dK="_applyOpacity",dJ="__fX",et="url(",eu=")",ev="qx.ui.core.Widget",ew="_applyFont",ep="cursor",eq="qxDroppable",er="changeZIndex",es="overflowY",ex="changeEnabled",ey="__fS",eb="changeFont",ea="off",dY="_applyDecorator",dX="_applyZIndex",dW="_applyTextColor",dV="qx.ui.menu.Menu",dU="Use public 'hasChildControl' instead!",dT="__fV",ed="true",ec="widget",ez="changeDecorator",eA="_applyTabIndex",eB="changeAppearance",eC="shorthand",eD="/",eE="",eF="_applyContextMenu",eG="qxSelectable",eH="__gc",eI="paddingBottom",eW="qx.ui.tooltip.ToolTip",eV="qxKeepActive",eU="_applyKeepFocus",eT="webkit",fb="paddingRight",fa="changeBackgroundColor",eY="qxKeepFocus",eX="__ga",fc="qx/static/blank.gif";
qx.Class.define(ev,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__fS=this._createContainerElement();
this.__fT=this.__gd();
this.__fS.add(this.__fT);
this.initFocusable();
this.initSelectable();
},events:{appear:eR,disappear:eR,resize:fz,move:fz,mousemove:fv,mouseover:fv,mouseout:fv,mousedown:fv,mouseup:fv,click:fv,dblclick:fv,contextmenu:fv,mousewheel:fv,keyup:fD,keydown:fD,keypress:fD,keyinput:dH,focus:fr,blur:fr,focusin:fr,focusout:fr,activate:fr,deactivate:fr,capture:eR,losecapture:eR,drop:ft,dragleave:ft,dragover:ft,drag:ft,dragstart:ft,dragend:ft,dragchange:ft,droprequest:ft},properties:{paddingTop:{check:fq,init:0,apply:eS,themeable:true},paddingRight:{check:fq,init:0,apply:eS,themeable:true},paddingBottom:{check:fq,init:0,apply:eS,themeable:true},paddingLeft:{check:fq,init:0,apply:eS,themeable:true},padding:{group:[dP,fb,eI,ej],mode:eC,themeable:true},zIndex:{nullable:true,init:null,apply:dX,event:er,check:fq,themeable:true},decorator:{nullable:true,init:null,apply:dY,event:ez,check:fi,themeable:true},shadow:{nullable:true,init:null,apply:fI,event:dG,check:fi,themeable:true},backgroundColor:{nullable:true,check:fe,apply:dE,event:fa,themeable:true},textColor:{nullable:true,check:fe,apply:dW,event:ef,themeable:true,inheritable:true},font:{nullable:true,apply:ew,check:fK,event:eb,themeable:true,inheritable:true},opacity:{check:fL,apply:dK,themeable:true,nullable:true,init:null},cursor:{check:dA,apply:ek,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eW,nullable:true},visibility:{check:[fs,eP,fo],init:fs,apply:fQ,event:em},enabled:{init:true,check:fu,inheritable:true,apply:fH,event:ex},anonymous:{init:false,check:fu},tabIndex:{check:fq,nullable:true,apply:eA},focusable:{check:fu,init:false,apply:dF},keepFocus:{check:fu,init:false,apply:eU},keepActive:{check:fu,init:false,apply:fN},draggable:{check:fu,init:false,apply:ee},droppable:{check:fu,init:false,apply:eg},selectable:{check:fu,init:false,apply:fO},contextMenu:{check:dV,apply:eF,nullable:true,event:dQ},appearance:{check:dA,init:ec,apply:dO,event:eB}},statics:{DEBUG:false,getWidgetByElement:function(de){try{while(de){var df=de.$$widget;
if(df!=null){return qx.core.ObjectRegistry.fromHashCode(df);
}de=de.parentNode;
}}catch(di){}return null;
},contains:function(parent,dl){while(dl){if(parent==dl){return true;
}dl=dl.getLayoutParent();
}return false;
},__fU:{}},members:{__fS:null,__fT:null,__fV:null,__fW:null,__fX:null,__fY:null,__ga:null,_getLayout:function(){return this.__ga;
},_setLayout:function(K){{};

if(this.__ga){this.__ga.connectToWidget(null);
}
if(K){K.connectToWidget(this);
}this.__ga=K;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}
if(this.$$parent){this.$$parent.getContentElement().remove(this.__fS);
}this.$$parent=parent||null;

if(parent){this.$$parent.getContentElement().add(this.__fS);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},__gb:null,renderLayout:function(cv,top,cw,cx){var cI=arguments.callee.base.call(this,cv,top,cw,cx);
if(!cI){return;
}var cz=this.__fS;
var content=this.__fT;
var cF=cI.size||this.__gb;
var cJ=fw;
if(cI.position){cz.setStyle(dz,cv+cJ);
cz.setStyle(fd,top+cJ);
}if(cI.size){cz.setStyle(fh,cw+cJ);
cz.setStyle(fB,cx+cJ);
}
if(cF||cI.local||cI.margin){var cy=this.getInsets();
var innerWidth=cw-cy.left-cy.right;
var innerHeight=cx-cy.top-cy.bottom;
}
if(this.__gb){content.setStyle(dz,cy.left+cJ);
content.setStyle(fd,cy.top+cJ);
}
if(cF){content.setStyle(fh,innerWidth+cJ);
content.setStyle(fB,innerHeight+cJ);
}
if(cI.size){var cH=this.__fX;

if(cH){cH.setStyles({width:cw+fw,height:cx+fw});
}}
if(cI.size||this.__gb){var cC=qx.theme.manager.Decoration.getInstance();
var cK=this.getDecorator();

if(cK){var cD=this.__fV;
var cE=cC.resolve(cK);
cE.resize(cD.getDomElement(),cw,cx);
}}
if(cI.size){var cG=this.getShadow();

if(cG){var cD=this.__fW;
var cE=cC.resolve(cG);
var cy=cE.getInsets();
var cB=cw+cy.left+cy.right;
var cA=cx+cy.top+cy.bottom;
cE.resize(cD.getDomElement(),cB,cA);
}}
if(cF||cI.local||cI.margin){if(this.__ga&&this.hasLayoutChildren()){this.__ga.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cI.position&&this.hasListener(fx)){this.fireDataEvent(fx,this.getBounds());
}
if(cI.size&&this.hasListener(ff)){this.fireDataEvent(ff,this.getBounds());
}delete this.__gb;
},__gc:null,clearSeparators:function(){var gb=this.__gc;

if(!gb){return;
}var gc=qx.ui.core.Widget.__fU;
var content=this.__fT;
var ga,fY;

for(var i=0,l=gb.length;i<l;i++){fY=gb[i];
ga=fY.$$separator;
if(!gc[ga]){gc[ga]=[fY];
}else{gc[ga].push(fY);
}content.remove(fY);
}gb.length=0;
},renderSeparator:function(gE,gF){var gM=qx.ui.core.Widget.__fU;
var gK=qx.theme.manager.Decoration.getInstance();

if(typeof gE==fn){var gL=gE.toHashCode();
var gH=gE;
}else{var gL=gE;
var gH=gK.resolve(gE);
}var gI=gM[gE];

if(gI&&gI.length>0){var gJ=gI.pop();
}else{var gJ=this.__gi(gH);
}this.__fT.add(gJ);
gH.resize(gJ.getDomElement(),gF.width,gF.height);
var gG=gJ.getDomElement().style;
gG.left=gF.left+fw;
gG.top=gF.top+fw;
if(!this.__gc){this.__gc=[gJ];
}else{this.__gc.push(gJ);
}gJ.$$separator=gL;
},_computeSizeHint:function(){var u=this.getWidth();
var t=this.getMinWidth();
var p=this.getMaxWidth();
var s=this.getHeight();
var q=this.getMinHeight();
var r=this.getMaxHeight();
var v=this._getContentHint();
var o=this.getInsets();
var x=o.left+o.right;
var w=o.top+o.bottom;

if(u==null){u=v.width+x;
}
if(s==null){s=v.height+w;
}
if(t==null){t=x;

if(v.minWidth!=null){t+=v.minWidth;
}}
if(q==null){q=w;

if(v.minHeight!=null){q+=v.minHeight;
}}
if(p==null){if(v.maxWidth==null){p=Infinity;
}else{p=v.maxWidth+x;
}}
if(r==null){if(v.maxHeight==null){r=Infinity;
}else{r=v.maxHeight+w;
}}return {width:u,minWidth:t,maxWidth:p,height:s,minHeight:q,maxHeight:r};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__ga){this.__ga.invalidateLayoutCache();
}},_getContentHint:function(){var bd=this.__ga;

if(bd){if(this.hasLayoutChildren()){var be=bd.getSizeHint();
var bc;
return be;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(cj){var cn=this.getInsets();
var cq=cn.left+cn.right;
var cp=cn.top+cn.bottom;
var co=cj-cq;
var cl=this._getLayout();

if(cl&&cl.hasHeightForWidth()){var ck=cl.getHeightForWidth(cj);
}else{ck=this._getContentHeightForWidth(co);
}var cm=ck+cp;
return cm;
},_getContentHeightForWidth:function(gz){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var bM=this.getPaddingRight();
var bN=this.getPaddingBottom();
var bS=this.getPaddingLeft();
var bR=this.getDecorator();

if(bR){var bQ=qx.theme.manager.Decoration.getInstance();
var bP=bQ.resolve(bR);
var bO=bP.getInsets();
{};
top+=bO.top;
bM+=bO.right;
bN+=bO.bottom;
bS+=bO.left;
}return {"top":top,"right":bM,"bottom":bN,"left":bS};
},getInnerSize:function(){var by=this.getBounds();

if(!by){return null;
}var bx=this.getInsets();
return {width:by.width-bx.left-bx.right,height:by.height-bx.top-bx.bottom};
},show:function(){this.setVisibility(fs);
},hide:function(){this.setVisibility(eP);
},exclude:function(){this.setVisibility(fo);
},isVisible:function(){return this.getVisibility()===fs;
},isHidden:function(){return this.getVisibility()!==fs;
},isExcluded:function(){return this.getVisibility()===fo;
},_createContainerElement:function(){var bL=new qx.html.Element(fC);
{};
bL.setStyle(fG,eM);
bL.setStyle(eQ,0);
bL.setAttribute(fk,this.toHashCode());
{};
return bL;
},__gd:function(){var ci=this._createContentElement();
{};
ci.setStyle(fG,eM);
ci.setStyle(eQ,10);
return ci;
},_createContentElement:function(){var cY=new qx.html.Element(fC);
cY.setStyle(dN,eP);
cY.setStyle(es,eP);
return cY;
},getContainerElement:function(){return this.__fS;
},getContentElement:function(){return this.__fT;
},getDecoratorElement:function(){return this.__fV;
},__ge:null,getLayoutChildren:function(){var hb=this.__ge;

if(!hb){return this.__gf;
}var hc;

for(var i=0,l=hb.length;i<l;i++){var ha=hb[i];

if(ha.hasUserBounds()||ha.isExcluded()){if(hc==null){hc=hb.concat();
}qx.lang.Array.remove(hc,ha);
}}return hc||hb;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var cO=this.__ga;

if(cO){cO.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var hd=this.__ge;

if(!hd){return false;
}var he;

for(var i=0,l=hd.length;i<l;i++){he=hd[i];

if(!he.hasUserBounds()&&!he.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__gf:[],_getChildren:function(){return this.__ge||this.__gf;
},_indexOf:function(a){var b=this.__ge;

if(!b){return -1;
}return b.indexOf(a);
},_hasChildren:function(){var cX=this.__ge;
return cX!=null&&(!!cX[0]);
},addChildrenToQueue:function(L){var M=this.__ge;

if(!M){return;
}var N;

for(var i=0,l=M.length;i<l;i++){N=M[i];
L[N.$$hash]=N;
N.addChildrenToQueue(L);
}},_add:function(hs,ht){if(hs.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,hs);
}
if(this.__ge){this.__ge.push(hs);
}else{this.__ge=[hs];
}this.__gg(hs,ht);
},_addAt:function(cR,cS,cT){if(!this.__ge){this.__ge=[];
}if(cR.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,cR);
}var cU=this.__ge[cS];

if(cU===cR){return cR.setLayoutProperties(cT);
}
if(cU){qx.lang.Array.insertBefore(this.__ge,cR,cU);
}else{this.__ge.push(cR);
}this.__gg(cR,cT);
},_addBefore:function(bX,bY,ca){{};

if(bX==bY){return;
}
if(!this.__ge){this.__ge=[];
}if(bX.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,bX);
}qx.lang.Array.insertBefore(this.__ge,bX,bY);
this.__gg(bX,ca);
},_addAfter:function(cL,cM,cN){{};

if(cL==cM){return;
}
if(!this.__ge){this.__ge=[];
}if(cL.getLayoutParent()==this){qx.lang.Array.remove(this.__ge,cL);
}qx.lang.Array.insertAfter(this.__ge,cL,cM);
this.__gg(cL,cN);
},_remove:function(fX){if(!this.__ge){return;
}qx.lang.Array.remove(this.__ge,fX);
this.__gh(fX);
},_removeAt:function(gd){if(!this.__ge){throw new Error("This widget has no children!");
}var ge=this.__ge[gd];
qx.lang.Array.removeAt(this.__ge,gd);
this.__gh(ge);
return ge;
},_removeAll:function(){if(!this.__ge){return;
}var bj=this.__ge.concat();
this.__ge.length=0;

for(var i=bj.length-1;i>=0;i--){this.__gh(bj[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__gg:function(gA,gB){{};
var parent=gA.getLayoutParent();

if(parent&&parent!=this){parent._remove(gA);
}gA.setLayoutParent(this);
if(gB){gA.setLayoutProperties(gB);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gA);
}},__gh:function(fR){{};
fR.setLayoutParent(null);
if(this.__ga){this.__ga.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(fR);
}},capture:function(){this.__fS.capture();
},releaseCapture:function(){this.__fS.releaseCapture();
},_applyPadding:function(hg,hh,name){this.__gb=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__fX){return;
}var fT=this.__fX=new qx.html.Element;
{};
fT.setStyles({position:eM,top:0,left:0,zIndex:7});
var fU=this.getBounds();

if(fU){this.__fX.setStyles({width:fU.width+fw,height:fU.height+fw});
}if(qx.core.Variant.isSet(fE,fj)){fT.setStyles({backgroundImage:et+qx.util.ResourceManager.toUri(fc)+eu,backgroundRepeat:fP});
}this.__fS.add(fT);
},__gi:function(gN){var gO=new qx.html.Element;
gO.setStyles({position:eM,top:0,left:0});
{};
gO.useMarkup(gN.getMarkup());
return gO;
},_applyDecorator:function(hi,hj){var hr=qx.ui.core.Widget.__fU;
var ho=qx.theme.manager.Decoration.getInstance();
var hk=this.__fS;
var hm=this.__fV;
if(!this.__fX){this._createProtectorElement();
}var hp;

if(hj){if(typeof hj===fn){hp=hj.toHashCode();
}else{hp=hj;
hj=ho.resolve(hj);
}}var hq;

if(hi){if(typeof hi===fn){hq=hi.toHashCode();
{};
}else{hq=hi;
hi=ho.resolve(hi);
}}if(hj){if(!hr[hp]){hr[hp]=[];
}hk.remove(hm);
hr[hp].push(hm);
}if(hi){if(hr[hq]&&hr[hq].length>0){hm=hr[hq].pop();
}else{hm=this.__gi(hi);
hm.setStyle(eQ,5);
}var hl=this.getBackgroundColor();
hi.tint(hm.getDomElement(),hl);
hk.add(hm);
this.__fV=hm;
}else{delete this.__fV;
this._applyBackgroundColor(this.getBackgroundColor());
}if(hi&&!hj&&hl){this.getContainerElement().setStyle(eL,null);
}if(qx.ui.decoration.Util.insetsModified(hj,hi)){this.__gb=true;
qx.ui.core.queue.Layout.add(this);
}else if(hi){var hn=this.getBounds();

if(hn){ho.resolve(hi).resize(hm.getDomElement(),hn.width,hn.height);
this.__fX.setStyles({width:hn.width+fw,height:hn.height+fw});
}}},_applyShadow:function(dm,dn){var dy=qx.ui.core.Widget.__fU;
var dv=qx.theme.manager.Decoration.getInstance();
var dq=this.__fS;
var dw;

if(dn){if(typeof dn===fn){dw=dn.toHashCode();
}else{dw=dn;
dn=dv.resolve(dn);
}}var dx;

if(dm){if(typeof dm===fn){dx=dm.toHashCode();
}else{dx=dm;
dm=dv.resolve(dm);
}}if(dn){if(!dy[dw]){dy[dw]=[];
}dq.remove(this.__fW);
dy[dw].push(this.__fW);
}if(dm){var ds;

if(dy[dx]&&dy[dx].length>0){ds=dy[dx].pop();
}else{ds=this.__gi(dm);
}dq.add(ds);
this.__fW=ds;
var du=dm.getInsets();
ds.setStyles({left:(-du.left)+fw,top:(-du.top)+fw});
var dt=this.getBounds();

if(dt){var dr=dt.width+du.left+du.right;
var dp=dt.height+du.top+du.bottom;
dm.resize(ds.getDomElement(),dr,dp);
}}else{delete this.__fW;
}},_applyTextColor:function(cr,cs){},_applyZIndex:function(gC,gD){this.__fS.setStyle(eQ,gC==null?0:gC);
},_applyVisibility:function(gT,gU){if(gT===fs){this.__fS.show();
}else{this.__fS.hide();
}var parent=this.$$parent;

if(parent&&(gU==null||gT==null||gU===fo||gT===fo)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(gl,gm){this.__fS.setStyle(dS,gl==1?null:gl);
},_applyCursor:function(bh,bi){if(bh==null&&!this.isSelectable()){bh=fl;
}this.__fS.setStyle(ep,bh);
},_applyBackgroundColor:function(c,d){var n=this.getDecorator();
var m=this.getShadow();
var h=this.getBackgroundColor();
var g=this.__fS;

if(n||m){var j=this.__fV;

if(j){var k=qx.theme.manager.Decoration.getInstance().resolve(n);
k.tint(this.__fV.getDomElement(),h);
}g.setStyle(eL,null);
}else{var f=qx.theme.manager.Color.getInstance().resolve(h);
g.setStyle(eL,f);
}},_applyFont:function(bf,bg){},__gj:null,$$stateChanges:null,_forwardStates:null,hasState:function(bV){var bW=this.__gj;
return bW&&bW[bV];
},addState:function(W){var X=this.__gj;

if(!X){X=this.__gj={};
}
if(X[W]){return;
}this.__gj[W]=true;
if(W===eJ){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bb=this.__gm;

if(forward&&forward[W]&&bb){var Y;

for(var ba in bb){Y=bb[ba];

if(Y instanceof qx.ui.core.Widget){bb[ba].addState(W);
}}}},removeState:function(bA){var bB=this.__gj;

if(!bB||!bB[bA]){return;
}delete this.__gj[bA];
if(bA===eJ){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bE=this.__gm;

if(forward&&forward[bA]&&bE){for(var bD in bE){var bC=bE[bD];

if(bC instanceof qx.ui.core.Widget){bC.removeState(bA);
}}}},replaceState:function(bF,bG){var bH=this.__gj;

if(!bH){bH=this.__gj={};
}
if(!bH[bG]){bH[bG]=true;
}
if(bH[bF]){delete bH[bF];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bK=this.__gm;

if(forward&&forward[bG]&&bK){for(var bJ in bK){var bI=bK[bJ];

if(bI instanceof qx.ui.core.Widget){bI.replaceState(bF,bG);
}}}},__gk:null,__gl:null,syncAppearance:function(){var bo=this.__gj;
var bn=this.__gk;
var bp=qx.theme.manager.Appearance.getInstance();
var bl=qx.core.Property.$$method.setThemed;
var bt=qx.core.Property.$$method.resetThemed;
if(this.__gl){delete this.__gl;
if(bn){var bk=bp.styleFrom(bn,bo);
if(bk){bn=null;
}}}if(!bn){var bm=this;
var bs=[];

do{bs.push(bm.$$subcontrol||bm.getAppearance());
}while(bm=bm.$$subparent);
bn=this.__gk=bs.reverse().join(eD).replace(/#[0-9]+/g,eE);
}var bq=bp.styleFrom(bn,bo);

if(bq){if(bk){for(var br in bk){if(bq[br]===undefined){this[bt[br]]();
}}}var br;
var br;

for(var br in bq){bq[br]===undefined?this[bt[br]]():this[bl[br]](bq[br]);
}}else if(bk){for(var br in bk){this[bt[br]]();
}}},_applyAppearance:function(gi,gj){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__fY){qx.ui.core.queue.Appearance.add(this);
this.__fY=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__gl=true;
qx.ui.core.queue.Appearance.add(this);
var cf=this.__gm;

if(cf){var cd;

for(var ce in cf){cd=cf[ce];

if(cd instanceof qx.ui.core.Widget){cd.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var U=this;

while(U.getAnonymous()){U=U.getLayoutParent();

if(!U){return null;
}}return U;
},getFocusTarget:function(){var gk=this;

if(!gk.getEnabled()){return null;
}
while(gk.getAnonymous()||!gk.getFocusable()){gk=gk.getLayoutParent();

if(!gk||!gk.getEnabled()){return null;
}}return gk;
},getFocusElement:function(){return this.__fS;
},isTabable:function(){return this.getContainerElement().getDomElement()&&this.isFocusable();
},_applyFocusable:function(gP,gQ){var gR=this.getFocusElement();
if(gP){var gS=this.getTabIndex();

if(gS==null){gS=1;
}gR.setAttribute(eO,gS);
if(qx.core.Variant.isSet(fE,fj)){gR.setAttribute(dM,ed);
}else{gR.setStyle(dL,fm);
}}else{if(gR.isNativelyFocusable()){gR.setAttribute(eO,-1);
}else if(gQ){gR.setAttribute(eO,null);
}}},_applyKeepFocus:function(dj){var dk=this.getFocusElement();
dk.setAttribute(eY,dj?fp:null);
},_applyKeepActive:function(ct){var cu=this.getContainerElement();
cu.setAttribute(eV,ct?fp:null);
},_applyTabIndex:function(bu){if(bu==null){bu=1;
}else if(bu<1||bu>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&bu!=null){this.getFocusElement().setAttribute(eO,bu);
}},_applySelectable:function(gV){this._applyCursor(this.getCursor());
this.__fS.setAttribute(eG,gV?fp:ea);
if(qx.core.Variant.isSet(fE,eT)){this.__fS.setStyle(eh,gV?dI:fm);
}},_applyEnabled:function(cb,cc){if(cb===false){this.addState(fA);
this.removeState(eJ);
if(this.isFocusable()){this.removeState(eK);
this._applyFocusable(false,true);
}}else{this.removeState(fA);
if(this.isFocusable()){this._applyFocusable(true,false);
}}},_applyContextMenu:function(bv,bw){if(bw){bw.removeState(eN);

if(bw.getOpener()==this){bw.resetOpener();
}
if(!bv){this.removeListener(eN,this._onContextMenuOpen);
}}
if(bv){bv.setOpener(this);
bv.addState(eN);

if(!bw){this.addListener(eN,this._onContextMenuOpen);
}}},_onContextMenuOpen:function(e){var gy=this.getContextMenu();
gy.placeToMouse(e);
gy.show();
e.preventDefault();
},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(cP,cQ){qx.ui.core.DragDropCursor.getInstance();
if(cP){this.addListener(fy,this._onDragStart);
this.addListener(dB,this._onDrag);
this.addListener(fg,this._onDragEnd);
this.addListener(fF,this._onDragChange);
}else{this.removeListener(fy,this._onDragStart);
this.removeListener(dB,this._onDrag);
this.removeListener(fg,this._onDragEnd);
this.removeListener(fF,this._onDragChange);
}this.__fS.setAttribute(ei,cP?fp:null);
},_applyDroppable:function(bT,bU){this.__fS.setAttribute(eq,bT?fp:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(fl);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var cg=qx.ui.core.DragDropCursor.getInstance();
var ch=e.getCurrentAction();
ch?cg.setAction(ch):cg.resetAction();
},visualizeFocus:function(){this.addState(eK);
},visualizeBlur:function(){this.removeState(eK);
},scrollChildIntoView:function(G,H,I,J){this.scrollChildIntoViewX(G,H,J);
this.scrollChildIntoViewY(G,I,J);
},scrollChildIntoViewX:function(gW,gX,gY){this.__fT.scrollChildIntoViewX(gW.getContainerElement(),gX,gY);
},scrollChildIntoViewY:function(D,E,F){this.__fT.scrollChildIntoViewY(D.getContainerElement(),E,F);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.__fS.activate();
},deactivate:function(){this.__fS.deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},_hasChildControl:function(fS){qx.log.Logger.deprecatedMethodWarning(arguments.callee,dU);
return this.hasChildControl(fS);
},hasChildControl:function(hf){if(!this.__gm){return false;
}return !!this.__gm[hf];
},__gm:null,_getChildControl:function(Q,R){qx.log.Logger.deprecatedMethodWarning(arguments.callee,dC);
return this.getChildControl(Q,R);
},getChildControl:function(gf,gg){if(!this.__gm){if(gg){return null;
}this.__gm={};
}var gh=this.__gm[gf];

if(gh){return gh;
}
if(gg===true){return null;
}return this._createChildControl(gf);
},_showChildControl:function(gn){var go=this.getChildControl(gn);
go.show();
return go;
},_excludeChildControl:function(O){var P=this.getChildControl(O,true);

if(P){P.exclude();
}},_isChildControlVisible:function(dg){var dh=this.getChildControl(dg,true);

if(dh){return dh.isVisible();
}return false;
},_createChildControl:function(y){if(!this.__gm){this.__gm={};
}else if(this.__gm[y]){throw new Error("Child control '"+y+"' already created!");
}var C=y.indexOf(en);

if(C==-1){var z=this._createChildControlImpl(y);
}else{var z=this._createChildControlImpl(y.substring(0,C));
}
if(!z){throw new Error("Unsupported control: "+y);
}z.$$subcontrol=y;
z.$$subparent=this;
var A=this.__gj;
var forward=this._forwardStates;

if(A&&forward&&z instanceof qx.ui.core.Widget){for(var B in A){if(forward[B]){z.addState(B);
}}}return this.__gm[y]=z;
},_createChildControlImpl:function(bz){return null;
},_disposeChildControls:function(){var gs=this.__gm;

if(!gs){return;
}var gq=qx.ui.core.Widget;

for(var gr in gs){var gp=gs[gr];

if(!gq.contains(this,gp)){gp.destroy();
}else{gp.dispose();
}}delete this.__gm;
},_findTopControl:function(){var V=this;

while(V){if(!V.$$subparent){return V;
}V=V.$$subparent;
}return null;
},getContainerLocation:function(gt){var gu=this.getContainerElement().getDomElement();
return gu?qx.bom.element.Location.get(gu,gt):null;
},getContentLocation:function(da){var db=this.getContentElement().getDomElement();
return db?qx.bom.element.Location.get(db,da):null;
},setDomLeft:function(fV){var fW=this.getContainerElement().getDomElement();

if(fW){fW.style.left=fV+fw;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(dc){var dd=this.getContainerElement().getDomElement();

if(dd){dd.style.top=dc+fw;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(cV,top){var cW=this.getContainerElement().getDomElement();

if(cW){cW.style.left=cV+fw;
cW.style.top=top+fw;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var S=arguments.callee.base.call(this);

if(this.getChildren){var T=this.getChildren();

for(var i=0,l=T.length;i<l;i++){S.add(T[i].clone());
}}return S;
},serialize:function(){var gw=arguments.callee.base.call(this);

if(this.getChildren){var gx=this.getChildren();

if(gx.length>0){gw.children=[];

for(var i=0,l=gx.length;i<l;i++){gw.children.push(gx[i].serialize());
}}}
if(this.getLayout){var gv=this.getLayout();

if(gv){gw.layout=gv.serialize();
}}return gw;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){this.__fS.setAttribute(fk,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}this._disposeArray(fJ);
this._disposeArray(eH);
this._disposeFields(fM,eo);
this._disposeObjects(eX,ey,dD,dT,dR,dJ);
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
}},__gs:function(){var A=new qx.html.Element().setStyles({position:d,width:r,height:r,opacity:this.getBlockerOpacity(),backgroundColor:qx.theme.manager.Color.getInstance().resolve(this.getBlockerColor())});
if(qx.core.Variant.isSet(h,q)){A.setStyles({backgroundImage:c+qx.util.ResourceManager.toUri(e)+j,backgroundRepeat:o});
}return A;
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
},blockContent:function(y){var z=this._getContentBlocker();
z.setStyle(k,y);

if(this.__gr){return;
}this.__gr=true;
z.include();
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
},setWindowManager:function(p){if(this.__gu){this.__gu.setDesktop(null);
}p.setDesktop(this);
this.__gu=p;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}},_applyActiveWindow:function(a,b){this.getWindowManager().changeActiveWindow(a,b);
a.setActive(true);

if(b){b.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(l){if(qx.Class.isDefined(k)&&l instanceof qx.ui.window.Window){this._addWindow(l);
}},_addWindow:function(n){this.getWindows().push(n);
n.addListener(h,this._onChangeActive,this);
n.addListener(j,this._onChangeModal,this);
n.addListener(i,this._onChangeVisibility,this);

if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(k)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(h,this._onChangeActive,this);
m.removeListener(j,this._onChangeModal,this);
m.removeListener(i,this._onChangeVisibility,this);
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
(function(){var m="px",l="div",k="resize",j="qx.ui.root.Page",i="position",h="interval",g="$$widget",f="__oM",d="absolute";
qx.Class.define(j,{extend:qx.ui.root.Abstract,construct:function(c){this.__oM=c;
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Basic());
this.setZIndex(10000);
qx.ui.core.queue.Layout.add(this);
this.addListener(k,this.__oO,this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},members:{__oN:null,__oM:null,_createContainerElement:function(){var o=this.__oM.createElement(l);
this.__oM.body.appendChild(o);
var n=new qx.html.Root(o);
n.setStyle(i,d);
n.setAttribute(g,this.toHashCode());
return n;
},_createContentElement:function(){return new qx.html.Element(l);
},_computeSizeHint:function(){var a=qx.bom.Document.getWidth(this._window);
var b=qx.bom.Document.getHeight(this._window);
return {minWidth:a,width:a,maxWidth:a,minHeight:b,height:b,maxHeight:b};
},__oO:function(e){var r=e.getData();
this.getContainerElement().setStyles({width:0,height:0});
this.getContentElement().setStyles({width:0,height:0});
if(this.isContentBlocked()){this._getContentBlocker().setStyles({width:r.width,height:r.height});
}
if(this.isBlocked()){this._getBlocker().setStyles({width:r.width,height:r.height});
}},__oP:function(){var p=this.__oM.body;
this._getContentBlocker().setStyles({height:p.offsetHeight+m,width:p.offsetWidth+m});
},supportsMaximize:function(){return false;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}arguments.callee.base.call(this);
this.__oN.stop();
},blockContent:function(q){if(this.isContentBlocked()){arguments.callee.base.call(this,q);
return;
}arguments.callee.base.call(this,q);
if(!this.__oN){this.__oN=new qx.event.Timer(300);
this.__oN.addListener(h,this.__oP,this);
}this.__oN.start();
this.__oP();
}},destruct:function(){this._disposeFields(f);
}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__fF:{},remove:function(A){delete this.__fF[A.$$hash];
},add:function(c){this.__fF[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var d=this.__fI();
for(var i=d.length-1;i>=0;i--){var e=d[i];
if(e.hasValidLayout()){continue;
}if(e.isRootWidget()&&!e.hasUserBounds()){var g=e.getSizeHint();
e.renderLayout(0,0,g.width,g.height);
}else{var f=e.getBounds();
e.renderLayout(f.left,f.top,f.width,f.height);
}}},getNestingLevel:function(h){var j=this.__fH;
var l=0;
var parent=h;
while(true){if(j[parent.$$hash]!=null){l+=j[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
l+=1;
}var k=l;

while(h&&h!==parent){j[h.$$hash]=k--;
h=h.$$parent;
}return l;
},__fG:function(){var z=qx.ui.core.queue.Visibility;
this.__fH={};
var y=[];
var x=this.__fF;
var u,w;

for(var v in x){u=x[v];

if(z.isVisible(u)){w=this.getNestingLevel(u);
if(!y[w]){y[w]={};
}y[w][v]=u;
delete x[v];
}}return y;
},__fI:function(){var p=[];
var r=this.__fG();

for(var o=r.length-1;o>=0;o--){if(!r[o]){continue;
}
for(var n in r[o]){var m=r[o][n];
if(o==0||m.isRootWidget()||m.hasUserBounds()){p.push(m);
m.invalidateLayoutCache();
continue;
}var t=m.getSizeHint(false);

if(t){m.invalidateLayoutCache();
var q=m.getSizeHint();
var s=(!m.getBounds()||t.minWidth!==q.minWidth||t.width!==q.width||t.maxWidth!==q.maxWidth||t.minHeight!==q.minHeight||t.height!==q.height||t.maxHeight!==q.maxHeight);
}else{s=true;
}
if(s){var parent=m.getLayoutParent();

if(!r[o-1]){r[o-1]={};
}r[o-1][parent.$$hash]=parent;
}else{p.push(m);
}}}return p;
}}});
})();
(function(){var g="qx.event.handler.UserAction",f="__cS",e="__cT";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){arguments.callee.base.call(this);
this.__cS=d;
this.__cT=d.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(h,i,j){},unregisterEvent:function(k,l,m){}},destruct:function(){this._disposeFields(f,e);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var t="element",s="qx.client",r="div",q="",p="mshtml",o="qx.html.Element",n="|capture|",m="__df",k="focus",j="__dz",N="blur",M="deactivate",L="capture",K="__dj",J="__dq",I="__du",H="__ds",G="__dn",F="releaseCapture",E="tabIndex",C="activate",D="none",A="__dr",B="__dp",w="__dk",z="__dt",u="__do",v="|bubble|";
qx.Class.define(o,{extend:qx.core.Object,construct:function(bb){arguments.callee.base.call(this);
this.__de=bb||r;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],_scheduleFlush:function(c){qx.html.Element.__dE.schedule();
},_mshtmlVisibilitySort:qx.core.Variant.select(s,{"mshtml":function(a,b){var f=a.__df;
var e=b.__df;

if(f.contains(e)){return 1;
}
if(e.contains(f)){return -1;
}return 0;
},"default":null}),flush:function(){var di;
{};
var dj=[];
var dl=this._modified;

for(var dt in dl){di=dl[dt];
if(di.__dx()){if(di.__df&&qx.dom.Hierarchy.isRendered(di.__df)){dj.push(di);
}else{{};
di.__dw();
}delete dl[dt];
}}
for(var i=0,l=dj.length;i<l;i++){di=dj[i];
{};
di.__dw();
}var dm=this._visibility;
if(qx.core.Variant.isSet(s,p)){var dk=[];

for(var dt in dm){dk.push(dm[dt]);
}if(dk.length>1){dk.sort(this._mshtmlVisibilitySort);
dm=this._visibility={};

for(var i=0;i<dk.length;i++){di=dk[i];
dm[di.$$hash]=di;
}}}
for(var dt in dm){di=dm[dt];
{};
di.__df.style.display=di.__di?q:D;
delete dm[dt];
}var scroll=this._scroll;

for(var dt in scroll){di=scroll[dt];
var dv=di.__df;

if(dv&&dv.offsetWidth){var dq=true;
if(di.__dl!=null){di.__df.scrollLeft=di.__dl;
delete di.__dl;
}if(di.__dm!=null){di.__df.scrollTop=di.__dm;
delete di.__dm;
}var dn=di.__dj;

if(dn!=null){var dr=dn.element.getDomElement();

if(dr&&dr.offsetWidth){qx.bom.element.Scroll.intoViewX(dr,dv,dn.align);
delete di.__dj;
}else{dq=false;
}}var dp=di.__dk;

if(dp!=null){var dr=dp.element.getDomElement();

if(dr&&dr.offsetWidth){qx.bom.element.Scroll.intoViewY(dr,dv,dp.align);
delete di.__dk;
}else{dq=false;
}}if(dq){delete scroll[dt];
}}}for(var i=0;i<this._actions.length;i++){var ds=this._actions[i];
var du=ds.element.__df;

if(!du){continue;
}qx.bom.Element[ds.type](du);
}this._actions=[];
qx.event.handler.Appear.refresh();
}},members:{__de:null,__df:null,__dg:false,__dh:true,__di:true,__dj:null,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__dp:null,__dq:null,__dr:null,__ds:null,__dt:null,__du:null,__dv:null,_scheduleChildrenUpdate:function(){if(this.__dv){return;
}this.__dv=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(t);
},_createDomElement:function(){return qx.bom.Element.create(this.__de);
},__dw:function(){{};
var g=this.__du;

if(g){var length=g.length;
var h;

for(var i=0;i<length;i++){h=g[i];

if(h.__di&&h.__dh&&!h.__df){h.__dw();
}}}
if(!this.__df){this.__df=this._createDomElement();
this.__df.$$hash=this.$$hash;
this._copyData(false);

if(g&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dv){this._syncChildren();
}}delete this.__dv;
},_insertChildren:function(){var dx=this.__du;
var length=dx.length;
var dz;

if(length>2){var dy=document.createDocumentFragment();

for(var i=0;i<length;i++){dz=dx[i];

if(dz.__df&&dz.__dh){dy.appendChild(dz.__df);
}}this.__df.appendChild(dy);
}else{var dy=this.__df;

for(var i=0;i<length;i++){dz=dx[i];

if(dz.__df&&dz.__dh){dy.appendChild(dz.__df);
}}}},_syncChildren:function(){var ba=qx.core.ObjectRegistry;
var Q=this.__du;
var X=Q.length;
var R;
var V;
var T=this.__df;
var W=T.childNodes;
var S=0;
var U;
var Y;
for(var i=W.length-1;i>=0;i--){U=W[i];
V=ba.fromHashCode(U.$$hash);

if(!V||!V.__dh||V.__dz!==this){T.removeChild(U);
{};
}}for(var i=0;i<X;i++){R=Q[i];
if(R.__dh){V=R.__df;
U=W[S];

if(!V){continue;
}if(V!=U){if(U){T.insertBefore(V,U);
}else{T.appendChild(V);
}{};
}S++;
}}{};
},_copyData:function(by){var bC=this.__df;
var bB=this.__dr;

if(bB){var bz=qx.bom.element.Attribute;

for(var bD in bB){bz.set(bC,bD,bB[bD]);
}}var bB=this.__dq;

if(bB){var bA=qx.bom.element.Style;

if(by){for(var bD in bB){bA.set(bC,bD,bB[bD]);
}}else{bA.setCss(bC,bA.compile(bB));
}}var bB=this.__ds;

if(bB){for(var bD in bB){this._applyProperty(bD,bB[bD]);
}}var bB=this.__dt;

if(bB){qx.event.Registration.getManager(bC).importListeners(bC,bB);
delete this.__dt;
}},_syncData:function(){var bi=this.__df;
var bh=qx.bom.element.Attribute;
var bf=qx.bom.element.Style;
var bg=this.__do;

if(bg){var bm=this.__dr;

if(bm){var bj;

for(var bk in bg){bj=bm[bk];

if(bj!==undefined){bh.set(bi,bk,bj);
}else{bh.reset(bi,bk);
}}}this.__do=null;
}var bg=this.__dn;

if(bg){var bm=this.__dq;

if(bm){var bj;

for(var bk in bg){bj=bm[bk];

if(bj!==undefined){bf.set(bi,bk,bj);
}else{bf.reset(bi,bk);
}}}this.__dn=null;
}var bg=this.__dp;

if(bg){var bm=this.__ds;

if(bm){var bj;

for(var bk in bg){this._applyProperty(bk,bm[bk]);
}}this.__dp=null;
}},__dx:function(){var bv=this;
while(bv){if(bv.__dg){return true;
}
if(!bv.__dh||!bv.__di){return false;
}bv=bv.__dz;
}return false;
},__dy:function(bK){if(bK.__dz===this){throw new Error("Child is already in: "+bK);
}
if(bK.__dg){throw new Error("Root elements could not be inserted into other ones.");
}if(bK.__dz){bK.__dz.remove(bK);
}bK.__dz=this;
if(!this.__du){this.__du=[];
}if(this.__df){this._scheduleChildrenUpdate();
}},__dA:function(cM){if(cM.__dz!==this){throw new Error("Has no child: "+cM);
}if(this.__df){this._scheduleChildrenUpdate();
}delete cM.__dz;
},__dB:function(cg){if(cg.__dz!==this){throw new Error("Has no child: "+cg);
}if(this.__df){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__du||null;
},getChild:function(cW){var cX=this.__du;
return cX&&cX[cW]||null;
},hasChildren:function(){var ce=this.__du;
return ce&&ce[0]!==undefined;
},indexOf:function(bR){var bS=this.__du;
return bS?bS.indexOf(bR):-1;
},hasChild:function(ch){var ci=this.__du;
return ci&&ci.indexOf(ch)!==-1;
},add:function(d){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dy(arguments[i]);
}this.__du.push.apply(this.__du,arguments);
}else{this.__dy(d);
this.__du.push(d);
}return this;
},addAt:function(cc,cd){this.__dy(cc);
qx.lang.Array.insertAt(this.__du,cc,cd);
return this;
},remove:function(cr){var cs=this.__du;

if(!cs){return;
}
if(arguments[1]){var ct;

for(var i=0,l=arguments.length;i<l;i++){ct=arguments[i];
this.__dA(ct);
qx.lang.Array.remove(cs,ct);
}}else{this.__dA(cr);
qx.lang.Array.remove(cs,cr);
}return this;
},removeAt:function(bT){var bU=this.__du;

if(!bU){throw new Error("Has no children!");
}var bV=bU[bT];

if(!bV){throw new Error("Has no child at this position!");
}this.__dA(bV);
qx.lang.Array.removeAt(this.__du,bT);
return this;
},removeAll:function(){var cf=this.__du;

if(cf){for(var i=0,l=cf.length;i<l;i++){this.__dA(cf[i]);
}cf.length=0;
}return this;
},getParent:function(){return this.__dz||null;
},insertInto:function(parent,bn){parent.__dy(this);

if(bn==null){parent.__du.push(this);
}else{qx.lang.Array.insertAt(this.__du,this,bn);
}return this;
},insertBefore:function(bx){var parent=bx.__dz;
parent.__dy(this);
qx.lang.Array.insertBefore(parent.__du,this,bx);
return this;
},insertAfter:function(cI){var parent=cI.__dz;
parent.__dy(this);
qx.lang.Array.insertAfter(parent.__du,this,cI);
return this;
},moveTo:function(bF){var parent=this.__dz;
parent.__dB(this);
var bG=parent.__du.indexOf(this);

if(bG===bF){throw new Error("Could not move to same index!");
}else if(bG<bF){bF--;
}qx.lang.Array.removeAt(parent.__du,bG);
qx.lang.Array.insertAt(parent.__du,this,bF);
return this;
},moveBefore:function(bc){var parent=this.__dz;
return this.moveTo(parent.__du.indexOf(bc));
},moveAfter:function(cN){var parent=this.__dz;
return this.moveTo(parent.__du.indexOf(cN)+1);
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
},setRoot:function(cU){this.__dg=cU;
},useMarkup:function(cS){if(this.__df){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(s,p)){var cT=document.createElement(r);
}else{var cT=qx.html.Element.__dC;

if(!cT){cT=qx.html.Element.__dC=document.createElement(r);
}}cT.innerHTML=cS;
this.__df=cT.firstChild;
this.__df.$$hash=this.$$hash;
this._copyData(true);
return this.__df;
},useElement:function(cq){if(this.__df){throw new Error("Could not overwrite existing element!");
}this.__df=cq;
this.__df.$$hash=this.$$hash;
this._copyData(true);
},isFocusable:function(){var bO=this.getAttribute(E);

if(bO>=1){return true;
}var bN=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bO>=0&&bN[this.__de]){return true;
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
qx.html.Element._scheduleFlush(t);
}if(this.__dz){this.__dz._scheduleChildrenUpdate();
}delete this.__di;
},hide:function(){if(!this.__di){return;
}
if(this.__df){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(t);
}this.__di=false;
},isVisible:function(){return this.__di===true;
},scrollChildIntoViewX:function(bW,bX,bY){var ca=this.__df;
var cb=bW.getDomElement();

if(bY!==false&&ca&&ca.offsetWidth&&cb&&cb.offsetWidth){qx.bom.element.Scroll.intoViewX(cb,ca,bX);
}else{this.__dj={element:bW,align:bX};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(t);
}delete this.__dl;
},scrollChildIntoViewY:function(dd,de,df){var dg=this.__df;
var dh=dd.getDomElement();

if(df!==false&&dg&&dg.offsetWidth&&dh&&dh.offsetWidth){qx.bom.element.Scroll.intoViewY(dh,dg,de);
}else{this.__dk={element:dd,align:de};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(t);
}delete this.__dm;
},scrollToX:function(x,bL){var bM=this.__df;

if(bL!==true&&bM&&bM.offsetWidth){bM.scrollLeft=x;
}else{this.__dl=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(t);
}delete this.__dj;
},getScrollX:function(){var O=this.__df;

if(O){return O.scrollLeft;
}return this.__dl||0;
},scrollToY:function(y,bd){var be=this.__df;

if(bd!==true&&be&&be.offsetWidth){be.scrollTop=y;
}else{this.__dm=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(t);
}delete this.__dk;
},getScrollY:function(){var bo=this.__df;

if(bo){return bo.scrollTop;
}return this.__dm||0;
},getSelection:function(){var cV=this.__df;

if(cV){return qx.bom.Selection.get(cV);
}return null;
},getSelectionLength:function(){var P=this.__df;

if(P){return qx.bom.Selection.getLength(P);
}return null;
},setSelection:function(dH,dI){var dJ=this.__df;

if(dJ){qx.bom.Selection.set(dJ,dH,dI);
}},clearSelection:function(){var cQ=this.__df;

if(cQ){qx.bom.Selection.clear(cQ);
}},__dD:function(bp){var bq=this.__df;
var br=qx.html.Element._actions;

if(bq&&br.length==0){return qx.bom.Element[bp](bq);
}br.push({type:bp,element:this});
qx.html.Element._scheduleFlush(t);
},focus:function(){this.__dD(k);
},blur:function(){this.__dD(N);
},activate:function(){this.__dD(C);
},deactivate:function(){this.__dD(M);
},capture:function(){this.__dD(L);
},releaseCapture:function(){this.__dD(F);
},setStyle:function(cJ,cK,cL){if(!this.__dq){this.__dq={};
}
if(this.__dq[cJ]==cK){return;
}
if(cK==null){delete this.__dq[cJ];
}else{this.__dq[cJ]=cK;
}if(this.__df){if(cL){qx.bom.element.Style.set(this.__df,cJ,cK);
return this;
}if(!this.__dn){this.__dn={};
}this.__dn[cJ]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(t);
}return this;
},setStyles:function(cF,cG){for(var cH in cF){this.setStyle(cH,cF[cH],cG);
}return this;
},removeStyle:function(cO,cP){this.setStyle(cO,null,cP);
},getStyle:function(bw){return this.__dq?this.__dq[bw]:null;
},getAllStyles:function(){return this.__dq||null;
},setAttribute:function(bH,bI,bJ){if(!this.__dr){this.__dr={};
}
if(this.__dr[bH]==bI){return;
}
if(bI==null){delete this.__dr[bH];
}else{this.__dr[bH]=bI;
}if(this.__df){if(bJ){qx.bom.element.Attribute.set(this.__df,bH,bI);
return this;
}if(!this.__do){this.__do={};
}this.__do[bH]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(t);
}return this;
},setAttributes:function(bs,bt){for(var bu in bs){this.setAttribute(bu,bs[bu],bt);
}return this;
},removeAttribute:function(cY,da){this.setAttribute(cY,null,da);
},getAttribute:function(dA){return this.__dr?this.__dr[dA]:null;
},_applyProperty:function(name,dc){},_setProperty:function(cz,cA,cB){if(!this.__ds){this.__ds={};
}
if(this.__ds[cz]==cA){return;
}
if(cA==null){delete this.__ds[cz];
}else{this.__ds[cz]=cA;
}if(this.__df){if(cB){this._applyProperty(cz,cA);
return this;
}if(!this.__dp){this.__dp={};
}this.__dp[cz]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(t);
}return this;
},_removeProperty:function(bP,bQ){this._setProperty(bP,null,bQ);
},_getProperty:function(cC){var cD=this.__ds;

if(!cD){return null;
}var cE=cD[cC];
return cE==null?null:cE;
},addListener:function(dB,dC,self,dD){if(this.$$disposed){return null;
}var dE;

if(this.__df){return qx.event.Registration.addListener(this.__df,dB,dC,self,dD);
}
if(!this.__dt){this.__dt={};
}
if(dD==null){dD=false;
}var dF=qx.event.Manager.getNextUniqueId();
var dG=dB+(dD?n:v)+dF;
this.__dt[dG]={type:dB,listener:dC,self:self,capture:dD,unique:dF};
return dG;
},removeListener:function(cj,ck,self,cl){if(this.$$disposed){return null;
}var cm;

if(this.__df){qx.event.Registration.removeListener(this.__df,cj,ck,self,cl);
}else{var co=this.__dt;
var cn;

if(cl==null){cl=false;
}
for(var cp in co){cn=co[cp];
if(cn.listener===ck&&cn.self===self&&cn.capture===cl&&cn.type===cj){delete co[cp];
break;
}}}return this;
},removeListenerById:function(cR){if(this.$$disposed){return null;
}
if(this.__df){qx.event.Registration.removeListenerById(this.__df,cR);
}else{delete this.__dt[cR];
}return this;
},hasListener:function(cu,cv){if(this.$$disposed){return false;
}
if(this.__df){return qx.event.Registration.hasListener(this.__df,cu,cv);
}var cx=this.__dt;
var cw;

if(cv==null){cv=false;
}
for(var cy in cx){cw=cx[cy];
if(cw.capture===cv&&cw.type===cu){return true;
}}return false;
}},defer:function(dw){dw.__dE=new qx.util.DeferredCall(dw.flush,dw);
},destruct:function(){var bE=this.__df;

if(bE){qx.event.Registration.getManager(bE).removeAllListeners(bE);
bE.$$hash=q;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dz;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(I);
this._disposeFields(A,J,z,H,u,G,B,m,j,K,w);
}});
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
var c=self.__dG;

while(c.visibility||c.widget||c.appearance||c.layout||c.element){if(c.widget){delete c.widget;
qx.ui.core.queue.Widget.flush();
}
if(c.visibility){delete c.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(c.appearance){delete c.appearance;
qx.ui.core.queue.Appearance.flush();
}if(c.widget||c.visibility||c.appearance){continue;
}
if(c.layout){delete c.layout;
qx.ui.core.queue.Layout.flush();
}if(c.widget||c.visibility||c.appearance||c.layout){continue;
}
if(c.element){delete c.element;
qx.html.Element.flush();
}}qx.ui.core.queue.Manager.__dF=false;

if(c.dispose){delete c.dispose;
qx.ui.core.queue.Dispose.flush();
}self.__dH=false;
}},defer:function(e){e.__dI=new qx.util.DeferredCall(e.flush);
qx.html.Element._scheduleFlush=e.scheduleFlush;
qx.event.Registration.addListener(window,a,e.flush);
}});
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
}},intoViewY:function(o,stop,p){var parent=o.parentNode;
var v=qx.dom.Node.getDocument(o);
var q=v.body;
var D,r,z;
var F,C,x;
var t,u,s;
var H,I,E,y;
var B,w,J;
var G=p===d;
var A=p===e;
stop=stop?stop.parentNode:v;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===q||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===q){r=parent.scrollTop;
z=r+qx.bom.Viewport.getHeight();
F=qx.bom.Viewport.getHeight();
C=parent.clientHeight;
x=parent.scrollHeight;
t=0;
u=0;
s=0;
}else{D=qx.bom.element.Location.get(parent);
r=D.top;
z=D.bottom;
F=parent.offsetHeight;
C=parent.clientHeight;
x=parent.scrollHeight;
t=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
u=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
s=F-C-t-u;
}H=qx.bom.element.Location.get(o);
I=H.top;
E=H.bottom;
y=o.offsetHeight;
B=I-r-t;
w=E-z+u;
J=0;
if(G){J=B;
}else if(A){J=w+s;
}else if(B<0||y>C){J=B;
}else if(w>0){J=w+s;
}parent.scrollTop+=J;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===q){break;
}parent=parent.parentNode;
}},intoView:function(l,stop,m,n){this.intoViewX(l,stop,m);
this.intoViewY(l,stop,n);
}}});
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
(function(){var K="qx.client",J="mouseup",I="mousedown",H="click",G="contextmenu",F="dblclick",E="mousewheel",D="mouseover",C="mouseout",B="DOMMouseScroll",v="mousemove",A="mshtml|webkit|opera",y="__ei",u="useraction",t="__ej",x="__ek",w="qx.event.handler.Mouse",z="gecko|webkit",s="__ep";
qx.Class.define(w,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(ba){arguments.callee.base.call(this);
this.__ei=ba;
this.__ej=ba.getWindow();
this.__ek=this.__ej.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__el:null,__em:null,__en:null,__eo:null,__ep:null,__ei:null,__ej:null,__ek:null,canHandleEvent:function(k,l){},registerEvent:function(W,X,Y){},unregisterEvent:function(T,U,V){},__eq:function(m,n,o){if(!o){o=m.target||m.srcElement;
}if(o&&o.nodeType){qx.event.Registration.fireEvent(o,n||m.type,qx.event.type.Mouse,[m,o,null,true,true]);
}qx.event.Registration.fireEvent(this.__ej,u,qx.event.type.Data,[n||m.type]);
},_initButtonObserver:function(){this.__el=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ek,I,this.__el);
Event.addNativeListener(this.__ek,J,this.__el);
Event.addNativeListener(this.__ek,H,this.__el);
Event.addNativeListener(this.__ek,F,this.__el);
Event.addNativeListener(this.__ek,G,this.__el);
},_initMoveObserver:function(){this.__em=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ek,v,this.__em);
Event.addNativeListener(this.__ek,D,this.__em);
Event.addNativeListener(this.__ek,C,this.__em);
},_initWheelObserver:function(){this.__en=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var d=qx.core.Variant.isSet(K,A)?E:B;
Event.addNativeListener(this.__ek,d,this.__en);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ek,I,this.__el);
Event.removeNativeListener(this.__ek,J,this.__el);
Event.removeNativeListener(this.__ek,H,this.__el);
Event.removeNativeListener(this.__ek,F,this.__el);
Event.removeNativeListener(this.__ek,G,this.__el);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ek,v,this.__em);
Event.removeNativeListener(this.__ek,D,this.__em);
Event.removeNativeListener(this.__ek,C,this.__em);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var S=qx.core.Variant.isSet(K,A)?E:B;
Event.removeNativeListener(this.__ek,S,this.__en);
},_onMoveEvent:function(O){this.__eq(O);
},_onButtonEvent:function(L){var M=L.type;
var N=L.target||L.srcElement;
if(qx.core.Variant.isSet(K,z)){if(N&&N.nodeType==3){N=N.parentNode;
}}
if(this.__er){this.__er(L,M,N);
}
if(this.__et){this.__et(L,M,N);
}this.__eq(L,M,N);

if(this.__es){this.__es(L,M,N);
}
if(this.__eu){this.__eu(L,M,N);
}this.__eo=M;
},_onWheelEvent:function(j){this.__eq(j,E);
},__er:qx.core.Variant.select(K,{"webkit":function(P,Q,R){if(Q==G){this.__eq(P,I,R);
this.__eq(P,J,R);
}},"default":null}),__es:qx.core.Variant.select(K,{"opera":function(a,b,c){if(b==J&&a.button==2){this.__eq(a,G,c);
}},"default":null}),__et:qx.core.Variant.select(K,{"mshtml":function(p,q,r){if(q==J&&this.__eo==H){this.__eq(p,I,r);
}else if(q==F){this.__eq(p,H,r);
}},"default":null}),__eu:qx.core.Variant.select(K,{"mshtml":null,"default":function(e,f,g){switch(f){case I:this.__ep=g;
break;
case J:if(g!==this.__ep){var h=qx.dom.Hierarchy.getCommonParent(g,this.__ep);
this.__eq(e,H,h);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(y,t,x,s);
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var I="alias",H="copy",G="blur",F="mouseout",E="keydown",D="Ctrl",C="Shift",B="mousemove",A="move",z="mouseover",bh="Alt",bg="keyup",bf="mouseup",be="dragend",bd="on",bc="mousedown",bb="qxDraggable",ba="drag",Y="__ez",X="__eA",P="__eC",Q="drop",N="qxDroppable",O="qx.event.handler.DragDrop",L="__ew",M="droprequest",J="__eN",K="dragstart",R="__eJ",S="dragchange",U="__eB",T="dragleave",W="dragover",V="__ev";
qx.Class.define(O,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bm){arguments.callee.base.call(this);
this.__ev=bm;
this.__ew=bm.getWindow().document.documentElement;
this.__ev.addListener(this.__ew,bc,this._onMouseDown,this);
this.__ey();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(bn,bo,bp){},unregisterEvent:function(c,d,f){},addType:function(g){this.__ez[g]=true;
},addAction:function(u){this.__eA[u]=true;
},supportsType:function(bt){return !!this.__ez[bt];
},supportsAction:function(t){return !!this.__eA[t];
},getData:function(bj){if(!this.__eM||!this.__eN){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__ez[bj]){throw new Error("Unsupported data type: "+bj+"!");
}
if(!this.__eC[bj]){this.__ex=bj;
this.__eF(M,this.__eJ,false);
}
if(!this.__eC[bj]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__eC[bj]||null;
},getCurrentAction:function(){return this.__eE;
},addData:function(n,o){this.__eC[n]=o;
},getCurrentType:function(){return this.__ex;
},__ey:function(){this.__ez={};
this.__eA={};
this.__eB={};
this.__eC={};
},__eD:function(){var bs=this.__eA;
var bq=this.__eB;
var br=null;

if(this.__eM){if(bq.Shift&&bq.Ctrl&&bs.alias){br=I;
}else if(bq.Shift&&bq.Alt&&bs.copy){br=H;
}else if(bq.Shift&&bs.move){br=A;
}else if(bq.Alt&&bs.alias){br=I;
}else if(bq.Ctrl&&bs.copy){br=H;
}else if(bs.move){br=A;
}else if(bs.copy){br=H;
}else if(bs.alias){br=I;
}}
if(br!=this.__eE){this.__eE=br;
this.__eF(S,this.__eJ,false);
}},__eF:function(h,i,j,k){var m=qx.event.Registration;
var l=m.createEvent(h,qx.event.type.Drag,[j,k]);

if(this.__eJ!==this.__eN){if(i==this.__eJ){l.setRelatedTarget(this.__eN);
}else{l.setRelatedTarget(this.__eJ);
}}return m.dispatchEvent(i,l);
},__eG:function(x){while(x&&x.nodeType==1){if(x.getAttribute(bb)==bd){return x;
}x=x.parentNode;
}return null;
},__eH:function(r){while(r&&r.nodeType==1){if(r.getAttribute(N)==bd){return r;
}r=r.parentNode;
}return null;
},__eI:function(){this.__eJ=null;
this.__ev.removeListener(this.__ew,B,this._onMouseMove,this,true);
this.__ev.removeListener(this.__ew,bf,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,G,this._onWindowBlur,this);
this.__ey();
},__eK:function(){if(this.__eL){this.__ev.removeListener(this.__ew,z,this._onMouseOver,this,true);
this.__ev.removeListener(this.__ew,F,this._onMouseOut,this,true);
this.__ev.removeListener(this.__ew,E,this._onKeyDown,this,true);
this.__ev.removeListener(this.__ew,bg,this._onKeyUp,this,true);
this.__eF(be,this.__eJ,false);
this.__eL=false;
}this.__eM=false;
this.__eN=null;
this.__eI();
},__eM:false,_onWindowBlur:function(e){this.__eK();
},_onKeyDown:function(e){var y=e.getKeyIdentifier();

switch(y){case bh:case D:case C:if(!this.__eB[y]){this.__eB[y]=true;
this.__eD();
}}},_onKeyUp:function(e){var s=e.getKeyIdentifier();

switch(s){case bh:case D:case C:if(this.__eB[s]){this.__eB[s]=false;
this.__eD();
}}},_onMouseDown:function(e){if(this.__eL){return;
}var bi=this.__eG(e.getTarget());

if(bi){this.__eO=e.getDocumentLeft();
this.__eP=e.getDocumentTop();
this.__eJ=bi;
this.__ev.addListener(this.__ew,B,this._onMouseMove,this,true);
this.__ev.addListener(this.__ew,bf,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,G,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__eM){this.__eF(Q,this.__eN,false,e);
}if(this.__eL){e.stopPropagation();
}this.__eK();
},_onMouseMove:function(e){if(this.__eL){if(!this.__eF(ba,this.__eJ,true,e)){this.__eK();
}}else{if(Math.abs(e.getDocumentLeft()-this.__eO)>3||Math.abs(e.getDocumentTop()-this.__eP)>3){if(this.__eF(K,this.__eJ,true,e)){this.__eL=true;
this.__ev.addListener(this.__ew,z,this._onMouseOver,this,true);
this.__ev.addListener(this.__ew,F,this._onMouseOut,this,true);
this.__ev.addListener(this.__ew,E,this._onKeyDown,this,true);
this.__ev.addListener(this.__ew,bg,this._onKeyUp,this,true);
var v=this.__eB;
v.Ctrl=e.isCtrlPressed();
v.Shift=e.isShiftPressed();
v.Alt=e.isAltPressed();
this.__eD();
}else{this.__eF(be,this.__eJ,false);
this.__eI();
}}}},_onMouseOver:function(e){var p=e.getTarget();
var q=this.__eH(p);

if(q&&q!=this.__eN){this.__eM=this.__eF(W,q,true,e);
this.__eN=q;
this.__eD();
}},_onMouseOut:function(e){var bk=e.getTarget();
var bl=this.__eH(bk);

if(bl&&bl==this.__eN){this.__eF(T,this.__eN,false,e);
this.__eN=null;
this.__eM=false;
this.__eD();
}}},destruct:function(){this._disposeFields(R,J,V,L,Y,X,U,P);
},defer:function(w){qx.event.Registration.addHandler(w);
}});
})();
(function(){var k="-",j="qx.event.handler.Element",i="_manager",h="_registeredEvents";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this._manager=r;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(l,m){},registerEvent:function(w,x,y){var B=qx.core.ObjectRegistry.toHashCode(w);
var z=B+k+x;
var A=qx.lang.Function.listener(this._onNative,this,z);
qx.bom.Event.addNativeListener(w,x,A);
this._registeredEvents[z]={element:w,type:x,listener:A};
},unregisterEvent:function(a,b,c){var f=this._registeredEvents;

if(!f){return;
}var g=qx.core.ObjectRegistry.toHashCode(a);
var d=g+k+b;
var e=this._registeredEvents[d];
qx.bom.Event.removeNativeListener(a,b,e.listener);
delete this._registeredEvents[d];
},_onNative:function(n,o){var q=this._registeredEvents;

if(!q){return;
}var p=q[o];
qx.event.Registration.fireNonBubblingEvent(p.element,p.type,qx.event.type.Native,[n]);
}},destruct:function(){var s;
var t=this._registeredEvents;

for(var u in t){s=t[u];
qx.bom.Event.removeNativeListener(s.element,s.type,s.listener);
}this._disposeFields(i,h);
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var r="qx.event.handler.Appear",q="__eQ",p="__eR",o="disappear",n="appear";
qx.Class.define(r,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__eQ=a;
this.__eR={};
qx.event.handler.Appear.__eS[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__eS:{},refresh:function(){var s=this.__eS;

for(var t in s){s[t].refresh();
}}},members:{canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i);
var m=this.__eR;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(v,w,x){var y=qx.core.ObjectRegistry.toHashCode(v);
var z=this.__eR;

if(!z){return;
}
if(z[y]){delete z[y];
v.$$displayed=null;
}},refresh:function(){var e=this.__eR;
var f;

for(var d in e){f=e[d];
var b=f.offsetWidth>0;

if((!!f.$$displayed)!==b){f.$$displayed=b;
var c=qx.event.Registration.createEvent(b?n:o);
this.__eQ.dispatchEvent(f,c);
}}}},destruct:function(){this._disposeFields(q,p);
delete qx.event.handler.Appear.__eS[this.$$hash];
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var C="mshtml",B="",A="qx.client",z=">",y="<",x=" ",w="='",v="http://www.w3.org/1999/xhtml",u="qx.bom.Element",t="div",r="' ",s="></";
qx.Class.define(u,{statics:{__eT:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,R,S){if(!S){S=window;
}
if(!name){throw new Error("The tag name is missing!");
}var U=this.__eT;
var T=B;

for(var W in R){if(U[W]){T+=W+w+R[W]+r;
}}var X;
if(T!=B){if(qx.bom.client.Engine.MSHTML){X=S.document.createElement(y+name+x+T+z);
}else{var V=S.document.createElement(t);
V.innerHTML=y+name+x+T+s+name+z;
X=V.firstChild;
}}else{if(S.document.createElementNS){X=S.document.createElementNS(v,name);
}else{X=S.document.createElement(name);
}}
for(var W in R){if(!U[W]){qx.bom.element.Attribute.set(X,W,R[W]);
}}return X;
},empty:function(p){return p.innerHTML=B;
},addListener:function(D,E,F,self,G){return qx.event.Registration.addListener(D,E,F,self,G);
},removeListener:function(K,L,M,self,N){return qx.event.Registration.removeListener(K,L,M,self,N);
},removeListenerById:function(Y,ba){return qx.event.Registration.removeListenerById(Y,ba);
},hasListener:function(H,I,J){return qx.event.Registration.hasListener(H,I,J);
},focus:function(P){qx.event.Registration.getManager(P).getHandler(qx.event.handler.Focus).focus(P);
},blur:function(Q){qx.event.Registration.getManager(Q).getHandler(qx.event.handler.Focus).blur(Q);
},activate:function(O){qx.event.Registration.getManager(O).getHandler(qx.event.handler.Focus).activate(O);
},deactivate:function(q){qx.event.Registration.getManager(q).getHandler(qx.event.handler.Focus).deactivate(q);
},capture:function(bb){qx.event.Registration.getManager(bb).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bb);
},releaseCapture:function(bc){qx.event.Registration.getManager(bc).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bc);
},clone:function(a,b){var e;

if(b||(qx.core.Variant.isSet(A,C)&&!qx.xml.Document.isXmlDocument(a))){var k=qx.event.Registration.getManager(a);
var c=qx.dom.Hierarchy.getDescendants(a);
c.push(a);
}if(qx.core.Variant.isSet(A,C)){for(var i=0,l=c.length;i<l;i++){k.toggleAttachedEvents(c[i],false);
}}var e=a.cloneNode(true);
if(qx.core.Variant.isSet(A,C)){for(var i=0,l=c.length;i<l;i++){k.toggleAttachedEvents(c[i],true);
}}if(b===true){var o=qx.dom.Hierarchy.getDescendants(e);
o.push(e);
var d,g,n,f;

for(var i=0,m=c.length;i<m;i++){n=c[i];
d=k.serializeListeners(n);

if(d.length>0){g=o[i];

for(var j=0,h=d.length;j<h;j++){f=d[j];
k.addListener(g,f.type,f.handler,f.self,f.capture);
}}}}return e;
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
(function(){var p="qx.client",o="left",n="right",m="middle",l="dblclick",k="click",j="none",i="contextmenu",h="qx.event.type.Mouse";
qx.Class.define(h,{extend:qx.event.type.Dom,members:{init:function(b,c,d,e,f){arguments.callee.base.call(this,b,c,d,e,f);

if(!d){this._relatedTarget=qx.bom.Event.getRelatedTarget(b);
}return this;
},__fv:qx.core.Variant.select(p,{"mshtml":{1:o,2:n,4:m},"default":{0:o,2:n,1:m}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case k:case l:return o;
case i:return n;
default:return this.__fv[this._native.button]||j;
}},isLeftPressed:function(){return this.getButton()===o;
},isMiddlePressed:function(){return this.getButton()===m;
},isRightPressed:function(){return this.getButton()===n;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(p,{"mshtml":function(){var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(g);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(p,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(a);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
},getWheelDelta:qx.core.Variant.select(p,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
}})}});
})();
(function(){var i="qx.client",h="qx.event.type.Drag";
qx.Class.define(h,{extend:qx.event.type.Event,members:{init:function(l,m){arguments.callee.base.call(this,false,l);

if(m){this._native=m.getNativeEvent()||null;
this._originalTarget=m.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._native=this._native;
return f;
},getDocumentLeft:qx.core.Variant.select(i,{"mshtml":function(){if(this._native==null){return 0;
}var d=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(d);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(i,{"mshtml":function(){if(this._native==null){return 0;
}var c=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(c);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(g){this.getManager().addType(g);
},addAction:function(k){this.getManager().addAction(k);
},supportsType:function(o){return this.getManager().supportsType(o);
},supportsAction:function(j){return this.getManager().supportsAction(j);
},addData:function(a,b){this.getManager().addData(a,b);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
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
(function(){var B="textarea",A="input",z="qx.client",y="character",x="qx.bom.Selection",w="#text",v="EndToEnd",u="button",t="body";
qx.Class.define(x,{statics:{getSelectionObject:qx.core.Variant.select(z,{"mshtml":function(C){return C.selection;
},"default":function(E){return qx.dom.Node.getWindow(E).getSelection();
}}),get:qx.core.Variant.select(z,{"mshtml":function(N){var O=qx.bom.Range.get(qx.dom.Node.getDocument(N));
return O.text;
},"default":function(D){if(qx.dom.Node.isElement(D)&&(D.nodeName.toLowerCase()==A||D.nodeName.toLowerCase()==B)){return D.value.substring(D.selectionStart,D.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(D)).toString();
}return null;
}}),getLength:qx.core.Variant.select(z,{"mshtml":function(G){var I=qx.bom.Selection.get(G);
var H=qx.util.StringSplit.split(I,/\r\n/);
return I.length-(H.length-1);
},"opera":function(P){var U,S,Q;

if(qx.dom.Node.isElement(P)&&(P.nodeName.toLowerCase()==A||P.nodeName.toLowerCase()==B)){var T=P.selectionStart;
var R=P.selectionEnd;
U=P.value.substring(T,R);
S=R-T;
}else{U=qx.bom.Selection.get(P);
S=U.length;
}Q=qx.util.StringSplit.split(U,/\r\n/);
return S-(Q.length-1);
},"default":function(F){if(qx.dom.Node.isElement(F)&&(F.nodeName.toLowerCase()==A||F.nodeName.toLowerCase()==B)){return F.selectionEnd-F.selectionStart;
}else{return qx.bom.Selection.get(F).length;
}return null;
}}),set:qx.core.Variant.select(z,{"mshtml":function(h,i,j){var k;
if(qx.dom.Node.isDocument(h)){h=h.body;
}
if(qx.dom.Node.isElement(h)||qx.dom.Node.isText(h)){switch(h.nodeName.toLowerCase()){case A:case B:case u:if(j===undefined){j=h.value.length;
}
if(i>=0&&i<=h.value.length&&j>=0&&j<=h.value.length){k=qx.bom.Range.get(h);
k.collapse(true);
k.moveStart(y,i);
k.moveEnd(y,j);
k.select();
return true;
}break;
case w:if(j===undefined){j=h.nodeValue.length;
}
if(i>=0&&i<=h.nodeValue.length&&j>=0&&j<=h.nodeValue.length){k=qx.bom.Range.get(qx.dom.Node.getBodyElement(h));
k.moveToElementText(h.parentNode);
k.collapse(true);
k.moveStart(y,i);
k.moveEnd(y,j);
k.select();
return true;
}break;
default:if(j===undefined){j=h.childNodes.length-1;
}if(h.childNodes[i]&&h.childNodes[j]){k=qx.bom.Range.get(qx.dom.Node.getBodyElement(h));
k.moveToElementText(h.childNodes[i]);
k.collapse(true);
var l=qx.bom.Range.get(qx.dom.Node.getBodyElement(h));
l.moveToElementText(h.childNodes[j]);
k.setEndPoint(v,l);
k.select();
return true;
}}}return false;
},"default":function(a,b,c){var g=a.nodeName.toLowerCase();

if(qx.dom.Node.isElement(a)&&(g==A||g==B)){if(c===undefined){c=a.value.length;
}if(b>=0&&b<=a.value.length&&c>=0&&c<=a.value.length){a.select();
a.setSelectionRange(b,c);
return true;
}}else{var e=false;
var f=qx.dom.Node.getWindow(a).getSelection();
var d=qx.bom.Range.get(a);
if(qx.dom.Node.isText(a)){if(c===undefined){c=a.length;
}
if(b>=0&&b<a.length&&c>=0&&c<=a.length){e=true;
}}else if(qx.dom.Node.isElement(a)){if(c===undefined){c=a.childNodes.length-1;
}
if(b>=0&&a.childNodes[b]&&c>=0&&a.childNodes[c]){e=true;
}}else if(qx.dom.Node.isDocument(a)){a=a.body;

if(c===undefined){c=a.childNodes.length-1;
}
if(b>=0&&a.childNodes[b]&&c>=0&&a.childNodes[c]){e=true;
}}
if(e){if(!f.isCollapsed){f.collapseToStart();
}d.setStart(a,b);
if(qx.dom.Node.isText(a)){d.setEnd(a,c);
}else{d.setEndAfter(a.childNodes[c]);
}if(f.rangeCount>0){f.removeAllRanges();
}f.addRange(d);
return true;
}}return false;
}}),setAll:function(m){return qx.bom.Selection.set(m,0);
},clear:qx.core.Variant.select(z,{"mshtml":function(J){var K=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(J));
var L=qx.bom.Range.get(J);
var parent=L.parentElement();
var M=qx.bom.Range.get(qx.dom.Node.getDocument(J));
if(parent==M.parentElement()&&parent==J){K.empty();
}},"default":function(n){var p=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(n));
var r=n.nodeName.toLowerCase();
if(qx.dom.Node.isElement(n)&&(r==A||r==B)){n.setSelectionRange(0,0);
qx.bom.Element.blur(n);
}else if(qx.dom.Node.isDocument(n)||r==t){p.collapse(n.body?n.body:n,0);
}else{var q=qx.bom.Range.get(n);

if(!q.collapsed){var s;
var o=q.commonAncestorContainer;
if(qx.dom.Node.isElement(n)&&qx.dom.Node.isText(o)){s=o.parentNode;
}else{s=o;
}
if(s==n){p.collapse(n,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
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
qx.Class.define(b,{statics:{__fA:{},remove:function(c){delete this.__fA[c.$$hash];
},add:function(d){var e=this.__fA;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__fA;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__fA={};
}}});
})();
(function(){var g="qx.ui.core.queue.Visibility",f="visibility";
qx.Class.define(g,{statics:{__fB:{},__fC:{},remove:function(n){var o=n.$$hash;
delete this.__fC[o];
delete this.__fB[o];
},isVisible:function(a){return this.__fC[a.$$hash]||false;
},__fD:function(h){var j=this.__fC;
var i=h.$$hash;
var k;
if(h.isExcluded()){k=false;
}else{var parent=h.$$parent;

if(parent){k=this.__fD(parent);
}else{k=h.isRootWidget();
}}return j[i]=k;
},add:function(l){var m=this.__fB;

if(m[l.$$hash]){return;
}m[l.$$hash]=l;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var b=this.__fB;
var e=this.__fC;
for(var c in b){if(e[c]!=null){b[c].addChildrenToQueue(b);
}}var d={};

for(var c in b){d[c]=e[c];
e[c]=null;
}for(var c in b){if(e[c]==null){this.__fD(b[c]);
}if(e[c]&&e[c]!=d[c]){b[c].checkAppearanceNeeds();
}}this.__fB={};
}}});
})();
(function(){var d="appearance",c="qx.ui.core.queue.Appearance";
qx.Class.define(c,{statics:{__fE:{},remove:function(e){delete this.__fE[e.$$hash];
},add:function(a){var b=this.__fE;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(d);
},has:function(j){return !!this.__fE[j.$$hash];
},flush:function(){var i=qx.ui.core.queue.Visibility;
var f=this.__fE;
var h;

for(var g in f){h=f[g];
delete f[g];
if(i.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
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
(function(){var m="blur",k="focus",j="input",h="load",g="qx.ui.core.EventHandler",f="activate",e="__gy";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__gy=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__gy:null,__gz:{focusin:1,focusout:1,focus:1,blur:1},__gA:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(n,o){return n instanceof qx.ui.core.Widget;
},_dispatchEvent:function(p){var u=p.getTarget();
var t=qx.ui.core.Widget.getWidgetByElement(u,true);
var v=false;

while(t&&t.isAnonymous()){var v=true;
t=t.getLayoutParent();
}if(v&&p.getType()==f){t.getContainerElement().activate();
}if(this.__gz[p.getType()]){t=t&&t.getFocusTarget();
if(!t){return;
}}if(p.getRelatedTarget){var C=p.getRelatedTarget();
var B=qx.ui.core.Widget.getWidgetByElement(C);

while(B&&B.isAnonymous()){B=B.getLayoutParent();
}
if(B){if(this.__gz[p.getType()]){B=B.getFocusTarget();
}if(B===t){return;
}}}var x=p.getCurrentTarget();
var z=qx.ui.core.Widget.getWidgetByElement(x);

if(!z||z.isAnonymous()){return;
}if(this.__gz[p.getType()]){z=z.getFocusTarget();
}var A=p.getType();

if(!(z.isEnabled()||this.__gA[A])){return;
}var q=p.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var w=this.__gy.getListeners(z,A,q);

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
},registerEvent:function(a,b,c){var d;

if(b===k||b===m){d=a.getFocusElement();
}else if(b===h||b===j){d=a.getContentElement();
}else{d=a.getContainerElement();
}
if(d){d.addListener(b,this._dispatchEvent,this,c);
}},unregisterEvent:function(F,G,H){var I;

if(G===k||G===m){I=F.getFocusElement();
}else if(G===h||G===j){I=F.getContentElement();
}else{I=F.getContainerElement();
}
if(I){I.removeListener(G,this._dispatchEvent,this,H);
}}},destruct:function(){this._disposeFields(e);
},defer:function(E){qx.event.Registration.addHandler(E);
}});
})();
(function(){var z="string",y="Theme",x="__cJ",w="__cI",v="qx.theme.manager.Appearance",u=":",t="changeAppearanceTheme",s="changeTheme",r="/",q="singleton";
qx.Class.define(v,{type:q,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__cI={};
this.__cJ={};
},properties:{appearanceTheme:{check:y,nullable:true,event:t},theme:{check:y,nullable:true,event:s}},members:{__cK:{},__cI:null,__cJ:null,__cL:function(A,B){var F=B.appearances;
var I=F[A];
if(!I){var J=r;
var C=[];
var H=A.split(J);
var G;

while(!I&&H.length>0){C.unshift(H.pop());
var D=H.join(J);
I=F[D];

if(I){G=I.alias||I;

if(typeof G===z){var E=G+J+C.join(J);
return this.__cL(E,B);
}}}return null;
}else if(typeof I===z){return this.__cL(I,B);
}else if(I.include&&!I.style){return this.__cL(I.include,B);
}return A;
},styleFrom:function(a,b,c){if(!c){c=this.getTheme();
}var i=this.__cJ;
var d=i[a];

if(!d){d=i[a]=this.__cL(a,c);
}var n=c.appearances[d];

if(!n){this.warn("Missing appearance: "+a);
return null;
}if(!n.style){return null;
}var o=d;

if(b){var p=n.$$bits;

if(!p){p=n.$$bits={};
n.$$length=0;
}var g=0;

for(var j in b){if(p[j]==null){p[j]=1<<n.$$length++;
}g+=p[j];
}if(g>0){o+=u+g;
}}var h=this.__cI;

if(h[o]!==undefined){return h[o];
}if(!b){b=this.__cK;
}var l;
if(n.include||n.base){var f=n.style(b);
var e;

if(n.include){e=this.styleFrom(n.include,b,c);
}l={};
if(n.base){var k=this.styleFrom(d,b,n.base);

if(n.include){for(var m in k){if(!e.hasOwnProperty(m)&&!f.hasOwnProperty(m)){l[m]=k[m];
}}}else{for(var m in k){if(!f.hasOwnProperty(m)){l[m]=k[m];
}}}}if(n.include){for(var m in e){if(!f.hasOwnProperty(m)){l[m]=e[m];
}}}for(var m in f){l[m]=f[m];
}}else{l=n.style(b);
}return h[o]=l||null;
}},destruct:function(){this._disposeFields(w,x);
}});
})();
(function(){var m="replacement",l="Boolean",k="_applyScale",j="_applySource",i="-disabled.$1",h="changeSource",g="String",f="image",e="qx.ui.basic.Image";
qx.Class.define(e,{extend:qx.ui.core.Widget,construct:function(x){arguments.callee.base.call(this);

if(x){this.setSource(x);
}},properties:{source:{check:g,init:null,nullable:true,event:h,apply:j,themeable:true},scale:{check:l,init:false,themeable:true,apply:k},appearance:{refine:true,init:f},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__gH:null,__gI:null,_createContentElement:function(){return new qx.html.Image();
},_getContentHint:function(){return {width:this.__gH||0,height:this.__gI||0};
},_applyEnabled:function(n,o){arguments.callee.base.call(this,n,o);

if(this.getSource()){this._styleSource();
}},_applySource:function(p){this._styleSource();
},_applyScale:function(c){var d=this.getContentElement();
d.setScale(c);
},_styleSource:function(){var v=qx.util.AliasManager.getInstance().resolve(this.getSource());
var q=this.getContentElement();

if(!v){q.resetSource();
return;
}var r=qx.util.ResourceManager;
var w=qx.io2.ImageLoader;
if(r.has(v)){if(!this.getEnabled()){var u=v.replace(/\.([a-z]+)$/,i);

if(r.has(u)){v=u;
this.addState(m);
}else{this.removeState(m);
}}if(q.getSource()===v){return;
}q.setSource(v);
this.__gL(r.getImageWidth(v),r.getImageHeight(v));
}else if(w.isLoaded(v)){q.setSource(v);
var s=w.getWidth(v);
var t=w.getHeight(v);
this.__gL(s,t);
}else{var self;
if(!qx.io2.ImageLoader.isFailed(v)){qx.io2.ImageLoader.load(v,this.__gK,this);
}}},__gK:function(a,b){if(a!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(!b){this.warn("Image could not be loaded: "+a);
return;
}this._styleSource();
},__gL:function(y,z){if(y!==this.__gH||z!==this.__gI){this.__gH=y;
this.__gI=z;
qx.ui.core.queue.Layout.add(this);
}}}});
})();
(function(){var D="interval",C="Integer",B="resize",A="Boolean",z="disappear",y="bottom-left",x="offsetLeft",w="offsetRight",v="right-top",u="top-right",o="top-left",t="bottom-right",r="right-bottom",n="offsetBottom",m="qx.ui.core.MPlacement",q="left-top",p="left-bottom",s="shorthand",l="offsetTop";
qx.Mixin.define(m,{properties:{position:{check:[o,u,y,t,q,p,v,r],init:y,themeable:true},domMove:{check:A,init:false},smart:{check:A,init:true,themeable:true},offsetLeft:{check:C,init:0,themeable:true},offsetTop:{check:C,init:0,themeable:true},offsetRight:{check:C,init:0,themeable:true},offsetBottom:{check:C,init:0,themeable:true},offset:{group:[l,w,n,x],mode:s,themeable:true}},members:{__gM:null,__gN:null,getLayoutLocation:function(a){var d,c,e,top;
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
},moveTo:function(E,top){if(this.getDomMove()){this.setDomPosition(E,top);
}else{this.setLayoutProperties({left:E,top:top});
}},placeToWidget:function(M,N){if(N){this.__gN=qx.lang.Function.bind(this.placeToWidget,this,M,false);
qx.event.Idle.getInstance().addListener(D,this.__gN);
this.addListener(z,function(){if(this.__gN){qx.event.Idle.getInstance().removeListener(D,this.__gN);
this.__gN=null;
}},this);
}var O=M.getContainerLocation()||this.getLayoutLocation(M);
this.__gO(O);
},placeToMouse:function(event){var h=event.getDocumentLeft();
var top=event.getDocumentTop();
var g={left:h,top:top,right:h,bottom:top};
this.__gO(g);
},placeToElement:function(i,j){var location=qx.bom.element.Location.get(i);
var k={left:location.left,top:location.top,right:location.left+i.offsetWidth,bottom:location.top+i.offsetHeight};
if(j){this.__gN=qx.lang.Function.bind(this.placeToElement,this,i,false);
qx.event.Idle.getInstance().addListener(D,this.__gN);
this.addListener(z,function(){if(this.__gN){qx.event.Idle.getInstance().removeListener(D,this.__gN);
this.__gN=null;
}},this);
}this.__gO(k);
},placeToPoint:function(P){var Q={left:P.left,top:P.top,right:P.left,bottom:P.top};
this.__gO(Q);
},__gO:function(F){var L=this.getBounds();

if(L==null){if(!this.__gM){this.addListener(B,this.__gO);
}this.__gM=F;
return;
}else if(this.__gM){F=this.__gM;
delete this.__gM;
this.removeListener(B,this.__gO);
}var G=this.getLayoutParent().getBounds();
var J=this.getPosition();
var K=this.getSmart();
var H={left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
var I=qx.util.PlaceUtil.compute(L,G,F,J,K,H);
this.moveTo(I.left,I.top);
}}});
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
(function(){var f="source",e="scale",d="no-repeat",c="mshtml",b="qx.client",a="qx.html.Image";
qx.Class.define(a,{extend:qx.html.Element,members:{_applyProperty:function(name,m){arguments.callee.base.call(this,name,m);

if(name===f){var q=this.getDomElement();
var n=this.getAllStyles();
var o=this._getProperty(f);
var p=this._getProperty(e);
var r=p?e:d;
qx.bom.element.Decoration.update(q,o,r,n);
}},_createDomElement:function(){var i=this._getProperty(e);
var j=i?e:d;

if(qx.core.Variant.isSet(b,c)){var h=this._getProperty(f);
this.setNodeName(qx.bom.element.Decoration.getTagName(j,h));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(j));
}return arguments.callee.base.call(this);
},_copyData:function(g){return arguments.callee.base.call(this,true);
},setSource:function(l){this._setProperty(f,l);
return this;
},getSource:function(){return this._getProperty(f);
},resetSource:function(){this._removeProperty(f);
return this;
},setScale:function(k){this._setProperty(e,k);
return this;
},getScale:function(){return this._getProperty(e);
}}});
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
(function(){var G="__hg",F="keypress",E="focusout",D="__hf",C="__hd",B="activate",A="Tab",z="singleton",y="deactivate",x="__he",v="focusin",w="qx.ui.core.FocusHandler";
qx.Class.define(w,{extend:qx.core.Object,type:z,construct:function(){arguments.callee.base.call(this);
this.__hd={};
},members:{__hd:null,__he:null,__hf:null,__hg:null,connectTo:function(b){b.addListener(F,this.__hh,this);
b.addListener(v,this._onFocusIn,this,true);
b.addListener(E,this._onFocusOut,this,true);
b.addListener(B,this._onActivate,this,true);
b.addListener(y,this._onDeactivate,this,true);
},addRoot:function(bl){this.__hd[bl.$$hash]=bl;
},removeRoot:function(p){delete this.__hd[p.$$hash];
},getActiveWidget:function(){return this.__he;
},isActive:function(be){return this.__he==be;
},getFocusedWidget:function(){return this.__hf;
},isFocused:function(q){return this.__hf==q;
},isFocusRoot:function(h){return !!this.__hd[h.$$hash];
},_onActivate:function(e){var k=e.getTarget();
this.__he=k;
var j=this.__hi(k);

if(j!=this.__hg){this.__hg=j;
}},_onDeactivate:function(e){var c=e.getTarget();

if(this.__he==c){this.__he=null;
}},_onFocusIn:function(e){var a=e.getTarget();

if(a!=this.__hf){this.__hf=a;
a.visualizeFocus();
}},_onFocusOut:function(e){var J=e.getTarget();

if(J==this.__hf){this.__hf=null;
J.visualizeBlur();
}},__hh:function(e){if(e.getKeyIdentifier()!=A){return;
}
if(!this.__hg){return;
}e.stopPropagation();
e.preventDefault();
var bj=this.__hf;

if(!e.isShiftPressed()){var bk=bj?this.__hm(bj):this.__hk();
}else{var bk=bj?this.__hn(bj):this.__hl();
}if(bk){bk.tabFocus();
}},__hi:function(H){var I=this.__hd;

while(H){if(I[H.$$hash]){return H;
}H=H.getLayoutParent();
}return null;
},__hj:function(O,P){if(O===P){return 0;
}var R=O.getTabIndex()||0;
var Q=P.getTabIndex()||0;

if(R!=Q){return R-Q;
}var W=O.getContainerElement().getDomElement();
var V=P.getContainerElement().getDomElement();
var U=qx.bom.element.Location;
var T=U.get(W);
var S=U.get(V);
if(T.top!=S.top){return T.top-S.top;
}if(T.left!=S.left){return T.left-S.left;
}var X=O.getZIndex();
var Y=P.getZIndex();

if(X!=Y){return X-Y;
}return 0;
},__hk:function(){return this.__hq(this.__hg,null);
},__hl:function(){return this.__hr(this.__hg,null);
},__hm:function(r){var s=this.__hg;

if(s==r){return this.__hk();
}
while(r&&r.getAnonymous()){r=r.getLayoutParent();
}
if(r==null){return [];
}var t=[];
this.__ho(s,r,t);
t.sort(this.__hj);
var u=t.length;
return u>0?t[0]:this.__hk();
},__hn:function(bf){var bg=this.__hg;

if(bg==bf){return this.__hl();
}
while(bf&&bf.getAnonymous()){bf=bf.getLayoutParent();
}
if(bf==null){return [];
}var bh=[];
this.__hp(bg,bf,bh);
bh.sort(this.__hj);
var bi=bh.length;
return bi>0?bh[bi-1]:this.__hl();
},__ho:function(parent,ba,bb){var bc=parent.getLayoutChildren();
var bd;

for(var i=0,l=bc.length;i<l;i++){bd=bc[i];
if(!(bd instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bd)&&bd.isEnabled()){if(bd.isTabable()&&this.__hj(ba,bd)<0){bb.push(bd);
}this.__ho(bd,ba,bb);
}}},__hp:function(parent,K,L){var M=parent.getLayoutChildren();
var N;

for(var i=0,l=M.length;i<l;i++){N=M[i];
if(!(N instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(N)&&N.isEnabled()){if(N.isTabable()&&this.__hj(K,N)>0){L.push(N);
}this.__hp(N,K,L);
}}},__hq:function(parent,m){var n=parent.getLayoutChildren();
var o;

for(var i=0,l=n.length;i<l;i++){o=n[i];
if(!(o instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(o)&&o.isEnabled()){if(o.isTabable()){if(m==null||this.__hj(o,m)<0){m=o;
}}m=this.__hq(o,m);
}}return m;
},__hr:function(parent,d){var f=parent.getLayoutChildren();
var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];
if(!(g instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(g)&&g.isEnabled()){if(g.isTabable()){if(d==null||this.__hj(g,d)>0){d=g;
}}d=this.__hr(g,d);
}}return d;
}},destruct:function(){this._disposeMap(C);
this._disposeFields(D,x,G);
}});
})();
(function(){var d="abstract",c="__gC",b="qx.ui.layout.Abstract",a="__gB";
qx.Class.define(b,{type:d,extend:qx.core.Object,members:{__gB:null,_invalidChildrenCache:null,__gC:null,invalidateLayoutCache:function(){this.__gB=null;
},renderLayout:function(h,i){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gB){return this.__gB;
}return this.__gB=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(k){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var g=this.__gC;

if(g instanceof qx.ui.core.LayoutItem){g.clearSeparators();
}},_renderSeparator:function(e,f){this.__gC.renderSeparator(e,f);
},connectToWidget:function(j){if(j&&this.__gC){throw new Error("It is not possible to manually set the connected widget.");
}this.__gC=j;
this.invalidateChildrenCache();
},_applyLayoutChange:function(){if(this.__gC){this.__gC.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__gC.getLayoutChildren();
}},destruct:function(){this._disposeFields(c,a);
}});
})();
(function(){var h="qx.ui.layout.Basic";
qx.Class.define(h,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(a,b){var f=this._getLayoutChildren();
var c,e,d,g,top;
for(var i=0,l=f.length;i<l;i++){c=f[i];
e=c.getSizeHint();
d=c.getLayoutProperties();
g=(d.left||0)+c.getMarginLeft();
top=(d.top||0)+c.getMarginTop();
c.renderLayout(g,top,e.width,e.height);
}},_computeSizeHint:function(){var p=this._getLayoutChildren();
var m,r,n;
var q=0,o=0;
var j,k;
for(var i=0,l=p.length;i<l;i++){m=p[i];
r=m.getSizeHint();
n=m.getLayoutProperties();
j=r.width+(n.left||0)+m.getMarginLeft()+m.getMarginRight();
k=r.height+(n.top||0)+m.getMarginTop()+m.getMarginBottom();

if(j>q){q=j;
}
if(k>o){o=k;
}}return {width:q,height:o};
}}});
})();
(function(){var b="qx.html.Root";
qx.Class.define(b,{extend:qx.html.Element,construct:function(a){arguments.callee.base.call(this);

if(a!=null){this.useElement(a);
}},members:{useElement:function(c){arguments.callee.base.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var d="white",c="black",b="Windows Royale",a="qx.legacy.theme.classic.color.Royale";
qx.Theme.define(a,{title:b,colors:{"background":[235,233,237],"border-light":d,"border-light-shadow":[220,223,228],"border-dark":[133,135,140],"border-dark-shadow":[167,166,170],"effect":[254,200,60],"selected":[51,94,168],"text":c,"text-disabled":[167,166,170],"text-selected":d,"tooltip":[255,255,225],"tooltip-text":c,"menu":d,"list":d,"field":d,"button":[235,233,237],"button-hover":[246,245,247],"button-abandoned":[235,233,237],"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"button-view-pane":[250,251,254],"button-view-bar":[225,238,255],"tab-view-pane":[250,251,254],"tab-view-border":[145,165,189],"tab-view-button":[225,238,255],"tab-view-button-hover":[250,251,254],"tab-view-button-checked":[250,251,254],"radio-view-pane":[250,251,254],"radio-view-bar":[225,238,255],"radio-view-button-checked":[250,251,254],"list-view":d,"list-view-border":[167,166,170],"list-view-header":[242,242,242],"list-view-header-border":[214,213,217],"list-view-header-cell-hover":d,"date-chooser":d,"date-chooser-title":[98,133,186],"table-pane":d,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0]}});
})();
(function(){var i="border-dark-shadow",h="border-light",g="border-light-shadow",f="border-dark",e="tooltip-text",d="black",c="Classic",b="white",a="qx.legacy.theme.classic.Border";
qx.Theme.define(a,{title:c,borders:{"black":{width:1,color:d},"white":{width:1,color:b},"dark-shadow":{width:1,color:i},"light-shadow":{width:1,color:g},"light":{width:1,color:h},"dark":{width:1,color:f},"tooltip":{width:1,color:e},"inset":{width:2,color:[i,h,h,i],innerColor:[f,g,g,f]},"outset":{width:2,color:[g,f,f,g],innerColor:[h,i,i,h]},"groove":{width:2,color:[i,h,h,i],innerColor:[h,i,i,h]},"ridge":{width:2,color:[h,i,i,h],innerColor:[i,h,h,i]},"inset-thin":{width:1,color:[i,h,h,i]},"outset-thin":{width:1,color:[h,i,i,h]},"resizer":{width:[1,3,3,1],color:[h,i,i,h],innerColor:[g,f,f,g]},"line-left":{widthLeft:1,colorLeft:i},"line-right":{widthRight:1,colorRight:i},"line-top":{widthTop:1,colorTop:i},"line-bottom":{widthBottom:1,colorBottom:i},"divider-vertical":{widthTop:1,colorTop:i},"divider-horizontal":{widthLeft:1,colorLeft:i}}});
})();
(function(){var k="Liberation Sans",j="Verdana",i="Bitstream Vera Sans",h="Lucida Grande",g="Tahoma",f="Bitstream Vera Sans Mono",e="Courier New",d="qx.legacy.theme.classic.font.Default",c="Classic",b="Consolas",a="monospace";
qx.Theme.define(d,{title:c,fonts:{"default":{size:11,family:[h,g,j,i,k]},"bold":{size:11,family:[h,g,j,i,k],bold:true},"large":{size:13,family:[h,g,j,i,k]},"bold-large":{size:13,family:[h,g,j,i,k],bold:true},"monospace":{size:11,family:[b,f,e,a]}}});
})();
(function(){var c="Windows",b="qx.legacy.theme.classic.Widget",a="qx/compat/widget/Windows";
qx.Theme.define(b,{title:c,resource:a,widgets:{}});
})();
(function(){var dV="undefined",dU="solid",dT="background",dS="effect",dR="middle",dQ="border-dark-shadow",dP="auto",dO="inset",dN="outset",dM="default",dw="button",dv="list",du="text-field",dt="gray",ds="inset-thin",dr="text-selected",dq="selected",dp="outset-thin",dn="window-captionbar-button",dm="dark-shadow",ed="text-disabled",ee="button-abandoned",eb="50%",ec="center",dY="field",ea="date-chooser-title",dW="transparent",dX="table-header-border",ef="left",eg="list-view-content-cell-text",dF="static/image/blank.gif",dE="hidden",dH="date-chooser",dG="black",dJ="row-resize",dI="spinner-button",dL="list-view-content-cell",dK="button-view-pane",dD="menu-button",dC="tab-view-border",cd="list-view-header-border",ce="widget/arrows/down.gif",cf="col-resize",cg="tooltip",ch="scrollY",ci="tree-element-icon",cj="right",ck="menu",cl="widget/table/ascending.png",cm="widget/cursors/alias.gif",ek="table-header-cell",ej="widget/arrows/next.gif",ei="tree-folder-icon",eh="list-view",eo="bold",en="radio-view-button-checked",em="widget/window/minimize.gif",el="tab-view-button-checked",eq="table-pane",ep="text",cL="widget/splitpane/knob-vertical.png",cM="widget/window/close.gif",cJ="widget/core/dotted-white.gif",cK="widget/cursors/move.gif",cP="widget/menu/checkbox.gif",cQ="table-header-cell-hover",cN="window-active-caption",cO="widget/arrows/down-small.gif",cH="large",cI="groove",cu="tree-folder",ct="widget/window/maximize.gif",cw="decoration/core/dotted-white.gif",cv="button-view-bar",cq="window-inactive-caption-text",cp="combo-box-button",cs="widget/cursors/nodrop.gif",cr="tooltip-text",co="widget/window/restore.gif",cn="button-hover",cV="widget/cursors/copy.gif",cW="check-box-group-box-legend",cX="widget/splitpane/knob-horizontal.png",cY="widget/arrows/up.gif",cR="tab-view-pane",cS="divider-vertical",cT="tree-element-label",cU="widget/menu/radiobutton.gif",da="list-view-header",db="button-view",cE="divider-horizontal",cD="top",cC="radio-view-pane",cB="tab-view-button-hover",cA="window-active-caption-text",cz="list-view-border",cy="popup",cx="check-box",cG="tab-view-button",cF="window-inactive-caption",dc="qx.legacy.theme.classic.Appearance",dd="widget/arrows/up-small.gif",de="widget/table/descending.png",df="empty",dg="tree-folder-label",dh="list-view-header-cell-hover",di="table-focus-indicator",dj="Classic",dk="tree-element",dl="resizer",dA="label",dz="widget/table/selectColumnOrder.png",dy="table-header",dx="bold-large",dB="radio-view-bar";
qx.Theme.define(dc,{title:dj,appearances:{"empty":{},"widget":{},"image":{},"atom":{},"popup":{},"cursor-dnd-move":{style:function(et){return {source:cK};
}},"cursor-dnd-copy":{style:function(r){return {source:cV};
}},"cursor-dnd-alias":{style:function(a){return {source:cm};
}},"cursor-dnd-nodrop":{style:function(t){return {source:cs};
}},"label":{style:function(eu){return {textColor:eu.disabled?ed:dV};
}},"client-document":{style:function(bo){return {backgroundColor:dT,textColor:ep,font:dM};
}},"client-document-blocker":{style:function(eH){return {cursor:dM,backgroundImage:dF};
}},"tool-tip":{include:cy,style:function(bA){return {backgroundColor:cg,textColor:cr,border:cg,padding:[1,3,2,3]};
}},"iframe":{style:function(eB){return {border:dO};
}},"check-box":{style:function(z){return {padding:[2,3]};
}},"radio-button":{include:cx},"button":{style:function(W){if(W.pressed||W.checked||W.abandoned){var Y=dO;
}else{var Y=dN;
}
if(W.pressed||W.abandoned){var X=[4,3,2,5];
}else{var X=[3,4];
}return {backgroundColor:W.abandoned?ee:W.over?cn:dw,border:Y,padding:X};
}},"toolbar":{style:function(bG){return {border:dp,backgroundColor:dT};
}},"toolbar-part":{},"toolbar-part-handle":{style:function(o){return {width:10};
}},"toolbar-part-handle-line":{style:function(k){return {top:2,left:3,bottom:2,width:4,border:dp};
}},"toolbar-separator":{style:function(cc){return {width:8};
}},"toolbar-separator-line":{style:function(bi){return {top:2,left:3,width:dP,bottom:2,border:cE};
}},"toolbar-button":{style:function(bJ){if(bJ.pressed||bJ.checked||bJ.abandoned){var bL=ds;
var bK=[3,2,1,4];
}else if(bJ.over){var bL=dp;
var bK=[2,3];
}else{var bL=dV;
var bK=[3,4];
}return {cursor:dM,spacing:4,width:dP,border:bL,padding:bK,verticalChildrenAlign:dR,backgroundColor:bJ.abandoned?ee:dw,backgroundImage:bJ.checked&&!bJ.over?cJ:null};
}},"button-view":{style:function(eK){return {border:dm};
}},"button-view-pane":{style:function(bM){return {backgroundColor:dK,padding:10};
}},"button-view-page":{},"button-view-bar":{style:function(bq){var br=dV;
var bs=dV;
var bt=qx.legacy.ui.core.Border;

if(bq.barTop){br=[1,0];
bs=bt.fromConfig({bottom:[1,dU,dQ]});
}else if(bq.barBottom){br=[1,0];
bs=bt.fromConfig({top:[1,dU,dQ]});
}else if(bq.barLeft){br=[0,1];
bs=bt.fromConfig({right:[1,dU,dQ]});
}else if(bq.barRight){br=[0,1];
bs=bt.fromConfig({left:[1,dU,dQ]});
}return {backgroundColor:cv,padding:br||dV,border:bs||dV};
}},"button-view-button":{style:function(F){var J,H,K,G,I;

if(F.checked||F.over){I=new qx.legacy.ui.core.Border(1,dU,dQ);

if(F.barTop){I.setBottom(3,dU,dS);
G=[3,6,1,6];
}else if(F.barBottom){I.setTop(3,dU,dS);
G=[1,6,3,6];
}else if(F.barLeft){I.setRight(3,dU,dS);
G=[3,4,3,6];
}else{I.setLeft(3,dU,dS);
G=[3,6,3,4];
}}else{I=dV;
G=[4,7];
}
if(F.barTop||F.barBottom){J=[0,1];
H=dP;
K=null;
}else{J=[1,0];
K=dP;
H=null;
}return {backgroundColor:F.checked?dK:dV,iconPosition:cD,margin:J,width:H,height:K,border:I,padding:G||dV};
}},"tab-view":{style:function(y){return {spacing:-1};
}},"tab-view-bar":{},"tab-view-pane":{style:function(eS){return {backgroundColor:cR,border:new qx.legacy.ui.core.Border(1,dU,dC),padding:10};
}},"tab-view-page":{},"tab-view-button":{style:function(bN){var bQ,bO,bU,bW;
var bV,bP,bS,bR;
var bT,bX;
bV=0;
bP=0;
bX=new qx.legacy.ui.core.Border(1,dU,dC);

if(bN.checked){bQ=2;
bO=4;
bU=7;
bW=8;
bS=-1;
bR=-2;
bT=el;

if(bN.barTop){bX.setWidthBottom(0);
bX.setTop(3,dU,dS);
}else{bX.setWidthTop(0);
bX.setBottom(3,dU,dS);
}
if(bN.alignLeft){if(bN.firstChild){bU=6;
bW=7;
bR=0;
}}else{if(bN.lastChild){bU=8;
bW=5;
bS=0;
}}}else{bQ=2;
bO=2;
bU=5;
bW=6;
bS=1;
bR=0;
bT=bN.over?cB:cG;

if(bN.barTop){bX.setWidthBottom(0);
bV=3;
bP=1;
}else{bX.setWidthTop(0);
bV=1;
bP=3;
}
if(bN.alignLeft){if(bN.firstChild){bU=6;
bW=5;
}}else{if(bN.lastChild){bU=6;
bW=5;
bS=0;
}}}return {padding:[bQ,bW,bO,bU],margin:[bV,bS,bP,bR],border:bX,backgroundColor:bT};
}},"radio-view":{include:db},"radio-view-pane":{style:function(R){return {backgroundColor:cC};
}},"radio-view-page":{},"radio-view-bar":{style:function(eT){return {backgroundColor:dB,padding:[1,0],border:eT.barTop?qx.legacy.ui.core.Border.fromConfig({bottom:[1,dU,dQ]}):qx.legacy.ui.core.Border.fromConfig({top:[1,dU,dQ]})};
}},"radio-view-button":{style:function(bb){var bd,bc;

if(bb.checked||bb.over){bd=new qx.legacy.ui.core.Border(1,dU,dQ);
bd.setLeft(3,dU,dS);
bc=[2,6,2,4];
}else{bd=dV;
bc=[3,7];
}return {backgroundColor:bb.checked?en:dV,iconPosition:ef,margin:[0,1],width:dP,opacity:bb.checked?1.0:0.3,border:bd,padding:bc};
}},"window":{style:function(V){return {backgroundColor:dT,padding:1,border:V.maximized?dV:dN};
}},"window-captionbar":{style:function(C){return {padding:[1,2,2],verticalChildrenAlign:dR,backgroundColor:C.active?cN:cF,textColor:C.active?cA:cq};
}},"window-resize-frame":{style:function(u){return {border:dm};
}},"window-captionbar-icon":{style:function(eL){return {marginRight:2};
}},"window-captionbar-title":{style:function(bB){return {cursor:dM,font:eo,marginRight:2};
}},"window-captionbar-button":{include:dw,style:function(bh){return {padding:bh.pressed||bh.abandoned?[2,1,0,3]:[1,2]};
}},"window-captionbar-minimize-button":{include:dn,style:function(O){return {icon:em};
}},"window-captionbar-restore-button":{include:dn,style:function(s){return {icon:co};
}},"window-captionbar-maximize-button":{include:dn,style:function(b){return {icon:ct};
}},"window-captionbar-close-button":{include:dn,style:function(c){return {marginLeft:2,icon:cM};
}},"window-statusbar":{style:function(f){return {border:ds};
}},"window-statusbar-text":{style:function(n){return {padding:[1,4]};
}},"color-popup":{style:function(eA){return {padding:4,border:dN,backgroundColor:dT};
}},"resizer":{style:function(m){return {border:dN};
}},"resizer-frame":{style:function(q){return {border:dm};
}},"menu":{style:function(x){return {backgroundColor:ck,border:dN,padding:1};
}},"menu-layout":{},"menu-button":{style:function(bF){return {spacing:2,padding:[2,4],verticalChildrenAlign:dR,backgroundColor:bF.over?dq:dV,textColor:bF.over?dr:dV};
}},"menu-button-arrow":{style:function(j){return {source:ej};
}},"menu-check-box":{include:dD,style:function(bg){return {icon:bg.checked?cP:dF};
}},"menu-radio-button":{include:dD,style:function(bH){return {icon:bH.checked?cU:dF};
}},"menu-separator":{style:function(eD){return {marginTop:3,marginBottom:2,paddingLeft:3,paddingRight:3};
}},"menu-separator-line":{style:function(p){return {right:0,left:0,height:dP,border:cS};
}},"list":{style:function(es){return {border:ds,backgroundColor:dv};
}},"list-item":{style:function(U){return {horizontalChildrenAlign:ef,verticalChildrenAlign:dR,spacing:4,padding:[3,5],backgroundColor:U.selected?dq:dV,textColor:U.selected?dr:dV};
}},"text-field":{style:function(eO){return {border:dO,padding:[1,3],textColor:eO.disabled?ed:dV,backgroundColor:dY};
}},"text-area":{include:du},"combo-box":{style:function(eI){return {border:dO,backgroundColor:dY};
}},"combo-box-list":{include:dv,style:function(bC){return {border:dV,overflow:ch};
}},"combo-box-popup":{include:dv,style:function(B){return {maxHeight:150,border:dm};
}},"combo-box-text-field":{include:du,style:function(ez){return {border:dV,backgroundColor:dW};
}},"combo-box-button":{include:dw,style:function(v){return {padding:[0,3,0,2],icon:ce};
}},"combo-box-ex":{style:function(bm){return {border:dO,backgroundColor:dY};
}},"combo-box-ex-list":{include:dv,style:function(bY){return {border:dV,edge:0};
}},"combo-box-ex-text-field":{include:du,style:function(eP){return {border:dV,minWidth:30,width:100,backgroundColor:dW};
}},"combo-box-ex-popup":{include:dv,style:function(bI){return {border:dl};
}},"combo-box-ex-button":{include:cp},"treevirtual-focus-indicator":{include:df},"tree-element":{style:function(i){return {height:16,verticalChildrenAlign:dR};
}},"tree-element-icon":{style:function(eR){return {width:16,height:16};
}},"tree-element-label":{include:dA,style:function(by){return {marginLeft:3,height:15,padding:2,backgroundColor:by.selected?dq:dV,textColor:by.disabled?ed:(by.selected?dr:dV)};
}},"tree-folder":{include:dk},"tree-folder-icon":{include:ci},"tree-folder-label":{include:cT},"tree":{include:cu},"tree-icon":{include:ei},"tree-label":{include:dg},"list-view":{style:function(ca){return {border:new qx.legacy.ui.core.Border(1,dU,cz),backgroundColor:eh};
}},"list-view-pane":{style:function(S){return {horizontalSpacing:1};
}},"list-view-header":{style:function(g){return {border:qx.legacy.ui.core.Border.fromConfig({bottom:[1,dU,cd]}),backgroundColor:da};
}},"list-view-header-cell":{style:function(bj){return {padding:[2,6],spacing:4,backgroundColor:bj.over?dh:dV,paddingBottom:bj.over?0:2,border:bj.over?new qx.legacy.ui.core.Border.fromConfig({bottom:[2,dU,dS]}):dV};
}},"list-view-header-cell-arrow-up":{style:function(e){return {source:cY};
}},"list-view-header-cell-arrow-down":{style:function(bl){return {source:ce};
}},"list-view-header-separator":{style:function(ba){return {backgroundColor:cd,width:1,marginTop:1,marginBottom:1};
}},"list-view-content-cell":{style:function(eQ){return {cursor:dM,backgroundColor:eQ.selected?dq:dV,textColor:eQ.selected?dr:dV,border:eQ.lead&&
!eQ.selected?
new qx.legacy.ui.core.Border.fromConfig({top:[1,dU,dS],bottom:[1,dU,dS]}):dV,marginTop:eQ.lead&&!eQ.selected?0:1,marginBottom:eQ.lead&&!eQ.selected?0:1};
}},"list-view-content-cell-image":{include:dL,style:function(eJ){return {paddingLeft:6,paddingRight:6};
}},"list-view-content-cell-text":{include:dL,style:function(h){return {overflow:dE,paddingLeft:6,paddingRight:6};
}},"list-view-content-cell-html":{include:eg},"list-view-content-cell-icon-html":{include:eg},"list-view-content-cell-link":{include:eg},"group-box":{style:function(A){return {backgroundColor:dT};
}},"group-box-legend":{style:function(eE){return {location:[10,1],backgroundColor:dT,paddingRight:3,paddingLeft:4,marginRight:10};
}},"group-box-frame":{style:function(T){return {edge:[8,0,0],padding:[12,9],border:cI};
}},"check-box-group-box-legend":{style:function(w){return {location:[10,1],backgroundColor:dT,paddingRight:3};
}},"radio-button-group-box-legend":{include:cW},"spinner":{style:function(eC){return {border:dO,backgroundColor:dY};
}},"spinner-text-field":{include:du,style:function(l){return {backgroundColor:dW};
}},"spinner-button":{style:function(bn){return {width:16,backgroundColor:dT,paddingLeft:3,border:bn.pressed||bn.checked||bn.abandoned?dO:dN};
}},"spinner-button-up":{include:dI,style:function(bp){return {source:dd};
}},"spinner-button-down":{include:dI,style:function(L){return {paddingTop:1,source:cO};
}},"colorselector":{style:function(D){return {backgroundColor:dT,border:dN};
}},"datechooser-toolbar-button":{style:function(eF){var eG={backgroundColor:eF.abandoned?ee:dw,backgroundImage:(eF.checked&&!eF.over)?cw:null,spacing:4,width:dP,verticalChildrenAlign:dR};

if(eF.pressed||eF.checked||eF.abandoned){eG.border=ds;
}else if(eF.over){eG.border=dp;
}else{eG.border=dV;
}
if(eF.pressed||eF.checked||eF.abandoned){eG.padding=[2,0,0,2];
}else if(eF.over){eG.padding=1;
}else{eG.padding=2;
}return eG;
}},"datechooser-monthyear":{style:function(E){return {font:cH,textAlign:ec,verticalAlign:dR};
}},"datechooser-datepane":{style:function(N){return {border:new qx.legacy.ui.core.Border(1,dU,dt),backgroundColor:dH};
}},"datechooser-weekday":{style:function(be){var bf=qx.legacy.ui.core.Border.fromConfig({bottom:[1,dU,dt]});
return {border:bf,font:dx,textAlign:ec,textColor:be.weekend?ea:dH,backgroundColor:be.weekend?dH:ea};
}},"datechooser-day":{style:function(M){return {textAlign:ec,verticalAlign:dR,border:M.today?dG:dV,textColor:M.selected?dr:M.otherMonth?ed:dV,backgroundColor:M.selected?dq:dV,padding:[2,4]};
}},"datechooser-week":{style:function(bD){if(bD.header){var bE=qx.legacy.ui.core.Border.fromConfig({right:[1,dU,dt],bottom:[1,dU,dt]});
}else{var bE=qx.legacy.ui.core.Border.fromConfig({right:[1,dU,dt]});
}return {textAlign:ec,textColor:ea,padding:[2,4],border:bE};
}},"table-focus-statusbar":{style:function(bk){return {border:qx.legacy.ui.core.Border.fromConfig({top:[1,dU,dQ]}),paddingLeft:2,paddingRight:2};
}},"table-focus-indicator":{style:function(ev){return {border:new qx.legacy.ui.core.Border(2,dU,di)};
}},"table-editor-textfield":{include:du,style:function(bz){return {border:dV,padding:[0,2]};
}},"table-pane":{style:function(cb){return {backgroundColor:eq};
}},"table-header":{style:function(d){return {border:qx.legacy.ui.core.Border.fromConfig({bottom:[1,dU,dX]}),backgroundColor:dy};
}},"table-menubar-button":{style:function(ew){if(ew.pressed||ew.checked||ew.abandoned){var ey=ds;
var ex=[3,2,1,4];
}else if(ew.over){var ey=dp;
var ex=[2,3];
}else{var ey=dV;
var ex=[3,4];
}return {cursor:dM,spacing:4,width:dP,border:ey,padding:ex,verticalChildrenAlign:dR,backgroundColor:ew.abandoned?ee:dw,icon:dz};
}},"table-header-cell":{style:function(bu){var bw,bx,bv;

if(bu.mouseover){bw=qx.legacy.ui.core.Border.fromConfig({right:[1,dU,dX],bottom:[2,dU,dS]});
bv=0;
bx=cQ;
}else{bw=qx.legacy.ui.core.Border.fromConfig({right:[1,dU,dX]});
bv=2;
bx=ek;
}return {paddingLeft:2,paddingRight:2,paddingBottom:bv,spacing:4,overflow:dE,iconPosition:cj,verticalChildrenAlign:dR,border:bw,backgroundColor:bx,icon:bu.sorted?(bu.sortedAscending?cl:de):null,horizontalChildrenAlign:ef};
}},"splitpane":{style:function(eN){return {overflow:dE,splitterSize:8,backgroundColor:dT};
}},"splitpane-splitter":{style:function(P){return {cursor:P.horizontal?cf:dJ};
}},"splitpane-slider":{style:function(eM){return {opacity:0.5,backgroundColor:dT};
}},"splitpane-knob":{style:function(er){if(er.horizontal){return {opacity:er.dragging?0.5:1.0,top:eb,left:eb,cursor:cf,source:cX,marginLeft:-2,marginTop:-7};
}else{return {opacity:er.dragging?0.5:1.0,top:eb,left:eb,source:cL,marginTop:-2,marginLeft:-7,cursor:dJ};
}}},"scrollbar-blocker":{style:function(Q){return {backgroundColor:dG,opacity:0.2};
}}}});
})();
(function(){var c="CrystalClear",b="qx.legacy.theme.icon.CrystalClear",a="qx/compat/icon/CrystalClear";
qx.Theme.define(b,{title:c,resource:a,icons:{}});
})();
(function(){var b="qx.legacy.theme.ClassicRoyale",a="Classic Royale";
qx.Theme.define(b,{title:a,meta:{color:qx.legacy.theme.classic.color.Royale,border:qx.legacy.theme.classic.Border,font:qx.legacy.theme.classic.font.Default,widget:qx.legacy.theme.classic.Widget,appearance:qx.legacy.theme.classic.Appearance,icon:qx.legacy.theme.icon.CrystalClear}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Classic",b="Theme",a="singleton";
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
(function(){var n="qx.theme.manager.Font",m="Theme",l="changeTheme",k="_applyTheme",j="singleton";
qx.Class.define(n,{type:j,extend:qx.util.ValueManager,properties:{theme:{check:m,nullable:true,apply:k,event:l}},members:{resolveDynamic:function(o){var p=this._dynamic;
return o instanceof qx.bom.Font?o:p[o];
},resolve:function(f){var i=this._dynamic;
var g=i[f];

if(g){return g;
}var h=this.getTheme();

if(h!==null&&h.fonts[f]){return i[f]=(new qx.bom.Font).set(h.colors[f]);
}return f;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(q instanceof qx.bom.Font||s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&r.fonts[q]){s[q]=(new qx.bom.Font).set(r.fonts[q]);
return true;
}return false;
},_applyTheme:function(a){var b=this._getDynamic();

for(var e in b){if(b[e].themed){b[e].dispose();
delete b[e];
}}
if(a){var c=a.fonts;
var d=qx.bom.Font;

for(var e in c){b[e]=(new d).set(c[e]);
b[e].themed=true;
}}this._setDynamic(b);
}}});
})();
(function(){var r="",q="underline",p="Boolean",o="px",n='"',m="italic",k="normal",j="bold",h="_applyItalic",g="_applyBold",D="Integer",C="_applyFamily",B="_applyLineHeight",A="Array",z="overline",y="line-through",x="qx.bom.Font",w="Number",v="_applyDecoration",u=" ",s="_applySize",t=",";
qx.Class.define(x,{extend:qx.core.Object,construct:function(e,f){arguments.callee.base.call(this);

if(e!==undefined){this.setSize(e);
}
if(f!==undefined){this.setFamily(f);
}},statics:{fromString:function(E){var I=new qx.bom.Font();
var G=E.split(/\s+/);
var name=[];
var H;

for(var i=0;i<G.length;i++){switch(H=G[i]){case j:I.setBold(true);
break;
case m:I.setItalic(true);
break;
case q:I.setDecoration(q);
break;
default:var F=parseInt(H,10);

if(F==H||qx.lang.String.contains(H,o)){I.setSize(F);
}else{name.push(H);
}break;
}}
if(name.length>0){I.setFamily(name);
}return I;
},fromConfig:function(Q){var R=new qx.bom.Font;
R.set(Q);
return R;
},__cB:{fontFamily:r,fontSize:r,fontWeight:r,fontStyle:r,textDecoration:r,lineHeight:1.2},getDefaultStyles:function(){return this.__cB;
}},properties:{size:{check:D,nullable:true,apply:s},lineHeight:{check:w,nullable:true,apply:B},family:{check:A,nullable:true,apply:C},bold:{check:p,nullable:true,apply:g},italic:{check:p,nullable:true,apply:h},decoration:{check:[q,y,z],nullable:true,apply:v}},members:{__cC:null,__cD:null,__cE:null,__cF:null,__cG:null,__cH:null,_applySize:function(c,d){this.__cC=c===null?null:c+o;
},_applyLineHeight:function(M,N){this.__cH=M===null?null:M;
},_applyFamily:function(J,K){var L=r;

for(var i=0,l=J.length;i<l;i++){if(J[i].indexOf(u)>0){L+=n+J[i]+n;
}else{L+=J[i];
}
if(i!==l-1){L+=t;
}}this.__cD=L;
},_applyBold:function(O,P){this.__cE=O===null?null:O?j:k;
},_applyItalic:function(a,b){this.__cF=a===null?null:a?m:k;
},_applyDecoration:function(S,T){this.__cG=S===null?null:S;
},getStyles:function(){return {fontFamily:this.__cD,fontSize:this.__cC,fontWeight:this.__cE,fontStyle:this.__cF,textDecoration:this.__cG,lineHeight:this.__cH};
}}});
})();
(function(){var e="icon",d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(f,g){var h=qx.util.AliasManager.getInstance();
f?h.add(e,f.resource):h.remove(e);
}}});
})();
(function(){var G="Boolean",F="vertical",E="horizontal",D="left",C="top",B="stretchChildrenOrthogonalAxis",A="orientation",z="reverseChildrenOrder",y="useAdvancedFlexAllocation",x="spacing",ba="changeOrientation",Y="bottom",X="accumulatedChildrenOuterHeight",W="horizontalChildrenAlign",V="_applySpacing",U="_applyStretchChildrenOrthogonalAxis",T="accumulatedChildrenOuterWidth",S="Integer",R="center",Q="middle",N="qx.legacy.ui.layout.BoxLayout",O="_applyOrientation",L="_applyHorizontalChildrenAlign",M="right",J="_applyReverseChildrenOrder",K="_applyUseAdvancedFlexAllocation",H="changeSpacing",I="verticalChildrenAlign",P="_applyVerticalChildrenAlign";
qx.Class.define(N,{extend:qx.legacy.ui.core.Parent,construct:function(a){arguments.callee.base.call(this);
if(a!=null){this.setOrientation(a);
}else{this.initOrientation();
}},statics:{STR_REVERSED:"-reversed"},properties:{orientation:{check:[E,F],init:E,apply:O,event:ba},spacing:{check:S,init:0,themeable:true,apply:V,event:H},horizontalChildrenAlign:{check:[D,R,M],init:D,themeable:true,apply:L},verticalChildrenAlign:{check:[C,Q,Y],init:C,themeable:true,apply:P},reverseChildrenOrder:{check:G,init:false,apply:J},stretchChildrenOrthogonalAxis:{check:G,init:true,apply:U},useAdvancedFlexAllocation:{check:G,init:false,apply:K}},defer:function(v,w){qx.legacy.core.Property.addCachedProperty({name:T,defaultValue:null},w);
qx.legacy.core.Property.addCachedProperty({name:X,defaultValue:null},w);
},members:{_createLayoutImpl:function(){return this.getOrientation()==F?new qx.legacy.ui.layout.impl.VerticalBoxLayoutImpl(this):new qx.legacy.ui.layout.impl.HorizontalBoxLayoutImpl(this);
},_layoutHorizontal:false,_layoutVertical:false,_layoutMode:D,isHorizontal:function(){return this._layoutHorizontal;
},isVertical:function(){return this._layoutVertical;
},getLayoutMode:function(){if(this._layoutMode==null){this._updateLayoutMode();
}return this._layoutMode;
},_updateLayoutMode:function(){this._layoutMode=this._layoutVertical?this.getVerticalChildrenAlign():this.getHorizontalChildrenAlign();

if(this.getReverseChildrenOrder()){this._layoutMode+=qx.legacy.ui.layout.BoxLayout.STR_REVERSED;
}},_invalidateLayoutMode:function(){this._layoutMode=null;
},_applyOrientation:function(l,m){this._layoutHorizontal=l==E;
this._layoutVertical=l==F;
if(this._layoutImpl){this._layoutImpl.dispose();
this._layoutImpl=null;
}
if(l){this._layoutImpl=this._createLayoutImpl();
}this._doLayoutOrder(l,m);
this.addToQueueRuntime(A);
},_applySpacing:function(b,c){this._doLayout();
this.addToQueueRuntime(x);
},_applyHorizontalChildrenAlign:function(t,u){this._doLayoutOrder();
this.addToQueueRuntime(W);
},_applyVerticalChildrenAlign:function(bb,bc){this._doLayoutOrder();
this.addToQueueRuntime(I);
},_applyReverseChildrenOrder:function(g,h){this._doLayoutOrder();
this.addToQueueRuntime(z);
},_applyStretchChildrenOrthogonalAxis:function(q,r){this.addToQueueRuntime(B);
},_applyUseAdvancedFlexAllocation:function(bd,be){this.addToQueueRuntime(y);
},_doLayoutOrder:function(){this._invalidateLayoutMode();
this._doLayout();
},_doLayout:function(){this._invalidatePreferredInnerDimensions();
this._invalidateAccumulatedChildrenOuterWidth();
this._invalidateAccumulatedChildrenOuterHeight();
},_computeAccumulatedChildrenOuterWidth:function(){var o=this.getVisibleChildren(),n,i=-1,p=this.getSpacing(),s=-p;

while(n=o[++i]){s+=n.getOuterWidth()+p;
}return s;
},_computeAccumulatedChildrenOuterHeight:function(){var e=this.getVisibleChildren(),d,i=-1,f=this.getSpacing(),s=-f;

while(d=e[++i]){s+=d.getOuterHeight()+f;
}return s;
},_recomputeChildrenStretchingX:function(){var k=this.getVisibleChildren(),j,i=-1;

while(j=k[++i]){if(j._recomputeStretchingX()&&j._recomputeBoxWidth()){j._recomputeOuterWidth();
}}},_recomputeChildrenStretchingY:function(){var bg=this.getVisibleChildren(),bf,i=-1;

while(bf=bg[++i]){if(bf._recomputeStretchingY()&&bf._recomputeBoxHeight()){bf._recomputeOuterHeight();
}}}}});
})();
(function(){var t="both",s="bottom",r="String",q="Integer",p="auto",o="icon",n="top",m="right",k="horizontal",j="inherit",M="label",L="left",K="_applyIconHeight",J="changeShow",I="default",H="_applyIconPosition",G="_applyIconWidth",F="center",E="_labelObject",D="middle",A="vertical",B="_iconObject",y="_applyIcon",z="none",w="_applyShow",x="qx.legacy.ui.basic.Atom",u="_applyLabel",v="_applyDisabledIcon",C="atom";
qx.Class.define(x,{extend:qx.legacy.ui.layout.BoxLayout,construct:function(V,W,X,Y,ba){arguments.callee.base.call(this);
this.getLayoutImpl().setEnableFlexSupport(false);
if(V!==undefined){this.setLabel(V);
}if(W!=null){this.setIcon(W);
}
if(W||ba){if(X!=null){this.setIconWidth(X);
}
if(Y!=null){this.setIconHeight(Y);
}}this.initWidth();
this.initHeight();
},properties:{orientation:{refine:true,init:k},allowStretchX:{refine:true,init:false},allowStretchY:{refine:true,init:false},appearance:{refine:true,init:C},stretchChildrenOrthogonalAxis:{refine:true,init:false},width:{refine:true,init:p},height:{refine:true,init:p},horizontalChildrenAlign:{refine:true,init:F},verticalChildrenAlign:{refine:true,init:D},spacing:{refine:true,init:4},label:{apply:u,nullable:true,dispose:true,check:r},icon:{check:r,apply:y,nullable:true,themeable:true},disabledIcon:{check:r,apply:v,nullable:true,themeable:true},show:{init:t,check:[t,M,o,z],themeable:true,nullable:true,inheritable:true,apply:w,event:J},iconPosition:{init:L,check:[n,m,s,L],themeable:true,apply:H},iconWidth:{check:q,themeable:true,apply:G,nullable:true},iconHeight:{check:q,themeable:true,apply:K,nullable:true}},members:{_flashMode:false,_labelObject:null,_iconObject:null,_createLabel:function(){var l=this._labelObject=new qx.legacy.ui.basic.Label(this.getLabel());
l.setAnonymous(true);
l.setCursor(I);
this.addAt(l,this._iconObject?1:0);
},_createIcon:function(){var i=this._iconObject=new qx.legacy.ui.basic.Image();
i.setAnonymous(true);
var P=this.getIconWidth();

if(P!==null){this._iconObject.setWidth(P);
}var Q=this.getIconWidth();

if(Q!==null){this._iconObject.setHeight(Q);
}this._updateIcon();
this.addAt(i,0);
},_updateIcon:function(){var b=this.getIcon();
if(this._iconObject&&this.getIcon&&this.getDisabledIcon){var a=this.getDisabledIcon();

if(a){if(this.getEnabled()){b?this._iconObject.setSource(b):this._iconObject.resetSource();
}else{a?this._iconObject.setSource(a):this._iconObject.resetSource();
}this._iconObject.setEnabled(true);
}else{b?this._iconObject.setSource(b):this._iconObject.resetSource();
this._iconObject.resetEnabled();
}}},getLabelObject:function(){return this._labelObject;
},getIconObject:function(){return this._iconObject;
},_applyIconPosition:function(g,h){switch(g){case n:case s:this.setOrientation(A);
this.setReverseChildrenOrder(g==s);
break;
default:this.setOrientation(k);
this.setReverseChildrenOrder(g==m);
break;
}},_applyShow:function(N,O){this._handleIcon();
this._handleLabel();
},_applyLabel:function(bb,bc){if(this._labelObject){bb?this._labelObject.setText(bb):this._labelObject.resetText();
}this._handleLabel();
},_applyIcon:function(c,d){this._updateIcon();
this._handleIcon();
},_applyDisabledIcon:function(T,U){this._updateIcon();
this._handleIcon();
},_applyIconWidth:function(R,S){if(this._iconObject){this._iconObject.setWidth(R);
}},_applyIconHeight:function(e,f){if(this._iconObject){this._iconObject.setHeight(e);
}},_iconIsVisible:false,_labelIsVisible:false,_handleLabel:function(){switch(this.getShow()){case M:case t:case j:this._labelIsVisible=!!this.getLabel();
break;
default:this._labelIsVisible=false;
}
if(this._labelIsVisible){this._labelObject?this._labelObject.setDisplay(true):this._createLabel();
}else if(this._labelObject){this._labelObject.setDisplay(false);
}},_handleIcon:function(){switch(this.getShow()){case o:case t:case j:this._iconIsVisible=!!this.getIcon();
break;
default:this._iconIsVisible=false;
}
if(this._iconIsVisible){this._iconObject?this._iconObject.setDisplay(true):this._createIcon();
}else if(this._iconObject){this._iconObject.setDisplay(false);
}}},destruct:function(){this._disposeObjects(B,E);
}});
})();
(function(){var n="pressed",m="abandoned",l="over",k="Enter",j="Space",i="mouseup",h="mousedown",g="mouseover",f="mouseout",d="keydown",a="button",c="keyup",b="qx.legacy.ui.form.Button";
qx.Class.define(b,{extend:qx.legacy.ui.basic.Atom,construct:function(o,p,q,r,s){arguments.callee.base.call(this,o,p,q,r,s);
this.initTabIndex();
this.addListener(g,this._onmouseover);
this.addListener(f,this._onmouseout);
this.addListener(h,this._onmousedown);
this.addListener(i,this._onmouseup);
this.addListener(d,this._onkeydown);
this.addListener(c,this._onkeyup);
},properties:{appearance:{refine:true,init:a},tabIndex:{refine:true,init:1}},members:{_onmouseover:function(e){if(e.getTarget()!=this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
}this.addState(l);
},_onmouseout:function(e){if(e.getTarget()!=this){return;
}this.removeState(l);

if(this.hasState(n)){this.setCapture(true);
this.removeState(n);
this.addState(m);
}},_onmousedown:function(e){if(e.getTarget()!=this||!e.isLeftButtonPressed()){return;
}this.removeState(m);
this.addState(n);
},_onmouseup:function(e){this.setCapture(false);
var t=this.hasState(n);
var u=this.hasState(m);

if(t){this.removeState(n);
}
if(u){this.removeState(m);
}
if(!u){this.addState(l);

if(t){this.execute();
}}},_onkeydown:function(e){switch(e.getKeyIdentifier()){case k:case j:this.removeState(m);
this.addState(n);
e.stopPropagation();
}},_onkeyup:function(e){switch(e.getKeyIdentifier()){case k:case j:if(this.hasState(n)){this.removeState(m);
this.removeState(n);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var A="locationY",z="bottom",y="top-reversed",x="middle-reversed",v="middle",u="qx.client",t="locationX",s="center",r="qx.legacy.ui.layout.impl.VerticalBoxLayoutImpl",q="width",n="height",p="gecko",o="bottom-reversed",m="right",l="Boolean";
qx.Class.define(r,{extend:qx.legacy.ui.layout.impl.LayoutImpl,properties:{enableFlexSupport:{check:l,init:true}},members:{computeChildBoxWidth:function(X){if(this.getWidget().getStretchChildrenOrthogonalAxis()&&X._computedWidthTypeNull&&X.getAllowStretchX()){return this.getWidget().getInnerWidth();
}return X.getWidthValue()||X._computeBoxWidthFallback();
},computeChildBoxHeight:function(bJ){return bJ.getHeightValue()||bJ._computeBoxHeightFallback();
},computeChildrenFlexHeight:function(){if(this._childrenFlexHeightComputed||!this.getEnableFlexSupport()){return;
}this._childrenFlexHeightComputed=true;
var bG=this.getWidget();
var bu=bG.getVisibleChildren();
var bq=bu.length;
var bA;
var bI=[];
var bH=bG.getInnerHeight();
var bE=bG.getSpacing()*(bq-1);
var by;
for(by=0;by<bq;by++){bA=bu[by];

if(bA._computedHeightTypeFlex){bI.push(bA);

if(bG._computedHeightTypeAuto){bE+=bA.getPreferredBoxHeight();
}}else{bE+=bA.getOuterHeight();
}}var bs=bH-bE;
var bw=bI.length;
var br=0;

for(by=0;by<bw;by++){br+=bI[by]._computedHeightParsed;
}var bv=bs/br;

if(!bG.getUseAdvancedFlexAllocation()){for(by=0;by<bw;by++){bA=bI[by];
bA._computedHeightFlexValue=Math.round(bA._computedHeightParsed*bv);
bE+=bA._computedHeightFlexValue;
}}else{var bD=0;
var bz,bw,bF,bx,bB,bt;

for(by=0;by<bw;by++){bA=bI[by];
bt=bA._computedHeightFlexValue=bA._computedHeightParsed*bv;
bD+=bt-qx.lang.Number.limit(bt,bA.getMinHeightValue(),bA.getMaxHeightValue());
}bD=Math.round(bD);

if(bD==0){for(by=0;by<bw;by++){bA=bI[by];
bA._computedHeightFlexValue=Math.round(bA._computedHeightFlexValue);
bE+=bA._computedHeightFlexValue;
}}else{var bC=bD>0;

for(by=bw-1;by>=0;by--){bA=bI[by];

if(bC){bF=(bA.getMaxHeightValue()||Infinity)-bA._computedHeightFlexValue;

if(bF>0){bA._allocationLoops=Math.floor(bF/bA._computedHeightParsed);
}else{qx.lang.Array.removeAt(bI,by);
bA._computedHeightFlexValue=Math.round(bA._computedHeightFlexValue);
bE+=Math.round(bA._computedHeightFlexValue+bF);
}}else{bF=qx.legacy.util.Validation.isValidNumber(bA.getMinHeightValue())?bA._computedHeightFlexValue-bA.getMinHeightValue():bA._computedHeightFlexValue;

if(bF>0){bA._allocationLoops=Math.floor(bF/bA._computedHeightParsed);
}else{qx.lang.Array.removeAt(bI,by);
bA._computedHeightFlexValue=Math.round(bA._computedHeightFlexValue);
bE+=Math.round(bA._computedHeightFlexValue-bF);
}}}while(bD!=0&&bw>0){bw=bI.length;
bz=Infinity;
bB=0;
for(by=0;by<bw;by++){bz=Math.min(bz,bI[by]._allocationLoops);
bB+=bI[by]._computedHeightParsed;
}bx=Math.min(bB*bz,bD);
bD-=bx;
for(by=bw-1;by>=0;by--){bA=bI[by];
bA._computedHeightFlexValue+=bx/bB*bA._computedHeightParsed;

if(bA._allocationLoops==bz){bA._computedHeightFlexValue=Math.round(bA._computedHeightFlexValue);
bE+=bA._computedHeightFlexValue;
delete bA._allocationLoops;
qx.lang.Array.removeAt(bI,by);
}else{if(bD==0){bA._computedHeightFlexValue=Math.round(bA._computedHeightFlexValue);
bE+=bA._computedHeightFlexValue;
delete bA._allocationLoops;
}else{bA._allocationLoops-=bz;
}}}}}}bA._computedHeightFlexValue+=bH-bE;
},invalidateChildrenFlexHeight:function(){delete this._childrenFlexHeightComputed;
},computeChildrenNeededHeight:function(){var w=this.getWidget();
return qx.legacy.ui.layout.impl.LayoutImpl.prototype.computeChildrenNeededHeight_sum.call(this)+((w.getVisibleChildrenLength()-1)*w.getSpacing());
},updateSelfOnChildOuterHeightChange:function(f){this.getWidget()._invalidateAccumulatedChildrenOuterHeight();
},updateChildOnInnerWidthChange:function(H){var J=H._recomputePercentX();
var I=H._recomputeStretchingX();
if((H.getHorizontalAlign()||this.getWidget().getHorizontalChildrenAlign())==s){H.addToLayoutChanges(t);
}return J||I;
},updateChildOnInnerHeightChange:function(g){if(this.getWidget().getVerticalChildrenAlign()==v){g.addToLayoutChanges(A);
}var h=g._recomputePercentY();
var k=g._recomputeFlexY();
return h||k;
},updateSelfOnJobQueueFlush:function(bn){if(bn.addChild||bn.removeChild){this.getWidget()._invalidateAccumulatedChildrenOuterHeight();
}},updateChildrenOnJobQueueFlush:function(bj){var bl=false,bm=false;
var bk=this.getWidget();
if(bj.orientation){bl=bm=true;
}if(bj.spacing||bj.orientation||bj.reverseChildrenOrder||bj.verticalChildrenAlign){bk._addChildrenToLayoutQueue(A);
}
if(bj.horizontalChildrenAlign){bk._addChildrenToLayoutQueue(t);
}
if(bj.stretchChildrenOrthogonalAxis){bl=true;
}if(bl){bk._recomputeChildrenStretchingX();
bk._addChildrenToLayoutQueue(q);
}
if(bm){bk._recomputeChildrenStretchingY();
bk._addChildrenToLayoutQueue(n);
}return true;
},updateChildrenOnRemoveChild:function(be,bf){var w=this.getWidget(),bh=w.getVisibleChildren(),bi=bh.length,bg,i=-1;
if(this.getEnableFlexSupport()){for(var i=0;i<bi;i++){bg=bh[i];

if(bg.getHasFlexY()){bf=Math.min(bf,i);
break;
}}i=-1;
}switch(w.getLayoutMode()){case z:case y:while((bg=bh[++i])&&i<bf){bg.addToLayoutChanges(A);
}break;
case v:case x:while(bg=bh[++i]){bg.addToLayoutChanges(A);
}break;
default:i+=bf;

while(bg=bh[++i]){bg.addToLayoutChanges(A);
}}},updateChildrenOnMoveChild:function(K,L,M){var P=this.getWidget().getVisibleChildren();
var N=Math.min(L,M);
var O=Math.max(L,M)+1;

for(var i=N;i<O;i++){P[i].addToLayoutChanges(A);
}},flushChildrenQueue:function(Y){var w=this.getWidget(),bc=w.getVisibleChildren(),bb=bc.length,ba,i;
if(this.getEnableFlexSupport()){this.invalidateChildrenFlexHeight();

for(i=0;i<bb;i++){ba=bc[i];

if(ba.getHasFlexY()){ba._computedHeightValue=null;

if(ba._recomputeBoxHeight()){ba._recomputeOuterHeight();
ba._recomputeInnerHeight();
}Y[ba.toHashCode()]=ba;
ba._layoutChanges.height=true;
}}}
switch(w.getLayoutMode()){case z:case y:for(var i=bb-1;i>=0&&!Y[bc[i].toHashCode()];i--){}for(var j=0;j<=i;j++){w._layoutChild(ba=bc[j]);
}break;
case v:case x:i=-1;

while(ba=bc[++i]){w._layoutChild(ba);
}break;
default:i=-1;
var bd=false;

while(ba=bc[++i]){if(bd||Y[ba.toHashCode()]){w._layoutChild(ba);
bd=true;
}}}},layoutChild:function(B,C){this.layoutChild_sizeX(B,C);
this.layoutChild_sizeY(B,C);
this.layoutChild_sizeLimitX(B,C);
this.layoutChild_sizeLimitY(B,C);
this.layoutChild_locationX(B,C);
this.layoutChild_locationY(B,C);
this.layoutChild_marginX(B,C);
this.layoutChild_marginY(B,C);
},layoutChild_sizeX:qx.core.Variant.select(u,{"mshtml|opera|webkit":function(F,G){if(G.initial||G.width||G.minWidth||G.maxWidth){if((F._isWidthEssential()&&(!F._computedWidthTypeNull||!F._computedMinWidthTypeNull||!F._computedMaxWidthTypeNull))||(F.getAllowStretchX()&&this.getWidget().getStretchChildrenOrthogonalAxis())){F._renderRuntimeWidth(F.getBoxWidth());
}else{F._resetRuntimeWidth();
}}},"default":function(D,E){if(E.initial||E.width){if(D._isWidthEssential()&&!D._computedWidthTypeNull){D._renderRuntimeWidth(D.getWidthValue());
}else{D._resetRuntimeWidth();
}}}}),layoutChild_sizeY:qx.core.Variant.select(u,{"mshtml|opera|webkit":function(bo,bp){if(bp.initial||bp.height||bp.minHeight||bp.maxHeight){if(bo._isHeightEssential()&&(!bo._computedHeightTypeNull||!bo._computedMinHeightTypeNull||!bo._computedMaxHeightTypeNull)){bo._renderRuntimeHeight(bo.getBoxHeight());
}else{bo._resetRuntimeHeight();
}}},"default":function(Q,R){if(R.initial||R.height){if(Q._isHeightEssential()&&!Q._computedHeightTypeNull){Q._renderRuntimeHeight(Q.getHeightValue());
}else{Q._resetRuntimeHeight();
}}}}),layoutChild_locationY:function(S,T){var W=this.getWidget();
if(W.getFirstVisibleChild()==S){switch(W.getLayoutMode()){case z:case y:var V=W.getPaddingBottom()+W.getAccumulatedChildrenOuterHeight()-S.getOuterHeight();
break;
case v:case x:var V=W.getPaddingTop()+Math.round((W.getInnerHeight()-W.getAccumulatedChildrenOuterHeight())/2);
break;
default:var V=W.getPaddingTop();
}}else{var U=S.getPreviousVisibleSibling();

switch(W.getLayoutMode()){case z:case y:var V=U._cachedLocationVertical-S.getOuterHeight()-W.getSpacing();
break;
default:var V=U._cachedLocationVertical+U.getOuterHeight()+W.getSpacing();
}}S._cachedLocationVertical=V;
switch(this.getWidget().getLayoutMode()){case z:case o:case x:V+=!S._computedBottomTypeNull?S.getBottomValue():!S._computedTopTypeNull?-(S.getTopValue()):0;
S._resetRuntimeTop();
S._renderRuntimeBottom(V);
break;
default:V+=!S._computedTopTypeNull?S.getTopValue():!S._computedBottomTypeNull?-(S.getBottomValue()):0;
S._resetRuntimeBottom();
S._renderRuntimeTop(V);
}},layoutChild_locationX:function(a,b){var d=this.getWidget();
if(qx.core.Variant.isSet(u,p)){if(a.getAllowStretchX()&&d.getStretchChildrenOrthogonalAxis()&&a._computedWidthTypeNull){a._renderRuntimeLeft(d.getPaddingLeft()||0);
a._renderRuntimeRight(d.getPaddingRight()||0);
return;
}}var e=a.getHorizontalAlign()||d.getHorizontalChildrenAlign();
var c=e==s?Math.round((d.getInnerWidth()-a.getOuterWidth())/2):0;
if(e==m){c+=d.getPaddingRight();
if(!a._computedRightTypeNull){c+=a.getRightValue();
}else if(!a._computedLeftTypeNull){c-=a.getLeftValue();
}a._resetRuntimeLeft();
a._renderRuntimeRight(c);
}else{c+=d.getPaddingLeft();
if(!a._computedLeftTypeNull){c+=a.getLeftValue();
}else if(!a._computedRightTypeNull){c-=a.getRightValue();
}a._resetRuntimeRight();
a._renderRuntimeLeft(c);
}}}});
})();
(function(){var h="object",g="",f="number",e="string",d="function",c="boolean",b="undefined",a="qx.legacy.util.Validation";
qx.Class.define(a,{statics:{isValid:function(v){switch(typeof v){case b:return false;
case h:return v!==null;
case e:return v!==g;
case f:return !isNaN(v);
case d:case c:return true;
}return false;
},isInvalid:function(v){switch(typeof v){case b:return true;
case h:return v===null;
case e:return v===g;
case f:return isNaN(v);
case d:case c:return false;
}return true;
},isValidNumber:function(v){return typeof v===f&&!isNaN(v);
},isInvalidNumber:function(v){return typeof v!==f||isNaN(v);
},isValidString:function(v){return typeof v===e&&v!==g;
},isInvalidString:function(v){return typeof v!==e||v===g;
},isValidArray:function(v){return typeof v===h&&v!==null&&v instanceof Array;
},isInvalidArray:function(v){return typeof v!==h||v===null||!(v instanceof Array);
},isValidObject:function(v){return typeof v===h&&v!==null&&!(v instanceof Array);
},isInvalidObject:function(v){return typeof v!==h||v===null||v instanceof Array;
},isValidNode:function(v){return typeof v===h&&v!==null;
},isInvalidNode:function(v){return typeof v!==h||v===null;
},isValidElement:function(v){return typeof v===h&&v!==null||v.nodeType!==1;
},isInvalidElement:function(v){return typeof v!==h||v===null||v.nodeType!==1;
},isValidFunction:function(v){return typeof v===d;
},isInvalidFunction:function(v){return typeof v!==d;
},isValidBoolean:function(v){return typeof v===c;
},isInvalidBoolean:function(v){return typeof v!==c;
},isValidStringOrNumber:function(v){switch(typeof v){case e:return v!==g;
case f:return !isNaN(v);
}return false;
},isInvalidStringOrNumber:function(v){switch(typeof v){case e:return v===g;
case f:return isNaN(v);
}return false;
}}});
})();
(function(){var D="locationX",C="right",B="center-reversed",A="center",z="left-reversed",y="qx.client",x="locationY",v="middle",u="width",t="bottom",q="height",s="qx.legacy.ui.layout.impl.HorizontalBoxLayoutImpl",r="gecko",p="right-reversed",o="Boolean";
qx.Class.define(s,{extend:qx.legacy.ui.layout.impl.LayoutImpl,properties:{enableFlexSupport:{check:o,init:true}},members:{computeChildBoxWidth:function(E){return E.getWidthValue()||E._computeBoxWidthFallback();
},computeChildBoxHeight:function(bJ){if(this.getWidget().getStretchChildrenOrthogonalAxis()&&bJ._computedHeightTypeNull&&bJ.getAllowStretchY()){return this.getWidget().getInnerHeight();
}return bJ.getHeightValue()||bJ._computeBoxHeightFallback();
},computeChildrenFlexWidth:function(){if(this._childrenFlexWidthComputed||!this.getEnableFlexSupport()){return;
}this._childrenFlexWidthComputed=true;
var X=this.getWidget();
var K=X.getVisibleChildren();
var G=K.length;
var R;
var Y=[];
var H=X.getInnerWidth();
var O=X.getSpacing()*(G-1);
var P;
for(P=0;P<G;P++){R=K[P];

if(R._computedWidthTypeFlex){Y.push(R);

if(X._computedWidthTypeAuto){O+=R.getPreferredBoxWidth();
}}else{O+=R.getOuterWidth();
}}var J=H-O;
var N=Y.length;
var V=0;

for(P=0;P<N;P++){V+=Y[P]._computedWidthParsed;
}var M=J/V;

if(!X.getUseAdvancedFlexAllocation()){for(P=0;P<N;P++){R=Y[P];
R._computedWidthFlexValue=Math.round(R._computedWidthParsed*M);
O+=R._computedWidthFlexValue;
}}else{var U=0;
var Q,N,W,L,S,I;

for(P=0;P<N;P++){R=Y[P];
I=R._computedWidthFlexValue=R._computedWidthParsed*M;
U+=I-qx.lang.Number.limit(I,R.getMinWidthValue(),R.getMaxWidthValue());
}U=Math.round(U);

if(U==0){for(P=0;P<N;P++){R=Y[P];
R._computedWidthFlexValue=Math.round(R._computedWidthFlexValue);
O+=R._computedWidthFlexValue;
}}else{var T=U>0;

for(P=N-1;P>=0;P--){R=Y[P];

if(T){W=(R.getMaxWidthValue()||Infinity)-R._computedWidthFlexValue;

if(W>0){R._allocationLoops=Math.floor(W/R._computedWidthParsed);
}else{qx.lang.Array.removeAt(Y,P);
R._computedWidthFlexValue=Math.round(R._computedWidthFlexValue);
O+=Math.round(R._computedWidthFlexValue+W);
}}else{W=qx.legacy.util.Validation.isValidNumber(R.getMinWidthValue())?R._computedWidthFlexValue-R.getMinWidthValue():R._computedWidthFlexValue;

if(W>0){R._allocationLoops=Math.floor(W/R._computedWidthParsed);
}else{qx.lang.Array.removeAt(Y,P);
R._computedWidthFlexValue=Math.round(R._computedWidthFlexValue);
O+=Math.round(R._computedWidthFlexValue-W);
}}}while(U!=0&&N>0){N=Y.length;
Q=Infinity;
S=0;
for(P=0;P<N;P++){Q=Math.min(Q,Y[P]._allocationLoops);
S+=Y[P]._computedWidthParsed;
}L=Math.min(S*Q,U);
U-=L;
for(P=N-1;P>=0;P--){R=Y[P];
R._computedWidthFlexValue+=L/S*R._computedWidthParsed;

if(R._allocationLoops==Q){R._computedWidthFlexValue=Math.round(R._computedWidthFlexValue);
O+=R._computedWidthFlexValue;
delete R._allocationLoops;
qx.lang.Array.removeAt(Y,P);
}else{if(U==0){R._computedWidthFlexValue=Math.round(R._computedWidthFlexValue);
O+=R._computedWidthFlexValue;
delete R._allocationLoops;
}else{R._allocationLoops-=Q;
}}}}}}R._computedWidthFlexValue+=H-O;
},invalidateChildrenFlexWidth:function(){delete this._childrenFlexWidthComputed;
},computeChildrenNeededWidth:function(){var w=this.getWidget();
return qx.legacy.ui.layout.impl.LayoutImpl.prototype.computeChildrenNeededWidth_sum.call(this)+((w.getVisibleChildrenLength()-1)*w.getSpacing());
},updateSelfOnChildOuterWidthChange:function(F){this.getWidget()._invalidateAccumulatedChildrenOuterWidth();
},updateChildOnInnerWidthChange:function(bt){if(this.getWidget().getHorizontalChildrenAlign()==A){bt.addToLayoutChanges(D);
}var bu=bt._recomputePercentX();
var bv=bt._recomputeFlexX();
return bu||bv;
},updateChildOnInnerHeightChange:function(bG){var bI=bG._recomputePercentY();
var bH=bG._recomputeStretchingY();
if((bG.getVerticalAlign()||this.getWidget().getVerticalChildrenAlign())==v){bG.addToLayoutChanges(x);
}return bI||bH;
},updateSelfOnJobQueueFlush:function(bc){if(bc.addChild||bc.removeChild){this.getWidget()._invalidateAccumulatedChildrenOuterWidth();
}},updateChildrenOnJobQueueFlush:function(bd){var bf=false,bg=false;
var be=this.getWidget();
if(bd.orientation){bf=bg=true;
}if(bd.spacing||bd.orientation||bd.reverseChildrenOrder||bd.horizontalChildrenAlign){be._addChildrenToLayoutQueue(D);
}
if(bd.verticalChildrenAlign){be._addChildrenToLayoutQueue(x);
}
if(bd.stretchChildrenOrthogonalAxis){bg=true;
}if(bf){be._recomputeChildrenStretchingX();
be._addChildrenToLayoutQueue(u);
}
if(bg){be._recomputeChildrenStretchingY();
be._addChildrenToLayoutQueue(q);
}return true;
},updateChildrenOnRemoveChild:function(bo,bp){var w=this.getWidget(),br=w.getVisibleChildren(),bs=br.length,bq,i=-1;
if(this.getEnableFlexSupport()){for(i=0;i<bs;i++){bq=br[i];

if(bq.getHasFlexX()){bp=Math.min(bp,i);
break;
}}i=-1;
}switch(w.getLayoutMode()){case C:case z:while((bq=br[++i])&&i<bp){bq.addToLayoutChanges(D);
}break;
case A:case B:while(bq=br[++i]){bq.addToLayoutChanges(D);
}break;
default:i+=bp;

while(bq=br[++i]){bq.addToLayoutChanges(D);
}}},updateChildrenOnMoveChild:function(bA,bB,bC){var bF=this.getWidget().getVisibleChildren();
var bD=Math.min(bB,bC);
var bE=Math.max(bB,bC)+1;

for(var i=bD;i<bE;i++){bF[i].addToLayoutChanges(D);
}},flushChildrenQueue:function(bh){var w=this.getWidget(),bk=w.getVisibleChildren(),bj=bk.length,bi,i;
if(this.getEnableFlexSupport()){this.invalidateChildrenFlexWidth();

for(i=0;i<bj;i++){bi=bk[i];

if(bi.getHasFlexX()){bi._computedWidthValue=null;

if(bi._recomputeBoxWidth()){bi._recomputeOuterWidth();
bi._recomputeInnerWidth();
}bh[bi.toHashCode()]=bi;
bi._layoutChanges.width=true;
}}}
switch(w.getLayoutMode()){case C:case z:for(var i=bj-1;i>=0&&!bh[bk[i].toHashCode()];i--){}for(var j=0;j<=i;j++){w._layoutChild(bi=bk[j]);
}break;
case A:case B:i=-1;

while(bi=bk[++i]){w._layoutChild(bi);
}break;
default:i=-1;
var bl=false;

while(bi=bk[++i]){if(bl||bh[bi.toHashCode()]){w._layoutChild(bi);
bl=true;
}}}},layoutChild:function(bm,bn){this.layoutChild_sizeX(bm,bn);
this.layoutChild_sizeY(bm,bn);
this.layoutChild_sizeLimitX(bm,bn);
this.layoutChild_sizeLimitY(bm,bn);
this.layoutChild_locationX(bm,bn);
this.layoutChild_locationY(bm,bn);
this.layoutChild_marginX(bm,bn);
this.layoutChild_marginY(bm,bn);
},layoutChild_sizeX:qx.core.Variant.select(y,{"mshtml|opera|webkit":function(ba,bb){if(bb.initial||bb.width||bb.minWidth||bb.maxWidth){if(ba._isWidthEssential()&&(!ba._computedWidthTypeNull||!ba._computedMinWidthTypeNull||!ba._computedMaxWidthTypeNull)){ba._renderRuntimeWidth(ba.getBoxWidth());
}else{ba._resetRuntimeWidth();
}}},"default":function(a,b){if(b.initial||b.width){if(a._isWidthEssential()&&!a._computedWidthTypeNull){a._renderRuntimeWidth(a.getWidthValue());
}else{a._resetRuntimeWidth();
}}}}),layoutChild_sizeY:qx.core.Variant.select(y,{"mshtml|opera|webkit":function(bw,bx){if(bx.initial||bx.height||bx.minHeight||bx.maxHeight){if((bw._isHeightEssential()&&(!bw._computedHeightTypeNull||!bw._computedMinHeightTypeNull||!bw._computedMaxHeightTypeNull))||(bw.getAllowStretchY()&&this.getWidget().getStretchChildrenOrthogonalAxis())){bw._renderRuntimeHeight(bw.getBoxHeight());
}else{bw._resetRuntimeHeight();
}}},"default":function(by,bz){if(bz.initial||bz.height){if(by._isHeightEssential()&&!by._computedHeightTypeNull){by._renderRuntimeHeight(by.getHeightValue());
}else{by._resetRuntimeHeight();
}}}}),layoutChild_locationX:function(h,k){var n=this.getWidget();
if(n.getFirstVisibleChild()==h){switch(n.getLayoutMode()){case C:case z:var m=n.getPaddingRight()+n.getAccumulatedChildrenOuterWidth()-h.getOuterWidth();
break;
case A:case B:var m=n.getPaddingLeft()+Math.round((n.getInnerWidth()-n.getAccumulatedChildrenOuterWidth())/2);
break;
default:var m=n.getPaddingLeft();
}}else{var l=h.getPreviousVisibleSibling();

switch(n.getLayoutMode()){case C:case z:var m=l._cachedLocationHorizontal-h.getOuterWidth()-n.getSpacing();
break;
default:var m=l._cachedLocationHorizontal+l.getOuterWidth()+n.getSpacing();
}}h._cachedLocationHorizontal=m;
switch(n.getLayoutMode()){case C:case p:case B:m+=!h._computedRightTypeNull?h.getRightValue():!h._computedLeftTypeNull?-(h.getLeftValue()):0;
h._resetRuntimeLeft();
h._renderRuntimeRight(m);
break;
default:m+=!h._computedLeftTypeNull?h.getLeftValue():!h._computedRightTypeNull?-(h.getRightValue()):0;
h._resetRuntimeRight();
h._renderRuntimeLeft(m);
}},layoutChild_locationY:function(c,d){var f=this.getWidget();
if(qx.core.Variant.isSet(y,r)){if(c.getAllowStretchY()&&f.getStretchChildrenOrthogonalAxis()&&c._computedHeightTypeNull){c._renderRuntimeTop(f.getPaddingTop()||0);
c._renderRuntimeBottom(f.getPaddingBottom()||0);
return;
}}var g=c.getVerticalAlign()||f.getVerticalChildrenAlign();
var e=g==v?Math.round((f.getInnerHeight()-c.getOuterHeight())/2):0;
if(g==t){e+=f.getPaddingBottom();
if(!c._computedBottomTypeNull){e+=c.getBottomValue();
}else if(!c._computedTopTypeNull){e-=c.getTopValue();
}c._resetRuntimeTop();
c._renderRuntimeBottom(e);
}else{e+=f.getPaddingTop();
if(!c._computedTopTypeNull){e+=c.getTopValue();
}else if(!c._computedBottomTypeNull){e-=c.getBottomValue();
}c._resetRuntimeBottom();
c._renderRuntimeTop(e);
}}}});
})();
(function(){var v="",u="auto",t="text",s="qx.client",r="html",q="qx.dynlocale",p="_applyText",o="Boolean",n=")",m="color",bi="whiteSpace",bh="changeLocale",bg="String",bf="textAlign",be="mshtml|webkit",bd="ellipsis",bc="hidden",bb="opera",ba="on",Y="</div><span style='float:left'>&hellip;</span>",C="_applyTextAlign",D="qx.legacy.ui.basic.Label",A=")+>)|(&([^;]|",B="_applyMnemonic",y="nowrap",z="default",w="_applyWrap",x="-1",E=")+;)|[^&",F="<span style=\"text-decoration:underline\">",M="<div style='float:left;width:",K="px;overflow:hidden;white-space:nowrap'>",Q="center",O="&nbsp;",U="div",S=" (",H="i",X="changeText",W="right",V="justify",G="normal",I="</span>",J="&nbsp;&nbsp;",L="label",N="])*)(",P="^(((<([^>]|",R="left",T="absolute";
qx.Class.define(D,{extend:qx.legacy.ui.basic.Terminator,construct:function(h,i,j){arguments.callee.base.call(this);

if(j!=null){this.setMode(j);
}
if(h!=null){this.setText(h);
}
if(i!=null){this.setMnemonic(i);
}
if(qx.core.Variant.isSet(q,ba)){qx.locale.Manager.getInstance().addListener(bh,this._onChangeLocale,this);
}this.initWidth();
this.initHeight();
this.initSelectable();
this.initCursor();
this.initWrap();
},statics:{_getMeasureNode:function(){var k=this._measureNode;

if(!k){k=document.createElement(U);
var l=k.style;
l.width=l.height=u;
l.visibility=bc;
l.position=T;
l.zIndex=x;
document.body.appendChild(k);
this._measureNode=k;
}return k;
}},properties:{appearance:{refine:true,init:L},width:{refine:true,init:u},height:{refine:true,init:u},allowStretchX:{refine:true,init:false},allowStretchY:{refine:true,init:false},selectable:{refine:true,init:false},cursor:{refine:true,init:z},text:{apply:p,init:v,dispose:true,event:X,check:bg},wrap:{check:o,init:false,nullable:true,apply:w},textAlign:{check:[R,Q,W,V],nullable:true,themeable:true,apply:C},textOverflow:{check:o,init:true,apply:p},mode:{check:[r,t,u],init:u,apply:p},mnemonic:{check:bg,nullable:true,apply:B}},members:{_content:v,_isHtml:false,setHtml:function(bA){this.warn("Deprecated: please use setText() instead.");
this.trace();
this.setText(bA);
},getHtml:function(){this.warn("Deprecated: please use getText() instead.");
this.trace();
return this.getText();
},_applyTextAlign:function(a,b){a===null?this.removeStyleProperty(bf):this.setStyleProperty(bf,a);
},_applyFont:function(c,d){qx.legacy.theme.manager.Font.getInstance().connect(this._styleFont,this,c);
},_styleFont:function(bz){this._invalidatePreferredInnerDimensions();
bz?bz.render(this):qx.legacy.ui.core.Font.reset(this);
},_applyTextColor:function(bu,bv){qx.legacy.theme.manager.Color.getInstance().connect(this._styleTextColor,this,bu);
},_styleTextColor:function(bl){bl?this.setStyleProperty(m,bl):this.removeStyleProperty(m);
},_applyWrap:function(bj,bk){bj==null?this.removeStyleProperty(bi):this.setStyleProperty(bi,bj?G:y);
},_onChangeLocale:qx.core.Variant.select(q,{"on":function(e){var bt=this.getText();

if(bt.translate){this.setText(bt.translate());
}},"off":null}),_applyText:function(bo){var bq=this.getMode();

if(bq===u){bq=qx.legacy.util.Validation.isValidString(bo)&&bo.match(/<.*>/)?r:t;
}
switch(bq){case t:var bp=qx.bom.String.escape(bo).replace(/(^ | $)/g,O).replace(/  /g,J);
this._isHtml=bp!==bo;
this._content=bp;
break;
case r:this._isHtml=true;
this._content=bo;
break;
}
if(this._isCreated){this._renderContent();
}},_applyMnemonic:function(br,bs){this._mnemonicTest=br?new RegExp(P+br+A+br+E+br+N+br+n,H):null;

if(this._isCreated){this._renderContent();
}},_computeObjectNeededDimensions:function(){var by=arguments.callee.self._getMeasureNode();
var bx=by.style;
var bw=this._styleProperties;
bx.fontFamily=bw.fontFamily||v;
bx.fontSize=bw.fontSize||v;
bx.fontWeight=bw.fontWeight||v;
bx.fontStyle=bw.fontStyle||v;
if(this._isHtml){by.innerHTML=this._content;
}else{by.innerHTML=v;
qx.bom.element.Attribute.set(by,t,this._content);
}this._cachedPreferredInnerWidth=by.scrollWidth;
this._cachedPreferredInnerHeight=by.scrollHeight;
},_computePreferredInnerWidth:function(){this._computeObjectNeededDimensions();
return this._cachedPreferredInnerWidth;
},_computePreferredInnerHeight:function(){this._computeObjectNeededDimensions();
return this._cachedPreferredInnerHeight;
},__vu:function(bm,bn){return (M+(bn-14)+K+bm+Y);
},_postApply:function(){var f=this._content;
var g=this._getTargetNode();

if(f==null){g.innerHTML=v;
return;
}
if(this.getMnemonic()){if(this._mnemonicTest.test(f)){f=RegExp.$1+F+RegExp.$7+I+RegExp.rightContext;
this._isHtml=true;
}else{f+=S+this.getMnemonic()+n;
}}var e=g.style;

if(this.getTextOverflow()&&!this.getWrap()){if(this.getInnerWidth()<this.getPreferredInnerWidth()){e.overflow=bc;

if(qx.core.Variant.isSet(s,be)){e.textOverflow=bd;
}else if(qx.core.Variant.isSet(s,bb)){e.OTextOverflow=bd;
}else{f=this.__vu(f,this.getInnerWidth());
this._isHtml=true;
}}else{e.overflow=v;

if(qx.core.Variant.isSet(s,be)){e.textOverflow=v;
}else if(qx.core.Variant.isSet(s,bb)){e.OTextOverflow=v;
}}}
if(this._isHtml){g.innerHTML=f;
}else{g.innerHTML=v;
qx.bom.element.Attribute.set(g,t,f);
}}},destruct:function(){if(qx.core.Variant.isSet(q,ba)){qx.locale.Manager.getInstance().removeListener(bh,this._onChangeLocale,this);
}}});
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
(function(){var c="qx.type.BaseString";
qx.Class.define(c,{extend:String,construct:function(b){{};
this.__iN=b;
},members:{__iN:null,toString:function(){return this.__iN;
},setValue:function(d){this.__iN=d;
},valueOf:function(){return this.__iN;
},toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},base:function(e,f){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(a){{};
}});
})();
(function(){var d="qx.locale.LocalizedString";
qx.Class.define(d,{extend:qx.type.BaseString,construct:function(a,b,c){arguments.callee.base.call(this,a);
this.__iO=b;
this.__iP=c;
},members:{__iO:null,__iP:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__iO,this.__iP);
}}});
})();
(function(){var U="_",T="",S="qx.dynlocale",R="on",Q="_applyLocale",P="changeLocale",O="C",N="__iR",M="__iQ",L="qx.locale.Manager",J="String",K="singleton";
qx.Class.define(L,{type:K,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iQ=qx.$$translations||{};
this.__iR=qx.$$locales||{};
var v=qx.bom.client.Locale;
var t=v.LOCALE;
var u=v.VARIANT;

if(u!==T){t+=U+u;
}this.setLocale(t||this.__iS);
},statics:{tr:function(X,Y){var ba=qx.lang.Array.fromArguments(arguments);
ba.splice(0,1);
return qx.locale.Manager.getInstance().translate(X,ba);
},trn:function(x,y,z,A){var B=qx.lang.Array.fromArguments(arguments);
B.splice(0,3);
if(z!=1){return qx.locale.Manager.getInstance().translate(y,B);
}else{return qx.locale.Manager.getInstance().translate(x,B);
}},trc:function(F,G,H){var I=qx.lang.Array.fromArguments(arguments);
I.splice(0,2);
return qx.locale.Manager.getInstance().translate(G,I);
},marktr:function(w){return w;
}},properties:{locale:{check:J,nullable:true,apply:Q,event:P}},members:{__iS:O,__iT:null,__iU:null,__iQ:null,__iR:null,getLanguage:function(){return this.__iU;
},getTerritory:function(){return this.getLocale().split(U)[1]||T;
},getAvailableLocales:function(){var k=[];

for(var j in this.__iR){if(j!=this.__iS){k.push(j);
}}return k;
},__iV:function(C){var E;
var D=C.indexOf(U);

if(D==-1){E=C;
}else{E=C.substring(0,D);
}return E;
},_applyLocale:function(V,W){this.__iT=V;
this.__iU=this.__iV(V);
},addTranslation:function(bb,bc){var bd=this.__iQ;

if(bd[bb]){for(var be in bc){bd[bb][be]=bc[be];
}}else{bd[bb]=bc;
}},translate:function(l,m,n){var s;
var q=this.__iQ;

if(!q){return l;
}
if(n){var p=this.__iV(n);
}else{n=this.__iT;
p=this.__iU;
}
if(!s&&q[n]){s=q[n][l];
}
if(!s&&q[p]){s=q[p][l];
}
if(!s&&q[this.__iS]){s=q[this.__iS][l];
}
if(!s){s=l;
}
if(m.length>0){var o=[];

for(var i=0;i<m.length;i++){var r=m[i];

if(r.translate){o[i]=r.translate();
}else{o[i]=r;
}}s=qx.lang.String.format(s,o);
}
if(qx.core.Variant.isSet(S,R)){s=new qx.locale.LocalizedString(s,l,m);
}return s;
},localize:function(a,b,c){var h;
var f=this.__iR;

if(!f){return a;
}
if(c){var e=this.__iV(c);
}else{c=this.__iT;
e=this.__iU;
}
if(!h&&f[c]){h=f[c][a];
}
if(!h&&f[e]){h=f[e][a];
}
if(!h&&f[this.__iS]){h=f[this.__iS][a];
}
if(!h){h=a;
}
if(b.length>0){var d=[];

for(var i=0;i<b.length;i++){var g=b[i];

if(g.translate){d[i]=g.translate();
}else{d[i]=g;
}}h=qx.lang.String.format(h,d);
}
if(qx.core.Variant.isSet(S,R)){h=new qx.locale.LocalizedString(h,a,b);
}return h;
}},destruct:function(){this._disposeFields(M,N);
}});
})();
(function(){var j="\n",i="",h=" &nbsp;",g="<br>",f=" ",e="qx.bom.String";
qx.Class.define(e,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(n){return qx.util.StringEscape.escape(n,qx.bom.String.FROM_CHARCODE);
},unescape:function(o){return qx.util.StringEscape.unescape(o,qx.bom.String.TO_CHARCODE);
},fromText:function(p){return qx.bom.String.escape(p).replace(/(  |\n)/g,function(k){var l={"  ":h,"\n":g};
return l[k]||k;
});
},toText:function(d){return qx.bom.String.unescape(d.replace(/\s+|<([^>])+>/gi,function(m){if(/\s+/.test(m)){return f;
}else if(/^<BR|^<br/gi.test(m)){return j;
}else{return i;
}}));
}},defer:function(a,b,c){a.FROM_CHARCODE=qx.lang.Object.invert(a.TO_CHARCODE);
}});
})();
(function(){var u=";",t="&",s="",r="&#",q='X',p='#',o="qx.client",n="qx.util.StringEscape";
qx.Bootstrap.define(n,{statics:{escape:qx.core.Variant.select(o,{"mshtml":function(v,w){var y,A=[];

for(var i=0,l=v.length;i<l;i++){var z=v.charAt(i);
var x=z.charCodeAt(0);

if(w[x]){y=t+w[x]+u;
}else{if(x>0x7F){y=r+x+u;
}else{y=z;
}}A[A.length]=y;
}return A.join(s);
},"default":function(c,d){var f,h=s;

for(var i=0,l=c.length;i<l;i++){var g=c.charAt(i);
var e=g.charCodeAt(0);

if(d[e]){f=t+d[e]+u;
}else{if(e>0x7F){f=r+e+u;
}else{f=g;
}}h+=f;
}return h;
}}),unescape:function(a,b){return a.replace(/&[#\w]+;/gi,function(j){var k=j;
var j=j.substring(1,j.length-1);
var m=b[j];

if(m){k=String.fromCharCode(m);
}else{if(j.charAt(0)==p){if(j.charAt(1).toUpperCase()==q){m=j.substring(2);
if(m.match(/^[0-9A-Fa-f]+$/gi)){k=String.fromCharCode(parseInt(m,16));
}}else{m=j.substring(1);
if(m.match(/^\d+$/gi)){k=String.fromCharCode(parseInt(m,10));
}}}}return k;
});
}}});
})();
(function(){var S="qx.client",R="",Q="error",P="Boolean",O="auto",N="load",M="gecko|opera|webkit",L="qx.legacy.io.image.Preloader",K="changeSource",J="_applyPreloader",bi="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",bh="qx.event.type.Event",bg="String",bf="_applyLoaded",be="_applySource",bd="img",bc="top",bb="qx.legacy.ui.basic.Image",ba="image",Y="Gray() Alpha(Opacity=30)",W="0 none",X="webkit",U="_image",V="qx/static/blank.gif",T="',sizingMethod='scale')";
qx.Class.define(bb,{extend:qx.legacy.ui.basic.Terminator,construct:function(r,t,u){arguments.callee.base.call(this);
this._blank=qx.util.ResourceManager.toUri(V);
if(r!=null){this.setSource(r);
}if(t!=null){this.setWidth(t);
}else{this.initWidth();
}
if(u!=null){this.setHeight(u);
}else{this.initHeight();
}this.initSelectable();
},events:{"error":bh},properties:{allowStretchX:{refine:true,init:false},allowStretchY:{refine:true,init:false},selectable:{refine:true,init:false},width:{refine:true,init:O},height:{refine:true,init:O},appearance:{refine:true,init:ba},source:{check:bg,apply:be,event:K,nullable:true,themeable:true},preloader:{check:L,apply:J,nullable:true},loaded:{check:P,init:false,apply:bf},resizeToInner:{check:P,init:false}},members:{_onload:function(){this.setLoaded(true);
},_onerror:function(){this.warn("Could not load: "+this.getSource());
this.setLoaded(false);
this.fireEvent(Q);
},_beforeAppear:function(){var q=this.getSource();

if(q){qx.legacy.io.image.Manager.getInstance().show(q);
this._registeredAsVisible=true;
}return arguments.callee.base.call(this);
},_beforeDisappear:function(){var bl=this.getSource();

if(bl&&this._registeredAsVisible){qx.legacy.io.image.Manager.getInstance().hide(bl);
delete this._registeredAsVisible;
}return arguments.callee.base.call(this);
},_applySource:function(l,m){var n=qx.legacy.io.image.Manager.getInstance();

if(m){n.remove(m);

if(this._registeredAsVisible){n.hide(m);
delete this._registeredAsVisible;
}}
if(l){n.add(l);

if(this.isSeeable()){this._registeredAsVisible=true;
n.show(l);
}}
if(this.isCreated()){this._connect();
}},_connect:function(){var bm=qx.legacy.util.AliasManager.getInstance();
bm.connect(this._syncSource,this,this.getSource());
},_syncSource:function(z){if(z===null){this.setPreloader(null);
}else{var A=qx.legacy.io.image.PreloaderManager.getInstance().create(z);
this.setPreloader(A);
}},_applyPreloader:function(E,F){if(F){F.removeListener(N,this._onload,this);
F.removeListener(Q,this._onerror,this);
}
if(E){this.setLoaded(false);

if(E.isErroneous()){this._onerror();
}else if(E.isLoaded()){this.setLoaded(true);
}else{E.addListener(N,this._onload,this);
E.addListener(Q,this._onerror,this);
}}else{this.setLoaded(false);
}},_applyLoaded:function(x,y){if(x&&this.isCreated()){this._renderContent();
}else if(!x){this._invalidatePreferredInnerWidth();
this._invalidatePreferredInnerHeight();
}},_applyElement:function(G,H){if(G){if(!this._image){try{if(qx.core.Variant.isSet(S,X)){this._image=document.createElement(bd);
}else{this._image=new Image;
}this._image.style.border=W;
this._image.style.verticalAlign=bc;
this._image.alt=R;
this._image.title=R;
}catch(bk){this.error("Failed while creating image #1",bk);
}
if(qx.core.Variant.isSet(S,M)){this._styleEnabled();
}}G.appendChild(this._image);
}arguments.callee.base.call(this,G,H);

if(G&&this.getSource()){this._connect();
}},_postApply:function(){this._postApplyDimensions();
this._updateContent();
},_applyEnabled:function(f,g){if(this._image){this._styleEnabled();
}return arguments.callee.base.call(this,f,g);
},_updateContent:qx.core.Variant.select(S,{"mshtml":function(){var i=this._image;
var C=this.getPreloader();
var B=C&&C.isLoaded()?qx.util.ResourceManager.toUri(C.getSource()):this._blank;

if(C&&C.getIsPng()&&this.getEnabled()){i.src=this._blank;
i.style.filter=bi+B+T;
}else{i.src=B;
i.style.filter=this.getEnabled()?R:Y;
}},"default":function(){var j=this.getPreloader();
var h=j&&j.isLoaded()?qx.util.ResourceManager.toUri(j.getSource()):this._blank;
this._image.src=h;
}}),_resetContent:qx.core.Variant.select(S,{"mshtml":function(){this._image.src=this._blank;
this._image.style.filter=R;
},"default":function(){this._image.src=this._blank;
}}),_styleEnabled:qx.core.Variant.select(S,{"mshtml":function(){this._updateContent();
},"default":function(){if(this._image){var o=this.getEnabled()===false?0.3:R;
var s=this._image.style;
s.opacity=s.KhtmlOpacity=s.MozOpacity=o;
}}}),_computePreferredInnerWidth:function(){var I=this.getPreloader();
return I?I.getWidth():0;
},_computePreferredInnerHeight:function(){var bj=this.getPreloader();
return bj?bj.getHeight():0;
},_renderContent:function(){arguments.callee.base.call(this);
qx.legacy.ui.core.Widget.flushGlobalQueues();
},_postApplyDimensions:qx.core.Variant.select(S,{"mshtml":function(){try{var D=this._image.style;

if(this.getResizeToInner()){D.pixelWidth=this.getInnerWidth();
D.pixelHeight=this.getInnerHeight();
}else{D.pixelWidth=this.getPreferredInnerWidth();
D.pixelHeight=this.getPreferredInnerHeight();
}}catch(p){this.error("postApplyDimensions failed",p);
}},"default":function(){try{var k=this._image;

if(this.getResizeToInner()){k.width=this.getInnerWidth();
k.height=this.getInnerHeight();
}else{k.width=this.getPreferredInnerWidth();
k.height=this.getPreferredInnerHeight();
}}catch(c){this.error("postApplyDimensions failed",c);
}}}),_changeInnerWidth:qx.core.Variant.select(S,{"mshtml":function(v,w){if(this.getResizeToInner()){this._image.style.pixelWidth=v;
}},"default":function(bn,bo){if(this.getResizeToInner()){this._image.width=bn;
}}}),_changeInnerHeight:qx.core.Variant.select(S,{"mshtml":function(a,b){if(this.getResizeToInner()){this._image.style.pixelHeight=a;
}},"default":function(d,e){if(this.getResizeToInner()){this._image.height=d;
}}})},destruct:function(){if(this._image){this._image.style.filter=R;
}this._disposeFields(U);
}});
})();
(function(){var f="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(f,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(k,l){return this.getChildrenContainer().add(k,l);
},remove:function(g){return this.getChildrenContainer().remove(g);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(d){return this.getChildrenContainer().indexOf(d);
},addAt:function(h,i,j){this.getChildrenContainer().addAt(h,i,j);
},addBefore:function(m,n,o){this.getChildrenContainer().addBefore(m,n,o);
},addAfter:function(a,b,c){this.getChildrenContainer().addAfter(a,b,c);
},removeAt:function(e){this.getChildrenContainer().removeAt(e);
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var L="resize",K="Boolean",J="nw-resize",I="mouseup",H="mousedown",G="w-resize",F="losecapture",E="se-resize",D="resize-frame",C="ne-resize",v="n-resize",B="sw-resize",y="mouseout",t="__lL",s="s-resize",x="mousemove",w="move",z="maximized",r="Integer",A="e-resize",u="qx.ui.core.MResizable";
qx.Mixin.define(u,{construct:function(){this.addListener(H,this.__lV,this,true);
this.addListener(I,this.__lW,this);
this.addListener(x,this.__lY,this);
this.addListener(y,this.__ma,this);
this.addListener(F,this.__lX,this);
},properties:{resizable:{check:K,init:true},resizeAllEdges:{check:K,init:true},resizeSensitivity:{check:r,init:5},useResizeFrame:{check:K,init:true}},members:{__lL:null,__lM:null,__lN:null,__lO:null,__lP:null,__lQ:function(){var S=this.__lL;

if(!S){S=this.__lL=new qx.ui.core.Widget();
S.setAppearance(D);
S.exclude();
qx.core.Init.getApplication().getRoot().add(S);
}return S;
},__lR:function(){var q=this.__lP;
var p=this.__lQ();
p.setUserBounds(q.left,q.top,q.width,q.height);
p.show();
p.setZIndex(this.getZIndex()+1);
},__lS:function(e){var i=this.__lM;
var j=this.getSizeHint();
var m=this.__lP;
var h=m.width;
var l=m.height;
var o=m.left;
var top=m.top;
var n;
if(i&1||i&2){n=e.getDocumentTop()-this.__lO;

if(i&1){l-=n;
}else{l+=n;
}
if(l<j.minHeight){l=j.minHeight;
}else if(l>j.maxHeight){l=j.maxHeight;
}
if(i&1){top+=m.height-l;
}}if(i&4||i&8){n=e.getDocumentLeft()-this.__lN;

if(i&4){h-=n;
}else{h+=n;
}
if(h<j.minWidth){h=j.minWidth;
}else if(h>j.maxWidth){h=j.maxWidth;
}
if(i&4){o+=m.width-h;
}}var k=this.getBounds();
return {viewportLeft:o,viewportTop:top,parentLeft:k.left+o-m.left,parentTop:k.top+top-m.top,width:h,height:l};
},__lT:{1:v,2:s,4:G,8:A,5:J,6:B,9:C,10:E},__lU:function(e){if(!this.getResizable()){return;
}var f=this.getContentLocation();
var a=this.getResizeAllEdges();
var d=this.getResizeSensitivity();
var g=e.getDocumentLeft();
var c=e.getDocumentTop();
var b=0;

if(a&&Math.abs(f.top-c)<d){b+=1;
}else if(Math.abs(f.bottom-c)<d){b+=2;
}
if(a&&Math.abs(f.left-g)<d){b+=4;
}else if(Math.abs(f.right-g)<d){b+=8;
}this.__lM=b;
},__lV:function(e){if(!this.__lM){return;
}this.addState(L);
this.capture();
this.__lN=e.getDocumentLeft();
this.__lO=e.getDocumentTop();
var location=this.getContainerLocation();
var R=this.getBounds();
this.__lP={top:location.top,left:location.left,width:R.width,height:R.height};
if(this.getUseResizeFrame()){this.__lR();
}e.stop();
},__lW:function(e){if(!this.__lM){return;
}if(this.getUseResizeFrame()){this.__lQ().exclude();
}var T=this.__lS(e);
this.setWidth(T.width);
this.setHeight(T.height);
if(this.getResizeAllEdges()){this.setLayoutProperties({left:T.parentLeft,top:T.parentTop});
}this.__lM=0;
this.removeState(L);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
},__lX:function(e){if(!this.__lM){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this.__lQ().exclude();
}},__lY:function(e){if(this.hasState(L)){var P=this.__lS(e);
if(this.getUseResizeFrame()){var N=this.__lQ();
N.setUserBounds(P.viewportLeft,P.viewportTop,P.width,P.height);
}else{this.setWidth(P.width);
this.setHeight(P.height);
if(this.getResizeAllEdges()){this.setLayoutProperties({left:P.parentLeft,top:P.parentTop});
}}e.stop();
}else if(!this.hasState(z)){this.__lU(e);
var Q=this.__lM;
var O=this.getApplicationRoot();

if(Q){var M=this.__lT[Q];
this.setCursor(M);
O.setGlobalCursor(M);
}else if(this.getCursor()){this.resetCursor();
O.resetGlobalCursor();
}}},__ma:function(e){if(this.getCursor()&&!this.hasState(L)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){this._disposeObjects(t);
}});
})();
(function(){var s="move",r="Boolean",q="__md",p="mouseup",o="mousedown",n="losecapture",m="__mb",l="qx.ui.core.MMovable",k="__mc",j="mousemove",h="maximized",i="move-frame";
qx.Mixin.define(l,{properties:{movable:{check:r,init:true},useMoveFrame:{check:r,init:false}},members:{__mb:null,__mc:null,__md:null,__me:null,__mf:null,__mg:null,__mh:null,_activateMoveHandle:function(w){if(this.__mb){throw new Error("The move handle could not be redefined!");
}this.__mb=w;
w.addListener(o,this._onMoveMouseDown,this);
w.addListener(p,this._onMoveMouseUp,this);
w.addListener(j,this._onMoveMouseMove,this);
w.addListener(n,this.__ml,this);
},__mi:function(){var A=this.__mc;

if(!A){A=this.__mc=new qx.ui.core.Widget();
A.setAppearance(i);
A.exclude();
qx.core.Init.getApplication().getRoot().add(A);
}return A;
},__mj:function(){var u=this.getBounds();
var t=this.__mi();
t.setUserBounds(u.left,u.top,u.width,u.height);
t.show();
t.setZIndex(this.getZIndex()+1);
},__mk:function(e){var b=this.__md;
var f=Math.max(b.left,Math.min(b.right,e.getDocumentLeft()));
var d=Math.max(b.top,Math.min(b.bottom,e.getDocumentTop()));
var a=this.__me+f;
var c=this.__mf+d;
return {viewportLeft:a,viewportTop:c,parentLeft:a-this.__mg,parentTop:c-this.__mh};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(h)){return;
}var parent=this.getLayoutParent();
var y=parent.getContentLocation();
var z=parent.getBounds();
this.__md={left:y.left,top:y.top,right:y.left+z.width,bottom:y.top+z.height};
var x=this.getContainerLocation();
this.__mg=y.left;
this.__mh=y.top;
this.__me=x.left-e.getDocumentLeft();
this.__mf=x.top-e.getDocumentTop();
this.addState(s);
this.__mb.capture();
if(this.getUseMoveFrame()){this.__mj();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(s)){return;
}var v=this.__mk(e);

if(this.getUseMoveFrame()){this.__mi().setDomPosition(v.viewportLeft,v.viewportTop);
}else{this.setDomPosition(v.parentLeft,v.parentTop);
}},_onMoveMouseUp:function(e){if(!this.hasState(s)){return;
}this.removeState(s);
this.__mb.releaseCapture();
var g=this.__mk(e);
this.setLayoutProperties({left:g.parentLeft,top:g.parentTop});
if(this.getUseMoveFrame()){this.__mi().exclude();
}},__ml:function(e){if(!this.hasState(s)){return;
}this.removeState(s);
if(this.getUseMoveFrame()){this.__mi().exclude();
}}},destruct:function(){this._disposeObjects(k,m);
this._disposeFields(q);
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
(function(){var d="qx.ui.window.IWindowManager";
qx.Interface.define(d,{members:{setDesktop:function(f){this.assertInterface(f,qx.ui.window.IDesktop);
},changeActiveWindow:function(a,b){},updateStack:function(){},bringToFront:function(c){this.assertInstance(c,qx.ui.window.Window);
},sendToBack:function(e){this.assertInstance(e,qx.ui.window.Window);
}}});
})();
(function(){var h="qx.ui.window.Manager",g="__mm";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__mm:null,setDesktop:function(p){this.__mm=p;
this.updateStack();
},changeActiveWindow:function(q,r){this.bringToFront(q);
},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__mm.unblockContent();
var k=this.__mm.getWindows();
var o=this._minZIndex-1;
var n=false;
var m,j;

for(var i=0,l=k.length;i<l;i++){m=k[i];

if(!m.isVisible()){continue;
}o+=2;
m.setZIndex(o);
if(m.getModal()){this.__mm.blockContent(o-1);
}n=n||m.isActive();
j=m;
}
if(!n&&j){j.setActive(true);
}},bringToFront:function(a){var b=this.__mm.getWindows();
var c=qx.lang.Array.remove(b,a);

if(c){b.push(a);
this.updateStack();
}},sendToBack:function(d){var e=this.__mm.getWindows();
var f=qx.lang.Array.remove(e,d);

if(f){e.unshift(d);
this.updateStack();
}}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var s="Boolean",r="qx.event.type.Event",q="captionbar",p="maximize-button",o="_applyCaptionBarChange",n="restore-button",m="minimize-button",l="close-button",k="execute",j="pane",ba="title",Y="icon",X="maximized",W="statusbar-text",V="statusbar",U="String",T="active",S="beforeClose",R="beforeMinimize",Q="mousedown",z="changeStatus",A="changeIcon",x="excluded",y="_applyCaption",v="_applyActive",w="beforeRestore",t="normal",u="minimize",B="dblclick",C="changeModal",I="_applyShowStatusbar",H="_applyStatus",K="qx.ui.window.Window",J="changeCaption",M="_applyIcon",L="focusout",E="beforeMaximize",P="maximize",O="restore",N="window",D="close",F="changeActive",G="minimized";
qx.Class.define(K,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(bn,bo){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(q);
this._createChildControl(j);
if(bo!=null){this.setIcon(bo);
}
if(bn!=null){this.setCaption(bn);
}this._updateCaptionBar();
this.addListener(Q,this._onWindowMouseDown,this,true);
this.addListener(L,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":r,"close":r,"beforeMinimize":r,"minimize":r,"beforeMaximize":r,"maximize":r,"beforeRestore":r,"restore":r},properties:{appearance:{refine:true,init:N},visibility:{refine:true,init:x},focusable:{refine:true,init:true},active:{check:s,init:false,apply:v,event:F},modal:{check:s,init:false,event:C},caption:{apply:y,event:J,nullable:true},icon:{check:U,nullable:true,apply:M,event:A,themeable:true},status:{check:U,nullable:true,apply:H,event:z},showClose:{check:s,init:true,apply:o,themeable:true},showMaximize:{check:s,init:true,apply:o,themeable:true},showMinimize:{check:s,init:true,apply:o,themeable:true},allowClose:{check:s,init:true,apply:o},allowMaximize:{check:s,init:true,apply:o},allowMinimize:{check:s,init:true,apply:o},showStatusbar:{check:s,init:false,apply:I}},members:{__mn:null,__mo:null,getChildrenContainer:function(){return this.getChildControl(j);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(bg){var bh;

switch(bg){case V:bh=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bh);
bh.add(this.getChildControl(W));
break;
case W:bh=new qx.ui.basic.Label();
bh.setContent(this.getStatus());
break;
case j:bh=new qx.ui.container.Composite();
this._add(bh,{flex:1});
break;
case q:var bj=new qx.ui.layout.Grid();
bj.setRowFlex(0,1);
bj.setColumnFlex(1,1);
bh=new qx.ui.container.Composite(bj);
this._add(bh);
bh.addListener(B,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bh);
break;
case Y:bh=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(q).add(bh,{row:0,column:0});
break;
case ba:bh=new qx.ui.basic.Label(this.getCaption());
bh.setWidth(0);
bh.setAllowGrowX(true);
var bi=this.getChildControl(q);
bi.add(bh,{row:0,column:1});
break;
case m:bh=new qx.ui.form.Button();
bh.setFocusable(false);
bh.addListener(k,this._onMinimizeButtonClick,this);
this.getChildControl(q).add(bh,{row:0,column:2});
break;
case n:bh=new qx.ui.form.Button();
bh.setFocusable(false);
bh.addListener(k,this._onRestoreButtonClick,this);
this.getChildControl(q).add(bh,{row:0,column:3});
break;
case p:bh=new qx.ui.form.Button();
bh.setFocusable(false);
bh.addListener(k,this._onMaximizeButtonClick,this);
this.getChildControl(q).add(bh,{row:0,column:4});
break;
case l:bh=new qx.ui.form.Button();
bh.setFocusable(false);
bh.addListener(k,this._onCloseButtonClick,this);
this.getChildControl(q).add(bh,{row:0,column:6});
break;
}return bh||arguments.callee.base.call(this,bg);
},_updateCaptionBar:function(){var f;

if(this.getIcon()){this._showChildControl(Y);
}else{this._excludeChildControl(Y);
}
if(this.getCaption()){this._showChildControl(ba);
}else{this._excludeChildControl(ba);
}
if(this.getShowMinimize()){this._showChildControl(m);
f=this.getChildControl(m);
this.getAllowMinimize()?f.resetEnabled():f.setEnabled(false);
}else{this._excludeChildControl(m);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(n);
this._excludeChildControl(p);
}else{this._showChildControl(p);
this._excludeChildControl(n);
}f=this.getChildControl(p);
this.getAllowMaximize()?f.resetEnabled():f.setEnabled(false);
}else{this._excludeChildControl(p);
this._excludeChildControl(n);
}
if(this.getShowClose()){this._showChildControl(l);
f=this.getChildControl(l);
this.getAllowClose()?f.resetEnabled():f.setEnabled(false);
}else{this._excludeChildControl(l);
}},close:function(){if(this.fireNonBubblingEvent(S,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(D);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bc=parent.getBounds();

if(bc){var bd=this.getSizeHint();
var bb=Math.round((bc.width-bd.width)/2);
var top=Math.round((bc.height-bd.height)/2);

if(top<0){top=0;
}this.moveTo(bb,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(!parent){return;
}
if(parent.supportsMaximize()){if(this.fireNonBubblingEvent(E,qx.event.type.Event,[false,true])){var br=this.getLayoutProperties();
this.__mo=br.left===undefined?0:br.left;
this.__mn=br.top===undefined?0:br.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(X);
this._updateCaptionBar();
this.fireEvent(P);
}}},minimize:function(){if(this.fireNonBubblingEvent(R,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(u);
}},restore:function(){if(!this.isMaximized()){return;
}
if(this.fireNonBubblingEvent(w,qx.event.type.Event,[false,true])){var i=this.__mo;
var top=this.__mn;
this.setLayoutProperties({edge:null,left:i,top:top});
this.removeState(X);
this._updateCaptionBar();
this.fireEvent(O);
}},moveTo:function(d,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:d,top:top});
},isMaximized:function(){return this.hasState(X);
},getMode:function(){if(!this.isVisible()){return G;
}else{if(this.isMaximized()){return X;
}else{return t;
}}},_applyActive:function(bs,bt){if(bt){this.removeState(T);
}else{this.addState(T);
}},_getContentPaddingTarget:function(){return this.getChildControl(j);
},_applyShowStatusbar:function(be,bf){if(be){this._showChildControl(V);
}else{this._excludeChildControl(V);
}},_applyCaptionBarChange:function(g,h){this._updateCaptionBar();
},_applyStatus:function(a,b){var c=this.getChildControl(W,true);

if(c){c.setContent(a);
}},_applyCaption:function(bp,bq){this.getChildControl(ba).setContent(bp);
},_applyIcon:function(bl,bm){this.getChildControl(Y).setSource(bl);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bk=e.getRelatedTarget();

if(bk!=null&&!qx.ui.core.Widget.contains(this,bk)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(m).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(n).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(p).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(l).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(c){this.assertInterface(c,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(b){this.assertInteger(b);
},unblockContent:function(){}}});
})();
(function(){var G="_applyLayoutChange",F="top",E="left",D="middle",C="Decorator",B="center",A="baseline",z="__ie",y="bottom",x="__ic",t="qx.ui.layout.VBox",w="__ib",v="_applyReversed",s="Integer",r="right",u="Boolean";
qx.Class.define(t,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){arguments.callee.base.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignY(b);
}
if(c){this.setSeparator(c);
}},properties:{alignY:{check:[F,D,y],init:F,apply:G},alignX:{check:[E,B,r,A],init:E,apply:G},spacing:{check:s,init:0,apply:G},separator:{check:C,nullable:true,apply:G},reversed:{check:u,init:false,apply:v}},members:{__ib:null,__ic:null,__id:null,__ie:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__if:function(){var M=this._getLayoutChildren();
var length=M.length;
var I=false;
var H=this.__ib&&this.__ib.length!=length&&this.__ic&&this.__ib;
var K;
var J=H?this.__ib:new Array(length);
var L=H?this.__ic:new Array(length);
if(this.getReversed()){M=M.concat().reverse();
}for(var i=0;i<length;i++){K=M[i].getLayoutProperties();

if(K.height!=null){J[i]=parseFloat(K.height)/100;
}
if(K.flex!=null){L[i]=K.flex;
I=true;
}}if(!H){this.__ib=J;
this.__ic=L;
}this.__id=I;
this.__ie=M;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(N,O){if(this._invalidChildrenCache){this.__if();
}var V=this.__ie;
var length=V.length;
var bg=qx.ui.layout.Util;
var bf=this.getSpacing();
var bj=this.getSeparator();

if(bj){var S=bg.computeVerticalSeparatorGaps(V,bf,bj);
}else{var S=bg.computeVerticalGaps(V,bf,true);
}var i,Q,R,ba;
var bb=[];
var bh=S;

for(i=0;i<length;i+=1){ba=this.__ib[i];
R=ba!=null?Math.floor((O-S)*ba):V[i].getSizeHint().height;
bb.push(R);
bh+=R;
}if(this.__id&&bh!=O){var X={};
var be,bi;

for(i=0;i<length;i+=1){be=this.__ic[i];

if(be>0){W=V[i].getSizeHint();
X[i]={min:W.minHeight,value:bb[i],max:W.maxHeight,flex:be};
}}var T=bg.computeFlexOffsets(X,O,bh);

for(i in T){bi=T[i].offset;
bb[i]+=bi;
bh+=bi;
}}var top=V[0].getMarginTop();
if(bh<O&&this.getAlignY()!=F){top=O-bh;

if(this.getAlignY()===D){top=Math.round(top/2);
}}var W,bl,bc,R,Y,bd,U;
var bf=this.getSpacing();
this._clearSeparators();
if(bj){var bk=qx.theme.manager.Decoration.getInstance().resolve(bj).getInsets();
var P=bk.top+bk.bottom;
}for(i=0;i<length;i+=1){Q=V[i];
R=bb[i];
W=Q.getSizeHint();
bd=Q.getMarginLeft();
U=Q.getMarginRight();
bc=Math.max(W.minWidth,Math.min(N-bd-U,W.maxWidth));
bl=bg.computeHorizontalAlignOffset(Q.getAlignX()||this.getAlignX(),bc,N,bd,U);
if(i>0){if(bj){top+=Y+bf;
this._renderSeparator(bj,{top:top,left:0,height:P,width:N});
top+=P+bf+Q.getMarginTop();
}else{top+=bg.collapseMargins(bf,Y,Q.getMarginTop());
}}Q.renderLayout(bl,top,bc,R);
top+=R;
Y=Q.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__if();
}var j=qx.ui.layout.Util;
var q=this.__ie;
var g=0,h=0;
var d=0,k=0;
var o,e,p;
for(var i=0,l=q.length;i<l;i+=1){o=q[i];
e=o.getSizeHint();
h+=e.height;
g+=this.__ic[i]>0?e.minHeight:e.height;
p=o.getMarginLeft()+o.getMarginRight();
if((e.width+p)>k){k=e.width+p;
}if((e.minWidth+p)>d){d=e.minWidth+p;
}}var f=this.getSpacing();
var n=this.getSeparator();

if(n){var m=j.computeVerticalSeparatorGaps(q,f,n);
}else{var m=j.computeVerticalGaps(q,f,true);
}return {minHeight:g+m,height:h+m,minWidth:d,width:k};
}},destruct:function(){this._disposeFields(w,x,z);
}});
})();
(function(){var C="middle",B="qx.ui.layout.Util",A="left",z="center",y="top",x="bottom",w="right";
qx.Class.define(B,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(be,bf,bg){var bi,bm,bh,bn;
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
},computeHorizontalAlignOffset:function(m,n,o,p,q){if(p==null){p=0;
}
if(q==null){q=0;
}var r=0;

switch(m){case A:r=p;
break;
case w:r=o-n-q;
break;
case z:r=Math.round((o-n)/2);
if(r<p){r=p;
}else if(r<q){r=Math.max(p,o-n-q);
}break;
}return r;
},computeVerticalAlignOffset:function(D,E,F,G,H){if(G==null){G=0;
}
if(H==null){H=0;
}var I=0;

switch(D){case y:I=G;
break;
case x:I=F-E-H;
break;
case C:I=Math.round((F-E)/2);
if(I<G){I=G;
}else if(I<H){I=Math.max(G,F-E-H);
}break;
}return I;
},collapseMargins:function(R){var S=0,U=0;

for(var i=0,l=arguments.length;i<l;i++){var T=arguments[i];

if(T<0){U=Math.min(U,T);
}else if(T>0){S=Math.max(S,T);
}}return S+U;
},computeHorizontalGaps:function(s,t,u){if(t==null){t=0;
}var v=0;

if(u){v+=s[0].getMarginLeft();

for(var i=1,l=s.length;i<l;i+=1){v+=this.collapseMargins(t,s[i-1].getMarginRight(),s[i].getMarginLeft());
}v+=s[l-1].getMarginRight();
}else{for(var i=1,l=s.length;i<l;i+=1){v+=s[i].getMarginLeft()+s[i].getMarginRight();
}v+=(t*(l-1));
}return v;
},computeVerticalGaps:function(a,b,c){if(b==null){b=0;
}var d=0;

if(c){d+=a[0].getMarginTop();

for(var i=1,l=a.length;i<l;i+=1){d+=this.collapseMargins(b,a[i-1].getMarginBottom(),a[i].getMarginTop());
}d+=a[l-1].getMarginBottom();
}else{for(var i=1,l=a.length;i<l;i+=1){d+=a[i].getMarginTop()+a[i].getMarginBottom();
}d+=(b*(l-1));
}return d;
},computeHorizontalSeparatorGaps:function(V,W,X){var bb=qx.theme.manager.Decoration.getInstance().resolve(X);
var ba=bb.getInsets();
var Y=ba.left+ba.right;
var bc=0;

for(var i=0,l=V.length;i<l;i++){var bd=V[i];
bc+=bd.getMarginLeft()+bd.getMarginRight();
}bc+=(W+Y+W)*(l-1);
return bc;
},computeVerticalSeparatorGaps:function(J,K,L){var O=qx.theme.manager.Decoration.getInstance().resolve(L);
var N=O.getInsets();
var M=N.top+N.bottom;
var P=0;

for(var i=0,l=J.length;i<l;i++){var Q=J[i];
P+=Q.getMarginTop()+Q.getMarginBottom();
}P+=(K+M+K)*(l-1);
return P;
},arrangeIdeals:function(e,f,g,h,j,k){if(f<e||j<h){if(f<e&&j<h){f=e;
j=h;
}else if(f<e){j-=(e-f);
f=e;
if(j<h){j=h;
}}else if(j<h){f-=(h-j);
j=h;
if(f<e){f=e;
}}}
if(f>g||j>k){if(f>g&&j>k){f=g;
j=k;
}else if(f>g){j+=(f-g);
f=g;
if(j>k){j=k;
}}else if(j>k){f+=(j-k);
j=k;
if(f>g){f=g;
}}}return {begin:f,end:j};
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
}},events:{addChildWidget:e,removeChildWidget:e},members:{_afterAddChild:function(g){this.fireNonBubblingEvent(c,qx.event.type.Data,[g]);
},_afterRemoveChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var r="_applyLayoutChange",q="left",p="center",o="top",n="__is",m="Decorator",k="__ir",j="middle",h="baseline",g="bottom",c="Boolean",f="right",e="_applyReversed",b="Integer",a="__iu",d="qx.ui.layout.HBox";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(bj,bk,bl){arguments.callee.base.call(this);

if(bj){this.setSpacing(bj);
}
if(bk){this.setAlignX(bk);
}
if(bl){this.setSeparator(bl);
}},properties:{alignX:{check:[q,p,f],init:q,apply:r},alignY:{check:[o,j,g,h],init:o,apply:r},spacing:{check:b,init:0,apply:r},separator:{check:m,nullable:true,apply:r},reversed:{check:c,init:false,apply:e}},members:{__ir:null,__is:null,__it:null,__iu:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__iv:function(){var V=this._getLayoutChildren();
var length=V.length;
var S=false;
var Q=this.__ir&&this.__ir.length!=length&&this.__is&&this.__ir;
var T;
var R=Q?this.__ir:new Array(length);
var U=Q?this.__is:new Array(length);
if(this.getReversed()){V=V.concat().reverse();
}for(var i=0;i<length;i++){T=V[i].getLayoutProperties();

if(T.width!=null){R[i]=parseFloat(T.width)/100;
}
if(T.flex!=null){U[i]=T.flex;
S=true;
}}if(!Q){this.__ir=R;
this.__is=U;
}this.__it=S;
this.__iu=V;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(s,t){if(this._invalidChildrenCache){this.__iv();
}var z=this.__iu;
var length=z.length;
var I=qx.ui.layout.Util;
var H=this.getSpacing();
var L=this.getSeparator();

if(L){var w=I.computeHorizontalSeparatorGaps(z,H,L);
}else{var w=I.computeHorizontalGaps(z,H,true);
}var i,u,F,E;
var K=[];
var A=w;

for(i=0;i<length;i+=1){E=this.__ir[i];
F=E!=null?Math.floor((s-w)*E):z[i].getSizeHint().width;
K.push(F);
A+=F;
}if(this.__it&&A!=s){var C={};
var G,J;

for(i=0;i<length;i+=1){G=this.__is[i];

if(G>0){B=z[i].getSizeHint();
C[i]={min:B.minWidth,value:K[i],max:B.maxWidth,flex:G};
}}var x=I.computeFlexOffsets(C,s,A);

for(i in x){J=x[i].offset;
K[i]+=J;
A+=J;
}}var P=z[0].getMarginLeft();
if(A<s&&this.getAlignX()!=q){P=s-A;

if(this.getAlignX()===p){P=Math.round(P/2);
}}var B,top,v,F,y,N,D;
var H=this.getSpacing();
this._clearSeparators();
if(L){var M=qx.theme.manager.Decoration.getInstance().resolve(L).getInsets();
var O=M.left+M.right;
}for(i=0;i<length;i+=1){u=z[i];
F=K[i];
B=u.getSizeHint();
N=u.getMarginTop();
D=u.getMarginBottom();
v=Math.max(B.minHeight,Math.min(t-N-D,B.maxHeight));
top=I.computeVerticalAlignOffset(u.getAlignY()||this.getAlignY(),v,t,N,D);
if(i>0){if(L){P+=y+H;
this._renderSeparator(L,{left:P,top:0,width:O,height:t});
P+=O+H+u.getMarginLeft();
}else{P+=I.collapseMargins(H,y,u.getMarginLeft());
}}u.renderLayout(P,top,F,v);
P+=F;
y=u.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__iv();
}var bc=qx.ui.layout.Util;
var bi=this.__iu;
var W=0,bd=0;
var ba=0,bb=0;
var bg,X,bh;
for(var i=0,l=bi.length;i<l;i+=1){bg=bi[i];
X=bg.getSizeHint();
bd+=X.width;
W+=this.__is[i]>0?X.minWidth:X.width;
bh=bg.getMarginTop()+bg.getMarginBottom();
if((X.height+bh)>bb){bb=X.height+bh;
}if((X.minHeight+bh)>ba){ba=X.minHeight+bh;
}}var Y=this.getSpacing();
var bf=this.getSeparator();

if(bf){var be=bc.computeHorizontalSeparatorGaps(bi,Y,bf);
}else{var be=bc.computeHorizontalGaps(bi,Y,true);
}return {minWidth:W+be,width:bd+be,minHeight:ba,height:bb};
}},destruct:function(){this._disposeFields(k,n,a);
}});
})();
(function(){var B="qx.dynlocale",A="changeLocale",z="on",y="color",x="qx.ui.basic.Label",w="_applyRich",v="A",u="_applyTextAlign",t="Boolean",s="_applyContent",m="label",r="textAlign",p="changeTextAlign",l="center",k="__iW",o="changeContent",n="left",q="String",j="right";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(content){arguments.callee.base.call(this);

if(content!=null){this.setContent(content);
}
if(qx.core.Variant.isSet(B,z)){qx.locale.Manager.getInstance().addListener(A,this._onChangeLocale,this);
}},properties:{rich:{check:t,init:false,apply:w},content:{check:q,apply:s,event:o,nullable:true},textAlign:{check:[n,l,j],nullable:true,themeable:true,apply:u,event:p},appearance:{refine:true,init:m},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iW:null,__iX:null,_getContentHint:function(){if(this.__iX){this.__ja();
delete this.__iX;
}return {width:this.__iY.width,height:this.__iY.height};
},_hasHeightForWidth:function(){return this.getRich();
},_getContentHeightForWidth:function(D){if(!this.getRich()){return null;
}var E=this.__iW?this.__iW.getStyles():qx.bom.Font.getDefaultStyles();
return qx.bom.Label.getHtmlSize(this.getContent(),E,D).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(d,e){this.getContentElement().setStyle(r,d);
},_applyTextColor:function(F,G){if(F){this.getContentElement().setStyle(y,qx.theme.manager.Color.getInstance().resolve(F));
}else{this.getContentElement().removeStyle(y);
}},__iY:{width:0,height:0},_applyFont:function(a,b){var c;

if(a){this.__iW=qx.theme.manager.Font.getInstance().resolve(a);
c=this.__iW.getStyles();
}else{this.__iW=null;
c=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(c);
this.__iX=true;
qx.ui.core.queue.Layout.add(this);
},__ja:function(){var i=qx.bom.Label;
var g=this.getFont();
var f=g?this.__iW.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getContent()||v;
var h=this.getRich();
this.__iY=h?i.getHtmlSize(content,f):i.getTextSize(content,f);
},_applyRich:function(C){this.getContentElement().setRich(C);
this.__iX=true;
qx.ui.core.queue.Layout.add(this);
},_onChangeLocale:qx.core.Variant.select(B,{"on":function(e){var content=this.getContent();

if(content&&content.translate){this.setContent(content.translate());
}},"off":null}),_applyContent:function(H){this.getContentElement().setContent(H);
this.__iX=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Variant.isSet(B,z)){qx.locale.Manager.getInstance().removeListener(A,this._onChangeLocale,this);
}this._disposeFields(k);
}});
})();
(function(){var q="qx.client",p="gecko",o="div",n="",m="hidden",l="auto",k="value",j="inherit",i="text",h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",G="nowrap",F="visible",E="ellipsis",D="normal",C="label",B="-1000px",A="absolute",z="px",y="crop",x="end",v="100%",w="qx.bom.Label",t="opera",u="block",r="none",s="mshtml|opera";
qx.Class.define(w,{statics:{__jb:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jc:function(){var V=document.createElement(o);
var W=V.style;
W.width=W.height=l;
W.left=W.top=B;
W.visibility=m;
W.position=A;
W.overflow=F;
W.whiteSpace=G;

if(qx.core.Variant.isSet(q,p)){var X=document.createElementNS(h,C);
for(var Y in this.__jb){X.style[Y]=j;
}V.appendChild(X);
}document.body.insertBefore(V,document.body.firstChild);
return this._textElement=V;
},__jd:function(){var ba=qx.bom.Element.create(o);
var bb=ba.style;
bb.width=bb.height=l;
bb.left=bb.top=B;
bb.visibility=m;
bb.position=A;
bb.overflow=F;
bb.whiteSpace=D;
document.body.insertBefore(ba,document.body.firstChild);
return this._htmlElement=ba;
},__je:function(f){var g={};

if(f){g.whiteSpace=D;
}else if(qx.core.Variant.isSet(q,p)){g.display=u;
}else{g.overflow=m;
g.whiteSpace=G;
g.textOverflow=E;
if(qx.core.Variant.isSet(q,t)){g.OTextOverflow=E;
}}g.userSelect=r;
return g;
},create:function(content,H,I){if(!I){I=window;
}
if(H){var J=I.document.createElement(o);
J.useHtml=true;
}else if(qx.core.Variant.isSet(q,p)){var J=I.document.createElement(o);
var K=I.document.createElementNS(h,C);
K.style.cursor=j;
K.style.overflow=m;
K.style.maxWidth=v;
for(var L in this.__jb){K.style[L]=j;
}K.setAttribute(y,x);
J.appendChild(K);
}else{var J=I.document.createElement(o);
qx.bom.element.Style.setStyles(J,this.__je(false));
}
if(content){this.setContent(J,content);
}return J;
},setContent:function(N,O){O=O||n;

if(N.useHtml){N.innerHTML=O;
}else if(qx.core.Variant.isSet(q,p)){N.firstChild.setAttribute(k,O);
}else{qx.bom.element.Attribute.set(N,i,O);
}},getContent:function(M){if(M.useHtml){return M.innerHTML;
}else if(qx.core.Variant.isSet(q,p)){return M.firstChild.getAttribute(k)||n;
}else{return qx.bom.element.Attribute.get(M,i);
}},getHtmlSize:function(content,a,b){var e=this._htmlElement||this.__jd();
var c=this.__jb;

if(!a){a={};
}
for(var d in c){e.style[d]=a[d]||n;
}e.style.width=b!=null?b+z:l;
e.innerHTML=content;
return qx.bom.element.Dimension.getSize(e);
},getTextSize:function(P,Q){var U=this._textElement||this.__jc();
var R=this.__jb;

if(!Q){Q={};
}
for(var T in R){U.style[T]=Q[T]||n;
}if(qx.core.Variant.isSet(q,p)){U.firstChild.setAttribute(k,P);
}else if(qx.core.Variant.isSet(q,s)){U.innerText=P;
}else{U.textContent=P;
}var S=qx.bom.element.Dimension.getSize(U);

if(qx.core.Variant.isSet(q,p)){if(!qx.bom.client.Platform.WIN){S.width++;
}}return S;
}}});
})();
(function(){var t="mshtml",s="qx.client",r="Please use element.clientWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",q="qx.bom.element.Dimension",p="Please use element.scrollWidth directly, or see if you can benefit from qx.bom.element.Dimension.getContentWidth()",o="paddingRight",n="paddingLeft",m="paddingTop",l="Please use element.scrollHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",k="Please use element.clientHeight directly, or see if you can benefit from qx.bom.element.Dimension.getContentHeight()",j="paddingBottom";
qx.Class.define(q,{statics:{getWidth:qx.core.Variant.select(s,{"gecko":function(u){if(u.getBoundingClientRect){var v=u.getBoundingClientRect();
return Math.round(v.right)-Math.round(v.left);
}else{return u.offsetWidth;
}},"default":function(D){return D.offsetWidth;
}}),getHeight:qx.core.Variant.select(s,{"gecko":function(H){if(H.getBoundingClientRect){var I=H.getBoundingClientRect();
return Math.round(I.bottom)-Math.round(I.top);
}else{return H.offsetHeight;
}},"default":function(K){return K.offsetHeight;
}}),getSize:function(a){return {width:this.getWidth(a),height:this.getHeight(a)};
},__jf:{visible:true,hidden:true},getContentWidth:function(w){var y=qx.bom.element.Style;
var z=qx.bom.element.Overflow.getX(w);
var A=parseInt(y.get(w,n),10);
var C=parseInt(y.get(w,o),10);

if(this.__jf[z]){return w.clientWidth-A-C;
}else{if(w.clientWidth>=w.scrollWidth){return Math.max(w.clientWidth,w.scrollWidth)-A-C;
}else{var B=w.scrollWidth-A;
var x=qx.bom.client.Engine;

if(x.NAME===t&&x.VERSION==6){B-=C;
}return B;
}}},getContentHeight:function(b){var d=qx.bom.element.Style;
var f=qx.bom.element.Overflow.getY(b);
var g=parseInt(d.get(b,m),10);
var e=parseInt(d.get(b,j),10);

if(this.__jf[f]){return b.clientHeight-g-e;
}else{if(b.clientHeight>=b.scrollHeight){return Math.max(b.clientHeight,b.scrollHeight)-g-e;
}else{var h=b.scrollHeight-g;
var c=qx.bom.client.Engine;

if(c.NAME===t&&c.VERSION==6){h-=e;
}return h;
}}},getContentSize:function(F){return {width:this.getContentWidth(F),height:this.getContentHeight(F)};
},getClientWidth:function(i){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
return i.clientWidth;
},getClientHeight:function(E){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return E.clientHeight;
},getScrollWidth:function(J){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return J.scrollWidth;
},getScrollHeight:function(G){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return G.scrollHeight;
}}});
})();
(function(){var f="content",e="qx.html.Label";
qx.Class.define(e,{extend:qx.html.Element,members:{__jg:null,_applyProperty:function(name,c){arguments.callee.base.call(this,name,c);

if(name==f){var d=this.getDomElement();
qx.bom.Label.setContent(d,c);
}},_createDomElement:function(){var h=this.__jg;
var g=qx.bom.Label.create(this._content,h);
return g;
},_copyData:function(b){return arguments.callee.base.call(this,true);
},setRich:function(i){var j=this.getDomElement();

if(j){throw new Error("The label mode cannot be modified after initial creation");
}i=!!i;

if(this.__jg==i){return;
}this.__jg=i;
return this;
},setContent:function(a){this._setProperty(f,a);
return this;
},getContent:function(){return this._getProperty(f);
}}});
})();
(function(){var cw="left",cv="top",cu="_applyLayoutChange",ct="hAlign",cs="flex",cr="vAlign",cq="Integer",cp="__ki",co="__km",cn="__kq",cg="minWidth",cm="width",cj="__kj",ce="minHeight",cd="__kk",ci="qx.ui.layout.Grid",ch="height",ck="maxHeight",cc="maxWidth",cl="__kp",cf="__kl";
qx.Class.define(ci,{extend:qx.ui.layout.Abstract,construct:function(bE,bF){arguments.callee.base.call(this);
this.__ki=[];
this.__kj=[];

if(bE){this.setSpacingX(bE);
}
if(bF){this.setSpacingY(bF);
}},properties:{spacingX:{check:cq,init:0,apply:cu},spacingY:{check:cq,init:0,apply:cu}},members:{__kk:null,__ki:null,__kj:null,__kl:null,__km:null,__kn:null,__ko:null,__kp:null,__kq:null,verifyLayoutProperty:null,__kr:function(){var D=[];
var C=[];
var E=[];
var A=0;
var z=0;
var G=this._getLayoutChildren();

for(var i=0,l=G.length;i<l;i++){var B=G[i];
var F=B.getLayoutProperties();
var H=F.row;
var w=F.column;
F.colSpan=F.colSpan||1;
F.rowSpan=F.rowSpan||1;
if(H==null||w==null){throw new Error("The layout properties 'row' and 'column' must be defined!");
}
if(D[H]&&D[H][w]){throw new Error("There is already a widget in this cell ("+H+", "+w+")");
}
for(var x=w;x<w+F.colSpan;x++){for(var y=H;y<H+F.rowSpan;y++){if(D[y]==undefined){D[y]=[];
}D[y][x]=B;
z=Math.max(z,x);
A=Math.max(A,y);
}}
if(F.rowSpan>1){E.push(B);
}
if(F.colSpan>1){C.push(B);
}}for(var y=0;y<=A;y++){if(D[y]==undefined){D[y]=[];
}}this.__kk=D;
this.__kl=C;
this.__km=E;
this.__kn=A;
this.__ko=z;
delete this._invalidChildrenCache;
},_setRowData:function(e,f,g){var h=this.__ki[e];

if(!h){this.__ki[e]={};
this.__ki[e][f]=g;
}else{h[f]=g;
}},_setColumnData:function(q,r,s){var t=this.__kj[q];

if(!t){this.__kj[q]={};
this.__kj[q][r]=s;
}else{t[r]=s;
}},setSpacing:function(bx){this.setSpacingY(bx);
this.setSpacingX(bx);
},setColumnAlign:function(bY,ca,cb){{};
this._setColumnData(bY,ct,ca);
this._setColumnData(bY,cr,cb);
this._applyLayoutChange();
return this;
},getColumnAlign:function(u){var v=this.__kj[u]||{};
return {vAlign:v.vAlign||cv,hAlign:v.hAlign||cw};
},setRowAlign:function(dd,de,df){{};
this._setRowData(dd,ct,de);
this._setRowData(dd,cr,df);
this._applyLayoutChange();
return this;
},getRowAlign:function(dE){var dF=this.__ki[dE]||{};
return {vAlign:dF.vAlign||cv,hAlign:dF.hAlign||cw};
},getCellWidget:function(dA,dB){if(this._invalidChildrenCache){this.__kr();
}return this.__kk[dA][dB]||null;
},getCellAlign:function(ds,dt){var dz=cv;
var dx=cw;
var dy=this.__ki[ds];
var dv=this.__kj[dt];
var du=this.__kk[ds][dt];

if(du){var dw={vAlign:du.getAlignY(),hAlign:du.getAlignX()};
}else{dw={};
}if(dw.vAlign){dz=dw.vAlign;
}else if(dy&&dy.vAlign){dz=dy.vAlign;
}else if(dv&&dv.vAlign){dz=dv.vAlign;
}if(dw.hAlign){dx=dw.hAlign;
}else if(dv&&dv.hAlign){dx=dv.hAlign;
}else if(dy&&dy.hAlign){dx=dy.hAlign;
}return {vAlign:dz,hAlign:dx};
},setColumnFlex:function(I,J){this._setColumnData(I,cs,J);
this._applyLayoutChange();
return this;
},getColumnFlex:function(eg){var eh=this.__kj[eg]||{};
return eh.flex!==undefined?eh.flex:0;
},setRowFlex:function(bW,bX){this._setRowData(bW,cs,bX);
this._applyLayoutChange();
return this;
},getRowFlex:function(bm){var bn=this.__ki[bm]||{};
var bo=bn.flex!==undefined?bn.flex:0;
return bo;
},setColumnMaxWidth:function(c,d){this._setColumnData(c,cc,d);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bk){var bl=this.__kj[bk]||{};
return bl.maxWidth!==undefined?bl.maxWidth:Infinity;
},setColumnWidth:function(bv,bw){this._setColumnData(bv,cm,bw);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bG){var bH=this.__kj[bG]||{};
return bH.width!==undefined?bH.width:null;
},setColumnMinWidth:function(bC,bD){this._setColumnData(bC,cg,bD);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bt){var bu=this.__kj[bt]||{};
return bu.minWidth||0;
},setRowMaxHeight:function(a,b){this._setRowData(a,ck,b);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bA){var bB=this.__ki[bA]||{};
return bB.maxHeight||Infinity;
},setRowHeight:function(by,bz){this._setRowData(by,ch,bz);
this._applyLayoutChange();
return this;
},getRowHeight:function(dC){var dD=this.__ki[dC]||{};
return dD.height!==undefined?dD.height:null;
},setRowMinHeight:function(br,bs){this._setRowData(br,ce,bs);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bp){var bq=this.__ki[bp]||{};
return bq.minHeight||0;
},__ks:function(k){var p=k.getSizeHint();
var o=k.getMarginLeft()+k.getMarginRight();
var n=k.getMarginTop()+k.getMarginBottom();
var m={height:p.height+n,width:p.width+o,minHeight:p.minHeight+n,minWidth:p.minWidth+o,maxHeight:p.maxHeight+n,maxWidth:p.maxWidth+o};
return m;
},_fixHeightsRowSpan:function(dG){var dR=this.getSpacingY();

for(var i=0,l=this.__km.length;i<l;i++){var dJ=this.__km[i];
var dL=this.__ks(dJ);
var dM=dJ.getLayoutProperties();
var dI=dM.row;
var dP=dR*(dM.rowSpan-1);
var dH=dP;
var dO={};

for(var j=0;j<dM.rowSpan;j++){var dT=dM.row+j;
var dK=dG[dT];
var dS=this.getRowFlex(dT);

if(dS>0){dO[dT]={min:dK.minHeight,value:dK.height,max:dK.maxHeight,flex:dS};
}dP+=dK.height;
dH+=dK.minHeight;
}if(dP<dL.height){var dQ=qx.ui.layout.Util.computeFlexOffsets(dO,dL.height,dP);

for(var j=0;j<dM.rowSpan;j++){var dN=dQ[dI+j]?dQ[dI+j].offset:0;
dG[dI+j].height+=dN;
}}if(dH<dL.minHeight){var dQ=qx.ui.layout.Util.computeFlexOffsets(dO,dL.minHeight,dH);

for(var j=0;j<dM.rowSpan;j++){var dN=dQ[dI+j]?dQ[dI+j].offset:0;
dG[dI+j].minHeight+=dN;
}}}},_fixWidthsColSpan:function(bI){var bM=this.getSpacingX();

for(var i=0,l=this.__kl.length;i<l;i++){var bJ=this.__kl[i];
var bL=this.__ks(bJ);
var bO=bJ.getLayoutProperties();
var bK=bO.column;
var bU=bM*(bO.colSpan-1);
var bN=bU;
var bP={};
var bR;

for(var j=0;j<bO.colSpan;j++){var bV=bO.column+j;
var bT=bI[bV];
var bS=this.getColumnFlex(bV);
if(bS>0){bP[bV]={min:bT.minWidth,value:bT.width,max:bT.maxWidth,flex:bS};
}bU+=bT.width;
bN+=bT.minWidth;
}if(bU<bL.width){var bQ=qx.ui.layout.Util.computeFlexOffsets(bP,bL.width,bU);

for(var j=0;j<bO.colSpan;j++){bR=bQ[bK+j]?bQ[bK+j].offset:0;
bI[bK+j].width+=bR;
}}if(bN<bL.minWidth){var bQ=qx.ui.layout.Util.computeFlexOffsets(bP,bL.minWidth,bN);

for(var j=0;j<bO.colSpan;j++){bR=bQ[bK+j]?bQ[bK+j].offset:0;
bI[bK+j].minWidth+=bR;
}}}},_getRowHeights:function(){if(this.__kp!=null){return this.__kp;
}var dq=[];
var di=this.__kn;
var dh=this.__ko;

for(var dr=0;dr<=di;dr++){var dj=0;
var dl=0;
var dk=0;

for(var dp=0;dp<=dh;dp++){var dg=this.__kk[dr][dp];

if(!dg){continue;
}var dm=dg.getLayoutProperties().rowSpan||0;

if(dm>1){continue;
}var dn=this.__ks(dg);

if(this.getRowFlex(dr)>0){dj=Math.max(dj,dn.minHeight);
}else{dj=Math.max(dj,dn.height);
}dl=Math.max(dl,dn.height);
}var dj=Math.max(dj,this.getRowMinHeight(dr));
var dk=this.getRowMaxHeight(dr);

if(this.getRowHeight(dr)!==null){var dl=this.getRowHeight(dr);
}else{var dl=Math.max(dj,Math.min(dl,dk));
}dq[dr]={minHeight:dj,height:dl,maxHeight:dk};
}
if(this.__km.length>0){this._fixHeightsRowSpan(dq);
}this.__kp=dq;
return dq;
},_getColWidths:function(){if(this.__kq!=null){return this.__kq;
}var V=[];
var S=this.__ko;
var U=this.__kn;

for(var bb=0;bb<=S;bb++){var Y=0;
var X=0;
var T=Infinity;

for(var bc=0;bc<=U;bc++){var R=this.__kk[bc][bb];

if(!R){continue;
}var W=R.getLayoutProperties().colSpan||0;

if(W>1){continue;
}var ba=this.__ks(R);

if(this.getColumnFlex(bb)>0){X=Math.max(X,ba.minWidth);
}else{X=Math.max(X,ba.width);
}Y=Math.max(Y,ba.width);
}var X=Math.max(X,this.getColumnMinWidth(bb));
var T=this.getColumnMaxWidth(bb);

if(this.getColumnWidth(bb)!==null){var Y=this.getColumnWidth(bb);
}else{var Y=Math.max(X,Math.min(Y,T));
}V[bb]={minWidth:X,width:Y,maxWidth:T};
}
if(this.__kl.length>0){this._fixWidthsColSpan(V);
}this.__kq=V;
return V;
},_getColumnFlexOffsets:function(K){var L=this.getSizeHint();
var P=K-L.width;

if(P==0){return {};
}var N=this._getColWidths();
var M={};

for(var i=0,l=N.length;i<l;i++){var Q=N[i];
var O=this.getColumnFlex(i);

if((O<=0)||(Q.width==Q.maxWidth&&P>0)||(Q.width==Q.minWidth&&P<0)){continue;
}M[i]={min:Q.minWidth,value:Q.width,max:Q.maxWidth,flex:O};
}return qx.ui.layout.Util.computeFlexOffsets(M,K,L.width);
},_getRowFlexOffsets:function(bd){var be=this.getSizeHint();
var bh=bd-be.height;

if(bh==0){return {};
}var bi=this._getRowHeights();
var bf={};

for(var i=0,l=bi.length;i<l;i++){var bj=bi[i];
var bg=this.getRowFlex(i);

if((bg<=0)||(bj.height==bj.maxHeight&&bh>0)||(bj.height==bj.minHeight&&bh<0)){continue;
}bf[i]={min:bj.minHeight,value:bj.height,max:bj.maxHeight,flex:bg};
}return qx.ui.layout.Util.computeFlexOffsets(bf,bd,be.height);
},renderLayout:function(cx,cy){if(this._invalidChildrenCache){this.__kr();
}var cM=qx.ui.layout.Util;
var cA=this.getSpacingX();
var cG=this.getSpacingY();
var cR=this._getColWidths();
var cQ=this._getColumnFlexOffsets(cx);
var cB=[];
var cT=this.__ko;
var cz=this.__kn;
var cS;

for(var cU=0;cU<=cT;cU++){cS=cQ[cU]?cQ[cU].offset:0;
cB[cU]=cR[cU].width+cS;
}var cJ=this._getRowHeights();
var cL=this._getRowFlexOffsets(cy);
var db=[];

for(var cH=0;cH<=cz;cH++){cS=cL[cH]?cL[cH].offset:0;
db[cH]=cJ[cH].height+cS;
}var dc=0;

for(var cU=0;cU<=cT;cU++){var top=0;

for(var cH=0;cH<=cz;cH++){var cO=this.__kk[cH][cU];
if(!cO){top+=db[cH]+cG;
continue;
}var cC=cO.getLayoutProperties();
if(cC.row!==cH||cC.column!==cU){top+=db[cH]+cG;
continue;
}var da=cA*(cC.colSpan-1);

for(var i=0;i<cC.colSpan;i++){da+=cB[cU+i];
}var cP=cG*(cC.rowSpan-1);

for(var i=0;i<cC.rowSpan;i++){cP+=db[cH+i];
}var cD=cO.getSizeHint();
var cX=cO.getMarginTop();
var cN=cO.getMarginLeft();
var cK=cO.getMarginBottom();
var cF=cO.getMarginRight();
var cI=Math.max(cD.minWidth,Math.min(da-cN-cF,cD.maxWidth));
var cY=Math.max(cD.minHeight,Math.min(cP-cX-cK,cD.maxHeight));
var cV=this.getCellAlign(cH,cU);
var cW=dc+cM.computeHorizontalAlignOffset(cV.hAlign,cI,da,cN,cF);
var cE=top+cM.computeVerticalAlignOffset(cV.vAlign,cY,cP,cX,cK);
cO.renderLayout(cW,cE,cI,cY);
top+=db[cH]+cG;
}dc+=cB[cU]+cA;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__kq=null;
this.__kp=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kr();
}var dY=this._getColWidths();
var eb=0,ec=0;

for(var i=0,l=dY.length;i<l;i++){var ed=dY[i];

if(this.getColumnFlex(i)>0){eb+=ed.minWidth;
}else{eb+=ed.width;
}ec+=ed.width;
}var ee=this._getRowHeights();
var dW=0,ea=0;

for(var i=0,l=ee.length;i<l;i++){var ef=ee[i];

if(this.getRowFlex(i)>0){dW+=ef.minHeight;
}else{dW+=ef.height;
}ea+=ef.height;
}var dV=this.getSpacingX()*(dY.length-1);
var dU=this.getSpacingY()*(ee.length-1);
var dX={minWidth:eb+dV,width:ec+dV,minHeight:dW+dU,height:ea+dU};
return dX;
}},destruct:function(){this._disposeFields(cd,cp,cj,cf,co,cn,cl);
}});
})();
(function(){var D="label",C="icon",B="Boolean",A="left",z="both",y="String",x="_applyRich",w="_applyIcon",v="changeGap",u="_applyShow",n="right",t="_applyCenter",q="_applyIconPosition",l="qx.ui.basic.Atom",k="top",p="changeShow",o="bottom",r="_applyLabel",j="Integer",s="_applyGap",m="atom";
qx.Class.define(l,{extend:qx.ui.core.Widget,construct:function(d,e){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(d!=null){this.setLabel(d);
}
if(e!=null){this.setIcon(e);
}},properties:{appearance:{refine:true,init:m},label:{apply:r,nullable:true,dispose:true,check:y},rich:{check:B,init:false,apply:x},icon:{check:y,apply:w,nullable:true,themeable:true},gap:{check:j,nullable:false,event:v,apply:s,themeable:true,init:4},show:{init:z,check:[z,D,C],themeable:true,inheritable:true,apply:u,event:p},iconPosition:{init:A,check:[k,n,o,A],themeable:true,apply:q},center:{init:false,check:B,themeable:true,apply:t}},members:{_createChildControlImpl:function(E){var F;

switch(E){case D:F=new qx.ui.basic.Label(this.getLabel());
F.setAnonymous(true);
F.setRich(this.getRich());
this._add(F);

if(this.getLabel()==null||this.getShow()===C){F.exclude();
}break;
case C:F=new qx.ui.basic.Image(this.getIcon());
F.setAnonymous(true);
this._addAt(F,0);

if(this.getIcon()==null||this.getShow()===D){F.exclude();
}break;
}return F||arguments.callee.base.call(this,E);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===C){this._excludeChildControl(D);
}else{this._showChildControl(D);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===D){this._excludeChildControl(C);
}else{this._showChildControl(C);
}},_applyLabel:function(N,O){var P=this.getChildControl(D,true);

if(P){P.setContent(N);
}this._handleLabel();
},_applyRich:function(a,b){var c=this.getChildControl(D,true);

if(c){c.setRich(a);
}},_applyIcon:function(I,J){var K=this.getChildControl(C,true);

if(K){K.setSource(I);
}this._handleIcon();
},_applyGap:function(L,M){this._getLayout().setGap(L);
},_applyShow:function(h,i){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(f,g){this._getLayout().setIconPosition(f);
},_applyCenter:function(G,H){this._getLayout().setCenter(G);
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
(function(){var c="qx.event.type.Data",b="qx.ui.form.IFormElement",a="boolean";
qx.Interface.define(b,{events:{"changeValue":c,"changeName":c,"changeEnabled":c},members:{setEnabled:function(f){this.assertType(f,a);
},getEnabled:function(){},setName:function(d){this.assertString(d);
},getName:function(){},setValue:function(e){return arguments.length==1;
},getValue:function(){}}});
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
(function(){var v="bottom",u="_applyLayoutChange",t="top",s="left",r="right",q="middle",p="center",o="qx.ui.layout.Atom",n="Integer",m="Boolean";
qx.Class.define(o,{extend:qx.ui.layout.Abstract,properties:{gap:{check:n,init:4,apply:u},iconPosition:{check:[s,t,r,v],init:s,apply:u},center:{check:m,init:false,apply:u}},members:{verifyLayoutProperty:null,renderLayout:function(w,x){var H=qx.ui.layout.Util;
var z=this.getIconPosition();
var C=this._getLayoutChildren();
var length=C.length;
var Q,top,P,A;
var L,G;
var J=this.getGap();
var O=this.getCenter();
if(z===v||z===r){var I=length-1;
var E=-1;
var B=-1;
}else{var I=0;
var E=length;
var B=1;
}if(z==t||z==v){if(O){var K=0;

for(var i=I;i!=E;i+=B){A=C[i].getSizeHint().height;

if(A>0){K+=A;

if(i!=I){K+=J;
}}}top=Math.round((x-K)/2);
}else{top=0;
}
for(var i=I;i!=E;i+=B){L=C[i];
G=L.getSizeHint();
P=Math.min(G.maxWidth,Math.max(w,G.minWidth));
A=G.height;
Q=H.computeHorizontalAlignOffset(p,P,w);
L.renderLayout(Q,top,P,A);
if(A>0){top+=A+J;
}}}else{var F=w;
var D=0;
var y=null;
var N=0;

for(var i=I;i!=E;i+=B){L=C[i];
P=L.getSizeHint().width;

if(P>0){if(!y&&L instanceof qx.ui.basic.Label){y=L;
}else{F-=P;
}D+=P;
N++;
}}
if(N>1){var M=(N-1)*J;
F-=M;
D+=M;
}
if(O&&D<w){Q=Math.round((w-D)/2);
}else{Q=0;
}
for(var i=I;i!=E;i+=B){L=C[i];
G=L.getSizeHint();
A=Math.min(G.maxHeight,Math.max(x,G.minHeight));

if(L===y){P=Math.max(G.minWidth,Math.min(F,G.width));
}else{P=G.width;
}top=H.computeVerticalAlignOffset(q,G.height,x);
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

