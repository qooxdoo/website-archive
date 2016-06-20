(function() {
  
if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application": "inspector.Application", "qx.theme": "inspector.theme.Theme", "qx.version": "0.8.3"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug": "off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"qx": {"resourceUri": "./resource", "version": "trunk", "sourceUri": "./script"}, "inspector": {"resourceUri": "./resource", "version": "trunk", "sourceUri": "./script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -474, 0], "qx/decoration/Modern/window/captionbar-inactive-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, 0], "inspector/images/components/window.png": [16, 16, "png", "inspector"], "qx/icon/Tango/16/actions/view-refresh.png": [16, 16, "png", "qx"], "inspector/images/autocomplete/property_private18.gif": [18, 18, "gif", "inspector"], "inspector/images/components/textarea.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/shadow/shadow-small-r.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", 0, 0], "inspector/images/components/splitpane.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/tree/closed-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", 0, 0], "qx/decoration/Modern/tabview-pane-tb-combined.png": [30, 180, "png", "qx"], "qx/decoration/Modern/form/radiobutton-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -572, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/form/radiobutton-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -14, 0], "qx/icon/Tango/22/mimetypes/office-document.png": [22, 22, "png", "qx"], "qx/decoration/Modern/shadow/shadow-r.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", -15, 0], "qx/decoration/Modern/shadow/shadow-tl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, 0], "qx/decoration/Modern/window/minimize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -9, 0], "qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png": [76, 15, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -69, 0], "qx/decoration/Modern/cursors/nodrop.gif": [20, 20, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", 0, 0], "qx/decoration/Modern/form/button-preselected-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-top-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/window/close-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -72, 0], "qx/decoration/Modern/form/checkbox-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -182, 0], "inspector/images/components/horizontallayout.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/tabview/tab-button-bottom-active-l.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", -5, 0], "qx/decoration/Modern/form/button-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -16], "qx/decoration/Modern/tabview/tab-button-right-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", -5, 0], "qx/decoration/Modern/tree-combined.png": [32, 8, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-lr-combined.png": [10, 37, "png", "qx"], "qx/decoration/Modern/form/button-pressed-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -32, 0], "qx/decoration/Modern/tabview/tab-button-right-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -20], "qx/decoration/Modern/window/statusbar-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-checked-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -104], "qx/decoration/Modern/tabview/tab-button-top-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/checkbox-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -544, 0], "qx/decoration/Modern/toolbar/toolbar-gradient.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", -20, 0], "qx/decoration/Modern/colorselector/brightness-field.png": [19, 256, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tabview-pane-tr.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -30], "qx/decoration/Modern/window/captionbar-active-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -30], "qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png": [10, 12, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -59, 0], "qx/decoration/Modern/button-tb-combined.png": [4, 216, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, 0], "inspector/images/components/groupbox.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/menu/radiobutton.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", 0, 0], "qx/decoration/Modern/arrows/right.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -5, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -20], "inspector/images/components/image.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-right-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -6], "qx/decoration/Modern/form/button-hovered-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -12], "qx/decoration/Modern/window/captionbar-inactive-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -18], "inspector/images/open.gif": [17, 13, "gif", "inspector"], "qx/decoration/Modern/form/input.png": [84, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -70, 0], "qx/decoration/Modern/window/statusbar-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, 0], "qx/icon/Tango/16/actions/go-next.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/radiobutton-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -418, 0], "qx/decoration/Modern/form/button-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -152], "qx/decoration/Modern/form/button-disabled-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -92], "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/minimize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -36, 0], "inspector/images/components/combobox.png": [16, 16, "png", "inspector"], "qx/icon/Tango/32/mimetypes/office-document.png": [32, 32, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-l.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", 0, 0], "qx/icon/Tango/22/actions/view-refresh.png": [22, 22, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -48, 0], "qx/decoration/Modern/window-captionbar-lr-active-combined.png": [12, 9, "png", "qx"], "qx/decoration/Modern/shadow/shadow-l.png": [15, 382, "png", "qx", "qx/decoration/Modern/shadow-lr-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-tr.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -60], "inspector/css/consoleview.css": "inspector", "qx/decoration/Modern/form/button-preselected-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -48], "qx/decoration/Modern/menu-checkradio-combined.gif": [64, 7, "gif", "qx"], "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png": [3, 9, "png", "qx"], "inspector/images/components/layout.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png": [15, 76, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -12, 0], "qx/decoration/Modern/cursors/move.gif": [13, 9, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -20, 0], "qx/decoration/Modern/form/button-checked-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -184], "qx/decoration/Modern/form/button-preselected-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -180], "qx/decoration/Modern/form/checkbox-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -516, 0], "qx/decoration/Modern/form/checkbox-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -558, 0], "qx/decoration/Modern/form/button-disabled-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -164], "qx/decoration/Modern/menu/checkbox-invert.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -16, 0], "qx/decoration/Modern/tabview/tabview-pane-l.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -12, 0], "inspector/images/icons/setinit.png": [22, 22, "png", "inspector"], "qx/decoration/Modern/form/radiobutton-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -42, 0], "inspector/images/components/verticallayout.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/window/captionbar-inactive-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -30], "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png": [10, 14, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-field.jpg": [256, 256, "jpeg", "qx"], "qx/decoration/Modern/shadow-small-lr-combined.png": [10, 136, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/button-pressed-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -84], "qx/decoration/Modern/form/checkbox-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -530, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/inputcheckradio-combined.png": [628, 14, "png", "qx"], "qx/decoration/Modern/form/button-disabled-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -120], "qx/decoration/Modern/tooltip-error-lr-combined.png": [12, 18, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -10], "qx/decoration/Modern/form/button-hovered-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -168], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -348, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-c.png": [20, 14, "png", "qx"], "qx/decoration/Modern/menu/radiobutton-invert.gif": [16, 5, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -32, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, 0], "qx/icon/Tango/16/actions/dialog-cancel.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -24], "qx/decoration/Modern/tabview/tab-button-right-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-lr-combined.png", 0, 0], "inspector/css/propertylisthtml.css": "inspector", "qx/decoration/Modern/tabview/tab-button-left-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -25], "qx/decoration/Modern/tabview-button-top-active-lr-combined.png": [10, 12, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -30], "qx/decoration/Modern/table/header-cell.png": [20, 18, "png", "qx", "qx/decoration/Modern/table-combined.png", -54, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-l.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", -6, 0], "inspector/images/null.png": [15, 15, "png", "inspector"], "qx/decoration/Modern/tabview/tab-button-top-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -20], "qx/decoration/Modern/window/maximize-active-hovered.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -45, 0], "qx/decoration/Modern/arrows-combined.png": [87, 8, "png", "qx"], "qx/decoration/Modern/form/radiobutton-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -264, 0], "qx/decoration/Modern/tabview/tabview-pane-b.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -60], "qx/decoration/Modern/tabview/tabview-pane-tl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -90], "qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -56, 0], "qx/icon/Tango/16/actions/dialog-ok.png": [16, 16, "png", "qx"], "qx/decoration/Modern/colorselector/huesaturation-handle.gif": [11, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", -35, 0], "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png": [3, 9, "png", "qx"], "inspector/html/index.html": "inspector", "qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -8, 0], "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png": [6, 15, "png", "qx"], "inspector/images/components/menu.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/scrollbar/scrollbar-up.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -53, 0], "qx/decoration/Modern/pane-lr-combined.png": [12, 238, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -404, 0], "qx/icon/Tango/22/places/folder.png": [22, 22, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-right-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, 0], "qx/decoration/Modern/shadow/shadow-t.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -30], "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png": [12, 9, "png", "qx"], "qx/icon/Tango/22/places/folder-open.png": [22, 22, "png", "qx"], "qx/decoration/Modern/toolbar/toolbar-gradient-blue.png": [20, 130, "png", "qx", "qx/decoration/Modern/toolbar-combined.png", 0, 0], "inspector/images/components/radiobutton.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/window/captionbar-inactive-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -6], "qx/decoration/Modern/groupbox/groupbox-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, 0], "qx/decoration/Modern/pane/pane-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -12], "qx/decoration/Modern/form/button-hovered-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -28], "qx/decoration/Modern/window-captionbar-buttons-combined.png": [108, 9, "png", "qx"], "qx/decoration/Modern/pane/pane-r.png": [6, 238, "png", "qx", "qx/decoration/Modern/pane-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -32], "qx/decoration/Modern/window/captionbar-active-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -18], "qx/decoration/Modern/window-captionbar-tb-active-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/window/statusbar-l.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", -4, 0], "qx/decoration/Modern/shadow/shadow-b.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -75], "qx/decoration/Modern/form/button-disabled-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -72], "qx/decoration/Modern/scrollbar/scrollbar-down.png": [6, 4, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -145, 0], "qx/decoration/Modern/cursors-combined.gif": [71, 20, "gif", "qx"], "qx/decoration/Modern/scrollbar/slider-knob-background.png": [12, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -27, 0], "qx/decoration/Modern/form/button-disabled-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -128], "qx/decoration/Modern/window/statusbar-r.png": [4, 7, "png", "qx", "qx/decoration/Modern/window-statusbar-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-right-inactive-c.png": [14, 39, "png", "qx"], "qx/decoration/Modern/window/captionbar-inactive-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-inactive-combined.png", -6, 0], "qx/decoration/Modern/form/checkbox-checked-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -460, 0], "qx/decoration/Modern/form/button-preselected-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-top-active-r.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", 0, 0], "qx/decoration/Modern/arrows/forward.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -43, 0], "qx/decoration/Modern/form/button-preselected-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, 0], "inspector/images/shell/errorIcon.png": [14, 14, "png", "inspector"], "qx/decoration/Modern/form/checkbox.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -278, 0], "qx/decoration/Modern/form/input-focused.png": [40, 12, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -224, 0], "qx/decoration/Modern/arrows/left.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -16, 0], "qx/decoration/Modern/cursors/copy.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -52, 0], "qx/decoration/Modern/tabview/tab-button-top-active-tl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-right-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -15], "qx/decoration/Modern/pane/pane-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -18], "qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/scrollbar/scrollbar-left.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -170, 0], "qx/decoration/Modern/pane-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/pane/pane-c.png": [20, 238, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/selection.png": [110, 20, "png", "qx"], "qx/decoration/Modern/table/select-column-order.png": [10, 9, "png", "qx", "qx/decoration/Modern/table-combined.png", -36, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/arrows/up.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -35, 0], "qx/static/blank.gif": [1, 1, "gif", "qx"], "qx/decoration/Modern/form/button-pressed-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -108], "qx/decoration/Modern/window/maximize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -81, 0], "qx/decoration/Modern/tabview/tab-button-top-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-preselected-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -20, 0], "inspector/images/components/toolbar.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/form/button-checked-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -148], "qx/decoration/Modern/form/button-pressed-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -160], "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane.png": [185, 250, "png", "qx"], "qx/decoration/Modern/window/captionbar-active-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -12], "qx/decoration/Modern/tabview/tabview-pane-t.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -150], "qx/decoration/Modern/tabview/tab-button-top-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-arrow.png": [11, 14, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-tr.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -18], "qx/decoration/Modern/form/button-checked-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -40], "qx/decoration/Modern/groupbox/groupbox-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -20], "qx/decoration/Modern/form/button-preselected-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -52], "qx/decoration/Modern/form/button-hovered-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -40, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png", 0, -6], "inspector/images/autocomplete/method_public18.gif": [18, 18, "gif", "inspector"], "qx/decoration/Modern/form/button-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/checkbox-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -320, 0], "inspector/images/components/tree.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/window/close-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -63, 0], "qx/decoration/Modern/arrows/down.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -74, 0], "qx/decoration/Modern/tabview/tab-button-left-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-disabled-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -4, 0], "qx/decoration/Modern/window/captionbar-inactive-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -12], "qx/decoration/Modern/window/captionbar-active-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, 0], "qx/decoration/Modern/arrows/right-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -15, 0], "inspector/images/components/button.png": [16, 16, "png", "inspector"], "inspector/images/components/listview.png": [16, 16, "png", "inspector"], "inspector/images/shell/warningIcon.png": [14, 14, "png", "inspector"], "qx/decoration/Modern/arrows/left-invert.png": [5, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -30, 0], "qx/decoration/Modern/form/button-pressed-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -144], "qx/decoration/Modern/tabview/tabview-pane-r.png": [30, 2, "png", "qx", "qx/decoration/Modern/tabview-pane-lr-combined.png", -30, 0], "qx/decoration/Modern/form/button-preselected-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -64, 0], "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview-button-right-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tooltip-error-tb-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -6], "qx/decoration/Modern/tabview/tab-button-top-active-l.png": [5, 12, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-lr-combined.png", -5, 0], "inspector/images/spacer.gif": [17, 13, "gif", "inspector"], "qx/decoration/Modern/toolbar/toolbar-part.gif": [7, 1, "gif", "qx"], "inspector/images/close.gif": [17, 13, "gif", "inspector"], "qx/decoration/Modern/shadow/shadow-br.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -15], "inspector/images/close.png": [17, 13, "png", "inspector"], "qx/decoration/Modern/groupbox/groupbox-c.png": [20, 51, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-left-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -15], "inspector/css/sourceview.css": "inspector", "qx/decoration/Modern/window/statusbar-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -4], "inspector/images/components/table.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -10], "qx/decoration/Modern/tabview/tab-button-left-active-l.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", -5, 0], "qx/decoration/Modern/window/captionbar-active-l.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", -6, 0], "qx/decoration/Modern/form/button-preselected-focused-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-left-inactive-b.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -3], "qx/decoration/Modern/tabview/tab-button-top-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -5], "qx/decoration/Modern/form/radiobutton-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -502, 0], "qx/decoration/Modern/shadow-lr-combined.png": [30, 382, "png", "qx"], "qx/decoration/Modern/form/checkbox-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -586, 0], "qx/decoration/Modern/shadow/shadow-bl.png": [15, 15, "png", "qx", "qx/decoration/Modern/shadow-tb-combined.png", 0, -45], "qx/decoration/Modern/tabview/tab-button-right-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tree/open-selected.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -24, 0], "qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", 0, 0], "qx/decoration/Modern/form/button-focused-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -88], "qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-t-combined.png", 0, -3], "qx/decoration/Modern/groupbox/groupbox-r.png": [4, 51, "png", "qx", "qx/decoration/Modern/groupbox-lr-combined.png", -4, 0], "qx/decoration/Modern/arrows/up-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -53, 0], "qx/decoration/Modern/form/button-preselected-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -44], "qx/decoration/Modern/form/button-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -68, 0], "qx/decoration/Modern/window/statusbar-c.png": [20, 7, "png", "qx"], "qx/decoration/Modern/tree/closed.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -8, 0], "qx/decoration/Modern/form/button-disabled-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/tree/open.png": [8, 8, "png", "qx", "qx/decoration/Modern/tree-combined.png", -16, 0], "qx/decoration/Modern/table/ascending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", -46, 0], "qx/decoration/Modern/groupbox/groupbox-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -16], "qx/decoration/Modern/menu/bar-background.png": [40, 20, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", -20, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -390, 0], "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png": [6, 15, "png", "qx"], "qx/decoration/Modern/tabview-button-left-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu/checkbox.gif": [16, 7, "gif", "qx", "qx/decoration/Modern/menu-checkradio-combined.gif", -48, 0], "qx/decoration/Modern/form/button-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -156], "qx/decoration/Modern/form/tooltip-error-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, 0], "qx/decoration/Modern/form/button-hovered-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -36], "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/window/close-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -54, 0], "qx/decoration/Modern/splitpane/knob-horizontal.png": [1, 8, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, 0], "inspector/images/autocomplete/property_public18.gif": [18, 18, "gif", "inspector"], "qx/decoration/Modern/tabview/tab-button-right-active-c.png": [12, 37, "png", "qx"], "qx/decoration/Modern/form/button-preselected-focused-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -25], "qx/decoration/Modern/form/radiobutton-checked-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -28, 0], "qx/decoration/Modern/arrows/down-invert.png": [8, 5, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -61, 0], "qx/decoration/Modern/menu/background.png": [20, 49, "png", "qx", "qx/decoration/Modern/menu-background-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -154, 0], "qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -210, 0], "qx/decoration/Modern/shadow-tb-combined.png": [15, 90, "png", "qx"], "qx/decoration/Modern/form/button-checked-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/window/restore-active-hovered.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -99, 0], "qx/decoration/Modern/window/captionbar-inactive-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png", 0, -24], "qx/decoration/Modern/window/restore-active.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", 0, 0], "qx/decoration/Modern/window-captionbar-tb-inactive-combined.png": [6, 36, "png", "qx"], "qx/decoration/Modern/shadow/shadow-small-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png": [20, 15, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -25], "qx/decoration/Modern/table/boolean-true.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -8, 0], "qx/decoration/Modern/window/captionbar-active-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/window-captionbar-tb-active-combined.png", 0, -12], "inspector/images/icons/setnull.png": [22, 22, "png", "inspector"], "qx/decoration/Modern/form/checkbox-checked-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -600, 0], "qx/decoration/Modern/form/button-preselected-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -204], "inspector/css/domview.css": "inspector", "qx/decoration/Modern/form/button-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -192], "inspector/images/autocomplete/property_protected18.gif": [18, 18, "gif", "inspector"], "inspector/images/shell/infoIcon.png": [14, 14, "png", "inspector"], "qx/decoration/Modern/table/boolean-false.png": [14, 14, "png", "qx", "qx/decoration/Modern/table-combined.png", -22, 0], "qx/decoration/Modern/window/statusbar-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -16], "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png": [6, 39, "png", "qx"], "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-top-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-top-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-preselected-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -112], "qx/decoration/Modern/form/button-pressed-c.png": [20, 52, "png", "qx"], "inspector/images/icons/api.png": [22, 22, "png", "inspector"], "qx/decoration/Modern/cursors/alias.gif": [19, 15, "gif", "qx", "qx/decoration/Modern/cursors-combined.gif", -33, 0], "inspector/images/components/checkbox.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/tabview/tabview-pane-bl.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, 0], "qx/icon/Tango/16/places/folder.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -140], "qx/decoration/Modern/form/radiobutton-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -446, 0], "qx/decoration/Modern/tabview/tab-button-top-active-c.png": [20, 12, "png", "qx"], "qx/decoration/Modern/splitpane-knobs-combined.png": [8, 9, "png", "qx"], "qx/icon/Tango/22/actions/document-properties.png": [22, 22, "png", "qx"], "qx/decoration/Modern/app-header.png": [110, 20, "png", "qx"], "qx/decoration/Modern/groupbox/groupbox-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/groupbox-tb-combined.png", 0, -4], "inspector/images/components/document.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/window/restore-inactive.png": [9, 8, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -27, 0], "qx/decoration/Modern/form/button-checked-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -100], "qx/decoration/Modern/shadow/shadow-small-l.png": [5, 136, "png", "qx", "qx/decoration/Modern/shadow-small-lr-combined.png", -5, 0], "qx/icon/Tango/16/actions/window-close.png": [16, 16, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, 0], "qx/decoration/Modern/tabview-button-right-inactive-b-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/form/button-checked-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -52, 0], "qx/decoration/Modern/tabview/tab-button-left-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -20], "qx/decoration/Modern/tabview-button-top-active-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/tabview/tabview-pane-c.png": [20, 2, "png", "qx"], "qx/decoration/Modern/form/button-pressed-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -64], "qx/decoration/Modern/form/radiobutton.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -334, 0], "qx/decoration/Modern/form/button-checked-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -136], "qx/decoration/Modern/arrows/rewind.png": [10, 8, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -20, 0], "qx/decoration/Modern/pane/pane-t.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -24], "qx/decoration/Modern/form/checkbox-hovered.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -376, 0], "inspector/images/components/textfield.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/tabview-button-right-active-lr-combined.png": [10, 37, "png", "qx"], "inspector/images/components/label.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/form/button-focused-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -124], "qx/decoration/Modern/shadow/shadow-small-c.png": [20, 136, "png", "qx"], "qx/decoration/Modern/form/button-hovered-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -24], "qx/decoration/Modern/window-statusbar-tb-combined.png": [4, 24, "png", "qx"], "inspector/images/icons/highlight.png": [22, 22, "png", "inspector"], "qx/decoration/Modern/form/button-focused-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -172], "qx/decoration/Modern/tabview/tabview-pane-br.png": [30, 30, "png", "qx", "qx/decoration/Modern/tabview-pane-tb-combined.png", 0, -120], "qx/decoration/Modern/arrows/up-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -69, 0], "qx/decoration/Modern/form/button-preselected-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -196], "qx/decoration/Modern/tabview/tab-button-left-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-b-combined.png", 0, -6], "inspector/images/open.png": [17, 13, "png", "inspector"], "qx/decoration/Modern/form/checkbox-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -614, 0], "qx/decoration/Modern/shadow/shadow-small-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/shadow-small-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-right-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/button-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -20], "qx/icon/Tango/16/apps/utilities-color-chooser.png": [16, 16, "png", "qx"], "qx/decoration/Modern/shadow/shadow-c.png": [20, 382, "png", "qx"], "qx/decoration/Modern/table-combined.png": [74, 18, "png", "qx"], "qx/decoration/Modern/pane/pane-bl.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-checked.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -292, 0], "qx/decoration/Modern/button-lr-combined.png": [72, 52, "png", "qx"], "qx/decoration/Modern/form/tooltip-error-tl.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -6], "qx/decoration/Modern/scrollbar-combined.png": [174, 76, "png", "qx"], "qx/decoration/Modern/toolbar-combined.png": [40, 130, "png", "qx"], "qx/decoration/Modern/window/statusbar-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -20], "qx/decoration/Modern/form/checkbox-focused.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -488, 0], "qx/decoration/Modern/form/button-disabled-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -208], "qx/icon/Tango/16/mimetypes/office-document.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-pressed-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -24, 0], "qx/decoration/Modern/tabview/tab-button-left-active-r.png": [5, 37, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-lr-combined.png", 0, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-br.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -15], "qx/decoration/Modern/tabview/tab-button-bottom-active-r.png": [5, 14, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png", 0, 0], "qx/icon/Tango/16/places/folder-open.png": [16, 16, "png", "qx"], "qx/decoration/Modern/window-statusbar-lr-combined.png": [8, 7, "png", "qx"], "qx/decoration/Modern/groupbox-lr-combined.png": [8, 51, "png", "qx"], "qx/decoration/Modern/form/button-checked-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -4], "qx/decoration/Modern/form/button-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -132], "qx/decoration/Modern/tabview/tab-button-left-inactive-r.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -432, 0], "qx/decoration/Modern/groupbox-tb-combined.png": [4, 24, "png", "qx"], "qx/decoration/Modern/form/checkbox-disabled.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -196, 0], "qx/decoration/Modern/form/button-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -60], "qx/decoration/Modern/toolbar/toolbar-handle-knob.gif": [1, 8, "gif", "qx"], "qx/decoration/Modern/form/button-checked-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -68], "qx/decoration/Modern/form/button-checked-bl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -76], "qx/decoration/Modern/form/radiobutton-checked-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -306, 0], "qx/decoration/Modern/form/tooltip-error-l.png": [6, 18, "png", "qx", "qx/decoration/Modern/tooltip-error-lr-combined.png", 0, 0], "qx/decoration/Modern/arrows/down-small.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -82, 0], "qx/decoration/Modern/colorselector/brightness-handle.gif": [35, 11, "gif", "qx", "qx/decoration/Modern/colorselector-combined.gif", 0, 0], "qx/icon/Tango/32/places/folder.png": [32, 32, "png", "qx"], "qx/decoration/Modern/pane/pane-br.png": [6, 6, "png", "qx", "qx/decoration/Modern/pane-tb-combined.png", 0, -30], "qx/decoration/Modern/splitpane/knob-vertical.png": [8, 1, "png", "qx", "qx/decoration/Modern/splitpane-knobs-combined.png", 0, -8], "qx/decoration/Modern/scrollbar/scrollbar-right.png": [4, 6, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -39, 0], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/form/tooltip-error-b.png": [6, 6, "png", "qx", "qx/decoration/Modern/tooltip-error-tb-combined.png", 0, -24], "qx/decoration/Modern/tabview/tab-button-right-active-t.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-right-active-tb-combined.png", 0, -25], "qx/decoration/Modern/form/button-hovered-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -60, 0], "qx/decoration/Modern/shadow-small-tb-combined.png": [5, 30, "png", "qx"], "qx/decoration/Modern/menu-background-combined.png": [60, 49, "png", "qx"], "qx/decoration/Modern/form/button-checked-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -188], "qx/decoration/Modern/tabview/tab-button-top-inactive-l.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/colorselector-combined.gif": [46, 11, "gif", "qx"], "qx/decoration/Modern/form/button-preselected-focused-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -8], "qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png": [3, 15, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png", -3, 0], "qx/decoration/Modern/tabview/tab-button-bottom-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, -5], "qx/decoration/Modern/tabview/tab-button-left-inactive-l.png": [3, 39, "png", "qx", "qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png", 0, 0], "qx/decoration/Modern/form/radiobutton-pressed.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -168, 0], "inspector/images/components/spinner.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/form/button-focused-r.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -44, 0], "qx/decoration/Modern/window/maximize-inactive.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -18, 0], "qx/decoration/Modern/tabview-pane-lr-combined.png": [60, 2, "png", "qx"], "inspector/images/autocomplete/method_protected18.gif": [18, 18, "gif", "inspector"], "qx/decoration/Modern/form/button-hovered-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -80], "inspector/images/autocomplete/method_private18.gif": [18, 18, "gif", "inspector"], "qx/decoration/Modern/form/button-preselected-focused-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -96], "qx/decoration/Modern/window/minimize-active.png": [9, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-buttons-combined.png", -90, 0], "qx/decoration/Modern/tabview/tab-button-left-active-b.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, 0], "qx/decoration/Modern/window/captionbar-active-r.png": [6, 9, "png", "qx", "qx/decoration/Modern/window-captionbar-lr-active-combined.png", 0, 0], "qx/decoration/Modern/table/descending.png": [8, 5, "png", "qx", "qx/decoration/Modern/table-combined.png", 0, 0], "qx/decoration/Modern/form/button-checked-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -116], "qx/decoration/Modern/tabview/tab-button-left-active-bl.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-left-active-tb-combined.png", 0, -5], "qx/decoration/Modern/arrows/down-small-invert.png": [5, 3, "png", "qx", "qx/decoration/Modern/arrows-combined.png", -10, 0], "qx/icon/Tango/16/apps/office-calendar.png": [16, 16, "png", "qx"], "qx/decoration/Modern/form/button-tr.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -12], "qx/icon/Tango/32/places/folder-open.png": [32, 32, "png", "qx"], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png": [10, 19, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -43, 0], "qx/decoration/Modern/form/button-checked-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -176], "qx/decoration/Modern/form/tooltip-error-r.png": [6, 18, "png", "qx", "qx/decoration/Modern/tooltip-error-lr-combined.png", -6, 0], "inspector/images/icons/goto.png": [22, 22, "png", "inspector"], "qx/decoration/Modern/form/button-pressed-t.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -200], "qx/decoration/Modern/form/button-preselected-focused-br.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -212], "qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png": [14, 14, "png", "qx", "qx/decoration/Modern/inputcheckradio-combined.png", -362, 0], "qx/decoration/Modern/form/button-c.png": [20, 52, "png", "qx"], "qx/decoration/Modern/form/button-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -56, 0], "qx/decoration/Modern/window/statusbar-tl.png": [4, 4, "png", "qx", "qx/decoration/Modern/window-statusbar-tb-combined.png", 0, -8], "qx/decoration/Modern/form/button-disabled-l.png": [4, 52, "png", "qx", "qx/decoration/Modern/button-lr-combined.png", -28, 0], "qx/decoration/Modern/form/button-preselected-b.png": [4, 4, "png", "qx", "qx/decoration/Modern/button-tb-combined.png", 0, -56], "qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png": [3, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-b-combined.png", 0, -6], "qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png": [19, 10, "png", "qx", "qx/decoration/Modern/scrollbar-combined.png", -151, 0], "qx/decoration/Modern/window/captionbar-inactive-c.png": [20, 9, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png": [5, 5, "png", "qx", "qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png", 0, 0], "qx/decoration/Modern/form/tooltip-error-c.png": [20, 18, "png", "qx"], "qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-top-inactive-t-combined.png", 0, -3], "inspector/images/components/atom.png": [16, 16, "png", "inspector"], "qx/decoration/Modern/tabview/tab-button-right-inactive-t.png": [3, 3, "png", "qx", "qx/decoration/Modern/tabview-button-right-inactive-t-combined.png", 0, -3]};
qx.$$translations = {"C": {}, "en": {}};
qx.$$locales = {"C": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_12": "December", "cldr_month_format_wide_10": "October", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_month_format_wide_7": "July", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_month_stand-alone_narrow_5": "M", "cldr_day_format_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_month_stand-alone_narrow_4": "A", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_month_stand-alone_narrow_2": "F", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_date_time_format_M": "L", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_wide_tue": "Tuesday", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_stand-alone_wide_thu": "Thursday", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_day_stand-alone_narrow_sun": "S", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_day_stand-alone_narrow_tue": "T", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "May", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_month_format_abbreviated_10": "Oct", "cldr_date_time_format_y": "yyyy", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_day_format_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_date_format_short": "M/d/yy"}, "en": {"cldr_date_format_long": "MMMM d, yyyy", "cldr_month_format_wide_11": "November", "cldr_month_format_wide_12": "December", "cldr_month_format_wide_10": "October", "cldr_time_format_long": "h:mm:ss a z", "cldr_day_format_abbreviated_sat": "Sat", "cldr_month_format_abbreviated_8": "Aug", "cldr_month_format_wide_7": "July", "cldr_day_stand-alone_abbreviated_tue": "Tue", "cldr_day_format_wide_sun": "Sunday", "cldr_day_format_wide_wed": "Wednesday", "cldr_day_format_narrow_thu": "T", "cldr_day_format_narrow_fri": "F", "cldr_month_format_wide_5": "May", "cldr_day_stand-alone_wide_sat": "Saturday", "cldr_month_stand-alone_narrow_3": "M", "cldr_month_stand-alone_narrow_1": "J", "cldr_day_format_narrow_sun": "S", "cldr_date_time_format_MEd": "E, M/d", "cldr_date_time_format_MMM": "LLL", "cldr_month_stand-alone_narrow_5": "M", "cldr_day_format_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_7": "J", "cldr_month_stand-alone_narrow_6": "J", "cldr_month_stand-alone_narrow_9": "S", "cldr_day_stand-alone_wide_sun": "Sunday", "cldr_date_time_format_Md": "M/d", "cldr_month_stand-alone_narrow_4": "A", "cldr_day_stand-alone_wide_fri": "Friday", "cldr_month_stand-alone_narrow_2": "F", "cldr_day_format_abbreviated_fri": "Fri", "cldr_day_stand-alone_abbreviated_fri": "Fri", "cldr_pm": "PM", "cldr_day_format_narrow_tue": "T", "alternateQuotationEnd": "’", "cldr_date_time_format_M": "L", "cldr_month_stand-alone_narrow_8": "A", "quotationEnd": "”", "cldr_day_stand-alone_abbreviated_thu": "Thu", "cldr_month_stand-alone_narrow_11": "N", "cldr_month_stand-alone_narrow_10": "O", "cldr_month_stand-alone_narrow_12": "D", "cldr_day_format_wide_thu": "Thursday", "cldr_day_stand-alone_narrow_sat": "S", "cldr_day_format_wide_tue": "Tuesday", "cldr_day_format_wide_fri": "Friday", "cldr_date_format_medium": "MMM d, yyyy", "cldr_day_format_narrow_sat": "S", "cldr_date_format_full": "EEEE, MMMM d, yyyy", "cldr_day_stand-alone_wide_thu": "Thursday", "quotationStart": "“", "cldr_date_time_format_MMMd": "MMM d", "cldr_day_format_abbreviated_tue": "Tue", "cldr_day_format_abbreviated_mon": "Mon", "cldr_date_time_format_yM": "M/yyyy", "cldr_day_stand-alone_wide_mon": "Monday", "cldr_date_time_format_MMMEd": "E, MMM d", "cldr_date_time_format_yQ": "Q yyyy", "cldr_date_time_format_hm": "h:mm a", "cldr_day_stand-alone_narrow_sun": "S", "cldr_day_stand-alone_abbreviated_sat": "Sat", "cldr_month_format_wide_1": "January", "cldr_month_format_wide_3": "March", "cldr_month_format_wide_2": "February", "cldr_day_stand-alone_abbreviated_sun": "Sun", "cldr_month_format_wide_4": "April", "cldr_date_time_format_MMMMd": "MMMM d", "cldr_month_format_wide_6": "June", "cldr_month_format_wide_9": "September", "cldr_month_format_wide_8": "August", "cldr_day_stand-alone_narrow_tue": "T", "cldr_date_time_format_MMMMEd": "E, MMMM d", "cldr_day_stand-alone_narrow_wed": "W", "cldr_time_format_full": "h:mm:ss a v", "cldr_am": "AM", "cldr_number_decimal_separator": ".", "cldr_number_percent_format": "#,##0%", "cldr_day_stand-alone_wide_wed": "Wednesday", "cldr_number_group_separator": ",", "alternateQuotationStart": "‘", "cldr_day_format_abbreviated_sun": "Sun", "cldr_time_format_short": "h:mm a", "cldr_date_time_format_Hms": "HH:mm:ss", "cldr_time_format_medium": "h:mm:ss a", "cldr_date_time_format_ms": "mm:ss", "cldr_day_stand-alone_narrow_thu": "T", "cldr_month_format_abbreviated_1": "Jan", "cldr_month_format_abbreviated_2": "Feb", "cldr_month_format_abbreviated_3": "Mar", "cldr_month_format_abbreviated_4": "Apr", "cldr_month_format_abbreviated_5": "May", "cldr_month_format_abbreviated_6": "Jun", "cldr_month_format_abbreviated_7": "Jul", "cldr_date_time_format_yMMMEd": "EEE, MMM d, yyyy", "cldr_month_format_abbreviated_9": "Sep", "cldr_day_format_wide_mon": "Monday", "cldr_date_time_format_yMEd": "EEE, M/d/yyyy", "cldr_month_format_abbreviated_10": "Oct", "cldr_date_time_format_y": "yyyy", "cldr_day_stand-alone_wide_tue": "Tuesday", "cldr_day_format_narrow_wed": "W", "cldr_day_format_abbreviated_wed": "Wed", "cldr_date_time_format_yQQQ": "QQQ yyyy", "cldr_day_stand-alone_narrow_fri": "F", "cldr_date_time_format_yMMM": "MMM yyyy", "cldr_day_stand-alone_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_mon": "Mon", "cldr_day_format_narrow_mon": "M", "cldr_day_stand-alone_abbreviated_wed": "Wed", "cldr_date_time_format_yMMMM": "MMMM yyyy", "cldr_month_format_abbreviated_12": "Dec", "cldr_date_time_format_Hm": "HH:mm", "cldr_month_format_abbreviated_11": "Nov", "cldr_day_format_wide_sat": "Saturday", "cldr_date_time_format_d": "d", "cldr_date_format_short": "M/d/yy"}};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["qx:inspector-0.js"]],
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
(function(){var a="inspector.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
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
(function(){var d="decoration/toolbar/toolbar-gradient.png",c="border-main",b="inspector.theme.Decoration",a="scale";
qx.Theme.define(b,{extend:qx.theme.modern.Decoration,decorations:{"myToolbar":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:c,backgroundImage:d,backgroundRepeat:a}}}});
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
(function(){var a="inspector.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
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
(function(){var a="inspector.theme.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});
})();
(function(){var a="inspector.theme.Theme";
qx.Theme.define(a,{meta:{color:inspector.theme.Color,decoration:inspector.theme.Decoration,font:inspector.theme.Font,icon:qx.theme.icon.Tango,appearance:inspector.theme.Appearance}});
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
(function(){var h="qx.locale.MTranslation";
qx.Mixin.define(h,{members:{tr:function(m,n){var o=qx.locale.Manager;

if(o){return o.tr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(a,b,c,d){var e=qx.locale.Manager;

if(e){return e.trn.apply(e,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(i,j,k){var l=qx.locale.Manager;

if(l){return l.trc.apply(l,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(f){var g=qx.locale.Manager;

if(g){return g.marktr.apply(g,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var d="__jE",c="abstract",b="qx.application.AbstractGui";
qx.Class.define(b,{type:c,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__jE:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__jE;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__jE=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this._disposeFields(d);
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var w="changeValue",v="console",u="_objectsWindow",t="Height",s="property",r="widgets",q="url",p="Open",o="..",n="Top",bk="objects",bj="_propertyWindow",bi="_consoleWindow",bh="Width",bg="_widgetsWindow",bf="Left",be="resize",bd="_consoleButton",bc="true",bb="Inspect widget",D="index.html",E="myToolbar",B="execute",C="_objectsButton",z="</tt>",A=" Can not access the javascript in the iframe!",x="Properties",y="load",G="changeSelection",H="middle",O="",M="qooxdoo Inspector",S="Lucida Grande",Q="close",W="inspector.Application",U="Widgets",J="_widgetsButton",ba="Console",Y=" : <tt>",X="inspector/css/propertylisthtml.css",I="move",K="inspector/css/domview.css",L="inspector/css/consoleview.css",N="hidden",P="inspector/css/sourceview.css",R="_propertyButton",T="Objects",V="icon/16/actions/view-refresh.png",F="minimized";
qx.Class.define(W,{extend:qx.application.Standalone,construct:function(){arguments.callee.base.call(this);
qx.bom.Stylesheet.includeFile(K);
qx.bom.Stylesheet.includeFile(L);
qx.bom.Stylesheet.includeFile(P);
qx.bom.Stylesheet.includeFile(X);
},members:{__a:null,_toolbar:null,_objectsButton:null,_widgetsButton:null,_consoleButton:null,_propertyButton:null,_inspectButton:null,_selectedWidgetLabel:null,_urlTextField:null,_reloadButton:null,_objectsWindow:null,_widgetsWindow:null,_consoleWindow:null,_propertyWindow:null,_container:null,_iFrame:null,_loading:null,_selector:null,_loadedWindow:null,main:function(){arguments.callee.base.call(this);
{};
this._container=new qx.ui.container.Composite(new qx.ui.layout.VBox());
this.getRoot().add(this._container,{edge:0});
this.__h();
this._iFrame=new qx.ui.embed.Iframe(o);
this._iFrame.setDecorator(null);
this._container.add(this._iFrame,{flex:1});
this._iFrame.addListener(y,this.__b,this);
this._loading=true;
var k=qx.bom.Cookie.get(q);

if(k==undefined||k==O){k=o;
}
if(window.qxinspector!=undefined&&qxinspector.local){this._urlTextField.setVisibility(N);
this._urlTextField.setValue(D);
}else{this._urlTextField.setValue(k);
}},__b:function(){this.__a=0;
this.__c();

if(window.qxinspector==undefined){try{this._urlTextField.setValue(this._iFrame.getWindow().location.pathname);
}catch(d){}}qx.bom.Cookie.set(q,this._iFrame.getSource(),7);
},__c:function(){this._toolbar.setEnabled(true);
this._loadedWindow=this._iFrame.getContentElement().getWindow();
if(!this.__g()){return;
}if(!this._selector){this._selector=new inspector.components.Selector(this._loadedWindow);
}else{this._selector.setJSWindow(this._loadedWindow);
}this._selector.addListener(G,this._changeSelection,this);
this._selector.setSelection(this._loadedWindow.qx.core.Init.getApplication());
this._loading=false;
this.__d();
this.select(this._loadedWindow.qx.core.Init.getApplication().getRoot());
this.__f();
},__d:function(){if(this._objectsWindow!=null&&this._objectsWindow.isVisible()){this._objectsWindow.load(this._loadedWindow);
}if(this._widgetsWindow!=null&&this._widgetsWindow.isVisible()){this._widgetsWindow.load(this._loadedWindow);
}},__e:function(bv,bw,name){var bz=qx.bom.Cookie.get(name+p);

if(bz==bc||bz===null){bw.setValue(true);
var top=parseInt(qx.bom.Cookie.get(name+n));
var bA=parseInt(qx.bom.Cookie.get(name+bf));

if(!isNaN(top)&&!isNaN(bA)){this[bv].moveTo(bA,top);
}var bx=parseInt(qx.bom.Cookie.get(name+bh));
var by=parseInt(qx.bom.Cookie.get(name+t));

if(!isNaN(by)){this[bv].setHeight(by);
}
if(!isNaN(bx)){this[bv].setWidth(bx);
}}},__f:function(){this.__e(u,this._objectsButton,bk);
this.__e(bg,this._widgetsButton,r);
this.__e(bi,this._consoleButton,v);
this.__e(bj,this._propertyButton,s);
},__g:function(){try{this.__a++;
if(this.__a>20){throw new Error("qooxdoo not found!");
}
try{this._loadedWindow.qx.core.Init.getApplication().getRoot();
this._selectedWidgetLabel.resetEnabled();
this._urlTextField.resetEnabled();
this._reloadButton.resetEnabled();
return true;
}catch(h){qx.event.Timer.once(this.__c,this,500);
throw new Error("qooxdoo isn't ready at the moment!");
}}catch(bn){this._toolbar.setEnabled(false);
this._selectedWidgetLabel.setValue(A);
this._selectedWidgetLabel.setEnabled(true);
this._urlTextField.setEnabled(true);
this._reloadButton.setEnabled(true);
return false;
}},__h:function(){this._toolbar=new qx.ui.toolbar.ToolBar();
this._toolbar.setDecorator(E);
this._toolbar._getLayout().setAlignY(H);
this._container.add(this._toolbar);
var g=new qx.ui.basic.Label(M);
g.setPaddingLeft(10);
g.setPaddingRight(5);
var f=new qx.bom.Font(12,[S]);
f.setBold(true);
f.setItalic(true);
g.setFont(f);
this._toolbar.add(g);
this._toolbar.setEnabled(false);
this._toolbar.add(new qx.ui.toolbar.Separator());
this.__i(C,T,u,inspector.objects.ObjectsWindow,bk,function(){if(this._loadedWindow!=null){this._objectsWindow.load(this._loadedWindow);
}});
this.__i(J,U,bg,inspector.widgets.WidgetsWindow,r,function(){this._widgetsWindow.load();
});
this.__i(R,x,bj,inspector.property.PropertyWindow,s,function(){this._propertyWindow.select(this._selector.getSelection());
});
this.__i(bd,ba,bi,inspector.console.ConsoleWindow,v,function(){});
this._toolbar.add(new qx.ui.toolbar.Separator());
this._inspectButton=new qx.ui.toolbar.CheckBox(bb);
this._toolbar.add(this._inspectButton);
this._inspectButton.addListener(w,function(e){if(e.getData()){this._selector.start();
}else{this._selector.end();
}},this);
this._selectedWidgetLabel=new qx.ui.basic.Label();
this._selectedWidgetLabel.setRich(true);
this._toolbar.add(this._selectedWidgetLabel);
this._toolbar.addSpacer();
this._urlTextField=new qx.ui.form.TextField();
this._urlTextField.setMarginRight(5);
this._urlTextField.setWidth(300);
this._toolbar.add(this._urlTextField);
this._urlTextField.addListener(w,this._reloadIframe,this);
this._reloadButton=new qx.ui.toolbar.Button(null,V);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(B,this._reloadIframe,this);
},_reloadIframe:function(){this._toolbar.setEnabled(false);
this._loading=true;

if(this._iFrame.getSource()!=this._urlTextField.getValue()){this._iFrame.setSource(this._urlTextField.getValue());
}else{this._iFrame.reload();
}},__i:function(bo,bp,bq,br,name,bs){this[bo]=new qx.ui.toolbar.CheckBox(bp);
this._toolbar.add(this[bo]);
var bt=false;
this[bo].addListener(w,function(e){if(!bt){this[bq]=new br();
this.getRoot().add(this[bq]);
this[bq].setInitSizeAndPosition();
this.__j(this[bq],this[bo],name);
}e.getData()?this[bq].open():this[bq].close();
bs.call(this);
bt=true;
qx.bom.Cookie.set(name+p,e.getData(),7);
},this);
},__j:function(bl,bm,name){bl.addListener(Q,function(){bm.setValue(false);
},this);
bl.addListener(I,function(e){qx.bom.Cookie.set(name+bf,e.getData().left,7);
qx.bom.Cookie.set(name+n,e.getData().top,7);
},this);
bl.addListener(be,function(e){qx.bom.Cookie.set(name+bh,e.getData().width,7);
qx.bom.Cookie.set(name+t,e.getData().height,7);
},this);
},_changeSelection:function(e){this._inspectButton.setValue(false);
this.select(e.getData(),this._selector);
},getSelectedObject:function(){return this._selector.getSelection();
},setWidgetByHash:function(a,b){if(b==v){b=this._consoleWindow;
this._consoleWindow.goToDefaultView();
}var c=this._loadedWindow.qx.core.ObjectRegistry.fromHashCode(a);
this.select(c,b);
},inspectObjectByDomSelecet:function(i,j){if(this._consoleWindow!=null){this._consoleWindow.inspectObjectByDomSelecet(i,j);
}},inspectObjectByInternalId:function(bu){if(this._consoleWindow!=null){this._consoleWindow.inspectObjectByInternalId(bu);
}},select:function(l,m){if(this._loading||!l){return;
}this._selectedWidgetLabel.setValue(Y+l.toString()+z);

if(m!=this._selector){if(l!==this._selector.getSelection()){this._selector.setSelection(l);
}}
if(this._objectsWindow!=null&&m!=this._objectsWindow){if(l!=this._objectsWindow.getSelection()){this._objectsWindow.select(l,true);
}}
if(this._widgetsWindow!=null&&m!=this._widgetsWindow){if(l!=this._widgetsWindow.getSelection()){this._widgetsWindow.select(l,true);
}}
if(this._propertyWindow!=null&&m!=this._propertyWindow){if(l!=this._propertyWindow.getSelection()&&this._propertyWindow.getMode()!=F){this._propertyWindow.select(l,true);
}}this._selector.highlightFor(l,1000);
},getIframeWindowObject:function(){return this._loadedWindow;
},getExcludes:function(){return this._selector.getAddedWidgets();
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
(function(){var u="",t="underline",s="Boolean",r="px",q='"',p="italic",o="normal",n="bold",m="_applyItalic",k="_applyBold",G="Integer",F="_applyFamily",E="_applyLineHeight",D="Array",C="overline",B="line-through",A="qx.bom.Font",z="Number",y="_applyDecoration",x=" ",v="_applySize",w=",";
qx.Class.define(A,{extend:qx.core.Object,construct:function(M,N){arguments.callee.base.call(this);

if(M!==undefined){this.setSize(M);
}
if(N!==undefined){this.setFamily(N);
}},statics:{fromString:function(H){var L=new qx.bom.Font();
var J=H.split(/\s+/);
var name=[];
var K;

for(var i=0;i<J.length;i++){switch(K=J[i]){case n:L.setBold(true);
break;
case p:L.setItalic(true);
break;
case t:L.setDecoration(t);
break;
default:var I=parseInt(K,10);

if(I==K||qx.lang.String.contains(K,r)){L.setSize(I);
}else{name.push(K);
}break;
}}
if(name.length>0){L.setFamily(name);
}return L;
},fromConfig:function(a){var b=new qx.bom.Font;
b.set(a);
return b;
},__bK:{fontFamily:u,fontSize:u,fontWeight:u,fontStyle:u,textDecoration:u,lineHeight:1.2},getDefaultStyles:function(){return this.__bK;
}},properties:{size:{check:G,nullable:true,apply:v},lineHeight:{check:z,nullable:true,apply:E},family:{check:D,nullable:true,apply:F},bold:{check:s,nullable:true,apply:k},italic:{check:s,nullable:true,apply:m},decoration:{check:[t,B,C],nullable:true,apply:y}},members:{__bL:null,__bM:null,__bN:null,__bO:null,__bP:null,__bQ:null,_applySize:function(S,T){this.__bL=S===null?null:S+r;
},_applyLineHeight:function(Q,R){this.__bQ=Q===null?null:Q;
},_applyFamily:function(c,d){var e=u;

for(var i=0,l=c.length;i<l;i++){if(c[i].indexOf(x)>0){e+=q+c[i]+q;
}else{e+=c[i];
}
if(i!==l-1){e+=w;
}}this.__bM=e;
},_applyBold:function(O,P){this.__bN=O===null?null:O?n:o;
},_applyItalic:function(h,j){this.__bO=h===null?null:h?p:o;
},_applyDecoration:function(f,g){this.__bP=f===null?null:f;
},getStyles:function(){return {fontFamily:this.__bM,fontSize:this.__bL,fontWeight:this.__bN,fontStyle:this.__bO,textDecoration:this.__bP,lineHeight:this.__bQ};
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
(function(){var B="string",A="Theme",z="_applyTheme",y="__cK",x="qx.theme.manager.Appearance",w=":",v="__cL",u="changeAppearanceTheme",t="changeTheme",s="/",r="singleton";
qx.Class.define(x,{type:r,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__cK={};
this.__cL={};
},properties:{appearanceTheme:{check:A,nullable:true,event:u},theme:{check:A,nullable:true,event:t,apply:z}},members:{__cM:{},__cK:null,__cL:null,_applyTheme:function(N,O){this.__cL={};
this.__cK={};
},__cN:function(C,D,E){var I=D.appearances;
var L=I[C];

if(!L){var M=s;
var F=[];
var K=C.split(M);
var J;

while(!L&&K.length>0){F.unshift(K.pop());
var G=K.join(M);
L=I[G];

if(L){J=L.alias||L;

if(typeof J===B){var H=J+M+F.join(M);
return this.__cN(H,D,E);
}}}if(E!=null){return this.__cN(E,D);
}return null;
}else if(typeof L===B){return this.__cN(L,D,E);
}else if(L.include&&!L.style){return this.__cN(L.include,D,E);
}return C;
},styleFrom:function(a,b,c,d){if(!c){c=this.getTheme();
}var j=this.__cL;
var e=j[a];

if(!e){e=j[a]=this.__cN(a,c,d);
}var o=c.appearances[e];

if(!o){this.warn("Missing appearance: "+a);
return null;
}if(!o.style){return null;
}var p=e;

if(b){var q=o.$$bits;

if(!q){q=o.$$bits={};
o.$$length=0;
}var h=0;

for(var k in b){if(!b[k]){continue;
}
if(q[k]==null){q[k]=1<<o.$$length++;
}h+=q[k];
}if(h>0){p+=w+h;
}}var i=this.__cK;

if(i[p]!==undefined){return i[p];
}if(!b){b=this.__cM;
}var m;
if(o.include||o.base){var g=o.style(b);
var f;

if(o.include){f=this.styleFrom(o.include,b,c,d);
}m={};
if(o.base){var l=this.styleFrom(e,b,o.base,d);

if(o.include){for(var n in l){if(!f.hasOwnProperty(n)&&!g.hasOwnProperty(n)){m[n]=l[n];
}}}else{for(var n in l){if(!g.hasOwnProperty(n)){m[n]=l[n];
}}}}if(o.include){for(var n in f){if(!g.hasOwnProperty(n)){m[n]=f[n];
}}}for(var n in g){m[n]=g[n];
}}else{m=o.style(b);
}return i[p]=m||null;
}},destruct:function(){this._disposeFields(y,v);
}});
})();
(function(){var u="focusout",t="interval",s="mouseover",r="mouseout",q="mousemove",p="widget",o="qx.ui.tooltip.ToolTip",n="Boolean",m="_applyCurrent",l="__mA",i="qx.ui.tooltip.Manager",k="__mB",j="tooltip-error",h="singleton",g="__mz";
qx.Class.define(i,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,s,this.__mJ,this,true);
this.__mz=new qx.event.Timer();
this.__mz.addListener(t,this.__mG,this);
this.__mA=new qx.event.Timer();
this.__mA.addListener(t,this.__mH,this);
this.__mB={left:0,top:0};
},properties:{current:{check:o,nullable:true,apply:m},showInvalidTooltips:{check:n,init:true}},members:{__mB:null,__mA:null,__mz:null,__mC:null,__mD:null,__mE:function(){if(!this.__mC){this.__mC=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__mC;
},__mF:function(){if(!this.__mD){this.__mD=new qx.ui.tooltip.ToolTip().set({appearance:j});
this.__mD.syncAppearance();
}return this.__mD;
},_applyCurrent:function(x,y){if(y&&qx.ui.core.Widget.contains(y,x)){return;
}if(y){y.exclude();
this.__mz.stop();
this.__mA.stop();
}var A=qx.event.Registration;
var z=document.body;
if(x){this.__mz.startWith(x.getShowTimeout());
A.addListener(z,r,this.__mK,this,true);
A.addListener(z,u,this.__mL,this,true);
A.addListener(z,q,this.__mI,this,true);
}else{A.removeListener(z,r,this.__mK,this,true);
A.removeListener(z,u,this.__mL,this,true);
A.removeListener(z,q,this.__mI,this,true);
}},__mG:function(e){var f=this.getCurrent();

if(f){this.__mA.startWith(f.getHideTimeout());

if(f.getPlaceMethod()==p){f.placeToWidget(f.getOpener());
}else{f.placeToPoint(this.__mB);
}f.show();
}this.__mz.stop();
},__mH:function(e){var B=this.getCurrent();

if(B){B.exclude();
}this.__mA.stop();
this.resetCurrent();
},__mI:function(e){var a=this.__mB;
a.left=e.getDocumentLeft();
a.top=e.getDocumentTop();
},__mJ:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F;
while(E!=null){var F=E.getToolTip();
var G=E.getToolTipText()||null;
var D=E.getToolTipIcon()||null;

if(qx.Class.hasInterface(E.constructor,qx.ui.form.IForm)&&!E.isValid()){var C=E.getInvalidMessage();
}
if(F||G||D||C){break;
}E=E.getLayoutParent();
}
if(!E){return;
}if(C&&E.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var F=this.__mF().set({label:C});
}else if(!F){var F=this.__mE().set({label:G,icon:D});
}this.setCurrent(F);
F.setOpener(E);
},__mK:function(e){var b=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!b){return;
}var c=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!c){return;
}var d=this.getCurrent();
if(d&&(c==d||qx.ui.core.Widget.contains(d,c))){return;
}if(c&&b&&qx.ui.core.Widget.contains(b,c)){return;
}if(d&&!c){this.setCurrent(null);
}else{this.resetCurrent();
}},__mL:function(e){var v=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!v){return;
}var w=this.getCurrent();
if(w&&w==v.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,s,this.__mJ,this,true);
this._disposeObjects(g,l);
this._disposeFields(k);
}});
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
(function(){var e="qx.ui.core.MChildrenHandling";
qx.Mixin.define(e,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(l){return this._indexOf(l);
},add:function(j,k){this._add(j,k);
},addAt:function(m,n,o){this._addAt(m,n,o);
},addBefore:function(a,b,c){this._addBefore(a,b,c);
},addAfter:function(g,h,i){this._addAfter(g,h,i);
},remove:function(d){this._remove(d);
},removeAt:function(p){return this._removeAt(p);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(f){f.getChildren=f._getChildren;
f.hasChildren=f._hasChildren;
f.indexOf=f._indexOf;
f.add=f._add;
f.addAt=f._addAt;
f.addBefore=f._addBefore;
f.addAfter=f._addAfter;
f.remove=f._remove;
f.removeAt=f._removeAt;
f.removeAll=f._removeAll;
}}});
})();
(function(){var b="qx.ui.core.MLayoutHandling";
qx.Mixin.define(b,{members:{setLayout:function(a){return this._setLayout(a);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var Q="Integer",P="_applyDimension",O="Boolean",N="_applyStretching",M="_applyMargin",L="shorthand",K="_applyAlign",J="allowShrinkY",I="bottom",H="__eA",bl="__eC",bk="baseline",bj="marginBottom",bi="qx.ui.core.LayoutItem",bh="center",bg="marginTop",bf="$$subparent",be="__eD",bd="allowGrowX",bc="middle",X="marginLeft",Y="allowShrinkX",V="__ey",W="$$parent",T="top",U="right",R="marginRight",S="abstract",ba="allowGrowY",bb="left";
qx.Class.define(bi,{type:S,extend:qx.core.Object,properties:{minWidth:{check:Q,nullable:true,apply:P,init:null,themeable:true},width:{check:Q,nullable:true,apply:P,init:null,themeable:true},maxWidth:{check:Q,nullable:true,apply:P,init:null,themeable:true},minHeight:{check:Q,nullable:true,apply:P,init:null,themeable:true},height:{check:Q,nullable:true,apply:P,init:null,themeable:true},maxHeight:{check:Q,nullable:true,apply:P,init:null,themeable:true},allowGrowX:{check:O,apply:N,init:true,themeable:true},allowShrinkX:{check:O,apply:N,init:true,themeable:true},allowGrowY:{check:O,apply:N,init:true,themeable:true},allowShrinkY:{check:O,apply:N,init:true,themeable:true},allowStretchX:{group:[bd,Y],mode:L,themeable:true},allowStretchY:{group:[ba,J],mode:L,themeable:true},marginTop:{check:Q,init:0,apply:M,themeable:true},marginRight:{check:Q,init:0,apply:M,themeable:true},marginBottom:{check:Q,init:0,apply:M,themeable:true},marginLeft:{check:Q,init:0,apply:M,themeable:true},margin:{group:[bg,R,bj,X],mode:L,themeable:true},alignX:{check:[bb,bh,U],nullable:true,apply:K,themeable:true},alignY:{check:[T,bc,I,bk],nullable:true,apply:K,themeable:true}},members:{__ex:null,__ey:null,__ez:null,__eA:null,__eB:null,__eC:null,__eD:null,getBounds:function(){return this.__eC||this.__ey||null;
},clearSeparators:function(){},renderSeparator:function(a,b){},renderLayout:function(A,top,B,C){var D;
{};
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__ex){this.__ex=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__ey;

if(!G){G=this.__ey={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__ez){F.local=true;
delete this.__ez;
}
if(this.__eB){F.margin=true;
delete this.__eB;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__ez;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__ez=true;
this.__eA=null;
},getSizeHint:function(c){var d=this.__eA;

if(d){return d;
}
if(c===false){return null;
}d=this.__eA=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__ex&&this.getHeight()==null){d.height=this.__ex;
}if(!this.getAllowShrinkX()){d.minWidth=Math.max(d.minWidth,d.width);
}else if(d.minWidth>d.width&&this.getAllowGrowX()){d.width=d.minWidth;
}
if(!this.getAllowShrinkY()){d.minHeight=Math.max(d.minHeight,d.height);
}
if(d.minHeight>d.height&&this.getAllowGrowY()){d.height=d.minHeight;
}if(!this.getAllowGrowX()){d.maxWidth=Math.min(d.maxWidth,d.width);
}
if(d.width>d.maxWidth){d.width=d.maxWidth;
}
if(!this.getAllowGrowY()){d.maxHeight=Math.min(d.maxHeight,d.height);
}
if(d.height>d.maxHeight){d.height=d.maxHeight;
}return d;
},_computeSizeHint:function(){var t=this.getMinWidth()||0;
var q=this.getMinHeight()||0;
var u=this.getWidth()||t;
var s=this.getHeight()||q;
var p=this.getMaxWidth()||Infinity;
var r=this.getMaxHeight()||Infinity;
return {minWidth:t,width:u,maxWidth:p,minHeight:q,height:s,maxHeight:r};
},_hasHeightForWidth:function(){var j=this._getLayout();

if(j){return j.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(v){var w=this._getLayout();

if(w&&w.hasHeightForWidth()){return w.getHeightForWidth(v);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__eB=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__eC;
},setUserBounds:function(x,top,y,z){this.__eC={left:x,top:top,width:y,height:z};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__eC;
qx.ui.core.queue.Layout.add(this);
},__eE:{},setLayoutProperties:function(m){if(m==null){return;
}var n=this.__eD;

if(!n){n=this.__eD={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(m);
}for(var o in m){if(m[o]==null){delete n[o];
}else{n[o]=m[o];
}}},getLayoutProperties:function(){return this.__eD||this.__eE;
},clearLayoutProperties:function(){delete this.__eD;
},updateLayoutProperties:function(e){var f=this._getLayout();

if(f){var g;
{};
f.invalidateChildrenCache();
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
},clone:function(){var h=arguments.callee.base.call(this);
var i=this.__eD;

if(i){h.__eD=qx.lang.Object.clone(i);
}return h;
},serialize:function(){var k=arguments.callee.base.call(this);
var l=this.__eD;

if(l){k.layoutProperties=qx.lang.Object.clone(l);
}return k;
}},destruct:function(){this._disposeFields(W,bf,be,V,bl,H);
}});
})();
(function(){var gK="px",gJ="qx.event.type.Mouse",gI="Boolean",gH="qx.event.type.Drag",gG="visible",gF="qx.event.type.Focus",gE="on",gD="Integer",gC="excluded",gB="object",gc="qx.event.type.Data",gb="_applyPadding",ga="qx.event.type.Event",fY="zIndex",fX="hidden",fW="String",fV="tabIndex",fU="contextmenu",fT="absolute",fS="backgroundColor",gR="focused",gS="changeVisibility",gP="mshtml",gQ="hovered",gN="qx.event.type.KeySequence",gO="qx.client",gL="drag",gM="height",gT="div",gU="disabled",gu="move",gt="dragstart",gw="qx.dynlocale",gv="dragchange",gy="position",gx="dragend",gA="resize",gz="Decorator",gs="width",gr="$$widget",eJ="opacity",eK="default",eL="Color",eM="top",eN="left",eO="changeToolTipText",eP="beforeContextmenuOpen",eQ="Use public 'getChildControl' instead!",eR="_applyNativeContextMenu",eS="_applyBackgroundColor",gY="__cP",gX="_applyFocusable",gW="changeShadow",gV="qx.event.type.KeyInput",hd="__db",hc="createChildControl",hb="Font",ha="_applyShadow",hf="_applyEnabled",he="_applySelectable",fs="_applyKeepActive",ft="Number",fq="_applyVisibility",fr="__dd",fw="repeat",fx="qxDraggable",fu="syncAppearance",fv="paddingLeft",fo="_applyDroppable",fp="__cU",fb="__dl",fa="#",fd="_applyCursor",fc="_applyDraggable",eW="changeTextColor",eV="changeContextMenu",eY="paddingTop",eX="changeSelectable",eU="__cT",eT="hideFocus",fC="none",fD="outline",fE="_applyAppearance",fF="overflowX",fy="_applyOpacity",fz="url(",fA=")",fB="qx.ui.core.Widget",fG="_applyFont",fH="cursor",fl="qxDroppable",fk="changeZIndex",fj="overflowY",fi="__cQ",fh="changeEnabled",fg="changeFont",ff="_applyDecorator",fe="_applyZIndex",fn="_applyTextColor",fm="qx.ui.menu.Menu",fI="Use public 'hasChildControl' instead!",fJ="_applyToolTipText",fK="__cY",fL="true",fM="widget",fN="changeDecorator",fO="_applyTabIndex",fP="__cV",fQ="changeAppearance",fR="shorthand",gg="/",gf="",ge="_applyContextMenu",gd="paddingBottom",gk="changeNativeContextMenu",gj="qx.ui.tooltip.ToolTip",gi="__di",gh="qxKeepActive",gm="_applyKeepFocus",gl="paddingRight",gp="changeBackgroundColor",gq="changeLocale",gn="qxKeepFocus",go="qx/static/blank.gif";
qx.Class.define(fB,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__cP=this._createContainerElement();
this.__cQ=this.__dc();
this.__cP.add(this.__cQ);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:ga,disappear:ga,createChildControl:gc,resize:gc,move:gc,syncAppearance:gc,mousemove:gJ,mouseover:gJ,mouseout:gJ,mousedown:gJ,mouseup:gJ,click:gJ,dblclick:gJ,contextmenu:gJ,beforeContextmenuOpen:gJ,mousewheel:gJ,keyup:gN,keydown:gN,keypress:gN,keyinput:gV,focus:gF,blur:gF,focusin:gF,focusout:gF,activate:gF,deactivate:gF,capture:ga,losecapture:ga,drop:gH,dragleave:gH,dragover:gH,drag:gH,dragstart:gH,dragend:gH,dragchange:gH,droprequest:gH},properties:{paddingTop:{check:gD,init:0,apply:gb,themeable:true},paddingRight:{check:gD,init:0,apply:gb,themeable:true},paddingBottom:{check:gD,init:0,apply:gb,themeable:true},paddingLeft:{check:gD,init:0,apply:gb,themeable:true},padding:{group:[eY,gl,gd,fv],mode:fR,themeable:true},zIndex:{nullable:true,init:null,apply:fe,event:fk,check:gD,themeable:true},decorator:{nullable:true,init:null,apply:ff,event:fN,check:gz,themeable:true},shadow:{nullable:true,init:null,apply:ha,event:gW,check:gz,themeable:true},backgroundColor:{nullable:true,check:eL,apply:eS,event:gp,themeable:true},textColor:{nullable:true,check:eL,apply:fn,event:eW,themeable:true,inheritable:true},font:{nullable:true,apply:fG,check:hb,event:fg,themeable:true,inheritable:true},opacity:{check:ft,apply:fy,themeable:true,nullable:true,init:null},cursor:{check:fW,apply:fd,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:gj,nullable:true},toolTipText:{check:fW,nullable:true,event:eO,apply:fJ},toolTipIcon:{check:fW,nullable:true,event:eO},visibility:{check:[gG,fX,gC],init:gG,apply:fq,event:gS},enabled:{init:true,check:gI,inheritable:true,apply:hf,event:fh},anonymous:{init:false,check:gI},tabIndex:{check:gD,nullable:true,apply:fO},focusable:{check:gI,init:false,apply:gX},keepFocus:{check:gI,init:false,apply:gm},keepActive:{check:gI,init:false,apply:fs},draggable:{check:gI,init:false,apply:fc},droppable:{check:gI,init:false,apply:fo},selectable:{check:gI,init:false,event:eX,apply:he},contextMenu:{check:fm,apply:ge,nullable:true,event:eV},nativeContextMenu:{check:gI,init:false,themeable:true,event:gk,apply:eR},appearance:{check:fW,init:fM,apply:fE,event:fQ}},statics:{DEBUG:false,getWidgetByElement:function(bn){try{while(bn){var bo=bn.$$widget;
if(bo!=null){return qx.core.ObjectRegistry.fromHashCode(bo);
}bn=bn.parentNode;
}}catch(cB){}return null;
},contains:function(parent,cv){while(cv){if(parent==cv){return true;
}cv=cv.getLayoutParent();
}return false;
},__cR:{},__cS:{}},members:{__cP:null,__cQ:null,__cT:null,__cU:null,__cV:null,__cW:null,__cX:null,__cY:null,_getLayout:function(){return this.__cY;
},_setLayout:function(dc){{};

if(this.__cY){this.__cY.connectToWidget(null);
}
if(dc){dc.connectToWidget(this);
}this.__cY=dc;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}
if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(this.__cP);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(this.__cP);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},__da:null,renderLayout:function(ca,top,cb,cc){var cn=arguments.callee.base.call(this,ca,top,cb,cc);
if(!cn){return;
}var ce=this.__cP;
var content=this.__cQ;
var ck=cn.size||this.__da;
var co=gK;
if(cn.position){ce.setStyle(eN,ca+co);
ce.setStyle(eM,top+co);
}if(cn.size){ce.setStyle(gs,cb+co);
ce.setStyle(gM,cc+co);
}
if(ck||cn.local||cn.margin){var cd=this.getInsets();
var innerWidth=cb-cd.left-cd.right;
var innerHeight=cc-cd.top-cd.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}
if(this.__da){content.setStyle(eN,cd.left+co);
content.setStyle(eM,cd.top+co);
}
if(ck){content.setStyle(gs,innerWidth+co);
content.setStyle(gM,innerHeight+co);
}
if(cn.size){var cm=this.__cV;

if(cm){cm.setStyles({width:cb+gK,height:cc+gK});
}}
if(cn.size||this.__da){var ch=qx.theme.manager.Decoration.getInstance();
var cp=this.getDecorator();

if(cp){var ci=this.__cT;
var cj=ch.resolve(cp);
cj.resize(ci.getDomElement(),cb,cc);
}}
if(cn.size){var cl=this.getShadow();

if(cl){var ci=this.__cU;
var cj=ch.resolve(cl);
var cd=cj.getInsets();
var cg=cb+cd.left+cd.right;
var cf=cc+cd.top+cd.bottom;
cj.resize(ci.getDomElement(),cg,cf);
}}
if(ck||cn.local||cn.margin){if(this.__cY&&this.hasLayoutChildren()){this.__cY.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cn.position&&this.hasListener(gu)){this.fireDataEvent(gu,this.getBounds());
}
if(cn.size&&this.hasListener(gA)){this.fireDataEvent(gA,this.getBounds());
}delete this.__da;
},__db:null,clearSeparators:function(){var eC=this.__db;

if(!eC){return;
}var eD=qx.ui.core.Widget.__cR;
var content=this.__cQ;
var eB,eA;

for(var i=0,l=eC.length;i<l;i++){eA=eC[i];
eB=eA.$$separator;
if(!eD[eB]){eD[eB]=[eA];
}else{eD[eB].push(eA);
}content.remove(eA);
}eC.length=0;
},renderSeparator:function(cC,cD){var cK=qx.ui.core.Widget.__cR;
var cI=qx.theme.manager.Decoration.getInstance();

if(typeof cC==gB){var cJ=cC.toHashCode();
var cF=cC;
}else{var cJ=cC;
var cF=cI.resolve(cC);
}var cG=cK[cC];

if(cG&&cG.length>0){var cH=cG.pop();
}else{var cH=this.__dh(cF);
}this.__cQ.add(cH);
cF.resize(cH.getDomElement(),cD.width,cD.height);
var cE=cH.getDomElement().style;
cE.left=cD.left+gK;
cE.top=cD.top+gK;
if(!this.__db){this.__db=[cH];
}else{this.__db.push(cH);
}cH.$$separator=cJ;
},_computeSizeHint:function(){var H=this.getWidth();
var G=this.getMinWidth();
var C=this.getMaxWidth();
var F=this.getHeight();
var D=this.getMinHeight();
var E=this.getMaxHeight();
var I=this._getContentHint();
var B=this.getInsets();
var K=B.left+B.right;
var J=B.top+B.bottom;

if(H==null){H=I.width+K;
}
if(F==null){F=I.height+J;
}
if(G==null){G=K;

if(I.minWidth!=null){G+=I.minWidth;
}}
if(D==null){D=J;

if(I.minHeight!=null){D+=I.minHeight;
}}
if(C==null){if(I.maxWidth==null){C=Infinity;
}else{C=I.maxWidth+K;
}}
if(E==null){if(I.maxHeight==null){E=Infinity;
}else{E=I.maxHeight+J;
}}return {width:H,minWidth:G,maxWidth:C,height:F,minHeight:D,maxHeight:E};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__cY){this.__cY.invalidateLayoutCache();
}},_getContentHint:function(){var dp=this.__cY;

if(dp){if(this.hasLayoutChildren()){var dn;
var dq=dp.getSizeHint();
{};
return dq;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(p){var t=this.getInsets();
var w=t.left+t.right;
var v=t.top+t.bottom;
var u=p-w;
var r=this._getLayout();

if(r&&r.hasHeightForWidth()){var q=r.getHeightForWidth(p);
}else{q=this._getContentHeightForWidth(u);
}var s=q+v;
return s;
},_getContentHeightForWidth:function(dK){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var d=this.getPaddingRight();
var f=this.getPaddingBottom();
var m=this.getPaddingLeft();
var k=this.getDecorator();

if(k){var j=qx.theme.manager.Decoration.getInstance();
var h=j.resolve(k);
var g=h.getInsets();
{};
top+=g.top;
d+=g.right;
f+=g.bottom;
m+=g.left;
}return {"top":top,"right":d,"bottom":f,"left":m};
},getInnerSize:function(){var dI=this.getBounds();

if(!dI){return null;
}var dH=this.getInsets();
return {width:dI.width-dH.left-dH.right,height:dI.height-dH.top-dH.bottom};
},show:function(){this.setVisibility(gG);
},hide:function(){this.setVisibility(fX);
},exclude:function(){this.setVisibility(gC);
},isVisible:function(){return this.getVisibility()===gG;
},isHidden:function(){return this.getVisibility()!==gG;
},isExcluded:function(){return this.getVisibility()===gC;
},isSeeable:function(){var M=this.getContainerElement().getDomElement();

if(M){return M.offsetWidth>0;
}var L=this;

do{if(!L.isVisible()){return false;
}
if(L.isRootWidget()){return true;
}L=L.getLayoutParent();
}while(L);
return false;
},_createContainerElement:function(){var df=new qx.html.Element(gT);
{};
df.setStyle(gy,fT);
df.setStyle(fY,0);
df.setAttribute(gr,this.toHashCode());
{};
return df;
},__dc:function(){var be=this._createContentElement();
{};
be.setStyle(gy,fT);
be.setStyle(fY,10);
return be;
},_createContentElement:function(){var bO=new qx.html.Element(gT);
bO.setStyle(fF,fX);
bO.setStyle(fj,fX);
return bO;
},getContainerElement:function(){return this.__cP;
},getContentElement:function(){return this.__cQ;
},getDecoratorElement:function(){return this.__cT;
},__dd:null,getLayoutChildren:function(){var ec=this.__dd;

if(!ec){return this.__de;
}var ed;

for(var i=0,l=ec.length;i<l;i++){var eb=ec[i];

if(eb.hasUserBounds()||eb.isExcluded()){if(ed==null){ed=ec.concat();
}qx.lang.Array.remove(ed,eb);
}}return ed||ec;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var cy=this.__cY;

if(cy){cy.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var b=this.__dd;

if(!b){return false;
}var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(!c.hasUserBounds()&&!c.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__de:[],_getChildren:function(){return this.__dd||this.__de;
},_indexOf:function(dY){var ea=this.__dd;

if(!ea){return -1;
}return ea.indexOf(dY);
},_hasChildren:function(){var cA=this.__dd;
return cA!=null&&(!!cA[0]);
},addChildrenToQueue:function(cq){var cr=this.__dd;

if(!cr){return;
}var cs;

for(var i=0,l=cr.length;i<l;i++){cs=cr[i];
cq[cs.$$hash]=cs;
cs.addChildrenToQueue(cq);
}},_add:function(N,O){if(N.getLayoutParent()==this){qx.lang.Array.remove(this.__dd,N);
}
if(this.__dd){this.__dd.push(N);
}else{this.__dd=[N];
}this.__df(N,O);
},_addAt:function(dN,dO,dP){if(!this.__dd){this.__dd=[];
}if(dN.getLayoutParent()==this){qx.lang.Array.remove(this.__dd,dN);
}var dQ=this.__dd[dO];

if(dQ===dN){return dN.setLayoutProperties(dP);
}
if(dQ){qx.lang.Array.insertBefore(this.__dd,dN,dQ);
}else{this.__dd.push(dN);
}this.__df(dN,dP);
},_addBefore:function(eo,ep,eq){{};

if(eo==ep){return;
}
if(!this.__dd){this.__dd=[];
}if(eo.getLayoutParent()==this){qx.lang.Array.remove(this.__dd,eo);
}qx.lang.Array.insertBefore(this.__dd,eo,ep);
this.__df(eo,eq);
},_addAfter:function(bp,bq,br){{};

if(bp==bq){return;
}
if(!this.__dd){this.__dd=[];
}if(bp.getLayoutParent()==this){qx.lang.Array.remove(this.__dd,bp);
}qx.lang.Array.insertAfter(this.__dd,bp,bq);
this.__df(bp,br);
},_remove:function(hx){if(!this.__dd){return;
}qx.lang.Array.remove(this.__dd,hx);
this.__dg(hx);
},_removeAt:function(dy){if(!this.__dd){throw new Error("This widget has no children!");
}var dz=this.__dd[dy];
qx.lang.Array.removeAt(this.__dd,dy);
this.__dg(dz);
return dz;
},_removeAll:function(){if(!this.__dd){return;
}var dC=this.__dd.concat();
this.__dd.length=0;

for(var i=dC.length-1;i>=0;i--){this.__dg(dC[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__df:function(ev,ew){{};
var parent=ev.getLayoutParent();

if(parent&&parent!=this){parent._remove(ev);
}ev.setLayoutParent(this);
if(ew){ev.setLayoutProperties(ew);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ev);
}},__dg:function(dX){{};
dX.setLayoutParent(null);
if(this.__cY){this.__cY.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(dX);
}},capture:function(){this.__cP.capture();
},releaseCapture:function(){this.__cP.releaseCapture();
},_applyPadding:function(dL,dM,name){this.__da=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__cV){return;
}var dA=this.__cV=new qx.html.Element;
{};
dA.setStyles({position:fT,top:0,left:0,zIndex:7});
var dB=this.getBounds();

if(dB){this.__cV.setStyles({width:dB.width+gK,height:dB.height+gK});
}if(qx.core.Variant.isSet(gO,gP)){dA.setStyles({backgroundImage:fz+qx.util.ResourceManager.getInstance().toUri(go)+fA,backgroundRepeat:fw});
}this.__cP.add(dA);
},__dh:function(dT){var dU=new qx.html.Element;
dU.setStyles({position:fT,top:0,left:0});
{};
dU.useMarkup(dT.getMarkup());
return dU;
},_applyDecorator:function(bP,bQ){var bY=qx.ui.core.Widget.__cR;
var bV=qx.theme.manager.Decoration.getInstance();
var bR=this.__cP;
var bT=this.__cT;
if(!this.__cV){this._createProtectorElement();
}var bW;

if(bQ){if(typeof bQ===gB){bW=bQ.toHashCode();
}else{bW=bQ;
bQ=bV.resolve(bQ);
}}var bX;

if(bP){if(typeof bP===gB){bX=bP.toHashCode();
{};
}else{bX=bP;
bP=bV.resolve(bP);
}}if(bQ){if(!bY[bW]){bY[bW]=[];
}bR.remove(bT);
bY[bW].push(bT);
}if(bP){if(bY[bX]&&bY[bX].length>0){bT=bY[bX].pop();
}else{bT=this.__dh(bP);
bT.setStyle(fY,5);
}var bS=this.getBackgroundColor();
bP.tint(bT.getDomElement(),bS);
bR.add(bT);
this.__cT=bT;
}else{delete this.__cT;
this._applyBackgroundColor(this.getBackgroundColor());
}if(bP&&!bQ&&bS){this.getContainerElement().setStyle(fS,null);
}if(qx.ui.decoration.Util.insetsModified(bQ,bP)){this.__da=true;
qx.ui.core.queue.Layout.add(this);
}else if(bP){var bU=this.getBounds();

if(bU){bV.resolve(bP).resize(bT.getDomElement(),bU.width,bU.height);
this.__cV.setStyles({width:bU.width+gK,height:bU.height+gK});
}}},_applyShadow:function(hg,hh){var hr=qx.ui.core.Widget.__cS;
var ho=qx.theme.manager.Decoration.getInstance();
var hj=this.__cP;
var hp;

if(hh){if(typeof hh===gB){hp=hh.toHashCode();
}else{hp=hh;
hh=ho.resolve(hh);
}}var hq;

if(hg){if(typeof hg===gB){hq=hg.toHashCode();
}else{hq=hg;
hg=ho.resolve(hg);
}}if(hh){if(!hr[hp]){hr[hp]=[];
}hj.remove(this.__cU);
hr[hp].push(this.__cU);
}if(hg){var hl;

if(hr[hq]&&hr[hq].length>0){hl=hr[hq].pop();
}else{hl=this.__dh(hg);
}hj.add(hl);
this.__cU=hl;
var hn=hg.getInsets();
hl.setStyles({left:(-hn.left)+gK,top:(-hn.top)+gK});
var hm=this.getBounds();

if(hm){var hk=hm.width+hn.left+hn.right;
var hi=hm.height+hn.top+hn.bottom;
hg.resize(hl.getDomElement(),hk,hi);
}hg.tint(hl.getDomElement(),null);
}else{delete this.__cU;
}},_applyToolTipText:function(cQ,cR){if(qx.core.Variant.isSet(gw,gE)){if(this.__cX){return;
}var cS=qx.locale.Manager.getInstance();
this.__cX=cS.addListener(gq,function(){if(cQ&&cQ.translate){this.setToolTipText(cQ.translate());
}},this);
}},_applyTextColor:function(ht,hu){},_applyZIndex:function(hF,hG){this.__cP.setStyle(fY,hF==null?0:hF);
},_applyVisibility:function(dd,de){if(dd===gG){this.__cP.show();
}else{this.__cP.hide();
}var parent=this.$$parent;

if(parent&&(de==null||dd==null||de===gC||dd===gC)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(ee,ef){this.__cP.setStyle(eJ,ee==1?null:ee);
if(qx.core.Variant.isSet(gO,gP)){if(!qx.Class.isSubClassOf(this.__cQ.constructor,qx.html.Image)){var eg=(ee==1||ee==null)?null:0.99;
this.__cQ.setStyle(eJ,eg);
}}},_applyCursor:function(z,A){if(z==null&&!this.isSelectable()){z=eK;
}this.__cP.setStyle(fH,z,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(bG,bH){var bN=this.getDecorator();
var bK=this.getBackgroundColor();
var bJ=this.__cP;

if(bN){var bL=this.__cT;

if(bL){var bM=qx.theme.manager.Decoration.getInstance().resolve(bN);
bM.tint(this.__cT.getDomElement(),bK);
}bJ.setStyle(fS,null);
}else{var bI=qx.theme.manager.Color.getInstance().resolve(bK);
bJ.setStyle(fS,bI);
}},_applyFont:function(bt,bu){},__di:null,$$stateChanges:null,_forwardStates:null,hasState:function(ct){var cu=this.__di;
return cu&&cu[ct];
},addState:function(eE){var eF=this.__di;

if(!eF){eF=this.__di={};
}
if(eF[eE]){return;
}this.__di[eE]=true;
if(eE===gQ){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var eI=this.__dl;

if(forward&&forward[eE]&&eI){var eG;

for(var eH in eI){eG=eI[eH];

if(eG instanceof qx.ui.core.Widget){eI[eH].addState(eE);
}}}},removeState:function(dt){var du=this.__di;

if(!du||!du[dt]){return;
}delete this.__di[dt];
if(dt===gQ){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var dx=this.__dl;

if(forward&&forward[dt]&&dx){for(var dw in dx){var dv=dx[dw];

if(dv instanceof qx.ui.core.Widget){dv.removeState(dt);
}}}},replaceState:function(by,bz){var bA=this.__di;

if(!bA){bA=this.__di={};
}
if(!bA[bz]){bA[bz]=true;
}
if(bA[by]){delete bA[by];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bD=this.__dl;

if(forward&&forward[bz]&&bD){for(var bC in bD){var bB=bD[bC];

if(bB instanceof qx.ui.core.Widget){bB.replaceState(by,bz);
}}}},__dj:null,__dk:null,syncAppearance:function(){var X=this.__di;
var W=this.__dj;
var Y=qx.theme.manager.Appearance.getInstance();
var U=qx.core.Property.$$method.setThemed;
var bd=qx.core.Property.$$method.resetThemed;
if(this.__dk){delete this.__dk;
if(W){var T=Y.styleFrom(W,X,null,this.getAppearance());
if(T){W=null;
}}}if(!W){var V=this;
var bc=[];

do{bc.push(V.$$subcontrol||V.getAppearance());
}while(V=V.$$subparent);
W=this.__dj=bc.reverse().join(gg).replace(/#[0-9]+/g,gf);
}var ba=Y.styleFrom(W,X,null,this.getAppearance());

if(ba){var bb;
var bb;

if(T){for(var bb in T){if(ba[bb]===undefined){this[bd[bb]]();
}}}{};
{};

for(var bb in ba){ba[bb]===undefined?this[bd[bb]]():this[U[bb]](ba[bb]);
}}else if(T){for(var bb in T){this[bd[bb]]();
}}this.fireDataEvent(fu,this.__di);
},_applyAppearance:function(x,y){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__cW){qx.ui.core.queue.Appearance.add(this);
this.__cW=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__dk=true;
qx.ui.core.queue.Appearance.add(this);
var hE=this.__dl;

if(hE){var hC;

for(var hD in hE){hC=hE[hD];

if(hC instanceof qx.ui.core.Widget){hC.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var bs=this;

while(bs.getAnonymous()){bs=bs.getLayoutParent();

if(!bs){return null;
}}return bs;
},getFocusTarget:function(){var dJ=this;

if(!dJ.getEnabled()){return null;
}
while(dJ.getAnonymous()||!dJ.getFocusable()){dJ=dJ.getLayoutParent();

if(!dJ||!dJ.getEnabled()){return null;
}}return dJ;
},getFocusElement:function(){return this.__cP;
},isTabable:function(){return this.getContainerElement().getDomElement()&&this.isFocusable();
},_applyFocusable:function(cT,cU){var cV=this.getFocusElement();
if(cT){var cW=this.getTabIndex();

if(cW==null){cW=1;
}cV.setAttribute(fV,cW);
if(qx.core.Variant.isSet(gO,gP)){cV.setAttribute(eT,fL);
}else{cV.setStyle(fD,fC);
}}else{if(cV.isNativelyFocusable()){cV.setAttribute(fV,-1);
}else if(cU){cV.setAttribute(fV,null);
}}},_applyKeepFocus:function(R){var S=this.getFocusElement();
S.setAttribute(gn,R?gE:null);
},_applyKeepActive:function(ey){var ez=this.getContainerElement();
ez.setAttribute(gh,ey?gE:null);
},_applyTabIndex:function(eu){if(eu==null){eu=1;
}else if(eu<1||eu>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&eu!=null){this.getFocusElement().setAttribute(fV,eu);
}},_applySelectable:function(cz){this._applyCursor(this.getCursor());
this.__cP.setSelectable(cz);
this.__cQ.setSelectable(cz);
},_applyEnabled:function(dh,di){if(dh===false){this.addState(gU);
this.removeState(gQ);
if(this.isFocusable()){this.removeState(gR);
this._applyFocusable(false,true);
}}else{this.removeState(gU);
if(this.isFocusable()){this._applyFocusable(true,false);
}}},_applyNativeContextMenu:function(bg,bh,name){},_applyContextMenu:function(dR,dS){if(dS){dS.removeState(fU);

if(dS.getOpener()==this){dS.resetOpener();
}
if(!dR){this.removeListener(fU,this._onContextMenuOpen);
dS.removeListener(gS,this._onBeforeContextMenuOpen,this);
}}
if(dR){dR.setOpener(this);
dR.addState(fU);

if(!dS){this.addListener(fU,this._onContextMenuOpen);
dR.addListener(gS,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){var hs=this.getContextMenu();
hs.placeToMouse(e);
hs.show();
e.preventDefault();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==gG&&this.hasListener(eP)){this.fireDataEvent(eP,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(n,o){qx.ui.core.DragDropCursor.getInstance();
if(n){this.addListener(gt,this._onDragStart);
this.addListener(gL,this._onDrag);
this.addListener(gx,this._onDragEnd);
this.addListener(gv,this._onDragChange);
}else{this.removeListener(gt,this._onDragStart);
this.removeListener(gL,this._onDrag);
this.removeListener(gx,this._onDragEnd);
this.removeListener(gv,this._onDragChange);
}this.__cP.setAttribute(fx,n?gE:null);
},_applyDroppable:function(hA,hB){this.__cP.setAttribute(fl,hA?gE:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(eK);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var da=qx.ui.core.DragDropCursor.getInstance();
var db=e.getCurrentAction();
db?da.setAction(db):da.resetAction();
},visualizeFocus:function(){this.addState(gR);
},visualizeBlur:function(){this.removeState(gR);
},scrollChildIntoView:function(dj,dk,dl,dm){this.scrollChildIntoViewX(dj,dk,dm);
this.scrollChildIntoViewY(dj,dl,dm);
},scrollChildIntoViewX:function(bk,bl,bm){this.__cQ.scrollChildIntoViewX(bk.getContainerElement(),bl,bm);
},scrollChildIntoViewY:function(dD,dE,dF){this.__cQ.scrollChildIntoViewY(dD.getContainerElement(),dE,dF);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.__cP.activate();
},deactivate:function(){this.__cP.deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},_hasChildControl:function(bf){qx.log.Logger.deprecatedMethodWarning(arguments.callee,fI);
return this.hasChildControl(bf);
},hasChildControl:function(dg){if(!this.__dl){return false;
}return !!this.__dl[dg];
},__dl:null,_getCreatedChildControls:function(){return this.__dl;
},_getChildControl:function(hy,hz){qx.log.Logger.deprecatedMethodWarning(arguments.callee,eQ);
return this.getChildControl(hy,hz);
},getChildControl:function(bv,bw){if(!this.__dl){if(bw){return null;
}this.__dl={};
}var bx=this.__dl[bv];

if(bx){return bx;
}
if(bw===true){return null;
}return this._createChildControl(bv);
},_showChildControl:function(dr){var ds=this.getChildControl(dr);
ds.show();
return ds;
},_excludeChildControl:function(bE){var bF=this.getChildControl(bE,true);

if(bF){bF.exclude();
}},_isChildControlVisible:function(dV){var dW=this.getChildControl(dV,true);

if(dW){return dW.isVisible();
}return false;
},_createChildControl:function(cL){if(!this.__dl){this.__dl={};
}else if(this.__dl[cL]){throw new Error("Child control '"+cL+"' already created!");
}var cP=cL.indexOf(fa);

if(cP==-1){var cM=this._createChildControlImpl(cL);
}else{var cM=this._createChildControlImpl(cL.substring(0,cP));
}
if(!cM){throw new Error("Unsupported control: "+cL);
}cM.$$subcontrol=cL;
cM.$$subparent=this;
var cN=this.__di;
var forward=this._forwardStates;

if(cN&&forward&&cM instanceof qx.ui.core.Widget){for(var cO in cN){if(forward[cO]){cM.addState(cO);
}}}this.fireDataEvent(hc,cM);
return this.__dl[cL]=cM;
},_createChildControlImpl:function(a){return null;
},_disposeChildControls:function(){var ek=this.__dl;

if(!ek){return;
}var ei=qx.ui.core.Widget;

for(var ej in ek){var eh=ek[ej];

if(!ei.contains(this,eh)){eh.destroy();
}else{eh.dispose();
}}delete this.__dl;
},_findTopControl:function(){var dG=this;

while(dG){if(!dG.$$subparent){return dG;
}dG=dG.$$subparent;
}return null;
},getContainerLocation:function(cX){var cY=this.getContainerElement().getDomElement();
return cY?qx.bom.element.Location.get(cY,cX):null;
},getContentLocation:function(hv){var hw=this.getContentElement().getDomElement();
return hw?qx.bom.element.Location.get(hw,hv):null;
},setDomLeft:function(cw){var cx=this.getContainerElement().getDomElement();

if(cx){cx.style.left=cw+gK;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(bi){var bj=this.getContainerElement().getDomElement();

if(bj){bj.style.top=bi+gK;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(em,top){var en=this.getContainerElement().getDomElement();

if(en){en.style.left=em+gK;
en.style.top=top+gK;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var P=arguments.callee.base.call(this);

if(this.getChildren){var Q=this.getChildren();

for(var i=0,l=Q.length;i<l;i++){P.add(Q[i].clone());
}}return P;
},serialize:function(){var es=arguments.callee.base.call(this);

if(this.getChildren){var et=this.getChildren();

if(et.length>0){es.children=[];

for(var i=0,l=et.length;i<l;i++){es.children.push(et[i].serialize());
}}}
if(this.getLayout){var er=this.getLayout();

if(er){es.layout=er.serialize();
}}return es;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(gw,gE)){if(this.__cX){qx.locale.Manager.getInstance().removeListenerById(this.__cX);
}}this.__cP.setAttribute(gr,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}this._disposeArray(fr);
this._disposeArray(hd);
this._disposeFields(gi,fb);
this._disposeObjects(fK,gY,fi,eU,fp,fP);
}});
})();
(function(){var e="qx.event.type.Data",d="qx.ui.container.Composite",c="addChildWidget",b="removeChildWidget";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this._setLayout(a);
}},events:{addChildWidget:e,removeChildWidget:e},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(c,qx.event.type.Data,[f]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(b,qx.event.type.Data,[g]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var z="interval",y="Integer",x="resize",w="Boolean",v="mouse",u="disappear",t="bottom-left",s="widget",r="offsetLeft",q="offsetRight",j="right-top",p="top-right",m="top-left",h="bottom-right",g="right-bottom",l="offsetBottom",k="qx.ui.core.MPlacement",n="left-top",f="left-bottom",o="shorthand",i="offsetTop";
qx.Mixin.define(k,{properties:{position:{check:[m,p,t,h,n,f,j,g],init:t,themeable:true},placeMethod:{check:[s,v],init:v,themeable:true},domMove:{check:w,init:false},smart:{check:w,init:true,themeable:true},offsetLeft:{check:y,init:0,themeable:true},offsetTop:{check:y,init:0,themeable:true},offsetRight:{check:y,init:0,themeable:true},offsetBottom:{check:y,init:0,themeable:true},offset:{group:[i,q,l,r],mode:o,themeable:true}},members:{__gx:null,__gy:null,getLayoutLocation:function(N){var Q,P,R,top;
P=N.getBounds();
R=P.left;
top=P.top;
var S=P;
N=N.getLayoutParent();

while(N&&!N.isRootWidget()){P=N.getBounds();
R+=P.left;
top+=P.top;
Q=N.getInsets();
R+=Q.left;
top+=Q.top;
N=N.getLayoutParent();
}if(N.isRootWidget()){var O=N.getContainerLocation();

if(O){R+=O.left;
top+=O.top;
}}return {left:R,top:top,right:R+S.width,bottom:top+S.height};
},moveTo:function(A,top){if(this.getDomMove()){this.setDomPosition(A,top);
}else{this.setLayoutProperties({left:A,top:top});
}},placeToWidget:function(I,J){if(J){this.__gy=qx.lang.Function.bind(this.placeToWidget,this,I,false);
qx.event.Idle.getInstance().addListener(z,this.__gy);
this.addListener(u,function(){if(this.__gy){qx.event.Idle.getInstance().removeListener(z,this.__gy);
this.__gy=null;
}},this);
}var K=I.getContainerLocation()||this.getLayoutLocation(I);
this.__gz(K);
},placeToMouse:function(event){var M=event.getDocumentLeft();
var top=event.getDocumentTop();
var L={left:M,top:top,right:M,bottom:top};
this.__gz(L);
},placeToElement:function(a,b){var location=qx.bom.element.Location.get(a);
var c={left:location.left,top:location.top,right:location.left+a.offsetWidth,bottom:location.top+a.offsetHeight};
if(b){this.__gy=qx.lang.Function.bind(this.placeToElement,this,a,false);
qx.event.Idle.getInstance().addListener(z,this.__gy);
this.addListener(u,function(){if(this.__gy){qx.event.Idle.getInstance().removeListener(z,this.__gy);
this.__gy=null;
}},this);
}this.__gz(c);
},placeToPoint:function(d){var e={left:d.left,top:d.top,right:d.left,bottom:d.top};
this.__gz(e);
},__gz:function(B){var H=this.getBounds();

if(H==null){if(!this.__gx){this.addListener(x,this.__gz);
}this.__gx=B;
return;
}else if(this.__gx){B=this.__gx;
delete this.__gx;
this.removeListener(x,this.__gz);
}var C=this.getLayoutParent().getBounds();
var F=this.getPosition();
var G=this.getSmart();
var D={left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
var E=qx.util.PlaceUtil.compute(H,C,B,F,G,D);
this.moveTo(E.left,E.top);
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
(function(){var o="atom",n="Integer",m="String",l="_applyRich",k="qx.ui.tooltip.ToolTip",j="_applyIcon",i="tooltip",h="qx.ui.core.Widget",g="Boolean",f="_applyLabel";
qx.Class.define(k,{extend:qx.ui.popup.Popup,construct:function(d,e){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(o);
if(d!=null){this.setLabel(d);
}
if(e!=null){this.setIcon(e);
}},properties:{appearance:{refine:true,init:i},showTimeout:{check:n,init:700,themeable:true},hideTimeout:{check:n,init:4000,themeable:true},label:{check:m,nullable:true,apply:f},icon:{check:m,nullable:true,apply:j,themeable:true},rich:{check:g,init:false,apply:l},opener:{check:h,nullable:true}},members:{_createChildControlImpl:function(p){var q;

switch(p){case o:q=new qx.ui.basic.Atom;
this._add(q);
break;
}return q||arguments.callee.base.call(this,p);
},_applyIcon:function(u,v){var w=this.getChildControl(o);
u==null?w.resetIcon:w.setIcon(u);
},_applyLabel:function(r,s){var t=this.getChildControl(o);
r==null?t.resetLabel():t.setLabel(r);
},_applyRich:function(a,b){var c=this.getChildControl(o);
c.setRich(a);
}}});
})();
(function(){var g="qx.ui.core.queue.Layout",f="layout";
qx.Class.define(g,{statics:{__fT:{},remove:function(s){delete this.__fT[s.$$hash];
},add:function(a){this.__fT[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var o=this.__fW();
for(var i=o.length-1;i>=0;i--){var p=o[i];
if(p.hasValidLayout()){continue;
}if(p.isRootWidget()&&!p.hasUserBounds()){var r=p.getSizeHint();
p.renderLayout(0,0,r.width,r.height);
}else{var q=p.getBounds();
p.renderLayout(q.left,q.top,q.width,q.height);
}}},getNestingLevel:function(b){var c=this.__fV;
var e=0;
var parent=b;
while(true){if(c[parent.$$hash]!=null){e+=c[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
e+=1;
}var d=e;

while(b&&b!==parent){c[b.$$hash]=d--;
b=b.$$parent;
}return e;
},__fU:function(){var n=qx.ui.core.queue.Visibility;
this.__fV={};
var m=[];
var l=this.__fT;
var h,k;

for(var j in l){h=l[j];

if(n.isVisible(h)){k=this.getNestingLevel(h);
if(!m[k]){m[k]={};
}m[k][j]=h;
delete l[j];
}}return m;
},__fW:function(){var w=[];
var y=this.__fU();

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
(function(){var g="qx.event.handler.UserAction",f="__ig",e="__if";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(j){arguments.callee.base.call(this);
this.__if=j;
this.__ig=j.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__if:null,__ig:null,canHandleEvent:function(h,i){},registerEvent:function(a,b,c){},unregisterEvent:function(k,l,m){}},destruct:function(){this._disposeFields(e,f);
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var d="__eS",c="__eT",b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__eS={};
this.__eT=qx.lang.Function.bind(this.__eX,this);
this.__eU=false;
},members:{__eV:null,__eW:null,__eS:null,__eU:null,__eT:null,schedule:function(e){if(this.__eV==null){this.__eV=window.setTimeout(this.__eT,0);
}var f=e.toHashCode();
if(this.__eW&&this.__eW[f]){return;
}this.__eS[f]=e;
this.__eU=true;
},cancel:function(g){var h=g.toHashCode();
if(this.__eW&&this.__eW[h]){this.__eW[h]=null;
return;
}delete this.__eS[h];
if(qx.lang.Object.isEmpty(this.__eS)&&this.__eV!=null){window.clearTimeout(this.__eV);
this.__eV=null;
}},__eX:qx.event.GlobalError.observeMethod(function(){this.__eV=null;
while(this.__eU){this.__eW=qx.lang.Object.clone(this.__eS);
this.__eS={};
this.__eU=false;

for(var j in this.__eW){var i=this.__eW[j];

if(i){this.__eW[j]=null;
i.call();
}}}this.__eW=null;
})},destruct:function(){if(this.__eV!=null){window.clearTimeout(this.__eV);
}this._disposeFields(c,d);
}});
})();
(function(){var d="qx.util.DeferredCall",c="__fR",b="__fS",a="__fQ";
qx.Class.define(d,{extend:qx.core.Object,construct:function(e,f){arguments.callee.base.call(this);
this.__fQ=e;
this.__fR=f||null;
this.__fS=qx.util.DeferredCallManager.getInstance();
},members:{__fQ:null,__fR:null,__fS:null,cancel:function(){this.__fS.cancel(this);
},schedule:function(){this.__fS.schedule(this);
},call:function(){this.__fR?this.__fQ.apply(this.__fR):this.__fQ();
}},destruct:function(g,h){this.cancel();
this._disposeFields(c,a,b);
}});
})();
(function(){var bR="element",bQ="qx.client",bP="div",bO="",bN="mshtml",bM="none",bL="qx.html.Element",bK="Use public 'clearTextSelection' instead!",bJ="|capture|",bI="focus",cu="blur",ct="__cB",cs="deactivate",cr="__cp",cq="userSelect",cp="__ck",co="Use public 'setTextSelection' instead!",cn="__cx",cm="capture",cl="__cz",bY="__cv",ca="releaseCapture",bW="__ct",bX="__cs",bU="qxSelectable",bV="__co",bS="tabIndex",bT="off",cb="Use public 'getTextSelectionLength' instead!",cc="on",cf="activate",ce="normal",ch="webkit",cg="__cy",cj="|bubble|",ci="Use public 'getTextSelection' instead!",cd="__cw",ck="__cu";
qx.Class.define(bL,{extend:qx.core.Object,construct:function(cU){arguments.callee.base.call(this);
this.__cd=cU||bP;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__ce:{},_scheduleFlush:function(cT){qx.html.Element.__cJ.schedule();
},_mshtmlVisibilitySort:qx.core.Variant.select(bQ,{"mshtml":function(a,b){var bc=a.__ck;
var bb=b.__ck;

if(bc.contains(bb)){return 1;
}
if(bb.contains(bc)){return -1;
}return 0;
},"default":null}),flush:function(){var D;
{};
var u=this.__cf();
var t=u.getFocus();

if(t&&this.__cj(t)){u.blur(t);
}var L=u.getActive();

if(L&&this.__cj(L)){qx.bom.Element.deactivate(L);
}var J=this.__ch();

if(J&&this.__cj(J)){qx.bom.Element.releaseCapture(J);
}var E=[];
var G=this._modified;

for(var C in G){D=G[C];
if(D.__cD()){if(D.__ck&&qx.dom.Hierarchy.isRendered(D.__ck)){E.push(D);
}else{{};
D.__cC();
}delete G[C];
}}
for(var i=0,l=E.length;i<l;i++){D=E[i];
{};
D.__cC();
}var A=this._visibility;
if(qx.core.Variant.isSet(bQ,bN)){var F=[];

for(var C in A){F.push(A[C]);
}if(F.length>1){F.sort(this._mshtmlVisibilitySort);
A=this._visibility={};

for(var i=0;i<F.length;i++){D=F[i];
A[D.$$hash]=D;
}}}
for(var C in A){D=A[C];
{};
D.__ck.style.display=D.__cn?bO:bM;
delete A[C];
}var scroll=this._scroll;

for(var C in scroll){D=scroll[C];
var M=D.__ck;

if(M&&M.offsetWidth){var w=true;
if(D.__cq!=null){D.__ck.scrollLeft=D.__cq;
delete D.__cq;
}if(D.__cr!=null){D.__ck.scrollTop=D.__cr;
delete D.__cr;
}var I=D.__co;

if(I!=null){var B=I.element.getDomElement();

if(B&&B.offsetWidth){qx.bom.element.Scroll.intoViewX(B,M,I.align);
delete D.__co;
}else{w=false;
}}var z=D.__cp;

if(z!=null){var B=z.element.getDomElement();

if(B&&B.offsetWidth){qx.bom.element.Scroll.intoViewY(B,M,z.align);
delete D.__cp;
}else{w=false;
}}if(w){delete scroll[C];
}}}var v={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var K=this._actions[i];
var H=K.element.__ck;

if(!H||!v[K.type]&&!K.element.__cD()){continue;
}qx.bom.Element[K.type](H);
}this._actions=[];
for(var C in this.__ce){var s=this.__ce[C];
var M=s.element.__ck;

if(M){qx.bom.Selection.set(M,s.start,s.end);
delete this.__ce[C];
}}qx.event.handler.Appear.refresh();
},__cf:function(){if(!this.__cg){var bA=qx.event.Registration.getManager(window);
this.__cg=bA.getHandler(qx.event.handler.Focus);
}return this.__cg;
},__ch:function(){if(!this.__ci){var dv=qx.event.Registration.getManager(window);
this.__ci=dv.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__ci.getCaptureElement();
},__cj:function(cv){var cw=qx.core.ObjectRegistry.fromHashCode(cv.$$element);
return cw&&!cw.__cD();
}},members:{__cd:null,__ck:null,__cl:false,__cm:true,__cn:true,__co:null,__cp:null,__cq:null,__cr:null,__cs:null,__ct:null,__cu:null,__cv:null,__cw:null,__cx:null,__cy:null,__cz:null,__cA:null,__cB:null,_scheduleChildrenUpdate:function(){if(this.__cA){return;
}this.__cA=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
},_createDomElement:function(){return qx.bom.Element.create(this.__cd);
},__cC:function(){{};
var bq=this.__cz;

if(bq){var length=bq.length;
var br;

for(var i=0;i<length;i++){br=bq[i];

if(br.__cn&&br.__cm&&!br.__ck){br.__cC();
}}}
if(!this.__ck){this.__ck=this._createDomElement();
this.__ck.$$element=this.$$hash;
this._copyData(false);

if(bq&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cA){this._syncChildren();
}}delete this.__cA;
},_insertChildren:function(){var dJ=this.__cz;
var length=dJ.length;
var dL;

if(length>2){var dK=document.createDocumentFragment();

for(var i=0;i<length;i++){dL=dJ[i];

if(dL.__ck&&dL.__cm){dK.appendChild(dL.__ck);
}}this.__ck.appendChild(dK);
}else{var dK=this.__ck;

for(var i=0;i<length;i++){dL=dJ[i];

if(dL.__ck&&dL.__cm){dK.appendChild(dL.__ck);
}}}},_syncChildren:function(){var dn;
var dt=qx.core.ObjectRegistry;
var dj=this.__cz;
var dr=dj.length;
var dk;
var dp;
var dm=this.__ck;
var dq=dm.childNodes;
var dl=0;
var ds;
{};
for(var i=dq.length-1;i>=0;i--){ds=dq[i];
dp=dt.fromHashCode(ds.$$element);

if(!dp||!dp.__cm||dp.__cB!==this){dm.removeChild(ds);
{};
}}for(var i=0;i<dr;i++){dk=dj[i];
if(dk.__cm){dp=dk.__ck;
ds=dq[dl];

if(!dp){continue;
}if(dp!=ds){if(ds){dm.insertBefore(dp,ds);
}else{dm.appendChild(dp);
}{};
}dl++;
}}{};
},_copyData:function(bB){var bF=this.__ck;
var bE=this.__cw;

if(bE){var bC=qx.bom.element.Attribute;

for(var bG in bE){bC.set(bF,bG,bE[bG]);
}}var bE=this.__cv;

if(bE){var bD=qx.bom.element.Style;

if(bB){for(var bG in bE){bD.set(bF,bG,bE[bG]);
}}else{bD.setCss(bF,bD.compile(bE));
}}var bE=this.__cx;

if(bE){for(var bG in bE){this._applyProperty(bG,bE[bG]);
}}var bE=this.__cy;

if(bE){qx.event.Registration.getManager(bF).importListeners(bF,bE);
delete this.__cy;
}},_syncData:function(){var cA=this.__ck;
var cz=qx.bom.element.Attribute;
var cx=qx.bom.element.Style;
var cy=this.__ct;

if(cy){var cD=this.__cw;

if(cD){var cB;

for(var cC in cy){cB=cD[cC];

if(cB!==undefined){cz.set(cA,cC,cB);
}else{cz.reset(cA,cC);
}}}this.__ct=null;
}var cy=this.__cs;

if(cy){var cD=this.__cv;

if(cD){var cB;

for(var cC in cy){cB=cD[cC];

if(cB!==undefined){cx.set(cA,cC,cB);
}else{cx.reset(cA,cC);
}}}this.__cs=null;
}var cy=this.__cu;

if(cy){var cD=this.__cx;

if(cD){var cB;

for(var cC in cy){this._applyProperty(cC,cD[cC]);
}}this.__cu=null;
}},__cD:function(){var cL=this;
while(cL){if(cL.__cl){return true;
}
if(!cL.__cm||!cL.__cn){return false;
}cL=cL.__cB;
}return false;
},__cE:function(da){if(da.__cB===this){throw new Error("Child is already in: "+da);
}
if(da.__cl){throw new Error("Root elements could not be inserted into other ones.");
}if(da.__cB){da.__cB.remove(da);
}da.__cB=this;
if(!this.__cz){this.__cz=[];
}if(this.__ck){this._scheduleChildrenUpdate();
}},__cF:function(ef){if(ef.__cB!==this){throw new Error("Has no child: "+ef);
}if(this.__ck){this._scheduleChildrenUpdate();
}delete ef.__cB;
},__cG:function(be){if(be.__cB!==this){throw new Error("Has no child: "+be);
}if(this.__ck){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cz||null;
},getChild:function(ed){var ee=this.__cz;
return ee&&ee[ed]||null;
},hasChildren:function(){var dz=this.__cz;
return dz&&dz[0]!==undefined;
},indexOf:function(dF){var dG=this.__cz;
return dG?dG.indexOf(dF):-1;
},hasChild:function(n){var o=this.__cz;
return o&&o.indexOf(n)!==-1;
},add:function(cM){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cE(arguments[i]);
}this.__cz.push.apply(this.__cz,arguments);
}else{this.__cE(cM);
this.__cz.push(cM);
}return this;
},addAt:function(dU,dV){this.__cE(dU);
qx.lang.Array.insertAt(this.__cz,dU,dV);
return this;
},remove:function(O){var P=this.__cz;

if(!P){return;
}
if(arguments[1]){var Q;

for(var i=0,l=arguments.length;i<l;i++){Q=arguments[i];
this.__cF(Q);
qx.lang.Array.remove(P,Q);
}}else{this.__cF(O);
qx.lang.Array.remove(P,O);
}return this;
},removeAt:function(dC){var dD=this.__cz;

if(!dD){throw new Error("Has no children!");
}var dE=dD[dC];

if(!dE){throw new Error("Has no child at this position!");
}this.__cF(dE);
qx.lang.Array.removeAt(this.__cz,dC);
return this;
},removeAll:function(){var dA=this.__cz;

if(dA){for(var i=0,l=dA.length;i<l;i++){this.__cF(dA[i]);
}dA.length=0;
}return this;
},getParent:function(){return this.__cB||null;
},insertInto:function(parent,dT){parent.__cE(this);

if(dT==null){parent.__cz.push(this);
}else{qx.lang.Array.insertAt(this.__cz,this,dT);
}return this;
},insertBefore:function(dM){var parent=dM.__cB;
parent.__cE(this);
qx.lang.Array.insertBefore(parent.__cz,this,dM);
return this;
},insertAfter:function(d){var parent=d.__cB;
parent.__cE(this);
qx.lang.Array.insertAfter(parent.__cz,this,d);
return this;
},moveTo:function(cN){var parent=this.__cB;
parent.__cG(this);
var cO=parent.__cz.indexOf(this);

if(cO===cN){throw new Error("Could not move to same index!");
}else if(cO<cN){cN--;
}qx.lang.Array.removeAt(parent.__cz,cO);
qx.lang.Array.insertAt(parent.__cz,this,cN);
return this;
},moveBefore:function(du){var parent=this.__cB;
return this.moveTo(parent.__cz.indexOf(du));
},moveAfter:function(R){var parent=this.__cB;
return this.moveTo(parent.__cz.indexOf(R)+1);
},free:function(){var parent=this.__cB;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__cz){return;
}parent.__cF(this);
qx.lang.Array.remove(parent.__cz,this);
return this;
},getDomElement:function(){return this.__ck||null;
},getNodeName:function(){return this.__cd;
},setNodeName:function(name){this.__cd=name;
},setRoot:function(eb){this.__cl=eb;
},useMarkup:function(cR){if(this.__ck){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bQ,bN)){var cS=document.createElement(bP);
}else{var cS=qx.html.Element.__cH;

if(!cS){cS=qx.html.Element.__cH=document.createElement(bP);
}}cS.innerHTML=cR;
this.__ck=cS.firstChild;
this.__ck.$$element=this.$$hash;
this._copyData(true);
return this.__ck;
},useElement:function(bH){if(this.__ck){throw new Error("Could not overwrite existing element!");
}this.__ck=bH;
this.__ck.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ba=this.getAttribute(bS);

if(ba>=1){return true;
}var Y=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ba>=0&&Y[this.__cd]){return true;
}return false;
},setSelectable:function(ec){this.setAttribute(bU,ec?cc:bT);
if(qx.core.Variant.isSet(bQ,ch)){this.setStyle(cq,ec?ce:bM);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cd];
},include:function(){if(this.__cm){return;
}delete this.__cm;

if(this.__cB){this.__cB._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__cm){return;
}this.__cm=false;

if(this.__cB){this.__cB._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__cm===true;
},show:function(){if(this.__cn){return;
}
if(this.__ck){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}if(this.__cB){this.__cB._scheduleChildrenUpdate();
}delete this.__cn;
},hide:function(){if(!this.__cn){return;
}
if(this.__ck){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}this.__cn=false;
},isVisible:function(){return this.__cn===true;
},scrollChildIntoViewX:function(cG,cH,cI){var cJ=this.__ck;
var cK=cG.getDomElement();

if(cI!==false&&cJ&&cJ.offsetWidth&&cK&&cK.offsetWidth){qx.bom.element.Scroll.intoViewX(cK,cJ,cH);
}else{this.__co={element:cG,align:cH};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}delete this.__cq;
},scrollChildIntoViewY:function(S,T,U){var V=this.__ck;
var W=S.getDomElement();

if(U!==false&&V&&V.offsetWidth&&W&&W.offsetWidth){qx.bom.element.Scroll.intoViewY(W,V,T);
}else{this.__cp={element:S,align:T};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}delete this.__cr;
},scrollToX:function(x,by){var bz=this.__ck;

if(by!==true&&bz&&bz.offsetWidth){bz.scrollLeft=x;
}else{this.__cq=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}delete this.__co;
},getScrollX:function(){var X=this.__ck;

if(X){return X.scrollLeft;
}return this.__cq||0;
},scrollToY:function(y,bj){var bk=this.__ck;

if(bj!==true&&bk&&bk.offsetWidth){bk.scrollTop=y;
}else{this.__cr=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}delete this.__cp;
},getScrollY:function(){var bd=this.__ck;

if(bd){return bd.scrollTop;
}return this.__cr||0;
},getSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,ci);
return this.getTextSelection();
},getSelectionLength:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cb);
return this.getTextSelectionLength();
},setSelection:function(dh,di){qx.log.Logger.deprecatedMethodWarning(arguments.callee,co);
this.setTextSelection(dh,di);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bK);
this.clearTextSelection();
},getTextSelection:function(){var c=this.__ck;

if(c){return qx.bom.Selection.get(c);
}return null;
},getTextSelectionLength:function(){var dB=this.__ck;

if(dB){return qx.bom.Selection.getLength(dB);
}return null;
},setTextSelection:function(dc,dd){var de=this.__ck;

if(de){qx.bom.Selection.set(de,dc,dd);
return;
}qx.html.Element.__ce[this.toHashCode()]={element:this,start:dc,end:dd};
qx.html.Element._scheduleFlush(bR);
},clearTextSelection:function(){var eg=this.__ck;

if(eg){qx.bom.Selection.clear(eg);
}delete qx.html.Element.__ce[this.toHashCode()];
},__cI:function(df){var dg=qx.html.Element._actions;
dg.push({type:df,element:this});
qx.html.Element._scheduleFlush(bR);
},focus:function(){this.__cI(bI);
},blur:function(){this.__cI(cu);
},activate:function(){this.__cI(cf);
},deactivate:function(){this.__cI(cs);
},capture:function(){this.__cI(cm);
},releaseCapture:function(){this.__cI(ca);
},setStyle:function(bf,bg,bh){if(!this.__cv){this.__cv={};
}
if(this.__cv[bf]==bg){return;
}
if(bg==null){delete this.__cv[bf];
}else{this.__cv[bf]=bg;
}if(this.__ck){if(bh){qx.bom.element.Style.set(this.__ck,bf,bg);
return this;
}if(!this.__cs){this.__cs={};
}this.__cs[bf]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}return this;
},setStyles:function(bn,bo){for(var bp in bn){this.setStyle(bp,bn[bp],bo);
}return this;
},removeStyle:function(cP,cQ){this.setStyle(cP,null,cQ);
},getStyle:function(dW){return this.__cv?this.__cv[dW]:null;
},getAllStyles:function(){return this.__cv||null;
},setAttribute:function(dw,dx,dy){if(!this.__cw){this.__cw={};
}
if(this.__cw[dw]==dx){return;
}
if(dx==null){delete this.__cw[dw];
}else{this.__cw[dw]=dx;
}if(this.__ck){if(dy){qx.bom.element.Attribute.set(this.__ck,dw,dx);
return this;
}if(!this.__ct){this.__ct={};
}this.__ct[dw]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}return this;
},setAttributes:function(p,q){for(var r in p){this.setAttribute(r,p[r],q);
}return this;
},removeAttribute:function(cE,cF){this.setAttribute(cE,null,cF);
},getAttribute:function(N){return this.__cw?this.__cw[N]:null;
},_applyProperty:function(name,cY){},_setProperty:function(cV,cW,cX){if(!this.__cx){this.__cx={};
}
if(this.__cx[cV]==cW){return;
}
if(cW==null){delete this.__cx[cV];
}else{this.__cx[cV]=cW;
}if(this.__ck){if(cX){this._applyProperty(cV,cW);
return this;
}if(!this.__cu){this.__cu={};
}this.__cu[cV]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bR);
}return this;
},_removeProperty:function(dH,dI){this._setProperty(dH,null,dI);
},_getProperty:function(dX){var dY=this.__cx;

if(!dY){return null;
}var ea=dY[dX];
return ea==null?null:ea;
},addListener:function(bs,bt,self,bu){var bv;

if(this.$$disposed){return null;
}{};

if(this.__ck){return qx.event.Registration.addListener(this.__ck,bs,bt,self,bu);
}
if(!this.__cy){this.__cy={};
}
if(bu==null){bu=false;
}var bw=qx.event.Manager.getNextUniqueId();
var bx=bs+(bu?bJ:cj)+bw;
this.__cy[bx]={type:bs,listener:bt,self:self,capture:bu,unique:bw};
return bx;
},removeListener:function(e,f,self,g){var h;

if(this.$$disposed){return null;
}{};

if(this.__ck){qx.event.Registration.removeListener(this.__ck,e,f,self,g);
}else{var k=this.__cy;
var j;

if(g==null){g=false;
}
for(var m in k){j=k[m];
if(j.listener===f&&j.self===self&&j.capture===g&&j.type===e){delete k[m];
break;
}}}return this;
},removeListenerById:function(bm){if(this.$$disposed){return null;
}
if(this.__ck){qx.event.Registration.removeListenerById(this.__ck,bm);
}else{delete this.__cy[bm];
}return this;
},hasListener:function(dN,dO){if(this.$$disposed){return false;
}
if(this.__ck){return qx.event.Registration.hasListener(this.__ck,dN,dO);
}var dQ=this.__cy;
var dP;

if(dO==null){dO=false;
}
for(var dR in dQ){dP=dQ[dR];
if(dP.capture===dO&&dP.type===dN){return true;
}}return false;
}},defer:function(dS){dS.__cJ=new qx.util.DeferredCall(dS.flush,dS);
},destruct:function(){var bi=this.__ck;

if(bi){qx.event.Registration.getManager(bi).removeAllListeners(bi);
bi.$$element=bO;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cB;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cl);
this._disposeFields(cd,bY,cg,cn,bW,bX,ck,cp,ct,bV,cr);
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__iB:false,__iC:{},scheduleFlush:function(e){var self=qx.ui.core.queue.Manager;
self.__iC[e]=true;

if(!self.__iB){self.__iE.schedule();
self.__iB=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__iD){return;
}self.__iD=true;
self.__iE.cancel();
var c=self.__iC;

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
}}qx.ui.core.queue.Manager.__iB=false;

if(c.dispose){delete c.dispose;
qx.ui.core.queue.Dispose.flush();
}self.__iD=false;
}},defer:function(d){d.__iE=new qx.util.DeferredCall(d.flush);
qx.html.Element._scheduleFlush=d.scheduleFlush;
qx.event.Registration.addListener(window,a,d.flush);
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
(function(){var k="textarea",j="input",i="qx.client",h="character",g="qx.bom.Selection",f="#text",e="EndToEnd",d="button",c="body";
qx.Class.define(g,{statics:{getSelectionObject:qx.core.Variant.select(i,{"mshtml":function(v){return v.selection;
},"default":function(U){return qx.dom.Node.getWindow(U).getSelection();
}}),get:qx.core.Variant.select(i,{"mshtml":function(a){var b=qx.bom.Range.get(qx.dom.Node.getDocument(a));
return b.text;
},"default":function(K){if(qx.dom.Node.isElement(K)&&(K.nodeName.toLowerCase()==j||K.nodeName.toLowerCase()==k)){return K.value.substring(K.selectionStart,K.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(K)).toString();
}return null;
}}),getLength:qx.core.Variant.select(i,{"mshtml":function(R){var T=qx.bom.Selection.get(R);
var S=qx.util.StringSplit.split(T,/\r\n/);
return T.length-(S.length-1);
},"opera":function(E){var J,H,F;

if(qx.dom.Node.isElement(E)&&(E.nodeName.toLowerCase()==j||E.nodeName.toLowerCase()==k)){var I=E.selectionStart;
var G=E.selectionEnd;
J=E.value.substring(I,G);
H=G-I;
}else{J=qx.bom.Selection.get(E);
H=J.length;
}F=qx.util.StringSplit.split(J,/\r\n/);
return H-(F.length-1);
},"default":function(w){if(qx.dom.Node.isElement(w)&&(w.nodeName.toLowerCase()==j||w.nodeName.toLowerCase()==k)){return w.selectionEnd-w.selectionStart;
}else{return qx.bom.Selection.get(w).length;
}return null;
}}),set:qx.core.Variant.select(i,{"mshtml":function(L,M,N){var O;
if(qx.dom.Node.isDocument(L)){L=L.body;
}
if(qx.dom.Node.isElement(L)||qx.dom.Node.isText(L)){switch(L.nodeName.toLowerCase()){case j:case k:case d:if(N===undefined){N=L.value.length;
}
if(M>=0&&M<=L.value.length&&N>=0&&N<=L.value.length){O=qx.bom.Range.get(L);
O.collapse(true);
O.moveStart(h,M);
O.moveEnd(h,N-M);
O.select();
return true;
}break;
case f:if(N===undefined){N=L.nodeValue.length;
}
if(M>=0&&M<=L.nodeValue.length&&N>=0&&N<=L.nodeValue.length){O=qx.bom.Range.get(qx.dom.Node.getBodyElement(L));
O.moveToElementText(L.parentNode);
O.collapse(true);
O.moveStart(h,M);
O.moveEnd(h,N-M);
O.select();
return true;
}break;
default:if(N===undefined){N=L.childNodes.length-1;
}if(L.childNodes[M]&&L.childNodes[N]){O=qx.bom.Range.get(qx.dom.Node.getBodyElement(L));
O.moveToElementText(L.childNodes[M]);
O.collapse(true);
var P=qx.bom.Range.get(qx.dom.Node.getBodyElement(L));
P.moveToElementText(L.childNodes[N]);
O.setEndPoint(e,P);
O.select();
return true;
}}}return false;
},"default":function(x,y,z){var D=x.nodeName.toLowerCase();

if(qx.dom.Node.isElement(x)&&(D==j||D==k)){if(z===undefined){z=x.value.length;
}if(y>=0&&y<=x.value.length&&z>=0&&z<=x.value.length){x.select();
x.setSelectionRange(y,z);
return true;
}}else{var B=false;
var C=qx.dom.Node.getWindow(x).getSelection();
var A=qx.bom.Range.get(x);
if(qx.dom.Node.isText(x)){if(z===undefined){z=x.length;
}
if(y>=0&&y<x.length&&z>=0&&z<=x.length){B=true;
}}else if(qx.dom.Node.isElement(x)){if(z===undefined){z=x.childNodes.length-1;
}
if(y>=0&&x.childNodes[y]&&z>=0&&x.childNodes[z]){B=true;
}}else if(qx.dom.Node.isDocument(x)){x=x.body;

if(z===undefined){z=x.childNodes.length-1;
}
if(y>=0&&x.childNodes[y]&&z>=0&&x.childNodes[z]){B=true;
}}
if(B){if(!C.isCollapsed){C.collapseToStart();
}A.setStart(x,y);
if(qx.dom.Node.isText(x)){A.setEnd(x,z);
}else{A.setEndAfter(x.childNodes[z]);
}if(C.rangeCount>0){C.removeAllRanges();
}C.addRange(A);
return true;
}}return false;
}}),setAll:function(Q){return qx.bom.Selection.set(Q,0);
},clear:qx.core.Variant.select(i,{"mshtml":function(r){var s=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(r));
var t=qx.bom.Range.get(r);
var parent=t.parentElement();
var u=qx.bom.Range.get(qx.dom.Node.getDocument(r));
if(parent==u.parentElement()&&parent==r){s.empty();
}},"default":function(l){var n=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(l));
var p=l.nodeName.toLowerCase();
if(qx.dom.Node.isElement(l)&&(p==j||p==k)){l.setSelectionRange(0,0);
qx.bom.Element.blur(l);
}else if(qx.dom.Node.isDocument(l)||p==c){n.collapse(l.body?l.body:l,0);
}else{var o=qx.bom.Range.get(l);

if(!o.collapsed){var q;
var m=o.commonAncestorContainer;
if(qx.dom.Node.isElement(l)&&qx.dom.Node.isText(m)){q=m.parentNode;
}else{q=m;
}
if(q==l){n.collapse(l,0);
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
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__gw:{},remove:function(e){delete this.__gw[e.$$hash];
},add:function(c){var d=this.__gw;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__gw;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__gw={};
}}});
})();
(function(){var l="qx.ui.core.queue.Visibility",k="visibility";
qx.Class.define(l,{statics:{__gi:{},__gj:{},remove:function(m){var n=m.$$hash;
delete this.__gj[n];
delete this.__gi[n];
},isVisible:function(o){return this.__gj[o.$$hash]||false;
},__gk:function(e){var g=this.__gj;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__gk(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(i){var j=this.__gi;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(k);
},flush:function(){var a=this.__gi;
var d=this.__gj;
for(var b in a){if(d[b]!=null){a[b].addChildrenToQueue(a);
}}var c={};

for(var b in a){c[b]=d[b];
d[b]=null;
}for(var b in a){if(d[b]==null){this.__gk(a[b]);
}if(d[b]&&d[b]!=c[b]){a[b].checkAppearanceNeeds();
}}this.__gi={};
}}});
})();
(function(){var c="appearance",b="qx.ui.core.queue.Appearance";
qx.Class.define(b,{statics:{__fP:{},remove:function(j){delete this.__fP[j.$$hash];
},add:function(h){var i=this.__fP;

if(i[h.$$hash]){return;
}i[h.$$hash]=h;
qx.ui.core.queue.Manager.scheduleFlush(c);
},has:function(a){return !!this.__fP[a.$$hash];
},flush:function(){var g=qx.ui.core.queue.Visibility;
var d=this.__fP;
var f;

for(var e in d){f=d[e];
delete d[e];
if(g.isVisible(f)){f.syncAppearance();
}else{f.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__dY:{},add:function(e){var f=this.__dY;

if(f[e.$$hash]){return;
}f[e.$$hash]=e;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__dY;

for(var d in c){c[d].dispose();
delete c[d];
}for(var d in c){return;
}this.__dY={};
}}});
})();
(function(){var p="blur",o="focus",n="input",m="load",k="qx.ui.core.EventHandler",j="__dm",h="activate";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__dm=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__dm:null,__dn:{focusin:1,focusout:1,focus:1,blur:1},__do:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(b,c){return b instanceof qx.ui.core.Widget;
},_dispatchEvent:function(u){var z=u.getTarget();
var y=qx.ui.core.Widget.getWidgetByElement(z);
var A=false;

while(y&&y.isAnonymous()){var A=true;
y=y.getLayoutParent();
}if(y&&A&&u.getType()==h){y.getContainerElement().activate();
}if(this.__dn[u.getType()]){y=y&&y.getFocusTarget();
if(!y){return;
}}if(u.getRelatedTarget){var H=u.getRelatedTarget();
var G=qx.ui.core.Widget.getWidgetByElement(H);

while(G&&G.isAnonymous()){G=G.getLayoutParent();
}
if(G){if(this.__dn[u.getType()]){G=G.getFocusTarget();
}if(G===y){return;
}}}var C=u.getCurrentTarget();
var E=qx.ui.core.Widget.getWidgetByElement(C);

if(!E||E.isAnonymous()){return;
}if(this.__dn[u.getType()]){E=E.getFocusTarget();
}var F=u.getType();

if(!(E.isEnabled()||this.__do[F])){return;
}var v=u.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var B=this.__dm.getListeners(E,F,v);

if(!B||B.length===0){return;
}var w=qx.event.Pool.getInstance().getObject(u.constructor);
u.clone(w);
w.setTarget(y);
w.setRelatedTarget(G||null);
w.setCurrentTarget(E);
var I=u.getOriginalTarget();

if(I){var x=qx.ui.core.Widget.getWidgetByElement(I);

while(x&&x.isAnonymous()){x=x.getLayoutParent();
}w.setOriginalTarget(x);
}else{w.setOriginalTarget(z);
}for(var i=0,l=B.length;i<l;i++){var D=B[i].context||E;
B[i].handler.call(D,w);
}if(w.getPropagationStopped()){u.stopPropagation();
}
if(w.getDefaultPrevented()){u.preventDefault();
}qx.event.Pool.getInstance().poolObject(w);
},registerEvent:function(q,r,s){var t;

if(r===o||r===p){t=q.getFocusElement();
}else if(r===m||r===n){t=q.getContentElement();
}else{t=q.getContainerElement();
}
if(t){t.addListener(r,this._dispatchEvent,this,s);
}},unregisterEvent:function(d,e,f){var g;

if(e===o||e===p){g=d.getFocusElement();
}else if(e===m||e===n){g=d.getContentElement();
}else{g=d.getContainerElement();
}
if(g){g.removeListener(e,this._dispatchEvent,this,f);
}}},destruct:function(){this._disposeFields(j);
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Bootstrap.define(c,{statics:{LOCALE:"",VARIANT:"",__iP:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__iP();
}});
})();
(function(){var w='indexOf',v='slice',u='concat',t='toLocaleLowerCase',s="qx.type.BaseString",r="",q='match',p='toLocaleUpperCase',o='search',n='replace',f='toLowerCase',m='charCodeAt',j='split',e='substring',d='lastIndexOf',h='substr',g='toUpperCase',k='charAt';
qx.Class.define(s,{extend:Object,construct:function(a){var a=a||r;
this.__iW=a;
this.length=a.length;
},members:{$$isString:true,length:0,__iW:null,toString:function(){return this.__iW;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(b,c){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){{};
var z=[k,m,u,w,d,q,n,o,v,j,h,e,f,g,t,p];
y.valueOf=y.toString;

for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__dp=c;
this.__dq=d;
},members:{__dp:null,__dq:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__dp,this.__dq);
}}});
})();
(function(){var F="_",E="",D="qx.dynlocale",C="on",B="_applyLocale",A="__gG",z="changeLocale",y="C",x="__gH",w="qx.locale.Manager",u="String",v="singleton";
qx.Class.define(w,{type:v,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__gG=qx.$$translations||{};
this.__gH=qx.$$locales||{};
var I=qx.bom.client.Locale;
var G=I.LOCALE;
var H=I.VARIANT;

if(H!==E){G+=F+H;
}this.setLocale(G||this.__gI);
},statics:{tr:function(j,k){var l=qx.lang.Array.fromArguments(arguments);
l.splice(0,1);
return qx.locale.Manager.getInstance().translate(j,l);
},trn:function(J,K,L,M){var N=qx.lang.Array.fromArguments(arguments);
N.splice(0,3);
if(L!=1){return qx.locale.Manager.getInstance().translate(K,N);
}else{return qx.locale.Manager.getInstance().translate(J,N);
}},trc:function(Y,ba,bb){var bc=qx.lang.Array.fromArguments(arguments);
bc.splice(0,2);
return qx.locale.Manager.getInstance().translate(ba,bc);
},marktr:function(e){return e;
}},properties:{locale:{check:u,nullable:true,apply:B,event:z}},members:{__gI:y,__gJ:null,__gK:null,__gG:null,__gH:null,getLanguage:function(){return this.__gK;
},getTerritory:function(){return this.getLocale().split(F)[1]||E;
},getAvailableLocales:function(){var X=[];

for(var W in this.__gH){if(W!=this.__gI){X.push(W);
}}return X;
},__gL:function(f){var h;
var g=f.indexOf(F);

if(g==-1){h=f;
}else{h=f.substring(0,g);
}return h;
},_applyLocale:function(bd,be){this.__gJ=bd;
this.__gK=this.__gL(bd);
},addTranslation:function(a,b){var c=this.__gG;

if(c[a]){for(var d in b){c[a][d]=b[d];
}}else{c[a]=b;
}},translate:function(O,P,Q){var V;
var T=this.__gG;

if(!T){return O;
}
if(Q){var S=this.__gL(Q);
}else{Q=this.__gJ;
S=this.__gK;
}
if(!V&&T[Q]){V=T[Q][O];
}
if(!V&&T[S]){V=T[S][O];
}
if(!V&&T[this.__gI]){V=T[this.__gI][O];
}
if(!V){V=O;
}
if(P.length>0){var R=[];

for(var i=0;i<P.length;i++){var U=P[i];

if(U&&U.translate){R[i]=U.translate();
}else{R[i]=U;
}}V=qx.lang.String.format(V,R);
}
if(qx.core.Variant.isSet(D,C)){V=new qx.locale.LocalizedString(V,O,P);
}return V;
},localize:function(m,n,o){var t;
var r=this.__gH;

if(!r){return m;
}
if(o){var q=this.__gL(o);
}else{o=this.__gJ;
q=this.__gK;
}
if(!t&&r[o]){t=r[o][m];
}
if(!t&&r[q]){t=r[q][m];
}
if(!t&&r[this.__gI]){t=r[this.__gI][m];
}
if(!t){t=m;
}
if(n.length>0){var p=[];

for(var i=0;i<n.length;i++){var s=n[i];

if(s.translate){p[i]=s.translate();
}else{p[i]=s;
}}t=qx.lang.String.format(t,p);
}
if(qx.core.Variant.isSet(D,C)){t=new qx.locale.LocalizedString(t,m,n);
}return t;
}},destruct:function(){this._disposeFields(A,x);
}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="mshtml",f="qx.client",e="qx.html.Image";
qx.Class.define(e,{extend:qx.html.Element,members:{_applyProperty:function(name,m){arguments.callee.base.call(this,name,m);

if(name===j){var q=this.getDomElement();
var n=this.getAllStyles();
var o=this._getProperty(j);
var p=this._getProperty(i);
var r=p?i:h;
qx.bom.element.Decoration.update(q,o,r,n);
}},_createDomElement:function(){var b=this._getProperty(i);
var c=b?i:h;

if(qx.core.Variant.isSet(f,g)){var a=this._getProperty(j);
this.setNodeName(qx.bom.element.Decoration.getTagName(c,a));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(c));
}return arguments.callee.base.call(this);
},_copyData:function(k){return arguments.callee.base.call(this,true);
},setSource:function(l){this._setProperty(j,l);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){this._removeProperty(j);
return this;
},setScale:function(d){this._setProperty(i,d);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var p="replacement",o="Boolean",n="_applyScale",m="_applySource",l="-disabled.$1",k="changeSource",j="String",i="image",h="qx.ui.basic.Image";
qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(q){arguments.callee.base.call(this);

if(q){this.setSource(q);
}},properties:{source:{check:j,init:null,nullable:true,event:k,apply:m,themeable:true},scale:{check:o,init:false,themeable:true,apply:n},appearance:{refine:true,init:i},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__gM:null,__gN:null,_createContentElement:function(){return new qx.html.Image();
},_getContentHint:function(){return {width:this.__gM||0,height:this.__gN||0};
},_applyEnabled:function(f,g){arguments.callee.base.call(this,f,g);

if(this.getSource()){this._styleSource();
}},_applySource:function(e){this._styleSource();
},_applyScale:function(u){var v=this.getContentElement();
v.setScale(u);
},_styleSource:function(){var w=qx.util.AliasManager.getInstance().resolve(this.getSource());
var x=this.getContentElement();

if(!w){x.resetSource();
return;
}if(qx.util.ResourceManager.getInstance().has(w)){this.__gO(x,w);
}else if(qx.io2.ImageLoader.isLoaded(w)){this.__gP(x,w);
}else{this.__gQ(x,w);
}},__gO:function(a,b){var d=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var c=b.replace(/\.([a-z]+)$/,l);

if(d.has(c)){b=c;
this.addState(p);
}else{this.removeState(p);
}}if(a.getSource()===b){return;
}a.setSource(b);
this.__gS(d.getImageWidth(b),d.getImageHeight(b));
},__gP:function(C,D){var F=qx.io2.ImageLoader;
C.setSource(D);
var E=F.getWidth(D);
var G=F.getHeight(D);
this.__gS(E,G);
},__gQ:function(r,s){var self;
var t=qx.io2.ImageLoader;
{};
if(!t.isFailed(s)){t.load(s,this.__gR,this);
}else{if(r!=null){r.resetSource();
}}},__gR:function(A,B){if(A!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(B.failed){this.warn("Image could not be loaded: "+A);
}this._styleSource();
},__gS:function(y,z){if(y!==this.__gM||z!==this.__gN){this.__gM=y;
this.__gN=z;
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
(function(){var g="interval",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="__in",a="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:a,construct:function(){arguments.callee.base.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(g,this._onInterval,this);
h.start();
this.__in=h;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__in:null,_applyTimeoutInterval:function(i){this.__in.setInterval(i);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__in){this.__in.stop();
}this._disposeFields(b);
}});
})();
(function(){var z="bottom",y="top",x="left",w="right",v="-",u="qx.util.PlaceUtil";
qx.Class.define(u,{statics:{compute:function(a,b,c,d,e,f){var t=0;
var top=0;
var j,i;
var p=d.split(v);
var m=p[0];
var s=p[1];
var n=0,k=0,o=0,q=0;

if(f){n+=f.left||0;
k+=f.top||0;
o+=f.right||0;
q+=f.bottom||0;
}switch(m){case x:t=c.left-a.width-n;
break;
case y:top=c.top-a.height-k;
break;
case w:t=c.right+o;
break;
case z:top=c.bottom+q;
break;
}switch(s){case x:t=c.left;
break;
case y:top=c.top;
break;
case w:t=c.right-a.width;
break;
case z:top=c.bottom-a.height;
break;
}
if(e===false){return {left:t,top:top};
}else{var l=Math.min(t,b.width-t-a.width);

if(l<0){var h=t;

if(t<0){if(m==x){h=c.right+o;
}else if(s==w){h=c.left;
}}else{if(m==w){h=c.left-a.width-n;
}else if(s==x){h=c.right-a.width;
}}j=Math.min(h,b.width-h-a.width);

if(j>l){t=h;
l=j;
}}var g=Math.min(top,b.height-top-a.height);

if(g<0){var r=top;

if(top<0){if(m==y){r=c.bottom+q;
}else if(s==z){r=c.top;
}}else{if(m==z){r=c.top-a.height-k;
}else if(s==y){r=c.bottom-a.height;
}}i=Math.min(r,b.height-r-a.height);

if(i>g){top=r;
g=i;
}}return {left:t,top:top,ratingX:l,ratingY:g};
}}}});
})();
(function(){var o="mousedown",n="__nv",m="blur",l="singleton",k="qx.ui.popup.Manager";
qx.Class.define(k,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__nv={};
qx.event.Registration.addListener(document.documentElement,o,this.__nx,this,true);
qx.bom.Element.addListener(window,m,this.hideAll,this);
},members:{__nv:null,add:function(p){{};
this.__nv[p.$$hash]=p;
this.__nw();
},remove:function(q){{};
var r=this.__nv;

if(r){delete r[q.$$hash];
this.__nw();
}},hideAll:function(){var j=this.__nv;

if(j){for(var i in j){j[i].exclude();
}}},__nw:function(){var c=1e7;
var b=this.__nv;

for(var a in b){b[a].setZIndex(c++);
}},__nx:function(e){var g=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var h=this.__nv;

for(var f in h){var d=h[f];

if(!d.getAutoHide()||g==d||qx.ui.core.Widget.contains(d,g)){continue;
}d.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,o,this.__nx,this,true);
this._disposeMap(n);
}});
})();
(function(){var f="__fr",e="abstract",d="qx.ui.layout.Abstract",c="__fq";
qx.Class.define(d,{type:e,extend:qx.core.Object,members:{__fq:null,_invalidChildrenCache:null,__fr:null,invalidateLayoutCache:function(){this.__fq=null;
},renderLayout:function(j,k){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__fq){return this.__fq;
}return this.__fq=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(h){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var i=this.__fr;

if(i instanceof qx.ui.core.LayoutItem){i.clearSeparators();
}},_renderSeparator:function(a,b){this.__fr.renderSeparator(a,b);
},connectToWidget:function(g){if(g&&this.__fr){throw new Error("It is not possible to manually set the connected widget.");
}this.__fr=g;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__fr;
},_applyLayoutChange:function(){if(this.__fr){this.__fr.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__fr.getLayoutChildren();
}},destruct:function(){this._disposeFields(f,c);
}});
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
(function(){var z="label",y="icon",x="Boolean",w="left",v="both",u="String",t="_applyRich",s="_applyIcon",r="changeGap",q="_applyShow",j="right",p="_applyCenter",m="_applyIconPosition",h="qx.ui.basic.Atom",g="top",l="changeShow",k="bottom",n="_applyLabel",f="Integer",o="_applyGap",i="atom";
qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(a,b){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}},properties:{appearance:{refine:true,init:i},label:{apply:n,nullable:true,dispose:true,check:u},rich:{check:x,init:false,apply:t},icon:{check:u,apply:s,nullable:true,themeable:true},gap:{check:f,nullable:false,event:r,apply:o,themeable:true,init:4},show:{init:v,check:[v,z,y],themeable:true,inheritable:true,apply:q,event:l},iconPosition:{init:w,check:[g,j,k,w],themeable:true,apply:m},center:{init:false,check:x,themeable:true,apply:p}},members:{_createChildControlImpl:function(M){var N;

switch(M){case z:N=new qx.ui.basic.Label(this.getLabel());
N.setAnonymous(true);
N.setRich(this.getRich());
this._add(N);

if(this.getLabel()==null||this.getShow()===y){N.exclude();
}break;
case y:N=new qx.ui.basic.Image(this.getIcon());
N.setAnonymous(true);
this._addAt(N,0);

if(this.getIcon()==null||this.getShow()===z){N.exclude();
}break;
}return N||arguments.callee.base.call(this,M);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===y){this._excludeChildControl(z);
}else{this._showChildControl(z);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===z){this._excludeChildControl(y);
}else{this._showChildControl(y);
}},_applyLabel:function(c,d){var e=this.getChildControl(z,true);

if(e){e.setValue(c);
}this._handleLabel();
},_applyRich:function(H,I){var J=this.getChildControl(z,true);

if(J){J.setRich(H);
}},_applyIcon:function(E,F){var G=this.getChildControl(y,true);

if(G){G.setSource(E);
}this._handleIcon();
},_applyGap:function(O,P){this._getLayout().setGap(O);
},_applyShow:function(K,L){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(A,B){this._getLayout().setIconPosition(A);
},_applyCenter:function(C,D){this._getLayout().setCenter(C);
}}});
})();
(function(){var F="bottom",E="_applyLayoutChange",D="top",C="left",B="right",A="middle",z="center",y="qx.ui.layout.Atom",x="Integer",w="Boolean";
qx.Class.define(y,{extend:qx.ui.layout.Abstract,properties:{gap:{check:x,init:4,apply:E},iconPosition:{check:[C,D,B,F],init:C,apply:E},center:{check:w,init:false,apply:E}},members:{verifyLayoutProperty:null,renderLayout:function(a,b){var l=qx.ui.layout.Util;
var d=this.getIconPosition();
var g=this._getLayoutChildren();
var length=g.length;
var v,top,u,e;
var q,k;
var o=this.getGap();
var t=this.getCenter();
if(d===F||d===B){var m=length-1;
var h=-1;
var f=-1;
}else{var m=0;
var h=length;
var f=1;
}if(d==D||d==F){if(t){var p=0;

for(var i=m;i!=h;i+=f){e=g[i].getSizeHint().height;

if(e>0){p+=e;

if(i!=m){p+=o;
}}}top=Math.round((b-p)/2);
}else{top=0;
}
for(var i=m;i!=h;i+=f){q=g[i];
k=q.getSizeHint();
u=Math.min(k.maxWidth,Math.max(a,k.minWidth));
e=k.height;
v=l.computeHorizontalAlignOffset(z,u,a);
q.renderLayout(v,top,u,e);
if(e>0){top+=e+o;
}}}else{var j=a;
var c=null;
var s=0;

for(var i=m;i!=h;i+=f){q=g[i];
u=q.getSizeHint().width;

if(u>0){if(!c&&q instanceof qx.ui.basic.Label){c=q;
}else{j-=u;
}s++;
}}
if(s>1){var r=(s-1)*o;
j-=r;
}
if(c){var k=c.getSizeHint();
var n=Math.max(k.minWidth,Math.min(j,k.maxWidth));
j-=n;
}
if(t&&j>0){v=Math.round(j/2);
}else{v=0;
}
for(var i=m;i!=h;i+=f){q=g[i];
k=q.getSizeHint();
e=Math.min(k.maxHeight,Math.max(b,k.minHeight));

if(q===c){u=n;
}else{u=k.width;
}top=l.computeVerticalAlignOffset(A,k.height,b);
q.renderLayout(v,top,u,e);
if(u>0){v+=u+o;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===D||K===F){var G=0;

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
(function(){var C="middle",B="qx.ui.layout.Util",A="left",z="center",y="top",x="bottom",w="right";
qx.Class.define(B,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(H,I,J){var L,P,K,Q;
var M=I>J;
var R=Math.abs(I-J);
var S,N;
var O={};

for(P in H){L=H[P];
O[P]={potential:M?L.max-L.value:L.value-L.min,flex:M?L.flex:1/L.flex,offset:0};
}while(R!=0){Q=Infinity;
K=0;

for(P in O){L=O[P];

if(L.potential>0){K+=L.flex;
Q=Math.min(Q,L.potential/L.flex);
}}if(K==0){break;
}Q=Math.min(R,Q*K)/K;
S=0;

for(P in O){L=O[P];

if(L.potential>0){N=Math.min(R,L.potential,Math.ceil(Q*L.flex));
S+=N-Q*L.flex;

if(S>=1){S-=1;
N-=1;
}L.potential-=N;

if(M){L.offset+=N;
}else{L.offset-=N;
}R-=N;
}}}return O;
},computeHorizontalAlignOffset:function(bc,bd,be,bf,bg){if(bf==null){bf=0;
}
if(bg==null){bg=0;
}var bh=0;

switch(bc){case A:bh=bf;
break;
case w:bh=be-bd-bg;
break;
case z:bh=Math.round((be-bd)/2);
if(bh<bf){bh=bf;
}else if(bh<bg){bh=Math.max(bf,be-bd-bg);
}break;
}return bh;
},computeVerticalAlignOffset:function(j,k,m,n,o){if(n==null){n=0;
}
if(o==null){o=0;
}var p=0;

switch(j){case y:p=n;
break;
case x:p=m-k-o;
break;
case C:p=Math.round((m-k)/2);
if(p<n){p=n;
}else if(p<o){p=Math.max(n,m-k-o);
}break;
}return p;
},collapseMargins:function(e){var f=0,h=0;

for(var i=0,l=arguments.length;i<l;i++){var g=arguments[i];

if(g<0){h=Math.min(h,g);
}else if(g>0){f=Math.max(f,g);
}}return f+h;
},computeHorizontalGaps:function(a,b,c){if(b==null){b=0;
}var d=0;

if(c){d+=a[0].getMarginLeft();

for(var i=1,l=a.length;i<l;i+=1){d+=this.collapseMargins(b,a[i-1].getMarginRight(),a[i].getMarginLeft());
}d+=a[l-1].getMarginRight();
}else{for(var i=1,l=a.length;i<l;i+=1){d+=a[i].getMarginLeft()+a[i].getMarginRight();
}d+=(b*(l-1));
}return d;
},computeVerticalGaps:function(D,E,F){if(E==null){E=0;
}var G=0;

if(F){G+=D[0].getMarginTop();

for(var i=1,l=D.length;i<l;i+=1){G+=this.collapseMargins(E,D[i-1].getMarginBottom(),D[i].getMarginTop());
}G+=D[l-1].getMarginBottom();
}else{for(var i=1,l=D.length;i<l;i+=1){G+=D[i].getMarginTop()+D[i].getMarginBottom();
}G+=(E*(l-1));
}return G;
},computeHorizontalSeparatorGaps:function(T,U,V){var Y=qx.theme.manager.Decoration.getInstance().resolve(V);
var X=Y.getInsets();
var W=X.left+X.right;
var ba=0;

for(var i=0,l=T.length;i<l;i++){var bb=T[i];
ba+=bb.getMarginLeft()+bb.getMarginRight();
}ba+=(U+W+U)*(l-1);
return ba;
},computeVerticalSeparatorGaps:function(bi,bj,bk){var bn=qx.theme.manager.Decoration.getInstance().resolve(bk);
var bm=bn.getInsets();
var bl=bm.top+bm.bottom;
var bo=0;

for(var i=0,l=bi.length;i<l;i++){var bp=bi[i];
bo+=bp.getMarginTop()+bp.getMarginBottom();
}bo+=(bj+bl+bj)*(l-1);
return bo;
},arrangeIdeals:function(q,r,s,t,u,v){if(r<q||u<t){if(r<q&&u<t){r=q;
u=t;
}else if(r<q){u-=(q-r);
r=q;
if(u<t){u=t;
}}else if(u<t){r-=(t-u);
u=t;
if(r<q){r=q;
}}}
if(r>s||u>v){if(r>s&&u>v){r=s;
u=v;
}else if(r>s){u+=(r-s);
r=s;
if(u>v){u=v;
}}else if(u>v){r+=(u-v);
u=v;
if(r>s){r=s;
}}}return {begin:r,end:u};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var o="Please use the value property instead.",n="changeContent",m="qx.dynlocale",l="text",k="color",j="userSelect",i="changeLocale",h="enabled",g="none",f="on",M="_applyTextAlign",L="Boolean",K="qx.ui.core.Widget",J="Please use the changeValue event instead.",I="changeTextAlign",H="changeValue",G="qx.client",F="qx.ui.basic.Label",E="__fy",D="A",v="_applyValue",w="center",t="_applyBuddy",u="qx.event.type.Data",r="String",s="textAlign",p="right",q="changeRich",x="__fA",y="_applyRich",A="click",z="label",C="webkit",B="left";
qx.Class.define(F,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(bc){arguments.callee.base.call(this);

if(bc!=null){this.setValue(bc);
}
if(qx.core.Variant.isSet(m,f)){qx.locale.Manager.getInstance().addListener(i,this._onChangeLocale,this);
}},events:{"changeContent":u},properties:{rich:{check:L,init:false,event:q,apply:y},value:{check:r,apply:v,event:H,nullable:true},buddy:{check:K,apply:t,nullable:true,init:null},textAlign:{check:[B,w,p],nullable:true,themeable:true,apply:M,event:I},appearance:{refine:true,init:z},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__fy:null,__fz:null,__fA:null,__fB:null,_getContentHint:function(){if(this.__fz){this.__fC=this.__fD();
delete this.__fz;
}return {width:this.__fC.width,height:this.__fC.height};
},_hasHeightForWidth:function(){return this.getRich();
},_applySelectable:function(bi){arguments.callee.base.call(this,bi);
if(qx.core.Variant.isSet(G,C)){this.getContainerElement().setStyle(j,bi?l:g);
this.getContentElement().setStyle(j,bi?l:g);
}},_getContentHeightForWidth:function(N){if(!this.getRich()){return null;
}return this.__fD(N).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(S,T){this.getContentElement().setStyle(s,S);
},_applyTextColor:function(a,b){if(a){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(a));
}else{this.getContentElement().removeStyle(k);
}},__fC:{width:0,height:0},_applyFont:function(P,Q){var R;

if(P){this.__fy=qx.theme.manager.Font.getInstance().resolve(P);
R=this.__fy.getStyles();
}else{this.__fy=null;
R=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(R);
this.__fz=true;
qx.ui.core.queue.Layout.add(this);
},__fD:function(W){var bb=qx.bom.Label;
var Y=this.getFont();
var X=Y?this.__fy.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||D;
var ba=this.getRich();
return ba?bb.getHtmlSize(content,X,W):bb.getTextSize(content,X);
},_applyBuddy:function(U,V){if(V!=null){V.removeBinding(this.__fA);
this.__fA=null;
this.removeListenerById(this.__fB);
this.__fB=null;
}
if(U!=null){this.__fA=U.bind(h,this,h);
this.__fB=this.addListener(A,U.focus,U);
}},_applyRich:function(O){this.getContentElement().setRich(O);
this.__fz=true;
qx.ui.core.queue.Layout.add(this);
},_onChangeLocale:qx.core.Variant.select(m,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(c,d){this.getContentElement().setContent(c);
this.__fz=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(n,c,d);
},setContent:function(bd){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
this.setValue(bd);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
return this.getValue();
},resetContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
this.resetValue();
},addListener:function(bf,bg,self,bh){if(bf==n){qx.log.Logger.deprecatedEventWarning(arguments.callee,n,J);
}return arguments.callee.base.call(this,bf,bg,self,bh);
}},destruct:function(){if(qx.core.Variant.isSet(m,f)){qx.locale.Manager.getInstance().removeListener(i,this._onChangeLocale,this);
}if(this.__fA!=null){var be=this.getBuddy();

if(be!=null&&!be.isDisposed()){be.removeBinding(this.__fA);
}}this._disposeFields(E,x);
}});
})();
(function(){var e="content",d="qx.html.Label";
qx.Class.define(d,{extend:qx.html.Element,members:{__cO:null,_applyProperty:function(name,h){arguments.callee.base.call(this,name,h);

if(name==e){var i=this.getDomElement();
qx.bom.Label.setContent(i,h);
}},_createDomElement:function(){var g=this.__cO;
var f=qx.bom.Label.create(this._content,g);
return f;
},_copyData:function(j){return arguments.callee.base.call(this,true);
},setRich:function(b){var c=this.getDomElement();

if(c){throw new Error("The label mode cannot be modified after initial creation");
}b=!!b;

if(this.__cO==b){return;
}this.__cO=b;
return this;
},setContent:function(a){this._setProperty(e,a);
return this;
},getContent:function(){return this._getProperty(e);
}}});
})();
(function(){var o="qx.client",n="gecko",m="div",l="inherit",k="text",j="value",i="",h="hidden",g="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",f="nowrap",D="auto",C="ellipsis",B="normal",A="label",z="px",y="crop",x="end",w="100%",v="visible",u="qx.bom.Label",s="opera",t="block",q="none",r="-1000px",p="absolute";
qx.Class.define(u,{statics:{__gT:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__gU:function(){var L=this.__gW(false);
document.body.insertBefore(L,document.body.firstChild);
return this._textElement=L;
},__gV:function(){var E=this.__gW(true);
document.body.insertBefore(E,document.body.firstChild);
return this._htmlElement=E;
},__gW:function(U){var V=qx.bom.Element.create(m);
var W=V.style;
W.width=W.height=D;
W.left=W.top=r;
W.visibility=h;
W.position=p;
W.overflow=v;

if(U){W.whiteSpace=B;
}else{W.whiteSpace=f;

if(qx.core.Variant.isSet(o,n)){var X=document.createElementNS(g,A);
for(var Y in this.__gT){X.style[Y]=l;
}V.appendChild(X);
}}return V;
},__gX:function(ba){var bb={};

if(ba){bb.whiteSpace=B;
}else if(qx.core.Variant.isSet(o,n)){bb.display=t;
}else{bb.overflow=h;
bb.whiteSpace=f;
bb.textOverflow=C;
bb.userSelect=q;
if(qx.core.Variant.isSet(o,s)){bb.OTextOverflow=C;
}}return bb;
},create:function(content,M,N){if(!N){N=window;
}
if(M){var O=N.document.createElement(m);
O.useHtml=true;
}else if(qx.core.Variant.isSet(o,n)){var O=N.document.createElement(m);
var P=N.document.createElementNS(g,A);
P.style.cursor=l;
P.style.color=l;
P.style.overflow=h;
P.style.maxWidth=w;
for(var Q in this.__gT){P.style[Q]=l;
}P.setAttribute(y,x);
O.appendChild(P);
}else{var O=N.document.createElement(m);
qx.bom.element.Style.setStyles(O,this.__gX(M));
}
if(content){this.setContent(O,content);
}return O;
},setContent:function(d,e){e=e||i;

if(d.useHtml){d.innerHTML=e;
}else if(qx.core.Variant.isSet(o,n)){d.firstChild.setAttribute(j,e);
}else{qx.bom.element.Attribute.set(d,k,e);
}},getContent:function(K){if(K.useHtml){return K.innerHTML;
}else if(qx.core.Variant.isSet(o,n)){return K.firstChild.getAttribute(j)||i;
}else{return qx.bom.element.Attribute.get(K,k);
}},getHtmlSize:function(content,R,S){var T=this._htmlElement||this.__gV();
T.style.width=S!==undefined?S+z:D;
T.innerHTML=content;
return this.__gY(T,R);
},getTextSize:function(a,b){var c=this._textElement||this.__gU();

if(qx.core.Variant.isSet(o,n)){c.firstChild.setAttribute(j,a);
}else{qx.bom.element.Attribute.set(c,k,a);
}return this.__gY(c,b);
},__gY:function(F,G){var H=this.__gT;

if(!G){G={};
}
for(var I in H){F.style[I]=G[I]||i;
}var J=qx.bom.element.Dimension.getSize(F);

if(qx.core.Variant.isSet(o,n)){if(!qx.bom.client.Platform.WIN){J.width++;
}}return J;
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
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(e){return arguments.length==1;
},getEnabled:function(){},setRequired:function(a){return arguments.length==1;
},getRequired:function(){},setValid:function(d){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="__nT",g="_applyBlockerColor",f="Number",e="qx.ui.core.MBlocker",d="_applyBlockerOpacity",c="Color";
qx.Mixin.define(e,{construct:function(){this.__nT=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:c,init:null,nullable:true,apply:g,themeable:true},blockerOpacity:{check:f,init:1,apply:d,themeable:true}},members:{__nT:null,_applyBlockerColor:function(a,b){this.__nT.setColor(a);
},_applyBlockerOpacity:function(i,j){this.__nT.setOpacity(i);
},block:function(){this.__nT.block();
},isBlocked:function(){return this.__nT.isBlocked();
},unblock:function(){this.__nT.unblock();
},blockContent:function(k){this.__nT.blockContent(k);
},isContentBlocked:function(){return this.__nT.isContentBlocked();
},unblockContent:function(){this.__nT.unblockContent();
},_getContentBlocker:function(){return this.__nT._getContentBlocker();
},_getBlocker:function(){return this.__nT._getBlocker();
},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__nT._restoreAnonymousState();
},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__nT._saveAndSetAnonymousState();
}},destruct:function(){this._disposeObjects(h);
}});
})();
(function(){var k="qx.ui.window.Window",j="changeModal",i="changeVisibility",h="changeActive",g="_applyActiveWindow",f="__jF",d="__jG",c="qx.ui.window.MDesktop";
qx.Mixin.define(c,{properties:{activeWindow:{check:k,apply:g,init:null,nullable:true}},members:{__jF:null,__jG:null,getWindowManager:function(){if(!this.__jG){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__jG;
},supportsMaximize:function(){return true;
},setWindowManager:function(l){if(this.__jG){this.__jG.setDesktop(null);
}l.setDesktop(this);
this.__jG=l;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(n,o){this.getWindowManager().changeActiveWindow(n,o);

if(n){n.setActive(true);
}
if(o){o.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(p){if(qx.Class.isDefined(k)&&p instanceof qx.ui.window.Window){this._addWindow(p);
}},_addWindow:function(b){if(!qx.lang.Array.contains(this.getWindows(),b)){this.getWindows().push(b);
b.addListener(h,this._onChangeActive,this);
b.addListener(j,this._onChangeModal,this);
b.addListener(i,this._onChangeVisibility,this);
}
if(b.getActive()){this.setActiveWindow(b);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(a){if(qx.Class.isDefined(k)&&a instanceof qx.ui.window.Window){this._removeWindow(a);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(h,this._onChangeActive,this);
m.removeListener(j,this._onChangeModal,this);
m.removeListener(i,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__jF){this.__jF=[];
}return this.__jF;
}},destruct:function(){this._disposeArray(f);
this._disposeObjects(d);
}});
})();
(function(){var y="contextmenu",x="help",w="qx.client",v="changeGlobalCursor",u="abstract",t="Boolean",s="root",r="",q="__oc",p=" !important",l="_applyGlobalCursor",o="_applyNativeHelp",n=";",k="qx.ui.root.Abstract",j="String",m="*";
qx.Class.define(k,{type:u,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:s},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:j,nullable:true,themeable:true,apply:l,event:v},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:t,init:false,apply:o}},members:{__oc:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(w,{"mshtml":function(B,C){},"default":function(c,d){var f=qx.bom.Stylesheet;
var g=this.__oc;

if(!g){this.__oc=g=f.createElement();
}f.removeAllRules(g);

if(c){f.addRule(g,m,qx.bom.element.Cursor.compile(c).replace(n,r)+p);
}}}),_applyNativeContextMenu:function(z,A){if(z){this.removeListener(y,this._onNativeContextMenu,this,true);
}else{this.addListener(y,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(w,{"mshtml":function(h,i){if(i===false){qx.bom.Event.removeNativeListener(document,x,qx.lang.Function.returnFalse);
}
if(h===false){qx.bom.Event.addNativeListener(document,x,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this._disposeFields(q);
},defer:function(a,b){qx.ui.core.MChildrenHandling.remap(b);
}});
})();
(function(){var u="resize",t="position",s="__nX",r="0px",q="webkit",p="$$widget",o="qx.ui.root.Application",n="hidden",m="qx.client",l="div",i="__nY",k="100%",j="absolute";
qx.Class.define(o,{extend:qx.ui.root.Abstract,construct:function(v){this.__nX=qx.dom.Node.getWindow(v);
this.__nY=v;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__nX,u,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},members:{__nX:null,__nY:null,_createContainerElement:function(){var c=this.__nY;

if(qx.core.Variant.isSet(m,q)){if(!c.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var h=c.documentElement.style;
var d=c.body.style;
h.overflow=d.overflow=n;
h.padding=h.margin=d.padding=d.margin=r;
h.width=h.height=d.width=d.height=k;
var g=c.createElement(l);
c.body.appendChild(g);
var f=new qx.html.Root(g);
f.setStyle(t,j);
f.setAttribute(p,this.toHashCode());
return f;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var a=qx.bom.Viewport.getWidth(this.__nX);
var b=qx.bom.Viewport.getHeight(this.__nX);
return {minWidth:a,width:a,maxWidth:a,minHeight:b,height:b,maxHeight:b};
}},destruct:function(){this._disposeFields(s,i);
}});
})();
(function(){var t="resize",s="px",r="zIndex",q="qx.ui.root.Page",p="backgroundColor",o="_applyOpacity",n="opacity",m="Number",l="interval",k="qx.ui.core.Blocker",f="__lx",j="__lB",h="__lD",d="__lz",c="Color",g="_applyColor";
qx.Class.define(k,{extend:qx.core.Object,construct:function(F){arguments.callee.base.call(this);
this._widget=F;
this._isPageRoot=(qx.Class.isDefined(q)&&F instanceof qx.ui.root.Page);

if(this._isPageRoot){F.addListener(t,this.__lE,this);
}},properties:{color:{check:c,init:null,nullable:true,apply:g,themeable:true},opacity:{check:m,init:1,apply:o,themeable:true}},members:{__lx:null,__ly:null,__lz:null,__lA:null,__lB:null,__lC:0,__lD:null,__lE:function(e){var u=e.getData();

if(this.isContentBlocked()){this._getContentBlocker().setStyles({width:u.width,height:u.height});
}
if(this.isBlocked()){this._getBlocker().setStyles({width:u.width,height:u.height});
}},_applyColor:function(z,A){var B=qx.theme.manager.Color.getInstance().resolve(z);
this.__lF(p,B);
},_applyOpacity:function(x,y){this.__lF(n,x);
},__lF:function(C,D){var E=[];
this.__lx&&E.push(this.__lx);
this.__lz&&E.push(this.__lz);

for(var i=0;i<E.length;i++){E[i].setStyle(C,D);
}},_saveAndSetAnonymousState:function(){this.__lC+=1;

if(this.__lC==1){this.__lB=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){this.__lC-=1;

if(this.__lC==0){this._widget.setAnonymous(this.__lB);
}},__lG:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){if(!this.__lx){this.__lx=this.__lG();
this.__lx.setStyle(r,15);
this._widget.getContainerElement().add(this.__lx);
this.__lx.exclude();
}return this.__lx;
},block:function(){if(this.__ly){return;
}this.__ly=true;
this._getBlocker().include();
this._saveAndSetAnonymousState();
},isBlocked:function(){return !!this.__ly;
},unblock:function(){if(!this.__ly){return;
}this.__ly=false;
this._restoreAnonymousState();
this._getBlocker().exclude();
},_getContentBlocker:function(){if(!this.__lz){this.__lz=this.__lG();
this._widget.getContentElement().add(this.__lz);
this.__lz.exclude();
}return this.__lz;
},blockContent:function(a){var b=this._getContentBlocker();
b.setStyle(r,a);

if(this.__lA){return;
}this.__lA=true;
b.include();

if(this._isPageRoot){if(!this.__lD){this.__lD=new qx.event.Timer(300);
this.__lD.addListener(l,this.__lH,this);
}this.__lD.start();
this.__lH();
}},isContentBlocked:function(){return !!this.__lA;
},unblockContent:function(){if(!this.__lA){return;
}this.__lA=false;
this._getContentBlocker().exclude();

if(this._isPageRoot){this.__lD.stop();
}},__lH:function(){var v=this._widget.getContainerElement().getDomElement();
var w=qx.dom.Node.getDocument(v);
this._getContentBlocker().setStyles({height:w.documentElement.scrollHeight+s,width:w.documentElement.scrollWidth+s});
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(t,this.__lE,this);
}this._disposeObjects(d,f,h);
this._disposeFields(j);
}});
})();
(function(){var k="100%",j="mshtml",i="repeat",h="url(",g=")",f="qx.html.Blocker",e="qx.client",d="qx/static/blank.gif",c="absolute";
qx.Class.define(f,{extend:qx.html.Element,construct:function(a,b){arguments.callee.base.call(this);
var a=a?qx.theme.manager.Color.getInstance().resolve(a):null;
this.setStyles({position:c,width:k,height:k,opacity:b||0,backgroundColor:a});
if(qx.core.Variant.isSet(e,j)){this.setStyles({backgroundImage:h+qx.util.ResourceManager.getInstance().toUri(d)+g,backgroundRepeat:i});
}}});
})();
(function(){var Y="keypress",X="focusout",W="__Y",V="__X",U="__bb",T="activate",S="__ba",R="Tab",Q="singleton",P="deactivate",N="focusin",O="qx.ui.core.FocusHandler";
qx.Class.define(O,{extend:qx.core.Object,type:Q,construct:function(){arguments.callee.base.call(this);
this.__X={};
},members:{__X:null,__Y:null,__ba:null,__bb:null,connectTo:function(bl){bl.addListener(Y,this.__bc,this);
bl.addListener(N,this._onFocusIn,this,true);
bl.addListener(X,this._onFocusOut,this,true);
bl.addListener(T,this._onActivate,this,true);
bl.addListener(P,this._onDeactivate,this,true);
},addRoot:function(ba){this.__X[ba.$$hash]=ba;
},removeRoot:function(bk){delete this.__X[bk.$$hash];
},getActiveWidget:function(){return this.__Y;
},isActive:function(c){return this.__Y==c;
},getFocusedWidget:function(){return this.__ba;
},isFocused:function(a){return this.__ba==a;
},isFocusRoot:function(bf){return !!this.__X[bf.$$hash];
},_onActivate:function(e){var f=e.getTarget();
this.__Y=f;
var d=this.__bd(f);

if(d!=this.__bb){this.__bb=d;
}},_onDeactivate:function(e){var H=e.getTarget();

if(this.__Y==H){this.__Y=null;
}},_onFocusIn:function(e){var b=e.getTarget();

if(b!=this.__ba){this.__ba=b;
b.visualizeFocus();
}},_onFocusOut:function(e){var K=e.getTarget();

if(K==this.__ba){this.__ba=null;
K.visualizeBlur();
}},__bc:function(e){if(e.getKeyIdentifier()!=R){return;
}
if(!this.__bb){return;
}e.stopPropagation();
e.preventDefault();
var I=this.__ba;

if(!e.isShiftPressed()){var J=I?this.__bh(I):this.__bf();
}else{var J=I?this.__bi(I):this.__bg();
}if(J){J.tabFocus();
}},__bd:function(L){var M=this.__X;

while(L){if(M[L.$$hash]){return L;
}L=L.getLayoutParent();
}return null;
},__be:function(w,x){if(w===x){return 0;
}var z=w.getTabIndex()||0;
var y=x.getTabIndex()||0;

if(z!=y){return z-y;
}var E=w.getContainerElement().getDomElement();
var D=x.getContainerElement().getDomElement();
var C=qx.bom.element.Location;
var B=C.get(E);
var A=C.get(D);
if(B.top!=A.top){return B.top-A.top;
}if(B.left!=A.left){return B.left-A.left;
}var F=w.getZIndex();
var G=x.getZIndex();

if(F!=G){return F-G;
}return 0;
},__bf:function(){return this.__bl(this.__bb,null);
},__bg:function(){return this.__bm(this.__bb,null);
},__bh:function(bb){var bc=this.__bb;

if(bc==bb){return this.__bf();
}
while(bb&&bb.getAnonymous()){bb=bb.getLayoutParent();
}
if(bb==null){return [];
}var bd=[];
this.__bj(bc,bb,bd);
bd.sort(this.__be);
var be=bd.length;
return be>0?bd[0]:this.__bf();
},__bi:function(s){var t=this.__bb;

if(t==s){return this.__bg();
}
while(s&&s.getAnonymous()){s=s.getLayoutParent();
}
if(s==null){return [];
}var u=[];
this.__bk(t,s,u);
u.sort(this.__be);
var v=u.length;
return v>0?u[v-1]:this.__bg();
},__bj:function(parent,bg,bh){var bi=parent.getLayoutChildren();
var bj;

for(var i=0,l=bi.length;i<l;i++){bj=bi[i];
if(!(bj instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bj)&&bj.isEnabled()&&bj.isVisible()){if(bj.isTabable()&&this.__be(bg,bj)<0){bh.push(bj);
}this.__bj(bj,bg,bh);
}}},__bk:function(parent,k,m){var n=parent.getLayoutChildren();
var o;

for(var i=0,l=n.length;i<l;i++){o=n[i];
if(!(o instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(o)&&o.isEnabled()&&o.isVisible()){if(o.isTabable()&&this.__be(k,o)>0){m.push(o);
}this.__bk(o,k,m);
}}},__bl:function(parent,p){var q=parent.getLayoutChildren();
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];
if(!(r instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(r)&&r.isEnabled()&&r.isVisible()){if(r.isTabable()){if(p==null||this.__be(r,p)<0){p=r;
}}p=this.__bl(r,p);
}}return p;
},__bm:function(parent,g){var h=parent.getLayoutChildren();
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];
if(!(j instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(j)&&j.isEnabled()&&j.isVisible()){if(j.isTabable()){if(g==null||this.__be(j,g)>0){g=j;
}}g=this.__bm(j,g);
}}return g;
}},destruct:function(){this._disposeMap(V);
this._disposeFields(S,W,U);
}});
})();
(function(){var D="qx.client",C="head",B="text/css",A="stylesheet",z="}",y='@import "',x="{",w='";',v="qx.bom.Stylesheet",u="link",t="style";
qx.Class.define(v,{statics:{includeFile:function(e,f){if(!f){f=document;
}var g=f.createElement(u);
g.type=B;
g.rel=A;
g.href=qx.util.ResourceManager.getInstance().toUri(e);
var h=f.getElementsByTagName(C)[0];
h.appendChild(g);
},createElement:qx.core.Variant.select(D,{"mshtml":function(U){var V=document.createStyleSheet();

if(U){V.cssText=U;
}return V;
},"default":function(E){var F=document.createElement(t);
F.type=B;

if(E){F.appendChild(document.createTextNode(E));
}document.getElementsByTagName(C)[0].appendChild(F);
return F.sheet;
}}),addRule:qx.core.Variant.select(D,{"mshtml":function(W,X,Y){W.addRule(X,Y);
},"default":function(ba,bb,bc){ba.insertRule(bb+x+bc+z,ba.cssRules.length);
}}),removeRule:qx.core.Variant.select(D,{"mshtml":function(J,K){var L=J.rules;
var M=L.length;

for(var i=M-1;i>=0;--i){if(L[i].selectorText==K){J.removeRule(i);
}}},"default":function(a,b){var c=a.cssRules;
var d=c.length;

for(var i=d-1;i>=0;--i){if(c[i].selectorText==b){a.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(D,{"mshtml":function(l){var m=l.rules;
var n=m.length;

for(var i=n-1;i>=0;i--){l.removeRule(i);
}},"default":function(R){var S=R.cssRules;
var T=S.length;

for(var i=T-1;i>=0;i--){R.deleteRule(i);
}}}),addImport:qx.core.Variant.select(D,{"mshtml":function(o,p){o.addImport(p);
},"default":function(j,k){j.insertRule(y+k+w,j.cssRules.length);
}}),removeImport:qx.core.Variant.select(D,{"mshtml":function(N,O){var P=N.imports;
var Q=P.length;

for(var i=Q-1;i>=0;i--){if(P[i].href==O){N.removeImport(i);
}}},"default":function(bd,be){var bf=bd.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(D,{"mshtml":function(q){var r=q.imports;
var s=r.length;

for(var i=s-1;i>=0;i--){q.removeImport(i);
}},"default":function(G){var H=G.cssRules;
var I=H.length;

for(var i=I-1;i>=0;i--){if(H[i].type==H[i].IMPORT_RULE){G.deleteRule(i);
}}}})}});
})();
(function(){var u="number",t="qx.ui.layout.Canvas";
qx.Class.define(t,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
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
}},_computeSizeHint:function(){var r=0,q=0;
var o=0,m=0;
var j,h;
var g,e;
var a=this._getLayoutChildren();
var d,p,c;
var s,top,b,f;

for(var i=0,l=a.length;i<l;i++){d=a[i];
p=d.getLayoutProperties();
c=d.getSizeHint();
var n=d.getMarginLeft()+d.getMarginRight();
var k=d.getMarginTop()+d.getMarginBottom();
j=c.width+n;
h=c.minWidth+n;
s=p.left!=null?p.left:p.edge;

if(s&&typeof s===u){j+=s;
h+=s;
}b=p.right!=null?p.right:p.edge;

if(b&&typeof b===u){j+=b;
h+=b;
}r=Math.max(r,j);
q=Math.max(q,h);
g=c.height+k;
e=c.minHeight+k;
top=p.top!=null?p.top:p.edge;

if(top&&typeof top===u){g+=top;
e+=top;
}f=p.bottom!=null?p.bottom:p.edge;

if(f&&typeof f===u){g+=f;
e+=f;
}o=Math.max(o,g);
m=Math.max(m,e);
}return {width:r,minWidth:q,height:o,minHeight:m};
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
(function(){var be="_applyLayoutChange",bd="top",bc="left",bb="middle",ba="Decorator",Y="center",X="_applyReversed",W="bottom",V="__dT",U="qx.ui.layout.VBox",R="__dW",T="__dU",S="Integer",Q="right",P="Boolean";
qx.Class.define(U,{extend:qx.ui.layout.Abstract,construct:function(bl,bm,bn){arguments.callee.base.call(this);

if(bl){this.setSpacing(bl);
}
if(bm){this.setAlignY(bm);
}
if(bn){this.setSeparator(bn);
}},properties:{alignY:{check:[bd,bb,W],init:bd,apply:be},alignX:{check:[bc,Y,Q],init:bc,apply:be},spacing:{check:S,init:0,apply:be},separator:{check:ba,nullable:true,apply:be},reversed:{check:P,init:false,apply:X}},members:{__dT:null,__dU:null,__dV:null,__dW:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__dX:function(){var bk=this._getLayoutChildren();
var length=bk.length;
var bg=false;
var bf=this.__dT&&this.__dT.length!=length&&this.__dU&&this.__dT;
var bi;
var bh=bf?this.__dT:new Array(length);
var bj=bf?this.__dU:new Array(length);
if(this.getReversed()){bk=bk.concat().reverse();
}for(var i=0;i<length;i++){bi=bk[i].getLayoutProperties();

if(bi.height!=null){bh[i]=parseFloat(bi.height)/100;
}
if(bi.flex!=null){bj[i]=bi.flex;
bg=true;
}}if(!bf){this.__dT=bh;
this.__dU=bj;
}this.__dV=bg;
this.__dW=bk;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(r,s){if(this._invalidChildrenCache){this.__dX();
}var z=this.__dW;
var length=z.length;
var J=qx.ui.layout.Util;
var I=this.getSpacing();
var M=this.getSeparator();

if(M){var w=J.computeVerticalSeparatorGaps(z,I,M);
}else{var w=J.computeVerticalGaps(z,I,true);
}var i,u,v,D;
var E=[];
var K=w;

for(i=0;i<length;i+=1){D=this.__dT[i];
v=D!=null?Math.floor((s-w)*D):z[i].getSizeHint().height;
E.push(v);
K+=v;
}if(this.__dV&&K!=s){var B={};
var H,L;

for(i=0;i<length;i+=1){H=this.__dU[i];

if(H>0){A=z[i].getSizeHint();
B[i]={min:A.minHeight,value:E[i],max:A.maxHeight,flex:H};
}}var x=J.computeFlexOffsets(B,s,K);

for(i in x){L=x[i].offset;
E[i]+=L;
K+=L;
}}var top=z[0].getMarginTop();
if(K<s&&this.getAlignY()!=bd){top=s-K;

if(this.getAlignY()===bb){top=Math.round(top/2);
}}var A,O,F,v,C,G,y;
this._clearSeparators();
if(M){var N=qx.theme.manager.Decoration.getInstance().resolve(M).getInsets();
var t=N.top+N.bottom;
}for(i=0;i<length;i+=1){u=z[i];
v=E[i];
A=u.getSizeHint();
G=u.getMarginLeft();
y=u.getMarginRight();
F=Math.max(A.minWidth,Math.min(r-G-y,A.maxWidth));
O=J.computeHorizontalAlignOffset(u.getAlignX()||this.getAlignX(),F,r,G,y);
if(i>0){if(M){top+=C+I;
this._renderSeparator(M,{top:top,left:0,height:t,width:r});
top+=t+I+u.getMarginTop();
}else{top+=J.collapseMargins(I,C,u.getMarginTop());
}}u.renderLayout(O,top,F,v);
top+=v;
C=u.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__dX();
}var g=qx.ui.layout.Util;
var q=this.__dW;
var c=0,f=0,e=0;
var a=0,h=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
f+=b.height;
var m=this.__dU[i];
var d=this.__dT[i];

if(m){c+=b.minHeight;
}else if(d){e=Math.max(e,Math.round(b.minHeight/d));
}else{c+=b.height;
}p=n.getMarginLeft()+n.getMarginRight();
if((b.width+p)>h){h=b.width+p;
}if((b.minWidth+p)>a){a=b.minWidth+p;
}}c+=e;
var k=this.getSpacing();
var o=this.getSeparator();

if(o){var j=g.computeVerticalSeparatorGaps(q,k,o);
}else{var j=g.computeVerticalGaps(q,k,true);
}return {minHeight:c+j,height:f+j,minWidth:a,width:h};
}},destruct:function(){this._disposeFields(V,T,R);
}});
})();
(function(){var g="String",f="qx.ui.embed.AbstractIframe",e="name",d="",c="_applySource",b="qx.event.type.Event",a="_applyFrameName";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(h){arguments.callee.base.call(this);

if(h){this.setSource(h);
}},events:{"load":b},properties:{source:{check:g,apply:c,nullable:true},frameName:{check:g,init:d,apply:a}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(k,l){this._getIframeElement().setSource(k);
},_applyFrameName:function(i,j){this._getIframeElement().setAttribute(e,i);
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
(function(){var p="display",o="mousedown",n="qx.client",m="contextmenu",l="load",k="help",j="mouseup",i="losecapture",h="none",g="repeat",I="Boolean",H="height",G="px",F="url(",E=")",D="div",C="_applyNativeHelp",B="width",A="zIndex",z="__l",w="top",x="mshtml",u="block",v="qx.ui.embed.Iframe",s="position",t="iframe",q="left",r="absolute",y="qx/static/blank.gif";
qx.Class.define(v,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(L){if(L!=null){this.__k=L;
}arguments.callee.base.call(this,L);
qx.event.Registration.addListener(document.body,o,this.block,this,true);
qx.event.Registration.addListener(document.body,j,this.release,this,true);
qx.event.Registration.addListener(document.body,i,this.release,this,true);
this.__l=this._createBlockerElement();
this.getContainerElement().add(this.__l);
},properties:{appearance:{refine:true,init:t},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:I,init:false,apply:C}},members:{__k:null,__l:null,renderLayout:function(N,top,O,P){arguments.callee.base.call(this,N,top,O,P);
var R=G;
var Q=this.getInsets();
this.__l.setStyle(q,Q.left+R);
this.__l.setStyle(w,Q.top+R);
this.__l.setStyle(B,(O-Q.left-Q.right)+R);
this.__l.setStyle(H,(P-Q.top-Q.bottom)+R);
},_createContentElement:function(){var a=new qx.html.Iframe(this.__k);
a.addListener(l,this._onIframeLoad,this);
return a;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var M=new qx.html.Element(D);
M.setStyle(A,20);
M.setStyle(s,r);
M.setStyle(p,h);
if(qx.core.Variant.isSet(n,x)){M.setStyles({backgroundImage:F+qx.util.ResourceManager.getInstance().toUri(y)+E,backgroundRepeat:g});
}return M;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(l);
},block:function(){this.__l.setStyle(p,u);
},release:function(){this.__l.setStyle(p,h);
},_applyNativeContextMenu:function(b,c){if(b!==false&&c!==false){return;
}var d=this.getDocument();

if(!d){return;
}
try{var f=d.documentElement;
}catch(e){return ;
}
if(c===false){qx.event.Registration.removeListener(f,m,this._onNativeContextMenu,this,true);
}
if(b===false){qx.event.Registration.addListener(f,m,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(J,K){var document=this.getDocument();

if(!document){return;
}
try{if(K===false){qx.bom.Event.removeNativeListener(document,k,qx.lang.Function.returnFalse);
}
if(J===false){qx.bom.Event.addNativeListener(document,k,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}})},destruct:function(){this._disposeObjects(z);
qx.event.Registration.removeListener(document.body,o,this.block,this,true);
qx.event.Registration.removeListener(document.body,j,this.release,this,true);
qx.event.Registration.removeListener(document.body,i,this.release,this,true);
}});
})();
(function(){var f="source",e="name",d="qx.html.Iframe",c="qx.event.type.Event",b="iframe";
qx.Class.define(d,{extend:qx.html.Element,construct:function(a){arguments.callee.base.call(this,b);
this._setProperty(f,a);
},events:{"load":c},members:{_applyProperty:function(name,i){arguments.callee.base.call(this,name,i);

if(name==f){var j=this.getDomElement();
qx.bom.Iframe.setSource(j,i);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var g=this.getDomElement();

if(g){return qx.bom.Iframe.getWindow(g);
}else{return null;
}},getDocument:function(){var k=this.getDomElement();

if(k){return qx.bom.Iframe.getDocument(k);
}else{return null;
}},getBody:function(){var h=this.getDomElement();

if(h){return qx.bom.Iframe.getBody(h);
}else{return null;
}},setSource:function(n){this._setProperty(f,n);
return this;
},getSource:function(){return this._getProperty(f);
},setName:function(name){this.setAttribute(e,name);
return this;
},getName:function(){return this.getAttribute(e);
},reload:function(){var m=this.getDomElement();

if(m){var l=this.getSource();
this.setSource(null);
this.setSource(l);
}}}});
})();
(function(){var g="qx.event.handler.Iframe",f="load",e="iframe";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(d){qx.event.Registration.fireEvent(d,f);
})},members:{canHandleEvent:function(l,m){return l.tagName.toLowerCase()===e;
},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var q="0",p="qx.client",o="qx.bom.Iframe",n="webkit",m="qx.event.handler.Iframe.onevent(this)",l="true",k="iframe",j="body";
qx.Class.define(o,{statics:{create:function(h,i){var h=h?qx.lang.Object.clone(h):{};
h.onload=m;
h.frameBorder=q;
h.frameSpacing=q;
h.marginWidth=q;
h.marginHeight=q;
h.hspace=q;
h.vspace=q;
h.border=q;
h.allowTransparency=l;
return qx.bom.Element.create(k,h,i);
},getWindow:qx.core.Variant.select(p,{"mshtml|gecko":function(y){try{return y.contentWindow;
}catch(D){return null;
}},"default":function(s){try{var t=this.getDocument(s);
return t?t.defaultView:null;
}catch(E){return null;
}}}),getDocument:qx.core.Variant.select(p,{"mshtml":function(A){try{var B=this.getWindow(A);
return B?B.document:null;
}catch(g){return null;
}},"default":function(r){try{return r.contentDocument;
}catch(C){return null;
}}}),getBody:function(e){try{var f=this.getDocument(e);
return f?f.getElementsByTagName(j)[0]:null;
}catch(u){return null;
}},setSource:function(v,w){try{if(this.getWindow(v)&&qx.dom.Hierarchy.isRendered(v)){try{if(qx.core.Variant.isSet(p,n)&&qx.bom.client.Platform.MAC){var x=this.getContentWindow();

if(x){x.stop();
}}this.getWindow(v).location.replace(w);
}catch(a){v.src=w;
}}else{v.src=w;
}}catch(z){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(b){var c=this.getDocument(b);

try{if(c&&c.location){return c.location.href;
}}catch(d){}return null;
}}});
})();
(function(){var m="=",l="",k=";path=",j=";domain=",i=";expires=Thu, 01-Jan-1970 00:00:01 GMT",h="qx.bom.Cookie",g=";expires=",f=";",e=";secure";
qx.Class.define(h,{statics:{get:function(n){var o=document.cookie.indexOf(n+m);
var q=o+n.length+1;

if((!o)&&(n!=document.cookie.substring(0,n.length))){return null;
}
if(o==-1){return null;
}var p=document.cookie.indexOf(f,q);

if(p==-1){p=document.cookie.length;
}return unescape(document.cookie.substring(q,p));
},set:function(r,s,t,u,v,w){var x=[r,m,escape(s)];

if(t){var y=new Date();
y.setTime(y.getTime());
x.push(g,new Date(y.getTime()+(t*1000*60*60*24)).toGMTString());
}
if(u){x.push(k,u);
}
if(v){x.push(j,v);
}
if(w){x.push(e);
}document.cookie=x.join(l);
},del:function(a,b,c){if(!qx.bom.Cookie.get(a)){return;
}var d=[a,m];

if(b){d.push(k,b);
}
if(c){d.push(j,c);
}d.push(i);
document.cookie=d.join(l);
}}});
})();
(function(){var z="click",w="black",v="",u="red",t="inspector.components.Selector",s="qx.ui.root.Application",r="mousemove",q="changeSelection",p="solid";
qx.Class.define(t,{extend:qx.core.Object,construct:function(m){arguments.callee.base.call(this);
this.setJSWindow(m);
},properties:{selection:{event:q,nullable:true}},members:{setJSWindow:function(E){this._iFrameWindow=E;
this._addedWidgets=[];
this._root=this._iFrameWindow.qx.core.Init.getApplication().getRoot();
this._createCatchClickLayer();
this._createHighlightStuff();
this.setSelection(null);
},getAddedWidgets:function(){return this._addedWidgets;
},start:function(){this._catchClickLayer.show();
},end:function(){this._catchClickLayer.hide();
},highlightFor:function(n,o){if(n.classname==s){return;
}this._highlight(n);
if(this._highlightTimerId!=null){window.clearTimeout(this._highlightTimerId);
}var self=this;
self._highlightTimerId=window.setTimeout(function(){self._highlightOverlay.hide();
self._highlightTimerId=null;
},o);
},_createCatchClickLayer:function(){this._catchClickLayer=new this._iFrameWindow.qx.ui.core.Widget();
this._addedWidgets.push(this._catchClickLayer);
this._catchClickLayer.setBackgroundColor(w);
this._catchClickLayer.setOpacity(0.1);
this._catchClickLayer.setZIndex(1e6-1);
this._catchClickLayer.hide();
this._root.add(this._catchClickLayer,{left:0,top:0,right:0,bottom:0});
this._catchClickLayer.addListener(z,function(e){this._catchClickLayer.hide();
var j=e.getDocumentLeft();
var k=e.getDocumentTop();
var l=this._searchWidget(this._root,j,k);
this._highlightOverlay.hide();
this.setSelection(l);
},this);
this._catchClickLayer.addListener(r,function(e){var A=e.getDocumentLeft();
var B=e.getDocumentTop();
var C=this._searchWidget(this._root,A,B,v);
this._highlight(C);
},this);
},_createHighlightStuff:function(){this._highlightDecorator=new this._iFrameWindow.qx.ui.decoration.Single(2,p,u);
this._addedWidgets.push(this._highlightDecorator);
this._highlightOverlay=new this._iFrameWindow.qx.ui.core.Widget();
this._addedWidgets.push(this._highlightOverlay);
this._highlightOverlay.setDecorator(this._highlightDecorator);
this._highlightOverlay.setZIndex(1e6-2);
this._highlightOverlay.hide();
this._root.add(this._highlightOverlay);
},_searchWidget:function(a,x,y){var b=a;
for(var i=0;i<a._getChildren().length;i++){var d=a._getChildren()[i];
if(d==this._catchClickLayer||d==this._highlightOverlay){continue;
}try{if(d instanceof this._iFrameWindow.qx.ui.core.Spacer){continue;
}}catch(D){}if(d.getContainerElement){var f=d.getContainerElement().getDomElement();
}else if(d.getDomElement){var f=d.getDomElement();
}else{return d;
}var c=this._getCoordinates(f);
if(c!=null){if(c.right>=x&&c.left<=x&&c.bottom>=y&&c.top<=y){b=this._searchWidget(d,x,y);
}}}return b;
},_getCoordinates:function(g){if(g==null){return null;
}var h={};
h.left=qx.bom.element.Location.getLeft(g);
h.right=qx.bom.element.Location.getRight(g);
h.top=qx.bom.element.Location.getTop(g);
h.bottom=qx.bom.element.Location.getBottom(g);
return h;
},_highlight:function(F){var J=null;

if(F.getContainerElement&&F.getContainerElement().getDomElement){J=F.getContainerElement().getDomElement();
}else if(F.getDomElement){J=F.getDomElement();
}if(J==null){this._highlightOverlay.hide();
return;
}var I=this._getCoordinates(J);
var K=I.left-2;
var G=I.right+2;
var top=I.top-2;
var H=I.bottom+2;
this._highlightOverlay.renderLayout(K,top,G-K,H-top);
this._highlightOverlay.show();
}}});
})();
(function(){var o="both",n="qx.ui.menu.Menu",m="_applySpacing",k="icon",j="label",h="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",e="toolbar",d="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:e},openMenu:{check:n,event:d,nullable:true},show:{init:o,check:[o,j,k],inheritable:true,event:h},spacing:{nullable:true,check:g,themeable:true,apply:m}},members:{_applySpacing:function(p,q){var r=this._getLayout();
p==null?r.resetSpacing():r.setSpacing(p);
},addSpacer:function(){var s=new qx.ui.core.Spacer;
this._add(s,{flex:1});
return s;
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
(function(){var O="_applyLayoutChange",N="left",M="center",L="top",K="Decorator",J="__eN",I="middle",H="__eO",G="_applyReversed",F="__eQ",C="bottom",E="Boolean",D="right",B="Integer",A="qx.ui.layout.HBox";
qx.Class.define(A,{extend:qx.ui.layout.Abstract,construct:function(V,W,X){arguments.callee.base.call(this);

if(V){this.setSpacing(V);
}
if(W){this.setAlignX(W);
}
if(X){this.setSeparator(X);
}},properties:{alignX:{check:[N,M,D],init:N,apply:O},alignY:{check:[L,I,C],init:L,apply:O},spacing:{check:B,init:0,apply:O},separator:{check:K,nullable:true,apply:O},reversed:{check:E,init:false,apply:G}},members:{__eN:null,__eO:null,__eP:null,__eQ:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__eR:function(){var U=this._getLayoutChildren();
var length=U.length;
var R=false;
var P=this.__eN&&this.__eN.length!=length&&this.__eO&&this.__eN;
var S;
var Q=P?this.__eN:new Array(length);
var T=P?this.__eO:new Array(length);
if(this.getReversed()){U=U.concat().reverse();
}for(var i=0;i<length;i++){S=U[i].getLayoutProperties();

if(S.width!=null){Q[i]=parseFloat(S.width)/100;
}
if(S.flex!=null){T[i]=S.flex;
R=true;
}}if(!P){this.__eN=Q;
this.__eO=T;
}this.__eP=R;
this.__eQ=U;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(a,b){if(this._invalidChildrenCache){this.__eR();
}var h=this.__eQ;
var length=h.length;
var s=qx.ui.layout.Util;
var r=this.getSpacing();
var v=this.getSeparator();

if(v){var e=s.computeHorizontalSeparatorGaps(h,r,v);
}else{var e=s.computeHorizontalGaps(h,r,true);
}var i,c,p,o;
var u=[];
var j=e;

for(i=0;i<length;i+=1){o=this.__eN[i];
p=o!=null?Math.floor((a-e)*o):h[i].getSizeHint().width;
u.push(p);
j+=p;
}if(this.__eP&&j!=a){var m={};
var q,t;

for(i=0;i<length;i+=1){q=this.__eO[i];

if(q>0){k=h[i].getSizeHint();
m[i]={min:k.minWidth,value:u[i],max:k.maxWidth,flex:q};
}}var f=s.computeFlexOffsets(m,a,j);

for(i in f){t=f[i].offset;
u[i]+=t;
j+=t;
}}var z=h[0].getMarginLeft();
if(j<a&&this.getAlignX()!=N){z=a-j;

if(this.getAlignX()===M){z=Math.round(z/2);
}}var k,top,d,p,g,x,n;
var r=this.getSpacing();
this._clearSeparators();
if(v){var w=qx.theme.manager.Decoration.getInstance().resolve(v).getInsets();
var y=w.left+w.right;
}for(i=0;i<length;i+=1){c=h[i];
p=u[i];
k=c.getSizeHint();
x=c.getMarginTop();
n=c.getMarginBottom();
d=Math.max(k.minHeight,Math.min(b-x-n,k.maxHeight));
top=s.computeVerticalAlignOffset(c.getAlignY()||this.getAlignY(),d,b,x,n);
if(i>0){if(v){z+=g+r;
this._renderSeparator(v,{left:z,top:0,width:y,height:b});
z+=y+r+c.getMarginLeft();
}else{z+=s.collapseMargins(r,g,c.getMarginLeft());
}}c.renderLayout(z,top,p,d);
z+=p;
g=c.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__eR();
}var bf=qx.ui.layout.Util;
var bn=this.__eQ;
var Y=0,bg=0,bd=0;
var bc=0,be=0;
var bk,ba,bm;
for(var i=0,l=bn.length;i<l;i+=1){bk=bn[i];
ba=bk.getSizeHint();
bg+=ba.width;
var bj=this.__eO[i];
var bb=this.__eN[i];

if(bj){Y+=ba.minWidth;
}else if(bb){bd=Math.max(bd,Math.round(ba.minWidth/bb));
}else{Y+=ba.width;
}bm=bk.getMarginTop()+bk.getMarginBottom();
if((ba.height+bm)>be){be=ba.height+bm;
}if((ba.minHeight+bm)>bc){bc=ba.minHeight+bm;
}}Y+=bd;
var bi=this.getSpacing();
var bl=this.getSeparator();

if(bl){var bh=bf.computeHorizontalSeparatorGaps(bn,bi,bl);
}else{var bh=bf.computeHorizontalGaps(bn,bi,true);
}return {minWidth:Y+bh,width:bg+bh,minHeight:bc,height:be};
}},destruct:function(){this._disposeFields(J,H,F);
}});
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
(function(){var i="changeEnabled",h="qx.ui.core.MExecutable",g="qx.event.Command",f="qx.event.type.Event",d="changeCommand",c="_applyCommand",b="execute";
qx.Mixin.define(h,{events:{"execute":f},properties:{command:{check:g,apply:c,event:d,nullable:true}},members:{execute:function(){var a=this.getCommand();

if(a){a.execute(this);
}this.fireEvent(b);
},_applyCommand:function(j,k){if(k){k.removeListener(i,this._onChangeEnabledCommand,this);
}
if(j){j.addListener(i,this._onChangeEnabledCommand,this);

if(this.getEnabled()===false){j.setEnabled(false);
}else if(j.getEnabled()===false){this.setEnabled(false);
}}},_onChangeEnabledCommand:function(e){this.setEnabled(e.getData());
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.MFormElement";
qx.Mixin.define(a,{events:{"changeName":b},members:{__ik:null,setName:function(name){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
if(name!=null&&!qx.lang.Type.isString(name)){throw new Error("Please use strings for the name property.");
return;
}var d=this.__ik;
this.__ik=name;
this.fireDataEvent(qx.event.type.Data,name,d);
},getName:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return this.__ik;
},resetName:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var c=this.__ik;
this.__ik=null;
this.fireDataEvent(qx.event.type.Data,null,c);
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IFormElement",a="boolean";
qx.Interface.define(b,{events:{"changeValue":c,"changeName":c,"changeEnabled":c},members:{setEnabled:function(d){this.assertType(d,a);
},getEnabled:function(){},setName:function(e){this.assertString(e);
},getName:function(){},setValue:function(f){return arguments.length==1;
},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var x="pressed",w="abandoned",v="hovered",u="changeValue",t="qx.ui.form.Button",s="Enter",r="Space",q="dblclick",p="mouseup",o="mousedown",j="The value property will be removed.",n="mouseover",m="mouseout",i="keydown",h="button",l="keyup",k="qx.event.type.Data";
qx.Class.define(t,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable,qx.ui.form.MFormElement],implement:[qx.ui.form.IFormElement,qx.ui.form.IExecutable],construct:function(a,b,c){arguments.callee.base.call(this,a,b);

if(c!=null){this.setCommand(c);
}this.addListener(n,this._onMouseOver);
this.addListener(m,this._onMouseOut);
this.addListener(o,this._onMouseDown);
this.addListener(p,this._onMouseUp);
this.addListener(i,this._onKeyDown);
this.addListener(l,this._onKeyUp);
this.addListener(q,this._onStopEvent);
},events:{"changeValue":k},properties:{appearance:{refine:true,init:h},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(w)){return;
}this.addState(x);
},release:function(){if(this.hasState(x)){this.removeState(x);
}},reset:function(){this.removeState(x);
this.removeState(w);
this.removeState(v);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(w)){this.removeState(w);
this.addState(x);
}this.addState(v);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(v);

if(this.hasState(x)){this.removeState(x);
this.addState(w);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(w);
this.addState(x);
},_onMouseUp:function(e){this.releaseCapture();
var A=this.hasState(x);
var B=this.hasState(w);

if(A){this.removeState(x);
}
if(B){this.removeState(w);
}else{this.addState(v);

if(A){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case s:case r:this.removeState(w);
this.addState(x);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case s:case r:if(this.hasState(x)){this.removeState(w);
this.removeState(x);
this.execute();
e.stopPropagation();
}}},__iN:null,setValue:function(y){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
var z=this.__iN;
this.__iN=y;
this.fireDataEvent(u,y,z);
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return this.__iN;
},resetValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this.__iN=null;
},addListener:function(d,f,self,g){if(d==u&&this.classname==t){qx.log.Logger.deprecatedEventWarning(arguments.callee,u,j);
}return arguments.callee.base.call(this,d,f,self,g);
}}});
})();
(function(){var p="pressed",o="hovered",n="changeVisibility",m="qx.ui.menu.Menu",l="Enter",k="changeMenu",j="qx.ui.form.MenuButton",i="abandoned",h="_applyMenu";
qx.Class.define(j,{extend:qx.ui.form.Button,construct:function(s,t,u){arguments.callee.base.call(this,s,t);
if(u!=null){this.setMenu(u);
}},properties:{menu:{check:m,nullable:true,apply:h,event:k}},members:{_applyMenu:function(a,b){if(b){b.removeListener(n,this._onMenuChange,this);
b.resetOpener();
}
if(a){a.addListener(n,this._onMenuChange,this);
a.setOpener(this);
}},open:function(c){var d=this.getMenu();

if(d){qx.ui.menu.Manager.getInstance().hideAll();
d.open();
if(c){var f=d.getChildren()[0];

if(f){d.setSelectedButton(f);
}}}},_onMenuChange:function(e){var q=this.getMenu();

if(q.isVisible()){this.addState(p);
}else{this.removeState(p);
}},_onMouseDown:function(e){var r=this.getMenu();

if(r){if(!r.isVisible()){this.open();
}else{r.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(o);
},_onMouseOut:function(e){this.removeState(o);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:this.removeState(i);
this.addState(p);
var g=this.getMenu();

if(g){if(!g.isVisible()){this.open();
}else{g.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var i="pressed",h="hovered",g="inherit",f="qx.ui.menubar.Button",d="Please use 'getMenuBar' to access the connected menubar widget",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(f,{extend:qx.ui.form.MenuButton,construct:function(j,k,l){arguments.callee.base.call(this,j,k,l);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:g},focusable:{refine:true,init:false}},members:{getToolBar:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},_onMenuChange:function(e){var m=this.getMenu();
var menubar=this.getMenuBar();

if(m.isVisible()){this.addState(i);
if(menubar){menubar.setOpenMenu(m);
}}else{this.removeState(i);
if(menubar&&menubar.getOpenMenu()==m){menubar.resetOpenMenu();
}}},_onMouseOver:function(e){this.addState(h);
if(this.getMenu()){var menubar=this.getMenuBar();
var open=menubar.getOpenMenu();

if(open&&open!=this.getMenu()){qx.ui.menu.Manager.getInstance().hideAll();
this.open();
}}}}});
})();
(function(){var bb="mouseup",ba="keypress",Y="mousedown",X="interval",W="keydown",V="keyup",U="Enter",T="__jM",S="__jK",R="__jL",L="Up",Q="Escape",O="blur",K="qx.ui.menu.Manager",J="Left",N="Down",M="Right",P="singleton",I="Space";
qx.Class.define(K,{type:P,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jK=[];
var bE=qx.core.Init.getApplication().getRoot();
var bD=document.body;
var bF=qx.event.Registration;
bE.addListener(Y,this._onMouseDown,this,true);
bE.addListener(bb,this._onMouseUp,this);
bF.addListener(window.document.documentElement,bb,this._onMouseUp,this);
bF.addListener(bD,W,this._onKeyUpDown,this,true);
bF.addListener(bD,V,this._onKeyUpDown,this,true);
bF.addListener(bD,ba,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,O,this.hideAll,this);
this.__jL=new qx.event.Timer;
this.__jL.addListener(X,this._onOpenInterval,this);
this.__jM=new qx.event.Timer;
this.__jM.addListener(X,this._onCloseInterval,this);
},members:{__jN:null,__jO:null,__jL:null,__jM:null,__jK:null,_getChild:function(bj,bk,bl,bm){var bn=bj.getChildren();
var length=bn.length;
var bo;

for(var i=bk;i<length&&i>=0;i+=bl){bo=bn[i];

if(bo.isEnabled()&&!bo.isAnonymous()){return bo;
}}
if(bm){i=i==length?0:length-1;

for(;i!=bk;i+=bl){bo=bn[i];

if(bo.isEnabled()&&!bo.isAnonymous()){return bo;
}}}return null;
},_isInMenu:function(d){while(d){if(d instanceof qx.ui.menu.Menu){return true;
}d=d.getLayoutParent();
}return false;
},_getMenuButton:function(f){while(f){if(f instanceof qx.ui.menu.AbstractButton){return f;
}f=f.getLayoutParent();
}return null;
},add:function(p){{};
var q=this.__jK;
q.push(p);
p.setZIndex(1e6+q.length);
},remove:function(b){{};
var c=this.__jK;

if(c){qx.lang.Array.remove(c,b);
}},hideAll:function(){var r=this.__jK;

if(r){for(var i=r.length-1;i>=0;i--){r[i].exclude();
}}},getActiveMenu:function(){var E=this.__jK;
return E.length>0?E[E.length-1]:null;
},scheduleOpen:function(a){this.cancelClose(a);
if(a.isVisible()){if(this.__jN){this.cancelOpen(this.__jN);
}}else if(this.__jN!=a){this.__jN=a;
this.__jL.restartWith(a.getOpenInterval());
}},scheduleClose:function(F){this.cancelOpen(F);
if(!F.isVisible()){if(this.__jO){this.cancelClose(this.__jO);
}}else if(this.__jO!=F){this.__jO=F;
this.__jM.restartWith(F.getCloseInterval());
}},cancelOpen:function(bG){if(this.__jN==bG){this.__jL.stop();
this.__jN=null;
}},cancelClose:function(z){if(this.__jO==z){this.__jM.stop();
this.__jO=null;
}},_onOpenInterval:function(e){this.__jL.stop();
this.__jN.open();
this.__jN=null;
},_onCloseInterval:function(e){this.__jM.stop();
this.__jO.exclude();
this.__jO=null;
},_onMouseDown:function(e){var A=e.getTarget();
if(A.getMenu&&A.getMenu()&&A.getMenu().isVisible()){return;
}if(this.__jK.length>0&&!this._isInMenu(A)){this.hideAll();
}},_onMouseUp:function(e){var H=e.getTarget();
var G;

if(H instanceof qx.ui.core.Widget){G=H;
}else{G=qx.ui.core.Widget.getWidgetByElement(H);
}if(!(G instanceof qx.ui.menu.Menu)){G=this._getMenuButton(G);

if(G!=null&&G instanceof qx.ui.menu.AbstractButton&&!G.isEnabled()){return;
}this.hideAll();
}},__jP:{"Enter":1,"Space":1},__jQ:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var x=this.getActiveMenu();

if(!x){return;
}var y=e.getKeyIdentifier();

if(this.__jQ[y]||(this.__jP[y]&&x.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var g=this.getActiveMenu();

if(!g){return;
}var h=e.getKeyIdentifier();
var k=this.__jQ[h];
var j=this.__jP[h];

if(k){switch(h){case L:this._onKeyPressUp(g);
break;
case N:this._onKeyPressDown(g);
break;
case J:this._onKeyPressLeft(g);
break;
case M:this._onKeyPressRight(g);
break;
case Q:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(j){var l=g.getSelectedButton();

if(l){switch(h){case U:this._onKeyPressEnter(g,l,e);
break;
case I:this._onKeyPressSpace(g,l,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(s){var t=s.getSelectedButton();
var u=s.getChildren();
var w=t?s.indexOf(t)-1:u.length-1;
var v=this._getChild(s,w,-1,true);
if(v){s.setSelectedButton(v);
}else{s.resetSelectedButton();
}},_onKeyPressDown:function(bc){var bd=bc.getSelectedButton();
var bf=bd?bc.indexOf(bd)+1:0;
var be=this._getChild(bc,bf,1,true);
if(be){bc.setSelectedButton(be);
}else{bc.resetSelectedButton();
}},_onKeyPressLeft:function(bx){var bA=bx.getOpener();

if(!bA){return;
}if(bA instanceof qx.ui.menu.Button){var bC=bA.getLayoutParent();
bC.resetOpenedButton();
bC.setSelectedButton(bA);
}else if(bA instanceof qx.ui.menubar.Button){var by=bA.getMenuBar().getMenuButtons();
var bz=by.indexOf(bA);
if(bz===-1){return;
}var bB=bz==0?by[by.length-1]:by[bz-1];

if(bB!=bA){bB.open(true);
}}},_onKeyPressRight:function(bp){var br=bp.getSelectedButton();
if(br){var bq=br.getMenu();

if(bq){bp.setOpenedButton(br);
var bw=this._getChild(bq,0,1);

if(bw){bq.setSelectedButton(bw);
}return;
}}else if(!bp.getOpenedButton()){var bw=this._getChild(bp,0,1);

if(bw){bp.setSelectedButton(bw);

if(bw.getMenu()){bp.setOpenedButton(bw);
}return;
}}var bu=bp.getOpener();
if(bu instanceof qx.ui.menu.Button&&br){while(bu){bu=bu.getLayoutParent();

if(bu instanceof qx.ui.menu.Menu){bu=bu.getOpener();

if(bu instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bu){return;
}}if(bu instanceof qx.ui.menubar.Button){var bt=bu.getMenuBar().getMenuButtons();
var bs=bt.indexOf(bu);
if(bs===-1){return;
}var bv=bt[bs+1];

if(!bv){bv=bt[0];
}
if(bv!=bu){bv.open(true);
}}},_onKeyPressEnter:function(m,n,e){if(n.hasListener(ba)){var o=e.clone();
o.setBubbles(false);
o.setTarget(n);
n.dispatchEvent(o);
}this.hideAll();
},_onKeyPressSpace:function(bg,bh,e){if(bh.hasListener(ba)){var bi=e.clone();
bi.setBubbles(false);
bi.setTarget(bh);
bh.dispatchEvent(bi);
}}},destruct:function(){var D=qx.event.Registration;
var B=document.body;
var C=qx.core.Init.getApplication().getRoot();
C.removeListener(Y,this._onMouseDown,this,true);
C.removeListener(bb,this._onMouseUp,this);
D.removeListener(window.document.documentElement,bb,this._onMouseUp,this);
D.removeListener(B,W,this._onKeyUpDown,this,true);
D.removeListener(B,V,this._onKeyUpDown,this,true);
D.removeListener(B,ba,this._onKeyPress,this,true);
this._disposeObjects(R,T);
this._disposeArray(S);
}});
})();
(function(){var p="Integer",o="qx.ui.core.Widget",n="selected",m="visible",l="Boolean",k="mouseout",j="excluded",i="menu",h="_applySelectedButton",g="_applySpacingY",C="_blocker",B="_applyCloseInterval",A="_applyBlockerColor",z="_applyIconColumnWidth",y="mouseover",x="_applyArrowColumnWidth",w="qx.ui.menu.Menu",v="Color",u="Number",t="_applyOpenInterval",r="_applySpacingX",s="_applyBlockerOpacity",q="_applyOpenedButton";
qx.Class.define(w,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
this.getApplicationRoot().add(this);
this.addListener(y,this._onMouseOver);
this.addListener(k,this._onMouseOut);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
var J=qx.core.Init.getApplication().getRoot();
this._blocker=new qx.ui.core.Blocker(J);
},properties:{appearance:{refine:true,init:i},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:j},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:p,apply:r,init:0,themeable:true},spacingY:{check:p,apply:g,init:0,themeable:true},iconColumnWidth:{check:p,init:0,themeable:true,apply:z},arrowColumnWidth:{check:p,init:0,themeable:true,apply:x},blockerColor:{check:v,init:null,nullable:true,apply:A,themeable:true},blockerOpacity:{check:u,init:1,apply:s,themeable:true},selectedButton:{check:o,nullable:true,apply:h},openedButton:{check:o,nullable:true,apply:q},opener:{check:o,nullable:true},openInterval:{check:p,themeable:true,init:250,apply:t},closeInterval:{check:p,themeable:true,init:250,apply:B},blockBackground:{check:l,themeable:true,init:false}},members:{__jn:null,_blocker:null,show:function(){arguments.callee.base.call(this);

if(this.getBlockBackground()){var c=this.getZIndex();
this._blocker.blockContent(c-1);
}},hide:function(){arguments.callee.base.call(this);

if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}},exclude:function(){arguments.callee.base.call(this);

if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}},open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.show();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getLayout().getColumnSizes();
},_applyIconColumnWidth:function(a,b){this._getLayout().setIconColumnWidth(a);
},_applyArrowColumnWidth:function(d,f){this._getLayout().setArrowColumnWidth(d);
},_applySpacingX:function(F,G){this._getLayout().setColumnSpacing(F);
},_applySpacingY:function(K,L){this._getLayout().setSpacing(K);
},_applyVisibility:function(W,X){arguments.callee.base.call(this,W,X);
var Y=qx.ui.menu.Manager.getInstance();

if(W===m){Y.add(this);
var opener=this.getOpener();

if(opener){var ba=opener.getLayoutParent();

if(ba&&ba instanceof qx.ui.menu.Menu){ba.setOpenedButton(opener);
}}}else if(X===m){Y.remove(this);
var opener=this.getOpener();

if(opener){var ba=opener.getLayoutParent();

if(ba&&ba instanceof qx.ui.menu.Menu&&ba.getOpenedButton()==opener){ba.resetOpenedButton();
}}this.resetOpenedButton();
this.resetSelectedButton();
}},_applySelectedButton:function(Q,R){if(R){R.removeState(n);
}
if(Q){Q.addState(n);
}},_applyOpenedButton:function(S,T){if(T){T.getMenu().exclude();
}
if(S){S.getMenu().open();
}},_applyBlockerColor:function(H,I){this._blocker.setColor(H);
},_applyBlockerOpacity:function(U,V){this._blocker.setOpacity(U);
},_onMouseOver:function(e){var N=qx.ui.menu.Manager.getInstance();
N.cancelClose(this);
var O=e.getTarget();

if(O.isEnabled()&&O instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(O);
var M=O.getMenu&&O.getMenu();

if(M){N.scheduleOpen(M);
this.__jn=M;
}else{var P=this.getOpenedButton();

if(P){N.scheduleClose(P.getMenu());
}
if(this.__jn){N.cancelOpen(this.__jn);
this.__jn=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var D=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var E=this.getOpenedButton();
E?this.setSelectedButton(E):this.resetSelectedButton();
if(E){D.cancelClose(E.getMenu());
}if(this.__jn){D.cancelOpen(this.__jn);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this._disposeObjects(C);
}});
})();
(function(){var q="Integer",p="_applyLayoutChange",o="__my",n="qx.ui.menu.Layout";
qx.Class.define(n,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:q,init:0,apply:p},spanColumn:{check:q,init:1,nullable:true,apply:p},iconColumnWidth:{check:q,init:0,themeable:true,apply:p},arrowColumnWidth:{check:q,init:0,themeable:true,apply:p}},members:{__my:null,_computeSizeHint:function(){var m=this._getLayoutChildren();
var k,d,f;
var b=this.getSpanColumn();
var e=this.__my=[0,0,0,0];
var h=this.getColumnSpacing();
var g=0;
var c=0;
for(var i=0,l=m.length;i<l;i++){k=m[i];

if(k.isAnonymous()){continue;
}d=k.getChildrenSizes();

for(var j=0;j<d.length;j++){if(b!=null&&j==b&&d[b+1]==0){g=Math.max(g,d[j]);
}else{e[j]=Math.max(e[j],d[j]);
}}var a=m[i].getInsets();
c=Math.max(c,a.left+a.right);
}if(b!=null&&e[b]+h+e[b+1]<g){e[b]=g-e[b+1]-h;
}if(g==0){f=h*2;
}else{f=h*3;
}if(e[0]==0){e[0]=this.getIconColumnWidth();
}if(e[3]==0){e[3]=this.getArrowColumnWidth();
}return {height:arguments.callee.base.call(this).height,width:qx.lang.Array.sum(e)+c+f};
},getColumnSizes:function(){return this.__my||null;
}},destruct:function(){this._disposeFields(o);
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var s="icon",r="label",q="arrow",p="shortcut",o="submenu",n="String",m="qx.ui.menu.Menu",l="qx.ui.menu.AbstractButton",k="keypress",j="_applyIcon",g="mouseup",i="abstract",h="_applyLabel",f="_applyMenu";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:i,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(g,this._onMouseUp);
this.addListener(k,this._onKeyPress);
},properties:{label:{check:n,apply:h,nullable:true},menu:{check:m,apply:f,nullable:true},icon:{check:n,apply:j,themeable:true,nullable:true}},members:{_createChildControlImpl:function(t){var u;

switch(t){case s:u=new qx.ui.basic.Image;
u.setAnonymous(true);
this._add(u,{column:0});
break;
case r:u=new qx.ui.basic.Label;
u.setAnonymous(true);
this._add(u,{column:1});
break;
case p:u=new qx.ui.basic.Label;
u.setAnonymous(true);
this._add(u,{column:2});
break;
case q:u=new qx.ui.basic.Image;
u.setAnonymous(true);
this._add(u,{column:3});
break;
}return u||arguments.callee.base.call(this,t);
},_forwardStates:{selected:1},getChildrenSizes:function(){var v=0,w=0,x=0,B=0;

if(this._isChildControlVisible(s)){var C=this.getChildControl(s);
v=C.getMarginLeft()+C.getSizeHint().width+C.getMarginRight();
}
if(this._isChildControlVisible(r)){var z=this.getChildControl(r);
w=z.getMarginLeft()+z.getSizeHint().width+z.getMarginRight();
}
if(this._isChildControlVisible(p)){var y=this.getChildControl(p);
x=y.getMarginLeft()+y.getSizeHint().width+y.getMarginRight();
}
if(this._isChildControlVisible(q)){var A=this.getChildControl(q);
B=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}return [v,w,x,B];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_applyIcon:function(a,b){if(a){this._showChildControl(s).setSource(a);
}else{this._excludeChildControl(s);
}},_applyLabel:function(D,E){if(D){this._showChildControl(r).setValue(D);
}else{this._excludeChildControl(r);
}},_applyMenu:function(c,d){if(d){d.resetOpener();
d.removeState(o);
}
if(c){this._showChildControl(q);
c.setOpener(this);
c.addState(o);
}else{this._excludeChildControl(q);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var q=this._getLayoutChildren();
var p;
var g;
var h=[];

for(var i=0,l=q.length;i<l;i++){p=q[i];
g=p.getLayoutProperties().column;
h[g]=p;
}var o=q[0].getLayoutParent().getLayoutParent();
var r=o.getColumnSizes();
var k=o.getSpacingX();
var j=qx.lang.Array.sum(r)+k*(r.length-1);

if(j<d){r[1]+=d-j;
}var s=0,top=0;
var m=qx.ui.layout.Util;

for(var i=0,l=r.length;i<l;i++){p=h[i];

if(p){var f=p.getSizeHint();
var top=m.computeVerticalAlignOffset(p.getAlignY()||c,f.height,e,0,0);
var n=m.computeHorizontalAlignOffset(p.getAlignX()||a,f.width,r[i],p.getMarginLeft(),p.getMarginRight());
p.renderLayout(s+n,top,f.width,f.height);
}s+=r[i]+k;
}},_computeSizeHint:function(){var v=this._getLayoutChildren();
var u=0;
var w=0;

for(var i=0,l=v.length;i<l;i++){var t=v[i].getSizeHint();
w+=t.width;
u=Math.max(u,t.height);
}return {width:w,height:u};
}}});
})();
(function(){var h="changeLocale",g="qx.dynlocale",f="on",d="shortcut",c="menu-button",b="qx.ui.menu.Button",a="changeCommand";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(l,m,n,o){arguments.callee.base.call(this);
this.addListener(a,this._onChangeCommand,this);
if(l!=null){this.setLabel(l);
}
if(m!=null){this.setIcon(m);
}
if(n!=null){this.setCommand(n);
}
if(o!=null){this.setMenu(o);
}},properties:{appearance:{refine:true,init:c}},members:{_onChangeCommand:function(e){var k=e.getData();

if(qx.core.Variant.isSet(g,f)){var j=e.getOldData();

if(!j){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
}
if(!k){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}}this.getChildControl(d).setValue(k.toString());
},_onChangeLocale:qx.core.Variant.select(g,{"on":function(e){var i=this.getCommand();

if(i!=null){this.getChildControl(d).setValue(i.toString());
}},"off":null}),_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){e.stopPropagation();
}}},_onKeyPress:function(e){this.execute();
}},destruct:function(){if(qx.core.Variant.isSet(g,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}}});
})();
(function(){var d="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(b,c){return this.getChildrenContainer().add(b,c);
},remove:function(a){return this.getChildrenContainer().remove(a);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(i){return this.getChildrenContainer().indexOf(i);
},addAt:function(e,f,g){this.getChildrenContainer().addAt(e,f,g);
},addBefore:function(m,n,o){this.getChildrenContainer().addBefore(m,n,o);
},addAfter:function(j,k,l){this.getChildrenContainer().addAfter(j,k,l);
},removeAt:function(h){this.getChildrenContainer().removeAt(h);
}}});
})();
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(n){var o;

switch(n){case k:o=new qx.ui.basic.Image();
o.setAlignY(g);
this._add(o);
break;
case m:o=new qx.ui.toolbar.PartContainer;
this._add(o);
break;
}return o||arguments.callee.base.call(this,n);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(s,t){var u=this.getChildControl(m).getLayout();
s==null?u.resetSpacing():u.setSpacing(s);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var q=this.getChildren();
var p=[];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r instanceof qx.ui.menubar.Button){p.push(r);
}}return p;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var y="Boolean",x="Please use the properties 'resizableTop', 'resizableRight', 'resizableBottom', 'resizableLeft' separately.",w="__I",v="mouseup",u="mousedown",t="losecapture",s="resizableBottom",r="mouseout",q="resizableRight",p="resizableLeft",m="mousemove",o="shorthand",n="resizableTop",l="Integer",k="qx.ui.core.MResizable";
qx.Mixin.define(k,{construct:function(){this.addListener(u,this.__S,this,true);
this.addListener(v,this.__T,this);
this.addListener(m,this.__V,this);
this.addListener(r,this.__W,this);
this.addListener(t,this.__U,this);
},properties:{resizableTop:{check:y,init:true},resizableRight:{check:y,init:true},resizableBottom:{check:y,init:true},resizableLeft:{check:y,init:true},resizable:{group:[n,q,s,p],mode:o},resizeSensitivity:{check:l,init:5},useResizeFrame:{check:y,init:true}},members:{__I:null,__J:null,__K:null,__L:null,__M:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,getResizeAllEdges:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,x);
return (this.getResizableTop()&&this.getResizableRight()&&this.getResizableBottom()&&this.getResizableLeft());
},setResizeAllEdges:function(G){qx.log.Logger.deprecatedMethodWarning(arguments.callee,x);
this.set({resizableTop:G,resizableRight:true,resizableBottom:true,resizableLeft:G});
},__N:function(){var i=this.__I;

if(!i){i=this.__I=new qx.ui.core.Widget();
i.setAppearance("resize-frame");
i.exclude();
qx.core.Init.getApplication().getRoot().add(i);
}return i;
},__O:function(){var h=this.__M;
var g=this.__N();
g.setUserBounds(h.left,h.top,h.width,h.height);
g.show();
g.setZIndex(this.getZIndex()+1);
},__P:function(e){var A=this.__J;
var B=this.getSizeHint();
var D=this.__M;
var z=D.width;
var C=D.height;
var F=D.left;
var top=D.top;
var E;

if((A&this.RESIZE_TOP)||(A&this.RESIZE_BOTTOM)){E=e.getDocumentTop()-this.__L;

if(A&this.RESIZE_TOP){C-=E;
}else{C+=E;
}
if(C<B.minHeight){C=B.minHeight;
}else if(C>B.maxHeight){C=B.maxHeight;
}
if(A&this.RESIZE_TOP){top+=D.height-C;
}}
if((A&this.RESIZE_LEFT)||(A&this.RESIZE_RIGHT)){E=e.getDocumentLeft()-this.__K;

if(A&this.RESIZE_LEFT){z-=E;
}else{z+=E;
}
if(z<B.minWidth){z=B.minWidth;
}else if(z>B.maxWidth){z=B.maxWidth;
}
if(A&this.RESIZE_LEFT){F+=D.width-z;
}}return {viewportLeft:F,viewportTop:top,parentLeft:D.bounds.left+F-D.left,parentTop:D.bounds.top+top-D.top,width:z,height:C};
},__Q:{1:"n-resize",2:"s-resize",4:"w-resize",8:"e-resize",5:"nw-resize",6:"sw-resize",9:"ne-resize",10:"se-resize"},__R:function(e){var c=this.getContentLocation();
var a=this.getResizeSensitivity();
var f=e.getDocumentLeft();
var d=e.getDocumentTop();
var b=0;

if(this.getResizableTop()&&Math.abs(c.top-d)<a){b+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(c.bottom-d)<a){b+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(c.left-f)<a){b+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(c.right-f)<a){b+=this.RESIZE_RIGHT;
}this.__J=b;
},__S:function(e){if(!this.__J){return;
}this.addState("resize");
this.capture();
this.__K=e.getDocumentLeft();
this.__L=e.getDocumentTop();
var location=this.getContainerLocation();
var H=this.getBounds();
this.__M={top:location.top,left:location.left,width:H.width,height:H.height,bounds:qx.lang.Object.clone(H)};
if(this.getUseResizeFrame()){this.__O();
}e.stop();
},__T:function(e){if(!this.__J){return;
}if(this.getUseResizeFrame()){this.__N().exclude();
}var j=this.__P(e);
this.setWidth(j.width);
this.setHeight(j.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:j.parentLeft,top:j.parentTop});
}this.__J=0;
this.removeState("resize");
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
},__U:function(e){if(!this.__J){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState("move");
if(this.getUseResizeFrame()){this.__N().exclude();
}},__V:function(e){if(this.hasState("resize")){var L=this.__P(e);
if(this.getUseResizeFrame()){var J=this.__N();
J.setUserBounds(L.viewportLeft,L.viewportTop,L.width,L.height);
}else{this.setWidth(L.width);
this.setHeight(L.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:L.parentLeft,top:L.parentTop});
}}e.stop();
}else if(!this.hasState("maximized")){this.__R(e);
var M=this.__J;
var K=this.getApplicationRoot();

if(M){var I=this.__Q[M];
this.setCursor(I);
K.setGlobalCursor(I);
}else if(this.getCursor()){this.resetCursor();
K.resetGlobalCursor();
}}},__W:function(e){if(this.getCursor()&&!this.hasState("resize")){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){this._disposeObjects(w);
}});
})();
(function(){var w="move",v="Boolean",u="mouseup",t="mousedown",s="losecapture",r="__s",q="qx.ui.core.MMovable",p="__r",o="mousemove",n="maximized",m="__t";
qx.Mixin.define(q,{properties:{movable:{check:v,init:true},useMoveFrame:{check:v,init:false}},members:{__r:null,__s:null,__t:null,__u:null,__v:null,__w:null,__x:null,__y:false,__z:null,__A:0,_activateMoveHandle:function(l){if(this.__r){throw new Error("The move handle could not be redefined!");
}this.__r=l;
l.addListener(t,this._onMoveMouseDown,this);
l.addListener(u,this._onMoveMouseUp,this);
l.addListener(o,this._onMoveMouseMove,this);
l.addListener(s,this.__E,this);
},__B:function(){var x=this.__s;

if(!x){x=this.__s=new qx.ui.core.Widget();
x.setAppearance("move-frame");
x.exclude();
qx.core.Init.getApplication().getRoot().add(x);
}return x;
},__C:function(){var location=this.getContainerLocation();
var b=this.getBounds();
var a=this.__B();
a.setUserBounds(location.left,location.top,b.width,b.height);
a.show();
a.setZIndex(this.getZIndex()+1);
},__D:function(e){var h=this.__t;
var k=Math.max(h.left,Math.min(h.right,e.getDocumentLeft()));
var j=Math.max(h.top,Math.min(h.bottom,e.getDocumentTop()));
var g=this.__u+k;
var i=this.__v+j;
return {viewportLeft:g,viewportTop:i,parentLeft:g-this.__w,parentTop:i-this.__x};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(n)){return;
}var parent=this.getLayoutParent();
var d=parent.getContentLocation();
var f=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__y=true;
this.__z=parent.getBlockerColor();
this.__A=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__t={left:d.left,top:d.top,right:d.left+f.width,bottom:d.top+f.height};
var c=this.getContainerLocation();
this.__w=d.left;
this.__x=d.top;
this.__u=c.left-e.getDocumentLeft();
this.__v=c.top-e.getDocumentTop();
this.addState(w);
this.__r.capture();
if(this.getUseMoveFrame()){this.__C();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(w)){return;
}var y=this.__D(e);

if(this.getUseMoveFrame()){this.__B().setDomPosition(y.viewportLeft,y.viewportTop);
}else{this.setDomPosition(y.parentLeft,y.parentTop);
}},_onMoveMouseUp:function(e){if(!this.hasState(w)){return;
}this.removeState(w);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__y){parent.unblockContent();
parent.setBlockerColor(this.__z);
parent.setBlockerOpacity(this.__A);
this.__z=null;
this.__A=0;
}}this.__r.releaseCapture();
var z=this.__D(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__B().exclude();
}},__E:function(e){if(!this.hasState("move")){return;
}this.removeState("move");
if(this.getUseMoveFrame()){this.__B().exclude();
}}},destruct:function(){this._disposeObjects(r,p);
this._disposeFields(m);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__is:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__it:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__it[name];
s[t]();
}else{var u=this.__is[name];
s[u](q);
}}}});
})();
(function(){var b="qx.ui.window.IWindowManager";
qx.Interface.define(b,{members:{setDesktop:function(a){this.assertInterface(a,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);
}}});
})();
(function(){var e="__H",d="qx.ui.window.Manager";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__H:null,setDesktop:function(p){this.__H=p;
this.updateStack();
},getDesktop:function(){return this.__H;
},changeActiveWindow:function(q,r){if(q){this.bringToFront(q);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__H.unblockContent();
var k=this.__H.getWindows();
var o=this._minZIndex-1;
var n=false;
var m,j=null;

for(var i=0,l=k.length;i<l;i++){m=k[i];

if(!m.isVisible()){continue;
}o+=2;
m.setZIndex(o);
if(m.getModal()){this.__H.blockContent(o-1);
}n=n||m.isActive();
j=m;
}
if(!n){this.__H.setActiveWindow(j);
}},bringToFront:function(f){var g=this.__H.getWindows();
var h=qx.lang.Array.remove(g,f);

if(h){g.push(f);
this.updateStack();
}},sendToBack:function(a){var b=this.__H.getWindows();
var c=qx.lang.Array.remove(b,a);

if(c){b.unshift(a);
this.updateStack();
}}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var y="Boolean",x="qx.event.type.Event",w="captionbar",v="maximize-button",u="_applyCaptionBarChange",t="restore-button",s="minimize-button",r="close-button",q="execute",p="pane",bg="title",bf="icon",be="maximized",bd="statusbar-text",bc="statusbar",bb="String",ba="active",Y="beforeClose",X="beforeMinimize",W="mousedown",F="changeStatus",G="changeIcon",D="excluded",E="_applyCaption",B="_applyActive",C="beforeRestore",z="normal",A="minimize",H="dblclick",I="changeModal",O="_applyShowStatusbar",N="_applyStatus",Q="qx.ui.window.Window",P="changeCaption",S="_applyIcon",R="focusout",K="beforeMaximize",V="maximize",U="restore",T="window",J="close",L="changeActive",M="minimized";
qx.Class.define(Q,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(g,h){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(w);
this._createChildControl(p);
if(h!=null){this.setIcon(h);
}
if(g!=null){this.setCaption(g);
}this._updateCaptionBar();
this.addListener(W,this._onWindowMouseDown,this,true);
this.addListener(R,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":x,"close":x,"beforeMinimize":x,"minimize":x,"beforeMaximize":x,"maximize":x,"beforeRestore":x,"restore":x},properties:{appearance:{refine:true,init:T},visibility:{refine:true,init:D},focusable:{refine:true,init:true},active:{check:y,init:false,apply:B,event:L},modal:{check:y,init:false,event:I},caption:{apply:E,event:P,nullable:true},icon:{check:bb,nullable:true,apply:S,event:G,themeable:true},status:{check:bb,nullable:true,apply:N,event:F},showClose:{check:y,init:true,apply:u,themeable:true},showMaximize:{check:y,init:true,apply:u,themeable:true},showMinimize:{check:y,init:true,apply:u,themeable:true},allowClose:{check:y,init:true,apply:u},allowMaximize:{check:y,init:true,apply:u},allowMinimize:{check:y,init:true,apply:u},showStatusbar:{check:y,init:false,apply:O}},members:{__F:null,__G:null,getChildrenContainer:function(){return this.getChildControl(p);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(k){var l;

switch(k){case bc:l=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(l);
l.add(this.getChildControl(bd));
break;
case bd:l=new qx.ui.basic.Label();
l.setValue(this.getStatus());
break;
case p:l=new qx.ui.container.Composite();
this._add(l,{flex:1});
break;
case w:var n=new qx.ui.layout.Grid();
n.setRowFlex(0,1);
n.setColumnFlex(1,1);
l=new qx.ui.container.Composite(n);
this._add(l);
l.addListener(H,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(l);
break;
case bf:l=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(w).add(l,{row:0,column:0});
break;
case bg:l=new qx.ui.basic.Label(this.getCaption());
l.setWidth(0);
l.setAllowGrowX(true);
var m=this.getChildControl(w);
m.add(l,{row:0,column:1});
break;
case s:l=new qx.ui.form.Button();
l.setFocusable(false);
l.addListener(q,this._onMinimizeButtonClick,this);
this.getChildControl(w).add(l,{row:0,column:2});
break;
case t:l=new qx.ui.form.Button();
l.setFocusable(false);
l.addListener(q,this._onRestoreButtonClick,this);
this.getChildControl(w).add(l,{row:0,column:3});
break;
case v:l=new qx.ui.form.Button();
l.setFocusable(false);
l.addListener(q,this._onMaximizeButtonClick,this);
this.getChildControl(w).add(l,{row:0,column:4});
break;
case r:l=new qx.ui.form.Button();
l.setFocusable(false);
l.addListener(q,this._onCloseButtonClick,this);
this.getChildControl(w).add(l,{row:0,column:6});
break;
}return l||arguments.callee.base.call(this,k);
},_updateCaptionBar:function(){var bm;

if(this.getIcon()){this._showChildControl(bf);
}else{this._excludeChildControl(bf);
}
if(this.getCaption()){this._showChildControl(bg);
}else{this._excludeChildControl(bg);
}
if(this.getShowMinimize()){this._showChildControl(s);
bm=this.getChildControl(s);
this.getAllowMinimize()?bm.resetEnabled():bm.setEnabled(false);
}else{this._excludeChildControl(s);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(t);
this._excludeChildControl(v);
}else{this._showChildControl(v);
this._excludeChildControl(t);
}bm=this.getChildControl(v);
this.getAllowMaximize()?bm.resetEnabled():bm.setEnabled(false);
}else{this._excludeChildControl(v);
this._excludeChildControl(t);
}
if(this.getShowClose()){this._showChildControl(r);
bm=this.getChildControl(r);
this.getAllowClose()?bm.resetEnabled():bm.setEnabled(false);
}else{this._excludeChildControl(r);
}},close:function(){if(this.fireNonBubblingEvent(Y,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(J);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bo=parent.getBounds();

if(bo){var bp=this.getSizeHint();
var bn=Math.round((bo.width-bp.width)/2);
var top=Math.round((bo.height-bp.height)/2);

if(top<0){top=0;
}this.moveTo(bn,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(!parent){return;
}
if(parent.supportsMaximize()){if(this.fireNonBubblingEvent(K,qx.event.type.Event,[false,true])){var bl=this.getLayoutProperties();
this.__G=bl.left===undefined?0:bl.left;
this.__F=bl.top===undefined?0:bl.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(be);
this._updateCaptionBar();
this.fireEvent(V);
}}},minimize:function(){if(this.fireNonBubblingEvent(X,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(A);
}},restore:function(){if(!this.isMaximized()){return;
}
if(this.fireNonBubblingEvent(C,qx.event.type.Event,[false,true])){var o=this.__G;
var top=this.__F;
this.setLayoutProperties({edge:null,left:o,top:top});
this.removeState(be);
this._updateCaptionBar();
this.fireEvent(U);
}},moveTo:function(bq,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bq,top:top});
},isMaximized:function(){return this.hasState(be);
},getMode:function(){if(!this.isVisible()){return M;
}else{if(this.isMaximized()){return be;
}else{return z;
}}},_applyActive:function(i,j){if(j){this.removeState(ba);
}else{this.addState(ba);
}},_getContentPaddingTarget:function(){return this.getChildControl(p);
},_applyShowStatusbar:function(br,bs){if(br){this._showChildControl(bc);
}else{this._excludeChildControl(bc);
}},_applyCaptionBarChange:function(d,f){this._updateCaptionBar();
},_applyStatus:function(a,b){var c=this.getChildControl(bd,true);

if(c){c.setValue(a);
}},_applyCaption:function(bj,bk){this.getChildControl(bg).setValue(bj);
},_applyIcon:function(bh,bi){this.getChildControl(bf).setSource(bh);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bt=e.getRelatedTarget();

if(bt!=null&&!qx.ui.core.Widget.contains(this,bt)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(s).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(t).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(v).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(r).reset();
}}});
})();
(function(){var b="middle",a="inspector.components.AbstractWindow";
qx.Class.define(a,{extend:qx.ui.window.Window,construct:function(name){arguments.callee.base.call(this,name);
this.setLayout(new qx.ui.layout.VBox());
this.setWidth(300);
this.setHeight(200);
this.setContentPadding(0);
this.setShowMinimize(false);
this.setShowMaximize(false);
this._toolbar=new qx.ui.toolbar.ToolBar();
this._toolbar.setPaddingLeft(3);
this._toolbar.setPaddingRight(3);
this._toolbar._getLayout().setAlignY(b);
this.add(this._toolbar);
},members:{_toolbar:null,_iFrameWindow:null,setInitSizeAndPosition:function(){throw new Error("Abstract method call (setInitSizeAndPosition) in 'AbstractWindow'!");
}}});
})();
(function(){var k="",j="changeValue",h="inspector.objects.ObjectsWindow",g="icon/22/actions/view-refresh.png",f="changeSelection",d="Objects",c="execute";
qx.Class.define(h,{extend:inspector.components.AbstractWindow,construct:function(){arguments.callee.base.call(this,d);
this._reloadButton=new qx.ui.toolbar.Button(null,g);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(c,function(){this.load(null,this._filterTextField.getValue());
},this);
this._toolbar.add(new qx.ui.toolbar.Separator());
this._toolbar.addSpacer();
this._filterTextField=new qx.ui.form.TextField();
this._filterTextField.setLiveUpdate(true);
this._filterTextField.setMarginRight(5);
this._toolbar.add(this._filterTextField);
this._filterTextField.addListener(j,function(e){var o=qx.util.TimerManager.getInstance();
if(this.__m!=null){o.stop(this.__m);
this.__m=null;
}this.__m=o.start(function(){this.load(null,e.getData());
this.__m=null;
},0,this,null,200);
},this);
this._model=new qx.ui.table.model.Simple();
this._model.setColumns([k,k]);
this._table=new qx.ui.table.Table(this._model);
this._table.setDecorator(null);
this._table.setColumnVisibilityButtonVisible(false);
this._table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
this.add(this._table,{flex:1});
this._table.getSelectionModel().addListener(f,this._onChangeSelection,this);
this._table.getDataRowRenderer().setHighlightFocusRow(false);
this._modelRadio=new qx.ui.form.RadioGroup();
this._currentModel=null;
this._addModel(new inspector.objects.HashModel());
this._addModel(new inspector.objects.CountModel());
},members:{__m:null,_addModel:function(a){var b=new qx.ui.toolbar.RadioButton(a.getName());
this._toolbar.addAt(b,this._toolbar.getChildren().length-2);
this._modelRadio.add(b);
b.addListener(j,function(e){if(!e.getData()){return;
}this._currentModel=a;
this._model.setColumns(a.getColumns());
this.load();
if(a.selectionEnabled()){this._table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
this.select(qx.core.Init.getApplication().getSelectedObject());
}else{this._table.getSelectionModel().clearSelection();
this._table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.NO_SELECTION);
}this._filterTextField.setValue(k);
},this);
if(this._currentModel==null){this._currentModel=a;
this._model.setColumns(a.getColumns());
this._table.setColumnWidth(0,50);
this._table.setColumnWidth(1,230);
}},setInitSizeAndPosition:function(){var s=qx.bom.Viewport.getWidth()-this.getWidth();
var r=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(s,30);
this.setHeight(r);
},load:function(window,p){this._iFrameWindow=window||this._iFrameWindow;
var q=this._currentModel.getData(this._iFrameWindow);
if(p){q=this._filterData(q,p);
}this._table.getTableModel().setData(q);
},select:function(t){if(this._currentModel.selectionEnabled()){var v=this._table.getSelectionModel();
var u=this._table.getTableModel().getData();

for(var i=0;i<u.length;i++){if(u[i][0]==t.toHashCode()){v.clearSelection();
v.setSelectionInterval(i,i);
this._table.scrollCellVisible(0,i);
return;
}}}},_onChangeSelection:function(e){if(this._table.getSelectionModel().isSelectionEmpty()){return;
}
if(this._table.getSelectionModel().getSelectedRanges()[0]&&this._iFrameWindow){var w=this._table.getSelectionModel().getSelectedRanges()[0].minIndex;
var y=this._table.getTableModel().getData()[w];
var x=this._iFrameWindow.qx.core.ObjectRegistry.fromHashCode(y[0]);
qx.core.Init.getApplication().select(x,this);
}},_filterData:function(z,A){for(var i=z.length-1;i>=0;i--){if(z[i][0] instanceof String){if(z[i][0].search(A)==-1&&z[i][1].search(A)==-1){z.splice(i,1);
}}else{if(z[i][1].search(A)==-1){z.splice(i,1);
}}}return z;
},getSelection:function(){var n=this._table.getSelectionModel();
var l=n.getSelectedRanges().minIndex;

if(l){var m=this._table.getTableModel().getData()[l];
return qx.core.ObjectRegistry.fromHashCode(m[0]);
}return null;
}}});
})();
(function(){var c="qx.ui.window.IDesktop";
qx.Interface.define(c,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(a){this.assertInteger(a);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var bk="left",bj="top",bi="_applyLayoutChange",bh="hAlign",bg="flex",bf="vAlign",be="Integer",bd="__gs",bc="__gt",bb="minWidth",T="width",ba="minHeight",W="__gm",R="qx.ui.layout.Grid",Q="__gl",V="height",U="__gn",X="maxHeight",P="maxWidth",Y="__go",S="__gp";
qx.Class.define(R,{extend:qx.ui.layout.Abstract,construct:function(bQ,bR){arguments.callee.base.call(this);
this.__gl=[];
this.__gm=[];

if(bQ){this.setSpacingX(bQ);
}
if(bR){this.setSpacingY(bR);
}},properties:{spacingX:{check:be,init:0,apply:bi},spacingY:{check:be,init:0,apply:bi}},members:{__gn:null,__gl:null,__gm:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,verifyLayoutProperty:null,__gu:function(){var cc=[];
var cb=[];
var cd=[];
var bY=0;
var bX=0;
var cf=this._getLayoutChildren();

for(var i=0,l=cf.length;i<l;i++){var ca=cf[i];
var ce=ca.getLayoutProperties();
var cg=ce.row;
var bW=ce.column;
ce.colSpan=ce.colSpan||1;
ce.rowSpan=ce.rowSpan||1;
if(cg==null||bW==null){throw new Error("The layout properties 'row' and 'column' must be defined!");
}
if(cc[cg]&&cc[cg][bW]){throw new Error("There is already a widget in this cell ("+cg+", "+bW+")");
}
for(var x=bW;x<bW+ce.colSpan;x++){for(var y=cg;y<cg+ce.rowSpan;y++){if(cc[y]==undefined){cc[y]=[];
}cc[y][x]=ca;
bX=Math.max(bX,x);
bY=Math.max(bY,y);
}}
if(ce.rowSpan>1){cd.push(ca);
}
if(ce.colSpan>1){cb.push(ca);
}}for(var y=0;y<=bY;y++){if(cc[y]==undefined){cc[y]=[];
}}this.__gn=cc;
this.__go=cb;
this.__gp=cd;
this.__gq=bY;
this.__gr=bX;
this.__gs=null;
this.__gt=null;
delete this._invalidChildrenCache;
},_setRowData:function(bM,bN,bO){var bP=this.__gl[bM];

if(!bP){this.__gl[bM]={};
this.__gl[bM][bN]=bO;
}else{bP[bN]=bO;
}},_setColumnData:function(cy,cz,cA){var cB=this.__gm[cy];

if(!cB){this.__gm[cy]={};
this.__gm[cy][cz]=cA;
}else{cB[cz]=cA;
}},setSpacing:function(O){this.setSpacingY(O);
this.setSpacingX(O);
},setColumnAlign:function(n,o,p){{};
this._setColumnData(n,bh,o);
this._setColumnData(n,bf,p);
this._applyLayoutChange();
return this;
},getColumnAlign:function(ee){var ef=this.__gm[ee]||{};
return {vAlign:ef.vAlign||bj,hAlign:ef.hAlign||bk};
},setRowAlign:function(bJ,bK,bL){{};
this._setRowData(bJ,bh,bK);
this._setRowData(bJ,bf,bL);
this._applyLayoutChange();
return this;
},getRowAlign:function(bS){var bT=this.__gl[bS]||{};
return {vAlign:bT.vAlign||bj,hAlign:bT.hAlign||bk};
},getCellWidget:function(cu,cv){if(this._invalidChildrenCache){this.__gu();
}var cu=this.__gn[cu]||{};
return cu[cv]||null;
},getCellAlign:function(bl,bm){var bs=bj;
var bq=bk;
var br=this.__gl[bl];
var bo=this.__gm[bm];
var bn=this.__gn[bl][bm];

if(bn){var bp={vAlign:bn.getAlignY(),hAlign:bn.getAlignX()};
}else{bp={};
}if(bp.vAlign){bs=bp.vAlign;
}else if(br&&br.vAlign){bs=br.vAlign;
}else if(bo&&bo.vAlign){bs=bo.vAlign;
}if(bp.hAlign){bq=bp.hAlign;
}else if(bo&&bo.hAlign){bq=bo.hAlign;
}else if(br&&br.hAlign){bq=br.hAlign;
}return {vAlign:bs,hAlign:bq};
},setColumnFlex:function(cC,cD){this._setColumnData(cC,bg,cD);
this._applyLayoutChange();
return this;
},getColumnFlex:function(dO){var dP=this.__gm[dO]||{};
return dP.flex!==undefined?dP.flex:0;
},setRowFlex:function(cj,ck){this._setRowData(cj,bg,ck);
this._applyLayoutChange();
return this;
},getRowFlex:function(h){var k=this.__gl[h]||{};
var m=k.flex!==undefined?k.flex:0;
return m;
},setColumnMaxWidth:function(du,dv){this._setColumnData(du,P,dv);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(dq){var dr=this.__gm[dq]||{};
return dr.maxWidth!==undefined?dr.maxWidth:Infinity;
},setColumnWidth:function(eg,eh){this._setColumnData(eg,T,eh);
this._applyLayoutChange();
return this;
},getColumnWidth:function(cw){var cx=this.__gm[cw]||{};
return cx.width!==undefined?cx.width:null;
},setColumnMinWidth:function(dM,dN){this._setColumnData(dM,bb,dN);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bH){var bI=this.__gm[bH]||{};
return bI.minWidth||0;
},setRowMaxHeight:function(ec,ed){this._setRowData(ec,X,ed);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(ds){var dt=this.__gl[ds]||{};
return dt.maxHeight||Infinity;
},setRowHeight:function(bU,bV){this._setRowData(bU,V,bV);
this._applyLayoutChange();
return this;
},getRowHeight:function(ch){var ci=this.__gl[ch]||{};
return ci.height!==undefined?ci.height:null;
},setRowMinHeight:function(cs,ct){this._setRowData(cs,ba,ct);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(dK){var dL=this.__gl[dK]||{};
return dL.minHeight||0;
},__gv:function(cE){var cI=cE.getSizeHint();
var cH=cE.getMarginLeft()+cE.getMarginRight();
var cG=cE.getMarginTop()+cE.getMarginBottom();
var cF={height:cI.height+cG,width:cI.width+cH,minHeight:cI.minHeight+cG,minWidth:cI.minWidth+cH,maxHeight:cI.maxHeight+cG,maxWidth:cI.maxWidth+cH};
return cF;
},_fixHeightsRowSpan:function(bt){var bE=this.getSpacingY();

for(var i=0,l=this.__gp.length;i<l;i++){var bw=this.__gp[i];
var by=this.__gv(bw);
var bz=bw.getLayoutProperties();
var bv=bz.row;
var bC=bE*(bz.rowSpan-1);
var bu=bC;
var bB={};

for(var j=0;j<bz.rowSpan;j++){var bG=bz.row+j;
var bx=bt[bG];
var bF=this.getRowFlex(bG);

if(bF>0){bB[bG]={min:bx.minHeight,value:bx.height,max:bx.maxHeight,flex:bF};
}bC+=bx.height;
bu+=bx.minHeight;
}if(bC<by.height){var bD=qx.ui.layout.Util.computeFlexOffsets(bB,by.height,bC);

for(var j=0;j<bz.rowSpan;j++){var bA=bD[bv+j]?bD[bv+j].offset:0;
bt[bv+j].height+=bA;
}}if(bu<by.minHeight){var bD=qx.ui.layout.Util.computeFlexOffsets(bB,by.minHeight,bu);

for(var j=0;j<bz.rowSpan;j++){var bA=bD[bv+j]?bD[bv+j].offset:0;
bt[bv+j].minHeight+=bA;
}}}},_fixWidthsColSpan:function(dw){var dA=this.getSpacingX();

for(var i=0,l=this.__go.length;i<l;i++){var dx=this.__go[i];
var dz=this.__gv(dx);
var dC=dx.getLayoutProperties();
var dy=dC.column;
var dI=dA*(dC.colSpan-1);
var dB=dI;
var dD={};
var dF;

for(var j=0;j<dC.colSpan;j++){var dJ=dC.column+j;
var dH=dw[dJ];
var dG=this.getColumnFlex(dJ);
if(dG>0){dD[dJ]={min:dH.minWidth,value:dH.width,max:dH.maxWidth,flex:dG};
}dI+=dH.width;
dB+=dH.minWidth;
}if(dI<dz.width){var dE=qx.ui.layout.Util.computeFlexOffsets(dD,dz.width,dI);

for(var j=0;j<dC.colSpan;j++){dF=dE[dy+j]?dE[dy+j].offset:0;
dw[dy+j].width+=dF;
}}if(dB<dz.minWidth){var dE=qx.ui.layout.Util.computeFlexOffsets(dD,dz.minWidth,dB);

for(var j=0;j<dC.colSpan;j++){dF=dE[dy+j]?dE[dy+j].offset:0;
dw[dy+j].minWidth+=dF;
}}}},_getRowHeights:function(){if(this.__gs!=null){return this.__gs;
}var ea=[];
var dS=this.__gq;
var dR=this.__gr;

for(var eb=0;eb<=dS;eb++){var dT=0;
var dV=0;
var dU=0;

for(var dY=0;dY<=dR;dY++){var dQ=this.__gn[eb][dY];

if(!dQ){continue;
}var dW=dQ.getLayoutProperties().rowSpan||0;

if(dW>1){continue;
}var dX=this.__gv(dQ);

if(this.getRowFlex(eb)>0){dT=Math.max(dT,dX.minHeight);
}else{dT=Math.max(dT,dX.height);
}dV=Math.max(dV,dX.height);
}var dT=Math.max(dT,this.getRowMinHeight(eb));
var dU=this.getRowMaxHeight(eb);

if(this.getRowHeight(eb)!==null){var dV=this.getRowHeight(eb);
}else{var dV=Math.max(dT,Math.min(dV,dU));
}ea[eb]={minHeight:dT,height:dV,maxHeight:dU};
}
if(this.__gp.length>0){this._fixHeightsRowSpan(ea);
}this.__gs=ea;
return ea;
},_getColWidths:function(){if(this.__gt!=null){return this.__gt;
}var H=[];
var E=this.__gr;
var G=this.__gq;

for(var M=0;M<=E;M++){var K=0;
var J=0;
var F=Infinity;

for(var N=0;N<=G;N++){var D=this.__gn[N][M];

if(!D){continue;
}var I=D.getLayoutProperties().colSpan||0;

if(I>1){continue;
}var L=this.__gv(D);

if(this.getColumnFlex(M)>0){J=Math.max(J,L.minWidth);
}else{J=Math.max(J,L.width);
}K=Math.max(K,L.width);
}var J=Math.max(J,this.getColumnMinWidth(M));
var F=this.getColumnMaxWidth(M);

if(this.getColumnWidth(M)!==null){var K=this.getColumnWidth(M);
}else{var K=Math.max(J,Math.min(K,F));
}H[M]={minWidth:J,width:K,maxWidth:F};
}
if(this.__go.length>0){this._fixWidthsColSpan(H);
}this.__gt=H;
return H;
},_getColumnFlexOffsets:function(cl){var cm=this.getSizeHint();
var cq=cl-cm.width;

if(cq==0){return {};
}var co=this._getColWidths();
var cn={};

for(var i=0,l=co.length;i<l;i++){var cr=co[i];
var cp=this.getColumnFlex(i);

if((cp<=0)||(cr.width==cr.maxWidth&&cq>0)||(cr.width==cr.minWidth&&cq<0)){continue;
}cn[i]={min:cr.minWidth,value:cr.width,max:cr.maxWidth,flex:cp};
}return qx.ui.layout.Util.computeFlexOffsets(cn,cl,cm.width);
},_getRowFlexOffsets:function(a){var b=this.getSizeHint();
var e=a-b.height;

if(e==0){return {};
}var f=this._getRowHeights();
var c={};

for(var i=0,l=f.length;i<l;i++){var g=f[i];
var d=this.getRowFlex(i);

if((d<=0)||(g.height==g.maxHeight&&e>0)||(g.height==g.minHeight&&e<0)){continue;
}c[i]={min:g.minHeight,value:g.height,max:g.maxHeight,flex:d};
}return qx.ui.layout.Util.computeFlexOffsets(c,a,b.height);
},renderLayout:function(cJ,cK){if(this._invalidChildrenCache){this.__gu();
}var cY=qx.ui.layout.Util;
var cM=this.getSpacingX();
var cS=this.getSpacingY();
var de=this._getColWidths();
var dd=this._getColumnFlexOffsets(cJ);
var cN=[];
var dg=this.__gr;
var cL=this.__gq;
var df;

for(var dh=0;dh<=dg;dh++){df=dd[dh]?dd[dh].offset:0;
cN[dh]=de[dh].width+df;
}var cV=this._getRowHeights();
var cX=this._getRowFlexOffsets(cK);
var dn=[];

for(var cT=0;cT<=cL;cT++){df=cX[cT]?cX[cT].offset:0;
dn[cT]=cV[cT].height+df;
}var dp=0;

for(var dh=0;dh<=dg;dh++){var top=0;

for(var cT=0;cT<=cL;cT++){var db=this.__gn[cT][dh];
if(!db){top+=dn[cT]+cS;
continue;
}var cO=db.getLayoutProperties();
if(cO.row!==cT||cO.column!==dh){top+=dn[cT]+cS;
continue;
}var dm=cM*(cO.colSpan-1);

for(var i=0;i<cO.colSpan;i++){dm+=cN[dh+i];
}var dc=cS*(cO.rowSpan-1);

for(var i=0;i<cO.rowSpan;i++){dc+=dn[cT+i];
}var cP=db.getSizeHint();
var dk=db.getMarginTop();
var da=db.getMarginLeft();
var cW=db.getMarginBottom();
var cR=db.getMarginRight();
var cU=Math.max(cP.minWidth,Math.min(dm-da-cR,cP.maxWidth));
var dl=Math.max(cP.minHeight,Math.min(dc-dk-cW,cP.maxHeight));
var di=this.getCellAlign(cT,dh);
var dj=dp+cY.computeHorizontalAlignOffset(di.hAlign,cU,dm,da,cR);
var cQ=top+cY.computeVerticalAlignOffset(di.vAlign,dl,dc,dk,cW);
db.renderLayout(dj,cQ,cU,dl);
top+=dn[cT]+cS;
}dp+=cN[dh]+cM;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__gt=null;
this.__gs=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__gu();
}var u=this._getColWidths();
var w=0,z=0;

for(var i=0,l=u.length;i<l;i++){var A=u[i];

if(this.getColumnFlex(i)>0){w+=A.minWidth;
}else{w+=A.width;
}z+=A.width;
}var B=this._getRowHeights();
var s=0,v=0;

for(var i=0,l=B.length;i<l;i++){var C=B[i];

if(this.getRowFlex(i)>0){s+=C.minHeight;
}else{s+=C.height;
}v+=C.height;
}var r=this.getSpacingX()*(u.length-1);
var q=this.getSpacingY()*(B.length-1);
var t={minWidth:w+r,width:z+r,minHeight:s+q,height:v+q};
return t;
}},destruct:function(){this._disposeFields(U,Q,W,Y,S,bc,bd);
}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var u="",t="showingPlaceholder",s="none",r="changeValue",q="Boolean",p="qx.client",o="color",n="qx.event.type.Data",m="focusin",l="input",bd="readonly",bc="focusout",bb="readOnly",ba="text",Y="_applyTextAlign",X="RegExp",W="syncAppearance",V="gecko",U="A",T="change",B="textAlign",C="focused",z="center",A="Use public 'getTextSelectionLength' instead!",x="disabled",y="String",v="resize",w="qx.ui.form.AbstractField",D="Use public 'clearTextSelection' instead!",E="transparent",L="Use public 'selectAllText' instead!",J="off",N="spellcheck",M="false",P="right",O="PositiveInteger",G="abstract",S="block",R="webkit",Q="_applyReadOnly",F="Use public 'setTextSelection' instead!",H="_applyPlaceholder",I="left",K="Use public 'getTextSelection' instead!";
qx.Class.define(w,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IFormElement,qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MFormElement,qx.ui.form.MForm],type:G,construct:function(bg){arguments.callee.base.call(this);

if(bg!=null){this.setValue(bg);
}this.getContentElement().addListener(T,this._onChangeContent,this);
this.addListener(W,function(e){if(this.hasState(t)){this.getContentElement().setValue(this.getPlaceholder());
}},this);
},events:{"input":n,"changeValue":n},properties:{textAlign:{check:[I,z,P],nullable:true,themeable:true,apply:Y},readOnly:{check:q,apply:Q,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:O,init:Infinity},liveUpdate:{check:q,init:false},placeholder:{check:y,nullable:true,apply:H},filter:{check:X,nullable:true,init:null}},members:{__p:true,getFocusElement:function(){return this.getContentElement();
},_createInputElement:function(){return new qx.html.Input(ba);
},_createContentElement:function(){var f=this._createInputElement();
f.setSelectable(this.getSelectable());
f.setEnabled(this.getEnabled());
f.addListener(l,this._onHtmlInput,this);
if(qx.core.Variant.isSet(p,V)){f.setAttribute(N,M);
}f.setStyles({"border":s,"padding":0,"margin":0,"display":S,"background":E,"outline":s,"appearance":s,"autoComplete":J});
if(qx.core.Variant.isSet(p,R)){f.setStyle(v,s);
}return f;
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);
this.getContentElement().setEnabled(a);

if(a){this._showPlaceholder();
}else{this._removePlaceholder();
}},__q:{width:16,height:16},_getContentHint:function(){return {width:this.__q.width*10,height:this.__q.height||16};
},_applyFont:function(bs,bt){var bu;

if(bs){var bv=qx.theme.manager.Font.getInstance().resolve(bs);
bu=bv.getStyles();
}else{bu=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bu);
if(bs){this.__q=qx.bom.Label.getTextSize(U,bu);
}else{delete this.__q;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bq,br){if(bq){this.getContentElement().setStyle(o,qx.theme.manager.Color.getInstance().resolve(bq));
}else{this.getContentElement().removeStyle(o);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__q;
},_onHtmlInput:function(e){var j=e.getData();
var i=true;
this.__p=false;
if(this.getFilter()!=null){var k=u;
var g=j.search(this.getFilter());
var h=j;

while(g>=0){k=k+(h.charAt(g));
h=h.substring(g+1,h.length);
g=h.search(this.getFilter());
}
if(k!=j){i=false;
j=k;
this.getContentElement().setValue(j);
}}if(j.length>this.getMaxLength()){var i=false;
this.getContentElement().setValue(j.substr(0,this.getMaxLength()));
}if(i){this.fireDataEvent(l,j);
if(this.getLiveUpdate()){this.fireNonBubblingEvent(r,qx.event.type.Data,[j]);
}}},setValue:function(bw){if(bw===null){if(this.__p){return bw;
}bw=u;
this.__p=true;
}else{this.__p=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bw)){var by=this.getContentElement();

if(bw.length>this.getMaxLength()){bw=bw.substr(0,this.getMaxLength());
}
if(by.getValue()!=bw){var bz=by.getValue();
by.setValue(bw);
var bx=this.__p?null:bw;
this.fireNonBubblingEvent(r,qx.event.type.Data,[bx,bz]);
}this._showPlaceholder();
return bw;
}throw new Error("Invalid value type: "+bw);
},getValue:function(){var bf=this.hasState(t);
var be=bf?u:this.getContentElement().getValue();
return this.__p?null:be;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__p=e.getData()===null;
this.fireNonBubblingEvent(r,qx.event.type.Data,[e.getData()]);
},getSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,K);
return this.getTextSelection();
},getSelectionLength:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
return this.getTextSelectionLength();
},setSelection:function(bA,bB){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
this.setTextSelection(bA,bB);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
this.clearTextSelection();
},selectAll:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,L);
this.selectAllText();
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},setTextSelection:function(c,d){this.getContentElement().setTextSelection(c,d);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bn=this.getValue()||u;
var bm=this.getPlaceholder();

if(bm!=null&&!this.hasState(C)&&bn==u&&!this.hasState(x)){this.addState(t);
}},_removePlaceholder:function(){if(this.hasState(t)){this.getContentElement().setValue(u);
this.removeState(t);
}},_applyPlaceholder:function(bh,bi){if(bh!=null){this.addListener(m,this._removePlaceholder,this);
this.addListener(bc,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(m,this._removePlaceholder,this);
this.removeListener(bc,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bo,bp){this.getContentElement().setStyle(B,bo);
},_applyReadOnly:function(bj,bk){var bl=this.getContentElement();
bl.setAttribute(bb,bj);

if(bj){this.addState(bd);
this.setFocusable(false);
}else{this.removeState(bd);
this.setFocusable(true);
}}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var t="none",s="wrap",r="value",q="qx.client",p="textarea",o="userSelect",n="on",m="off",l="userModify",k="qxSelectable",f="",j="webkit",i="input",e="qx.html.Input",d="select",h="disabled",g="read-only";
qx.Class.define(e,{extend:qx.html.Element,construct:function(v){arguments.callee.base.call(this);
this.__d=v;
if(v===d||v===p){this.setNodeName(v);
}else{this.setNodeName(i);
}},members:{__d:null,__e:null,__f:null,_createDomElement:function(){return qx.bom.Input.create(this.__d);
},_applyProperty:function(name,b){arguments.callee.base.call(this,name,b);
var c=this.getDomElement();

if(name===r){qx.bom.Input.setValue(c,b);
}else if(name===s){qx.bom.Input.setWrap(c,b);
}},setEnabled:qx.core.Variant.select(q,{"webkit":function(a){this.__f=a;

if(!a){this.setStyle(l,g);
this.setStyle(o,t);
}else{this.setStyle(l,null);
this.setStyle(o,this.__e?null:t);
}},"default":function(z){this.setAttribute(h,z===false);
}}),setSelectable:qx.core.Variant.select(q,{"webkit":function(w){this.__e=w;
this.setAttribute(k,w?n:m);
if(qx.core.Variant.isSet(q,j)){var x=this.__f?w?null:t:t;
this.setStyle(o,x);
}},"default":function(y){this.setAttribute(k,y?n:m);
}}),setValue:function(A){var B=this.getDomElement();

if(B){if(B.value!=A){qx.bom.Input.setValue(B,A);
}}else{this._setProperty(r,A);
}return this;
},getValue:function(){var u=this.getDomElement();

if(u){return qx.bom.Input.getValue(u);
}return this._getProperty(r)||f;
},setWrap:function(C){if(this.__d===p){this._setProperty(s,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__d===p){return this._getProperty(s);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var N="change",M="input",L="checkbox",K="radio",J="textarea",I="qx.client",H="text",G="password",F="keypress",E="propertychange",A="select-multiple",D="checked",C="value",z="select",y="qx.event.handler.Input",B="Enter";
qx.Class.define(y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){var c=a.tagName.toLowerCase();

if(b===M&&(c===M||c===J)){return true;
}
if(b===N&&(c===M||c===J||c===z)){return true;
}return false;
},registerEvent:qx.core.Variant.select(I,{"mshtml":function(j,k,m){if(!j.__i){var n=j.tagName.toLowerCase();
var p=j.type;

if(p===H||p===G||n===J||p===L||p===K){qx.bom.Event.addNativeListener(j,E,this._onPropertyWrapper);
}
if(p!==L&&p!==K){qx.bom.Event.addNativeListener(j,N,this._onChangeValueWrapper);
}this.__l(j,p);
j.__i=true;
}},"default":function(q,r,s){if(r===M){this.__j(q);
}else if(r===N){if(q.type===K||q.type===L){qx.bom.Event.addNativeListener(q,N,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(q,N,this._onChangeValueWrapper);
}this.__l(q,q.type);
}}}),__j:qx.core.Variant.select(I,{"mshtml":null,"webkit":function(g){var h=g.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&h==J){qx.bom.Event.addNativeListener(g,F,this._onInputWrapper);
}qx.bom.Event.addNativeListener(g,M,this._onInputWrapper);
},"default":function(R){qx.bom.Event.addNativeListener(R,M,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(I,{"mshtml":function(X,Y){if(X.__i){var ba=X.tagName.toLowerCase();
var bb=X.type;

if(bb===H||bb===G||ba===J||bb===L||bb===K){qx.bom.Event.removeNativeListener(X,E,this._onPropertyWrapper);
}
if(bb!==L&&bb!==K){qx.bom.Event.removeNativeListener(X,N,this._onChangeValueWrapper);
}
try{delete X.__i;
}catch(f){X.__i=null;
}}},"default":function(V,W){if(W===M){this.__j(V);
}else if(W===N){if(V.type===K||V.type===L){qx.bom.Event.removeNativeListener(V,N,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(V,N,this._onChangeValueWrapper);
}}}}),__k:qx.core.Variant.select(I,{"mshtml":null,"webkit":function(O){var P=O.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&P==J){qx.bom.Event.removeNativeListener(O,F,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(O,M,this._onInputWrapper);
},"default":function(x){qx.bom.Event.removeNativeListener(x,M,this._onInputWrapper);
}}),__l:qx.core.Variant.select(I,{"mshtml|opera":function(bc,bd){if(bd===H||bd===G){qx.event.Registration.addListener(bc,F,function(e){if(e.getKeyIdentifier()===B){qx.event.Registration.fireEvent(bc,N,qx.event.type.Data,[bc.value]);
}});
}},"default":function(t,u){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var S=e.target;
qx.event.Registration.fireEvent(S,M,qx.event.type.Data,[S.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var U=e.target||e.srcElement;
var T=U.value;

if(U.type===A){var T=[];

for(var i=0,o=U.options,l=o.length;i<l;i++){if(o[i].selected){T.push(o[i].value);
}}}qx.event.Registration.fireEvent(U,N,qx.event.type.Data,[T]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var d=e.target;

if(d.type===K){if(d.checked){qx.event.Registration.fireEvent(d,N,qx.event.type.Data,[d.value]);
}}else{qx.event.Registration.fireEvent(d,N,qx.event.type.Data,[d.checked]);
}}),_onProperty:qx.core.Variant.select(I,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var v=e.target||e.srcElement;
var w=e.propertyName;

if(w===C&&(v.type===H||v.type===G||v.tagName.toLowerCase()===J)){if(!v.__inValueSet){qx.event.Registration.fireEvent(v,M,qx.event.type.Data,[v.value]);
}}else if(w===D){if(v.type===L){qx.event.Registration.fireEvent(v,N,qx.event.type.Data,[v.checked]);
}else if(v.checked){qx.event.Registration.fireEvent(v,N,qx.event.type.Data,[v.value]);
}}}),"default":function(){}})},defer:function(Q){qx.event.Registration.addHandler(Q);
}});
})();
(function(){var D="",C="select",B="soft",A="off",z="qx.client",y="wrap",x="text",w="mshtml",v="number",u="checkbox",n="select-one",t="input",q="option",m="value",k="radio",p="qx.bom.Input",o="nowrap",r="textarea",j="auto",s="normal";
qx.Class.define(p,{statics:{__g:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(a,b,c){{};
var b=b?qx.lang.Object.clone(b):{};
var d;

if(a===r||a===C){d=a;
}else{d=t;
b.type=a;
}return qx.bom.Element.create(d,b,c);
},setValue:function(Q,R){var W=Q.nodeName.toLowerCase();
var T=Q.type;
var Array=qx.lang.Array;
var X=qx.lang.Type;

if(typeof R===v){R+=D;
}
if((T===u||T===k)){if(X.isArray(R)){Q.checked=Array.contains(R,Q.value);
}else{Q.checked=Q.value==R;
}}else if(W===C){var S=X.isArray(R);
var Y=Q.options;
var U,V;

for(var i=0,l=Y.length;i<l;i++){U=Y[i];
V=U.getAttribute(m);

if(V==null){V=U.text;
}U.selected=S?Array.contains(R,V):R==V;
}
if(S&&R.length==0){Q.selectedIndex=-1;
}}else if(T===x&&qx.core.Variant.isSet(z,w)){Q.__h=true;
Q.value=R;
Q.__h=null;
}else{Q.value=R;
}},getValue:function(G){var M=G.nodeName.toLowerCase();

if(M===q){return (G.attributes.value||{}).specified?G.value:G.text;
}
if(M===C){var H=G.selectedIndex;
if(H<0){return null;
}var N=[];
var P=G.options;
var O=G.type==n;
var L=qx.bom.Input;
var K;
for(var i=O?H:0,J=O?H+1:P.length;i<J;i++){var I=P[i];

if(I.selected){K=L.getValue(I);
if(O){return K;
}N.push(K);
}}return N;
}else{return (G.value||D).replace(/\r/g,D);
}},setWrap:qx.core.Variant.select(z,{"mshtml":function(E,F){E.wrap=F?B:A;
},"gecko":function(e,f){var h=f?B:A;
var g=f?D:j;
e.setAttribute(y,h);
e.style.overflow=g;
},"default":function(ba,bb){ba.style.whiteSpace=bb?s:o;
}})}});
})();
(function(){var c="interval",b="qx.util.TimerManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__n:[],__o:{},__p:0},members:{start:function(m,n,o,p,q){if(!q){q=n||0;
}var r=(new Date()).getTime()+q;
arguments.callee.self.__o[++arguments.callee.self.__p]={callback:m,userData:p||null,expireAt:r,recurTime:n,context:o||this};
this.__q(r,arguments.callee.self.__p);
return arguments.callee.self.__p;
},stop:function(d){var e=arguments.callee.self.__n;
var length=e.length;

for(var i=0;i<length;i++){if(e[i]==d){e.splice(i,1);
break;
}}delete arguments.callee.self.__o[d];
if(e.length==0){qx.event.Idle.getInstance().removeListener(c,this.__r);
}},__q:function(s,t){var v=arguments.callee.self.__n;
var u=arguments.callee.self.__o;
var length=v.length;

for(var i=0;i<length;i++){if(u[v[i]].expireAt>s){v.splice(i,0,t);
break;
}}if(v.length==length){v.push(t);
}if(v.length==1){qx.event.Idle.getInstance().addListener(c,this.__r,this);
}},__r:function(){var j=(new Date()).getTime();
var g=arguments.callee.self.__n;
var h=arguments.callee.self.__o;
while(g.length>0&&h[g[0]].expireAt<=j){var l=(g.splice(0,1))[0];
var f=h[l];
f.callback.call(f.context,f.userData,l);
if(f.recurTime&&h[l]){var k=(new Date()).getTime();
f.expireAt=k+f.recurTime;
this.__q(f.expireAt,l);
}else{delete h[l];
}}if(g.length==0){qx.event.Idle.getInstance().removeListener(c,this.__r);
}}}});
})();
(function(){var o="qx.event.type.Data",n="qx.event.type.Event",m="qx.ui.table.ITableModel";
qx.Interface.define(m,{events:{"dataChanged":o,"metaDataChanged":n,"sorted":o},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(w){},getColumnCount:function(){},getColumnId:function(v){},getColumnIndexById:function(j){},getColumnName:function(g){},isColumnEditable:function(d){},isColumnSortable:function(p){},sortByColumn:function(k,l){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(e,f){},getValue:function(t,u){},getValueById:function(h,i){},setValue:function(q,r,s){},setValueById:function(a,b,c){}}});
})();
(function(){var x="metaDataChanged",w="qx.event.type.Data",v="abstract",u="qx.ui.table.model.Abstract",t="qx.event.type.Event",s="__t",r="__u",q="__s";
qx.Class.define(u,{type:v,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":w,"metaDataChanged":t,"sorted":w},construct:function(){arguments.callee.base.call(this);
this.__s=[];
this.__t=[];
this.__u={};
},members:{__s:null,__t:null,__u:null,__v:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(m){return null;
},isColumnEditable:function(B){return false;
},isColumnSortable:function(g){return false;
},sortByColumn:function(z,A){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(e,f){},getValue:function(a,b){throw new Error("getValue is abstract");
},getValueById:function(h,j){return this.getValue(this.getColumnIndexById(h),j);
},setValue:function(C,D,E){throw new Error("setValue is abstract");
},setValueById:function(n,o,p){return this.setValue(this.getColumnIndexById(n),o,p);
},getColumnCount:function(){return this.__s.length;
},getColumnIndexById:function(y){return this.__u[y];
},getColumnId:function(I){return this.__s[I];
},getColumnName:function(l){return this.__t[l];
},setColumnIds:function(d){this.__s=d;
this.__u={};

for(var i=0;i<d.length;i++){this.__u[d[i]]=i;
}this.__t=new Array(d.length);
if(!this.__v){this.fireEvent(x);
}},setColumnNamesByIndex:function(k){if(this.__s.length!=k.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__s.length+" != "+k.length);
}this.__t=k;
this.fireEvent(x);
},setColumnNamesById:function(c){this.__t=new Array(this.__s.length);

for(var i=0;i<this.__s.length;++i){this.__t[i]=c[this.__s[i]];
}},setColumns:function(F,G){var H=this.__s.length==0||G;

if(G==null){if(this.__s.length==0){G=F;
}else{G=this.__s;
}}
if(G.length!=F.length){throw new Error("columnIdArr and columnNameArr have different length: "+G.length+" != "+F.length);
}
if(H){this.__v=true;
this.setColumnIds(G);
this.__v=false;
}this.setColumnNamesByIndex(F);
}},destruct:function(){this._disposeFields(q,s,r);
}});
})();
(function(){var P="dataChanged",O="metaDataChanged",N="qx.ui.table.model.Simple",M="Boolean",L="__w",K="__y",J="sorted",I="__A",H="__z";
qx.Class.define(N,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__w=[];
this.__x=-1;
this.__B;
this.__y=[];
this.__z=null;
},properties:{caseSensitiveSorting:{check:M,init:true}},statics:{_defaultSortComparatorAscending:function(e,f){var g=e[arguments.callee.columnIndex];
var h=f[arguments.callee.columnIndex];
return (g>h)?1:((g==h)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(bb,bc){var bd=(isNaN(bb[arguments.callee.columnIndex])?bb[arguments.callee.columnIndex].toLowerCase():bb[arguments.callee.columnIndex]);
var be=(isNaN(bc[arguments.callee.columnIndex])?bc[arguments.callee.columnIndex].toLowerCase():bc[arguments.callee.columnIndex]);
return (bd>be)?1:((bd==be)?0:-1);
},_defaultSortComparatorDescending:function(s,t){var u=s[arguments.callee.columnIndex];
var v=t[arguments.callee.columnIndex];
return (u<v)?1:((u==v)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bK,bL){var bM=(isNaN(bK[arguments.callee.columnIndex])?bK[arguments.callee.columnIndex].toLowerCase():bK[arguments.callee.columnIndex]);
var bN=(isNaN(bL[arguments.callee.columnIndex])?bL[arguments.callee.columnIndex].toLowerCase():bL[arguments.callee.columnIndex]);
return (bM<bN)?1:((bM==bN)?0:-1);
}},members:{__w:null,__z:null,__A:null,__y:null,__x:null,__B:null,getRowData:function(q){var r=this.__w[q];

if(r==null||r.originalData==null){return r;
}else{return r.originalData;
}},getRowDataAsMap:function(by){var bA=this.__w[by];
var bz={};

for(var bB=0;bB<this.getColumnCount();bB++){bz[this.getColumnId(bB)]=bA[bB];
}return bz;
},getDataAsMapArray:function(){var bD=this.getRowCount();
var bC=[];

for(var i=0;i<bD;i++){bC.push(this.getRowDataAsMap(i));
}return bC;
},setEditable:function(a){this.__z=[];

for(var b=0;b<this.getColumnCount();b++){this.__z[b]=a;
}this.fireEvent(O);
},setColumnEditable:function(bj,bk){if(bk!=this.isColumnEditable(bj)){if(this.__z==null){this.__z=[];
}this.__z[bj]=bk;
this.fireEvent(O);
}},isColumnEditable:function(d){return this.__z?(this.__z[d]==true):false;
},setColumnSortable:function(bE,bF){if(bF!=this.isColumnSortable(bE)){if(this.__A==null){this.__A=[];
}this.__A[bE]=bF;
this.fireEvent(O);
}},isColumnSortable:function(c){return (this.__A?(this.__A[c]!==false):true);
},sortByColumn:function(C,D){var G;
var F=this.__y[C];

if(F){G=(D?F.ascending:F.descending);
}else{if(this.getCaseSensitiveSorting()){G=(D?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{G=(D?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}G.columnIndex=C;
this.__w.sort(G);
this.__x=C;
this.__B=D;
var E={columnIndex:C,ascending:D};
this.fireDataEvent(J,E);
this.fireEvent(O);
},setSortMethods:function(bl,bm){var bn;

if(qx.lang.Type.isFunction(bm)){bn={ascending:bm,descending:function(U,V){return bm(V,U);
}};
}else{bn=bm;
}this.__y[bl]=bn;
},clearSorting:function(){if(this.__x!=-1){this.__x=-1;
this.__B=true;
this.fireEvent(O);
}},getSortColumnIndex:function(){return this.__x;
},isSortAscending:function(){return this.__B;
},getRowCount:function(){return this.__w.length;
},getValue:function(bs,bt){if(bt<0||bt>=this.__w.length){throw new Error("this.__rowArr out of bounds: "+bt+" (0.."+this.__w.length+")");
}return this.__w[bt][bs];
},setValue:function(W,X,Y){if(this.__w[X][W]!=Y){this.__w[X][W]=Y;
if(this.hasListener(P)){var ba={firstRow:X,lastRow:X,firstColumn:W,lastColumn:W};
this.fireDataEvent(P,ba);
}
if(W==this.__x){this.clearSorting();
}}},setData:function(n,o){this.__w=n;
if(this.hasListener(P)){var p={firstRow:0,lastRow:n.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(P,p);
}
if(o!==false){this.clearSorting();
}},getData:function(){return this.__w;
},setDataAsMapArray:function(k,l,m){this.setData(this._mapArray2RowArr(k,l),m);
},addRows:function(bf,bg,bh){if(bg==null){bg=this.__w.length;
}bf.splice(0,0,bg,0);
Array.prototype.splice.apply(this.__w,bf);
var bi={firstRow:bg,lastRow:this.__w.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(P,bi);

if(bh!==false){this.clearSorting();
}},addRowsAsMapArray:function(bu,bv,bw,bx){this.addRows(this._mapArray2RowArr(bu,bw),bv,bx);
},setRows:function(bo,bp,bq){if(bp==null){bp=0;
}bo.splice(0,0,bp,bo.length);
Array.prototype.splice.apply(this.__w,bo);
var br={firstRow:bp,lastRow:this.__w.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(P,br);

if(bq!==false){this.clearSorting();
}},setRowsAsMapArray:function(Q,R,S,T){this.setRows(this._mapArray2RowArr(Q,S),R,T);
},removeRows:function(bG,bH,bI){this.__w.splice(bG,bH);
var bJ={firstRow:bG,lastRow:this.__w.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bG,removeCount:bH};
this.fireDataEvent(P,bJ);

if(bI!==false){this.clearSorting();
}},_mapArray2RowArr:function(w,x){var B=w.length;
var y=this.getColumnCount();
var A=new Array(B);
var z;

for(var i=0;i<B;++i){z=[];

if(x){z.originalData=w[i];
}
for(var j=0;j<y;++j){z[j]=w[i][this.getColumnId(j)];
}A[i]=z;
}return A;
}},destruct:function(){this._disposeFields(L,H,K,I);
}});
})();
(function(){var bs="Function",br="Boolean",bq="column-button",bp="qx.event.type.Data",bo="statusbar",bn="qx.ui.table.pane.CellEvent",bm="PageUp",bl="changeLocale",bk="changeSelection",bj="qx.dynlocale",cG="Enter",cF="metaDataChanged",cE="dataChanged",cD="on",cC="_applyTableColumnModel",cB="_applyStatusBarVisible",cA="blur",cz="qx.ui.table.Table",cy="columnVisibilityMenuCreateEnd",cx="widthChanged",bz="verticalScrollBarChanged",bA="_applyMetaColumnCounts",bx="one of one row",by="focus",bv="changeDataRowRenderer",bw="changeHeaderCellHeight",bt="Escape",bu="A",bH="changeSelectionModel",bI="Left",bY="_tableModel",bU="Down",ch="Integer",cc="_applyHeaderCellHeight",ct="visibilityChanged",cn="qx.ui.table.ITableModel",bP="orderChanged",cw="_applySelectionModel",cv="_columnVisibilityMenu",cu="menu",bN="_applyAdditionalStatusBarText",bR="_applyFocusCellOnMouseMove",bT="table",bW="_applyColumnVisibilityButtonVisible",ca="changeTableModel",cd="qx.event.type.Event",cj="tableWidthChanged",cp="End",bB="Object",bC="_applyShowCellFocusIndicator",bQ="resize",cg="changeScrollY",cf="_applyTableModel",ce="menu-button",cl="_applyKeepFirstVisibleRowComplete",ck="qx.ui.table.columnmodel.Basic",cb="Home",ci="_applyRowHeight",bg="F2",co="appear",bD="Up",bE="columnVisibilityMenuCreateStart",bV="%1 rows",bh="qx.ui.table.selection.Model",bi="one row",bM="__D",bF="PageDown",bG="%1 of %2 rows",bL="__K",bX="changeTableColumnModel",cr="keypress",cq="changeRowHeight",bS="Number",cs="changeVisible",bO="qx.ui.table.IRowRenderer",cm="__C",bJ="Right",bK="Space";
qx.Class.define(cz,{extend:qx.ui.core.Widget,construct:function(ew,ex){arguments.callee.base.call(this);
if(!ex){ex={};
}
if(ex.selectionManager){this.setNewSelectionManager(ex.selectionManager);
}
if(ex.selectionModel){this.setNewSelectionModel(ex.selectionModel);
}
if(ex.tableColumnModel){this.setNewTableColumnModel(ex.tableColumnModel);
}
if(ex.tablePane){this.setNewTablePane(ex.tablePane);
}
if(ex.tablePaneHeader){this.setNewTablePaneHeader(ex.tablePaneHeader);
}
if(ex.tablePaneScroller){this.setNewTablePaneScroller(ex.tablePaneScroller);
}
if(ex.tablePaneModel){this.setNewTablePaneModel(ex.tablePaneModel);
}
if(ex.columnMenu){this.setNewColumnMenu(ex.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__C=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__C,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__D=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableColumnModel(this.getNewTableColumnModel()(this));
if(ew!=null){this.setTableModel(ew);
}this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(cr,this._onKeyPress);
this.addListener(by,this._onFocusChanged);
this.addListener(cA,this._onFocusChanged);
var ey=new qx.ui.core.Widget().set({height:0});
this._add(ey);
ey.addListener(bQ,this._onResize,this);
this.__E=null;
this.__F=null;
if(qx.core.Variant.isSet(bj,cD)){qx.locale.Manager.getInstance().addListener(bl,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":bp,"columnVisibilityMenuCreateEnd":bp,"tableWidthChanged":cd,"verticalScrollBarChanged":bp,"cellClick":bn,"cellDblclick":bn,"cellContextmenu":bn,"dataEdited":bp},statics:{__G:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bT},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectionModel:{check:bh,apply:cw,event:bH},tableModel:{check:cn,apply:cf,event:ca,nullable:true},tableColumnModel:{check:ck,apply:cC,event:bX},rowHeight:{check:bS,init:20,apply:ci,event:cq},forceLineHeight:{check:br,init:true},headerCellHeight:{check:ch,init:16,apply:cc,event:bw},statusBarVisible:{check:br,init:true,apply:cB},additionalStatusBarText:{nullable:true,init:null,apply:bN},columnVisibilityButtonVisible:{check:br,init:true,apply:bW},metaColumnCounts:{check:bB,apply:bA},focusCellOnMouseMove:{check:br,init:false,apply:bR},rowFocusChangeModifiesSelection:{check:br,init:true},showCellFocusIndicator:{check:br,init:true,apply:bC},keepFirstVisibleRowComplete:{check:br,init:true,apply:cl},alwaysUpdateCells:{check:br,init:false},dataRowRenderer:{check:bO,init:null,nullable:true,event:bv},modalCellEditorPreOpenFunction:{check:bs,init:null,nullable:true},newColumnMenu:{check:bs,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:bs,init:function(dD){return new qx.ui.table.selection.Manager(dD);
}},newSelectionModel:{check:bs,init:function(eU){return new qx.ui.table.selection.Model(eU);
}},newTableColumnModel:{check:bs,init:function(Q){return new qx.ui.table.columnmodel.Basic(Q);
}},newTablePane:{check:bs,init:function(cP){return new qx.ui.table.pane.Pane(cP);
}},newTablePaneHeader:{check:bs,init:function(ek){return new qx.ui.table.pane.Header(ek);
}},newTablePaneScroller:{check:bs,init:function(eo){return new qx.ui.table.pane.Scroller(eo);
}},newTablePaneModel:{check:bs,init:function(cQ){return new qx.ui.table.pane.Model(cQ);
}}},members:{__E:null,__F:null,__C:null,__D:null,__H:null,__I:null,__J:null,__K:null,_createChildControlImpl:function(ba){var bb;

switch(ba){case bo:bb=new qx.ui.basic.Label();
bb.set({allowGrowX:true});
this._add(bb);
break;
case bq:bb=this.getNewColumnMenu()();
bb.set({focusable:false});
var bc=bb.factory(cu,{table:this});
bc.addListener(co,this._initColumnMenu,this);
break;
}return bb||arguments.callee.base.call(this,ba);
},_applySelectionModel:function(ei,ej){this.__D.setSelectionModel(ei);

if(ej!=null){ej.removeListener(bk,this._onSelectionChanged,this);
}ei.addListener(bk,this._onSelectionChanged,this);
},_applyRowHeight:function(q,r){if(!this.getTableModel()){return;
}var s=this._getPaneScrollerArr();

for(var i=0;i<s.length;i++){s[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(et,eu){var ev=this._getPaneScrollerArr();

for(var i=0;i<ev.length;i++){ev[i].getHeader().setHeight(et);
}},_applyTableModel:function(em,en){this.getTableColumnModel().init(em.getColumnCount(),this);

if(en!=null){en.removeListener(cF,this._onTableModelMetaDataChanged,this);
en.removeListener(cE,this._onTableModelDataChanged,this);
}em.addListener(cF,this._onTableModelMetaDataChanged,this);
em.addListener(cE,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,em.getRowCount(),0,em.getColumnCount());
this._onTableModelMetaDataChanged();
},_applyTableColumnModel:function(y,z){if(z!=null){throw new Error("The table column model can only be set once per table.");
}y.addListener(ct,this._onColVisibilityChanged,this);
y.addListener(cx,this._onColWidthChanged,this);
y.addListener(bP,this._onColOrderChanged,this);
var B=this.getTableModel();
if(B){y.init(B.getColumnCount(),this);
}var A=this._getPaneScrollerArr();

for(var i=0;i<A.length;i++){var C=A[i];
var D=C.getTablePaneModel();
D.setTableColumnModel(y);
}},_applyStatusBarVisible:function(dc,dd){if(dc){this._showChildControl(bo);
}else{this._excludeChildControl(bo);
}
if(dc){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(dH,dI){this.__H=dH;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(cJ,cK){if(cJ){this._showChildControl(bq);
}else{this._excludeChildControl(bq);
}},_applyMetaColumnCounts:function(dL,dM){var dT=dL;
var dN=this._getPaneScrollerArr();
var dR={};

if(dL>dM){var dV=qx.event.Registration.getManager(dN[0]);

for(var dW in qx.ui.table.Table.__G){dR[dW]={};
dR[dW].capture=dV.getListeners(dN[0],dW,true);
dR[dW].bubble=dV.getListeners(dN[0],dW,false);
}}this._cleanUpMetaColumns(dT.length);
var dS=0;

for(var i=0;i<dN.length;i++){var dX=dN[i];
var dU=dX.getTablePaneModel();
dU.setFirstColumnX(dS);
dU.setMaxColumnCount(dT[i]);
dS+=dT[i];
}if(dT.length>dN.length){var dQ=this.getTableColumnModel();

for(var i=dN.length;i<dT.length;i++){var dU=this.getNewTablePaneModel()(dQ);
dU.setFirstColumnX(dS);
dU.setMaxColumnCount(dT[i]);
dS+=dT[i];
var dX=this.getNewTablePaneScroller()(this);
dX.setTablePaneModel(dU);
dX.addListener(cg,this._onScrollY,this);
for(dW in qx.ui.table.Table.__G){if(!dR[dW]){break;
}
if(dR[dW].capture&&dR[dW].capture.length>0){var dO=dR[dW].capture;

for(var i=0;i<dO.length;i++){var dP=dO[i].context;

if(!dP){dP=this;
}else if(dP==dN[0]){dP=dX;
}dX.addListener(dW,dO[i].handler,dP,true);
}}
if(dR[dW].bubble&&dR[dW].bubble.length>0){var ea=dR[dW].bubble;

for(var i=0;i<ea.length;i++){var dP=ea[i].context;

if(!dP){dP=this;
}else if(dP==dN[0]){dP=dX;
}dX.addListener(dW,ea[i].handler,dP,false);
}}}var dY=(i==dT.length-1)?1:0;
this.__C.add(dX,{flex:dY});
dN=this._getPaneScrollerArr();
}}for(var i=0;i<dN.length;i++){var dX=dN[i];
var eb=(i==(dN.length-1));
dX.getHeader().setHeight(this.getHeaderCellHeight());
dX.setTopRightWidget(eb?this.getChildControl(bq):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(bq);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(bd,be){var bf=this._getPaneScrollerArr();

for(var i=0;i<bf.length;i++){bf[i].setFocusCellOnMouseMove(bd);
}},_applyShowCellFocusIndicator:function(F,G){var H=this._getPaneScrollerArr();

for(var i=0;i<H.length;i++){H[i].setShowCellFocusIndicator(F);
}},_applyKeepFirstVisibleRowComplete:function(ef,eg){var eh=this._getPaneScrollerArr();

for(var i=0;i<eh.length;i++){eh[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__D;
},_getPaneScrollerArr:function(){return this.__C.getChildren();
},getPaneScroller:function(ec){return this._getPaneScrollerArr()[ec];
},_cleanUpMetaColumns:function(eF){var eG=this._getPaneScrollerArr();

if(eG!=null){for(var i=eG.length-1;i>=eF;i--){eG[i].destroy();
}}},_onChangeLocale:function(M){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(eD){var eE=this._getPaneScrollerArr();

for(var i=0;i<eE.length;i++){eE[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dJ){var dK=this._getPaneScrollerArr();

for(var i=0;i<dK.length;i++){dK[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(eS){var eT=eS.getData();
this._updateTableData(eT.firstRow,eT.lastRow,eT.firstColumn,eT.lastColumn,eT.removeStart,eT.removeCount);
},_updateTableData:function(dv,dw,dx,dy,dz,dA){var dB=this._getPaneScrollerArr();
if(dA){this.getSelectionModel().removeSelectionInterval(dz,dz+dA);
}
for(var i=0;i<dB.length;i++){dB[i].onTableModelDataChanged(dv,dw,dx,dy);
}var dC=this.getTableModel().getRowCount();

if(dC!=this.__I){this.__I=dC;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(ed){if(!this.__J){this.__J=true;
var ee=this._getPaneScrollerArr();

for(var i=0;i<ee.length;i++){ee[i].setScrollY(ed.getData());
}this.__J=false;
}},_onKeyPress:function(eH){if(!this.getEnabled()){return;
}var eO=this.__F;
var eL=true;
var eP=eH.getKeyIdentifier();

if(this.isEditing()){if(eH.getModifiers()==0){switch(eP){case cG:this.stopEditing();
var eO=this.__F;
this.moveFocusedCell(0,1);

if(this.__F!=eO){eL=this.startEditing();
}break;
case bt:this.cancelEditing();
this.focus();
break;
default:eL=false;
break;
}}return;
}else{if(eH.isCtrlPressed()){eL=true;

switch(eP){case bu:var eM=this.getTableModel().getRowCount();

if(eM>0){this.getSelectionModel().setSelectionInterval(0,eM-1);
}break;
default:eL=false;
break;
}}else{switch(eP){case bK:this.__D.handleSelectKeyDown(this.__F,eH);
break;
case bg:case cG:eL=this.startEditing();
break;
case cb:this.setFocusedCell(this.__E,0,true);
break;
case cp:var eM=this.getTableModel().getRowCount();
this.setFocusedCell(this.__E,eM-1,true);
break;
case bI:this.moveFocusedCell(-1,0);
break;
case bJ:this.moveFocusedCell(1,0);
break;
case bD:this.moveFocusedCell(0,-1);
break;
case bU:this.moveFocusedCell(0,1);
break;
case bm:case bF:var eK=this.getPaneScroller(0);
var eN=eK.getTablePane();
var eM=eN.getVisibleRowCount()-1;
var eJ=this.getRowHeight();
var eI=(eP==bm)?-1:1;
eK.setScrollY(eK.getScrollY()+eI*eM*eJ);
this.moveFocusedCell(0,eI*eM);
break;
default:eL=false;
}}}
if(eO!=this.__F&&this.getRowFocusChangeModifiesSelection()){this.__D.handleMoveKeyDown(this.__F,eH);
}
if(eL){eH.preventDefault();
eH.stopPropagation();
}},_onFocusChanged:function(a){var b=this._getPaneScrollerArr();

for(var i=0;i<b.length;i++){b[i].onFocusChanged();
}},_onColVisibilityChanged:function(W){var X=this._getPaneScrollerArr();

for(var i=0;i<X.length;i++){X[i].onColVisibilityChanged();
}var Y=W.getData();

if(this.__K!=null&&Y.col!=null&&Y.visible!=null){this.__K[Y.col].setVisible(Y.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(m){var n=this._getPaneScrollerArr();

for(var i=0;i<n.length;i++){var o=m.getData();
n[i].setColumnWidth(o.col,o.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(dE){var dF=this._getPaneScrollerArr();

for(var i=0;i<dF.length;i++){dF[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(cH){var cI=this._getMetaColumnAtPageX(cH);
return (cI!=-1)?this.getPaneScroller(cI):null;
},setFocusedCell:function(cX,cY,da){if(!this.isEditing()&&(cX!=this.__E||cY!=this.__F)){if(cX===null){cX=0;
}this.__E=cX;
this.__F=cY;
var db=this._getPaneScrollerArr();

for(var i=0;i<db.length;i++){db[i].setFocusedCell(cX,cY);
}
if(cX!==null&&da){this.scrollCellVisible(cX,cY);
}}},clearSelection:function(){this.getSelectionModel().clearSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__E;
},getFocusedRow:function(){return this.__F;
},highlightFocusedRow:function(T){this.getDataRowRenderer().setHighlightFocusRow(T);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var E=this._getPaneScrollerArr();

for(var i=0;i<E.length;i++){E[i].onFocusChanged();
}},moveFocusedCell:function(d,e){var j=this.__E;
var k=this.__F;

if(j===null||k===null){return;
}
if(d!=0){var h=this.getTableColumnModel();
var x=h.getVisibleX(j);
var g=h.getVisibleColumnCount();
x=qx.lang.Number.limit(x+d,0,g-1);
j=h.getVisibleColumnAtX(x);
}
if(e!=0){var f=this.getTableModel();
k=qx.lang.Number.limit(k+e,0,f.getRowCount()-1);
}this.setFocusedCell(j,k,true);
},scrollCellVisible:function(ep,eq){var er=this.getTableColumnModel();
var x=er.getVisibleX(ep);
var es=this._getMetaColumnAtColumnX(x);

if(es!=-1){this.getPaneScroller(es).scrollCellVisible(ep,eq);
}},isEditing:function(){if(this.__E!=null){var x=this.getTableColumnModel().getVisibleX(this.__E);
var p=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(p).isEditing();
}return false;
},startEditing:function(){if(this.__E!=null){var x=this.getTableColumnModel().getVisibleX(this.__E);
var V=this._getMetaColumnAtColumnX(x);
var U=this.getPaneScroller(V).startEditing();
return U;
}return false;
},stopEditing:function(){if(this.__E!=null){var x=this.getTableColumnModel().getVisibleX(this.__E);
var el=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(el).stopEditing();
}},cancelEditing:function(){if(this.__E!=null){var x=this.getTableColumnModel().getVisibleX(this.__E);
var dG=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(dG).cancelEditing();
}},updateContent:function(){var de=this._getPaneScrollerArr();

for(var i=0;i<de.length;i++){de[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(N){var O=this._getPaneScrollerArr();

for(var i=0;i<O.length;i++){var P=O[i].getContainerLocation();

if(N>=P.left&&N<=P.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(t){var v=this.getMetaColumnCounts();
var w=0;

for(var i=0;i<v.length;i++){var u=v[i];
w+=u;

if(u==-1||t<w){return i;
}}return -1;
},_updateStatusBar:function(){var ez=this.getTableModel();

if(this.getStatusBarVisible()&&ez){var eA=this.getSelectionModel().getSelectedCount();
var eC=ez.getRowCount();
var eB;

if(eC>0){if(eA==0){eB=this.trn(bi,bV,eC,eC);
}else{eB=this.trn(bx,bG,eC,eA,eC);
}}
if(this.__H){if(eB){eB+=this.__H;
}else{eB=this.__H;
}}
if(eB){this.getChildControl(bo).setValue(eB);
}}},_updateScrollerWidths:function(){var I=this._getPaneScrollerArr();

for(var i=0;i<I.length;i++){var K=(i==(I.length-1));
var L=I[i].getTablePaneModel().getTotalWidth();
I[i].setPaneWidth(L);
var J=K?1:0;
I[i].setLayoutProperties({flex:J});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var dq=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var dt=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var dm=this._getPaneScrollerArr();
var dp=false;
var ds=false;

for(var i=0;i<dm.length;i++){var du=(i==(dm.length-1));
var dn=dm[i].getNeededScrollBars(dp,!du);

if(dn&dq){dp=true;
}
if(du&&(dn&dt)){ds=true;
}}for(var i=0;i<dm.length;i++){var du=(i==(dm.length-1));
var dr;
dm[i].setHorizontalScrollBarVisible(dp);
if(du){dr=dm[i].getVerticalScrollBarVisible();
}dm[i].setVerticalScrollBarVisible(du&&ds);
if(du&&ds!=dr){this.fireDataEvent(bz,ds);
}}},_initColumnMenu:function(){var dh=this.getTableModel();
var di=this.getTableColumnModel();
var dj=this.getChildControl(bq);
dj.empty();
var dg=dj.getMenu();
var dk={table:this,menu:dg,columnButton:dj};
this.fireDataEvent(bE,dk);
this.__K={};

for(var dl=0,l=dh.getColumnCount();dl<l;dl++){var df=dj.factory(ce,{text:dh.getColumnName(dl),column:dl,bVisible:di.isColumnVisible(dl)});
qx.core.Assert.assertInterface(df,qx.ui.table.IColumnMenuItem);
df.addListener(cs,this._createColumnVisibilityCheckBoxHandler(dl),this);
this.__K[dl]=df;
}var dk={table:this,menu:dg,columnButton:dj};
this.fireDataEvent(cy,dk);
},_createColumnVisibilityCheckBoxHandler:function(c){return function(cV){var cW=this.getTableColumnModel();
cW.setColumnVisible(c,cV.getData());
};
},setColumnWidth:function(eQ,eR){this.getTableColumnModel().setColumnWidth(eQ,eR);
},_onResize:function(){this.fireEvent(cj);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(cL,cM,self,cN){if(arguments.callee.self.__G[cL]){for(var i=0,cO=this._getPaneScrollerArr();i<cO.length;i++){cO[i].addListener.apply(cO[i],arguments);
}}else{return arguments.callee.base.call(this,cL,cM,self,cN);
}},removeListener:function(cR,cS,self,cT){if(arguments.callee.self.__G[cR]){for(var i=0,cU=this._getPaneScrollerArr();i<cU.length;i++){cU[i].removeListener.apply(cU[i],arguments);
}}else{arguments.callee.base.call(this,cR,cS,self,cT);
}},destroy:function(){this.getChildControl(bq).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(bj,cD)){qx.locale.Manager.getInstance().removeListener(bl,this._onChangeLocale,this);
}var S=this.getSelectionModel();

if(S){S.dispose();
}var R=this.getDataRowRenderer();

if(R){R.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(bM,cv,bY,cm);
this._disposeMap(bL);
}});
})();
(function(){var c="qx.ui.table.IRowRenderer";
qx.Interface.define(c,{members:{updateDataRowElement:function(d,e){},getRowHeightStyle:function(a){},createRowStyle:function(f){},getRowClass:function(b){}}});
})();
(function(){var o="",n="table-row-background-even",m="Boolean",l="default",k="__M",j="height:",i="table-row",h=';color:',g="table-row-background-odd",f="1px solid ",A="table-row-line",z="table-row-background-selected",y="background-color:",x="table-row-background-focused",w=';border-bottom: 1px solid ',v="table-row-selected",u="__N",t="__L",s="px;",r="table-row-background-focused-selected",p="qx.ui.table.rowrenderer.Default",q=";";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__L="";
this.__L={};
this.__M={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(l));
var e=qx.theme.manager.Color.getInstance();
this.__M.bgcolFocusedSelected=e.resolve(r);
this.__M.bgcolFocused=e.resolve(x);
this.__M.bgcolSelected=e.resolve(z);
this.__M.bgcolEven=e.resolve(n);
this.__M.bgcolOdd=e.resolve(g);
this.__M.colSelected=e.resolve(v);
this.__M.colNormal=e.resolve(i);
this.__M.horLine=e.resolve(A);
},properties:{highlightFocusRow:{check:m,init:true}},members:{__M:null,__N:null,__L:null,_insetY:1,_renderFont:function(B){if(B){this.__N=B.getStyles();
this.__L=qx.bom.element.Style.compile(this.__N);
this.__L=this.__L.replace(/"/g,"'");
}else{this.__L="";
this.__N=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(a,b){var d=this.__N;
var c=b.style;
qx.bom.element.Style.setStyles(b,d);

if(a.focusedRow&&this.getHighlightFocusRow()){c.backgroundColor=a.selected?this.__M.bgcolFocusedSelected:this.__M.bgcolFocused;
}else{if(a.selected){c.backgroundColor=this.__M.bgcolSelected;
}else{c.backgroundColor=(a.row%2==0)?this.__M.bgcolEven:this.__M.bgcolOdd;
}}c.color=a.selected?this.__M.colSelected:this.__M.colNormal;
c.borderBottom=f+this.__M.horLine;
},getRowHeightStyle:function(C){if(qx.bom.client.Feature.CONTENT_BOX){C-=this._insetY;
}return j+C+s;
},createRowStyle:function(D){var E=[];
E.push(q);
E.push(this.__L);
E.push(y);

if(D.focusedRow&&this.getHighlightFocusRow()){E.push(D.selected?this.__M.bgcolFocusedSelected:this.__M.bgcolFocused);
}else{if(D.selected){E.push(this.__M.bgcolSelected);
}else{E.push((D.row%2==0)?this.__M.bgcolEven:this.__M.bgcolOdd);
}}E.push(h);
E.push(D.selected?this.__M.colSelected:this.__M.colNormal);
E.push(w,this.__M.horLine);
return E.join(o);
},getRowClass:function(F){return o;
}},destruct:function(){this._disposeFields(k,u,t);
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
},members:{__O:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
this.setMenu(j);
return j;
case f:var m=new qx.ui.table.columnmenu.MenuItem(h.text);
m.setVisible(h.bVisible);
this.getMenu().add(m);
return m;
case c:var k=new qx.ui.menu.Button(h.text);
k.set({appearance:e});
return k;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+g);
}},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var n="Please use the value property instead.",m="changeChecked",l="checked",k="menu-checkbox",j="_applyValue",i="changeValue",h="Please use the changeValue event instead.",g="qx.ui.menu.CheckBox",f="function(value) {return qx.lang.Type.isString(value) || qx.lang.Type.isBoolean(value)}",d="qx.event.type.Data";
qx.Class.define(g,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MFormElement],implement:[qx.ui.form.IFormElement,qx.ui.form.IBooleanForm],construct:function(r,s){arguments.callee.base.call(this);
if(r!=null){if(r.translate){this.setLabel(r.translate());
}else{this.setLabel(r);
}}
if(s!=null){this.setMenu(s);
}},events:{"changeChecked":d},properties:{appearance:{refine:true,init:k},value:{check:f,init:false,apply:j,event:i,nullable:true}},members:{_applyValue:function(o,p){o?this.addState(l):this.removeState(l);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.toggleValue();
}},_onKeyPress:function(e){this.toggleValue();
},setChecked:function(q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
this.setValue(q);
},isChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return this.getValue();
},toggleChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
this.setValue(!this.getValue());
},getChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return this.getValue();
},resetChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
this.resetValue();
},addListener:function(a,b,self,c){if(a==m){qx.log.Logger.deprecatedEventWarning(arguments.callee,m,h);
}return arguments.callee.base.call(this,a,b,self,c);
},toggleValue:function(){this.setValue(!this.getValue());
},isValue:function(){return this.getValue();
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){arguments.callee.base.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__P:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var d="qx.ui.table.selection.Model",c="qx.ui.table.selection.Manager";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:d}},members:{__Q:null,handleMouseDown:function(e,f){if(f.isLeftPressed()){var g=this.getSelectionModel();

if(!g.isSelectedIndex(e)){this._handleSelectEvent(e,f);
this.__Q=true;
}else{this.__Q=false;
}}else if(f.isRightPressed()&&f.getModifiers()==0){var g=this.getSelectionModel();

if(!g.isSelectedIndex(e)){g.setSelectionInterval(e,e);
}}},handleMouseUp:function(h,i){if(i.isLeftPressed()&&!this.__Q){this._handleSelectEvent(h,i);
}},handleClick:function(j,k){},handleSelectKeyDown:function(a,b){this._handleSelectEvent(a,b);
},handleMoveKeyDown:function(q,r){var t=this.getSelectionModel();

switch(r.getModifiers()){case 0:t.setSelectionInterval(q,q);
break;
case qx.event.type.Dom.SHIFT_MASK:var s=t.getAnchorSelectionIndex();

if(s==-1){t.setSelectionInterval(q,q);
}else{t.setSelectionInterval(s,q);
}break;
}},_handleSelectEvent:function(l,m){var p=this.getSelectionModel();
var n=p.getLeadSelectionIndex();
var o=p.getAnchorSelectionIndex();

if(m.isShiftPressed()){if(l!=n||p.isSelectionEmpty()){if(o==-1){o=l;
}
if(m.isCtrlOrCommandPressed()){p.addSelectionInterval(o,l);
}else{p.setSelectionInterval(o,l);
}}}else if(m.isCtrlOrCommandPressed()){if(p.isSelectedIndex(l)){p.removeSelectionInterval(l,l);
}else{p.addSelectionInterval(l,l);
}}else{p.setSelectionInterval(l,l);
}}}});
})();
(function(){var J="..",I="changeSelection",H="__R",G="_applySelectionMode",F="]",E="qx.event.type.Event",D="Ranges:",C="qx.ui.table.selection.Model",B=" [";
qx.Class.define(C,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__R=[];
this.__S=-1;
this.__T=-1;
this.hasBatchModeRefCount=0;
this.__U=false;
},events:{"changeSelection":E},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:G}},members:{__U:null,__S:null,__T:null,__R:null,_applySelectionMode:function(r){this.clearSelection();
},setBatchMode:function(K){if(K){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__U){this.__U=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__S;
},_setAnchorSelectionIndex:function(y){this.__S=y;
},getLeadSelectionIndex:function(){return this.__T;
},_setLeadSelectionIndex:function(S){this.__T=S;
},_getSelectedRangeArr:function(){return this.__R;
},clearSelection:function(){if(!this.isSelectionEmpty()){this._clearSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__R.length==0;
},getSelectedCount:function(){var u=0;

for(var i=0;i<this.__R.length;i++){var t=this.__R[i];
u+=t.maxIndex-t.minIndex+1;
}return u;
},isSelectedIndex:function(n){for(var i=0;i<this.__R.length;i++){var o=this.__R[i];

if(n>=o.minIndex&&n<=o.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var s=[];

for(var i=0;i<this.__R.length;i++){s.push({minIndex:this.__R[i].minIndex,maxIndex:this.__R[i].maxIndex});
}return s;
},iterateSelection:function(p,q){for(var i=0;i<this.__R.length;i++){for(var j=this.__R[i].minIndex;j<=this.__R[i].maxIndex;j++){p.call(q,j);
}}},setSelectionInterval:function(v,w){var x=arguments.callee.self;

switch(this.getSelectionMode()){case x.NO_SELECTION:return;
case x.SINGLE_SELECTION:if(this.isSelectedIndex(w)){return;
}v=w;
break;
case x.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=v;i<=w;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._clearSelection();
this._addSelectionInterval(v,w);
this._fireChangeSelection();
},addSelectionInterval:function(k,l){var m=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case m.NO_SELECTION:return;
case m.MULTIPLE_INTERVAL_SELECTION:case m.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(k,l);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(k,l);
break;
}},removeSelectionInterval:function(a,b){this.__S=a;
this.__T=b;
var c=Math.min(a,b);
var e=Math.max(a,b);
for(var i=0;i<this.__R.length;i++){var g=this.__R[i];

if(g.minIndex>e){break;
}else if(g.maxIndex>=c){var h=(g.minIndex>=c)&&(g.minIndex<=e);
var f=(g.maxIndex>=c)&&(g.maxIndex<=e);

if(h&&f){this.__R.splice(i,1);
i--;
}else if(h){g.minIndex=e+1;
}else if(f){g.maxIndex=c-1;
}else{var d={minIndex:e+1,maxIndex:g.maxIndex};
this.__R.splice(i+1,0,d);
g.maxIndex=c-1;
break;
}}}this._fireChangeSelection();
},_clearSelection:function(){this.__R=[];
this.__S=-1;
this.__T=-1;
},_addSelectionInterval:function(L,M){this.__S=L;
this.__T=M;
var N=Math.min(L,M);
var P=Math.max(L,M);
var O=0;

for(;O<this.__R.length;O++){var Q=this.__R[O];

if(Q.minIndex>N){break;
}}this.__R.splice(O,0,{minIndex:N,maxIndex:P});
var R=this.__R[0];

for(var i=1;i<this.__R.length;i++){var Q=this.__R[i];

if(R.maxIndex+1>=Q.minIndex){R.maxIndex=Math.max(R.maxIndex,Q.maxIndex);
this.__R.splice(i,1);
i--;
}else{R=Q;
}}},_dumpRanges:function(){var z=D;

for(var i=0;i<this.__R.length;i++){var A=this.__R[i];
z+=B+A.minIndex+J+A.maxIndex+F;
}this.debug(z);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__U=true;
}else{this.fireEvent(I);
}}},destruct:function(){this._disposeFields(H);
}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(d){return true;
},updateHeaderCell:function(b,c){return true;
}}});
})();
(function(){var f="qx.ui.table.headerrenderer.Default",e="String";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:e,init:null,nullable:true}},members:{createHeaderCell:function(g){var h=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(g,h);
return h;
},updateHeaderCell:function(a,b){var c=qx.ui.table.headerrenderer.Default;
if(a.name&&a.name.translate){b.setLabel(a.name.translate());
}else{b.setLabel(a.name);
}var d=b.getToolTip();

if(this.getToolTip()!=null){if(d==null){d=new qx.ui.tooltip.ToolTip(this.getToolTip());
b.setToolTip(d);
}else{d.setLabel(this.getToolTip());
}}a.sorted?b.addState(c.STATE_SORTED):b.removeState(c.STATE_SORTED);
a.sortedAscending?b.addState(c.STATE_SORTED_ASCENDING):b.removeState(c.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var c="qx.ui.table.ICellRenderer";
qx.Interface.define(c,{members:{createDataCellHtml:function(a,b){return true;
}}});
})();
(function(){var l="",k="px;",j=".qooxdoo-table-cell {",i="qooxdoo-table-cell",h='" ',g="nowrap",f="default",e="qx.client",d="}",c="width:",I=".qooxdoo-table-cell-right { text-align:right } ",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="table-row-line",A='>',z="mshtml",s='</div>',t="ellipsis",q="content-box",r='left:',o="qx.ui.table.cellrenderer.Abstract",p='" style="',m="abstract",n="none",u="hidden",v="} ",x='px;',w=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(o,{type:m,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var N=qx.ui.table.cellrenderer.Abstract;

if(!N.__V){var P=qx.theme.manager.Color.getInstance();
N.__V=arguments.callee.self;
var O=j+
qx.bom.element.Style.compile({position:y,top:F,overflow:u,whiteSpace:g,borderRight:D+P.resolve(B),padding:H,cursor:f,textOverflow:t,userSelect:n})+v+I+w+C;

if(!qx.core.Variant.isSet(e,z)){O+=j+qx.bom.element.BoxSizing.compile(q)+d;
}N.__V.stylesheet=qx.bom.Stylesheet.createElement(O);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(a){return i;
},_getCellStyle:function(J){return J.style||l;
},_getCellAttributes:function(K){return l;
},_getContentHtml:function(b){return b.value||l;
},_getCellSizeStyle:function(Q,R,S,T){var U=l;

if(qx.bom.client.Feature.CONTENT_BOX){Q-=S;
R-=T;
}U+=c+Q+k;
U+=E+R+k;
return U;
},createDataCellHtml:function(L,M){M.push(G,this._getCellClass(L),p,r,L.styleLeft,x,this._getCellSizeStyle(L.styleWidth,L.styleHeight,this._insetX,this._insetY),this._getCellStyle(L),h,this._getCellAttributes(L),A+this._getContentHtml(L),s);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(m){if(this.getUseAutoAlign()){if(typeof m.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(j){var k=arguments.callee.base.call(this,j);

if(!k){return h;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=c;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=b;
}return k;
},_getContentHtml:function(i){return qx.bom.String.escape(this._formatValue(i));
},_formatValue:function(n){var p=n.value;

if(p==null){return h;
}
if(typeof p==a){return p;
}else if(typeof p==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var h="",g="Function",f="number",e="qx.ui.table.celleditor.TextField",d="table-editor-textfield",c="appear";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,construct:function(){arguments.callee.base.call(this);
},properties:{validationFunction:{check:g,nullable:true,init:null}},members:{__W:null,createCellEditor:function(a){var b=new qx.ui.form.TextField;
b.setAppearance(d);
b.originalValue=a.value;

if(a.value===null){a.value=h;
}b.setValue(h+a.value);
b.addListener(c,function(){b.selectAllText();
});
return b;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(!this.__W&&j){k=j(k,i.originalValue);
this.__W=true;
}
if(typeof i.originalValue==f){k=parseFloat(k);
}return k;
}}});
})();
(function(){var u="qx.event.type.Data",t="visibilityChanged",s="visibilityChangedPre",r="__X",q="orderChanged",p="__Y",o="widthChanged",n="qx.ui.table.columnmodel.Basic",m="__bb",l="__bc",h="__bf",k="__be",j="__bd";
qx.Class.define(n,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__X=[];
this.__Y=[];
},events:{"widthChanged":u,"visibilityChangedPre":u,"visibilityChanged":u,"orderChanged":u},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__ba:null,__bb:null,__Y:null,__X:null,__bc:null,__bd:null,__be:null,__bf:null,init:function(O){this.__bc=[];
var R=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var S=this.__bd=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER();
var Q=this.__be=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER();
var P=this.__bf=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY();
this.__X=[];
this.__Y=[];

for(var U=0;U<O;U++){this.__bc[U]={width:R,headerRenderer:S,dataRenderer:Q,editorFactory:P};
this.__X[U]=U;
this.__Y[U]=U;
}this.__bb=null;

for(var U=0;U<O;U++){var T={col:U,visible:true};
this.fireDataEvent(s,T);
this.fireDataEvent(t,T);
}},getVisibleColumns:function(){return this.__Y!=null?this.__Y:[];
},setColumnWidth:function(V,W){var Y=this.__bc[V].width;

if(Y!=W){this.__bc[V].width=W;
var X={col:V,newWidth:W,oldWidth:Y};
this.fireDataEvent(o,X);
}},getColumnWidth:function(w){return this.__bc[w].width;
},setHeaderCellRenderer:function(z,A){var B=this.__bc[z].headerRenderer;

if(B!==this.__bd){B.dispose();
}this.__bc[z].headerRenderer=A;
},getHeaderCellRenderer:function(ba){return this.__bc[ba].headerRenderer;
},setDataCellRenderer:function(e,f){var g=this.__bc[e].headerRenderer;

if(g!==this.__be){g.dispose();
}this.__bc[e].dataRenderer=f;
},getDataCellRenderer:function(N){return this.__bc[N].dataRenderer;
},setCellEditorFactory:function(D,E){var F=this.__bc[D].headerRenderer;

if(F!==this.__bf){F.dispose();
}this.__bc[D].editorFactory=E;
},getCellEditorFactory:function(v){return this.__bc[v].editorFactory;
},_getColToXPosMap:function(){if(this.__bb==null){this.__bb={};

for(var c=0;c<this.__X.length;c++){var b=this.__X[c];
this.__bb[b]={overX:c};
}
for(var a=0;a<this.__Y.length;a++){var b=this.__Y[a];
this.__bb[b].visX=a;
}}return this.__bb;
},getVisibleColumnCount:function(){return this.__Y!=null?this.__Y.length:0;
},getVisibleColumnAtX:function(H){return this.__Y[H];
},getVisibleX:function(y){return this._getColToXPosMap()[y].visX;
},getOverallColumnCount:function(){return this.__X.length;
},getOverallColumnAtX:function(d){return this.__X[d];
},getOverallX:function(C){return this._getColToXPosMap()[C].overX;
},isColumnVisible:function(G){return (this._getColToXPosMap()[G].visX!=null);
},setColumnVisible:function(bb,bc){if(bc!=this.isColumnVisible(bb)){if(bc){var bi=this._getColToXPosMap();
var bf=bi[bb].overX;

if(bf==null){throw new Error("Showing column failed: "+bb+". The column is not added to this TablePaneModel.");
}var bg;

for(var x=bf+1;x<this.__X.length;x++){var bh=this.__X[x];
var bd=bi[bh].visX;

if(bd!=null){bg=bd;
break;
}}if(bg==null){bg=this.__Y.length;
}this.__Y.splice(bg,0,bb);
}else{var be=this.getVisibleX(bb);
this.__Y.splice(be,1);
}this.__bb=null;
if(!this.__ba){var bj={col:bb,visible:bc};
this.fireDataEvent(s,bj);
this.fireDataEvent(t,bj);
}}},moveColumn:function(I,J){this.__ba=true;
var M=this.__X[I];
var K=this.isColumnVisible(M);

if(K){this.setColumnVisible(M,false);
}this.__X.splice(I,1);
this.__X.splice(J,0,M);
this.__bb=null;

if(K){this.setColumnVisible(M,true);
}this.__ba=false;
var L={col:M,fromOverXPos:I,toOverXPos:J};
this.fireDataEvent(q,L);
}},destruct:function(){for(var i=0;i<this.__bc.length;i++){this.__bc[i].headerRenderer.dispose();
this.__bc[i].dataRenderer.dispose();
this.__bc[i].editorFactory.dispose();
}this._disposeFields(r,p,l,m);
this._disposeObjects(j,k,h);
}});
})();
(function(){var l="icon",k="label",j="String",i="sort-icon",h="_applySortIcon",g="_applyIcon",f="table-header-cell",e="qx.ui.table.headerrenderer.HeaderCell",d="_applyLabel";
qx.Class.define(e,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var a=new qx.ui.layout.Grid();
a.setRowFlex(0,1);
a.setColumnFlex(1,1);
a.setColumnFlex(2,1);
this.setLayout(a);
},properties:{appearance:{refine:true,init:f},label:{check:j,init:null,nullable:true,apply:d},sortIcon:{check:j,init:null,nullable:true,apply:h,themeable:true},icon:{check:j,init:null,nullable:true,apply:g}},members:{_applyLabel:function(q,r){if(q){this._showChildControl(k).setValue(q);
}else{this._excludeChildControl(k);
}},_applySortIcon:function(b,c){if(b){this._showChildControl(i).setSource(b);
}else{this._excludeChildControl(i);
}},_applyIcon:function(m,n){if(m){this._showChildControl(l).setSource(m);
}else{this._excludeChildControl(l);
}},_createChildControlImpl:function(o){var p;

switch(o){case k:p=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(p,{row:0,column:1});
break;
case i:p=new qx.ui.basic.Image(this.getSortIcon());
p.setAnonymous(true);
this._add(p,{row:0,column:2});
break;
case l:p=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(p,{row:0,column:0});
break;
}return p||arguments.callee.base.call(this,o);
}}});
})();
(function(){var g="\n",f="",e=" &nbsp;",d="<br>",c=" ",b="qx.bom.String";
qx.Class.define(b,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(m){return qx.util.StringEscape.unescape(m,qx.bom.String.TO_CHARCODE);
},fromText:function(p){return qx.bom.String.escape(p).replace(/(  |\n)/g,function(n){var o={"  ":e,"\n":d};
return o[n]||n;
});
},toText:function(a){return qx.bom.String.unescape(a.replace(/\s+|<([^>])+>/gi,function(l){if(/\s+/.test(l)){return c;
}else if(/^<BR|^<br/gi.test(l)){return g;
}else{return f;
}}));
}},defer:function(i,j,k){i.FROM_CHARCODE=qx.lang.Object.invert(i.TO_CHARCODE);
}});
})();
(function(){var j=";",h="&",g='X',f="",e='#',d="&#",c="qx.util.StringEscape";
qx.Bootstrap.define(c,{statics:{escape:function(k,m){var o,q=f;

for(var i=0,l=k.length;i<l;i++){var p=k.charAt(i);
var n=p.charCodeAt(0);

if(m[n]){o=h+m[n]+j;
}else{if(n>0x7F){o=d+n+j;
}else{o=p;
}}q+=o;
}return q;
},unescape:function(a,b){return a.replace(/&[#\w]+;/gi,function(r){var s=r;
var r=r.substring(1,r.length-1);
var t=b[r];

if(t){s=String.fromCharCode(t);
}else{if(r.charAt(0)==e){if(r.charAt(1).toUpperCase()==g){t=r.substring(2);
if(t.match(/^[0-9A-Fa-f]+$/gi)){s=String.fromCharCode(parseInt(t,16));
}}else{t=r.substring(1);
if(t.match(/^\d+$/gi)){s=String.fromCharCode(parseInt(t,10));
}}}}return s;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(c){},parse:function(b){}}});
})();
(function(){var F="",E="Number",D="-",C="0",B="String",A="changeNumberFormat",z='(',y="g",x="Boolean",w="$",p="NaN",v='([0-9]{1,3}(?:',s='{0,1}[0-9]{3}){0,})',o='\\d+){0,1}',n="qx.util.format.NumberFormat",r="Infinity",q="^",t=".",m="-Infinity",u='([-+]){0,1}';
qx.Class.define(n,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(Q){arguments.callee.base.call(this);
this.__bg=Q;
},statics:{getIntegerInstance:function(){var G=qx.util.format.NumberFormat;

if(G._integerInstance==null){G._integerInstance=new G();
G._integerInstance.setMaximumFractionDigits(0);
}return G._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:E,init:0},maximumIntegerDigits:{check:E,nullable:true},minimumFractionDigits:{check:E,init:0},maximumFractionDigits:{check:E,nullable:true},groupingUsed:{check:x,init:true},prefix:{check:B,init:F,event:A},postfix:{check:B,init:F,event:A}},members:{__bg:null,format:function(a){switch(a){case Infinity:return r;
case -Infinity:return m;
case NaN:return p;
}var e=(a<0);

if(e){a=-a;
}
if(this.getMaximumFractionDigits()!=null){var l=Math.pow(10,this.getMaximumFractionDigits());
a=Math.round(a*l)/l;
}var k=String(Math.floor(a)).length;
var b=F+a;
var h=b.substring(0,k);

while(h.length<this.getMinimumIntegerDigits()){h=C+h;
}
if(this.getMaximumIntegerDigits()!=null&&h.length>this.getMaximumIntegerDigits()){h=h.substring(h.length-this.getMaximumIntegerDigits());
}var g=b.substring(k+1);

while(g.length<this.getMinimumFractionDigits()){g+=C;
}
if(this.getMaximumFractionDigits()!=null&&g.length>this.getMaximumFractionDigits()){g=g.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var d=h;
h=F;
var j;

for(j=d.length;j>3;j-=3){h=F+qx.locale.Number.getGroupSeparator(this.__bg)+d.substring(j-3,j)+h;
}h=d.substring(0,j)+h;
}var f=this.getPrefix()?this.getPrefix():F;
var c=this.getPostfix()?this.getPostfix():F;
var i=f+(e?D:F)+h;

if(g.length>0){i+=F+qx.locale.Number.getDecimalSeparator(this.__bg)+g;
}i+=c;
return i;
},parse:function(H){var M=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__bg)+F);
var K=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__bg)+F);
var I=new RegExp(q+qx.lang.String.escapeRegexpChars(this.getPrefix())+u+v+M+s+z+K+o+qx.lang.String.escapeRegexpChars(this.getPostfix())+w);
var L=I.exec(H);

if(L==null){throw new Error("Number string '"+H+"' does not match the number format");
}var N=(L[1]==D);
var P=L[2];
var O=L[3];
P=P.replace(new RegExp(M,y),F);
var J=(N?D:F)+P;

if(O!=null&&O.length!=0){O=O.replace(new RegExp(K),F);
J+=t+O;
}return parseFloat(J);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(f){return qx.locale.Manager.getInstance().localize(d,[],f);
},getGroupSeparator:function(e){return qx.locale.Manager.getInstance().localize(a,[],e);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var cS="(\\d\\d?)",cR="format",cQ="abbreviated",cP="",cO="wide",cN="(",cM=")",cL="|",cK="stand-alone",cJ="wildcard",cy="default",cx="literal",cw="'",cv="hour",cu="(\\d\\d?\\d?)",ct="ms",cs="narrow",cr="-",cq="quoted_literal",cp='a',da="HH:mm:ss",db="+",cX="HHmmss",cY="long",cV='z',cW="sec",cT="day",cU='Z',dc=" ",dd="min",cC="SSS",cB="h",cE="mm",cD='L',cG="Z",cF='K',cI="EEEE",cH="^",cA=":",cz='y',bt="(\\d\\d(\\d\\d)?)",bu="(\\d\\d)",bv="K",bw="__nJ",bx="a",by="GMT",bz="dd",bA="qx.util.format.DateFormat",bB="([\\+\\-]\\d\\d:?\\d\\d)",bC="H",dh="__nK",dg="YYYY",df="HH",de="EE",dl='h',dk="S",dj='s',di='A',dn="__nH",dm="KK",bY="ss",ca='H',bW='S',bX="0",cd="MMMM",ce='c',cb="d",cc="([a-zA-Z]+)",bU="__nI",bV='k',bK="m",bJ='D',bM="kk",bL="hh",bG="__nL",bF="MM",bI="yy",bH="yyyy-MM-dd HH:mm:ss",bE="short",bD='d',cj="unkown",ck='Y',cl='m',cm="(\\d\\d\\d\\d)",cf="k",cg='M',ch="SS",ci="MMM",cn="s",co="M",bT='w',bS="EEE",bR="$",bQ="?",bP='E',bO="z",bN="yyyy";
qx.Class.define(bA,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(b,c){arguments.callee.base.call(this);

if(!c){this.__nH=qx.locale.Manager.getInstance().getLocale();
}else{this.__nH=c;
}
if(b!=null){this.__nI=b.toString();
}else{this.__nI=qx.locale.Date.getDateFormat(cY,this.__nH)+dc+qx.locale.Date.getDateTimeFormat(cX,da,this.__nH);
}},statics:{getDateTimeInstance:function(){var dW=qx.util.format.DateFormat;
var dV=qx.locale.Date.getDateFormat(cY)+dc+qx.locale.Date.getDateTimeFormat(cX,da);

if(dW._dateInstance==null||dW.__nI!=dV){dW._dateTimeInstance=new dW();
}return dW._dateTimeInstance;
},getDateInstance:function(){var o=qx.util.format.DateFormat;
var n=qx.locale.Date.getDateFormat(bE)+cP;

if(o._dateInstance==null||o.__nI!=n){o._dateInstance=new o(n);
}return o._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:bH,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__nH:null,__nI:null,__nJ:null,__nK:null,__nL:null,__nM:function(q,r){var s=cP+q;

while(s.length<r){s=bX+s;
}return s;
},__nN:function(dO){var dP=new Date(dO.getTime());
var dQ=dP.getDate();

while(dP.getMonth()!=0){dP.setDate(-1);
dQ+=dP.getDate()+1;
}return dQ;
},__nO:function(a){return new Date(a.getTime()+(3-((a.getDay()+6)%7))*86400000);
},__nP:function(dK){var dM=this.__nO(dK);
var dN=dM.getFullYear();
var dL=this.__nO(new Date(dN,0,4));
return Math.floor(1.5+(dM.getTime()-dL.getTime())/86400000/7);
},format:function(C){if(C==null){return null;
}var I=qx.util.format.DateFormat;
var J=this.__nH;
var T=C.getFullYear();
var N=C.getMonth();
var V=C.getDate();
var D=C.getDay();
var O=C.getHours();
var K=C.getMinutes();
var P=C.getSeconds();
var R=C.getMilliseconds();
var U=C.getTimezoneOffset();
var G=U>0?1:-1;
var E=Math.floor(Math.abs(U)/60);
var L=Math.abs(U)%60;
this.__nQ();
var S=cP;

for(var i=0;i<this.__nL.length;i++){var Q=this.__nL[i];

if(Q.type==cx){S+=Q.text;
}else{var H=Q.character;
var M=Q.size;
var F=bQ;

switch(H){case cz:case ck:if(M==2){F=this.__nM(T%100,2);
}else if(M==4){F=T;
}break;
case bJ:F=this.__nM(this.__nN(C),M);
break;
case bD:F=this.__nM(V,M);
break;
case bT:F=this.__nM(this.__nP(C),M);
break;
case bP:if(M==2){F=qx.locale.Date.getDayName(cs,D,J,cR);
}else if(M==3){F=qx.locale.Date.getDayName(cQ,D,J,cR);
}else if(M==4){F=qx.locale.Date.getDayName(cO,D,J,cR);
}break;
case ce:if(M==2){F=qx.locale.Date.getDayName(cs,D,J,cK);
}else if(M==3){F=qx.locale.Date.getDayName(cQ,D,J,cK);
}else if(M==4){F=qx.locale.Date.getDayName(cO,D,J,cK);
}break;
case cg:if(M==1||M==2){F=this.__nM(N+1,M);
}else if(M==3){F=qx.locale.Date.getMonthName(cQ,N,J,cR);
}else if(M==4){F=qx.locale.Date.getMonthName(cO,N,J,cR);
}break;
case cD:if(M==1||M==2){F=this.__nM(N+1,M);
}else if(M==3){F=qx.locale.Date.getMonthName(cQ,N,J,cK);
}else if(M==4){F=qx.locale.Date.getMonthName(cO,N,J,cK);
}break;
case cp:F=(O<12)?qx.locale.Date.getAmMarker(J):qx.locale.Date.getPmMarker(J);
break;
case ca:F=this.__nM(O,M);
break;
case bV:F=this.__nM((O==0)?24:O,M);
break;
case cF:F=this.__nM(O%12,M);
break;
case dl:F=this.__nM(((O%12)==0)?12:(O%12),M);
break;
case cl:F=this.__nM(K,M);
break;
case dj:F=this.__nM(P,M);
break;
case bW:F=this.__nM(R,M);
break;
case cV:if(M==1){F=by+((G>0)?cr:db)+this.__nM(Math.abs(E))+cA+this.__nM(L,2);
}else if(M==2){F=I.MEDIUM_TIMEZONE_NAMES[E];
}else if(M==3){F=I.FULL_TIMEZONE_NAMES[E];
}break;
case cU:F=((G>0)?cr:db)+this.__nM(Math.abs(E),2)+this.__nM(L,2);
break;
}S+=F;
}}return S;
},parse:function(d){this.__nR();
var k=this.__nJ.regex.exec(d);

if(k==null){throw new Error("Date string '"+d+"' does not match the date format: "+this.__nI);
}var e={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var f=1;

for(var i=0;i<this.__nJ.usedRules.length;i++){var h=this.__nJ.usedRules[i];
var g=k[f];

if(h.field!=null){e[h.field]=parseInt(g,10);
}else{h.manipulator(e,g);
}f+=(h.groups==null)?1:h.groups;
}var j=new Date(e.year,e.month,e.day,(e.ispm)?(e.hour+12):e.hour,e.min,e.sec,e.ms);

if(e.month!=j.getMonth()||e.year!=j.getFullYear()){throw new Error("Error parsing date '"+d+"': the value for day or month is too large");
}return j;
},__nQ:function(){if(this.__nL!=null){return;
}this.__nL=[];
var z;
var x=0;
var B=cP;
var v=this.__nI;
var y=cy;
var i=0;

while(i<v.length){var A=v.charAt(i);

switch(y){case cq:if(A==cw){if(i+1>=v.length){i++;
break;
}var w=v.charAt(i+1);

if(w==cw){B+=A;
i++;
}else{i++;
y=cj;
}}else{B+=A;
i++;
}break;
case cJ:if(A==z){x++;
i++;
}else{this.__nL.push({type:cJ,character:z,size:x});
z=null;
x=0;
y=cy;
}break;
default:if((A>=cp&&A<=cV)||(A>=di&&A<=cU)){z=A;
y=cJ;
}else if(A==cw){if(i+1>=v.length){B+=A;
i++;
break;
}var w=v.charAt(i+1);

if(w==cw){B+=A;
i++;
}i++;
y=cq;
}else{y=cy;
}
if(y!=cy){if(B.length>0){this.__nL.push({type:cx,text:B});
B=cP;
}}else{B+=A;
i++;
}break;
}}if(z!=null){this.__nL.push({type:cJ,character:z,size:x});
}else if(B.length>0){this.__nL.push({type:cx,text:B});
}},__nR:function(){if(this.__nJ!=null){return ;
}var bk=this.__nI;
this.__nS();
this.__nQ();
var bq=[];
var bm=cH;

for(var bi=0;bi<this.__nL.length;bi++){var br=this.__nL[bi];

if(br.type==cx){bm+=qx.lang.String.escapeRegexpChars(br.text);
}else{var bj=br.character;
var bn=br.size;
var bl;

for(var bs=0;bs<this.__nK.length;bs++){var bo=this.__nK[bs];

if(bj==bo.pattern.charAt(0)&&bn==bo.pattern.length){bl=bo;
break;
}}if(bl==null){var bp=cP;

for(var i=0;i<bn;i++){bp+=bj;
}throw new Error("Malformed date format: "+bk+". Wildcard "+bp+" is not supported");
}else{bq.push(bl);
bm+=bl.regex;
}}}bm+=bR;
var bh;

try{bh=new RegExp(bm);
}catch(p){throw new Error("Malformed date format: "+bk);
}this.__nJ={regex:bh,"usedRules":bq,pattern:bm};
},__nS:function(){var dx=qx.util.format.DateFormat;

if(this.__nK!=null){return ;
}this.__nK=[];
var dJ=function(dp,dq){dq=parseInt(dq,10);

if(dq<dx.ASSUME_YEAR_2000_THRESHOLD){dq+=2000;
}else if(dq<100){dq+=1900;
}dp.year=dq;
};
var dz=function(W,X){W.month=parseInt(X,10)-1;
};
var dA=function(dr,ds){dr.ispm=(ds==dx.PM_MARKER);
};
var dE=function(l,m){l.hour=parseInt(m,10)%24;
};
var dy=function(Y,ba){Y.hour=parseInt(ba,10)%12;
};
var dH=function(dR,dS){return;
};
var dF=qx.locale.Date.getMonthNames(cQ,this.__nH,cR);

for(var i=0;i<dF.length;i++){dF[i]=qx.lang.String.escapeRegexpChars(dF[i].toString());
}var dG=function(bf,bg){bg=qx.lang.String.escapeRegexpChars(bg);
bf.month=dF.indexOf(bg);
};
var du=qx.locale.Date.getMonthNames(cO,this.__nH,cR);

for(var i=0;i<du.length;i++){du[i]=qx.lang.String.escapeRegexpChars(du[i].toString());
}var dt=function(t,u){u=qx.lang.String.escapeRegexpChars(u);
t.month=du.indexOf(u);
};
var dw=qx.locale.Date.getDayNames(cs,this.__nH,cR);

for(var i=0;i<dw.length;i++){dw[i]=qx.lang.String.escapeRegexpChars(dw[i].toString());
}var dC=function(bd,be){be=qx.lang.String.escapeRegexpChars(be);
bd.month=dw.indexOf(be);
};
var dI=qx.locale.Date.getDayNames(cQ,this.__nH,cR);

for(var i=0;i<dI.length;i++){dI[i]=qx.lang.String.escapeRegexpChars(dI[i].toString());
}var dB=function(bb,bc){bc=qx.lang.String.escapeRegexpChars(bc);
bb.month=dI.indexOf(bc);
};
var dD=qx.locale.Date.getDayNames(cO,this.__nH,cR);

for(var i=0;i<dD.length;i++){dD[i]=qx.lang.String.escapeRegexpChars(dD[i].toString());
}var dv=function(dT,dU){dU=qx.lang.String.escapeRegexpChars(dU);
dT.month=dD.indexOf(dU);
};
this.__nK.push({pattern:dg,regex:cm,manipulator:dJ});
this.__nK.push({pattern:bN,regex:bt,groups:2,manipulator:dJ});
this.__nK.push({pattern:bI,regex:bu,manipulator:dJ});
this.__nK.push({pattern:co,regex:cS,manipulator:dz});
this.__nK.push({pattern:bF,regex:cS,manipulator:dz});
this.__nK.push({pattern:ci,regex:cN+dF.join(cL)+cM,manipulator:dG});
this.__nK.push({pattern:cd,regex:cN+du.join(cL)+cM,manipulator:dt});
this.__nK.push({pattern:bz,regex:cS,field:cT});
this.__nK.push({pattern:cb,regex:cS,field:cT});
this.__nK.push({pattern:de,regex:cN+dw.join(cL)+cM,manipulator:dC});
this.__nK.push({pattern:bS,regex:cN+dI.join(cL)+cM,manipulator:dB});
this.__nK.push({pattern:cI,regex:cN+dD.join(cL)+cM,manipulator:dv});
this.__nK.push({pattern:bx,regex:cN+dx.AM_MARKER+cL+dx.PM_MARKER+cM,manipulator:dA});
this.__nK.push({pattern:df,regex:cS,field:cv});
this.__nK.push({pattern:bC,regex:cS,field:cv});
this.__nK.push({pattern:bM,regex:cS,manipulator:dE});
this.__nK.push({pattern:cf,regex:cS,manipulator:dE});
this.__nK.push({pattern:dm,regex:cS,field:cv});
this.__nK.push({pattern:bv,regex:cS,field:cv});
this.__nK.push({pattern:bL,regex:cS,manipulator:dy});
this.__nK.push({pattern:cB,regex:cS,manipulator:dy});
this.__nK.push({pattern:cE,regex:cS,field:dd});
this.__nK.push({pattern:bK,regex:cS,field:dd});
this.__nK.push({pattern:bY,regex:cS,field:cW});
this.__nK.push({pattern:cn,regex:cS,field:cW});
this.__nK.push({pattern:cC,regex:cu,field:ct});
this.__nK.push({pattern:ch,regex:cu,field:ct});
this.__nK.push({pattern:dk,regex:cu,field:ct});
this.__nK.push({pattern:cG,regex:bB,manipulator:dH});
this.__nK.push({pattern:bO,regex:cc,manipulator:dH});
}},destruct:function(){this._disposeFields(bU,dn,bG,bw,dh);
}});
})();
(function(){var u="_",t="format",s="thu",r="sat",q="cldr_day_",p="cldr_month_",o="wed",n="fri",m="tue",l="mon",L="sun",K="short",J="HH:mm",I="HHmmsszz",H="HHmm",G="HHmmss",F="cldr_date_format_",E="HH:mm:ss zz",D="full",C="cldr_pm",A="long",B="medium",y="cldr_am",z="qx.locale.Date",w="cldr_date_time_format_",x="cldr_time_format_",v="HH:mm:ss";
qx.Class.define(z,{statics:{__ny:qx.locale.Manager.getInstance(),getAmMarker:function(Q){return this.__ny.localize(y,[],Q);
},getPmMarker:function(bj){return this.__ny.localize(C,[],bj);
},getDayNames:function(length,bk,bl){var bl=bl?bl:t;
{};
var bn=[L,l,m,o,s,n,r];
var bo=[];

for(var i=0;i<bn.length;i++){var bm=q+bl+u+length+u+bn[i];
bo.push(this.__ny.localize(bm,[],bk));
}return bo;
},getDayName:function(length,bp,bq,br){var br=br?br:t;
{};
var bt=[L,l,m,o,s,n,r];
var bs=q+br+u+length+u+bt[bp];
return this.__ny.localize(bs,[],bq);
},getMonthNames:function(length,bf,bg){var bg=bg?bg:t;
{};
var bi=[];

for(var i=0;i<12;i++){var bh=p+bg+u+length+u+(i+1);
bi.push(this.__ny.localize(bh,[],bf));
}return bi;
},getMonthName:function(length,bu,bv,bw){var bw=bw?bw:t;
{};
var bx=p+bw+u+length+u+(bu+1);
return this.__ny.localize(bx,[],bv);
},getDateFormat:function(bc,bd){{};
var be=F+bc;
return this.__ny.localize(be,[],bd);
},getDateTimeFormat:function(c,d,e){var g=w+c;
var f=this.__ny.localize(g,[],e);

if(f==g){f=d;
}return f;
},getTimeFormat:function(M,N){{};
var P=x+M;
var O=this.__ny.localize(P,[],N);

if(O!=P){return O;
}
switch(M){case K:case B:return qx.locale.Date.getDateTimeFormat(H,J);
case A:return qx.locale.Date.getDateTimeFormat(G,v);
case D:return qx.locale.Date.getDateTimeFormat(I,E);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(V){var W={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var X=qx.locale.Date._getTerritory(V);
return W[X]!=null?W[X]:1;
},getWeekendStart:function(Y){var bb={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var ba=qx.locale.Date._getTerritory(Y);
return bb[ba]!=null?bb[ba]:6;
},getWeekendEnd:function(h){var j={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var k=qx.locale.Date._getTerritory(h);
return j[k]!=null?j[k]:0;
},isWeekend:function(R,S){var U=qx.locale.Date.getWeekendStart(S);
var T=qx.locale.Date.getWeekendEnd(S);

if(T>U){return ((R>=U)&&(R<=T));
}else{return ((R>=U)||(R<=T));
}},_getTerritory:function(a){if(a){var b=a.split(u)[1]||a;
}else{b=this.__ny.getTerritory()||this.__ny.getLanguage();
}return b.toUpperCase();
}}});
})();
(function(){var bx="",bw="Number",bv='</div>',bu='" ',bt='<div>',bs="</div>",br="overflow: hidden;",bq="paneReloadsData",bp="__bh",bo="div",bQ='style="',bP="qx.event.type.Data",bO="qx.ui.table.pane.Pane",bN="width: 100%;",bM="px;",bL="_applyVisibleRowCount",bK='>',bJ="line-height: ",bI="appear",bH='class="',bE="width:100%;",bF="__bk",bC="_applyMaxCacheLines",bD='<div ',bA="__bl",bB="'>",by="_applyFirstVisibleRow",bz="<div style='",bG=";position:relative;";
qx.Class.define(bO,{extend:qx.ui.core.Widget,construct:function(z){arguments.callee.base.call(this);
this.__bh=z;
this.__bi=0;
this.__bj=0;
this.__bk=[];
},events:{"paneReloadsData":bP},properties:{firstVisibleRow:{check:bw,init:0,apply:by},visibleRowCount:{check:bw,init:0,apply:bL},maxCacheLines:{check:bw,init:1000,apply:bC},allowShrinkX:{refine:true,init:false}},members:{__bj:null,__bi:null,__bh:null,__bl:null,__bm:null,__bn:null,__bk:null,__bo:0,_applyFirstVisibleRow:function(cy,cz){this.updateContent(false,cy-cz);
},_applyVisibleRowCount:function(N,O){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__bh;
},getTable:function(){return this.__bh.getTable();
},setFocusedCell:function(cu,cv,cw){if(cu!=this.__bn||cv!=this.__bm){var cx=this.__bm;
this.__bn=cu;
this.__bm=cv;
if(cv!=cx&&!cw){if(cv!==null&&cx!==null){this.updateContent(false,null,cx,true);
this.updateContent(false,null,cv,true);
}else{this.updateContent();
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(v,w){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(a,b,c,d){this.__bp();
var f=this.getFirstVisibleRow();
var e=this.getVisibleRowCount();

if(b==-1||b>=f&&a<f+e){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(P,Q){if(this.__bo>=P&&P!==-1){this.__bp();
}},__bp:function(){this.__bk=[];
this.__bo=0;
},__bq:function(g,h,j){if(!h&&!j&&this.__bk[g]){return this.__bk[g];
}else{return null;
}},__br:function(R,S,T,U){var V=this.getMaxCacheLines();

if(!T&&!U&&!this.__bk[R]&&V>0){this._applyMaxCacheLines(V);
this.__bk[R]=S;
this.__bo+=1;
}},updateContent:function(bj,bk,bl,bm){if(bj){this.__bp();
}if(bk&&Math.abs(bk)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bk);
}else if(bm&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bl);
}else{this._updateAllRows();
}},_updateRowStyles:function(k){var o=this.getContentElement().getDomElement();

if(!o||!o.firstChild){this._updateAllRows();
return;
}var s=this.getTable();
var m=s.getSelectionModel();
var p=s.getTableModel();
var t=s.getDataRowRenderer();
var n=o.firstChild.childNodes;
var r={table:s};
var u=this.getFirstVisibleRow();
var y=0;
var l=n.length;

if(k!=null){var q=k-u;

if(q>=0&&q<l){u=k;
y=q;
l=q+1;
}else{return;
}}
for(;y<l;y++,u++){r.row=u;
r.selected=m.isSelectedIndex(u);
r.focusedRow=(this.__bm==u);
r.rowData=p.getRowData(u);
t.updateDataRowElement(r,n[y]);
}},_getRowsHtml:function(bR,bS){var bY=this.getTable();
var cc=bY.getSelectionModel();
var bV=bY.getTableModel();
var bW=bY.getTableColumnModel();
var cq=this.getPaneScroller().getTablePaneModel();
var ch=bY.getDataRowRenderer();
bV.prefetchRows(bR,bR+bS-1);
var cn=bY.getRowHeight();
var cp=cq.getColumnCount();
var bX=0;
var bU=[];
for(var x=0;x<cp;x++){var cs=cq.getColumnAtX(x);
var cb=bW.getColumnWidth(cs);
bU.push({col:cs,xPos:x,editable:bV.isColumnEditable(cs),focusedCol:this.__bn==cs,styleLeft:bX,styleWidth:cb});
bX+=cb;
}var cr=[];
var ct=false;

for(var ca=bR;ca<bR+bS;ca++){var cd=cc.isSelectedIndex(ca);
var cg=(this.__bm==ca);
var ck=this.__bq(ca,cd,cg);

if(ck){cr.push(ck);
continue;
}var cj=[];
var cm={table:bY};
cm.styleHeight=cn;
cm.row=ca;
cm.selected=cd;
cm.focusedRow=cg;
cm.rowData=bV.getRowData(ca);

if(!cm.rowData){ct=true;
}cj.push(bD);
var bT=ch.getRowClass(cm);

if(bT){cj.push(bH,bT,bu);
}var ci=ch.createRowStyle(cm);
ci+=bG+ch.getRowHeightStyle(cn)+bE;

if(ci){cj.push(bQ,ci,bu);
}cj.push(bK);

for(var x=0;x<cp;x++){var ce=bU[x];

for(var co in ce){cm[co]=ce[co];
}var cs=cm.col;
cm.value=bV.getValue(cs,ca);
var cf=bW.getDataCellRenderer(cs);
cf.createDataCellHtml(cm,cj);
}cj.push(bv);
var cl=cj.join(bx);
this.__br(ca,cl,cd,cg);
cr.push(cl);
}this.fireDataEvent(bq,ct);
return cr.join(bx);
},_scrollContent:function(A){var B=this.getContentElement().getDomElement();

if(!(B&&B.firstChild)){this._updateAllRows();
return;
}var K=B.firstChild;
var C=K.childNodes;
var I=this.getVisibleRowCount();
var H=this.getFirstVisibleRow();
var F=this.getTable().getTableModel();
var L=0;

if(F!=null){L=F.getRowCount();
}if(H+I>L){this._updateAllRows();
return;
}var M=A<0?I+A:0;
var D=A<0?0:I-A;

for(i=Math.abs(A)-1;i>=0;i--){var G=C[M];

try{K.removeChild(G);
}catch(bn){break;
}}if(!this.__bl){this.__bl=document.createElement(bo);
}var J=bt;
J+=this._getRowsHtml(H+D,Math.abs(A));
J+=bv;
this.__bl.innerHTML=J;
var E=this.__bl.firstChild.childNodes;
if(A>0){for(var i=E.length-1;i>=0;i--){var G=E[0];
K.appendChild(G);
}}else{for(var i=E.length-1;i>=0;i--){var G=E[E.length-1];
K.insertBefore(G,K.firstChild);
}}if(this.__bm!==null){this._updateRowStyles(this.__bm-A);
this._updateRowStyles(this.__bm);
}},_updateAllRows:function(){var ba=this.getContentElement().getDomElement();

if(!ba){this.addListenerOnce(bI,arguments.callee,this);
return;
}var bg=this.getTable();
var bd=bg.getTableModel();
var bf=this.getPaneScroller().getTablePaneModel();
var be=bf.getColumnCount();
var W=bg.getRowHeight();
var bb=this.getFirstVisibleRow();
var X=this.getVisibleRowCount();
var bh=0;

if(bd!=null){bh=bd.getRowCount();
}
if(bb+X>bh){X=Math.max(0,bh-bb);
}var Y=bf.getTotalWidth();
var bc;
if(X>0){bc=[bz,bN,(bg.getForceLineHeight()?bJ+W+bM:bx),br,bB,this._getRowsHtml(bb,X),bs];
}else{bc=[];
}var bi=bc.join(bx);
ba.innerHTML=bi;
this.setWidth(Y);
this.__bi=be;
this.__bj=X;
}},destruct:function(){this._disposeFields(bA,bp,bF);
}});
})();
(function(){var o="hovered",n="__bs",m="qx.ui.table.pane.Header";
qx.Class.define(m,{extend:qx.ui.core.Widget,construct:function(r){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__bs=r;
},members:{__bs:null,__bt:null,__bu:null,getPaneScroller:function(){return this.__bs;
},getTable:function(){return this.__bs.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(H,I){var J=this.getHeaderWidgetAtColumn(H);

if(J!=null){J.setWidth(I);
}},setMouseOverColumn:function(F){if(F!=this.__bu){if(this.__bu!=null){var G=this.getHeaderWidgetAtColumn(this.__bu);

if(G!=null){G.removeState(o);
}}
if(F!=null){this.getHeaderWidgetAtColumn(F).addState(o);
}this.__bu=F;
}},getHeaderWidgetAtColumn:function(p){var q=this.getPaneScroller().getTablePaneModel().getX(p);
return this._getChildren()[q];
},showColumnMoveFeedback:function(c,x){var g=this.getContainerLocation();

if(this.__bt==null){var d=this.getPaneScroller().getTablePaneModel().getX(c);
var f=this._getChildren()[d];
var h=this.getTable().getTableModel();
var j=this.getTable().getTableColumnModel();
var k={xPos:d,col:c,name:h.getColumnName(c)};
var i=j.getHeaderCellRenderer(c);
var e=i.createHeaderCell(k);
var l=f.getBounds();
e.setWidth(l.width);
e.setHeight(l.height);
e.setZIndex(1000000);
e.setOpacity(0.8);
e.setLayoutProperties({top:g.top});
this.getApplicationRoot().add(e);
this.__bt=e;
}this.__bt.setLayoutProperties({left:g.left+x});
this.__bt.show();
},hideColumnMoveFeedback:function(){if(this.__bt!=null){this.__bt.destroy();
this.__bt=null;
}},isShowingColumnMoveFeedback:function(){return this.__bt!=null;
},_updateContent:function(s){var y=this.getTable().getTableModel();
var B=this.getTable().getTableColumnModel();
var C=this.getPaneScroller().getTablePaneModel();
var E=this._getChildren();
var z=C.getColumnCount();
var t=0;

if(y!=null){t=y.getSortColumnIndex();
}if(s){this._cleanUpCells();
}var u={};
u.sortedAscending=false;

if(y!=null){u.sortedAscending=y.isSortAscending();
}
for(var x=0;x<z;x++){var w=C.getColumnAtX(x);
var D=B.getColumnWidth(w);
var A=B.getHeaderCellRenderer(w);
u.xPos=x;
u.col=w;
u.name=y.getColumnName(w);
u.editable=y.isColumnEditable(w);
u.sorted=(w==t);
var v=E[x];
if(v==null){v=A.createHeaderCell(u);
v.set({width:D});
this._add(v);
}else{A.updateHeaderCell(u,v);
}}},_cleanUpCells:function(){var b=this._getChildren();

for(var x=b.length-1;x>=0;x--){var a=b[x];
a.destroy();
}}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var G="Boolean",F="resize-line",E="mousedown",D="mouseup",C="qx.ui.table.pane.CellEvent",B="scroll",A="focus-indicator",z="excluded",y="scrollbar-y",w="qx.event.type.Data",bE="visible",bD="mousemove",bC="header",bB="editing",bA="click",bz="modelChanged",by="scrollbar-x",bx="cellClick",bw="pane",bv="__bv",N="__bB",O="mouseout",L="changeHorizontalScrollBarVisible",M="__by",J="bottom",K="_applyScrollTimeout",H="changeScrollX",I="_applyTablePaneModel",R="Integer",S="__bD",bb="dblclick",Y="__bx",bj="__bz",be="dataEdited",br="mousewheel",bo="qx.ui.table.pane.Scroller",U="__ca",bu="__bA",bt="_applyShowCellFocusIndicator",bs="resize",T="__bw",W="vertical",X="changeScrollY",ba="appear",bc="table-scroller",bf="__bC",bl="cellDblclick",bq="horizontal",P="__bQ",Q="losecapture",V="contextmenu",bi="col-resize",bh="disappear",bg="_applyVerticalScrollBarVisible",bn="_applyHorizontalScrollBarVisible",bm="cellContextmenu",bd="close",bk="changeTablePaneModel",v="qx.ui.table.pane.Model",bp="changeVerticalScrollBarVisible";
qx.Class.define(bo,{extend:qx.ui.core.Widget,construct:function(fk){arguments.callee.base.call(this);
this.__bv=fk;
var fl=new qx.ui.layout.Grid();
fl.setColumnFlex(0,1);
fl.setRowFlex(1,1);
this._setLayout(fl);
this.__bw=this._showChildControl(by);
this.__bx=this._showChildControl(y);
this.__by=this._showChildControl(bC);
this.__bz=this._showChildControl(bw);
this.__bA=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__bA,{row:0,column:0,colSpan:2});
this.__bB=new qx.ui.table.pane.Clipper();
this.__bB.add(this.__by);
this.__bB.addListener(Q,this._onChangeCaptureHeader,this);
this.__bB.addListener(bD,this._onMousemoveHeader,this);
this.__bB.addListener(E,this._onMousedownHeader,this);
this.__bB.addListener(D,this._onMouseupHeader,this);
this.__bB.addListener(bA,this._onClickHeader,this);
this.__bA.add(this.__bB,{flex:1});
this.__bC=new qx.ui.table.pane.Clipper();
this.__bC.add(this.__bz);
this.__bC.addListener(br,this._onMousewheel,this);
this.__bC.addListener(bD,this._onMousemovePane,this);
this.__bC.addListener(E,this._onMousedownPane,this);
this.__bC.addListener(D,this._onMouseupPane,this);
this.__bC.addListener(bA,this._onClickPane,this);
this.__bC.addListener(V,this._onContextMenu,this);
this.__bC.addListener(bb,this._onDblclickPane,this);
this.__bC.addListener(bs,this._onResizePane,this);
this._add(this.__bC,{row:1,column:0});
this.__bD=this.getChildControl(A);
this.getChildControl(F).hide();
this.addListener(O,this._onMouseout,this);
this.addListener(ba,this._onAppear,this);
this.addListener(bh,this._onDisappear,this);
if(!this.__bE){this.__bE=qx.lang.Function.bind(this._oninterval,this);
}this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":w,"changeScrollX":w,"cellClick":C,"cellDblclick":C,"cellContextmenu":C},properties:{horizontalScrollBarVisible:{check:G,init:true,apply:bn,event:L},verticalScrollBarVisible:{check:G,init:true,apply:bg,event:bp},tablePaneModel:{check:v,apply:I,event:bk},liveResize:{check:G,init:false},focusCellOnMouseMove:{check:G,init:false},selectBeforeFocus:{check:G,init:false},showCellFocusIndicator:{check:G,init:true,apply:bt},scrollTimeout:{check:R,init:100,apply:K},appearance:{refine:true,init:bc}},members:{__bF:null,__bv:null,__bG:null,__bH:null,__bE:null,__bI:null,__bJ:null,__bK:null,__bL:null,__bM:null,__bN:null,__bO:null,__bP:null,__bQ:null,__bR:null,__bS:null,__bT:null,__bU:null,__bV:null,__bW:null,__bX:null,__bY:null,__ca:null,__bw:null,__bx:null,__by:null,__bB:null,__bz:null,__bC:null,__bD:null,__bA:null,getPaneInsetRight:function(){var cQ=this.getTopRightWidget();
var cR=cQ&&cQ.isVisible()&&cQ.getBounds()?cQ.getBounds().width:0;
var cP=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(cR,cP);
},setPaneWidth:function(dP){if(this.isVerticalScrollBarVisible()){dP+=this.getPaneInsetRight();
}this.setWidth(dP);
},_createChildControlImpl:function(dj){var dk;

switch(dj){case bC:dk=(this.getTable().getNewTablePaneHeader())(this);
break;
case bw:dk=(this.getTable().getNewTablePane())(this);
break;
case A:dk=new qx.ui.table.pane.FocusIndicator(this);
dk.setUserBounds(0,0,0,0);
dk.setZIndex(1000);
dk.addListener(D,this._onMouseupFocusIndicator,this);
this.__bC.add(dk);
dk.exclude();
break;
case F:dk=new qx.ui.core.Widget();
dk.setUserBounds(0,0,0,0);
dk.setZIndex(1000);
this.__bC.add(dk);
break;
case by:dk=new qx.ui.core.ScrollBar(bq).set({minWidth:0,alignY:J});
dk.addListener(B,this._onScrollX,this);
this._add(dk,{row:2,column:0});
break;
case y:dk=new qx.ui.core.ScrollBar(W);
dk.addListener(B,this._onScrollY,this);
this._add(dk,{row:1,column:1});
break;
}return dk||arguments.callee.base.call(this,dj);
},_applyHorizontalScrollBarVisible:function(eR,eS){this.__bw.setVisibility(eR?bE:z);

if(!eR){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(dg,dh){this.__bx.setVisibility(dg?bE:z);

if(!dg){this.setScrollX(0);
}},_applyTablePaneModel:function(eO,eP){if(eP!=null){eP.removeListener(bz,this._onPaneModelChanged,this);
}eO.addListener(bz,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(dp,dq){if(dp){this._updateFocusIndicator();
}else{if(this.__bD){this.__bD.hide();
}}},getScrollY:function(){return this.__bx.getPosition();
},setScrollY:function(scrollY,di){this.__bU=di;
this.__bx.scrollTo(scrollY);

if(di){this._updateContent();
}this.__bU=false;
},getScrollX:function(){return this.__bw.getPosition();
},setScrollX:function(scrollX){this.__bw.scrollTo(scrollX);
},getTable:function(){return this.__bv;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(dl,dm){this.__by.setColumnWidth(dl,dm);
this.__bz.setColumnWidth(dl,dm);
var dn=this.getTablePaneModel();
var x=dn.getX(dl);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__by.onColOrderChanged();
this.__bz.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(ch,ci,cj,ck){this.__bz.onTableModelDataChanged(ch,ci,cj,ck);
var cl=this.getTable().getTableModel().getRowCount();

if(cl!=this.__bF){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=cl){if(cl==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),cl-1);
}}this.__bF=cl;
}},onSelectionChanged:function(){this.__bz.onSelectionChanged();
},onFocusChanged:function(){this.__bz.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__by.onTableModelMetaDataChanged();
this.__bz.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__by.onPaneModelChanged();
this.__bz.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__by._updateContent();
this.__bv._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var cp=this.__bC.getInnerSize();

if(!cp){return ;
}var cn=this.getTablePaneModel().getTotalWidth();
var co=this.__bw;

if(cp.width<cn){var cm=Math.max(0,cn-cp.width);
co.setMaximum(cm);
co.setKnobFactor(cp.width/cn);
var cq=co.getPosition();
co.setPosition(Math.min(cq,cm));
}else{co.setMaximum(0);
co.setKnobFactor(1);
co.setPosition(0);
}},updateVerScrollBarMaximum:function(){var dX=this.__bC.getInnerSize();

if(!dX){return ;
}var dV=this.getTable().getTableModel();
var dR=0;

if(dV!=null){dR=dV.getRowCount();
}
if(this.getTable().getKeepFirstVisibleRowComplete()){dR+=1;
}var dQ=this.getTable().getRowHeight();
var dT=dR*dQ;
var dW=this.__bx;

if(dX.height<dT){var dS=Math.max(0,dT-dX.height);
dW.setMaximum(dS);
dW.setKnobFactor(dX.height/dT);
var dU=dW.getPosition();
dW.setPosition(Math.min(dU,dS));
}else{dW.setMaximum(0);
dW.setKnobFactor(1);
dW.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var bK=e.getData();
this.fireDataEvent(H,bK,e.getOldData());
this.__bB.scrollToX(bK);
this.__bC.scrollToX(bK);
},_onScrollY:function(e){this.fireDataEvent(X,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var en=this.getTable();

if(!en.getEnabled()){return;
}this.__bx.scrollTo(this.__bx.getPosition()+((e.getWheelDelta()*3)*en.getRowHeight()));
if(this.__bS&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__bS,this.__bT);
}},__cb:function(eg){var el=this.getTable();
var em=this.__by.getHeaderWidgetAtColumn(this.__bN);
var eh=em.getSizeHint().minWidth;
var ej=Math.max(eh,this.__bP+eg-this.__bO);

if(this.getLiveResize()){var ei=el.getTableColumnModel();
ei.setColumnWidth(this.__bN,ej);
}else{this.__by.setColumnWidth(this.__bN,ej);
var ek=this.getTablePaneModel();
this._showResizeLine(ek.getColumnLeft(this.__bN)+ej);
}this.__bO+=ej-this.__bP;
this.__bP=ej;
},__cc:function(fm){var fn=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__by.isShowingColumnMoveFeedback()||fm>this.__bM+fn||fm<this.__bM-fn){this.__bJ+=fm-this.__bM;
this.__by.showColumnMoveFeedback(this.__bI,this.__bJ);
var fo=this.__bv.getTablePaneScrollerAtPageX(fm);

if(this.__bL&&this.__bL!=fo){this.__bL.hideColumnMoveFeedback();
}
if(fo!=null){this.__bK=fo.showColumnMoveFeedback(fm);
}else{this.__bK=null;
}this.__bL=fo;
this.__bM=fm;
}},_onMousemoveHeader:function(e){var ex=this.getTable();

if(!ex.getEnabled()){return;
}var ey=false;
var er=null;
var ev=e.getDocumentLeft();
var ew=e.getDocumentTop();
this.__bS=ev;
this.__bT=ew;

if(this.__bN!=null){this.__cb(ev);
ey=true;
}else if(this.__bI!=null){this.__cc(ev);
}else{var es=this._getResizeColumnForPageX(ev);

if(es!=-1){ey=true;
}else{var eu=ex.getTableModel();
var ez=this._getColumnForPageX(ev);

if(ez!=null&&eu.isColumnSortable(ez)){er=ez;
}}}var et=ey?bi:null;
this.getApplicationRoot().setGlobalCursor(et);
this.setCursor(et);
this.__by.setMouseOverColumn(er);
},_onMousemovePane:function(e){var db=this.getTable();

if(!db.getEnabled()){return;
}var dd=e.getDocumentLeft();
var de=e.getDocumentTop();
this.__bS=dd;
this.__bT=de;
var dc=this._getRowForPagePos(dd,de);

if(dc!=null&&this._getColumnForPageX(dd)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(dd,de);
}}this.__by.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cW=e.getDocumentLeft();
var cX=this._getResizeColumnForPageX(cW);

if(cX!=-1){this._startResizeHeader(cX,cW);
}else{var cV=this._getColumnForPageX(cW);

if(cV!=null){this._startMoveHeader(cV,cW);
}}},_startResizeHeader:function(fh,fi){var fj=this.getTable().getTableColumnModel();
this.__bN=fh;
this.__bO=fi;
this.__bP=fj.getColumnWidth(this.__bN);
this.__bB.capture();
},_startMoveHeader:function(bF,bG){this.__bI=bF;
this.__bM=bG;
this.__bJ=this.getTablePaneModel().getColumnLeft(bF);
this.__bB.capture();
},_onMousedownPane:function(e){var eD=this.getTable();

if(!eD.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var eA=e.getDocumentLeft();
var eC=e.getDocumentTop();
var eF=this._getRowForPagePos(eA,eC);
var eE=this._getColumnForPageX(eA);

if(eF!==null){this.__bQ={row:eF,col:eE};
var eB=this.getSelectBeforeFocus();

if(eB){eD.getSelectionManager().handleMouseDown(eF,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(eA,eC);
}
if(!eB){eD.getSelectionManager().handleMouseDown(eF,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__bQ&&this.__bD.getRow()==this.__bQ.row&&this.__bD.getColumn()==this.__bQ.col){this.__bQ={};
this.fireEvent(bx,qx.ui.table.pane.CellEvent,[this,e,this.__bQ.row,this.__bQ.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__bN!=null){this._stopResizeHeader();
}
if(this.__bI!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cU=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cU.setColumnWidth(this.__bN,this.__bP);
}this.__bN=null;
this.__bB.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var bP=this.getTable().getTableColumnModel();
var bQ=this.getTablePaneModel();
this.__by.hideColumnMoveFeedback();

if(this.__bL){this.__bL.hideColumnMoveFeedback();
}
if(this.__bK!=null){var bS=bQ.getFirstColumnX()+bQ.getX(this.__bI);
var bO=this.__bK;

if(bO!=bS&&bO!=bS+1){var bR=bP.getVisibleColumnAtX(bS);
var bN=bP.getVisibleColumnAtX(bO);
var bM=bP.getOverallX(bR);
var bL=(bN!=null)?bP.getOverallX(bN):bP.getOverallColumnCount();

if(bL>bM){bL--;
}bP.moveColumn(bM,bL);
}}this.__bI=null;
this.__bK=null;
this.__bB.releaseCapture();
},_onMouseupPane:function(e){var cY=this.getTable();

if(!cY.getEnabled()){return;
}var da=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(da!=-1&&da!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){cY.getSelectionManager().handleMouseUp(da,e);
}},_onMouseupHeader:function(e){var df=this.getTable();

if(!df.getEnabled()){return;
}
if(this.__bN!=null){this._stopResizeHeader();
this.__bR=true;
}else if(this.__bI!=null){this._stopMoveHeader();
}},_onClickHeader:function(e){if(this.__bR){this.__bR=false;
return;
}var eX=this.getTable();

if(!eX.getEnabled()){return;
}var eV=eX.getTableModel();
var eW=e.getDocumentLeft();
var eU=this._getResizeColumnForPageX(eW);

if(eU==-1){var fa=this._getColumnForPageX(eW);

if(fa!=null&&eV.isColumnSortable(fa)){var eT=eV.getSortColumnIndex();
var eY=(fa!=eT)?true:!eV.isSortAscending();
eV.sortByColumn(fa,eY);
eX.getSelectionModel().clearSelection();
}}},_onClickPane:function(e){var fb=this.getTable();

if(!fb.getEnabled()){return;
}var fe=e.getDocumentLeft();
var ff=e.getDocumentTop();
var fc=this._getRowForPagePos(fe,ff);
var fd=this._getColumnForPageX(fe);

if(fc!=null&&fd!=null){fb.getSelectionManager().handleClick(fc,e);

if(this.__bD.isHidden()||(this.__bQ&&fc==this.__bQ.row&&fd==this.__bQ.col)){this.__bQ={};
this.fireEvent(bx,qx.ui.table.pane.CellEvent,[this,e,fc,fd],true);
}}},_onContextMenu:function(e){var t=e.getDocumentLeft();
var u=e.getDocumentTop();
var r=this._getRowForPagePos(t,u);
var s=this._getColumnForPageX(t);

if(this.__bD.isHidden()||(this.__bQ&&r==this.__bQ.row&&s==this.__bQ.col)){this.__bQ={};
this.fireEvent(bm,qx.ui.table.pane.CellEvent,[this,e,r,s],true);
var q=this.getTable().getContextMenu();

if(q){if(q.getChildren().length>0){q.placeToMouse(e);
q.show();
}else{q.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var bI=e.getDocumentLeft();
var bJ=e.getDocumentTop();
this._focusCellAtPagePos(bI,bJ);
this.startEditing();
var bH=this._getRowForPagePos(bI,bJ);

if(bH!=-1&&bH!=null){this.fireEvent(bl,qx.ui.table.pane.CellEvent,[this,e,bH],true);
}},_onMouseout:function(e){var fg=this.getTable();

if(!fg.getEnabled()){return;
}if(this.__bN==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__by.setMouseOverColumn(null);
},_showResizeLine:function(x){var cs=this._showChildControl(F);
var cr=cs.getWidth();
var ct=this.__bC.getBounds();
cs.setUserBounds(x-Math.round(cr/2),0,cr,ct.height);
},_hideResizeLine:function(){this._excludeChildControl(F);
},showColumnMoveFeedback:function(bT){var cd=this.getTablePaneModel();
var cc=this.getTable().getTableColumnModel();
var bW=this.__bz.getContainerLocation().left;
var cb=cd.getColumnCount();
var bX=0;
var bV=0;
var cg=bW;

for(var bU=0;bU<cb;bU++){var bY=cd.getColumnAtX(bU);
var ce=cc.getColumnWidth(bY);

if(bT<cg+ce/2){break;
}cg+=ce;
bX=bU+1;
bV=cg-bW;
}var ca=this.__bC.getContainerLocation().left;
var cf=this.__bC.getBounds().width;
var scrollX=ca-bW;
bV=qx.lang.Number.limit(bV,scrollX+2,scrollX+cf-1);
this._showResizeLine(bV);
return cd.getFirstColumnX()+bX;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(fp,fq){var fs=this._getRowForPagePos(fp,fq);

if(fs!=-1&&fs!=null){var fr=this._getColumnForPageX(fp);
this.__bv.setFocusedCell(fr,fs);
}},setFocusedCell:function(cu,cv){if(!this.isEditing()){this.__bz.setFocusedCell(cu,cv,this.__bH);
this.__bV=cu;
this.__bW=cv;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__bV;
},getFocusedRow:function(){return this.__bW;
},scrollCellVisible:function(a,b){var n=this.getTablePaneModel();
var c=n.getX(a);

if(c!=-1){var k=this.__bC.getInnerSize();

if(!k){return;
}var l=this.getTable().getTableColumnModel();
var h=n.getColumnLeft(a);
var o=l.getColumnWidth(a);
var d=this.getTable().getRowHeight();
var p=b*d;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var m=Math.min(h,h+o-k.width);
var j=h;
this.setScrollX(Math.max(m,Math.min(j,scrollX)));
var g=p+d-k.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){g+=d;
}var i=p;
this.setScrollY(Math.max(g,Math.min(i,scrollY)),true);
}},isEditing:function(){return this.__bX!=null;
},startEditing:function(){var eK=this.getTable();
var eI=eK.getTableModel();
var eM=this.__bV;

if(!this.isEditing()&&(eM!=null)&&eI.isColumnEditable(eM)){var eN=this.__bW;
var eG=this.getTablePaneModel().getX(eM);
var eH=eI.getValue(eM,eN);
this.__bY=eK.getTableColumnModel().getCellEditorFactory(eM);
var eJ={col:eM,row:eN,xPos:eG,value:eH,table:eK};
this.__bX=this.__bY.createCellEditor(eJ);
if(this.__bX===null){return false;
}else if(this.__bX instanceof qx.ui.window.Window){this.__bX.setModal(true);
this.__bX.setShowClose(false);
this.__bX.addListener(bd,this._onCellEditorModalWindowClose,this);
var f=eK.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__bX,eJ);
}this.__bX.open();
}else{var eL=this.__bD.getInnerSize();
this.__bX.setUserBounds(0,0,eL.width,eL.height);
this.__bD.addListener(E,function(e){e.stopPropagation();
});
this.__bD.add(this.__bX);
this.__bD.addState(bB);
this.__bD.setKeepActive(false);
this.__bX.focus();
this.__bX.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var cx=this.__bY.getCellEditorValue(this.__bX);
var cw=this.getTable().getTableModel().getValue(this.__bV,this.__bW);
this.getTable().getTableModel().setValue(this.__bV,this.__bW,cx);
this.__bv.focus();
this.__bv.fireDataEvent(be,{row:this.__bW,col:this.__bV,oldValue:cw,value:cx});
}},cancelEditing:function(){if(this.isEditing()&&!this.__bX.pendingDispose){if(this._cellEditorIsModalWindow){this.__bX.destroy();
this.__bX=null;
this.__bY=null;
this.__bX.pendingDispose=true;
}else{this.__bD.removeState(bB);
this.__bD.setKeepActive(true);
this.__bX.destroy();
this.__bX=null;
this.__bY=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(dY){var ec=this.getTable().getTableColumnModel();
var ed=this.getTablePaneModel();
var eb=ed.getColumnCount();
var ef=this.__by.getContainerLocation().left;

for(var x=0;x<eb;x++){var ea=ed.getColumnAtX(x);
var ee=ec.getColumnWidth(ea);
ef+=ee;

if(dY<ef){return ea;
}}return null;
},_getResizeColumnForPageX:function(cH){var cL=this.getTable().getTableColumnModel();
var cM=this.getTablePaneModel();
var cK=cM.getColumnCount();
var cO=this.__by.getContainerLocation().left;
var cI=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<cK;x++){var cJ=cM.getColumnAtX(x);
var cN=cL.getColumnWidth(cJ);
cO+=cN;

if(cH>=(cO-cI)&&cH<=(cO+cI)){return cJ;
}}return -1;
},_getRowForPagePos:function(dr,ds){var dt=this.__bz.getContentLocation();

if(dr<dt.left||dr>dt.right){return null;
}
if(ds>=dt.top&&ds<=dt.bottom){var du=this.getTable().getRowHeight();
var scrollY=this.__bx.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/du)*du;
}var dx=scrollY+ds-dt.top;
var dz=Math.floor(dx/du);
var dy=this.getTable().getTableModel();
var dv=0;

if(dy!=null){dv=dy.getRowCount();
}return (dz<dv)?dz:null;
}var dw=this.__by.getContainerLocation();

if(ds>=dw.top&&ds<=dw.bottom&&dr<=dw.right){return -1;
}return null;
},setTopRightWidget:function(cS){var cT=this.__ca;

if(cT!=null){this.__bA.remove(cT);
}
if(cS!=null){this.__bA.add(cS);
}this.__ca=cS;
},getTopRightWidget:function(){return this.__ca;
},getHeader:function(){return this.__by;
},getTablePane:function(){return this.__bz;
},getVerticalScrollBarWidth:function(){var eQ=this.__bx;
return eQ.isVisible()?(eQ.getSizeHint().width||0):0;
},getNeededScrollBars:function(dB,dC){var dI=this.__bx.getSizeHint().width;
var dJ=this.__bC.getInnerSize();
var dD=dJ?dJ.width:0;

if(this.getVerticalScrollBarVisible()){dD+=dI;
}var dM=dJ?dJ.height:0;

if(this.getHorizontalScrollBarVisible()){dM+=dI;
}var dG=this.getTable().getTableModel();
var dK=0;

if(dG!=null){dK=dG.getRowCount();
}var dN=this.getTablePaneModel().getTotalWidth();
var dL=this.getTable().getRowHeight()*dK;
var dF=false;
var dO=false;

if(dN>dD){dF=true;

if(dL>dM-dI){dO=true;
}}else if(dL>dM){dO=true;

if(!dC&&(dN>dD-dI)){dF=true;
}}var dH=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var dE=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((dB||dF)?dH:0)|((dC||!dO)?0:dE);
},_applyScrollTimeout:function(ep,eq){this._startInterval(ep);
},_startInterval:function(eo){this._stopInterval();
if(eo){this.__bG=window.setInterval(this.__bE,eo);
}},_stopInterval:function(){if(this.__bG){window.clearInterval(this.__bG);
this.__bG=null;
}},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__bH&&!this.__bz._layoutPending){this.__bH=false;
this._updateContent();
}}),_updateContent:function(){var cC=this.__bC.getInnerSize();

if(!cC){return;
}var cF=cC.height;
var scrollX=this.__bw.getPosition();
var scrollY=this.__bx.getPosition();
var cz=this.getTable().getRowHeight();
var cA=Math.floor(scrollY/cz);
var cE=this.__bz.getFirstVisibleRow();
this.__bz.setFirstVisibleRow(cA);
var cB=Math.ceil(cF/cz);
var cy=0;
var cD=this.getTable().getKeepFirstVisibleRowComplete();

if(!cD){cB++;
cy=scrollY%cz;
}this.__bz.setVisibleRowCount(cB);

if(cA!=cE){this._updateFocusIndicator();
}this.__bC.scrollToX(scrollX);
if(!cD){this.__bC.scrollToY(cy);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var dA=this.getTable();

if(!dA.getEnabled()){return;
}this.__bD.moveToCell(this.__bV,this.__bW);
}},destruct:function(){this._stopInterval();
var cG=this.getTablePaneModel();

if(cG){cG.dispose();
}this._disposeFields(P,U,bv);
this._disposeObjects(T,Y,N,bf,S,M,bj,bu);
}});
})();
(function(){var b="qx.ui.table.pane.Clipper";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(a){this.getContentElement().scrollToY(a,true);
}}});
})();
(function(){var i="Integer",h="Escape",g="keypress",f="Enter",d="__cd",c="excluded",b="qx.ui.table.pane.FocusIndicator";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(j){arguments.callee.base.call(this);
this.__cd=j;
this.setKeepActive(true);
this.addListener(g,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:c},row:{check:i,nullable:true},column:{check:i,nullable:true}},members:{__cd:null,_onKeyPress:function(e){var a=e.getKeyIdentifier();

if(a!==h&&a!==f){e.stopPropagation();
}},moveToCell:function(k,l){if(k==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var m=this.__cd.getTablePaneModel().getX(k);

if(m==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var r=this.__cd.getTable();
var p=r.getTableColumnModel();
var q=this.__cd.getTablePaneModel();
var o=this.__cd.getTablePane().getFirstVisibleRow();
var n=r.getRowHeight();
this.setUserBounds(q.getColumnLeft(k)-2,(l-o)*n-2,p.getColumnWidth(k)+3,n+3);
this.show();
this.setRow(l);
this.setColumn(k);
}}}},destruct:function(){this._disposeFields(d);
}});
})();
(function(){var r="slider",q="horizontal",p="button-begin",o="button-end",n="vertical",m="Integer",l="execute",k="right",j="left",i="down",E="up",D="PositiveNumber",C="changeValue",B="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",A="_applyKnobFactor",z="_applyOrientation",y="qx.ui.core.ScrollBar",x="_applyPageStep",w="PositiveInteger",v="scroll",t="_applyPosition",u="scrollbar",s="_applyMaximum";
qx.Class.define(y,{extend:qx.ui.core.Widget,construct:function(c){arguments.callee.base.call(this);
this._createChildControl(p);
this._createChildControl(r);
this._createChildControl(o);
if(c!=null){this.setOrientation(c);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:u},orientation:{check:[q,n],init:q,apply:z},maximum:{check:w,apply:s,init:100},position:{check:B,init:0,apply:t,event:v},singleStep:{check:m,init:20},pageStep:{check:m,init:10,apply:x},knobFactor:{check:D,apply:A,nullable:true}},members:{_createChildControlImpl:function(f){var g;

switch(f){case r:g=new qx.ui.core.ScrollSlider;
g.setPageStep(100);
g.setFocusable(false);
g.addListener(C,this._onChangeSliderValue,this);
this._add(g,{flex:1});
break;
case p:g=new qx.ui.form.RepeatButton;
g.setFocusable(false);
g.addListener(l,this._onExecuteBegin,this);
this._add(g);
break;
case o:g=new qx.ui.form.RepeatButton;
g.setFocusable(false);
g.addListener(l,this._onExecuteEnd,this);
this._add(g);
break;
}return g||arguments.callee.base.call(this,f);
},_applyMaximum:function(G){this.getChildControl(r).setMaximum(G);
},_applyPosition:function(h){this.getChildControl(r).setValue(h);
},_applyKnobFactor:function(L){this.getChildControl(r).setKnobFactor(L);
},_applyPageStep:function(F){this.getChildControl(r).setPageStep(F);
},_applyOrientation:function(H,I){var J=this._getLayout();

if(J){J.dispose();
}if(H===q){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(n,q);
this.getChildControl(p).replaceState(E,j);
this.getChildControl(o).replaceState(i,k);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(q,n);
this.getChildControl(p).replaceState(j,E);
this.getChildControl(o).replaceState(k,i);
}this.getChildControl(r).setOrientation(H);
},scrollTo:function(d){this.getChildControl(r).slideTo(d);
},scrollBy:function(K){this.getChildControl(r).slideBy(K);
},scrollBySteps:function(a){var b=this.getSingleStep();
this.getChildControl(r).slideBy(a*b);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IRange";
qx.Interface.define(b,{members:{setMinimum:function(c){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(a){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var D="knob",C="horizontal",B="vertical",A="Integer",z="px",y="mousemove",x="resize",w="left",v="top",u="mouseup",bi="slider",bh="PageUp",bg="mousedown",bf="height",be="changeValue",bd="Left",bc="Down",bb="Up",ba="dblclick",Y="qx.ui.form.Slider",K="PageDown",L="mousewheel",I="interval",J="_applyValue",G="_applyKnobFactor",H="End",E="width",F="_applyOrientation",M="Home",N="floor",Q="_applyMinimum",P="click",S="Right",R="keypress",U="ceil",T="losecapture",O="contextmenu",X="_applyMaximum",W="Number",V="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(Y,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IFormElement,qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MFormElement,qx.ui.form.MForm],construct:function(bv){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(R,this._onKeyPress);
this.addListener(L,this._onMouseWheel);
this.addListener(bg,this._onMouseDown);
this.addListener(u,this._onMouseUp);
this.addListener(T,this._onMouseUp);
this.addListener(x,this._onUpdate);
this.addListener(O,this._onStopEvent);
this.addListener(P,this._onStopEvent);
this.addListener(ba,this._onStopEvent);
if(bv!=null){this.setOrientation(bv);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bi},focusable:{refine:true,init:true},orientation:{check:[C,B],init:C,apply:F},value:{check:V,init:0,apply:J,event:be,nullable:true},minimum:{check:A,init:0,apply:Q},maximum:{check:A,init:100,apply:X},singleStep:{check:A,init:1},pageStep:{check:A,init:10},knobFactor:{check:W,apply:G,nullable:true}},members:{__ky:null,__kz:null,__kA:null,__kB:null,__kC:null,__kD:null,__kE:null,__kF:null,__kG:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bw){var bx;

switch(bw){case D:bx=new qx.ui.core.Widget();
bx.addListener(x,this._onUpdate,this);
this._add(bx);
break;
}return bx||arguments.callee.base.call(this,bw);
},_onMouseWheel:function(e){var a=e.getWheelDelta()>0?1:-1;
this.slideBy(a*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bk=this.getOrientation()===C;
var bj=bk?bd:bb;
var forward=bk?S:bc;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bj:this.slideBack();
break;
case K:this.slidePageForward();
break;
case bh:this.slidePageBack();
break;
case M:this.slideToBegin();
break;
case H:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__kB){return;
}var bp=this.__kI;
var bn=this.getChildControl(D);
var bo=bp?w:v;
var br=bp?e.getDocumentLeft():e.getDocumentTop();
var bs=this.__ky=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bo];
var bq=this.__kz=qx.bom.element.Location.get(bn.getContainerElement().getDomElement())[bo];

if(e.getTarget()===bn){this.__kB=true;
this.__kC=br+bs-bq;
}else{this.__kD=true;
this.__kE=br<=bq?-1:1;
this.__kJ(e);
this._onInterval();
if(!this.__kG){this.__kG=new qx.event.Timer(100);
this.__kG.addListener(I,this._onInterval,this);
}this.__kG.start();
}this.addListener(y,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__kB){this.releaseCapture();
delete this.__kB;
delete this.__kC;
}else if(this.__kD){this.__kG.stop();
this.releaseCapture();
delete this.__kD;
delete this.__kE;
delete this.__kF;
}this.removeListener(y,this._onMouseMove);
if(e.getType()===u){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__kB){var c=this.__kI?e.getDocumentLeft():e.getDocumentTop();
var b=c-this.__kC;
this.slideTo(this._positionToValue(b));
}else if(this.__kD){this.__kJ(e);
}e.stopPropagation();
},_onInterval:function(e){var bt=this.getValue()+(this.__kE*this.getPageStep());
if(bt<this.getMinimum()){bt=this.getMinimum();
}else if(bt>this.getMaximum()){bt=this.getMaximum();
}var bu=this.__kE==-1;

if((bu&&bt<=this.__kF)||(!bu&&bt>=this.__kF)){bt=this.__kF;
}this.slideTo(bt);
},_onUpdate:function(e){var g=this.getInnerSize();
var h=this.getChildControl(D).getBounds();
var f=this.__kI?E:bf;
this._updateKnobSize();
this.__kH=g[f]-h[f];
this.__kA=h[f];
this._updateKnobPosition();
},__kI:false,__kH:0,__kJ:function(e){var bE=this.__kI;
var bL=bE?e.getDocumentLeft():e.getDocumentTop();
var bN=this.__ky;
var bF=this.__kz;
var bP=this.__kA;
var bM=bL-bN;

if(bL>=bF){bM-=bP;
}var bJ=this._positionToValue(bM);
var bG=this.getMinimum();
var bH=this.getMaximum();

if(bJ<bG){bJ=bG;
}else if(bJ>bH){bJ=bH;
}else{var bK=this.getValue();
var bI=this.getPageStep();
var bO=this.__kE<0?N:U;
bJ=bK+(Math[bO]((bJ-bK)/bI)*bI);
}if(this.__kF==null||(this.__kE==-1&&bJ<=this.__kF)||(this.__kE==1&&bJ>=this.__kF)){this.__kF=bJ;
}},_positionToValue:function(bA){var bB=this.__kH;
if(bB==null||bB==0){return 0;
}var bD=bA/bB;

if(bD<0){bD=0;
}else if(bD>1){bD=1;
}var bC=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bC*bD);
},_valueToPosition:function(o){var p=this.__kH;

if(p==null){return 0;
}var q=this.getMaximum()-this.getMinimum();
if(q==0){return 0;
}var o=o-this.getMinimum();
var r=o/q;

if(r<0){r=0;
}else if(r>1){r=1;
}return Math.round(p*r);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bl){var bm=this.getChildControl(D).getContainerElement();

if(this.__kI){bm.setStyle(w,bl+z,true);
}else{bm.setStyle(v,bl+z,true);
}},_updateKnobSize:function(){var n=this.getKnobFactor();

if(n==null){return;
}var m=this.getInnerSize();

if(m==null){return;
}if(this.__kI){this.getChildControl(D).setWidth(Math.round(n*m.width));
}else{this.getChildControl(D).setHeight(Math.round(n*m.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bQ){this.slideTo(this.getValue()+bQ);
},slideTo:function(d){if(d<this.getMinimum()){d=this.getMinimum();
}else if(d>this.getMaximum()){d=this.getMaximum();
}else{d=this.getMinimum()+Math.round((d-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(d);
},_applyOrientation:function(bR,bS){var bT=this.getChildControl(D);
this.__kI=bR===C;
if(this.__kI){this.removeState(B);
bT.removeState(B);
this.addState(C);
bT.addState(C);
bT.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(C);
bT.removeState(C);
this.addState(B);
bT.addState(B);
bT.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(s,t){if(s!=null){this._updateKnobSize();
}else{if(this.__kI){this.getChildControl(D).resetWidth();
}else{this.getChildControl(D).resetHeight();
}}},_applyValue:function(by,bz){if(by!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(i,j){if(this.getValue()<i){this.setValue(i);
}this._updateKnobPosition();
},_applyMaximum:function(k,l){if(this.getValue()>k){this.setValue(k);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__jS",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(r,s){arguments.callee.base.call(this,r,s);
this.__jS=new qx.event.Timer(this.getInterval());
this.__jS.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__jT:null,__jU:null,__jS:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__jV();
}this.removeState(m);
this.addState(n);
}},release:function(o){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__jU){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__jW();
},_applyEnabled:function(p,q){arguments.callee.base.call(this,p,q);

if(!p){this.removeState(n);
this.removeState(m);
this.__jW();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__jS.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__jS.stop();
this.__jT=this.getInterval();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__jV();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__jU){this.execute();
}}this.__jW();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__jU){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__jW();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__jV();
}},_onInterval:function(e){this.__jS.stop();
if(this.__jT==null){this.__jT=this.getInterval();
}this.__jT=(Math.max(this.getMinTimer(),this.__jT-this.getTimerDecrease()));
this.__jS.restartWith(this.__jT);
this.__jU=true;
this.fireEvent(b);
},__jV:function(){this.fireEvent(g);
this.__jU=false;
this.__jS.setInterval(this.getFirstInterval());
this.__jS.start();
this.removeState(m);
this.addState(n);
},__jW:function(){this.fireEvent(d);
this.__jS.stop();
this.__jT=null;
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var f="Integer",e="qx.ui.table.pane.CellEvent";
qx.Class.define(e,{extend:qx.event.type.Mouse,properties:{row:{check:f,nullable:true},column:{check:f,nullable:true}},members:{init:function(a,b,c,d){b.clone(this);
this.setBubbles(false);

if(c!=null){this.setRow(c);
}else{this.setRow(a._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(d!=null){this.setColumn(d);
}else{this.setColumn(a._getColumnForPageX(this.getDocumentLeft()));
}}}});
})();
(function(){var d="qx.lang.Number";
qx.Bootstrap.define(d,{statics:{isInRange:function(e,f,g){return e>=f&&e<=g;
},isBetweenRange:function(h,i,j){return h>i&&h<j;
},limit:function(a,b,c){if(c!=null&&a>c){return c;
}else if(b!=null&&a<b){return b;
}else{return a;
}}}});
})();
(function(){var j="Number",i="__ce",h="qx.event.type.Event",g="_applyFirstColumnX",f="Integer",e="qx.ui.table.pane.Model",d="_applyMaxColumnCount",c="visibilityChangedPre";
qx.Class.define(e,{extend:qx.core.Object,construct:function(b){arguments.callee.base.call(this);
b.addListener(c,this._onColVisibilityChanged,this);
this.__ce=b;
},events:{"modelChanged":h},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:f,init:0,apply:g},maxColumnCount:{check:j,init:-1,apply:d}},members:{__cf:null,__ce:null,_applyFirstColumnX:function(l,m){this.__cf=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(q,r){this.__cf=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(a){this.__ce=a;
this.__cf=null;
},_onColVisibilityChanged:function(k){this.__cf=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__cf==null){var n=this.getFirstColumnX();
var p=this.getMaxColumnCount();
var o=this.__ce.getVisibleColumnCount();

if(p==-1||(n+p)>o){this.__cf=o-n;
}else{this.__cf=p;
}}return this.__cf;
},getColumnAtX:function(w){var y=this.getFirstColumnX();
return this.__ce.getVisibleColumnAtX(y+w);
},getX:function(z){var A=this.getFirstColumnX();
var B=this.getMaxColumnCount();
var x=this.__ce.getVisibleX(z)-A;

if(x>=0&&(B==-1||x<B)){return x;
}else{return -1;
}},getColumnLeft:function(s){var v=0;
var u=this.getColumnCount();

for(var x=0;x<u;x++){var t=this.getColumnAtX(x);

if(t==s){return v;
}v+=this.__ce.getColumnWidth(t);
}return -1;
},getTotalWidth:function(){var C=0;
var D=this.getColumnCount();

for(var x=0;x<D;x++){var E=this.getColumnAtX(x);
C+=this.__ce.getColumnWidth(E);
}return C;
}},destruct:function(){this._disposeFields(i);
}});
})();
(function(){var by="",bx="!",bw="'!",bv="'",bu="Expected '",bt=",",bs="Event (",br="' but found ",bq="The value '",bp="Expected value to be an array but found ",cz=") was fired.",cy="Expected value to be an integer >= 0 but found ",cx="' to be not equal with '",cw="' to '",cv="Expected object '",cu="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3', which cannot be converted to a CSS color!",ct="Called assertTrue with '",cs="Expected value to be a map but found ",cr="The function did not raise an exception!",cq="Expected value to be undefined but found ",bF="Expected value to be a regular expression but found ",bG="' to implement the interface '",bD="Expected value to be null but found ",bE="Invalid argument 'type'",bB="Called assert with 'false'",bC="Assertion error! ",bz="Expected value to be a string but found ",bA="null",bL="' but found '",bM="' must must be a key of the map '",bV="The String '",bS="Expected value not to be undefined but found ",ce=": ",bY="The raised exception does not have the expected type! ",cm=") not fired.",cj="qx.core.Assert",bO="Expected value to be typeof object but found ",cp="' (identical) but found '",co="' must have any of the values defined in the array '",cn="Expected value to be a number but found ",bN="Expected value to be the CSS color '%1' (rgb(%2)), but found value '%3' (rgb(%4))!",bQ="Called assertFalse with '",bR="]",bU="Expected value to be a qooxdoo object but found ",bW="' arguments.",ca="Expected value to be a DOM element but found  '%1'!",cg="Expected value not to be null but found ",cl="Array[",bH="' does not match the regular expression '",bI="' to be not identical with '",bP="' arguments but found '",cd=", ",cc="qx.core.AssertionError",cb="Expected value to be a boolean but found ",ci="Expected value to be a qooxdoo widget but found ",ch="Expected value '%1' to be in the range '%2'..'%3'!",bX="Expected value to be typeof '",cf="Expected value to be typeof function but found ",bm="Expected value to be an integer but found ",ck="Called fail().",bJ="The parameter 're' must be a string or a regular expression.",bK="Expected value to be a number >= 0 but found ",bT="Expected value to be instanceof '",bn="Wrong number of arguments given. Expected '",bo="object";
qx.Bootstrap.define(cj,{statics:{__cg:true,__ch:function(dl,dm,dn){if(!dl){var dp=bC+dm+ce+dn;

if(this.__cg){qx.log.Logger.error(dp);
}
if(qx.Class.isDefined(cc)){var dq=new qx.core.AssertionError(dm,dn);

if(this.__cg){qx.log.Logger.error("Stack trace: \n"+dq.getStackTrace());
}throw dq;
}else{throw new Error(dp);
}}},__ci:function(O){var P;

if(O===null){P=bA;
}else if(qx.lang.Type.isArray(O)&&O.length>10){P=cl+O.length+bR;
}else{try{P=O.toString();
}catch(e){P=by;
}}return P;
},assert:function(X,Y){this.__ch(X==true,Y||by,bB);
},fail:function(cA){this.__ch(false,cA||by,ck);
},assertTrue:function(cU,cV){this.__ch(cU===true,cV||by,ct+this.__ci(cU)+bv);
},assertFalse:function(p,q){this.__ch(p===false,q||by,bQ+this.__ci(p)+bv);
},assertEquals:function(A,B,C){this.__ch(A==B,C||by,bu+this.__ci(A)+bL+this.__ci(B)+bw);
},assertNotEquals:function(ba,bb,bc){this.__ch(ba!=bb,bc||by,bu+this.__ci(ba)+cx+this.__ci(bb)+bw);
},assertIdentical:function(dc,dd,de){this.__ch(dc===dd,de||by,bu+this.__ci(dc)+cp+this.__ci(dd)+bw);
},assertNotIdentical:function(cB,cC,cD){this.__ch(cB!==cC,cD||by,bu+this.__ci(cB)+bI+this.__ci(cC)+bw);
},assertNotUndefined:function(dJ,dK){this.__ch(dJ!==undefined,dK||by,bS+this.__ci(dJ)+bx);
},assertUndefined:function(n,o){this.__ch(n===undefined,o||by,cq+this.__ci(n)+bx);
},assertNotNull:function(dv,dw){this.__ch(dv!==null,dw||by,cg+this.__ci(dv)+bx);
},assertNull:function(M,N){this.__ch(M===null,N||by,bD+this.__ci(M)+bx);
},assertJsonEquals:function(k,l,m){this.assertEquals(qx.util.Json.stringify(k),qx.util.Json.stringify(l),m);
},assertMatch:function(cN,cO,cP){this.assertString(cN);
this.assert(qx.lang.Type.isRegExp(cO)||qx.lang.Type.isString(cO),bJ);
this.__ch(cN.search(cO)>=0?true:false,cP||by,bV+cN+bH+cO.toString()+bw);
},assertArgumentsCount:function(bh,bi,bj,bk){var bl=bh.length;
this.__ch((bl>=bi&&bl<=bj),bk||by,bn+bi+cw+bj+bP+arguments.length+bW);
},assertEventFired:function(t,event,u,v,w){var y=false;
var x=function(e){if(v){v.call(t,e);
}y=true;
};
var z=t.addListener(event,x,t);
u.call();
this.__ch(y===true,w||by,bs+event+cm);
t.removeListenerById(z);
},assertEventNotFired:function(dD,event,dE,dF){var dH=false;
var dG=function(e){dH=true;
};
var dI=dD.addListener(event,dG,dD);
dE.call();
this.__ch(dH===false,dF||by,bs+event+cz);
dD.removeListenerById(dI);
},assertException:function(F,G,H,I){var G=G||Error;
var J;

try{this.__cg=false;
F();
}catch(cW){J=cW;
}finally{this.__cg=true;
}
if(J==null){this.__ch(false,I||by,cr);
}this.__ch(J instanceof G,I||by,bY+G);

if(H){this.assertMatch(J.toString(),H,I);
}},assertInArray:function(df,dg,dh){this.__ch(dg.indexOf(df)!==-1,dh||by,bq+this.__ci(df)+co+dg.join(cd)+bv);
},assertArrayEquals:function(di,dj,dk){this.assertArray(di,dk);
this.assertArray(dj,dk);
this.assertEquals(di.length,dj.length,dk);

for(var i=0;i<di.length;i++){this.assertIdentical(di[i],dj[i],dk);
}},assertKeyInMap:function(a,b,c){this.__ch(b[a]!==undefined,c||by,bq+this.__ci(a)+bM+qx.util.Json.stringify(b)+bv);
},assertFunction:function(h,j){this.__ch(qx.lang.Type.isFunction(h),j||by,cf+this.__ci(h)+bx);
},assertString:function(dx,dy){this.__ch(qx.lang.Type.isString(dx),dy||by,bz+this.__ci(dx)+bx);
},assertBoolean:function(S,T){this.__ch(qx.lang.Type.isBoolean(S),T||by,cb+this.__ci(S)+bx);
},assertNumber:function(D,E){this.__ch(qx.lang.Type.isNumber(D)&&isFinite(D),E||by,cn+this.__ci(D)+bx);
},assertPositiveNumber:function(bf,bg){this.__ch(qx.lang.Type.isNumber(bf)&&isFinite(bf)&&bf>=0,bg||by,bK+this.__ci(bf)+bx);
},assertInteger:function(cX,cY){this.__ch((qx.lang.Type.isNumber(cX)&&isFinite(cX)&&cX%1===0),cY||by,bm+this.__ci(cX)+bx);
},assertPositiveInteger:function(da,db){this.__ch((qx.lang.Type.isNumber(da)&&isFinite(da)&&da%1===0&&da>=0),db||by,cy+this.__ci(da)+bx);
},assertInRange:function(dz,dA,dB,dC){this.__ch(dz>=dA&&dz<=dB,dC||by,qx.lang.String.format(ch,[dz,dA,dB]));
},assertObject:function(bd,be){this.__ch(bd!==null&&(qx.lang.Type.isObject(bd)||typeof bd===bo),be||by,bO+this.__ci(bd)+bx);
},assertArray:function(K,L){this.__ch(qx.lang.Type.isArray(K),L||by,bp+this.__ci(K)+bx);
},assertMap:function(U,V){this.__ch(qx.lang.Type.isObject(U),V||by,cs+this.__ci(U)+bx);
},assertRegExp:function(Q,R){this.__ch(qx.lang.Type.isRegExp(Q),R||by,bF+this.__ci(Q)+bx);
},assertType:function(cE,cF,cG){this.assertString(cF,bE);
this.__ch(typeof (cE)===cF,cG||by,bX+cF+br+this.__ci(cE)+bx);
},assertInstance:function(dr,ds,dt){var du=ds.classname||ds+by;
this.__ch(dr instanceof ds,dt||by,bT+du+br+this.__ci(dr)+bx);
},assertInterface:function(d,f,g){this.__ch(qx.Class.implementsInterface(d,f),g||by,cv+this.__ci(d)+bG+f+bw);
},assertCssColor:function(cH,cI,cJ){var cK=qx.util.ColorUtil;
var cM=cK.stringToRgb(cH);

try{var cL=cK.stringToRgb(cI);
}catch(W){this.__ch(false,cJ||by,qx.lang.String.format(cu,[cH,cM.join(bt),this.__ci(cI)]));
}this.__ch(cM[0]==cL[0]&&cM[1]==cL[1]&&cM[2]==cL[2],cJ||by,qx.lang.String.format(bN,[this.__ci(cH),cM.join(bt),this.__ci(cI),cL.join(bt)]));
},assertElement:function(r,s){this.__ch(qx.dom.Node.isElement(r),s||by,qx.lang.String.format(ca,[this.__ci(r)]));
},assertQxObject:function(cS,cT){this.__ch(cS instanceof qx.core.Object,cT||by,bU+this.__ci(cS)+bx);
},assertQxWidget:function(cQ,cR){this.__ch(cQ instanceof qx.ui.core.Widget,cR||by,ci+this.__ci(cQ)+bx);
}}});
})();
(function(){var y=",",x="",w="string",v="null",u='"',t="qx.jsonDebugging",s='\\u00',r="new Date(Date.UTC(",q=")",p="__kX",V='\\\\',U="__kO",T='\\f',S="__kM",R="__kN",Q='\\"',P="))",O="}",N='(',M=":",F="{",G='\\r',D="__kP",E='\\t',B="(",C="]",z="[",A="qx.jsonEncodeUndefined",H='\\b',I="qx.util.Json",K=')',J="__kW",L='\\n';
qx.Class.define(I,{statics:{__kK:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__kL:{"function":S,"boolean":R,"number":U,"string":D,"object":J,"undefined":p},__kM:function(bz,bA){return String(bz);
},__kN:function(k,m){return String(k);
},__kO:function(bb,bc){return isFinite(bb)?String(bb):v;
},__kP:function(be,bf){var bg;

if(/["\\\x00-\x1f]/.test(be)){bg=be.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__kR);
}else{bg=be;
}return u+bg+u;
},__kQ:{'\b':H,'\t':E,'\n':L,'\f':T,'\r':G,'"':Q,'\\':V},__kR:function(a,b){var bd=qx.util.Json.__kQ[b];

if(bd){return bd;
}bd=b.charCodeAt();
return s+Math.floor(bd/16).toString(16)+(bd%16).toString(16);
},__kS:function(bj,bk){var bm=[],bp=true,bo,bl;
var bn=qx.util.Json.__la;
bm.push(z);

if(bn){qx.util.Json.__kT+=qx.util.Json.BEAUTIFYING_INDENT;
bm.push(qx.util.Json.__kT);
}
for(var i=0,l=bj.length;i<l;i++){bl=bj[i];
bo=this.__kL[typeof bl];

if(bo){bl=this[bo](bl,i+x);

if(typeof bl==w){if(!bp){bm.push(y);

if(bn){bm.push(qx.util.Json.__kT);
}}bm.push(bl);
bp=false;
}}}
if(bn){qx.util.Json.__kT=qx.util.Json.__kT.substring(0,qx.util.Json.__kT.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bm.push(qx.util.Json.__kT);
}bm.push(C);
return bm.join(x);
},__kU:function(X,Y){var ba=X.getUTCFullYear()+y+X.getUTCMonth()+y+X.getUTCDate()+y+X.getUTCHours()+y+X.getUTCMinutes()+y+X.getUTCSeconds()+y+X.getUTCMilliseconds();
return r+ba+P;
},__kV:function(c,d){var g=[],j=true,f,e;
var h=qx.util.Json.__la;
g.push(F);

if(h){qx.util.Json.__kT+=qx.util.Json.BEAUTIFYING_INDENT;
g.push(qx.util.Json.__kT);
}
for(var d in c){e=c[d];
f=this.__kL[typeof e];

if(f){e=this[f](e,d);

if(typeof e==w){if(!j){g.push(y);

if(h){g.push(qx.util.Json.__kT);
}}g.push(this.__kP(d),M,e);
j=false;
}}}
if(h){qx.util.Json.__kT=qx.util.Json.__kT.substring(0,qx.util.Json.__kT.length-qx.util.Json.BEAUTIFYING_INDENT.length);
g.push(qx.util.Json.__kT);
}g.push(O);
return g.join(x);
},__kW:function(bx,by){if(bx){if(qx.lang.Type.isFunction(bx.toJSON)&&bx.toJSON!==this.__kK){return this.__kY(bx.toJSON(by),by);
}else if(qx.lang.Type.isDate(bx)){return this.__kU(bx,by);
}else if(qx.lang.Type.isArray(bx)){return this.__kS(bx,by);
}else if(qx.lang.Type.isObject(bx)){return this.__kV(bx,by);
}return x;
}return v;
},__kX:function(bh,bi){if(qx.core.Setting.get(A)){return v;
}},__kY:function(n,o){return this[this.__kL[typeof n]](n,o);
},stringify:function(br,bs){this.__la=bs;
this.__kT=this.BEAUTIFYING_LINE_END;
var bt=this.__kY(br,x);

if(typeof bt!=w){bt=null;
}if(qx.core.Setting.get(t)){qx.log.Logger.debug(this,"JSON request: "+bt);
}return bt;
},parse:function(bq){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bq.replace(/"(\\.|[^"\\])*"/g,x))){throw new Error("Could not parse JSON string!");
}
try{return eval(B+bq+q);
}catch(bu){throw new Error("Could not evaluate JSON string: "+bu.message);
}},parseQx:function(bv){if(qx.core.Setting.get(t)){qx.log.Logger.debug(this,"JSON response: "+bv);
}var bw=(bv&&bv.length>0)?eval(N+bv+K):null;
return bw;
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(W){W.__kK=Date.prototype.toJSON;
}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(d){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(c){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var h="qx.ui.core.MSingleSelectionHandling",g="changeSelection",f="changeSelected",d="__jd",c="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":c},members:{__jd:null,getSelection:function(){var j=this.__je().getSelected();

if(j){return [j];
}else{return [];
}},setSelection:function(k){switch(k.length){case 0:this.resetSelection();
break;
case 1:this.__je().setSelected(k[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+k.length+" items!");
}},resetSelection:function(){this.__je().resetSelected();
},isSelected:function(l){return this.__je().isSelected(l);
},isSelectionEmpty:function(){return this.__je().isSelectionEmpty();
},getSelectables:function(){return this.__je().getSelectables();
},_onChangeSelected:function(e){var b=e.getData();
var a=e.getOldData();
b==null?b=[]:b=[b];
a==null?a=[]:a=[a];
this.fireDataEvent(g,b,a);
},__je:function(){if(this.__jd==null){var m=this;
this.__jd=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(i){if(m._isItemSelectable){return m._isItemSelectable(i);
}else{return i.isEnabled()&&i.isVisible();
}}});
this.__jd.addListener(f,this._onChangeSelected,this);
}this.__jd.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__jd;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var a="qx.ui.form.MModelSelection";
qx.Mixin.define(a,{members:{getModelSelection:function(){var k=this.getSelection();
var g=[];

for(var i=0;i<k.length;i++){var h=k[i].getModel();

if(h!=null){g.push(h);
}}return g;
},setModelSelection:function(b){if(!b){this.resetSelection();
return;
}{};
var c=this.getSelectables();
var d=[];

for(var i=0;i<b.length;i++){var e=b[i];

for(var j=0;j<c.length;j++){var f=c[j];

if(e===f.getModel()){d.push(f);
break;
}}}this.setSelection(d);
}}});
})();
(function(){var L="Boolean",K="changeValue",J="changeSelected",I="qx.event.type.Data",H="Use 'setSelection' instead!",G="Use 'changeSelection' instead!",F="changeValid",E="changeRequired",D="changeEnabled",C="Please use getModelSelection instead.",Y="__a",X="Please use setModelSelection instead.",W="qx.ui.form.RadioGroup",V="_applyValid",U="changeInvalidMessage",T="changeSelection",S="_applyEnabled",R="String",Q="_applyAllowEmptySelection",P="",N="Use 'resetSelection' instead!",O="Use 'getSelection' instead!",M="_applyInvalidMessage";
qx.Class.define(W,{extend:qx.core.Object,implement:[qx.ui.form.IFormElement,qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MFormElement,qx.ui.form.MModelSelection],construct:function(w){arguments.callee.base.call(this);
this.__a=[];
this.addListener(T,this.__c,this);

if(w!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:L,apply:S,event:D},wrap:{check:L,init:true},allowEmptySelection:{check:L,init:false,apply:Q},valid:{check:L,init:true,apply:V,event:F},required:{check:L,init:false,event:E},invalidMessage:{check:R,init:P,event:U,apply:M}},events:{"changeValue":I,"changeSelected":I},members:{__a:null,getItems:function(){return this.__a;
},select:function(t){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
this.setSelection([t]);
},setValue:function(bg){qx.log.Logger.deprecatedMethodWarning(arguments.callee,X);
var bh=this.__a;
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];

if(bi.getValue()==bg){this.setSelection([bi]);
break;
}}},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,C);
var a=this.getSelection()[0];
return a?a.getValue():null;
},add:function(q){var r=this.__a;
var s;

for(var i=0,l=arguments.length;i<l;i++){s=arguments[i];

if(qx.lang.Array.contains(r,s)){continue;
}s.addListener(K,this._onItemChangeChecked,this);
r.push(s);
s.setGroup(this);
if(s.getValue()){this.setSelection([s]);
}}if(!this.isAllowEmptySelection()&&r.length>0&&!this.getSelection()[0]){this.setSelection([r[0]]);
}},remove:function(A){var B=this.__a;

if(qx.lang.Array.contains(B,A)){qx.lang.Array.remove(B,A);
if(A.getGroup()===this){A.resetGroup();
}A.removeListener(K,this._onItemChangeChecked,this);
if(A.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var bf=e.getTarget();

if(bf.getValue()){this.setSelection([bf]);
}else if(this.getSelection()[0]==bf){this.resetSelection();
}},setSelected:function(p){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
this.setSelection([p]);
},getSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,O);
var o=this.getSelection()[0];

if(o){return o;
}else{return null;
}},resetSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,N);
this.resetSelection();
},_applyInvalidMessage:function(u,v){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(u);
}},_applyValid:function(ba,bb){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(ba);
}},_applyEnabled:function(d,f){var g=this.__a;

if(d==null){for(var i=0,l=g.length;i<l;i++){g[i].resetEnabled();
}}else{for(var i=0,l=g.length;i<l;i++){g[i].setEnabled(d);
}}},_applyAllowEmptySelection:function(b,c){if(!b&&this.isSelectionEmpty()){this.resetSelection();
}},__b:function(m){var n=null;

if(m){n=m.getValue();

if(n==null){n=m.getLabel();
}}return n;
},selectNext:function(){var x=this.getSelection()[0];
var z=this.__a;
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
},selectPrevious:function(){var bc=this.getSelection()[0];
var be=this.__a;
var bd=be.indexOf(bc);

if(bd==-1){return;
}var i=0;
var length=be.length;
if(this.getWrap()){bd=(bd-1+length)%length;
}else{bd=Math.max(bd-1,0);
}
while(i<length&&!be[bd].getEnabled()){bd=(bd-1+length)%length;
i++;
}this.setSelection([be[bd]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__c:function(e){var bl=e.getData()[0];
var bj=e.getOldData()[0];

if(bj){bj.setValue(false);
}
if(bl){bl.setValue(true);
}var bk=this.__b(bj);
var bm=this.__b(bl);
this.fireDataEvent(K,bm,bk);
if(this.hasListener(J)){this.fireDataEvent(J,bl,bj);
}},addListener:function(h,j,self,k){if(h===J){qx.log.Logger.deprecatedEventWarning(arguments.callee,J,G);
}
if(h===K){qx.log.Logger.deprecatedEventWarning(arguments.callee,K,G);
}return arguments.callee.base.call(this,h,j,self,k);
}},destruct:function(){this._disposeArray(Y);
}});
})();
(function(){var k="__iX",j="Boolean",h="qx.ui.core.SingleSelectionManager",g="__ja",f="__iY",e="changeSelected",d="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(l){arguments.callee.base.call(this);
{};
this.__iX=l;
},events:{"changeSelected":d},properties:{allowEmptySelection:{check:j,init:true,apply:g}},members:{__iY:null,__iX:null,getSelected:function(){return this.__iY;
},setSelected:function(m){if(!this.__jc(m)){throw new Error("Could not select "+m+", because it is not a child element!");
}this.__jb(m);
},resetSelected:function(){this.__jb(null);
},isSelected:function(c){if(!this.__jc(c)){throw new Error("Could not check if "+c+" is selected,"+" because it is not a child element!");
}return this.__iY===c;
},isSelectionEmpty:function(){return this.__iY==null;
},getSelectables:function(){var t=this.__iX.getItems();
var u=[];

for(var i=0;i<t.length;i++){if(this.__iX.isItemSelectable(t[i])){u.push(t[i]);
}}return u;
},__ja:function(r,s){if(!r){this.__jb(this.__iY);
}},__jb:function(n){var q=this.__iY;
var p=n;

if(p!=null&&q===p){return;
}
if(!this.isAllowEmptySelection()&&p==null){var o=this.getSelectables()[0];

if(o){p=o;
}}this.__iY=p;
this.fireDataEvent(e,p,q);
},__jc:function(a){var b=this.__iX.getItems();

for(var i=0;i<b.length;i++){if(b[i]===a){return true;
}}return false;
}},destruct:function(){if(this.__iX.toHashCode){this._disposeObjects(k);
}else{this._disposeFields(k);
}this._disposeObjects(f);
}});
})();
(function(){var d="inspector.objects.HashModel",c="by Hash",b="Classname",a="Hash";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},members:{getData:function(e){var g=e.qx.core.ObjectRegistry.getRegistry();
var k=[];

for(var f in g){k.push([f,g[f].classname]);
}var h=qx.core.Init.getApplication().getExcludes();

for(var i=k.length-1;i>=0;i--){for(var j=0;j<h.length;j++){if(k[i][0]===h[j].toHashCode()){k.splice(i,1);
}}}return k;
},getColumns:function(){return [a,b];
},getName:function(){return c;
},selectionEnabled:function(){return true;
}}});
})();
(function(){var f="Count",e="by Count",d="Classname",c="inspector.objects.CountModel";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},members:{getData:function(g){var m=g.qx.core.ObjectRegistry.getRegistry();
var k={};

for(var h in m){if(k[m[h].classname]==undefined){k[m[h].classname]=0;
}k[m[h].classname]++;
}var o=[];

for(var l in k){o.push([k[l],l]);
}o.sort(function(a,b){return a[0]<b[0];
});
var n=qx.core.Init.getApplication().getExcludes();

for(var i=o.length-1;i>=0;i--){for(var j=0;j<n.length;j++){if(o[i][0]===n[j].toHashCode()){o.splice(i,1);
}}}return o;
},getColumns:function(){return [f,d];
},getName:function(){return e;
},selectionEnabled:function(){return false;
}}});
})();
(function(){var n="pressed",m="abandoned",l="Please use the value property instead.",k="changeChecked",j="hovered",i="Enter",h="Space",g="checked",f="mousedown",d="Please use the changeValue event instead.",z="mouseout",y="changeValue",x="keydown",w="button",v="qx.event.type.Data",u="_applyValue",t="qx.ui.form.ToggleButton",s="function(value) {return qx.lang.Type.isString(value) || qx.lang.Type.isBoolean(value)}",r="mouseover",q="keyup",o="mouseup",p="Please use boolean values instead.";
qx.Class.define(t,{extend:qx.ui.basic.Atom,include:[qx.ui.form.MFormElement,qx.ui.core.MExecutable],implement:[qx.ui.form.IFormElement,qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(A,B){arguments.callee.base.call(this,A,B);
this.addListener(r,this._onMouseOver);
this.addListener(z,this._onMouseOut);
this.addListener(f,this._onMouseDown);
this.addListener(o,this._onMouseUp);
this.addListener(x,this._onKeyDown);
this.addListener(q,this._onKeyUp);
},events:{"changeChecked":v},properties:{appearance:{refine:true,init:w},focusable:{refine:true,init:true},value:{check:s,nullable:true,event:y,apply:u,init:false}},members:{_applyValue:function(b,c){if(qx.lang.Type.isString(b)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return;
}b?this.addState(g):this.removeState(g);
this.fireDataEvent(k,b,c);
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
}},setChecked:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setValue(a);
},isChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return this.getValue();
},toggleChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.setValue(!this.getValue());
},getChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return this.getValue();
},resetChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.resetValue();
},addListener:function(C,D,self,E){if(C==k){qx.log.Logger.deprecatedEventWarning(arguments.callee,k,d);
}return arguments.callee.base.call(this,C,D,self,E);
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
(function(){var d="qx.ui.form.IRadioItem",c="qx.event.type.Data";
qx.Interface.define(d,{events:{"changeValue":c},members:{setValue:function(b){},getValue:function(){},setGroup:function(a){this.assertInstance(a,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
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
(function(){var v="instance",u="]",t='id',s=" [",r='instance',q="changeOpen",p="_getChildren",o="getChildren",n="inspector/images/components/image.png",h="qx.ui.form.TextField",bC="qx.ui.layout.DockLayout",bB="inspector/images/components/radiobutton.png",bA="qx.ui.pageview.buttonview.Button",bz="inspector/images/components/verticallayout.png",by="qx.ui.groupbox.RadioGroupBox",bx="inspector/images/components/horizontallayout.png",bw="inspector/images/components/label.png",bv="qx.ui.groupbox.CheckGroupBox",bu="qx.ui.treevirtual.TreeVirtual",bt="qx.ui.basic.Image",D="qx.ui.basic.Label",E="qx.ui.pageview.tabview.Button",B="inspector/images/components/toolbar.png",C="qx.ui.toolbar.ToolBar",z="inspector/images/components/window.png",A="inspector/images/components/button.png",x="inspector/images/components/textarea.png",y="qx.ui.form.RadioButton",L="qx.ui.window.Window",M="changeSelection",Y="inspector/images/components/table.png",U="qx.ui.tree.Tree",bh="qx.ui.layout.HBox",bc="qx.ui.form.ComboBox",bp="inspector/images/components/textfield.png",bm="inspector/images/components/groupbox.png",Q="icon/22/actions/view-refresh.png",bs="inspector/images/components/checkbox.png",br="qx.ui.form.CheckBox",bq="Display internal widget structure.",P="qx.ui.table.Table",S="Reload the window.",T="qx.ui.layout.VBox",W="qx.ui.menu.Layout",ba="inspector/images/components/atom.png",bd="qx.ui.toolbar.Button",bj="qx.ui.menu.Button",bo="qx.ui.layout.CanvasLayout",F="inspector/images/components/spinner.png",G="qx.ui.layout.FlowLayout",R="qx.ui.menu.Menu",bg="Widgets",bf="qx.ui.form.Button",be="click",bl="inspector.widgets.WidgetsWindow",bk="inspector/images/components/tree.png",bb="qx.ui.layout.GridLayout",bi="qx.ui.pageview.radioview.Button",d="qx.ui.form.TextArea",bn="qx.ui.groupbox.Groupbox",H="qx.ui.menubar.Button",I="inspector/images/components/menu.png",V="qx.ui.menubar.MenuBar",f="inspector/images/components/layout.png",g="qx.ui.splitpane.SplitPane",O="inspector/images/components/combobox.png",J="qx.ui.basic.Atom",K="inspector/images/components/splitpane.png",N="icon/22/actions/document-properties.png",X="qx.ui.form.Spinner";
qx.Class.define(bl,{extend:inspector.components.AbstractWindow,construct:function(){arguments.callee.base.call(this,bg);
this._reloadButton=new qx.ui.toolbar.Button(null,Q);
this._reloadButton.setToolTipText(S);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(be,function(){this.load();
},this);
this._toolbar.addSpacer();
this._structureToggle=new qx.ui.toolbar.CheckBox(null,N);
this._structureToggle.setToolTipText(bq);
this._toolbar.add(this._structureToggle);
this._structureToggle.setValue(false);
this._tree=new qx.ui.tree.Tree();
this._tree.setDecorator(null);
this._tree.setRootOpenClose(true);
this.add(this._tree,{flex:1});
this._tree.addListener(M,function(e){if(e.getData()[0]){var bD=e.getData()[0].getUserData(v);
qx.core.Init.getApplication().select(bD,this);
}},this);
},members:{setInitSizeAndPosition:function(){var bJ=qx.bom.Viewport.getWidth()-this.getWidth();
var bI=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(bJ,30+bI);
this.setHeight(bI);
},select:function(b){this._selectWidgetInTheTree(b);
},getSelection:function(){var bH=this._tree.getSelection()[0];
if(bH!=null){return bH.getUserData(v);
}return null;
},load:function(bE){if(bE==undefined){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
}else{this._iFrameWindow=bE;
}var bF=this._iFrameWindow.qx.core.Init.getApplication().getRoot();
var bG=new qx.ui.tree.TreeFolder(bF.classname+s+bF.toHashCode()+u);
bG.setUserData(v,bF);
this._tree.setRoot(bG);
this._fillTree(bF,bG,2);
},_fillTree:function(bK,bL,bM){var bR=bL.getItems(false,true);
var bN=this._structureToggle.isValue()?p:o;
if(bK[bN]==undefined){if(bN===o){bN=p;
}else{return;
}}if(bK[bN]().length==0){if(bR.length>1){for(var m=0;m<bR.length;m++){if(bR[m+1]==this._tree.getSelection()[0]){this._tree.resetSelection();
}bL.removeAt(0);
}}}var bS=qx.core.Init.getApplication().getExcludes();
var i=0;
bM--;
for(var k=0;k<bK[bN]().length;k++){var bP=bK[bN]()[k];
var bO=false;

for(var j=0;j<bS.length;j++){if(bP==bS[j]){bO=true;
break;
}}if(bO){continue;
}if(bR[i]==null){var bT=new qx.ui.tree.TreeFolder(bP.classname+s+bP.toHashCode()+u);
bT.setIcon(this._getIconPath(bP.classname));
bL.addAt(bT,i);
bT.setUserData(r,bP);
bT.setUserData(t,bP.toHashCode());
bT.addListener(q,this._treeOpenHandler,this);
}else{if(bR[i].getLabel()==bP.classname+s+bP.toHashCode()+u){var bT=bR[i];
}else{if(bL.getItems()[i]!=null){if(bL.getItems()[i]==this._tree.getSelection()[0]){this._tree.resetSelection();
}}bL.removeAt(i);
var bT=new qx.ui.tree.TreeFolder(bP.classname+s+bP.toHashCode()+u);
bL.addAt(bT,i);
bT.setUserData(r,bP);
bT.setUserData(t,bP.toHashCode());
bT.addListener(q,this._treeOpenHandler,this);
}}if(bM>0){this._fillTree(bP,bT,bM);
}if(i+1==bK[bN]().length){var bQ=bL.getItems(false,true);
if(bQ.length-2!=i){for(var l=i+1;l<bQ.length;l++){bL.removeAt(i+1);
}}}i++;
}},_treeOpenHandler:function(e){if(e.getData()){var c=e.getTarget().getUserData(r);
this._fillTree(c,e.getTarget(),2);
}},_getIconPath:function(a){switch(a){case bt:return n;
case D:return bw;
case J:return ba;
case U:case bu:return bk;
case R:return I;
case bf:case bj:case H:case bA:case bi:case E:case bd:return A;
case bo:case bC:case G:case bb:case W:return f;
case T:return bz;
case bh:return bx;
case C:case V:return B;
case L:return z;
case bn:case bv:case by:return bm;
case X:return F;
case bc:return O;
case h:return bp;
case d:return x;
case g:return K;
case P:return Y;
case br:return bs;
case y:return bB;
default:return null;
}},_selectWidgetInTheTree:function(bU){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
if(!(bU instanceof this._iFrameWindow.qx.ui.core.Widget)){return;
}var bW=[];
var w=bU;

if(this._structureToggle.isValue()){while(w.getLayoutParent()!=null){bW.push(w);
w=w.getLayoutParent();
}}else{while(w.getParent!=undefined&&w.getParent()!=null||w.getLayoutParent()!=null){if(w.getParent!=undefined&&w.getParent()!=null){bW.push(w);
w=w.getParent();
}else if(w.getLayoutParent()!=null){bW.push(w);
w=w.getLayoutParent();
}}}for(var i=bW.length-1;i>0;i--){this._openFolder(bW[i]);
}this._tree.getRoot().setOpen(true);
var bY=bU.toHashCode();
var bV=this._tree.getItems(true,true);
var bX=false;
if(this._tree.getRoot().getUserData(v).toHashCode()==bY){this._tree.resetSelection();
this._tree.addToSelection(this._tree.getRoot());
return;
}for(var i=0;i<bV.length;i++){if(bV[i].getUserData(t)==bY){bX=true;
this._tree.resetSelection();
this._tree.addToSelection(bV[i]);
break;
}}if(!bX){this._tree.resetSelection();
}},_openFolder:function(ca){var cc=ca.toHashCode();
var cb=this._tree.getItems(true,true);
if(this._tree.getRoot().getUserData(v).toHashCode()==cc){this._tree.resetSelection();
this._tree.addToSelection(this._tree.getRoot());
return ;
}for(var i=0;i<cb.length;i++){if(cb[i].getUserData(t)==cc){cb[i].setOpen(true);
break;
}}}}});
})();
(function(){var v="scrollbar-y",u="scrollbar-x",t="pane",s="auto",r="corner",q="on",p="changeVisibility",o="scroll",n="_computeScrollbars",m="off",f="scrollY",l="abstract",i="update",c="scrollX",b="mousewheel",h="scrollbarY",g="scrollbarX",j="horizontal",a="scrollarea",k="qx.ui.core.AbstractScrollArea",d="vertical";
qx.Class.define(k,{extend:qx.ui.core.Widget,type:l,construct:function(){arguments.callee.base.call(this);
var x=new qx.ui.layout.Grid();
x.setColumnFlex(0,1);
x.setRowFlex(0,1);
this._setLayout(x);
this.addListener(b,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[s,q,m],init:s,themeable:true,apply:n},scrollbarY:{check:[s,q,m],init:s,themeable:true,apply:n},scrollbar:{group:[g,h]}},members:{_createChildControlImpl:function(K){var L;

switch(K){case t:L=new qx.ui.core.ScrollPane();
L.addListener(i,this._computeScrollbars,this);
L.addListener(c,this._onScrollPaneX,this);
L.addListener(f,this._onScrollPaneY,this);
this._add(L,{row:0,column:0});
break;
case u:L=new qx.ui.core.ScrollBar(j);
L.setMinWidth(0);
L.exclude();
L.addListener(o,this._onScrollBarX,this);
L.addListener(p,this._onChangeScrollbarXVisibility,this);
this._add(L,{row:1,column:0});
break;
case v:L=new qx.ui.core.ScrollBar(d);
L.setMinHeight(0);
L.exclude();
L.addListener(o,this._onScrollBarY,this);
L.addListener(p,this._onChangeScrollbarYVisibility,this);
this._add(L,{row:0,column:1});
break;
case r:L=new qx.ui.core.Widget();
L.setWidth(0);
L.setHeight(0);
L.exclude();
this._add(L,{row:1,column:1});
break;
}return L||arguments.callee.base.call(this,K);
},getPaneSize:function(){return this.getChildControl(t).getInnerSize();
},getItemTop:function(w){return this.getChildControl(t).getItemTop(w);
},getItemBottom:function(Y){return this.getChildControl(t).getItemBottom(Y);
},getItemLeft:function(B){return this.getChildControl(t).getItemLeft(B);
},getItemRight:function(D){return this.getChildControl(t).getItemRight(D);
},scrollToX:function(C){qx.ui.core.queue.Manager.flush();
this.getChildControl(u).scrollTo(C);
},scrollByX:function(y){qx.ui.core.queue.Manager.flush();
this.getChildControl(u).scrollBy(y);
},getScrollX:function(){var bb=this.getChildControl(u,true);
return bb?bb.getPosition():0;
},scrollToY:function(ba){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollTo(ba);
},scrollByY:function(M){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollBy(M);
},getScrollY:function(){var J=this.getChildControl(v,true);
return J?J.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(t).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(t).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var H=this._isChildControlVisible(u);
var I=this._isChildControlVisible(v);
var G=(I)?this.getChildControl(v,true):(H?this.getChildControl(u,true):null);

if(G){G.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var z=this._isChildControlVisible(u);
var A=this._isChildControlVisible(v);

if(!z){this.scrollToX(0);
}z&&A?this._showChildControl(r):this._excludeChildControl(r);
},_onChangeScrollbarYVisibility:function(e){var E=this._isChildControlVisible(u);
var F=this._isChildControlVisible(v);

if(!F){this.scrollToY(0);
}E&&F?this._showChildControl(r):this._excludeChildControl(r);
},_computeScrollbars:function(){var T=this.getChildControl(t);
var content=T.getChildren()[0];

if(!content){this._excludeChildControl(u);
this._excludeChildControl(v);
return;
}var N=this.getInnerSize();
var S=T.getInnerSize();
var Q=T.getScrollSize();
if(!S||!Q){return;
}var V=this.getScrollbarX();
var W=this.getScrollbarY();

if(V===s&&W===s){var R=Q.width>N.width;
var X=Q.height>N.height;
if((R||X)&&!(R&&X)){if(R){X=Q.height>S.height;
}else if(X){R=Q.width>S.width;
}}}else{var R=V===q;
var X=W===q;
if(Q.width>(R?S.width:N.width)&&V===s){R=true;
}
if(Q.height>(R?S.height:N.height)&&W===s){X=true;
}}if(R){var P=this.getChildControl(u);
P.show();
var U=Math.max(0,Q.width-S.width-1);
P.setMaximum(U);
P.setKnobFactor(U>0?S.width/Q.width:0);
}else{this._excludeChildControl(u);
}
if(X){var O=this.getChildControl(v);
O.show();
var U=Math.max(0,Q.height-S.height-1);
O.setMaximum(U);
O.setKnobFactor(U>0?S.height/Q.height:0);
}else{this._excludeChildControl(v);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var o="Use 'setSelection' instead!",n="Boolean",m="changeSelection",l="single",k="Use 'getSelection' instead!",j="mousedown",h="__jC",g="one",f="qx.event.type.Data",d="_applyDragSelection",B="mousemove",A="addItem",z="multi",y="_applyQuickSelection",x="mouseover",w="keypress",v="_applySelectionMode",u="additive",t="mouseup",s="Use 'resetSelection' instead!",q="losecapture",r="removeItem",p="qx.ui.core.MMultiSelectionHandling";
qx.Mixin.define(p,{construct:function(){var K=this.SELECTION_MANAGER;
var J=this.__jC=new K(this);
this.addListener(j,J.handleMouseDown,J);
this.addListener(t,J.handleMouseUp,J);
this.addListener(x,J.handleMouseOver,J);
this.addListener(B,J.handleMouseMove,J);
this.addListener(q,J.handleLoseCapture,J);
this.addListener(w,J.handleKeyPress,J);
this.addListener(A,J.handleAddItem,J);
this.addListener(r,J.handleRemoveItem,J);
J.addListener(m,this._onSelectionChange,this);
},events:{"changeSelection":f},properties:{selectionMode:{check:[l,z,u,g],init:l,apply:v},dragSelection:{check:n,init:false,apply:d},quickSelection:{check:n,init:false,apply:y}},members:{__jC:null,selectAll:function(){this.__jC.selectAll();
},select:function(H){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
this.setSelection([H]);
},setSelected:function(C){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
this.setSelection([C]);
},isSelected:function(I){if(!qx.ui.core.Widget.contains(this,I)){throw new Error("Could not test if "+I+" is selected, because it is not a child element!");
}return this.__jC.isItemSelected(I);
},addToSelection:function(c){if(!qx.ui.core.Widget.contains(this,c)){throw new Error("Could not add + "+c+" to selection, because it is not a child element!");
}this.__jC.addItem(c);
},removeFromSelection:function(N){if(!qx.ui.core.Widget.contains(this,N)){throw new Error("Could not remove "+N+" from selection, because it is not a child element!");
}this.__jC.removeItem(N);
},selectRange:function(a,b){this.__jC.selectItemRange(a,b);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
this.resetSelection();
},resetSelection:function(){this.__jC.clearSelection();
},replaceSelection:function(P){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
this.setSelection(P);
},setSelection:function(L){for(var i=0;i<L.length;i++){if(!qx.ui.core.Widget.contains(this,L[i])){throw new Error("Could not select "+L[i]+", because it is not a child element!");
}}
if(L.length===0){this.resetSelection();
}else{this.__jC.replaceSelection(L);
}},getSelectedItem:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
var O=this.getSelection();

if(O.length>0){return O[0];
}else{return null;
}},getSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
var M=this.getSelection();

if(M.length>0){return M[0];
}else{return null;
}},getSelection:function(){return this.__jC.getSelection();
},getSortedSelection:function(){return this.__jC.getSortedSelection();
},isSelectionEmpty:function(){return this.__jC.isSelectionEmpty();
},getSelectionContext:function(){return this.__jC.getSelectionContext();
},_getManager:function(){return this.__jC;
},getSelectables:function(){return this.__jC.getSelectables();
},invertSelection:function(){this.__jC.invertSelection();
},_applySelectionMode:function(D,E){this.__jC.setMode(D);
},_applyDragSelection:function(Q,R){this.__jC.setDrag(Q);
},_applyQuickSelection:function(F,G){this.__jC.setQuick(F);
},_onSelectionChange:function(e){this.fireDataEvent(m,e.getData());
}},destruct:function(){this._disposeObjects(h);
}});
})();
(function(){var br="one",bq="single",bp="selected",bo="additive",bn="multi",bm="PageUp",bl="under",bk="Left",bj="lead",bi="Down",bT="Up",bS="Boolean",bR="PageDown",bQ="anchor",bP="End",bO="Home",bN="Right",bM="right",bL="click",bK="above",by="left",bz="Escape",bw="__ls",bx="A",bu="Space",bv="_applyMode",bs="interval",bt="__lb",bA="changeSelection",bB="qx.event.type.Data",bE="quick",bD="key",bG="__lu",bF="__lt",bI="__le",bH="abstract",bC="drag",bJ="qx.ui.core.selection.Abstract";
qx.Class.define(bJ,{type:bH,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lb={};
},events:{"changeSelection":bB},properties:{mode:{check:[bq,bn,bo,br],init:bq,apply:bv},drag:{check:bS,init:false},quick:{check:bS,init:false}},members:{__lc:0,__ld:0,__le:null,__lf:null,__lg:null,__lh:null,__li:null,__lj:null,__lk:null,__ll:null,__lm:null,__ln:null,__lo:null,__lp:null,__lq:null,__lr:null,__ls:null,__lb:null,__lt:null,__lu:null,getSelectionContext:function(){return this.__lr;
},selectAll:function(){var m=this.getMode();

if(m==bq||m==br){throw new Error("Can not select all items in selection mode: "+m);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cJ){this._setSelectedItem(cJ);
var cK=this.getMode();

if(cK!==bq&&cK!==br){this._setLeadItem(cJ);
this._setAnchorItem(cJ);
}this._scrollItemIntoView(cJ);
this._fireChange();
},addItem:function(ct){var cu=this.getMode();

if(cu===bq||cu===br){this._setSelectedItem(ct);
}else{if(!this._getAnchorItem()){this._setAnchorItem(ct);
}this._setLeadItem(ct);
this._addToSelection(ct);
}this._scrollItemIntoView(ct);
this._fireChange();
},removeItem:function(cj){this._removeFromSelection(cj);

if(this.getMode()===br&&this.isSelectionEmpty()){var ck=this._getFirstSelectable();

if(ck){this.addItem(ck);
}if(ck==cj){return;
}}
if(this._getLeadItem()==cj){this._setLeadItem(null);
}
if(this._getAnchorItem()==cj){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(cL,cM){var cN=this.getMode();

if(cN==bq||cN==br){throw new Error("Can not select multiple items in selection mode: "+cN);
}this._selectItemRange(cL,cM);
this._setAnchorItem(cL);
this._setLeadItem(cM);
this._scrollItemIntoView(cM);
this._fireChange();
},clearSelection:function(){if(this.getMode()==br){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cy){var cz=this.getMode();

if(cz==br||cz===bq){if(cy.length>1){throw new Error("Could not select more than one items in mode: "+cz+"!");
}
if(cy.length==1){this.selectItem(cy[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cy);
}},getSelectedItem:function(){var cW=this.getMode();

if(cW===bq||cW===br){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__lb);
},getSortedSelection:function(){var o=this.getSelectables();
var n=qx.lang.Object.getValues(this.__lb);
n.sort(function(a,b){return o.indexOf(a)-o.indexOf(b);
});
return n;
},isItemSelected:function(G){var H=this._selectableToHashCode(G);
return this.__lb[H]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__lb);
},invertSelection:function(){var cm=this.getMode();

if(cm===bq||cm===br){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cl=this.getSelectables();

for(var i=0;i<cl.length;i++){this._toggleInSelection(cl[i]);
}this._fireChange();
},_setLeadItem:function(bY){var ca=this.__ls;

if(ca!==null){this._styleSelectable(ca,bj,false);
}
if(bY!==null){this._styleSelectable(bY,bj,true);
}this.__ls=bY;
},_getLeadItem:function(){return this.__ls!==null?this.__ls:null;
},_setAnchorItem:function(A){var B=this.__lt;

if(B){this._styleSelectable(B,bQ,false);
}
if(A){this._styleSelectable(A,bQ,true);
}this.__lt=A;
},_getAnchorItem:function(){return this.__lt!==null?this.__lt:null;
},_isSelectable:function(c){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var k=event.getTarget();
return this._isSelectable(k)?k:null;
},_selectableToHashCode:function(bU){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(d,f,g){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bW){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cv){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(y,z){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bV){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(cr,cs){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(cw,cx){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(K,L){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(ce,cf){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(ce===br){var cg=this._getFirstSelectable();

if(cg){this._setSelectedItem(cg);
this._scrollItemIntoView(cg);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var cB=this.getMode();

if(cB!==br&&cB!==bq){return;
}var cA=this._getSelectableFromMouseEvent(event);

if(cA===null){return;
}this._setSelectedItem(cA);
this._fireChange(bE);
},handleMouseDown:function(event){var cS=this._getSelectableFromMouseEvent(event);

if(cS===null){return;
}var cU=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cR=event.isShiftPressed();
if(this.isItemSelected(cS)&&!cR&&!cU&&!this.getDrag()){this.__lu=cS;
return;
}else{this.__lu=null;
}this._scrollItemIntoView(cS);
switch(this.getMode()){case bq:case br:this._setSelectedItem(cS);
break;
case bo:this._setLeadItem(cS);
this._setAnchorItem(cS);
this._toggleInSelection(cS);
break;
case bn:this._setLeadItem(cS);
if(cR){var cT=this._getAnchorItem();

if(cT===null){cT=this._getFirstSelectable();
this._setAnchorItem(cT);
}this._selectItemRange(cT,cS,cU);
}else if(cU){this._setAnchorItem(cS);
this._toggleInSelection(cS);
}else{this._setAnchorItem(cS);
this._setSelectedItem(cS);
}break;
}var cV=this.getMode();

if(this.getDrag()&&cV!==bq&&cV!==br&&!cR&&!cU){this.__li=this._getLocation();
this.__lf=this._getScroll();
this.__lj=event.getDocumentLeft()+this.__lf.left;
this.__lk=event.getDocumentTop()+this.__lf.top;
this.__ll=true;
this._capture();
}this._fireChange(bL);
},handleMouseUp:function(event){var db=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cX=event.isShiftPressed();

if(!db&&!cX&&this.__lu){var cY=this._getSelectableFromMouseEvent(event);

if(cY===null||!this.isItemSelected(cY)){return;
}var da=this.getMode();

if(da===bo){this._removeFromSelection(cY);
}else{this._setSelectedItem(cY);

if(this.getMode()===bn){this._setLeadItem(cY);
this._setAnchorItem(cY);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__ll){return;
}this.__lm=event.getDocumentLeft();
this.__ln=event.getDocumentTop();
var j=this.__lm+this.__lf.left;

if(j>this.__lj){this.__lo=1;
}else if(j<this.__lj){this.__lo=-1;
}else{this.__lo=0;
}var h=this.__ln+this.__lf.top;

if(h>this.__lk){this.__lp=1;
}else if(h<this.__lk){this.__lp=-1;
}else{this.__lp=0;
}var location=this.__li;

if(this.__lm<location.left){this.__lc=this.__lm-location.left;
}else if(this.__lm>location.right){this.__lc=this.__lm-location.right;
}else{this.__lc=0;
}
if(this.__ln<location.top){this.__ld=this.__ln-location.top;
}else if(this.__ln>location.bottom){this.__ld=this.__ln-location.bottom;
}else{this.__ld=0;
}if(!this.__le){this.__le=new qx.event.Timer(100);
this.__le.addListener(bs,this._onInterval,this);
}this.__le.start();
this._autoSelect();
},handleAddItem:function(e){var F=e.getData();

if(this.getMode()===br&&this.isSelectionEmpty()){this.addItem(F);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__ll){return;
}if(this.__lq){this._fireChange(bL);
}delete this.__ll;
delete this.__lg;
delete this.__lh;
this._releaseCapture();
if(this.__le){this.__le.stop();
}},_onInterval:function(e){this._scrollBy(this.__lc,this.__ld);
this.__lf=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var U=this._getDimension();
var N=Math.max(0,Math.min(this.__lm-this.__li.left,U.width))+this.__lf.left;
var M=Math.max(0,Math.min(this.__ln-this.__li.top,U.height))+this.__lf.top;
if(this.__lg===N&&this.__lh===M){return;
}this.__lg=N;
this.__lh=M;
var W=this._getAnchorItem();
var P=W;
var S=this.__lo;
var V,O;

while(S!==0){V=S>0?this._getRelatedSelectable(P,bM):this._getRelatedSelectable(P,by);
if(V!==null){O=this._getSelectableLocationX(V);
if((S>0&&O.left<=N)||(S<0&&O.right>=N)){P=V;
continue;
}}break;
}var T=this.__lp;
var R,Q;

while(T!==0){R=T>0?this._getRelatedSelectable(P,bl):this._getRelatedSelectable(P,bK);
if(R!==null){Q=this._getSelectableLocationY(R);
if((T>0&&Q.top<=M)||(T<0&&Q.bottom>=M)){P=R;
continue;
}}break;
}var X=this.getMode();

if(X===bn){this._selectItemRange(W,P);
}else if(X===bo){if(this.isItemSelected(W)){this._selectItemRange(W,P,true);
}else{this._deselectItemRange(W,P);
}this._setAnchorItem(P);
}this._fireChange(bC);
},__lv:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var u,t;
var w=event.getKeyIdentifier();
var v=this.getMode();
var q=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var r=event.isShiftPressed();
var s=false;

if(w===bx&&q){if(v!==bq&&v!==br){this._selectAllItems();
s=true;
}}else if(w===bz){if(v!==bq&&v!==br){this._clearSelection();
s=true;
}}else if(w===bu){var p=this._getLeadItem();

if(p&&!r){if(q||v===bo){this._toggleInSelection(p);
}else{this._setSelectedItem(p);
}s=true;
}}else if(this.__lv[w]){s=true;

if(v===bq||v==br){u=this._getSelectedItem();
}else{u=this._getLeadItem();
}
if(u!==null){switch(w){case bO:t=this._getFirstSelectable();
break;
case bP:t=this._getLastSelectable();
break;
case bT:t=this._getRelatedSelectable(u,bK);
break;
case bi:t=this._getRelatedSelectable(u,bl);
break;
case bk:t=this._getRelatedSelectable(u,by);
break;
case bN:t=this._getRelatedSelectable(u,bM);
break;
case bm:t=this._getPage(u,true);
break;
case bR:t=this._getPage(u,false);
break;
}}else{switch(w){case bO:case bi:case bN:case bR:t=this._getFirstSelectable();
break;
case bP:case bT:case bk:case bm:t=this._getLastSelectable();
break;
}}if(t!==null){switch(v){case bq:case br:this._setSelectedItem(t);
break;
case bo:this._setLeadItem(t);
break;
case bn:if(r){var x=this._getAnchorItem();

if(x===null){this._setAnchorItem(x=this._getFirstSelectable());
}this._setLeadItem(t);
this._selectItemRange(x,t,q);
}else{this._setAnchorItem(t);
this._setLeadItem(t);

if(!q){this._setSelectedItem(t);
}}break;
}this._scrollItemIntoView(t);
}}
if(s){event.stop();
this._fireChange(bD);
}},_selectAllItems:function(){var ch=this.getSelectables();

for(var i=0,l=ch.length;i<l;i++){this._addToSelection(ch[i]);
}},_clearSelection:function(){var I=this.__lb;

for(var J in I){this._removeFromSelection(I[J]);
}this.__lb={};
},_selectItemRange:function(Y,ba,bb){var be=this._getSelectableRange(Y,ba);
if(!bb){var bd=this.__lb;
var bf=this.__lw(be);

for(var bc in bd){if(!bf[bc]){this._removeFromSelection(bd[bc]);
}}}for(var i=0,l=be.length;i<l;i++){this._addToSelection(be[i]);
}},_deselectItemRange:function(cb,cc){var cd=this._getSelectableRange(cb,cc);

for(var i=0,l=cd.length;i<l;i++){this._removeFromSelection(cd[i]);
}},__lw:function(cO){var cQ={};
var cP;

for(var i=0,l=cO.length;i<l;i++){cP=cO[i];
cQ[this._selectableToHashCode(cP)]=cP;
}return cQ;
},_getSelectedItem:function(){for(var bX in this.__lb){return this.__lb[bX];
}return null;
},_setSelectedItem:function(C){if(this._isSelectable(C)){var D=this.__lb;
var E=this._selectableToHashCode(C);

if(!D[E]||qx.lang.Object.hasMinLength(D,2)){this._clearSelection();
this._addToSelection(C);
}}},_addToSelection:function(bg){var bh=this._selectableToHashCode(bg);

if(!this.__lb[bh]&&this._isSelectable(bg)){this.__lb[bh]=bg;
this._styleSelectable(bg,bp,true);
this.__lq=true;
}},_toggleInSelection:function(cp){var cq=this._selectableToHashCode(cp);

if(!this.__lb[cq]){this.__lb[cq]=cp;
this._styleSelectable(cp,bp,true);
}else{delete this.__lb[cq];
this._styleSelectable(cp,bp,false);
}this.__lq=true;
},_removeFromSelection:function(cn){var co=this._selectableToHashCode(cn);

if(this.__lb[co]!=null){delete this.__lb[co];
this._styleSelectable(cn,bp,false);
this.__lq=true;
}},_replaceMultiSelection:function(cC){var cF=false;
var cI,cH;
var cD={};

for(var i=0,l=cC.length;i<l;i++){cI=cC[i];

if(this._isSelectable(cI)){cH=this._selectableToHashCode(cI);
cD[cH]=cI;
}}var cE=cI;
var cG=this.__lb;

for(var cH in cG){if(cD[cH]){delete cD[cH];
}else{cI=cG[cH];
delete cG[cH];
this._styleSelectable(cI,bp,false);
cF=true;
}}for(var cH in cD){cI=cG[cH]=cD[cH];
this._styleSelectable(cI,bp,true);
cF=true;
}if(!cF){return false;
}this._scrollItemIntoView(cE);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__lq=true;
this._fireChange();
},_fireChange:function(ci){if(this.__lq){this.__lr=ci||null;
this.fireDataEvent(bA,this.getSelection());
delete this.__lq;
}}},destruct:function(){this._disposeObjects(bI);
this._disposeFields(bt,bG,bF,bw);
}});
})();
(function(){var N="vertical",M="under",L="__jX",K="above",J="qx.ui.core.selection.Widget",I="left",H="right";
qx.Class.define(J,{extend:qx.ui.core.selection.Abstract,construct:function(z){arguments.callee.base.call(this);
this.__jX=z;
},members:{__jX:null,_isSelectable:function(G){return G.isEnabled()&&G.isVisible()&&G.getLayoutParent()===this.__jX;
},_selectableToHashCode:function(k){return k.$$hash;
},_styleSelectable:function(a,b,c){c?a.addState(b):a.removeState(b);
},_capture:function(){this.__jX.capture();
},_releaseCapture:function(){this.__jX.releaseCapture();
},_getWidget:function(){return this.__jX;
},_getLocation:function(){var A=this.__jX.getContentElement().getDomElement();
return A?qx.bom.element.Location.get(A):null;
},_getDimension:function(){return this.__jX.getInnerSize();
},_getSelectableLocationX:function(g){var h=g.getBounds();

if(h){return {left:h.left,right:h.left+h.width};
}},_getSelectableLocationY:function(d){var e=d.getBounds();

if(e){return {top:e.top,bottom:e.top+e.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(O,P){},_scrollItemIntoView:function(j){this.__jX.scrollChildIntoView(j);
},getSelectables:function(){var C=this.__jX.getChildren();
var D=[];
var B;

for(var i=0,l=C.length;i<l;i++){B=C[i];

if(B.isEnabled()&&B.isVisible()){D.push(B);
}}return D;
},_getSelectableRange:function(m,n){if(m===n){return [m];
}var r=this.__jX.getChildren();
var o=[];
var q=false;
var p;

for(var i=0,l=r.length;i<l;i++){p=r[i];

if(p===m||p===n){if(q){o.push(p);
break;
}else{q=true;
}}
if(q&&p.isEnabled()&&p.isVisible()){o.push(p);
}}return o;
},_getFirstSelectable:function(){var s=this.__jX.getChildren();

for(var i=0,l=s.length;i<l;i++){if(s[i].isEnabled()&&s[i].isVisible()){return s[i];
}}return null;
},_getLastSelectable:function(){var f=this.__jX.getChildren();

for(var i=f.length-1;i>0;i--){if(f[i].isEnabled()&&f[i].isVisible()){return f[i];
}}return null;
},_getRelatedSelectable:function(t,u){var x=this.__jX.getOrientation()===N;
var w=this.__jX.getChildren();
var v=w.indexOf(t);
var y;

if((x&&u===K)||(!x&&u===I)){for(var i=v-1;i>=0;i--){y=w[i];

if(y.isEnabled()&&y.isVisible()){return y;
}}}else if((x&&u===M)||(!x&&u===H)){for(var i=v+1;i<w.length;i++){y=w[i];

if(y.isEnabled()&&y.isVisible()){return y;
}}}return null;
},_getPage:function(E,F){if(F){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this._disposeFields(L);
}});
})();
(function(){var o="qx.ui.core.selection.ScrollArea";
qx.Class.define(o,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(p){return (p.isEnabled()&&p.isVisible()&&p.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var n=this._getWidget();
return {left:n.getScrollX(),top:n.getScrollY()};
},_scrollBy:function(q,r){var s=this._getWidget();
s.scrollByX(q);
s.scrollByY(r);
},_getPage:function(a,b){var f=this.getSelectables();
var length=f.length;
var j=f.indexOf(a);
if(j===-1){throw new Error("Invalid lead item: "+a);
}var c=this._getWidget();
var l=c.getScrollY();
var innerHeight=c.getInnerSize().height;
var top,e,k;

if(b){var h=l;
var i=j;
while(1){for(;i>=0;i--){top=c.getItemTop(f[i]);
if(top<h){k=i+1;
break;
}}if(k==null){var m=this._getFirstSelectable();
return m==a?null:m;
}if(k>=j){h-=innerHeight+l-c.getItemBottom(a);
k=null;
continue;
}return f[k];
}}else{var g=innerHeight+l;
var i=j;
while(1){for(;i<length;i++){e=c.getItemBottom(f[i]);
if(e>g){k=i-1;
break;
}}if(k==null){var d=this._getLastSelectable();
return d==a?null:d;
}if(k<=j){g+=c.getItemTop(a)-l;
k=null;
continue;
}return f[k];
}}}}});
})();
(function(){var n="right",m="above",l="left",k="under",j="qx.ui.tree.SelectionManager";
qx.Class.define(j,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(t){var u=t.getBounds();

if(u){var top=this._getWidget().getItemTop(t);
return {top:top,bottom:top+u.height};
}},_isSelectable:function(o){return o instanceof qx.ui.tree.AbstractTreeItem&&o.isEnabled()&&o.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var g=this._getWidget();
var h=[];

if(g.getRoot()!=null){var f=g.getRoot().getItems(true,false,g.getHideRoot());

for(var i=0;i<f.length;i++){if(this._isSelectable(f[i])){h.push(f[i]);
}}}return h;
},_getSelectableRange:function(a,b){if(a===b){return [a];
}var c=this.getSelectables();
var d=c.indexOf(a);
var e=c.indexOf(b);

if(d<0||e<0){return [];
}
if(d<e){return c.slice(d,e+1);
}else{return c.slice(e,d+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var v=this.getSelectables();

if(v.length>0){return v[v.length-1];
}else{return null;
}},_getRelatedSelectable:function(p,q){var r=this._getWidget();
var s=null;

switch(q){case m:s=r.getPreviousSiblingOf(p,false);
break;
case k:s=r.getNextSiblingOf(p,false);
break;
case l:if(p.isOpenable()&&p.isOpen()){p.setOpen(false);
}break;
case n:if(p.isOpenable()&&!p.isOpen()){p.setOpen(true);
}break;
}
if(!s){return null;
}
if(this._isSelectable(s)){return s;
}else{return this._getRelatedSelectable(s,q);
}}}});
})();
(function(){var A="dblclick",z="click",y="visible",x="Boolean",w="excluded",v="qx.event.type.Data",u="_applyHideRoot",t="none",s="_applyRootOpenClose",r="_applyOpenMode",l="changeRoot",q="changeOpenMode",o="pane",k="__of",j="_applyRoot",n="qx.ui.tree.Tree",m="qx.ui.tree.AbstractTreeItem",p="tree";
qx.Class.define(n,{extend:qx.ui.core.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__of=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(o).add(this.__of);
this.initOpenMode();
this.initRootOpenClose();
},events:{addItem:v,removeItem:v},properties:{openMode:{check:[z,A,t],init:A,apply:r,event:q,themeable:true},root:{check:m,init:null,nullable:true,event:l,apply:j},hideRoot:{check:x,init:false,apply:u},rootOpenClose:{check:x,init:false,apply:s},appearance:{refine:true,init:p},focusable:{refine:true,init:true}},members:{__of:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__of;
},_applyRoot:function(g,h){var i=this.getChildrenContainer();

if(h){i.remove(h);

if(h.hasChildren()){i.remove(h.getChildrenContainer());
}}
if(g){i.add(g);

if(g.hasChildren()){i.add(g.getChildrenContainer());
}g.setVisibility(this.getHideRoot()?w:y);
g.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(B,C){var D=this.getRoot();

if(!D){return;
}D.setVisibility(B?w:y);
D.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(E,F){var G=this.getRoot();

if(!G){return;
}G.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__of;
},getNextSiblingOf:function(a,b){if((b!==false||a.isOpen())&&a.hasChildren()){return a.getChildren()[0];
}
while(a){var parent=a.getParent();

if(!parent){return null;
}var d=parent.getChildren();
var c=d.indexOf(a);

if(c>-1&&c<d.length-1){return d[c+1];
}a=parent;
}return null;
},getPreviousSiblingOf:function(K,L){var parent=K.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==K){return null;
}}}else{if(K==this.getRoot()){return null;
}}var O=parent.getChildren();
var M=O.indexOf(K);

if(M>0){var N=O[M-1];

while((L!==false||N.isOpen())&&N.hasChildren()){var P=N.getChildren();
N=P[P.length-1];
}return N;
}else{return parent;
}},getItems:function(H,I){if(this.getRoot()!=null){return this.getRoot().getItems(H,I,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},scrollChildIntoViewY:function(S,T,U){if(!this.getNextSiblingOf(S,false)){this.scrollToY(1000000);
}else{arguments.callee.base.call(this,S,T,U);
}},getTreeItem:function(f){while(f){if(f==this){return null;
}
if(f instanceof qx.ui.tree.AbstractTreeItem){return f;
}f=f.getLayoutParent();
}return null;
},_applyOpenMode:function(Q,R){if(R==z){this.removeListener(z,this._onOpen,this);
}else if(R==A){this.removeListener(A,this._onOpen,this);
}
if(Q==z){this.addListener(z,this._onOpen,this);
}else if(Q==A){this.addListener(A,this._onOpen,this);
}},_onOpen:function(e){var J=this.getTreeItem(e.getTarget());

if(!J||!J.isOpenable()){return;
}J.setOpen(!J.isOpen());
e.stopPropagation();
}},destruct:function(){this._disposeObjects(k);
}});
})();
(function(){var w="resize",v="scrollY",u="Please use getChildren instead.",t="update",s="scrollX",r="_applyScrollX",q="_applyScrollY",p="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",o="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",n="appear",k="qx.ui.core.ScrollPane",m="qx.event.type.Event",l="scroll";
qx.Class.define(k,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(w,this._onUpdate);
var g=this.getContentElement();
g.addListener(l,this._onScroll,this);
g.addListener(n,this._onAppear,this);
},events:{update:m},properties:{scrollX:{check:o,apply:r,event:s,init:0},scrollY:{check:p,apply:q,event:v,init:0}},members:{add:function(i){var j=this._getChildren()[0];

if(j){this._remove(j);
j.removeListener(w,this._onUpdate,this);
}
if(i){this._add(i);
i.addListener(w,this._onUpdate,this);
}},remove:function(z){if(z){this._remove(z);
z.removeListener(w,this._onUpdate,this);
}},getChild:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this._getChildren()[0]||null;
},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(t);
},_onScroll:function(e){var O=this.getContentElement();
this.setScrollX(O.getScrollX());
this.setScrollY(O.getScrollY());
},_onAppear:function(e){var D=this.getContentElement();
var A=this.getScrollX();
var B=D.getScrollX();

if(A!=B){D.scrollToX(A);
}var E=this.getScrollY();
var C=D.getScrollY();

if(E!=C){D.scrollToY(E);
}},getItemTop:function(M){var top=0;

do{top+=M.getBounds().top;
M=M.getLayoutParent();
}while(M&&M!==this);
return top;
},getItemBottom:function(c){return this.getItemTop(c)+c.getBounds().height;
},getItemLeft:function(a){var b=0;
var parent;

do{b+=a.getBounds().left;
parent=a.getLayoutParent();

if(parent){b+=parent.getInsets().left;
}a=parent;
}while(a&&a!==this);
return b;
},getItemRight:function(h){return this.getItemLeft(h)+h.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var I=this.getInnerSize();
var H=this.getScrollSize();

if(I&&H){return Math.max(0,H.width-I.width);
}return 0;
},getScrollMaxY:function(){var f=this.getInnerSize();
var d=this.getScrollSize();

if(f&&d){return Math.max(0,d.height-f.height);
}return 0;
},scrollToX:function(F){var G=this.getScrollMaxX();

if(F<0){F=0;
}else if(F>G){F=G;
}this.setScrollX(F);
},scrollToY:function(J){var K=this.getScrollMaxY();

if(J<0){J=0;
}else if(J>K){J=K;
}this.setScrollY(J);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(L){this.getContentElement().scrollToX(L);
},_applyScrollY:function(N){this.getContentElement().scrollToY(N);
}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var C="open",B="auto",A="middle",z="icon",y="label",x="changeOpen",w="excluded",v="visible",u="String",t="opened",V="always",U="qx.ui.tree.AbstractTreeItem",T="addItem",S="Boolean",R="Integer",Q="_applyIndent",P="changeOpenSymbolMode",O="_applyOpenSymbolMode",N="__lK",M="resize",J="",K="removeItem",H="abstract",I="never",F="_applyIcon",G="__lJ",D="_applyOpen",E="_applyLabel",L="__lN";
qx.Class.define(U,{extend:qx.ui.core.Widget,type:H,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__lJ=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:S,init:false,event:x,apply:D},openSymbolMode:{check:[V,I,B],init:B,event:P,apply:O},indent:{check:R,init:19,apply:Q,themeable:true},parent:{check:U,nullable:true},icon:{check:u,apply:F,nullable:true,themeable:true},label:{check:u,apply:E,init:J,dispose:true}},members:{__lJ:null,__lK:null,__lL:null,__lM:null,__lN:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bd){var be;

switch(bd){case y:be=new qx.ui.basic.Label().set({alignY:A,value:this.getLabel()});
break;
case z:be=new qx.ui.basic.Image().set({alignY:A,source:this.getIcon()});
break;
case C:be=new qx.ui.tree.FolderOpenButton().set({alignY:A});
be.addListener(x,this._onChangeOpen,this);
be.addListener(M,this._updateIndent,this);
break;
}return be||arguments.callee.base.call(this,bd);
},getTree:function(){var bw=this;

while(bw.getParent()){bw=bw.getParent();
}var bv=bw.getLayoutParent()?bw.getLayoutParent().getLayoutParent():0;

if(bv&&bv instanceof qx.ui.core.ScrollPane){return bv.getLayoutParent();
}return null;
},addWidget:function(bx,by){this._add(bx,by);
},addSpacer:function(){if(!this.__lN){this.__lN=new qx.ui.core.Spacer();
}else{this._remove(this.__lN);
}this._add(this.__lN);
},addOpenButton:function(){this._add(this.getChildControl(C));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var j=this.getChildControl(z);

if(this.__lM){this._remove(j);
}this._add(j);
this.__lM=true;
},addLabel:function(a){var b=this.getChildControl(y);

if(this.__lL){this._remove(b);
}
if(a){this.setLabel(a);
}else{b.setValue(this.getLabel());
}this._add(b);
this.__lL=true;
},addState:function(p){arguments.callee.base.call(this,p);
var r=this._getChildren();

for(var i=0,l=r.length;i<l;i++){var q=r[i];

if(q.addState){r[i].addState(p);
}}},removeState:function(bz){arguments.callee.base.call(this,bz);
var bB=this._getChildren();

for(var i=0,l=bB.length;i<l;i++){var bA=bB[i];

if(bA.addState){bB[i].removeState(bz);
}}},_applyIcon:function(f,g){var h=this.getChildControl(z,true);

if(h){h.setSource(f);
}},_applyLabel:function(bG,bH){var bI=this.getChildControl(y,true);

if(bI){bI.setValue(bG);
}},_applyOpen:function(k,m){if(this.hasChildren()){this.getChildrenContainer().setVisibility(k?v:w);
}var open=this.getChildControl(C,true);

if(open){open.setOpen(k);
}k?this.addState(t):this.removeState(t);
},isOpenable:function(){var s=this.getOpenSymbolMode();
return (s===V||s===B&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(C,true);

if(!open){return false;
}var bm=this.getTree();

if(!bm.getRootOpenClose()){if(bm.getHideRoot()){if(bm.getRoot()==this.getParent()){return false;
}}else{if(bm.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bS,bT){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var o=0;
var open=this.getChildControl(C,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var n=open.getBounds();

if(n){o=n.width;
}else{return;
}}else{open.exclude();
}}
if(this.__lN){this.__lN.setWidth((this.getLevel()+1)*this.getIndent()-o);
}},_applyIndent:function(bE,bF){this._updateIndent();
},getLevel:function(){var bs=this.getTree();

if(!bs){return;
}var bt=this;
var bu=-1;

while(bt){bt=bt.getParent();
bu+=1;
}if(bs.getHideRoot()){bu-=1;
}
if(!bs.getRootOpenClose()){bu-=1;
}return bu;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__lK){this.__lK=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?v:w});
}return this.__lK;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__lJ;
},hasChildren:function(){return this.__lJ?this.__lJ.length>0:false;
},getItems:function(bL,bM,bN){if(bN!==false){var bO=[];
}else{var bO=[this];
}var bR=this.hasChildren()&&(bM!==false||this.isOpen());

if(bR){var bQ=this.getChildren();

if(bL===false){bO=bO.concat(bQ);
}else{for(var i=0,bP=bQ.length;i<bP;i++){bO=bO.concat(bQ[i].getItems(bL,bM,false));
}}}return bO;
},recursiveAddToWidgetQueue:function(){var bl=this.getItems(true,true,false);

for(var i=0,l=bl.length;i<l;i++){qx.ui.core.queue.Widget.add(bl[i]);
}},__lO:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bf){var bg=this.getChildrenContainer();
var bj=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bk=arguments[i];
var bi=bk.getParent();

if(bi){bi.remove(bk);
}bk.setParent(this);
var bh=this.hasChildren();
bg.add(bk);

if(bk.hasChildren()){bg.add(bk.getChildrenContainer());
}this.__lJ.push(bk);

if(!bh){this.__lO();
}
if(bj){bk.recursiveAddToWidgetQueue();
bj.fireNonBubblingEvent(T,qx.event.type.Data,[bk]);
}}
if(bj){qx.ui.core.queue.Widget.add(this);
}},addAt:function(W,X){{};

if(X==this.__lJ.length){this.add(W);
return;
}var bc=W.getParent();

if(bc){bc.remove(W);
}var ba=this.getChildrenContainer();
W.setParent(this);
var bb=this.hasChildren();
var Y=this.__lJ[X];
ba.addBefore(W,Y);

if(W.hasChildren()){ba.addAfter(W.getChildrenContainer(),W);
}qx.lang.Array.insertAt(this.__lJ,W,X);

if(!bb){this.__lO();
}
if(this.getTree()){W.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bJ,bK){{};
this.addAt(bJ,this.__lJ.indexOf(bK));
},addAfter:function(c,d){{};
this.addAt(c,this.__lJ.indexOf(d)+1);
},addAtBegin:function(bn){this.addAt(bn,0);
},remove:function(bo){for(var i=0,l=arguments.length;i<l;i++){var br=arguments[i];

if(this.__lJ.indexOf(br)==-1){this.warn("Cannot remove treeitem '"+br+"'. It is not a child of this tree item.");
return;
}var bq=this.getChildrenContainer();

if(br.hasChildren()){bq.remove(br.getChildrenContainer());
}qx.lang.Array.remove(this.__lJ,br);
br.setParent(null);
bq.remove(br);
}var bp=this.getTree();

if(bp){bp.fireNonBubblingEvent(K,qx.event.type.Data,[br]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bC){var bD=this.__lJ[bC];

if(bD){this.remove(bD);
}},removeAll:function(){for(var i=this.__lJ.length-1;i>=0;i--){this.remove(this.__lJ[i]);
}}},destruct:function(){this._disposeArray(G);
this._disposeObjects(L,N);
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
(function(){var b="inspector.property.IPropertyListController";
qx.Interface.define(b,{members:{getQxObject:function(){return true;
},setSelectedProperty:function(a){return true;
},getSelectedProperty:function(){return true;
},getInheritedStatus:function(){return true;
},getGroupStatus:function(){return true;
},gotoSelectedWidget:function(){return true;
},getFilter:function(){return true;
}}});
})();
(function(){var l="key",k="classname",j="execute",i="changeValue",h="set",g="qx.version",f="Group by inheritance",d="inspector/images/icons/api.png",c="qx.ui.core.Widget",b="inspector/images/icons/highlight.png",E="qooxdoo API viewer",D="http://demo.qooxdoo.org/",C="icon/22/actions/view-refresh.png",B="#",A="View",z="get",y="/apiviewer/",x="qx.ui.core.Parent",w="Property",v="inspector/images/icons/setnull.png",s="inspector/images/icons/goto.png",t="qx.ui.core.ClientDocument",q="Group by category",r="Show Inherited Porperties",o="~",p="current",m="inspector/images/icons/setinit.png",n=" (Loading...)",u="inspector.property.PropertyWindow";
qx.Class.define(u,{extend:inspector.components.AbstractWindow,implement:inspector.property.IPropertyListController,construct:function(){arguments.callee.base.call(this,w);
this._filter=new inspector.property.Filter();
this._addToolbarButtons();
this._createMainElement();
},statics:{RELOAD_BUTTON_TOOLTIP_TEXT:"Reload the window.",SHOW_API_BUTTON_TOOLTIP_TEXT:"Show the API of the selected object or property.",SET_NULL_BUTTON_TOOLTIP_TEXT:"Set the currently selected property to null.",SET_DEFAULT_BUTTON_TOOLTIP_TEXT:"Set the currently selected property to its initial value.",HIGHLIGHT_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT:"Highlight the currently selected property.",GOTO_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT:"Go to the currently selected property.",PROPERTY_CAPTION_TITLE:"Properties"},members:{_propertyList:null,_propertyListFull:null,_propertyListHtmlTable:null,_reloadButton:null,_reloadToolTip:null,_apiButtonToolTip:null,_setNullButton:null,_setNullTooltip:null,_setPropertyToDefaultButton:null,_setPropertyToDefaultTooltip:null,_highlightCurrentPropertyButton:null,_highlightCurrentPropertyTooltip:null,_gotoSelectedPropertyButton:null,_gotoSelectedPropertyTooltip:null,_menu:null,_currentlySelectedProperty:null,_qxObject:null,_showInherited:false,_reloadTimer:null,_filter:null,setInitSizeAndPosition:function(){var ba=qx.bom.Viewport.getWidth()-this.getWidth();
var Y=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(ba,30+2*Y);
this.setHeight(Y);
},select:function(U){if(this._qxObject==U){return;
}this._qxObject=U;
this.setCaption(arguments.callee.self.PROPERTY_CAPTION_TITLE+n);
var self=this;
window.setTimeout(function(){self._propertyList.build();
if(self._currentlySelectedProperty!=null){var bc=self._currentlySelectedProperty.getUserData(l);
var bb=self._currentlySelectedProperty.getUserData(k);
if(self._propertyList.containsProperty(bc,bb)){self._switchPropertyButtons();
}else{self._currentlySelectedProperty=null;
self._setNullButton.setEnabled(false);
self._setPropertyToDefaultButton.setEnabled(false);
self._highlightCurrentPropertyButton.setEnabled(false);
self._gotoSelectedPropertyButton.setEnabled(false);
}}self.setCaption(inspector.property.PropertyWindow.PROPERTY_CAPTION_TITLE);
},0);
},getSelection:function(){return this._qxObject;
},getQxObject:function(){return this._qxObject;
},setSelectedProperty:function(V){this._currentlySelectedProperty=V;
this._switchPropertyButtons();
},getSelectedProperty:function(){return this._currentlySelectedProperty;
},getInheritedStatus:function(){return this._showInherited;
},getGroupStatus:function(){return this._groupButton.getValue();
},gotoSelectedWidget:function(){this._gotoSelectedPropertyButtonEventListener();
},getFilter:function(){return this._filter;
},_createMainElement:function(){this._propertyList=new inspector.property.PropertyList(this);
var a=new qx.ui.container.Scroll();
this.add(a,{flex:1});
a.add(this._propertyList);
},_addToolbarButtons:function(){this._createMenu();
var be=new qx.ui.toolbar.MenuButton(A,null,this._menu);
this._toolbar.add(be);
this._toolbar.addSeparator();
this._reloadButton=new qx.ui.toolbar.Button(null,C);
this._reloadButton.setToolTipText(arguments.callee.self.RELOAD_BUTTON_TOOLTIP_TEXT);
this._reloadButton.addListener(j,function(){this._propertyList.build();
},this);
this._toolbar.add(this._reloadButton);
this._toolbar.addSeparator();
var bd=new qx.ui.toolbar.Button(null,d);
bd.setToolTipText(arguments.callee.self.SHOW_API_BUTTON_TOOLTIP_TEXT);
bd.addListener(j,this._onOpenApiWindow,this);
this._toolbar.add(bd);
this._toolbar.addSpacer();
this._setNullButton=new qx.ui.toolbar.Button(null,v);
this._setNullButton.setToolTipText(arguments.callee.self.SET_NULL_BUTTON_TOOLTIP_TEXT);
this._setNullButton.addListener(j,this._setNullButtonEventListener,this);
this._setNullButton.setEnabled(false);
this._toolbar.add(this._setNullButton);
this._setPropertyToDefaultButton=new qx.ui.toolbar.Button(null,m);
this._setPropertyToDefaultButton.setToolTipText(arguments.callee.self.SET_DEFAULT_BUTTON_TOOLTIP_TEXT);
this._setPropertyToDefaultButton.addListener(j,this._setPropertyToDefaultButtonEventListener,this);
this._setPropertyToDefaultButton.setEnabled(false);
this._toolbar.add(this._setPropertyToDefaultButton);
this._highlightCurrentPropertyButton=new qx.ui.toolbar.Button(null,b);
this._highlightCurrentPropertyButton.setToolTipText(arguments.callee.self.HIGHLIGHT_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT);
this._highlightCurrentPropertyButton.addListener(j,this._highlightCurrentPropertyButtonEventListener,this);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton=new qx.ui.toolbar.Button(null,s);
this._gotoSelectedPropertyButton.setToolTipText(arguments.callee.self.GOTO_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT);
this._gotoSelectedPropertyButton.addListener(j,this._gotoSelectedPropertyButtonEventListener,this);
this._gotoSelectedPropertyButton.setEnabled(false);
},_createMenu:function(){this._menu=new qx.ui.menu.Menu();
this._inheritedButton=new qx.ui.menu.CheckBox(r);
this._inheritedButton.addListener(i,this._switchInheritedStatus,this);
this._inheritedButton.setValue(true);
this._menu.add(this._inheritedButton);
this._menu.addSeparator();
var bl=new qx.ui.menu.RadioButton(f);
bl.addListener(i,function(e){if(this._qxObject!=null){this._propertyList.build();
}this._inheritedButton.setEnabled(true);
},this);
bl.setValue(true);
this._menu.add(bl);
this._groupButton=new qx.ui.menu.RadioButton(q);
this._groupButton.addListener(i,function(e){if(this._qxObject!=null){this._propertyList.build();
}this._inheritedButton.setEnabled(false);
},this);
this._menu.add(this._groupButton);
new qx.ui.form.RadioGroup(bl,this._groupButton);
},_switchPropertyButtons:function(){if(this._currentlySelectedProperty==null){this._setNullButton.setEnabled(false);
this._setPropertyToDefaultButton.setEnabled(false);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
return ;
}var P=this._currentlySelectedProperty.getUserData(k);
var Q=this._currentlySelectedProperty.getUserData(l);
var N=qx.core.Init.getApplication().getIframeWindowObject();
var S=N.qx.Class.getByName(P).$$properties;
var R=S[Q];
if(R.nullable){this._setNullButton.setEnabled(true);
}else{this._setNullButton.setEnabled(false);
}if(R.init){this._setPropertyToDefaultButton.setEnabled(true);
}else{this._setPropertyToDefaultButton.setEnabled(false);
}if(Q!=undefined){try{var T=z+qx.lang.String.firstUp(Q);
if(this._qxObject[T]==undefined){this._setNullButton.setEnabled(false);
this._setPropertyToDefaultButton.setEnabled(false);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
return ;
}var O=this._qxObject[T].call(this._qxObject);
if((R.check==c||R.check==x)&&(this._qxObject.classname!=t)&&(O!=null)){this._highlightCurrentPropertyButton.setEnabled(true);
this._gotoSelectedPropertyButton.setEnabled(true);
}else{this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
}}catch(bm){alert("Error during reading the selected Property: "+bm);
this._currentlySelectedProperty.setBackgroundColor(null);
this._currentlySelectedProperty=null;
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
}}},_onOpenApiWindow:function(){if(this._qxObject!=null){if(this._currentlySelectedProperty!=null){var W=this._currentlySelectedProperty.getUserData(k);
var X=this._currentlySelectedProperty.getUserData(l);
this._openApiWindow(W,X);
}else{this._openApiWindow(this._qxObject.classname);
}}else{this._openApiWindow();
}},_openApiWindow:function(F,G){var H=qx.core.Init.getApplication()._loadedWindow.qx.core.Setting.get(g);
var I=D+(H||p)+y;

if(F!=null){I+=B+F;
if(G!=null){I+=o+G;
}}var J=window.open(I,E);
J.focus();
},_setNullButtonEventListener:function(){var K=this._currentlySelectedProperty.getUserData(k);
var M=this._currentlySelectedProperty.getUserData(l);
var L=h+qx.lang.String.firstUp(M);
try{this._qxObject[L].call(this._qxObject,null);
var K=this._currentlySelectedProperty.getUserData(k);
var M=this._currentlySelectedProperty.getUserData(l);
this._propertyList.update(M,K);
this._switchPropertyButtons();
}catch(e){alert(e);
}},_setPropertyToDefaultButtonEventListener:function(){var bg=this._currentlySelectedProperty.getUserData(k);
var bh=this._currentlySelectedProperty.getUserData(l);
var bf=qx.core.Init.getApplication().getIframeWindowObject();
var bk=bf.qx.Class.getByName(bg).$$properties;
var bj=bk[bh];
var bi=h+qx.lang.String.firstUp(bh);
try{this._qxObject[bi].call(this._qxObject,bj.init);
var bg=this._currentlySelectedProperty.getUserData(k);
var bh=this._currentlySelectedProperty.getUserData(l);
this._propertyList.update(bh,bg);
}catch(e){alert(e);
}},_highlightCurrentPropertyButtonEventListener:function(){},_gotoSelectedPropertyButtonEventListener:function(){},_switchInheritedStatus:function(e){this._showInherited=e.getCurrentTarget().getValue();

if(this._propertyList){this._propertyList.switchInheritedStatus(this._showInherited);
}}}});
})();
(function(){var a="inspector.property.IFilter";
qx.Interface.define(a,{members:{sortIn:function(b,c,d){return true;
},getResult:function(){return true;
},empty:function(){return true;
}}});
})();
(function(){var r="Behavior",q="Content",p="Appearance",o="Dimension",n="Spacing",m="Tooltip & Context menu",l="Visibility",k="height",j="content",h="_properties",bf="spacing",be="droppable",bd="shadow",bc="cursor",bb="decorator",ba="opacity",Y="zIndex",X="color",W="appearance",V="icon",y="inspector.property.Filter",z="value",w="font",x="keepfocus",u="focusable",v="enabled",s="allowShrink",t="keepactive",B="draggable",C="name",J="align",H="width",N="visibility",L="i",R="padding",P="selectable",E="rich",U="_categories",T="allowStretch",S="tabindex",D="anonymous",F="tooltip",G="label",I="margin",K="_classnames",M="contextmenu",O="allowGrow",Q="checked",A="_tests";
qx.Class.define(y,{extend:qx.core.Object,implement:inspector.property.IFilter,statics:{DEFAULT_CATEGORY_NAME:"Rest"},construct:function(){qx.core.Object.call(this);
this._tests=[];
this._defineTests();
this._createCategories();
},members:{_categories:null,_properties:null,_classnames:null,_tests:null,sortIn:function(c,d,e){for(var i=0;i<this._tests.length;i++){var f=new RegExp(this._tests[i][0],L);
if(f.test(c)){var g=this._categories[this._tests[i][1]];
this._properties[g][c]=d;
this._classnames[g][c]=e;
return ;
}}this._properties[this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]][c]=d;
this._classnames[this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]][c]=e;
},getResult:function(){var a=[];

for(var name in this._categories){a[this._categories[name]]=name;
}return {names:a,props:this._properties,classes:this._classnames};
},empty:function(){this.__cj();
},_createCategories:function(){this._categories=[];
var i=1;

for(var b=0;b<this._tests.length;b++){if(this._categories[this._tests[b][1]]==undefined){this._categories[this._tests[b][1]]=i;
i++;
}}this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]=i;
this.__cj();
},__cj:function(){this._properties=[];
this._classnames=[];
for(var i=1;i<=this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME];i++){this._properties[i]={};
this._classnames[i]=[];
}},_defineTests:function(){this._tests.push([I,n]);
this._tests.push([bf,n]);
this._tests.push([R,n]);
this._tests.push([J,n]);
this._tests.push([W,p]);
this._tests.push([X,p]);
this._tests.push([bb,p]);
this._tests.push([bd,p]);
this._tests.push([w,p]);
this._tests.push([ba,p]);
this._tests.push([bc,p]);
this._tests.push([H,o]);
this._tests.push([k,o]);
this._tests.push([O,o]);
this._tests.push([s,o]);
this._tests.push([T,o]);
this._tests.push([j,q]);
this._tests.push([E,q]);
this._tests.push([v,q]);
this._tests.push([Q,q]);
this._tests.push([z,q]);
this._tests.push([C,q]);
this._tests.push([G,q]);
this._tests.push([V,q]);
this._tests.push([F,m]);
this._tests.push([M,m]);
this._tests.push([N,l]);
this._tests.push([Y,l]);
this._tests.push([D,r]);
this._tests.push([S,r]);
this._tests.push([u,r]);
this._tests.push([x,r]);
this._tests.push([t,r]);
this._tests.push([B,r]);
this._tests.push([be,r]);
this._tests.push([P,r]);
}},destruct:function(){this._disposeFields(A,U,h,K);
}});
})();
(function(){var u="_controller",t="abstract",s="qx.core.Object",r="inspector.property.AbstractPropertyList",q="_filter";
qx.Class.define(r,{extend:qx.ui.container.Composite,type:t,construct:function(p){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.VBox(8));
this._controller=p;
},members:{_controller:null,_filter:null,build:function(){throw new Error("Abstract method call (build) in 'PropertyList'!");
},update:function(y,z){throw new Error("Abstract method call (update) in 'PropertyList'!");
},getComponents:function(){throw new Error("Abstract method call (getComponents) in 'PropertyList'!");
},containsProperty:function(v,w){throw new Error("Abstract method call (containsProperty) in 'PropertyList'!");
},switchInheritedStatus:function(){throw new Error("Abstract method call (switchInheritedStatus) in 'PropertyList'!");
},recalculateLayout:function(){throw new Error("Abstract method call (recalculateLayout) in 'PropertyList'!");
},_getDataInherited:function(h){var n=h;
var k=qx.core.Init.getApplication().getIframeWindowObject();
var o=[];
var m=[];
var l=[];
for(var i=1;;i++){o[i]=k.qx.Class.getByName(n.classname).$$properties;
l[i]=n.classname;
m[i]=[];
for(var j in o[i]){m[i][j]=n.classname;
}if(k.qx.Class.getByName(s)==n){break;
}n=k.qx.Class.getByName(n.classname).superclass;
}return {names:l,props:o,classes:m};
},_getDataGrouped:function(a){var f=this._getDataInherited(a);
var e=f.props;
var d=this._controller.getFilter();
d.empty();
for(var b=0;b<e.length;b++){var g=f.names[b];

for(var c in e[b]){d.sortIn(c,e[b][c],g);
}}return d.getResult();
},_getData:function(x){if(this._controller.getGroupStatus()){return this._getDataGrouped(x);
}else{return this._getDataInherited(x);
}}},destruct:function(){this._disposeFields(u,q);
}});
})();
(function(){var bV=".",bU="",bT="key",bS="classname",bR="inspector/images/shell/errorIcon.png",bQ="click",bP="visible",bO="inherited",bN="set",bM="name",cY="row",cX="changeValue",cW="qx.ui.basic.Label",cV="qx.ui.core.Widget",cU="activate",cT="excluded",cS="inspector/images/close.png",cR="Integer",cQ="inspector/images/null.png",cP="middle",cd="get",ce="getActiveWindow",cb="qx.ui.container.Composite",cc="qx.event.type.Focus",bY="Number",ca="NonEmptyString",bW="blur",bX="mousedown",ck="Boolean",cl="icon/16/actions/go-next.png",cv="_oldPropertyListPool",cs="#FFFFFF",cD="inspector.property.PropertyList",cy="qx.ui.form.TextField",cL="solid",cI="execute",co="Enter",cO="Double",cN="inspector/images/open.png",cM="#969696",cn="<u>",cq="pointer",cr=":",cu="Label",cw="String",cz="hidden",cF="<b>",cK="]</u>",cf="qx.ui.form.CheckBox",cg="_colorPopup",cp="</b>",cC=" objects",cB="Float",cA="cursor",cH="qx.ui.form.ComboBox",cG="keypress",cx="inherit",cE="Color",bJ="_propertyRows",cJ="_comboBoxPopups",ch=" [",ci="Font",ct="qx.event.type.KeySequence",bK="white",bL="left",cm="Choose Color",cj="_colorFields";
qx.Class.define(cD,{extend:inspector.property.AbstractPropertyList,construct:function(b){arguments.callee.base.call(this,b);
this._propertyRows={};
this._comboBoxPopups=[];
this._createColorPopup();
var c=new qx.ui.basic.Image(cl);
c.setPaddingLeft(8);
this._arrow={arrow:c,container:null,row:null};
},members:{_propertyRows:null,_comboBoxPopups:null,_colorPopup:null,_colorFields:null,_currentColorProperty:null,_arrow:null,build:function(){if(this._controller.getQxObject()!=null){this._reloadPropertyListFull();
}},update:function(A,B){this._setPropertyValueFull(A,B);
},switchInheritedStatus:function(){var bi=this.getChildren();

for(var i=0;i<bi.length;i++){if(bi[i].getUserData(bO)){if(this._controller.getInheritedStatus()){bi[i].setVisibility(bP);
}else{bi[i].setVisibility(cT);
}}}},containsProperty:function(w,y){return this._propertyRows[y+bV+w]==null?false:true;
},_reloadPropertyListFull:function(){var bp=false;
var bs=true;
var by=this._getData(this._controller.getQxObject());
var bq=by.names;
var bz=by.props;
var br=by.classes;
if(!this._controller.getGroupStatus()){this._removeUnnecessaryClasses(bq);
}for(var i=bz.length-1;i>0;i--){if(!this._controller.getGroupStatus()){var bv=this.getChildren();
if(!bp&&bv.length>0){var x=bv.length-1-2*(bz.length-i-1);
if(x>0){var bB=bv[x].getUserData(bM);
if(bB!=bq[i]){var bw=bq[i+1];
bp=true;
}}else{bp=true;
bs=false;
}}else{bp=true;
bs=false;
}}else{bp=true;
if(bs){this._clearList();
bs=false;
}}if(bp){if(bs){this._removeOld(bw);
bs=false;
}var bo=new qx.ui.basic.Atom(cF+bq[i]+cp,cS);
bo.setUserData(bM,bq[i]);
bo.setRich(true);
this.addAt(bo,0);
var bm=new qx.ui.container.Composite(new qx.ui.layout.Grid(6,6));
bm.getLayout().setColumnWidth(0,25);
bm.setUserData(bM,bq[i]);
if(!this._controller.getGroupStatus()){if(i==1){bm.setUserData(bO,false);
bo.setUserData(bO,false);
}else{bm.setUserData(bO,true);
bo.setUserData(bO,true);
}}bo.addListener(bQ,function(e){if(this.isVisible()){this.setVisibility(cT);
e.getTarget().setIcon(cN);
}else{this.setVisibility(bP);
e.getTarget().setIcon(cS);
}},bm);
this.addAfter(bm,bo);
var bx=0;

for(var bu in bz[i]){if(bz[i][bu].group==null){var bn=new qx.ui.basic.Label(bu+cr);
bn.setUserData(bS,br[i][bu]);
bn.setUserData(bT,bu);
bn.setUserData(cY,bx);
bm.add(bn,{row:bx,column:1});
var bA=this._getPropertyWidgetFull(bz[i][bu],bu,br[i][bu]);
bA.setUserData(bS,br[i][bu]);
bA.setUserData(bT,bu);
bA.setUserData(cY,bx);
bm.add(bA,{row:bx,column:2});
var bt=new qx.ui.basic.Image(cQ);
bt.setUserData(bS,br[i][bu]);
bt.setUserData(bT,bu);
bt.setUserData(cY,bx);
bm.add(bt,{row:bx,column:3});
this._propertyRows[br[i][bu]+bV+bu]={container:bm,row:bx};
bm.getLayout().setRowAlign(bx,bL,cP);
bm.getLayout().setRowMinHeight(bx,20);
bn.addListener(bQ,this.__ck,this);
bA.addListener(bQ,this.__ck,this);
bA.addListener(cU,this.__ck,this);
bt.addListener(bQ,this.__ck,this);
bx++;
}}}}this.switchInheritedStatus();
this._refillPropertyListFull();
},_removeUnnecessaryClasses:function(bd){for(;(bd.length-1)*2<this.getChildren().length;){var bg=this.getChildren()[0];
this.removeAt(0);
bg.dispose();
var bf=this.getChildren()[0].getChildren();
for(var bh=0;bh<bf.length;bh++){if(bf[bh].classname==cW){var be=bf[bh].getUserData(bS)+bV+bf[bh].getUserData(bT);
delete this._propertyRows[be];
}}this.removeAt(0);
}},_removeOld:function(C){if(C==null){this._clearList();
return;
}while(true){var H=this.getChildren()[0];
var G=H.getUserData(bM);
if(G==C){break;
}else{if(H.classname==cb){var F=H.getChildren();
for(var D=0;D<F.length;D++){if(F[D].classname==cW){var E=F[D].getUserData(bS)+bV+F[D].getUserData(bT);
delete this._propertyRows[E];
}}}this.removeAt(0);
}}},_clearList:function(){for(var X in this._porpertyColumns){delete this._porpertyColumns[X];
}this.removeAll();
},_getPropertyWidgetFull:function(d,f,g){var u=cd+qx.lang.String.firstUp(f);

try{if(u===ce){throw new Error("Property activeWindow of an instance of qx.ui.root.Abstract is not (yet) ready!");
}else{var m=this._controller.getQxObject()[u]();
}}catch(bI){return new qx.ui.basic.Label();
}if(d.check!==null){if(d.check==ck){var j=new qx.ui.form.CheckBox();
var o=function(e){var bc=this._controller.getQxObject()[u].call(this._controller.getQxObject());

if(e.getData()!=bc){var bb=bN+qx.lang.String.firstUp(f);
try{this._controller.getQxObject()[bb].call(this._controller.getQxObject(),e.getData());
this._setPropertyValueFull(f,g,true);
}catch(a){alert(a+" ["+bb+"]");
j.setValue(!bc);
}}};
j.addListener(cX,o,this);
return j;
}else if(d.check instanceof Array){var h=new qx.ui.form.ComboBox();
var p=d.check;
for(var i=0;i<p.length;i++){var n=new qx.ui.form.ListItem(p[i]);
h.add(n);
}h.addListener(cX,function(e){var db=null;
if(e.getTarget().getValue()!=null){var db=e.getTarget().getValue();
}if(db!=m){var da=bN+qx.lang.String.firstUp(f);
try{this._controller.getQxObject()[da].call(this._controller.getQxObject(),db);
m=this._controller.getQxObject()[u].call(this._controller.getQxObject());
this._setPropertyValueFull(f,g,true);
m=this._controller.getQxObject()[u].call(this._controller.getQxObject());
}catch(ba){alert(ba);
}}},this);
return h;
}else if(d.check==cR||d.check==cw||d.check==ca||d.check==cu||d.check==cB||d.check==cO||d.check==bY){var s=new qx.ui.form.TextField();
var q=function(e){if(e.classname==ct){if(e.getKeyIdentifier()!=co){return;
}}else if(e.classname==cc){}else{return ;
}var bC=bN+qx.lang.String.firstUp(f);
try{var bD=s.getValue();
m=this._controller.getQxObject()[u].call(this._controller.getQxObject());
if(e.classname==cc){if(bD==bU&&m==null){return;
}}if(d.check==cR||d.check==bY){bD=parseFloat(bD);
}this._controller.getQxObject()[bC].call(this._controller.getQxObject(),bD);
this._setPropertyValueFull(f,g,true);
m=this._controller.getQxObject()[u].call(this._controller.getQxObject());
}catch(W){alert(W);
s.setValue(m+bU);
}};
s.addListener(bW,q,this);
s.addListener(cG,q,this);
return s;
}else if(d.check==cE){var k=new qx.ui.container.Composite(new qx.ui.layout.HBox(6));
k.getLayout().setAlignY(cP);
var r=new qx.ui.core.Widget();
r.setDecorator(new qx.ui.decoration.Single(1,cL,cM));
r.setBackgroundColor(bK);
r.setHeight(20);
r.setWidth(20);
r.setAllowGrowX(false);
r.setAllowGrowY(false);
k.add(r);
this._colorFields[g+bV+f]=r;
var l=new qx.ui.form.Button(cm);
k.add(l);
l.addListener(bX,function(e){this._colorPopup.setValue(r.getBackgroundColor());
this._currentColorProperty=g+bV+f;
this._colorPopup.placeToMouse(e);
this._colorPopup.show();
},this);
l.addListener(cI,this.__ck,this);
l.addListener(cU,this.__ck,this);
return k;
}else if(d.ckeck==cV){var v=new qx.ui.basic.Label();
return v;
}else{var t=new qx.ui.basic.Label();
return t;
}}else{var t=new qx.ui.basic.Label();
return t;
}},_refillPropertyListFull:function(){for(var bG in this._propertyRows){var bH=bG.substr(bG.lastIndexOf(bV)+1);
var bF=bG.substring(0,bG.lastIndexOf(bV));
this._setPropertyValueFull(bH,bF);
}},_setPropertyValueFull:function(J,K,L){var O=qx.core.Init.getApplication().getIframeWindowObject();
var N=this._propertyRows[K+bV+J].container.getLayout();
var V=this._propertyRows[K+bV+J].row;

if(!L&&N.getCellWidget(V,0)){this._arrow.container.remove(this._arrow.arrow);
this._arrow.container=null;
this._arrow.row=null;
}var U=cd+qx.lang.String.firstUp(J);

try{if(U===ce){throw new Error("Property activeWindow of an instance of qx.ui.root.Abstract is not (yet) ready!");
}else{var R=this._controller.getQxObject()[U]();
}}catch(bl){N.getCellWidget(V,3).setVisibility(bP);
N.getCellWidget(V,3).setSource(bR);
var P=N.getCellWidget(V,3).getToolTip();

if(!P){P=new qx.ui.tooltip.ToolTip(bl+bU,bR);
}else{P.setLabel(bl+bU);
P.setIcon(bR);
}N.getCellWidget(V,3).setToolTip(P);
return;
}if(R==null){N.getCellWidget(V,3).setVisibility(bP);
N.getCellWidget(V,3).setSource(cQ);
N.getCellWidget(V,3).resetToolTip();
}else{N.getCellWidget(V,3).setVisibility(cz);
}
try{var parent=this._controller.getQxObject();

while(R==cx){parent=parent.getLayoutParent();
R=parent[U].call(parent);
}}catch(bE){N.getCellWidget(V,3).setVisibility(bP);
N.getCellWidget(V,3).setSource(bR);
var P=N.getCellWidget(V,3).getToolTip();

if(!P){P=new qx.ui.tooltip.ToolTip(bE+bU,bR);
}else{P.setLabel(bE+bU);
P.setIcon(bR);
}N.getCellWidget(V,3).setToolTip(P);
return;
}if(N.getCellWidget(V,2).classname==cf){if(R==null){N.getCellWidget(V,2).setValue(false);
}else{N.getCellWidget(V,2).setValue(R);
}}else if(N.getCellWidget(V,2).classname==cW){if(R!=null){var T=O.qx.Class.getByName(K).$$properties;
var S=T[J];
if(R instanceof Array){N.getCellWidget(V,2).setValue(R.length+cC);
}else if((S.check==cV)&&(this._controller.getQxObject() instanceof qx.application.AbstractGui)){N.getCellWidget(V,2).setValue(cn+R.classname+ch+R.toHashCode()+cK);
N.getCellWidget(V,2).setStyleProperty(cA,cq);
if(N.getCellWidget(V,2).hasListeners(bQ)===undefined){N.getCellWidget(V,2).addListener(bQ,function(e){if(this._controller.getSelectedProperty()!=null){this._controller.getSelectedProperty().setBackgroundColor(null);
}this._controller.setSelectedProperty(N.getCellWidget(V,1));
this._controller.gotoSelectedWidget();
},this);
}}else if(S.check==ci){N.getCellWidget(V,2).setFont(R);
N.getCellWidget(V,2).setValue(R+bU);
}else{N.getCellWidget(V,2).setValue(R+bU);
}}else{N.getCellWidget(V,2).setValue(bU);
}}else if(N.getCellWidget(V,2).classname==cy){if(R!=null){N.getCellWidget(V,2).setValue(R+bU);
}else{N.getCellWidget(V,2).setValue(bU);
}}else if(N.getCellWidget(V,2).classname==cH){var M=N.getCellWidget(V,2);
if(R==null){M.clearSelection();
}else{for(var i=0;i<M.getChildren().length;i++){if(R==M.getChildren()[i].getLabel()){if(R){M.setValue(R);
}}}}}else if(N.getCellWidget(V,2).classname==cb){try{var Q=O.qx.theme.manager.Color.getInstance().resolve(R);
N.getCellWidget(V,2).getChildren()[0].setBackgroundColor(Q);
}catch(z){N.getCellWidget(V,2).getChildren()[0].setBackgroundColor(cs);
}}},_createColorPopup:function(){this._colorPopup=new qx.ui.control.ColorPopup();
var Y=qx.core.Init.getApplication();
Y.getRoot().add(this._colorPopup);
this._colorFields={};
this._colorPopup.addListener(cX,function(e){if(this._currentColorProperty!=null){var dd=this._currentColorProperty.substr(this._currentColorProperty.lastIndexOf(bV)+1);
var dc=this._currentColorProperty.substring(0,this._currentColorProperty.lastIndexOf(bV));
var de=bN+qx.lang.String.firstUp(dd);
try{this._controller.getQxObject()[de].call(this._controller.getQxObject(),e.getData());
this._colorFields[this._currentColorProperty].setBackgroundColor(e.getData());
this._setPropertyValueFull(dd,dc,true);
}catch(I){alert(I);
}this._currentColorProperty=null;
}},this);
},__ck:function(e){var bj=e.getTarget();

while(bj.getUserData(bT)==null){bj=bj.getLayoutParent();
}var bk=bj.getUserData(bS)+bV+bj.getUserData(bT);
if(this._arrow.container!=null){this._arrow.container.remove(this._arrow.arrow);
this._arrow.container=null;
this._arrow.row=null;
}if(this._propertyRows[bk]!=undefined){this._arrow.container=this._propertyRows[bk].container;
this._arrow.row=bj.getUserData(cY);
this._arrow.container.add(this._arrow.arrow,{row:this._arrow.row,column:0});
this._controller.setSelectedProperty(bj);
}else{this._controller.setSelectedProperty(null);
}}},destruct:function(){this._disposeFields(bJ,cJ,cg,cj,cv);
}});
})();
(function(){var b="checkbox",a="qx.ui.form.CheckBox";
qx.Class.define(a,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(c){{};
arguments.callee.base.call(this,c);
this.setValue(false);
},properties:{appearance:{refine:true,init:b},allowGrowX:{refine:true,init:false}}});
})();
(function(){var v="popup",u="list",t="mousewheel",s="resize",r="PageUp",q="blur",p="abstract",o="keypress",n="Number",m="changeSelection",f="Escape",l="_applyMaxListHeight",i="PageDown",d="mouseup",c="changeVisibility",h="one",g="middle",j="qx.ui.form.AbstractSelectBox",b="mousedown",k="qx.event.type.Data";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MFormElement,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:p,construct:function(){arguments.callee.base.call(this);
var z=new qx.ui.layout.HBox();
this._setLayout(z);
z.setAlignY(g);
this.addListener(o,this._onKeyPress);
this.addListener(q,this.close,this);
var y=qx.core.Init.getApplication().getRoot();
y.addListener(t,this._onMousewheel,this,true);
this.addListener(s,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:n,apply:l,nullable:true,init:200}},events:{"changeValue":k},members:{_createChildControlImpl:function(E){var F;

switch(E){case u:F=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:h,quickSelection:true});
F.addListener(m,this._onListChangeSelection,this);
F.addListener(b,this._onListMouseDown,this);
break;
case v:F=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
F.setAutoHide(false);
F.setKeepActive(true);
F.addListener(d,this.close,this);
F.add(this.getChildControl(u));
F.addListener(c,this._onPopupChangeVisibility,this);
break;
}return F||arguments.callee.base.call(this,E);
},_applyMaxListHeight:function(w,x){this.getChildControl(u).setMaxHeight(w);
},getChildrenContainer:function(){return this.getChildControl(u);
},open:function(){var D=this.getChildControl(v);
D.placeToWidget(this,true);
D.show();
},close:function(){this.getChildControl(v).hide();
},toggle:function(){var a=this.getChildControl(v).isVisible();

if(a){this.close();
}else{this.open();
}},_onKeyPress:function(e){var G=e.getKeyIdentifier();
var H=this.getChildControl(v);
if(H.isHidden()&&(G==i||G==r)){e.stopPropagation();
}else if(!H.isHidden()&&G==f){this.close();
e.stop();
}else{this.getChildControl(u).handleKeyPress(e);
}},_onMousewheel:function(e){var C=e.getTarget();
var B=this.getChildControl(v);

if(qx.ui.core.Widget.contains(B,C)){return;
}this.close();
e.preventDefault();
},_onResize:function(e){this.getChildControl(v).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var A=qx.core.Init.getApplication().getRoot();

if(A){A.removeListener(t,this._onMousewheel,this,true);
}}});
})();
(function(){var L="textfield",K="button",J="input",I="list",H="changeValue",G="selected",F="qx.event.type.Data",E="inner",D="",C="focusin",bf="popup",be="focusout",bd="blur",bc="Enter",bb="Please use the changeValue event instead.",ba="Down",Y="Function",X="Use public 'setTextSelection' instead!",W="quick",V="String",S="Use public 'clearTextSelection' instead!",T="qx.ui.form.ComboBox",Q="single",R="Use public 'getTextSelectionLength' instead!",O="combobox",P="click",M="_applyPlaceholder",N="Use public 'selectAllText' instead!",U="Use public 'getTextSelection' instead!";
qx.Class.define(T,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IFormElement,qx.ui.form.IStringForm],construct:function(){arguments.callee.base.call(this);
var B=this._createChildControl(L);
this._createChildControl(K);
this.addListener(P,this._onClick);
this.addListener(C,function(e){B.fireNonBubblingEvent(C,qx.event.type.Focus);
},this);
this.addListener(be,function(e){B.fireNonBubblingEvent(be,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:O},format:{check:Y,init:function(bh){return this.__cn(bh);
},nullable:true},placeholder:{check:V,nullable:true,apply:M}},events:{"input":F,"changeValue":F},members:{__cl:null,__cm:null,_applyPlaceholder:function(z,A){this.getChildControl(L).setPlaceholder(z);
},_createChildControlImpl:function(o){var p;

switch(o){case L:p=new qx.ui.form.TextField();
p.setFocusable(false);
p.addState(E);
p.addListener(H,this._onTextFieldChangeValue,this);
p.addListener(bd,this.close,this);
this._add(p,{flex:1});
break;
case K:p=new qx.ui.form.Button();
p.setFocusable(false);
p.setKeepActive(true);
p.addState(E);
this._add(p);
break;
case I:p=arguments.callee.base.call(this,o);
p.setSelectionMode(Q);
break;
}return p||arguments.callee.base.call(this,o);
},_forwardStates:{focused:true},tabFocus:function(){var bg=this.getChildControl(L);
bg.getFocusElement().focus();
bg.selectAllText();
},setValue:function(x){var y=this.getChildControl(L);

if(y.getValue()==x){return;
}y.setValue(x);
},getValue:function(){return this.getChildControl(L).getValue();
},resetValue:function(){this.getChildControl(L).setValue(null);
},addListener:function(d,f,self,g){if(d==J){qx.log.Logger.deprecatedEventWarning(arguments.callee,J,bb);

if(!this.__cm){var h=this.getChildControl(L);
this.__cm=h.addListener(J,this._onTextFieldInput,this);
}}return arguments.callee.base.call(this,d,f,self,g);
},_onKeyPress:function(e){var v=this.getChildControl(bf);
var u=e.getKeyIdentifier();

if(u==ba&&e.isAltPressed()){this.getChildControl(K).addState(G);
this.toggle();
e.stopPropagation();
}else if(u==bc){if(v.isVisible()){this.close();
e.stop();
}}else if(v.isVisible()){arguments.callee.base.call(this,e);
}},_onClick:function(e){var w=e.getTarget();

if(w==this.getChildControl(K)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){if(this.__cl){var c=this.__cl.getLabel();

if(this.getFormat()!=null){c=this.getFormat().call(this,this.__cl);
}this.setValue(c);
this.__cl=null;
}},_onListChangeSelection:function(e){var i=e.getData();

if(i.length>0){var j=this.getChildControl(I);

if(j.getSelectionContext()==W){this.__cl=i[0];
}else{var k=i[0].getLabel();

if(this.getFormat()!=null){k=this.getFormat().call(this,i[0]);
}this.setValue(k);
this.__cl=null;
}}},_onPopupChangeVisibility:function(e){var r=this.getChildControl(bf);

if(r.isVisible()){var s=this.getChildControl(I);
var t=this.getValue();
var q=null;

if(t){q=s.findItem(t);
}
if(q){s.setSelection([q]);
}else{s.resetSelection();
}}else{this.tabFocus();
}this.getChildControl(K).removeState(G);
},_onTextFieldInput:function(e){this.fireDataEvent(J,e.getData());
},_onTextFieldChangeValue:function(e){var bk=e.getData();
var bj=this.getChildControl(I);

if(bk!=null){var bi=bj.findItem(bk);

if(bi){bj.setSelection([bi]);
}else{bj.resetSelection();
}}else{bj.resetSelection();
}this.fireDataEvent(H,bk,e.getOldData());
},__cn:function(l){var m=l?l.getLabel():D;
var n=l?l.getRich():false;

if(n){m=m.replace(/<[^>]+?>/g,D);
m=qx.bom.String.unescape(m);
}return m;
},getSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,U);
return this.getTextSelection();
},getSelectionLength:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,R);
return this.getTextSelectionLength();
},setSelection:function(bl,bm){qx.log.Logger.deprecatedMethodWarning(arguments.callee,X);
this.setTextSelection(bl,bm);
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,S);
this.clearTextSelection();
},selectAll:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,N);
this.selectAllText();
},getTextSelection:function(){return this.getChildControl(L).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(L).getTextSelectionLength();
},setTextSelection:function(a,b){this.getChildControl(L).setTextSelection(a,b);
},clearTextSelection:function(){this.getChildControl(L).clearTextSelection();
},selectAllText:function(){this.getChildControl(L).selectAllText();
}}});
})();
(function(){var s="changeValue",r="qx.event.type.Data",q="horizontal",p="vertical",o="",n=",",m="qx.ui.form.List",k="Boolean",j="one",h="action",L="addChildWidget",K="_applySpacing",J="Please use setModelSelection instead.",I="list",H="Please use the changeSelection event instead.",G="keyinput",F="Integer",E="changeSelection",D="addItem",C="removeChildWidget",z="_applyOrientation",A="multi",x="single",y="keypress",v="__jH",w="Please use getModelSelection instead.",t="Enter",u="pane",B="removeItem";
qx.Class.define(m,{extend:qx.ui.core.AbstractScrollArea,implement:[qx.ui.form.IFormElement,qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MFormElement,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(M){arguments.callee.base.call(this);
this.__jH=new qx.ui.container.Composite();
this.__jH.addListener(L,this._onAddChild,this);
this.__jH.addListener(C,this._onRemoveChild,this);
this.getChildControl(u).add(this.__jH);
if(M){this.setOrientation(q);
}else{this.initOrientation();
}this.addListener(y,this._onKeyPress);
this.addListener(G,this._onKeyInput);
this.addListener(E,this._onChangeSelection);
this.__jI=o;
},events:{addItem:r,removeItem:r,changeValue:r},properties:{appearance:{refine:true,init:I},focusable:{refine:true,init:true},orientation:{check:[q,p],init:p,apply:z},spacing:{check:F,init:0,apply:K,themeable:true},enableInlineFind:{check:k,init:true}},members:{__jI:null,__jJ:null,__jH:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__jH;
},_onAddChild:function(e){this.fireDataEvent(D,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(B,e.getData());
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
var Y=this.getSelection();
var ba=[];
var bb;

for(var i=0,l=Y.length;i<l;i++){bb=Y[i].getValue();
if(bb==null){bb=Y[i].getLabel();
}ba.push(bb);
}return ba.join(n);
},setValue:function(U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
var X=[U];

if(this.getSelectionMode()===A){X=U.split(n);
}var W=[];
var V;

for(var i=0,l=X.length;i<l;i++){V=this.findItem(X[i]);

if(V){W.push(V);
}}this.setSelection(W);
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(P,Q){var R=P===q;
var S=R?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__jH;
content.setLayout(S);
content.setAllowGrowX(!R);
content.setAllowGrowY(R);
this._applySpacing(this.getSpacing());
},_applySpacing:function(N,O){this.__jH.getLayout().setSpacing(N);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==t&&!e.isAltPressed()){var T=this.getSelection();

for(var i=0;i<T.length;i++){T[i].fireEvent(h);
}return true;
}return false;
},_onChangeSelection:function(){if(this.hasListener(s)){this.fireDataEvent(s,this.getValue());
}},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var bf=this.getSelectionMode();

if(!(bf===x||bf===j)){return;
}if(((new Date).valueOf()-this.__jJ)>1000){this.__jI=o;
}this.__jI+=e.getChar();
var bg=this.findItemByLabelFuzzy(this.__jI);
if(bg){this.setSelection([bg]);
}this.__jJ=(new Date).valueOf();
},findItemByLabelFuzzy:function(a){a=a.toLowerCase();
var b=this.getChildren();
for(var i=0,l=b.length;i<l;i++){var c=b[i].getLabel();
if(c&&c.toLowerCase().indexOf(a)==0){return b[i];
}}return null;
},findItem:function(bc){bc=bc.toLowerCase();
var bd=this.getChildren();
var be;
for(var i=0,l=bd.length;i<l;i++){be=bd[i];

if((be.getLabel()!=null)&&(be.getLabel().toLowerCase()==bc)){return be;
}}return null;
},addListener:function(d,f,self,g){if(d==s){qx.log.Logger.deprecatedEventWarning(arguments.callee,s,H);
}return arguments.callee.base.call(this,d,f,self,g);
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var f="The value is deprecated. Please use model instead.",e="listitem",d="qx.ui.form.ListItem",c="qx.event.type.Event",b="changeValue",a="qx.event.type.Data";
qx.Class.define(d,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(g,h,i){arguments.callee.base.call(this,g,h);

if(i!=null){this.setValue(i);
}},events:{"action":c,"changeValue":a},properties:{appearance:{refine:true,init:e}},members:{getFormValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
var j=this.getValue();

if(j==null){j=this.getLabel();
}return j;
},__kc:null,setValue:function(k){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
var l=this.__kc;
this.__kc=k;
this.fireDataEvent(b,k,l);
},getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.__kc;
},resetValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
this.setValue(null);
}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var x="current-preview",w="execute",v="selected-preview",u="Number",t="preview-pane",s="selector-button",r="colorselector-cancelbutton",q="auto-button",p="colorselector-okbutton",o="__cp",bl="mousedown",bk="teal",bj="__cr",bi="maroon",bh="qx.ui.control.ColorPopup",bg="#666",bf="changeValue",be="#333",bd="#000",bc="yellow",E="changeGreen",F="colorpopup",C="_applyValue",D="blue",A="changeRed",B="field#",y="__cq",z="#CCC",H="Color Selector",I="changeVisibility",P="recent",N="changeBlue",T="mouseover",R="_tables",X="Cancel",V="#FFF",K="right",bb="Open ColorSelector",ba="mouseout",Y="#999",J="Automatic",L="Basic Colors",M="Preview (Old/New)",O="visible",Q="Recent Colors",S="OK",U="field",W="green",G="red";
qx.Class.define(bh,{extend:qx.ui.popup.Popup,implement:[qx.ui.form.IColorForm],construct:function(){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.VBox(5));
this._createChildControl(q);
this._createBoxes();
this._createChildControl(t);
this._createChildControl(s);
this.addListener(I,this._onChangeVisibility,this);
},properties:{appearance:{refine:true,init:F},value:{nullable:true,apply:C,event:bf},red:{check:u,init:null,nullable:true,event:A},green:{check:u,init:null,nullable:true,event:E},blue:{check:u,init:null,nullable:true,event:N}},members:{__co:1e5,__cp:null,__cq:null,__cr:null,__cs:P,__ct:12,_createChildControlImpl:function(m){var n;

switch(m){case U:n=new qx.ui.core.Widget;
n.addListener(bl,this._onFieldMouseDown,this);
n.addListener(T,this._onFieldMouseOver,this);
n.addListener(ba,this._onFieldMouseOut,this);
break;
case q:n=new qx.ui.form.Button(this.tr(J));
n.setAllowStretchX(true);
n.addListener(w,this._onAutomaticBtnExecute,this);
this.add(n);
break;
case s:n=new qx.ui.form.Button(this.tr(bb));
n.addListener(w,this._onSelectorButtonExecute,this);
this.add(n);
break;
case t:n=new qx.ui.groupbox.GroupBox(this.tr(M));
n.setLayout(new qx.ui.layout.HBox);
n.add(this._createChildControl(v,true),{flex:1});
n.add(this._createChildControl(x,true),{flex:1});
this.add(n);
break;
case v:n=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case x:n=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case p:n=new qx.ui.form.Button(this.tr(S));
n.addListener(w,this._onColorSelectorOk,this);
break;
case r:n=new qx.ui.form.Button(this.tr(X));
n.addListener(w,this._onColorSelectorCancel,this);
break;
}return n||arguments.callee.base.call(this,m);
},_createBoxes:function(){this.__cp={};
var bn=this._tables;
var bq,bm,bo;
var j=0;

for(var bp in bn){bq=bn[bp];
bm=new qx.ui.groupbox.GroupBox(bq.label);
bm.setLayout(new qx.ui.layout.HBox);
this.__cp[bp]=bm;
this.add(bm);

for(var i=0;i<this.__ct;i++){bo=this.getChildControl(B+(j++));
bo.setBackgroundColor(bq.values[i]||null);
bm.add(bo);
}}},_createColorSelector:function(){if(this.__cr){return;
}var bA=new qx.ui.window.Window(this.tr(H));
this.__cq=bA;
bA.setLayout(new qx.ui.layout.VBox(16));
bA.setResizable(false);
bA.moveTo(20,20);
this.__cr=new qx.ui.control.ColorSelector;
bA.add(this.__cr);
var bB=new qx.ui.container.Composite(new qx.ui.layout.HBox(8,K));
bA.add(bB);
var bD=this._createChildControl(r);
var bC=this._createChildControl(p);
bB.add(bD);
bB.add(bC);
},_applyValue:function(bE,bF){if(bE===null){this.setRed(null);
this.setGreen(null);
this.setBlue(null);
}else{var bG=qx.util.ColorUtil.stringToRgb(bE);
this.setRed(bG[0]);
this.setGreen(bG[1]);
this.setBlue(bG[2]);
}this.getChildControl(v).setBackgroundColor(bE);
this._rotatePreviousColors();
},_rotatePreviousColors:function(){if(!this._tables){return;
}var bt=this._tables[this.__cs].values;
var bu=this.__cp[this.__cs];

if(!bt){return;
}var bv=this.getValue();

if(!bv){return;
}var bs=bt.indexOf(bv);

if(bs!=-1){qx.lang.Array.removeAt(bt,bs);
}else if(bt.length==this.__ct){bt.shift();
}bt.push(bv);
var br=bu.getChildren();

for(var i=0;i<br.length;i++){br[i].setBackgroundColor(bt[i]||null);
}},_onFieldMouseDown:function(e){var b=this.getChildControl(x).getBackgroundColor();
this.setValue(b);

if(b){this.hide();
}},_onFieldMouseOver:function(e){this.getChildControl(x).setBackgroundColor(e.getTarget().getBackgroundColor());
},_onFieldMouseOut:function(e){var bz=this.getRed();
var by=this.getGreen();
var bw=this.getBlue();
var bx=null;

if(bz!==null||by!==null||bw!==null){var bx=qx.util.ColorUtil.rgbToRgbString([bz,by,bw]);
}this.getChildControl(x).setBackgroundColor(bx);
},_onAutomaticBtnExecute:function(e){this.setValue(null);
this.hide();
},_onSelectorButtonExecute:function(e){this._createColorSelector();
this.exclude();
var l=this.getRed();
var k=this.getGreen();
var h=this.getBlue();

if(l===null||k===null||h===null){l=255;
k=255;
h=255;
}this.__cr.setRed(l);
this.__cr.setGreen(k);
this.__cr.setBlue(h);
this.__cq.open();
},_onColorSelectorOk:function(e){var a=this.__cr;
this.setValue(qx.util.ColorUtil.rgbToRgbString([a.getRed(),a.getGreen(),a.getBlue()]));
this.__cq.close();
},_onColorSelectorCancel:function(e){this.__cq.close();
},_onChangeVisibility:function(e){if(this.getVisibility()==O){var g=this.getRed();
var f=this.getGreen();
var c=this.getBlue();
var d=null;

if(g!==null||f!==null||c!==null){var d=qx.util.ColorUtil.rgbToRgbString([g,f,c]);
}this.getChildControl(v).setBackgroundColor(d);
this.getChildControl(x).setBackgroundColor(d);
}},_tables:{core:{label:L,values:[bd,be,bg,Y,z,V,G,W,D,bc,bk,bi]},recent:{label:Q,values:[]}}},destruct:function(){this._disposeObjects(y,bj);
this._disposeFields(R,o);
}});
})();
(function(){var i="legend",h="frame",g="middle",f="top",d="resize",c="qx.ui.groupbox.GroupBox",b="groupbox",a="_applyLegendPosition";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(m,n){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(h);
this._createChildControl(i);
if(m!=null){this.setLegend(m);
}
if(n!=null){this.setIcon(n);
}},properties:{appearance:{refine:true,init:b},legendPosition:{check:[f,g],init:g,apply:a,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(q){var r;

switch(q){case h:r=new qx.ui.container.Composite();
this._add(r,{left:0,top:6,right:0,bottom:0});
break;
case i:r=new qx.ui.basic.Atom();
r.addListener(d,this._repositionFrame,this);
this._add(r);
break;
}return r||arguments.callee.base.call(this,q);
},_getContentPaddingTarget:function(){return this.getChildControl(h);
},_applyLegendPosition:function(e){if(this.getChildControl(i).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var k=this.getChildControl(i);
var j=this.getChildControl(h);
var l=k.getBounds().height;
if(this.getLegendPosition()==g){j.setLayoutProperties({"top":Math.round(l/2)});
}else if(this.getLegendPosition()==f){j.setLayoutProperties({"top":l});
}},getChildrenContainer:function(){return this.getChildControl(h);
},setLegend:function(o){var p=this.getChildControl(i);

if(o!==null){p.setLabel(o);
p.show();
}else{p.exclude();
}},getLegend:function(){return this.getChildControl(i).getLabel();
},setIcon:function(s){this.getChildControl(i).setIcon(s);
},getIcon:function(){this.getChildControl(i).getIcon();
}}});
})();
(function(){var j="qx.ui.layout.Basic";
qx.Class.define(j,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(k,m){var q=this._getLayoutChildren();
var n,p,o,r,top;
for(var i=0,l=q.length;i<l;i++){n=q[i];
p=n.getSizeHint();
o=n.getLayoutProperties();
r=(o.left||0)+n.getMarginLeft();
top=(o.top||0)+n.getMarginTop();
n.renderLayout(r,top,p.width,p.height);
}},_computeSizeHint:function(){var f=this._getLayoutChildren();
var c,h,d;
var g=0,e=0;
var a,b;
for(var i=0,l=f.length;i<l;i++){c=f[i];
h=c.getSizeHint();
d=c.getLayoutProperties();
a=h.width+(d.left||0)+c.getMarginLeft()+c.getMarginRight();
b=h.height+(d.top||0)+c.getMarginTop()+c.getMarginBottom();

if(a>g){g=a;
}
if(b>e){e=b;
}}return {width:g,height:e};
}}});
})();
(function(){var cw="brightness-handle",cv="hue-saturation-handle",cu="hsbSpinner",ct="rgbSpinner",cs="changeValue",cr="hexField",cq="hueSaturationField",cp="brightness-field",co="mousedown",cn="rgb-spinner-red",cc="preview-content-old",cb="rgb-spinner-green",ca="brightnessField",bY="hue-saturation-field",bX="hsb-spinner-brightness",bW="preview-content-new",bV="hue-saturation-pane",bU="rgb-spinner-blue",bT="hsb-spinner-hue",bS="hsb-spinner-saturation",cD="hex-field",cE="brightnessModifier",cB="blueModifier",cC="saturationModifier",cz="middle",cA="mouseup",cx="Number",cy="#",cF="redModifier",cG="greenModifier",cg="hueModifier",cf="Integer",ci="brightness-pane",ch="control-pane",ck="preset-grid",cj="preset-field-set",cm="qx.event.type.Event",cl="mousemove",ce="hex-field-composite",cd="rgb-spinner-composite",bd="hsb-spinner-composite",be="control-bar",bf="visual-pane",bg="input-field-set",bh="preview-field-set",bi="black",bj="_applyGreen",bk="#333",bl="aqua",bm="colorbucket",cK="qx.event.type.Data",cJ="Hex",cI="#BBB",cH="decoration/colorselector/brightness-handle.gif",cO="Visual",cN="_applySaturation",cM="Preview (Old/New)",cL="FFFFFF",cQ="decoration/colorselector/brightness-field.png",cP="white",bC="orange",bD="_applyRed",bA="_applyBlue",bB="maroon",bG="Presets",bH="_applyBrightness",bE="#999",bF="purple",by="red",bz="mousewheel",bu="blue",bt="_applyHue",bw="decoration/colorselector/huesaturation-handle.gif",bv="colorselector",bq="qx.ui.control.ColorSelector",bp="lime",bs="#EEE",br="olive",bo="RGB",bn="decoration/colorselector/huesaturation-field.jpg",bM="navy",bN="teal",bO="green",bP="yellow",bI="#666",bJ="fuchsia",bK="Details",bL="",bQ="colorbucket#",bR="appear",bx="HSB";
qx.Class.define(bq,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IColorForm],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(be);
this.addListener(bR,this._onAppear,this);
},events:{"dialogok":cm,"dialogcancel":cm,"changeValue":cK},properties:{appearance:{refine:true,init:bv},red:{check:cf,init:255,apply:bD},green:{check:cf,init:255,apply:bj},blue:{check:cf,init:255,apply:bA},hue:{check:cx,init:0,apply:bt},saturation:{check:cx,init:0,apply:cN},brightness:{check:cx,init:100,apply:bH}},members:{__cu:null,__cv:[bB,by,bC,bP,br,bF,bJ,bp,bO,bM,bu,bl,bN,bi,bk,bI,bE,cI,bs,cP],__cw:bL,__cx:0,__cy:0,__cz:0,__cA:true,__cB:false,_createChildControlImpl:function(p){var q;

switch(p){case be:q=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
q.add(this.getChildControl(ch));
q.add(this.getChildControl(bf));
this._add(q);
break;
case bf:q=new qx.ui.groupbox.GroupBox(this.tr(cO));
q.setLayout(new qx.ui.layout.HBox(10));
q.add(this.getChildControl(bV));
q.add(this.getChildControl(ci));
break;
case ch:q=new qx.ui.container.Composite(new qx.ui.layout.VBox(12));
q.add(this.getChildControl(cj));
q.add(this.getChildControl(bg));
q.add(this.getChildControl(bh),{flex:1});
break;
case bV:q=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
q.setAllowGrowY(false);
q.addListener(cA,this._onHueSaturationPaneMouseWheel,this);
q.add(this.getChildControl(bY));
q.add(this.getChildControl(cv),{left:0,top:256});
break;
case bY:q=new qx.ui.basic.Image(bn);
q.addListener(co,this._onHueSaturationFieldMouseDown,this);
break;
case cv:q=new qx.ui.basic.Image(bw);
q.addListener(co,this._onHueSaturationFieldMouseDown,this);
q.addListener(cA,this._onHueSaturationHandleMouseUp,this);
q.addListener(cl,this._onHueSaturationHandleMouseMove,this);
break;
case ci:q=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
q.setAllowGrowY(false);
q.addListener(bz,this._onBrightnessPaneMouseWheel,this);
q.add(this.getChildControl(cp));
q.add(this.getChildControl(cw));
break;
case cp:q=new qx.ui.basic.Image(cQ);
q.addListener(co,this._onBrightnessFieldMouseDown,this);
break;
case cw:q=new qx.ui.basic.Image(cH);
q.addListener(co,this._onBrightnessHandleMouseDown,this);
q.addListener(cA,this._onBrightnessHandleMouseUp,this);
q.addListener(cl,this._onBrightnessHandleMouseMove,this);
break;
case cj:q=new qx.ui.groupbox.GroupBox(this.tr(bG));
q.setLayout(new qx.ui.layout.Grow());
q.add(this.getChildControl(ck));
break;
case bm:q=new qx.ui.core.Widget();
q.addListener(co,this._onColorFieldClick,this);
break;
case ck:v=new qx.ui.layout.Grid(3,3);
q=new qx.ui.container.Composite(v);
var w;
var u;

for(var i=0;i<2;i++){for(var j=0;j<10;j++){u=i*10+j;
w=this.getChildControl(bQ+u);
w.setBackgroundColor(this.__cv[u]);
q.add(w,{column:j,row:i});
}}break;
case bg:q=new qx.ui.groupbox.GroupBox(this.tr(bK));
var v=new qx.ui.layout.VBox();
v.setSpacing(10);
q.setLayout(v);
q.add(this.getChildControl(ce));
q.add(this.getChildControl(cd));
q.add(this.getChildControl(bd));
break;
case bh:q=new qx.ui.groupbox.GroupBox(this.tr(cM));
var v=new qx.ui.layout.HBox(10);
q.setLayout(v);
q.add(this.getChildControl(cc),{flex:1});
q.add(this.getChildControl(bW),{flex:1});
break;
case ce:var t=new qx.ui.layout.HBox(4);
t.setAlignY(cz);
q=new qx.ui.container.Composite(t);
var y=new qx.ui.basic.Label(this.tr(cJ));
q.add(y);
var x=new qx.ui.basic.Label(cy);
q.add(x);
q.add(this.getChildControl(cD));
break;
case cD:q=new qx.ui.form.TextField(cL);
q.setMaxLength(6);
q.setFilter(/[0-9A-Fa-f]/);
q.setWidth(55);
q.addListener(cs,this._onHexFieldChange,this);
break;
case cd:var t=new qx.ui.layout.HBox(4);
t.setAlignY(cz);
q=new qx.ui.container.Composite(t);
var r=new qx.ui.basic.Label(this.tr(bo));
r.setWidth(25);
q.add(r);
q.add(this.getChildControl(cn));
q.add(this.getChildControl(cb));
q.add(this.getChildControl(bU));
break;
case cn:q=new qx.ui.form.Spinner(0,255,255);
q.setWidth(50);
q.addListener(cs,this._setRedFromSpinner,this);
break;
case cb:q=new qx.ui.form.Spinner(0,255,255);
q.setWidth(50);
q.addListener(cs,this._setGreenFromSpinner,this);
break;
case bU:q=new qx.ui.form.Spinner(0,255,255);
q.setWidth(50);
q.addListener(cs,this._setBlueFromSpinner,this);
break;
case bd:var t=new qx.ui.layout.HBox(4);
t.setAlignY(cz);
q=new qx.ui.container.Composite(t);
var s=new qx.ui.basic.Label(this.tr(bx));
s.setWidth(25);
q.add(s);
q.add(this.getChildControl(bT));
q.add(this.getChildControl(bS));
q.add(this.getChildControl(bX));
break;
case bT:q=new qx.ui.form.Spinner(0,0,360);
q.setWidth(50);
q.addListener(cs,this._setHueFromSpinner,this);
break;
case bS:q=new qx.ui.form.Spinner(0,0,100);
q.setWidth(50);
q.addListener(cs,this._setSaturationFromSpinner,this);
break;
case bX:q=new qx.ui.form.Spinner(0,100,100);
q.setWidth(50);
q.addListener(cs,this._setBrightnessFromSpinner,this);
break;
case cc:q=new qx.ui.core.Widget();
break;
case bW:q=new qx.ui.core.Widget();
break;
}return q||arguments.callee.base.call(this,p);
},setValue:function(c){var d;

if(c==null){this.__cA=true;
d=[255,255,255];
}else{d=qx.util.ColorUtil.stringToRgb(c);
this.__cA=false;
}this.__cB=true;
this.setRed(d[0]);
this.setGreen(d[1]);
this.__cB=false;
this.setBlue(d[2]);
},getValue:function(){return this.__cA?null:cy+qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
},resetValue:function(){this.__cA=true;
this.__cB=true;
this.setRed(255);
this.setGreen(255);
this.__cB=false;
this.setBlue(255);
},__cC:function(){if(!this.__cB){this.__cA=false;
this.fireDataEvent(cs,this.getValue());
}},_applyRed:function(Q,R){if(this.__cu===null){this.__cu=cF;
}
if(this.__cu!==ct){this.getChildControl(cn).setValue(Q);
}
if(this.__cu!==cr){this._setHexFromRgb();
}
switch(this.__cu){case ct:case cr:case cF:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__cC();

if(this.__cu===cF){this.__cu=null;
}},_applyGreen:function(Y,ba){if(this.__cu===null){this.__cu=cG;
}
if(this.__cu!==ct){this.getChildControl(cb).setValue(Y);
}
if(this.__cu!==cr){this._setHexFromRgb();
}
switch(this.__cu){case ct:case cr:case cG:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__cC();

if(this.__cu===cG){this.__cu=null;
}},_applyBlue:function(a,b){if(this.__cu===null){this.__cu=cB;
}
if(this.__cu!==ct){this.getChildControl(bU).setValue(a);
}
if(this.__cu!==cr){this._setHexFromRgb();
}
switch(this.__cu){case ct:case cr:case cB:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__cC();

if(this.__cu===cB){this.__cu=null;
}},_applyHue:function(S,T){if(this.__cu===null){this.__cu=cg;
}
if(this.__cu!==cu){this.getChildControl(bT).setValue(S);
}
if(this.__cu!==cq){if(this.getChildControl(cv).getBounds()){this.getChildControl(cv).setDomLeft(Math.round(S/1.40625)+this.getChildControl(bV).getPaddingLeft());
}else{this.getChildControl(cv).setLayoutProperties({left:Math.round(S/1.40625)});
}}
switch(this.__cu){case cu:case cq:case cg:this._setRgbFromHue();
}this._setBrightnessGradiant();

if(this.__cu===cg){this.__cu=null;
}},_applySaturation:function(H,I){if(this.__cu===null){this.__cu=cC;
}
if(this.__cu!==cu){this.getChildControl(bS).setValue(H);
}
if(this.__cu!==cq){this._setBrightnessGradiant();

if(this.getChildControl(cv).getBounds()){this.getChildControl(cv).setDomTop(256-Math.round(H*2.56)+this.getChildControl(bV).getPaddingTop());
}else{this.getChildControl(cv).setLayoutProperties({top:256-Math.round(H*2.56)});
}}
switch(this.__cu){case cu:case cq:case cC:this._setRgbFromHue();
}
if(this.__cu===cC){this.__cu=null;
}},_applyBrightness:function(L,M){if(this.__cu===null){this.__cu=cE;
}
if(this.__cu!==cu){this.getChildControl(bX).setValue(L);
}
if(this.__cu!==ca){var N=256-Math.round(L*2.56);

if(this.getChildControl(cw).getBounds()){this.getChildControl(cw).setDomTop(N+this.getChildControl(ci).getPaddingTop());
}else{this.getChildControl(cw).setLayoutProperties({top:N});
}}
switch(this.__cu){case cu:case ca:case cE:this._setRgbFromHue();
}
if(this.__cu===cE){this.__cu=null;
}},_onBrightnessHandleMouseDown:function(e){this.getChildControl(cw).capture();
this.__cw=cw;
var B=this.getChildControl(cp).getContainerLocation();
var A=this.getChildControl(cw).getContainerLocation();
var z=this.getChildControl(cp).getBounds();
this.__cx=B.top+(e.getDocumentTop()-A.top)-z.top;
e.stopPropagation();
},_onBrightnessHandleMouseUp:function(e){this.getChildControl(cw).releaseCapture();
this.__cw=null;
},_onBrightnessHandleMouseMove:function(e){if(this.__cw===cw){this._setBrightnessOnFieldEvent(e);
}},_onBrightnessFieldMouseDown:function(e){var location=this.getChildControl(cp).getContainerLocation();
var G=this.getChildControl(cw).getBounds();
this.__cx=location.top+(G.height/2);
this._setBrightnessOnFieldEvent(e);
this.getChildControl(cw).capture();
this.__cw=cw;
},_onBrightnessPaneMouseWheel:function(e){this.setBrightness(qx.lang.Number.limit(this.getBrightness()+e.getWheelDelta(),0,100));
},_setBrightnessOnFieldEvent:function(e){var o=qx.lang.Number.limit(e.getDocumentTop()-this.__cx,0,256);
this.__cu=ca;

if(this.getChildControl(cw).getBounds()){this.getChildControl(cw).setDomTop(o);
}else{this.getChildControl(cw).setLayoutProperties({top:o});
}this.setBrightness(100-Math.round(o/2.56));
this.__cu=null;
},_onHueSaturationHandleMouseUp:function(e){this.getChildControl(cv).releaseCapture();
this.__cw=null;
},_onHueSaturationHandleMouseMove:function(e){if(this.__cw===cv){this._setHueSaturationOnFieldEvent(e);
}},_onHueSaturationFieldMouseDown:function(e){var location=this.getChildControl(bY).getContainerLocation();
var J=this.getChildControl(cv).getBounds();
var K=this.getChildControl(bY).getBounds();
this.__cy=location.top+(J.height/2)-K.top;
this.__cz=location.left+(J.width/2)-K.left;
this._setHueSaturationOnFieldEvent(e);
this.getChildControl(cv).capture();
this.__cw=cv;
},_onHueSaturationPaneMouseWheel:function(e){this.setSaturation(qx.lang.Number.limit(this.getSaturation()+e.getWheelDelta(),0,100));
},_setHueSaturationOnFieldEvent:function(e){var h=qx.lang.Number.limit(e.getDocumentTop()-this.__cy,0,256);
var g=qx.lang.Number.limit(e.getDocumentLeft()-this.__cz,0,256);
this.getChildControl(cv).setDomPosition(g,h);
this.__cu=cq;
this.setSaturation(100-Math.round(h/2.56));
this.setHue(Math.round(g*1.40625));
this.__cu=null;
},_setRedFromSpinner:function(){if(this.__cu!==null){return;
}this.__cu=ct;
this.setRed(this.getChildControl(cn).getValue());
this.__cu=null;
},_setGreenFromSpinner:function(){if(this.__cu!==null){return;
}this.__cu=ct;
this.setGreen(this.getChildControl(cb).getValue());
this.__cu=null;
},_setBlueFromSpinner:function(){if(this.__cu!==null){return;
}this.__cu=ct;
this.setBlue(this.getChildControl(bU).getValue());
this.__cu=null;
},_setHueFromSpinner:function(){if(this.__cu!==null){return;
}this.__cu=cu;
this.setHue(this.getChildControl(bT).getValue());
this.__cu=null;
},_setSaturationFromSpinner:function(){if(this.__cu!==null){return;
}this.__cu=cu;
this.setSaturation(this.getChildControl(bS).getValue());
this.__cu=null;
},_setBrightnessFromSpinner:function(){if(this.__cu!==null){return;
}this.__cu=cu;
this.setBrightness(this.getChildControl(bX).getValue());
this.__cu=null;
},_onHexFieldChange:function(e){if(this.__cu!==null){return;
}
try{var bc=this.getChildControl(cD);
var bb=qx.util.ColorUtil.hexStringToRgb(cy+bc.getValue());
}catch(n){return;
}this.__cu=cr;
this.setRed(bb[0]);
this.setGreen(bb[1]);
this.setBlue(bb[2]);
this.__cu=null;
},_setHexFromRgb:function(){var l=qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(cD).setValue(l);
},_onColorFieldClick:function(e){var O=e.getTarget().getBackgroundColor();

if(!O){return this.error("Missing backgroundColor value for field: "+e.getTarget());
}var P=qx.util.ColorUtil.stringToRgb(O);
this.setRed(P[0]);
this.setGreen(P[1]);
this.setBlue(P[2]);
},_setHueFromRgb:function(){switch(this.__cu){case cu:case cq:case ca:break;
default:var C=qx.util.ColorUtil.rgbToHsb([this.getRed(),this.getGreen(),this.getBlue()]);
this.setHue(C[0]);
this.setSaturation(C[1]);
this.setBrightness(C[2]);
}},_setRgbFromHue:function(){switch(this.__cu){case ct:case cr:break;
default:var m=qx.util.ColorUtil.hsbToRgb([this.getHue(),this.getSaturation(),this.getBrightness()]);
this.setRed(m.red);
this.setGreen(m.green);
this.setBlue(m.blue);
}},_setPreviewFromRgb:function(){var k=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bW).setBackgroundColor(k);
},setPreviousColor:function(U,V,W){var X=qx.util.ColorUtil.rgbToRgbString([U,V,W]);
this.getChildControl(cc).setBackgroundColor(X);
this.setRed(U);
this.setGreen(V);
this.setBlue(W);
},_setBrightnessGradiant:function(){var D=qx.util.ColorUtil;
var E=D.hsbToRgb([this.getHue(),this.getSaturation(),255]);
var F=D.rgbToRgbString([E.red,E.green,E.blue]);
this.getChildControl(cp).setBackgroundColor(F);
},_onAppear:function(e){var f=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(cc).setBackgroundColor(f);
this.getChildControl(bW).setBackgroundColor(f);
}}});
})();
(function(){var P="textfield",O="",N="downbutton",M="upbutton",L="Please use the maximum property instead.",K="Number",J="Please use the minimum property instead.",I="inner",H="PageUp",G="Boolean",bp="changeValue",bo="Down",bn="Up",bm="execute",bl="PageDown",bk="changeLocale",bj="qx.dynlocale",bi="on",bh="_applyEditable",bg="_applyWrap",W="keydown",X="\-]",U="mousewheel",V="_applyValue",S="number",T="_applyMinimum",Q="qx.util.format.NumberFormat",R="[0-9",Y="keyup",ba="spinner",bc="this._checkValue(value)",bb="_applyMaximum",be="changeNumberFormat",bd="_applyNumberFormat",bf="qx.ui.form.Spinner";
qx.Class.define(bf,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IFormElement,qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MFormElement,qx.ui.form.MForm],construct:function(bq,br,bs){arguments.callee.base.call(this);
var bt=new qx.ui.layout.Grid();
bt.setColumnFlex(0,1);
bt.setRowFlex(0,1);
bt.setRowFlex(1,1);
this._setLayout(bt);
this.addListener(W,this._onKeyDown,this);
this.addListener(Y,this._onKeyUp,this);
this.addListener(U,this._onMouseWheel,this);

if(qx.core.Variant.isSet(bj,bi)){qx.locale.Manager.getInstance().addListener(bk,this._onChangeLocale,this);
}this._createChildControl(P);
this._createChildControl(M);
this._createChildControl(N);
if(bq!=null){this.setMinimum(bq);
}
if(bs!=null){this.setMaximum(bs);
}
if(br!==undefined){this.setValue(br);
}else{this.initValue();
}},properties:{appearance:{refine:true,init:ba},focusable:{refine:true,init:true},singleStep:{check:K,init:1},pageStep:{check:K,init:10},minimum:{check:K,apply:T,init:0},value:{check:bc,nullable:true,apply:V,init:0,event:bp},maximum:{check:K,apply:bb,init:100},wrap:{check:G,init:false,apply:bg},editable:{check:G,init:true,apply:bh},numberFormat:{check:Q,apply:bd,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__cD:null,__cE:false,__cF:false,_createChildControlImpl:function(E){var F;

switch(E){case P:F=new qx.ui.form.TextField();
F.setFilter(this._getFilterRegExp());
F.addState(I);
F.setWidth(40);
F.setFocusable(false);
F.addListener(bp,this._onTextChange,this);
this._add(F,{column:0,row:0,rowSpan:2});
break;
case M:F=new qx.ui.form.RepeatButton();
F.addState(I);
F.setFocusable(false);
F.addListener(bm,this._countUp,this);
this._add(F,{column:1,row:0});
break;
case N:F=new qx.ui.form.RepeatButton();
F.addState(I);
F.setFocusable(false);
F.addListener(bm,this._countDown,this);
this._add(F,{column:1,row:1});
break;
}return F||arguments.callee.base.call(this,E);
},_getFilterRegExp:function(){var o=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());
var n=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());
var m=O;
var k=O;

if(this.getNumberFormat()!==null){m=this.getNumberFormat().getPrefix()||O;
k=this.getNumberFormat().getPostfix()||O;
}var l=new RegExp(R+qx.lang.String.escapeRegexpChars(o)+qx.lang.String.escapeRegexpChars(n)+qx.lang.String.escapeRegexpChars(m)+qx.lang.String.escapeRegexpChars(k)+X);
return l;
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var u=this.getChildControl(P);
u.getFocusElement().focus();
u.selectAllText();
},_applyMinimum:function(i,j){if(this.getMaximum()<i){this.setMaximum(i);
}
if(this.getValue()<i){this.setValue(i);
}else{this._updateButtons();
}},_applyMaximum:function(w,x){if(this.getMinimum()>w){this.setMin(w);
}
if(this.getValue()>w){this.setValue(w);
}else{this._updateButtons();
}},_applyEnabled:function(c,d){arguments.callee.base.call(this,c,d);
this._updateButtons();
},_checkValue:function(bu){return typeof bu===S&&bu>=this.getMinimum()&&bu<=this.getMaximum();
},_applyValue:function(y,z){var A=this.getChildControl(P);
this._updateButtons();
this.__cD=y;
if(y!==null){if(this.getNumberFormat()){A.setValue(this.getNumberFormat().format(y));
}else{A.setValue(y+O);
}}else{A.setValue(O);
}},_applyEditable:function(bD,bE){var bF=this.getChildControl(P);

if(bF){bF.setReadOnly(!bD);
}},_applyWrap:function(s,t){this._updateButtons();
},_applyNumberFormat:function(B,C){var D=this.getChildControl(P);
D.setFilter(this._getFilterRegExp());
this.getNumberFormat().addListener(be,this._onChangeNumberFormat,this);
this._applyValue(this.__cD,undefined);
},_getContentPaddingTarget:function(){return this.getChildControl(P);
},_updateButtons:function(){var g=this.getChildControl(M);
var f=this.getChildControl(N);
var h=this.getValue();

if(!this.getEnabled()){g.setEnabled(false);
f.setEnabled(false);
}else{if(this.getWrap()){g.setEnabled(true);
f.setEnabled(true);
}else{if(h!==null&&h<this.getMaximum()){g.setEnabled(true);
}else{g.setEnabled(false);
}if(h!==null&&h>this.getMinimum()){f.setEnabled(true);
}else{f.setEnabled(false);
}}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case H:this.__cE=true;
case bn:this.getChildControl(M).press();
break;
case bl:this.__cF=true;
case bo:this.getChildControl(N).press();
break;
default:return ;
}e.stopPropagation();
e.preventDefault();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case H:this.getChildControl(M).release();
this.__cE=false;
break;
case bn:this.getChildControl(M).release();
break;
case bl:this.getChildControl(N).release();
this.__cF=false;
break;
case bo:this.getChildControl(N).release();
break;
}},_onMouseWheel:function(e){if(e.getWheelDelta()>0){this._countDown();
}else{this._countUp();
}e.stopPropagation();
},_onTextChange:function(e){var bA=this.getChildControl(P);
var bB;
if(this.getNumberFormat()){try{bB=this.getNumberFormat().parse(bA.getValue());
}catch(bC){}}if(bB===undefined){bB=parseFloat(bA.getValue(),10);
}if(!isNaN(bB)){if(bB>this.getMaximum()){bA.setValue(this.getMaximum()+O);
return;
}else if(bB<this.getMinimum()){bA.setValue(this.getMinimum()+O);
return;
}this.setValue(bB);
}else{this._applyValue(this.__cD,undefined);
}},_onChangeLocale:function(bw){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());
var bx=this.getChildControl(P);
bx.setFilter(this._getFilterRegExp());
bx.setValue(this.getNumberFormat().format(this.getValue()));
}},_onChangeNumberFormat:function(q){var r=this.getChildControl(P);
r.setFilter(this._getFilterRegExp());
r.setValue(this.getNumberFormat().format(this.getValue()));
},_countUp:function(){if(this.__cE){var bz=this.getValue()+this.getPageStep();
}else{var bz=this.getValue()+this.getSingleStep();
}if(this.getWrap()){if(bz>this.getMaximum()){var by=this.getMaximum()-bz;
bz=this.getMinimum()+by;
}}this.gotoValue(bz);
},_countDown:function(){if(this.__cF){var b=this.getValue()-this.getPageStep();
}else{var b=this.getValue()-this.getSingleStep();
}if(this.getWrap()){if(b<this.getMinimum()){var a=this.getMinimum()+b;
b=this.getMaximum()-a;
}}this.gotoValue(b);
},gotoValue:function(p){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),p)));
},setMin:function(bv){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
this.setMinimum(bv);
},getMin:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
return this.getMinimum();
},resetMin:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
this.resetMinimum();
},initMin:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
this.initMinimum();
},setMax:function(v){qx.log.Logger.deprecatedMethodWarning(arguments.callee,L);
this.setMaximum(v);
},getMax:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,L);
return this.getMaximum();
},resetMax:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,L);
this.resetMaximum();
},initMaxi:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,L);
this.initMaximum();
}},destruct:function(){if(qx.core.Variant.isSet(bj,bi)){qx.locale.Manager.getInstance().removeListener(bk,this._onChangeLocale,this);
}}});
})();
(function(){var d="pane",c="qx.ui.container.Scroll",b="Please use getChildren instead.";
qx.Class.define(c,{extend:qx.ui.core.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){arguments.callee.base.call(this);

if(content){this.add(content);
}},members:{add:function(e){this.getChildControl(d).add(e);
},remove:function(a){this.getChildControl(d).remove(a);
},getChild:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.getChildControl(d).getChild();
},getChildren:function(){return this.getChildControl(d).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(d);
}}});
})();
(function(){var e="arrow",d="qx.ui.toolbar.MenuButton",c="Boolean",b="_applyShowArrow",a="toolbar-menubutton";
qx.Class.define(d,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:a},showArrow:{check:c,init:false,themeable:true,apply:b}},members:{_createChildControlImpl:function(f){var g;

switch(f){case e:g=new qx.ui.basic.Image();
g.setAnonymous(true);
this._addAt(g,10);
break;
}return g||arguments.callee.base.call(this,f);
},_applyShowArrow:function(h,i){if(h){this._showChildControl(e);
}else{this._excludeChildControl(e);
}}}});
})();
(function(){var s="Please use the value property instead.",r="changeChecked",q="checked",p="qx.ui.form.RadioGroup",o="menu-radiobutton",n="_applyValue",m="qx.ui.menu.RadioButton",l="Please use boolean values instead.",k="changeValue",j="Please use the changeValue event instead.",g="_applyGroup",i="function(value) {return qx.lang.Type.isString(value) || qx.lang.Type.isBoolean(value)}",h="qx.event.type.Data";
qx.Class.define(m,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MFormElement],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm],construct:function(t,u){arguments.callee.base.call(this);
if(t!=null){this.setLabel(t);
}
if(u!=null){this.setMenu(u);
}},events:{"changeChecked":h},properties:{appearance:{refine:true,init:o},value:{check:i,nullable:true,event:k,apply:n,init:false},group:{check:p,nullable:true,apply:g}},members:{_applyValue:function(w,x){if(qx.lang.Type.isString(w)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
return;
}w?this.addState(q):this.removeState(q);
this.fireDataEvent(r,w,x);
},_applyGroup:function(d,f){if(f){f.remove(this);
}
if(d){d.add(this);
}},_onMouseUp:function(e){if(e.isLeftPressed()){this.setValue(true);
}},_onKeyPress:function(e){this.setValue(true);
},setChecked:function(v){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
this.setValue(v);
},isChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return this.getValue();
},toggleChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
this.setValue(!this.getValue());
},getChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return this.getValue();
},resetChecked:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
this.resetValue();
},addListener:function(a,b,self,c){if(a==r){qx.log.Logger.deprecatedEventWarning(arguments.callee,r,j);
}return arguments.callee.base.call(this,a,b,self,c);
},toggleValue:function(){this.setValue(!this.getValue());
},isValue:function(){return this.getValue();
}}});
})();
(function(){var x="Console",w="",v="&",u="'",t="DOM",s='"',r="inspector.console.ConsoleWindow",q=">",p="?",n="&gt;",h="<",m="Clear",k="changeValue",g="changeSelection",f="&amp;",j="&#39;",i="&quot;",l="execute",d="&lt;";
qx.Class.define(r,{extend:inspector.components.AbstractWindow,construct:function(){arguments.callee.base.call(this,x);
this._clearButton=new qx.ui.toolbar.Button(m);
this._toolbar.add(this._clearButton);
this._clearButton.addListener(l,function(){this._stack.getSelection()[0].clear();
},this);
this._toolbar.add(new qx.ui.toolbar.Separator());
this._consoleButton=new qx.ui.toolbar.RadioButton(x);
this._toolbar.add(this._consoleButton);
this._domButton=new qx.ui.toolbar.RadioButton(t);
this._toolbar.add(this._domButton);
this._toolbar.addSpacer();
this._findField=new qx.ui.form.TextField();
this._findField.setLiveUpdate(true);
this._findField.setMarginRight(5);
this._toolbar.add(this._findField);
this._findField.addListener(k,function(e){this._stack.getSelection()[0].filter(e.getData());
},this);
this._stack=new qx.ui.container.Stack();
this.add(this._stack,{flex:1});
this._consoleView=new inspector.console.ConsoleView(this);
this._stack.add(this._consoleView,{flex:1});
this._domView=new inspector.console.DomView(this);
this._stack.add(this._domView,{flex:1});
var E=new qx.ui.form.RadioGroup(this._consoleButton,this._domButton);
E.addListener(g,function(e){this._findField.setValue(w);

if(E.getSelection()[0]==this._consoleButton){this._stack.setSelection([this._consoleView]);
}else if(E.getSelection()[0]==this._domButton){this._stack.setSelection([this._domView]);
}else{this._consoleButton.setValue(true);
}},this);
},members:{setInitSizeAndPosition:function(){var b=qx.bom.Viewport.getWidth()-300;
var c=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(0,2*c+30);
this.setWidth(b);
this.setHeight(c);
},escapeHtml:function(C){function D(z){switch(z){case h:return d;
case q:return n;
case v:return f;
case u:return j;
case s:return i;
}return p;
}return String(C).replace(/[<>&"']/g,D);
},inspectObjectByInternalId:function(a){var o=this._consoleView.getObjectById(a);
this.inspectObject(o);
},inspectObjectByDomSelecet:function(A,B){this._domView.setObjectByIndex(A,B);
this._findField.setValue(w);
},inspectObject:function(y){this._domView.setObject(y.object,y.name);
this._domButton.setValue(true);
},goToDefaultView:function(){this._consoleButton.setValue(true);
this._domView.clear();
}}});
})();
(function(){var q="change",p="Use 'getSelection' instead!",o="Use 'resetSelection' instead!",n="Boolean",m="qx.ui.container.Stack",k="_applyDynamic",j="Use 'setSelection' instead!",h="changeSelection",g="Use 'changeSelection' instead!",f="qx.event.type.Data";
qx.Class.define(m,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(h,this.__jD,this);
},events:{"change":f},properties:{dynamic:{check:n,init:false,apply:k}},members:{_applyDynamic:function(r){var t=this._getChildren();
var s=this.getSelection()[0];
var u;

for(var i=0,l=t.length;i<l;i++){u=t[i];

if(u!=s){if(r){t[i].exclude();
}else{t[i].hide();
}}}},setSelected:function(G){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
this.setSelection([G]);
},getSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
var w=this.getSelection()[0];

if(w){return w;
}else{return null;
}},resetSelected:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
this.resetSelection();
},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(L){return L.isEnabled();
},__jD:function(e){var A=e.getOldData()[0];
var B=e.getData()[0];

if(A){if(this.isDynamic()){A.exclude();
}else{A.hide();
}}
if(B){B.show();
}if(this.hasListener(q)){this.fireDataEvent(q,B,A);
}},addListener:function(x,y,self,z){if(x===q){qx.log.Logger.deprecatedEventWarning(arguments.callee,q,g);
}return arguments.callee.base.call(this,x,y,self,z);
},add:function(H){this._add(H);
var I=this.getSelection()[0];

if(!I){this.setSelection([H]);
}else if(I!==H){if(this.isDynamic()){H.exclude();
}else{H.hide();
}}},remove:function(J){this._remove(J);

if(this.getSelection()[0]===J){var K=this._getChildren()[0];

if(K){this.setSelection([K]);
}else{this.resetSelection();
}}},indexOf:function(v){return this._indexOf(v);
},getChildren:function(){return this._getChildren();
},previous:function(){var E=this.getSelection()[0];
var C=this._indexOf(E)-1;
var F=this._getChildren();

if(C<0){C=F.length-1;
}var D=F[C];
this.setSelection([D]);
},next:function(){var b=this.getSelection()[0];
var a=this._indexOf(b)+1;
var c=this._getChildren();
var d=c[a]||c[0];
this.setSelection([d]);
}}});
})();
(function(){var M="qx.client",L="",K=")",J="Tab",I="qx.core.Init.getApplication().inspectObjectByInternalId(",H="'>",G="consoleViewHtmlEmbed",F="Down",E="Up",D="error",cc="');",cb="warning",ca="Control",bY="info",bX="(",bW="mshtml",bV="webkit",bU="<span class='ins_console_link' onclick='",bT="<div class='ins_console_common'><div class='",bS="Escape",T="Enter",U="  try {",R="]</span> ",S="gecko",P="    return ex;",Q="  } catch (ex) {",N="changeValue",O="keydown",bc="Courier New",bd="Icon.png",bu="' class='ins_console_icon'>",bq="\"qx.core.Init.getApplication().setWidgetByHash('",bC="ins_console_info",bx="webkit|mshtml|gecko",bO="ins_console_warn",bI="return eval('",bk="&nbsp;",bR="<span class='ins_console_dom_link' onclick='",bQ="input",bP="<img src='",bi=">>>&nbsp;",bn="ins_console_text",bp="{",bs="middle",bv=" more",by="return eval.call(window, '",bE="<span class='ins_console_link' onclick=",bK="ins_console_return_primitive",V="inspector.console.ConsoleView",W="opera|webkit|mshtml",bm=" </span>",bB="</div></div>",bA="window.top.inspector.$$inspector = function()",bz="]",bG="appear",bF="opera",bw="[",bD="inspector/images/shell/",A="};",bJ="ins_console_error",X=", ",Y="keyup",br="ins_console_return_object",B="ins_console_return_array",C="</span>",bh="'>inspect Object</span>",ba=", ...",bb="keypress",bg="  }",bt="none",bM="', 'console');\"> ",bL=" [",bo=">>>",bN="ins_console_debug",bj=".",bH="$2",be="ins_console_return_qxobject",bf="scroll",bl="Space";
qx.Class.define(V,{extend:qx.ui.core.Widget,construct:function(console){arguments.callee.base.call(this);
this._console=console;
this._autoCompletePopup=new inspector.console.AutoCompletePopup(this);
this._history=[];
this._historyCounter=-1;
this._objectFolder=[];
this._objectFolderIndex=0;
this._filter=L;
this._setLayout(new qx.ui.layout.VBox());
this._content=new qx.ui.embed.Html(L);
this._content.setOverflowY(bf);
this.addListenerOnce(bG,function(){this._content.getContentElement().getDomElement().id=G;
},this);
this._add(this._content,{flex:1});
var l=new qx.ui.container.Composite();
l.setDecorator(bQ);
var m=new qx.ui.layout.HBox();
m.setAlignY(bs);
l.setLayout(m);
this._add(l);
var k=new qx.ui.basic.Label(bo);
var j=new qx.bom.Font(12,[bc]);
k.setFont(j);
l.add(k);
this._inputTextField=new qx.ui.form.TextField();
this._inputTextField.setLiveUpdate(true);
this._inputTextField.setDecorator(null);
this._inputTextField.setFont(j);
l.add(this._inputTextField,{flex:1});
this._inputTextField.addListener(O,this._keyDownHandler,this);
this._inputTextField.addListener(Y,this._keyUpHandler,this);
this._inputTextField.addListener(bb,this._keyPressHandler,this);
this._inputTextField.addListener(N,function(e){if(this._autoCompletePopup.isOnScreen()){this._autoCompletePopup.load(e.getData());
}},this);
var n=qx.core.Init.getApplication().getIframeWindowObject();
n.qx.log.Logger.register(inspector.console.Appender);
inspector.console.Appender.consoleView=this;
},members:{setAns:function(ce){this._ans=ce;
},getAns:function(){return this._ans;
},clear:function(){this._content.setHtml(L);
},getObjectById:function(z){return this._objectFolder[z];
},filter:function(q){this._filter=q;
if(qx.core.Variant.isSet(M,S)){var s=document.getElementById(G).childNodes;
}else if(qx.core.Variant.isSet(M,W)){var s=document.getElementById(G).childNodes[0].childNodes;
}else{return ;
}try{var r=new RegExp(this._filter);
for(var i=0;i<s.length;i++){if(qx.core.Variant.isSet(M,bW)){var content=s[i].innerText;
}else{var content=s[i].textContent;
}if(r.test(content)){if(s[i].style!=undefined){s[i].style.display=L;
}}else{if(s[i].style!=undefined){s[i].style.display=bt;
}}}}catch(e){alert("Unable to filter: "+e);
}},chooseAutoCompleteValue:function(){var cy=this._inputTextField.getValue();
var name=this._autoCompletePopup.getCurrentSelection();
if(name){var cx=cy.substring(cy.lastIndexOf(bj)+1);
name=name.substring(cx.length,name.length);
this.appendString(name);
}this._autoCompletePopup.hide();
this._inputTextField.focus();
},appendString:function(cu){if(cu!=null){this._inputTextField.setValue(this._inputTextField.getValue()+cu);
if(this._inputTextField.getValue().lastIndexOf(bX)!=-1){var cv=this._inputTextField.getValue().lastIndexOf(bX)+1;
var cw=this._inputTextField.getValue().length-1;
this._inputTextField.setSelection(cv,cw);
}}},_process:function(cm){this._printText(this._console.escapeHtml(cm));
try{var cn=qx.core.Init.getApplication().getIframeWindowObject();

if(qx.core.Variant.isSet(M,bx)){if(qx.core.Variant.isSet(M,bW)||qx.core.Variant.isSet(M,bV)){cm=cm.replace(/^(\s*var\s+)(.*)$/,bH);
}var co=L;
if(qx.core.Variant.isSet(M,bV)&&qx.bom.client.Engine.FULLVERSION>=528){co=bI+cm+cc;
}else{co=by+cm+cc;
}cn.qx.lang.Function.globalEval([bA,bp,U,co,Q,P,bg,A].join(L));
this.setAns(inspector.$$inspector.call(qx.core.Init.getApplication().getSelectedObject()));
}else if(qx.core.Variant.isSet(M,bF)){this.setAns((function(cj){return cn.eval(cj);
}).call(qx.core.Init.getApplication().getSelectedObject(),cm));
}var cp=this.getAns();

if(cp!=null){if(cp instanceof cn.Error){throw cp;
}this._objectFolder[this._objectFolderIndex]={name:cm,object:cp};
this._printReturnValue(cp);
this._objectFolderIndex++;
}}catch(o){this.error(o);
}},_keyDownHandler:function(e){if(e.getKeyIdentifier()==bS){this._autoCompletePopup.hide();
return;
}if(e.getKeyIdentifier()==T){if(!this._autoCompletePopup.isOnScreen()){this._history.unshift(this._inputTextField.getValue());
this._process(this._inputTextField.getValue());
this._inputTextField.setValue(L);
this._historyCounter=-1;
if(this._history.length>20){this._history.pop();
}}else{this.chooseAutoCompleteValue();
}return;
}if(e.getKeyIdentifier()==E){e.preventDefault();
if(!this._autoCompletePopup.isOnScreen()){if(this._history[this._historyCounter+1]!=undefined){this._historyCounter++;
this._inputTextField.setValue(this._history[this._historyCounter]);
}}return;
}if(e.getKeyIdentifier()==F){e.preventDefault();
if(!this._autoCompletePopup.isOnScreen()){if(this._historyCounter>0){this._historyCounter--;
this._inputTextField.setValue(this._history[this._historyCounter]);
}}return;
}if(e.getKeyIdentifier()==ca){this._ctrl=true;
return;
}if(e.getKeyIdentifier()==bl||e.getKeyIdentifier()==J){if(this._ctrl||e.getKeyIdentifier()==J){e.preventDefault();
if(e.getKeyIdentifier()==J){var self=this;
window.setTimeout(function(){var length=self._inputTextField.getValue().length;
self._inputTextField.setSelection(length,length);
},0);
}try{var cd=qx.bom.element.Location.getLeft(this.getContainerElement().getDomElement());
var top=qx.bom.element.Location.getTop(this._inputTextField.getContentElement().getDomElement())-this._autoCompletePopup.getHeight();
this._autoCompletePopup.open(this._inputTextField.getValue(),cd,top);
var self=this;
window.setTimeout(function(){self._inputTextField.focus();
},0);
}catch(h){this.info(h);
}}return;
}},_keyUpHandler:function(e){if(e.getKeyIdentifier()==ca){this._ctrl=false;
}},_keyPressHandler:function(e){if(this._autoCompletePopup.isOnScreen()){if(e.getKeyIdentifier()==F){this._autoCompletePopup.selectionDown();
}else if(e.getKeyIdentifier()==E){this._autoCompletePopup.selectionUp();
}}},_scrollToLastLine:function(){qx.ui.core.queue.Manager.flush();
var self=this;
window.setTimeout(function(){var b=self._content.getContentElement();
var a=qx.bom.element.Dimension.getContentHeight(self._content.getContentElement().getDomElement());
b.scrollToY(a);
},0);
},_printReturnValue:function(v){var w=qx.core.Init.getApplication().getIframeWindowObject();
if(w&&v instanceof w.qx.core.Object){this._printQxObject(v);
}else if(v instanceof w.Array){var x=this._printArray(v);
var y=this._getLabel(bU+I+this._objectFolderIndex+K+H+x+C,B);
this._content.setHtml(this._content.getHtml()+y);
return;
}else if(w&&(v instanceof w.Object||v==w.window||v==w.document)){var y=this._getLabel(bU+I+this._objectFolderIndex+K+H+v+bm,br);
this._content.setHtml(this._content.getHtml()+y);
return;
}else{var y=this._getLabel(v,bK);
this._content.setHtml(this._content.getHtml()+y);
}this._scrollToLastLine();
},_printQxObject:function(c){var d=this._getLabel(bE+bq+c.toHashCode()+bM+c.classname+bL+c.toHashCode()+R+bR+I+this._objectFolderIndex+K+bh,be);
this._content.setHtml(this._content.getHtml()+d);
this._scrollToLastLine();
},_printText:function(cf){var cg=this._getLabel(bi+cf,bn);
this._content.setHtml(this._content.getHtml()+cg);
this._scrollToLastLine();
},_getLabel:function(cz,cA,cB){var cz=cz;
if(cB==bY||cB==D||cB==cb){var cD=qx.util.ResourceManager.getInstance().toUri(bD+cB+bd);
var cC=bP+cD+bu;
cz=cC+bk+cz;
}cz=bT+cA+H+cz+bB;
return cz;
},_printArray:function(cq){var cr=qx.core.Init.getApplication().getIframeWindowObject();

if(cq instanceof cr.Array){var cs=new qx.util.StringBuilder();
var length=cq.length;
var ct=L;

if(length>2){ct=ba+(length-2)+bv;
length=2;
}
for(var i=0;i<length;i++){if(!cs.isEmpty()){cs.add(X);
}cs.add(this._printArray(cq[i]));
}return bw+cs.get()+ct+bz;
}else{return cq;
}},error:function(ck){if(!this._console.isVisible()){this._console.open();
}var cl=this._getLabel(ck,bJ,D);
this._content.setHtml(this._content.getHtml()+cl);
this._scrollToLastLine();
},warn:function(f){if(!this._console.isVisible()){this._console.open();
}var g=this._getLabel(f,bO,cb);
this._content.setHtml(this._content.getHtml()+g);
this._scrollToLastLine();
},info:function(ch){if(!this._console.isVisible()){this._console.open();
}var ci=this._getLabel(ch,bC,bY);
this._content.setHtml(this._content.getHtml()+ci);
this._scrollToLastLine();
},debug:function(t){if(!this._console.isVisible()){this._console.open();
}var u=this._getLabel(t,bN);
this._content.setHtml(this._content.getHtml()+u);
this._scrollToLastLine();
},dispose:function(){var p=qx.core.Init.getApplication().getIframeWindowObject();
p.qx.log.Logger.unregister(inspector.console.Appender);
}}});
})();
(function(){var L="",K="%",J="18.gif",I=".",H="inspector/images/autocomplete/property_",G="visible",F="function",E="click",D="public",C="^",v="_",B="(",y="#FFFFFF",t="qx.ui.table.pane.Pane",s="protected",x="inspector/images/autocomplete/method_",w="inspector.console.AutoCompletePopup",z="__",r=", ",A="private",u=")";
qx.Class.define(w,{extend:qx.ui.popup.Popup,construct:function(n){arguments.callee.base.call(this);
this._controller=n;
this.setLayout(new qx.ui.layout.VBox());
this.setBackgroundColor(y);
this.setHeight(140);
this.setWidth(300);
qx.core.Init.getApplication().getRoot().add(this);
this._tableModel=new qx.ui.table.model.Simple();
this._tableModel.setColumns([L,F]);
this._table=new qx.ui.table.Table(this._tableModel);
this._table.setWidth(298);
this._table.setHeight(138);
this._table.setShowCellFocusIndicator(false);
this._table.setColumnVisibilityButtonVisible(false);
this._table.setStatusBarVisible(false);
this._table.getTableColumnModel().setColumnWidth(0,22);
this._table.getTableColumnModel().setColumnWidth(1,260);
var o=new qx.ui.table.cellrenderer.Image(18,18);
this._table.getTableColumnModel().setDataCellRenderer(0,o);
this._table.setRowHeight(20);
this.add(this._table);
this._table.addListener(E,function(e){if(e.getTarget().classname==t){this._controller.chooseAutoCompleteValue();
}},this);
},members:{selectionUp:function(){var P=this._table.getSelectionModel().getLeadSelectionIndex();
if(P>0){P--;
}else{P=this._tableModel.getData().length-1;
}this._table.getSelectionModel().addSelectionInterval(P,P);
this._table.setFocusedCell(0,P,true);
},selectionDown:function(){var N=this._table.getSelectionModel().getLeadSelectionIndex();
var O=this._tableModel.getData().length-1;
if(N!=O){N++;
}else{N=0;
}this._table.getSelectionModel().addSelectionInterval(N,N);
this._table.setFocusedCell(0,N,true);
},open:function(l,m,top){this.moveTo(m,top);
this.show();
this.load(l);
},load:function(a){var b=qx.core.Init.getApplication().getIframeWindowObject();
this._table.getSelectionModel().setSelectionInterval(0,0);
this._table.setFocusedCell(0,0,true);
var g=a.substring(a.lastIndexOf(I)+1);
if(a==g){this.hide();
return ;
}else{a=a.substring(0,a.lastIndexOf(I));
}var d=(function(p,q){return b.eval(p);
}).call(qx.core.Init.getApplication().getSelectedObject(),a,this._controller.getAns());
if(!(d instanceof b.Object)){this.hide();
return ;
}if(d instanceof b.qx.core.Object){this._tableModel.setColumnNamesByIndex([L,d.classname]);
}else{this._tableModel.setColumnNamesByIndex([L,a]);
}var h=new RegExp(C+g);
var i=[];
for(var name in d){if(h.test(name)){if(name.substring(0,2)==z){var f=A;
}else if(name.substring(0,1)==v){var f=s;
}else{var f=D;
}if(d[name] instanceof b.Function){var k=name+B;
for(var j=0;j<d[name].length;j++){if(j==d[name].length-1){k+=unescape(K+(61+j));
}else{k+=unescape(K+(61+j)+r);
}}k+=u;
var c=x+f+J;
i.push([c,k]);
}else{var c=H+f+J;
i.push([c,name]);
}}}
if(i.length<1){this._table.getSelectionModel().clearSelection();
}this._tableModel.setData(i);
this._tableModel.sortByColumn(1,true);
},isOnScreen:function(){return this.getVisibility()==G;
},getCurrentSelection:function(){var M=this._table.getSelectionModel().getLeadSelectionIndex();
if(M!=-1){return this._tableModel.getData()[M][1]+L;
}return null;
}}});
})();
(function(){var B="px",A="'></div>",z=".qooxdoo-table-cell-icon {",y="abstract",x="></div>",w="qx.ui.table.cellrenderer.AbstractImage",v=" qooxdoo-table-cell-icon",u="<div></div>",t="no-repeat",s="}",m="  text-align:center;",r="inline-block",p="static",l="top",k="  padding-top:1px;",o="title='",n="string",q="-moz-inline-box";
qx.Class.define(w,{extend:qx.ui.table.cellrenderer.Abstract,type:y,construct:function(){arguments.callee.base.call(this);
var a=arguments.callee.self;

if(!a.stylesheet){a.stylesheet=qx.bom.Stylesheet.createElement(z+m+k+s);
}},members:{__cG:null,__cH:null,_insetY:2,_identifyImage:function(j){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(C){var D=this._identifyImage(C);
if(D==null||typeof C==n){D={url:D,tooltip:null};
}
if(C.width&&C.height){var E={width:C.imageWidth,height:C.imageHeight};
}else{E=this.__cI(D.url);
}D.width=E.width;
D.height=E.height;
return D;
},__cI:function(b){var e=qx.util.ResourceManager.getInstance();
var d=qx.io2.ImageLoader;
var c,f;
if(e.has(b)){c=e.getImageWidth(b),f=e.getImageHeight(b)}else if(d.isLoaded(b)){c=d.getWidth(b);
f=d.getHeight(b);
}else{c=this.__cG;
f=this.__cH;
}return {width:c,height:f};
},_getCellClass:function(F){return arguments.callee.base.call(this)+v;
},_getContentHtml:function(g){var i=this._getImageInfos(g);
var content=u;
if(i.url){var content=qx.bom.element.Decoration.create(i.url,t,{width:i.width+B,height:i.height+B,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?q:r,verticalAlign:l,position:p});
}var h=i.tooltip;

if(h!=null){var content=content.replace(x,o+h+A);
}return content;
}}});
})();
(function(){var c="qx.ui.table.cellrenderer.Image",b="",a="__cL";
qx.Class.define(c,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(f,g){arguments.callee.base.call(this);

if(f){this.__cJ=f;
}
if(g){this.__cK=g;
}this.__cL=qx.util.AliasManager.getInstance();
},members:{__cL:null,__cK:16,__cJ:16,_identifyImage:function(d){var e={imageWidth:this.__cJ,imageHeight:this.__cK};

if(d.value==b){e.url=null;
}else{e.url=this.__cL.resolve(d.value);
}return e;
}},destruct:function(){this._disposeFields(a);
}});
})();
(function(){var u="none",t="text",s="",r="userSelect",q="color",p="String",o="padding",n="0px",m="webkit",l="changeHtml",g="_applyCssClass",k="class",j="qx.ui.embed.Html",f="_applyHtml",e="qx.client",i="border",h="html";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(v){arguments.callee.base.call(this);

if(v!=null){this.setHtml(v);
}},properties:{html:{check:p,apply:f,event:l,nullable:true},cssClass:{check:p,init:s,apply:g},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(a,b){var c=this.getContentElement();
c.setAttribute(h,a||s);
c.setStyle(o,n);
c.setStyle(i,u);
},_applyCssClass:function(w,x){this.getContentElement().setAttribute(k,w);
},_applySelectable:function(d){arguments.callee.base.call(this,d);
if(qx.core.Variant.isSet(e,m)){this.getContainerElement().setStyle(r,d?t:u);
this.getContentElement().setStyle(r,d?t:u);
}},_applyFont:function(A,B){var C=A?qx.theme.manager.Font.getInstance().resolve(A).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(C);
},_applyTextColor:function(y,z){if(y){this.getContentElement().setStyle(q,qx.theme.manager.Color.getInstance().resolve(y));
}else{this.getContentElement().removeStyle(q);
}}}});
})();
(function(){var s=": ",r=", ",q="info",p="{ ",o="]: ",n="ms ",m=" ]",l="map",k="warn",h=" }",e="[ ",g="[",f="inspector.console.Appender",d="string",c="error";
qx.Class.define(f,{statics:{consoleView:null,process:function(a){if(this.consoleView){var b=this.__cM(a);

if(a.level==q){this.consoleView.info(b);
}else if(a.level==k){this.consoleView.warn(b);
}else if(a.level==c){this.consoleView.error(b);
}else{this.consoleView.debug(b);
}}},__cM:function(u){var x=qx.core.Init.getApplication().getIframeWindowObject();
var E=new qx.util.StringBuilder();
var B,D,w,z;
E.add(u.offset,n);

if(u.object){var v=x.qx.core.ObjectRegistry.fromHashCode(u.object);

if(v){E.add(v.classname,g,v.$$hash,o);
}}else if(u.clazz){E.add(u.clazz.classname,s);
}var y=u.items;

for(var i=0,C=y.length;i<C;i++){B=y[i];
D=B.text;

if(D instanceof x.Array){var z=[];

for(var j=0,A=D.length;j<A;j++){w=D[j];

if(typeof w===d){z.push(this.__cN(w));
}else if(w.key){z.push(w.key+s+this.__cN(w.text));
}else{z.push(this.__cN(w.text));
}}
if(B.type===l){E.add(p,z.join(r),h);
}else{E.add(e,z.join(r),m);
}}else{E.add(this.__cN(D));
}}return E.get();
},__cN:function(t){return this.consoleView._console.escapeHtml(t);
}}});
})();
(function(){var m="mshtml",l="pop.push.reverse.shift.sort.splice.unshift.join.slice",k="number",j="qx.type.BaseArray",h="qx.client",g=".";
qx.Class.define(j,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function p(b){if(qx.core.Variant.isSet(h,m)){o.prototype={length:0,$$isArray:true};
var e=l.split(g);

for(var length=e.length;length;){o.prototype[e[--length]]=Array.prototype[e[length]];
}}var f=Array.prototype.slice;
o.prototype.concat=function(){var s=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var r;

if(arguments[i] instanceof o){r=f.call(arguments[i],0);
}else if(arguments[i] instanceof Array){r=arguments[i];
}else{r=[arguments[i]];
}s.push.apply(s,r);
}return s;
};
o.prototype.toString=function(){return f.call(this,0).toString();
};
o.prototype.toLocaleString=function(){return f.call(this,0).toLocaleString();
};
o.prototype.constructor=o;
o.prototype.indexOf=qx.lang.Core.arrayIndexOf;
o.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
o.prototype.forEach=qx.lang.Core.arrayForEach;
o.prototype.some=qx.lang.Core.arraySome;
o.prototype.every=qx.lang.Core.arrayEvery;
var c=qx.lang.Core.arrayFilter;
var d=qx.lang.Core.arrayMap;
o.prototype.filter=function(){var a=new this.constructor;
a.push.apply(a,c.apply(this,arguments));
return a;
};
o.prototype.map=function(){var t=new this.constructor;
t.push.apply(t,d.apply(this,arguments));
return t;
};
o.prototype.slice=function(){var q=new this.constructor;
q.push.apply(q,Array.prototype.slice.apply(this,arguments));
return q;
};
o.prototype.splice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.splice.apply(this,arguments));
return u;
};
o.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
o.prototype.valueOf=function(){return this.length;
};
return o;
}function o(length){if(arguments.length===1&&typeof length===k){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function n(){}n.prototype=[];
o.prototype=new n;
o.prototype.length=0;
qx.type.BaseArray=p(o);
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
(function(){var H="",G="'>",F="inspector/images/spacer.gif",E="</td></tr>",D="</td>",C="</span>",B="'><img class='ins_dom_front_image' src='",A="qx.core.Init.getApplication().inspectObjectByDomSelecet(",z="<tr><td class='",y="</div>",bI=")",bH="</span></td></tr>",bG="string",bF="<div class='ins_dom_no_prop'>No object selected.</div>",bE="<td><span class='ins_dom_null'>",bD="\")",bC="<td class='ins_dom_object'>",bB=", \"",bA="<tr><td class='ins_dom_key'><img class='ins_dom_front_image' src='",bz=".",O="<div class='ins_dom_func'>",P=" &raquo; <span class='ins_dom_return_path_link' onclick='",M="<div class='ins_dom_return_path_main'>",N="<td class='ins_dom_self_ref'>self reference</td></tr>",K="<table class='ins_dom_table'>",L=" more</span> ]",I="'><a onclick='",J="&quot;</span>",U="<td class='ins_dom_string'>&quot;Error occurs by reading value!&quot;</td></tr>",V="Object",bf="inspector/images/open.png",bc="', 'console');\">select Object</u>",bn="toString",bi=", ",bv="<a onclick='",bs="<td class='ins_dom_string'>&quot;",X="<td class='ins_dom_basic'>",by="ins_dom_key_number",bx="<td class='ins_dom_func_object'>",bw="<span class='ins_dom_func_object'>function()</span>",W=")'>",ba="</a>",bb=" ]",be="</a></td>",bg="<span class='ins_dom_basic'>",bj="<div class='ins_dom_no_prop'>There are no properties to show for this object.</div>",bp="&quot;</td></tr>",bu="ins_dom_key",Q="</table>",R="</a> <a style='color: #000000;' onclick=\"qx.core.Init.getApplication().setWidgetByHash('",Y="<span class='ins_dom_object'>",bm=" &raquo; <span class='ins_dom_return_path_selected'>",bl=", ... <span class='ins_dom_array_more'>",bk="[Class ",br="qx_srcview",bq="[ ",bh="Error occurs by reading value!",bo="<pre>",v="appear",bt="]</span>",S="scroll",T="<span class='ins_dom_string'>&quot;",bd="</pre>",w="inspector.console.DomView",x="<span class='ins_dom_object'>[";
qx.Class.define(w,{extend:qx.ui.core.Widget,construct:function(console){arguments.callee.base.call(this);
this._console=console;
this._filter=H;
this._setLayout(new qx.ui.layout.VBox());
this._htmlEmbed=new qx.ui.embed.Html(bF);
this._htmlEmbed.setOverflowY(S);
this._add(this._htmlEmbed,{flex:1});
this.addListenerOnce(v,function(){this._htmlEmbed.getContentElement().getDomElement().id=br;
},this);
this._breadCrumb=[];
},members:{clear:function(){this._htmlEmbed.setHtml(bF);
},setObject:function(r,name){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
this._breadCrumb=[];
var t=name.split(bz);
for(var i=0;i<t.length-1;i++){var u=H;
for(var j=0;j<=i;j++){u+=t[j];
if(j!=i){u+=bz;
}}var s=eval(u);
this._breadCrumb[i]={object:s,name:t[i]};
}name=t[t.length-1];
this._htmlEmbed.setHtml(this._getHtmlToObject(r,i,name));
},setObjectByIndex:function(bJ,bK){this._filter=H;

try{if(bK){var bM=this._breadCrumb[bJ].object[bK];
for(var i=0;i<this._breadCrumb.length;i++){if(this._breadCrumb[i].object==bM){this._htmlEmbed.setHtml(this._getHtmlToObject(bM,i,bK));
this._htmlEmbed.getContentElement().scrollToY(0);
return ;
}}this._htmlEmbed.setHtml(this._getHtmlToObject(bM,(bJ)+1,bK));
this._htmlEmbed.getContentElement().scrollToY(0);
}else{var bM=this._breadCrumb[bJ].object;
var bL=this._breadCrumb[bJ].name;
this._htmlEmbed.setHtml(this._getHtmlToObject(bM,bJ,bL));
this._htmlEmbed.getContentElement().scrollToY(0);
this._breadCrumb.splice(bJ+1,this._breadCrumb.length-bJ+1);
}}catch(e){alert("Can not select this Object: "+e);
}},filter:function(bW){this._filter=bW;
if(this._breadCrumb.length>0){var bX=this._breadCrumb.length-1;
var bY=this._breadCrumb[bX].object;
var name=this._breadCrumb[bX].name;
this._htmlEmbed.setHtml(this._getHtmlToObject(bY,bX,name));
}},getFilter:function(){if(this._filter==H){return inspector.console.Console.SEARCH_TERM;
}else{return this._filter;
}},getCurrentSelectedClassname:function(){if(this._breadCrumb.length>0){var cc=this._breadCrumb[this._breadCrumb.length-1].object;
if(cc.classname!=undefined){if(qx.Class.isDefined(cc.classname)||qx.Interface.isDefined(cc.classname)||qx.Mixin.isDefined(cc.classname)||qx.Theme.isDefined(cc.classname)){return cc.classname;
}}}return null;
},_getHtmlToObject:function(o,f,name){var l=new qx.util.StringBuilder();
if(name==undefined){var name=V;
}this._breadCrumb[f]={object:o,name:name};
l.add(this._getReturnPath(f));
var n=true;
var q=this._sortAndFilterProperties(o);
l.add(K);
for(var i=0;i<q.length;i++){n=false;
l.add(H);
if(!isNaN(q[i].key)){var g=by;
}else{var g=bu;
}try{q[i].value instanceof this._iFrameWindow.Object;
}catch(d){var k=qx.util.ResourceManager.getInstance().toUri(F);
l.add(z+g+B+k+G+this._console.escapeHtml(q[i].key)+D);
l.add(bE+q[i].value+bH);
continue;
}if(!(q[i].value instanceof this._iFrameWindow.Object)&&q[i].value!=this._iFrameWindow.window&&q[i].value!=this._iFrameWindow.document){var k=qx.util.ResourceManager.getInstance().toUri(F);
l.add(z+g+B+k+G+this._console.escapeHtml(q[i].key)+D);
if(q[i].value==null){l.add(bE+q[i].value+bH);
}else if(typeof q[i].value==bG){l.add(bs+this._console.escapeHtml(q[i].value)+bp);
}else{l.add(X+q[i].value+E);
}}else{if(q[i].value instanceof this._iFrameWindow.Function){var h=q[i].value.toString();
if(h.search(/native code/)!=-1){continue;
}}var p=null;

if(p==null){p=new qx.util.StringBuilder();
}else{p.clear();
}if(q[i].value!=o){var k=qx.util.ResourceManager.getInstance().toUri(bf);
p.add(z+g+I+A+f+bB+q[i].key+bD+B+k+G+this._console.escapeHtml(q[i].key)+be);
}if(q[i].value==o){var k=qx.util.ResourceManager.getInstance().toUri(F);
l.add(bA+k+G+q[i].key+D);
l.add(N);
}else if(q[i].value instanceof this._iFrameWindow.Function){l.add(p.get());
if(q[i].value.toString().substr(0,7)==bk){l.add(bC+this._getObject(q[i].value,f,q[i].key)+E);
}else{l.add(bx+this._getObject(q[i].value,f,q[i].key)+E);
}}else{try{var m=this._getObject(q[i].value,f,q[i].key);
l.add(p.get());
l.add(bC+m+E);
}catch(ca){var k=qx.util.ResourceManager.getInstance().toUri(F);
l.add(bA+k+G+q[i].key+D);
l.add(U);
}}}}l.add(Q);
if(n){l.add(bj);
}l.add(this._getFunctionCode(o));
return l.get();
},_getFunctionCode:function(o){if(o instanceof this._iFrameWindow.Function&&!o.hasOwnProperty(bn)){var cb=o.toString();
cb=bo+qx.dev.Tokenizer.javaScriptToHtml(cb)+bd;
return O+cb+y;
}else{return H;
}},_sortAndFilterProperties:function(o){if(this._filter!=H){try{var bN=new RegExp(this._filter);
}catch(e){alert("Unable to filter: "+e);
}}var bO=[];
for(var bP in o){try{if(bN!=null){if(bN.test(bP)){bO.push({key:bP,value:o[bP]});
}}else{bO.push({key:bP,value:o[bP]});
}}catch(c){bO.push({key:bP,value:bh});
}}bO.sort(function(a,b){if(isNaN(a.key)||isNaN(b.key)){return ((a.key<b.key)?-1:((a.key>b.key)?1:0));
}else{return a.key-b.key;
}});
return bO;
},_getReturnPath:function(bU){var bV=new qx.util.StringBuilder();
bV.add(M);
for(var i=0;i<=bU;i++){if(i==bU){bV.add(bm);
}else{bV.add(P+A+i+W);
}bV.add(this._breadCrumb[i].name);
bV.add(C);
}bV.add(y);
return bV.get();
},_getObject:function(bQ,bR,bS){var bT=new qx.util.StringBuilder();
bT.add(bv+A+bR+bB+bS+bD+G);
if(bQ instanceof this._iFrameWindow.Function){if(bQ.toString().indexOf(bI)!=-1){bT.add(bQ.toString().substring(0,bQ.toString().indexOf(bI)+1));
}else{bT.add(bQ.toString());
}}else if(bQ instanceof this._iFrameWindow.Array){bT.add(bq);
for(var j=0;j<2&&j<bQ.length;j++){if(bQ[j] instanceof this._iFrameWindow.Function){bT.add(bw);
}else if(typeof bQ[j]==bG){bT.add(T+bQ[j]+J);
}else if(bQ[j] instanceof this._iFrameWindow.Array){bT.add(x+bQ[j]+bt);
}else if(bQ[j] instanceof this._iFrameWindow.Object){bT.add(Y+bQ[j]+C);
}else{bT.add(bg+bQ[j]+C);
}if(j!=1&&j!=bQ.length-1){bT.add(bi);
}}if(bQ.length>2){bT.add(bl+(bQ.length-2)+L);
}else{bT.add(bb);
}}else if(bQ instanceof this._iFrameWindow.qx.core.Object){bT.add(bQ+R+bQ.toHashCode()+bc);
}else{bT.add(bQ);
}bT.add(ba);
return bT.get();
}}});
})();
(function(){var l="</span>",k="sym",j="nl",h="qxkey",g="ws",f=">",e="qqstr",d="<",c="qstr",b="linecomment",bg="ident",bf="keyword",be="regexp",bd="&",bc="|",bb="fullcomment",ba="atom",Y="\\r\\n|\\r|\\n",X="\\s*\\)*",W="\\s",s="^",t='["][^"]*["]',q="real",r="\\s*[,\\)]",o="<span class='string'>",p="[a-zA-Z_][a-zA-Z0-9_]*\\b",m="<span class='comment'>",n="[+-]?\\d+",w="\\s*\\(*\\s*",x="&nbsp;",F="qx.dev.Tokenizer",D="\\t",M="\\s*\\)*\\s*\\)",H="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",S="\\)*\\.(?:test|exec)\\s*\\(\\s*",Q="<span class='regexp'>",z="int",V="'>",U="<span class='",T="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",y=".",B="\\s*\\)*\\s*?,?",C="[\\(,]\\s*",E="<span class='ident'>",G="g",I="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",N="\\/\\*(?:.|[\\n\\r])*?\\*\\/",R="\n",u="$",v="['][^']*[']",A="tab",L="\\/\\/.*?[\\n\\r$]",K="<br>",J=" ",P="(?::|=|\\?)\\s*\\(*\\s*",O="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bp){var bT={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bG={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bs={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bC=function(bo){return new RegExp(s+bo+u);
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
},javaScriptToHtml:function(bh){var bl=qx.dev.Tokenizer.tokenizeJavaScript(bh);
var bk=new qx.util.StringBuilder();

for(var i=0;i<bl.length;i++){var bm=bl[i];
var bj=qx.bom.String.escape(bm.value);

switch(bm.type){case be:bk.add(Q,bj,l);
break;
case bg:bk.add(E,bj,l);
break;
case b:case bb:bk.add(m,bj,l);
break;
case c:case e:bk.add(o,bj,l);
break;
case bf:case ba:case h:bk.add(U,bm.type,V,bj,l);
break;
case j:var bi=qx.bom.client.Engine.MSHTML?K:R;
bk.add(bi);
break;
case g:var bn=qx.bom.client.Engine.MSHTML?x:J;
bk.add(bn);
break;
default:bk.add(bj);
}}return bk.get();
}}});
})();


if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();

})();